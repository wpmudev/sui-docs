/*! For license information please see 9645.4e08f22e.iframe.bundle.js.LICENSE.txt */
(self.webpackChunksui_docs=self.webpackChunksui_docs||[]).push([[9645],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/sui-react/packages/components/accordion/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{UQ:()=>Accordion,Qd:()=>AccordionItem,N1:()=>AccordionItemBody,uA:()=>AccordionItemFooter});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/sui-react/packages/utils/src/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},Accordion=function(_a){var _b,className=_a.className,state=_a.state,_c=_a.noBorderRadius,noBorderRadius=void 0!==_c&&_c,_d=_a.noSideBorders,noSideBorders=void 0!==_d&&_d,props=__rest(_a,["className","state","noBorderRadius","noSideBorders"]),classNames=(0,src.uY)("sui-accordion",((_b={})[state]=!(0,src.xb)(null!=state?state:""),_b["no-border-radius"]=noBorderRadius,_b["no-side-borders"]=noSideBorders,_b),className);return(0,jsx_runtime.jsx)("div",__assign({className:classNames},props))},hooks_src=__webpack_require__("./packages/sui-react/packages/hooks/src/index.ts"),components=__webpack_require__("./packages/sui-icons/src/components/index.ts"),checkbox_src=__webpack_require__("./packages/sui-react/packages/components/checkbox/src/index.ts"),accordion_item_assign=function(){return accordion_item_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},accordion_item_assign.apply(this,arguments)},accordion_item_rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},AccordionItem=function(_a){var _b,title=_a.title,description=_a.description,children=_a.children,isDisabled=_a.isDisabled,icon=_a.icon,hasCheckbox=_a.hasCheckbox,onCheck=_a.onCheck,props=accordion_item_rest(_a,["title","description","children","isDisabled","icon","hasCheckbox","onCheck"]),_c=(0,react.useState)(null!==(_b=null==props?void 0:props.isExpanded)&&void 0!==_b&&_b),isExpanded=_c[0],setIsExpanded=_c[1],uniqueId=(0,react.useId)(),accordionId="sui-accordion-".concat(uniqueId),accordionPanelId="sui-accordion-panel-".concat(uniqueId),_d=(0,hooks_src.X2)({}),isHovered=_d[0],isFocused=_d[1],interactionMethods=_d[2],onCheckBoxChange=(0,react.useCallback)((function(e){e.stopPropagation(),e.preventDefault(),onCheck&&onCheck(isExpanded)}),[isExpanded,onCheck]),toggle=(0,react.useCallback)((function(){setIsExpanded(!isExpanded)}),[isExpanded]),Icon=isExpanded?components.ChevronUp:components.ChevronDown;return(0,jsx_runtime.jsxs)("div",accordion_item_assign({className:(0,src.uY)("sui-accordion__item",{expanded:isExpanded,hover:isHovered,focus:isFocused,disabled:isDisabled})},null!=interactionMethods?interactionMethods:{},{children:[(0,jsx_runtime.jsxs)("div",{tabIndex:isDisabled?-1:0,role:"button",id:accordionId,"aria-expanded":isExpanded,"aria-controls":accordionPanelId,className:"sui-accordion__header",onClick:toggle,onKeyDown:function(e){e.stopPropagation(),(0,src.Jw)(e,toggle)},children:[(0,jsx_runtime.jsxs)("div",{className:"sui-accordion__header-info",children:[(!!hasCheckbox||!!icon)&&(0,jsx_runtime.jsxs)("div",{className:"sui-accordion__header-actions",children:[hasCheckbox&&(0,jsx_runtime.jsx)(checkbox_src.X,{onChange:onCheckBoxChange,isDisabled:null!=isDisabled&&isDisabled}),!!icon&&icon]}),(0,jsx_runtime.jsxs)("div",{className:"sui-accordion__header-title",children:[(0,jsx_runtime.jsx)("h2",{children:title}),!(0,src.xb)(null!=description?description:"")&&(0,jsx_runtime.jsx)("p",{children:description})]})]}),(0,jsx_runtime.jsx)("div",{className:"sui-accordion__header-icon",children:(0,jsx_runtime.jsx)(Icon,{height:16,width:16})})]}),(0,jsx_runtime.jsx)("div",{role:"region",id:accordionPanelId,"aria-labelledby":accordionId,className:"sui-accordion__panel",children:(0,jsx_runtime.jsx)("div",{className:"sui-accordion__panel--content",children})})]}))},box_src=__webpack_require__("./packages/sui-react/packages/components/box/src/index.ts"),AccordionItemBody=function(_a){var children=_a.children;return(0,jsx_runtime.jsx)("div",{className:"sui-accordion__item--body",children:(0,jsx_runtime.jsx)(box_src.x,{children:(0,jsx_runtime.jsx)(box_src.f,{isInline:!1,children})})})},AccordionItemFooter=function(_a){var children=_a.children;return(0,jsx_runtime.jsx)("div",{className:"sui-accordion__item--footer",children:(0,jsx_runtime.jsx)(box_src.x,{children:(0,jsx_runtime.jsx)(box_src.f,{isInline:!1,children})})})}},"./packages/sui-react/packages/components/box/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{x:()=>Box,f:()=>BoxGroup});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/sui-react/packages/utils/src/index.ts"),BoxGroup=function(_a){var _b=_a.isInline,isInline=void 0===_b||_b,children=_a.children,_c=_a.isHeader,isHeader=void 0!==_c&&_c,_d=_a.isFooter,isFooter=void 0!==_d&&_d,slots=react.Children.map(children,(function(child,index){var _a,_b=null!==(_a=null==child?void 0:child.props)&&void 0!==_a?_a:{},slot=_b.slot,content=_b.children;return(0,src.Kn)(child)&&["left","right"].includes(null!=slot?slot:"")?(0,jsx_runtime.jsx)("div",{className:"sui-box-group__slot sui-box-group__".concat(slot),children:content},"sui-box-group--".concat(index)):(0,jsx_runtime.jsx)(react.Fragment,{children:child},"sui-box-group--".concat(index))})),classNames=(0,src.uY)("sui-box-group",{inline:isInline,header:isHeader,footer:isFooter});return(0,jsx_runtime.jsx)("div",{className:classNames,children:slots})},__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},Box=function(_a){var _b,title=_a.title,icon=_a.icon,_c=_a.hideMobileIcon,hideMobileIcon=void 0!==_c&&_c,headerLeft=_a.headerLeft,headerRight=_a.headerRight,children=_a.children,isSmall=_a.isSmall,_d=_a.className,className=void 0===_d?"":_d,_e=_a.style,style=void 0===_e?{}:_e,hasTitle=!(0,src.o8)(title)&&!(0,src.xb)(title),hasIcon=!(0,src.o8)(icon)&&!(0,src.xb)(icon),hasLeft=!(0,src.o8)(headerRight)&&!(0,src.xb)(headerLeft),hasRight=!(0,src.o8)(headerRight)&&!(0,src.xb)(headerRight),classNames=(0,src.uY)("sui-box",{"size-sm":isSmall},className);return(0,jsx_runtime.jsxs)("div",{className:classNames,style:null!=style?style:{},children:[hasTitle&&(0,jsx_runtime.jsxs)(BoxGroup,{isInline:!0,children:[(0,jsx_runtime.jsxs)("div",{slot:"left",children:[hasIcon&&(0,jsx_runtime.jsx)("span",{className:(0,src.uY)("suicons",(_b={},_b[icon]=!0,_b.lg=!0,_b),hideMobileIcon?"sui-box-group__item sui-icon--hide-sm":"sui-box-group__item"),"aria-hidden":"true"}),hasTitle&&(0,jsx_runtime.jsx)("h2",{className:"sui-heading sui-heading--h3 sui-box-group__item",children:title}),hasLeft&&headerLeft]}),(0,jsx_runtime.jsx)("div",__assign({},hasRight&&{slot:"right"},{children:hasRight&&headerRight}))]}),children]})}},"./packages/sui-react/packages/components/checkbox/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>Checkbox});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/sui-react/packages/hooks/src/index.ts"),utils_src=__webpack_require__("./packages/sui-react/packages/utils/src/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},Tick=function(_a){var props=__rest(_a,[]);return(0,jsx_runtime.jsx)("span",__assign({},props,{children:(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 12 10",fill:"none",className:"sui-checkbox__icon",children:(0,jsx_runtime.jsx)("path",{d:"M4.23784 9.08831L0.337838 5.16588C0.103533 4.93023 0.103533 4.54815 0.337838 4.31247L1.18635 3.45906C1.42065 3.22338 1.80057 3.22338 2.03488 3.45906L4.66211 6.10137L9.96507 0.91168C10.1994 0.676028 10.5793 0.676028 10.8136 0.91168L11.6621 1.76509C11.8964 2.00074 11.8964 2.38283 11.6621 2.6185L5.08637 9.08833C4.85205 9.32398 4.47215 9.32398 4.23784 9.08831Z"})})}))},indeterminate_assign=function(){return indeterminate_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},indeterminate_assign.apply(this,arguments)},indeterminate_rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},Indeterminate=function(_a){var props=indeterminate_rest(_a,[]);return(0,jsx_runtime.jsx)("span",indeterminate_assign({},props,{children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"2",viewBox:"-1 0 12 3",fill:"none",className:"sui-checkbox__icon",children:(0,jsx_runtime.jsx)("path",{d:"M9.7 0H0.3C0.134315 0 0 0.134315 0 0.3V1.7C0 1.86569 0.134315 2 0.3 2H9.7C9.86569 2 10 1.86569 10 1.7V0.3C10 0.134315 9.86569 0 9.7 0Z",fill:"white"})})}))},checkbox_assign=function(){return checkbox_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},checkbox_assign.apply(this,arguments)},Checkbox=(0,react.forwardRef)((function(_a,ref){var label=_a.label,_b=_a.isLabelHidden,isLabelHidden=void 0!==_b&&_b,_c=_a.isSmall,isSmall=void 0!==_c&&_c,_d=_a.isDisabled,isDisabled=void 0!==_d&&_d,_e=_a.isChecked,propIsChecked=void 0!==_e&&_e,_f=_a.isIndeterminate,isIndeterminate=void 0!==_f&&_f,_g=_a.onChange,onChange=void 0===_g?function(){}:_g,_h=(0,react.useState)(null!=propIsChecked&&propIsChecked),isChecked=_h[0],setIsChecked=_h[1];(0,react.useEffect)((function(){var _a;setIsChecked(null!==(_a=propIsChecked||isIndeterminate)&&void 0!==_a&&_a)}),[propIsChecked,isIndeterminate]);var id=(0,react.useId)(),_j=(0,src.X2)({}),isHovered=_j[0],isFocused=_j[1],interactionMethods=_j[2],handleOnChange=(0,react.useCallback)((function(e){onChange&&onChange(e)}),[onChange]),boxProps={tabIndex:-1,className:"sui-checkbox__box","aria-hidden":!0};return(0,jsx_runtime.jsxs)("label",checkbox_assign({htmlFor:id,className:(0,utils_src.uY)("sui-checkbox",{"hidden-label":isLabelHidden,disabled:isDisabled,indeterminate:isIndeterminate,sm:isSmall,hover:isHovered,focus:isFocused,checked:isChecked})},interactionMethods,{children:[(0,jsx_runtime.jsx)("input",{ref,id,type:"checkbox",className:"sui-screen-reader-only",disabled:isDisabled,checked:isChecked||isIndeterminate,onChange:handleOnChange}),isIndeterminate?(0,jsx_runtime.jsx)(Indeterminate,checkbox_assign({},boxProps)):(0,jsx_runtime.jsx)(Tick,checkbox_assign({},boxProps)),isLabelHidden?(0,jsx_runtime.jsx)("span",{className:"sui-screen-reader-only",children:label}):label]}))}));Checkbox.displayName="Checkbox"},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);