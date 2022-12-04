"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[300],{3905:(e,a,n)=>{n.r(a),n.d(a,{MDXContext:()=>s,MDXProvider:()=>u,mdx:()=>v,useMDXComponents:()=>p,withMDXComponents:()=>m});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(){return i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},i.apply(this,arguments)}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function d(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),m=function(e){return function(a){var n=p(a.components);return t.createElement(e,i({},a,{components:n}))}},p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):d(d({},a),e)),n},u=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},f=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,c=m["".concat(l,".").concat(u)]||m[u]||h[u]||i;return n?t.createElement(c,d(d({ref:a},s),{},{components:n})):t.createElement(c,d({ref:a},s))}));function v(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=f;var d={};for(var o in a)hasOwnProperty.call(a,o)&&(d[o]=a[o]);d.originalType=e,d[c]="string"==typeof e?e:r,l[1]=d;for(var s=2;s<i;s++)l[s]=n[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9391:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var t=n(87462),r=(n(67294),n(3905));const i={id:"benchmarking",image:"/img/embed/deprecated.jpg",title:"overwolf.benchmarking API",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},l=void 0,d={unversionedId:"api/deprecated/benchmarking",id:"api/deprecated/benchmarking",title:"overwolf.benchmarking API",description:"This API is no longer supported and maintained. Some of it\u2019s methods and events might not work as intended.",source:"@site/pages/docs/api/deprecated/benchmarking.mdx",sourceDirName:"api/deprecated",slug:"/api/deprecated/benchmarking",permalink:"/api/deprecated/benchmarking",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/deprecated/benchmarking.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1667999405,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{id:"benchmarking",image:"/img/embed/deprecated.jpg",title:"overwolf.benchmarking API",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"api",previous:{title:"overwolf.media.audio API",permalink:"/api/deprecated/audio"},next:{title:"overwolf.campaigns API",permalink:"/api/campaigns/"}},o={},s=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"requestHardwareInfo(interval, callback)",id:"requesthardwareinfointerval-callback",level:2},{value:"Version added: 0.78",id:"version-added-078",level:4},{value:"Usage",id:"usage",level:4},{value:"Example data",id:"example-data",level:4},{value:"requestProcessInfo(interval, callback)",id:"requestprocessinfointerval-callback",level:2},{value:"Version added: 0.78",id:"version-added-078-1",level:4},{value:"Usage",id:"usage-1",level:4},{value:"Example data",id:"example-data-1",level:4},{value:"requestFpsInfo(interval, callback)",id:"requestfpsinfointerval-callback",level:2},{value:"Version added: 0.78",id:"version-added-078-2",level:4},{value:"Usage",id:"usage-2",level:4},{value:"Example data",id:"example-data-2",level:4},{value:"stopRequesting()",id:"stoprequesting",level:2},{value:"Version added: 0.78",id:"version-added-078-3",level:4},{value:"requestPermissions(callback)",id:"requestpermissionscallback",level:2},{value:"Version added: 0.78",id:"version-added-078-4",level:4},{value:"More info",id:"more-info",level:4},{value:"onHardwareInfoReady",id:"onhardwareinfoready",level:2},{value:"Version added: 0.78",id:"version-added-078-5",level:4},{value:"Event data example: Success",id:"event-data-example-success",level:4},{value:"onProcessInfoReady",id:"onprocessinfoready",level:2},{value:"Version added: 0.78",id:"version-added-078-6",level:4},{value:"Event data example: Success",id:"event-data-example-success-1",level:4},{value:"onFpsInfoReady",id:"onfpsinfoready",level:2},{value:"Version added: 0.78",id:"version-added-078-7",level:4},{value:"Event data example: Success",id:"event-data-example-success-2",level:4}],m={toc:s};function p(e){let{components:a,...n}=e;return(0,r.mdx)("wrapper",(0,t.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("admonition",{title:"OBSOLETE",type:"warning"},(0,r.mdx)("p",{parentName:"admonition"},"This API is no longer supported and maintained. Some of it\u2019s methods and events might not work as intended.  ")),(0,r.mdx)("p",null,"This is a set of functions for querying system stats and benchmarks. These calls require administrative permissions, which the user may be prompted to grant with a UAC message which may interrupt him while playing. In order to avoid interruptions, it is recommended to ask before requesting permissions."),(0,r.mdx)("h2",{id:"methods-reference"},"Methods Reference"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#requesthardwareinfointerval-callback"},"overwolf.benchmarking.requestHardwareInfo()")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#requestprocessinfointerval-callback"},"overwolf.benchmarking.requestProcessInfo()")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#requestfpsinfointerval-callback"},"overwolf.benchmarking.requestFpsInfo()")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#stoprequesting"},"overwolf.benchmarking.stopRequesting()")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#requestpermissionscallback"},"overwolf.benchmarking.requestPermissions()"))),(0,r.mdx)("h2",{id:"events-reference"},"Events Reference"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#onhardwareinfoready"},"overwolf.benchmarking.onHardwareInfoReady")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#onprocessinfoready"},"overwolf.benchmarking.onProcessInfoReady")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#onfpsinfoready"},"overwolf.benchmarking.onFpsInfoReady"))),(0,r.mdx)("h2",{id:"requesthardwareinfointerval-callback"},"requestHardwareInfo(interval, callback)"),(0,r.mdx)("h4",{id:"version-added-078"},"Version added: 0.78"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Requests hardware information within a given interval.")),(0,r.mdx)("p",null,"See ",(0,r.mdx)("a",{parentName:"p",href:"#requestpermissionscallback"},"requestPermissions")," for administrative permissions instructions."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"interval"),(0,r.mdx)("td",{parentName:"tr",align:null},"int"),(0,r.mdx)("td",{parentName:"tr",align:null},"The desired maximal interval (in milliseconds) in which events will be triggered. Minimum is 500ms")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"callback"),(0,r.mdx)("td",{parentName:"tr",align:null},"function"),(0,r.mdx)("td",{parentName:"tr",align:null},"Returns with the result")))),(0,r.mdx)("h4",{id:"usage"},"Usage"),(0,r.mdx)("p",null,"Before calling this function, you should subscribe to the ",(0,r.mdx)("a",{parentName:"p",href:"#onhardwareinfoready"},"onHardwareInfoReady")," event.",(0,r.mdx)("br",{parentName:"p"}),"\n","The event will be triggered every X time, as you set in the requestHardwareInfo interval."),(0,r.mdx)("p",null,"When you want to stop receiving the information, please call ",(0,r.mdx)("a",{parentName:"p",href:"#stoprequesting"},"stopRequesting()"),"."),(0,r.mdx)("h4",{id:"example-data"},"Example data"),(0,r.mdx)("p",null,"See the ",(0,r.mdx)("a",{parentName:"p",href:"#onhardwareinfoready"},"onHardwareInfoReady")," event."),(0,r.mdx)("h2",{id:"requestprocessinfointerval-callback"},"requestProcessInfo(interval, callback)"),(0,r.mdx)("h4",{id:"version-added-078-1"},"Version added: 0.78"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Requests process information within a given interval. ")),(0,r.mdx)("p",null,"See ",(0,r.mdx)("a",{parentName:"p",href:"#requestpermissionscallback"},"requestPermissions")," for administrative permissions instructions."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"interval"),(0,r.mdx)("td",{parentName:"tr",align:null},"int"),(0,r.mdx)("td",{parentName:"tr",align:null},"The desired maximal interval (in milliseconds) in which events will be triggered. Minimum is 500ms")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"callback"),(0,r.mdx)("td",{parentName:"tr",align:null},"function"),(0,r.mdx)("td",{parentName:"tr",align:null},"Returns with the result")))),(0,r.mdx)("h4",{id:"usage-1"},"Usage"),(0,r.mdx)("p",null,"Before calling this function, you should subscribe to the ",(0,r.mdx)("a",{parentName:"p",href:"#onprocessinfoready"},"onProcessInfoReady")," event.",(0,r.mdx)("br",{parentName:"p"}),"\n","The event will be triggered every X time, as you set in the requestProcessInfo interval."),(0,r.mdx)("p",null,"When you want to stop receiving the information, please call ",(0,r.mdx)("a",{parentName:"p",href:"#stoprequesting"},"stopRequesting()"),"."),(0,r.mdx)("h4",{id:"example-data-1"},"Example data"),(0,r.mdx)("p",null,"See the ",(0,r.mdx)("a",{parentName:"p",href:"#onprocessinfoready"},"onProcessInfoReady")," event."),(0,r.mdx)("h2",{id:"requestfpsinfointerval-callback"},"requestFpsInfo(interval, callback)"),(0,r.mdx)("h4",{id:"version-added-078-2"},"Version added: 0.78"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Requests game FPS information within a given interval. ")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"interval"),(0,r.mdx)("td",{parentName:"tr",align:null},"int"),(0,r.mdx)("td",{parentName:"tr",align:null},"The desired maximal interval (in milliseconds) in which events will be triggered. Minimum is 500ms")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"callback"),(0,r.mdx)("td",{parentName:"tr",align:null},"function"),(0,r.mdx)("td",{parentName:"tr",align:null},"Returns with the result")))),(0,r.mdx)("h4",{id:"usage-2"},"Usage"),(0,r.mdx)("p",null,"Before calling this function, you should subscribe to the ",(0,r.mdx)("a",{parentName:"p",href:"#onfpsinfoready"},"onFpsInfoReady")," event.",(0,r.mdx)("br",{parentName:"p"}),"\n","The event will be triggered every X time, as you set in the requestFpsInfo interval."),(0,r.mdx)("p",null,"When you want to stop receiving the information, please call ",(0,r.mdx)("a",{parentName:"p",href:"#stoprequesting"},"stopRequesting()"),"."),(0,r.mdx)("h4",{id:"example-data-2"},"Example data"),(0,r.mdx)("p",null,"See the ",(0,r.mdx)("a",{parentName:"p",href:"#onfpsinfoready"},"onFpsInfoReady")," event."),(0,r.mdx)("h2",{id:"stoprequesting"},"stopRequesting()"),(0,r.mdx)("h4",{id:"version-added-078-3"},"Version added: 0.78"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Stop receiving hardware/process events.")),(0,r.mdx)("p",null,"Use this when you no longer want to receive events or when you close your app."),(0,r.mdx)("h2",{id:"requestpermissionscallback"},"requestPermissions(callback)"),(0,r.mdx)("h4",{id:"version-added-078-4"},"Version added: 0.78"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"In case Overwolf requires administrative permissions, and after prompting the user to grant more permissions, call this function and then request your desired benchmarking information.")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"callback"),(0,r.mdx)("td",{parentName:"tr",align:null},"function"),(0,r.mdx)("td",{parentName:"tr",align:null},"Returns with the result")))),(0,r.mdx)("h4",{id:"more-info"},"More info"),(0,r.mdx)("p",null,"Note that the some functions in the benchmarking API requires Overwolf to have Administrative permissions, and should they be missing, the callback will return 'Permissions Required'.  "),(0,r.mdx)("p",null,"You will then have to ask the app user for permissions and according to the user\u2019s choice, call ",(0,r.mdx)("a",{parentName:"p",href:"#requestpermissionscallback"},"requestPermissions"),". "),(0,r.mdx)("p",null,"It is then necessary to call the requested function (for example, requestProcessInfo) again."),(0,r.mdx)("h2",{id:"onhardwareinfoready"},"onHardwareInfoReady"),(0,r.mdx)("h4",{id:"version-added-078-5"},"Version added: 0.78"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Fired when hardware information is ready with a JSON containing the information.")),(0,r.mdx)("h4",{id:"event-data-example-success"},"Event data example: Success"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'"General": {\n    "PowerPlan": "Balanced"\n},\n"Mainboard": {\n    "Name": "ASUS P8H61-M",\n    "Voltages": [{\n                "Name": "CPU VCore",\n                "Value": 0.968,\n...\n')),(0,r.mdx)("h2",{id:"onprocessinfoready"},"onProcessInfoReady"),(0,r.mdx)("h4",{id:"version-added-078-6"},"Version added: 0.78"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Fired when process information is ready with a JSON containing the information.")),(0,r.mdx)("h4",{id:"event-data-example-success-1"},"Event data example: Success"),(0,r.mdx)("p",null,"The event returns the top ten processes in terms of CPU usage and Memory usage."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "TopCpuUsage": [\n        {\n            "PrivateWorkingSet": 17674240,\n            "PrecentProcessorTime": 5.703688196431727,\n            "Id": 6988,\n            "Name": "OverwolfBrowser#3"\n        },\n        {\n            "PrivateWorkingSet": 16150528,\n            "PrecentProcessorTime": 5.703688196431727,\n            "Id": 8216,\n            "Name": "OverwolfBenchmarking"\n        },\n        ...\n    ],\n    "TopMemoryUsage": [\n        {\n            "PrivateWorkingSet": 611196928,\n            "PrecentProcessorTime": 2.851844098215878,\n            "Id": 5484,\n            "Name": "firefox"\n        },\n        {\n            "PrivateWorkingSet": 141586432,\n            "PrecentProcessorTime": 2.851844098215878,\n            "Id": 596,\n            "Name": "Overwolf"\n        },\n        ...\n    ]\n}\n')),(0,r.mdx)("h2",{id:"onfpsinfoready"},"onFpsInfoReady"),(0,r.mdx)("h4",{id:"version-added-078-7"},"Version added: 0.78"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Fired when FPS information is ready with a JSON containing the information.")),(0,r.mdx)("h4",{id:"event-data-example-success-2"},"Event data example: Success"),(0,r.mdx)("p",null,"If you are in a game:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{ \n    "Fps": 61 \n}\n')),(0,r.mdx)("p",null,"If you are not in a game:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "Fps":"Not in a game"\n}\n')))}p.isMDXComponent=!0}}]);