#

## 工程

### 工程安装

```bash
# 安装依赖
npm install
```

### 脚本命令

```bash
# 构建
npm run build
```

### 开发调试

使用`vscode`可以直接`F5`调试

自动构建：

```bash
# 开发模式
npm run dev
```

## 前置： 本工具暂时只支持fariygui的组件类型生成

## 目的

1. 解决获取子对象时没有代码提示（提示子对象的具体属性名字）
2. 解决获取子对象的类型不明确的问题
3. 解决通过编辑器修改组件并发布后，项目代码不自动提示错误
4. 把运行时阶段的空指针报错提前到编译阶段，这样能防止更多的逻辑错误

### 为什么把错误提前到编译阶段

假设有一个按钮点击后在舞台添加一个通用组件。

某一天这个被多个组件引用的通用组件被别人删除了，ui编辑器发布后，他的项目代码在编译阶段并不会报错。

而是等他在运行时点击按钮才会报错（比如：空指针异常）。

但是如果再运行时阶段，他并没有点击按钮呢？这个报错就会被忽略掉！

直到某一天另一个人更新了他的代码然后启动程序，点击了这个按钮，BOOM！！！

使用明确的类型可以完全把这些错误提前到编译阶段，也就是说你的ui编辑器发布后，生成一下types。

你的业务逻辑代码会在编辑器内提前展示出这些错误！

## 安装

```bash
# 全局安装
npm install uitypes-cli -g

# 本地安装，可以用 npx uitypes 调用
npm install uitypes-cli --save
```

## 设置

1. 第一种方式是通过 `uitypes compile --input 绝对路径-你的ui项目目录`进行编译
2. 第二种方式是先通过 `uitypes settings --input 绝对路径-你的ui项目目录`来进行本地设置，然后再 `uitypes compile` 不需要加其他参数（推荐）

## 常用指令

```bash
# 输出基本信息
uitypes
# 本地设置
uitypes settings -h
# 查看本地设置
uitypes settings

# 编译
uitypes compile -h

# 根据根目录编译
uitypes compile

# 编译 指定的包
uitypes compile uipkg1 uipkg2
```

## 在项目中使用（以`fairygui`为例）

```ts
// 通过命令生成的 `uit.types.d.ts`文件（局部代码）
declare namespace uit {
    namespace test {
		namespace components {
			type TestComponent = fairygui.GComponent & __UIComponent<{
				flag: components.TestFlag;
				btn: fairygui.GButton;
			}, 'abv' | 'def' | 'c1', 't0' | 'tr2'>;
			type TestFlag = fairygui.GLabel & __UIComponent<{
				title: fairygui.GTextField;
				hel: fairygui.GTextField;
			}, string, string>;
		}
	}
}
```

```ts

// 创建一个自定义的组件，并通过as来转换成生成的类型
const view = fairygui.UIPackage.createObject('test', 'TestComponent') as uit.test.components.TestComponent;

// 当调用getChild时，参数会自动提示 'btn' | 'flag'； 
const child = view.getChild('btn');    // typeof child === fairygui.GObject，可以通过child.asButton来转换

// 当调用getChild时，参数会自动提示 'btn' | 'flag'；传入第二个参数等价于： view.getChild('btn').asButton
const typedChild = view.getChild('btn', true); // typeof typedChild === fairygui.GButton

// 补充说明： getChild的第二个参数其实并没有实际用处，只是用来确定返回类型的
// 原因: 'btn'即是常量又是字符串，传入此参数后返回值为 fairygui.GObject（getChild方法默认返回的类型）
// 这样的话跟我们的预期不相符
// 另一种方式是 view.getChild<'btn'>('btn')，倒是也能返回明确类型的返回值，但是这么些比较麻烦
// 为了实现简洁的调用api，因此加了第二个参数，只要传递了第二个参数，返回值肯定是明确类型的

// 同理，我们可以获取flag的title，并设置其text内容
view.getChild("flag", true).getChild("title", true).text = '有代码提示且返回类型都是确定的!';

// 如果此时你通过编辑器删除了flag这个子对象，发布后重新生成UITypes后
// 编辑器辉自动检测出错误并给出提示，而不是在运行时阶段，通过空指针的异常来提示你

```

## 插件

- 如果你使用的是新版本的编辑器，请自行编写插件调用uitypes-cli命令
- 如果你使用的老版本的编辑器，请去项目仓库找到plugins目录，复制里面的插件到你的编辑器的插件目录（重启编辑器，工具-发布UITypes，按照步骤来就行了）

## 未完待续

1. 新增dts压缩选项设置
