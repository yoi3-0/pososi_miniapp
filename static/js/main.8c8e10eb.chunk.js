(this["webpackJsonpmini-app"]=this["webpackJsonpmini-app"]||[]).push([[0],{138:function(e,t,c){},139:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(23),i=c.n(a),r=c(19),o=c.n(r),j=c(27),l=c.n(j),d=c(33),h=c(22),u=c(11),b=(c(136),c(6)),p=function(e){var t=e.id,c=e.go,n=e.fetchedUser;return Object(b.jsxs)(u.n,{id:t,children:[Object(b.jsx)(u.o,{children:"Example"}),n&&Object(b.jsx)(u.k,{header:Object(b.jsx)(u.l,{mode:"secondary",children:"User Data Fetched with VK Bridge"}),children:Object(b.jsx)(u.g,{before:n.photo_200?Object(b.jsx)(u.e,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:"",children:"".concat(n.first_name," ").concat(n.last_name)})}),Object(b.jsx)(u.k,{header:Object(b.jsx)(u.l,{mode:"secondary",children:"Navigation Example"}),children:Object(b.jsx)(u.h,{children:Object(b.jsx)(u.f,{stretched:!0,size:"l",mode:"secondary",onClick:c,"data-to":"persik",children:"Show me the Persik, please"})})})]})},O=c(38),x=c(39),f=c(21),m=c(41),v=c(40),g=c(140),y=(c.p,c(138),[{id:3201,name:"\u0422\u043e\u043a\u0438\u0439\u0441\u043a\u0438\u0439 \u0441\u0440\u0443\u043b\u044c"},{id:3273,name:"\u0413\u0443\u043b\u044c \u0438\u0437 \u0422\u043e\u043a\u0438\u043e"},{id:3205,name:"\u0411\u0435\u0433\u0443\u0449\u0430\u044f \u0422\u043e\u043a\u0430"},{id:3282,name:"\u041c\u0430\u0440\u044c\u044f\u043d the @avandi"}]),k=function(e){Object(m.a)(c,e);var t=Object(v.a)(c);function c(e){var n;return Object(O.a)(this,c),(n=t.call(this,e)).state={popout:null,activePanel:"default",search:""},n.onChange=n.onChange.bind(Object(f.a)(n)),n.openBase=n.openBase.bind(Object(f.a)(n)),n}return Object(x.a)(c,[{key:"onChange",value:function(e){this.setState({search:e.target.value})}},{key:"thematics",get:function(){var e=this.state.search.toLowerCase();return y.filter((function(t){return t.name.toLowerCase().indexOf(e)>-1}))}},{key:"openBase",value:function(){var e=this;this.setState({popout:Object(b.jsxs)(u.a,{onClose:function(){return e.setState({popout:null})},iosCloseItem:Object(b.jsx)(u.b,{autoclose:!0,mode:"cancel",children:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"}),children:[Object(b.jsx)(u.b,{autoclose:!0,children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0435\u0440\u0438\u0439"}),Object(b.jsx)(u.b,{autoclose:!0,children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043e\u0446\u0435\u043d\u043a\u0443"}),Object(b.jsx)(u.b,{autoclose:!0,mode:"destructive",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430"})]})})}},{key:"render",value:function(){var e=this;return Object(b.jsx)(u.u,{activePanel:this.props.id,popout:this.state.popout,children:Object(b.jsxs)(u.n,{id:this.props.id,children:[Object(b.jsx)(u.o,{children:"\u0410\u043d\u0438\u043c\u0435-\u043b\u0438\u0441\u0442"}),Object(b.jsxs)(u.k,{children:[Object(b.jsx)(u.r,{value:this.state.search,onChange:this.onChange,after:null}),this.thematics.length>0&&this.thematics.map((function(t){return Object(b.jsx)(u.p,{disabled:!0,after:Object(b.jsxs)(u.m,{onClick:e.openBase,children:[" ",Object(b.jsx)(g.a,{})," "]}),before:Object(b.jsx)(u.e,{size:72,src:null}),caption:"10 \u0441\u0435\u0440\u0438\u0439, \u043e\u0446\u0435\u043d\u043a\u0430 5 \u0438\u0437 5",children:t.name},t.id)})),0===this.thematics.length&&Object(b.jsx)(u.j,{children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"})]})]})})}}]),c}(s.a.Component),C=c(141),S=c(142),w=function(){var e=Object(n.useState)("profile"),t=Object(h.a)(e,2),c=(t[0],t[1]),a=Object(n.useState)(null),i=Object(h.a)(a,2),r=i[0],j=i[1],O=s.a.useState("profile"),x=Object(h.a)(O,2),f=x[0],m=x[1],v=Object(n.useState)(Object(b.jsx)(u.q,{size:"large"})),g=Object(h.a)(v,2),y=(g[0],g[1]),w=function(e){m(e.currentTarget.dataset.story),c(e.currentTarget.dataset.story)};Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,j(t),y(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o.a.subscribe((function(e){var t=e.detail,c=t.type,n=t.data;if("VKWebAppUpdateConfig"===c){var s=document.createAttribute("scheme");s.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(s)}})),function(){e.apply(this,arguments)}()}),[]);var A=function(e){c(e.currentTarget.dataset.to)};return Object(b.jsx)(u.c,{children:Object(b.jsx)(u.d,{children:Object(b.jsxs)(u.i,{activeStory:f,tabbar:Object(b.jsxs)(u.s,{children:[Object(b.jsx)(u.t,{onClick:w,selected:"AList"===f,"data-story":"AList",text:"\u0410\u043d\u0438\u043c\u0435-\u043b\u0438\u0441\u0442",children:Object(b.jsx)(C.a,{})}),Object(b.jsx)(u.t,{onClick:w,selected:"profile"===f,"data-story":"profile",text:"\u0421\u0435\u0440\u0432\u0438\u0441\u044b",children:Object(b.jsx)(S.a,{})})]}),children:[Object(b.jsx)(p,{id:"profile",fetchedUser:r,go:A}),Object(b.jsx)(k,{id:"AList",go:A})]})})})};o.a.send("VKWebAppInit"),i.a.render(Object(b.jsx)(w,{}),document.getElementById("root"))}},[[139,1,2]]]);
//# sourceMappingURL=main.8c8e10eb.chunk.js.map