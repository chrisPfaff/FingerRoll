(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},16:function(e,a,t){},18:function(e,a,t){},20:function(e,a,t){},22:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),o=t(2),r=t.n(o),i=t(3),l=t(4),m=t(6),s=t(5),u=t(7),d=(t(14),function(e){return c.a.createElement("div",{className:"ui card"},c.a.createElement("div",{className:"image"},c.a.createElement("img",{className:" logo",src:e.logo,alt:"team logo"})),c.a.createElement("div",{className:"content"},c.a.createElement("a",{className:"header"},e.city),c.a.createElement("div",{className:"meta"},c.a.createElement("span",{className:"nickname"},e.nickname))))}),f=(t(16),function(){return c.a.createElement("div",{className:"headerContainer"},c.a.createElement("h1",{className:"headerText"},"FingerRoll"))}),h=(t(18),function(){return c.a.createElement("div",{className:"footerContainer"},c.a.createElement("h1",{className:"footerText"},"\xa9 chris pfaff"))}),v=(t(20),function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(c)))).state={data:[]},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/landing").then(function(e){return e.json()}).then(function(a){e.setState({data:a})})}},{key:"render",value:function(){var e=this.state.data.map(function(e){return c.a.createElement(d,{fullName:e.fullName,city:e.city,nickname:e.nickname,logo:e.logo})});return c.a.createElement("div",null,c.a.createElement(f,null),c.a.createElement("div",{className:"mainContainer"},e),c.a.createElement(h,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(22)}},[[8,2,1]]]);
//# sourceMappingURL=main.ee8ba482.chunk.js.map