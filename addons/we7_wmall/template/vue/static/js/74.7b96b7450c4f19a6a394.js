webpackJsonp([74],{lM6F:function(t,a){},nxIv:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=s("Cz8s"),e=s("mzkE"),n=s("75NE"),r=s("deIj"),l={components:{PublicHeader:i.a,PublicFooter:e.a,CountDown:n.a},data:function(){return{showPreLoading:!0,zhezhaoShow:!1,detail:{},more_activity:{},member:{},team:[],menufooter:{}}},methods:{onLoad:function(){var t=this;Object(r.a)({vue:t,url:"pintuan/index/share",data:{id:t.id,team_id:t.team_id,menufooter:1},success:function(a){t.detail=a.detail,t.member=a.member,t.team=a.team,t.more_activity=a.more_activity,t.menufooter=window.menufooter}})}},created:function(){this.$route.query&&(this.$route.query.team_id>0&&(this.team_id=this.$route.query.team_id),this.$route.query.id>0&&(this.id=this.$route.query.id))},mounted:function(){this.onLoad()}},c={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"pintuan-share"}},[s("public-header",{attrs:{title:"拼团进行中"}}),t._v(" "),s("public-footer",{attrs:{preLoading:t.showPreLoading,menufooter:t.menufooter}}),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"goods-info margin-15 padding-15 bg-default flex-lr"},[s("div",{staticClass:"thumb"},[s("img",{staticClass:"img-100",attrs:{src:t.detail.thumb,alt:""}}),t._v(" "),s("div",{staticClass:"mark"},[t._v("\n\t\t\t\t\t"+t._s(t.detail.peoplenum)+"人团\n\t\t\t\t")])]),t._v(" "),s("div",{staticClass:"info"},[s("div",{staticClass:"font-14"},[s("div",{staticClass:"flex-lr margin-10-b"},[t.detail.store?s("div",{staticClass:"font-500 ellipsis"},[t._v(t._s(t.detail.store.title))]):t._e()]),t._v(" "),s("p",[t._v(t._s(t.detail.name))])]),t._v(" "),s("div",{staticClass:"flex-lr-bottom w-100"},[s("div",[s("div",{staticClass:"flex"},[s("span",{staticClass:"c-danger font-500 font-15 margin-5-r"},[t._v("¥"+t._s(t.detail.price))]),t._v(" "),s("div",{staticClass:"c-gray line-through font-12"},[t._v("¥"+t._s(t.detail.oldprice))]),t._v(" "),s("div",{staticClass:"discount"},[t._v(t._s(t.detail.discount)+"折")])]),t._v(" "),s("div",{staticClass:"bar",class:{"bar-end":0==t.detail.total}},[-1!=t.detail.total?s("div",{staticClass:"bar-inner",style:"width:"+t.detail.sailed_percent+"%"}):t._e(),t._v(" "),s("div",{staticClass:"bar-text",staticStyle:{width:"0%"}},[t._v("已团"+t._s(t.detail.falesailed_total)+"份")])])])])])]),t._v(" "),s("div",{staticClass:"padding-15 margin-15 bg-default"},[s("div",{staticClass:"flex-lr padding-15-b van-hairline--bottom"},[t._m(0),t._v(" "),s("div",{staticClass:"step-item",class:{active:t.team[0].status>2&&t.team[0].status<7}},[t._m(1),t._v(" "),s("div",{staticClass:"step-title active"},[t._v("邀请好友参团")])]),t._v(" "),s("div",{staticClass:"step-item"},[s("span",{staticClass:"step-number",class:{active:t.team[0].status>2&&t.team[0].status<7}},[s("div",{staticClass:"step-number-inner"},[t._v("3")])]),t._v(" "),s("div",{staticClass:"step-title",class:{active:t.team[0].status>2&&t.team[0].status<7}},[t._v("拼团成功")])])]),t._v(" "),t.team&&t.team[0]?s("div",{staticClass:"take-info van-hairline--bottom"},[2==t.team[0].status?[s("p",[t._v("已有"+t._s(t.team[0].takepart_num)+"人参与, 还差"),s("span",{staticClass:"c-danger font-18 margin-5-r margin-5-l font-500"},[t._v(t._s(t.team[0].team_num-t.team[0].takepart_num))]),t._v("人拼团成功")]),t._v(" "),s("div",{staticClass:"flex margin-15-t"},[s("span",{staticClass:"c-gray margin-5-r"},[t._v("距结束仅剩")]),t._v(" "),s("count-down",{attrs:{endTime:t.team[0].overtime}})],1)]:t.team[0].status>2&&t.team[0].status<7?[t._m(2)]:t._e(),t._v(" "),s("div",{staticClass:"avatars margin-15-t"},[t._l(t.team,function(a,i){return i<3?s("div",{key:"a"+i,staticClass:"avatar-item"},[s("img",{staticClass:"img-100",attrs:{src:a.avatar,alt:""}}),t._v(" "),a.id==a.team_id?s("div",{staticClass:"mark"},[t._v("团长")]):t._e()]):t._e()}),t._v(" "),t.team[0].status<3?s("div",{staticClass:"avatar-item empty"},[t._v("?")]):t._e()],2),t._v(" "),t.member.is_takepart?[s("div",{staticClass:"btn-invite",on:{click:function(a){t.zhezhaoShow=!t.zhezhaoShow}}},[t._v("邀请好友")])]:[s("div",{staticClass:"btn-group flex-lr"},[s("router-link",{staticClass:"btn-item",attrs:{tag:"div",to:t.util.getUrl({path:"/gohome/pages/pintuan/create",query:{id:t.id,team_id:t.team_id}})}},[t._v("我要参团")]),t._v(" "),s("router-link",{staticClass:"btn-item new",attrs:{tag:"div",to:t.util.getUrl({path:"/gohome/pages/pintuan/create",query:{id:t.id,is_team:1}})}},[t._v("我要开团")])],1)]],2):t._e(),t._v(" "),s("p",{staticClass:"font-12 c-gray margin-15-t"},[t._v("邀请好友来参团，"+t._s(t.detail.grouptime)+"小时内拼团成功发货，不成功自动退款")])]),t._v(" "),s("div",{staticClass:"padding-15-lr margin-15-t font-14 c-gray"},[t._v("更多拼团")]),t._v(" "),s("div",{staticClass:"activity-list"},t._l(t.more_activity,function(a,i){return s("div",{key:i,staticClass:"activity-item"},[s("router-link",{staticClass:"item-inner bg-default",attrs:{tag:"div",to:t.util.getUrl({path:"/gohome/pages/pintuan/detail",query:{id:a.id}})}},[s("div",{staticClass:"thumb"},[s("img",{staticClass:"img-100",attrs:{src:a.thumb,alt:""}}),t._v(" "),s("div",{staticClass:"mark"},[t._v("\n\t\t\t\t\t\t\t"+t._s(a.peoplenum)+"人团\n\t\t\t\t\t\t")])]),t._v(" "),s("div",{staticClass:"goods-title padding-10-lr"},[t._v(t._s(a.name))]),t._v(" "),s("div",{staticClass:"flex-lr padding-10-lr padding-10-b"},[s("div",{staticClass:"flex"},[s("span",{staticClass:"c-danger font-500 font-15 margin-5-r"},[t._v("¥"+t._s(a.price))]),t._v(" "),s("div",{staticClass:"c-gray line-through font-12"},[t._v("¥"+t._s(a.oldprice))])]),t._v(" "),s("div",{staticClass:"c-gray font-12"},[t._v("已售"+t._s(a.falesailed_total)+"份")])])])],1)}))]),t._v(" "),s("transition",{attrs:{name:"van-fade"}},[t.zhezhaoShow?s("div",{staticClass:"share-zhezhao",on:{click:function(a){t.zhezhaoShow=!t.zhezhaoShow}}},[s("img",{attrs:{src:"static/img/share-layer.png",alt:""}})]):t._e()])],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"step-item active"},[a("span",{staticClass:"step-number active"},[a("div",{staticClass:"step-number-inner"},[this._v("1")])]),this._v(" "),a("div",{staticClass:"step-title active"},[this._v("发起拼团")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"step-number active"},[a("div",{staticClass:"step-number-inner"},[this._v("2")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"flex"},[a("img",{staticClass:"success-star",attrs:{src:"static/img/pintuan_success_star.png",alt:""}}),this._v(" "),a("span",{staticClass:"font-16 c-danger"},[this._v("恭喜，顺利成团啦！")])])}]};var v=s("VU/8")(l,c,!1,function(t){s("lM6F")},null,null);a.default=v.exports}});
//# sourceMappingURL=74.7b96b7450c4f19a6a394.js.map