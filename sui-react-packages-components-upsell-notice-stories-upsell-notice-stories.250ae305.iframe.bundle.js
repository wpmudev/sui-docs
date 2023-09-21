/*! For license information please see sui-react-packages-components-upsell-notice-stories-upsell-notice-stories.250ae305.iframe.bundle.js.LICENSE.txt */
(self.webpackChunksui_docs=self.webpackChunksui_docs||[]).push([[2493],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/sui-react/packages/components/upsell-notice/stories/upsell-notice.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{UpsellNotice:()=>upsell_notice_stories_UpsellNotice,__namedExportsOrder:()=>__namedExportsOrder,default:()=>upsell_notice_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/sui-react/packages/utils/src/index.ts")),components=__webpack_require__("./packages/sui-icons/src/components/index.ts"),tag_src=__webpack_require__("./packages/sui-react/packages/components/tag/src/index.ts"),UpsellNotice=function(_a){var _b,title=_a.title,_c=_a.tagTitle,tagTitle=void 0===_c?"":_c,_d=_a.description,description=void 0===_d?"":_d,_e=_a.variation,variation=void 0===_e?"hummingbird":_e,_f=_a.features,features=void 0===_f?[]:_f,_g=_a.actions,actions=void 0===_g?null:_g,classNames=(0,src.uY)("sui-upsell-notice",((_b={})[variation]=!(0,src.xb)(null!=variation?variation:""),_b));return(0,jsx_runtime.jsxs)("div",{className:classNames,children:[(0,jsx_runtime.jsx)("div",{className:"sui-upsell-notice__header",children:(0,jsx_runtime.jsxs)("h3",{className:"sui-upsell-notice__header-title sui-heading--h5",children:[null!=title?title:"Title of Upsell",!(0,src.xb)(null!=tagTitle?tagTitle:"")&&(0,jsx_runtime.jsx)(tag_src.V,{design:"outlined",isSmall:!0,color:"black",children:tagTitle})]})}),(0,jsx_runtime.jsxs)("div",{className:"sui-upsell-notice__body",children:[(0,jsx_runtime.jsx)("p",{children:description}),(null==features?void 0:features.length)>0&&(0,jsx_runtime.jsx)("ul",{className:"sui-upsell-notice__features",children:null==features?void 0:features.map((function(feature,index){return(0,jsx_runtime.jsxs)("li",{className:"sui-upsell-notice__features-item",children:[(0,jsx_runtime.jsx)(components.Check,{size:"sm",className:"sui-upsell-notice__features-item-icon"}),(0,jsx_runtime.jsx)("span",{children:feature})]},index)}))})]}),actions&&(0,jsx_runtime.jsx)("div",{className:"sui-upsell-notice__footer",children:actions})]})};UpsellNotice.displayName="UpsellNoticeProps";var button_src=__webpack_require__("./packages/sui-react/packages/components/button/src/index.ts"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){return(0,jsx_runtime.jsx)(dist.E$,{})}var _a,_b,_c,__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const upsell_notice_stories={title:"SUI/Components/Collections/Upsell Notice",component:UpsellNotice,parameters:{layout:"fullscreen",docs:{page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent()}}}};var upsell_notice_stories_UpsellNotice=function(_a){_a.example;var props=__rest(_a,["example"]),actions=[(0,jsx_runtime.jsx)(button_src.zx,{appearance:"primary",color:"hub"===(null==props?void 0:props.variation)?"blue":"black",isSmall:!0,children:"Primary"},0),(0,jsx_runtime.jsx)(button_src.zx,{appearance:"tertiary",color:"black",isSmall:!0,children:"Learn more"},1)];return(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(UpsellNotice,__assign({},props,{actions,features:["Performance Test Reporting","Uptime monitoring","Enhanced file minification with CDN","Database Cleanup notifications"]}))})})})};upsell_notice_stories_UpsellNotice.args={title:"Upsell notice",tagTitle:"PRO",variation:"hummingbird",description:"Get our full WordPress performance optimization suite with Hummingbird Pro and the additional benefits of WPMU DEV membership. Get yours today now Lorem ipsum Lorem Ipsum."},upsell_notice_stories_UpsellNotice.argTypes={title:{name:"Title",control:{type:"text"}},tagTitle:{name:"Tag Title",control:{type:"text"}},description:{name:"Description",control:{type:"text"}},variation:{name:"Variation",options:["hummingbird","smush","snapshot","smartcrawl","shipper","ivt","hustle","forminator","defender","branda","beehive","hub"],control:{type:"select",labels:{hummingbird:"Hummingbird",smush:"Smush",snapshot:"Snapshot",smartcrawl:"Smartcrawl",shipper:"Shipper",ivt:"Ivt",hustle:"Hustle",forminator:"Forminator",defender:"Defender",branda:"Branda",beehive:"Beehive",hub:"Hub"}}}},upsell_notice_stories_UpsellNotice.parameters=__assign(__assign({},upsell_notice_stories_UpsellNotice.parameters),{docs:__assign(__assign({},null===(_a=upsell_notice_stories_UpsellNotice.parameters)||void 0===_a?void 0:_a.docs),{source:__assign({originalSource:'({\n  example,\n  ...props\n}) => {\n  const actions = [<Button key={0} appearance="primary" color={"hub" === props?.variation ? "blue" : "black"} isSmall={true}>\n            Primary\n        </Button>, <Button key={1} appearance="tertiary" color="black" isSmall={true}>\n            Learn more\n        </Button>];\n  return <div className="sui-layout sui-layout--horizontal sui-layout--vertical">\n            <div className="sui-layout__content">\n                <div>\n                    <SuiUpsellNotice {...props} actions={actions} features={["Performance Test Reporting", "Uptime monitoring", "Enhanced file minification with CDN", "Database Cleanup notifications"]} />\n                </div>\n            </div>\n        </div>;\n}'},null===(_c=null===(_b=upsell_notice_stories_UpsellNotice.parameters)||void 0===_b?void 0:_b.docs)||void 0===_c?void 0:_c.source)})});const __namedExportsOrder=["UpsellNotice"]},"./packages/sui-react/packages/components/tag/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{V:()=>Tag});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/sui-react/packages/utils/src/index.ts")),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},Tag=function(_a){var _b,design=_a.design,color=_a.color,style=_a.style,className=_a.className,_c=_a.isSmall,isSmall=void 0!==_c&&_c,_d=_a.isUppercase,isUppercase=void 0!==_d&&_d,children=_a.children,props=__rest(_a,["design","color","style","className","isSmall","isUppercase","children"]),hasDesign="outlined"===design,hasColor=!(0,src.o8)(color)&&!(0,src.xb)(color),hasStyle=["multiline","truncated"].includes(style),classNames=(0,src.uY)("sui-tag",((_b={})["".concat(design,"-").concat(color)]=hasDesign&&hasColor,_b[design]=hasDesign&&!hasColor,_b[color]=!hasDesign&&hasColor,_b[style]=hasStyle,_b.sm=isSmall,_b.uppercase=isUppercase,_b),className);return(0,jsx_runtime.jsx)("span",__assign({className:classNames},props,{children:(0,jsx_runtime.jsx)("span",{className:"sui-tag__label",children})}))}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);