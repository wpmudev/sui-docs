/*! For license information please see sui-react-packages-components-footer-stories-footer-stories.cf78bf20.iframe.bundle.js.LICENSE.txt */
(self.webpackChunksui_docs=self.webpackChunksui_docs||[]).push([[1078],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise(((resolve,reject)=>{__webpack_require__.e(9433).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hw:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hw,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-links/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{kZ:()=>_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.kZ});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs");__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs")},"./node_modules/@storybook/addon-links/dist/react/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>react_default});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs"),__webpack_require__("./node_modules/react/index.js")),react_default=class extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind,title=kind,story,name=story}=this.props;if(title&&name){let href=await(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.ew)(title,name);this.setState({href})}},this.handleClick=()=>{let{kind,title=kind,story,name=story}=this.props;title&&name&&(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.c4)({title,name})}}static{this.defaultProps={children:void 0}}componentDidMount(){this.updateHref()}componentDidUpdate(prevProps){let{kind,title,story,name}=this.props;(prevProps.kind!==kind||prevProps.story!==story||prevProps.title!==title||prevProps.name!==name)&&this.updateHref()}render(){let{kind,title=kind,story,name=story,children,...rest}=this.props,{href}=this.state;return react__WEBPACK_IMPORTED_MODULE_2__.createElement("a",{href,onClick:e=>((e,cb=(_e=>{}))=>{(e=>!(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))(e)&&(e.preventDefault(),cb(e))})(e,this.handleClick),...rest},children)}}},"./packages/sui-react/packages/components/footer/stories/footer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Footer:()=>footer_stories_Footer,__namedExportsOrder:()=>__namedExportsOrder,default:()=>footer_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),components=__webpack_require__("./packages/sui-icons/src/components/index.ts");const logo_namespaceObject=__webpack_require__.p+"static/media/logo.499802c8.svg";var socialIcons={facebook:components.Facebook,instagram:components.Instagram,twitter:components.Twitter},Footer=function(_a){var _b,_c,links=_a.links,socialLinks=_a.socialLinks,renderBlocks=_a.renderBlocks,blocks=[];renderBlocks&&(blocks=renderBlocks((0,jsx_runtime.jsx)("span",{children:"Made with ︎ by WPMU DEV"})));return(0,jsx_runtime.jsxs)("div",{className:"sui-footer",children:[blocks.length>0&&(0,jsx_runtime.jsx)("div",{className:"sui-footer__group sui-footer__group--credits".concat(1===blocks.length?" sui-footer__group--center":""),children:null===(_b=blocks||[])||void 0===_b?void 0:_b.map((function(block,index){return(0,jsx_runtime.jsx)("div",{className:"sui-footer__block",children:block},index)}))}),(0,jsx_runtime.jsxs)("div",{className:"sui-footer__group sui-footer__group--links",children:[(0,jsx_runtime.jsx)("div",{className:"sui-footer__block",children:(0,jsx_runtime.jsx)("a",{href:"#",target:"_blank",rel:"nofollow",children:(0,jsx_runtime.jsx)("img",{src:logo_namespaceObject,className:"sui-footer__block--logo",alt:"WPMU DEV"})})}),(0,jsx_runtime.jsx)("div",{className:"sui-footer__block sui-footer__block--pages",children:(0,jsx_runtime.jsx)("ul",{className:"sui-footer__links",children:null===(_c=null!=links?links:[])||void 0===_c?void 0:_c.map((function(list,index){return(0,jsx_runtime.jsx)("li",{className:"sui-footer__links--item",children:(0,jsx_runtime.jsx)("a",{href:list.url,children:list.title})},index)}))})}),(0,jsx_runtime.jsx)("div",{className:"sui-footer__block",children:(null==socialLinks?void 0:socialLinks.length)>0&&(0,jsx_runtime.jsx)("ul",{className:"sui-footer__links sui-footer__links--social",children:null==socialLinks?void 0:socialLinks.map((function(socialLink,index){var SocialIcon=socialIcons[null==socialLink?void 0:socialLink.type];return(0,jsx_runtime.jsx)("li",{className:"sui-footer__links--item",children:(0,jsx_runtime.jsx)("a",{href:socialLink.url,target:"_blank",rel:"noopener noreferrer",children:(0,jsx_runtime.jsx)(SocialIcon,{size:"sm"})})},index)}))})})]})]})},lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),storybook=__webpack_require__("./packages/storybook/lib/storybook.ts"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsx)(dist.E$,{children:(0,jsx_runtime.jsxs)(storybook.$0,{title:"Shhh... Not much to see here at the moment, but stay tuned!",contained:!0,children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Quiet for now, but get ready! Exciting stuff is coming. Our developers are working really hard behind the scenes to make it happen. Stay curious and excited! 🌟👷"})}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"In the meantime, feel free to explore our demo page for this component."})})]})})}const footer_stories={title:"SUI/Components/Collections/Footer",component:Footer,parameters:{layout:"fullscreen",docs:{page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}};var footer_stories_Footer=function(_a){var example=_a.example;return(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsx)(Footer,{renderBlocks:"free"===example?function(){return[(0,jsx_runtime.jsxs)(react.Fragment,{children:["Check our"," ",(0,jsx_runtime.jsx)("a",{href:"#",target:"_blank",rel:"nofollow",children:"All in One WordPress Toolkit"})]},0),(0,jsx_runtime.jsxs)(react.Fragment,{children:["To get the most out of the plugin,"," ",(0,jsx_runtime.jsx)("a",{href:"#",target:"_blank",rel:"nofollow",children:"see the Help section"})]},2)]}:function(content){return[content]},socialLinks:[{url:"#",type:"facebook"},{url:"#",type:"instagram"},{url:"#",type:"twitter"}],links:[{url:"#",title:"Free Plugins"},{url:"#",title:"Membership"},{url:"#",title:"Roadmap"},{url:"#",title:"Support"},{url:"#",title:"Community"},{url:"#",title:"The Hub"},{url:"#",title:"Terms of Service"},{url:"#",title:"Privacy Policy"}]})})})};footer_stories_Footer.args={example:"free"},footer_stories_Footer.argTypes={example:{name:"Example",options:["free","pro"],control:{type:"select",labels:{free:"Free",pro:"Pro"}}}};const __namedExportsOrder=["Footer"]},"./packages/sui-react/packages/utils/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{CI:()=>condContent,F3:()=>chunkArray,HD:()=>isString,Jw:()=>handleOnKeyDown,Kn:()=>isObject,c7:()=>capitalizeText,h4:()=>PluginsIcons,hj:()=>isNumber,jn:()=>isBoolean,kJ:()=>isArray,mf:()=>isFunction,o8:()=>isUndefined,uY:()=>generateCN,wW:()=>handleEventDefault,xb:()=>isEmpty});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),generateCN=function(base,variants,extraClassNames){void 0===variants&&(variants={}),void 0===extraClassNames&&(extraClassNames="");var classes=Object.keys(variants).map((function(attr){var _a;return(_a={})["".concat(base,"--").concat(attr)]=!!variants[attr],_a}));return classnames__WEBPACK_IMPORTED_MODULE_0___default()(base,classes,extraClassNames)},condContent=function(condition,content,fallback){return void 0===content&&(content=null),void 0===fallback&&(fallback=void 0),isNull(content)&&(content=condition),condition?content:fallback},isNull=function(value){return null===value},isUndefined=function(value){return void 0===value},isObject=function(value){return"object"==typeof value&&!Array.isArray(value)},isArray=function(value){return Array.isArray(value)},isBoolean=function(value){return"boolean"==typeof value},isNumber=function(value){return"number"==typeof value||!Number.isNaN(value)},isFunction=function(value){return"function"==typeof value},isString=function(value){return"string"==typeof value},isEmpty=function(value){return""===value},capitalizeText=function(string){var _a;return(null===(_a=null==string?void 0:string.charAt(0))||void 0===_a?void 0:_a.toUpperCase())+(null==string?void 0:string.slice(1))},handleOnKeyDown=function(event,callback){"Enter"!==event.key&&" "!==event.key||callback&&callback(event)},handleEventDefault=function(e,stopPropagation,preventDefault){stopPropagation&&(null==e||e.stopPropagation()),preventDefault&&(null==e||e.preventDefault())},PluginsIcons={smush:{bg:"#2dc4e0",color:"#FFF",icon:"PluginSmush"},defender:{bg:"#282a2c",color:"#FFF",icon:"PluginDefender"},snapshot:{bg:"#1a325e",color:"#FFF",icon:"PluginSnapshot"},hummingbird:{bg:"#ff8e3c",color:"#FFF",icon:"PluginHummingbird"},forminator:{bg:"#1f2852",color:"#FFF",icon:"PluginForminator"},beehive:{bg:"#013aa9",color:"#FFF",icon:"PluginBeehive"},hustle:{bg:"#1a1a1a",color:"#FFF",icon:"PluginHustle"},smartcrawl:{bg:"#de240a",color:"#FFF",icon:"PluginSmartCrawl"},shipper:{bg:"#7b5499",color:"#FFF",icon:"PluginShipper"},branda:{bg:"#ff8184",color:"#FFF",icon:"PluginBranda"}},chunkArray=function(arr,size){for(var chunkedArray=[],i=0;i<arr.length;i+=size){var chunk=arr.slice(i,i+size);chunkedArray.push(chunk)}return chunkedArray}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);