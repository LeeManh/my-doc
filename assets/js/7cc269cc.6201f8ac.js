"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([[386],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>g});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var A=r.createContext({}),l=function(t){var e=r.useContext(A),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},s=function(t){var e=l(t.components);return r.createElement(A.Provider,{value:e},t.children)},y={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},o=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,A=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),o=l(n),g=a,u=o["".concat(A,".").concat(g)]||o[g]||y[g]||i;return n?r.createElement(u,c(c({ref:e},s),{},{components:n})):r.createElement(u,c({ref:e},s))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,c=new Array(i);c[0]=o;var p={};for(var A in e)hasOwnProperty.call(e,A)&&(p[A]=e[A]);p.originalType=t,p.mdxType="string"==typeof t?t:a,c[1]=p;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}o.displayName="MDXCreateElement"},9688:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>A,contentTitle:()=>c,default:()=>y,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={},c="TypeScript Types",p={unversionedId:"typescript/basic-type/typeScript-types",id:"typescript/basic-type/typeScript-types",title:"TypeScript Types",description:"T\xf3m t\u1eaft : Trong h\u01b0\u1edbng d\u1eabn n\xe0y b\u1ea1n s\u1ebd h\u1ecdc v\u1ec1 v\u1ec1 TypeScript types v\xe0 m\u1ee5c \u0111\xedch c\u1ee7a n\xf3.",source:"@site/docs/typescript/basic-type/1.typeScript-types.md",sourceDirName:"typescript/basic-type",slug:"/typescript/basic-type/typeScript-types",permalink:"/my-doc/typescript/basic-type/typeScript-types",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/typescript/basic-type/1.typeScript-types.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Basic Types",permalink:"/my-doc/category/basic-types"},next:{title:"Type Annotation",permalink:"/my-doc/typescript/basic-type/Type-Annotations"}},A={},l=[{value:"Types trong TypeScript",id:"types-trong-typescript",level:2},{value:"Primitive types",id:"primitive-types",level:3},{value:"Object types",id:"object-types",level:3},{value:"M\u1ee5c \u0111\xednh c\u1ee7a types trong TypeScript",id:"m\u1ee5c-\u0111\xednh-c\u1ee7a-types-trong-typescript",level:3},{value:"Summary",id:"summary",level:2}],s={toc:l};function y(t){let{components:e,...i}=t;return(0,a.kt)("wrapper",(0,r.Z)({},s,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"typescript-types"},"TypeScript Types"),(0,a.kt)("p",null,"T\xf3m t\u1eaft : Trong h\u01b0\u1edbng d\u1eabn n\xe0y b\u1ea1n s\u1ebd h\u1ecdc v\u1ec1 v\u1ec1 TypeScript types v\xe0 m\u1ee5c \u0111\xedch c\u1ee7a n\xf3."),(0,a.kt)("h2",{id:"types-trong-typescript"},"Types trong TypeScript"),(0,a.kt)("p",null,"Trong TypeScript, 1 type l\xe0 1 c\xe1ch thu\u1eadn ti\u1ec7n \u0111\u1ec3 tham chi\u1ebfu \u0111\u1ebfn c\xe1c properties v\xe0 functions c\u1ee7a 1 value c\xf3."),(0,a.kt)("p",null,"1 Value l\xe0 b\u1ea5t c\u1ee9 th\u1ee9 g\xec b\u1ea1n c\xf3 th\u1ec3 g\xe1n v\xe0o bi\u1ebfn nh\u01b0 number, string, array, object , function."),(0,a.kt)("p",null,"TypeScript k\u1ebf th\u1eeba c\xe1c types \u0111\u01b0\u1ee3c x\xe2y d\u1ef1ng s\u1eb5n t\u1eeb JavaScript. TypeScript types \u0111\u01b0\u1ee3c ph\xe2n chia th\xe0nh :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Primitive types")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Object types"))),(0,a.kt)("h3",{id:"primitive-types"},"Primitive types"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u0110\u1ea1i di\u1ec7n cho text data")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"\u0110\u1ea1i di\u1ec7n cho numeric values")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"\u0110\u1ea1i di\u1ec7n cho gi\xe1 tr\u1ecb true ho\u1eb7c false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"null"),(0,a.kt)("td",{parentName:"tr",align:null},"C\xf3 1 gi\xe1 tr\u1ecb : null")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"C\xf3 1 gi\xe1 tr\u1ecb : undefined. N\xf3 l\xe0 gi\xe1 tr\u1ecb m\u1eb7c \u0111\u1ecbnh c\xf3 bi\u1ebfn ch\u01b0a \u0111\u01b0\u1ee3c kh\u1edfi t\u1ea1o")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"symbol"),(0,a.kt)("td",{parentName:"tr",align:null},"\u0110\u1ea1i di\u1ec7n cho gi\xe1 tr\u1ecb h\u1eb1ng s\u1ed1 duy nh\u1ea5t")))),(0,a.kt)("h3",{id:"object-types"},"Object types"),(0,a.kt)("p",null,"Object types l\xe0 functions, arrays, classes. B\u1ea1n s\u1ebd h\u1ecdc c\xe1ch t\u1ea1o 1 custom object types sau ."),(0,a.kt)("h3",{id:"m\u1ee5c-\u0111\xednh-c\u1ee7a-types-trong-typescript"},"M\u1ee5c \u0111\xednh c\u1ee7a types trong TypeScript"),(0,a.kt)("p",null,"C\xf3 2 m\u1ee5c \u0111\xedch ch\xednh c\u1ee7a types trong TypeScript"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u0110\u1ea7u ti\xean : types \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng b\u1edfi TypeScript complier \u0111\u1ec3 ph\xe2n t\xedch code \u0111\u1ec3 t\xecm l\u1ed7i.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Th\u1ee9 2, types cho ph\xe9p b\u1ea1n hi\u1ec3u \u0111\u01b0\u1ee3c c\xe1c values n\xe0o \u0111\u01b0\u1ee3c li\xean k\u1ebft v\u1edbi variables."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"V\xed d\u1ee5:")),(0,a.kt)("p",null,"The following example uses the querySelector() method to select the ",(0,a.kt)("inlineCode",{parentName:"p"},"<h1>")," element:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const heading = document.querySelector("h1");\n')),(0,a.kt)("p",null,"The TypeScript compiler bi\u1ebft r\u1eb1ng type of ",(0,a.kt)("inlineCode",{parentName:"p"},"heading")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"HTMLHeadingElement"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"!",src:n(9028).Z,width:"398",height:"65"})),(0,a.kt)("p",null,"V\xe0 n\xf3 \u0111\u01b0a ra g\u1ee3i \xfd HTMLHeadingElement type that heading can access:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"!",src:n(7717).Z,width:"516",height:"274"})),(0,a.kt)("p",null,"If you try to access a property or method that doesn\u2019t exist, the TypeScript compiler will show an error. For example:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"!",src:n(8092).Z,width:"379",height:"49"})),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"M\u1ed7i value trong TypeScript \u0111\u1ec1u c\xf3 1 type. \u2728")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Type l\xe0 1 label mi\xeau t\u1ea3 properties v\xe0 method m\xe0 value c\xf3. \u2728")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"TypeScript complier s\u1eed d\u1ee5ng type \u0111\u1ec3 ph\xe2n t\xedch code v\xe0 t\xecm ra l\u1ed7i \u2728"))))}y.isMDXComponent=!0},8092:(t,e,n)=>{n.d(e,{Z:()=>r});const r="data:image/png;base64,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"},9028:(t,e,n)=>{n.d(e,{Z:()=>r});const r="data:image/png;base64,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"},7717:(t,e,n)=>{n.d(e,{Z:()=>r});const r="data:image/png;base64,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"}}]);