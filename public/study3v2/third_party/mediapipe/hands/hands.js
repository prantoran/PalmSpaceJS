(function(){/*

    Copyright The Closure Library Authors.
    SPDX-License-Identifier: Apache-2.0
   */
   'use strict';var C;function aa(a){var c=0;return function(){return c<a.length?{done:!1,value:a[c++]}:{done:!0}}}var D="function"==typeof Object.defineProperties?Object.defineProperty:function(a,c,b){if(a==Array.prototype||a==Object.prototype)return a;a[c]=b.value;return a};
   function ba(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var c=0;c<a.length;++c){var b=a[c];if(b&&b.Math==Math)return b}throw Error("Cannot find global object");}var E=ba(this);function G(a,c){if(c)a:{var b=E;a=a.split(".");for(var d=0;d<a.length-1;d++){var g=a[d];if(!(g in b))break a;b=b[g]}a=a[a.length-1];d=b[a];c=c(d);c!=d&&null!=c&&D(b,a,{configurable:!0,writable:!0,value:c})}}
   G("Symbol",function(a){function c(k){if(this instanceof c)throw new TypeError("Symbol is not a constructor");return new b(d+(k||"")+"_"+g++,k)}function b(k,e){this.g=k;D(this,"description",{configurable:!0,writable:!0,value:e})}if(a)return a;b.prototype.toString=function(){return this.g};var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",g=0;return c});
   G("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var c="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),b=0;b<c.length;b++){var d=E[c[b]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&D(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ca(aa(this))}})}return a});function ca(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
   function I(a){var c="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return c?c.call(a):{next:aa(a)}}function fa(a){if(!(a instanceof Array)){a=I(a);for(var c,b=[];!(c=a.next()).done;)b.push(c.value);a=b}return a}var L;if("function"==typeof Object.setPrototypeOf)L=Object.setPrototypeOf;else{var M;a:{var ha={a:!0},ia={};try{ia.__proto__=ha;M=ia.a;break a}catch(a){}M=!1}L=M?function(a,c){a.__proto__=c;if(a.__proto__!==c)throw new TypeError(a+" is not extensible");return a}:null}
   var ja=L;function Q(){this.l=!1;this.i=null;this.h=void 0;this.g=1;this.s=this.m=0;this.j=null}function R(a){if(a.l)throw new TypeError("Generator is already running");a.l=!0}Q.prototype.o=function(a){this.h=a};function S(a,c){a.j={S:c,T:!0};a.g=a.m||a.s}Q.prototype.return=function(a){this.j={return:a};this.g=this.s};function T(a,c,b){a.g=b;return{value:c}}function ka(a){this.g=new Q;this.h=a}
   function la(a,c){R(a.g);var b=a.g.i;if(b)return U(a,"return"in b?b["return"]:function(d){return{value:d,done:!0}},c,a.g.return);a.g.return(c);return V(a)}function U(a,c,b,d){try{var g=c.call(a.g.i,b);if(!(g instanceof Object))throw new TypeError("Iterator result "+g+" is not an object");if(!g.done)return a.g.l=!1,g;var k=g.value}catch(e){return a.g.i=null,S(a.g,e),V(a)}a.g.i=null;d.call(a.g,k);return V(a)}
   function V(a){for(;a.g.g;)try{var c=a.h(a.g);if(c)return a.g.l=!1,{value:c.value,done:!1}}catch(b){a.g.h=void 0,S(a.g,b)}a.g.l=!1;if(a.g.j){c=a.g.j;a.g.j=null;if(c.T)throw c.S;return{value:c.return,done:!0}}return{value:void 0,done:!0}}
   function ma(a){this.next=function(c){R(a.g);a.g.i?c=U(a,a.g.i.next,c,a.g.o):(a.g.o(c),c=V(a));return c};this.throw=function(c){R(a.g);a.g.i?c=U(a,a.g.i["throw"],c,a.g.o):(S(a.g,c),c=V(a));return c};this.return=function(c){return la(a,c)};this[Symbol.iterator]=function(){return this}}function W(a,c){c=new ma(new ka(c));ja&&a.prototype&&ja(c,a.prototype);return c}
   var na="function"==typeof Object.assign?Object.assign:function(a,c){for(var b=1;b<arguments.length;b++){var d=arguments[b];if(d)for(var g in d)Object.prototype.hasOwnProperty.call(d,g)&&(a[g]=d[g])}return a};G("Object.assign",function(a){return a||na});
   G("Promise",function(a){function c(e){this.h=0;this.i=void 0;this.g=[];this.o=!1;var f=this.j();try{e(f.resolve,f.reject)}catch(h){f.reject(h)}}function b(){this.g=null}function d(e){return e instanceof c?e:new c(function(f){f(e)})}if(a)return a;b.prototype.h=function(e){if(null==this.g){this.g=[];var f=this;this.i(function(){f.l()})}this.g.push(e)};var g=E.setTimeout;b.prototype.i=function(e){g(e,0)};b.prototype.l=function(){for(;this.g&&this.g.length;){var e=this.g;this.g=[];for(var f=0;f<e.length;++f){var h=
   e[f];e[f]=null;try{h()}catch(m){this.j(m)}}}this.g=null};b.prototype.j=function(e){this.i(function(){throw e;})};c.prototype.j=function(){function e(m){return function(p){h||(h=!0,m.call(f,p))}}var f=this,h=!1;return{resolve:e(this.B),reject:e(this.l)}};c.prototype.B=function(e){if(e===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(e instanceof c)this.D(e);else{a:switch(typeof e){case "object":var f=null!=e;break a;case "function":f=!0;break a;default:f=!1}f?this.v(e):this.m(e)}};
   c.prototype.v=function(e){var f=void 0;try{f=e.then}catch(h){this.l(h);return}"function"==typeof f?this.F(f,e):this.m(e)};c.prototype.l=function(e){this.s(2,e)};c.prototype.m=function(e){this.s(1,e)};c.prototype.s=function(e,f){if(0!=this.h)throw Error("Cannot settle("+e+", "+f+"): Promise already settled in state"+this.h);this.h=e;this.i=f;2===this.h&&this.C();this.u()};c.prototype.C=function(){var e=this;g(function(){if(e.A()){var f=E.console;"undefined"!==typeof f&&f.error(e.i)}},1)};c.prototype.A=
   function(){if(this.o)return!1;var e=E.CustomEvent,f=E.Event,h=E.dispatchEvent;if("undefined"===typeof h)return!0;"function"===typeof e?e=new e("unhandledrejection",{cancelable:!0}):"function"===typeof f?e=new f("unhandledrejection",{cancelable:!0}):(e=E.document.createEvent("CustomEvent"),e.initCustomEvent("unhandledrejection",!1,!0,e));e.promise=this;e.reason=this.i;return h(e)};c.prototype.u=function(){if(null!=this.g){for(var e=0;e<this.g.length;++e)k.h(this.g[e]);this.g=null}};var k=new b;c.prototype.D=
   function(e){var f=this.j();e.I(f.resolve,f.reject)};c.prototype.F=function(e,f){var h=this.j();try{e.call(f,h.resolve,h.reject)}catch(m){h.reject(m)}};c.prototype.then=function(e,f){function h(u,n){return"function"==typeof u?function(q){try{m(u(q))}catch(l){p(l)}}:n}var m,p,w=new c(function(u,n){m=u;p=n});this.I(h(e,m),h(f,p));return w};c.prototype.catch=function(e){return this.then(void 0,e)};c.prototype.I=function(e,f){function h(){switch(m.h){case 1:e(m.i);break;case 2:f(m.i);break;default:throw Error("Unexpected state: "+
   m.h);}}var m=this;null==this.g?k.h(h):this.g.push(h);this.o=!0};c.resolve=d;c.reject=function(e){return new c(function(f,h){h(e)})};c.race=function(e){return new c(function(f,h){for(var m=I(e),p=m.next();!p.done;p=m.next())d(p.value).I(f,h)})};c.all=function(e){var f=I(e),h=f.next();return h.done?d([]):new c(function(m,p){function w(q){return function(l){u[q]=l;n--;0==n&&m(u)}}var u=[],n=0;do u.push(void 0),n++,d(h.value).I(w(u.length-1),p),h=f.next();while(!h.done)})};return c});
   G("Object.is",function(a){return a?a:function(c,b){return c===b?0!==c||1/c===1/b:c!==c&&b!==b}});G("Array.prototype.includes",function(a){return a?a:function(c,b){var d=this;d instanceof String&&(d=String(d));var g=d.length;b=b||0;for(0>b&&(b=Math.max(b+g,0));b<g;b++){var k=d[b];if(k===c||Object.is(k,c))return!0}return!1}});
   G("String.prototype.includes",function(a){return a?a:function(c,b){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(c instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==this.indexOf(c,b||0)}});
   function oa(a,c){a instanceof String&&(a+="");var b=0,d=!1,g={next:function(){if(!d&&b<a.length){var k=b++;return{value:c(k,a[k]),done:!1}}d=!0;return{done:!0,value:void 0}}};g[Symbol.iterator]=function(){return g};return g}G("Array.prototype.keys",function(a){return a?a:function(){return oa(this,function(c){return c})}});var ta=this||self;
   function X(a,c){a=a.split(".");var b=ta;a[0]in b||"undefined"==typeof b.execScript||b.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===c?b[d]&&b[d]!==Object.prototype[d]?b=b[d]:b=b[d]={}:b[d]=c};function Y(a,c){var b=void 0;return new (b||(b=Promise))(function(d,g){function k(h){try{f(c.next(h))}catch(m){g(m)}}function e(h){try{f(c["throw"](h))}catch(m){g(m)}}function f(h){h.done?d(h.value):(new b(function(m){m(h.value)})).then(k,e)}f((c=c.apply(a,void 0)).next())})};function ua(a,c,b){b=a.createShader(0===b?a.VERTEX_SHADER:a.FRAGMENT_SHADER);a.shaderSource(b,c);a.compileShader(b);if(!a.getShaderParameter(b,a.COMPILE_STATUS))throw Error("Could not compile WebGL shader.\n\n"+a.getShaderInfoLog(b));return b};function Z(a,c,b){this.h=a;this.g=c;this.u=b;this.l=0}function va(a){if("function"===typeof a.g.canvas.transferToImageBitmap)return Promise.resolve(a.g.canvas.transferToImageBitmap());if(a.u)return Promise.resolve(a.g.canvas);if("function"===typeof createImageBitmap)return createImageBitmap(a.g.canvas);void 0===a.j&&(a.j=document.createElement("img"));return new Promise(function(c){a.j.onload=function(){requestAnimationFrame(function(){c(a.j)})};a.j.src=a.g.canvas.toDataURL()})}
   function wa(a,c){var b=a.g;if(void 0===a.m){var d=ua(b,"\n  attribute vec2 aVertex;\n  attribute vec2 aTex;\n  varying vec2 vTex;\n  void main(void) {\n    gl_Position = vec4(aVertex, 0.0, 1.0);\n    vTex = aTex;\n  }",0),g=ua(b,"\n  precision mediump float;\n  varying vec2 vTex;\n  uniform sampler2D sampler0;\n  void main(){\n    gl_FragColor = texture2D(sampler0, vTex);\n  }",1),k=b.createProgram();b.attachShader(k,d);b.attachShader(k,g);b.linkProgram(k);if(!b.getProgramParameter(k,b.LINK_STATUS))throw Error("Could not compile WebGL program.\n\n"+
   b.getProgramInfoLog(k));d=a.m=k;b.useProgram(d);g=b.getUniformLocation(d,"sampler0");a.i={H:b.getAttribLocation(d,"aVertex"),G:b.getAttribLocation(d,"aTex"),W:g};a.s=b.createBuffer();b.bindBuffer(b.ARRAY_BUFFER,a.s);b.enableVertexAttribArray(a.i.H);b.vertexAttribPointer(a.i.H,2,b.FLOAT,!1,0,0);b.bufferData(b.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),b.STATIC_DRAW);b.bindBuffer(b.ARRAY_BUFFER,null);a.o=b.createBuffer();b.bindBuffer(b.ARRAY_BUFFER,a.o);b.enableVertexAttribArray(a.i.G);b.vertexAttribPointer(a.i.G,
   2,b.FLOAT,!1,0,0);b.bufferData(b.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),b.STATIC_DRAW);b.bindBuffer(b.ARRAY_BUFFER,null);b.uniform1i(g,0)}d=a.i;b.useProgram(a.m);b.canvas.width=c.width;b.canvas.height=c.height;b.viewport(0,0,c.width,c.height);b.activeTexture(b.TEXTURE0);a.h.bindTexture2d(c.glName);b.enableVertexAttribArray(d.H);b.bindBuffer(b.ARRAY_BUFFER,a.s);b.vertexAttribPointer(d.H,2,b.FLOAT,!1,0,0);b.enableVertexAttribArray(d.G);b.bindBuffer(b.ARRAY_BUFFER,a.o);b.vertexAttribPointer(d.G,
   2,b.FLOAT,!1,0,0);b.bindFramebuffer(b.DRAW_FRAMEBUFFER?b.DRAW_FRAMEBUFFER:b.FRAMEBUFFER,null);b.clearColor(0,0,0,0);b.clear(b.COLOR_BUFFER_BIT);b.colorMask(!0,!0,!0,!0);b.drawArrays(b.TRIANGLE_FAN,0,4);b.disableVertexAttribArray(d.H);b.disableVertexAttribArray(d.G);b.bindBuffer(b.ARRAY_BUFFER,null);a.h.bindTexture2d(0)}function xa(a){this.g=a};var ya=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function za(a,c){return c+a}function Aa(a,c){window[a]=c}function Ba(a){var c=document.createElement("script");c.setAttribute("src",a);c.setAttribute("crossorigin","anonymous");return new Promise(function(b){c.addEventListener("load",function(){b()},!1);c.addEventListener("error",function(){b()},!1);document.body.appendChild(c)})}
   function Ca(a){for(var c=[],b=a.size(),d=0;d<b;++d){var g=a.get(d);c.push({x:g.x,y:g.y,z:g.z,visibility:g.hasVisibility?g.visibility:void 0});g.delete()}return c}function Da(a){for(var c=[],b=a.size(),d=0;d<b;++d){var g=a.get(d);c.push({index:g.index,score:g.score,label:g.hasLabel?g.label:void 0,displayName:g.hasDisplayName?g.displayName:void 0})}return c}
   function Ea(){return Y(this,function c(){return W(c,function(b){switch(b.g){case 1:return b.m=2,T(b,WebAssembly.instantiate(ya),4);case 4:b.g=3;b.m=0;break;case 2:return b.m=0,b.j=null,b.return(!1);case 3:return b.return(!0)}})})}
   function Fa(a){this.g=a;this.listeners={};this.j={};this.D={};this.m={};this.s={};this.B=this.o=this.O=!0;this.F=Promise.resolve();this.N="";this.A={};this.locateFile=a&&a.locateFile||za;if("object"===typeof window)var c=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if("undefined"!==typeof location)c=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");
   this.P=c;if(a.options){c=I(Object.keys(a.options));for(var b=c.next();!b.done;b=c.next()){b=b.value;var d=a.options[b].default;void 0!==d&&(this.j[b]="function"===typeof d?d():d)}}}C=Fa.prototype;C.close=function(){this.i&&this.i.delete();return Promise.resolve()};function Ga(a,c){return void 0===a.g.files?[]:"function"===typeof a.g.files?a.g.files(c):a.g.files}
   function Ha(a){return Y(a,function b(){var d=this,g,k,e,f,h,m,p,w,u,n,q;return W(b,function(l){switch(l.g){case 1:g=d;if(!d.O)return l.return();k=Ga(d,d.j);return T(l,Ea(),2);case 2:e=l.h;if("object"===typeof window)return Aa("createMediapipeSolutionsWasm",{locateFile:d.locateFile}),Aa("createMediapipeSolutionsPackedAssets",{locateFile:d.locateFile}),m=k.filter(function(r){return void 0!==r.data}),p=k.filter(function(r){return void 0===r.data}),w=Promise.all(m.map(function(r){var t=Ia(g,r.url);if(void 0!==
   r.path){var v=r.path;t=t.then(function(y){g.overrideFile(v,y);return Promise.resolve(y)})}return t})),u=Promise.all(p.map(function(r){return void 0===r.simd||r.simd&&e||!r.simd&&!e?Ba(g.locateFile(r.url,g.P)):Promise.resolve()})).then(function(){return Y(g,function t(){var v,y,z=this;return W(t,function(A){if(1==A.g)return v=window.createMediapipeSolutionsWasm,y=window.createMediapipeSolutionsPackedAssets,T(A,v(y),2);z.h=A.h;A.g=0})})}),n=function(){return Y(g,function t(){var v=this;return W(t,function(y){v.g.graph&&
   v.g.graph.url?y=T(y,Ia(v,v.g.graph.url),0):(y.g=0,y=void 0);return y})})}(),T(l,Promise.all([u,w,n]),7);if("function"!==typeof importScripts)throw Error("solutions can only be loaded on a web page or in a web worker");f=k.filter(function(r){return void 0===r.simd||r.simd&&e||!r.simd&&!e}).map(function(r){return g.locateFile(r.url,g.P)});importScripts.apply(null,fa(f));return T(l,createMediapipeSolutionsWasm(Module),6);case 6:d.h=l.h;d.l=new OffscreenCanvas(1,1);d.h.canvas=d.l;h=d.h.GL.createContext(d.l,
   {antialias:!1,alpha:!1,V:"undefined"!==typeof WebGL2RenderingContext?2:1});d.h.GL.makeContextCurrent(h);l.g=4;break;case 7:d.l=document.createElement("canvas");q=d.l.getContext("webgl2",{});if(!q&&(q=d.l.getContext("webgl",{}),!q))return alert("Failed to create WebGL canvas context when passing video frame."),l.return();d.C=q;d.h.canvas=d.l;d.h.createContext(d.l,!0,!0,{});case 4:d.i=new d.h.SolutionWasm,d.O=!1,l.g=0}})})}
   function Ja(a){return Y(a,function b(){var d=this,g,k,e,f,h,m,p,w;return W(b,function(u){if(1==u.g){if(d.g.graph&&d.g.graph.url&&d.N===d.g.graph.url)return u.return();d.o=!0;if(!d.g.graph||!d.g.graph.url){u.g=2;return}d.N=d.g.graph.url;return T(u,Ia(d,d.g.graph.url),3)}2!=u.g&&(g=u.h,d.i.loadGraph(g));k=I(Object.keys(d.A));for(e=k.next();!e.done;e=k.next())f=e.value,d.i.overrideFile(f,d.A[f]);d.A={};if(d.g.listeners)for(h=I(d.g.listeners),m=h.next();!m.done;m=h.next())p=m.value,Ka(d,p);w=d.j;d.j=
   {};d.setOptions(w);u.g=0})})}C.reset=function(){return Y(this,function c(){var b=this;return W(c,function(d){b.i&&(b.i.reset(),b.m={},b.s={});d.g=0})})};
   C.setOptions=function(a,c){var b=this;if(c=c||this.g.options){for(var d=[],g=[],k={},e=I(Object.keys(a)),f=e.next();!f.done;k={J:k.J,K:k.K},f=e.next()){var h=f.value;h in this.j&&this.j[h]===a[h]||(this.j[h]=a[h],f=c[h],void 0!==f&&(f.onChange&&(k.J=f.onChange,k.K=a[h],d.push(function(m){return function(){return Y(b,function w(){var u,n=this;return W(w,function(q){if(1==q.g)return T(q,m.J(m.K),2);u=q.h;!0===u&&(n.o=!0);q.g=0})})}}(k))),f.graphOptionXref&&(h={valueNumber:1===f.type?a[h]:0,valueBoolean:0===
   f.type?a[h]:!1,valueString:2===f.type?a[h]:""},f=Object.assign(Object.assign(Object.assign({},{calculatorName:"",calculatorIndex:0}),f.graphOptionXref),h),g.push(f))))}if(0!==d.length||0!==g.length)this.o=!0,this.u=(void 0===this.u?[]:this.u).concat(g),this.v=(void 0===this.v?[]:this.v).concat(d)}};
   function La(a){return Y(a,function b(){var d=this,g,k,e,f,h,m,p;return W(b,function(w){switch(w.g){case 1:if(!d.o)return w.return();if(!d.v){w.g=2;break}g=I(d.v);k=g.next();case 3:if(k.done){w.g=5;break}e=k.value;return T(w,e(),4);case 4:k=g.next();w.g=3;break;case 5:d.v=void 0;case 2:if(d.u){f=new d.h.GraphOptionChangeRequestList;h=I(d.u);for(m=h.next();!m.done;m=h.next())p=m.value,f.push_back(p);d.i.changeOptions(f);f.delete();d.u=void 0}d.o=!1;w.g=0}})})}
   C.initialize=function(){return Y(this,function c(){var b=this;return W(c,function(d){return 1==d.g?T(d,Ha(b),2):3!=d.g?T(d,Ja(b),3):T(d,La(b),0)})})};function Ia(a,c){return Y(a,function d(){var g=this,k,e;return W(d,function(f){if(c in g.D)return f.return(g.D[c]);k=g.locateFile(c,"");e=fetch(k).then(function(h){return h.arrayBuffer()});g.D[c]=e;return f.return(e)})})}C.overrideFile=function(a,c){this.i?this.i.overrideFile(a,c):this.A[a]=c};C.clearOverriddenFiles=function(){this.A={};this.i&&this.i.clearOverriddenFiles()};
   C.send=function(a,c){return Y(this,function d(){var g=this,k,e,f,h,m,p,w,u,n;return W(d,function(q){if(1==q.g){if(!g.g.inputs)return q.return();k=1E3*(void 0===c||null===c?performance.now():c);return T(q,g.F,2)}if(3!=q.g)return T(q,g.initialize(),3);e=new g.h.PacketDataList;f=I(Object.keys(a));for(h=f.next();!h.done;h=f.next())if(m=h.value,p=g.g.inputs[m]){a:{var l=g;var r=a[m];switch(p.type){case "video":var t=l.m[p.stream];t||(t=new Z(l.h,l.C,l.B),l.m[p.stream]=t);l=t;0===l.l&&(l.l=l.h.createTexture());
   if("undefined"!==typeof HTMLVideoElement&&r instanceof HTMLVideoElement){var v=r.videoWidth;t=r.videoHeight}else"undefined"!==typeof HTMLImageElement&&r instanceof HTMLImageElement?(v=r.naturalWidth,t=r.naturalHeight):(v=r.width,t=r.height);t={glName:l.l,width:v,height:t};v=l.g;v.canvas.width=t.width;v.canvas.height=t.height;v.activeTexture(v.TEXTURE0);l.h.bindTexture2d(l.l);v.texImage2D(v.TEXTURE_2D,0,v.RGBA,v.RGBA,v.UNSIGNED_BYTE,r);l.h.bindTexture2d(0);l=t;break a;case "detections":t=l.m[p.stream];
   t||(t=new xa(l.h),l.m[p.stream]=t);l=t;l.data||(l.data=new l.g.DetectionListData);l.data.reset(r.length);for(t=0;t<r.length;++t){v=r[t];l.data.setBoundingBox(t,v.R);if(v.M)for(var y=0;y<v.M.length;++y){var z=v.M[y],A=z.visibility?!0:!1;l.data.addNormalizedLandmark(t,Object.assign(Object.assign({},z),{hasVisibility:A,visibility:A?z.visibility:0}))}if(v.L)for(y=0;y<v.L.length;++y){z=v.L[y];A=z.index?!0:!1;var K=z.label?!0:!1,N=z.displayName?!0:!1;l.data.addClassification(t,{score:z.score,hasIndex:A,
   index:A?z.index:-1,hasLabel:K,label:K?z.label:"",hasDisplayName:N,displayName:N?z.displayName:""})}}l=l.data;break a;default:l={}}}w=l;u=p.stream;switch(p.type){case "video":e.pushTexture2d(Object.assign(Object.assign({},w),{stream:u,timestamp:k}));break;case "detections":n=w;n.stream=u;n.timestamp=k;e.pushDetectionList(n);break;default:throw Error("Unknown input config type: '"+p.type+"'");}}g.i.send(e);e.delete();q.g=0})})};
   function Ma(a,c,b){return Y(a,function g(){var k,e,f,h,m,p,w=this,u,n,q,l,r,t,v,y,z,A,K,N,pa,qa;return W(g,function(B){switch(B.g){case 1:if(!b)return B.return(c);k={};e=0;f=I(Object.keys(b));for(h=f.next();!h.done;h=f.next())m=h.value,p=b[m],"string"!==typeof p&&"texture"===p.type&&++e;1<e&&(w.B=!1);u=I(Object.keys(b));h=u.next();case 2:if(h.done){B.g=4;break}n=h.value;q=b[n];if("string"===typeof q)return pa=k,qa=n,T(B,Na(w,n,c[q]),17);l=c[q.stream];if(void 0===l){B.g=3;break}if("detection_list"===
   q.type){var x=l.getRectList(),H=l.getLandmarksList(),F=l.getClassificationsList(),J=[];if(x)for(var O=0;O<x.size();++O){var da={R:x.get(O),M:Ca(H.get(O)),L:Da(F.get(O))};J.push(da)}k[n]=J;B.g=7;break}if("proto"===q.type){k[n]=l.isProto()?l.getProto():void 0;B.g=7;break}if("proto_list"===q.type){if(r=l.getProtoList()){x=Array(r.size());for(H=0;H<r.size();H++)x[H]=r.get(H);r.delete()}else x=void 0;k[n]=x;B.g=7;break}if("landmarks"===q.type){t=l.getLandmarks();k[n]=t?Ca(t):void 0;B.g=7;break}if("landmarks_list"===
   q.type){if(v=l.getLandmarksList())for(x=[],H=v.size(),F=0;F<H;++F)J=v.get(F),x.push(Ca(J)),J.delete();else x=void 0;k[n]=x;B.g=7;break}if("rect_list"===q.type){if(y=l.getRectList())for(x=[],H=y.size(),F=0;F<H;++F)J=y.get(F),x.push(J);else x=void 0;k[n]=x;B.g=7;break}if("classifications_list"===q.type){if(z=l.getClassificationsList())for(x=[],H=z.size(),F=0;F<H;++F)J=z.get(F),x.push(Da(J));else x=void 0;k[n]=x;B.g=7;break}if("object_detection_list"===q.type){if(A=l.getObjectDetectionList())for(x=[],
   H=A.size(),F=0;F<H;++F){J=A.get(F);O=x;da=O.push;for(var Pa=J.id,ra=J.keypoints,sa=[],Qa=ra.size(),ea=0;ea<Qa;++ea){var P=ra.get(ea);sa.push({id:P.id,point3d:{x:P.point3d.x,y:P.point3d.y,z:P.point3d.z},point2d:{x:P.point2d.x,y:P.point2d.y,depth:P.point2d.depth}})}da.call(O,{id:Pa,keypoints:sa,visibility:J.visibility})}else x=void 0;k[n]=x;B.g=7;break}if("texture"!==q.type)throw Error("Unknown output config type: '"+q.type+"'");K=w.s[n];K||(K=new Z(w.h,w.C,w.B),w.s[n]=K);x=K;H=l.getTexture2d();wa(x,
   H);x=va(x);return T(B,x,16);case 16:N=B.h,k[n]=N;case 7:q.transform&&k[n]&&(k[n]=q.transform(k[n]));B.g=3;break;case 17:pa[qa]=B.h;case 3:h=u.next();B.g=2;break;case 4:return B.return(k)}})})}
   function Na(a,c,b){return Y(a,function g(){var k=this,e;return W(g,function(f){if(b.isProto())return f.return(b.getProto());if(b.isProtoList())return f.return(b.getProtoList());if(b.isNumber())return f.return(b.getNumber());if(b.isRect())return f.return(b.getRect());if(b.isLandmarks())return f.return(b.getLandmarks());if(b.isLandmarksList())return f.return(b.getLandmarksList());if(b.isClassificationsList())return f.return(b.getClassificationsList());if(b.isObjectDetectionList())return f.return(b.getObjectDetectionList());
   if(b.isTexture2d()){e=k.s[c];e||(e=new Z(k.h,k.C,k.B),k.s[c]=e);var h=f.return;var m=e;var p=b.getTexture2d();wa(m,p);m=va(m);return h.call(f,m)}return f.return(void 0)})})}
   function Ka(a,c){for(var b=c.name||"$",d=[].concat(fa(c.wants)),g=new a.h.StringList,k=I(c.wants),e=k.next();!e.done;e=k.next())g.push_back(e.value);k=a.h.PacketListener.implement({onResults:function(f){return Y(a,function m(){var p=this,w,u,n,q,l;return W(m,function(r){w=p;u={};for(n=0;n<c.wants.length;++n)u[d[n]]=f.get(n);q=Ma(p,u,c.outs);if(l=p.listeners[b])return r.return(p.F.then(function(){return q}).then(function(t){return Y(w,function y(){var z,A,K=this;return W(y,function(N){z=l(t);for(A=
   0;A<c.wants.length;++A)u[d[A]].delete();if(z)return K.F=z,N.return(z);N.g=0})})}));r.g=0})})}});a.i.attachMultiListener(g,k);g.delete()}C.onResults=function(a,c){this.listeners[c||"$"]=a};X("Solution",Fa);X("OptionType",{BOOL:0,NUMBER:1,U:2,0:"BOOL",1:"NUMBER",2:"STRING"});function Oa(a){a=a||{};this.g=new Fa({locateFile:a.locateFile,files:[{url:"hands_solution_packed_assets_loader.js"},{simd:!1,url:"hands_solution_wasm_bin.js"},{simd:!0,url:"hands_solution_simd_wasm_bin.js"}],graph:{url:"hands.binarypb"},inputs:{image:{type:"video",stream:"input_frames_gpu"}},listeners:[{wants:["multi_hand_landmarks","image_transformed","multi_handedness"],outs:{image:"image_transformed",multiHandLandmarks:{type:"landmarks_list",stream:"multi_hand_landmarks"},multiHandedness:{type:"classifications_list",
   stream:"multi_handedness",transform:function(c){return c.map(function(b){return b[0]})}}}}],options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},
   maxNumHands:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculator",fieldName:"int_value"}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"handlandmarktrackinggpu__palmdetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"handlandmarktrackinggpu__handlandmarkgpu__ThresholdingCalculator",
   fieldName:"threshold"}}}})}C=Oa.prototype;C.close=function(){this.g.close();return Promise.resolve()};C.onResults=function(a){this.g.onResults(a)};C.initialize=function(){return Y(this,function c(){var b=this;return W(c,function(d){return T(d,b.g.initialize(),0)})})};C.reset=function(){this.g.reset()};C.send=function(a){return Y(this,function b(){var d=this;return W(b,function(g){return T(g,d.g.send(a),0)})})};C.setOptions=function(a){this.g.setOptions(a)};X("Hands",Oa);
   X("HAND_CONNECTIONS",[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]]);}).call(this);
   