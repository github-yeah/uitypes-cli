#

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
2. 第二种方式是先通过 `uitypes settings --input 绝对路径-你的ui项目目录`来进行本地设置，然后再 `uitypes compile` 不需要加其他参数

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

// 获取模糊类型的子对象 btn
// 此时的child是个fairygui.GObject，但是上文的类型里面btn是fairygui.GButton
const child = view.getChild('btn');    // 当调用getChild时，参数会自动提示 'btn' | 'flag'
// 通过asButton来转换
const btn = child.asButton;

// 通过把参数当成const类型来确定child的返回类型
 // 此时不但有代码提示，并且返回值类型也会自动转换成fairygui.GButton类型
const childBtn = view.getChild<'btn'>('btn');  // typeof chilBtn === fairygui.GButton;

// 同理，我们可以获取flag的title，并设置其text内容
// 下面的代码调用链，每个都是有代码提示并且能够明确返回类型
myView.getChild<'flag'>('flag').getChild<'title'>("title").text = '代码提示和返回类型都是确定的!';

// 如果此时你通过编辑器删除了flag这个子对象，发布后重新生成UITypes后
// 编辑器辉自动检测出错误并给出提示，而不是在运行时阶段，通过空指针的异常来提示你

```

## 未完待续

1. 新增dts压缩选项设置
2. 是否去掉引用组件的扩展类型，这样getChild的时候不需要确定const类型的属性名，也可以获取到非常明确地返回类型
