(this.webpackJsonpreact_website=this.webpackJsonpreact_website||[]).push([[0],{140:function(e,s,t){"use strict";t.r(s);var a=t(3),c=t.n(a),n=t(18),i=t.n(n),r=(t(88),t(89),t(90),t(91),t(92),t(26)),o=t(141),l=t(142),d=t(143),j=t(144),h=t(145),m=t(146),b=t(13),u=t(1),x=function(){return Object(u.jsxs)("div",{className:"col-12",children:[Object(u.jsx)("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),Object(u.jsx)("p",{children:"Loading . . ."})]})},O=function(e){var s=e.dish.image;return console.log("RenderMenuItem props: ",e),Object(u.jsx)(o.a,{children:Object(u.jsxs)(b.b,{to:"/menu/".concat(e.dish.id),children:[Object(u.jsx)(l.a,{width:"100%",src:"/react_website/"+s,alt:e.dish.name}),Object(u.jsx)(d.a,{children:Object(u.jsxs)(j.a,{children:[e.dish.name," "]})})]})})},f=function(e){return console.log("Rendermenu props: ",e),e.dishes.isLoading?Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)(x,{})})}):e.dishes.errMess?Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-12",children:Object(u.jsx)("h4",{children:e.dishes.errMess})})})}):(console.log("Rendermenu props.dishes.isLoading ",e.dishes.isLoading),e.dishes.dishes.map((function(s){return Object(u.jsx)("div",{className:"col-xs-12 col-md-5 m-4",children:Object(u.jsx)(O,{dish:s,clickon:function(){return e.clickon(s.id)}})},s.id)})))},g=function(e){console.log("Menu component: props"),console.log(e);e.dishes.dishes;return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)(h.a,{children:[Object(u.jsx)(m.a,{children:Object(u.jsx)(b.b,{to:"/home",children:"Home"})}),Object(u.jsx)(m.a,{active:!0,children:"Menu"})]}),Object(u.jsxs)("div",{className:"col-12",children:[Object(u.jsx)("h3",{children:"Menu"}),Object(u.jsx)("hr",{})]})]}),Object(u.jsx)("div",{className:"row",children:Object(u.jsx)(f,{dishes:e.dishes,clickon:e.clickon})})]})},p=t(147),v=t(148),N=t(149),y=t(168),w=t(150),I=t(151),C=t(152),k=t(153),L=t(154),T=t(9),M=function(e){var s=e.comments;return s?Object(u.jsxs)("div",{children:[Object(u.jsx)("ul",{children:s.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:e.comment}),Object(u.jsxs)("p",{children:["-- ",e.author,", ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date)))]})]},e.id)},e.id)}))}),Object(u.jsx)(F,{addComment:e.addComment,dishId:e.dishId})]}):Object(u.jsx)("div",{})},S=function(e){return Object(u.jsxs)(o.a,{children:[Object(u.jsx)(l.a,{top:!0,src:"/react_website/"+e.dish.image,alt:e.dish.name}),Object(u.jsxs)(p.a,{children:[Object(u.jsx)(j.a,{children:e.dish.name}),Object(u.jsx)(v.a,{children:e.dish.description})]})]})},F=function(e){var s,t=Object(a.useState)(!1),n=Object(r.a)(t,2),i=n[0],o=n[1];function l(){o(!i)}return Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsxs)(N.a,{outline:!0,onClick:l,children:[Object(u.jsx)("span",{className:"fa fa-sign-in fa-lg"})," Submit Comment"]}),Object(u.jsxs)(y.a,{isOpen:i,toggle:l,children:[Object(u.jsx)(w.a,{toggle:l,children:" Submit Comment"}),Object(u.jsx)(I.a,{children:Object(u.jsxs)(T.LocalForm,{onSubmit:function(s){return function(s){e.addComment(e.dishId,s.rating,s.author,s.comment)}(s)},children:[Object(u.jsx)(C.a,{className:"form-group",children:Object(u.jsx)(k.a,{htmlFor:"rating",md:2,children:"Rating"})}),Object(u.jsx)(C.a,{className:"form-group",children:Object(u.jsx)(L.a,{children:Object(u.jsxs)(T.Control.select,{model:".rating",id:"rating",name:"rating",placeholder:"rating",className:"form-control",children:[Object(u.jsx)("option",{value:"none",selected:!0,disabled:!0,hidden:!0,children:" Select an Option"}),Object(u.jsx)("option",{value:"1",children:"1"}),Object(u.jsx)("option",{value:"2",children:"2"}),Object(u.jsx)("option",{value:"3",children:"3"}),Object(u.jsx)("option",{value:"4",children:"4"}),Object(u.jsx)("option",{value:"5",children:"5"})]})})}),Object(u.jsx)(C.a,{className:"form-group",children:Object(u.jsx)(k.a,{htmlFor:"author",md:4,children:"Your Name"})}),Object(u.jsx)(C.a,{className:"form-group",children:Object(u.jsxs)(L.a,{children:[Object(u.jsx)(T.Control.text,{model:".author",id:"author",name:"author",placeholder:"Your Name",className:"form-control",validators:{required:function(e){return e&&e.length},minLength:(s=3,function(e){return e&&e.length>=s}),maxLength:function(e){return function(s){return!s||s.length<=e}}(15)}}),Object(u.jsx)(T.Errors,{className:"text-danger",model:".author",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})}),Object(u.jsx)(C.a,{className:"form-group",children:Object(u.jsx)(k.a,{htmlFor:"comment",md:2,children:"Comment"})}),Object(u.jsx)(C.a,{className:"form-group",children:Object(u.jsx)(L.a,{children:Object(u.jsx)(T.Control.textarea,{model:".comment",id:"comment",name:"comment",rows:"6",className:"form-control"})})}),Object(u.jsx)(C.a,{className:"form-group",children:Object(u.jsx)(L.a,{children:Object(u.jsx)(N.a,{type:"submit",color:"primary",md:4,children:"Submit"})})})]})})]})]})},E=function(e){return e.isLoading?Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)(x,{})})}):e.errMess?Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("h4",{children:e.errMess})})}):null!=e.dish?Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)(h.a,{children:[Object(u.jsx)(m.a,{children:Object(u.jsx)(b.b,{to:"/menu",children:"Menu"})}),Object(u.jsx)(m.a,{active:!0,children:e.dish.name})]}),Object(u.jsxs)("div",{className:"col-12",children:[Object(u.jsx)("h3",{children:e.dish.name}),Object(u.jsx)("hr",{})]})]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(u.jsx)(S,{dish:e.dish})}),Object(u.jsxs)("div",{className:"col-12 col-md-5 m-1",children:[Object(u.jsx)("h4",{children:"Comments"}),Object(u.jsx)(M,{comments:e.comments,addComment:e.addComment,dishId:e.dish.id})]})]})]}):Object(u.jsx)("div",{children:Object(u.jsx)("p",{})})},H=t(40),R=t(155),Z=t(156),q=t(157),D=t(158),A=t(159),J=t(160),P=t(161),z=t(162),_=t(163),B=t(164),U=t(34),Y=t(0),G=function(){var e,s=Object(a.useState)(!1),t=Object(r.a)(s,2),n=t[0],i=t[1],o=Object(a.useState)(!1),l=Object(r.a)(o,2),d=l[0],j=l[1],h={username:"",password:"",remember:""};function m(){j(!d)}return Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsx)(R.a,{dark:!0,className:"headerNavBar",expand:"md",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(Z.a,{onClick:function(){i(!n)}}),Object(u.jsx)(q.a,{className:"mr-auto",href:"/",children:Object(u.jsx)("img",{src:"/react_website/assets/images/logo.svg",height:"50",width:"50",alt:"Ristorante Con Fusion"})}),Object(u.jsxs)(D.a,{isOpen:n,navbar:!0,className:"row callapseNav",children:[Object(u.jsxs)(A.a,{navbar:!0,className:"col-md-7 row",children:[Object(u.jsx)(J.a,{className:"col-md-3",children:Object(u.jsxs)(b.c,{className:"normal",activeClassName:"active",to:"/home",children:[Object(u.jsx)(Y.b.Provider,{value:{color:"#ffffff",size:"2em",className:"global-class-name"},children:Object(u.jsx)(U.a,{})}),"\xa0  Home"]})}),Object(u.jsx)(J.a,{className:"col-md-3",children:Object(u.jsxs)(b.c,{className:"normal",activeClassName:"active",to:"/aboutus",children:[Object(u.jsx)(Y.b.Provider,{value:{color:"#ffffff",size:"2em",className:"global-class-name"},children:Object(u.jsx)(U.b,{})}),"\xa0  Info"]})}),Object(u.jsx)(J.a,{className:"col-md-3",children:Object(u.jsxs)(b.c,{className:"normal",activeClassName:"active",to:"/menu",children:[Object(u.jsx)(Y.b.Provider,{value:{color:"#ffffff",size:"2em",className:"global-class-name"},children:Object(u.jsx)(U.e,{})}),"\xa0 Menu"]})}),Object(u.jsx)(J.a,{className:"col-md-3",children:Object(u.jsxs)(b.c,{className:"normal",activeClassName:"active",to:"/contactus",children:[Object(u.jsx)(Y.b.Provider,{value:{color:"#ffffff",size:"2em",className:"global-class-name"},children:Object(u.jsx)(U.c,{})}),"\xa0 Contact"]})})]}),Object(u.jsx)(A.a,(e={className:"ml-auto",navbar:!0},Object(H.a)(e,"className","col-md-5 justify-content-end"),Object(H.a)(e,"children",Object(u.jsx)(J.a,{children:Object(u.jsxs)(N.a,{outline:!0,onClick:m,className:"loginBtn",children:[Object(u.jsx)(Y.b.Provider,{value:{color:"#ffffff",size:"2em",className:"global-class-name"},children:Object(u.jsx)(U.d,{})}),"Login"]})})),e))]})]})}),Object(u.jsx)(P.a,{children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row row-header",children:Object(u.jsxs)("div",{className:"col-12 col-sm-6",children:[Object(u.jsx)("h1",{children:"Haolao hotpot"}),Object(u.jsx)("p",{children:"Taking customer experience as our top priority, we always provide innovative and pleasant services to our customers. All the personalized services offered by our restaurants are derived from the innovative ideas of our staff. These warm and personalized services turn every meal into a happy experience. "})]})})})}),Object(u.jsxs)(y.a,{isOpen:d,toggle:m,children:[Object(u.jsx)(w.a,{toggle:m,children:" Login"}),Object(u.jsx)(I.a,{children:Object(u.jsxs)(z.a,{onSubmit:function(e){m(),e.preventDefault()},children:[Object(u.jsxs)(_.a,{children:[Object(u.jsx)(k.a,{htmlFor:"username",children:"Username"}),Object(u.jsx)(B.a,{type:"text",id:"username",name:"username",innerRef:function(e){return h.username=e}})]}),Object(u.jsxs)(_.a,{children:[Object(u.jsx)(k.a,{htmlFor:"password",children:"Password"}),Object(u.jsx)(B.a,{type:"password",id:"password",name:"password",innerRef:function(e){return h.password=e}})]}),Object(u.jsx)(_.a,{check:!0,children:Object(u.jsxs)(k.a,{check:!0,children:[Object(u.jsx)(B.a,{type:"checkbox",name:"remember",innerRef:function(e){return h.remember=e}}),"Remember me"]})}),Object(u.jsx)(N.a,{type:"submit",value:"submit",color:"primary",children:"Login"})]})})]})]})};var V=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),Object(u.jsx)("br",{}),Object(u.jsx)(P.a,{children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row  justify-content-center",children:[Object(u.jsxs)("div",{className:"row row-header  justify-content-center ",children:[Object(u.jsx)("div",{className:"col-xs-12 col-md",children:Object(u.jsxs)("a",{className:"row  justify-content-center",target:"_blank",href:"https://www.linkedin.com/in/hao-li-654568176/",children:[Object(u.jsx)("div",{className:"col-xs-5 col-md-2 ",children:Object(u.jsx)("i",{className:" fa fa-linkedin  fa-3x"})}),Object(u.jsxs)("div",{className:"col-xs-5 col-md-5 ",children:[Object(u.jsx)("h4",{children:"Linkedin "}),Object(u.jsx)("p",{children:"Connect with me on Linkedin"})]})]})}),Object(u.jsx)("div",{className:"col-xs-12 col-md justify-content-center",children:Object(u.jsxs)("a",{className:"row justify-content-center",href:"mailto:lihaokx@gmail.com",children:[Object(u.jsx)("div",{className:"col-xs-5 col-md-2 ",children:Object(u.jsx)("i",{className:"  fa fa-envelope  fa-3x"})}),Object(u.jsxs)("div",{className:"col-xs-5 col-md-5 ",children:[Object(u.jsx)("h4",{children:"Email "}),Object(u.jsx)("p",{children:"lihaokx@gmail.com"})]})]})})]}),Object(u.jsxs)("div",{className:"row row-header  top-buffer justify-content-end ",children:[Object(u.jsx)("div",{className:"col-xs-12 col-md ",children:Object(u.jsxs)("a",{className:"row justify-content-center",target:"_blank",href:"https://github.com/lihaokx",children:[Object(u.jsx)("div",{className:"col-xs-5 col-md-2 ",children:Object(u.jsx)("i",{className:" fa fa-github  fa-3x"})}),Object(u.jsxs)("div",{className:"col-xs-5 col-md-5 ",children:[Object(u.jsx)("h4",{children:"Github: lihaokx "}),Object(u.jsx)("p",{children:"Learn from my projects  "})]})]})}),Object(u.jsx)("div",{className:"col-xs-12 col-md  ",children:Object(u.jsxs)("a",{className:"row justify-content-center",href:"tel:8192109056",children:[Object(u.jsx)("div",{className:"col-xs-5 col-md-2 ",children:Object(u.jsx)("i",{className:"  fa fa-phone  fa-3x"})}),Object(u.jsxs)("div",{className:"col-xs-5 col-md-5 ",children:[Object(u.jsx)("h4",{children:"Mobile phone "}),Object(u.jsx)("p",{children:"(819)-210-9056"})]})]})})]})]})})})]})},K=t(165);function W(e){var s=e.item,t=e.isLoading,a=e.errMess;return console.log("home items: ",s),t?Object(u.jsx)(x,{}):a?Object(u.jsx)("h4",{children:a}):Object(u.jsxs)(o.a,{children:[Object(u.jsx)(l.a,{src:"/react_website"+s.image,alt:s.name}),Object(u.jsxs)(p.a,{children:[Object(u.jsx)(j.a,{children:s.name}),s.designation?Object(u.jsx)(K.a,{children:s.designation}):null,Object(u.jsx)(v.a,{children:s.description})]})]})}var $=function(e){return Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row align-items-start",children:[Object(u.jsx)("div",{className:"col-xs-12 col-md m-1",children:Object(u.jsx)(W,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})}),Object(u.jsx)("div",{className:"col-xs-12 col-md  m-1",children:Object(u.jsx)(W,{item:e.promotion})}),Object(u.jsx)("div",{className:"col-xs-12 col-md m-1",children:Object(u.jsx)(W,{item:e.leader})})]})})},Q=t(166),X=t(167),ee=function(e){return Object(u.jsx)("div",{className:"col-12 mt-5",children:Object(u.jsxs)(Q.a,{className:"row",children:[Object(u.jsx)(Q.a,{left:!0,middle:!0,href:"#",className:"col-12 col-md-2",children:Object(u.jsx)(Q.a,{object:!0,src:"/react_website/"+e.leader.image,className:"w-100 h-auto",alt:"props.leader.name"})}),Object(u.jsxs)(Q.a,{body:!0,className:"col-12 col-md-10",children:[Object(u.jsx)(Q.a,{heading:!0,children:e.leader.name}),Object(u.jsx)("h6",{children:e.leader.designation}),Object(u.jsxs)("p",{children:[e.leader.description,"    "]})]})]})},e.leader.id)};var se=function(e){var s=e.leaders.map((function(e){return Object(u.jsx)("div",{className:"col-12 mt-5",children:Object(u.jsx)(ee,{leader:e})},e.id)}));return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)(h.a,{children:[Object(u.jsx)(m.a,{children:Object(u.jsx)(b.b,{to:"/home",children:"Home"})}),Object(u.jsx)(m.a,{active:!0,children:"About Us"})]}),Object(u.jsxs)("div",{className:"col-12",children:[Object(u.jsx)("h3",{children:"About Us"}),Object(u.jsx)("hr",{})]})]}),Object(u.jsxs)("div",{className:"row row-content",children:[Object(u.jsxs)("div",{className:"col-12 col-md-6",children:[Object(u.jsx)("h2",{children:"Our History"}),Object(u.jsx)("p",{children:"The brand Haolao was founded in 2011. With over 10 years of development, Haolao International Holding Ltd. has become a world-renowned catering enterprise. By the end of June 30, 2020 ,Haolao has opened 20 chain restaurants all over the world. Over the years, Haolao has withstood the challenges of the market as well as customers, and has successfully forged a quality hot pot brand which has earned a reputation for itself. Haolao combines kinds of characteristics of hot pot in many places of China. It gives the highest priority to continuously improving the quality and safety of its food products, providing more thoughtful services to its customers while delivering healthier, safer and more nutritious food."}),Object(u.jsxs)("p",{children:["The restaurant traces its humble beginnings to ",Object(u.jsx)("em",{children:"Hao Li"}),", who featured for the first time the world's best cuisines in a pan."]})]}),Object(u.jsx)("div",{className:"col-12 col-md-5",children:Object(u.jsxs)(o.a,{children:[Object(u.jsx)(X.a,{className:"bg-primary text-white",children:"Facts At a Glance"}),Object(u.jsx)(p.a,{children:Object(u.jsxs)("dl",{className:"row p-1",children:[Object(u.jsx)("dt",{className:"col-6",children:"Started"}),Object(u.jsx)("dd",{className:"col-6",children:"3 Mar. 2015"}),Object(u.jsx)("dt",{className:"col-6",children:"Major Stake Holder"}),Object(u.jsx)("dd",{className:"col-6",children:"HK Fine Foods Inc."}),Object(u.jsx)("dt",{className:"col-6",children:"Last Year's Turnover"}),Object(u.jsx)("dd",{className:"col-6",children:"$1,250,375,000"}),Object(u.jsx)("dt",{className:"col-6",children:"Employees"}),Object(u.jsx)("dd",{className:"col-6",children:"1000"})]})})]})}),Object(u.jsx)("div",{className:"col-12",children:Object(u.jsx)(o.a,{children:Object(u.jsx)(p.a,{className:"bg-faded",children:Object(u.jsxs)("blockquote",{className:"blockquote",children:[Object(u.jsx)("p",{className:"mb-0",children:"The best hotpot I have ever had!"}),Object(u.jsx)("br",{}),Object(u.jsxs)("footer",{className:"blockquote-footer",children:["Tony Ma",Object(u.jsx)("cite",{title:"Source Title",children:"   June, 2016"})]})]})})})})]}),Object(u.jsxs)("div",{className:"row row-content",children:[Object(u.jsx)("div",{className:"col-12",children:Object(u.jsx)("h2",{children:"Corporate Leadership"})}),Object(u.jsx)("div",{className:"col-12",children:Object(u.jsx)(Q.a,{list:!0,children:s})})]})]})},te=function(e){return e&&e.length},ae=function(e){return function(s){return!s||s.length<=e}},ce=function(e){return function(s){return s&&s.length>=e}},ne=function(e){return!isNaN(Number(e))},ie=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)};var re=function(e){return console.log("Contact component: props",e),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)(h.a,{children:[Object(u.jsx)(m.a,{children:Object(u.jsx)(b.b,{to:"/home",children:"Home"})}),Object(u.jsx)(m.a,{active:!0,children:"Contact Us"})]}),Object(u.jsxs)("div",{className:"col-12",children:[Object(u.jsx)("h3",{children:"Contact Us"}),Object(u.jsx)("hr",{})]})]}),Object(u.jsxs)("div",{className:"row row-content",children:[Object(u.jsx)("div",{className:"col-12",children:Object(u.jsx)("h3",{children:"Location Information"})}),Object(u.jsxs)("div",{className:"col-12 col-sm-4 offset-sm-1",children:[Object(u.jsx)("h5",{children:"Our Address"}),Object(u.jsxs)("address",{children:["121, Clear Water Bay Road",Object(u.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(u.jsx)("br",{}),"HONG KONG",Object(u.jsx)("br",{}),Object(u.jsx)("i",{className:"fa fa-phone"}),": +852 1234 5678",Object(u.jsx)("br",{}),Object(u.jsx)("i",{className:"fa fa-fax"}),": +852 8765 4321",Object(u.jsx)("br",{}),Object(u.jsx)("i",{className:"fa fa-envelope"}),": ",Object(u.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(u.jsx)("div",{className:"col-12 col-sm-6 offset-sm-1",children:Object(u.jsx)("h5",{children:"Map of our Location"})}),Object(u.jsx)("div",{className:"col-12 col-sm-11 offset-sm-1",children:Object(u.jsxs)("div",{className:"btn-group",role:"group",children:[Object(u.jsxs)("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678",children:[Object(u.jsx)("i",{className:"fa fa-phone"})," Call"]}),Object(u.jsxs)("a",{role:"button",className:"btn btn-info",children:[Object(u.jsx)("i",{className:"fa fa-skype"})," Skype"]}),Object(u.jsxs)("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net",children:[Object(u.jsx)("i",{className:"fa fa-envelope-o"})," Email"]})]})})]}),Object(u.jsxs)("div",{className:"row row-content",children:[Object(u.jsx)("div",{className:"col-12",children:Object(u.jsx)("h3",{children:"Send us your Feedback"})}),Object(u.jsx)("div",{className:"col-12 col-md-9",children:Object(u.jsxs)(T.Form,{model:"feedback",onSubmit:function(s){return function(s){alert("Current State is: "+JSON.stringify(s)),e.resetFeedbackForm()}(s)},children:[Object(u.jsxs)(C.a,{className:"form-group",children:[Object(u.jsx)(k.a,{htmlFor:"firstname",md:2,children:"First Name"}),Object(u.jsxs)(L.a,{md:10,children:[Object(u.jsx)(T.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:te,minLength:ce(3),maxLength:ae(15)}}),Object(u.jsx)(T.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(u.jsxs)(C.a,{className:"form-group",children:[Object(u.jsx)(k.a,{htmlFor:"lastname",md:2,children:"Last Name"}),Object(u.jsxs)(L.a,{md:10,children:[Object(u.jsx)(T.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:te,minLength:ce(3),maxLength:ae(15)}}),Object(u.jsx)(T.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(u.jsxs)(C.a,{className:"form-group",children:[Object(u.jsx)(k.a,{htmlFor:"telnum",md:2,children:"Contact Tel."}),Object(u.jsxs)(L.a,{md:10,children:[Object(u.jsx)(T.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. Number",className:"form-control",validators:{required:te,minLength:ce(3),maxLength:ae(15),isNumber:ne}}),Object(u.jsx)(T.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}})]})]}),Object(u.jsxs)(C.a,{className:"form-group",children:[Object(u.jsx)(k.a,{htmlFor:"email",md:2,children:"Email"}),Object(u.jsxs)(L.a,{md:10,children:[Object(u.jsx)(T.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:te,validEmail:ie}}),Object(u.jsx)(T.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}})]})]}),Object(u.jsxs)(C.a,{className:"form-group",children:[Object(u.jsx)(L.a,{md:{size:6,offset:2},children:Object(u.jsx)("div",{className:"form-check",children:Object(u.jsxs)(k.a,{check:!0,children:[Object(u.jsx)(T.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," "," ",Object(u.jsx)("strong",{children:"May we contact you?"})]})})}),Object(u.jsx)(L.a,{md:{size:3,offset:1},children:Object(u.jsxs)(T.Control.select,{model:".contactType",name:"contactType",className:"form-control",children:[Object(u.jsx)("option",{children:"Tel."}),Object(u.jsx)("option",{children:"Email"})]})})]}),Object(u.jsxs)(C.a,{className:"form-group",children:[Object(u.jsx)(k.a,{htmlFor:"message",md:2,children:"Your Feedback"}),Object(u.jsx)(L.a,{md:10,children:Object(u.jsx)(T.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"})})]}),Object(u.jsx)(C.a,{className:"form-group",children:Object(u.jsx)(L.a,{md:{size:10,offset:2},children:Object(u.jsx)(N.a,{type:"submit",color:"primary",children:"Send Feedback"})})})]})})]})]})},oe="ADD_COMMENT",le="DISHES_LOADING",de="DISHES_FAILED",je="ADD_DISHES",he=[{id:0,name:"Spicy Soup",image:"/assets/images/spicy.png",category:"mains",label:"Hot",price:"4.99",featured:!0,description:"This soup base is made by boiling high-quality beef tallow, green Sichuan pepper, red Sichuan pepper and a variety of peppers. It has rich tastes with red color and becomes more fragrant while boiling. Serve with crushed garlic and sesame oil dip, that is the way to eat!"},{id:1,name:"Seafood soup",image:"/assets/images/seafood.png",category:"appetizer",label:"",price:"1.99",featured:!1,description:"Modern craft is adopted to extract meat concentrated bone soup. Different condiments can be matched according to own preference. It tastes better with sesame sauce. It is recommended for boiling seafoods and vegetables."},{id:2,name:"Tomato soup",image:"/assets/images/tomato.png",category:"appetizer",label:"New",price:"1.99",featured:!1,description:"Selected tomatoes that have enjoyed abundant sunshine are made into sauce. The sauce is then fried to make the tomato soup base. It is recommended with fresh fishes."},{id:3,name:"Mushroom Soup",image:"/assets/images/mashroom.png",category:"dessert",label:"",price:"2.99",featured:!1,description:"The soup base tastes refreshing, and mushroom is rich in flavor. It is recommended for boiling mushrooms."}],me=function(){return{type:le}},be=function(e){return{type:je,payload:e}},ue=t(11),xe=t(20),Oe=Object(ue.g)(Object(xe.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{addComment:function(s,t,a,c){return e(function(e,s,t,a){return{type:oe,payload:{dishId:e,rating:s,author:t,comment:a}}}(s,t,a,c))},fetchDishes:function(){e((function(e){e(me()),setTimeout((function(){e(be(he))}),2e3)}))},resetFeedbackForm:function(){e(T.actions.reset("feedback"))}}}))((function(e){console.log("props of main"),console.log(e);var s=Object(a.useState)(!1),t=Object(r.a)(s,2),c=(t[0],t[1]),n=Object(a.useState)(""),i=Object(r.a)(n,2),o=(i[0],i[1]);Object(a.useEffect)((function(){e.fetchDishes()}),[]);return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(G,{}),Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)(ue.d,{children:[Object(u.jsx)(ue.b,{path:"/home",component:function(){return console.log("Home component: props"),console.log(e),Object(u.jsx)($,{dish:e.dishes.dishes.filter((function(e){return e.featured}))[0],promotion:e.promotions.filter((function(e){return e.featured}))[0],leader:e.leaders.filter((function(e){return e.featured}))[0],dishesLoading:e.dishes.isLoading,dishesErrMess:e.dishes.errMess})}}),Object(u.jsx)(ue.b,{exact:!0,path:"/menu",component:function(){return Object(u.jsx)(g,{dishes:e.dishes,clickon:function(e){return function(e){isNaN(e)||(c(!0),o(e))}(e)}})}}),Object(u.jsx)(ue.b,{path:"/menu/:dishId",component:function(s){return function(s){var t=s.match;return console.log("dish details: props"),console.log(e),Object(u.jsx)(E,{dish:e.dishes.dishes.filter((function(e){return e.id===parseInt(t.params.dishId,10)}))[0],comments:e.comments.filter((function(e){return e.dishId===parseInt(t.params.dishId,10)})),addComment:e.addComment,isLoading:e.dishes.isLoading,errMess:e.dishes.errMess})}(s)}}),Object(u.jsx)(ue.b,{path:"/aboutus",component:function(){return Object(u.jsx)(se,{leaders:e.leaders})}}),Object(u.jsx)(ue.b,{exact:!0,path:"/contactus",component:function(){return Object(u.jsx)(re,{resetFeedbackForm:e.resetFeedbackForm})}}),Object(u.jsx)(ue.a,{to:"/home"})]})}),Object(u.jsx)(V,{})]})}))),fe=t(21),ge=t(28),pe=t(82),ve=t(83),Ne=t.n(ve),ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},s=arguments.length>1?arguments[1]:void 0;switch(console.log("Dishes reducer  state: ",e),s.type){case je:return Object(fe.a)(Object(fe.a)({},e),{},{isLoading:!1,errMess:null,dishes:s.payload});case le:return Object(fe.a)(Object(fe.a)({},e),{},{isLoading:!0,errMess:null,dishes:[]});case de:return Object(fe.a)(Object(fe.a)({},e),{},{isLoading:!1,errMess:s.payload});default:return e}},we=[{id:0,dishId:0,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:1,dishId:0,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:2,dishId:0,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:3,dishId:0,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:4,dishId:0,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:5,dishId:1,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:6,dishId:1,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:7,dishId:1,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:8,dishId:1,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:9,dishId:1,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:10,dishId:2,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:11,dishId:2,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:12,dishId:2,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:13,dishId:2,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:14,dishId:2,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:15,dishId:3,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:16,dishId:3,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:17,dishId:3,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:18,dishId:3,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:19,dishId:3,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"}],Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case oe:var t=s.payload;return t.date=(new Date).toISOString(),t.id=e.length,e.concat(t);default:return e}},Ce=[{id:0,name:"Sichuan Hotpot",image:"/assets/images/promotion.jpg",label:"New",price:"19.99",featured:!0,description:"It is hotter after fring green pepper, red fresh pepper and Chinese prickly ash. It tastes spicy and refreshing, and the pepper is rich in flavor. It is recommended for boiling crispy and chewy animal products."}],ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,s=arguments.length>1?arguments[1]:void 0;return s.type,e},Le=[{id:0,name:"Hao Li",image:"/assets/images/HaoLi.jpg",designation:"CEO and Chief chef",abbr:"CEO",featured:!1,description:"Our CEO, Hao, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."},{id:1,name:"Jimmy Tang",image:"/assets/images/JimmyTang.jpg",designation:"Chief Food Officer",abbr:"CFO",featured:!1,description:"Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!"},{id:2,name:"Bill Carter",image:"/assets/images/BillCarter.jpg",designation:"Chief Taste Officer",abbr:"CTO",featured:!1,description:"Blessed with the most discerning gustatory sense, Bill Carter, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick."},{id:3,name:"Ting Yang",image:"/assets/images/TingYang.jpg",designation:"Executive Chef",abbr:"EC",featured:!0,description:"Championship of the 4th Hotpot competition in Sichuan Province. The most satisfied chef rated by more than 10,000 customers."}],Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,s=arguments.length>1?arguments[1]:void 0;return s.type,e},Me={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},Se=Object(ge.createStore)(Object(ge.combineReducers)(Object(fe.a)({dishes:ye,comments:Ie,promotions:ke,leaders:Te},Object(T.createForms)({feedback:Me}))),Object(ge.applyMiddleware)(pe.a,Ne.a));var Fe=function(){return Object(u.jsx)(xe.Provider,{store:Se,children:Object(u.jsx)(b.a,{children:Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(Oe,{})})})})},Ee=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,169)).then((function(s){var t=s.getCLS,a=s.getFID,c=s.getFCP,n=s.getLCP,i=s.getTTFB;t(e),a(e),c(e),n(e),i(e)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(Fe,{})}),document.getElementById("root")),Ee()},91:function(e,s,t){},92:function(e,s,t){}},[[140,1,2]]]);
//# sourceMappingURL=main.d290a82a.chunk.js.map