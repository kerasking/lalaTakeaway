webpackJsonp([83],{"3euM":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={components:{PublicHeader:i("Cz8s").a},data:function(){return{id:0,num:1,islegal:!1,goods:{},store:{},username:"",mobile:"",showPreLoading:!0}},methods:{onLoad:function(){var t=this;this.util.request({url:"seckill/seckill/detail",data:{id:this.id}}).then(function(s){var i=s.data.message;i.errno?t.$toast(i.message):(i=i.message,t.goods=i.goods,t.store=i.store,t.goods.end||(t.islegal=!0),t.showPreLoading=!1)})},onMinus:function(){var t=this.num-1;t<1&&(t=1),this.num=t},onPlus:function(){var t=this.num+1,s=this.goods.total-this.goods.sailed;t>s&&(t=s,this.util.$toast("商品数量已达最大限制")),this.num=t},onSubmit:function(){var t=this;return!!this.islegal&&(this.username?this.mobile?(this.islegal=!1,void this.util.request({url:"seckill/seckill/create",data:{id:this.id,goods_num:this.num,username:this.username,mobile:this.mobile}}).then(function(s){var i=s.data.message;if(i.errno)t.$toast(i.message);else{var e=i.message;t.util.$toast("下单成功",t.util.getUrl({path:"/pages/public/pay",query:{order_id:e,order_type:"seckill"}}))}})):(this.util.$toast("请输入联系人电话"),!1):(this.util.$toast("请输入联系人姓名"),!1))}},created:function(){if(!this.$route.query.id)return!1;this.id=this.$route.query.id},mounted:function(){this.onLoad()}},a={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"seckill-create"}},[i("public-header",{attrs:{title:"订单确认"}}),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"info"},[i("div",{staticClass:"store van-hairline--bottom"},[i("img",{staticClass:"logo",attrs:{src:t.store.logo,alt:""}}),t._v(" "),i("div",{staticClass:"title"},[t._v(t._s(t.store.title))])]),t._v(" "),i("div",{staticClass:"goods van-hairline--bottom"},[i("img",{attrs:{src:t.goods.thumb,alt:""}}),t._v(" "),i("div",{staticClass:"goods-info"},[i("div",{staticClass:"goods-title"},[t._v("\n\t\t\t\t\t\t"+t._s(t.goods.title)+"\n\t\t\t\t\t\t"),i("div",{staticClass:"desc"},[t._v(t._s(t.goods.content))])]),t._v(" "),i("div",{staticClass:"goods-price"},[t._v("¥"+t._s(t.goods.price))])])]),t._v(" "),i("div",{staticClass:"nums van-hairline--bottom"},[i("div",[t._v("数量")]),t._v(" "),i("div",{staticClass:"goods-handle"},[i("van-icon",{attrs:{name:"minus"},on:{click:t.onMinus}}),t._v(" "),i("span",[t._v(t._s(t.num))]),t._v(" "),i("van-icon",{attrs:{name:"plus"},on:{click:t.onPlus}})],1)]),t._v(" "),i("div",{staticClass:"total"},[i("div",[t._v("小计")]),t._v(" "),i("div",{staticClass:"total-price"},[t._v("¥"+t._s(t.goods.price*t.num))])])]),t._v(" "),i("van-cell-group",[i("van-field",{attrs:{label:"联系人",placeholder:"请输入联系人姓名"},model:{value:t.username,callback:function(s){t.username=s},expression:"username"}}),t._v(" "),i("van-field",{attrs:{type:"number",label:"联系电话",placeholder:"请输入联系电话"},model:{value:t.mobile,callback:function(s){t.mobile=s},expression:"mobile"}})],1)],1),t._v(" "),i("van-submit-bar",{attrs:{disabled:!t.islegal,price:t.goods.price*t.num*100,label:"待支付","button-text":"提交订单"},on:{submit:t.onSubmit}}),t._v(" "),i("transition",{attrs:{name:"loading"}},[t.showPreLoading?i("iloading"):t._e()],1)],1)},staticRenderFns:[]};var o=i("VU/8")(e,a,!1,function(t){i("OFyX")},null,null);s.default=o.exports},OFyX:function(t,s){}});
//# sourceMappingURL=83.c76fb9a8d28a5b356178.js.map