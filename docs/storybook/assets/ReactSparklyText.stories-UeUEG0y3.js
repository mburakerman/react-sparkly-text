import{r as d}from"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";var v={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j=d,R=Symbol.for("react.element"),g=Symbol.for("react.fragment"),E=Object.prototype.hasOwnProperty,T=j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,L={key:!0,ref:!0,__self:!0,__source:!0};function k(a,e,o){var r,s={},n=null,l=null;o!==void 0&&(n=""+o),e.key!==void 0&&(n=""+e.key),e.ref!==void 0&&(l=e.ref);for(r in e)E.call(e,r)&&!L.hasOwnProperty(r)&&(s[r]=e[r]);if(a&&a.defaultProps)for(r in e=a.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:R,type:a,key:n,ref:l,props:s,_owner:T.current}}u.Fragment=g;u.jsx=k;u.jsxs=k;v.exports=u;var t=v.exports;const w=30,c=({size:a,timeout:e=1e3})=>{const[o,r]=d.useState(!1),[s,n]=d.useState("#8BE9FD");return d.useEffect(()=>{const l=setInterval(()=>{r(!o),n(`#${Math.floor(Math.random()*16777215).toString(16)}`)},e);return()=>clearInterval(l)},[]),o?t.jsx("svg",{className:"react-sparkly-text__sparkle-svg-x",viewBox:"0 0 1200 1200",fill:s,width:`${a}px`,height:`${a}px`,style:{top:`calc(${Math.floor(Math.random()*41)-20}px)`,left:`calc(${Math.floor(Math.random()*121)-20}%)`},children:t.jsx("path",{d:"m611.04 866.16c17.418-61.09 50.25-116.68 95.352-161.42 45.098-44.742 100.94-77.133 162.17-94.062l38.641-10.68-38.641-10.68c-61.227-16.93-117.07-49.32-162.17-94.062-45.102-44.738-77.934-100.33-95.352-161.42l-11.039-38.641-11.039 38.641c-17.418 61.09-50.25 116.68-95.352 161.42-45.098 44.742-100.94 77.133-162.17 94.062l-38.641 10.68 38.641 10.68c61.227 16.93 117.07 49.32 162.17 94.062 45.102 44.738 77.934 100.33 95.352 161.42l11.039 38.641z"})}):null},m=({children:a,size:e=w})=>{const o=()=>Math.floor(Math.random()*1e3+2200);return t.jsxs("span",{className:"react-sparkly-text__container-x","data-testid":`react-sparkly-text-${Date.now()}`,children:[a,t.jsx(c,{size:e}),t.jsx(c,{size:e,timeout:o()}),t.jsx(c,{size:e,timeout:o()}),t.jsx(c,{size:e,timeout:o()})]})};try{m.displayName="ReactSparklyText",m.__docgenInfo={description:"",displayName:"ReactSparklyText",props:{size:{defaultValue:{value:"30"},description:"",name:"size",required:!1,type:{name:"number"}}}}}catch{}const $={title:"Components/ReactSparklyText",component:m},p={args:{children:t.jsx("span",{children:"Lorem"})}},i={render:()=>t.jsxs("div",{children:["Lorem ipsum dolor ",t.jsx(m,{size:10,children:"sit"})," amet."]}),args:{children:t.jsx("span",{children:"Lorem"})}};var x,f,_;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: <span>Lorem</span>
  }
}`,...(_=(f=p.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var h,y,S;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div>
      Lorem ipsum dolor <ReactSparklyText size={10}>sit</ReactSparklyText> amet.
    </div>,
  args: {
    children: <span>Lorem</span>
  }
}`,...(S=(y=i.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const D=["Default","WithText"];export{p as Default,i as WithText,D as __namedExportsOrder,$ as default};
