"use strict";(self.webpackChunkshoppy=self.webpackChunkshoppy||[]).push([[46],{8046:(T,l,o)=>{o.r(l),o.d(l,{ProductsModule:()=>_});var p=o(9808),d=o(0),t=o(5e3),u=o(4004),g=o(520);let m=(()=>{class i{constructor(e){this.http=e}getProduct(){return this.http.get("https://fakestoreapi.com/products").pipe((0,u.U)(e=>e))}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(g.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var f=o(8193);let h=(()=>{class i{transform(e,n,c){const s=[];return e&&""!==n&&""!==c?(e.forEach(a=>{a[c].trim().toLowerCase().includes(n.toLocaleLowerCase())&&s.push(a)}),s):e}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275pipe=t.Yjl({name:"filter",type:i,pure:!0}),i})();function C(i,r){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",11),t._UZ(2,"img",12),t.TgZ(3,"h2",13),t._uU(4),t.qZA(),t.TgZ(5,"p",13),t._uU(6),t.qZA(),t.TgZ(7,"p")(8,"strong"),t._uU(9,"Price:"),t.qZA(),t._uU(10),t.qZA(),t.TgZ(11,"button",14),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw().addtocart(s)}),t._uU(12,"Add to cart"),t.qZA()(),t.BQk()}if(2&i){const e=r.$implicit;t.xp6(2),t.s9C("src",e.image,t.LSH),t.xp6(2),t.Oqu(e.title),t.xp6(2),t.Oqu(e.description),t.xp6(4),t.hij(" \u20b9",e.price,"")}}const v=[{path:"",redirectTo:"list"},{path:"list",component:(()=>{class i{constructor(e,n){this.api=e,this.cartService=n,this.searchKey=""}ngOnInit(){this.api.getProduct().subscribe(e=>{this.productList=e,this.filterCategory=e,this.productList.forEach(n=>{("women's clothing "===n.category||"men's clothing"===n.category)&&(n.category="fashion"),Object.assign(n,{quantity:1,total:n.price})})}),this.cartService.search.subscribe(e=>{this.searchKey=e})}addtocart(e){this.cartService.addtoCart(e)}filter(e){this.filterCategory=this.productList.filter(n=>{if(n.category==e||""==e)return n})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(m),t.Y36(f.N))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-list"]],decls:26,vars:5,consts:[[1,"card-top","container-fluid"],[1,"container","d-flex"],[1,"item"],[3,"click"],["src","/assets/image/ap1.jpg","alt",""],["src","/assets/image/elct.jpg","alt",""],["src","/assets/image/fn.jpg","alt",""],["src","/assets/image/jwl2.jpg","alt",""],[1,"container"],[1,"row"],[4,"ngFor","ngForOf"],[1,"card","col-md-3"],["alt","",3,"src"],[2,"white-space","nowrap","overflow","hidden","text-overflow","ellipsis","max-width","100ch"],[1,"btn","btn-primary",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"a",3),t.NdJ("click",function(){return n.filter("")}),t._UZ(4,"img",4),t.TgZ(5,"h6"),t._uU(6,"All Products"),t.qZA()()(),t.TgZ(7,"div",2)(8,"a",3),t.NdJ("click",function(){return n.filter("electronics")}),t._UZ(9,"img",5),t.TgZ(10,"h6"),t._uU(11,"Electronics"),t.qZA()()(),t.TgZ(12,"div",2)(13,"a",3),t.NdJ("click",function(){return n.filter("fashion")}),t._UZ(14,"img",6),t.TgZ(15,"h6"),t._uU(16,"Fashion"),t.qZA()()(),t.TgZ(17,"div",2)(18,"a",3),t.NdJ("click",function(){return n.filter("jewelery")}),t._UZ(19,"img",7),t.TgZ(20,"h6"),t._uU(21,"Jewellery"),t.qZA()()()()(),t.TgZ(22,"div",8)(23,"div",9),t.YNc(24,C,13,4,"ng-container",10),t.ALo(25,"filter"),t.qZA()()),2&e&&(t.xp6(24),t.Q6J("ngForOf",t.Dn7(25,1,n.filterCategory,n.searchKey,"title")))},directives:[p.sg],pipes:[h],styles:[".card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:200px;height:200px;margin-bottom:15px;transition:.3s ease-in-out}.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{transition:.3s ease-in-out;transform:scale(1.1)}.card[_ngcontent-%COMP%]{padding:20px;margin:40px}.card-top[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background:#fff;background-clip:border-box;border:1px rgb(0,0,0,.2);border-radius:.25rem}.item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:75px;height:90px}.item[_ngcontent-%COMP%]{margin:0 15px;text-align:center}.item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#00f}"]}),i})()}];let Z=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[d.Bz.forChild(v)],d.Bz]}),i})();var y=o(4466),P=o(6127);let _=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[p.ez,Z,y.m,P.q]]}),i})()}}]);