"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4433],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>p,MDXProvider:()=>c,mdx:()=>f,useMDXComponents:()=>d,withMDXComponents:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),m=function(e){return function(t){var n=d(t.components);return o.createElement(e,a({},t,{components:n}))}},d=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,h=m["".concat(i,".").concat(c)]||m[c]||u[c]||a;return n?o.createElement(h,l(l({ref:t},p),{},{components:n})):o.createElement(h,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},64069:(e,t,n)=>{n.d(t,{ZP:()=>i});var o=n(87462),r=(n(67294),n(3905));const a={toc:[]};function i(e){let{components:t,...n}=e;return(0,r.mdx)("wrapper",(0,o.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"app.overwolf.isCMPRequired()")),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Returns whether or not a user is required to be informed about the CMP.")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import { app } from 'electron';\n\nawait app.overwolf.isCMPRequired();\n")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"app.overwolf.openCMPWindow()")),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Opens the built-in CMP window.")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"app.overwolf.openCMPWindow({\n    // defaults to purposes if not defined\n    tab?: ['purposes' | 'features' | 'vendors']\n});\n")))}i.isMDXComponent=!0},17620:(e,t,n)=>{n.d(t,{ZP:()=>i});var o=n(87462),r=(n(67294),n(3905));const a={toc:[{value:"Introducing the CMP",id:"introducing-the-cmp",level:3}]};function i(e){let{components:t,...n}=e;return(0,r.mdx)("wrapper",(0,o.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"A CMP makes it easier for you to meet the stricter legal requirements governing data collection in certain parts of the world,\nby helping you handle the process of receiving consent to collect user cookies. This also allows you to show ads to users living in those areas."),(0,r.mdx)("p",null,"ow-electron comes with a built in CMP, which your app can utilize out of the box.\nThis allows you to:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Check if a user needs to be informed of the CMP"),(0,r.mdx)("li",{parentName:"ul"},"Show them the CMP itself if necessary, applying any settings they use to the entire ow-electron package")),(0,r.mdx)("p",null,"The relevant users should then be informed about the existence of the CMP, as well as where they can find it in the app."),(0,r.mdx)("h3",{id:"introducing-the-cmp"},"Introducing the CMP"),(0,r.mdx)("p",null,"There are two ways to introduce the relevant users to the CMP:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"During the app's installation - ",(0,r.mdx)("strong",{parentName:"li"},"Recommended")),(0,r.mdx)("li",{parentName:"ul"},"On the app's first start, as part of the First Time User Experience (FTUE)",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"If you are migrating your app to ow-electron, this will also apply to the first time that existing users start the app after the update")))))}i.isMDXComponent=!0},57368:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var o=n(87462),r=(n(67294),n(3905)),a=n(17620),i=n(64069);const l={id:"consent-management-platform",image:"/img/embed/dev-tools.jpg",title:"Consent Management Platform",sidebar_custom_props:{overwolf_platform:!1,electron_platform:!0}},s=void 0,p={unversionedId:"tools/ow-electron/consent-management-platform/consent-management-platform",id:"tools/ow-electron/consent-management-platform/consent-management-platform",title:"Consent Management Platform",description:"Installer CMP Mockup",source:"@site/pages/docs/tools/ow-electron/consent-management-platform/consent-management-platform.mdx",sourceDirName:"tools/ow-electron/consent-management-platform",slug:"/tools/ow-electron/consent-management-platform/",permalink:"/tools/ow-electron/consent-management-platform/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/tools/ow-electron/consent-management-platform/consent-management-platform.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1668596589,formattedLastUpdatedAt:"Nov 16, 2022",frontMatter:{id:"consent-management-platform",image:"/img/embed/dev-tools.jpg",title:"Consent Management Platform",sidebar_custom_props:{overwolf_platform:!1,electron_platform:!0}},sidebar:"tools",previous:{title:"ow-electron",permalink:"/tools/ow-electron/"},next:{title:"Overwolf Ad View",permalink:"/tools/ow-electron/overwolf-ad-view/"}},m={},d=[{value:"Installer CMP Mockup",id:"installer-cmp-mockup",level:2},{value:"Relevant API",id:"relevant-api",level:2},{value:"Introducing the CMP to users",id:"introducing-the-cmp-to-users",level:2},{value:"Allowing users to access the CMP",id:"allowing-users-to-access-the-cmp",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",t)},u=c("Tabs"),h=c("TabItem"),f={toc:d};function g(e){let{components:t,...l}=e;return(0,r.mdx)("wrapper",(0,o.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(a.ZP,{mdxType:"CMPIntro"}),(0,r.mdx)("h2",{id:"installer-cmp-mockup"},"Installer CMP Mockup"),(0,r.mdx)("p",null,"Below is an installer mockup, with the CMP built into it:"),(0,r.mdx)("iframe",{style:{border:"1px solid rgba(0, 0, 0, 0.1)"},width:"800",height:"550",src:"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FsLm1ATRmpdGKjyHlVl7iur%2FInstaller-Demo%3Fpage-id%3D1%253A79%26node-id%3D1%253A174%26viewport%3D821%252C419%252C0.32%26scaling%3Dmin-zoom%26starting-point-node-id%3D1%253A174",allowfullscreen:!0}),(0,r.mdx)("h2",{id:"relevant-api"},"Relevant API"),(0,r.mdx)(i.ZP,{mdxType:"API"}),(0,r.mdx)("h2",{id:"introducing-the-cmp-to-users"},"Introducing the CMP to users"),(0,r.mdx)(u,{mdxType:"Tabs"},(0,r.mdx)(h,{value:"installer-cmp",label:"CMP During Installation",default:!0,mdxType:"TabItem"},(0,r.mdx)("admonition",{title:"Overwolf Windows Installer",type:"note"},(0,r.mdx)("p",{parentName:"admonition"},"Our Windows installer automatically handles the introduction of the CMP to users during installation, among other things. If you wish to use it,\n",(0,r.mdx)("a",{parentName:"p",href:"/support/contact-us"},"ask us for more details"),".")),(0,r.mdx)("p",null,"In order to introduce the CMP during installation, you must show users a notice informing them about the CMP before starting the installation.\nWe'll use a mockup of CurseForge's installer notice as an example:")),(0,r.mdx)(h,{value:"ftue-cmp",label:"CMP During FTUE",mdxType:"TabItem"},(0,r.mdx)("admonition",{title:"FTUE And Migration To ow-electron",type:"note"},(0,r.mdx)("p",{parentName:"admonition"},"For the purposes discussed here, a user updating from a non ow-electron version of the app, to an ow-electron version of the app,\nis treated as a First Time User, and should be shown the CMP as if they were a new user.")),(0,r.mdx)("p",null,"In order to introduce the CMP inside the app itself, you must show First Time Users a notice informing them about the CMP.\nWe'll use a mockup of CurseForge's installer notice as a reference:"))),(0,r.mdx)("p",null,(0,r.mdx)("img",{alt:"Initial Notice (CurseForge)",src:n(2199).Z,width:"638",height:"421"})),(0,r.mdx)("details",null,(0,r.mdx)("summary",null,"CMP Notice Template"),(0,r.mdx)("p",null,"{Your-App-Name-Here} supports the display of in-app ads.\nThis helps {us/company-name/etc} make a living,\nand provide you with free high-quality apps.\nIn order to deliver ads that are relevant for you,\n{Your-App-Name-Here} and trusted ad vendors store and/or access information on your computer,\nand process personal data such as IP address and cookies.\nClick the \u201cManage\u201d button to control your consents,\nor to object to the processing of your data when done on the basis of legitmate interest.\nYou can change your prefrences at any time via the app's settings."),(0,r.mdx)("p",null,"Purposes we use: Store and/or access information on a device,\npersonalised ads and content, ad and content measurement,\naudience insights and product development.")),(0,r.mdx)("p",null,"Users can then click ",(0,r.mdx)("inlineCode",{parentName:"p"},"Manage"),", in order to open the CMP window directly, and configure it however they wish."),(0,r.mdx)("p",null,"Once done, they ",(0,r.mdx)("strong",{parentName:"p"},"must")," click to continue:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"Accept & Install")," - If done during installation. Proceeds to install the app"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"Accept & Continue")," - If done during FTUE. Proceeds to continue to the app")),(0,r.mdx)("h2",{id:"allowing-users-to-access-the-cmp"},"Allowing users to access the CMP"),(0,r.mdx)("p",null,"Once the user has been introduced to the CMP, they must be able to find it if they ever wish to alter its settings."),(0,r.mdx)("p",null,"This is usually achieved by having a ",(0,r.mdx)("strong",{parentName:"p"},"clearly visible")," section in the app's settings, called ",(0,r.mdx)("inlineCode",{parentName:"p"},"Privacy"),", that shows the following when clicked:"),(0,r.mdx)("p",null,(0,r.mdx)("img",{alt:"Privacy Settings",src:n(80119).Z,width:"915",height:"191"})),(0,r.mdx)("p",null,"Clicking on ",(0,r.mdx)("inlineCode",{parentName:"p"},"Manage")," then opens the CMP window, in the same way that it was opened at the start."))}g.isMDXComponent=!0},2199:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/notice-a9c067a1c0ed2cdde88b2a728ff07873.jpg"},80119:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/privacy-settings-cc9baac89f3f0787a454af30d694b1aa.jpg"}}]);