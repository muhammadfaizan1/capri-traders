(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{JBSk:function(e,t,i){"use strict";i.r(t),i.d(t,"SalePurchaseSharedModule",function(){return ie});var n=i("+0xr"),a=i("M9IT"),c=i("Xa2L"),o=i("NFeN"),r=i("0IaG"),b=i("bTqV"),d=i("d3UM"),s=i("qFsG"),m=i("Dh3D"),l=i("ofXK"),u=i("tyNb"),p=i("3Pt+"),h=i("mrSG"),g=i("fXoL");let f=(()=>{class e{constructor(e,t){this.dialogRef=e,this.data=t,this.object_item={unit_quantity:0,rate:0,description:"",id:""}}ngOnInit(){this.data&&this.data.object_item?(this.object_item=this.data.object_item,this.index=this.data.index,this.title="Update Quantity or Rate",this.mode="Update"):(this.title="Add Item",this.mode="Add")}onSubmit(){this.dialogRef.close({object_item:this.object_item,index:this.index,isEdit:!1})}}return e.\u0275fac=function(t){return new(t||e)(g.Nb(r.f),g.Nb(r.a))},e.\u0275cmp=g.Hb({type:e,selectors:[["app-edit"]],decls:25,vars:6,consts:[[3,"ngSubmit"],["f","ngForm"],[1,"card","card-custom"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[1,"form-group"],["type","number","placeholder","Quantity","name","quantity","required","",1,"form-control",3,"ngModel","ngModelChange"],["type","number","placeholder","Rate","name","rate","required","",1,"form-control",3,"ngModel","ngModelChange"],["type","text","placeholder","Description","name","description",1,"form-control",3,"ngModel","ngModelChange"],[1,"card-footer"],["type","button","mat-raised-button","","mat-dialog-close","","cdkFocusInitial",""],["type","submit","color","primary","mat-raised-button","",1,"mr-2",3,"disabled"]],template:function(e,t){if(1&e&&(g.Tb(0,"form",0,1),g.dc("ngSubmit",function(){return t.onSubmit()}),g.Tb(2,"div",2),g.Tb(3,"div",3),g.Tb(4,"div",4),g.Kc(5),g.Sb(),g.Sb(),g.Tb(6,"div",5),g.Tb(7,"div",6),g.Tb(8,"label"),g.Kc(9,"Quantity:"),g.Sb(),g.Tb(10,"input",7),g.dc("ngModelChange",function(e){return t.object_item.unit_quantity=e}),g.Sb(),g.Sb(),g.Tb(11,"div",6),g.Tb(12,"label"),g.Kc(13,"Rate:"),g.Sb(),g.Tb(14,"input",8),g.dc("ngModelChange",function(e){return t.object_item.rate=e}),g.Sb(),g.Sb(),g.Tb(15,"div",6),g.Tb(16,"label"),g.Kc(17,"Description:"),g.Sb(),g.Tb(18,"input",9),g.dc("ngModelChange",function(e){return t.object_item.description=e}),g.Sb(),g.Sb(),g.Sb(),g.Tb(19,"div",10),g.Tb(20,"button",11),g.Kc(21," Cancel "),g.Sb(),g.Kc(22," \xa0 "),g.Tb(23,"button",12),g.Kc(24),g.Sb(),g.Sb(),g.Sb(),g.Sb()),2&e){const e=g.wc(1);g.Ab(5),g.Lc(t.title),g.Ab(5),g.nc("ngModel",t.object_item.unit_quantity),g.Ab(4),g.nc("ngModel",t.object_item.rate),g.Ab(4),g.nc("ngModel",t.object_item.description),g.Ab(5),g.nc("disabled",e.invalid),g.Ab(1),g.Mc(" ",t.mode," ")}},directives:[p.y,p.o,p.p,p.s,p.c,p.u,p.n,p.q,b.b,r.d],styles:[".card-footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"]}),e})();var S=i("TbAH"),T=i("ZOSX"),v=i("q8Zq"),y=i("NWHx"),I=i("j8vG"),C=i("vjb8"),M=i("OlR4"),_=i("kmnG"),A=i("FKr1");function j(e,t){if(1&e&&(g.Tb(0,"mat-option",53),g.Kc(1),g.Sb()),2&e){const e=t.$implicit;g.nc("value",e.id),g.Ab(1),g.Mc(" ",e.name," ")}}function K(e,t){if(1&e&&(g.Tb(0,"mat-option",53),g.Kc(1),g.Sb()),2&e){const e=t.$implicit;g.nc("value",e.id),g.Ab(1),g.Mc(" ",e.name," ")}}function w(e,t){if(1&e&&(g.Tb(0,"mat-option",53),g.Kc(1),g.Sb()),2&e){const e=t.$implicit;g.nc("value",e.name),g.Ab(1),g.Mc(" ",e.name," ")}}function q(e,t){if(1&e&&(g.Tb(0,"mat-option",53),g.Kc(1),g.Sb()),2&e){const e=t.$implicit;g.nc("value",e.name),g.Ab(1),g.Mc(" ",e.name," ")}}function D(e,t){if(1&e&&(g.Tb(0,"mat-option",53),g.Kc(1),g.Sb()),2&e){const e=t.$implicit;g.nc("value",e.id),g.Ab(1),g.Mc(" ",e.name," ")}}function O(e,t){1&e&&(g.Tb(0,"mat-header-cell",54),g.Kc(1," Name "),g.Sb())}function k(e,t){if(1&e&&(g.Tb(0,"mat-cell"),g.Kc(1),g.Sb()),2&e){const e=t.$implicit;g.Ab(1),g.Mc(" ",e.item.name," ")}}function R(e,t){1&e&&(g.Tb(0,"mat-header-cell",54),g.Kc(1," Brand "),g.Sb())}function N(e,t){if(1&e&&(g.Tb(0,"mat-cell"),g.Kc(1),g.Sb()),2&e){const e=t.$implicit;g.Ab(1),g.Mc(" ",e.item.brand?e.item.brand.name:""," ")}}function P(e,t){1&e&&(g.Tb(0,"mat-header-cell",54),g.Kc(1," Quantity "),g.Sb())}function U(e,t){if(1&e&&(g.Tb(0,"mat-cell"),g.Kc(1),g.Sb()),2&e){const e=t.$implicit;g.Ab(1),g.Mc(" ",e.unit_quantity," ")}}function F(e,t){1&e&&(g.Tb(0,"mat-header-cell",54),g.Kc(1," Rate "),g.Sb())}function x(e,t){if(1&e&&(g.Tb(0,"mat-cell"),g.Kc(1),g.Sb()),2&e){const e=t.$implicit;g.Ab(1),g.Mc(" ",e.rate," ")}}function E(e,t){1&e&&(g.Tb(0,"mat-header-cell",54),g.Kc(1," Discount "),g.Sb())}function H(e,t){if(1&e&&(g.Tb(0,"mat-cell"),g.Kc(1),g.Sb()),2&e){const e=t.$implicit;g.Ab(1),g.Mc(" ",e.item.discount," ")}}function Q(e,t){1&e&&(g.Tb(0,"mat-header-cell",54),g.Kc(1," Description "),g.Sb())}function L(e,t){if(1&e&&(g.Tb(0,"mat-cell"),g.Kc(1),g.Sb()),2&e){const e=t.$implicit;g.Ab(1),g.Mc(" ",e.item.description," ")}}function $(e,t){1&e&&(g.Tb(0,"mat-header-cell",54),g.Kc(1," Image "),g.Sb())}function B(e,t){if(1&e&&(g.Tb(0,"mat-cell"),g.Ob(1,"img",55),g.Sb()),2&e){const e=t.$implicit;g.Ab(1),g.nc("src",e.item.image_url,g.Bc)}}function G(e,t){1&e&&(g.Tb(0,"mat-header-cell",54),g.Kc(1," Actions "),g.Sb())}function X(e,t){if(1&e){const e=g.Ub();g.Tb(0,"mat-cell"),g.Tb(1,"a",56),g.dc("click",function(){g.Ac(e);const i=t.$implicit,n=t.index;return g.hc().editObjectItemsItem(i,n)}),g.Tb(2,"mat-icon"),g.Kc(3,"create"),g.Sb(),g.Sb(),g.Kc(4,"\xa0 "),g.Tb(5,"a",57),g.dc("click",function(){g.Ac(e);const i=t.index;return g.hc().removeFromObjectItems(i)}),g.Tb(6,"mat-icon"),g.Kc(7,"delete"),g.Sb(),g.Sb(),g.Sb()}}function J(e,t){1&e&&g.Ob(0,"mat-header-row")}function z(e,t){1&e&&g.Ob(0,"mat-row")}function W(e,t){1&e&&(g.Tb(0,"div",58),g.Kc(1," No records found "),g.Sb())}function Z(e,t){1&e&&(g.Tb(0,"div",58),g.Kc(1," Please wait.... "),g.Sb())}function V(e,t){1&e&&g.Ob(0,"mat-spinner",9),2&e&&g.nc("diameter",20)}function Y(e,t){if(1&e){const e=g.Ub();g.Tb(0,"button",59),g.dc("click",function(){g.Ac(e);const t=g.hc(),i=g.wc(10);return t.onSubmit(i,!0)}),g.Kc(1),g.Sb()}if(2&e){const e=g.hc(),t=g.wc(10);g.nc("disabled",t.invalid||t.pristine),g.Ab(1),g.Mc(" ","EDIT"===e.mode?"Update":"Save"," as Reutrn ")}}function ee(e,t){if(1&e){const e=g.Ub();g.Tb(0,"button",60),g.dc("click",function(){g.Ac(e);const t=g.hc(),i=g.wc(10);return t.onSubmit(i,!1)}),g.Kc(1),g.Sb()}if(2&e){const e=g.hc(),t=g.wc(10);g.nc("disabled",t.invalid||t.pristine||!e.object.object_items.length),g.Ab(1),g.Mc(" ","EDIT"===e.mode?"Update":"Save"," ")}}let te=(()=>{class e{constructor(e,t,i,a,c,o,r,b,d){this.activatedRoute=e,this.itemsService=t,this.saleService=i,this.purchaseService=a,this.companyHeadsService=c,this.partiesService=o,this.commonService=r,this.cdr=b,this.dialog=d,this.loaded=!1,this.mode="ADD",this.company_heads=[],this.parties=[],this.items=[],this.pay_modes=[{name:"CREDIT"},{name:"CASH"}],this.pay_statuses=[{name:"PENDING"},{name:"DONE"}],this.object={is_return:!1,company_head_id:1,date:"2012-04-12",bill_no:123,po_no:123,grn:123,party_id:1,pay_mode:"CASH",remarks:"testing",pay_status:"PENDING",object_items:[]},this.selectedItem={id:"",unit_quantity:"",rate:""},this.dataSource=new n.k([]),this.pageSize=5,this.displayedColumns=["name","brand","quantity","rate","discount","description","image","actions"]}ngOnInit(){return Object(h.a)(this,void 0,void 0,function*(){this.activatedRoute.params.subscribe(e=>Object(h.a)(this,void 0,void 0,function*(){if(this.type=e.type,this.type_id=e.type_id,e.type_id)switch(this.mode="EDIT",e.type){case"Sale":e.type_id&&(yield this.saleService.get(e.type_id).toPromise().then(e=>{this.object=e.sale,this.object.object_items=e.sale.sale_items}));break;case"Purchase":e.type_id&&(yield this.purchaseService.get(e.type_id).toPromise().then(e=>{this.object=e.purchase,this.object.object_items=e.purchase.purchase_items}))}this.refreshDataSource()})),this.itemsService.getCreateItemParams().subscribe(e=>{this.itemData=e}),this.itemsService.getAllItems().subscribe(this.handleResponse.bind(this)),this.companyHeadsService.getAllCompanyHeads().subscribe(e=>{this.company_heads=e.company_heads}),this.partiesService.getAllParties().subscribe(e=>{this.parties=e.parties})})}handleResponse(e){this.items=e.items,this.loaded=!0,this.cdr.detectChanges()}onSubmit(e,t){if(e.invalid)return;this.object.is_return=t;const i="Sale"===this.type?this.saleService:this.purchaseService;"ADD"===this.mode?i.add(this.object).subscribe(e=>{console.log(e)}):i.update(this.object).subscribe(e=>{console.log(e)})}addItem(){this.dialog.open(S.a,{data:{paramsData:this.itemData},disableClose:!0}).afterClosed().subscribe(e=>{})}AddItemToSaleItems(){if(this.selectedItem.id){const e=this.items.find(e=>e.id==this.selectedItem.id);this.object.object_items.push(JSON.parse(JSON.stringify({item:e,rate:this.selectedItem.rate,unit_quantity:this.selectedItem.unit_quantity}))),this.refreshDataSource(),this.cdr.detectChanges(),this.totalItems=this.object.object_items.length,this.cdr.detectChanges(),this.loaded=!0}}removeFromObjectItems(e){this.object.object_items.splice(e,1),this.refreshDataSource(),this.cdr.detectChanges()}refreshDataSource(){this.dataSource=new n.k(this.object.object_items),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}editObjectItemsItem(e,t){this.dialog.open(f,{data:{object_item:e,index:t},width:"440px",disableClose:!0}).afterClosed().subscribe(e=>{e&&(this.object.object_items[e.index].unit_quantity=e.object_item.unit_quantity,this.object.object_items[e.index].rate=e.object_item.rate,this.dataSource.data=this.object.object_items,this.cdr.detectChanges())})}}return e.\u0275fac=function(t){return new(t||e)(g.Nb(u.a),g.Nb(T.a),g.Nb(v.a),g.Nb(y.a),g.Nb(I.a),g.Nb(C.a),g.Nb(M.a),g.Nb(g.h),g.Nb(r.c))},e.\u0275cmp=g.Hb({type:e,selectors:[["app-add-or-edit"]],viewQuery:function(e,t){if(1&e&&(g.Ec(a.a,!0),g.Oc(m.a,!0)),2&e){let e;g.vc(e=g.ec())&&(t.paginator=e.first),g.vc(e=g.ec())&&(t.sort=e.first)}},decls:147,vars:29,consts:[[1,"card","card-custom"],[1,"card-header"],[1,"card-title"],[1,"card-toolbar"],[1,"btn","btn-primary",3,"click"],[1,"form"],["objectForm","ngForm"],[1,"card-body"],[1,"card-body-progress"],[3,"diameter"],[1,"form-group","row"],[1,"col-lg-4","kt-margin-bottom-20-mobile"],[1,"mat-form-field-fluid"],["placeholder","Company Head","name","company_head_id","required","",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"col-lg-2","kt-margin-bottom-20-mobile"],["type","date","matInput","","placeholder","Date","name","date","required","",3,"ngModel","ngModelChange"],["type","number","matInput","","placeholder","Bill/Ref#","name","bill_no","required","",3,"ngModel","ngModelChange"],["type","number","matInput","","placeholder","PO#","name","po_no","required","",3,"ngModel","ngModelChange"],["type","number","matInput","","placeholder","GRN","name","grn","required","",3,"ngModel","ngModelChange"],["placeholder","Party","name","party_id","required","",3,"ngModel","ngModelChange"],["placeholder","Pay Mode","name","pay_mode","required","",3,"ngModel","ngModelChange"],["placeholder","Pay Status","name","pay_status","required","",3,"ngModel","ngModelChange"],["matInput","","type","text","placeholder","Remarks","name","remarks",3,"ngModel","ngModelChange"],[1,"col-lg-3","kt-margin-bottom-20-mobile"],["placeholder","Enter Item","name","item",3,"ngModel","ngModelChange"],["matInput","","type","number","placeholder","Quantity","name","quantity",3,"ngModel","ngModelChange"],["matInput","","type","number","placeholder","Rate","name","rate",3,"ngModel","ngModelChange"],[1,"separator","separator-dashed","my-6"],[1,"mat-table-wrapper"],["matSort","","matSortActive","date_str","matSortDirection","desc","matSortDisableClear","",3,"dataSource"],["table","","sort1","matSort"],["matColumnDef","name"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","brand"],["matColumnDef","quantity"],["matColumnDef","rate"],["matColumnDef","discount"],["matColumnDef","description"],["matColumnDef","image"],["matColumnDef","actions"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["class","mat-table-message",4,"ngIf"],[1,"mat-table-bottom"],[3,"diameter",4,"ngIf"],[3,"pageSize","showFirstLastButtons","length"],[1,"card-footer"],[1,"d-flex","justify-content-between"],[1,"mr-2"],["type","submit","mat-raised-button","","color","primary","class","mr-3",3,"disabled","click",4,"ngIf"],["type","submit","mat-raised-button","","color","primary",3,"disabled","click",4,"ngIf"],[3,"value"],["mat-sort-header",""],[1,"img-fluid","w-75",3,"src"],["mat-icon-button","","color","primary",3,"click"],["mat-icon-button","","color","warn","type","button",3,"click"],[1,"mat-table-message"],["type","submit","mat-raised-button","","color","primary",1,"mr-3",3,"disabled","click"],["type","submit","mat-raised-button","","color","primary",3,"disabled","click"]],template:function(e,t){1&e&&(g.Tb(0,"div",0),g.Tb(1,"div",1),g.Tb(2,"div",2),g.Tb(3,"h3"),g.Kc(4,"Sales"),g.Sb(),g.Sb(),g.Tb(5,"div",3),g.Tb(6,"button",4),g.dc("click",function(){return t.addItem()}),g.Kc(7,"Add Item"),g.Sb(),g.Sb(),g.Sb(),g.Tb(8,"div"),g.Tb(9,"form",5,6),g.Tb(11,"div",7),g.Tb(12,"div",8),g.Ob(13,"mat-spinner",9),g.Sb(),g.Tb(14,"div",10),g.Tb(15,"div",11),g.Tb(16,"mat-form-field",12),g.Tb(17,"mat-select",13),g.dc("ngModelChange",function(e){return t.object.company_head_id=e}),g.Ic(18,j,2,2,"mat-option",14),g.Sb(),g.Tb(19,"mat-error"),g.Kc(20," Company Head is "),g.Tb(21,"strong"),g.Kc(22,"required"),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Tb(23,"div",15),g.Tb(24,"mat-form-field",12),g.Tb(25,"input",16),g.dc("ngModelChange",function(e){return t.object.date=e}),g.Sb(),g.Tb(26,"mat-error"),g.Kc(27," Date is "),g.Tb(28,"strong"),g.Kc(29,"required"),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Tb(30,"div",15),g.Tb(31,"mat-form-field",12),g.Tb(32,"input",17),g.dc("ngModelChange",function(e){return t.object.bill_no=e}),g.Sb(),g.Tb(33,"mat-error"),g.Kc(34," Bill no is "),g.Tb(35,"strong"),g.Kc(36,"required"),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Tb(37,"div",15),g.Tb(38,"mat-form-field",12),g.Tb(39,"input",18),g.dc("ngModelChange",function(e){return t.object.po_no=e}),g.Sb(),g.Tb(40,"mat-error"),g.Kc(41," PO# is "),g.Tb(42,"strong"),g.Kc(43,"required"),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Tb(44,"div",15),g.Tb(45,"mat-form-field",12),g.Tb(46,"input",19),g.dc("ngModelChange",function(e){return t.object.grn=e}),g.Sb(),g.Tb(47,"mat-error"),g.Kc(48," GRN is "),g.Tb(49,"strong"),g.Kc(50,"required"),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Tb(51,"div",10),g.Tb(52,"div",11),g.Tb(53,"mat-form-field",12),g.Tb(54,"mat-select",20),g.dc("ngModelChange",function(e){return t.object.party_id=e}),g.Ic(55,K,2,2,"mat-option",14),g.Sb(),g.Tb(56,"mat-error"),g.Kc(57," Party is "),g.Tb(58,"strong"),g.Kc(59,"required"),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Tb(60,"div",15),g.Tb(61,"mat-form-field",12),g.Tb(62,"mat-select",21),g.dc("ngModelChange",function(e){return t.object.pay_mode=e}),g.Ic(63,w,2,2,"mat-option",14),g.Sb(),g.Tb(64,"mat-error"),g.Tb(65,"strong"),g.Kc(66,"required"),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Tb(67,"div",15),g.Tb(68,"mat-form-field",12),g.Tb(69,"mat-select",22),g.dc("ngModelChange",function(e){return t.object.pay_status=e}),g.Ic(70,q,2,2,"mat-option",14),g.Sb(),g.Tb(71,"mat-error"),g.Tb(72,"strong"),g.Kc(73,"required"),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Tb(74,"div",11),g.Tb(75,"mat-form-field",12),g.Tb(76,"input",23),g.dc("ngModelChange",function(e){return t.object.remarks=e}),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Tb(77,"div",10),g.Tb(78,"div",24),g.Tb(79,"mat-form-field",12),g.Tb(80,"mat-select",25),g.dc("ngModelChange",function(e){return t.selectedItem.id=e}),g.Ic(81,D,2,2,"mat-option",14),g.Sb(),g.Tb(82,"mat-error"),g.Kc(83," Item is "),g.Tb(84,"strong"),g.Kc(85,"required"),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Tb(86,"div",15),g.Tb(87,"mat-form-field",12),g.Tb(88,"input",26),g.dc("ngModelChange",function(e){return t.selectedItem.unit_quantity=e}),g.Sb(),g.Tb(89,"mat-error"),g.Kc(90," Quantity is "),g.Tb(91,"strong"),g.Kc(92,"required"),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Tb(93,"div",15),g.Tb(94,"mat-form-field",12),g.Tb(95,"input",27),g.dc("ngModelChange",function(e){return t.selectedItem.rate=e}),g.Sb(),g.Tb(96,"mat-error"),g.Kc(97," Rate is "),g.Tb(98,"strong"),g.Kc(99,"required"),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Tb(100,"div",15),g.Tb(101,"a",4),g.dc("click",function(){return t.AddItemToSaleItems()}),g.Kc(102," Add "),g.Sb(),g.Sb(),g.Sb(),g.Ob(103,"div",28),g.Sb(),g.Sb(),g.Tb(104,"div",7),g.Tb(105,"div",29),g.Tb(106,"mat-table",30,31),g.Rb(109,32),g.Ic(110,O,2,0,"mat-header-cell",33),g.Ic(111,k,2,1,"mat-cell",34),g.Qb(),g.Rb(112,35),g.Ic(113,R,2,0,"mat-header-cell",33),g.Ic(114,N,2,1,"mat-cell",34),g.Qb(),g.Rb(115,36),g.Ic(116,P,2,0,"mat-header-cell",33),g.Ic(117,U,2,1,"mat-cell",34),g.Qb(),g.Rb(118,37),g.Ic(119,F,2,0,"mat-header-cell",33),g.Ic(120,x,2,1,"mat-cell",34),g.Qb(),g.Rb(121,38),g.Ic(122,E,2,0,"mat-header-cell",33),g.Ic(123,H,2,1,"mat-cell",34),g.Qb(),g.Rb(124,39),g.Ic(125,Q,2,0,"mat-header-cell",33),g.Ic(126,L,2,1,"mat-cell",34),g.Qb(),g.Rb(127,40),g.Ic(128,$,2,0,"mat-header-cell",33),g.Ic(129,B,2,1,"mat-cell",34),g.Qb(),g.Rb(130,41),g.Ic(131,G,2,0,"mat-header-cell",33),g.Ic(132,X,8,0,"mat-cell",34),g.Qb(),g.Ic(133,J,1,0,"mat-header-row",42),g.Ic(134,z,1,0,"mat-row",43),g.Sb(),g.Ic(135,W,2,0,"div",44),g.Ic(136,Z,2,0,"div",44),g.Sb(),g.Tb(137,"div",45),g.Ic(138,V,1,1,"mat-spinner",46),g.Ob(139,"mat-paginator",47),g.Sb(),g.Sb(),g.Tb(140,"div",48),g.Tb(141,"div",49),g.Ob(142,"div",50),g.Tb(143,"div"),g.Kc(144," \xa0 "),g.Ic(145,Y,2,2,"button",51),g.Ic(146,ee,2,2,"button",52),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Sb()),2&e&&(g.Ab(13),g.nc("diameter",20),g.Ab(4),g.nc("ngModel",t.object.company_head_id),g.Ab(1),g.nc("ngForOf",t.company_heads),g.Ab(7),g.nc("ngModel",t.object.date),g.Ab(7),g.nc("ngModel",t.object.bill_no),g.Ab(7),g.nc("ngModel",t.object.po_no),g.Ab(7),g.nc("ngModel",t.object.grn),g.Ab(8),g.nc("ngModel",t.object.party_id),g.Ab(1),g.nc("ngForOf",t.parties),g.Ab(7),g.nc("ngModel",t.object.pay_mode),g.Ab(1),g.nc("ngForOf",t.pay_modes),g.Ab(6),g.nc("ngModel",t.object.pay_status),g.Ab(1),g.nc("ngForOf",t.pay_statuses),g.Ab(6),g.nc("ngModel",t.object.remarks),g.Ab(4),g.nc("ngModel",t.selectedItem.id),g.Ab(1),g.nc("ngForOf",t.items),g.Ab(7),g.nc("ngModel",t.selectedItem.unit_quantity),g.Ab(7),g.nc("ngModel",t.selectedItem.rate),g.Ab(11),g.nc("dataSource",t.dataSource),g.Ab(27),g.nc("matHeaderRowDef",t.displayedColumns),g.Ab(1),g.nc("matRowDefColumns",t.displayedColumns),g.Ab(1),g.nc("ngIf",t.loaded&&0==t.dataSource.data.length),g.Ab(1),g.nc("ngIf",!t.loaded&&!t.dataSource.data.length),g.Ab(2),g.nc("ngIf",!t.loaded),g.Ab(1),g.nc("pageSize",t.pageSize)("showFirstLastButtons",!0)("length",t.totalItems),g.Ab(6),g.nc("ngIf","ADD"===t.mode||"EDIT"===t.mode&&t.object.is_return),g.Ab(1),g.nc("ngIf",!t.object.is_return))},directives:[p.y,p.o,p.p,c.b,_.c,d.a,p.u,p.n,p.q,l.m,_.b,s.a,p.c,p.s,n.j,m.a,n.c,n.e,n.b,n.g,n.i,l.n,a.a,A.g,n.d,m.b,n.a,b.a,o.a,n.f,n.h,b.b],styles:[""]}),e})(),ie=(()=>{class e{}return e.\u0275mod=g.Lb({type:e}),e.\u0275inj=g.Kb({factory:function(t){return new(t||e)},imports:[[p.j,l.c,b.c,n.l,a.b,c.a,o.b,r.e,p.t,b.c,d.b,s.b,m.c,u.k.forChild([{path:"",component:te}])]]}),e})()},TbAH:function(e,t,i){"use strict";i.d(t,"a",function(){return _});var n=i("0IaG"),a=i("nYR2"),c=i("fXoL"),o=i("3Pt+"),r=i("ZOSX"),b=i("OlR4"),d=i("ofXK"),s=i("Xa2L"),m=i("kmnG"),l=i("d3UM"),u=i("qFsG"),p=i("bTqV"),h=i("FKr1"),g=i("rIor");function f(e,t){if(1&e&&(c.Tb(0,"mat-option",32),c.Kc(1),c.Sb()),2&e){const e=t.$implicit;c.nc("value",e.id),c.Ab(1),c.Mc(" ",e.name," ")}}function S(e,t){if(1&e&&(c.Tb(0,"mat-option",32),c.Kc(1),c.Sb()),2&e){const e=t.$implicit;c.nc("value",e.id),c.Ab(1),c.Mc(" ",e.name," ")}}function T(e,t){1&e&&(c.Tb(0,"h3"),c.Kc(1,"Selected Image:"),c.Sb())}function v(e,t){if(1&e){const e=c.Ub();c.Tb(0,"div",35),c.Ic(1,T,2,0,"h3",37),c.Tb(2,"image-cropper",38),c.dc("imageCropped",function(t){return c.Ac(e),c.hc(2).imageCropped(t)}),c.Sb(),c.Sb()}if(2&e){const e=c.hc(2);c.Ab(1),c.nc("ngIf",e.imageChangedEvent),c.Ab(1),c.nc("imageChangedEvent",e.imageChangedEvent)("maintainAspectRatio",!0)("aspectRatio",2)("cropperMinWidth",200)("imageQuality",60)("resizeToWidth",600)}}function y(e,t){if(1&e&&(c.Tb(0,"div",39),c.Ob(1,"img",40),c.Sb()),2&e){const e=c.hc(2);c.Ab(1),c.nc("src",e.item.image,c.Bc)}}function I(e,t){if(1&e&&(c.Tb(0,"div",39),c.Ob(1,"img",40),c.Sb()),2&e){const e=c.hc(2);c.Ab(1),c.nc("src",e.item.image_url,c.Bc)}}function C(e,t){if(1&e&&(c.Tb(0,"div",33),c.Ic(1,v,3,7,"div",34),c.Tb(2,"div",35),c.Tb(3,"h3"),c.Kc(4),c.Sb(),c.Ic(5,y,2,1,"div",36),c.Ic(6,I,2,1,"div",36),c.Sb(),c.Sb()),2&e){const e=c.hc();c.Ab(1),c.nc("ngIf",e.imageChangedEvent),c.Ab(3),c.Lc(e.imageChangedEvent?"Cropped Image:":"Product"),c.Ab(1),c.nc("ngIf",e.item.image),c.Ab(1),c.nc("ngIf",e.item.image_url&&!e.item.image)}}const M=function(e){return{"card-body-progress card-body-progress-overlay":e}};let _=(()=>{class e{constructor(e,t,i,n,a){this.dialogRef=e,this.data=t,this.fb=i,this.itemsService=n,this.commonService=a,this.item={brand_id:"",name:"",description:"",purchase_price:"",sale_price:"",unit_id:"",unit_quantity:"",discount:"",order:""},this.viewLoading=!0,this.imageChangedEvent="",this.croppedImage=""}ngOnInit(){this.brands=this.data.paramsData.brands,this.units=this.data.paramsData.units,this.data.item&&(this.item=Object.assign({},this.data.item),this.mode="edit"),this.viewLoading=!1}getTitle(){return this.item.id?`Edit Item '${this.item.name}'`:"New Item"}fileChangeEvent(e){this.imageChangedEvent=e,this.item.image=""}imageCropped(e){this.item.image=e.base64,this.item.image_url=e.base64}imageChanged(){this.item.image=""}onSubmit(){this.disabled=!0,"edit"===this.mode?this.itemsService.updateItem(this.item).pipe(Object(a.a)(()=>this.disabled=!1)).subscribe(({message:e})=>{this.commonService.openSnackBar(e),this.dialogRef.close(e)},({error:e})=>{this.commonService.openSnackBar(e.message,4e3)}):this.itemsService.addItem(this.item).pipe(Object(a.a)(()=>this.disabled=!1)).subscribe(({message:e})=>{this.commonService.openSnackBar(e),this.dialogRef.close(e)},({error:e})=>{this.commonService.openSnackBar(e.message,4e3)})}}return e.\u0275fac=function(t){return new(t||e)(c.Nb(n.f),c.Nb(n.a),c.Nb(o.e),c.Nb(r.a),c.Nb(b.a))},e.\u0275cmp=c.Hb({type:e,selectors:[["app-add-item-dialog"]],decls:85,vars:18,consts:[[1,"card","card-custom",3,"ngClass"],[1,"card-header"],[1,"card-title"],[1,"card-label"],[1,"form",3,"ngSubmit"],["f","ngForm"],[1,"card-body"],[1,"card-body-progress"],[3,"diameter"],[1,"form-group","row"],[1,"col-lg-4","kt-margin-bottom-20-mobile"],[1,"mat-form-field-fluid"],["placeholder","Select Brand","name","brand","required","",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["type","text","matInput","","placeholder","Name","name","name","required","",3,"ngModel","ngModelChange"],["matInput","","placeholder","Descrpition","rows","4","name","description",3,"ngModel","ngModelChange"],["description",""],["align","end"],[1,"separator","separator-dashed","my-6"],["matPrefix",""],["matInput","","type","number","placeholder","Purchase Price","name","purchase_price",3,"ngModel","ngModelChange"],["matInput","","type","number","placeholder","Sale Price","name","sale_price",3,"ngModel","ngModelChange"],["matInput","","type","number","placeholder","Discount","name","discount",3,"ngModel","ngModelChange"],["placeholder","Select Unit","name","unit","required","",3,"ngModel","ngModelChange"],["matInput","","type","number","placeholder","Unit Quantity","name","unit_quantity","required","",3,"ngModel","ngModelChange"],["type","file","name","image",3,"change"],["class","row images",4,"ngIf"],[1,"card-footer"],[1,"d-flex","justify-content-between"],[1,"mr-2"],["type","button","mat-raised-button","","mat-dialog-close","","cdkFocusInitial",""],["type","button","mat-raised-button","","color","primary",3,"disabled","click"],[3,"value"],[1,"row","images"],["class","col-lg-6 kt-margin-bottom-20-mobile",4,"ngIf"],[1,"col-lg-6","kt-margin-bottom-20-mobile"],["class","imagePreview",4,"ngIf"],[4,"ngIf"],["format","jpeg",3,"imageChangedEvent","maintainAspectRatio","aspectRatio","cropperMinWidth","imageQuality","resizeToWidth","imageCropped"],[1,"imagePreview"],[1,"img-fluid",3,"src"]],template:function(e,t){if(1&e&&(c.Tb(0,"div",0),c.Tb(1,"div",1),c.Tb(2,"div",2),c.Tb(3,"h3",3),c.Kc(4),c.Sb(),c.Sb(),c.Sb(),c.Tb(5,"form",4,5),c.dc("ngSubmit",function(){return t.onSubmit()}),c.Tb(7,"div",6),c.Tb(8,"div",7),c.Ob(9,"mat-spinner",8),c.Sb(),c.Tb(10,"div",9),c.Tb(11,"div",10),c.Tb(12,"mat-form-field",11),c.Tb(13,"mat-select",12),c.dc("ngModelChange",function(e){return t.item.brand_id=e}),c.Ic(14,f,2,2,"mat-option",13),c.Sb(),c.Tb(15,"mat-error"),c.Kc(16,"Brand is "),c.Tb(17,"strong"),c.Kc(18,"required"),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Tb(19,"div",10),c.Tb(20,"mat-form-field",11),c.Tb(21,"input",14),c.dc("ngModelChange",function(e){return t.item.name=e}),c.Sb(),c.Tb(22,"mat-error"),c.Kc(23," Name is "),c.Tb(24,"strong"),c.Kc(25,"required"),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Tb(26,"div",10),c.Tb(27,"mat-form-field",11),c.Tb(28,"textarea",15,16),c.dc("ngModelChange",function(e){return t.item.description=e}),c.Sb(),c.Tb(30,"mat-hint",17),c.Kc(31),c.Sb(),c.Tb(32,"mat-error"),c.Kc(33," Description is "),c.Tb(34,"strong"),c.Kc(35,"required"),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Ob(36,"div",18),c.Tb(37,"div",9),c.Tb(38,"div",10),c.Tb(39,"mat-form-field",11),c.Tb(40,"span",19),c.Kc(41,"Rs: \xa0"),c.Sb(),c.Tb(42,"input",20),c.dc("ngModelChange",function(e){return t.item.purchase_price=e}),c.Sb(),c.Sb(),c.Sb(),c.Tb(43,"div",10),c.Tb(44,"mat-form-field",11),c.Tb(45,"span",19),c.Kc(46,"Rs: \xa0"),c.Sb(),c.Tb(47,"input",21),c.dc("ngModelChange",function(e){return t.item.sale_price=e}),c.Sb(),c.Sb(),c.Sb(),c.Tb(48,"div",10),c.Tb(49,"mat-form-field",11),c.Tb(50,"span",19),c.Kc(51,"Rs: \xa0"),c.Sb(),c.Tb(52,"input",22),c.dc("ngModelChange",function(e){return t.item.discount=e}),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Ob(53,"div",18),c.Tb(54,"div",9),c.Tb(55,"div",10),c.Tb(56,"mat-form-field",11),c.Tb(57,"mat-select",23),c.dc("ngModelChange",function(e){return t.item.unit_id=e}),c.Ic(58,S,2,2,"mat-option",13),c.Sb(),c.Tb(59,"mat-error"),c.Kc(60," Unit is "),c.Tb(61,"strong"),c.Kc(62,"required"),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Tb(63,"div",10),c.Tb(64,"mat-form-field",11),c.Tb(65,"input",24),c.dc("ngModelChange",function(e){return t.item.unit_quantity=e}),c.Sb(),c.Tb(66,"mat-error"),c.Kc(67," Unit Quantity is "),c.Tb(68,"strong"),c.Kc(69,"required"),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Ob(70,"div",18),c.Tb(71,"div",9),c.Tb(72,"div",10),c.Tb(73,"input",25),c.dc("change",function(e){return t.fileChangeEvent(e)}),c.Sb(),c.Sb(),c.Sb(),c.Ob(74,"div",18),c.Ic(75,C,7,4,"div",26),c.Sb(),c.Tb(76,"div",27),c.Tb(77,"div",28),c.Ob(78,"div",29),c.Tb(79,"div"),c.Tb(80,"button",30),c.Kc(81," Cancel"),c.Sb(),c.Kc(82,"\xa0 "),c.Tb(83,"button",31),c.dc("click",function(){return t.onSubmit()}),c.Kc(84," Save "),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb()),2&e){const e=c.wc(6),i=c.wc(29);c.nc("ngClass",c.rc(16,M,t.viewLoading)),c.Ab(4),c.Lc(t.getTitle()),c.Ab(5),c.nc("diameter",20),c.Ab(4),c.nc("ngModel",t.item.brand_id),c.Ab(1),c.nc("ngForOf",t.brands),c.Ab(7),c.nc("ngModel",t.item.name),c.Ab(7),c.nc("ngModel",t.item.description),c.Ab(3),c.Mc(" ",i.value.length," / 400 "),c.Ab(11),c.nc("ngModel",t.item.purchase_price),c.Ab(5),c.nc("ngModel",t.item.sale_price),c.Ab(5),c.nc("ngModel",t.item.discount),c.Ab(5),c.nc("ngModel",t.item.unit_id),c.Ab(1),c.nc("ngForOf",t.units),c.Ab(7),c.nc("ngModel",t.item.unit_quantity),c.Ab(10),c.nc("ngIf",t.item.image||t.item.image_url||t.imageChangedEvent),c.Ab(8),c.nc("disabled",t.viewLoading||e.invalid||e.pristine&&!t.item.image||t.disabled)}},directives:[d.l,o.y,o.o,o.p,s.b,m.c,l.a,o.u,o.n,o.q,d.m,m.b,u.a,o.c,m.f,m.h,o.s,d.n,p.b,n.d,h.g,g.a],styles:[".images[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly}"]}),e})()},ZOSX:function(e,t,i){"use strict";i.d(t,"a",function(){return o});var n=i("tk/3"),a=i("AytR"),c=i("fXoL");let o=(()=>{class e{constructor(e){this.httpClient=e}getItems(e){const t=new n.e({fromObject:e}).toString();return console.log(t),this.httpClient.get(a.a.apiUrl+"filtered-items?"+t)}getAllItems(){return this.httpClient.get(a.a.apiUrl+"all-items")}getCreateItemParams(){return this.httpClient.get(a.a.apiUrl+"items/create")}addItem(e){return this.httpClient.post(a.a.apiUrl+"items",e)}updateItem(e){return this.httpClient.patch(a.a.apiUrl+"items/"+e.id,e)}toggle_visibility(e){return this.httpClient.post(a.a.apiUrl+"items/toggle-visibility",{id:e})}deleteItem(e){return this.httpClient.delete(a.a.apiUrl+"items/"+e)}}return e.\u0275fac=function(t){return new(t||e)(c.ac(n.c))},e.\u0275prov=c.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},j8vG:function(e,t,i){"use strict";i.d(t,"a",function(){return o});var n=i("AytR"),a=i("fXoL"),c=i("tk/3");let o=(()=>{class e{constructor(e){this.httpClient=e}getAllCompanyHeads(){return this.httpClient.get(n.a.apiUrl+"company-heads")}addCompanyHead(e){return this.httpClient.post(n.a.apiUrl+"company-heads",e)}updateCompanyHead(e){return this.httpClient.patch(n.a.apiUrl+"company-heads/"+e.id,e)}deleteCompanyHead(e){return this.httpClient.delete(n.a.apiUrl+"company-heads/"+e)}}return e.\u0275fac=function(t){return new(t||e)(a.ac(c.c))},e.\u0275prov=a.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},mrSG:function(e,t,i){"use strict";function n(e,t,i,n){return new(i||(i=Promise))(function(a,c){function o(e){try{b(n.next(e))}catch(t){c(t)}}function r(e){try{b(n.throw(e))}catch(t){c(t)}}function b(e){var t;e.done?a(e.value):(t=e.value,t instanceof i?t:new i(function(e){e(t)})).then(o,r)}b((n=n.apply(e,t||[])).next())})}i.d(t,"a",function(){return n})},vjb8:function(e,t,i){"use strict";i.d(t,"a",function(){return o});var n=i("AytR"),a=i("fXoL"),c=i("tk/3");let o=(()=>{class e{constructor(e){this.httpClient=e}getAllParties(){return this.httpClient.get(n.a.apiUrl+"parties")}addParty(e){return this.httpClient.post(n.a.apiUrl+"parties",e)}updateParty(e){return this.httpClient.patch(n.a.apiUrl+"parties/"+e.id,e)}deleteParty(e){return this.httpClient.delete(n.a.apiUrl+"parties/"+e)}}return e.\u0275fac=function(t){return new(t||e)(a.ac(c.c))},e.\u0275prov=a.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);