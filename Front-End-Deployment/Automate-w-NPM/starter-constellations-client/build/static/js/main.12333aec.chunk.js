(this["webpackJsonpstarter-constellations-client"]=this["webpackJsonpstarter-constellations-client"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(3),r=a.n(c),s=a(4),o=a(1);var i=function(e){var t=e.constellations,a=e.setConstellations;return l.a.createElement("form",{className:"form container"},l.a.createElement("div",{className:"form-group row"},l.a.createElement("input",{className:"form-control col col-md-8",type:"text",id:"search",name:"search",onChange:function(e){var n=e.target.value,l=t.all.filter((function(e){return e.name.toLowerCase().includes(n)}));a(Object(o.a)(Object(o.a)({},t),{},{visible:l}))},placeholder:"Search the stars..."}),l.a.createElement("label",{className:"form-check-label sr-only",htmlFor:"search"},"Search")))};var m=function(e){var t=e.constellations,a=e.setConstellations;return l.a.createElement("div",{className:"jumbotron jumbotron-fluid bg-info text-white rounded-0 mb-0"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"display-4"},"Explore Constellations"),l.a.createElement("p",{className:"lead"},"Explore different constellations in the sky!"),l.a.createElement("hr",null),l.a.createElement(i,{constellations:t,setConstellations:a})))};var u=function(){return l.a.createElement("ul",{className:"nav justify-content-center bg-light py-2"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("button",{className:"btn btn-link nav-link active"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("button",{className:"btn btn-link nav-link"},"About")))};var E=function(e){var t=e.constellation;return l.a.createElement("div",{className:"card col-12 col-md-4 rounded-0"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},t.name," -"," ",l.a.createElement("small",{className:"text-muted"},t.meaning)),l.a.createElement("p",{className:"card-text"},l.a.createElement("strong",null,"Stars with Planets: "),t.starsWithPlanets),l.a.createElement("p",{className:"card-text"},l.a.createElement("strong",null,"Quadrant: "),t.quadrant)))};var d=function(){return l.a.createElement("div",{className:"container my-5"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("p",{className:"text-center"},"There are no constellations listed..."))))};var v=function(e){var t=e.constellations;if(!t.length)return l.a.createElement(d,null);var a=t.map((function(e){return l.a.createElement(E,{key:e.id,constellation:e})}));return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},a))};var f=function(){var e=Object(n.useState)({all:[],visible:[]}),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){var e="".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_BASE_URL,"/constellations");fetch(e).then((function(e){return e.json()})).then((function(e){c({all:e,visible:e})}))}),[]),l.a.createElement("main",null,l.a.createElement(m,{constellations:a,setConstellations:c}),l.a.createElement(u,null),l.a.createElement(v,{constellations:a.visible}))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root"))},5:function(e,t,a){e.exports=a(10)}},[[5,1,2]]]);
//# sourceMappingURL=main.12333aec.chunk.js.map