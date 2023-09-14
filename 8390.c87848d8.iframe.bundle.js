"use strict";(self.webpackChunksui_docs=self.webpackChunksui_docs||[]).push([[8390],{"./packages/sui-react/packages/components/button/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{zx:()=>button_standard_Button,fl:()=>LoadingButton,CO:()=>ToggleButton});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/sui-react/packages/hooks/src/index.ts"),utils_src=__webpack_require__("./packages/sui-react/packages/utils/src/index.ts"),Label=function(_a){var _b=_a.hidden,hidden=void 0!==_b&&_b,children=_a.children;if((0,utils_src.o8)(hidden)&&!(0,utils_src.jn)(hidden))throw new Error('Incorrect parameter type. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe parameter "hidden" used in the label element is not a boolean type.\n\n');return(0,jsx_runtime.jsxs)(react.Fragment,{children:[hidden&&(0,jsx_runtime.jsx)("span",{className:"sui-screen-reader-only",tabIndex:-1,children}),!hidden&&(0,jsx_runtime.jsx)("span",{className:"sui-button__label",children})]})},Icon=function(_a){var _b,_c=_a.name,name=void 0===_c?"":_c,_d=_a.size,size=void 0===_d?"md":_d;if(!(!(0,utils_src.o8)(name)&&!(0,utils_src.xb)(null!=name?name:"")))throw new Error('Required parameter is empty. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe "name" parameter in the icon element is required and must not be empty.\n\n');var classNames=(0,utils_src.uY)("suicons",((_b={})[name]=!(0,utils_src.xb)(name),_b[size]=!0,_b));return(0,jsx_runtime.jsx)("span",{className:"sui-button__icon","aria-hidden":"true",children:(0,jsx_runtime.jsx)("span",{className:classNames})})},__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},Button=(0,react.forwardRef)((function(_a,ref){var _b,href=_a.href,target=_a.target,htmlFor=_a.htmlFor,appearance=_a.appearance,color=_a.color,_c=_a.isSmall,isSmall=void 0!==_c&&_c,_d=_a.isFullWidth,isFullWidth=void 0!==_d&&_d,_e=_a.isDisabled,isDisabled=void 0!==_e&&_e,_f=_a.isUnwrapped,isUnwrapped=void 0!==_f&&_f,className=_a.className,children=_a.children,icon=_a.icon,_g=_a.startIcon,startIcon=void 0===_g?icon:_g,_h=_a.endIcon,endIcon=void 0===_h?"":_h,_j=_a.iconOnly,iconOnly=void 0!==_j&&_j,_k=_a.iconSize,iconSize=void 0===_k?"md":_k,_l=_a.isResponsive,isResponsive=void 0!==_l&&_l,restProps=__rest(_a,["href","target","htmlFor","appearance","color","isSmall","isFullWidth","isDisabled","isUnwrapped","className","children","icon","startIcon","endIcon","iconOnly","iconSize","isResponsive"]),_m=(0,src.X2)({onMouseEnter:null==restProps?void 0:restProps.onMouseEnter,onMouseLeave:null==restProps?void 0:restProps.onMouseLeave,onFocus:null==restProps?void 0:restProps.onFocus,onBlur:null==restProps?void 0:restProps.onBlur}),isHovered=_m[0],isFocused=_m[1],interactionMethods=_m[2],isLink=!(0,utils_src.o8)(href),label=!(0,utils_src.o8)(htmlFor),isStartIcon=!(0,utils_src.xb)(null!=startIcon?startIcon:""),isEndIcon=!(0,utils_src.xb)(null!=endIcon?endIcon:""),attrClasses=((_b={sm:isSmall,hover:isHovered,focus:isFocused,disabled:isDisabled,"full-width":isFullWidth,"is-icon":(startIcon||endIcon)&&iconOnly})["".concat(appearance,"-").concat(color)]=!!appearance&&!!color,_b.inline=iconOnly&&!appearance,_b.responsive=isResponsive,_b),attrs=__assign(__assign({ref,href:isLink&&href?href:void 0,target:target||"_blank",htmlFor:(0,utils_src.CI)(label),className:(0,utils_src.uY)("sui-button",attrClasses,null!=className?className:""),disabled:isDisabled},null!=interactionMethods?interactionMethods:{}),restProps),TagName=isLink?"a":"button";return htmlFor&&(TagName="label"),(0,jsx_runtime.jsxs)(TagName,__assign({},attrs,{children:[isStartIcon&&(0,jsx_runtime.jsx)(Icon,{name:null!=startIcon?startIcon:"",size:iconSize}),isUnwrapped&&children,!isUnwrapped&&(0,jsx_runtime.jsx)(Label,__assign({},iconOnly&&{hidden:!0},{children})),isEndIcon&&(0,jsx_runtime.jsx)(Icon,{name:null!=endIcon?endIcon:"",size:iconSize})]}))}));Button.displayName="Button";var button_standard_assign=function(){return button_standard_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},button_standard_assign.apply(this,arguments)},button_standard_rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},button_standard_Button=function(_a){var children=_a.children,props=button_standard_rest(_a,["children"]);return(0,jsx_runtime.jsx)(Button,button_standard_assign({},props,{children}))},Loader=function(_a){var children=_a.children,className=(0,utils_src.uY)("suicons",{md:!0,"spinner-alt":!0,spin:!0});return(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("span",{className:"sui-button__icon","aria-hidden":"true",children:(0,jsx_runtime.jsx)("span",{className})}),(0,jsx_runtime.jsx)("span",{className:"sui-screen-reader-only",tabIndex:-1,children:children||"Loading"})]})},button_loading_assign=function(){return button_loading_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},button_loading_assign.apply(this,arguments)},button_loading_rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},LoadingButton=function(_a){var _b=_a.isLoading,isLoading=void 0!==_b&&_b,className=_a.className,children=_a.children,props=button_loading_rest(_a,["isLoading","className","children"]),classNames=(0,utils_src.uY)("sui-button",{loading:isLoading},null!=className?className:"");return(0,jsx_runtime.jsxs)(Button,button_loading_assign({className:classNames,"aria-live":"polite","aria-busy":isLoading},props,{isUnwrapped:isLoading,children:[isLoading&&(0,jsx_runtime.jsx)(Loader,{}),!isLoading&&children]}))},button_toggle_assign=function(){return button_toggle_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},button_toggle_assign.apply(this,arguments)},button_toggle_rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},ToggleButton=function(_a){var href=_a.href,htmlFor=_a.htmlFor,appearance=_a.appearance,color=_a.color,_b=_a.isSmall,isSmall=void 0!==_b&&_b,_c=_a.isDisabled,isDisabled=void 0!==_c&&_c,_d=_a.isSelected,isSelected=void 0!==_d&&_d,className=_a.className,icon=_a.icon,children=_a.children,onClick=_a.onClick,props=button_toggle_rest(_a,["href","htmlFor","appearance","color","isSmall","isDisabled","isSelected","className","icon","children","onClick"]),isLink=!(0,utils_src.o8)(href),isLabel=!(0,utils_src.o8)(htmlFor)&&!(0,utils_src.xb)(htmlFor);if(isLink)throw new Error('Invalid parameter. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe parameter "href" is not supported by this component since toggle elements cannot be a link. Use default or label button instead.');var _e=(0,react.useState)(isSelected),isChecked=_e[0],setIsChecked=_e[1],handleChange=(0,react.useCallback)((function(){setIsChecked(!isChecked)}),[isChecked]),classNames=(0,utils_src.uY)("sui-button",{selected:isSelected},className);return(0,jsx_runtime.jsxs)(Button,button_toggle_assign({},isLabel&&{htmlFor},{appearance,color,isSmall:!!isSmall,isDisabled:!!isDisabled,startIcon:null!=icon?icon:"",className:classNames},(0,utils_src.mf)(onClick)&&{onClick},!isLabel&&{"aria-pressed":isSelected},!isLabel&&button_toggle_assign({},props),{children:[isLabel&&(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("input",button_toggle_assign({id:htmlFor,className:"sui-screen-reader-only",type:"checkbox",tabIndex:isChecked?0:-1,checked:isChecked,onChange:handleChange},isDisabled&&{disabled:isDisabled},props)),children]}),!isLabel&&children]}))}},"./packages/sui-react/packages/hooks/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p4:()=>useDetectRTL,Y9:()=>useDragAndDrop,X2:()=>useInteraction,rw:()=>useOuterClick,vI:()=>usePortal,GT:()=>useValidateProps});var react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/sui-react/packages/utils/src/index.ts"),useInteraction=function(methods){var _a=(0,react.useState)(!1),isHovered=_a[0],setIsHovered=_a[1],_b=(0,react.useState)(!1),isFocused=_b[0],setIsFocused=_b[1],_c=methods,onMouseEnter=_c.onMouseEnter,onMouseLeave=_c.onMouseLeave,onMouseDownCapture=_c.onMouseDownCapture,onMouseUpCapture=_c.onMouseUpCapture,onFocus=_c.onFocus,onBlur=_c.onBlur,onBlurCapture=_c.onBlurCapture,toggleHover=(0,react.useCallback)((function(state,event,callback){void 0===event&&(event=null),void 0===callback&&(callback=function(e){}),setIsHovered(state),(0,src.mf)(callback)&&callback(event)}),[]),toggleFocus=(0,react.useCallback)((function(state,event,callback){void 0===event&&(event=null),void 0===callback&&(callback=function(e){}),setIsFocused(state),(0,src.mf)(callback)&&callback(event)}),[]),onMouseEnterCallback=(0,react.useCallback)((function(e){return toggleHover(!0,e,onMouseEnter)}),[onMouseEnter,toggleHover]),onMouseLeaveCallback=(0,react.useCallback)((function(e){return toggleHover(!1,e,onMouseLeave)}),[onMouseLeave,toggleHover]),onMouseDownCaptureCallback=(0,react.useCallback)((function(e){return toggleFocus(!1,e,onMouseDownCapture)}),[onMouseDownCapture,toggleFocus]),onMouseUpCaptureCallback=(0,react.useCallback)((function(e){return toggleFocus(!0,e,onMouseUpCapture)}),[onMouseUpCapture,toggleFocus]),onBlurCaptureCallback=(0,react.useCallback)((function(e){return toggleHover(!1,e,onBlurCapture)}),[onBlurCapture,toggleHover]),onBlurCallback=(0,react.useCallback)((function(e){return toggleFocus(!1,e,onBlur)}),[onBlur,toggleFocus]);return[isHovered,isFocused,{onMouseEnter:onMouseEnterCallback,onMouseLeave:onMouseLeaveCallback,onMouseDownCapture:onMouseDownCaptureCallback,onMouseUpCapture:onMouseUpCaptureCallback,onFocus:(0,react.useCallback)((function(e){return toggleFocus(!0,e,onFocus)}),[onFocus,toggleFocus]),onBlur:onBlurCallback,onBlurCapture:onBlurCaptureCallback},toggleHover,toggleFocus]},useOuterClick=function(ref,callback){void 0===callback&&(callback=function(){});var onPageClick=(0,react.useCallback)((function(event){(null==ref?void 0:ref.current)&&!(null==ref?void 0:ref.current.contains(event.target))&&callback()}),[callback,ref]);(0,react.useEffect)((function(){return document.addEventListener("click",onPageClick),function(){document.removeEventListener("click",onPageClick)}}))},react_dom=__webpack_require__("./node_modules/react-dom/index.js"),usePortal=function(wrapperId){var _a=(0,react.useState)(null),wrapperElement=_a[0],setWrapperElement=_a[1];wrapperId=null!=wrapperId?wrapperId:".sui-wrap",(0,react.useLayoutEffect)((function(){var el=document.querySelector(wrapperId),systemCreated=!1;return el||(systemCreated=!0,el=function(wrapperId){var wrapperElement=document.createElement("div");return wrapperElement.setAttribute("id",wrapperId),document.body.appendChild(wrapperElement),wrapperElement}(wrapperId)),setWrapperElement(el),function(){systemCreated&&(null==el?void 0:el.parentNode)&&el.parentNode.removeChild(el)}}),[wrapperId]);return[function(children){return null===wrapperElement?null:(0,react_dom.createPortal)(children,wrapperElement)}]},useValidateProps=function(_a){var _b,propsToCheck=_a.propsToCheck,component=_a.component,componentName=(null==component?void 0:component.displayName)||(null==component?void 0:component.name);null===(_b=Object.keys(propsToCheck))||void 0===_b||_b.forEach((function(propKey,index){var _a;if(!!(0,src.xb)(null!==(_a=null==propsToCheck?void 0:propsToCheck[propKey])&&void 0!==_a?_a:""))throw new Error("Empty content is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 SUI 3 React - Components: ".concat(componentName,'\n\nThe "').concat(propKey,'" argument requires some value to be passed to it.\n\n'))}))},useDragAndDrop=function(_a){var containerRef=_a.containerRef,methods=_a.methods,_b=(0,react.useState)(),node=_b[0],setNode=_b[1],_c=(0,react.useState)(!1),isDragging=_c[0],setIsDragging=_c[1];return(0,react.useEffect)((function(){setNode(null==containerRef?void 0:containerRef.current)}),[containerRef]),(0,react.useEffect)((function(){var onDragOver=function(e){e.preventDefault(),e.stopPropagation(),setIsDragging(!0),(null==methods?void 0:methods.onDragOver)&&(null==methods||methods.onDragOver(e))},onDrop=function(e){e.preventDefault(),e.stopPropagation(),setIsDragging(!1),(null==methods?void 0:methods.onDrop)&&(null==methods||methods.onDrop(e))};return null==node||node.addEventListener("dragover",onDragOver,!1),null==node||node.addEventListener("drop",onDrop,!1),function(){null==node||node.removeEventListener("dragover",onDragOver,!1),null==node||node.removeEventListener("drop",onDrop,!1)}}),[containerRef,node,methods]),[isDragging]},useDetectRTL=function(){var _a=(0,react.useState)(!1),isRTL=_a[0],setIsRTL=_a[1];return(0,react.useEffect)((function(){var updateRTL=function(){var isDocumentRTL="rtl"===document.documentElement.getAttribute("dir");setIsRTL(isDocumentRTL)};updateRTL();var mutationObserver=new MutationObserver(updateRTL);return mutationObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}),function(){mutationObserver.disconnect()}}),[]),isRTL}},"./packages/sui-react/packages/utils/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{CI:()=>condContent,F3:()=>chunkArray,HD:()=>isString,Jw:()=>handleOnKeyDown,Kn:()=>isObject,c7:()=>capitalizeText,h4:()=>PluginsIcons,hj:()=>isNumber,jn:()=>isBoolean,kJ:()=>isArray,mf:()=>isFunction,o8:()=>isUndefined,uY:()=>generateCN,wW:()=>handleEventDefault,xb:()=>isEmpty});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),generateCN=function(base,variants,extraClassNames){void 0===variants&&(variants={}),void 0===extraClassNames&&(extraClassNames="");var classes=Object.keys(variants).map((function(attr){var _a;return(_a={})["".concat(base,"--").concat(attr)]=!!variants[attr],_a}));return classnames__WEBPACK_IMPORTED_MODULE_0___default()(base,classes,extraClassNames)},condContent=function(condition,content,fallback){return void 0===content&&(content=null),void 0===fallback&&(fallback=void 0),isNull(content)&&(content=condition),condition?content:fallback},isNull=function(value){return null===value},isUndefined=function(value){return void 0===value},isObject=function(value){return"object"==typeof value&&!Array.isArray(value)},isArray=function(value){return Array.isArray(value)},isBoolean=function(value){return"boolean"==typeof value},isNumber=function(value){return"number"==typeof value||!Number.isNaN(value)},isFunction=function(value){return"function"==typeof value},isString=function(value){return"string"==typeof value},isEmpty=function(value){return""===value},capitalizeText=function(string){var _a;return(null===(_a=null==string?void 0:string.charAt(0))||void 0===_a?void 0:_a.toUpperCase())+(null==string?void 0:string.slice(1))},handleOnKeyDown=function(event,callback){"Enter"!==event.key&&" "!==event.key||callback&&callback()},handleEventDefault=function(e,stopPropagation,preventDefault){stopPropagation&&(null==e||e.stopPropagation()),preventDefault&&(null==e||e.preventDefault())},PluginsIcons={smush:{bg:"#2dc4e0",color:"#FFF",icon:"PluginSmush"},defender:{bg:"#282a2c",color:"#FFF",icon:"PluginDefender"},snapshot:{bg:"#1a325e",color:"#FFF",icon:"PluginSnapshot"},hummingbird:{bg:"#ff8e3c",color:"#FFF",icon:"PluginHummingbird"},forminator:{bg:"#1f2852",color:"#FFF",icon:"PluginForminator"},beehive:{bg:"#013aa9",color:"#FFF",icon:"PluginBeehive"},hustle:{bg:"#1a1a1a",color:"#FFF",icon:"PluginHustle"},smartcrawl:{bg:"#de240a",color:"#FFF",icon:"PluginSmartCrawl"},shipper:{bg:"#7b5499",color:"#FFF",icon:"PluginShipper"},branda:{bg:"#ff8184",color:"#FFF",icon:"PluginBranda"}},chunkArray=function(arr,size){for(var chunkedArray=[],i=0;i<arr.length;i+=size){var chunk=arr.slice(i,i+size);chunkedArray.push(chunk)}return chunkedArray}}}]);