(this["webpackJsonp2.6-phonebook"]=this["webpackJsonp2.6-phonebook"]||[]).push([[0],{39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t(15),u=t.n(c),a=t(6),i=t(3),o=t(4),s=t.n(o),d="/api/persons",l=function(){return s.a.get(d).then((function(e){return e.data}))},j=function(e){return s.a.post(d,e).then((function(e){return e.data}))},b=function(e){return s.a.delete(d+"/"+e).then((function(e){return e.data}))},f=function(e,n){return s.a.put(d+"/"+e,n).then((function(e){return e.data}))},h=t(0),m=function(e){var n=e.handler;return Object(h.jsxs)("div",{children:["filter shown with ",Object(h.jsx)("input",{onChange:n})]})},O=function(e){var n=e.name,t=e.number,r=e.handlerAddPerson,c=e.handlerName,u=e.handlerNumber;return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:r,children:[Object(h.jsxs)("div",{children:["name: ",Object(h.jsx)("input",{value:n,onChange:c})]}),Object(h.jsxs)("div",{children:["number: ",Object(h.jsx)("input",{value:t,onChange:u})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",children:"add"})})]})})},v=function(e){var n=e.person,t=e.deletePerson;return Object(h.jsxs)("div",{children:[n.name," ",n.number,Object(h.jsx)("button",{onClick:t,children:"delete"})]})},p=function(e){var n=e.persons,t=e.handlerDelete;return Object(h.jsx)("div",{children:n.map((function(e){return Object(h.jsx)(v,{person:e,deletePerson:function(){return t(e.id)}},e.name)}))})},x=function(e){var n=e.message;return null===n?null:Object(h.jsx)("div",{className:"notification",children:n})},g=function(e){var n=e.message;return null===n?null:Object(h.jsx)("div",{className:"error",children:n})},w=function(){var e=Object(r.useState)([]),n=Object(i.a)(e,2),t=n[0],c=n[1],u=Object(r.useState)(""),o=Object(i.a)(u,2),s=o[0],d=o[1],v=Object(r.useState)(""),w=Object(i.a)(v,2),k=w[0],N=w[1],S=Object(r.useState)(""),C=Object(i.a)(S,2),P=C[0],D=C[1],E=Object(r.useState)(null),T=Object(i.a)(E,2),A=T[0],y=T[1],J=Object(r.useState)(null),L=Object(i.a)(J,2),B=L[0],I=L[1];Object(r.useEffect)((function(){l().then((function(e){c(e)})).catch((function(e){console.log(e)}))}),[]);var q=s?t.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())})):t,z=function(){var e=!1;return t.forEach((function(n){n.name===k&&(e=!0)})),e};return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Phonebook"}),Object(h.jsx)(x,{message:A}),Object(h.jsx)(g,{message:B}),Object(h.jsx)(m,{handler:function(e){d(e.target.value)}}),Object(h.jsx)("h3",{children:"Add a new"}),Object(h.jsx)(O,{name:k,number:P,handlerAddPerson:function(e){e.preventDefault();var n={name:k,number:P};if(z()){if(window.confirm(k+" is already added to phonebook, replace the old number with a new one?")){var r=t.find((function(e){return e.name===k})),u=r.id,i=Object(a.a)(Object(a.a)({},r),{},{number:P});f(u,i).then((function(e){c(t.map((function(n){return n.id!==u?n:e}))),y("Edited "+e.name+" new number: "+e.number),setTimeout((function(){return y(null)}),5e3)})).catch((function(e){I("Error "+e.response.data),setTimeout((function(){return I(null)}),5e3)}))}}else j(n).then((function(e){c(t.concat(e)),y("Added "+e.name),setTimeout((function(){return y(null)}),5e3)})).catch((function(e){I("Person validation failed: "+e.response.data),setTimeout((function(){return I(null)}),5e3)}));N(""),D("")},handlerName:function(e){N(e.target.value)},handlerNumber:function(e){D(e.target.value)}}),Object(h.jsx)("h2",{children:"Numbers"}),Object(h.jsx)(p,{persons:q,handlerDelete:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete "+n.name+"?")&&b(e).then((function(n){c(t.filter((function(n){return n.id!==e}))),y("Deleted "+n.name),setTimeout((function(){return y(null)}),5e3)})).catch((function(e){return console.log(e)}))}})]})};t(39);u.a.render(Object(h.jsx)(w,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.049ad3cb.chunk.js.map