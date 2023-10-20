! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t(e, document) : "function" == typeof define && define.amd ? define(null, function() {
        t(e, document)
    }) : e.plyr = t(e, document)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";

    function n() {
        var e, n, a, r = navigator.userAgent,
            s = navigator.appName,
            o = "" + parseFloat(navigator.appVersion),
            i = parseInt(navigator.appVersion, 10);
        return -1 !== navigator.appVersion.indexOf("Windows NT") && -1 !== navigator.appVersion.indexOf("rv:11") ? (s = "IE", o = "11;") : -1 !== (n = r.indexOf("MSIE")) ? (s = "IE", o = r.substring(n + 5)) : -1 !== (n = r.indexOf("Chrome")) ? (s = "Chrome", o = r.substring(n + 7)) : -1 !== (n = r.indexOf("Safari")) ? (s = "Safari", o = r.substring(n + 7), -1 !== (n = r.indexOf("Version")) && (o = r.substring(n + 8))) : -1 !== (n = r.indexOf("Firefox")) ? (s = "Firefox", o = r.substring(n + 8)) : (e = r.lastIndexOf(" ") + 1) < (n = r.lastIndexOf("/")) && (s = r.substring(e, n), o = r.substring(n + 1), s.toLowerCase() == s.toUpperCase() && (s = navigator.appName)), -1 !== (a = o.indexOf(";")) && (o = o.substring(0, a)), -1 !== (a = o.indexOf(" ")) && (o = o.substring(0, a)), i = parseInt("" + o, 10), isNaN(i) && (o = "" + parseFloat(navigator.appVersion), i = parseInt(navigator.appVersion, 10)), {
            name: s,
            version: i,
            ios: /(iPad|iPhone|iPod)/g.test(navigator.platform),
            touch: "ontouchstart" in t.documentElement
        }
    }

    function a(e, t) {
        var n = e.media;
        if ("video" == e.type) switch (t) {
            case "video/webm":
                return !(!n.canPlayType || !n.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/, ""));
            case "video/mp4":
                return !(!n.canPlayType || !n.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, ""));
            case "video/ogg":
                return !(!n.canPlayType || !n.canPlayType('video/ogg; codecs="theora"').replace(/no/, ""))
        } else if ("audio" == e.type) switch (t) {
            case "audio/mpeg":
                return !(!n.canPlayType || !n.canPlayType("audio/mpeg;").replace(/no/, ""));
            case "audio/ogg":
                return !(!n.canPlayType || !n.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ""));
            case "audio/wav":
                return !(!n.canPlayType || !n.canPlayType('audio/wav; codecs="1"').replace(/no/, ""))
        }
        return !1
    }

    function r(e) {
        if (!t.querySelectorAll('script[src="' + e + '"]').length) {
            var n = t.createElement("script");
            n.src = e;
            var a = t.getElementsByTagName("script")[0];
            a.parentNode.insertBefore(n, a)
        }
    }

    function s(e, t) {
        return Array.prototype.indexOf && -1 != e.indexOf(t)
    }

    function o(e, t, n) {
        return e.replace(new RegExp(t.replace(/([.*+?\^=!:${}()|\[\]\/\\])/g, "\\$1"), "g"), n)
    }

    function i(e, t) {
        e.length || (e = [e]);
        for (var n = e.length - 1; n >= 0; n--) {
            var a = n > 0 ? t.cloneNode(!0) : t,
                r = e[n],
                s = r.parentNode,
                o = r.nextSibling;
            a.appendChild(r), o ? s.insertBefore(a, o) : s.appendChild(a)
        }
    }

    function l(e) {
        for (var t = e.parentNode; e.firstChild;) t.insertBefore(e.firstChild, e);
        t.removeChild(e)
    }

    function u(e) {
        e && e.parentNode.removeChild(e)
    }

    function c(e, t) {
        e.insertBefore(t, e.firstChild)
    }

    function p(e, t) {
        for (var n in t) e.setAttribute(n, "boolean" == typeof t[n] && t[n] ? "" : t[n])
    }

    function d(e, n, a) {
        var r = t.createElement(e);
        p(r, a), c(n, r)
    }

    function A(e) {
        return e.replace(".", "")
    }

    function m(e, t, n) {
        if (e)
            if (e.classList) e.classList[n ? "add" : "remove"](t);
            else {
                var a = (" " + e.className + " ").replace(/\s+/g, " ").replace(" " + t + " ", "");
                e.className = a + (n ? " " + t : "")
            }
    }

    function f(e, t) {
        return e ? e.classList ? e.classList.contains(t) : new RegExp("(\\s|^)" + t + "(\\s|$)").test(e.className) : !1
    }

    function y(e, t, n, a) {
        e && g(e, t, n, !0, a)
    }

    function b(e, t, n, a) {
        e && g(e, t, n, !1, a)
    }

    function v(e, t, n, a, r) {
        y(e, t, function(t) {
            n && n.apply(e, [t]), a.apply(e, [t])
        }, r)
    }

    function g(e, t, n, a, r) {
        var s = t.split(" ");
        if ("boolean" != typeof r && (r = !1), e instanceof NodeList)
            for (var o = 0; o < e.length; o++) e[o] instanceof Node && g(e[o], arguments[1], arguments[2], arguments[3]);
        else
            for (var i = 0; i < s.length; i++) e[a ? "addEventListener" : "removeEventListener"](s[i], n, r)
    }

    function h(e, t, n, a) {
        if (e && t) {
            "boolean" != typeof n && (n = !1);
            var r = new CustomEvent(t, {
                bubbles: n,
                detail: a
            });
            e.dispatchEvent(r)
        }
    }

    function k(e, t) {
        return e ? (t = "boolean" == typeof t ? t : !e.getAttribute("aria-pressed"), e.setAttribute("aria-pressed", t), t) : void 0
    }

    function w(e, t) {
        return 0 === e || 0 === t || isNaN(e) || isNaN(t) ? 0 : (e / t * 100).toFixed(2)
    }

    function x() {
        var e = arguments;
        if (e.length) {
            if (1 == e.lenth) return e[0];
            for (var t = Array.prototype.shift.call(e), n = e.length, a = 0; n > a; a++) {
                var r = e[a];
                for (var s in r) r[s] && r[s].constructor && r[s].constructor === Object ? (t[s] = t[s] || {}, x(t[s], r[s])) : t[s] = r[s]
            }
            return t
        }
    }

    function T() {
        var e = {
                supportsFullScreen: !1,
                isFullScreen: function() {
                    return !1
                },
                requestFullScreen: function() {},
                cancelFullScreen: function() {},
                fullScreenEventName: "",
                element: null,
                prefix: ""
            },
            n = "webkit moz o ms khtml".split(" ");
        if ("undefined" != typeof t.cancelFullScreen) e.supportsFullScreen = !0;
        else
            for (var a = 0, r = n.length; r > a; a++) {
                if (e.prefix = n[a], "undefined" != typeof t[e.prefix + "CancelFullScreen"]) {
                    e.supportsFullScreen = !0;
                    break
                }
                if ("undefined" != typeof t.msExitFullscreen && t.msFullscreenEnabled) {
                    e.prefix = "ms", e.supportsFullScreen = !0;
                    break
                }
            }
        return e.supportsFullScreen && (e.fullScreenEventName = "ms" == e.prefix ? "MSFullscreenChange" : e.prefix + "fullscreenchange", e.isFullScreen = function(e) {
            switch ("undefined" == typeof e && (e = t.body), this.prefix) {
                case "":
                    return t.fullscreenElement == e;
                case "moz":
                    return t.mozFullScreenElement == e;
                default:
                    return t[this.prefix + "FullscreenElement"] == e
            }
        }, e.requestFullScreen = function(e) {
            return "undefined" == typeof e && (e = t.body), "" === this.prefix ? e.requestFullScreen() : e[this.prefix + ("ms" == this.prefix ? "RequestFullscreen" : "RequestFullScreen")]()
        }, e.cancelFullScreen = function() {
            return "" === this.prefix ? t.cancelFullScreen() : t[this.prefix + ("ms" == this.prefix ? "ExitFullscreen" : "CancelFullScreen")]()
        }, e.element = function() {
            return "" === this.prefix ? t.fullscreenElement : t[this.prefix + "FullscreenElement"]
        }), e
    }

    function E() {
        var t = {
            supported: function() {
                if (!("localStorage" in e)) return !1;
                try {
                    e.localStorage.setItem("___test", "OK");
                    var t = e.localStorage.getItem("___test");
                    return e.localStorage.removeItem("___test"), "OK" === t
                } catch (n) {
                    return !1
                }
                return !1
            }()
        };
        return t
    }

    function _(g, x) {
        function _(t, n) {
            x.debug && e.console && console[n ? "warn" : "log"](t)
        }

        function F() {
            return {
                url: x.iconUrl,
                external: 0 === x.iconUrl.indexOf("http")
            }
        }

        function N() {
            var e = [],
                t = F(),
                n = (t.external ? "" : t.url) + "#" + x.iconPrefix;
            return s(x.controls, "play-large") && e.push('<button type="button" data-plyr="play" class="plyr__play-large">', '<svg><use xlink:href="' + n + '-play" /></svg>', '<span class="plyr__sr-only">' + x.i18n.play + "</span>", "</button>"), e.push('<div class="plyr__controls">'), s(x.controls, "restart") && e.push('<button type="button" data-plyr="restart">', '<svg><use xlink:href="' + n + '-restart" /></svg>', '<span class="plyr__sr-only">' + x.i18n.restart + "</span>", "</button>"), s(x.controls, "rewind") && e.push('<button type="button" data-plyr="rewind">', '<svg><use xlink:href="' + n + '-rewind" /></svg>', '<span class="plyr__sr-only">' + x.i18n.rewind + "</span>", "</button>"), s(x.controls, "play") && e.push('<button type="button" data-plyr="play">', '<svg><use xlink:href="' + n + '-play" /></svg>', '<span class="plyr__sr-only">' + x.i18n.play + "</span>", "</button>", '<button type="button" data-plyr="pause">', '<svg><use xlink:href="' + n + '-pause" /></svg>', '<span class="plyr__sr-only">' + x.i18n.pause + "</span>", "</button>"), s(x.controls, "fast-forward") && e.push('<button type="button" data-plyr="fast-forward">', '<svg><use xlink:href="' + n + '-fast-forward" /></svg>', '<span class="plyr__sr-only">' + x.i18n.forward + "</span>", "</button>"), s(x.controls, "progress") && (e.push('<span class="plyr__progress">', '<label for="seek{id}" class="plyr__sr-only">Seek</label>', '<input id="seek{id}" class="plyr__progress--seek" type="range" min="0" max="100" step="0.1" value="0" data-plyr="seek">', '<progress class="plyr__progress--played" max="100" value="0" role="presentation"></progress>', '<progress class="plyr__progress--buffer" max="100" value="0">', "<span>0</span>% " + x.i18n.buffered, "</progress>"), x.tooltips.seek && e.push('<span class="plyr__tooltip">00:00</span>'), e.push("</span>")), s(x.controls, "current-time") && e.push('<span class="plyr__time">', '<span class="plyr__sr-only">' + x.i18n.currentTime + "</span>", '<span class="plyr__time--current">00:00</span>', "</span>"), s(x.controls, "duration") && e.push('<span class="plyr__time">', '<span class="plyr__sr-only">' + x.i18n.duration + "</span>", '<span class="plyr__time--duration">00:00</span>', "</span>"), s(x.controls, "mute") && e.push('<button type="button" data-plyr="mute">', '<svg class="icon--muted"><use xlink:href="' + n + '-muted" /></svg>', '<svg><use xlink:href="' + n + '-volume" /></svg>', '<span class="plyr__sr-only">' + x.i18n.toggleMute + "</span>", "</button>"), s(x.controls, "volume") && e.push('<span class="plyr__volume">', '<label for="volume{id}" class="plyr__sr-only">' + x.i18n.volume + "</label>", '<input id="volume{id}" class="plyr__volume--input" type="range" min="' + x.volumeMin + '" max="' + x.volumeMax + '" value="' + x.volume + '" data-plyr="volume">', '<progress class="plyr__volume--display" max="' + x.volumeMax + '" value="' + x.volumeMin + '" role="presentation"></progress>', "</span>"), s(x.controls, "captions") && e.push('<button type="button" data-plyr="captions">', '<svg class="icon--captions-on"><use xlink:href="' + n + '-captions-on" /></svg>', '<svg><use xlink:href="' + n + '-captions-off" /></svg>', '<span class="plyr__sr-only">' + x.i18n.toggleCaptions + "</span>", "</button>"), s(x.controls, "fullscreen") && e.push('<button type="button" data-plyr="fullscreen">', '<svg class="icon--exit-fullscreen"><use xlink:href="' + n + '-exit-fullscreen" /></svg>', '<svg><use xlink:href="' + n + '-enter-fullscreen" /></svg>', '<span class="plyr__sr-only">' + x.i18n.toggleFullscreen + "</span>", "</button>"), e.push("</div>"), e.join("")
        }

        function P() {
            if (Be.supported.full && ("audio" != Be.type || x.fullscreen.allowAudio) && x.fullscreen.enabled) {
                var e = I.supportsFullScreen;
                e || x.fullscreen.fallback && !G() ? (_((e ? "Native" : "Fallback") + " fullscreen enabled"), m(Be.container, x.classes.fullscreen.enabled, !0)) : _("Fullscreen not supported and fallback disabled"), k(Be.buttons.fullscreen, !1), W()
            }
        }

        function R() {
            if ("video" === Be.type) {
                V(x.selectors.captions) || Be.videoContainer.insertAdjacentHTML("afterbegin", '<div class="' + A(x.selectors.captions) + '"></div>'), Be.usingTextTracks = !1, Be.media.textTracks && (Be.usingTextTracks = !0);
                for (var e, t = "", n = Be.media.childNodes, a = 0; a < n.length; a++) "track" === n[a].nodeName.toLowerCase() && (e = n[a].kind, "captions" !== e && "subtitles" !== e || (t = n[a].getAttribute("src")));
                if (Be.captionExists = !0, "" === t ? (Be.captionExists = !1, _("No caption track found")) : _("Caption track found; URI: " + t), Be.captionExists) {
                    for (var r = Be.media.textTracks, s = 0; s < r.length; s++) r[s].mode = "hidden";
                    if (O(Be), ("IE" === Be.browser.name && Be.browser.version >= 10 || "Firefox" === Be.browser.name && Be.browser.version >= 31) && (_("Detected browser with known TextTrack issues - using manual fallback"), Be.usingTextTracks = !1), Be.usingTextTracks) {
                        _("TextTracks supported");
                        for (var o = 0; o < r.length; o++) {
                            var i = r[o];
                            "captions" !== i.kind && "subtitles" !== i.kind || y(i, "cuechange", function() {
                                this.activeCues[0] && "text" in this.activeCues[0] ? L(this.activeCues[0].getCueAsHTML()) : L()
                            })
                        }
                    } else if (_("TextTracks not supported so rendering captions manually"), Be.currentCaption = "", Be.captions = [], "" !== t) {
                        var l = new XMLHttpRequest;
                        l.onreadystatechange = function() {
                            if (4 === l.readyState)
                                if (200 === l.status) {
                                    var e, t = [],
                                        n = l.responseText;
                                    t = n.split("\n\n");
                                    for (var a = 0; a < t.length; a++) {
                                        e = t[a], Be.captions[a] = [];
                                        var r = e.split("\n"),
                                            s = 0; - 1 === r[s].indexOf(":") && (s = 1), Be.captions[a] = [r[s], r[s + 1]]
                                    }
                                    Be.captions.shift(), _("Successfully loaded the caption file via AJAX")
                                } else _("There was a problem loading the caption file via AJAX", !0)
                        }, l.open("get", t, !0), l.send()
                    }
                } else m(Be.container, x.classes.captions.enabled)
            }
        }

        function L(e) {
            var n = V(x.selectors.captions),
                a = t.createElement("span");
            n.innerHTML = "", "undefined" == typeof e && (e = ""), "string" == typeof e ? a.innerHTML = e.trim() : a.appendChild(e), n.appendChild(a);
            n.offsetHeight
        }

        function B(e) {
            function t(e, t) {
                var n = [];
                n = e.split(" --> ");
                for (var a = 0; a < n.length; a++) n[a] = n[a].replace(/(\d+:\d+:\d+\.\d+).*/, "$1");
                return r(n[t])
            }

            function n(e) {
                return t(e, 0)
            }

            function a(e) {
                return t(e, 1)
            }

            function r(e) {
                if (null === e || void 0 === e) return 0;
                var t, n = [],
                    a = [];
                return n = e.split(","), a = n[0].split(":"), t = Math.floor(60 * a[0] * 60) + Math.floor(60 * a[1]) + Math.floor(a[2])
            }
            if (!Be.usingTextTracks && "video" === Be.type && Be.supported.full && (Be.subcount = 0, e = "number" == typeof e ? e : Be.media.currentTime, Be.captions[Be.subcount])) {
                for (; a(Be.captions[Be.subcount][0]) < e.toFixed(1);)
                    if (Be.subcount++, Be.subcount > Be.captions.length - 1) {
                        Be.subcount = Be.captions.length - 1;
                        break
                    } Be.media.currentTime.toFixed(1) >= n(Be.captions[Be.subcount][0]) && Be.media.currentTime.toFixed(1) <= a(Be.captions[Be.subcount][0]) ? (Be.currentCaption = Be.captions[Be.subcount][1], L(Be.currentCaption)) : L()
            }
        }

        function O() {
            Be.buttons.captions && (m(Be.container, x.classes.captions.enabled, !0), x.captions.defaultActive && (m(Be.container, x.classes.captions.active, !0), k(Be.buttons.captions, !0)))
        }

        function H(e) {
            return Be.container.querySelectorAll(e)
        }

        function V(e) {
            return H(e)[0]
        }

        function G() {
            try {
                return e.self !== e.top
            } catch (t) {
                return !0
            }
        }

        function W() {
            function e(e) {
                9 === e.which && Be.isFullscreen && (e.target !== a || e.shiftKey ? e.target === n && e.shiftKey && (e.preventDefault(), a.focus()) : (e.preventDefault(), n.focus()))
            }
            var t = H("input:not([disabled]), button:not([disabled])"),
                n = t[0],
                a = t[t.length - 1];
            y(Be.container, "keydown", e)
        }

        function Y(e, t) {
            if ("string" == typeof t) d(e, Be.media, {
                src: t
            });
            else if (t.constructor === Array)
                for (var n = t.length - 1; n >= 0; n--) d(e, Be.media, t[n])
        }

        function q() {
            if (x.loadSprite) {
                var e = F();
                e.external ? (_("Loading external SVG sprite"), C(e.url)) : _("Sprite will be used inline")
            }
            var n = x.html;
            _("Injecting custom controls"), n || (n = N()), n = o(n, "{seektime}", x.seekTime), n = o(n, "{id}", Math.floor(1e4 * Math.random()));
            var a;
            if (null !== x.selectors.controls.container && (a = x.selectors.controls.container, "string" == typeof selector && (a = t.querySelector(a))), a instanceof HTMLElement || (a = Be.container), a.insertAdjacentHTML("beforeend", n), x.tooltips.controls)
                for (var r = H([x.selectors.controls.wrapper, " ", x.selectors.labels, " .", x.classes.hidden].join("")), s = r.length - 1; s >= 0; s--) {
                    var i = r[s];
                    m(i, x.classes.hidden, !1), m(i, x.classes.tooltip, !0)
                }
        }

        function z() {
            try {
                return Be.controls = V(x.selectors.controls.wrapper), Be.buttons = {}, Be.buttons.seek = V(x.selectors.buttons.seek), Be.buttons.play = H(x.selectors.buttons.play), Be.buttons.pause = V(x.selectors.buttons.pause), Be.buttons.restart = V(x.selectors.buttons.restart), Be.buttons.rewind = V(x.selectors.buttons.rewind), Be.buttons.forward = V(x.selectors.buttons.forward), Be.buttons.fullscreen = V(x.selectors.buttons.fullscreen), Be.buttons.mute = V(x.selectors.buttons.mute), Be.buttons.captions = V(x.selectors.buttons.captions), Be.progress = {}, Be.progress.container = V(x.selectors.progress.container), Be.progress.buffer = {}, Be.progress.buffer.bar = V(x.selectors.progress.buffer), Be.progress.buffer.text = Be.progress.buffer.bar && Be.progress.buffer.bar.getElementsByTagName("span")[0], Be.progress.played = V(x.selectors.progress.played), Be.progress.tooltip = Be.progress.container && Be.progress.container.querySelector("." + x.classes.tooltip), Be.volume = {}, Be.volume.input = V(x.selectors.volume.input), Be.volume.display = V(x.selectors.volume.display), Be.duration = V(x.selectors.duration), Be.currentTime = V(x.selectors.currentTime), Be.seekTime = H(x.selectors.seekTime), !0
            } catch (e) {
                return _("It looks like there is a problem with your controls html", !0), X(!0), !1
            }
        }

        function Q() {
            m(Be.container, x.selectors.container.replace(".", ""), Be.supported.full)
        }

        function X(e) {
            e ? Be.media.setAttribute("controls", "") : Be.media.removeAttribute("controls")
        }

        function j(e) {
            var t = x.i18n.play;
            if ("undefined" != typeof x.title && x.title.length && (t += ", " + x.title), Be.supported.full && Be.buttons.play)
                for (var n = Be.buttons.play.length - 1; n >= 0; n--) Be.buttons.play[n].setAttribute("aria-label", t);
            e instanceof HTMLElement && e.setAttribute("title", x.i18n.frameTitle.replace("{title}", x.title))
        }

        function D() {
            if (!Be.media) return _("No audio or video element found", !0), !1;
            if (Be.supported.full && (m(Be.container, x.classes.type.replace("{0}", Be.type), !0), s(x.types.embed, Be.type) && m(Be.container, x.classes.type.replace("{0}", "video"), !0), m(Be.container, x.classes.stopped, x.autoplay), m(Be.container, x.classes.isIos, Be.browser.ios), m(Be.container, x.classes.isTouch, Be.browser.touch), "video" === Be.type)) {
                var e = t.createElement("div");
                e.setAttribute("class", x.classes.videoWrapper), i(Be.media, e), Be.videoContainer = e
            }
            s(x.types.embed, Be.type) && (U(), Be.embedId = null)
        }

        function U() {
            for (var n = t.createElement("div"), a = Be.embedId, s = Be.type + "-" + Math.floor(1e4 * Math.random()), o = H('[id^="' + Be.type + '-"]'), i = o.length - 1; i >= 0; i--) u(o[i]);
            if (m(Be.media, x.classes.videoWrapper, !0), m(Be.media, x.classes.embedWrapper, !0), "youtube" === Be.type) Be.media.appendChild(n), n.setAttribute("id", s), "object" == typeof YT ? $(a, n) : (r(x.urls.youtube.api), e.onYouTubeReadyCallbacks = e.onYouTubeReadyCallbacks || [], e.onYouTubeReadyCallbacks.push(function() {
                $(a, n)
            }), e.onYouTubeIframeAPIReady = function() {
                e.onYouTubeReadyCallbacks.forEach(function(e) {
                    e()
                })
            });
            else if ("vimeo" === Be.type) {
                var l = t.createElement("iframe");
                l.loaded = !1, y(l, "load", function() {
                    l.loaded = !0
                }), p(l, {
                    src: "https://player.vimeo.com/video/" + a + "?player_id=" + s + "&api=1&badge=0&byline=0&portrait=0&title=0",
                    id: s,
                    webkitallowfullscreen: "",
                    mozallowfullscreen: "",
                    allowfullscreen: "",
                    frameborder: 0
                }), Be.supported.full ? (n.appendChild(l), Be.media.appendChild(n)) : Be.media.appendChild(l), "$f" in e || r(x.urls.vimeo.api);
                var c = e.setInterval(function() {
                    "$f" in e && l.loaded && (e.clearInterval(c), J.call(l))
                }, 50)
            } else if ("soundcloud" === Be.type) {
                var d = t.createElement("iframe");
                d.loaded = !1, y(d, "load", function() {
                    d.loaded = !0
                }), p(d, {
                    src: "https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/" + a,
                    id: s
                }), n.appendChild(d), Be.media.appendChild(n), e.SC || r(x.urls.soundcloud.api);
                var A = e.setInterval(function() {
                    e.SC && d.loaded && (e.clearInterval(A), K.call(d))
                }, 50)
            }
        }

        function Z() {
            Be.container.plyr.embed = Be.embed, Le(), j(V("iframe"))
        }

        function $(t, n) {
            "timer" in Be || (Be.timer = {}), Be.embed = new YT.Player(n.id, {
                videoId: t,
                playerVars: {
                    autoplay: x.autoplay ? 1 : 0,
                    controls: Be.supported.full ? 0 : 1,
                    rel: 0,
                    showinfo: 0,
                    iv_load_policy: 3,
                    cc_load_policy: x.captions.defaultActive ? 1 : 0,
                    cc_lang_pref: "en",
                    wmode: "transparent",
                    modestbranding: 1,
                    disablekb: 1,
                    origin: "*"
                },
                events: {
                    onError: function(e) {
                        h(Be.container, "error", !0, {
                            code: e.data,
                            embed: e.target
                        })
                    },
                    onReady: function(t) {
                        var n = t.target;
                        Be.media.play = function() {
                            n.playVideo(), Be.media.paused = !1
                        }, Be.media.pause = function() {
                            n.pauseVideo(), Be.media.paused = !0
                        }, Be.media.stop = function() {
                            n.stopVideo(), Be.media.paused = !0
                        }, Be.media.duration = n.getDuration(), Be.media.paused = !0, Be.media.currentTime = n.getCurrentTime(), Be.media.muted = n.isMuted(), x.title = n.getVideoData().title, h(Be.media, "timeupdate"), e.clearInterval(Be.timer.buffering), Be.timer.buffering = e.setInterval(function() {
                            Be.media.buffered = n.getVideoLoadedFraction(), h(Be.media, "progress"), 1 === Be.media.buffered && (e.clearInterval(Be.timer.buffering), h(Be.media, "canplaythrough"))
                        }, 200), Z(), we()
                    },
                    onStateChange: function(t) {
                        var n = t.target;
                        switch (e.clearInterval(Be.timer.playing), t.data) {
                            case 0:
                                Be.media.paused = !0, h(Be.media, "ended");
                                break;
                            case 1:
                                Be.media.paused = !1, Be.media.seeking = !1, h(Be.media, "play"), h(Be.media, "playing"), Be.timer.playing = e.setInterval(function() {
                                    Be.media.currentTime = n.getCurrentTime(), h(Be.media, "timeupdate")
                                }, 100);
                                break;
                            case 2:
                                Be.media.paused = !0, h(Be.media, "pause")
                        }
                        h(Be.container, "statechange", !1, {
                            code: t.data
                        })
                    }
                }
            })
        }

        function J() {
            Be.embed = $f(this), Be.embed.addEvent("ready", function() {
                Be.media.play = function() {
                    Be.embed.api("play"), Be.media.paused = !1
                }, Be.media.pause = function() {
                    Be.embed.api("pause"), Be.media.paused = !0
                }, Be.media.stop = function() {
                    Be.embed.api("stop"), Be.media.paused = !0
                }, Be.media.paused = !0, Be.media.currentTime = 0, Z(), Be.embed.api("getCurrentTime", function(e) {
                    Be.media.currentTime = e, h(Be.media, "timeupdate")
                }), Be.embed.api("getDuration", function(e) {
                    Be.media.duration = e, we()
                }), Be.embed.addEvent("play", function() {
                    Be.media.paused = !1, h(Be.media, "play"), h(Be.media, "playing")
                }), Be.embed.addEvent("pause", function() {
                    Be.media.paused = !0, h(Be.media, "pause")
                }), Be.embed.addEvent("playProgress", function(e) {
                    Be.media.seeking = !1, Be.media.currentTime = e.seconds, h(Be.media, "timeupdate")
                }), Be.embed.addEvent("loadProgress", function(e) {
                    Be.media.buffered = e.percent, h(Be.media, "progress"), 1 === parseInt(e.percent) && h(Be.media, "canplaythrough")
                }), Be.embed.addEvent("finish", function() {
                    Be.media.paused = !0, h(Be.media, "ended")
                }), x.autoplay && Be.embed.api("play")
            })
        }

        function K() {
            Be.embed = e.SC.Widget(this), Be.embed.bind(e.SC.Widget.Events.READY, function() {
                Be.media.play = function() {
                    Be.embed.play(), Be.media.paused = !1
                }, Be.media.pause = function() {
                    Be.embed.pause(), Be.media.paused = !0
                }, Be.media.stop = function() {
                    Be.embed.seekTo(0), Be.embed.pause(), Be.media.paused = !0
                }, Be.media.paused = !0, Be.media.currentTime = 0, Z(), Be.embed.getPosition(function(e) {
                    Be.media.currentTime = e, h(Be.media, "timeupdate")
                }), Be.embed.getDuration(function(e) {
                    Be.media.duration = e / 1e3, we()
                }), Be.embed.bind(e.SC.Widget.Events.PLAY, function() {
                    Be.media.paused = !1, h(Be.media, "play"), h(Be.media, "playing")
                }), Be.embed.bind(e.SC.Widget.Events.PAUSE, function() {
                    Be.media.paused = !0, h(Be.media, "pause")
                }), Be.embed.bind(e.SC.Widget.Events.PLAY_PROGRESS, function(e) {
                    Be.media.seeking = !1, Be.media.currentTime = e.currentPosition / 1e3, h(Be.media, "timeupdate")
                }), Be.embed.bind(e.SC.Widget.Events.LOAD_PROGRESS, function(e) {
                    Be.media.buffered = e.loadProgress, h(Be.media, "progress"), 1 === parseInt(e.loadProgress) && h(Be.media, "canplaythrough")
                }), Be.embed.bind(e.SC.Widget.Events.FINISH, function() {
                    Be.media.paused = !0, h(Be.media, "ended")
                }), x.autoplay && Be.embed.play()
            })
        }

        function ee() {
            "play" in Be.media && Be.media.play()
        }

        function te() {
            "pause" in Be.media && Be.media.pause()
        }

        function ne(e) {
            e === !0 ? ee() : e === !1 ? te() : Be.media[Be.media.paused ? "play" : "pause"]()
        }

        function ae(e) {
            "number" != typeof e && (e = x.seekTime), se(Be.media.currentTime - e)
        }

        function re(e) {
            "number" != typeof e && (e = x.seekTime), se(Be.media.currentTime + e)
        }

        function se(e) {
            var t = 0,
                n = Be.media.paused,
                a = oe();
            "number" == typeof e ? t = e : "object" != typeof e || "input" !== e.type && "change" !== e.type || (t = e.target.value / e.target.max * a), 0 > t ? t = 0 : t > a && (t = a), Te(t);
            try {
                Be.media.currentTime = t.toFixed(1)
            } catch (r) {}
            if (s(x.types.embed, Be.type)) {
                switch (Be.type) {
                    case "youtube":
                        Be.embed.seekTo(t);
                        break;
                    case "vimeo":
                        Be.embed.api("seekTo", t.toFixed(0));
                        break;
                    case "soundcloud":
                        Be.embed.seekTo(1e3 * t)
                }
                n && te(), h(Be.media, "timeupdate"), Be.media.seeking = !0
            }
            _("Seeking to " + Be.media.currentTime + " seconds"), B(t)
        }

        function oe() {
            var e = parseInt(x.duration),
                t = 0;
            return null === Be.media.duration || isNaN(Be.media.duration) || (t = Be.media.duration), isNaN(e) ? t : e
        }

        function ie() {
            m(Be.container, x.classes.playing, !Be.media.paused), m(Be.container, x.classes.stopped, Be.media.paused), _e(Be.media.paused)
        }

        function le() {
            M = {
                x: e.pageXOffset || 0,
                y: e.pageYOffset || 0
            }
        }

        function ue() {
            e.scrollTo(M.x, M.y)
        }

        function ce(e) {
            var n = I.supportsFullScreen;
            e && e.type === I.fullScreenEventName ? Be.isFullscreen = I.isFullScreen(Be.container) : n ? (I.isFullScreen(Be.container) ? I.cancelFullScreen() : (le(), I.requestFullScreen(Be.container)), Be.isFullscreen = I.isFullScreen(Be.container)) : (Be.isFullscreen = !Be.isFullscreen, Be.isFullscreen ? (y(t, "keyup", pe), t.body.style.overflow = "hidden") : (b(t, "keyup", pe), t.body.style.overflow = "")), m(Be.container, x.classes.fullscreen.active, Be.isFullscreen), Be.isFullscreen ? Be.container.setAttribute("tabindex", "-1") : Be.container.removeAttribute("tabindex"), W(Be.isFullscreen), k(Be.buttons.fullscreen, Be.isFullscreen), h(Be.container, Be.isFullscreen ? "enterfullscreen" : "exitfullscreen"), !Be.isFullscreen && n && ue()
        }

        function pe(e) {
            27 === (e.which || e.charCode || e.keyCode) && Be.isFullscreen && ce()
        }

        function de(e) {
            if ("boolean" != typeof e && (e = !Be.media.muted), k(Be.buttons.mute, e), Be.media.muted = e, 0 === Be.media.volume && Ae(x.volume), s(x.types.embed, Be.type)) {
                switch (Be.type) {
                    case "youtube":
                        Be.embed[Be.media.muted ? "mute" : "unMute"]();
                        break;
                    case "vimeo":
                        Be.embed.api("setVolume", Be.media.muted ? 0 : parseFloat(x.volume / x.volumeMax));
                        break;
                    case "soundcloud":
                        Be.embed.setVolume(Be.media.muted ? 0 : parseFloat(x.volume / x.volumeMax))
                }
                h(Be.media, "volumechange")
            }
        }

        function Ae(t) {
            var n = x.volumeMax,
                a = x.volumeMin;
            if ("undefined" == typeof t && (t = x.volume, x.storage.enabled && E().supported && (t = e.localStorage.getItem(x.storage.key), e.localStorage.removeItem("plyr-volume"))), (null === t || isNaN(t)) && (t = x.volume), t > n && (t = n), a > t && (t = a), Be.media.volume = parseFloat(t / n), Be.volume.display && (Be.volume.display.value = t), s(x.types.embed, Be.type)) {
                switch (Be.type) {
                    case "youtube":
                        Be.embed.setVolume(100 * Be.media.volume);
                        break;
                    case "vimeo":
                        Be.embed.api("setVolume", Be.media.volume);
                        break;
                    case "soundcloud":
                        Be.embed.setVolume(Be.media.volume)
                }
                h(Be.media, "volumechange")
            }
            Be.media.muted && t > 0 && de()
        }

        function me() {
            var e = Be.media.muted ? 0 : Be.media.volume * x.volumeMax;
            Ae(e + x.volumeStep / 5)
        }

        function fe() {
            var e = Be.media.muted ? 0 : Be.media.volume * x.volumeMax;
            Ae(e - x.volumeStep / 5)
        }

        function ye() {
            var t = Be.media.muted ? 0 : Be.media.volume * x.volumeMax;
            Be.supported.full && (Be.volume.input && (Be.volume.input.value = t), Be.volume.display && (Be.volume.display.value = t)), x.storage.enabled && E().supported && !isNaN(t) && e.localStorage.setItem(x.storage.key, t), m(Be.container, x.classes.muted, 0 === t), Be.supported.full && Be.buttons.mute && k(Be.buttons.mute, 0 === t)
        }

        function be(e) {
            Be.supported.full && Be.buttons.captions && ("boolean" != typeof e && (e = -1 === Be.container.className.indexOf(x.classes.captions.active)), Be.captionsEnabled = e, k(Be.buttons.captions, Be.captionsEnabled), m(Be.container, x.classes.captions.active, Be.captionsEnabled), h(Be.container, Be.captionsEnabled ? "captionsenabled" : "captionsdisabled"))
        }

        function ve(e) {
            var t = "waiting" === e.type;
            clearTimeout(Be.timers.loading), Be.timers.loading = setTimeout(function() {
                m(Be.container, x.classes.loading, t)
            }, t ? 250 : 0)
        }

        function ge(e) {
            if (Be.supported.full) {
                var t = Be.progress.played,
                    n = 0,
                    a = oe();
                if (e) switch (e.type) {
                    case "timeupdate":
                    case "seeking":
                        n = w(Be.media.currentTime, a), "timeupdate" == e.type && Be.buttons.seek && (Be.buttons.seek.value = n);
                        break;
                    case "playing":
                    case "progress":
                        t = Be.progress.buffer, n = function() {
                            var e = Be.media.buffered;
                            return e && e.length ? w(e.end(0), a) : "number" == typeof e ? 100 * e : 0
                        }()
                }
                he(t, n)
            }
        }

        function he(e, t) {
            if (Be.supported.full) {
                if ("undefined" == typeof t && (t = 0), "undefined" == typeof e) {
                    if (!Be.progress || !Be.progress.buffer) return;
                    e = Be.progress.buffer
                }
                e instanceof HTMLElement ? e.value = t : e && (e.bar && (e.bar.value = t), e.text && (e.text.innerHTML = t))
            }
        }

        function ke(e, t) {
            if (t) {
                isNaN(e) && (e = 0), Be.secs = parseInt(e % 60), Be.mins = parseInt(e / 60 % 60), Be.hours = parseInt(e / 60 / 60 % 60);
                var n = parseInt(oe() / 60 / 60 % 60) > 0;
                Be.secs = ("0" + Be.secs).slice(-2), Be.mins = ("0" + Be.mins).slice(-2), t.innerHTML = (n ? Be.hours + ":" : "") + Be.mins + ":" + Be.secs
            }
        }

        function we() {
            if (Be.supported.full) {
                var e = oe() || 0;
                !Be.duration && x.displayDuration && Be.media.paused && ke(e, Be.currentTime), Be.duration && ke(e, Be.duration), Ee()
            }
        }

        function xe(e) {
            ke(Be.media.currentTime, Be.currentTime), e && "timeupdate" == e.type && Be.media.seeking || ge(e)
        }

        function Te(e) {
            "number" != typeof e && (e = 0);
            var t = oe(),
                n = w(e, t);
            Be.progress && Be.progress.played && (Be.progress.played.value = n), Be.buttons && Be.buttons.seek && (Be.buttons.seek.value = n)
        }

        function Ee(e) {
            var t = oe();
            if (x.tooltips.seek && Be.progress.container && 0 !== t) {
                var n = Be.progress.container.getBoundingClientRect(),
                    a = 0,
                    r = x.classes.tooltip + "--visible";
                if (e) a = 100 / n.width * (e.pageX - n.left);
                else {
                    if (!f(Be.progress.tooltip, r)) return;
                    a = Be.progress.tooltip.style.left.replace("%", "")
                }
                0 > a ? a = 0 : a > 100 && (a = 100), ke(t / 100 * a, Be.progress.tooltip), Be.progress.tooltip.style.left = a + "%", e && s(["mouseenter", "mouseleave"], e.type) && m(Be.progress.tooltip, r, "mouseenter" === e.type)
            }
        }

        function _e(t) {
            if (x.hideControls && "audio" !== Be.type) {
                var n = 0,
                    a = !1,
                    r = t;
                if ("boolean" != typeof t && (t && t.type ? (a = "enterfullscreen" === t.type, r = s(["mousemove", "mouseenter", "focus"], t.type), "mousemove" === t.type && (n = 2e3), "focus" === t.type && (n = 3e3)) : r = !f(Be.container, x.classes.hideControls)), e.clearTimeout(Be.timers.hover), r || Be.media.paused) {
                    if (m(Be.container, x.classes.hideControls, !1), Be.media.paused) return;
                    Be.browser.touch && (n = 3e3)
                }
                r && Be.media.paused || (Be.timers.hover = e.setTimeout(function() {
                    Be.controls.active && !a || m(Be.container, x.classes.hideControls, !0)
                }, n))
            }
        }

        function Ce(e) {
            if ("undefined" != typeof e) return void Se(e);
            var t;
            switch (Be.type) {
                case "youtube":
                    t = Be.embed.getVideoUrl();
                    break;
                case "vimeo":
                    Be.embed.api("getVideoUrl", function(e) {
                        t = e
                    });
                    break;
                case "soundcloud":
                    Be.embed.getCurrentSound(function(e) {
                        t = e.permalink_url
                    });
                    break;
                default:
                    t = Be.media.currentSrc
            }
            return t || ""
        }

        function Se(n) {
            if (!("undefined" != typeof n && "sources" in n && n.sources.length)) return void _("Invalid source format", !0);
            if (te(), Te(), he(), Ne(), "youtube" === Be.type ? (Be.embed.destroy(), e.clearInterval(Be.timer.buffering), e.clearInterval(Be.timer.playing)) : "video" === Be.type && Be.videoContainer && u(Be.videoContainer), Be.embed = null, u(Be.media), "type" in n && (Be.type = n.type, "video" === Be.type)) {
                var a = n.sources[0];
                "type" in a && s(x.types.embed, a.type) && (Be.type = a.type)
            }
            switch (Be.supported = S(Be.type), Be.type) {
                case "video":
                    Be.media = t.createElement("video");
                    break;
                case "audio":
                    Be.media = t.createElement("audio");
                    break;
                case "youtube":
                case "vimeo":
                case "soundcloud":
                    Be.media = t.createElement("div"), Be.embedId = n.sources[0].src
            }
            c(Be.container, Be.media), "undefined" != typeof n.autoplay && (x.autoplay = n.autoplay), s(x.types.html5, Be.type) && (x.crossorigin && Be.media.setAttribute("crossorigin", ""), x.autoplay && Be.media.setAttribute("autoplay", ""), "poster" in n && Be.media.setAttribute("poster", n.poster), x.loop && Be.media.setAttribute("loop", "")), Be.container.className = Be.originalClassName, m(Be.container, x.classes.fullscreen.active, Be.isFullscreen), m(Be.container, x.classes.captions.active, Be.captionsEnabled), Q(), s(x.types.html5, Be.type) && Y("source", n.sources), D(), s(x.types.html5, Be.type) && ("tracks" in n && Y("track", n.tracks), Be.media.load(), Le(), we()), x.title = n.title, j(), Be.container.plyr.media = Be.media
        }

        function Fe(e) {
            "video" === Be.type && Be.media.setAttribute("poster", e)
        }

        function Ie() {
            function n() {
                var e = Be.media.paused;
                e ? ee() : te();
                var t = Be.buttons[e ? "play" : "pause"],
                    n = Be.buttons[e ? "pause" : "play"];
                if (n = n && n.length > 1 ? n[n.length - 1] : n[0]) {
                    var a = f(t, x.classes.tabFocus);
                    setTimeout(function() {
                        n.focus(), a && (m(t, x.classes.tabFocus, !1), m(n, x.classes.tabFocus, !0))
                    }, 100)
                }
            }

            function a() {
                var e = t.activeElement;
                e && e != t.body ? t.querySelector && (e = t.querySelector(":focus")) : e = null;
                for (var n in Be.buttons) {
                    var a = Be.buttons[n];
                    if (a instanceof NodeList)
                        for (var r = 0; r < a.length; r++) m(a[r], x.classes.tabFocus, a[r] === e);
                    else m(a, x.classes.tabFocus, a === e)
                }
            }
            var r = "IE" == Be.browser.name ? "change" : "input";
            y(e, "keyup", function(e) {
                var t = e.keyCode ? e.keyCode : e.which;
                9 == t && a()
            }), y(t.body, "click", function() {
                m(V("." + x.classes.tabFocus), x.classes.tabFocus, !1)
            });
            for (var s in Be.buttons) {
                var o = Be.buttons[s];
                y(o, "blur", function() {
                    m(o, "tab-focus", !1)
                })
            }
            v(Be.buttons.play, "click", x.listeners.play, n), v(Be.buttons.pause, "click", x.listeners.pause, n), v(Be.buttons.restart, "click", x.listeners.restart, se), v(Be.buttons.rewind, "click", x.listeners.rewind, ae), v(Be.buttons.forward, "click", x.listeners.forward, re), v(Be.buttons.seek, r, x.listeners.seek, se), v(Be.volume.input, r, x.listeners.volume, function() {
                Ae(Be.volume.input.value)
            }), v(Be.buttons.mute, "click", x.listeners.mute, de), v(Be.buttons.fullscreen, "click", x.listeners.fullscreen, ce), I.supportsFullScreen && y(t, I.fullScreenEventName, ce), y(Be.buttons.captions, "click", be), y(Be.progress.container, "mouseenter mouseleave mousemove", Ee), x.hideControls && (y(Be.container, "mouseenter mouseleave mousemove enterfullscreen", _e), y(Be.controls, "mouseenter mouseleave", function(e) {
                Be.controls.active = "mouseenter" === e.type
            }), y(Be.controls, "focus blur", _e, !0)), y(Be.volume.input, "wheel", function(e) {
                e.preventDefault(), (e.deltaY < 0 || e.deltaX > 0) && fe(), (e.deltaY > 0 || e.deltaX < 0) && me()
            })
        }

        function Me() {
            if (y(Be.media, "timeupdate seeking", xe), y(Be.media, "timeupdate", B), y(Be.media, "durationchange loadedmetadata", we), y(Be.media, "ended", function() {
                    "video" === Be.type && L(), ie(), se(0), we(), "video" === Be.type && x.showPosterOnEnd && Be.media.load()
                }), y(Be.media, "progress playing", ge), y(Be.media, "volumechange", ye), y(Be.media, "play pause", ie), y(Be.media, "waiting canplay seeked", ve), x.clickToPlay && "audio" !== Be.type) {
                var e = V("." + x.classes.videoWrapper);
                if (!e) return;
                e.style.cursor = "pointer", y(e, "click", function() {
                    return Be.browser.touch && !Be.media.paused ? void _e(!0) : void(Be.media.paused ? ee() : Be.media.ended ? (se(), ee()) : te())
                })
            }
            x.disableContextMenu && y(Be.media, "contextmenu", function(e) {
                e.preventDefault()
            }), y(Be.media, x.events.join(" "), function(e) {
                h(Be.container, e.type, !0)
            })
        }

        function Ne() {
            if (s(x.types.html5, Be.type)) {
                for (var e = Be.media.querySelectorAll("source"), t = 0; t < e.length; t++) u(e[t]);
                Be.media.setAttribute("src", "data:video/mp4;base64,AAAAHGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAAhmcmVlAAAAGm1kYXQAAAGzABAHAAABthBgUYI9t+8AAAMNbW9vdgAAAGxtdmhkAAAAAMXMvvrFzL76AAAD6AAAACoAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhpb2RzAAAAABCAgIAHAE/////+/wAAAiF0cmFrAAAAXHRraGQAAAAPxcy++sXMvvoAAAABAAAAAAAAACoAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAgAAAAIAAAAAAG9bWRpYQAAACBtZGhkAAAAAMXMvvrFzL76AAAAGAAAAAEVxwAAAAAALWhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABWaWRlb0hhbmRsZXIAAAABaG1pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAShzdGJsAAAAxHN0c2QAAAAAAAAAAQAAALRtcDR2AAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAgACABIAAAASAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGP//AAAAXmVzZHMAAAAAA4CAgE0AAQAEgICAPyARAAAAAAMNQAAAAAAFgICALQAAAbABAAABtYkTAAABAAAAASAAxI2IAMUARAEUQwAAAbJMYXZjNTMuMzUuMAaAgIABAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAQAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAASAAAAAQAAABRzdGNvAAAAAAAAAAEAAAAsAAAAYHVkdGEAAABYbWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAraWxzdAAAACOpdG9vAAAAG2RhdGEAAAABAAAAAExhdmY1My4yMS4x"), Be.media.load(), _("Cancelled network requests for old media")
            }
        }

        function Pe() {
            if (!Be.init) return null;
            if (Be.container.setAttribute("class", A(x.selectors.container)), Be.init = !1, u(V(x.selectors.controls.wrapper)), "youtube" === Be.type) return void Be.embed.destroy();
            "video" === Be.type && (u(V(x.selectors.captions)), l(Be.videoContainer)), X(!0);
            var e = Be.media.cloneNode(!0);
            Be.media.parentNode.replaceChild(e, Be.media)
        }

        function Re() {
            if (Be.init) return null;
            if (I = T(), Be.browser = n(), Be.media = Be.container.querySelectorAll("audio, video")[0], Be.media || (Be.media = Be.container.querySelectorAll("div")[0]), Be.media) {
                Be.originalClassName = Be.container.className;
                var e = Be.media.tagName.toLowerCase();
                if ("div" === e ? (Be.type = Be.media.getAttribute("data-type"), Be.embedId = Be.media.getAttribute("data-video-id"), Be.media.removeAttribute("data-type"), Be.media.removeAttribute("data-video-id")) : (Be.type = e, x.crossorigin = null !== Be.media.getAttribute("crossorigin"), x.autoplay = x.autoplay || null !== Be.media.getAttribute("autoplay"), x.loop = x.loop || null !== Be.media.getAttribute("loop")), Be.supported = S(Be.type), Q(), !Be.supported.basic) return !1;
                if (_(Be.browser.name + " " + Be.browser.version), D(), s(x.types.html5, Be.type)) {
                    if (!Be.supported.full) return void(Be.init = !0);
                    Le(), j(), x.autoplay && ee()
                }
                Be.init = !0
            }
        }

        function Le() {
            if (!Be.supported.full) return _("No full support for this media type (" + Be.type + ")", !0), u(V(x.selectors.controls.wrapper)), u(V(x.selectors.buttons.play)), void X(!0);
            var e = !H(x.selectors.controls.wrapper).length;
            e && q(), z() && (e && Ie(), Me(), X(), P(), R(), Ae(), ye(), xe(), ie(), we(), h(Be.container, "ready"))
        }
        var Be = this;
        return Be.container = g, Be.timers = {}, _(x), Re(), Be.init ? {
            media: Be.media,
            play: ee,
            pause: te,
            restart: se,
            rewind: ae,
            forward: re,
            seek: se,
            source: Ce,
            poster: Fe,
            setVolume: Ae,
            togglePlay: ne,
            toggleMute: de,
            toggleCaptions: be,
            toggleFullscreen: ce,
            toggleControls: _e,
            isFullscreen: function() {
                return Be.isFullscreen || !1
            },
            support: function(e) {
                return a(Be, e)
            },
            destroy: Pe,
            restore: Re
        } : {}
    }

    function C(e) {
        var n = new XMLHttpRequest;
        "withCredentials" in n && (n.open("GET", e, !0), n.onload = function() {
            var e = t.createElement("div");
            e.setAttribute("hidden", ""), e.innerHTML = n.responseText, t.body.insertBefore(e, t.body.childNodes[0])
        }, n.send())
    }

    function S(e) {
        var a, r, s = n(),
            o = "IE" === s.name && s.version <= 9,
            i = /iPhone|iPod/i.test(navigator.userAgent),
            l = !!t.createElement("audio").canPlayType,
            u = !!t.createElement("video").canPlayType;
        switch (e) {
            case "video":
                a = u, r = a && !o && !i;
                break;
            case "audio":
                a = l, r = a && !o;
                break;
            case "vimeo":
            case "youtube":
            case "soundcloud":
                a = !0, r = !o && !i;
                break;
            default:
                a = l && u, r = a && !o
        }
        return {
            basic: a,
            full: r
        }
    }

    function F(e, n) {
        var a = [];
        if ("string" == typeof e ? e = t.querySelectorAll(e) : e instanceof HTMLElement ? e = [e] : e instanceof NodeList || "string" == typeof e || ("undefined" == typeof n && "object" == typeof e && (n = e), e = t.querySelectorAll(N.selectors.container)), !S().basic || !e.length) return !1;
        for (var r = 0; r < e.length; r++) {
            var s = e[r];
            if ("undefined" == typeof s.plyr) {
                var o = x(N, n, JSON.parse(s.getAttribute("data-plyr")));
                if (!o.enabled) return;
                var i = new _(s, o);
                s.plyr = Object.keys(i).length ? i : !1, h(s, "setup", {
                    plyr: s.plyr
                })
            }
            a.push(s.plyr)
        }
        return a
    }
    var I, M = {
            x: 0,
            y: 0
        },
        N = {
            enabled: !0,
            debug: !1,
            autoplay: !1,
            loop: !1,
            seekTime: 10,
            volume: 5,
            volumeMin: 0,
            volumeMax: 10,
            volumeStep: 1,
            duration: null,
            displayDuration: !0,
            loadSprite: !0,
            iconPrefix: "plyr",
            iconUrl: "https://cdn.plyr.io/1.6.16/plyr.svg",
            clickToPlay: !0,
            hideControls: !0,
            showPosterOnEnd: !1,
            disableContextMenu: !0,
            tooltips: {
                controls: !1,
                seek: !0
            },
            selectors: {
                container: ".plyr",
                controls: {
                    container: null,
                    wrapper: ".plyr__controls"
                },
                labels: "[data-plyr]",
                buttons: {
                    seek: '[data-plyr="seek"]',
                    play: '[data-plyr="play"]',
                    pause: '[data-plyr="pause"]',
                    restart: '[data-plyr="restart"]',
                    rewind: '[data-plyr="rewind"]',
                    forward: '[data-plyr="fast-forward"]',
                    mute: '[data-plyr="mute"]',
                    captions: '[data-plyr="captions"]',
                    fullscreen: '[data-plyr="fullscreen"]'
                },
                volume: {
                    input: '[data-plyr="volume"]',
                    display: ".plyr__volume--display"
                },
                progress: {
                    container: ".plyr__progress",
                    buffer: ".plyr__progress--buffer",
                    played: ".plyr__progress--played"
                },
                captions: ".plyr__captions",
                currentTime: ".plyr__time--current",
                duration: ".plyr__time--duration"
            },
            classes: {
                videoWrapper: "plyr__video-wrapper",
                embedWrapper: "plyr__video-embed",
                type: "plyr--{0}",
                stopped: "plyr--stopped",
                playing: "plyr--playing",
                muted: "plyr--muted",
                loading: "plyr--loading",
                hover: "plyr--hover",
                tooltip: "plyr__tooltip",
                hidden: "plyr__sr-only",
                hideControls: "plyr--hide-controls",
                isIos: "plyr--is-ios",
                isTouch: "plyr--is-touch",
                captions: {
                    enabled: "plyr--captions-enabled",
                    active: "plyr--captions-active"
                },
                fullscreen: {
                    enabled: "plyr--fullscreen-enabled",
                    active: "plyr--fullscreen-active"
                },
                tabFocus: "tab-focus"
            },
            captions: {
                defaultActive: !1
            },
            fullscreen: {
                enabled: !0,
                fallback: !0,
                allowAudio: !1
            },
            storage: {
                enabled: !0,
                key: "plyr"
            },
            controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "fullscreen"],
            i18n: {
                restart: "Restart",
                rewind: "Rewind {seektime} secs",
                play: "Play",
                pause: "Pause",
                forward: "Forward {seektime} secs",
                played: "played",
                buffered: "buffered",
                currentTime: "Current time",
                duration: "Duration",
                volume: "Volume",
                toggleMute: "Toggle Mute",
                toggleCaptions: "Toggle Captions",
                toggleFullscreen: "Toggle Fullscreen",
                frameTitle: "Player for {title}"
            },
            types: {
                embed: ["youtube", "vimeo", "soundcloud"],
                html5: ["video", "audio"]
            },
            urls: {
                vimeo: {
                    api: "https://cdn.plyr.io/froogaloop/1.0.1/plyr.froogaloop.js"
                },
                youtube: {
                    api: "https://www.youtube.com/iframe_api"
                },
                soundcloud: {
                    api: "https://w.soundcloud.com/player/api.js"
                }
            },
            listeners: {
                seek: null,
                play: null,
                pause: null,
                restart: null,
                rewind: null,
                forward: null,
                mute: null,
                volume: null,
                captions: null,
                fullscreen: null
            },
            events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "emptied"]
        };
    return {
        setup: F,
        supported: S,
        loadSprite: C
    }
}),
function() {
    function e(e, t) {
        t = t || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
        };
        var n = document.createEvent("CustomEvent");
        return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
    }
    return "function" == typeof window.CustomEvent ? !1 : (e.prototype = window.Event.prototype, void(window.CustomEvent = e))
}();