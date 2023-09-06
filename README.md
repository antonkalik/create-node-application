## Create Node Application

**_Node.js Project Generator Tool_**

![Optional Project Banner](./path-to-banner-image.png)

A zero dependency streamlined tool to bootstrap your Node.js applications. Pre-configured with best practices in mind, integrating powerful developer tools such as ESBuild, TypeScript, ESLint, Prettier, Jest, and more.

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

- GitHub: github.com/antonkalik
- Twitter: @idedycom
- Email: antonkalik@gmail.com
