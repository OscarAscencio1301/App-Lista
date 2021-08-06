(this["webpackJsonplista-tareas-basic"]=this["webpackJsonplista-tareas-basic"]||[]).push([[0],{52:function(t,e,a){},53:function(t,e,a){"use strict";a.r(e);var n=a(1),c=a(4),r=a.n(c),o=a(3),i=a(2),l=a(9),s=a(17),j=a.n(s),b=a(10),d=a.n(b),u="[Modal] Abrir",O="[Modal] Cerrar",m="[nota] Agregar",h="[nota] Borrar",p="[nota] Actualizar",x="[nota] Activa",f="[nota] Limpieza",v=function(){return{type:f}},N=function(){return{type:u}},y=a(7),g=a(0),A={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};j.a.setAppElement("#root");var w=function(){var t=Object(o.c)((function(t){return t.ui})).modalAbierto,e=Object(o.c)((function(t){return t.listaNotas})).notaActiva,a=Object(o.b)(),c=function(){a({type:O}),a(v())},r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object(n.useState)(t),a=Object(l.a)(e,2),c=a[0],r=a[1],o=function(t){r(Object(i.a)(Object(i.a)({},c),{},Object(y.a)({},t.target.name,t.target.value)))},s=function(){r(t)};return[c,r,o,s]}({titulo:"",nota:"",importancia:""}),s=Object(l.a)(r,4),b=s[0],u=s[1],h=s[2],x=s[3];Object(n.useEffect)((function(){u(e||{titulo:"",nota:"",importancia:""})}),[e,u]);var f=b.titulo,N=b.nota,w=b.importancia;return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(j.a,{isOpen:t,onRequestClose:c,style:A,className:"modal",overlayClassName:"modal-fondo",children:[Object(g.jsx)("h1",{className:"container",children:"Agregar Nota"}),Object(g.jsx)("hr",{}),Object(g.jsxs)("form",{className:"container",onSubmit:function(t){return t.preventDefault(),f.trim().length<2?d.a.fire({title:"Titulo Demasiado Corto",icon:"error"}):N.trim().length<2?d.a.fire({title:"Nota Demasiado Peque\xf1a",icon:"error"}):0===w.trim().length?d.a.fire({title:"Selecciona el nivel de Importancia",icon:"error"}):(a(e?function(t){return{type:p,payload:t}}(b):function(t){return{type:m,payload:t}}(Object(i.a)(Object(i.a)({},b),{},{id:Date.now()}))),c(),void x())},children:[Object(g.jsx)("div",{id:"emailHelp",className:"form-text",children:"Escribe el Titulo de la Nota"}),Object(g.jsx)("input",{type:"text",className:"form-control",placeholder:"Titulo de la Nota",name:"titulo",value:f,onChange:h}),Object(g.jsx)("hr",{}),Object(g.jsx)("div",{id:"emailHelp",className:"form-text",children:"Escribe el Texto de la Nota"}),Object(g.jsx)("textarea",{className:"form-control",placeholder:"Texto de la Nota",name:"nota",value:N,onChange:h,style:{height:"30vh",resize:"none"}}),Object(g.jsx)("div",{id:"emailHelp",className:"form-text mt-3",children:"Nivel de Importancia"}),Object(g.jsxs)("select",{className:"form-select",name:"importancia",value:w,onChange:h,children:[Object(g.jsx)("option",{value:"",children:"Seleccionar"}),Object(g.jsx)("option",{value:"Alta",children:"Alta"}),Object(g.jsx)("option",{value:"Media",children:"Media"}),Object(g.jsx)("option",{value:"Baja",children:"Baja"})]}),Object(g.jsx)("button",{className:"btn btn-primary d-block w-100 mt-3",type:"submit",children:e?"Guardar Cambios":"Crear Nota"})]})]})})},C=function(){var t=Object(o.b)();return Object(g.jsx)("button",{className:"btn btn-primary d-block w-100",onClick:function(){t(v()),t(N())},children:"Agregar Nota"})},E=function(t){var e=t.id,a=t.titulo,n=t.nota,c=t.importancia,r=Object(o.b)();return Object(g.jsxs)("tr",{className:"entrada",children:[Object(g.jsx)("th",{scope:"row",children:e}),Object(g.jsx)("td",{children:a}),Object(g.jsx)("td",{children:n}),Object(g.jsx)("td",{children:c}),Object(g.jsxs)("td",{children:[Object(g.jsx)("button",{className:"btn btn-warning mx-2",onClick:function(){r(function(t){return{type:x,payload:t}}({id:e,titulo:a,nota:n,importancia:c})),r(N())},children:"Editar"}),Object(g.jsx)("button",{className:"btn btn-danger mx-2",onClick:function(){r(function(t){return{type:h,payload:t}}(e))},children:"Borrar"})]})]})},T=function(){var t=Object(o.c)((function(t){return t.listaNotas})).notas;return Object(g.jsx)(g.Fragment,{children:t.map((function(t){return Object(g.jsx)(E,Object(i.a)({},t),t.id)}))})},S=function(){return Object(g.jsxs)("div",{className:"container-fluid mx-auto my-5",children:[Object(g.jsx)("h1",{className:"text-center",children:"Lista de Tareas"}),Object(g.jsxs)("table",{className:"table",children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{scope:"col",children:"ID"}),Object(g.jsx)("th",{scope:"col",children:"Titulo"}),Object(g.jsx)("th",{scope:"col",children:"Nota"}),Object(g.jsx)("th",{scope:"col",children:"Importancia"}),Object(g.jsx)("th",{scope:"col",children:"Acciones"})]})}),Object(g.jsx)("tbody",{children:Object(g.jsx)(T,{})})]}),Object(g.jsx)(w,{}),Object(g.jsx)(C,{})]})},k=a(6),D=a(23),_=a(24),I={notas:[],notaActiva:null},M=Object(k.b)({listaNotas:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case x:return Object(i.a)(Object(i.a)({},t),{},{notaActiva:e.payload});case f:return Object(i.a)(Object(i.a)({},t),{},{notaActiva:null});case m:return{notaActiva:null,notas:[].concat(Object(_.a)(t.notas),[e.payload])};case p:return Object(i.a)(Object(i.a)({},t),{},{notas:t.notas.map((function(t){return t.id===e.payload.id?e.payload:t}))});case h:return Object(i.a)(Object(i.a)({},t),{},{notas:t.notas.filter((function(t){return t.id!==e.payload}))})}return t},ui:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{modalAbierto:!1},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case u:return Object(i.a)(Object(i.a)({},t),{},{modalAbierto:!0});case O:return Object(i.a)(Object(i.a)({},t),{},{modalAbierto:!1});default:return t}}}),B="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||k.c,q=Object(k.d)(M,B(Object(k.a)(D.a))),z=function(){return Object(g.jsx)(o.a,{store:q,children:Object(g.jsx)(S,{})})};a(52);r.a.render(Object(g.jsx)(z,{}),document.querySelector("#root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.5495e7bb.chunk.js.map