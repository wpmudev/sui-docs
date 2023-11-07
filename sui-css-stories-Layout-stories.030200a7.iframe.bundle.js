/*! For license information please see sui-css-stories-Layout-stories.030200a7.iframe.bundle.js.LICENSE.txt */
(self.webpackChunksui_docs=self.webpackChunksui_docs||[]).push([[899],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hw:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hw,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-links/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{kZ:()=>_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.kZ});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs");__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs")},"./node_modules/@storybook/addon-links/dist/react/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>react_default});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs"),__webpack_require__("./node_modules/react/index.js")),LinkTo=class extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind,title=kind,story,name=story}=this.props;if(title&&name){let href=await(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.ew)(title,name);this.setState({href})}},this.handleClick=()=>{let{kind,title=kind,story,name=story}=this.props;title&&name&&(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.c4)({title,name})}}componentDidMount(){this.updateHref()}componentDidUpdate(prevProps){let{kind,title,story,name}=this.props;(prevProps.kind!==kind||prevProps.story!==story||prevProps.title!==title||prevProps.name!==name)&&this.updateHref()}render(){let{kind,title=kind,story,name=story,children,...rest}=this.props,{href}=this.state;return react__WEBPACK_IMPORTED_MODULE_2__.createElement("a",{href,onClick:e=>((e,cb=(_e=>{}))=>{(e=>!(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))(e)&&(e.preventDefault(),cb(e))})(e,this.handleClick),...rest},children)}};LinkTo.defaultProps={children:void 0};var react_default=LinkTo},"./packages/sui-css/stories/Layout.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Layout:()=>Layout,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Layout_stories});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),storybook=__webpack_require__("./packages/storybook/lib/storybook.ts"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),dist_react=__webpack_require__("./node_modules/@storybook/addon-links/dist/react/index.mjs"),dedent=__webpack_require__("./node_modules/dedent/dist/dedent.js"),dedent_default=__webpack_require__.n(dedent);const SnippetLayout=dedent_default()`
<div class="sui-layout"> ... </div>
`,SnippetLayoutContent=dedent_default()`
<!-- For vertical spacing -->
<div class="sui-layout sui-layout--vertical"> ... </div>\n
<!-- For horizontal spacing -->
<div class="sui-layout sui-layout--horizontal"> ... </div>
`,SnippetSpacing=dedent_default()`
<div class="sui-layout">\n
	<div class="sui-layout__content"> ... </div>\n
