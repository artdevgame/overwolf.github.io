"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9755],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>i,MDXProvider:()=>s,mdx:()=>g,useMDXComponents:()=>u,withMDXComponents:()=>p});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),p=function(e){return function(t){var a=u(t.components);return n.createElement(e,r({},t,{components:a}))}},u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},x="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=u(a),s=l,x=p["".concat(m,".").concat(s)]||p[s]||c[s]||r;return a?n.createElement(x,d(d({ref:t},i),{},{components:a})):n.createElement(x,d({ref:t},i))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,m=new Array(r);m[0]=h;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[x]="string"==typeof e?e:l,m[1]=d;for(var i=2;i<r;i++)m[i]=a[i];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},29575:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>m,default:()=>x,frontMatter:()=>r,metadata:()=>d,toc:()=>i});var n=a(87462),l=(a(67294),a(3905));const r={id:"path-of-exile",image:"/img/embed/games/path-of-exile.jpg",title:"Path of Exile Game events",hide_title:!0,sidebar_label:"Path of Exile",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},m=void 0,d={unversionedId:"api/games/events/path-of-exile",id:"api/games/events/path-of-exile",title:"Path of Exile Game events",description:"Please read the overwolf.games.events documentation page to learn how to use Overwolf game events.",source:"@site/pages/docs/api/games/events/path-of-exile.mdx",sourceDirName:"api/games/events",slug:"/api/games/events/path-of-exile",permalink:"/api/games/events/path-of-exile",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/games/events/path-of-exile.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1667999405,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{id:"path-of-exile",image:"/img/embed/games/path-of-exile.jpg",title:"Path of Exile Game events",hide_title:!0,sidebar_label:"Path of Exile",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"api",previous:{title:"Overwatch",permalink:"/api/games/events/overwatch"},next:{title:"PlayerUnkown's Battlegrounds",permalink:"/api/games/events/player-unknowns-battlegrounds"}},o={},i=[{value:"Sample Apps",id:"sample-apps",level:2},{value:"Available Features",id:"available-features",level:2},{value:"Game event status",id:"game-event-status",level:2},{value:"gep_internal",id:"gep_internal",level:2},{value:"Info Updates",id:"info-updates",level:3},{value:"<em>gep_internal</em> note",id:"gep_internal-note",level:4},{value:"kill",id:"kill",level:2},{value:"Events",id:"events",level:3},{value:"<em>boss_kill</em> note",id:"boss_kill-note",level:4},{value:"death",id:"death",level:2},{value:"Events",id:"events-1",level:3},{value:"<em>death</em> note",id:"death-note",level:4},{value:"me",id:"me",level:2},{value:"Info Updates",id:"info-updates-1",level:3},{value:"<em>character_name</em> note",id:"character_name-note",level:4},{value:"<em>character_level</em> note",id:"character_level-note",level:4},{value:"match_info",id:"match_info",level:2},{value:"Info Updates",id:"info-updates-2",level:3},{value:"Events",id:"events-2",level:3},{value:"<em>current_zone</em> note",id:"current_zone-note",level:4},{value:"<em>opened_page</em> note",id:"opened_page-note",level:4},{value:"<em>match_outcome</em> note",id:"match_outcome-note",level:4}],p=(u="GameInfo",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",e)});var u;const s={toc:i};function x(e){let{components:t,...a}=e;return(0,l.mdx)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("head",null,(0,l.mdx)("meta",{name:"keywords",content:"API for Path of Exile, Path of Exile API, SDK for Path of Exile, Path of Exile SDK"})),(0,l.mdx)(p,{gameID:7212,showCompliance:!0,showDocs:!1,mdxType:"GameInfo"}),(0,l.mdx)("p",null,"Please read the ",(0,l.mdx)("a",{parentName:"p",href:"../events"},"overwolf.games.events")," documentation page to learn how to use Overwolf game events."),(0,l.mdx)("admonition",{title:"Important Note",type:"note"},(0,l.mdx)("p",{parentName:"admonition"}," We are aware that recently an Epic Games version was released, and our events are currently unreliable in that version. Please make sure to use the events below for Steam and Standalone PoE versions")),(0,l.mdx)("h2",{id:"sample-apps"},"Sample Apps"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/overwolf/events-sample-apps"},"Path of Exile game events sample app"))),(0,l.mdx)("h2",{id:"available-features"},"Available Features"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#gep_internal"},"gep_internal")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#kill"},"kill")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#death"},"death")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#me"},"me")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#match_info"},"match_info"))),(0,l.mdx)("h2",{id:"game-event-status"},"Game event status"),(0,l.mdx)("p",null,"It is highly recommended to communicate errors and warnings to app users. "),(0,l.mdx)("p",null,"Check the current game event status ",(0,l.mdx)("a",{parentName:"p",href:"/status/"},"here"),". Alternately, you can easily check that status from your app itself, ",(0,l.mdx)("a",{parentName:"p",href:"/topics/using-events/how-to-check-events-status-from-app"},"using our API"),"."),(0,l.mdx)("h2",{id:"gep_internal"},"gep_internal"),(0,l.mdx)("h3",{id:"info-updates"},"Info Updates"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"key"),(0,l.mdx)("th",{parentName:"tr",align:null},"Category"),(0,l.mdx)("th",{parentName:"tr",align:null},"Values"),(0,l.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,l.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"gep_internal"),(0,l.mdx)("td",{parentName:"tr",align:null},"gep_internal"),(0,l.mdx)("td",{parentName:"tr",align:null},"Local + Public version number"),(0,l.mdx)("td",{parentName:"tr",align:null},"See ",(0,l.mdx)("a",{parentName:"td",href:"#gep_internal-note"},"notes")),(0,l.mdx)("td",{parentName:"tr",align:null},"143.0")))),(0,l.mdx)("h4",{id:"gep_internal-note"},(0,l.mdx)("em",{parentName:"h4"},"gep_internal")," note"),(0,l.mdx)("p",null,"Data Example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"gep_internal":{"version_info":"{"local_version":"157.0.1","public_version":"157.0.1","is_updated":true}"}},"feature":"gep_internal"}\n')),(0,l.mdx)("h2",{id:"kill"},"kill"),(0,l.mdx)("h3",{id:"events"},"Events"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Event"),(0,l.mdx)("th",{parentName:"tr",align:null},"Event Data"),(0,l.mdx)("th",{parentName:"tr",align:null},"Fired When"),(0,l.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,l.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"boss_kill"),(0,l.mdx)("td",{parentName:"tr",align:null},"Name of boss"),(0,l.mdx)("td",{parentName:"tr",align:null},"Boss was killed"),(0,l.mdx)("td",{parentName:"tr",align:null},"See ",(0,l.mdx)("a",{parentName:"td",href:"#boss_kill-note"},"notes")),(0,l.mdx)("td",{parentName:"tr",align:null},"143.1")))),(0,l.mdx)("h4",{id:"boss_kill-note"},(0,l.mdx)("em",{parentName:"h4"},"boss_kill")," note"),(0,l.mdx)("p",null,"Data Example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"boss_kill","data":"Fire Fury"}]}\n')),(0,l.mdx)("h2",{id:"death"},"death"),(0,l.mdx)("h3",{id:"events-1"},"Events"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Event"),(0,l.mdx)("th",{parentName:"tr",align:null},"Event Data"),(0,l.mdx)("th",{parentName:"tr",align:null},"Fired When"),(0,l.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,l.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"death"),(0,l.mdx)("td",{parentName:"tr",align:null},"null"),(0,l.mdx)("td",{parentName:"tr",align:null},"Local player died"),(0,l.mdx)("td",{parentName:"tr",align:null},"See ",(0,l.mdx)("a",{parentName:"td",href:"#death-note"},"notes")),(0,l.mdx)("td",{parentName:"tr",align:null},"143.1")))),(0,l.mdx)("h4",{id:"death-note"},(0,l.mdx)("em",{parentName:"h4"},"death")," note"),(0,l.mdx)("p",null,"Data Example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"death","data":null}]}\n')),(0,l.mdx)("h2",{id:"me"},"me"),(0,l.mdx)("h3",{id:"info-updates-1"},"Info Updates"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"key"),(0,l.mdx)("th",{parentName:"tr",align:null},"Category"),(0,l.mdx)("th",{parentName:"tr",align:null},"Values"),(0,l.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,l.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"character_name"),(0,l.mdx)("td",{parentName:"tr",align:null},"me"),(0,l.mdx)("td",{parentName:"tr",align:null},"Local player nickname."),(0,l.mdx)("td",{parentName:"tr",align:null},"See ",(0,l.mdx)("a",{parentName:"td",href:"#character_name-note"},"notes")),(0,l.mdx)("td",{parentName:"tr",align:null},"144.0")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"character_level"),(0,l.mdx)("td",{parentName:"tr",align:null},"me"),(0,l.mdx)("td",{parentName:"tr",align:null},"Local player level."),(0,l.mdx)("td",{parentName:"tr",align:null},"See ",(0,l.mdx)("a",{parentName:"td",href:"#character_level-note"},"notes")),(0,l.mdx)("td",{parentName:"tr",align:null},"144.0")))),(0,l.mdx)("h4",{id:"character_name-note"},(0,l.mdx)("em",{parentName:"h4"},"character_name")," note"),(0,l.mdx)("p",null,"Data Example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"me":{"character_name":"Shaelgaas"}},"feature":"me"}\n')),(0,l.mdx)("h4",{id:"character_level-note"},(0,l.mdx)("em",{parentName:"h4"},"character_level")," note"),(0,l.mdx)("p",null,"Data Example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"me":{"character_level":"31"}},"feature":"me"}\n')),(0,l.mdx)("h2",{id:"match_info"},"match_info"),(0,l.mdx)("h3",{id:"info-updates-2"},"Info Updates"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"key"),(0,l.mdx)("th",{parentName:"tr",align:null},"Category"),(0,l.mdx)("th",{parentName:"tr",align:null},"Values"),(0,l.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,l.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"current_zone"),(0,l.mdx)("td",{parentName:"tr",align:null},"match_info"),(0,l.mdx)("td",{parentName:"tr",align:null},"Name of the current zone"),(0,l.mdx)("td",{parentName:"tr",align:null},"See ",(0,l.mdx)("a",{parentName:"td",href:"#current_zone-note"},"notes")),(0,l.mdx)("td",{parentName:"tr",align:null},"144.0")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"opened_page"),(0,l.mdx)("td",{parentName:"tr",align:null},"match_info"),(0,l.mdx)("td",{parentName:"tr",align:null},"Whether inventory is open/closed"),(0,l.mdx)("td",{parentName:"tr",align:null},"See ",(0,l.mdx)("a",{parentName:"td",href:"#opened_page-note"},"notes")),(0,l.mdx)("td",{parentName:"tr",align:null},"144.0")))),(0,l.mdx)("h3",{id:"events-2"},"Events"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Event"),(0,l.mdx)("th",{parentName:"tr",align:null},"Event Data"),(0,l.mdx)("th",{parentName:"tr",align:null},"Fired When"),(0,l.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,l.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"match_outcome"),(0,l.mdx)("td",{parentName:"tr",align:null},"victory/defeat"),(0,l.mdx)("td",{parentName:"tr",align:null},"Boss killed/You died."),(0,l.mdx)("td",{parentName:"tr",align:null},"See ",(0,l.mdx)("a",{parentName:"td",href:"#match_outcome-note"},"notes")),(0,l.mdx)("td",{parentName:"tr",align:null},"144.0")))),(0,l.mdx)("h4",{id:"current_zone-note"},(0,l.mdx)("em",{parentName:"h4"},"current_zone")," note"),(0,l.mdx)("p",null,"Data Example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"current_zone":"Lioneye\'s Watch"}},"feature":"match_info"}\n')),(0,l.mdx)("h4",{id:"opened_page-note"},(0,l.mdx)("em",{parentName:"h4"},"opened_page")," note"),(0,l.mdx)("p",null,"Possible values: "),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"inventory"),(0,l.mdx)("li",{parentName:"ul"},"passive_tree"),(0,l.mdx)("li",{parentName:"ul"},"character_sheet"),(0,l.mdx)("li",{parentName:"ul"},"stash"),(0,l.mdx)("li",{parentName:"ul"},"map_device"),(0,l.mdx)("li",{parentName:"ul"},"pantheon"),(0,l.mdx)("li",{parentName:"ul"},"crafting_bench")),(0,l.mdx)("p",null,"Data Example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"opened_page":"inventory"}},"feature":"match_info"}\n{"info":{"match_info":{"opened_page":null}},"feature":"match_info"}\n')),(0,l.mdx)("h4",{id:"match_outcome-note"},(0,l.mdx)("em",{parentName:"h4"},"match_outcome")," note"),(0,l.mdx)("p",null,"Data Example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"match_outcome","data":"victory"}]}\n{"events":[{"name":"match_outcome","data":"defeat"}]}\n')))}x.isMDXComponent=!0}}]);