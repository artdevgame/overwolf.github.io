"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7608],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>d,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>p,withMDXComponents:()=>c});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),c=function(e){return function(t){var n=p(t.components);return r.createElement(e,s({},t,{components:n}))}},p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},g="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,g=c["".concat(i,".").concat(m)]||c[m]||h[m]||s;return n?r.createElement(g,a(a({ref:t},d),{},{components:n})):r.createElement(g,a({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[g]="string"==typeof e?e:o,i[1]=a;for(var d=2;d<s;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},84145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const s={id:"logs-html",image:"/img/embed/api-best-practices.jpg",title:"Overlay game HTML",sidebar_label:"Overlay game HTML",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},i=void 0,a={unversionedId:"topics/understanding-ow-logs/logs-html",id:"topics/understanding-ow-logs/logs-html",title:"Overlay game HTML",description:"These logs will appear as an HTML file with the game title (For example League of Legends07-03-2105-17-06.Game.html) Using these log files you can verify that the processes & dlls were injected correctly into the game, information regarding the windows mode, rendered API and if the hotkeys are being sent and received by Overwolf.",source:"@site/pages/docs/topics/understanding-ow-logs/logs-html.mdx",sourceDirName:"topics/understanding-ow-logs",slug:"/topics/understanding-ow-logs/logs-html",permalink:"/topics/understanding-ow-logs/logs-html",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/topics/understanding-ow-logs/logs-html.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1667999405,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{id:"logs-html",image:"/img/embed/api-best-practices.jpg",title:"Overlay game HTML",sidebar_label:"Overlay game HTML",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"topics",previous:{title:"DxDiag log",permalink:"/topics/understanding-ow-logs/logs-dxdiag"},next:{title:"What are Overwolf logs",permalink:"/topics/understanding-ow-logs/logs-intro"}},l={},d=[],c={toc:d};function p(e){let{components:t,...s}=e;return(0,o.mdx)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"These logs will appear as an HTML file with the game title (For example League of Legends_07-03-21_05-17-06.Game.html) Using these log files you can verify that the processes & dlls were injected correctly into the game, information regarding the windows mode, rendered API and if the hotkeys are being sent and received by Overwolf."),(0,o.mdx)("p",null,"In this section you can see the client initializing and the users Windows OS:"),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"6",src:n(32751).Z,width:"1827",height:"170"})),(0,o.mdx)("p",null,"This section will show which dlls are injected (Allowing you to check coexistence issues with other programs) before the render:"),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"7",src:n(35080).Z,width:"1749",height:"425"})),(0,o.mdx)("p",null,"This section will show the rendered resolutions and windows mode:"),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"8",src:n(50429).Z,width:"2441",height:"139"})),(0,o.mdx)("p",null,"This section will show the rendered API:"),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"9",src:n(41277).Z,width:"1247",height:"284"})),(0,o.mdx)("p",null,"This section will show if the render was successful:"),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"10",src:n(46818).Z,width:"2681",height:"108"})),(0,o.mdx)("p",null,"This section will show if the OBS render hook was injected: "),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"11",src:n(34371).Z,width:"1208",height:"240"})),(0,o.mdx)("p",null,"This section shows hotkeys that were sent and received by Overwolf "),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"12",src:n(937).Z,width:"2448",height:"68"})),(0,o.mdx)("p",null,"This section shows that the game ended properly without crashes"),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"13",src:n(55542).Z,width:"1223",height:"197"})))}p.isMDXComponent=!0},46818:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/10-01a869e337f78ef879c44fe47804bb63.png"},34371:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/11-5e27ee4739b7ea57bf151a757ac2025b.png"},937:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/12-6b73de9e3defc9a8e776953c8a792a21.png"},55542:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/13-e966e9d44e76429afa965f6e20799001.png"},32751:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/6-6edb9ae9d84075d8831d9b7025f1e13d.png"},35080:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/7-d18f368cae4d0d8ea2025d27cb51b3a2.png"},50429:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/8-5fa6e925fb43bffafed9881710dbf724.png"},41277:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/9-d0847307acfe72631f348958b15b69b5.png"}}]);