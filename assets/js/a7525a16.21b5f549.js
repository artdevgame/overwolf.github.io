"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4634],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>s,MDXProvider:()=>f,mdx:()=>v,useMDXComponents:()=>c,withMDXComponents:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),m=function(e){return function(t){var r=c(t.components);return n.createElement(e,a({},t,{components:r}))}},c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},f=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(r),f=o,d=m["".concat(i,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},64488:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={id:148,image:"/img/embed/changelogs.jpg",title:"Version 0.148",sidebar_label:"0.148",sidebar_position:148,sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},i=void 0,l={unversionedId:"api/changelogs/overwolf-platform/2020/june/148",id:"api/changelogs/overwolf-platform/2020/june/148",title:"Version 0.148",description:"API and Platform",source:"@site/pages/docs/api/changelogs/overwolf-platform/2020/6-june/148.mdx",sourceDirName:"api/changelogs/overwolf-platform/2020/6-june",slug:"/api/changelogs/overwolf-platform/2020/june/148",permalink:"/api/changelogs/overwolf-platform/2020/june/148",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/changelogs/overwolf-platform/2020/6-june/148.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1667999405,formattedLastUpdatedAt:"Nov 9, 2022",sidebarPosition:148,frontMatter:{id:"148",image:"/img/embed/changelogs.jpg",title:"Version 0.148",sidebar_label:"0.148",sidebar_position:148,sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"api",previous:{title:"0.147",permalink:"/api/changelogs/overwolf-platform/2020/may/147"},next:{title:"0.149",permalink:"/api/changelogs/overwolf-platform/2020/july/149"}},p={},s=[{value:"API and Platform",id:"api-and-platform",level:3}],m={toc:s};function c(e){let{components:t,...r}=e;return(0,o.mdx)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h3",{id:"api-and-platform"},"API and Platform"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},'"DPI-aware" feature for ',(0,o.mdx)("a",{parentName:"li",href:"/topics/using-windows-api/windows-types#native-window"},"native")," windows:",(0,o.mdx)("br",{parentName:"li"}),"It means that when you move the native window between monitors with different DPIs for example from 100 DPI to 125 DPI, the window will automatically resize according to the new DPI.",(0,o.mdx)("br",{parentName:"li"}),"There's also a new manifest flag to disable that behavior if the developer wants none of that: ",(0,o.mdx)("a",{parentName:"li",href:"/api/manifest#disable_auto_dpi_sizing"},"disable_auto_dpi_sizing"),"."),(0,o.mdx)("li",{parentName:"ul"},"Moved to be part of our internal API and removed from the docs:",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"event ",(0,o.mdx)("em",{parentName:"li"},"overwolf.streaming.onRecordingEngineStateChanged"),"."),(0,o.mdx)("li",{parentName:"ul"},"function ",(0,o.mdx)("em",{parentName:"li"},"overwolf.streaming.getRunningRecorders()"),".")))))}c.isMDXComponent=!0}}]);