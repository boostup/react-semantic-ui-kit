import React from "react";
import ReactDOM from "react-dom";
import {
  Catalog,
  pageLoader
} from "catalog";

const catalogTitle = "RSUIKit";


const markdownLoader = page => pageLoader(() => import(`./${page}.md`));
const jsxLoader = page => pageLoader(() => import(`./${page}.jsx`));

const pages = [
  {
    path: "/",
    title: "Introduction",
    content: markdownLoader("intro")
  },
  {
    path: "/dev-status",
    title: "Development status",
    content: markdownLoader("dev-status"),
  },  
  {
    title: "Get Started",
    pages:[{
      path: "/get-started/install",
      title: "Installation",
      content: markdownLoader("get-started/install")
    },
    {
      path: "/get-started/rsuikit-starter-app",
      title: "RSUIKit starter app",
      content: markdownLoader("get-started/rsuikit-starter-app")
    }],    
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
<Catalog title={catalogTitle}
  pages = {
    pages
  }
  />,
  document.getElementById("catalog")
);