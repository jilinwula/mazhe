---
title: "React 是什么"
weight: 1
---

## React 简介

React 是由 Meta（原 Facebook）开发并维护的 JavaScript 库，用于构建用户界面。它于 2013 年开源，目前已成为最流行的前端框架之一。

## 核心概念

### 组件化

React 的核心思想是**组件化**。将 UI 拆分为独立、可复用的组件：

```jsx
function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
    </div>
  );
}
```

### JSX

JSX 是 JavaScript 的语法扩展，让你可以在 JS 中写 HTML 结构：

```jsx
const element = <h1 className="greeting">Hello, world!</h1>;
```

编译后等价于：

```js
const element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');
```

### 单向数据流

数据从父组件流向子组件，通过 `props` 传递，保证数据流向的可预测性。

## 快速开始

使用 Vite 创建 React 项目：

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```
