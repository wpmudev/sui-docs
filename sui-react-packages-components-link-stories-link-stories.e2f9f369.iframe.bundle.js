/*! For license information please see sui-react-packages-components-link-stories-link-stories.e2f9f369.iframe.bundle.js.LICENSE.txt */
(self.webpackChunksui_docs=self.webpackChunksui_docs||[]).push([[1966],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise(((resolve,reject)=>{__webpack_require__.e(9433).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hw:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hw,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-links/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{kZ:()=>_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.kZ});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs");__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs")},"./node_modules/@storybook/addon-links/dist/react/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>react_default});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs"),__webpack_require__("./node_modules/react/index.js")),react_default=class extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind,title=kind,story,name=story}=this.props;if(title&&name){let href=await(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.ew)(title,name);this.setState({href})}},this.handleClick=()=>{let{kind,title=kind,story,name=story}=this.props;title&&name&&(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.c4)({title,name})}}static{this.defaultProps={children:void 0}}componentDidMount(){this.updateHref()}componentDidUpdate(prevProps){let{kind,title,story,name}=this.props;(prevProps.kind!==kind||prevProps.story!==story||prevProps.title!==title||prevProps.name!==name)&&this.updateHref()}render(){let{kind,title=kind,story,name=story,children,...rest}=this.props,{href}=this.state;return react__WEBPACK_IMPORTED_MODULE_2__.createElement("a",{href,onClick:e=>((e,cb=(_e=>{}))=>{(e=>!(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))(e)&&(e.preventDefault(),cb(e))})(e,this.handleClick),...rest},children)}}},"./packages/sui-react/packages/components/link/stories/link.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Link:()=>link_stories_Link,__namedExportsOrder:()=>__namedExportsOrder,default:()=>link_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/sui-react/packages/utils/src/index.ts")),components=__webpack_require__("./packages/sui-icons/src/components/index.ts"),hooks_src=__webpack_require__("./packages/sui-react/packages/hooks/src/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},Link=function(_a){var _b,_c=_a.theme,theme=void 0===_c?"primary":_c,_d=_a.as,as=void 0===_d?"a":_d,_e=_a.className,className=void 0===_e?"":_e,_f=_a.isInline,isInline=void 0!==_f&&_f,isDisabled=_a.isDisabled,isExternal=_a.isExternal,hasExternalIcon=_a.hasExternalIcon,children=_a.children,props=__rest(_a,["theme","as","className","isInline","isDisabled","isExternal","hasExternalIcon","children"]),TagName=null!=as?as:"a",_g=(0,hooks_src.X2)({}),hover=_g[0],focus=_g[1],methods=_g[2],classNames=(0,src.uY)("sui-link",((_b={inline:isInline,disabled:isDisabled,hover,focus})[theme]=!(0,src.xb)(null==theme||theme),_b),className),linkProps=__assign(__assign({},props),{className:classNames});if("a"!==TagName){var href_1=linkProps.href;linkProps.role="link",linkProps.onClick=function(e){(0,src.wW)(e,!1,!0),window.open(href_1,isExternal?"_blank":"_top")},delete linkProps.href}else isExternal&&(linkProps.target="_blank");return(0,jsx_runtime.jsxs)(TagName,__assign({tabIndex:0},methods,linkProps,{children:[children,hasExternalIcon&&isExternal&&(0,jsx_runtime.jsx)(components.ExternalLink,{size:"sm"})]}))},lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),storybook=__webpack_require__("./packages/storybook/lib/storybook.ts"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(storybook.$0,{title:"Installation",contained:!0,style:{paddingTop:20,paddingBottom:0},children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Install the ",(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"Link"})," package as an individual\ncomponent or follow the Overview page instructions to get the complete SUI\nComponents package."]})})}),"\n",(0,jsx_runtime.jsxs)(storybook.$0,{title:"Props",border:!0,children:[(0,jsx_runtime.jsxs)(storybook.$0,{title:{content:"theme*",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:"Theme of the link"}),(0,jsx_runtime.jsxs)("p",{children:[(0,jsx_runtime.jsx)(_components.p,{children:"Allowed options:"}),(0,jsx_runtime.jsxs)(storybook.aV,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"primary"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"secondary"})})]})]})]}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"as*",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsxs)("p",{children:["The html tag for the link, default is ",(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:" a "})," tag "]})}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"href",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"The link to navigate to"})}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"isInline",tag:"boolean",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"If set to true, the link will be displayed inline with surrounding text."})}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"isDisabled",tag:"boolean",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"If true, the link won't be interactive and it will have a different visual style."})}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"isExternal",tag:"boolean",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsxs)("p",{children:["If set to ",(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:" true"})," the link will be opened in a new tab "]})}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"hasExternalIcon*",tag:"boolean",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsxs)("p",{children:["If set to ",(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:" true "})," an external link icon will be displayed at the end of the link text, note that ",(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:" isExternal "})," should also be set to ",(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:" true "})," for this to take effect"]})}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"className*",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"A custom css className(s) for the link"})}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"children",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"The link text"})})]})]})}const TabCode=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};var dedent=__webpack_require__("./node_modules/dedent/dist/dedent.js"),dedent_default=__webpack_require__.n(dedent);const basicCode=dedent_default()`
    <Link href="https://wpmudev.com">Visit our website</Link>
`,externalCode=dedent_default()`
    <Link href="https://wpmudev.com" isExternal={true} hasExternalIcon={true}>External Website Link</Link>
`,secondaryThemeCode=dedent_default()`
    <Link theme="secondary" href="https://wpmudev.com">Visit our website</Link>
`,disabledCode=dedent_default()`
    <Link isDisabled={true} href="https://wpmudev.com">
        Disabled Link
    </Link>
`;function TabExamples_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(storybook.$0,{title:"Basic Link Example",contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsx)(storybook.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(Link,{href:"https://wpmudev.com",children:"Visit our website"})}),(0,jsx_runtime.jsx)(storybook.pP,{language:"js",children:basicCode})]}),"\n",(0,jsx_runtime.jsxs)(storybook.$0,{title:"Secondary Theme",contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["In the ",(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:" secondary "})," theme the color of text is\nwhite"]})}),(0,jsx_runtime.jsx)(storybook.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"#0059FF",padding:"20px"},children:(0,jsx_runtime.jsx)(Link,{theme:"secondary",href:"https://wpmudev.com",children:(0,jsx_runtime.jsx)(_components.p,{children:"Visit our website"})})})}),(0,jsx_runtime.jsx)(storybook.pP,{language:"js",children:secondaryThemeCode})]}),"\n",(0,jsx_runtime.jsxs)(storybook.$0,{title:"External Link",contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsx)(storybook.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(Link,{href:"https://wpmudev.com",isExternal:!0,hasExternalIcon:!0,children:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"External Website Link"})})}),(0,jsx_runtime.jsx)(storybook.pP,{language:"js",children:externalCode})]}),"\n",(0,jsx_runtime.jsxs)(storybook.$0,{title:"Disabled",contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsx)(storybook.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(Link,{isDisabled:!0,href:"https://wpmudev.com",children:(0,jsx_runtime.jsx)(_components.p,{children:"Disabled Link"})})}),(0,jsx_runtime.jsx)(storybook.pP,{language:"js",children:disabledCode})]})]})}const TabExamples=function TabExamples_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabExamples_createMdxContent,props)})):TabExamples_createMdxContent(props)},anatomy_namespaceObject=__webpack_require__.p+"static/media/anatomy.9a0e8f60.svg",spacing_namespaceObject=__webpack_require__.p+"static/media/spacing.89411d1e.svg",types_namespaceObject=__webpack_require__.p+"static/media/types.083de0ff.svg",states_namespaceObject=__webpack_require__.p+"static/media/states.95908df6.svg",alt_color_namespaceObject=__webpack_require__.p+"static/media/alt-color.2f3368c7.svg",default_namespaceObject=__webpack_require__.p+"static/media/default.8ea839b1.svg",alt_namespaceObject=__webpack_require__.p+"static/media/alt.35b44129.svg";function TabUsage_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(storybook.$0,{title:"Anatomy",children:(0,jsx_runtime.jsxs)(storybook.X2,{children:[(0,jsx_runtime.jsxs)(storybook.JX,{children:[(0,jsx_runtime.jsx)("h3",{style:{marginTop:0},children:"1. Link Text"}),(0,jsx_runtime.jsx)("p",{children:"A label for the context of Rich text editor."}),(0,jsx_runtime.jsx)("h3",{children:"2. External icon"}),(0,jsx_runtime.jsx)("p",{children:"Only used if the link is external."})]}),(0,jsx_runtime.jsx)(storybook.JX,{size:"4",children:(0,jsx_runtime.jsx)("img",{src:anatomy_namespaceObject,alt:"Link Anatomy"})})]})}),"\n",(0,jsx_runtime.jsx)(storybook.$0,{title:"Spacing",children:(0,jsx_runtime.jsx)("img",{src:spacing_namespaceObject,alt:"Link Spacing"})}),"\n",(0,jsx_runtime.jsx)(storybook.$0,{title:"Types",children:(0,jsx_runtime.jsx)("img",{src:types_namespaceObject,alt:"Link Types"})}),"\n",(0,jsx_runtime.jsx)(storybook.$0,{title:"States",children:(0,jsx_runtime.jsx)("img",{src:states_namespaceObject,alt:"Link Types"})}),"\n",(0,jsx_runtime.jsx)(storybook.$0,{title:"Link alt color",children:(0,jsx_runtime.jsx)("img",{src:alt_color_namespaceObject,alt:"Link alt color"})}),"\n",(0,jsx_runtime.jsxs)(storybook.$0,{title:"High contrast mode",children:[(0,jsx_runtime.jsx)("h3",{children:"Link Default"}),(0,jsx_runtime.jsx)("img",{src:default_namespaceObject,alt:"Link Default"}),(0,jsx_runtime.jsx)("h3",{children:"Link Alt"}),(0,jsx_runtime.jsx)("img",{src:alt_namespaceObject,alt:"Link Alt"})]})]})}const TabUsage=function TabUsage_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabUsage_createMdxContent,props)})):TabUsage_createMdxContent()};function link_createMdxContent(props){return storybook.T3||_missingMdxReference("Page",!1),storybook.T3.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsx)(dist.E$,{children:(0,jsx_runtime.jsxs)(storybook.T3.Tabs,{title:"Link",subtitle:"Links are clickable elements that allow users to navigate to different sections, pages, or external resources. They may appear within a phrase or paragraph, or directly following the content.",status:"draft",children:[(0,jsx_runtime.jsx)("div",{id:"usage",label:"Usage",children:(0,jsx_runtime.jsx)(TabUsage,{})}),(0,jsx_runtime.jsx)("div",{id:"code",label:"Code",children:(0,jsx_runtime.jsx)(TabCode,{})}),(0,jsx_runtime.jsx)("div",{id:"examples",label:"Examples",children:(0,jsx_runtime.jsx)(TabExamples,{})})]})})}function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}var _a,_b,_c,link_stories_assign=function(){return link_stories_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},link_stories_assign.apply(this,arguments)},link_stories_rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const link_stories={title:"SUI/Components/Core/Link",component:Link,parameters:{layout:"fullscreen",docs:{page:function link_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(link_createMdxContent,props)})):link_createMdxContent()}}}};var link_stories_Link=function(_a,_b){_a.example;var props=link_stories_rest(_a,["example"]),theme=_b.globals.theme,backgroundColor="#fff";"secondary"===(null==props?void 0:props.theme)&&(backgroundColor="#0059FF"),"dark"===theme&&"secondary"===(null==props?void 0:props.theme)&&(backgroundColor="#000");var box={margin:"0 0 20px",padding:"30px",border:"1px solid #E6E6E6",borderRadius:"4px",background:backgroundColor};return(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsx)("div",{style:box,children:(0,jsx_runtime.jsx)(Link,link_stories_assign({},props,{children:"Test link"}))})})})};link_stories_Link.args={theme:"primary",href:"https://wpmudev.com",as:"a",isInline:!1,isDisabled:!1,isExternal:!1,hasExternalIcon:!1},link_stories_Link.argTypes={theme:{name:"Theme",options:["primary","secondary"],control:{type:"select",labels:{primary:"Theme: Primary",secondary:"Theme: Secondary"}}},as:{name:"As",control:{type:"text"}},isInline:{name:"isInline",control:{type:"boolean"}},isDisabled:{name:"isDisabled",control:{type:"boolean"}},isExternal:{name:"isExternal",control:{type:"boolean"}},hasExternalIcon:{name:"hasExternalIcon",control:{type:"boolean"}},className:{name:"className",control:{type:"text"}}},link_stories_Link.parameters=link_stories_assign(link_stories_assign({},link_stories_Link.parameters),{docs:link_stories_assign(link_stories_assign({},null===(_a=link_stories_Link.parameters)||void 0===_a?void 0:_a.docs),{source:link_stories_assign({originalSource:'({\n  example,\n  ...props\n}, {\n  globals: {\n    theme\n  }\n}) => {\n  let backgroundColor = "#fff";\n  if ("secondary" === props?.theme) {\n    backgroundColor = "#0059FF";\n  }\n  if ("dark" === theme && "secondary" === props?.theme) {\n    backgroundColor = "#000";\n  }\n  const box = {\n    margin: "0 0 20px",\n    padding: "30px",\n    border: "1px solid #E6E6E6",\n    borderRadius: "4px",\n    background: backgroundColor\n  };\n  return <div className="sui-layout sui-layout--horizontal sui-layout--vertical">\n            <div className="sui-layout__content">\n                <div style={box}>\n                    <SuiLink {...props}>Test link</SuiLink>\n                </div>\n            </div>\n        </div>;\n}'},null===(_c=null===(_b=link_stories_Link.parameters)||void 0===_b?void 0:_b.docs)||void 0===_c?void 0:_c.source)})});const __namedExportsOrder=["Link"]},"./packages/sui-react/packages/hooks/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{p4:()=>useDetectRTL,Y9:()=>useDragAndDrop,X2:()=>useInteraction,rw:()=>useOuterClick,vI:()=>usePortal,GT:()=>useValidateProps});var react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/sui-react/packages/utils/src/index.ts"),useInteraction=function(methods){var _a=(0,react.useState)(!1),isHovered=_a[0],setIsHovered=_a[1],_b=(0,react.useState)(!1),isFocused=_b[0],setIsFocused=_b[1],_c=methods,onMouseEnter=_c.onMouseEnter,onMouseLeave=_c.onMouseLeave,onMouseDownCapture=_c.onMouseDownCapture,onMouseUpCapture=_c.onMouseUpCapture,onFocus=_c.onFocus,onBlur=_c.onBlur,onBlurCapture=_c.onBlurCapture,toggleHover=(0,react.useCallback)((function(state,event,callback){void 0===event&&(event=null),void 0===callback&&(callback=function(e){}),setIsHovered(state),(0,src.mf)(callback)&&callback(event)}),[]),toggleFocus=(0,react.useCallback)((function(state,event,callback){void 0===event&&(event=null),void 0===callback&&(callback=function(e){}),setIsFocused(state),(0,src.mf)(callback)&&callback(event)}),[]),onMouseEnterCallback=(0,react.useCallback)((function(e){return toggleHover(!0,e,onMouseEnter)}),[onMouseEnter,toggleHover]),onMouseLeaveCallback=(0,react.useCallback)((function(e){return toggleHover(!1,e,onMouseLeave)}),[onMouseLeave,toggleHover]),onMouseDownCaptureCallback=(0,react.useCallback)((function(e){return toggleFocus(!1,e,onMouseDownCapture)}),[onMouseDownCapture,toggleFocus]),onMouseUpCaptureCallback=(0,react.useCallback)((function(e){return toggleFocus(!0,e,onMouseUpCapture)}),[onMouseUpCapture,toggleFocus]),onBlurCaptureCallback=(0,react.useCallback)((function(e){return toggleHover(!1,e,onBlurCapture)}),[onBlurCapture,toggleHover]),onBlurCallback=(0,react.useCallback)((function(e){return toggleFocus(!1,e,onBlur)}),[onBlur,toggleFocus]);return[isHovered,isFocused,{onMouseEnter:onMouseEnterCallback,onMouseLeave:onMouseLeaveCallback,onMouseDownCapture:onMouseDownCaptureCallback,onMouseUpCapture:onMouseUpCaptureCallback,onFocus:(0,react.useCallback)((function(e){return toggleFocus(!0,e,onFocus)}),[onFocus,toggleFocus]),onBlur:onBlurCallback,onBlurCapture:onBlurCaptureCallback},toggleHover,toggleFocus]},useOuterClick=function(ref,callback){void 0===callback&&(callback=function(){});var onPageClick=(0,react.useCallback)((function(event){(null==ref?void 0:ref.current)&&!(null==ref?void 0:ref.current.contains(event.target))&&callback()}),[callback,ref]);(0,react.useEffect)((function(){return document.addEventListener("click",onPageClick),function(){document.removeEventListener("click",onPageClick)}}))},react_dom=__webpack_require__("./node_modules/react-dom/index.js"),usePortal=function(wrapperId){var _a=(0,react.useState)(null),wrapperElement=_a[0],setWrapperElement=_a[1];wrapperId=null!=wrapperId?wrapperId:".sui-wrap",(0,react.useLayoutEffect)((function(){var el=document.querySelector(wrapperId),systemCreated=!1;return el||(systemCreated=!0,el=function(wrapperId){var wrapperElement=document.createElement("div");return wrapperElement.setAttribute("id",wrapperId),document.body.appendChild(wrapperElement),wrapperElement}(wrapperId)),setWrapperElement(el),function(){systemCreated&&(null==el?void 0:el.parentNode)&&el.parentNode.removeChild(el)}}),[wrapperId]);return[function(children){return null===wrapperElement?null:(0,react_dom.createPortal)(children,wrapperElement)}]},useValidateProps=function(_a){var _b,propsToCheck=_a.propsToCheck,component=_a.component,componentName=(null==component?void 0:component.displayName)||(null==component?void 0:component.name);null===(_b=Object.keys(propsToCheck))||void 0===_b||_b.forEach((function(propKey,index){var _a;if(!!(0,src.xb)(null!==(_a=null==propsToCheck?void 0:propsToCheck[propKey])&&void 0!==_a?_a:""))throw new Error("Empty content is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 SUI 3 React - Components: ".concat(componentName,'\n\nThe "').concat(propKey,'" argument requires some value to be passed to it.\n\n'))}))},useDragAndDrop=function(_a){var containerRef=_a.containerRef,methods=_a.methods,_b=(0,react.useState)(),node=_b[0],setNode=_b[1],_c=(0,react.useState)(!1),isDragging=_c[0],setIsDragging=_c[1];return(0,react.useEffect)((function(){setNode(null==containerRef?void 0:containerRef.current)}),[containerRef]),(0,react.useEffect)((function(){var onDragOver=function(e){e.preventDefault(),e.stopPropagation(),setIsDragging(!0),(null==methods?void 0:methods.onDragOver)&&(null==methods||methods.onDragOver(e))},onDrop=function(e){e.preventDefault(),e.stopPropagation(),setIsDragging(!1),(null==methods?void 0:methods.onDrop)&&(null==methods||methods.onDrop(e))};return null==node||node.addEventListener("dragover",onDragOver,!1),null==node||node.addEventListener("drop",onDrop,!1),function(){null==node||node.removeEventListener("dragover",onDragOver,!1),null==node||node.removeEventListener("drop",onDrop,!1)}}),[containerRef,node,methods]),[isDragging]},useDetectRTL=function(){var _a=(0,react.useState)(!1),isRTL=_a[0],setIsRTL=_a[1];return(0,react.useEffect)((function(){var updateRTL=function(){var isDocumentRTL="rtl"===document.documentElement.getAttribute("dir");setIsRTL(isDocumentRTL)};updateRTL();var mutationObserver=new MutationObserver(updateRTL);return mutationObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}),function(){mutationObserver.disconnect()}}),[]),isRTL}},"./packages/sui-react/packages/utils/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{CI:()=>condContent,HD:()=>isString,Jw:()=>handleOnKeyDown,Kn:()=>isObject,c7:()=>capitalizeText,hj:()=>isNumber,jn:()=>isBoolean,kJ:()=>isArray,mf:()=>isFunction,o8:()=>isUndefined,uY:()=>generateCN,wW:()=>handleEventDefault,xb:()=>isEmpty});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),generateCN=function(base,variants,extraClassNames){void 0===variants&&(variants={}),void 0===extraClassNames&&(extraClassNames="");var classes=Object.keys(variants).map((function(attr){var _a;return(_a={})["".concat(base,"--").concat(attr)]=!!variants[attr],_a}));return classnames__WEBPACK_IMPORTED_MODULE_0___default()(base,classes,extraClassNames)},condContent=function(condition,content,fallback){return void 0===content&&(content=null),void 0===fallback&&(fallback=void 0),isNull(content)&&(content=condition),condition?content:fallback},isNull=function(value){return null===value},isUndefined=function(value){return void 0===value},isObject=function(value){return"object"==typeof value&&!Array.isArray(value)},isArray=function(value){return Array.isArray(value)},isBoolean=function(value){return"boolean"==typeof value},isNumber=function(value){return"number"==typeof value||!Number.isNaN(value)},isFunction=function(value){return"function"==typeof value},isString=function(value){return"string"==typeof value},isEmpty=function(value){return""===value},capitalizeText=function(string){var _a;return(null===(_a=null==string?void 0:string.charAt(0))||void 0===_a?void 0:_a.toUpperCase())+(null==string?void 0:string.slice(1))},handleOnKeyDown=function(event,callback){"Enter"!==event.key&&" "!==event.key||callback&&callback()},handleEventDefault=function(e,stopPropagation,preventDefault){stopPropagation&&(null==e||e.stopPropagation()),preventDefault&&(null==e||e.preventDefault())}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/dedent/dist/dedent.js":module=>{"use strict";module.exports=function dedent(strings){var raw=void 0;raw="string"==typeof strings?[strings]:strings.raw;for(var result="",i=0;i<raw.length;i++)result+=raw[i].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),i<(arguments.length<=1?0:arguments.length-1)&&(result+=arguments.length<=i+1?void 0:arguments[i+1]);var lines=result.split("\n"),mindent=null;return lines.forEach((function(l){var m=l.match(/^(\s+)\S+/);if(m){var indent=m[1].length;mindent=mindent?Math.min(mindent,indent):indent}})),null!==mindent&&(result=lines.map((function(l){return" "===l[0]?l.slice(mindent):l})).join("\n")),(result=result.trim()).replace(/\\n/g,"\n")}}}]);
//# sourceMappingURL=sui-react-packages-components-link-stories-link-stories.e2f9f369.iframe.bundle.js.map