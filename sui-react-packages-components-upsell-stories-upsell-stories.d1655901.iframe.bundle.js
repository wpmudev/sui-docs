/*! For license information please see sui-react-packages-components-upsell-stories-upsell-stories.d1655901.iframe.bundle.js.LICENSE.txt */
(self.webpackChunksui_docs=self.webpackChunksui_docs||[]).push([[2812],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/sui-react/packages/components/upsell/stories/upsell.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Upsell:()=>upsell_stories_Upsell,__namedExportsOrder:()=>__namedExportsOrder,default:()=>upsell_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/sui-react/packages/utils/src/index.ts")),components=__webpack_require__("./packages/sui-icons/src/components/index.ts"),variationsList={hummingbird:{icon:"PluginHummingbird",title:"Hummingbird Pro",description:"Get our full WordPress performance optimization suite with Hummingbird Pro and additional benefits of WPMU DEV membership."},smush:{icon:"PluginSmush",title:"Smush Pro",description:"Max speed, no limits, everything you need to achieve peak image performance."},snapshot:{icon:"PluginSnapshot",title:"Snasphot Pro",description:"Get Snapshot Pro and get all the tools you need for Easily backup and migrate site."},smartcrawl:{icon:"PluginSmartCrawl",title:"SmartCrawl Pro",description:"Get our full WordPress Search Engine Optimization suite with SmartCrawl Pro and resolve more about the Engine Optimization."},shipper:{icon:"PluginShipper",title:"Shipper Pro",description:"Get Shipper Pro and get all the tools you need for Migrate Site."},ivt:{icon:"PluginIVT",title:"IVT Pro",description:"Get IVT Pro and get all the tools you need for Video upload on Site."},hustle:{icon:"PluginHustle",title:"Hustle Pro",description:"Get Hustle Pro and get all the tools you need for Conversion insights."},forminator:{icon:"PluginForminator",title:"Forminator Pro",description:"Get Forminator Pro and get all the tools you need to Create different style of Forms, Quizes and Email templates"},defender:{icon:"PluginDefender",title:"Defender Pro",description:"Get Defender Pro and get all the tools you need to FIx all the security issue in your site, it help to fix Malware code too."},branda:{icon:"PluginBranda",title:"Branda Pro",description:"Get Branda Pro and get all the tools you need to Secure your site."},beehive:{icon:"PluginBeehive",title:"Beehive Pro",description:"Get Beehive Pro and get all the tools you need for analytic insights."}},Upsell=function(_a){var _b,_c,_d,title=_a.title,_e=_a.description,description=void 0===_e?"":_e,size=_a.size,_f=_a.variation,variation=void 0===_f?"hummingbird":_f,_g=_a.features,features=void 0===_g?[]:_g,_h=_a.actions,actions=void 0===_h?null:_h,classNames=(0,src.uY)("sui-upsell",((_b={})[variation]=!(0,src.xb)(null!=variation?variation:""),_b[size]=!(0,src.xb)(null!=size?size:""),_b)),currentVar=variationsList[variation],Icon=null==components?void 0:components[null!==(_d=null==currentVar?void 0:currentVar.icon)&&void 0!==_d?_d:""];return(0,jsx_runtime.jsxs)("div",{className:classNames,children:[(0,jsx_runtime.jsxs)("div",{className:"sui-upsell__header",children:[Icon&&(0,jsx_runtime.jsx)("div",{className:"sui-upsell__header-icon",children:(0,jsx_runtime.jsx)("div",{className:(0,src.uY)("sui-upsell__icon",(_c={},_c[variation]=!(0,src.xb)(null!=variation?variation:""),_c)),children:(0,jsx_runtime.jsx)(Icon,{fill:"white"})})}),(0,jsx_runtime.jsx)("h3",{className:"sui-upsell__header-title sui-heading--h5",children:null!=title?title:null==currentVar?void 0:currentVar.title})]}),(0,jsx_runtime.jsxs)("div",{className:"sui-upsell__body",children:[(0,src.xb)(null!=description?description:"")?null==currentVar?void 0:currentVar.description:description,(null==features?void 0:features.length)>0&&(0,jsx_runtime.jsx)("ul",{className:"sui-upsell__features",children:null==features?void 0:features.map((function(feature,index){return(0,jsx_runtime.jsxs)("li",{className:"sui-upsell__features-item",children:[(0,jsx_runtime.jsx)(components.Check,{}),(0,jsx_runtime.jsx)("span",{children:feature})]},index)}))})]}),actions&&(0,jsx_runtime.jsx)("div",{className:"sui-upsell__footer",children:actions})]})};Upsell.displayName="Upsell";var button_src=__webpack_require__("./packages/sui-react/packages/components/button/src/index.ts"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){return(0,jsx_runtime.jsx)(dist.E$,{})}var _a,_b,_c,__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const upsell_stories={title:"SUI/Components/Collections/Upsell",component:Upsell,parameters:{layout:"fullscreen",docs:{page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent()}}}};var upsell_stories_Upsell=function(_a){_a.example;var props=__rest(_a,["example"]),actions=[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(button_src.zx,{appearance:"primary",color:"black",isSmall:!0,children:"Upgrade now"})},0),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(button_src.zx,{href:"#",target:"_blank",appearance:"tertiary",color:"black",isSmall:!0,children:"Learn more"})},1)];return(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Upsell,__assign({},props,{actions,features:["Performance Test Reporting","Uptime monitoring","Enhanced file minification with CDN","Database Cleanup notifications"]}))})})})};upsell_stories_Upsell.args={description:(0,jsx_runtime.jsx)("p",{children:"Get our full WordPress performance optimization suite with Hummingbird Pro and the additional benefits of WPMU DEV membership. Get yours today now Lorem ipsum Lorem Ipsum."}),variation:"hummingbird",size:"sm"},upsell_stories_Upsell.argTypes={title:{name:"Title",control:{type:"text"}},description:{name:"Description"},variation:{name:"Variation",options:["hummingbird","smush","snapshot","smartcrawl","shipper","ivt","hustle","forminator","defender","branda","beehive"],control:{type:"select",labels:{hummingbird:"Hummingbird",smush:"Smush",snapshot:"Snapshot",smartcrawl:"Smartcrawl",shipper:"Shipper",ivt:"Ivt",hustle:"Hustle",forminator:"Forminator",defender:"Defender",branda:"Branda",beehive:"Beehive"}}},size:{name:"Size",options:["sm","lg"],control:{type:"select",labels:{sm:"Small",lg:"Large"}}}},upsell_stories_Upsell.parameters=__assign(__assign({},upsell_stories_Upsell.parameters),{docs:__assign(__assign({},null===(_a=upsell_stories_Upsell.parameters)||void 0===_a?void 0:_a.docs),{source:__assign({originalSource:'({\n  example,\n  ...props\n}) => {\n  const actions = [<div key={0}>\n            <Button appearance="primary" color="black" isSmall={true}>\n                Upgrade now\n            </Button>\n        </div>, <div key={1}>\n            <Button href="#" target="_blank" appearance="tertiary" color="black" isSmall={true}>\n                Learn more\n            </Button>\n        </div>];\n  return <div className="sui-layout sui-layout--horizontal sui-layout--vertical">\n            <div className="sui-layout__content">\n                <div>\n                    <SuiUpsell {...props} actions={actions} features={["Performance Test Reporting", "Uptime monitoring", "Enhanced file minification with CDN", "Database Cleanup notifications"]} />\n                </div>\n            </div>\n        </div>;\n}'},null===(_c=null===(_b=upsell_stories_Upsell.parameters)||void 0===_b?void 0:_b.docs)||void 0===_c?void 0:_c.source)})});const __namedExportsOrder=["Upsell"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);