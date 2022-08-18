"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([[834],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=p(r),u=o,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||l;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},38:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const l={title:"Controller Components"},i=void 0,a={unversionedId:"mui/controller-components",id:"mui/controller-components",title:"Controller Components",description:"Controller TextFiled",source:"@site/docs/mui/controller-components.md",sourceDirName:"mui",slug:"/mui/controller-components",permalink:"/my-doc/mui/controller-components",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/mui/controller-components.md",tags:[],version:"current",frontMatter:{title:"Controller Components"},sidebar:"tutorialSidebar",previous:{title:"Button",permalink:"/my-doc/mui/button"},next:{title:"Text field",permalink:"/my-doc/mui/text-field"}},c={},p=[{value:"Controller TextFiled",id:"controller-textfiled",level:2}],s={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"controller-textfiled"},"Controller TextFiled"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import type { TextFieldProps } from "@mui/material/TextField";\nimport TextField from "@mui/material/TextField";\nimport type { Control, FieldPath, FieldValues } from "react-hook-form";\nimport { Controller } from "react-hook-form";\n// import { useTranslation } from "react-i18next";\n// import type { Dictionary } from "types/common";\nimport Typography from "@mui/material/Typography";\n\ninterface Props<T> extends Omit<TextFieldProps, "name"> {\n  control: Control<T>;\n  name: FieldPath<T>;\n  // interpolation?: Dictionary;\n}\n\nconst ControllerTextField = <T extends FieldValues>(props: Props<T>) => {\n  const { control, name, placeholder, disabled, ...rest } = props;\n  // const { control, name, placeholder, disabled, interpolation, ...rest } =\n  //   props;\n  // const { t } = useTranslation();\n\n  return (\n    <Controller\n      render={({ field, fieldState: { error } }) => (\n        <TextField\n          id={name}\n          fullWidth\n          error={Boolean(error)}\n          // helperText={error?.message && t(error.message, interpolation)}\n          helperText={\n            error?.message && (\n              <Typography variant="subtitle2" component="div" sx={{ mt: 1 }}>\n                {error.message}\n              </Typography>\n            )\n          }\n          placeholder={disabled ? void 0 : placeholder}\n          disabled={disabled}\n          {...field}\n          {...rest}\n        />\n      )}\n      name={name}\n      control={control}\n    />\n  );\n};\n\nexport default ControllerTextField;\n')))}m.isMDXComponent=!0}}]);