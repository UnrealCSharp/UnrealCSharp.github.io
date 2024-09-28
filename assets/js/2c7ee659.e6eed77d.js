"use strict";(self.webpackChunkunreal_c_sharp=self.webpackChunkunreal_c_sharp||[]).push([[393],{9973:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var t=r(4848),a=r(8453),l=r(1470),i=r(9365);const s={title:"\u52a8\u6001\u7c7b",description:"\u4e0d\u9700\u8981\u84dd\u56fe\u8f7d\u4f53\u7684\u52a8\u6001\u7c7b",hide_title:!0,slug:"dynamic",sidebar_position:5,custom_edit_url:null},c=void 0,u={id:"document/getting-started/dynamic",title:"\u52a8\u6001\u7c7b",description:"\u4e0d\u9700\u8981\u84dd\u56fe\u8f7d\u4f53\u7684\u52a8\u6001\u7c7b",source:"@site/docs/document/getting-started/dynamic.md",sourceDirName:"document/getting-started",slug:"/document/getting-started/dynamic",permalink:"/docs/document/getting-started/dynamic",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\u52a8\u6001\u7c7b",description:"\u4e0d\u9700\u8981\u84dd\u56fe\u8f7d\u4f53\u7684\u52a8\u6001\u7c7b",hide_title:!0,slug:"dynamic",sidebar_position:5,custom_edit_url:null},sidebar:"documentSidebar",previous:{title:"\u9759\u6001\u5bfc\u51fa",permalink:"/docs/document/getting-started/binding"},next:{title:"\u6307\u5357",permalink:"/docs/document/guides"}},o={},d=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u57fa\u7840\u6982\u5ff5",id:"\u57fa\u7840\u6982\u5ff5",level:2},{value:"UEnum",id:"uenum",level:2},{value:"UStruct",id:"ustruct",level:2},{value:"UClass",id:"uclass",level:2},{value:"UInterface",id:"uinterface",level:2},{value:"\u53d8\u91cf",id:"\u53d8\u91cf",level:2},{value:"\u51fd\u6570",id:"\u51fd\u6570",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u4ecb\u7ecd",children:"\u4ecb\u7ecd"}),"\n",(0,t.jsx)(n.p,{children:"\u901a\u8fc7C#\u53ef\u4ee5\u52a8\u6001\u751f\u6210UClass\uff0cUInterface\uff0cUStruct\u548cUEnum\uff0c\u5e76\u4e14\u4e0d\u9700\u8981\u84dd\u56fe\u8f7d\u4f53\u3002"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"\u57fa\u7840\u6982\u5ff5",children:"\u57fa\u7840\u6982\u5ff5"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728",(0,t.jsx)(n.a,{href:"/docs/document/getting-started/reflection",children:"\u53cd\u5c04"}),"\u4e2d\uff0c\u6709\u4ecb\u7ecdC++\u4e2dPackage\u548cC#\u4e2dNamespace\u7684\u6620\u5c04\u5173\u7cfb\uff0c\u5bf9\u4e8e\u52a8\u6001\u7c7b\u6765\u8bf4\uff0cnamespace\u88ab\u9650\u5236\u4e3a\u4e00\u5b9a\u662f",(0,t.jsx)(n.code,{children:"Script.CoreUObject"}),"\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u52a8\u6001\u7c7b\u90fd\u4f1a\u88ab\u521b\u5efa\u5230",(0,t.jsx)(n.code,{children:"/Script/CoreUObject"}),"\u4e2d\u3002\u8fd9\u6837\u505a\u7684\u76ee\u662f\u6709\u4e00\u4e9b\u7279\u6b8a\u7684\u60c5\u666f\uff0c\u5982\u52a8\u6001\u7c7b\u88ab\u5176\u4ed6\u7c7b\u6240\u5f15\u7528\u6216\u8005\u88ab\u653e\u7f6e\u5728\u573a\u666f\u4e2d\u65f6\uff0c\u4f46\u662f\u7531\u4e8e\u6ca1\u6709\u84dd\u56fe\u8f7d\u4f53\uff0c\u5982\u679c\u653e\u5728\u5176\u4ed6Package\u4e2d\uff0c\u4f1a\u5bfc\u81f4\u5e8f\u5217\u5316\u5931\u8d25\u3002\u5176\u4e2dUClassAttribute\uff0cUStructAttribute\u548cUFunctionAttribute\u7ee7\u627f\u4e8eOverrideAttribute\uff0c\u6362\u8a00\u4e4b\uff0c\u52a8\u6001\u7c7b\u7684\u53d8\u91cf\u8bbf\u95ee\u548c\u51fd\u6570\u8c03\u7528\u53c8\u4f1a\u56de\u5230\u53cd\u5c04\u7ed1\u5b9a\u6d41\u7a0b\u3002\u540c\u65f6\uff0c\u4e3a\u4e86\u7f16\u8f91\u5668\u70ed\u91cd\u8f7d\uff0c\u6587\u4ef6\u547d\u540d\u5177\u6709\u89c4\u8303\u3002"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"uenum",children:"UEnum"}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u9700\u8981\u6807\u8bb0BlueprintType\uff0c\u5373\u88ab\u84dd\u56fe\u4f7f\u7528\uff0c\u9700\u8981\u5c06UnderlyingType\u8bbe\u7f6e\u4e3abyte\u3002\u679a\u4e3e\u540d\u548c\u6587\u4ef6\u540d\u90fd\u9700\u8981",(0,t.jsx)(n.code,{children:"E"}),"\u524d\u7f00\u3002"]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"\u793a\u4f8b\uff1aUEnum"}),(0,t.jsx)(l.A,{children:(0,t.jsx)(i.A,{value:"C#",label:"C#",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"using Script.Dynamic;\r\n\r\nnamespace Script.CoreUObject\r\n{\r\n    [UEnum, BlueprintType]\r\n    public enum ETestDynamicEnum : byte\r\n    {\r\n        TestDynamicZero = 0,\r\n        TestDynamicOne = 1,\r\n        TestDynamicTwo = 2\r\n    }\r\n}\n"})})})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"ustruct",children:"UStruct"}),"\n",(0,t.jsxs)(n.p,{children:["\u7c7b\u540d\u9700\u8981",(0,t.jsx)(n.code,{children:"F"}),"\u524d\u7f00\uff0c\u6587\u4ef6\u540d\u4e0d\u9700\u8981",(0,t.jsx)(n.code,{children:"F"}),"\u524d\u7f00\u3002"]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"\u793a\u4f8b\uff1aUStruct"}),(0,t.jsx)(l.A,{children:(0,t.jsx)(i.A,{value:"C#",label:"C#",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"using Script.Dynamic;\r\n\r\nnamespace Script.CoreUObject\r\n{\r\n    [UStruct, BlueprintType]\r\n    public partial class FTestDynamicStruct\r\n    {\r\n        [UProperty, BlueprintReadWrite]\r\n        public int Value { get; set; }\r\n    }\r\n}\n"})})})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"uclass",children:"UClass"}),"\n",(0,t.jsxs)(n.p,{children:["\u7ea6\u5b9a\u4e86\u547d\u4ee4\u89c4\u8303\uff0c\u5bf9\u4e8e\u52a8\u6001\u84dd\u56fe\u7c7b\uff0c\u9700\u8981\u4ee5",(0,t.jsx)(n.code,{children:"_C"}),"\u7ed3\u5c3e\u3002\u7c7b\u540d\u9700\u8981",(0,t.jsx)(n.code,{children:"U"}),"\u6216\u8005",(0,t.jsx)(n.code,{children:"A"}),"\u524d\u7f00\uff0c\u6587\u4ef6\u540d\u4e0d\u9700\u8981",(0,t.jsx)(n.code,{children:"U"}),"\u6216\u8005",(0,t.jsx)(n.code,{children:"A"}),"\u524d\u7f00\u3002"]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"\u793a\u4f8b\uff1aUClass"}),(0,t.jsx)(l.A,{children:(0,t.jsx)(i.A,{value:"C#",label:"C#",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"using Script.Dynamic;\r\nusing Script.Engine;\r\n\r\nnamespace Script.CoreUObject\r\n{\r\n    [UClass]\r\n    public partial class ATestRawDynamicFunctionActor : AActor, ITestDynamicInterface\r\n    {\r\n        public ATestRawDynamicFunctionActor()\r\n        {\r\n            Int32Value = 12;\r\n        }\r\n\r\n        [UProperty]\r\n        public int Int32Value { get; set; }\r\n\r\n        [UFunction]\r\n        public void SetInt32ValueFunction(int InInt32Value)\r\n        {\r\n            Int32Value = InInt32Value;\r\n        }\r\n\r\n        [UFunction]\r\n        public int GetInt32ValueFunction()\r\n        {\r\n            return Int32Value;\r\n        }\r\n\r\n        [UFunction]\r\n        public void OutInt32ValueFunction(ref int OutInt32Value)\r\n        {\r\n            OutInt32Value = Int32Value;\r\n        }\r\n    }\r\n}\n"})})})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"uinterface",children:"UInterface"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e0d\u652f\u6301\u7ee7\u627f\u84dd\u56fe\u63a5\u53e3\u3002\u7c7b\u540d\u9700\u8981",(0,t.jsx)(n.code,{children:"U"}),"\u524d\u7f00\uff0c\u6587\u4ef6\u540d\u4e0d\u9700\u8981",(0,t.jsx)(n.code,{children:"U"}),"\u524d\u7f00\u3002"]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"\u793a\u4f8b\uff1aUInterface"}),(0,t.jsx)(l.A,{children:(0,t.jsx)(i.A,{value:"C#",label:"C#",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"using Script.Dynamic;\r\n\r\nnamespace Script.CoreUObject\r\n{\r\n    [UInterface, Blueprintable]\r\n    public partial class UTestDynamicInterface : UInterface\r\n    {\r\n    }\r\n\r\n    public interface ITestDynamicInterface : IInterface\r\n    {\r\n    }\r\n}\n"})})})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"\u53d8\u91cf",children:"\u53d8\u91cf"}),"\n",(0,t.jsxs)(n.p,{children:["\u540c",(0,t.jsx)(n.a,{href:"/docs/document/getting-started/reflection",children:"\u53cd\u5c04"}),"\u4e2d\uff0c\u52a8\u6001\u7c7b\u7684\u53d8\u91cf\u4e5f\u662f",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/properties",children:"Properties"}),"\uff0c\u800c\u975e",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/fields",children:"Fields"}),"\u3002"]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"\u793a\u4f8b\uff1a\u53d8\u91cf"}),(0,t.jsx)(l.A,{children:(0,t.jsx)(i.A,{value:"C#",label:"C#",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"[UProperty]\r\npublic int Int32Value { get; set; }\n"})})})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"\u51fd\u6570",children:"\u51fd\u6570"}),"\n",(0,t.jsx)(n.p,{children:"\u5bf9\u4e8e\u5f15\u7528\u7c7b\u578b\uff0c\u53ea\u6709ref\u53c2\u6570\uff0c\u6ca1\u6709out\u53c2\u6570\u3002\u5982\u679c\u51fd\u6570\u8fd8\u4f1a\u88ab\u5176\u4ed6\u84dd\u56fe\u8c03\u7528\uff0c\u9700\u8981\u540c\u65f6\u6807\u8bb0BlueprintCallable\u548cBlueprintNativeEvent\u3002"}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"\u793a\u4f8b\uff1a\u51fd\u6570"}),(0,t.jsx)(l.A,{children:(0,t.jsx)(i.A,{value:"C#",label:"C#",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"[UFunction, BlueprintCallable, BlueprintNativeEvent]\r\npublic void SetInt32ValueFunction(int InInt32Value)\r\n{\r\n    Int32Value = InInt32Value;\r\n}\r\n\r\n[UFunction, BlueprintCallable, BlueprintNativeEvent]\r\npublic int GetInt32ValueFunction()\r\n{\r\n    return Int32Value;\r\n}\r\n\r\n[UFunction, BlueprintCallable, BlueprintNativeEvent]\r\npublic void OutInt32ValueFunction(ref int OutInt32Value)\r\n{\r\n    OutInt32Value = Int32Value;\r\n}\n"})})})})]}),"\n",(0,t.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>i});r(6540);var t=r(4164);const a={tabItem:"tabItem_Ymn6"};var l=r(4848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,i),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>I});var t=r(6540),a=r(4164),l=r(3104),i=r(6347),s=r(205),c=r(7485),u=r(1682),o=r(679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const a=(0,i.W6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c.aZ)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function b(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,l=p(e),[i,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[u,d]=m({queryString:r,groupId:a}),[b,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,o.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),x=(()=>{const e=u??b;return h({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{x&&c(x)}),[x]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),f(e)}),[d,f,l]),tabValues:l}}var f=r(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(4848);function v(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),o=e=>{const n=e.currentTarget,r=c.indexOf(n),a=s[r].value;a!==t&&(u(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:s.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:d,onClick:o,...l,className:(0,a.A)("tabs__item",x.tabItem,l?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function g(e){let{lazy:n,children:r,selectedValue:l}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=b(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,j.jsx)(v,{...n,...e}),(0,j.jsx)(g,{...n,...e})]})}function I(e){const n=(0,f.A)();return(0,j.jsx)(y,{...e,children:d(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>s});var t=r(6540);const a={},l=t.createContext(a);function i(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);