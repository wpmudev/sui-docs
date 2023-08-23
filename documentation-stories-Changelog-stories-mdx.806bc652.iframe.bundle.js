/*! For license information please see documentation-stories-Changelog-stories-mdx.806bc652.iframe.bundle.js.LICENSE.txt */
(self.webpackChunksui_docs=self.webpackChunksui_docs||[]).push([[5121],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise(((resolve,reject)=>{__webpack_require__.e(9433).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hw:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hw,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-links/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{kZ:()=>_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.kZ});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs");__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs")},"./node_modules/@storybook/addon-links/dist/react/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>react_default});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs"),__webpack_require__("./node_modules/react/index.js")),react_default=class extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind,title=kind,story,name=story}=this.props;if(title&&name){let href=await(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.ew)(title,name);this.setState({href})}},this.handleClick=()=>{let{kind,title=kind,story,name=story}=this.props;title&&name&&(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.c4)({title,name})}}static{this.defaultProps={children:void 0}}componentDidMount(){this.updateHref()}componentDidUpdate(prevProps){let{kind,title,story,name}=this.props;(prevProps.kind!==kind||prevProps.story!==story||prevProps.title!==title||prevProps.name!==name)&&this.updateHref()}render(){let{kind,title=kind,story,name=story,children,...rest}=this.props,{href}=this.state;return react__WEBPACK_IMPORTED_MODULE_2__.createElement("a",{href,onClick:e=>((e,cb=(_e=>{}))=>{(e=>!(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))(e)&&(e.preventDefault(),cb(e))})(e,this.handleClick),...rest},children)}}},"./packages/documentation/stories/Changelog.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>Changelog_stories});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),storybook=__webpack_require__("./packages/storybook/lib/storybook.ts"),blocks_dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(storybook.$0,{title:{content:"1.8.2",date:"2022-05-30",tag:"New"},border:!0,style:{paddingTop:0},children:[(0,jsx_runtime.jsxs)(storybook.aV,{title:"Improvements",id:"components-improvements--1-8-2",children:[(0,jsx_runtime.jsxs)("div",{label:(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"react-progress-bar"}),children:[(0,jsx_runtime.jsx)("div",{label:"Comparing a string and a number with strict operator is pointless."}),(0,jsx_runtime.jsx)("div",{label:"Using isNaN may lead to unexpected results."})]}),(0,jsx_runtime.jsx)("div",{label:(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"react-modal"}),children:(0,jsx_runtime.jsx)("div",{label:"Missing cleanup of timer in componentDidMount."})}),(0,jsx_runtime.jsxs)("div",{label:(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"react-dropdown"}),children:[(0,jsx_runtime.jsx)("div",{label:"Using component state to compute could lead to undesired behavior."}),(0,jsx_runtime.jsx)("div",{label:"Case clause is duplicated."})]})]}),(0,jsx_runtime.jsxs)(storybook.aV,{title:"Bug Fixes",id:"components-bugs--1-8-2",children:[(0,jsx_runtime.jsx)("div",{label:(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"react-pagination"}),children:(0,jsx_runtime.jsx)("div",{label:"Repeated property."})}),(0,jsx_runtime.jsx)("div",{label:(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"react-input"}),children:(0,jsx_runtime.jsx)("div",{label:"Class identifier is wrong."})})]})]})}const _1_8_2=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent()};function _1_8_1_createMdxContent(props){return(0,jsx_runtime.jsxs)(storybook.$0,{title:{content:"1.8.1",date:"2022-05-03"},border:!0,children:[(0,jsx_runtime.jsxs)(storybook.aV,{title:"New Features",id:"components-features--1-8-1",children:[(0,jsx_runtime.jsxs)("div",{label:(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"react-input"}),children:[(0,jsx_runtime.jsx)("div",{label:"Add prefix prop."}),(0,jsx_runtime.jsx)("div",{label:"Add suffix prop."}),(0,jsx_runtime.jsx)("div",{label:"Allow constrained field."})]}),(0,jsx_runtime.jsx)("div",{label:(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"react-notifications"}),children:(0,jsx_runtime.jsx)("div",{label:"Support callback function for dismiss button."})})]}),(0,jsx_runtime.jsxs)(storybook.aV,{title:"Improvements",id:"components-improvements--1-8-1",children:[(0,jsx_runtime.jsx)("div",{label:(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"react-dropdown"}),children:(0,jsx_runtime.jsx)("div",{label:"Add disabled property for trigger menu button."})}),(0,jsx_runtime.jsxs)("div",{label:(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"react-notifications"}),children:[(0,jsx_runtime.jsx)("div",{label:"Ability to edit dismiss button label."}),(0,jsx_runtime.jsx)("div",{label:"Loading must be a state of the component."})]})]}),(0,jsx_runtime.jsxs)(storybook.aV,{title:"Bug Fixes",id:"components-bugs--1-8-1",children:[(0,jsx_runtime.jsxs)("div",{label:(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"react-pagination"}),children:[(0,jsx_runtime.jsx)("div",{label:"Parent wrapper breaks the component."}),(0,jsx_runtime.jsx)("div",{label:"Wrong package version for builder."})]}),(0,jsx_runtime.jsxs)("div",{label:(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"react-post"}),children:[(0,jsx_runtime.jsx)("div",{label:"Image keeps on loading when is empty or null."}),(0,jsx_runtime.jsx)("div",{label:"Wrong package version for builder."}),(0,jsx_runtime.jsx)("div",{label:"Disabled state is missing."}),(0,jsx_runtime.jsx)("div",{label:"Post title HTML chars are rendered encoded on hovering."})]}),(0,jsx_runtime.jsxs)("div",{label:(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"react-dropdown"}),children:[(0,jsx_runtime.jsx)("div",{label:"Wrong package version for builder."}),(0,jsx_runtime.jsx)("div",{label:"Missing disabled styles for options."})]}),(0,jsx_runtime.jsxs)("div",{label:(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"react-accordion"}),children:[(0,jsx_runtime.jsx)("div",{label:"Wrong package version for builder."}),(0,jsx_runtime.jsx)("div",{label:"Demo image is missing in the stories."})]}),(0,jsx_runtime.jsx)("div",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"react-progress-bar"}),", ",(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"react-notifications"}),", ",(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"react-modal"}),", ",(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"react-input"}),", ",(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"react-button"}),", ",(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"react-box"})]}),children:(0,jsx_runtime.jsx)("div",{label:"Wrong package version for builder."})})]})]})}const _1_8_1=function _1_8_1_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_1_8_1_createMdxContent,props)})):_1_8_1_createMdxContent()};function _1_8_0_createMdxContent(props){return(0,jsx_runtime.jsxs)(storybook.$0,{title:{content:"1.8.0",date:"2022-01-30"},children:[(0,jsx_runtime.jsxs)(storybook.aV,{title:"New Features",id:"components-features--1-8-0",children:[(0,jsx_runtime.jsx)("div",{label:(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"react-progress-bar"}),children:(0,jsx_runtime.jsx)("div",{label:"Create new component."})}),(0,jsx_runtime.jsx)("div",{label:(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"react-button"}),children:(0,jsx_runtime.jsx)("div",{label:"Allow icon to be placed at left or right of label."})}),(0,jsx_runtime.jsx)("div",{label:(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"react-input"}),children:(0,jsx_runtime.jsx)("div",{label:"Allow error class/state."})})]}),(0,jsx_runtime.jsx)(storybook.aV,{title:"Improvements",id:"components-improvements--1-8-0",children:(0,jsx_runtime.jsx)("div",{label:(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"react-modal"}),children:(0,jsx_runtime.jsx)("div",{label:"Trap focus without external library."})})}),(0,jsx_runtime.jsx)(storybook.aV,{title:"Bug Fixes",id:"components-bugs--1-8-0",children:(0,jsx_runtime.jsx)("div",{label:(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"react-post"}),children:(0,jsx_runtime.jsx)("div",{label:"Misaligned description when reading time is missing."})})})]})}const _1_8_0=function _1_8_0_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_1_8_0_createMdxContent,props)})):_1_8_0_createMdxContent()};function Components_createMdxContent(props){return(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)(_1_8_2,{}),(0,jsx_runtime.jsx)(_1_8_1,{}),(0,jsx_runtime.jsx)(_1_8_0,{}),(0,jsx_runtime.jsx)(storybook.$0,{style:{paddingTop:0},children:(0,jsx_runtime.jsx)(storybook.v0,{color:"blue",action:{label:"See More",style:"primary",color:"blue",link:"https://github.com/wpmudev/shared-ui-react/blob/master/CHANGELOG.md"},children:(0,jsx_runtime.jsx)("p",{children:"Visit our public GitHub repo to read the complete log of changes."})})})]})}const Components=function Components_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Components_createMdxContent,props)})):Components_createMdxContent()};function _1_0_0_createMdxContent(props){return(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"1.0.0",date:"2022-12-27",tag:"New"},style:{paddingTop:0},children:(0,jsx_runtime.jsx)(storybook.aV,{title:"New Features",id:"css-new__1-0-0",children:(0,jsx_runtime.jsxs)("div",{label:"Initial release.",children:[(0,jsx_runtime.jsx)("div",{label:"Create core tokens file."}),(0,jsx_runtime.jsx)("div",{label:"Define the main layout."}),(0,jsx_runtime.jsx)("div",{label:"Define the flex-box grid."}),(0,jsx_runtime.jsx)("div",{label:"Define global typography."}),(0,jsx_runtime.jsx)("div",{label:"Define primary, secondary and extended colors."})]})})})}const _1_0_0=function _1_0_0_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_1_0_0_createMdxContent,props)})):_1_0_0_createMdxContent()};function CssFramework_createMdxContent(props){return(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)(_1_0_0,{}),(0,jsx_runtime.jsx)(storybook.$0,{style:{paddingTop:0},children:(0,jsx_runtime.jsx)(storybook.v0,{color:"blue",action:{label:"See More",style:"primary",color:"blue",link:"https://github.com/wpmudev/sui-css/"},children:(0,jsx_runtime.jsx)("p",{children:"Visit our public GitHub repo to read the complete log of changes."})})})]})}const CssFramework=function CssFramework_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(CssFramework_createMdxContent,props)})):CssFramework_createMdxContent()};function IconsPack_1_0_0_createMdxContent(props){return(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"1.0.0",date:"2022-12-20"},children:(0,jsx_runtime.jsx)(storybook.aV,{title:"New Features",id:"icons-new__1-0-0",children:(0,jsx_runtime.jsx)("div",{label:"Initial release."})})})}const IconsPack_1_0_0=function IconsPack_1_0_0_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(IconsPack_1_0_0_createMdxContent,props)})):IconsPack_1_0_0_createMdxContent()};function _1_1_0_createMdxContent(props){return(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"1.1.0",date:"2023-01-23",tag:"New"},border:!0,style:{paddingTop:0},children:(0,jsx_runtime.jsxs)(storybook.aV,{title:"New Features",id:"icons-new__1-1-0",children:[(0,jsx_runtime.jsx)("div",{label:"Define icons sizing."}),(0,jsx_runtime.jsx)("div",{label:"New icon for roadmap."}),(0,jsx_runtime.jsxs)("div",{label:"Add missing icons:",children:[(0,jsx_runtime.jsx)("div",{label:(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"copy"})}),(0,jsx_runtime.jsx)("div",{label:(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"tag"})}),(0,jsx_runtime.jsx)("div",{label:(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"clock"})}),(0,jsx_runtime.jsx)("div",{label:(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"key"})}),(0,jsx_runtime.jsx)("div",{label:(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"external-link"})})]})]})})}const _1_1_0=function _1_1_0_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_1_1_0_createMdxContent,props)})):_1_1_0_createMdxContent()};function IconsPack_createMdxContent(props){return(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)(_1_1_0,{}),(0,jsx_runtime.jsx)(IconsPack_1_0_0,{}),(0,jsx_runtime.jsx)(storybook.$0,{style:{paddingTop:0},children:(0,jsx_runtime.jsx)(storybook.v0,{color:"blue",action:{label:"See More",style:"primary",color:"blue",link:"https://github.com/wpmudev/sui-icons/blob/master/CHANGELOG.md"},children:(0,jsx_runtime.jsx)("p",{children:"Visit our public GitHub repo to read the complete log of changes."})})})]})}const IconsPack=function IconsPack_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(IconsPack_createMdxContent,props)})):IconsPack_createMdxContent()};function Changelog_stories_createMdxContent(props){const _components=Object.assign({a:"a"},(0,lib.ah)(),props.components);return storybook.T3||_missingMdxReference("Page",!1),storybook.T3.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"SUI/What's New/Changelog"}),"\n",(0,jsx_runtime.jsx)(blocks_dist.E$,{children:(0,jsx_runtime.jsxs)(storybook.T3.Tabs,{title:"Changelog",subtitle:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Shared UI Design System's parts are versioned and released using Node Package Manager. NPM's ",(0,jsx_runtime.jsx)(_components.a,{href:"https://www.npmjs.com/org/wpmudev",target:"_blank",rel:"nofollow",children:"organization page"})," lists all packages available and their most recent versions."]}),children:[(0,jsx_runtime.jsx)("div",{id:"components",label:"Components",children:(0,jsx_runtime.jsx)(Components,{})}),(0,jsx_runtime.jsx)("div",{id:"css-framework",label:"CSS Framework",children:(0,jsx_runtime.jsx)(CssFramework,{})}),(0,jsx_runtime.jsx)("div",{id:"icons-pack",label:"Icons Pack",children:(0,jsx_runtime.jsx)(IconsPack,{})})]})})]})}function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"SUI/What's New/Changelog",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function Changelog_stories_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(Changelog_stories_createMdxContent,{...props})}):Changelog_stories_createMdxContent(props)}};const Changelog_stories=componentMeta},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);