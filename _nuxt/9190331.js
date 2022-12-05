(window.webpackJsonp = window.webpackJsonp || []).push([
    [3],
    {
        290: function (t, e, n) {
            "use strict";
            n.r(e);
            var l = n(10),
                r = n(0),
                c = (n(43), n(26), n(2)),
                o = n(4),
                h = n(9),
                f = n.n(h),
                d = n(58),
                v = n(23),
                x = n(44),
                F = n(113),
                m = n(287),
                y = n(761),
                w = n(68),
                L = n(742),
                _ = n(402),
                O = n(743),
                content = n(12),
                T = n(50),
                M = n(42),
                C = function (t, e, n, desc) {
                    var l,
                        r = arguments.length,
                        c = r < 3 ? e : null === desc ? (desc = Object.getOwnPropertyDescriptor(e, n)) : desc;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, desc);
                    else for (var i = t.length - 1; i >= 0; i--) (l = t[i]) && (c = (r < 3 ? l(c) : r > 3 ? l(e, n, c) : l(e, n)) || c);
                    return r > 3 && c && Object.defineProperty(e, n, c), c;
                },
                N = (function (t) {
                    function e() {
                        var e;
                        return ((e = t.apply(this, arguments) || this).content = {}), (e.splitTextLines = []), e;
                    }
                    Object(r.a)(e, t);
                    var n = e.prototype;
                    return (
                        (n.beforeDestroy = function () {
                            this.disposables && this.disposables.dispose();
                        }),
                        (n.mounted = function () {
                            this.splitTextLines.push(new F.SplitText(this.$refs.lineTwo, { type: "chars" })), this.splitTextLines.push(new F.SplitText(this.$refs.subtitle, { type: "lines" }));
                        }),
                        (n.handleAllComponentsReady = function () {
                            (this.transitionController = new _.default(this)),
                                (this.disposables = new x.DisposableManager()),
                                this.disposables.add(
                                    Object(v.addEventListener)(this.transitionController, d.TransitionEvent.types.TRANSITION_IN_COMPLETE, this.handleTransitionInComplete),
                                    Object(v.addEventListener)(this.transitionController, d.TransitionEvent.types.TRANSITION_IN_START, this.handleTransitionInStart)
                                ),
                                this.isReady();
                        }),
                        (n.handleTransitionInComplete = function () {}),
                        (n.handleStartClick = function () {
                            var t = this;
                            this.$sound.play(T.a.MUSIC_BG__LOOP, M.a.MUSIC, 1, 1, !0);
                            var progress = { value: 0 };
                            this.$sound.play(T.a.MOVEMENT_WHOOSH_1, M.a.AMBIENT),
                                c.default.to(progress, {
                                    value: 1,
                                    duration: 4,
                                    ease: o.l.easeOut,
                                    onUpdate: function () {
                                        t.$webgl.setIntroProgress(progress.value);
                                    },
                                }),
                                this.$router.push({ name: this.RouteNames.SKY });
                        }),
                        (n.handleTransitionInStart = function () {
                            this.$gtm.push({ event: "startConvexity", event_name: "startConvexity", category: "experience", action: "start" });
                        }),
                        (n.asyncData = (function () {
                            var t = Object(l.a)(
                                regeneratorRuntime.mark(function t(e) {
                                    var n, l, r, c, o, h, f;
                                    return regeneratorRuntime.wrap(function (t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    return (n = e.$prismic), (l = e.store), (t.next = 3), Object(O.d)(n);
                                                case 3:
                                                    if (((t.t0 = t.sent), t.t0)) {
                                                        t.next = 6;
                                                        break;
                                                    }
                                                    t.t0 = {};
                                                case 6:
                                                    return (r = t.t0), (t.next = 9), Object(O.a)(n);
                                                case 9:
                                                    if (((t.t1 = t.sent), t.t1)) {
                                                        t.next = 12;
                                                        break;
                                                    }
                                                    t.t1 = {};
                                                case 12:
                                                    return (c = t.t1), (t.next = 15), Object(O.c)(n);
                                                case 15:
                                                    if (((t.t2 = t.sent), t.t2)) {
                                                        t.next = 18;
                                                        break;
                                                    }
                                                    t.t2 = {};
                                                case 18:
                                                    return (o = t.t2), (t.next = 21), Object(O.f)(n);
                                                case 21:
                                                    if (((t.t3 = t.sent), t.t3)) {
                                                        t.next = 24;
                                                        break;
                                                    }
                                                    t.t3 = {};
                                                case 24:
                                                    return (h = t.t3), (t.next = 27), Object(O.e)(n);
                                                case 27:
                                                    if (((t.t4 = t.sent), t.t4)) {
                                                        t.next = 30;
                                                        break;
                                                    }
                                                    t.t4 = {};
                                                case 30:
                                                    return (f = t.t4), (t.next = 33), l.dispatch("content/" + content.SETUP_PRINCIPLES, h);
                                                case 33:
                                                    return (t.next = 35), l.dispatch("content/" + content.SETUP_GLOBALS, o);
                                                case 35:
                                                    return (t.next = 37), l.dispatch("content/" + content.SETUP_NEBULAS, f);
                                                case 37:
                                                    return (t.next = 39), l.dispatch("content/" + content.SETUP_SKY_PAGE_CONTENT, Object.assign({}, r, c));
                                                case 39:
                                                    return t.abrupt("return", { content: { page: r, globals: o } });
                                                case 40:
                                                case "end":
                                                    return t.stop();
                                            }
                                    }, t);
                                })
                            );
                            return function (e) {
                                return t.apply(this, arguments);
                            };
                        })()),
                        e
                    );
                })(L.a),
                I = (N = C([f()({ components: { Ring: m.a, IntroConstellation: y.a, PrimaryButton: w.a } })], N)),
                $ = n(769),
                S = n(11);
            var component = Object(S.a)(
                I,
                function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n(
                        "div",
                        { ref: "container", class: ["abs-fill", t.$style.homePage] },
                        [
                            n("Ring", { ref: "ring", class: t.$style.ring }),
                            t._v(" "),
                            n(
                                "div",
                                { ref: "content", class: t.$style.content },
                                [
                                    n("IntroConstellation", { ref: "constellation", class: t.$style.constellation }),
                                    t._v(" "),
                                    n("h1", { ref: "heading", class: [t.$style.heading], attrs: { "aria-label": "Scopri le tue stelle" } }, [
                                        n("span", { ref: "lineOne", class: ["heading-01", t.$style.line, t.$style.lineOne] }, [
                                            t._v(" "),
                                            n("span", { ref: "lineOne", class: ["heading-01", t.$style.line, t.$style.lineOne] }, [t._v("Benvenuti su")]),
                                            n("svg", { ref: "svg", class: t.$style.svg, attrs: { viewBox: "0 0 390.4 81.8", "aria-hidden": "true" } }, [
                                                n("g", [
                                                   
                                                 
                                                   
                                                    t._v(" "),
                                               
                                                ]),
                                                t._v(" "),
                                                n("line", { attrs: { fill: "none", stroke: "#FFFFFF", x1: "256", y1: "16.7", x2: "215.6", y2: "69" } }),
                                                t._v(" "),
                                                n("circle", { attrs: { fill: "#FFFFFF", cx: "235.7", cy: "42.9", r: "2.5" } }),
                                            ]),
                                        ]),
                                        
                                        t._v(" "),
                                        n("span", { ref: "lineTwo", class: ["heading-01", t.$style.line, t.$style.lineTwo] }, [t._v("Testo di prova")]),
                                    ]),
                                    t._v(" "),
                                    n("p", { ref: "subtitle", class: [t.$style.subtitle], domProps: { innerHTML: t._s(t.$sanitize(t.content.page.subtitle)) } }),
                                    t._v(" "),
                                    n("PrimaryButton", { ref: "start", class: [t.$style.start], attrs: { label: t.content.page.startButton, type: t.ButtonType.ACTION }, on: { click: t.handleStartClick } }),
                                ],
                                1
                            ),
                        ],
                        1
                    );
                },
                [],
                !1,
                function (t) {
                    this.$style = $.default.locals || $.default;
                },
                null,
                null
            );
            e.default = component.exports;
        },
        745: function (t, e, n) {
            var content = n(770);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [[t.i, content, ""]]), content.locals && (t.exports = content.locals);
            (0, n(28).default)("c71807f8", content, !0, { sourceMap: !1 });
        },
        769: function (t, e, n) {
            "use strict";
            var l = n(745),
                r = n.n(l);
            n.d(e, "default", function () {
                return r.a;
            });
        },
        770: function (t, e, n) {
            var l = n(27)(!1);
            l.push([
                t.i,
                '.homePage-ykleamp{display:flex;flex-direction:column;align-items:center;justify-content:center;overflow:hidden}.heading-3qLLsY3{margin-bottom:20px;text-align:center;will-change:transform;position:relative}.line-IWGN\\+wv{display:block}.lineOne-i43pO39{margin-left:clamp(46px,calc(6.49997px + 6.17188vw),125px);font-weight:300;line-height:1.31;position:relative;display:flex;align-items:center}.svg-4Xv4q-4{width:5em}.lineTwo-L56MOxd{margin-right:clamp(61px,calc(-18.50003px + 12.42188vw),220px);line-height:1.31}.lineTwo-L56MOxd,.subtitle-Fe6iN76{font-family:"Poppins",sans-serif;font-weight:300}.subtitle-Fe6iN76{width:277px;letter-spacing:.0625em;line-height:1.5;text-align:center;margin:80px auto 0;font-size:16px}@media screen and (min-width:640px){.subtitle-Fe6iN76{font-size:calc(14px + .3125vw)}}@media screen and (min-width:1920px){.subtitle-Fe6iN76{font-size:20px}}.equals-08QMW6J{width:clamp(20px,calc(12.49997px + 1.17188vw),35px);display:flex;flex-direction:column;position:absolute;right:clamp(25px,calc(-25px + 7.8125vw),125px);margin-top:clamp(5px,.78125vw,15px);top:50%;transform:translateY(-50%)}.content-i9My6jK{position:relative}.constellation-hZsNN9G{position:absolute;bottom:80px;right:-5%;width:70%}.equalsLine-LCBprcn{width:100%;height:2px;background-color:#fff;border-radius:1px;margin:clamp(3px,calc(1px + .3125vw),7px) 0;display:block}.start-nYLDvr-{position:absolute;top:100%;left:50%;transform:translateX(-50%);margin-top:20px}.ring-IazQ2DB{left:-30%;width:160%}@media (min-width:768px){.heading-3qLLsY3{margin-bottom:0}.ring-IazQ2DB{left:0;width:100%}.subtitle-Fe6iN76{position:absolute;left:50%;width:183px;margin-top:8px;margin-left:122px;text-align:right}.constellation-hZsNN9G{bottom:-80px;right:3%}.start-nYLDvr-{margin-top:120px}}',
                "",
            ]),
                (l.locals = {
                    homePage: "homePage-ykleamp",
                    heading: "heading-3qLLsY3",
                    line: "line-IWGN+wv",
                    lineOne: "lineOne-i43pO39",
                    svg: "svg-4Xv4q-4",
                    lineTwo: "lineTwo-L56MOxd",
                    subtitle: "subtitle-Fe6iN76",
                    equals: "equals-08QMW6J",
                    content: "content-i9My6jK",
                    constellation: "constellation-hZsNN9G",
                    equalsLine: "equalsLine-LCBprcn",
                    start: "start-nYLDvr-",
                    ring: "ring-IazQ2DB",
                }),
                (t.exports = l);
        },
    },
]);
