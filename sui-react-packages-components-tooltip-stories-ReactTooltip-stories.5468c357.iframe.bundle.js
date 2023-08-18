/*! For license information please see sui-react-packages-components-tooltip-stories-ReactTooltip-stories.5468c357.iframe.bundle.js.LICENSE.txt */
(self.webpackChunksui_docs=self.webpackChunksui_docs||[]).push([[4836],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hw:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hw,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-links/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{kZ:()=>_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.kZ});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs");__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs")},"./node_modules/@storybook/addon-links/dist/react/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>react_default});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs"),__webpack_require__("./node_modules/react/index.js")),react_default=class extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind,title=kind,story,name=story}=this.props;if(title&&name){let href=await(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.ew)(title,name);this.setState({href})}},this.handleClick=()=>{let{kind,title=kind,story,name=story}=this.props;title&&name&&(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.c4)({title,name})}}static{this.defaultProps={children:void 0}}componentDidMount(){this.updateHref()}componentDidUpdate(prevProps){let{kind,title,story,name}=this.props;(prevProps.kind!==kind||prevProps.story!==story||prevProps.title!==title||prevProps.name!==name)&&this.updateHref()}render(){let{kind,title=kind,story,name=story,children,...rest}=this.props,{href}=this.state;return react__WEBPACK_IMPORTED_MODULE_2__.createElement("a",{href,onClick:e=>((e,cb=(_e=>{}))=>{(e=>!(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))(e)&&(e.preventDefault(),cb(e))})(e,this.handleClick),...rest},children)}}},"./packages/sui-react/packages/components/tooltip/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{u:()=>Tooltip});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/sui-react/packages/components/button/src/index.ts"),utils_src=__webpack_require__("./packages/sui-react/packages/utils/src/index.ts"),hooks_src=__webpack_require__("./packages/sui-react/packages/hooks/src/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},TagNames={button:src.zx,text:"span",icon:function(_a){var _b,_c=_a.name,name=void 0===_c?"":_c,_d=_a.size,size=void 0===_d?"md":_d;if(!(!(0,utils_src.o8)(name)&&!(0,utils_src.xb)(null!=name?name:"")))throw new Error('Required parameter is empty. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe "name" parameter in the icon element is required and must not be empty.\n\n');var classNames=(0,utils_src.uY)("suicons",((_b={})[name]=!(0,utils_src.xb)(name),_b[size]=!0,_b));return(0,jsx_runtime.jsx)("span",{className:"sui-tooltip__icon","aria-hidden":"true",children:(0,jsx_runtime.jsx)("span",{className:classNames})})}},Tooltip=function(_a){var _b,_c,label=_a.label,_d=_a.type,type=void 0===_d?"button":_d,_f=(_a.iconName,_a.className,_a.position),position=void 0===_f?"top":_f,customWidth=_a.customWidth,customMobileWidth=_a.customMobileWidth,children=_a.children,_g=_a.onClick,onClick=void 0===_g?function(){}:_g,_h=_a.onMouseEnter,onMouseEnter=void 0===_h?function(){}:_h,_j=_a.onMouseLeave,onMouseLeave=void 0===_j?function(){}:_j,_k=_a.onFocus,onFocus=void 0===_k?function(){}:_k,_l=_a.onBlur,onBlur=void 0===_l?function(){}:_l,props=__rest(_a,["label","type","iconName","className","position","customWidth","customMobileWidth","children","onClick","onMouseEnter","onMouseLeave","onFocus","onBlur"]),_m=(0,hooks_src.X2)({onMouseEnter,onMouseLeave,onFocus,onBlur}),isHovered=_m[0],isFocused=_m[1],methods=_m[2],toggleHover=_m[3],attrs={},classNames=(0,utils_src.uY)("sui-tooltip",((_b={show:isHovered,focus:isFocused,"custom-width":!!customWidth})[position]=!0,_b)),TagName=null!==(_c=null==TagNames?void 0:TagNames[type])&&void 0!==_c?_c:"";(customWidth||customMobileWidth)&&(attrs.style=__assign(__assign({},customWidth&&{"--tooltip-width":"".concat(customWidth,"px")}),customMobileWidth&&{"--tooltip-width-mobile":"".concat(customMobileWidth,"px")}));var escFunction=(0,react.useCallback)((function(event){"keyCode"in event&&"Escape"===event.code&&isHovered&&toggleHover(!1)}),[isHovered,toggleHover]);(0,react.useEffect)((function(){return document.addEventListener("keydown",escFunction),function(){document.removeEventListener("keydown",escFunction)}}),[escFunction]);var onClickCallback=(0,react.useCallback)((function(){onClick&&onClick()}),[onClick]);return(0,jsx_runtime.jsxs)("div",__assign({className:classNames},methods,{children:[(0,jsx_runtime.jsx)(TagName,__assign({},props,{onClick:onClickCallback,children:label})),!!children&&(0,jsx_runtime.jsx)("span",__assign({className:"sui-tooltip__content",role:"tooltip","aria-live":"polite","aria-hidden":!isHovered,tabIndex:isHovered?0:-1},attrs,{children}))]}))}},"./packages/sui-react/packages/components/tooltip/stories/ReactTooltip.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Tooltip:()=>Tooltip,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ReactTooltip_stories});__webpack_require__("./node_modules/react/index.js");var src=__webpack_require__("./packages/sui-react/packages/components/tooltip/src/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),storybook=(__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),__webpack_require__("./packages/storybook/lib/storybook.ts")),blocks_dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const anatomy_namespaceObject=__webpack_require__.p+"static/media/anatomy.93647510.png",spacing_namespaceObject=__webpack_require__.p+"static/media/spacing.cd59ba5c.png";function _createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(storybook.$0,{contained:!0,border:!0,style:{paddingTop:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"A tooltip is displayed to provide additional information about specific\nelement when the user hovers or focuses on them."})}),(0,jsx_runtime.jsx)("p",{children:"Tooltips:"}),(0,jsx_runtime.jsxs)(storybook.aV,{children:[(0,jsx_runtime.jsx)("span",{label:"Provides additional information about specific element."}),(0,jsx_runtime.jsx)("span",{label:"Act as a information for call to action (CTA)."})]})]}),"\n",(0,jsx_runtime.jsx)(storybook.$0,{title:"Anatomy",contained:!0,border:!0,children:(0,jsx_runtime.jsxs)(storybook.X2,{gutter:"sm",children:[(0,jsx_runtime.jsx)(storybook.JX,{size:"3",children:(0,jsx_runtime.jsx)("img",{src:anatomy_namespaceObject,alt:"Tooltip anatomy",style:{marginBottom:20}})}),(0,jsx_runtime.jsx)(storybook.JX,{size:"3",children:(0,jsx_runtime.jsx)("img",{src:spacing_namespaceObject,alt:"Tooltip anatomy",style:{marginBottom:20}})})]})})]})}const TabUsage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function TabCode_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(storybook.$0,{contained:!0,style:{paddingTop:0,paddingBottom:0},children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Install the ",(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"Tooltip"})," package as an individual\ncomponent or follow the Overview page instructions to get the complete\nSUI Components package."]})})}),"\n",(0,jsx_runtime.jsxs)(storybook.$0,{title:"Props",border:!0,children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"For tooltip we have the following props and we can pass additional\nbutton component props as well:"})}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"label",tag:"string",small:!0},style:{paddingTop:10,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Label for toltip being used as button, link or text."})}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"href",tag:"string",small:!0},style:{paddingTop:10,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Provides a url for buttons being used as a link."})}),(0,jsx_runtime.jsxs)(storybook.$0,{title:{content:"type",tag:"string",small:!0},style:{paddingTop:10,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Whether the type of tooltip is button, link or text. By default the\ntype is set button."})}),(0,jsx_runtime.jsx)("p",{children:"Allowed options:"}),(0,jsx_runtime.jsxs)(storybook.aV,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"button"})})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"link"})})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"text"})})})]})]}),(0,jsx_runtime.jsxs)(storybook.$0,{title:{content:"position",tag:"string",small:!0},style:{paddingTop:10,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"A tooltip can be placed at the top, bottom, left, or right of the\nelement."})}),(0,jsx_runtime.jsx)("p",{children:"Allowed options:"}),(0,jsx_runtime.jsxs)(storybook.aV,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"top"}),": Tooltip will be aligned to the top center of the element."]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"top-left"}),": Tooltip will be aligned to the top left of the element."]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"top-right"}),": Tooltip will be aligned to the top right of the element."]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"bottom"}),": Tooltip will be aligned to the bottom center of the element."]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"bottom-left"}),": Tooltip will be aligned to the bottom left of the element."]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"bottom-right"}),": Tooltip will be aligned to the bottom right of the element."]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"left"}),": Tooltip will be aligned to the left center of the element."]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"left-top"}),": Tooltip will be aligned to the left top of the element."]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"left-bottom"}),": Tooltip will be aligned to the left bottom of the element."]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"right"}),": Tooltip will be aligned to the right center of the element."]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"right-top"}),": Tooltip will be aligned to the right top of the element."]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"right-bottom"}),": Tooltip will be aligned to the right bottom of the element."]})})]})]}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"className",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Add a class name to the tooltip."})}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"customWidth",tag:"number",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"There are times when you need a to set a width of the tooltip to\nmake the content overflow appear on the next line."})})}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"customMobileWidth",tag:"number",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"There are times when you need a to set a width of the tooltip to\nmake the content overflow appear on the next line. It will only be\napplied on the mobile view."})})})]})]})}const TabCode=function TabCode_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabCode_createMdxContent,props)})):TabCode_createMdxContent(props)};var dedent=__webpack_require__("./node_modules/dedent/dist/dedent.js"),dedent_default=__webpack_require__.n(dedent);const sampleCode=dedent_default()`
import React from 'react';\n
import { Tooltip } from '@wpmudev/sui-react';\n
const Example() => {
	return <Tooltip label="Button" appearance="primary" color="black">Button default</Tooltip>;
}\n
export default Example;
`,overflowSampleCode=dedent_default()`
import React from 'react';\n
import { Tooltip } from '@wpmudev/sui-react';\n
const Example() => {
	return <Tooltip label="Button" appearance="primary" color="black" customWidth={200}>When the content is long, it will be wrapped.</Tooltip>;
}\n
export default Example;
`;function TabExamples_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(storybook.$0,{contained:!0,style:{paddingTop:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Below is the default form of a button, used for most cases; it is not\nimpactful enough to represent the primary action in a container but\nnecessary in some scenarios."})}),(0,jsx_runtime.jsx)(storybook.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)("div",{style:{padding:"40px"},children:(0,jsx_runtime.jsx)(src.u,{label:"Tooltip",appearance:"primary",position:"top",color:"black",children:(0,jsx_runtime.jsx)(_components.p,{children:"Default tooltip"})})})}),(0,jsx_runtime.jsx)(storybook.pP,{language:"js",children:sampleCode})]}),"\n",(0,jsx_runtime.jsxs)(storybook.$0,{title:"Overflow",contained:!0,style:{paddingTop:0},children:[(0,jsx_runtime.jsx)("p",{children:"If the tooltip content exceeds the maximum width, it will be wrapped."}),(0,jsx_runtime.jsx)(storybook.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)("div",{style:{padding:"40px"},children:(0,jsx_runtime.jsx)(src.u,{label:"Overflow",appearance:"primary",position:"right",color:"black",customWidth:200,children:(0,jsx_runtime.jsx)(_components.p,{children:"When the content is long, it will be wrapped."})})})}),(0,jsx_runtime.jsx)(storybook.pP,{language:"js",children:overflowSampleCode})]})]})}const TabExamples=function TabExamples_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabExamples_createMdxContent,props)})):TabExamples_createMdxContent(props)};function ReactTooltip_createMdxContent(props){return storybook.T3||_missingMdxReference("Page",!1),storybook.T3.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsx)(blocks_dist.E$,{children:(0,jsx_runtime.jsxs)(storybook.T3.Tabs,{title:"Tooltip",subtitle:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Use tooltips to display or provide additional information about them."}),status:"draft",children:[(0,jsx_runtime.jsx)("div",{id:"usage",label:"Usage",children:(0,jsx_runtime.jsx)(TabUsage,{})}),(0,jsx_runtime.jsx)("div",{id:"code",label:"Code",children:(0,jsx_runtime.jsx)(TabCode,{})}),(0,jsx_runtime.jsx)("div",{id:"examples",label:"Examples",children:(0,jsx_runtime.jsx)(TabExamples,{})})]})})}const ReactTooltip=function ReactTooltip_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(ReactTooltip_createMdxContent,props)})):ReactTooltip_createMdxContent()};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const ReactTooltip_stories={title:"SUI/Components/Core/Tooltip",component:src.u,parameters:{layout:"fullscreen",docs:{page:ReactTooltip}}},Tooltip=({example,label,href,tootlipText,target,appearance,position,customWidth,customMobileWidth,color})=>{const boxStyles={padding:20,borderRadius:4,background:"white"!==color?"#fff":"#333"},set={};set.content=tootlipText;return(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsxs)("div",{style:boxStyles,children:["button"===example&&(0,jsx_runtime.jsx)(src.u,{label,appearance:"primary",color:"black",position,customWidth,customMobileWidth,onClick:()=>console.log("Button Clicked."),children:set.content}),"text"===example&&(0,jsx_runtime.jsx)(src.u,{type:"text",label,position,customWidth,customMobileWidth,children:set.content}),"link"===example&&(0,jsx_runtime.jsx)(src.u,{href,target,label,appearance:"primary",color:"black",position,customWidth,customMobileWidth,children:set.content}),"icon"===example&&(0,jsx_runtime.jsx)(src.u,{label,type:"icon",name:"info",position,customWidth,customMobileWidth,children:set.content})]})})})};Tooltip.displayName="Tooltip",Tooltip.args={example:"button",tootlipText:"Tooltip text",href:"",target:"_blank",label:"Button",position:"top",customWidth:"",customMobileWidth:""},Tooltip.argTypes={example:{name:"Example",options:["link","button","text","icon"],control:{type:"select",labels:{link:"Example: Link",button:"Example: Button",text:"Example: Text",icon:"Example: Icon"}}},tootlipText:{name:"Tooltip Text"},label:{name:"Label",control:{type:"text"}},href:{name:"Link",control:{type:"text"},if:{arg:"example",eq:"link"}},target:{name:"Target",options:["_self","_blank"],control:{type:"select"},if:{arg:"example",eq:"link"}},position:{name:"Position",options:["top","top-left","top-right","bottom","bottom-left","bottom-right","left","left-top","left-bottom","right","right-top","right-bottom"],control:{type:"select",labels:{top:"Top","top-left":"Top Left","top-right":"Top Right",bottom:"Bottom","bottom-left":"Bottom Left","bottom-right":"Bottom Right",left:"Left","left-top":"Left Top","left-bottom":"Left Bottom",right:"Right","right-top":"Right Top","right-bottom":"Right Bottom"}}},customWidth:{name:"Custom Width",control:{type:"number"}},customMobileWidth:{name:"Custom Width (Mobile)",control:{type:"number"}}},Tooltip.__docgenInfo={description:"",methods:[],displayName:"Tooltip"};const __namedExportsOrder=["Tooltip"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/dedent/dist/dedent.js":module=>{"use strict";module.exports=function dedent(strings){var raw=void 0;raw="string"==typeof strings?[strings]:strings.raw;for(var result="",i=0;i<raw.length;i++)result+=raw[i].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),i<(arguments.length<=1?0:arguments.length-1)&&(result+=arguments.length<=i+1?void 0:arguments[i+1]);var lines=result.split("\n"),mindent=null;return lines.forEach((function(l){var m=l.match(/^(\s+)\S+/);if(m){var indent=m[1].length;mindent=mindent?Math.min(mindent,indent):indent}})),null!==mindent&&(result=lines.map((function(l){return" "===l[0]?l.slice(mindent):l})).join("\n")),(result=result.trim()).replace(/\\n/g,"\n")}}}]);
//# sourceMappingURL=sui-react-packages-components-tooltip-stories-ReactTooltip-stories.5468c357.iframe.bundle.js.map