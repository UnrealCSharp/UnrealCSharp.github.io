"use strict";(self.webpackChunkunreal_c_sharp=self.webpackChunkunreal_c_sharp||[]).push([[336],{1020:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var r=n(7624),a=n(2172),l=n(1268),i=n(5388);const s={title:"\u8986\u76d6\u51fd\u6570",description:"\u901a\u8fc7\u8986\u76d6\u51fd\u6570\uff0c\u91cd\u5199C++\u548c\u84dd\u56fe\u51fd\u6570\u903b\u8f91",hide_title:!0,slug:"override",sidebar_position:4,custom_edit_url:null},o=void 0,u={id:"document/getting-started/override",title:"\u8986\u76d6\u51fd\u6570",description:"\u901a\u8fc7\u8986\u76d6\u51fd\u6570\uff0c\u91cd\u5199C++\u548c\u84dd\u56fe\u51fd\u6570\u903b\u8f91",source:"@site/docs/document/getting-started/override.md",sourceDirName:"document/getting-started",slug:"/document/getting-started/override",permalink:"/docs/document/getting-started/override",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u8986\u76d6\u51fd\u6570",description:"\u901a\u8fc7\u8986\u76d6\u51fd\u6570\uff0c\u91cd\u5199C++\u548c\u84dd\u56fe\u51fd\u6570\u903b\u8f91",hide_title:!0,slug:"override",sidebar_position:4,custom_edit_url:null},sidebar:"documentSidebar",previous:{title:"\u53cd\u5c04",permalink:"/docs/document/getting-started/reflection"},next:{title:"\u9759\u6001\u5bfc\u51fa",permalink:"/docs/document/getting-started/binding"}},c={},d=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u6d41\u7a0b",id:"\u6d41\u7a0b",level:2},{value:"\u4ee3\u7801\u626b\u63cf",id:"\u4ee3\u7801\u626b\u63cf",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.M)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"\u4ecb\u7ecd",children:"\u4ecb\u7ecd"}),"\n",(0,r.jsx)(t.p,{children:"\u5bf9\u4e8e\u6807\u8bb0\u6709BlueprintImplementableEvent\u6216\u8005BlueprintNativeEvent\u7684C++\u548c\u84dd\u56fe\u51fd\u6570\uff0c\u80fd\u591f\u88abC#\u91cd\u5199\u51fd\u6570\u903b\u8f91\u3002"}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"\u6d41\u7a0b",children:"\u6d41\u7a0b"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\u901a\u8fc7",(0,r.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/partial-classes-and-methods",children:"Partial"}),"\uff0c\u65b0\u5efa\u4e00\u4e2a\u51fd\u6570\u6240\u5c5e\u7c7b\u7684Partial\u7c7b\uff0c\u5e76\u4e14\u6807\u8bb0",(0,r.jsx)(t.code,{children:"Override"})]}),"\n",(0,r.jsxs)(t.li,{children:["\u58f0\u660e\u4e00\u4e2a\u62e5\u6709\u76f8\u540c\u51fd\u6570\u7b7e\u540d\u7684\u51fd\u6570\uff0c\u5e76\u4e14\u540c\u6837\u9700\u8981\u6807\u8bb0",(0,r.jsx)(t.code,{children:"Override"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\u666e\u901a\u51fd\u6570\uff1aC++\u6216\u84dd\u56fe\u51fd\u6570\u540d",(0,r.jsx)(t.code,{children:"Test"}),"\uff0cC#\u51fd\u6570\u540d",(0,r.jsx)(t.code,{children:"Test"})]}),"\n",(0,r.jsxs)(t.li,{children:["RPC\u51fd\u6570\uff1aC++\u6216\u84dd\u56fe\u51fd\u6570\u540d",(0,r.jsx)(t.code,{children:"Server_Test"}),"\uff0cC#\u51fd\u6570\u540d",(0,r.jsx)(t.code,{children:"Server_Test_Implementation"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"\u793a\u4f8b\uff1a\u8986\u76d6\u51fd\u6570"}),(0,r.jsxs)(l.c,{children:[(0,r.jsx)(i.c,{value:"C++",label:"C++",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:'#pragma once\r\n\r\n#include "CoreMinimal.h"\r\n#include "GameFramework/Actor.h"\r\n#include "TestCSharpFunctionActor.generated.h"\r\n\r\nUCLASS()\r\nclass UNREALCSHARPTEST_API ATestCSharpFunctionActor : public AActor\r\n{\r\n\tGENERATED_BODY()\r\n\r\npublic:\r\n\t// Sets default values for this actor\'s properties\r\n\tATestCSharpFunctionActor();\r\n\r\npublic:\r\n\tUFUNCTION(BlueprintCallable, BlueprintNativeEvent)\r\n\tvoid SetInt32ValueFunction(int32 InInt32Value);\r\n\r\n\tUFUNCTION(BlueprintCallable, BlueprintNativeEvent)\r\n\tint32 GetInt32ValueFunction() const;\r\n\r\n\tUFUNCTION(BlueprintCallable, BlueprintNativeEvent)\r\n\tvoid OutInt32ValueFunction(int32& OutInt32Value) const;\r\n};\n'})})}),(0,r.jsx)(i.c,{value:"C#",label:"C#",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:"using Script.CoreUObject;\r\n\r\nnamespace Script.UnrealCSharpTest\r\n{\r\n    [Override]\r\n    public partial class ATestCSharpFunctionActor\r\n    {\r\n        [Override]\r\n        public void SetInt32ValueFunction(int InInt32Value)\r\n        {\r\n            Int32Value = InInt32Value;\r\n        }\r\n\r\n        [Override]\r\n        public int GetInt32ValueFunction()\r\n        {\r\n            return Int32Value;\r\n        }\r\n\r\n        [Override]\r\n        public void OutInt32ValueFunction(ref int OutInt32Value)\r\n        {\r\n            OutInt32Value = Int32Value;\r\n        }\r\n    }\r\n}\n"})})})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"\u4ee3\u7801\u626b\u63cf",children:"\u4ee3\u7801\u626b\u63cf"}),"\n",(0,r.jsxs)(t.p,{children:["\u5728\u751f\u6210C#\u5de5\u7a0b\u7684\u65f6\u5019\uff0c\u4f1a\u5148\u901a\u8fc7",(0,r.jsx)(t.a,{href:"https://www.nuget.org/packages/Microsoft.CodeAnalysis.CSharp/",children:"Microsoft.CodeAnalysis.CSharp"}),"\u5bf9\u9879\u76ee\u4ee3\u7801\u8fdb\u884c\u4e00\u6b21\u4ee3\u7801\u626b\u63cf\uff0c\u5206\u6790\u51fa\u6807\u8bb0\u6709",(0,r.jsx)(t.code,{children:"Override"}),"\u7684\u7c7b\u548c\u51fd\u6570\uff0c\u5e76\u4e14\u751f\u6210\u5230",(0,r.jsx)(t.code,{children:"\u9879\u76ee/Intermediate/CodeAnalysis"}),"\u4e2d\uff0c\u907f\u514d\u8986\u76d6\u51fd\u6570\u540e\u7eed\u518d\u751f\u6210\uff0c\u5bfc\u81f4\u91cd\u5b9a\u4e49\u3002"]}),"\n",(0,r.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},5388:(e,t,n)=>{n.d(t,{c:()=>i});n(1504);var r=n(5456);const a={tabItem:"tabItem_Ymn6"};var l=n(7624);function i(e){let{children:t,hidden:n,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.c)(a.tabItem,i),hidden:n,children:t})}},1268:(e,t,n)=>{n.d(t,{c:()=>I});var r=n(1504),a=n(5456),l=n(3943),i=n(5592),s=n(5288),o=n(632),u=n(7128),c=n(1148);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.Uz)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._M)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=p(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,d]=m({queryString:n,groupId:a}),[v,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.IN)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),f=(()=>{const e=u??v;return h({value:e,tabValues:l})?e:null})();(0,s.c)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=n(3664);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(7624);function x(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.MV)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),a=s[n].value;a!==r&&(u(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.c)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...l,className:(0,a.c)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function C(e){const t=v(e);return(0,g.jsxs)("div",{className:(0,a.c)("tabs-container",f.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(j,{...e,...t})]})}function I(e){const t=(0,b.c)();return(0,g.jsx)(C,{...e,children:d(e.children)},String(t))}},2172:(e,t,n)=>{n.d(t,{I:()=>s,M:()=>i});var r=n(1504);const a={},l=r.createContext(a);function i(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);