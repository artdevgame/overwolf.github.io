"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2329],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>p,MDXProvider:()=>f,mdx:()=>g,useMDXComponents:()=>d,withMDXComponents:()=>s});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){return function(t){var a=d(t.components);return r.createElement(e,l({},t,{components:a}))}},d=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},f=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),s=d(a),f=n,u=s["".concat(o,".").concat(f)]||s[f]||c[f]||l;return a?r.createElement(u,i(i({ref:t},p),{},{components:a})):r.createElement(u,i({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=h;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},18614:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={id:142,image:"/img/embed/changelogs.jpg",title:"Version 0.142",sidebar_label:"0.142",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},o=void 0,i={unversionedId:"api/changelogs/overwolf-platform/2020/february/142",id:"api/changelogs/overwolf-platform/2020/february/142",title:"Version 0.142",description:"API and Platform",source:"@site/pages/docs/api/changelogs/overwolf-platform/2020/february/142.mdx",sourceDirName:"api/changelogs/overwolf-platform/2020/february",slug:"/api/changelogs/overwolf-platform/2020/february/142",permalink:"/api/changelogs/overwolf-platform/2020/february/142",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/changelogs/overwolf-platform/2020/february/142.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1673773943,formattedLastUpdatedAt:"Jan 15, 2023",frontMatter:{id:"142",image:"/img/embed/changelogs.jpg",title:"Version 0.142",sidebar_label:"0.142",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"api",previous:{title:"0.143",permalink:"/api/changelogs/overwolf-platform/2020/march/143"},next:{title:"0.141",permalink:"/api/changelogs/overwolf-platform/2020/january/141"}},m={},p=[{value:"API and Platform",id:"api-and-platform",level:3},{value:"Game events",id:"game-events",level:3}],s={toc:p};function d(e){let{components:t,...a}=e;return(0,n.mdx)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h3",{id:"api-and-platform"},"API and Platform"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"New API - ",(0,n.mdx)("a",{parentName:"p",href:"/api/settings/hotkeys"},"overwolf.settings.hotkeys"),".",(0,n.mdx)("br",{parentName:"p"}),"\n","Returns an object with hotkeys methods and events."),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"New manifest flag: ",(0,n.mdx)("inlineCode",{parentName:"li"},"hold"),": Will be added to the ",(0,n.mdx)("a",{parentName:"li",href:"/api/manifest#hotkeys"},"hotkeys object"),".",(0,n.mdx)("br",{parentName:"li"}),"Defines a new type of hotkey - hotkey that works only while you are holding the key.",(0,n.mdx)("br",{parentName:"li"}),"The flag also added to our ",(0,n.mdx)("a",{parentName:"li",href:"https://github.com/overwolf/community-gists/blob/master/overwolf-manifest-schema.json"},"manifest schema file"),".  "),(0,n.mdx)("li",{parentName:"ul"},"New function: ",(0,n.mdx)("a",{parentName:"li",href:"/api/settings/hotkeys#getcallback"},"overwolf.settings.hotkeys.get()"),". Returns all calling extension\u2019s hotkeys."),(0,n.mdx)("li",{parentName:"ul"},"New event: ",(0,n.mdx)("a",{parentName:"li",href:"/api/settings/hotkeys#onhold"},"overwolf.settings.onHold"),': will fire only for hotkeys that are defined as "hold".',(0,n.mdx)("br",{parentName:"li"}),"This event will be fired twice - on key down and on key up."),(0,n.mdx)("li",{parentName:"ul"},"New event: ",(0,n.mdx)("a",{parentName:"li",href:"/api/settings/hotkeys#onpressed"},"overwolf.settings.onPressed"),': will fire only for hotkeys that are not defined as "hold".',(0,n.mdx)("br",{parentName:"li"}),"This event will replace the deprecated ",(0,n.mdx)("a",{parentName:"li",href:"/api/settings#registerhotkeyactionid-callback"},"overwolf.settings.registerHotKey")," function.    "),(0,n.mdx)("li",{parentName:"ul"},"New event: ",(0,n.mdx)("a",{parentName:"li",href:"/api/settings/hotkeys#onchanged"},"overwolf.settings.onChanged"),":  will fire on hotkeys change. "))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Cleanup upon uninstall:"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Delete extension folder upon uninstall extension."),(0,n.mdx)("li",{parentName:"ul"},"Clear all extension windows proprieties from setting."),(0,n.mdx)("li",{parentName:"ul"},"Clear localstorage."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Enable Drag & drop To Overwolf app window."))),(0,n.mdx)("h3",{id:"game-events"},"Game events"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/api/games/events/hearthstone#docsNav"},"Hearthstone game events"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"New info updates:",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"adventure_stats"))))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/api/games/events/league-of-legends"},"League of Legends Events"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"New event & info:",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"live_client_data"))))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/api/games/events/path-of-exile"},"Path of Exile game events"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"New events & info",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"kill"),(0,n.mdx)("li",{parentName:"ul"},"death"),(0,n.mdx)("li",{parentName:"ul"},"match_outcome"),(0,n.mdx)("li",{parentName:"ul"},"current_zone"),(0,n.mdx)("li",{parentName:"ul"},"inventory open/close"),(0,n.mdx)("li",{parentName:"ul"},"character_name"),(0,n.mdx)("li",{parentName:"ul"},"character_level")))))))}d.isMDXComponent=!0}}]);