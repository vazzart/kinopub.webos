(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[27],{1123:function(e,c,t){"use strict";t.r(c),t.d(c,"default",(function(){return S}));var n=t(29),a=t.n(n),l=t(95),i=t(54),s=t(13),r=t(51),u=t(2),o=t(910),d=t.n(o),j=t(987),b=t.n(j),f=t(199),O=t.n(f),v=t(252),h=t(900),x=t(913),m=t(934),p=t(898),k=t(253),N=t(901),C=t(903),g=t(259),w=t(366),y=t(260),_=t(3),F=function(e){var c=e.setting,t=e.onChange;return Object(_.jsx)(x.a,{className:"w-full",defaultChecked:c.value===v.a.True,onChange:t,children:c.label})},M=function(e){var c=e.setting,t=e.onChange,n=Object(u.useMemo)((function(){return O()(c.value,(function(e){return"".concat(e.label," ").concat(e.description?"(".concat(e.description,")"):"")}))}),[c.value]);return Object(_.jsx)(m.a,{defaultValue:b()(c.value,(function(e){return e.selected===v.a.True})),label:c.label,onChange:t,options:n})},S=function(){var e,c,t=Object(C.a)("user").data,n=Object(C.a)("deviceInfo").data,o=Object(g.a)("saveDeviceSettings").saveDeviceSettingsAsync,j=Object(g.a)("deactivate").deactivate,b=Object(u.useState)({}),f=Object(r.a)(b,2),m=f[0],S=f[1],T=Object(y.a)("is_hls.js_active"),A=Object(r.a)(T,2),D=A[0],E=A[1],I=Object(y.a)("is_ac3_by_default_active"),J=Object(r.a)(I,2),R=J[0],V=J[1],q=Object(y.a)("is_forced_by_default_active"),H=Object(r.a)(q,2),K=H[0],L=H[1],U=Object(y.a)("is_pause_by_ok_click_active"),W=Object(r.a)(U,2),z=W[0],B=W[1],G=Object(w.a)(),P=G.software,Q=G.hardware,X=Object(u.useMemo)((function(){var e;return d()(O()(null===n||void 0===n||null===(e=n.device)||void 0===e?void 0:e.settings,(function(e,c){return Object(s.a)(Object(s.a)({},e),{},{key:c})})),(function(e){return"undefined"===typeof e.type}))}),[null===n||void 0===n||null===(e=n.device)||void 0===e?void 0:e.settings]),Y=Object(u.useMemo)((function(){var e;return d()(O()(null===n||void 0===n||null===(e=n.device)||void 0===e?void 0:e.settings,(function(e,c){return Object(s.a)(Object(s.a)({},e),{},{key:c})})),(function(e){return"list"===e.type}))}),[null===n||void 0===n||null===(c=n.device)||void 0===c?void 0:c.settings]),Z=Object(u.useCallback)((function(e){E(e)}),[E]),$=Object(u.useCallback)((function(e){V(e)}),[V]),ee=Object(u.useCallback)((function(e){L(e)}),[L]),ce=Object(u.useCallback)((function(e){B(e)}),[B]),te=Object(u.useCallback)((function(e){return function(){var c=Object(i.a)(a.a.mark((function c(t){return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:S(Object(s.a)(Object(s.a)({},m),{},Object(l.a)({},e.key,t?v.a.True:v.a.False)));case 1:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()}),[m]),ne=Object(u.useCallback)((function(e){return function(c){S(Object(s.a)(Object(s.a)({},m),{},Object(l.a)({},e.key,e.value[c].id)))}}),[m]),ae=Object(u.useCallback)(Object(i.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o([null===n||void 0===n?void 0:n.device.id,m]);case 2:window.location.reload();case 3:case"end":return e.stop()}}),e)}))),[m,null===n||void 0===n?void 0:n.device,o]),le=Object(u.useCallback)((function(){j([])}),[j]);return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(p.a,{title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430"}),Object(_.jsxs)("div",{className:"h-screen relative",children:[Object(_.jsx)(N.a,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430"}),Object(_.jsx)("div",{className:"flex flex-col",children:(null===n||void 0===n?void 0:n.device)&&Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{className:"flex flex-wrap pb-4",children:O()(X,(function(e){return Object(_.jsx)("div",{className:"flex w-1/2 pr-4",children:Object(_.jsx)(F,{setting:e,onChange:te(e)})},e.key)}))},"bool-".concat(null===n||void 0===n?void 0:n.device.updated)),Object(_.jsxs)("div",{className:"flex flex-wrap pb-4",children:[Object(_.jsx)("div",{className:"flex w-1/2 pr-4",children:Object(_.jsx)(x.a,{className:"w-full",defaultChecked:!1!==D,onChange:Z,children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c HLS.js"})},"use-hls.js"),Object(_.jsx)("div",{className:"flex w-1/2 pr-4",children:Object(_.jsx)(x.a,{className:"w-full",defaultChecked:R,onChange:$,children:"AC3 \u0430\u0443\u0434\u0438\u043e \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e"})},"use-ac3_by_default"),Object(_.jsx)("div",{className:"flex w-1/2 pr-4",children:Object(_.jsx)(x.a,{className:"w-full",defaultChecked:z,onChange:ce,children:"\u041f\u0430\u0443\u0437\u0430 \u043f\u043e \u043a\u043b\u0438\u043a\u0443 \u043d\u0430 \u041e\u041a"})}),Object(_.jsx)("div",{className:"flex w-1/2 pr-4",children:Object(_.jsx)(x.a,{className:"w-full",defaultChecked:K,onChange:ee,children:"Forced \u0441\u0443\u0431\u0442\u0438\u0442\u0440\u044b \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e"})},"use-forced_by_default")]}),Object(_.jsx)("div",{className:"flex flex-wrap pb-4",children:O()(Y,(function(e){return Object(_.jsx)("div",{className:"flex w-1/2 pr-4",children:Object(_.jsx)(M,{setting:e,onChange:ne(e)})},e.key)}))},"list-".concat(null===n||void 0===n?void 0:n.device.updated))]}),Object(_.jsx)("div",{className:"flex my-8",children:Object(_.jsx)(h.a,{icon:"done",onClick:ae,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]})}),Object(_.jsxs)("div",{className:"flex justify-between absolute bottom-0 left-0 right-0 py-2",children:[Object(_.jsxs)("div",{children:[Object(_.jsx)(k.a,{children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"}),Object(_.jsxs)("div",{className:"flex items-center",children:[(null===t||void 0===t?void 0:t.user)&&Object(_.jsxs)(k.a,{className:"mr-4",children:[t.user.profile.name||t.user.username," (",Math.floor(t.user.subscription.days)," \u0434\u043d.)"]}),Object(_.jsx)(h.a,{icon:"logout",onClick:le,children:"\u0412\u044b\u0445\u043e\u0434"})]})]}),Object(_.jsxs)("div",{className:"flex flex-col items-end pr-4",children:[Object(_.jsx)(k.a,{children:Q}),Object(_.jsx)(k.a,{children:P})]})]})]})]})}},898:function(e,c,t){"use strict";t.d(c,"a",(function(){return i}));var n=t(13),a=t(905),l=t(3),i=function(e){return Object(l.jsx)(a.a,Object(n.a)({defaultTitle:"Unknown",titleTemplate:"%s | Kinopub WebOS"},e))}},900:function(e,c,t){"use strict";t.d(c,"a",(function(){return j}));var n=t(13),a=t(52),l=t(2),i=t(46),s=t.n(i),r=t(254),u=t(256),o=t(3),d=["children","icon","iconOnly","autoFocus","className"],j=function(e){var c=e.children,t=e.icon,i=e.iconOnly,j=void 0===i?!c:i,b=e.autoFocus,f=e.className,O=Object(a.a)(e,d),v=Object(l.useRef)(null);return Object(l.useEffect)((function(){var e;return b&&(e=requestAnimationFrame((function(){var e,c;null===(e=v.current)||void 0===e||null===(c=e.node)||void 0===c||c.focus()}))),function(){e&&cancelAnimationFrame(e)}}),[v,b]),Object(o.jsx)(u.a,Object(n.a)(Object(n.a)({},O),{},{ref:v,className:s()("text-gray-200 whitespace-nowrap cursor-pointer rounded px-2 py-1",f),role:"button",children:Object(o.jsxs)("div",{className:"flex items-center",children:[t&&Object(o.jsx)(r.a,{className:s()({"mr-2":!j}),name:t}),!j&&c]})}))}},901:function(e,c,t){"use strict";t.d(c,"a",(function(){return o}));var n=t(13),a=t(52),l=t(46),i=t.n(l),s=t(253),r=t(3),u=["children","className"],o=function(e){var c=e.children,t=e.className,l=Object(a.a)(e,u);return c?Object(r.jsx)(s.a,Object(n.a)(Object(n.a)({},l),{},{className:i()("flex justify-between items-center mx-2 my-1 mb-3 min-h-9",t),as:"div",children:c})):null}},903:function(e,c,t){"use strict";var n=t(107),a=t(2),l=t(937),i=t(252);c.a=function(e){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=arguments.length>2?arguments[2]:void 0,s=Object(a.useMemo)((function(){return new i.c}),[]),r=Object(l.a)([e].concat(Object(n.a)(c)),(function(){return s[e].apply(s,Object(n.a)(c))}),t);return r}},909:function(e,c,t){"use strict";var n=t(51),a=t(2);c.a=function(e){var c=Object(a.useState)(e),t=Object(n.a)(c,2),l=t[0],i=t[1];return Object(a.useEffect)((function(){i(e)}),[e]),[l,i]}},913:function(e,c,t){"use strict";t.d(c,"a",(function(){return u}));var n=t(13),a=t(52),l=t(2),i=t(900),s=t(3),r=["defaultChecked","checked","onChange","className","children","disabled"],u=function(e){var c=e.defaultChecked,t=e.checked,u=e.onChange,o=e.className,d=e.children,j=e.disabled,b=Object(a.a)(e,r),f=Object(l.useRef)(null),O=Object(l.useCallback)((function(e){null===u||void 0===u||u(e.target.checked,e)}),[u]),v=Object(l.useCallback)((function(){var e;null===(e=f.current)||void 0===e||e.click()}),[]);return Object(s.jsxs)(i.a,{className:o,onClick:v,disabled:j,children:[Object(s.jsx)("input",Object(n.a)(Object(n.a)({type:"checkbox"},b),{},{ref:f,className:"inline-block w-4 h-4",defaultChecked:c,checked:t,onChange:O,disabled:j})),Object(s.jsx)("span",{className:"inline-block ml-2 whitespace-nowrap",children:d})]})}},927:function(e,c,t){"use strict";t.d(c,"a",(function(){return j}));var n=t(51),a=t(2),l=t(900),i=t(254),s=t(253),r=t(909),u=t(1104);var o=function(e){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,t=arguments.length>2?arguments[2]:void 0;return Object(u.a)(e,c,t)},d=t(3),j=function(e){var c=e.open,t=e.onToggle,u=e.title,j=e.subtitle,b=e.className,f=e.children,O=e.disabled,v=Object(r.a)(c),h=Object(n.a)(v,2),x=h[0],m=h[1],p=Object(a.useCallback)((function(){if(!O){var e=!x;null===t||void 0===t||t(e),m(e)}}),[O,x,m,t]),k=o(p);return Object(d.jsxs)("div",{className:"flex flex-col w-full",children:[Object(d.jsx)(l.a,{onClick:k,className:b,disabled:O,children:Object(d.jsxs)("div",{className:"flex flex-col",children:[Object(d.jsxs)("div",{className:"flex items-center",children:[Object(d.jsx)(s.a,{children:u}),!O&&Object(d.jsx)(i.a,{name:x?"expand_less":"expand_more"})]}),!x&&j&&Object(d.jsx)(s.a,{className:"mt-2",children:j})]})}),x&&f]})}},934:function(e,c,t){"use strict";t.d(c,"a",(function(){return b}));var n=t(51),a=t(2),l=t(199),i=t.n(l),s=t(927),r=t(13),u=t(913),o=t(3),d=function(e){return Object(o.jsx)(u.a,Object(r.a)(Object(r.a)({},e),{},{type:"radio"}))},j=t(909),b=function(e){var c=e.label,t=e.options,l=e.defaultValue,r=e.value,u=e.onChange,b=e.closeOnChange,f=void 0===b||b,O=e.className,v=e.splitIn,h=e.disabled,x=Object(a.useState)(!1),m=Object(n.a)(x,2),p=m[0],k=m[1],N=Object(j.a)(r||l),C=Object(n.a)(N,2),g=C[0],w=C[1],y=Object(a.useMemo)((function(){return Array.isArray(t)?t.map((function(e,c){return"object"===typeof e?e:{title:e,value:c}})):[]}),[t]),_=Object(a.useMemo)((function(){return y.find((function(e){return e.value===g}))}),[y,g]),F=Object(a.useCallback)((function(e){w(e),null===u||void 0===u||u(e),f&&k(!1)}),[w,u,f]),M=Object(a.useCallback)((function(e){return function(c){c&&F(e.value)}}),[F]);return Object(o.jsx)(s.a,{open:p,onToggle:k,title:c,subtitle:null===_||void 0===_?void 0:_.title,className:O,disabled:h,children:Object(o.jsx)("div",{className:"flex flex-wrap",children:i()(y,(function(e){return Object(o.jsx)(d,{className:v?"w-1/".concat(v):"w-full",checked:e.value===g,onChange:M(e),children:e.title},e.value)}))})})}}}]);
//# sourceMappingURL=27.cd755a78.chunk.js.map