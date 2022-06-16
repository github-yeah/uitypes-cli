# 简介

## Vite + Nestjs + ts项目引用 + 前后端分离

## 使用

### 安装

```bash
npm install
```

### 构建

```bash
# 全部构建
npm run build
# 构建客户端
npm run build:client
# 构建服务端
npm run build:server
```

### 启动

```bash
# 启动客户端 http://localhost:3000/
npm run dev:client
# 启动服务端 http://localhost:4000/
npm run dev:server
```

### 注意

`tsconfig.paths`映射的`alias路径别名`：tsconfig.json.paths只做映射，不做编译处理，可以安装`tsconfig-paths`包进行处理
