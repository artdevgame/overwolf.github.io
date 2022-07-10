"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2681],{65944:function(e,a,t){t.d(a,{Z:function(){return u}});var n=t(74165),o=t(67855),r=t(15861),g=t(67294);function s(e){var a=e.className,t=e.path,n=e.imgSrc,o=e.text;return g.createElement("li",{className:a},g.createElement("a",{href:t},g.createElement("img",{src:n}),o))}var l=function(e){var a=function(e){return e.map((function(e){var a="game ";switch(e.state){case 1:a+="good";break;case 2:a+="medium";break;case 3:a+="bad"}return g.createElement(s,{key:e.id,className:a,path:e.path,imgSrc:e.iconUrl,text:e.name})}))}(e.gameListData);return a.sort((function(e,a){return e.props.text<a.props.text?-1:1})),g.createElement("article",{className:"hentry"},g.createElement("div",{className:"gep-games-list"},g.createElement("ul",{className:"list"},a),g.createElement("ul",{className:"legend"},g.createElement("li",{className:"good"},"Good to go"),g.createElement("li",{className:"medium"},"Some game events may be unavailable"),g.createElement("li",{className:"bad"},"Game events are currently unavailable"))))};function i(e){return g.createElement("form",{role:"search",method:"get",className:"search-game",action:"#",autoComplete:"off",onSubmit:function(e){e.preventDefault()}},g.createElement("input",{type:"search",name:"search",className:"search-input",placeholder:"Search for game events, e.g. \u201ckill\u201d",onKeyUp:function(e){!function(e){var a=e.target,t=document.querySelectorAll(".game-data ul li"),n=a.value.toLowerCase();0===n.length?t.forEach((function(e){return e.removeAttribute("style")})):t.forEach((function(e){e.textContent.toLowerCase().includes(n)?e.removeAttribute("style"):e.style.display="none"}))}(e)}}),g.createElement("button",{type:"submit",className:"search-submit",title:"Search"},g.createElement("img",{src:"../../img/search.svg"})))}var m=function(e){var a=e.gameStatusData,t=e.gamesMetaData,n=e.gameID,r=e.docsPath,s=function(e){var a="";switch(e){case 1:a="good";break;case 2:a="medium";break;case 3:a="bad"}return a},l=function(e){if(!a.features||0===a.features.length)return g.createElement("li",{className:"coming-soon"},"Coming soon");for(var t,n=0,r=[],l=(0,o.Z)(a.features);!(t=l()).done;)for(var i,m=t.value,c=(0,o.Z)(m.keys);!(i=c()).done;){var u=i.value;u.type==e&&r.push(g.createElement("li",{className:s(u.state),key:n++},u.name))}return r},m=l(0),c=l(1),u=s(a.state),p=t[n].iconLargeUrl,d=t[n].name;return g.createElement("article",{className:"hentry"},g.createElement("div",{className:"entry-content"},g.createElement("div",{className:"gep-game"},g.createElement("h3",{className:"game-title "+u},g.createElement("img",{src:p}),d,g.createElement("a",{href:""+r,title:"full API docs"},"Go to the API docs page")),g.createElement(i,null),g.createElement("div",{className:"game-events-info"},g.createElement("div",{className:"game-data"},g.createElement("h4",null,"Events"),g.createElement("ul",null,m)),g.createElement("div",{className:"game-data"},g.createElement("h4",null,"Info updates"),g.createElement("ul",null,c))))))},c={10878:{id:10878,path:"#",iconUrl:"../../img/games-logos/battlerite.png",iconLargeUrl:"../../img/games-logos/large/battlerite.png",name:"Battlerite"},6365:{id:6365,path:"../status/world-of-tanks",iconUrl:"../../img/games-logos/wot.png",iconLargeUrl:"../../img/games-logos/large/wot.png",name:"World Of Tanks"},10826:{id:10826,path:"../status/rainbow-six-siege",iconUrl:"../../img/games-logos/rainbow_six_siege.png",iconLargeUrl:"../../img/games-logos/large/rainbow_six_siege.png",name:"Rainbow Six: Siege"},10798:{id:10798,path:"../status/rocket-league",iconUrl:"../../img/games-logos/rocket_league.png",iconLargeUrl:"../../img/games-logos/large/rocket_league.png",name:"Rocket League"},10906:{id:10906,path:"../status/pubg",iconUrl:"../../img/games-logos/pubg.png",iconLargeUrl:"../../img/games-logos/large/pubg.png",name:"PUBG"},5426:{id:5426,path:"../status/lol",iconUrl:"../../img/games-logos/lol.png",iconLargeUrl:"../../img/games-logos/large/lol.png",name:"League of Legends"},9898:{id:9898,path:"../status/hearthstone",iconUrl:"../../img/games-logos/hearthstone.png",iconLargeUrl:"../../img/games-logos/large/hearthstone.png",name:"Hearthstone"},21216:{id:21216,path:"../status/fortnite",iconUrl:"../../img/games-logos/fortnite.png",iconLargeUrl:"../../img/games-logos/large/fortnite.png",name:"Fortnite"},7314:{id:7314,path:"../status/dota2",iconUrl:"../../img/games-logos/dota2.png",iconLargeUrl:"../../img/games-logos/large/dota2.png",name:"Dota 2"},7764:{id:7764,path:"../status/csgo",iconUrl:"../../img/games-logos/cs_go.png",iconLargeUrl:"../../img/games-logos/large/cs_go.png",name:"CS: GO"},21566:{id:21566,path:"../status/apex",iconUrl:"../../img/games-logos/apex.png",iconLargeUrl:"../../img/games-logos/large/apex.png",name:"Apex Legends"},21570:{id:21570,path:"../status/teamfight-tactics",iconUrl:"../../img/games-logos/tft.png",iconLargeUrl:"../../img/games-logos/large/tft.png",name:"Teamfight Tactics"},10746:{id:10746,path:"../status/world-of-warships",iconUrl:"../../img/games-logos/wow.png",iconLargeUrl:"../../img/games-logos/large/wow.png",name:"World of Warships"},10624:{id:10624,path:"../status/heroes-of-the-storm",iconUrl:"../../img/games-logos/hots.png",iconLargeUrl:"../../img/games-logos/large/hots.png",name:"Heroes of the Storm"},21308:{id:21308,path:"../status/mtga",iconUrl:"../../img/games-logos/mtg.png",iconLargeUrl:"../../img/games-logos/large/mtg.png",name:"MTG Arena"},21586:{id:21586,path:"../status/underlords",iconUrl:"../../img/games-logos/dota_underlords.png",iconLargeUrl:"../../img/games-logos/large/dota_underlords.png",name:"Dota Underlords"},5855:{id:5855,path:"../status/sc2",iconUrl:"../../img/games-logos/sc2.png",iconLargeUrl:"../../img/games-logos/large/sc2.png",name:"StarCraft II"},10902:{id:10902,path:"../status/lol-launcher",iconUrl:"../../img/games-logos/lol-launcher.png",iconLargeUrl:"../../img/games-logos/large/lol-launcher.png",name:"League of Legends Launcher"},7212:{id:7212,path:"../status/path-of-exile",iconUrl:"../../img/games-logos/path-of-exile.png",iconLargeUrl:"../../img/games-logos/large/path-of-exile.png",name:"Path of Exile"},21620:{id:21620,path:"../status/lor",iconUrl:"../../img/games-logos/lor.png",iconLargeUrl:"../../img/games-logos/large/lor.png",name:"Legends of Runeterra"},765:{id:765,path:"../status/world-of-warcraft",iconUrl:"../../img/games-logos/warcraft.png",iconLargeUrl:"../../img/games-logos/large/warcraft.png",name:"World of Warcraft"},21634:{id:21634,path:"../status/escape-from-tarkov",iconUrl:"../../img/games-logos/tarkov.png",iconLargeUrl:"../../img/games-logos/large/tarkov.png",name:"Escape From Tarkov"},21640:{id:21640,path:"../status/valorant",iconUrl:"../../img/games-logos/valorant.png",iconLargeUrl:"../../img/games-logos/large/valorant.png",name:"Valorant"},10844:{id:10844,path:"../status/overwatch",iconUrl:"../../img/games-logos/overwatch.png",iconLargeUrl:"../../img/games-logos/large/overwatch.png",name:"Overwatch"},8032:{id:8032,path:"../status/minecraft",iconUrl:"../../img/games-logos/minecraft.png",iconLargeUrl:"../../img/games-logos/large/minecraft.png",name:"Minecraft"},8954:{id:8954,path:"../status/warframe",iconUrl:"../../img/games-logos/warframe.png",iconLargeUrl:"../../img/games-logos/large/warframe.png",name:"Warframe"},21626:{id:21626,path:"../status/warzone",iconUrl:"../../img/games-logos/warzone.png",iconLargeUrl:"../../img/games-logos/large/warzone.png",name:"Call of Duty: Warzone"},6350:{id:6350,path:"../status/ff-xiv",iconUrl:"../../img/games-logos/ff-xiv.png",iconLargeUrl:"../../img/games-logos/large/ff-xiv.png",name:"Final Fantasy XIV"},21668:{id:21668,path:"../status/valheim",iconUrl:"../../img/games-logos/valheim.png",iconLargeUrl:"../../img/games-logos/large/valheim.png",name:"Valheim"},21404:{id:21404,path:"../status/splitgate",iconUrl:"../../img/games-logos/splitgate.png",iconLargeUrl:"../../img/games-logos/large/splitgate.png",name:"Splitgate: Arena Warfare"},21666:{id:21666,path:"../status/fm2021",iconUrl:"../../img/games-logos/fm2021.png",iconLargeUrl:"../../img/games-logos/large/fm2021.png",name:"Football Manager 2021"},21856:{id:21856,path:"../status/fm2022",iconUrl:"../../img/games-logos/fm2022.png",iconLargeUrl:"../../img/games-logos/large/fm2022.png",name:"Football Manager 2022"},21816:{id:21816,path:"../status/new-world",iconUrl:"../../img/games-logos/new-world.png",iconLargeUrl:"../../img/games-logos/large/new-world.png",name:"New World"},21672:{id:21672,path:"../status/eternal-return",iconUrl:"../../img/games-logos/eternal-return.png",iconLargeUrl:"../../img/games-logos/large/eternal-return.png",name:"Eternal Return"},21854:{id:21854,path:"../status/halo-infinite",iconUrl:"../../img/games-logos/halo-infinite.png",iconLargeUrl:"../../img/games-logos/large/halo-infinite.png",name:"Halo Infinite"},21328:{id:21328,path:"../status/hunt-showdown",iconUrl:"../../img/games-logos/hunt-showdown.png",iconLargeUrl:"../../img/games-logos/large/hunt-showdown.png",name:"Hunt Showdown"},21876:{id:21876,path:"../status/vanguard",iconUrl:"../../img/games-logos/vanguard.png",iconLargeUrl:"../../img/games-logos/large/vanguard.png",name:"Call of Duty: Vanguard"},21960:{id:21960,path:"../status/axie",iconUrl:"../../img/games-logos/axie.png",iconLargeUrl:"../../img/games-logos/large/axie.png",name:"Axie Infinity Origin"},21848:{id:21848,path:"../status/diablo2",iconUrl:"../../img/games-logos/diablo2.png",iconLargeUrl:"../../img/games-logos/large/diablo2.png",name:"Diablo 2"}};var u=function(e){var a=e.allGames,t=e.specificGame,s=e.gameID,i=e.docsPath,u=(0,g.useState)(null),p=u[0],d=u[1],f=(0,g.useState)(null),h=f[0],U=f[1];return(0,g.useEffect)((function(){if(a){function e(){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://game-events-status.overwolf.com/all_prod.json").then((function(e){return e.json()})).then((function(e){for(var a,t=[],n=(0,o.Z)(e);!(a=n()).done;){var r=a.value;0!=r.state&&(c[r.game_id]&&(c[r.game_id].state=r.state,t.push(c[r.game_id])))}d(t)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e()}if(t){function l(){return i.apply(this,arguments)}function i(){return(i=(0,r.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://game-events-status.overwolf.com/"+s+"_prod.json").then((function(e){return e.json()})).then((function(e){return U(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}l()}}),[]),g.createElement(g.Fragment,null,a&&null!=p&&g.createElement(l,{gameListData:p}),t&&null!=h&&g.createElement(m,{gamesMetaData:c,gameStatusData:h,gameID:s,docsPath:i}))}},9535:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return u}});var n=t(87462),o=t(63366),r=(t(67294),t(3905)),g=t(65944),s=["components"],l={id:"mtga",title:"Game events status",sidebar_label:"MTG Arena"},i=void 0,m={unversionedId:"status/mtga",id:"status/mtga",title:"Game events status",description:"",source:"@site/pages/docs/status/mtga.mdx",sourceDirName:"status",slug:"/status/mtga",permalink:"/docs/status/mtga",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/status/mtga.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1655031291,formattedLastUpdatedAt:"6/12/2022",frontMatter:{id:"mtga",title:"Game events status",sidebar_label:"MTG Arena"},sidebar:"service",previous:{title:"Minecraft",permalink:"/docs/status/minecraft"},next:{title:"New World",permalink:"/docs/status/new-world"}},c={},u=[],p={toc:u};function d(e){var a=e.components,t=(0,o.Z)(e,s);return(0,r.mdx)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)(g.Z,{specificGame:!0,gameID:21308,docsPath:"../api/overwolf-games-events-mtga",mdxType:"EventsData"}))}d.isMDXComponent=!0}}]);