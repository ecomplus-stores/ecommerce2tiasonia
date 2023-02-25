/*! For license information please see chunk.37c3022ed3f85c3a7925.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{256:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n(24);function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}var s={selector:"vue-portal-target-".concat(((e=21)=>{let t="",n=e;for(;n--;)t+="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[64*Math.random()|0];return t})())},i=function(e){return s.selector=e},a="undefined"!=typeof window&&void 0!==("undefined"==typeof document?"undefined":r(document)),d=o.a.extend({abstract:!0,name:"PortalOutlet",props:["nodes","tag"],data:function(e){return{updatedNodes:e.nodes}},render:function(e){var t=this.updatedNodes&&this.updatedNodes();return t?1!==t.length||t[0].text?e(this.tag||"DIV",t):t:e()},destroyed:function(){var e=this.$el;e&&e.parentNode.removeChild(e)}}),c=o.a.extend({name:"VueSimplePortal",props:{disabled:{type:Boolean},prepend:{type:Boolean},selector:{type:String,default:function(){return"#".concat(s.selector)}},tag:{type:String,default:"DIV"}},render:function(e){if(this.disabled){var t=this.$scopedSlots&&this.$scopedSlots.default();return t?t.length<2&&!t[0].text?t:e(this.tag,t):e()}return e()},created:function(){this.getTargetEl()||this.insertTargetEl()},updated:function(){var e=this;this.$nextTick((function(){e.disabled||e.slotFn===e.$scopedSlots.default||(e.container.updatedNodes=e.$scopedSlots.default),e.slotFn=e.$scopedSlots.default}))},beforeDestroy:function(){this.unmount()},watch:{disabled:{immediate:!0,handler:function(e){e?this.unmount():this.$nextTick(this.mount)}}},methods:{getTargetEl:function(){if(a)return document.querySelector(this.selector)},insertTargetEl:function(){if(a){var e=document.querySelector("body"),t=document.createElement(this.tag);t.id=this.selector.substring(1),e.appendChild(t)}},mount:function(){if(a){var e=this.getTargetEl(),t=document.createElement("DIV");this.prepend&&e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t),this.container=new d({el:t,parent:this,propsData:{tag:this.tag,nodes:this.$scopedSlots.default}})}},unmount:function(){this.container&&(this.container.$destroy(),delete this.container)}}});function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.component(t.name||"portal",c),t.defaultSelector&&i(t.defaultSelector)}"undefined"!=typeof window&&window.Vue&&window.Vue===o.a&&o.a.use(l)},373:function(e,t,n){"use strict";n.r(t);n(4),n(23);var o=n(0),r=n(24),s=n(271);t.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"search-engine",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"search-pagination";const a=document.getElementById(t);if(a){const d=document.getElementById(`${t}-dock`);let c;const l=window.storefront&&window.storefront.getScopedSlots,{dataset:u}=a,h=new URLSearchParams(window.location.search),p={...e.props,term:h.get("term"),brands:h.getAll("brands[]"),categories:h.getAll("categories[]"),defaultFilters:h.getAll("filters[]").reduce(((e,t)=>{const[n,o]=t.split(":");return e[n]||(e[n]=[]),e[n].push(o),e}),{}),defaultSort:u.sort||h.get("sort")};["brands","categories"].forEach((e=>{if(u[e]){try{p[e]=JSON.parse(u[e])}catch(e){return void console.error(e)}p[e]&&p[e].length<2&&(p[`isFixed${e.charAt(0).toUpperCase()}${e.slice(1)}`]=!0),p.hasPopularItems=!1}}));const{resource:f}=window.document.body.dataset;switch(f){case"brands":case"categories":if(!p[f]||!p[f].length)return void console.error(new Error(`Skipping SearchEngine with empty '${f}' filter`))}const m=document.title,g=()=>{const e=h.get("term");let t=e?`${e} ~ ${m}`:m;const n=h.get("page");if(n>1&&(t+=` (${n}) `),window.history){const e=h.toString(),{pathname:n}=window.location;window.history.pushState({pathname:n,query:e},t,n+(e?`?${e}`:""))}document.title=t};g();const w=new r.a({data:{countRequests:0,canShowItems:!d,term:p.term,page:parseInt(h.get("page"),10)||1,totalItems:0},render(o){const f=this;return e.pagination&&n.e(36).then(n.bind(null,272)).then((e=>{new r.a({render:t=>t(e.default,{props:{totalItems:f.totalItems,page:f.page},on:{"update:page"(e){f.page=e,h.set("page",e),g(),window.scroll({top:0,behavior:"smooth"})}}})}).$mount(document.getElementById(i))})),o(s.a,{attrs:{id:d?null:t},props:{...p,term:f.term,page:f.page,canLoadMore:!e.pagination&&!u.disableLoadMore,canShowItems:f.canShowItems,loadMoreSelector:d?"#search-engine-load":null,isFilterable:!u.disableFilters},on:{"update:term"(e){f.term=e,h.set("term",e),g()},fetch(e){let{ecomSearch:t,fetching:n,isPopularItems:o}=e;n.then((e=>{if(o||(f.totalItems=t.getTotalCount()),d){f.countRequests++;const t=()=>{f.canShowItems=!0;const e=a.querySelector("#search-engine-snap"),t=a.querySelector(".search-engine__results");t.style.minHeight=e.offsetHeight+"px",e.remove(),setTimeout((()=>{t.style.minHeight=null}),600)};if(!f.canShowItems)if(f.countRequests>1)t();else if(e&&e.hits)if(c&&c.length===e.hits.hits.length){let n=!0;const{hits:o}=e.hits;for(let e=0;e<o.length;e++)if(!c.find(`[data-product-id="${o[e]._id}"]`).length){n=!1;break}n||t()}else t()}}))}},scopedSlots:"function"==typeof l?l(a,o,!d):void 0})}});if(d){Object(o.$)(a).append(Object(o.$)("<div>",{id:"search-engine-load"}));const e=()=>w.$mount(d);if(c=Object(o.$)("#search-engine-snap .product-item"),c.length){const t=new window.MutationObserver((()=>{clearTimeout(n),t.disconnect(),setTimeout(e,150)}));t.observe(c[0],{childList:!0});const n=setTimeout((()=>{t.disconnect(),e()}),3e3)}else e()}else w.$mount(a)}}}}]);
//# sourceMappingURL=chunk.37c3022ed3f85c3a7925.js.map