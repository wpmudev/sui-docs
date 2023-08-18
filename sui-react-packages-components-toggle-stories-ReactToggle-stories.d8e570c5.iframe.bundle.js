/*! For license information please see sui-react-packages-components-toggle-stories-ReactToggle-stories.d8e570c5.iframe.bundle.js.LICENSE.txt */
(self.webpackChunksui_docs=self.webpackChunksui_docs||[]).push([[9006],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hw:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hw,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-links/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{kZ:()=>_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.kZ});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs");__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs")},"./node_modules/@storybook/addon-links/dist/react/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>react_default});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs"),__webpack_require__("./node_modules/react/index.js")),react_default=class extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind,title=kind,story,name=story}=this.props;if(title&&name){let href=await(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.ew)(title,name);this.setState({href})}},this.handleClick=()=>{let{kind,title=kind,story,name=story}=this.props;title&&name&&(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.c4)({title,name})}}static{this.defaultProps={children:void 0}}componentDidMount(){this.updateHref()}componentDidUpdate(prevProps){let{kind,title,story,name}=this.props;(prevProps.kind!==kind||prevProps.story!==story||prevProps.title!==title||prevProps.name!==name)&&this.updateHref()}render(){let{kind,title=kind,story,name=story,children,...rest}=this.props,{href}=this.state;return react__WEBPACK_IMPORTED_MODULE_2__.createElement("a",{href,onClick:e=>((e,cb=(_e=>{}))=>{(e=>!(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))(e)&&(e.preventDefault(),cb(e))})(e,this.handleClick),...rest},children)}}},"./packages/sui-react/packages/components/box/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{x:()=>Box,f:()=>BoxGroup});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/sui-react/packages/utils/src/index.ts"),BoxGroup=function(_a){var _b=_a.isInline,isInline=void 0===_b||_b,children=_a.children,slots=react.Children.map(children,(function(child,index){var _a,_b=null!==(_a=child.props)&&void 0!==_a?_a:{},slot=_b.slot,content=_b.children;return(0,src.Kn)(child)&&["left","right"].includes(null!=slot?slot:"")?(0,jsx_runtime.jsx)("div",{className:"sui-box-group__slot sui-box-group__".concat(slot),children:content},"sui-box-group--".concat(index)):(0,jsx_runtime.jsx)(react.Fragment,{children:child},"sui-box-group--".concat(index))})),classNames=(0,src.uY)("sui-box-group",{inline:isInline});return(0,jsx_runtime.jsx)("div",{className:classNames,children:slots})},__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},Box=function(_a){var title=_a.title,icon=_a.icon,headerLeft=_a.headerLeft,headerRight=_a.headerRight,children=_a.children,isSmall=_a.isSmall,_b=_a.className,className=void 0===_b?"":_b,hasTitle=!(0,src.o8)(title)&&!(0,src.xb)(title),hasIcon=!(0,src.o8)(icon)&&!(0,src.xb)(icon),hasLeft=!(0,src.o8)(headerRight)&&!(0,src.xb)(headerLeft),hasRight=!(0,src.o8)(headerRight)&&!(0,src.xb)(headerRight),classNames=(0,src.uY)("sui-box",{"size-sm":isSmall},className);return(0,jsx_runtime.jsxs)("div",{className:classNames,children:[hasTitle&&(0,jsx_runtime.jsxs)(BoxGroup,{isInline:!0,children:[(0,jsx_runtime.jsxs)("div",{slot:"left",children:[hasIcon&&(0,jsx_runtime.jsx)("span",{className:"suicons suicons--".concat(icon," suicons--lg sui-box-group__item"),"aria-hidden":"true"}),hasTitle&&(0,jsx_runtime.jsx)("h2",{className:"sui-heading sui-heading--h3 sui-box-group__item",children:title}),hasLeft&&headerLeft]}),(0,jsx_runtime.jsx)("div",__assign({},hasRight&&{slot:"right"},{children:hasRight&&headerRight}))]}),children]})}},"./packages/sui-react/packages/components/toggle/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Toggle});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/sui-react/packages/hooks/src/index.ts"),utils_src=__webpack_require__("./packages/sui-react/packages/utils/src/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},Toggle=function(_a){var label=_a.label,description=_a.description,defaultValue=_a.defaultValue,_b=_a.isLabelHidden,isLabelHidden=void 0!==_b&&_b,_c=_a.isDisabled,isDisabled=void 0!==_c&&_c,_d=_a.onClick,onClick=void 0===_d?function(){}:_d,props=__rest(_a,["label","description","defaultValue","isLabelHidden","isDisabled","onClick"]),id="sui-toggle-".concat((0,react.useId)()),_e=(0,react.useState)(defaultValue),state=_e[0],setState=_e[1],_f=(0,src.X2)({}),isHovered=_f[0],isFocused=_f[1],methods=_f[2];(0,react.useEffect)((function(){(0,utils_src.jn)(defaultValue)||setState(!!defaultValue)}),[defaultValue]);var handleOnChange=(0,react.useCallback)((function(e){setState(!state),onClick&&onClick(e)}),[onClick,state]),containerProps=__assign({className:(0,utils_src.uY)("sui-toggle",{"hidden-label":isLabelHidden,checked:state,disabled:isDisabled,hover:!state&&isHovered,focus:!state&&isFocused,"checked-hover":state&&isHovered,"checked-focus":state&&isFocused})},methods),inputProps=__assign({type:"checkbox",className:"sui-screen-reader-only",defaultChecked:state,disabled:isDisabled,onChange:handleOnChange},props);return(0,jsx_runtime.jsxs)("label",__assign({},containerProps,{htmlFor:id,children:[(0,jsx_runtime.jsx)("input",__assign({},inputProps,{id})),(0,jsx_runtime.jsx)("span",{tabIndex:-1,className:"sui-toggle__switch","aria-hidden":!0}),isLabelHidden&&(0,jsx_runtime.jsx)("span",{className:"sui-screen-reader-only",children:label}),!isLabelHidden&&(0,jsx_runtime.jsx)("span",{className:"sui-toggle__label",children:label}),description&&(0,jsx_runtime.jsx)("p",{className:"sui-toggle__description",children:description})]}))}},"./packages/sui-react/packages/hooks/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{p4:()=>useDetectRTL,Y9:()=>useDragAndDrop,X2:()=>useInteraction,rw:()=>useOuterClick,vI:()=>usePortal,GT:()=>useValidateProps});var react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/sui-react/packages/utils/src/index.ts"),useInteraction=function(methods){var _a=(0,react.useState)(!1),isHovered=_a[0],setIsHovered=_a[1],_b=(0,react.useState)(!1),isFocused=_b[0],setIsFocused=_b[1],_c=methods,onMouseEnter=_c.onMouseEnter,onMouseLeave=_c.onMouseLeave,onMouseDownCapture=_c.onMouseDownCapture,onMouseUpCapture=_c.onMouseUpCapture,onFocus=_c.onFocus,onBlur=_c.onBlur,onBlurCapture=_c.onBlurCapture,toggleHover=(0,react.useCallback)((function(state,event,callback){void 0===event&&(event=null),void 0===callback&&(callback=function(e){}),setIsHovered(state),(0,src.mf)(callback)&&callback(event)}),[]),toggleFocus=(0,react.useCallback)((function(state,event,callback){void 0===event&&(event=null),void 0===callback&&(callback=function(e){}),setIsFocused(state),(0,src.mf)(callback)&&callback(event)}),[]),onMouseEnterCallback=(0,react.useCallback)((function(e){return toggleHover(!0,e,onMouseEnter)}),[onMouseEnter,toggleHover]),onMouseLeaveCallback=(0,react.useCallback)((function(e){return toggleHover(!1,e,onMouseLeave)}),[onMouseLeave,toggleHover]),onMouseDownCaptureCallback=(0,react.useCallback)((function(e){return toggleFocus(!1,e,onMouseDownCapture)}),[onMouseDownCapture,toggleFocus]),onMouseUpCaptureCallback=(0,react.useCallback)((function(e){return toggleFocus(!0,e,onMouseUpCapture)}),[onMouseUpCapture,toggleFocus]),onBlurCaptureCallback=(0,react.useCallback)((function(e){return toggleHover(!1,e,onBlurCapture)}),[onBlurCapture,toggleHover]),onBlurCallback=(0,react.useCallback)((function(e){return toggleFocus(!1,e,onBlur)}),[onBlur,toggleFocus]);return[isHovered,isFocused,{onMouseEnter:onMouseEnterCallback,onMouseLeave:onMouseLeaveCallback,onMouseDownCapture:onMouseDownCaptureCallback,onMouseUpCapture:onMouseUpCaptureCallback,onFocus:(0,react.useCallback)((function(e){return toggleFocus(!0,e,onFocus)}),[onFocus,toggleFocus]),onBlur:onBlurCallback,onBlurCapture:onBlurCaptureCallback},toggleHover,toggleFocus]},useOuterClick=function(ref,callback){void 0===callback&&(callback=function(){});var onPageClick=(0,react.useCallback)((function(event){(null==ref?void 0:ref.current)&&!(null==ref?void 0:ref.current.contains(event.target))&&callback()}),[callback,ref]);(0,react.useEffect)((function(){return document.addEventListener("click",onPageClick),function(){document.removeEventListener("click",onPageClick)}}))},react_dom=__webpack_require__("./node_modules/react-dom/index.js"),usePortal=function(wrapperId){var _a=(0,react.useState)(null),wrapperElement=_a[0],setWrapperElement=_a[1];wrapperId=null!=wrapperId?wrapperId:".sui-wrap",(0,react.useLayoutEffect)((function(){var el=document.querySelector(wrapperId),systemCreated=!1;return el||(systemCreated=!0,el=function(wrapperId){var wrapperElement=document.createElement("div");return wrapperElement.setAttribute("id",wrapperId),document.body.appendChild(wrapperElement),wrapperElement}(wrapperId)),setWrapperElement(el),function(){systemCreated&&(null==el?void 0:el.parentNode)&&el.parentNode.removeChild(el)}}),[wrapperId]);return[function(children){return null===wrapperElement?null:(0,react_dom.createPortal)(children,wrapperElement)}]},useValidateProps=function(_a){var _b,propsToCheck=_a.propsToCheck,component=_a.component,componentName=(null==component?void 0:component.displayName)||(null==component?void 0:component.name);null===(_b=Object.keys(propsToCheck))||void 0===_b||_b.forEach((function(propKey,index){var _a;if(!!(0,src.xb)(null!==(_a=null==propsToCheck?void 0:propsToCheck[propKey])&&void 0!==_a?_a:""))throw new Error("Empty content is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 SUI 3 React - Components: ".concat(componentName,'\n\nThe "').concat(propKey,'" argument requires some value to be passed to it.\n\n'))}))},useDragAndDrop=function(_a){var containerRef=_a.containerRef,methods=_a.methods,_b=(0,react.useState)(),node=_b[0],setNode=_b[1],_c=(0,react.useState)(!1),isDragging=_c[0],setIsDragging=_c[1];return(0,react.useEffect)((function(){setNode(null==containerRef?void 0:containerRef.current)}),[containerRef]),(0,react.useEffect)((function(){var onDragOver=function(e){e.preventDefault(),e.stopPropagation(),setIsDragging(!0),(null==methods?void 0:methods.onDragOver)&&(null==methods||methods.onDragOver(e))},onDrop=function(e){e.preventDefault(),e.stopPropagation(),setIsDragging(!1),(null==methods?void 0:methods.onDrop)&&(null==methods||methods.onDrop(e))};return null==node||node.addEventListener("dragover",onDragOver,!1),null==node||node.addEventListener("drop",onDrop,!1),function(){null==node||node.removeEventListener("dragover",onDragOver,!1),null==node||node.removeEventListener("drop",onDrop,!1)}}),[containerRef,node,methods]),[isDragging]},useDetectRTL=function(){var _a=(0,react.useState)(!1),isRTL=_a[0],setIsRTL=_a[1];return(0,react.useEffect)((function(){var updateRTL=function(){var isDocumentRTL="rtl"===document.documentElement.getAttribute("dir");setIsRTL(isDocumentRTL)};updateRTL();var mutationObserver=new MutationObserver(updateRTL);return mutationObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}),function(){mutationObserver.disconnect()}}),[]),isRTL}},"./packages/sui-react/packages/utils/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{CI:()=>condContent,HD:()=>isString,Jw:()=>handleOnKeyDown,Kn:()=>isObject,c7:()=>capitalizeText,hj:()=>isNumber,jn:()=>isBoolean,kJ:()=>isArray,mf:()=>isFunction,o8:()=>isUndefined,uY:()=>generateCN,xb:()=>isEmpty});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),generateCN=function(base,variants,extraClassNames){void 0===variants&&(variants={}),void 0===extraClassNames&&(extraClassNames="");var classes=Object.keys(variants).map((function(attr){var _a;return(_a={})["".concat(base,"--").concat(attr)]=!!variants[attr],_a}));return classnames__WEBPACK_IMPORTED_MODULE_0___default()(base,classes,extraClassNames)},condContent=function(condition,content,fallback){return void 0===content&&(content=null),void 0===fallback&&(fallback=void 0),isNull(content)&&(content=condition),condition?content:fallback},isNull=function(value){return null===value},isUndefined=function(value){return void 0===value},isObject=function(value){return"object"==typeof value&&!Array.isArray(value)},isArray=function(value){return Array.isArray(value)},isBoolean=function(value){return"boolean"==typeof value},isNumber=function(value){return"number"==typeof value||!Number.isNaN(value)},isFunction=function(value){return"function"==typeof value},isString=function(value){return"string"==typeof value},isEmpty=function(value){return""===value},capitalizeText=function(string){var _a;return(null===(_a=null==string?void 0:string.charAt(0))||void 0===_a?void 0:_a.toUpperCase())+(null==string?void 0:string.slice(1))},handleOnKeyDown=function(event,callback){"Enter"!==event.key&&" "!==event.key||callback&&callback()}},"./packages/sui-react/packages/components/toggle/stories/ReactToggle.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Toggle:()=>Toggle,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ReactToggle_stories});__webpack_require__("./node_modules/react/index.js");var src=__webpack_require__("./packages/sui-react/packages/components/toggle/src/index.ts"),box_src=__webpack_require__("./packages/sui-react/packages/components/box/src/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),storybook=__webpack_require__("./packages/storybook/lib/storybook.ts"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsx)(dist.E$,{children:(0,jsx_runtime.jsxs)(storybook.$0,{title:"Shhh... Not much to see here at the moment, but stay tuned!",contained:!0,children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Quiet for now, but get ready! Exciting stuff is coming. Our developers are working really hard behind the scenes to make it happen. Stay curious and excited! 🌟👷"})}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"In the meantime, feel free to explore our demo page for this component."})})]})})}const ReactToggle=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},ReactToggle_stories={title:"SUI/Components/Core/Toggle",component:src.Z,parameters:{layout:"fullscreen",docs:{page:ReactToggle}}},Toggle=({example,...args})=>(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsx)(box_src.x,{children:(0,jsx_runtime.jsx)(box_src.f,{isInline:!1,children:(0,jsx_runtime.jsx)(src.Z,{...args})})})})});Toggle.displayName="Toggle",Toggle.args={label:"Toggle Label",description:"Toggle description goes here. Lorem Ipsum is simply dummy text of the printing and typesetting industry it has been the industry's Standard.",isLabelHidden:!1,isDisabled:!1},Toggle.argTypes={label:{name:"Label",control:{type:"text"}},description:{name:"Description",control:{type:"text"}},isLabelHidden:{name:"Label hidden",control:{type:"boolean"}},isDisabled:{name:"Disabled",control:{type:"boolean"}}},Toggle.__docgenInfo={description:"",methods:[],displayName:"Toggle"};const __namedExportsOrder=["Toggle"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);