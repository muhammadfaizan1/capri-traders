(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"93Pz":function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a("ofXK"),o=a("OtPg"),c=a("Kdsb"),i=a("1kSV"),r=a("e8Ap"),d=a("WsYS"),s=a("fXoL");let m=(()=>{class e{}return e.\u0275mod=s.Lb({type:e}),e.\u0275inj=s.Kb({factory:function(t){return new(t||e)},imports:[[n.c,d.a,o.c,c.c,i.h,i.l,r.b]]}),e})()},OlR4:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a("fXoL"),o=a("dNgK");let c=(()=>{class e{constructor(e){this.snackBar=e}openSnackBar(e,t=1e3,a="right",n="top"){this.snackBar.open(e,"",{duration:t,horizontalPosition:a,verticalPosition:n})}}return e.\u0275fac=function(t){return new(t||e)(n.ac(o.a))},e.\u0275prov=n.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},j8vG:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a("AytR"),o=a("fXoL"),c=a("tk/3");let i=(()=>{class e{constructor(e){this.httpClient=e}getAllCompanyHeads(){return this.httpClient.get(n.a.apiUrl+"company-heads")}addCompanyHead(e){return this.httpClient.post(n.a.apiUrl+"company-heads",e)}updateCompanyHead(e){return this.httpClient.patch(n.a.apiUrl+"company-heads/"+e.id,e)}deleteCompanyHead(e){return this.httpClient.delete(n.a.apiUrl+"company-heads/"+e)}}return e.\u0275fac=function(t){return new(t||e)(o.ac(c.c))},e.\u0275prov=o.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},kOLR:function(e,t,a){"use strict";a.r(t),a.d(t,"CompanyHeadsModule",function(){return O});var n=a("ofXK"),o=a("M9IT"),c=a("+0xr"),i=a("zyfY"),r=a("0IaG"),d=a("fXoL"),s=a("3Pt+"),m=a("bTqV");let b=(()=>{class e{constructor(e,t){this.dialogRef=e,this.data=t,this.company_head={name:"",id:""}}ngOnInit(){this.data&&this.data.company_head?(this.company_head=this.data.company_head,this.title="Update company_head",this.mode="Update"):(this.title="Add company_head",this.mode="Add")}onSubmit(){this.dialogRef.close({company_head:this.company_head,isEdit:!1})}}return e.\u0275fac=function(t){return new(t||e)(d.Nb(r.f),d.Nb(r.a))},e.\u0275cmp=d.Hb({type:e,selectors:[["app-add"]],decls:15,vars:4,consts:[[3,"ngSubmit"],["f","ngForm"],[1,"card","card-custom"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[1,"form-group"],["placeholder","Name","name","name","required","",1,"form-control",3,"ngModel","ngModelChange"],[1,"card-footer"],["type","button","mat-raised-button","","mat-dialog-close","","cdkFocusInitial",""],["type","submit","color","primary","mat-raised-button","",1,"mr-2",3,"disabled"]],template:function(e,t){if(1&e&&(d.Tb(0,"form",0,1),d.dc("ngSubmit",function(){return t.onSubmit()}),d.Tb(2,"div",2),d.Tb(3,"div",3),d.Tb(4,"div",4),d.Kc(5),d.Sb(),d.Sb(),d.Tb(6,"div",5),d.Tb(7,"div",6),d.Tb(8,"input",7),d.dc("ngModelChange",function(e){return t.company_head.name=e}),d.Sb(),d.Sb(),d.Sb(),d.Tb(9,"div",8),d.Tb(10,"button",9),d.Kc(11," Cancel"),d.Sb(),d.Kc(12,"\xa0 "),d.Tb(13,"button",10),d.Kc(14),d.Sb(),d.Sb(),d.Sb(),d.Sb()),2&e){const e=d.wc(1);d.Ab(5),d.Lc(t.title),d.Ab(3),d.nc("ngModel",t.company_head.name),d.Ab(5),d.nc("disabled",e.invalid),d.Ab(1),d.Mc(" ",t.mode," ")}},directives:[s.y,s.o,s.p,s.c,s.u,s.n,s.q,m.b,r.d],styles:[".card-footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"]}),e})();var l=a("j8vG"),p=a("OlR4"),u=a("NFeN"),h=a("Xa2L");function f(e,t){1&e&&(d.Tb(0,"mat-header-cell"),d.Kc(1," Name "),d.Sb())}function y(e,t){if(1&e&&(d.Tb(0,"mat-cell"),d.Kc(1),d.Sb()),2&e){const e=t.$implicit;d.Ab(1),d.Mc(" ",e.name," ")}}function S(e,t){1&e&&(d.Tb(0,"mat-header-cell"),d.Kc(1," Actions "),d.Sb())}function g(e,t){if(1&e){const e=d.Ub();d.Tb(0,"mat-cell"),d.Tb(1,"button",19),d.dc("click",function(){d.Ac(e);const a=t.$implicit;return d.hc().editCompanyHead(a)}),d.Tb(2,"mat-icon"),d.Kc(3,"create"),d.Sb(),d.Sb(),d.Kc(4,"\xa0 "),d.Tb(5,"button",20),d.dc("click",function(){d.Ac(e);const a=t.$implicit,n=t.index;return d.hc().deleteCompanyHead(a.id,n)}),d.Tb(6,"mat-icon"),d.Kc(7,"delete"),d.Sb(),d.Sb(),d.Sb()}}function C(e,t){1&e&&d.Ob(0,"mat-header-row")}function v(e,t){1&e&&d.Ob(0,"mat-row")}function w(e,t){1&e&&(d.Tb(0,"div",21),d.Kc(1," No records found "),d.Sb())}function T(e,t){1&e&&(d.Tb(0,"div",21),d.Kc(1,"Please wait...."),d.Sb())}function H(e,t){1&e&&d.Ob(0,"mat-spinner",22),2&e&&d.nc("diameter",20)}const k=function(){return[5,10,20]};let _=(()=>{class e{constructor(e,t,a,n){this.companyHeadService=e,this.commonService=t,this.cdr=a,this.dialog=n,this.displayedColumns=["name","actions"],this.company_heads=[],this.loaded=!1}ngOnInit(){this.companyHeadService.getAllCompanyHeads().subscribe(e=>{this.company_heads=e.company_heads,this.renderCompanyHeads(),this.loaded=!0,this.cdr.detectChanges()})}addCompanyHead(){this.dialog.open(b,{width:"440px",disableClose:!0}).afterClosed().subscribe(e=>{e&&this.companyHeadService.addCompanyHead(e.company_head).subscribe(e=>{this.company_heads.push(e.company_head),this.commonService.openSnackBar(e.message),this.renderCompanyHeads()},({error:e})=>{this.commonService.openSnackBar(e.errors.name[0],4e3)})})}renderCompanyHeads(){this.dataSource=new c.k(this.company_heads),this.dataSource.paginator=this.paginator}editCompanyHead(e){this.dialog.open(b,{data:{company_head:e},width:"440px",disableClose:!0}).afterClosed().subscribe(t=>{t&&this.companyHeadService.updateCompanyHead(t.company_head).subscribe(a=>{e=t.company_head,this.commonService.openSnackBar(a.message),this.cdr.detectChanges()},({error:e})=>{this.commonService.openSnackBar(e.errors.name[0],4e3)})})}deleteCompanyHead(e,t){this.dialog.open(i.a,{data:{title:"Delete company_head",message:"Are you sure?"},width:"440px",disableClose:!0}).afterClosed().subscribe(a=>{a&&a.confirm&&this.companyHeadService.deleteCompanyHead(e).subscribe(e=>{this.company_heads.splice(t,1),this.renderCompanyHeads(),this.commonService.openSnackBar(e.message)},({error:e})=>{this.commonService.openSnackBar(e.message,4e3)})})}}return e.\u0275fac=function(t){return new(t||e)(d.Nb(l.a),d.Nb(p.a),d.Nb(d.h),d.Nb(r.c))},e.\u0275cmp=d.Hb({type:e,selectors:[["app-company-heads"]],viewQuery:function(e,t){if(1&e&&d.Ec(o.a,!0),2&e){let e;d.vc(e=d.ec())&&(t.paginator=e.first)}},decls:25,vars:10,consts:[[1,"card","card-custom"],[1,"card-header"],[1,"card-title"],[1,"card-toolbar"],[1,"btn","btn-primary",3,"click"],[1,"card-body"],[1,"mat-table-wrapper"],[3,"dataSource"],["table",""],["matColumnDef","name"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","actions"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["class","mat-table-message",4,"ngIf"],[1,"mat-table-bottom"],[3,"diameter",4,"ngIf"],[3,"pageSize","pageSizeOptions","showFirstLastButtons"],["mat-icon-button","","color","primary","matTooltip","Edit user",3,"click"],["mat-icon-button","","color","warn","matTooltip","Delete user","type","button",3,"click"],[1,"mat-table-message"],[3,"diameter"]],template:function(e,t){1&e&&(d.Tb(0,"div",0),d.Tb(1,"div",1),d.Tb(2,"div",2),d.Tb(3,"h3"),d.Kc(4,"Company Heads"),d.Sb(),d.Sb(),d.Tb(5,"div",3),d.Tb(6,"button",4),d.dc("click",function(){return t.addCompanyHead()}),d.Kc(7," Add Company Head "),d.Sb(),d.Sb(),d.Sb(),d.Tb(8,"div",5),d.Tb(9,"div",6),d.Tb(10,"mat-table",7,8),d.Rb(12,9),d.Ic(13,f,2,0,"mat-header-cell",10),d.Ic(14,y,2,1,"mat-cell",11),d.Qb(),d.Rb(15,12),d.Ic(16,S,2,0,"mat-header-cell",10),d.Ic(17,g,8,0,"mat-cell",11),d.Qb(),d.Ic(18,C,1,0,"mat-header-row",13),d.Ic(19,v,1,0,"mat-row",14),d.Sb(),d.Ic(20,w,2,0,"div",15),d.Ic(21,T,2,0,"div",15),d.Sb(),d.Tb(22,"div",16),d.Ic(23,H,1,1,"mat-spinner",17),d.Ob(24,"mat-paginator",18),d.Sb(),d.Sb(),d.Sb()),2&e&&(d.Ab(10),d.nc("dataSource",t.dataSource),d.Ab(8),d.nc("matHeaderRowDef",t.displayedColumns),d.Ab(1),d.nc("matRowDefColumns",t.displayedColumns),d.Ab(1),d.nc("ngIf",t.loaded&&0==t.company_heads.length),d.Ab(1),d.nc("ngIf",!t.loaded),d.Ab(2),d.nc("ngIf",!t.loaded),d.Ab(1),d.nc("pageSize",10)("pageSizeOptions",d.qc(9,k))("showFirstLastButtons",!0))},directives:[c.j,c.c,c.e,c.b,c.g,c.i,n.n,o.a,c.d,c.a,m.b,u.a,c.f,c.h,h.b],styles:[".mat-table-wrapper[_ngcontent-%COMP%]   .mat-table[_ngcontent-%COMP%]{min-width:800px;width:100%}"]}),e})();var A=a("tyNb"),I=a("93Pz"),K=a("kmnG");let O=(()=>{class e{}return e.\u0275mod=d.Lb({type:e}),e.\u0275inj=d.Kb({factory:function(t){return new(t||e)},imports:[[n.c,I.a,m.c,c.l,o.b,u.b,h.a,s.j,K.e,r.e,A.k.forChild([{path:"",component:_}])]]}),e})()}}]);