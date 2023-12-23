import{r as n}from"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";var v={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k=n,g=Symbol.for("react.element"),j=Symbol.for("react.fragment"),M=Object.prototype.hasOwnProperty,T=k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,L={key:!0,ref:!0,__self:!0,__source:!0};function R(a,e,t){var r,s={},c=null,l=null;t!==void 0&&(c=""+t),e.key!==void 0&&(c=""+e.key),e.ref!==void 0&&(l=e.ref);for(r in e)M.call(e,r)&&!L.hasOwnProperty(r)&&(s[r]=e[r]);if(a&&a.defaultProps)for(r in e=a.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:g,type:a,key:c,ref:l,props:s,_owner:T.current}}u.Fragment=j;u.jsx=R;u.jsxs=R;v.exports=u;var o=v.exports;const w=()=>{const[a,e]=n.useState(!1);return n.useEffect(()=>{const t=window.matchMedia("(prefers-reduced-motion: reduce)"),r=s=>{e(s.matches)};return t.addEventListener("change",r),()=>{t.removeEventListener("change",r)}},[]),{isReducedMotionEnabled:a}},O=30,d=({size:a,timeout:e=1e3})=>{const[t,r]=n.useState(!1),[s,c]=n.useState("#8BE9FD"),{isReducedMotionEnabled:l}=w();return n.useEffect(()=>{if(l)return;const E=setInterval(()=>{r(!t),c(`#${Math.floor(Math.random()*16777215).toString(16)}`)},e);return()=>clearInterval(E)},[l,t,e]),t?o.jsx("svg",{className:"react-sparkly-text__sparkle-svg-x",viewBox:"0 0 1200 1200",fill:s,width:`${a}px`,height:`${a}px`,style:{top:`calc(${Math.floor(Math.random()*41)-20}px)`,left:`calc(${Math.floor(Math.random()*121)-20}%)`},children:o.jsx("path",{d:"m611.04 866.16c17.418-61.09 50.25-116.68 95.352-161.42 45.098-44.742 100.94-77.133 162.17-94.062l38.641-10.68-38.641-10.68c-61.227-16.93-117.07-49.32-162.17-94.062-45.102-44.738-77.934-100.33-95.352-161.42l-11.039-38.641-11.039 38.641c-17.418 61.09-50.25 116.68-95.352 161.42-45.098 44.742-100.94 77.133-162.17 94.062l-38.641 10.68 38.641 10.68c61.227 16.93 117.07 49.32 162.17 94.062 45.102 44.738 77.934 100.33 95.352 161.42l11.039 38.641z"})}):null},m=({children:a,size:e=O})=>{const t=()=>Math.floor(Math.random()*1e3+2200);return o.jsxs("span",{className:"react-sparkly-text__container-x","data-testid":`react-sparkly-text-${Date.now()}`,children:[a,o.jsx(d,{size:e}),o.jsx(d,{size:e,timeout:t()}),o.jsx(d,{size:e,timeout:t()}),o.jsx(d,{size:e,timeout:t()})]})};try{m.displayName="ReactSparklyText",m.__docgenInfo={description:"",displayName:"ReactSparklyText",props:{size:{defaultValue:{value:"30"},description:"",name:"size",required:!1,type:{name:"number"}}}}}catch{}const $={title:"Components/ReactSparklyText",component:m},i={args:{children:o.jsx("span",{children:"Lorem"})}},p={render:()=>o.jsxs("div",{children:["Lorem ipsum dolor ",o.jsx(m,{size:10,children:"sit"})," amet."]}),args:{children:o.jsx("span",{children:"Lorem"})}};var x,f,h;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: <span>Lorem</span>
  }
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var _,y,S;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div>
      Lorem ipsum dolor <ReactSparklyText size={10}>sit</ReactSparklyText> amet.
    </div>,
  args: {
    children: <span>Lorem</span>
  }
}`,...(S=(y=p.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const D=["Default","WithText"];export{i as Default,p as WithText,D as __namedExportsOrder,$ as default};
