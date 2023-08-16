/*! For license information please see sui-react-packages-components-uploader-stories-Uploader-stories.29b9806b.iframe.bundle.js.LICENSE.txt */
(self.webpackChunksui_docs=self.webpackChunksui_docs||[]).push([[880],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hw:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hw,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-links/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{kZ:()=>_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.kZ});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs");__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs")},"./node_modules/@storybook/addon-links/dist/react/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>react_default});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs"),__webpack_require__("./node_modules/react/index.js")),react_default=class extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind,title=kind,story,name=story}=this.props;if(title&&name){let href=await(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.ew)(title,name);this.setState({href})}},this.handleClick=()=>{let{kind,title=kind,story,name=story}=this.props;title&&name&&(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.c4)({title,name})}}static{this.defaultProps={children:void 0}}componentDidMount(){this.updateHref()}componentDidUpdate(prevProps){let{kind,title,story,name}=this.props;(prevProps.kind!==kind||prevProps.story!==story||prevProps.title!==title||prevProps.name!==name)&&this.updateHref()}render(){let{kind,title=kind,story,name=story,children,...rest}=this.props,{href}=this.state;return react__WEBPACK_IMPORTED_MODULE_2__.createElement("a",{href,onClick:e=>((e,cb=(_e=>{}))=>{(e=>!(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))(e)&&(e.preventDefault(),cb(e))})(e,this.handleClick),...rest},children)}}},"./packages/sui-react/packages/components/uploader/stories/Uploader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Uploader:()=>Uploader_stories_Uploader,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Uploader_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/sui-react/packages/components/form-field/src/index.ts"),components=__webpack_require__("./packages/sui-icons/src/components/index.ts"),button_src=__webpack_require__("./packages/sui-react/packages/components/button/src/index.ts"),SUI_UPLOADER_IMAGE_EXTS=["image/png","image/jpeg","image/jpg"],getFileImagePreview=function(file){var _a;return null!==(_a=null===URL||void 0===URL?void 0:URL.createObjectURL(file))&&void 0!==_a?_a:""},UploaderFile=function(_a){var fileType,id=_a.id,file=_a.file,onRemove=_a.onRemove;return(0,jsx_runtime.jsxs)("div",{className:"sui-uploader__file",children:[(0,jsx_runtime.jsx)("div",{className:"sui-uploader__file--preview",children:(fileType=null==file?void 0:file.type,SUI_UPLOADER_IMAGE_EXTS.includes(fileType)?(0,jsx_runtime.jsx)("span",{role:"img",className:"sui-uploader__file--image",style:{backgroundImage:"url(".concat(getFileImagePreview(file),")")}}):(0,jsx_runtime.jsx)(components.FileCheck,{size:"sm",className:"sui-uploader__file--icon"}))}),(0,jsx_runtime.jsx)("span",{className:"sui-uploader__file--name",children:null==file?void 0:file.name}),(0,jsx_runtime.jsx)(button_src.zx,{className:"sui-uploader__file--remove",iconOnly:!0,icon:"close",onClick:function(){return onRemove(id)}})]})},utils_src=__webpack_require__("./packages/sui-react/packages/utils/src/index.ts"),hooks_src=__webpack_require__("./packages/sui-react/packages/hooks/src/index.ts"),UploaderButton=function(_a){var _b=_a.btnTitle,btnTitle=void 0===_b?"":_b,_c=_a.allowDragAndDrop,allowDragAndDrop=void 0!==_c&&_c,_d=_a.onClick,onClick=void 0===_d?function(){}:_d,_e=_a.onDrag,onDrag=void 0===_e?function(){}:_e,dragRef=(0,react.useRef)(null),isDragging=(0,hooks_src.Y9)({containerRef:dragRef,methods:{onDrop:function(e){var draggedData=e.dataTransfer;onDrag&&onDrag(draggedData.files)}}})[0];return(0,utils_src.xb)(null!=btnTitle?btnTitle:"")&&(btnTitle="Upload File"),allowDragAndDrop?(0,jsx_runtime.jsxs)("div",{tabIndex:0,role:"button",ref:dragRef,className:(0,utils_src.uY)("sui-uploader__pick",{dragging:isDragging}),onClick,onKeyDown:function(e){return(0,utils_src.Jw)(e,onClick)},children:[(0,jsx_runtime.jsx)("span",{className:"sui-uploader__pick--icon",children:(0,jsx_runtime.jsx)(components.Upload,{size:"sm"})}),(0,jsx_runtime.jsx)("span",{className:"sui-uploader__pick--label",children:btnTitle})]}):(0,jsx_runtime.jsx)(button_src.zx,{className:"sui-uploader__button",appearance:"primary",color:"blue",icon:"upload",onClick,children:btnTitle})},__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},__spreadArray=function(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))},Uploader=function(_a){var btnTitle=_a.btnTitle,_b=_a.multiple,multiple=void 0===_b||_b,_c=_a.accept,accept=void 0===_c?"":_c,_d=_a.allowDragAndDrop,allowDragAndDrop=void 0===_d||_d,_e=_a.fieldAttrs,fieldAttrs=void 0===_e?{}:_e,_f=_a.onChange,onChange=void 0===_f?function(){}:_f,props=__rest(_a,["btnTitle","multiple","accept","allowDragAndDrop","fieldAttrs","onChange"]),_g=(0,react.useState)([]),files=_g[0],setFiles=_g[1],uniqueID=(0,react.useId)(),uploaderId="sui-uploader-".concat(uniqueID),ref=(0,react.useRef)(null);(0,react.useEffect)((function(){onChange(files)}),[files,onChange]);var onSelectFile=(0,react.useCallback)((function(filesOrEvent){var _a,selectedFiles=(null!==(_a=null==filesOrEvent?void 0:filesOrEvent.target)&&void 0!==_a?_a:{}).files;selectedFiles||(selectedFiles=filesOrEvent),setFiles(__spreadArray(__spreadArray([],files,!0),Array.from(selectedFiles),!0))}),[files]),openFileSelector=(0,react.useCallback)((function(){var _a;null===(_a=ref.current)||void 0===_a||_a.click()}),[ref]),onRemoveFile=(0,react.useCallback)((function(fileIndex){setFiles(files.filter((function(file,index){return index!==fileIndex})))}),[files]);return(0,jsx_runtime.jsx)(src.W,__assign({},fieldAttrs,{children:(0,jsx_runtime.jsxs)("div",{className:"sui-uploader",children:[(0,jsx_runtime.jsx)("input",__assign({type:"file",id:uploaderId,ref,onChange:onSelectFile,className:"sui-uploader__input",multiple,accept,hidden:!0},props)),(multiple||!multiple&&files.length<=0)&&(0,jsx_runtime.jsx)(UploaderButton,{btnTitle:null!=btnTitle?btnTitle:"",multiple:null!=multiple&&multiple,allowDragAndDrop:null!=allowDragAndDrop&&allowDragAndDrop,onClick:openFileSelector,onDrag:onSelectFile}),!!files&&files.length>0&&(0,jsx_runtime.jsx)("div",{className:"sui-uploader__preview",children:(0,jsx_runtime.jsx)("div",{className:"sui-uploader__files",children:null==files?void 0:files.map((function(file,index){return(0,jsx_runtime.jsx)(UploaderFile,{id:index,onRemove:onRemoveFile,file},index)}))})})]})}))},lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),storybook=__webpack_require__("./packages/storybook/lib/storybook.ts"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(storybook.$0,{title:"Installation",contained:!0,style:{paddingTop:20,paddingBottom:0},children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Install the ",(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"Uploader"})," package as an individual\ncomponent or follow the Overview page instructions to get the complete SUI\nComponents package."]})})}),"\n",(0,jsx_runtime.jsxs)(storybook.$0,{title:"Props",border:!0,children:[(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"title*",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Upload Button Title"})}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"multiple*",tag:"boolean",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsxs)("p",{children:["When set to ",(0,jsx_runtime.jsx)(storybook.EK,{isSmall:!0,children:" true "}),", the component will allow for multiple files selection "]})}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"accept*",tag:"boolean",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsxs)("p",{children:["The allowed ",(0,jsx_runtime.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept",target:"_blank",children:" file types"})," to upload."]})}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"allowDragAndDrop*",tag:"boolean",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsxs)("p",{children:["When set to ",(0,jsx_runtime.jsx)(storybook.EK,{isSmall:!0,children:" true "}),", Users will be able to use drag and drop to upload files "]})}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"fieldAttrs*",tag:"object",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsxs)("p",{children:["The Form Field attributes, the keys represent the props of the ",(0,jsx_runtime.jsx)("a",{href:"/?path=/docs/sui-components-forms-form-field--docs",target:"_blank",children:" FormField"})," component "]})}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"onChange*",tag:"function",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsxs)("p",{children:["A callback function to be invoked when a file is uploaded, the first parameter is an ",(0,jsx_runtime.jsx)(storybook.EK,{isSmall:!0,children:" array "})," of the uploaded files objects"]})})]})]})}const TabCode=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};var dedent=__webpack_require__("./node_modules/dedent/dist/dedent.js"),dedent_default=__webpack_require__.n(dedent);const basicCode=dedent_default()`
    <Uploader
        multiple={false}
        fieldAttrs={{
           label: "Upload a file",
           helper: "Upload files",
           isSmall: true,
        }}
    />
`,multipleCode=dedent_default()`
    <Uploader
        fieldAttrs={{
           label: "Upload files",
           helper: "You can upload multiple files",
           isSmall: true,
        }}
    />
`,dragDropCode=dedent_default()`
    <Uploader
        allowDragAndDrop={false}
        fieldAttrs={{
           label: "Upload files",
           helper: "You can upload multiple files",
           isSmall: true,
        }}
    />
`,onlyImagesCode=dedent_default()`
    <Uploader
        accept="image/*"
        fieldAttrs={{
           label: "Upload files",
           helper: "You can upload multiple files",
           isSmall: true,
        }}
    />
`,onlyPdfCode=dedent_default()`
    <Uploader
        accept="application/pdf"
        fieldAttrs={{
           label: "Upload files",
           helper: "You can upload multiple files",
           isSmall: true,
        }}
    />
`;function TabExamples_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(storybook.$0,{contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsx)("p",{children:"Basic File Uploader component used for most cases: "}),(0,jsx_runtime.jsx)(storybook.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(Uploader,{multiple:!1,fieldAttrs:{label:"Upload a file",helper:"Click or drag a file to upload",isSmall:!0}})}),(0,jsx_runtime.jsx)(storybook.pP,{language:"js",children:basicCode})]}),"\n",(0,jsx_runtime.jsxs)(storybook.$0,{title:"Multiple files",contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsx)(storybook.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(Uploader,{fieldAttrs:{label:"Upload files",helper:"You can upload multiple files",isSmall:!0}})}),(0,jsx_runtime.jsx)(storybook.pP,{language:"js",children:multipleCode})]}),"\n",(0,jsx_runtime.jsxs)(storybook.$0,{title:"Disabled drag and drop",contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsx)(storybook.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(Uploader,{allowDragAndDrop:!1,fieldAttrs:{label:"Upload files",helper:"You can upload multiple files",isSmall:!0}})}),(0,jsx_runtime.jsx)(storybook.pP,{language:"js",children:dragDropCode})]}),"\n",(0,jsx_runtime.jsxs)(storybook.$0,{title:"Accept only images",contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsx)(storybook.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(Uploader,{accept:"image/*",fieldAttrs:{label:"Upload files",helper:"Images only",isSmall:!0}})}),(0,jsx_runtime.jsx)(storybook.pP,{language:"js",children:onlyImagesCode})]}),"\n",(0,jsx_runtime.jsxs)(storybook.$0,{title:"Accept only a specific file extension",contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsx)(storybook.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(Uploader,{accept:"application/pdf",fieldAttrs:{label:"Upload files",helper:"Only pdf files",isSmall:!0}})}),(0,jsx_runtime.jsx)(storybook.pP,{language:"js",children:onlyPdfCode})]})]})}const TabExamples=function TabExamples_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabExamples_createMdxContent,props)})):TabExamples_createMdxContent()},anatomy_namespaceObject=__webpack_require__.p+"static/media/anatomy.1ab9d50a.svg",states_namespaceObject=__webpack_require__.p+"static/media/states.46ac1b35.svg",upload_types_namespaceObject=__webpack_require__.p+"static/media/upload-types.389421d5.svg",file_types_namespaceObject=__webpack_require__.p+"static/media/file-types.77620678.svg",single_multiple_namespaceObject=__webpack_require__.p+"static/media/single-multiple.081ec10e.svg",spacing_namespaceObject=__webpack_require__.p+"static/media/spacing.1c814e8f.svg";function TabUsage_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(storybook.$0,{title:"Anatomy",children:(0,jsx_runtime.jsxs)(storybook.X2,{children:[(0,jsx_runtime.jsxs)(storybook.JX,{children:[(0,jsx_runtime.jsx)("h3",{style:{marginTop:0},children:"1. Label"}),(0,jsx_runtime.jsx)("p",{children:"A label to describe the upload field."}),(0,jsx_runtime.jsx)("h3",{children:"2. Upload button"}),(0,jsx_runtime.jsx)("p",{children:"An upload button to allow users to upload files."}),(0,jsx_runtime.jsx)("h3",{children:"3. File Upload"}),(0,jsx_runtime.jsx)("p",{children:"A file that has been uploaded successfully."}),(0,jsx_runtime.jsx)("h3",{children:"4. Help text"}),(0,jsx_runtime.jsx)("p",{children:"Help text to help the user make an informed selection."})]}),(0,jsx_runtime.jsx)(storybook.JX,{children:(0,jsx_runtime.jsx)("img",{src:anatomy_namespaceObject,alt:"Uploader Anatomy"})})]})}),"\n",(0,jsx_runtime.jsx)(storybook.$0,{title:"States",children:(0,jsx_runtime.jsx)("img",{src:states_namespaceObject,alt:"Uploader States"})}),"\n",(0,jsx_runtime.jsxs)(storybook.$0,{title:"Upload types",children:[(0,jsx_runtime.jsx)("p",{children:"The upload button's icon can be customised to display the proper icon."}),(0,jsx_runtime.jsx)("img",{src:upload_types_namespaceObject,alt:"Upload Types"})]}),"\n",(0,jsx_runtime.jsxs)(storybook.$0,{title:"File types",children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"The icon for the uploaded file can be changed to show the appropriate icon.\nWhen the file is uploaded, a specific image preview may be displayed for the\nimage type."})}),(0,jsx_runtime.jsx)("img",{src:file_types_namespaceObject,alt:"File Types"})]}),"\n",(0,jsx_runtime.jsx)(storybook.$0,{title:"Single and multiple uploads",children:(0,jsx_runtime.jsx)("img",{src:single_multiple_namespaceObject,alt:"Single and multiple uploads"})}),"\n",(0,jsx_runtime.jsx)(storybook.$0,{title:"Spacing",children:(0,jsx_runtime.jsx)("img",{src:spacing_namespaceObject,alt:"Single and multiple uploads"})})]})}const TabUsage=function TabUsage_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabUsage_createMdxContent,props)})):TabUsage_createMdxContent(props)};function Uploader_createMdxContent(props){return storybook.T3||_missingMdxReference("Page",!1),storybook.T3.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsx)(dist.E$,{children:(0,jsx_runtime.jsxs)(storybook.T3.Tabs,{title:"Uploader",subtitle:"The File uploader allows users to select one or more files to upload.",status:"draft",children:[(0,jsx_runtime.jsx)("div",{id:"usage",label:"Usage",children:(0,jsx_runtime.jsx)(TabUsage,{})}),(0,jsx_runtime.jsx)("div",{id:"code",label:"Code",children:(0,jsx_runtime.jsx)(TabCode,{})}),(0,jsx_runtime.jsx)("div",{id:"examples",label:"Examples",children:(0,jsx_runtime.jsx)(TabExamples,{})})]})})}function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}var _a,_b,_c,Uploader_stories_assign=function(){return Uploader_stories_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},Uploader_stories_assign.apply(this,arguments)},Uploader_stories_rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const Uploader_stories={title:"SUI/Components/Advanced/Uploader",component:Uploader,parameters:{layout:"fullscreen",docs:{page:function Uploader_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Uploader_createMdxContent,props)})):Uploader_createMdxContent()}}}};var Uploader_stories_Uploader=function(_a){var props=Uploader_stories_rest(_a,[]);return(0,jsx_runtime.jsx)(react.Fragment,{children:(0,jsx_runtime.jsx)("div",{className:"sui-layout",style:{margin:20,padding:20,borderRadius:4,background:"#fff"},children:(0,jsx_runtime.jsx)(Uploader,Uploader_stories_assign({},props,{fieldAttrs:{label:"Upload file",helper:"Upload files",isSmall:!0}}))})})};Uploader_stories_Uploader.args={btnTitle:"",accept:"*",multiple:!1,allowDragAndDrop:!0},Uploader_stories_Uploader.argTypes={btnTitle:{name:"Button Title",control:{type:"text"}},multiple:{name:"Allow multiple files",control:{type:"boolean"}},allowDragAndDrop:{name:"Drag & Drop",control:{type:"boolean"}},accept:{name:"Allowed file types",control:{type:"text"}}},Uploader_stories_Uploader.parameters=Uploader_stories_assign(Uploader_stories_assign({},Uploader_stories_Uploader.parameters),{docs:Uploader_stories_assign(Uploader_stories_assign({},null===(_a=Uploader_stories_Uploader.parameters)||void 0===_a?void 0:_a.docs),{source:Uploader_stories_assign({originalSource:'({\n  ...props\n}) => {\n  return <Fragment>\n            <div className="sui-layout" style={{\n      margin: 20,\n      padding: 20,\n      borderRadius: 4,\n      background: "#fff"\n    }}>\n                <SuiUploader {...props} fieldAttrs={{\n        label: "Upload file",\n        helper: "Upload files",\n        isSmall: true\n      }} />\n            </div>\n        </Fragment>;\n}'},null===(_c=null===(_b=Uploader_stories_Uploader.parameters)||void 0===_b?void 0:_b.docs)||void 0===_c?void 0:_c.source)})});const __namedExportsOrder=["Uploader"]},"./packages/sui-react/packages/components/form-field/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W:()=>FormField});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/sui-react/packages/utils/src/index.ts")),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Label=function(_a){var id=_a.id,_b=_a.hidden,hidden=void 0!==_b&&_b,children=_a.children;if((0,src.xb)(null!=children?children:""))throw new Error('Empty content is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Form Field\n\nThe "Label" component requires a child element to be passed to it.\n\n');var classNames=classnames_default()({"sui-screen-reader-only":hidden,"sui-form-field__label":!hidden});return(0,jsx_runtime.jsx)("label",{htmlFor:id,id:"".concat(id,"__label"),className:classNames,children})},Helper=function(_a){var id=_a.id,children=_a.children,classNames=classnames_default()({"sui-form-field__helper":!0});return(0,jsx_runtime.jsx)("span",{id:"".concat(id,"__helper"),className:classNames,children})},ErrorMessage=function(_a){var id=_a.id,_b=_a.show,show=void 0!==_b&&_b,children=_a.children;return(0,jsx_runtime.jsx)("span",{id:"".concat(id,"__error-message"),className:"sui-form-field__helper sui-color-error--50",children:show&&children})},__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},FormField=function(_a){var id=_a.id,label=_a.label,helper=_a.helper,error=_a.error,className=_a.className,_b=_a.isSmall,isSmall=void 0!==_b&&_b,_c=_a.isDisabled,isDisabled=void 0!==_c&&_c,_d=_a.isLabelHidden,isLabelHidden=void 0!==_d&&_d,children=_a.children,props=__rest(_a,["id","label","helper","error","className","isSmall","isDisabled","isLabelHidden","children"]),errorObj=Object.assign({state:!1,text:""},error),classNames=(0,src.uY)("sui-form-field",{sm:isSmall,disabled:isDisabled},className);return(0,jsx_runtime.jsxs)("div",__assign({className:classNames},props,{children:[!(0,src.xb)(null!=label?label:"")&&(0,jsx_runtime.jsx)(Label,{id,hidden:null!=isLabelHidden&&isLabelHidden,children:label}),children,(0,src.Kn)(error)&&Object.keys(error).length>0&&(0,jsx_runtime.jsx)(ErrorMessage,{id,show:errorObj.state,small:isSmall,children:errorObj.text}),!!helper&&(0,jsx_runtime.jsx)(Helper,{id,small:isSmall,children:helper})]}))}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/dedent/dist/dedent.js":module=>{"use strict";module.exports=function dedent(strings){var raw=void 0;raw="string"==typeof strings?[strings]:strings.raw;for(var result="",i=0;i<raw.length;i++)result+=raw[i].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),i<(arguments.length<=1?0:arguments.length-1)&&(result+=arguments.length<=i+1?void 0:arguments[i+1]);var lines=result.split("\n"),mindent=null;return lines.forEach((function(l){var m=l.match(/^(\s+)\S+/);if(m){var indent=m[1].length;mindent=mindent?Math.min(mindent,indent):indent}})),null!==mindent&&(result=lines.map((function(l){return" "===l[0]?l.slice(mindent):l})).join("\n")),(result=result.trim()).replace(/\\n/g,"\n")}}}]);
//# sourceMappingURL=sui-react-packages-components-uploader-stories-Uploader-stories.29b9806b.iframe.bundle.js.map