"use strict";(self.webpackChunkmy_blog_website=self.webpackChunkmy_blog_website||[]).push([[751],{9432:function(e,t,n){n.r(t),n.d(t,{default:function(){return te}});var r=n(6540),o=n(9267),a=n(7620),s=n(4785),i=n(8601),l=n(5238);const c=new WeakMap;let f;function u({target:e,contentRect:t,borderBoxSize:n}){var r;null===(r=c.get(e))||void 0===r||r.forEach((r=>{r({target:e,contentSize:t,get size(){return function(e,t){if(t){const{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(e,n)}})}))}function d(e){e.forEach(u)}function m(e,t){f||"undefined"!=typeof ResizeObserver&&(f=new ResizeObserver(d));const n=function(e,t,n){var r;if("string"==typeof e){let o=document;t&&((0,l.V)(Boolean(t.current),"Scope provided, but no element detected."),o=t.current),n?(null!==(r=n[e])&&void 0!==r||(n[e]=o.querySelectorAll(e)),e=n[e]):e=o.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}(e);return n.forEach((e=>{let n=c.get(e);n||(n=new Set,c.set(e,n)),n.add(t),null==f||f.observe(e)})),()=>{n.forEach((e=>{const n=c.get(e);null==n||n.delete(t),(null==n?void 0:n.size)||null==f||f.unobserve(e)}))}}const g=new Set;let h;function p(e){return g.add(e),h||(h=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};g.forEach((e=>e(t)))},window.addEventListener("resize",h)),()=>{g.delete(e),!g.size&&h&&(h=void 0)}}var v=n(7170),x=n(7177);const y={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function E(e,t,n,r){const o=n[t],{length:a,position:s}=y[t],i=o.current,l=n.time;o.current=e[`scroll${s}`],o.scrollLength=e[`scroll${a}`]-e[`client${a}`],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=(0,v.q)(0,o.scrollLength,o.current);const c=r-l;o.velocity=c>50?0:(0,x.f)(o.current-i,c)}const w={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},b={start:0,center:.5,end:1};function N(e,t,n=0){let r=0;if(e in b&&(e=b[e]),"string"==typeof e){const t=parseFloat(e);e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t}return"number"==typeof e&&(r=t*e),n+r}const L=[0,0];function S(e,t,n,r){let o=Array.isArray(e)?e:L,a=0,s=0;return"number"==typeof e?o=[e,e]:"string"==typeof e&&(o=(e=e.trim()).includes(" ")?e.split(" "):[e,b[e]?e:"0"]),a=N(o[0],n,r),s=N(o[1],t),a-s}var W=n(8844),k=n(3490);const B={x:0,y:0};function P(e,t,n){const{offset:r=w.All}=n,{target:o=e,axis:a="y"}=n,s="y"===a?"height":"width",i=o!==e?function(e,t){const n={x:0,y:0};let r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if("svg"===r.tagName){const e=r.getBoundingClientRect();r=r.parentElement;const t=r.getBoundingClientRect();n.x+=e.left-t.left,n.y+=e.top-t.top}else{if(!(r instanceof SVGGraphicsElement))break;{const{x:e,y:t}=r.getBBox();n.x+=e,n.y+=t;let o=null,a=r.parentNode;for(;!o;)"svg"===a.tagName&&(o=a),a=r.parentNode;r=o}}return n}(o,e):B,l=o===e?{width:e.scrollWidth,height:e.scrollHeight}:function(e){return"getBBox"in e&&"svg"!==e.tagName?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}(o),c={width:e.clientWidth,height:e.clientHeight};t[a].offset.length=0;let f=!t[a].interpolate;const u=r.length;for(let d=0;d<u;d++){const e=S(r[d],c[s],l[s],i[a]);f||e===t[a].interpolatorOffsets[d]||(f=!0),t[a].offset[d]=e}f&&(t[a].interpolate=(0,W.G)(t[a].offset,(0,k.Z)(r)),t[a].interpolatorOffsets=[...t[a].offset]),t[a].progress=t[a].interpolate(t[a].current)}function z(e,t,n,r={}){return{measure:()=>function(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}(e,r.target,n),update:t=>{!function(e,t,n){E(e,"x",t,n),E(e,"y",t,n),t.time=n}(e,n,t),(r.offset||r.target)&&P(e,n,r)},notify:()=>t(n)}}var O=n(104);const G=new WeakMap,H=new WeakMap,T=new WeakMap,A=e=>e===document.documentElement?window:e;function R(e,{container:t=document.documentElement,...n}={}){let r=T.get(t);r||(r=new Set,T.set(t,r));const o=z(t,e,{time:0,x:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0},y:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}},n);if(r.add(o),!G.has(t)){const e=()=>{for(const e of r)e.measure()},n=()=>{for(const e of r)e.update(O.uv.timestamp)},o=()=>{for(const e of r)e.notify()},i=()=>{O.Gt.read(e,!1,!0),O.Gt.read(n,!1,!0),O.Gt.update(o,!1,!0)};G.set(t,i);const l=A(t);window.addEventListener("resize",i,{passive:!0}),t!==document.documentElement&&H.set(t,(s=i,"function"==typeof(a=t)?p(a):m(a,s))),l.addEventListener("scroll",i,{passive:!0})}var a,s;const i=G.get(t);return O.Gt.read(i,!1,!0),()=>{var e;(0,O.WG)(i);const n=T.get(t);if(!n)return;if(n.delete(o),n.size)return;const r=G.get(t);G.delete(t),r&&(A(t).removeEventListener("scroll",r),null===(e=H.get(t))||void 0===e||e(),window.removeEventListener("resize",r))}}function M(e,t){let n;const r=()=>{const{currentTime:r}=t,o=(null===r?0:r.value)/100;n!==o&&e(o),n=o};return O.Gt.update(r,!0),()=>(0,O.WG)(r)}var C=n(9179);const Q=new Map;function _({source:e,container:t=document.documentElement,axis:n="y"}={}){e&&(t=e),Q.has(t)||Q.set(t,{});const r=Q.get(t);return r[n]||(r[n]=(0,C.J)()?new ScrollTimeline({source:t,axis:n}):function({source:e,container:t,axis:n="y"}){e&&(t=e);const r={value:0},o=R((e=>{r.value=100*e[n].progress}),{container:t,axis:n});return{currentTime:r,cancel:o}}({source:t,axis:n})),r[n]}function Y(e){return e&&(e.target||e.offset)}function $(e,{axis:t="y",...n}={}){const r={axis:t,...n};return"function"==typeof e?function(e,t){return function(e){return 2===e.length}(e)||Y(t)?R((n=>{e(n[t.axis].progress,n)}),t):M(e,_(t))}(e,r):function(e,t){if(Y(t))return e.pause(),R((n=>{e.time=e.duration*n[t.axis].progress}),t);{const n=_(t);return e.attachTimeline(n,(e=>(e.pause(),M((t=>{e.time=e.duration*t}),n))))}}(e,r)}var X=n(5128);function D(e,t){(0,l.$)(Boolean(!t||t.current),`You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}const V=()=>({scrollX:(0,s.OQ)(0),scrollY:(0,s.OQ)(0),scrollXProgress:(0,s.OQ)(0),scrollYProgress:(0,s.OQ)(0)});var j=n(9896),q=n(5446);var F=n(1233);function J(e){return"number"==typeof e?e:parseFloat(e)}function I(e,t={}){const{isStatic:n}=(0,r.useContext)(q.Q),o=(0,r.useRef)(null),a=function(e){const t=(0,i.M)((()=>(0,s.OQ)(e))),{isStatic:n}=(0,r.useContext)(q.Q);if(n){const[,n]=(0,r.useState)(e);(0,r.useEffect)((()=>t.on("change",n)),[])}return t}((0,j.S)(e)?J(e.get()):e),l=(0,r.useRef)(a.get()),c=(0,r.useRef)((()=>{})),f=()=>{const e=o.current;e&&0===e.time&&e.sample(O.uv.delta),u(),o.current=(0,F.L)({keyframes:[a.get(),l.current],velocity:a.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:c.current})},u=()=>{o.current&&o.current.stop()};return(0,r.useInsertionEffect)((()=>a.attach(((e,t)=>n?t(e):(l.current=e,c.current=t,O.Gt.update(f),a.get())),u)),[JSON.stringify(t)]),(0,X.E)((()=>{if((0,j.S)(e))return e.on("change",(e=>a.set(J(e))))}),[a]),a}var U=n(7160);var Z=()=>{const{scrollYProgress:e}=function({container:e,target:t,layoutEffect:n=!0,...o}={}){const a=(0,i.M)(V);return(n?X.E:r.useEffect)((()=>(D("target",t),D("container",e),$(((e,{x:t,y:n})=>{a.scrollX.set(t.current),a.scrollXProgress.set(t.progress),a.scrollY.set(n.current),a.scrollYProgress.set(n.progress)}),{...o,container:(null==e?void 0:e.current)||void 0,target:(null==t?void 0:t.current)||void 0}))),[e,t,JSON.stringify(o.offset)]),a}(),t=I(e,{stiffness:100,damping:30,restDelta:.001});return r.createElement(U.P.div,{className:"fixed top-0 left-0 right-0 h-1 gradient-bg transform origin-left z-50",style:{scaleX:t},initial:{opacity:0},animate:{opacity:1},transition:{duration:.3}})},K=n(2532);var ee=e=>{let{image:t,alt:n,className:o}=e;const a=(0,K.c)(t);return a?r.createElement("figure",{className:o},r.createElement(K.G,{image:a,alt:n,className:"rounded-lg"}),n&&r.createElement("figcaption",{className:"text-sm text-center text-gray-600 dark:text-gray-400 mt-2"},n)):null};n(4810);var te=e=>{let{data:t}=e;const n=t.mdx,s=n.frontmatter.image?(0,K.c)(n.frontmatter.image):null,i={initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6}};return console.log("Products:",n.frontmatter.products),console.log("BlogPostTemplate data:",t),r.createElement(o.A,null,r.createElement(Z,null),r.createElement(a.A,{title:n.frontmatter.title||"Default Title",description:n.excerpt||"Default description"}),r.createElement(U.P.article,{initial:"initial",animate:"animate",variants:{animate:{transition:{staggerChildren:.1}}},className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"},r.createElement(U.P.div,{variants:i,className:"mb-12"},s&&r.createElement("div",{className:"relative h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-8"},r.createElement(K.G,{image:s,alt:n.frontmatter.title,className:"w-full h-full transform hover:scale-105 transition-transform duration-300",imgStyle:{objectFit:"cover"}})),r.createElement("div",{className:"text-center"},r.createElement(U.P.div,{variants:i,className:"flex items-center justify-center space-x-4 mb-6 text-sm text-slate-600 dark:text-slate-400"},r.createElement("time",{className:"gradient-text font-medium"},n.frontmatter.date),r.createElement("span",null,"•"),r.createElement("span",null,n.frontmatter.author)),r.createElement(U.P.h1,{variants:i,className:"text-5xl font-bold mb-6 gradient-text"},n.frontmatter.title))),r.createElement(U.P.div,{variants:i,className:"prose lg:prose-xl dark:prose-invert mx-auto",dangerouslySetInnerHTML:{__html:n.body}}),n.frontmatter.hasAffiliateLinks&&n.frontmatter.products&&r.createElement(U.P.section,{variants:i,className:"mt-16 card p-8"},r.createElement("h2",{className:"text-3xl font-bold mb-8 text-center gradient-text"},"Recommended Products"),r.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8"},n.frontmatter.products.map(((e,t)=>r.createElement(U.P.div,{key:t,variants:i,whileHover:{scale:1.02},className:"card p-6"},e.image&&r.createElement(ee,{image:e.image,alt:e.name,className:"mb-4 rounded-lg"}),r.createElement("h3",{className:"text-xl font-bold mb-2 gradient-text"},e.name),r.createElement("p",{className:"text-slate-600 dark:text-slate-400 mb-4"},e.description),r.createElement("div",{className:"flex items-center justify-between"},r.createElement("span",{className:"text-2xl font-bold gradient-text"},"$",e.price),r.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center px-4 py-2 gradient-bg text-white rounded-lg transition-all duration-200 hover:shadow-lg"},"Buy Now",r.createElement("svg",{className:"w-4 h-4 ml-2",viewBox:"0 0 20 20",fill:"currentColor"},r.createElement("path",{fillRule:"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",clipRule:"evenodd"})))))))))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-f12e1fcb3d9e79c78b1a.js.map