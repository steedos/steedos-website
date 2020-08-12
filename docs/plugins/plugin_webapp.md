---
title: Web App 插件
---

此教程将引导您创建一个基本的Steedos Web插件。

## 什么是Web App 插件
它是华炎魔方项目的前端插件，通过在华炎魔方项目中创建一个Web App项目的方式来开发前端插件。 

## Web App 插件有什么功能
可以通过调用全局函数[window.registerPlugin](./plugin_webapp_functions.md#registerplugin)注册Web App 插件，并在插件内调用各种注册组件函数来实现重写或增强现在华炎魔方项目中已有的UI界面，比如重写门户界面、重写某个对象的首页等。

## 创建插件项目

创建并跳转到webapp文件夹。

```bash
cd {project_root}
mkdir webapp
cd webapp
```

## 初始化插件项目

创建一个 package.json 文件

```json
yarn init
```

## 安装依赖包

```bash
yarn add --dev  @babel/core @babel/preset-env @babel/preset-react babel-loader webpack webpack-cli
yarn add react
yarn add @steedos/react
```

给package.json中添加一个名为build的script，用于webpack打包

> 最后package.json大概内容：
```
{
  "name": "steedos-demo-webapp",
  "version": "1.0.0",
  "license": "MIT",
  "private": true,
  "scripts": {
    "build": "yarn webpack --mode=production"
  },
  "devDependencies": {
    "@babel/core": "^7.6.4",
    "@babel/preset-env": "^7.6.3",
    "@babel/preset-react": "^7.6.3",
    "babel-loader": "^8.0.6",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.9"
  },
  "dependencies": {
    "react": "^16.12.0",
    "@steedos/react": "^1.14.17"
  }
}

## 配置 webpack
```
创建一个 `/webpack.config.js`文件，配置webpack

```js
var path = require('path');

module.exports = {
    entry: [
        './src/index.jsx',
    ],
    resolve: {
        modules: [
            'src',
            'node_modules',
        ],
        extensions: ['*', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react',
                            [
                                "@babel/preset-env",
                                {
                                    "modules": "commonjs",
                                    "targets": {
                                        "node": "current"
                                    }
                                }
                            ]
                        ],
                    },
                },
            },
        ],
    },
    externals: {
        "react": 'React',
        "react-dom": 'ReactDom',
        "redux": 'Redux',
        "react-redux": 'ReactRedux',
        "prop-types": 'PropTypes',
        "@steedos/react": 'ReactSteedos',
        "@salesforce/design-system-react": 'ReactDesignSystem',
    },
    output: {
        path: path.join(__dirname, '..', '/src'),
        publicPath: '/',
        filename: 'webapp.client.js',
    },
};
```

> 注意 `react`、`react-dom`等包被指定为外部包. 这样你可以在本地测试代码 (e.g. with [jest](https://jestjs.io/) and snapshots) ，但是并不会影响到 Steedos 打包的react版本，并且最后也不会输出到`webapp.client.js`文件中，可以有效减少打包后文件大小。

## 注册插件

```bash
mkdir src
touch src/index.jsx
```

编辑 `src/index.jsx`，写入以下内容:

```js
import React from 'react';
import { Provider } from 'react-redux';
import { Bootstrap } from '@steedos/react';

class HelloWorldPlugin {
    initialize(registry, store) {
        const HelloWorldObjectHome = () => (
            <Provider store={store}>
                <Bootstrap>
                    <div>
                        Hello World!
                    </div>
                </Bootstrap>
            </Provider>
        );
        registry.registerObjectHomeComponent(
            'hello_world_object',
            HelloWorldObjectHome
        );
    }
}

window.registerPlugin('com.steedos.hellow-world', new HelloWorldPlugin());
```

> 以上代码注册了一个hellow-world插件，并且该插件调用了`registerObjectHomeComponent`，注册了一个组件显示为`hello_world_object`这个对象的首页。关于[registerObjectHomeComponent](./plugin_webapp_functions.md#registerobjecthomecomponent)及更多插件函数说明请移步：[Web App 插件函数](./plugin_webapp_functions.md)。

## 打包 Webapp

生成打包文件，以便安装到项目中。

```bash
yarn webpack --mode=production
```

或

```bash
yarn build
```

> 正如`webpack.config.js`配置的`output`，打包后会把`index.jsx`文件内容压缩写入到`webapp.client.js`文件中，这也是Webapp插件引入华炎魔方项目的方式。

## 插件配置
部分[Web App 插件函数](./plugin_webapp_functions.md)需要配合相关配置才能生效，比如上面示例中提到的`registerObjectHomeComponent`函数，就需要额外在项目根目录的src文件夹下配置一个对象`*.object.yml`文件，且该对象需要配置到某个app的objects属性中才能被看到，请参考：[registerObjectHomeComponent](./plugin_webapp_functions.md#registerobjecthomecomponent)。

## 插件测试

重新启动 Steedos服务，测试插件效果。

> 注意每次修改`index.jsx`文件后，都需要执行`yarn build`打包才能生效

## 插件效果预览

以上插件示例运行后效果图如下：

![Hello World Demo](/assets/plugins/hello_world.png)