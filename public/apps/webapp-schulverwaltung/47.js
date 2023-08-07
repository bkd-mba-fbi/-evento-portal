"use strict";(self.webpackChunkwebapp_schulverwaltung=self.webpackChunkwebapp_schulverwaltung||[]).push([[47],{2047:(Ge,v,o)=>{o.r(v),o.d(v,{DashboardModule:()=>Be});var P=o(6482),g=o(3519),e=o(4650),I=o(4707),b=o(3900),d=o(4782),c=o(4004),m=o(9646),M=o(8675),f=o(9841),_=o(8029),R=o(3978),C=o(8623),x=o(8714),T=o(386),U=o(9118),y=o(1303);const z=["LessonTeacherRole","ClassTeacherRole","TeacherRole","AbsenceAdministratorRole"],J=["LessonTeacherRole","TeacherRole","StudentRole","SubstituteAdministratorRole"],Y=["LessonTeacherRole","StudentRole"];let u=(()=>{class t{constructor(n,a,i,h,A,He){this.settingsService=n,this.lessonPresencesService=a,this.studentsService=i,this.courseService=h,this.storageService=A,this.settings=He,this.rolesAndPermissions$=this.settingsService.getRolesAndPermissions(),this.studentId$=new I.t(1),this.lessonAbsences$=this.studentId$.pipe((0,b.w)(r=>this.studentsService.getLessonAbsences(r)),(0,d.d)(1)),this.lessonIncidents$=this.studentId$.pipe((0,b.w)(r=>this.studentsService.getLessonIncidents(r)),(0,d.d)(1)),this.loading$=this.rolesAndPermissions$.pipe((0,c.U)(r=>null==r)),this.hasSearch$=this.rolesAndPermissions$.pipe((0,c.U)(this.hasRoles(z))),this.hasActions$=this.rolesAndPermissions$.pipe((0,c.U)(this.hasRoles(J))),this.hasTimetable$=this.rolesAndPermissions$.pipe((0,c.U)(this.hasRoles(Y))),this.hasLessonTeacherRole$=this.rolesAndPermissions$.pipe((0,c.U)(this.hasRoles(["LessonTeacherRole"])),(0,d.d)(1)),this.hasTeacherRole$=this.rolesAndPermissions$.pipe((0,c.U)(this.hasRoles(["TeacherRole"])),(0,d.d)(1)),this.hasStudentRole$=this.rolesAndPermissions$.pipe((0,c.U)(this.hasRoles(["StudentRole"])),(0,d.d)(1)),this.hasSubstituteAdministratorRole$=this.rolesAndPermissions$.pipe((0,c.U)(this.hasRoles(["SubstituteAdministratorRole"])),(0,d.d)(1)),this.editAbsencesCount$=this.hasLessonTeacherRole$.pipe((0,b.w)(r=>r?this.lessonPresencesService.checkableAbsencesCount():(0,m.of)(!1)),(0,d.d)(1)),this.openAbsencesCount$=this.rolesAndPermissions$.pipe((0,c.U)(this.hasRoles(["LessonTeacherRole","ClassTeacherRole"])),(0,b.w)(r=>r?this.lessonPresencesService.getListOfUnconfirmed():(0,m.of)([])),(0,c.U)(r=>r.length),(0,d.d)(1)),this.myAbsencesCount$=this.hasStudentRole$.pipe((0,b.w)(r=>r?this.getMyAbsences():(0,m.of)([])),(0,c.U)(this.getMyAbsencesCount.bind(this)),(0,d.d)(1)),this.coursesToRateCount$=this.courseService.getNumberOfCoursesForRating().pipe((0,M.O)(0),(0,d.d)(1)),this.hasPresenceControl$=this.hasLessonTeacherRole$.pipe((0,b.w)(r=>r?this.lessonPresencesService.hasLessonsLessonTeacher():(0,m.of)(!1)),(0,d.d)(1)),this.hasOpenAbsences$=this.openAbsencesCount$.pipe((0,c.U)(r=>r>0),(0,d.d)(1));const O=this.storageService.getPayload()?.id_person;O&&this.studentId$.next(Number(O))}hasRoles(n){return a=>(a??[]).some(i=>n.includes(i))}getMyAbsences(){return(0,f.a)([this.studentId$,this.lessonAbsences$,this.lessonIncidents$]).pipe((0,b.w)(([n,a,i])=>this.loadTimetableEntries(n,a,i).pipe((0,c.U)(h=>[...a,...i].map(A=>this.withTimetableEntry(A,h)).filter(R.Nf)))))}getMyAbsencesCount(n){return n?.filter(a=>("ConfirmationStateId"in a?a.ConfirmationStateId:null)===this.settings.unconfirmedAbsenceStateId).length||0}withTimetableEntry(n,a){return a.find(i=>i.Id===n.LessonRef.Id)?n:null}loadTimetableEntries(n,a,i){return this.studentsService.getTimetableEntries(n,{"filter.Id":`;${[...a,...i].map(h=>h.LessonRef.Id).join(";")}`})}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(C.s),e.LFG(x.q),e.LFG(T.l),e.LFG(U.s),e.LFG(y.V),e.LFG(_.L6))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})();var l=o(6895),Z=o(1104),L=o(2925),w=o(6628);let N=(()=>{class t{constructor(n,a){this.studentsRestService=n,this.router=a}navigateToDossier(n){const a=Number(n);this.router.navigate(["dashboard","student",a,"addresses"])}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(T.l),e.Y36(g.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["erz-dashboard-search"]],decls:1,vars:2,consts:[[3,"typeaheadService","placeholder","valueChange"]],template:function(n,a){1&n&&(e.TgZ(0,"erz-typeahead",0),e.NdJ("valueChange",function(h){return h&&a.navigateToDossier(h)}),e.qZA()),2&n&&e.Q6J("typeaheadService",a.studentsRestService)("placeholder","dashboard.search.placeholder")},dependencies:[w.t],styles:["[_nghost-%COMP%]{display:block;padding:.75rem;background:rgb(247,233,210)}"]}),t})();var p=o(6188);function Q(t,s){1&t&&e.GkF(0)}function E(t,s){if(1&t&&(e.TgZ(0,"a",3),e.YNc(1,Q,1,0,"ng-container",4),e.qZA()),2&t){const n=e.oxw(),a=e.MAs(3);e.Q6J("routerLink",n.link)("queryParams",n.linkParams),e.xp6(1),e.Q6J("ngTemplateOutlet",a)}}function k(t,s){1&t&&e.GkF(0)}function j(t,s){if(1&t&&(e.TgZ(0,"a",5),e.YNc(1,k,1,0,"ng-container",4),e.qZA()),2&t){const n=e.oxw(),a=e.MAs(3);e.Q6J("href",n.externalLink,e.LSH),e.xp6(1),e.Q6J("ngTemplateOutlet",a)}}function F(t,s){if(1&t&&(e.TgZ(0,"span",9),e._uU(1),e.qZA()),2&t){const n=e.oxw(2);e.xp6(1),e.Oqu(n.count)}}function q(t,s){1&t&&(e.O4$(),e.TgZ(0,"svg",10),e._UZ(1,"path",11),e.qZA())}function X(t,s){if(1&t&&(e.TgZ(0,"span",6),e._uU(1),e.ALo(2,"translate"),e.qZA(),e.TgZ(3,"div"),e.Hsn(4),e.YNc(5,F,2,1,"span",7),e.YNc(6,q,2,0,"ng-template",null,8,e.W1O),e.qZA()),2&t){const n=e.MAs(7),a=e.oxw();e.xp6(1),e.Oqu(e.lcZ(2,3,a.label)),e.xp6(4),e.Q6J("ngIf",a.count>=0)("ngIfElse",n)}}const B=["*"];let H=(()=>{class t{constructor(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["erz-dashboard-action"]],inputs:{label:"label",count:"count",link:"link",linkParams:"linkParams",externalLink:"externalLink"},ngContentSelectors:B,decls:4,vars:2,consts:[[3,"routerLink","queryParams",4,"ngIf"],[3,"href",4,"ngIf"],["actionContent",""],[3,"routerLink","queryParams"],[4,"ngTemplateOutlet"],[3,"href"],[1,"label"],["class","count",4,"ngIf","ngIfElse"],["icon",""],[1,"count"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","none"],["fill","currentColor","d","m12 20-1.425-1.4 5.6-5.6H4v-2h12.175l-5.6-5.6L12 4l8 8-8 8Z"]],template:function(n,a){1&n&&(e.F$t(),e.YNc(0,E,2,3,"a",0),e.YNc(1,j,2,2,"a",1),e.YNc(2,X,8,5,"ng-template",null,2,e.W1O)),2&n&&(e.Q6J("ngIf",!a.externalLink),e.xp6(1),e.Q6J("ngIf",a.externalLink))},dependencies:[l.O5,l.tP,g.yS,p.X$],styles:["a[_ngcontent-%COMP%]{display:flex;gap:1rem;justify-content:space-between;align-items:center;padding:1rem 1.5rem;background:rgb(247,233,210);text-decoration:none;line-height:1}a[_ngcontent-%COMP%]:hover{background:rgb(242,224,195)}a[_ngcontent-%COMP%]:focus-visible{outline-width:2px;outline-offset:-2px}div[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;gap:1rem}.label[_ngcontent-%COMP%]{font-weight:400}.count[_ngcontent-%COMP%]{font-size:1.5rem}"]}),t})();var G=o(264);let W=(()=>{class t{constructor(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["erz-dashboard-deadline"]],inputs:{count:"count"},decls:3,vars:8,template:function(n,a){1&n&&(e._uU(0),e.ALo(1,"translate"),e.ALo(2,"addSpace")),2&n&&e.lnq("",e.lcZ(1,3,"dashboard.actions.deadline"),"",e.xi3(2,5,": ",":"),"",a.count,"\n")},dependencies:[p.X$,G.u],styles:["[_nghost-%COMP%]{background:rgb(234,22,31);color:#fff;white-space:nowrap;font-weight:500;font-size:.875rem;min-height:1.5rem;display:flex;padding:.375rem .5rem;align-items:center;border-radius:2.5rem}"]}),t})();const V=function(){return["/presence-control"]};function K(t,s){1&t&&e._UZ(0,"erz-dashboard-action",4),2&t&&e.Q6J("label","dashboard.actions.presence-control")("link",e.DdM(2,V))}const ee=function(){return["/edit-absences"]};function te(t,s){if(1&t&&(e._UZ(0,"erz-dashboard-action",5),e.ALo(1,"async")),2&t){const n=e.oxw();e.Q6J("label","dashboard.actions.edit-absences")("link",e.DdM(6,ee))("linkParams",n.editAbsencesParams)("count",e.lcZ(1,4,n.dashboardService.editAbsencesCount$))}}const ne=function(){return["/open-absences"]};function ae(t,s){if(1&t&&(e._UZ(0,"erz-dashboard-action",6),e.ALo(1,"async")),2&t){const n=e.oxw();e.Q6J("label","dashboard.actions.open-absences")("link",e.DdM(5,ne))("count",e.lcZ(1,3,n.dashboardService.openAbsencesCount$))}}function se(t,s){if(1&t&&(e._UZ(0,"erz-dashboard-deadline",8),e.ALo(1,"async")),2&t){const n=e.oxw(2);e.Q6J("count",e.lcZ(1,1,n.dashboardService.coursesToRateCount$))}}const oe=function(){return["/events"]};function ie(t,s){if(1&t&&(e.TgZ(0,"erz-dashboard-action",4),e.YNc(1,se,2,3,"erz-dashboard-deadline",7),e.ALo(2,"async"),e.qZA()),2&t){const n=e.oxw();e.Q6J("label","dashboard.actions.tests")("link",e.DdM(5,oe)),e.xp6(1),e.Q6J("ngIf",e.lcZ(2,3,n.dashboardService.coursesToRateCount$)>0)}}const re=function(){return["/my-absences","report"]};function ce(t,s){1&t&&e._UZ(0,"erz-dashboard-action",4),2&t&&e.Q6J("label","dashboard.actions.my-absences-report")("link",e.DdM(2,re))}const le=function(){return["/my-absences"]};function de(t,s){if(1&t&&(e._UZ(0,"erz-dashboard-action",6),e.ALo(1,"async")),2&t){const n=e.oxw();e.Q6J("label","dashboard.actions.my-absences")("link",e.DdM(5,le))("count",e.lcZ(1,3,n.dashboardService.myAbsencesCount$))}}function he(t,s){if(1&t&&e._UZ(0,"erz-dashboard-action",9),2&t){const n=e.oxw();e.Q6J("label","dashboard.actions.substitutions")("externalLink",n.substitutionsAdminLink)}}let be=(()=>{class t{constructor(n,a,i){this.dashboardService=n,this.storageService=a,this.settings=i}get editAbsencesParams(){return{confirmationStates:this.settings.checkableAbsenceStateId,teacher:this.storageService.getPayload()?.fullname}}get substitutionsAdminLink(){return this.settings.dashboard.substitutionsAdminLink}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(u),e.Y36(y.V),e.Y36(_.L6))},t.\u0275cmp=e.Xpm({type:t,selectors:[["erz-dashboard-actions"]],decls:14,vars:21,consts:[[3,"label","link",4,"ngIf"],[3,"label","link","linkParams","count",4,"ngIf"],[3,"label","link","count",4,"ngIf"],[3,"label","externalLink",4,"ngIf"],[3,"label","link"],[3,"label","link","linkParams","count"],[3,"label","link","count"],[3,"count",4,"ngIf"],[3,"count"],[3,"label","externalLink"]],template:function(n,a){1&n&&(e.YNc(0,K,1,3,"erz-dashboard-action",0),e.ALo(1,"async"),e.YNc(2,te,2,7,"erz-dashboard-action",1),e.ALo(3,"async"),e.YNc(4,ae,2,6,"erz-dashboard-action",2),e.ALo(5,"async"),e.YNc(6,ie,3,6,"erz-dashboard-action",0),e.ALo(7,"async"),e.YNc(8,ce,1,3,"erz-dashboard-action",0),e.ALo(9,"async"),e.YNc(10,de,2,6,"erz-dashboard-action",2),e.ALo(11,"async"),e.YNc(12,he,1,2,"erz-dashboard-action",3),e.ALo(13,"async")),2&n&&(e.Q6J("ngIf",e.lcZ(1,7,a.dashboardService.hasPresenceControl$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(3,9,a.dashboardService.hasLessonTeacherRole$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(5,11,a.dashboardService.hasOpenAbsences$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(7,13,a.dashboardService.hasTeacherRole$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(9,15,a.dashboardService.hasStudentRole$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(11,17,a.dashboardService.hasStudentRole$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(13,19,a.dashboardService.hasSubstituteAdministratorRole$)))},dependencies:[l.O5,H,W,l.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:.5rem}"]}),t})();var S=o(1135),me=o(8505),D=o(8115),ue=o(634),pe=o(5650),ge=o(2201),fe=o(1178);function _e(t,s){1&t&&(e.TgZ(0,"a",9),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.Q6J("href",s.ngIf,e.LSH),e.xp6(1),e.hij(" ",e.lcZ(2,2,"dashboard.timetable.subscribe-calendar")," "))}function Te(t,s){1&t&&(e.TgZ(0,"a",13),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.Q6J("href",s.ngIf,e.LSH),e.xp6(1),e.hij(" ",e.lcZ(2,2,"dashboard.timetable.subscribe-calendar")," "))}function Ae(t,s){if(1&t&&(e.ynx(0),e._UZ(1,"erz-dashboard-timetable-table",11),e.YNc(2,Te,3,4,"a",12),e.ALo(3,"async"),e.BQk()),2&t){const n=e.oxw().erzLet,a=e.oxw();e.xp6(1),e.Q6J("entries",n),e.xp6(1),e.Q6J("ngIf",e.lcZ(3,2,a.getSubscribeCalendarUrl()))}}function ve(t,s){if(1&t&&(e.ynx(0),e.YNc(1,Ae,4,4,"ng-container",10),e.ALo(2,"async"),e.BQk()),2&t){const n=e.oxw(),a=e.MAs(21);e.xp6(1),e.Q6J("ngIf",!1===e.lcZ(2,2,n.loading$))("ngIfElse",a)}}function Ce(t,s){1&t&&e._UZ(0,"erz-spinner")}let $=(()=>{class t{constructor(n,a,i,h){this.studentsService=n,this.lessonPresencesService=a,this.userSettings=i,this.dashboardService=h,this.studentId$=this.dashboardService.studentId$,this.isTeacher$=this.dashboardService.hasLessonTeacherRole$,this.isStudent$=this.dashboardService.hasStudentRole$,this.date$=new S.X((0,D.Z)(new Date)),this.loading$=new S.X(!0),this.timetableEntries$=this.loadTimetableEntries()}gotoToday(){this.loading$.next(!0),this.date$.next((0,D.Z)(new Date))}gotoPreviousDay(){this.loading$.next(!0),this.date$.next((0,ge.Z)(this.date$.getValue(),1))}gotoNextDay(){this.loading$.next(!0),this.date$.next((0,pe.Z)(this.date$.getValue(),1))}getSubscribeCalendarUrl(){return this.userSettings.getSetting("cal")}loadTimetableEntries(){return(0,f.a)([this.isTeacher$,this.isStudent$]).pipe((0,b.w)(([n,a])=>n?this.loadTeacherTimetableEntries():a?this.loadStudentTimetableEntries():(0,m.of)([])),(0,me.b)(()=>this.loading$.next(!1)))}loadTeacherTimetableEntries(){return this.date$.pipe((0,b.w)(n=>this.lessonPresencesService.getLessonsByDate(n)),(0,c.U)(fe.ok),(0,c.U)(n=>n.map(this.convertLesson.bind(this))))}loadStudentTimetableEntries(){return this.studentId$.pipe((0,b.w)(n=>(0,f.a)([this.studentsService.getLessonAbsences(n),this.studentsService.getLessonIncidents(n),this.date$]).pipe((0,b.w)(([a,i,h])=>this.studentsService.getTimetableEntries(n,{"filter.From":`=${(0,ue.Z)(h,"yyyy-MM-dd")}`,sort:"From,To"})),(0,c.U)(a=>a.map(this.convertTimetableEntry.bind(this))))))}convertLesson(n){return{id:n.LessonRef.Id,from:n.LessonDateTimeFrom,until:n.LessonDateTimeTo,eventId:n.EventRef.Id,subject:n.EventDesignation,studyClass:n.StudyClassNumber}}convertTimetableEntry(n){return{id:n.Id,from:n.From,until:n.To,eventId:n.EventId,subject:n.EventDesignation,room:n.EventLocation||void 0,teacher:n.EventManagerInformation}}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(T.l),e.Y36(x.q),e.Y36(C.s),e.Y36(u))},t.\u0275cmp=e.Xpm({type:t,selectors:[["erz-dashboard-timetable"]],decls:22,vars:21,consts:[[1,"header"],["type","button",1,"btn","btn-primary","today",3,"click"],["type","button",1,"btn","btn-secondary","previous-day",3,"click"],[1,"material-icons"],["type","button",1,"btn","btn-secondary","next-day",3,"click"],[1,"date"],["target","_parent","class","btn btn-secondary subscribe-calendar-header",3,"href",4,"ngIf"],[4,"erzLet"],["loading",""],["target","_parent",1,"btn","btn-secondary","subscribe-calendar-header",3,"href"],[4,"ngIf","ngIfElse"],[3,"entries"],["target","_parent","class","btn btn-secondary subscribe-calendar-bottom",3,"href",4,"ngIf"],["target","_parent",1,"btn","btn-secondary","subscribe-calendar-bottom",3,"href"]],template:function(n,a){1&n&&(e.TgZ(0,"div",0)(1,"button",1),e.NdJ("click",function(){return a.gotoToday()}),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"button",2),e.NdJ("click",function(){return a.gotoPreviousDay()}),e.ALo(5,"translate"),e.TgZ(6,"span",3),e._uU(7,"chevron_left"),e.qZA()(),e.TgZ(8,"button",4),e.NdJ("click",function(){return a.gotoNextDay()}),e.ALo(9,"translate"),e.TgZ(10,"span",3),e._uU(11,"chevron_right"),e.qZA()(),e.TgZ(12,"div",5),e._uU(13),e.ALo(14,"date"),e.ALo(15,"async"),e.qZA(),e.YNc(16,_e,3,4,"a",6),e.ALo(17,"async"),e.qZA(),e.YNc(18,ve,3,4,"ng-container",7),e.ALo(19,"async"),e.YNc(20,Ce,1,0,"ng-template",null,8,e.W1O)),2&n&&(e.xp6(2),e.hij(" ",e.lcZ(3,6,"dashboard.timetable.today")," "),e.xp6(2),e.uIk("aria-label",e.lcZ(5,8,"dashboard.timetable.previousDay")),e.xp6(4),e.uIk("aria-label",e.lcZ(9,10,"dashboard.timetable.nextDay")),e.xp6(5),e.Oqu(e.xi3(14,12,e.lcZ(15,15,a.date$),"E, dd. MMMM yyyy")),e.xp6(3),e.Q6J("ngIf",e.lcZ(17,17,a.getSubscribeCalendarUrl())),e.xp6(2),e.Q6J("erzLet",e.lcZ(19,19,a.timetableEntries$)))},styles:["[_nghost-%COMP%]{display:block;margin-bottom:1rem}.header[_ngcontent-%COMP%]{margin-top:1rem;margin-bottom:2rem;display:flex;flex-wrap:wrap-reverse;align-items:center;gap:1rem}.previous-day[_ngcontent-%COMP%], .next-day[_ngcontent-%COMP%]{padding-left:.375rem;padding-right:.375rem}.date[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:600}.subscribe-calendar-header[_ngcontent-%COMP%]{margin-left:auto}.subscribe-calendar-bottom[_ngcontent-%COMP%]{display:none}a.btn[_ngcontent-%COMP%]{text-decoration:none}@media (max-width: 767.98px){.subscribe-calendar-header[_ngcontent-%COMP%]{display:none}.subscribe-calendar-bottom[_ngcontent-%COMP%]{display:block;margin-top:2rem}}"]}),t})();function ye(t,s){1&t&&e._UZ(0,"erz-spinner")}function Ze(t,s){1&t&&(e.TgZ(0,"p"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"dashboard.no-access")," "))}function Le(t,s){1&t&&(e.TgZ(0,"div")(1,"h2"),e._uU(2),e.ALo(3,"translate"),e.qZA(),e._UZ(4,"erz-dashboard-search"),e.qZA()),2&t&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"dashboard.search.title")))}function Se(t,s){1&t&&(e.TgZ(0,"div")(1,"h2"),e._uU(2),e.ALo(3,"translate"),e.qZA(),e._UZ(4,"erz-dashboard-actions"),e.qZA()),2&t&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"dashboard.actions.title")))}function De(t,s){if(1&t&&(e.TgZ(0,"div",5),e.YNc(1,Le,5,3,"div",1),e.YNc(2,Se,5,3,"div",1),e.qZA()),2&t){const n=e.oxw().erzLet;e.xp6(1),e.Q6J("ngIf",n.hasSearch),e.xp6(1),e.Q6J("ngIf",n.hasActions)}}function $e(t,s){1&t&&(e.TgZ(0,"div",6)(1,"h2"),e._uU(2),e.ALo(3,"translate"),e.qZA(),e._UZ(4,"erz-dashboard-timetable"),e.qZA()),2&t&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"dashboard.timetable.title")))}function Oe(t,s){if(1&t&&(e.TgZ(0,"div")(1,"h1"),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.YNc(4,ye,1,0,"erz-spinner",1),e.YNc(5,Ze,3,3,"p",1),e.TgZ(6,"div",2),e.YNc(7,De,3,2,"div",3),e.YNc(8,$e,5,3,"div",4),e.qZA()()),2&t){const n=s.erzLet;e.xp6(1),e.ekj("visually-hidden",n.loading||n.hasSearch||n.hasActions||n.hasTimetable),e.xp6(1),e.hij(" ",e.lcZ(3,7,"dashboard.heading")," "),e.xp6(2),e.Q6J("ngIf",n.loading),e.xp6(1),e.Q6J("ngIf",!(n.loading||n.hasSearch||n.hasActions||n.hasTimetable)),e.xp6(2),e.Q6J("ngIf",n.hasSearch||n.hasActions),e.xp6(1),e.Q6J("ngIf",n.hasTimetable)}}const Pe=function(t,s,n,a){return{loading:t,hasSearch:s,hasActions:n,hasTimetable:a}},Re=[{path:"",component:(()=>{class t{constructor(n){this.dashboardService=n}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(u))},t.\u0275cmp=e.Xpm({type:t,selectors:[["erz-dashboard"]],decls:5,vars:14,consts:[[4,"erzLet"],[4,"ngIf"],[1,"columns"],["class","search-actions-column",4,"ngIf"],["class","timetable-column",4,"ngIf"],[1,"search-actions-column"],[1,"timetable-column"]],template:function(n,a){1&n&&(e.YNc(0,Oe,9,9,"div",0),e.ALo(1,"async"),e.ALo(2,"async"),e.ALo(3,"async"),e.ALo(4,"async")),2&n&&e.Q6J("erzLet",e.l5B(9,Pe,e.lcZ(1,1,a.dashboardService.loading$),e.lcZ(2,3,a.dashboardService.hasSearch$),e.lcZ(3,5,a.dashboardService.hasActions$),e.lcZ(4,7,a.dashboardService.hasTimetable$)))},dependencies:[l.O5,Z.e,L.O,N,be,$,l.Ov,p.X$],styles:[".columns[_ngcontent-%COMP%]{display:flex;flex-direction:column}.columns[_ngcontent-%COMP%], .search-actions-column[_ngcontent-%COMP%]{gap:3rem}.search-actions-column[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;max-width:40rem}.timetable-column[_ngcontent-%COMP%]{flex:2}@media (min-width: 992px){.columns[_ngcontent-%COMP%]{flex-direction:row;gap:1.5rem}.search-actions-column[_ngcontent-%COMP%]{max-width:33%}}"],changeDetection:0}),t})()},o(7467).H];let Ue=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[g.Bz.forChild(Re),g.Bz]}),t})();function ze(t,s){1&t&&(e.TgZ(0,"th"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"dashboard.timetable.table.teacher")," "))}function Je(t,s){1&t&&(e.TgZ(0,"th"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"dashboard.timetable.table.room")," "))}function Ye(t,s){if(1&t&&(e.TgZ(0,"a",12),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()),2&t){const n=e.oxw().$implicit,a=e.oxw(2);e.Q6J("href",a.buildLink(n.eventId),e.LSH),e.xp6(1),e.hij(" ",n.subject,""),e.xp6(2),e.hij(", ",n.studyClass,"")}}function we(t,s){if(1&t&&e._uU(0),2&t){const n=e.oxw().$implicit;e.hij(" ",n.subject," ")}}function Ne(t,s){if(1&t&&(e.TgZ(0,"td",14),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t){const n=e.oxw().$implicit;e.xp6(1),e.AsE(" ",e.lcZ(2,2,"dashboard.timetable.table.study-class"),": ",n.studyClass," ")}}function Qe(t,s){if(1&t&&(e.TgZ(0,"td",15),e._uU(1),e.qZA()),2&t){const n=e.oxw().$implicit;e.xp6(1),e.hij(" ",n.teacher," ")}}function Ee(t,s){1&t&&(e.TgZ(0,"span",18),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"dashboard.timetable.table.room")))}function ke(t,s){if(1&t&&(e.TgZ(0,"td",16),e.YNc(1,Ee,3,3,"span",17),e._uU(2),e.qZA()),2&t){const n=e.oxw().$implicit;e.xp6(1),e.Q6J("ngIf",n.room),e.xp6(1),e.hij(" ",n.room," ")}}function je(t,s){if(1&t&&(e.TgZ(0,"tr")(1,"td",5),e._uU(2),e.ALo(3,"date"),e.ALo(4,"date"),e.qZA(),e.TgZ(5,"td",6),e.YNc(6,Ye,4,3,"a",7),e.ALo(7,"async"),e.YNc(8,we,1,1,"ng-template",null,8,e.W1O),e.qZA(),e.YNc(10,Ne,3,4,"td",9),e.ALo(11,"async"),e.YNc(12,Qe,2,1,"td",10),e.ALo(13,"async"),e.YNc(14,ke,3,2,"td",11),e.ALo(15,"async"),e.qZA()),2&t){const n=s.$implicit,a=e.MAs(9),i=e.oxw(2);e.xp6(2),e.AsE(" ",e.xi3(3,7,n.from,"HH:mm"),"\u2013",e.xi3(4,10,n.until,"HH:mm")," "),e.xp6(4),e.Q6J("ngIf",e.lcZ(7,13,i.isTeacher$))("ngIfElse",a),e.xp6(4),e.Q6J("ngIf",e.lcZ(11,15,i.isTeacher$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(13,17,i.isStudent$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(15,19,i.isStudent$))}}function Fe(t,s){if(1&t&&(e.TgZ(0,"table",2)(1,"thead")(2,"tr")(3,"th"),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.TgZ(6,"th"),e._uU(7),e.ALo(8,"translate"),e.qZA(),e.YNc(9,ze,3,3,"th",3),e.ALo(10,"async"),e.YNc(11,Je,3,3,"th",3),e.ALo(12,"async"),e.qZA()(),e.TgZ(13,"tbody"),e.YNc(14,je,16,21,"tr",4),e.qZA()()),2&t){const n=e.oxw();e.xp6(4),e.Oqu(e.lcZ(5,5,"dashboard.timetable.table.time")),e.xp6(3),e.Oqu(e.lcZ(8,7,"dashboard.timetable.table.subject")),e.xp6(2),e.Q6J("ngIf",e.lcZ(10,9,n.isStudent$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(12,11,n.isStudent$)),e.xp6(3),e.Q6J("ngForOf",n.entries)}}function qe(t,s){1&t&&(e.TgZ(0,"p"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"dashboard.timetable.no-entries")))}let Xe=(()=>{class t{constructor(n,a){this.dashboardService=n,this.settings=a,this.entries=[],this.isStudent$=this.dashboardService.hasStudentRole$,this.isTeacher$=this.dashboardService.hasLessonTeacherRole$}buildLink(n){return this.settings.eventlist.eventdetail.replace(":id",String(n))}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(u),e.Y36(_.L6))},t.\u0275cmp=e.Xpm({type:t,selectors:[["erz-dashboard-timetable-table"]],inputs:{entries:"entries"},decls:3,vars:2,consts:[["class","table",4,"ngIf","ngIfElse"],["noEntries",""],[1,"table"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"time"],[1,"subject"],["target","_parent",3,"href",4,"ngIf","ngIfElse"],["noLink",""],["class","study-class",4,"ngIf"],["class","teacher",4,"ngIf"],["class","room",4,"ngIf"],["target","_parent",3,"href"],[1,"subject-study-class"],[1,"study-class"],[1,"teacher"],[1,"room"],["class","room-label",4,"ngIf"],[1,"room-label"]],template:function(n,a){if(1&n&&(e.YNc(0,Fe,15,13,"table",0),e.YNc(1,qe,3,3,"ng-template",null,1,e.W1O)),2&n){const i=e.MAs(2);e.Q6J("ngIf",a.entries.length>0)("ngIfElse",i)}},dependencies:[l.sg,l.O5,l.Ov,l.uU,p.X$],styles:['td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{padding:1rem 1.75rem}.room-label[_ngcontent-%COMP%], td.study-class[_ngcontent-%COMP%]{display:none}@media (max-width: 767.98px){table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{display:none}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{border-top:1px solid var(--bs-border-color)}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-template-areas:"time room" "subject subject" "study-class study-class" "teacher teacher";gap:.5rem;padding:1rem;border-bottom:1px solid var(--bs-border-color)}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:0;padding:0}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.time[_ngcontent-%COMP%]{grid-area:time;font-size:.875rem;line-height:1.125rem;font-weight:300}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.subject[_ngcontent-%COMP%]{grid-area:subject;font-size:1rem;line-height:1.25rem;font-weight:400}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.teacher[_ngcontent-%COMP%]{grid-area:teacher;font-size:.8125rem;line-height:1.0625rem;font-weight:300}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.room[_ngcontent-%COMP%]{grid-area:room;text-align:right;font-size:.875rem;line-height:1.125rem;font-weight:300}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.study-class[_ngcontent-%COMP%]{grid-area:study-class;font-size:.8125rem;line-height:1.0625rem;font-weight:300}td.study-class[_ngcontent-%COMP%]{display:block}.subject-study-class[_ngcontent-%COMP%]{display:none}.room-label[_ngcontent-%COMP%]{display:inline}}']}),t})(),Be=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[u],imports:[P.m,Ue]}),t})();e.B6R($,[l.O5,Z.e,L.O,Xe],[l.Ov,l.uU,p.X$])}}]);