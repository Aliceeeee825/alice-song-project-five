(this["webpackJsonpalice-song-project-five"]=this["webpackJsonpalice-song-project-five"]||[]).push([[0],{29:function(e,t,a){},32:function(e,t,a){e.exports=a.p+"static/media/homeLogo.d1720d81.svg"},33:function(e,t,a){e.exports=a.p+"static/media/calendarLogo.4db167f8.svg"},34:function(e,t,a){e.exports=a.p+"static/media/registerLogo.e013f98b.svg"},37:function(e,t,a){e.exports=a(63)},63:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(17),o=a.n(r),c=(a(29),a(6)),i=a(7),s=a(9),m=a(8),u=a(10),d=a(18),h=a(13),g=a(32),f=a.n(g),p=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).call(this))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"home"},l.a.createElement("div",{className:"homeHead"},l.a.createElement("div",{className:"homeLogo"},l.a.createElement("img",{src:f.a,alt:"A rabbit inspired by Alice in wonderland. cr to Max Jiang"})),l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"/login"},"Login")),l.a.createElement("li",null,l.a.createElement("a",{href:"/alice-song-project-five/register"},"Register"))))),l.a.createElement("h1",{className:"logo-mask"},"TIME LOGGER"),l.a.createElement("h2",null,"A handy tool that helps you track your time"))}}]),t}(n.Component),E=a(25),v=a.n(E);v.a.initializeApp({apiKey:"AIzaSyB5w34JU6hU2W5vXRqgHfUa5a9f2t9Gubc",authDomain:"timelogger-9717c.firebaseapp.com",databaseURL:"https://timelogger-9717c.firebaseio.com",projectId:"timelogger-9717c",storageBucket:"timelogger-9717c.appspot.com",messagingSenderId:"690201323203",appId:"1:690201323203:web:e77af9fcda00e5d5476476",measurementId:"G-9HLWMDP6XK"});var b=v.a,w=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("header",null,l.a.createElement("h1",null,"Time Logger"))}}]),t}(n.Component),y=a(22),C=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).newEventHandler=function(){document.querySelector(".logDetail").classList.toggle("hide")},e.removeAll=function(){var e=b.database().ref();window.confirm("Do you really want to clear everything on your schedule?")&&(e.remove(),window.location.reload())},e.addLogHandler=function(t){if(t.preventDefault(),e.state.day&&e.state.startTime&&e.state.note){var a={email:e.state.email,day:e.state.day,startTime:e.state.startTime,endTime:e.state.endTime,note:e.state.note};b.database().ref().push(a),document.querySelector(".note").value=""}else alert("You need to fill in the day, start time and the end time")},e.handleChange=function(t){e.setState(Object(y.a)({},t.target.name,t.target.value))},e.color=function(e){e.length>0&&e.forEach((function(e){for(var t=e.log.startTime,a=e.log.endTime,n=e.log.day,l=a-t-1;l>=0;l--){var r=Number(t)+l;document.querySelector(".cellNo"+r+"-"+n).style.backgroundColor="#c5c1c0",document.querySelector(".cellNo"+r+"-"+n).innerHTML=e.log.note}}))},e.state={email:"alice",listOfLogs:[],day:"",startTime:"",endTime:"",note:""},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.database().ref().on("value",(function(t){var a=t.val(),n=[];for(var l in a){var r={key:l,log:a[l]};n.push(r)}e.setState({listOfLogs:n})}))}},{key:"render",value:function(){var e=this;this.color(this.state.listOfLogs);for(var t=function(e,t){a.push(l.a.createElement("div",{className:"cellNo".concat(e," cell"),key:e},t))},a=[],n=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],r=8,o=0;o<=111;o++){if(1<=o&&o<=7)t(o,n[o-1]);else if(o%8===0&&o>8||8===o)t(o,"".concat(r,":00")),r++;else t(Math.floor(o/8)+"-"+o%8,"")}var c=[];!function(e){for(var t=0;t<=6;t++)c.push(l.a.createElement("option",{key:"".concat(e[t]),value:"".concat(t+1)},e[t]))}(n);var i=[];!function(){for(var e=1;e<=13;e++)i.push(l.a.createElement("option",{key:"".concat(e+7),value:"".concat(e)},e+7))}();var s=[];return function(){for(var t=1;t<=13;t++)t+1>e.state.startTime&&s.push(l.a.createElement("option",{key:"".concat(t+8),value:"".concat(t+1)},t+8))}(),l.a.createElement("div",{className:"mainContent"},l.a.createElement("div",{className:"calendar"},a.map((function(e){return e}))),l.a.createElement("div",{className:"newLog"},l.a.createElement("button",{className:"newLogPlus",onClick:this.newEventHandler},"+"),l.a.createElement("label",{className:"visuallyhidden"},"add a log")),l.a.createElement("div",{className:"clearAll"},l.a.createElement("button",{className:"clear",onClick:this.removeAll},"Clear")),l.a.createElement("div",{className:"logDetail hide"},l.a.createElement("h2",null,"Add log"),l.a.createElement("form",{action:"GET",onSubmit:this.addLogHandler,className:"addLogForm"},l.a.createElement("label",{htmlFor:"date"},"Date"),l.a.createElement("select",{onChange:this.handleChange,id:"day",name:"day",value:this.state.day,required:!0},l.a.createElement("option",{value:""},"A day of the week"),c.map((function(e){return e}))),l.a.createElement("label",{htmlFor:"statTime"},"Start time"),l.a.createElement("select",{onChange:this.handleChange,id:"startTime",name:"startTime",value:this.state.startTime,required:!0},l.a.createElement("option",{value:""},"Start time"),i.map((function(e){return e}))),l.a.createElement("label",{htmlFor:"endTime"},"End time"),l.a.createElement("select",{onChange:this.handleChange,id:"endTime",name:"endTime",value:this.state.endTime,required:!0},l.a.createElement("option",{value:""},"End time"),s.map((function(e){return e}))),l.a.createElement("label",{htmlFor:"note"},"Note"),l.a.createElement("input",{type:"text",name:"note",className:"note",value:this.state.note,onChange:this.handleChange,maxlength:"15"}),l.a.createElement("button",{className:"addLog",htmlFor:"submit",onClick:this.addLogHandler},"Add"))))}}]),t}(n.Component),O=a(33),j=a.n(O),k=b.auth(),N=(new b.auth.GoogleAuthProvider,function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).login=function(t){t.preventDefault();var a=document.querySelector("#email").value,n=document.querySelector("#password").value;k.signInWithEmailAndPassword(a,n).then((function(e){})).catch((function(e){e.code;alert(e.Message)})),k.onAuthStateChanged((function(t){console.log(t),e.setState({user:t},(function(){e.setState({user:t})}))}))},e.logout=function(){k.signOut().then((function(){e.setState({user:null})}))},e.state={user:null,email:"",password:""},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;k.onAuthStateChanged((function(t){t&&e.setState({user:t})}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"loginPage"},l.a.createElement("div",{className:"loginContent"},l.a.createElement("div",{className:"loginLogo"},l.a.createElement("img",{src:j.a,alt:"A calendar with a check mark inside. Icon made by Free icons from www.freeicons.io"})),l.a.createElement("form",{action:"GET",className:"loginForm",onSubmit:this.checkStatus},l.a.createElement("h2",null,"Welcome Back!"),l.a.createElement("label",{htmlFor:"email"},"Emaill address"),l.a.createElement("input",{type:"email",id:"email",name:"email",onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",id:"password",name:"password",onChange:this.handleChange}),l.a.createElement("a",{href:"/register"},"Don't have an account yet? Register here!"),this.state.user?l.a.createElement("button",{onClick:this.login},"Log In"):l.a.createElement("button",{onClick:this.logout},"Log Out"))))}}]),t}(n.Component)),L=a(34),S=a.n(L),T=(a(56),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).submitRegister=function(t){t.preventDefault(),e.state.password!==e.state.confirmedPassword&&alert("wrong password")},e.handleChange=function(t){e.setState(Object(y.a)({},t.target.name,t.target.value))},e.state={user:null,email:"",password:"",confirmedPassword:""},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"registerPage"},l.a.createElement("div",{className:"registerContent"},l.a.createElement("div",{className:"registerLogo"},l.a.createElement("img",{src:S.a,alt:"A calendar with a heart in the middle. Icon made by Free icons from www.freeicons.io"})),l.a.createElement("form",{action:"GET",className:"registerForm",onSubmit:this.submitRegister},l.a.createElement("h2",null,"Hello Friend!"),l.a.createElement("label",{htmlFor:"email"},"Emaill address"),l.a.createElement("input",{type:"email",id:"email",name:"email",value:this.state.email,onChange:this.handleChange,placeholder:"sample@alice.com"}),l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",id:"password",name:"password",value:this.state.password,onChange:this.handleChange,placeholder:"abc123"}),l.a.createElement("label",{htmlFor:"confirmedPassword"},"Confirmed Password"),l.a.createElement("input",{type:"password",id:"confirmedPassword",name:"confirmedPassword",value:this.state.confirmedPassword,onChange:this.handleChange}),l.a.createElement("a",{href:"/login"},"Already have an account? Sign in here!"),this.state.user?l.a.createElement("button",{onClick:this.logout},"Log Out"):l.a.createElement("button",{onClick:this.login},"Log In"))))}}]),t}(n.Component)),A=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(h.c,null,l.a.createElement(h.a,{path:"/login"},l.a.createElement(N,null)),l.a.createElement(h.a,{path:"/register"},l.a.createElement(T,null)),l.a.createElement(h.a,{path:"/main"},l.a.createElement(w,null),l.a.createElement(C,null)),l.a.createElement(h.a,{path:"/"},l.a.createElement(p,null)))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.c47c6587.chunk.js.map