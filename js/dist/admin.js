module.exports=function(e){var r={};function t(n){if(r[n])return r[n].exports;var s=r[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,t),s.l=!0,s.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var s in e)t.d(n,s,function(r){return e[r]}.bind(null,s));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=23)}({0:function(e,r){e.exports=flarum.core.compat["common/app"]},23:function(e,r,t){"use strict";t.r(r);var n=t(0);t.n(n).a.initializers.add("fof-username-request",(function(e){e.extensionData.for("fof-username-request").registerPermission({icon:"fa fa-user-edit",label:e.translator.trans("fof-username-request.admin.permissions.moderate_requests"),permission:"user.viewUsernameRequests"},"moderate").registerPermission({icon:"fa fa-user-edit",label:e.translator.trans("fof-username-request.admin.permissions.request_username"),permission:"user.requestUsername"},"start").registerPermission({icon:"fa fa-user-edit",label:e.translator.trans("fof-username-request.admin.permissions.request_nickname"),permission:"user.requestNickname"},"start")}))}});
//# sourceMappingURL=admin.js.map