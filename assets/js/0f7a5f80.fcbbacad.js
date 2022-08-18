"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([[694],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),y=s(r),d=a,m=y["".concat(p,".").concat(d)]||y[d]||l[d]||i;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},6207:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={},c="Index Signatures",o={unversionedId:"typescript/index-singature",id:"typescript/index-singature",title:"Index Signatures",description:"\u0110\u01b0\u1ee3c s\u1eed d\u1ee5ng khi kh\xf4ng bi\u1ebft t\xean c\u1ee7a t\u1ea5t c\u1ea3 thu\u1ed9c t\xednh tr\u01b0\u1edbc, nh\u01b0ng bi\u1ebft shape c\u1ee7a values",source:"@site/docs/typescript/index-singature.md",sourceDirName:"typescript",slug:"/typescript/index-singature",permalink:"/my-doc/typescript/index-singature",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/typescript/index-singature.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Utility Types",permalink:"/my-doc/typescript/utility-types"},next:{title:"Keyof Type Operator",permalink:"/my-doc/typescript/keyof-operator"}},p={},s=[],u={toc:s};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"index-signatures"},"Index Signatures"),(0,a.kt)("p",null,"\u0110\u01b0\u1ee3c s\u1eed d\u1ee5ng khi kh\xf4ng bi\u1ebft t\xean c\u1ee7a t\u1ea5t c\u1ea3 thu\u1ed9c t\xednh tr\u01b0\u1edbc, nh\u01b0ng bi\u1ebft shape c\u1ee7a values"),(0,a.kt)("p",null,"Thu\u1ed9c t\xednh (property) type b\u1eaft bu\u1ed9c ph\u1ea3i l\xe0 ",(0,a.kt)("strong",{parentName:"p"},"string | number")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"V\xed d\u1ee5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// t\u1ecda 1 object type c\xf3 property l\xe0 number, value l\xe0 string\ninterface StringArray {\n  [index: number]: string;\n}\n\ndeclare function getStringArray(): StringArray;\n\nconst myArray: StringArray = getStringArray();\nconst secondItem = myArray[1];\n// const secondItem: string\n")))}l.isMDXComponent=!0}}]);