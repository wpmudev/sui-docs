/*! For license information please see sui-react-packages-components-search-stories-search-stories.0c002fa0.iframe.bundle.js.LICENSE.txt */
(self.webpackChunksui_docs=self.webpackChunksui_docs||[]).push([[8729],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise(((resolve,reject)=>{__webpack_require__.e(9433).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hw:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hw,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-links/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{kZ:()=>_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.kZ});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs");__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs")},"./node_modules/@storybook/addon-links/dist/react/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>react_default});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs"),__webpack_require__("./node_modules/react/index.js")),react_default=class extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind,title=kind,story,name=story}=this.props;if(title&&name){let href=await(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.ew)(title,name);this.setState({href})}},this.handleClick=()=>{let{kind,title=kind,story,name=story}=this.props;title&&name&&(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.c4)({title,name})}}static{this.defaultProps={children:void 0}}componentDidMount(){this.updateHref()}componentDidUpdate(prevProps){let{kind,title,story,name}=this.props;(prevProps.kind!==kind||prevProps.story!==story||prevProps.title!==title||prevProps.name!==name)&&this.updateHref()}render(){let{kind,title=kind,story,name=story,children,...rest}=this.props,{href}=this.state;return react__WEBPACK_IMPORTED_MODULE_2__.createElement("a",{href,onClick:e=>((e,cb=(_e=>{}))=>{(e=>!(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))(e)&&(e.preventDefault(),cb(e))})(e,this.handleClick),...rest},children)}}},"./packages/sui-react/packages/components/form-field/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W:()=>FormField});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/sui-react/packages/utils/src/index.ts")),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Label=function(_a){var id=_a.id,_b=_a.hidden,hidden=void 0!==_b&&_b,children=_a.children;if((0,src.xb)(null!=children?children:""))throw new Error('Empty content is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Form Field\n\nThe "Label" component requires a child element to be passed to it.\n\n');var classNames=classnames_default()({"sui-screen-reader-only":hidden,"sui-form-field__label":!hidden});return(0,jsx_runtime.jsx)("label",{htmlFor:id,id:"".concat(id,"__label"),className:classNames,children})},Helper=function(_a){var id=_a.id,children=_a.children,classNames=classnames_default()({"sui-form-field__helper":!0});return(0,jsx_runtime.jsx)("span",{id:"".concat(id,"__helper"),className:classNames,children})},ErrorMessage=function(_a){var id=_a.id,_b=_a.show,show=void 0!==_b&&_b,children=_a.children;return(0,jsx_runtime.jsx)("span",{id:"".concat(id,"__error-message"),className:"sui-form-field__helper sui-color-error--50",children:show&&children})},__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},FormField=function(_a){var id=_a.id,label=_a.label,helper=_a.helper,error=_a.error,className=_a.className,_b=_a.isSmall,isSmall=void 0!==_b&&_b,_c=_a.isDisabled,isDisabled=void 0!==_c&&_c,_d=_a.isLabelHidden,isLabelHidden=void 0!==_d&&_d,children=_a.children,props=__rest(_a,["id","label","helper","error","className","isSmall","isDisabled","isLabelHidden","children"]),errorObj=Object.assign({state:!1,text:""},error),classNames=(0,src.uY)("sui-form-field",{sm:isSmall,disabled:isDisabled},className);return(0,jsx_runtime.jsxs)("div",__assign({className:classNames},props,{children:[!(0,src.xb)(null!=label?label:"")&&(0,jsx_runtime.jsx)(Label,{id,hidden:null!=isLabelHidden&&isLabelHidden,children:label}),children,(0,src.Kn)(error)&&Object.keys(error).length>0&&errorObj.state&&(0,jsx_runtime.jsx)(ErrorMessage,{id,show:errorObj.state,small:isSmall,children:errorObj.text}),!!helper&&(0,jsx_runtime.jsx)(Helper,{id,small:isSmall,children:helper})]}))}},"./packages/sui-react/packages/components/input/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>Input});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/sui-react/packages/utils/src/index.ts"),hooks_src=__webpack_require__("./packages/sui-react/packages/hooks/src/index.ts"),Icon=function(_a){var _b,_c=_a.name,name=void 0===_c?"":_c,_d=_a.size,size=void 0===_d?"lg":_d;if((0,src.xb)(null!=name?name:""))throw new Error('Required parameter is empty. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Input\n\nThe "name" parameter in the icon element is required and must not be empty.\n\n');var classNames=(0,src.uY)("suicons",((_b={})[name]=!0,_b[size||"md"]=["sm","md","lg"].includes(size||"md"),_b.icon=!0,_b),"sui-input__icon");return(0,jsx_runtime.jsx)("span",{className:classNames,"aria-hidden":"true"})},button_src=__webpack_require__("./packages/sui-react/packages/components/button/src/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},Input=(0,react.forwardRef)((function(_a,ref){var _b,type=_a.type,defaultValue=_a.defaultValue,placeholder=_a.placeholder,hint=_a.hint,id=_a.id,className=_a.className,inputClass=_a.inputClass,_c=_a.isMultiLine,isMultiLine=void 0!==_c&&_c,_d=_a.isSmall,isSmall=void 0!==_d&&_d,_e=_a.isReadOnly,isReadOnly=void 0!==_e&&_e,_f=_a.isError,isError=void 0!==_f&&_f,_g=_a.isDisabled,isDisabled=void 0!==_g&&_g,onChange=(_a.onMouseEnter,_a.onMouseLeave,_a.onChange),icon=_a.icon,iconPosition=_a.iconPosition,_k=_a.allowClear,allowClear=void 0!==_k&&_k,_l=_a.disableInteractions,disableInteractions=void 0!==_l&&_l,props=__rest(_a,["type","defaultValue","placeholder","hint","id","className","inputClass","isMultiLine","isSmall","isReadOnly","isError","isDisabled","onMouseEnter","onMouseLeave","onChange","icon","iconPosition","allowClear","disableInteractions"]),_m=(0,react.useState)(defaultValue),value=_m[0],setValue=_m[1],_o=(0,hooks_src.X2)({}),isHovered=_o[0],isFocused=_o[1],interactionMethods=_o[2];if(!(!(0,src.o8)(id)&&!(0,src.xb)(id)))throw new Error('Empty parameter is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Input\n\nThe parameter "id" in the "Input" component is required.\n\n');(0,react.useEffect)((function(){setValue(defaultValue)}),[defaultValue]);var handleChange=(0,react.useCallback)((function(e){var _a,_b;isReadOnly||setValue(null!==(_b=null===(_a=null==e?void 0:e.target)||void 0===_a?void 0:_a.value)&&void 0!==_b?_b:""),onChange&&onChange(e)}),[isReadOnly,onChange]),onClear=(0,react.useCallback)((function(){setValue(""),onChange&&onChange("")}),[onChange]),hasValue=!(0,src.o8)(value)&&!(0,src.xb)(null!=value?value:""),hasPlaceholder=!(0,src.o8)(placeholder)&&!(0,src.xb)(placeholder),hasClassInput=!(0,src.o8)(inputClass)&&!(0,src.xb)(inputClass),inputType="text";["email","number","password","search","tel","url"].includes(type)&&(inputType=type);var classNames=(0,src.uY)("sui-input",((_b={sm:isSmall,readonly:isReadOnly,hover:isHovered&&!isReadOnly,focus:isFocused&&!isReadOnly,filled:hasValue,"has-icon":!(0,src.xb)(icon),"icon-start":!(0,src.xb)(iconPosition)&&"start"===iconPosition,"icon-end":!(0,src.xb)(iconPosition)&&"end"===iconPosition,error:isError,disabled:isDisabled})["multiline".concat(isSmall?"-sm":"")]=isMultiLine,_b),null!=className?className:""),inputClassNames=(0,src.uY)("sui-input__input",{"allow-clear":allowClear&&!(0,src.xb)(value)&&!isMultiLine},hasClassInput?inputClass:""),TagName="input";isMultiLine&&(TagName="textarea");var attrs=__assign(__assign({id,ref,type:(0,src.CI)(!isMultiLine,inputType),placeholder:(0,src.CI)(hasPlaceholder,placeholder),readOnly:(0,src.CI)(isReadOnly,!0),disabled:(0,src.CI)(isDisabled,!0),value:null!=value?value:"",className:inputClassNames,onChange:handleChange},disableInteractions?{}:interactionMethods),props),hasHintText=!(0,src.xb)(null!=hint?hint:"");return(0,jsx_runtime.jsxs)("div",{className:classNames,children:[icon&&!isMultiLine&&"start"===iconPosition&&(0,jsx_runtime.jsx)(Icon,{name:null!=icon?icon:"",size:isSmall?"md":"lg"}),(0,jsx_runtime.jsxs)("div",{className:(0,src.uY)("sui-input__input-field",{"has-hint":hasHintText}),children:[(0,jsx_runtime.jsx)(TagName,__assign({},attrs)),hasHintText&&(0,jsx_runtime.jsxs)(react.Fragment,{children:[!(0,src.xb)(value)&&(0,jsx_runtime.jsx)("div",{className:"sui-input__input-field-text",children:value}),hasHintText&&(0,jsx_runtime.jsx)("div",{className:"sui-input__input-field-hint",children:hint})]})]}),icon&&!isMultiLine&&"end"===iconPosition&&(0,jsx_runtime.jsx)(Icon,{name:null!=icon?icon:"",size:isSmall?"md":"lg"}),allowClear&&!(0,src.xb)(value)&&!isMultiLine&&(0,jsx_runtime.jsx)(button_src.zx,{className:"sui-input__input-clear",icon:"close-alt",color:"black",appearance:"tertiary",iconOnly:!0,iconSize:isSmall?"md":"lg",onClick:onClear,isSmall,onKeyDown:function(e){return(0,src.Jw)(e,onClear)},children:"Clear"})]})}));Input.displayName="Input"},"./packages/sui-react/packages/components/search/stories/search.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Search:()=>search_stories_Search,__namedExportsOrder:()=>__namedExportsOrder,default:()=>search_stories});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src=__webpack_require__("./packages/sui-react/packages/components/input/src/index.ts"),utils_src=__webpack_require__("./packages/sui-react/packages/utils/src/index.ts"),hooks_src=__webpack_require__("./packages/sui-react/packages/hooks/src/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},SearchOptionItem=function(_a){var children=_a.children,option=_a.option,onClick=_a.onClick,_b=(0,hooks_src.X2)({}),isHovered=_b[0],isFocused=_b[1],methods=_b[2],className=(0,utils_src.uY)("sui-search__options-item",{hover:isHovered&&!isFocused,focus:isFocused}),handleOnClick=(0,react.useCallback)((function(){onClick(option)}),[onClick,option]);return(0,jsx_runtime.jsx)("button",__assign({role:"menuitem",className,onClick:handleOnClick,onKeyDown:function(e){return(0,utils_src.Jw)(e,handleOnClick)}},methods,{children}))},SearchOptions=function(_a){var options=_a.options,value=_a.value,setValue=_a.setValue,setIsPopoverVisible=_a.setIsPopoverVisible,className=(0,utils_src.uY)("sui-search__options",{}),onOptionClick=(0,react.useCallback)((function(option){setIsPopoverVisible(!1),setValue(option)}),[setIsPopoverVisible,setValue]);return(null==options?void 0:options.length)<=0?(0,jsx_runtime.jsx)("div",{className:"sui-search__hint",children:(0,jsx_runtime.jsx)("span",{children:"No result was found"})}):(0,jsx_runtime.jsx)("div",{role:"menu",className,children:null==options?void 0:options.map((function(option,index){return(0,jsx_runtime.jsxs)(SearchOptionItem,{option,onClick:onOptionClick,children:[!(0,utils_src.xb)(value)&&(0,jsx_runtime.jsx)("span",{children:value}),null==option?void 0:option.replace(value,"")]},index)}))})},search_assign=function(){return search_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},search_assign.apply(this,arguments)},Search=function(_a){var _b,_c,id=_a.id,className=_a.className,_d=_a.variation,variation=void 0===_d?"":_d,defaultValue=_a.defaultValue,_e=_a.options,options=void 0===_e?[]:_e,_f=_a.onChange,onChange=void 0===_f?function(){}:_f,_g=_a.allowClear,allowClear=void 0===_g||_g,_h=_a.searchMinChars,searchMinChars=void 0===_h?2:_h,_j=_a.searchHint,searchHint=void 0===_j?"Please enter #number# or more characters":_j,_k=_a.isDisabled,isDisabled=void 0!==_k&&_k,_l=(0,react.useState)(null!==(_b=defaultValue)&&void 0!==_b?_b:""),value=_l[0],setValue=_l[1],_m=(0,react.useState)(!1),isPopoverVisible=_m[0],setIsPopoverVisible=_m[1],inputId=(0,react.useId)();inputId=null!=id?id:"sui-search-".concat(inputId);var searchRef=(0,react.useRef)(null),inputRef=(0,react.useRef)(null),_o=(0,hooks_src.X2)({}),isHovered=_o[0],isFocused=_o[1],methods=_o[2],isFiltered=(null==value?void 0:value.length)>=searchMinChars,classNames=(0,utils_src.uY)("sui-search",{focus:isFocused||isPopoverVisible,hover:isHovered&&!isFocused,disabled:isDisabled},className),onInputChange=(0,react.useCallback)((function(e){var _a,val=e?null===(_a=null==e?void 0:e.target)||void 0===_a?void 0:_a.value:"";setValue(val)}),[]),onInputFocus=(0,react.useCallback)((function(){setIsPopoverVisible(!0)}),[]);(0,hooks_src.rw)(searchRef,(function(){setIsPopoverVisible(!1)})),(0,react.useEffect)((function(){setValue(defaultValue)}),[defaultValue]),(0,react.useEffect)((function(){onChange&&onChange(null!=value?value:"")}),[onChange,value]);var filteredOptions=isFiltered?options.filter((function(option){return option.startsWith(value)})):options,onInputKeyDown=(0,react.useCallback)((function(e){"ArrowRight"===e.code&&setValue(null==filteredOptions?void 0:filteredOptions[0])}),[filteredOptions]),inputProps={};return"smart"===variation&&(inputProps.hint=null!==(_c=isFiltered&&(null==filteredOptions?void 0:filteredOptions[0]))&&void 0!==_c?_c:"",inputProps.onFocus=onInputFocus,inputProps.onKeyDown=onInputKeyDown),(0,jsx_runtime.jsxs)("div",search_assign({ref:searchRef,className:classNames},methods,{children:[(0,jsx_runtime.jsx)(src.I,search_assign({ref:inputRef,tabIndex:-1,className:"sui-search__input-field",id:inputId,icon:"search",iconPosition:"start",onChange:onInputChange,defaultValue:value,allowClear,disableInteractions:!0,isDisabled},inputProps)),isPopoverVisible&&"smart"===variation&&(0,jsx_runtime.jsx)("div",{className:"sui-search__popover",children:isFiltered?(0,jsx_runtime.jsx)(SearchOptions,{options:filteredOptions,value,setValue,setIsPopoverVisible}):(0,jsx_runtime.jsx)("div",{className:"sui-search__hint",children:(0,jsx_runtime.jsx)("span",{children:searchHint.replace("#number#",searchMinChars)})})})]}))},form_field_src=__webpack_require__("./packages/sui-react/packages/components/form-field/src/index.ts"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),storybook=__webpack_require__("./packages/storybook/lib/storybook.ts"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){return storybook.T3||_missingMdxReference("Page",!1),storybook.T3.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsx)(dist.E$,{children:(0,jsx_runtime.jsx)(storybook.T3.Tabs,{title:"Search",subtitle:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"An search is a thumbnail that represents a user or organization on the SUI platform."}),status:"draft"})})}function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const search_stories={title:"SUI/Components/Core/Search",component:Search,parameters:{layout:"fullscreen",docs:{page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent()}}}},options=["United States","Canada","United Kingdom","Australia","Germany","France","Japan","Brazil","India","China","South Korea","Mexico","Russia","Italy","Argentina","South Africa","Egypt","Turkey","New Zealand"],search_stories_Search=({example,...props})=>(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsx)("div",{style:{padding:"20px",backgroundColor:"white"},children:(0,jsx_runtime.jsx)(form_field_src.W,{id:"countries-list",label:"Select country",isSmall:!0,children:(0,jsx_runtime.jsx)(Search,{...props,options})})})})});search_stories_Search.displayName="Search",search_stories_Search.args={variation:"basic",allowClear:!0,searchMinChars:2,defaultValue:"",isDisabled:!1},search_stories_Search.argTypes={variation:{name:"Variation",options:["basic","smart"],control:{type:"select",labels:{basic:"Basic Search",smart:"Smart Search"}}},defaultValue:{name:"Default Value",control:{type:"text"}},allowClear:{name:"Allow Clear",control:{type:"boolean"}},searchMinChars:{name:"Minimum characters",control:{type:"number"}},isDisabled:{name:"Disabled",control:{type:"boolean"}}},search_stories_Search.__docgenInfo={description:"",methods:[],displayName:"Search"};const __namedExportsOrder=["Search"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);