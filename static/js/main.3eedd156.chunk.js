(window["webpackJsonpyou-translate"]=window["webpackJsonpyou-translate"]||[]).push([[0],{24:function(e,t,a){e.exports=a(36)},29:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),i=a.n(c),l=(a(29),a(23)),o=a(7),u=a(8),s=a(10),d=a(9),m=a(11),p=(a(30),a(6)),v=a(5);function h(e){var t=e.saveURL,a=e.search,c=Object(n.useRef)("");return r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-container"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(p.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/library"},"Library")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://youtube.com",target:"_blank",rel:"noopener noreferrer"},"Youtube"))),a?r.a.createElement("div",{id:"URLForm"},r.a.createElement("input",{type:"text",id:"videoURL",placeholder:"Put youtube video URL here",ref:c}),r.a.createElement("button",{id:"button",onClick:t.bind(this,c)},"Apply")):null,r.a.createElement("a",{href:"#"},"Logo")))}var b=a(14);function f(e){var t=e.mainVideo,a=Object(n.useState)({translated:""}),c=Object(b.a)(a,2),i=c[0],l=c[1],o=Object(n.useRef)(),u=function(e){var t=e,a=o.current.value;fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl="+t+"&dt=t&q="+a).then(function(e){return e.json()}).then(function(e){return l({translated:e[0][0][0]})}).catch(function(e){return"Not Found "+e})};return r.a.createElement("section",{className:"main"},r.a.createElement("div",{className:"iframe-container"},r.a.createElement("iframe",{width:"100%",height:"56%",id:"videoContainer",src:t,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),r.a.createElement("div",{id:"translater"},r.a.createElement("textarea",{id:"translationInput",ref:o,onKeyDown:function(e){return function(e){13===e.keyCode&&u("uk")}(e)}}),r.a.createElement("div",{id:"buttons"},r.a.createElement("button",{id:"rus-uk",onClick:function(){return u("uk")}},"Translate to ",r.a.createElement("span",{className:"flag-icon flag-icon-ua"})),r.a.createElement("button",{id:"moskovien",onClick:function(){return u("ru")}},"Translate to ",r.a.createElement("span",{className:"flag-icon flag-icon-ru"}))),r.a.createElement("textarea",{id:"translated",value:i.translated})))}function E(e){var t=e.id,a=e.src;return r.a.createElement("div",{className:"vidosiky"},r.a.createElement("iframe",{className:"vidos",id:t,src:a,allowFullScreen:!0}))}function y(e){var t=e.displayVideo,a=e.saveVideo,c=Object(n.useState)(),i=Object(b.a)(c,2),l=i[0],o=i[1],u=!1,s=Object(n.useRef)(""),d=[],m="any";return r.a.createElement("section",{className:"videos-list"},r.a.createElement("form",{id:"right-form",onSubmit:function(e){return function(e){e.preventDefault(),window.gapi.client.youtube.search.list({part:"snippet",type:"video",q:encodeURIComponent(s.current.value).replace(/%20/g,"+"),maxResults:10,videoCaption:m,videoSyndicated:"true",order:"viewCount"}).execute(function(e){var n=e.items;console.log(n),n.forEach(function(e,n){var c=e.id.videoId;d.push(r.a.createElement("div",{className:"fetched-videos"},r.a.createElement("div",{id:"title"},e.snippet.title),r.a.createElement(E,{id:"vidos-"+n,src:"https://www.youtube.com/embed/"+e.id.videoId}),r.a.createElement("div",{className:"right-buttons"},r.a.createElement("button",{className:"display",id:"display-"+n,onClick:t.bind(this,c)},"Display"),r.a.createElement("button",{id:"save-"+n,onClick:a.bind(this,c)},"Save"))))}),o(d)})}(e)}},r.a.createElement("div",{className:"subtitles"},r.a.createElement("label",{htmlFor:"subtitles"},"CC"),r.a.createElement("input",{type:"checkbox",name:"subtitles",id:"subtitles",onChange:function(){m=!0===(u=!u)?"closedCaption":"any"}})),r.a.createElement("input",{type:"text",placeholder:"YouTube Search",id:"search",ref:s}),r.a.createElement("input",{type:"submit",value:"Search"})),r.a.createElement("div",{id:"results"},l))}var w=function(e){return r.a.createElement("div",{className:"container"},e.children)},g=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Home"},r.a.createElement("header",null,r.a.createElement(h,{search:!0,saveURL:this.props.saveURL})),r.a.createElement(w,null,r.a.createElement(f,{mainVideo:this.props.mainVideo}),r.a.createElement(y,{displayVideo:this.props.displayVideo,saveVideo:this.props.saveVideo})))}}]),t}(r.a.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(h,{search:!1}),r.a.createElement("h1",{className:"watch-later"},"Watch Later"),r.a.createElement("hr",null),r.a.createElement(w,null,this.props.watchLater.map(function(t){return r.a.createElement("div",{className:"watch-later-vidos"},r.a.createElement("iframe",{src:t}),r.a.createElement("div",null,r.a.createElement(p.b,{to:"/"},r.a.createElement("button",{onClick:e.props.watchVideo.bind(e,t)},"Watch")),r.a.createElement("button",null,"Delete")))})))}}]),t}(r.a.Component),O=function(){return r.a.createElement("div",null,"Oops. Page not fond.")},V=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={mainVideo:"https://www.youtube.com/embed/jSo5v5t4OQM",watchLater:[]},a.displayVideo=function(e){a.setState({mainVideo:"https://www.youtube.com/embed/"+e})},a.watchVideo=function(e){a.setState({mainVideo:e})},a.saveURL=function(e){console.log(e.current.value.replace("watch?v=","embed/"));var t=e.current.value.replace("watch?v=","embed/");a.setState({mainVideo:t}),e.current.value=""},a.saveVideo=function(e){a.setState({watchLater:[].concat(Object(l.a)(a.state.watchLater),["https://www.youtube.com/embed/"+e])})},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"loadYoutubeApi",value:function(){var e=document.createElement("script");e.src="https://apis.google.com/js/client.js",e.onload=function(){window.gapi.load("client",function(){window.gapi.client.setApiKey("AIzaSyBT1bbBwaB69Iphpy-NISP8D6CRwLel9Ys"),window.gapi.client.load("youtube","v3",function(){})})},document.body.appendChild(e)}},{key:"componentDidMount",value:function(){this.loadYoutubeApi()}},{key:"render",value:function(){var e=this;return r.a.createElement(p.a,null,r.a.createElement(v.c,null,r.a.createElement(v.a,{exact:!0,path:"/",render:function(){return r.a.createElement(g,{saveURL:e.saveURL,mainVideo:e.state.mainVideo,displayVideo:e.displayVideo,saveVideo:e.saveVideo})}}),r.a.createElement(v.a,{path:"/library",render:function(){return r.a.createElement(j,{watchVideo:e.watchVideo,watchLater:e.state.watchLater})}}),r.a.createElement(v.a,{component:O})))}}]),t}(r.a.Component);i.a.render(r.a.createElement(V,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.3eedd156.chunk.js.map