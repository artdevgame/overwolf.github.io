"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9763],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return d},MDXProvider:function(){return p},mdx:function(){return v},useMDXComponents:function(){return u},withMDXComponents:function(){return s}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){return function(t){var n=u(t.components);return a.createElement(e,l({},t,{components:n}))}},u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),s=u(n),p=r,g=s["".concat(o,".").concat(p)]||s[p]||c[p]||l;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=g;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},12056:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return m},default:function(){return c},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],i={id:"0-0-1",title:"WebSockets Game Events Integration 0.0.1",sidebar_label:"0.0.1"},m=void 0,d={unversionedId:"internal/websocket-gep/versions/0-0-x/0-0-1",id:"internal/websocket-gep/versions/0-0-x/0-0-1",title:"WebSockets Game Events Integration 0.0.1",description:"Protocol Component overview",source:"@site/pages/docs/internal/websocket-gep/versions/0-0-x/0.0.1.mdx",sourceDirName:"internal/websocket-gep/versions/0-0-x",slug:"/internal/websocket-gep/versions/0-0-x/0-0-1",permalink:"/internal/websocket-gep/versions/0-0-x/0-0-1",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/internal/websocket-gep/versions/0-0-x/0.0.1.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1658064158,formattedLastUpdatedAt:"7/17/2022",frontMatter:{id:"0-0-1",title:"WebSockets Game Events Integration 0.0.1",sidebar_label:"0.0.1"},sidebar:"gepWebsockets",previous:{title:"Changelog",permalink:"/internal/websocket-gep/changelog"},next:{title:"0.0.2",permalink:"/internal/websocket-gep/versions/0-0-x/0-0-2"}},s={},u=[{value:"Protocol Component overview",id:"protocol-component-overview",level:2},{value:"Active Games Folder",id:"active-games-folder",level:3},{value:"Game Events Provider (Game)",id:"game-events-provider-game",level:3},{value:"Event Types",id:"event-types",level:4},{value:"Game Events",id:"game-events",level:5},{value:"Info Events",id:"info-events",level:5},{value:"API",id:"api",level:4},{value:"sendGameEvent",id:"sendgameevent",level:5},{value:"sendInfoUpdate",id:"sendinfoupdate",level:5},{value:"Game Events Consumer (App)",id:"game-events-consumer-app",level:3},{value:"API",id:"api-1",level:4},{value:"Subscribe",id:"subscribe",level:5},{value:"Return value",id:"return-value",level:6},{value:"Unsubscribe",id:"unsubscribe",level:5},{value:"Return value",id:"return-value-1",level:6},{value:"Sync",id:"sync",level:5},{value:"Return value",id:"return-value-2",level:6}],p={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.mdx)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h2",{id:"protocol-component-overview"},"Protocol Component overview"),(0,l.mdx)("p",null,"The WebSocket Game Events Provider (GEP) solution includes the following components:"),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},"Active Games Folder"),(0,l.mdx)("li",{parentName:"ol"},"Game Events Provider (Game)"),(0,l.mdx)("li",{parentName:"ol"},"Game Events Consumer (App)")),(0,l.mdx)("h3",{id:"active-games-folder"},"Active Games Folder"),(0,l.mdx)("p",null,"A folder located at \u201c%appdata%/GEP\u201d, containing .ini files. Each file contains a single key-value pair, with the key being an active game\u2019s name, and the value being the game\u2019s websocket\u2019s port."),(0,l.mdx)("p",null,"To keep the folder clean, every game is responsible for deleting its file once the game is closed."),(0,l.mdx)("h3",{id:"game-events-provider-game"},"Game Events Provider (Game)"),(0,l.mdx)("p",null,"Provides events from the game via a local server WebSocket. The game is responsible for opening the socket, detecting when the relevant events occur, and sending them to all connected sockets."),(0,l.mdx)("p",null,"To allow the socket to be detected, once the socket is initialized, the game needs to create a new .ini file under the \u201cActive Games Folder\u201d, detailing the game name, and the socket\u2019s port."),(0,l.mdx)("h4",{id:"event-types"},"Event Types"),(0,l.mdx)("h5",{id:"game-events"},"Game Events"),(0,l.mdx)("p",null,"Game events refer to fleeting changes in the game. An action performed by a player, a certain interaction with the environment, etc."),(0,l.mdx)("p",null,"Game Events do not directly change the overall state of the game."),(0,l.mdx)("h5",{id:"info-events"},"Info Events"),(0,l.mdx)("p",null,"Info events refer to lasting changes in the game. The player exiting the save, a change in the game\u2019s phase, etc."),(0,l.mdx)("p",null,"Info Events directly change the overall state of the game."),(0,l.mdx)("h4",{id:"api"},"API"),(0,l.mdx)("h5",{id:"sendgameevent"},"sendGameEvent"),(0,l.mdx)("p",null,"Sends a new game event to a specific connection that is subscribed to it."),(0,l.mdx)("p",null,"This is a notification, and does not expect a response from the consumer. As such, there is no request id."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Field Name"),(0,l.mdx)("th",{parentName:"tr",align:null},"Value"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"jsonrpc"),(0,l.mdx)("td",{parentName:"tr",align:null},"2.0"),(0,l.mdx)("td",{parentName:"tr",align:null},"The protocol version")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"method"),(0,l.mdx)("td",{parentName:"tr",align:null},"sendGameEvent"),(0,l.mdx)("td",{parentName:"tr",align:null},"The action to perform")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"params"),(0,l.mdx)("td",{parentName:"tr",align:null},"Object containing event name and data"),(0,l.mdx)("td",{parentName:"tr",align:null},"No parameters")))),(0,l.mdx)("h5",{id:"sendinfoupdate"},"sendInfoUpdate"),(0,l.mdx)("p",null,"Sends a new info event to a specific connection that is subscribed to it."),(0,l.mdx)("p",null,"This is a notification, and does not expect a response from the consumer. As such, there is no request id."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Field Name"),(0,l.mdx)("th",{parentName:"tr",align:null},"Value"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"jsonrpc"),(0,l.mdx)("td",{parentName:"tr",align:null},"2.0"),(0,l.mdx)("td",{parentName:"tr",align:null},"The protocol version")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"method"),(0,l.mdx)("td",{parentName:"tr",align:null},"sendInfoUpdate"),(0,l.mdx)("td",{parentName:"tr",align:null},"The action to perform")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"params"),(0,l.mdx)("td",{parentName:"tr",align:null},"Object containing event name and data"),(0,l.mdx)("td",{parentName:"tr",align:null},"No parameters")))),(0,l.mdx)("h3",{id:"game-events-consumer-app"},"Game Events Consumer (App)"),(0,l.mdx)("p",null,"Consumes events from a game via a local client WebSocket. The app is responsible for connecting to the game\u2019s socket, subscribing to the events it needs, and handling them once they arrive."),(0,l.mdx)("p",null,"To locate potential games to connect to, the app should periodically scan the \u201cActive Games Folder\u201d, attempting to connect to any valid connection it deems important."),(0,l.mdx)("h4",{id:"api-1"},"API"),(0,l.mdx)("p",null,"The consumer may call these methods on the game, using the json-rpc protocol."),(0,l.mdx)("h5",{id:"subscribe"},"Subscribe"),(0,l.mdx)("p",null,"Requests to subscribe the current app to new events."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Field Name"),(0,l.mdx)("th",{parentName:"tr",align:null},"Value"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"jsonrpc"),(0,l.mdx)("td",{parentName:"tr",align:null},"2.0"),(0,l.mdx)("td",{parentName:"tr",align:null},"The protocol version")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"id"),(0,l.mdx)("td",{parentName:"tr",align:null},"Unique for each message"),(0,l.mdx)("td",{parentName:"tr",align:null},"The correlation identifier")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"method"),(0,l.mdx)("td",{parentName:"tr",align:null},"subscribe"),(0,l.mdx)("td",{parentName:"tr",align:null},"The action to perform")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"params"),(0,l.mdx)("td",{parentName:"tr",align:null},"Array of events"),(0,l.mdx)("td",{parentName:"tr",align:null},"No parameters")))),(0,l.mdx)("h6",{id:"return-value"},"Return value"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{ \n    "result": {\n        "subscribedTo"?: string[] // An array of all the events successfully subscribed to\n        "subscriptionFailed"?: string[] // An array of all the events subscribing to failed\n    }\n    "success": true\n}\n')),(0,l.mdx)("p",null,"The \u201csuccess\u201d parameter is true if at least one event was subscribed to. False otherwise."),(0,l.mdx)("h5",{id:"unsubscribe"},"Unsubscribe"),(0,l.mdx)("p",null,"Requests to subscribe the current app to new events."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Field Name"),(0,l.mdx)("th",{parentName:"tr",align:null},"Value"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"jsonrpc"),(0,l.mdx)("td",{parentName:"tr",align:null},"2.0"),(0,l.mdx)("td",{parentName:"tr",align:null},"The protocol version")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"id"),(0,l.mdx)("td",{parentName:"tr",align:null},"Unique for each message"),(0,l.mdx)("td",{parentName:"tr",align:null},"The correlation identifier")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"method"),(0,l.mdx)("td",{parentName:"tr",align:null},"unsubscribe"),(0,l.mdx)("td",{parentName:"tr",align:null},"The action to perform")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"params"),(0,l.mdx)("td",{parentName:"tr",align:null},"Array of events"),(0,l.mdx)("td",{parentName:"tr",align:null},"No parameters")))),(0,l.mdx)("h6",{id:"return-value-1"},"Return value"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{ \n    "result": {\n        "unsubscribedFrom"?: string[] // An array of all the events successfully unsubscribed from\n        "unsubscriptionFailed"?: string[] // An array of all the events unsubscribing from failed\n    }\n    "success": true\n}\n')),(0,l.mdx)("p",null,"The \u201csuccess\u201d parameter is true if at least one event was unsubscribed from. False otherwise."),(0,l.mdx)("h5",{id:"sync"},"Sync"),(0,l.mdx)("p",null,"Requests a forced synchronization of the game\u2019s current game-state."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Field Name"),(0,l.mdx)("th",{parentName:"tr",align:null},"Value"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"jsonrpc"),(0,l.mdx)("td",{parentName:"tr",align:null},"2.0"),(0,l.mdx)("td",{parentName:"tr",align:null},"The protocol version")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"id"),(0,l.mdx)("td",{parentName:"tr",align:null},"Unique for each message"),(0,l.mdx)("td",{parentName:"tr",align:null},"The correlation identifier")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"method"),(0,l.mdx)("td",{parentName:"tr",align:null},"sync"),(0,l.mdx)("td",{parentName:"tr",align:null},"The action to perform")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"params"),(0,l.mdx)("td",{parentName:"tr",align:null},"-"),(0,l.mdx)("td",{parentName:"tr",align:null},"No parameters")))),(0,l.mdx)("h6",{id:"return-value-2"},"Return value"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{ \n    "result": {\n        "gameState": object // An object containing the current state of all info-events data\n    }\n    "success": true\n}\n')),(0,l.mdx)("p",null,"The \u201csuccess\u201d parameter is true if a gameState was returned. False otherwise.\nOn failure, the \u201cresult\u201d parameter is null."))}c.isMDXComponent=!0}}]);