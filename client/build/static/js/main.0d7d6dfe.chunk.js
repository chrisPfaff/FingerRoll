(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(24)},,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(2),r=n.n(o),i=n(3),l=n(4),s=n(6),m=n(5),u=n(7),d=(n(14),function(e){return c.a.createElement("div",{className:"ui card"},c.a.createElement("div",{className:"image"},c.a.createElement("img",{className:" logo",src:e.logo,alt:"team logo"})),c.a.createElement("div",{className:"content"},c.a.createElement("a",{className:"header"},e.city),c.a.createElement("div",{className:"meta"},c.a.createElement("span",{className:"nickname"},e.nickname))))}),f=(n(16),n(18),function(){return c.a.createElement("div",{className:"headerContainer"},c.a.createElement("h1",{className:"headerText"},"FingerRoll"),c.a.createElement("button",{className:"loginButton"},"Login/Signup"))}),h=(n(20),function(){return c.a.createElement("div",{className:"footerContainer"},c.a.createElement("h1",{className:"footerText"},"\xa9 chris pfaff"))}),g=(n(22),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={data:[],login:!1},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/landing").then(function(e){return e.json()}).then(function(t){e.setState({data:t})})}},{key:"render",value:function(){var e=this.state.data.map(function(e){return c.a.createElement(d,{fullName:e.fullName,city:e.city,nickname:e.nickname,logo:e.logo})});return c.a.createElement("div",null,c.a.createElement(f,{open:this.state.login}),c.a.createElement("div",{className:"mainContainer"},e),c.a.createElement(h,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,2,1]]]);
//# sourceMappingURL=main.0d7d6dfe.chunk.js.map