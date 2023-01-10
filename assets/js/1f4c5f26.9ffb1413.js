"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8435],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>p,MDXProvider:()=>c,mdx:()=>g,useMDXComponents:()=>m,withMDXComponents:()=>l});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){return function(t){var n=m(t.components);return a.createElement(e,r({},t,{components:n}))}},m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),l=m(n),c=o,u=l["".concat(i,".").concat(c)]||l[c]||h[c]||r;return n?a.createElement(u,s(s({ref:t},p),{},{components:n})):a.createElement(u,s({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=f;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},20486:(e,t,n)=>{n.d(t,{ZP:()=>u});var a=n(87462),o=(n(67294),n(3905));const r={toc:[{value:"Notes regarding the snippet above",id:"notes-regarding-the-snippet-above",level:4}]};function i(e){let{components:t,...n}=e;return(0,o.mdx)("wrapper",(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"In order to use the Ads SDK within an Overwolf app, you must first fetch it from a ",(0,o.mdx)("a",{parentName:"p",href:"https://content.overwolf.com/libs/ads/latest/owads.min.js"},"constant endpoint")," - ",(0,o.mdx)("inlineCode",{parentName:"p"},"https://content.overwolf.com/libs/ads/latest/owads.min.js"),".\nAttached is a short example snippet that fetches the SDK, as well as setting up a basic ",(0,o.mdx)("a",{parentName:"p",href:"/api/general/ads-sdk/overwolf-platform/owad"},(0,o.mdx)("inlineCode",{parentName:"a"},"OwAd"))," instance:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-html",metastring:'title="Fetch the latest version of the Ads-SDK, and make sure it loaded"',title:'"Fetch',the:!0,latest:!0,version:!0,of:!0,"Ads-SDK,":!0,and:!0,make:!0,sure:!0,it:!0,'loaded"':!0},'<script src="https://content.overwolf.com/libs/ads/latest/owads.min.js" async onerror="onAdsSDKNotLoaded()" onload="onAdsSDKReady()"><\/script>\n<script>\n    // Reached if the SDK\'s script failed to load (took too long, couldn\'t be found, etc)\n    function onAdsSDKNotLoaded() {\n        // If this happens, it is up to the app to decide how to proceed.\n        console.error("Couldn\'t load owads.min.js!");\n    }\n\n    function onAdsSDKReady() {\n        if (!OwAd) {\n            // Reached if the SDK\'s script failed to properly load.\n            // If this happens, it is up to the app to decide how to proceed.\n            // onAdsSDKNotLoaded();\n            return;\n        }\n        // Reached if the script loaded properly.\n        // You can now create however many ad containers you need for this window, granted that they follow the implementation guidelines.\n        let adContainer = new OwAd(document.getElementById(/*Insert ad container Id here*/), {/*Mandatory Ad settings*/});\n    }\n\n<\/script>\n')),(0,o.mdx)("h4",{id:"notes-regarding-the-snippet-above"},"Notes regarding the snippet above"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"As you can see, the script tag is added with an ",(0,o.mdx)("inlineCode",{parentName:"p"},"async")," attribute.\nThis is because the script should be loaded asynchronously, so that it will not interfere\nwith the rest of the page's loading.\nThe downside to this approach, is that the script may take time to load and be ready.",(0,o.mdx)("br",{parentName:"p"}),"\n","To overcome this, you should use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"onload")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"onerror")," callbacks from the script tag, to be notified as soon as the load succeeded/failed.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"When creating a new ",(0,o.mdx)("a",{parentName:"p",href:"/api/general/ads-sdk/overwolf-platform/owad"},(0,o.mdx)("inlineCode",{parentName:"a"},"OwAd")),", we provide it with two parameters: A DOM element, and the ",(0,o.mdx)("strong",{parentName:"p"},"required")," Ad settings.\nIn this example we are getting the instance of the element by calling ",(0,o.mdx)("inlineCode",{parentName:"p"},"document.getElementById()"),".\nHowever, you may use any other way to get the DOM element. You may use ",(0,o.mdx)("inlineCode",{parentName:"p"},"document.querySelector"),",\n",(0,o.mdx)("a",{parentName:"p",href:"https://jquery.com/"},"jQuery"),", or any other method you wish - as long as the provided element is an HTML element available\nat the DOM, it will work."),(0,o.mdx)("admonition",{parentName:"li",title:"Container Identification",type:"tip"},(0,o.mdx)("p",{parentName:"admonition"},"If the Ad container did not already have an element ID defined, it will automatically be assigned one.")))))}i.isMDXComponent=!0;const s={toc:[{value:"Changes to your app\u2019s manifest.json file",id:"changes-to-your-apps-manifestjson-file",level:3},{value:"Required permissions",id:"required-permissions",level:4},{value:"Enabling Google\u2019s syndication",id:"enabling-googles-syndication",level:4},{value:"Ad isolation manifest flags",id:"ad-isolation-manifest-flags",level:4}]};function d(e){let{components:t,...n}=e;return(0,o.mdx)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h3",{id:"changes-to-your-apps-manifestjson-file"},"Changes to your app\u2019s manifest.json file"),(0,o.mdx)("h4",{id:"required-permissions"},"Required permissions"),(0,o.mdx)("p",null,"The Overwolf Advertising library uses Overwolf APIs to improve ad targeting for users. Therefore, you need to add the following ",(0,o.mdx)("a",{parentName:"p",href:"/api/manifest#permissions-array"},"permissions")," to your app\u2019s permissions array:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'   "permissions": ["Extensions", "Streaming", "Profile", "GameInfo"]\n')),(0,o.mdx)("h4",{id:"enabling-googles-syndication"},"Enabling Google\u2019s syndication"),(0,o.mdx)("p",null,"In order to get impression tracking to work, you will also need to enable a work-around that allows requests to Google\u2019s syndication servers. This is done using the ",(0,o.mdx)("a",{parentName:"p",href:"/api/manifest#protocol_override_domains"},(0,o.mdx)("inlineCode",{parentName:"a"},"protocol_override_domains"))," property:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'   "data": {    \n      "protocol_override_domains" : {"googlesyndication" : "https"}\n   }\n')),(0,o.mdx)("h4",{id:"ad-isolation-manifest-flags"},"Ad isolation manifest flags"),(0,o.mdx)("p",null,"The following ",(0,o.mdx)("a",{parentName:"p",href:"/api/manifest#extension_window_data-object"},"App Window Data")," flags should be set to ",(0,o.mdx)("inlineCode",{parentName:"p"},"true")," for every window displaying Ads:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/api/manifest#windows-block_top_window_navigation"},"block_top_window_navigation")," -  Stops non ",(0,o.mdx)("inlineCode",{parentName:"li"},"_blank <a>"),' ads from "taking-over" the entire app\u2019s window.'),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/api/manifest#popup_blocker"},"popup_blocker")," \u2013 Prevents new browser windows from being opened automatically using scripts."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/api/manifest#windows-mute"},"mute")," - Mute sounds in window.",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"If you wish to still use sound in the relevant window, check out the ",(0,o.mdx)("a",{parentName:"li",href:"/api/manifest#mute_excluded_hosts"},"mute_excluded_hosts")," flag.")))))}d.isMDXComponent=!0;const p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",t)},l=p("Tabs"),m=p("TabItem"),c={toc:[{value:"Creating a Managed Ads Container",id:"creating-a-managed-ads-container",level:3},{value:"Setting up the Ads SDK",id:"setting-up-the-ads-sdk",level:3}]};function u(e){let{components:t,...n}=e;return(0,o.mdx)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"The Ads SDK works by creating simple, Managed Ads Containers, which are then controlled by the SDK, with minimal\nintervention from the app."),(0,o.mdx)("h3",{id:"creating-a-managed-ads-container"},"Creating a Managed Ads Container"),(0,o.mdx)(l,{groupId:"frameworks",mdxType:"Tabs"},(0,o.mdx)(m,{value:"overwolf-platform",label:"Overwolf Platform",mdxType:"TabItem"},(0,o.mdx)("p",null,"The app must first ",(0,o.mdx)("a",{parentName:"p",href:"#setting-up-the-ads-sdk"},"set up")," the Ads SDK. This will then define the ",(0,o.mdx)("a",{parentName:"p",href:"/api/general/ads-sdk/overwolf-platform/owad"},(0,o.mdx)("inlineCode",{parentName:"a"},"OwAd"))," variable,\nwhich can then be instantiated. Instantiating an ",(0,o.mdx)("a",{parentName:"p",href:"/api/general/ads-sdk/overwolf-platform/owad"},(0,o.mdx)("inlineCode",{parentName:"a"},"OwAd"))," will link it to a specific DOM element,\nwhich will then become a Managed Ads Container."),(0,o.mdx)("admonition",{title:"Multiple Ad containers",type:"info"},(0,o.mdx)("p",{parentName:"admonition"},"If you wish to show more than one ad in your app, you can easily do so by creating multiple instances\nof ",(0,o.mdx)("a",{parentName:"p",href:"/api/general/ads-sdk/overwolf-platform/owad"},(0,o.mdx)("inlineCode",{parentName:"a"},"OwAd")),". Just make sure you pass a different container element for each instance,\nand that you properly comply with our ",(0,o.mdx)("a",{parentName:"p",href:"/start/monetize-your-app/advertising/working-with-ads#ad-planning-guidelines"},"acceptable Ads policy"),".")),(0,o.mdx)("h3",{id:"setting-up-the-ads-sdk"},"Setting up the Ads SDK"),(0,o.mdx)(i,{mdxType:"PlatformSetupSnippet"}),(0,o.mdx)(d,{mdxType:"PlatformSetupManifest"})),(0,o.mdx)(m,{value:"electron-platform",label:"Overwolf Electron",mdxType:"TabItem"},(0,o.mdx)("p",null,"The Ads SDK comes built into the ",(0,o.mdx)("a",{parentName:"p",href:"/tools/ow-electron"},"ow-electron")," package. As such, the app only needs\nto create an ",(0,o.mdx)("inlineCode",{parentName:"p"},"<owadview/>")," component, which then acts as a managed Ad container."),(0,o.mdx)("admonition",{title:"Multiple Ad containers",type:"info"},(0,o.mdx)("p",{parentName:"admonition"},"If you wish to show more than one ad in your app, you can easily do so by creating multiple instances\nof the ",(0,o.mdx)("inlineCode",{parentName:"p"},"<owadview/>")," component. Just make sure that you properly comply with our ",(0,o.mdx)("a",{parentName:"p",href:"/start/monetize-your-app/advertising/working-with-ads#ad-planning-guidelines"},"acceptable Ads policy"),".")))))}u.isMDXComponent=!0},92776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var a=n(87462),o=(n(67294),n(3905)),r=n(20486);const i={id:"ads-sdk",image:"/img/embed/api-docs.jpg",title:"Ads SDK API",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!0}},s=void 0,d={unversionedId:"api/general/ads-sdk/ads-sdk",id:"api/general/ads-sdk/ads-sdk",title:"Ads SDK API",description:"This section is only intended to serve as a quick reference on using the Ads SDK.",source:"@site/pages/docs/api/general/ads-sdk/ads-sdk.mdx",sourceDirName:"api/general/ads-sdk",slug:"/api/general/ads-sdk/",permalink:"/api/general/ads-sdk/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/general/ads-sdk/ads-sdk.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1673367451,formattedLastUpdatedAt:"Jan 10, 2023",frontMatter:{id:"ads-sdk",image:"/img/embed/api-docs.jpg",title:"Ads SDK API",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!0}},sidebar:"api",previous:{title:"overwolf.games.tracked API",permalink:"/api/games/tracked"},next:{title:"OwAd",permalink:"/api/general/ads-sdk/overwolf-platform/owad"}},p={},l=[],m={toc:l};function c(e){let{components:t,...n}=e;return(0,o.mdx)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("admonition",{title:"About The Ads SDK",type:"note"},(0,o.mdx)("p",{parentName:"admonition"},"This section is only intended to serve as a quick reference on using the Ads SDK.\nFor more information about the SDK itself, click ",(0,o.mdx)("a",{parentName:"p",href:"/start/monetize-your-app/advertising"},"here"),"."),(0,o.mdx)("p",{parentName:"admonition"},"For information about working with Ads in an app, instead go ",(0,o.mdx)("a",{parentName:"p",href:"/start/monetize-your-app/advertising/working-with-ads"},"here"),".")),(0,o.mdx)(r.ZP,{mdxType:"Setup"}))}c.isMDXComponent=!0}}]);