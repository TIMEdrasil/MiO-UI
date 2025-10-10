# MiO-UI

[![npm version](https://img.shields.io/npm/v/mio-ui.svg?style=flat-square)](https://www.npmjs.com/package/mio-ui)
[![license](https://img.shields.io/npm/l/mio-ui.svg?style=flat-square)](https://github.com/TIMEdrasil/MiO-UI/blob/main/LICENSE)
[![github stars](https://img.shields.io/github/stars/TIMEdrasil/MiO-UI?style=flat-square)](https://github.com/TIMEdrasil/MiO-UI/stargazers)

[English](./README.md) | [简体中文](./README.zh-CN.md)

> A highly customizable and developer-friendly UI library for Vue.

`MiO-UI` is a Vue 3 component library designed to provide an excellent developer experience. It is engineered to be highly extensible and composable, allowing developers to not only use high-quality base components but also to easily customize and build upon them, even creating their own design systems.

## ✨ Features

* **🧩 Composable Components**: Adheres to the compositional philosophy of Vue 3, with flexible and easy-to-assemble components.
* **🎨 Deep Customization**: Offers a flexible API and CSS variables for easy style adjustments to meet various design needs.
* **🦾 Fully Embraces TypeScript**: Written in TypeScript with complete type definitions.
* **⚡️ Lightweight and Fast**: A small core library with outstanding performance, allowing for worry-free, on-demand imports.
* **🧑‍💻 Developer-Friendly**: A clean API design and clear documentation make it easy to get started.

## 📦 Installation

You can install `MiO-UI` using `npm`, `yarn`, or `pnpm`.

```bash
# NPM
npm install @timedrasil/mio-ui

# Yarn
yarn add @timedrasil/mio-ui

# PNPM
pnpm add @timedrasil/mio-ui
```

## 🚀 Usage

Globally import `MiO-UI` and its styles in your `main.js` or `main.ts` file.

```javascript
// main.js
import { createApp } from 'vue'
import App from './App.vue'

// 1. Import the MiO-UI plugin and its styles
import MioUI from 'mio-ui'
import 'mio-ui/styles.css' // Don't forget to import the styles

const app = createApp(App)

// 2. Register the MiO-UI plugin
app.use(MioUI)

app.mount('#app')
```

Now you can use `MiO-UI` components directly in any of your components.

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
(Note: `<mio-button>` is an example component. Please replace it with the actual component names from your library.)


## 🤝 Contributing

This project is currently not accepting external contributions. However, you are welcome to report bugs or suggest features by creating an [Issues](https://github.com/TIMEdrasil/MiO-UI/issues). Thank you for your interest!

## 📄 License

This project is licensed under the [MIT License](https://github.com/TIMEdrasil/MiO-UI/blob/main/LICENSE).

---
Made with ❤️ by [TIMEdrasil](https://github.com/TIMEdrasil)