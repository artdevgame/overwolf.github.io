"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3388],{35318:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>p,MDXProvider:()=>m,mdx:()=>v,useMDXComponents:()=>c,withMDXComponents:()=>u});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){return function(t){var r=c(t.components);return n.createElement(e,a({},t,{components:r}))}},c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},39775:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(25773),o=(r(27378),r(35318));const a={id:"status",image:"/img/embed/game-status.jpg",title:"Game events status health",sidebar_label:"All Games",sidebar_position:0,showLastUpdateAuthor:!1,showLastUpdateTime:!1,sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},s=void 0,i={unversionedId:"status/status",id:"status/status",title:"Game events status health",description:"Pick any game to see its full events list.",source:"@site/pages/docs/status/status.mdx",sourceDirName:"status",slug:"/status/",permalink:"/status/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/status/status.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"status",image:"/img/embed/game-status.jpg",title:"Game events status health",sidebar_label:"All Games",sidebar_position:0,showLastUpdateAuthor:!1,showLastUpdateTime:!1,sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"status",next:{title:"Apex Legends",permalink:"/status/apex-legends"}},l={},p=[],u=(c="EventsData",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)});var c;const m={toc:p};function d(e){let{components:t,...r}=e;return(0,o.mdx)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Pick any game to see its full events list."),(0,o.mdx)("p",null,"It is highly recommended to communicate errors and warnings to your app users.\nYou can easily do that using the Overwolf API. ",(0,o.mdx)("a",{parentName:"p",href:"/topics/using-events/how-to-check-events-status-from-app"},"Read all the info here"),"."),(0,o.mdx)(u,{allGames:!0,mdxType:"EventsData"}))}d.isMDXComponent=!0}}]);