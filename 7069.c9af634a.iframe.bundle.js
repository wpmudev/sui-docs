"use strict";(self.webpackChunksui_docs=self.webpackChunksui_docs||[]).push([[7069],{"./packages/sui-react/packages/components/box/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Box,f:()=>BoxGroup});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/sui-react/packages/utils/src/index.ts"),BoxGroup=function(_a){var _b=_a.isInline,isInline=void 0===_b||_b,children=_a.children,_c=_a.isHeader,isHeader=void 0!==_c&&_c,_d=_a.isFooter,isFooter=void 0!==_d&&_d,slots=react.Children.map(children,(function(child,index){var _a,_b=null!==(_a=child.props)&&void 0!==_a?_a:{},slot=_b.slot,content=_b.children;return(0,src.Kn)(child)&&["left","right"].includes(null!=slot?slot:"")?(0,jsx_runtime.jsx)("div",{className:"sui-box-group__slot sui-box-group__".concat(slot),children:content},"sui-box-group--".concat(index)):(0,jsx_runtime.jsx)(react.Fragment,{children:child},"sui-box-group--".concat(index))})),classNames=(0,src.uY)("sui-box-group",{inline:isInline,header:isHeader,footer:isFooter});return(0,jsx_runtime.jsx)("div",{className:classNames,children:slots})},__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},Box=function(_a){var title=_a.title,icon=_a.icon,headerLeft=_a.headerLeft,headerRight=_a.headerRight,children=_a.children,isSmall=_a.isSmall,_b=_a.className,className=void 0===_b?"":_b,hasTitle=!(0,src.o8)(title)&&!(0,src.xb)(title),hasIcon=!(0,src.o8)(icon)&&!(0,src.xb)(icon),hasLeft=!(0,src.o8)(headerRight)&&!(0,src.xb)(headerLeft),hasRight=!(0,src.o8)(headerRight)&&!(0,src.xb)(headerRight),classNames=(0,src.uY)("sui-box",{"size-sm":isSmall},className);return(0,jsx_runtime.jsxs)("div",{className:classNames,children:[hasTitle&&(0,jsx_runtime.jsxs)(BoxGroup,{isInline:!0,children:[(0,jsx_runtime.jsxs)("div",{slot:"left",children:[hasIcon&&(0,jsx_runtime.jsx)("span",{className:"suicons suicons--".concat(icon," suicons--lg sui-box-group__item"),"aria-hidden":"true"}),hasTitle&&(0,jsx_runtime.jsx)("h2",{className:"sui-heading sui-heading--h3 sui-box-group__item",children:title}),hasLeft&&headerLeft]}),(0,jsx_runtime.jsx)("div",__assign({},hasRight&&{slot:"right"},{children:hasRight&&headerRight}))]}),children]})}},"./packages/sui-react/packages/components/dropdown/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>Dropdown});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/sui-react/packages/utils/src/index.ts"),button_src=__webpack_require__("./packages/sui-react/packages/components/button/src/index.ts"),hooks_src=__webpack_require__("./packages/sui-react/packages/hooks/src/index.ts"),menu_src=__webpack_require__("./packages/sui-react/packages/components/menu/src/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},Dropdown=(0,react.forwardRef)((function(_a,ref){var _b,label=_a.label,className=_a.className,isSmall=_a.isSmall,iconOnly=_a.iconOnly,_c=_a.isFixedHeight,isFixedHeight=void 0===_c||_c,current=_a.current,children=_a.children,menu=_a.menu,direction=_a.direction,buttonIcon=_a.buttonIcon,onMenuClick=_a.onMenuClick,dropdownRef=(0,react.useRef)(null),id="sui-dropdown-".concat((0,react.useId)()),_d=(0,react.useState)(!1),isOpen=_d[0],setIsOpen=_d[1];(0,hooks_src.rw)(dropdownRef,(function(){setIsOpen(!1)})),(0,react.useImperativeHandle)(ref,(function(){return{open:function(){return setIsOpen(!0)},close:function(){return setIsOpen(!1)},toggle:function(){return setIsOpen(!isOpen)}}}));var wrapperClasses=(0,src.uY)("sui-dropdown",{sm:isSmall,open:isOpen},className),renderMenus=function(menus){var _a;return null===(_a=menus||[])||void 0===_a?void 0:_a.map((function(menuItem,index){return menuItem.menus?(0,jsx_runtime.jsx)(menu_src.kS,{title:menuItem.label,children:renderMenus(menuItem.menus)},index):(onMenuClick&&(menuItem.props.onClick=function(e){return onMenuClick(menuItem.id,e)}),(0,jsx_runtime.jsx)(menu_src.sN,__assign({},menuItem.props,{children:menuItem.label}),index))}))};return(0,jsx_runtime.jsxs)("div",{ref:dropdownRef,className:wrapperClasses,children:[(0,jsx_runtime.jsx)(button_src.zx,{icon:null!=buttonIcon?buttonIcon:"menu",iconOnly,iconPosition:"start",color:"black",appearance:"secondary",isSmall,"aria-activedescendant":isOpen?"".concat(id,"-").concat(current):"",onClick:function(){return setIsOpen(!isOpen)},children:label}),(0,jsx_runtime.jsxs)("div",__assign({id,tabIndex:-1,role:"listbox",className:(0,src.uY)("sui-dropdown__menu",(_b={},_b["direction-".concat(direction)]=!(0,src.xb)(null!=direction?direction:""),_b["fixed-height"]=isFixedHeight,_b))},label&&{"aria-labelledby":"".concat(id,"__label")},{children:[!!menu&&(0,jsx_runtime.jsx)(menu_src.v2,{className:"sui-dropdown__menu-nav",children:renderMenus(menu)}),!!children&&(0,jsx_runtime.jsx)("div",{className:"sui-dropdown__menu-content",children})]}))]})}));Dropdown.displayName="Dropdown"},"./packages/sui-react/packages/components/form-field/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>FormField});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/sui-react/packages/utils/src/index.ts")),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Label=function(_a){var id=_a.id,_b=_a.hidden,hidden=void 0!==_b&&_b,children=_a.children;if((0,src.xb)(null!=children?children:""))throw new Error('Empty content is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Form Field\n\nThe "Label" component requires a child element to be passed to it.\n\n');var classNames=classnames_default()({"sui-screen-reader-only":hidden,"sui-form-field__label":!hidden});return(0,jsx_runtime.jsx)("label",{htmlFor:id,id:"".concat(id,"__label"),className:classNames,children})},Helper=function(_a){var id=_a.id,children=_a.children,classNames=classnames_default()({"sui-form-field__helper":!0});return(0,jsx_runtime.jsx)("span",{id:"".concat(id,"__helper"),className:classNames,children})},ErrorMessage=function(_a){var id=_a.id,_b=_a.show,show=void 0!==_b&&_b,children=_a.children;return(0,jsx_runtime.jsx)("span",{id:"".concat(id,"__error-message"),className:"sui-form-field__helper sui-color-error--50",children:show&&children})},__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},FormField=function(_a){var id=_a.id,label=_a.label,helper=_a.helper,error=_a.error,className=_a.className,_b=_a.isSmall,isSmall=void 0!==_b&&_b,_c=_a.isDisabled,isDisabled=void 0!==_c&&_c,_d=_a.isLabelHidden,isLabelHidden=void 0!==_d&&_d,children=_a.children,props=__rest(_a,["id","label","helper","error","className","isSmall","isDisabled","isLabelHidden","children"]),errorObj=Object.assign({state:!1,text:""},error),classNames=(0,src.uY)("sui-form-field",{sm:isSmall,disabled:isDisabled},className);return(0,jsx_runtime.jsxs)("div",__assign({className:classNames},props,{children:[!(0,src.xb)(null!=label?label:"")&&(0,jsx_runtime.jsx)(Label,{id,hidden:null!=isLabelHidden&&isLabelHidden,children:label}),children,(0,src.Kn)(error)&&Object.keys(error).length>0&&(0,jsx_runtime.jsx)(ErrorMessage,{id,show:errorObj.state,small:isSmall,children:errorObj.text}),!!helper&&(0,jsx_runtime.jsx)(Helper,{id,small:isSmall,children:helper})]}))}},"./packages/sui-react/packages/components/grid/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Col,X:()=>Row});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/sui-react/packages/utils/src/index.ts")),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},Row=function(_a){var align=_a.align,className=_a.className,children=_a.children,props=__rest(_a,["align","className","children"]),expectedAligns=__assign({xs:"",sm:"",md:"",lg:"",xl:""},align),classNames="sui-row";for(var key in expectedAligns)""!==expectedAligns[key]&&("xs"===key&&"stacked"!==expectedAligns[key]?classNames+=" sui-row--".concat(expectedAligns[key]):classNames+=" sui-row-".concat(key,"--").concat(expectedAligns[key]));return(0,src.xb)(null!=className?className:"")||(classNames+=" ".concat(className)),(0,jsx_runtime.jsx)("div",__assign({className:classNames},props,{children}))},Col=function(_a){var _b,size=_a.size,children=_a.children,className=_a.className,classNames=(0,src.uY)("sui-col",((_b={})[size]=!!size,_b),className);return(0,jsx_runtime.jsx)("div",{className:classNames,children})}},"./packages/sui-react/packages/components/input/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Input});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/sui-react/packages/utils/src/index.ts"),hooks_src=__webpack_require__("./packages/sui-react/packages/hooks/src/index.ts"),Icon=function(_a){var _b,_c=_a.name,name=void 0===_c?"":_c,_d=_a.size,size=void 0===_d?"lg":_d;if((0,src.xb)(null!=name?name:""))throw new Error('Required parameter is empty. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Input\n\nThe "name" parameter in the icon element is required and must not be empty.\n\n');var classNames=(0,src.uY)("suicons",((_b={})[name]=!0,_b[size]=["sm","md","lg"].includes(null!=size?size:"md"),_b.icon=!0,_b),"sui-input__icon");return(0,jsx_runtime.jsx)("span",{className:classNames,"aria-hidden":"true"})},__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},Input=(0,react.forwardRef)((function(_a,ref){var _b,type=_a.type,defaultValue=_a.defaultValue,placeholder=_a.placeholder,id=_a.id,className=_a.className,inputClass=_a.inputClass,_c=_a.isMultiLine,isMultiLine=void 0!==_c&&_c,_d=_a.isSmall,isSmall=void 0!==_d&&_d,_e=_a.isReadOnly,isReadOnly=void 0!==_e&&_e,_f=_a.isError,isError=void 0!==_f&&_f,_g=_a.isDisabled,isDisabled=void 0!==_g&&_g,onChange=(_a.onMouseEnter,_a.onMouseLeave,_a.onChange),icon=_a.icon,iconPosition=_a.iconPosition,props=__rest(_a,["type","defaultValue","placeholder","id","className","inputClass","isMultiLine","isSmall","isReadOnly","isError","isDisabled","onMouseEnter","onMouseLeave","onChange","icon","iconPosition"]),_k=(0,react.useState)(defaultValue),value=_k[0],setValue=_k[1],_l=(0,hooks_src.X2)({}),isHovered=_l[0],isFocused=_l[1],interactionMethods=_l[2];if(!(!(0,src.o8)(id)&&!(0,src.xb)(id)))throw new Error('Empty parameter is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Input\n\nThe parameter "id" in the "Input" component is required.\n\n');var handleChange=(0,react.useCallback)((function(e){var _a,_b;isReadOnly||setValue(null!==(_b=null===(_a=null==e?void 0:e.target)||void 0===_a?void 0:_a.value)&&void 0!==_b?_b:""),(0,src.mf)(onChange)&&onChange(e)}),[isReadOnly,onChange]),hasValue=!(0,src.o8)(value)&&!(0,src.xb)(value),hasPlaceholder=!(0,src.o8)(placeholder)&&!(0,src.xb)(placeholder),hasClassInput=!(0,src.o8)(inputClass)&&!(0,src.xb)(inputClass),inputType="text";["email","number","password","search","tel","url"].includes(type)&&(inputType=type);var classNames=(0,src.uY)("sui-input",((_b={sm:isSmall,readonly:isReadOnly,hover:isHovered&&!isReadOnly,focus:isFocused&&!isReadOnly,filled:hasValue,"has-icon":!(0,src.xb)(icon),"icon-start":!(0,src.xb)(iconPosition)&&"start"===iconPosition,"icon-end":!(0,src.xb)(iconPosition)&&"end"===iconPosition,error:isError,disabled:isDisabled})["multiline".concat(isSmall?"-sm":"")]=isMultiLine,_b),null!=className?className:""),inputClassNames=(0,src.uY)("sui-input__input",{},hasClassInput?inputClass:""),TagName="input";isMultiLine&&(TagName="textarea");var attrs=__assign(__assign({id,ref,type:(0,src.CI)(!isMultiLine,inputType),placeholder:(0,src.CI)(hasPlaceholder,placeholder),readOnly:(0,src.CI)(isReadOnly,!0),disabled:(0,src.CI)(isDisabled,!0),value:null!=value?value:"",className:inputClassNames,onChange:handleChange},interactionMethods),props);return(0,jsx_runtime.jsxs)("div",{className:classNames,children:[icon&&!isMultiLine&&"start"===iconPosition&&(0,jsx_runtime.jsx)(Icon,{name:null!=icon?icon:"",size:isSmall?"md":"lg"}),(0,jsx_runtime.jsx)(TagName,__assign({},attrs)),icon&&!isMultiLine&&"end"===iconPosition&&(0,jsx_runtime.jsx)(Icon,{name:null!=icon?icon:"",size:isSmall?"md":"lg"})]})}));Input.displayName="Input"},"./packages/sui-react/packages/components/menu/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v2:()=>Menu,kS:()=>menu_group.k,sN:()=>MenuItem});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/sui-react/packages/utils/src/index.ts"),Menu=function(_a){var _b=_a.className,className=void 0===_b?"":_b,children=_a.children,classNames=(0,src.uY)("sui-menu",{},className);return(0,jsx_runtime.jsx)("nav",{className:classNames,children})},hooks_src=__webpack_require__("./packages/sui-react/packages/hooks/src/index.ts"),components=__webpack_require__("./packages/sui-icons/src/components/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},MenuItem=function(_a){var _b,icon=_a.icon,href=_a.href,_c=_a.className,className=void 0===_c?"":_c,children=_a.children,isDisabled=_a.isDisabled,onClick=_a.onClick,props=__rest(_a,["icon","href","className","children","isDisabled","onClick"]),_d=(0,hooks_src.X2)({}),isHovered=_d[0],isFocused=_d[1],methods=_d[2],id=(0,react.useId)(),menuId="sui-menu-item-".concat(id),menuTitleId="".concat(menuId,"-title"),TagName="li";href&&(TagName="a");var classNames=(0,src.uY)("sui-menu__item",{hover:isHovered,focus:isFocused,disabled:isDisabled},className),IconTag=null;(0,src.xb)(null!=icon?icon:"")||(IconTag=null!==(_b=null==components?void 0:components[icon])&&void 0!==_b?_b:null);var attrs=__assign({className:classNames,href:href||void 0},props),btnAttr={};return onClick&&(btnAttr.role="button",btnAttr.onClick=onClick,btnAttr.onKeyDown=function(e){return(0,src.Jw)(e,onClick)}),(0,jsx_runtime.jsxs)(TagName,__assign({className:classNames},attrs,methods,{tabIndex:isDisabled?-1:0,"aria-labelledby":menuTitleId},btnAttr,{children:[!!IconTag&&(0,jsx_runtime.jsx)(IconTag,{size:"sm"}),(0,jsx_runtime.jsx)("span",{id:menuTitleId,children})]}))},menu_group=__webpack_require__("./packages/sui-react/packages/components/menu/src/menu-group.tsx")},"./packages/sui-react/packages/components/menu/src/menu-group.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>MenuGroup});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_wpmudev_sui_utils__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/sui-react/packages/utils/src/index.ts")),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},MenuGroup=function(_a){var _b=_a.title,title=void 0===_b?"":_b,_c=_a.className,className=void 0===_c?"":_c,children=_a.children,props=__rest(_a,["title","className","children"]),classNames=(0,_wpmudev_sui_utils__WEBPACK_IMPORTED_MODULE_2__.uY)("sui-menu__group",{},className),attrs=__assign({className:classNames},props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li",__assign({},attrs,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"sui-menu__group-title",children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",{className:"sui-menu__group-items",children})]}))}},"./packages/sui-react/packages/components/table/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{iA:()=>Table,RM:()=>TableBody,pj:()=>TableCell,yt:()=>TableFooter,ss:()=>TableHead,SC:()=>TableRow});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/sui-react/packages/utils/src/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__spreadArray=function(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))},TableContext=(0,react.createContext)(null),TableContextProvider=function(_a){var children=_a.children,_b=_a.props,props=void 0===_b?{}:_b,_c=(0,react.useState)([]),filterValues=_c[0],setFilterValues=_c[1],_d=(0,react.useState)([]),selected=_d[0],setSelected=_d[1],_e=(0,react.useState)([]),rows=_e[0],setRows=_e[1],_f=(0,react.useState)(!1),forceCollapse=_f[0],setForceCollapse=_f[1],onSelect=(0,react.useCallback)((function(id,isChecked,isSelectAll){void 0===isChecked&&(isChecked=!1);var tempSelected=__spreadArray([],selected,!0);switch(!0){case void 0!==isSelectAll:tempSelected=isChecked?rows:[];break;case isChecked:tempSelected.push(id);break;default:tempSelected.splice(tempSelected.indexOf(id),1)}setSelected(tempSelected)}),[rows,selected]),setFilter=(0,react.useCallback)((function(id,val){var _a;setFilterValues(__assign(__assign({},filterValues),((_a={})[id]=val,_a)))}),[filterValues]),triggerAction=(0,react.useCallback)((function(action,data){null==props||props.onAction(action,data)}),[props]),applyFilters=(0,react.useCallback)((function(){triggerAction("apply-filters",filterValues)}),[filterValues,triggerAction]),clearFilters=(0,react.useCallback)((function(){setFilterValues([]),triggerAction("apply-filters",[])}),[triggerAction]);return(0,jsx_runtime.jsx)(TableContext.Provider,{value:__assign(__assign({},props),{triggerAction,rows,setRows,selected,onSelect,forceCollapse,setForceCollapse,filterValues,setFilter,applyFilters,clearFilters}),children})},button_src=__webpack_require__("./packages/sui-react/packages/components/button/src/index.ts"),input_src=__webpack_require__("./packages/sui-react/packages/components/input/src/index.ts"),select_src=__webpack_require__("./packages/sui-react/packages/components/select/src/index.ts"),dropdown_src=__webpack_require__("./packages/sui-react/packages/components/dropdown/src/index.ts"),box_src=__webpack_require__("./packages/sui-react/packages/components/box/src/index.ts"),grid_src=__webpack_require__("./packages/sui-react/packages/components/grid/src/index.ts"),form_field_src=__webpack_require__("./packages/sui-react/packages/components/form-field/src/index.ts"),table_toolbar_content_assign=function(){return table_toolbar_content_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},table_toolbar_content_assign.apply(this,arguments)},TableToolbarContent=function(_a){var _b,_c,_d,_e,_f,id=_a.id,filterBtnId=_a.filterBtnId,isExpanded=_a.isExpanded,ctx=(0,react.useContext)(TableContext),filters=null==ctx?void 0:ctx.filters;if(!filters)return null;var renderField=function(filter){return(0,jsx_runtime.jsx)(form_field_src.W,{id:null==filter?void 0:filter.id,label:null==filter?void 0:filter.title,isSmall:!0,children:{select:(0,jsx_runtime.jsx)(select_src.Ph,table_toolbar_content_assign({onChange:function(e){null==ctx||ctx.setFilter(null==filter?void 0:filter.id,e.target.value)},id:null==filter?void 0:filter.id},filter.props)),text:(0,jsx_runtime.jsx)(input_src.I,table_toolbar_content_assign({id:null==filter?void 0:filter.id},filter.props,{onChange:function(e){null==ctx||ctx.setFilter(null==filter?void 0:filter.id,e.target.value)}}))}[filter.type]})};return(0,jsx_runtime.jsx)("div",{id,"aria-labelledby":filterBtnId,className:(0,src.uY)("sui-table__toolbar-body",{expanded:isExpanded||!!(null==ctx?void 0:ctx.filtersPopover),inline:!(null==ctx?void 0:ctx.filtersPopover)}),children:(null==ctx?void 0:ctx.filtersPopover)?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[null==filters?void 0:filters.map((function(filter){return renderField(filter)})),(0,jsx_runtime.jsxs)("div",{className:"sui-table__toolbar-cta",children:[(0,jsx_runtime.jsx)(button_src.zx,{appearance:"tertiary",color:"black",isSmall:!0,isDisabled:(null===(_b=null==ctx?void 0:ctx.filterValues)||void 0===_b?void 0:_b.length)<=0,children:"Clear filters"}),(0,jsx_runtime.jsx)(button_src.zx,{appearance:"secondary",color:"black",isSmall:!0,isDisabled:(null===(_c=null==ctx?void 0:ctx.filterValues)||void 0===_c?void 0:_c.length)<=0,onClick:function(){return ctx.triggerAction("apply-filters",ctx.filterValues)},children:"Apply filters"})]})]}):(0,jsx_runtime.jsxs)(box_src.x,{children:[(0,jsx_runtime.jsx)(box_src.f,{children:(0,jsx_runtime.jsx)(grid_src.X,{align:{sm:"inline"},children:null===(_d=null!=filters?filters:[])||void 0===_d?void 0:_d.map((function(filter,index){return(0,jsx_runtime.jsx)(grid_src.J,{size:3,children:renderField(filter)},index)}))})}),(0,jsx_runtime.jsx)(box_src.f,{isInline:!1,isFooter:!0,children:(0,jsx_runtime.jsxs)("div",{className:"sui-table__toolbar-cta",children:[(0,jsx_runtime.jsx)(button_src.zx,{appearance:"secondary",color:"black",isSmall:!0,isDisabled:(null===(_e=null==ctx?void 0:ctx.filterValues)||void 0===_e?void 0:_e.length)<=0,children:"Clear filters"}),(0,jsx_runtime.jsx)(button_src.zx,{appearance:"primary",color:"blue",isSmall:!0,isDisabled:(null===(_f=null==ctx?void 0:ctx.filterValues)||void 0===_f?void 0:_f.length)<=0,onClick:function(){return ctx.triggerAction("apply-filters",ctx.filterValues)},children:"Apply filters"})]})})]})})},utils=__webpack_require__("./packages/storybook/lib/utils/index.ts"),TableToolbar=function(_a){var _b=(0,react.useState)(!1),isExpanded=_b[0],setIsExpanded=_b[1],_c=(0,react.useState)(""),bulkAction=_c[0],setBulkAction=_c[1],uniqueId=(0,react.useId)(),filterBtnId="sui-table-toolbar-filter-".concat(uniqueId),bodyId="sui-table-toolbar-body-".concat(uniqueId),bulkDropdown="sui-table-toolbar-bulk-".concat(uniqueId),ctx=(0,react.useContext)(TableContext),onSearch=(0,react.useCallback)((function(e){null==ctx||ctx.triggerAction("search-item",e.target.value)}),[ctx]),onApplyBulkAction=(0,react.useCallback)((function(){null==ctx||ctx.triggerAction("bulk-action",bulkAction)}),[bulkAction,ctx]),content=(0,jsx_runtime.jsx)(TableToolbarContent,{id:bodyId,filterBtnId,isExpanded});return(0,jsx_runtime.jsxs)("div",{className:"sui-table__toolbar",children:[(0,jsx_runtime.jsxs)("div",{className:"sui-table__toolbar-header",children:[(0,jsx_runtime.jsx)("div",{className:"sui-table__toolbar-header-bulk",children:!!(null==ctx?void 0:ctx.bulkActions)&&(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)(select_src.Ph,{id:bulkDropdown,className:"sui-table__toolbar-actions",isSmall:!0,options:null==ctx?void 0:ctx.bulkActions,onChange:function(e){var _a;return setBulkAction(null===(_a=null==e?void 0:e.target)||void 0===_a?void 0:_a.value)}}),(0,jsx_runtime.jsx)(button_src.zx,{appearance:"primary",color:"black",isSmall:!0,isDisabled:(0,utils.x)(null!=bulkAction?bulkAction:""),onClick:onApplyBulkAction,children:"Apply"})]})}),(0,jsx_runtime.jsxs)("div",{className:"sui-table__toolbar-header-actions",children:[(0,jsx_runtime.jsx)(input_src.I,{id:"input-id-4",className:"sui-table__toolbar-search",label:"Label",placeholder:"Search",onChange:onSearch,isSmall:!0}),(null==ctx?void 0:ctx.filtersPopover)?(0,jsx_runtime.jsx)(dropdown_src.L,{label:"Filter",className:"sui-table__toolbar-filter",buttonIcon:"filter",direction:"left",isSmall:!0,isFixedHeight:!1,onMenuClick:function(id,e){console.log("DEBUG: Menu Item Clicked",id,e)},children:content}):(0,jsx_runtime.jsx)(button_src.zx,{id:filterBtnId,className:"sui-table__toolbar-filter",icon:"filter",color:"black",appearance:"secondary",isSmall:!0,onClick:function(){return setIsExpanded(!isExpanded)},"aria-controls":bodyId,"aria-expanded":isExpanded,children:"Filter"})]})]}),!(null==ctx?void 0:ctx.filtersPopover)&&content]})},table_assign=function(){return table_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},table_assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},Table=function(_a){var children=_a.children,_c=(_a.type,_a.hasToolbar),hasToolbar=void 0===_c||_c,_d=_a.ariaLabel,ariaLabel=void 0===_d?"":_d,allowCheck=_a.allowCheck,isDraggable=_a.isDraggable,filtersPopover=_a.filtersPopover,filters=_a.filters,onAction=_a.onAction,bulkActions=_a.bulkActions,noBorderRadius=_a.noBorderRadius,noSideBorder=_a.noSideBorder,_e=_a.isStripped,isStripped=void 0!==_e&&_e,props=__rest(_a,["children","type","hasToolbar","ariaLabel","allowCheck","isDraggable","filtersPopover","filters","onAction","bulkActions","noBorderRadius","noSideBorder","isStripped"]),ref=(0,react.useRef)(null),classNames=(0,src.uY)("sui-table",{"no-border-radius":noBorderRadius,"no-side-borders":noSideBorder,stripe:isStripped});return(0,jsx_runtime.jsx)(TableContextProvider,{props:{allowCheck,isDraggable,filters,onAction,bulkActions,filtersPopover},children:(0,jsx_runtime.jsxs)("div",{className:classNames,children:[hasToolbar&&(0,jsx_runtime.jsx)(TableToolbar,{}),(0,jsx_runtime.jsx)("table",table_assign({},props,{className:"sui-table__table",ref,role:"grid",tabIndex:-1,cellSpacing:"0",cellPadding:"0"},!(0,src.xb)(null!=ariaLabel?ariaLabel:"")&&{"aria-label":ariaLabel},{children}))]})})},dist=__webpack_require__("./node_modules/react-sortablejs/dist/index.js"),table_body_assign=function(){return table_body_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},table_body_assign.apply(this,arguments)},TableBody=function(props){var children=props.children,_a=(0,react.useState)(react.Children.toArray(children)),el=_a[0],setEl=_a[1],_b=(0,react.useState)([]),rows=_b[0],setRows=_b[1],ctx=(0,react.useContext)(TableContext);(0,react.useEffect)((function(){setRows(react.Children.toArray(children).map((function(row){return row.props.id})))}),[children]),(0,react.useEffect)((function(){null==ctx||ctx.setRows(rows)}),[ctx,rows]);var onSortEnd=(0,react.useCallback)((function(){null==ctx||ctx.setForceCollapse(!1),null==ctx||ctx.triggerAction("resort",rows)}),[ctx,rows]);return(null==ctx?void 0:ctx.isDraggable)?(0,jsx_runtime.jsx)(dist.ReactSortable,{tag:TableBodyTag,list:el.map((function(x){return table_body_assign(table_body_assign({},x),{id:x.props.id,chosen:!0})})),setList:function(list){return setEl(list.filter((function(newEl){return!!newEl})))},animation:150,handle:".sui-table__cell--drag",onStart:function(){return null==ctx?void 0:ctx.setForceCollapse(!0)},onEnd:onSortEnd,children:el.map((function(item){return(0,jsx_runtime.jsx)(react.Fragment,{children:item},item.props.id)}))}):(0,jsx_runtime.jsx)(TableBodyTag,table_body_assign({},props,{children}))},TableBodyTag=(0,react.forwardRef)((function(props,ref){return(0,jsx_runtime.jsx)("tbody",table_body_assign({ref},props,{className:"sui-table__body"}))}));TableBodyTag.displayName="TableBodyTag";var checkbox_src=__webpack_require__("./packages/sui-react/packages/components/checkbox/src/index.ts"),hooks_src=__webpack_require__("./packages/sui-react/packages/hooks/src/index.ts"),components=__webpack_require__("./packages/sui-icons/src/components/index.ts"),table_cell_assign=function(){return table_cell_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},table_cell_assign.apply(this,arguments)},table_cell_rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},TableCell=function(_a){var children=_a.children,isHeading=_a.isHeading,_b=_a.className,className=void 0===_b?"":_b,_c=_a.hasDragIcon,hasDragIcon=void 0!==_c&&_c,props=table_cell_rest(_a,["children","isHeading","className","hasDragIcon"]),TagName=isHeading?"th":"td";return(0,jsx_runtime.jsxs)(TagName,table_cell_assign({className:(0,src.uY)("sui-table__cell",{},className)},isHeading?{scope:"col"}:{},props,{tabIndex:0,role:"rowheader",children:[hasDragIcon&&(0,jsx_runtime.jsx)(components.Grip,{className:"sui-table__cell--drag",size:"sm"})," ",children]}))},table_row_assign=function(){return table_row_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},table_row_assign.apply(this,arguments)},table_row_rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},TableRow=function(_a){var _b,_c,id=_a.id,children=_a.children,_d=_a.actions,actions=void 0!==_d&&_d,_e=_a.isUnderHeader,isUnderHeader=void 0!==_e&&_e,_f=_a.isExpandable,isExpandable=void 0!==_f&&_f,_g=_a.expandableContent,expandableContent=void 0===_g?null:_g,_h=_a.isUnderFooter,isUnderFooter=void 0!==_h&&_h,props=table_row_rest(_a,["id","children","actions","isUnderHeader","isExpandable","expandableContent","isUnderFooter"]),_j=(0,react.useState)(!1),isExpanded=_j[0],setIsExpanded=_j[1],ctx=(0,react.useContext)(TableContext),_k=(0,hooks_src.X2)({}),isHovered=_k[0],isFocused=_k[1],methods=_k[2],uniqueID=(0,react.useId)(),rowId="sui-table-row-".concat(uniqueID).concat(id?"-".concat(id):""),rowContentId="".concat(rowId,"-content"),onCheckToggle=(0,react.useCallback)((function(e){var _a,_b,isChecked=null!==(_b=null===(_a=null==e?void 0:e.target)||void 0===_a?void 0:_a.checked)&&void 0!==_b&&_b;null==ctx||ctx.onSelect(null!=id?id:"",isChecked,isUnderHeader?isChecked:void 0)}),[ctx,id,isUnderHeader]);(0,react.useEffect)((function(){(null==ctx?void 0:ctx.forceCollapse)&&setIsExpanded(!1)}),[null==ctx?void 0:ctx.forceCollapse]);var isChecked=(null===(_b=null==ctx?void 0:ctx.selected)||void 0===_b?void 0:_b.indexOf(parseInt("".concat(id))))>-1;isUnderHeader&&(isChecked=(null===(_c=null==ctx?void 0:ctx.rows)||void 0===_c?void 0:_c.length)===(null==ctx?void 0:ctx.selected.length));var classNames=(0,src.uY)("sui-table__row",{focus:!isUnderFooter&&!isUnderHeader&&isFocused,hover:!isUnderFooter&&!isUnderHeader&&isHovered,expandable:isExpandable,expanded:isExpanded}),toggleBtn=isExpandable&&(0,jsx_runtime.jsx)(button_src.zx,{icon:isExpanded?"chevron-up":"chevron-down",color:"black",appearance:"tertiary",isSmall:!0,iconOnly:!0,onClick:function(){return setIsExpanded(!isExpanded)},children:"".concat(isExpanded?"Collapse":"Expand"," Row")}),numberOfCols=react.Children.count(children);(null==ctx?void 0:ctx.allowCheck)&&(numberOfCols+=1),actions&&(numberOfCols+=1),children=react.Children.toArray(children).map((function(child,index){var p={hasDragIcon:!1,colSpan:void 0};return 0===index&&(null==ctx?void 0:ctx.isDraggable)&&!isUnderHeader&&(p.hasDragIcon=!0),isUnderFooter&&(p.hasDragIcon=!1,p.colSpan="100%"),(0,jsx_runtime.jsx)(react.Fragment,{children:(0,react.cloneElement)(child,p)},index)}));var a11yProps={};return isExpandable&&(a11yProps.id=rowId,a11yProps["aria-expanded"]=isExpanded,a11yProps["aria-controls"]=rowContentId),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("tr",table_row_assign({role:"row",className:classNames},methods,props,a11yProps,{children:[(null==ctx?void 0:ctx.allowCheck)&&!isUnderFooter&&(0,jsx_runtime.jsx)(TableCell,{className:"sui-table__cell--selection",children:(0,jsx_runtime.jsx)(checkbox_src.X,{onChange:onCheckToggle,defaultValue:isChecked})}),children,(!!actions||toggleBtn)&&!isUnderFooter&&(0,jsx_runtime.jsxs)(TableCell,{className:"sui-table__cell--actions",children:[!!actions&&actions({id,content:toggleBtn}),!actions&&toggleBtn]})]})),isExpandable&&!!expandableContent&&isExpanded&&(0,jsx_runtime.jsx)("tr",{role:"row",className:(0,src.uY)("sui-table__row",{content:!0,"content-expanded":isExpanded}),id:rowContentId,"aria-labelledby":rowId,tabIndex:isExpanded?0:-1,children:(0,jsx_runtime.jsx)("td",{colSpan:numberOfCols,children:expandableContent})})]})},table_head_assign=function(){return table_head_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},table_head_assign.apply(this,arguments)},table_head_rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},TableHead=function(_a){var children=_a.children,props=(_a.hasActions,table_head_rest(_a,["children","hasActions"]));return(0,jsx_runtime.jsx)("thead",table_head_assign({className:"sui-table__head"},props,{children:react.Children.toArray(children).map((function(child){return(0,react.cloneElement)(child,table_head_assign(table_head_assign({},child.props),{isUnderHeader:!0}))}))}))},table_footer_assign=function(){return table_footer_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},table_footer_assign.apply(this,arguments)},table_footer_rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},TableFooter=function(_a){var children=_a.children,props=table_footer_rest(_a,["children"]);return(0,jsx_runtime.jsx)("tfoot",table_footer_assign({className:"sui-table__footer"},props,{children:react.Children.toArray(children).map((function(child){return(0,react.cloneElement)(child,table_footer_assign(table_footer_assign({},child.props),{isUnderFooter:!0}))}))}))}}}]);