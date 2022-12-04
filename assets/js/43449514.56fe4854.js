"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5549],{3905:(e,a,t)=>{t.r(a),t.d(a,{MDXContext:()=>m,MDXProvider:()=>u,mdx:()=>g,useMDXComponents:()=>p,withMDXComponents:()=>s});var l=t(67294);function d(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(){return r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},r.apply(this,arguments)}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){d(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,l,d=function(e,a){if(null==e)return{};var t,l,d={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||(d[t]=e[t]);return d}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(d[t]=e[t])}return d}var m=l.createContext({}),s=function(e){return function(a){var t=p(a.components);return l.createElement(e,r({},a,{components:t}))}},p=function(e){var a=l.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=p(e.components);return l.createElement(m.Provider,{value:a},e.children)},c="mdxType",x={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},b=l.forwardRef((function(e,a){var t=e.components,d=e.mdxType,r=e.originalType,n=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(t),u=d,c=s["".concat(n,".").concat(u)]||s[u]||x[u]||r;return t?l.createElement(c,i(i({ref:a},m),{},{components:t})):l.createElement(c,i({ref:a},m))}));function g(e,a){var t=arguments,d=a&&a.mdxType;if("string"==typeof e||d){var r=t.length,n=new Array(r);n[0]=b;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i[c]="string"==typeof e?e:d,n[1]=i;for(var m=2;m<r;m++)n[m]=t[m];return l.createElement.apply(null,n)}return l.createElement.apply(null,t)}b.displayName="MDXCreateElement"},55835:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>n,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var l=t(87462),d=(t(67294),t(3905));const r={id:"social",image:"/img/embed/api-docs.jpg",title:"overwolf.social API",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},n=void 0,i={unversionedId:"api/social/social",id:"api/social/social",title:"overwolf.social API",description:"Provides sharing services to different social networks like Reddit, Twitter, etc. and also information about the currently disabled services.",source:"@site/pages/docs/api/social/social.mdx",sourceDirName:"api/social",slug:"/api/social/",permalink:"/api/social/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/social/social.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1667999405,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{id:"social",image:"/img/embed/api-docs.jpg",title:"overwolf.social API",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"api",previous:{title:"overwolf.settings.language API",permalink:"/api/settings/language"},next:{title:"overwolf.social.discord API",permalink:"/api/social/discord"}},o={},m=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"getDisabledServices(callback)",id:"getdisabledservicescallback",level:2},{value:"Version added: 0.126",id:"version-added-0126",level:4},{value:"uploadVideo(VideoUploadParams, callback, callback)",id:"uploadvideovideouploadparams-callback-callback",level:2},{value:"Version added: 0.203",id:"version-added-0203",level:4},{value:"cancelUpload(string, callback)",id:"canceluploadstring-callback",level:2},{value:"Version added: 0.203",id:"version-added-0203-1",level:4},{value:"VideoUploadParams Object",id:"videouploadparams-object",level:2},{value:"Version added: 0.203",id:"version-added-0203-2",level:4},{value:"id note",id:"id-note",level:4},{value:"VideoUploadResult Object",id:"videouploadresult-object",level:2},{value:"Version added: 0.203",id:"version-added-0203-3",level:4},{value:"VideoUploadProgress Object",id:"videouploadprogress-object",level:2},{value:"Version added: 0.203",id:"version-added-0203-4",level:4},{value:"Example data",id:"example-data",level:4},{value:"ShareState Enum",id:"sharestate-enum",level:2},{value:"Version added: 0.203",id:"version-added-0203-5",level:4},{value:"GetDisabledServicesResult Object",id:"getdisabledservicesresult-object",level:2},{value:"Version added: 0.126",id:"version-added-0126-1",level:4},{value:"Callback argument: Success",id:"callback-argument-success",level:4},{value:"GetUserInfoResult Object",id:"getuserinforesult-object",level:2},{value:"Version added: 0.128",id:"version-added-0128",level:4},{value:"Example data: Reddit / Youtube / Twitter / Gfycat",id:"example-data-reddit--youtube--twitter--gfycat",level:4},{value:"Example data: Discord user",id:"example-data-discord-user",level:4},{value:"LoginStateChangedEvent Object",id:"loginstatechangedevent-object",level:2},{value:"Version added: 0.128",id:"version-added-0128-1",level:4},{value:"Event Data Example: Success",id:"event-data-example-success",level:4},{value:"LoginState enum",id:"loginstate-enum",level:2},{value:"Version added: 0.128",id:"version-added-0128-2",level:4}],s={toc:m};function p(e){let{components:a,...t}=e;return(0,d.mdx)("wrapper",(0,l.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,d.mdx)("p",null,"Provides sharing services to different social networks like Reddit, Twitter, etc. and also information about the currently disabled services."),(0,d.mdx)("h2",{id:"methods-reference"},"Methods Reference"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#getdisabledservicescallback"},"overwolf.social.getDisabledServices()")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#uploadvideovideouploadparams-callback-callback"},"overwolf.social.uploadVideo()")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#canceluploadstring-callback"},"overwolf.social.cancelUpload()"))),(0,d.mdx)("h2",{id:"types-reference"},"Types Reference"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#getDisabledServicesResult-object"},"GetDisabledServicesResult")," Object"),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#getuserinforesult-object"},"GetUserInfoResult")," Object"),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#videouploadparams-object"},"overwolf.social.VideoUploadParams")," Object"),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#videouploadresult-object"},"overwolf.social.VideoUploadResult")," Object"),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#videouploadprogress-object"},"overwolf.social.VideoUploadProgress")," Object"),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#loginstate-enum"},"overwolf.social.LoginState")," enum"),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#loginstatechangedevent-object"},"overwolf.social.LoginStateChangedEvent")," Object\t\t")),(0,d.mdx)("h2",{id:"getdisabledservicescallback"},"getDisabledServices(callback)"),(0,d.mdx)("h4",{id:"version-added-0126"},"Version added: 0.126"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"Checks which of the supported sharing services are disabled or enabled.")),(0,d.mdx)("p",null,"Note: You can\u2019t disable or enable sharing service from your app. It\u2019s done from the Overwolf servers."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"callback"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"#getdisabledservicesresult-object"},"(Result: GetDisabledServicesResult)")," => void"),(0,d.mdx)("td",{parentName:"tr",align:null},"returns a list of disabled services")))),(0,d.mdx)("h2",{id:"uploadvideovideouploadparams-callback-callback"},"uploadVideo(VideoUploadParams, callback, callback)"),(0,d.mdx)("h4",{id:"version-added-0203"},"Version added: 0.203"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"Upload a video to the buffer server.")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"uploadParams"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"#videouploadparams-object"},"VideoUploadParams")),(0,d.mdx)("td",{parentName:"tr",align:null},"Parameters for the video being uploaded")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"resultCallback"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"#videouploadresult-object"},"(Result: VideoUploadResult)")," => void"),(0,d.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called with the resulting status of the request")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"progressCallback"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"#videouploadprogress-object"},"(Result: VideoUploadProgress)")," => void"),(0,d.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called whenever upload progress is made")))),(0,d.mdx)("h2",{id:"canceluploadstring-callback"},"cancelUpload(string, callback)"),(0,d.mdx)("h4",{id:"version-added-0203-1"},"Version added: 0.203"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"Cancels an upload to the buffer server mid-way.")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"id"),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"The request ID")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"callback"),(0,d.mdx)("td",{parentName:"tr",align:null},"(Result) => void"),(0,d.mdx)("td",{parentName:"tr",align:null},"Called with the result of the cancellation")))),(0,d.mdx)("h2",{id:"videouploadparams-object"},"VideoUploadParams Object"),(0,d.mdx)("h4",{id:"version-added-0203-2"},"Version added: 0.203"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"This object defines all parameters that should be passed to the ",(0,d.mdx)("a",{parentName:"p",href:"#canceluploadstring-callback"},(0,d.mdx)("inlineCode",{parentName:"a"},"overwolf.social.cancelUpload()")),".")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"id"),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"The ID for the current upload. See ",(0,d.mdx)("a",{parentName:"td",href:"#id-note"},"note"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"filePath"),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"The path to the file to upload")))),(0,d.mdx)("h4",{id:"id-note"},"id note"),(0,d.mdx)("p",null,"When calling ",(0,d.mdx)("a",{parentName:"p",href:"#uploadvideovideouploadparams-callback-callback"},(0,d.mdx)("inlineCode",{parentName:"a"},"overwolf.social.uploadVideo()")),", it is required to supply it with a request ID. This ID will also be used in case you wish to cancel this share using ",(0,d.mdx)("a",{parentName:"p",href:"#canceluploadstring-callback"},(0,d.mdx)("inlineCode",{parentName:"a"},"overwolf.social.cancelUpload()")),"."),(0,d.mdx)("h2",{id:"videouploadresult-object"},"VideoUploadResult Object"),(0,d.mdx)("h4",{id:"version-added-0203-3"},"Version added: 0.203"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"Container for the url created in a successful upload.")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"url"),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"The url of the generated result")))),(0,d.mdx)("h2",{id:"videouploadprogress-object"},"VideoUploadProgress Object"),(0,d.mdx)("h4",{id:"version-added-0203-4"},"Version added: 0.203"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"The current progress of the share request")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"progress"),(0,d.mdx)("td",{parentName:"tr",align:null},"int"),(0,d.mdx)("td",{parentName:"tr",align:null},"The current precentage of upload progress")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"id"),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"The id of the share request")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"state"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"#sharestate-enum"},"ShareState")),(0,d.mdx)("td",{parentName:"tr",align:null},"The current state of the share request")))),(0,d.mdx)("h4",{id:"example-data"},"Example data"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "progress": 60,\n  "id": "7",\n  "state": "Uploading"\n}\n')),(0,d.mdx)("h2",{id:"sharestate-enum"},"ShareState Enum"),(0,d.mdx)("h4",{id:"version-added-0203-5"},"Version added: 0.203"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"The current state of the ",(0,d.mdx)("a",{parentName:"p",href:"#uploadvideovideouploadparams-callback-callback"},(0,d.mdx)("inlineCode",{parentName:"a"},"overwolf.social.uploadVideo()"))," operation.")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Options"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Started"),(0,d.mdx)("td",{parentName:"tr",align:null},"The upload has started")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Uploading"),(0,d.mdx)("td",{parentName:"tr",align:null},"The upload is in progress")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Finished"),(0,d.mdx)("td",{parentName:"tr",align:null},"The upload has finished")))),(0,d.mdx)("h2",{id:"getdisabledservicesresult-object"},"GetDisabledServicesResult Object"),(0,d.mdx)("h4",{id:"version-added-0126-1"},"Version added: 0.126"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"Container for GetDisabledServices result.")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"disabled_services"),(0,d.mdx)("td",{parentName:"tr",align:null},"string[]"),(0,d.mdx)("td",{parentName:"tr",align:null})))),(0,d.mdx)("h4",{id:"callback-argument-success"},"Callback argument: Success"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{"success":true,"disabled_services":["youtube"]}\n')),(0,d.mdx)("h2",{id:"getuserinforesult-object"},"GetUserInfoResult Object"),(0,d.mdx)("h4",{id:"version-added-0128"},"Version added: 0.128"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"Container for get user info result.")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"userInfo"),(0,d.mdx)("td",{parentName:"tr",align:null},"object"),(0,d.mdx)("td",{parentName:"tr",align:null})))),(0,d.mdx)("h4",{id:"example-data-reddit--youtube--twitter--gfycat"},"Example data: Reddit / Youtube / Twitter / Gfycat"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{   \n  "status": "success",  \n  "userInfo": { \n     "avatar": "http://abs.twimg.com/sticky/...",   \n     "id": "111111111112222222",    \n     "name": "full name",   \n     "screenName": "screenname123"  \n  } \n}   \n')),(0,d.mdx)("h4",{id:"example-data-discord-user"},"Example data: Discord user"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{   \n  "status": "success",  \n  "userInfo": { \n    "id": "1111111111111",  \n    "discriminator": 9999,  \n    "username": "itay", \n    "email": "itay@overwolf.com",   \n    "avatar": null, \n    "verified": true    \n  } \n}   \n')),(0,d.mdx)("h2",{id:"loginstatechangedevent-object"},"LoginStateChangedEvent Object"),(0,d.mdx)("h4",{id:"version-added-0128-1"},"Version added: 0.128"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"Container object.")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"status"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"#loginstate-enum"},"LoginState")," enum"),(0,d.mdx)("td",{parentName:"tr",align:null})))),(0,d.mdx)("h4",{id:"event-data-example-success"},"Event Data Example: Success"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{ "state": "connected"/"disconnected" }\n')),(0,d.mdx)("h2",{id:"loginstate-enum"},"LoginState enum"),(0,d.mdx)("h4",{id:"version-added-0128-2"},"Version added: 0.128"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Options"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Connected"),(0,d.mdx)("td",{parentName:"tr",align:null},'"connected"')),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Disconnected"),(0,d.mdx)("td",{parentName:"tr",align:null},'"disconnected"')))))}p.isMDXComponent=!0}}]);