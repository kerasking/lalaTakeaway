webpackJsonp([165],{N7uu:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("Dd8w"),o=e.n(i),a=e("NYxO"),r=e("Cz8s"),d=e("RoZr"),c=e("Vr3d"),n={data:function(){return{preLoading:!0,cart:{},store:{},goodsActive:{}}},components:{PublicHeader:r.a,StoreCart:d.a,GoodsHandle:c.a},methods:o()({},Object(a.b)(["replaceStore","replaceCart"]),{onLoad:function(){var t=this;return this.$route.query.sid?(this.sid=this.$route.query.sid,this.$route.query.id?(this.id=this.$route.query.id,void this.util.request({url:"wmall/store/goods/detail",data:{sid:this.sid,id:this.id}}).then(function(s){t.preLoading=!1;var e=s.data.message;if(!e.errno){var i=(e=e.message).goodsDetail;t.goodsActive=i,t.cart=e.cart.message.cart,t.store=e.store,t.replaceStore(e.store),t.replaceCart(e.cart.message.cart)}})):(this.$toast("参数错误"),!1)):(this.$toast("参数错误"),!1)}}),computed:o()({},Object(a.c)(["istore","icart"])),mounted:function(){this.onLoad()}},v={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"goods-detail"}},[e("public-header",{attrs:{title:"商品详情",textcolor:"#fff"}}),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"goods-img"},[t.goodsActive.slides&&!t.goodsActive.slides.length?e("img",{attrs:{src:t.goodsActive.thumb_,alt:""}}):e("van-swipe",{attrs:{autoplay:3e3}},t._l(t.goodsActive.slides,function(t,s){return e("van-swipe-item",{key:s,attrs:{ss:""}},[e("img",{attrs:{src:t,alt:""}})])}))],1),t._v(" "),e("div",{staticClass:"goods-name"},[t._v(t._s(t.goodsActive.title))]),t._v(" "),e("div",{staticClass:"sell-info"},[t._v("已售"+t._s(t.goodsActive.sailed)+"  好评"+t._s(t.goodsActive.comment_good))]),t._v(" "),e("div",{staticClass:"goods-num"},[e("van-row",[e("van-col",{staticClass:"price flex",attrs:{span:"18"}},[e("div",[t._v("\n\t\t\t\t\t\t¥ "),e("span",{staticClass:"fee"},[t._v(t._s(t.goodsActive.price))])]),t._v(" "),1!=t.goodsActive.svip_status||t.goodsActive.discount_price?t._e():e("div",{staticClass:"svip-price-tips margin-10-l"},[e("div",{staticClass:"svip-price"},[e("i",{staticClass:"icon icon-crownfill"}),t._v(" "),e("span",[t._v(t._s(t.goodsActive.discount)+"折")])]),t._v(" "),e("div",{staticClass:"svip-activity"},[t._v("超级会员专享")])])]),t._v(" "),e("goods-handle",{attrs:{goods:t.goodsActive,optionId:0,from:"detail"}})],1)],1),t._v(" "),e("div",{staticClass:"goods-evaluate"},[t._v("商品评价")]),t._v(" "),e("div",{staticClass:"praise text-center"},[t._v("\n\t\t\t好评率\n\t\t\t"),e("span",{staticClass:"rate"},[t._v(t._s(t.goodsActive.comment_good_percent))]),t._v(" "),e("span",{staticClass:"num"},[t._v("(共"+t._s(t.goodsActive.comment_total)+"人评价)")])]),t._v(" "),e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-bar"},[e("div",{staticClass:"progress-active",style:{width:t.goodsActive.comment_good_percent}})])]),t._v(" "),e("div",{staticClass:"goods-desc"},[t._v("商品描述")]),t._v(" "),e("div",{staticClass:"goods-desc-con",domProps:{innerHTML:t._s(t.goodsActive.description)}}),t._v(" "),t._m(0)]),t._v(" "),e("router-link",{staticClass:"into-store",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/store/goods",query:{sid:t.store.id}})}},[t._v("\n\t\t进入店铺\n\t")]),t._v(" "),e("store-cart",{attrs:{show:!0,store:t.store}}),t._v(" "),e("transition",{attrs:{name:"loading"}},[t.preLoading?e("iloading"):t._e()],1)],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tips"},[this._v("\n\t\t\t温馨提示: 图片仅供参考,请以实物为准;"),s("br"),this._v("\n\t\t\t高峰时段及恶劣天气,请提前下单\n\t\t")])}]};var l=e("VU/8")(n,v,!1,function(t){e("b2PG")},null,null);s.default=l.exports},b2PG:function(t,s){}});
//# sourceMappingURL=165.c0f321627818f22e8871.js.map