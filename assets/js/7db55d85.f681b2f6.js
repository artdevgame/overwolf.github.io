"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1076],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>s,MDXProvider:()=>d,mdx:()=>f,useMDXComponents:()=>c,withMDXComponents:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){return function(t){var a=c(t.components);return n.createElement(e,i({},t,{components:a}))}},c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,u=m["".concat(o,".").concat(d)]||m[d]||g[d]||i;return a?n.createElement(u,l(l({ref:t},s),{},{components:a})):n.createElement(u,l({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},91841:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={id:"game-compliance",image:"/img/embed/getting-started.jpg",title:"Game Compliance Guiding Principles",sidebar_label:"Game compliance principles",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},o=void 0,l={unversionedId:"start/getting-started/game-compliance",id:"start/getting-started/game-compliance",title:"Game Compliance Guiding Principles",description:"Some games have additional limitations on creating apps for them, which you can find under Game Compliance. Please Make sure to read through the specific guidelines for the games you are targeting if there are any!",source:"@site/pages/docs/start/getting-started/game-compliance.mdx",sourceDirName:"start/getting-started",slug:"/start/getting-started/game-compliance",permalink:"/start/getting-started/game-compliance",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/start/getting-started/game-compliance.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1667999405,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{id:"game-compliance",image:"/img/embed/getting-started.jpg",title:"Game Compliance Guiding Principles",sidebar_label:"Game compliance principles",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"start",previous:{title:"App Creation process",permalink:"/start/getting-started/app-creation-process"},next:{title:"SDK Introduction",permalink:"/start/getting-started/sdk-introduction"}},p={},s=[],m={toc:s};function c(e){let{components:t,...a}=e;return(0,r.mdx)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("admonition",{title:"Specific Game Compliance",type:"tip"},(0,r.mdx)("p",{parentName:"admonition"},"Some games have additional limitations on creating apps for them, which you can find under ",(0,r.mdx)("a",{parentName:"p",href:"../game-compliance"},"Game Compliance"),". Please Make sure to read through the specific guidelines for the games you are targeting if there are any!")),(0,r.mdx)("p",null,"Being a 3rd party developer for an established game requires both dare and diligence. We would all like to see the games we love keep growing and evolving along with our ecosystem and the content created in it."),(0,r.mdx)("p",null,"It\u2019s therefore important to keep the delicate balance between the success of the games we all love and the success of the apps you create for them. In order to do that, please read the following guidelines carefully:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Your app should add value to the player while respecting the game creator and the game itself. In no case should the app interfere with gameplay, competitiveness, and game developer intentions.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Your app should not in any way encourage queue dodging and player discrimination.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"The app should follow game developers EULA and TOS.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"You can be inspired by the game UI, but not imitate game UI elements. Your app should have its own visual identity.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Your app should be recognizable with a name and a window header so the player could easily  understand where the game ends and where the app begins. It is recommended to have your own brand.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"The app should have a communication channel with your audience to allow quick bug fixing cycles.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Ads are here to help us keep the app free but you should never implement them in a way that will interfere with gameplay (",(0,r.mdx)("a",{parentName:"p",href:"../monetize-with-ads/ads-monetization-basics",title:"Ads Monetization Basics"},"further reading"),").")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Should there be an issue regarding any of the above, be responsive and communicate with the game developer and with Overwolf. It is important to have all parties aligned and get the issue resolved as quickly as possible."))))}c.isMDXComponent=!0}}]);