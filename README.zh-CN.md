# MiO-UI

[![npm version](https://img.shields.io/npm/v/mio-ui.svg?style=flat-square)](https://www.npmjs.com/package/mio-ui)
[![license](https://img.shields.io/npm/l/mio-ui.svg?style=flat-square)](https://github.com/TIMEdrasil/MiO-UI/blob/main/LICENSE)
[![github stars](https://img.shields.io/github/stars/TIMEdrasil/MiO-UI?style=flat-square)](https://github.com/TIMEdrasil/MiO-UI/stargazers)

[English](./README.md) | [简体中文](./README.zh-CN.md)

> 一个为Vue打造的、高度可定制且对开发者友好的UI库

`MiO-UI` 是一个旨在提供极致开发体验的 Vue 3 组件库。它被设计为高度可扩展和可组合的，让开发者不仅能使用高质量的基础组件，还能轻松地在其之上进行二次开发，甚至构建自己的设计系统

## ✨ 特性

* **🧩 可组合的组件**: 遵循 Vue 3 的组合式思想，组件设计灵活，易于拼装
* **🎨 深度定制化**: 提供灵活的 API 和 CSS 变量，轻松调整样式，满足各种设计需求
* **🦾 全面拥抱 TypeScript**: 使用 TypeScript 编写，提供完整的类型定义
* **⚡️ 轻量快速**: 核心组件库体积小，性能卓越，按需引入无负担
* **🧑🧑‍💻 开发者友好**: 简洁的 API 设计和清晰的文档，让你上手无忧

## 📦 安装

你可以使用 `npm`、`yarn` 或 `pnpm` 来安装 `MiO-UI`

```bash
# NPM
npm install mio-ui

# Yarn
yarn add mio-ui

# PNPM
pnpm add mio-ui
```

## 🚀 快速开始

在你的 `main.js` 或 `main.ts` 文件中全局引入 `MiO-UI` 和它的样式

```javascript
// main.js
import { createApp } from 'vue'
import App from './App.vue'

// 1. 引入 MiO-UI 插件和样式
import MioUI from 'mio-ui'
import 'mio-ui/styles.css' // 别忘了引入样式

const app = createApp(App)

// 2. 注册 MiO-UI 插件
app.use(MioUI)

app.mount('#app')
```

现在你就可以在你的任何组件中直接使用 `MiO-UI` 的组件了

```vue
<template>
  <div style="width:100%; height: 100%;">
      <mio-button style="margin-right: 10PX;">Default</mio-button>
      <mio-button radius="small" style="margin-right: 10PX;">Radius Small</mio-button>
      <mio-button radius="medium" style="margin-right: 10PX;">Radius Medium</mio-button>
      <mio-button radius="large" style="margin-right: 10PX;">Radius Large</mio-button>
      <mio-button :disabled="true" style="margin-right: 10PX;">Disabled</mio-button>
  </div>
</template>
```
(注意: 上述代码中的`<m-button>`是一个示例组件名，请替换为你库中实际的组件名)

## 🤝 贡献

本项目目前不接受外部贡献 (Pull Request)。但是，我们非常欢迎你通过提交 [Issues](https://github.com/TIMEdrasil/MiO-UI/issues) 来报告Bug或提出功能建议，感谢你的关注！

## 📄 许可证

该项目基于 [MIT License](https://github.com/TIMEdrasil/MiO-UI/blob/main/LICENSE) 许可证开源

---
由 [TIMEdrasil](https://github.com/TIMEdrasil) 用❤️制作