(this["webpackJsonpgh-chat"]=this["webpackJsonpgh-chat"]||[]).push([[0],{10:function(e,t,s){},16:function(e,t,s){},18:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),i=s(11),r=s.n(i),c=(s(16),s(2)),u=s(3),o=s(6),l=s(5),d=s(4),h=s(7),j=(s(9),s(0)),b=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).updateInput=function(e){a.setState(Object(h.a)({},e.target.name,e.target.value))},a.clear=function(){a.setState({username:"",chatUrl:"",password:""})},a.login=function(e){var t=new XMLHttpRequest,s=new FormData;s.append("password",a.state.password),s.append("username",a.state.username),t.open("POST",a.state.chatUrl+"/login"),t.addEventListener("readystatechange",(function(){if(4===t.readyState)if(201===t.status){var e=JSON.parse(t.responseText);a.handleLogin(e)}else 403===t.status?alert("Invalid username or password"):409===t.status?alert(a.state.username+" is already logged in"):alert(t.status+" failure to /login")})),t.send(s),e.preventDefault()},a.state={chatUrl:"",username:"",password:"",isVisible:!0},a.handleLogin=a.handleLogin.bind(Object(o.a)(a)),a}return Object(u.a)(s,[{key:"handleLogin",value:function(e){this.setState({isVisible:!1}),this.props.handleLogin(e.message_token,e.stream_token,this.state.chatUrl)}},{key:"showLogin",value:function(){this.setState({isVisible:!0}),this.clear()}},{key:"render",value:function(){return Object(j.jsxs)("form",{className:this.state.isVisible?"login":"hide",id:"login",children:[Object(j.jsx)("div",{class:"head",children:Object(j.jsx)("h2",{children:"Login"})}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{class:"inputtext",children:[Object(j.jsx)("label",{for:"chatUrl",children:"Chat URL: "}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",class:"text",onChange:this.updateInput,value:this.state.chatUrl,name:"chatUrl",autoFocus:!0}),"  ",Object(j.jsx)("br",{})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{class:"inputtext",children:[Object(j.jsx)("label",{for:"username",children:"Username: "}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",class:"text",onChange:this.updateInput,value:this.state.username,name:"username"})," ",Object(j.jsx)("br",{})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{class:"inputtext",children:[Object(j.jsx)("label",{for:"password",children:"Password: "}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"password",class:"text",onChange:this.updateInput,value:this.state.password,name:"password"})," ",Object(j.jsx)("br",{})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{class:"inputtext",children:[Object(j.jsx)("input",{type:"submit",class:"button",onClick:this.login,value:"Login"}),Object(j.jsx)("input",{type:"submit",class:"button",onClick:this.clear,value:"Clear"})," ",Object(j.jsx)("br",{})]})]})}}]),s}(a.Component),g=(s(10),function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).state={messageList:[]},a}return Object(u.a)(s,[{key:"appendData",value:function(e){this.setState({messageList:this.state.messageList.concat(e)})}},{key:"clearAllMessages",value:function(){this.setState({messageList:[]})}},{key:"render",value:function(){return Object(j.jsx)("div",{id:"eventstream",children:this.state.messageList.map((function(e){return Object(j.jsx)("div",{children:e})}))})}}]),s}(a.Component)),f=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).state={userList:[]},a}return Object(u.a)(s,[{key:"addUser",value:function(e){-1===this.state.userList.findIndex((function(t){return t===e}))&&this.setState({userList:this.state.userList.concat(e)})}},{key:"removeUser",value:function(e){var t=this.state.userList.indexOf(e);if(-1!==t){var s=this.state.userList.slice(0,t).concat(this.state.userList.slice(t+1));this.setState({userList:s})}}},{key:"clearAllUsers",value:function(){this.setState({userList:[]})}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{class:"onlineuser",children:"Online Users"}),Object(j.jsx)("div",{id:"userlist",children:this.state.userList.map((function(e){return Object(j.jsx)("div",{children:e},e)}))})]})}}]),s}(a.Component),p=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).updateInput=function(e){a.setState(Object(h.a)({},e.target.name,e.target.value))},a.entermessage=function(e){"Enter"===e.key&&(e.preventDefault(),a.props.streamMessage(a.state.message),a.setState({message:""}))},a.state={message:"",disable:!0},a}return Object(u.a)(s,[{key:"enableTextbox",value:function(){this.setState({message:"",disable:!1})}},{key:"disableTextbox",value:function(){this.setState({message:"Reconnect to send messages...",disable:!0})}},{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"text",value:this.state.message,onChange:this.updateInput,disabled:this.state.disable,onKeyPress:this.entermessage,class:"msgtxt",name:"message",id:"postmessage",autoFocus:!0})})}}]),s}(a.Component),v=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).state={message_token:"",stream_token:"",chatUrl:"",isVisible:!1},a.appendData=a.appendData.bind(Object(o.a)(a)),a.streamMessage=a.streamMessage.bind(Object(o.a)(a)),a.inputRef=n.a.createRef(),a.streamRef=n.a.createRef(),a.userRef=n.a.createRef(),a}return Object(u.a)(s,[{key:"streamMessage",value:function(e){var t=this,s="Bearer "+this.state.message_token,a=new XMLHttpRequest,n=new FormData;n.append("message",e),a.open("POST",this.state.chatUrl+"/message"),a.setRequestHeader("Authorization",s),a.addEventListener("readystatechange",(function(){if(4===a.readyState)if(201===a.status){if(a.getAllResponseHeaders().indexOf("token")>=0){var e=a.getResponseHeader("token");t.updateMessageToken(e)}}else if(403===a.status)alert("Invalid message token");else if(409===a.status){var s=a.getResponseHeader("token");t.updateMessageToken(s),alert("User not logged in")}else alert(a.status+" failure to /message")})),a.send(n)}},{key:"appendData",value:function(e){this.streamRef.current.appendData(e)}},{key:"updateMessageToken",value:function(e){this.setState({message_token:e})}},{key:"handleLogin",value:function(e,t,s){var a=this;this.setState({message_token:e,stream_token:t,chatUrl:s,isVisible:!0});var n=new EventSource(this.state.chatUrl+"/stream/"+t);n.addEventListener("Message",(function(e){var t=JSON.parse(e.data),s=new Date(1e3*t.created),n=s.toLocaleDateString("en-US")+" "+s.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0})+" ("+t.user+") "+t.message;a.appendData(n)})),n.addEventListener("Join",(function(e){var t=JSON.parse(e.data),s=new Date(1e3*t.created),n=s.toLocaleDateString("en-US")+" "+s.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0})+" JOIN: "+t.user;a.addUser(t.user),a.appendData(n)})),n.addEventListener("Users",(function(e){for(var t=JSON.parse(e.data).users,s=0;s<t.length;s++)a.addUser(t[s])})),n.addEventListener("Disconnect",(function(e){a.setState({isVisible:!1}),n.close(),a.props.loginRedirect()})),n.addEventListener("Part",(function(e){var t=JSON.parse(e.data),s=new Date(1e3*t.created),n=s.toLocaleDateString("en-US")+" "+s.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0})+" PART: "+t.user;a.removeUser(t.user),a.appendData(n)})),n.addEventListener("ServerStatus",(function(e){var t=JSON.parse(e.data),s=new Date(1e3*t.created),n=s.toLocaleDateString("en-US")+" "+s.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0})+" STATUS: "+t.status;a.appendData(n)})),n.onopen=function(e){a.inputRef.current.enableTextbox()},n.onerror=function(e){a.inputRef.current.disableTextbox()}}},{key:"removeUser",value:function(e){this.userRef.current.removeUser(e)}},{key:"addUser",value:function(e){this.userRef.current.addUser(e)}},{key:"clearChatpage",value:function(){this.streamRef.current.clearAllMessages(),this.userRef.current.clearAllUsers()}},{key:"render",value:function(){return Object(j.jsxs)("div",{class:this.state.isVisible?"":"hide",children:[Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"Chat Stream"})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{class:"stream",children:Object(j.jsx)(g,{ref:this.streamRef})}),Object(j.jsx)("div",{class:"users",children:Object(j.jsx)(f,{ref:this.userRef})})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{class:"message",children:Object(j.jsx)(p,{streamMessage:this.streamMessage,ref:this.inputRef})}),Object(j.jsx)("div",{class:"placeholder"})]})]})}}]),s}(a.Component),O=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).chatRef=n.a.createRef(),a.loginRef=n.a.createRef(),a.handleLogin=a.handleLogin.bind(Object(o.a)(a)),a.loginRedirect=a.loginRedirect.bind(Object(o.a)(a)),a}return Object(u.a)(s,[{key:"handleLogin",value:function(e,t,s){this.chatRef.current.handleLogin(e,t,s)}},{key:"loginRedirect",value:function(){this.chatRef.current.clearChatpage(),this.loginRef.current.showLogin()}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(b,{ref:this.loginRef,handleLogin:this.handleLogin}),Object(j.jsx)(v,{ref:this.chatRef,loginRedirect:this.loginRedirect})]})}}]),s}(a.Component),m=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,19)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;s(e),a(e),n(e),i(e),r(e)}))};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),m()},9:function(e,t,s){}},[[18,1,2]]]);
//# sourceMappingURL=main.2fa39713.chunk.js.map