"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2242],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>m,MDXProvider:()=>s,mdx:()=>x,useMDXComponents:()=>g,withMDXComponents:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),u=function(e){return function(t){var a=g(t.components);return n.createElement(e,l({},t,{components:a}))}},g=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},s=function(e){var t=g(e.components);return n.createElement(m.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=g(a),s=r,p=u["".concat(o,".").concat(s)]||u[s]||c[s]||l;return a?n.createElement(p,d(d({ref:t},m),{},{components:a})):n.createElement(p,d({ref:t},m))}));function x(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=f;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[p]="string"==typeof e?e:r,o[1]=d;for(var m=2;m<l;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},13419:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={id:"language",image:"/img/embed/api-docs.jpg",title:"overwolf.settings.language API",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},o=void 0,d={unversionedId:"api/settings/language",id:"api/settings/language",title:"overwolf.settings.language API",description:"Use this API to view and modify the Overwolf language properties.",source:"@site/pages/docs/api/settings/language.mdx",sourceDirName:"api/settings",slug:"/api/settings/language",permalink:"/api/settings/language",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/settings/language.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1667999405,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{id:"language",image:"/img/embed/api-docs.jpg",title:"overwolf.settings.language API",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"api",previous:{title:"overwolf.settings.hotkeys API",permalink:"/api/settings/hotkeys"},next:{title:"overwolf.social API",permalink:"/api/social/"}},i={},m=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"get(callback)",id:"getcallback",level:2},{value:"Version added: 0.143",id:"version-added-0143",level:4},{value:"onLanguageChanged",id:"onlanguagechanged",level:2},{value:"Version added: 0.143",id:"version-added-0143-1",level:4},{value:"LanguageChangedEvent Object",id:"languagechangedevent-object",level:2},{value:"GetLanguageResult Object",id:"getlanguageresult-object",level:2},{value:"Example data: Success",id:"example-data-success",level:4}],u={toc:m};function g(e){let{components:t,...a}=e;return(0,r.mdx)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"Use this API to view and modify the Overwolf language properties."),(0,r.mdx)("h2",{id:"methods-reference"},"Methods Reference"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#getcallback"},"overwolf.settings.language.get()"))),(0,r.mdx)("h2",{id:"events-reference"},"Events Reference"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#onlanguagechanged"},"overwolf.settings.language.onLanguageChanged"))),(0,r.mdx)("h2",{id:"types-reference"},"Types Reference"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#getlanguageresult-object"},"overwolf.settings.language.GetLanguageResult")," Object"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#getlanguageresult-object"},"overwolf.settings.language.LanguageChangedEvent")," Object")),(0,r.mdx)("h2",{id:"getcallback"},"get(callback)"),(0,r.mdx)("h4",{id:"version-added-0143"},"Version added: 0.143"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Returns the current language overwolf is set to in a two letter ISO name format.")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"callback"),(0,r.mdx)("td",{parentName:"tr",align:null},"(",(0,r.mdx)("a",{parentName:"td",href:"#getlanguageresult-object"},"Result: GetLanguageResult"),") => void"),(0,r.mdx)("td",{parentName:"tr",align:null},"Returns with the result")))),(0,r.mdx)("h2",{id:"onlanguagechanged"},"onLanguageChanged"),(0,r.mdx)("h4",{id:"version-added-0143-1"},"Version added: 0.143"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Fired when user change client language, with the following structure: ",(0,r.mdx)("a",{parentName:"p",href:"#languagechangedevent-object"},"LanguageChangedEvent")," Object")),(0,r.mdx)("h2",{id:"languagechangedevent-object"},"LanguageChangedEvent Object"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"language"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"the new language overwolf is set to in a two letter ISO name format")))),(0,r.mdx)("h2",{id:"getlanguageresult-object"},"GetLanguageResult Object"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},"success")),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},"error")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"language"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"the current language overwolf is set to in a two letter ISO name format")))),(0,r.mdx)("h4",{id:"example-data-success"},"Example data: Success"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "language": "en",\n    "success": true\n}\n')))}g.isMDXComponent=!0}}]);