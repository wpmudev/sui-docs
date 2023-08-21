/*! For license information please see sui-react-packages-components-spinner-stories-spinner-stories.950aec25.iframe.bundle.js.LICENSE.txt */
(self.webpackChunksui_docs=self.webpackChunksui_docs||[]).push([[3251],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hw:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hw,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-links/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{kZ:()=>_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.kZ});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs");__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs")},"./node_modules/@storybook/addon-links/dist/react/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>react_default});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs"),__webpack_require__("./node_modules/react/index.js")),react_default=class extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind,title=kind,story,name=story}=this.props;if(title&&name){let href=await(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.ew)(title,name);this.setState({href})}},this.handleClick=()=>{let{kind,title=kind,story,name=story}=this.props;title&&name&&(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.c4)({title,name})}}static{this.defaultProps={children:void 0}}componentDidMount(){this.updateHref()}componentDidUpdate(prevProps){let{kind,title,story,name}=this.props;(prevProps.kind!==kind||prevProps.story!==story||prevProps.title!==title||prevProps.name!==name)&&this.updateHref()}render(){let{kind,title=kind,story,name=story,children,...rest}=this.props,{href}=this.state;return react__WEBPACK_IMPORTED_MODULE_2__.createElement("a",{href,onClick:e=>((e,cb=(_e=>{}))=>{(e=>!(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))(e)&&(e.preventDefault(),cb(e))})(e,this.handleClick),...rest},children)}}},"./packages/sui-react/packages/components/spinner/stories/spinner.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Spinner:()=>spinner_stories_Spinner,__namedExportsOrder:()=>__namedExportsOrder,default:()=>spinner_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/sui-react/packages/utils/src/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},SpinnerLoader=function(_a){_a.color;var attrs={cx:"50%",cy:"50%",r:44};return(0,jsx_runtime.jsx)("div",{className:"sui-spinner__loader",children:(0,jsx_runtime.jsxs)("svg",{className:"sui-spinner__icon",viewBox:"0 0 100 100",children:[(0,jsx_runtime.jsx)("title",{children:"loading"}),(0,jsx_runtime.jsx)("circle",__assign({className:"sui-spinner__icon--background"},attrs)),(0,jsx_runtime.jsx)("circle",__assign({className:"sui-spinner__icon--stroke"},attrs))]})})},Spinner=function(_a){var _b,_c=_a.size,size=void 0===_c?"lg":_c,color=_a.color,_d=_a.isAbsolute,isAbsolute=void 0!==_d&&_d,classNames=(0,src.uY)("sui-spinner",((_b={absolute:isAbsolute})[size]=!(0,src.xb)(null!=size?size:""),_b.dark=!(0,src.xb)(color)&&"dark"===color,_b));return(0,jsx_runtime.jsx)("div",{className:classNames,children:(0,jsx_runtime.jsx)(SpinnerLoader,{color:null!=color?color:"primary",size:null!=size?size:"lg"})})},client=__webpack_require__("./node_modules/react-dom/client.js"),box_src=__webpack_require__("./packages/sui-react/packages/components/box/src/index.ts"),button_src=__webpack_require__("./packages/sui-react/packages/components/button/src/index.ts"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),storybook=__webpack_require__("./packages/storybook/lib/storybook.ts"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsx)(dist.E$,{children:(0,jsx_runtime.jsxs)(storybook.$0,{title:"Shhh... Not much to see here at the moment, but stay tuned!",contained:!0,children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Quiet for now, but get ready! Exciting stuff is coming. Our developers are working really hard behind the scenes to make it happen. Stay curious and excited! 🌟👷"})}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"In the meantime, feel free to explore our demo page for this component."})})]})})}var spinner_stories_assign=function(){return spinner_stories_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},spinner_stories_assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const spinner_stories={title:"SUI/Components/Core/Spinner",parameters:{layout:"fullscreen",docs:{page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}};var spinner_stories_Spinner=function(_a){_a.example,_a.children;var args=__rest(_a,["example","children"]),boxRef=(0,react.useRef)(null),loader=function(targetRef,_a){var color=_a.color,size=_a.size,_b=(0,react.useState)(!1),isVisible=_b[0],setIsVisible=_b[1],id=(0,react.useId)(),spinnerId="sui-spinner-".concat(id);return(0,react.useEffect)((function(){if(null==targetRef?void 0:targetRef.current){if(isVisible){var fakeDiv=document.createElement("div");return isVisible&&(fakeDiv.id=spinnerId,fakeDiv.classList.add("sui-spinner__fake"),targetRef.current.classList.add("sui-spinner__wrapper"),(0,client.createRoot)(fakeDiv).render((0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:"sui-spinner__overlay sui-spinner__overlay--".concat(color)}),(0,jsx_runtime.jsx)(Spinner,{color,size,isAbsolute:!0})]})),targetRef.current.appendChild(fakeDiv)),function(){if(fakeDiv){var spinnerDiv=document.getElementById(spinnerId);(null==spinnerDiv?void 0:spinnerDiv.parentNode)&&(targetRef.current.removeChild(spinnerDiv),targetRef.current.classList.remove("sui-spinner__wrapper"))}}}var spinnerDiv=document.getElementById(spinnerId);(null==spinnerDiv?void 0:spinnerDiv.parentNode)&&(targetRef.current.removeChild(spinnerDiv),targetRef.current.classList.remove("sui-spinner__wrapper"))}}),[color,size,targetRef,isVisible,spinnerId]),{show:function(){return setIsVisible(!0)},hide:function(){return setIsVisible(!1)},isVisible}}(boxRef,{color:args.color,size:args.size});return(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsxs)("div",{className:"sui-layout__content",style:{backgroundColor:"white",padding:"20px 40px"},children:[(0,jsx_runtime.jsx)("h3",{children:"Two ways to use spinner"}),(0,jsx_runtime.jsx)("h5",{children:"1. Using useSpinner hook: Use this method when you want to block content with a spinner overlay."}),(0,jsx_runtime.jsx)(button_src.zx,{appearance:"secondary",color:"black",isSmall:!0,onClick:function(){return loader.isVisible?loader.hide():loader.show()},children:loader.isVisible?"Hide Loader":"Show Loader"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("div",{ref:boxRef,style:{maxWidth:"400px",border:"solid 2px black"},children:(0,jsx_runtime.jsx)(box_src.x,{children:(0,jsx_runtime.jsx)(box_src.f,{children:(0,jsx_runtime.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"})})})}),(0,jsx_runtime.jsx)("h5",{children:"2. Component: use this when you want use spinner as inline element"}),(0,jsx_runtime.jsx)(Spinner,spinner_stories_assign({},args))]})})};spinner_stories_Spinner.args={isAbsolute:!1,size:"lg",color:"primary"},spinner_stories_Spinner.argTypes={isAbsolute:{name:"isAbsolute",type:"boolean"},size:{name:"Size",options:["","lg"],control:{type:"select",labels:{"":"Default",lg:"Large - lg"}}},color:{name:"Color",options:["primary","dark"],control:{type:"select",labels:{primary:"Primary",dark:"Dark"}}}};const __namedExportsOrder=["Spinner"]},"./packages/sui-react/packages/components/box/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{x:()=>Box,f:()=>BoxGroup});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/sui-react/packages/utils/src/index.ts"),BoxGroup=function(_a){var _b=_a.isInline,isInline=void 0===_b||_b,children=_a.children,slots=react.Children.map(children,(function(child,index){var _a,_b=null!==(_a=child.props)&&void 0!==_a?_a:{},slot=_b.slot,content=_b.children;return(0,src.Kn)(child)&&["left","right"].includes(null!=slot?slot:"")?(0,jsx_runtime.jsx)("div",{className:"sui-box-group__slot sui-box-group__".concat(slot),children:content},"sui-box-group--".concat(index)):(0,jsx_runtime.jsx)(react.Fragment,{children:child},"sui-box-group--".concat(index))})),classNames=(0,src.uY)("sui-box-group",{inline:isInline});return(0,jsx_runtime.jsx)("div",{className:classNames,children:slots})},__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},Box=function(_a){var title=_a.title,icon=_a.icon,headerLeft=_a.headerLeft,headerRight=_a.headerRight,children=_a.children,isSmall=_a.isSmall,_b=_a.className,className=void 0===_b?"":_b,hasTitle=!(0,src.o8)(title)&&!(0,src.xb)(title),hasIcon=!(0,src.o8)(icon)&&!(0,src.xb)(icon),hasLeft=!(0,src.o8)(headerRight)&&!(0,src.xb)(headerLeft),hasRight=!(0,src.o8)(headerRight)&&!(0,src.xb)(headerRight),classNames=(0,src.uY)("sui-box",{"size-sm":isSmall},className);return(0,jsx_runtime.jsxs)("div",{className:classNames,children:[hasTitle&&(0,jsx_runtime.jsxs)(BoxGroup,{isInline:!0,children:[(0,jsx_runtime.jsxs)("div",{slot:"left",children:[hasIcon&&(0,jsx_runtime.jsx)("span",{className:"suicons suicons--".concat(icon," suicons--lg sui-box-group__item"),"aria-hidden":"true"}),hasTitle&&(0,jsx_runtime.jsx)("h2",{className:"sui-heading sui-heading--h3 sui-box-group__item",children:title}),hasLeft&&headerLeft]}),(0,jsx_runtime.jsx)("div",__assign({},hasRight&&{slot:"right"},{children:hasRight&&headerRight}))]}),children]})}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);