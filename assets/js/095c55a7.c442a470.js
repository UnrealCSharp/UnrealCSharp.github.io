"use strict";(self.webpackChunkunreal_c_sharp=self.webpackChunkunreal_c_sharp||[]).push([[504],{2100:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=t(7624),i=t(2172),a=t(1268),s=t(5388);const l={title:"\u9759\u6001\u5bfc\u51fa",description:"\u5bfc\u51fa\u672a\u88ab\u6807\u8bb0\u53cd\u5c04\u7684\u7c7b\uff0c\u53d8\u91cf\u548c\u51fd\u6570",hide_title:!0,slug:"binding",sidebar_position:5,custom_edit_url:null},u=void 0,c={id:"document/getting-started/binding",title:"\u9759\u6001\u5bfc\u51fa",description:"\u5bfc\u51fa\u672a\u88ab\u6807\u8bb0\u53cd\u5c04\u7684\u7c7b\uff0c\u53d8\u91cf\u548c\u51fd\u6570",source:"@site/docs/document/getting-started/binding.md",sourceDirName:"document/getting-started",slug:"/document/getting-started/binding",permalink:"/docs/document/getting-started/binding",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\u9759\u6001\u5bfc\u51fa",description:"\u5bfc\u51fa\u672a\u88ab\u6807\u8bb0\u53cd\u5c04\u7684\u7c7b\uff0c\u53d8\u91cf\u548c\u51fd\u6570",hide_title:!0,slug:"binding",sidebar_position:5,custom_edit_url:null},sidebar:"documentSidebar",previous:{title:"\u8986\u76d6\u51fd\u6570",permalink:"/docs/document/getting-started/override"},next:{title:"\u52a8\u6001\u7c7b",permalink:"/docs/document/getting-started/dynamic"}},o={},d=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u679a\u4e3e",id:"\u679a\u4e3e",level:2},{value:"\u7c7b/\u7ed3\u6784\u4f53",id:"\u7c7b\u7ed3\u6784\u4f53",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.M)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u4ecb\u7ecd",children:"\u4ecb\u7ecd"}),"\n",(0,r.jsx)(n.p,{children:"\u57fa\u4e8eUE\u7684\u53cd\u5c04\u673a\u5236\u80fd\u591f\u8bbf\u95ee\u5230\u88ab\u6807\u8bb0\u53cd\u5c04\u7684\u7c7b\uff0c\u53d8\u91cf\u548c\u51fd\u6570\uff0c\u4f46\u662f\u8fd8\u662f\u5b58\u5728\u90e8\u5206\u7c7b\u7531\u4e8e\u4e0d\u662fUE\u652f\u6301\u7684\u53cd\u5c04\u7c7b\u578b\uff0c\u6216\u8005\u7c7b\uff0c\u53d8\u91cf\u548c\u51fd\u6570\u5e76\u6ca1\u6709\u88ab\u6807\u8bb0\u53cd\u5c04\u800c\u5bfc\u81f4\u8bbf\u95ee\u4e0d\u5230\u3002\u9488\u5bf9\u8fd9\u79cd\u60c5\u51b5\uff0c\u63d0\u4f9b\u4e86\u9759\u6001\u5bfc\u51fa\uff0c\u62d3\u5c55\u4e86\u652f\u6301\u7684\u7c7b\uff0c\u53d8\u91cf\u548c\u51fd\u6570\uff0c\u540c\u65f6\u4e5f\u53ef\u4ee5\u7528\u4e8e\u4f18\u5316\u53d8\u91cf\u8bbf\u95ee\u548c\u51fd\u6570\u8c03\u7528\u7684\u6548\u7387\u3002"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"\u679a\u4e3e",children:"\u679a\u4e3e"}),"\n",(0,r.jsx)(n.p,{children:"\u9759\u6001\u5bfc\u51fa\u679a\u4e3e\u65f6\uff0c\u4f1a\u901a\u8fc7std::underlying_type_t\u62ff\u5230UnderlyingType\u5e76\u751f\u6210\uff0c\u4fdd\u8bc1C++\u548cC#\u4e24\u4fa7\u5185\u5b58\u5927\u5c0f\u4e00\u81f4\u3002"}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"\u793a\u4f8b\uff1a\u679a\u4e3e"}),(0,r.jsxs)(a.c,{children:[(0,r.jsx)(s.c,{value:"raw",label:"raw",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"enum ERawTestEnum\r\n{\r\n\tRawTestEnumZero,\r\n\tRawTestEnumOne,\r\n\tRawTestEnumTwo\r\n};\n"})})}),(0,r.jsx)(s.c,{value:"binding",label:"binding",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'BINDING_PROJECT_ENUM(ERawTestEnum)\r\n\r\nstruct FRegisterRawTestEnum\r\n{\r\n\tFRegisterRawTestEnum()\r\n\t{\r\n\t\tTBindingEnumBuilder<ERawTestEnum>()\r\n\t\t\t.Enumerator("RawTestEnumZero", ERawTestEnum::RawTestEnumZero)\r\n\t\t\t.Enumerator("RawTestEnumOne", ERawTestEnum::RawTestEnumOne)\r\n\t\t\t.Enumerator("RawTestEnumTwo", ERawTestEnum::RawTestEnumTwo)\r\n\t\t\t.Register();\r\n\t}\r\n};\r\n\r\nstatic FRegisterRawTestEnum RegisterRawTestEnum;\n'})})})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"\u7c7b\u7ed3\u6784\u4f53",children:"\u7c7b/\u7ed3\u6784\u4f53"}),"\n",(0,r.jsx)(n.p,{children:"\u9759\u6001\u5bfc\u51fa\u65f6\uff0c\u4e0d\u533a\u5206\u7c7b\u6216\u8005\u7ed3\u6784\u4f53\uff0c\u4f46\u662f\u533a\u5206\u53cd\u5c04\u548c\u975e\u53cd\u5c04\u7c7b\u578b\uff0c\u9700\u8981\u901a\u8fc7\u4e0d\u540c\u7684\u6a21\u677f\u6765\u5bfc\u51fa\u3002\u9664\u4e86\u5e38\u89c4\u7684\u5bfc\u51fa\u53d8\u91cf\u548c\u51fd\u6570\uff0c\u8fd8\u652f\u6301\u4e00\u4e9b\u989d\u5916\u7684\u64cd\u4f5c\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6784\u9020\u51fd\u6570"}),"\n",(0,r.jsx)(n.li,{children:"\u51fd\u6570\u91cd\u8f7d"}),"\n",(0,r.jsx)(n.li,{children:"\u7ee7\u627f"}),"\n",(0,r.jsx)(n.li,{children:"\u9759\u6001\u53d8\u91cf"}),"\n",(0,r.jsxs)(n.li,{children:["\u4e00\u5143\u64cd\u4f5c\u7b26\uff0c",(0,r.jsx)(n.code,{children:"!\uff0c+\uff0c-\uff0c~\uff0c++\uff0c--"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u4e8c\u5143\u64cd\u4f5c\u7b26\uff0c",(0,r.jsx)(n.code,{children:"+\uff0c-\uff0c*\uff0c/\uff0c%\uff0c&\uff0c|\uff0c^\uff0c<<\uff0c>>\uff0c==\uff0c!=\uff0c<\uff0c<=\uff0c>\uff0c>="})]}),"\n",(0,r.jsxs)(n.li,{children:["\u4e0b\u6807\u8fd0\u7b97\u7b26\uff0c",(0,r.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"\u793a\u4f8b\uff1a\u7c7b/\u7ed3\u6784\u4f53"}),(0,r.jsxs)(a.c,{children:[(0,r.jsx)(s.c,{value:"raw",label:"raw",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"#pragma once\r\n\r\nclass FTestBindingFunction\r\n{\r\npublic:\r\n\tFTestBindingFunction();\r\n\r\npublic:\r\n\tvoid SetInt32ValueFunction(int32 InInt32Value);\r\n\r\n\tint32 GetInt32ValueFunction() const;\r\n\r\n\tvoid OutInt32ValueFunction(int32& OutInt32Value) const;\r\n\r\npublic:\r\n\tint32 Int32Value;\r\n};\n"})})}),(0,r.jsx)(s.c,{value:"binding",label:"binding",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'BINDING_PROJECT_CLASS(FTestBindingFunction)\r\n\r\nstruct FRegisterTestBindingFunction\r\n{\r\n\tFRegisterTestBindingFunction()\r\n\t{\r\n\t\tTBindingClassBuilder<FTestBindingFunction>(NAMESPACE_BINDING)\r\n\t\t\t.Property("Int32Value", BINDING_PROPERTY(&FTestBindingFunction::Int32Value))\r\n\t\t\t.Function("SetInt32ValueFunction", BINDING_FUNCTION(&FTestBindingFunction::SetInt32ValueFunction))\r\n\t\t\t.Function("GetInt32ValueFunction", BINDING_FUNCTION(&FTestBindingFunction::GetInt32ValueFunction))\r\n\t\t\t.Function("OutInt32ValueFunction", BINDING_FUNCTION(&FTestBindingFunction::OutInt32ValueFunction))\r\n\t\t\t.Register();\r\n\t}\r\n};\r\n\r\nstatic FRegisterTestBindingFunction RegisterTestBindingFunction;\n'})})})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Source/UnrealCSharp/Private/Domain/InternalCall"}),"\u4e0b\u6709\u4e0d\u5c11\u793a\u4f8b\uff0c\u5982",(0,r.jsx)(n.a,{href:"https://github.com/crazytuzi/UnrealCSharp/blob/main/Source/UnrealCSharp/Private/Domain/InternalCall/FRegisterVector.cpp",children:"FRegisterVector"}),"\u3002"]}),"\n",(0,r.jsx)(n.hr,{})]})}function m(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5388:(e,n,t)=>{t.d(n,{c:()=>s});t(1504);var r=t(5456);const i={tabItem:"tabItem_Ymn6"};var a=t(7624);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.c)(i.tabItem,s),hidden:t,children:n})}},1268:(e,n,t)=>{t.d(n,{c:()=>I});var r=t(1504),i=t(5456),a=t(3943),s=t(5592),l=t(5288),u=t(632),c=t(7128),o=t(1148);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,c.w)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const i=(0,s.Uz)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u._M)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(i.location.search);n.set(a,e),i.replace({...i.location,search:n.toString()})}),[a,i])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,a=h(e),[s,u]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,d]=p({queryString:t,groupId:i}),[g,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,a]=(0,o.IN)(t);return[i,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:i}),f=(()=>{const e=c??g;return m({value:e,tabValues:a})?e:null})();(0,l.c)((()=>{f&&u(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=t(3664);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(7624);function x(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.MV)(),o=e=>{const n=e.currentTarget,t=u.indexOf(n),i=l[t].value;i!==r&&(c(n),s(i))},d=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.c)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>u.push(e),onKeyDown:d,onClick:o,...a,className:(0,i.c)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:i}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function T(e){const n=g(e);return(0,v.jsxs)("div",{className:(0,i.c)("tabs-container",f.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(j,{...e,...n})]})}function I(e){const n=(0,b.c)();return(0,v.jsx)(T,{...e,children:d(e.children)},String(n))}},2172:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>s});var r=t(1504);const i={},a=r.createContext(i);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);