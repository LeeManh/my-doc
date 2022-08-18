"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([[667],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),y=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=y(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=y(r),f=o,m=u["".concat(c,".").concat(f)]||u[f]||l[f]||p;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,a=new Array(p);a[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var y=2;y<p;y++)a[y]=r[y];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3290:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>p,metadata:()=>i,toc:()=>y});var n=r(7462),o=(r(7294),r(3905));const p={},a="Keyof Type Operator",i={unversionedId:"typescript/keyof-operator",id:"typescript/keyof-operator",title:"Keyof Type Operator",description:"To\xe1n t\u1eed keyof Type",source:"@site/docs/typescript/keyof-operator.md",sourceDirName:"typescript",slug:"/typescript/keyof-operator",permalink:"/my-doc/typescript/keyof-operator",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/typescript/keyof-operator.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Index Signatures",permalink:"/my-doc/typescript/index-singature"},next:{title:"Mapped Types",permalink:"/my-doc/typescript/mapped-types"}},c={},y=[{value:"To\xe1n t\u1eed keyof Type",id:"to\xe1n-t\u1eed-keyof-type",level:2}],s={toc:y};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"keyof-type-operator"},"Keyof Type Operator"),(0,o.kt)("h2",{id:"to\xe1n-t\u1eed-keyof-type"},"To\xe1n t\u1eed keyof Type"),(0,o.kt)("p",null,"To\xe1n t\u1eed ",(0,o.kt)("inlineCode",{parentName:"p"},"keyof")," nh\u1eadn 1 type obj v\xe0 tr\u1ea3 v\u1ec1 1 string ho\u1eb7c union c\xe1c keys c\u1ee7a n\xf3."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'type Point = { x: number; y: number };\ntype P = keyof Point;\n// "x" | "y"\n')),(0,o.kt)("p",null,"N\u1ebfu type c\xf3 ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," ho\u1eb7c ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," index signature , ",(0,o.kt)("inlineCode",{parentName:"p"},"keyof")," s\u1ebd return nh\u1eefng type n\xe0y. (T\u1ee9c l\xe0 s\u1ebd tr\u1ea3 v\u1ec1 number ho\u1eb7c string | number)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type Arrayish = { [n: number]: unknown };\ntype A = keyof Arrayish;\n//hihglight-next-light\n// type A = number\n\ntype Mapish = { [k: string]: boolean };\ntype M = keyof Mapish;\n//hihglight-next-light\n// type M = string | number\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": \u1ede v\xed d\u1ee5 tr\xean , ",(0,o.kt)("strong",{parentName:"p"},"M l\xe0 string | number")," -- b\u1edfi v\xec c\xe1c keys c\u1ee7a Obj Javascript lu\xf4n lu\xf4n b\u1ecb \xe9p bu\u1ed9c chuy\u1ec3n th\xe0nh ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," , v\xec th\u1ebf obj","[0]"," gi\u1ed1ng nh\u01b0 obj",'["0"]',"."),(0,o.kt)("p",null,"keyof types \u0111\u1eb7c bi\u1ec7t h\u1eefu \xedch khi k\u1ebft h\u1ee3p v\u1edbi mapped types."))}l.isMDXComponent=!0}}]);