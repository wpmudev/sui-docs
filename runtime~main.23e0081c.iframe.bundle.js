(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({202:"documentation-stories-Home-stories-mdx",234:"sui-react-packages-components-basic-box-stories-basic-box-stories",273:"sui-react-packages-components-segmented-control-stories-SegmentedControl-stories",344:"sui-react-packages-components-sidebar-stories-sidebar-stories",500:"sui-react-packages-components-field-password-stories-ReactFieldPassword-stories",880:"sui-react-packages-components-uploader-stories-Uploader-stories",899:"sui-css-stories-Layout-stories",916:"sui-react-packages-components-pagination-stories-ReactPagination-stories",969:"sui-react-packages-components-navigation-stories-navigation-stories",1078:"sui-react-packages-components-footer-stories-footer-stories",1148:"sui-react-packages-components-accordion-stories-Accordion-stories",1164:"sui-react-packages-components-select-stories-ReactSelect-stories",1438:"sui-react-packages-components-tag-stories-ReactTag-stories",1733:"sui-icons-stories-IconsPack-stories",1882:"sui-react-packages-components-tree-view-stories-TreeView-stories",1940:"sui-css-stories-Overview-stories-mdx",1966:"sui-react-packages-components-link-stories-link-stories",2317:"sui-react-packages-components-color-picker-stories-ReactColorPicker-stories",2479:"sui-react-packages-components-date-picker-stories-DatePicker-stories",2493:"sui-react-packages-components-upsell-notice-stories-upsell-notice-stories",2533:"documentation-stories-Terms-stories-mdx",2571:"sui-react-packages-components-progress-bar-stories-ReactProgressBar-stories",2581:"sui-react-packages-components-advanced-banner-stories-advanced-banner-stories",2693:"sui-css-stories-Grid-stories",2787:"sui-react-packages-components-modal-stories-ReactModal-stories",2812:"sui-react-packages-components-upsell-stories-upsell-stories",3054:"sui-react-packages-components-dropdown-stories-dropdown-stories",3251:"sui-react-packages-components-spinner-stories-spinner-stories",3273:"sui-react-packages-components-integration-stories-ReactIntegration-stories",3610:"sui-react-packages-components-recipient-stories-ReactRecipient-stories",3702:"sui-react-packages-components-builder-stories-builder-stories",3712:"sui-react-packages-components-setting-block-stories-setting-block-stories",3885:"sui-react-packages-components-selector-stories-selector-stories",3922:"sui-react-packages-components-alert-banner-stories-alert-banner-stories",4679:"sui-react-packages-components-form-field-stories-ReactFormField-stories",4794:"sui-react-packages-components-empty-state-stories-empty-state-stories",4807:"sui-react-packages-components-rich-text-editor-stories-RichTextEditor-stories",4836:"sui-react-packages-components-tooltip-stories-ReactTooltip-stories",4983:"documentation-stories-GettingStarted-stories-mdx",5121:"documentation-stories-Changelog-stories-mdx",5351:"sui-react-packages-components-avatar-stories-ReactAvatar-stories",6082:"sui-react-packages-components-box-stories-ReactBox-stories",6109:"sui-react-packages-components-grid-stories-ReactGrid-stories",6173:"sui-react-packages-components-summary-box-stories-summary-box-stories",6539:"sui-css-stories-Colors-stories",6798:"sui-react-packages-components-tabs-stories-Tabs-stories",6930:"sui-react-packages-components-table-stories-Table-stories",7143:"sui-react-packages-components-radio-stories-ReactRadio-stories",7182:"sui-react-packages-components-config-table-stories-config-table-stories",7221:"sui-react-packages-components-field-list-stories-ReactFieldList-stories",7474:"sui-react-packages-components-editor-toolbar-stories-editor-toolbar-stories",7538:"sui-css-stories-Typography-stories",7673:"sui-react-packages-components-score-stories-ReactScore-stories",7749:"sui-react-packages-components-notification-stories-Notification-stories",8081:"documentation-stories-Roadmap-stories-mdx",8151:"sui-react-packages-components-code-snippet-stories-ReactCodeSnippet-stories",8219:"sui-react-packages-components-input-stories-ReactInput-stories",8290:"sui-react-packages-components-button-stories-ReactButton-stories",8497:"sui-react-packages-components-dashboard-widget-stories-dashboard-widget-stories",8678:"sui-react-packages-components-code-editor-stories-ReactCodeEditor-stories",8729:"sui-react-packages-components-search-stories-search-stories",8762:"sui-react-packages-components-textarea-stories-ReactTextarea-stories",8974:"sui-react-packages-components-checkbox-stories-ReactCheckbox-stories",9006:"sui-react-packages-components-toggle-stories-ReactToggle-stories",9534:"sui-react-packages-components-setup-banner-stories-setup-banner-stories"}[chunkId]||chunkId)+"."+{202:"1268c00d",234:"61872d41",273:"1a36308f",344:"21e5cf82",500:"f1df847f",880:"05756b5b",899:"030200a7",916:"159a43e5",969:"c002a8ec",1078:"8715a646",1148:"951e03ee",1164:"a73bf73b",1438:"90050377",1568:"8a992156",1729:"329a0692",1733:"961b4d65",1882:"af360ebe",1908:"63d27445",1940:"8259d357",1966:"157501f9",2317:"5b7d890a",2479:"7b731db0",2493:"dcea51b3",2533:"47f762cf",2571:"0618ea56",2581:"f26e051d",2693:"92e30113",2787:"cf2c5451",2812:"9b5908f8",3054:"cfee8f11",3251:"001fed12",3273:"053b9a6a",3343:"b71e87f8",3347:"e61cff57",3426:"7f754859",3610:"0b7519a7",3702:"ad303d7f",3712:"2f063322",3844:"5032dda4",3885:"e09ac1c3",3922:"945765b6",4202:"8d07f8bc",4379:"772f53da",4679:"6a2d59b3",4794:"d728afc3",4807:"69648cef",4836:"415a359d",4983:"00c42409",5019:"381710df",5121:"9485a2bc",5351:"5bf8304d",5950:"f2cd98b6",5970:"6ab271d5",6082:"086269a5",6109:"2977ab0d",6173:"f7d91ed9",6539:"ab3d4585",6798:"2f48fdd3",6930:"f6eba483",7143:"9d154b82",7182:"9c4a8027",7221:"43e098f0",7291:"d14def66",7332:"746e14d9",7474:"46eeb076",7538:"e1cb0270",7673:"a71c5f10",7749:"aea9ae5f",7813:"f0a9477e",8002:"53e8dafa",8081:"6f9fc0f6",8151:"4c24739b",8219:"caa57d8b",8290:"acf0701c",8390:"cc04a364",8497:"b0060b6d",8678:"c7150540",8729:"0ae928c7",8762:"d54e54b2",8974:"154689f5",9006:"5088c7fd",9115:"39ae2ca3",9433:"939bdc9b",9534:"7d9f04ec",9569:"fb7f9625"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=module=>((module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="sui-docs:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","sui-docs:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{__webpack_require__.b=document.baseURI||self.location.href;var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunksui_docs=self.webpackChunksui_docs||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();