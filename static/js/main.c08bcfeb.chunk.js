(this["webpackJsonpvk-apps"]=this["webpackJsonpvk-apps"]||[]).push([[0],{119:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(13),i=a.n(o),l=a(12),c=a.n(l),r=a(26),u=a(27),p=a(30),d=a(28),h=a(31),k=a(14),m=(a(101),a(29)),b=a.n(m),v=window.location.search.slice(1).split("&").map((function(e){var t=e.split("=");return{key:t[0],value:t[1]}})).reduce((function(e,t){return e[t.key]=t.value,e}),{});c.a.subscribe((function(e){if("VKWebAppAccessTokenReceived"===e.detail.type){var t=e.detail.data;c.a.send("VKWebAppCallAPIMethod",{method:"stories.getPhotoUploadServer",params:{v:"5.102",access_token:t.access_token,add_to_news:1,link_text:"signup",link_url:"https://vk.com/lildiarybot"}})}"VKWebAppCallAPIMethodResult"===e.detail.type&&b.a.post("".concat("https://api.lildiary.ru","/app/stories"),{url:e.detail.data.response.upload_url,vkData:v}).then((function(e){}))}));var f=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(p.a)(this,Object(d.a)(t).call(this))).state={snackbar:null},e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"getPermissions",value:function(){c.a.send("VKWebAppGetAuthToken",{app_id:7183418,scope:"stories"}),this.openBase()}},{key:"openBase",value:function(){var e=this;this.state.snackbar||this.setState({snackbar:s.a.createElement(k.f,{layout:"vertical",onClose:function(){return e.setState({snackbar:null})}},"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u0430")})}},{key:"render",value:function(){return s.a.createElement(k.g,{activePanel:"mainPanel"},s.a.createElement(k.d,{id:"mainPanel"},s.a.createElement(k.e,null,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0438\u0441\u0442\u043e\u0440\u0438\u044e"),s.a.createElement(k.c,null,s.a.createElement(k.b,null,s.a.createElement(k.a,{size:"xl",onClick:this.getPermissions},"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c \u0438\u0441\u0442\u043e\u0440\u0438\u044e"))),this.state.snackbar))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.send("VKWebAppInit",{}),i.a.render(s.a.createElement(f,null),document.getElementById("root"))},92:function(e,t,a){e.exports=a(119)}},[[92,1,2]]]);
//# sourceMappingURL=main.c08bcfeb.chunk.js.map