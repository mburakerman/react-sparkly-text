import{r as m}from"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";var v={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j=m,g=Symbol.for("react.element"),E=Symbol.for("react.fragment"),T=Object.prototype.hasOwnProperty,L=j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O={key:!0,ref:!0,__self:!0,__source:!0};function k(r,e,s){var t,a={},n=null,l=null;s!==void 0&&(n=""+s),e.key!==void 0&&(n=""+e.key),e.ref!==void 0&&(l=e.ref);for(t in e)T.call(e,t)&&!O.hasOwnProperty(t)&&(a[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)a[t]===void 0&&(a[t]=e[t]);return{$$typeof:g,type:r,key:n,ref:l,props:a,_owner:L.current}}u.Fragment=E;u.jsx=k;u.jsxs=k;v.exports=u;var o=v.exports;const R=30,p=({size:r,timeout:e=1e3})=>{const[s,t]=m.useState(!1),[a,n]=m.useState("#8BE9FD");return m.useEffect(()=>{const l=setInterval(()=>{t(!s),n(`#${Math.floor(Math.random()*16777215).toString(16)}`)},e);return()=>clearInterval(l)},[]),s?o.jsx("svg",{className:"react-sparkly-text__sparkle-svg-x",viewBox:"0 0 1200 1200",fill:a,width:`${r}px`,height:`${r}px`,style:{top:`calc(${Math.floor(Math.random()*41)-20}px)`,left:`calc(${Math.floor(Math.random()*121)-20}%)`},children:o.jsx("path",{d:"m611.04 866.16c17.418-61.09 50.25-116.68 95.352-161.42 45.098-44.742 100.94-77.133 162.17-94.062l38.641-10.68-38.641-10.68c-61.227-16.93-117.07-49.32-162.17-94.062-45.102-44.738-77.934-100.33-95.352-161.42l-11.039-38.641-11.039 38.641c-17.418 61.09-50.25 116.68-95.352 161.42-45.098 44.742-100.94 77.133-162.17 94.062l-38.641 10.68 38.641 10.68c61.227 16.93 117.07 49.32 162.17 94.062 45.102 44.738 77.934 100.33 95.352 161.42l11.039 38.641z"})}):null},d=({children:r,size:e=R})=>{const s=()=>Math.floor(Math.random()*1e3+2200);return o.jsxs("span",{className:"react-sparkly-text__container-x","data-testid":`sparkly-text-${r.toString()}`,children:[r,o.jsx(p,{size:e}),o.jsx(p,{size:e,timeout:s()}),o.jsx(p,{size:e,timeout:s()}),o.jsx(p,{size:e,timeout:s()})]})};try{d.displayName="SparklyText",d.__docgenInfo={description:"",displayName:"SparklyText",props:{size:{defaultValue:{value:"30"},description:"",name:"size",required:!1,type:{name:"number"}}}}}catch{}const $={title:"Components/SparklyText",component:d},c={args:{children:o.jsx("span",{children:"Lorem"})}},i={render:()=>o.jsxs("div",{children:["Lorem ipsum dolor ",o.jsx(d,{size:10,children:"sit"})," amet."]}),args:{children:o.jsx("span",{children:"Lorem"})}};var x,f,_;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: <span>Lorem</span>
  }
}`,...(_=(f=c.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var h,y,S;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div>
      Lorem ipsum dolor <SparklyText size={10}>sit</SparklyText> amet.
    </div>,
  args: {
    children: <span>Lorem</span>
  }
}`,...(S=(y=i.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const I=["Default","WithText"];export{c as Default,i as WithText,I as __namedExportsOrder,$ as default};
