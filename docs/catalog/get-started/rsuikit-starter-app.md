The starter app includes the RSUIKit npm package, a bunch of useful [dependencies](#main-dependencies) and a set of [features](#features) which help put real working apps together with performance in mind, really quickly.

With this boilerplate, one can concentrate on the [CRP](https://varvy.com/pagespeed/critical-render-path.html) ([Critical Rendering Path](https://www.airpair.com/javascript/posts/the-tipping-point-of-clientside-performance)) since chunks can be loaded thanks to the 'react-loadable' package, also included.

### Installation

```code
npm install @source360/RSUIKit-app-starter --save
```


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

These are the features of the demo site.

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