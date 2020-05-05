---
title: Web App 插件函数
---

此教程将引导您使用基本的Steedos Web插件函数实现丰富的前端组件功能。

## 插件类
插件类中可以定义initialize函数，华炎魔方项目会通过该函数来“初始化”您的插件。
```js
import React from 'react';
import { Provider } from 'react-redux';
import { Bootstrap } from '@steedos/react';

class HelloWorldPlugin {
    initialize(registry, store) {
        // 调用registry.registerObjectHomeComponent等各种组件注册函数来重写或增强UI功能
    }
}
```

### registerPlugin
该函数可以向华炎魔方项目中注册一个Web App插件。
```js
import React from 'react';
import { Provider } from 'react-redux';
import { Bootstrap } from '@steedos/react';

class HelloWorldPlugin {
    initialize(registry, store) {
        // 调用registry.registerObjectHomeComponent等各种组件注册函数来重写或增强UI功能
    }
}

window.registerPlugin('com.steedos.xxx', new HelloWorldPlugin());
```

## Registry

Registry是每个插件注册后的实例，通过插件类的“initialize”回调函数传递给每个插件，我们为每个实例提供了各种注册组件函数来重写或增强华炎魔方项目的UI界面。

### registerObjectHomeComponent
该函数注册一个组件显示为某个对象的首页。
```js
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
```

要想以上代码生效，还需要在项目根目录的src文件夹下配置一个hello_world_object对象。

helloworld.object.yml:
```js
name: hello_world_object
label: Hellow World
icon: home
fields:
  name:
    label: name
    type: text
```

且该对象需要配置到某个app的objects属性中才能被看到。

oa.app.yml:
```js
_id: oa
name: 华炎办公
description: '云办公平台，实现实时在线审批。'
icon_slds: groups
is_creator: true
sort: 100
objects: 
  - hello_world_object
  - instances
  - cms_posts
  - announcements
  - space_users
  - tasks
  - events
```

> 该函数运行后效果图如下：

![Hello World Demo](/assets/plugins/hello_world.png)


### registerObjectIFrameHomeComponent
该函数注册一个iframe组件显示为某个对象的首页，可以配置iframe指向的ip地址。
```js
registry.registerObjectIFrameHomeComponent(
    'baidu',
    "https://www.baidu.com/"
);
```
第二个参数也可以是一个函数，好处是在一些复杂场景下有多个对象需要配置iframe时，可以把url规则统一到函数中。
```js
let getObjectIFrameHomeUrl = ()=>{
    ...
    return "https://www.baidu.com/";
}
registry.registerObjectIFrameHomeComponent(
    'baidu',
    getObjectIFrameHomeUrl
);
registry.registerObjectIFrameHomeComponent(
    'zhihu',
    getObjectIFrameHomeUrl
);
```
该函数还支持传入第三个参数重写整个iframe组件的界面，比如在iframe外面加入个性化界面元素。
```js
import * as React from 'react';
import store from "../../stores/configureStore";
import Bootstrap from '../bootstrap';
import { Provider } from 'react-redux';
import styled from 'styled-components';

let IFrameContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
`;

let IFrame = styled.iframe`
    margin: 1rem 1rem 0 1rem;
    flex: 1;
    border-radius: .25rem .25rem 0 0;
`;

//props中已传入src属性
const CustomIFrame = ({ children, ...props }) => (
    <Provider store={store}>
        <Bootstrap>
            <IFrameContainer>
                // ...这里在iframe外面加入个性化元素
                <IFrame {...props}></IFrame>
            </IFrameContainer>
        </Bootstrap>
    </Provider>
);

registry.registerObjectIFrameHomeComponent(
    'baidu',
    "https://www.baidu.com/",
    CustomIFrame
);
```

跟`registerObjectHomeComponent`函数一样，要想以上代码生效，还需要在项目根目录的src文件夹下配置一个object_iframe_demo对象，且该对象同样需要配置到某个app的objects属性中才能被看到。

> 该函数运行后效果图如下：

![Hello World Demo](/assets/plugins/object_baidu.png)

### registerDashboardComponent
该函数注册一个门户组件，并且显示为指定APP的主页。
```js
const DashboardComponentDemo = () => (
    <Provider store={store}>
        <Bootstrap>
            <div>
                Web App 插件函数 registerDashboardComponent效果测试!
            </div>
        </Bootstrap>
    </Provider>
);
registry.registerDashboardComponent(
    ["oa", "crm", "contracts"],
    DashboardComponentDemo
);
```

- 以上代码会把`oa, crm, contracts`这三个APP的主页显示为DashboardComponentDemo组件定制的效果。
- 需要注意的是APP的主页除了可以在插件中调用registerDashboardComponent来实现外，另外还有两种方式可以配置，且它们的优先级都更高，优先次序为：数据库中定义的门户配置、项目src中yml配置文件定义的门户配置、插件中自定义组件的门户配置。

> 该函数运行后效果图如下：

![Hello World Demo](/assets/plugins/dashboard.png)


### registerDashboardIFrameComponent
该函数注册一个iframe组件显示为某些App的主页，可以配置iframe指向的ip地址。
```js
registry.registerDashboardIFrameComponent(
    ["contracts"],
    "https://www.baidu.com/"
);
```

与[registerObjectIFrameHomeComponent函数](./plugin_webap_functions.md#registerObjectIFrameHomeComponent)一样，第二个参数也可以是一个函数，也支持传入第三个参数重写整个iframe组件。

> 该函数运行后效果图如下：

![Hello World Demo](/assets/plugins/app_baidu.png)


## 导出

我们在[window](https://developer.mozilla.org/en-US/Web/API/Window)对象上导出了许多库和函数，供插件使用。为了避免插件膨胀，我们建议使用[Webpack externals](https://webpack.js.org/configuration/externals/)。以下是公开的库和函数列表:

| Library | Exported Name | Description |
| ------- | ------------- | ----------- |
| react | window.React | [ReactJS](https://reactjs.org/) |
| react-dom | window.ReactDOM | [ReactDOM](https://reactjs.org/react-dom.html) |
| redux | window.Redux | [Redux](https://redux.js.org/) |
| react-redux | window.ReactRedux | [React bindings for Redux](https://github.com/reactjs/react-redux) |
| prop-types | window.PropTypes | [PropTypes](https://www.npmjs.com/package/prop-types) |
| styled-components | window.StyledComponents | [StyledComponents](https://www.npmjs.com/package/styled-components) |
| redux-thunk | window.ReduxThunk | [ReduxThunk](https://www.npmjs.com/package/redux-thunk) |
| immer | window.Immer | [Immer](https://www.npmjs.com/package/immer) |
| ts-odata-client | window.TSODataClient | [TSODataClient](https://www.npmjs.com/package/ts-odata-client) |
| node-fetch | window.NodeFetch | [NodeFetch](https://www.npmjs.com/package/node-fetch) |
| @steedos/react | window.ReactSteedos | Steedos react components and utility functions [ReactSteedos](https://www.npmjs.com/package/@steedos/react) |
| @salesforce/design-system-react | window.ReactDesignSystem | Salesforce react components and utility functions [ReactDesignSystem](https://www.npmjs.com/package/design-system-react)|
| @steedos/filters | window.SteedosFilters | Steedos filters and utility functions [SteedosFilters](https://www.npmjs.com/package/@steedos/filters) |
| registerPlugin | window.registerPlugin | [window.registerPlugin](./plugin_webapp_functions.md#registerplugin) |
