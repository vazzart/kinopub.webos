(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[7],{124:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return c}));var r=n(683),a=r.description,i="".concat(r.name," ").concat(r.version),c=r.version},191:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(46),a=n.n(r),i=n(3),c=function(e){var t=e.className;return Object(i.jsx)("div",{className:"fixed z-50 top-0 left-0 right-0 bottom-0 flex justify-center items-center",children:Object(i.jsx)("i",{className:a()("animate-spin w-10 h-10 rounded-full border-t-4",t)})})}},252:function(e,t,n){"use strict";n.d(t,"c",(function(){return w})),n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return j}));var r=n(91),a=n(92),i=n(195),c=n(194),o=n(126),s=n.n(o),u=n(60),l=n(13),f=n(29),h=n.n(f),d=n(54),v=n(62),p=n.n(v),b=n(374);var m,j,k=function(e){return encodeURIComponent((n=e)!==Object(n)?e:(t=e,JSON.stringify(t,(function(e,t){if(null!==t&&""!==t)return t}))));var t,n},g=function(e){return Object.keys(e||{}).filter((function(t){return""!==(null===e||void 0===e?void 0:e[t])&&null!==(null===e||void 0===e?void 0:e[t])&&void 0!==(null===e||void 0===e?void 0:e[t])})).map((function(t){return p()(null===e||void 0===e?void 0:e[t])?function(e,t){return t.map((function(t,n){return"".concat(k("".concat(e,"[").concat(n,"]")),"=").concat(k(t))})).join("&")}(t,null===e||void 0===e?void 0:e[t]):"".concat(t,"=").concat(k(null===e||void 0===e?void 0:e[t]))})).join("&")},O=function(){function e(t){Object(r.a)(this,e),this.baseUrl=void 0,this.baseUrl=t.startsWith("http")?t:window.location.protocol.startsWith("http")?"".concat(window.location.protocol,"//").concat(t):"http://".concat(t)}return Object(a.a)(e,[{key:"request",value:function(){var e=Object(d.a)(h.a.mark((function e(t,n,r,a){var i,c,o,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=this.getAccessToken())&&!(null===(i=r)||void 0===i?void 0:i.grant_type)&&(r=Object(l.a)(Object(l.a)({},r),{},{access_token:c})),e.prev=2,e.next=5,fetch("".concat(this.baseUrl).concat(n,"?").concat(g(r)),{method:t,body:a&&Object(b.serialize)(a)});case 5:return 401===(o=e.sent).status&&this.clearTokens(),e.next=9,o.json();case 9:return s=e.sent,e.abrupt("return",s);case 13:return e.prev=13,e.t0=e.catch(2),e.abrupt("return",{error:e.t0.toString()});case 16:case"end":return e.stop()}}),e,this,[[2,13]])})));return function(t,n,r,a){return e.apply(this,arguments)}}()},{key:"get",value:function(e,t){return this.request("GET",e,t)}},{key:"post",value:function(e,t,n){return this.request("POST",e,n,t)}},{key:"getAccessToken",value:function(){throw new Error("not implemented")}},{key:"getRefreshToken",value:function(){throw new Error("not implemented")}},{key:"saveTokens",value:function(e){e.access_token,e.refresh_token,e.expires_in;throw new Error("not implemented")}},{key:"clearTokens",value:function(){throw new Error("not implemented")}}]),e}();!function(e){e[e.True=1]="True",e[e.False=0]="False"}(m||(m={})),function(e){e[e.NoWatched=-1]="NoWatched",e[e.Watching=0]="Watching",e[e.Watched=1]="Watched"}(j||(j={}));var y=Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_KINOPUB_API_BASE_URL:"https://api.service-kp.com",REACT_APP_KINOPUB_API_CLIENT_ID:"xbmc",REACT_APP_KINOPUB_API_CLIENT_SECRET:"cgg3gtifu46urtfp2zp1nqtba0k2ezxh"}).KINOPUB_API_BASE_URL||"https://api.service-kp.com",_=Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_KINOPUB_API_BASE_URL:"https://api.service-kp.com",REACT_APP_KINOPUB_API_CLIENT_ID:"xbmc",REACT_APP_KINOPUB_API_CLIENT_SECRET:"cgg3gtifu46urtfp2zp1nqtba0k2ezxh"}).KINOPUB_API_CLIENT_ID||"xbmc",x=Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_KINOPUB_API_BASE_URL:"https://api.service-kp.com",REACT_APP_KINOPUB_API_CLIENT_ID:"xbmc",REACT_APP_KINOPUB_API_CLIENT_SECRET:"cgg3gtifu46urtfp2zp1nqtba0k2ezxh"}).KINOPUB_API_CLIENT_SECRET||"cgg3gtifu46urtfp2zp1nqtba0k2ezxh",w=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){return Object(r.a)(this,n),t.call(this,"xbmc","cgg3gtifu46urtfp2zp1nqtba0k2ezxh","https://api.service-kp.com")}return Object(a.a)(n,[{key:"isLogged",value:function(){return u.b.getItem("is_logged")}},{key:"getAccessToken",value:function(){return s.a.get("access_token")||u.b.getItem("access_token")}},{key:"getRefreshToken",value:function(){return s.a.get("refresh_token")||u.b.getItem("refresh_token")}},{key:"saveTokens",value:function(e){var t=e.access_token,n=e.refresh_token,r=e.expires_in;u.b.setItem("is_logged",!0,2592e3),u.b.setItem("access_token",t,r),u.b.setItem("refresh_token",n,2592e3),s.a.set("access_token",t,{expires:r/86400}),s.a.set("refresh_token",n,{expires:30})}},{key:"clearTokens",value:function(){["access_token","refresh_token"].forEach((function(e){return s.a.remove(e)})),["access_token","refresh_token","is_logged"].forEach((function(e){return u.b.removeItem(e)}))}}]),n}(function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){var e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:x,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y;return Object(r.a)(this,n),(e=t.call(this,c)).clientId=void 0,e.clientSecret=void 0,e.accessTokenCheckIntervaId=void 0,e.clientId=a,e.clientSecret=i,e}return Object(a.a)(n,[{key:"clearTimers",value:function(){clearInterval(this.accessTokenCheckIntervaId),this.accessTokenCheckIntervaId=null}},{key:"processTokensReponse",value:function(){var e=Object(d.a)(h.a.mark((function e(t,n,r){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.clearTokens();case 2:e.t0=t.error,e.next="authorization_pending"===e.t0?5:void 0===e.t0?6:13;break;case 5:return e.abrupt("break",15);case 6:return this.clearTimers(),e.next=9,this.saveTokens(t);case 9:return e.next=11,this.deviceNotify(n);case 11:return null===r||void 0===r||r(),e.abrupt("return");case 13:throw this.clearTimers(),t.error;case 15:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"requestUserCode",value:function(){var e=Object(d.a)(h.a.mark((function e(t,n){var r,a,i,c,o,s=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.clearTokens(),e.next=3,this.requestDeviceCode();case 3:if(r=e.sent,a=r.interval,i=r.code,c=r.user_code,o=r.verification_uri,!c){e.next=13;break}return e.next=11,null===n||void 0===n?void 0:n(c,o);case 11:e.next=14;break;case 13:throw new Error("Did't received user_code");case 14:return e.abrupt("return",new Promise((function(e,n){s.clearTimers(),s.accessTokenCheckIntervaId=setInterval(Object(d.a)(h.a.mark((function r(){var a;return h.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.requestTokens(i);case 2:return a=r.sent,r.prev=3,r.next=6,s.processTokensReponse(a,t,e);case 6:r.next=11;break;case 8:r.prev=8,r.t0=r.catch(3),n(r.t0);case 11:case"end":return r.stop()}}),r,null,[[3,8]])}))),1e3*(a||10))})));case 15:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"requestTokens",value:function(){var e=Object(d.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.post("/oauth2/device",null,{grant_type:"device_token",client_id:this.clientId,client_secret:this.clientSecret,code:t});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"refreshTokens",value:function(){var e=Object(d.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.post("/oauth2/token",null,{grant_type:"refresh_token",client_id:this.clientId,client_secret:this.clientSecret,refresh_token:t});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"requestDeviceCode",value:function(){var e=Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.post("/oauth2/device",null,{grant_type:"device_code",client_id:this.clientId,client_secret:this.clientSecret});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"deviceAuthorization",value:function(){var e=Object(d.a)(h.a.mark((function e(t,n){var r,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.clearTimers(),!(r=this.getRefreshToken())){e.next=9;break}return e.next=5,this.refreshTokens(r);case 5:return a=e.sent,e.abrupt("return",this.processTokensReponse(a,t));case 9:return e.prev=9,e.next=12,this.requestUserCode(t,n);case 12:return e.abrupt("return",e.sent);case 15:return e.prev=15,e.t0=e.catch(9),e.abrupt("return",this.deviceAuthorization(t,n));case 18:case"end":return e.stop()}}),e,this,[[9,15]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"deactivate",value:function(){this.deviceUnlink(),this.clearTokens(),this.clearTimers()}},{key:"user",value:function(){return this.get("/v1/user")}},{key:"serverLocations",value:function(){return this.get("/v1/references/server-location")}},{key:"streamingTypes",value:function(){return this.get("/v1/references/streaming-type")}},{key:"voiceoverTypes",value:function(){return this.get("/v1/references/voiceover-type")}},{key:"voiceoverAuthors",value:function(){return this.get("/v1/references/voiceover-author")}},{key:"videoQualities",value:function(){return this.get("/v1/references/video-quality")}},{key:"devices",value:function(){return this.get("/v1/device")}},{key:"deviceInfo",value:function(){return this.get("/v1/device/info")}},{key:"deviceInfoById",value:function(e){return this.get("/v1/device/".concat(e))}},{key:"deviceUnlink",value:function(){return this.post("/v1/device/unlink")}},{key:"deviceRemoveById",value:function(e){return this.post("/v1/device/".concat(e,"/remove"))}},{key:"deviceNotify",value:function(e){return this.post("/v1/device/notify",e)}},{key:"deviceSettings",value:function(e){return this.get("/v1/device/".concat(e,"/settings"))}},{key:"saveDeviceSettings",value:function(e,t){return this.post("/v1/device/".concat(e,"/settings"),t)}},{key:"types",value:function(){return this.get("/v1/types")}},{key:"genders",value:function(){return this.get("/v1/genres")}},{key:"countries",value:function(){return this.get("/v1/countries")}},{key:"subtitles",value:function(){return this.get("/v1/subtitles")}},{key:"items",value:function(e,t,n){return this.get("/v1/items",Object(l.a)(Object(l.a)({},e),{},{page:t,perpage:n}))}},{key:"itemsSearch",value:function(e,t,n){return this.get("/v1/items/search",Object(l.a)(Object(l.a)({},e),{},{page:t,perpage:n}))}},{key:"itemSmiliar",value:function(e){return this.get("/v1/items/similar",{id:e})}},{key:"itemMedia",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m.True;return this.get("/v1/items/".concat(e),{nolinks:t})}},{key:"itemMediaLinks",value:function(e){return this.get("/v1/items/media-links",{mid:e})}},{key:"itemMediaFileLink",value:function(e,t){return this.get("/v1/items/media-video-link",{file:e,type:t})}},{key:"itemVote",value:function(e,t){return this.get("/v1/items/vote",{id:e,like:t})}},{key:"itemTrailer",value:function(e,t){return this.get("/v1/items/trailer",{id:e,sid:t})}},{key:"itemsFresh",value:function(e,t,n){return this.get("/v1/items/fresh",{type:e,page:t,perpage:n})}},{key:"itemsHot",value:function(e,t,n){return this.get("/v1/items/hot",{type:e,page:t,perpage:n})}},{key:"itemsPopular",value:function(e,t,n){return this.get("/v1/items/popular",{type:e,page:t,perpage:n})}},{key:"channels",value:function(){return this.get("/v1/tv")}},{key:"bookmarks",value:function(){return this.get("/v1/bookmarks")}},{key:"bookmarkItems",value:function(e,t,n){return this.get("/v1/bookmarks/".concat(e),{page:t,perpage:n})}},{key:"itemBookmarks",value:function(e){return this.get("/v1/bookmarks/get-item-folders",{item:e})}},{key:"bookmarkCreate",value:function(e){return this.post("/v1/bookmarks/create",{title:e})}},{key:"bookmarkRemove",value:function(e){return this.post("/v1/bookmarks/remove-folder",{folder:e})}},{key:"bookmarkAddItem",value:function(e,t){return this.post("/v1/bookmarks/add",{item:e,folder:t})}},{key:"bookmarkRemoveItem",value:function(e,t){return this.post("/v1/bookmarks/remove-item",{item:e,folder:t})}},{key:"bookmarkToggleItem",value:function(e,t){return this.post("/v1/bookmarks/toggle-item",{item:e,folder:t})}},{key:"watchingItem",value:function(e,t,n){return this.get("/v1/watching",{id:e,video:t,season:n})}},{key:"watchingMovies",value:function(){return this.get("/v1/watching/movies")}},{key:"watchingSerials",value:function(e){return this.get("/v1/watching/serials",{subscribed:e})}},{key:"watchingMarkTime",value:function(e,t,n,r){return this.get("/v1/watching/marktime",{id:e,time:t,video:n,season:r})}},{key:"watchingToggle",value:function(e,t,n,r){return this.get("/v1/watching/toggle",{id:e,video:t,season:n,status:r})}},{key:"watchingToggleWatchlist",value:function(e){return this.get("/v1/watching/togglewatchlist",{id:e})}},{key:"collections",value:function(e,t,n,r){return this.get("/v1/collections",{title:e,sort:t,page:n,perpage:r})}},{key:"collectionItems",value:function(e){return this.get("/v1/collections/view",{id:e})}},{key:"history",value:function(e,t){return this.get("/v1/history",{page:e,perpage:t})}},{key:"historyClearMedia",value:function(e){return this.post("/v1/history/clear-for-media",null,{id:e})}},{key:"historyClearSeason",value:function(e){return this.post("/v1/history/clear-for-season",null,{id:e})}},{key:"historyClearItem",value:function(e){return this.post("/v1/history/clear-for-item",null,{id:e})}}]),n}(O))},253:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(13),a=n(52),i=n(46),c=n.n(i),o=n(3),s=["className","as"],u=function(e){var t=e.className,n=e.as,i=void 0===n?"p":n,u=Object(a.a)(e,s);return Object(o.jsx)(i,Object(r.a)(Object(r.a)({},u),{},{className:c()("text-gray-200",t)}))}},254:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(13),a=n(52),i=n(46),c=n.n(i),o=(n(877),n(3)),s=["name","className"],u={notifications_active:Object(o.jsx)(o.Fragment,{children:"\ue7f7"}),new_releases:Object(o.jsx)(o.Fragment,{children:"\ue031"}),library_music:Object(o.jsx)(o.Fragment,{children:"\ue030"}),live_tv:Object(o.jsx)(o.Fragment,{children:"\ue639"}),play_arrow:Object(o.jsx)(o.Fragment,{children:"\ue037"}),play_circle_outline:Object(o.jsx)(o.Fragment,{children:"\ue039"}),sports_soccer:Object(o.jsx)(o.Fragment,{children:"\uea2f"}),expand_more:Object(o.jsx)(o.Fragment,{children:"\ue5cf"}),expand_less:Object(o.jsx)(o.Fragment,{children:"\ue5ce"}),emoji_emotions:Object(o.jsx)(o.Fragment,{children:"\uea22"}),auto_awesome:Object(o.jsx)(o.Fragment,{children:"\ue65f"}),visibility_off:Object(o.jsx)(o.Fragment,{children:"\ue8f5"}),closed_caption:Object(o.jsx)(o.Fragment,{children:"\ue01c"}),thumb_up:Object(o.jsx)(o.Fragment,{children:"\ue8dc"}),graphic_eq:Object(o.jsx)(o.Fragment,{children:"\ue1b8"}),filter_list:Object(o.jsx)(o.Fragment,{children:"\ue152"}),arrow_back:Object(o.jsx)(o.Fragment,{children:"\ue5c4"})},l=function(e){var t=e.name,n=e.className,i=Object(a.a)(e,s);return Object(o.jsx)("i",Object(r.a)(Object(r.a)({},i),{},{className:c()("material-icons text-center",n),children:u[t]||t}))}},255:function(e,t,n){"use strict";var r=n(2),a=n(268);t.a=function(e,t){Object(r.useEffect)((function(){return Object(a.b)(e,t)}),[e,t])}},256:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(157),a=n.n(r),i=n(372),c=n.n(i),o=a()(c.a)},259:function(e,t,n){"use strict";var r=n(95),a=n(107),i=n(2),c=n(892),o=n(252);t.a=function(e){var t,n=Object(i.useMemo)((function(){return new o.c}),[]),s=Object(c.a)([n,e],(function(t){return n[e].apply(n,Object(a.a)(t))}));return Object.assign({},s,(t={},Object(r.a)(t,e,s.mutate),Object(r.a)(t,"".concat(e,"Async"),s.mutateAsync),t))}},260:function(e,t,n){"use strict";var r=n(51),a=n(2),i=n(60);t.a=function(e,t){var n,c=Object(a.useState)(null!==(n=i.b.getItem(e))&&void 0!==n?n:t),o=Object(r.a)(c,2),s=o[0],u=o[1],l=Object(a.useCallback)((function(t,n){i.b.setItem(e,t,n)}),[e]);return Object(a.useEffect)((function(){var n=function(){var n;u(null!==(n=i.b.getItem(e))&&void 0!==n?n:t)},r=i.b.subscribe(n);return n(),r}),[e,t]),[s,l]}},265:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(13),a=n(52),i=n(2),c=n(32),o=n(46),s=n.n(o),u=n(254),l=n(256),f=n(3),h=["href","state","children","icon","iconOnly","replace","active","className","onClick"],d=function(e){var t=e.href,n=e.state,o=e.children,d=e.icon,v=e.iconOnly,p=void 0===v?!o:v,b=e.replace,m=e.active,j=e.className,k=e.onClick,g=Object(a.a)(e,h),O=Object(c.h)(),y=Object(i.useCallback)((function(){t&&(b?O.replace:O.push)(t,n),null===k||void 0===k||k()}),[t,n,b,k,O]);return Object(f.jsx)(l.a,Object(r.a)(Object(r.a)({},g),{},{className:s()("whitespace-nowrap rounded cursor-pointer px-2 py-1",{"text-gray-200":!m,"text-red-600":m},j),onClick:y,role:"button",children:Object(f.jsxs)("div",{className:"flex items-center ",children:[d&&Object(f.jsx)(u.a,{className:s()({"mr-2":!p}),name:d}),!p&&o]})}))}},268:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return b}));var r,a=n(51),i=n(107),c=n(29),o=n.n(c),s=n(373),u=n(54),l=n(197),f=n.n(l),h={Enter:[13,16777221],Play:[71,415],Pause:[19,74,413],PlayPause:[32,179,10252],Back:[461,10009],Backspace:8,Escape:27,ArrowLeft:37,ArrowUp:38,ArrowRight:39,ArrowDown:40,Red:403,Green:404,Yellow:405,Blue:406,Settings:10133};function d(e,t){var n=f()(t),r=e.keyCode||e.which;return n.some((function(t){return e.key===t||f()(h[t]).some((function(e){return r===e}))}))}function v(e){return d(e,["Back","Backspace","Escape"])}function p(e,t){return r||(r=[],window.addEventListener("keydown",function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a,i,c,u,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=!1,v(t)&&(n=!0,t.preventDefault(),t.stopPropagation()),a=Object(s.a)(r),e.prev=3,a.s();case 5:if((i=a.n()).done){e.next=17;break}if(c=i.value,u=c.key,l=c.handler,!("Back"===u&&n||d(t,u))){e.next=15;break}return e.next=10,l(t);case 10:if(!1!==e.sent){e.next=15;break}return t.preventDefault(),t.stopPropagation(),e.abrupt("break",17);case 15:e.next=5;break;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(3),a.e(e.t0);case 22:return e.prev=22,a.f(),e.finish(22);case 25:case"end":return e.stop()}}),e,null,[[3,19,22,25]])})));return function(t){return e.apply(this,arguments)}}())),r=[{key:e,handler:t}].concat(Object(i.a)(r)),function(){r=r.filter((function(e){return e.handler!==t}))}}function b(e){var t=f()(h[e]),n=Object(a.a)(t,1)[0];window.dispatchEvent(new KeyboardEvent("keydown",{key:e,keyCode:n}))}},331:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=331},366:function(e,t,n){"use strict";var r=n(51),a=n(2),i=n(128),c=n(375),o=n(124);t.a=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],s=t[1],u=Object(a.useState)(""),l=Object(r.a)(u,2),f=l[0],h=l[1];return Object(a.useEffect)((function(){var e=Object(i.detect)();h(navigator.platform),s("".concat(e.platformName," (").concat(o.a,")")),Object(c.deviceinfo)((function(t){h("".concat(t.modelName).concat(t.version?" (".concat(t.version,")"):"")),s("".concat(e.platformName," ").concat(t.sdkVersion||e[e.platformName]," (").concat(o.a,")"))}))}),[]),Object(a.useMemo)((function(){return{software:n,hardware:f,title:o.b}}),[n,f])}},6:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));var r=n(32),a={Index:"/",Home:"/home",Search:"/search",Watching:"/watching/:watchingType?",Releases:"/releases/:releaseType?",Category:"/category/:categoryType",Genre:"/genres/:genreType",Channels:"/channels",Channel:"/channels/id:channelId",Bookmarks:"/bookmarks",Bookmark:"/bookmarks/id:bookmarkId",Collections:"/collections/:collectionType?",Collection:"/collections/id:collectionId",History:"/history",Item:"/item/id:itemId",Video:"/video/id:itemId",Trailer:"/trailer/id:trailerId",Pair:"/pair",Donate:"/donate",Speed:"/speed",Settings:"/settings"};function i(e,t,n){var a=n?"?".concat(new URLSearchParams(n)):"";return Object(r.f)(e,null!==t&&void 0!==t?t:void 0)+a}},60:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(107),a=n(91),i=n(92),c=n(95),o=n(13);function s(e,t,n){var r=(JSON.parse(e.getItem(t)||"{}")||{})[n]||{},a=r.value,i=r.expire;return i&&Date.now()>i?null:a}function u(e,t,n,r,a){var i=JSON.parse(e.getItem(t)||"{}")||{};e.setItem(t,JSON.stringify(Object(o.a)(Object(o.a)({},i),{},Object(c.a)({},n,"undefined"!==typeof r?{value:r,expire:"number"===typeof a?Date.now()+1e3*a:void 0}:void 0))))}function l(e,t,n){return u(e,t,n)}var f=function(){function e(t){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.localStorage;Object(a.a)(this,e),this.prefix=void 0,this.listeners=void 0,this.storage=void 0,this.subscribe=function(e){return n.listeners=[].concat(Object(r.a)(n.listeners),[e]),function(){n.listeners=n.listeners.filter((function(t){return t!==e}))}},this.getItem=function(e){return s(n.storage,n.prefix,e)},this.setItem=function(e,t,r){var a=u(n.storage,n.prefix,e,t,r);return n.emit(),a},this.removeItem=function(e){l(n.storage,n.prefix,e),n.emit()},this.prefix=t,this.listeners=[],this.storage=i}return Object(i.a)(e,[{key:"emit",value:function(){var e=this;requestAnimationFrame((function(){e.listeners.forEach((function(e){return e()}))}))}}]),e}();t.b=new f("kinopub");var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"kinopub";return new f(e,window.sessionStorage)}},683:function(e){e.exports=JSON.parse('{"name":"kinopub.webos","version":"1.1.1","description":"Kinopub WebOS","author":"Alexandr Dascal <alexandr.dascal@gmail.com>","repository":"https://github.com/adascal/kinopub.webos","main":"src/index.tsx","license":"MIT","private":true,"scripts":{"start":"craco start","build":"craco build","postbuild":"dotenv-load node ./scripts/msx.js","package":"dotenv-load node ./scripts/package.js","test":"craco test","lint":"concurrently \\"yarn run eslint\\"","lint:fix":"concurrently \\"yarn run eslint:fix\\"","eslint":"eslint \'src/**/*.ts\' \'src/**/*.tsx\'","eslint:fix":"yarn run eslint --fix","prepare":"husky install"},"dependencies":{"@babel/runtime":"7.15.3","@enact/core":"4.0.5","@enact/i18n":"4.0.5","@enact/moonstone":"4.0.2","@enact/spotlight":"4.0.5","@enact/ui":"4.0.5","@enact/webos":"4.0.5","@sentry/browser":"6.12.0","@sentry/tracing":"6.12.0","classnames":"2.3.1","core-js":"3.17.0","dayjs":"1.10.6","element-closest-polyfill":"1.0.4","format-duration":"1.4.0","hls.js":"1.0.10","ilib":"14.9.1","intersection-observer":"0.12.0","js-cookie":"3.0.1","lodash":"4.17.21","millify":"4.0.0","object-to-formdata":"4.1.0","react":"17.0.2","react-dom":"17.0.2","react-helmet":"6.1.0","react-lazyload":"3.2.0","react-query":"3.21.1","react-router-dom":"5.2.1","use-debounce":"7.0.0","web-vitals":"2.1.0","whatwg-fetch":"3.6.2"},"devDependencies":{"@babel/core":"7.15.0","@babel/preset-env":"7.15.0","@babel/preset-react":"7.14.5","@babel/preset-typescript":"7.15.0","@craco/craco":"6.2.0","@enact/dev-utils":"4.1.1","@simbathesailor/use-what-changed":"2.0.0","@types/gtag.js":"0.0.7","@types/js-cookie":"2.2.7","@types/lodash":"4.14.172","@types/react":"17.0.19","@types/react-dom":"17.0.9","@types/react-helmet":"6.1.2","@types/react-lazyload":"3.1.1","@types/react-router-dom":"5.1.8","@typescript-eslint/eslint-plugin":"4.30.0","@typescript-eslint/parser":"4.30.0","@webosose/ares-cli":"2.2.0","babel-eslint":"10.1.0","concurrently":"6.2.1","dotenv-load":"2.0.0","eslint":"7.32.0","eslint-config-prettier":"8.3.0","eslint-plugin-prettier":"4.0.0","http-proxy-middleware":"2.0.1","husky":"7.0.2","import-sort-style-vmv":"2.0.2","lint-staged":"11.1.2","postcss-css-variables":"0.17.0","prettier":"2.3.2","prettier-eslint":"13.0.0","prettier-plugin-import-sort":"0.0.7","react-scripts":"4.0.3","react-uid":"2.3.1","tailwindcss":"npm:@tailwindcss/postcss7-compat","typescript":"4.4.2"}}')},688:function(e,t,n){},877:function(e,t,n){},891:function(e,t,n){"use strict";n.r(t);n(414),n(418),n(419),n(420),n(421),n(422),n(423),n(424),n(425),n(426),n(427),n(428),n(429),n(430),n(431),n(432),n(433),n(434),n(435),n(436),n(437),n(438),n(439),n(440),n(442),n(443),n(164),n(444),n(445),n(446),n(447),n(448),n(449),n(450),n(451),n(452),n(453),n(454),n(455),n(457),n(458),n(226),n(459),n(460),n(461),n(462),n(463),n(464),n(465),n(466),n(467),n(468),n(469),n(470),n(471),n(472),n(473),n(474),n(475),n(476),n(477),n(478),n(479),n(480),n(481),n(482),n(483),n(484),n(485),n(486),n(487),n(488),n(489),n(490),n(491),n(492),n(493),n(494),n(495),n(497),n(498),n(502),n(503),n(504),n(506),n(507),n(508),n(509),n(510),n(511),n(512),n(513),n(514),n(515),n(516),n(309),n(519),n(520),n(311),n(521),n(522),n(523),n(524),n(525),n(312),n(526),n(527),n(528),n(529),n(530),n(531),n(532),n(534),n(535),n(536),n(537),n(538),n(539),n(545),n(546),n(547),n(548),n(549),n(550),n(551),n(552),n(553),n(554),n(555),n(556),n(557),n(560),n(561),n(562),n(563),n(564),n(565),n(566),n(567),n(568),n(569),n(570),n(571),n(572),n(573),n(574),n(575),n(576),n(577),n(578),n(235),n(579),n(580),n(582),n(583),n(584),n(585),n(586),n(588),n(589),n(590),n(591),n(592),n(593),n(594),n(595),n(597),n(598),n(599),n(600),n(601),n(602),n(603),n(604),n(605),n(606),n(607),n(608),n(609),n(610),n(611),n(612),n(613),n(614),n(615),n(616),n(618),n(619),n(620),n(622),n(624),n(626),n(628),n(629),n(630),n(631),n(632),n(633),n(634),n(635),n(636),n(637),n(638),n(639),n(640),n(641),n(642),n(643),n(644),n(645),n(646),n(647),n(648),n(649),n(650),n(651),n(652),n(653),n(654),n(655),n(656),n(657),n(658),n(660),n(662),n(663),n(664),n(665),n(666),n(667),n(668),n(669),n(670),n(671),n(672),n(674),n(675),n(676),n(677),n(679),n(326),n(680),n(681),n(682);var r=n(896),a=n(56),i=n(376),c=n(124);r.a({release:c.c,dsn:"https://d3a635962cb2440ca6754cdc6ff9af5b@o946544.ingest.sentry.io/5895550",integrations:[new i.a.BrowserTracing],tracesSampleRate:1});var o=n(108),s=n(13),u=(n(688),n(2)),l=n.n(u),f=n(897),h=n(263),d=n(369),v=n.n(d),p=n(82),b=n(32),m=window.location.origin.startsWith("http"),j=n(3),k=function(e){return m?Object(j.jsx)(p.a,Object(s.a)({},e)):Object(j.jsx)(b.a,Object(s.a)({},e))},g=n(52),O=n(191),y=function(e){var t=e.children;return Object(j.jsx)("div",{className:"w-screen h-screen",children:t})},_=n(46),x=n.n(_),w=n(199),T=n.n(w),P=n(265),I=n(6),E=["className"],S=[[{name:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",icon:"home",href:I.a.Home},{name:"\u041f\u043e\u0438\u0441\u043a",icon:"search",href:I.a.Search},{name:"\u042f \u0441\u043c\u043e\u0442\u0440\u044e",icon:"notifications_active",href:Object(I.b)(I.a.Watching)},{name:"\u0417\u0430\u043a\u043b\u0430\u0434\u043a\u0438",icon:"bookmark",href:I.a.Bookmarks},{name:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f",icon:"history",href:I.a.History},{name:"\u041f\u043e\u0434\u0431\u043e\u0440\u043a\u0438",icon:"list",href:Object(I.b)(I.a.Collections)}].filter(Boolean),[{name:"\u041d\u043e\u0432\u0438\u043d\u043a\u0438",icon:"new_releases",href:Object(I.b)(I.a.Releases)},{name:"\u0424\u0438\u043b\u044c\u043c\u044b",icon:"movie",href:Object(I.b)(I.a.Category,{categoryType:"movie"})},{name:"\u0421\u0435\u0440\u0438\u0430\u043b\u044b",icon:"tv",href:Object(I.b)(I.a.Category,{categoryType:"serial"})},{name:"\u041c\u0443\u043b\u044c\u0442\u0444\u0438\u043b\u044c\u043c\u044b",icon:"toys",href:Object(I.b)(I.a.Genre,{genreType:"23"})},{name:"\u0410\u043d\u0438\u043c\u0435",icon:"auto_awesome",href:Object(I.b)(I.a.Genre,{genreType:"25"})},{name:"\u041a\u043e\u043d\u0446\u0435\u0440\u0442\u044b",icon:"library_music",href:Object(I.b)(I.a.Category,{categoryType:"concert"})},{name:"\u0414\u043e\u043a\u0443\u0444\u0438\u043b\u044c\u043c\u044b",icon:"archive",href:Object(I.b)(I.a.Category,{categoryType:"documovie"})},{name:"\u0414\u043e\u043a\u0443\u0441\u0435\u0440\u0438\u0430\u043b\u044b",icon:"description",href:Object(I.b)(I.a.Category,{categoryType:"docuserial"})},{name:"\u0422\u0412 \u0428\u043e\u0443",icon:"live_tv",href:Object(I.b)(I.a.Category,{categoryType:"tvshow"})},{name:"\u0421\u043f\u043e\u0440\u0442",icon:"sports_soccer",href:Object(I.b)(I.a.Channels)}].filter(Boolean),["true"===Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_KINOPUB_API_BASE_URL:"https://api.service-kp.com",REACT_APP_KINOPUB_API_CLIENT_ID:"xbmc",REACT_APP_KINOPUB_API_CLIENT_SECRET:"cgg3gtifu46urtfp2zp1nqtba0k2ezxh"}).REACT_APP_HIDE_DONATE_MENU?null:{name:"\u0414\u043e\u043d\u0430\u0442",icon:"favorite",href:I.a.Donate},{name:"\u0421\u043f\u0438\u0434\u0442\u0435\u0441\u0442",icon:"speed",href:I.a.Speed},{name:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",icon:"settings",href:I.a.Settings}].filter(Boolean)],C=function(e){var t=e.className,n=Object(g.a)(e,E),r=Object(b.i)();return Object(j.jsx)("nav",Object(s.a)(Object(s.a)({className:x()("h-screen w-52 flex flex-col justify-between overflow-y-auto",t)},n),{},{children:T()(S,(function(e,t){return Object(j.jsx)("ul",{children:T()(e,(function(e){return Object(j.jsx)("li",{children:Object(j.jsx)(P.a,{href:e.href,icon:e.icon,active:r.pathname.startsWith(e.href),children:e.name})},e.href)}))},t)}))}))},A=["children"],N=function(e){var t=e.children,n=Object(g.a)(e,A);return Object(j.jsxs)("div",Object(s.a)(Object(s.a)({className:"flex h-screen w-screen overflow-hidden"},n),{},{children:[Object(j.jsx)(C,{}),Object(j.jsx)("div",{className:"w-full px-2",children:t})]}))},R=["component","layout"],B=function(e){var t=e.component,n=e.layout,r=Object(g.a)(e,R),a=Object(u.useMemo)((function(){return"fill"===n?y:N}),[n]),i=Object(u.useMemo)((function(){return function(e){return Object(j.jsx)(a,{children:Object(j.jsx)(u.Suspense,{fallback:Object(j.jsx)(O.a,{}),children:Object(u.createElement)(t,e)})})}}),[t,a]);return Object(j.jsx)(b.b,Object(s.a)(Object(s.a)({},r),{},{render:i}))},z=n(51),U=n(253),D=n(255),F=n(29),L=n.n(F),W=n(54),K=n(259),H=n(366),q=n(260);var M=function(e){var t=Object(b.h)(),n=Object(H.a)(),r=Object(K.a)("deviceAuthorization").deviceAuthorizationAsync,i=Object(u.useState)(!1),c=Object(z.a)(i,2),o=c[0],s=c[1],l=Object(q.a)("is_logged"),f=Object(z.a)(l,1)[0],h=Object(u.useCallback)((function(n,r){return new Promise((function(a){requestAnimationFrame((function(){t.replace(Object(I.b)(I.a.Pair,null,{userCode:n,verificationUri:r})),null===e||void 0===e||e("pair"),a()}))}))}),[t,e]);Object(u.useEffect)((function(){f||s(!1)}),[f]),Object(u.useEffect)((function(){var t=setTimeout(Object(W.a)(L.a.mark((function t(){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,o){t.next=6;break}return null===e||void 0===e||e("processing"),t.next=5,r([n,h]);case 5:s(!0);case 6:null===e||void 0===e||e("authorized"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),i=t.t0,a.a(i);case 12:case"end":return t.stop()}var i}),t,null,[[0,9]])}))),500);return function(){clearTimeout(t)}}),[f,o,n,e,h,r])},V=["children"],J=function(e){var t=e.children,n=Object(g.a)(e,V),r=Object(b.h)(),a=Object(u.useState)(!1),i=Object(z.a)(a,2),c=i[0],o=i[1],l=Object(u.useState)(!0),f=Object(z.a)(l,2),h=f[0],d=f[1],v=Object(u.useState)(),p=Object(z.a)(v,2),m=p[0],k=p[1],y=Object(u.useCallback)((function(){r.location.pathname!==I.a.Home?r.goBack():c?window.close():(o(!0),setTimeout((function(){o(!1)}),5e3))}),[r,c]),_=Object(u.useCallback)((function(e){k(e);var t=r.location.pathname;"authorized"===e&&(t!==I.a.Pair&&t!==I.a.Index||r.replace(I.a.Home))}),[r]);return Object(u.useEffect)((function(){var e=setTimeout((function(){d("processing"===m)}),1e3);return function(){clearTimeout(e)}}),[m]),Object(D.a)("Back",y),M(_),h?Object(j.jsx)(O.a,{}):Object(j.jsxs)("div",Object(s.a)(Object(s.a)({},n),{},{children:[c&&Object(j.jsx)("div",{className:"fixed top-2 right-2 p-4 z-999 shadow-xl rounded-xl bg-gray-500 bg-opacity-70",children:Object(j.jsxs)(U.a,{children:["\u0427\u0442\u043e\u0431\u044b \u0437\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435,",Object(j.jsx)("br",{}),'\u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 "\u043d\u0430\u0437\u0430\u0434" \u0435\u0449\u0451 \u0440\u0430\u0437']})}),Object(j.jsx)(b.d,{children:t})]}))},G=l.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(13)]).then(n.bind(null,1115))})),Q=l.a.lazy((function(){return Promise.all([n.e(0),n.e(25)]).then(n.bind(null,1109))})),Y=l.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(5),n.e(15)]).then(n.bind(null,1116))})),$=l.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(5),n.e(16)]).then(n.bind(null,1117))})),X=l.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(4),n.e(20)]).then(n.bind(null,1118))})),Z=l.a.lazy((function(){return Promise.all([n.e(0),n.e(26)]).then(n.bind(null,1110))})),ee=l.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(24)]).then(n.bind(null,1119))})),te=l.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(6),n.e(17)]).then(n.bind(null,1108))})),ne=l.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(14)]).then(n.bind(null,1111))})),re=l.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(23)]).then(n.bind(null,1120))})),ae=l.a.lazy((function(){return Promise.all([n.e(0),n.e(31)]).then(n.bind(null,1105))})),ie=l.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(10)]).then(n.bind(null,1107))})),ce=l.a.lazy((function(){return n.e(32).then(n.bind(null,1121))})),oe=l.a.lazy((function(){return Promise.all([n.e(0),n.e(29)]).then(n.bind(null,1122))})),se=l.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(6),n.e(12)]).then(n.bind(null,1113))})),ue=l.a.lazy((function(){return Promise.all([n.e(0),n.e(22),n.e(27)]).then(n.bind(null,1123))})),le=l.a.lazy((function(){return Promise.all([n.e(0),n.e(30)]).then(n.bind(null,1112))})),fe=l.a.lazy((function(){return Promise.all([n.e(0),n.e(28)]).then(n.bind(null,1124))})),he=l.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(4),n.e(21)]).then(n.bind(null,1125))})),de=l.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(4),n.e(19)]).then(n.bind(null,1114))})),ve=l.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(18)]).then(n.bind(null,1126))})),pe=l.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(11)]).then(n.bind(null,1127))})),be=new f.a({defaultOptions:{queries:{staleTime:3e5}}}),me=v()((function(e){return Object(j.jsx)(k,{children:Object(j.jsx)(h.a,{client:be,children:Object(j.jsxs)(J,Object(s.a)(Object(s.a)({},e),{},{children:[Object(j.jsx)(B,{path:I.a.Index,component:ae,layout:"fill",exact:!0}),Object(j.jsx)(B,{path:I.a.Home,component:re}),Object(j.jsx)(B,{path:I.a.Search,component:se}),Object(j.jsx)(B,{path:I.a.Category,component:Y}),Object(j.jsx)(B,{path:I.a.Genre,component:$}),Object(j.jsx)(B,{path:I.a.Watching,component:ve}),Object(j.jsx)(B,{path:I.a.Releases,component:pe}),Object(j.jsx)(B,{path:I.a.Bookmark,component:G}),Object(j.jsx)(B,{path:I.a.Bookmarks,component:Q}),Object(j.jsx)(B,{path:I.a.Collection,component:ee}),Object(j.jsx)(B,{path:I.a.Collections,component:te}),Object(j.jsx)(B,{path:I.a.Channel,component:X,layout:"fill"}),Object(j.jsx)(B,{path:I.a.Channels,component:Z}),Object(j.jsx)(B,{path:I.a.History,component:ne}),Object(j.jsx)(B,{path:I.a.Item,component:ie,layout:"fill"}),Object(j.jsx)(B,{path:I.a.Video,component:de,layout:"fill"}),Object(j.jsx)(B,{path:I.a.Trailer,component:he,layout:"fill"}),Object(j.jsx)(B,{path:I.a.Pair,component:oe,layout:"fill"}),Object(j.jsx)(B,{path:I.a.Donate,component:le}),Object(j.jsx)(B,{path:I.a.Speed,component:fe}),Object(j.jsx)(B,{path:I.a.Settings,component:ue}),Object(j.jsx)(B,{component:ce})]}))})})})),je=function(e){e&&e instanceof Function&&n.e(33).then(n.bind(null,1106)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))},ke=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ge(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Oe=Object(j.jsx)(me,{});"undefined"!==typeof window&&Object(o.render)(Oe,document.getElementById("root"));t.default=Oe;!function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");ke?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ge(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):ge(t,e)}))}}({onUpdate:function(){var e,t;(null===(e=(t=window).confirm)||void 0===e?void 0:e.call(t,"\u0414\u043e\u0441\u0442\u0443\u043d\u0430 \u043d\u043e\u0432\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f, \u0436\u0435\u043b\u0430\u0435\u0442\u0435 \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c\u0441\u044f?"))&&window.location.reload()}}),je((function(e){var t,n=e.name,r=e.delta,a=e.value,i=e.id;null===(t=gtag)||void 0===t||t("event",n,{value:r,metric_id:i,metric_value:a,metric_delta:r})}))}},[[891,8,9]]]);
//# sourceMappingURL=main.0fa55b30.chunk.js.map