(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),o=n(3),i=n.n(o),c=(n(17),n(4)),l=n(5),r=n(9),u=n(6),d=n(10),p=(n(18),n(7)),m=n(8),h=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(n=Object(r.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={inputValue:"Enter Your Email",displaySend:!1,sent:!1},n.handleClick=function(){n.state.displaySend||n.setState({inputValue:"person@email.com",displaySend:!0})},n.handleSend=function(){n.state.sent||n.setState({sent:!0})},n.handleReset=function(){n.setState({sent:!1,displaySend:!1})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.sent,n=e.inputValue,a=e.displaySend;return s.a.createElement("div",{className:"app"},s.a.createElement("div",{className:"header"},s.a.createElement("span",null,"Sign Up For"),s.a.createElement("span",null,"Our Newsletter")),s.a.createElement("div",{className:"subtext"},s.a.createElement("span",null,"And recieve lastest news about our blog posts, podcasts, and job opportunities. We send emails twice a week. No spam, we promise!")),s.a.createElement("div",{className:"input-container ".concat(t?"sent":"exit")},s.a.createElement("input",{onChange:function(){},onClick:this.handleClick,value:n}),s.a.createElement(p.a,{onClick:this.handleSend,className:"icon ".concat(a?t?"sent":"show":"exit")},t?"Your Email Was Received":"")),s.a.createElement(m.a,{onClick:this.handleReset,className:"repeat ".concat(t?"sent":"")}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.e2281504.chunk.js.map