(this["webpackJsonpavoid-obstacles"]=this["webpackJsonpavoid-obstacles"]||[]).push([[0],{15:function(A,g,B){},16:function(A,g,B){},19:function(A,g,B){"use strict";B.r(g);var C=B(0),n=B.n(C),e=B(9),w=B.n(e),t=(B(15),B(2)),Q=(B(16),B(10)),f=function(){var A=Object(C.useState)([[19,1]]),g=Object(t.a)(A,2),B=g[0],n=g[1];return[B,function(){var A=Math.floor(3*Math.random());n((function(g){return[].concat(Object(Q.a)(g),[[19,A]])}))},function(A){n((function(g){for(var B=[],C=0;C<g.length;C++){var n=g[C][0];0===n||B.push([n-1,g[C][1]])}if(g.length>B.length){var e=g.length-B.length;A((function(A){return A+50*e}))}return B}))}]},E=B.p+"static/media/Character.bc5d1d4d.png",I=B.p+"static/media/shockwave.6a8673ce.png",P=B(1),c=function(A){var g=A.characterCoordinate,B=A.obstaclesCoordinate,C=A.setIsGameOver,n=Array.from({length:3},(function(){return Array.from({length:20},(function(){return 0}))})),e=function(){n[g[0]][g[1]]=2;for(var A=0;A<B.length;A++){var e=B[A][0],t=B[A][1];g[0]===t&&g[1]===e?(C(!0),n[t][e]=3):n[t][e]=1}return n.map((function(A,g){return Object(P.jsx)("tr",{children:A.map((function(A,g){return Object(P.jsx)("td",{width:"50px",height:"100px",children:w(A)},"width_".concat(g))}))},"height_".concat(g))}))},w=function(A){return 1===A?Object(P.jsx)("img",{src:"data:image/png;base64,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",width:"40px",height:"40px",alt:"Barrier"}):2===A?Object(P.jsx)("img",{src:E,width:"40px",height:"40px",alt:"Character"}):3===A?Object(P.jsx)("img",{src:I,width:"40px",height:"40px",alt:"Boom"}):void 0};return Object(P.jsx)("table",{className:"game_map",width:"1000px",height:"300px",align:"center",children:Object(P.jsx)("tbody",{children:Object(P.jsx)(e,{})})})},s=function(A,g){A.preventDefault();var B=0;if(g((function(A){return B=A[0],A})),console.log(B),38===A.keyCode){if(0===B)return;g([B-1,0])}else if(40===A.keyCode){if(2===B)return;g([B+1,0])}};var D=function(A,g){var B=Object(C.useRef)(A);Object(C.useEffect)((function(){B.current=A}),[A]),Object(C.useEffect)((function(){if(null!==g){var A=setInterval((function(){return B.current()}),g);return function(){return clearInterval(A)}}}),[g])},i=(B(18),B(21)),u=function(A){A.isGameOver;return Object(P.jsx)(i.a,{href:"/",variant:"outline-primary",size:"lg",type:"reset",children:"Restart"})};var L=function(){var A=f([]),g=Object(t.a)(A,3),B=g[0],n=g[1],e=g[2],w=Object(C.useState)([1,0]),Q=Object(t.a)(w,2),E=Q[0],I=Q[1],i=Object(C.useState)(0),L=Object(t.a)(i,2),r=L[0],J=L[1],k=Object(C.useState)(!1),o=Object(t.a)(k,2),O=o[0],d=o[1],l=Object(C.useState)(1e3),a=Object(t.a)(l,2),H=a[0],j=a[1],Y=Object(C.useState)(500),M=Object(t.a)(Y,2),m=M[0],F=M[1],y=Object(C.useState)(1),v=Object(t.a)(y,2),x=v[0],h=v[1];return Object(C.useEffect)((function(){var A=function(A){return s(A,I)};return window.addEventListener("keydown",A),function(){return window.removeEventListener("keydown",A)}}),[I]),D((function(){n()}),O?null:H),D((function(){e(J)}),O?null:m),Object(C.useEffect)((function(){F(500-25*x),j(1e3-50*x)}),[x]),Object(C.useEffect)((function(){h(parseInt(r/1e3))}),[r]),Object(P.jsxs)("div",{className:"App",children:[Object(P.jsxs)("h1",{children:["Score : ",r]}),Object(P.jsx)(c,{characterCoordinate:E,obstaclesCoordinate:B,setIsGameOver:d}),Object(P.jsx)(u,{isGameOver:O})]})},r=function(A){A&&A instanceof Function&&B.e(3).then(B.bind(null,22)).then((function(g){var B=g.getCLS,C=g.getFID,n=g.getFCP,e=g.getLCP,w=g.getTTFB;B(A),C(A),n(A),e(A),w(A)}))};w.a.render(Object(P.jsx)(n.a.StrictMode,{children:Object(P.jsx)(L,{})}),document.getElementById("root")),r()}},[[19,1,2]]]);
//# sourceMappingURL=main.9b4ae077.chunk.js.map