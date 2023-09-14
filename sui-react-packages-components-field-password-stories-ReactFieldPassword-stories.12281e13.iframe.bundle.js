/*! For license information please see sui-react-packages-components-field-password-stories-ReactFieldPassword-stories.12281e13.iframe.bundle.js.LICENSE.txt */
(self.webpackChunksui_docs=self.webpackChunksui_docs||[]).push([[500],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise(((resolve,reject)=>{__webpack_require__.e(9433).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hw:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hw,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-links/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{kZ:()=>_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.kZ});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs");__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs")},"./node_modules/@storybook/addon-links/dist/react/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>react_default});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs"),__webpack_require__("./node_modules/react/index.js")),react_default=class extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind,title=kind,story,name=story}=this.props;if(title&&name){let href=await(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.ew)(title,name);this.setState({href})}},this.handleClick=()=>{let{kind,title=kind,story,name=story}=this.props;title&&name&&(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.c4)({title,name})}}static{this.defaultProps={children:void 0}}componentDidMount(){this.updateHref()}componentDidUpdate(prevProps){let{kind,title,story,name}=this.props;(prevProps.kind!==kind||prevProps.story!==story||prevProps.title!==title||prevProps.name!==name)&&this.updateHref()}render(){let{kind,title=kind,story,name=story,children,...rest}=this.props,{href}=this.state;return react__WEBPACK_IMPORTED_MODULE_2__.createElement("a",{href,onClick:e=>((e,cb=(_e=>{}))=>{(e=>!(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))(e)&&(e.preventDefault(),cb(e))})(e,this.handleClick),...rest},children)}}},"./packages/sui-react/packages/components/form-field/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W:()=>FormField});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/sui-react/packages/utils/src/index.ts")),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Label=function(_a){var id=_a.id,_b=_a.hidden,hidden=void 0!==_b&&_b,children=_a.children;if((0,src.xb)(null!=children?children:""))throw new Error('Empty content is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Form Field\n\nThe "Label" component requires a child element to be passed to it.\n\n');var classNames=classnames_default()({"sui-screen-reader-only":hidden,"sui-form-field__label":!hidden});return(0,jsx_runtime.jsx)("label",{htmlFor:id,id:"".concat(id,"__label"),className:classNames,children})},Helper=function(_a){var id=_a.id,children=_a.children,classNames=classnames_default()({"sui-form-field__helper":!0});return(0,jsx_runtime.jsx)("span",{id:"".concat(id,"__helper"),className:classNames,children})},ErrorMessage=function(_a){var id=_a.id,_b=_a.show,show=void 0!==_b&&_b,children=_a.children;return(0,jsx_runtime.jsx)("span",{id:"".concat(id,"__error-message"),className:"sui-form-field__helper sui-color-error--50",children:show&&children})},__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},FormField=function(_a){var id=_a.id,label=_a.label,helper=_a.helper,error=_a.error,className=_a.className,_b=_a.isSmall,isSmall=void 0!==_b&&_b,_c=_a.isDisabled,isDisabled=void 0!==_c&&_c,_d=_a.isLabelHidden,isLabelHidden=void 0!==_d&&_d,children=_a.children,props=__rest(_a,["id","label","helper","error","className","isSmall","isDisabled","isLabelHidden","children"]),errorObj=Object.assign({state:!1,text:""},error),classNames=(0,src.uY)("sui-form-field",{sm:isSmall,disabled:isDisabled},className);return(0,jsx_runtime.jsxs)("div",__assign({className:classNames},props,{children:[!(0,src.xb)(null!=label?label:"")&&(0,jsx_runtime.jsx)(Label,{id,hidden:null!=isLabelHidden&&isLabelHidden,children:label}),children,(0,src.Kn)(error)&&Object.keys(error).length>0&&(0,jsx_runtime.jsx)(ErrorMessage,{id,show:errorObj.state,small:isSmall,children:errorObj.text}),!!helper&&(0,jsx_runtime.jsx)(Helper,{id,small:isSmall,children:helper})]}))}},"./packages/sui-react/packages/components/input/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>Input});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/sui-react/packages/utils/src/index.ts"),hooks_src=__webpack_require__("./packages/sui-react/packages/hooks/src/index.ts"),components=__webpack_require__("./packages/sui-icons/src/components/index.ts"),Icon=function(_a){var _b,_c=_a.name,name=void 0===_c?"":_c,_d=_a.size,size=void 0===_d?"lg":_d;if((0,src.xb)(null!=name?name:""))throw new Error('Required parameter is empty. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Input\n\nThe "name" parameter in the icon element is required and must not be empty.\n\n');var classNames=(0,src.uY)("suicons",((_b={})[name]=!0,_b[size||"md"]=["sm","md","lg"].includes(size||"md"),_b.icon=!0,_b),"sui-input__icon");return(0,jsx_runtime.jsx)("span",{className:classNames,"aria-hidden":"true"})},__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},Input=(0,react.forwardRef)((function(_a,ref){var _b,type=_a.type,defaultValue=_a.defaultValue,placeholder=_a.placeholder,id=_a.id,className=_a.className,inputClass=_a.inputClass,_c=_a.isMultiLine,isMultiLine=void 0!==_c&&_c,_d=_a.isSmall,isSmall=void 0!==_d&&_d,_e=_a.isReadOnly,isReadOnly=void 0!==_e&&_e,_f=_a.isError,isError=void 0!==_f&&_f,_g=_a.isDisabled,isDisabled=void 0!==_g&&_g,onChange=(_a.onMouseEnter,_a.onMouseLeave,_a.onChange),icon=_a.icon,iconPosition=_a.iconPosition,_k=_a.allowClear,allowClear=void 0!==_k&&_k,props=__rest(_a,["type","defaultValue","placeholder","id","className","inputClass","isMultiLine","isSmall","isReadOnly","isError","isDisabled","onMouseEnter","onMouseLeave","onChange","icon","iconPosition","allowClear"]),_l=(0,react.useState)(defaultValue),value=_l[0],setValue=_l[1],_m=(0,hooks_src.X2)({}),isHovered=_m[0],isFocused=_m[1],interactionMethods=_m[2];if(!(!(0,src.o8)(id)&&!(0,src.xb)(id)))throw new Error('Empty parameter is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Input\n\nThe parameter "id" in the "Input" component is required.\n\n');(0,react.useEffect)((function(){setValue(defaultValue)}),[defaultValue]);var handleChange=(0,react.useCallback)((function(e){var _a,_b;isReadOnly||setValue(null!==(_b=null===(_a=null==e?void 0:e.target)||void 0===_a?void 0:_a.value)&&void 0!==_b?_b:""),onChange&&onChange(e)}),[isReadOnly,onChange]),onClear=(0,react.useCallback)((function(){setValue(""),onChange&&onChange("")}),[onChange]),hasValue=!(0,src.o8)(value)&&!(0,src.xb)(null!=value?value:""),hasPlaceholder=!(0,src.o8)(placeholder)&&!(0,src.xb)(placeholder),hasClassInput=!(0,src.o8)(inputClass)&&!(0,src.xb)(inputClass),inputType="text";["email","number","password","search","tel","url"].includes(type)&&(inputType=type);var classNames=(0,src.uY)("sui-input",((_b={sm:isSmall,readonly:isReadOnly,hover:isHovered&&!isReadOnly,focus:isFocused&&!isReadOnly,filled:hasValue,"has-icon":!(0,src.xb)(icon),"icon-start":!(0,src.xb)(iconPosition)&&"start"===iconPosition,"icon-end":!(0,src.xb)(iconPosition)&&"end"===iconPosition,error:isError,disabled:isDisabled})["multiline".concat(isSmall?"-sm":"")]=isMultiLine,_b),null!=className?className:""),inputClassNames=(0,src.uY)("sui-input__input",{"allow-clear":allowClear&&!(0,src.xb)(value)&&!isMultiLine},hasClassInput?inputClass:""),TagName="input";isMultiLine&&(TagName="textarea");var attrs=__assign(__assign({id,ref,type:(0,src.CI)(!isMultiLine,inputType),placeholder:(0,src.CI)(hasPlaceholder,placeholder),readOnly:(0,src.CI)(isReadOnly,!0),disabled:(0,src.CI)(isDisabled,!0),value:null!=value?value:"",className:inputClassNames,onChange:handleChange},interactionMethods),props);return(0,jsx_runtime.jsxs)("div",{className:classNames,children:[icon&&!isMultiLine&&"start"===iconPosition&&(0,jsx_runtime.jsx)(Icon,{name:null!=icon?icon:"",size:isSmall?"md":"lg"}),(0,jsx_runtime.jsx)(TagName,__assign({},attrs)),icon&&!isMultiLine&&"end"===iconPosition&&(0,jsx_runtime.jsx)(Icon,{name:null!=icon?icon:"",size:isSmall?"md":"lg"}),allowClear&&!(0,src.xb)(value)&&!isMultiLine&&(0,jsx_runtime.jsx)(components.CloseAlt,{className:"sui-input__input-clear",onClick:onClear,color:"neutral"})]})}));Input.displayName="Input"},"./packages/sui-react/packages/components/field-password/stories/ReactFieldPassword.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{PasswordField:()=>ReactFieldPassword_stories_PasswordField,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ReactFieldPassword_stories});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src=__webpack_require__("./packages/sui-react/packages/utils/src/index.ts"),form_field_src=__webpack_require__("./packages/sui-react/packages/components/form-field/src/index.ts"),input_src=__webpack_require__("./packages/sui-react/packages/components/input/src/index.ts"),button_src=__webpack_require__("./packages/sui-react/packages/components/button/src/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},PasswordField=(0,react.forwardRef)((function(_a){var id=_a.id,label=_a.label,helper=_a.helper,errorMessage=_a.errorMessage,_b=_a.button,button=void 0===_b?{type:""}:_b,_c=_a.isLabelHidden,isLabelHidden=void 0!==_c&&_c,_d=_a.isSmall,isSmall=void 0!==_d&&_d,_e=_a.isError,isError=void 0!==_e&&_e,_f=_a.isDisabled,isDisabled=void 0!==_f&&_f,props=__rest(_a,["id","label","helper","errorMessage","button","isLabelHidden","isSmall","isError","isDisabled"]),error=Object.assign({state:isError,text:errorMessage}),_g=(0,react.useState)(!1),hasValue=_g[0],setHasValue=_g[1],_h=(0,react.useState)(!1),isVisible=_h[0],setVisible=_h[1],fieldAttrs={id,label,helper,error,isLabelHidden,isSmall},inputAttrs=__assign({id,type:isVisible?"text":"password",inputClass:"sui-password__input",isError,isDisabled,iconPosition:"end",onKeyUp:function(){var getValue=document.getElementById(id).value;setHasValue(getValue.length>0)},isSmall},props),buttonProps=__assign(__assign({label:isVisible?"Hide":"Show",appearance:"secondary",color:"black",className:"sui-password__button",isDisabled:!(!isDisabled&&hasValue),onClick:function(){return setVisible(!isVisible)}},"icon-button"===button.type&&{icon:isVisible?"hide":"show",appearance:"tertiary",iconOnly:!0,iconSize:isSmall?"md":"lg"}),{isSmall});(0,src.uY)("sui-password",{password:!0,icon:"icon-button"===button.type});return(0,jsx_runtime.jsx)(form_field_src.W,__assign({},fieldAttrs,{children:(0,jsx_runtime.jsxs)("div",{className:"sui-password",children:[(0,jsx_runtime.jsx)(input_src.I,__assign({},inputAttrs)),(0,jsx_runtime.jsx)(button_src.zx,__assign({},buttonProps,{children:buttonProps.label}))]})}))}));PasswordField.displayName="PasswordField";var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),storybook=(__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),__webpack_require__("./packages/storybook/lib/storybook.ts")),blocks_dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const anatomy_namespaceObject=__webpack_require__.p+"static/media/anatomy.db5cf674.svg",states_namespaceObject=__webpack_require__.p+"static/media/states.35e1fd12.svg",toggleIcon_namespaceObject=__webpack_require__.p+"static/media/toggleIcon.de639fb5.svg";function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(storybook.$0,{title:"Anatomy",children:[(0,jsx_runtime.jsx)("img",{src:anatomy_namespaceObject,alt:"Password Field Anatomy",style:{marginBottom:20}}),(0,jsx_runtime.jsxs)("p",{children:[" Passwords have the same Anatomy as the ",(0,jsx_runtime.jsx)("a",{target:"_blank",href:"/?path=/docs/sui-components-forms-text-field--docs",children:"TextField"}),". It has an additional property that allows users to view and hide passwords. "]})]}),"\n",(0,jsx_runtime.jsx)(storybook.$0,{title:"States",children:(0,jsx_runtime.jsx)("img",{src:states_namespaceObject,alt:"Password States"})}),"\n",(0,jsx_runtime.jsxs)(storybook.$0,{title:"Hide and view password toggle",children:[(0,jsx_runtime.jsx)("img",{src:states_namespaceObject,alt:"Password Hide & View Password Toggle",style:{marginBottom:20}}),(0,jsx_runtime.jsx)("p",{children:" Password field can use either an icon or a button to hide or show the password. "})]}),"\n",(0,jsx_runtime.jsx)(storybook.$0,{title:"Password Hide/show Icon Condition",children:(0,jsx_runtime.jsx)("img",{src:toggleIcon_namespaceObject,alt:"Password Hide & View Password Toggle",style:{marginBottom:20}})})]})}const TabUsage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent()};function TabCode_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(storybook.$0,{title:"Installation",contained:!0,style:{paddingTop:20,paddingBottom:0},children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Install the ",(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"PasswordField"})," package as an individual\ncomponent or follow the Overview page instructions to get the complete SUI\nComponents package."]})})}),"\n",(0,jsx_runtime.jsxs)(storybook.$0,{title:"Props",border:!0,children:[(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"id",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"A unique identifier for the password field"})}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"label*",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:" A label for the password field. "})}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"helper",tag:"ReactNode",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:" Helper text for the password field. "})}),(0,jsx_runtime.jsxs)(storybook.$0,{title:{content:"button",tag:"object",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:" Specifies the button type for showing and hiding the password. "}),(0,jsx_runtime.jsxs)("p",{children:[" button is an object that has a single property: ",(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"type"})," "]}),(0,jsx_runtime.jsx)("p",{children:" Allowed values for the type property: "}),(0,jsx_runtime.jsxs)(storybook.aV,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"icon-button"})," displays an icon button "]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"standard"})," displays a text button instead ( show & hide ) "]})})]})]}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"isLabelHidden*",tag:"boolean",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsxs)("p",{children:[" When set to ",(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:" true "})," the label will be hidden "]})}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"isSmall*",tag:"boolean",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsxs)("p",{children:[" When set to ",(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:" true "})," the field will be smaller "]})}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"isError*",tag:"boolean",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:" When set to true, the input will have a red border and the error message will be displayed "})}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"errorMessage",tag:"string | ReactNode",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:" Error message for the password field. "})}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"isDisabled",tag:"boolean",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:" Indicates whether the field is disabled. "})})]})]})}const TabCode=function TabCode_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabCode_createMdxContent,props)})):TabCode_createMdxContent(props)};var dedent=__webpack_require__("./node_modules/dedent/dist/dedent.js"),dedent_default=__webpack_require__.n(dedent);const DisabledPasswordFieldCode=dedent_default()`
    <PasswordField
        isDisabled={true}
        id="password-field-id-1"
        label="Label"
        helper="Help text"
    />
`,ErrorPasswordFieldCode=dedent_default()`
    <PasswordField
        isError={true}
        errorMessage="Error Message"
        id="password-field-id-1"
        label="Label"
    />
`;function States_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(storybook.$0,{title:"Disabled",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(storybook.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(PasswordField,{isDisabled:!0,id:"password-field-id-1",label:"Label",helper:"Help text"})}),(0,jsx_runtime.jsx)(storybook.pP,{language:"js",children:DisabledPasswordFieldCode})]}),"\n",(0,jsx_runtime.jsxs)(storybook.$0,{title:"Error",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(storybook.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(PasswordField,{isError:!0,errorMessage:"Error Message",id:"password-field-id-1",label:"Label"})}),(0,jsx_runtime.jsx)(storybook.pP,{language:"js",children:ErrorPasswordFieldCode})]})]})}const States=function States_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(States_createMdxContent,props)})):States_createMdxContent()},SmallPasswordFieldCode=dedent_default()`
    <PasswordField isSmall={true} id="password-field-id-1" label="Label" helper="Help text" />
`;function Size_createMdxContent(props){return(0,jsx_runtime.jsxs)(storybook.$0,{title:"Small",contained:!0,style:{paddingRight:0,paddingBottom:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(storybook.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(PasswordField,{isSmall:!0,id:"password-field-id-1",label:"Label",helper:"Help text"})}),(0,jsx_runtime.jsx)(storybook.pP,{language:"js",children:SmallPasswordFieldCode})]})}const Size=function Size_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Size_createMdxContent,props)})):Size_createMdxContent()},StandardButtonCode=dedent_default()`
    <PasswordField button="" label="Label" helper="Help text" />
`,IconButtonCode=dedent_default()`
    <PasswordField label="Label" helper="Help text" />
`;function ButtonType_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(storybook.$0,{title:"Standard Button ( default ) ",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(storybook.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(PasswordField,{button:{type:"standard"},id:"password-field-id-1",icon:!0,label:"Label",helper:"Help text"})}),(0,jsx_runtime.jsx)(storybook.pP,{language:"js",children:StandardButtonCode})]}),"\n",(0,jsx_runtime.jsxs)(storybook.$0,{title:"Icon Button",contained:!0,style:{paddingRight:0,paddingBottom:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(storybook.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(PasswordField,{button:{type:"icon-button"},id:"password-field-id-1",label:"Label",helper:"Help text"})}),(0,jsx_runtime.jsx)(storybook.pP,{language:"js",children:IconButtonCode})]})]})}const ButtonType=function ButtonType_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(ButtonType_createMdxContent,props)})):ButtonType_createMdxContent()},sampleCode=dedent_default()`
    <PasswordField id="password-field-id-1" label="Label" helper="Help text" />
`;function TabExamples_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(storybook.$0,{contained:!0,style:{paddingTop:0},children:[(0,jsx_runtime.jsx)("p",{children:"Below is the default form of a Password Field, used for most cases."}),(0,jsx_runtime.jsx)(storybook.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(PasswordField,{id:"password-field-id-1",label:"Label",helper:"Help text"})}),(0,jsx_runtime.jsx)(storybook.pP,{language:"js",children:sampleCode})]}),"\n",(0,jsx_runtime.jsx)(storybook.$0,{style:{paddingTop:0},children:(0,jsx_runtime.jsxs)(storybook.T5,{children:[(0,jsx_runtime.jsx)("div",{label:"States",value:"states",children:(0,jsx_runtime.jsx)(States,{})}),(0,jsx_runtime.jsx)("div",{label:"Size",value:"size",children:(0,jsx_runtime.jsx)(Size,{})}),(0,jsx_runtime.jsx)("div",{label:"Button Type",value:"button-type",children:(0,jsx_runtime.jsx)(ButtonType,{})})]})})]})}const TabExamples=function TabExamples_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabExamples_createMdxContent,props)})):TabExamples_createMdxContent()};function ReactFieldPassword_createMdxContent(props){return storybook.T3||_missingMdxReference("Page",!1),storybook.T3.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsx)(blocks_dist.E$,{children:(0,jsx_runtime.jsxs)(storybook.T3.Tabs,{title:"Password Field",subtitle:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"The Password Field component provides a secure input field for users to enter and conceal their passwords, ensuring confidentiality and protecting sensitive information."}),status:"draft",children:[(0,jsx_runtime.jsx)("div",{id:"usage",label:"Usage",children:(0,jsx_runtime.jsx)(TabUsage,{})}),(0,jsx_runtime.jsx)("div",{id:"code",label:"Code",children:(0,jsx_runtime.jsx)(TabCode,{})}),(0,jsx_runtime.jsx)("div",{id:"examples",label:"Examples",children:(0,jsx_runtime.jsx)(TabExamples,{})})]})})}function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const ReactFieldPassword_stories={title:"SUI/Components/Forms/Password Field",component:PasswordField,parameters:{layout:"fullscreen",docs:{page:function ReactFieldPassword_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(ReactFieldPassword_createMdxContent,props)})):ReactFieldPassword_createMdxContent()}}}},ReactFieldPassword_stories_PasswordField=({buttonType,...args})=>{const button={type:buttonType};return(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsx)("div",{style:{padding:20,borderRadius:4,background:"#fff"},children:(0,jsx_runtime.jsx)(PasswordField,{button,...args})})})})};ReactFieldPassword_stories_PasswordField.displayName="PasswordField",ReactFieldPassword_stories_PasswordField.args={id:"myPasswordField",label:"Password",helper:"Create a password of minimum 8 characters",errorMessage:"The password you inserted is not valid",buttonType:"icon-button",isLabelHidden:!1,isError:!1,isDisabled:!1},ReactFieldPassword_stories_PasswordField.argTypes={id:{name:"ID"},label:{name:"Label"},errorMessage:{name:"Error Message"},buttonType:{name:"Button Style",options:["icon-button","standard"],control:{type:"select",labels:{"icon-button":"Icon Button (Default)",standard:"Button"}}},isLabelHidden:{name:"SR Label",control:"boolean"},isError:{name:"Error",control:"boolean"},isDisabled:{name:"Disabled",control:"boolean"}},ReactFieldPassword_stories_PasswordField.parameters={...ReactFieldPassword_stories_PasswordField.parameters,docs:{...ReactFieldPassword_stories_PasswordField.parameters?.docs,source:{originalSource:'({\n  buttonType,\n  ...args\n}) => {\n  const boxStyles = {\n    padding: 20,\n    borderRadius: 4,\n    background: "#fff"\n  };\n  const button = {\n    type: buttonType\n  };\n  return <div className="sui-layout sui-layout--horizontal sui-layout--vertical">\n            <div className="sui-layout__content">\n                <div style={boxStyles}>\n                    <SuiPasswordField button={button} {...args} />\n                </div>\n            </div>\n        </div>;\n}',...ReactFieldPassword_stories_PasswordField.parameters?.docs?.source}}};const __namedExportsOrder=["PasswordField"];ReactFieldPassword_stories_PasswordField.__docgenInfo={description:"",methods:[],displayName:"PasswordField"}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/dedent/dist/dedent.js":module=>{"use strict";module.exports=function dedent(strings){var raw=void 0;raw="string"==typeof strings?[strings]:strings.raw;for(var result="",i=0;i<raw.length;i++)result+=raw[i].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),i<(arguments.length<=1?0:arguments.length-1)&&(result+=arguments.length<=i+1?void 0:arguments[i+1]);var lines=result.split("\n"),mindent=null;return lines.forEach((function(l){var m=l.match(/^(\s+)\S+/);if(m){var indent=m[1].length;mindent=mindent?Math.min(mindent,indent):indent}})),null!==mindent&&(result=lines.map((function(l){return" "===l[0]?l.slice(mindent):l})).join("\n")),(result=result.trim()).replace(/\\n/g,"\n")}}}]);
//# sourceMappingURL=sui-react-packages-components-field-password-stories-ReactFieldPassword-stories.12281e13.iframe.bundle.js.map