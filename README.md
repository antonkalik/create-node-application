## Create Node Application

<img src="https://github.com/user-attachments/assets/34134ba1-26a7-4058-9078-45ef68d9d8cc" alt="generate-to-me-a-bag-with-wrench-inside-in-neo-sty" width="300">

[![npm](https://badge.fury.io/js/create-node-application.svg)](https://badge.fury.io/js/create-node-application)
![downloads](https://img.shields.io/npm/dt/create-node-application)
![node](https://img.shields.io/badge/node-18.17.1-green)

[![Release](https://github.com/antonkalik/create-node-application/actions/workflows/release.yml/badge.svg?branch=main)](https://github.com/antonkalik/create-node-application/actions/workflows/release.yml)
![licenses](https://img.shields.io/npm/l/create-node-application)
![contributors](https://img.shields.io/github/contributors/antonkalik/create-node-application)
![last-commit](https://img.shields.io/github/last-commit/antonkalik/create-node-application)
![issues](https://img.shields.io/github/issues/antonkalik/create-node-application)
![pull-requests](https://img.shields.io/github/issues-pr/antonkalik/create-node-application)

A zero-dependency streamlined node js generator tool to bootstrap your Node.js applications. Pre-configured with best practices in mind, integrating powerful developer tools such as ESBuild, TypeScript, ESLint, Prettier, Jest, and more.

![ezgif-5-a1fbf20019](https://github.com/antonkalik/create-node-application/assets/8144055/0048c580-97f5-4a14-aedb-fbd316b40071)

Available frameworks: Express.js, Koa.js. More frameworks will be added soon.

**Note:** Please report any bugs or feature requests.\
**GitHub Link:** [github.com/antonkalik/create-node-application](https://github.com/antonkalik/create-node-application)\
**NPM Link:** [npmjs.com/package/create-node-application](https://www.npmjs.com/package/create-node-application)

## 🌟 Features

- 🚀 **Quick Start:** Spin up new projects in seconds.
- 🛠️ **Integrated Developer Tools:** Comes with ESBuild, TypeScript, ESLint, and Prettier out of the box.
- ✅ **Ready for Testing:** Pre-configured with Jest to jumpstart your testing.
- 📂 **Structured:** Designed with a clean folder structure for scalability.

## 📦 Installation

```bash
npm install -g create-node-application
```

or

```bash
yarn global add create-node-application
```

or use npx:

```bash
npx create-node-application <project-name> [options]
```

## 🚀 Usage

Initiate a new project by:

```bash
create-node-application <project-name> [options]
```

**Example:** Create a new project called `my-project` with Express.js framework:

```bash
create-node-application my-project -framework=express
```

or shorter:

```bash
create-node-application my-project -fw=express
```

For now we have only two frameworks available: `express` and `koa`.
If leave framework option empty, the default framework will be `express`.

After generation `cd my-project`. Installation is not need, just run `npm run dev` or `yarn dev` to start the application.

## ⚒️ Build

Bundler is ESBuild. To build the project run `npm run build` or `yarn build`. The build will be in `dist` folder. For more information about esbuild visit [esbuild](https://esbuild.github.io/).

## 🤝 Contributing

Contributions are welcomed! Open an issue for any bugs or feature requests, or create a Pull Request for any proposed changes.

## 📬 Feedback and Contacts

**Reach out for any queries:**

- GitHub: [github.com/antonkalik](https://github.com/antonkalik)
- Twitter: [@idedycom](https://twitter.com/idedycom)
- Email: [antonkalik@gmail.com](mailto:antonkalik@gmail.com)
- Website: [idedy.com](https://idedy.com)
- LinkedIn: [linkedin.com/in/antonkalik](https://www.linkedin.com/in/antonkalik/)
