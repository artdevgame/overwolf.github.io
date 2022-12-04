"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2515],{3905:(e,t,o)=>{o.r(t),o.d(t,{MDXContext:()=>c,MDXProvider:()=>u,mdx:()=>g,useMDXComponents:()=>d,withMDXComponents:()=>p});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},a.apply(this,arguments)}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),p=function(e){return function(t){var o=d(t.components);return r.createElement(e,a({},t,{components:o}))}},d=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},w=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(o),u=n,m=p["".concat(i,".").concat(u)]||p[u]||f[u]||a;return o?r.createElement(m,l(l({ref:t},c),{},{components:o})):r.createElement(m,l({ref:t},c))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=w;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}w.displayName="MDXCreateElement"},42349:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const a={id:"electron-migration",image:"/img/embed/api-best-practices.jpg",title:"Porting your Electron app to Overwolf",sidebar_label:"Electron Migration",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},i=void 0,l={unversionedId:"topics/best-practices/electron-migration",id:"topics/best-practices/electron-migration",title:"Porting your Electron app to Overwolf",description:"In case you have an existing application on Electron, porting your app to Overwolf is very easy, and should take about a week of work for a single developer. This will allow you the best of both worlds while you maintain full control of your destiny. Like Electron, Overwolf is built on Chromium. While Electron is a generalized product - Overwolf is dedicated specifically for gaming apps.",source:"@site/pages/docs/topics/best-practices/electron-migration.mdx",sourceDirName:"topics/best-practices",slug:"/topics/best-practices/electron-migration",permalink:"/topics/best-practices/electron-migration",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/topics/best-practices/electron-migration.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1667999405,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{id:"electron-migration",image:"/img/embed/api-best-practices.jpg",title:"Porting your Electron app to Overwolf",sidebar_label:"Electron Migration",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"topics",previous:{title:"Data persistence",permalink:"/topics/best-practices/data-persistence"},next:{title:"Enable Developer Tools",permalink:"/topics/best-practices/enable-dev-tools"}},s={},c=[{value:"One code base for Electron and OW app",id:"one-code-base-for-electron-and-ow-app",level:2},{value:"Recommended steps to keep both versions",id:"recommended-steps-to-keep-both-versions",level:3}],p={toc:c};function d(e){let{components:t,...o}=e;return(0,n.mdx)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("p",null,"In case you have an existing application on Electron, porting your app to Overwolf is very easy, and should take about a week of work for a single developer. This will allow you the best of both worlds while you maintain full control of your destiny. Like Electron, Overwolf is built on Chromium. While Electron is a generalized product - Overwolf is dedicated specifically for gaming apps. "),(0,n.mdx)("p",null,"Once you have a build on Overwolf, you\u2019d be able to enjoy features like in-game overlay, real time telemetry, monetization, analytics, customized installer, auto updates, free CDN, marketing, signatures, and a lot more!"),(0,n.mdx)("p",null,"Our framework allows you to keep both versions live, with one code base and negligible live-ops overhead. At any given time, you can choose to deploy updates to Electron, Overwolf, or both. We did it ourselves to the CurseForge app, and we\u2019re happy to explain how."),(0,n.mdx)("h2",{id:"one-code-base-for-electron-and-ow-app"},"One code base for Electron and OW app"),(0,n.mdx)("p",null,"It is simple to maintain both Electron and Overwolf support for the app - basing it on the same codebase."),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Core package/module with most of the app\u2019s logic and UI",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Abstracting Framework specific APIs (e.g. WindowsService [",(0,n.mdx)("a",{parentName:"li",href:"/api/windows"},"overwolf.windows"),", BrowserWindow], CommunicationsService [",(0,n.mdx)("a",{parentName:"li",href:"/api/windows#getmainwindow"},"overwolf.windows.getMainWindow"),", Electron preload] etc...)."))),(0,n.mdx)("li",{parentName:"ul"},"Thin package for Overwolf - uses core package."),(0,n.mdx)("li",{parentName:"ul"},"Thin package for Electron - uses core package."),(0,n.mdx)("li",{parentName:"ul"},"We can help build it for you! ",(0,n.mdx)("a",{parentName:"li",href:"/support/contact-us"},"Reach out"),".")),(0,n.mdx)("h3",{id:"recommended-steps-to-keep-both-versions"},"Recommended steps to keep both versions"),(0,n.mdx)("p",null,"These are the recommended steps to keep both versions:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Electron browser process code \u2192 Overwolf ",(0,n.mdx)("a",{parentName:"li",href:"../using-windows-api/communicating-between-windows#using-a-background-controller"},"background controller")),(0,n.mdx)("li",{parentName:"ul"},"Electron renderer process code \u2192 ",(0,n.mdx)("a",{parentName:"li",href:"../using-windows-api/using-overwolf-windows"},"Overwolf Window")),(0,n.mdx)("li",{parentName:"ul"},"Communication layer (preload code \u2192 ",(0,n.mdx)("a",{parentName:"li",href:"/api/windows#getmainwindow"},"overwolf.window.getMainWindow"),")"),(0,n.mdx)("li",{parentName:"ul"},"Abstracting framework specific code (Electron/Overwolf) and injecting the relevant implementation (e.g. Electron APIs vs Overwolf APIs, node.js vs .net plugins)",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Here we can help with converting to .net"))),(0,n.mdx)("li",{parentName:"ul"},"Once you get the technical part cover we suggest communicating with your users how the two clients differ from each other: added features, reducing cost, overlay etc"),(0,n.mdx)("li",{parentName:"ul"},"Lastly, if you\u2019re not happy with our service - you can always easily go back to being exclusively on Electron. If you choose to go just on Overwolf, you can go back at any given time to Electron.")),(0,n.mdx)("p",null,"If you have any questions, please ",(0,n.mdx)("a",{parentName:"p",href:"/support/contact-us"},"reach out"),"."))}d.isMDXComponent=!0}}]);