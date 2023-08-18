"use strict";(self.webpackChunksui_docs=self.webpackChunksui_docs||[]).push([[8151],{"./packages/sui-react/packages/components/tooltip/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Tooltip});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/sui-react/packages/components/button/src/index.ts"),utils_src=__webpack_require__("./packages/sui-react/packages/utils/src/index.ts"),hooks_src=__webpack_require__("./packages/sui-react/packages/hooks/src/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},TagNames={button:src.zx,text:"span",icon:function(_a){var _b,_c=_a.name,name=void 0===_c?"":_c,_d=_a.size,size=void 0===_d?"md":_d;if(!(!(0,utils_src.o8)(name)&&!(0,utils_src.xb)(null!=name?name:"")))throw new Error('Required parameter is empty. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe "name" parameter in the icon element is required and must not be empty.\n\n');var classNames=(0,utils_src.uY)("suicons",((_b={})[name]=!(0,utils_src.xb)(name),_b[size]=!0,_b));return(0,jsx_runtime.jsx)("span",{className:"sui-tooltip__icon","aria-hidden":"true",children:(0,jsx_runtime.jsx)("span",{className:classNames})})}},Tooltip=function(_a){var _b,_c,label=_a.label,_d=_a.type,type=void 0===_d?"button":_d,_f=(_a.iconName,_a.className,_a.position),position=void 0===_f?"top":_f,customWidth=_a.customWidth,customMobileWidth=_a.customMobileWidth,children=_a.children,_g=_a.onClick,onClick=void 0===_g?function(){}:_g,_h=_a.onMouseEnter,onMouseEnter=void 0===_h?function(){}:_h,_j=_a.onMouseLeave,onMouseLeave=void 0===_j?function(){}:_j,_k=_a.onFocus,onFocus=void 0===_k?function(){}:_k,_l=_a.onBlur,onBlur=void 0===_l?function(){}:_l,props=__rest(_a,["label","type","iconName","className","position","customWidth","customMobileWidth","children","onClick","onMouseEnter","onMouseLeave","onFocus","onBlur"]),_m=(0,hooks_src.X2)({onMouseEnter,onMouseLeave,onFocus,onBlur}),isHovered=_m[0],isFocused=_m[1],methods=_m[2],toggleHover=_m[3],attrs={},classNames=(0,utils_src.uY)("sui-tooltip",((_b={show:isHovered,focus:isFocused,"custom-width":!!customWidth})[position]=!0,_b)),TagName=null!==(_c=null==TagNames?void 0:TagNames[type])&&void 0!==_c?_c:"";(customWidth||customMobileWidth)&&(attrs.style=__assign(__assign({},customWidth&&{"--tooltip-width":"".concat(customWidth,"px")}),customMobileWidth&&{"--tooltip-width-mobile":"".concat(customMobileWidth,"px")}));var escFunction=(0,react.useCallback)((function(event){"keyCode"in event&&"Escape"===event.code&&isHovered&&toggleHover(!1)}),[isHovered,toggleHover]);(0,react.useEffect)((function(){return document.addEventListener("keydown",escFunction),function(){document.removeEventListener("keydown",escFunction)}}),[escFunction]);var onClickCallback=(0,react.useCallback)((function(){onClick&&onClick()}),[onClick]);return(0,jsx_runtime.jsxs)("div",__assign({className:classNames},methods,{children:[(0,jsx_runtime.jsx)(TagName,__assign({},props,{onClick:onClickCallback,children:label})),!!children&&(0,jsx_runtime.jsx)("span",__assign({className:"sui-tooltip__content",role:"tooltip","aria-live":"polite","aria-hidden":!isHovered,tabIndex:isHovered?0:-1},attrs,{children}))]}))}},"./packages/sui-react/packages/components/code-snippet/stories/ReactCodeSnippet.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CodeSnippet:()=>ReactCodeSnippet_stories_CodeSnippet,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ReactCodeSnippet_stories});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),prism=__webpack_require__("./node_modules/prismjs/prism.js"),prism_default=__webpack_require__.n(prism),src=__webpack_require__("./packages/sui-react/packages/components/tooltip/src/index.ts"),utils_src=__webpack_require__("./packages/sui-react/packages/utils/src/index.ts"),CodeSnippet=function(_a){var _b=_a.language,language=void 0===_b?"markup":_b,_c=_a.copy,copy=void 0===_c||_c,_d=_a.className,className=void 0===_d?"":_d,children=_a.children,classNames=(0,utils_src.uY)("sui-code-snippet",{},null!=className?className:""),_e=(0,react.useState)(!1),isCopied=_e[0],setIsCopied=_e[1];(0,react.useEffect)((function(){null===prism_default()||void 0===prism_default()||prism_default().highlightAll()}),[]);var copyCodes=(0,react.useCallback)((function(text){var _a;null===(_a=null===navigator||void 0===navigator?void 0:navigator.clipboard)||void 0===_a||_a.writeText(text),setIsCopied(!0)}),[]);return(0,jsx_runtime.jsxs)("div",{className:classNames,children:[copy&&(0,jsx_runtime.jsx)(src.u,{label:"Copy",theme:"secondary",color:"black",position:"top","aria-label":isCopied?"Copied":"",onMouseLeave:function(){return setIsCopied(!1)},customWidth:"65",onClick:function(){return copyCodes(children)},children:isCopied&&"Copied"}),(0,jsx_runtime.jsx)("pre",{children:(0,jsx_runtime.jsx)("code",{className:"language-".concat(language),children})})]})},lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),storybook=(__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),__webpack_require__("./packages/storybook/lib/storybook.ts")),blocks_dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const anatomy_namespaceObject=__webpack_require__.p+"static/media/anatomy.536d551b.png";function _createMdxContent(props){const _components=Object.assign({p:"p",strong:"strong"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(storybook.$0,{contained:!0,border:!0,style:{paddingTop:0},children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"This element is meant to be used to display code. By default, it will\nplace a copy button on top right of the container, that way users can\neasily copy snippet content to clipboard."})})}),"\n",(0,jsx_runtime.jsxs)(storybook.$0,{title:"Anatomy",contained:!0,border:!0,children:[(0,jsx_runtime.jsx)("img",{src:anatomy_namespaceObject,alt:"Code snippet anatomy",style:{marginBottom:20}}),(0,jsx_runtime.jsxs)(storybook.aV,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Snippet Text:"})," Line or a block of codes."]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Copy button:"})," A copy button to copy the code."]})})]})]})]})}const TabUsage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function TabCode_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(storybook.$0,{contained:!0,style:{paddingTop:0,paddingBottom:0},children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Install the ",(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"Code Snippet"})," package as an\nindividual component or follow the Overview page instructions to get the\ncomplete SUI Components package."]})})}),"\n",(0,jsx_runtime.jsxs)(storybook.$0,{title:"Props",border:!0,children:[(0,jsx_runtime.jsx)("p",{children:"For code snippets we have the following props:"}),(0,jsx_runtime.jsxs)(storybook.$0,{title:{content:"language",tag:"string",small:!0},style:{paddingTop:10,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Whether the code that was passed is HTML, CSS or Javascript. By\ndefault it is set to HTML."})}),(0,jsx_runtime.jsx)("p",{children:"Allowed options:"}),(0,jsx_runtime.jsxs)(storybook.aV,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"markup"}),": HTML code."]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"javascript"}),": Javascript code."]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"css"}),": CSS code."]})})]})]}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"copy",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["If set ",(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"true"})," it will show a copy button to\ncopy the code. By default it is set to\n",(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"true"}),"."]})})}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"className",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Add a class name to the code snippet."})})]})]})}const TabCode=function TabCode_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabCode_createMdxContent,props)})):TabCode_createMdxContent(props)};var dedent=__webpack_require__("./node_modules/dedent/dist/dedent.js");const sampleCode=__webpack_require__.n(dedent)()`
import React from 'react';\n
import { CodeSnippet } from '@wpmudev/sui-react';\n
const Example() => {
	return <CodeSnippet type="markup" copy={false}>{Sample code}</CodeSnippet>;
}\n
export default Example;
`;function TabExamples_createMdxContent(props){return(0,jsx_runtime.jsxs)(storybook.$0,{contained:!0,style:{paddingTop:0},children:[(0,jsx_runtime.jsx)("p",{children:"Below is the default form of a code snippet, used for most cases."}),(0,jsx_runtime.jsx)(storybook.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(CodeSnippet,{language:"markup",copy:!0,children:"\x3c!-- Code Starts --\x3e\n<div class=”className”>\n\t<a href=”#”> Link </a>\n</div>"})}),(0,jsx_runtime.jsx)(storybook.pP,{language:"js",children:sampleCode})]})}const TabExamples=function TabExamples_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabExamples_createMdxContent,props)})):TabExamples_createMdxContent()};function ReactCodeSnippet_createMdxContent(props){return storybook.T3||_missingMdxReference("Page",!1),storybook.T3.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsx)(blocks_dist.E$,{children:(0,jsx_runtime.jsxs)(storybook.T3.Tabs,{title:"Code Snippet",subtitle:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Use code snippet blocks to show the code as examples."}),status:"draft",children:[(0,jsx_runtime.jsx)("div",{id:"usage",label:"Usage",children:(0,jsx_runtime.jsx)(TabUsage,{})}),(0,jsx_runtime.jsx)("div",{id:"code",label:"Code",children:(0,jsx_runtime.jsx)(TabCode,{})}),(0,jsx_runtime.jsx)("div",{id:"examples",label:"Examples",children:(0,jsx_runtime.jsx)(TabExamples,{})})]})})}function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const ReactCodeSnippet_stories={title:"SUI/Components/Advanced/Code Snippet",component:CodeSnippet,parameters:{layout:"fullscreen",docs:{page:function ReactCodeSnippet_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(ReactCodeSnippet_createMdxContent,props)})):ReactCodeSnippet_createMdxContent()}}}},ReactCodeSnippet_stories_CodeSnippet=({language,copy,color})=>{const boxStyles={padding:20,borderRadius:4,background:"white"!==color?"#fff":"#333"};return(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsx)("div",{style:boxStyles,children:(0,jsx_runtime.jsx)(CodeSnippet,{language,copy,children:"\x3c!-- Code Starts --\x3e\n<div class=”className”>\n    <a href=”#”> Link </a>\n</div>"})})})})};ReactCodeSnippet_stories_CodeSnippet.displayName="CodeSnippet",ReactCodeSnippet_stories_CodeSnippet.args={language:"markup",copy:!0},ReactCodeSnippet_stories_CodeSnippet.argTypes={language:{name:"Code Language",options:["markup","javascript","css"],control:{type:"select",labels:{markup:"Language: HTML",javascript:"Language: Javascript",css:"Language: CSS"}}},copy:{name:"Copy Button",control:{type:"boolean"}}},ReactCodeSnippet_stories_CodeSnippet.__docgenInfo={description:"",methods:[],displayName:"CodeSnippet"};const __namedExportsOrder=["CodeSnippet"]}}]);
//# sourceMappingURL=sui-react-packages-components-code-snippet-stories-ReactCodeSnippet-stories.fe17764d.iframe.bundle.js.map