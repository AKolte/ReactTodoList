(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{178:function(t,e,a){},179:function(t,e,a){},181:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),r=a(82),l=a.n(r);a(178),a(83),a(179);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(180);var o=a(12),c=a(13),i=a(15),u=a(14),d=(n.Component,a(50)),m=function(t){Object(i.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={},t}return Object(c.a)(a,[{key:"render",value:function(){var t=this.props.taskData;return console.log(t),s.a.createElement("div",null,s.a.createElement("li",{className:"list-group-item md-1"},s.a.createElement("input",{type:"checkbox",className:"md-1",onChange:this.props.handleStatusChange,checked:this.props.taskData.status}),t.title,s.a.createElement("input",{type:"button",className:"btn btn-danger",value:"Delete",onClick:this.props.handleDeleteTask})))}}]),a}(n.Component),p=function(t){Object(i.a)(a,t);var e=Object(u.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"col-md-3"},s.a.createElement("div",{className:"input-group"},s.a.createElement("input",{type:"text",id:"newTaskTitle",className:"form-control",placeholder:"Add new Task"}),s.a.createElement("span",{className:"input-group-btn"},s.a.createElement("button",{className:"btn btn-default",type:"button",onClick:this.props.handleAddTask},"Add"))))}}]),a}(n.Component),f=function(t){Object(i.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={id:2,filter:"All",filters:["All","Completed","Pending"],tasks:[{title:"Feed Fish",status:!1},{title:"Bake Cake",status:!0}]},t.switchStatus=function(e){var a=Object(d.a)(t.state.tasks),n=a.indexOf(e);a[n].status=!e.status,t.setState(a),console.log(t.state.tasks[n].status)},t.deleteTask=function(e){var a=Object(d.a)(t.state.tasks);a=a.filter((function(t){return t!=e})),t.setState({tasks:a}),console.log(a)},t.filterTasks=function(e){return"All"==t.state.filter||("Completed"==t.state.filter?e.status:!e.status)},t.addTask=function(){var e=document.getElementById("newTaskTitle").value;if(""!=e){var a=t.state.tasks;a.push({title:e,status:!1}),t.setState(a),console.log("aditya")}},t}return Object(c.a)(a,[{key:"render",value:function(){var t=this;return s.a.createElement("div",null,s.a.createElement("nav",{className:"navbar navbar-light bg-light"},s.a.createElement("div",{className:"btn-group",role:"group"},this.state.filters.map((function(e){return s.a.createElement("button",{type:"button",onClick:function(){return t.setState({filter:e})},className:"btn btn-default"},e)})))),s.a.createElement(p,{handleAddTask:this.addTask}),s.a.createElement("ul",{className:"list-group"},this.state.tasks.filter((function(e){return t.filterTasks(e)})).map((function(e){return s.a.createElement(m,{handleStatusChange:function(){return t.switchStatus(e)},handleDeleteTask:function(){return t.deleteTask(e)},taskData:e})}))))}}]),a}(n.Component);l.a.render(s.a.createElement("div",null,s.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},83:function(t,e,a){t.exports=a.p+"static/media/logo.5d5d9eef.svg"},84:function(t,e,a){t.exports=a(181)}},[[84,1,2]]]);
//# sourceMappingURL=main.3f104272.chunk.js.map