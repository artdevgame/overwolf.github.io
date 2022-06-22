"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9415],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return l},MDXProvider:function(){return c},mdx:function(){return g},useMDXComponents:function(){return p},withMDXComponents:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){return function(t){var n=p(t.components);return a.createElement(e,o({},t,{components:n}))}},p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,h=m["".concat(d,".").concat(c)]||m[c]||u[c]||o;return n?a.createElement(h,i(i({ref:t},l),{},{components:n})):a.createElement(h,i({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,d=new Array(o);d[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,d[1]=i;for(var l=2;l<o;l++)d[l]=n[l];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},52761:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),d=["components"],i={id:"ads-sdk-interaction",title:"Managing Ads",sidebar_label:"Managing Ads"},s=void 0,l={unversionedId:"start/ads-sdk-interaction",id:"start/ads-sdk-interaction",title:"Managing Ads",description:"The Ads object",source:"@site/pages/docs/start/ads-sdk-interaction.mdx",sourceDirName:"start",slug:"/start/ads-sdk-interaction",permalink:"/docs/start/ads-sdk-interaction",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/start/ads-sdk-interaction.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1655031291,formattedLastUpdatedAt:"6/12/2022",frontMatter:{id:"ads-sdk-interaction",title:"Managing Ads",sidebar_label:"Managing Ads"},sidebar:"start",previous:{title:"Configuring your Ads",permalink:"/docs/start/ads-sdk-options"},next:{title:"Current Ads SDK",permalink:"/docs/start/ads-sdk-versions"}},m={},p=[{value:"The Ads object",id:"the-ads-object",level:2},{value:"Functions",id:"functions",level:3},{value:"Notes",id:"notes",level:3},{value:"Events",id:"events",level:3},{value:"Showing multiple ads",id:"showing-multiple-ads",level:3},{value:"Checking the window state change",id:"checking-the-window-state-change",level:2},{value:"In-game windows with Ads",id:"in-game-windows-with-ads",level:3},{value:"Ads Type Definitions",id:"ads-type-definitions",level:2},{value:"Sample code for handling ads with minimized/restored window",id:"sample-code-for-handling-ads-with-minimizedrestored-window",level:4}],c={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,d);return(0,o.mdx)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"the-ads-object"},"The Ads object"),(0,o.mdx)("p",null,"Calling a new ",(0,o.mdx)("inlineCode",{parentName:"p"},"OwAd()")," will return a javascript object which you can use to control the displayed ad."),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},"To prevent ads being called but not shown, use ",(0,o.mdx)("strong",{parentName:"p"},"removeAd()")," on minimizing/hiding and ",(0,o.mdx)("strong",{parentName:"p"},"refreshAd()")," on restoring.")),(0,o.mdx)("h3",{id:"functions"},"Functions"),(0,o.mdx)("p",null,"This object has the following functions you can call on-demand:"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:"center"},"Function"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:"center"},"removeAd"),(0,o.mdx)("td",{parentName:"tr",align:null},"Removes current ad from the DOM")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:"center"},"refreshAd"),(0,o.mdx)("td",{parentName:"tr",align:null},"Refreshes ad and loads a new one ",(0,o.mdx)("br",null)," Note that this will cause the ad to scroll into view if not already visible")))),(0,o.mdx)("h3",{id:"notes"},"Notes"),(0,o.mdx)("p",null,"When calling a ",(0,o.mdx)("strong",{parentName:"p"},"new OwAd()"),", please do not use ",(0,o.mdx)("strong",{parentName:"p"},"refreshAd()"),".\nOn minimizing/hiding an OW window with Ads, no need to delete or destroy the ",(0,o.mdx)("strong",{parentName:"p"},"owAd")," object.",(0,o.mdx)("br",{parentName:"p"}),"\n","Instead, call the ",(0,o.mdx)("strong",{parentName:"p"},"removeAd()")," method.",(0,o.mdx)("br",{parentName:"p"}),"\n","When the window is restored, call the same ",(0,o.mdx)("strong",{parentName:"p"},"owAd")," instance\u2019s ",(0,o.mdx)("strong",{parentName:"p"},"refreshAd()")," method."),(0,o.mdx)("h3",{id:"events"},"Events"),(0,o.mdx)("p",null,"You can use Overwolf ad objects created by calling ",(0,o.mdx)("inlineCode",{parentName:"p"},"new OwAd()"),") to listen to events related to the displayed ad. Registering an event can be done by calling the function ",(0,o.mdx)("strong",{parentName:"p"},"addEventListener")," on the ad object. Like other libraries, the first parameter sent to ",(0,o.mdx)("strong",{parentName:"p"},"addEventListener")," is the name of the event, and the second is a handler function for the event."),(0,o.mdx)("p",null,"The following events are supported:"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},(0,o.mdx)("strong",{parentName:"th"},"Event Name")),(0,o.mdx)("th",{parentName:"tr",align:null},(0,o.mdx)("strong",{parentName:"th"},"Fired When")))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"player_loaded"),(0,o.mdx)("td",{parentName:"tr",align:null},"Ad video player successfully loaded on page*")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"display_ad_loaded"),(0,o.mdx)("td",{parentName:"tr",align:null},"Display ad was served instead of a video ad")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"play"),(0,o.mdx)("td",{parentName:"tr",align:null},"Ad started playing / Display ad presented")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"impression"),(0,o.mdx)("td",{parentName:"tr",align:null},"Video \u201cimpression\u201d \u2013 Depends on the advertiser, the impression event gets triggered after 0-6 seconds *")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"complete"),(0,o.mdx)("td",{parentName:"tr",align:null},"Video ad played fully until completed *")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"error"),(0,o.mdx)("td",{parentName:"tr",align:null},"Error occurred while trying to load ad *")))),(0,o.mdx)("p",null,"*"," Only relevant for video ads"),(0,o.mdx)("h3",{id:"showing-multiple-ads"},"Showing multiple ads"),(0,o.mdx)("p",null,"If you wish to show more than one ad on your app, you can easily do so by creating multiple instances of ",(0,o.mdx)("inlineCode",{parentName:"p"},"OwAd"),". Just make sure you pass a different container element for each instance."),(0,o.mdx)("h2",{id:"checking-the-window-state-change"},"Checking the window state change"),(0,o.mdx)("p",null,"To check when the window is minimized or restored, you can use the ",(0,o.mdx)("a",{parentName:"p",href:"../api/overwolf-windows#onstatechanged"},"overwolf.windows.onStateChanged")," event."),(0,o.mdx)("p",null,"Note that the ",(0,o.mdx)("em",{parentName:"p"},"onStateChanged")," event is being fired for all the declared windows listening to this event (background, in-game, desktop, etc.). Make sure to test the window name/id arguments that are passed to the event to see if the window with the Ad Is the window that triggered the state change. "),(0,o.mdx)("p",null,"Otherwise, you might end up with unnecessary wrong calls to the ",(0,o.mdx)("strong",{parentName:"p"},"refreshAd()")," and ",(0,o.mdx)("strong",{parentName:"p"},"removeAd()"),"."),(0,o.mdx)("h3",{id:"in-game-windows-with-ads"},"In-game windows with Ads"),(0,o.mdx)("p",null,"As we mentioned above, when you change a window state (minimize, hide, restore), the ",(0,o.mdx)("strong",{parentName:"p"},"onStateChanged")," event is fired. But that is not the case if you minimize the GAME WINDOW itself, Alt+Tab from it, use Win+D to minimize all your open apps, or even click outside of the windowed game."),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},"When your game window loses focus, the in-game window state inside it will not change, and the ",(0,o.mdx)("strong",{parentName:"p"},"onStateChanged")," event will not be fired.")),(0,o.mdx)("p",null,"That means if your in-game window contains an Ad, and the containing GAME WINDOW is minimized/restored, you will not be able to know when to call ",(0,o.mdx)("strong",{parentName:"p"},"removeAd()")," and ",(0,o.mdx)("strong",{parentName:"p"},"refreshAd()"),". "),(0,o.mdx)("p",null,"If you want to handle that scenario, you can listen to ",(0,o.mdx)("a",{parentName:"p",href:"../api/overwolf-games#ongameinfoupdated"},"onGameInfoUpdated")," event and stop the ad if ",(0,o.mdx)("strong",{parentName:"p"},"gameInfo.isInFocus")," is false, and refresh it when ",(0,o.mdx)("strong",{parentName:"p"},"gameInfo.isInFocus")," changes to ",(0,o.mdx)("em",{parentName:"p"},"true"),".  (note that LoL might have different behavior, so double-check it)."),(0,o.mdx)("h2",{id:"ads-type-definitions"},"Ads Type Definitions"),(0,o.mdx)("p",null,"Type definitions for the ",(0,o.mdx)("inlineCode",{parentName:"p"},"OwAd")," class and the various interfaces it uses can be found at our ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/overwolf/types/blob/master/owads.d.ts"},"types")," github.\nImport this file to your app to get autocompletion and type inference with the ",(0,o.mdx)("inlineCode",{parentName:"p"},"OwAd"),"."),(0,o.mdx)("h4",{id:"sample-code-for-handling-ads-with-minimizedrestored-window"},"Sample code for handling ads with minimized/restored window"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'// define the event handler\nfunction onWindowStateChanged(state) {\n  console.log(`Window state changed: ${JSON.stringify(state)}`);\n\n  if(state) {\n    // when state changes to minimized, call removeAd()\n    if (state.window_state === "minimized") {\n      owAdInstance.removeAd();\n    }\n    // when state changes from minimized to normal, call refreshAd()\n    else if(state.window_previous_state === "minimized" && state.window_state === "normal"){\n      owAdInstance.refreshAd();\n    }\n  }\n}\n\n// call the overwolf api\noverwolf.windows.onStateChanged.removeListener(onWindowStateChanged);\noverwolf.windows.onStateChanged.addListener(onWindowStateChanged);\n')))}u.isMDXComponent=!0}}]);