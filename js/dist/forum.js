module.exports=function(e){var t={};function s(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}return s.m=e,s.c=t,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=23)}([function(e,t){e.exports=flarum.core.compat["forum/app"]},function(e,t){e.exports=flarum.core.compat["common/Model"]},function(e,t){e.exports=flarum.core.compat["common/components/Button"]},function(e,t){e.exports=flarum.core.compat["common/utils/Stream"]},function(e,t){e.exports=flarum.core.compat["common/extend"]},function(e,t){e.exports=flarum.core.compat["common/components/Modal"]},,function(e,t){e.exports=flarum.core.compat["common/helpers/username"]},function(e,t){e.exports=flarum.core.compat["common/helpers/humanTime"]},function(e,t){e.exports=flarum.core.compat["forum/components/UserPage"]},function(e,t){e.exports=flarum.core.compat["common/models/User"]},function(e,t){e.exports=flarum.core.compat["common/utils/withAttr"]},function(e,t){e.exports=flarum.core.compat["common/utils/computed"]},function(e,t){e.exports=flarum.core.compat["common/utils/mixin"]},function(e,t){e.exports=flarum.core.compat["forum/components/SettingsPage"]},function(e,t){e.exports=flarum.core.compat["common/components/Page"]},function(e,t){e.exports=flarum.core.compat["common/Component"]},function(e,t){e.exports=flarum.core.compat["common/components/LoadingIndicator"]},function(e,t){e.exports=flarum.core.compat["common/helpers/avatar"]},function(e,t){e.exports=flarum.core.compat["common/helpers/icon"]},function(e,t){e.exports=flarum.core.compat["forum/components/HeaderSecondary"]},function(e,t){e.exports=flarum.core.compat["forum/components/NotificationsDropdown"]},function(e,t){e.exports=flarum.core.compat["common/components/LinkButton"]},function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),r=s(10),o=s.n(r),i=s(1),u=s.n(i);function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,c(e,t)}var p=s(12),f=s.n(p),d=s(13),h=function(e){function t(){return e.apply(this,arguments)||this}return l(t,e),t}(s.n(d)()(u.a,{user:u.a.hasOne("user"),status:u.a.attribute("status"),reason:u.a.attribute("reason"),createdAt:u.a.attribute("createdAt",u.a.transformDate),forNickname:u.a.attribute("forNickname"),_requestedUsername:u.a.attribute("requestedUsername"),requestedUsername:f()("_requestedUsername","forNickname","user",(function(e,t,s){return null===e&&t?s.username():e}))})),q=s(4),N=s(2),v=s.n(N),y=s(14),b=s.n(y),x=s(3),_=s.n(x),g=s(5),k=s.n(g),R=function(e){function t(){return e.apply(this,arguments)||this}l(t,e);var s=t.prototype;return s.oninit=function(t){e.prototype.oninit.call(this,t),this.username=_()(this.attrs.nickname?n.a.session.user.displayName():n.a.session.user.username()),this.userRequestAttr="last"+(this.attrs.nickname?"Nickname":"Username")+"Request",this.lastRequest=n.a.session.user[this.userRequestAttr](),this.lastRequest&&this.username(this.lastRequest.requestedUsername()),this.success=!1,this.password=_()(""),this.translationPrefix="fof-username-request.forum."+(this.attrs.nickname?"nickname":"username")+"_modals.request"},s.className=function(){return"RequestUsernameModal Modal--small"},s.title=function(){return n.a.translator.trans(this.translationPrefix+".title")},s.content=function(){return this.success?m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("p",{className:"helpText"},n.a.translator.trans(this.translationPrefix+".confirmation_message")),m("div",{className:"Form-group"},m(v.a,{className:"Button Button--primary Button--block",onclick:this.hide.bind(this)},n.a.translator.trans(this.translationPrefix+".dismiss_button"))))):m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},this.lastRequest?m("p",{className:"helpText"},n.a.translator.trans(this.translationPrefix+".current_request",{name:this.lastRequest.requestedUsername()})):"",m("div",{className:"Form-group"},m("input",{type:"text",name:"text",className:"FormControl",placeholder:n.a.session.user.username(),bidi:this.username,disabled:this.deleteLoading||this.submitLoading})),m("div",{className:"Form-group"},m("input",{type:"password",name:"password",className:"FormControl",placeholder:n.a.translator.trans("core.forum.change_email.confirm_password_placeholder"),bidi:this.password,disabled:this.deleteLoading||this.submitLoading})),m("div",{className:"Form-group"},v.a.component({className:"Button Button--primary Button--block",type:"submit",loading:this.submitLoading},n.a.translator.trans(this.translationPrefix+".submit_button"))),this.lastRequest?m("div",{className:"Form-group"},v.a.component({className:"Button Button--primary Button--block",onclick:this.deleteRequest.bind(this),loading:this.deleteLoading},n.a.translator.trans(this.translationPrefix+".delete_button"))):""))},s.deleteRequest=function(e){e.preventDefault(),this.deleteLoading=!0,this.lastRequest.delete(),this.successAlert=n.a.alerts.show({type:"success"},n.a.translator.trans(this.translationPrefix+".deleted")),n.a.session.user[this.userRequestAttr]=_()(),this.hide()},s.onsubmit=function(e){var t=this;e.preventDefault(),this.alert=null;var s=this.attrs.nickname?n.a.session.user.displayName():n.a.session.user.username();this.username()!==s?(this.submitLoading=!0,n.a.store.createRecord("username-requests").save({username:this.username(),forNickname:this.attrs.nickname},{meta:{password:this.password()},errorHandler:this.onerror.bind(this)}).then((function(e){n.a.session.user[t.userRequestAttr]=_()(e),t.success=!0,t.alertAttrs=null})).catch((function(){})).then(this.loaded.bind(this))):this.hide()},s.onerror=function(t){401===t.status&&(t.alert.content=n.a.translator.trans("core.forum.change_email.incorrect_password_message")),e.prototype.onerror.call(this,t)},t}(k.a),P=s(15),w=s.n(P),A=s(16),U=s.n(A),j=s(17),B=s.n(j),F=s(18),M=s.n(F),O=s(7),L=s.n(O),C=s(19),S=s.n(C),T=s(8),D=s.n(T),H=s(11),I=s.n(H),G=function(e){function t(){return e.apply(this,arguments)||this}l(t,e);var s=t.prototype;return s.oninit=function(t){e.prototype.oninit.call(this,t),this.request=this.attrs.request,this.approved=_()("Rejected"),this.reason=_()(""),this.translationPrefix="fof-username-request.forum."+(this.request.forNickname()?"nickname":"username")+"_modals.action"},s.title=function(){return n.a.translator.trans(this.translationPrefix+".title")},s.className=function(){return"RequestActionModal Modal--medium"},s.content=function(){return m("div",{className:"Modal-body"},m("div",{className:"Form"},m("h3",{className:"Notification-content"},n.a.translator.trans(this.translationPrefix+".name",{name:L()(this.request.user()),requestedName:this.request.requestedUsername()})),m("p",{className:"help"},n.a.translator.trans(this.translationPrefix+".help_text")),m("legend",null,n.a.translator.trans(this.translationPrefix+".decision_title")),m("div",{className:"Form-group"},m("label",{className:"checkbox"},m("input",{type:"radio",name:"approved",value:"Approved",checked:"Approved"===this.approved(),onclick:I()("value",this.approved)}),n.a.translator.trans(this.translationPrefix+".approval_label")),m("label",{className:"checkbox"},m("input",{type:"radio",name:"rejected",value:"Rejected",checked:"Rejected"===this.approved(),onclick:I()("value",this.approved)}),n.a.translator.trans(this.translationPrefix+".rejected_label"))),"Rejected"===this.approved()?m("div",{className:"Form-group"},m("legend",null,n.a.translator.trans(this.translationPrefix+".reason_title")),m("div",{className:"BasicsPage-reason-input"},m("textarea",{className:"FormControl",value:this.reason(),disabled:this.loading,oninput:I()("value",this.reason)}))):"",m("div",{className:"Form-group"},v.a.component({className:"Button Button--primary Button--block",type:"submit",loading:this.loading,disabled:"Rejected"===this.approved()&&!this.reason()},n.a.translator.trans(this.translationPrefix+".submit_button")))))},s.onsubmit=function(e){var t=this;e.preventDefault(),this.loading=!0,this.request.save({reason:this.reason(),action:this.approved()}).then((function(){t.successAlert=n.a.alerts.show({type:"success"},n.a.translator.trans(t.translationPrefix+".success"))})),n.a.cache.username_requests.some((function(e,s){e.id()==t.request.id()&&n.a.cache.username_requests.splice(s,1)})),m.redraw(),this.hide()},t}(k.a),z=function(e){function t(){return e.apply(this,arguments)||this}l(t,e);var s=t.prototype;return s.oninit=function(t){e.prototype.oninit.call(this,t),this.loading=!1},s.view=function(){var e=this,t=n.a.cache.username_requests||[];return m("div",{className:"NotificationList RequestsList"},m("div",{className:"NotificationList-header"},m("h4",{className:"App-titleControl App-titleControl--text"},n.a.translator.trans("fof-username-request.forum.pending_requests.title"))),m("div",{className:"NotificationList-content"},m("ul",{className:"NotificationGroup-content"},t.length?t.map((function(t){var s=t.forNickname()?"nickname":"username";return m("li",null,m("a",{onclick:e.showModal.bind(e,t),className:"Notification Request"},M()(t.user()),S()("fas fa-user-edit",{className:"Notification-icon"}),m("span",{className:"Notification-content"},n.a.translator.trans("fof-username-request.forum.pending_requests."+s+"_item_text",{name:L()(t.user())})),D()(t.createdAt()),m("div",{className:"Notification-excerpt"},n.a.translator.trans("fof-username-request.forum.pending_requests."+s+"_exerpt",{requestedName:t.requestedUsername()}))))})):this.loading?B.a.component({className:"LoadingIndicator--block"}):m("div",{className:"NotificationList-empty"},n.a.translator.trans("fof-username-request.forum.pending_requests.empty_text")))))},s.showModal=function(e){n.a.modal.show(G,{request:e})},t}(U.a),E=function(e){function t(){return e.apply(this,arguments)||this}l(t,e);var s=t.prototype;return s.oninit=function(t){e.prototype.oninit.call(this,t),n.a.history.push("requests"),n.a.usernameRequests.load(),this.bodyClass="App--requests"},s.view=function(){return m("div",{className:"RequestsPage"},m(z,{state:n.a.usernameRequests}))},t}(w.a),J=s(20),K=s.n(J),Q=s(21),V=function(e){function t(){return e.apply(this,arguments)||this}l(t,e),t.initAttrs=function(t){t.label=t.label||n.a.translator.trans("fof-username-request.forum.pending_requests.tooltip"),t.icon=t.icon||"fas fa-user-edit",e.initAttrs.call(this,t)};var s=t.prototype;return s.getMenu=function(){return m("div",{className:"Dropdown-menu "+this.attrs.menuClassName,onclick:this.menuClick.bind(this)},this.showing?z.component({state:n.a.usernameRequests}):"")},s.goToRoute=function(){m.route.set(n.a.route("username_requests"))},s.getUnreadCount=function(){return n.a.cache.username_requests?n.a.cache.username_requests.length:n.a.forum.data.relationships.username_requests.data.length},s.getNewCount=function(){return n.a.cache.username_requests?n.a.cache.username_requests.length:n.a.forum.data.relationships.username_requests.data.length},t}(s.n(Q).a),W=function(e){function t(){return e.apply(this,arguments)||this}l(t,e);var s=t.prototype;return s.oninit=function(t){e.prototype.oninit.call(this,t),this.userRequestAttr="last"+(this.attrs.nickname?"Nickname":"Username")+"Request",this.request=n.a.session.user[this.userRequestAttr](),this.translationPrefix="fof-username-request.forum."+(this.request.forNickname()?"nickname":"username")+"_modals.results"},s.className=function(){return"ResultsModal Modal"},s.title=function(){return n.a.translator.trans(this.translationPrefix+".title")},s.content=function(){return m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},"Approved"===this.request.status()?[m("h2",null,n.a.translator.trans(this.translationPrefix+".approved")),m("h3",null,n.a.translator.trans(this.translationPrefix+".new_name",{name:n.a.session.user.displayName()}))]:[m("h2",null,n.a.translator.trans(this.translationPrefix+".rejected")),m("h3",null,n.a.translator.trans(this.translationPrefix+".reason",{reason:this.request.reason(),i:m("i",null)})),m("p",{className:"helpText"},n.a.translator.trans(this.translationPrefix+".resubmit"))],m("div",{className:"Form-group"},m(v.a,{className:"Button Button--primary Button--block",onclick:this.hide.bind(this)},n.a.translator.trans(this.translationPrefix+".dismiss_button")))))},s.onremove=function(){n.a.session.user[this.userRequestAttr]=_()(),this.request.save({delete:!0})},t}(k.a),X=s(9),Y=s.n(X),Z=function(e){function t(){return e.apply(this,arguments)||this}l(t,e);var s=t.prototype;return s.oninit=function(t){e.prototype.oninit.call(this,t),this.loading=!0,this.loadUser(m.route.param("username"))},s.content=function(){var e=this;return m("table",{className:"NotificationGrid"},this.user.usernameHistory().slice(0).reverse().map((function(t){var s=Object.keys(t)[0];return m("tr",null,m("td",null,s),m("td",null,D()(e.calculateTime(t[s]))))})))},s.show=function(e){this.user=e,m.redraw()},s.calculateTime=function(e){return new Date(0).setUTCSeconds(e)},t}(Y.a),$=s(22),ee=s.n($),te=function(){function e(e){this.app=e,this.loading=!1,this.cache=[]}return e.prototype.load=function(){var e=this;n.a.cache.username_requests||(this.loading=!0,m.redraw(),n.a.store.find("username-requests").then((function(e){delete e.payload,n.a.cache.username_requests=e.sort((function(e,t){return e.createdAt()-t.createdAt()}))})).catch((function(){})).then((function(){e.loading=!1,m.redraw()})))},e}();n.a.initializers.add("fof-username-request",(function(){n.a.store.models["username-requests"]=h,o.a.prototype.lastNicknameRequest=u.a.hasOne("lastNicknameRequest"),o.a.prototype.lastUsernameRequest=u.a.hasOne("lastUsernameRequest"),o.a.prototype.usernameHistory=u.a.attribute("usernameHistory"),n.a.routes.username_requests={path:"/username-requests",component:E},n.a.routes.username_history={path:"/u/:username/history",component:Z},n.a.usernameRequests=new te(n.a),Object(q.extend)(b.a.prototype,"accountItems",(function(e){n.a.forum.attribute("canRequestUsername")&&e.add("username-request",v.a.component({className:"Button",onclick:function(){n.a.modal.show(R)}},n.a.translator.trans("fof-username-request.forum.settings.username_request_button")),8),"nickname"===n.a.forum.attribute("displayNameDriver")&&n.a.forum.attribute("canRequestNickname")&&!this.user.attribute("canEditOwnNickname")&&"flarum-nicknames"in flarum.extensions&&e.add("nickname-request",v.a.component({className:"Button",onclick:function(){n.a.modal.show(R,{nickname:!0})}},n.a.translator.trans("fof-username-request.forum.settings.nickname_request_button")),8)})),Object(q.extend)(K.a.prototype,"items",(function(e){(n.a.forum.data.relationships.username_requests&&n.a.forum.data.relationships.username_requests.data.length&&!n.a.cache.username_requests||n.a.cache.username_requests&&0!==n.a.cache.username_requests.length)&&e.add("UsernameRequests",m(V,{state:n.a.usernameRequests}),20)})),new Promise((function(){setTimeout((function(){if(n.a.session.user){var e=n.a.session.user.lastNicknameRequest()&&"Sent"!==n.a.session.user.lastNicknameRequest().status(),t=n.a.session.user.lastUsernameRequest()&&"Sent"!==n.a.session.user.lastUsernameRequest().status();(e||t)&&n.a.modal.show(W,{nickname:e})}}),1e3)})),Object(q.extend)(Y.a.prototype,"navItems",(function(e){this.user.usernameHistory()&&e.add("username-requests",ee.a.component({href:n.a.route("username_history",{username:this.user.username()}),icon:"fas fa-user-edit"},n.a.translator.trans("fof-username-request.forum.user.name_history_link")))}))}))}]);
//# sourceMappingURL=forum.js.map