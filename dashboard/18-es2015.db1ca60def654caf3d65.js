(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"93Pz":function(t,e,a){"use strict";a.d(e,"a",function(){return b});var n=a("ofXK"),r=a("OtPg"),i=a("Kdsb"),c=a("1kSV"),o=a("e8Ap"),d=a("WsYS"),s=a("fXoL");let b=(()=>{class t{}return t.\u0275mod=s.Lb({type:t}),t.\u0275inj=s.Kb({factory:function(e){return new(e||t)},imports:[[n.c,d.a,r.c,i.c,c.h,c.l,o.b]]}),t})()},OlR4:function(t,e,a){"use strict";a.d(e,"a",function(){return i});var n=a("fXoL"),r=a("dNgK");let i=(()=>{class t{constructor(t){this.snackBar=t}openSnackBar(t,e=1e3,a="right",n="top"){this.snackBar.open(t,"",{duration:e,horizontalPosition:a,verticalPosition:n})}}return t.\u0275fac=function(e){return new(e||t)(n.ac(r.a))},t.\u0275prov=n.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},bLbe:function(t,e,a){"use strict";a.r(e),a.d(e,"BrandsModule",function(){return D});var n=a("ofXK"),r=a("M9IT"),i=a("+0xr"),c=a("0IaG"),o=a("fXoL"),d=a("3Pt+"),s=a("bTqV");let b=(()=>{class t{constructor(t,e){this.dialogRef=t,this.data=e,this.brand={name:"",id:""}}ngOnInit(){this.data&&this.data.brand?(this.brand=this.data.brand,this.title="Update brand",this.mode="Update"):(this.title="Add brand",this.mode="Add")}onSubmit(){this.dialogRef.close({brand:this.brand,isEdit:!1})}}return t.\u0275fac=function(e){return new(e||t)(o.Nb(c.f),o.Nb(c.a))},t.\u0275cmp=o.Hb({type:t,selectors:[["app-add"]],decls:15,vars:4,consts:[[3,"ngSubmit"],["f","ngForm"],[1,"card","card-custom"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[1,"form-group"],["placeholder","Name","name","name","required","",1,"form-control",3,"ngModel","ngModelChange"],[1,"card-footer"],["type","button","mat-raised-button","","mat-dialog-close","","cdkFocusInitial",""],["type","submit","color","primary","mat-raised-button","",1,"mr-2",3,"disabled"]],template:function(t,e){if(1&t&&(o.Tb(0,"form",0,1),o.dc("ngSubmit",function(){return e.onSubmit()}),o.Tb(2,"div",2),o.Tb(3,"div",3),o.Tb(4,"div",4),o.Kc(5),o.Sb(),o.Sb(),o.Tb(6,"div",5),o.Tb(7,"div",6),o.Tb(8,"input",7),o.dc("ngModelChange",function(t){return e.brand.name=t}),o.Sb(),o.Sb(),o.Sb(),o.Tb(9,"div",8),o.Tb(10,"button",9),o.Kc(11," Cancel"),o.Sb(),o.Kc(12,"\xa0 "),o.Tb(13,"button",10),o.Kc(14),o.Sb(),o.Sb(),o.Sb(),o.Sb()),2&t){const t=o.wc(1);o.Ab(5),o.Lc(e.title),o.Ab(3),o.nc("ngModel",e.brand.name),o.Ab(5),o.nc("disabled",t.invalid),o.Ab(1),o.Mc(" ",e.mode," ")}},directives:[d.y,d.o,d.p,d.c,d.u,d.n,d.q,s.b,c.d],styles:[".card-footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"]}),t})();var l=a("zyfY"),u=a("AytR"),m=a("tk/3");let p=(()=>{class t{constructor(t){this.httpClient=t}getBrands(){return this.httpClient.get(u.a.apiUrl+"brands")}addBrand(t){return this.httpClient.post(u.a.apiUrl+"brands",t)}updateBrand(t){return this.httpClient.patch(u.a.apiUrl+"brands/"+t.id,t)}deleteBrand(t){return this.httpClient.delete(u.a.apiUrl+"brands/"+t)}}return t.\u0275fac=function(e){return new(e||t)(o.ac(m.c))},t.\u0275prov=o.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var h=a("OlR4"),f=a("NFeN"),S=a("Xa2L");function g(t,e){1&t&&(o.Tb(0,"mat-header-cell"),o.Kc(1," Name "),o.Sb())}function v(t,e){if(1&t&&(o.Tb(0,"mat-cell"),o.Kc(1),o.Sb()),2&t){const t=e.$implicit;o.Ab(1),o.Mc(" ",t.name," ")}}function w(t,e){1&t&&(o.Tb(0,"mat-header-cell"),o.Kc(1," Actions "),o.Sb())}function T(t,e){if(1&t){const t=o.Ub();o.Tb(0,"mat-cell"),o.Tb(1,"button",19),o.dc("click",function(){o.Ac(t);const a=e.$implicit;return o.hc().editBrand(a)}),o.Tb(2,"mat-icon"),o.Kc(3,"create"),o.Sb(),o.Sb(),o.Kc(4,"\xa0 "),o.Tb(5,"button",20),o.dc("click",function(){o.Ac(t);const a=e.$implicit,n=e.index;return o.hc().deleteBrand(a.id,n)}),o.Tb(6,"mat-icon"),o.Kc(7,"delete"),o.Sb(),o.Sb(),o.Sb()}}function B(t,e){1&t&&o.Ob(0,"mat-header-row")}function y(t,e){1&t&&o.Ob(0,"mat-row")}function C(t,e){1&t&&(o.Tb(0,"div",21),o.Kc(1," No records found "),o.Sb())}function k(t,e){1&t&&(o.Tb(0,"div",21),o.Kc(1,"Please wait...."),o.Sb())}function A(t,e){1&t&&o.Ob(0,"mat-spinner",22),2&t&&o.nc("diameter",20)}const I=function(){return[5,10,20]};let K=(()=>{class t{constructor(t,e,a,n){this.brandsService=t,this.commonService=e,this.cdr=a,this.dialog=n,this.displayedColumns=["name","actions"],this.brands=[],this.loaded=!1}ngOnInit(){this.brandsService.getBrands().subscribe(t=>{this.brands=t.brands,this.renderBrands(),this.loaded=!0,this.cdr.detectChanges()})}addBrand(){this.dialog.open(b,{width:"440px",disableClose:!0}).afterClosed().subscribe(t=>{t&&this.brandsService.addBrand(t.brand).subscribe(t=>{this.brands.push(t.brand),this.commonService.openSnackBar(t.message),this.renderBrands()},({error:t})=>{this.commonService.openSnackBar(t.errors.name[0],4e3)})})}renderBrands(){this.dataSource=new i.k(this.brands),this.dataSource.paginator=this.paginator}editBrand(t){this.dialog.open(b,{data:{brand:t},width:"440px",disableClose:!0}).afterClosed().subscribe(e=>{e&&this.brandsService.updateBrand(e.brand).subscribe(a=>{t=e.brand,this.commonService.openSnackBar(a.message),this.cdr.detectChanges()},({error:t})=>{this.commonService.openSnackBar(t.errors.name[0],4e3)})})}deleteBrand(t,e){this.dialog.open(l.a,{data:{title:"Delete brand",message:"Are you sure?"},width:"440px",disableClose:!0}).afterClosed().subscribe(a=>{a&&a.confirm&&this.brandsService.deleteBrand(t).subscribe(t=>{this.brands.splice(e,1),this.renderBrands(),this.commonService.openSnackBar(t.message)},({error:t})=>{this.commonService.openSnackBar(t.message,4e3)})})}}return t.\u0275fac=function(e){return new(e||t)(o.Nb(p),o.Nb(h.a),o.Nb(o.h),o.Nb(c.c))},t.\u0275cmp=o.Hb({type:t,selectors:[["app-brands"]],viewQuery:function(t,e){if(1&t&&o.Ec(r.a,!0),2&t){let t;o.vc(t=o.ec())&&(e.paginator=t.first)}},decls:25,vars:10,consts:[[1,"card","card-custom"],[1,"card-header"],[1,"card-title"],[1,"card-toolbar"],[1,"btn","btn-primary",3,"click"],[1,"card-body"],[1,"mat-table-wrapper"],[3,"dataSource"],["table",""],["matColumnDef","name"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","actions"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["class","mat-table-message",4,"ngIf"],[1,"mat-table-bottom"],[3,"diameter",4,"ngIf"],[3,"pageSize","pageSizeOptions","showFirstLastButtons"],["mat-icon-button","","color","primary","matTooltip","Edit user",3,"click"],["mat-icon-button","","color","warn","matTooltip","Delete user","type","button",3,"click"],[1,"mat-table-message"],[3,"diameter"]],template:function(t,e){1&t&&(o.Tb(0,"div",0),o.Tb(1,"div",1),o.Tb(2,"div",2),o.Tb(3,"h3"),o.Kc(4,"Brands"),o.Sb(),o.Sb(),o.Tb(5,"div",3),o.Tb(6,"button",4),o.dc("click",function(){return e.addBrand()}),o.Kc(7,"Add Brands"),o.Sb(),o.Sb(),o.Sb(),o.Tb(8,"div",5),o.Tb(9,"div",6),o.Tb(10,"mat-table",7,8),o.Rb(12,9),o.Ic(13,g,2,0,"mat-header-cell",10),o.Ic(14,v,2,1,"mat-cell",11),o.Qb(),o.Rb(15,12),o.Ic(16,w,2,0,"mat-header-cell",10),o.Ic(17,T,8,0,"mat-cell",11),o.Qb(),o.Ic(18,B,1,0,"mat-header-row",13),o.Ic(19,y,1,0,"mat-row",14),o.Sb(),o.Ic(20,C,2,0,"div",15),o.Ic(21,k,2,0,"div",15),o.Sb(),o.Tb(22,"div",16),o.Ic(23,A,1,1,"mat-spinner",17),o.Ob(24,"mat-paginator",18),o.Sb(),o.Sb(),o.Sb()),2&t&&(o.Ab(10),o.nc("dataSource",e.dataSource),o.Ab(8),o.nc("matHeaderRowDef",e.displayedColumns),o.Ab(1),o.nc("matRowDefColumns",e.displayedColumns),o.Ab(1),o.nc("ngIf",e.loaded&&0==e.brands.length),o.Ab(1),o.nc("ngIf",!e.loaded),o.Ab(2),o.nc("ngIf",!e.loaded),o.Ab(1),o.nc("pageSize",10)("pageSizeOptions",o.qc(9,I))("showFirstLastButtons",!0))},directives:[i.j,i.c,i.e,i.b,i.g,i.i,n.n,r.a,i.d,i.a,s.b,f.a,i.f,i.h,S.b],styles:[".mat-table-wrapper[_ngcontent-%COMP%]   .mat-table[_ngcontent-%COMP%]{min-width:800px;width:100%}"]}),t})();var O=a("tyNb"),N=a("kmnG"),R=a("93Pz");let D=(()=>{class t{}return t.\u0275mod=o.Lb({type:t}),t.\u0275inj=o.Kb({factory:function(e){return new(e||t)},imports:[[n.c,R.a,s.c,i.l,r.b,f.b,S.a,d.j,N.e,c.e,O.k.forChild([{path:"",component:K}])]]}),t})()}}]);