!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,i){if(!e)return;if("string"==typeof e)return t(e,i);var c=Object.prototype.toString.call(e).slice(8,-1);"Object"===c&&e.constructor&&(c=e.constructor.name);if("Map"===c||"Set"===c)return Array.from(e);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return t(e,i)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,c=new Array(t);i<t;i++)c[i]=e[i];return c}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var i=0;i<t.length;i++){var c=t[i];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function a(e,t,i){return t&&c(e.prototype,t),i&&c(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{a1ig:function(t,c,n){"use strict";n.r(c),n.d(c,"ProductsModule",function(){return re});var r=n("ofXK"),o=n("3Pt+"),s=n("M9IT"),l=n("JX91"),b=n("eIep"),u=n("Kj3r"),d=n("nYR2"),m=n("zyfY"),f=n("0wwu"),p=n("fXoL"),h=n("S3Px"),v=n("OlR4"),g=n("0IaG"),S=n("kmnG"),y=n("qFsG"),T=n("+0xr"),w=n("bTqV"),C=n("NFeN"),P=n("Xa2L");function A(e,t){1&e&&(p.Tb(0,"mat-header-cell"),p.Lc(1," Name "),p.Sb())}function L(e,t){if(1&e&&(p.Tb(0,"mat-cell"),p.Lc(1),p.Sb()),2&e){var i=t.$implicit;p.Ab(1),p.Nc(" ",i.name," ")}}function J(e,t){1&e&&(p.Tb(0,"mat-header-cell"),p.Lc(1," Brand "),p.Sb())}function k(e,t){if(1&e&&(p.Tb(0,"mat-cell"),p.Lc(1),p.Sb()),2&e){var i=t.$implicit;p.Ab(1),p.Nc(" ",i.brand?i.brand.name:""," ")}}function D(e,t){1&e&&(p.Tb(0,"mat-header-cell"),p.Lc(1," Quantity "),p.Sb())}function I(e,t){if(1&e&&(p.Tb(0,"mat-cell"),p.Lc(1),p.Sb()),2&e){var i=t.$implicit;p.Ab(1),p.Oc(" ",i.unit_quantity," ",i.unit.abbr," ")}}function O(e,t){1&e&&(p.Tb(0,"mat-header-cell"),p.Lc(1," Purchase Price "),p.Sb())}function R(e,t){if(1&e&&(p.Tb(0,"mat-cell"),p.Lc(1),p.Sb()),2&e){var i=t.$implicit;p.Ab(1),p.Nc(" ",i.purchase_price," ")}}function _(e,t){1&e&&(p.Tb(0,"mat-header-cell"),p.Lc(1," Sale Price "),p.Sb())}function N(e,t){if(1&e&&(p.Tb(0,"mat-cell"),p.Lc(1),p.Sb()),2&e){var i=t.$implicit;p.Ab(1),p.Nc(" ",i.sale_price," ")}}function j(e,t){1&e&&(p.Tb(0,"mat-header-cell"),p.Lc(1," Discount "),p.Sb())}function Q(e,t){if(1&e&&(p.Tb(0,"mat-cell"),p.Lc(1),p.Sb()),2&e){var i=t.$implicit;p.Ab(1),p.Nc(" ",i.discount," ")}}function $(e,t){1&e&&(p.Tb(0,"mat-header-cell"),p.Lc(1," Description "),p.Sb())}function q(e,t){if(1&e&&(p.Tb(0,"mat-cell"),p.Lc(1),p.Sb()),2&e){var i=t.$implicit;p.Ab(1),p.Nc(" ",i.description," ")}}function x(e,t){1&e&&(p.Tb(0,"mat-header-cell"),p.Lc(1," Image "),p.Sb())}function B(e,t){if(1&e&&(p.Tb(0,"mat-cell"),p.Ob(1,"img",32),p.Sb()),2&e){var i=t.$implicit;p.Ab(1),p.oc("src",i.image_url,p.Cc)}}function z(e,t){1&e&&(p.Tb(0,"mat-header-cell"),p.Lc(1," Actions "),p.Sb())}function F(e,t){1&e&&(p.Tb(0,"mat-icon"),p.Lc(1,"visibility"),p.Sb())}function H(e,t){1&e&&(p.Tb(0,"mat-icon"),p.Lc(1,"visibility_off"),p.Sb())}function M(e,t){if(1&e){var i=p.Ub();p.Tb(0,"mat-cell"),p.Tb(1,"button",33),p.dc("click",function(){p.Bc(i);var e=t.$implicit;return p.hc().editProduct(e)}),p.Tb(2,"mat-icon"),p.Lc(3,"create"),p.Sb(),p.Sb(),p.Lc(4,"\xa0 "),p.Tb(5,"button",34),p.dc("click",function(){p.Bc(i);var e=t.$implicit,c=t.index;return p.hc().deleteProduct(e.id,c)}),p.Tb(6,"mat-icon"),p.Lc(7,"delete"),p.Sb(),p.Sb(),p.Tb(8,"button",35),p.dc("click",function(){p.Bc(i);var e=t.$implicit;return p.hc().toggleVisiblity(e)}),p.Jc(9,F,2,0,"mat-icon",36),p.Jc(10,H,2,0,"mat-icon",36),p.Sb(),p.Sb()}if(2&e){var c=t.$implicit;p.Ab(8),p.oc("color",c.is_visible?"primary":"light")("disabled",c.disabled),p.Ab(1),p.oc("ngIf",c.is_visible),p.Ab(1),p.oc("ngIf",!c.is_visible)}}function V(e,t){1&e&&p.Ob(0,"mat-header-row")}function X(e,t){1&e&&p.Ob(0,"mat-row")}function E(e,t){1&e&&(p.Tb(0,"div",37),p.Lc(1," No records found "),p.Sb())}function G(e,t){1&e&&(p.Tb(0,"div",37),p.Lc(1," Please wait.... "),p.Sb())}function K(e,t){1&e&&p.Ob(0,"mat-spinner",38),2&e&&p.oc("diameter",20)}var U,Y,W,Z=((U=function(){function t(e,c,a,n){i(this,t),this.productsService=e,this.commonService=c,this.cdr=a,this.dialog=n,this.loaded=!1,this.subscriptions=[],this.search=new o.f(""),this.pageIndex=0,this.pageSize=20,this.products=[],this.displayedColumns=["name","brand","quantity","purchase_price","sale_price","discount","description","image","actions"]}return a(t,[{key:"ngOnInit",value:function(){var e=this;this.productsService.getCreateProductParams().subscribe(function(t){e.productData=t})}},{key:"ngAfterViewInit",value:function(){var e=this;this.search.valueChanges.subscribe(function(){e.paginator.pageIndex=0});var t=this.paginator.page.pipe(Object(l.a)({}),Object(b.a)(this.prepareQueryParams.bind(this))).subscribe(this.handleResponse.bind(this)),i=this.search.valueChanges.pipe(Object(u.a)(1e3),Object(b.a)(this.prepareQueryParams.bind(this))).subscribe(this.handleResponse.bind(this));this.subscriptions.push(t,i)}},{key:"prepareQueryParams",value:function(){return this.loaded=!1,this.queryParams={page_index:this.paginator.pageIndex,search:this.search.value,items_per_page:this.pageSize},this.productsService.getProducts(this.queryParams)}},{key:"handleResponse",value:function(e){this.totalProducts=e.total,this.products=e.products,this.loaded=!0,this.cdr.detectChanges()}},{key:"addProduct",value:function(){var e=this;this.dialog.open(f.a,{data:{paramsData:this.productData},disableClose:!0}).afterClosed().subscribe(function(t){t&&e.productsService.getProducts(e.queryParams).subscribe(e.handleResponse.bind(e))})}},{key:"editProduct",value:function(e){var t=this;this.dialog.open(f.a,{data:{paramsData:this.productData,product:e},disableClose:!0}).afterClosed().subscribe(function(e){e&&t.productsService.getProducts(t.queryParams).subscribe(t.handleResponse.bind(t))})}},{key:"toggleVisiblity",value:function(e){var t=this;e.disabled=!0,e.is_visible=!e.is_visible,this.productsService.toggle_visibility(e.id).pipe(Object(d.a)(function(){e.disabled=!1,t.cdr.detectChanges()})).subscribe()}},{key:"deleteProduct",value:function(t,i){var c=this;this.dialog.open(m.a,{data:{title:"Delete category",message:"Are you sure?"},width:"440px",disableClose:!0}).afterClosed().subscribe(function(a){a&&a.confirm&&c.productsService.deleteProduct(t).subscribe(function(t){var a=e(c.products);a.splice(i,1),c.products=a,c.cdr.detectChanges(),c.commonService.openSnackBar(t.message)},function(e){var t=e.error;c.commonService.openSnackBar(t.message,4e3)})})}},{key:"ngOnDestroy",value:function(){this.subscriptions.forEach(function(e){return e.unsubscribe()})}}]),t}()).\u0275fac=function(e){return new(e||U)(p.Nb(h.a),p.Nb(v.a),p.Nb(p.h),p.Nb(g.c))},U.\u0275cmp=p.Hb({type:U,selectors:[["app-list"]],viewQuery:function(e,t){var i;1&e&&p.Fc(s.a,!0),2&e&&p.wc(i=p.ec())&&(t.paginator=i.first)},decls:52,vars:11,consts:[[1,"card","card-custom"],[1,"card-header"],[1,"card-title"],[1,"card-toolbar"],[1,"btn","btn-primary",3,"disabled","click"],[1,"card-body"],[1,"form","mb-3"],[1,"form-filtration"],[1,"row","align-items-center"],[1,"col-lg-3","kt-margin-bottom-10-mobile"],[1,"mat-form-field-fluid"],["matInput","","placeholder","Search Products",3,"formControl"],[1,"mat-table-wrapper"],[3,"dataSource"],["table",""],["matColumnDef","name"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","brand"],["matColumnDef","quantity"],["matColumnDef","purchase_price"],["matColumnDef","sale_price"],["matColumnDef","discount"],["matColumnDef","description"],["matColumnDef","image"],["matColumnDef","actions"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["class","mat-table-message",4,"ngIf"],[1,"mat-table-bottom"],[3,"diameter",4,"ngIf"],[3,"pageSize","showFirstLastButtons","length"],[1,"img-fluid","w-75",3,"src"],["mat-icon-button","","color","primary",3,"click"],["mat-icon-button","","color","warn","type","button",3,"click"],["mat-icon-button","","type","button",3,"color","disabled","click"],[4,"ngIf"],[1,"mat-table-message"],[3,"diameter"]],template:function(e,t){1&e&&(p.Tb(0,"div",0),p.Tb(1,"div",1),p.Tb(2,"div",2),p.Tb(3,"h3"),p.Lc(4,"Products"),p.Sb(),p.Sb(),p.Tb(5,"div",3),p.Tb(6,"button",4),p.dc("click",function(){return t.addProduct()}),p.Lc(7," Add Product "),p.Sb(),p.Sb(),p.Sb(),p.Tb(8,"div",5),p.Tb(9,"div",6),p.Tb(10,"div",7),p.Tb(11,"div",8),p.Tb(12,"div",9),p.Tb(13,"mat-form-field",10),p.Ob(14,"input",11),p.Sb(),p.Sb(),p.Sb(),p.Sb(),p.Sb(),p.Tb(15,"div",12),p.Tb(16,"mat-table",13,14),p.Rb(18,15),p.Jc(19,A,2,0,"mat-header-cell",16),p.Jc(20,L,2,1,"mat-cell",17),p.Qb(),p.Rb(21,18),p.Jc(22,J,2,0,"mat-header-cell",16),p.Jc(23,k,2,1,"mat-cell",17),p.Qb(),p.Rb(24,19),p.Jc(25,D,2,0,"mat-header-cell",16),p.Jc(26,I,2,2,"mat-cell",17),p.Qb(),p.Rb(27,20),p.Jc(28,O,2,0,"mat-header-cell",16),p.Jc(29,R,2,1,"mat-cell",17),p.Qb(),p.Rb(30,21),p.Jc(31,_,2,0,"mat-header-cell",16),p.Jc(32,N,2,1,"mat-cell",17),p.Qb(),p.Rb(33,22),p.Jc(34,j,2,0,"mat-header-cell",16),p.Jc(35,Q,2,1,"mat-cell",17),p.Qb(),p.Rb(36,23),p.Jc(37,$,2,0,"mat-header-cell",16),p.Jc(38,q,2,1,"mat-cell",17),p.Qb(),p.Rb(39,24),p.Jc(40,x,2,0,"mat-header-cell",16),p.Jc(41,B,2,1,"mat-cell",17),p.Qb(),p.Rb(42,25),p.Jc(43,z,2,0,"mat-header-cell",16),p.Jc(44,M,11,4,"mat-cell",17),p.Qb(),p.Jc(45,V,1,0,"mat-header-row",26),p.Jc(46,X,1,0,"mat-row",27),p.Sb(),p.Jc(47,E,2,0,"div",28),p.Jc(48,G,2,0,"div",28),p.Sb(),p.Tb(49,"div",29),p.Jc(50,K,1,1,"mat-spinner",30),p.Ob(51,"mat-paginator",31),p.Sb(),p.Sb(),p.Sb()),2&e&&(p.Ab(6),p.oc("disabled",!t.loaded),p.Ab(8),p.oc("formControl",t.search),p.Ab(2),p.oc("dataSource",t.products),p.Ab(29),p.oc("matHeaderRowDef",t.displayedColumns),p.Ab(1),p.oc("matRowDefColumns",t.displayedColumns),p.Ab(1),p.oc("ngIf",t.loaded&&0==t.products.length),p.Ab(1),p.oc("ngIf",!t.loaded&&!t.products.length),p.Ab(2),p.oc("ngIf",!t.loaded),p.Ab(1),p.oc("pageSize",t.pageSize)("showFirstLastButtons",!0)("length",t.totalProducts))},directives:[S.c,y.a,o.c,o.n,o.g,T.j,T.c,T.e,T.b,T.g,T.i,r.n,s.a,T.d,T.a,w.b,C.a,T.f,T.h,P.b],styles:[""]}),U),ee=n("tyNb"),te=((Y=function(){function e(){i(this,e)}return a(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||Y)},Y.\u0275cmp=p.Hb({type:Y,selectors:[["app-products"]],decls:1,vars:0,template:function(e,t){1&e&&p.Ob(0,"router-outlet")},directives:[ee.l],styles:[""]}),Y),ie=n("93Pz"),ce=n("d3UM"),ae=n("rIor"),ne=n("ZOsW"),re=((W=function e(){i(this,e)}).\u0275mod=p.Lb({type:W}),W.\u0275inj=p.Kb({factory:function(e){return new(e||W)},providers:[{provide:g.b,useValue:{hasBackdrop:!0,panelClass:"mat-dialog-container-wrapper",height:"auto",width:"900px"}}],imports:[[r.c,w.c,T.l,s.b,P.a,C.b,ie.a,g.e,o.j,o.t,w.c,ce.b,y.b,ne.a,ae.b,ee.k.forChild([{path:"",component:te,children:[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:Z}]}])]]}),W)}}])}();