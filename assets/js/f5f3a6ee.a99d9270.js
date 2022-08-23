"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([[929],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(7294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=c(n),u=p,m=d["".concat(l,".").concat(u)]||d[u]||y[u]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function u(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var i=n.length,o=new Array(i);o[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:p,o[1]=a;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(7462),p=(n(7294),n(3905));const i={sidebar_position:1,title:"Utility Types"},o="Utility Types",a={unversionedId:"typescript/utility-types",id:"typescript/utility-types",title:"Utility Types",description:"TypeSript cung c\u1ea5p 1 v\xe0i type c\xf3 s\u1eb5n \u0111\u1ec3 t\u1ea1o \u0111i\u1ec1u ki\u1ec7n cho c\xe1c bi\u1ebfn \u0111\u1ed5i type ph\u1ed5 bi\u1ebfn.",source:"@site/docs/typescript/utility-types.md",sourceDirName:"typescript",slug:"/typescript/utility-types",permalink:"/my-doc/typescript/utility-types",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/typescript/utility-types.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Utility Types"},sidebar:"tutorialSidebar",previous:{title:"Enum Type",permalink:"/my-doc/typescript/basic-type/Enum-types"},next:{title:"Generics",permalink:"/my-doc/category/generics"}},l={},c=[{value:'<a name="partial" ><code>Partial&lt;Type&gt;</code></a>',id:"partialtype",level:2},{value:"<code>Required&lt;Type&gt;</code>",id:"requiredtype",level:2},{value:"<code>Readonly&lt;Type&gt;</code>",id:"readonlytype",level:2},{value:"<code>Record&lt;Keys, Type&gt;</code>",id:"recordkeys-type",level:2},{value:"<code>Pick&lt;Type, Keys&gt;</code>",id:"picktype-keys",level:2},{value:"<code>Omit&lt;Type, Keys&gt;</code>",id:"omittype-keys",level:2},{value:"<code>ReturnType&lt;Type&gt;</code>",id:"returntypetype",level:2}],s={toc:c};function y(e){let{components:t,...n}=e;return(0,p.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"utility-types"},"Utility Types"),(0,p.kt)("p",null,"TypeSript cung c\u1ea5p 1 v\xe0i type c\xf3 s\u1eb5n \u0111\u1ec3 t\u1ea1o \u0111i\u1ec1u ki\u1ec7n cho c\xe1c bi\u1ebfn \u0111\u1ed5i type ph\u1ed5 bi\u1ebfn.\nNh\u1eefng utilities n\xe0y c\xf3 s\u1eb5n globally"),(0,p.kt)("h2",{id:"partialtype"},(0,p.kt)("a",{name:"partial"},(0,p.kt)("inlineCode",{parentName:"h2"},"Partial<Type>"))),(0,p.kt)("p",null,"Partial c\xf3 ngh\u0129a l\xe0 1 ph\u1ea7n. T\u1ea1o 1 type v\u1edbi t\u1ea5t c\u1ea3 properties c\u1ee7a ",(0,p.kt)("inlineCode",{parentName:"p"},"Type")," \u0111\u1eb7t v\u1ec1 ",(0,p.kt)("strong",{parentName:"p"},"optional"),"."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Example")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},'interface Todo {\n  title: string;\n  description: string;\n}\n\n// type fieldsToUpdate = {\n//     title?: string;\n//     description?: string;\n//   }\n\nfunction handleUpdate(todo: Todo, fieldsToUpdate: Partial<Todo>) {\n  return { ...todo, ...fieldsToUpdate };\n}\n\nconst oldTodo = {\n  title: "organize desk",\n  description: "clear clutter",\n};\n\nconst update = handleUpdate(oldTodo, {\n  description: "throw out trash",\n});\n')),(0,p.kt)("hr",null),(0,p.kt)("h2",{id:"requiredtype"},(0,p.kt)("inlineCode",{parentName:"h2"},"Required<Type>")),(0,p.kt)("p",null,"T\u1ea1o 1 type bao g\u1ed3m t\u1ea5t c\u1ea3 properties c\u1ee7a ",(0,p.kt)("inlineCode",{parentName:"p"},"Type")," \u0111\u01b0\u1ee3c set v\u1ec1 ",(0,p.kt)("strong",{parentName:"p"},"required"),". \u0110\u1ed1i l\u1eadp v\u1edbi ",(0,p.kt)("a",{parentName:"p",href:"#partial"},"Partial")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Example")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"interface Props {\n  a?: number;\n  b?: string;\n}\n\nconst obj: Props = { a: 5 };\n\nconst obj2: Required<Props> = { a: 5 };\n\n//highlight-next-line\nProperty 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'\n")),(0,p.kt)("hr",null),(0,p.kt)("h2",{id:"readonlytype"},(0,p.kt)("inlineCode",{parentName:"h2"},"Readonly<Type>")),(0,p.kt)("p",null,"T\u1ea1o 1 type v\u1edbi t\u1ea5t c\u1ea3 properties c\u1ee7a ",(0,p.kt)("inlineCode",{parentName:"p"},"Type")," \u0111\u01b0\u1ee3c set v\u1ec1 ",(0,p.kt)("inlineCode",{parentName:"p"},"readonly"),", ngh\u0129a l\xe0 t\u1ea5t c\u1ea3 properties c\u1ee7a type kh\xf4ng th\u1ec3 \u0111\u01b0\u1ee3c g\xe1n l\u1ea1i"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Example")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},'interface Todo {\n  title: string;\n}\n\nconst todo: Readonly<Todo> = {\n  title: "Delete inactive users",\n};\n\ntodo.title = "Hello";\n\n//highlight-next-line\nCannot assign to \'title\' because it is a read-only property.\n')),(0,p.kt)("hr",null),(0,p.kt)("h2",{id:"recordkeys-type"},(0,p.kt)("inlineCode",{parentName:"h2"},"Record<Keys, Type>")),(0,p.kt)("p",null,"T\u1ea1o 1 object type c\xf3 c\xe1c keys l\xe0 ",(0,p.kt)("inlineCode",{parentName:"p"},"Keys")," v\xe0 gi\xe1 tr\u1ecb property l\xe0 Type.\nC\xe1i Utility n\xe0y c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 map qua to\xe0n b\u1ed9 properties c\u1ee7a 1 type cho 1 type kh\xe1c"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Example")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},'interface CatInfo {\n  age: number;\n  breed: string;\n}\n\n//c\xe1c keys \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng\ntype CatName = "miffy" | "boris" | "mordred";\n\n//new type \u0111\u01b0\u1ee3c t\u1ea1o ra\nconst cats: Record<CatName, CatInfo> = {\n  miffy: { age: 10, breed: "Persian" },\n  boris: { age: 5, breed: "Maine Coon" },\n  mordred: { age: 16, breed: "British Shorthair" },\n};\n\ncats.boris;\n//highlight-next-line\n//const cats: Record<CatName, CatInfo>;\n')),(0,p.kt)("hr",null),(0,p.kt)("h2",{id:"picktype-keys"},(0,p.kt)("inlineCode",{parentName:"h2"},"Pick<Type, Keys>")),(0,p.kt)("p",null,"Nh\u01b0 c\xe1i t\xean c\u1ee7a n\xf3 Pick \ud83d\ude01. T\u1ea1o 1 type b\u1eb1ng c\xe1ch l\u1ea5y 1 v\xe0i thu\u1ed9c t\xednh c\u1ee7a ",(0,p.kt)("inlineCode",{parentName:"p"},"Keys")," t\u1eeb ",(0,p.kt)("inlineCode",{parentName:"p"},"Type")," s\u1eed d\u1ee5ng"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Example")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},'//Type s\u1eed d\u1ee5ng\ninterface Todo {\n  title: string;\n  description: string;\n  completed: boolean;\n}\n// T\u1ea1o type m\u1edbi b\u1eb1ng t\u1eeb Type Todo v\xe0 ch\u1ec9 \'pick\' l\u1ea5y ra thu\u1ed9c t\xednh title v\xe0 completed\ntype TodoPreview = Pick<Todo, "title" | "completed">;\n\nconst todo: TodoPreview = {\n  title: "Clean room",\n  completed: false,\n};\n')),(0,p.kt)("hr",null),(0,p.kt)("h2",{id:"omittype-keys"},(0,p.kt)("inlineCode",{parentName:"h2"},"Omit<Type, Keys>")),(0,p.kt)("p",null,"T\u1ea1o 1 type b\u1eb1ng c\xe1nh l\u1ea5y t\u1ea5t c\u1ea3 thu\u1ed9c t\xednh t\u1eeb ",(0,p.kt)("inlineCode",{parentName:"p"},"Type")," sau \u0111\xf3 b\u1ecf t\u1ea5t c\u1ea3 thu\u1ed9c t\xednh ",(0,p.kt)("inlineCode",{parentName:"p"},"Keys")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Example")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},'interface Todo {\n  title: string;\n  description: string;\n  completed: boolean;\n  createdAt: number;\n}\n// L\u1ea5y t\u1ea5t c\u1ea3 thu\u1ed9c t\xednh t\u1eeb Type Todo, sau \u0111\xf3 b\u1ecf ra thu\u1ed9c t\xednh `description`\ntype TodoPreview = Omit<Todo, "description">;\n\nconst todo: TodoPreview = {\n  title: "Clean room",\n  completed: false,\n  createdAt: 1615544252770,\n};\n\n// L\u1ea5y t\u1ea5t c\u1ea3 thu\u1ed9c t\xednh t\u1eeb Type Todo, sau \u0111\xf3 b\u1ecf ra thu\u1ed9c t\xednh `completed` v\xe0 `createdAt`\ntype TodoInfo = Omit<Todo, "completed" | "createdAt">;\n\nconst todoInfo: TodoInfo = {\n  title: "Pick up kids",\n  description: "Kindergarten closes at 5pm",\n};\n')),(0,p.kt)("hr",null),(0,p.kt)("h2",{id:"returntypetype"},(0,p.kt)("inlineCode",{parentName:"h2"},"ReturnType<Type>")),(0,p.kt)("p",null,"T\u1ea1o 1 type bao g\u1ed3m type \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1 c\u1ee7a function ",(0,p.kt)("inlineCode",{parentName:"p"},"Type")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Example")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"function f1(): { a: number; b: string };\n\ntype T0 = ReturnType<() => string>;\n// type T0 = string\n\ntype T1 = ReturnType<(s: string) => void>;\n// type T1 = void\n\ntype T2 = ReturnType<<T>() => T>;\n// type T2 = unknown\n\ntype T3 = ReturnType<<T extends U, U extends number[]>() => T>;\n// type T3 = number[]\n\ntype T4 = ReturnType<typeof f1>;\n// type T4 = {\n//     a: number;\n//     b: string;\n// }\n\ntype T5 = ReturnType<any>;\n// type T5 = any\n\ntype T6 = ReturnType<never>;\n// type T6 = never\n\ntype T7 = ReturnType<string>;\n// Type 'string' does not satisfy the constraint '(...args: any) => any'.\n// type T7 = any\n\ntype T8 = ReturnType<Function>;\n// Type 'Function' does not satisfy the constraint '(...args: any) => any'.\n// Type 'Function' provides no match for the signature '(...args: any): any'.\n// type T8 = any\n")))}y.isMDXComponent=!0}}]);