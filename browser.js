// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";var n,t=function(n){return n!=n},r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,e=o,i=function(n){return e.call(n)},f=Object.prototype.hasOwnProperty,u=function(n,t){return null!=n&&f.call(n,t)},c="function"==typeof Symbol?Symbol.toStringTag:"",y=u,a=c,l=o,p=i,A=function(n){var t,r,o;if(null==n)return l.call(n);r=n[a],t=y(n,a);try{n[a]=void 0}catch(t){return l.call(n)}return o=l.call(n),t?n[a]=r:delete n[a],o},U=r&&"symbol"==typeof Symbol.toStringTag?A:p,b=U,d="function"==typeof Uint32Array,m="function"==typeof Uint32Array?Uint32Array:null,w=function(n){return d&&n instanceof Uint32Array||"[object Uint32Array]"===b(n)},s=m,v=function(){var n,t;if("function"!=typeof s)return!1;try{t=new s(t=[1,3.14,-3.14,4294967296,4294967297]),n=w(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},h="function"==typeof Uint32Array?Uint32Array:void 0,N=function(){throw new Error("not implemented")},F=v()?h:N,S=U,g="function"==typeof Float64Array,j="function"==typeof Float64Array?Float64Array:null,E=function(n){return g&&n instanceof Float64Array||"[object Float64Array]"===S(n)},T=j,I=function(){var n,t;if("function"!=typeof T)return!1;try{t=new T([1,3.14,-3.14,NaN]),n=E(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n},x="function"==typeof Float64Array?Float64Array:void 0,O=function(){throw new Error("not implemented")},G=I()?x:O,P=U,V="function"==typeof Uint8Array,Y="function"==typeof Uint8Array?Uint8Array:null,_=function(n){return V&&n instanceof Uint8Array||"[object Uint8Array]"===P(n)},k=Y,q=function(){var n,t;if("function"!=typeof k)return!1;try{t=new k(t=[1,3.14,-3.14,256,257]),n=_(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},z="function"==typeof Uint8Array?Uint8Array:void 0,B=function(){throw new Error("not implemented")},C=q()?z:B,D=U,H="function"==typeof Uint16Array,J="function"==typeof Uint16Array?Uint16Array:null,K=function(n){return H&&n instanceof Uint16Array||"[object Uint16Array]"===D(n)},L=J,M=function(){var n,t;if("function"!=typeof L)return!1;try{t=new L(t=[1,3.14,-3.14,65536,65537]),n=K(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},Q="function"==typeof Uint16Array?Uint16Array:void 0,R=function(){throw new Error("not implemented")},W={uint16:M()?Q:R,uint8:C};(n=new W.uint16(1))[0]=4660;var X=52===new W.uint8(n.buffer)[0],Z=F,$=!0===X?1:0,nn=new G(1),tn=new Z(nn.buffer),rn=function(n){return nn[0]=n,tn[$]},on=F,en=!0===X?1:0,fn=new G(1),un=new on(fn.buffer),cn=function(n,t){return fn[0]=n,un[en]=t>>>0,fn[0]},yn=cn,an=Number.NEGATIVE_INFINITY,ln=rn,pn=yn,An=t,Un=an,bn=function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)},dn=function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))},mn=.6931471803691238,wn=1.9082149292705877e-10,sn=1048575,vn=function(n){var t,r,o,e,i,f,u,c,y,a,l;return 0===n?Un:An(n)||n<0?NaN:(e=0,(r=ln(n))<1048576&&(e-=54,r=ln(n*=0x40000000000000)),r>=2146435072?n+n:(e+=(r>>20)-1023|0,e+=(u=614244+(r&=sn)&1048576|0)>>20|0,f=(n=pn(n,r|1072693248^u))-1,(sn&2+r)<3?0===f?0===e?0:e*mn+e*wn:(i=f*f*(.5-.3333333333333333*f),0===e?f-i:e*mn-(i-e*wn-f)):(u=r-398458|0,c=440401-r|0,o=(a=(l=(y=f/(2+f))*y)*l)*bn(a),i=l*dn(a)+o,(u|=c)>0?(t=.5*f*f,0===e?f-(t-y*(t+i)):e*mn-(t-(y*(t+i)+e*wn)-f)):0===e?f-y*(f-i):e*mn-(y*(f-i)-e*wn-f))))};return function(n,r){return t(n)||t(r)||r<=0?NaN:vn(r)+2}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).entropy=t();
//# sourceMappingURL=browser.js.map
