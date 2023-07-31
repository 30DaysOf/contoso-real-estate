"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2403],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},47348:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={slug:"/architecture",title:"The Architecture",description:"Let's talk about Contoso Real Estate Application architecture style"},o=void 0,s={unversionedId:"define/architecture",id:"define/architecture",title:"The Architecture",description:"Let's talk about Contoso Real Estate Application architecture style",source:"@site/docs/01-define/03-architecture.md",sourceDirName:"01-define",slug:"/architecture",permalink:"/contoso-real-estate/architecture",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"/architecture",title:"The Architecture",description:"Let's talk about Contoso Real Estate Application architecture style"},sidebar:"guideSidebar",previous:{title:"The Scenarios",permalink:"/contoso-real-estate/scenarios"},next:{title:"Introduction",permalink:"/contoso-real-estate/develop/scenario-8"}},l={},c=[{value:"Design Challenges",id:"design-challenges",level:2},{value:"Architecture Fundamentals",id:"architecture-fundamentals",level:2},{value:"Composable Architecture",id:"composable-architecture",level:2},{value:"Cloud-native Technology",id:"cloud-native-technology",level:2},{value:"Microservices",id:"microservices",level:2},{value:"Micro-frontends",id:"micro-frontends",level:2},{value:"API-First Design",id:"api-first-design",level:2},{value:"Reference Architecture",id:"reference-architecture",level:2}],p={toc:c},m="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(m,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"design-challenges"},"Design Challenges"),(0,a.kt)("p",null,"Designing a muti-scenario application is complex enough. Making it enterprise-grade requires us to keep additional constraints in mind when designing the architecture:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Ownership")," - is everything built by one team, or many?"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Prioritization")," - does one scenario have a dependency on another?"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Extensibility")," - are scenarios likely to be extended or modified later?"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Quality")," - is architecture reliable, cost-effective and performant?")),(0,a.kt)("p",null,"We use these questions to determine how we ",(0,a.kt)("em",{parentName:"p"},"structure")," our project (repo), ",(0,a.kt)("em",{parentName:"p"},"implement")," our scenarios (sequence), and ",(0,a.kt)("em",{parentName:"p"},"design")," our architecture (choices) in the Contoso Real Estate app."),(0,a.kt)("h2",{id:"architecture-fundamentals"},"Architecture Fundamentals"),(0,a.kt)("p",null,"A good starting point for learners is the ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/architecture/"},"Azure Architecture Center"),". It has extensive resources in design patterns and enterprise scenarios, with guidance on technology choices and workload optimization. It advocates a simple 4-step approach to developing modern apps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Architecture Style")," - identify the right architecture pattern for your scenario."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Technology Choices")," - decide your core Compute, Storage & Messaging resources."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Architecture Design")," - explore reference arch., design patterns & best practices."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Assess Quality")," - review for 5 pillars for software quality: ",(0,a.kt)("em",{parentName:"li"},"reliability, security, cost optimization, operational excellence and performance efficiency."))),(0,a.kt)("p",null,"For self-guided exploration of relevant architecture concepts and design patterns, ",(0,a.kt)("em",{parentName:"p"},"bookmark and revisit")," these two resources from the Architecture Center."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/architecture/browse/"},"Azure Architectures Browser")," - find real-world examples of cloud architectures with solution ideas for common workloads and insights for ",(0,a.kt)("strong",{parentName:"li"},"technology choices.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/well-architected/"},"Azure Well-Architectured Framework")," - find guiding tenets for ",(0,a.kt)("strong",{parentName:"li"},"assessing the quality")," of your workloads, and tools for reviewing and remediating identified issues.")),(0,a.kt)("p",null,"For now, let's dive in with step 1 - identify the right architecture pattern - for the Contoso Real Estate application scenarios."),(0,a.kt)("h2",{id:"composable-architecture"},"Composable Architecture"),(0,a.kt)("p",null,"We want to build a reference architecture and implementation for a enterprise-grade application with ",(0,a.kt)("em",{parentName:"p"},"extensible scenarios"),", that can be repurposed and evolved rapidly to suit changing needs. A ",(0,a.kt)("a",{parentName:"p",href:"https://www.gartner.com/smarterwithgartner/gartner-keynote-the-future-of-business-is-composable"},"2020 Gartner keynote")," identified ",(0,a.kt)("strong",{parentName:"p"},"composable architectures")," as the growing trend for enterprise applications that were built for resilience and agility."),(0,a.kt)("p",null,"Generally speaking, composable architectures focus on design patterns and principles where more complex solutions are ",(0,a.kt)("strong",{parentName:"p"},"assembled")," (in build-deploy pipelines) from simpler components that can be developed by independent teams, using best-in-class tools and technologies. ",(0,a.kt)("em",{parentName:"p"},"This addresses our design challenges in ownership, prioritization, extensibility and quality, making it a good architecture style for the Contoso Real Estate app")),(0,a.kt)("p",null,"More concretely, we have industry initiatives like the ",(0,a.kt)("a",{parentName:"p",href:"https://macharchitecture.com/"},"MACH Architecture")," which promotes a composable architecture design based on four technology pillars:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Microservices")," - where the backend is built as loosely-coupled distributed services."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"API-first")," - where service functionality is exposed as API (contracts) defined up front."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Cloud-native")," - where apps & services are pre-designed to take advantage of cloud scale."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Headless")," - where frontend choices are decoupled from backends to support flexible UI/UX.")),(0,a.kt)("p",null,"In the rest of this section, we'll explore what these pillars mean in the context of our reference implementation. ",(0,a.kt)("em",{parentName:"p"},"The Contoso Real Estate reference implementation is the first JavaScript on Azure sample that demonstrates a composable enterprise architecture pattern"),"."),(0,a.kt)("h2",{id:"cloud-native-technology"},"Cloud-native Technology"),(0,a.kt)("p",null,"Cloud-native is one of the four technology pillars of the composable enterprise architecture. The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cncf/toc/blob/main/DEFINITION.md"},"Cloud Native Computing Foundation")," defines cloud-native as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"technologies")," that empower organizations to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds. ",(0,a.kt)("em",{parentName:"li"},"Ex: Containers, service meshes, microservices, immutable infrastructure, and declarative APIs"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"techniques")," that enable loosely coupled systems that are resilient, manageable, and observable. Combined with robust automation, they allow engineers to make high-impact changes frequently and predictably with minimal toil.")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/dotnet/architecture/cloud-native/definition"},"simpler definition")," is that cloud-native enables solutions to be ",(0,a.kt)("em",{parentName:"p"},"built in the cloud and take full advantage of the cloud computing model")," as visualized by five core technology pillars in Azure."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learn.microsoft.com/dotnet/architecture/cloud-native/media/cloud-native-foundational-pillars.png",alt:"5 Pillars of Cloud-Native"})),(0,a.kt)("p",null,"In the ",(0,a.kt)("a",{parentName:"p",href:"/develop"},"Develop")," section of this guide, we'll dive into more details on the specific cloud-native technologies and techniques used in our Contoso Real Estate App reference implementation."),(0,a.kt)("h2",{id:"microservices"},"Microservices"),(0,a.kt)("p",null,"Microservices are the second pillar of the composable enterprise architecture - and a core part of cloud-native solutions on Microsoft Azure. They are ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/devops/deliver/what-are-microservices"},"defined as")," "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"the architectural process of building a distributed application from separately deployable services that perform specific business functions and communicate over web interfaces"))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learn.microsoft.com/en-us/devops/_img/microservices_600x300-1.png",alt:"Microservices"})),(0,a.kt)("p",null,"As illustrated above, this allows us to replace tightly-coupled ",(0,a.kt)("strong",{parentName:"p"},"monolithic apps")," with loosely-coupled ",(0,a.kt)("strong",{parentName:"p"},"microservices"),", breaking up complex functionality into simpler distributed components with well-defined APIs that enable remote service invocations. With this pattern, application backends can be broken down into functionally-complete parts that are owned and evolved by different teams - while delivering a reliable and cohesive application experience to users. "),(0,a.kt)("h2",{id:"micro-frontends"},"Micro-frontends"),(0,a.kt)("p",null,"Micro-frontends is a newer term that captures the natural evolution of the microservices pattern to ",(0,a.kt)("em",{parentName:"p"},"frontend architectures"),". Here, a 'monolithic' frontend app is ",(0,a.kt)("em",{parentName:"p"},"split"),' into "micro-frontend" apps that are owned and evolved by potentially different teams. The core frontend application is then composed from the micro-frontends in production, as shown in this figure taken ',(0,a.kt)("a",{parentName:"p",href:"https://martinfowler.com/articles/micro-frontends.html"},"from this 2019 article")," that describes the pattern in more detail."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://martinfowler.com/articles/micro-frontends/deployment.png",alt:"Microfrontend Splits"})),(0,a.kt)("p",null,"The key question now is: ",(0,a.kt)("strong",{parentName:"p"},"\"How do we 'split' the monolithic frontend app into micro-frontends?"),". The figure below ",(0,a.kt)("a",{parentName:"p",href:"https://microfrontend.dev/architecture/#patterns"},"from microfrontends.dev")," illustrates the two main approaches that typically reflect team ownership of the UI/UX:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Horizontal Split")," (left) assumes team ownership at the level of ",(0,a.kt)("em",{parentName:"li"},"view components"),' within a page of the application. For example: A "search micro-frontend" would now be a widget that could be embedded in different pages to activate search behaviors in context.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Vertical Split")," (right) assumes team ownership at the level of ",(0,a.kt)("em",{parentName:"li"},"page components"),' within the application. For example: A "search micro-front-end" would be now be a page tied to a ',(0,a.kt)("inlineCode",{parentName:"li"},"/search")," route, linked from other pages that pass in the query context as route params.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://microfrontend.dev/images/frameworks/splits.svg",alt:"Microfrontend.dev Splits"})),(0,a.kt)("p",null,"Both options are valid - but vertical approach is the simpler to adopt, and more extensible to new requirements (with less disruption). Micro-frontends are often motivated by organizational needs, where each micro-frontend app (feature) is owned by a distinct team that manages a related product. As a best practice for micro-frontends design, ",(0,a.kt)("strong",{parentName:"p"},"avoid horizontal teams that cut across vertical teams")," as illustrated below (",(0,a.kt)("a",{parentName:"p",href:"https://martinfowler.com/articles/micro-frontends.html"},"source: martinfowler.com"),") - and keep it simple."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://martinfowler.com/articles/micro-frontends/horizontal.png",alt:null})),(0,a.kt)("h2",{id:"api-first-design"},"API-First Design"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"API-first")," (also called ",(0,a.kt)("em",{parentName:"p"},"contract-first"),') is the third pillar of the composable enterprise architecture. In traditional "implementation-first" approaches, the API specification is derived from the component implementation. With the "API-first" approach, the contract is defined first, decoupling the implementation (microservice) and usage (service clients) pieces - allowing different teams to own and evolve them independently. This is key to ',(0,a.kt)("strong",{parentName:"p"},"headless")," solutions and ",(0,a.kt)("strong",{parentName:"p"},"micro-frontend")," apps - both of which decouple user experience from backend implementation."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/architecture/best-practices/api-design#open-api-initiative"},"Open API initiative"),' is an industry standard for promoting such contract-first development. It comes with opinionated guidelines on API design, and a growing set of tools and libraries (e.g., "Swagger") to streamline development and documentation of your solution API. '),(0,a.kt)("admonition",{title:"EXPLORE THE CONTOSO REAL ESTATE OPEN API SPEC",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Check out the ",(0,a.kt)("a",{parentName:"p",href:"/api"},"API")," link above for a peek at the Open API compliant specification (and Swagger-generated documentation) for this Contoso Real Estate reference sample.")),(0,a.kt)("h2",{id:"reference-architecture"},"Reference Architecture"),(0,a.kt)("p",null,"With this, we've completed the first step of our reference architecture design process - identifying the architecture style (composable enterprise). Now it's time to make technology choices and define the architecture iteratively, from our prioritized scenarios."),(0,a.kt)("p",null,"Here is a sneak peek at the final reference architecture ",(0,a.kt)("em",{parentName:"p"},"across all prioritized scenarios"),". In the next section (",(0,a.kt)("a",{parentName:"p",href:"/develop"},(0,a.kt)("strong",{parentName:"a"},"Develop")),"), we break this down into smaller scenarios, and explore the reference architecture iteratively, composing the solution one scenario at a time."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"E2E Reference Architecture For Contoso Real Estate",src:r(33955).Z,width:"1734",height:"894"})))}d.isMDXComponent=!0},33955:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/e2e-full-horizontal.drawio-fad7d66fbc29e6c5945cf6832ef7def8.png"}}]);