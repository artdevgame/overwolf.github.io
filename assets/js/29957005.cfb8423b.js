"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2478],{35318:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>p,MDXProvider:()=>c,mdx:()=>h,useMDXComponents:()=>s,withMDXComponents:()=>d});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){return function(t){var a=s(t.components);return n.createElement(e,o({},t,{components:a}))}},s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),d=s(a),c=r,f=d["".concat(i,".").concat(c)]||d[c]||u[c]||o;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=g;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[f]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},39077:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(25773),r=(a(27378),a(35318));const o={id:217,image:"/img/embed/changelogs.jpg",title:"Version 0.217",sidebar_label:"0.217",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},i=void 0,l={unversionedId:"api/changelogs/overwolf-platform/2023/january/217",id:"api/changelogs/overwolf-platform/2023/january/217",title:"Version 0.217",description:"Platform",source:"@site/pages/docs/api/changelogs/overwolf-platform/2023/january/217.mdx",sourceDirName:"api/changelogs/overwolf-platform/2023/january",slug:"/api/changelogs/overwolf-platform/2023/january/217",permalink:"/api/changelogs/overwolf-platform/2023/january/217",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/changelogs/overwolf-platform/2023/january/217.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1674569172,formattedLastUpdatedAt:"Jan 24, 2023",frontMatter:{id:"217",image:"/img/embed/changelogs.jpg",title:"Version 0.217",sidebar_label:"0.217",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"api",previous:{title:"0.218",permalink:"/api/changelogs/overwolf-platform/2023/february/218"},next:{title:"0.216",permalink:"/api/changelogs/overwolf-platform/2022/december/216"}},m={},p=[{value:"Platform",id:"platform",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3}],d={toc:p};function s(e){let{components:t,...a}=e;return(0,r.mdx)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h3",{id:"platform"},"Platform"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Added the ",(0,r.mdx)("a",{parentName:"li",href:"/api/manifest#logging-object"},(0,r.mdx)("inlineCode",{parentName:"a"},"logging"))," property to ",(0,r.mdx)("a",{parentName:"li",href:"/api/manifest#webapp-settings-object"},(0,r.mdx)("inlineCode",{parentName:"a"},"data"))," in the app's ",(0,r.mdx)("a",{parentName:"li",href:"/api/manifest"},(0,r.mdx)("inlineCode",{parentName:"a"},"manifest"))," file, to allow for the filtering of log messages:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Added the ",(0,r.mdx)("a",{parentName:"li",href:"/api/manifest#logging-object"},(0,r.mdx)("inlineCode",{parentName:"a"},"allowed_domains"))," property to ",(0,r.mdx)("a",{parentName:"li",href:"/api/manifest#logging-object"},(0,r.mdx)("inlineCode",{parentName:"a"},"logging")),". Any domains within this list will be whitelisted from filtering.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Any prints from domains that weren't whitelisted will not be written to the app's log files."),(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("a",{parentName:"li",href:"https://content.overwolf.com"},(0,r.mdx)("inlineCode",{parentName:"a"},"content.overwolf.com"))," and ",(0,r.mdx)("a",{parentName:"li",href:"https://google-analytics.com"},(0,r.mdx)("inlineCode",{parentName:"a"},"google-analytics.com"))," domains cannot be whitelisted in any way."),(0,r.mdx)("li",{parentName:"ul"},"Prints attributed to ",(0,r.mdx)("inlineCode",{parentName:"li"},"webpack")," (for example, from a react dev server) cannot be whitelisted from filtering (you can check the attribution through the link at the right side of the print's line in the ",(0,r.mdx)("a",{parentName:"li",href:"/start/getting-started/using-dev-tools#console"},"dev tools console"),")."),(0,r.mdx)("li",{parentName:"ul"},"By default, any domains in the ",(0,r.mdx)("a",{parentName:"li",href:"/api/manifest#externally_connectable"},(0,r.mdx)("inlineCode",{parentName:"a"},"externally_connectable"))," list will be whitelisted."))),(0,r.mdx)("li",{parentName:"ul"},"Added the ",(0,r.mdx)("a",{parentName:"li",href:"/api/manifest#logging-object"},(0,r.mdx)("inlineCode",{parentName:"a"},"ignore_externally_connectable"))," property to ",(0,r.mdx)("a",{parentName:"li",href:"/api/manifest#logging-object"},(0,r.mdx)("inlineCode",{parentName:"a"},"logging")),". When enabled, domains in the ",(0,r.mdx)("a",{parentName:"li",href:"/api/manifest#externally_connectable"},(0,r.mdx)("inlineCode",{parentName:"a"},"externally_connectable"))," list will not be automatically whitelisted."),(0,r.mdx)("li",{parentName:"ul"},"Added the ",(0,r.mdx)("a",{parentName:"li",href:"/api/manifest#logging-object"},(0,r.mdx)("inlineCode",{parentName:"a"},"disable_blocking"))," property to ",(0,r.mdx)("a",{parentName:"li",href:"/api/manifest#logging-object"},(0,r.mdx)("inlineCode",{parentName:"a"},"logging")),". When set to true, log filtering will be completely disabled."))),(0,r.mdx)("li",{parentName:"ul"},"Any requests made to the ",(0,r.mdx)("a",{parentName:"li",href:"https://googlesyndication.com"},(0,r.mdx)("inlineCode",{parentName:"a"},"googlesyndication"))," domain from within an app (used for Ads purposes) will now automatically use the ",(0,r.mdx)("inlineCode",{parentName:"li"},"https")," protocol, even without using ",(0,r.mdx)("a",{parentName:"li",href:"/api/manifest#protocol_override_domains"},(0,r.mdx)("inlineCode",{parentName:"a"},"protocol_override_domains")),"."),(0,r.mdx)("li",{parentName:"ul"},"Increased the maximum length of ",(0,r.mdx)("a",{parentName:"li",href:"/api/games/launchers#launcherinfo-object"},"LauncherInfo.commandLine")," before it gets cut off.")),(0,r.mdx)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed an issue on windows 11, where focusing an overlay window in a game could block other windows from being focused."),(0,r.mdx)("li",{parentName:"ul"},"Fixed an issue where app windows would not get captured in DX12 games.")))}s.isMDXComponent=!0}}]);