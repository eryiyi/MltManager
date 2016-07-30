﻿/*
 Highcharts JS v4.1.10 (2015-12-07)

 (c) 2009-2014 Torstein Honsi

 License: www.highcharts.com/license
 */
(function (Aa, Y) {
    typeof module === "object" && module.exports ? module.exports = Aa.document ? Y(Aa) : function (B) {
        return Y(B)
    } : Aa.Highcharts = Y()
})(typeof window !== "undefined" ? window : this, function (Aa) {
    function Y(a, b) {
        var c = "Highcharts error #" + a + ": www.highcharts.com/errors/" + a;
        if (b) throw Error(c);
        K.console && console.log(c)
    }

    function B() {
        var a, b = arguments, c, d = {}, e = function (a, b) {
            var c, d;
            typeof a !== "object" && (a = {});
            for (d in b) b.hasOwnProperty(d) && (c = b[d], a[d] = c && typeof c === "object" && Object.prototype.toString.call(c) !==
            "[object Array]" && d !== "renderTo" && typeof c.nodeType !== "number" ? e(a[d] || {}, c) : b[d]);
            return a
        };
        b[0] === !0 && (d = b[1], b = Array.prototype.slice.call(b, 2));
        c = b.length;
        for (a = 0; a < c; a++) d = e(d, b[a]);
        return d
    }

    function A(a, b) {
        return parseInt(a, b || 10)
    }

    function Ba(a) {
        return typeof a === "string"
    }

    function da(a) {
        return a && typeof a === "object"
    }

    function Ha(a) {
        return Object.prototype.toString.call(a) === "[object Array]"
    }

    function qa(a) {
        return typeof a === "number"
    }

    function Ca(a) {
        return U.log(a) / U.LN10
    }

    function ka(a) {
        return U.pow(10,
            a)
    }

    function la(a, b) {
        for (var c = a.length; c--;) if (a[c] === b) {
            a.splice(c, 1);
            break
        }
    }

    function q(a) {
        return a !== x && a !== null
    }

    function O(a, b, c) {
        var d, e;
        if (Ba(b)) q(c) ? a.setAttribute(b, c) : a && a.getAttribute && (e = a.getAttribute(b)); else if (q(b) && da(b)) for (d in b) a.setAttribute(d, b[d]);
        return e
    }

    function ra(a) {
        return Ha(a) ? a : [a]
    }

    function Oa(a, b, c) {
        if (b) return setTimeout(a, b, c);
        a.call(0, c)
    }

    function J(a, b) {
        if (sa && !Z && b && b.opacity !== x) b.filter = "alpha(opacity=" + b.opacity * 100 + ")";
        t(a.style, b)
    }

    function $(a, b, c, d, e) {
        a = C.createElement(a);
        b && t(a, b);
        e && J(a, {padding: 0, border: "none", margin: 0});
        c && J(a, c);
        d && d.appendChild(a);
        return a
    }

    function ma(a, b) {
        var c = function () {
        };
        c.prototype = new a;
        t(c.prototype, b);
        return c
    }

    function Ia(a, b) {
        return Array((b || 2) + 1 - String(a).length).join(0) + a
    }

    function Ya(a) {
        return (ib && ib(a) || qb || 0) * 6E4
    }

    function Ja(a, b) {
        for (var c = "{", d = !1, e, f, g, h, i, k = []; (c = a.indexOf(c)) !== -1;) {
            e = a.slice(0, c);
            if (d) {
                f = e.split(":");
                g = f.shift().split(".");
                i = g.length;
                e = b;
                for (h = 0; h < i; h++) e = e[g[h]];
                if (f.length) f = f.join(":"), g = /\.([0-9])/, h = L.lang,
                    i = void 0, /f$/.test(f) ? (i = (i = f.match(g)) ? i[1] : -1, e !== null && (e = u.numberFormat(e, i, h.decimalPoint, f.indexOf(",") > -1 ? h.thousandsSep : ""))) : e = Pa(f, e)
            }
            k.push(e);
            a = a.slice(c + 1);
            c = (d = !d) ? "}" : "{"
        }
        k.push(a);
        return k.join("")
    }

    function rb(a) {
        return U.pow(10, S(U.log(a) / U.LN10))
    }

    function sb(a, b, c, d, e) {
        var f, g = a, c = p(c, 1);
        f = a / c;
        b || (b = [1, 2, 2.5, 5, 10], d === !1 && (c === 1 ? b = [1, 2, 5, 10] : c <= 0.1 && (b = [1 / c])));
        for (d = 0; d < b.length; d++) if (g = b[d], e && g * c >= a || !e && f <= (b[d] + (b[d + 1] || b[d])) / 2) break;
        g *= c;
        return g
    }

    function jb(a, b) {
        var c = a.length,
            d, e;
        for (e = 0; e < c; e++) a[e].safeI = e;
        a.sort(function (a, c) {
            d = b(a, c);
            return d === 0 ? a.safeI - c.safeI : d
        });
        for (e = 0; e < c; e++) delete a[e].safeI
    }

    function Qa(a) {
        for (var b = a.length, c = a[0]; b--;) a[b] < c && (c = a[b]);
        return c
    }

    function Da(a) {
        for (var b = a.length, c = a[0]; b--;) a[b] > c && (c = a[b]);
        return c
    }

    function Ra(a, b) {
        for (var c in a) a[c] && a[c] !== b && a[c].destroy && a[c].destroy(), delete a[c]
    }

    function Sa(a) {
        kb || (kb = $(Ka));
        a && kb.appendChild(a);
        kb.innerHTML = ""
    }

    function ga(a, b) {
        return parseFloat(a.toPrecision(b || 14))
    }

    function Ta(a,
                b) {
        b.renderer.globalAnimation = p(a, b.animation)
    }

    function Pb(a) {
        return {
            init: function (b) {
                var c = a.fx;
                a.extend(a.easing, {
                    easeOutQuad: function (a, b, c, g, h) {
                        return -g * (b /= h) * (b - 2) + c
                    }
                });
                a.each(["cur", "_default", "width", "height", "opacity"], function (b, e) {
                    var f = c.step, g;
                    e === "cur" ? f = c.prototype : e === "_default" && a.Tween && (f = a.Tween.propHooks[e], e = "set");
                    (g = f[e]) && (f[e] = function (a) {
                        var c, f;
                        f = b ? a : this;
                        if (f.prop !== "align") return c = f.elem, c.attr ? c.attr(f.prop.replace("strokeWidth", "stroke-width"), e === "cur" ? void 0 : f.now) :
                            g.apply(this, arguments)
                    })
                });
                Ua(a.cssHooks.opacity, "get", function (a, b, c) {
                    return b.attr ? b.opacity || 0 : a.call(this, b, c)
                });
                this.addAnimSetter("d", function (a) {
                    var c = a.elem, f;
                    if (!a.started) f = b.init(c, c.d, c.toD), a.start = f[0], a.end = f[1], a.started = !0;
                    c.attr("d", b.step(a.start, a.end, a.pos, c.toD))
                });
                this.each = Array.prototype.forEach ? function (a, b) {
                    return Array.prototype.forEach.call(a, b)
                } : function (a, b) {
                    var c, g = a.length;
                    for (c = 0; c < g; c++) if (b.call(a[c], a[c], c, a) === !1) return c
                };
                a.fn.highcharts = function () {
                    var a = "Chart",
                        b = arguments, c, g;
                    if (this[0]) {
                        Ba(b[0]) && (a = b[0], b = Array.prototype.slice.call(b, 1));
                        c = b[0];
                        if (c !== x) c.chart = c.chart || {}, c.chart.renderTo = this[0], new u[a](c, b[1]), g = this;
                        c === x && (g = V[O(this[0], "data-highcharts-chart")])
                    }
                    return g
                }
            }, addAnimSetter: function (b, c) {
                a.Tween ? a.Tween.propHooks[b] = {set: c} : a.fx.step[b] = c
            }, getScript: a.getScript, inArray: a.inArray, adapterRun: function (b, c) {
                return a(b)[c]()
            }, grep: a.grep, map: function (a, c) {
                var d = [], e, f = a.length;
                for (e = 0; e < f; e++) d[e] = c.call(a[e], a[e], e, a);
                return d
            }, offset: function (b) {
                return a(b).offset()
            },
            addEvent: function (b, c, d) {
                a(b).bind(c, d)
            }, removeEvent: function (b, c, d) {
                var e = C.removeEventListener ? "removeEventListener" : "detachEvent";
                C[e] && b && !b[e] && (b[e] = function () {
                });
                a(b).unbind(c, d)
            }, fireEvent: function (b, c, d, e) {
                var f = a.Event(c), g = "detached" + c, h;
                !sa && d && (delete d.layerX, delete d.layerY, delete d.returnValue);
                t(f, d);
                b[c] && (b[g] = b[c], b[c] = null);
                a.each(["preventDefault", "stopPropagation"], function (a, b) {
                    var c = f[b];
                    f[b] = function () {
                        try {
                            c.call(f)
                        } catch (a) {
                            b === "preventDefault" && (h = !0)
                        }
                    }
                });
                a(b).trigger(f);
                b[g] && (b[c] = b[g], b[g] = null);
                e && !f.isDefaultPrevented() && !h && e(f)
            }, washMouseEvent: function (a) {
                var c = a.originalEvent || a;
                if (c.pageX === x) c.pageX = a.pageX, c.pageY = a.pageY;
                return c
            }, animate: function (b, c, d) {
                var e = a(b);
                if (!b.style) b.style = {};
                if (c.d) b.toD = c.d, c.d = 1;
                e.stop();
                c.opacity !== x && b.attr && (c.opacity += "px");
                b.hasAnim = 1;
                e.animate(c, d)
            }, stop: function (b) {
                b.hasAnim && a(b).stop()
            }
        }
    }

    function Db() {
        var a = L.global, b = a.useUTC, c = b ? "getUTC" : "get", d = b ? "setUTC" : "set";
        xa = a.Date || window.Date;
        qb = b && a.timezoneOffset;
        ib =
            b && a.getTimezoneOffset;
        lb = function (a, c, d, h, i, k) {
            var j;
            b ? (j = xa.UTC.apply(0, arguments), j += Ya(j)) : j = (new xa(a, c, p(d, 1), p(h, 0), p(i, 0), p(k, 0))).getTime();
            return j
        };
        tb = c + "Minutes";
        ub = c + "Hours";
        vb = c + "Day";
        Za = c + "Date";
        $a = c + "Month";
        ab = c + "FullYear";
        Eb = d + "Milliseconds";
        Fb = d + "Seconds";
        Gb = d + "Minutes";
        Hb = d + "Hours";
        wb = d + "Date";
        xb = d + "Month";
        yb = d + "FullYear"
    }

    function ea(a) {
        if (!(this instanceof ea)) return new ea(a);
        this.init(a)
    }

    function M() {
    }

    function Va(a, b, c, d) {
        this.axis = a;
        this.pos = b;
        this.type = c || "";
        this.isNew = !0;
        !c && !d && this.addLabel()
    }

    function Ib(a, b, c, d, e) {
        var f = a.chart.inverted;
        this.axis = a;
        this.isNegative = c;
        this.options = b;
        this.x = d;
        this.total = null;
        this.points = {};
        this.stack = e;
        this.alignOptions = {
            align: b.align || (f ? c ? "left" : "right" : "center"),
            verticalAlign: b.verticalAlign || (f ? "middle" : c ? "bottom" : "top"),
            y: p(b.y, f ? 4 : c ? 14 : -6),
            x: p(b.x, f ? c ? -6 : 6 : 0)
        };
        this.textAlign = b.textAlign || (f ? c ? "right" : "left" : "center")
    }

    var x, K = Aa || window, C = K.document, U = Math, y = U.round, S = U.floor, ta = U.ceil, v = U.max, E = U.min, P = U.abs, T = U.cos, aa = U.sin,
        na = U.PI, ha = na * 2 / 360, ya = navigator.userAgent, Jb = K.opera, sa = /(msie|trident|edge)/i.test(ya) && !Jb, mb = C.documentMode === 8, nb = !sa && /AppleWebKit/.test(ya), La = /Firefox/.test(ya), Aa = /(Mobile|Android|Windows Phone)/.test(ya), Ea = "http://www.w3.org/2000/svg", Z = !!C.createElementNS && !!C.createElementNS(Ea, "svg").createSVGRect, Qb = La && parseInt(ya.split("Firefox/")[1], 10) < 4, ia = !Z && !sa && !!C.createElement("canvas").getContext, bb, cb, Kb = {}, zb = 0, kb, L, Pa, Ab, F, ua = function () {
        }, V = [], db = 0, Ka = "div", Rb = /^[0-9]+$/, ob = ["plotTop",
            "marginRight", "marginBottom", "plotLeft"], xa, lb, qb, ib, tb, ub, vb, Za, $a, ab, Eb, Fb, Gb, Hb, wb, xb, yb, N = {}, u;
    u = K.Highcharts ? Y(16, !0) : function (a) {
        u.loadAdapter(a);
        return u
    };
    u.seriesTypes = N;
    var t = u.extend = function (a, b) {
        var c;
        a || (a = {});
        for (c in b) a[c] = b[c];
        return a
    }, p = u.pick = function () {
        var a = arguments, b, c, d = a.length;
        for (b = 0; b < d; b++) if (c = a[b], c !== x && c !== null) return c
    }, Ua = u.wrap = function (a, b, c) {
        var d = a[b];
        a[b] = function () {
            var a = Array.prototype.slice.call(arguments);
            a.unshift(d);
            return c.apply(this, a)
        }
    };
    Pa = function (a,
                   b, c) {
        if (!q(b) || isNaN(b)) return L.lang.invalidDate || "";
        var a = p(a, "%Y-%m-%d %H:%M:%S"), d = new xa(b - Ya(b)), e, f = d[ub](), g = d[vb](), h = d[Za](), i = d[$a](), k = d[ab](), j = L.lang, l = j.weekdays, d = t({
            a: l[g].substr(0, 3),
            A: l[g],
            d: Ia(h),
            e: h,
            w: g,
            b: j.shortMonths[i],
            B: j.months[i],
            m: Ia(i + 1),
            y: k.toString().substr(2, 2),
            Y: k,
            H: Ia(f),
            k: f,
            I: Ia(f % 12 || 12),
            l: f % 12 || 12,
            M: Ia(d[tb]()),
            p: f < 12 ? "AM" : "PM",
            P: f < 12 ? "am" : "pm",
            S: Ia(d.getSeconds()),
            L: Ia(y(b % 1E3), 3)
        }, u.dateFormats);
        for (e in d) for (; a.indexOf("%" + e) !== -1;) a = a.replace("%" + e, typeof d[e] ===
        "function" ? d[e](b) : d[e]);
        return c ? a.substr(0, 1).toUpperCase() + a.substr(1) : a
    };
    F = {
        millisecond: 1,
        second: 1E3,
        minute: 6E4,
        hour: 36E5,
        day: 864E5,
        week: 6048E5,
        month: 24192E5,
        year: 314496E5
    };
    u.numberFormat = function (a, b, c, d) {
        var e = L.lang, a = +a || 0, f = b === -1 ? Math.min((a.toString().split(".")[1] || "").length, 20) : isNaN(b = Math.abs(b)) ? 2 : b, b = c === void 0 ? e.decimalPoint : c, d = d === void 0 ? e.thousandsSep : d, e = a < 0 ? "-" : "", c = String(A(a = P(a).toFixed(f))), g = c.length > 3 ? c.length % 3 : 0;
        return e + (g ? c.substr(0, g) + d : "") + c.substr(g).replace(/(\d{3})(?=\d)/g,
                "$1" + d) + (f ? b + P(a - c).toFixed(f).slice(2) : "")
    };
    Ab = {
        init: function (a, b, c) {
            var b = b || "", d = a.shift, e = b.indexOf("C") > -1, f = e ? 7 : 3, g, b = b.split(" "), c = [].concat(c), h, i, k = function (a) {
                for (g = a.length; g--;) a[g] === "M" && a.splice(g + 1, 0, a[g + 1], a[g + 2], a[g + 1], a[g + 2])
            };
            e && (k(b), k(c));
            a.isArea && (h = b.splice(b.length - 6, 6), i = c.splice(c.length - 6, 6));
            if (d <= c.length / f && b.length === c.length) for (; d--;) c = [].concat(c).splice(0, f).concat(c);
            a.shift = 0;
            if (b.length) for (a = c.length; b.length < a;) d = [].concat(b).splice(b.length - f, f), e && (d[f -
            6] = d[f - 2], d[f - 5] = d[f - 1]), b = b.concat(d);
            h && (b = b.concat(h), c = c.concat(i));
            return [b, c]
        }, step: function (a, b, c, d) {
            var e = [], f = a.length;
            if (c === 1) e = d; else if (f === b.length && c < 1) for (; f--;) d = parseFloat(a[f]), e[f] = isNaN(d) ? a[f] : c * parseFloat(b[f] - d) + d; else e = b;
            return e
        }
    };
    var eb, Fa, o, fb, Lb, Ma, H, W, G, Mb, gb, Wa;
    u.loadAdapter = function (a) {
        if (a) a.fn && a.fn.jquery && (a = Pb(a)), a.init && (a.init(Ab), delete a.init), u.extend(u, a), eb = u.adapterRun, Fa = u.inArray, o = u.each, fb = u.grep, Lb = u.offset, Ma = u.map, H = u.addEvent, W = u.removeEvent,
            G = u.fireEvent, Mb = u.washMouseEvent, gb = u.animate, Wa = u.stop
    };
    u.loadAdapter(K.HighchartsAdapter || K.jQuery);
    L = {
        colors: "#7cb5ec,#434348,#90ed7d,#f7a35c,#8085e9,#f15c80,#e4d354,#2b908f,#f45b5b,#91e8e1".split(","),
        symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
        lang: {
            loading: "Loading...",
            months: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
            shortMonths: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
            weekdays: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
            decimalPoint: ".",
            numericSymbols: "k,M,G,T,P,E".split(","),
            resetZoom: "Reset zoom",
            resetZoomTitle: "Reset zoom level 1:1",
            thousandsSep: " "
        },
        global: {
            useUTC: !0,
            canvasToolsURL: "http://code.highcharts.com/modules/canvas-tools.js",
            VMLRadialGradientURL: "http://code.highcharts.com/4.1.10/gfx/vml-radial-gradient.png"
        },
        chart: {
            borderColor: "#4572A7",
            borderRadius: 0,
            defaultSeriesType: "line",
            ignoreHiddenSeries: !0,
            spacing: [10, 10, 15, 10],
            backgroundColor: "#FFFFFF",
            plotBorderColor: "#C0C0C0",
            resetZoomButton: {
                theme: {zIndex: 20},
                position: {align: "right", x: -10, y: 10}
            }
        },
        title: {text: "Chart title", align: "center", margin: 15, style: {color: "#333333", fontSize: "18px"}},
        subtitle: {text: "", align: "center", style: {color: "#555555"}},
        plotOptions: {
            line: {
                allowPointSelect: !1,
                showCheckbox: !1,
                animation: {duration: 1E3},
                events: {},
                lineWidth: 2,
                marker: {
                    lineWidth: 0,
                    radius: 4,
                    lineColor: "#FFFFFF",
                    states: {
                        hover: {enabled: !0, lineWidthPlus: 1, radiusPlus: 2},
                        select: {fillColor: "#FFFFFF", lineColor: "#000000", lineWidth: 2}
                    }
                },
                point: {events: {}},
                dataLabels: {
                    align: "center",
                    formatter: function () {
                        return this.y === null ? "" : u.numberFormat(this.y, -1)
                    },
                    style: {
                        color: "contrast",
                        fontSize: "11px",
                        fontWeight: "bold",
                        textShadow: "0 0 6px contrast, 0 0 3px contrast"
                    },
                    verticalAlign: "bottom",
                    x: 0,
                    y: 0,
                    padding: 5
                },
                cropThreshold: 300,
                pointRange: 0,
                softThreshold: !0,
                states: {hover: {lineWidthPlus: 1, marker: {}, halo: {size: 10, opacity: 0.25}}, select: {marker: {}}},
                stickyTracking: !0,
                turboThreshold: 1E3
            }
        },
        labels: {style: {position: "absolute", color: "#3E576F"}},
        legend: {
            enabled: !0,
            align: "center",
            layout: "horizontal",
            labelFormatter: function () {
                return this.name
            },
            borderColor: "#909090",
            borderRadius: 0,
            navigation: {activeColor: "#274b6d", inactiveColor: "#CCC"},
            shadow: !1,
            itemStyle: {color: "#333333", fontSize: "12px", fontWeight: "bold"},
            itemHoverStyle: {color: "#000"},
            itemHiddenStyle: {color: "#CCC"},
            itemCheckboxStyle: {position: "absolute", width: "13px", height: "13px"},
            symbolPadding: 5,
            verticalAlign: "bottom",
            x: 0,
            y: 0,
            title: {style: {fontWeight: "bold"}}
        },
        loading: {
            labelStyle: {fontWeight: "bold", position: "relative", top: "45%"}, style: {
                position: "absolute",
                backgroundColor: "white", opacity: 0.5, textAlign: "center"
            }
        },
        tooltip: {
            enabled: !0,
            animation: Z,
            backgroundColor: "rgba(249, 249, 249, .85)",
            borderWidth: 1,
            borderRadius: 3,
            dateTimeLabelFormats: {
                millisecond: "%A, %b %e, %H:%M:%S.%L",
                second: "%A, %b %e, %H:%M:%S",
                minute: "%A, %b %e, %H:%M",
                hour: "%A, %b %e, %H:%M",
                day: "%A, %b %e, %Y",
                week: "Week from %A, %b %e, %Y",
                month: "%B %Y",
                year: "%Y"
            },
            footerFormat: "",
            headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
            pointFormat: '<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',
            shadow: !0,
            snap: Aa ? 25 : 10,
            style: {
                color: "#333333",
                cursor: "default",
                fontSize: "12px",
                padding: "8px",
                pointerEvents: "none",
                whiteSpace: "nowrap"
            }
        },
        credits: {
            enabled: !0,
            text: "Highcharts.com",
            href: "http://www.highcharts.com",
            position: {align: "right", x: -10, verticalAlign: "bottom", y: -5},
            style: {cursor: "pointer", color: "#909090", fontSize: "9px"}
        }
    };
    var ba = L.plotOptions, fa = ba.line;
    Db();
    ea.prototype = {
        parsers: [{
            regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
            parse: function (a) {
                return [A(a[1]),
                    A(a[2]), A(a[3]), parseFloat(a[4], 10)]
            }
        }, {
            regex: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/, parse: function (a) {
                return [A(a[1], 16), A(a[2], 16), A(a[3], 16), 1]
            }
        }, {
            regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/, parse: function (a) {
                return [A(a[1]), A(a[2]), A(a[3]), 1]
            }
        }], init: function (a) {
            var b, c, d, e;
            if ((this.input = a) && a.stops) this.stops = Ma(a.stops, function (a) {
                return new ea(a[1])
            }); else for (d = this.parsers.length; d-- && !c;) e = this.parsers[d], (b = e.regex.exec(a)) && (c = e.parse(b));
            this.rgba =
                c || []
        }, get: function (a) {
            var b = this.input, c = this.rgba, d;
            this.stops ? (d = B(b), d.stops = [].concat(d.stops), o(this.stops, function (b, c) {
                d.stops[c] = [d.stops[c][0], b.get(a)]
            })) : d = c && !isNaN(c[0]) ? a === "rgb" || !a && c[3] === 1 ? "rgb(" + c[0] + "," + c[1] + "," + c[2] + ")" : a === "a" ? c[3] : "rgba(" + c.join(",") + ")" : b;
            return d
        }, brighten: function (a) {
            var b, c = this.rgba;
            if (this.stops) o(this.stops, function (b) {
                b.brighten(a)
            }); else if (qa(a) && a !== 0) for (b = 0; b < 3; b++) c[b] += A(a * 255), c[b] < 0 && (c[b] = 0), c[b] > 255 && (c[b] = 255);
            return this
        }, setOpacity: function (a) {
            this.rgba[3] =
                a;
            return this
        }
    };
    M.prototype = {
        opacity: 1,
        textProps: "direction,fontSize,fontWeight,fontFamily,fontStyle,color,lineHeight,width,textDecoration,textOverflow,textShadow".split(","),
        init: function (a, b) {
            this.element = b === "span" ? $(b) : C.createElementNS(Ea, b);
            this.renderer = a
        },
        animate: function (a, b, c) {
            b = p(b, this.renderer.globalAnimation, !0);
            Wa(this);
            if (b) {
                b = B(b, {});
                if (c) b.complete = c;
                gb(this, a, b)
            } else this.attr(a, null, c);
            return this
        },
        colorGradient: function (a, b, c) {
            var d = this.renderer, e, f, g, h, i, k, j, l, m, n, s, r = [], p;
            a.linearGradient ? f = "linearGradient" : a.radialGradient && (f = "radialGradient");
            if (f) {
                g = a[f];
                i = d.gradients;
                j = a.stops;
                n = c.radialReference;
                Ha(g) && (a[f] = g = {x1: g[0], y1: g[1], x2: g[2], y2: g[3], gradientUnits: "userSpaceOnUse"});
                f === "radialGradient" && n && !q(g.gradientUnits) && (h = g, g = B(g, d.getRadialAttr(n, h), {gradientUnits: "userSpaceOnUse"}));
                for (s in g) s !== "id" && r.push(s, g[s]);
                for (s in j) r.push(j[s]);
                r = r.join(",");
                i[r] ? n = i[r].attr("id") : (g.id = n = "highcharts-" + zb++, i[r] = k = d.createElement(f).attr(g).add(d.defs), k.radAttr =
                    h, k.stops = [], o(j, function (a) {
                    a[1].indexOf("rgba") === 0 ? (e = ea(a[1]), l = e.get("rgb"), m = e.get("a")) : (l = a[1], m = 1);
                    a = d.createElement("stop").attr({offset: a[0], "stop-color": l, "stop-opacity": m}).add(k);
                    k.stops.push(a)
                }));
                p = "url(" + d.url + "#" + n + ")";
                c.setAttribute(b, p);
                c.gradient = r;
                a.toString = function () {
                    return p
                }
            }
        },
        applyTextShadow: function (a) {
            var b = this.element, c, d = a.indexOf("contrast") !== -1, e = {}, f = this.renderer.forExport, g = f || b.style.textShadow !== x && !sa;
            if (d) e.textShadow = a = a.replace(/contrast/g, this.renderer.getContrast(b.style.fill));
            if (nb || f) e.textRendering = "geometricPrecision";
            g ? this.css(e) : (this.fakeTS = !0, this.ySetter = this.xSetter, c = [].slice.call(b.getElementsByTagName("tspan")), o(a.split(/\s?,\s?/g), function (a) {
                var d = b.firstChild, e, f, a = a.split(" ");
                e = a[a.length - 1];
                (f = a[a.length - 2]) && o(c, function (a, c) {
                    var g;
                    c === 0 && (a.setAttribute("x", b.getAttribute("x")), c = b.getAttribute("y"), a.setAttribute("y", c || 0), c === null && b.setAttribute("y", 0));
                    g = a.cloneNode(1);
                    O(g, {
                        "class": "highcharts-text-shadow", fill: e, stroke: e, "stroke-opacity": 1 / v(A(f),
                            3), "stroke-width": f, "stroke-linejoin": "round"
                    });
                    b.insertBefore(g, d)
                })
            }))
        },
        attr: function (a, b, c) {
            var d, e = this.element, f, g = this, h;
            typeof a === "string" && b !== x && (d = a, a = {}, a[d] = b);
            if (typeof a === "string") g = (this[a + "Getter"] || this._defaultGetter).call(this, a, e); else {
                for (d in a) {
                    b = a[d];
                    h = !1;
                    this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(d) && (f || (this.symbolAttr(a), f = !0), h = !0);
                    if (this.rotation && (d === "x" || d === "y")) this.doTransform = !0;
                    h || (this[d + "Setter"] || this._defaultSetter).call(this,
                        b, d, e);
                    this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(d) && this.updateShadows(d, b)
                }
                if (this.doTransform) this.updateTransform(), this.doTransform = !1
            }
            c && c();
            return g
        },
        updateShadows: function (a, b) {
            for (var c = this.shadows, d = c.length; d--;) c[d].setAttribute(a, a === "height" ? Math.max(b - (c[d].cutHeight || 0), 0) : a === "d" ? this.d : b)
        },
        addClass: function (a) {
            var b = this.element, c = O(b, "class") || "";
            c.indexOf(a) === -1 && O(b, "class", c + " " + a);
            return this
        },
        symbolAttr: function (a) {
            var b = this;
            o("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","),
                function (c) {
                    b[c] = p(a[c], b[c])
                });
            b.attr({d: b.renderer.symbols[b.symbolName](b.x, b.y, b.width, b.height, b)})
        },
        clip: function (a) {
            return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id + ")" : "none")
        },
        crisp: function (a) {
            var b, c = {}, d, e = a.strokeWidth || this.strokeWidth || 0;
            d = y(e) % 2 / 2;
            a.x = S(a.x || this.x || 0) + d;
            a.y = S(a.y || this.y || 0) + d;
            a.width = S((a.width || this.width || 0) - 2 * d);
            a.height = S((a.height || this.height || 0) - 2 * d);
            a.strokeWidth = e;
            for (b in a) this[b] !== a[b] && (this[b] = c[b] = a[b]);
            return c
        },
        css: function (a) {
            var b =
                this.styles, c = {}, d = this.element, e, f, g = "";
            e = !b;
            if (a && a.color) a.fill = a.color;
            if (b) for (f in a) a[f] !== b[f] && (c[f] = a[f], e = !0);
            if (e) {
                e = this.textWidth = a && a.width && d.nodeName.toLowerCase() === "text" && A(a.width) || this.textWidth;
                b && (a = t(b, c));
                this.styles = a;
                e && (ia || !Z && this.renderer.forExport) && delete a.width;
                if (sa && !Z) J(this.element, a); else {
                    b = function (a, b) {
                        return "-" + b.toLowerCase()
                    };
                    for (f in a) g += f.replace(/([A-Z])/g, b) + ":" + a[f] + ";";
                    O(d, "style", g)
                }
                e && this.added && this.renderer.buildText(this)
            }
            return this
        },
        on: function (a,
                      b) {
            var c = this, d = c.element;
            cb && a === "click" ? (d.ontouchstart = function (a) {
                c.touchEventFired = xa.now();
                a.preventDefault();
                b.call(d, a)
            }, d.onclick = function (a) {
                (ya.indexOf("Android") === -1 || xa.now() - (c.touchEventFired || 0) > 1100) && b.call(d, a)
            }) : d["on" + a] = b;
            return this
        },
        setRadialReference: function (a) {
            var b = this.renderer.gradients[this.element.gradient];
            this.element.radialReference = a;
            b && b.radAttr && b.animate(this.renderer.getRadialAttr(a, b.radAttr));
            return this
        },
        translate: function (a, b) {
            return this.attr({
                translateX: a,
                translateY: b
            })
        },
        invert: function () {
            this.inverted = !0;
            this.updateTransform();
            return this
        },
        updateTransform: function () {
            var a = this.translateX || 0, b = this.translateY || 0, c = this.scaleX, d = this.scaleY, e = this.inverted, f = this.rotation, g = this.element;
            e && (a += this.attr("width"), b += this.attr("height"));
            a = ["translate(" + a + "," + b + ")"];
            e ? a.push("rotate(90) scale(-1,1)") : f && a.push("rotate(" + f + " " + (g.getAttribute("x") || 0) + " " + (g.getAttribute("y") || 0) + ")");
            (q(c) || q(d)) && a.push("scale(" + p(c, 1) + " " + p(d, 1) + ")");
            a.length && g.setAttribute("transform",
                a.join(" "))
        },
        toFront: function () {
            var a = this.element;
            a.parentNode.appendChild(a);
            return this
        },
        align: function (a, b, c) {
            var d, e, f, g, h = {};
            e = this.renderer;
            f = e.alignedObjects;
            if (a) {
                if (this.alignOptions = a, this.alignByTranslate = b, !c || Ba(c)) this.alignTo = d = c || "renderer", la(f, this), f.push(this), c = null
            } else a = this.alignOptions, b = this.alignByTranslate, d = this.alignTo;
            c = p(c, e[d], e);
            d = a.align;
            e = a.verticalAlign;
            f = (c.x || 0) + (a.x || 0);
            g = (c.y || 0) + (a.y || 0);
            if (d === "right" || d === "center") f += (c.width - (a.width || 0)) / {right: 1, center: 2}[d];
            h[b ? "translateX" : "x"] = y(f);
            if (e === "bottom" || e === "middle") g += (c.height - (a.height || 0)) / ({bottom: 1, middle: 2}[e] || 1);
            h[b ? "translateY" : "y"] = y(g);
            this[this.placed ? "animate" : "attr"](h);
            this.placed = !0;
            this.alignAttr = h;
            return this
        },
        getBBox: function (a, b) {
            var c, d = this.renderer, e, f, g, h = this.element, i = this.styles;
            e = this.textStr;
            var k, j = h.style, l, m = d.cache, n = d.cacheKeys, s;
            f = p(b, this.rotation);
            g = f * ha;
            e !== x && (s = ["", f || 0, i && i.fontSize, h.style.width].join(","), s = e === "" || Rb.test(e) ? "num:" + e.toString().length + s : e + s);
            s && !a && (c = m[s]);
            if (!c) {
                if (h.namespaceURI === Ea || d.forExport) {
                    try {
                        l = this.fakeTS && function (a) {
                            o(h.querySelectorAll(".highcharts-text-shadow"), function (b) {
                                b.style.display = a
                            })
                        }, La && j.textShadow ? (k = j.textShadow, j.textShadow = "") : l && l("none"), c = h.getBBox ? t({}, h.getBBox()) : {
                            width: h.offsetWidth,
                            height: h.offsetHeight
                        }, k ? j.textShadow = k : l && l("")
                    } catch (r) {
                    }
                    if (!c || c.width < 0) c = {width: 0, height: 0}
                } else c = this.htmlGetBBox();
                if (d.isSVG) {
                    d = c.width;
                    e = c.height;
                    if (sa && i && i.fontSize === "11px" && e.toPrecision(3) === "16.9") c.height =
                        e = 14;
                    if (f) c.width = P(e * aa(g)) + P(d * T(g)), c.height = P(e * T(g)) + P(d * aa(g))
                }
                if (s) {
                    for (; n.length > 250;) delete m[n.shift()];
                    m[s] || n.push(s);
                    m[s] = c
                }
            }
            return c
        },
        show: function (a) {
            return this.attr({visibility: a ? "inherit" : "visible"})
        },
        hide: function () {
            return this.attr({visibility: "hidden"})
        },
        fadeOut: function (a) {
            var b = this;
            b.animate({opacity: 0}, {
                duration: a || 150, complete: function () {
                    b.attr({y: -9999})
                }
            })
        },
        add: function (a) {
            var b = this.renderer, c = this.element, d;
            if (a) this.parentGroup = a;
            this.parentInverted = a && a.inverted;
            this.textStr !== void 0 && b.buildText(this);
            this.added = !0;
            if (!a || a.handleZ || this.zIndex) d = this.zIndexSetter();
            d || (a ? a.element : b.box).appendChild(c);
            if (this.onAdd) this.onAdd();
            return this
        },
        safeRemoveChild: function (a) {
            var b = a.parentNode;
            b && b.removeChild(a)
        },
        destroy: function () {
            var a = this, b = a.element || {}, c = a.shadows, d = a.renderer.isSVG && b.nodeName === "SPAN" && a.parentGroup, e, f;
            b.onclick = b.onmouseout = b.onmouseover = b.onmousemove = b.point = null;
            Wa(a);
            if (a.clipPath) a.clipPath = a.clipPath.destroy();
            if (a.stops) {
                for (f = 0; f < a.stops.length; f++) a.stops[f] =
                    a.stops[f].destroy();
                a.stops = null
            }
            a.safeRemoveChild(b);
            for (c && o(c, function (b) {
                a.safeRemoveChild(b)
            }); d && d.div && d.div.childNodes.length === 0;) b = d.parentGroup, a.safeRemoveChild(d.div), delete d.div, d = b;
            a.alignTo && la(a.renderer.alignedObjects, a);
            for (e in a) delete a[e];
            return null
        },
        shadow: function (a, b, c) {
            var d = [], e, f, g = this.element, h, i, k, j;
            if (a) {
                i = p(a.width, 3);
                k = (a.opacity || 0.15) / i;
                j = this.parentInverted ? "(-1,-1)" : "(" + p(a.offsetX, 1) + ", " + p(a.offsetY, 1) + ")";
                for (e = 1; e <= i; e++) {
                    f = g.cloneNode(0);
                    h = i * 2 + 1 - 2 * e;
                    O(f, {
                        isShadow: "true",
                        stroke: a.color || "black",
                        "stroke-opacity": k * e,
                        "stroke-width": h,
                        transform: "translate" + j,
                        fill: "none"
                    });
                    if (c) O(f, "height", v(O(f, "height") - h, 0)), f.cutHeight = h;
                    b ? b.element.appendChild(f) : g.parentNode.insertBefore(f, g);
                    d.push(f)
                }
                this.shadows = d
            }
            return this
        },
        xGetter: function (a) {
            this.element.nodeName === "circle" && (a = {x: "cx", y: "cy"}[a] || a);
            return this._defaultGetter(a)
        },
        _defaultGetter: function (a) {
            a = p(this[a], this.element ? this.element.getAttribute(a) : null, 0);
            /^[\-0-9\.]+$/.test(a) && (a = parseFloat(a));
            return a
        },
        dSetter: function (a, b, c) {
            a && a.join && (a = a.join(" "));
            /(NaN| {2}|^$)/.test(a) && (a = "M 0 0");
            c.setAttribute(b, a);
            this[b] = a
        },
        dashstyleSetter: function (a) {
            var b;
            if (a = a && a.toLowerCase()) {
                a = a.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
                for (b = a.length; b--;) a[b] = A(a[b]) * this["stroke-width"];
                a = a.join(",").replace("NaN",
                    "none");
                this.element.setAttribute("stroke-dasharray", a)
            }
        },
        alignSetter: function (a) {
            this.element.setAttribute("text-anchor", {left: "start", center: "middle", right: "end"}[a])
        },
        opacitySetter: function (a, b, c) {
            this[b] = a;
            c.setAttribute(b, a)
        },
        titleSetter: function (a) {
            var b = this.element.getElementsByTagName("title")[0];
            b || (b = C.createElementNS(Ea, "title"), this.element.appendChild(b));
            b.appendChild(C.createTextNode(String(p(a), "").replace(/<[^>]*>/g, "")))
        },
        textSetter: function (a) {
            if (a !== this.textStr) delete this.bBox,
                this.textStr = a, this.added && this.renderer.buildText(this)
        },
        fillSetter: function (a, b, c) {
            typeof a === "string" ? c.setAttribute(b, a) : a && this.colorGradient(a, b, c)
        },
        visibilitySetter: function (a, b, c) {
            a === "inherit" ? c.removeAttribute(b) : c.setAttribute(b, a)
        },
        zIndexSetter: function (a, b) {
            var c = this.renderer, d = this.parentGroup, c = (d || c).element || c.box, e, f, g = this.element, h;
            e = this.added;
            var i;
            q(a) && (g.setAttribute(b, a), a = +a, this[b] === a && (e = !1), this[b] = a);
            if (e) {
                if ((a = this.zIndex) && d) d.handleZ = !0;
                d = c.childNodes;
                for (i = 0; i <
                d.length && !h; i++) if (e = d[i], f = O(e, "zIndex"), e !== g && (A(f) > a || !q(a) && q(f))) c.insertBefore(g, e), h = !0;
                h || c.appendChild(g)
            }
            return h
        },
        _defaultSetter: function (a, b, c) {
            c.setAttribute(b, a)
        }
    };
    M.prototype.yGetter = M.prototype.xGetter;
    M.prototype.translateXSetter = M.prototype.translateYSetter = M.prototype.rotationSetter = M.prototype.verticalAlignSetter = M.prototype.scaleXSetter = M.prototype.scaleYSetter = function (a, b) {
        this[b] = a;
        this.doTransform = !0
    };
    M.prototype["stroke-widthSetter"] = M.prototype.strokeSetter = function (a,
                                                                             b, c) {
        this[b] = a;
        if (this.stroke && this["stroke-width"]) this.strokeWidth = this["stroke-width"], M.prototype.fillSetter.call(this, this.stroke, "stroke", c), c.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0; else if (b === "stroke-width" && a === 0 && this.hasStroke) c.removeAttribute("stroke"), this.hasStroke = !1
    };
    var za = function () {
        this.init.apply(this, arguments)
    };
    za.prototype = {
        Element: M, init: function (a, b, c, d, e, f) {
            var g = location, h, d = this.createElement("svg").attr({version: "1.1"}).css(this.getStyle(d));
            h = d.element;
            a.appendChild(h);
            a.innerHTML.indexOf("xmlns") === -1 && O(h, "xmlns", Ea);
            this.isSVG = !0;
            this.box = h;
            this.boxWrapper = d;
            this.alignedObjects = [];
            this.url = (La || nb) && C.getElementsByTagName("base").length ? g.href.replace(/#.*?$/, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "";
            this.createElement("desc").add().element.appendChild(C.createTextNode("Created with Highcharts 4.1.10"));
            this.defs = this.createElement("defs").add();
            this.allowHTML = f;
            this.forExport = e;
            this.gradients = {};
            this.cache = {};
            this.cacheKeys =
                [];
            this.setSize(b, c, !1);
            var i;
            if (La && a.getBoundingClientRect) this.subPixelFix = b = function () {
                J(a, {left: 0, top: 0});
                i = a.getBoundingClientRect();
                J(a, {left: ta(i.left) - i.left + "px", top: ta(i.top) - i.top + "px"})
            }, b(), H(K, "resize", b)
        }, getStyle: function (a) {
            return this.style = t({
                fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                fontSize: "12px"
            }, a)
        }, isHidden: function () {
            return !this.boxWrapper.getBBox().width
        }, destroy: function () {
            var a = this.defs;
            this.box = null;
            this.boxWrapper = this.boxWrapper.destroy();
            Ra(this.gradients || {});
            this.gradients = null;
            if (a) this.defs = a.destroy();
            this.subPixelFix && W(K, "resize", this.subPixelFix);
            return this.alignedObjects = null
        }, createElement: function (a) {
            var b = new this.Element;
            b.init(this, a);
            return b
        }, draw: function () {
        }, getRadialAttr: function (a, b) {
            return {cx: a[0] - a[2] / 2 + b.cx * a[2], cy: a[1] - a[2] / 2 + b.cy * a[2], r: b.r * a[2]}
        }, buildText: function (a) {
            for (var b = a.element, c = this, d = c.forExport, e = p(a.textStr, "").toString(), f = e.indexOf("<") !== -1, g = b.childNodes, h, i, k = O(b, "x"), j = a.styles, l = a.textWidth,
                     m = j && j.lineHeight, n = j && j.textShadow, s = j && j.textOverflow === "ellipsis", r = g.length, X = l && !a.added && this.box, z = function (a) {
                    return m ? A(m) : c.fontMetrics(/(px|em)$/.test(a && a.style.fontSize) ? a.style.fontSize : j && j.fontSize || c.style.fontSize || 12, a).h
                }, w = function (a) {
                    return a.replace(/&lt;/g, "<").replace(/&gt;/g, ">")
                }; r--;) b.removeChild(g[r]);
            !f && !n && !s && e.indexOf(" ") === -1 ? b.appendChild(C.createTextNode(w(e))) : (h = /<.*style="([^"]+)".*>/, i = /<.*href="(http[^"]+)".*>/, X && X.appendChild(b), e = f ? e.replace(/<(b|strong)>/g,
                '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g) : [e], e[e.length - 1] === "" && e.pop(), o(e, function (e, f) {
                var g, m = 0, e = e.replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
                g = e.split("|||");
                o(g, function (e) {
                    if (e !== "" || g.length === 1) {
                        var n = {}, r = C.createElementNS(Ea, "tspan"), p;
                        h.test(e) && (p = e.match(h)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), O(r, "style", p));
                        i.test(e) && !d &&
                        (O(r, "onclick", 'location.href="' + e.match(i)[1] + '"'), J(r, {cursor: "pointer"}));
                        e = w(e.replace(/<(.|\n)*?>/g, "") || " ");
                        if (e !== " ") {
                            r.appendChild(C.createTextNode(e));
                            if (m) n.dx = 0; else if (f && k !== null) n.x = k;
                            O(r, n);
                            b.appendChild(r);
                            !m && f && (!Z && d && J(r, {display: "block"}), O(r, "dy", z(r)));
                            if (l) {
                                for (var n = e.replace(/([^\^])-/g, "$1- ").split(" "), X = g.length > 1 || f || n.length > 1 && j.whiteSpace !== "nowrap", o, D, q, v = [], x = z(r), t = 1, y = a.rotation, u = e, B = u.length; (X || s) && (n.length || v.length);) a.rotation = 0, o = a.getBBox(!0), q = o.width,
                                !Z && c.forExport && (q = c.measureSpanWidth(r.firstChild.data, a.styles)), o = q > l, D === void 0 && (D = o), s && D ? (B /= 2, u === "" || !o && B < 0.5 ? n = [] : (o && (D = !0), u = e.substring(0, u.length + (o ? -1 : 1) * ta(B)), n = [u + (l > 3 ? "\u2026" : "")], r.removeChild(r.firstChild))) : !o || n.length === 1 ? (n = v, v = [], n.length && (t++, r = C.createElementNS(Ea, "tspan"), O(r, {
                                    dy: x,
                                    x: k
                                }), p && O(r, "style", p), b.appendChild(r)), q > l && (l = q)) : (r.removeChild(r.firstChild), v.unshift(n.pop())), n.length && r.appendChild(C.createTextNode(n.join(" ").replace(/- /g, "-")));
                                D && a.attr("title",
                                    a.textStr);
                                a.rotation = y
                            }
                            m++
                        }
                    }
                })
            }), X && X.removeChild(b), n && a.applyTextShadow && a.applyTextShadow(n))
        }, getContrast: function (a) {
            a = ea(a).rgba;
            return a[0] + a[1] + a[2] > 384 ? "#000000" : "#FFFFFF"
        }, button: function (a, b, c, d, e, f, g, h, i) {
            var k = this.label(a, b, c, i, null, null, null, null, "button"), j = 0, l, m, n, s, r, p, a = {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
            }, e = B({
                "stroke-width": 1,
                stroke: "#CCCCCC",
                fill: {linearGradient: a, stops: [[0, "#FEFEFE"], [1, "#F6F6F6"]]},
                r: 2,
                padding: 5,
                style: {color: "black"}
            }, e);
            n = e.style;
            delete e.style;
            f = B(e, {
                stroke: "#68A", fill: {
                    linearGradient: a,
                    stops: [[0, "#FFF"], [1, "#ACF"]]
                }
            }, f);
            s = f.style;
            delete f.style;
            g = B(e, {stroke: "#68A", fill: {linearGradient: a, stops: [[0, "#9BD"], [1, "#CDF"]]}}, g);
            r = g.style;
            delete g.style;
            h = B(e, {style: {color: "#CCC"}}, h);
            p = h.style;
            delete h.style;
            H(k.element, sa ? "mouseover" : "mouseenter", function () {
                j !== 3 && k.attr(f).css(s)
            });
            H(k.element, sa ? "mouseout" : "mouseleave", function () {
                j !== 3 && (l = [e, f, g][j], m = [n, s, r][j], k.attr(l).css(m))
            });
            k.setState = function (a) {
                (k.state = j = a) ? a === 2 ? k.attr(g).css(r) : a === 3 && k.attr(h).css(p) : k.attr(e).css(n)
            };
            return k.on("click", function (a) {
                j !== 3 && d.call(k, a)
            }).attr(e).css(t({cursor: "default"}, n))
        }, crispLine: function (a, b) {
            a[1] === a[4] && (a[1] = a[4] = y(a[1]) - b % 2 / 2);
            a[2] === a[5] && (a[2] = a[5] = y(a[2]) + b % 2 / 2);
            return a
        }, path: function (a) {
            var b = {fill: "none"};
            Ha(a) ? b.d = a : da(a) && t(b, a);
            return this.createElement("path").attr(b)
        }, circle: function (a, b, c) {
            a = da(a) ? a : {x: a, y: b, r: c};
            b = this.createElement("circle");
            b.xSetter = function (a) {
                this.element.setAttribute("cx", a)
            };
            b.ySetter = function (a) {
                this.element.setAttribute("cy", a)
            };
            return b.attr(a)
        }, arc: function (a, b, c, d, e, f) {
            if (da(a)) b = a.y, c = a.r, d = a.innerR, e = a.start, f = a.end, a = a.x;
            a = this.symbol("arc", a || 0, b || 0, c || 0, c || 0, {innerR: d || 0, start: e || 0, end: f || 0});
            a.r = c;
            return a
        }, rect: function (a, b, c, d, e, f) {
            var e = da(a) ? a.r : e, g = this.createElement("rect"), a = da(a) ? a : a === x ? {} : {
                x: a,
                y: b,
                width: v(c, 0),
                height: v(d, 0)
            };
            if (f !== x) a.strokeWidth = f, a = g.crisp(a);
            if (e) a.r = e;
            g.rSetter = function (a) {
                O(this.element, {rx: a, ry: a})
            };
            return g.attr(a)
        }, setSize: function (a, b, c) {
            var d = this.alignedObjects, e = d.length;
            this.width =
                a;
            this.height = b;
            for (this.boxWrapper[p(c, !0) ? "animate" : "attr"]({width: a, height: b}); e--;) d[e].align()
        }, g: function (a) {
            var b = this.createElement("g");
            return q(a) ? b.attr({"class": "highcharts-" + a}) : b
        }, image: function (a, b, c, d, e) {
            var f = {preserveAspectRatio: "none"};
            arguments.length > 1 && t(f, {x: b, y: c, width: d, height: e});
            f = this.createElement("image").attr(f);
            f.element.setAttributeNS ? f.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", a) : f.element.setAttribute("hc-svg-href", a);
            return f
        }, symbol: function (a,
                             b, c, d, e, f) {
            var g, h = this.symbols[a], h = h && h(y(b), y(c), d, e, f), i = /^url\((.*?)\)$/, k, j;
            if (h) g = this.path(h), t(g, {
                symbolName: a,
                x: b,
                y: c,
                width: d,
                height: e
            }), f && t(g, f); else if (i.test(a)) j = function (a, b) {
                a.element && (a.attr({
                    width: b[0],
                    height: b[1]
                }), a.alignByTranslate || a.translate(y((d - b[0]) / 2), y((e - b[1]) / 2)))
            }, k = a.match(i)[1], a = Kb[k] || f && f.width && f.height && [f.width, f.height], g = this.image(k).attr({
                x: b,
                y: c
            }), g.isImg = !0, a ? j(g, a) : (g.attr({width: 0, height: 0}), $("img", {
                onload: function () {
                    this.width === 0 && (J(this, {
                        position: "absolute",
                        top: "-999em"
                    }), document.body.appendChild(this));
                    j(g, Kb[k] = [this.width, this.height]);
                    this.parentNode && this.parentNode.removeChild(this)
                }, src: k
            }));
            return g
        }, symbols: {
            circle: function (a, b, c, d) {
                var e = 0.166 * c;
                return ["M", a + c / 2, b, "C", a + c + e, b, a + c + e, b + d, a + c / 2, b + d, "C", a - e, b + d, a - e, b, a + c / 2, b, "Z"]
            }, square: function (a, b, c, d) {
                return ["M", a, b, "L", a + c, b, a + c, b + d, a, b + d, "Z"]
            }, triangle: function (a, b, c, d) {
                return ["M", a + c / 2, b, "L", a + c, b + d, a, b + d, "Z"]
            }, "triangle-down": function (a, b, c, d) {
                return ["M", a, b, "L", a + c, b, a + c / 2, b + d, "Z"]
            },
            diamond: function (a, b, c, d) {
                return ["M", a + c / 2, b, "L", a + c, b + d / 2, a + c / 2, b + d, a, b + d / 2, "Z"]
            }, arc: function (a, b, c, d, e) {
                var f = e.start, c = e.r || c || d, g = e.end - 0.001, d = e.innerR, h = e.open, i = T(f), k = aa(f), j = T(g), g = aa(g), e = e.end - f < na ? 0 : 1;
                return ["M", a + c * i, b + c * k, "A", c, c, 0, e, 1, a + c * j, b + c * g, h ? "M" : "L", a + d * j, b + d * g, "A", d, d, 0, e, 0, a + d * i, b + d * k, h ? "" : "Z"]
            }, callout: function (a, b, c, d, e) {
                var f = E(e && e.r || 0, c, d), g = f + 6, h = e && e.anchorX, e = e && e.anchorY, i;
                i = ["M", a + f, b, "L", a + c - f, b, "C", a + c, b, a + c, b, a + c, b + f, "L", a + c, b + d - f, "C", a + c, b + d, a + c, b + d, a + c - f, b +
                d, "L", a + f, b + d, "C", a, b + d, a, b + d, a, b + d - f, "L", a, b + f, "C", a, b, a, b, a + f, b];
                h && h > c && e > b + g && e < b + d - g ? i.splice(13, 3, "L", a + c, e - 6, a + c + 6, e, a + c, e + 6, a + c, b + d - f) : h && h < 0 && e > b + g && e < b + d - g ? i.splice(33, 3, "L", a, e + 6, a - 6, e, a, e - 6, a, b + f) : e && e > d && h > a + g && h < a + c - g ? i.splice(23, 3, "L", h + 6, b + d, h, b + d + 6, h - 6, b + d, a + f, b + d) : e && e < 0 && h > a + g && h < a + c - g && i.splice(3, 3, "L", h - 6, b, h, b - 6, h + 6, b, c - f, b);
                return i
            }
        }, clipRect: function (a, b, c, d) {
            var e = "highcharts-" + zb++, f = this.createElement("clipPath").attr({id: e}).add(this.defs), a = this.rect(a, b, c, d, 0).add(f);
            a.id = e;
            a.clipPath = f;
            a.count = 0;
            return a
        }, text: function (a, b, c, d) {
            var e = ia || !Z && this.forExport, f = {};
            if (d && (this.allowHTML || !this.forExport)) return this.html(a, b, c);
            f.x = Math.round(b || 0);
            if (c) f.y = Math.round(c);
            if (a || a === 0) f.text = a;
            a = this.createElement("text").attr(f);
            e && a.css({position: "absolute"});
            if (!d) a.xSetter = function (a, b, c) {
                var d = c.getElementsByTagName("tspan"), e, f = c.getAttribute(b), m;
                for (m = 0; m < d.length; m++) e = d[m], e.getAttribute(b) === f && e.setAttribute(b, a);
                c.setAttribute(b, a)
            };
            return a
        }, fontMetrics: function (a,
                                  b) {
            var c, d, a = a || this.style.fontSize;
            !a && b && K.getComputedStyle && (b = b.element || b, a = (c = K.getComputedStyle(b, "")) && c.fontSize);
            a = /px/.test(a) ? A(a) : /em/.test(a) ? parseFloat(a) * 12 : 12;
            c = a < 24 ? a + 3 : y(a * 1.2);
            d = y(c * 0.8);
            return {h: c, b: d, f: a}
        }, rotCorr: function (a, b, c) {
            var d = a;
            b && c && (d = v(d * T(b * ha), 4));
            return {x: -a / 3 * aa(b * ha), y: d}
        }, label: function (a, b, c, d, e, f, g, h, i) {
            var k = this, j = k.g(i), l = k.text("", 0, 0, g).attr({zIndex: 1}), m, n, s = 0, r = 3, p = 0, z, w, D, v, ca = 0, hb = {}, u, E, I, C, A;
            I = function () {
                var a, b;
                a = l.element.style;
                n = (z === void 0 ||
                w === void 0 || j.styles.textAlign) && q(l.textStr) && l.getBBox();
                j.width = (z || n.width || 0) + 2 * r + p;
                j.height = (w || n.height || 0) + 2 * r;
                u = r + k.fontMetrics(a && a.fontSize, l).b;
                if (E) {
                    if (!m) a = ca, b = (h ? -u : 0) + ca, j.box = m = d ? k.symbol(d, a, b, j.width, j.height, hb) : k.rect(a, b, j.width, j.height, 0, hb["stroke-width"]), m.isImg || m.attr("fill", "none"), m.add(j);
                    m.isImg || m.attr(t({width: y(j.width), height: y(j.height)}, hb));
                    hb = null
                }
            };
            C = function () {
                var a = j.styles, a = a && a.textAlign, b = p + r, c;
                c = h ? 0 : u;
                if (q(z) && n && (a === "center" || a === "right")) b += {
                    center: 0.5,
                    right: 1
                }[a] * (z - n.width);
                if (b !== l.x || c !== l.y) l.attr("x", b), c !== x && l.attr("y", c);
                l.x = b;
                l.y = c
            };
            A = function (a, b) {
                m ? m.attr(a, b) : hb[a] = b
            };
            j.onAdd = function () {
                l.add(j);
                j.attr({text: a || a === 0 ? a : "", x: b, y: c});
                m && q(e) && j.attr({anchorX: e, anchorY: f})
            };
            j.widthSetter = function (a) {
                z = a
            };
            j.heightSetter = function (a) {
                w = a
            };
            j.paddingSetter = function (a) {
                if (q(a) && a !== r) r = j.padding = a, C()
            };
            j.paddingLeftSetter = function (a) {
                q(a) && a !== p && (p = a, C())
            };
            j.alignSetter = function (a) {
                a = {left: 0, center: 0.5, right: 1}[a];
                a !== s && (s = a, n && j.attr({x: b}))
            };
            j.textSetter = function (a) {
                a !== x && l.textSetter(a);
                I();
                C()
            };
            j["stroke-widthSetter"] = function (a, b) {
                a && (E = !0);
                ca = a % 2 / 2;
                A(b, a)
            };
            j.strokeSetter = j.fillSetter = j.rSetter = function (a, b) {
                b === "fill" && a && (E = !0);
                A(b, a)
            };
            j.anchorXSetter = function (a, b) {
                e = a;
                A(b, y(a) - ca - D)
            };
            j.anchorYSetter = function (a, b) {
                f = a;
                A(b, a - v)
            };
            j.xSetter = function (a) {
                j.x = a;
                s && (a -= s * ((z || n.width) + 2 * r));
                D = y(a);
                j.attr("translateX", D)
            };
            j.ySetter = function (a) {
                v = j.y = y(a);
                j.attr("translateY", v)
            };
            var F = j.css;
            return t(j, {
                css: function (a) {
                    if (a) {
                        var b = {}, a = B(a);
                        o(j.textProps, function (c) {
                            a[c] !== x && (b[c] = a[c], delete a[c])
                        });
                        l.css(b)
                    }
                    return F.call(j, a)
                }, getBBox: function () {
                    return {width: n.width + 2 * r, height: n.height + 2 * r, x: n.x - r, y: n.y - r}
                }, shadow: function (a) {
                    m && m.shadow(a);
                    return j
                }, destroy: function () {
                    W(j.element, "mouseenter");
                    W(j.element, "mouseleave");
                    l && (l = l.destroy());
                    m && (m = m.destroy());
                    M.prototype.destroy.call(j);
                    j = k = I = C = A = null
                }
            })
        }
    };
    bb = za;
    t(M.prototype, {
        htmlCss: function (a) {
            var b = this.element;
            if (b = a && b.tagName === "SPAN" && a.width) delete a.width, this.textWidth = b,
                this.updateTransform();
            if (a && a.textOverflow === "ellipsis") a.whiteSpace = "nowrap", a.overflow = "hidden";
            this.styles = t(this.styles, a);
            J(this.element, a);
            return this
        }, htmlGetBBox: function () {
            var a = this.element;
            if (a.nodeName === "text") a.style.position = "absolute";
            return {x: a.offsetLeft, y: a.offsetTop, width: a.offsetWidth, height: a.offsetHeight}
        }, htmlUpdateTransform: function () {
            if (this.added) {
                var a = this.renderer, b = this.element, c = this.translateX || 0, d = this.translateY || 0, e = this.x || 0, f = this.y || 0, g = this.textAlign || "left",
                    h = {left: 0, center: 0.5, right: 1}[g], i = this.shadows, k = this.styles;
                J(b, {marginLeft: c, marginTop: d});
                i && o(i, function (a) {
                    J(a, {marginLeft: c + 1, marginTop: d + 1})
                });
                this.inverted && o(b.childNodes, function (c) {
                    a.invertChild(c, b)
                });
                if (b.tagName === "SPAN") {
                    var j = this.rotation, l, m = A(this.textWidth), n = [j, g, b.innerHTML, this.textWidth, this.textAlign].join(",");
                    if (n !== this.cTT) {
                        l = a.fontMetrics(b.style.fontSize).b;
                        q(j) && this.setSpanRotation(j, h, l);
                        i = p(this.elemWidth, b.offsetWidth);
                        if (i > m && /[ \-]/.test(b.textContent || b.innerText)) J(b,
                            {width: m + "px", display: "block", whiteSpace: k && k.whiteSpace || "normal"}), i = m;
                        this.getSpanCorrection(i, l, h, j, g)
                    }
                    J(b, {left: e + (this.xCorr || 0) + "px", top: f + (this.yCorr || 0) + "px"});
                    if (nb) l = b.offsetHeight;
                    this.cTT = n
                }
            } else this.alignOnAdd = !0
        }, setSpanRotation: function (a, b, c) {
            var d = {}, e = sa ? "-ms-transform" : nb ? "-webkit-transform" : La ? "MozTransform" : Jb ? "-o-transform" : "";
            d[e] = d.transform = "rotate(" + a + "deg)";
            d[e + (La ? "Origin" : "-origin")] = d.transformOrigin = b * 100 + "% " + c + "px";
            J(this.element, d)
        }, getSpanCorrection: function (a,
                                        b, c) {
            this.xCorr = -a * c;
            this.yCorr = -b
        }
    });
    t(za.prototype, {
        html: function (a, b, c) {
            var d = this.createElement("span"), e = d.element, f = d.renderer;
            d.textSetter = function (a) {
                a !== e.innerHTML && delete this.bBox;
                e.innerHTML = this.textStr = a;
                d.htmlUpdateTransform()
            };
            d.xSetter = d.ySetter = d.alignSetter = d.rotationSetter = function (a, b) {
                b === "align" && (b = "textAlign");
                d[b] = a;
                d.htmlUpdateTransform()
            };
            d.attr({text: a, x: y(b), y: y(c)}).css({
                position: "absolute",
                fontFamily: this.style.fontFamily,
                fontSize: this.style.fontSize
            });
            e.style.whiteSpace =
                "nowrap";
            d.css = d.htmlCss;
            if (f.isSVG) d.add = function (a) {
                var b, c = f.box.parentNode, k = [];
                if (this.parentGroup = a) {
                    if (b = a.div, !b) {
                        for (; a;) k.push(a), a = a.parentGroup;
                        o(k.reverse(), function (a) {
                            var d, e = O(a.element, "class");
                            e && (e = {className: e});
                            b = a.div = a.div || $(Ka, e, {
                                position: "absolute",
                                left: (a.translateX || 0) + "px",
                                top: (a.translateY || 0) + "px"
                            }, b || c);
                            d = b.style;
                            t(a, {
                                translateXSetter: function (b, c) {
                                    d.left = b + "px";
                                    a[c] = b;
                                    a.doTransform = !0
                                }, translateYSetter: function (b, c) {
                                    d.top = b + "px";
                                    a[c] = b;
                                    a.doTransform = !0
                                }
                            });
                            o(["opacity",
                                "visibility"], function (b) {
                                Ua(a, b + "Setter", function (a, b, c, e) {
                                    a.call(this, b, c, e);
                                    d[c] = b
                                })
                            })
                        })
                    }
                } else b = c;
                b.appendChild(e);
                d.added = !0;
                d.alignOnAdd && d.htmlUpdateTransform();
                return d
            };
            return d
        }
    });
    var Q;
    if (!Z && !ia) {
        Q = {
            init: function (a, b) {
                var c = ["<", b, ' filled="f" stroked="f"'], d = ["position: ", "absolute", ";"], e = b === Ka;
                (b === "shape" || e) && d.push("left:0;top:0;width:1px;height:1px;");
                d.push("visibility: ", e ? "hidden" : "visible");
                c.push(' style="', d.join(""), '"/>');
                if (b) c = e || b === "span" || b === "img" ? c.join("") : a.prepVML(c),
                    this.element = $(c);
                this.renderer = a
            }, add: function (a) {
                var b = this.renderer, c = this.element, d = b.box, e = a && a.inverted, d = a ? a.element || a : d;
                if (a) this.parentGroup = a;
                e && b.invertChild(c, d);
                d.appendChild(c);
                this.added = !0;
                this.alignOnAdd && !this.deferUpdateTransform && this.updateTransform();
                if (this.onAdd) this.onAdd();
                return this
            }, updateTransform: M.prototype.htmlUpdateTransform, setSpanRotation: function () {
                var a = this.rotation, b = T(a * ha), c = aa(a * ha);
                J(this.element, {
                    filter: a ? ["progid:DXImageTransform.Microsoft.Matrix(M11=",
                        b, ", M12=", -c, ", M21=", c, ", M22=", b, ", sizingMethod='auto expand')"].join("") : "none"
                })
            }, getSpanCorrection: function (a, b, c, d, e) {
                var f = d ? T(d * ha) : 1, g = d ? aa(d * ha) : 0, h = p(this.elemHeight, this.element.offsetHeight), i;
                this.xCorr = f < 0 && -a;
                this.yCorr = g < 0 && -h;
                i = f * g < 0;
                this.xCorr += g * b * (i ? 1 - c : c);
                this.yCorr -= f * b * (d ? i ? c : 1 - c : 1);
                e && e !== "left" && (this.xCorr -= a * c * (f < 0 ? -1 : 1), d && (this.yCorr -= h * c * (g < 0 ? -1 : 1)), J(this.element, {textAlign: e}))
            }, pathToVML: function (a) {
                for (var b = a.length, c = []; b--;) if (qa(a[b])) c[b] = y(a[b] * 10) - 5; else if (a[b] ===
                    "Z") c[b] = "x"; else if (c[b] = a[b], a.isArc && (a[b] === "wa" || a[b] === "at")) c[b + 5] === c[b + 7] && (c[b + 7] += a[b + 7] > a[b + 5] ? 1 : -1), c[b + 6] === c[b + 8] && (c[b + 8] += a[b + 8] > a[b + 6] ? 1 : -1);
                return c.join(" ") || "x"
            }, clip: function (a) {
                var b = this, c;
                a ? (c = a.members, la(c, b), c.push(b), b.destroyClip = function () {
                    la(c, b)
                }, a = a.getCSS(b)) : (b.destroyClip && b.destroyClip(), a = {clip: mb ? "inherit" : "rect(auto)"});
                return b.css(a)
            }, css: M.prototype.htmlCss, safeRemoveChild: function (a) {
                a.parentNode && Sa(a)
            }, destroy: function () {
                this.destroyClip && this.destroyClip();
                return M.prototype.destroy.apply(this)
            }, on: function (a, b) {
                this.element["on" + a] = function () {
                    var a = K.event;
                    a.target = a.srcElement;
                    b(a)
                };
                return this
            }, cutOffPath: function (a, b) {
                var c, a = a.split(/[ ,]/);
                c = a.length;
                if (c === 9 || c === 11) a[c - 4] = a[c - 2] = A(a[c - 2]) - 10 * b;
                return a.join(" ")
            }, shadow: function (a, b, c) {
                var d = [], e, f = this.element, g = this.renderer, h, i = f.style, k, j = f.path, l, m, n, s;
                j && typeof j.value !== "string" && (j = "x");
                m = j;
                if (a) {
                    n = p(a.width, 3);
                    s = (a.opacity || 0.15) / n;
                    for (e = 1; e <= 3; e++) {
                        l = n * 2 + 1 - 2 * e;
                        c && (m = this.cutOffPath(j.value,
                            l + 0.5));
                        k = ['<shape isShadow="true" strokeweight="', l, '" filled="false" path="', m, '" coordsize="10 10" style="', f.style.cssText, '" />'];
                        h = $(g.prepVML(k), null, {left: A(i.left) + p(a.offsetX, 1), top: A(i.top) + p(a.offsetY, 1)});
                        if (c) h.cutOff = l + 1;
                        k = ['<stroke color="', a.color || "black", '" opacity="', s * e, '"/>'];
                        $(g.prepVML(k), null, null, h);
                        b ? b.element.appendChild(h) : f.parentNode.insertBefore(h, f);
                        d.push(h)
                    }
                    this.shadows = d
                }
                return this
            }, updateShadows: ua, setAttr: function (a, b) {
                mb ? this.element[a] = b : this.element.setAttribute(a,
                    b)
            }, classSetter: function (a) {
                this.element.className = a
            }, dashstyleSetter: function (a, b, c) {
                (c.getElementsByTagName("stroke")[0] || $(this.renderer.prepVML(["<stroke/>"]), null, null, c))[b] = a || "solid";
                this[b] = a
            }, dSetter: function (a, b, c) {
                var d = this.shadows, a = a || [];
                this.d = a.join && a.join(" ");
                c.path = a = this.pathToVML(a);
                if (d) for (c = d.length; c--;) d[c].path = d[c].cutOff ? this.cutOffPath(a, d[c].cutOff) : a;
                this.setAttr(b, a)
            }, fillSetter: function (a, b, c) {
                var d = c.nodeName;
                if (d === "SPAN") c.style.color = a; else if (d !== "IMG") c.filled =
                    a !== "none", this.setAttr("fillcolor", this.renderer.color(a, c, b, this))
            }, opacitySetter: ua, rotationSetter: function (a, b, c) {
                c = c.style;
                this[b] = c[b] = a;
                c.left = -y(aa(a * ha) + 1) + "px";
                c.top = y(T(a * ha)) + "px"
            }, strokeSetter: function (a, b, c) {
                this.setAttr("strokecolor", this.renderer.color(a, c, b))
            }, "stroke-widthSetter": function (a, b, c) {
                c.stroked = !!a;
                this[b] = a;
                qa(a) && (a += "px");
                this.setAttr("strokeweight", a)
            }, titleSetter: function (a, b) {
                this.setAttr(b, a)
            }, visibilitySetter: function (a, b, c) {
                a === "inherit" && (a = "visible");
                this.shadows &&
                o(this.shadows, function (c) {
                    c.style[b] = a
                });
                c.nodeName === "DIV" && (a = a === "hidden" ? "-999em" : 0, mb || (c.style[b] = a ? "visible" : "hidden"), b = "top");
                c.style[b] = a
            }, xSetter: function (a, b, c) {
                this[b] = a;
                b === "x" ? b = "left" : b === "y" && (b = "top");
                this.updateClipping ? (this[b] = a, this.updateClipping()) : c.style[b] = a
            }, zIndexSetter: function (a, b, c) {
                c.style[b] = a
            }
        };
        u.VMLElement = Q = ma(M, Q);
        Q.prototype.ySetter = Q.prototype.widthSetter = Q.prototype.heightSetter = Q.prototype.xSetter;
        var Na = {
            Element: Q, isIE8: ya.indexOf("MSIE 8.0") > -1, init: function (a,
                                                                            b, c, d) {
                var e;
                this.alignedObjects = [];
                d = this.createElement(Ka).css(t(this.getStyle(d), {position: "relative"}));
                e = d.element;
                a.appendChild(d.element);
                this.isVML = !0;
                this.box = e;
                this.boxWrapper = d;
                this.gradients = {};
                this.cache = {};
                this.cacheKeys = [];
                this.setSize(b, c, !1);
                if (!C.namespaces.hcv) {
                    C.namespaces.add("hcv", "urn:schemas-microsoft-com:vml");
                    try {
                        C.createStyleSheet().cssText = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
                    } catch (f) {
                        C.styleSheets[0].cssText +=
                            "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
                    }
                }
            }, isHidden: function () {
                return !this.box.offsetWidth
            }, clipRect: function (a, b, c, d) {
                var e = this.createElement(), f = da(a);
                return t(e, {
                    members: [],
                    count: 0,
                    left: (f ? a.x : a) + 1,
                    top: (f ? a.y : b) + 1,
                    width: (f ? a.width : c) - 1,
                    height: (f ? a.height : d) - 1,
                    getCSS: function (a) {
                        var b = a.element, c = b.nodeName, a = a.inverted, d = this.top - (c === "shape" ? b.offsetTop : 0), e = this.left, b = e + this.width, f = d + this.height, d = {
                            clip: "rect(" + y(a ? e : d) + "px," +
                            y(a ? f : b) + "px," + y(a ? b : f) + "px," + y(a ? d : e) + "px)"
                        };
                        !a && mb && c === "DIV" && t(d, {width: b + "px", height: f + "px"});
                        return d
                    },
                    updateClipping: function () {
                        o(e.members, function (a) {
                            a.element && a.css(e.getCSS(a))
                        })
                    }
                })
            }, color: function (a, b, c, d) {
                var e = this, f, g = /^rgba/, h, i, k = "none";
                a && a.linearGradient ? i = "gradient" : a && a.radialGradient && (i = "pattern");
                if (i) {
                    var j, l, m = a.linearGradient || a.radialGradient, n, s, r, p, z, w = "", a = a.stops, D, q = [], ca = function () {
                        h = ['<fill colors="' + q.join(",") + '" opacity="', r, '" o:opacity2="', s, '" type="', i, '" ',
                            w, 'focus="100%" method="any" />'];
                        $(e.prepVML(h), null, null, b)
                    };
                    n = a[0];
                    D = a[a.length - 1];
                    n[0] > 0 && a.unshift([0, n[1]]);
                    D[0] < 1 && a.push([1, D[1]]);
                    o(a, function (a, b) {
                        g.test(a[1]) ? (f = ea(a[1]), j = f.get("rgb"), l = f.get("a")) : (j = a[1], l = 1);
                        q.push(a[0] * 100 + "% " + j);
                        b ? (r = l, p = j) : (s = l, z = j)
                    });
                    if (c === "fill") if (i === "gradient") c = m.x1 || m[0] || 0, a = m.y1 || m[1] || 0, n = m.x2 || m[2] || 0, m = m.y2 || m[3] || 0, w = 'angle="' + (90 - U.atan((m - a) / (n - c)) * 180 / na) + '"', ca(); else {
                        var k = m.r, v = k * 2, u = k * 2, x = m.cx, t = m.cy, y = b.radialReference, B, k = function () {
                            y && (B =
                                d.getBBox(), x += (y[0] - B.x) / B.width - 0.5, t += (y[1] - B.y) / B.height - 0.5, v *= y[2] / B.width, u *= y[2] / B.height);
                            w = 'src="' + L.global.VMLRadialGradientURL + '" size="' + v + "," + u + '" origin="0.5,0.5" position="' + x + "," + t + '" color2="' + z + '" ';
                            ca()
                        };
                        d.added ? k() : d.onAdd = k;
                        k = p
                    } else k = j
                } else if (g.test(a) && b.tagName !== "IMG") f = ea(a), h = ["<", c, ' opacity="', f.get("a"), '"/>'], $(this.prepVML(h), null, null, b), k = f.get("rgb"); else {
                    k = b.getElementsByTagName(c);
                    if (k.length) k[0].opacity = 1, k[0].type = "solid";
                    k = a
                }
                return k
            }, prepVML: function (a) {
                var b =
                    this.isIE8, a = a.join("");
                b ? (a = a.replace("/>", ' xmlns="urn:schemas-microsoft-com:vml" />'), a = a.indexOf('style="') === -1 ? a.replace("/>", ' style="display:inline-block;behavior:url(#default#VML);" />') : a.replace('style="', 'style="display:inline-block;behavior:url(#default#VML);')) : a = a.replace("<", "<hcv:");
                return a
            }, text: za.prototype.html, path: function (a) {
                var b = {coordsize: "10 10"};
                Ha(a) ? b.d = a : da(a) && t(b, a);
                return this.createElement("shape").attr(b)
            }, circle: function (a, b, c) {
                var d = this.symbol("circle");
                if (da(a)) c =
                    a.r, b = a.y, a = a.x;
                d.isCircle = !0;
                d.r = c;
                return d.attr({x: a, y: b})
            }, g: function (a) {
                var b;
                a && (b = {className: "highcharts-" + a, "class": "highcharts-" + a});
                return this.createElement(Ka).attr(b)
            }, image: function (a, b, c, d, e) {
                var f = this.createElement("img").attr({src: a});
                arguments.length > 1 && f.attr({x: b, y: c, width: d, height: e});
                return f
            }, createElement: function (a) {
                return a === "rect" ? this.symbol(a) : za.prototype.createElement.call(this, a)
            }, invertChild: function (a, b) {
                var c = this, d = b.style, e = a.tagName === "IMG" && a.style;
                J(a, {
                    flip: "x",
                    left: A(d.width) - (e ? A(e.top) : 1), top: A(d.height) - (e ? A(e.left) : 1), rotation: -90
                });
                o(a.childNodes, function (b) {
                    c.invertChild(b, a)
                })
            }, symbols: {
                arc: function (a, b, c, d, e) {
                    var f = e.start, g = e.end, h = e.r || c || d, c = e.innerR, d = T(f), i = aa(f), k = T(g), j = aa(g);
                    if (g - f === 0) return ["x"];
                    f = ["wa", a - h, b - h, a + h, b + h, a + h * d, b + h * i, a + h * k, b + h * j];
                    e.open && !c && f.push("e", "M", a, b);
                    f.push("at", a - c, b - c, a + c, b + c, a + c * k, b + c * j, a + c * d, b + c * i, "x", "e");
                    f.isArc = !0;
                    return f
                }, circle: function (a, b, c, d, e) {
                    e && (c = d = 2 * e.r);
                    e && e.isCircle && (a -= c / 2, b -= d / 2);
                    return ["wa",
                        a, b, a + c, b + d, a + c, b + d / 2, a + c, b + d / 2, "e"]
                }, rect: function (a, b, c, d, e) {
                    return za.prototype.symbols[!q(e) || !e.r ? "square" : "callout"].call(0, a, b, c, d, e)
                }
            }
        };
        u.VMLRenderer = Q = function () {
            this.init.apply(this, arguments)
        };
        Q.prototype = B(za.prototype, Na);
        bb = Q
    }
    za.prototype.measureSpanWidth = function (a, b) {
        var c = C.createElement("span"), d;
        d = C.createTextNode(a);
        c.appendChild(d);
        J(c, b);
        this.box.appendChild(c);
        d = c.offsetWidth;
        Sa(c);
        return d
    };
    var Nb;
    if (ia) u.CanVGRenderer = Q = function () {
        Ea = "http://www.w3.org/1999/xhtml"
    }, Q.prototype.symbols =
    {}, Nb = function () {
        function a() {
            var a = b.length, d;
            for (d = 0; d < a; d++) b[d]();
            b = []
        }

        var b = [];
        return {
            push: function (c, d) {
                b.length === 0 && u.getScript(d, a);
                b.push(c)
            }
        }
    }(), bb = Q;
    Va.prototype = {
        addLabel: function () {
            var a = this.axis, b = a.options, c = a.chart, d = a.categories, e = a.names, f = this.pos, g = b.labels, h = a.tickPositions, i = f === h[0], k = f === h[h.length - 1], e = d ? p(d[f], e[f], f) : f, d = this.label, h = h.info, j;
            a.isDatetimeAxis && h && (j = b.dateTimeLabelFormats[h.higherRanks[f] || h.unitName]);
            this.isFirst = i;
            this.isLast = k;
            b = a.labelFormatter.call({
                axis: a,
                chart: c, isFirst: i, isLast: k, dateTimeLabelFormat: j, value: a.isLog ? ga(ka(e)) : e
            });
            q(d) ? d && d.attr({text: b}) : (this.labelLength = (this.label = d = q(b) && g.enabled ? c.renderer.text(b, 0, 0, g.useHTML).css(B(g.style)).add(a.labelGroup) : null) && d.getBBox().width, this.rotation = 0)
        }, getLabelSize: function () {
            return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0
        }, handleOverflow: function (a) {
            var b = this.axis, c = a.x, d = b.chart.chartWidth, e = b.chart.spacing, f = p(b.labelLeft, E(b.pos, e[3])), e = p(b.labelRight, v(b.pos +
            b.len, d - e[1])), g = this.label, h = this.rotation, i = {
                left: 0,
                center: 0.5,
                right: 1
            }[b.labelAlign], k = g.getBBox().width, j = b.slotWidth, l = 1, m, n = {};
            if (h) h < 0 && c - i * k < f ? m = y(c / T(h * ha) - f) : h > 0 && c + i * k > e && (m = y((d - c) / T(h * ha))); else if (d = c + (1 - i) * k, c - i * k < f ? j = a.x + j * (1 - i) - f : d > e && (j = e - a.x + j * i, l = -1), j = E(b.slotWidth, j), j < b.slotWidth && b.labelAlign === "center" && (a.x += l * (b.slotWidth - j - i * (b.slotWidth - E(k, j)))), k > j || b.autoRotation && g.styles.width) m = j;
            if (m) {
                n.width = m;
                if (!b.options.labels.style.textOverflow) n.textOverflow = "ellipsis";
                g.css(n)
            }
        },
        getPosition: function (a, b, c, d) {
            var e = this.axis, f = e.chart, g = d && f.oldChartHeight || f.chartHeight;
            return {
                x: a ? e.translate(b + c, null, null, d) + e.transB : e.left + e.offset + (e.opposite ? (d && f.oldChartWidth || f.chartWidth) - e.right - e.left : 0),
                y: a ? g - e.bottom + e.offset - (e.opposite ? e.height : 0) : g - e.translate(b + c, null, null, d) - e.transB
            }
        }, getLabelPosition: function (a, b, c, d, e, f, g, h) {
            var i = this.axis, k = i.transA, j = i.reversed, l = i.staggerLines, m = i.tickRotCorr || {
                    x: 0,
                    y: 0
                }, n = e.y;
            q(n) || (n = i.side === 2 ? m.y + 8 : n = T(c.rotation * ha) * (m.y - c.getBBox(!1,
                0).height / 2));
            a = a + e.x + m.x - (f && d ? f * k * (j ? -1 : 1) : 0);
            b = b + n - (f && !d ? f * k * (j ? 1 : -1) : 0);
            l && (c = g / (h || 1) % l, i.opposite && (c = l - c - 1), b += c * (i.labelOffset / l));
            return {x: a, y: y(b)}
        }, getMarkPath: function (a, b, c, d, e, f) {
            return f.crispLine(["M", a, b, "L", a + (e ? 0 : -c), b + (e ? c : 0)], d)
        }, render: function (a, b, c) {
            var d = this.axis, e = d.options, f = d.chart.renderer, g = d.horiz, h = this.type, i = this.label, k = this.pos, j = e.labels, l = this.gridLine, m = h ? h + "Grid" : "grid", n = h ? h + "Tick" : "tick", s = e[m + "LineWidth"], r = e[m + "LineColor"], o = e[m + "LineDashStyle"], z = e[n +
            "Length"], m = p(e[n + "Width"], !h && d.isXAxis ? 1 : 0), w = e[n + "Color"], D = e[n + "Position"], n = this.mark, q = j.step, ca = !0, v = d.tickmarkOffset, u = this.getPosition(g, k, v, b), t = u.x, u = u.y, y = g && t === d.pos + d.len || !g && u === d.pos ? -1 : 1, c = p(c, 1);
            this.isActive = !0;
            if (s) {
                k = d.getPlotLinePath(k + v, s * y, b, !0);
                if (l === x) {
                    l = {stroke: r, "stroke-width": s};
                    if (o) l.dashstyle = o;
                    if (!h) l.zIndex = 1;
                    if (b) l.opacity = 0;
                    this.gridLine = l = s ? f.path(k).attr(l).add(d.gridGroup) : null
                }
                if (!b && l && k) l[this.isNew ? "attr" : "animate"]({d: k, opacity: c})
            }
            if (m && z) D === "inside" &&
            (z = -z), d.opposite && (z = -z), h = this.getMarkPath(t, u, z, m * y, g, f), n ? n.animate({
                d: h,
                opacity: c
            }) : this.mark = f.path(h).attr({stroke: w, "stroke-width": m, opacity: c}).add(d.axisGroup);
            if (i && !isNaN(t)) i.xy = u = this.getLabelPosition(t, u, i, g, j, v, a, q), this.isFirst && !this.isLast && !p(e.showFirstLabel, 1) || this.isLast && !this.isFirst && !p(e.showLastLabel, 1) ? ca = !1 : g && !d.isRadial && !j.step && !j.rotation && !b && c !== 0 && this.handleOverflow(u), q && a % q && (ca = !1), ca && !isNaN(u.y) ? (u.opacity = c, i[this.isNew ? "attr" : "animate"](u), this.isNew = !1) : i.attr("y", -9999)
        }, destroy: function () {
            Ra(this, this.axis)
        }
    };
    u.PlotLineOrBand = function (a, b) {
        this.axis = a;
        if (b) this.options = b, this.id = b.id
    };
    u.PlotLineOrBand.prototype = {
        render: function () {
            var a = this, b = a.axis, c = b.horiz, d = a.options, e = d.label, f = a.label, g = d.width, h = d.to, i = d.from, k = q(i) && q(h), j = d.value, l = d.dashStyle, m = a.svgElem, n = [], s, r = d.color, p = d.zIndex, o = d.events, w = {}, D = b.chart.renderer;
            b.isLog && (i = Ca(i), h = Ca(h), j = Ca(j));
            if (g) {
                if (n = b.getPlotLinePath(j, g), w = {stroke: r, "stroke-width": g}, l) w.dashstyle = l
            } else if (k) {
                n =
                    b.getPlotBandPath(i, h, d);
                if (r) w.fill = r;
                if (d.borderWidth) w.stroke = d.borderColor, w["stroke-width"] = d.borderWidth
            } else return;
            if (q(p)) w.zIndex = p;
            if (m) if (n) m.show(), m.animate({d: n}); else {
                if (m.hide(), f) a.label = f = f.destroy()
            } else if (n && n.length && (a.svgElem = m = D.path(n).attr(w).add(), o)) for (s in d = function (b) {
                m.on(b, function (c) {
                    o[b].apply(a, [c])
                })
            }, o) d(s);
            if (e && q(e.text) && n && n.length && b.width > 0 && b.height > 0 && !n.flat) {
                e = B({
                    align: c && k && "center",
                    x: c ? !k && 4 : 10,
                    verticalAlign: !c && k && "middle",
                    y: c ? k ? 16 : 10 : k ? 6 : -4,
                    rotation: c && !k && 90
                }, e);
                if (!f) {
                    w = {align: e.textAlign || e.align, rotation: e.rotation};
                    if (q(p)) w.zIndex = p;
                    a.label = f = D.text(e.text, 0, 0, e.useHTML).attr(w).css(e.style).add()
                }
                b = [n[1], n[4], k ? n[6] : n[1]];
                k = [n[2], n[5], k ? n[7] : n[2]];
                n = Qa(b);
                c = Qa(k);
                f.align(e, !1, {x: n, y: c, width: Da(b) - n, height: Da(k) - c});
                f.show()
            } else f && f.hide();
            return a
        }, destroy: function () {
            la(this.axis.plotLinesAndBands, this);
            delete this.axis;
            Ra(this)
        }
    };
    var ja = u.Axis = function () {
        this.init.apply(this, arguments)
    };
    ja.prototype = {
        defaultOptions: {
            dateTimeLabelFormats: {
                millisecond: "%H:%M:%S.%L",
                second: "%H:%M:%S",
                minute: "%H:%M",
                hour: "%H:%M",
                day: "%e. %b",
                week: "%e. %b",
                month: "%b '%y",
                year: "%Y"
            },
            endOnTick: !1,
            gridLineColor: "#D8D8D8",
            labels: {enabled: !0, style: {color: "#606060", cursor: "default", fontSize: "11px"}, x: 0, y: 15},
            lineColor: "#C0D0E0",
            lineWidth: 1,
            minPadding: 0.01,
            maxPadding: 0.01,
            minorGridLineColor: "#E0E0E0",
            minorGridLineWidth: 1,
            minorTickColor: "#A0A0A0",
            minorTickLength: 2,
            minorTickPosition: "outside",
            startOfWeek: 1,
            startOnTick: !1,
            tickColor: "#C0D0E0",
            tickLength: 10,
            tickmarkPlacement: "between",
            tickPixelInterval: 100,
            tickPosition: "outside",
            title: {align: "middle", style: {color: "#707070"}},
            type: "linear"
        },
        defaultYAxisOptions: {
            endOnTick: !0,
            gridLineWidth: 1,
            tickPixelInterval: 72,
            showLastLabel: !0,
            labels: {x: -8, y: 3},
            lineWidth: 0,
            maxPadding: 0.05,
            minPadding: 0.05,
            startOnTick: !0,
            title: {rotation: 270, text: "Values"},
            stackLabels: {
                enabled: !1, formatter: function () {
                    return u.numberFormat(this.total, -1)
                }, style: B(ba.line.dataLabels.style, {color: "#000000"})
            }
        },
        defaultLeftAxisOptions: {labels: {x: -15, y: null}, title: {rotation: 270}},
        defaultRightAxisOptions: {
            labels: {
                x: 15,
                y: null
            }, title: {rotation: 90}
        },
        defaultBottomAxisOptions: {labels: {autoRotation: [-45], x: 0, y: null}, title: {rotation: 0}},
        defaultTopAxisOptions: {labels: {autoRotation: [-45], x: 0, y: -15}, title: {rotation: 0}},
        init: function (a, b) {
            var c = b.isX;
            this.chart = a;
            this.horiz = a.inverted ? !c : c;
            this.coll = (this.isXAxis = c) ? "xAxis" : "yAxis";
            this.opposite = b.opposite;
            this.side = b.side || (this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3);
            this.setOptions(b);
            var d = this.options, e = d.type;
            this.labelFormatter = d.labels.formatter || this.defaultLabelFormatter;
            this.userOptions = b;
            this.minPixelPadding = 0;
            this.reversed = d.reversed;
            this.visible = d.visible !== !1;
            this.zoomEnabled = d.zoomEnabled !== !1;
            this.categories = d.categories || e === "category";
            this.names = this.names || [];
            this.isLog = e === "logarithmic";
            this.isDatetimeAxis = e === "datetime";
            this.isLinked = q(d.linkedTo);
            this.ticks = {};
            this.labelEdge = [];
            this.minorTicks = {};
            this.plotLinesAndBands = [];
            this.alternateBands = {};
            this.len = 0;
            this.minRange = this.userMinRange = d.minRange || d.maxZoom;
            this.range = d.range;
            this.offset = d.offset || 0;
            this.stacks = {};
            this.oldStacks = {};
            this.stacksTouched = 0;
            this.min = this.max = null;
            this.crosshair = p(d.crosshair, ra(a.options.tooltip.crosshairs)[c ? 0 : 1], !1);
            var f, d = this.options.events;
            Fa(this, a.axes) === -1 && (c && !this.isColorAxis ? a.axes.splice(a.xAxis.length, 0, this) : a.axes.push(this), a[this.coll].push(this));
            this.series = this.series || [];
            if (a.inverted && c && this.reversed === x) this.reversed = !0;
            this.removePlotLine = this.removePlotBand = this.removePlotBandOrLine;
            for (f in d) H(this, f, d[f]);
            if (this.isLog) this.val2lin =
                Ca, this.lin2val = ka
        },
        setOptions: function (a) {
            this.options = B(this.defaultOptions, this.isXAxis ? {} : this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], B(L[this.coll], a))
        },
        defaultLabelFormatter: function () {
            var a = this.axis, b = this.value, c = a.categories, d = this.dateTimeLabelFormat, e = L.lang.numericSymbols, f = e && e.length, g, h = a.options.labels.format, a = a.isLog ? b : a.tickInterval;
            if (h) g = Ja(h, this); else if (c) g = b; else if (d) g =
                Pa(d, b); else if (f && a >= 1E3) for (; f-- && g === x;) c = Math.pow(1E3, f + 1), a >= c && b * 10 % c === 0 && e[f] !== null && (g = u.numberFormat(b / c, -1) + e[f]);
            g === x && (g = P(b) >= 1E4 ? u.numberFormat(b, -1) : u.numberFormat(b, -1, x, ""));
            return g
        },
        getSeriesExtremes: function () {
            var a = this, b = a.chart;
            a.hasVisibleSeries = !1;
            a.dataMin = a.dataMax = a.threshold = null;
            a.softThreshold = !a.isXAxis;
            a.buildStacks && a.buildStacks();
            o(a.series, function (c) {
                if (c.visible || !b.options.chart.ignoreHiddenSeries) {
                    var d = c.options, e = d.threshold, f;
                    a.hasVisibleSeries = !0;
                    a.isLog &&
                    e <= 0 && (e = null);
                    if (a.isXAxis) {
                        if (d = c.xData, d.length) a.dataMin = E(p(a.dataMin, d[0]), Qa(d)), a.dataMax = v(p(a.dataMax, d[0]), Da(d))
                    } else {
                        c.getExtremes();
                        f = c.dataMax;
                        c = c.dataMin;
                        if (q(c) && q(f)) a.dataMin = E(p(a.dataMin, c), c), a.dataMax = v(p(a.dataMax, f), f);
                        if (q(e)) a.threshold = e;
                        if (!d.softThreshold || a.isLog) a.softThreshold = !1
                    }
                }
            })
        },
        translate: function (a, b, c, d, e, f) {
            var g = this.linkedParent || this, h = 1, i = 0, k = d ? g.oldTransA : g.transA, d = d ? g.oldMin : g.min, j = g.minPixelPadding, e = (g.doPostTranslate || g.isLog && e) && g.lin2val;
            if (!k) k =
                g.transA;
            if (c) h *= -1, i = g.len;
            g.reversed && (h *= -1, i -= h * (g.sector || g.len));
            b ? (a = a * h + i, a -= j, a = a / k + d, e && (a = g.lin2val(a))) : (e && (a = g.val2lin(a)), f === "between" && (f = 0.5), a = h * (a - d) * k + i + h * j + (qa(f) ? k * f * g.pointRange : 0));
            return a
        },
        toPixels: function (a, b) {
            return this.translate(a, !1, !this.horiz, null, !0) + (b ? 0 : this.pos)
        },
        toValue: function (a, b) {
            return this.translate(a - (b ? 0 : this.pos), !0, !this.horiz, null, !0)
        },
        getPlotLinePath: function (a, b, c, d, e) {
            var f = this.chart, g = this.left, h = this.top, i, k, j = c && f.oldChartHeight || f.chartHeight,
                l = c && f.oldChartWidth || f.chartWidth, m;
            i = this.transB;
            var n = function (a, b, c) {
                if (a < b || a > c) d ? a = E(v(b, a), c) : m = !0;
                return a
            }, e = p(e, this.translate(a, null, null, c)), a = c = y(e + i);
            i = k = y(j - e - i);
            isNaN(e) ? m = !0 : this.horiz ? (i = h, k = j - this.bottom, a = c = n(a, g, g + this.width)) : (a = g, c = l - this.right, i = k = n(i, h, h + this.height));
            return m && !d ? null : f.renderer.crispLine(["M", a, i, "L", c, k], b || 1)
        },
        getLinearTickPositions: function (a, b, c) {
            var d, e = ga(S(b / a) * a), f = ga(ta(c / a) * a), g = [];
            if (b === c && qa(b)) return [b];
            for (b = e; b <= f;) {
                g.push(b);
                b = ga(b + a);
                if (b ===
                    d) break;
                d = b
            }
            return g
        },
        getMinorTickPositions: function () {
            var a = this.options, b = this.tickPositions, c = this.minorTickInterval, d = [], e, f = this.pointRangePadding || 0;
            e = this.min - f;
            var f = this.max + f, g = f - e;
            if (g && g / c < this.len / 3) if (this.isLog) {
                f = b.length;
                for (e = 1; e < f; e++) d = d.concat(this.getLogTickPositions(c, b[e - 1], b[e], !0))
            } else if (this.isDatetimeAxis && a.minorTickInterval === "auto") d = d.concat(this.getTimeTicks(this.normalizeTimeTickInterval(c), e, f, a.startOfWeek)); else for (b = e + (b[0] - e) % c; b <= f; b += c) d.push(b);
            d.length !==
            0 && this.trimTicks(d, a.startOnTick, a.endOnTick);
            return d
        },
        adjustForMinRange: function () {
            var a = this.options, b = this.min, c = this.max, d, e = this.dataMax - this.dataMin >= this.minRange, f, g, h, i, k, j;
            if (this.isXAxis && this.minRange === x && !this.isLog) q(a.min) || q(a.max) ? this.minRange = null : (o(this.series, function (a) {
                i = a.xData;
                for (g = k = a.xIncrement ? 1 : i.length - 1; g > 0; g--) if (h = i[g] - i[g - 1], f === x || h < f) f = h
            }), this.minRange = E(f * 5, this.dataMax - this.dataMin));
            if (c - b < this.minRange) {
                j = this.minRange;
                d = (j - c + b) / 2;
                d = [b - d, p(a.min, b - d)];
                if (e) d[2] = this.dataMin;
                b = Da(d);
                c = [b + j, p(a.max, b + j)];
                if (e) c[2] = this.dataMax;
                c = Qa(c);
                c - b < j && (d[0] = c - j, d[1] = p(a.min, c - j), b = Da(d))
            }
            this.min = b;
            this.max = c
        },
        setAxisTranslation: function (a) {
            var b = this, c = b.max - b.min, d = b.axisPointRange || 0, e, f = 0, g = 0, h = b.linkedParent, i = !!b.categories, k = b.transA, j = b.isXAxis;
            if (j || i || d) if (h ? (f = h.minPointOffset, g = h.pointRangePadding) : (o(b.series, function (a) {
                    var b = a.closestPointRange;
                    !a.noSharedTooltip && q(b) && (e = q(e) ? E(e, b) : b)
                }), o(b.series, function (a) {
                    var c = i ? 1 : j ? p(a.options.pointRange,
                        e, 0) : b.axisPointRange || 0, a = a.options.pointPlacement;
                    d = v(d, c);
                    b.single || (f = v(f, Ba(a) ? 0 : c / 2), g = v(g, a === "on" ? 0 : c))
                })), h = b.ordinalSlope && e ? b.ordinalSlope / e : 1, b.minPointOffset = f *= h, b.pointRangePadding = g *= h, b.pointRange = E(d, c), j) b.closestPointRange = e;
            if (a) b.oldTransA = k;
            b.translationSlope = b.transA = k = b.len / (c + g || 1);
            b.transB = b.horiz ? b.left : b.bottom;
            b.minPixelPadding = k * f
        },
        minFromRange: function () {
            return this.max - this.range
        },
        setTickInterval: function (a) {
            var b = this, c = b.chart, d = b.options, e = b.isLog, f = b.isDatetimeAxis,
                g = b.isXAxis, h = b.isLinked, i = d.maxPadding, k = d.minPadding, j = d.tickInterval, l = d.tickPixelInterval, m = b.categories, n = b.threshold, s = b.softThreshold, r, X, z, w;
            !f && !m && !h && this.getTickAmount();
            z = p(b.userMin, d.min);
            w = p(b.userMax, d.max);
            h ? (b.linkedParent = c[b.coll][d.linkedTo], c = b.linkedParent.getExtremes(), b.min = p(c.min, c.dataMin), b.max = p(c.max, c.dataMax), d.type !== b.linkedParent.options.type && Y(11, 1)) : (!s && q(n) && (b.dataMin >= n ? (r = n, k = 0) : b.dataMax <= n && (X = n, i = 0)), b.min = p(z, r, b.dataMin), b.max = p(w, X, b.dataMax));
            if (e) !a &&
            E(b.min, p(b.dataMin, b.min)) <= 0 && Y(10, 1), b.min = ga(Ca(b.min), 15), b.max = ga(Ca(b.max), 15);
            if (b.range && q(b.max)) b.userMin = b.min = z = v(b.min, b.minFromRange()), b.userMax = w = b.max, b.range = null;
            b.beforePadding && b.beforePadding();
            b.adjustForMinRange();
            if (!m && !b.axisPointRange && !b.usePercentage && !h && q(b.min) && q(b.max) && (c = b.max - b.min)) !q(z) && k && (b.min -= c * k), !q(w) && i && (b.max += c * i);
            if (qa(d.floor)) b.min = v(b.min, d.floor);
            if (qa(d.ceiling)) b.max = E(b.max, d.ceiling);
            if (s && q(b.dataMin)) if (n = n || 0, !q(z) && b.min < n && b.dataMin >=
                n) b.min = n; else if (!q(w) && b.max > n && b.dataMax <= n) b.max = n;
            b.tickInterval = b.min === b.max || b.min === void 0 || b.max === void 0 ? 1 : h && !j && l === b.linkedParent.options.tickPixelInterval ? j = b.linkedParent.tickInterval : p(j, this.tickAmount ? (b.max - b.min) / v(this.tickAmount - 1, 1) : void 0, m ? 1 : (b.max - b.min) * l / v(b.len, l));
            g && !a && o(b.series, function (a) {
                a.processData(b.min !== b.oldMin || b.max !== b.oldMax)
            });
            b.setAxisTranslation(!0);
            b.beforeSetTickPositions && b.beforeSetTickPositions();
            if (b.postProcessTickInterval) b.tickInterval = b.postProcessTickInterval(b.tickInterval);
            if (b.pointRange && !j) b.tickInterval = v(b.pointRange, b.tickInterval);
            a = p(d.minTickInterval, b.isDatetimeAxis && b.closestPointRange);
            if (!j && b.tickInterval < a) b.tickInterval = a;
            if (!f && !e && !j) b.tickInterval = sb(b.tickInterval, null, rb(b.tickInterval), p(d.allowDecimals, !(b.tickInterval > 0.5 && b.tickInterval < 5 && b.max > 1E3 && b.max < 9999)), !!this.tickAmount);
            if (!this.tickAmount && this.len) b.tickInterval = b.unsquish();
            this.setTickPositions()
        },
        setTickPositions: function () {
            var a = this.options, b, c = a.tickPositions, d = a.tickPositioner,
                e = a.startOnTick, f = a.endOnTick, g;
            this.tickmarkOffset = this.categories && a.tickmarkPlacement === "between" && this.tickInterval === 1 ? 0.5 : 0;
            this.minorTickInterval = a.minorTickInterval === "auto" && this.tickInterval ? this.tickInterval / 5 : a.minorTickInterval;
            this.tickPositions = b = c && c.slice();
            if (!b && (b = this.isDatetimeAxis ? this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval, a.units), this.min, this.max, a.startOfWeek, this.ordinalPositions, this.closestPointRange, !0) : this.isLog ? this.getLogTickPositions(this.tickInterval,
                    this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max), b.length > this.len && (b = [b[0], b.pop()]), this.tickPositions = b, d && (d = d.apply(this, [this.min, this.max])))) this.tickPositions = b = d;
            if (!this.isLinked) this.trimTicks(b, e, f), this.min === this.max && q(this.min) && !this.tickAmount && (g = !0, this.min -= 0.5, this.max += 0.5), this.single = g, !c && !d && this.adjustTickAmount()
        },
        trimTicks: function (a, b, c) {
            var d = a[0], e = a[a.length - 1], f = this.minPointOffset || 0;
            b ? this.min = d : this.min - f > d && a.shift();
            c ? this.max =
                e : this.max + f < e && a.pop();
            a.length === 0 && q(d) && a.push((e + d) / 2)
        },
        alignToOthers: function () {
            var a = {}, b, c = this.options;
            this.chart.options.chart.alignTicks !== !1 && c.alignTicks !== !1 && o(this.chart[this.coll], function (c) {
                var e = c.options, e = [c.horiz ? e.left : e.top, e.width, e.height, e.pane].join(",");
                c.series.length && (a[e] ? b = !0 : a[e] = 1)
            });
            return b
        },
        getTickAmount: function () {
            var a = this.options, b = a.tickAmount, c = a.tickPixelInterval;
            !q(a.tickInterval) && this.len < c && !this.isRadial && !this.isLog && a.startOnTick && a.endOnTick &&
            (b = 2);
            !b && this.alignToOthers() && (b = ta(this.len / c) + 1);
            if (b < 4) this.finalTickAmt = b, b = 5;
            this.tickAmount = b
        },
        adjustTickAmount: function () {
            var a = this.tickInterval, b = this.tickPositions, c = this.tickAmount, d = this.finalTickAmt, e = b && b.length;
            if (e < c) {
                for (; b.length < c;) b.push(ga(b[b.length - 1] + a));
                this.transA *= (e - 1) / (c - 1);
                this.max = b[b.length - 1]
            } else e > c && (this.tickInterval *= 2, this.setTickPositions());
            if (q(d)) {
                for (a = c = b.length; a--;) (d === 3 && a % 2 === 1 || d <= 2 && a > 0 && a < c - 1) && b.splice(a, 1);
                this.finalTickAmt = x
            }
        },
        setScale: function () {
            var a,
                b;
            this.oldMin = this.min;
            this.oldMax = this.max;
            this.oldAxisLength = this.len;
            this.setAxisSize();
            b = this.len !== this.oldAxisLength;
            o(this.series, function (b) {
                if (b.isDirtyData || b.isDirty || b.xAxis.isDirty) a = !0
            });
            if (b || a || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax || this.alignToOthers()) {
                if (this.resetStacks && this.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, !this.isDirty) this.isDirty =
                    b || this.min !== this.oldMin || this.max !== this.oldMax
            } else this.cleanStacks && this.cleanStacks()
        },
        setExtremes: function (a, b, c, d, e) {
            var f = this, g = f.chart, c = p(c, !0);
            o(f.series, function (a) {
                delete a.kdTree
            });
            e = t(e, {min: a, max: b});
            G(f, "setExtremes", e, function () {
                f.userMin = a;
                f.userMax = b;
                f.eventArgs = e;
                c && g.redraw(d)
            })
        },
        zoom: function (a, b) {
            var c = this.dataMin, d = this.dataMax, e = this.options, f = E(c, p(e.min, c)), e = v(d, p(e.max, d));
            this.allowZoomOutside || (q(c) && a <= f && (a = f), q(d) && b >= e && (b = e));
            this.displayBtn = a !== x || b !== x;
            this.setExtremes(a,
                b, !1, x, {trigger: "zoom"});
            return !0
        },
        setAxisSize: function () {
            var a = this.chart, b = this.options, c = b.offsetLeft || 0, d = this.horiz, e = p(b.width, a.plotWidth - c + (b.offsetRight || 0)), f = p(b.height, a.plotHeight), g = p(b.top, a.plotTop), b = p(b.left, a.plotLeft + c), c = /%$/;
            c.test(f) && (f = parseFloat(f) / 100 * a.plotHeight);
            c.test(g) && (g = parseFloat(g) / 100 * a.plotHeight + a.plotTop);
            this.left = b;
            this.top = g;
            this.width = e;
            this.height = f;
            this.bottom = a.chartHeight - f - g;
            this.right = a.chartWidth - e - b;
            this.len = v(d ? e : f, 0);
            this.pos = d ? b : g
        },
        getExtremes: function () {
            var a =
                this.isLog;
            return {
                min: a ? ga(ka(this.min)) : this.min,
                max: a ? ga(ka(this.max)) : this.max,
                dataMin: this.dataMin,
                dataMax: this.dataMax,
                userMin: this.userMin,
                userMax: this.userMax
            }
        },
        getThreshold: function (a) {
            var b = this.isLog, c = b ? ka(this.min) : this.min, b = b ? ka(this.max) : this.max;
            a === null ? a = b < 0 ? b : c : c > a ? a = c : b < a && (a = b);
            return this.translate(a, 0, 1, 0, 1)
        },
        autoLabelAlign: function (a) {
            a = (p(a, 0) - this.side * 90 + 720) % 360;
            return a > 15 && a < 165 ? "right" : a > 195 && a < 345 ? "left" : "center"
        },
        unsquish: function () {
            var a = this.ticks, b = this.options.labels,
                c = this.horiz, d = this.tickInterval, e = d, f = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / d), g, h = b.rotation, i = this.chart.renderer.fontMetrics(b.style.fontSize, a[0] && a[0].label), k, j = Number.MAX_VALUE, l, m = function (a) {
                    a /= f || 1;
                    a = a > 1 ? ta(a) : 1;
                    return a * d
                };
            c ? (l = !b.staggerLines && !b.step && (q(h) ? [h] : f < p(b.autoRotationLimit, 80) && b.autoRotation)) && o(l, function (a) {
                var b;
                if (a === h || a && a >= -90 && a <= 90) k = m(P(i.h / aa(ha * a))), b = k + P(a / 360), b < j && (j = b, g = a, e = k)
            }) : b.step || (e = m(i.h));
            this.autoRotation = l;
            this.labelRotation = p(g,
                h);
            return e
        },
        renderUnsquish: function () {
            var a = this.chart, b = a.renderer, c = this.tickPositions, d = this.ticks, e = this.options.labels, f = this.horiz, g = a.margin, h = this.categories ? c.length : c.length - 1, g = this.slotWidth = f && (e.step || 0) < 2 && !e.rotation && (this.staggerLines || 1) * a.plotWidth / h || !f && (g[3] && g[3] - a.spacing[3] || a.chartWidth * 0.33), i = v(1, y(g - 2 * (e.padding || 5))), k = {}, h = b.fontMetrics(e.style.fontSize, d[0] && d[0].label), j = e.style.textOverflow, l, m = 0, n, s;
            if (!Ba(e.rotation)) k.rotation = e.rotation || 0;
            if (this.autoRotation) o(c,
                function (a) {
                    if ((a = d[a]) && a.labelLength > m) m = a.labelLength
                }), m > i && m > h.h ? k.rotation = this.labelRotation : this.labelRotation = 0; else if (g && (l = {width: i + "px"}, !j)) {
                l.textOverflow = "clip";
                for (n = c.length; !f && n--;) if (s = c[n], i = d[s].label) if (i.styles.textOverflow === "ellipsis" && i.css({textOverflow: "clip"}), i.getBBox().height > this.len / c.length - (h.h - h.f) || d[s].labelLength > g) i.specCss = {textOverflow: "ellipsis"}
            }
            if (k.rotation && (l = {width: (m > a.chartHeight * 0.5 ? a.chartHeight * 0.33 : a.chartHeight) + "px"}, !j)) l.textOverflow = "ellipsis";
            this.labelAlign = k.align = e.align || this.autoLabelAlign(this.labelRotation);
            o(c, function (a) {
                var b = (a = d[a]) && a.label;
                if (b) b.attr(k), l && b.css(B(l, b.specCss)), delete b.specCss, a.rotation = k.rotation
            });
            this.tickRotCorr = b.rotCorr(h.b, this.labelRotation || 0, this.side !== 0)
        },
        hasData: function () {
            return this.hasVisibleSeries || q(this.min) && q(this.max) && !!this.tickPositions
        },
        getOffset: function () {
            var a = this, b = a.chart, c = b.renderer, d = a.options, e = a.tickPositions, f = a.ticks, g = a.horiz, h = a.side, i = b.inverted ? [1, 0, 3, 2][h] : h,
                k, j, l = 0, m, n = 0, s = d.title, r = d.labels, X = 0, z = a.opposite, w = b.axisOffset, b = b.clipOffset, D = [-1, 1, 1, -1][h], u, ca = a.axisParent;
            k = a.hasData();
            a.showAxis = j = k || p(d.showEmpty, !0);
            a.staggerLines = a.horiz && r.staggerLines;
            if (!a.axisGroup) a.gridGroup = c.g("grid").attr({zIndex: d.gridZIndex || 1}).add(ca), a.axisGroup = c.g("axis").attr({zIndex: d.zIndex || 2}).add(ca), a.labelGroup = c.g("axis-labels").attr({zIndex: r.zIndex || 7}).addClass("highcharts-" + a.coll.toLowerCase() + "-labels").add(ca);
            if (k || a.isLinked) {
                if (o(e, function (b) {
                        f[b] ?
                            f[b].addLabel() : f[b] = new Va(a, b)
                    }), a.renderUnsquish(), r.reserveSpace !== !1 && (h === 0 || h === 2 || {
                        1: "left",
                        3: "right"
                    }[h] === a.labelAlign || a.labelAlign === "center") && o(e, function (a) {
                        X = v(f[a].getLabelSize(), X)
                    }), a.staggerLines) X *= a.staggerLines, a.labelOffset = X * (a.opposite ? -1 : 1)
            } else for (u in f) f[u].destroy(), delete f[u];
            if (s && s.text && s.enabled !== !1) {
                if (!a.axisTitle) a.axisTitle = c.text(s.text, 0, 0, s.useHTML).attr({
                    zIndex: 7, rotation: s.rotation || 0, align: s.textAlign || {
                        low: z ? "right" : "left", middle: "center", high: z ? "left" :
                            "right"
                    }[s.align]
                }).addClass("highcharts-" + this.coll.toLowerCase() + "-title").css(s.style).add(a.axisGroup), a.axisTitle.isNew = !0;
                if (j) l = a.axisTitle.getBBox()[g ? "height" : "width"], m = s.offset, n = q(m) ? 0 : p(s.margin, g ? 5 : 10);
                a.axisTitle[j ? "show" : "hide"](!0)
            }
            a.offset = D * p(d.offset, w[h]);
            a.tickRotCorr = a.tickRotCorr || {x: 0, y: 0};
            c = h === 2 ? a.tickRotCorr.y : 0;
            g = Math.abs(X) + n + (X && D * (g ? p(r.y, a.tickRotCorr.y + 8) : r.x) - c);
            a.axisTitleMargin = p(m, g);
            w[h] = v(w[h], a.axisTitleMargin + l + D * a.offset, g);
            d = d.offset ? 0 : S(d.lineWidth / 2) *
            2;
            b[i] = v(b[i], d)
        },
        getLinePath: function (a) {
            var b = this.chart, c = this.opposite, d = this.offset, e = this.horiz, f = this.left + (c ? this.width : 0) + d, d = b.chartHeight - this.bottom - (c ? this.height : 0) + d;
            c && (a *= -1);
            return b.renderer.crispLine(["M", e ? this.left : f, e ? d : this.top, "L", e ? b.chartWidth - this.right : f, e ? d : b.chartHeight - this.bottom], a)
        },
        getTitlePosition: function () {
            var a = this.horiz, b = this.left, c = this.top, d = this.len, e = this.options.title, f = a ? b : c, g = this.opposite, h = this.offset, i = e.x || 0, k = e.y || 0, j = A(e.style.fontSize || 12),
                d = {
                    low: f + (a ? 0 : d),
                    middle: f + d / 2,
                    high: f + (a ? d : 0)
                }[e.align], b = (a ? c + this.height : b) + (a ? 1 : -1) * (g ? -1 : 1) * this.axisTitleMargin + (this.side === 2 ? j : 0);
            return {x: a ? d + i : b + (g ? this.width : 0) + h + i, y: a ? b + k - (g ? this.height : 0) + h : d + k}
        },
        render: function () {
            var a = this, b = a.chart, c = b.renderer, d = a.options, e = a.isLog, f = a.isLinked, g = a.tickPositions, h = a.axisTitle, i = a.ticks, k = a.minorTicks, j = a.alternateBands, l = d.stackLabels, m = d.alternateGridColor, n = a.tickmarkOffset, s = d.lineWidth, r, p = b.hasRendered && q(a.oldMin) && !isNaN(a.oldMin), z = a.showAxis,
                w = c.globalAnimation, D, v;
            a.labelEdge.length = 0;
            a.overlap = !1;
            o([i, k, j], function (a) {
                for (var b in a) a[b].isActive = !1
            });
            if (a.hasData() || f) {
                a.minorTickInterval && !a.categories && o(a.getMinorTickPositions(), function (b) {
                    k[b] || (k[b] = new Va(a, b, "minor"));
                    p && k[b].isNew && k[b].render(null, !0);
                    k[b].render(null, !1, 1)
                });
                if (g.length && (o(g, function (b, c) {
                        if (!f || b >= a.min && b <= a.max) i[b] || (i[b] = new Va(a, b)), p && i[b].isNew && i[b].render(c, !0, 0.1), i[b].render(c)
                    }), n && (a.min === 0 || a.single))) i[-1] || (i[-1] = new Va(a, -1, null, !0)),
                    i[-1].render(-1);
                m && o(g, function (c, d) {
                    v = g[d + 1] !== x ? g[d + 1] + n : a.max - n;
                    if (d % 2 === 0 && c < a.max && v <= a.max + (b.polar ? -n : n)) j[c] || (j[c] = new u.PlotLineOrBand(a)), D = c + n, j[c].options = {
                        from: e ? ka(D) : D,
                        to: e ? ka(v) : v,
                        color: m
                    }, j[c].render(), j[c].isActive = !0
                });
                if (!a._addedPlotLB) o((d.plotLines || []).concat(d.plotBands || []), function (b) {
                    a.addPlotBandOrLine(b)
                }), a._addedPlotLB = !0
            }
            o([i, k, j], function (a) {
                var c, d, e = [], f = w ? w.duration || 500 : 0;
                for (c in a) if (!a[c].isActive) a[c].render(c, !1, 0), a[c].isActive = !1, e.push(c);
                Oa(function () {
                    for (d =
                             e.length; d--;) a[e[d]] && !a[e[d]].isActive && (a[e[d]].destroy(), delete a[e[d]])
                }, a === j || !b.hasRendered || !f ? 0 : f)
            });
            if (s) r = a.getLinePath(s), a.axisLine ? a.axisLine.animate({d: r}) : a.axisLine = c.path(r).attr({
                stroke: d.lineColor,
                "stroke-width": s,
                zIndex: 7
            }).add(a.axisGroup), a.axisLine[z ? "show" : "hide"](!0);
            if (h && z) h[h.isNew ? "attr" : "animate"](a.getTitlePosition()), h.isNew = !1;
            l && l.enabled && a.renderStackTotals();
            a.isDirty = !1
        },
        redraw: function () {
            this.visible && (this.render(), o(this.plotLinesAndBands, function (a) {
                a.render()
            }));
            o(this.series, function (a) {
                a.isDirty = !0
            })
        },
        destroy: function (a) {
            var b = this, c = b.stacks, d, e = b.plotLinesAndBands;
            a || W(b);
            for (d in c) Ra(c[d]), c[d] = null;
            o([b.ticks, b.minorTicks, b.alternateBands], function (a) {
                Ra(a)
            });
            for (a = e.length; a--;) e[a].destroy();
            o("stackTotalGroup,axisLine,axisTitle,axisGroup,cross,gridGroup,labelGroup".split(","), function (a) {
                b[a] && (b[a] = b[a].destroy())
            });
            this.cross && this.cross.destroy()
        },
        drawCrosshair: function (a, b) {
            var c, d = this.crosshair, e, f;
            if (!this.crosshair || (q(b) || !p(d.snap, !0)) === !1 || b && b.series && b.series[this.coll] !== this) this.hideCrosshair(); else if (p(d.snap, !0) ? q(b) && (c = this.isXAxis ? b.plotX : this.len - b.plotY) : c = this.horiz ? a.chartX - this.pos : this.len - a.chartY + this.pos, c = this.isRadial ? this.getPlotLinePath(this.isXAxis ? b.x : p(b.stackY, b.y)) || null : this.getPlotLinePath(null, null, null, null, c) || null, c === null) this.hideCrosshair(); else if (e = this.categories && !this.isRadial, f = p(d.width, e ? this.transA : 1), this.cross) this.cross.attr({
                d: c,
                visibility: "visible",
                "stroke-width": f
            }); else {
                e = {
                    "stroke-width": f,
                    stroke: d.color || (e ? "rgba(155,200,255,0.2)" : "#C0C0C0"), zIndex: p(d.zIndex, 2)
                };
                if (d.dashStyle) e.dashstyle = d.dashStyle;
                this.cross = this.chart.renderer.path(c).attr(e).add()
            }
        },
        hideCrosshair: function () {
            this.cross && this.cross.hide()
        }
    };
    t(ja.prototype, {
        getPlotBandPath: function (a, b) {
            var c = this.getPlotLinePath(b, null, null, !0), d = this.getPlotLinePath(a, null, null, !0);
            d && c ? (d.flat = d.toString() === c.toString(), d.push(c[4], c[5], c[1], c[2])) : d = null;
            return d
        }, addPlotBand: function (a) {
            return this.addPlotBandOrLine(a, "plotBands")
        },
        addPlotLine: function (a) {
            return this.addPlotBandOrLine(a, "plotLines")
        }, addPlotBandOrLine: function (a, b) {
            var c = (new u.PlotLineOrBand(this, a)).render(), d = this.userOptions;
            c && (b && (d[b] = d[b] || [], d[b].push(a)), this.plotLinesAndBands.push(c));
            return c
        }, removePlotBandOrLine: function (a) {
            for (var b = this.plotLinesAndBands, c = this.options, d = this.userOptions, e = b.length; e--;) b[e].id === a && b[e].destroy();
            o([c.plotLines || [], d.plotLines || [], c.plotBands || [], d.plotBands || []], function (b) {
                for (e = b.length; e--;) b[e].id === a &&
                la(b, b[e])
            })
        }
    });
    ja.prototype.getTimeTicks = function (a, b, c, d) {
        var e = [], f = {}, g = L.global.useUTC, h, i = new xa(b - Ya(b)), k = a.unitRange, j = a.count;
        if (q(b)) {
            i[Eb](k >= F.second ? 0 : j * S(i.getMilliseconds() / j));
            if (k >= F.second) i[Fb](k >= F.minute ? 0 : j * S(i.getSeconds() / j));
            if (k >= F.minute) i[Gb](k >= F.hour ? 0 : j * S(i[tb]() / j));
            if (k >= F.hour) i[Hb](k >= F.day ? 0 : j * S(i[ub]() / j));
            if (k >= F.day) i[wb](k >= F.month ? 1 : j * S(i[Za]() / j));
            k >= F.month && (i[xb](k >= F.year ? 0 : j * S(i[$a]() / j)), h = i[ab]());
            k >= F.year && (h -= h % j, i[yb](h));
            if (k === F.week) i[wb](i[Za]() -
            i[vb]() + p(d, 1));
            b = 1;
            if (qb || ib) i = i.getTime(), i = new xa(i + Ya(i));
            h = i[ab]();
            for (var d = i.getTime(), l = i[$a](), m = i[Za](), n = (F.day + (g ? Ya(i) : i.getTimezoneOffset() * 6E4)) % F.day; d < c;) e.push(d), k === F.year ? d = lb(h + b * j, 0) : k === F.month ? d = lb(h, l + b * j) : !g && (k === F.day || k === F.week) ? d = lb(h, l, m + b * j * (k === F.day ? 1 : 7)) : d += k * j, b++;
            e.push(d);
            o(fb(e, function (a) {
                return k <= F.hour && a % F.day === n
            }), function (a) {
                f[a] = "day"
            })
        }
        e.info = t(a, {higherRanks: f, totalRange: k * j});
        return e
    };
    ja.prototype.normalizeTimeTickInterval = function (a, b) {
        var c =
            b || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]], d = c[c.length - 1], e = F[d[0]], f = d[1], g;
        for (g = 0; g < c.length; g++) if (d = c[g], e = F[d[0]], f = d[1], c[g + 1] && a <= (e * f[f.length - 1] + F[c[g + 1][0]]) / 2) break;
        e === F.year && a < 5 * e && (f = [1, 2, 5]);
        c = sb(a / e, f, d[0] === "year" ? v(rb(a / e), 1) : 1);
        return {unitRange: e, count: c, unitName: d[0]}
    };
    ja.prototype.getLogTickPositions = function (a, b, c, d) {
        var e =
            this.options, f = this.len, g = [];
        if (!d) this._minorAutoInterval = null;
        if (a >= 0.5) a = y(a), g = this.getLinearTickPositions(a, b, c); else if (a >= 0.08) for (var f = S(b), h, i, k, j, l, e = a > 0.3 ? [1, 2, 4] : a > 0.15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; f < c + 1 && !l; f++) {
            i = e.length;
            for (h = 0; h < i && !l; h++) k = Ca(ka(f) * e[h]), k > b && (!d || j <= c) && j !== x && g.push(j), j > c && (l = !0), j = k
        } else if (b = ka(b), c = ka(c), a = e[d ? "minorTickInterval" : "tickInterval"], a = p(a === "auto" ? null : a, this._minorAutoInterval, (c - b) * (e.tickPixelInterval / (d ? 5 : 1)) / ((d ? f / this.tickPositions.length :
                f) || 1)), a = sb(a, null, rb(a)), g = Ma(this.getLinearTickPositions(a, b, c), Ca), !d) this._minorAutoInterval = a / 5;
        if (!d) this.tickInterval = a;
        return g
    };
    var Ob = u.Tooltip = function () {
        this.init.apply(this, arguments)
    };
    Ob.prototype = {
        init: function (a, b) {
            var c = b.borderWidth, d = b.style, e = A(d.padding);
            this.chart = a;
            this.options = b;
            this.crosshairs = [];
            this.now = {x: 0, y: 0};
            this.isHidden = !0;
            this.label = a.renderer.label("", 0, 0, b.shape || "callout", null, null, b.useHTML, null, "tooltip").attr({
                padding: e, fill: b.backgroundColor, "stroke-width": c,
                r: b.borderRadius, zIndex: 8
            }).css(d).css({padding: 0}).add().attr({y: -9999});
            ia || this.label.shadow(b.shadow);
            this.shared = b.shared
        }, destroy: function () {
            if (this.label) this.label = this.label.destroy();
            clearTimeout(this.hideTimer);
            clearTimeout(this.tooltipTimeout)
        }, move: function (a, b, c, d) {
            var e = this, f = e.now, g = e.options.animation !== !1 && !e.isHidden && (P(a - f.x) > 1 || P(b - f.y) > 1), h = e.followPointer || e.len > 1;
            t(f, {
                x: g ? (2 * f.x + a) / 3 : a,
                y: g ? (f.y + b) / 2 : b,
                anchorX: h ? x : g ? (2 * f.anchorX + c) / 3 : c,
                anchorY: h ? x : g ? (f.anchorY + d) / 2 : d
            });
            e.label.attr(f);
            if (g) clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function () {
                e && e.move(a, b, c, d)
            }, 32)
        }, hide: function (a) {
            var b = this;
            clearTimeout(this.hideTimer);
            a = p(a, this.options.hideDelay, 500);
            if (!this.isHidden) this.hideTimer = Oa(function () {
                b.label[a ? "fadeOut" : "hide"]();
                b.isHidden = !0
            }, a)
        }, getAnchor: function (a, b) {
            var c, d = this.chart, e = d.inverted, f = d.plotTop, g = d.plotLeft, h = 0, i = 0, k, j, a = ra(a);
            c = a[0].tooltipPos;
            this.followPointer && b && (b.chartX === x && (b = d.pointer.normalize(b)), c = [b.chartX - d.plotLeft, b.chartY -
            f]);
            c || (o(a, function (a) {
                k = a.series.yAxis;
                j = a.series.xAxis;
                h += a.plotX + (!e && j ? j.left - g : 0);
                i += (a.plotLow ? (a.plotLow + a.plotHigh) / 2 : a.plotY) + (!e && k ? k.top - f : 0)
            }), h /= a.length, i /= a.length, c = [e ? d.plotWidth - i : h, this.shared && !e && a.length > 1 && b ? b.chartY - f : e ? d.plotHeight - h : i]);
            return Ma(c, y)
        }, getPosition: function (a, b, c) {
            var d = this.chart, e = this.distance, f = {}, g = c.h || 0, h, i = ["y", d.chartHeight, b, c.plotY + d.plotTop, d.plotTop, d.plotTop + d.plotHeight], k = ["x", d.chartWidth, a, c.plotX + d.plotLeft, d.plotLeft, d.plotLeft + d.plotWidth],
                j = p(c.ttBelow, d.inverted && !c.negative || !d.inverted && c.negative), l = function (a, b, c, d, h, i) {
                    var k = c < d - e, m = d + e + c < b, l = d - e - c;
                    d += e;
                    if (j && m) f[a] = d; else if (!j && k) f[a] = l; else if (k) f[a] = E(i - c, l - g < 0 ? l : l - g); else if (m) f[a] = v(h, d + g + c > b ? d : d + g); else return !1
                }, m = function (a, b, c, d) {
                    var g;
                    d < e || d > b - e ? g = !1 : f[a] = d < c / 2 ? 1 : d > b - c / 2 ? b - c - 2 : d - c / 2;
                    return g
                }, n = function (a) {
                    var b = i;
                    i = k;
                    k = b;
                    h = a
                }, s = function () {
                    l.apply(0, i) !== !1 ? m.apply(0, k) === !1 && !h && (n(!0), s()) : h ? f.x = f.y = 0 : (n(!0), s())
                };
            (d.inverted || this.len > 1) && n();
            s();
            return f
        }, defaultFormatter: function (a) {
            var b =
                this.points || ra(this), c;
            c = [a.tooltipFooterHeaderFormatter(b[0])];
            c = c.concat(a.bodyFormatter(b));
            c.push(a.tooltipFooterHeaderFormatter(b[0], !0));
            return c.join("")
        }, refresh: function (a, b) {
            var c = this.chart, d = this.label, e = this.options, f, g, h, i = {}, k, j = [];
            k = e.formatter || this.defaultFormatter;
            var i = c.hoverPoints, l, m = this.shared;
            clearTimeout(this.hideTimer);
            this.followPointer = ra(a)[0].series.tooltipOptions.followPointer;
            h = this.getAnchor(a, b);
            f = h[0];
            g = h[1];
            m && (!a.series || !a.series.noSharedTooltip) ? (c.hoverPoints =
                a, i && o(i, function (a) {
                a.setState()
            }), o(a, function (a) {
                a.setState("hover");
                j.push(a.getLabelConfig())
            }), i = {
                x: a[0].category,
                y: a[0].y
            }, i.points = j, this.len = j.length, a = a[0]) : i = a.getLabelConfig();
            k = k.call(i, this);
            i = a.series;
            this.distance = p(i.tooltipOptions.distance, 16);
            k === !1 ? this.hide() : (this.isHidden && (Wa(d), d.attr("opacity", 1).show()), d.attr({text: k}), l = e.borderColor || a.color || i.color || "#606060", d.attr({stroke: l}), this.updatePosition({
                plotX: f,
                plotY: g,
                negative: a.negative,
                ttBelow: a.ttBelow,
                h: h[2] || 0
            }), this.isHidden = !1);
            G(c, "tooltipRefresh", {text: k, x: f + c.plotLeft, y: g + c.plotTop, borderColor: l})
        }, updatePosition: function (a) {
            var b = this.chart, c = this.label, c = (this.options.positioner || this.getPosition).call(this, c.width, c.height, a);
            this.move(y(c.x), y(c.y || 0), a.plotX + b.plotLeft, a.plotY + b.plotTop)
        }, getXDateFormat: function (a, b, c) {
            var d, b = b.dateTimeLabelFormats, e = c && c.closestPointRange, f, g = {
                millisecond: 15,
                second: 12,
                minute: 9,
                hour: 6,
                day: 3
            }, h, i = "millisecond";
            if (e) {
                h = Pa("%m-%d %H:%M:%S.%L", a.x);
                for (f in F) {
                    if (e === F.week && +Pa("%w",
                            a.x) === c.options.startOfWeek && h.substr(6) === "00:00:00.000") {
                        f = "week";
                        break
                    }
                    if (F[f] > e) {
                        f = i;
                        break
                    }
                    if (g[f] && h.substr(g[f]) !== "01-01 00:00:00.000".substr(g[f])) break;
                    f !== "week" && (i = f)
                }
                f && (d = b[f])
            } else d = b.day;
            return d || b.year
        }, tooltipFooterHeaderFormatter: function (a, b) {
            var c = b ? "footer" : "header", d = a.series, e = d.tooltipOptions, f = e.xDateFormat, g = d.xAxis, h = g && g.options.type === "datetime" && qa(a.key), c = e[c + "Format"];
            h && !f && (f = this.getXDateFormat(a, e, g));
            h && f && (c = c.replace("{point.key}", "{point.key:" + f + "}"));
            return Ja(c, {point: a, series: d})
        }, bodyFormatter: function (a) {
            return Ma(a, function (a) {
                var c = a.series.tooltipOptions;
                return (c.pointFormatter || a.point.tooltipFormatter).call(a.point, c.pointFormat)
            })
        }
    };
    var oa;
    cb = C.documentElement.ontouchstart !== x;
    var Xa = u.Pointer = function (a, b) {
        this.init(a, b)
    };
    Xa.prototype = {
        init: function (a, b) {
            var c = b.chart, d = c.events, e = ia ? "" : c.zoomType, c = a.inverted, f;
            this.options = b;
            this.chart = a;
            this.zoomX = f = /x/.test(e);
            this.zoomY = e = /y/.test(e);
            this.zoomHor = f && !c || e && c;
            this.zoomVert = e && !c ||
            f && c;
            this.hasZoom = f || e;
            this.runChartClick = d && !!d.click;
            this.pinchDown = [];
            this.lastValidTouch = {};
            if (u.Tooltip && b.tooltip.enabled) a.tooltip = new Ob(a, b.tooltip), this.followTouchMove = p(b.tooltip.followTouchMove, !0);
            this.setDOMEvents()
        }, normalize: function (a, b) {
            var c, d, a = a || window.event, a = Mb(a);
            if (!a.target) a.target = a.srcElement;
            d = a.touches ? a.touches.length ? a.touches.item(0) : a.changedTouches[0] : a;
            if (!b) this.chartPosition = b = Lb(this.chart.container);
            d.pageX === x ? (c = v(a.x, a.clientX - b.left), d = a.y) : (c = d.pageX -
            b.left, d = d.pageY - b.top);
            return t(a, {chartX: y(c), chartY: y(d)})
        }, getCoordinates: function (a) {
            var b = {xAxis: [], yAxis: []};
            o(this.chart.axes, function (c) {
                b[c.isXAxis ? "xAxis" : "yAxis"].push({axis: c, value: c.toValue(a[c.horiz ? "chartX" : "chartY"])})
            });
            return b
        }, runPointActions: function (a) {
            var b = this.chart, c = b.series, d = b.tooltip, e = d ? d.shared : !1, f = b.hoverPoint, g = b.hoverSeries, h, i = Number.MAX_VALUE, k, j, l, m = [], n, s;
            if (!e && !g) for (h = 0; h < c.length; h++) if (c[h].directTouch || !c[h].options.stickyTracking) c = [];
            g && (e ? g.noSharedTooltip :
                g.directTouch) && f ? n = f : (o(c, function (b) {
                k = b.noSharedTooltip && e;
                j = !e && b.directTouch;
                b.visible && !k && !j && p(b.options.enableMouseTracking, !0) && (s = b.searchPoint(a, !k && b.kdDimensions === 1)) && m.push(s)
            }), o(m, function (a) {
                l = !e && a.series.kdDimensions === 1 ? a.dist : a.distX;
                a && typeof l === "number" && l < i && (i = l, n = a)
            }));
            if (n && (n !== this.prevKDPoint || d && d.isHidden)) {
                if (e && !n.series.noSharedTooltip) {
                    for (h = m.length; h--;) (m[h].clientX !== n.clientX || m[h].series.noSharedTooltip) && m.splice(h, 1);
                    m.length && d && d.refresh(m, a);
                    o(m,
                        function (b) {
                            b.onMouseOver(a, b !== (g && g.directTouch && f || n))
                        })
                } else if (d && d.refresh(n, a), !g || !g.directTouch) n.onMouseOver(a);
                this.prevKDPoint = n
            } else c = g && g.tooltipOptions.followPointer, d && c && !d.isHidden && (c = d.getAnchor([{}], a), d.updatePosition({
                plotX: c[0],
                plotY: c[1]
            }));
            if (!this._onDocumentMouseMove) this._onDocumentMouseMove = function (a) {
                if (V[oa]) V[oa].pointer.onDocumentMouseMove(a)
            }, H(C, "mousemove", this._onDocumentMouseMove);
            o(b.axes, function (b) {
                b.drawCrosshair(a, p(n, f))
            })
        }, reset: function (a, b) {
            var c =
                this.chart, d = c.hoverSeries, e = c.hoverPoint, f = c.hoverPoints, g = c.tooltip, h = g && g.shared ? f : e;
            (a = a && g && h) && o(ra(h), function (b) {
                b.plotX === void 0 && (a = !1)
            });
            if (a) g.refresh(h), e && (e.setState(e.state, !0), o(c.axes, function (a) {
                p(a.options.crosshair && a.options.crosshair.snap, !0) ? a.drawCrosshair(null, e) : a.hideCrosshair()
            })); else {
                if (e) e.onMouseOut();
                f && o(f, function (a) {
                    a.setState()
                });
                if (d) d.onMouseOut();
                g && g.hide(b);
                if (this._onDocumentMouseMove) W(C, "mousemove", this._onDocumentMouseMove), this._onDocumentMouseMove =
                    null;
                o(c.axes, function (a) {
                    a.hideCrosshair()
                });
                this.hoverX = c.hoverPoints = c.hoverPoint = null
            }
        }, scaleGroups: function (a, b) {
            var c = this.chart, d;
            o(c.series, function (e) {
                d = a || e.getPlotBox();
                e.xAxis && e.xAxis.zoomEnabled && (e.group.attr(d), e.markerGroup && (e.markerGroup.attr(d), e.markerGroup.clip(b ? c.clipRect : null)), e.dataLabelsGroup && e.dataLabelsGroup.attr(d))
            });
            c.clipRect.attr(b || c.clipBox)
        }, dragStart: function (a) {
            var b = this.chart;
            b.mouseIsDown = a.type;
            b.cancelClick = !1;
            b.mouseDownX = this.mouseDownX = a.chartX;
            b.mouseDownY =
                this.mouseDownY = a.chartY
        }, drag: function (a) {
            var b = this.chart, c = b.options.chart, d = a.chartX, e = a.chartY, f = this.zoomHor, g = this.zoomVert, h = b.plotLeft, i = b.plotTop, k = b.plotWidth, j = b.plotHeight, l, m = this.selectionMarker, n = this.mouseDownX, s = this.mouseDownY, r = c.panKey && a[c.panKey + "Key"];
            if (!m || !m.touch) if (d < h ? d = h : d > h + k && (d = h + k), e < i ? e = i : e > i + j && (e = i + j), this.hasDragged = Math.sqrt(Math.pow(n - d, 2) + Math.pow(s - e, 2)), this.hasDragged > 10) {
                l = b.isInsidePlot(n - h, s - i);
                if (b.hasCartesianSeries && (this.zoomX || this.zoomY) && l && !r && !m) this.selectionMarker = m = b.renderer.rect(h, i, f ? 1 : k, g ? 1 : j, 0).attr({
                    fill: c.selectionMarkerFill || "rgba(69,114,167,0.25)",
                    zIndex: 7
                }).add();
                m && f && (d -= n, m.attr({width: P(d), x: (d > 0 ? 0 : d) + n}));
                m && g && (d = e - s, m.attr({height: P(d), y: (d > 0 ? 0 : d) + s}));
                l && !m && c.panning && b.pan(a, c.panning)
            }
        }, drop: function (a) {
            var b = this, c = this.chart, d = this.hasPinched;
            if (this.selectionMarker) {
                var e = {
                    xAxis: [],
                    yAxis: [],
                    originalEvent: a.originalEvent || a
                }, f = this.selectionMarker, g = f.attr ? f.attr("x") : f.x, h = f.attr ? f.attr("y") : f.y, i = f.attr ? f.attr("width") :
                    f.width, k = f.attr ? f.attr("height") : f.height, j;
                if (this.hasDragged || d) o(c.axes, function (c) {
                    if (c.zoomEnabled && q(c.min) && (d || b[{xAxis: "zoomX", yAxis: "zoomY"}[c.coll]])) {
                        var f = c.horiz, n = a.type === "touchend" ? c.minPixelPadding : 0, s = c.toValue((f ? g : h) + n), f = c.toValue((f ? g + i : h + k) - n);
                        e[c.coll].push({axis: c, min: E(s, f), max: v(s, f)});
                        j = !0
                    }
                }), j && G(c, "selection", e, function (a) {
                    c.zoom(t(a, d ? {animation: !1} : null))
                });
                this.selectionMarker = this.selectionMarker.destroy();
                d && this.scaleGroups()
            }
            if (c) J(c.container, {cursor: c._cursor}),
                c.cancelClick = this.hasDragged > 10, c.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = []
        }, onContainerMouseDown: function (a) {
            a = this.normalize(a);
            a.preventDefault && a.preventDefault();
            this.dragStart(a)
        }, onDocumentMouseUp: function (a) {
            V[oa] && V[oa].pointer.drop(a)
        }, onDocumentMouseMove: function (a) {
            var b = this.chart, c = this.chartPosition, a = this.normalize(a, c);
            c && !this.inClass(a.target, "highcharts-tracker") && !b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) && this.reset()
        }, onContainerMouseLeave: function () {
            var a =
                V[oa];
            if (a) a.pointer.reset(), a.pointer.chartPosition = null
        }, onContainerMouseMove: function (a) {
            var b = this.chart;
            oa = b.index;
            a = this.normalize(a);
            a.returnValue = !1;
            b.mouseIsDown === "mousedown" && this.drag(a);
            (this.inClass(a.target, "highcharts-tracker") || b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop)) && !b.openMenu && this.runPointActions(a)
        }, inClass: function (a, b) {
            for (var c; a;) {
                if (c = O(a, "class")) {
                    if (c.indexOf(b) !== -1) return !0;
                    if (c.indexOf("highcharts-container") !== -1) return !1
                }
                a = a.parentNode
            }
        }, onTrackerMouseOut: function (a) {
            var b =
                this.chart.hoverSeries, a = a.relatedTarget || a.toElement;
            if (b && !b.options.stickyTracking && !this.inClass(a, "highcharts-tooltip") && !this.inClass(a, "highcharts-series-" + b.index)) b.onMouseOut()
        }, onContainerClick: function (a) {
            var b = this.chart, c = b.hoverPoint, d = b.plotLeft, e = b.plotTop, a = this.normalize(a);
            a.originalEvent = a;
            b.cancelClick || (c && this.inClass(a.target, "highcharts-tracker") ? (G(c.series, "click", t(a, {point: c})), b.hoverPoint && c.firePointEvent("click", a)) : (t(a, this.getCoordinates(a)), b.isInsidePlot(a.chartX -
            d, a.chartY - e) && G(b, "click", a)))
        }, setDOMEvents: function () {
            var a = this, b = a.chart.container;
            b.onmousedown = function (b) {
                a.onContainerMouseDown(b)
            };
            b.onmousemove = function (b) {
                a.onContainerMouseMove(b)
            };
            b.onclick = function (b) {
                a.onContainerClick(b)
            };
            H(b, "mouseleave", a.onContainerMouseLeave);
            db === 1 && H(C, "mouseup", a.onDocumentMouseUp);
            if (cb) b.ontouchstart = function (b) {
                a.onContainerTouchStart(b)
            }, b.ontouchmove = function (b) {
                a.onContainerTouchMove(b)
            }, db === 1 && H(C, "touchend", a.onDocumentTouchEnd)
        }, destroy: function () {
            var a;
            W(this.chart.container, "mouseleave", this.onContainerMouseLeave);
            db || (W(C, "mouseup", this.onDocumentMouseUp), W(C, "touchend", this.onDocumentTouchEnd));
            clearInterval(this.tooltipTimeout);
            for (a in this) this[a] = null
        }
    };
    t(u.Pointer.prototype, {
        pinchTranslate: function (a, b, c, d, e, f) {
            (this.zoomHor || this.pinchHor) && this.pinchTranslateDirection(!0, a, b, c, d, e, f);
            (this.zoomVert || this.pinchVert) && this.pinchTranslateDirection(!1, a, b, c, d, e, f)
        }, pinchTranslateDirection: function (a, b, c, d, e, f, g, h) {
            var i = this.chart, k = a ? "x" :
                "y", j = a ? "X" : "Y", l = "chart" + j, m = a ? "width" : "height", n = i["plot" + (a ? "Left" : "Top")], s, r, p = h || 1, o = i.inverted, w = i.bounds[a ? "h" : "v"], D = b.length === 1, q = b[0][l], v = c[0][l], u = !D && b[1][l], t = !D && c[1][l], y, c = function () {
                !D && P(q - u) > 20 && (p = h || P(v - t) / P(q - u));
                r = (n - v) / p + q;
                s = i["plot" + (a ? "Width" : "Height")] / p
            };
            c();
            b = r;
            b < w.min ? (b = w.min, y = !0) : b + s > w.max && (b = w.max - s, y = !0);
            y ? (v -= 0.8 * (v - g[k][0]), D || (t -= 0.8 * (t - g[k][1])), c()) : g[k] = [v, t];
            o || (f[k] = r - n, f[m] = s);
            f = o ? 1 / p : p;
            e[m] = s;
            e[k] = b;
            d[o ? a ? "scaleY" : "scaleX" : "scale" + j] = p;
            d["translate" +
            j] = f * n + (v - f * q)
        }, pinch: function (a) {
            var b = this, c = b.chart, d = b.pinchDown, e = a.touches, f = e.length, g = b.lastValidTouch, h = b.hasZoom, i = b.selectionMarker, k = {}, j = f === 1 && (b.inClass(a.target, "highcharts-tracker") && c.runTrackerClick || b.runChartClick), l = {};
            if (f > 1) b.initiated = !0;
            h && b.initiated && !j && a.preventDefault();
            Ma(e, function (a) {
                return b.normalize(a)
            });
            if (a.type === "touchstart") o(e, function (a, b) {
                d[b] = {chartX: a.chartX, chartY: a.chartY}
            }), g.x = [d[0].chartX, d[1] && d[1].chartX], g.y = [d[0].chartY, d[1] && d[1].chartY], o(c.axes,
                function (a) {
                    if (a.zoomEnabled) {
                        var b = c.bounds[a.horiz ? "h" : "v"], d = a.minPixelPadding, e = a.toPixels(p(a.options.min, a.dataMin)), f = a.toPixels(p(a.options.max, a.dataMax)), g = E(e, f), e = v(e, f);
                        b.min = E(a.pos, g - d);
                        b.max = v(a.pos + a.len, e + d)
                    }
                }), b.res = !0; else if (d.length) {
                if (!i) b.selectionMarker = i = t({destroy: ua, touch: !0}, c.plotBox);
                b.pinchTranslate(d, e, k, i, l, g);
                b.hasPinched = h;
                b.scaleGroups(k, l);
                if (!h && b.followTouchMove && f === 1) this.runPointActions(b.normalize(a)); else if (b.res) b.res = !1, this.reset(!1, 0)
            }
        }, touch: function (a,
                            b) {
            var c = this.chart;
            oa = c.index;
            a.touches.length === 1 ? (a = this.normalize(a), c.isInsidePlot(a.chartX - c.plotLeft, a.chartY - c.plotTop) && !c.openMenu ? (b && this.runPointActions(a), this.pinch(a)) : b && this.reset()) : a.touches.length === 2 && this.pinch(a)
        }, onContainerTouchStart: function (a) {
            this.touch(a, !0)
        }, onContainerTouchMove: function (a) {
            this.touch(a)
        }, onDocumentTouchEnd: function (a) {
            V[oa] && V[oa].pointer.drop(a)
        }
    });
    if (K.PointerEvent || K.MSPointerEvent) {
        var va = {}, Bb = !!K.PointerEvent, Sb = function () {
            var a, b = [];
            b.item = function (a) {
                return this[a]
            };
            for (a in va) va.hasOwnProperty(a) && b.push({
                pageX: va[a].pageX,
                pageY: va[a].pageY,
                target: va[a].target
            });
            return b
        }, Cb = function (a, b, c, d) {
            a = a.originalEvent || a;
            if ((a.pointerType === "touch" || a.pointerType === a.MSPOINTER_TYPE_TOUCH) && V[oa]) d(a), d = V[oa].pointer, d[b]({
                type: c,
                target: a.currentTarget,
                preventDefault: ua,
                touches: Sb()
            })
        };
        t(Xa.prototype, {
            onContainerPointerDown: function (a) {
                Cb(a, "onContainerTouchStart", "touchstart", function (a) {
                    va[a.pointerId] = {pageX: a.pageX, pageY: a.pageY, target: a.currentTarget}
                })
            }, onContainerPointerMove: function (a) {
                Cb(a,
                    "onContainerTouchMove", "touchmove", function (a) {
                        va[a.pointerId] = {pageX: a.pageX, pageY: a.pageY};
                        if (!va[a.pointerId].target) va[a.pointerId].target = a.currentTarget
                    })
            }, onDocumentPointerUp: function (a) {
                Cb(a, "onDocumentTouchEnd", "touchend", function (a) {
                    delete va[a.pointerId]
                })
            }, batchMSEvents: function (a) {
                a(this.chart.container, Bb ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown);
                a(this.chart.container, Bb ? "pointermove" : "MSPointerMove", this.onContainerPointerMove);
                a(C, Bb ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp)
            }
        });
        Ua(Xa.prototype, "init", function (a, b, c) {
            a.call(this, b, c);
            this.hasZoom && J(b.container, {"-ms-touch-action": "none", "touch-action": "none"})
        });
        Ua(Xa.prototype, "setDOMEvents", function (a) {
            a.apply(this);
            (this.hasZoom || this.followTouchMove) && this.batchMSEvents(H)
        });
        Ua(Xa.prototype, "destroy", function (a) {
            this.batchMSEvents(W);
            a.call(this)
        })
    }
    var pb = u.Legend = function (a, b) {
        this.init(a, b)
    };
    pb.prototype = {
        init: function (a, b) {
            var c = this, d = b.itemStyle, e = b.itemMarginTop || 0;
            this.options = b;
            if (b.enabled) c.itemStyle = d, c.itemHiddenStyle =
                B(d, b.itemHiddenStyle), c.itemMarginTop = e, c.padding = d = p(b.padding, 8), c.initialItemX = d, c.initialItemY = d - 5, c.maxItemWidth = 0, c.chart = a, c.itemHeight = 0, c.symbolWidth = p(b.symbolWidth, 16), c.pages = [], c.render(), H(c.chart, "endResize", function () {
                c.positionCheckboxes()
            })
        }, colorizeItem: function (a, b) {
            var c = this.options, d = a.legendItem, e = a.legendLine, f = a.legendSymbol, g = this.itemHiddenStyle.color, c = b ? c.itemStyle.color : g, h = b ? a.legendColor || a.color || "#CCC" : g, g = a.options && a.options.marker, i = {fill: h}, k;
            d && d.css({
                fill: c,
                color: c
            });
            e && e.attr({stroke: h});
            if (f) {
                if (g && f.isMarker) for (k in i.stroke = h, g = a.convertAttribs(g), g) d = g[k], d !== x && (i[k] = d);
                f.attr(i)
            }
        }, positionItem: function (a) {
            var b = this.options, c = b.symbolPadding, b = !b.rtl, d = a._legendItemPos, e = d[0], d = d[1], f = a.checkbox;
            (a = a.legendGroup) && a.element && a.translate(b ? e : this.legendWidth - e - 2 * c - 4, d);
            if (f) f.x = e, f.y = d
        }, destroyItem: function (a) {
            var b = a.checkbox;
            o(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function (b) {
                a[b] && (a[b] = a[b].destroy())
            });
            b && Sa(a.checkbox)
        },
        destroy: function () {
            var a = this.group, b = this.box;
            if (b) this.box = b.destroy();
            if (a) this.group = a.destroy()
        }, positionCheckboxes: function (a) {
            var b = this.group.alignAttr, c, d = this.clipHeight || this.legendHeight;
            if (b) c = b.translateY, o(this.allItems, function (e) {
                var f = e.checkbox, g;
                f && (g = c + f.y + (a || 0) + 3, J(f, {
                    left: b.translateX + e.checkboxOffset + f.x - 20 + "px",
                    top: g + "px",
                    display: g > c - 6 && g < c + d - 6 ? "" : "none"
                }))
            })
        }, renderTitle: function () {
            var a = this.padding, b = this.options.title, c = 0;
            if (b.text) {
                if (!this.title) this.title = this.chart.renderer.label(b.text,
                    a - 3, a - 4, null, null, null, null, null, "legend-title").attr({zIndex: 1}).css(b.style).add(this.group);
                a = this.title.getBBox();
                c = a.height;
                this.offsetWidth = a.width;
                this.contentGroup.attr({translateY: c})
            }
            this.titleHeight = c
        }, setText: function (a) {
            var b = this.options;
            a.legendItem.attr({text: b.labelFormat ? Ja(b.labelFormat, a) : b.labelFormatter.call(a)})
        }, renderItem: function (a) {
            var b = this.chart, c = b.renderer, d = this.options, e = d.layout === "horizontal", f = this.symbolWidth, g = d.symbolPadding, h = this.itemStyle, i = this.itemHiddenStyle,
                k = this.padding, j = e ? p(d.itemDistance, 20) : 0, l = !d.rtl, m = d.width, n = d.itemMarginBottom || 0, s = this.itemMarginTop, r = this.initialItemX, o = a.legendItem, z = a.series && a.series.drawLegendSymbol ? a.series : a, w = z.options, w = this.createCheckboxForItem && w && w.showCheckbox, q = d.useHTML;
            if (!o) {
                a.legendGroup = c.g("legend-item").attr({zIndex: 1}).add(this.scrollGroup);
                a.legendItem = o = c.text("", l ? f + g : -g, this.baseline || 0, q).css(B(a.visible ? h : i)).attr({
                    align: l ? "left" : "right",
                    zIndex: 2
                }).add(a.legendGroup);
                if (!this.baseline) this.fontMetrics =
                    c.fontMetrics(h.fontSize, o), this.baseline = this.fontMetrics.f + 3 + s, o.attr("y", this.baseline);
                z.drawLegendSymbol(this, a);
                this.setItemEvents && this.setItemEvents(a, o, q, h, i);
                this.colorizeItem(a, a.visible);
                w && this.createCheckboxForItem(a)
            }
            this.setText(a);
            c = o.getBBox();
            f = a.checkboxOffset = d.itemWidth || a.legendItemWidth || f + g + c.width + j + (w ? 20 : 0);
            this.itemHeight = g = y(a.legendItemHeight || c.height);
            if (e && this.itemX - r + f > (m || b.chartWidth - 2 * k - r - d.x)) this.itemX = r, this.itemY += s + this.lastLineHeight + n, this.lastLineHeight =
                0;
            this.maxItemWidth = v(this.maxItemWidth, f);
            this.lastItemY = s + this.itemY + n;
            this.lastLineHeight = v(g, this.lastLineHeight);
            a._legendItemPos = [this.itemX, this.itemY];
            e ? this.itemX += f : (this.itemY += s + g + n, this.lastLineHeight = g);
            this.offsetWidth = m || v((e ? this.itemX - r - j : f) + k, this.offsetWidth)
        }, getAllItems: function () {
            var a = [];
            o(this.chart.series, function (b) {
                var c = b.options;
                if (p(c.showInLegend, !q(c.linkedTo) ? x : !1, !0)) a = a.concat(b.legendItems || (c.legendType === "point" ? b.data : b))
            });
            return a
        }, adjustMargins: function (a,
                                    b) {
            var c = this.chart, d = this.options, e = d.align.charAt(0) + d.verticalAlign.charAt(0) + d.layout.charAt(0);
            this.display && !d.floating && o([/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/], function (f, g) {
                f.test(e) && !q(a[g]) && (c[ob[g]] = v(c[ob[g]], c.legend[(g + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][g] * d[g % 2 ? "x" : "y"] + p(d.margin, 12) + b[g]))
            })
        }, render: function () {
            var a = this, b = a.chart, c = b.renderer, d = a.group, e, f, g, h, i = a.box, k = a.options, j = a.padding, l = k.borderWidth, m = k.backgroundColor;
            a.itemX = a.initialItemX;
            a.itemY = a.initialItemY;
            a.offsetWidth = 0;
            a.lastItemY = 0;
            if (!d) a.group = d = c.g("legend").attr({zIndex: 7}).add(), a.contentGroup = c.g().attr({zIndex: 1}).add(d), a.scrollGroup = c.g().add(a.contentGroup);
            a.renderTitle();
            e = a.getAllItems();
            jb(e, function (a, b) {
                return (a.options && a.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0)
            });
            k.reversed && e.reverse();
            a.allItems = e;
            a.display = f = !!e.length;
            a.lastLineHeight = 0;
            o(e, function (b) {
                a.renderItem(b)
            });
            g = (k.width || a.offsetWidth) + j;
            h = a.lastItemY + a.lastLineHeight +
            a.titleHeight;
            h = a.handleOverflow(h);
            h += j;
            if (l || m) {
                if (i) {
                    if (g > 0 && h > 0) i[i.isNew ? "attr" : "animate"](i.crisp({width: g, height: h})), i.isNew = !1
                } else a.box = i = c.rect(0, 0, g, h, k.borderRadius, l || 0).attr({
                    stroke: k.borderColor,
                    "stroke-width": l || 0,
                    fill: m || "none"
                }).add(d).shadow(k.shadow), i.isNew = !0;
                i[f ? "show" : "hide"]()
            }
            a.legendWidth = g;
            a.legendHeight = h;
            o(e, function (b) {
                a.positionItem(b)
            });
            f && d.align(t({width: g, height: h}, k), !0, "spacingBox");
            b.isResizing || this.positionCheckboxes()
        }, handleOverflow: function (a) {
            var b = this,
                c = this.chart, d = c.renderer, e = this.options, f = e.y, f = c.spacingBox.height + (e.verticalAlign === "top" ? -f : f) - this.padding, g = e.maxHeight, h, i = this.clipRect, k = e.navigation, j = p(k.animation, !0), l = k.arrowSize || 12, m = this.nav, n = this.pages, s = this.padding, r, q = this.allItems, z = function (a) {
                    i.attr({height: a});
                    if (b.contentGroup.div) b.contentGroup.div.style.clip = "rect(" + s + "px,9999px," + (s + a) + "px,0)"
                };
            e.layout === "horizontal" && (f /= 2);
            g && (f = E(f, g));
            n.length = 0;
            if (a > f) {
                this.clipHeight = h = v(f - 20 - this.titleHeight - s, 0);
                this.currentPage =
                    p(this.currentPage, 1);
                this.fullHeight = a;
                o(q, function (a, b) {
                    var c = a._legendItemPos[1], d = y(a.legendItem.getBBox().height), e = n.length;
                    if (!e || c - n[e - 1] > h && (r || c) !== n[e - 1]) n.push(r || c), e++;
                    b === q.length - 1 && c + d - n[e - 1] > h && n.push(c);
                    c !== r && (r = c)
                });
                if (!i) i = b.clipRect = d.clipRect(0, s, 9999, 0), b.contentGroup.clip(i);
                z(h);
                if (!m) this.nav = m = d.g().attr({zIndex: 1}).add(this.group), this.up = d.symbol("triangle", 0, 0, l, l).on("click", function () {
                    b.scroll(-1, j)
                }).add(m), this.pager = d.text("", 15, 10).css(k.style).add(m), this.down =
                    d.symbol("triangle-down", 0, 0, l, l).on("click", function () {
                        b.scroll(1, j)
                    }).add(m);
                b.scroll(0);
                a = f
            } else if (m) z(c.chartHeight), m.hide(), this.scrollGroup.attr({translateY: 1}), this.clipHeight = 0;
            return a
        }, scroll: function (a, b) {
            var c = this.pages, d = c.length, e = this.currentPage + a, f = this.clipHeight, g = this.options.navigation, h = g.activeColor, g = g.inactiveColor, i = this.pager, k = this.padding;
            e > d && (e = d);
            if (e > 0) b !== x && Ta(b, this.chart), this.nav.attr({
                translateX: k,
                translateY: f + this.padding + 7 + this.titleHeight,
                visibility: "visible"
            }),
                this.up.attr({fill: e === 1 ? g : h}).css({cursor: e === 1 ? "default" : "pointer"}), i.attr({text: e + "/" + d}), this.down.attr({
                x: 18 + this.pager.getBBox().width,
                fill: e === d ? g : h
            }).css({cursor: e === d ? "default" : "pointer"}), c = -c[e - 1] + this.initialItemY, this.scrollGroup.animate({translateY: c}), this.currentPage = e, this.positionCheckboxes(c)
        }
    };
    Na = u.LegendSymbolMixin = {
        drawRectangle: function (a, b) {
            var c = a.options.symbolHeight || a.fontMetrics.f;
            b.legendSymbol = this.chart.renderer.rect(0, a.baseline - c + 1, a.symbolWidth, c, a.options.symbolRadius ||
            0).attr({zIndex: 3}).add(b.legendGroup)
        }, drawLineMarker: function (a) {
            var b = this.options, c = b.marker, d;
            d = a.symbolWidth;
            var e = this.chart.renderer, f = this.legendGroup, a = a.baseline - y(a.fontMetrics.b * 0.3), g;
            if (b.lineWidth) {
                g = {"stroke-width": b.lineWidth};
                if (b.dashStyle) g.dashstyle = b.dashStyle;
                this.legendLine = e.path(["M", 0, a, "L", d, a]).attr(g).add(f)
            }
            if (c && c.enabled !== !1) b = c.radius, this.legendSymbol = d = e.symbol(this.symbol, d / 2 - b, a - b, 2 * b, 2 * b).add(f), d.isMarker = !0
        }
    };
    (/Trident\/7\.0/.test(ya) || La) && Ua(pb.prototype,
        "positionItem", function (a, b) {
            var c = this, d = function () {
                b._legendItemPos && a.call(c, b)
            };
            d();
            setTimeout(d)
        });
    Q = u.Chart = function () {
        this.init.apply(this, arguments)
    };
    Q.prototype = {
        callbacks: [], init: function (a, b) {
            var c, d = a.series;
            a.series = null;
            c = B(L, a);
            c.series = a.series = d;
            this.userOptions = a;
            d = c.chart;
            this.margin = this.splashArray("margin", d);
            this.spacing = this.splashArray("spacing", d);
            var e = d.events;
            this.bounds = {h: {}, v: {}};
            this.callback = b;
            this.isResizing = 0;
            this.options = c;
            this.axes = [];
            this.series = [];
            this.hasCartesianSeries =
                d.showAxes;
            var f = this, g;
            f.index = V.length;
            V.push(f);
            db++;
            d.reflow !== !1 && H(f, "load", function () {
                f.initReflow()
            });
            if (e) for (g in e) H(f, g, e[g]);
            f.xAxis = [];
            f.yAxis = [];
            f.animation = ia ? !1 : p(d.animation, !0);
            f.pointCount = f.colorCounter = f.symbolCounter = 0;
            f.firstRender()
        }, initSeries: function (a) {
            var b = this.options.chart;
            (b = N[a.type || b.type || b.defaultSeriesType]) || Y(17, !0);
            b = new b;
            b.init(this, a);
            return b
        }, isInsidePlot: function (a, b, c) {
            var d = c ? b : a, a = c ? a : b;
            return d >= 0 && d <= this.plotWidth && a >= 0 && a <= this.plotHeight
        }, redraw: function (a) {
            var b =
                this.axes, c = this.series, d = this.pointer, e = this.legend, f = this.isDirtyLegend, g, h, i = this.hasCartesianSeries, k = this.isDirtyBox, j = c.length, l = j, m = this.renderer, n = m.isHidden(), p = [];
            Ta(a, this);
            n && this.cloneRenderTo();
            for (this.layOutTitles(); l--;) if (a = c[l], a.options.stacking && (g = !0, a.isDirty)) {
                h = !0;
                break
            }
            if (h) for (l = j; l--;) if (a = c[l], a.options.stacking) a.isDirty = !0;
            o(c, function (a) {
                a.isDirty && a.options.legendType === "point" && (a.updateTotals && a.updateTotals(), f = !0)
            });
            if (f && e.options.enabled) e.render(), this.isDirtyLegend = !1;
            g && this.getStacks();
            if (i && !this.isResizing) this.maxTicks = null, o(b, function (a) {
                a.setScale()
            });
            this.getMargins();
            i && (o(b, function (a) {
                a.isDirty && (k = !0)
            }), o(b, function (a) {
                var b = a.min + "," + a.max;
                if (a.extKey !== b) a.extKey = b, p.push(function () {
                    G(a, "afterSetExtremes", t(a.eventArgs, a.getExtremes()));
                    delete a.eventArgs
                });
                (k || g) && a.redraw()
            }));
            k && this.drawChartBox();
            o(c, function (a) {
                a.isDirty && a.visible && (!a.isCartesian || a.xAxis) && a.redraw()
            });
            d && d.reset(!0);
            m.draw();
            G(this, "redraw");
            n && this.cloneRenderTo(!0);
            o(p, function (a) {
                a.call()
            })
        }, get: function (a) {
            var b = this.axes, c = this.series, d, e;
            for (d = 0; d < b.length; d++) if (b[d].options.id === a) return b[d];
            for (d = 0; d < c.length; d++) if (c[d].options.id === a) return c[d];
            for (d = 0; d < c.length; d++) {
                e = c[d].points || [];
                for (b = 0; b < e.length; b++) if (e[b].id === a) return e[b]
            }
            return null
        }, getAxes: function () {
            var a = this, b = this.options, c = b.xAxis = ra(b.xAxis || {}), b = b.yAxis = ra(b.yAxis || {});
            o(c, function (a, b) {
                a.index = b;
                a.isX = !0
            });
            o(b, function (a, b) {
                a.index = b
            });
            c = c.concat(b);
            o(c, function (b) {
                new ja(a,
                    b)
            })
        }, getSelectedPoints: function () {
            var a = [];
            o(this.series, function (b) {
                a = a.concat(fb(b.points || [], function (a) {
                    return a.selected
                }))
            });
            return a
        }, getSelectedSeries: function () {
            return fb(this.series, function (a) {
                return a.selected
            })
        }, setTitle: function (a, b, c) {
            var g;
            var d = this, e = d.options, f;
            f = e.title = B(e.title, a);
            g = e.subtitle = B(e.subtitle, b), e = g;
            o([["title", a, f], ["subtitle", b, e]], function (a) {
                var b = a[0], c = d[b], e = a[1], a = a[2];
                c && e && (d[b] = c = c.destroy());
                a && a.text && !c && (d[b] = d.renderer.text(a.text, 0, 0, a.useHTML).attr({
                    align: a.align,
                    "class": "highcharts-" + b, zIndex: a.zIndex || 4
                }).css(a.style).add())
            });
            d.layOutTitles(c)
        }, layOutTitles: function (a) {
            var b = 0, c = this.title, d = this.subtitle, e = this.options, f = e.title, e = e.subtitle, g = this.renderer, h = this.spacingBox.width - 44;
            if (c && (c.css({width: (f.width || h) + "px"}).align(t({y: g.fontMetrics(f.style.fontSize, c).b - 3}, f), !1, "spacingBox"), !f.floating && !f.verticalAlign)) b = c.getBBox().height;
            d && (d.css({width: (e.width || h) + "px"}).align(t({y: b + (f.margin - 13) + g.fontMetrics(e.style.fontSize, c).b}, e), !1, "spacingBox"),
            !e.floating && !e.verticalAlign && (b = ta(b + d.getBBox().height)));
            c = this.titleOffset !== b;
            this.titleOffset = b;
            if (!this.isDirtyBox && c) this.isDirtyBox = c, this.hasRendered && p(a, !0) && this.isDirtyBox && this.redraw()
        }, getChartSize: function () {
            var a = this.options.chart, b = a.width, a = a.height, c = this.renderToClone || this.renderTo;
            if (!q(b)) this.containerWidth = eb(c, "width");
            if (!q(a)) this.containerHeight = eb(c, "height");
            this.chartWidth = v(0, b || this.containerWidth || 600);
            this.chartHeight = v(0, p(a, this.containerHeight > 19 ? this.containerHeight :
                400))
        }, cloneRenderTo: function (a) {
            var b = this.renderToClone, c = this.container;
            a ? b && (this.renderTo.appendChild(c), Sa(b), delete this.renderToClone) : (c && c.parentNode === this.renderTo && this.renderTo.removeChild(c), this.renderToClone = b = this.renderTo.cloneNode(0), J(b, {
                position: "absolute",
                top: "-9999px",
                display: "block"
            }), b.style.setProperty && b.style.setProperty("display", "block", "important"), C.body.appendChild(b), c && b.appendChild(c))
        }, getContainer: function () {
            var a, b = this.options, c = b.chart, d, e, f;
            this.renderTo =
                a = c.renderTo;
            f = "highcharts-" + zb++;
            if (Ba(a)) this.renderTo = a = C.getElementById(a);
            a || Y(13, !0);
            d = A(O(a, "data-highcharts-chart"));
            !isNaN(d) && V[d] && V[d].hasRendered && V[d].destroy();
            O(a, "data-highcharts-chart", this.index);
            a.innerHTML = "";
            !c.skipClone && !a.offsetWidth && this.cloneRenderTo();
            this.getChartSize();
            d = this.chartWidth;
            e = this.chartHeight;
            this.container = a = $(Ka, {
                className: "highcharts-container" + (c.className ? " " + c.className : ""),
                id: f
            }, t({
                position: "relative", overflow: "hidden", width: d + "px", height: e + "px",
                textAlign: "left", lineHeight: "normal", zIndex: 0, "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
            }, c.style), this.renderToClone || a);
            this._cursor = a.style.cursor;
            this.renderer = new (u[c.renderer] || bb)(a, d, e, c.style, c.forExport, b.exporting && b.exporting.allowHTML);
            ia && this.renderer.create(this, a, d, e);
            this.renderer.chartIndex = this.index
        }, getMargins: function (a) {
            var b = this.spacing, c = this.margin, d = this.titleOffset;
            this.resetMargins();
            if (d && !q(c[0])) this.plotTop = v(this.plotTop, d + this.options.title.margin + b[0]);
            this.legend.adjustMargins(c,
                b);
            this.extraBottomMargin && (this.marginBottom += this.extraBottomMargin);
            this.extraTopMargin && (this.plotTop += this.extraTopMargin);
            a || this.getAxisMargins()
        }, getAxisMargins: function () {
            var a = this, b = a.axisOffset = [0, 0, 0, 0], c = a.margin;
            a.hasCartesianSeries && o(a.axes, function (a) {
                a.visible && a.getOffset()
            });
            o(ob, function (d, e) {
                q(c[e]) || (a[d] += b[e])
            });
            a.setChartSize()
        }, reflow: function (a) {
            var b = this, c = b.options.chart, d = b.renderTo, e = c.width || eb(d, "width"), f = c.height || eb(d, "height"), c = a ? a.target : K;
            if (!b.hasUserSize && !b.isPrinting && e && f && (c === K || c === C)) {
                if (e !== b.containerWidth || f !== b.containerHeight) clearTimeout(b.reflowTimeout), b.reflowTimeout = Oa(function () {
                    if (b.container) b.setSize(e, f, !1), b.hasUserSize = null
                }, a ? 100 : 0);
                b.containerWidth = e;
                b.containerHeight = f
            }
        }, initReflow: function () {
            var a = this, b = function (b) {
                a.reflow(b)
            };
            H(K, "resize", b);
            H(a, "destroy", function () {
                W(K, "resize", b)
            })
        }, setSize: function (a, b, c) {
            var d = this, e, f, g = d.renderer;
            d.isResizing += 1;
            Ta(c, d);
            d.oldChartHeight = d.chartHeight;
            d.oldChartWidth = d.chartWidth;
            if (q(a)) d.chartWidth = e = v(0, y(a)), d.hasUserSize = !!e;
            if (q(b)) d.chartHeight = f = v(0, y(b));
            a = g.globalAnimation;
            (a ? gb : J)(d.container, {width: e + "px", height: f + "px"}, a);
            d.setChartSize(!0);
            g.setSize(e, f, c);
            d.maxTicks = null;
            o(d.axes, function (a) {
                a.isDirty = !0;
                a.setScale()
            });
            o(d.series, function (a) {
                a.isDirty = !0
            });
            d.isDirtyLegend = !0;
            d.isDirtyBox = !0;
            d.layOutTitles();
            d.getMargins();
            d.redraw(c);
            d.oldChartHeight = null;
            G(d, "resize");
            a = g.globalAnimation;
            Oa(function () {
                d && G(d, "endResize", null, function () {
                    d.isResizing -= 1
                })
            }, a === !1 ? 0 : a && a.duration || 500)
        }, setChartSize: function (a) {
            var b = this.inverted, c = this.renderer, d = this.chartWidth, e = this.chartHeight, f = this.options.chart, g = this.spacing, h = this.clipOffset, i, k, j, l;
            this.plotLeft = i = y(this.plotLeft);
            this.plotTop = k = y(this.plotTop);
            this.plotWidth = j = v(0, y(d - i - this.marginRight));
            this.plotHeight = l = v(0, y(e - k - this.marginBottom));
            this.plotSizeX = b ? l : j;
            this.plotSizeY = b ? j : l;
            this.plotBorderWidth = f.plotBorderWidth || 0;
            this.spacingBox = c.spacingBox = {
                x: g[3], y: g[0], width: d - g[3] - g[1], height: e - g[0] -
                g[2]
            };
            this.plotBox = c.plotBox = {x: i, y: k, width: j, height: l};
            d = 2 * S(this.plotBorderWidth / 2);
            b = ta(v(d, h[3]) / 2);
            c = ta(v(d, h[0]) / 2);
            this.clipBox = {
                x: b,
                y: c,
                width: S(this.plotSizeX - v(d, h[1]) / 2 - b),
                height: v(0, S(this.plotSizeY - v(d, h[2]) / 2 - c))
            };
            a || o(this.axes, function (a) {
                a.setAxisSize();
                a.setAxisTranslation()
            })
        }, resetMargins: function () {
            var a = this;
            o(ob, function (b, c) {
                a[b] = p(a.margin[c], a.spacing[c])
            });
            a.axisOffset = [0, 0, 0, 0];
            a.clipOffset = [0, 0, 0, 0]
        }, drawChartBox: function () {
            var a = this.options.chart, b = this.renderer, c = this.chartWidth,
                d = this.chartHeight, e = this.chartBackground, f = this.plotBackground, g = this.plotBorder, h = this.plotBGImage, i = a.borderWidth || 0, k = a.backgroundColor, j = a.plotBackgroundColor, l = a.plotBackgroundImage, m = a.plotBorderWidth || 0, n, p = this.plotLeft, o = this.plotTop, q = this.plotWidth, z = this.plotHeight, w = this.plotBox, v = this.clipRect, u = this.clipBox;
            n = i + (a.shadow ? 8 : 0);
            if (i || k) if (e) e.animate(e.crisp({width: c - n, height: d - n})); else {
                e = {fill: k || "none"};
                if (i) e.stroke = a.borderColor, e["stroke-width"] = i;
                this.chartBackground = b.rect(n /
                2, n / 2, c - n, d - n, a.borderRadius, i).attr(e).addClass("highcharts-background").add().shadow(a.shadow)
            }
            if (j) f ? f.animate(w) : this.plotBackground = b.rect(p, o, q, z, 0).attr({fill: j}).add().shadow(a.plotShadow);
            if (l) h ? h.animate(w) : this.plotBGImage = b.image(l, p, o, q, z).add();
            v ? v.animate({width: u.width, height: u.height}) : this.clipRect = b.clipRect(u);
            if (m) g ? g.animate(g.crisp({
                x: p,
                y: o,
                width: q,
                height: z,
                strokeWidth: -m
            })) : this.plotBorder = b.rect(p, o, q, z, 0, -m).attr({
                stroke: a.plotBorderColor,
                "stroke-width": m,
                fill: "none",
                zIndex: 1
            }).add();
            this.isDirtyBox = !1
        }, propFromSeries: function () {
            var a = this, b = a.options.chart, c, d = a.options.series, e, f;
            o(["inverted", "angular", "polar"], function (g) {
                c = N[b.type || b.defaultSeriesType];
                f = a[g] || b[g] || c && c.prototype[g];
                for (e = d && d.length; !f && e--;) (c = N[d[e].type]) && c.prototype[g] && (f = !0);
                a[g] = f
            })
        }, linkSeries: function () {
            var a = this, b = a.series;
            o(b, function (a) {
                a.linkedSeries.length = 0
            });
            o(b, function (b) {
                var d = b.options.linkedTo;
                if (Ba(d) && (d = d === ":previous" ? a.series[b.index - 1] : a.get(d))) d.linkedSeries.push(b), b.linkedParent =
                    d, b.visible = p(b.options.visible, d.options.visible, b.visible)
            })
        }, renderSeries: function () {
            o(this.series, function (a) {
                a.translate();
                a.render()
            })
        }, renderLabels: function () {
            var a = this, b = a.options.labels;
            b.items && o(b.items, function (c) {
                var d = t(b.style, c.style), e = A(d.left) + a.plotLeft, f = A(d.top) + a.plotTop + 12;
                delete d.left;
                delete d.top;
                a.renderer.text(c.html, e, f).attr({zIndex: 2}).css(d).add()
            })
        }, render: function () {
            var a = this.axes, b = this.renderer, c = this.options, d, e, f, g;
            this.setTitle();
            this.legend = new pb(this, c.legend);
            this.getStacks && this.getStacks();
            this.getMargins(!0);
            this.setChartSize();
            d = this.plotWidth;
            e = this.plotHeight -= 21;
            o(a, function (a) {
                a.setScale()
            });
            this.getAxisMargins();
            f = d / this.plotWidth > 1.1;
            g = e / this.plotHeight > 1.05;
            if (f || g) this.maxTicks = null, o(a, function (a) {
                (a.horiz && f || !a.horiz && g) && a.setTickInterval(!0)
            }), this.getMargins();
            this.drawChartBox();
            this.hasCartesianSeries && o(a, function (a) {
                a.visible && a.render()
            });
            if (!this.seriesGroup) this.seriesGroup = b.g("series-group").attr({zIndex: 3}).add();
            this.renderSeries();
            this.renderLabels();
            this.showCredits(c.credits);
            this.hasRendered = !0
        }, showCredits: function (a) {
            if (a.enabled && !this.credits) this.credits = this.renderer.text(a.text, 0, 0).on("click", function () {
                if (a.href) location.href = a.href
            }).attr({align: a.position.align, zIndex: 8}).css(a.style).add().align(a.position)
        }, destroy: function () {
            var a = this, b = a.axes, c = a.series, d = a.container, e, f = d && d.parentNode;
            G(a, "destroy");
            V[a.index] = x;
            db--;
            a.renderTo.removeAttribute("data-highcharts-chart");
            W(a);
            for (e = b.length; e--;) b[e] = b[e].destroy();
            for (e = c.length; e--;) c[e] = c[e].destroy();
            o("title,subtitle,chartBackground,plotBackground,plotBGImage,plotBorder,seriesGroup,clipRect,credits,pointer,scroller,rangeSelector,legend,resetZoomButton,tooltip,renderer".split(","), function (b) {
                var c = a[b];
                c && c.destroy && (a[b] = c.destroy())
            });
            if (d) d.innerHTML = "", W(d), f && Sa(d);
            for (e in a) delete a[e]
        }, isReadyToRender: function () {
            var a = this;
            return !Z && K == K.top && C.readyState !== "complete" || ia && !K.canvg ? (ia ? Nb.push(function () {
                a.firstRender()
            }, a.options.global.canvasToolsURL) :
                C.attachEvent("onreadystatechange", function () {
                    C.detachEvent("onreadystatechange", a.firstRender);
                    C.readyState === "complete" && a.firstRender()
                }), !1) : !0
        }, firstRender: function () {
            var a = this, b = a.options, c = a.callback;
            if (a.isReadyToRender()) {
                a.getContainer();
                G(a, "init");
                a.resetMargins();
                a.setChartSize();
                a.propFromSeries();
                a.getAxes();
                o(b.series || [], function (b) {
                    a.initSeries(b)
                });
                a.linkSeries();
                G(a, "beforeRender");
                if (u.Pointer) a.pointer = new Xa(a, b);
                a.render();
                a.renderer.draw();
                c && c.apply(a, [a]);
                o(a.callbacks,
                    function (b) {
                        a.index !== x && b.apply(a, [a])
                    });
                G(a, "load");
                a.cloneRenderTo(!0)
            }
        }, splashArray: function (a, b) {
            var c = b[a], c = da(c) ? c : [c, c, c, c];
            return [p(b[a + "Top"], c[0]), p(b[a + "Right"], c[1]), p(b[a + "Bottom"], c[2]), p(b[a + "Left"], c[3])]
        }
    };
    var Tb = u.CenteredSeriesMixin = {
        getCenter: function () {
            var a = this.options, b = this.chart, c = 2 * (a.slicedOffset || 0), d = b.plotWidth - 2 * c, b = b.plotHeight - 2 * c, e = a.center, e = [p(e[0], "50%"), p(e[1], "50%"), a.size || "100%", a.innerSize || 0], f = E(d, b), g, h;
            for (g = 0; g < 4; ++g) h = e[g], a = g < 2 || g === 2 && /%$/.test(h),
                e[g] = (/%$/.test(h) ? [d, b, f, e[2]][g] * parseFloat(h) / 100 : parseFloat(h)) + (a ? c : 0);
            e[3] > e[2] && (e[3] = e[2]);
            return e
        }
    }, Ga = function () {
    };
    Ga.prototype = {
        init: function (a, b, c) {
            this.series = a;
            this.color = a.color;
            this.applyOptions(b, c);
            this.pointAttr = {};
            if (a.options.colorByPoint && (b = a.options.colors || a.chart.options.colors, this.color = this.color || b[a.colorCounter++], a.colorCounter === b.length)) a.colorCounter = 0;
            a.chart.pointCount++;
            return this
        }, applyOptions: function (a, b) {
            var c = this.series, d = c.options.pointValKey || c.pointValKey,
                a = Ga.prototype.optionsToObject.call(this, a);
            t(this, a);
            this.options = this.options ? t(this.options, a) : a;
            if (d) this.y = this[d];
            if (this.x === x && c) this.x = b === x ? c.autoIncrement() : b;
            return this
        }, optionsToObject: function (a) {
            var b = {}, c = this.series, d = c.options.keys, e = d || c.pointArrayMap || ["y"], f = e.length, g = 0, h = 0;
            if (typeof a === "number" || a === null) b[e[0]] = a; else if (Ha(a)) {
                if (!d && a.length > f) {
                    c = typeof a[0];
                    if (c === "string") b.name = a[0]; else if (c === "number") b.x = a[0];
                    g++
                }
                for (; h < f;) {
                    if (!d || a[g] !== void 0) b[e[h]] = a[g];
                    g++;
                    h++
                }
            } else if (typeof a ===
                "object") {
                b = a;
                if (a.dataLabels) c._hasPointLabels = !0;
                if (a.marker) c._hasPointMarkers = !0
            }
            return b
        }, destroy: function () {
            var a = this.series.chart, b = a.hoverPoints, c;
            a.pointCount--;
            if (b && (this.setState(), la(b, this), !b.length)) a.hoverPoints = null;
            if (this === a.hoverPoint) this.onMouseOut();
            if (this.graphic || this.dataLabel) W(this), this.destroyElements();
            this.legendItem && a.legend.destroyItem(this);
            for (c in this) this[c] = null
        }, destroyElements: function () {
            for (var a = ["graphic", "dataLabel", "dataLabelUpper", "connector", "shadowGroup"],
                     b, c = 6; c--;) b = a[c], this[b] && (this[b] = this[b].destroy())
        }, getLabelConfig: function () {
            return {
                x: this.category,
                y: this.y,
                color: this.color,
                key: this.name || this.category,
                series: this.series,
                point: this,
                percentage: this.percentage,
                total: this.total || this.stackTotal
            }
        }, tooltipFormatter: function (a) {
            var b = this.series, c = b.tooltipOptions, d = p(c.valueDecimals, ""), e = c.valuePrefix || "", f = c.valueSuffix || "";
            o(b.pointArrayMap || ["y"], function (b) {
                b = "{point." + b;
                if (e || f) a = a.replace(b + "}", e + b + "}" + f);
                a = a.replace(b + "}", b + ":,." + d + "f}")
            });
            return Ja(a, {point: this, series: this.series})
        }, firePointEvent: function (a, b, c) {
            var d = this, e = this.series.options;
            (e.point.events[a] || d.options && d.options.events && d.options.events[a]) && this.importEvents();
            a === "click" && e.allowPointSelect && (c = function (a) {
                d.select && d.select(null, a.ctrlKey || a.metaKey || a.shiftKey)
            });
            G(this, a, b, c)
        }, visible: !0
    };
    var R = u.Series = function () {
    };
    R.prototype = {
        isCartesian: !0,
        type: "line",
        pointClass: Ga,
        sorted: !0,
        requireSorting: !0,
        pointAttrToOptions: {
            stroke: "lineColor", "stroke-width": "lineWidth",
            fill: "fillColor", r: "radius"
        },
        directTouch: !1,
        axisTypes: ["xAxis", "yAxis"],
        colorCounter: 0,
        parallelArrays: ["x", "y"],
        init: function (a, b) {
            var c = this, d, e, f = a.series, g = function (a, b) {
                return p(a.options.index, a._i) - p(b.options.index, b._i)
            };
            c.chart = a;
            c.options = b = c.setOptions(b);
            c.linkedSeries = [];
            c.bindAxes();
            t(c, {name: b.name, state: "", pointAttr: {}, visible: b.visible !== !1, selected: b.selected === !0});
            if (ia) b.animation = !1;
            e = b.events;
            for (d in e) H(c, d, e[d]);
            if (e && e.click || b.point && b.point.events && b.point.events.click ||
                b.allowPointSelect) a.runTrackerClick = !0;
            c.getColor();
            c.getSymbol();
            o(c.parallelArrays, function (a) {
                c[a + "Data"] = []
            });
            c.setData(b.data, !1);
            if (c.isCartesian) a.hasCartesianSeries = !0;
            f.push(c);
            c._i = f.length - 1;
            jb(f, g);
            this.yAxis && jb(this.yAxis.series, g);
            o(f, function (a, b) {
                a.index = b;
                a.name = a.name || "Series " + (b + 1)
            })
        },
        bindAxes: function () {
            var a = this, b = a.options, c = a.chart, d;
            o(a.axisTypes || [], function (e) {
                o(c[e], function (c) {
                    d = c.options;
                    if (b[e] === d.index || b[e] !== x && b[e] === d.id || b[e] === x && d.index === 0) c.series.push(a),
                        a[e] = c, c.isDirty = !0
                });
                !a[e] && a.optionalAxis !== e && Y(18, !0)
            })
        },
        updateParallelArrays: function (a, b) {
            var c = a.series, d = arguments;
            o(c.parallelArrays, typeof b === "number" ? function (d) {
                var f = d === "y" && c.toYData ? c.toYData(a) : a[d];
                c[d + "Data"][b] = f
            } : function (a) {
                Array.prototype[b].apply(c[a + "Data"], Array.prototype.slice.call(d, 2))
            })
        },
        autoIncrement: function () {
            var a = this.options, b = this.xIncrement, c, d = a.pointIntervalUnit, b = p(b, a.pointStart, 0);
            this.pointInterval = c = p(this.pointInterval, a.pointInterval, 1);
            if (d === "month" ||
                d === "year") a = new xa(b), a = d === "month" ? +a[xb](a[$a]() + c) : +a[yb](a[ab]() + c), c = a - b;
            this.xIncrement = b + c;
            return b
        },
        getSegments: function () {
            var a = -1, b = [], c, d = this.points, e = d.length;
            if (e) if (this.options.connectNulls) {
                for (c = e; c--;) d[c].y === null && d.splice(c, 1);
                d.length && (b = [d])
            } else o(d, function (c, g) {
                c.y === null ? (g > a + 1 && b.push(d.slice(a + 1, g)), a = g) : g === e - 1 && b.push(d.slice(a + 1, g + 1))
            });
            this.segments = b
        },
        setOptions: function (a) {
            var b = this.chart, c = b.options.plotOptions, b = b.userOptions || {}, d = b.plotOptions || {}, e = c[this.type];
            this.userOptions = a;
            c = B(e, c.series, a);
            this.tooltipOptions = B(L.tooltip, L.plotOptions[this.type].tooltip, b.tooltip, d.series && d.series.tooltip, d[this.type] && d[this.type].tooltip, a.tooltip);
            e.marker === null && delete c.marker;
            this.zoneAxis = c.zoneAxis;
            a = this.zones = (c.zones || []).slice();
            if ((c.negativeColor || c.negativeFillColor) && !c.zones) a.push({
                value: c[this.zoneAxis + "Threshold"] || c.threshold || 0,
                color: c.negativeColor,
                fillColor: c.negativeFillColor
            });
            a.length && q(a[a.length - 1].value) && a.push({
                color: this.color,
                fillColor: this.fillColor
            });
            return c
        },
        getCyclic: function (a, b, c) {
            var d = this.userOptions, e = "_" + a + "Index", f = a + "Counter";
            b || (q(d[e]) ? b = d[e] : (d[e] = b = this.chart[f] % c.length, this.chart[f] += 1), b = c[b]);
            this[a] = b
        },
        getColor: function () {
            this.options.colorByPoint ? this.options.color = null : this.getCyclic("color", this.options.color || ba[this.type].color, this.chart.options.colors)
        },
        getSymbol: function () {
            var a = this.options.marker;
            this.getCyclic("symbol", a.symbol, this.chart.options.symbols);
            if (/^url/.test(this.symbol)) a.radius =
                0
        },
        drawLegendSymbol: Na.drawLineMarker,
        setData: function (a, b, c, d) {
            var e = this, f = e.points, g = f && f.length || 0, h, i = e.options, k = e.chart, j = null, l = e.xAxis, m = l && !!l.categories, n = i.turboThreshold, s = this.xData, r = this.yData, v = (h = e.pointArrayMap) && h.length, a = a || [];
            h = a.length;
            b = p(b, !0);
            if (d !== !1 && h && g === h && !e.cropped && !e.hasGroupedData && e.visible) o(a, function (a, b) {
                f[b].update && a !== i.data[b] && f[b].update(a, !1, null, !1)
            }); else {
                e.xIncrement = null;
                e.colorCounter = 0;
                o(this.parallelArrays, function (a) {
                    e[a + "Data"].length = 0
                });
                if (n && h > n) {
                    for (c = 0; j === null && c < h;) j = a[c], c++;
                    if (qa(j)) {
                        m = p(i.pointStart, 0);
                        j = p(i.pointInterval, 1);
                        for (c = 0; c < h; c++) s[c] = m, r[c] = a[c], m += j;
                        e.xIncrement = m
                    } else if (Ha(j)) if (v) for (c = 0; c < h; c++) j = a[c], s[c] = j[0], r[c] = j.slice(1, v + 1); else for (c = 0; c < h; c++) j = a[c], s[c] = j[0], r[c] = j[1]; else Y(12)
                } else for (c = 0; c < h; c++) if (a[c] !== x && (j = {series: e}, e.pointClass.prototype.applyOptions.apply(j, [a[c]]), e.updateParallelArrays(j, c), m && q(j.name))) l.names[j.x] = j.name;
                Ba(r[0]) && Y(14, !0);
                e.data = [];
                e.options.data = a;
                for (c = g; c--;) f[c] &&
                f[c].destroy && f[c].destroy();
                if (l) l.minRange = l.userMinRange;
                e.isDirty = e.isDirtyData = k.isDirtyBox = !0;
                c = !1
            }
            i.legendType === "point" && (this.processData(), this.generatePoints());
            b && k.redraw(c)
        },
        processData: function (a) {
            var b = this.xData, c = this.yData, d = b.length, e;
            e = 0;
            var f, g, h = this.xAxis, i, k = this.options;
            i = k.cropThreshold;
            var k = this.getExtremesFromAll || k.getExtremesFromAll, j = this.isCartesian, l, m;
            if (j && !this.isDirty && !h.isDirty && !this.yAxis.isDirty && !a) return !1;
            if (h) a = h.getExtremes(), l = a.min, m = a.max;
            if (j &&
                this.sorted && !k && (!i || d > i || this.forceCrop)) if (b[d - 1] < l || b[0] > m) b = [], c = []; else if (b[0] < l || b[d - 1] > m) e = this.cropData(this.xData, this.yData, l, m), b = e.xData, c = e.yData, e = e.start, f = !0;
            for (i = b.length - 1; i >= 0; i--) d = b[i] - b[i - 1], d > 0 && (g === x || d < g) ? g = d : d < 0 && this.requireSorting && Y(15);
            this.cropped = f;
            this.cropStart = e;
            this.processedXData = b;
            this.processedYData = c;
            this.closestPointRange = g
        },
        cropData: function (a, b, c, d) {
            var e = a.length, f = 0, g = e, h = p(this.cropShoulder, 1), i;
            for (i = 0; i < e; i++) if (a[i] >= c) {
                f = v(0, i - h);
                break
            }
            for (c = i; c <
            e; c++) if (a[c] > d) {
                g = c + h;
                break
            }
            return {xData: a.slice(f, g), yData: b.slice(f, g), start: f, end: g}
        },
        generatePoints: function () {
            var a = this.options.data, b = this.data, c, d = this.processedXData, e = this.processedYData, f = this.pointClass, g = d.length, h = this.cropStart || 0, i, k = this.hasGroupedData, j, l = [], m;
            if (!b && !k) b = [], b.length = a.length, b = this.data = b;
            for (m = 0; m < g; m++) i = h + m, k ? l[m] = (new f).init(this, [d[m]].concat(ra(e[m]))) : (b[i] ? j = b[i] : a[i] !== x && (b[i] = j = (new f).init(this, a[i], d[m])), l[m] = j), l[m].index = i;
            if (b && (g !== (c = b.length) ||
                k)) for (m = 0; m < c; m++) if (m === h && !k && (m += g), b[m]) b[m].destroyElements(), b[m].plotX = x;
            this.data = b;
            this.points = l
        },
        getExtremes: function (a) {
            var b = this.yAxis, c = this.processedXData, d, e = [], f = 0;
            d = this.xAxis.getExtremes();
            var g = d.min, h = d.max, i, k, j, l, a = a || this.stackedYData || this.processedYData;
            d = a.length;
            for (l = 0; l < d; l++) if (k = c[l], j = a[l], i = j !== null && j !== x && (!b.isLog || j.length || j > 0), k = this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || (c[l + 1] || k) >= g && (c[l - 1] || k) <= h, i && k) if (i = j.length) for (; i--;) j[i] !==
            null && (e[f++] = j[i]); else e[f++] = j;
            this.dataMin = Qa(e);
            this.dataMax = Da(e)
        },
        translate: function () {
            this.processedXData || this.processData();
            this.generatePoints();
            for (var a = this.options, b = a.stacking, c = this.xAxis, d = c.categories, e = this.yAxis, f = this.points, g = f.length, h = !!this.modifyValue, i = a.pointPlacement, k = i === "between" || qa(i), j = a.threshold, l = a.startFromThreshold ? j : 0, m, n, s, o, u = Number.MAX_VALUE, a = 0; a < g; a++) {
                var z = f[a], w = z.x, D = z.y;
                n = z.low;
                var t = b && e.stacks[(this.negStacks && D < (l ? 0 : j) ? "-" : "") + this.stackKey];
                if (e.isLog && D !== null && D <= 0) z.y = D = null, Y(10);
                z.plotX = m = E(v(-1E5, c.translate(w, 0, 0, 0, 1, i, this.type === "flags")), 1E5);
                if (b && this.visible && t && t[w]) o = this.getStackIndicator(o, w, this.index), t = t[w], D = t.points[o.key], n = D[0], D = D[1], n === l && (n = p(j, e.min)), e.isLog && n <= 0 && (n = null), z.total = z.stackTotal = t.total, z.percentage = t.total && z.y / t.total * 100, z.stackY = D, t.setOffset(this.pointXOffset || 0, this.barW || 0);
                z.yBottom = q(n) ? e.translate(n, 0, 1, 0, 1) : null;
                h && (D = this.modifyValue(D, z));
                z.plotY = n = typeof D === "number" && D !== Infinity ?
                    E(v(-1E5, e.translate(D, 0, 1, 0, 1)), 1E5) : x;
                z.isInside = n !== x && n >= 0 && n <= e.len && m >= 0 && m <= c.len;
                z.clientX = k ? c.translate(w, 0, 0, 0, 1) : m;
                z.negative = z.y < (j || 0);
                z.category = d && d[z.x] !== x ? d[z.x] : z.x;
                a && (u = E(u, P(m - s)));
                s = m
            }
            this.closestPointRangePx = u;
            this.getSegments()
        },
        setClip: function (a) {
            var b = this.chart, c = this.options, d = b.renderer, e = b.inverted, f = this.clipBox, g = f || b.clipBox, h = this.sharedClipKey || ["_sharedClip", a && a.duration, a && a.easing, g.height, c.xAxis, c.yAxis].join(","), i = b[h], k = b[h + "m"];
            if (!i) {
                if (a) g.width = 0,
                    b[h + "m"] = k = d.clipRect(-99, e ? -b.plotLeft : -b.plotTop, 99, e ? b.chartWidth : b.chartHeight);
                b[h] = i = d.clipRect(g)
            }
            a && (i.count += 1);
            if (c.clip !== !1) this.group.clip(a || f ? i : b.clipRect), this.markerGroup.clip(k), this.sharedClipKey = h;
            a || (i.count -= 1, i.count <= 0 && h && b[h] && (f || (b[h] = b[h].destroy()), b[h + "m"] && (b[h + "m"] = b[h + "m"].destroy())))
        },
        animate: function (a) {
            var b = this.chart, c = this.options.animation, d;
            if (c && !da(c)) c = ba[this.type].animation;
            a ? this.setClip(c) : (d = this.sharedClipKey, (a = b[d]) && a.animate({width: b.plotSizeX},
                c), b[d + "m"] && b[d + "m"].animate({width: b.plotSizeX + 99}, c), this.animate = null)
        },
        afterAnimate: function () {
            this.setClip();
            G(this, "afterAnimate")
        },
        drawPoints: function () {
            var a, b = this.points, c = this.chart, d, e, f, g, h, i, k, j, l = this.options.marker, m = this.pointAttr[""], n, s, o, q = this.markerGroup, v = p(l.enabled, this.xAxis.isRadial, this.closestPointRangePx > 2 * l.radius);
            if (l.enabled !== !1 || this._hasPointMarkers) for (f = b.length; f--;) if (g = b[f], d = S(g.plotX), e = g.plotY, j = g.graphic, n = g.marker || {}, s = !!g.marker, a = v && n.enabled === x ||
                n.enabled, o = g.isInside, a && e !== x && !isNaN(e) && g.y !== null) if (a = g.pointAttr[g.selected ? "select" : ""] || m, h = a.r, i = p(n.symbol, this.symbol), k = i.indexOf("url") === 0, j) j[o ? "show" : "hide"](!0).animate(t({
                x: d - h,
                y: e - h
            }, j.symbolName ? {width: 2 * h, height: 2 * h} : {})); else {
                if (o && (h > 0 || k)) g.graphic = c.renderer.symbol(i, d - h, e - h, 2 * h, 2 * h, s ? n : l).attr(a).add(q)
            } else if (j) g.graphic = j.destroy()
        },
        convertAttribs: function (a, b, c, d) {
            var e = this.pointAttrToOptions, f, g, h = {}, a = a || {}, b = b || {}, c = c || {}, d = d || {};
            for (f in e) g = e[f], h[f] = p(a[g], b[f],
                c[f], d[f]);
            return h
        },
        getAttribs: function () {
            var a = this, b = a.options, c = ba[a.type].marker ? b.marker : b, d = c.states, e = d.hover, f, g = a.color, h = a.options.negativeColor;
            f = {stroke: g, fill: g};
            var i = a.points || [], k, j, l = [], m = a.pointAttrToOptions;
            k = a.hasPointSpecificOptions;
            var n = c.lineColor, s = c.fillColor;
            j = b.turboThreshold;
            var r = a.zones, v = a.zoneAxis || "y", z;
            b.marker ? (e.radius = e.radius || c.radius + e.radiusPlus, e.lineWidth = e.lineWidth || c.lineWidth + e.lineWidthPlus) : (e.color = e.color || ea(e.color || g).brighten(e.brightness).get(),
                e.negativeColor = e.negativeColor || ea(e.negativeColor || h).brighten(e.brightness).get());
            l[""] = a.convertAttribs(c, f);
            o(["hover", "select"], function (b) {
                l[b] = a.convertAttribs(d[b], l[""])
            });
            a.pointAttr = l;
            g = i.length;
            if (!j || g < j || k) for (; g--;) {
                j = i[g];
                if ((c = j.options && j.options.marker || j.options) && c.enabled === !1) c.radius = 0;
                if (r.length) {
                    k = 0;
                    for (f = r[k]; j[v] >= f.value;) f = r[++k];
                    j.color = j.fillColor = p(f.color, a.color)
                }
                k = b.colorByPoint || j.color;
                if (j.options) for (z in m) q(c[m[z]]) && (k = !0);
                if (k) {
                    c = c || {};
                    k = [];
                    d = c.states ||
                    {};
                    f = d.hover = d.hover || {};
                    if (!b.marker || j.negative && !f.fillColor && !e.fillColor) f[a.pointAttrToOptions.fill] = f.color || !j.options.color && e[j.negative && h ? "negativeColor" : "color"] || ea(j.color).brighten(f.brightness || e.brightness).get();
                    f = {color: j.color};
                    if (!s) f.fillColor = j.color;
                    if (!n) f.lineColor = j.color;
                    c.hasOwnProperty("color") && !c.color && delete c.color;
                    k[""] = a.convertAttribs(t(f, c), l[""]);
                    k.hover = a.convertAttribs(d.hover, l.hover, k[""]);
                    k.select = a.convertAttribs(d.select, l.select, k[""])
                } else k = l;
                j.pointAttr =
                    k
            }
        },
        destroy: function () {
            var a = this, b = a.chart, c = /AppleWebKit\/533/.test(ya), d, e = a.data || [], f, g, h;
            G(a, "destroy");
            W(a);
            o(a.axisTypes || [], function (b) {
                if (h = a[b]) la(h.series, a), h.isDirty = h.forceRedraw = !0
            });
            a.legendItem && a.chart.legend.destroyItem(a);
            for (d = e.length; d--;) (f = e[d]) && f.destroy && f.destroy();
            a.points = null;
            clearTimeout(a.animationTimeout);
            for (g in a) a[g] instanceof M && !a[g].survive && (d = c && g === "group" ? "hide" : "destroy", a[g][d]());
            if (b.hoverSeries === a) b.hoverSeries = null;
            la(b.series, a);
            for (g in a) delete a[g]
        },
        getSegmentPath: function (a) {
            var b = this, c = [], d = b.options.step;
            o(a, function (e, f) {
                var g = e.plotX, h = e.plotY, i;
                b.getPointSpline ? c.push.apply(c, b.getPointSpline(a, e, f)) : (c.push(f ? "L" : "M"), d && f && (i = a[f - 1], d === "right" ? c.push(i.plotX, h, "L") : d === "center" ? c.push((i.plotX + g) / 2, i.plotY, "L", (i.plotX + g) / 2, h, "L") : c.push(g, i.plotY, "L")), c.push(e.plotX, e.plotY))
            });
            return c
        },
        getGraphPath: function () {
            var a = this, b = [], c, d = [];
            o(a.segments, function (e) {
                c = a.getSegmentPath(e);
                e.length > 1 ? b = b.concat(c) : d.push(e[0])
            });
            a.singlePoints =
                d;
            return a.graphPath = b
        },
        drawGraph: function () {
            var a = this, b = this.options, c = [["graph", b.lineColor || this.color, b.dashStyle]], d = b.lineWidth, e = b.linecap !== "square", f = this.getGraphPath(), g = this.fillGraph && this.color || "none";
            o(this.zones, function (d, e) {
                c.push(["zoneGraph" + e, d.color || a.color, d.dashStyle || b.dashStyle])
            });
            o(c, function (c, i) {
                var k = c[0], j = a[k];
                if (j) j.animate({d: f}); else if ((d || g) && f.length) j = {
                    stroke: c[1],
                    "stroke-width": d,
                    fill: g,
                    zIndex: 1
                }, c[2] ? j.dashstyle = c[2] : e && (j["stroke-linecap"] = j["stroke-linejoin"] =
                    "round"), a[k] = a.chart.renderer.path(f).attr(j).add(a.group).shadow(i < 2 && b.shadow)
            })
        },
        applyZones: function () {
            var a = this, b = this.chart, c = b.renderer, d = this.zones, e, f, g = this.clips || [], h, i = this.graph, k = this.area, j = v(b.chartWidth, b.chartHeight), l = this[(this.zoneAxis || "y") + "Axis"], m, n = l.reversed, s = b.inverted, r = l.horiz, q, z, w, u = !1;
            if (d.length && (i || k) && l.min !== x) i && i.hide(), k && k.hide(), m = l.getExtremes(), o(d, function (d, o) {
                e = n ? r ? b.plotWidth : 0 : r ? 0 : l.toPixels(m.min);
                e = E(v(p(f, e), 0), j);
                f = E(v(y(l.toPixels(p(d.value,
                    m.max), !0)), 0), j);
                u && (e = f = l.toPixels(m.max));
                q = Math.abs(e - f);
                z = E(e, f);
                w = v(e, f);
                if (l.isXAxis) {
                    if (h = {x: s ? w : z, y: 0, width: q, height: j}, !r) h.x = b.plotHeight - h.x
                } else if (h = {x: 0, y: s ? w : z, width: j, height: q}, r) h.y = b.plotWidth - h.y;
                b.inverted && c.isVML && (h = l.isXAxis ? {
                    x: 0,
                    y: n ? z : w,
                    height: h.width,
                    width: b.chartWidth
                } : {x: h.y - b.plotLeft - b.spacingBox.x, y: 0, width: h.height, height: b.chartHeight});
                g[o] ? g[o].animate(h) : (g[o] = c.clipRect(h), i && a["zoneGraph" + o].clip(g[o]), k && a["zoneArea" + o].clip(g[o]));
                u = d.value > m.max
            }), this.clips =
                g
        },
        invertGroups: function () {
            function a() {
                var a = {width: b.yAxis.len, height: b.xAxis.len};
                o(["group", "markerGroup"], function (c) {
                    b[c] && b[c].attr(a).invert()
                })
            }

            var b = this, c = b.chart;
            if (b.xAxis) H(c, "resize", a), H(b, "destroy", function () {
                W(c, "resize", a)
            }), a(), b.invertGroups = a
        },
        plotGroup: function (a, b, c, d, e) {
            var f = this[a], g = !f;
            g && (this[a] = f = this.chart.renderer.g(b).attr({
                visibility: c,
                zIndex: d || 0.1
            }).add(e), f.addClass("highcharts-series-" + this.index));
            f[g ? "attr" : "animate"](this.getPlotBox());
            return f
        },
        getPlotBox: function () {
            var a =
                this.chart, b = this.xAxis, c = this.yAxis;
            if (a.inverted) b = c, c = this.xAxis;
            return {translateX: b ? b.left : a.plotLeft, translateY: c ? c.top : a.plotTop, scaleX: 1, scaleY: 1}
        },
        render: function () {
            var a = this, b = a.chart, c, d = a.options, e = (c = d.animation) && !!a.animate && b.renderer.isSVG && p(c.duration, 500) || 0, f = a.visible ? "inherit" : "hidden", g = d.zIndex, h = a.hasRendered, i = b.seriesGroup;
            c = a.plotGroup("group", "series", f, g, i);
            a.markerGroup = a.plotGroup("markerGroup", "markers", f, g, i);
            e && a.animate(!0);
            a.getAttribs();
            c.inverted = a.isCartesian ?
                b.inverted : !1;
            a.drawGraph && (a.drawGraph(), a.applyZones());
            o(a.points, function (a) {
                a.redraw && a.redraw()
            });
            a.drawDataLabels && a.drawDataLabels();
            a.visible && a.drawPoints();
            a.drawTracker && a.options.enableMouseTracking !== !1 && a.drawTracker();
            b.inverted && a.invertGroups();
            d.clip !== !1 && !a.sharedClipKey && !h && c.clip(b.clipRect);
            e && a.animate();
            if (!h) a.animationTimeout = Oa(function () {
                a.afterAnimate()
            }, e);
            a.isDirty = a.isDirtyData = !1;
            a.hasRendered = !0
        },
        redraw: function () {
            var a = this.chart, b = this.isDirtyData, c = this.isDirty,
                d = this.group, e = this.xAxis, f = this.yAxis;
            d && (a.inverted && d.attr({
                width: a.plotWidth,
                height: a.plotHeight
            }), d.animate({translateX: p(e && e.left, a.plotLeft), translateY: p(f && f.top, a.plotTop)}));
            this.translate();
            this.render();
            b && G(this, "updatedData");
            (c || b) && delete this.kdTree
        },
        kdDimensions: 1,
        kdAxisArray: ["clientX", "plotY"],
        searchPoint: function (a, b) {
            var c = this.xAxis, d = this.yAxis, e = this.chart.inverted;
            return this.searchKDTree({
                clientX: e ? c.len - a.chartY + c.pos : a.chartX - c.pos,
                plotY: e ? d.len - a.chartX + d.pos : a.chartY -
                d.pos
            }, b)
        },
        buildKDTree: function () {
            function a(c, e, f) {
                var g, h;
                if (h = c && c.length) return g = b.kdAxisArray[e % f], c.sort(function (a, b) {
                    return a[g] - b[g]
                }), h = Math.floor(h / 2), {
                    point: c[h],
                    left: a(c.slice(0, h), e + 1, f),
                    right: a(c.slice(h + 1), e + 1, f)
                }
            }

            var b = this, c = b.kdDimensions;
            delete b.kdTree;
            Oa(function () {
                var d = fb(b.points || [], function (a) {
                    return a.y !== null
                });
                b.kdTree = a(d, c, c)
            }, b.options.kdNow ? 0 : 1)
        },
        searchKDTree: function (a, b) {
            function c(a, b, k, j) {
                var l = b.point, m = d.kdAxisArray[k % j], n, p, o = l;
                p = q(a[e]) && q(l[e]) ? Math.pow(a[e] -
                l[e], 2) : null;
                n = q(a[f]) && q(l[f]) ? Math.pow(a[f] - l[f], 2) : null;
                n = (p || 0) + (n || 0);
                l.dist = q(n) ? Math.sqrt(n) : Number.MAX_VALUE;
                l.distX = q(p) ? Math.sqrt(p) : Number.MAX_VALUE;
                m = a[m] - l[m];
                n = m < 0 ? "left" : "right";
                p = m < 0 ? "right" : "left";
                b[n] && (n = c(a, b[n], k + 1, j), o = n[g] < o[g] ? n : l);
                b[p] && Math.sqrt(m * m) < o[g] && (a = c(a, b[p], k + 1, j), o = a[g] < o[g] ? a : o);
                return o
            }

            var d = this, e = this.kdAxisArray[0], f = this.kdAxisArray[1], g = b ? "distX" : "dist";
            this.kdTree || this.buildKDTree();
            if (this.kdTree) return c(a, this.kdTree, this.kdDimensions, this.kdDimensions)
        }
    };
    Ib.prototype = {
        destroy: function () {
            Ra(this, this.axis)
        }, render: function (a) {
            var b = this.options, c = b.format, c = c ? Ja(c, this) : b.formatter.call(this);
            this.label ? this.label.attr({
                text: c,
                visibility: "hidden"
            }) : this.label = this.axis.chart.renderer.text(c, null, null, b.useHTML).css(b.style).attr({
                align: this.textAlign,
                rotation: b.rotation,
                visibility: "hidden"
            }).add(a)
        }, setOffset: function (a, b) {
            var c = this.axis, d = c.chart, e = d.inverted, f = c.reversed, f = this.isNegative && !f || !this.isNegative && f, g = c.translate(c.usePercentage ? 100 :
                this.total, 0, 0, 0, 1), c = c.translate(0), c = P(g - c), h = d.xAxis[0].translate(this.x) + a, i = d.plotHeight, f = {
                x: e ? f ? g : g - c : h,
                y: e ? i - h - b : f ? i - g - c : i - g,
                width: e ? c : b,
                height: e ? b : c
            };
            if (e = this.label) e.align(this.alignOptions, null, f), f = e.alignAttr, e[this.options.crop === !1 || d.isInsidePlot(f.x, f.y) ? "show" : "hide"](!0)
        }
    };
    Q.prototype.getStacks = function () {
        var a = this;
        o(a.yAxis, function (a) {
            if (a.stacks && a.hasVisibleSeries) a.oldStacks = a.stacks
        });
        o(a.series, function (b) {
            if (b.options.stacking && (b.visible === !0 || a.options.chart.ignoreHiddenSeries === !1)) b.stackKey = b.type + p(b.options.stack, "")
        })
    };
    ja.prototype.buildStacks = function () {
        var a = this.series, b = p(this.options.reversedStacks, !0), c = a.length;
        if (!this.isXAxis) {
            for (this.usePercentage = !1; c--;) a[b ? c : a.length - c - 1].setStackedPoints();
            if (this.usePercentage) for (c = 0; c < a.length; c++) a[c].setPercentStacks()
        }
    };
    ja.prototype.renderStackTotals = function () {
        var a = this.chart, b = a.renderer, c = this.stacks, d, e, f = this.stackTotalGroup;
        if (!f) this.stackTotalGroup = f = b.g("stack-labels").attr({visibility: "visible", zIndex: 6}).add();
        f.translate(a.plotLeft, a.plotTop);
        for (d in c) for (e in a = c[d], a) a[e].render(f)
    };
    ja.prototype.resetStacks = function () {
        var a = this.stacks, b, c;
        if (!this.isXAxis) for (b in a) for (c in a[b]) a[b][c].touched < this.stacksTouched ? (a[b][c].destroy(), delete a[b][c]) : (a[b][c].total = null, a[b][c].cum = 0)
    };
    ja.prototype.cleanStacks = function () {
        var a, b, c;
        if (!this.isXAxis) {
            if (this.oldStacks) a = this.stacks = this.oldStacks;
            for (b in a) for (c in a[b]) a[b][c].cum = a[b][c].total
        }
    };
    R.prototype.setStackedPoints = function () {
        if (this.options.stacking && !(this.visible !== !0 && this.chart.options.chart.ignoreHiddenSeries !== !1)) {
            var a = this.processedXData, b = this.processedYData, c = [], d = b.length, e = this.options, f = e.threshold, g = e.startFromThreshold ? f : 0, h = e.stack, e = e.stacking, i = this.stackKey, k = "-" + i, j = this.negStacks, l = this.yAxis, m = l.stacks, n = l.oldStacks, o, r, q, u, w, t, y;
            l.stacksTouched += 1;
            for (w = 0; w < d; w++) {
                t = a[w];
                y = b[w];
                o = this.getStackIndicator(o, t, this.index);
                u = o.key;
                q = (r = j && y < (g ? 0 : f)) ? k : i;
                m[q] || (m[q] = {});
                if (!m[q][t]) n[q] && n[q][t] ? (m[q][t] = n[q][t], m[q][t].total =
                    null) : m[q][t] = new Ib(l, l.options.stackLabels, r, t, h);
                q = m[q][t];
                q.points[u] = [p(q.cum, g)];
                q.touched = l.stacksTouched;
                o.index > 0 && this.singleStacks === !1 && (q.points[u][0] = q.points[this.index + "," + t + ",0"][0]);
                e === "percent" ? (r = r ? i : k, j && m[r] && m[r][t] ? (r = m[r][t], q.total = r.total = v(r.total, q.total) + P(y) || 0) : q.total = ga(q.total + (P(y) || 0))) : q.total = ga(q.total + (y || 0));
                q.cum = p(q.cum, g) + (y || 0);
                q.points[u].push(q.cum);
                c[w] = q.cum
            }
            if (e === "percent") l.usePercentage = !0;
            this.stackedYData = c;
            l.oldStacks = {}
        }
    };
    R.prototype.setPercentStacks =
        function () {
            var a = this, b = a.stackKey, c = a.yAxis.stacks, d = a.processedXData, e;
            o([b, "-" + b], function (b) {
                var f;
                for (var g = d.length, h, i; g--;) if (h = d[g], e = a.getStackIndicator(e, h, a.index), f = (i = c[b] && c[b][h]) && i.points[e.key], h = f) i = i.total ? 100 / i.total : 0, h[0] = ga(h[0] * i), h[1] = ga(h[1] * i), a.stackedYData[g] = h[1]
            })
        };
    R.prototype.getStackIndicator = function (a, b, c) {
        !q(a) || a.x !== b ? a = {x: b, index: 0} : a.index++;
        a.key = [c, b, a.index].join(",");
        return a
    };
    t(Q.prototype, {
        addSeries: function (a, b, c) {
            var d, e = this;
            a && (b = p(b, !0), G(e, "addSeries",
                {options: a}, function () {
                    d = e.initSeries(a);
                    e.isDirtyLegend = !0;
                    e.linkSeries();
                    b && e.redraw(c)
                }));
            return d
        }, addAxis: function (a, b, c, d) {
            var e = b ? "xAxis" : "yAxis", f = this.options;
            new ja(this, B(a, {index: this[e].length, isX: b}));
            f[e] = ra(f[e] || {});
            f[e].push(a);
            p(c, !0) && this.redraw(d)
        }, showLoading: function (a) {
            var b = this, c = b.options, d = b.loadingDiv, e = c.loading, f = function () {
                d && J(d, {
                    left: b.plotLeft + "px",
                    top: b.plotTop + "px",
                    width: b.plotWidth + "px",
                    height: b.plotHeight + "px"
                })
            };
            if (!d) b.loadingDiv = d = $(Ka, {className: "highcharts-loading"},
                t(e.style, {
                    zIndex: 10,
                    display: "none"
                }), b.container), b.loadingSpan = $("span", null, e.labelStyle, d), H(b, "redraw", f);
            b.loadingSpan.innerHTML = a || c.lang.loading;
            if (!b.loadingShown) J(d, {
                opacity: 0,
                display: ""
            }), gb(d, {opacity: e.style.opacity}, {duration: e.showDuration || 0}), b.loadingShown = !0;
            f()
        }, hideLoading: function () {
            var a = this.options, b = this.loadingDiv;
            b && gb(b, {opacity: 0}, {
                duration: a.loading.hideDuration || 100, complete: function () {
                    J(b, {display: "none"})
                }
            });
            this.loadingShown = !1
        }
    });
    t(Ga.prototype, {
        update: function (a,
                          b, c, d) {
            function e() {
                f.applyOptions(a);
                if (f.y === null && h) f.graphic = h.destroy();
                if (da(a) && !Ha(a)) f.redraw = function () {
                    if (h && h.element && a && a.marker && a.marker.symbol) f.graphic = h.destroy();
                    if (a && a.dataLabels && f.dataLabel) f.dataLabel = f.dataLabel.destroy();
                    f.redraw = null
                };
                i = f.index;
                g.updateParallelArrays(f, i);
                if (l && f.name) l[f.x] = f.name;
                j.data[i] = da(j.data[i]) ? f.options : a;
                g.isDirty = g.isDirtyData = !0;
                if (!g.fixedBox && g.hasCartesianSeries) k.isDirtyBox = !0;
                if (j.legendType === "point") k.isDirtyLegend = !0;
                b && k.redraw(c)
            }

            var f = this, g = f.series, h = f.graphic, i, k = g.chart, j = g.options, l = g.xAxis && g.xAxis.names, b = p(b, !0);
            d === !1 ? e() : f.firePointEvent("update", {options: a}, e)
        }, remove: function (a, b) {
            this.series.removePoint(Fa(this, this.series.data), a, b)
        }
    });
    t(R.prototype, {
        addPoint: function (a, b, c, d) {
            var e = this, f = e.options, g = e.data, h = e.graph, i = e.area, k = e.chart, j = e.xAxis && e.xAxis.names, l = h && h.shift || 0, m = ["graph", "area"], h = f.data, n, s = e.xData;
            Ta(d, k);
            if (c) {
                for (d = e.zones.length; d--;) m.push("zoneGraph" + d, "zoneArea" + d);
                o(m, function (a) {
                    if (e[a]) e[a].shift =
                        l + (f.step ? 2 : 1)
                })
            }
            if (i) i.isArea = !0;
            b = p(b, !0);
            i = {series: e};
            e.pointClass.prototype.applyOptions.apply(i, [a]);
            m = i.x;
            d = s.length;
            if (e.requireSorting && m < s[d - 1]) for (n = !0; d && s[d - 1] > m;) d--;
            e.updateParallelArrays(i, "splice", d, 0, 0);
            e.updateParallelArrays(i, d);
            if (j && i.name) j[m] = i.name;
            h.splice(d, 0, a);
            n && (e.data.splice(d, 0, null), e.processData());
            f.legendType === "point" && e.generatePoints();
            c && (g[0] && g[0].remove ? g[0].remove(!1) : (g.shift(), e.updateParallelArrays(i, "shift"), h.shift()));
            e.isDirty = !0;
            e.isDirtyData = !0;
            b && (e.getAttribs(), k.redraw())
        }, removePoint: function (a, b, c) {
            var d = this, e = d.data, f = e[a], g = d.points, h = d.chart, i = function () {
                e.length === g.length && g.splice(a, 1);
                e.splice(a, 1);
                d.options.data.splice(a, 1);
                d.updateParallelArrays(f || {series: d}, "splice", a, 1);
                f && f.destroy();
                d.isDirty = !0;
                d.isDirtyData = !0;
                b && h.redraw()
            };
            Ta(c, h);
            b = p(b, !0);
            f ? f.firePointEvent("remove", null, i) : i()
        }, remove: function (a, b) {
            var c = this, d = c.chart, a = p(a, !0);
            if (!c.isRemoving) c.isRemoving = !0, G(c, "remove", null, function () {
                c.destroy();
                d.isDirtyLegend =
                    d.isDirtyBox = !0;
                d.linkSeries();
                a && d.redraw(b)
            });
            c.isRemoving = !1
        }, update: function (a, b) {
            var c = this, d = this.chart, e = this.userOptions, f = this.type, g = N[f].prototype, h = ["group", "markerGroup", "dataLabelsGroup"], i;
            if (a.type && a.type !== f || a.zIndex !== void 0) h.length = 0;
            o(h, function (a) {
                h[a] = c[a];
                delete c[a]
            });
            a = B(e, {animation: !1, index: this.index, pointStart: this.xData[0]}, {data: this.options.data}, a);
            this.remove(!1);
            for (i in g) this[i] = x;
            t(this, N[a.type || f].prototype);
            o(h, function (a) {
                c[a] = h[a]
            });
            this.init(d, a);
            d.linkSeries();
            p(b, !0) && d.redraw(!1)
        }
    });
    t(ja.prototype, {
        update: function (a, b) {
            var c = this.chart, a = c.options[this.coll][this.options.index] = B(this.userOptions, a);
            this.destroy(!0);
            this._addedPlotLB = this.chart._labelPanes = x;
            this.init(c, t(a, {events: x}));
            c.isDirtyBox = !0;
            p(b, !0) && c.redraw()
        }, remove: function (a) {
            for (var b = this.chart, c = this.coll, d = this.series, e = d.length; e--;) d[e] && d[e].remove(!1);
            la(b.axes, this);
            la(b[c], this);
            b.options[c].splice(this.options.index, 1);
            o(b[c], function (a, b) {
                a.options.index = b
            });
            this.destroy();
            b.isDirtyBox = !0;
            p(a, !0) && b.redraw()
        }, setTitle: function (a, b) {
            this.update({title: a}, b)
        }, setCategories: function (a, b) {
            this.update({categories: a}, b)
        }
    });
    var wa = ma(R);
    N.line = wa;
    ba.area = B(fa, {softThreshold: !1, threshold: 0});
    var pa = ma(R, {
        type: "area", singleStacks: !1, getSegments: function () {
            var a = this, b = [], c = [], d = [], e = this.xAxis, f = this.yAxis, g = f.stacks[this.stackKey], h = {}, i, k, j = this.points, l = this.options.connectNulls, m, n, p;
            if (this.options.stacking && !this.cropped) {
                for (n = 0; n < j.length; n++) h[j[n].x] = j[n];
                for (p in g) g[p].total !==
                null && d.push(+p);
                d.sort(function (a, b) {
                    return a - b
                });
                o(d, function (b) {
                    var d = null, j;
                    if (!l || h[b] && h[b].y !== null) if (h[b]) c.push(h[b]); else {
                        for (n = a.index; n <= f.series.length; n++) if (m = a.getStackIndicator(null, b, n), j = g[b].points[m.key]) {
                            d = j[1];
                            break
                        }
                        i = e.translate(b);
                        k = f.getThreshold(d);
                        c.push({y: null, plotX: i, clientX: i, plotY: k, yBottom: k, onMouseOver: ua})
                    }
                });
                c.length && b.push(c)
            } else R.prototype.getSegments.call(this), b = this.segments;
            this.segments = b
        }, getSegmentPath: function (a) {
            var b = R.prototype.getSegmentPath.call(this,
                a), c = [].concat(b), d, e = this.options;
            d = b.length;
            var f = this.yAxis.getThreshold(e.threshold), g;
            d === 3 && c.push("L", b[1], b[2]);
            if (e.stacking && !this.closedStacks) for (d = a.length - 1; d >= 0; d--) g = p(a[d].yBottom, f), d < a.length - 1 && e.step && c.push(a[d + 1].plotX, g), c.push(a[d].plotX, g); else this.closeSegment(c, a, f);
            this.areaPath = this.areaPath.concat(c);
            return b
        }, closeSegment: function (a, b, c) {
            a.push("L", b[b.length - 1].plotX, c, "L", b[0].plotX, c)
        }, drawGraph: function () {
            this.areaPath = [];
            R.prototype.drawGraph.apply(this);
            var a =
                this, b = this.areaPath, c = this.options, d = [["area", this.color, c.fillColor]];
            o(this.zones, function (b, f) {
                d.push(["zoneArea" + f, b.color || a.color, b.fillColor || c.fillColor])
            });
            o(d, function (d) {
                var f = d[0], g = a[f];
                g ? g.animate({d: b}) : a[f] = a.chart.renderer.path(b).attr({
                    fill: p(d[2], ea(d[1]).setOpacity(p(c.fillOpacity, 0.75)).get()),
                    zIndex: 0
                }).add(a.group)
            })
        }, drawLegendSymbol: Na.drawRectangle
    });
    N.area = pa;
    ba.spline = B(fa);
    wa = ma(R, {
        type: "spline", getPointSpline: function (a, b, c) {
            var d = b.plotX, e = b.plotY, f = a[c - 1], g = a[c + 1],
                h, i, k, j;
            if (f && g) {
                a = f.plotY;
                k = g.plotX;
                var g = g.plotY, l;
                h = (1.5 * d + f.plotX) / 2.5;
                i = (1.5 * e + a) / 2.5;
                k = (1.5 * d + k) / 2.5;
                j = (1.5 * e + g) / 2.5;
                l = (j - i) * (k - d) / (k - h) + e - j;
                i += l;
                j += l;
                i > a && i > e ? (i = v(a, e), j = 2 * e - i) : i < a && i < e && (i = E(a, e), j = 2 * e - i);
                j > g && j > e ? (j = v(g, e), i = 2 * e - j) : j < g && j < e && (j = E(g, e), i = 2 * e - j);
                b.rightContX = k;
                b.rightContY = j
            }
            c ? (b = ["C", f.rightContX || f.plotX, f.rightContY || f.plotY, h || d, i || e, d, e], f.rightContX = f.rightContY = null) : b = ["M", d, e];
            return b
        }
    });
    N.spline = wa;
    ba.areaspline = B(ba.area);
    pa = pa.prototype;
    wa = ma(wa, {
        type: "areaspline",
        closedStacks: !0,
        getSegmentPath: pa.getSegmentPath,
        closeSegment: pa.closeSegment,
        drawGraph: pa.drawGraph,
        drawLegendSymbol: Na.drawRectangle
    });
    N.areaspline = wa;
    ba.column = B(fa, {
        borderColor: "#FFFFFF",
        borderRadius: 0,
        groupPadding: 0.2,
        marker: null,
        pointPadding: 0.1,
        minPointLength: 0,
        cropThreshold: 50,
        pointRange: null,
        states: {
            hover: {brightness: 0.1, shadow: !1, halo: !1},
            select: {color: "#C0C0C0", borderColor: "#000000", shadow: !1}
        },
        dataLabels: {align: null, verticalAlign: null, y: null},
        softThreshold: !1,
        startFromThreshold: !0,
        stickyTracking: !1,
        tooltip: {distance: 6},
        threshold: 0
    });
    wa = ma(R, {
        type: "column",
        pointAttrToOptions: {stroke: "borderColor", fill: "color", r: "borderRadius"},
        cropShoulder: 0,
        directTouch: !0,
        trackerGroups: ["group", "dataLabelsGroup"],
        negStacks: !0,
        init: function () {
            R.prototype.init.apply(this, arguments);
            var a = this, b = a.chart;
            b.hasRendered && o(b.series, function (b) {
                if (b.type === a.type) b.isDirty = !0
            })
        },
        getColumnMetrics: function () {
            var a = this, b = a.options, c = a.xAxis, d = a.yAxis, e = c.reversed, f, g = {}, h, i = 0;
            b.grouping === !1 ? i = 1 : o(a.chart.series, function (b) {
                var c =
                    b.options, e = b.yAxis;
                if (b.type === a.type && b.visible && d.len === e.len && d.pos === e.pos) c.stacking ? (f = b.stackKey, g[f] === x && (g[f] = i++), h = g[f]) : c.grouping !== !1 && (h = i++), b.columnIndex = h
            });
            var k = E(P(c.transA) * (c.ordinalSlope || b.pointRange || c.closestPointRange || c.tickInterval || 1), c.len), j = k * b.groupPadding, l = (k - 2 * j) / i, b = E(b.maxPointWidth || c.len, p(b.pointWidth, l * (1 - 2 * b.pointPadding)));
            a.columnMetrics = {
                width: b,
                offset: (l - b) / 2 + (j + ((a.columnIndex || 0) + (e ? 1 : 0)) * l - k / 2) * (e ? -1 : 1)
            };
            return a.columnMetrics
        },
        crispCol: function (a,
                            b, c, d) {
            var e = this.chart, f = this.borderWidth, g = -(f % 2 ? 0.5 : 0), f = f % 2 ? 0.5 : 1;
            e.inverted && e.renderer.isVML && (f += 1);
            c = Math.round(a + c) + g;
            a = Math.round(a) + g;
            c -= a;
            d = Math.round(b + d) + f;
            g = P(b) <= 0.5 && d > 0.5;
            b = Math.round(b) + f;
            d -= b;
            g && (b -= 1, d += 1);
            return {x: a, y: b, width: c, height: d}
        },
        translate: function () {
            var a = this, b = a.chart, c = a.options, d = a.borderWidth = p(c.borderWidth, a.closestPointRange * a.xAxis.transA < 2 ? 0 : 1), e = a.yAxis, f = a.translatedThreshold = e.getThreshold(c.threshold), g = p(c.minPointLength, 5), h = a.getColumnMetrics(), i = h.width,
                k = a.barW = v(i, 1 + 2 * d), j = a.pointXOffset = h.offset;
            b.inverted && (f -= 0.5);
            c.pointPadding && (k = ta(k));
            R.prototype.translate.apply(a);
            o(a.points, function (c) {
                var d = E(p(c.yBottom, f), 9E4), h = 999 + P(d), h = E(v(-h, c.plotY), e.len + h), o = c.plotX + j, q = k, u = E(h, d), t, w = v(h, d) - u;
                P(w) < g && g && (w = g, t = !e.reversed && !c.negative || e.reversed && c.negative, u = P(u - f) > g ? d - g : f - (t ? g : 0));
                c.barX = o;
                c.pointWidth = i;
                c.tooltipPos = b.inverted ? [e.len + e.pos - b.plotLeft - h, a.xAxis.len - o - q / 2, w] : [o + q / 2, h + e.pos - b.plotTop, w];
                c.shapeType = "rect";
                c.shapeArgs = a.crispCol(o,
                    u, q, w)
            })
        },
        getSymbol: ua,
        drawLegendSymbol: Na.drawRectangle,
        drawGraph: ua,
        drawPoints: function () {
            var a = this, b = this.chart, c = a.options, d = b.renderer, e = c.animationLimit || 250, f, g;
            o(a.points, function (h) {
                var i = h.plotY, k = h.graphic;
                if (i !== x && !isNaN(i) && h.y !== null) f = h.shapeArgs, i = q(a.borderWidth) ? {"stroke-width": a.borderWidth} : {}, g = h.pointAttr[h.selected ? "select" : ""] || a.pointAttr[""], k ? (Wa(k), k.attr(i).attr(g)[b.pointCount < e ? "animate" : "attr"](B(f))) : h.graphic = d[h.shapeType](f).attr(i).attr(g).add(h.group || a.group).shadow(c.shadow,
                    null, c.stacking && !c.borderRadius); else if (k) h.graphic = k.destroy()
            })
        },
        animate: function (a) {
            var b = this.yAxis, c = this.options, d = this.chart.inverted, e = {};
            if (Z) a ? (e.scaleY = 0.001, a = E(b.pos + b.len, v(b.pos, b.toPixels(c.threshold))), d ? e.translateX = a - b.len : e.translateY = a, this.group.attr(e)) : (e.scaleY = 1, e[d ? "translateX" : "translateY"] = b.pos, this.group.animate(e, this.options.animation), this.animate = null)
        },
        remove: function () {
            var a = this, b = a.chart;
            b.hasRendered && o(b.series, function (b) {
                if (b.type === a.type) b.isDirty = !0
            });
            R.prototype.remove.apply(a, arguments)
        }
    });
    N.column = wa;
    ba.bar = B(ba.column);
    pa = ma(wa, {type: "bar", inverted: !0});
    N.bar = pa;
    ba.scatter = B(fa, {
        lineWidth: 0,
        marker: {enabled: !0},
        tooltip: {
            headerFormat: '<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px;"> {series.name}</span><br/>',
            pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
        }
    });
    pa = ma(R, {
        type: "scatter",
        sorted: !1,
        requireSorting: !1,
        noSharedTooltip: !0,
        trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
        takeOrdinalPosition: !1,
        kdDimensions: 2,
        drawGraph: function () {
            this.options.lineWidth && R.prototype.drawGraph.call(this)
        }
    });
    N.scatter = pa;
    ba.pie = B(fa, {
        borderColor: "#FFFFFF",
        borderWidth: 1,
        center: [null, null],
        clip: !1,
        colorByPoint: !0,
        dataLabels: {
            distance: 30, enabled: !0, formatter: function () {
                return this.y === null ? void 0 : this.point.name
            }, x: 0
        },
        ignoreHiddenPoint: !0,
        legendType: "point",
        marker: null,
        size: null,
        showInLegend: !1,
        slicedOffset: 10,
        states: {hover: {brightness: 0.1, shadow: !1}},
        stickyTracking: !1,
        tooltip: {followPointer: !0}
    });
    fa = {
        type: "pie",
        isCartesian: !1,
        pointClass: ma(Ga, {
            init: function () {
                Ga.prototype.init.apply(this, arguments);
                var a = this, b;
                a.name = p(a.name, "Slice");
                b = function (b) {
                    a.slice(b.type === "select")
                };
                H(a, "select", b);
                H(a, "unselect", b);
                return a
            }, setVisible: function (a, b) {
                var c = this, d = c.series, e = d.chart, f = d.options.ignoreHiddenPoint, b = p(b, f);
                if (a !== c.visible) {
                    c.visible = c.options.visible = a = a === x ? !c.visible : a;
                    d.options.data[Fa(c, d.data)] = c.options;
                    o(["graphic", "dataLabel", "connector", "shadowGroup"], function (b) {
                        if (c[b]) c[b][a ? "show" :
                            "hide"](!0)
                    });
                    c.legendItem && e.legend.colorizeItem(c, a);
                    !a && c.state === "hover" && c.setState("");
                    if (f) d.isDirty = !0;
                    b && e.redraw()
                }
            }, slice: function (a, b, c) {
                var d = this.series;
                Ta(c, d.chart);
                p(b, !0);
                this.sliced = this.options.sliced = a = q(a) ? a : !this.sliced;
                d.options.data[Fa(this, d.data)] = this.options;
                a = a ? this.slicedTranslation : {translateX: 0, translateY: 0};
                this.graphic.animate(a);
                this.shadowGroup && this.shadowGroup.animate(a)
            }, haloPath: function (a) {
                var b = this.shapeArgs, c = this.series.chart;
                return this.sliced || !this.visible ?
                    [] : this.series.chart.renderer.symbols.arc(c.plotLeft + b.x, c.plotTop + b.y, b.r + a, b.r + a, {
                    innerR: this.shapeArgs.r,
                    start: b.start,
                    end: b.end
                })
            }
        }),
        requireSorting: !1,
        directTouch: !0,
        noSharedTooltip: !0,
        trackerGroups: ["group", "dataLabelsGroup"],
        axisTypes: [],
        pointAttrToOptions: {stroke: "borderColor", "stroke-width": "borderWidth", fill: "color"},
        animate: function (a) {
            var b = this, c = b.points, d = b.startAngleRad;
            if (!a) o(c, function (a) {
                var c = a.graphic, g = a.shapeArgs;
                c && (c.attr({r: a.startR || b.center[3] / 2, start: d, end: d}), c.animate({
                    r: g.r,
                    start: g.start, end: g.end
                }, b.options.animation))
            }), b.animate = null
        },
        updateTotals: function () {
            var a, b = 0, c = this.points, d = c.length, e, f = this.options.ignoreHiddenPoint;
            for (a = 0; a < d; a++) e = c[a], b += f && !e.visible ? 0 : e.y;
            this.total = b;
            for (a = 0; a < d; a++) e = c[a], e.percentage = b > 0 && (e.visible || !f) ? e.y / b * 100 : 0, e.total = b
        },
        generatePoints: function () {
            R.prototype.generatePoints.call(this);
            this.updateTotals()
        },
        translate: function (a) {
            this.generatePoints();
            var b = 0, c = this.options, d = c.slicedOffset, e = d + c.borderWidth, f, g, h, i = c.startAngle ||
                0, k = this.startAngleRad = na / 180 * (i - 90), i = (this.endAngleRad = na / 180 * (p(c.endAngle, i + 360) - 90)) - k, j = this.points, l = c.dataLabels.distance, c = c.ignoreHiddenPoint, m, n = j.length, o;
            if (!a) this.center = a = this.getCenter();
            this.getX = function (b, c) {
                h = U.asin(E((b - a[1]) / (a[2] / 2 + l), 1));
                return a[0] + (c ? -1 : 1) * T(h) * (a[2] / 2 + l)
            };
            for (m = 0; m < n; m++) {
                o = j[m];
                f = k + b * i;
                if (!c || o.visible) b += o.percentage / 100;
                g = k + b * i;
                o.shapeType = "arc";
                o.shapeArgs = {
                    x: a[0],
                    y: a[1],
                    r: a[2] / 2,
                    innerR: a[3] / 2,
                    start: y(f * 1E3) / 1E3,
                    end: y(g * 1E3) / 1E3
                };
                h = (g + f) / 2;
                h > 1.5 * na ?
                    h -= 2 * na : h < -na / 2 && (h += 2 * na);
                o.slicedTranslation = {translateX: y(T(h) * d), translateY: y(aa(h) * d)};
                f = T(h) * a[2] / 2;
                g = aa(h) * a[2] / 2;
                o.tooltipPos = [a[0] + f * 0.7, a[1] + g * 0.7];
                o.half = h < -na / 2 || h > na / 2 ? 1 : 0;
                o.angle = h;
                e = E(e, l / 2);
                o.labelPos = [a[0] + f + T(h) * l, a[1] + g + aa(h) * l, a[0] + f + T(h) * e, a[1] + g + aa(h) * e, a[0] + f, a[1] + g, l < 0 ? "center" : o.half ? "right" : "left", h]
            }
        },
        drawGraph: null,
        drawPoints: function () {
            var a = this, b = a.chart.renderer, c, d, e = a.options.shadow, f, g, h, i;
            if (e && !a.shadowGroup) a.shadowGroup = b.g("shadow").add(a.group);
            o(a.points,
                function (k) {
                    if (k.y !== null) {
                        d = k.graphic;
                        h = k.shapeArgs;
                        f = k.shadowGroup;
                        g = k.pointAttr[k.selected ? "select" : ""];
                        if (!g.stroke) g.stroke = g.fill;
                        if (e && !f) f = k.shadowGroup = b.g("shadow").add(a.shadowGroup);
                        c = k.sliced ? k.slicedTranslation : {translateX: 0, translateY: 0};
                        f && f.attr(c);
                        if (d) d.setRadialReference(a.center).attr(g).animate(t(h, c)); else {
                            i = {"stroke-linejoin": "round"};
                            if (!k.visible) i.visibility = "hidden";
                            k.graphic = d = b[k.shapeType](h).setRadialReference(a.center).attr(g).attr(i).attr(c).add(a.group).shadow(e,
                                f)
                        }
                    }
                })
        },
        searchPoint: ua,
        sortByAngle: function (a, b) {
            a.sort(function (a, d) {
                return a.angle !== void 0 && (d.angle - a.angle) * b
            })
        },
        drawLegendSymbol: Na.drawRectangle,
        getCenter: Tb.getCenter,
        getSymbol: ua
    };
    fa = ma(R, fa);
    N.pie = fa;
    R.prototype.drawDataLabels = function () {
        var a = this, b = a.options, c = b.cursor, d = b.dataLabels, e = a.points, f, g, h = a.hasRendered || 0, i, k, j = a.chart.renderer;
        if (d.enabled || a._hasPointLabels) a.dlProcessOptions && a.dlProcessOptions(d), k = a.plotGroup("dataLabelsGroup", "data-labels", d.defer ? "hidden" : "visible",
            d.zIndex || 6), p(d.defer, !0) && (k.attr({opacity: +h}), h || H(a, "afterAnimate", function () {
            a.visible && k.show();
            k[b.animation ? "animate" : "attr"]({opacity: 1}, {duration: 200})
        })), g = d, o(e, function (e) {
            var h, n = e.dataLabel, o, r, v = e.connector, u = !0, w, y = {};
            f = e.dlOptions || e.options && e.options.dataLabels;
            h = p(f && f.enabled, g.enabled) && e.y !== null;
            if (n && !h) e.dataLabel = n.destroy(); else if (h) {
                d = B(g, f);
                w = d.style;
                h = d.rotation;
                o = e.getLabelConfig();
                i = d.format ? Ja(d.format, o) : d.formatter.call(o, d);
                w.color = p(d.color, w.color, a.color,
                    "black");
                if (n) if (q(i)) n.attr({text: i}), u = !1; else {
                    if (e.dataLabel = n = n.destroy(), v) e.connector = v.destroy()
                } else if (q(i)) {
                    n = {
                        fill: d.backgroundColor,
                        stroke: d.borderColor,
                        "stroke-width": d.borderWidth,
                        r: d.borderRadius || 0,
                        rotation: h,
                        padding: d.padding,
                        zIndex: 1
                    };
                    if (w.color === "contrast") y.color = d.inside || d.distance < 0 || b.stacking ? j.getContrast(e.color || a.color) : "#000000";
                    if (c) y.cursor = c;
                    for (r in n) n[r] === x && delete n[r];
                    n = e.dataLabel = j[h ? "text" : "label"](i, 0, -9999, d.shape, null, null, d.useHTML).attr(n).css(t(w, y)).add(k).shadow(d.shadow)
                }
                n &&
                a.alignDataLabel(e, n, d, null, u)
            }
        })
    };
    R.prototype.alignDataLabel = function (a, b, c, d, e) {
        var f = this.chart, g = f.inverted, h = p(a.plotX, -9999), i = p(a.plotY, -9999), k = b.getBBox(), j = f.renderer.fontMetrics(c.style.fontSize).b, l = this.visible && (a.series.forceDL || f.isInsidePlot(h, y(i), g) || d && f.isInsidePlot(h, g ? d.x + 1 : d.y + d.height - 1, g));
        if (l) d = t({
            x: g ? f.plotWidth - i : h,
            y: y(g ? f.plotHeight - h : i),
            width: 0,
            height: 0
        }, d), t(c, {
            width: k.width,
            height: k.height
        }), c.rotation ? (a = f.renderer.rotCorr(j, c.rotation), b[e ? "attr" : "animate"]({
            x: d.x +
            c.x + d.width / 2 + a.x, y: d.y + c.y + d.height / 2
        }).attr({align: c.align})) : (b.align(c, null, d), g = b.alignAttr, p(c.overflow, "justify") === "justify" ? this.justifyDataLabel(b, c, g, k, d, e) : p(c.crop, !0) && (l = f.isInsidePlot(g.x, g.y) && f.isInsidePlot(g.x + k.width, g.y + k.height)), c.shape && b.attr({
            anchorX: a.plotX,
            anchorY: a.plotY
        }));
        if (!l) Wa(b), b.attr({y: -9999}), b.placed = !1
    };
    R.prototype.justifyDataLabel = function (a, b, c, d, e, f) {
        var g = this.chart, h = b.align, i = b.verticalAlign, k, j, l = a.box ? 0 : a.padding || 0;
        k = c.x + l;
        if (k < 0) h === "right" ? b.align =
            "left" : b.x = -k, j = !0;
        k = c.x + d.width - l;
        if (k > g.plotWidth) h === "left" ? b.align = "right" : b.x = g.plotWidth - k, j = !0;
        k = c.y + l;
        if (k < 0) i === "bottom" ? b.verticalAlign = "top" : b.y = -k, j = !0;
        k = c.y + d.height - l;
        if (k > g.plotHeight) i === "top" ? b.verticalAlign = "bottom" : b.y = g.plotHeight - k, j = !0;
        if (j) a.placed = !f, a.align(b, null, e)
    };
    if (N.pie) N.pie.prototype.drawDataLabels = function () {
        var a = this, b = a.data, c, d = a.chart, e = a.options.dataLabels, f = p(e.connectorPadding, 10), g = p(e.connectorWidth, 1), h = d.plotWidth, i = d.plotHeight, k, j, l = p(e.softConnector,
            !0), m = e.distance, n = a.center, q = n[2] / 2, r = n[1], u = m > 0, t, w, x, B = [[], []], C, A, F, J, I, G = [0, 0, 0, 0], N = function (a, b) {
            return b.y - a.y
        };
        if (a.visible && (e.enabled || a._hasPointLabels)) {
            R.prototype.drawDataLabels.apply(a);
            o(b, function (a) {
                a.dataLabel && a.visible && B[a.half].push(a)
            });
            for (J = 2; J--;) {
                var H = [], O = [], K = B[J], M = K.length, L;
                if (M) {
                    a.sortByAngle(K, J - 0.5);
                    for (I = b = 0; !b && K[I];) b = K[I] && K[I].dataLabel && (K[I].dataLabel.getBBox().height || 21), I++;
                    if (m > 0) {
                        w = E(r + q + m, d.plotHeight);
                        for (I = v(0, r - q - m); I <= w; I += b) H.push(I);
                        w = H.length;
                        if (M > w) {
                            c = [].concat(K);
                            c.sort(N);
                            for (I = M; I--;) c[I].rank = I;
                            for (I = M; I--;) K[I].rank >= w && K.splice(I, 1);
                            M = K.length
                        }
                        for (I = 0; I < M; I++) {
                            c = K[I];
                            x = c.labelPos;
                            c = 9999;
                            var S, Q;
                            for (Q = 0; Q < w; Q++) S = P(H[Q] - x[1]), S < c && (c = S, L = Q);
                            if (L < I && H[I] !== null) L = I; else for (w < M - I + L && H[I] !== null && (L = w - M + I); H[L] === null;) L++;
                            O.push({i: L, y: H[L]});
                            H[L] = null
                        }
                        O.sort(N)
                    }
                    for (I = 0; I < M; I++) {
                        c = K[I];
                        x = c.labelPos;
                        t = c.dataLabel;
                        F = c.visible === !1 ? "hidden" : "inherit";
                        c = x[1];
                        if (m > 0) {
                            if (w = O.pop(), L = w.i, A = w.y, c > A && H[L + 1] !== null || c < A && H[L - 1] !== null) A = E(v(0,
                                c), d.plotHeight)
                        } else A = c;
                        C = e.justify ? n[0] + (J ? -1 : 1) * (q + m) : a.getX(A === r - q - m || A === r + q + m ? c : A, J);
                        t._attr = {visibility: F, align: x[6]};
                        t._pos = {x: C + e.x + ({left: f, right: -f}[x[6]] || 0), y: A + e.y - 10};
                        t.connX = C;
                        t.connY = A;
                        if (this.options.size === null) w = t.width, C - w < f ? G[3] = v(y(w - C + f), G[3]) : C + w > h - f && (G[1] = v(y(C + w - h + f), G[1])), A - b / 2 < 0 ? G[0] = v(y(-A + b / 2), G[0]) : A + b / 2 > i && (G[2] = v(y(A + b / 2 - i), G[2]))
                    }
                }
            }
            if (Da(G) === 0 || this.verifyDataLabelOverflow(G)) this.placeDataLabels(), u && g && o(this.points, function (b) {
                k = b.connector;
                x = b.labelPos;
                if ((t = b.dataLabel) && t._pos && b.visible) F = t._attr.visibility, C = t.connX, A = t.connY, j = l ? ["M", C + (x[6] === "left" ? 5 : -5), A, "C", C, A, 2 * x[2] - x[4], 2 * x[3] - x[5], x[2], x[3], "L", x[4], x[5]] : ["M", C + (x[6] === "left" ? 5 : -5), A, "L", x[2], x[3], "L", x[4], x[5]], k ? (k.animate({d: j}), k.attr("visibility", F)) : b.connector = k = a.chart.renderer.path(j).attr({
                    "stroke-width": g,
                    stroke: e.connectorColor || b.color || "#606060",
                    visibility: F
                }).add(a.dataLabelsGroup); else if (k) b.connector = k.destroy()
            })
        }
    }, N.pie.prototype.placeDataLabels = function () {
        o(this.points,
            function (a) {
                var b = a.dataLabel;
                if (b && a.visible) (a = b._pos) ? (b.attr(b._attr), b[b.moved ? "animate" : "attr"](a), b.moved = !0) : b && b.attr({y: -9999})
            })
    }, N.pie.prototype.alignDataLabel = ua, N.pie.prototype.verifyDataLabelOverflow = function (a) {
        var b = this.center, c = this.options, d = c.center, e = c.minSize || 80, f = e, g;
        d[0] !== null ? f = v(b[2] - v(a[1], a[3]), e) : (f = v(b[2] - a[1] - a[3], e), b[0] += (a[3] - a[1]) / 2);
        d[1] !== null ? f = v(E(f, b[2] - v(a[0], a[2])), e) : (f = v(E(f, b[2] - a[0] - a[2]), e), b[1] += (a[0] - a[2]) / 2);
        f < b[2] ? (b[2] = f, b[3] = Math.min(/%$/.test(c.innerSize ||
        0) ? f * parseFloat(c.innerSize || 0) / 100 : parseFloat(c.innerSize || 0), f), this.translate(b), o(this.points, function (a) {
            if (a.dataLabel) a.dataLabel._pos = null
        }), this.drawDataLabels && this.drawDataLabels()) : g = !0;
        return g
    };
    if (N.column) N.column.prototype.alignDataLabel = function (a, b, c, d, e) {
        var f = this.chart.inverted, g = a.series, h = a.dlBox || a.shapeArgs, i = p(a.below, a.plotY > p(this.translatedThreshold, g.yAxis.len)), k = p(c.inside, !!this.options.stacking);
        if (h) {
            d = B(h);
            if (d.y < 0) d.height += d.y, d.y = 0;
            h = d.y + d.height - g.yAxis.len;
            h > 0 && (d.height -= h);
            f && (d = {
                x: g.yAxis.len - d.y - d.height,
                y: g.xAxis.len - d.x - d.width,
                width: d.height,
                height: d.width
            });
            if (!k) f ? (d.x += i ? 0 : d.width, d.width = 0) : (d.y += i ? d.height : 0, d.height = 0)
        }
        c.align = p(c.align, !f || k ? "center" : i ? "right" : "left");
        c.verticalAlign = p(c.verticalAlign, f || k ? "middle" : i ? "top" : "bottom");
        R.prototype.alignDataLabel.call(this, a, b, c, d, e)
    };
    (function (a) {
        var b = a.Chart, c = a.each, d = a.pick, e = a.addEvent;
        b.prototype.callbacks.push(function (a) {
            function b() {
                var e = [];
                c(a.series, function (a) {
                    var b = a.options.dataLabels,
                        f = a.dataLabelCollections || ["dataLabel"];
                    (b.enabled || a._hasPointLabels) && !b.allowOverlap && a.visible && c(f, function (b) {
                        c(a.points, function (a) {
                            if (a[b]) a[b].labelrank = d(a.labelrank, a.shapeArgs && a.shapeArgs.height), e.push(a[b])
                        })
                    })
                });
                a.hideOverlappingLabels(e)
            }

            b();
            e(a, "redraw", b)
        });
        b.prototype.hideOverlappingLabels = function (a) {
            var b = a.length, d, e, k, j, l, m, n;
            for (e = 0; e < b; e++) if (d = a[e]) d.oldOpacity = d.opacity, d.newOpacity = 1;
            a.sort(function (a, b) {
                return (b.labelrank || 0) - (a.labelrank || 0)
            });
            for (e = 0; e < b; e++) {
                k = a[e];
                for (d = e + 1; d < b; ++d) if (j = a[d], k && j && k.placed && j.placed && k.newOpacity !== 0 && j.newOpacity !== 0 && (l = k.alignAttr, m = j.alignAttr, n = 2 * (k.box ? 0 : k.padding), l = !(m.x > l.x + (k.width - n) || m.x + (j.width - n) < l.x || m.y > l.y + (k.height - n) || m.y + (j.height - n) < l.y))) (k.labelrank < j.labelrank ? k : j).newOpacity = 0
            }
            c(a, function (a) {
                var b, c;
                if (a) {
                    c = a.newOpacity;
                    if (a.oldOpacity !== c && a.placed) c ? a.show(!0) : b = function () {
                        a.hide()
                    }, a.alignAttr.opacity = c, a[a.isOld ? "animate" : "attr"](a.alignAttr, null, b);
                    a.isOld = !0
                }
            })
        }
    })(u);
    fa = u.TrackerMixin = {
        drawTrackerPoint: function () {
            var a =
                this, b = a.chart, c = b.pointer, d = a.options.cursor, e = d && {cursor: d}, f = function (a) {
                for (var c = a.target, d; c && !d;) d = c.point, c = c.parentNode;
                if (d !== x && d !== b.hoverPoint) d.onMouseOver(a)
            };
            o(a.points, function (a) {
                if (a.graphic) a.graphic.element.point = a;
                if (a.dataLabel) a.dataLabel.element.point = a
            });
            if (!a._hasTracking) o(a.trackerGroups, function (b) {
                if (a[b] && (a[b].addClass("highcharts-tracker").on("mouseover", f).on("mouseout", function (a) {
                        c.onTrackerMouseOut(a)
                    }).css(e), cb)) a[b].on("touchstart", f)
            }), a._hasTracking = !0
        },
        drawTrackerGraph: function () {
            var a = this, b = a.options, c = b.trackByArea, d = [].concat(c ? a.areaPath : a.graphPath), e = d.length, f = a.chart, g = f.pointer, h = f.renderer, i = f.options.tooltip.snap, k = a.tracker, j = b.cursor, l = j && {cursor: j}, j = a.singlePoints, m, n = function () {
                if (f.hoverSeries !== a) a.onMouseOver()
            }, p = "rgba(192,192,192," + (Z ? 1.0E-4 : 0.002) + ")";
            if (e && !c) for (m = e + 1; m--;) d[m] === "M" && d.splice(m + 1, 0, d[m + 1] - i, d[m + 2], "L"), (m && d[m] === "M" || m === e) && d.splice(m, 0, "L", d[m - 2] + i, d[m - 1]);
            for (m = 0; m < j.length; m++) e = j[m], d.push("M", e.plotX -
            i, e.plotY, "L", e.plotX + i, e.plotY);
            k ? k.attr({d: d}) : (a.tracker = h.path(d).attr({
                "stroke-linejoin": "round",
                visibility: a.visible ? "visible" : "hidden",
                stroke: p,
                fill: c ? p : "none",
                "stroke-width": b.lineWidth + (c ? 0 : 2 * i),
                zIndex: 2
            }).add(a.group), o([a.tracker, a.markerGroup], function (a) {
                a.addClass("highcharts-tracker").on("mouseover", n).on("mouseout", function (a) {
                    g.onTrackerMouseOut(a)
                }).css(l);
                if (cb) a.on("touchstart", n)
            }))
        }
    };
    if (N.column) wa.prototype.drawTracker = fa.drawTrackerPoint;
    if (N.pie) N.pie.prototype.drawTracker =
        fa.drawTrackerPoint;
    if (N.scatter) pa.prototype.drawTracker = fa.drawTrackerPoint;
    t(pb.prototype, {
        setItemEvents: function (a, b, c, d, e) {
            var f = this;
            (c ? b : a.legendGroup).on("mouseover", function () {
                a.setState("hover");
                b.css(f.options.itemHoverStyle)
            }).on("mouseout", function () {
                b.css(a.visible ? d : e);
                a.setState()
            }).on("click", function (b) {
                var c = function () {
                    a.setVisible && a.setVisible()
                }, b = {browserEvent: b};
                a.firePointEvent ? a.firePointEvent("legendItemClick", b, c) : G(a, "legendItemClick", b, c)
            })
        }, createCheckboxForItem: function (a) {
            a.checkbox =
                $("input", {
                    type: "checkbox",
                    checked: a.selected,
                    defaultChecked: a.selected
                }, this.options.itemCheckboxStyle, this.chart.container);
            H(a.checkbox, "click", function (b) {
                G(a.series || a, "checkboxClick", {checked: b.target.checked, item: a}, function () {
                    a.select()
                })
            })
        }
    });
    L.legend.itemStyle.cursor = "pointer";
    t(Q.prototype, {
        showResetZoom: function () {
            var a = this, b = L.lang, c = a.options.chart.resetZoomButton, d = c.theme, e = d.states, f = c.relativeTo === "chart" ? null : "plotBox";
            this.resetZoomButton = a.renderer.button(b.resetZoom, null, null,
                function () {
                    a.zoomOut()
                }, d, e && e.hover).attr({
                    align: c.position.align,
                    title: b.resetZoomTitle
                }).add().align(c.position, !1, f)
        }, zoomOut: function () {
            var a = this;
            G(a, "selection", {resetSelection: !0}, function () {
                a.zoom()
            })
        }, zoom: function (a) {
            var b, c = this.pointer, d = !1, e;
            !a || a.resetSelection ? o(this.axes, function (a) {
                b = a.zoom()
            }) : o(a.xAxis.concat(a.yAxis), function (a) {
                var e = a.axis, h = e.isXAxis;
                if (c[h ? "zoomX" : "zoomY"] || c[h ? "pinchX" : "pinchY"]) b = e.zoom(a.min, a.max), e.displayBtn && (d = !0)
            });
            e = this.resetZoomButton;
            if (d && !e) this.showResetZoom();
            else if (!d && da(e)) this.resetZoomButton = e.destroy();
            b && this.redraw(p(this.options.chart.animation, a && a.animation, this.pointCount < 100))
        }, pan: function (a, b) {
            var c = this, d = c.hoverPoints, e;
            d && o(d, function (a) {
                a.setState()
            });
            o(b === "xy" ? [1, 0] : [1], function (b) {
                var d = a[b ? "chartX" : "chartY"], h = c[b ? "xAxis" : "yAxis"][0], i = c[b ? "mouseDownX" : "mouseDownY"], k = (h.pointRange || 0) / 2, j = h.getExtremes(), l = h.toValue(i - d, !0) + k, k = h.toValue(i + c[b ? "plotWidth" : "plotHeight"] - d, !0) - k, i = i > d;
                if (h.series.length && (i || l > E(j.dataMin, j.min)) &&
                    (!i || k < v(j.dataMax, j.max))) h.setExtremes(l, k, !1, !1, {trigger: "pan"}), e = !0;
                c[b ? "mouseDownX" : "mouseDownY"] = d
            });
            e && c.redraw(!1);
            J(c.container, {cursor: "move"})
        }
    });
    t(Ga.prototype, {
        select: function (a, b) {
            var c = this, d = c.series, e = d.chart, a = p(a, !c.selected);
            c.firePointEvent(a ? "select" : "unselect", {accumulate: b}, function () {
                c.selected = c.options.selected = a;
                d.options.data[Fa(c, d.data)] = c.options;
                c.setState(a && "select");
                b || o(e.getSelectedPoints(), function (a) {
                    if (a.selected && a !== c) a.selected = a.options.selected = !1, d.options.data[Fa(a,
                        d.data)] = a.options, a.setState(""), a.firePointEvent("unselect")
                })
            })
        }, onMouseOver: function (a, b) {
            var c = this.series, d = c.chart, e = d.tooltip, f = d.hoverPoint;
            if (d.hoverSeries !== c) c.onMouseOver();
            if (f && f !== this) f.onMouseOut();
            if (this.series && (this.firePointEvent("mouseOver"), e && (!e.shared || c.noSharedTooltip) && e.refresh(this, a), this.setState("hover"), !b)) d.hoverPoint = this
        }, onMouseOut: function () {
            var a = this.series.chart, b = a.hoverPoints;
            this.firePointEvent("mouseOut");
            if (!b || Fa(this, b) === -1) this.setState(), a.hoverPoint =
                null
        }, importEvents: function () {
            if (!this.hasImportedEvents) {
                var a = B(this.series.options.point, this.options).events, b;
                this.events = a;
                for (b in a) H(this, b, a[b]);
                this.hasImportedEvents = !0
            }
        }, setState: function (a, b) {
            var c = S(this.plotX), d = this.plotY, e = this.series, f = e.options.states, g = ba[e.type].marker && e.options.marker, h = g && !g.enabled, i = g && g.states[a], k = i && i.enabled === !1, j = e.stateMarkerGraphic, l = this.marker || {}, m = e.chart, n = e.halo, o, a = a || "";
            o = this.pointAttr[a] || e.pointAttr[a];
            if (!(a === this.state && !b || this.selected &&
                a !== "select" || f[a] && f[a].enabled === !1 || a && (k || h && i.enabled === !1) || a && l.states && l.states[a] && l.states[a].enabled === !1)) {
                if (this.graphic) g = g && this.graphic.symbolName && o.r, this.graphic.attr(B(o, g ? {
                    x: c - g,
                    y: d - g,
                    width: 2 * g,
                    height: 2 * g
                } : {})), j && j.hide(); else {
                    if (a && i) if (g = i.radius, l = l.symbol || e.symbol, j && j.currentSymbol !== l && (j = j.destroy()), j) j[b ? "animate" : "attr"]({
                        x: c - g,
                        y: d - g
                    }); else if (l) e.stateMarkerGraphic = j = m.renderer.symbol(l, c - g, d - g, 2 * g, 2 * g).attr(o).add(e.markerGroup), j.currentSymbol = l;
                    if (j) j[a && m.isInsidePlot(c,
                        d, m.inverted) ? "show" : "hide"](), j.element.point = this
                }
                if ((c = f[a] && f[a].halo) && c.size) {
                    if (!n) e.halo = n = m.renderer.path().add(m.seriesGroup);
                    n.attr(t(Z ? {
                        fill: this.color || e.color,
                        "fill-opacity": c.opacity
                    } : {fill: ea(this.color || e.color).setOpacity(c.opacity).get()}, c.attributes))[b ? "animate" : "attr"]({d: this.haloPath(c.size)})
                } else n && n.attr({d: []});
                this.state = a
            }
        }, haloPath: function (a) {
            var b = this.series, c = b.chart, d = b.getPlotBox(), e = c.inverted, f = Math.floor(this.plotX);
            return c.renderer.symbols.circle(d.translateX +
            (e ? b.yAxis.len - this.plotY : f) - a, d.translateY + (e ? b.xAxis.len - f : this.plotY) - a, a * 2, a * 2)
        }
    });
    t(R.prototype, {
        onMouseOver: function () {
            var a = this.chart, b = a.hoverSeries;
            if (b && b !== this) b.onMouseOut();
            this.options.events.mouseOver && G(this, "mouseOver");
            this.setState("hover");
            a.hoverSeries = this
        }, onMouseOut: function () {
            var a = this.options, b = this.chart, c = b.tooltip, d = b.hoverPoint;
            b.hoverSeries = null;
            if (d) d.onMouseOut();
            this && a.events.mouseOut && G(this, "mouseOut");
            c && !a.stickyTracking && (!c.shared || this.noSharedTooltip) &&
            c.hide();
            this.setState()
        }, setState: function (a) {
            var b = this.options, c = this.graph, d = b.states, e = b.lineWidth, b = 0, a = a || "";
            if (this.state !== a && (this.state = a, !(d[a] && d[a].enabled === !1) && (a && (e = d[a].lineWidth || e + (d[a].lineWidthPlus || 0)), c && !c.dashstyle))) {
                a = {"stroke-width": e};
                for (c.attr(a); this["zoneGraph" + b];) this["zoneGraph" + b].attr(a), b += 1
            }
        }, setVisible: function (a, b) {
            var c = this, d = c.chart, e = c.legendItem, f, g = d.options.chart.ignoreHiddenSeries, h = c.visible;
            f = (c.visible = a = c.userOptions.visible = a === x ? !h : a) ? "show" :
                "hide";
            o(["group", "dataLabelsGroup", "markerGroup", "tracker"], function (a) {
                if (c[a]) c[a][f]()
            });
            if (d.hoverSeries === c || (d.hoverPoint && d.hoverPoint.series) === c) c.onMouseOut();
            e && d.legend.colorizeItem(c, a);
            c.isDirty = !0;
            c.options.stacking && o(d.series, function (a) {
                if (a.options.stacking && a.visible) a.isDirty = !0
            });
            o(c.linkedSeries, function (b) {
                b.setVisible(a, !1)
            });
            if (g) d.isDirtyBox = !0;
            b !== !1 && d.redraw();
            G(c, f)
        }, show: function () {
            this.setVisible(!0)
        }, hide: function () {
            this.setVisible(!1)
        }, select: function (a) {
            this.selected =
                a = a === x ? !this.selected : a;
            if (this.checkbox) this.checkbox.checked = a;
            G(this, a ? "select" : "unselect")
        }, drawTracker: fa.drawTrackerGraph
    });
    t(u, {
        Color: ea,
        Point: Ga,
        Tick: Va,
        Renderer: bb,
        SVGElement: M,
        SVGRenderer: za,
        arrayMin: Qa,
        arrayMax: Da,
        charts: V,
        dateFormat: Pa,
        error: Y,
        format: Ja,
        pathAnim: Ab,
        getOptions: function () {
            return L
        },
        hasBidiBug: Qb,
        isTouchDevice: Aa,
        setOptions: function (a) {
            L = B(!0, L, a);
            Db();
            return L
        },
        addEvent: H,
        removeEvent: W,
        createElement: $,
        discardElement: Sa,
        css: J,
        each: o,
        map: Ma,
        merge: B,
        splat: ra,
        stableSort: jb,
        extendClass: ma,
        pInt: A,
        svg: Z,
        canvas: ia,
        vml: !Z && !ia,
        product: "Highcharts",
        version: "4.1.10"
    });
    return u
});