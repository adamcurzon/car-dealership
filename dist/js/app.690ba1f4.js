(function(){"use strict";var i={966:function(i,t,n){var l=n(9242),e=n(3396);const r=(0,e._)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"},null,-1),s=(0,e._)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:""},null,-1),a=(0,e._)("link",{href:"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap",rel:"stylesheet"},null,-1),o={id:"page-container"};function c(i,t,n,l,c,u){const d=(0,e.up)("SideMenu"),v=(0,e.up)("TopBar"),p=(0,e.up)("router-view");return(0,e.wg)(),(0,e.iD)(e.HY,null,[r,s,a,(0,e.Wm)(d),(0,e._)("div",o,[(0,e.Wm)(v),(0,e.Wm)(p)])],64)}const u={id:"sidemenu"},d=(0,e.uE)('<div class="title"><i class="pi pi-check"></i> Dealership</div><div class="breaker"></div><a href="" class="active"><i class="pi pi-car"></i>All Cars</a><a href=""><i class="pi pi-plus"></i>Add Car</a><a href=""><i class="pi pi-chart-bar"></i>Activity</a><div class="bottom-links"><a href=""><i class="pi pi-power-off"></i>Logout</a></div>',6),v=[d];function p(i,t,n,l,r,s){return(0,e.wg)(),(0,e.iD)("div",u,v)}var f={},_=n(89);const g=(0,_.Z)(f,[["render",p]]);var h=g;const m={id:"topbar"},b=(0,e.uE)('<div class="search"><i class="pi pi-search"></i><input type="text" placeholder="Search a car"></div><div class="topbar-right"><div class="notifications"><i class="pi pi-bell"></i><div class="count">3</div></div><div class="name">Adam Curzon</div><div class="profile"><img src="https://avatars.githubusercontent.com/u/82769416?s=58&amp;v=5"></div></div>',2),w=[b];function y(i,t,n,l,r,s){return(0,e.wg)(),(0,e.iD)("div",m,w)}var C={};const k=(0,_.Z)(C,[["render",y]]);var O=k,P={name:"App",components:{SideMenu:h,TopBar:O}};const j=(0,_.Z)(P,[["render",c]]);var x=j,A=n(65);const D=(0,A.MT)({state(){return{}},mutations:{}});var E=D,F=n(2483);const S=(0,e._)("thead",null,[(0,e._)("td",null,"Car Name"),(0,e._)("td",null,"Car Engine"),(0,e._)("td",null,"Engine Type"),(0,e._)("td",null,"Car Color"),(0,e._)("td",null,"Car Sku"),(0,e._)("td"),(0,e._)("td")],-1),T=(0,e._)("tbody",null,[(0,e._)("tr",null,[(0,e._)("td",null,"Ford Fiesta"),(0,e._)("td",null,"1.1"),(0,e._)("td",null,"Petrol"),(0,e._)("td",null,"Silver"),(0,e._)("td",null,"ford-s"),(0,e._)("td",null,[(0,e._)("button",{class:"green"},"View Car")])]),(0,e._)("tr",null,[(0,e._)("td",null,"Ford Fiesta"),(0,e._)("td",null,"1.6"),(0,e._)("td",null,"Diesel"),(0,e._)("td",null,"Black"),(0,e._)("td",null,"ford-b"),(0,e._)("td",null,[(0,e._)("button",{class:"green"},"View Car")])]),(0,e._)("tr",null,[(0,e._)("td",null,"Ford Fiesta"),(0,e._)("td",null,"1.0"),(0,e._)("td",null,"Petrol"),(0,e._)("td",null,"Grey"),(0,e._)("td",null,"ford-g"),(0,e._)("td",null,[(0,e._)("button",{class:"green"},"View Car")])])],-1),M=[S,T];function W(i,t,n,l,r,s){return(0,e.wg)(),(0,e.iD)("table",null,M)}var Z={};const B=(0,_.Z)(Z,[["render",W]]);var H=B;const U={class:"page"},V=(0,e.uE)('<div class="flex-3"><div class="widget-3 widget accent"><div class="title-small">Total Cars</div><div class="value">3</div><div class="icon"><i class="pi pi-car"></i></div></div><div class="widget-3 widget"><div class="title-small">Users Online</div><div class="value">1</div><div class="icon"><i class="pi pi-user"></i></div></div><div class="widget-3 widget"><div class="title-small">Staff Online</div><div class="value">1</div><div class="icon orange"><i class="pi pi-bolt"></i></div></div></div>',1),z={class:"full-widget widget"},L=(0,e._)("div",{class:"title"},[(0,e.Uk)("All Cars "),(0,e._)("div",{class:"title-right"},[(0,e._)("select",null,[(0,e._)("option",null,"Name"),(0,e._)("option",null,"Engine Size"),(0,e._)("option",null,"Highest Price"),(0,e._)("option",null,"Lowest Price")]),(0,e._)("button",null,[(0,e._)("i",{class:"pi pi-plus-circle"}),(0,e.Uk)(" Add Car")])])],-1),N={};var G=Object.assign(N,{__name:"HomePage",setup(i){return(i,t)=>((0,e.wg)(),(0,e.iD)("div",U,[V,(0,e._)("div",z,[L,(0,e.Wm)(H)])]))}});const I=G;var Y=I;const q=[{path:"/",component:Y}],J=(0,F.p7)({history:(0,F.PO)("/car-dealership/"),routes:q});var K=J;const Q=(0,l.ri)(x);Q.use(K),Q.use(E),Q.mount("#app")}},t={};function n(l){var e=t[l];if(void 0!==e)return e.exports;var r=t[l]={exports:{}};return i[l].call(r.exports,r,r.exports,n),r.exports}n.m=i,function(){var i=[];n.O=function(t,l,e,r){if(!l){var s=1/0;for(u=0;u<i.length;u++){l=i[u][0],e=i[u][1],r=i[u][2];for(var a=!0,o=0;o<l.length;o++)(!1&r||s>=r)&&Object.keys(n.O).every((function(i){return n.O[i](l[o])}))?l.splice(o--,1):(a=!1,r<s&&(s=r));if(a){i.splice(u--,1);var c=e();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=i.length;u>0&&i[u-1][2]>r;u--)i[u]=i[u-1];i[u]=[l,e,r]}}(),function(){n.n=function(i){var t=i&&i.__esModule?function(){return i["default"]}:function(){return i};return n.d(t,{a:t}),t}}(),function(){n.d=function(i,t){for(var l in t)n.o(t,l)&&!n.o(i,l)&&Object.defineProperty(i,l,{enumerable:!0,get:t[l]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(i){if("object"===typeof window)return window}}()}(),function(){n.o=function(i,t){return Object.prototype.hasOwnProperty.call(i,t)}}(),function(){var i={143:0};n.O.j=function(t){return 0===i[t]};var t=function(t,l){var e,r,s=l[0],a=l[1],o=l[2],c=0;if(s.some((function(t){return 0!==i[t]}))){for(e in a)n.o(a,e)&&(n.m[e]=a[e]);if(o)var u=o(n)}for(t&&t(l);c<s.length;c++)r=s[c],n.o(i,r)&&i[r]&&i[r][0](),i[r]=0;return n.O(u)},l=self["webpackChunkcar_dealership"]=self["webpackChunkcar_dealership"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=n.O(void 0,[998],(function(){return n(966)}));l=n.O(l)})();
//# sourceMappingURL=app.690ba1f4.js.map