webpackJsonp([12],{fJ57:function(t,s){},kxbJ:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("Gu7T"),a=i.n(e),o=i("Dd8w"),r=i.n(o),c=i("NYxO"),d=i("Cz8s"),n=i("RoZr"),l=i("Vr3d"),v={data:function(){return{preLoading:!0,cart:{},store:{is_rest:0,data:{shopPage:{}}},status:{cart_show:!0},shopPageItem:{},goods:[]}},components:{PublicHeader:d.a,StoreCart:n.a,GoodsHandle:l.a},methods:r()({},Object(c.b)(["replaceStore","replaceCart"]),{onLoad:function(){var t=this;if(!this.$route.query.sid||!this.$route.query.shopPageKey)return this.$toast("参数错误"),!1;this.sid=this.$route.query.sid,this.shopPageKey=this.$route.query.shopPageKey,this.util.request({url:"wmall/store/goods/shopPage",data:{sid:this.sid,shopPageKey:this.shopPageKey}}).then(function(s){t.preLoading=!1;var i=s.data.message;i.errno||(t.cart=i.message.cart.message.cart,t.replaceCart(t.cart),t.store=i.message.store,t.replaceStore(t.store),t.shopPageItem=i.message.store.data.shopPage[t.shopPageKey],t.goods=[].concat(a()(t.goods),a()(i.message.goods)))})}}),computed:r()({},Object(c.c)(["istore","icart"])),mounted:function(){this.onLoad()}},p={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"shop-page"}},[i("public-header",{attrs:{title:"活动详情"}}),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"banner"},[i("img",{attrs:{src:t.shopPageItem.thumb}})]),t._v(" "),i("div",{staticClass:"goods-list"},[t._l(t.goods,function(s){return i("div",{staticClass:"col-50 goods-item van-hairline--right van-hairline--bottom"},[i("div",{staticClass:"goods-info"},[i("router-link",{staticClass:"avatar",attrs:{to:t.util.getUrl({path:"/pages/store/goodsDetail?id="+s.id+"&sid="+t.store.id})}},[(1!=s.svip_status||s.discount_price>0)&&s.discount>0?i("div",{staticClass:"discount"},[i("div",[i("div",{staticClass:"icon icon-tag"}),t._v(" "+t._s(s.discount)+"折 限"+t._s(s.max_buy_limit)+"份\n\t\t\t\t\t\t\t")])]):t._e(),t._v(" "),i("img",{attrs:{src:s.thumb}})]),t._v(" "),i("div",{staticClass:"goods-name"},[t._v(t._s(s.title))]),t._v(" "),1!=s.svip_status||s.discount_price?i("div",{staticClass:"solid"},[t._v("\n\t\t\t\t\t\t已售"+t._s(s.sailed)+" "),i("div",[t._v("赞"+t._s(s.comment_good))])]):i("div",{staticClass:"svip-price-tips"},[i("div",{staticClass:"svip-price"},[i("i",{staticClass:"icon icon-crownfill"}),t._v(" "),i("span",{staticClass:"ellipsis"},[t._v(t._s(s.discount)+"折"+t._s(s.svip_price>0?" ￥"+s.svip_price:""))])]),t._v(" "),i("div",{staticClass:"svip-activity ellipsis"},[t._v("超级会员专享")])]),t._v(" "),i("div",{staticClass:"price"},[t._v("\n\t\t\t\t\t\t¥"),i("div",[t._v(t._s(s.price))])]),t._v(" "),s.old_price?i("div",{staticClass:"old-price"},[t._v("￥"+t._s(s.old_price))]):t._e(),t._v(" "),i("goods-handle",{attrs:{goods:s,optionId:0,from:"shopPageList"}})],1)])}),t._v(" "),i("div",{staticStyle:{clear:"both"}})],2)]),t._v(" "),i("store-cart",{attrs:{show:1,store:t.store,cart:t.cart}}),t._v(" "),i("transition",{attrs:{name:"loading"}},[t.preLoading?i("iloading"):t._e()],1)],1)},staticRenderFns:[]};var _=i("VU/8")(v,p,!1,function(t){i("fJ57")},null,null);s.default=_.exports}});
//# sourceMappingURL=12.d1ec9834262b01895949.js.map