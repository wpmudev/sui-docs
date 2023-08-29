"use strict";(self.webpackChunksui_docs=self.webpackChunksui_docs||[]).push([[4801],{"./packages/sui-react/packages/components/checkbox/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Checkbox});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/sui-react/packages/hooks/src/index.ts"),utils_src=__webpack_require__("./packages/sui-react/packages/utils/src/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},Tick=function(_a){var props=__rest(_a,[]);return(0,jsx_runtime.jsx)("span",__assign({},props,{children:(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 12 10",fill:"none",className:"sui-checkbox__icon",children:(0,jsx_runtime.jsx)("path",{d:"M4.23784 9.08831L0.337838 5.16588C0.103533 4.93023 0.103533 4.54815 0.337838 4.31247L1.18635 3.45906C1.42065 3.22338 1.80057 3.22338 2.03488 3.45906L4.66211 6.10137L9.96507 0.91168C10.1994 0.676028 10.5793 0.676028 10.8136 0.91168L11.6621 1.76509C11.8964 2.00074 11.8964 2.38283 11.6621 2.6185L5.08637 9.08833C4.85205 9.32398 4.47215 9.32398 4.23784 9.08831Z"})})}))},indeterminate_assign=function(){return indeterminate_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},indeterminate_assign.apply(this,arguments)},indeterminate_rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},Indeterminate=function(_a){var props=indeterminate_rest(_a,[]);return(0,jsx_runtime.jsx)("span",indeterminate_assign({},props,{children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"2",viewBox:"-1 0 12 3",fill:"none",className:"sui-checkbox__icon",children:(0,jsx_runtime.jsx)("path",{d:"M9.7 0H0.3C0.134315 0 0 0.134315 0 0.3V1.7C0 1.86569 0.134315 2 0.3 2H9.7C9.86569 2 10 1.86569 10 1.7V0.3C10 0.134315 9.86569 0 9.7 0Z",fill:"white"})})}))},checkbox_assign=function(){return checkbox_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},checkbox_assign.apply(this,arguments)},checkbox_rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},Checkbox=(0,react.forwardRef)((function(_a,ref){var label=_a.label,_b=_a.defaultValue,defaultValue=void 0!==_b&&_b,_c=_a.isLabelHidden,isLabelHidden=void 0!==_c&&_c,_d=_a.isSmall,isSmall=void 0!==_d&&_d,_e=_a.isDisabled,isDisabled=void 0!==_e&&_e,_f=_a.isIndeterminate,isIndeterminate=void 0!==_f&&_f,_g=_a.onChange,onChange=void 0===_g?function(){}:_g,_h=(checkbox_rest(_a,["label","defaultValue","isLabelHidden","isSmall","isDisabled","isIndeterminate","onChange"]),(0,react.useState)(null!=defaultValue&&defaultValue)),isChecked=_h[0],setIsChecked=_h[1];(0,react.useEffect)((function(){setIsChecked(null!=defaultValue&&defaultValue)}),[defaultValue]);var id=(0,react.useId)(),_j=(0,src.X2)({}),isHovered=_j[0],isFocused=_j[1],interactionMethods=_j[2],handleOnChange=(0,react.useCallback)((function(e){setIsChecked(!isChecked),onChange&&onChange(e)}),[isChecked,onChange]),boxProps={tabIndex:"-1",className:"sui-checkbox__box","aria-hidden":!0};return(0,jsx_runtime.jsxs)("label",checkbox_assign({htmlFor:id,className:(0,utils_src.uY)("sui-checkbox",{"hidden-label":isLabelHidden,disabled:isDisabled,indeterminate:isIndeterminate,sm:isSmall,hover:isHovered,focus:isFocused,checked:isChecked})},interactionMethods,{children:[(0,jsx_runtime.jsx)("input",{ref,id,type:"checkbox",className:"sui-screen-reader-only",disabled:isDisabled,onChange:handleOnChange}),isIndeterminate?(0,jsx_runtime.jsx)(Indeterminate,checkbox_assign({},boxProps)):(0,jsx_runtime.jsx)(Tick,checkbox_assign({},boxProps)),isLabelHidden?(0,jsx_runtime.jsx)("span",{className:"sui-screen-reader-only",children:label}):label]}))}));Checkbox.displayName="Checkbox"},"./packages/sui-react/packages/components/select/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NU:()=>MultiSelect,ul:()=>SearchSelect,Ph:()=>select_standard_Select,Fg:()=>SmartSearchSelect});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/sui-react/packages/utils/src/index.ts"),hooks_src=__webpack_require__("./packages/sui-react/packages/hooks/src/index.ts"),checkbox_src=__webpack_require__("./packages/sui-react/packages/components/checkbox/src/index.ts"),Icon=function(_a){var _b,name=_a.name,_c=_a.size,size=void 0===_c?"lg":_c,_d=_a.onClick,onClick=void 0===_d?function(){}:_d;if(!name)throw new Error('Required parameter is empty. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe "name" parameter in the icon element is required and must not be empty.\n\n');var className=(0,src.uY)("suicons",((_b={})[name]=!0,_b[size]=!0,_b));return(0,jsx_runtime.jsx)("span",{className:"sui-select__icon sui-select__icon--".concat(name),onClick,"aria-hidden":"true",children:(0,jsx_runtime.jsx)("span",{className})})},__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},Search=function(_a){var id=_a.id,onChange=_a.onChange,props=__rest(_a,["id","onChange"]),handleInputChange=(0,react.useCallback)((function(event){onChange&&onChange(event)}),[onChange]);return(0,jsx_runtime.jsx)("input",__assign({id,type:"text",className:"sui-select__search--input",onChange:handleInputChange,autoComplete:"off"},props))},select_dropdown_assign=function(){return select_dropdown_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},select_dropdown_assign.apply(this,arguments)},select_dropdown_rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},Dropdown=function(_a){var allSelected,options=_a.options,_b=_a.onEvent,onEvent=void 0===_b?function(){}:_b,_c=_a.selectAll,selectAll=void 0===_c?function(){}:_c,_d=_a.isSmartSearch,isSmartSearch=void 0!==_d&&_d,_e=_a.isSmall,isSmall=void 0!==_e&&_e,_f=_a.isMultiSelect,isMultiSelect=void 0!==_f&&_f,_g=_a.selected,selected=void 0===_g?"":_g,props=select_dropdown_rest(_a,["options","onEvent","selectAll","isSmartSearch","isSmall","isMultiSelect","selected"]),onSelect=(0,react.useCallback)((function(e,id){(!e.key||e.key&&"Enter"===e.key)&&onEvent&&onEvent(id)}),[onEvent]);return(0,jsx_runtime.jsx)(react.Fragment,{children:isMultiSelect?(allSelected=options.every((function(option){return option.isSelected})),(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{className:"sui-select__search",children:[(0,jsx_runtime.jsx)(Icon,{name:"search",size:"md"}),(0,jsx_runtime.jsx)(Search,select_dropdown_assign({placeholder:"Search"},props))]}),(0,jsx_runtime.jsxs)("ul",{className:"sui-select__dropdown",role:"listbox","aria-label":"dropdown-options",children:[(0,jsx_runtime.jsx)("li",{className:"sui-select__dropdown--option",role:"option",children:(0,jsx_runtime.jsx)(checkbox_src.X,{label:"Select all",defaultValue:allSelected,onChange:selectAll})}),options.map((function(_a){var id=_a.id,label=_a.label,isSelected=_a.isSelected;return(0,jsx_runtime.jsx)("li",{id,role:"option",className:"sui-select__dropdown--option",onKeyDown:function(e){return onSelect(e,id)},children:(0,jsx_runtime.jsx)(checkbox_src.X,{id,label,defaultValue:isSelected,onChange:function(e){return onSelect(e,id)}})},id)}))]})]})):isSmartSearch&&selected.length<2?(0,jsx_runtime.jsx)("div",{className:"sui-select__dropdown",children:(0,jsx_runtime.jsx)("div",{className:"sui-select__dropdown--empty",children:"Please enter 2 or more characters"})}):(0,jsx_runtime.jsx)("ul",{className:"sui-select__dropdown",role:"listbox","aria-label":"dropdown-options",children:options.map((function(_a){var icon=_a.icon,id=_a.id,label=_a.label,isSelected=_a.isSelected,_b=_a.newLabel,newLabel=void 0===_b?label:_b,_c=_a.boldLabel,boldLabel=void 0===_c?"":_c;return(0,jsx_runtime.jsx)("li",select_dropdown_assign({id,role:"option",tabIndex:"0",className:"sui-select__dropdown--option ".concat(isSelected?"sui-select__dropdown--selected":""),onClick:function(e){return onSelect(e,id)},onKeyDown:function(e){return onSelect(e,id)}},props,{children:(0,jsx_runtime.jsxs)(react.Fragment,{children:[icon&&(0,jsx_runtime.jsx)(Icon,{name:icon,size:isSmall?"sm":"md"}),(0,jsx_runtime.jsxs)("span",{children:[boldLabel&&(0,jsx_runtime.jsx)("strong",{children:boldLabel}),newLabel]})]})}),id)}))})})},dist_src=__webpack_require__("./node_modules/react-autocomplete-hint/dist/src/index.js"),select_input_assign=function(){return select_input_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},select_input_assign.apply(this,arguments)},select_input_rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},InputWithAutoComplete=function(_a){var id=_a.id,_c=(_a.expanded,_a.selected),selected=void 0===_c?"":_c,dropdownItems=_a.dropdownItems,_d=_a.dropdownToggle,dropdownToggle=void 0===_d?function(){}:_d,_e=_a.onChange,onChange=void 0===_e?function(){}:_e,props=select_input_rest(_a,["id","expanded","selected","dropdownItems","dropdownToggle","onChange"]),_f=(0,react.useState)(selected),inputValue=_f[0],setInputValue=_f[1];(0,react.useEffect)((function(){setInputValue(selected)}),[selected]);return(0,jsx_runtime.jsx)(dist_src.Hint,{options:dropdownItems,allowTabFill:!0,children:(0,jsx_runtime.jsx)("input",select_input_assign({id,type:"text",value:inputValue,className:"sui-select__input",onClick:dropdownToggle,onChange:function(event){onChange(event)},"aria-haspopup":"listbox",autoComplete:"off"},props))})},select_selected_assign=function(){return select_selected_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},select_selected_assign.apply(this,arguments)},select_selected_rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},Selected=function(_a){var id=_a.id,_b=_a.expanded,expanded=void 0!==_b&&_b,arrow=_a.arrow,selected=_a.selected,_c=_a.selectLabel,selectLabel=void 0===_c?"":_c,_d=_a.isMultiSelect,isMultiSelect=void 0!==_d&&_d,_e=_a.isSmall,isSmall=void 0!==_e&&_e,_f=_a.removeSelection,removeSelection=void 0===_f?function(){}:_f,_g=_a.dropdownToggle,dropdownToggle=void 0===_g?function(){}:_g,_h=_a.clearSelection,clearSelection=void 0===_h?function(){}:_h,props=select_selected_rest(_a,["id","expanded","arrow","selected","selectLabel","isMultiSelect","isSmall","removeSelection","dropdownToggle","clearSelection"]),selectedContent=(0,src.kJ)(selected)?selected.map((function(_a){var label=_a.label,id=_a.id;return(0,jsx_runtime.jsxs)("span",{className:"sui-select__selected-options",onClick:function(event){return event.stopPropagation()},children:[label,(0,jsx_runtime.jsx)(Icon,{name:"close",size:"sm",onClick:function(){return removeSelection(id)}})]},id)})):(0,jsx_runtime.jsx)("span",{className:"sui-select__selected",children:selected}),onClearSelection=(0,react.useCallback)((function(event){event.stopPropagation(),clearSelection()}),[clearSelection]);return(0,jsx_runtime.jsxs)("div",select_selected_assign({id,className:"sui-select__control",onClick:dropdownToggle,onKeyDown:function(e){"Enter"===e.key&&dropdownToggle()},tabIndex:"0","aria-haspopup":"listbox","aria-expanded":expanded},props,{children:[selectedContent,isMultiSelect&&selectLabel!==selected&&(0,jsx_runtime.jsx)(Icon,{name:"close-alt",size:isSmall?"md":"lg",onClick:onClearSelection}),(0,jsx_runtime.jsx)(Icon,{name:null!=arrow?arrow:"",size:"md"})]}))},SelectedSearch=function(_a){var arrow=_a.arrow,_b=_a.isSmartSearch,isSmartSearch=void 0!==_b&&_b,_c=_a.isSmall,isSmall=void 0!==_c&&_c,clearSelection=(_a.selectLabel,_a.clearSelection),props=select_selected_rest(_a,["arrow","isSmartSearch","isSmall","selectLabel","clearSelection"]),selected=props.selected;return(0,jsx_runtime.jsxs)("div",{className:"sui-select__control",children:[(0,jsx_runtime.jsx)(InputWithAutoComplete,select_selected_assign({placeholder:"Search"},props)),isSmartSearch&&(0,jsx_runtime.jsx)(Icon,{name:"search",size:isSmall?"md":"lg"}),!isSmartSearch&&(0,jsx_runtime.jsx)(Icon,{name:null!=arrow?arrow:"",size:"md"}),isSmartSearch&&selected.length>0&&(0,jsx_runtime.jsx)(Icon,{name:"close-alt",size:isSmall?"md":"lg",onClick:clearSelection})]})},functions_assign=function(){return functions_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},functions_assign.apply(this,arguments)},select_base_assign=function(){return select_base_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},select_base_assign.apply(this,arguments)},select_base_rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},__spreadArray=function(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))},Select=function(_a){var id=_a.id,options=_a.options,className=_a.className,_b=_a.label,label=void 0===_b?"Select":_b,_c=_a.isDisabled,isDisabled=void 0!==_c&&_c,_d=_a.isSmall,isSmall=void 0!==_d&&_d,_e=_a.isError,isError=void 0!==_e&&_e,_f=_a.isMultiSelect,isMultiSelect=void 0!==_f&&_f,_g=_a.isSearchable,isSearchable=void 0!==_g&&_g,_h=_a.isSmartSearch,isSmartSearch=void 0!==_h&&_h,props=select_base_rest(_a,["id","options","className","label","isDisabled","isSmall","isError","isMultiSelect","isSearchable","isSmartSearch"]);if(!id)throw new Error('Empty parameter is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Input\n\nThe parameter "id" in the "Input" component is required.\n\n');if(!options)throw new Error('Empty parameter is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Select\n\nThe parameter "options" in the "Select" component is required and should be array.\n\n');var _j=(0,hooks_src.X2)({onMouseLeave:props.onMouseLeave,onMouseEnter:props.onMouseEnter}),isHovered=_j[0],isFocused=_j[1],interactionMethods=_j[2],ref=(0,react.useRef)(null),_k=(0,react.useState)(!1),isDropdownOpen=_k[0],setIsDropdownOpen=_k[1],_l=(0,react.useState)(options),items=_l[0],setItems=_l[1],_m=(0,react.useState)(options),filteredItems=_m[0],setFilteredItems=_m[1],_o=(0,react.useState)(label),selectedItem=_o[0],setSelectedItems=_o[1];(0,hooks_src.rw)(ref,(function(){setIsDropdownOpen(!1)})),(0,react.useEffect)((function(){var updatedItems=items.map((function(option){var filterItem=filteredItems.find((function(filterOpt){return filterOpt.id===option.id}));return filterItem?select_base_assign({},filterItem):option})),filteredItemList=updatedItems.filter((function(option){return null==option?void 0:option.isSelected})),currentItems=filteredItemList.length>0?filteredItemList:label;if(isMultiSelect)setSelectedItems(null!=currentItems?currentItems:"");else if(null==currentItems?void 0:currentItems.length){var item=null==currentItems?void 0:currentItems[0];item&&item.label&&setSelectedItems(item.label)}setItems(updatedItems)}),[filteredItems]);var classNames=(0,src.uY)("sui-select",{sm:isSmall,open:isDropdownOpen,disabled:isDisabled,hover:isHovered,focus:isFocused,error:isError,multiselect:isMultiSelect,searchable:isSearchable,smartsearch:isSmartSearch},className),handleSearchDropdown=function(event){var searchValue=event.target.value.toLowerCase();setIsDropdownOpen(!0),isSmartSearch&&searchValue.length<2?setFilteredItems([]):function(searchValue,options,setFilterItems){(0,src.xb)(searchValue)?setFilterItems(options):setFilterItems(options.filter((function(option){return option.label.toLowerCase().startsWith(searchValue)})).map((function(option){var index=option.label.toLowerCase().indexOf(searchValue);return functions_assign(functions_assign({},option),-1===index?{isSelected:!1}:{isSelected:!1,newLabel:option.label.substring(0,index)+option.label.substring(index+searchValue.length),boldLabel:option.label.substring(0,searchValue.length)})})))}(searchValue,items,setFilteredItems)},handleMultiSelectSearch=function(event){var searchValue=event.target.value.toLowerCase();setIsDropdownOpen(!0),function(searchValue,options,setFilterItems){(0,src.xb)(searchValue)?setFilterItems(options):setFilterItems(options.filter((function(option){return option.label.toLowerCase().startsWith(searchValue)})))}(searchValue,items,setFilteredItems)},selectProps=select_base_assign({className:classNames,ref},interactionMethods),headerProps=select_base_assign(select_base_assign(select_base_assign(select_base_assign({id,expanded:isDropdownOpen,selected:selectedItem,arrow:isDropdownOpen?"chevron-up":"chevron-down",selectLabel:label,isSmall,dropdownToggle:function(){return setIsDropdownOpen(!isDropdownOpen)},clearSelection:function(){!function(setSelectedItem,options,setFilterItems){var updatedOptions=options.map((function(option){return functions_assign(functions_assign({},option),{isSelected:!1})}));setSelectedItem([]),setFilterItems(updatedOptions)}(setSelectedItems,items,setFilteredItems)}},isSearchable&&{disabled:isDisabled,dropdownItems:filteredItems,onChange:function(e){handleSearchDropdown(e),setSelectedItems(e.target.value)}}),isSmartSearch&&{isSmartSearch}),isMultiSelect&&{isMultiSelect,removeSelection:function(optionId){!function(id,options,setFilterItems){setFilterItems(options.map((function(option){return option.id===id?functions_assign(functions_assign({},option),{isSelected:!1}):option})))}(optionId,filteredItems,setFilteredItems)}}),props),dropdownProps=select_base_assign(select_base_assign(select_base_assign({options:filteredItems,selected:selectedItem,isSmall,onEvent:function(optionId){var optionIndex=filteredItems.findIndex((function(option){return option.id===optionId})),updatedItems=__spreadArray([],filteredItems,!0),isSelected=updatedItems[optionIndex].isSelected;isMultiSelect?(updatedItems[optionIndex].isSelected=!isSelected,setFilteredItems(updatedItems)):(updatedItems.forEach((function(option){return option.isSelected=!1})),updatedItems[optionIndex].isSelected=!0,setFilteredItems(updatedItems),setIsDropdownOpen(!1))}},isSmartSearch&&{isSmartSearch}),isMultiSelect&&{isMultiSelect,selectAll:function(){!function(options,setFilterItems){var allSelected=options.every((function(option){return!0===option.isSelected}));setFilterItems(options.map((function(option){return functions_assign(functions_assign({},option),{isSelected:!allSelected})})))}(filteredItems,setFilteredItems)},onChange:function(e){handleMultiSelectSearch(e)}}),props);return(0,jsx_runtime.jsxs)("div",select_base_assign({},selectProps,{children:[!isSearchable&&(0,jsx_runtime.jsx)(Selected,select_base_assign({},headerProps)),isSearchable&&(0,jsx_runtime.jsx)(SelectedSearch,select_base_assign({},headerProps)),isDropdownOpen&&(0,jsx_runtime.jsx)(Dropdown,select_base_assign({},dropdownProps))]}))},select_standard_assign=function(){return select_standard_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},select_standard_assign.apply(this,arguments)},select_standard_rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},select_standard_Select=function(_a){var props=select_standard_rest(_a,[]);return(0,jsx_runtime.jsx)(Select,select_standard_assign({},props))},select_search_assign=function(){return select_search_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},select_search_assign.apply(this,arguments)},select_search_rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},SearchSelect=function(_a){var props=select_search_rest(_a,[]);return(0,jsx_runtime.jsx)(Select,select_search_assign({isSearchable:!0},props))},select_smart_search_assign=function(){return select_smart_search_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},select_smart_search_assign.apply(this,arguments)},select_smart_search_rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},SmartSearchSelect=function(_a){var props=select_smart_search_rest(_a,[]);return(0,jsx_runtime.jsx)(Select,select_smart_search_assign({isSearchable:!0,isSmartSearch:!0},props))},select_multiselect_assign=function(){return select_multiselect_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},select_multiselect_assign.apply(this,arguments)},select_multiselect_rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},MultiSelect=function(_a){var props=select_multiselect_rest(_a,[]);return(0,jsx_runtime.jsx)(Select,select_multiselect_assign({isMultiSelect:!0},props))}}}]);