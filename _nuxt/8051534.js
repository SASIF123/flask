(window.webpackJsonp=window.webpackJsonp||[]).push([[0,4],{402:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return d}));var r=n(0),o=n(16),c=n.n(o),l=n(2),f=n(4),d=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.setupTransitionInTimeline=function(t,e,n){var r=e.$refs,o=r.container,f=(r.lineOne,r.lineTwo),d=(r.subtitle,e.$refs),h=d.ring,m=d.constellation,y=d.start,T=e.splitTextLines,v=e.$refs,svg=v.svg,O=(v.equalsOne,v.equalsTwo,svg.querySelector("g").querySelectorAll("path")),rect=svg.querySelector("line"),A=svg.querySelector("circle");(t=l.default.timeline()).add(this.getTimeline(h,c.a.IN),0),t.add(this.getTimeline(m,c.a.IN),0);var w=l.default.timeline();w.timeScale(.7),w.fromTo(o,{scale:.5},{scale:1,ease:"long-ease-out",duration:3},0),w.fromTo(O,{x:function(i){return 3*(i-Math.round(.5*T[0].chars.length)+1)}},{x:0,ease:"power3.out",duration:1.5},0),w.fromTo(O,{opacity:0},{opacity:1,ease:"sine.out",duration:1.2,stagger:{from:"edges",amount:.16}},0),w.fromTo([rect,A],{scale:0,transformOrigin:"center"},{scale:1,ease:"power3.out",duration:1.5},0),w.fromTo(f,{x:50},{x:0,ease:"power2.out",duration:1.5},0),w.fromTo(T[0].chars,{x:function(i,t){return 3*(i-Math.round(.5*T[0].chars.length)+1)}},{x:"0",ease:"power3.out",duration:1.5},.3),w.fromTo(T[0].chars,{opacity:0},{opacity:1,ease:"sine.out",duration:.7,stagger:{from:"random",each:.06}},.3),w.fromTo(T[1].lines,{y:14},{y:0,duration:.6,ease:"power2.out",stagger:.05},.6),w.fromTo(T[1].lines,{opacity:0},{opacity:1,duration:.4,ease:"sine.out",stagger:.05},.6),t.add(w,.2),t.add(this.getTimeline(y,c.a.IN),.5)},n.setupTransitionOutTimeline=function(t,e,n){var r=e.$refs,content=(r.container,r.content),o=(r.lineOne,r.lineTwo),l=r.subtitle,d=e.$refs,h=d.ring,m=d.constellation,y=d.start,T=e.splitTextLines,v=e.$refs,svg=v.svg,O=(v.equalsOne,v.equalsTwo,svg.querySelector("g").querySelectorAll("path")),rect=svg.querySelector("line"),A=svg.querySelector("circle");t.add(this.getTimeline(h,c.a.OUT),0),t.add(this.getTimeline(m,c.a.OUT),0),t.fromTo(content,{scale:1},{scale:.8,ease:"power2.in",duration:1.2},0),t.fromTo(O,{x:0},{x:function(i){return 7*(i-Math.round(.5*T[0].chars.length)+1)},ease:"power3.in",duration:.5},0),t.fromTo(O,{opacity:1},{opacity:0,ease:"sine.in",duration:.5,stagger:{from:"edges",amount:.16}},0),t.fromTo(o,{x:0},{x:10,ease:"power2.in",duration:1},0),t.fromTo(T[0].chars,{x:0},{x:function(i){return 2*(i-Math.round(.5*T[0].chars.length)+1)},ease:"power2.in",duration:1},0),t.to([rect,A],{scale:0,transformOrigin:"center",ease:"power3.out",duration:1.5},0),t.fromTo(T[0].chars,{opacity:1},{opacity:0,ease:"sine.in",duration:1,stagger:{from:"edges",amount:.1}},0),t.fromTo(T[1].chars,{x:0},{x:function(i){return 2*(i-Math.round(.5*T[0].chars.length)+1)},ease:"power2.in",duration:1},0),t.fromTo(T[1].chars,{opacity:1},{opacity:0,ease:"sine.in",duration:1,stagger:{from:"edges",amount:.1}},0),t.to(l,{y:30,ease:"power2.in",duration:1},0),t.to(l,{opacity:0,ease:"sine.in",duration:1},0),t.add(this.getTimeline(y,c.a.OUT),0),t.to(y.$el,{autoAlpha:0,ease:f.l.easeOut,duration:.5},0)},n.setupLoopingAnimationTimeline=function(t,e,n){},e}(n(13).a)},742:function(t,e,n){"use strict";var r=n(0),o=(n(26),n(19),n(40),n(38),n(17),n(9)),c=n.n(o),l=n(196),f=n(14),d=n(286),h=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},m=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.beforeCreate=function(){this.flow=l.a.NORMAL,this.transitionOnRouteUpdate=!1,this.transitionInHijack=Promise.resolve()},n.hijackTransitionIn=function(){var t=this;return new Promise((function(e){t.transitionInHijack=new Promise((function(t){return e(t)}))}))},n.onBeforeRouteUpdate=function(t,e){},n.beforeRouteEnter=function(t,e,n){n((function(t){Promise.all([d.a.flowHijacked,t.transitionInHijack]).then((function(){t.$parent&&t.$parent.allComponentsReady?t.$parent.allComponentsReady.then((function(){return t.transitionIn()})):t.transitionIn()}))}))},n.beforeRouteUpdate=function(t,e,n){var r=this;this.onBeforeRouteUpdate(t,e),t.matched[t.matched.length-1].components.default.name===this.componentId&&!this._isDestroyed&&this.transitionOnRouteUpdate?this.transitionOut(!0).then((function(){return n()})).then((function(){r.$nextTick((function(){return r.transitionIn(!0)}))})):n()},n.beforeRouteLeave=function(t,e,n){var r=this;t.matched.forEach((function(o,c){c===t.matched.length-1&&(o.beforeEnter?o.beforeEnter(t,e,(function(o){o===e.path?n(!1):d.a.start(r,n,t,e)})):d.a.start(r,n,t,e))}))},e}(f.a);m=h([c()({components:{}})],m),e.a=m},743:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return d})),n.d(e,"b",(function(){return m})),n.d(e,"a",(function(){return T})),n.d(e,"f",(function(){return O})),n.d(e,"e",(function(){return w}));var r,o=n(10);n(285),n(47),n(43);!function(t){t.IMPACT="impact",t.LOW_AUTHORITY="low-authority",t.YOUR_LIFE_YOUR_WAY="your-life-your-way",t.REPEATABLE_SOLUTIONS="repeatable-solutions",t.TRANSPARENCY="transparency",t.RATIONAL_THINKING="rational-thinking",t.HIGH_ACCOUNTABILITY="high-accountability",t.PERSONAL_GROWTH="personal-growth",t.BENEVOLENCE="benevolence",t.CONTINUOUS_FEEDBACK="continuous-feedback",t.HIRING_UP="hiring-up",t.SIMPLICITY="simplicity",t.PROSPERITY="prosperity"}(r||(r={}));var c=r;function l(t){return f.apply(this,arguments)}function f(){return(f=Object(o.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.api.getSingle("generic");case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return h.apply(this,arguments)}function h(){return(h=Object(o.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.api.getSingle("intro");case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return y.apply(this,arguments)}function y(){return(y=Object(o.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.api.getSingle("exploration");case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function T(t){return v.apply(this,arguments)}function v(){return(v=Object(o.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.api.getSingle("end");case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(t){return A.apply(this,arguments)}function A(){return(A=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object.values(c),t.next=3,e.api.query([e.predicates.in("my.principles.uid",n)],{pageSize:"13"});case 3:return r=t.sent,o=r.results.map((function(t){return{id:t.uid,slug:t.uid,title:t.data.title,model:"constellation-model-"+t.data.model,content:{title:t.data.title,copy:t.data.copy,highlight:t.data.highlight,altText:t.data.altText}}})),t.abrupt("return",o);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t){return E.apply(this,arguments)}function E(){return(E=Object(o.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.api.query(e.predicates.at("document.type","nebulas"),{pageSize:"3"});case 2:return n=t.sent,t.abrupt("return",n.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},744:function(t,e,n){var content=n(768);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("89545f1c",content,!0,{sourceMap:!1})},761:function(t,e,n){"use strict";var r=n(0),o=(n(26),n(9)),c=n.n(o),l=n(14),f=n(4),d=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.setupTransitionInTimeline=function(t,e,n){var r=e.$refs,o=r.line1,c=r.line2,l=r.line3,d=r.line4,h=r.star1,m=r.star2,y=r.star3,T=r.star4,v=r.star5,rect=r.rect,O=[h,o,m,c,y,l,T,d,v];t.fromTo(O,{autoAlpha:0},{autoAlpha:1,ease:f.l.easeOut,duration:1.5,stagger:.1}),t.fromTo(rect,{xPercent:-100},{xPercent:0,ease:f.l.easeOut,duration:1.5},.5)},n.setupTransitionOutTimeline=function(t,e,n){var r=e.$refs,o=r.line1,c=r.line2,l=r.line3,d=r.line4,h=r.star1,m=r.star2,y=r.star3,T=r.star4,v=r.star5,rect=r.rect,O=[h,o,m,c,y,l,T,d,v];t.to(O,{autoAlpha:0,ease:f.l.easeOut,duration:.7,stagger:.07}),t.to(rect,{xPercent:100,ease:f.l.easeOut,duration:1},0)},n.setupLoopingAnimationTimeline=function(t,e,n){},e}(n(13).a),h=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},m=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e.prototype.handleAllComponentsReady=function(){this.transitionController=new d(this),this.isReady()},e}(l.a),y=m=h([c()({components:{}})],m),T=n(767),v=n(11);var component=Object(v.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:[t.$style.introConstellation]},[n("svg",{attrs:{viewBox:"0 0 380 282"}},[n("defs",[n("clipPath",{attrs:{id:"constellationMask"}},[n("rect",{ref:"rect",attrs:{width:"380",height:"282",x:"0",y:"0"}})])]),t._v(" "),n("path",{ref:"star1",attrs:{fill:"#AE9A6E",d:"M6.2,268.7c0,2.4,0.8,3.8,2.2,3.6c1.6-0.3,3.2,0.9,2.7,2c-0.2,0.5-1.1,1-2.1,1.2l-1.8,0.3v3.1\n        c0,2.6-0.1,3.1-1,3.1c-1.2,0-1.6-1-1.6-4.2c0-2.5,0-2.5-1.7-2.5c-0.9,0-2.1-0.3-2.5-0.5c-0.7-0.5-0.6-0.6,0.2-1.3\n        c0.6-0.4,1.6-0.8,2.2-0.8c0.9,0,1.1-0.4,1.4-2.6c0.3-1.8,0.6-2.6,1.1-2.6C5.8,267.5,6.2,268,6.2,268.7z"}}),t._v(" "),n("path",{ref:"line1",attrs:{"fill-opacity":"0.5",fill:"#AE9A6E",d:"M115.5,261.7c0.9,1.5-1.3,1.9-23,4.3c-38.6,4.4-64.4,7.1-72.2,7.6c-7.1,0.5-7-0.5,0.3-1.6\n        c8-1.2,47.6-5.8,89.1-10.3C113,261.3,115.2,261.3,115.5,261.7z"}}),t._v(" "),n("path",{ref:"star2",attrs:{fill:"#AE9A6E",d:"M126.2,256.8c0.1,1.2,0.4,1.6,1.7,1.8c2.3,0.4,2.5,2.4,0.3,3.2c-1.5,0.5-1.6,0.7-1.6,3.1\n        c0,3.1-0.4,4.1-1.6,4.1c-1.4,0-2.1-1.2-2-3.9l0.2-2.5l-2.2-0.2c-3.8-0.3-3.2-2,1-2.9c1-0.3,1.4-0.7,1.7-2\n        C124.5,254.2,125.9,253.8,126.2,256.8z"}}),t._v(" "),n("path",{ref:"line2",attrs:{"fill-opacity":"0.5",fill:"#AE9A6E",d:"M238.1,235.4c0.2,0.3,0.1,0.7-0.1,1c-0.3,0.3-7.4,2.1-16,4.1c-20.7,5-28.5,6.9-37.5,9.1\n        c-26.1,6.4-47.5,11.1-49.7,11.1c-2,0-0.7-1,2.5-2.1c5-1.6,26.4-6.7,51.1-12.4c4.1-0.9,7.8-1.8,15.5-3.6c2.6-0.6,11.6-2.7,17.6-4.1\n        c2.6-0.6,7-1.7,9.8-2.3C237.5,234.6,237.7,234.6,238.1,235.4z"}}),t._v(" "),n("path",{ref:"star3",attrs:{fill:"#AE9A6E",d:"M247,228.1c0.2,1.7,0.2,1.7,2.4,1.4c1.7-0.3,2.4-0.1,2.9,0.5c0.6,0.7,0.5,1-0.5,1.8c-0.7,0.6-2,1-2.9,1\n        c-1.9,0-2.3,0.6-2.3,3.6c0,2.4-1,3.9-2.3,3.4c-0.8-0.3-0.9-0.8-0.7-3.3l0.2-2.9l-1.7-0.2c-2.3-0.2-2.1-1.3,0.4-2.3\n        c1.1-0.4,2.1-1.1,2.1-1.6c0-1.5,1-3.5,1.7-3.3C246.6,226.2,246.9,227.1,247,228.1z"}}),t._v(" "),n("path",{ref:"line3",attrs:{"fill-opacity":"0.5",fill:"#AE9A6E",d:"M323.6,167.1c-0.2,0.7-15.1,14.2-42.8,38.7C263.5,221,257,226.5,256,226.5\n        c-1.7,0,8.8-9.7,40.5-37.7c17.3-15.2,19.1-16.9,23.3-20.6C321.9,166.3,323.9,165.7,323.6,167.1z"}}),t._v(" "),n("path",{ref:"star4",attrs:{fill:"#AE9A6E",d:"M331.8,154c-0.2,0.9-0.4,2.1-0.6,2.6c-0.3,0.6-0.1,1,0.6,1.2c3.4,1.1,3.9,1.4,3.7,2.5\n        c-0.2,1.1-1.2,1.3-4.3,0.6c-1.4-0.4-1.6-0.3-2.6,1.9c-0.7,1.5-1.4,2.3-2.2,2.4c-0.9,0.2-1.2-0.1-1.2-1c0.1-0.7,0.4-1.8,0.8-2.5\n        c1.1-1.9,1-2.4-1-3.6c-1-0.6-1.8-1.5-1.8-1.9c0-0.8,0.5-0.8,4.1,0.1c1.1,0.3,1.4,0,2.5-1.8C331.2,151.9,332.2,151.7,331.8,154z"}}),t._v(" "),n("path",{ref:"line4",attrs:{"fill-opacity":"0.5",fill:"#AE9A6E",d:"M373.3,16.9c0,0.5-0.4,2.4-1,4.3c-0.5,1.8-1.9,6.7-3.1,10.8c-13.5,48.4-27.9,98.5-30.3,106.1\n        c-3.7,11.3-4.6,11.6-1.9,0.5c2.4-9.9,14.6-53.1,29-102.7c2.2-7.7,4.4-15.4,4.9-17c0.5-1.8,1.1-3,1.6-3\n        C373,15.9,373.3,16.4,373.3,16.9z"}}),t._v(" "),n("path",{ref:"star5",attrs:{fill:"#AE9A6E",d:"M375.5,1.9c0.3,1.5,0.4,1.6,2.5,1.2c1.9-0.3,2.1-0.3,1.9,0.6c-0.1,0.6-0.9,1.2-2,1.6\n        c-1.7,0.6-1.8,0.7-1.7,2.5c0.1,1,0.1,2.1-0.2,2.4c-0.6,0.9-1.8-0.4-2.1-2.4c-0.3-1.7-0.5-1.8-2.3-1.8c-2.6,0-2.6-0.8,0.1-1.6\n        c2-0.6,2.8-1.8,2.5-3.4c-0.2-0.9,0.1-1.3,0.5-1C375,0.2,375.4,1.1,375.5,1.9z"}}),t._v(" "),n("g",{ref:"solidLines",class:t.$style.solidLines},[n("path",{attrs:{fill:"#AE9A6E",d:"M115.5,261.7c0.9,1.5-1.3,1.9-23,4.3c-38.6,4.4-64.4,7.1-72.2,7.6c-7.1,0.5-7-0.5,0.3-1.6\n          c8-1.2,47.6-5.8,89.1-10.3C113,261.3,115.2,261.3,115.5,261.7z"}}),t._v(" "),n("path",{attrs:{fill:"#AE9A6E",d:"M238.1,235.4c0.2,0.3,0.1,0.7-0.1,1c-0.3,0.3-7.4,2.1-16,4.1c-20.7,5-28.5,6.9-37.5,9.1\n          c-26.1,6.4-47.5,11.1-49.7,11.1c-2,0-0.7-1,2.5-2.1c5-1.6,26.4-6.7,51.1-12.4c4.1-0.9,7.8-1.8,15.5-3.6c2.6-0.6,11.6-2.7,17.6-4.1\n          c2.6-0.6,7-1.7,9.8-2.3C237.5,234.6,237.7,234.6,238.1,235.4z"}}),t._v(" "),n("path",{attrs:{fill:"#AE9A6E",d:"M323.6,167.1c-0.2,0.7-15.1,14.2-42.8,38.7C263.5,221,257,226.5,256,226.5c-1.7,0,8.8-9.7,40.5-37.7\n          c17.3-15.2,19.1-16.9,23.3-20.6C321.9,166.3,323.9,165.7,323.6,167.1z"}}),t._v(" "),n("path",{attrs:{fill:"#AE9A6E",d:"M373.3,16.9c0,0.5-0.4,2.4-1,4.3c-0.5,1.8-1.9,6.7-3.1,10.8c-13.5,48.4-27.9,98.5-30.3,106.1\n          c-3.7,11.3-4.6,11.6-1.9,0.5c2.4-9.9,14.6-53.1,29-102.7c2.2-7.7,4.4-15.4,4.9-17c0.5-1.8,1.1-3,1.6-3\n          C373,15.9,373.3,16.4,373.3,16.9z"}})])])])}),[],!1,(function(t){this.$style=T.default.locals||T.default}),null,null);e.a=component.exports},767:function(t,e,n){"use strict";var r=n(744),o=n.n(r);n.d(e,"default",(function(){return o.a}))},768:function(t,e,n){var r=n(27)(!1);r.push([t.i,".solidLines-REqpLos{-webkit-clip-path:url(#constellationMask);clip-path:url(#constellationMask)}",""]),r.locals={solidLines:"solidLines-REqpLos"},t.exports=r}}]);