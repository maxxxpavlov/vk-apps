(this["webpackJsonpvk-apps"]=this["webpackJsonpvk-apps"]||[]).push([[0],{121:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(13),c=n.n(i),s=n(12),l=n.n(s),r=n(26),p=n(27),u=n(30),d=n(28),m=n(31),h=n(14),b=(n(103),n(29)),f=n.n(b);l.a.subscribe((function(e){if("VKWebAppAccessTokenReceived"===e.detail.type){var t=e.detail.data;console.log(t),f.a.post("".concat("https://api.lildiary.ru","/app/stories"),{data:t}).then((function(e){}))}}));var k=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(d.a)(t).call(this))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"getPermissions",value:function(){l.a.send("VKWebAppGetAuthToken",{app_id:7183418,scope:"stories"})}},{key:"render",value:function(){return o.a.createElement(h.f,{activePanel:"mainPanel"},o.a.createElement(h.d,{id:"mainPanel"},o.a.createElement(h.e,null,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0438\u0441\u0442\u043e\u0440\u0438\u044e"),o.a.createElement(h.c,null,o.a.createElement(h.b,null,o.a.createElement(h.a,{size:"xl",onClick:this.getPermissions},"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c \u0438\u0441\u0442\u043e\u0440\u0438\u044e")))))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.send("VKWebAppInit",{}),c.a.render(o.a.createElement(k,null),document.getElementById("root"))},94:function(e,t,n){e.exports=n(121)}},[[94,1,2]]]);
//# sourceMappingURL=main.f22c8bf4.chunk.js.map