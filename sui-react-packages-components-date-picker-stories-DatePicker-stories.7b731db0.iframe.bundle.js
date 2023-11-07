"use strict";(self.webpackChunksui_docs=self.webpackChunksui_docs||[]).push([[2479],{"./packages/sui-react/packages/components/date-picker/stories/DatePicker.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DatePicker:()=>DatePicker_stories_DatePicker,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DatePicker_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/sui-react/packages/components/form-field/src/index.ts"),utils_src=__webpack_require__("./packages/sui-react/packages/utils/src/index.ts"),button_src=__webpack_require__("./packages/sui-react/packages/components/button/src/index.ts"),isSameMonth=__webpack_require__("./node_modules/date-fns/esm/isSameMonth/index.js"),isWithinInterval=__webpack_require__("./node_modules/date-fns/esm/isWithinInterval/index.js"),isSameDay=__webpack_require__("./node_modules/date-fns/esm/isSameDay/index.js"),isToday=__webpack_require__("./node_modules/date-fns/esm/isToday/index.js"),getDate=__webpack_require__("./node_modules/date-fns/esm/getDate/index.js"),format=__webpack_require__("./node_modules/date-fns/esm/format/index.js"),hooks_src=__webpack_require__("./packages/sui-react/packages/hooks/src/index.ts"),subDays=__webpack_require__("./node_modules/date-fns/esm/subDays/index.js"),addYears=__webpack_require__("./node_modules/date-fns/esm/addYears/index.js"),addMonths=__webpack_require__("./node_modules/date-fns/esm/addMonths/index.js"),isBefore=__webpack_require__("./node_modules/date-fns/esm/isBefore/index.js"),isAfter=__webpack_require__("./node_modules/date-fns/esm/isAfter/index.js"),max=__webpack_require__("./node_modules/date-fns/esm/max/index.js"),min=__webpack_require__("./node_modules/date-fns/esm/min/index.js"),setYear=__webpack_require__("./node_modules/date-fns/esm/setYear/index.js"),setMonth=__webpack_require__("./node_modules/date-fns/esm/setMonth/index.js"),subMonths=__webpack_require__("./node_modules/date-fns/esm/subMonths/index.js"),startOfWeek=__webpack_require__("./node_modules/date-fns/esm/startOfWeek/index.js"),startOfMonth=__webpack_require__("./node_modules/date-fns/esm/startOfMonth/index.js"),endOfWeek=__webpack_require__("./node_modules/date-fns/esm/endOfWeek/index.js"),endOfMonth=__webpack_require__("./node_modules/date-fns/esm/endOfMonth/index.js"),addDays=__webpack_require__("./node_modules/date-fns/esm/addDays/index.js"),parse=__webpack_require__("./node_modules/date-fns/esm/parse/index.js"),isValid=__webpack_require__("./node_modules/date-fns/esm/isValid/index.js"),subYears=__webpack_require__("./node_modules/date-fns/esm/subYears/index.js");const parseDate=(date,defaultValue)=>{if(date){const parsed=(0,parse.Z)(date,"dd/MM/yyyy",new Date);if((0,isValid.Z)(parsed))return parsed}return defaultValue},predefinedRanges=[{label:"Today",startDate:dateStr=new Date,endDate:dateStr},{label:"Tomorrow",startDate:(0,addDays.Z)(dateStr,1),endDate:(0,addDays.Z)(dateStr,1)},{label:"1 Week",startDate:(0,startOfWeek.Z)(dateStr),endDate:(0,endOfWeek.Z)(dateStr)},{label:"30 days",startDate:(0,startOfMonth.Z)(dateStr),endDate:(0,endOfMonth.Z)(dateStr)},{label:"Custom",startDate:null,endDate:null}];var dateStr;const switchLists={months:Array(12).fill(null).map(((_v,index)=>(0,format.Z)((new Date).setMonth(index),"MMMM"))),years:Array(30).fill(null).map(((_v,i)=>(0,format.Z)((0,subYears.Z)(new Date,i),"yyyy"))).reverse()},DatePickerContext=(0,react.createContext)(void 0),today=new Date,DatePickerProvider=props=>{const{onChange,minDate,maxDate,definedRanges=predefinedRanges,isDisabled}=props,[isOpen,setIsOpen]=(0,react.useState)(!1),[listType,setListType]=(0,react.useState)("months"),[toggleId,setToggleId]=(0,react.useState)(""),isSingle="single"===props?.type,minDateValid=parseDate(minDate,(0,subDays.Z)(today,10)),maxDateValid=parseDate(maxDate,(0,addYears.Z)(today,10)),defaultRange={startDate:parseDate(props?.startDate,today),endDate:parseDate(props?.endDate,today)},[initialFirstMonth,initialSecondMonth]=((range,minDate,maxDate)=>{const{startDate,endDate}=range;if(startDate&&endDate){const newStart=(0,max.Z)([startDate,minDate]),newEnd=(0,min.Z)([endDate,maxDate]);return[newStart,(0,isSameMonth.Z)(newStart,newEnd)?(0,addMonths.Z)(newStart,1):newEnd]}return[startDate,endDate]})(defaultRange||{},minDateValid,maxDateValid),[dateRange,setDateRange]=(0,react.useState)({...defaultRange}),[hoverDay,setHoverDay]=(0,react.useState)(),[startMonth,setFirstMonth]=(0,react.useState)(initialFirstMonth||today),[endMonth,setSecondMonth]=(0,react.useState)(initialSecondMonth||(0,addMonths.Z)(startMonth,1));(0,react.useEffect)((()=>{setDateRange(defaultRange)}),[props.startDate,props.endDate]);const{startDate,endDate}=dateRange,closeToggle=(0,react.useCallback)((()=>{setToggleId(""),setListType("")}),[]),openToggle=(0,react.useCallback)(((type,toggleIdStr)=>{toggleIdStr===toggleId&&type===listType?closeToggle():(setToggleId(toggleIdStr),setListType(type))}),[closeToggle,listType,toggleId]),helpers={inHoverRange:day=>startDate&&!endDate&&hoverDay&&(0,isAfter.Z)(hoverDay,startDate)&&(0,isWithinInterval.Z)(day,{start:startDate,end:hoverDay}),jumpToDate:val=>{const firstCalendar=toggleId===CALENDARS.START_MONTH,value=val;isSingle?setFirstMonth((0,setYear.Z)(startMonth,value)):"months"===listType?(setFirstMonth((0,setMonth.Z)(startMonth,firstCalendar?value:value-1)),setSecondMonth((0,setMonth.Z)(startMonth,firstCalendar?value+1:value))):"years"===listType&&(setFirstMonth((0,setYear.Z)(startMonth,value)),setSecondMonth((0,addMonths.Z)((0,setYear.Z)(startMonth,value),1)))},openToggle,closeToggle},handlers={onDayClick:day=>{if(isSingle)return setDateRange({startDate:day,endDate:void 0}),void setIsOpen(!1);if(!startDate||endDate||(0,isBefore.Z)(day,startDate))setDateRange({startDate:day,endDate:void 0});else{const newRange={startDate,endDate:day};onChange&&onChange(newRange),setDateRange(newRange)}setHoverDay(day)},onDayHover:date=>{startDate&&!endDate&&(hoverDay&&(0,isSameDay.Z)(date,hoverDay)||setHoverDay(date))},onMonthNavigate:marker=>{if(isSingle)setFirstMonth("prev"===marker?(0,subMonths.Z)(startMonth,1):(0,addMonths.Z)(startMonth,1));else if(marker===CALENDARS.START_MONTH){const firstNew=(0,subMonths.Z)(startMonth,1);(0,isBefore.Z)(firstNew,startMonth)&&(setFirstMonth(firstNew),setSecondMonth(startMonth))}else{const secondNew=(0,addMonths.Z)(endMonth,1);(0,isBefore.Z)(endMonth,secondNew)&&(setSecondMonth(secondNew),setFirstMonth(endMonth))}}};return(0,jsx_runtime.jsx)(DatePickerContext.Provider,{value:{isDisabled,isSingle,isOpen,setIsOpen,listType,toggleId,openToggle,closeToggle,dateRange,minDateValid,maxDateValid,definedRanges,startMonth,endMonth,setFirstMonthValidated:date=>{(0,isBefore.Z)(date,endMonth)&&setFirstMonth(date)},setSecondMonthValidated:date=>{(0,isAfter.Z)(date,startMonth)&&setSecondMonth(date)},setDateRangeValidated:range=>{let{startDate:newStart,endDate:newEnd}=range;if(newStart&&newEnd)range.startDate=newStart=(0,max.Z)([newStart,minDateValid]),range.endDate=newEnd=(0,min.Z)([newEnd,maxDateValid]),setDateRange(range),onChange&&onChange(range),setFirstMonth(newStart),setSecondMonth((0,isSameMonth.Z)(newStart,newEnd)?(0,addMonths.Z)(newStart,1):newEnd);else{const emptyRange={};setDateRange(emptyRange),onChange&&onChange(emptyRange),setFirstMonth(today),setSecondMonth((0,addMonths.Z)(startMonth,1))}},helpers,handlers},children:props?.children})},DatePickerDay=({value,...props})=>{const{disabled,filled,highlighted,outlined,startOfRange:start,endOfRange:end,onClick}=props,[isHovered,isFocused,methods]=(0,hooks_src.X2)({onMouseEnter:props.onHover}),ctx=(0,react.useContext)(DatePickerContext),isSingle=ctx?.isSingle,classNames=(0,utils_src.uY)("sui-date-picker__day",{disabled,filled:!disabled&&filled,highlighted:!!highlighted&&!disabled&&!isSingle,outlined:!filled&&outlined&&!disabled,hover:isHovered&&!disabled,start,end}),onClickDay=(0,react.useCallback)((()=>{!disabled&&onClick&&onClick()}),[disabled,onClick]);return!!value&&(0,jsx_runtime.jsxs)("div",{tabIndex:props.disabled?-1:0,role:"button",className:classNames,onClick:onClickDay,onKeyDown:e=>(0,utils_src.Jw)(e,onClickDay),...methods,children:[(0,jsx_runtime.jsx)("span",{className:"sui-date-picker__day-title",children:value})," "]})},DatePickerNav=({date,marker})=>{const ctx=(0,react.useContext)(DatePickerContext),{openToggle}=ctx?.helpers,{onMonthNavigate}=ctx?.handlers,onNavClick=(0,react.useCallback)((direction=>{ctx?.isSingle||ctx.closeToggle(),onMonthNavigate(ctx?.isSingle?direction:marker)}),[ctx,marker,onMonthNavigate]);return(0,jsx_runtime.jsxs)("div",{className:"sui-date-picker__nav",children:[(CALENDARS.START_MONTH===marker||ctx?.isSingle)&&(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(button_src.zx,{icon:"chevron-left",appearance:"tertiary",color:"black",iconOnly:!0,onClick:()=>onNavClick("prev"),children:"Previous month"})}),!ctx?.isSingle&&(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(button_src.zx,{className:"sui-date-picker__nav--btn",appearance:"tertiary",color:"black",endIcon:"caret-down",onClick:()=>openToggle("months",marker),onKeyDown:()=>openToggle("months",marker),children:(0,format.Z)(date,"MMMM")})}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)(button_src.zx,{className:"sui-date-picker__nav--btn",appearance:"tertiary",color:"black",endIcon:"caret-down",onClick:()=>ctx.openToggle("years",marker),onKeyDown:e=>(0,utils_src.Jw)(e,(()=>ctx.openToggle("years",marker))),children:[ctx.isSingle&&(0,format.Z)(date,"MMMM")," ",(0,format.Z)(date,"yyyy")]})}),(CALENDARS.END_MONTH===marker||ctx.isSingle)&&(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(button_src.zx,{appearance:"tertiary",color:"black",icon:"chevron-right",iconOnly:!0,onClick:()=>onNavClick("next"),children:"Next month"})})]})};var getMonth=__webpack_require__("./node_modules/date-fns/esm/getMonth/index.js"),getYear=__webpack_require__("./node_modules/date-fns/esm/getYear/index.js");const DatePickerList=({date,height})=>{const ctx=(0,react.useContext)(DatePickerContext),dropdownList=switchLists?.[ctx?.listType]??[],onItemClick=(0,react.useCallback)((value=>{ctx.closeToggle(),ctx.helpers.jumpToDate(value)}),[ctx]),isActive=val=>"months"===ctx.listType?(0,getMonth.Z)(date)===val:Number(val)===(0,getYear.Z)(date);return(0,jsx_runtime.jsx)("ul",{className:"sui-date-picker__calendar-list",style:{height},children:dropdownList.map(((name,index)=>{const val="months"===ctx.listType?index:name;return(0,jsx_runtime.jsx)("li",{className:(0,utils_src.uY)("sui-date-picker__calendar-list-item",{active:isActive(val)}),children:(0,jsx_runtime.jsx)("span",{role:"button",tabIndex:0,onClick:()=>onItemClick(val),onKeyDown:e=>(0,utils_src.Jw)(e,(()=>onItemClick(val))),children:name})},index)}))})},DatePickerMonth=({value:date,marker})=>{const ctx=(0,react.useContext)(DatePickerContext),{dateRange,helpers,handlers}=ctx,monthChunks=(data=(date=>{const startWeek=(0,startOfWeek.Z)((0,startOfMonth.Z)(date)),endWeek=(0,endOfWeek.Z)((0,endOfMonth.Z)(date)),days=[];for(let curr=startWeek;(0,isBefore.Z)(curr,endWeek);)days.push(curr),curr=(0,addDays.Z)(curr,1);return days})(date),chunkSize=7,Array.from({length:Math.ceil(data.length/chunkSize)},((value,index)=>data.slice(index*chunkSize,index*chunkSize+chunkSize))));var data,chunkSize;const daysBlockRef=(0,react.useRef)(null),isListVisible=ctx?.toggleId===marker,daysList=monthChunks.map((week=>week.map((day=>{const isStart=(({startDate},day)=>startDate&&(0,isSameDay.Z)(day,startDate))(dateRange,day),isEnd=(({endDate},day)=>endDate&&(0,isSameDay.Z)(day,endDate))(dateRange,day),isRangeOneDay=(({startDate,endDate})=>!(!startDate||!endDate)&&(0,isSameDay.Z)(startDate,endDate))(dateRange),disabled=!(0,isSameMonth.Z)(date,day)||!(0,isWithinInterval.Z)(day,{start:ctx?.minDateValid,end:ctx?.maxDateValid}),highlighted=(({startDate,endDate},day)=>startDate&&endDate&&((0,isWithinInterval.Z)(day,{start:startDate,end:endDate})||(0,isSameDay.Z)(day,startDate)||(0,isSameDay.Z)(day,endDate)))(dateRange,day)||helpers.inHoverRange(day);return(0,jsx_runtime.jsx)(DatePickerDay,{filled:isStart||isEnd||ctx?.isSingle&&(0,isSameDay.Z)(day,new Date(ctx?.dateRange?.startDate??"")),outlined:(0,isToday.Z)(day),highlighted:highlighted&&!isRangeOneDay,hovered:helpers.inHoverRange(day),disabled,startOfRange:isStart&&!isRangeOneDay,endOfRange:isEnd&&!isRangeOneDay,onClick:()=>handlers.onDayClick(day),onHover:()=>handlers.onDayHover(day),value:(0,getDate.Z)(day)},(0,format.Z)(day,"MM-dd-yyyy"))}))));return(0,jsx_runtime.jsxs)("div",{className:"sui-date-picker__calendar-month",children:[(0,jsx_runtime.jsx)(DatePickerNav,{marker,date}),isListVisible?(0,jsx_runtime.jsx)(DatePickerList,{date,height:daysBlockRef?.current?.offsetHeight}):(0,jsx_runtime.jsxs)("div",{ref:daysBlockRef,children:[(0,jsx_runtime.jsx)("div",{className:"sui-date-picker__calendar-weekdays",children:["Su","Mo","Tu","We","Th","Fr","Sa"].map(((day,index)=>(0,jsx_runtime.jsx)("div",{className:"sui-date-picker__calendar-weekday",children:day.toUpperCase()},index)))}),(0,jsx_runtime.jsxs)("div",{className:"sui-date-picker__calendar-days",children:[daysList,(0,jsx_runtime.jsx)(DatePickerDay,{})]})]})]})},isSameRange=(first,second)=>{const{startDate:fStart,endDate:fEnd}=first,{startDate:sStart,endDate:sEnd}=second;return!!(fStart&&sStart&&fEnd&&sEnd)&&((0,isSameDay.Z)(fStart,sStart)&&(0,isSameDay.Z)(fEnd,sEnd))},DatePickerRange=({})=>{const ctx=(0,react.useContext)(DatePickerContext),onRangeClick=(0,react.useCallback)((data=>{ctx?.setDateRangeValidated(data)}),[ctx]);return(0,jsx_runtime.jsx)("div",{className:"sui-date-picker__range",children:ctx?.definedRanges?.map(((range,index)=>(0,jsx_runtime.jsx)("div",{tabIndex:0,role:"button",className:(0,utils_src.uY)("sui-date-picker__range-button",{active:isSameRange(range,ctx?.dateRange)}),onClick:()=>onRangeClick(range),onKeyDown:e=>(0,utils_src.Jw)(e,(()=>{onRangeClick(range)})),children:range?.label},index)))})},date_picker_popover=()=>{const ctx=(0,react.useContext)(DatePickerContext),{startMonth,endMonth,helpers,handlers}=ctx,commonProps={helpers,handlers};return(0,jsx_runtime.jsxs)("div",{className:(0,utils_src.uY)("sui-date-picker__popover",{open:ctx?.isOpen}),"data-testid":"date-picker-popover",children:[!ctx?.isSingle&&(0,jsx_runtime.jsx)("div",{className:"sui-date-picker__header",children:(0,jsx_runtime.jsx)(DatePickerRange,{})}),(0,jsx_runtime.jsx)("div",{className:"sui-date-picker__body",children:(0,jsx_runtime.jsx)("div",{className:"sui-date-picker__calendars",children:ctx?.isSingle?(0,jsx_runtime.jsx)(DatePickerMonth,{...commonProps,value:startMonth}):(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)(DatePickerMonth,{...commonProps,value:startMonth,marker:CALENDARS.START_MONTH}),(0,jsx_runtime.jsx)(DatePickerMonth,{...commonProps,value:endMonth,marker:CALENDARS.END_MONTH})]})})}),!ctx?.isSingle&&(0,jsx_runtime.jsxs)("div",{className:"sui-date-picker__footer",children:[(0,jsx_runtime.jsx)("div",{className:"sui-date-picker__footer--item",children:(0,jsx_runtime.jsx)(button_src.zx,{appearance:"tertiary",color:"black",isSmall:!0,onClick:()=>ctx?.setIsOpen(!1),children:"Close"})}),(0,jsx_runtime.jsx)("div",{className:"sui-date-picker__footer--item",children:(0,jsx_runtime.jsx)(button_src.zx,{appearance:"secondary",color:"black",isSmall:!0,onClick:()=>ctx?.setIsOpen(!1),children:"Ok"})})]})]})};var input_src=__webpack_require__("./packages/sui-react/packages/components/input/src/index.ts");const DatePickerInput=({...props})=>{const ctx=(0,react.useContext)(DatePickerContext),classNames=(0,utils_src.uY)("sui-date-picker__input",{single:ctx?.isSingle,range:!ctx?.isSingle,disabled:ctx?.isDisabled});(0,react.useEffect)((()=>{ctx?.isDisabled&&ctx.setIsOpen(!1)}),[ctx,ctx?.isDisabled]);const onInputClick=(0,react.useCallback)((()=>{ctx.setIsOpen(!ctx.isOpen)}),[ctx]),id=(0,react.useId)(),{startDate,endDate}=ctx?.dateRange??{};let value="";return ctx?.isSingle&&startDate?value=`${(0,format.Z)(startDate,"LLLL d, yyyy")}`:startDate&&endDate&&(value=`${(0,format.Z)(startDate,"LLLL d, yyyy")}- ${(0,format.Z)(endDate,"LLLL d, yyyy")}`),(0,jsx_runtime.jsx)("div",{tabIndex:props.disabled?-1:0,role:"button",className:classNames,onClick:onInputClick,onKeyDown:e=>(0,utils_src.Jw)(e,onInputClick),"data-testid":"date-picker-input-container",children:(0,jsx_runtime.jsx)(input_src.I,{id,tabIndex:-1,icon:"calendar",iconPosition:"start",readOnly:!0,value:value??"",...props})})},CALENDARS={START_MONTH:Symbol("startMonth"),END_MONTH:Symbol("endMonth")},DatePicker=({className="",type="single",startDate,endDate,minDate,maxDate,isDisabled=!1,children,...props})=>{const pickType=type??"single",classNames=(0,utils_src.uY)("sui-date-picker",{[pickType]:!(0,utils_src.xb)(pickType)},className??""),datepickerProps={type,startDate,endDate,minDate,maxDate,isDisabled,children,onChange:props?.onChange};return(0,jsx_runtime.jsx)(DatePickerProvider,{...datepickerProps,children:(0,jsx_runtime.jsxs)("div",{className:classNames,"data-testid":"date-picker",children:[(0,jsx_runtime.jsx)(DatePickerInput,{isDisabled,...props}),(0,jsx_runtime.jsx)(date_picker_popover,{})]})})};var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),storybook=__webpack_require__("./packages/storybook/lib/storybook.ts"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(storybook.$0,{contained:!0,style:{paddingTop:0,paddingBottom:0},children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Install the ",(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"DatePicker"})," package as an individual\ncomponent or follow the Overview page instructions to get the complete SUI\nComponents package."]})})}),"\n",(0,jsx_runtime.jsxs)(storybook.$0,{title:"Props",border:!0,children:[(0,jsx_runtime.jsxs)(storybook.$0,{title:{content:"type",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:"Specifies the type of the DatePicker "}),(0,jsx_runtime.jsxs)("p",{children:[(0,jsx_runtime.jsx)(_components.p,{children:"Allowed options:"}),(0,jsx_runtime.jsxs)(storybook.aV,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"single"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"range"})})]})]})]}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"minDate*",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Minimum selectable date"})}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"maxDate*",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Maximum selectable date"})}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"isDisabled*",tag:"boolean",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsxs)("p",{children:["When set to ",(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"true"})," the date picker will be disabled"]})}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"startDate*",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"The initial date value "})}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"endDate*",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"In the range Date Picker type, this represents the end date value "})}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"onChange",tag:"function",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"A callback function to be invoked when the date changes, the first parameter is the new selected date(s)  "})}),(0,jsx_runtime.jsx)(storybook.$0,{title:{content:"className*",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Additional css classname(s)"})})]}),"\n",(0,jsx_runtime.jsxs)(storybook.$0,{children:[(0,jsx_runtime.jsx)("h3",{children:"Note. "}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["props with date values should be in the format"," ","\n",(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"DD/MM/YYYY"})]})}),(0,jsx_runtime.jsxs)("p",{children:[(0,jsx_runtime.jsx)(_components.p,{children:"Examples:"}),(0,jsx_runtime.jsxs)(storybook.aV,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"01/05/2023"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(storybook.EK,{small:!0,children:"30/10/2023"})})]})]})]})]})}const TabCode=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};var dedent=__webpack_require__("./node_modules/dedent/dist/dedent.js"),dedent_default=__webpack_require__.n(dedent);const sampleCode=dedent_default()`
    <DatePicker type="single" startDate="15/07/2023" />
`,rangeCode=dedent_default()`
    <DatePicker type="range" startDate="15/08/2023" endDate="21/08/2023" />
`,disabledCode=dedent_default()`
    <DatePicker isDisabled={true} type="single" startDate="15/07/2023" />
`;function TabExamples_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(storybook.$0,{contained:!0,style:{paddingTop:0},children:[(0,jsx_runtime.jsx)("p",{children:"Basic Date Picker example used for most cases "}),(0,jsx_runtime.jsx)("div",{className:"sui-wrap sui-theme--light",style:{marginBottom:"20px",position:"relative",zIndex:3,width:"400px"},children:(0,jsx_runtime.jsx)(DatePicker,{type:"single",startDate:"15/07/2023"})}),(0,jsx_runtime.jsx)(storybook.pP,{language:"js",children:sampleCode})]}),"\n",(0,jsx_runtime.jsxs)(storybook.$0,{title:"Range Type Calendar",contained:!0,style:{paddingTop:0},children:[(0,jsx_runtime.jsx)("div",{className:"sui-wrap sui-theme--light",style:{marginBottom:"20px",position:"relative",zIndex:2,width:"400px"},children:(0,jsx_runtime.jsx)(DatePicker,{type:"range",startDate:"15/08/2023",endDate:"21/08/2023",onChange:console.log})}),(0,jsx_runtime.jsx)(storybook.pP,{language:"js",children:rangeCode})]}),"\n",(0,jsx_runtime.jsxs)(storybook.$0,{title:"Disabled",contained:!0,style:{paddingTop:0},children:[(0,jsx_runtime.jsx)("div",{className:"sui-wrap sui-theme--light",style:{marginBottom:"20px",position:"relative",zIndex:1,width:"400px"},children:(0,jsx_runtime.jsx)(DatePicker,{isDisabled:!0,type:"single",startDate:"15/07/2023"})}),(0,jsx_runtime.jsx)(storybook.pP,{language:"js",children:disabledCode})]})]})}const TabExamples=function TabExamples_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabExamples_createMdxContent,props)})):TabExamples_createMdxContent()},overview_namespaceObject=__webpack_require__.p+"static/media/overview.57533754.svg",anatomy_namespaceObject=__webpack_require__.p+"static/media/anatomy.cfc0d70b.svg",calendar_single_namespaceObject=__webpack_require__.p+"static/media/calendar-single.f76e6c4f.svg",calendar_range_namespaceObject=__webpack_require__.p+"static/media/calendar-range.04ea3458.svg",spacing_namespaceObject=__webpack_require__.p+"static/media/spacing.a10e7c49.svg",states_namespaceObject=__webpack_require__.p+"static/media/states.5a6d2a9b.svg",types_namespaceObject=__webpack_require__.p+"static/media/types.122f0f3a.svg",states_single_namespaceObject=__webpack_require__.p+"static/media/states-single.9b6fc4d4.svg",states_range_namespaceObject=__webpack_require__.p+"static/media/states-range.47d18cf2.svg";function TabUsage_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(storybook.$0,{border:!0,style:{paddingTop:0},children:(0,jsx_runtime.jsx)("img",{src:overview_namespaceObject,alt:"Date picker Overview"})}),"\n",(0,jsx_runtime.jsx)(storybook.$0,{title:"Anatomy",children:(0,jsx_runtime.jsxs)(storybook.X2,{children:[(0,jsx_runtime.jsxs)(storybook.JX,{children:[(0,jsx_runtime.jsx)("h3",{style:{marginTop:0},children:"1. Input"}),(0,jsx_runtime.jsxs)("p",{children:["Date picker uses ",(0,jsx_runtime.jsx)("a",{href:"/?path=/docs/sui-components-forms-input--docs",target:"_blank",children:"input component"})," for initial state."]}),(0,jsx_runtime.jsx)("h3",{children:"2. Calendar"}),(0,jsx_runtime.jsx)("p",{children:"The main part of the date picker is the calendar itself. It displays the days, weeks, and months for the user to select the desired date(s). The calendar can be shown in various formats, such as a monthly view, a weekly view, or even a single day view."})]}),(0,jsx_runtime.jsx)(storybook.JX,{size:"4",children:(0,jsx_runtime.jsx)("img",{src:anatomy_namespaceObject,alt:"Date Picker Anatomy",style:{marginBottom:20}})})]})}),"\n",(0,jsx_runtime.jsx)(storybook.$0,{title:"Calendar - Single",children:(0,jsx_runtime.jsxs)(storybook.X2,{children:[(0,jsx_runtime.jsxs)(storybook.JX,{children:[(0,jsx_runtime.jsx)("h3",{style:{marginTop:0},children:"1. EditorToolbar Controls"}),(0,jsx_runtime.jsx)("p",{children:"To navigate between months or years, the date picker often includes navigation controls. These can be in the form of arrow buttons that allow users to move forward or backward of the shown month."}),(0,jsx_runtime.jsx)("h3",{children:"2. Month/Year Header"}),(0,jsx_runtime.jsx)("p",{children:"The header section of the date picker typically shows the currently displayed month and year. It helps users quickly identify the time period being shown and provides a way to switch to a different month."}),(0,jsx_runtime.jsx)("h3",{children:"3. Day Cells"}),(0,jsx_runtime.jsx)("p",{children:"The individual cells within the calendar grid represent each days of the week."}),(0,jsx_runtime.jsx)("h3",{children:"4. Date Cells"}),(0,jsx_runtime.jsx)("p",{children:"The individual cells within the calendar grid represent each date of the month. These cells have  interactive variations to display the date’s status."})]}),(0,jsx_runtime.jsx)(storybook.JX,{size:"4",children:(0,jsx_runtime.jsx)("img",{src:calendar_single_namespaceObject,alt:"Date Picker single calendar",style:{marginBottom:20}})})]})}),"\n",(0,jsx_runtime.jsx)(storybook.$0,{title:"Calendar - Range",children:(0,jsx_runtime.jsxs)(storybook.X2,{children:[(0,jsx_runtime.jsxs)(storybook.JX,{children:[(0,jsx_runtime.jsx)("h3",{style:{marginTop:0},children:"1. Quick controls"}),(0,jsx_runtime.jsx)("p",{children:"It helps users quickly identify the time period and provides a way to select them in a single click."}),(0,jsx_runtime.jsx)("h3",{children:"2. Range Selection"}),(0,jsx_runtime.jsx)("p",{children:"The date picker supports selecting a range of dates. To facilitate this, it might include additional interactive elements, such as a start and end date input fields or a draggable selection handle."}),(0,jsx_runtime.jsx)("h3",{children:"3. Actions"}),(0,jsx_runtime.jsx)("p",{children:'The date picker may have buttons or actions associated with it. For example, it might include "Cancel" and "Apply" buttons to confirm or cancel the selected date(s) or a "Clear" button to remove any existing selection.'})]}),(0,jsx_runtime.jsx)(storybook.JX,{size:"4",children:(0,jsx_runtime.jsx)("img",{src:calendar_range_namespaceObject,alt:"Date Picker Range calendar",style:{marginBottom:20}})})]})}),"\n",(0,jsx_runtime.jsx)(storybook.$0,{title:"Spacing",style:{paddingTop:0},children:(0,jsx_runtime.jsx)("img",{src:spacing_namespaceObject,alt:"Date Picker spacing"})}),"\n",(0,jsx_runtime.jsxs)(storybook.$0,{title:"States",style:{paddingTop:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"The input behaviour simply follows the same states that Input has. There\nwill be displayed a calendar on popover when the input is on the focus\nstate."})}),(0,jsx_runtime.jsx)("img",{src:states_namespaceObject,alt:"Date Picker states"})]}),"\n",(0,jsx_runtime.jsx)(storybook.$0,{title:"Types",style:{paddingTop:0},children:(0,jsx_runtime.jsx)("img",{src:types_namespaceObject,alt:"Date Picker states"})}),"\n",(0,jsx_runtime.jsx)(storybook.$0,{title:"States on Single Calendar",style:{paddingTop:0},children:(0,jsx_runtime.jsx)("img",{src:states_single_namespaceObject,alt:"Date picker states on single calendar"})}),"\n",(0,jsx_runtime.jsx)(storybook.$0,{title:"States on Range Calendar",style:{paddingTop:0},children:(0,jsx_runtime.jsx)("img",{src:states_range_namespaceObject,alt:"Date picker states on range calendar"})})]})}const TabUsage=function TabUsage_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabUsage_createMdxContent,props)})):TabUsage_createMdxContent(props)};function DatePicker_createMdxContent(props){return storybook.T3||_missingMdxReference("Page",!1),storybook.T3.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsx)(dist.E$,{children:(0,jsx_runtime.jsxs)(storybook.T3.Tabs,{title:"Date Picker",subtitle:"Date picker enable users to select a specific date or a range of dates.",status:"draft",children:[(0,jsx_runtime.jsx)("div",{id:"usage",label:"Usage",children:(0,jsx_runtime.jsx)(TabUsage,{})}),(0,jsx_runtime.jsx)("div",{id:"code",label:"Code",children:(0,jsx_runtime.jsx)(TabCode,{})}),(0,jsx_runtime.jsx)("div",{id:"examples",label:"Examples",children:(0,jsx_runtime.jsx)(TabExamples,{})})]})})}function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const DatePicker_stories={title:"SUI/Components/Advanced/Date Picker",component:DatePicker,parameters:{layout:"fullscreen",docs:{page:function DatePicker_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(DatePicker_createMdxContent,props)})):DatePicker_createMdxContent()}}}},DatePicker_stories_DatePicker=({color,error,isDisabled,...props})=>{const boxStyles={padding:20,borderRadius:4,background:"white"!==color?"#fff":"#333"};return(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsx)("div",{style:boxStyles,children:(0,jsx_runtime.jsx)(src.W,{id:"datepicker",label:"Datepicker",helper:"This is a description",error,isDisabled,children:(0,jsx_runtime.jsx)(DatePicker,{isDisabled,...props})})})})})};DatePicker_stories_DatePicker.args={type:"single",startDate:"15/07/2023",endDate:"15/09/2023",minDate:"01/05/2023",maxDate:"30/10/2023",isDisabled:!1,error:""},DatePicker_stories_DatePicker.argTypes={type:{name:"Type",options:["single","range"],description:"Specifies the type of DatePicker (e.g., single date, date range)",control:{type:"select",labels:{single:"Single DatePicker",range:"Range DatePicker"}}},startDate:{name:"Start Date",control:{type:"text"}},endDate:{name:"End Date",if:{arg:"type",eq:"range"},control:{type:"text"}},minDate:{name:"Min Date",control:{type:"text",description:"dd/MM/yyyy Eg. 01/01/2000"}},maxDate:{name:"Max Date",control:{type:"text",description:"dd/MM/yyyy Eg. 01/01/2000"}},isDisabled:{name:"Disabled",control:{type:"boolean"}},error:{name:"Error",control:{type:"text"}}};const __namedExportsOrder=["DatePicker"]},"./packages/sui-react/packages/components/form-field/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>FormField});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/sui-react/packages/utils/src/index.ts"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);const Label=({id,hidden=!1,children})=>{if(!("string"==typeof children?!(0,src.xb)(children??""):!!children))throw new Error('Empty content is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Form Field\n\nThe "Label" component requires a child element to be passed to it.\n\n');const classNames=classnames_default()({"sui-screen-reader-only":hidden,"sui-form-field__label":!hidden});return(0,jsx_runtime.jsx)("label",{htmlFor:id,id:`${id}-label`,className:classNames,children})},Helper=({id,children})=>{const classNames=classnames_default()({"sui-form-field__helper":!0});return(0,jsx_runtime.jsx)("span",{id:`${id}-helper`,className:classNames,children})},ErrorMessage=({id,show=!1,children})=>(0,jsx_runtime.jsx)("span",{id:`${id}-error-message`,className:"sui-form-field__helper sui-color-error--50",children:show&&children}),FormField=({id="",label,helper,error,className,isSmall=!1,isDisabled=!1,isLabelHidden=!1,children,...props})=>{let fieldId=(0,react.useId)();(0,src.xb)(id)||(fieldId=id);const isErrored="string"==typeof error?!(0,src.xb)(error??""):!!error,classNames=(0,src.uY)("sui-form-field",{sm:isSmall,disabled:isDisabled},className),ariaAttrs={id:fieldId,isSmall,isDisabled,...!(0,src.xb)(label??"")&&{"aria-labelledby":`${fieldId}-label`},...!!helper&&{"aria-describedby":`${fieldId}-helper`},...isErrored&&{"aria-errormessage":`${fieldId}-error-message`,isError:!0}};return(0,jsx_runtime.jsxs)("div",{className:classNames,...props,"data-testid":"form-field",children:[!(0,src.xb)(label??"")&&(0,jsx_runtime.jsx)(Label,{id:fieldId,hidden:isLabelHidden??!1,children:label}),Object.keys(ariaAttrs).length>0?react.Children.map(children,(child=>(0,react.isValidElement)(child)?(0,react.cloneElement)(child,{...ariaAttrs}):child)):children,isErrored&&(0,jsx_runtime.jsx)(ErrorMessage,{id:fieldId,show:isErrored,children:error}),!!helper&&(0,jsx_runtime.jsx)(Helper,{id:fieldId,children:helper})]})}},"./packages/sui-react/packages/components/input/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Input});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/sui-react/packages/utils/src/index.ts"),hooks_src=__webpack_require__("./packages/sui-react/packages/hooks/src/index.ts"),button_src=__webpack_require__("./packages/sui-react/packages/components/button/src/index.ts");const Icon=({name="",size="lg",position="start"})=>{if((0,src.xb)(name??""))throw new Error('Required parameter is empty. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Input\n\nThe "name" parameter in the icon element is required and must not be empty.\n\n');const classNames=(0,src.uY)("suicons",{[name]:!0,[size||"md"]:["sm","md","lg"].includes(size||"md"),icon:!0},"sui-input__icon");return(0,jsx_runtime.jsx)("span",{className:classNames,"aria-hidden":"true","data-testid":`input-icon-${position}`})},Input=(0,react.forwardRef)((({type,defaultValue,placeholder,hint,id,className,inputClass,isMultiLine=!1,isSmall=!1,isReadOnly=!1,isError=!1,isDisabled=!1,onMouseEnter=()=>{},onMouseLeave=()=>{},onChange,icon,iconPosition,allowClear=!1,disableInteractions=!1,...props},ref)=>{const[value,setValue]=(0,react.useState)(defaultValue),[isHovered,isFocused,interactionMethods]=(0,hooks_src.X2)({});if(!(!(0,src.o8)(id)&&!(0,src.xb)(id)))throw new Error('Empty parameter is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Input\n\nThe parameter "id" in the "Input" component is required.\n\n');(0,react.useEffect)((()=>{setValue(defaultValue)}),[defaultValue]);const handleChange=(0,react.useCallback)((e=>{isReadOnly||setValue(e?.target?.value??""),onChange&&onChange(e)}),[isReadOnly,onChange]),onClear=(0,react.useCallback)((()=>{setValue(""),onChange&&onChange("")}),[onChange]),hasValue=!(0,src.o8)(value)&&!(0,src.xb)(value??""),hasPlaceholder=!(0,src.o8)(placeholder)&&!(0,src.xb)(placeholder),hasClassInput=!(0,src.o8)(inputClass)&&!(0,src.xb)(inputClass);let inputType="text";["email","number","password","search","tel","url"].includes(type)&&(inputType=type);const classNames=(0,src.uY)("sui-input",{sm:isSmall,readonly:isReadOnly,hover:isHovered&&!isReadOnly,focus:isFocused&&!isReadOnly,filled:hasValue,"has-icon":!(0,src.xb)(icon),"icon-start":!(0,src.xb)(iconPosition)&&"start"===iconPosition,"icon-end":!(0,src.xb)(iconPosition)&&"end"===iconPosition,error:isError,disabled:isDisabled,["multiline"+(isSmall?"-sm":"")]:isMultiLine},className??""),inputClassNames=(0,src.uY)("sui-input__input",{"allow-clear":allowClear&&!(0,src.xb)(value)&&!isMultiLine},hasClassInput?inputClass:"");let TagName="input";isMultiLine&&(TagName="textarea");const attrs={id,ref,type:(0,src.CI)(!isMultiLine,inputType),placeholder:(0,src.CI)(hasPlaceholder,placeholder),readOnly:(0,src.CI)(isReadOnly,!0),disabled:(0,src.CI)(isDisabled,!0),value:value??"",className:inputClassNames,onChange:handleChange,...disableInteractions?{}:interactionMethods,...props},hasHintText=!(0,src.xb)(hint??"");return(0,jsx_runtime.jsxs)("div",{className:classNames,"data-testid":"input",children:[icon&&!isMultiLine&&"start"===iconPosition&&(0,jsx_runtime.jsx)(Icon,{name:icon??"",size:isSmall?"md":"lg",position:iconPosition}),(0,jsx_runtime.jsxs)("div",{className:(0,src.uY)("sui-input__input-field",{"has-hint":hasHintText}),children:[(0,jsx_runtime.jsx)(TagName,{...attrs}),hasHintText&&(0,jsx_runtime.jsxs)(react.Fragment,{children:[!(0,src.xb)(value)&&(0,jsx_runtime.jsx)("div",{className:"sui-input__input-field-text",children:value}),hasHintText&&(0,jsx_runtime.jsx)("div",{className:"sui-input__input-field-hint",children:hint})]})]}),icon&&!isMultiLine&&"end"===iconPosition&&(0,jsx_runtime.jsx)(Icon,{name:icon??"",size:isSmall?"md":"lg",position:iconPosition}),allowClear&&!(0,src.xb)(value)&&!isMultiLine&&(0,jsx_runtime.jsx)(button_src.zx,{className:"sui-input__input-clear",icon:"close-alt",color:"black",appearance:"tertiary",iconOnly:!0,iconSize:isSmall?"md":"lg",onClick:onClear,isSmall,onKeyDown:e=>(0,src.Jw)(e,onClear),children:"Clear"})]})}));Input.displayName="Input"}}]);
//# sourceMappingURL=sui-react-packages-components-date-picker-stories-DatePicker-stories.7b731db0.iframe.bundle.js.map