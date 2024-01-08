"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[1505],{"./packages/components/src/slot-fill/bubbles-virtually/slot-fill-context.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var valtio_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/valtio/esm/utils.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_wordpress_warning__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/warning/build-module/index.js");const initialContextValue={slots:(0,valtio_utils__WEBPACK_IMPORTED_MODULE_0__.Yr)(),fills:(0,valtio_utils__WEBPACK_IMPORTED_MODULE_0__.Yr)(),registerSlot:()=>{"undefined"!=typeof SCRIPT_DEBUG&&!0===SCRIPT_DEBUG&&(0,_wordpress_warning__WEBPACK_IMPORTED_MODULE_1__.Z)("Components must be wrapped within `SlotFillProvider`. See https://developer.wordpress.org/block-editor/components/slot-fill/")},updateSlot:()=>{},unregisterSlot:()=>{},registerFill:()=>{},unregisterFill:()=>{},isDefault:!0},SlotFillContext=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createContext)(initialContextValue);__webpack_exports__.Z=SlotFillContext},"./packages/components/src/slot-fill/bubbles-virtually/use-slot.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return useSlot}});var valtio__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/valtio/esm/index.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_slot_fill_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/slot-fill/bubbles-virtually/slot-fill-context.ts");function useSlot(name){const registry=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(_slot_fill_context__WEBPACK_IMPORTED_MODULE_1__.Z);return{...(0,valtio__WEBPACK_IMPORTED_MODULE_2__.RK)(registry.slots,{sync:!0}).get(name),...(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({updateSlot:fillProps=>registry.updateSlot(name,fillProps),unregisterSlot:ref=>registry.unregisterSlot(name,ref),registerFill:ref=>registry.registerFill(name,ref),unregisterFill:ref=>registry.unregisterFill(name,ref)})),[name,registry])}}},"./packages/components/src/slot-fill/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{de:function(){return slot_fill_Fill},zt:function(){return Provider},g7:function(){return slot_fill_Slot},up:function(){return createSlotFill}});var react=__webpack_require__("./node_modules/react/index.js");const initialValue={registerSlot:()=>{},unregisterSlot:()=>{},registerFill:()=>{},unregisterFill:()=>{},getSlot:()=>{},getFills:()=>[],subscribe:()=>()=>{}};var context=(0,react.createContext)(initialValue);var use_slot=name=>{const{getSlot:getSlot,subscribe:subscribe}=(0,react.useContext)(context);return(0,react.useSyncExternalStore)(subscribe,(()=>getSlot(name)),(()=>getSlot(name)))};function Fill({name:name,children:children}){const{registerFill:registerFill,unregisterFill:unregisterFill}=(0,react.useContext)(context),slot=use_slot(name),ref=(0,react.useRef)({name:name,children:children});return(0,react.useLayoutEffect)((()=>{const refValue=ref.current;return registerFill(name,refValue),()=>unregisterFill(name,refValue)}),[]),(0,react.useLayoutEffect)((()=>{ref.current.children=children,slot&&slot.forceUpdate()}),[children]),(0,react.useLayoutEffect)((()=>{name!==ref.current.name&&(unregisterFill(ref.current.name,ref.current),ref.current.name=name,registerFill(name,ref.current))}),[name]),null}var utils=__webpack_require__("./packages/element/build-module/utils.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function isFunction(maybeFunc){return"function"==typeof maybeFunc}class SlotComponent extends react.Component{constructor(props){super(props),this.isUnmounted=!1}componentDidMount(){const{registerSlot:registerSlot}=this.props;this.isUnmounted=!1,registerSlot(this.props.name,this)}componentWillUnmount(){const{unregisterSlot:unregisterSlot}=this.props;this.isUnmounted=!0,unregisterSlot(this.props.name,this)}componentDidUpdate(prevProps){const{name:name,unregisterSlot:unregisterSlot,registerSlot:registerSlot}=this.props;prevProps.name!==name&&(unregisterSlot(prevProps.name,this),registerSlot(name,this))}forceUpdate(){this.isUnmounted||super.forceUpdate()}render(){var _getFills;const{children:children,name:name,fillProps:fillProps={},getFills:getFills}=this.props,fills=(null!==(_getFills=getFills(name,this))&&void 0!==_getFills?_getFills:[]).map((fill=>{const fillChildren=isFunction(fill.children)?fill.children(fillProps):fill.children;return react.Children.map(fillChildren,((child,childIndex)=>{if(!child||"string"==typeof child)return child;let childKey=childIndex;return"object"==typeof child&&"key"in child&&child?.key&&(childKey=child.key),(0,react.cloneElement)(child,{key:childKey})}))})).filter((element=>!(0,utils.V)(element)));return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:isFunction(children)?children(fills):fills})}}SlotComponent.displayName="SlotComponent";const Slot=props=>(0,jsx_runtime.jsx)(context.Consumer,{children:({registerSlot:registerSlot,unregisterSlot:unregisterSlot,getFills:getFills})=>(0,jsx_runtime.jsx)(SlotComponent,{...props,registerSlot:registerSlot,unregisterSlot:unregisterSlot,getFills:getFills})});Slot.displayName="Slot";var slot_fill_slot=Slot;try{slot.displayName="slot",slot.__docgenInfo={description:"",displayName:"slot",props:{style:{defaultValue:null,description:"Additional styles for the `Slot` component.\nSupported only when `bubblesVirtually` is `true`.",name:"style",required:!1,type:{name:"CSSProperties"}},children:{defaultValue:null,description:"A function that returns nodes to be rendered.\nSupported only when `bubblesVirtually` is `false`.",name:"children",required:!1,type:{name:"(fills: ReactNode) => ReactNode"}},className:{defaultValue:null,description:"Additional className for the `Slot` component.\nSupported only when `bubblesVirtually` is `true`.",name:"className",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"Slot name.",name:"name",required:!0,type:{name:"SlotKey"}},fillProps:{defaultValue:{value:"{}"},description:"props to pass from `Slot` to `Fill`.",name:"fillProps",required:!1,type:{name:"FillProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/slot-fill/slot.tsx#slot"]={docgenInfo:slot.__docgenInfo,name:"slot",path:"packages/components/src/slot-fill/slot.tsx#slot"})}catch(__react_docgen_typescript_loader_error){}var react_dom=__webpack_require__("./node_modules/react-dom/index.js"),bubbles_virtually_use_slot=__webpack_require__("./packages/components/src/slot-fill/bubbles-virtually/use-slot.ts"),style_provider=__webpack_require__("./packages/components/src/style-provider/index.tsx");function fill_Fill(props){var _slot$fillProps;const{name:name,children:children}=props,{registerFill:registerFill,unregisterFill:unregisterFill,...slot}=(0,bubbles_virtually_use_slot.Z)(name),rerender=function useForceUpdate(){const[,setState]=(0,react.useState)({}),mounted=(0,react.useRef)(!0);return(0,react.useEffect)((()=>(mounted.current=!0,()=>{mounted.current=!1})),[]),()=>{mounted.current&&setState({})}}(),ref=(0,react.useRef)({rerender:rerender});if((0,react.useEffect)((()=>(registerFill(ref),()=>{unregisterFill(ref)})),[registerFill,unregisterFill]),!slot.ref||!slot.ref.current)return null;const wrappedChildren=(0,jsx_runtime.jsx)(style_provider.Z,{document:slot.ref.current.ownerDocument,children:"function"==typeof children?children(null!==(_slot$fillProps=slot.fillProps)&&void 0!==_slot$fillProps?_slot$fillProps:{}):children});return(0,react_dom.createPortal)(wrappedChildren,slot.ref.current)}try{fill.displayName="fill",fill.__docgenInfo={description:"",displayName:"fill",props:{name:{defaultValue:null,description:"The name of the slot to fill into.",name:"name",required:!0,type:{name:"SlotKey"}},children:{defaultValue:null,description:"Children elements or render function.",name:"children",required:!1,type:{name:"ReactNode | ((fillProps: FillProps) => ReactNode)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/slot-fill/bubbles-virtually/fill.tsx#fill"]={docgenInfo:fill.__docgenInfo,name:"fill",path:"packages/components/src/slot-fill/bubbles-virtually/fill.tsx#fill"})}catch(__react_docgen_typescript_loader_error){}var use_merge_refs=__webpack_require__("./packages/compose/build-module/hooks/use-merge-refs/index.js"),component=__webpack_require__("./packages/components/src/view/component.tsx"),slot_fill_context=__webpack_require__("./packages/components/src/slot-fill/bubbles-virtually/slot-fill-context.ts");function slot_Slot(props,forwardedRef){const{name:name,fillProps:fillProps={},as:as,children:children,...restProps}=props,{registerSlot:registerSlot,unregisterSlot:unregisterSlot,...registry}=(0,react.useContext)(slot_fill_context.Z),ref=(0,react.useRef)(null);return(0,react.useLayoutEffect)((()=>(registerSlot(name,ref,fillProps),()=>{unregisterSlot(name,ref)})),[registerSlot,unregisterSlot,name]),(0,react.useLayoutEffect)((()=>{registry.updateSlot(name,fillProps)})),(0,jsx_runtime.jsx)(component.Z,{as:as,ref:(0,use_merge_refs.Z)([forwardedRef,ref]),...restProps})}slot_Slot.displayName="Slot";var bubbles_virtually_slot=(0,react.forwardRef)(slot_Slot);try{slot_Slot.displayName="Slot",slot_Slot.__docgenInfo={description:"",displayName:"Slot",props:{style:{defaultValue:null,description:"Additional styles for the `Slot` component.\nSupported only when `bubblesVirtually` is `true`.",name:"style",required:!1,type:{name:"CSSProperties"}},children:{defaultValue:null,description:"A function that returns nodes to be rendered.\nSupported only when `bubblesVirtually` is `false`.",name:"children",required:!1,type:{name:"(fills: ReactNode) => ReactNode"}},className:{defaultValue:null,description:"Additional className for the `Slot` component.\nSupported only when `bubblesVirtually` is `true`.",name:"className",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"Slot name.",name:"name",required:!0,type:{name:"SlotKey"}},fillProps:{defaultValue:{value:"{}"},description:"props to pass from `Slot` to `Fill`.",name:"fillProps",required:!1,type:{name:"FillProps"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/slot-fill/bubbles-virtually/slot.tsx#Slot"]={docgenInfo:slot_Slot.__docgenInfo,name:"Slot",path:"packages/components/src/slot-fill/bubbles-virtually/slot.tsx#Slot"})}catch(__react_docgen_typescript_loader_error){}var vanilla=__webpack_require__("./node_modules/valtio/esm/vanilla.js"),esm_utils=__webpack_require__("./node_modules/valtio/esm/utils.js"),build_module=__webpack_require__("./packages/is-shallow-equal/build-module/index.js");function createSlotRegistry(){const slots=(0,esm_utils.Yr)(),fills=(0,esm_utils.Yr)();return{slots:slots,fills:fills,registerSlot:(name,ref,fillProps)=>{const slot=slots.get(name);slots.set(name,(0,vanilla.iH)({...slot,ref:ref||slot?.ref,fillProps:fillProps||slot?.fillProps||{}}))},updateSlot:(name,fillProps)=>{const slot=slots.get(name);if(!slot)return;if((0,build_module.ZP)(slot.fillProps,fillProps))return;slot.fillProps=fillProps;const slotFills=fills.get(name);slotFills&&slotFills.forEach((fill=>fill.current.rerender()))},unregisterSlot:(name,ref)=>{slots.get(name)?.ref===ref&&slots.delete(name)},registerFill:(name,ref)=>{fills.set(name,(0,vanilla.iH)([...fills.get(name)||[],ref]))},unregisterFill:(name,ref)=>{const fillsForName=fills.get(name);fillsForName&&fills.set(name,(0,vanilla.iH)(fillsForName.filter((fillRef=>fillRef!==ref))))}}}function SlotFillProvider({children:children}){const registry=(0,react.useMemo)(createSlotRegistry,[]);return(0,jsx_runtime.jsx)(slot_fill_context.Z.Provider,{value:registry,children:children})}SlotFillProvider.displayName="SlotFillProvider";try{slotfillprovider.displayName="slotfillprovider",slotfillprovider.__docgenInfo={description:"",displayName:"slotfillprovider",props:{children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},passthrough:{defaultValue:null,description:"Whether to pass slots to the parent provider if existent.",name:"passthrough",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/slot-fill/bubbles-virtually/slot-fill-provider.tsx#slotfillprovider"]={docgenInfo:slotfillprovider.__docgenInfo,name:"slotfillprovider",path:"packages/components/src/slot-fill/bubbles-virtually/slot-fill-provider.tsx#slotfillprovider"})}catch(__react_docgen_typescript_loader_error){}function provider_createSlotRegistry(){const slots={},fills={};let listeners=[];function getSlot(name){return slots[name]}function forceUpdateSlot(name){const slot=getSlot(name);slot&&slot.forceUpdate()}function triggerListeners(){listeners.forEach((listener=>listener()))}return{registerSlot:function registerSlot(name,slot){const previousSlot=slots[name];slots[name]=slot,triggerListeners(),forceUpdateSlot(name),previousSlot&&previousSlot.forceUpdate()},unregisterSlot:function unregisterSlot(name,instance){slots[name]===instance&&(delete slots[name],triggerListeners())},registerFill:function registerFill(name,instance){fills[name]=[...fills[name]||[],instance],forceUpdateSlot(name)},unregisterFill:function unregisterFill(name,instance){var _fills$name$filter;fills[name]=null!==(_fills$name$filter=fills[name]?.filter((fill=>fill!==instance)))&&void 0!==_fills$name$filter?_fills$name$filter:[],forceUpdateSlot(name)},getSlot:getSlot,getFills:function getFills(name,slotInstance){return slots[name]!==slotInstance?[]:fills[name]},subscribe:function subscribe(listener){return listeners.push(listener),()=>{listeners=listeners.filter((l=>l!==listener))}}}}function provider_SlotFillProvider({children:children}){const contextValue=(0,react.useMemo)(provider_createSlotRegistry,[]);return(0,jsx_runtime.jsx)(context.Provider,{value:contextValue,children:children})}provider_SlotFillProvider.displayName="SlotFillProvider";var provider=provider_SlotFillProvider;try{provider_SlotFillProvider.displayName="SlotFillProvider",provider_SlotFillProvider.__docgenInfo={description:"",displayName:"SlotFillProvider",props:{children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},passthrough:{defaultValue:null,description:"Whether to pass slots to the parent provider if existent.",name:"passthrough",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/slot-fill/provider.tsx#SlotFillProvider"]={docgenInfo:provider_SlotFillProvider.__docgenInfo,name:"SlotFillProvider",path:"packages/components/src/slot-fill/provider.tsx#SlotFillProvider"})}catch(__react_docgen_typescript_loader_error){}function slot_fill_Fill(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Fill,{...props}),(0,jsx_runtime.jsx)(fill_Fill,{...props})]})}function UnforwardedSlot(props,ref){const{bubblesVirtually:bubblesVirtually,...restProps}=props;return bubblesVirtually?(0,jsx_runtime.jsx)(bubbles_virtually_slot,{...restProps,ref:ref}):(0,jsx_runtime.jsx)(slot_fill_slot,{...restProps})}UnforwardedSlot.displayName="UnforwardedSlot";const slot_fill_Slot=(0,react.forwardRef)(UnforwardedSlot);function Provider({children:children,passthrough:passthrough=!1}){return!(0,react.useContext)(slot_fill_context.Z).isDefault&&passthrough?(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:children}):(0,jsx_runtime.jsx)(provider,{children:(0,jsx_runtime.jsx)(SlotFillProvider,{children:children})})}function createSlotFill(key){const baseName="symbol"==typeof key?key.description:key,FillComponent=props=>(0,jsx_runtime.jsx)(slot_fill_Fill,{name:key,...props});FillComponent.displayName=`${baseName}Fill`;const SlotComponent=props=>(0,jsx_runtime.jsx)(slot_fill_Slot,{name:key,...props});return SlotComponent.displayName=`${baseName}Slot`,SlotComponent.__unstableName=key,{Fill:FillComponent,Slot:SlotComponent}}Provider.displayName="Provider";const createPrivateSlotFill=name=>{const privateKey=Symbol(name);return{privateKey:privateKey,...createSlotFill(privateKey)}};try{slot_fill_Fill.displayName="Fill",slot_fill_Fill.__docgenInfo={description:"",displayName:"Fill",props:{name:{defaultValue:null,description:"The name of the slot to fill into.",name:"name",required:!0,type:{name:"SlotKey"}},children:{defaultValue:null,description:"Children elements or render function.",name:"children",required:!1,type:{name:"ReactNode | ((fillProps: FillProps) => ReactNode)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/slot-fill/index.tsx#Fill"]={docgenInfo:slot_fill_Fill.__docgenInfo,name:"Fill",path:"packages/components/src/slot-fill/index.tsx#Fill"})}catch(__react_docgen_typescript_loader_error){}try{UnforwardedSlot.displayName="UnforwardedSlot",UnforwardedSlot.__docgenInfo={description:"",displayName:"UnforwardedSlot",props:{name:{defaultValue:null,description:"Slot name.",name:"name",required:!0,type:{name:"SlotKey"}},fillProps:{defaultValue:{value:"{}"},description:"props to pass from `Slot` to `Fill`.",name:"fillProps",required:!1,type:{name:"FillProps"}},bubblesVirtually:{defaultValue:null,description:"By default, events will bubble to their parents on the DOM hierarchy (native event bubbling).\nIf set to true, events will bubble to their virtual parent in the React elements hierarchy instead,\nalso accept an optional `className`, `id`, etc.  to add to the slot container.",name:"bubblesVirtually",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A function that returns nodes to be rendered.\nSupported only when `bubblesVirtually` is `false`.",name:"children",required:!1,type:{name:"(fills: ReactNode) => ReactNode"}},className:{defaultValue:null,description:"Additional className for the `Slot` component.\nSupported only when `bubblesVirtually` is `true`.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Additional styles for the `Slot` component.\nSupported only when `bubblesVirtually` is `true`.",name:"style",required:!1,type:{name:"CSSProperties"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/slot-fill/index.tsx#UnforwardedSlot"]={docgenInfo:UnforwardedSlot.__docgenInfo,name:"UnforwardedSlot",path:"packages/components/src/slot-fill/index.tsx#UnforwardedSlot"})}catch(__react_docgen_typescript_loader_error){}try{Provider.displayName="Provider",Provider.__docgenInfo={description:"",displayName:"Provider",props:{children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},passthrough:{defaultValue:{value:"false"},description:"Whether to pass slots to the parent provider if existent.",name:"passthrough",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/slot-fill/index.tsx#Provider"]={docgenInfo:Provider.__docgenInfo,name:"Provider",path:"packages/components/src/slot-fill/index.tsx#Provider"})}catch(__react_docgen_typescript_loader_error){}try{createSlotFill.displayName="createSlotFill",createSlotFill.__docgenInfo={description:"",displayName:"createSlotFill",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/slot-fill/index.tsx#createSlotFill"]={docgenInfo:createSlotFill.__docgenInfo,name:"createSlotFill",path:"packages/components/src/slot-fill/index.tsx#createSlotFill"})}catch(__react_docgen_typescript_loader_error){}try{slotfill.displayName="slotfill",slotfill.__docgenInfo={description:"",displayName:"slotfill",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/slot-fill/index.tsx#slotfill"]={docgenInfo:slotfill.__docgenInfo,name:"slotfill",path:"packages/components/src/slot-fill/index.tsx#slotfill"})}catch(__react_docgen_typescript_loader_error){}try{slot_fill_Slot.displayName="Slot",slot_fill_Slot.__docgenInfo={description:"",displayName:"Slot",props:{name:{defaultValue:null,description:"Slot name.",name:"name",required:!0,type:{name:"SlotKey"}},fillProps:{defaultValue:{value:"{}"},description:"props to pass from `Slot` to `Fill`.",name:"fillProps",required:!1,type:{name:"FillProps"}},bubblesVirtually:{defaultValue:null,description:"By default, events will bubble to their parents on the DOM hierarchy (native event bubbling).\nIf set to true, events will bubble to their virtual parent in the React elements hierarchy instead,\nalso accept an optional `className`, `id`, etc.  to add to the slot container.",name:"bubblesVirtually",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A function that returns nodes to be rendered.\nSupported only when `bubblesVirtually` is `false`.",name:"children",required:!1,type:{name:"(fills: ReactNode) => ReactNode"}},className:{defaultValue:null,description:"Additional className for the `Slot` component.\nSupported only when `bubblesVirtually` is `true`.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Additional styles for the `Slot` component.\nSupported only when `bubblesVirtually` is `true`.",name:"style",required:!1,type:{name:"CSSProperties"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/slot-fill/index.tsx#Slot"]={docgenInfo:slot_fill_Slot.__docgenInfo,name:"Slot",path:"packages/components/src/slot-fill/index.tsx#Slot"})}catch(__react_docgen_typescript_loader_error){}try{createPrivateSlotFill.displayName="createPrivateSlotFill",createPrivateSlotFill.__docgenInfo={description:"",displayName:"createPrivateSlotFill",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/slot-fill/index.tsx#createPrivateSlotFill"]={docgenInfo:createPrivateSlotFill.__docgenInfo,name:"createPrivateSlotFill",path:"packages/components/src/slot-fill/index.tsx#createPrivateSlotFill"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/style-provider/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{V:function(){return StyleProvider}});__webpack_require__("./node_modules/react/index.js");var _emotion_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-699e6908.browser.esm.js"),_emotion_cache__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),uuid__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/node_modules/uuid/dist/esm-browser/v4.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const uuidCache=new Set,containerCacheMap=new WeakMap,memoizedCreateCacheWithContainer=container=>{if(containerCacheMap.has(container))return containerCacheMap.get(container);let key=uuid__WEBPACK_IMPORTED_MODULE_3__.Z().replace(/[0-9]/g,"");for(;uuidCache.has(key);)key=uuid__WEBPACK_IMPORTED_MODULE_3__.Z().replace(/[0-9]/g,"");uuidCache.add(key);const cache=(0,_emotion_cache__WEBPACK_IMPORTED_MODULE_1__.Z)({container:container,key:key});return containerCacheMap.set(container,cache),cache};function StyleProvider(props){const{children:children,document:document}=props;if(!document)return null;const cache=memoizedCreateCacheWithContainer(document.head);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_4__.C,{value:cache,children:children})}StyleProvider.displayName="StyleProvider",__webpack_exports__.Z=StyleProvider;try{StyleProvider.displayName="StyleProvider",StyleProvider.__docgenInfo={description:"",displayName:"StyleProvider",props:{children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},document:{defaultValue:null,description:"Current document.",name:"document",required:!0,type:{name:"Document"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/style-provider/index.tsx#StyleProvider"]={docgenInfo:StyleProvider.__docgenInfo,name:"StyleProvider",path:"packages/components/src/style-provider/index.tsx#StyleProvider"})}catch(__react_docgen_typescript_loader_error){}},"./packages/element/build-module/utils.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{V:function(){return isEmptyElement}});const isEmptyElement=element=>"number"!=typeof element&&("string"==typeof element?.valueOf()||Array.isArray(element)?!element.length:!element)},"./packages/is-shallow-equal/build-module/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{ZP:function(){return isShallowEqual}});var objects=__webpack_require__("./packages/is-shallow-equal/build-module/objects.js");function isShallowEqual(a,b){if(a&&b){if(a.constructor===Object&&b.constructor===Object)return(0,objects.Z)(a,b);if(Array.isArray(a)&&Array.isArray(b))return function isShallowEqualArrays(a,b){if(a===b)return!0;if(a.length!==b.length)return!1;for(let i=0,len=a.length;i<len;i++)if(a[i]!==b[i])return!1;return!0}(a,b)}return a===b}},"./packages/is-shallow-equal/build-module/objects.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function isShallowEqualObjects(a,b){if(a===b)return!0;const aKeys=Object.keys(a),bKeys=Object.keys(b);if(aKeys.length!==bKeys.length)return!1;let i=0;for(;i<aKeys.length;){const key=aKeys[i],aValue=a[key];if(void 0===aValue&&!b.hasOwnProperty(key)||aValue!==b[key])return!1;i++}return!0}__webpack_require__.d(__webpack_exports__,{Z:function(){return isShallowEqualObjects}})}}]);