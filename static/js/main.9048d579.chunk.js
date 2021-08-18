(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{39:function(n,t,e){},40:function(n,t,e){},64:function(n,t,e){"use strict";e.r(t);var c,i,a,r=e(0),o=e.n(r),s=e(31),d=e.n(s),j=(e(39),e(40),e(11)),b=e(2),l=e(3),p=l.a.hr(c||(c=Object(b.a)(["\n    color: #DDDDDD;\n    width: fill-available;\n"]))),x=l.a.input(i||(i=Object(b.a)(["\n    width: 200px;\n    border-radius: 3px;\n"]))),u=e(1),O=function(n){var t=n.onChange;return Object(u.jsx)(x,{placeholder:"Pesquise pelo titulo",onChange:t})},h=e(18),f=e.n(h),g="https://warren-transactions-api.herokuapp.com/api",m=e(12),v=e(4);!function(n){n[n.created="Solicitada"]="created",n[n.processing="Processando"]="processing",n[n.processed="Conclu\xedda"]="processed",n[n.empty=""]="empty"}(a||(a={}));var w,y,k,E,C,D,z,S,P,F,B,T,L,I,J,R,V,$,q,M,X,A,G,H=function(n){return n?a[n]:a.empty},K=l.a.tr(w||(w=Object(b.a)(["\n    &:nth-child(2n) {\n        background-color: #DEDEDE;\n        border-color: #DEDEDE;\n    }\n"]))),N=l.a.table(y||(y=Object(b.a)(["\n    margin: 32px;\n    border: 1px solid #ECECEC;\n    border-spacing: 0;\n    border-collapse: collapse;\n"]))),Q=l.a.td(k||(k=Object(b.a)(["\n    font-size: 12px;\n    padding: 2px 8px;\n\n    @media(min-width: 1024px) {\n        font-size: 16px;\n        padding: 8px 16px;\n    }\n"]))),U=Object(l.a)(Q)(E||(E=Object(b.a)(["\n    font-weight: bold;\n"]))),W=l.a.div(C||(C=Object(b.a)(["\n    display: flex;\n    justify-content: space-between;\n"]))),Y=function(){return Object(u.jsxs)(K,{children:[Object(u.jsx)(U,{children:"T\xedtulo"}),Object(u.jsx)(U,{children:"Descri\xe7\xe3o"}),Object(u.jsx)(U,{children:"Status"}),Object(u.jsx)(U,{children:"Valor"}),Object(u.jsx)(U,{children:"Data"})]})},Z=function(n){var t=n.id,e=n.children,c=Object(v.g)(),i="/transaction/".concat(t);return Object(u.jsx)(m.b,{"data-id":t,to:{pathname:i,state:{background:c}},children:e})},_=function(n){var t=n.transaction;return Object(u.jsxs)(K,{children:[Object(u.jsx)(Q,{children:Object(u.jsx)(Z,{id:t.id,children:t.title})}),Object(u.jsx)(Q,{children:t.description}),Object(u.jsx)(Q,{children:H(t.status)}),Object(u.jsx)(Q,{children:Object(u.jsxs)(W,{children:[Object(u.jsx)("span",{children:"R$"})," ",Object(u.jsx)("span",{children:t.amount})]})}),Object(u.jsx)(Q,{children:t.date})]})},nn=function(n){var t=n.transactions;return Object(u.jsxs)(N,{children:[Object(u.jsx)("thead",{children:Object(u.jsx)(Y,{})}),Object(u.jsx)("tbody",{children:t.map((function(n,t){return Object(u.jsx)(_,{transaction:n},t)}))})]})},tn=Object(l.b)(D||(D=Object(b.a)(["\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n"]))),en=l.a.div(z||(z=Object(b.a)(["\n    position: relative;\n    margin: 0 auto;\n    width: fit-content;\n    margin-top: 48px;\n"]))),cn=l.a.div(S||(S=Object(b.a)(["\n    box-sizing: border-box;\n    display: block;\n    width: 64px;\n    height: 64px;\n    margin: 8px;\n    border: 8px solid #000;\n    border-radius: 50%;\n    animation: "," 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    border-color: #000 transparent transparent transparent;\n"])),tn),an=function(){return Object(u.jsx)(en,{children:Object(u.jsx)(cn,{})})},rn=l.a.div(P||(P=Object(b.a)(["\n    height: 80px;\n"]))),on=l.a.div(F||(F=Object(b.a)(["\n    width: 80%;\n    margin: auto;\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n"]))),sn=function(){var n=Object(r.useState)(!0),t=Object(j.a)(n,2),e=t[0],c=t[1],i=Object(r.useState)(""),a=Object(j.a)(i,2),o=a[0],s=a[1],d=Object(r.useState)([]),b=Object(j.a)(d,2),l=b[0],x=b[1];return Object(r.useEffect)((function(){new Promise((function(n,t){f.a.get("".concat(g,"/transactions")).then((function(t){var e=t.data;n(function(n){return n.sort((function(n,t){return n.date<t.date?-1:1}))}(e))})).catch((function(){t([])}))})).then((function(n){x(n)})).finally((function(){c(!1)}))}),[]),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:o}),Object(u.jsx)(rn,{}),Object(u.jsx)(p,{}),Object(u.jsxs)(on,{children:[Object(u.jsx)(O,{onChange:function(n){s(n.target.value)}}),Object(u.jsx)(nn,{transactions:l}),e&&Object(u.jsx)(an,{})]})]})},dn=l.a.div(B||(B=Object(b.a)(["\n    width: 100%;\n    margin-bottom: 56px;\n"]))),jn=l.a.input(T||(T=Object(b.a)(["\n    width: 100%;\n    height: 30px;\n    user-select: none;\n    border-radius: 3px;\n    background-color: #CECECE;\n"]))),bn=l.a.div(L||(L=Object(b.a)(["\n    width: 100%;\n    display: flex;\n    margin-top: 8px;\n    align-items: center;\n    justify-content: space-between;\n"]))),ln=l.a.div(I||(I=Object(b.a)(["\n    font-size: 14px;\n\n    @media(min-width: 1024px) {\n        font-size: 16px;\n    }\n"]))),pn=function(n){var t=n.status,e=[a.created,a.processing,a.processed],c=50*e.indexOf(H(t));return Object(u.jsxs)(dn,{children:[Object(u.jsx)(jn,{type:"range",value:c,min:0,max:100,readOnly:!0}),Object(u.jsx)(bn,{children:e.map((function(n,t){return Object(u.jsx)(ln,{children:n},t)}))})]})},xn={id:"",to:"",from:"",date:"",title:"Transa\xe7\xe3o n\xe3o encontrada ;-;",amount:0,status:a.empty,description:""},un=Object(l.b)(J||(J=Object(b.a)(["\n    0% {opacity: 0;}\n    100% {opacity: 1;}\n"]))),On=l.a.div(R||(R=Object(b.a)(["\n    top: 0;\n    left: 0;\n    position: fixed;\n\n    width: 100vw;\n    height: 100vh;\n\n    z-index: 1;\n"]))),hn=Object(l.a)(On)(V||(V=Object(b.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n\n    background: rgba(0, 0, 0, 0.8);\n    animation: "," .5s linear;\n"])),un),fn=l.a.button($||($=Object(b.a)(["\n    position: absolute;\n\n    top: 10px;\n    right: 10px;\n\n    background: transparent;\n    border: 1px black solid;\n    border-radius: 45%;\n"]))),gn=l.a.h1(q||(q=Object(b.a)(["\n    font-size: 32px;\n    text-align: center;\n    font-weight: bold;\n    width: fill-available;\n\n    @media(min-width: 1024px) {\n        font-size: 42px;\n    }\n"]))),mn=l.a.h2(M||(M=Object(b.a)(["\n    font-size: 20px;\n    font-weight: normal;\n    margin-bottom: 0px;\n    width: fill-available;\n\n    @media(min-width: 1024px) {\n        font-size: 24px;\n    }\n"]))),vn=l.a.div(X||(X=Object(b.a)(["\n    font-size: 14px;\n    width: fill-available;\n\n    @media(min-width: 1024px) {\n        font-size: 16px;\n    }\n"]))),wn=l.a.div(A||(A=Object(b.a)(["\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-around;\n"]))),yn=l.a.div(G||(G=Object(b.a)(["\n    position: fixed;\n\n    top: 60px;\n    left: 12px;\n    right: 12px;\n    bottom: 16px;\n\n    padding: 0 56px;\n    background: white;\n    border-radius: 16px;\n\n    @media(min-width: 1024px) {\n        top: 20%;\n        left: 20%;\n        right: 20%;\n        bottom: 20%;\n\n        padding: 0 80px;\n    }\n"]))),kn=function(){var n=Object(v.f)(),t=Object(v.h)().id,e=Object(r.useState)(!0),c=Object(j.a)(e,2),i=c[0],a=c[1],o=Object(r.useState)(xn),s=Object(j.a)(o,2),d=s[0],b=s[1];Object(r.useEffect)((function(){(function(n){return new Promise((function(t,e){f.a.get("".concat(g,"/transactions/").concat(n)).then((function(n){t(n.data)})).catch((function(){e(null)}))}))})(t).then((function(n){b(n)})).finally((function(){a(!1)}))}),[t]);var l=Object(r.useCallback)((function(t){"Backspace"!==t.key&&"Escape"!==t.key||(t.stopPropagation(),n.goBack())}),[n]);Object(r.useEffect)((function(){return window.addEventListener("keydown",l),function(){window.removeEventListener("keydown",l)}}),[l]);var x=d.title,O=d.status,h=d.amount,m=d.from,w=d.to;return Object(u.jsx)(hn,{children:Object(u.jsxs)(yn,{children:[i&&Object(u.jsx)(an,{}),Object(u.jsx)(fn,{onClick:function(){n.goBack()},children:"X"}),!i&&Object(u.jsxs)(r.Fragment,{children:[Object(u.jsx)(gn,{children:x}),Object(u.jsx)(pn,{status:O}),Object(u.jsx)(mn,{children:"Valor"}),Object(u.jsx)(p,{}),Object(u.jsxs)(vn,{children:["R$ ",h]}),Object(u.jsxs)(wn,{children:[Object(u.jsx)(mn,{children:"Transferido de"}),Object(u.jsx)(mn,{children:"Para"})]}),Object(u.jsx)(p,{}),Object(u.jsxs)(wn,{children:[Object(u.jsx)(vn,{children:m}),Object(u.jsx)(vn,{children:w})]})]})]})})},En=function(){var n=Object(v.g)(),t=n.state&&n.state.background;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v.c,{location:t||n,children:Object(u.jsx)(v.a,{exact:!0,path:"/",component:sn})}),t&&Object(u.jsx)(v.a,{path:"/transaction/:id",component:kn})]})},Cn=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,65)).then((function(t){var e=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;e(n),c(n),i(n),a(n),r(n)}))};d.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(m.a,{basename:"/desafio-warren-web",children:Object(u.jsx)(En,{})})}),document.getElementById("root")),Cn()}},[[64,1,2]]]);
//# sourceMappingURL=main.9048d579.chunk.js.map