import{Cd as k,Ea as b,Fa as f,Ma as h,Oa as v,Pa as _,Qa as g,Ua as C,Za as a,_a as r,da as d,db as x,ea as m,fb as s,gb as y,pa as o,qb as p,wa as u}from"./chunk-34ZOBT6Z.js";function S(e,l){if(e&1){let n=x();a(0,"button",5),s("click",function(){d(n);let t=y();return m(t.value.set(""))}),a(1,"i",2),p(2,"clear"),r()()}}var z=(()=>{class e{constructor(){this.value=b(""),this.disabled=o(!1),this.placeholder=o(""),this.label=o("")}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=f({type:e,selectors:[["bkd-resettable-input"]],inputs:{value:[1,"value"],disabled:[1,"disabled"],placeholder:[1,"placeholder"],label:[1,"label"]},outputs:{value:"valueChange"},decls:6,vars:7,consts:[[1,"input-group"],["id","resettable-input",1,"input-group-text"],[1,"material-icons"],["type","text","aria-describedby","resettable-input",1,"form-control",3,"input","value","disabled"],["type","button",1,"clear","btn","btn-link","text-decoration-none"],["type","button",1,"clear","btn","btn-link","text-decoration-none",3,"click"]],template:function(i,t){i&1&&(a(0,"div",0)(1,"span",1)(2,"i",2),p(3,"search"),r()(),a(4,"input",3),s("input",function(c){return t.value.set(c.target==null?null:c.target.value)}),r(),h(5,S,3,0,"button",4),r()),i&2&&(u(4),g("has-value",t.value()),_("value",t.value())("disabled",t.disabled()),v("placeholder",t.placeholder())("aria-label",t.label()),u(),C(t.value()?5:-1))},styles:["input.has-value[_ngcontent-%COMP%]{padding-right:2.5em}.btn.clear[_ngcontent-%COMP%]{position:absolute;right:0;z-index:5;padding-left:.5rem;padding-right:.5rem}"]})}}return e})();function O(e,l,n){return n?e.filter(w(l,n)):e}function w(e,l){let n=E(l);return i=>e.some(t=>I(i[t],n))}function I(e,l){return e?E(String(e)).includes(l):!1}function E(e){return k(e.toLowerCase())}export{z as a,O as b};