"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4130],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),h=n,d=c["".concat(l,".").concat(h)]||c[h]||m[h]||i;return a?r.createElement(d,s(s({ref:t},p),{},{components:a})):r.createElement(d,s({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:n,s[1]=o;for(var u=2;u<i;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},82778:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const i={title:"Query App Insights"},s=void 0,o={unversionedId:"develop/scenario-8/insights",id:"develop/scenario-8/insights",title:"Query App Insights",description:"Summary*: Implementing analytics queries with AppInsights",source:"@site/docs/02-develop/scenario-8/2-insights.md",sourceDirName:"02-develop/scenario-8",slug:"/develop/scenario-8/insights",permalink:"/contoso-real-estate/develop/scenario-8/insights",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Query App Insights"},sidebar:"guideSidebar",previous:{title:"Azure Monitor Panel",permalink:"/contoso-real-estate/develop/scenario-8/monitor"}},l={},u=[{value:"Application Insights",id:"application-insights",level:2},{value:"Enable insights",id:"enable-insights",level:3},{value:"Scenario 1 insights",id:"scenario-1-insights",level:3},{value:"Insights deep dive",id:"insights-deep-dive",level:2},{value:"Azure Static Web Apps",id:"azure-static-web-apps",level:3},{value:"Azure API Management",id:"azure-api-management",level:3},{value:"Turn on insights",id:"turn-on-insights",level:2},{value:"During creation",id:"during-creation",level:3},{value:"After creation",id:"after-creation",level:3},{value:"Cost for activation",id:"cost-for-activation",level:2},{value:"Standard insights",id:"standard-insights",level:3},{value:"Custom insights",id:"custom-insights",level:3},{value:"Managing cost",id:"managing-cost",level:3},{value:"Visualize insights",id:"visualize-insights",level:2},{value:"Failures",id:"failures",level:3},{value:"Performance",id:"performance",level:3},{value:"Analyze",id:"analyze",level:2},{value:"Request and response failures",id:"request-and-response-failures",level:3},{value:"Dependency failures",id:"dependency-failures",level:3},{value:"Source code exceptions",id:"source-code-exceptions",level:3},{value:"Current performance",id:"current-performance",level:3},{value:"Slowest resources",id:"slowest-resources",level:3},{value:"Slowest dependencies",id:"slowest-dependencies",level:3},{value:"Investigate a failure",id:"investigate-a-failure",level:2},{value:"Investigate performance",id:"investigate-performance",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(c,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"CONTENT DELIVERABLES",type:"info"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Summary"),": Implementing analytics queries with AppInsights"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Description"),": How to best leverage AppInsights for perf analysis"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Dependencies"),": Scenario 1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Service"),": App Insights"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Type of Content"),": Procedural"))),(0,n.kt)("h2",{id:"application-insights"},"Application Insights"),(0,n.kt)("p",null,"Application Insights is an ",(0,n.kt)("a",{parentName:"p",href:"insights#azure-monitor"},"extension of Azure Monitor")," and provides Application Performance Monitoring (also known as \u201cAPM\u201d) features. APM tools are useful to monitor applications from development, through test, and into production."),(0,n.kt)("h3",{id:"enable-insights"},"Enable insights"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Azure-Samples/contoso-real-estate"},"Auto-Instrumentation")," (agent): The easiest way to get started consuming Application insights is through the Azure portal and the built-in visual experiences.  Auto-Instrumentation is the only way to instrument an application in which you don't have access to the source code."),(0,n.kt)("li",{parentName:"ul"},"Adding the ",(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview?tabs=net#supported-languages"},"Application Insights SDK")," to your application code. You only need to install the Application Insights SDK in the following circumstances:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"You require custom events and metrics"),(0,n.kt)("li",{parentName:"ul"},"You require control over the flow of telemetry"),(0,n.kt)("li",{parentName:"ul"},"Auto-Instrumentation isn't available (typically due to language or platform limitations)")))),(0,n.kt)("p",null,"Advanced users can ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/azure-monitor/logs/log-query-overview"},"query the underlying data")," directly to ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/azure-monitor/app/tutorial-app-dashboards"},"build custom visualizations")," through Azure Monitor ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/azure-monitor/app/overview-dashboard"},"Dashboards")," and ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/azure-monitor/visualize/workbooks-overview"},"Workbooks"),"."),(0,n.kt)("h3",{id:"scenario-1-insights"},"Scenario 1 insights"),(0,n.kt)("p",null,"The portal app featured in Scenario 1 consists of several Azure services:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Azure Static web apps:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Auto-instrumentation requires an application with an ",(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/static-web-apps/add-api?tabs=vanilla-javascript"},"API"),". "))),(0,n.kt)("li",{parentName:"ul"},"Azure API management: ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/api-management/howto-use-analytics"},"Auto-instrumentation")," including ",(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/api-management/api-management-howto-use-azure-monitor"},"published APIs"),"."))),(0,n.kt)("li",{parentName:"ul"},"Azure Database for PostgreSQL flexible server:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Does not provide auto-instrumentation")))),(0,n.kt)("h2",{id:"insights-deep-dive"},"Insights deep dive"),(0,n.kt)("h3",{id:"azure-static-web-apps"},"Azure Static Web Apps"),(0,n.kt)("p",null,"Application insights provides auto-instrumented insights when the Static Web App includes an API. The API can be managed or an external Functions App."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(95664).Z,width:"1161",height:"673"})),(0,n.kt)("p",null,"The most common insights available over a several time ranges for both browser and server include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Failed requests for API request failures include the date and time, URL, response code, response time"),(0,n.kt)("li",{parentName:"ul"},"Server request and response shows the API request performance over time and the count by route"),(0,n.kt)("li",{parentName:"ul"},"Server requests shows the count by route"),(0,n.kt)("li",{parentName:"ul"},"Availability allows you to configure tests such as PING tests or multi-step for your resource")),(0,n.kt)("h3",{id:"azure-api-management"},"Azure API Management"),(0,n.kt)("p",null,"Azure API Management provides ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/api-management/howto-use-analytics"},"auto-instrumented insights")," for your APIs. Analyze the usage and performance of the APIs in your API Management instance across several dimensions, including:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Time"),(0,n.kt)("li",{parentName:"ul"},"Geography"),(0,n.kt)("li",{parentName:"ul"},"APIs"),(0,n.kt)("li",{parentName:"ul"},"API operations"),(0,n.kt)("li",{parentName:"ul"},"Products"),(0,n.kt)("li",{parentName:"ul"},"Subscriptions"),(0,n.kt)("li",{parentName:"ul"},"Users"),(0,n.kt)("li",{parentName:"ul"},"Requests")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(54891).Z,width:"1014",height:"674"})),(0,n.kt)("p",null,"API Management emits ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/data-platform-metrics"},"metrics")," every minute, giving you near real-time visibility into the state and health of your APIs. The following are the two most frequently used metrics. For a list of all available metrics, see ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/metrics-supported#microsoftapimanagementservice"},"supported metrics"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Capacity - helps you make decisions about upgrading/downgrading your API Management services. The metric is emitted per minute and reflects the estimated gateway capacity at the time of reporting. The metric ranges from 0-100 calculated based on gateway resources such as CPU and memory utilization."),(0,n.kt)("li",{parentName:"ul"},"Requests - helps you analyze API traffic going through your API Management services. The metric is emitted per minute and reports the number of gateway requests with dimensions. Filter requests by response codes, location, hostname, and errors.")),(0,n.kt)("h2",{id:"turn-on-insights"},"Turn on insights"),(0,n.kt)("p",null,"Insights are enabled at the resource group or resource level, during resource creation or after resource creation is complete."),(0,n.kt)("p",null,"Insights are provided by a separate resource, Azure ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview?tabs=nodejs"},"Application Insights"),". "),(0,n.kt)("h3",{id:"during-creation"},"During creation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Anytime: The ",(0,n.kt)("a",{parentName:"li",href:"https://portal.azure.com/"},"Azure portal"),"is the simpliest way to enable insights is in the Azure portal."),(0,n.kt)("li",{parentName:"ul"},"Configuration: Configure insights from the configuration tools such as ",(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/cli/azure/"},"Azure CLI")," or ",(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/powershell/azure/?view=azps-9.3.0"},"PowerShell"),". Each Azure resource which supports Application Insights has its own command to enable and disable insights."),(0,n.kt)("li",{parentName:"ul"},"Deployment: Enable insights from a deployment tool such as ",(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/"},"Bicep")," or ",(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/developer/azure-developer-cli/overview"},"Azure Dev CLI"),".")),(0,n.kt)("h3",{id:"after-creation"},"After creation"),(0,n.kt)("p",null,"After your resource is created, you can turn on insights with:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Anytime: The ",(0,n.kt)("a",{parentName:"li",href:"https://portal.azure.com/"},"Azure portal"),"is the simpliest way to enable insights is in the Azure portal."),(0,n.kt)("li",{parentName:"ul"},"Configuration: Configure insights from the configuration tools such as ",(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/cli/azure/"},"Azure CLI")," or ",(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/powershell/azure/?view=azps-9.3.0"},"PowerShell"),". Each Azure resource which supports Application Insights has its own command to enable and disable insights.")),(0,n.kt)("h2",{id:"cost-for-activation"},"Cost for activation"),(0,n.kt)("p",null,"Insights are provided with consumption-based pricing, which is also known as pay-as-you-go pricing. With this billing model, you only pay for what you use. Features of Azure Monitor that are enabled by default don't incur any charge."),(0,n.kt)("p",null,"Learn more about the ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/azure-monitor/usage-estimated-costs#pricing-model"},"pricing model"),". "),(0,n.kt)("h3",{id:"standard-insights"},"Standard insights"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/azure-monitor/app/standard-metrics"},"Standard insights")," are provided when the resource is created and provide a graduated pricing tier. "),(0,n.kt)("h3",{id:"custom-insights"},"Custom insights"),(0,n.kt)("p",null,"Custom insights are provided by integrating the ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview?tabs=net#supported-languages"},"Application Insights SDK")," to your source code to provide custom instrumentation. You can reduce the cost of your insights by reducing the ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/azure-monitor/app/sampling#ingestion-sampling"},"ingestion sampling")," rate. "),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/azure-monitor/app/api-custom-events-metrics#api-summary"},"Custom insights include")," tracking the following"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/azure-monitor/app/api-custom-events-metrics#page-views"},"Page views")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/azure-monitor/app/api-custom-events-metrics#trackevent"},"Events")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/azure-monitor/app/api-custom-events-metrics#getmetric"},"Metrics")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/azure-monitor/app/api-custom-events-metrics#trackexception"},"Exceptions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/azure-monitor/app/api-custom-events-metrics#trackrequest"},"Requests")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/azure-monitor/app/api-custom-events-metrics#tracktrace"},"Trace")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/azure-monitor/app/api-custom-events-metrics#trackdependency"},"Dependencies"))),(0,n.kt)("p",null,"You can attach ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/azure-monitor/app/api-custom-events-metrics#properties"},"properties and metrics")," to most of these telemetry calls."),(0,n.kt)("h3",{id:"managing-cost"},"Managing cost"),(0,n.kt)("p",null,"When considering cost for Application Insights, consider ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/azure-monitor/app/javascript?tabs=snippet#configuration"},"configuring the following design optimizations"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use ",(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/azure-monitor/app/sampling"},"sampling")," to reduce the amount of data sent to Application Insights."),(0,n.kt)("li",{parentName:"ul"},"Turn off unneeded ",(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/azure-monitor/app/javascript#configuration"},"collection for web pages")),(0,n.kt)("li",{parentName:"ul"},"Reduce HTTP request ",(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/azure-monitor/app/javascript#configuration"},"tracing for web pages"))),(0,n.kt)("h2",{id:"visualize-insights"},"Visualize insights"),(0,n.kt)("h3",{id:"failures"},"Failures"),(0,n.kt)("p",null,"Deep dive into failures in a give time range"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(30578).Z,width:"979",height:"653"})),(0,n.kt)("p",null,"Select an item to see details of the failure"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(8374).Z,width:"1131",height:"738"})),(0,n.kt)("h3",{id:"performance"},"Performance"),(0,n.kt)("p",null,"View request time and request count over a time range."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(92179).Z,width:"970",height:"533"})),(0,n.kt)("h2",{id:"analyze"},"Analyze"),(0,n.kt)("h3",{id:"request-and-response-failures"},"Request and response failures"),(0,n.kt)("h3",{id:"dependency-failures"},"Dependency failures"),(0,n.kt)("h3",{id:"source-code-exceptions"},"Source code exceptions"),(0,n.kt)("h3",{id:"current-performance"},"Current performance"),(0,n.kt)("h3",{id:"slowest-resources"},"Slowest resources"),(0,n.kt)("h3",{id:"slowest-dependencies"},"Slowest dependencies"),(0,n.kt)("h2",{id:"investigate-a-failure"},"Investigate a failure"),(0,n.kt)("h2",{id:"investigate-performance"},"Investigate performance"))}m.isMDXComponent=!0},54891:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/azure-portal-api-management-app-insights-58e9d7a3947c49878d750d5d42633f8d.png"},30578:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/azure-portal-static-web-app-failures-list-cb8a62e83499da600c6f8f759bb82d0a.png"},92179:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/azure-portal-static-web-app-operations-performance-list-bcbe56f1e24190e75a1e267377849604.png"},8374:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/azure-static-web-app-managed-function-exception-4631fa87cf440dc62f86d3c2d6f6b104.png"},95664:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/azure-static-web-app-managed-function-insights-overview-fba0dfcdb563c7995763b1f1dc2ba74b.png"}}]);