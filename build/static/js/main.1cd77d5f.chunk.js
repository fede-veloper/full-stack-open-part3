(this["webpackJsonp2.6-phonebook"]=this["webpackJsonp2.6-phonebook"]||[]).push([[0],{39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t(15),u=t.n(c),o=t(6),a=t(3),i=t(4),s=t.n(i),l="http://localhost:3001/api/persons",d=function(){return s.a.get(l).then((function(e){return e.data}))},j=function(e){return s.a.post(l,e).then((function(e){return e.data}))},b=function(e){return s.a.delete(l+"/"+e).then((function(e){return e.data}))},f=function(e,n){return s.a.put(l+"/"+e,n).then((function(e){return e.data}))},h=t(0),m=function(e){var n=e.handler;return Object(h.jsxs)("div",{children:["filter shown with ",Object(h.jsx)("input",{onChange:n})]})},O=function(e){var n=e.name,t=e.number,r=e.handlerAddPerson,c=e.handlerName,u=e.handlerNumber;return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:r,children:[Object(h.jsxs)("div",{children:["name: ",Object(h.jsx)("input",{value:n,onChange:c})]}),Object(h.jsxs)("div",{children:["number: ",Object(h.jsx)("input",{value:t,onChange:u})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",children:"add"})})]})})},v=function(e){var n=e.person,t=e.deletePerson;return Object(h.jsxs)("div",{children:[n.name," ",n.number,Object(h.jsx)("button",{onClick:t,children:"delete"})]})},x=function(e){var n=e.persons,t=e.handlerDelete;return Object(h.jsx)("div",{children:n.map((function(e){return Object(h.jsx)(v,{person:e,deletePerson:function(){return t(e.id)}},e.name)}))})},p=function(e){var n=e.message;return null===n?null:Object(h.jsx)("div",{className:"notification",children:n})},g=function(e){var n=e.message;return null===n?null:Object(h.jsx)("div",{className:"error",children:n})},w=function(){var e=Object(r.useState)([]),n=Object(a.a)(e,2),t=n[0],c=n[1],u=Object(r.useState)(""),i=Object(a.a)(u,2),s=i[0],l=i[1],v=Object(r.useState)(""),w=Object(a.a)(v,2),k=w[0],N=w[1],S=Object(r.useState)(""),C=Object(a.a)(S,2),D=C[0],P=C[1],y=Object(r.useState)(null),A=Object(a.a)(y,2),E=A[0],T=A[1],I=Object(r.useState)(null),J=Object(a.a)(I,2),L=J[0],B=J[1];Object(r.useEffect)((function(){d().then((function(e){c(e)})).catch((function(e){console.log(e)}))}),[]);var q=s?t.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())})):t,z=function(){var e=!1;return t.forEach((function(n){n.name===k&&(e=!0)})),e};return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Phonebook"}),Object(h.jsx)(p,{message:E}),Object(h.jsx)(g,{message:L}),Object(h.jsx)(m,{handler:function(e){l(e.target.value)}}),Object(h.jsx)("h3",{children:"Add a new"}),Object(h.jsx)(O,{name:k,number:D,handlerAddPerson:function(e){e.preventDefault();var n={name:k,number:D};if(z()){if(window.confirm(k+" is already added to phonebook, replace the old number with a new one?")){var r=t.find((function(e){return e.name===k})),u=r.id,a=Object(o.a)(Object(o.a)({},r),{},{number:D});f(u,a).then((function(e){c(t.map((function(n){return n.id!==u?n:e}))),T("Edited "+e.name+" new number: "+e.number),setTimeout((function(){return T(null)}),5e3)})).catch((function(e){B("Information of "+a.name+" has already been removed from server"),setTimeout((function(){return B(null)}),5e3)}))}}else j(n).then((function(e){c(t.concat(e)),T("Added "+e.name),setTimeout((function(){return T(null)}),5e3)})).catch((function(e){console.log(e)}));N(""),P("")},handlerName:function(e){N(e.target.value)},handlerNumber:function(e){P(e.target.value)}}),Object(h.jsx)("h2",{children:"Numbers"}),Object(h.jsx)(x,{persons:q,handlerDelete:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete "+n.name+"?")&&b(e).then((function(n){c(t.filter((function(n){return n.id!==e}))),T("Deleted "+n.name),setTimeout((function(){return T(null)}),5e3)})).catch((function(e){return console.log(e)}))}})]})};t(39);u.a.render(Object(h.jsx)(w,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.1cd77d5f.chunk.js.map