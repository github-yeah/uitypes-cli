#

前置： 本工具暂时只支持fariygui的组件类型生成

安装：

```bash
# 全局安装
npm install uitypes-cli -g

# 本地安装，可以用 npx uitypes
npm install uitypes-cli --save
```

使用：

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

## 未完待续

1. 新增dts压缩选项设置
2. 递归寻找类型
