"use strict";(self.webpackChunksui_docs=self.webpackChunksui_docs||[]).push([[7182],{"./packages/sui-react/packages/components/config-table/stories/config-table.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ConfigTable:()=>config_table_stories_ConfigTable,Configs:()=>Configs,__namedExportsOrder:()=>__namedExportsOrder,default:()=>config_table_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/sui-react/packages/components/table/src/index.ts"),button_src=__webpack_require__("./packages/sui-react/packages/components/button/src/index.ts"),utils_src=__webpack_require__("./packages/sui-react/packages/utils/src/index.ts"),tooltip_src=__webpack_require__("./packages/sui-react/packages/components/tooltip/src/index.ts"),box_src=__webpack_require__("./packages/sui-react/packages/components/box/src/index.ts");const ConfigTableDetails=({config})=>{let options=[];return Object.values(config?.config?.strings).forEach((string=>{options=[...options,...string[0].split("\n").filter((opt=>!(0,utils_src.xb)(opt)))]})),(0,jsx_runtime.jsxs)(box_src.x,{className:"sui-config-table__details",children:[(0,jsx_runtime.jsxs)("div",{className:"sui-config-table__details-header",children:[(0,jsx_runtime.jsx)("h3",{className:"sui-heading--h5 sui-config-table__details--title",children:config?.name}),(0,jsx_runtime.jsx)("p",{className:"sui-config-table__details--content",children:config?.description})]}),(0,jsx_runtime.jsx)("div",{className:"sui-config-table__details-body",children:(0,jsx_runtime.jsx)(src.iA,{hasToolbar:!1,isStripped:!0,children:(0,jsx_runtime.jsx)(src.RM,{children:options.map(((option,index)=>{const chunks=option.split("-");return(0,jsx_runtime.jsxs)(src.SC,{id:option.id,children:[(0,jsx_runtime.jsx)(src.pj,{children:chunks[0]}),(0,jsx_runtime.jsx)(src.pj,{children:chunks[1]})]},index)}))})})})]})},ConfigTable=({className="",configs,onActionClick})=>{const actionClick=(0,react.useCallback)(((configId,type)=>{onActionClick&&onActionClick(configId,type)}),[onActionClick]),classNames=(0,utils_src.uY)("sui-config-table",{},className);return(0,jsx_runtime.jsxs)(src.iA,{className:classNames,hasToolbar:!1,children:[(0,jsx_runtime.jsx)(src.ss,{children:(0,jsx_runtime.jsxs)(src.SC,{actions:()=>null,children:[(0,jsx_runtime.jsx)(src.pj,{isHeading:!0,isPrimary:!0,children:"Config"}),(0,jsx_runtime.jsx)(src.pj,{isHeading:!0,children:"Date Created"}),(0,jsx_runtime.jsx)(src.pj,{isHeading:!0,children:"Last Applied"})]})}),(0,jsx_runtime.jsx)(src.RM,{children:configs?.map(((config,index)=>(0,jsx_runtime.jsxs)(src.SC,{id:config.id,isExpandable:!0,expandableContent:(0,jsx_runtime.jsx)(ConfigTableDetails,{config}),actions:({content})=>(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)(button_src.zx,{isSmall:!0,color:"blue",appearance:"tertiary",onClick:e=>{e.preventDefault(),actionClick(config.id,"apply")},children:"Apply"}),(0,jsx_runtime.jsx)(button_src.zx,{icon:"settings",isSmall:!0,iconOnly:!0,color:"black",appearance:"tertiary",onClick:e=>{e.preventDefault(),actionClick(config.id,"configure")}}),content]}),children:[(0,jsx_runtime.jsx)(src.pj,{children:(0,jsx_runtime.jsxs)("div",{className:"sui-config-table__title",children:[(0,jsx_runtime.jsx)("strong",{children:config.name}),!(0,utils_src.xb)(config.description??"")&&(0,jsx_runtime.jsx)(tooltip_src.u,{type:"icon",icon:"info-alt",position:"right-bottom",customWidth:160,customMobileWidth:160,children:config.description})]})}),(0,jsx_runtime.jsx)(src.pj,{children:"May 21, 2022 @ 6:00 pm"}),(0,jsx_runtime.jsx)(src.pj,{children:"May 21, 2022 @ 6:00 pm"})]},index)))})]})},config_table_stories={title:"SUI/Components/Collections/Config Table",component:ConfigTable,parameters:{layout:"fullscreen",docs:{}}},Configs=[{id:1,name:"Default config",description:"Recommended performance config for every site.",config:{configs:{settings:{advanced:{query_string:!1,emoji:!1,cart_fragments:!1,lazy_load:{enabled:!1,preload:!1}},gravatar:{enabled:!0},page_cache:{enabled:!0,detection:"auto",integrations:{varnish:!1,opcache:!1},preload:!1},performance:[],rss:{enabled:!0,duration:3600},settings:{accessible_colors:!1,remove_settings:!1,remove_data:!1,control:!0},uptime:{enabled:!1}}},strings:{advanced:["Remove query strings from assets - Inactive\nRemove Emoji JS & CSS files - Inactive\nDisable WooCommerce cart fragments - Inactive\nComments lazy loading - Inactive\n"],gravatar:["Gravatar cache - Active\n"],page_cache:["Page cache - Active\nFile change detection - Auto\nPurge Varnish cache - Inactive\nPurge OpCache - Inactive\nCache preloading - Inactive\n"],rss:["RSS caching - Active\n"],settings:["High contrast mode - Inactive\nRemove settings on uninstall - Inactive\nRemove data on uninstall - Inactive\nCache control in admin bar - Active\n"],uptime:["Uptime - Inactive\n"]}},plugin:"1081721"}],config_table_stories_ConfigTable=({...props})=>(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(ConfigTable,{...props,configs:Configs})})})});config_table_stories_ConfigTable.args={},config_table_stories_ConfigTable.argTypes={},Configs.parameters={...Configs.parameters,docs:{...Configs.parameters?.docs,source:{originalSource:'[{\n  id: 1,\n  name: "Default config",\n  description: "Recommended performance config for every site.",\n  config: {\n    configs: {\n      settings: {\n        advanced: {\n          query_string: false,\n          emoji: false,\n          cart_fragments: false,\n          lazy_load: {\n            enabled: false,\n            preload: false\n          }\n        },\n        gravatar: {\n          enabled: true\n        },\n        page_cache: {\n          enabled: true,\n          detection: "auto",\n          integrations: {\n            varnish: false,\n            opcache: false\n          },\n          preload: false\n        },\n        performance: [],\n        rss: {\n          enabled: true,\n          duration: 3600\n        },\n        settings: {\n          accessible_colors: false,\n          remove_settings: false,\n          remove_data: false,\n          control: true\n        },\n        uptime: {\n          enabled: false\n        }\n      }\n    },\n    strings: {\n      advanced: ["Remove query strings from assets - Inactive\\nRemove Emoji JS & CSS files - Inactive\\nDisable WooCommerce cart fragments - Inactive\\nComments lazy loading - Inactive\\n"],\n      gravatar: ["Gravatar cache - Active\\n"],\n      page_cache: ["Page cache - Active\\nFile change detection - Auto\\nPurge Varnish cache - Inactive\\nPurge OpCache - Inactive\\nCache preloading - Inactive\\n"],\n      rss: ["RSS caching - Active\\n"],\n      settings: ["High contrast mode - Inactive\\nRemove settings on uninstall - Inactive\\nRemove data on uninstall - Inactive\\nCache control in admin bar - Active\\n"],\n      uptime: ["Uptime - Inactive\\n"]\n    }\n  },\n  plugin: "1081721"\n}]',...Configs.parameters?.docs?.source}}},config_table_stories_ConfigTable.parameters={...config_table_stories_ConfigTable.parameters,docs:{...config_table_stories_ConfigTable.parameters?.docs,source:{originalSource:'({\n  ...props\n}) => {\n  return <div className="sui-layout sui-layout--horizontal sui-layout--vertical">\n            <div className="sui-layout__content">\n                <div>\n                    <SuiConfigTable {...props} configs={Configs} />\n                </div>\n            </div>\n        </div>;\n}',...config_table_stories_ConfigTable.parameters?.docs?.source}}};const __namedExportsOrder=["Configs","ConfigTable"]},"./packages/sui-react/packages/components/tooltip/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Tooltip});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/sui-react/packages/components/button/src/index.ts"),utils_src=__webpack_require__("./packages/sui-react/packages/utils/src/index.ts"),hooks_src=__webpack_require__("./packages/sui-react/packages/hooks/src/index.ts");const Icon=({name="tooltip",size="md"})=>{if(!(!(0,utils_src.o8)(name)&&!(0,utils_src.xb)(name??"")))throw new Error('Required parameter is empty. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe "name" parameter in the icon element is required and must not be empty.\n\n');const classNames=(0,utils_src.uY)("suicons",{[name]:!(0,utils_src.xb)(name),[size]:!0});return(0,jsx_runtime.jsx)("span",{className:"sui-tooltip__icon","aria-hidden":"true",children:(0,jsx_runtime.jsx)("span",{className:classNames})})},Tooltip=({label,type="button",className,position="top",customWidth,customMobileWidth,children,onClick=()=>{},onMouseEnter=()=>{},onMouseLeave=()=>{},onFocus=()=>{},onBlur=()=>{},href,icon,...props})=>{const[isHovered,isFocused,methods,toggleHover]=(0,hooks_src.X2)({onMouseEnter,onMouseLeave,onFocus,onBlur}),attrs={},classNames=(0,utils_src.uY)("sui-tooltip",{show:isHovered,focus:isFocused,"custom-width":!!customWidth,[position]:!0},className??"");(customWidth||customMobileWidth)&&(attrs.style={...customWidth&&{"--tooltip-width":`${customWidth}px`},...customMobileWidth&&{"--tooltip-width-mobile":`${customMobileWidth}px`}});const escFunction=(0,react.useCallback)((event=>{"keyCode"in event&&"Escape"===event.code&&isHovered&&toggleHover(!1)}),[isHovered,toggleHover]);(0,react.useEffect)((()=>(document.addEventListener("keydown",escFunction),()=>{document.removeEventListener("keydown",escFunction)})),[escFunction]);const onClickCallback=(0,react.useCallback)((()=>{onClick&&onClick()}),[onClick]);return(0,jsx_runtime.jsxs)("div",{className:classNames,...methods,"data-testid":"tooltip",children:[(()=>{switch(type){case"button":case"link":return(0,jsx_runtime.jsx)(src.zx,{...props,href,onClick:onClickCallback,children:label});case"text":return(0,jsx_runtime.jsx)("span",{...props,role:"button",tabIndex:0,onClick:onClickCallback,onKeyDown:e=>(0,utils_src.Jw)(e),children:label});case"icon":return(0,jsx_runtime.jsx)(Icon,{name:icon})}})(),!!children&&(0,jsx_runtime.jsx)("span",{className:"sui-tooltip__content",role:"tooltip","aria-live":"polite","aria-hidden":!isHovered,tabIndex:isHovered?0:-1,...attrs,children})]})}}}]);