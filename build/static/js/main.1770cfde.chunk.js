(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(27)},25:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(16),l=a.n(c),i=a(8),u=a(0),o=a(4),s=a(3);var m=function(e){var t=e.title,a=e.disabled,n=e.onClick;return r.a.createElement("button",{className:"normal-btn",disabled:a,onClick:n},t)},b=[["Paris",48.856614,2.352222],["Marseille",43.296482,5.36978],["Lyon",45.764043,4.835659],["Toulouse",43.604652,1.444209],["Nice",43.710173,7.261953],["Nantes",47.218371,-1.553621],["Strasbourg",48.573405,7.752111],["Montpellier",43.610769,3.876716],["Bordeaux",44.837789,-.57918],["Lille",50.62925,3.057256],["Rennes",48.117266,-1.677793],["Reims",49.258329,4.031696],["Le Havre",49.49437,.107929],["Saint-\xc9tienne",45.439695,4.387178],["Toulon",43.124228,5.928],["Angers",47.478419,-.563166],["Grenoble",45.188529,5.724524],["Dijon",47.322047,5.04148],["N\xeemes",43.836699,4.360054],["Aix-en-Provence",43.529742,5.447427]];var d=function(){var e=Object(u.n)(),t=Object(u.l)(),a=Object(n.useState)(""),c=Object(s.a)(a,2),l=c[0],i=c[1],d=Object(n.useState)([]),f=Object(s.a)(d,2),j=f[0],O=f[1],E=Object(n.useState)(""),g=Object(s.a)(E,2),p=g[0],v=g[1],h=Object(n.useState)(""),S=Object(s.a)(h,2),C=S[0],y=S[1],w=Object(n.useState)(""),M=Object(s.a)(w,2),k=M[0],F=M[1],L=Object(n.useState)([]),N=Object(s.a)(L,2),P=(N[0],N[1]),q=Object(n.useState)([]),x=Object(s.a)(q,2),D=(x[0],x[1]),R=Object(n.useState)([]),T=Object(s.a)(R,2),I=(T[0],T[1]),A=Object(n.useState)(!1),U=Object(s.a)(A,2),B=U[0],J=U[1];Object(n.useEffect)(function(){var e=new URLSearchParams(t.search);i(e.get("origin")||"")},[t]),Object(n.useEffect)(function(){var e=setTimeout(function(){P(G(l)),D(G(j.join(","))),I(G(p))},500);return function(){return clearTimeout(e)}},[l,j,p]);var G=function(e){var t=e.toLowerCase();return b.filter(function(e){var a=Object(s.a)(e,1)[0];return String(a).toLowerCase().includes(t)}).map(function(e){var t=Object(s.a)(e,1)[0];return String(t)})};return r.a.createElement("div",{className:"page"},r.a.createElement("form",{onSubmit:function(t){if(t.preventDefault(),l&&p&&C&&k){J(!1);var a=new URLSearchParams;a.set("origin",l),a.set("destination",p),a.set("date",C),a.set("passengers",k),e("/search-results?".concat(a.toString()))}else J(!0)}},r.a.createElement("label",{htmlFor:"origin"},"City of Origin:"),r.a.createElement("input",{id:"origin",type:"text",value:l,onChange:function(e){i(e.target.value)},required:!0}),j.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("label",{htmlFor:"intermediate-".concat(t)},"Intermediate City ",t+1,":"),r.a.createElement("input",{id:"intermediate-".concat(t),type:"text",value:e,onChange:function(e){return function(e,t){var a=Object(o.a)(j);a[e]=t.target.value,O(a)}(t,e)},required:!0}),r.a.createElement("button",{type:"button",onClick:function(){return function(e){var t=Object(o.a)(j);t.splice(e,1),O(t)}(t)}},"Remove"))}),r.a.createElement("button",{type:"button",onClick:function(){O([].concat(Object(o.a)(j),[""]))}},"Add Intermediate City"),r.a.createElement("label",{htmlFor:"destination"},"City of Destination:"),r.a.createElement("input",{id:"destination",type:"text",value:p,onChange:function(e){v(e.target.value)},required:!0}),r.a.createElement("label",{htmlFor:"date"},"Date of the Trip:"),r.a.createElement("input",{id:"date",type:"date",value:C,onChange:function(e){y(e.target.value)},required:!0}),r.a.createElement("label",{htmlFor:"passengers"},"Number of Passengers:"),r.a.createElement("input",{id:"passengers",type:"number",min:"1",value:k,onChange:function(e){F(e.target.value)},required:!0}),B&&r.a.createElement("p",null,"Please fill in all required fields."),r.a.createElement(m,{type:"submit",title:"Submit",disabled:!1,onClick:function(){}})))};var f=function(){var e=Object(u.l)(),t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)([]),m=Object(s.a)(i,2),d=m[0],f=(m[1],Object(n.useState)("")),j=Object(s.a)(f,2),O=j[0],E=j[1],g=Object(n.useState)(""),p=Object(s.a)(g,2),v=p[0],h=p[1],S=Object(n.useState)(""),C=Object(s.a)(S,2),y=C[0],w=C[1],M=Object(n.useState)(""),k=Object(s.a)(M,2),F=k[0],L=k[1],N=Object(n.useState)(!1),P=Object(s.a)(N,2),q=P[0],x=P[1],D=Object(n.useState)(!1),R=Object(s.a)(D,2),T=R[0],I=R[1];Object(n.useEffect)(function(){var t=new URLSearchParams(e.search);l(t.get("origin")||""),E(t.get("destination")||""),h(t.get("date")||""),w(t.get("passengers")||"")},[e]),Object(n.useEffect)(function(){A()},[c,O]);var A=function(){c&&O&&(x(!0),I(!1),setTimeout(function(){try{for(var e=b.reduce(function(e,t){var a=Object(s.a)(t,3),n=a[0],r=a[1],c=a[2];return e[n]={lat:parseFloat(r.toString()),lon:parseFloat(c.toString())},e},{}),t=[c].concat(Object(o.a)(d),[O]),a=0,n=0;n<t.length-1;n++){var r=t[n],l=t[n+1],i=e[r],u=e[l];if(!i||!u)throw new Error("Invalid cities for distance calculation");a+=U(i,u)}L(a.toFixed(2)),x(!1)}catch(T){console.log(T),L(""),x(!1),I(!0)}},500))},U=function(e,t){var a=function(e){return e*Math.PI/180},n=a(t.lat-e.lat),r=a(t.lon-e.lon),c=a(e.lat),l=a(t.lat),i=Math.sin(n/2)*Math.sin(n/2)+Math.sin(r/2)*Math.sin(r/2)*Math.cos(c)*Math.cos(l);return 2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i))*6371};return r.a.createElement("div",{className:"page"},r.a.createElement("h2",null,"Search Results"),r.a.createElement("p",null,"Origin: ",c),r.a.createElement("p",null,"Intermediate Cities: ",d.join(", ")),r.a.createElement("p",null,"Destination: ",O),r.a.createElement("p",null,"Date: ",v),r.a.createElement("p",null,"Passengers: ",y),q?r.a.createElement("p",null,"Loading..."):r.a.createElement(r.a.Fragment,null,T?r.a.createElement("p",null,"Error occurred while calculating distance."):r.a.createElement("p",null,"Total Distance: ",F," km")))};a(25);var j=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",element:r.a.createElement(d,null)}),r.a.createElement(u.a,{path:"/search-results",element:r.a.createElement(f,null)})),r.a.createElement("div",{className:"background"}))};l.a.render(r.a.createElement(i.a,null,r.a.createElement(j,null)),document.getElementById("root"))}},[[17,2,1]]]);
//# sourceMappingURL=main.1770cfde.chunk.js.map