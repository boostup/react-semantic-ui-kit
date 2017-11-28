import React from "react";
import ReactDOM from "react-dom";
import {
  Catalog,
  pageLoader
} from "catalog";

import UnderConstruction from "./UnderConstruction";
import AvailableProps from "../src/00-atoms/AvailableProps";
import ElementFader from "../src/00-atoms/ElementFader";

const imports = {
  UnderConstruction,
  AvailableProps,
  ElementFader,
}


const catalogTitle = "RSUIKit";

const markdownLoader = page => pageLoader(() => import(`./${page}.md`));
const jsxLoader = page => pageLoader(() => import(`./${page}.jsx`));

const pages = [
  {
    path: "/",
    title: "Introduction",
    content: pageLoader(() => import("./intro.md"))
  },
  {
    path: "/dev-status",
    title: "Development status",
    content: markdownLoader("dev-status"),
  },  
  {
    path: "/install",
    title: "Installation",
    content: markdownLoader("install")
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
        path: "/components/elementfader",
        title: "ElementFader",
        content: markdownLoader("components/ElementFader")
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
<Catalog title={catalogTitle}
  imports = {imports}
  pages = {
    pages
  }
  />,
  document.getElementById("catalog")
);