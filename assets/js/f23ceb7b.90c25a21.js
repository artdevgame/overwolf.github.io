"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2554],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>s,MDXProvider:()=>c,mdx:()=>h,useMDXComponents:()=>m,withMDXComponents:()=>u});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),u=function(e){return function(t){var n=m(t.components);return o.createElement(e,r({},t,{components:n}))}},m=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=m(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=m(n),c=i,d=u["".concat(l,".").concat(c)]||u[c]||f[c]||r;return n?o.createElement(d,p(p({ref:t},s),{},{components:n})):o.createElement(d,p({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=g;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p[d]="string"==typeof e?e:i,l[1]=p;for(var s=2;s<r;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},25197:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var o=n(87462),i=(n(67294),n(3905));const r={id:"simple-io-plugin",image:"/img/embed/api-best-practices.jpg",title:"The Overwolf Simple IO plugin",sidebar_label:"Simple I/O plugin",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},l=void 0,p={unversionedId:"topics/using-plugins/simple-io-plugin",id:"topics/using-plugins/simple-io-plugin",title:"The Overwolf Simple IO plugin",description:"A very useful plugin that we've developed ourselves is the Simple IO Plugin. This plugin allows your app to perform different filesystem I/O operations not available otherwise.",source:"@site/pages/docs/topics/using-plugins/simple-io-plugin.mdx",sourceDirName:"topics/using-plugins",slug:"/topics/using-plugins/simple-io-plugin",permalink:"/topics/using-plugins/simple-io-plugin",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/topics/using-plugins/simple-io-plugin.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1667999405,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{id:"simple-io-plugin",image:"/img/embed/api-best-practices.jpg",title:"The Overwolf Simple IO plugin",sidebar_label:"Simple I/O plugin",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"topics",previous:{title:"Sample plugin",permalink:"/topics/using-plugins/sample-plugin"},next:{title:"TeamSpeak plugin",permalink:"/topics/using-plugins/team-speak-plugin"}},a={},s=[{value:"Common uses for the plugin",id:"common-uses-for-the-plugin",level:2},{value:"Download",id:"download",level:2},{value:"Unblock Dll&#39;s",id:"unblock-dlls",level:2}],u={toc:s};function m(e){let{components:t,...r}=e;return(0,i.mdx)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"A very useful plugin that we've developed ourselves is the ",(0,i.mdx)("strong",{parentName:"p"},"Simple IO Plugin"),". This plugin allows your app to perform different filesystem I/O operations not available otherwise."),(0,i.mdx)("p",null,"You can ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/overwolf/overwolf-plugins/blob/master/plugins/simple-io-plugin/README.md"},"read  more")," about the functions of the simple-io-plugin in the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/overwolf/overwolf-plugins/tree/master/plugins/simple-io-plugin"},"Simple I/O GitHub repository"),"."),(0,i.mdx)("admonition",{type:"important"},(0,i.mdx)("p",{parentName:"admonition"},"We implement a lot of functionality from the simple io-plugin into the ",(0,i.mdx)("a",{parentName:"p",href:"/api/io"},"overwolf.io")," API and the ",(0,i.mdx)("a",{parentName:"p",href:"/api/extensions/io"},"overwolf.extensions.io")," API. Please check it before implementing the plugin in your app.")),(0,i.mdx)("h2",{id:"common-uses-for-the-plugin"},"Common uses for the plugin"),(0,i.mdx)("p",null,"This plugin enables you to:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Read a game\u2019s log file or files and even \u201cstream\u201d the log file, line-by-line, to your app."),(0,i.mdx)("li",{parentName:"ol"},"Create your own persistent log file on the local hard drive.")),(0,i.mdx)("h2",{id:"download"},"Download"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"You can get the plugin from our ",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/overwolf/overwolf-plugins/tree/master/plugins/simple-io-plugin"},"GitHub repository"),"."),(0,i.mdx)("li",{parentName:"ul"},"The latest DLL can be found ",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/overwolf/overwolf-plugins/tree/master/dist"},"here"),", don\u2019t forget to Unblock it after downloading.")),(0,i.mdx)("h2",{id:"unblock-dlls"},"Unblock Dll's"),(0,i.mdx)("p",null,"When you download foreign DLL files using a browser, Windows automatically marks it as unsafe. You can mark the file as safe by checking the 'Unblock' box found in the file's properties."),(0,i.mdx)("p",null,"!",(0,i.mdx)("img",{alt:"Unblock dll",src:n(60504).Z,width:"215",height:"300"})))}m.isMDXComponent=!0},60504:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/unblock_dll-5a6ae65815c89f3a12632f324495d605.jpg"}}]);