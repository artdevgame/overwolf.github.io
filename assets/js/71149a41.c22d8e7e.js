"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7287],{3905:(e,a,t)=>{t.r(a),t.d(a,{MDXContext:()=>p,MDXProvider:()=>u,mdx:()=>h,useMDXComponents:()=>s,withMDXComponents:()=>d});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(){return o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=r.createContext({}),d=function(e){return function(a){var t=s(a.components);return r.createElement(e,o({},a,{components:t}))}},s=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=s(e.components);return r.createElement(p.Provider,{value:a},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},g=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),d=s(t),u=n,c=d["".concat(i,".").concat(u)]||d[u]||f[u]||o;return t?r.createElement(c,l(l({ref:a},p),{},{components:t})):r.createElement(c,l({ref:a},p))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=g;var l={};for(var m in a)hasOwnProperty.call(a,m)&&(l[m]=a[m]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},14491:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(87462),n=(t(67294),t(3905));const o={id:199,image:"/img/embed/changelogs.jpg",title:"Version 0.199",sidebar_label:"0.199",sidebar_position:199,sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},i=void 0,l={unversionedId:"api/changelogs/overwolf-platform/2022/june/199",id:"api/changelogs/overwolf-platform/2022/june/199",title:"Version 0.199",description:"Docs",source:"@site/pages/docs/api/changelogs/overwolf-platform/2022/6-june/199.mdx",sourceDirName:"api/changelogs/overwolf-platform/2022/6-june",slug:"/api/changelogs/overwolf-platform/2022/june/199",permalink:"/api/changelogs/overwolf-platform/2022/june/199",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/changelogs/overwolf-platform/2022/6-june/199.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1667999405,formattedLastUpdatedAt:"Nov 9, 2022",sidebarPosition:199,frontMatter:{id:"199",image:"/img/embed/changelogs.jpg",title:"Version 0.199",sidebar_label:"0.199",sidebar_position:199,sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"api",previous:{title:"0.198",permalink:"/api/changelogs/overwolf-platform/2022/may/198"},next:{title:"0.201",permalink:"/api/changelogs/overwolf-platform/2022/july/201"}},m={},p=[{value:"Docs",id:"docs",level:3},{value:"API",id:"api",level:3},{value:"Platform",id:"platform",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3}],d={toc:p};function s(e){let{components:a,...t}=e;return(0,n.mdx)("wrapper",(0,r.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,n.mdx)("h3",{id:"docs"},"Docs"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Updated the documentation to reflect the new API changes listed below."),(0,n.mdx)("li",{parentName:"ul"},"Added documentation of the ",(0,n.mdx)("a",{parentName:"li",href:"/api/games#gameinfotype-enum"},"overwolf.games.GameInfoType")," Enum.")),(0,n.mdx)("h3",{id:"api"},"API"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Updated API: ",(0,n.mdx)("a",{parentName:"p",href:"/api/streaming"},(0,n.mdx)("inlineCode",{parentName:"a"},"overwolf.streaming"))," ","[EXPERIMENTAL]",":"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"ABSTRACT - It is now possible to choose to capture audio from a game and other specific audio processes, rather than only the entire desktop's audio."),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/api/streaming"},(0,n.mdx)("inlineCode",{parentName:"a"},"overwolf.streaming.getCapabilities"))," - New method for obtaining all streaming capabilities in one place, for both video and audio.",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Returns a callback with ",(0,n.mdx)("a",{parentName:"li",href:"/api/streaming"},(0,n.mdx)("inlineCode",{parentName:"a"},"overwolf.streaming.StreamingCapabilities")),"."),(0,n.mdx)("li",{parentName:"ul"},"Of particular note is the new ",(0,n.mdx)("inlineCode",{parentName:"li"},"audioProcessCaptureSupported")," flag, that lets us know if ",(0,n.mdx)("inlineCode",{parentName:"li"},"filtered_capture")," can be enabled."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/api/streaming"},(0,n.mdx)("inlineCode",{parentName:"a"},"overwolf.streaming.StreamAudioOptions.game"))," has been changed to ",(0,n.mdx)("a",{parentName:"li",href:"/api/streaming"},(0,n.mdx)("inlineCode",{parentName:"a"},"overwolf.streaming.GameAudioDevice")),". The new field ",(0,n.mdx)("inlineCode",{parentName:"li"},"filtered_capture")," has been added, and can be used if ",(0,n.mdx)("inlineCode",{parentName:"li"},"audioProcessCaptureSupported")," returned true (this depends on the machine running the app, so make sure to always check it!)."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"New API: ",(0,n.mdx)("a",{parentName:"p",href:"/api/games/tracked#getrunninggameinfocallback"},(0,n.mdx)("inlineCode",{parentName:"a"},"overwolf.games.tracked.getRunningGameInfo"))," - New method for obtaining game info from tracked games, similar to ",(0,n.mdx)("a",{parentName:"p",href:"/api/games"},(0,n.mdx)("inlineCode",{parentName:"a"},"overwolf.games.getRunningGameInfo")),"."),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"This method will only work if ",(0,n.mdx)("inlineCode",{parentName:"li"},"tracked")," and ",(0,n.mdx)("inlineCode",{parentName:"li"},"track_all_games")," are both set to true in the ",(0,n.mdx)("a",{parentName:"li",href:"/api/manifest#launch_event_settings-array"},"app manifest"),", but it will work on ",(0,n.mdx)("strong",{parentName:"li"},"all")," games, regardless of whether they're supported or not."),(0,n.mdx)("li",{parentName:"ul"},"Keep in mind that an unsupported game that was tracked still won't necessarily work as intended, so be sure to test that it works for your specific use case!")))),(0,n.mdx)("h3",{id:"platform"},"Platform"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Several improvements to Overwolf dll stability.")),(0,n.mdx)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/api/games"},(0,n.mdx)("inlineCode",{parentName:"a"},"overwolf.games.getRunningGameInfo"))," will no longer return a monitor handle of 0 in certain edge cases.")))}s.isMDXComponent=!0}}]);