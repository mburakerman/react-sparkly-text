import{r as z,R as st}from"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";var xe={exports:{}},It={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tr=z,er=Symbol.for("react.element"),rr=Symbol.for("react.fragment"),nr=Object.prototype.hasOwnProperty,or=tr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sr={key:!0,ref:!0,__self:!0,__source:!0};function _e(t,e,r){var n,o={},s=null,a=null;r!==void 0&&(s=""+r),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(n in e)nr.call(e,n)&&!sr.hasOwnProperty(n)&&(o[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)o[n]===void 0&&(o[n]=e[n]);return{$$typeof:er,type:t,key:s,ref:a,props:o,_owner:or.current}}It.Fragment=rr;It.jsx=_e;It.jsxs=_e;xe.exports=It;var O=xe.exports,k=function(){return k=Object.assign||function(e){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},k.apply(this,arguments)};function _t(t,e,r){if(r||arguments.length===2)for(var n=0,o=e.length,s;n<o;n++)(s||!(n in e))&&(s||(s=Array.prototype.slice.call(e,0,n)),s[n]=e[n]);return t.concat(s||Array.prototype.slice.call(e))}var v="-ms-",ot="-moz-",d="-webkit-",Ce="comm",kt="rule",Zt="decl",ar="@import",Ee="@keyframes",ir="@layer",cr=Math.abs,Vt=String.fromCharCode,Gt=Object.assign;function ur(t,e){return I(t,0)^45?(((e<<2^I(t,0))<<2^I(t,1))<<2^I(t,2))<<2^I(t,3):0}function Re(t){return t.trim()}function T(t,e){return(t=e.exec(t))?t[0]:t}function u(t,e,r){return t.replace(e,r)}function vt(t,e){return t.indexOf(e)}function I(t,e){return t.charCodeAt(e)|0}function H(t,e,r){return t.slice(e,r)}function j(t){return t.length}function Ie(t){return t.length}function nt(t,e){return e.push(t),t}function fr(t,e){return t.map(e).join("")}function re(t,e){return t.filter(function(r){return!T(r,e)})}var At=1,Z=1,ke=0,P=0,E=0,X="";function $t(t,e,r,n,o,s,a,i){return{value:t,root:e,parent:r,type:n,props:o,children:s,line:At,column:Z,length:a,return:"",siblings:i}}function F(t,e){return Gt($t("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function q(t){for(;t.root;)t=F(t.root,{children:[t]});nt(t,t.siblings)}function pr(){return E}function dr(){return E=P>0?I(X,--P):0,Z--,E===10&&(Z=1,At--),E}function N(){return E=P<ke?I(X,P++):0,Z++,E===10&&(Z=1,At++),E}function W(){return I(X,P)}function St(){return P}function Pt(t,e){return H(X,t,e)}function Bt(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function lr(t){return At=Z=1,ke=j(X=t),P=0,[]}function hr(t){return X="",t}function Mt(t){return Re(Pt(P-1,Wt(t===91?t+2:t===40?t+1:t)))}function mr(t){for(;(E=W())&&E<33;)N();return Bt(t)>2||Bt(E)>3?"":" "}function gr(t,e){for(;--e&&N()&&!(E<48||E>102||E>57&&E<65||E>70&&E<97););return Pt(t,St()+(e<6&&W()==32&&N()==32))}function Wt(t){for(;N();)switch(E){case t:return P;case 34:case 39:t!==34&&t!==39&&Wt(E);break;case 40:t===41&&Wt(t);break;case 92:N();break}return P}function yr(t,e){for(;N()&&t+E!==57;)if(t+E===84&&W()===47)break;return"/*"+Pt(e,P-1)+"*"+Vt(t===47?t:N())}function vr(t){for(;!Bt(W());)N();return Pt(t,P)}function Sr(t){return hr(bt("",null,null,null,[""],t=lr(t),0,[0],t))}function bt(t,e,r,n,o,s,a,i,c){for(var p=0,l=0,m=a,g=0,h=0,S=0,_=1,A=1,C=1,w=0,b="",x=o,R=s,y=n,f=b;A;)switch(S=w,w=N()){case 40:if(S!=108&&I(f,m-1)==58){vt(f+=u(Mt(w),"&","&\f"),"&\f")!=-1&&(C=-1);break}case 34:case 39:case 91:f+=Mt(w);break;case 9:case 10:case 13:case 32:f+=mr(S);break;case 92:f+=gr(St()-1,7);continue;case 47:switch(W()){case 42:case 47:nt(br(yr(N(),St()),e,r,c),c);break;default:f+="/"}break;case 123*_:i[p++]=j(f)*C;case 125*_:case 59:case 0:switch(w){case 0:case 125:A=0;case 59+l:C==-1&&(f=u(f,/\f/g,"")),h>0&&j(f)-m&&nt(h>32?oe(f+";",n,r,m-1,c):oe(u(f," ","")+";",n,r,m-2,c),c);break;case 59:f+=";";default:if(nt(y=ne(f,e,r,p,l,o,i,b,x=[],R=[],m,s),s),w===123)if(l===0)bt(f,e,y,y,x,s,m,i,R);else switch(g===99&&I(f,3)===110?100:g){case 100:case 108:case 109:case 115:bt(t,y,y,n&&nt(ne(t,y,y,0,0,o,i,b,o,x=[],m,R),R),o,R,m,i,n?x:R);break;default:bt(f,y,y,y,[""],R,0,i,R)}}p=l=h=0,_=C=1,b=f="",m=a;break;case 58:m=1+j(f),h=S;default:if(_<1){if(w==123)--_;else if(w==125&&_++==0&&dr()==125)continue}switch(f+=Vt(w),w*_){case 38:C=l>0?1:(f+="\f",-1);break;case 44:i[p++]=(j(f)-1)*C,C=1;break;case 64:W()===45&&(f+=Mt(N())),g=W(),l=m=j(b=f+=vr(St())),w++;break;case 45:S===45&&j(f)==2&&(_=0)}}return s}function ne(t,e,r,n,o,s,a,i,c,p,l,m){for(var g=o-1,h=o===0?s:[""],S=Ie(h),_=0,A=0,C=0;_<n;++_)for(var w=0,b=H(t,g+1,g=cr(A=a[_])),x=t;w<S;++w)(x=Re(A>0?h[w]+" "+b:u(b,/&\f/g,h[w])))&&(c[C++]=x);return $t(t,e,r,o===0?kt:i,c,p,l,m)}function br(t,e,r,n){return $t(t,e,r,Ce,Vt(pr()),H(t,2,-2),0,n)}function oe(t,e,r,n,o){return $t(t,e,r,Zt,H(t,0,n),H(t,n+1,-1),n,o)}function Ae(t,e,r){switch(ur(t,e)){case 5103:return d+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return d+t+t;case 4789:return ot+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return d+t+ot+t+v+t+t;case 5936:switch(I(t,e+11)){case 114:return d+t+v+u(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return d+t+v+u(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return d+t+v+u(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return d+t+v+t+t;case 6165:return d+t+v+"flex-"+t+t;case 5187:return d+t+u(t,/(\w+).+(:[^]+)/,d+"box-$1$2"+v+"flex-$1$2")+t;case 5443:return d+t+v+"flex-item-"+u(t,/flex-|-self/g,"")+(T(t,/flex-|baseline/)?"":v+"grid-row-"+u(t,/flex-|-self/g,""))+t;case 4675:return d+t+v+"flex-line-pack"+u(t,/align-content|flex-|-self/g,"")+t;case 5548:return d+t+v+u(t,"shrink","negative")+t;case 5292:return d+t+v+u(t,"basis","preferred-size")+t;case 6060:return d+"box-"+u(t,"-grow","")+d+t+v+u(t,"grow","positive")+t;case 4554:return d+u(t,/([^-])(transform)/g,"$1"+d+"$2")+t;case 6187:return u(u(u(t,/(zoom-|grab)/,d+"$1"),/(image-set)/,d+"$1"),t,"")+t;case 5495:case 3959:return u(t,/(image-set\([^]*)/,d+"$1$`$1");case 4968:return u(u(t,/(.+:)(flex-)?(.*)/,d+"box-pack:$3"+v+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+d+t+t;case 4200:if(!T(t,/flex-|baseline/))return v+"grid-column-align"+H(t,e)+t;break;case 2592:case 3360:return v+u(t,"template-","")+t;case 4384:case 3616:return r&&r.some(function(n,o){return e=o,T(n.props,/grid-\w+-end/)})?~vt(t+(r=r[e].value),"span")?t:v+u(t,"-start","")+t+v+"grid-row-span:"+(~vt(r,"span")?T(r,/\d+/):+T(r,/\d+/)-+T(t,/\d+/))+";":v+u(t,"-start","")+t;case 4896:case 4128:return r&&r.some(function(n){return T(n.props,/grid-\w+-start/)})?t:v+u(u(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return u(t,/(.+)-inline(.+)/,d+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(j(t)-1-e>6)switch(I(t,e+1)){case 109:if(I(t,e+4)!==45)break;case 102:return u(t,/(.+:)(.+)-([^]+)/,"$1"+d+"$2-$3$1"+ot+(I(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~vt(t,"stretch")?Ae(u(t,"stretch","fill-available"),e,r)+t:t}break;case 5152:case 5920:return u(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,o,s,a,i,c,p){return v+o+":"+s+p+(a?v+o+"-span:"+(i?c:+c-+s)+p:"")+t});case 4949:if(I(t,e+6)===121)return u(t,":",":"+d)+t;break;case 6444:switch(I(t,I(t,14)===45?18:11)){case 120:return u(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+d+(I(t,14)===45?"inline-":"")+"box$3$1"+d+"$2$3$1"+v+"$2box$3")+t;case 100:return u(t,":",":"+v)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return u(t,"scroll-","scroll-snap-")+t}return t}function Ct(t,e){for(var r="",n=0;n<t.length;n++)r+=e(t[n],n,t,e)||"";return r}function wr(t,e,r,n){switch(t.type){case ir:if(t.children.length)break;case ar:case Zt:return t.return=t.return||t.value;case Ce:return"";case Ee:return t.return=t.value+"{"+Ct(t.children,n)+"}";case kt:if(!j(t.value=t.props.join(",")))return""}return j(r=Ct(t.children,n))?t.return=t.value+"{"+r+"}":""}function xr(t){var e=Ie(t);return function(r,n,o,s){for(var a="",i=0;i<e;i++)a+=t[i](r,n,o,s)||"";return a}}function _r(t){return function(e){e.root||(e=e.return)&&t(e)}}function Cr(t,e,r,n){if(t.length>-1&&!t.return)switch(t.type){case Zt:t.return=Ae(t.value,t.length,r);return;case Ee:return Ct([F(t,{value:u(t.value,"@","@"+d)})],n);case kt:if(t.length)return fr(r=t.props,function(o){switch(T(o,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":q(F(t,{props:[u(o,/:(read-\w+)/,":"+ot+"$1")]})),q(F(t,{props:[o]})),Gt(t,{props:re(r,n)});break;case"::placeholder":q(F(t,{props:[u(o,/:(plac\w+)/,":"+d+"input-$1")]})),q(F(t,{props:[u(o,/:(plac\w+)/,":"+ot+"$1")]})),q(F(t,{props:[u(o,/:(plac\w+)/,v+"input-$1")]})),q(F(t,{props:[o]})),Gt(t,{props:re(r,n)});break}return""})}}var Er={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},$={},V=typeof process<"u"&&$!==void 0&&($.REACT_APP_SC_ATTR||$.SC_ATTR)||"data-styled",$e="active",Pe="data-styled-version",Ot="6.1.3",Kt=`/*!sc*/
`,Jt=typeof window<"u"&&"HTMLElement"in window,Rr=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&$!==void 0&&$.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&$.REACT_APP_SC_DISABLE_SPEEDY!==""?$.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&$.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&$!==void 0&&$.SC_DISABLE_SPEEDY!==void 0&&$.SC_DISABLE_SPEEDY!==""&&$.SC_DISABLE_SPEEDY!=="false"&&$.SC_DISABLE_SPEEDY),Nt=Object.freeze([]),K=Object.freeze({});function Ir(t,e,r){return r===void 0&&(r=K),t.theme!==r.theme&&t.theme||e||r.theme}var Oe=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),kr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ar=/(^-|-$)/g;function se(t){return t.replace(kr,"-").replace(Ar,"")}var $r=/(a)(d)/gi,lt=52,ae=function(t){return String.fromCharCode(t+(t>25?39:97))};function Yt(t){var e,r="";for(e=Math.abs(t);e>lt;e=e/lt|0)r=ae(e%lt)+r;return(ae(e%lt)+r).replace($r,"$1-$2")}var Lt,Ne=5381,U=function(t,e){for(var r=e.length;r;)t=33*t^e.charCodeAt(--r);return t},je=function(t){return U(Ne,t)};function Pr(t){return Yt(je(t)>>>0)}function Or(t){return t.displayName||t.name||"Component"}function Ft(t){return typeof t=="string"&&!0}var Te=typeof Symbol=="function"&&Symbol.for,De=Te?Symbol.for("react.memo"):60115,Nr=Te?Symbol.for("react.forward_ref"):60112,jr={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Tr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Me={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Dr=((Lt={})[Nr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Lt[De]=Me,Lt);function ie(t){return("type"in(e=t)&&e.type.$$typeof)===De?Me:"$$typeof"in t?Dr[t.$$typeof]:jr;var e}var Mr=Object.defineProperty,Lr=Object.getOwnPropertyNames,ce=Object.getOwnPropertySymbols,Fr=Object.getOwnPropertyDescriptor,zr=Object.getPrototypeOf,ue=Object.prototype;function Le(t,e,r){if(typeof e!="string"){if(ue){var n=zr(e);n&&n!==ue&&Le(t,n,r)}var o=Lr(e);ce&&(o=o.concat(ce(e)));for(var s=ie(t),a=ie(e),i=0;i<o.length;++i){var c=o[i];if(!(c in Tr||r&&r[c]||a&&c in a||s&&c in s)){var p=Fr(e,c);try{Mr(t,c,p)}catch{}}}}return t}function J(t){return typeof t=="function"}function Xt(t){return typeof t=="object"&&"styledComponentId"in t}function B(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function fe(t,e){if(t.length===0)return"";for(var r=t[0],n=1;n<t.length;n++)r+=e?e+t[n]:t[n];return r}function at(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function qt(t,e,r){if(r===void 0&&(r=!1),!r&&!at(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var n=0;n<e.length;n++)t[n]=qt(t[n],e[n]);else if(at(e))for(var n in e)t[n]=qt(t[n],e[n]);return t}function Qt(t,e){Object.defineProperty(t,"toString",{value:e})}function it(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var Gr=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var r=0,n=0;n<e;n++)r+=this.groupSizes[n];return r},t.prototype.insertRules=function(e,r){if(e>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,s=o;e>=s;)if((s<<=1)<0)throw it(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(n),this.length=s;for(var a=o;a<s;a++)this.groupSizes[a]=0}for(var i=this.indexOfGroup(e+1),c=(a=0,r.length);a<c;a++)this.tag.insertRule(i,r[a])&&(this.groupSizes[e]++,i++)},t.prototype.clearGroup=function(e){if(e<this.length){var r=this.groupSizes[e],n=this.indexOfGroup(e),o=n+r;this.groupSizes[e]=0;for(var s=n;s<o;s++)this.tag.deleteRule(n)}},t.prototype.getGroup=function(e){var r="";if(e>=this.length||this.groupSizes[e]===0)return r;for(var n=this.groupSizes[e],o=this.indexOfGroup(e),s=o+n,a=o;a<s;a++)r+="".concat(this.tag.getRule(a)).concat(Kt);return r},t}(),wt=new Map,Et=new Map,xt=1,ht=function(t){if(wt.has(t))return wt.get(t);for(;Et.has(xt);)xt++;var e=xt++;return wt.set(t,e),Et.set(e,t),e},Br=function(t,e){xt=e+1,wt.set(t,e),Et.set(e,t)},Wr="style[".concat(V,"][").concat(Pe,'="').concat(Ot,'"]'),Yr=new RegExp("^".concat(V,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),qr=function(t,e,r){for(var n,o=r.split(","),s=0,a=o.length;s<a;s++)(n=o[s])&&t.registerName(e,n)},Ur=function(t,e){for(var r,n=((r=e.textContent)!==null&&r!==void 0?r:"").split(Kt),o=[],s=0,a=n.length;s<a;s++){var i=n[s].trim();if(i){var c=i.match(Yr);if(c){var p=0|parseInt(c[1],10),l=c[2];p!==0&&(Br(l,p),qr(t,l,c[3]),t.getTag().insertRules(p,o)),o.length=0}else o.push(i)}}};function Hr(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Fe=function(t){var e=document.head,r=t||e,n=document.createElement("style"),o=function(i){var c=Array.from(i.querySelectorAll("style[".concat(V,"]")));return c[c.length-1]}(r),s=o!==void 0?o.nextSibling:null;n.setAttribute(V,$e),n.setAttribute(Pe,Ot);var a=Hr();return a&&n.setAttribute("nonce",a),r.insertBefore(n,s),n},Zr=function(){function t(e){this.element=Fe(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,o=0,s=n.length;o<s;o++){var a=n[o];if(a.ownerNode===r)return a}throw it(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,r){try{return this.sheet.insertRule(r,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var r=this.sheet.cssRules[e];return r&&r.cssText?r.cssText:""},t}(),Vr=function(){function t(e){this.element=Fe(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,r){if(e<=this.length&&e>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),Kr=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,r){return e<=this.length&&(this.rules.splice(e,0,r),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),pe=Jt,Jr={isServer:!Jt,useCSSOMInjection:!Rr},ze=function(){function t(e,r,n){e===void 0&&(e=K),r===void 0&&(r={});var o=this;this.options=k(k({},Jr),e),this.gs=r,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Jt&&pe&&(pe=!1,function(s){for(var a=document.querySelectorAll(Wr),i=0,c=a.length;i<c;i++){var p=a[i];p&&p.getAttribute(V)!==$e&&(Ur(s,p),p.parentNode&&p.parentNode.removeChild(p))}}(this)),Qt(this,function(){return function(s){for(var a=s.getTag(),i=a.length,c="",p=function(m){var g=function(C){return Et.get(C)}(m);if(g===void 0)return"continue";var h=s.names.get(g),S=a.getGroup(m);if(h===void 0||S.length===0)return"continue";var _="".concat(V,".g").concat(m,'[id="').concat(g,'"]'),A="";h!==void 0&&h.forEach(function(C){C.length>0&&(A+="".concat(C,","))}),c+="".concat(S).concat(_,'{content:"').concat(A,'"}').concat(Kt)},l=0;l<i;l++)p(l);return c}(o)})}return t.registerId=function(e){return ht(e)},t.prototype.reconstructWithOptions=function(e,r){return r===void 0&&(r=!0),new t(k(k({},this.options),e),this.gs,r&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(r){var n=r.useCSSOMInjection,o=r.target;return r.isServer?new Kr(o):n?new Zr(o):new Vr(o)}(this.options),new Gr(e)));var e},t.prototype.hasNameForId=function(e,r){return this.names.has(e)&&this.names.get(e).has(r)},t.prototype.registerName=function(e,r){if(ht(e),this.names.has(e))this.names.get(e).add(r);else{var n=new Set;n.add(r),this.names.set(e,n)}},t.prototype.insertRules=function(e,r,n){this.registerName(e,r),this.getTag().insertRules(ht(e),n)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(ht(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),Xr=/&/g,Qr=/^\s*\/\/.*$/gm;function Ge(t,e){return t.map(function(r){return r.type==="rule"&&(r.value="".concat(e," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(e," ")),r.props=r.props.map(function(n){return"".concat(e," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Ge(r.children,e)),r})}function tn(t){var e,r,n,o=t===void 0?K:t,s=o.options,a=s===void 0?K:s,i=o.plugins,c=i===void 0?Nt:i,p=function(g,h,S){return S===r||S.startsWith(r)&&S.endsWith(r)&&S.replaceAll(r,"").length>0?".".concat(e):g},l=c.slice();l.push(function(g){g.type===kt&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(Xr,r).replace(n,p))}),a.prefix&&l.push(Cr),l.push(wr);var m=function(g,h,S,_){h===void 0&&(h=""),S===void 0&&(S=""),_===void 0&&(_="&"),e=_,r=h,n=new RegExp("\\".concat(r,"\\b"),"g");var A=g.replace(Qr,""),C=Sr(S||h?"".concat(S," ").concat(h," { ").concat(A," }"):A);a.namespace&&(C=Ge(C,a.namespace));var w=[];return Ct(C,xr(l.concat(_r(function(b){return w.push(b)})))),w};return m.hash=c.length?c.reduce(function(g,h){return h.name||it(15),U(g,h.name)},Ne).toString():"",m}var en=new ze,Ut=tn(),Be=st.createContext({shouldForwardProp:void 0,styleSheet:en,stylis:Ut});Be.Consumer;st.createContext(void 0);function de(){return z.useContext(Be)}var rn=function(){function t(e,r){var n=this;this.inject=function(o,s){s===void 0&&(s=Ut);var a=n.name+s.hash;o.hasNameForId(n.id,a)||o.insertRules(n.id,a,s(n.rules,a,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=r,Qt(this,function(){throw it(12,String(n.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Ut),this.name+e.hash},t}(),nn=function(t){return t>="A"&&t<="Z"};function le(t){for(var e="",r=0;r<t.length;r++){var n=t[r];if(r===1&&n==="-"&&t[0]==="-")return t;nn(n)?e+="-"+n.toLowerCase():e+=n}return e.startsWith("ms-")?"-"+e:e}var We=function(t){return t==null||t===!1||t===""},Ye=function(t){var e,r,n=[];for(var o in t){var s=t[o];t.hasOwnProperty(o)&&!We(s)&&(Array.isArray(s)&&s.isCss||J(s)?n.push("".concat(le(o),":"),s,";"):at(s)?n.push.apply(n,_t(_t(["".concat(o," {")],Ye(s),!1),["}"],!1)):n.push("".concat(le(o),": ").concat((e=o,(r=s)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||e in Er||e.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function Y(t,e,r,n){if(We(t))return[];if(Xt(t))return[".".concat(t.styledComponentId)];if(J(t)){if(!J(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var o=t(e);return Y(o,e,r,n)}var s;return t instanceof rn?r?(t.inject(r,n),[t.getName(n)]):[t]:at(t)?Ye(t):Array.isArray(t)?Array.prototype.concat.apply(Nt,t.map(function(a){return Y(a,e,r,n)})):[t.toString()]}function on(t){for(var e=0;e<t.length;e+=1){var r=t[e];if(J(r)&&!Xt(r))return!1}return!0}var sn=je(Ot),an=function(){function t(e,r,n){this.rules=e,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&on(e),this.componentId=r,this.baseHash=U(sn,r),this.baseStyle=n,ze.registerId(r)}return t.prototype.generateAndInjectStyles=function(e,r,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=B(o,this.staticRulesId);else{var s=fe(Y(this.rules,e,r,n)),a=Yt(U(this.baseHash,s)>>>0);if(!r.hasNameForId(this.componentId,a)){var i=n(s,".".concat(a),void 0,this.componentId);r.insertRules(this.componentId,a,i)}o=B(o,a),this.staticRulesId=a}else{for(var c=U(this.baseHash,n.hash),p="",l=0;l<this.rules.length;l++){var m=this.rules[l];if(typeof m=="string")p+=m;else if(m){var g=fe(Y(m,e,r,n));c=U(c,g+l),p+=g}}if(p){var h=Yt(c>>>0);r.hasNameForId(this.componentId,h)||r.insertRules(this.componentId,h,n(p,".".concat(h),void 0,this.componentId)),o=B(o,h)}}return o},t}(),qe=st.createContext(void 0);qe.Consumer;var zt={};function cn(t,e,r){var n=Xt(t),o=t,s=!Ft(t),a=e.attrs,i=a===void 0?Nt:a,c=e.componentId,p=c===void 0?function(x,R){var y=typeof x!="string"?"sc":se(x);zt[y]=(zt[y]||0)+1;var f="".concat(y,"-").concat(Pr(Ot+y+zt[y]));return R?"".concat(R,"-").concat(f):f}(e.displayName,e.parentComponentId):c,l=e.displayName,m=l===void 0?function(x){return Ft(x)?"styled.".concat(x):"Styled(".concat(Or(x),")")}(t):l,g=e.displayName&&e.componentId?"".concat(se(e.displayName),"-").concat(e.componentId):e.componentId||p,h=n&&o.attrs?o.attrs.concat(i).filter(Boolean):i,S=e.shouldForwardProp;if(n&&o.shouldForwardProp){var _=o.shouldForwardProp;if(e.shouldForwardProp){var A=e.shouldForwardProp;S=function(x,R){return _(x,R)&&A(x,R)}}else S=_}var C=new an(r,g,n?o.componentStyle:void 0);function w(x,R){return function(y,f,Q){var ct=y.attrs,He=y.componentStyle,Ze=y.defaultProps,Ve=y.foldedComponentIds,Ke=y.styledComponentId,Je=y.target,Xe=st.useContext(qe),Qe=de(),jt=y.shouldForwardProp||Qe.shouldForwardProp,D=function(ft,et,pt){for(var rt,G=k(k({},et),{className:void 0,theme:pt}),Dt=0;Dt<ft.length;Dt+=1){var dt=J(rt=ft[Dt])?rt(G):rt;for(var L in dt)G[L]=L==="className"?B(G[L],dt[L]):L==="style"?k(k({},G[L]),dt[L]):dt[L]}return et.className&&(G.className=B(G.className,et.className)),G}(ct,f,Ir(f,Xe,Ze)||K),ut=D.as||Je,tt={};for(var M in D)D[M]===void 0||M[0]==="$"||M==="as"||M==="theme"||(M==="forwardedAs"?tt.as=D.forwardedAs:jt&&!jt(M,ut)||(tt[M]=D[M]));var ee=function(ft,et){var pt=de(),rt=ft.generateAndInjectStyles(et,pt.styleSheet,pt.stylis);return rt}(He,D),Tt=B(Ve,Ke);return ee&&(Tt+=" "+ee),D.className&&(Tt+=" "+D.className),tt[Ft(ut)&&!Oe.has(ut)?"class":"className"]=Tt,tt.ref=Q,z.createElement(ut,tt)}(b,x,R)}w.displayName=m;var b=st.forwardRef(w);return b.attrs=h,b.componentStyle=C,b.displayName=m,b.shouldForwardProp=S,b.foldedComponentIds=n?B(o.foldedComponentIds,o.styledComponentId):"",b.styledComponentId=g,b.target=n?o.target:t,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=n?function(R){for(var y=[],f=1;f<arguments.length;f++)y[f-1]=arguments[f];for(var Q=0,ct=y;Q<ct.length;Q++)qt(R,ct[Q],!0);return R}({},o.defaultProps,x):x}}),Qt(b,function(){return".".concat(b.styledComponentId)}),s&&Le(b,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function he(t,e){for(var r=[t[0]],n=0,o=e.length;n<o;n+=1)r.push(e[n],t[n+1]);return r}var me=function(t){return Object.assign(t,{isCss:!0})};function un(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(J(t)||at(t))return me(Y(he(Nt,_t([t],e,!0))));var n=t;return e.length===0&&n.length===1&&typeof n[0]=="string"?Y(n):me(Y(he(n,e)))}function Ht(t,e,r){if(r===void 0&&(r=K),!e)throw it(1,e);var n=function(o){for(var s=[],a=1;a<arguments.length;a++)s[a-1]=arguments[a];return t(e,r,un.apply(void 0,_t([o],s,!1)))};return n.attrs=function(o){return Ht(t,e,k(k({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n.withConfig=function(o){return Ht(t,e,k(k({},r),o))},n}var Ue=function(t){return Ht(cn,t)},te=Ue;Oe.forEach(function(t){te[t]=Ue(t)});const fn=()=>{const[t,e]=z.useState(!1);return z.useEffect(()=>{const r=window.matchMedia("(prefers-reduced-motion: reduce)"),n=o=>{e(o.matches)};return r.addEventListener("change",n),()=>{r.removeEventListener("change",n)}},[]),{isReducedMotionEnabled:t}},pn=30,dn=te.span.withConfig({displayName:"StyledContainer",componentId:"sc-10qls0q-0"})(["position:relative;width:max-content;font-weight:bolder;"]),ln=te.svg.withConfig({displayName:"StyledSparkleSVG",componentId:"sc-10qls0q-1"})(["position:absolute;opacity:0;animation:sparkle-animation-x 0.5s ease-in-out infinite alternate;@keyframes sparkle-animation-x{0%{opacity:0;transform:scale(0.25);}100%{opacity:1;transform:rotateZ(50deg) scale(",");}}@media (prefers-reduced-motion:reduce){animation:none;opacity:1;transform:rotateZ(30deg) scale(1);}"],({animationScale:t})=>t),mt=({size:t,timeout:e=1e3})=>{const[r,n]=z.useState(!1),[o,s]=z.useState("#8BE9FD"),{isReducedMotionEnabled:a}=fn();return z.useEffect(()=>{if(a)return;const i=setInterval(()=>{n(!r),s(`#${Math.floor(Math.random()*16777215).toString(16)}`)},e);return()=>clearInterval(i)},[a,r,e]),r?O.jsx(ln,{viewBox:"0 0 1200 1200",fill:o,width:`${t}px`,height:`${t}px`,animationScale:1+Math.random()*.5,style:{top:`calc(${Math.floor(Math.random()*41)-20}px)`,left:`calc(${Math.floor(Math.random()*121)-20}%)`},children:O.jsx("path",{d:"m611.04 866.16c17.418-61.09 50.25-116.68 95.352-161.42 45.098-44.742 100.94-77.133 162.17-94.062l38.641-10.68-38.641-10.68c-61.227-16.93-117.07-49.32-162.17-94.062-45.102-44.738-77.934-100.33-95.352-161.42l-11.039-38.641-11.039 38.641c-17.418 61.09-50.25 116.68-95.352 161.42-45.098 44.742-100.94 77.133-162.17 94.062l-38.641 10.68 38.641 10.68c61.227 16.93 117.07 49.32 162.17 94.062 45.102 44.738 77.934 100.33 95.352 161.42l11.039 38.641z"})}):null},Rt=({children:t,size:e=pn})=>{const r=()=>Math.floor(Math.random()*1e3+2200);return O.jsxs(dn,{"data-testid":`react-sparkly-text-${Date.now()}`,children:[t,O.jsx(mt,{size:e}),O.jsx(mt,{size:e,timeout:r()}),O.jsx(mt,{size:e,timeout:r()}),O.jsx(mt,{size:e,timeout:r()})]})};try{Rt.displayName="ReactSparklyText",Rt.__docgenInfo={description:"",displayName:"ReactSparklyText",props:{size:{defaultValue:{value:"30"},description:"",name:"size",required:!1,type:{name:"number"}}}}}catch{}const gn={title:"Components/ReactSparklyText",component:Rt},gt={args:{children:O.jsx("span",{children:"Lorem"})}},yt={render:()=>O.jsxs("div",{children:["Lorem ipsum dolor ",O.jsx(Rt,{size:10,children:"sit"})," amet."]}),args:{children:O.jsx("span",{children:"Lorem"})}};var ge,ye,ve;gt.parameters={...gt.parameters,docs:{...(ge=gt.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    children: <span>Lorem</span>
  }
}`,...(ve=(ye=gt.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var Se,be,we;yt.parameters={...yt.parameters,docs:{...(Se=yt.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => <div>
      Lorem ipsum dolor <ReactSparklyText size={10}>sit</ReactSparklyText> amet.
    </div>,
  args: {
    children: <span>Lorem</span>
  }
}`,...(we=(be=yt.parameters)==null?void 0:be.docs)==null?void 0:we.source}}};const yn=["Default","WithText"];export{gt as Default,yt as WithText,yn as __namedExportsOrder,gn as default};
