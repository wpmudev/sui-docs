/*! For license information please see sui-react-packages-components-footer-stories-footer-stories.8715a646.iframe.bundle.js.LICENSE.txt */
(self.webpackChunksui_docs=self.webpackChunksui_docs||[]).push([[1078],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hw:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hw,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-links/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{kZ:()=>_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.kZ});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs");__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs")},"./node_modules/@storybook/addon-links/dist/react/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>react_default});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs"),__webpack_require__("./node_modules/react/index.js")),LinkTo=class extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind,title=kind,story,name=story}=this.props;if(title&&name){let href=await(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.ew)(title,name);this.setState({href})}},this.handleClick=()=>{let{kind,title=kind,story,name=story}=this.props;title&&name&&(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.c4)({title,name})}}componentDidMount(){this.updateHref()}componentDidUpdate(prevProps){let{kind,title,story,name}=this.props;(prevProps.kind!==kind||prevProps.story!==story||prevProps.title!==title||prevProps.name!==name)&&this.updateHref()}render(){let{kind,title=kind,story,name=story,children,...rest}=this.props,{href}=this.state;return react__WEBPACK_IMPORTED_MODULE_2__.createElement("a",{href,onClick:e=>((e,cb=(_e=>{}))=>{(e=>!(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))(e)&&(e.preventDefault(),cb(e))})(e,this.handleClick),...rest},children)}};LinkTo.defaultProps={children:void 0};var react_default=LinkTo},"./packages/sui-react/packages/components/footer/stories/footer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Footer:()=>footer_stories_Footer,__namedExportsOrder:()=>__namedExportsOrder,default:()=>footer_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),components=__webpack_require__("./packages/sui-icons/src/components/index.ts");const socialIcons={facebook:components.Facebook,instagram:components.Instagram,twitter:components.Twitter},Footer=({links,socialLinks,renderBlocks})=>{let blocks=[];if(renderBlocks){blocks=renderBlocks((0,jsx_runtime.jsx)("span",{children:"Made with ♡ by WPMU DEV"}))}return(0,jsx_runtime.jsxs)("div",{className:"sui-footer","data-testid":"footer",children:[blocks.length>0&&(0,jsx_runtime.jsx)("div",{className:"sui-footer__group sui-footer__group--credits"+(1===blocks.length?" sui-footer__group--center":""),children:(blocks||[])?.map(((block,index)=>(0,jsx_runtime.jsx)("div",{className:"sui-footer__block",children:block},index)))}),(0,jsx_runtime.jsxs)("div",{className:"sui-footer__group sui-footer__group--links",children:[(0,jsx_runtime.jsx)("div",{className:"sui-footer__block",children:(0,jsx_runtime.jsx)("a",{href:"https://wpmudev.com",target:"_blank",rel:"noreferrer nofollow",children:(0,jsx_runtime.jsx)("img",{className:"sui-footer__block--logo",alt:"WPMU DEV"})})}),(links??[]).length>0&&(0,jsx_runtime.jsx)("div",{className:"sui-footer__block sui-footer__block--pages","data-testid":"footer-links",children:(0,jsx_runtime.jsx)("ul",{className:"sui-footer__links",children:(links??[])?.map(((list,index)=>(0,jsx_runtime.jsx)("li",{className:"sui-footer__links--item",children:(0,jsx_runtime.jsx)("a",{href:list.url,children:list.title})},index)))})}),(0,jsx_runtime.jsx)("div",{className:"sui-footer__block",children:(socialLinks??[])?.length>0&&(0,jsx_runtime.jsx)("ul",{className:"sui-footer__links sui-footer__links--social","data-testid":"footer-social-links",children:(socialLinks??[])?.map(((socialLink,index)=>{const SocialIcon=socialIcons[socialLink?.type];return(0,jsx_runtime.jsx)("li",{className:"sui-footer__links--item",children:(0,jsx_runtime.jsx)("a",{href:socialLink.url,target:"_blank",rel:"noopener noreferrer",children:(0,jsx_runtime.jsx)(SocialIcon,{size:"sm"})})},index)}))})})]})]})};var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),storybook=__webpack_require__("./packages/storybook/lib/storybook.ts"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");__webpack_require__.p,__webpack_require__.p;const anatomy_free_namespaceObject=__webpack_require__.p+"static/media/anatomy-free.ac2a67a0.svg",anatomy_pro_namespaceObject=__webpack_require__.p+"static/media/anatomy-pro.1b1f0f8d.svg",free_desktop_spacing_namespaceObject=__webpack_require__.p+"static/media/free-desktop-spacing.fd40d38f.svg",free_tablet_spacing_namespaceObject=__webpack_require__.p+"static/media/free-tablet-spacing.4e091aaa.svg",pro_mobile_spacing_namespaceObject=__webpack_require__.p+"static/media/pro-mobile-spacing.bb085fe4.svg",free_mobile_spacing_namespaceObject=__webpack_require__.p+"static/media/free-mobile-spacing.5960689e.svg",hover_state_namespaceObject=__webpack_require__.p+"static/media/hover-state.562008bf.svg",focus_state_namespaceObject=__webpack_require__.p+"static/media/focus-state.aa068213.svg";function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(storybook.$0,{title:"Anatomy - Free",style:{paddingTop:20},children:[(0,jsx_runtime.jsx)("img",{src:anatomy_free_namespaceObject,alt:"Footer - Anatomy Free"}),(0,jsx_runtime.jsxs)(storybook.X2,{children:[(0,jsx_runtime.jsxs)(storybook.JX,{children:[(0,jsx_runtime.jsx)("h3",{children:"1. Feature One"}),(0,jsx_runtime.jsx)("p",{children:"This section is used to highlight/make the user aware of the Pro feature/section but not in an upselling manner."}),(0,jsx_runtime.jsx)("h3",{children:"3. Brand Logo (WPMU Dev)"}),(0,jsx_runtime.jsx)("p",{children:"Updated logo of WPMU Dev (Black version)"}),(0,jsx_runtime.jsx)("h3",{children:"5. Social Links"}),(0,jsx_runtime.jsx)("p",{children:"Depending upon the use case, icons can be different. For example, they can replace the icon if the company isn't on some media platform. However, the design will be similar across all the plugins, and those icons will have hyperlinks to the social media account."})]}),(0,jsx_runtime.jsxs)(storybook.JX,{children:[(0,jsx_runtime.jsx)("h2",{children:"2. Feature second"}),(0,jsx_runtime.jsx)("p",{children:"This section is used to highlight the pro/free feature, which should be necessary for the user (Like a tutorial in this case)"}),(0,jsx_runtime.jsx)("h2",{children:"4. links"}),(0,jsx_runtime.jsx)("p",{children:"We will put Text as links connected with the brand."})]})]})]}),"\n",(0,jsx_runtime.jsxs)(storybook.$0,{title:"Anatomy - Pro",style:{paddingTop:20},children:[(0,jsx_runtime.jsx)("img",{src:anatomy_pro_namespaceObject,alt:"Footer Anatomy Pro"}),(0,jsx_runtime.jsxs)(storybook.X2,{children:[(0,jsx_runtime.jsxs)(storybook.JX,{children:[(0,jsx_runtime.jsx)("h3",{children:"1. Simple Tagline"}),(0,jsx_runtime.jsx)("p",{children:"Made with WP tag."}),(0,jsx_runtime.jsx)("h3",{children:"3. Other links"}),(0,jsx_runtime.jsx)("p",{children:"We will put Text as links connected with the brand."})]}),(0,jsx_runtime.jsxs)(storybook.JX,{children:[(0,jsx_runtime.jsx)("h2",{children:"2. Brand Logo (WPMU Dev)"}),(0,jsx_runtime.jsx)("p",{children:"Child group is nested under parent group, it can have sub children items."}),(0,jsx_runtime.jsx)("h2",{children:"4. Social Links"}),(0,jsx_runtime.jsx)("p",{children:"Depending upon the use case, icons can be different. For example, they can replace the icon if the company isn't on some media platform. However, the design will be similar across all the plugins, and those icons will have hyperlinks to the social media account."})]})]})]}),"\n",(0,jsx_runtime.jsxs)(storybook.$0,{title:"Spacing Guides",style:{paddingTop:20},children:[(0,jsx_runtime.jsx)("h3",{children:"Footer Free - Desktop"}),(0,jsx_runtime.jsx)("img",{src:free_desktop_spacing_namespaceObject,alt:"Footer Free Desktop Spacing"}),(0,jsx_runtime.jsx)("h3",{style:{paddingTop:20},children:"Footer Free - Tablet"}),(0,jsx_runtime.jsx)("img",{src:free_tablet_spacing_namespaceObject,alt:"Footer Free Tablet Spacing",style:{paddingTop:20}}),(0,jsx_runtime.jsxs)(storybook.X2,{children:[(0,jsx_runtime.jsxs)(storybook.JX,{style:{paddingTop:20},children:[(0,jsx_runtime.jsx)("h3",{children:"Footer Pro - Mobile"}),(0,jsx_runtime.jsx)("img",{src:pro_mobile_spacing_namespaceObject,alt:"Footer Pro Mobile Spacing"})]}),(0,jsx_runtime.jsxs)(storybook.JX,{style:{paddingTop:20},children:[(0,jsx_runtime.jsx)("h3",{children:"Footer Free - Mobile"}),(0,jsx_runtime.jsx)("img",{src:free_mobile_spacing_namespaceObject,alt:"Footer Free Mobile Spacing"})]})]})]}),"\n",(0,jsx_runtime.jsxs)(storybook.$0,{title:"Behaviour",style:{paddingTop:20},children:[(0,jsx_runtime.jsx)("h3",{children:"Hover State"}),(0,jsx_runtime.jsx)("img",{src:hover_state_namespaceObject,alt:"Footer Hover State"}),(0,jsx_runtime.jsx)("h3",{children:"Focus State"}),(0,jsx_runtime.jsx)("img",{src:focus_state_namespaceObject,alt:"Footer Focus State"})]})]})}const TabUsage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent()};function TabCode_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(storybook.$0,{title:"Installation",contained:!0,style:{paddingTop:20,paddingBottom:0},children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Install the ",(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"Footer"})," package as an individual\ncomponent or follow the Overview page instructions to get the complete SUI\nComponents package."]})})}),"\n",(0,jsx_runtime.jsxs)(storybook.$0,{title:"Props",border:!0,children:[(0,jsx_runtime.jsxs)(storybook.$0,{title:{content:"links*",tag:"array",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:"Links to be displayed in the footer, each item in the array is an object with the following keys"}),(0,jsx_runtime.jsxs)(storybook.aV,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"url"})," The url of of the link"]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"title"})," The link text"]})})]})]}),(0,jsx_runtime.jsxs)(storybook.$0,{title:{content:"socialLinks*",tag:"array",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:"The social links to be displayed in the footer, each item in the array is an object with the following keys:"}),(0,jsx_runtime.jsxs)(storybook.aV,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"url"})," The url to the social account or page"]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"type"})," could be one of three values: facebook, twitter, instagram"]})})]})]}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"renderBlocks*",tag:"function",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"A function to render additional content for the footer"})})]})]})}const TabCode=function TabCode_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabCode_createMdxContent,props)})):TabCode_createMdxContent(props)};var dedent=__webpack_require__("./node_modules/dedent/dist/dedent.js"),dedent_default=__webpack_require__.n(dedent);const freeVariationCode=dedent_default()`
    <Footer
      renderBlocks={() => [
       <Fragment key={0}>
          Check our{" "}
          <a href="#" target="_blank" rel="nofollow">
            All in One WordPress Toolkit
          </a>
        </Fragment>,
        <Fragment key={2}>
          To get the most out of the plugin,{" "}
          <a href="#" target="_blank" rel="nofollow">
            see the Help section
          </a>
        </Fragment>,
      ]}
      socialLinks={[
        {
          url: "#",
          type: "facebook",
        },
        {
          url: "#",
          type: "instagram",
        },
        {
          url: "#",
          type: "twitter",
        },
      ]}
      links={[
        {
          url: "#",
          title: "Free Plugins",
        },
        {
          url: "#",
          title: "Membership",
        },
        {
          url: "#",
          title: "Roadmap",
        },
        {
          url: "#",
          title: "Support",
        },
        {
          url: "#",
          title: "Community",
        },
        {
          url: "#",
          title: "The Hub",
        },
        {
          url: "#",
          title: "Terms of Service",
        },
        {
          url: "#",
          title: "Privacy Policy",
        },
      ]}
    />
