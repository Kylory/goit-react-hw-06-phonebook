(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{15:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__1XFIJ"}},16:function(t,e,n){t.exports={ContactsList:"ContactsList_ContactsList__13Qd3"}},17:function(t,e,n){t.exports={searchContacts:"SearchContacts_searchContacts__1qVSt"}},36:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var c,a,r=n(0),o=n.n(r),s=n(7),i=n.n(s),u=n(3),b=n(9),j=n(18),l=n(2),m=n(4),O=n(14),d=n.n(O),f=Object(m.b)("form/addContact",(function(t){var e=t.name,n=t.number;return{payload:{id:d.a.generate(),name:e,number:n}}})),h=Object(m.b)("form/deleteContact"),p=Object(m.b)("contactsList/filterContacts"),x=Object(m.c)(null!==(c=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==c?c:[],(a={},Object(b.a)(a,f,(function(t,e){var n=e.payload;return[].concat(Object(j.a)(t),[n])})),Object(b.a)(a,h,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),v=Object(m.c)("",Object(b.a)({},p,(function(t,e){return e.payload}))),C=Object(l.b)({contacts:x,filter:v}),g=Object(m.a)({reducer:C}),y=n(13),w=function(t){return t.contacts},S=function(t){return t.filter},_=function(t){var e=w(t),n=S(t);if(e&&n){var c=n.toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(c)}))}return e},N=n(15),k=n.n(N),F=n(1);function L(){var t=Object(r.useState)(""),e=Object(y.a)(t,2),n=e[0],c=e[1],a=Object(r.useState)(""),o=Object(y.a)(a,2),s=o[0],i=o[1],b=Object(u.c)(w),j=Object(u.b)(),l=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":c(a);break;case"number":i(a)}},m=function(){c(""),i("")};return Object(F.jsxs)("form",{className:k.a.contactForm,onSubmit:function(t){return t.preventDefault(),b&&b.find((function(t){return t.name===n}))?alert(n+" is already in contacts"):n?s?(j(f({name:n,number:s})),window.localStorage.setItem("contacts",JSON.stringify(b)),void m()):alert("Type some number"):alert("Type some name")},children:[Object(F.jsxs)("label",{children:["Name",Object(F.jsx)("input",{name:"name",type:"text",value:n,onChange:l})]}),Object(F.jsxs)("label",{children:["Number",Object(F.jsx)("input",{name:"number",type:"text",value:s,onChange:l})]}),Object(F.jsx)("button",{type:"submit",children:"Add contact"})]})}var J=n(16),I=n.n(J);function D(){var t=Object(u.c)(_);window.localStorage.setItem("contacts",JSON.stringify(t));var e=Object(u.b)();return Object(F.jsx)("ul",{className:I.a.ContactsList,children:t.map((function(t){return Object(F.jsxs)("li",{children:[t.name,": ",t.number,Object(F.jsx)("button",{onClick:function(){return e(h(t.id))},children:"Delete"})]},t.id)}))})}var T=n(17),q=n.n(T);function A(){var t=Object(u.c)(S),e=Object(u.b)();return Object(F.jsxs)("label",{className:q.a.searchContacts,children:["Find contacts by name",Object(F.jsx)("input",{name:"filter",type:"text",value:t,onChange:function(t){return e(p(t.target.value))}})]})}var B=function(){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("h2",{children:"Phonebook"}),Object(F.jsx)(L,{}),Object(F.jsx)("h2",{children:"Contacts"}),Object(F.jsx)(A,{}),Object(F.jsx)(D,{})]})};n(36),n(37);i.a.render(Object(F.jsx)(o.a.StrictMode,{children:Object(F.jsx)(u.a,{store:g,children:Object(F.jsx)(B,{})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.379b9f37.chunk.js.map