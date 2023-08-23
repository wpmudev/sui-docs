/*! For license information please see sui-react-packages-components-textarea-stories-ReactTextarea-stories.dd683c65.iframe.bundle.js.LICENSE.txt */
(self.webpackChunksui_docs=self.webpackChunksui_docs||[]).push([[8762],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise(((resolve,reject)=>{__webpack_require__.e(9433).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hw:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hw,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-links/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{kZ:()=>_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.kZ});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs");__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs")},"./node_modules/@storybook/addon-links/dist/react/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>react_default});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs"),__webpack_require__("./node_modules/react/index.js")),react_default=class extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind,title=kind,story,name=story}=this.props;if(title&&name){let href=await(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.ew)(title,name);this.setState({href})}},this.handleClick=()=>{let{kind,title=kind,story,name=story}=this.props;title&&name&&(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.c4)({title,name})}}static{this.defaultProps={children:void 0}}componentDidMount(){this.updateHref()}componentDidUpdate(prevProps){let{kind,title,story,name}=this.props;(prevProps.kind!==kind||prevProps.story!==story||prevProps.title!==title||prevProps.name!==name)&&this.updateHref()}render(){let{kind,title=kind,story,name=story,children,...rest}=this.props,{href}=this.state;return react__WEBPACK_IMPORTED_MODULE_2__.createElement("a",{href,onClick:e=>((e,cb=(_e=>{}))=>{(e=>!(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))(e)&&(e.preventDefault(),cb(e))})(e,this.handleClick),...rest},children)}}},"./packages/sui-react/packages/hooks/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{p4:()=>useDetectRTL,Y9:()=>useDragAndDrop,X2:()=>useInteraction,rw:()=>useOuterClick,vI:()=>usePortal,GT:()=>useValidateProps});var react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/sui-react/packages/utils/src/index.ts"),useInteraction=function(methods){var _a=(0,react.useState)(!1),isHovered=_a[0],setIsHovered=_a[1],_b=(0,react.useState)(!1),isFocused=_b[0],setIsFocused=_b[1],_c=methods,onMouseEnter=_c.onMouseEnter,onMouseLeave=_c.onMouseLeave,onMouseDownCapture=_c.onMouseDownCapture,onMouseUpCapture=_c.onMouseUpCapture,onFocus=_c.onFocus,onBlur=_c.onBlur,onBlurCapture=_c.onBlurCapture,toggleHover=(0,react.useCallback)((function(state,event,callback){void 0===event&&(event=null),void 0===callback&&(callback=function(e){}),setIsHovered(state),(0,src.mf)(callback)&&callback(event)}),[]),toggleFocus=(0,react.useCallback)((function(state,event,callback){void 0===event&&(event=null),void 0===callback&&(callback=function(e){}),setIsFocused(state),(0,src.mf)(callback)&&callback(event)}),[]),onMouseEnterCallback=(0,react.useCallback)((function(e){return toggleHover(!0,e,onMouseEnter)}),[onMouseEnter,toggleHover]),onMouseLeaveCallback=(0,react.useCallback)((function(e){return toggleHover(!1,e,onMouseLeave)}),[onMouseLeave,toggleHover]),onMouseDownCaptureCallback=(0,react.useCallback)((function(e){return toggleFocus(!1,e,onMouseDownCapture)}),[onMouseDownCapture,toggleFocus]),onMouseUpCaptureCallback=(0,react.useCallback)((function(e){return toggleFocus(!0,e,onMouseUpCapture)}),[onMouseUpCapture,toggleFocus]),onBlurCaptureCallback=(0,react.useCallback)((function(e){return toggleHover(!1,e,onBlurCapture)}),[onBlurCapture,toggleHover]),onBlurCallback=(0,react.useCallback)((function(e){return toggleFocus(!1,e,onBlur)}),[onBlur,toggleFocus]);return[isHovered,isFocused,{onMouseEnter:onMouseEnterCallback,onMouseLeave:onMouseLeaveCallback,onMouseDownCapture:onMouseDownCaptureCallback,onMouseUpCapture:onMouseUpCaptureCallback,onFocus:(0,react.useCallback)((function(e){return toggleFocus(!0,e,onFocus)}),[onFocus,toggleFocus]),onBlur:onBlurCallback,onBlurCapture:onBlurCaptureCallback},toggleHover,toggleFocus]},useOuterClick=function(ref,callback){void 0===callback&&(callback=function(){});var onPageClick=(0,react.useCallback)((function(event){(null==ref?void 0:ref.current)&&!(null==ref?void 0:ref.current.contains(event.target))&&callback()}),[callback,ref]);(0,react.useEffect)((function(){return document.addEventListener("click",onPageClick),function(){document.removeEventListener("click",onPageClick)}}))},react_dom=__webpack_require__("./node_modules/react-dom/index.js"),usePortal=function(wrapperId){var _a=(0,react.useState)(null),wrapperElement=_a[0],setWrapperElement=_a[1];wrapperId=null!=wrapperId?wrapperId:".sui-wrap",(0,react.useLayoutEffect)((function(){var el=document.querySelector(wrapperId),systemCreated=!1;return el||(systemCreated=!0,el=function(wrapperId){var wrapperElement=document.createElement("div");return wrapperElement.setAttribute("id",wrapperId),document.body.appendChild(wrapperElement),wrapperElement}(wrapperId)),setWrapperElement(el),function(){systemCreated&&(null==el?void 0:el.parentNode)&&el.parentNode.removeChild(el)}}),[wrapperId]);return[function(children){return null===wrapperElement?null:(0,react_dom.createPortal)(children,wrapperElement)}]},useValidateProps=function(_a){var _b,propsToCheck=_a.propsToCheck,component=_a.component,componentName=(null==component?void 0:component.displayName)||(null==component?void 0:component.name);null===(_b=Object.keys(propsToCheck))||void 0===_b||_b.forEach((function(propKey,index){var _a;if(!!(0,src.xb)(null!==(_a=null==propsToCheck?void 0:propsToCheck[propKey])&&void 0!==_a?_a:""))throw new Error("Empty content is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 SUI 3 React - Components: ".concat(componentName,'\n\nThe "').concat(propKey,'" argument requires some value to be passed to it.\n\n'))}))},useDragAndDrop=function(_a){var containerRef=_a.containerRef,methods=_a.methods,_b=(0,react.useState)(),node=_b[0],setNode=_b[1],_c=(0,react.useState)(!1),isDragging=_c[0],setIsDragging=_c[1];return(0,react.useEffect)((function(){setNode(null==containerRef?void 0:containerRef.current)}),[containerRef]),(0,react.useEffect)((function(){var onDragOver=function(e){e.preventDefault(),e.stopPropagation(),setIsDragging(!0),(null==methods?void 0:methods.onDragOver)&&(null==methods||methods.onDragOver(e))},onDrop=function(e){e.preventDefault(),e.stopPropagation(),setIsDragging(!1),(null==methods?void 0:methods.onDrop)&&(null==methods||methods.onDrop(e))};return null==node||node.addEventListener("dragover",onDragOver,!1),null==node||node.addEventListener("drop",onDrop,!1),function(){null==node||node.removeEventListener("dragover",onDragOver,!1),null==node||node.removeEventListener("drop",onDrop,!1)}}),[containerRef,node,methods]),[isDragging]},useDetectRTL=function(){var _a=(0,react.useState)(!1),isRTL=_a[0],setIsRTL=_a[1];return(0,react.useEffect)((function(){var updateRTL=function(){var isDocumentRTL="rtl"===document.documentElement.getAttribute("dir");setIsRTL(isDocumentRTL)};updateRTL();var mutationObserver=new MutationObserver(updateRTL);return mutationObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}),function(){mutationObserver.disconnect()}}),[]),isRTL}},"./packages/sui-react/packages/utils/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{CI:()=>condContent,HD:()=>isString,Jw:()=>handleOnKeyDown,Kn:()=>isObject,c7:()=>capitalizeText,hj:()=>isNumber,jn:()=>isBoolean,kJ:()=>isArray,mf:()=>isFunction,o8:()=>isUndefined,uY:()=>generateCN,xb:()=>isEmpty});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),generateCN=function(base,variants,extraClassNames){void 0===variants&&(variants={}),void 0===extraClassNames&&(extraClassNames="");var classes=Object.keys(variants).map((function(attr){var _a;return(_a={})["".concat(base,"--").concat(attr)]=!!variants[attr],_a}));return classnames__WEBPACK_IMPORTED_MODULE_0___default()(base,classes,extraClassNames)},condContent=function(condition,content,fallback){return void 0===content&&(content=null),void 0===fallback&&(fallback=void 0),isNull(content)&&(content=condition),condition?content:fallback},isNull=function(value){return null===value},isUndefined=function(value){return void 0===value},isObject=function(value){return"object"==typeof value&&!Array.isArray(value)},isArray=function(value){return Array.isArray(value)},isBoolean=function(value){return"boolean"==typeof value},isNumber=function(value){return"number"==typeof value||!Number.isNaN(value)},isFunction=function(value){return"function"==typeof value},isString=function(value){return"string"==typeof value},isEmpty=function(value){return""===value},capitalizeText=function(string){var _a;return(null===(_a=null==string?void 0:string.charAt(0))||void 0===_a?void 0:_a.toUpperCase())+(null==string?void 0:string.slice(1))},handleOnKeyDown=function(event,callback){"Enter"!==event.key&&" "!==event.key||callback&&callback()}},"./packages/sui-react/packages/components/textarea/stories/ReactTextarea.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Textarea:()=>ReactTextarea_stories_Textarea,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ReactTextarea_stories});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src=__webpack_require__("./packages/sui-react/packages/utils/src/index.ts"),hooks_src=__webpack_require__("./packages/sui-react/packages/hooks/src/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},Textarea=function(_a){var id=_a.id,_b=_a.className,className=void 0===_b?"":_b,_c=_a.value,value=void 0===_c?"":_c,label=_a.label,labelId=_a.labelId,description=_a.description,descriptionId=_a.descriptionId,errorMessage=_a.errorMessage,errorId=_a.errorId,_d=_a.isSmall,isSmall=void 0!==_d&&_d,_e=_a.isDisabled,isDisabled=void 0!==_e&&_e,_f=_a.onChange,onChange=void 0===_f?function(){}:_f,props=__rest(_a,["id","className","value","label","labelId","description","descriptionId","errorMessage","errorId","isSmall","isDisabled","onChange"]),_g=(0,react.useState)(value),currentValue=_g[0],setCurrentValue=_g[1],_h=(0,hooks_src.X2)({}),isHovered=_h[0],isFocused=_h[1],methods=_h[2],classNames=(0,src.uY)("sui-textarea",{errored:!(0,src.xb)(null!=errorMessage?errorMessage:""),disabled:isDisabled,filled:!!currentValue,sm:isSmall,hover:isHovered,focus:isFocused},className),handleOnChange=(0,react.useCallback)((function(e){setCurrentValue(e.target.value),(0,src.mf)(onChange)&&onChange(e)}),[onChange]);return(0,jsx_runtime.jsxs)("div",{className:classNames,children:[(0,jsx_runtime.jsxs)("div",{className:"sui-textarea__wrapper",children:[(0,jsx_runtime.jsx)("textarea",__assign({id:null!=id?id:"",className:"sui-textarea__field",value:currentValue,"aria-labelledby":(0,src.CI)(labelId),"aria-describedby":(0,src.CI)(labelId),disabled:isDisabled,onChange:handleOnChange},props,methods)),(0,jsx_runtime.jsx)("label",{className:"sui-textarea__label",htmlFor:id,id:labelId,children:label})]}),!(0,src.xb)(null!=errorMessage?errorMessage:"")&&(0,jsx_runtime.jsx)("span",{className:"sui-textarea__error-message",role:"alert",id:errorId,children:errorMessage}),!(0,src.xb)(null!=description?description:"")&&(0,src.xb)(null!=errorMessage?errorMessage:"")&&(0,jsx_runtime.jsx)("span",{className:"sui-textarea__description",id:descriptionId+errorId?" ".concat(errorId):"",children:description})]})},lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),storybook=(__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),__webpack_require__("./packages/storybook/lib/storybook.ts"));const anatomy_namespaceObject=__webpack_require__.p+"static/media/anatomy.45f577cd.png";function _createMdxContent(props){const _components=Object.assign({p:"p",strong:"strong"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(storybook.$0,{contained:!0,border:!0,style:{paddingTop:0},children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"A textarea allows users to enter a larger amount of text than a regular text input field. It is often used for inputting longer messages, comments, or reviews on web pages."})})}),"\n",(0,jsx_runtime.jsxs)(storybook.$0,{title:"Anatomy",contained:!0,border:!0,children:[(0,jsx_runtime.jsx)("img",{src:anatomy_namespaceObject,alt:"Textarea anatomy",style:{marginBottom:20}}),(0,jsx_runtime.jsxs)(storybook.aV,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Textarea:"})," A textarea is a multi-line text input field."]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Placeholder:"})," There will be a placeholder when the input ha no value set."]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Help Text:"})," Help text is an overall description about the input field."]})})]})]})]})}const TabUsage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function TabCode_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(storybook.$0,{contained:!0,style:{paddingTop:0,paddingBottom:0},children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Install the ",(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"Textarea"})," package as an individual\ncomponent or follow the Overview page instructions to get the complete\nSUI Components package."]})})}),"\n",(0,jsx_runtime.jsxs)(storybook.$0,{title:"Props",border:!0,children:[(0,jsx_runtime.jsx)("p",{children:"Textarea component have the following props."}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"id",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Add a unique id to the textarea."})}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"className",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Add a class name to the textarea."})}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"value",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Reflects the value of the input field."})}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"description",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Reflects the description of the input field."})}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"descriptionId",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"It helps screen reader to announce the description message of the\nfield."})})}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"errorMessage",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Reflects the error message of the input field."})}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"errorId",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"It helps screen reader to announce the error message of the field."})})}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"isSmall",tag:"boolean",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Set if the input is small."})}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"isDisabled",tag:"boolean",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Set if the input is disabled."})})]})]})}const TabCode=function TabCode_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabCode_createMdxContent,props)})):TabCode_createMdxContent(props)};var dedent=__webpack_require__("./node_modules/dedent/dist/dedent.js"),dedent_default=__webpack_require__.n(dedent);const DisabledTextareaCode=dedent_default()`
import React from 'react';\n
import { Textarea } from '@wpmudev/sui-react';\n
const Example() => {
	return <Textarea id="textarea-id-1" description="This is a description." descriptionId="desc-id" placeholder="Placeholder" isDisabled={true} />;
}\n
export default Example;
`,ValueEnteredTextareaCode=dedent_default()`
import React from 'react';\n
import { Textarea } from '@wpmudev/sui-react';\n
const Example() => {
	return <Textarea id="textarea-id-1" value="Default" description="This is a description." descriptionId="desc-id" placeholder="Placeholder" />;
}\n
export default Example;
`,ReadOnlyTextareaCode=dedent_default()`
import React from 'react';\n
import { Textarea } from '@wpmudev/sui-react';\n
const Example() => {
	return <Textarea id="textarea-id-1" description="This is a description." descriptionId="desc-id" placeholder="Placeholder" readonly="true" />;
}\n
export default Example;
`,ErrorTextareaCode=dedent_default()`
import React from 'react';\n
import { Textarea } from '@wpmudev/sui-react';\n
const Example() => {
	return <Textarea id="textarea-id-1" errorId="error-id" errorMessage="There is an error." description="This is a description." descriptionId="desc-id" placeholder="Placeholder" />;
}\n
export default Example;
`;function States_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(storybook.$0,{title:"Disabled",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Set the ",(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"isDisabled"})," prop to disable a Textarea\nthat is not usable."]})}),(0,jsx_runtime.jsx)(storybook.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(Textarea,{id:"textarea-id-1",description:"This is a description.",descriptionId:"desc-id-1",placeholder:"Placeholder",isDisabled:!0})}),(0,jsx_runtime.jsx)(storybook.pP,{language:"js",children:DisabledTextareaCode})]}),"\n",(0,jsx_runtime.jsxs)(storybook.$0,{title:"Value Entered",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Set the ",(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"value"})," prop to Textarea to set it's value."]})}),(0,jsx_runtime.jsx)(storybook.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(Textarea,{id:"textarea-id-2",value:"Default",description:"This is a description.",descriptionId:"desc-id-2",placeholder:"Placeholder"})}),(0,jsx_runtime.jsx)(storybook.pP,{language:"js",children:ValueEnteredTextareaCode})]}),"\n",(0,jsx_runtime.jsxs)(storybook.$0,{title:"Read Only",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Add the ",(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"readOnly"})," prop to set Textarea readonly."]})}),(0,jsx_runtime.jsx)(storybook.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(Textarea,{id:"textarea-id-3",description:"This is a description.",descriptionId:"desc-id-3",placeholder:"Placeholder",readOnly:!0})}),(0,jsx_runtime.jsx)(storybook.pP,{language:"js",children:ReadOnlyTextareaCode})]}),"\n",(0,jsx_runtime.jsxs)(storybook.$0,{title:"Error",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Set the ",(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"errorMessage"})," prop to show the error in\nthe field."]})}),(0,jsx_runtime.jsx)(storybook.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(Textarea,{id:"textarea-id-4",errorId:"error-id-1",errorMessage:"There is an error.",description:"This is a description.",descriptionId:"desc-id-4",placeholder:"Placeholder"})}),(0,jsx_runtime.jsx)(storybook.pP,{language:"js",children:ErrorTextareaCode})]})]})}const States=function States_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(States_createMdxContent,props)})):States_createMdxContent(props)},SmallTextareaCode=dedent_default()`
import React from 'react';\n
import { Button } from '@wpmudev/sui-react';\n
const Example() => {
	return <Textarea id="textarea-id-4" description="This is a description." descriptionId="desc-id" placeholder="Placeholder" isSmall={true} />;
}\n
export default Example;
`;function Size_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(storybook.$0,{title:"Small",contained:!0,style:{paddingRight:0,paddingBottom:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Set the ",(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"isSmall"})," prop to reduce the textarea\nheight, fitting with the design context."]})}),(0,jsx_runtime.jsx)(storybook.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(Textarea,{id:"textarea-id-4",placeholder:"Placeholder",description:"This is a description.",descriptionId:"desc-id",isSmall:!0})}),(0,jsx_runtime.jsx)(storybook.pP,{language:"js",children:SmallTextareaCode})]})}const Size=function Size_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Size_createMdxContent,props)})):Size_createMdxContent(props)},sampleCode=dedent_default()`
import React from 'react';\n
import { Textarea } from '@wpmudev/sui-react';\n
const Example() => {
	return <Textarea id="input-id-1" description="This is a description." descriptionId="desc-id" placeholder="Placeholder" />;
}\n
export default Example;
`;function TabExamples_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(storybook.$0,{contained:!0,style:{paddingTop:0},children:[(0,jsx_runtime.jsx)("p",{children:"Below is the default form of a field, used for most cases."}),(0,jsx_runtime.jsx)(storybook.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(Textarea,{id:"input-id-1",description:"This is a description.",descriptionId:"desc-id",placeholder:"Placeholder"})}),(0,jsx_runtime.jsx)(storybook.pP,{language:"js",children:sampleCode})]}),"\n",(0,jsx_runtime.jsx)(storybook.$0,{style:{paddingTop:0},children:(0,jsx_runtime.jsxs)(storybook.T5,{children:[(0,jsx_runtime.jsx)("div",{label:"States",value:"states",children:(0,jsx_runtime.jsx)(States,{})}),(0,jsx_runtime.jsx)("div",{label:"Size",value:"size",children:(0,jsx_runtime.jsx)(Size,{})})]})})]})}const TabExamples=function TabExamples_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabExamples_createMdxContent,props)})):TabExamples_createMdxContent()};function ReactTextarea_createMdxContent(props){return storybook.T3||_missingMdxReference("Page",!1),storybook.T3.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsxs)(storybook.T3.Tabs,{title:"Textarea",subtitle:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"A textarea element is used to create a multi-line text input field on a web page."}),status:"draft",children:[(0,jsx_runtime.jsx)("div",{id:"usage",label:"Usage",children:(0,jsx_runtime.jsx)(TabUsage,{})}),(0,jsx_runtime.jsx)("div",{id:"code",label:"Code",children:(0,jsx_runtime.jsx)(TabCode,{})}),(0,jsx_runtime.jsx)("div",{id:"examples",label:"Examples",children:(0,jsx_runtime.jsx)(TabExamples,{})})]})}const ReactTextarea=function ReactTextarea_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(ReactTextarea_createMdxContent,props)})):ReactTextarea_createMdxContent()};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const ReactTextarea_stories_Textarea=({example,description,color,size,isSmall,isDisabled,errorMessage})=>{const boxStyles={padding:20,borderRadius:4,background:"white"!==color?"#fff":"#333"};return(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsx)("div",{style:boxStyles,children:(0,jsx_runtime.jsx)(Textarea,{id:"textarea-default",rows:"4",placeholder:"Placeholder",description,descriptionId:"desc-id",isSmall,isDisabled,errorMessage})})})})};ReactTextarea_stories_Textarea.displayName="Textarea",ReactTextarea_stories_Textarea.args={description:"Help text",isSmall:!1,isDisabled:!1,errorMessage:""},ReactTextarea_stories_Textarea.argTypes={description:{name:"Description"},isSmall:{name:"Small"},isDisabled:{name:"Disabled"},errorMessage:{name:"Error Message",control:{type:"text"}}};const ReactTextarea_stories={title:"SUI/Components/Forms/Textarea",component:ReactTextarea_stories_Textarea,parameters:{layout:"fullscreen",docs:{page:ReactTextarea}}};ReactTextarea_stories_Textarea.__docgenInfo={description:"",methods:[],displayName:"Textarea"};const __namedExportsOrder=["Textarea"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/dedent/dist/dedent.js":module=>{"use strict";module.exports=function dedent(strings){var raw=void 0;raw="string"==typeof strings?[strings]:strings.raw;for(var result="",i=0;i<raw.length;i++)result+=raw[i].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),i<(arguments.length<=1?0:arguments.length-1)&&(result+=arguments.length<=i+1?void 0:arguments[i+1]);var lines=result.split("\n"),mindent=null;return lines.forEach((function(l){var m=l.match(/^(\s+)\S+/);if(m){var indent=m[1].length;mindent=mindent?Math.min(mindent,indent):indent}})),null!==mindent&&(result=lines.map((function(l){return" "===l[0]?l.slice(mindent):l})).join("\n")),(result=result.trim()).replace(/\\n/g,"\n")}}}]);
//# sourceMappingURL=sui-react-packages-components-textarea-stories-ReactTextarea-stories.dd683c65.iframe.bundle.js.map