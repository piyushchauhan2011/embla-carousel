"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[5029],{642:function(e,t,n){n.d(t,{R:function(){return l},c:function(){return s}});var o=n(4041);const l=(e,t)=>{const{0:n,1:l}=(0,o.useState)(0),{0:s,1:c}=(0,o.useState)([]),a=(0,o.useCallback)((n=>{e&&(e.scrollTo(n),t&&t(e))}),[e,t]),r=(0,o.useCallback)((e=>{c(e.scrollSnapList())}),[]),i=(0,o.useCallback)((e=>{l(e.selectedScrollSnap())}),[]);return(0,o.useEffect)((()=>{e&&(r(e),i(e),e.on("reInit",r).on("reInit",i).on("select",i))}),[e,r,i]),{selectedIndex:n,scrollSnaps:s,onDotButtonClick:a}},s=e=>{const{children:t,...n}=e;return o.createElement("button",Object.assign({type:"button"},n),t)}},5029:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var o=n(4041),l=n(7154);function s(e,t,n){return Math.min(Math.max(e,t),n)}function c(e){return"number"==typeof e&&!isNaN(e)}function a(e){void 0===e&&(e={});const t=1,n=0,o=.68,l=1e3/60;let a,r,i,d,u=[],f=0,p=0,m=0,g=!1;function b(){h(a.selectedScrollSnap(),t)}function E(){g=!1}function S(){g=!1,f=0,p=0}function v(){const e=a.internalEngine().scrollBody.duration();p=e?0:t,g=!0,e||b()}function _(e){const{scrollSnaps:t,location:n,target:o}=a.internalEngine();!c(e)||u[e]<.5||(n.set(t[e]),o.set(n))}function h(e,o){a.scrollSnapList().forEach(((l,c)=>{const r=Math.abs(o),i=u[c],d=c===e,p=s(d?i+r:i-r,n,t);u[c]=p;const b=d&&g,E=a.previousScrollSnap();b&&(u[E]=1-p),d&&function(e,t){const{index:n,dragHandler:o,scrollSnaps:l}=a.internalEngine(),s=o.pointerDown(),c=1/(l.length-1);let r=e,i=s?a.selectedScrollSnap():a.previousScrollSnap();if(s&&r===i){const e=-1*Math.sign(f);r=i,i=n.clone().set(i).add(e).get()}const d=i*c,u=(r-i)*c;m=d+u*t}(e,p),function(e){const t=a.internalEngine().slideRegistry[e],{scrollSnaps:o,containerRect:l}=a.internalEngine(),s=u[e];t.forEach((t=>{const c=a.slideNodes()[t].style,r=parseFloat(s.toFixed(2)),i=r>n,d=function(e){const{axis:t}=a.internalEngine();return"translate"+t.scroll.toUpperCase()+"("+t.direction(e)+"px)"}(i?o[e]:l.width+2);i&&(c.transform=d),c.opacity=r.toString(),c.pointerEvents=s>.5?"auto":"none",i||(c.transform=d)}))}(c)}))}function y(){const{dragHandler:e,index:t,scrollBody:n}=a.internalEngine(),o=a.selectedScrollSnap();if(!e.pointerDown())return o;const l=Math.sign(n.velocity()),s=Math.sign(f),c=t.clone().set(o).add(-1*l).get();return l&&s?s===l?c:o:null}function k(){const{target:e,location:n}=a.internalEngine(),s=e.get()-n.get(),i=Math.abs(s)>=1,d=y(),m=!c(d);return function(e){const{dragHandler:n,scrollBody:s}=e.internalEngine(),a=l/1e3,i=n.pointerDown(),d=s.velocity()*a,m=s.duration(),g=y(),b=!c(g);if(i){if(!d)return;f+=d,p=Math.abs(d/r),_(g)}if(!i){if(!m||b)return;p+=(t-u[g])/m,p*=o}b||h(g,p)}(a),!m&&!i&&u[d]>.999}function N(){return m}return{name:"fade",options:e,init:function(e){a=e;const o=a.selectedScrollSnap(),{scrollBody:l,containerRect:c,axis:f}=a.internalEngine(),p=f.measureSize(c);r=s(.75*p,200,500),g=!1,u=a.scrollSnapList().map(((e,l)=>l===o?t:n)),i=l.settled,d=a.scrollProgress,l.settled=k,a.scrollProgress=N,a.on("select",v).on("slideFocus",b).on("pointerDown",S).on("pointerUp",E),function(){const{translate:e,slideLooper:t}=a.internalEngine();e.clear(),e.toggleActive(!1),t.loopPoints.forEach((e=>{let{translate:t}=e;t.clear(),t.toggleActive(!1)}))}(),b()},destroy:function(){const{scrollBody:e}=a.internalEngine();e.settled=i,a.scrollProgress=d,a.off("select",v).off("slideFocus",b).off("pointerDown",S).off("pointerUp",E),a.slideNodes().forEach((e=>{const t=e.style;t.opacity="",t.transform="",t.pointerEvents="",e.getAttribute("style")||e.removeAttribute("style")}))}}}a.globalOptions=void 0;var r=n(7105),i=n(642),d=n(6448);var u=e=>{const{slides:t,options:n}=e,[s,c]=(0,l.A)(n,[a()]),{selectedIndex:u,scrollSnaps:f,onDotButtonClick:p}=(0,i.R)(c),{prevBtnDisabled:m,nextBtnDisabled:g,onPrevButtonClick:b,onNextButtonClick:E}=(0,r.Hd)(c);return o.createElement("div",{className:"embla"},o.createElement("div",{className:"embla__viewport",ref:s},o.createElement("div",{className:"embla__container"},t.map((e=>o.createElement("div",{className:"embla__slide",key:e},o.createElement("img",{className:"embla__slide__img",src:(0,d.u)(e),alt:"Your alt text"})))))),o.createElement("div",{className:"embla__controls"},o.createElement("div",{className:"embla__buttons"},o.createElement(r.U1,{onClick:b,disabled:m}),o.createElement(r.WE,{onClick:E,disabled:g})),o.createElement("div",{className:"embla__dots"},f.map(((e,t)=>o.createElement(i.c,{key:t,onClick:()=>p(t),className:"embla__dot".concat(t===u?" embla__dot--selected":"")}))))))}},6448:function(e,t,n){n.d(t,{u:function(){return l}});const o=[n.p+"static/slide-1-47ed6052f4455272d8f76db16447d760.jpg",n.p+"static/slide-2-dc15cfe63eb4aeb8c9c09823179ee64c.jpg",n.p+"static/slide-3-6362505742d23d7cd240880140151a95.jpg",n.p+"static/slide-4-ebad84cfea5ff9481504ded363c22003.jpg",n.p+"static/slide-5-2d88e98502aa565d6269834d7a7be406.jpg"],l=e=>o[e%o.length]}}]);
//# sourceMappingURL=5029-52cdb6d32f664624b054.js.map