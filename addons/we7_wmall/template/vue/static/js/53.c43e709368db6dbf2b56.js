webpackJsonp([53],{"/zcG":function(t,s){},n9QR:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("Cz8s"),i=e("mzkE"),o=e("deIj"),r={components:{PublicHeader:a.a,PublicFooter:i.a},data:function(){return{records:{page:1,psize:15,loading:!0,finished:!1,empty:!1,data:[]},filter:{items:{status:-1}},menufooter:{},showPreLoading:!0,isRefresh:!1}},watch:{filter:{handler:function(t,s){this.onLoad(!0)},deep:!0}},methods:{onLoad:function(t){var s=this;Object(o.b)({vue:s,force:t,url:"gohome/order/list",data:{menufooter:1},success:function(t){s.menufooter=window.menufooter}})},onPullDownRefresh:function(){this.onLoad(!0)},onToggleStatus:function(t){t=parseInt(t),this.filter.items.status!=t&&(this.filter.items.status=t)}},mounted:function(){this.onLoad()}},n={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"kanjia-order-list"}},[e("public-header",{attrs:{title:"我的订单"}}),t._v(" "),e("public-footer",{attrs:{preLoading:t.showPreLoading,menufooter:t.menufooter}}),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"tab-group"},[e("div",{staticClass:"tab-item",class:{active:-1==t.filter.items.status},on:{click:function(s){return t.onToggleStatus(-1)}}},[t._v("全部")]),t._v(" "),e("div",{staticClass:"tab-item",class:{active:1==t.filter.items.status},on:{click:function(s){return t.onToggleStatus(1)}}},[t._v("待付款")]),t._v(" "),e("div",{staticClass:"tab-item",class:{active:3==t.filter.items.status},on:{click:function(s){return t.onToggleStatus(3)}}},[t._v("待使用")]),t._v(" "),e("div",{staticClass:"tab-item",class:{active:5==t.filter.items.status},on:{click:function(s){return t.onToggleStatus(5)}}},[t._v("待评价")])]),t._v(" "),e("van-pull-refresh",{on:{refresh:t.onPullDownRefresh},model:{value:t.isRefresh,callback:function(s){t.isRefresh=s},expression:"isRefresh"}},[t.records.empty?e("div",{staticClass:"no-data"},[e("img",{attrs:{src:"static/img/order_no_con.png",alt:""}}),t._v(" "),e("p",[t._v("暂无订单")])]):e("van-list",{staticClass:"order-list",attrs:{finished:t.records.finished,offset:100,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.records.loading,callback:function(s){t.$set(t.records,"loading",s)},expression:"records.loading"}},[t._l(t.records.data,function(s,a){return e("div",{key:s.id,staticClass:"order-item"},[e("div",{staticClass:"flex-lr"},[s.store?e("div",{staticClass:"flex"},[e("i",{staticClass:"icon icon-shop font-18 c-gray"}),t._v(" "),e("span",{staticClass:"margin-5-l"},[t._v(t._s(s.store.title))])]):t._e(),t._v(" "),e("div",{staticClass:"c-danger"},[t._v(t._s(s.status_all.text))])]),t._v(" "),e("router-link",{staticClass:"padding-15-tb  flex-lr",attrs:{tag:"div",to:t.util.getUrl({path:"/gohome/pages/order/detail",query:{id:s.id}})}},[e("div",{staticClass:"thumb"},[e("img",{staticClass:"img-100",attrs:{src:s.goods.thumb,alt:""}})]),t._v(" "),e("div",{staticClass:"info w-100"},[e("div",{staticClass:"goods-title w-100 ellipsis"},[e("span",{staticClass:"order-type",class:s.order_type_all.css},[t._v(t._s(s.order_type_all.text))]),t._v(t._s(s.goods.name)+"\n\t\t\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"c-gray font-12"},[t._v("下单时间: "+t._s(s.addtime_cn))]),t._v(" "),1!=s.status?e("div",{staticClass:"c-gray font-12"},[t._v("支付时间: "+t._s(s.paytime_cn))]):t._e(),t._v(" "),5==s.status||6==s.status?e("div",{staticClass:"c-gray font-12"},[t._v("核销时间: "+t._s(s.applytime_cn))]):t._e(),t._v(" "),e("div",{staticClass:"c-gray font-12 opacity-1"},[t._v("截止时间: 2018-11-22")]),t._v(" "),e("div",{staticClass:"c-danger"},[t._v("¥"+t._s(s.final_fee))])])]),t._v(" "),s.status<6?e("div",{staticClass:"padding-15-t btn-group van-hairline--top"},[0==s.is_pay?[1==s.status?e("div",{staticClass:"btn-item",on:{click:function(e){return t.util.jspost({url:"gohome/order/cancel",data:{id:s.id}})}}},[t._v("取消订单")]):t._e(),t._v(" "),1==s.status?e("router-link",{staticClass:"btn-item",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/public/pay",query:{order_id:s.id,order_type:"gohome"}})}},[t._v("立即支付")]):t._e()]:1==s.is_pay?[3==s.status?e("router-link",{staticClass:"btn-item",attrs:{tag:"div",to:t.util.getUrl({path:"/gohome/pages/order/detail",query:{id:s.id}})}},[t._v("去使用")]):t._e(),t._v(" "),5==s.status?e("router-link",{staticClass:"btn-item",attrs:{tag:"div",to:t.util.getUrl({path:"/gohome/pages/comment/comment",query:{order_id:s.id}})}},[t._v("立即评价")]):t._e()]:t._e()],2):t._e()],1)}),t._v(" "),t.records.finished?e("div",{staticClass:"loaded"},[e("div",{staticClass:"loaded-tips"},[t._v("没有更多了")])]):t._e()],2)],1)],1)],1)},staticRenderFns:[]};var l=e("VU/8")(r,n,!1,function(t){e("/zcG")},null,null);s.default=l.exports}});