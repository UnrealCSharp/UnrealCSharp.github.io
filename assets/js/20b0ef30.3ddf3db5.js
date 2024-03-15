"use strict";(self.webpackChunkunreal_c_sharp=self.webpackChunkunreal_c_sharp||[]).push([[528],{9772:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var n=r(7624),l=r(2172),c=r(1268),i=r(5388);const s={title:"\u53cd\u5c04",description:"\u4ecb\u7ecd\u5bf9\u4e8eUE\u53cd\u5c04\u7684\u652f\u6301\uff0c\u53d8\u91cf\u8bbf\u95ee\u548c\u51fd\u6570\u8c03\u7528",hide_title:!0,slug:"reflection",sidebar_position:3,custom_edit_url:null},a=void 0,o={id:"document/getting-started/reflection",title:"\u53cd\u5c04",description:"\u4ecb\u7ecd\u5bf9\u4e8eUE\u53cd\u5c04\u7684\u652f\u6301\uff0c\u53d8\u91cf\u8bbf\u95ee\u548c\u51fd\u6570\u8c03\u7528",source:"@site/docs/document/getting-started/reflection.md",sourceDirName:"document/getting-started",slug:"/document/getting-started/reflection",permalink:"/docs/document/getting-started/reflection",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u53cd\u5c04",description:"\u4ecb\u7ecd\u5bf9\u4e8eUE\u53cd\u5c04\u7684\u652f\u6301\uff0c\u53d8\u91cf\u8bbf\u95ee\u548c\u51fd\u6570\u8c03\u7528",hide_title:!0,slug:"reflection",sidebar_position:3,custom_edit_url:null},sidebar:"documentSidebar",previous:{title:"\u914d\u7f6e",permalink:"/docs/document/getting-started/configuration"},next:{title:"\u8986\u76d6\u51fd\u6570",permalink:"/docs/document/getting-started/override"}},d={},u=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u57fa\u7840\u6982\u5ff5",id:"\u57fa\u7840\u6982\u5ff5",level:2},{value:"\u6570\u636e\u7c7b\u578b",id:"\u6570\u636e\u7c7b\u578b",level:2},{value:"\u53d8\u91cf\u8bbf\u95ee",id:"\u53d8\u91cf\u8bbf\u95ee",level:2},{value:"\u51fd\u6570\u8c03\u7528",id:"\u51fd\u6570\u8c03\u7528",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.M)(),...e.components},{Details:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"\u4ecb\u7ecd",children:"\u4ecb\u7ecd"}),"\n",(0,n.jsxs)(t.p,{children:["\u901a\u8fc7UE\u63d0\u4f9b\u7684\u53cd\u5c04\uff0c\u63d2\u4ef6\u4f1a\u6839\u636e",(0,n.jsx)(t.a,{href:"/docs/document/getting-started/configuration",children:"\u914d\u7f6e"}),"\u751f\u6210\u6307\u5b9a\u6a21\u5757\u548c\u63d2\u4ef6\u4e0b\u7684\u7c7b\uff0c\u7ed3\u6784\u4f53\uff0c\u679a\u4e3e\uff0c\u4ee5\u53ca\u8d44\u6e90\u7c7b\u578b\u3002"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"\u57fa\u7840\u6982\u5ff5",children:"\u57fa\u7840\u6982\u5ff5"}),"\n",(0,n.jsxs)(t.p,{children:["UE\u548cC#\u4e24\u4fa7\u7684\u53cd\u5c04\u7c7b\u578b\u5b58\u5728\u4e00\u4e00\u5bf9\u5e94\u5173\u7cfb\uff0c\u5bf9\u4e8e\u7b80\u5355\u7c7b\u578b\u6bd4\u8f83\u5bb9\u6613\u7406\u89e3\uff0c\u9488\u5bf9\u5982UObject\uff0c\u84dd\u56fe\u7b49\u6b64\u7c7b\u590d\u6742\u7c7b\u578b\uff0c\u9700\u8981\u5148\u4e86\u89e3\u4e00\u4e0bUE\u4e2dPackage\u7684\u6982\u5ff5\uff0c\u63a8\u8350",(0,n.jsx)(t.a,{href:"https://zhuanlan.zhihu.com/p/357904199",children:"UE4\u7684\u8d44\u6e90\u7ba1\u7406"}),"\u548c",(0,n.jsx)(t.a,{href:"https://www.bilibili.com/video/BV1Mr4y1A7nZ",children:"[\u4e2d\u6587\u76f4\u64ad]\u7b2c33\u671f | UE4\u8d44\u4ea7\u7ba1\u7406\u57fa\u78401 | Epic \u5927\u948a"}),"\u3002"]}),"\n",(0,n.jsxs)(c.c,{children:[(0,n.jsx)(i.c,{value:"C++",label:"C++",default:!0,children:(0,n.jsxs)(t.p,{children:["\u5982AActor\uff0c\u4f1a\u5c06",(0,n.jsx)(t.code,{children:"/Script/Engine.Actor"}),"\u6620\u5c04\u4e3a",(0,n.jsx)(t.code,{children:"Script.Engine.Actor"}),"\uff0c\u89c4\u5219\u4e3a\u53bb\u6389\u9996\u4f4d",(0,n.jsx)(t.code,{children:"/"}),"\uff0c\u5e76\u5c06",(0,n.jsx)(t.code,{children:"/"}),"\u66ff\u6362\u4e3a",(0,n.jsx)(t.code,{children:"."})]})}),(0,n.jsx)(i.c,{value:"blueprint",label:"Blueprint",children:(0,n.jsxs)(t.p,{children:["\u5982BP_TestReflectionPropertyActor_C\uff0c\u4f1a\u5c06",(0,n.jsx)(t.code,{children:"/Game/UnitTest/Reflection/BP_TestReflectionPropertyActor.BP_TestReflectionPropertyActor_C"}),"\u6620\u5c04\u4e3a",(0,n.jsx)(t.code,{children:"Script.Game.UnitTest.Reflection.BP_TestReflectionPropertyActor_C"}),"\uff0c\u89c4\u5219\u4e3a\u52a0\u4e0a",(0,n.jsx)(t.code,{children:"Script/"}),"\uff0c\u53bb\u6389",(0,n.jsx)(t.code,{children:"BP_TestReflectionPropertyActor."}),"\uff0c\u5e76\u5c06",(0,n.jsx)(t.code,{children:"/"}),"\u66ff\u6362\u4e3a",(0,n.jsx)(t.code,{children:"."})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"\u6570\u636e\u7c7b\u578b",children:"\u6570\u636e\u7c7b\u578b"}),"\n",(0,n.jsx)(t.p,{children:"\u9488\u5bf9\u4e0d\u540c\u7684\u6570\u636e\u7c7b\u578b\uff0c\u6709\u4e0d\u540c\u7684\u5904\u7406\u65b9\u5f0f\uff0c\u5206\u4e3a\u4ee5\u4e0b\u51e0\u4e2a\u5927\u7c7b\u3002"}),"\n",(0,n.jsxs)(c.c,{children:[(0,n.jsx)(i.c,{value:"base",label:"\u57fa\u672c\u7c7b\u578b",default:!0,children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"C++"}),(0,n.jsx)(t.th,{children:"C#"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"bool"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"int8"}),(0,n.jsx)(t.td,{children:"sbyte"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"int16"}),(0,n.jsx)(t.td,{children:"short"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"int32"}),(0,n.jsx)(t.td,{children:"int"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"int64"}),(0,n.jsx)(t.td,{children:"long"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"uint8"}),(0,n.jsx)(t.td,{children:"byte"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"uint16"}),(0,n.jsx)(t.td,{children:"ushort"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"uint32"}),(0,n.jsx)(t.td,{children:"uint"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"uint64"}),(0,n.jsx)(t.td,{children:"ulong"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"float"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"double"})]})]})]})}),(0,n.jsx)(i.c,{value:"string",label:"\u5b57\u7b26\u4e32",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"C++"}),(0,n.jsx)(t.th,{children:"C#"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"FName"}),(0,n.jsx)(t.td,{children:"Script.CoreUObject.FName"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"FText"}),(0,n.jsx)(t.td,{children:"Script.CoreUObject.FText"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"FString"}),(0,n.jsx)(t.td,{children:"Script.CoreUObject.FString"})]})]})]})}),(0,n.jsxs)(i.c,{value:"enum",label:"\u679a\u4e3e",children:[(0,n.jsx)(t.p,{children:"\u5bf9\u4e8e\u679a\u4e3e\u548cTEnumAsByte\u90fd\u4f1a\u88ab\u5bf9\u5e94\u5230\u6620\u5c04\u5173\u7cfb\u4e0b\u7684\u679a\u4e3e\u3002"}),(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"\u793a\u4f8b\uff1a\u679a\u4e3e"}),(0,n.jsxs)(c.c,{children:[(0,n.jsx)(i.c,{value:"C++",label:"C++",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:"UENUM(BlueprintType)\r\nenum ETestEnum\r\n{\r\n\tTestEnumZero,\r\n\tTestEnumOne,\r\n\tTestEnumTwo\r\n};\n"})})}),(0,n.jsx)(i.c,{value:"C#",label:"C#",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:'using Script.CoreUObject;\r\n\r\nnamespace Script.UnrealCSharpTest\r\n{\r\n\t[PathName("/Script/UnrealCSharpTest.ETestEnum")]\r\n\tpublic enum ETestEnum : byte\r\n\t{\r\n\t\tTestEnumZero = 0,\r\n\t\tTestEnumOne = 1,\r\n\t\tTestEnumTwo = 2,\r\n\t}\r\n}\n'})})})]})]})]}),(0,n.jsxs)(i.c,{value:"struct",label:"\u7ed3\u6784\u4f53",children:[(0,n.jsx)(t.p,{children:"\u4f1a\u751f\u6210\u53cd\u5c04\u53d8\u91cf\uff0cStaticStruct\uff0c\u6784\u9020\u51fd\u6570\u548c\u6790\u6784\u51fd\u6570\u7b49\u3002"}),(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"\u793a\u4f8b\uff1a\u7ed3\u6784\u4f53"}),(0,n.jsxs)(c.c,{children:[(0,n.jsx)(i.c,{value:"C++",label:"C++",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:"USTRUCT(BlueprintType)\r\nstruct FTestStruct\r\n{\r\n\tGENERATED_BODY()\r\n\r\n\tUPROPERTY(BlueprintReadWrite)\r\n\tint32 Value;\r\n};\n"})})}),(0,n.jsx)(i.c,{value:"C#",label:"C#",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:'using Script.Library;\r\nusing Script.CoreUObject;\r\n\r\nnamespace Script.UnrealCSharpTest\r\n{\r\n\t[PathName("/Script/UnrealCSharpTest.TestStruct")]\r\n\tpublic partial class FTestStruct : IStaticStruct, IGarbageCollectionHandle\r\n\t{\r\n\t\tpublic static UScriptStruct StaticStruct()\r\n\t\t{\r\n\t\t\treturn UStructImplementation.UStruct_StaticStructImplementation("/Script/UnrealCSharpTest.TestStruct");\r\n\t\t}\r\n\r\n\t\tpublic FTestStruct() => UStructImplementation.UStruct_RegisterImplementation(this, Utils.GetPathName(GetType()));\r\n\r\n\t\t~FTestStruct() => UStructImplementation.UStruct_UnRegisterImplementation(GarbageCollectionHandle);\r\n\r\n\t\tpublic static bool operator ==(FTestStruct A, FTestStruct B) => UStructImplementation.UStruct_IdenticalImplementation(StaticStruct().GarbageCollectionHandle, A?.GarbageCollectionHandle??nint.Zero, B?.GarbageCollectionHandle??nint.Zero);\r\n\r\n\t\tpublic static bool operator !=(FTestStruct A, FTestStruct B) => !UStructImplementation.UStruct_IdenticalImplementation(StaticStruct().GarbageCollectionHandle, A?.GarbageCollectionHandle??nint.Zero, B?.GarbageCollectionHandle??nint.Zero);\r\n\r\n\t\tpublic override bool Equals(object Other) => this == Other as FTestStruct;\r\n\r\n\t\tpublic override int GetHashCode() => (int)GarbageCollectionHandle;\r\n\r\n\t\tpublic int Value\r\n\t\t{\r\n\t\t\tget => FPropertyImplementation.FProperty_GetStructInt32PropertyImplementation(GarbageCollectionHandle, __Value);\r\n\r\n\t\t\tset => FPropertyImplementation.FProperty_SetStructInt32PropertyImplementation(GarbageCollectionHandle, __Value, value);\r\n\t\t}\r\n\r\n\t\tprivate static uint __Value = 0;\r\n\r\n\t\tpublic nint GarbageCollectionHandle { get; set; }\r\n\t}\r\n}\n'})})})]})]})]}),(0,n.jsxs)(i.c,{value:"UObject",label:"UObject",children:[(0,n.jsx)(t.p,{children:"\u4f1a\u751f\u6210\u53cd\u5c04\u53d8\u91cf\uff0c\u53cd\u5c04\u51fd\u6570\uff0c\u63a5\u53e3\u51fd\u6570\u548cStaticClass\u7b49\u3002"}),(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"\u793a\u4f8b\uff1aUObject"}),(0,n.jsxs)(c.c,{children:[(0,n.jsx)(i.c,{value:"C++",label:"C++",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:'#pragma once\r\n\r\n#include "CoreMinimal.h"\r\n#include "GameFramework/Actor.h"\r\n#include "UnitTest/Core/TestInterface.h"\r\n#include "TestReflectionPropertyActor.generated.h"\r\n\r\nUCLASS()\r\nclass UNREALCSHARPTEST_API ATestReflectionPropertyActor : public AActor, public ITestInterface\r\n{\r\n\tGENERATED_BODY()\r\n\r\npublic:\r\n\t// Sets default values for this actor\'s properties\r\n\tATestReflectionPropertyActor();\r\n\r\npublic:\r\n\tUPROPERTY(BlueprintReadWrite)\r\n\tint32 Int32Value;\r\n};\n'})})}),(0,n.jsx)(i.c,{value:"C#",label:"C#",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:'using Script.Engine;\r\nusing Script.CoreUObject;\r\nusing Script.Library;\r\n\r\nnamespace Script.UnrealCSharpTest\r\n{\r\n    [PathName("/Script/UnrealCSharpTest.TestReflectionPropertyActor")]\r\n    public partial class ATestReflectionPropertyActor : AActor, IStaticClass, ITestInterface\r\n    {\r\n        public int Int32Value\r\n        {\r\n            get => FPropertyImplementation.FProperty_GetObjectInt32PropertyImplementation(GarbageCollectionHandle\uff0c __Int32Value);\r\n\r\n            set => FPropertyImplementation.FProperty_SetObjectInt32PropertyImplementation(GarbageCollectionHandle\uff0c __Int32Value, value);\r\n        }\r\n\r\n        public new static UClass StaticClass()\r\n        {\r\n            return UObjectImplementation.UObject_StaticClassImplementation("/Script/UnrealCSharpTest.TestReflectionPropertyActor");\r\n        }\r\n\r\n        private static uint __Int32Value = 0;\r\n    }\r\n}\n'})})})]})]})]}),(0,n.jsx)(i.c,{value:"UObject template",label:"UObject\u6a21\u677f",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"C++"}),(0,n.jsx)(t.th,{children:"C#"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"TScriptInterface"}),(0,n.jsx)(t.td,{children:"Script.CoreUObject.TScriptInterface`1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"TSubclassOf"}),(0,n.jsx)(t.td,{children:"Script.CoreUObject.TSubclassOf`1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"TWeakObjectPtr"}),(0,n.jsx)(t.td,{children:"Script.CoreUObject.TWeakObjectPtr`1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"TLazyObjectPtr"}),(0,n.jsx)(t.td,{children:"Script.CoreUObject.TLazyObjectPtr`1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"TSoftObjectPtr"}),(0,n.jsx)(t.td,{children:"Script.CoreUObject.TSoftObjectPtr`1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"TSoftClassPtr"}),(0,n.jsx)(t.td,{children:"Script.CoreUObject.TSoftClassPtr`1"})]})]})]})}),(0,n.jsx)(i.c,{value:"container",label:"\u5bb9\u5668",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"C++"}),(0,n.jsx)(t.th,{children:"C#"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"TArray"}),(0,n.jsx)(t.td,{children:"Script.CoreUObject.TArray`1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"TSet"}),(0,n.jsx)(t.td,{children:"Script.CoreUObject.TSet`1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"TMap"}),(0,n.jsx)(t.td,{children:"Script.CoreUObject.TMap`2"})]})]})]})}),(0,n.jsxs)(i.c,{value:"delegate",label:"\u4ee3\u7406",children:[(0,n.jsx)(t.p,{children:"\u5355\u64ad\u548c\u591a\u64ad\u90fd\u4f1a\u6620\u5c04\u4e3aC#\u4e2d\u7684\u7c7b\uff0c\u5e76\u4e14\u63d0\u4f9b\u76f8\u5173\u64cd\u4f5c\u51fd\u6570\u3002"}),(0,n.jsxs)(c.c,{children:[(0,n.jsx)(i.c,{value:"single delegate",label:"\u5355\u64ad",default:!0,children:(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"\u793a\u4f8b\uff1a\u5355\u64ad"}),(0,n.jsxs)(c.c,{children:[(0,n.jsx)(i.c,{value:"C++",label:"C++",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:"DECLARE_DYNAMIC_DELEGATE_RetVal_TwoParams(FEventReply, FOnPointerEvent, FGeometry, MyGeometry, const FPointerEvent&, MouseEvent);\n"})})}),(0,n.jsx)(i.c,{value:"C#",label:"C#",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:"using System;\r\nusing Script.CoreUObject;\r\nusing Script.Library;\r\nusing Script.SlateCore;\r\nusing Script.UMG;\r\n\r\nnamespace Script.UMG.Widget\r\n{\r\n\tpublic class FOnPointerEvent : FDelegate<Func<FGeometry, FPointerEvent, FEventReply>>\r\n\t{\r\n\t\tpublic FOnPointerEvent() => FDelegateImplementation.FDelegate_RegisterImplementation(this);\r\n\r\n\t\t~FOnPointerEvent() => FDelegateImplementation.FDelegate_UnRegisterImplementation(GarbageCollectionHandle);\r\n\r\n\t\tpublic FEventReply Execute(FGeometry MyGeometry, FPointerEvent MouseEvent)\r\n\t\t{\r\n\t\t\treturn FDelegateImplementation.FDelegate_Execute3Implementation(GarbageCollectionHandle, MyGeometry, MouseEvent) as FEventReply;\r\n\t\t}\r\n\t}\r\n}\n"})})})]})]})}),(0,n.jsx)(i.c,{value:"multicast delegate",label:"\u591a\u64ad",children:(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"\u793a\u4f8b\uff1a\u591a\u64ad"}),(0,n.jsxs)(c.c,{children:[(0,n.jsx)(i.c,{value:"C++",label:"C++",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:"DECLARE_DYNAMIC_MULTICAST_DELEGATE(FOnButtonClickedEvent);\n"})})}),(0,n.jsx)(i.c,{value:"C#",label:"C#",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:"using System;\r\nusing Script.CoreUObject;\r\nusing Script.Library;\r\n\r\nnamespace Script.UMG\r\n{\r\n\tpublic class FOnButtonClickedEvent : FMulticastDelegate<Action>\r\n\t{\r\n\t\tpublic FOnButtonClickedEvent() => FMulticastDelegateImplementation.FMulticastDelegate_RegisterImplementation(this);\r\n\r\n\t\t~FOnButtonClickedEvent() => FMulticastDelegateImplementation.FMulticastDelegate_UnRegisterImplementation(GarbageCollectionHandle);\r\n\r\n\t\tpublic void Broadcast()\r\n\t\t{\r\n\t\t\tFMulticastDelegateImplementation.FMulticastDelegate_Broadcast0Implementation(GarbageCollectionHandle);\r\n\t\t}\r\n\t}\r\n}\n"})})})]})]})})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"\u53d8\u91cf\u8bbf\u95ee",children:"\u53d8\u91cf\u8bbf\u95ee"}),"\n",(0,n.jsxs)(t.p,{children:["\u5bf9\u4e8eC++\u6216\u8005\u84dd\u56fe\u4e2d\u7684\u53cd\u5c04\u53d8\u91cf\uff0c\u4f1a\u751f\u6210\u5bf9\u5e94\u7684",(0,n.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/properties",children:"Properties"}),"\uff0c\u800c\u975e",(0,n.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/fields",children:"Fields"}),"\uff0c\u5b9e\u9645\u5185\u5b58\u8fd8\u662f\u653e\u5728C++\u4fa7\u3002"]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"\u793a\u4f8b\uff1a\u53d8\u91cf\u8bbf\u95ee"}),(0,n.jsxs)(c.c,{children:[(0,n.jsx)(i.c,{value:"C++",label:"C++",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:'#pragma once\r\n\r\n#include "CoreMinimal.h"\r\n#include "GameFramework/Actor.h"\r\n#include "TestReflectionPropertyActor.generated.h"\r\n\r\nUCLASS()\r\nclass UNREALCSHARPTEST_API ATestReflectionPropertyActor : public AActor\r\n{\r\n\tGENERATED_BODY()\r\n\r\npublic:\r\n\t// Sets default values for this actor\'s properties\r\n\tATestReflectionPropertyActor();\r\n\r\npublic:\r\n\tUPROPERTY(BlueprintReadWrite)\r\n\tint32 Int32Value;\r\n};\n'})})}),(0,n.jsx)(i.c,{value:"C#",label:"C#",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:"using Script.CoreUObject;\r\n\r\nnamespace Script.UnrealCSharpTest\r\n{\r\n    public partial class UUnitTestSubsystem\r\n    {\r\n        private void TestReflectionProperty()\r\n        {\r\n            var PropertyActor = GetWorld().SpawnActor<ATestReflectionPropertyActor>(new FTransform());\r\n\r\n            var Int32Value = PropertyActor.Int32Value;\r\n\r\n            PropertyActor.Int32Value = 21;\r\n        }\r\n    }\r\n}\n"})})})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"\u51fd\u6570\u8c03\u7528",children:"\u51fd\u6570\u8c03\u7528"}),"\n",(0,n.jsx)(t.p,{children:"\u5bf9\u4e8eC++\u6216\u8005\u84dd\u56fe\u4e2d\u7684\u53cd\u5c04\u51fd\u6570\uff0c\u4f1a\u751f\u6210\u5bf9\u5e94\u7684C#\u51fd\u6570\uff0c\u5e76\u4e14\u5904\u7406\u597d\u51fd\u6570\u9ed8\u8ba4\u53c2\u6570\u3002"}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"\u793a\u4f8b\uff1a\u51fd\u6570\u8c03\u7528"}),(0,n.jsxs)(c.c,{children:[(0,n.jsx)(i.c,{value:"C++",label:"C++",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:'#pragma once\r\n\r\n#include "CoreMinimal.h"\r\n#include "GameFramework/Actor.h"\r\n#include "TestReflectionFunctionActor.generated.h"\r\n\r\nUCLASS()\r\nclass UNREALCSHARPTEST_API ATestReflectionFunctionActor : public AActor\r\n{\r\n\tGENERATED_BODY()\r\n\r\npublic:\r\n\t// Sets default values for this actor\'s properties\r\n\tATestReflectionFunctionActor();\r\n\r\npublic:\r\n\tUFUNCTION(BlueprintCallable)\r\n\tvoid SetInt32ValueFunction(int32 InInt32Value);\r\n\r\n\tUFUNCTION(BlueprintCallable)\r\n\tint32 GetInt32ValueFunction() const;\r\n\r\n\tUFUNCTION(BlueprintCallable)\r\n\tvoid OutInt32ValueFunction(int32& OutInt32Value) const;\r\n};\n'})})}),(0,n.jsx)(i.c,{value:"C#",label:"C#",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:"using Script.CoreUObject;\r\nusing Script.Engine;\r\n\r\nnamespace Script.UnrealCSharpTest\r\n{\r\n    public partial class UUnitTestSubsystem\r\n    {\r\n        private void TestReflectionFunction()\r\n        {\r\n            var FunctionActor = GetWorld().SpawnActor<ATestReflectionFunctionActor>(new FTransform());\r\n\r\n            var Int32Value = FunctionActor.GetInt32ValueFunction();\r\n\r\n            FunctionActor.SetInt32ValueFunction(21);\r\n\r\n            var OutInt32Value = 12;\r\n\r\n            FunctionActor.OutInt32ValueFunction(ref OutInt32Value);\r\n        }\r\n    }\r\n}\n"})})})]})]}),"\n",(0,n.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,l.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},5388:(e,t,r)=>{r.d(t,{c:()=>i});r(1504);var n=r(5456);const l={tabItem:"tabItem_Ymn6"};var c=r(7624);function i(e){let{children:t,hidden:r,className:i}=e;return(0,c.jsx)("div",{role:"tabpanel",className:(0,n.c)(l.tabItem,i),hidden:r,children:t})}},1268:(e,t,r)=>{r.d(t,{c:()=>v});var n=r(1504),l=r(5456),c=r(3943),i=r(5592),s=r(5288),a=r(632),o=r(7128),d=r(1148);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:l}}=e;return{value:t,label:r,attributes:n,default:l}}))}(r);return function(e){const t=(0,o.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:r}=e;const l=(0,i.Uz)(),c=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,a._M)(c),(0,n.useCallback)((e=>{if(!c)return;const t=new URLSearchParams(l.location.search);t.set(c,e),l.replace({...l.location,search:t.toString()})}),[c,l])]}function x(e){const{defaultValue:t,queryString:r=!1,groupId:l}=e,c=h(e),[i,a]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:c}))),[o,u]=j({queryString:r,groupId:l}),[x,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,c]=(0,d.IN)(r);return[l,(0,n.useCallback)((e=>{r&&c.set(e)}),[r,c])]}({groupId:l}),b=(()=>{const e=o??x;return p({value:e,tabValues:c})?e:null})();(0,s.c)((()=>{b&&a(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:c}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),m(e)}),[u,m,c]),tabValues:c}}var m=r(3664);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(7624);function S(e){let{className:t,block:r,selectedValue:n,selectValue:i,tabValues:s}=e;const a=[],{blockElementScrollPositionUntilNextRender:o}=(0,c.MV)(),d=e=>{const t=e.currentTarget,r=a.indexOf(t),l=s[r].value;l!==n&&(o(t),i(l))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=a.indexOf(e.currentTarget)+1;t=a[r]??a[0];break}case"ArrowLeft":{const r=a.indexOf(e.currentTarget)-1;t=a[r]??a[a.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.c)("tabs",{"tabs--block":r},t),children:s.map((e=>{let{value:t,label:r,attributes:c}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>a.push(e),onKeyDown:u,onClick:d,...c,className:(0,l.c)("tabs__item",b.tabItem,c?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function f(e){let{lazy:t,children:r,selectedValue:l}=e;const c=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=c.find((e=>e.props.value===l));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:c.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function C(e){const t=x(e);return(0,g.jsxs)("div",{className:(0,l.c)("tabs-container",b.tabList),children:[(0,g.jsx)(S,{...e,...t}),(0,g.jsx)(f,{...e,...t})]})}function v(e){const t=(0,m.c)();return(0,g.jsx)(C,{...e,children:u(e.children)},String(t))}},2172:(e,t,r)=>{r.d(t,{I:()=>s,M:()=>i});var n=r(1504);const l={},c=n.createContext(l);function i(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);