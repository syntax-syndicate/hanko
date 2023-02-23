"use strict";(self.webpackChunk_teamhanko_docs=self.webpackChunk_teamhanko_docs||[]).push([[569],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6525:(e,t,r)=>{r.d(t,{Z:()=>O});var n=r(7294),o=r(6010),i=r(3438),a=r(9960),c=r(3919),l=r(5999),s=r(4996);const u="cardContainer_S8oU",d="cardTitle_HoSo",p="cardDescription_c27F",m="cardIcon_whke";function f(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,o.Z)("card padding--lg",u)},r)}function g(e){let{href:t,icon:r,title:i,description:a,showDescription:c}=e;return n.createElement(f,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",d),title:i},r," ",i),a&&c&&n.createElement("p",{className:(0,o.Z)("text--truncate",p),title:a},a))}function y(e){var t;let{item:r}=e;const o=(0,i.Wl)(r);if(!o)return null;const a=n.createElement(w,{item:r});return n.createElement(g,{href:o,icon:a,title:r.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length}),showDescription:!(null==(t=r.customProps)||!t.docCardShowDescription)})}function h(e){var t;let{item:r}=e;const o=n.createElement(w,{item:r}),a=(0,i.xz)(r.docId??void 0);return n.createElement(g,{href:r.href,icon:o,title:r.label,description:null==a?void 0:a.description,showDescription:!(null==(t=r.customProps)||!t.docCardShowDescription)})}function b(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(y,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function w(e){var t;let r,{item:o}=e;if(null!=(t=o.customProps)&&t.docCardIconName){const e=o.customProps.docCardIconName;r=n.createElement("img",{alt:`${e} icon`,src:(0,s.Z)(`/img/icons/${e}.svg`)})}else r="category"===o.type?"\ud83d\uddc3\ufe0f":(0,c.Z)(o.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";return n.createElement("div",{className:m},r)}function v(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(O,{items:r.items,className:t})}function O(e){const{items:t,className:r}=e;if(!t)return n.createElement(v,e);const a=(0,i.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(b,{item:e})))))}},4618:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905)),i=r(6525);const a={title:"Social Login",sidebar_label:"Social Login",keywords:["social login","hanko"]},c=void 0,l={unversionedId:"guides/social/index",id:"guides/social/index",title:"Social Login",description:"Social Login allows using existing credentials from a third party provider (like",source:"@site/docs/guides/social/index.mdx",sourceDirName:"guides/social",slug:"/guides/social/",permalink:"/guides/social/",draft:!1,tags:[],version:"current",frontMatter:{title:"Social Login",sidebar_label:"Social Login",keywords:["social login","hanko"]},sidebar:"docs",previous:{title:"Mobile guide (Beta)",permalink:"/guides/mobile_guide"},next:{title:"Google",permalink:"/guides/social/google"}},s={},u=[],d={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Social Login allows using existing credentials from a third party provider (like\nGoogle or GitHub) to sign in to a third party website instead of explicitly creating a new account and new credentials\non that website. This simplifies registrations and logins for end users."),(0,o.kt)("p",null,"Social logins currently mainly target classic web applications (as opposed to, e.g. native mobile apps) and use\nthe OAuth ",(0,o.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc6749#section-1.3.1"},"authorization code flow"),"."),(0,o.kt)("p",null,"Get started with your favourite third party provider:"),(0,o.kt)(i.Z,{mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);