/*! For license information please see sui-react-packages-components-pagination-stories-ReactPagination-stories.ab898127.iframe.bundle.js.LICENSE.txt */
(self.webpackChunksui_docs=self.webpackChunksui_docs||[]).push([[916],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hw:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hw,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-links/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{kZ:()=>_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.kZ});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs");__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs")},"./node_modules/@storybook/addon-links/dist/react/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>react_default});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs"),__webpack_require__("./node_modules/react/index.js")),react_default=class extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind,title=kind,story,name=story}=this.props;if(title&&name){let href=await(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.ew)(title,name);this.setState({href})}},this.handleClick=()=>{let{kind,title=kind,story,name=story}=this.props;title&&name&&(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.c4)({title,name})}}static{this.defaultProps={children:void 0}}componentDidMount(){this.updateHref()}componentDidUpdate(prevProps){let{kind,title,story,name}=this.props;(prevProps.kind!==kind||prevProps.story!==story||prevProps.title!==title||prevProps.name!==name)&&this.updateHref()}render(){let{kind,title=kind,story,name=story,children,...rest}=this.props,{href}=this.state;return react__WEBPACK_IMPORTED_MODULE_2__.createElement("a",{href,onClick:e=>((e,cb=(_e=>{}))=>{(e=>!(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))(e)&&(e.preventDefault(),cb(e))})(e,this.handleClick),...rest},children)}}},"./packages/sui-react/packages/components/pagination/stories/ReactPagination.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Pagination:()=>Pagination,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ReactPagination_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),pagination=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/sui-react/packages/components/pagination/src/pagination.tsx")),src=__webpack_require__("./packages/sui-react/packages/components/box/src/index.ts"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),storybook=__webpack_require__("./packages/storybook/lib/storybook.ts"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsx)(dist.E$,{children:(0,jsx_runtime.jsxs)(storybook.$0,{title:"Shhh... Not much to see here at the moment, but stay tuned!",contained:!0,children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Quiet for now, but get ready! Exciting stuff is coming. Our developers are working really hard behind the scenes to make it happen. Stay curious and excited! 🌟👷"})}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"In the meantime, feel free to explore our demo page for this component."})})]})})}const ReactPagination=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};var _a,_b,_c,__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};const ReactPagination_stories={title:"SUI/Components/Advanced/Pagination",component:pagination.t,parameters:{layout:"fullscreen",docs:{page:ReactPagination}}};var Pagination=function(args){var items=function(topNumber){var listNumbers=[];topNumber+=1;for(var i=1;i<topNumber;i++)listNumbers.push(i);return listNumbers}(100);return(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsx)(src.x,{children:(0,jsx_runtime.jsx)(src.f,{isInline:!1,children:(0,jsx_runtime.jsx)(pagination.t,__assign({},args,{children:(0,jsx_runtime.jsx)("ul",{children:items.map((function(item,key){return(0,jsx_runtime.jsxs)("li",{children:["Item #",item]},key)}))})}))})})})})};Pagination.args={limit:5,skip:!1,results:!1,pagesToBottom:!1},Pagination.argTypes={limit:{type:{required:!0},description:"Use this property to set a maximum number of items per page. If empty or zero, the pagination won't show.",table:{type:{summary:"number"}},control:{type:"number"}},skip:{description:"Enable this property to show skip buttons on pagination. Those will help you move directly to first and last page.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},results:{description:"When enabled, it shows the total number of results.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},pagesToBottom:{description:"If you need to show the pagination at the bottom of the list, enable this property.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},children:{type:{required:!0},description:"Place the content you would like to display inside the component.",table:{type:{summary:"element[]"}},control:{type:null}},previousLabel:{description:'By default, the "previous" button will have as label **"Go to previous page"**. You can change that using this property.',table:{category:"Source Language",type:{summary:"string"}},control:{type:"text"}},nextLabel:{description:'By default, the "next" button will have as label **"Go to next page"**. You can change that using this property.',table:{category:"Source Language",type:{summary:"string"}},control:{type:"text"}},skipToFirstLabel:{description:'By default, the "skip to first" button will have as label **"Go to first page"**. You can change that using this property.',table:{category:"Source Language",type:{summary:"string"}},control:{type:"text"}},skipToLastLabel:{description:'By default, the "skip to last" button will have as label **"Go to last page"**. You can change that using this property.',table:{category:"Source Language",type:{summary:"string"}},control:{type:"text"}}},Pagination.parameters=__assign(__assign({},Pagination.parameters),{docs:__assign(__assign({},null===(_a=Pagination.parameters)||void 0===_a?void 0:_a.docs),{source:__assign({originalSource:'(args: PaginationProps): React.ReactNode => {\n  // Array numbers from 1 to n.\n  const createList = (topNumber: number) => {\n    const listNumbers = [];\n    topNumber = topNumber + 1;\n    for (let i = 1; i < topNumber; i++) {\n      listNumbers.push(i);\n    }\n    return listNumbers;\n  };\n  const items = createList(100);\n  return <div className="sui-layout sui-layout--horizontal sui-layout--vertical">\n            <div className="sui-layout__content">\n                <Box>\n                    <BoxGroup isInline={false}>\n                        <SuiPagination {...args}>\n                            <ul>\n                                {items.map((item, key) => <li key={key}>Item #{item}</li>)}\n                            </ul>\n                        </SuiPagination>\n                    </BoxGroup>\n                </Box>\n            </div>\n        </div>;\n}'},null===(_c=null===(_b=Pagination.parameters)||void 0===_b?void 0:_b.docs)||void 0===_c?void 0:_c.source)})});const __namedExportsOrder=["Pagination"]},"./packages/sui-react/packages/components/box/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{x:()=>Box,f:()=>BoxGroup});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/sui-react/packages/utils/src/index.ts"),BoxGroup=function(_a){var _b=_a.isInline,isInline=void 0===_b||_b,children=_a.children,slots=react.Children.map(children,(function(child,index){var _a,_b=null!==(_a=child.props)&&void 0!==_a?_a:{},slot=_b.slot,content=_b.children;return(0,src.Kn)(child)&&["left","right"].includes(null!=slot?slot:"")?(0,jsx_runtime.jsx)("div",{className:"sui-box-group__slot sui-box-group__".concat(slot),children:content},"sui-box-group--".concat(index)):(0,jsx_runtime.jsx)(react.Fragment,{children:child},"sui-box-group--".concat(index))})),classNames=(0,src.uY)("sui-box-group",{inline:isInline});return(0,jsx_runtime.jsx)("div",{className:classNames,children:slots})},__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},Box=function(_a){var title=_a.title,icon=_a.icon,headerLeft=_a.headerLeft,headerRight=_a.headerRight,children=_a.children,isSmall=_a.isSmall,_b=_a.className,className=void 0===_b?"":_b,hasTitle=!(0,src.o8)(title)&&!(0,src.xb)(title),hasIcon=!(0,src.o8)(icon)&&!(0,src.xb)(icon),hasLeft=!(0,src.o8)(headerRight)&&!(0,src.xb)(headerLeft),hasRight=!(0,src.o8)(headerRight)&&!(0,src.xb)(headerRight),classNames=(0,src.uY)("sui-box",{"size-sm":isSmall},className);return(0,jsx_runtime.jsxs)("div",{className:classNames,children:[hasTitle&&(0,jsx_runtime.jsxs)(BoxGroup,{isInline:!0,children:[(0,jsx_runtime.jsxs)("div",{slot:"left",children:[hasIcon&&(0,jsx_runtime.jsx)("span",{className:"suicons suicons--".concat(icon," suicons--lg sui-box-group__item"),"aria-hidden":"true"}),hasTitle&&(0,jsx_runtime.jsx)("h2",{className:"sui-heading sui-heading--h3 sui-box-group__item",children:title}),hasLeft&&headerLeft]}),(0,jsx_runtime.jsx)("div",__assign({},hasRight&&{slot:"right"},{children:hasRight&&headerRight}))]}),children]})}},"./packages/sui-react/packages/components/pagination/src/pagination-nav.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>PaginationNav});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),__rest=(__webpack_require__("./node_modules/react/index.js"),function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t}),PaginationNav=function(_a){var _b,_c,properties=__rest(_a,[]);return properties.pagesArray.length>1&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"sui-pagination",children:[properties.results&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:"sui-pagination__results",children:[properties.elements," results"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul",{className:"sui-pagination__nav",children:[properties.skip&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"sui-pagination__item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button",{className:"sui-pagination__button",disabled:properties.selectedPage<=1,onClick:properties.handleSkipToFirstPage,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{"aria-hidden":"false",className:"sui-screen-reader-only",children:properties.skipToFirstLabel||"Go to first page"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{"aria-hidden":"true",title:properties.skipToFirstLabel||"Go to first page",className:"suicons suicons--arrow-skip-back suicons--sm"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"sui-pagination__item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button",{className:"sui-pagination__button",disabled:properties.selectedPage<=1,onClick:properties.handlePreviousPage,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{"aria-hidden":"false",className:"sui-screen-reader-only",children:properties.previousLabel||"Go to previous page"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{"aria-hidden":"true",title:properties.previousLabel||"Go to previous page",className:"suicons suicons--chevron-left suicons--sm"})]})}),properties.startIndex>0&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"sui-pagination__item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:"sui-pagination__button",onClick:properties.handlePreviousEllipsis,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"suicons suicons--more suicons--sm","aria-hidden":"true"})})}),null===(_c=null===(_b=properties.pagesArray)||void 0===_b?void 0:_b.slice(properties.startIndex,properties.endIndex))||void 0===_c?void 0:_c.map((function(data,index){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{"aria-selected":properties.selectedPage===data,className:"sui-pagination__item",role:"tab",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:"sui-pagination__button".concat(properties.selectedPage===data?" sui-pagination__button--active":""),onClick:function(){return properties.handlePageClick(Math.floor(data))},children:data})},index)})),properties.endIndex<properties.pages&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"sui-pagination__item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:"sui-pagination__button",onClick:properties.handleNextEllipsis,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"suicons suicons--more suicons--sm","aria-hidden":"true"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"sui-pagination__item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button",{className:"sui-pagination__button",disabled:properties.selectedPage>=properties.pages,onClick:properties.handleNextPage,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{"aria-hidden":"false",className:"sui-screen-reader-only",children:properties.nextLabel||"Go to next page."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{"aria-hidden":"true",title:properties.nextLabel||"Go to next page.",className:"suicons suicons--chevron-right suicons--sm"})]})}),properties.skip&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"sui-pagination__item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button",{className:"sui-pagination__button",disabled:properties.selectedPage>=properties.pages,onClick:properties.handleSkipToLastPage,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{"aria-hidden":"false",className:"sui-screen-reader-only",children:properties.skipToLastLabel||"Go to last page."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{"aria-hidden":"true",title:properties.skipToLastLabel||"Go to last page",className:"suicons suicons--arrow-skip-forward suicons--sm"})]})})]})]})}},"./packages/sui-react/packages/components/pagination/src/pagination-results.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>PaginationResults});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},PaginationResults=function(_a){var _b,properties=__rest(_a,[]),items=null===(_b=react__WEBPACK_IMPORTED_MODULE_0__.Children.map(properties.childElements,(function(data){return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(data)})))||void 0===_b?void 0:_b.slice(properties.elementsStartIndex,properties.elementsEndIndex);return react__WEBPACK_IMPORTED_MODULE_0__.Children.map(properties.componentWrapper,(function(data){return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(data,"",items)}))}},"./packages/sui-react/packages/components/pagination/src/pagination.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>Pagination});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_pagination_nav__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/sui-react/packages/components/pagination/src/pagination-nav.tsx"),_pagination_results__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/sui-react/packages/components/pagination/src/pagination-results.tsx"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__spreadArray=function(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))},Pagination=function(_a){var _b,limit=_a.limit,skip=_a.skip,results=_a.results,skipToFirstLabel=_a.skipToFirstLabel,previousLabel=_a.previousLabel,nextLabel=_a.nextLabel,skipToLastLabel=_a.skipToLastLabel,pagesToBottom=_a.pagesToBottom,children=_a.children,paginationContent=_a.paginationContent,componentWrapper=children,componentChildren=[];if(null===(_b=null==componentWrapper?void 0:componentWrapper.props)||void 0===_b?void 0:_b.children){var wrapperChildren=componentWrapper.props.children;componentChildren=Array.isArray(wrapperChildren)?__spreadArray([],wrapperChildren,!0):[wrapperChildren]}var childElements=__spreadArray([],componentChildren,!0),elements=childElements.length,pages=elements/limit>Math.floor(elements/limit)?Math.floor(elements/limit)+1:elements/limit,_c=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),pagesArray=_c[0],setPagesArray=_c[1],_d=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),selectedPage=_d[0],setSelectedPage=_d[1],_e=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),startIndex=_e[0],setStartIndex=_e[1],_f=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(pages>=5?5:pages),endIndex=_f[0],setEndIndex=_f[1],_g=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),pageClickCounter=_g[0],setPageClickCounter=_g[1],_h=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),elementsStartIndex=_h[0],setElementsStartIndex=_h[1],_j=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(limit),elementsEndIndex=_j[0],setElementsEndIndex=_j[1],decrementIndexes=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(){selectedPage-1<=startIndex+1&&0!==startIndex&&(setStartIndex(startIndex-1),setEndIndex(endIndex-1))}),[selectedPage,startIndex,endIndex]),incrementIndexes=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(){selectedPage+1>=endIndex&&endIndex!==pages&&(setStartIndex(startIndex+1),setEndIndex(endIndex+1))}),[selectedPage,startIndex,endIndex,pages]);(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){for(var pageNumbers=[],i=1;i<=pages;++i)pageNumbers.push(i);setPagesArray(pageNumbers)}),[pages]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){selectedPage>=endIndex&&incrementIndexes(),selectedPage<=startIndex+1&&decrementIndexes()}),[pageClickCounter,incrementIndexes,decrementIndexes,endIndex,startIndex,selectedPage]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){1!==selectedPage&&(setElementsStartIndex(selectedPage*limit-limit),setElementsEndIndex(selectedPage*limit))}),[selectedPage,limit]);var properties={componentWrapper,childElements,elementsStartIndex,elementsEndIndex,handlePageClick:function(page){setSelectedPage(page),setPageClickCounter(pageClickCounter+1)},handleNextEllipsis:function(){setSelectedPage(pages-endIndex>=5?startIndex+7:pages-endIndex+startIndex+2),setStartIndex(pages-endIndex>=5?startIndex+5:pages-endIndex+startIndex),setEndIndex(pages-endIndex>=5?endIndex+5:pages)},handlePreviousEllipsis:function(){setSelectedPage(startIndex>=5?endIndex-6:endIndex-startIndex-1),setStartIndex(startIndex>=5?startIndex-5:0),setEndIndex(startIndex>=5?endIndex-5:endIndex-startIndex)},handleNextPage:function(){selectedPage<pages&&setSelectedPage(Math.floor(selectedPage)+1),incrementIndexes()},handlePreviousPage:function(){selectedPage>1&&setSelectedPage(selectedPage-1),decrementIndexes()},handleSkipToLastPage:function(){setSelectedPage(pages),setStartIndex(pages>=5?pages-5:0),setEndIndex(pages)},handleSkipToFirstPage:function(){setSelectedPage(1),setStartIndex(0),setEndIndex(pages>=5?5:pages)},pagesArray,selectedPage,startIndex,endIndex,pages,skipToFirstLabel,previousLabel,nextLabel,skipToLastLabel,skip,results,elements};return paginationContent?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:paginationContent(__assign({},properties))}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[pagesToBottom&&(0,_pagination_results__WEBPACK_IMPORTED_MODULE_3__.Q)(__assign({},properties)),(0,_pagination_nav__WEBPACK_IMPORTED_MODULE_2__.z)(__assign({},properties)),!pagesToBottom&&(0,_pagination_results__WEBPACK_IMPORTED_MODULE_3__.Q)(__assign({},properties))]})}},"./packages/sui-react/packages/utils/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{CI:()=>condContent,HD:()=>isString,Jw:()=>handleOnKeyDown,Kn:()=>isObject,c7:()=>capitalizeText,hj:()=>isNumber,jn:()=>isBoolean,kJ:()=>isArray,mf:()=>isFunction,o8:()=>isUndefined,uY:()=>generateCN,xb:()=>isEmpty});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),generateCN=function(base,variants,extraClassNames){void 0===variants&&(variants={}),void 0===extraClassNames&&(extraClassNames="");var classes=Object.keys(variants).map((function(attr){var _a;return(_a={})["".concat(base,"--").concat(attr)]=!!variants[attr],_a}));return classnames__WEBPACK_IMPORTED_MODULE_0___default()(base,classes,extraClassNames)},condContent=function(condition,content,fallback){return void 0===content&&(content=null),void 0===fallback&&(fallback=void 0),isNull(content)&&(content=condition),condition?content:fallback},isNull=function(value){return null===value},isUndefined=function(value){return void 0===value},isObject=function(value){return"object"==typeof value&&!Array.isArray(value)},isArray=function(value){return Array.isArray(value)},isBoolean=function(value){return"boolean"==typeof value},isNumber=function(value){return"number"==typeof value||!Number.isNaN(value)},isFunction=function(value){return"function"==typeof value},isString=function(value){return"string"==typeof value},isEmpty=function(value){return""===value},capitalizeText=function(string){var _a;return(null===(_a=null==string?void 0:string.charAt(0))||void 0===_a?void 0:_a.toUpperCase())+(null==string?void 0:string.slice(1))},handleOnKeyDown=function(event,callback){"Enter"!==event.key&&" "!==event.key||callback&&callback()}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);