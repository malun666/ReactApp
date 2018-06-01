此项目为：基于[Create React App](https://github.com/facebookincubator/create-react-app)构建的 React 的项目模板。

主要是综合应用了：`React`、`react-router`、`axios`、`redux`、`redux-thunk`、`scss`等，可以作为你学习和使用`React`的基础模板。

## Table of Contents

* [目录结构](#folder-structure)
* [NPM Scripts](#available-scripts)
  * [npm start](#npm-start)
  * [npm run build](#npm-run-build)
* [开发](#如何使用)

## 如何使用

* 启动开发

```sh
$ npm start
# 或者，使用yarn
$ yarn start
```

* 打包部署

```sh
$ npm run build
# 或者，使用yarn
$ yarn run build
```

## 目录结构

```diff
── README.md                              --- 说明
├── build                                 --- 自动构建的目录
├── config
│   ├── env.js
│   ├── jest
│   ├── paths.js
│   ├── polyfills.js
│   ├── webpack.config.dev.js
│   ├── webpack.config.prod.js
│   └── webpackDevServer.config.js
├── package.json
├── public                                --- 静态根目录
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── scripts
│   ├── build.js
│   ├── start.js
│   └── test.js
├── src
│   ├── App.js
│   ├── App.scss
│   ├── App.test.js
│   ├── actions                           --- action
│   │   ├── index.js
│   │   └── stuAction.js
│   ├── components                        --- 组件
│   │   ├── List.js
│   │   └── RouteWithSubRoutes.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reducers
│   │   ├── index.js
│   │   └── stuList.js
│   ├── registerServiceWorker.js
│   ├── routes                              --- 路由
│   │   └── index.js
│   ├── store                               --- redux的store
│   │   └── index.js
│   ├── util
│   └── view                                --- 视图目录
│       ├── Stu.css
│       ├── Stu.js
│       └── Stu.scss
├── yarn-error.log
└── yarn.lock
```
