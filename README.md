此项目为：基于[Create React App](https://github.com/facebookincubator/create-react-app)构建的 React 的项目模板。

免费在线前端全套视频地址：[https://qtxh.ke.qq.com/](https://qtxh.ke.qq.com/)

仅用于学习，不能应用于IE8,如果需要加入IE8的支持，请自行降级版本和添加相关垫片。

**前端全栈实习**： [aicoder.com](aicoder.com)  不骗人，高质量的实习机构。

**不8000就业，不用还实习费 **

主要是综合应用了：`React`、`react-router`、`axios`、`redux`、`redux-thunk`、`scss`等，可以作为你学习和使用`React`的基础模板。

## 快速使用

- 快速开发

```sh
# 安装依赖
$ npm instal
# 或者yarn
$ yarn

$ npm start
# 或者，使用yarn
$ yarn start
```

- 打包部署

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
