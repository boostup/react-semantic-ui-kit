# React Semantic UI Kit

A responsive UI kit for the Web based on [Create React App](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) & [Semantic UI React](https://react.semantic-ui.com/introduction).  

## Current status

As it stands today, this kit consists of around a dozen UI components (please refer to the [_Roadmap_](https://github.com/boostup/react-semantic-ui-kit#roadmap) section). Approximately a third of them are at a "new born" stage.  Meaning, there is no error handling or edge case management. However, given the [relatively painless learning curve with React](https://hackernoon.com/react-vs-polymer-83b4375a5a42), and since we'll BE building our components on top of very mature and stable libraries, I don't anticipate a lot work on those aspects.  The rest of the components are yet to be implemented.


## Vision
The idea is to build a UI kit which provides support to chrome/blink on desktop and touch devices as the first global milestone. Then, React Native as the second one.  However, I personally am only just starting with React, so I know next to nothing about the specifics of React Native.  It does need to be taken into account since the beginning of this project though.

The vision is to compose a UI Kit which allows for quick development of prototypes to show client, create POCs or apps for personal use mainly.  This doesn't feel so far fetched given [the rich component library](https://react.semantic-ui.com/introduction) that Semantic UI has brought to the community.  

What about you?  Like me, don't you need a quick and performant UI kit solution to develop all the app ideas you've accumulated over the years?  So many APIs are available; so many apps we can build nowadays!

## Composition vs Inheritance
This project shouldn't be extremely long or difficult.  The tasks here consist in developping new components on top of existing ones found in the Semantic UI React component library.  Most of the work should be achievable mainly through composition.
_[Please read section 'composition vs inheritance' from the React documentation.](https://reactjs.org/docs/composition-vs-inheritance.html)_



## Motivations

 - Like any freelancer, I need a comprehensive UI component library to use on side projects.
 - [React Bootstrap](https://react-bootstrap.github.io/) and [Material Design for React](https://github.com/callemall/material-ui) are really not mature enough compared to Semantic UI's kit.  A fellow developer has recommanded Semantic UI React instead, and I fell in love at first sight.  
 - I want to get familiar with React and Semantic UI React by developping this UI kit.


---

## Installation

```shell {.line-numbers}
    npm install @source360/react-semantic-ui-kit --save
```

---


## Usage

Inside their respective directory, every UI component includes a  set of ```*.md``` files.
Please refer to the _[_Component Catalog_](https://github.com/boostup/react-semantic-ui-kit#component-catalog)_ section.



## NPM Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.  



### npm test

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests) for more information.



### npm run build

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment) for more information.


---


## Features / RTFM

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



## CSS pre-processor
The guys at [Create React App provide sensible reasons](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc) for not needing any CSS pre-processor, and I tend to agree. Of course, this can be openly discussed.


---


## Node.js requirement

According to [node.green](http://node.green/), versions 6.5.0 to 6.12.0 are fully featured in terms of ES6/ES7 syntax.

**Therefore, Node.js v6.5.0 is the minimum requirement**.



##Main dependencies
- [React]()
- [Redux](https://redux.js.org/)
- [Semantic UI for react](https://react.semantic-ui.com/introduction)
- [React Router v4](https://reacttraining.com/react-router/web/guides/quick-start)
- [React scripts](https://github.com/facebookincubator/create-react-app/tree/master/packages/react-scripts)
- [React Loadable](https://github.com/thejameskyle/react-loadable)
- ...

_Please refer to the **package.json** file for a complete list._

---

## Roadmap

### UI Kit 

#### Components Directory
All UI components will be located at ```[root directory]/src/ui-kit/```.



#### Components Roadmap

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


#### Component Catalog

Create a catalog to display the UI components using Catalog.style.  UI components will be rendered and interactive.  
As time goes by, this catalog should replace the planned ```doc.md``` and ```examples.md``` found inside a UI component directory.  However, if a component is not yet in the catalog, than at least these files should be present in the component's directory so as to provide usage information to coders who wish to use it in the early stages.

 - https://www.catalog.style/try
 - https://docs.catalog.style/installation/module
 - https://docs.catalog.style/configuration/imports

---

### Publish package to NPM registry

 - [How to create and publish your first Node.js module](https://codeburst.io/how-to-create-and-publish-your-first-node-js-module-444e7585b738)
 - [Working with scoped packages | npm Documentation](https://docs.npmjs.com/getting-started/scoped-packages)
 - [Semantic versioning and npm | npm Documentation](https://docs.npmjs.com/getting-started/semantic-versioning)
 - [Publishing npm packages | npm Documentation](https://docs.npmjs.com/getting-started/publishing-npm-packages)


----

## Studies

### Polymer and React
Polymer is to future web components what ES7 is to Javascript.  I hear Polymer components are ready for production and well optimized.  Furthermore, their component library seems to be rich.  Could it be possible to use Polymer and React together?

  - [ ] [polymer with react - Google Search](https://www.google.fr/search?ei=7gYPWunJMefFgAbB_L3YCQ&q=polymer+with+react&oq=polymer+with+react&gs_l=psy-ab.3..0j0i30k1l2j0i5i30k1j0i8i30k1l5.215113.216899.0.217469.3.3.0.0.0.0.114.297.2j1.3.0....0...1.1.64.psy-ab..0.3.295...0i7i30k1j0i13k1j0i13i30k1j0i13i5i30k1.0.A_ywycXqhFs)
  - [ ] [jscissr/react-polymer: Use Polymer elements in React](https://github.com/jscissr/react-polymer)
  - [ ] [Polymer vs. React](https://www.upwork.com/hiring/development/polymer-vs-react/)
  - [x] (read) [React Vs Polymer – Hacker Noon](https://hackernoon.com/react-vs-polymer-83b4375a5a42)



### Polymer VS Web Components

 - [ ] https://www.webcomponents.org/
 - [ ] https://www.polymer-project.org/
 - [ ] https://www.webcomponents.org/community/articles/a-quick-polymer-introduction


### Web Components VS Frameworks
- [ ] https://medium.com/@oneeezy/frameworks-vs-web-components-9a7bd89da9d4


### Slim.js

 - [ ] [Slim.js](http://slimjs.com/): Very light-weight Web Components library.

---

## Contributing

Please do get in touch if you're interested in participating: boostup@gmail.com