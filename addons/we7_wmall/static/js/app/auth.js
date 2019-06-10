define(["tiny"], function (a) {
    var b = {};
    return b.initLogin = function (b) {
        $(".button-login").click(function () {
            var c = $(this);
            if ($(this).hasClass("disabled")) return !1;
            var d = $.trim($('input[name="mobile"]').val());
            var areaNumber = $.trim($('#areaNumber').val());
            var wholeNumber = areaNumber+d;
            if (areaNumber == '') {return $.toast('请选择区号'), !1 }
            if (!d) return $.toast("请输入手机号"), !1;
            // if (!/^[01][3456789][0-9]{9}/.test(d)) return $.toast("手机号格式错误"), !1;
            var e = $.trim($('input[name="password"]').val());
            return e ? (c.addClass("disabled"), $.post(a.getUrl("wmall/auth/login"), {
                mobile: wholeNumber,
                password: e,
                forward: b
            }, function (a) {
                var b = $.parseJSON(a);
                b.message.errno ? ($.toast(b.message.message), c.removeClass("disabled")) : $.toast("登录成功", b.message.message)
            }), !1) : ($.toast("请输入密码"), !1)
        })
    }, b.sendCode = function (b) {
        $(".button-code").click(function () {
            var c = $(this);
            if ($(this).hasClass("disabled")) return !1;
            var d = $.trim($('input[name="mobile"]').val());
            var areaNumber = $.trim($('#areaNumber').val());
            var wholeNumber = areaNumber+d;
            if (areaNumber == '') {return $.toast('请选择区号'), !1 }
            if (!d) return $.toast("请输入手机号"), !1;
            // if (!/^[01][3456789][0-9]{9}/.test(d)) return $.toast("手机号格式错误"), !1;
            var e = $.trim($('input[name="captcha"]').val());
            return e ? ($.post(a.getUrl("system/common/code"), {mobile: wholeNumber, product: b, captcha: e}, function (a) {
                if ("success" != a) $.toast(a); else {
                    c.addClass("disabled");
                    var b = 60;
                    c.html(b + "秒后重新获取");
                    var d = setInterval(function () {
                        b--, b <= 0 ? (clearInterval(d), c.html("获取验证码"), c.removeClass("disabled"), b = 60) : c.html(b + "秒后重新获取")
                    }, 1e3);
                    $.toast("验证码发送成功, 请注意查收")
                }
            }), !1) : ($.toast("请输入图形验证码"), !1)
        })
    }, b.initRegister = function (c) {
        1 == c && b.sendCode("注册用户"), $(".button-register").click(function () {
            var b = $(this);
            if ($(this).hasClass("disabled")) return !1;
            var d = $.trim($('input[name="mobile"]').val());
            if (!d) return $.toast("请输入手机号"), !1;
            var areaNumber = $.trim($('#areaNumber').val());
            var wholeNumber = areaNumber+d;
            // var e = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;
            // if (!e.test(d)) return $.toast("手机号格式错误"), !1;
            var f = "";
            if (1 == c && !(f = $.trim($('input[name="code"]').val()))) return $.toast("请输入短信验证码"), !1;
            var g = $.trim($('input[name="password"]').val());
            if (!g) return $.toast("请输入密码"), !1;
            var h = g.length;
            if (h < 8 || h > 20) return $.toast("请输入8-20位密码"), !1;
            var e = /[0-9]+[a-zA-Z]+[0-9a-zA-Z]*|[a-zA-Z]+[0-9]+[0-9a-zA-Z]*/;
            if (!e.test(g)) return $.toast("密码必须由数字和字母组合"), !1;
            var i = $.trim($('input[name="repassword"]').val());
            return i ? g != i ? ($.toast("两次密码输入不一致"), !1) : (b.addClass("disabled"), $.post(a.getUrl("wmall/auth/register"), {
                mobile: wholeNumber,
                password: g,
                code: f
            }, function (a) {
                var c = $.parseJSON(a);
                c.message.errno ? ($.toast(c.message.message), b.removeClass("disabled")) : $.toast("注册成功", c.message.message)
            }), !1) : ($.toast("请重复输入密码"), !1)
        })
    }, b.initForget = function () {
        b.sendCode("找回密码"), $(".button-forget").click(function () {
            var b = $(this);
            if ($(this).hasClass("disabled")) return !1;
            var c = $.trim($('input[name="mobile"]').val());
            if (!c) return $.toast("请输入手机号"), !1;
            var d = /^[01][3456789][0-9]{9}/;
            if (!d.test(c)) return $.toast("手机号格式错误"), !1;
            var e = $.trim($('input[name="code"]').val());
            if (!e) return $.toast("请输入短信验证码"), !1;
            var f = $.trim($('input[name="password"]').val());
            if (!f) return $.toast("请输入密码"), !1;
            var g = f.length;
            if (g < 8 || g > 20) return $.toast("请输入8-20位密码"), !1;
            var d = /[0-9]+[a-zA-Z]+[0-9a-zA-Z]*|[a-zA-Z]+[0-9]+[0-9a-zA-Z]*/;
            if (!d.test(f)) return $.toast("密码必须由数字和字母组合"), !1;
            var h = $.trim($('input[name="repassword"]').val());
            return h ? f != h ? ($.toast("两次密码输入不一致"), !1) : (b.addClass("disabled"), $.post(a.getUrl("wmall/auth/forget"), {
                mobile: c,
                password: f,
                code: e
            }, function (a) {
                var c = $.parseJSON(a);
                c.message.errno ? ($.toast(c.message.message), b.removeClass("disabled")) : $.toast("设置新密码成功", c.message.message)
            }), !1) : ($.toast("请重复输入密码"), !1)
        })
    }, b
});