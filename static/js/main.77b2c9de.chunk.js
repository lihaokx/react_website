(this.webpackJsonpreact_website=this.webpackJsonpreact_website||[]).push([[0],{166:function(e,t,s){"use strict";s.r(t);var a=s(3),c=s.n(a),n=s(17),i=s.n(n),r=(s(95),s(96),s(97),s(98),s(99),s(26)),o=s(167),d=s(168),l=s(169),j=s(170),h=s(171),m=s(172),b=s(13),u=s(1),x=function(){return Object(u.jsxs)("div",{className:"col-12",children:[Object(u.jsx)("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),Object(u.jsx)("p",{children:"Loading . . ."})]})},O=function(e){var t=e.dish.image;return Object(u.jsx)(o.a,{children:Object(u.jsxs)(b.b,{to:"/menu/".concat(e.dish.id),children:[Object(u.jsx)(d.a,{width:"100%",src:"/react_website/"+t,alt:e.dish.name}),Object(u.jsx)(l.a,{children:Object(u.jsxs)(j.a,{children:[e.dish.name," "]})})]})})},f=function(e){return e.dishes.isLoading?Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)(x,{})})}):e.dishes.errMess?Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-12",children:Object(u.jsx)("h4",{children:e.dishes.errMess})})})}):e.dishes.dishes.map((function(t){return Object(u.jsx)("div",{className:"col-xs-12 col-md-5 m-4",children:Object(u.jsx)(O,{dish:t,clickon:function(){return e.clickon(t.id)}})},t.id)}))},g=function(e){return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)(h.a,{children:[Object(u.jsx)(m.a,{children:Object(u.jsx)(b.b,{to:"/home",children:"Home"})}),Object(u.jsx)(m.a,{active:!0,children:"Menu"})]}),Object(u.jsxs)("div",{className:"col-12",children:[Object(u.jsx)("h3",{children:"Menu"}),Object(u.jsx)("hr",{})]})]}),Object(u.jsx)("div",{className:"row",children:Object(u.jsx)(f,{dishes:e.dishes,clickon:e.clickon})})]})},p=s(173),v=s(174),N=s(175),y=s(194),w=s(176),C=s(177),I=s(178),k=s(179),S=s(180),L=s(9),M=function(e){var t=e.comments;return t?Object(u.jsxs)("div",{children:[Object(u.jsx)("ul",{children:t.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:e.comment}),Object(u.jsxs)("p",{children:["-- ",e.author,", ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date)))]})]},e.id)},e.id)}))}),Object(u.jsx)(F,{addComment:e.addComment,dishId:e.dishId})]}):Object(u.jsx)("div",{})},T=function(e){return Object(u.jsxs)(o.a,{children:[Object(u.jsx)(d.a,{top:!0,src:"/react_website/"+e.dish.image,alt:e.dish.name}),Object(u.jsxs)(p.a,{children:[Object(u.jsx)(j.a,{children:e.dish.name}),Object(u.jsx)(v.a,{children:e.dish.description})]})]})},F=function(e){var t,s=Object(a.useState)(!1),n=Object(r.a)(s,2),i=n[0],o=n[1];function d(){o(!i)}return Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsxs)(N.a,{outline:!0,onClick:d,children:[Object(u.jsx)("span",{className:"fa fa-sign-in fa-lg"})," Submit Comment"]}),Object(u.jsxs)(y.a,{isOpen:i,toggle:d,children:[Object(u.jsx)(w.a,{toggle:d,children:" Submit Comment"}),Object(u.jsx)(C.a,{children:Object(u.jsxs)(L.LocalForm,{onSubmit:function(t){return function(t){e.addComment(e.dishId,t.rating,t.author,t.comment)}(t)},children:[Object(u.jsx)(I.a,{className:"form-group",children:Object(u.jsx)(k.a,{htmlFor:"rating",md:2,children:"Rating"})}),Object(u.jsx)(I.a,{className:"form-group",children:Object(u.jsx)(S.a,{children:Object(u.jsxs)(L.Control.select,{model:".rating",id:"rating",name:"rating",placeholder:"rating",className:"form-control",children:[Object(u.jsx)("option",{value:"none",selected:!0,disabled:!0,hidden:!0,children:" Select an Option"}),Object(u.jsx)("option",{value:"1",children:"1"}),Object(u.jsx)("option",{value:"2",children:"2"}),Object(u.jsx)("option",{value:"3",children:"3"}),Object(u.jsx)("option",{value:"4",children:"4"}),Object(u.jsx)("option",{value:"5",children:"5"})]})})}),Object(u.jsx)(I.a,{className:"form-group",children:Object(u.jsx)(k.a,{htmlFor:"author",md:4,children:"Your Name"})}),Object(u.jsx)(I.a,{className:"form-group",children:Object(u.jsxs)(S.a,{children:[Object(u.jsx)(L.Control.text,{model:".author",id:"author",name:"author",placeholder:"Your Name",className:"form-control",validators:{required:function(e){return e&&e.length},minLength:(t=3,function(e){return e&&e.length>=t}),maxLength:function(e){return function(t){return!t||t.length<=e}}(15)}}),Object(u.jsx)(L.Errors,{className:"text-danger",model:".author",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})}),Object(u.jsx)(I.a,{className:"form-group",children:Object(u.jsx)(k.a,{htmlFor:"comment",md:2,children:"Comment"})}),Object(u.jsx)(I.a,{className:"form-group",children:Object(u.jsx)(S.a,{children:Object(u.jsx)(L.Control.textarea,{model:".comment",id:"comment",name:"comment",rows:"6",className:"form-control"})})}),Object(u.jsx)(I.a,{className:"form-group",children:Object(u.jsx)(S.a,{children:Object(u.jsx)(N.a,{type:"submit",color:"primary",md:4,children:"Submit"})})})]})})]})]})},E=function(e){return e.isLoading?Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)(x,{})})}):e.errMess?Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("h4",{children:e.errMess})})}):null!=e.dish?Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)(h.a,{children:[Object(u.jsx)(m.a,{children:Object(u.jsx)(b.b,{to:"/menu",children:"Menu"})}),Object(u.jsx)(m.a,{active:!0,children:e.dish.name})]}),Object(u.jsxs)("div",{className:"col-12",children:[Object(u.jsx)("h3",{children:e.dish.name}),Object(u.jsx)("hr",{})]})]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(u.jsx)(T,{dish:e.dish})}),Object(u.jsxs)("div",{className:"col-12 col-md-5 m-1",children:[Object(u.jsx)("h4",{children:"Comments"}),Object(u.jsx)(M,{comments:e.comments,addComment:e.addComment,dishId:e.dish.id})]})]})]}):Object(u.jsx)("div",{children:Object(u.jsx)("p",{})})},H=s(181),A=s(182),Z=s(183),q=s(184),P=s(185),R=s(186),D=s(187),z=s(188),_=s(189),J=s(190),B=s(36),U=s(0),V=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),s=t[0],n=t[1],i=Object(a.useState)(!1),o=Object(r.a)(i,2),d=o[0],l=o[1],j={username:"",password:"",remember:""};function h(){l(!d)}return Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsx)(H.a,{dark:!0,className:"headerNavBar",expand:"md",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(A.a,{onClick:function(){n(!s)}}),Object(u.jsx)(Z.a,{className:"mr-auto",href:"/",children:Object(u.jsx)("img",{src:"/react_website/assets/images/logo.svg",height:"50",width:"50",alt:"Ristorante Con Fusion"})}),Object(u.jsxs)(q.a,{isOpen:s,navbar:!0,className:"row callapseNav",children:[Object(u.jsxs)(P.a,{navbar:!0,className:"col-md-7 row",children:[Object(u.jsx)(R.a,{className:"col-md-3",children:Object(u.jsxs)(b.c,{className:"normal",activeClassName:"active",to:"/home",children:[Object(u.jsx)(U.b.Provider,{value:{color:"#ffffff",size:"2em",className:"global-class-name"},children:Object(u.jsx)(B.a,{})}),"\xa0  Home"]})}),Object(u.jsx)(R.a,{className:"col-md-3",children:Object(u.jsxs)(b.c,{className:"normal",activeClassName:"active",to:"/aboutus",children:[Object(u.jsx)(U.b.Provider,{value:{color:"#ffffff",size:"2em",className:"global-class-name"},children:Object(u.jsx)(B.b,{})}),"\xa0  Info"]})}),Object(u.jsx)(R.a,{className:"col-md-3",children:Object(u.jsxs)(b.c,{className:"normal",activeClassName:"active",to:"/menu",children:[Object(u.jsx)(U.b.Provider,{value:{color:"#ffffff",size:"2em",className:"global-class-name"},children:Object(u.jsx)(B.e,{})}),"\xa0 Menu"]})}),Object(u.jsx)(R.a,{className:"col-md-3",children:Object(u.jsxs)(b.c,{className:"normal",activeClassName:"active",to:"/contactus",children:[Object(u.jsx)(U.b.Provider,{value:{color:"#ffffff",size:"2em",className:"global-class-name"},children:Object(u.jsx)(B.c,{})}),"\xa0 Contact"]})})]}),Object(u.jsx)(P.a,{navbar:!0,className:"col-md-5 justify-content-end ml-auto",children:Object(u.jsx)(R.a,{children:Object(u.jsxs)(N.a,{outline:!0,onClick:h,className:"loginBtn",children:[Object(u.jsx)(U.b.Provider,{value:{color:"#ffffff",size:"2em",className:"global-class-name"},children:Object(u.jsx)(B.d,{})}),"Login"]})})})]})]})}),Object(u.jsx)(D.a,{children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row row-header",children:Object(u.jsxs)("div",{className:"col-12 col-sm-6",children:[Object(u.jsx)("h1",{children:"Haolao hotpot"}),Object(u.jsx)("p",{children:"Taking customer experience as our top priority, we always provide innovative and pleasant services to our customers. All the personalized services offered by our restaurants are derived from the innovative ideas of our staff. These warm and personalized services turn every meal into a happy experience. "})]})})})}),Object(u.jsxs)(y.a,{isOpen:d,toggle:h,children:[Object(u.jsx)(w.a,{toggle:h,children:" Login"}),Object(u.jsx)(C.a,{children:Object(u.jsxs)(z.a,{onSubmit:function(e){h(),e.preventDefault()},children:[Object(u.jsxs)(_.a,{children:[Object(u.jsx)(k.a,{htmlFor:"username",children:"Username"}),Object(u.jsx)(J.a,{type:"text",id:"username",name:"username",innerRef:function(e){return j.username=e}})]}),Object(u.jsxs)(_.a,{children:[Object(u.jsx)(k.a,{htmlFor:"password",children:"Password"}),Object(u.jsx)(J.a,{type:"password",id:"password",name:"password",innerRef:function(e){return j.password=e}})]}),Object(u.jsx)(_.a,{check:!0,children:Object(u.jsxs)(k.a,{check:!0,children:[Object(u.jsx)(J.a,{type:"checkbox",name:"remember",innerRef:function(e){return j.remember=e}}),"Remember me"]})}),Object(u.jsx)(N.a,{type:"submit",value:"submit",color:"primary",children:"Login"})]})})]})]})};var Y=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),Object(u.jsx)("br",{}),Object(u.jsx)(D.a,{children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row  justify-content-center",children:[Object(u.jsxs)("div",{className:"row row-header  justify-content-center ",children:[Object(u.jsx)("div",{className:"col-xs-12 col-md",children:Object(u.jsxs)("a",{className:"row  justify-content-center",target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/hao-li-654568176/",children:[Object(u.jsx)("div",{className:"col-xs-5 col-md-2 ",children:Object(u.jsx)("i",{className:" fa fa-linkedin  fa-3x"})}),Object(u.jsxs)("div",{className:"col-xs-5 col-md-5 ",children:[Object(u.jsx)("h4",{children:"Linkedin "}),Object(u.jsx)("p",{children:"Connect with me on Linkedin"})]})]})}),Object(u.jsx)("div",{className:"col-xs-12 col-md justify-content-center",children:Object(u.jsxs)("a",{className:"row justify-content-center",href:"mailto:lihaokx@gmail.com",children:[Object(u.jsx)("div",{className:"col-xs-5 col-md-2 ",children:Object(u.jsx)("i",{className:"  fa fa-envelope  fa-3x"})}),Object(u.jsxs)("div",{className:"col-xs-5 col-md-5 ",children:[Object(u.jsx)("h4",{children:"Email "}),Object(u.jsx)("p",{children:"lihaokx@gmail.com"})]})]})})]}),Object(u.jsxs)("div",{className:"row row-header  top-buffer justify-content-end ",children:[Object(u.jsx)("div",{className:"col-xs-12 col-md ",children:Object(u.jsxs)("a",{className:"row justify-content-center",target:"_blank",rel:"noreferrer",href:"https://github.com/lihaokx",children:[Object(u.jsx)("div",{className:"col-xs-5 col-md-2 ",children:Object(u.jsx)("i",{className:" fa fa-github  fa-3x"})}),Object(u.jsxs)("div",{className:"col-xs-5 col-md-5 ",children:[Object(u.jsx)("h4",{children:"Github: lihaokx "}),Object(u.jsx)("p",{children:"Learn from my projects  "})]})]})}),Object(u.jsx)("div",{className:"col-xs-12 col-md  ",children:Object(u.jsxs)("a",{className:"row justify-content-center",href:"tel:8192109056",children:[Object(u.jsx)("div",{className:"col-xs-5 col-md-2 ",children:Object(u.jsx)("i",{className:"  fa fa-phone  fa-3x"})}),Object(u.jsxs)("div",{className:"col-xs-5 col-md-5 ",children:[Object(u.jsx)("h4",{children:"Mobile phone "}),Object(u.jsx)("p",{children:"(819)-210-9056"})]})]})})]})]})})})]})},W=s(191);function G(e){var t=e.item,s=e.isLoading,a=e.errMess;return s?Object(u.jsx)(x,{}):a?Object(u.jsx)("h4",{children:a}):Object(u.jsxs)(o.a,{children:[Object(u.jsx)(d.a,{src:"/react_website"+t.image,alt:t.name}),Object(u.jsxs)(p.a,{children:[Object(u.jsx)(j.a,{children:t.name}),t.designation?Object(u.jsx)(W.a,{children:t.designation}):null,Object(u.jsx)(v.a,{children:t.description})]})]})}var K=function(e){return Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row align-items-start",children:[Object(u.jsx)("div",{className:"col-xs-12 col-md m-1",children:Object(u.jsx)(G,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})}),Object(u.jsx)("div",{className:"col-xs-12 col-md  m-1",children:Object(u.jsx)(G,{item:e.promotion})}),Object(u.jsx)("div",{className:"col-xs-12 col-md m-1",children:Object(u.jsx)(G,{item:e.leader})})]})})},Q=s(192),$=s(193),X=function(e){return Object(u.jsx)("div",{className:"col-12 mt-5",children:Object(u.jsxs)(Q.a,{className:"row",children:[Object(u.jsx)(Q.a,{left:!0,middle:!0,href:"#",className:"col-12 col-md-2",children:Object(u.jsx)(Q.a,{object:!0,src:"/react_website/"+e.leader.image,className:"w-100 h-auto",alt:"props.leader.name"})}),Object(u.jsxs)(Q.a,{body:!0,className:"col-12 col-md-10",children:[Object(u.jsx)(Q.a,{heading:!0,children:e.leader.name}),Object(u.jsx)("h6",{children:e.leader.designation}),Object(u.jsxs)("p",{children:[e.leader.description,"    "]})]})]})},e.leader.id)};var ee=function(e){var t=e.leaders.map((function(e){return Object(u.jsx)("div",{className:"col-12 mt-5",children:Object(u.jsx)(X,{leader:e})},e.id)}));return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)(h.a,{children:[Object(u.jsx)(m.a,{children:Object(u.jsx)(b.b,{to:"/home",children:"Home"})}),Object(u.jsx)(m.a,{active:!0,children:"About Us"})]}),Object(u.jsxs)("div",{className:"col-12",children:[Object(u.jsx)("h3",{children:"About Us"}),Object(u.jsx)("hr",{})]})]}),Object(u.jsxs)("div",{className:"row row-content",children:[Object(u.jsxs)("div",{className:"col-12 col-md-6",children:[Object(u.jsx)("h2",{children:"Our History"}),Object(u.jsx)("p",{children:"The brand Haolao was founded in 2011. With over 10 years of development, Haolao International Holding Ltd. has become a world-renowned catering enterprise. By the end of June 30, 2020 ,Haolao has opened 20 chain restaurants all over the world. Over the years, Haolao has withstood the challenges of the market as well as customers, and has successfully forged a quality hot pot brand which has earned a reputation for itself. Haolao combines kinds of characteristics of hot pot in many places of China. It gives the highest priority to continuously improving the quality and safety of its food products, providing more thoughtful services to its customers while delivering healthier, safer and more nutritious food."}),Object(u.jsxs)("p",{children:["The restaurant traces its humble beginnings to ",Object(u.jsx)("em",{children:"Hao Li"}),", who featured for the first time the world's best cuisines in a pan."]})]}),Object(u.jsx)("div",{className:"col-12 col-md-5",children:Object(u.jsxs)(o.a,{children:[Object(u.jsx)($.a,{className:"bg-primary text-white",children:"Facts At a Glance"}),Object(u.jsx)(p.a,{children:Object(u.jsxs)("dl",{className:"row p-1",children:[Object(u.jsx)("dt",{className:"col-6",children:"Started"}),Object(u.jsx)("dd",{className:"col-6",children:"3 Mar. 2015"}),Object(u.jsx)("dt",{className:"col-6",children:"Major Stake Holder"}),Object(u.jsx)("dd",{className:"col-6",children:"HK Fine Foods Inc."}),Object(u.jsx)("dt",{className:"col-6",children:"Last Year's Turnover"}),Object(u.jsx)("dd",{className:"col-6",children:"$1,250,375,000"}),Object(u.jsx)("dt",{className:"col-6",children:"Employees"}),Object(u.jsx)("dd",{className:"col-6",children:"1000"})]})})]})}),Object(u.jsx)("div",{className:"col-12",children:Object(u.jsx)(o.a,{children:Object(u.jsx)(p.a,{children:Object(u.jsxs)("blockquote",{className:"blockquote",children:[Object(u.jsx)("p",{className:"mb-0",children:"The best hotpot I have ever had!"}),Object(u.jsx)("br",{}),Object(u.jsxs)("footer",{className:"blockquote-footer",children:["Tony Ma",Object(u.jsx)("cite",{title:"Source Title",children:"   June, 2016"})]})]})})})})]}),Object(u.jsxs)("div",{className:"row row-content",children:[Object(u.jsx)("div",{className:"col-12",children:Object(u.jsx)("h2",{children:"Corporate Leadership"})}),Object(u.jsx)("div",{className:"col-12",children:Object(u.jsx)(Q.a,{list:!0,children:t})})]})]})},te=s(16),se=s(85),ae=s(86),ce=s(90),ne=s(89),ie=s(54),re=s(53),oe=s.n(re),de={width:"100%",height:"100%"},le={position:"relative",width:"100%",height:"20rem"},je=function(e){Object(ce.a)(s,e);var t=Object(ne.a)(s);function s(e){var a;return Object(se.a)(this,s),(a=t.call(this,e)).handleChange=function(e){a.setState({address:e})},a.handleSelect=function(e){a.setState({address:e}),Object(re.geocodeByAddress)(e).then((function(e){return Object(re.getLatLng)(e[0])})).then((function(e){a.setState({mapCenter:e})})).catch((function(e){return console.error("Error",e)}))},a.state={address:"",showingInfoWindow:!1,activeMarker:{},selectedPlace:{},mapCenter:{lat:49.2827291,lng:-123.1207375}},a}return Object(ae.a)(s,[{key:"render",value:function(){return Object(u.jsxs)("div",{id:"googleMaps",children:[Object(u.jsx)(oe.a,{value:this.state.address,onChange:this.handleChange,onSelect:this.handleSelect,children:function(e){var t=e.getInputProps,s=e.suggestions,a=e.getSuggestionItemProps,c=e.loading;return Object(u.jsxs)("div",{children:[Object(u.jsx)("input",Object(te.a)({},t({placeholder:"Search Places ...",className:"location-search-input"}))),Object(u.jsxs)("div",{className:"autocomplete-dropdown-container",children:[c&&Object(u.jsx)("div",{children:"Loading..."}),s.map((function(e){var t=e.active?"suggestion-item--active":"suggestion-item",s=e.active?{backgroundColor:"#fafafa",cursor:"pointer"}:{backgroundColor:"#ffffff",cursor:"pointer"};return Object(u.jsx)("div",Object(te.a)(Object(te.a)({},a(e,{className:t,style:s})),{},{children:Object(u.jsx)("span",{children:e.description})}))}))]})]})}}),Object(u.jsx)(ie.Map,{google:this.props.google,initialCenter:{lat:this.state.mapCenter.lat,lng:this.state.mapCenter.lng},style:de,containerStyle:le,center:{lat:this.state.mapCenter.lat,lng:this.state.mapCenter.lng},children:Object(u.jsx)(ie.Marker,{position:{lat:this.state.mapCenter.lat,lng:this.state.mapCenter.lng}})})]})}}]),s}(a.Component),he=Object(ie.GoogleApiWrapper)({apiKey:"AIzaSyCSi_nSBVPcSQ_zTpWML0A9rreCktvUIyQ"})(je),me=function(e){return e&&e.length},be=function(e){return function(t){return!t||t.length<=e}},ue=function(e){return function(t){return t&&t.length>=e}},xe=function(e){return!isNaN(Number(e))},Oe=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)};var fe=function(e){return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)(h.a,{children:[Object(u.jsx)(m.a,{children:Object(u.jsx)(b.b,{to:"/home",children:"Home"})}),Object(u.jsx)(m.a,{active:!0,children:"Contact Us"})]}),Object(u.jsxs)("div",{className:"col-12",children:[Object(u.jsx)("h3",{children:"Contact Us"}),Object(u.jsx)("hr",{})]})]}),Object(u.jsxs)("div",{className:"row row-content",children:[Object(u.jsxs)("div",{className:"col-12 col-sm-4 ",children:[Object(u.jsx)("h3",{children:"Location Information"}),Object(u.jsx)("h5",{children:"Our Address"}),Object(u.jsxs)("address",{className:"addressFont",children:["453 West 12th Ave ",Object(u.jsx)("br",{}),"Vancouver, BC ",Object(u.jsx)("br",{}),"V5Y 1V4",Object(u.jsx)("br",{}),"Canada",Object(u.jsx)("br",{}),Object(u.jsx)("i",{className:"fa fa-phone"}),": +852 1234 5678",Object(u.jsx)("br",{}),Object(u.jsx)("i",{className:"fa fa-fax"}),": +852 8765 4321",Object(u.jsx)("br",{}),Object(u.jsx)("i",{className:"fa fa-envelope"}),": ",Object(u.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(u.jsxs)("div",{className:"col-12 col-sm-7  ",children:[Object(u.jsx)("h5",{children:"Map of our Location"}),Object(u.jsx)(he,{className:"gglMap"})]})]}),Object(u.jsxs)("div",{className:"row row-content",children:[Object(u.jsx)("div",{className:"col-12",children:Object(u.jsx)("h3",{children:"Send us your Feedback"})}),Object(u.jsx)("div",{className:"col-12 col-md-9",children:Object(u.jsxs)(L.Form,{model:"feedback",onSubmit:function(t){return function(t){alert("Current State is: "+JSON.stringify(t)),e.resetFeedbackForm()}(t)},children:[Object(u.jsxs)(I.a,{className:"form-group",children:[Object(u.jsx)(k.a,{htmlFor:"firstname",md:2,children:"First Name"}),Object(u.jsxs)(S.a,{md:10,children:[Object(u.jsx)(L.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:me,minLength:ue(3),maxLength:be(15)}}),Object(u.jsx)(L.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(u.jsxs)(I.a,{className:"form-group",children:[Object(u.jsx)(k.a,{htmlFor:"lastname",md:2,children:"Last Name"}),Object(u.jsxs)(S.a,{md:10,children:[Object(u.jsx)(L.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:me,minLength:ue(3),maxLength:be(15)}}),Object(u.jsx)(L.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(u.jsxs)(I.a,{className:"form-group",children:[Object(u.jsx)(k.a,{htmlFor:"telnum",md:2,children:"Contact Tel."}),Object(u.jsxs)(S.a,{md:10,children:[Object(u.jsx)(L.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. Number",className:"form-control",validators:{required:me,minLength:ue(3),maxLength:be(15),isNumber:xe}}),Object(u.jsx)(L.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}})]})]}),Object(u.jsxs)(I.a,{className:"form-group",children:[Object(u.jsx)(k.a,{htmlFor:"email",md:2,children:"Email"}),Object(u.jsxs)(S.a,{md:10,children:[Object(u.jsx)(L.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:me,validEmail:Oe}}),Object(u.jsx)(L.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}})]})]}),Object(u.jsxs)(I.a,{className:"form-group",children:[Object(u.jsx)(S.a,{md:{size:6,offset:2},children:Object(u.jsx)("div",{className:"form-check",children:Object(u.jsxs)(k.a,{check:!0,children:[Object(u.jsx)(L.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," "," ",Object(u.jsx)("strong",{children:"May we contact you?"})]})})}),Object(u.jsx)(S.a,{md:{size:3,offset:1},children:Object(u.jsxs)(L.Control.select,{model:".contactType",name:"contactType",className:"form-control",children:[Object(u.jsx)("option",{children:"Tel."}),Object(u.jsx)("option",{children:"Email"})]})})]}),Object(u.jsxs)(I.a,{className:"form-group",children:[Object(u.jsx)(k.a,{htmlFor:"message",md:2,children:"Your Feedback"}),Object(u.jsx)(S.a,{md:10,children:Object(u.jsx)(L.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"})})]}),Object(u.jsx)(I.a,{className:"form-group",children:Object(u.jsx)(S.a,{md:{size:10,offset:2},children:Object(u.jsx)(N.a,{type:"submit",color:"primary",children:"Send Feedback"})})})]})})]})]})},ge="ADD_COMMENT",pe="DISHES_LOADING",ve="DISHES_FAILED",Ne="ADD_DISHES",ye=[{id:0,name:"Spicy Soup",image:"/assets/images/spicy.png",category:"mains",label:"Hot",price:"4.99",featured:!0,description:"This soup base is made by boiling high-quality beef tallow, green Sichuan pepper, red Sichuan pepper and a variety of peppers. It has rich tastes with red color and becomes more fragrant while boiling. Serve with crushed garlic and sesame oil dip, that is the way to eat!"},{id:1,name:"Seafood soup",image:"/assets/images/seafood.png",category:"appetizer",label:"",price:"1.99",featured:!1,description:"Modern craft is adopted to extract meat concentrated bone soup. Different condiments can be matched according to own preference. It tastes better with sesame sauce. It is recommended for boiling seafoods and vegetables."},{id:2,name:"Tomato soup",image:"/assets/images/tomato.png",category:"appetizer",label:"New",price:"1.99",featured:!1,description:"Selected tomatoes that have enjoyed abundant sunshine are made into sauce. The sauce is then fried to make the tomato soup base. It is recommended with fresh fishes."},{id:3,name:"Mushroom Soup",image:"/assets/images/mashroom.png",category:"dessert",label:"",price:"2.99",featured:!1,description:"The soup base tastes refreshing, and mushroom is rich in flavor. It is recommended for boiling mushrooms."}],we=function(){return{type:pe}},Ce=function(e){return{type:Ne,payload:e}},Ie=s(11),ke=s(21),Se=Object(Ie.g)(Object(ke.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{addComment:function(t,s,a,c){return e(function(e,t,s,a){return{type:ge,payload:{dishId:e,rating:t,author:s,comment:a}}}(t,s,a,c))},fetchDishes:function(){e((function(e){e(we()),setTimeout((function(){e(Ce(ye))}),2e3)}))},resetFeedbackForm:function(){e(L.actions.reset("feedback"))}}}))((function(e){var t=Object(a.useState)(!1),s=Object(r.a)(t,2),c=(s[0],s[1]),n=Object(a.useState)(""),i=Object(r.a)(n,2),o=(i[0],i[1]);Object(a.useEffect)((function(){e.fetchDishes()}),[]);return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(V,{}),Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)(Ie.d,{children:[Object(u.jsx)(Ie.b,{path:"/home",component:function(){return Object(u.jsx)(K,{dish:e.dishes.dishes.filter((function(e){return e.featured}))[0],promotion:e.promotions.filter((function(e){return e.featured}))[0],leader:e.leaders.filter((function(e){return e.featured}))[0],dishesLoading:e.dishes.isLoading,dishesErrMess:e.dishes.errMess})}}),Object(u.jsx)(Ie.b,{exact:!0,path:"/menu",component:function(){return Object(u.jsx)(g,{dishes:e.dishes,clickon:function(e){return function(e){isNaN(e)||(c(!0),o(e))}(e)}})}}),Object(u.jsx)(Ie.b,{path:"/menu/:dishId",component:function(t){return function(t){var s=t.match;return Object(u.jsx)(E,{dish:e.dishes.dishes.filter((function(e){return e.id===parseInt(s.params.dishId,10)}))[0],comments:e.comments.filter((function(e){return e.dishId===parseInt(s.params.dishId,10)})),addComment:e.addComment,isLoading:e.dishes.isLoading,errMess:e.dishes.errMess})}(t)}}),Object(u.jsx)(Ie.b,{path:"/aboutus",component:function(){return Object(u.jsx)(ee,{leaders:e.leaders})}}),Object(u.jsx)(Ie.b,{exact:!0,path:"/contactus",component:function(){return Object(u.jsx)(fe,{resetFeedbackForm:e.resetFeedbackForm})}}),Object(u.jsx)(Ie.a,{to:"/home"})]})}),Object(u.jsx)(Y,{})]})}))),Le=s(29),Me=s(87),Te=s(88),Fe=s.n(Te),Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ne:return Object(te.a)(Object(te.a)({},e),{},{isLoading:!1,errMess:null,dishes:t.payload});case pe:return Object(te.a)(Object(te.a)({},e),{},{isLoading:!0,errMess:null,dishes:[]});case ve:return Object(te.a)(Object(te.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},He=[{id:0,dishId:0,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:1,dishId:0,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:2,dishId:0,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:3,dishId:0,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:4,dishId:0,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:5,dishId:1,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:6,dishId:1,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:7,dishId:1,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:8,dishId:1,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:9,dishId:1,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:10,dishId:2,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:11,dishId:2,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:12,dishId:2,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:13,dishId:2,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:14,dishId:2,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:15,dishId:3,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:16,dishId:3,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:17,dishId:3,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:18,dishId:3,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:19,dishId:3,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"}],Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ge:var s=t.payload;return s.date=(new Date).toISOString(),s.id=e.length,e.concat(s);default:return e}},Ze=[{id:0,name:"Sichuan Hotpot",image:"/assets/images/promotion.jpg",label:"New",price:"19.99",featured:!0,description:"It is hotter after fring green pepper, red fresh pepper and Chinese prickly ash. It tastes spicy and refreshing, and the pepper is rich in flavor. It is recommended for boiling crispy and chewy animal products."}],qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Pe=[{id:0,name:"Hao Li",image:"/assets/images/HaoLi.jpg",designation:"CEO and Chief chef",abbr:"CEO",featured:!1,description:"Our CEO, Hao, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."},{id:1,name:"Jimmy Tang",image:"/assets/images/JimmyTang.jpg",designation:"Chief Food Officer",abbr:"CFO",featured:!1,description:"Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!"},{id:2,name:"Bill Carter",image:"/assets/images/BillCarter.jpg",designation:"Chief Taste Officer",abbr:"CTO",featured:!1,description:"Blessed with the most discerning gustatory sense, Bill Carter, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick."},{id:3,name:"Ting Yang",image:"/assets/images/TingYang.jpg",designation:"Executive Chef",abbr:"EC",featured:!0,description:"Championship of the 4th Hotpot competition in Sichuan Province. The most satisfied chef rated by more than 10,000 customers."}],Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;return t.type,e},De={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},ze=Object(Le.createStore)(Object(Le.combineReducers)(Object(te.a)({dishes:Ee,comments:Ae,promotions:qe,leaders:Re},Object(L.createForms)({feedback:De}))),Object(Le.applyMiddleware)(Me.a,Fe.a));var _e=function(){return Object(u.jsx)(ke.Provider,{store:ze,children:Object(u.jsx)(b.a,{children:Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(Se,{})})})})},Je=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,195)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),a(e),c(e),n(e),i(e)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(_e,{})}),document.getElementById("root")),Je()},98:function(e,t,s){},99:function(e,t,s){}},[[166,1,2]]]);
//# sourceMappingURL=main.77b2c9de.chunk.js.map