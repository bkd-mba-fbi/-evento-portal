import{$ as m,$a as y,Ga as h,Ha as v,Ia as s,Ja as _,Sa as r,Sb as E,Ta as l,Ya as C,_a as p,ha as b,ia as f,jb as c,ra as g,tb as k,ua as u,ud as x}from"./chunk-XTHSYQMN.js";function z(e,t,a){return a?e.filter(S(t,a)):e}function S(e,t){let a=I(t);return o=>e.some(n=>w(o[n],a))}function w(e,t){return e?I(String(e)).includes(t):!1}function I(e){return x(e.toLowerCase())}function T(e,t){if(e&1){let a=C();r(0,"button",5),p("click",function(){b(a);let n=y();return f(n.valueChange.emit(""))}),r(1,"i",2),c(2,"clear"),l()()}}var j=(()=>{let t=class t{constructor(){this.value="",this.disabled=!1,this.valueChange=new g}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["bkd-resettable-input"]],inputs:{value:"value",disabled:"disabled",placeholder:"placeholder",label:"label"},outputs:{valueChange:"valueChange"},standalone:!0,features:[k],decls:6,vars:7,consts:[[1,"input-group"],["id","resettable-input",1,"input-group-text"],[1,"material-icons"],["type","text","aria-describedby","resettable-input",1,"form-control",3,"keyup","value","disabled"],["class","clear btn btn-link text-decoration-none","type","button",3,"click",4,"ngIf"],["type","button",1,"clear","btn","btn-link","text-decoration-none",3,"click"]],template:function(n,i){n&1&&(r(0,"div",0)(1,"span",1)(2,"i",2),c(3,"search"),l()(),r(4,"input",3),p("keyup",function(d){return i.valueChange.emit(d.target==null?null:d.target.value)}),l(),h(5,T,3,0,"button",4),l()),n&2&&(u(4),_("has-value",i.value),s("value",i.value)("disabled",i.disabled),v("placeholder",i.placeholder)("aria-label",i.label),u(),s("ngIf",i.value))},dependencies:[E],styles:["input.has-value[_ngcontent-%COMP%]{padding-right:2.5em}.btn.clear[_ngcontent-%COMP%]{position:absolute;right:0;z-index:5;padding-left:.5rem;padding-right:.5rem}"]});let e=t;return e})();export{z as a,j as b};