/*! For license information please see sui-react-packages-components-search-stories-search-stories.8ee507b3.iframe.bundle.js.LICENSE.txt */
(self.webpackChunksui_docs=self.webpackChunksui_docs||[]).push([[8729],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise(((resolve,reject)=>{__webpack_require__.e(9433).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hw:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hw,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-links/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{kZ:()=>_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.kZ});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs");__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs")},"./node_modules/@storybook/addon-links/dist/react/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>react_default});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs"),__webpack_require__("./node_modules/react/index.js")),react_default=class extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind,title=kind,story,name=story}=this.props;if(title&&name){let href=await(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.ew)(title,name);this.setState({href})}},this.handleClick=()=>{let{kind,title=kind,story,name=story}=this.props;title&&name&&(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.c4)({title,name})}}static{this.defaultProps={children:void 0}}componentDidMount(){this.updateHref()}componentDidUpdate(prevProps){let{kind,title,story,name}=this.props;(prevProps.kind!==kind||prevProps.story!==story||prevProps.title!==title||prevProps.name!==name)&&this.updateHref()}render(){let{kind,title=kind,story,name=story,children,...rest}=this.props,{href}=this.state;return react__WEBPACK_IMPORTED_MODULE_2__.createElement("a",{href,onClick:e=>((e,cb=(_e=>{}))=>{(e=>!(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))(e)&&(e.preventDefault(),cb(e))})(e,this.handleClick),...rest},children)}}},"./packages/sui-react/packages/components/input/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>Input});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/sui-react/packages/utils/src/index.ts"),hooks_src=__webpack_require__("./packages/sui-react/packages/hooks/src/index.ts"),components=__webpack_require__("./packages/sui-icons/src/components/index.ts"),Icon=function(_a){var _b,_c=_a.name,name=void 0===_c?"":_c,_d=_a.size,size=void 0===_d?"lg":_d;if((0,src.xb)(null!=name?name:""))throw new Error('Required parameter is empty. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Input\n\nThe "name" parameter in the icon element is required and must not be empty.\n\n');var classNames=(0,src.uY)("suicons",((_b={})[name]=!0,_b[size||"md"]=["sm","md","lg"].includes(size||"md"),_b.icon=!0,_b),"sui-input__icon");return(0,jsx_runtime.jsx)("span",{className:classNames,"aria-hidden":"true"})},__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},Input=(0,react.forwardRef)((function(_a,ref){var _b,type=_a.type,defaultValue=_a.defaultValue,placeholder=_a.placeholder,id=_a.id,className=_a.className,inputClass=_a.inputClass,_c=_a.isMultiLine,isMultiLine=void 0!==_c&&_c,_d=_a.isSmall,isSmall=void 0!==_d&&_d,_e=_a.isReadOnly,isReadOnly=void 0!==_e&&_e,_f=_a.isError,isError=void 0!==_f&&_f,_g=_a.isDisabled,isDisabled=void 0!==_g&&_g,onChange=(_a.onMouseEnter,_a.onMouseLeave,_a.onChange),icon=_a.icon,iconPosition=_a.iconPosition,_k=_a.allowClear,allowClear=void 0!==_k&&_k,props=__rest(_a,["type","defaultValue","placeholder","id","className","inputClass","isMultiLine","isSmall","isReadOnly","isError","isDisabled","onMouseEnter","onMouseLeave","onChange","icon","iconPosition","allowClear"]),_l=(0,react.useState)(defaultValue),value=_l[0],setValue=_l[1],_m=(0,hooks_src.X2)({}),isHovered=_m[0],isFocused=_m[1],interactionMethods=_m[2];if(!(!(0,src.o8)(id)&&!(0,src.xb)(id)))throw new Error('Empty parameter is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Input\n\nThe parameter "id" in the "Input" component is required.\n\n');(0,react.useEffect)((function(){setValue(defaultValue)}),[defaultValue]);var handleChange=(0,react.useCallback)((function(e){var _a,_b;isReadOnly||setValue(null!==(_b=null===(_a=null==e?void 0:e.target)||void 0===_a?void 0:_a.value)&&void 0!==_b?_b:""),onChange&&onChange(e)}),[isReadOnly,onChange]),onClear=(0,react.useCallback)((function(){setValue(""),onChange&&onChange("")}),[onChange]),hasValue=!(0,src.o8)(value)&&!(0,src.xb)(null!=value?value:""),hasPlaceholder=!(0,src.o8)(placeholder)&&!(0,src.xb)(placeholder),hasClassInput=!(0,src.o8)(inputClass)&&!(0,src.xb)(inputClass),inputType="text";["email","number","password","search","tel","url"].includes(type)&&(inputType=type);var classNames=(0,src.uY)("sui-input",((_b={sm:isSmall,readonly:isReadOnly,hover:isHovered&&!isReadOnly,focus:isFocused&&!isReadOnly,filled:hasValue,"has-icon":!(0,src.xb)(icon),"icon-start":!(0,src.xb)(iconPosition)&&"start"===iconPosition,"icon-end":!(0,src.xb)(iconPosition)&&"end"===iconPosition,error:isError,disabled:isDisabled})["multiline".concat(isSmall?"-sm":"")]=isMultiLine,_b),null!=className?className:""),inputClassNames=(0,src.uY)("sui-input__input",{"allow-clear":allowClear&&!(0,src.xb)(value)&&!isMultiLine},hasClassInput?inputClass:""),TagName="input";isMultiLine&&(TagName="textarea");var attrs=__assign(__assign({id,ref,type:(0,src.CI)(!isMultiLine,inputType),placeholder:(0,src.CI)(hasPlaceholder,placeholder),readOnly:(0,src.CI)(isReadOnly,!0),disabled:(0,src.CI)(isDisabled,!0),value:null!=value?value:"",className:inputClassNames,onChange:handleChange},interactionMethods),props);return(0,jsx_runtime.jsxs)("div",{className:classNames,children:[icon&&!isMultiLine&&"start"===iconPosition&&(0,jsx_runtime.jsx)(Icon,{name:null!=icon?icon:"",size:isSmall?"md":"lg"}),(0,jsx_runtime.jsx)(TagName,__assign({},attrs)),icon&&!isMultiLine&&"end"===iconPosition&&(0,jsx_runtime.jsx)(Icon,{name:null!=icon?icon:"",size:isSmall?"md":"lg"}),allowClear&&!(0,src.xb)(value)&&!isMultiLine&&(0,jsx_runtime.jsx)(components.CloseAlt,{className:"sui-input__input-clear",onClick:onClear,color:"neutral"})]})}));Input.displayName="Input"},"./packages/sui-react/packages/hooks/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{p4:()=>useDetectRTL,Y9:()=>useDragAndDrop,X2:()=>useInteraction,rw:()=>useOuterClick,vI:()=>usePortal,GT:()=>useValidateProps});var react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/sui-react/packages/utils/src/index.ts"),useInteraction=function(methods){var _a=(0,react.useState)(!1),isHovered=_a[0],setIsHovered=_a[1],_b=(0,react.useState)(!1),isFocused=_b[0],setIsFocused=_b[1],_c=methods,onMouseEnter=_c.onMouseEnter,onMouseLeave=_c.onMouseLeave,onMouseDownCapture=_c.onMouseDownCapture,onMouseUpCapture=_c.onMouseUpCapture,onFocus=_c.onFocus,onBlur=_c.onBlur,onBlurCapture=_c.onBlurCapture,toggleHover=(0,react.useCallback)((function(state,event,callback){void 0===event&&(event=null),void 0===callback&&(callback=function(e){}),setIsHovered(state),(0,src.mf)(callback)&&callback(event)}),[]),toggleFocus=(0,react.useCallback)((function(state,event,callback){void 0===event&&(event=null),void 0===callback&&(callback=function(e){}),setIsFocused(state),(0,src.mf)(callback)&&callback(event)}),[]),onMouseEnterCallback=(0,react.useCallback)((function(e){return toggleHover(!0,e,onMouseEnter)}),[onMouseEnter,toggleHover]),onMouseLeaveCallback=(0,react.useCallback)((function(e){return toggleHover(!1,e,onMouseLeave)}),[onMouseLeave,toggleHover]),onMouseDownCaptureCallback=(0,react.useCallback)((function(e){return toggleFocus(!1,e,onMouseDownCapture)}),[onMouseDownCapture,toggleFocus]),onMouseUpCaptureCallback=(0,react.useCallback)((function(e){return toggleFocus(!0,e,onMouseUpCapture)}),[onMouseUpCapture,toggleFocus]),onBlurCaptureCallback=(0,react.useCallback)((function(e){return toggleHover(!1,e,onBlurCapture)}),[onBlurCapture,toggleHover]),onBlurCallback=(0,react.useCallback)((function(e){return toggleFocus(!1,e,onBlur)}),[onBlur,toggleFocus]);return[isHovered,isFocused,{onMouseEnter:onMouseEnterCallback,onMouseLeave:onMouseLeaveCallback,onMouseDownCapture:onMouseDownCaptureCallback,onMouseUpCapture:onMouseUpCaptureCallback,onFocus:(0,react.useCallback)((function(e){return toggleFocus(!0,e,onFocus)}),[onFocus,toggleFocus]),onBlur:onBlurCallback,onBlurCapture:onBlurCaptureCallback},toggleHover,toggleFocus]},useOuterClick=function(ref,callback){void 0===callback&&(callback=function(){});var onPageClick=(0,react.useCallback)((function(event){(null==ref?void 0:ref.current)&&!(null==ref?void 0:ref.current.contains(event.target))&&callback()}),[callback,ref]);(0,react.useEffect)((function(){return document.addEventListener("click",onPageClick),function(){document.removeEventListener("click",onPageClick)}}))},react_dom=__webpack_require__("./node_modules/react-dom/index.js"),usePortal=function(wrapperId){var _a=(0,react.useState)(null),wrapperElement=_a[0],setWrapperElement=_a[1];wrapperId=null!=wrapperId?wrapperId:".sui-wrap",(0,react.useLayoutEffect)((function(){var el=document.querySelector(wrapperId),systemCreated=!1;return el||(systemCreated=!0,el=function(wrapperId){var wrapperElement=document.createElement("div");return wrapperElement.setAttribute("id",wrapperId),document.body.appendChild(wrapperElement),wrapperElement}(wrapperId)),setWrapperElement(el),function(){systemCreated&&(null==el?void 0:el.parentNode)&&el.parentNode.removeChild(el)}}),[wrapperId]);return[function(children){return null===wrapperElement?null:(0,react_dom.createPortal)(children,wrapperElement)}]},useValidateProps=function(_a){var _b,propsToCheck=_a.propsToCheck,component=_a.component,componentName=(null==component?void 0:component.displayName)||(null==component?void 0:component.name);null===(_b=Object.keys(propsToCheck))||void 0===_b||_b.forEach((function(propKey,index){var _a;if(!!(0,src.xb)(null!==(_a=null==propsToCheck?void 0:propsToCheck[propKey])&&void 0!==_a?_a:""))throw new Error("Empty content is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 SUI 3 React - Components: ".concat(componentName,'\n\nThe "').concat(propKey,'" argument requires some value to be passed to it.\n\n'))}))},useDragAndDrop=function(_a){var containerRef=_a.containerRef,methods=_a.methods,_b=(0,react.useState)(),node=_b[0],setNode=_b[1],_c=(0,react.useState)(!1),isDragging=_c[0],setIsDragging=_c[1];return(0,react.useEffect)((function(){setNode(null==containerRef?void 0:containerRef.current)}),[containerRef]),(0,react.useEffect)((function(){var onDragOver=function(e){e.preventDefault(),e.stopPropagation(),setIsDragging(!0),(null==methods?void 0:methods.onDragOver)&&(null==methods||methods.onDragOver(e))},onDrop=function(e){e.preventDefault(),e.stopPropagation(),setIsDragging(!1),(null==methods?void 0:methods.onDrop)&&(null==methods||methods.onDrop(e))};return null==node||node.addEventListener("dragover",onDragOver,!1),null==node||node.addEventListener("drop",onDrop,!1),function(){null==node||node.removeEventListener("dragover",onDragOver,!1),null==node||node.removeEventListener("drop",onDrop,!1)}}),[containerRef,node,methods]),[isDragging]},useDetectRTL=function(){var _a=(0,react.useState)(!1),isRTL=_a[0],setIsRTL=_a[1];return(0,react.useEffect)((function(){var updateRTL=function(){var isDocumentRTL="rtl"===document.documentElement.getAttribute("dir");setIsRTL(isDocumentRTL)};updateRTL();var mutationObserver=new MutationObserver(updateRTL);return mutationObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}),function(){mutationObserver.disconnect()}}),[]),isRTL}},"./packages/sui-react/packages/utils/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{CI:()=>condContent,F3:()=>chunkArray,HD:()=>isString,Jw:()=>handleOnKeyDown,Kn:()=>isObject,c7:()=>capitalizeText,h4:()=>PluginsIcons,hj:()=>isNumber,jn:()=>isBoolean,kJ:()=>isArray,mf:()=>isFunction,o8:()=>isUndefined,uY:()=>generateCN,wW:()=>handleEventDefault,xb:()=>isEmpty});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),generateCN=function(base,variants,extraClassNames){void 0===variants&&(variants={}),void 0===extraClassNames&&(extraClassNames="");var classes=Object.keys(variants).map((function(attr){var _a;return(_a={})["".concat(base,"--").concat(attr)]=!!variants[attr],_a}));return classnames__WEBPACK_IMPORTED_MODULE_0___default()(base,classes,extraClassNames)},condContent=function(condition,content,fallback){return void 0===content&&(content=null),void 0===fallback&&(fallback=void 0),isNull(content)&&(content=condition),condition?content:fallback},isNull=function(value){return null===value},isUndefined=function(value){return void 0===value},isObject=function(value){return"object"==typeof value&&!Array.isArray(value)},isArray=function(value){return Array.isArray(value)},isBoolean=function(value){return"boolean"==typeof value},isNumber=function(value){return"number"==typeof value||!Number.isNaN(value)},isFunction=function(value){return"function"==typeof value},isString=function(value){return"string"==typeof value},isEmpty=function(value){return""===value},capitalizeText=function(string){var _a;return(null===(_a=null==string?void 0:string.charAt(0))||void 0===_a?void 0:_a.toUpperCase())+(null==string?void 0:string.slice(1))},handleOnKeyDown=function(event,callback){"Enter"!==event.key&&" "!==event.key||callback&&callback()},handleEventDefault=function(e,stopPropagation,preventDefault){stopPropagation&&(null==e||e.stopPropagation()),preventDefault&&(null==e||e.preventDefault())},PluginsIcons={smush:{bg:"#2dc4e0",color:"#FFF",icon:"PluginSmush"},defender:{bg:"#282a2c",color:"#FFF",icon:"PluginDefender"},snapshot:{bg:"#1a325e",color:"#FFF",icon:"PluginSnapshot"},hummingbird:{bg:"#ff8e3c",color:"#FFF",icon:"PluginHummingbird"},forminator:{bg:"#1f2852",color:"#FFF",icon:"PluginForminator"},beehive:{bg:"#013aa9",color:"#FFF",icon:"PluginBeehive"},hustle:{bg:"#1a1a1a",color:"#FFF",icon:"PluginHustle"},smartcrawl:{bg:"#de240a",color:"#FFF",icon:"PluginSmartCrawl"},shipper:{bg:"#7b5499",color:"#FFF",icon:"PluginShipper"},branda:{bg:"#ff8184",color:"#FFF",icon:"PluginBranda"}},chunkArray=function(arr,size){for(var chunkedArray=[],i=0;i<arr.length;i+=size){var chunk=arr.slice(i,i+size);chunkedArray.push(chunk)}return chunkedArray}},"./packages/sui-react/packages/components/search/stories/search.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Search:()=>search_stories_Search,__namedExportsOrder:()=>__namedExportsOrder,default:()=>search_stories});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src=__webpack_require__("./packages/sui-react/packages/utils/src/index.ts"),input_src=__webpack_require__("./packages/sui-react/packages/components/input/src/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},Search=function(_a){var id=_a.id,defaultValue=(_a.image,_a.status,_a.isSmall,_a.className,_a.defaultValue),props=__rest(_a,["id","image","status","isSmall","className","defaultValue"]),_c=(0,react.useState)(null!=defaultValue?defaultValue:""),value=_c[0],setValue=_c[1],inputId=(0,react.useId)();inputId=null!=id?id:"sui-search-".concat(inputId);var classNames=(0,src.uY)("sui-search",{}),onChange=(0,react.useCallback)((function(e){var val=e?e.target.value:"";setValue(val)}),[]);return(0,jsx_runtime.jsxs)("div",__assign({className:classNames},props,{children:[(0,jsx_runtime.jsx)(input_src.I,{className:"",id:inputId,tabIndex:-1,icon:"search",iconPosition:"start",onChange,defaultValue:value,allowClear:!0}),(0,jsx_runtime.jsx)("div",{className:"sui-search__popover",children:"POPOVER"})]}))},lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),storybook=__webpack_require__("./packages/storybook/lib/storybook.ts"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){return storybook.T3||_missingMdxReference("Page",!1),storybook.T3.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsx)(dist.E$,{children:(0,jsx_runtime.jsx)(storybook.T3.Tabs,{title:"Search",subtitle:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"An search is a thumbnail that represents a user or organization on the SUI platform."}),status:"draft"})})}function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const search_stories={title:"SUI/Components/Core/Search",component:Search,parameters:{layout:"fullscreen",docs:{page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent()}}}},search_stories_Search=({...props})=>(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Search,{...props})})})});search_stories_Search.displayName="Search",search_stories_Search.args={example:"icon",status:"",image:{alt:"Unreal Person search image"},isSmall:!1},search_stories_Search.argTypes={example:{name:"Example",options:["icon","image"],control:{type:"select",labels:{icon:"Example: Icon Search",image:"Example: Image Search"}}},image:{name:"Image",control:"object",if:{arg:"example",eq:"image"}},status:{name:"Status",options:["none","confirmed","awaiting","not-accepted","not-connected"],control:{type:"select",labels:{none:"Status: None",confirmed:"Status: Confirmed",awaiting:"Status: Awaiting","not-accepted":"Status: Not Accepted","not-connected":"Status: Not Connected"}}},isSmall:{name:"Small",control:"boolean"}},search_stories_Search.__docgenInfo={description:"",methods:[],displayName:"Search"};const __namedExportsOrder=["Search"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);