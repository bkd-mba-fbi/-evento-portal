"use strict";(self.webpackChunkwebapp_schulverwaltung=self.webpackChunkwebapp_schulverwaltung||[]).push([[66],{66:(ie,x,i)=>{i.r(x),i.d(x,{DashboardModule:()=>ne});var I=i(6486),f=i(1523),t=i(5879),M=i(7328),b=i(4664),l=i(7081),r=i(7398),u=i(2096),D=i(7921),T=i(2572),_=i(4141),U=i(3942),y=i(7938),C=i(7575),v=i(3779),R=i(1074),z=i(8366),A=i(754);const N=A.dt({Id:A.pk,Holder:A.Z_});var J=i(9862);let Y=(()=>{class e extends z.v{constructor(n,s){super(n,s,N,"TeacherSubstitutions")}getTeacherSubstitution(n){return this.getList({params:{"filter.Id":`=${n}`}}).pipe((0,r.U)(s=>s[0]||null))}static#t=this.\u0275fac=function(s){return new(s||e)(t.LFG(J.eN),t.LFG(_.L6))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Q=i(5258),w=i(8173);const E=["LessonTeacherRole","ClassTeacherRole","TeacherRole","AbsenceAdministratorRole"],F=["LessonTeacherRole","TeacherRole","StudentRole","SubstituteAdministratorRole"],k=["LessonTeacherRole","StudentRole"];let p=(()=>{class e{constructor(n,s,a,h,m,se,ae,oe){this.settingsService=n,this.lessonPresencesService=s,this.studentsService=a,this.courseService=h,this.teacherSubstitutionService=m,this.personService=se,this.storageService=ae,this.settings=oe,this.rolesAndPermissions$=this.settingsService.getRolesAndPermissions(),this.studentId$=new M.t(1),this.lessonAbsences$=this.studentId$.pipe((0,b.w)(c=>this.studentsService.getLessonAbsences(c)),(0,l.d)(1)),this.lessonIncidents$=this.studentId$.pipe((0,b.w)(c=>this.studentsService.getLessonIncidents(c)),(0,l.d)(1)),this.loading$=this.rolesAndPermissions$.pipe((0,r.U)(c=>null==c)),this.hasSearch$=this.rolesAndPermissions$.pipe((0,r.U)(this.hasRoles(E))),this.hasActions$=this.rolesAndPermissions$.pipe((0,r.U)(this.hasRoles(F))),this.hasTimetable$=this.rolesAndPermissions$.pipe((0,r.U)(this.hasRoles(k))),this.hasLessonTeacherRole$=this.rolesAndPermissions$.pipe((0,r.U)(this.hasRoles(["LessonTeacherRole"])),(0,l.d)(1)),this.hasTeacherRole$=this.rolesAndPermissions$.pipe((0,r.U)(this.hasRoles(["TeacherRole"])),(0,l.d)(1)),this.hasStudentRole$=this.rolesAndPermissions$.pipe((0,r.U)(this.hasRoles(["StudentRole"])),(0,l.d)(1)),this.hasSubstituteAdministratorRole$=this.rolesAndPermissions$.pipe((0,r.U)(this.hasRoles(["SubstituteAdministratorRole"])),(0,l.d)(1)),this.editAbsencesCount$=this.hasLessonTeacherRole$.pipe((0,b.w)(c=>c?this.lessonPresencesService.checkableAbsencesCount():(0,u.of)(!1)),(0,l.d)(1)),this.openAbsencesCount$=this.rolesAndPermissions$.pipe((0,r.U)(this.hasRoles(["LessonTeacherRole","ClassTeacherRole"])),(0,b.w)(c=>c?this.lessonPresencesService.getListOfUnconfirmed():(0,u.of)([])),(0,r.U)(c=>c.length),(0,l.d)(1)),this.myAbsencesCount$=this.hasStudentRole$.pipe((0,b.w)(c=>c?this.getMyAbsences():(0,u.of)([])),(0,r.U)(this.getMyAbsencesCount.bind(this)),(0,l.d)(1)),this.coursesToRateCount$=this.courseService.getNumberOfCoursesForRating().pipe((0,D.O)(0),(0,l.d)(1)),this.hasPresenceControl$=this.hasLessonTeacherRole$.pipe((0,b.w)(c=>c?this.lessonPresencesService.hasLessonsLessonTeacher():(0,u.of)(!1)),(0,l.d)(1)),this.hasOpenAbsences$=this.openAbsencesCount$.pipe((0,r.U)(c=>c>0),(0,l.d)(1)),this.editAbsencesParams$=this.getFullName().pipe((0,r.U)(c=>({confirmationStates:this.settings.checkableAbsenceStateId,teacher:c})),(0,l.d)(1));const P=this.storageService.getPayload()?.id_person;P&&this.studentId$.next(Number(P))}hasRoles(n){return s=>(s??[]).some(a=>n.includes(a))}getMyAbsences(){return(0,T.a)([this.studentId$,this.lessonAbsences$,this.lessonIncidents$]).pipe((0,b.w)(([n,s,a])=>this.loadTimetableEntries(n,s,a).pipe((0,r.U)(h=>[...s,...a].map(m=>this.withTimetableEntry(m,h)).filter(U.Nf)))))}getMyAbsencesCount(n){return n?.filter(s=>("ConfirmationStateId"in s?s.ConfirmationStateId:null)===this.settings.unconfirmedAbsenceStateId).length||0}getFullName(){const n=Number(this.storageService.getPayload()?.substitution_id)||null;return n?this.teacherSubstitutionService.getTeacherSubstitution(n).pipe((0,r.U)(s=>s?.Holder)):this.personService.getMyself().pipe((0,r.U)(s=>s.FullName))}withTimetableEntry(n,s){return s.find(a=>a.Id===n.LessonRef.Id)?n:null}loadTimetableEntries(n,s,a){return this.studentsService.getTimetableEntries(n,{"filter.Id":`;${[...s,...a].map(h=>h.LessonRef.Id).join(";")}`})}static#t=this.\u0275fac=function(s){return new(s||e)(t.LFG(y.s),t.LFG(C.q),t.LFG(v.l),t.LFG(R.s),t.LFG(Y),t.LFG(Q.J),t.LFG(w.V),t.LFG(_.L6))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac})}return e})();var d=i(6814),Z=i(6567),L=i(59),j=i(2015);let q=(()=>{class e{constructor(n,s){this.studentsRestService=n,this.router=s}navigateToDossier(n){const s=Number(n);this.router.navigate(["dashboard","student",s,"addresses"])}static#t=this.\u0275fac=function(s){return new(s||e)(t.Y36(v.l),t.Y36(f.F0))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["erz-dashboard-search"]],decls:1,vars:2,consts:[[3,"typeaheadService","placeholder","valueChange"]],template:function(s,a){1&s&&(t.TgZ(0,"erz-typeahead",0),t.NdJ("valueChange",function(m){return m&&a.navigateToDossier(m)}),t.qZA()),2&s&&t.Q6J("typeaheadService",a.studentsRestService)("placeholder","dashboard.search.placeholder")},dependencies:[j.t],styles:["[_nghost-%COMP%]{display:block;padding:.75rem;background:rgb(247,233,210)}"]})}return e})();var g=i(9515);function H(e,o){1&e&&t.GkF(0)}function X(e,o){if(1&e&&(t.TgZ(0,"a",3),t.YNc(1,H,1,0,"ng-container",4),t.qZA()),2&e){const n=t.oxw(),s=t.MAs(3);t.Q6J("routerLink",n.link)("queryParams",n.linkParams),t.xp6(1),t.Q6J("ngTemplateOutlet",s)}}function B(e,o){1&e&&t.GkF(0)}function G(e,o){if(1&e&&(t.TgZ(0,"a",5),t.YNc(1,B,1,0,"ng-container",4),t.qZA()),2&e){const n=t.oxw(),s=t.MAs(3);t.Q6J("href",n.externalLink,t.LSH),t.xp6(1),t.Q6J("ngTemplateOutlet",s)}}function W(e,o){if(1&e&&(t.TgZ(0,"span",9),t._uU(1),t.qZA()),2&e){const n=t.oxw(2);t.xp6(1),t.Oqu(n.count)}}function V(e,o){1&e&&(t.O4$(),t.TgZ(0,"svg",10),t._UZ(1,"path",11),t.qZA())}function K(e,o){if(1&e&&(t.TgZ(0,"span",6),t._uU(1),t.ALo(2,"translate"),t.qZA(),t.TgZ(3,"div"),t.Hsn(4),t.YNc(5,W,2,1,"span",7),t.YNc(6,V,2,0,"ng-template",null,8,t.W1O),t.qZA()),2&e){const n=t.MAs(7),s=t.oxw();t.xp6(1),t.Oqu(t.lcZ(2,3,s.label)),t.xp6(4),t.Q6J("ngIf",s.count>=0)("ngIfElse",n)}}const tt=["*"];let et=(()=>{class e{constructor(){}static#t=this.\u0275fac=function(s){return new(s||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["erz-dashboard-action"]],inputs:{label:"label",count:"count",link:"link",linkParams:"linkParams",externalLink:"externalLink"},ngContentSelectors:tt,decls:4,vars:2,consts:[[3,"routerLink","queryParams",4,"ngIf"],[3,"href",4,"ngIf"],["actionContent",""],[3,"routerLink","queryParams"],[4,"ngTemplateOutlet"],[3,"href"],[1,"label"],["class","count",4,"ngIf","ngIfElse"],["icon",""],[1,"count"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","none"],["fill","currentColor","d","m12 20-1.425-1.4 5.6-5.6H4v-2h12.175l-5.6-5.6L12 4l8 8-8 8Z"]],template:function(s,a){1&s&&(t.F$t(),t.YNc(0,X,2,3,"a",0),t.YNc(1,G,2,2,"a",1),t.YNc(2,K,8,5,"ng-template",null,2,t.W1O)),2&s&&(t.Q6J("ngIf",!a.externalLink),t.xp6(1),t.Q6J("ngIf",a.externalLink))},dependencies:[d.O5,d.tP,f.rH,g.X$],styles:["a[_ngcontent-%COMP%]{display:flex;gap:1rem;justify-content:space-between;align-items:center;padding:1rem 1.5rem;background:rgb(247,233,210);text-decoration:none;line-height:1}a[_ngcontent-%COMP%]:hover{background:rgb(242,224,195)}a[_ngcontent-%COMP%]:focus-visible{outline-width:2px;outline-offset:-2px}div[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;gap:1rem}.label[_ngcontent-%COMP%]{font-weight:400}.count[_ngcontent-%COMP%]{font-size:1.5rem}"]})}return e})();var nt=i(500);let st=(()=>{class e{constructor(){}static#t=this.\u0275fac=function(s){return new(s||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["erz-dashboard-deadline"]],inputs:{count:"count"},decls:3,vars:8,template:function(s,a){1&s&&(t._uU(0),t.ALo(1,"translate"),t.ALo(2,"addSpace")),2&s&&t.lnq("",t.lcZ(1,3,"dashboard.actions.deadline"),"",t.xi3(2,5,": ",":"),"",a.count,"\n")},dependencies:[g.X$,nt.u],styles:["[_nghost-%COMP%]{background:rgb(234,22,31);color:#fff;white-space:nowrap;font-weight:500;font-size:.875rem;min-height:1.5rem;display:flex;padding:.375rem .5rem;align-items:center;border-radius:2.5rem}"]})}return e})();const at=function(){return["/presence-control"]};function ot(e,o){1&e&&t._UZ(0,"erz-dashboard-action",4),2&e&&t.Q6J("label","dashboard.actions.presence-control")("link",t.DdM(2,at))}const it=function(){return["/edit-absences"]};function rt(e,o){if(1&e&&(t._UZ(0,"erz-dashboard-action",5),t.ALo(1,"async"),t.ALo(2,"async")),2&e){const n=t.oxw();t.Q6J("label","dashboard.actions.edit-absences")("link",t.DdM(8,it))("linkParams",t.lcZ(1,4,n.dashboardService.editAbsencesParams$))("count",t.lcZ(2,6,n.dashboardService.editAbsencesCount$))}}const ct=function(){return["/open-absences"]};function lt(e,o){if(1&e&&(t._UZ(0,"erz-dashboard-action",6),t.ALo(1,"async")),2&e){const n=t.oxw();t.Q6J("label","dashboard.actions.open-absences")("link",t.DdM(5,ct))("count",t.lcZ(1,3,n.dashboardService.openAbsencesCount$))}}function dt(e,o){if(1&e&&(t._UZ(0,"erz-dashboard-deadline",8),t.ALo(1,"async")),2&e){const n=t.oxw(2);t.Q6J("count",t.lcZ(1,1,n.dashboardService.coursesToRateCount$))}}const ht=function(){return["/events"]};function bt(e,o){if(1&e&&(t.TgZ(0,"erz-dashboard-action",4),t.YNc(1,dt,2,3,"erz-dashboard-deadline",7),t.ALo(2,"async"),t.qZA()),2&e){const n=t.oxw();t.Q6J("label","dashboard.actions.tests")("link",t.DdM(5,ht)),t.xp6(1),t.Q6J("ngIf",t.lcZ(2,3,n.dashboardService.coursesToRateCount$)>0)}}const mt=function(){return["/my-absences","report"]};function ut(e,o){1&e&&t._UZ(0,"erz-dashboard-action",4),2&e&&t.Q6J("label","dashboard.actions.my-absences-report")("link",t.DdM(2,mt))}const pt=function(){return["/my-absences"]};function gt(e,o){if(1&e&&(t._UZ(0,"erz-dashboard-action",6),t.ALo(1,"async")),2&e){const n=t.oxw();t.Q6J("label","dashboard.actions.my-absences")("link",t.DdM(5,pt))("count",t.lcZ(1,3,n.dashboardService.myAbsencesCount$))}}function ft(e,o){if(1&e&&t._UZ(0,"erz-dashboard-action",9),2&e){const n=t.oxw();t.Q6J("label","dashboard.actions.substitutions")("externalLink",n.substitutionsAdminLink)}}let _t=(()=>{class e{constructor(n,s){this.dashboardService=n,this.settings=s}get substitutionsAdminLink(){return this.settings.dashboard.substitutionsAdminLink}static#t=this.\u0275fac=function(s){return new(s||e)(t.Y36(p),t.Y36(_.L6))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["erz-dashboard-actions"]],decls:15,vars:23,consts:[[3,"label","link",4,"ngIf"],[3,"label","link","linkParams","count",4,"ngIf"],[3,"label","link","count",4,"ngIf"],[3,"label","externalLink",4,"ngIf"],[3,"label","link"],[3,"label","link","linkParams","count"],[3,"label","link","count"],[3,"count",4,"ngIf"],[3,"count"],[3,"label","externalLink"]],template:function(s,a){1&s&&(t.YNc(0,ot,1,3,"erz-dashboard-action",0),t.ALo(1,"async"),t.YNc(2,rt,3,9,"erz-dashboard-action",1),t.ALo(3,"async"),t.ALo(4,"async"),t.YNc(5,lt,2,6,"erz-dashboard-action",2),t.ALo(6,"async"),t.YNc(7,bt,3,6,"erz-dashboard-action",0),t.ALo(8,"async"),t.YNc(9,ut,1,3,"erz-dashboard-action",0),t.ALo(10,"async"),t.YNc(11,gt,2,6,"erz-dashboard-action",2),t.ALo(12,"async"),t.YNc(13,ft,1,2,"erz-dashboard-action",3),t.ALo(14,"async")),2&s&&(t.Q6J("ngIf",t.lcZ(1,7,a.dashboardService.hasPresenceControl$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(3,9,a.dashboardService.hasLessonTeacherRole$)&&t.lcZ(4,11,a.dashboardService.editAbsencesParams$)),t.xp6(3),t.Q6J("ngIf",t.lcZ(6,13,a.dashboardService.hasOpenAbsences$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(8,15,a.dashboardService.hasTeacherRole$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(10,17,a.dashboardService.hasStudentRole$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(12,19,a.dashboardService.hasStudentRole$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(14,21,a.dashboardService.hasSubstituteAdministratorRole$)))},dependencies:[d.O5,et,st,d.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:.5rem}"]})}return e})();var S=i(5619),Tt=i(9397),$=i(9189),vt=i(5301),At=i(8584),xt=i(4307),yt=i(4067);function Ct(e,o){1&e&&(t.TgZ(0,"a",9),t.ALo(1,"safe"),t._uU(2),t.ALo(3,"translate"),t.qZA()),2&e&&(t.Q6J("href",t.xi3(1,2,o.ngIf,"url"),t.LSH),t.xp6(2),t.hij(" ",t.lcZ(3,5,"dashboard.timetable.subscribe-calendar")," "))}function Zt(e,o){1&e&&(t.TgZ(0,"a",13),t.ALo(1,"safe"),t._uU(2),t.ALo(3,"translate"),t.qZA()),2&e&&(t.Q6J("href",t.xi3(1,2,o.ngIf,"url"),t.LSH),t.xp6(2),t.hij(" ",t.lcZ(3,5,"dashboard.timetable.subscribe-calendar")," "))}function Lt(e,o){if(1&e&&(t.ynx(0),t._UZ(1,"erz-dashboard-timetable-table",11),t.YNc(2,Zt,4,7,"a",12),t.ALo(3,"async"),t.BQk()),2&e){const n=t.oxw().erzLet,s=t.oxw();t.xp6(1),t.Q6J("entries",n),t.xp6(1),t.Q6J("ngIf",t.lcZ(3,2,s.getSubscribeCalendarUrl()))}}function St(e,o){if(1&e&&(t.ynx(0),t.YNc(1,Lt,4,4,"ng-container",10),t.ALo(2,"async"),t.BQk()),2&e){const n=t.oxw(),s=t.MAs(21);t.xp6(1),t.Q6J("ngIf",!1===t.lcZ(2,2,n.loading$))("ngIfElse",s)}}function $t(e,o){1&e&&t._UZ(0,"erz-spinner")}let O=(()=>{class e{constructor(n,s,a,h){this.studentsService=n,this.lessonPresencesService=s,this.userSettings=a,this.dashboardService=h,this.studentId$=this.dashboardService.studentId$,this.isTeacher$=this.dashboardService.hasLessonTeacherRole$,this.isStudent$=this.dashboardService.hasStudentRole$,this.date$=new S.X((0,$.Z)(new Date)),this.loading$=new S.X(!0),this.timetableEntries$=this.loadTimetableEntries()}gotoToday(){this.loading$.next(!0),this.date$.next((0,$.Z)(new Date))}gotoPreviousDay(){this.loading$.next(!0),this.date$.next((0,xt.Z)(this.date$.getValue(),1))}gotoNextDay(){this.loading$.next(!0),this.date$.next((0,At.Z)(this.date$.getValue(),1))}getSubscribeCalendarUrl(){return this.userSettings.getSetting("cal")}loadTimetableEntries(){return(0,T.a)([this.isTeacher$,this.isStudent$]).pipe((0,b.w)(([n,s])=>n?this.loadTeacherTimetableEntries():s?this.loadStudentTimetableEntries():(0,u.of)([])),(0,Tt.b)(()=>this.loading$.next(!1)))}loadTeacherTimetableEntries(){return this.date$.pipe((0,b.w)(n=>this.lessonPresencesService.getLessonsByDate(n)),(0,r.U)(yt.ok),(0,r.U)(n=>n.map(this.convertLesson.bind(this))))}loadStudentTimetableEntries(){return(0,T.a)([this.studentId$,this.date$]).pipe((0,b.w)(([n,s])=>this.studentsService.getTimetableEntries(n,{"filter.From":`=${(0,vt.Z)(s,"yyyy-MM-dd")}`,sort:"From,To"})),(0,r.U)(n=>n.map(this.convertTimetableEntry.bind(this))))}convertLesson(n){return{id:n.LessonRef.Id,from:n.LessonDateTimeFrom,until:n.LessonDateTimeTo,eventId:n.EventRef.Id,subject:n.EventDesignation,studyClass:n.StudyClassNumber}}convertTimetableEntry(n){return{id:n.Id,from:n.From,until:n.To,eventId:n.EventId,subject:n.EventDesignation,room:n.EventLocation||void 0,teacher:n.EventManagerInformation}}static#t=this.\u0275fac=function(s){return new(s||e)(t.Y36(v.l),t.Y36(C.q),t.Y36(y.s),t.Y36(p))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["erz-dashboard-timetable"]],decls:22,vars:21,consts:[[1,"header"],["type","button",1,"btn","btn-primary","today",3,"click"],["type","button",1,"btn","btn-secondary","previous-day",3,"click"],[1,"material-icons"],["type","button",1,"btn","btn-secondary","next-day",3,"click"],[1,"date"],["target","_parent","class","btn btn-secondary subscribe-calendar-header",3,"href",4,"ngIf"],[4,"erzLet"],["loading",""],["target","_parent",1,"btn","btn-secondary","subscribe-calendar-header",3,"href"],[4,"ngIf","ngIfElse"],[3,"entries"],["target","_parent","class","btn btn-secondary subscribe-calendar-bottom",3,"href",4,"ngIf"],["target","_parent",1,"btn","btn-secondary","subscribe-calendar-bottom",3,"href"]],template:function(s,a){1&s&&(t.TgZ(0,"div",0)(1,"button",1),t.NdJ("click",function(){return a.gotoToday()}),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"button",2),t.NdJ("click",function(){return a.gotoPreviousDay()}),t.ALo(5,"translate"),t.TgZ(6,"span",3),t._uU(7,"chevron_left"),t.qZA()(),t.TgZ(8,"button",4),t.NdJ("click",function(){return a.gotoNextDay()}),t.ALo(9,"translate"),t.TgZ(10,"span",3),t._uU(11,"chevron_right"),t.qZA()(),t.TgZ(12,"div",5),t._uU(13),t.ALo(14,"date"),t.ALo(15,"async"),t.qZA(),t.YNc(16,Ct,4,7,"a",6),t.ALo(17,"async"),t.qZA(),t.YNc(18,St,3,4,"ng-container",7),t.ALo(19,"async"),t.YNc(20,$t,1,0,"ng-template",null,8,t.W1O)),2&s&&(t.xp6(2),t.hij(" ",t.lcZ(3,6,"dashboard.timetable.today")," "),t.xp6(2),t.uIk("aria-label",t.lcZ(5,8,"dashboard.timetable.previousDay")),t.xp6(4),t.uIk("aria-label",t.lcZ(9,10,"dashboard.timetable.nextDay")),t.xp6(5),t.Oqu(t.xi3(14,12,t.lcZ(15,15,a.date$),"E, dd. MMMM yyyy")),t.xp6(3),t.Q6J("ngIf",t.lcZ(17,17,a.getSubscribeCalendarUrl())),t.xp6(2),t.Q6J("erzLet",t.lcZ(19,19,a.timetableEntries$)))},styles:["[_nghost-%COMP%]{display:block;margin-bottom:1rem}.header[_ngcontent-%COMP%]{margin-top:1rem;margin-bottom:2rem;display:flex;align-items:center;gap:1rem}.previous-day[_ngcontent-%COMP%], .next-day[_ngcontent-%COMP%]{padding-left:.375rem;padding-right:.375rem}.date[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:600}.subscribe-calendar-header[_ngcontent-%COMP%]{margin-left:auto}.subscribe-calendar-bottom[_ngcontent-%COMP%]{display:none}a.btn[_ngcontent-%COMP%]{text-decoration:none}@media (max-width: 767.98px){.subscribe-calendar-header[_ngcontent-%COMP%]{display:none}.subscribe-calendar-bottom[_ngcontent-%COMP%]{display:block;margin-top:2rem}}@media (max-width: 767.98px) and (max-width: 575.98px){.header[_ngcontent-%COMP%]{flex-wrap:wrap-reverse}.header[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{width:100%}}"]})}return e})();function Pt(e,o){1&e&&t._UZ(0,"erz-spinner")}function It(e,o){1&e&&(t.TgZ(0,"p"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"dashboard.no-access")," "))}function Mt(e,o){1&e&&(t.TgZ(0,"div")(1,"h2"),t._uU(2),t.ALo(3,"translate"),t.qZA(),t._UZ(4,"erz-dashboard-search"),t.qZA()),2&e&&(t.xp6(2),t.Oqu(t.lcZ(3,1,"dashboard.search.title")))}function Dt(e,o){1&e&&(t.TgZ(0,"div")(1,"h2"),t._uU(2),t.ALo(3,"translate"),t.qZA(),t._UZ(4,"erz-dashboard-actions"),t.qZA()),2&e&&(t.xp6(2),t.Oqu(t.lcZ(3,1,"dashboard.actions.title")))}function Ut(e,o){if(1&e&&(t.TgZ(0,"div",5),t.YNc(1,Mt,5,3,"div",1),t.YNc(2,Dt,5,3,"div",1),t.qZA()),2&e){const n=t.oxw().erzLet;t.xp6(1),t.Q6J("ngIf",n.hasSearch),t.xp6(1),t.Q6J("ngIf",n.hasActions)}}function Rt(e,o){1&e&&(t.TgZ(0,"div",6)(1,"h2"),t._uU(2),t.ALo(3,"translate"),t.qZA(),t._UZ(4,"erz-dashboard-timetable"),t.qZA()),2&e&&(t.xp6(2),t.Oqu(t.lcZ(3,1,"dashboard.timetable.title")))}function zt(e,o){if(1&e&&(t.TgZ(0,"div")(1,"h1"),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.YNc(4,Pt,1,0,"erz-spinner",1),t.YNc(5,It,3,3,"p",1),t.TgZ(6,"div",2),t.YNc(7,Ut,3,2,"div",3),t.YNc(8,Rt,5,3,"div",4),t.qZA()()),2&e){const n=o.erzLet;t.xp6(1),t.ekj("visually-hidden",n.loading||n.hasSearch||n.hasActions||n.hasTimetable),t.xp6(1),t.hij(" ",t.lcZ(3,7,"dashboard.heading")," "),t.xp6(2),t.Q6J("ngIf",n.loading),t.xp6(1),t.Q6J("ngIf",!(n.loading||n.hasSearch||n.hasActions||n.hasTimetable)),t.xp6(2),t.Q6J("ngIf",n.hasSearch||n.hasActions),t.xp6(1),t.Q6J("ngIf",n.hasTimetable)}}const Nt=function(e,o,n,s){return{loading:e,hasSearch:o,hasActions:n,hasTimetable:s}},Qt=[{path:"",component:(()=>{class e{constructor(n){this.dashboardService=n}static#t=this.\u0275fac=function(s){return new(s||e)(t.Y36(p))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["erz-dashboard"]],decls:5,vars:14,consts:[[4,"erzLet"],[4,"ngIf"],[1,"columns"],["class","search-actions-column",4,"ngIf"],["class","timetable-column",4,"ngIf"],[1,"search-actions-column"],[1,"timetable-column"]],template:function(s,a){1&s&&(t.YNc(0,zt,9,9,"div",0),t.ALo(1,"async"),t.ALo(2,"async"),t.ALo(3,"async"),t.ALo(4,"async")),2&s&&t.Q6J("erzLet",t.l5B(9,Nt,t.lcZ(1,1,a.dashboardService.loading$),t.lcZ(2,3,a.dashboardService.hasSearch$),t.lcZ(3,5,a.dashboardService.hasActions$),t.lcZ(4,7,a.dashboardService.hasTimetable$)))},dependencies:[d.O5,Z.e,L.O,q,_t,O,d.Ov,g.X$],styles:[".columns[_ngcontent-%COMP%]{display:flex;flex-direction:column}.columns[_ngcontent-%COMP%], .search-actions-column[_ngcontent-%COMP%]{gap:3rem}.search-actions-column[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;max-width:40rem}.timetable-column[_ngcontent-%COMP%]{flex:2}@media (min-width: 992px){.columns[_ngcontent-%COMP%]{flex-direction:row;gap:1.5rem}.search-actions-column[_ngcontent-%COMP%]{max-width:33%}}"],changeDetection:0})}return e})()},i(9592).H];let wt=(()=>{class e{static#t=this.\u0275fac=function(s){return new(s||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[f.Bz.forChild(Qt),f.Bz]})}return e})();function Et(e,o){1&e&&(t.TgZ(0,"th"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"dashboard.timetable.table.teacher")," "))}function Ft(e,o){1&e&&(t.TgZ(0,"th"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"dashboard.timetable.table.room")," "))}function kt(e,o){if(1&e&&(t.TgZ(0,"a",12),t._uU(1),t.TgZ(2,"span",13),t._uU(3),t.qZA()()),2&e){const n=t.oxw().$implicit,s=t.oxw(2);t.Q6J("href",s.buildLink(n.eventId),t.LSH),t.xp6(1),t.hij(" ",n.subject,""),t.xp6(2),t.hij(", ",n.studyClass,"")}}function jt(e,o){if(1&e&&t._uU(0),2&e){const n=t.oxw().$implicit;t.hij(" ",n.subject," ")}}function qt(e,o){if(1&e&&(t.TgZ(0,"td",14),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.AsE(" ",t.lcZ(2,2,"dashboard.timetable.table.study-class"),": ",n.studyClass," ")}}function Ht(e,o){if(1&e&&(t.TgZ(0,"td",15),t._uU(1),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.hij(" ",n.teacher," ")}}function Xt(e,o){1&e&&(t.TgZ(0,"span",18),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"dashboard.timetable.table.room")))}function Bt(e,o){if(1&e&&(t.TgZ(0,"td",16),t.YNc(1,Xt,3,3,"span",17),t._uU(2),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf",n.room),t.xp6(1),t.hij(" ",n.room," ")}}function Gt(e,o){if(1&e&&(t.TgZ(0,"tr")(1,"td",5),t._uU(2),t.ALo(3,"date"),t.ALo(4,"date"),t.qZA(),t.TgZ(5,"td",6),t.YNc(6,kt,4,3,"a",7),t.ALo(7,"async"),t.YNc(8,jt,1,1,"ng-template",null,8,t.W1O),t.qZA(),t.YNc(10,qt,3,4,"td",9),t.ALo(11,"async"),t.YNc(12,Ht,2,1,"td",10),t.ALo(13,"async"),t.YNc(14,Bt,3,2,"td",11),t.ALo(15,"async"),t.qZA()),2&e){const n=o.$implicit,s=t.MAs(9),a=t.oxw(2);t.xp6(2),t.AsE(" ",t.xi3(3,7,n.from,"HH:mm"),"\u2013",t.xi3(4,10,n.until,"HH:mm")," "),t.xp6(4),t.Q6J("ngIf",t.lcZ(7,13,a.isTeacher$))("ngIfElse",s),t.xp6(4),t.Q6J("ngIf",t.lcZ(11,15,a.isTeacher$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(13,17,a.isStudent$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(15,19,a.isStudent$))}}function Wt(e,o){if(1&e&&(t.TgZ(0,"table",2)(1,"thead")(2,"tr")(3,"th"),t._uU(4),t.ALo(5,"translate"),t.qZA(),t.TgZ(6,"th"),t._uU(7),t.ALo(8,"translate"),t.qZA(),t.YNc(9,Et,3,3,"th",3),t.ALo(10,"async"),t.YNc(11,Ft,3,3,"th",3),t.ALo(12,"async"),t.qZA()(),t.TgZ(13,"tbody"),t.YNc(14,Gt,16,21,"tr",4),t.qZA()()),2&e){const n=t.oxw();t.xp6(4),t.Oqu(t.lcZ(5,5,"dashboard.timetable.table.time")),t.xp6(3),t.Oqu(t.lcZ(8,7,"dashboard.timetable.table.subject")),t.xp6(2),t.Q6J("ngIf",t.lcZ(10,9,n.isStudent$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(12,11,n.isStudent$)),t.xp6(3),t.Q6J("ngForOf",n.entries)}}function Vt(e,o){1&e&&(t.TgZ(0,"p"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"dashboard.timetable.no-entries")))}let Kt=(()=>{class e{constructor(n,s){this.dashboardService=n,this.settings=s,this.entries=[],this.isStudent$=this.dashboardService.hasStudentRole$,this.isTeacher$=this.dashboardService.hasLessonTeacherRole$}buildLink(n){return this.settings.eventlist.eventdetail.replace(":id",String(n))}static#t=this.\u0275fac=function(s){return new(s||e)(t.Y36(p),t.Y36(_.L6))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["erz-dashboard-timetable-table"]],inputs:{entries:"entries"},decls:3,vars:2,consts:[["class","table",4,"ngIf","ngIfElse"],["noEntries",""],[1,"table"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"time"],[1,"subject"],["target","_parent",3,"href",4,"ngIf","ngIfElse"],["noLink",""],["class","study-class",4,"ngIf"],["class","teacher",4,"ngIf"],["class","room",4,"ngIf"],["target","_parent",3,"href"],[1,"subject-study-class"],[1,"study-class"],[1,"teacher"],[1,"room"],["class","room-label",4,"ngIf"],[1,"room-label"]],template:function(s,a){if(1&s&&(t.YNc(0,Wt,15,13,"table",0),t.YNc(1,Vt,3,3,"ng-template",null,1,t.W1O)),2&s){const h=t.MAs(2);t.Q6J("ngIf",a.entries.length>0)("ngIfElse",h)}},dependencies:[d.sg,d.O5,d.Ov,d.uU,g.X$],styles:['td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{padding:1rem 1.75rem}.room-label[_ngcontent-%COMP%], td.study-class[_ngcontent-%COMP%]{display:none}@media (max-width: 767.98px){table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{display:none}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{border-top:1px solid var(--bs-border-color)}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-template-areas:"time room" "subject subject" "study-class study-class" "teacher teacher";gap:.5rem;padding:1rem;border-bottom:1px solid var(--bs-border-color)}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:0;padding:0}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.time[_ngcontent-%COMP%]{grid-area:time;font-size:.875rem;line-height:1.125rem;font-weight:300}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.subject[_ngcontent-%COMP%]{grid-area:subject;font-size:1rem;line-height:1.25rem;font-weight:400}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.teacher[_ngcontent-%COMP%]{grid-area:teacher;font-size:.8125rem;line-height:1.0625rem;font-weight:300}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.room[_ngcontent-%COMP%]{grid-area:room;text-align:right;font-size:.875rem;line-height:1.125rem;font-weight:300}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.study-class[_ngcontent-%COMP%]{grid-area:study-class;font-size:.8125rem;line-height:1.0625rem;font-weight:300}td.study-class[_ngcontent-%COMP%]{display:block}.subject-study-class[_ngcontent-%COMP%]{display:none}.room-label[_ngcontent-%COMP%]{display:inline}}']})}return e})();var te=i(8393),ee=i(4703);let ne=(()=>{class e{static#t=this.\u0275fac=function(s){return new(s||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({providers:[p,te.o],imports:[I.m,wt]})}return e})();t.B6R(O,[d.O5,Z.e,L.O,Kt],[d.Ov,d.uU,g.X$,ee.y])}}]);