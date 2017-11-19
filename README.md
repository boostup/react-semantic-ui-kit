# React Semantic UI Kit

A responsive UI kit based on [Semantic UI for React](https://react.semantic-ui.com/introduction).  

## Current status

As it stands today, this kit will consist of around a dozen UI components.  Please refer to the [_Components_](https://github.com/boostup/react-semantic-ui-kit#components) section of the [_Roadmap_](https://github.com/boostup/react-semantic-ui-kit#roadmap). Approximately a third of them are at a "new born" stage.  Meaning, there is no error handling or edge case management. However, given the [relatively painless learning curve with React](https://hackernoon.com/react-vs-polymer-83b4375a5a42), and since we'll be building our components on top of very mature and stable UI library, I don't anticipate a lot work on those aspects.  The rest of the components are yet to be implemented.


## Vision
The idea is to build a UI kit which provides support to chrome/blink on desktop and touch devices as **the first global milestone**. Then, React Native as **the second one**.  However, I personally am only just starting with React, so I know next to nothing about the specifics of React Native.  It does need to be taken into account since the beginning of this project though.

The vision is to compose a UI Kit which allows for rapid prototyping to blow your (potential) clients' mind or knock your boss' socks off on how quickly you can put something together.  

This UI Kit could simply help you build POCs or apps for your own personal use quickly, especially when coupled with the [demo site features](https://github.com/boostup/react-semantic-ui-kit#features) which are based on [Create React App](https://github.com/boostup/react-semantic-ui-kit) and [the most common pakage dependencies](https://github.com/boostup/react-semantic-ui-kit#main-dependencies) when developing with React.
  
This doesn't feel so far fetched given [the rich component library](https://react.semantic-ui.com/introduction) that Semantic UI has brought to the community.

## Composition vs Inheritance
This project shouldn't be extremely long or difficult.  The tasks here consist in developping new components on top of existing ones found in the Semantic UI React component library.  Most of the work should be achievable mainly through composition.
_[Please read section 'composition vs inheritance' from the React documentation.](https://reactjs.org/docs/composition-vs-inheritance.html)_



## Motivations

 - A comprehensive, stable UI component library that goes beyond standard components.
 - [React Bootstrap](https://react-bootstrap.github.io/) and [Material Design for React](https://github.com/callemall/material-ui) are really not mature enough compared to Semantic UI's kit.  A fellow developer has recommanded Semantic UI React instead, and I fell in love at first sight.
 - [RMWC - React wrapper for Material Design (Web) Components](https://jamesmfriedman.github.io/rmwc/) is an exiting project I just found out about.  A new repository to create the same components as in this project but based on RMWC this time is probably interesting to consider. 
 - I want to get familiar with React, Semantic UI React, and RMWC by developping this UI kit.


---

## Installation

```shell {.line-numbers}
    npm install @source360/react-semantic-ui-kit --save
```

---


## Usage

Inside their respective directory, every UI component includes an ```api.md``` file.  
As time goes by, an [Interactive Component Catalog](https://github.com/boostup/react-semantic-ui-kit#interactive-component-catalog) should replace them.  However, if a component is not yet in the catalog, then at least its api file should be present to provide usage and demo information to coders who wish to use it early.

---

## Demo site

_This section might disappear in favor of the the [Interactive Component Catalog](https://github.com/boostup/react-semantic-ui-kit#interactive-component-catalog)_. However, the demo site contains implemented features which help put real working apps together really quickly.

### NPM Scripts

#### npm start

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.  



#### npm test

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests) for more information.



#### npm run build

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment) for more information.


### Features

These are the features of the demo site.  It's purpose is to show off the components in action.

- [Webpack](https://webpack.github.io/docs/)
- Live reload of code (CSS/JS/JSX)
- Babel for ES7 presets (async/await) ([see all supported language features here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#supported-language-features-and-polyfills))
- [CSS imports using regular ES6 import statements](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#buttonjs-1)
- [Adding Images, Fonts, and Files](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-images-fonts-and-files)
- [Code Splitting](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#code-splitting)
- [Integrated debugging for Atom & VS Code](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#debugging-in-the-editor)
- [Testing](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#testing-components)
- [See the Create React App TOC for full feature details](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#table-of-contents)
- [Markdown Preview Enhanced (code editor extension) diagrams documentation](https://shd101wyy.github.io/markdown-preview-enhanced/#/diagrams)
    - [for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)
    - [for Atom](https://atom.io/packages/markdown-preview-enhanced)



### CSS pre-processor
The guys at [Create React App provide sensible reasons](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc) for not needing any CSS pre-processor, and I tend to agree. Of course, this can be openly discussed.

### Node.js requirement

According to [node.green](http://node.green/), versions 6.5.0 to 6.12.0 are fully featured in terms of ES6/ES7 syntax.

**Therefore, Node.js v6.5.0 is the minimum requirement**.

### Main dependencies
- [React]()
- [Redux](https://redux.js.org/)
- [Semantic UI for react](https://react.semantic-ui.com/introduction)
- [React Router v4](https://reacttraining.com/react-router/web/guides/quick-start)
- [React scripts](https://github.com/facebookincubator/create-react-app/tree/master/packages/react-scripts)
- [React Loadable](https://github.com/thejameskyle/react-loadable)
- ...

_Please refer to the **package.json** file for a complete list._

---

## Contributing

Please do get in touch if you're interested in participating: boostup@gmail.com

---

## Todos

 - Get familiar with [Catalog.style](https://www.catalog.style/try):
     - https://www.catalog.style/try
     - https://docs.catalog.style/installation/module
     - https://docs.catalog.style/configuration/imports 
 
 - Studies on existing UI Kits:
     - [x] (read) [React Vs Polymer – Hacker Noon](https://hackernoon.com/react-vs-polymer-83b4375a5a42)
     - [ ] [React wrapper for Material Design (Web) Components](https://jamesmfriedman.github.io/rmwc/) -> this is great!  Can't wait to test it out.
     - [ ] [React components that implement Google's Material Design.]( https://github.com/callemall/material-ui) -> needs to be tested also
     - [ ] [polymer with react - Google Search](https://www.google.fr/search?ei=7gYPWunJMefFgAbB_L3YCQ&q=polymer+with+react&oq=polymer+with+react&gs_l=psy-ab.3..0j0i30k1l2j0i5i30k1j0i8i30k1l5.215113.216899.0.217469.3.3.0.0.0.0.114.297.2j1.3.0....0...1.1.64.psy-ab..0.3.295...0i7i30k1j0i13k1j0i13i30k1j0i13i5i30k1.0.A_ywycXqhFs)
     - [ ] [jscissr/react-polymer: Use Polymer elements in React](https://github.com/jscissr/react-polymer)
     - [ ] [Polymer vs. React](https://www.upwork.com/hiring/development/polymer-vs-react/)
     - [ ] https://www.webcomponents.org/
     - [ ] https://www.polymer-project.org/
     - [ ] https://www.webcomponents.org/community/articles/a-quick-polymer-introduction
     - [ ] https://medium.com/@oneeezy/frameworks-vs-web-components-9a7bd89da9d4
     - [ ] [Slim.js](http://slimjs.com/): Very light-weight Web Components library
   
---
 
## Roadmap

### Components Directory
All UI components will be located at ```[root directory]/src/ui-kit/```.

### Components

Component | Directory | Status | Comments
------------ | -------------  | ------------- | -------------  
ActiveNavItem | activenavitem/ | **tbd** |
AvailableProps | availableprops/ | ready |
ElementLoader | elementloader/ | ready | 
HyperLinkable | hyperlinkable/ | **tbd** | prototype on [Codesandbox](https://codesandbox.io/s/40vx21xlp0)
LoadableChunk | bundle/ | ready |
LoaderWidget | bundle/ | ready |
ImageLoader | imageloader/ | ready |
InfiniteScroll | infinitescroll/  | **tbd** | Here, I'd like to try [this infinite-scroll package](https://www.npmjs.com/package/react-infinite-scroll-component) out.  Of course, it would be better to compose it with Semantic UI existing components such as _Visibility_ for isntance.
IronDropdown | irondropdown/ | **tbd** |  Can the [Iron Dropdown polymer component](https://www.webcomponents.org/element/PolymerElements/iron-dropdown/elements/iron-dropdown) be integrated ? Otherwise, the [Search In-Menu](https://react.semantic-ui.com/modules/dropdown) could be adapted with an animation on show and on hide.
Navbar | navbar/ | prototype on [Codesandbox](https://codesandbox.io/s/7jql2pwq76) |
RouteTransition | routetransition/ | **tbd** | prototype on [Codesandbox](https://codesandbox.io/s/2484vxj9qy)
SwipeCheckboxSelection | swipecheckboxselection/ | **tbd** | prototype [on Codepen](https://codepen.io/b00stup/full/XzXooM/). to be run on mobile or with chrome devtool to simulate touch a mobile device.

**[tbd]** _To be developped_

### Documentation
 - Write the requirements for each component
 - Write the ```api.md```  for each component
 
### Testing
 - Write tests
 
### Continuous Integration
 - Integrate this repo with Travis
 
### Interactive Component Catalog
 - Create a catalog to display the UI components using [Catalog.style](https://www.catalog.style/try) where the UI components will be interactive and documented.  
 - [Publish package to NPM registry ](https://codeburst.io/how-to-create-and-publish-your-first-node-js-module-444e7585b738)
