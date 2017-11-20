import React from "react";
import ReactDOM from "react-dom";
import {
  Catalog,
  pageLoader
} from "catalog";


const markdownLoader = page => pageLoader(() => import(`./${page}.md`));
const jsxLoader = page => pageLoader(() => import(`./${page}.jsx`));

const pages = [{
    path: "/",
    title: "Get Started",
    content: markdownLoader("GetStarted")
  },
  {  
    title: "Components",
    pages: [{
        path: "/components/activenavitem",
        title: "ActiveNavItem",
        content: markdownLoader("components/ActiveNavItem")
      },
      {
        path: "/components/availableprops",
        title: "AvailableProps",
        content: markdownLoader("components/AvailableProps")
      },
      {
        path: "/components/elementloader",
        title: "ElementLoader",
        content: markdownLoader("components/ElementLoader")
      },
      {
        path: "/components/hyperlinkable",
        title: "HyperLinkable",
        content: markdownLoader("components/HyperLinkable")
      },
      {
        path: "/components/loadablechunk",
        title: "LoadableChunk",
        content: markdownLoader("components/LoadableChunk")
      },
      {
        path: "/components/loaderwidget",
        title: "LoaderWidget",
        content: markdownLoader("components/LoaderWidget")
      },
      {
        path: "/components/imageloader",
        title: "ImageLoader",
        content: markdownLoader("components/ImageLoader")
      },
      {
        path: "/components/infinitescroll",
        title: "InfiniteScroll",
        content: markdownLoader("components/InfiniteScroll")
      },
      {
        path: "/components/irondropdown",
        title: "IronDropdown",
        content: markdownLoader("components/IronDropdown")
      },      
      {
        path: "/components/navbar",
        title: "Navbar",
        content: markdownLoader("components/Navbar")
      },
      {
        path: "/components/routetransition",
        title: "RouteTransition",
        content: markdownLoader("components/RouteTransition")
      },
      {
        path: "/components/swipecheckboxselection",
        title: "SwipeCheckboxSelection",
        content: markdownLoader("components/SwipeCheckboxSelection")
      }      
    ]}
];

ReactDOM.render( 
<Catalog title="React Semantic UIKit"
  pages = {
    pages
  }
  />,
  document.getElementById("catalog")
);