</div>
`;function _createMdxContent(props){const _components=Object.assign({p:"p",strong:"strong"},(0,lib.ah)(),props.components);return storybook.T3||_missingMdxReference("Page",!1),storybook.T3.Simple||_missingMdxReference("Page.Simple",!0),(0,jsx_runtime.jsx)(dist.E$,{children:(0,jsx_runtime.jsxs)(storybook.T3.Simple,{title:"Layout",subtitle:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["The layout is the most basic container required when using our default"," ",(0,jsx_runtime.jsx)(dist_react.Z,{kind:"sui-css-framework-grid",story:"grid",children:"grid system"}),". Choose between full-width (100% wide all the time) and contained (it has a maximum width) content."]}),status:"ready",children:[(0,jsx_runtime.jsxs)(storybook.$0,{title:"Usage",contained:!0,border:!0,style:{paddingTop:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["It is essential to wrap the plugin's content with a div containing\nthe ",(0,jsx_runtime.jsx)(storybook.EK,{children:"sui-layout"})," class name. This class name will justify\nthe content accordingly inside the admin area, removing unnecessary\nspacing and allowing us to occupy the whole area more conveniently."]})}),(0,jsx_runtime.jsx)("p",{children:"Below, there's an example of placing the main layout wrapper."}),(0,jsx_runtime.jsx)(storybook.pP,{language:"html",children:SnippetLayout}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["While the ",(0,jsx_runtime.jsx)(storybook.EK,{children:"sui-layout"})," class name allows the content to\noccupy the entire width of the admin area (minus the sidebar), using\nthe ",(0,jsx_runtime.jsx)(storybook.EK,{children:"sui-layout__content"})," class name as an inner wrapper\nwill horizontally align content to the center and give them a\nmaximum width defined in the Design Tokens file."]})}),(0,jsx_runtime.jsx)(storybook.pP,{language:"html",children:SnippetLayoutContent}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Remember skipping the ",(0,jsx_runtime.jsx)(storybook.EK,{children:"sui-layout--vertical"})," class for\nthe Top Navigation component is fine, but it is a must-go modifier\nfor other types of content."]})})]}),(0,jsx_runtime.jsxs)(storybook.$0,{title:"Spacing",children:[(0,jsx_runtime.jsxs)("div",{className:"csb-section__contained",style:{marginBottom:20},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Modify the ",(0,jsx_runtime.jsx)(storybook.EK,{children:"sui-layout"})," wrapper spacing in two ways:\nvertical and horizontal, where vertical spacing will prevent\nyour content from being glued to the WordPress top bar."]})}),(0,jsx_runtime.jsx)(storybook.pP,{html:"html",children:SnippetSpacing}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"The spacing respects a base gutter of 8px and relies on the\nthree main breakpoints we use in our design system: default (or\nnone), medium, and large."})}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"When applying any modifier spacing class, these set padding to\n16px, and it applies to every screen size; Once the screen\nreaches a minimum width of 1024px, the spacing overwrites to\n24px; Finally, for screens larger than 1200px, the spacing would\nbe 32px."})}),(0,jsx_runtime.jsx)("p",{children:"Peek at the table below for more detailed information."})]}),(0,jsx_runtime.jsx)(storybook.iA,{headers:["Breakpoint","Container Min-Width","Spacing"],content:[{columns:{0:(0,jsx_runtime.jsx)(_components.strong,{children:"Default"}),1:"None (auto)",2:"48px"}},{columns:{0:(0,jsx_runtime.jsx)(_components.strong,{children:"Medium"}),1:"≥ 1024px",2:"24px"}},{columns:{0:(0,jsx_runtime.jsx)(_components.strong,{children:"Large"}),1:"≥ 1200px",2:"32px"}}]})]})]})})}function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const Layout_stories={title:"SUI/CSS Framework/Layout",parameters:{layout:"fullscreen",docs:{page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},interactions:{disabled:!0}}},Layout=({fullwidth,vertical,horizontal})=>{const barSettings={fullwidth,vertical,horizontal};return(0,jsx_runtime.jsx)(TopBar,{settings:barSettings})};Layout.displayName="Layout",Layout.args={fullwidth:!1,vertical:!1,horizontal:!1},Layout.argTypes={fullwidth:{name:"Full Width",control:{type:"boolean"}},vertical:{name:"Vertical Spacing",control:{type:"boolean"}},horizontal:{name:"Horizontal Spacing",control:{type:"boolean"}}};const Box=({top,children})=>{const boxStyles={background:"#FFF"};return top?boxStyles.padding="16px 0":(boxStyles.padding=30,boxStyles.borderRadius=4),(0,jsx_runtime.jsx)("div",{style:boxStyles,children})};Box.displayName="Box";const BoxWrapper=({children})=>(0,jsx_runtime.jsx)("div",{style:{padding:"0 32px"},children});BoxWrapper.displayName="BoxWrapper";const Logo=()=>(0,jsx_runtime.jsx)("div",{style:{width:48,height:48,display:"flex",flexFlow:"row wrap",alignItems:"center",justifyContent:"center",borderRadius:16,background:"#2DC4E0",color:"#FFF",fontSize:22,lineHeight:1,fontWeight:700,textAlign:"center"},children:"L"});Logo.displayName="Logo";const TopBar=({settings})=>{const barSettings=Object.assign({fullwidth:!1,vertical:!1,horizontal:!1},settings),vSpacing=barSettings.vertical?" sui-layout--vertical":"",hSpacing=barSettings.horizontal?" sui-layout--horizontal":"";return(0,jsx_runtime.jsx)("div",{className:`sui-layout${vSpacing}${hSpacing}`,children:barSettings.fullwidth?(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsx)(Box,{top:!0,children:(0,jsx_runtime.jsx)(BoxWrapper,{children:(0,jsx_runtime.jsx)(Logo,{})})})}):(0,jsx_runtime.jsx)(Box,{top:!0,children:(0,jsx_runtime.jsx)(BoxWrapper,{children:(0,jsx_runtime.jsx)(Logo,{})})})})};TopBar.displayName="TopBar",Layout.__docgenInfo={description:"",methods:[],displayName:"Layout"};const __namedExportsOrder=["Layout"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/dedent/dist/dedent.js":module=>{"use strict";module.exports=function dedent(strings){var raw=void 0;raw="string"==typeof strings?[strings]:strings.raw;for(var result="",i=0;i<raw.length;i++)result+=raw[i].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),i<(arguments.length<=1?0:arguments.length-1)&&(result+=arguments.length<=i+1?void 0:arguments[i+1]);var lines=result.split("\n"),mindent=null;return lines.forEach((function(l){var m=l.match(/^(\s+)\S+/);if(m){var indent=m[1].length;mindent=mindent?Math.min(mindent,indent):indent}})),null!==mindent&&(result=lines.map((function(l){return" "===l[0]?l.slice(mindent):l})).join("\n")),(result=result.trim()).replace(/\\n/g,"\n")}}}]);
//# sourceMappingURL=sui-css-stories-Layout-stories.030200a7.iframe.bundle.js.map