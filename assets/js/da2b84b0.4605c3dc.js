"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([[992],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=l(t),d=o,f=g["".concat(c,".").concat(d)]||g[d]||u[d]||s;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=g;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6700:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const s={},a="Create class Axios",i={unversionedId:"axios/class-axios",id:"axios/class-axios",title:"Create class Axios",description:"Code",source:"@site/docs/axios/class-axios.md",sourceDirName:"axios",slug:"/axios/class-axios",permalink:"/my-doc/axios/class-axios",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/axios/class-axios.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"object",permalink:"/my-doc/yup/object"}},c={},l=[{value:"Code",id:"code",level:2},{value:"Usage",id:"usage",level:2}],p={toc:l};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-class-axios"},"Create class Axios"),(0,o.kt)("h2",{id:"code"},"Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=LocalStorage.ts",title:"LocalStorage.ts"},"class LocalStorage {\n  public get(key: string, fallback: any = null) {\n    try {\n      const item = window.localStorage.getItem(key);\n      return item ? JSON.parse(item) : fallback;\n    } catch (error) {\n      console.log(error);\n      return fallback;\n    }\n  }\n\n  public set(key: string, value: object | string, callback?: () => void) {\n    window.localStorage.setItem(key, JSON.stringify(value));\n    if (callback) {\n      callback();\n    }\n  }\n\n  public remove(key: string, callback?: () => void) {\n    window.localStorage.removeItem(key);\n    if (callback) {\n      callback();\n    }\n  }\n}\n\nexport default new LocalStorage();\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=HttpClient.ts",title:"HttpClient.ts"},'import type {\n  AxiosError,\n  AxiosInstance,\n  AxiosRequestConfig,\n  AxiosResponse,\n} from "axios";\nimport axios from "axios";\n\nimport LocalStorage from "./LocalStorage";\n\nconst baseURL = "http://localhost:3000";\n\nconst headers: AxiosRequestConfig["headers"] = {\n  "Content-Type": "application/json",\n};\n\nclass Axios {\n  private instance: AxiosInstance;\n  private interceptor: number | null = null;\n\n  constructor() {\n    console.log("::HttpClient");\n    const instance = axios.create({\n      baseURL,\n      headers,\n    });\n\n    // Request interceptor\n    instance.interceptors.request.use(\n      (config: AxiosRequestConfig) => {\n        const accessToken = LocalStorage.get("accessToken");\n        if (config.headers) {\n          if (accessToken) {\n            config.headers.Authorization = `Bearer ${accessToken}`;\n          } else {\n            delete config.headers.Authorization;\n          }\n        }\n        return config;\n      },\n      (error) => Promise.reject(error)\n    );\n\n    // Response interceptor\n    const interceptor = instance.interceptors.response.use(\n      (response: AxiosResponse) => response.data,\n      (error: AxiosError) => Promise.reject(error)\n    );\n\n    this.interceptor = interceptor;\n    this.instance = instance;\n  }\n\n  public get Instance(): AxiosInstance {\n    return this.instance;\n  }\n\n  private useInterceptor() {\n    if (this.interceptor === null) {\n      const interceptor = this.instance.interceptors.response.use(\n        (response: AxiosResponse) => response.data,\n        (error: AxiosError) => Promise.reject(error)\n      );\n      this.interceptor = interceptor;\n    }\n  }\n\n  private ejectInterceptor() {\n    if (this.interceptor !== null) {\n      this.instance.interceptors.response.eject(this.interceptor);\n      this.interceptor = null;\n    }\n  }\n\n  // Create\n  public post<T = any, R = T>(\n    url: string,\n    data?: T,\n    config?: AxiosRequestConfig\n  ): Promise<R> {\n    this.useInterceptor();\n    return this.Instance.post<T, R>(url, data, config);\n  }\n\n  // Read\n  public get<T = any, R = T>(\n    url: string,\n    config?: AxiosRequestConfig\n  ): Promise<R> {\n    this.useInterceptor();\n    return this.Instance.get<T, R>(url, config);\n  }\n\n  // Update\n  public put<T = any, R = T>(\n    url: string,\n    data?: T,\n    config?: AxiosRequestConfig\n  ): Promise<R> {\n    this.useInterceptor();\n    return this.Instance.put<T, R>(url, data, config);\n  }\n\n  // Delete\n  public delete<T = any, R = T>(\n    url: string,\n    config?: AxiosRequestConfig\n  ): Promise<R> {\n    this.useInterceptor();\n    return this.Instance.delete<T, R>(url, config);\n  }\n\n  // Post with full response\n  public pull<T = any, R = T>(\n    url: string,\n    data?: T,\n    config?: AxiosRequestConfig\n  ): Promise<R> {\n    this.ejectInterceptor();\n    return this.Instance.post<T, R>(url, data, config);\n  }\n}\n\nconst HttpClient = new Axios();\nexport default HttpClient;\n')),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'// Sign in with email and password\nexport interface SignInWithEmailAndPasswordParams {\n  username: string;\n  password: string;\n  rememberLogin: boolean;\n}\n\nconst signInWithEmailAndPassword = async (\n  params: SignInWithEmailAndPasswordParams\n) => {\n  return HttpClient.post<typeof params, SignInWithEmailAndPasswordResponse>(\n    "/shared/Auth/Login",\n    params\n  );\n};\n')))}u.isMDXComponent=!0}}]);