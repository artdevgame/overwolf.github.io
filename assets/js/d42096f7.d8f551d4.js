"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2329],{35318:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),f=s(a),c=n,d=f["".concat(p,".").concat(c)]||f[c]||u[c]||l;return a?r.createElement(d,o(o({ref:t},m),{},{components:a})):r.createElement(d,o({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[f]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1004:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=a(25773),n=(a(27378),a(35318));const l={id:142,image:"/img/embed/changelogs.jpg",title:"Version 0.142",sidebar_label:"0.142",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},o=void 0,i={unversionedId:"api/changelogs/overwolf-platform/2020/february/142",id:"api/changelogs/overwolf-platform/2020/february/142",title:"Version 0.142",description:"API and Platform",source:"@site/pages/docs/api/changelogs/overwolf-platform/2020/february/142.mdx",sourceDirName:"api/changelogs/overwolf-platform/2020/february",slug:"/api/changelogs/overwolf-platform/2020/february/142",permalink:"/api/changelogs/overwolf-platform/2020/february/142",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/changelogs/overwolf-platform/2020/february/142.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1673773943,formattedLastUpdatedAt:"Jan 15, 2023",frontMatter:{id:"142",image:"/img/embed/changelogs.jpg",title:"Version 0.142",sidebar_label:"0.142",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"api",previous:{title:"0.143",permalink:"/api/changelogs/overwolf-platform/2020/march/143"},next:{title:"0.141",permalink:"/api/changelogs/overwolf-platform/2020/january/141"}},p={},s=[{value:"API and Platform",id:"api-and-platform",level:3},{value:"Game events",id:"game-events",level:3}],m={toc:s};function f(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"api-and-platform"},"API and Platform"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"New API - ",(0,n.kt)("a",{parentName:"p",href:"/api/settings/hotkeys"},"overwolf.settings.hotkeys"),".",(0,n.kt)("br",{parentName:"p"}),"\n","Returns an object with hotkeys methods and events."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New manifest flag: ",(0,n.kt)("inlineCode",{parentName:"li"},"hold"),": Will be added to the ",(0,n.kt)("a",{parentName:"li",href:"/api/manifest#hotkeys"},"hotkeys object"),".",(0,n.kt)("br",{parentName:"li"}),"Defines a new type of hotkey - hotkey that works only while you are holding the key.",(0,n.kt)("br",{parentName:"li"}),"The flag also added to our ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/overwolf/community-gists/blob/master/overwolf-manifest-schema.json"},"manifest schema file"),".  "),(0,n.kt)("li",{parentName:"ul"},"New function: ",(0,n.kt)("a",{parentName:"li",href:"/api/settings/hotkeys#getcallback"},"overwolf.settings.hotkeys.get()"),". Returns all calling extension\u2019s hotkeys."),(0,n.kt)("li",{parentName:"ul"},"New event: ",(0,n.kt)("a",{parentName:"li",href:"/api/settings/hotkeys#onhold"},"overwolf.settings.onHold"),': will fire only for hotkeys that are defined as "hold".',(0,n.kt)("br",{parentName:"li"}),"This event will be fired twice - on key down and on key up."),(0,n.kt)("li",{parentName:"ul"},"New event: ",(0,n.kt)("a",{parentName:"li",href:"/api/settings/hotkeys#onpressed"},"overwolf.settings.onPressed"),': will fire only for hotkeys that are not defined as "hold".',(0,n.kt)("br",{parentName:"li"}),"This event will replace the deprecated ",(0,n.kt)("a",{parentName:"li",href:"/api/settings#registerhotkeyactionid-callback"},"overwolf.settings.registerHotKey")," function.    "),(0,n.kt)("li",{parentName:"ul"},"New event: ",(0,n.kt)("a",{parentName:"li",href:"/api/settings/hotkeys#onchanged"},"overwolf.settings.onChanged"),":  will fire on hotkeys change. "))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Cleanup upon uninstall:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Delete extension folder upon uninstall extension."),(0,n.kt)("li",{parentName:"ul"},"Clear all extension windows proprieties from setting."),(0,n.kt)("li",{parentName:"ul"},"Clear localstorage."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Enable Drag & drop To Overwolf app window."))),(0,n.kt)("h3",{id:"game-events"},"Game events"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/games/events/hearthstone#docsNav"},"Hearthstone game events"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New info updates:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"adventure_stats"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/games/events/league-of-legends"},"League of Legends Events"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New event & info:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"live_client_data"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/games/events/path-of-exile"},"Path of Exile game events"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New events & info",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"kill"),(0,n.kt)("li",{parentName:"ul"},"death"),(0,n.kt)("li",{parentName:"ul"},"match_outcome"),(0,n.kt)("li",{parentName:"ul"},"current_zone"),(0,n.kt)("li",{parentName:"ul"},"inventory open/close"),(0,n.kt)("li",{parentName:"ul"},"character_name"),(0,n.kt)("li",{parentName:"ul"},"character_level")))))))}f.isMDXComponent=!0}}]);