#

## 前置： 本工具暂时只支持fariygui的组件类型生成

## 安装

```bash
# 全局安装
npm install uitypes-cli -g

# 本地安装，可以用 npx uitypes 调用
npm install uitypes-cli --save
```

## 使用

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
// 通过命令生成的 `uit.types.d.ts`文件

declare namespace uit {
    namespace test {
        interface TestView {
            loader: fairygui.GLoader;
            value2: fairygui.GImage;
        }
    }
}
```

```ts
// 组件类型转换器
function cast<T>(provider: (key: string) => any) {
    return <K extends keyof T>(name: K): T[K] | undefined => {
        return provider(name as string);
    };
}

```

```ts
// 假设存在一个view
const view = fairygui.UIPackage.createObject('test', 'TestView');

// 转换成getter
const viewChildOf = cast<uit.test.TestView>(
    key => view.getChild(key)
);

// 此处会有代码提示，并且loader的类型是确定的
const loader = viewChildOf("loader");
```

## 未完待续

1. 新增dts压缩选项设置
2. 递归寻找类型｛1. 剔除内容为空的接口 2. 获取引用组件的 extension属性作为引用类型｝
