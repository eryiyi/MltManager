(function () {
    var h = {}, mt = {}, c = {
        id: "91cf34f62b9bedb16460ca36cf192f4c",
        dm: ["cnhnb.com"],
        js: "tongji.baidu.com/hm-web/js/",
        etrk: [{id: "index_gologin", eventType: "onclick"}, {id: "login_wx", eventType: "onclick"}, {
            id: "login_qq",
            eventType: "onclick"
        }, {id: "login_wb", eventType: "onclick"}, {id: "button-phone", eventType: "onclick"}, {
            id: "checkbox",
            eventType: "onclick"
        }, {id: "reg_next", eventType: "onclick"}, {id: "m_category", eventType: "onclick"}, {
            id: "m_market",
            eventType: "onclick"
        }, {id: "nav-img-box", eventType: "onclick"}, {id: "m_news", eventType: "onclick"}, {
            id: "gohangqing",
            eventType: "onclick"
        }, {id: "m_download", eventType: "onclick"}, {id: "goindustry_0", eventType: "onclick"}, {
            id: "goindustry_1",
            eventType: "onclick"
        }, {id: "gohome", eventType: "onclick"}, {id: "gocategory", eventType: "onclick"}, {
            id: "goopen",
            eventType: "onclick"
        }, {id: "gocart", eventType: "onclick"}, {id: "gomyhome", eventType: "onclick"}, {
            id: "gopc",
            eventType: "onclick"
        }, {id: "goapp", eventType: "onclick"}, {id: "imgCode", eventType: "onclick"}],
        icon: '',
        ctrk: false,
        align: -1,
        nv: -1,
        vdur: 1800000,
        age: 31536000000,
        rec: 1,
        rp: [],
        trust: 1,
        vcard: 3420965,
        qiao: 0,
        lxb: 0,
        conv: 0,
        med: 0,
        cvcc: {id: /wpa|qq_kefu|launchBtn/i, q: /openqq|tencent:\/\/|qq\.(com|htm)/i},
        cvcf: ['accountInfo_next', 'reg_next'],
        apps: ''
    };
    var p = void 0, q = !0, r = null, w = !1;
    mt.k = {};
    mt.k.P = /msie (\d+\.\d+)/i.test(navigator.userAgent);
    mt.k.Na = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? document.documentMode || +RegExp.$1 : p;
    mt.k.cookieEnabled = navigator.cookieEnabled;
    mt.k.javaEnabled = navigator.javaEnabled();
    mt.k.language = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "";
    mt.k.Sa = (window.screen.width || 0) + "x" + (window.screen.height || 0);
    mt.k.colorDepth = window.screen.colorDepth || 0;
    mt.cookie = {};
    mt.cookie.set = function (a, e, f) {
        var d;
        f.L && (d = new Date, d.setTime(d.getTime() + f.L));
        document.cookie = a + "=" + e + (f.domain ? "; domain=" + f.domain : "") + (f.path ? "; path=" + f.path : "") + (d ? "; expires=" + d.toGMTString() : "") + (f.gb ? "; secure" : "")
    };
    mt.cookie.get = function (a) {
        return (a = RegExp("(^| )" + a + "=([^;]*)(;|$)").exec(document.cookie)) ? a[2] : r
    };
    mt.p = {};
    mt.p.M = function (a) {
        return document.getElementById(a)
    };
    mt.p.xa = function (a) {
        var e;
        for (e = "A"; (a = a.parentNode) && 1 == a.nodeType;)if (a.tagName == e)return a;
        return r
    };
    (mt.p.T = function () {
        function a() {
            if (!a.D) {
                a.D = q;
                for (var b = 0, e = d.length; b < e; b++)d[b]()
            }
        }

        function e() {
            try {
                document.documentElement.doScroll("left")
            } catch (d) {
                setTimeout(e, 1);
                return
            }
            a()
        }

        var f = w, d = [], b;
        document.addEventListener ? b = function () {
            document.removeEventListener("DOMContentLoaded", b, w);
            a()
        } : document.attachEvent && (b = function () {
            "complete" === document.readyState && (document.detachEvent("onreadystatechange", b), a())
        });
        (function () {
            if (!f)if (f = q, "complete" === document.readyState)a.D = q; else if (document.addEventListener)document.addEventListener("DOMContentLoaded",
                b, w), window.addEventListener("load", a, w); else if (document.attachEvent) {
                document.attachEvent("onreadystatechange", b);
                window.attachEvent("onload", a);
                var d = w;
                try {
                    d = window.frameElement == r
                } catch (m) {
                }
                document.documentElement.doScroll && d && e()
            }
        })();
        return function (b) {
            a.D ? b() : d.push(b)
        }
    }()).D = w;
    mt.event = {};
    mt.event.c = function (a, e, f) {
        a.attachEvent ? a.attachEvent("on" + e, function (d) {
            f.call(a, d)
        }) : a.addEventListener && a.addEventListener(e, f, w)
    };
    mt.event.preventDefault = function (a) {
        a.preventDefault ? a.preventDefault() : a.returnValue = w
    };
    mt.m = {};
    mt.m.parse = function () {
        return (new Function('return (" + source + ")'))()
    };
    mt.m.stringify = function () {
        function a(a) {
            /["\\\x00-\x1f]/.test(a) && (a = a.replace(/["\\\x00-\x1f]/g, function (a) {
                var d = f[a];
                if (d)return d;
                d = a.charCodeAt();
                return "\\u00" + Math.floor(d / 16).toString(16) + (d % 16).toString(16)
            }));
            return '"' + a + '"'
        }

        function e(a) {
            return 10 > a ? "0" + a : a
        }

        var f = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"};
        return function (d) {
            switch (typeof d) {
                case "undefined":
                    return "undefined";
                case "number":
                    return isFinite(d) ? String(d) : "null";
                case "string":
                    return a(d);
                case "boolean":
                    return String(d);
                default:
                    if (d === r)return "null";
                    if (d instanceof Array) {
                        var b = ["["], f = d.length, m, g, k;
                        for (g = 0; g < f; g++)switch (k = d[g], typeof k) {
                            case "undefined":
                            case "function":
                            case "unknown":
                                break;
                            default:
                                m && b.push(","), b.push(mt.m.stringify(k)), m = 1
                        }
                        b.push("]");
                        return b.join("")
                    }
                    if (d instanceof Date)return '"' + d.getFullYear() + "-" + e(d.getMonth() + 1) + "-" + e(d.getDate()) + "T" + e(d.getHours()) + ":" + e(d.getMinutes()) + ":" + e(d.getSeconds()) + '"';
                    m = ["{"];
                    g = mt.m.stringify;
                    for (f in d)if (Object.prototype.hasOwnProperty.call(d, f))switch (k =
                        d[f], typeof k) {
                        case "undefined":
                        case "unknown":
                        case "function":
                            break;
                        default:
                            b && m.push(","), b = 1, m.push(g(f) + ":" + g(k))
                    }
                    m.push("}");
                    return m.join("")
            }
        }
    }();
    mt.lang = {};
    mt.lang.d = function (a, e) {
        return "[object " + e + "]" === {}.toString.call(a)
    };
    mt.lang.cb = function (a) {
        return mt.lang.d(a, "Number") && isFinite(a)
    };
    mt.lang.fb = function (a) {
        return mt.lang.d(a, "String")
    };
    mt.localStorage = {};
    mt.localStorage.I = function () {
        if (!mt.localStorage.h)try {
            mt.localStorage.h = document.createElement("input"), mt.localStorage.h.type = "hidden", mt.localStorage.h.style.display = "none", mt.localStorage.h.addBehavior("#default#userData"), document.getElementsByTagName("head")[0].appendChild(mt.localStorage.h)
        } catch (a) {
            return w
        }
        return q
    };
    mt.localStorage.set = function (a, e, f) {
        var d = new Date;
        d.setTime(d.getTime() + f || 31536E6);
        try {
            window.localStorage ? (e = d.getTime() + "|" + e, window.localStorage.setItem(a, e)) : mt.localStorage.I() && (mt.localStorage.h.expires = d.toUTCString(), mt.localStorage.h.load(document.location.hostname), mt.localStorage.h.setAttribute(a, e), mt.localStorage.h.save(document.location.hostname))
        } catch (b) {
        }
    };
    mt.localStorage.get = function (a) {
        if (window.localStorage) {
            if (a = window.localStorage.getItem(a)) {
                var e = a.indexOf("|"), f = a.substring(0, e) - 0;
                if (f && f > (new Date).getTime())return a.substring(e + 1)
            }
        } else if (mt.localStorage.I())try {
            return mt.localStorage.h.load(document.location.hostname), mt.localStorage.h.getAttribute(a)
        } catch (d) {
        }
        return r
    };
    mt.localStorage.remove = function (a) {
        if (window.localStorage)window.localStorage.removeItem(a); else if (mt.localStorage.I())try {
            mt.localStorage.h.load(document.location.hostname), mt.localStorage.h.removeAttribute(a), mt.localStorage.h.save(document.location.hostname)
        } catch (e) {
        }
    };
    mt.sessionStorage = {};
    mt.sessionStorage.set = function (a, e) {
        if (window.sessionStorage)try {
            window.sessionStorage.setItem(a, e)
        } catch (f) {
        }
    };
    mt.sessionStorage.get = function (a) {
        return window.sessionStorage ? window.sessionStorage.getItem(a) : r
    };
    mt.sessionStorage.remove = function (a) {
        window.sessionStorage && window.sessionStorage.removeItem(a)
    };
    mt.V = {};
    mt.V.log = function (a, e) {
        var f = new Image, d = "mini_tangram_log_" + Math.floor(2147483648 * Math.random()).toString(36);
        window[d] = f;
        f.onload = f.onerror = f.onabort = function () {
            f.onload = f.onerror = f.onabort = r;
            f = window[d] = r;
            e && e(a)
        };
        f.src = a
    };
    mt.H = {};
    mt.H.Fa = function () {
        var a = "";
        if (navigator.plugins && navigator.mimeTypes.length) {
            var e = navigator.plugins["Shockwave Flash"];
            e && e.description && (a = e.description.replace(/^.*\s+(\S+)\s+\S+$/, "$1"))
        } else if (window.ActiveXObject)try {
            if (e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a = e.GetVariable("$version")) && (a = a.replace(/^.*\s+(\d+),(\d+).*$/, "$1.$2"))
        } catch (f) {
        }
        return a
    };
    mt.H.ra = function (a, e, f, d, b) {
        return '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="' + a + '" width="' + f + '" height="' + d + '"><param name="movie" value="' + e + '" /><param name="flashvars" value="' + (b || "") + '" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="' + a + '" width="' + f + '" height="' + d + '" src="' + e + '" flashvars="' + (b || "") + '" allowscriptaccess="always" /></object>'
    };
    mt.url = {};
    mt.url.l = function (a, e) {
        var f = a.match(RegExp("(^|&|\\?|#)(" + e + ")=([^&#]*)(&|$|#)", ""));
        return f ? f[3] : r
    };
    mt.url.bb = function (a) {
        return (a = a.match(/^(https?:)\/\//)) ? a[1] : r
    };
    mt.url.Ba = function (a) {
        return (a = a.match(/^(https?:\/\/)?([^\/\?#]*)/)) ? a[2].replace(/.*@/, "") : r
    };
    mt.url.Z = function (a) {
        return (a = mt.url.Ba(a)) ? a.replace(/:\d+$/, "") : a
    };
    mt.url.ab = function (a) {
        return (a = a.match(/^(https?:\/\/)?[^\/]*(.*)/)) ? a[2].replace(/[\?#].*/, "").replace(/^$/, "/") : r
    };
    h.j = {
        Ma: "http://tongji.baidu.com/hm-web/welcome/ico",
        S: "hm.baidu.com/hm.gif",
        ka: "baidu.com",
        Ja: "hmmd",
        Ka: "hmpl",
        Ia: "hmkw",
        Ga: "hmci",
        La: "hmsr",
        Ha: "hmcu",
        z: 0,
        o: Math.round(+new Date / 1E3),
        protocol: "https:" === document.location.protocol ? "https:" : "http:",
        eb: 0,
        pa: 6E5,
        qa: 10,
        W: 1024,
        oa: 1,
        w: 2147483647,
        ea: "cc cf ci ck cl cm cp cu cw ds ep et fl ja ln lo lt nv rnd si st su v cv lv api u tt".split(" ")
    };
    (function () {
        var a = {
            s: {}, c: function (a, f) {
                this.s[a] = this.s[a] || [];
                this.s[a].push(f)
            }, B: function (a, f) {
                this.s[a] = this.s[a] || [];
                for (var d = this.s[a].length, b = 0; b < d; b++)this.s[a][b](f)
            }
        };
        return h.r = a
    })();
    (function () {
        function a(a, d) {
            var b = document.createElement("script");
            b.charset = "utf-8";
            e.d(d, "Function") && (b.readyState ? b.onreadystatechange = function () {
                if ("loaded" === b.readyState || "complete" === b.readyState)b.onreadystatechange = r, d()
            } : b.onload = function () {
                d()
            });
            b.src = a;
            var l = document.getElementsByTagName("script")[0];
            l.parentNode.insertBefore(b, l)
        }

        var e = mt.lang;
        return h.load = a
    })();
    (function () {
        function a() {
            var a = "";
            h.b.a.nv ? (a = encodeURIComponent(document.referrer), window.sessionStorage ? f.set("Hm_from_" + c.id, a) : e.set("Hm_from_" + c.id, a, 864E5)) : a = (window.sessionStorage ? f.get("Hm_from_" + c.id) : e.get("Hm_from_" + c.id)) || "";
            return a
        }

        var e = mt.localStorage, f = mt.sessionStorage;
        return h.X = a
    })();
    (function () {
        var a = h.j, e = mt.H, f = {
            init: function () {
                if ("" !== c.icon) {
                    var d;
                    d = c.icon.split("|");
                    var b = a.Ma + "?s=" + c.id, f = ("http:" == a.protocol ? "http://eiv" : "https://bs") + ".baidu.com" + d[0] + "." + d[1];
                    switch (d[1]) {
                        case "swf":
                            d = e.ra("HolmesIcon" + a.o, f, d[2], d[3], "s=" + b);
                            break;
                        case "gif":
                            d = '<a href="' + b + '" target="_blank"><img border="0" src="' + f + '" width="' + d[2] + '" height="' + d[3] + '"></a>';
                            break;
                        default:
                            d = '<a href="' + b + '" target="_blank">' + d[0] + "</a>"
                    }
                    document.write(d)
                }
            }
        };
        h.r.c("pv-b", f.init);
        return f
    })();
    (function () {
        var a = mt.p, e = mt.event, f = {
            ga: function () {
                e.c(document, "click", f.ua());
                for (var d = c.etrk.length, b = 0; b < d; b++) {
                    var l = c.etrk[b], m = a.M(decodeURIComponent(l.id));
                    m && e.c(m, l.eventType, f.K())
                }
            }, K: function () {
                return function (a) {
                    (a.target || a.srcElement).setAttribute("HM_fix", a.clientX + ":" + a.clientY);
                    h.b.a.et = 1;
                    h.b.a.ep = "{id:" + this.id + ",eventType:" + a.type + "}";
                    h.b.g()
                }
            }, ua: function () {
                return function (a) {
                    var b = a.target || a.srcElement;
                    if (b) {
                        var e = b.getAttribute("HM_fix"), f = a.clientX + ":" + a.clientY;
                        if (e && e ==
                            f)b.removeAttribute("HM_fix"); else if (e = c.etrk.length, 0 < e) {
                            for (f = {}; b && b != document.body;)b.id && (f[b.id] = ""), b = b.parentNode;
                            for (b = 0; b < e; b++) {
                                var g = decodeURIComponent(c.etrk[b].id);
                                f.hasOwnProperty(g) && (h.b.a.et = 1, h.b.a.ep = "{id:" + g + ",eventType:" + a.type + "}", h.b.g())
                            }
                        }
                    }
                }
            }
        };
        h.r.c("pv-b", f.ga);
        return f
    })();
    (function () {
        var a = mt.p, e = mt.event, f = mt.k, d = h.j, b = [], l = {
            fa: function () {
                c.ctrk && (e.c(document, "mouseup", l.na()), e.c(window, "unload", function () {
                    l.F()
                }), setInterval(function () {
                    l.F()
                }, d.pa))
            }, na: function () {
                return function (a) {
                    a = l.ya(a);
                    if ("" !== a) {
                        var e = (d.protocol + "//" + d.S + "?" + h.b.da().replace(/ep=[^&]*/, "ep=" + encodeURIComponent("[" + a + "]"))).length;
                        e + (d.w + "").length > d.W || (e + encodeURIComponent(b.join(",") + (b.length ? "," : "")).length + (d.w + "").length > d.W && l.F(), b.push(a), (b.length >= d.qa || /t:a/.test(a)) && l.F())
                    }
                }
            },
            ya: function (b) {
                if (0 === d.oa) {
                    var e = b.target || b.srcElement, k = e.tagName.toLowerCase();
                    if ("embed" == k || "object" == k)return ""
                }
                f.P ? (e = Math.max(document.documentElement.scrollTop, document.body.scrollTop), k = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft), k = b.clientX + k, e = b.clientY + e) : (k = b.pageX, e = b.pageY);
                var n = window.innerWidth || document.documentElement.clientWidth || document.body.offsetWidth;
                switch (c.align) {
                    case 1:
                        k -= n / 2;
                        break;
                    case 2:
                        k -= n
                }
                k = "{x:" + k + ",y:" + e + ",";
                e = b.target || b.srcElement;
                return k = (b = "a" == e.tagName.toLowerCase() ? e : a.xa(e)) ? k + ("t:a,u:" + encodeURIComponent(b.href) + "}") : k + "t:b}"
            }, F: function () {
                0 !== b.length && (h.b.a.et = 2, h.b.a.ep = "[" + b.join(",") + "]", h.b.g(), b = [])
            }
        };
        h.r.c("pv-b", l.fa);
        return l
    })();
    (function () {
        var a = mt.p, e = h.j, f = h.load, d = h.X;
        h.r.c("pv-b", function () {
            c.rec && a.T(function () {
                for (var b = 0, l = c.rp.length; b < l; b++) {
                    var m = c.rp[b][0], g = c.rp[b][1], k = a.M("hm_t_" + m);
                    if (g && !(2 == g && !k || k && "" !== k.innerHTML))k = "", k = Math.round(Math.random() * e.w), k = 4 == g ? "http://crs.baidu.com/hl.js?" + ["siteId=" + c.id, "planId=" + m, "rnd=" + k].join("&") : "http://crs.baidu.com/t.js?" + ["siteId=" + c.id, "planId=" + m, "from=" + d(), "referer=" + encodeURIComponent(document.referrer), "title=" + encodeURIComponent(document.title), "rnd=" +
                    k].join("&"), f(k)
                }
            })
        })
    })();
    (function () {
        var a = h.j, e = h.load, f = h.X;
        h.r.c("pv-b", function () {
            if (c.trust && c.vcard) {
                var d = a.protocol + "//trust.baidu.com/vcard/v.js?" + ["siteid=" + c.vcard, "url=" + encodeURIComponent(document.location.href), "source=" + f(), "rnd=" + Math.round(Math.random() * a.w), "hm=1"].join("&");
                e(d)
            }
        })
    })();
    (function () {
        function a() {
            return function () {
                h.b.a.nv = 0;
                h.b.a.st = 4;
                h.b.a.et = 3;
                h.b.a.ep = h.J.Da() + "," + h.J.Aa();
                h.b.g()
            }
        }

        function e() {
            clearTimeout(B);
            var a;
            z && (a = "visible" == document[z]);
            C && (a = !document[C]);
            g = "undefined" == typeof a ? q : a;
            if ((!m || !k) && g && n)u = q, s = +new Date; else if (m && k && (!g || !n))u = w, t += +new Date - s;
            m = g;
            k = n;
            B = setTimeout(e, 100)
        }

        function f(a) {
            var k = document, b = "";
            if (a in k)b = a; else for (var s = ["webkit", "ms", "moz", "o"], d = 0; d < s.length; d++) {
                var e = s[d] + a.charAt(0).toUpperCase() + a.slice(1);
                if (e in k) {
                    b =
                        e;
                    break
                }
            }
            return b
        }

        function d(a) {
            if (!("focus" == a.type || "blur" == a.type) || !(a.target && a.target != window))n = "focus" == a.type || "focusin" == a.type ? q : w, e()
        }

        var b = mt.event, l = h.r, m = q, g = q, k = q, n = q, v = +new Date, s = v, t = 0, u = q, z = f("visibilityState"), C = f("hidden"), B;
        e();
        (function () {
            var a = z.replace(/[vV]isibilityState/, "visibilitychange");
            b.c(document, a, e);
            b.c(window, "pageshow", e);
            b.c(window, "pagehide", e);
            "object" == typeof document.onfocusin ? (b.c(document, "focusin", d), b.c(document, "focusout", d)) : (b.c(window, "focus", d),
                b.c(window, "blur", d))
        })();
        h.J = {
            Da: function () {
                return +new Date - v
            }, Aa: function () {
                return u ? +new Date - s + t : t
            }
        };
        l.c("pv-b", function () {
            b.c(window, "unload", a())
        });
        return h.J
    })();
    (function () {
        var a = mt.lang, e = h.j, f = h.load, d = {
            Oa: function (b) {
                if ((window._dxt === p || a.d(window._dxt, "Array")) && "undefined" !== typeof h.b) {
                    var d = h.b.N();
                    f([e.protocol, "//datax.baidu.com/x.js?si=", c.id, "&dm=", encodeURIComponent(d)].join(""), b)
                }
            }, Ya: function (b) {
                if (a.d(b, "String") || a.d(b, "Number"))window._dxt = window._dxt || [], window._dxt.push(["_setUserId", b])
            }
        };
        return h.sa = d
    })();
    (function () {
        function a(k) {
            for (var b in k)if ({}.hasOwnProperty.call(k, b)) {
                var d = k[b];
                f.d(d, "Object") || f.d(d, "Array") ? a(d) : k[b] = String(d)
            }
        }

        function e(a) {
            return a.replace ? a.replace(/'/g, "'0").replace(/\*/g, "'1").replace(/!/g, "'2") : a
        }

        var f = mt.lang, d = mt.m, b = h.j, l = h.r, m = h.sa, g = {
            A: [], G: 0, ba: w, init: function () {
                g.e = 0;
                l.c("pv-b", function () {
                    g.ta();
                    g.va()
                });
                l.c("pv-d", g.wa);
                l.c("stag-b", function () {
                    h.b.a.api = g.e || g.G ? g.e + "_" + g.G : ""
                });
                l.c("stag-d", function () {
                    h.b.a.api = 0;
                    g.e = 0;
                    g.G = 0
                })
            }, ta: function () {
                var a = window._hmt ||
                    [];
                if (!a || f.d(a, "Array"))window._hmt = {
                    id: c.id, cmd: {}, push: function () {
                        for (var a = window._hmt, b = 0; b < arguments.length; b++) {
                            var k = arguments[b];
                            f.d(k, "Array") && (a.cmd[a.id].push(k), "_setAccount" === k[0] && (1 < k.length && /^[0-9a-f]{32}$/.test(k[1])) && (k = k[1], a.id = k, a.cmd[k] = a.cmd[k] || []))
                        }
                    }
                }, window._hmt.cmd[c.id] = [], window._hmt.push.apply(window._hmt, a)
            }, va: function () {
                var a = window._hmt;
                if (a && a.cmd && a.cmd[c.id])for (var b = a.cmd[c.id], d = /^_track(Event|MobConv|Order|RTEvent)$/, e = 0, f = b.length; e < f; e++) {
                    var l = b[e];
                    d.test(l[0]) ? g.A.push(l) : g.R(l)
                }
                a.cmd[c.id] = {push: g.R}
            }, wa: function () {
                if (0 < g.A.length)for (var a = 0, b = g.A.length; a < b; a++)g.R(g.A[a]);
                g.A = r
            }, R: function (a) {
                var b = a[0];
                if (g.hasOwnProperty(b) && f.d(g[b], "Function"))g[b](a)
            }, _setAccount: function (a) {
                1 < a.length && /^[0-9a-f]{32}$/.test(a[1]) && (g.e |= 1)
            }, _setAutoPageview: function (a) {
                if (1 < a.length && (a = a[1], w === a || q === a))g.e |= 2, h.b.$ = a
            }, _trackPageview: function (a) {
                if (1 < a.length && a[1].charAt && "/" === a[1].charAt(0)) {
                    g.e |= 4;
                    h.b.a.et = 0;
                    h.b.a.ep = "";
                    h.b.O ? (h.b.a.nv = 0, h.b.a.st =
                        4) : h.b.O = q;
                    var d = h.b.a.u, e = h.b.a.su;
                    h.b.a.u = b.protocol + "//" + document.location.host + a[1];
                    g.ba || (h.b.a.su = document.location.href);
                    h.b.g();
                    h.b.a.u = d;
                    h.b.a.su = e
                }
            }, _trackEvent: function (a) {
                2 < a.length && (g.e |= 8, h.b.a.nv = 0, h.b.a.st = 4, h.b.a.et = 4, h.b.a.ep = e(a[1]) + "*" + e(a[2]) + (a[3] ? "*" + e(a[3]) : "") + (a[4] ? "*" + e(a[4]) : ""), h.b.g())
            }, _setCustomVar: function (a) {
                if (!(4 > a.length)) {
                    var b = a[1], d = a[4] || 3;
                    if (0 < b && 6 > b && 0 < d && 4 > d) {
                        g.G++;
                        for (var s = (h.b.a.cv || "*").split("!"), f = s.length; f < b - 1; f++)s.push("*");
                        s[b - 1] = d + "*" + e(a[2]) +
                        "*" + e(a[3]);
                        h.b.a.cv = s.join("!");
                        a = h.b.a.cv.replace(/[^1](\*[^!]*){2}/g, "*").replace(/((^|!)\*)+$/g, "");
                        "" !== a ? h.b.setData("Hm_cv_" + c.id, encodeURIComponent(a), c.age) : h.b.Ra("Hm_cv_" + c.id)
                    }
                }
            }, _setReferrerOverride: function (a) {
                1 < a.length && (h.b.a.su = a[1].charAt && "/" === a[1].charAt(0) ? b.protocol + "//" + window.location.host + a[1] : a[1], g.ba = q)
            }, _trackOrder: function (b) {
                b = b[1];
                f.d(b, "Object") && (a(b), g.e |= 16, h.b.a.nv = 0, h.b.a.st = 4, h.b.a.et = 94, h.b.a.ep = d.stringify(b), h.b.g())
            }, _trackMobConv: function (a) {
                if (a = {
                        webim: 1,
                        tel: 2, map: 3, sms: 4, callback: 5, share: 6
                    }[a[1]])g.e |= 32, h.b.a.et = 93, h.b.a.ep = a, h.b.g()
            }, _trackRTPageview: function (b) {
                b = b[1];
                f.d(b, "Object") && (a(b), b = d.stringify(b), 512 >= encodeURIComponent(b).length && (g.e |= 64, h.b.a.rt = b))
            }, _trackRTEvent: function (e) {
                e = e[1];
                if (f.d(e, "Object")) {
                    a(e);
                    e = encodeURIComponent(d.stringify(e));
                    var l = function (a) {
                        var b = h.b.a.rt;
                        g.e |= 128;
                        h.b.a.et = 90;
                        h.b.a.rt = a;
                        h.b.g();
                        h.b.a.rt = b
                    }, m = e.length;
                    if (900 >= m)l.call(this, e); else for (var m = Math.ceil(m / 900), s = "block|" + Math.round(Math.random() *
                        b.w).toString(16) + "|" + m + "|", t = [], u = 0; u < m; u++)t.push(u), t.push(e.substring(900 * u, 900 * u + 900)), l.call(this, s + t.join("|")), t = []
                }
            }, _setUserId: function (a) {
                a = a[1];
                m.Oa();
                m.Ya(a)
            }
        };
        g.init();
        h.la = g;
        return h.la
    })();
    (function () {
        function a() {
            "undefined" === typeof window["_bdhm_loaded_" + c.id] && (window["_bdhm_loaded_" + c.id] = q, this.a = {}, this.$ = q, this.O = w, this.init())
        }

        var e = mt.url, f = mt.V, d = mt.H, b = mt.lang, l = mt.cookie, m = mt.k, g = mt.localStorage, k = mt.sessionStorage, n = h.j, v = h.r;
        a.prototype = {
            Q: function (a, b) {
                a = "." + a.replace(/:\d+/, "");
                b = "." + b.replace(/:\d+/, "");
                var d = a.indexOf(b);
                return -1 < d && d + b.length === a.length
            }, ca: function (a, b) {
                a = a.replace(/^https?:\/\//, "");
                return 0 === a.indexOf(b)
            }, C: function (a) {
                for (var b = 0; b < c.dm.length; b++)if (-1 <
                    c.dm[b].indexOf("/")) {
                    if (this.ca(a, c.dm[b]))return q
                } else {
                    var d = e.Z(a);
                    if (d && this.Q(d, c.dm[b]))return q
                }
                return w
            }, N: function () {
                for (var a = document.location.hostname, b = 0, d = c.dm.length; b < d; b++)if (this.Q(a, c.dm[b]))return c.dm[b].replace(/(:\d+)?[\/\?#].*/, "");
                return a
            }, Y: function () {
                for (var a = 0, b = c.dm.length; a < b; a++) {
                    var d = c.dm[a];
                    if (-1 < d.indexOf("/") && this.ca(document.location.href, d))return d.replace(/^[^\/]+(\/.*)/, "$1") + "/"
                }
                return "/"
            }, Ea: function () {
                if (!document.referrer)return n.o - n.z > c.vdur ? 1 : 4;
                var a = w;
                this.C(document.referrer) && this.C(document.location.href) ? a = q : (a = e.Z(document.referrer), a = this.Q(a || "", document.location.hostname));
                return a ? n.o - n.z > c.vdur ? 1 : 4 : 3
            }, getData: function (a) {
                try {
                    return l.get(a) || k.get(a) || g.get(a)
                } catch (b) {
                }
            }, setData: function (a, b, d) {
                try {
                    l.set(a, b, {domain: this.N(), path: this.Y(), L: d}), d ? g.set(a, b, d) : k.set(a, b)
                } catch (e) {
                }
            }, Ra: function (a) {
                try {
                    l.set(a, "", {domain: this.N(), path: this.Y(), L: -1}), k.remove(a), g.remove(a)
                } catch (b) {
                }
            }, Wa: function () {
                var a, b, d, e, f;
                n.z = this.getData("Hm_lpvt_" +
                c.id) || 0;
                13 === n.z.length && (n.z = Math.round(n.z / 1E3));
                b = this.Ea();
                a = 4 !== b ? 1 : 0;
                if (d = this.getData("Hm_lvt_" + c.id)) {
                    e = d.split(",");
                    for (f = e.length - 1; 0 <= f; f--)13 === e[f].length && (e[f] = "" + Math.round(e[f] / 1E3));
                    for (; 2592E3 < n.o - e[0];)e.shift();
                    f = 4 > e.length ? 2 : 3;
                    for (1 === a && e.push(n.o); 4 < e.length;)e.shift();
                    d = e.join(",");
                    e = e[e.length - 1]
                } else d = n.o, e = "", f = 1;
                this.setData("Hm_lvt_" + c.id, d, c.age);
                this.setData("Hm_lpvt_" + c.id, n.o);
                d = n.o === this.getData("Hm_lpvt_" + c.id) ? "1" : "0";
                if (0 === c.nv && this.C(document.location.href) &&
                    ("" === document.referrer || this.C(document.referrer)))a = 0, b = 4;
                this.a.nv = a;
                this.a.st = b;
                this.a.cc = d;
                this.a.lt = e;
                this.a.lv = f
            }, da: function () {
                for (var a = [], b = this.a.et, d = 0, e = n.ea.length; d < e; d++) {
                    var f = n.ea[d], g = this.a[f];
                    "undefined" !== typeof g && "" !== g && ("tt" !== f || "tt" === f && 0 === b) && a.push(f + "=" + encodeURIComponent(g))
                }
                this.a.rt && (0 === b ? a.push("rt=" + encodeURIComponent(this.a.rt)) : 90 === b && a.push("rt=" + this.a.rt));
                return a.join("&")
            }, Xa: function () {
                this.Wa();
                this.a.si = c.id;
                this.a.su = document.referrer;
                this.a.ds =
                    m.Sa;
                this.a.cl = m.colorDepth + "-bit";
                this.a.ln = m.language;
                this.a.ja = m.javaEnabled ? 1 : 0;
                this.a.ck = m.cookieEnabled ? 1 : 0;
                this.a.lo = "number" === typeof _bdhm_top ? 1 : 0;
                this.a.fl = d.Fa();
                this.a.v = "1.1.26";
                this.a.cv = decodeURIComponent(this.getData("Hm_cv_" + c.id) || "");
                this.a.tt = document.title || "";
                var a = document.location.href;
                this.a.cm = e.l(a, n.Ja) || "";
                this.a.cp = e.l(a, n.Ka) || "";
                this.a.cw = e.l(a, n.Ia) || "";
                this.a.ci = e.l(a, n.Ga) || "";
                this.a.cf = e.l(a, n.La) || "";
                this.a.cu = e.l(a, n.Ha) || ""
            }, init: function () {
                try {
                    this.Xa(), 0 ===
                    this.a.nv ? this.Ua() : this.U(".*"), h.b = this, this.ma(), v.B("pv-b"), this.Ta()
                } catch (a) {
                    var b = [];
                    b.push("si=" + c.id);
                    b.push("n=" + encodeURIComponent(a.name));
                    b.push("m=" + encodeURIComponent(a.message));
                    b.push("r=" + encodeURIComponent(document.referrer));
                    f.log(n.protocol + "//" + n.S + "?" + b.join("&"))
                }
            }, Ta: function () {
                function a() {
                    v.B("pv-d")
                }

                this.$ ? (this.O = q, this.a.et = 0, this.a.ep = "", this.g(a)) : a()
            }, g: function (a) {
                var d = this;
                d.a.rnd = Math.round(Math.random() * n.w);
                v.B("stag-b");
                var e = n.protocol + "//" + n.S + "?" + d.da();
                v.B("stag-d");
                d.ia(e);
                f.log(e, function (e) {
                    d.U(e);
                    b.d(a, "Function") && a.call(d)
                })
            }, ma: function () {
                var a = document.location.hash.substring(1), b = RegExp(c.id), d = -1 < document.referrer.indexOf(n.ka), f = e.l(a, "jn"), g = /^heatlink$|^select$/.test(f);
                a && (b.test(a) && d && g) && (this.a.rnd = Math.round(Math.random() * n.w), a = document.createElement("script"), a.setAttribute("type", "text/javascript"), a.setAttribute("charset", "utf-8"), a.setAttribute("src", n.protocol + "//" + c.js + f + ".js?" + this.a.rnd), f = document.getElementsByTagName("script")[0],
                    f.parentNode.insertBefore(a, f))
            }, ia: function (a) {
                var b = k.get("Hm_unsent_" + c.id) || "", d = this.a.u ? "" : "&u=" + encodeURIComponent(document.location.href), b = encodeURIComponent(a.replace(/^https?:\/\//, "") + d) + (b ? "," + b : "");
                k.set("Hm_unsent_" + c.id, b)
            }, U: function (a) {
                var b = k.get("Hm_unsent_" + c.id) || "";
                b && (a = encodeURIComponent(a.replace(/^https?:\/\//, "")), a = RegExp(a.replace(/([\*\(\)])/g, "\\$1") + "(%26u%3D[^,]*)?,?", "g"), (b = b.replace(a, "").replace(/,$/, "")) ? k.set("Hm_unsent_" + c.id, b) : k.remove("Hm_unsent_" + c.id))
            },
            Ua: function () {
                var a = this, b = k.get("Hm_unsent_" + c.id);
                if (b)for (var b = b.split(","), d = function (b) {
                    f.log(n.protocol + "//" + decodeURIComponent(b), function (b) {
                        a.U(b)
                    })
                }, e = 0, g = b.length; e < g; e++)d(b[e])
            }
        };
        return new a
    })();
    var x = h.j, y = h.load;
    if (c.apps) {
        var A = [x.protocol, "//ers.baidu.com/app/s.js?"];
        A.push(c.apps);
        y(A.join(""))
    }
    var D = h.j, E = h.load;
    if (c.conv && "http:" === D.protocol) {
        var F = ["http://page.baidu.com/conversion_js.php?sid="];
        F.push(c.conv);
        E(F.join(""))
    }
    var G = h.j, H = h.load;
    c.lxb && H([G.protocol, "//lxbjs.baidu.com/lxb.js?sid=", c.lxb].join(""));
    var I = h.load, J = h.j.protocol;
    if (c.qiao) {
        for (var K = [J + "//goutong.baidu.com/site/"], L = c.id, M = 5381, N = L.length, O = 0; O < N; O++)M = (33 * M + Number(L.charCodeAt(O))) % 4294967296;
        2147483648 < M && (M -= 2147483648);
        K.push(M % 1E3 + "/");
        K.push(c.id + "/b.js");
        K.push("?siteId=" + c.qiao);
        I(K.join(""))
    }
    (function () {
        var a = mt.p, e = mt.event, f = mt.url, d = mt.m;
        try {
            if (window.performance && performance.timing && "undefined" !== typeof h.b) {
                var b = +new Date, l = function (a) {
                    var b = performance.timing, d = b[a + "Start"] ? b[a + "Start"] : 0;
                    a = b[a + "End"] ? b[a + "End"] : 0;
                    return {start: d, end: a, value: 0 < a - d ? a - d : 0}
                }, m = r;
                a.T(function () {
                    m = +new Date
                });
                var g = function () {
                    var a, e, g;
                    g = l("navigation");
                    e = l("request");
                    g = {
                        netAll: e.start - g.start,
                        netDns: l("domainLookup").value,
                        netTcp: l("connect").value,
                        srv: l("response").start - e.start,
                        dom: performance.timing.domInteractive -
                        performance.timing.fetchStart,
                        loadEvent: l("loadEvent").end - g.start
                    };
                    a = document.referrer;
                    var k = a.match(/^(http[s]?:\/\/)?([^\/]+)(.*)/) || [], u = r;
                    e = r;
                    if ("www.baidu.com" === k[2] || "m.baidu.com" === k[2])u = f.l(a, "qid"), e = f.l(a, "click_t");
                    a = u;
                    g.qid = a != r ? a : "";
                    e != r ? (g.bdDom = m ? m - e : 0, g.bdRun = b - e, g.bdDef = l("navigation").start - e) : (g.bdDom = 0, g.bdRun = 0, g.bdDef = 0);
                    h.b.a.et = 87;
                    h.b.a.ep = d.stringify(g);
                    h.b.g()
                };
                e.c(window, "load", function () {
                    setTimeout(g, 500)
                })
            }
        } catch (k) {
        }
    })();
    (function () {
        var a = h.j, e = {
            init: function () {
                try {
                    if ("http:" === a.protocol) {
                        var d = document.createElement("IFRAME");
                        d.setAttribute("src", "http://boscdn.bpc.baidu.com/v1/holmes-moplus/mp-cdn.html");
                        d.style.display = "none";
                        d.style.width = "1";
                        d.style.height = "1";
                        d.$a = "0";
                        document.body.appendChild(d)
                    }
                } catch (b) {
                }
            }
        }, f = navigator.userAgent.toLowerCase();
        -1 < f.indexOf("android") && -1 === f.indexOf("micromessenger") && e.init()
    })();
    (function () {
        var a = mt.k, e = mt.lang, f = mt.event, d = mt.m;
        if ("undefined" !== typeof h.b && (c.med || (!a.P || 7 < a.Na) && c.cvcc)) {
            var b, l, m, g, k = function (a) {
                if (a.item) {
                    for (var b = a.length, d = Array(b); b--;)d[b] = a[b];
                    return d
                }
                return [].slice.call(a)
            }, n = function (a, b) {
                for (var d in a)if (a.hasOwnProperty(d) && b.call(a, d, a[d]) === w)return w
            }, v = function (a, f) {
                var g = {};
                g.n = b;
                g.t = "clk";
                g.v = a;
                if (f) {
                    var k = f.getAttribute("href"), l = f.getAttribute("onclick") ? "" + f.getAttribute("onclick") : r, n = f.getAttribute("id") || "";
                    m.test(k) ? (g.sn = "mediate",
                        g.snv = k) : e.d(l, "String") && m.test(l) && (g.sn = "wrap", g.snv = l);
                    g.id = n
                }
                h.b.a.et = 86;
                h.b.a.ep = d.stringify(g);
                h.b.g();
                for (g = +new Date; 400 >= +new Date - g;);
            };
            if (c.med)l = "/zoosnet", b = "swt", m = /swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i, g = {
                click: function () {
                    for (var a = [], b = k(document.getElementsByTagName("a")), b = [].concat.apply(b, k(document.getElementsByTagName("area"))), b = [].concat.apply(b, k(document.getElementsByTagName("img"))), d, e, f = 0, g = b.length; f < g; f++)d = b[f], e = d.getAttribute("onclick"),
                        d = d.getAttribute("href"), (m.test(e) || m.test(d)) && a.push(b[f]);
                    return a
                }
            }; else if (c.cvcc) {
                l = "/other-comm";
                b = "other";
                m = c.cvcc.q || p;
                var s = c.cvcc.id || p;
                g = {
                    click: function () {
                        for (var a = [], b = k(document.getElementsByTagName("a")), b = [].concat.apply(b, k(document.getElementsByTagName("area"))), b = [].concat.apply(b, k(document.getElementsByTagName("img"))), d, e, f, g = 0, l = b.length; g < l; g++)d = b[g], m !== p ? (e = d.getAttribute("onclick"), f = d.getAttribute("href"), s ? (d = d.getAttribute("id"), (m.test(e) || m.test(f) || s.test(d)) &&
                        a.push(b[g])) : (m.test(e) || m.test(f)) && a.push(b[g])) : s !== p && (d = d.getAttribute("id"), s.test(d) && a.push(b[g]));
                        return a
                    }
                }
            }
            if ("undefined" !== typeof g && "undefined" !== typeof m) {
                var t;
                l += /\/$/.test(l) ? "" : "/";
                var u = function (a, b) {
                    if (t === b)return v(l + a, b), w;
                    if (e.d(b, "Array") || e.d(b, "NodeList"))for (var d = 0, f = b.length; d < f; d++)if (t === b[d])return v(l + a + "/" + (d + 1), b[d]), w
                };
                f.c(document, "mousedown", function (a) {
                    a = a || window.event;
                    t = a.target || a.srcElement;
                    var b = {};
                    for (n(g, function (a, d) {
                        b[a] = e.d(d, "Function") ? d() : document.getElementById(d)
                    }); t &&
                         t !== document && n(b, u) !== w;)t = t.parentNode
                })
            }
        }
    })();
    (function () {
        var a = mt.p, e = mt.lang, f = mt.event, d = mt.m;
        if ("undefined" !== typeof h.b && e.d(c.cvcf, "Array") && 0 < c.cvcf.length) {
            var b = {
                ha: function () {
                    for (var d = c.cvcf.length, e, g = 0; g < d; g++)(e = a.M(decodeURIComponent(c.cvcf[g]))) && f.c(e, "click", b.K())
                }, K: function () {
                    return function () {
                        h.b.a.et = 86;
                        var a = {n: "form", t: "clk"};
                        a.id = this.id;
                        h.b.a.ep = d.stringify(a);
                        h.b.g()
                    }
                }
            };
            a.T(function () {
                b.ha()
            })
        }
    })();
    (function () {
        var a = mt.event, e = mt.m;
        if (c.med && "undefined" !== typeof h.b) {
            var f = +new Date, d = {n: "anti", sb: 0, kb: 0, clk: 0}, b = function () {
                h.b.a.et = 86;
                h.b.a.ep = e.stringify(d);
                h.b.g()
            };
            a.c(document, "click", function () {
                d.clk++
            });
            a.c(document, "keyup", function () {
                d.kb = 1
            });
            a.c(window, "scroll", function () {
                d.sb++
            });
            a.c(window, "unload", function () {
                d.t = +new Date - f;
                b()
            });
            a.c(window, "load", function () {
                setTimeout(b, 5E3)
            })
        }
    })();
    (function () {
        function a() {
            this.f = r
        }

        var e = mt.V, f = mt.k;
        a.prototype = {
            Pa: function (a) {
                if (this.f)this.i(a, 0); else if (this.isSupported()) {
                    try {
                        this.f = new ActiveXObject("BDEXIE.BDExExtension.1"), this.aa = q
                    } catch (d) {
                        this.aa = w
                    }
                    this.aa ? this.i(a, 0) : this.i(a, -1)
                } else this.i(a, -1)
            }, Za: function () {
                this.f && delete this.f;
                this.f = r
            }, Va: function (a, d, e) {
                if (this.f && "SetLocalCache"in this.f)try {
                    this.f.SetLocalCache(a, d) === p && this.i(e, 0)
                } catch (f) {
                    this.i(e, -1)
                } else this.i(e, -1)
            }, Ca: function (a, d) {
                if (this.f && "GetLocalCache"in this.f)try {
                    this.i(d,
                        this.f.GetLocalCache(a))
                } catch (e) {
                    this.i(d, "")
                } else this.i(d, "")
            }, za: function (a) {
                if (this.f && "GetCryptStr"in this.f)try {
                    this.i(a, this.f.GetCryptStr("strEncryptID1"))
                } catch (d) {
                    this.i(a, "")
                } else this.i(a, "")
            }, i: function (a, d) {
                "function" === typeof a && a(d, this)
            }, isSupported: function () {
                if (window.ActiveXObject || "ActiveXObject"in window)try {
                    return !!new ActiveXObject("BDEXIE.BDExExtension.1")
                } catch (a) {
                }
                return w
            }, Qa: function () {
                var a = this;
                this.za(function (d) {
                    d !== p && "" !== d && (e.log("//datax.baidu.com/x.gif?dm=" +
                    encodeURIComponent("datax.baidu.com/webadapter/guid") + "&ac=" + encodeURIComponent(d) + "&v=hm-webadapter-0.0.1&rnd=" + Math.round(2147483647 * Math.random())), a.Va("hmKey", +new Date, function () {
                        a.Za()
                    }))
                })
            }
        };
        if (f.P && /^http(s)?:$/.test(document.location.protocol)) {
            var d = new a;
            d.Pa(function (a) {
                0 === a && d.Ca("hmKey", function (a) {
                    a = +a;
                    (isNaN(a) || 6048E5 < +new Date - a) && d.Qa()
                })
            })
        }
    })();
})();
