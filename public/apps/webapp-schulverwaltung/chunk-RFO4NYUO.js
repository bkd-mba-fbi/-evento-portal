import{$ as d,Ac as R,Cc as b,Cd as G,Ec as w,Fc as y,Hc as L,Ia as j,Id as N,Mc as p,Nc as O,O as C,Rc as B,Sa as g,Ta as f,Ua as D,Vc as E,W as M,Z as m,a as v,ab as F,b as A,bb as T,dc as k,jb as U,k as S,kb as $,m as P,n as x,tb as h,td as I,ua as u,xd as z,zc as a}from"./chunk-XTHSYQMN.js";var X=(()=>{let n=class n{constructor(){this.expanded=!1}};n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=d({type:n,selectors:[["bkd-caret"]],inputs:{expanded:"expanded"},standalone:!0,features:[h],decls:2,vars:1,consts:[["role","button",1,"d-flex","material-icons"]],template:function(e,r){e&1&&(g(0,"i",0),U(1),f()),e&2&&(u(),$(r.expanded?"expand_less":"expand_more"))},styles:["i[_ngcontent-%COMP%]:hover{color:#ea161f}"]});let o=n;return o})();var K=["*"],Z=(()=>{let n=class n{constructor(){this.opened=!1}};n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=d({type:n,selectors:[["bkd-student-dossier-entry-header"]],inputs:{opened:"opened"},standalone:!0,features:[h],ngContentSelectors:K,decls:3,vars:1,consts:[[1,"m-0"],[1,"d-flex","align-items-center",3,"expanded"]],template:function(e,r){e&1&&(F(),g(0,"h5",0),T(1),f(),D(2,"bkd-caret",1)),e&2&&(u(2),j("expanded",r.opened))},dependencies:[X],styles:["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:1rem;border-top:1px solid #dee2e6;cursor:pointer}button[_ngcontent-%COMP%]{color:#000;text-decoration:none}.btn-link[_ngcontent-%COMP%]:hover{text-decoration:none}"],changeDetection:0});let o=n;return o})();var V=y({Id:R,Title:a}),q=p(w(V));var ct=(()=>{let n=class n{constructor(t,e,r){this.settings=t,this.storageService=e,this.http=r}getPersonMasterDataReports(t){return this.getAvailableReports("Person",this.settings.personMasterDataReports,[t])}getStudentConfirmationReports(t){return this.getAvailableReports("Praesenzinformation",this.settings.studentConfirmationReports,t)}getEvaluateAbsencesReports(t){return this.getAvailableReports("Praesenzinformation",this.settings.evaluateAbsencesReports,t)}getMyAbsencesReports(t){return this.getAvailableReports("Praesenzinformation",this.settings.myAbsencesReports,t)}getCourseReports(t){return this.getAvailableReports("Anlass",this.settings.testsByCourseReports,[t])}getStudentSubscriptionReports(t){return this.settings.testsBySubscriptionStudentReports.map((r,s)=>{let i=this.getReportUrl(r.type,"Anmeldung",r.id,t);return A(v({},r),{title:`Report ${s+1}`,url:i})})}getTeacherSubscriptionReports(t){return this.settings.testsBySubscriptionTeacherReports.map((r,s)=>{let i=this.getReportUrl(r.type,"Anmeldung",r.id,t);return A(v({},r),{title:`Report ${s+1}`,url:i})})}getAvailableReports(t,e,r){let s=z(e,l=>l.type),i=x(Object.keys(s).map(l=>this.getAvailableReportsForType(l,t,s[l].map(({id:c})=>c),r)));return this.mergeAvailableReports(i,e)}getAvailableReportsForType(t,e,r,s){return s.length===0?S([]):this.http.get(this.getReportAvailabilityUrl(t,e,r,s)).pipe(C(G(q)),P(i=>i?i.map(({Id:l,Title:c})=>({type:t,id:l,title:c,url:this.getReportUrl(t,e,l,s)})):[]))}mergeAvailableReports(t,e){return t.pipe(P(r=>{let s=I(r);return e.reduce((i,l)=>{let c=s.find(({id:J})=>J===l.id);return c?[...i,c]:i},[])}))}getReportUrl(t,e,r,s){let i=new URL(`${this.settings.apiUrl}/Files/${this.getReportTypePathPart(t)}/${e}/${r}`);return i.searchParams.set("ids",s.join(",")),i.searchParams.set("token",this.storageService.getAccessToken()??""),i.toString()}getReportAvailabilityUrl(t,e,r,s){let i=new URL(`${this.settings.apiUrl}/${this.getReportTypePathPart(t)}/AvailableReports/${e}`);return i.searchParams.set("ids",Array.isArray(r)?r.join(","):String(r)),i.searchParams.set("keys",s.join(",")),i.toString()}getReportTypePathPart(t){return`${t[0].toUpperCase()+t.slice(1)}Reports`}};n.\u0275fac=function(e){return new(e||n)(m(E),m(N),m(k))},n.\u0275prov=M({token:n,factory:n.\u0275fac,providedIn:"root"});let o=n;return o})();var gt=y({Id:R,AddressLine1:p(a),AddressLine2:O(a),Birthdate:p(B),DisplayEmail:p(a),FullName:a,Gender:L([b("M"),b("F"),b("X")]),Location:p(a),PhoneMobile:p(a),PhonePrivate:p(a),PostalCode:p(a)});export{X as a,Z as b,gt as c,ct as d};