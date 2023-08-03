"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5705],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},74247:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={slug:"/develop",title:"Introduction",description:"Let's talk about how the Contoso Real Estate Application was developed."},i="Overview",l={unversionedId:"develop/intro",id:"develop/intro",title:"Introduction",description:"Let's talk about how the Contoso Real Estate Application was developed.",source:"@site/docs/02-develop/01-intro.md",sourceDirName:"02-develop",slug:"/develop",permalink:"/contoso-real-estate/develop",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/develop",title:"Introduction",description:"Let's talk about how the Contoso Real Estate Application was developed."},sidebar:"guideSidebar",previous:{title:"The Architecture",permalink:"/contoso-real-estate/architecture"},next:{title:"Pre-Requisites",permalink:"/contoso-real-estate/develop/prerequisites"}},s={},p=[{value:"What You&#39;ll Build",id:"what-youll-build",level:2},{value:"What You&#39;ll Learn",id:"what-youll-learn",level:2},{value:"Cost To Complete",id:"cost-to-complete",level:2},{value:"Contributions Welcome",id:"contributions-welcome",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Azure-Samples/contoso-real-estate"},"reference implementation")," demonstrates how to build a modern web application (Contoso Rentals) via a ",(0,o.kt)("em",{parentName:"p"},"series of extensible scenarios"),", using best-in-class developer tools with relevant Azure and 3rd-party service integrations. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"E2E Reference Architecture For Contoso Real Estate",src:r(33955).Z,width:"1734",height:"894"})),(0,o.kt)("p",null,"Here is what the final architecture (with 7 scenarios) looks like. The scenarios are designed to be self-contained and usable as a reference for your own projects."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Setup"),": Some of the scenarios require a setup step, to prepare your environment for the development of the application. The setup steps are described in the corresponding scenario folder."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Dependencies"),": Some of the scenarios have dependencies on other scenarios. For example, scenario 4 depends on scenarios 1 and 3. In this case, the setup steps for scenario 4 will include references to the setup steps for those scenarios.")),(0,o.kt)("h2",{id:"what-youll-build"},"What You'll Build"),(0,o.kt)("p",null,"In this tutorial, you'll create a serverless web application that  enables enterprise users to look for (and reserve) temporary home rentals in a desired location. You'll build the application as a series of 8 scenarios, each showcasing best practices for developing core modern web app features including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Static Web App Hosting"),(0,o.kt)("li",{parentName:"ul"},"Serverless API Integration"),(0,o.kt)("li",{parentName:"ul"},"Serverless Database Integration"),(0,o.kt)("li",{parentName:"ul"},"Federated User Authentication "),(0,o.kt)("li",{parentName:"ul"},"Integrated Search & Recommendations"),(0,o.kt)("li",{parentName:"ul"},"Integration with Third Party (Payments) API"),(0,o.kt)("li",{parentName:"ul"},"End-to-End Application Testing"),(0,o.kt)("li",{parentName:"ul"},"Application Monitoring & Insights")),(0,o.kt)("h2",{id:"what-youll-learn"},"What You'll Learn"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Designing a Composable Application Architecture"),(0,o.kt)("li",{parentName:"ul"},"Employing a Micro-Frontend Development Pattern"),(0,o.kt)("li",{parentName:"ul"},"Scaling with a Microservices-driven Backend"),(0,o.kt)("li",{parentName:"ul"},"Integrating automated End-to-End Testing "),(0,o.kt)("li",{parentName:"ul"},"Simplifying deployment with Azure Developer CLI Templates")),(0,o.kt)("h2",{id:"cost-to-complete"},"Cost To Complete"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We prioritize for services in the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://azure.microsoft.com/en-us/free/search/"},"Azure Free Tier"))," by default."),(0,o.kt)("li",{parentName:"ul"},"We provide cost estimates (with ",(0,o.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/pricing/calculator/"},(0,o.kt)("strong",{parentName:"a"},"Azure Pricing Calculator")),") for usage beyond free tier."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Delete resources setup for this exercise")," on completion to prevent future charges.")),(0,o.kt)("admonition",{title:"TODO: PROVIDE COST ESTIMATE IF OUTSIDE FREE TIER",type:"danger"}),(0,o.kt)("h2",{id:"contributions-welcome"},"Contributions Welcome"),(0,o.kt)("p",null,"Contribute to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Azure-Samples/contoso-real-estate"},"reference implementation")," directly by opening a pull request or filing an issue on that repository. We would love to get your feedback on how you are re-implementing the reference architecture, or extending the reference implementation, in your own projects."),(0,o.kt)("p",null,"Have feedback on this developer guide? Share your questions and comments via the relevant topic on our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/contoso-real-estate/docs-website/discussions"},"Discussion Forum"),". Use this also to share your own insights or observations with community peers."))}d.isMDXComponent=!0},33955:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/e2e-full-horizontal.drawio-fad7d66fbc29e6c5945cf6832ef7def8.png"}}]);