"use strict";(self.webpackChunkwebapp_schulverwaltung=self.webpackChunkwebapp_schulverwaltung||[]).push([[592],{4067:(y,D,t)=>{t.d(D,{S9:()=>l,sm:()=>O,ok:()=>I});var e=t(3166),v=t(581),g=t(2816);function r(o,s){(0,g.Z)(2,arguments);var h=(0,v.Z)(o),p=(0,v.Z)(s);return h.getTime()<p.getTime()}function d(o,s){(0,g.Z)(2,arguments);var h=(0,v.Z)(o).getTime(),p=(0,v.Z)(s.start).getTime(),c=(0,v.Z)(s.end).getTime();if(!(p<=c))throw new RangeError("Invalid interval");return h>=p&&h<=c}var n=t(6747);class f{constructor(s,h,p){this.TeacherInformation=s,this.LessonDateTimeFrom=h,this.LessonDateTimeTo=p,this.lessons=[]}addLesson(s){this.lessons.some(h=>(0,n.In)(h,s))||(this.lessons.push(s),this.updateId(),this.updateStudyClassNumbers(),this.updateEventDesignations())}getIds(){return[...new Set(this.lessons.map(s=>s.LessonRef.Id))]}getEventIds(){return[...new Set(this.lessons.map(s=>s.EventRef.Id))]}updateId(){this.id=[...new Set(this.lessons.map(s=>s.LessonRef.Id).sort())].join("-")}updateStudyClassNumbers(){this.studyClassNumbers=[...new Set(this.lessons.map(s=>s.StudyClassNumber).sort((s,h)=>s.localeCompare(h)))].join(", ")}updateEventDesignations(){this.eventDesignations=[...new Set(this.lessons.map(s=>s.EventDesignation).sort())].join(", ")}}function O(o){return I(o).reduce((s,h)=>{const p=s.find(m=>function i(o,s){return null===o&&null===s||null!==o&&null!==s&&o.TeacherInformation===s.TeacherInformation&&o.LessonDateTimeFrom.getTime()===s.LessonDateTimeFrom.getTime()&&o.LessonDateTimeTo.getTime()===s.LessonDateTimeTo.getTime()}(m,h));if(p)return p.addLesson(h),s;const c=function a(o){const s=new f(o.TeacherInformation,o.LessonDateTimeFrom,o.LessonDateTimeTo);return s.addLesson(o),s}(h);return[...s,c]},[]).sort(n.kM)}function l(o){if(0===o.length)return null;const s=new Date;if(o=[...o].sort(n.kM),(0,e.Z)(s,o[0].LessonDateTimeFrom)){for(const h of o)if(r(s,h.LessonDateTimeFrom)||d(s,{start:h.LessonDateTimeFrom,end:h.LessonDateTimeTo}))return h;return o[o.length-1]}return o[0]}function I(o){return o.reduce((s,h)=>s.some(p=>(0,n.In)(p,h))?s:[...s,h],[])}},9592:(y,D,t)=>{t.d(D,{H:()=>n});var e=t(917),v=t(3388),g=t(8705),r=t(4562);const n={path:"student/:id",children:[{path:"",component:t(5582).H,children:[{path:"addresses",component:g.S},{path:"absences",component:v.t},{path:"grades",component:r.M}]},{path:"absences/confirm",component:e.A}]}},3786:(y,D,t)=>{t.d(D,{Az:()=>p,b7:()=>O,k_:()=>l,Sx:()=>h,PW:()=>I,iu:()=>o,PG:()=>f});var e=t(754);var r=t(5803);function d(c,m,E){return void 0===E&&(E="withFallback("+c.name+")"),function g(c,m,E){void 0===E&&(E=c.name);var T=function v(c){var m=Object.create(Object.getPrototypeOf(c));return Object.assign(m,c),m}(c);return T.validate=m,T.decode=function(S){return m(S,e.Ju(T))},T.name=E,T}(c,function(T,S){return(0,r.vx)(function(){return e.Vp(m)})(c.validate(T,S))},E)}var n=t(8121),i=t(8470);const a=e.dt({Key:e.Z_,Value:e.Z_}),f=e.dt({Id:e.Z_,Settings:e.OT(e.IX(a))}),O=n.X_.pipe(e.dt({mail:d(e.O7,!1),gui:d(e.O7,!1),phoneMobile:d(e.O7,!1)})),l=new e.Dy("NotificationTypesInactive",c=>Array.isArray(c)&&c.every(m=>"string"==typeof m),(c,m)=>"string"==typeof c?e.Vp(c.split(";").filter(Boolean)):e.Rn(c,m),c=>c.join(";"));var I=function(c){return c.Grid="grid",c.List="list",c}(I||{});const o=n.X_.pipe(e.dt({presenceControl:e.mM({grid:null,list:null})})),s=e.dt({eventId:(0,n.Wx)(e.pk),group:(0,n.Wx)(i.b.props.Key)}),h=n.X_.pipe(e.OT(e.IX(s))),p=e.dt({AccessInfo:e.dt({Roles:e.IX(e.Z_),Permissions:e.IX(e.Z_)})})},9245:(y,D,t)=>{t.d(D,{$:()=>h});var e=t(754),v=t(6232),g=t(2096),r=t(4664),d=t(7398),n=t(4141);const i=e.dt({Id:e.pk,Designation:e.Z_,Number:e.Z_});var a=t(275),f=t(7470),O=t(8366),l=t(5879),I=t(9862),o=t(9515),s=t(6869);let h=(()=>{class p extends O.v{constructor(m,E,T,S){super(m,E,i,"EducationalEvents"),this.translate=T,this.toastService=S,this.typeaheadCodec=e.dt((0,f.e)(this.codec.props,["Id","Designation","Number"]))}getTypeaheadItems(m){return this.http.get(`${this.baseUrl}/CurrentSemester`,{params:{fields:["Id","Designation","Number"].join(","),"filter.Designation":`~*${m}*`}}).pipe((0,r.w)((0,a.Y0)(this.typeaheadCodec)),(0,d.U)(E=>E.map(T=>({Key:T.Id,Value:`${T.Designation} (${T.Number})`}))))}getTypeaheadItemByKey(m){return this.http.get(`${this.baseUrl}/CurrentSemester`,{params:{fields:["Id","Designation","Number"].join(","),"filter.Id":`=${m}`}}).pipe((0,r.w)((0,a.Y0)(this.typeaheadCodec)),(0,r.w)(E=>0===E.length?(this.toastService.error(this.translate.instant("global.rest-errors.notfound-message"),this.translate.instant("global.rest-errors.notfound-title")),v.E):(0,g.of)({Key:E[0].Id,Value:`${E[0].Designation} (${E[0].Number})`})))}static#t=this.\u0275fac=function(E){return new(E||p)(l.LFG(I.eN),l.LFG(n.L6),l.LFG(o.sK),l.LFG(s.k))};static#e=this.\u0275prov=l.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})()},654:(y,D,t)=>{t.d(D,{O:()=>a});var e=t(4664),v=t(4141),g=t(6514),r=t(275),d=t(8366),n=t(5879),i=t(9862);let a=(()=>{class f extends d.v{constructor(l,I){super(l,I,g.t,"Events")}getSubscriptionDetailsDefinitions(l){return this.http.get(`${this.baseUrl}/${l}/SubscriptionDetails`).pipe((0,e.w)((0,r.Y0)(this.codec)))}getDesignation(l){const I=l.Classes?l.Classes.map(o=>o.Number).join(", "):null;return I?l.Designation+", "+I:l.Designation}static#t=this.\u0275fac=function(I){return new(I||f)(n.LFG(i.eN),n.LFG(v.L6))};static#e=this.\u0275prov=n.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"})}return f})()},9018:(y,D,t)=>{t.d(D,{R:()=>a});var e=t(4664),v=t(4141),g=t(2738),r=t(275),d=t(7346),n=t(5879),i=t(9862);let a=(()=>{class f extends d.r{constructor(l,I){super(l,I,g.y,"StudyClasses","Number")}getActive(){return this.http.get(`${this.baseUrl}/?filter.IsActive==true`,{headers:{"X-Role-Restriction":"ClassTeacherRole"}}).pipe((0,e.w)((0,r.Y0)(g.y)))}getActiveFormativeAssessments(){return this.http.get(`${this.baseUrl}/FormativeAssessments?filter.IsActive==true`,{headers:{"X-Role-Restriction":"ClassTeacherRole"}}).pipe((0,e.w)((0,r.Y0)(g.y)))}static#t=this.\u0275fac=function(I){return new(I||f)(n.LFG(i.eN),n.LFG(v.L6))};static#e=this.\u0275prov=n.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"})}return f})()},7938:(y,D,t)=>{t.d(D,{s:()=>S});var e=t(8645),v=t(7921),g=t(3620),r=t(4664),d=t(7398),n=t(7081),i=t(9397),a=t(3786),f=t(275),O=t(1006),l=t(5879),I=t(4141),o=t(8366),s=t(9862);let h=(()=>{class L extends o.v{constructor(u,C){super(u,C,a.PG,"UserSettings")}getUserSettingsCst(u){return this.http.get(`${this.baseUrl}/Cst`,{params:u}).pipe((0,r.w)((0,f.Jx)(this.codec)))}updateUserSettingsCst(u){return this.http.patch(`${this.baseUrl}/Cst`,u)}getAccessInfo(){return this.http.get(`${this.baseUrl}/?expand=AccessInfo`).pipe((0,r.w)((0,f.Jx)(a.Az)),(0,d.U)(({AccessInfo:u})=>u))}static#t=this.\u0275fac=function(C){return new(C||L)(l.LFG(s.eN),l.LFG(I.L6))};static#e=this.\u0275prov=l.Yz7({token:L,factory:L.\u0275fac,providedIn:"root"})}return L})();const c="presenceControlViewMode",m="presenceControlGroupView",E="notification",T="notificationTypesInactive";let S=(()=>{class L{constructor(u){this.settingsRestService=u,this.refetch$=new e.x,this.settings$=this.refetch$.pipe((0,v.O)(null),(0,g.b)(100),(0,r.w)(()=>this.settingsRestService.getUserSettingsCst()),(0,d.U)(C=>C.Settings),(0,n.d)(1)),this.accessInfo$=this.settingsRestService.getAccessInfo().pipe((0,n.d)(1))}refetch(){this.refetch$.next()}getSetting(u){return this.settings$.pipe((0,d.U)(C=>C.find(P=>P.Key===u)?.Value??null))}saveSetting(u,C){return this.settingsRestService.updateUserSettingsCst(this.buildSettings(u,C)).pipe((0,i.b)(()=>this.refetch$.next()))}getPresenceControlViewMode(){return this.getSetting(c).pipe((0,O.LS)('{"presenceControl":"grid"}'),(0,r.w)((0,f.Jx)(a.iu)),(0,d.U)(({presenceControl:u})=>u))}savePresenceControlViewMode(u){return this.saveSetting(c,a.iu.encode({presenceControl:u}))}getPresenceControlGroupView(){return this.getSetting(m).pipe((0,O.LS)("[]"),(0,r.w)((0,f.Jx)(a.Sx)))}savePresenceControlGroupView(u){return this.saveSetting(m,a.Sx.encode(u))}getNotificationChannels(){return this.getSetting(E).pipe((0,O.LS)("{}"),(0,r.w)((0,f.Jx)(a.b7)))}saveNotificationChannels(u){return this.saveSetting(E,a.b7.encode(u))}getNotificationTypesInactive(){return this.getSetting(T).pipe((0,O.LS)(""),(0,r.w)((0,f.Jx)(a.k_)))}saveNotificationTypesInactive(u){return this.saveSetting(T,a.k_.encode(u))}getRolesAndPermissions(){return this.accessInfo$.pipe((0,d.U)(({Roles:u,Permissions:C})=>[...u,...C]),(0,v.O)(null))}buildSettings(u,C){return{Id:"Cst",Settings:[{Key:u,Value:C}]}}static#t=this.\u0275fac=function(C){return new(C||L)(l.LFG(h))};static#e=this.\u0275prov=l.Yz7({token:L,factory:L.\u0275fac,providedIn:"root"})}return L})()},2388:(y,D,t)=>{t.d(D,{i:()=>v});var e=t(5301);function v(r){return Object.keys(r).reduce((d,n)=>{const i=function g(r){return r?r instanceof Date?(0,e.Z)(r,"yyyy-MM-dd"):String(r):null}(r[n]);return i?{...d,[n]:i}:d},{})}},6191:(y,D,t)=>{t.d(D,{C:()=>g,v:()=>v});var e=t(3449);function v(r,d,n){return r.map(i=>{let f,a=null;return i.TypeRef.Id&&(a=d.find(O=>O.Id===i.TypeRef.Id)||null),i.ConfirmationStateId&&(f=n.find(O=>O.Key===i.ConfirmationStateId)),new e.Oz(i,a,null,f)})}function g(r,d,n){return r?d.filter(i=>n.find(a=>a===i.lessonPresence.StudentRef.Id)):d}},2547:(y,D,t)=>{t.d(D,{P:()=>v});var e=t(1437);function v(n,i){return i?n.filter(function g(n){const i=d(n);return a=>r(a.studentFullName,i)||r(a.studyClassNumber,i)||r(a.Designation,i)||r(a.evaluationText,i)}(i)):n}function r(n,i){return!!n&&d(n).includes(i)}function d(n){return(0,e.Z)(n.toLowerCase())}}}]);