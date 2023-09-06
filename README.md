## Create Node Application

![create-node-application](https://github.com/antonkalik/create-node-application/assets/8144055/61bda9b1-576c-4dcf-b428-e2a10b3bf147)<svg width="90" height="87" viewBox="0 0 90 87" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.69922 21.2012H84.5969V84.6493C84.5969 85.9471 83.5448 86.9992 82.2469 86.9992H7.04915C5.75132 86.9992 4.69922 85.9471 4.69922 84.6493V21.2012Z" fill="#59B6E6"/>
<path d="M0 4.75227C0 3.45444 1.0521 2.40234 2.34993 2.40234H86.9474C88.2453 2.40234 89.2974 3.45444 89.2974 4.75227V18.8519C89.2974 20.1497 88.2453 21.2018 86.9474 21.2018H2.34993C1.0521 21.2018 0 20.1497 0 18.8519V4.75227Z" fill="#59B6E6"/>
<path d="M4.69922 14.1527C4.69922 12.8548 5.75132 11.8027 7.04915 11.8027H82.2469C83.5448 11.8027 84.5969 12.8548 84.5969 14.1527V21.2025H4.69922V14.1527Z" fill="#3E8AC5"/>
<path d="M35.248 2.40267C35.248 1.10484 36.3001 0.0527344 37.598 0.0527344H51.6976C52.9954 0.0527344 54.0475 1.10483 54.0475 2.40266V30.6018C54.0475 31.8997 52.9954 32.9518 51.6976 32.9518H37.598C36.3001 32.9518 35.248 31.8997 35.248 30.6018V2.40267Z" fill="#95DBFF"/>
</svg>

[![npm version](https://badge.fury.io/js/create-node-application.svg)](https://badge.fury.io/js/create-node-application)
![Node version](https://img.shields.io/badge/node-18.17.1-green)

A zero-dependency streamlined node js generator tool to bootstrap your Node.js applications. Pre-configured with best practices in mind, integrating powerful developer tools such as ESBuild, TypeScript, ESLint, Prettier, Jest, and more.

![ezgif-5-a1fbf20019](https://github.com/antonkalik/create-node-application/assets/8144055/0048c580-97f5-4a14-aedb-fbd316b40071)

Available frameworks: Express.js, Koa.js. More frameworks will be added soon.
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

```angular2html
create-node-application <project-name> [options]
```

**Example:** Create a new project called `my-project` with Express.js framework:

```angular2html
create-node-application my-project -framework=express
```

or shorter:

```angular2html
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
