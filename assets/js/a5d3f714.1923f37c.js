"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5795],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(y,o(o({ref:t},l),{},{components:n})):r.createElement(y,o({ref:t},l))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65570:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"Security & Identity"},o=void 0,c={unversionedId:"develop/scenario-2/security",id:"develop/scenario-2/security",title:"Security & Identity",description:"Any information about what is provided for security/identity and what is not.",source:"@site/docs/02-develop/scenario-2/5-security.md",sourceDirName:"02-develop/scenario-2",slug:"/develop/scenario-2/security",permalink:"/contoso-real-estate/develop/scenario-2/security",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Security & Identity"},sidebar:"guideSidebar",previous:{title:"Dev Environment",permalink:"/contoso-real-estate/develop/scenario-2/environment"},next:{title:"Pipeline Automation",permalink:"/contoso-real-estate/develop/scenario-2/automation"}},p={},s=[],l={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"GUIDANCE",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Any information about what is provided for security/identity and what is not."),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"RBAC"),(0,a.kt)("li",{parentName:"ul"},"Easy auth"),(0,a.kt)("li",{parentName:"ul"},"MSAL"),(0,a.kt)("li",{parentName:"ul"},"VNet"),(0,a.kt)("li",{parentName:"ul"},"Firewalls"),(0,a.kt)("li",{parentName:"ul"},"CORS"),(0,a.kt)("li",{parentName:"ul"},"AAD apps"),(0,a.kt)("li",{parentName:"ul"},"3rd party auth (GitHub, Stripe, etc)\n:::")),(0,a.kt)("h2",{parentName:"admonition",id:"secrets"},"Secrets"),(0,a.kt)("p",{parentName:"admonition"},"This scenario needs to connect to a database. Database connection strings should be stored in the corresponding .env file, and either on the Azure Static Web Apps configuration tab, as remote Environment Variables, or in Key Vault."),(0,a.kt)("h2",{parentName:"admonition",id:"cors"},"CORS"),(0,a.kt)("p",{parentName:"admonition"},"To prevent CORS issues, start the project locally with the ",(0,a.kt)("a",{parentName:"p",href:"https://azure.github.io/static-web-apps-cli/"},"Azure Static Web Apps CLI"),"."),(0,a.kt)("h2",{parentName:"admonition",id:"authentication"},"Authentication"),(0,a.kt)("p",{parentName:"admonition"},"To enable user authentication, this project implements ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/static-web-apps/authentication-authorization"},"Azure Static Web Apps Easy Auth"),". You can find detailed guidelines visiting ",(0,a.kt)("a",{parentName:"p",href:"/scenarios/scenario-4/intro"},"scenario 4"),".")))}d.isMDXComponent=!0}}]);