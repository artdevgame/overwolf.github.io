"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[549],{3905:(e,a,t)=>{t.r(a),t.d(a,{MDXContext:()=>g,MDXProvider:()=>p,mdx:()=>h,useMDXComponents:()=>c,withMDXComponents:()=>m});var n=t(67294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(){return r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},r.apply(this,arguments)}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var g=n.createContext({}),m=function(e){return function(a){var t=c(a.components);return n.createElement(e,r({},a,{components:t}))}},c=function(e){var a=n.useContext(g),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(g.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},f=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),m=c(t),p=s,u=m["".concat(o,".").concat(p)]||m[p]||d[p]||r;return t?n.createElement(u,l(l({ref:a},g),{},{components:t})):n.createElement(u,l({ref:a},g))}));function h(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,o=new Array(r);o[0]=f;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l[u]="string"==typeof e?e:s,o[1]=l;for(var g=2;g<r;g++)o[g]=t[g];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},22690:(e,a,t)=>{t.d(a,{Z:()=>c});var n=t(67294);function s(e){const{className:a,path:t,imgSrc:s,text:r,gameID:o}=e;return n.createElement("li",{className:a},n.createElement("a",{href:t},n.createElement("span",{className:"game-info"},n.createElement("img",{src:s})," ",r),n.createElement("span",{className:"game-id"},"Game ID: ",n.createElement("span",null,o))))}const r=function(e){const{gameListData:a}=e,t=function(e){return e.map((e=>{let a="game ";switch(e.state){case 1:a+="good";break;case 2:a+="medium";break;case 3:a+="bad"}return n.createElement(s,{key:e.id,gameID:e.displayId?e.displayId:e.id,className:a,path:e.path,imgSrc:e.iconUrl,text:e.name})}))}(a);return t.sort(((e,a)=>e.props.text<a.props.text?-1:1)),n.createElement("article",null,n.createElement("div",{className:"gep-games-list"},n.createElement("ul",{className:"legend"},n.createElement("li",{className:"good"},"Good to go"),n.createElement("li",{className:"medium"},"Some game events may be unavailable"),n.createElement("li",{className:"bad"},"Game events are currently unavailable")),n.createElement("ul",{className:"list"},t)))};var o=t(62517),l=t(5240);function i(e){return n.createElement("form",{role:"search",method:"get",className:"search-game",action:"#",autoComplete:"off",onSubmit:e=>{e.preventDefault()}},n.createElement("input",{type:"search",name:"search",className:"search-input",placeholder:"Search for game events, e.g. \u201ckill\u201d",onKeyUp:e=>{!function(e){const a=e.target,t=document.querySelectorAll(".game-data ul li");let n=a.value.toLowerCase();0===n.length?t.forEach((e=>e.removeAttribute("style"))):t.forEach((function(e){e.textContent.toLowerCase().includes(n)?e.removeAttribute("style"):e.style.display="none"}))}(e)}}),n.createElement("button",{type:"submit",className:"search-submit",title:"Search"},n.createElement("svg",{className:"games-icon"},n.createElement("use",{href:"../../img/sprite.svg#searchIcon"}))))}const g=function(e){const{gameStatusData:a,gameID:t,docsPath:s}=e,r=e=>{if(!a.features||0===a.features.length)return n.createElement("li",{className:"coming-soon"},"Coming soon");let t=0;const s=[];for(let r of a.features)for(let a of r.keys)a.type==e&&s.push(n.createElement("li",{className:(0,l.F)(a.state),key:t++},a.name));return s},g=r(0),m=r(1);return n.createElement("article",null,n.createElement("div",{className:"entry-content"},n.createElement("div",{className:"gep-game"},n.createElement(o.Z,{gameID:t,showStatus:!1}),n.createElement(i,null),n.createElement("div",{className:"game-events-info"},n.createElement("div",{className:"game-data"},n.createElement("h4",null,"Events"),n.createElement("ul",null,g)),n.createElement("div",{className:"game-data"},n.createElement("h4",null,"Info updates"),n.createElement("ul",null,m))))))};var m=t(66410);const c=function(e){const{allGames:a,specificGame:t,gameID:s,docsPath:o,onlyGames:l=!1,onlyLaunchers:i=!1}=e,[c,p]=(0,n.useState)(null),[u,d]=(0,n.useState)(null);return(0,n.useEffect)((()=>{if(a){async function e(){await fetch("https://game-events-status.overwolf.com/all_prod.json").then((e=>e.json())).then((e=>{const a=[];for(let t of e)0!=t.state&&m.z[t.game_id]&&(l&&m.z[t.game_id].launcher||i&&!m.z[t.game_id].launcher||(m.z[t.game_id].state=t.state,a.push(m.z[t.game_id])));p(a)}))}e()}if(t){async function n(){await fetch(`https://game-events-status.overwolf.com/${s}_prod.json`).then((e=>e.json())).then((e=>d(e)))}n()}}),[]),n.createElement(n.Fragment,null,a&&null!=c&&n.createElement(r,{gameListData:c}),t&&null!=u&&n.createElement(g,{gameStatusData:u,gameID:s,docsPath:o}))}},5240:(e,a,t)=>{t.d(a,{F:()=>n});const n=e=>{let a="";switch(e){case 1:a="good";break;case 2:a="medium";break;case 3:a="bad"}return a}},66410:(e,a,t)=>{t.d(a,{z:()=>n});const n={21566:{id:21566,path:"/status/apex-legends",docs:"/api/games/events/apex-legends",iconUrl:"/img/games-logos/apex-legends.png",iconLargeUrl:"/img/games-logos/large/apex-legends.png",name:"Apex Legends"},21960:{id:21960,path:"/status/axie-infinity-origin",docs:"/api/games/events/axie-infinity-origin",iconUrl:"/img/games-logos/axie-infinity-origin.png",iconLargeUrl:"/img/games-logos/large/axie-infinity-origin.png",name:"Axie Infinity Origin"},21876:{id:21876,path:"/status/call-of-duty-vanguard",docs:"/api/games/events/call-of-duty-vanguard",iconUrl:"/img/games-logos/call-of-duty-vanguard.png",iconLargeUrl:"/img/games-logos/large/call-of-duty-vanguard.png",name:"Call of Duty: Vanguard"},21626:{id:21626,path:"/status/call-of-duty-warzone",compliance:"/start/game-compliance/call-of-duty-warzone",docs:"/api/games/events/call-of-duty-warzone",iconUrl:"/img/games-logos/call-of-duty-warzone.png",iconLargeUrl:"/img/games-logos/large/call-of-duty-warzone.png",name:"Call of Duty: Warzone"},7764:{id:7764,path:"/status/counter-strike-global-offensive",docs:"/api/games/events/counter-strike-global-offensive",iconUrl:"/img/games-logos/counter-strike-global-offensive.png",iconLargeUrl:"/img/games-logos/large/counter-strike-global-offensive.png",name:"Counter-Strike: Global Offensive"},21848:{id:21848,path:"/status/diablo-2-resurrected",docs:"/api/games/events/diablo-2-resurrected",iconUrl:"/img/games-logos/diablo-2-resurrected.png",iconLargeUrl:"/img/games-logos/large/diablo-2-resurrected.png",name:"Diablo 2 Resurrected"},7314:{id:7314,path:"/status/dota-2",docs:"/api/games/events/dota-2",iconUrl:"/img/games-logos/dota-2.png",iconLargeUrl:"/img/games-logos/large/dota-2.png",name:"Dota 2"},21586:{id:21586,path:"/status/dota-underlords",docs:"/api/games/events/dota-underlords",iconUrl:"/img/games-logos/dota-underlords.png",iconLargeUrl:"/img/games-logos/large/dota-underlords.png",name:"Dota Underlords"},21634:{id:21634,path:"/status/escape-from-tarkov",docs:"/api/games/events/escape-from-tarkov",iconUrl:"/img/games-logos/escape-from-tarkov.png",iconLargeUrl:"/img/games-logos/large/escape-from-tarkov.png",name:"Escape From Tarkov"},21672:{id:21672,path:"/status/eternal-return",docs:"/api/games/events/eternal-return",iconUrl:"/img/games-logos/eternal-return.png",iconLargeUrl:"/img/games-logos/large/eternal-return.png",name:"Eternal Return"},6350:{id:6350,path:"/status/final-fantasy-xiv",docs:"/api/games/events/final-fantasy-xiv",iconUrl:"/img/games-logos/final-fantasy-xiv.png",iconLargeUrl:"/img/games-logos/large/final-fantasy-xiv.png",name:"Final Fantasy XIV"},21666:{id:21666,path:"/status/football-manager-2021",docs:"/api/games/events/football-manager-2021",iconUrl:"/img/games-logos/football-manager-2021.png",iconLargeUrl:"/img/games-logos/large/football-manager-2021.png",name:"Football Manager 2021"},21856:{id:21856,path:"/status/football-manager-2022",docs:"/api/games/events/football-manager-2022",iconUrl:"/img/games-logos/football-manager-2022.png",iconLargeUrl:"/img/games-logos/large/football-manager-2022.png",name:"Football Manager 2022"},21216:{id:21216,path:"/status/fortnite",docs:"/api/games/events/fortnite",iconUrl:"/img/games-logos/fortnite.png",iconLargeUrl:"/img/games-logos/large/fortnite.png",name:"Fortnite"},21854:{id:21854,path:"/status/halo-infinite",docs:"/api/games/events/halo-infinite",iconUrl:"/img/games-logos/halo-infinite.png",iconLargeUrl:"/img/games-logos/large/halo-infinite.png",name:"Halo Infinite"},9898:{id:9898,path:"/status/hearthstone",docs:"/api/games/events/hearthstone",iconUrl:"/img/games-logos/hearthstone.png",iconLargeUrl:"/img/games-logos/large/hearthstone.png",name:"Hearthstone"},10624:{id:10624,path:"/status/heroes-of-the-storm",docs:"/api/games/events/heroes-of-the-storm",iconUrl:"/img/games-logos/heroes-of-the-storm.png",iconLargeUrl:"/img/games-logos/large/heroes-of-the-storm.png",name:"Heroes of the Storm"},21328:{id:21328,path:"/status/hunt-showdown",docs:"/api/games/events/hunt-showdown",iconUrl:"/img/games-logos/hunt-showdown.png",iconLargeUrl:"/img/games-logos/large/hunt-showdown.png",name:"Hunt: Showdown"},5426:{id:5426,launcherID:10902,path:"/status/league-of-legends",compliance:"/start/game-compliance/league-of-legends",docs:"/api/games/events/league-of-legends",iconUrl:"/img/games-logos/league-of-legends.png",iconLargeUrl:"/img/games-logos/large/league-of-legends.png",name:"League of Legends"},10902:{id:10902,path:"/status/launchers/league-of-legends",compliance:"/start/game-compliance/league-of-legends",docs:"/api/games/launchers/events/league-of-legends",iconUrl:"/img/games-logos/launchers/league-of-legends.png",iconLargeUrl:"/img/games-logos/large/launchers/league-of-legends.png",name:"League of Legends Launcher",launcher:{games:[5426,21570,215701]}},21620:{id:21620,path:"/status/legends-of-runeterra",docs:"/api/games/events/legends-of-runeterra",iconUrl:"/img/games-logos/legends-of-runeterra.png",iconLargeUrl:"/img/games-logos/large/legends-of-runeterra.png",name:"Legends of Runeterra"},21308:{id:21308,path:"/status/magic-the-gathering-arena",docs:"/api/games/events/magic-the-gathering-arena",iconUrl:"/img/games-logos/magic-the-gathering-arena.png",iconLargeUrl:"/img/games-logos/large/magic-the-gathering-arena.png",name:"Magic: The Gathering Arena"},8032:{id:8032,path:"/status/minecraft",docs:"/api/games/events/minecraft",iconUrl:"/img/games-logos/minecraft.png",iconLargeUrl:"/img/games-logos/large/minecraft.png",name:"Minecraft"},21816:{id:21816,path:"/status/new-world",compliance:"/start/game-compliance/new-world",docs:"/api/games/events/new-world",iconUrl:"/img/games-logos/new-world.png",iconLargeUrl:"/img/games-logos/large/new-world.png",name:"New World"},10844:{id:10844,path:"/status/overwatch",docs:"/api/games/events/overwatch",iconUrl:"/img/games-logos/overwatch.png",iconLargeUrl:"/img/games-logos/large/overwatch.png",name:"Overwatch"},7212:{id:7212,path:"/status/path-of-exile",docs:"/api/games/events/path-of-exile",iconUrl:"/img/games-logos/path-of-exile.png",iconLargeUrl:"/img/games-logos/large/path-of-exile.png",name:"Path of Exile"},10906:{id:10906,path:"/status/player-unknowns-battlegrounds",docs:"/api/games/events/player-unknowns-battlegrounds",iconUrl:"/img/games-logos/player-unknowns-battlegrounds.png",iconLargeUrl:"/img/games-logos/large/player-unknowns-battlegrounds.png",name:"PlayerUnkown's Battlegrounds"},10826:{id:10826,path:"/status/rainbow-six-siege",compliance:"/start/game-compliance/rainbow-six-siege",docs:"/api/games/events/rainbow-six-siege",iconUrl:"/img/games-logos/rainbow-six-siege.png",iconLargeUrl:"/img/games-logos/large/rainbow-six-siege.png",name:"Rainbow Six Siege"},10798:{id:10798,path:"/status/rocket-league",docs:"/api/games/events/rocket-league",iconUrl:"/img/games-logos/rocket-league.png",iconLargeUrl:"/img/games-logos/large/rocket-league.png",name:"Rocket League"},21404:{id:21404,path:"/status/splitgate-arena-warfare",docs:"/api/games/events/splitgate-arena-warfare",iconUrl:"/img/games-logos/splitgate-arena-warfare.png",iconLargeUrl:"/img/games-logos/large/splitgate-arena-warfare.png",name:"Splitgate: Arena Warfare"},5855:{id:5855,path:"/status/starcraft-2",docs:"/api/games/events/starcraft-2",iconUrl:"/img/games-logos/starcraft-2.png",iconLargeUrl:"/img/games-logos/large/starcraft-2.png",name:"StarCraft II"},21570:{id:21570,displayId:5426,launcherID:10902,mainVariant:215701,path:"/status/teamfight-tactics",docs:"/api/games/events/teamfight-tactics",iconUrl:"/img/games-logos/teamfight-tactics.png",iconLargeUrl:"/img/games-logos/large/teamfight-tactics.png",name:"Teamfight Tactics"},215701:{id:215701,displayId:5426,launcherID:10902,subVariant:21570,path:"/status/teamfight-tactics-public-beta",docs:"/api/games/events/teamfight-tactics-public-beta",iconUrl:"/img/games-logos/teamfight-tactics-public-beta.png",iconLargeUrl:"/img/games-logos/large/teamfight-tactics-public-beta.png",name:"Teamfight Tactics PBE"},21668:{id:21668,path:"/status/valheim",docs:"/api/games/events/valheim",iconUrl:"/img/games-logos/valheim.png",iconLargeUrl:"/img/games-logos/large/valheim.png",name:"Valheim"},21640:{id:21640,path:"/status/valorant",docs:"/api/games/events/valorant",iconUrl:"/img/games-logos/valorant.png",iconLargeUrl:"/img/games-logos/large/valorant.png",name:"Valorant"},8954:{id:8954,path:"/status/warframe",docs:"/api/games/events/warframe",iconUrl:"/img/games-logos/warframe.png",iconLargeUrl:"/img/games-logos/large/warframe.png",name:"Warframe"},6365:{id:6365,path:"/status/world-of-tanks",docs:"/api/games/events/world-of-tanks",iconUrl:"/img/games-logos/world-of-tanks.png",iconLargeUrl:"/img/games-logos/large/world-of-tanks.png",name:"World of Tanks"},765:{id:765,path:"/status/world-of-warcraft",docs:"/api/games/events/world-of-warcraft",iconUrl:"/img/games-logos/world-of-warcraft.png",iconLargeUrl:"/img/games-logos/large/world-of-warcraft.png",name:"World of Warcraft"},10746:{id:10746,path:"/status/world-of-warships",docs:"/api/games/events/world-of-warships",iconUrl:"/img/games-logos/world-of-warships.png",iconLargeUrl:"/img/games-logos/large/world-of-warships.png",name:"World of Warships"}}},62517:(e,a,t)=>{t.d(a,{Z:()=>g});var n=t(67294),s=t(66410),r=t(5240);const o=function(e){const{name:a,pathUrl:t}=e;return n.createElement("a",{href:`${t}`},n.createElement("svg",null,n.createElement("use",{href:"/img/sprite.svg#urlIcon"})),a)};const l=function(e){const{gamesListData:a}=e,[t,r]=(0,n.useState)(!1),[l,i]=(0,n.useState)(0),g=(0,n.useRef)(null),m=a.map((e=>n.createElement("li",null,n.createElement("h3",null,n.createElement("img",{src:s.z[e].iconLargeUrl}),n.createElement("span",null,s.z[e].name)),n.createElement("p",null,n.createElement("span",null,"Game ID: "),e),s.z[e].path&&n.createElement(o,{name:"Game events status",pathUrl:s.z[e].path}),s.z[e].docs&&n.createElement(o,{name:"Game API docs",pathUrl:s.z[e].docs}),s.z[e].compliance&&n.createElement(o,{name:"Game compliance page",pathUrl:s.z[e].compliance}))));function c(){t?(i(0),r(!1)):(i(g.current.querySelector("ul").clientHeight),r(!0))}return n.createElement("div",{className:"expended-launcher-game-list "+(t?"is-open":"")},n.createElement("button",{className:"expend-btn",onClick:c},n.createElement("svg",{className:"games-icon"},n.createElement("use",{href:"/img/sprite.svg#gamesIcon"})),"Launcher's supported games list",n.createElement("svg",null,n.createElement("use",{href:"/img/sprite.svg#arrowDown"}))),n.createElement("div",{className:"launcher-game-list-inner",ref:g,style:{height:l+"px"}},n.createElement("ul",{className:"launcher-game-list"},m),n.createElement("button",{className:"hide-button",onClick:c},"Hide List")))};const i=function(e){const{gameState:a}=e;return n.createElement("div",{className:"status-tooltip-trigger"},n.createElement("div",{className:"status-tooltip"},n.createElement("span",null,(e=>{let a="";switch(e){case 1:a="Good to go";break;case 2:a="Some events may be unavailable";break;case 3:a="Events are currently unavailable"}return a})(a))))};const g=function(e){const{gameID:a,showCompliance:t=!0,showDocs:g=!0,showStatus:m=!0,showLauncherDocs:c=!0}=e,[p,u]=(0,n.useState)(null);(0,n.useEffect)((()=>{!async function(){await fetch(`https://game-events-status.overwolf.com/${a}_prod.json`).then((e=>e.json())).then((e=>u(e)))}()}),[]);const d=s.z[a].launcher?"Game Launcher ID":"Game ID",f=s.z[a].launcher?"Launcher":"Game",h=s.z[a].launcherId,v=s.z[a].launcher?s.z[a].launcher.games.length:0,w=s.z[a].displayId?s.z[a].displayId:a,E=s.z[a].mainVariant?s.z[a].mainVariant:0,b=s.z[a].subVariant?s.z[a].subVariant:0;return n.createElement("section",{className:"game-info-section"},n.createElement("div",{className:"game-info-item"},n.createElement("h1",{className:`game-info-title ${p?(0,r.F)(p.state):""}`},n.createElement("img",{src:s.z[a].iconLargeUrl}),n.createElement("span",null,s.z[a].name),p&&n.createElement(i,{gameState:p.state})),n.createElement("ul",{className:"game-info-list"},n.createElement("li",null,n.createElement("span",null,d,":"),w),s.z[a].path&&m&&n.createElement("li",null,n.createElement(o,{name:`${f} events status`,pathUrl:s.z[a].path})),s.z[a].path&&m&&0!=E&&n.createElement("li",null,n.createElement(o,{name:`${s.z[E].name} events status`,pathUrl:s.z[E].path})),s.z[a].docs&&g&&c&&0===b&&n.createElement("li",null,n.createElement(o,{name:`${f} API docs`,pathUrl:s.z[a].docs})),s.z[a].docs&&g&&c&&0!=b&&n.createElement("li",null,n.createElement(o,{name:`${f} API docs`,pathUrl:s.z[b].docs})),s.z[a].compliance&&t&&"Game"==f&&0===b&&n.createElement("li",null,n.createElement(o,{name:"Game compliance page",pathUrl:s.z[a].compliance})),s.z[a].compliance&&t&&"Game"==f&&0!=b&&n.createElement("li",null,n.createElement(o,{name:"Game compliance page",pathUrl:s.z[b].compliance}))),h&&n.createElement("ul",{className:"launcher-info-list"},n.createElement("li",null,n.createElement("span",null,"Game Launcher ID:"),h),s.z[h].path&&n.createElement("li",null,n.createElement(o,{name:"Launcher events status",pathUrl:s.z[h].path})),s.z[h].docs&&n.createElement("li",null,n.createElement(o,{name:"Launcher API docs",pathUrl:s.z[h].docs})))),v>0&&n.createElement(l,{gamesListData:s.z[a].launcher.games}),!m&&n.createElement("ul",{className:"legend"},n.createElement("li",{className:"good"},"Good to go"),n.createElement("li",{className:"medium"},"Some events may be unavailable"),n.createElement("li",{className:"bad"},"Events are currently unavailable")))}},37705:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>g,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var n=t(87462),s=(t(67294),t(3905)),r=t(22690);const o={id:"world-of-tanks",image:"/img/embed/games/world-of-tanks.jpg",title:"World of Tanks status",hide_title:!0,sidebar_label:"World of Tanks",showLastUpdateAuthor:!1,showLastUpdateTime:!1,sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},l=void 0,i={unversionedId:"status/world-of-tanks",id:"status/world-of-tanks",title:"World of Tanks status",description:"",source:"@site/pages/docs/status/world-of-tanks.mdx",sourceDirName:"status",slug:"/status/world-of-tanks",permalink:"/status/world-of-tanks",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/status/world-of-tanks.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1667999405,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{id:"world-of-tanks",image:"/img/embed/games/world-of-tanks.jpg",title:"World of Tanks status",hide_title:!0,sidebar_label:"World of Tanks",showLastUpdateAuthor:!1,showLastUpdateTime:!1,sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"status",previous:{title:"Warframe",permalink:"/status/warframe"},next:{title:"World of Warcraft",permalink:"/status/world-of-warcraft"}},g={},m=[],c={toc:m};function p(e){let{components:a,...t}=e;return(0,s.mdx)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,s.mdx)("head",null,(0,s.mdx)("meta",{name:"keywords",content:"API for World of Tanks, World of Tanks API, SDK for World of Tanks, World of Tanks SDK"})),(0,s.mdx)(r.Z,{specificGame:!0,gameID:6365,mdxType:"EventsData"}))}p.isMDXComponent=!0}}]);