`,proVariationCode=dedent_default()`
    <Footer
      renderBlocks={() => [
       <Fragment key={0}>
          Check our{" "}
          <a href="#" target="_blank" rel="nofollow">
            All in One WordPress Toolkit
          </a>
        </Fragment>,
        <Fragment key={2}>
          To get the most out of the plugin,{" "}
          <a href="#" target="_blank" rel="nofollow">
            see the Help section
          </a>
        </Fragment>,
      ]}
      socialLinks={[
        {
          url: "#",
          type: "facebook",
        },
        {
          url: "#",
          type: "instagram",
        },
        {
          url: "#",
          type: "twitter",
        },
      ]}
      links={[
        {
          url: "#",
          title: "Free Plugins",
        },
        {
          url: "#",
          title: "Membership",
        },
        {
          url: "#",
          title: "Roadmap",
        },
        {
          url: "#",
          title: "Support",
        },
        {
          url: "#",
          title: "Community",
        },
        {
          url: "#",
          title: "The Hub",
        },
        {
          url: "#",
          title: "Terms of Service",
        },
        {
          url: "#",
          title: "Privacy Policy",
        },
      ]}
    />
`;function TabExamples_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(storybook.$0,{style:{paddingTop:30},children:[(0,jsx_runtime.jsx)("p",{children:"Below is the free variation of the footer component"}),(0,jsx_runtime.jsx)(storybook.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(Footer,{renderBlocks:content=>[content],socialLinks:[{url:"#",type:"facebook"},{url:"#",type:"instagram"},{url:"#",type:"twitter"}],links:[{url:"#",title:"Free Plugins"},{url:"#",title:"Membership"},{url:"#",title:"Roadmap"},{url:"#",title:"Support"},{url:"#",title:"Community"},{url:"#",title:"The Hub"},{url:"#",title:"Terms of Service"},{url:"#",title:"Privacy Policy"}]})}),(0,jsx_runtime.jsx)(storybook.pP,{language:"js",children:freeVariationCode})]}),"\n",(0,jsx_runtime.jsxs)(storybook.$0,{title:"The Pro Variation",style:{paddingTop:30},children:[(0,jsx_runtime.jsx)(storybook.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(Footer,{renderBlocks:content=>[content],socialLinks:[{url:"#",type:"facebook"},{url:"#",type:"instagram"},{url:"#",type:"twitter"}],links:[{url:"#",title:"Free Plugins"},{url:"#",title:"Membership"},{url:"#",title:"Roadmap"},{url:"#",title:"Support"},{url:"#",title:"Community"},{url:"#",title:"The Hub"},{url:"#",title:"Terms of Service"},{url:"#",title:"Privacy Policy"}]})}),(0,jsx_runtime.jsx)(storybook.pP,{language:"js",children:proVariationCode})]})]})}const TabExamples=function TabExamples_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabExamples_createMdxContent,props)})):TabExamples_createMdxContent()};function Footer_createMdxContent(props){return storybook.T3||_missingMdxReference("Page",!1),storybook.T3.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsx)(dist.E$,{children:(0,jsx_runtime.jsxs)(storybook.T3.Tabs,{title:"Footer",subtitle:"The Footer component serves as the bottom section of a web page, it contains information like copyright notices, contact details, and links to important resources.",status:"draft",children:[(0,jsx_runtime.jsx)("div",{id:"usage",label:"Usage",children:(0,jsx_runtime.jsx)(TabUsage,{})}),(0,jsx_runtime.jsx)("div",{id:"code",label:"Code",children:(0,jsx_runtime.jsx)(TabCode,{})}),(0,jsx_runtime.jsx)("div",{id:"examples",label:"Examples",children:(0,jsx_runtime.jsx)(TabExamples,{})})]})})}function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const footer_stories={title:"SUI/Components/Collections/Footer",component:Footer,parameters:{layout:"fullscreen",docs:{page:function Footer_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Footer_createMdxContent,props)})):Footer_createMdxContent()}}}},footer_stories_Footer=({example})=>(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsx)(Footer,{renderBlocks:"free"===example?()=>[(0,jsx_runtime.jsxs)(react.Fragment,{children:["Check our"," ",(0,jsx_runtime.jsx)("a",{href:"https://wpmudev.com",target:"_blank",rel:"noreferrer nofollow",children:"All in One WordPress Toolkit"})]},0),(0,jsx_runtime.jsxs)(react.Fragment,{children:["To get the most out of the plugin,"," ",(0,jsx_runtime.jsx)("a",{href:"https://wpmudev.com",target:"_blank",rel:"noreferrer nofollow",children:"see the Help section"})]},2)]:content=>[content],socialLinks:[{url:"#",type:"facebook"},{url:"#",type:"instagram"},{url:"#",type:"twitter"}],links:[{url:"#",title:"Free Plugins"},{url:"#",title:"Membership"},{url:"#",title:"Roadmap"},{url:"#",title:"Support"},{url:"#",title:"Community"},{url:"#",title:"The Hub"},{url:"#",title:"Terms of Service"},{url:"#",title:"Privacy Policy"}]})})});footer_stories_Footer.args={example:"free"},footer_stories_Footer.argTypes={example:{name:"Example",options:["free","pro"],control:{type:"select",labels:{free:"Free",pro:"Pro"}}}};const __namedExportsOrder=["Footer"]},"./packages/sui-react/packages/utils/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{CI:()=>condContent,F3:()=>chunkArray,HD:()=>isString,Jw:()=>handleOnKeyDown,Kn:()=>isObject,c7:()=>capitalizeText,h4:()=>PluginsIcons,jn:()=>isBoolean,kJ:()=>isArray,mf:()=>isFunction,o8:()=>isUndefined,uY:()=>generateCN,wW:()=>handleEventDefault,xb:()=>isEmpty});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);const generateCN=(base,variants={},extraClassNames="")=>{const classes=Object.keys(variants).map((attr=>({[`${base}--${attr}`]:!!variants?.[attr]})));return classnames__WEBPACK_IMPORTED_MODULE_0___default()(base,classes,extraClassNames)},condContent=(condition,content=null,fallback=void 0)=>(isNull(content)&&(content=condition),condition?content:fallback),isNull=value=>null===value,isUndefined=value=>void 0===value,isObject=value=>"object"==typeof value&&!Array.isArray(value),isArray=value=>Array.isArray(value),isBoolean=value=>"boolean"==typeof value,isFunction=value=>"function"==typeof value,isString=value=>"string"==typeof value,isEmpty=value=>""===value,capitalizeText=string=>string?.charAt(0)?.toUpperCase()+string?.slice(1),handleOnKeyDown=(event,callback)=>{"Enter"!==event.key&&" "!==event.key||callback&&callback(event)},handleEventDefault=(e,stopPropagation,preventDefault)=>{stopPropagation&&e?.stopPropagation(),preventDefault&&e?.preventDefault()},PluginsIcons={smush:{bg:"#2dc4e0",color:"#FFF",icon:"PluginSmush"},defender:{bg:"#282a2c",color:"#FFF",icon:"PluginDefender"},snapshot:{bg:"#1a325e",color:"#FFF",icon:"PluginSnapshot"},hummingbird:{bg:"#ff8e3c",color:"#FFF",icon:"PluginHummingbird"},forminator:{bg:"#1f2852",color:"#FFF",icon:"PluginForminator"},beehive:{bg:"#013aa9",color:"#FFF",icon:"PluginBeehive"},hustle:{bg:"#1a1a1a",color:"#FFF",icon:"PluginHustle"},smartcrawl:{bg:"#de240a",color:"#FFF",icon:"PluginSmartCrawl"},shipper:{bg:"#7b5499",color:"#FFF",icon:"PluginShipper"},branda:{bg:"#ff8184",color:"#FFF",icon:"PluginBranda"}},chunkArray=(arr,size)=>{const chunkedArray=[];for(let i=0;i<arr.length;i+=size){const chunk=arr.slice(i,i+size);chunkedArray.push(chunk)}return chunkedArray}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/dedent/dist/dedent.js":module=>{"use strict";module.exports=function dedent(strings){var raw=void 0;raw="string"==typeof strings?[strings]:strings.raw;for(var result="",i=0;i<raw.length;i++)result+=raw[i].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),i<(arguments.length<=1?0:arguments.length-1)&&(result+=arguments.length<=i+1?void 0:arguments[i+1]);var lines=result.split("\n"),mindent=null;return lines.forEach((function(l){var m=l.match(/^(\s+)\S+/);if(m){var indent=m[1].length;mindent=mindent?Math.min(mindent,indent):indent}})),null!==mindent&&(result=lines.map((function(l){return" "===l[0]?l.slice(mindent):l})).join("\n")),(result=result.trim()).replace(/\\n/g,"\n")}}}]);
//# sourceMappingURL=sui-react-packages-components-footer-stories-footer-stories.8715a646.iframe.bundle.js.map