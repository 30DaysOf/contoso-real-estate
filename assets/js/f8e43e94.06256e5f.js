"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8514],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},71782:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"Azure Monitor Panel"},i=void 0,s={unversionedId:"develop/scenario-8/monitor",id:"develop/scenario-8/monitor",title:"Azure Monitor Panel",description:"Summary*: How to implement Azure Monitor, use Azure Monitoring Panel",source:"@site/docs/02-develop/scenario-8/1-monitor.md",sourceDirName:"02-develop/scenario-8",slug:"/develop/scenario-8/monitor",permalink:"/contoso-real-estate/develop/scenario-8/monitor",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Azure Monitor Panel"},sidebar:"guideSidebar",previous:{title:"Introduction",permalink:"/contoso-real-estate/develop/scenario-8/intro"},next:{title:"Query App Insights",permalink:"/contoso-real-estate/develop/scenario-8/insights"}},l={},p=[{value:"1. What is Azure Monitor?",id:"1-what-is-azure-monitor",level:2},{value:"2. How do I activate it?",id:"2-how-do-i-activate-it",level:2},{value:"3. How do I use it effectively?",id:"3-how-do-i-use-it-effectively",level:2},{value:"4. Azure Monitor In Action!",id:"4-azure-monitor-in-action",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"CONTENT DELIVERABLES",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Summary"),": How to implement Azure Monitor, use Azure Monitoring Panel"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Description"),": This piece of content should be specially crafted for JavaScript developers, and tone and characteristics of content should target this audience"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Dependencies"),": Scenario 1"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Service"),": App Monitor"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Type of Content"),": Procedural"))),(0,a.kt)("h2",{id:"1-what-is-azure-monitor"},"1. What is Azure Monitor?"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/azure-monitor/overview"},"By definition"),", Azure Monitor helps you ",(0,a.kt)("strong",{parentName:"p"},"maximize the availability and performance of your applications and services"),". It delivers a comprehensive solution for collecting, analyzing, and acting on telemetry from your cloud and on-premises environments. This information helps you understand how your applications are performing and proactively identify issues that affect them and the resources they depend on."),(0,a.kt)("admonition",{title:"EXERCISE",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Visit the Azure Portal, click on the hamburger menu, and select the ",(0,a.kt)("strong",{parentName:"p"},"Monitor")," option. You should see the Azure Monitoring Blade shown here. Explore the various panels and options.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(41935).Z,width:"1189",height:"802"})),(0,a.kt)("h2",{id:"2-how-do-i-activate-it"},"2. How do I activate it?"),(0,a.kt)("p",null,"Azure Monitor is ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/azure-monitor/getting-started"},"available the moment you create an Azure subscription"),". The Activity log immediately starts collecting events about activity in the subscription, and platform metrics are collected for any Azure resources you created. Features such as metrics explorer are available to analyze data. Other features require configuration. Similarly, as soon as you create an Azure resource, Azure Monitor is enabled and ",(0,a.kt)("strong",{parentName:"p"},"starts collecting metrics and activity logs"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Metrics data")," can be explored at any time using the ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/metrics-charts"},"Metrics Explorer")," in the Azure Portal.\n",(0,a.kt)("img",{parentName:"p",src:"https://learn.microsoft.com/en-us/azure/azure-monitor/media/overview/metrics.png",alt:null}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Log data")," can be analyzed with queries using the ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-query-overview"},"Log Analytics")," UI in the Azure portal.\n",(0,a.kt)("img",{parentName:"p",src:"https://learn.microsoft.com/en-us/azure/azure-monitor/media/overview/logs.png",alt:null})))),(0,a.kt)("admonition",{title:"EXERCISE",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To get hands-on experience with the Azure Monitor, start by monitoring ",(0,a.kt)("strong",{parentName:"p"},"a single resource")," ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/monitor-azure-resource"},"using this tutorial")," as a guide. Learn how Azure Monitor is activated by each type of service, what types of data are collected, and how data is analyzed and visualized in tools like Metrics Explorer and Log Analytics.")),(0,a.kt)("h2",{id:"3-how-do-i-use-it-effectively"},"3. How do I use it effectively?"),(0,a.kt)("p",null,"Using Azure Monitor effectively requires 2 key steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Configure the Azure Monitor components (to ",(0,a.kt)("em",{parentName:"li"},"collect and analyze data")," from targeted resources)"),(0,a.kt)("li",{parentName:"ul"},"Configure the targeted Azure resources (to ",(0,a.kt)("em",{parentName:"li"},"generate")," desired data for analysis)")),(0,a.kt)("p",null,"From a ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/azure-monitor/getting-started#getting-started-workflow"},"developer workflow")," perspective, there are 5 main steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/azure-monitor/best-practices-plan"},"Planning")," - define your requirements."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/azure-monitor/best-practices-data-collection"},"Configure")," - resources for data collection."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/azure-monitor/best-practices-analysis"},"Analyze")," - monitored data with queries, visualizations"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/azure-monitor/best-practices-alerts"},"Alert")," - with automated responses or notifications on key events"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/azure-monitor/best-practices-alerts"},"Optimize")," - costs for Azure monitor usage by iterative evaluation")),(0,a.kt)("admonition",{title:"EXERCISE",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Walk through ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/training/paths/monitor-usage-performance-availability-resources-azure-monitor"},"these 7 modules")," to get experience with:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Setting up and configuring Azure Monitor"),(0,a.kt)("li",{parentName:"ul"},"Full-stack monitoring with App Insights"),(0,a.kt)("li",{parentName:"ul"},"Azure VM health monitoring with Metrics Explorer"),(0,a.kt)("li",{parentName:"ul"},"Page Load Times for web apps with App Insights"),(0,a.kt)("li",{parentName:"ul"},"Log Queries using Kusto Query Language"),(0,a.kt)("li",{parentName:"ul"},"Analyze Azure infra with Azure Monitor logs"),(0,a.kt)("li",{parentName:"ul"},"Improve incident response with Azure Monitor alerts"))),(0,a.kt)("h2",{id:"4-azure-monitor-in-action"},"4. Azure Monitor In Action!"),(0,a.kt)("admonition",{title:"TODO",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Walk through logs, metrics, app insights for the deployed E2E app. Identify ways to monitor for:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"app performance"),(0,a.kt)("li",{parentName:"ul"},"resource utilization"),(0,a.kt)("li",{parentName:"ul"},"cost optimization"))))}m.isMDXComponent=!0},41935:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/azure-monitor-blade-a9b57840f32da0e05214599dbdd2a675.png"}}]);