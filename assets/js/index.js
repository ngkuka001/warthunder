parcelRequire = (function (e, r, t, n) {
  var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = l)
      : "function" == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    L4MM: [
      function (require, module, exports) {},
      {
        "/gephest-project/protected/frontend/wt2/src/assets/img/jpg/bg-body_mobile.jpg":
          [["bg-body_mobile.069a4335.jpg", "bq7m"], "bq7m"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/png/overlay-video.png":
          [["overlay-video.7139fa4a.png", "QdJE"], "QdJE"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/jpg/bg-social-title.jpg":
          [["bg-social-title.2dd5e45d.jpg", "z3dJ"], "z3dJ"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/png/bg-social-icon.png":
          [["bg-social-icon.093122f1.png", "otlA"], "otlA"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/svg/colored/icon-error.svg":
          [["icon-error.20046414.svg", "Js4g"], "Js4g"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/png/overlay-gradient_1.png":
          [["overlay-gradient_1.42e7b0db.png", "J4zW"], "J4zW"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/png/icon-decal.png":
          [["icon-decal.16870a0d.png", "KEDH"], "KEDH"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/svg/colored/icon-no-image.svg":
          [["icon-no-image.1dd07ac6.svg", "voYn"], "voYn"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/png/overlay-gradient_2.png":
          [["overlay-gradient_2.9515bb02.png", "QouS"], "QouS"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/jpg/widget-personal-manager.jpg":
          [["widget-personal-manager.2420a507.jpg", "oTjL"], "oTjL"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/jpg/widget-currency.jpg":
          [["widget-currency.4db7a217.jpg", "mox4"], "mox4"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/jpg/widget-tech-access.jpg":
          [["widget-tech-access.af630413.jpg", "CH7c"], "CH7c"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/jpg/widget-early-access.jpg":
          [["widget-early-access.b698a714.jpg", "MmEZ"], "MmEZ"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/jpg/widget-publications.jpg":
          [["widget-publications.fe2c2f29.jpg", "o6VS"], "o6VS"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/jpg/widget-design.jpg":
          [["widget-design.4772d8aa.jpg", "oV8A"], "oV8A"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/jpg/widget-camouflage.jpg":
          [["widget-camouflage.da890f66.jpg", "KoJ6"], "KoJ6"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/jpg/widget-missions.jpg":
          [["widget-missions.6c0a4adb.jpg", "L2QX"], "L2QX"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/jpg/widget-locations.jpg":
          [["widget-locations.fc8373b7.jpg", "LfAJ"], "LfAJ"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/jpg/widget-models.jpg":
          [["widget-models.b39c2cc2.jpg", "TDnP"], "TDnP"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/jpg/widget-reward_1.jpg":
          [["widget-reward_1.d6aa3b29.jpg", "T9eq"], "T9eq"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/jpg/widget-reward_2.jpg":
          [["widget-reward_2.f6b6e42b.jpg", "EZvG"], "EZvG"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/jpg/widget-reward_4.jpg":
          [["widget-reward_4.bfd17d17.jpg", "TsjU"], "TsjU"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/jpg/widget-personal-manager_mobile.jpg":
          [["widget-personal-manager_mobile.200805f9.jpg", "TXUy"], "TXUy"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/jpg/widget-currency_mobile.jpg":
          [["widget-currency_mobile.9955811f.jpg", "oGoa"], "oGoa"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/jpg/widget-tech-access_mobile.jpg":
          [["widget-tech-access_mobile.b7fca379.jpg", "vGVO"], "vGVO"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/jpg/widget-early-access_mobile.jpg":
          [["widget-early-access_mobile.05ac7556.jpg", "dsLK"], "dsLK"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/jpg/widget-publications_mobile.jpg":
          [["widget-publications_mobile.cbf17a28.jpg", "cZ5I"], "cZ5I"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/jpg/widget-design_mobile.jpg":
          [["widget-design_mobile.fd919e9b.jpg", "WHKx"], "WHKx"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/jpg/widget-camouflage_mobile.jpg":
          [["widget-camouflage_mobile.2713cf55.jpg", "baHH"], "baHH"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/jpg/widget-missions_mobile.jpg":
          [["widget-missions_mobile.7535b1ff.jpg", "bcQ7"], "bcQ7"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/jpg/widget-locations_mobile.jpg":
          [["widget-locations_mobile.6fb7c0ca.jpg", "Envu"], "Envu"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/jpg/widget-models_mobile.jpg":
          [["widget-models_mobile.b25d6985.jpg", "eLv4"], "eLv4"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/jpg/widget-reward_1_mobile.jpg":
          [["widget-reward_1_mobile.68337cbe.jpg", "U5BQ"], "U5BQ"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/jpg/widget-reward_2_mobile.jpg":
          [["widget-reward_2_mobile.4b240d8e.jpg", "IKez"], "IKez"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/jpg/widget-reward_4_mobile.jpg":
          [["widget-reward_4_mobile.60b72fd4.jpg", "Lrky"], "Lrky"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/jpg/widget-promo.jpg":
          [["widget-promo.d8478735.jpg", "OnJS"], "OnJS"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/png/widget-promo_title-bg2.png":
          [["widget-promo_title-bg2.fbd6f83d.png", "ISDl"], "ISDl"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/png/widget-promo_title-bg1.png":
          [["widget-promo_title-bg1.cf911374.png", "WxSB"], "WxSB"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/png/bg-wt-assistant.png":
          [["bg-wt-assistant.3a779469.png", "o9OF"], "o9OF"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/png/bg-gjn-pass.png":
          [["bg-gjn-pass.b8aae8ac.png", "TX2H"], "TX2H"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/jpg/bg-wt-sdk.jpg":
          [["bg-wt-sdk.24b6ec17.jpg", "w59G"], "w59G"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/webp/backgrounds/widget-merch.webp":
          [["widget-merch.87b9dcf4.webp", "TbXH"], "TbXH"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/svg/colored/icon-star.svg":
          [["icon-star.9305f79b.svg", "HtY5"], "HtY5"],
        "./../assets/img/png/legacy/imgcompare-slider.png": [
          ["imgcompare-slider.af434e4e.png", "VKMx"],
          "VKMx",
        ],
        "/gephest-project/protected/frontend/wt2/src/assets/img/svg/colored/icon-warning.svg":
          [["icon-warning.94be2157.svg", "HfUs"], "HfUs"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/svg/colored/icon-info.svg":
          [["icon-info.45747b65.svg", "Ej3v"], "Ej3v"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/svg/colored/icon-arrow_up-down.svg":
          [["icon-arrow_up-down.21684a4f.svg", "L3Be"], "L3Be"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/png/bg-invite.png":
          [["bg-invite.191ce393.png", "M7NE"], "M7NE"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/png/bg-cybersport.png":
          [["bg-cybersport.4fe29bc0.png", "OZBw"], "OZBw"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/png/bg-cybersport_ru.png":
          [["bg-cybersport_ru.7edde827.png", "iLaq"], "iLaq"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/png/bg-squadrons.png":
          [["bg-squadrons.095b2e77.png", "iQL2"], "iQL2"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/svg/colored/icon-targets__air.svg":
          [["icon-targets__air.19dd53fb.svg", "dFLm"], "dFLm"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/svg/colored/icon-targets__ground.svg":
          [["icon-targets__ground.c17b31a5.svg", "VUJk"], "VUJk"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/svg/colored/icon-skull.svg":
          [["icon-skull.a4edeaf4.svg", "jvdQ"], "jvdQ"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/svg/colored/icon-time__in-air.svg":
          [["icon-time__in-air.630c0321.svg", "EQBk"], "EQBk"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/png/bg-countdown.png":
          [["bg-countdown.67269c7a.png", "YzZN"], "YzZN"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/png/bg-countdown_description.png":
          [["bg-countdown_description.ff9c672b.png", "DWIm"], "DWIm"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/png/bg-countdown_rotate.png":
          [["bg-countdown_rotate.48b04446.png", "CkOd"], "CkOd"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/png/bundle-leaderboard.png":
          [["bundle-leaderboard.c95d2a31.png", "mq2K"], "mq2K"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/svg/colored/logo-squadrons-stat.svg":
          [["logo-squadrons-stat.46c5bf78.svg", "KHkZ"], "KHkZ"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/svg/colored/icon-pilots.svg":
          [["icon-pilots.ffabb001.svg", "aTGe"], "aTGe"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/svg/button-radio-play-push.svg":
          [["button-radio-play-push.3a7d5c55.svg", "mH8e"], "mH8e"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/svg/button-radio-pause-push.svg":
          [["button-radio-pause-push.89b21f12.svg", "j6oG"], "j6oG"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/svg/colored/icon-arrow.svg":
          [["icon-arrow.463a9871.svg", "QQ9X"], "QQ9X"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/svg/button-radio-play.svg":
          [["button-radio-play.dd4ebffb.svg", "F5GD"], "F5GD"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/svg/button-radio-pause.svg":
          [["button-radio-pause.fde174d1.svg", "qmVO"], "qmVO"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/svg/colored/button-app-store.svg":
          [["button-app-store.deb357a8.svg", "xGsT"], "xGsT"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/png/bg-community.png":
          [["bg-community.89073830.png", "qSF4"], "qSF4"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/png/label-banned.png":
          [["label-banned.898cfc06.png", "C8s3"], "C8s3"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/png/bundle-profile.png":
          [["bundle-profile.8c0c4fb0.png", "l8Ah"], "l8Ah"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/jpg/legacy/fon5.jpg":
          [["fon5.cd63e370.jpg", "XIbV"], "XIbV"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/jpg/legacy/fon3.jpg":
          [["fon3.c52cc4a3.jpg", "emrp"], "emrp"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/png/legacy/replay_btn.png":
          [["replay_btn.6197a68e.png", "WgNF"], "WgNF"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/png/legacy/replay_btn_edges.png":
          [["replay_btn_edges.3b853843.png", "nTuL"], "nTuL"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/png/legacy/replay_btn_active.png":
          [["replay_btn_active.73efa8db.png", "UhDr"], "UhDr"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/png/legacy/replay_download_icon.png":
          [["replay_download_icon.1a61bae4.png", "o9jF"], "o9jF"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/png/legacy/replay_download_icon_hover.png":
          [["replay_download_icon_hover.43c3c595.png", "XTSL"], "XTSL"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/png/legacy/icons.png":
          [["icons.487178ad.png", "lZYV"], "lZYV"],
        "/gephest-project/protected/frontend/wt2/src/assets/img/png/legacy/close.png":
          [["close.35dede89.png", "Jmyi"], "Jmyi"],
        "./../assets/img/png/legacy/icons.png": [
          ["icons.487178ad.png", "lZYV"],
          "lZYV",
        ],
        "./../assets/img/png/legacy/icon-cup.png": [
          ["icon-cup.8b966914.png", "bUeG"],
          "bUeG",
        ],
        "./../assets/img/png/legacy/icon-claim-sprite.png": [
          ["icon-claim-sprite.48396f8b.png", "jYhb"],
          "jYhb",
        ],
        "./../assets/img/jpg/legacy/fon3.jpg": [
          ["fon3.c52cc4a3.jpg", "emrp"],
          "emrp",
        ],
        "./../assets/img/jpg/legacy/fon5.jpg": [
          ["fon5.cd63e370.jpg", "XIbV"],
          "XIbV",
        ],
        "./../assets/img/png/legacy/arrow-down.png": [
          ["arrow-down.199bee94.png", "o4hw"],
          "o4hw",
        ],
        "./../assets/img/jpg/legacy/bg_404.jpg": [
          ["bg_404.f129e39a.jpg", "BEpq"],
          "BEpq",
        ],
        "./../assets/img/svg/legacy/close-modal.svg": [
          ["close-modal.86caf95d.svg", "MSsj"],
          "MSsj",
        ],
        "./../assets/img/png/legacy/line.png": [
          ["line.e68afb65.png", "o9sY"],
          "o9sY",
        ],
        "./../assets/img/png/legacy/but.png": [
          ["but.3c7a66cf.png", "Y0Mt"],
          "Y0Mt",
        ],
        "./../assets/img/png/legacy/arrow.png": [
          ["arrow.9b25db89.png", "WrfF"],
          "WrfF",
        ],
        "./../assets/img/png/legacy/btn_sprite.png": [
          ["btn_sprite.c877d6d7.png", "v8J1"],
          "v8J1",
        ],
        "./../assets/img/png/legacy/logos_sprite.png": [
          ["logos_sprite.2d19b402.png", "jdgN"],
          "jdgN",
        ],
        "./../assets/img/png/legacy/sprite-comment.png": [
          ["sprite-comment.885f1cc4.png", "hBdK"],
          "hBdK",
        ],
        "./../assets/img/png/legacy/flexslider.png": [
          ["flexslider.90e231fa.png", "LzmA"],
          "LzmA",
        ],
        "./../assets/img/vendors/magnific-popup/overlay.png": [
          ["overlay.9bf8bfd9.png", "GHC2"],
          "GHC2",
        ],
        "./../assets/img/vendors/magnific-popup/controls.png": [
          ["controls.9d88b30f.png", "Be2h"],
          "Be2h",
        ],
      },
    ],
    itQ5: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.customEvents =
            exports.UrlSearchParams =
            exports.appCssClasses =
              void 0);
        var s = {
          gallery: "js-gallery",
          slider: "js-slider",
          changeTabs: "js-change-tabs",
          parallaxBox: "js-parallax-box",
          openPopupTrigger: "js-popup__trigger",
          toggleCssClass: "js-toggle-class",
          bigMedia: "js-big-media",
          countdown: "js-countdown",
          tooltip: "js-tooltip",
          stickyArea: "js-sticky-area",
          lazyLoad: "js-lazy-load",
          spoiler: "js-spoiler",
          jsonContent: "js-json-content",
          bodyFixed: "body_fixed",
          mainSlider: "main-slider__wrapper",
          isActive: "is-active",
          isLoaded: "is-loaded",
          isVisible: "is-visible",
          isCurrent: "is-current",
        };
        exports.appCssClasses = s;
        var e = { popupId: "popupId" };
        exports.UrlSearchParams = e;
        var o = { closeDropdown: "close:dropdown" };
        exports.customEvents = o;
      },
      {},
    ],
    LaDf: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var t = require("../../config");
        function e(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function n(t, e) {
          for (var n = 0; n < e.length; n++) {
            var a = e[n];
            (a.enumerable = a.enumerable || !1),
              (a.configurable = !0),
              "value" in a && (a.writable = !0),
              Object.defineProperty(t, a.key, a);
          }
        }
        function a(t, e, a) {
          return e && n(t.prototype, e), a && n(t, a), t;
        }
        var s = (function () {
            function n() {
              var a = this;
              for (var s in (e(this, n),
              (this.privateState = {}),
              (this.state = null),
              (this.stateListeners = []),
              (this.customEventsListeners = []),
              (this.customEventsArray = []),
              Object.defineProperty(this, "state", {
                get: function () {
                  return a.privateState;
                },
                configurable: !1,
              }),
              t.customEvents))
                this.customEventsArray.push(
                  new Event(t.customEvents[s], { bubbles: !0 })
                );
              this._initEvents();
            }
            return (
              a(n, [
                {
                  key: "setState",
                  value: function (t, e) {
                    var n = this;
                    for (var a in t)
                      t.hasOwnProperty(a) && (this.privateState[a] = t[a]);
                    e && e(),
                      this.stateListeners.forEach(function (t) {
                        t.callback && "function" == typeof t.callback
                          ? t.callback(n.state)
                          : console.warn(
                              "Can not find appropriate callback function in App.ts"
                            );
                      });
                  },
                },
                {
                  key: "_initEvents",
                  value: function () {
                    var t = this;
                    window.addEventListener("click", function (e) {
                      t._dispatchCustomEvents(e);
                    });
                  },
                },
                {
                  key: "_dispatchCustomEvents",
                  value: function (t) {
                    var e = this;
                    this.customEventsListeners.forEach(function (n) {
                      for (
                        var a = !1, s = t.target;
                        s && "body" !== s.nodeName.toLowerCase();

                      ) {
                        if (s === n) {
                          a = !0;
                          break;
                        }
                        s = s.parentNode;
                      }
                      a ||
                        e.customEventsArray.forEach(function (t) {
                          n.dispatchEvent(t);
                        });
                    });
                  },
                },
              ]),
              n
            );
          })(),
          r = new s(),
          i = r;
        exports.default = i;
      },
      { "../../config": "itQ5" },
    ],
    pBGv: [
      function (require, module, exports) {
        var t,
          e,
          n = (module.exports = {});
        function r() {
          throw new Error("setTimeout has not been defined");
        }
        function o() {
          throw new Error("clearTimeout has not been defined");
        }
        function i(e) {
          if (t === setTimeout) return setTimeout(e, 0);
          if ((t === r || !t) && setTimeout)
            return (t = setTimeout), setTimeout(e, 0);
          try {
            return t(e, 0);
          } catch (n) {
            try {
              return t.call(null, e, 0);
            } catch (n) {
              return t.call(this, e, 0);
            }
          }
        }
        function u(t) {
          if (e === clearTimeout) return clearTimeout(t);
          if ((e === o || !e) && clearTimeout)
            return (e = clearTimeout), clearTimeout(t);
          try {
            return e(t);
          } catch (n) {
            try {
              return e.call(null, t);
            } catch (n) {
              return e.call(this, t);
            }
          }
        }
        !(function () {
          try {
            t = "function" == typeof setTimeout ? setTimeout : r;
          } catch (n) {
            t = r;
          }
          try {
            e = "function" == typeof clearTimeout ? clearTimeout : o;
          } catch (n) {
            e = o;
          }
        })();
        var c,
          s = [],
          l = !1,
          a = -1;
        function f() {
          l &&
            c &&
            ((l = !1),
            c.length ? (s = c.concat(s)) : (a = -1),
            s.length && h());
        }
        function h() {
          if (!l) {
            var t = i(f);
            l = !0;
            for (var e = s.length; e; ) {
              for (c = s, s = []; ++a < e; ) c && c[a].run();
              (a = -1), (e = s.length);
            }
            (c = null), (l = !1), u(t);
          }
        }
        function m(t, e) {
          (this.fun = t), (this.array = e);
        }
        function p() {}
        (n.nextTick = function (t) {
          var e = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
          s.push(new m(t, e)), 1 !== s.length || l || i(h);
        }),
          (m.prototype.run = function () {
            this.fun.apply(null, this.array);
          }),
          (n.title = "browser"),
          (n.env = {}),
          (n.argv = []),
          (n.version = ""),
          (n.versions = {}),
          (n.on = p),
          (n.addListener = p),
          (n.once = p),
          (n.off = p),
          (n.removeListener = p),
          (n.removeAllListeners = p),
          (n.emit = p),
          (n.prependListener = p),
          (n.prependOnceListener = p),
          (n.listeners = function (t) {
            return [];
          }),
          (n.binding = function (t) {
            throw new Error("process.binding is not supported");
          }),
          (n.cwd = function () {
            return "/";
          }),
          (n.chdir = function (t) {
            throw new Error("process.chdir is not supported");
          }),
          (n.umask = function () {
            return 0;
          });
      },
      {},
    ],
    wcj9: [
      function (require, module, exports) {
        var define;
        var global = arguments[3];
        var process = require("process");
        var t,
          e = arguments[3],
          i = require("process");
        !(function (i) {
          if ("object" == typeof exports && "undefined" != typeof module)
            module.exports = i();
          else if ("function" == typeof t && t.amd) t([], i);
          else {
            ("undefined" != typeof window
              ? window
              : void 0 !== e
              ? e
              : "undefined" != typeof self
              ? self
              : this
            ).Parallax = i();
          }
        })(function () {
          return (function t(e, i, n) {
            function o(r, a) {
              if (!i[r]) {
                if (!e[r]) {
                  var l = "function" == typeof require && require;
                  if (!a && l) return l(r, !0);
                  if (s) return s(r, !0);
                  var h = new Error("Cannot find module '" + r + "'");
                  throw ((h.code = "MODULE_NOT_FOUND"), h);
                }
                var u = (i[r] = { exports: {} });
                e[r][0].call(
                  u.exports,
                  function (t) {
                    var i = e[r][1][t];
                    return o(i || t);
                  },
                  u,
                  u.exports,
                  t,
                  e,
                  i,
                  n
                );
              }
              return i[r].exports;
            }
            for (
              var s = "function" == typeof require && require, r = 0;
              r < n.length;
              r++
            )
              o(n[r]);
            return o;
          })(
            {
              1: [
                function (t, e, i) {
                  "use strict";
                  var n = Object.getOwnPropertySymbols,
                    o = Object.prototype.hasOwnProperty,
                    s = Object.prototype.propertyIsEnumerable;
                  e.exports = (function () {
                    try {
                      if (!Object.assign) return !1;
                      var t = new String("abc");
                      if (
                        ((t[5] = "de"),
                        "5" === Object.getOwnPropertyNames(t)[0])
                      )
                        return !1;
                      for (var e = {}, i = 0; i < 10; i++)
                        e["_" + String.fromCharCode(i)] = i;
                      if (
                        "0123456789" !==
                        Object.getOwnPropertyNames(e)
                          .map(function (t) {
                            return e[t];
                          })
                          .join("")
                      )
                        return !1;
                      var n = {};
                      return (
                        "abcdefghijklmnopqrst".split("").forEach(function (t) {
                          n[t] = t;
                        }),
                        "abcdefghijklmnopqrst" ===
                          Object.keys(Object.assign({}, n)).join("")
                      );
                    } catch (o) {
                      return !1;
                    }
                  })()
                    ? Object.assign
                    : function (t, e) {
                        for (
                          var i,
                            r,
                            a = (function (t) {
                              if (null == t)
                                throw new TypeError(
                                  "Object.assign cannot be called with null or undefined"
                                );
                              return Object(t);
                            })(t),
                            l = 1;
                          l < arguments.length;
                          l++
                        ) {
                          for (var h in (i = Object(arguments[l])))
                            o.call(i, h) && (a[h] = i[h]);
                          if (n) {
                            r = n(i);
                            for (var u = 0; u < r.length; u++)
                              s.call(i, r[u]) && (a[r[u]] = i[r[u]]);
                          }
                        }
                        return a;
                      };
                },
                {},
              ],
              2: [
                function (t, e, i) {
                  (function (t) {
                    (function () {
                      var i, n, o, s, r, a;
                      "undefined" != typeof performance &&
                      null !== performance &&
                      performance.now
                        ? (e.exports = function () {
                            return performance.now();
                          })
                        : null != t && t.hrtime
                        ? ((e.exports = function () {
                            return (i() - r) / 1e6;
                          }),
                          (n = t.hrtime),
                          (s = (i = function () {
                            var t;
                            return 1e9 * (t = n())[0] + t[1];
                          })()),
                          (a = 1e9 * t.uptime()),
                          (r = s - a))
                        : Date.now
                        ? ((e.exports = function () {
                            return Date.now() - o;
                          }),
                          (o = Date.now()))
                        : ((e.exports = function () {
                            return new Date().getTime() - o;
                          }),
                          (o = new Date().getTime()));
                    }.call(this));
                  }.call(this, t("_process")));
                },
                { _process: 3 },
              ],
              3: [
                function (t, e, i) {
                  var n,
                    o,
                    s = (e.exports = {});
                  function r() {
                    throw new Error("setTimeout has not been defined");
                  }
                  function a() {
                    throw new Error("clearTimeout has not been defined");
                  }
                  function l(t) {
                    if (n === setTimeout) return setTimeout(t, 0);
                    if ((n === r || !n) && setTimeout)
                      return (n = setTimeout), setTimeout(t, 0);
                    try {
                      return n(t, 0);
                    } catch (e) {
                      try {
                        return n.call(null, t, 0);
                      } catch (e) {
                        return n.call(this, t, 0);
                      }
                    }
                  }
                  !(function () {
                    try {
                      n = "function" == typeof setTimeout ? setTimeout : r;
                    } catch (t) {
                      n = r;
                    }
                    try {
                      o = "function" == typeof clearTimeout ? clearTimeout : a;
                    } catch (t) {
                      o = a;
                    }
                  })();
                  var h,
                    u = [],
                    c = !1,
                    d = -1;
                  function m() {
                    c &&
                      h &&
                      ((c = !1),
                      h.length ? (u = h.concat(u)) : (d = -1),
                      u.length && p());
                  }
                  function p() {
                    if (!c) {
                      var t = l(m);
                      c = !0;
                      for (var e = u.length; e; ) {
                        for (h = u, u = []; ++d < e; ) h && h[d].run();
                        (d = -1), (e = u.length);
                      }
                      (h = null),
                        (c = !1),
                        (function (t) {
                          if (o === clearTimeout) return clearTimeout(t);
                          if ((o === a || !o) && clearTimeout)
                            return (o = clearTimeout), clearTimeout(t);
                          try {
                            o(t);
                          } catch (e) {
                            try {
                              return o.call(null, t);
                            } catch (e) {
                              return o.call(this, t);
                            }
                          }
                        })(t);
                    }
                  }
                  function f(t, e) {
                    (this.fun = t), (this.array = e);
                  }
                  function v() {}
                  (s.nextTick = function (t) {
                    var e = new Array(arguments.length - 1);
                    if (arguments.length > 1)
                      for (var i = 1; i < arguments.length; i++)
                        e[i - 1] = arguments[i];
                    u.push(new f(t, e)), 1 !== u.length || c || l(p);
                  }),
                    (f.prototype.run = function () {
                      this.fun.apply(null, this.array);
                    }),
                    (s.title = "browser"),
                    (s.env = {}),
                    (s.argv = []),
                    (s.version = ""),
                    (s.versions = {}),
                    (s.on = v),
                    (s.addListener = v),
                    (s.once = v),
                    (s.off = v),
                    (s.removeListener = v),
                    (s.removeAllListeners = v),
                    (s.emit = v),
                    (s.prependListener = v),
                    (s.prependOnceListener = v),
                    (s.listeners = function (t) {
                      return [];
                    }),
                    (s.binding = function (t) {
                      throw new Error("process.binding is not supported");
                    }),
                    (s.cwd = function () {
                      return "/";
                    }),
                    (s.chdir = function (t) {
                      throw new Error("process.chdir is not supported");
                    }),
                    (s.umask = function () {
                      return 0;
                    });
                },
                {},
              ],
              4: [
                function (t, i, n) {
                  (function (e) {
                    for (
                      var n = t("performance-now"),
                        o = "undefined" == typeof window ? e : window,
                        s = ["moz", "webkit"],
                        r = "AnimationFrame",
                        a = o["request" + r],
                        l = o["cancel" + r] || o["cancelRequest" + r],
                        h = 0;
                      !a && h < s.length;
                      h++
                    )
                      (a = o[s[h] + "Request" + r]),
                        (l =
                          o[s[h] + "Cancel" + r] ||
                          o[s[h] + "CancelRequest" + r]);
                    if (!a || !l) {
                      var u = 0,
                        c = 0,
                        d = [];
                      (a = function (t) {
                        if (0 === d.length) {
                          var e = n(),
                            i = Math.max(0, 1e3 / 60 - (e - u));
                          (u = i + e),
                            setTimeout(function () {
                              var t = d.slice(0);
                              d.length = 0;
                              for (var e = 0; e < t.length; e++)
                                if (!t[e].cancelled)
                                  try {
                                    t[e].callback(u);
                                  } catch (i) {
                                    setTimeout(function () {
                                      throw i;
                                    }, 0);
                                  }
                            }, Math.round(i));
                        }
                        return (
                          d.push({ handle: ++c, callback: t, cancelled: !1 }), c
                        );
                      }),
                        (l = function (t) {
                          for (var e = 0; e < d.length; e++)
                            d[e].handle === t && (d[e].cancelled = !0);
                        });
                    }
                    (i.exports = function (t) {
                      return a.call(o, t);
                    }),
                      (i.exports.cancel = function () {
                        l.apply(o, arguments);
                      }),
                      (i.exports.polyfill = function () {
                        (o.requestAnimationFrame = a),
                          (o.cancelAnimationFrame = l);
                      });
                  }.call(
                    this,
                    void 0 !== e
                      ? e
                      : "undefined" != typeof self
                      ? self
                      : "undefined" != typeof window
                      ? window
                      : {}
                  ));
                },
                { "performance-now": 2 },
              ],
              5: [
                function (t, e, i) {
                  "use strict";
                  var n = (function () {
                    function t(t, e) {
                      for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        (n.enumerable = n.enumerable || !1),
                          (n.configurable = !0),
                          "value" in n && (n.writable = !0),
                          Object.defineProperty(t, n.key, n);
                      }
                    }
                    return function (e, i, n) {
                      return i && t(e.prototype, i), n && t(e, n), e;
                    };
                  })();
                  var o = t("raf"),
                    s = t("object-assign"),
                    r = {
                      propertyCache: {},
                      vendors: [
                        null,
                        ["-webkit-", "webkit"],
                        ["-moz-", "Moz"],
                        ["-o-", "O"],
                        ["-ms-", "ms"],
                      ],
                      clamp: function (t, e, i) {
                        return e < i
                          ? t < e
                            ? e
                            : t > i
                            ? i
                            : t
                          : t < i
                          ? i
                          : t > e
                          ? e
                          : t;
                      },
                      data: function (t, e) {
                        return r.deserialize(t.getAttribute("data-" + e));
                      },
                      deserialize: function (t) {
                        return (
                          "true" === t ||
                          ("false" !== t &&
                            ("null" === t
                              ? null
                              : !isNaN(parseFloat(t)) && isFinite(t)
                              ? parseFloat(t)
                              : t))
                        );
                      },
                      camelCase: function (t) {
                        return t.replace(/-+(.)?/g, function (t, e) {
                          return e ? e.toUpperCase() : "";
                        });
                      },
                      accelerate: function (t) {
                        r.css(
                          t,
                          "transform",
                          "translate3d(0,0,0) rotate(0.0001deg)"
                        ),
                          r.css(t, "transform-style", "preserve-3d"),
                          r.css(t, "backface-visibility", "hidden");
                      },
                      transformSupport: function (t) {
                        for (
                          var e = document.createElement("div"),
                            i = !1,
                            n = null,
                            o = !1,
                            s = null,
                            a = null,
                            l = 0,
                            h = r.vendors.length;
                          l < h;
                          l++
                        )
                          if (
                            (null !== r.vendors[l]
                              ? ((s = r.vendors[l][0] + "transform"),
                                (a = r.vendors[l][1] + "Transform"))
                              : ((s = "transform"), (a = "transform")),
                            void 0 !== e.style[a])
                          ) {
                            i = !0;
                            break;
                          }
                        switch (t) {
                          case "2D":
                            o = i;
                            break;
                          case "3D":
                            if (i) {
                              var u =
                                  document.body ||
                                  document.createElement("body"),
                                c = document.documentElement,
                                d = c.style.overflow,
                                m = !1;
                              document.body ||
                                ((m = !0),
                                (c.style.overflow = "hidden"),
                                c.appendChild(u),
                                (u.style.overflow = "hidden"),
                                (u.style.background = "")),
                                u.appendChild(e),
                                (e.style[a] = "translate3d(1px,1px,1px)"),
                                (o =
                                  void 0 !==
                                    (n = window
                                      .getComputedStyle(e)
                                      .getPropertyValue(s)) &&
                                  n.length > 0 &&
                                  "none" !== n),
                                (c.style.overflow = d),
                                u.removeChild(e),
                                m &&
                                  (u.removeAttribute("style"),
                                  u.parentNode.removeChild(u));
                            }
                        }
                        return o;
                      },
                      css: function (t, e, i) {
                        var n = r.propertyCache[e];
                        if (!n)
                          for (var o = 0, s = r.vendors.length; o < s; o++)
                            if (
                              ((n =
                                null !== r.vendors[o]
                                  ? r.camelCase(r.vendors[o][1] + "-" + e)
                                  : e),
                              void 0 !== t.style[n])
                            ) {
                              r.propertyCache[e] = n;
                              break;
                            }
                        t.style[n] = i;
                      },
                    },
                    a = {
                      relativeInput: !1,
                      clipRelativeInput: !1,
                      inputElement: null,
                      hoverOnly: !1,
                      calibrationThreshold: 100,
                      calibrationDelay: 500,
                      supportDelay: 500,
                      calibrateX: !1,
                      calibrateY: !0,
                      invertX: !0,
                      invertY: !0,
                      limitX: !1,
                      limitY: !1,
                      scalarX: 10,
                      scalarY: 10,
                      frictionX: 0.1,
                      frictionY: 0.1,
                      originX: 0.5,
                      originY: 0.5,
                      pointerEvents: !1,
                      precision: 1,
                      onReady: null,
                      selector: null,
                    },
                    l = (function () {
                      function t(e, i) {
                        !(function (t, e) {
                          if (!(t instanceof e))
                            throw new TypeError(
                              "Cannot call a class as a function"
                            );
                        })(this, t),
                          (this.element = e);
                        var n = {
                          calibrateX: r.data(this.element, "calibrate-x"),
                          calibrateY: r.data(this.element, "calibrate-y"),
                          invertX: r.data(this.element, "invert-x"),
                          invertY: r.data(this.element, "invert-y"),
                          limitX: r.data(this.element, "limit-x"),
                          limitY: r.data(this.element, "limit-y"),
                          scalarX: r.data(this.element, "scalar-x"),
                          scalarY: r.data(this.element, "scalar-y"),
                          frictionX: r.data(this.element, "friction-x"),
                          frictionY: r.data(this.element, "friction-y"),
                          originX: r.data(this.element, "origin-x"),
                          originY: r.data(this.element, "origin-y"),
                          pointerEvents: r.data(this.element, "pointer-events"),
                          precision: r.data(this.element, "precision"),
                          relativeInput: r.data(this.element, "relative-input"),
                          clipRelativeInput: r.data(
                            this.element,
                            "clip-relative-input"
                          ),
                          hoverOnly: r.data(this.element, "hover-only"),
                          inputElement: document.querySelector(
                            r.data(this.element, "input-element")
                          ),
                          selector: r.data(this.element, "selector"),
                        };
                        for (var o in n) null === n[o] && delete n[o];
                        s(this, a, n, i),
                          this.inputElement ||
                            (this.inputElement = this.element),
                          (this.calibrationTimer = null),
                          (this.calibrationFlag = !0),
                          (this.enabled = !1),
                          (this.depthsX = []),
                          (this.depthsY = []),
                          (this.raf = null),
                          (this.bounds = null),
                          (this.elementPositionX = 0),
                          (this.elementPositionY = 0),
                          (this.elementWidth = 0),
                          (this.elementHeight = 0),
                          (this.elementCenterX = 0),
                          (this.elementCenterY = 0),
                          (this.elementRangeX = 0),
                          (this.elementRangeY = 0),
                          (this.calibrationX = 0),
                          (this.calibrationY = 0),
                          (this.inputX = 0),
                          (this.inputY = 0),
                          (this.motionX = 0),
                          (this.motionY = 0),
                          (this.velocityX = 0),
                          (this.velocityY = 0),
                          (this.onMouseMove = this.onMouseMove.bind(this)),
                          (this.onDeviceOrientation =
                            this.onDeviceOrientation.bind(this)),
                          (this.onDeviceMotion =
                            this.onDeviceMotion.bind(this)),
                          (this.onOrientationTimer =
                            this.onOrientationTimer.bind(this)),
                          (this.onMotionTimer = this.onMotionTimer.bind(this)),
                          (this.onCalibrationTimer =
                            this.onCalibrationTimer.bind(this)),
                          (this.onAnimationFrame =
                            this.onAnimationFrame.bind(this)),
                          (this.onWindowResize =
                            this.onWindowResize.bind(this)),
                          (this.windowWidth = null),
                          (this.windowHeight = null),
                          (this.windowCenterX = null),
                          (this.windowCenterY = null),
                          (this.windowRadiusX = null),
                          (this.windowRadiusY = null),
                          (this.portrait = !1),
                          (this.desktop = !navigator.userAgent.match(
                            /(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i
                          )),
                          (this.motionSupport =
                            !!window.DeviceMotionEvent && !this.desktop),
                          (this.orientationSupport =
                            !!window.DeviceOrientationEvent && !this.desktop),
                          (this.orientationStatus = 0),
                          (this.motionStatus = 0),
                          this.initialise();
                      }
                      return (
                        n(t, [
                          // {
                          //   key: "initialise",
                          //   value: function () {
                          //     void 0 === this.transform2DSupport &&
                          //       ((this.transform2DSupport =
                          //         r.transformSupport("2D")),
                          //       (this.transform3DSupport =
                          //         r.transformSupport("3D"))),
                          //       this.transform3DSupport &&
                          //         r.accelerate(this.element),
                          //       "static" ===
                          //         window
                          //           .getComputedStyle(this.element)
                          //           .getPropertyValue("position") &&
                          //         (this.element.style.position = "relative"),
                          //       this.pointerEvents ||
                          //         (this.element.style.pointerEvents = "none"),
                          //       this.updateLayers(),
                          //       this.updateDimensions(),
                          //       this.enable(),
                          //       this.queueCalibration(this.calibrationDelay);
                          //   },
                          // },
                          {
                            key: "doReadyCallback",
                            value: function () {
                              this.onReady && this.onReady();
                            },
                          },
                          {
                            key: "updateLayers",
                            value: function () {
                              this.selector
                                ? (this.layers = this.element.querySelectorAll(
                                    this.selector
                                  ))
                                : (this.layers = this.element.children),
                                this.layers.length ||
                                  console.warn(
                                    "ParallaxJS: Your scene does not have any layers."
                                  ),
                                (this.depthsX = []),
                                (this.depthsY = []);
                              for (var t = 0; t < this.layers.length; t++) {
                                var e = this.layers[t];
                                this.transform3DSupport && r.accelerate(e),
                                  (e.style.position = t
                                    ? "absolute"
                                    : "relative"),
                                  (e.style.display = "block"),
                                  (e.style.left = 0),
                                  (e.style.top = 0);
                                var i = r.data(e, "depth") || 0;
                                this.depthsX.push(r.data(e, "depth-x") || i),
                                  this.depthsY.push(r.data(e, "depth-y") || i);
                              }
                            },
                          },
                          {
                            key: "updateDimensions",
                            value: function () {
                              (this.windowWidth = window.innerWidth),
                                (this.windowHeight = window.innerHeight),
                                (this.windowCenterX =
                                  this.windowWidth * this.originX),
                                (this.windowCenterY =
                                  this.windowHeight * this.originY),
                                (this.windowRadiusX = Math.max(
                                  this.windowCenterX,
                                  this.windowWidth - this.windowCenterX
                                )),
                                (this.windowRadiusY = Math.max(
                                  this.windowCenterY,
                                  this.windowHeight - this.windowCenterY
                                ));
                            },
                          },
                          {
                            key: "updateBounds",
                            value: function () {
                              (this.bounds =
                                this.inputElement.getBoundingClientRect()),
                                (this.elementPositionX = this.bounds.left),
                                (this.elementPositionY = this.bounds.top),
                                (this.elementWidth = this.bounds.width),
                                (this.elementHeight = this.bounds.height),
                                (this.elementCenterX =
                                  this.elementWidth * this.originX),
                                (this.elementCenterY =
                                  this.elementHeight * this.originY),
                                (this.elementRangeX = Math.max(
                                  this.elementCenterX,
                                  this.elementWidth - this.elementCenterX
                                )),
                                (this.elementRangeY = Math.max(
                                  this.elementCenterY,
                                  this.elementHeight - this.elementCenterY
                                ));
                            },
                          },
                          {
                            key: "queueCalibration",
                            value: function (t) {
                              clearTimeout(this.calibrationTimer),
                                (this.calibrationTimer = setTimeout(
                                  this.onCalibrationTimer,
                                  t
                                ));
                            },
                          },
                          {
                            key: "enable",
                            value: function () {
                              this.enabled ||
                                ((this.enabled = !0),
                                this.orientationSupport
                                  ? ((this.portrait = !1),
                                    window.addEventListener(
                                      "deviceorientation",
                                      this.onDeviceOrientation
                                    ),
                                    (this.detectionTimer = setTimeout(
                                      this.onOrientationTimer,
                                      this.supportDelay
                                    )))
                                  : this.motionSupport
                                  ? ((this.portrait = !1),
                                    window.addEventListener(
                                      "devicemotion",
                                      this.onDeviceMotion
                                    ),
                                    (this.detectionTimer = setTimeout(
                                      this.onMotionTimer,
                                      this.supportDelay
                                    )))
                                  : ((this.calibrationX = 0),
                                    (this.calibrationY = 0),
                                    (this.portrait = !1),
                                    window.addEventListener(
                                      "mousemove",
                                      this.onMouseMove
                                    ),
                                    this.doReadyCallback()),
                                window.addEventListener(
                                  "resize",
                                  this.onWindowResize
                                ),
                                (this.raf = o(this.onAnimationFrame)));
                            },
                          },
                          {
                            key: "disable",
                            value: function () {
                              this.enabled &&
                                ((this.enabled = !1),
                                this.orientationSupport
                                  ? window.removeEventListener(
                                      "deviceorientation",
                                      this.onDeviceOrientation
                                    )
                                  : this.motionSupport
                                  ? window.removeEventListener(
                                      "devicemotion",
                                      this.onDeviceMotion
                                    )
                                  : window.removeEventListener(
                                      "mousemove",
                                      this.onMouseMove
                                    ),
                                window.removeEventListener(
                                  "resize",
                                  this.onWindowResize
                                ),
                                o.cancel(this.raf));
                            },
                          },
                          {
                            key: "calibrate",
                            value: function (t, e) {
                              (this.calibrateX =
                                void 0 === t ? this.calibrateX : t),
                                (this.calibrateY =
                                  void 0 === e ? this.calibrateY : e);
                            },
                          },
                          {
                            key: "invert",
                            value: function (t, e) {
                              (this.invertX = void 0 === t ? this.invertX : t),
                                (this.invertY =
                                  void 0 === e ? this.invertY : e);
                            },
                          },
                          {
                            key: "friction",
                            value: function (t, e) {
                              (this.frictionX =
                                void 0 === t ? this.frictionX : t),
                                (this.frictionY =
                                  void 0 === e ? this.frictionY : e);
                            },
                          },
                          {
                            key: "scalar",
                            value: function (t, e) {
                              (this.scalarX = void 0 === t ? this.scalarX : t),
                                (this.scalarY =
                                  void 0 === e ? this.scalarY : e);
                            },
                          },
                          {
                            key: "limit",
                            value: function (t, e) {
                              (this.limitX = void 0 === t ? this.limitX : t),
                                (this.limitY = void 0 === e ? this.limitY : e);
                            },
                          },
                          {
                            key: "origin",
                            value: function (t, e) {
                              (this.originX = void 0 === t ? this.originX : t),
                                (this.originY =
                                  void 0 === e ? this.originY : e);
                            },
                          },
                          {
                            key: "setInputElement",
                            value: function (t) {
                              (this.inputElement = t), this.updateDimensions();
                            },
                          },
                          {
                            key: "setPosition",
                            value: function (t, e, i) {
                              (e = e.toFixed(this.precision) + "px"),
                                (i = i.toFixed(this.precision) + "px"),
                                this.transform3DSupport
                                  ? r.css(
                                      t,
                                      "transform",
                                      "translate3d(" + e + "," + i + ",0)"
                                    )
                                  : this.transform2DSupport
                                  ? r.css(
                                      t,
                                      "transform",
                                      "translate(" + e + "," + i + ")"
                                    )
                                  : ((t.style.left = e), (t.style.top = i));
                            },
                          },
                          {
                            key: "onOrientationTimer",
                            value: function () {
                              this.orientationSupport &&
                              0 === this.orientationStatus
                                ? (this.disable(),
                                  (this.orientationSupport = !1),
                                  this.enable())
                                : this.doReadyCallback();
                            },
                          },
                          {
                            key: "onMotionTimer",
                            value: function () {
                              this.motionSupport && 0 === this.motionStatus
                                ? (this.disable(),
                                  (this.motionSupport = !1),
                                  this.enable())
                                : this.doReadyCallback();
                            },
                          },
                          {
                            key: "onCalibrationTimer",
                            value: function () {
                              this.calibrationFlag = !0;
                            },
                          },
                          {
                            key: "onWindowResize",
                            value: function () {
                              this.updateDimensions();
                            },
                          },
                          {
                            key: "onAnimationFrame",
                            value: function () {
                              this.updateBounds();
                              var t = this.inputX - this.calibrationX,
                                e = this.inputY - this.calibrationY;
                              (Math.abs(t) > this.calibrationThreshold ||
                                Math.abs(e) > this.calibrationThreshold) &&
                                this.queueCalibration(0),
                                this.portrait
                                  ? ((this.motionX = this.calibrateX
                                      ? e
                                      : this.inputY),
                                    (this.motionY = this.calibrateY
                                      ? t
                                      : this.inputX))
                                  : ((this.motionX = this.calibrateX
                                      ? t
                                      : this.inputX),
                                    (this.motionY = this.calibrateY
                                      ? e
                                      : this.inputY)),
                                (this.motionX *=
                                  this.elementWidth * (this.scalarX / 100)),
                                (this.motionY *=
                                  this.elementHeight * (this.scalarY / 100)),
                                isNaN(parseFloat(this.limitX)) ||
                                  (this.motionX = r.clamp(
                                    this.motionX,
                                    -this.limitX,
                                    this.limitX
                                  )),
                                isNaN(parseFloat(this.limitY)) ||
                                  (this.motionY = r.clamp(
                                    this.motionY,
                                    -this.limitY,
                                    this.limitY
                                  )),
                                (this.velocityX +=
                                  (this.motionX - this.velocityX) *
                                  this.frictionX),
                                (this.velocityY +=
                                  (this.motionY - this.velocityY) *
                                  this.frictionY);
                              for (var i = 0; i < this.layers.length; i++) {
                                var n = this.layers[i],
                                  s = this.depthsX[i],
                                  a = this.depthsY[i],
                                  l =
                                    this.velocityX *
                                    (s * (this.invertX ? -1 : 1)),
                                  h =
                                    this.velocityY *
                                    (a * (this.invertY ? -1 : 1));
                                this.setPosition(n, l, h);
                              }
                              this.raf = o(this.onAnimationFrame);
                            },
                          },
                          {
                            key: "rotate",
                            value: function (t, e) {
                              var i = (t || 0) / 30,
                                n = (e || 0) / 30,
                                o = this.windowHeight > this.windowWidth;
                              this.portrait !== o &&
                                ((this.portrait = o),
                                (this.calibrationFlag = !0)),
                                this.calibrationFlag &&
                                  ((this.calibrationFlag = !1),
                                  (this.calibrationX = i),
                                  (this.calibrationY = n)),
                                (this.inputX = i),
                                (this.inputY = n);
                            },
                          },
                          {
                            key: "onDeviceOrientation",
                            value: function (t) {
                              var e = t.beta,
                                i = t.gamma;
                              null !== e &&
                                null !== i &&
                                ((this.orientationStatus = 1),
                                this.rotate(e, i));
                            },
                          },
                          {
                            key: "onDeviceMotion",
                            value: function (t) {
                              var e = t.rotationRate.beta,
                                i = t.rotationRate.gamma;
                              null !== e &&
                                null !== i &&
                                ((this.motionStatus = 1), this.rotate(e, i));
                            },
                          },
                          {
                            key: "onMouseMove",
                            value: function (t) {
                              var e = t.clientX,
                                i = t.clientY;
                              if (
                                this.hoverOnly &&
                                (e < this.elementPositionX ||
                                  e >
                                    this.elementPositionX + this.elementWidth ||
                                  i < this.elementPositionY ||
                                  i >
                                    this.elementPositionY + this.elementHeight)
                              )
                                return (
                                  (this.inputX = 0), void (this.inputY = 0)
                                );
                              this.relativeInput
                                ? (this.clipRelativeInput &&
                                    ((e = Math.max(e, this.elementPositionX)),
                                    (e = Math.min(
                                      e,
                                      this.elementPositionX + this.elementWidth
                                    )),
                                    (i = Math.max(i, this.elementPositionY)),
                                    (i = Math.min(
                                      i,
                                      this.elementPositionY + this.elementHeight
                                    ))),
                                  this.elementRangeX &&
                                    this.elementRangeY &&
                                    ((this.inputX =
                                      (e -
                                        this.elementPositionX -
                                        this.elementCenterX) /
                                      this.elementRangeX),
                                    (this.inputY =
                                      (i -
                                        this.elementPositionY -
                                        this.elementCenterY) /
                                      this.elementRangeY)))
                                : this.windowRadiusX &&
                                  this.windowRadiusY &&
                                  ((this.inputX =
                                    (e - this.windowCenterX) /
                                    this.windowRadiusX),
                                  (this.inputY =
                                    (i - this.windowCenterY) /
                                    this.windowRadiusY));
                            },
                          },
                          {
                            key: "destroy",
                            value: function () {
                              this.disable(),
                                clearTimeout(this.calibrationTimer),
                                clearTimeout(this.detectionTimer),
                                this.element.removeAttribute("style");
                              for (var t = 0; t < this.layers.length; t++)
                                this.layers[t].removeAttribute("style");
                              delete this.element, delete this.layers;
                            },
                          },
                          {
                            key: "version",
                            value: function () {
                              return "3.1.0";
                            },
                          },
                        ]),
                        t
                      );
                    })();
                  e.exports = l;
                },
                { "object-assign": 1, raf: 4 },
              ],
            },
            {},
            [5]
          )(5);
        });
      },
      { process: "pBGv" },
    ],
    EtDA: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var r = t(require("parallax-js")),
          e = require("../config");
        function t(r) {
          return r && r.__esModule ? r : { default: r };
        }
        function n(r) {
          return u(r) || i(r) || a(r) || o();
        }
        function o() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function a(r, e) {
          if (r) {
            if ("string" == typeof r) return l(r, e);
            var t = Object.prototype.toString.call(r).slice(8, -1);
            return (
              "Object" === t && r.constructor && (t = r.constructor.name),
              "Map" === t || "Set" === t
                ? Array.from(r)
                : "Arguments" === t ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                ? l(r, e)
                : void 0
            );
          }
        }
        function i(r) {
          if (
            ("undefined" != typeof Symbol && null != r[Symbol.iterator]) ||
            null != r["@@iterator"]
          )
            return Array.from(r);
        }
        function u(r) {
          if (Array.isArray(r)) return l(r);
        }
        function l(r, e) {
          (null == e || e > r.length) && (e = r.length);
          for (var t = 0, n = new Array(e); t < e; t++) n[t] = r[t];
          return n;
        }
        function c(r, e) {
          if (!(r instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function f(r, e) {
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(r, n.key, n);
          }
        }
        function s(r, e, t) {
          return e && f(r.prototype, e), t && f(r, t), r;
        }
        var p = e.appCssClasses.parallaxBox,
          y = (function () {
            function e() {
              c(this, e);
            }
            return (
              s(e, [
                {
                  key: "init",
                  value: function () {
                    n(document.querySelectorAll("." + p)).forEach(function (e) {
                      new r.default(e, {
                        frictionX: 0.1,
                        frictionY: 0.05,
                        scalarX: 3,
                        scalarY: 3,
                        relativeInput: !0,
                        hoverOnly: !0,
                      });
                    });
                  },
                },
              ]),
              e
            );
          })();
        exports.default = y;
      },
      { "parallax-js": "wcj9", "../config": "itQ5" },
    ],
    xtpU: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.DATASET_NAMES =
            exports.CSS_CLASSES =
            exports.SLIDE_ANIMATION_DURATION =
            exports.DIRECTION_TYPES =
            exports.MEDIA_TYPES =
              void 0);
        var e = require("../../config"),
          p = {
            image: "image",
            iframe: "iframe",
            coub: "coub",
            video: "video",
          };
        exports.MEDIA_TYPES = p;
        var i = { next: "next", prev: "prev", point: "point" };
        exports.DIRECTION_TYPES = i;
        var o = 320;
        exports.SLIDE_ANIMATION_DURATION = o;
        var r = {
          bodyFixed: e.appCssClasses.bodyFixed,
          parentNode: e.appCssClasses.gallery,
          slidePreviewNode: "js-gallery__slide-preview",
          popupNode: "js-gallery__popup",
          popupCloseNode: "js-gallery__popup-close",
          popupPreviewsNode: "js-gallery__popup-previews",
          viewParentNode: "js-gallery__popup-view",
          prevButtonNode: "js-gallery__popup-nav-prev",
          nextButtonNode: "js-gallery__popup-nav-next",
          popupVisible: "gallery-popup_visible",
          activePreview: "gallery__slide_active",
          viewMedia: "gallery-popup__view--media",
          viewMediaVisible: "gallery-popup__view--media_visible",
          viewMedia_hideToLeft: "gallery-popup__view--media_hide-to-left",
          viewMedia_hideToRight: "gallery-popup__view--media_hide-to-right",
          viewMedia_showFromRight: "gallery-popup__view--media_show-from-right",
          viewMedia_showFromLeft: "gallery-popup__view--media_show-from-left",
        };
        exports.CSS_CLASSES = r;
        var l = { fullSizeMediaUrl: "data-full-size-media-url" };
        exports.DATASET_NAMES = l;
      },
      { "../../config": "itQ5" },
    ],
    UASB: [
      function (require, module, exports) {
        module.exports = "/assets/icon-plus.05a9aea8.svg";
      },
      {},
    ],
    Zjb0: [
      function (require, module, exports) {
        module.exports = "/assets/icon-arrow.94143a33.svg";
      },
      {},
    ],
    qsf6: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.popupTemplate = void 0);
        var e = s(require("../../assets/img/svg/icon-plus.svg")),
          p = s(require("../../assets/img/svg/icon-arrow.svg"));
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var l =
          '\n<div class="gallery-popup js-gallery__popup">\n    <div class="gallery-popup__close js-gallery__popup-close">\n        <svg>\n            <use href="'
            .concat(
              e.default,
              '" />\n        </svg>\n    </div>\n\n    <div class="gallery-popup__content">\n        <div class="gallery-popup__nav-prev js-gallery__popup-nav-prev">\n            <svg>\n                <use href="'
            )
            .concat(
              p.default,
              '" />\n            </svg>\n        </div>\n        <div class="gallery-popup__nav-next js-gallery__popup-nav-next">\n            <svg>\n                <use href="'
            )
            .concat(
              p.default,
              '" />\n            </svg>\n        </div>\n        <div class="gallery-popup__view js-gallery__popup-view"></div>\n        <div class="gallery-popup__previews js-gallery__popup-previews"></div>\n    </div>\n</div>\n'
            );
        exports.popupTemplate = l;
      },
      {
        "../../assets/img/svg/icon-plus.svg": "UASB",
        "../../assets/img/svg/icon-arrow.svg": "Zjb0",
      },
    ],
    SsIm: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports._buildPopup = t),
          (exports._initPopupMedia = a);
        var e = require("./config"),
          i = require("./_popup-template");
        function t() {
          var e = document.createElement("div");
          (e.innerHTML = i.popupTemplate),
            this.parentNode.append(e),
            this._initNodes(),
            this._initEvents();
        }
        function a() {
          var i = this;
          this.slidePreviewsArray.forEach(function (t, a) {
            var d = t.cloneNode(!0),
              s = null;
            switch (
              (document
                .createElement("div")
                .classList.add(e.CSS_CLASSES.viewMedia),
              t.dataset.mediaType)
            ) {
              case e.MEDIA_TYPES.image:
              default:
                ((s = document.createElement("img")).src =
                  t.dataset.fullSizeMediaUrl),
                  s.classList.add(e.CSS_CLASSES.viewMedia);
            }
            i.mediaToViewsArray.push(s),
              i.popupPreviewsArray.push(d),
              i.popupPreviewsNode.appendChild(d),
              i.viewParentNode.appendChild(s),
              d.addEventListener("click", function () {
                i.showMedia(a);
              });
          }),
            (this.state.isPopupReady = !0);
        }
      },
      { "./config": "xtpU", "./_popup-template": "qsf6" },
    ],
    UG6M: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = require("./config"),
          i = require("./_build-popup");
        function t(e) {
          return n(e) || r(e) || o(e) || s();
        }
        function s() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function o(e, i) {
          if (e) {
            if ("string" == typeof e) return a(e, i);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === t && e.constructor && (t = e.constructor.name),
              "Map" === t || "Set" === t
                ? Array.from(e)
                : "Arguments" === t ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                ? a(e, i)
                : void 0
            );
          }
        }
        function r(e) {
          if (
            ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        }
        function n(e) {
          if (Array.isArray(e)) return a(e);
        }
        function a(e, i) {
          (null == i || i > e.length) && (i = e.length);
          for (var t = 0, s = new Array(i); t < i; t++) s[t] = e[t];
          return s;
        }
        function S(e, i) {
          if (!(e instanceof i))
            throw new TypeError("Cannot call a class as a function");
        }
        function d(e, i) {
          for (var t = 0; t < i.length; t++) {
            var s = i[t];
            (s.enumerable = s.enumerable || !1),
              (s.configurable = !0),
              "value" in s && (s.writable = !0),
              Object.defineProperty(e, s.key, s);
          }
        }
        function u(e, i, t) {
          return i && d(e.prototype, i), t && d(e, t), e;
        }
        function c(e, i, t) {
          return (
            i in e
              ? Object.defineProperty(e, i, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[i] = t),
            e
          );
        }
        var l = (function () {
          function s(e) {
            S(this, s),
              c(this, "state", {
                isPopupOpen: !1,
                isPopupReady: !1,
                currentSlideIndex: 0,
              }),
              (this.parentNode = e),
              (this._buildPopup = i._buildPopup.bind(this)),
              (this._initPopupMedia = i._initPopupMedia.bind(this)),
              this._initInitialNodes(),
              this._initInitialEvents(),
              this._buildPopup(),
              (this.fullImagesUrls = []),
              (this.mediaToViewsArray = []),
              (this.popupPreviewsArray = []);
          }
          return (
            u(s, [
              {
                key: "_initInitialNodes",
                value: function () {
                  this.slidePreviewsArray = t(
                    this.parentNode.querySelectorAll(
                      "." + e.CSS_CLASSES.slidePreviewNode
                    )
                  );
                },
              },
              {
                key: "_initInitialEvents",
                value: function () {
                  var i = this;
                  this.slidePreviewsArray.forEach(function (t) {
                    t.addEventListener("click", function (t) {
                      var s = t.target.closest(
                        "." + e.CSS_CLASSES.slidePreviewNode
                      );
                      i._clickPreview(s);
                    });
                  });
                },
              },
              {
                key: "_initNodes",
                value: function () {
                  (this.popupNode = this.parentNode.querySelector(
                    "." + e.CSS_CLASSES.popupNode
                  )),
                    (this.popupPreviewsNode = this.parentNode.querySelector(
                      "." + e.CSS_CLASSES.popupPreviewsNode
                    )),
                    (this.popupCloseNode = this.parentNode.querySelector(
                      "." + e.CSS_CLASSES.popupCloseNode
                    )),
                    (this.viewParentNode = this.parentNode.querySelector(
                      "." + e.CSS_CLASSES.viewParentNode
                    )),
                    (this.prevButtonNode = this.parentNode.querySelector(
                      "." + e.CSS_CLASSES.prevButtonNode
                    )),
                    (this.nextButtonNode = this.parentNode.querySelector(
                      "." + e.CSS_CLASSES.nextButtonNode
                    ));
                },
              },
              {
                key: "_initEvents",
                value: function () {
                  var e = this;
                  this.popupCloseNode.addEventListener("click", function (i) {
                    i.preventDefault(), e.closePopup();
                  }),
                    this.prevButtonNode.addEventListener("click", function () {
                      e._onPrevClick();
                    }),
                    this.nextButtonNode.addEventListener("click", function () {
                      e._onNextClick();
                    }),
                    window.addEventListener("keydown", function (i) {
                      if (e.state.isPopupOpen)
                        switch (i.key) {
                          case "ArrowLeft":
                            e._onPrevClick();
                            break;
                          case "ArrowRight":
                            e._onNextClick();
                            break;
                          case "Escape":
                            e.closePopup();
                        }
                    });
                },
              },
              {
                key: "_onPrevClick",
                value: function () {
                  var i =
                    this.state.currentSlideIndex > 0
                      ? this.state.currentSlideIndex - 1
                      : this.slidePreviewsArray.length - 1;
                  this.showMedia(i, e.DIRECTION_TYPES.prev);
                },
              },
              {
                key: "_onNextClick",
                value: function () {
                  var i =
                    this.state.currentSlideIndex <
                    this.slidePreviewsArray.length - 1
                      ? this.state.currentSlideIndex + 1
                      : 0;
                  this.showMedia(i, e.DIRECTION_TYPES.next);
                },
              },
              {
                key: "_clickPreview",
                value: function (e) {
                  this.showPopup(),
                    this.showMedia(this.slidePreviewsArray.indexOf(e));
                },
              },
              {
                key: "showMedia",
                value: function (i, t) {
                  var s = this.state.currentSlideIndex,
                    o = this.mediaToViewsArray[s],
                    r = "undefined" === i ? s : i;
                  this.popupPreviewsArray[s].classList.remove(
                    e.CSS_CLASSES.activePreview
                  ),
                    this.popupPreviewsArray[r].classList.add(
                      e.CSS_CLASSES.activePreview
                    ),
                    this._showMedia(this.mediaToViewsArray[r], t),
                    s !== r && this._hideMedia(o, t),
                    (this.state.currentSlideIndex = r);
                },
              },
              {
                key: "_showMedia",
                value: function (i, t) {
                  switch (t) {
                    case e.DIRECTION_TYPES.next:
                      i.classList.add(e.CSS_CLASSES.viewMedia_showFromRight),
                        setTimeout(
                          function () {
                            i.classList.remove(
                              e.CSS_CLASSES.viewMedia_showFromRight
                            );
                          }.bind(this),
                          e.SLIDE_ANIMATION_DURATION
                        );
                      break;
                    case e.DIRECTION_TYPES.prev:
                      i.classList.add(e.CSS_CLASSES.viewMedia_showFromLeft),
                        setTimeout(
                          function () {
                            i.classList.remove(
                              e.CSS_CLASSES.viewMedia_showFromLeft
                            );
                          }.bind(this),
                          e.SLIDE_ANIMATION_DURATION
                        );
                  }
                  i.classList.add(e.CSS_CLASSES.viewMediaVisible);
                },
              },
              {
                key: "_hideMedia",
                value: function (i, t) {
                  switch (t) {
                    case e.DIRECTION_TYPES.next:
                      i.classList.add(e.CSS_CLASSES.viewMedia_hideToLeft),
                        setTimeout(
                          function () {
                            i.classList.remove(
                              e.CSS_CLASSES.viewMedia_hideToLeft
                            );
                          }.bind(this),
                          e.SLIDE_ANIMATION_DURATION
                        );
                      break;
                    case e.DIRECTION_TYPES.prev:
                      i.classList.add(e.CSS_CLASSES.viewMedia_hideToRight),
                        setTimeout(
                          function () {
                            i.classList.remove(
                              e.CSS_CLASSES.viewMedia_hideToRight
                            );
                          }.bind(this),
                          e.SLIDE_ANIMATION_DURATION
                        );
                  }
                  i.classList.remove(e.CSS_CLASSES.viewMediaVisible);
                },
              },
              {
                key: "showPopup",
                value: function () {
                  this.state.isPopupReady || this._initPopupMedia(),
                    this.popupNode.classList.add(e.CSS_CLASSES.popupVisible),
                    document.body.classList.add(e.CSS_CLASSES.bodyFixed),
                    (this.state.isPopupOpen = !0);
                },
              },
              {
                key: "closePopup",
                value: function () {
                  this.popupNode.classList.remove(e.CSS_CLASSES.popupVisible),
                    document.body.classList.remove(e.CSS_CLASSES.bodyFixed),
                    (this.state.isPopupOpen = !1);
                },
              },
            ]),
            s
          );
        })();
        exports.default = l;
      },
      { "./config": "xtpU", "./_build-popup": "SsIm" },
    ],
    zEjv: [
      function (require, module, exports) {
        var define;
        var t;
        !(function (n, e) {
          "object" == typeof exports && "object" == typeof module
            ? (module.exports = e())
            : "function" == typeof t && t.amd
            ? t([], e)
            : "object" == typeof exports
            ? (exports.Splide = e())
            : (n.Splide = e());
        })(self, function () {
          return (() => {
            "use strict";
            var t = {
                311: (t, n, e) => {
                  e.r(n), e.d(n, { default: () => Tt });
                  var i = {};
                  e.r(i),
                    e.d(i, {
                      CREATED: () => G,
                      DESTROYED: () => K,
                      IDLE: () => Y,
                      MOUNTED: () => X,
                      MOVING: () => J,
                    });
                  const o = function () {
                      var t = [];
                      function n(t) {
                        t.elm &&
                          t.elm.removeEventListener(
                            t.event,
                            t.handler,
                            t.options
                          );
                      }
                      return {
                        on: function (n, e, i, o) {
                          void 0 === i && (i = null),
                            void 0 === o && (o = {}),
                            n.split(" ").forEach(function (n) {
                              i && i.addEventListener(n, e, o),
                                t.push({
                                  event: n,
                                  handler: e,
                                  elm: i,
                                  options: o,
                                });
                            });
                        },
                        off: function (e, i) {
                          void 0 === i && (i = null),
                            e.split(" ").forEach(function (e) {
                              t = t.filter(function (t) {
                                return (
                                  !t ||
                                  t.event !== e ||
                                  t.elm !== i ||
                                  (n(t), !1)
                                );
                              });
                            });
                        },
                        emit: function (n) {
                          for (
                            var e = arguments.length,
                              i = new Array(e > 1 ? e - 1 : 0),
                              o = 1;
                            o < e;
                            o++
                          )
                            i[o - 1] = arguments[o];
                          t.forEach(function (t) {
                            t.elm ||
                              t.event.split(".")[0] !== n ||
                              t.handler.apply(t, i);
                          });
                        },
                        destroy: function () {
                          t.forEach(n), (t = []);
                        },
                      };
                    },
                    r = function (t) {
                      var n = t;
                      return {
                        set: function (t) {
                          n = t;
                        },
                        is: function (t) {
                          return t === n;
                        },
                      };
                    };
                  function s() {
                    return (s =
                      Object.assign ||
                      function (t) {
                        for (var n = 1; n < arguments.length; n++) {
                          var e = arguments[n];
                          for (var i in e)
                            Object.prototype.hasOwnProperty.call(e, i) &&
                              (t[i] = e[i]);
                        }
                        return t;
                      }).apply(this, arguments);
                  }
                  var a = Object.keys;
                  function u(t, n) {
                    a(t).some(function (e, i) {
                      return n(t[e], e, i);
                    });
                  }
                  function c(t) {
                    return a(t).map(function (n) {
                      return t[n];
                    });
                  }
                  function d(t) {
                    return "object" == typeof t;
                  }
                  function f(t, n) {
                    var e = s({}, t);
                    return (
                      u(n, function (t, n) {
                        d(t)
                          ? (d(e[n]) || (e[n] = {}), (e[n] = f(e[n], t)))
                          : (e[n] = t);
                      }),
                      e
                    );
                  }
                  function l(t) {
                    return Array.isArray(t) ? t : [t];
                  }
                  function h(t, n, e) {
                    return Math.min(Math.max(t, n > e ? e : n), n > e ? n : e);
                  }
                  function p(t, n) {
                    var e = 0;
                    return t.replace(/%s/g, function () {
                      return l(n)[e++];
                    });
                  }
                  function g(t) {
                    var n = typeof t;
                    return "number" === n && t > 0
                      ? parseFloat(t) + "px"
                      : "string" === n
                      ? t
                      : "";
                  }
                  function v(t) {
                    return t < 10 ? "0" + t : t;
                  }
                  function m(t, n) {
                    if ("string" == typeof n) {
                      var e = w("div", {});
                      P(e, { position: "absolute", width: n }),
                        k(t, e),
                        (n = e.clientWidth),
                        _(e);
                    }
                    return +n || 0;
                  }
                  function y(t, n) {
                    return t ? t.querySelector(n.split(" ")[0]) : null;
                  }
                  function b(t, n) {
                    return x(t, n)[0];
                  }
                  function x(t, n) {
                    return t
                      ? c(t.children).filter(function (t) {
                          return A(t, n.split(" ")[0]) || t.tagName === n;
                        })
                      : [];
                  }
                  function w(t, n) {
                    var e = document.createElement(t);
                    return (
                      u(n, function (t, n) {
                        return I(e, n, t);
                      }),
                      e
                    );
                  }
                  function E(t) {
                    var n = w("div", {});
                    return (n.innerHTML = t), n.firstChild;
                  }
                  function _(t) {
                    l(t).forEach(function (t) {
                      if (t) {
                        var n = t.parentElement;
                        n && n.removeChild(t);
                      }
                    });
                  }
                  function k(t, n) {
                    t && t.appendChild(n);
                  }
                  function S(t, n) {
                    if (t && n) {
                      var e = n.parentElement;
                      e && e.insertBefore(t, n);
                    }
                  }
                  function P(t, n) {
                    t &&
                      u(n, function (n, e) {
                        null !== n && (t.style[e] = n);
                      });
                  }
                  function C(t, n, e) {
                    t &&
                      l(n).forEach(function (n) {
                        n && t.classList[e ? "remove" : "add"](n);
                      });
                  }
                  function O(t, n) {
                    C(t, n, !1);
                  }
                  function z(t, n) {
                    C(t, n, !0);
                  }
                  function A(t, n) {
                    return !!t && t.classList.contains(n);
                  }
                  function I(t, n, e) {
                    t && t.setAttribute(n, e);
                  }
                  function M(t, n) {
                    return t ? t.getAttribute(n) : "";
                  }
                  function T(t, n) {
                    l(n).forEach(function (n) {
                      l(t).forEach(function (t) {
                        return t && t.removeAttribute(n);
                      });
                    });
                  }
                  function L(t) {
                    return t.getBoundingClientRect();
                  }
                  var H = "slide",
                    j = "loop",
                    W = "fade";
                  const N = function (t, n) {
                      var e, i;
                      return {
                        mount: function () {
                          (e = n.Elements.list),
                            t.on(
                              "transitionend",
                              function (t) {
                                t.target === e && i && i();
                              },
                              e
                            );
                        },
                        start: function (o, r, s, a, u) {
                          var c = t.options,
                            d = n.Controller.edgeIndex,
                            f = c.speed;
                          (i = u),
                            t.is(H) &&
                              ((0 === s && r >= d) || (s >= d && 0 === r)) &&
                              (f = c.rewindSpeed || f),
                            P(e, {
                              transition: "transform " + f + "ms " + c.easing,
                              transform:
                                "translate(" + a.x + "px," + a.y + "px)",
                            });
                        },
                      };
                    },
                    q = function (t, n) {
                      function e(e) {
                        var i = t.options;
                        P(n.Elements.slides[e], {
                          transition: "opacity " + i.speed + "ms " + i.easing,
                        });
                      }
                      return {
                        mount: function () {
                          e(t.index);
                        },
                        start: function (t, i, o, r, s) {
                          var a = n.Elements.track;
                          P(a, { height: g(a.clientHeight) }),
                            e(i),
                            setTimeout(function () {
                              s(), P(a, { height: "" });
                            });
                        },
                      };
                    };
                  var R = "[SPLIDE]";
                  function D(t) {
                    console.error(R + " " + t);
                  }
                  function F(t, n) {
                    if (!t) throw new Error(n);
                  }
                  var U = "splide",
                    B = {
                      active: "is-active",
                      visible: "is-visible",
                      loading: "is-loading",
                    },
                    V = {
                      type: "slide",
                      rewind: !1,
                      speed: 400,
                      rewindSpeed: 0,
                      waitForTransition: !0,
                      width: 0,
                      height: 0,
                      fixedWidth: 0,
                      fixedHeight: 0,
                      heightRatio: 0,
                      autoWidth: !1,
                      autoHeight: !1,
                      perPage: 1,
                      perMove: 0,
                      clones: 0,
                      start: 0,
                      focus: !1,
                      gap: 0,
                      padding: 0,
                      arrows: !0,
                      arrowPath: "",
                      pagination: !0,
                      autoplay: !1,
                      interval: 5e3,
                      pauseOnHover: !0,
                      pauseOnFocus: !0,
                      resetProgress: !0,
                      lazyLoad: !1,
                      preloadPages: 1,
                      easing: "cubic-bezier(.42,.65,.27,.99)",
                      keyboard: "global",
                      drag: !0,
                      dragAngleThreshold: 30,
                      swipeDistanceThreshold: 150,
                      flickVelocityThreshold: 0.6,
                      flickPower: 600,
                      flickMaxPages: 1,
                      direction: "ltr",
                      cover: !1,
                      accessibility: !0,
                      slideFocus: !0,
                      isNavigation: !1,
                      trimSpace: !0,
                      updateOnMove: !1,
                      throttle: 100,
                      destroy: !1,
                      breakpoints: !1,
                      classes: {
                        root: U,
                        slider: U + "__slider",
                        track: U + "__track",
                        list: U + "__list",
                        slide: U + "__slide",
                        container: U + "__slide__container",
                        arrows: U + "__arrows",
                        arrow: U + "__arrow",
                        prev: U + "__arrow--prev",
                        next: U + "__arrow--next",
                        pagination: U + "__pagination",
                        page: U + "__pagination__page",
                        clone: U + "__slide--clone",
                        progress: U + "__progress",
                        bar: U + "__progress__bar",
                        autoplay: U + "__autoplay",
                        play: U + "__play",
                        pause: U + "__pause",
                        spinner: U + "__spinner",
                        sr: U + "__sr",
                      },
                      i18n: {
                        prev: "Previous slide",
                        next: "Next slide",
                        first: "Go to first slide",
                        last: "Go to last slide",
                        slideX: "Go to slide %s",
                        pageX: "Go to page %s",
                        play: "Start autoplay",
                        pause: "Pause autoplay",
                      },
                    },
                    G = 1,
                    X = 2,
                    Y = 3,
                    J = 4,
                    K = 5;
                  function Q(t, n) {
                    for (var e = 0; e < n.length; e++) {
                      var i = n[e];
                      (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(t, i.key, i);
                    }
                  }
                  var Z = (function () {
                    function t(t, n, e) {
                      void 0 === n && (n = {}),
                        void 0 === e && (e = {}),
                        (this.root =
                          t instanceof Element ? t : document.querySelector(t)),
                        F(this.root, "An invalid element/selector was given."),
                        (this.Components = null),
                        (this.Event = o()),
                        (this.State = r(G)),
                        (this.STATES = i),
                        (this._o = f(V, n)),
                        (this._i = 0),
                        (this._c = e),
                        (this._e = {}),
                        (this._t = null);
                    }
                    var n,
                      e,
                      s,
                      a = t.prototype;
                    return (
                      (a.mount = function (t, n) {
                        var e = this;
                        void 0 === t && (t = this._e),
                          void 0 === n && (n = this._t),
                          this.State.set(G),
                          (this._e = t),
                          (this._t = n),
                          (this.Components = (function (t, n, e) {
                            var i = {};
                            return (
                              u(n, function (n, e) {
                                i[e] = n(t, i, e.toLowerCase());
                              }),
                              e || (e = t.is(W) ? q : N),
                              (i.Transition = e(t, i)),
                              i
                            );
                          })(this, f(this._c, t), n));
                        try {
                          u(this.Components, function (t, n) {
                            var i = t.required;
                            void 0 === i || i
                              ? t.mount && t.mount()
                              : delete e.Components[n];
                          });
                        } catch (o) {
                          return void D(o.message);
                        }
                        var i = this.State;
                        return (
                          i.set(X),
                          u(this.Components, function (t) {
                            t.mounted && t.mounted();
                          }),
                          this.emit("mounted"),
                          i.set(Y),
                          this.emit("ready"),
                          P(this.root, { visibility: "visible" }),
                          this.on("move drag", function () {
                            return i.set(J);
                          }).on("moved dragged", function () {
                            return i.set(Y);
                          }),
                          this
                        );
                      }),
                      (a.sync = function (t) {
                        return (this.sibling = t), this;
                      }),
                      (a.on = function (t, n, e, i) {
                        return (
                          void 0 === e && (e = null),
                          void 0 === i && (i = {}),
                          this.Event.on(t, n, e, i),
                          this
                        );
                      }),
                      (a.off = function (t, n) {
                        return (
                          void 0 === n && (n = null), this.Event.off(t, n), this
                        );
                      }),
                      (a.emit = function (t) {
                        for (
                          var n,
                            e = arguments.length,
                            i = new Array(e > 1 ? e - 1 : 0),
                            o = 1;
                          o < e;
                          o++
                        )
                          i[o - 1] = arguments[o];
                        return (
                          (n = this.Event).emit.apply(n, [t].concat(i)), this
                        );
                      }),
                      (a.go = function (t, n) {
                        return (
                          void 0 === n && (n = this.options.waitForTransition),
                          (this.State.is(Y) || (this.State.is(J) && !n)) &&
                            this.Components.Controller.go(t, !1),
                          this
                        );
                      }),
                      (a.is = function (t) {
                        return t === this._o.type;
                      }),
                      (a.add = function (t, n) {
                        return (
                          void 0 === n && (n = -1),
                          this.Components.Elements.add(
                            t,
                            n,
                            this.refresh.bind(this)
                          ),
                          this
                        );
                      }),
                      (a.remove = function (t) {
                        return (
                          this.Components.Elements.remove(t),
                          this.refresh(),
                          this
                        );
                      }),
                      (a.refresh = function () {
                        return (
                          this.emit("refresh:before")
                            .emit("refresh")
                            .emit("resize"),
                          this
                        );
                      }),
                      (a.destroy = function (t) {
                        var n = this;
                        if ((void 0 === t && (t = !0), !this.State.is(G)))
                          return (
                            c(this.Components)
                              .reverse()
                              .forEach(function (n) {
                                n.destroy && n.destroy(t);
                              }),
                            this.emit("destroy", t),
                            this.Event.destroy(),
                            this.State.set(K),
                            this
                          );
                        this.on("ready", function () {
                          return n.destroy(t);
                        });
                      }),
                      (n = t),
                      (e = [
                        {
                          key: "index",
                          get: function () {
                            return this._i;
                          },
                          set: function (t) {
                            this._i = parseInt(t);
                          },
                        },
                        {
                          key: "length",
                          get: function () {
                            return this.Components.Elements.length;
                          },
                        },
                        {
                          key: "options",
                          get: function () {
                            return this._o;
                          },
                          set: function (t) {
                            var n = this.State.is(G);
                            n || this.emit("update"),
                              (this._o = f(this._o, t)),
                              n || this.emit("updated", this._o);
                          },
                        },
                        {
                          key: "classes",
                          get: function () {
                            return this._o.classes;
                          },
                        },
                        {
                          key: "i18n",
                          get: function () {
                            return this._o.i18n;
                          },
                        },
                      ]) && Q(n.prototype, e),
                      s && Q(n, s),
                      t
                    );
                  })();
                  const $ = function (t) {
                    var n = M(t.root, "data-splide");
                    if (n)
                      try {
                        t.options = JSON.parse(n);
                      } catch (e) {
                        D(e.message);
                      }
                    return {
                      mount: function () {
                        t.State.is(G) && (t.index = t.options.start);
                      },
                    };
                  };
                  var tt = "ttb";
                  const nt = function (t, n) {
                    var e = t.root,
                      i = t.classes,
                      o = [];
                    if (!e.id) {
                      window.splide = window.splide || {};
                      var r = window.splide.uid || 0;
                      (window.splide.uid = ++r), (e.id = "splide" + v(r));
                    }
                    var s = {
                      mount: function () {
                        var n = this;
                        this.init(),
                          t
                            .on("refresh", function () {
                              n.destroy(), n.init();
                            })
                            .on("updated", function () {
                              z(e, a()), O(e, a());
                            });
                      },
                      destroy: function () {
                        o.forEach(function (t) {
                          t.destroy();
                        }),
                          (o = []),
                          z(e, a());
                      },
                      init: function () {
                        var t = this;
                        !(function () {
                          (s.slider = b(e, i.slider)),
                            (s.track = y(e, "." + i.track)),
                            (s.list = b(s.track, i.list)),
                            F(
                              s.track && s.list,
                              "Track or list was not found."
                            ),
                            (s.slides = x(s.list, i.slide));
                          var t = d(i.arrows);
                          s.arrows = {
                            prev: y(t, "." + i.prev),
                            next: y(t, "." + i.next),
                          };
                          var n = d(i.autoplay);
                          (s.bar = y(d(i.progress), "." + i.bar)),
                            (s.play = y(n, "." + i.play)),
                            (s.pause = y(n, "." + i.pause)),
                            (s.track.id = s.track.id || e.id + "-track"),
                            (s.list.id = s.list.id || e.id + "-list");
                        })(),
                          O(e, a()),
                          this.slides.forEach(function (n, e) {
                            t.register(n, e, -1);
                          });
                      },
                      register: function (n, e, i) {
                        var r = (function (t, n, e, i) {
                          var o = t.options.updateOnMove,
                            r =
                              "ready.slide updated.slide resized.slide moved.slide" +
                              (o ? " move.slide" : ""),
                            s = {
                              slide: i,
                              index: n,
                              realIndex: e,
                              container: b(i, t.classes.container),
                              isClone: e > -1,
                              mount: function () {
                                var s = this;
                                this.isClone ||
                                  (i.id = t.root.id + "-slide" + v(n + 1)),
                                  t
                                    .on(r, function () {
                                      return s.update();
                                    })
                                    .on("update.slide", u)
                                    .on(
                                      "click",
                                      function () {
                                        return t.emit("click", s);
                                      },
                                      i
                                    ),
                                  o &&
                                    t.on("move.slide", function (t) {
                                      t === e && a(!0, !1);
                                    }),
                                  P(i, { display: "" }),
                                  (this.styles = M(i, "style") || "");
                              },
                              destroy: function () {
                                t.off(r).off("update.slide").off("click", i),
                                  z(i, c(B)),
                                  u(),
                                  T(this.container, "style");
                              },
                              update: function () {
                                a(this.isActive(), !1), a(this.isVisible(), !0);
                              },
                              isActive: function () {
                                return t.index === n;
                              },
                              isVisible: function () {
                                var n = this.isActive();
                                if (t.is(W) || n) return n;
                                var e = Math.ceil,
                                  o = L(t.Components.Elements.track),
                                  r = L(i);
                                return t.options.direction === tt
                                  ? o.top <= r.top && r.bottom <= e(o.bottom)
                                  : o.left <= r.left && r.right <= e(o.right);
                              },
                              isWithin: function (e, i) {
                                var o = Math.abs(e - n);
                                return (
                                  t.is(H) ||
                                    this.isClone ||
                                    (o = Math.min(o, t.length - o)),
                                  o < i
                                );
                              },
                            };
                          function a(n, e) {
                            var o = e ? "visible" : "active",
                              r = B[o];
                            n
                              ? (O(i, r), t.emit("" + o, s))
                              : A(i, r) &&
                                (z(i, r), t.emit(e ? "hidden" : "inactive", s));
                          }
                          function u() {
                            I(i, "style", s.styles);
                          }
                          return s;
                        })(t, e, i, n);
                        r.mount(), o.push(r);
                      },
                      getSlide: function (t) {
                        return o.filter(function (n) {
                          return n.index === t;
                        })[0];
                      },
                      getSlides: function (t) {
                        return t
                          ? o
                          : o.filter(function (t) {
                              return !t.isClone;
                            });
                      },
                      getSlidesByPage: function (e) {
                        var i = n.Controller.toIndex(e),
                          r = t.options,
                          s = !1 !== r.focus ? 1 : r.perPage;
                        return o.filter(function (t) {
                          var n = t.index;
                          return i <= n && n < i + s;
                        });
                      },
                      add: function (t, n, e) {
                        if (
                          ("string" == typeof t && (t = E(t)),
                          t instanceof Element)
                        ) {
                          var i = this.slides[n];
                          P(t, { display: "none" }),
                            i
                              ? (S(t, i), this.slides.splice(n, 0, t))
                              : (k(this.list, t), this.slides.push(t)),
                            (function (t, n) {
                              var e = t.querySelectorAll("img"),
                                i = e.length;
                              if (i) {
                                var o = 0;
                                u(e, function (t) {
                                  t.onload = t.onerror = function () {
                                    ++o === i && n();
                                  };
                                });
                              } else n();
                            })(t, function () {
                              e && e(t);
                            });
                        }
                      },
                      remove: function (t) {
                        _(this.slides.splice(t, 1)[0]);
                      },
                      each: function (t) {
                        o.forEach(t);
                      },
                      get length() {
                        return this.slides.length;
                      },
                      get total() {
                        return o.length;
                      },
                    };
                    function a() {
                      var n = i.root,
                        e = t.options;
                      return [
                        n + "--" + e.type,
                        n + "--" + e.direction,
                        e.drag ? n + "--draggable" : "",
                        e.isNavigation ? n + "--nav" : "",
                        B.active,
                      ];
                    }
                    function d(t) {
                      return b(e, t) || b(s.slider, t);
                    }
                    return s;
                  };
                  var et = Math.floor;
                  const it = function (t, n) {
                    var e,
                      i,
                      o = {
                        mount: function () {
                          (e = t.options),
                            (i = t.is(j)),
                            t
                              .on("move", function (n) {
                                t.index = n;
                              })
                              .on("updated refresh", function (n) {
                                (e = n || e),
                                  (t.index = h(t.index, 0, o.edgeIndex));
                              });
                        },
                        go: function (t, e) {
                          var i = this.trim(this.parse(t));
                          n.Track.go(i, this.rewind(i), e);
                        },
                        parse: function (n) {
                          var i = t.index,
                            r = String(n).match(/([+\-<>]+)(\d+)?/),
                            s = r ? r[1] : "",
                            a = r ? parseInt(r[2]) : 0;
                          switch (s) {
                            case "+":
                              i += a || 1;
                              break;
                            case "-":
                              i -= a || 1;
                              break;
                            case ">":
                            case "<":
                              i = (function (t, n, i) {
                                if (t > -1) return o.toIndex(t);
                                var r = e.perMove,
                                  s = i ? -1 : 1;
                                if (r) return n + r * s;
                                return o.toIndex(o.toPage(n) + s);
                              })(a, i, "<" === s);
                              break;
                            default:
                              i = parseInt(n);
                          }
                          return i;
                        },
                        toIndex: function (n) {
                          if (r()) return n;
                          var i = t.length,
                            o = e.perPage,
                            s = n * o;
                          return (
                            i - o <=
                              (s -= (this.pageLength * o - i) * et(s / i)) &&
                              s < i &&
                              (s = i - o),
                            s
                          );
                        },
                        toPage: function (n) {
                          if (r()) return n;
                          var i = t.length,
                            o = e.perPage;
                          return et(i - o <= n && n < i ? (i - 1) / o : n / o);
                        },
                        trim: function (t) {
                          return (
                            i ||
                              (t = e.rewind
                                ? this.rewind(t)
                                : h(t, 0, this.edgeIndex)),
                            t
                          );
                        },
                        rewind: function (t) {
                          var n = this.edgeIndex;
                          if (i) {
                            for (; t > n; ) t -= n + 1;
                            for (; t < 0; ) t += n + 1;
                          } else t > n ? (t = 0) : t < 0 && (t = n);
                          return t;
                        },
                        isRtl: function () {
                          return "rtl" === e.direction;
                        },
                        get pageLength() {
                          var n = t.length;
                          return r() ? n : Math.ceil(n / e.perPage);
                        },
                        get edgeIndex() {
                          var n = t.length;
                          return n
                            ? r() || e.isNavigation || i
                              ? n - 1
                              : n - e.perPage
                            : 0;
                        },
                        get prevIndex() {
                          var n = t.index - 1;
                          return (
                            (i || e.rewind) && (n = this.rewind(n)),
                            n > -1 ? n : -1
                          );
                        },
                        get nextIndex() {
                          var n = t.index + 1;
                          return (
                            (i || e.rewind) && (n = this.rewind(n)),
                            (t.index < n && n <= this.edgeIndex) || 0 === n
                              ? n
                              : -1
                          );
                        },
                      };
                    function r() {
                      return !1 !== e.focus;
                    }
                    return o;
                  };
                  var ot = Math.abs;
                  const rt = function (t, n) {
                      var e,
                        i,
                        o,
                        r = t.options.direction === tt,
                        s = t.is(W),
                        a = "rtl" === t.options.direction,
                        u = !1,
                        c = a ? 1 : -1,
                        d = {
                          sign: c,
                          mount: function () {
                            (i = n.Elements), (e = n.Layout), (o = i.list);
                          },
                          mounted: function () {
                            var n = this;
                            s ||
                              (this.jump(0),
                              t.on("mounted resize updated", function () {
                                n.jump(t.index);
                              }));
                          },
                          go: function (e, i, o) {
                            var r = l(e),
                              a = t.index;
                            (t.State.is(J) && u) ||
                              ((u = e !== i),
                              o || t.emit("move", i, a, e),
                              Math.abs(r - this.position) >= 1 || s
                                ? n.Transition.start(
                                    e,
                                    i,
                                    a,
                                    this.toCoord(r),
                                    function () {
                                      f(e, i, a, o);
                                    }
                                  )
                                : e !== a && "move" === t.options.trimSpace
                                ? n.Controller.go(e + e - a, o)
                                : f(e, i, a, o));
                          },
                          jump: function (t) {
                            this.translate(l(t));
                          },
                          translate: function (t) {
                            P(o, {
                              transform:
                                "translate" + (r ? "Y" : "X") + "(" + t + "px)",
                            });
                          },
                          cancel: function () {
                            t.is(j)
                              ? this.shift()
                              : this.translate(this.position),
                              P(o, { transition: "" });
                          },
                          shift: function () {
                            var n = ot(this.position),
                              e = ot(this.toPosition(0)),
                              i = ot(this.toPosition(t.length)),
                              o = i - e;
                            n < e ? (n += o) : n > i && (n -= o),
                              this.translate(c * n);
                          },
                          trim: function (n) {
                            return !t.options.trimSpace || t.is(j)
                              ? n
                              : h(n, c * (e.totalSize() - e.size - e.gap), 0);
                          },
                          toIndex: function (t) {
                            var n = this,
                              e = 0,
                              o = 1 / 0;
                            return (
                              i.getSlides(!0).forEach(function (i) {
                                var r = i.index,
                                  s = ot(n.toPosition(r) - t);
                                s < o && ((o = s), (e = r));
                              }),
                              e
                            );
                          },
                          toCoord: function (t) {
                            return { x: r ? 0 : t, y: r ? t : 0 };
                          },
                          toPosition: function (t) {
                            var n = e.totalSize(t) - e.slideSize(t) - e.gap;
                            return c * (n + this.offset(t));
                          },
                          offset: function (n) {
                            var i = t.options.focus,
                              o = e.slideSize(n);
                            return "center" === i
                              ? -(e.size - o) / 2
                              : -(parseInt(i) || 0) * (o + e.gap);
                          },
                          get position() {
                            var t = r ? "top" : a ? "right" : "left";
                            return L(o)[t] - (L(i.track)[t] - e.padding[t] * c);
                          },
                        };
                      function f(n, e, i, r) {
                        P(o, { transition: "" }),
                          (u = !1),
                          s || d.jump(e),
                          r || t.emit("moved", e, i, n);
                      }
                      function l(t) {
                        return d.trim(d.toPosition(t));
                      }
                      return d;
                    },
                    st = function (t, n) {
                      var e = [],
                        i = 0,
                        o = n.Elements,
                        r = {
                          mount: function () {
                            var n = this;
                            t.is(j) &&
                              (s(),
                              t
                                .on("refresh:before", function () {
                                  n.destroy();
                                })
                                .on("refresh", s)
                                .on("resize", function () {
                                  i !== a() && (n.destroy(), t.refresh());
                                }));
                          },
                          destroy: function () {
                            _(e), (e = []);
                          },
                          get clones() {
                            return e;
                          },
                          get length() {
                            return e.length;
                          },
                        };
                      function s() {
                        r.destroy(),
                          (function (t) {
                            var n = o.length,
                              i = o.register;
                            if (n) {
                              for (var r = o.slides; r.length < t; )
                                r = r.concat(r);
                              r.slice(0, t).forEach(function (t, r) {
                                var s = u(t);
                                k(o.list, s), e.push(s), i(s, r + n, r % n);
                              }),
                                r.slice(-t).forEach(function (o, s) {
                                  var a = u(o);
                                  S(a, r[0]),
                                    e.push(a),
                                    i(a, s - t, (n + s - (t % n)) % n);
                                });
                            }
                          })((i = a()));
                      }
                      function a() {
                        var n = t.options;
                        if (n.clones) return n.clones;
                        var e =
                            n.autoWidth || n.autoHeight ? o.length : n.perPage,
                          i = n.direction === tt ? "Height" : "Width",
                          r = m(t.root, n["fixed" + i]);
                        return (
                          r && (e = Math.ceil(o.track["client" + i] / r)),
                          e * (n.drag ? n.flickMaxPages + 1 : 1)
                        );
                      }
                      function u(n) {
                        var e = n.cloneNode(!0);
                        return O(e, t.classes.clone), T(e, "id"), e;
                      }
                      return r;
                    };
                  function at(t, n) {
                    var e;
                    return function () {
                      e ||
                        (e = setTimeout(function () {
                          t(), (e = null);
                        }, n));
                    };
                  }
                  const ut = function (t, n) {
                    var e,
                      i,
                      o = n.Elements,
                      r = t.options.direction === tt,
                      s =
                        ((e = {
                          mount: function () {
                            t
                              .on(
                                "resize load",
                                at(function () {
                                  t.emit("resize");
                                }, t.options.throttle),
                                window
                              )
                              .on("resize", c)
                              .on("updated refresh", u),
                              u(),
                              (this.totalSize = r
                                ? this.totalHeight
                                : this.totalWidth),
                              (this.slideSize = r
                                ? this.slideHeight
                                : this.slideWidth);
                          },
                          destroy: function () {
                            T([o.list, o.track], "style");
                          },
                          get size() {
                            return r ? this.height : this.width;
                          },
                        }),
                        (i = r
                          ? (function (t, n) {
                              var e,
                                i,
                                o = n.Elements,
                                r = t.root;
                              return {
                                margin: "marginBottom",
                                init: function () {
                                  this.resize();
                                },
                                resize: function () {
                                  (i = t.options),
                                    (e = o.track),
                                    (this.gap = m(r, i.gap));
                                  var n = i.padding,
                                    s = m(r, n.top || n),
                                    a = m(r, n.bottom || n);
                                  (this.padding = { top: s, bottom: a }),
                                    P(e, {
                                      paddingTop: g(s),
                                      paddingBottom: g(a),
                                    });
                                },
                                totalHeight: function (n) {
                                  void 0 === n && (n = t.length - 1);
                                  var e = o.getSlide(n);
                                  return e
                                    ? L(e.slide).bottom -
                                        L(o.list).top +
                                        this.gap
                                    : 0;
                                },
                                slideWidth: function () {
                                  return m(r, i.fixedWidth || this.width);
                                },
                                slideHeight: function (t) {
                                  if (i.autoHeight) {
                                    var n = o.getSlide(t);
                                    return n ? n.slide.offsetHeight : 0;
                                  }
                                  var e =
                                    i.fixedHeight ||
                                    (this.height + this.gap) / i.perPage -
                                      this.gap;
                                  return m(r, e);
                                },
                                get width() {
                                  return e.clientWidth;
                                },
                                get height() {
                                  var t =
                                    i.height || this.width * i.heightRatio;
                                  return (
                                    F(
                                      t,
                                      '"height" or "heightRatio" is missing.'
                                    ),
                                    m(r, t) -
                                      this.padding.top -
                                      this.padding.bottom
                                  );
                                },
                              };
                            })(t, n)
                          : (function (t, n) {
                              var e,
                                i = n.Elements,
                                o = t.root,
                                r = t.options;
                              return {
                                margin:
                                  "margin" +
                                  ("rtl" === r.direction ? "Left" : "Right"),
                                height: 0,
                                init: function () {
                                  this.resize();
                                },
                                resize: function () {
                                  (r = t.options),
                                    (e = i.track),
                                    (this.gap = m(o, r.gap));
                                  var n = r.padding,
                                    s = m(o, n.left || n),
                                    a = m(o, n.right || n);
                                  (this.padding = { left: s, right: a }),
                                    P(e, {
                                      paddingLeft: g(s),
                                      paddingRight: g(a),
                                    });
                                },
                                totalWidth: function (n) {
                                  void 0 === n && (n = t.length - 1);
                                  var e = i.getSlide(n),
                                    o = 0;
                                  if (e) {
                                    var s = L(e.slide),
                                      a = L(i.list);
                                    (o =
                                      "rtl" === r.direction
                                        ? a.right - s.left
                                        : s.right - a.left),
                                      (o += this.gap);
                                  }
                                  return o;
                                },
                                slideWidth: function (t) {
                                  if (r.autoWidth) {
                                    var n = i.getSlide(t);
                                    return n ? n.slide.offsetWidth : 0;
                                  }
                                  var e =
                                    r.fixedWidth ||
                                    (this.width + this.gap) / r.perPage -
                                      this.gap;
                                  return m(o, e);
                                },
                                slideHeight: function () {
                                  var t =
                                    r.height ||
                                    r.fixedHeight ||
                                    this.width * r.heightRatio;
                                  return m(o, t);
                                },
                                get width() {
                                  return (
                                    e.clientWidth -
                                    this.padding.left -
                                    this.padding.right
                                  );
                                },
                              };
                            })(t, n)),
                        a(i).forEach(function (t) {
                          e[t] ||
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(i, t)
                            );
                        }),
                        e);
                    function u() {
                      s.init(),
                        P(t.root, { maxWidth: g(t.options.width) }),
                        o.each(function (t) {
                          t.slide.style[s.margin] = g(s.gap);
                        }),
                        c();
                    }
                    function c() {
                      var n = t.options;
                      s.resize(), P(o.track, { height: g(s.height) });
                      var e = n.autoHeight ? null : g(s.slideHeight());
                      o.each(function (t) {
                        P(t.container, { height: e }),
                          P(t.slide, {
                            width: n.autoWidth
                              ? null
                              : g(s.slideWidth(t.index)),
                            height: t.container ? null : e,
                          });
                      }),
                        t.emit("resized");
                    }
                    return s;
                  };
                  var ct = Math.abs,
                    dt = 0.1,
                    ft = 7;
                  const lt = function (t, n) {
                      var e,
                        i,
                        o,
                        r,
                        s = n.Track,
                        a = n.Controller,
                        c = t.options.direction === tt,
                        d = c ? "y" : "x",
                        f = {
                          disabled: !1,
                          mount: function () {
                            var e = this,
                              i = n.Elements,
                              o = i.track;
                            t.on("touchstart mousedown", l, o)
                              .on("touchmove mousemove", g, o, { passive: !1 })
                              .on(
                                "touchend touchcancel mouseleave mouseup dragend",
                                v,
                                o
                              )
                              .on("mounted refresh", function () {
                                u(
                                  i.list.querySelectorAll("img, a"),
                                  function (n) {
                                    t.off("dragstart", n).on(
                                      "dragstart",
                                      function (t) {
                                        t.preventDefault();
                                      },
                                      n,
                                      { passive: !1 }
                                    );
                                  }
                                );
                              })
                              .on("mounted updated", function () {
                                e.disabled = !t.options.drag;
                              });
                          },
                        };
                      function l(t) {
                        f.disabled || r || p(t);
                      }
                      function p(t) {
                        (e = s.toCoord(s.position)), (i = m(t, {})), (o = i);
                      }
                      function g(n) {
                        if (i)
                          if (((o = m(n, i)), r)) {
                            if (
                              (n.cancelable && n.preventDefault(), !t.is(W))
                            ) {
                              var u = e[d] + o.offset[d];
                              s.translate(
                                (function (n) {
                                  if (t.is(H)) {
                                    var e = s.sign,
                                      i = e * s.trim(s.toPosition(0)),
                                      o = e * s.trim(s.toPosition(a.edgeIndex));
                                    (n *= e) < i
                                      ? (n = i - ft * Math.log(i - n))
                                      : n > o && (n = o + ft * Math.log(n - o)),
                                      (n *= e);
                                  }
                                  return n;
                                })(u)
                              );
                            }
                          } else
                            (function (n) {
                              var e = n.offset;
                              if (t.State.is(J) && t.options.waitForTransition)
                                return !1;
                              var i =
                                (180 * Math.atan(ct(e.y) / ct(e.x))) / Math.PI;
                              c && (i = 90 - i);
                              return i < t.options.dragAngleThreshold;
                            })(o) &&
                              (t.emit("drag", i), (r = !0), s.cancel(), p(n));
                      }
                      function v() {
                        (i = null),
                          r &&
                            (t.emit("dragged", o),
                            (function (e) {
                              var i = e.velocity[d],
                                o = ct(i);
                              if (o > 0) {
                                var r = t.options,
                                  u = t.index,
                                  c = i < 0 ? -1 : 1,
                                  f = u;
                                if (!t.is(W)) {
                                  var l = s.position;
                                  o > r.flickVelocityThreshold &&
                                    ct(e.offset[d]) <
                                      r.swipeDistanceThreshold &&
                                    (l +=
                                      c *
                                      Math.min(
                                        o * r.flickPower,
                                        n.Layout.size * (r.flickMaxPages || 1)
                                      )),
                                    (f = s.toIndex(l));
                                }
                                f === u && o > dt && (f = u + c * s.sign),
                                  t.is(H) && (f = h(f, 0, a.edgeIndex)),
                                  a.go(f, r.isNavigation);
                              }
                            })(o),
                            (r = !1));
                      }
                      function m(t, n) {
                        var e = t.timeStamp,
                          i = t.touches,
                          o = i ? i[0] : t,
                          r = o.clientX,
                          s = o.clientY,
                          a = n.to || {},
                          u = a.x,
                          c = void 0 === u ? r : u,
                          d = a.y,
                          f = { x: r - c, y: s - (void 0 === d ? s : d) },
                          l = e - (n.time || 0);
                        return {
                          to: { x: r, y: s },
                          offset: f,
                          time: e,
                          velocity: { x: f.x / l, y: f.y / l },
                        };
                      }
                      return f;
                    },
                    ht = function (t, n) {
                      var e = !1;
                      function i(t) {
                        e &&
                          (t.preventDefault(),
                          t.stopPropagation(),
                          t.stopImmediatePropagation());
                      }
                      return {
                        required: t.options.drag,
                        mount: function () {
                          t.on("click", i, n.Elements.track, { capture: !0 })
                            .on("drag", function () {
                              e = !0;
                            })
                            .on("dragged", function () {
                              setTimeout(function () {
                                e = !1;
                              });
                            });
                        },
                      };
                    };
                  var pt = { HOVER: 1, FOCUS: 2, MANUAL: 3 };
                  var gt = "http://www.w3.org/2000/svg",
                    vt =
                      "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",
                    mt = 40;
                  const yt = function (t, n, e) {
                    var i,
                      o,
                      r,
                      s = t.classes,
                      a = t.root,
                      u = n.Elements;
                    function c() {
                      var r = n.Controller,
                        s = r.prevIndex,
                        a = r.nextIndex,
                        u = t.length > t.options.perPage || t.is(j);
                      (i.disabled = s < 0 || !u),
                        (o.disabled = a < 0 || !u),
                        t.emit(e + ":updated", i, o, s, a);
                    }
                    function d(n) {
                      return E(
                        '<button class="' +
                          s.arrow +
                          " " +
                          (n ? s.prev : s.next) +
                          '" type="button"><svg xmlns="' +
                          gt +
                          '"\tviewBox="0 0 ' +
                          mt +
                          " " +
                          mt +
                          '"\twidth="' +
                          mt +
                          '"\theight="' +
                          mt +
                          '"><path d="' +
                          (t.options.arrowPath || vt) +
                          '" />'
                      );
                    }
                    return {
                      required: t.options.arrows,
                      mount: function () {
                        (i = u.arrows.prev),
                          (o = u.arrows.next),
                          (i && o) ||
                            !t.options.arrows ||
                            ((i = d(!0)),
                            (o = d(!1)),
                            (r = !0),
                            (function () {
                              var n = w("div", { class: s.arrows });
                              k(n, i), k(n, o);
                              var e = u.slider,
                                r = "slider" === t.options.arrows && e ? e : a;
                              S(n, r.firstElementChild);
                            })()),
                          i &&
                            o &&
                            t
                              .on(
                                "click",
                                function () {
                                  t.go("<");
                                },
                                i
                              )
                              .on(
                                "click",
                                function () {
                                  t.go(">");
                                },
                                o
                              )
                              .on("mounted move updated refresh", c),
                          (this.arrows = { prev: i, next: o });
                      },
                      mounted: function () {
                        t.emit(e + ":mounted", i, o);
                      },
                      destroy: function () {
                        T([i, o], "disabled"), r && _(i.parentElement);
                      },
                    };
                  };
                  const bt = function (t, n, e) {
                    var i = {},
                      o = n.Elements,
                      r = {
                        mount: function () {
                          var n,
                            e,
                            a,
                            u,
                            c = t.options.pagination;
                          if (c) {
                            (n = t.options),
                              (e = t.classes),
                              (a = w("ul", { class: e.pagination })),
                              (u = o
                                .getSlides(!1)
                                .filter(function (t) {
                                  return (
                                    !1 !== n.focus || t.index % n.perPage == 0
                                  );
                                })
                                .map(function (n, i) {
                                  var r = w("li", {}),
                                    s = w("button", {
                                      class: e.page,
                                      type: "button",
                                    });
                                  return (
                                    k(r, s),
                                    k(a, r),
                                    t.on(
                                      "click",
                                      function () {
                                        t.go(">" + i);
                                      },
                                      s
                                    ),
                                    {
                                      li: r,
                                      button: s,
                                      page: i,
                                      Slides: o.getSlidesByPage(i),
                                    }
                                  );
                                })),
                              (i = { list: a, items: u });
                            var d = o.slider;
                            k("slider" === c && d ? d : t.root, i.list),
                              t.on("move.page", s);
                          }
                          t.off("updated.page refresh.page").on(
                            "updated.page refresh.page",
                            function () {
                              r.destroy(),
                                t.options.pagination &&
                                  (r.mount(), r.mounted());
                            }
                          );
                        },
                        mounted: function () {
                          if (t.options.pagination) {
                            var n = t.index;
                            t.emit(e + ":mounted", i, this.getItem(n)),
                              s(n, -1);
                          }
                        },
                        destroy: function () {
                          _(i.list),
                            i.items &&
                              i.items.forEach(function (n) {
                                t.off("click", n.button);
                              }),
                            t.off("move.page"),
                            (i = {});
                        },
                        getItem: function (t) {
                          return i.items[n.Controller.toPage(t)];
                        },
                        get data() {
                          return i;
                        },
                      };
                    function s(n, o) {
                      var s = r.getItem(o),
                        a = r.getItem(n),
                        u = B.active;
                      s && z(s.button, u),
                        a && O(a.button, u),
                        t.emit(e + ":updated", i, s, a);
                    }
                    return r;
                  };
                  var xt = "data-splide-lazy",
                    wt = "data-splide-lazy-srcset";
                  var Et = "aria-current",
                    _t = "aria-controls",
                    kt = "aria-label",
                    St = "aria-hidden",
                    Pt = "tabindex",
                    Ct = {
                      ltr: {
                        ArrowLeft: "<",
                        ArrowRight: ">",
                        Left: "<",
                        Right: ">",
                      },
                      rtl: {
                        ArrowLeft: ">",
                        ArrowRight: "<",
                        Left: ">",
                        Right: "<",
                      },
                      ttb: { ArrowUp: "<", ArrowDown: ">", Up: "<", Down: ">" },
                    };
                  const Ot = function (t, n) {
                    var e = t.i18n,
                      i = n.Elements,
                      o = [St, Pt, _t, kt, Et, "role"];
                    function r(n, e) {
                      I(n, St, !e),
                        t.options.slideFocus && I(n, Pt, e ? 0 : -1);
                    }
                    function s(t, n) {
                      var e = i.track.id;
                      I(t, _t, e), I(n, _t, e);
                    }
                    function a(n, i, o, r) {
                      var s = t.index,
                        a = o > -1 && s < o ? e.last : e.prev,
                        u = r > -1 && s > r ? e.first : e.next;
                      I(n, kt, a), I(i, kt, u);
                    }
                    function u(n, i) {
                      i && I(i.button, Et, !0),
                        n.items.forEach(function (n) {
                          var i = t.options,
                            o = p(
                              !1 === i.focus && i.perPage > 1
                                ? e.pageX
                                : e.slideX,
                              n.page + 1
                            ),
                            r = n.button,
                            s = n.Slides.map(function (t) {
                              return t.slide.id;
                            });
                          I(r, _t, s.join(" ")), I(r, kt, o);
                        });
                    }
                    function c(t, n, e) {
                      n && T(n.button, Et), e && I(e.button, Et, !0);
                    }
                    function d(t) {
                      i.each(function (n) {
                        var i = n.slide,
                          o = n.realIndex;
                        l(i) || I(i, "role", "button");
                        var r = o > -1 ? o : n.index,
                          s = p(e.slideX, r + 1),
                          a = t.Components.Elements.getSlide(r);
                        I(i, kt, s), a && I(i, _t, a.slide.id);
                      });
                    }
                    function f(t, n) {
                      var e = t.slide;
                      n ? I(e, Et, !0) : T(e, Et);
                    }
                    function l(t) {
                      return "BUTTON" === t.tagName;
                    }
                    return {
                      required: t.options.accessibility,
                      mount: function () {
                        t
                          .on("visible", function (t) {
                            r(t.slide, !0);
                          })
                          .on("hidden", function (t) {
                            r(t.slide, !1);
                          })
                          .on("arrows:mounted", s)
                          .on("arrows:updated", a)
                          .on("pagination:mounted", u)
                          .on("pagination:updated", c)
                          .on("refresh", function () {
                            T(n.Clones.clones, o);
                          }),
                          t.options.isNavigation &&
                            t
                              .on("navigation:mounted navigation:updated", d)
                              .on("active", function (t) {
                                f(t, !0);
                              })
                              .on("inactive", function (t) {
                                f(t, !1);
                              }),
                          ["play", "pause"].forEach(function (t) {
                            var n = i[t];
                            n &&
                              (l(n) || I(n, "role", "button"),
                              I(n, _t, i.track.id),
                              I(n, kt, e[t]));
                          });
                      },
                      destroy: function () {
                        var t = n.Arrows,
                          e = t ? t.arrows : {};
                        T(
                          i.slides.concat([e.prev, e.next, i.play, i.pause]),
                          o
                        );
                      },
                    };
                  };
                  var zt = "move.sync",
                    At = "mouseup touchend",
                    It = [" ", "Enter", "Spacebar"];
                  var Mt = {
                    Options: $,
                    Breakpoints: function (t) {
                      var n,
                        e,
                        i = t.options.breakpoints,
                        o = at(s, 50),
                        r = [];
                      function s() {
                        var o,
                          s = (o = r.filter(function (t) {
                            return t.mql.matches;
                          })[0])
                            ? o.point
                            : -1;
                        if (s !== e) {
                          e = s;
                          var a = t.State,
                            u = i[s] || n,
                            c = u.destroy;
                          c
                            ? ((t.options = n), t.destroy("completely" === c))
                            : (a.is(K) && t.mount(), (t.options = u));
                        }
                      }
                      return {
                        required: i && matchMedia,
                        mount: function () {
                          (r = Object.keys(i)
                            .sort(function (t, n) {
                              return +t - +n;
                            })
                            .map(function (t) {
                              return {
                                point: t,
                                mql: matchMedia("(max-width:" + t + "px)"),
                              };
                            })),
                            this.destroy(!0),
                            addEventListener("resize", o),
                            (n = t.options),
                            s();
                        },
                        destroy: function (t) {
                          t && removeEventListener("resize", o);
                        },
                      };
                    },
                    Controller: it,
                    Elements: nt,
                    Track: rt,
                    Clones: st,
                    Layout: ut,
                    Drag: lt,
                    Click: ht,
                    Autoplay: function (t, n, e) {
                      var i,
                        o = [],
                        r = n.Elements,
                        s = {
                          required: t.options.autoplay,
                          mount: function () {
                            var n = t.options;
                            r.slides.length > n.perPage &&
                              ((i = (function (t, n, e) {
                                var i,
                                  o,
                                  r,
                                  s = window.requestAnimationFrame,
                                  a = !0,
                                  u = function u(c) {
                                    a ||
                                      (i ||
                                        ((i = c), r && r < 1 && (i -= r * n)),
                                      (r = (o = c - i) / n),
                                      o >= n && ((i = 0), (r = 1), t()),
                                      e && e(r),
                                      s(u));
                                  };
                                return {
                                  pause: function () {
                                    (a = !0), (i = 0);
                                  },
                                  play: function (t) {
                                    (i = 0),
                                      t && (r = 0),
                                      a && ((a = !1), s(u));
                                  },
                                };
                              })(
                                function () {
                                  t.go(">");
                                },
                                n.interval,
                                function (n) {
                                  t.emit(e + ":playing", n),
                                    r.bar && P(r.bar, { width: 100 * n + "%" });
                                }
                              )),
                              (function () {
                                var n = t.options,
                                  e = t.sibling,
                                  i = [t.root, e ? e.root : null];
                                n.pauseOnHover &&
                                  (a(i, "mouseleave", pt.HOVER, !0),
                                  a(i, "mouseenter", pt.HOVER, !1)),
                                  n.pauseOnFocus &&
                                    (a(i, "focusout", pt.FOCUS, !0),
                                    a(i, "focusin", pt.FOCUS, !1)),
                                  r.play &&
                                    t.on(
                                      "click",
                                      function () {
                                        s.play(pt.FOCUS), s.play(pt.MANUAL);
                                      },
                                      r.play
                                    ),
                                  r.pause &&
                                    a([r.pause], "click", pt.MANUAL, !1),
                                  t
                                    .on("move refresh", function () {
                                      s.play();
                                    })
                                    .on("destroy", function () {
                                      s.pause();
                                    });
                              })(),
                              this.play());
                          },
                          play: function (n) {
                            void 0 === n && (n = 0),
                              (o = o.filter(function (t) {
                                return t !== n;
                              })).length ||
                                (t.emit(e + ":play"),
                                i.play(t.options.resetProgress));
                          },
                          pause: function (n) {
                            void 0 === n && (n = 0),
                              i.pause(),
                              -1 === o.indexOf(n) && o.push(n),
                              1 === o.length && t.emit(e + ":pause");
                          },
                        };
                      function a(n, e, i, o) {
                        n.forEach(function (n) {
                          t.on(
                            e,
                            function () {
                              s[o ? "play" : "pause"](i);
                            },
                            n
                          );
                        });
                      }
                      return s;
                    },
                    Cover: function (t, n) {
                      function e(t) {
                        n.Elements.each(function (n) {
                          var e = b(n.slide, "IMG") || b(n.container, "IMG");
                          e && e.src && i(e, t);
                        });
                      }
                      function i(t, n) {
                        P(t.parentElement, {
                          background: n
                            ? ""
                            : 'center/cover no-repeat url("' + t.src + '")',
                        }),
                          P(t, { display: n ? "" : "none" });
                      }
                      return {
                        required: t.options.cover,
                        mount: function () {
                          t.on("lazyload:loaded", function (t) {
                            i(t, !1);
                          }),
                            t.on("mounted updated refresh", function () {
                              return e(!1);
                            });
                        },
                        destroy: function () {
                          e(!0);
                        },
                      };
                    },
                    Arrows: yt,
                    Pagination: bt,
                    LazyLoad: function (t, n, e) {
                      var i,
                        o,
                        r = t.options,
                        s = "sequential" === r.lazyLoad;
                      function a() {
                        (o = []), (i = 0);
                      }
                      function c(n) {
                        (n = isNaN(n) ? t.index : n),
                          (o = o.filter(function (t) {
                            return (
                              !t.Slide.isWithin(
                                n,
                                r.perPage * (r.preloadPages + 1)
                              ) || (d(t.img, t.Slide), !1)
                            );
                          }))[0] || t.off("moved." + e);
                      }
                      function d(n, e) {
                        O(e.slide, B.loading);
                        var i = w("span", { class: t.classes.spinner });
                        k(n.parentElement, i),
                          (n.onload = function () {
                            l(n, i, e, !1);
                          }),
                          (n.onerror = function () {
                            l(n, i, e, !0);
                          }),
                          I(n, "srcset", M(n, wt) || ""),
                          I(n, "src", M(n, xt) || "");
                      }
                      function f() {
                        if (i < o.length) {
                          var t = o[i];
                          d(t.img, t.Slide);
                        }
                        i++;
                      }
                      function l(n, i, o, r) {
                        z(o.slide, B.loading),
                          r ||
                            (_(i),
                            P(n, { display: "" }),
                            t.emit(e + ":loaded", n).emit("resize")),
                          s && f();
                      }
                      return {
                        required: r.lazyLoad,
                        mount: function () {
                          t.on("mounted refresh", function () {
                            a(),
                              n.Elements.each(function (t) {
                                u(
                                  t.slide.querySelectorAll(
                                    "[" + xt + "], [" + wt + "]"
                                  ),
                                  function (n) {
                                    n.src ||
                                      n.srcset ||
                                      (o.push({ img: n, Slide: t }),
                                      P(n, { display: "none" }));
                                  }
                                );
                              }),
                              s && f();
                          }),
                            s || t.on("mounted refresh moved." + e, c);
                        },
                        destroy: a,
                      };
                    },
                    Keyboard: function (t) {
                      var n;
                      return {
                        mount: function () {
                          t.on("mounted updated", function () {
                            var e = t.options,
                              i = t.root,
                              o = Ct[e.direction],
                              r = e.keyboard;
                            n && (t.off("keydown", n), T(i, Pt)),
                              r &&
                                ("focused" === r
                                  ? ((n = i), I(i, Pt, 0))
                                  : (n = document),
                                t.on(
                                  "keydown",
                                  function (n) {
                                    o[n.key] && t.go(o[n.key]);
                                  },
                                  n
                                ));
                          });
                        },
                      };
                    },
                    Sync: function (t) {
                      var n = t.sibling,
                        e = n && n.options.isNavigation;
                      function i() {
                        t.on(zt, function (t, e, i) {
                          n.off(zt).go(n.is(j) ? i : t, !1), o();
                        });
                      }
                      function o() {
                        n.on(zt, function (n, e, o) {
                          t.off(zt).go(t.is(j) ? o : n, !1), i();
                        });
                      }
                      function r() {
                        n.Components.Elements.each(function (n) {
                          var e = n.slide,
                            i = n.index;
                          t.off(At, e).on(
                            At,
                            function (t) {
                              (t.button && 0 !== t.button) || s(i);
                            },
                            e
                          ),
                            t.off("keyup", e).on(
                              "keyup",
                              function (t) {
                                It.indexOf(t.key) > -1 &&
                                  (t.preventDefault(), s(i));
                              },
                              e,
                              { passive: !1 }
                            );
                        });
                      }
                      function s(e) {
                        t.State.is(Y) && n.go(e);
                      }
                      return {
                        required: !!n,
                        mount: function () {
                          i(),
                            o(),
                            e &&
                              (r(),
                              t.on("refresh", function () {
                                setTimeout(function () {
                                  r(), n.emit("navigation:updated", t);
                                });
                              }));
                        },
                        mounted: function () {
                          e && n.emit("navigation:mounted", t);
                        },
                      };
                    },
                    A11y: Ot,
                  };
                  var Tt = (function (t) {
                    var n, e;
                    function i(n, e) {
                      return t.call(this, n, e, Mt) || this;
                    }
                    return (
                      (e = t),
                      ((n = i).prototype = Object.create(e.prototype)),
                      (n.prototype.constructor = n),
                      (n.__proto__ = e),
                      i
                    );
                  })(Z);
                },
              },
              n = {};
            function e(i) {
              if (n[i]) return n[i].exports;
              var o = (n[i] = { exports: {} });
              return t[i](o, o.exports, e), o.exports;
            }
            return (
              (e.d = (t, n) => {
                for (var i in n)
                  e.o(n, i) &&
                    !e.o(t, i) &&
                    Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
              }),
              (e.o = (t, n) => Object.prototype.hasOwnProperty.call(t, n)),
              (e.r = (t) => {
                "undefined" != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module",
                  }),
                  Object.defineProperty(t, "__esModule", { value: !0 });
              }),
              e(311)
            );
          })();
        });
      },
      {},
    ],
    qa9s: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e,
          t = s(require("@splidejs/splide"));
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function n(e, t) {
          for (var s = 0; s < t.length; s++) {
            var i = t[s];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        function a(e, t, s) {
          return t && n(e.prototype, t), s && n(e, s), e;
        }
        !(function (e) {
          (e.main = "main"),
            (e.inner = "inner"),
            (e.widget = "widget"),
            (e.simple = "simple");
        })(e || (e = {}));
        var r = 7e3,
          l = {
            showFromRight: "splide__slide--show-from-right",
            showFromLeft: "splide__slide--show-from-left",
            paginationPage: "splide__pagination__page",
            filled: "is-filled",
            onlyOneSlide: "is-only-one-slide",
          },
          d = (function () {
            function s(n) {
              i(this, s),
                (this.sliderNode = n),
                (this.state = {
                  currentSlideIndex: 0,
                  currentSlideNode: null,
                  slidesObjectsArray: null,
                  touchStartX: 0,
                  touchEndX: 0,
                  time: 0,
                  isStoriesMode: !1,
                }),
                (this.sliderObject = null),
                (this.sliderPaginationPagesNodes = []),
                (this.timeInterval = null);
              var a = n.dataset.sliderType;
              switch (
                ((this.state.isStoriesMode =
                  void 0 !== n.dataset.sliderStories),
                a)
              ) {
                case e.inner:
                  console.log(e.inner);
                  break;
                case e.main:
                case e.widget:
                  (this.sliderObject = new t.default(n, {
                    type: "fade",
                    rewind: !0,
                    arrows: !1,
                    pagination: !0,
                  }).mount()),
                    this._initMouseEvents(),
                    this._startAutoplay();
                  break;
                case e.simple:
                default:
                  this.sliderObject = new t.default(n, {
                    type: "fade",
                    rewind: !0,
                    arrows: !this.sliderNode.dataset.sliderSecondaryId,
                    pagination: !1,
                  }).mount();
              }
              if (this.sliderNode.dataset.sliderSecondaryId) {
                var r = document.getElementById(
                    this.sliderNode.dataset.sliderSecondaryId
                  ),
                  d =
                    r &&
                    new t.default(r, {
                      type: "fade",
                      rewind: !1,
                      isNavigation: !0,
                      arrows: !1,
                      gap: 20,
                      pagination: !1,
                      breakpoints: { 730: { gap: 10 } },
                    }).mount();
                this.sliderObject.sync(d).mount();
              }
              if (!this.sliderObject)
                return console.warn("No splide object in slider.ts"), null;
              (this.sliderPaginationPagesNodes = Array.from(
                n.querySelectorAll("." + l.paginationPage)
              )),
                (this.state.slidesObjectsArray =
                  this.sliderObject.Components.Elements.getSlides(!1)),
                (this.state.currentSlideNode =
                  this.state.slidesObjectsArray[
                    this.state.currentSlideIndex
                  ].slide),
                this.state.slidesObjectsArray.length > 1
                  ? (this._initSliderEvents(), this._initTouchEvents())
                  : this._onlyOneSlide();
            }
            return (
              a(s, [
                {
                  key: "_initTouchEvents",
                  value: function () {
                    var e = this;
                    this.sliderNode.addEventListener(
                      "touchstart",
                      function (t) {
                        e.state.touchStartX = t.changedTouches[0].pageX;
                      },
                      { passive: !0 }
                    ),
                      this.sliderNode.addEventListener(
                        "touchend",
                        function (t) {
                          (e.state.touchEndX = t.changedTouches[0].pageX),
                            e._swipeSlide();
                        }
                      );
                  },
                },
                {
                  key: "_initMouseEvents",
                  value: function () {
                    var e = this;
                    this.sliderNode.addEventListener("mouseenter", function () {
                      e._pauseAutoplay();
                    }),
                      this.sliderNode.addEventListener(
                        "mouseleave",
                        function () {
                          e._startAutoplay();
                        }
                      ),
                      this.sliderNode.addEventListener("click", function () {
                        e.state.time = 0;
                      });
                  },
                },
                {
                  key: "_initSliderEvents",
                  value: function () {
                    var e = this;
                    this.sliderObject.on("move", function () {
                      e._showSlide(e.sliderObject.index),
                        e.state.isStoriesMode && e._fillPrevBars();
                    });
                  },
                },
                {
                  key: "_onlyOneSlide",
                  value: function () {
                    this.sliderNode.classList.add(l.onlyOneSlide),
                      this.sliderObject.destroy(!0);
                  },
                },
                {
                  key: "_swipeSlide",
                  value: function () {
                    var e = this.state.currentSlideIndex;
                    this.state.touchStartX !== this.state.touchEndX &&
                      (this.state.touchStartX > this.state.touchEndX
                        ? e++
                        : e--),
                      e < 0 && (e = this.state.slidesObjectsArray.length - 1),
                      e > this.state.slidesObjectsArray.length - 1 && (e = 0),
                      this.sliderObject.go(e);
                  },
                },
                {
                  key: "_showSlide",
                  value: function (e) {
                    var t = this.state.slidesObjectsArray[e].slide,
                      s = this.state.currentSlideIndex > e ? "prev" : "next";
                    if (this.state.currentSlideIndex === e) return null;
                    switch ((this._removeDirectionCssClasses(), s)) {
                      case "prev":
                        t.classList.add(l.showFromLeft);
                        break;
                      case "next":
                        t.classList.add(l.showFromRight);
                    }
                    (this.state.currentSlideIndex = e),
                      (this.state.currentSlideNode = t);
                  },
                },
                {
                  key: "_fillPrevBars",
                  value: function () {
                    var e = this;
                    this.sliderPaginationPagesNodes.forEach(function (t, s) {
                      s < e.state.currentSlideIndex
                        ? e.sliderPaginationPagesNodes[s].classList.add(
                            l.filled
                          )
                        : e.sliderPaginationPagesNodes[s].classList.remove(
                            l.filled
                          );
                    });
                  },
                },
                {
                  key: "_removeDirectionCssClasses",
                  value: function () {
                    this.state.currentSlideNode.classList.remove(
                      l.showFromLeft
                    ),
                      this.state.currentSlideNode.classList.remove(
                        l.showFromRight
                      );
                  },
                },
                {
                  key: "_isTimeToChange",
                  value: function () {
                    return this.state.time >= r;
                  },
                },
                {
                  key: "_startAutoplay",
                  value: function () {
                    var e = this;
                    this.timeInterval = setInterval(function () {
                      (e.state.time += 100),
                        e._isTimeToChange() &&
                          ((e.state.time = 0), e._nextSlide());
                    }, 100);
                  },
                },
                {
                  key: "_pauseAutoplay",
                  value: function () {
                    clearInterval(this.timeInterval);
                  },
                },
                {
                  key: "_nextSlide",
                  value: function () {
                    this.sliderObject.go("+"),
                      this.state.isStoriesMode && this._fillPrevBars();
                  },
                },
              ]),
              s
            );
          })();
        exports.default = d;
      },
      { "@splidejs/splide": "zEjv" },
    ],
    nVqE: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var t = {
            id: null,
            title: null,
            body: null,
            html: function () {
              return '\n    <div class="popup-new js-popup" id="'
                .concat(
                  this.id,
                  '">\n        <div class="popup-new__overlay js-popup__close">&nbsp;</div>\n    \n        <div class="popup-new__content popup-content">\n            '
                )
                .concat(
                  this.title
                    ? '<div class="popup-content__title">'.concat(
                        this.title,
                        "</div>"
                      )
                    : "",
                  "\n            \n            "
                )
                .concat(
                  this.body
                    ? '<div class="popup-content__body">'.concat(
                        this.body,
                        "</div>"
                      )
                    : "",
                  "\n        </div>\n    </div>\n  "
                );
            },
          },
          n = t;
        exports.default = n;
      },
      {},
    ],
    v47c: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = t);
        var e = p(require("./_template-default"));
        function p(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function t(p) {
          var t = document.createElement("div"),
            u = p.dataset,
            o = null,
            l = null;
          switch (p.dataset.popupType ? p.dataset.popupType : "default") {
            case "media":
            case "screenshots":
              console.warn("Template not ready yet");
              break;
            case "default":
            default:
              (o = { popupTitle: u.popupTitle, popupBody: u.popupBody }),
                ((l = e.default).title = o.popupTitle ? o.popupTitle : null),
                (l.body = o.popupBody ? o.popupBody : null);
          }
          (l.id = u.popupId),
            (t.innerHTML = l.html()),
            document.body.appendChild(t),
            this.refresh();
        }
      },
      { "./_template-default": "nVqE" },
    ],
    A2is: [
      function (require, module, exports) {
        "use strict";
        module.exports = (e) =>
          encodeURIComponent(e).replace(/[!'()*]/g, (e) =>
            "%".concat(e.charCodeAt(0).toString(16).toUpperCase())
          );
      },
      {},
    ],
    pWxZ: [
      function (require, module, exports) {
        "use strict";
        var e = "%[a-f0-9]{2}",
          t = new RegExp(e, "gi"),
          r = new RegExp("(" + e + ")+", "gi");
        function n(e, t) {
          try {
            return decodeURIComponent(e.join(""));
          } catch (c) {}
          if (1 === e.length) return e;
          t = t || 1;
          var r = e.slice(0, t),
            o = e.slice(t);
          return Array.prototype.concat.call([], n(r), n(o));
        }
        function o(e) {
          try {
            return decodeURIComponent(e);
          } catch (c) {
            for (var r = e.match(t), o = 1; o < r.length; o++)
              r = (e = n(r, o).join("")).match(t);
            return e;
          }
        }
        function c(e) {
          for (var t = { "%FE%FF": "��", "%FF%FE": "��" }, n = r.exec(e); n; ) {
            try {
              t[n[0]] = decodeURIComponent(n[0]);
            } catch (u) {
              var c = o(n[0]);
              c !== n[0] && (t[n[0]] = c);
            }
            n = r.exec(e);
          }
          t["%C2"] = "�";
          for (var a = Object.keys(t), p = 0; p < a.length; p++) {
            var i = a[p];
            e = e.replace(new RegExp(i, "g"), t[i]);
          }
          return e;
        }
        module.exports = function (e) {
          if ("string" != typeof e)
            throw new TypeError(
              "Expected `encodedURI` to be of type `string`, got `" +
                typeof e +
                "`"
            );
          try {
            return (e = e.replace(/\+/g, " ")), decodeURIComponent(e);
          } catch (t) {
            return c(e);
          }
        };
      },
      {},
    ],
    t7Jq: [
      function (require, module, exports) {
        "use strict";
        module.exports = function (e, t) {
          if ("string" != typeof e || "string" != typeof t)
            throw new TypeError(
              "Expected the arguments to be of type `string`"
            );
          if ("" === t) return [e];
          var r = e.indexOf(t);
          return -1 === r ? [e] : [e.slice(0, r), e.slice(r + t.length)];
        };
      },
      {},
    ],
    Vk1D: [
      function (require, module, exports) {
        "use strict";
        module.exports = function (r, e) {
          for (
            var t = {}, n = Object.keys(r), s = Array.isArray(e), a = 0;
            a < n.length;
            a++
          ) {
            var i = n[a],
              o = r[i];
            (s ? -1 !== e.indexOf(i) : e(i, o, r)) && (t[i] = o);
          }
          return t;
        };
      },
      {},
    ],
    FvpG: [
      function (require, module, exports) {
        "use strict";
        function r(t) {
          return (r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (r) {
                  return typeof r;
                }
              : function (r) {
                  return r &&
                    "function" == typeof Symbol &&
                    r.constructor === Symbol &&
                    r !== Symbol.prototype
                    ? "symbol"
                    : typeof r;
                })(t);
        }
        function t(r) {
          return a(r) || o(r) || n(r) || e();
        }
        function e() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function n(r, t) {
          if (r) {
            if ("string" == typeof r) return i(r, t);
            var e = Object.prototype.toString.call(r).slice(8, -1);
            return (
              "Object" === e && r.constructor && (e = r.constructor.name),
              "Map" === e || "Set" === e
                ? Array.from(r)
                : "Arguments" === e ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                ? i(r, t)
                : void 0
            );
          }
        }
        function o(r) {
          if (
            ("undefined" != typeof Symbol && null != r[Symbol.iterator]) ||
            null != r["@@iterator"]
          )
            return Array.from(r);
        }
        function a(r) {
          if (Array.isArray(r)) return i(r);
        }
        function i(r, t) {
          (null == t || t > r.length) && (t = r.length);
          for (var e = 0, n = new Array(t); e < t; e++) n[e] = r[e];
          return n;
        }
        var u = require("strict-uri-encode"),
          c = require("decode-uri-component"),
          s = require("split-on-first"),
          f = require("filter-obj"),
          l = function (r) {
            return null == r;
          };
        function p(r) {
          switch (r.arrayFormat) {
            case "index":
              return function (e) {
                return function (n, o) {
                  var a = n.length;
                  return void 0 === o ||
                    (r.skipNull && null === o) ||
                    (r.skipEmptyString && "" === o)
                    ? n
                    : [].concat(
                        t(n),
                        null === o
                          ? [[d(e, r), "[", a, "]"].join("")]
                          : [[d(e, r), "[", d(a, r), "]=", d(o, r)].join("")]
                      );
                };
              };
            case "bracket":
              return function (e) {
                return function (n, o) {
                  return void 0 === o ||
                    (r.skipNull && null === o) ||
                    (r.skipEmptyString && "" === o)
                    ? n
                    : [].concat(
                        t(n),
                        null === o
                          ? [[d(e, r), "[]"].join("")]
                          : [[d(e, r), "[]=", d(o, r)].join("")]
                      );
                };
              };
            case "comma":
            case "separator":
              return function (t) {
                return function (e, n) {
                  return null == n || 0 === n.length
                    ? e
                    : 0 === e.length
                    ? [[d(t, r), "=", d(n, r)].join("")]
                    : [[e, d(n, r)].join(r.arrayFormatSeparator)];
                };
              };
            default:
              return function (e) {
                return function (n, o) {
                  return void 0 === o ||
                    (r.skipNull && null === o) ||
                    (r.skipEmptyString && "" === o)
                    ? n
                    : [].concat(
                        t(n),
                        null === o
                          ? [d(e, r)]
                          : [[d(e, r), "=", d(o, r)].join("")]
                      );
                };
              };
          }
        }
        function y(r) {
          var t;
          switch (r.arrayFormat) {
            case "index":
              return function (r, e, n) {
                (t = /\[(\d*)\]$/.exec(r)),
                  (r = r.replace(/\[\d*\]$/, "")),
                  t
                    ? (void 0 === n[r] && (n[r] = {}), (n[r][t[1]] = e))
                    : (n[r] = e);
              };
            case "bracket":
              return function (r, e, n) {
                (t = /(\[\])$/.exec(r)),
                  (r = r.replace(/\[\]$/, "")),
                  t
                    ? void 0 !== n[r]
                      ? (n[r] = [].concat(n[r], e))
                      : (n[r] = [e])
                    : (n[r] = e);
              };
            case "comma":
            case "separator":
              return function (t, e, n) {
                var o =
                    "string" == typeof e && e.includes(r.arrayFormatSeparator),
                  a =
                    "string" == typeof e &&
                    !o &&
                    b(e, r).includes(r.arrayFormatSeparator);
                e = a ? b(e, r) : e;
                var i =
                  o || a
                    ? e.split(r.arrayFormatSeparator).map(function (t) {
                        return b(t, r);
                      })
                    : null === e
                    ? e
                    : b(e, r);
                n[t] = i;
              };
            default:
              return function (r, t, e) {
                void 0 !== e[r] ? (e[r] = [].concat(e[r], t)) : (e[r] = t);
              };
          }
        }
        function m(r) {
          if ("string" != typeof r || 1 !== r.length)
            throw new TypeError(
              "arrayFormatSeparator must be single character string"
            );
        }
        function d(r, t) {
          return t.encode ? (t.strict ? u(r) : encodeURIComponent(r)) : r;
        }
        function b(r, t) {
          return t.decode ? c(r) : r;
        }
        function g(t) {
          return Array.isArray(t)
            ? t.sort()
            : "object" === r(t)
            ? g(Object.keys(t))
                .sort(function (r, t) {
                  return Number(r) - Number(t);
                })
                .map(function (r) {
                  return t[r];
                })
            : t;
        }
        function v(r) {
          var t = r.indexOf("#");
          return -1 !== t && (r = r.slice(0, t)), r;
        }
        function j(r) {
          var t = "",
            e = r.indexOf("#");
          return -1 !== e && (t = r.slice(e)), t;
        }
        function x(r) {
          var t = (r = v(r)).indexOf("?");
          return -1 === t ? "" : r.slice(t + 1);
        }
        function S(r, t) {
          return (
            t.parseNumbers &&
            !Number.isNaN(Number(r)) &&
            "string" == typeof r &&
            "" !== r.trim()
              ? (r = Number(r))
              : !t.parseBooleans ||
                null === r ||
                ("true" !== r.toLowerCase() && "false" !== r.toLowerCase()) ||
                (r = "true" === r.toLowerCase()),
            r
          );
        }
        function O(t, e) {
          m(
            (e = Object.assign(
              {
                decode: !0,
                sort: !0,
                arrayFormat: "none",
                arrayFormatSeparator: ",",
                parseNumbers: !1,
                parseBooleans: !1,
              },
              e
            )).arrayFormatSeparator
          );
          var n = y(e),
            o = Object.create(null);
          if ("string" != typeof t) return o;
          if (!(t = t.trim().replace(/^[?#&]/, ""))) return o;
          for (var a of t.split("&"))
            if ("" !== a) {
              var [i, u] = s(e.decode ? a.replace(/\+/g, " ") : a, "=");
              (u =
                void 0 === u
                  ? null
                  : ["comma", "separator"].includes(e.arrayFormat)
                  ? u
                  : b(u, e)),
                n(b(i, e), u, o);
            }
          for (var c of Object.keys(o)) {
            var f = o[c];
            if ("object" === r(f) && null !== f)
              for (var l of Object.keys(f)) f[l] = S(f[l], e);
            else o[c] = S(f, e);
          }
          return !1 === e.sort
            ? o
            : (!0 === e.sort
                ? Object.keys(o).sort()
                : Object.keys(o).sort(e.sort)
              ).reduce(function (t, e) {
                var n = o[e];
                return (
                  Boolean(n) && "object" === r(n) && !Array.isArray(n)
                    ? (t[e] = g(n))
                    : (t[e] = n),
                  t
                );
              }, Object.create(null));
        }
        (exports.extract = x),
          (exports.parse = O),
          (exports.stringify = function (r, t) {
            if (!r) return "";
            m(
              (t = Object.assign(
                {
                  encode: !0,
                  strict: !0,
                  arrayFormat: "none",
                  arrayFormatSeparator: ",",
                },
                t
              )).arrayFormatSeparator
            );
            var e = function (e) {
                return (
                  (t.skipNull && l(r[e])) || (t.skipEmptyString && "" === r[e])
                );
              },
              n = p(t),
              o = {};
            for (var a of Object.keys(r)) e(a) || (o[a] = r[a]);
            var i = Object.keys(o);
            return (
              !1 !== t.sort && i.sort(t.sort),
              i
                .map(function (e) {
                  var o = r[e];
                  return void 0 === o
                    ? ""
                    : null === o
                    ? d(e, t)
                    : Array.isArray(o)
                    ? o.reduce(n(e), []).join("&")
                    : d(e, t) + "=" + d(o, t);
                })
                .filter(function (r) {
                  return r.length > 0;
                })
                .join("&")
            );
          }),
          (exports.parseUrl = function (r, t) {
            t = Object.assign({ decode: !0 }, t);
            var [e, n] = s(r, "#");
            return Object.assign(
              { url: e.split("?")[0] || "", query: O(x(r), t) },
              t && t.parseFragmentIdentifier && n
                ? { fragmentIdentifier: b(n, t) }
                : {}
            );
          }),
          (exports.stringifyUrl = function (r, t) {
            t = Object.assign({ encode: !0, strict: !0 }, t);
            var e = v(r.url).split("?")[0] || "",
              n = exports.extract(r.url),
              o = exports.parse(n, { sort: !1 }),
              a = Object.assign(o, r.query),
              i = exports.stringify(a, t);
            i && (i = "?".concat(i));
            var u = j(r.url);
            return (
              r.fragmentIdentifier &&
                (u = "#".concat(d(r.fragmentIdentifier, t))),
              "".concat(e).concat(i).concat(u)
            );
          }),
          (exports.pick = function (r, t, e) {
            e = Object.assign({ parseFragmentIdentifier: !0 }, e);
            var {
              url: n,
              query: o,
              fragmentIdentifier: a,
            } = exports.parseUrl(r, e);
            return exports.stringifyUrl(
              { url: n, query: f(o, t), fragmentIdentifier: a },
              e
            );
          }),
          (exports.exclude = function (r, t, e) {
            var n = Array.isArray(t)
              ? function (r) {
                  return !t.includes(r);
                }
              : function (r, e) {
                  return !t(r, e);
                };
            return exports.pick(r, n, e);
          });
      },
      {
        "strict-uri-encode": "A2is",
        "decode-uri-component": "pWxZ",
        "split-on-first": "t7Jq",
        "filter-obj": "Vk1D",
      },
    ],
    c3KK: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = exports.Popup = void 0);
        var e = require("../../config"),
          t = o(require("./_build-popup"));
        function o(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function p(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function s(e, t) {
          for (var o = 0; o < t.length; o++) {
            var p = t[o];
            (p.enumerable = p.enumerable || !1),
              (p.configurable = !0),
              "value" in p && (p.writable = !0),
              Object.defineProperty(e, p.key, p);
          }
        }
        function i(e, t, o) {
          return t && s(e.prototype, t), o && s(e, o), e;
        }
        var n = require("query-string"),
          u = {
            popupParentNode: "js-popup",
            popupTriggerNode: e.appCssClasses.openPopupTrigger,
            closePopupNode: "js-popup__close",
            visiblePopup: "is-visible",
          },
          r = (function () {
            function o() {
              p(this, o),
                (this.state = {
                  openPopupId: null,
                  isPopupSilent: !1,
                  initedTriggerNodes: [],
                }),
                (this.closePopupArray = null),
                (this.openPopupArray = null),
                (this.popupNodesArray = null),
                (this.popupNode = null),
                (this._buildPopup = t.default.bind(this));
            }
            return (
              i(o, [
                {
                  key: "_initNodes",
                  value: function () {
                    (this.closePopupArray = Array.from(
                      document.querySelectorAll("." + u.closePopupNode)
                    )),
                      (this.openPopupArray = Array.from(
                        document.querySelectorAll("." + u.popupTriggerNode)
                      )),
                      (this.popupNodesArray = Array.from(
                        document.querySelectorAll("." + u.popupParentNode)
                      ));
                  },
                },
                {
                  key: "_initEvents",
                  value: function () {
                    var e = this;
                    this.closePopupArray.forEach(function (t) {
                      t.addEventListener("click", function (t) {
                        t.preventDefault(),
                          e.state.openPopupId && e._closePopup();
                      });
                    }),
                      this.openPopupArray.forEach(function (t) {
                        var o = t.dataset.popupId;
                        o ||
                          (t.setAttribute("data-popup-id", "id_" + Date.now()),
                          t.setAttribute("data-popup-is-silent", ""),
                          e._buildPopup(t)),
                          -1 == e.state.initedTriggerNodes.indexOf(t) &&
                            (e.state.initedTriggerNodes.push(t),
                            t.addEventListener("click", function (p) {
                              p.preventDefault(),
                                (e.state.isPopupSilent =
                                  void 0 !== t.dataset.popupIsSilent),
                                e.openPopup(o);
                            }));
                      }),
                      window.addEventListener("popstate", function () {
                        e._checkUrl();
                      });
                  },
                },
                {
                  key: "_removeEvents",
                  value: function () {
                    this.closePopupArray.forEach(function (e) {
                      e.removeEventListener("click", function () {});
                    }),
                      this.openPopupArray.forEach(function (e) {
                        e.removeEventListener("click", function () {});
                      });
                  },
                },
                {
                  key: "_checkUrl",
                  value: function () {
                    var e = this,
                      t = n.parseUrl(location.href).query.popupId;
                    t
                      ? setTimeout(function () {
                          e.openPopup(t);
                        }, 500)
                      : this.closeAllPopups();
                  },
                },
                {
                  key: "_setUrl",
                  value: function () {
                    var t = n.parseUrl(location.href);
                    this.state.isPopupSilent ||
                      (this.state.openPopupId
                        ? (t.query[e.UrlSearchParams.popupId] =
                            this.state.openPopupId)
                        : delete t.query[e.UrlSearchParams.popupId],
                      window.history.replaceState("", "", n.stringifyUrl(t)));
                  },
                },
                {
                  key: "_closePopup",
                  value: function () {
                    document
                      .getElementById(this.state.openPopupId)
                      .classList.remove(u.visiblePopup),
                      (this.state.openPopupId = null),
                      document.body.classList.remove(e.appCssClasses.bodyFixed),
                      this._setUrl();
                  },
                },
                {
                  key: "openPopup",
                  value: function (t) {
                    document.getElementById(t)
                      ? (this.state.openPopupId && this._closePopup(),
                        (this.state.openPopupId = t),
                        document.body.classList.add(e.appCssClasses.bodyFixed),
                        document
                          .getElementById(t)
                          .classList.add(u.visiblePopup),
                        this._setUrl())
                      : console.warn("No popup content with ID: " + t);
                  },
                },
                {
                  key: "closeAllPopups",
                  value: function () {
                    this.popupNodesArray.forEach(function (e) {
                      e.classList.remove(u.visiblePopup);
                    }),
                      (this.state.openPopupId = null),
                      this._setUrl(),
                      document.body.classList.remove(e.appCssClasses.bodyFixed);
                  },
                },
                {
                  key: "refresh",
                  value: function () {
                    this._initNodes(), this._removeEvents(), this._initEvents();
                  },
                },
                {
                  key: "init",
                  value: function () {
                    this._initNodes(), this._initEvents(), this._checkUrl();
                  },
                },
              ]),
              o
            );
          })();
        exports.Popup = r;
        var a = r;
        exports.default = a;
      },
      {
        "../../config": "itQ5",
        "./_build-popup": "v47c",
        "query-string": "FvpG",
      },
    ],
    LJ8w: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = require("../config"),
          s = t(require("./App/app"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function o(e, s) {
          if (!(e instanceof s))
            throw new TypeError("Cannot call a class as a function");
        }
        function a(e, s) {
          for (var t = 0; t < s.length; t++) {
            var o = s[t];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        function n(e, s, t) {
          return s && a(e.prototype, s), t && a(e, t), e;
        }
        var i = e.appCssClasses.toggleCssClass,
          l = (function () {
            function t() {
              o(this, t), (this.parentNodesArray = []);
            }
            return (
              n(t, [
                {
                  key: "_initNodes",
                  value: function () {
                    this.parentNodesArray = Array.from(
                      document.querySelectorAll("." + i)
                    );
                  },
                },
                {
                  key: "_initEvents",
                  value: function () {
                    var t = this;
                    this.parentNodesArray.forEach(function (o) {
                      var a =
                        void 0 !== o.dataset.toggleOnMouseenter
                          ? "mouseenter"
                          : "click";
                      void 0 !== o.dataset.toggleOuterClickRemove &&
                        (s.default.customEventsListeners.push(o),
                        o.addEventListener(
                          e.customEvents.closeDropdown,
                          function () {
                            t._toggleCssClass(o, !0);
                          }
                        )),
                        o.addEventListener(a, function e() {
                          void 0 !== o.dataset.toggleOnce &&
                            o.removeEventListener("mouseenter", e),
                            t._toggleCssClass(o);
                        });
                    });
                  },
                },
                {
                  key: "_toggleCssClass",
                  value: function (s, t) {
                    var o = s.dataset.toggleClass,
                      a = void 0 !== s.dataset.bodyBlock,
                      n = document.getElementById(s.dataset.toggleTargetId),
                      i = s.closest("." + s.dataset.toggleClosestTarget),
                      l = null;
                    o
                      ? (n &&
                          (t ? n.classList.remove(o) : n.classList.toggle(o)),
                        i &&
                          (t ? i.classList.remove(o) : i.classList.toggle(o)),
                        n ||
                          i ||
                          (t ? s.classList.remove(o) : s.classList.toggle(o)),
                        (l =
                          (n && n.classList.contains(o)) ||
                          (i && i.classList.contains(o)) ||
                          s.classList.contains(o)),
                        a &&
                          (l
                            ? document.body.classList.add(
                                e.appCssClasses.bodyFixed
                              )
                            : document.body.classList.remove(
                                e.appCssClasses.bodyFixed
                              )))
                      : console.warn("ToggleCssClass: No css class to toggle");
                  },
                },
                {
                  key: "init",
                  value: function () {
                    this._initNodes(), this._initEvents();
                  },
                },
              ]),
              t
            );
          })();
        exports.default = l;
      },
      { "../config": "itQ5", "./App/app": "LaDf" },
    ],
    F83b: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var t = require("../config");
        function e(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function s(t, e) {
          for (var s = 0; s < e.length; s++) {
            var a = e[s];
            (a.enumerable = a.enumerable || !1),
              (a.configurable = !0),
              "value" in a && (a.writable = !0),
              Object.defineProperty(t, a.key, a);
          }
        }
        function a(t, e, a) {
          return e && s(t.prototype, e), a && s(t, a), t;
        }
        var n = {
            parentNode: t.appCssClasses.changeTabs,
            tabNameCssClass: "js-change-tabs__name",
            visibleTabCssClass: t.appCssClasses.isVisible,
            currentTabNameCssClass: t.appCssClasses.isCurrent,
          },
          i = 5e3,
          o = (function () {
            function t(s) {
              var a = this;
              e(this, t),
                (this.parentNode = s),
                (this.state = {
                  isChangeOnHover: !1,
                  isAutoplay: !1,
                  currentTabIndex: 0,
                }),
                (this.tabNamesNodes = null),
                (this.autoplayInterval = null),
                this._initState(),
                this._initNodes(),
                this._initEvents(),
                0 !== this.tabNamesNodes.length &&
                  (this.tabNamesNodes.forEach(function (t, e) {
                    t.classList.contains(n.currentTabNameCssClass) &&
                      (a.state.currentTabIndex = e);
                  }),
                  this._setActiveTab(
                    this.tabNamesNodes[this.state.currentTabIndex]
                  ),
                  this.state.isAutoplay && this._startAutoplay());
            }
            return (
              a(t, [
                {
                  key: "_initState",
                  value: function () {
                    void 0 !== this.parentNode.dataset.changeTabsOnHover &&
                      (this.state.isChangeOnHover = !0),
                      void 0 !== this.parentNode.dataset.changeTabsAutoplay &&
                        (this.state.isAutoplay = !0);
                  },
                },
                {
                  key: "_initNodes",
                  value: function () {
                    this.tabNamesNodes = Array.from(
                      this.parentNode.querySelectorAll("." + n.tabNameCssClass)
                    );
                  },
                },
                {
                  key: "_initEvents",
                  value: function () {
                    var t = this;
                    this.state.isAutoplay &&
                      (this.parentNode.addEventListener(
                        "mouseenter",
                        function () {
                          t._stopAutoplay();
                        }
                      ),
                      this.parentNode.addEventListener(
                        "mouseleave",
                        function () {
                          t._startAutoplay();
                        }
                      )),
                      this.tabNamesNodes.forEach(function (e) {
                        t.state.isChangeOnHover
                          ? e.addEventListener("mouseenter", function () {
                              t._setActiveTab(e);
                            })
                          : e.addEventListener("click", function () {
                              t._setActiveTab(e);
                            });
                      });
                  },
                },
                {
                  key: "_startAutoplay",
                  value: function () {
                    var t = this;
                    this.autoplayInterval = setInterval(function () {
                      var e =
                        t.state.currentTabIndex + 1 <=
                        t.tabNamesNodes.length - 1
                          ? t.state.currentTabIndex + 1
                          : 0;
                      t._setActiveTab(t.tabNamesNodes[e]);
                    }, i);
                  },
                },
                {
                  key: "_stopAutoplay",
                  value: function () {
                    clearInterval(this.autoplayInterval);
                  },
                },
                {
                  key: "_setActiveTab",
                  value: function (t) {
                    if (!t.dataset.changeTabsShowId)
                      return (
                        console.warn(
                          "change-tabs.ts: Invalid showTabId to show"
                        ),
                        null
                      );
                    -1 !== this.tabNamesNodes.indexOf(t)
                      ? (this.state.currentTabIndex =
                          this.tabNamesNodes.indexOf(t))
                      : (this.state.currentTabIndex = 0);
                    try {
                      this.tabNamesNodes.forEach(function (t) {
                        t && t.classList.remove(n.currentTabNameCssClass),
                          document
                            .getElementById(t.dataset.changeTabsShowId)
                            .classList.remove(n.visibleTabCssClass);
                      }),
                        t && t.classList.add(n.currentTabNameCssClass),
                        document
                          .getElementById(t.dataset.changeTabsShowId)
                          .classList.add(n.visibleTabCssClass);
                    } catch (e) {
                      console.warn(
                        "change-tabs.ts: Can't find appropriate HTMLElement with changeTabsShowId"
                      );
                    }
                  },
                },
              ]),
              t
            );
          })();
        exports.default = o;
      },
      { "../config": "itQ5" },
    ],
    KGZb: [
      function (require, module, exports) {
        var t,
          n,
          e,
          o,
          i,
          r,
          a,
          c,
          p,
          s,
          l,
          d,
          u,
          f,
          m,
          b,
          g,
          h,
          x,
          v,
          y,
          w,
          _,
          T,
          k,
          M,
          S,
          L,
          E,
          A,
          H,
          z,
          C,
          I = [],
          D = {},
          O = "appendChild",
          N = "createElement",
          V = "removeChild";
        function W(p) {
          return (
            n || q(),
            u && (clearTimeout(f), Z()),
            (C = p),
            (d = p.ytSrc || p.vimeoSrc),
            (T = p.animationStart),
            (k = p.animationEnd),
            (M = p.onChangeImage),
            (t = p.el),
            (_ = !1),
            (h = t.getAttribute("data-caption")),
            p.gallery
              ? P(p.gallery, p.position)
              : d || p.iframeSrc
              ? ((o = c), F())
              : p.imgSrc
              ? ((_ = !0),
                (s = p.imgSrc),
                !~I.indexOf(s) && $(!0),
                ((o = i).src = s))
              : p.audio
              ? ($(!0), ((o = a).src = p.audio), Y("audio file"))
              : p.vidSrc
              ? ($(!0),
                p.dimensions && tt(r, "width:" + p.dimensions[0] + "px"),
                G(p.vidSrc),
                Y("video"))
              : ((o = i).src =
                  "IMG" === t.tagName
                    ? t.src
                    : window
                        .getComputedStyle(t)
                        .backgroundImage.replace(/^url|[(|)|'|"]/g, "")),
            e[O](o),
            document.body[O](e),
            {
              close: Q,
              next: function () {
                return R(1);
              },
              prev: function () {
                return R(-1);
              },
            }
          );
        }
        function q() {
          var t;
          function s(t) {
            var n = document[N]("button");
            return (
              (n.className = t),
              (n.innerHTML =
                '<svg viewBox="0 0 48 48"><path d="M28 24L47 5a3 3 0 1 0-4-4L24 20 5 1a3 3 0 1 0-4 4l19 19L1 43a3 3 0 1 0 4 4l19-19 19 19a3 3 0 0 0 4 0v-4L28 24z"/></svg>'),
              n
            );
          }
          function d(t, n) {
            var e = document[N]("button");
            return (
              (e.className = "bp-lr"),
              (e.innerHTML =
                '<svg viewBox="0 0 129 129" height="70" fill="#fff"><path d="M88.6 121.3c.8.8 1.8 1.2 2.9 1.2s2.1-.4 2.9-1.2a4.1 4.1 0 0 0 0-5.8l-51-51 51-51a4.1 4.1 0 0 0-5.8-5.8l-54 53.9a4.1 4.1 0 0 0 0 5.8l54 53.9z"/></svg>'),
              tt(e, n),
              (e.onclick = function (n) {
                n.stopPropagation(), R(t);
              }),
              e
            );
          }
          var f = document[N]("STYLE");
          (f.innerHTML =
            "#bp_caption,#bp_container{bottom:0;left:0;right:0;position:fixed;opacity:0}#bp_container>*,#bp_loader{position:absolute;right:0;z-index:10}#bp_container,#bp_caption,#bp_container svg{pointer-events:none}#bp_container{top:0;z-index:9999;background:rgba(0,0,0,.7);opacity:0;transition:opacity .35s}#bp_loader{top:0;left:0;bottom:0;display:flex;align-items:center;cursor:wait;background:0;z-index:9}#bp_loader svg{width:50%;max-width:300px;max-height:50%;margin:auto;animation:bpturn 1s infinite linear}#bp_aud,#bp_container img,#bp_sv,#bp_vid{user-select:none;max-height:96%;max-width:96%;top:0;bottom:0;left:0;margin:auto;box-shadow:0 0 3em rgba(0,0,0,.4);z-index:-1}#bp_sv{background:#111}#bp_sv svg{width:66px}#bp_caption{font-size:.9em;padding:1.3em;background:rgba(15,15,15,.94);color:#fff;text-align:center;transition:opacity .3s}#bp_aud{width:650px;top:calc(50% - 20px);bottom:auto;box-shadow:none}#bp_count{left:0;right:auto;padding:14px;color:rgba(255,255,255,.7);font-size:22px;cursor:default}#bp_container button{position:absolute;border:0;outline:0;background:0;cursor:pointer;transition:all .1s}#bp_container>.bp-x{padding:0;height:41px;width:41px;border-radius:100%;top:8px;right:14px;opacity:.8;line-height:1}#bp_container>.bp-x:focus,#bp_container>.bp-x:hover{background:rgba(255,255,255,.2)}.bp-x svg,.bp-xc svg{height:21px;width:20px;fill:#fff;vertical-align:top;}.bp-xc svg{width:16px}#bp_container .bp-xc{left:2%;bottom:100%;padding:9px 20px 7px;background:#d04444;border-radius:2px 2px 0 0;opacity:.85}#bp_container .bp-xc:focus,#bp_container .bp-xc:hover{opacity:1}.bp-lr{top:50%;top:calc(50% - 130px);padding:99px 0;width:6%;background:0;border:0;opacity:.4;transition:opacity .1s}.bp-lr:focus,.bp-lr:hover{opacity:.8}@keyframes bpf{50%{transform:translatex(15px)}100%{transform:none}}@keyframes bpl{50%{transform:translatex(-15px)}100%{transform:none}}@keyframes bpfl{0%{opacity:0;transform:translatex(70px)}100%{opacity:1;transform:none}}@keyframes bpfr{0%{opacity:0;transform:translatex(-70px)}100%{opacity:1;transform:none}}@keyframes bpfol{0%{opacity:1;transform:none}100%{opacity:0;transform:translatex(-70px)}}@keyframes bpfor{0%{opacity:1;transform:none}100%{opacity:0;transform:translatex(70px)}}@keyframes bpturn{0%{transform:none}100%{transform:rotate(360deg)}}@media (max-width:600px){.bp-lr{font-size:15vw}}"),
            document.head[O](f),
            ((e = document[N]("DIV")).id = "bp_container"),
            (e.onclick = Q),
            (l = s("bp-x")),
            e[O](l),
            "ontouchstart" in window &&
              ((z = !0),
              (e.ontouchstart = function (n) {
                var e = n.changedTouches;
                t = e[0].pageX;
              }),
              (e.ontouchmove = function (t) {
                t.preventDefault();
              }),
              (e.ontouchend = function (n) {
                var e = n.changedTouches;
                if (y) {
                  var o = e[0].pageX - t;
                  o < -30 && R(1), o > 30 && R(-1);
                }
              })),
            (i = document[N]("IMG")),
            ((r = document[N]("VIDEO")).id = "bp_vid"),
            r.setAttribute("playsinline", !0),
            (r.controls = !0),
            (r.loop = !0),
            ((a = document[N]("audio")).id = "bp_aud"),
            (a.controls = !0),
            (a.loop = !0),
            ((H = document[N]("span")).id = "bp_count"),
            ((b = document[N]("DIV")).id = "bp_caption"),
            ((x = s("bp-xc")).onclick = j.bind(null, !1)),
            b[O](x),
            (g = document[N]("SPAN")),
            b[O](g),
            e[O](b),
            (S = d(1, "transform:scalex(-1)")),
            (L = d(-1, "left:0;right:auto")),
            ((m = document[N]("DIV")).id = "bp_loader"),
            (m.innerHTML =
              '<svg viewbox="0 0 32 32" fill="#fff" opacity=".8"><path d="M16 0a16 16 0 0 0 0 32 16 16 0 0 0 0-32m0 4a12 12 0 0 1 0 24 12 12 0 0 1 0-24" fill="#000" opacity=".5"/><path d="M16 0a16 16 0 0 1 16 16h-4A12 12 0 0 0 16 4z"/></svg>'),
            ((c = document[N]("DIV")).id = "bp_sv"),
            (p = document[N]("IFRAME")).setAttribute("allowfullscreen", !0),
            (p.allow = "autoplay; fullscreen"),
            (p.onload = function () {
              return c[V](m);
            }),
            tt(
              p,
              "border:0;position:absolute;height:100%;width:100%;left:0;top:0"
            ),
            c[O](p),
            (i.onload = K),
            (i.onerror = K.bind(null, "image")),
            window.addEventListener("resize", function () {
              y || (u && $(!0)), o === c && U();
            }),
            document.addEventListener("keyup", function (t) {
              var n = t.keyCode;
              27 === n && v && Q(),
                y &&
                  (39 === n && R(1),
                  37 === n && R(-1),
                  38 === n && R(10),
                  40 === n && R(-10));
            }),
            document.addEventListener("keydown", function (t) {
              y && ~[37, 38, 39, 40].indexOf(t.keyCode) && t.preventDefault();
            }),
            document.addEventListener(
              "focus",
              function (t) {
                v && !e.contains(t.target) && (t.stopPropagation(), l.focus());
              },
              !0
            ),
            (n = !0);
        }
        function B() {
          var n = t.getBoundingClientRect(),
            i = n.top,
            r = n.left,
            a = n.width,
            c = n.height;
          return (
            "transform:translate3D(" +
            (r - (e.clientWidth - a) / 2) +
            "px, " +
            (i - (e.clientHeight - c) / 2) +
            "px, 0) scale3D(" +
            t.clientWidth / o.clientWidth +
            ", " +
            t.clientHeight / o.clientHeight +
            ", 0)"
          );
        }
        function G(t) {
          Array.isArray(t)
            ? ((o = r.cloneNode()),
              t.forEach(function (t) {
                var n = document[N]("SOURCE");
                (n.src = t),
                  (n.type = "video/" + t.match(/.(\w+)$/)[1]),
                  o[O](n);
              }))
            : ((o = r).src = t);
        }
        function P(n, r) {
          var a = C.galleryAttribute || "data-bp";
          if (Array.isArray(n)) (A = n), (h = n[(E = r || 0)].caption);
          else {
            var c = (A = [].slice.call(
              "string" == typeof n
                ? document.querySelectorAll(n + " [" + a + "]")
                : n
            )).indexOf(t);
            (E = 0 === r || r ? r : -1 !== c ? c : 0),
              (A = A.map(function (t) {
                return {
                  el: t,
                  src: t.getAttribute(a),
                  caption: t.getAttribute("data-caption"),
                };
              }));
          }
          (_ = !0),
            (s = A[E].src),
            !~I.indexOf(s) && $(!0),
            A.length > 1
              ? (e[O](H),
                (H.innerHTML = E + 1 + "/" + A.length),
                z || (e[O](S), e[O](L)))
              : (A = !1),
            ((o = i).src = s);
        }
        function R(t) {
          var n = A.length - 1;
          if (!u) {
            if ((t > 0 && E === n) || (t < 0 && !E)) {
              if (!C.loop)
                return (
                  tt(i, ""),
                  void setTimeout(
                    tt,
                    9,
                    i,
                    "animation:" +
                      (t > 0 ? "bpl" : "bpf") +
                      " .3s;transition:transform .35s"
                  )
                );
              E = t > 0 ? -1 : n + 1;
            }
            if (
              ([(E = Math.max(0, Math.min(E + t, n))) - 1, E, E + 1].forEach(
                function (t) {
                  if (((t = Math.max(0, Math.min(t, n))), !D[t])) {
                    var e = A[t].src,
                      o = document[N]("IMG");
                    o.addEventListener("load", J.bind(null, e)),
                      (o.src = e),
                      (D[t] = o);
                  }
                }
              ),
              D[E].complete)
            )
              return X(t);
            (u = !0),
              tt(m, "opacity:.4;"),
              e[O](m),
              (D[E].onload = function () {
                y && X(t);
              }),
              (D[E].onerror = function () {
                (A[E] = { error: "Error loading image" }), y && X(t);
              });
          }
        }
        function X(n) {
          u && (e[V](m), (u = !1));
          var r = A[E];
          if (r.error) alert(r.error);
          else {
            var a = e.querySelector("img:last-of-type");
            tt(
              (i = o = D[E]),
              "animation:" +
                (n > 0 ? "bpfl" : "bpfr") +
                " .35s;transition:transform .35s"
            ),
              tt(a, "animation:" + (n > 0 ? "bpfol" : "bpfor") + " .35s both"),
              e[O](i),
              r.el && (t = r.el);
          }
          (H.innerHTML = E + 1 + "/" + A.length),
            j(A[E].caption),
            M && M([i, A[E]]);
        }
        function F() {
          var t;
          C.ytSrc
            ? (t =
                "https://www.youtube" +
                (C.ytNoCookie ? "-nocookie" : "") +
                ".com/embed/" +
                d +
                "?html5=1&rel=0&playsinline=1&autoplay=1")
            : C.vimeoSrc
            ? (t = "https://player.vimeo.com/video/" + d + "?autoplay=1")
            : C.iframeSrc && (t = C.iframeSrc),
            tt(m, ""),
            c[O](m),
            (p.src = t),
            U(),
            setTimeout(K, 9);
        }
        function U() {
          var t,
            n,
            e = 0.95 * window.innerHeight,
            o = 0.95 * window.innerWidth,
            i = e / o,
            r = C.dimensions || [1920, 1080],
            a = r[0],
            p = r[1],
            s = p / a;
          s > i
            ? (n = (t = Math.min(p, e)) / s)
            : (t = (n = Math.min(a, o)) * s),
            (c.style.cssText += "width:" + n + "px;height:" + t + "px;");
        }
        function Y(t) {
          ~[1, 4].indexOf(o.readyState)
            ? (K(),
              setTimeout(function () {
                o.play();
              }, 99))
            : o.error
            ? K(t)
            : (f = setTimeout(Y, 35, t));
        }
        function $(n) {
          C.noLoader ||
            (n &&
              tt(
                m,
                "top:" +
                  t.offsetTop +
                  "px;left:" +
                  t.offsetLeft +
                  "px;height:" +
                  t.clientHeight +
                  "px;width:" +
                  t.clientWidth +
                  "px"
              ),
            t.parentElement[n ? O : V](m),
            (u = n));
        }
        function j(t) {
          t && (g.innerHTML = t),
            tt(b, "opacity:" + (t ? "1;pointer-events:auto" : "0"));
        }
        function J(t) {
          !~I.indexOf(t) && I.push(t);
        }
        function K(t) {
          if ((u && $(), T && T(), "string" == typeof t))
            return (
              Z(),
              C.onError
                ? C.onError()
                : alert("Error: The requested " + t + " could not be loaded.")
            );
          _ && J(s),
            (o.style.cssText += B()),
            tt(e, "opacity:1;pointer-events:auto"),
            k && (k = setTimeout(k, 410)),
            (v = !0),
            (y = !!A),
            setTimeout(function () {
              (o.style.cssText += "transition:transform .35s;transform:none"),
                h && setTimeout(j, 250, h);
            }, 60);
        }
        function Q(t) {
          var n = t ? t.target : e,
            i = [b, x, r, a, g, L, S, m];
          n.blur(),
            w ||
              ~i.indexOf(n) ||
              ((o.style.cssText += B()),
              tt(e, "pointer-events:auto"),
              setTimeout(Z, 350),
              clearTimeout(k),
              (v = !1),
              (w = !0));
        }
        function Z() {
          if (
            ((o === c ? p : o).removeAttribute("src"),
            document.body[V](e),
            e[V](o),
            tt(e, ""),
            tt(o, ""),
            j(!1),
            y)
          ) {
            for (var t = e.querySelectorAll("img"), n = 0; n < t.length; n++)
              e[V](t[n]);
            u && e[V](m),
              e[V](H),
              (y = A = !1),
              (D = {}),
              z || e[V](S),
              z || e[V](L),
              (i.onload = K),
              (i.onerror = K.bind(null, "image"));
          }
          C.onClose && C.onClose(), (w = u = !1);
        }
        function tt(t, n) {
          t.style.cssText = n;
        }
        module.exports = W;
      },
      {},
    ],
    C8O2: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = t(require("bigpicture")),
          i = require("../config");
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r(e, i) {
          if (!(e instanceof i))
            throw new TypeError("Cannot call a class as a function");
        }
        function a(e, i) {
          for (var t = 0; t < i.length; t++) {
            var r = i[t];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function n(e, i, t) {
          return i && a(e.prototype, i), t && a(e, t), e;
        }
        var s = {
            triggerNode: i.appCssClasses.bigMedia,
            bigMediaGallery: "js-big-media__gallery",
          },
          l = (function () {
            function i() {
              r(this, i), (this.triggersArray = []);
            }
            return (
              n(i, [
                {
                  key: "_initNodes",
                  value: function () {
                    this.triggersArray = Array.from(
                      document.querySelectorAll("." + s.triggerNode)
                    );
                  },
                },
                {
                  key: "_initEvents",
                  value: function () {
                    var e = this;
                    this.triggersArray.forEach(function (i) {
                      i.addEventListener("click", function (t) {
                        t.preventDefault(), e._onTriggerClick(i);
                      });
                    });
                  },
                },
                {
                  key: "_onTriggerClick",
                  value: function (i) {
                    var t = i.dataset.bigMedia,
                      r = i.dataset.bigMediaType || "image",
                      a = null;
                    if (
                      (i.closest("." + s.bigMediaGallery) &&
                        (a = this.triggersArray.map(function (e) {
                          return { src: e.dataset.bigMedia };
                        })),
                      t)
                    )
                      switch (r) {
                        case "youtube":
                          (0, e.default)({ el: i, ytSrc: t });
                          break;
                        case "image":
                        default:
                          (0, e.default)({ el: i, imgSrc: t, gallery: a });
                      }
                    else
                      console.warn(
                        "Can't find necessary data-big-media in big-media.ts"
                      );
                  },
                },
                {
                  key: "init",
                  value: function () {
                    this._initNodes(), this._initEvents();
                  },
                },
              ]),
              i
            );
          })();
        exports.default = l;
      },
      { bigpicture: "KGZb", "../config": "itQ5" },
    ],
    iATh: [
      function (require, module, exports) {
        "use strict";
        function t(n) {
          return (t =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(n);
        }
        function n(t, n) {
          if (!(t instanceof n))
            throw new TypeError("Cannot call a class as a function");
        }
        function e(t, n) {
          for (var e = 0; e < n.length; e++) {
            var i = n[e];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i);
          }
        }
        function i(t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var o = (function () {
          function e(t) {
            n(this, e),
              (this.options = {
                cont: null,
                countdown: !0,
                date: {
                  year: 0,
                  month: 0,
                  day: 0,
                  hour: 0,
                  minute: 0,
                  second: 0,
                },
                endCallback: null,
                outputFormat: "year|week|day|hour|minute|second",
                outputTranslation: {
                  year: "Years",
                  week: "Weeks",
                  day: "Days",
                  hour: "Hours",
                  minute: "Minutes",
                  second: "Seconds",
                },
              }),
              (this.lastTick = null),
              (this.intervalsBySize = [
                "year",
                "week",
                "day",
                "hour",
                "minute",
                "second",
              ]),
              (this.elementClassPrefix = "countDown_"),
              (this.interval = null),
              (this.digitConts = {}),
              this._assignOptions(this.options, t);
          }
          return (
            i(e, [
              {
                key: "TIMESTAMP_SECOND",
                get: function () {
                  return 1e3;
                },
              },
              {
                key: "TIMESTAMP_MINUTE",
                get: function () {
                  return 60 * this.TIMESTAMP_SECOND;
                },
              },
              {
                key: "TIMESTAMP_HOUR",
                get: function () {
                  return 60 * this.TIMESTAMP_MINUTE;
                },
              },
              {
                key: "TIMESTAMP_DAY",
                get: function () {
                  return 24 * this.TIMESTAMP_HOUR;
                },
              },
              {
                key: "TIMESTAMP_WEEK",
                get: function () {
                  return 7 * this.TIMESTAMP_DAY;
                },
              },
              {
                key: "TIMESTAMP_YEAR",
                get: function () {
                  return 365 * this.TIMESTAMP_DAY;
                },
              },
              {
                key: "start",
                value: function () {
                  var t,
                    n,
                    e = this;
                  this._fixCompatibility(),
                    (t = this._getDate(this.options.date)),
                    (n = this._prepareTimeByOutputFormat(t)),
                    this._writeData(n),
                    (this.lastTick = n),
                    this.options.countdown && t.getTime() <= Date.now()
                      ? (this.stop(),
                        "function" == typeof this.options.endCallback &&
                          this.options.endCallback())
                      : (this.interval = setInterval(function () {
                          e.options.countdown && t.getTime() <= Date.now()
                            ? (e.stop(),
                              "function" == typeof e.options.endCallback &&
                                e.options.endCallback())
                            : e._updateView(e._prepareTimeByOutputFormat(t));
                        }, this.TIMESTAMP_SECOND));
                },
              },
              {
                key: "stop",
                value: function () {
                  null !== this.interval && clearInterval(this.interval);
                },
              },
              {
                key: "_getDate",
                value: function (n) {
                  if ("object" === t(n)) {
                    if (n instanceof Date) return n;
                    var e = {
                      day: 0,
                      month: 0,
                      year: 0,
                      hour: 0,
                      minute: 0,
                      second: 0,
                    };
                    for (var i in e)
                      e.hasOwnProperty(i) &&
                        n.hasOwnProperty(i) &&
                        (e[i] = n[i]);
                    return new Date(
                      e.year,
                      e.month > 0 ? e.month - 1 : e.month,
                      e.day,
                      e.hour,
                      e.minute,
                      e.second
                    );
                  }
                  return "number" == typeof n || "string" == typeof n
                    ? new Date(n)
                    : new Date();
                },
              },
              {
                key: "_prepareTimeByOutputFormat",
                value: function (t) {
                  var n,
                    e,
                    i = this,
                    o = {};
                  return (
                    (n = this.intervalsBySize.filter(function (t) {
                      return (
                        -1 !== i.options.outputFormat.split("|").indexOf(t)
                      );
                    })),
                    (e = this.options.countdown
                      ? t.getTime() - Date.now()
                      : Date.now() - t.getTime()),
                    n.forEach(function (t) {
                      var n;
                      if (e > 0)
                        switch (t) {
                          case "year":
                            (n = Math.trunc(e / i.TIMESTAMP_YEAR)),
                              (e -= n * i.TIMESTAMP_YEAR);
                            break;
                          case "week":
                            (n = Math.trunc(e / i.TIMESTAMP_WEEK)),
                              (e -= n * i.TIMESTAMP_WEEK);
                            break;
                          case "day":
                            (n = Math.trunc(e / i.TIMESTAMP_DAY)),
                              (e -= n * i.TIMESTAMP_DAY);
                            break;
                          case "hour":
                            (n = Math.trunc(e / i.TIMESTAMP_HOUR)),
                              (e -= n * i.TIMESTAMP_HOUR);
                            break;
                          case "minute":
                            (n = Math.trunc(e / i.TIMESTAMP_MINUTE)),
                              (e -= n * i.TIMESTAMP_MINUTE);
                            break;
                          case "second":
                            (n = Math.trunc(e / i.TIMESTAMP_SECOND)),
                              (e -= n * i.TIMESTAMP_SECOND);
                        }
                      else n = "00";
                      o[t] = (("" + n).length < 2 ? "0" + n : "" + n).split("");
                    }),
                    o
                  );
                },
              },
              {
                key: "_fixCompatibility",
                value: function () {
                  Math.trunc =
                    Math.trunc ||
                    function (t) {
                      return isNaN(t)
                        ? NaN
                        : t > 0
                        ? Math.floor(t)
                        : Math.ceil(t);
                    };
                },
              },
              {
                key: "_writeData",
                value: function (t) {
                  var n,
                    e = this,
                    i = '<div class="'.concat(
                      this.elementClassPrefix,
                      'cont">'
                    );
                  for (n in t)
                    if (t.hasOwnProperty(n)) {
                      var o = '<div class="'
                          .concat(
                            this.elementClassPrefix,
                            'interval_basic_cont">\n                                       <div class="'
                          )
                          .concat(this._getIntervalContCommonClassName(), " ")
                          .concat(this._getIntervalContClassName(n), '">'),
                        a = this.options.outputTranslation[n]
                          ? '<div class="'
                              .concat(
                                this.elementClassPrefix,
                                'interval_basic_cont_description">\n                                                   '
                              )
                              .concat(
                                this.options.outputTranslation[n],
                                "\n                                               </div>"
                              )
                          : "";
                      t[n].forEach(function (t, n) {
                        o += '<div class="'
                          .concat(e._getDigitContCommonClassName(), " ")
                          .concat(
                            e._getDigitContClassName(n),
                            '">\n                                        '
                          )
                          .concat(
                            e._getDigitElementString(t, 0),
                            "\n                                    </div>"
                          );
                      }),
                        (i += o + "</div>" + a + "</div>");
                    }
                  (this.options.cont.innerHTML = i + "</div>"),
                    (this.lastTick = t);
                },
              },
              {
                key: "_getDigitElementString",
                value: function (t, n) {
                  return '<div class="'
                    .concat(
                      this.elementClassPrefix,
                      'digit_last_placeholder">\n                        <div class="'
                    )
                    .concat(
                      this.elementClassPrefix,
                      'digit_last_placeholder_inner">\n                            '
                    )
                    .concat(
                      n,
                      '\n                        </div>\n                    </div>\n                    <div class="'
                    )
                    .concat(this.elementClassPrefix, 'digit_new_placeholder">')
                    .concat(t, '</div>\n                    <div class="')
                    .concat(this.elementClassPrefix, 'digit_last_rotate">')
                    .concat(n, '</div>\n                    <div class="')
                    .concat(
                      this.elementClassPrefix,
                      'digit_new_rotate">\n                        <div class="'
                    )
                    .concat(
                      this.elementClassPrefix,
                      'digit_new_rotated">\n                            <div class="'
                    )
                    .concat(
                      this.elementClassPrefix,
                      'digit_new_rotated_inner">\n                                '
                    )
                    .concat(
                      t,
                      "\n                            </div>\n                        </div>\n                    </div>"
                    );
                },
              },
              {
                key: "_updateView",
                value: function (t) {
                  var n = this,
                    e = function (e) {
                      t.hasOwnProperty(e) &&
                        t[e].forEach(function (i, o) {
                          null !== n.lastTick &&
                            n.lastTick[e][o] !== t[e][o] &&
                            (n._getDigitCont(e, o).innerHTML =
                              n._getDigitElementString(
                                t[e][o],
                                n.lastTick[e][o]
                              ));
                        });
                    };
                  for (var i in t) e(i);
                  this.lastTick = t;
                },
              },
              {
                key: "_getDigitCont",
                value: function (t, n) {
                  return (
                    this.digitConts["".concat(t, "_").concat(n)] ||
                      (this.digitConts["".concat(t, "_").concat(n)] =
                        this.options.cont.querySelector(
                          "."
                            .concat(this._getIntervalContClassName(t), " .")
                            .concat(this._getDigitContClassName(n))
                        )),
                    this.digitConts["".concat(t, "_").concat(n)]
                  );
                },
              },
              {
                key: "_getIntervalContClassName",
                value: function (t) {
                  return ""
                    .concat(this.elementClassPrefix, "interval_cont_")
                    .concat(t);
                },
              },
              {
                key: "_getIntervalContCommonClassName",
                value: function () {
                  return "".concat(this.elementClassPrefix, "interval_cont");
                },
              },
              {
                key: "_getDigitContClassName",
                value: function (t) {
                  return ""
                    .concat(this.elementClassPrefix, "digit_cont_")
                    .concat(t);
                },
              },
              {
                key: "_getDigitContCommonClassName",
                value: function () {
                  return "".concat(this.elementClassPrefix, "digit_cont");
                },
              },
              {
                key: "_assignOptions",
                value: function (n, e) {
                  for (var i in n)
                    n.hasOwnProperty(i) &&
                      e.hasOwnProperty(i) &&
                      (null !== n[i] &&
                      "object" === t(n[i]) &&
                      "object" === t(e[i])
                        ? this._assignOptions(n[i], e[i])
                        : (n[i] = e[i]));
                },
              },
            ]),
            e
          );
        })();
        (exports.default = o),
          "undefined" != typeof window && (window.Countdown = o);
      },
      {},
    ],
    Q76K: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var t = e(require("./CountDownVendor"));
        function e(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function n(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function o(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        function u(t, e, n) {
          return e && o(t.prototype, e), n && o(t, n), t;
        }
        var r = (function () {
          function e(t) {
            n(this, e), (this.rootNode = t), this._initCountdown();
          }
          return (
            u(e, [
              {
                key: "_initCountdown",
                value: function () {
                  var e = this.rootNode.dataset.countdownDate;
                  new t.default({
                    cont: this.rootNode,
                    countdown: !0,
                    date: e,
                    outputTranslation: {
                      day: "Д",
                      hour: null,
                      minute: null,
                      second: null,
                    },
                    outputFormat: "day|hour|minute|second",
                  }).start(),
                    console.log(e);
                },
              },
            ]),
            e
          );
        })();
        exports.default = r;
      },
      { "./CountDownVendor": "iATh" },
    ],
    dDUK: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var t = require("../config");
        function o(t, o) {
          if (!(t instanceof o))
            throw new TypeError("Cannot call a class as a function");
        }
        function e(t, o) {
          for (var e = 0; e < o.length; e++) {
            var i = o[e];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i);
          }
        }
        function i(t, o, i) {
          return o && e(t.prototype, o), i && e(t, i), t;
        }
        var l = {
            isActive: t.appCssClasses.isActive,
            tooltip: "new-tooltip",
            tooltipBubble: "new-tooltip__bubble",
            tooltipBubbleTopCenter: "new-tooltip__bubble_top-center",
            tooltipBubbleTopLeft: "new-tooltip__bubble_top-left",
            tooltipBubbleRightMiddle: "new-tooltip__bubble_right-middle",
            tooltipBubbleBottomRight: "new-tooltip__bubble_bottom-right",
          },
          s = (function () {
            function t(e) {
              o(this, t),
                (this.tooltipRoot = e),
                (this.state = { timeout: null, delay: null, position: null }),
                (this.hideTimeout = null),
                (this.showDelay = null),
                (this.tooltipBubbleNode = null),
                (this.tooltipPosition = "top center"),
                (this.state.timeout = e.dataset.tooltipTimeout
                  ? +e.dataset.tooltipTimeout
                  : 0),
                (this.state.delay = e.dataset.tooltipDelay
                  ? +e.dataset.tooltipDelay
                  : 0),
                (this.state.position = e.dataset.tooltipPosition),
                this.tooltipRoot.classList.add(l.tooltip),
                this._buildTooltipBubble(),
                this._initEvents();
            }
            return (
              i(t, [
                {
                  key: "_initEvents",
                  value: function () {
                    var t = this;
                    this.tooltipRoot.addEventListener(
                      "mouseenter",
                      function () {
                        t._showTooltip();
                      }
                    ),
                      this.tooltipRoot.addEventListener(
                        "mouseleave",
                        function () {
                          t._hideTooltip();
                        }
                      );
                  },
                },
                {
                  key: "_buildTooltipBubble",
                  value: function () {
                    var t = this.state.position;
                    switch (
                      ((this.tooltipBubbleNode =
                        document.createElement("span")),
                      this.tooltipBubbleNode.classList.add(l.tooltipBubble),
                      (this.tooltipBubbleNode.innerHTML =
                        this.tooltipRoot.dataset.tooltipText),
                      t)
                    ) {
                      case "top left":
                        this.tooltipBubbleNode.classList.add(
                          l.tooltipBubbleTopLeft
                        );
                        break;
                      case "right middle":
                        this.tooltipBubbleNode.classList.add(
                          l.tooltipBubbleRightMiddle
                        );
                        break;
                      case "bottom right":
                        this.tooltipBubbleNode.classList.add(
                          l.tooltipBubbleBottomRight
                        );
                        break;
                      case "top center":
                      default:
                        this.tooltipBubbleNode.classList.add(
                          l.tooltipBubbleTopCenter
                        );
                    }
                    this.tooltipRoot.appendChild(this.tooltipBubbleNode);
                  },
                },
                {
                  key: "_showTooltip",
                  value: function () {
                    var t = this;
                    this.hideTimeout && clearTimeout(this.hideTimeout),
                      (this.showDelay = window.setTimeout(function () {
                        t.tooltipRoot.classList.add(l.isActive);
                      }, this.state.delay));
                  },
                },
                {
                  key: "_hideTooltip",
                  value: function () {
                    var t = this;
                    this.showDelay && clearTimeout(this.showDelay),
                      (this.hideTimeout = window.setTimeout(function () {
                        t.tooltipRoot.classList.remove(l.isActive);
                      }, this.state.timeout));
                  },
                },
              ]),
              t
            );
          })();
        exports.default = s;
      },
      { "../config": "itQ5" },
    ],
    waIS: [
      function (require, module, exports) {
        "use strict";
        function t(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function e(t, e) {
          for (var s = 0; s < e.length; s++) {
            var i = e[s];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i);
          }
        }
        function s(t, s, i) {
          return s && e(t.prototype, s), i && e(t, i), t;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var i = { isSticky: "is-sticky", isOnBottom: "is-bottom" },
          o = (function () {
            function e(s) {
              t(this, e),
                (this.stickyBlock = s),
                (this.state = {
                  stickTopOffset: null,
                  stickyAreaTop: null,
                  stickyAreaBottom: null,
                }),
                (this.stickyArea = null),
                this._initNodes(),
                this.stickyArea
                  ? (this._updateState(),
                    this.stickyArea.offsetHeight >
                      s.offsetHeight + this.state.stickTopOffset &&
                      (this._initEvents(), this._updateBlockState()))
                  : console.warn(
                      "%c sticky.ts error:%c Can't find stickyArea node with appropriate ID.",
                      "color: red",
                      "color: auto"
                    );
            }
            return (
              s(e, [
                {
                  key: "_refresh",
                  value: function () {
                    this._updateState(),
                      this.stickyArea.offsetHeight,
                      this.stickyBlock.offsetHeight,
                      this.state.stickTopOffset;
                  },
                },
                {
                  key: "_initNodes",
                  value: function () {
                    this.stickyArea = document.getElementById(
                      this.stickyBlock.dataset.stickyAreaId
                    );
                  },
                },
                {
                  key: "_updateState",
                  value: function () {
                    (this.state.stickTopOffset =
                      void 0 !== this.stickyBlock.dataset.stickyAreaTopOffset
                        ? +this.stickyBlock.dataset.stickyAreaTopOffset
                        : 0),
                      (this.state.stickyAreaTop = Math.round(
                        this.stickyArea.getBoundingClientRect().top +
                          pageYOffset
                      )),
                      (this.state.stickyAreaBottom = Math.round(
                        this.stickyArea.getBoundingClientRect().bottom +
                          pageYOffset
                      ));
                  },
                },
                {
                  key: "_initEvents",
                  value: function () {
                    var t = this;
                    window.addEventListener(
                      "scroll",
                      function () {
                        window.requestAnimationFrame(function () {
                          return t._updateBlockState();
                        });
                      },
                      { passive: !0 }
                    );
                  },
                },
                {
                  key: "_updateBlockState",
                  value: function () {
                    var t = Math.round(
                        this.stickyBlock.getBoundingClientRect().top
                      ),
                      e = Math.round(
                        this.stickyBlock.getBoundingClientRect().bottom +
                          pageYOffset
                      );
                    this.state.stickyAreaTop <=
                    pageYOffset + this.state.stickTopOffset
                      ? this.stickyBlock.classList.add(i.isSticky)
                      : this.stickyBlock.classList.remove(i.isSticky),
                      e >= this.state.stickyAreaBottom &&
                      t <= this.state.stickTopOffset
                        ? this.stickyBlock.classList.add(i.isOnBottom)
                        : this.stickyBlock.classList.remove(i.isOnBottom);
                  },
                },
              ]),
              e
            );
          })();
        exports.default = o;
      },
      {},
    ],
    AscS: [
      function (require, module, exports) {
        "use strict";
        function e(e, o) {
          if (!(e instanceof o))
            throw new TypeError("Cannot call a class as a function");
        }
        function o(e, o) {
          for (var t = 0; t < o.length; t++) {
            var i = o[t];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        function t(e, t, i) {
          return t && o(e.prototype, t), i && o(e, i), e;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var i = {
            isOpen: "is-open",
            spoilerTriggerNode: "js-spoiler__trigger",
            spoilerContentNode: "js-spoiler__content",
            spoilerPlaceholderNode: "js-spoiler__placeholder",
          },
          r = 70,
          s = (function () {
            function o(t) {
              var i = this;
              e(this, o),
                (this.spoilerNode = t),
                (this.state = { isOpen: !1, contentHeight: 0 }),
                (this.spoilerTriggerNode = null),
                (this.spoilerContentNode = null),
                (this.spoilerPlaceholderNode = null),
                this.spoilerNode
                  ? (this._initNodes(),
                    this.spoilerTriggerNode &&
                    this.spoilerPlaceholderNode &&
                    this.spoilerContentNode
                      ? setTimeout(function () {
                          (i.state.contentHeight =
                            i.spoilerContentNode.offsetHeight),
                            i._initEvents(),
                            i._proceedAutoOpen();
                        }, 100)
                      : console.warn(
                          "%c spoiler.ts error:%c Can't find require spoiler elements.",
                          "color: red",
                          "color: auto"
                        ))
                  : console.warn(
                      "%c spoiler.ts error:%c Can't find appropriate HTML node.",
                      "color: red",
                      "color: auto"
                    );
            }
            return (
              t(o, [
                {
                  key: "_initNodes",
                  value: function () {
                    (this.spoilerTriggerNode = this.spoilerNode.querySelector(
                      "." + i.spoilerTriggerNode
                    )),
                      (this.spoilerPlaceholderNode =
                        this.spoilerNode.querySelector(
                          "." + i.spoilerPlaceholderNode
                        )),
                      (this.spoilerContentNode = this.spoilerNode.querySelector(
                        "." + i.spoilerContentNode
                      ));
                  },
                },
                {
                  key: "_initEvents",
                  value: function () {
                    var e = this;
                    this.spoilerTriggerNode.addEventListener(
                      "click",
                      function () {
                        e._toggleSpoiler();
                      }
                    );
                  },
                },
                {
                  key: "_toggleSpoiler",
                  value: function () {
                    this.state.isOpen
                      ? this._closeSpoiler()
                      : this._openSpoiler();
                  },
                },
                {
                  key: "_openSpoiler",
                  value: function () {
                    (this.state.isOpen = !0),
                      this.spoilerNode.classList.add(i.isOpen),
                      (this.spoilerPlaceholderNode.style.height =
                        this.state.contentHeight + "px");
                  },
                },
                {
                  key: "_closeSpoiler",
                  value: function () {
                    (this.state.isOpen = !1),
                      this.spoilerNode.classList.remove(i.isOpen),
                      (this.spoilerPlaceholderNode.style.height = 0);
                  },
                },
                {
                  key: "_proceedAutoOpen",
                  value: function () {
                    var e = void 0 !== this.spoilerNode.dataset.spoilerOpen,
                      o = null,
                      t = null;
                    -1 !== location.href.indexOf("#") &&
                      ((o = location.href.substring(
                        location.href.indexOf("#") + 1
                      )),
                      (t = this.spoilerNode.querySelector("#" + o))),
                      (e || t) &&
                        (this._openSpoiler(),
                        t &&
                          setTimeout(function () {
                            window.scrollTo({
                              top:
                                Math.round(
                                  t.getBoundingClientRect().top + pageYOffset
                                ) - r,
                              behavior: "smooth",
                            });
                          }, 1e3));
                  },
                },
              ]),
              o
            );
          })();
        exports.default = s;
      },
      {},
    ],
    XeFD: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.getWidgetUser = void 0);
        var e = t(require("../App/app"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var i = 3,
          r = {
            widgetUserName: null,
            widgetUserLink: null,
            widgetUserPicUrl: null,
            widgetUserDate: null,
            widgetUserMediaUrl: null,
          },
          n = function () {
            return '\n<div class="showcase__item widget-user">\n    <a class="widget-user__link" href="'
              .concat(
                r.widgetUserLink,
                '" target="_blank"></a>\n\n    <svg class="widget-user__icon-out">\n        <use href="/assets/img/svg/icon-out.svg#icon-out" />\n    </svg>\n\n    <div class="widget-user__header">\n        <div class="widget-user__userpic">\n            <img src="'
              )
              .concat(r.widgetUserPicUrl, '" alt="')
              .concat(
                r.widgetUserName,
                '">\n        </div>\n\n        <div>\n            <div class="widget-user__name">\n                '
              )
              .concat(
                r.widgetUserName,
                '\n            </div>\n\n            <div class="widget-user__meta">\n                '
              )
              .concat(
                r.widgetUserDate,
                '\n            </div>\n        </div>\n    </div>\n\n    <div class="widget-user__media">\n        <img src="'
              )
              .concat(r.widgetUserMediaUrl, '" alt="">\n    </div>\n</div>\n');
          },
          s = function (t) {
            for (
              var s = t.data.list,
                a = "ru" === e.default.state.locale ? "ru" : "en-US",
                d = "",
                c = 0;
              c < i;
              c++
            ) {
              var g = new Date(1e3 * s[c].created);
              (g = g.toLocaleString(a, {
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              })),
                (r.widgetUserDate = g),
                (r.widgetUserName = s[c].author.nickname),
                (r.widgetUserPicUrl = s[c].author.avatar),
                (r.widgetUserMediaUrl = s[c].images[0].src),
                (d += n());
            }
            return d;
          };
        exports.getWidgetUser = s;
      },
      { "../App/app": "LaDf" },
    ],
    EDTP: [
      function (require, module, exports) {
        "use strict";
        module.exports = function (r, n) {
          return function () {
            for (var t = new Array(arguments.length), e = 0; e < t.length; e++)
              t[e] = arguments[e];
            return r.apply(n, t);
          };
        };
      },
      {},
    ],
    S1cf: [
      function (require, module, exports) {
        "use strict";
        var r = require("./helpers/bind"),
          t = Object.prototype.toString;
        function n(r) {
          return "[object Array]" === t.call(r);
        }
        function e(r) {
          return void 0 === r;
        }
        function o(r) {
          return (
            null !== r &&
            !e(r) &&
            null !== r.constructor &&
            !e(r.constructor) &&
            "function" == typeof r.constructor.isBuffer &&
            r.constructor.isBuffer(r)
          );
        }
        function i(r) {
          return "[object ArrayBuffer]" === t.call(r);
        }
        function u(r) {
          return "undefined" != typeof FormData && r instanceof FormData;
        }
        function c(r) {
          return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView(r)
            : r && r.buffer && r.buffer instanceof ArrayBuffer;
        }
        function f(r) {
          return "string" == typeof r;
        }
        function a(r) {
          return "number" == typeof r;
        }
        function l(r) {
          return null !== r && "object" == typeof r;
        }
        function s(r) {
          if ("[object Object]" !== t.call(r)) return !1;
          var n = Object.getPrototypeOf(r);
          return null === n || n === Object.prototype;
        }
        function p(r) {
          return "[object Date]" === t.call(r);
        }
        function d(r) {
          return "[object File]" === t.call(r);
        }
        function y(r) {
          return "[object Blob]" === t.call(r);
        }
        function b(r) {
          return "[object Function]" === t.call(r);
        }
        function j(r) {
          return l(r) && b(r.pipe);
        }
        function v(r) {
          return (
            "undefined" != typeof URLSearchParams &&
            r instanceof URLSearchParams
          );
        }
        function B(r) {
          return r.replace(/^\s*/, "").replace(/\s*$/, "");
        }
        function m() {
          return (
            ("undefined" == typeof navigator ||
              ("ReactNative" !== navigator.product &&
                "NativeScript" !== navigator.product &&
                "NS" !== navigator.product)) &&
            "undefined" != typeof window &&
            "undefined" != typeof document
          );
        }
        function g(r, t) {
          if (null != r)
            if (("object" != typeof r && (r = [r]), n(r)))
              for (var e = 0, o = r.length; e < o; e++)
                t.call(null, r[e], e, r);
            else
              for (var i in r)
                Object.prototype.hasOwnProperty.call(r, i) &&
                  t.call(null, r[i], i, r);
        }
        function A() {
          var r = {};
          function t(t, e) {
            s(r[e]) && s(t)
              ? (r[e] = A(r[e], t))
              : s(t)
              ? (r[e] = A({}, t))
              : n(t)
              ? (r[e] = t.slice())
              : (r[e] = t);
          }
          for (var e = 0, o = arguments.length; e < o; e++) g(arguments[e], t);
          return r;
        }
        function O(t, n, e) {
          return (
            g(n, function (n, o) {
              t[o] = e && "function" == typeof n ? r(n, e) : n;
            }),
            t
          );
        }
        function h(r) {
          return 65279 === r.charCodeAt(0) && (r = r.slice(1)), r;
        }
        module.exports = {
          isArray: n,
          isArrayBuffer: i,
          isBuffer: o,
          isFormData: u,
          isArrayBufferView: c,
          isString: f,
          isNumber: a,
          isObject: l,
          isPlainObject: s,
          isUndefined: e,
          isDate: p,
          isFile: d,
          isBlob: y,
          isFunction: b,
          isStream: j,
          isURLSearchParams: v,
          isStandardBrowserEnv: m,
          forEach: g,
          merge: A,
          extend: O,
          trim: B,
          stripBOM: h,
        };
      },
      { "./helpers/bind": "EDTP" },
    ],
    H6Qo: [
      function (require, module, exports) {
        "use strict";
        var e = require("./../utils");
        function r(e) {
          return encodeURIComponent(e)
            .replace(/%3A/gi, ":")
            .replace(/%24/g, "$")
            .replace(/%2C/gi, ",")
            .replace(/%20/g, "+")
            .replace(/%5B/gi, "[")
            .replace(/%5D/gi, "]");
        }
        module.exports = function (i, n, t) {
          if (!n) return i;
          var a;
          if (t) a = t(n);
          else if (e.isURLSearchParams(n)) a = n.toString();
          else {
            var c = [];
            e.forEach(n, function (i, n) {
              null != i &&
                (e.isArray(i) ? (n += "[]") : (i = [i]),
                e.forEach(i, function (i) {
                  e.isDate(i)
                    ? (i = i.toISOString())
                    : e.isObject(i) && (i = JSON.stringify(i)),
                    c.push(r(n) + "=" + r(i));
                }));
            }),
              (a = c.join("&"));
          }
          if (a) {
            var o = i.indexOf("#");
            -1 !== o && (i = i.slice(0, o)),
              (i += (-1 === i.indexOf("?") ? "?" : "&") + a);
          }
          return i;
        };
      },
      { "./../utils": "S1cf" },
    ],
    rj2i: [
      function (require, module, exports) {
        "use strict";
        var t = require("./../utils");
        function e() {
          this.handlers = [];
        }
        (e.prototype.use = function (t, e) {
          return (
            this.handlers.push({ fulfilled: t, rejected: e }),
            this.handlers.length - 1
          );
        }),
          (e.prototype.eject = function (t) {
            this.handlers[t] && (this.handlers[t] = null);
          }),
          (e.prototype.forEach = function (e) {
            t.forEach(this.handlers, function (t) {
              null !== t && e(t);
            });
          }),
          (module.exports = e);
      },
      { "./../utils": "S1cf" },
    ],
    woEt: [
      function (require, module, exports) {
        "use strict";
        var r = require("./../utils");
        module.exports = function (t, u, e) {
          return (
            r.forEach(e, function (r) {
              t = r(t, u);
            }),
            t
          );
        };
      },
      { "./../utils": "S1cf" },
    ],
    V30M: [
      function (require, module, exports) {
        "use strict";
        module.exports = function (t) {
          return !(!t || !t.__CANCEL__);
        };
      },
      {},
    ],
    M8l6: [
      function (require, module, exports) {
        "use strict";
        var e = require("../utils");
        module.exports = function (t, r) {
          e.forEach(t, function (e, o) {
            o !== r &&
              o.toUpperCase() === r.toUpperCase() &&
              ((t[r] = e), delete t[o]);
          });
        };
      },
      { "../utils": "S1cf" },
    ],
    YdsM: [
      function (require, module, exports) {
        "use strict";
        module.exports = function (e, i, s, t, n) {
          return (
            (e.config = i),
            s && (e.code = s),
            (e.request = t),
            (e.response = n),
            (e.isAxiosError = !0),
            (e.toJSON = function () {
              return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: this.config,
                code: this.code,
              };
            }),
            e
          );
        };
      },
      {},
    ],
    bIiH: [
      function (require, module, exports) {
        "use strict";
        var r = require("./enhanceError");
        module.exports = function (e, n, o, t, u) {
          var a = new Error(e);
          return r(a, n, o, t, u);
        };
      },
      { "./enhanceError": "YdsM" },
    ],
    aS8y: [
      function (require, module, exports) {
        "use strict";
        var t = require("./createError");
        module.exports = function (e, s, u) {
          var a = u.config.validateStatus;
          u.status && a && !a(u.status)
            ? s(
                t(
                  "Request failed with status code " + u.status,
                  u.config,
                  null,
                  u.request,
                  u
                )
              )
            : e(u);
        };
      },
      { "./createError": "bIiH" },
    ],
    dn2M: [
      function (require, module, exports) {
        "use strict";
        var e = require("./../utils");
        module.exports = e.isStandardBrowserEnv()
          ? {
              write: function (n, t, o, r, i, u) {
                var s = [];
                s.push(n + "=" + encodeURIComponent(t)),
                  e.isNumber(o) &&
                    s.push("expires=" + new Date(o).toGMTString()),
                  e.isString(r) && s.push("path=" + r),
                  e.isString(i) && s.push("domain=" + i),
                  !0 === u && s.push("secure"),
                  (document.cookie = s.join("; "));
              },
              read: function (e) {
                var n = document.cookie.match(
                  new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
                );
                return n ? decodeURIComponent(n[3]) : null;
              },
              remove: function (e) {
                this.write(e, "", Date.now() - 864e5);
              },
            }
          : {
              write: function () {},
              read: function () {
                return null;
              },
              remove: function () {},
            };
      },
      { "./../utils": "S1cf" },
    ],
    YZjV: [
      function (require, module, exports) {
        "use strict";
        module.exports = function (t) {
          return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t);
        };
      },
      {},
    ],
    a2Uu: [
      function (require, module, exports) {
        "use strict";
        module.exports = function (e, r) {
          return r ? e.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : e;
        };
      },
      {},
    ],
    KxkP: [
      function (require, module, exports) {
        "use strict";
        var e = require("../helpers/isAbsoluteURL"),
          r = require("../helpers/combineURLs");
        module.exports = function (s, u) {
          return s && !e(u) ? r(s, u) : u;
        };
      },
      { "../helpers/isAbsoluteURL": "YZjV", "../helpers/combineURLs": "a2Uu" },
    ],
    ZeD7: [
      function (require, module, exports) {
        "use strict";
        var e = require("./../utils"),
          t = [
            "age",
            "authorization",
            "content-length",
            "content-type",
            "etag",
            "expires",
            "from",
            "host",
            "if-modified-since",
            "if-unmodified-since",
            "last-modified",
            "location",
            "max-forwards",
            "proxy-authorization",
            "referer",
            "retry-after",
            "user-agent",
          ];
        module.exports = function (r) {
          var i,
            o,
            n,
            s = {};
          return r
            ? (e.forEach(r.split("\n"), function (r) {
                if (
                  ((n = r.indexOf(":")),
                  (i = e.trim(r.substr(0, n)).toLowerCase()),
                  (o = e.trim(r.substr(n + 1))),
                  i)
                ) {
                  if (s[i] && t.indexOf(i) >= 0) return;
                  s[i] =
                    "set-cookie" === i
                      ? (s[i] ? s[i] : []).concat([o])
                      : s[i]
                      ? s[i] + ", " + o
                      : o;
                }
              }),
              s)
            : s;
        };
      },
      { "./../utils": "S1cf" },
    ],
    w7LF: [
      function (require, module, exports) {
        "use strict";
        var t = require("./../utils");
        module.exports = t.isStandardBrowserEnv()
          ? (function () {
              var r,
                e = /(msie|trident)/i.test(navigator.userAgent),
                o = document.createElement("a");
              function a(t) {
                var r = t;
                return (
                  e && (o.setAttribute("href", r), (r = o.href)),
                  o.setAttribute("href", r),
                  {
                    href: o.href,
                    protocol: o.protocol ? o.protocol.replace(/:$/, "") : "",
                    host: o.host,
                    search: o.search ? o.search.replace(/^\?/, "") : "",
                    hash: o.hash ? o.hash.replace(/^#/, "") : "",
                    hostname: o.hostname,
                    port: o.port,
                    pathname:
                      "/" === o.pathname.charAt(0)
                        ? o.pathname
                        : "/" + o.pathname,
                  }
                );
              }
              return (
                (r = a(window.location.href)),
                function (e) {
                  var o = t.isString(e) ? a(e) : e;
                  return o.protocol === r.protocol && o.host === r.host;
                }
              );
            })()
          : function () {
              return !0;
            };
      },
      { "./../utils": "S1cf" },
    ],
    KRuG: [
      function (require, module, exports) {
        "use strict";
        var e = require("./../utils"),
          r = require("./../core/settle"),
          t = require("./../helpers/cookies"),
          s = require("./../helpers/buildURL"),
          o = require("../core/buildFullPath"),
          n = require("./../helpers/parseHeaders"),
          a = require("./../helpers/isURLSameOrigin"),
          i = require("../core/createError");
        module.exports = function (u) {
          return new Promise(function (l, d) {
            var p = u.data,
              c = u.headers;
            e.isFormData(p) && delete c["Content-Type"];
            var f = new XMLHttpRequest();
            if (u.auth) {
              var h = u.auth.username || "",
                m = u.auth.password
                  ? unescape(encodeURIComponent(u.auth.password))
                  : "";
              c.Authorization = "Basic " + btoa(h + ":" + m);
            }
            var w = o(u.baseURL, u.url);
            if (
              (f.open(
                u.method.toUpperCase(),
                s(w, u.params, u.paramsSerializer),
                !0
              ),
              (f.timeout = u.timeout),
              (f.onreadystatechange = function () {
                if (
                  f &&
                  4 === f.readyState &&
                  (0 !== f.status ||
                    (f.responseURL && 0 === f.responseURL.indexOf("file:")))
                ) {
                  var e =
                      "getAllResponseHeaders" in f
                        ? n(f.getAllResponseHeaders())
                        : null,
                    t = {
                      data:
                        u.responseType && "text" !== u.responseType
                          ? f.response
                          : f.responseText,
                      status: f.status,
                      statusText: f.statusText,
                      headers: e,
                      config: u,
                      request: f,
                    };
                  r(l, d, t), (f = null);
                }
              }),
              (f.onabort = function () {
                f &&
                  (d(i("Request aborted", u, "ECONNABORTED", f)), (f = null));
              }),
              (f.onerror = function () {
                d(i("Network Error", u, null, f)), (f = null);
              }),
              (f.ontimeout = function () {
                var e = "timeout of " + u.timeout + "ms exceeded";
                u.timeoutErrorMessage && (e = u.timeoutErrorMessage),
                  d(i(e, u, "ECONNABORTED", f)),
                  (f = null);
              }),
              e.isStandardBrowserEnv())
            ) {
              var R =
                (u.withCredentials || a(w)) && u.xsrfCookieName
                  ? t.read(u.xsrfCookieName)
                  : void 0;
              R && (c[u.xsrfHeaderName] = R);
            }
            if (
              ("setRequestHeader" in f &&
                e.forEach(c, function (e, r) {
                  void 0 === p && "content-type" === r.toLowerCase()
                    ? delete c[r]
                    : f.setRequestHeader(r, e);
                }),
              e.isUndefined(u.withCredentials) ||
                (f.withCredentials = !!u.withCredentials),
              u.responseType)
            )
              try {
                f.responseType = u.responseType;
              } catch (T) {
                if ("json" !== u.responseType) throw T;
              }
            "function" == typeof u.onDownloadProgress &&
              f.addEventListener("progress", u.onDownloadProgress),
              "function" == typeof u.onUploadProgress &&
                f.upload &&
                f.upload.addEventListener("progress", u.onUploadProgress),
              u.cancelToken &&
                u.cancelToken.promise.then(function (e) {
                  f && (f.abort(), d(e), (f = null));
                }),
              p || (p = null),
              f.send(p);
          });
        };
      },
      {
        "./../utils": "S1cf",
        "./../core/settle": "aS8y",
        "./../helpers/cookies": "dn2M",
        "./../helpers/buildURL": "H6Qo",
        "../core/buildFullPath": "KxkP",
        "./../helpers/parseHeaders": "ZeD7",
        "./../helpers/isURLSameOrigin": "w7LF",
        "../core/createError": "bIiH",
      },
    ],
    BXyq: [
      function (require, module, exports) {
        var process = require("process");
        var e = require("process"),
          t = require("./utils"),
          r = require("./helpers/normalizeHeaderName"),
          n = { "Content-Type": "application/x-www-form-urlencoded" };
        function a(e, r) {
          !t.isUndefined(e) &&
            t.isUndefined(e["Content-Type"]) &&
            (e["Content-Type"] = r);
        }
        function i() {
          var t;
          return (
            "undefined" != typeof XMLHttpRequest
              ? (t = require("./adapters/xhr"))
              : void 0 !== e &&
                "[object process]" === Object.prototype.toString.call(e) &&
                (t = require("./adapters/http")),
            t
          );
        }
        var o = {
          adapter: i(),
          transformRequest: [
            function (e, n) {
              return (
                r(n, "Accept"),
                r(n, "Content-Type"),
                t.isFormData(e) ||
                t.isArrayBuffer(e) ||
                t.isBuffer(e) ||
                t.isStream(e) ||
                t.isFile(e) ||
                t.isBlob(e)
                  ? e
                  : t.isArrayBufferView(e)
                  ? e.buffer
                  : t.isURLSearchParams(e)
                  ? (a(n, "application/x-www-form-urlencoded;charset=utf-8"),
                    e.toString())
                  : t.isObject(e)
                  ? (a(n, "application/json;charset=utf-8"), JSON.stringify(e))
                  : e
              );
            },
          ],
          transformResponse: [
            function (e) {
              if ("string" == typeof e)
                try {
                  e = JSON.parse(e);
                } catch (t) {}
              return e;
            },
          ],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          maxBodyLength: -1,
          validateStatus: function (e) {
            return e >= 200 && e < 300;
          },
          headers: { common: { Accept: "application/json, text/plain, */*" } },
        };
        t.forEach(["delete", "get", "head"], function (e) {
          o.headers[e] = {};
        }),
          t.forEach(["post", "put", "patch"], function (e) {
            o.headers[e] = t.merge(n);
          }),
          (module.exports = o);
      },
      {
        "./utils": "S1cf",
        "./helpers/normalizeHeaderName": "M8l6",
        "./adapters/xhr": "KRuG",
        "./adapters/http": "KRuG",
        process: "pBGv",
      },
    ],
    uz6X: [
      function (require, module, exports) {
        "use strict";
        var e = require("./../utils"),
          r = require("./transformData"),
          a = require("../cancel/isCancel"),
          t = require("../defaults");
        function s(e) {
          e.cancelToken && e.cancelToken.throwIfRequested();
        }
        module.exports = function (n) {
          return (
            s(n),
            (n.headers = n.headers || {}),
            (n.data = r(n.data, n.headers, n.transformRequest)),
            (n.headers = e.merge(
              n.headers.common || {},
              n.headers[n.method] || {},
              n.headers
            )),
            e.forEach(
              ["delete", "get", "head", "post", "put", "patch", "common"],
              function (e) {
                delete n.headers[e];
              }
            ),
            (n.adapter || t.adapter)(n).then(
              function (e) {
                return (
                  s(n), (e.data = r(e.data, e.headers, n.transformResponse)), e
                );
              },
              function (e) {
                return (
                  a(e) ||
                    (s(n),
                    e &&
                      e.response &&
                      (e.response.data = r(
                        e.response.data,
                        e.response.headers,
                        n.transformResponse
                      ))),
                  Promise.reject(e)
                );
              }
            )
          );
        };
      },
      {
        "./../utils": "S1cf",
        "./transformData": "woEt",
        "../cancel/isCancel": "V30M",
        "../defaults": "BXyq",
      },
    ],
    OHvn: [
      function (require, module, exports) {
        "use strict";
        var e = require("../utils");
        module.exports = function (n, t) {
          t = t || {};
          var r = {},
            o = ["url", "method", "data"],
            i = ["headers", "auth", "proxy", "params"],
            a = [
              "baseURL",
              "transformRequest",
              "transformResponse",
              "paramsSerializer",
              "timeout",
              "timeoutMessage",
              "withCredentials",
              "adapter",
              "responseType",
              "xsrfCookieName",
              "xsrfHeaderName",
              "onUploadProgress",
              "onDownloadProgress",
              "decompress",
              "maxContentLength",
              "maxBodyLength",
              "maxRedirects",
              "transport",
              "httpAgent",
              "httpsAgent",
              "cancelToken",
              "socketPath",
              "responseEncoding",
            ],
            s = ["validateStatus"];
          function c(n, t) {
            return e.isPlainObject(n) && e.isPlainObject(t)
              ? e.merge(n, t)
              : e.isPlainObject(t)
              ? e.merge({}, t)
              : e.isArray(t)
              ? t.slice()
              : t;
          }
          function d(o) {
            e.isUndefined(t[o])
              ? e.isUndefined(n[o]) || (r[o] = c(void 0, n[o]))
              : (r[o] = c(n[o], t[o]));
          }
          e.forEach(o, function (n) {
            e.isUndefined(t[n]) || (r[n] = c(void 0, t[n]));
          }),
            e.forEach(i, d),
            e.forEach(a, function (o) {
              e.isUndefined(t[o])
                ? e.isUndefined(n[o]) || (r[o] = c(void 0, n[o]))
                : (r[o] = c(void 0, t[o]));
            }),
            e.forEach(s, function (e) {
              e in t
                ? (r[e] = c(n[e], t[e]))
                : e in n && (r[e] = c(void 0, n[e]));
            });
          var f = o.concat(i).concat(a).concat(s),
            u = Object.keys(n)
              .concat(Object.keys(t))
              .filter(function (e) {
                return -1 === f.indexOf(e);
              });
          return e.forEach(u, d), r;
        };
      },
      { "../utils": "S1cf" },
    ],
    OvAf: [
      function (require, module, exports) {
        "use strict";
        var e = require("./../utils"),
          t = require("../helpers/buildURL"),
          r = require("./InterceptorManager"),
          o = require("./dispatchRequest"),
          s = require("./mergeConfig");
        function i(e) {
          (this.defaults = e),
            (this.interceptors = { request: new r(), response: new r() });
        }
        (i.prototype.request = function (e) {
          "string" == typeof e
            ? ((e = arguments[1] || {}).url = arguments[0])
            : (e = e || {}),
            (e = s(this.defaults, e)).method
              ? (e.method = e.method.toLowerCase())
              : this.defaults.method
              ? (e.method = this.defaults.method.toLowerCase())
              : (e.method = "get");
          var t = [o, void 0],
            r = Promise.resolve(e);
          for (
            this.interceptors.request.forEach(function (e) {
              t.unshift(e.fulfilled, e.rejected);
            }),
              this.interceptors.response.forEach(function (e) {
                t.push(e.fulfilled, e.rejected);
              });
            t.length;

          )
            r = r.then(t.shift(), t.shift());
          return r;
        }),
          (i.prototype.getUri = function (e) {
            return (
              (e = s(this.defaults, e)),
              t(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
            );
          }),
          e.forEach(["delete", "get", "head", "options"], function (e) {
            i.prototype[e] = function (t, r) {
              return this.request(
                s(r || {}, { method: e, url: t, data: (r || {}).data })
              );
            };
          }),
          e.forEach(["post", "put", "patch"], function (e) {
            i.prototype[e] = function (t, r, o) {
              return this.request(s(o || {}, { method: e, url: t, data: r }));
            };
          }),
          (module.exports = i);
      },
      {
        "./../utils": "S1cf",
        "../helpers/buildURL": "H6Qo",
        "./InterceptorManager": "rj2i",
        "./dispatchRequest": "uz6X",
        "./mergeConfig": "OHvn",
      },
    ],
    mIKj: [
      function (require, module, exports) {
        "use strict";
        function t(t) {
          this.message = t;
        }
        (t.prototype.toString = function () {
          return "Cancel" + (this.message ? ": " + this.message : "");
        }),
          (t.prototype.__CANCEL__ = !0),
          (module.exports = t);
      },
      {},
    ],
    tsWd: [
      function (require, module, exports) {
        "use strict";
        var e = require("./Cancel");
        function n(n) {
          if ("function" != typeof n)
            throw new TypeError("executor must be a function.");
          var o;
          this.promise = new Promise(function (e) {
            o = e;
          });
          var r = this;
          n(function (n) {
            r.reason || ((r.reason = new e(n)), o(r.reason));
          });
        }
        (n.prototype.throwIfRequested = function () {
          if (this.reason) throw this.reason;
        }),
          (n.source = function () {
            var e;
            return {
              token: new n(function (n) {
                e = n;
              }),
              cancel: e,
            };
          }),
          (module.exports = n);
      },
      { "./Cancel": "mIKj" },
    ],
    X8jb: [
      function (require, module, exports) {
        "use strict";
        module.exports = function (n) {
          return function (t) {
            return n.apply(null, t);
          };
        };
      },
      {},
    ],
    wICU: [
      function (require, module, exports) {
        "use strict";
        module.exports = function (o) {
          return "object" == typeof o && !0 === o.isAxiosError;
        };
      },
      {},
    ],
    nUiQ: [
      function (require, module, exports) {
        "use strict";
        var e = require("./utils"),
          r = require("./helpers/bind"),
          i = require("./core/Axios"),
          n = require("./core/mergeConfig"),
          u = require("./defaults");
        function o(n) {
          var u = new i(n),
            o = r(i.prototype.request, u);
          return e.extend(o, i.prototype, u), e.extend(o, u), o;
        }
        var l = o(u);
        (l.Axios = i),
          (l.create = function (e) {
            return o(n(l.defaults, e));
          }),
          (l.Cancel = require("./cancel/Cancel")),
          (l.CancelToken = require("./cancel/CancelToken")),
          (l.isCancel = require("./cancel/isCancel")),
          (l.all = function (e) {
            return Promise.all(e);
          }),
          (l.spread = require("./helpers/spread")),
          (l.isAxiosError = require("./helpers/isAxiosError")),
          (module.exports = l),
          (module.exports.default = l);
      },
      {
        "./utils": "S1cf",
        "./helpers/bind": "EDTP",
        "./core/Axios": "OvAf",
        "./core/mergeConfig": "OHvn",
        "./defaults": "BXyq",
        "./cancel/Cancel": "mIKj",
        "./cancel/CancelToken": "tsWd",
        "./cancel/isCancel": "V30M",
        "./helpers/spread": "X8jb",
        "./helpers/isAxiosError": "wICU",
      },
    ],
    dZBD: [
      function (require, module, exports) {
        module.exports = require("./lib/axios");
      },
      { "./lib/axios": "nUiQ" },
    ],
    CQgf: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = require("../../config"),
          t = require("./widget-user"),
          n = o(require("axios"));
        function o(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function r(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        function a(e, t, n) {
          return t && r(e.prototype, t), n && r(e, n), e;
        }
        var u = { rootNode: e.appCssClasses.jsonContent },
          s = (function () {
            function e(t) {
              i(this, e),
                (this.rootNode = t),
                (this.state = { contentType: null }),
                this._initState(),
                this._buildContent();
            }
            return (
              a(e, [
                {
                  key: "_initState",
                  value: function () {
                    this.state.contentType =
                      this.rootNode.dataset.jsonContentType || null;
                  },
                },
                {
                  key: "_buildContent",
                  value: function () {
                    switch (this.state.contentType) {
                      case "widget-user":
                        this._buildWidgetUser();
                    }
                  },
                },
              ]),
              e
            );
          })();
        exports.default = s;
      },
      { "../../config": "itQ5", "./widget-user": "XeFD", axios: "dZBD" },
    ],
    c8dR: [
      function (require, module, exports) {
        !(function (e, t) {
          var a = (function (e, t, a) {
            "use strict";
            var n, i;
            if (
              ((function () {
                var t,
                  a = {
                    lazyClass: "lazyload",
                    loadedClass: "lazyloaded",
                    loadingClass: "lazyloading",
                    preloadClass: "lazypreload",
                    errorClass: "lazyerror",
                    autosizesClass: "lazyautosizes",
                    fastLoadedClass: "ls-is-cached",
                    iframeLoadMode: 0,
                    srcAttr: "data-src",
                    srcsetAttr: "data-srcset",
                    sizesAttr: "data-sizes",
                    minSize: 40,
                    customMedia: {},
                    init: !0,
                    expFactor: 1.5,
                    hFac: 0.8,
                    loadMode: 2,
                    loadHidden: !0,
                    ricTimeout: 0,
                    throttleDelay: 125,
                  };
                for (t in ((i = e.lazySizesConfig || e.lazysizesConfig || {}),
                a))
                  t in i || (i[t] = a[t]);
              })(),
              !t || !t.getElementsByClassName)
            )
              return { init: function () {}, cfg: i, noSupport: !0 };
            var r = t.documentElement,
              s = e.HTMLPictureElement,
              o = e.addEventListener.bind(e),
              l = e.setTimeout,
              d = e.requestAnimationFrame || l,
              c = e.requestIdleCallback,
              u = /^picture$/i,
              f = ["load", "error", "lazyincluded", "_lazyloaded"],
              m = {},
              g = Array.prototype.forEach,
              v = function (e, t) {
                return (
                  m[t] || (m[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")),
                  m[t].test(e.getAttribute("class") || "") && m[t]
                );
              },
              y = function (e, t) {
                v(e, t) ||
                  e.setAttribute(
                    "class",
                    (e.getAttribute("class") || "").trim() + " " + t
                  );
              },
              z = function (e, t) {
                var a;
                (a = v(e, t)) &&
                  e.setAttribute(
                    "class",
                    (e.getAttribute("class") || "").replace(a, " ")
                  );
              },
              h = function (e, t, a) {
                var n = a ? "addEventListener" : "removeEventListener";
                a && h(e, t),
                  f.forEach(function (a) {
                    e[n](a, t);
                  });
              },
              p = function (e, a, i, r, s) {
                var o = t.createEvent("Event");
                return (
                  i || (i = {}),
                  (i.instance = n),
                  o.initEvent(a, !r, !s),
                  (o.detail = i),
                  e.dispatchEvent(o),
                  o
                );
              },
              b = function (t, a) {
                var n;
                !s && (n = e.picturefill || i.pf)
                  ? (a &&
                      a.src &&
                      !t.getAttribute("srcset") &&
                      t.setAttribute("srcset", a.src),
                    n({ reevaluate: !0, elements: [t] }))
                  : a && a.src && (t.src = a.src);
              },
              A = function (e, t) {
                return (getComputedStyle(e, null) || {})[t];
              },
              C = function (e, t, a) {
                for (
                  a = a || e.offsetWidth;
                  a < i.minSize && t && !e._lazysizesWidth;

                )
                  (a = t.offsetWidth), (t = t.parentNode);
                return a;
              },
              E =
                ((R = []),
                (D = []),
                (k = R),
                (H = function () {
                  var e = k;
                  for (k = R.length ? D : R, T = !0, F = !1; e.length; )
                    e.shift()();
                  T = !1;
                }),
                (O = function (e, a) {
                  T && !a
                    ? e.apply(this, arguments)
                    : (k.push(e), F || ((F = !0), (t.hidden ? l : d)(H)));
                }),
                (O._lsFlush = H),
                O),
              _ = function (e, t) {
                return t
                  ? function () {
                      E(e);
                    }
                  : function () {
                      var t = this,
                        a = arguments;
                      E(function () {
                        e.apply(t, a);
                      });
                    };
              },
              L = function (e) {
                var t,
                  n,
                  i = function () {
                    (t = null), e();
                  },
                  r = function () {
                    var e = a.now() - n;
                    e < 99 ? l(r, 99 - e) : (c || i)(i);
                  };
                return function () {
                  (n = a.now()), t || (t = l(r, 99));
                };
              },
              w = (function () {
                var s,
                  f,
                  m,
                  C,
                  w,
                  N,
                  x,
                  W,
                  S,
                  B,
                  T,
                  F,
                  R,
                  D,
                  k,
                  H,
                  O,
                  P,
                  $,
                  q = /^img$/i,
                  I = /^iframe$/i,
                  U =
                    "onscroll" in e &&
                    !/(gle|ing)bot/.test(navigator.userAgent),
                  j = 0,
                  G = 0,
                  J = -1,
                  K = function (e) {
                    G--, (!e || G < 0 || !e.target) && (G = 0);
                  },
                  Q = function (e) {
                    return (
                      null == F && (F = "hidden" == A(t.body, "visibility")),
                      F ||
                        !(
                          "hidden" == A(e.parentNode, "visibility") &&
                          "hidden" == A(e, "visibility")
                        )
                    );
                  },
                  V = function (e, a) {
                    var n,
                      i = e,
                      s = Q(e);
                    for (
                      W -= a, T += a, S -= a, B += a;
                      s && (i = i.offsetParent) && i != t.body && i != r;

                    )
                      (s = (A(i, "opacity") || 1) > 0) &&
                        "visible" != A(i, "overflow") &&
                        ((n = i.getBoundingClientRect()),
                        (s =
                          B > n.left &&
                          S < n.right &&
                          T > n.top - 1 &&
                          W < n.bottom + 1));
                    return s;
                  },
                  X = function () {
                    var e,
                      a,
                      o,
                      l,
                      d,
                      c,
                      u,
                      m,
                      g,
                      v,
                      y,
                      z,
                      h = n.elements;
                    if ((C = i.loadMode) && G < 8 && (e = h.length)) {
                      for (a = 0, J++; a < e; a++)
                        if (h[a] && !h[a]._lazyRace)
                          if (
                            !U ||
                            (n.prematureUnveil && n.prematureUnveil(h[a]))
                          )
                            ie(h[a]);
                          else if (
                            (((m = h[a].getAttribute("data-expand")) &&
                              (c = 1 * m)) ||
                              (c = j),
                            v ||
                              ((v =
                                !i.expand || i.expand < 1
                                  ? r.clientHeight > 500 && r.clientWidth > 500
                                    ? 500
                                    : 370
                                  : i.expand),
                              (n._defEx = v),
                              (y = v * i.expFactor),
                              (z = i.hFac),
                              (F = null),
                              j < y && G < 1 && J > 2 && C > 2 && !t.hidden
                                ? ((j = y), (J = 0))
                                : (j = C > 1 && J > 1 && G < 6 ? v : 0)),
                            g !== c &&
                              ((N = innerWidth + c * z),
                              (x = innerHeight + c),
                              (u = -1 * c),
                              (g = c)),
                            (o = h[a].getBoundingClientRect()),
                            (T = o.bottom) >= u &&
                              (W = o.top) <= x &&
                              (B = o.right) >= u * z &&
                              (S = o.left) <= N &&
                              (T || B || S || W) &&
                              (i.loadHidden || Q(h[a])) &&
                              ((f && G < 3 && !m && (C < 3 || J < 4)) ||
                                V(h[a], c)))
                          ) {
                            if ((ie(h[a]), (d = !0), G > 9)) break;
                          } else
                            !d &&
                              f &&
                              !l &&
                              G < 4 &&
                              J < 4 &&
                              C > 2 &&
                              (s[0] || i.preloadAfterLoad) &&
                              (s[0] ||
                                (!m &&
                                  (T ||
                                    B ||
                                    S ||
                                    W ||
                                    "auto" !=
                                      h[a].getAttribute(i.sizesAttr)))) &&
                              (l = s[0] || h[a]);
                      l && !d && ie(l);
                    }
                  },
                  Y =
                    ((R = X),
                    (k = 0),
                    (H = i.throttleDelay),
                    (O = i.ricTimeout),
                    (P = function () {
                      (D = !1), (k = a.now()), R();
                    }),
                    ($ =
                      c && O > 49
                        ? function () {
                            c(P, { timeout: O }),
                              O !== i.ricTimeout && (O = i.ricTimeout);
                          }
                        : _(function () {
                            l(P);
                          }, !0)),
                    function (e) {
                      var t;
                      (e = !0 === e) && (O = 33),
                        D ||
                          ((D = !0),
                          (t = H - (a.now() - k)) < 0 && (t = 0),
                          e || t < 9 ? $() : l($, t));
                    }),
                  Z = function (e) {
                    var t = e.target;
                    t._lazyCache
                      ? delete t._lazyCache
                      : (K(e),
                        y(t, i.loadedClass),
                        z(t, i.loadingClass),
                        h(t, te),
                        p(t, "lazyloaded"));
                  },
                  ee = _(Z),
                  te = function (e) {
                    ee({ target: e.target });
                  },
                  ae = function (e) {
                    var t,
                      a = e.getAttribute(i.srcsetAttr);
                    (t =
                      i.customMedia[
                        e.getAttribute("data-media") || e.getAttribute("media")
                      ]) && e.setAttribute("media", t),
                      a && e.setAttribute("srcset", a);
                  },
                  ne = _(function (e, t, a, n, r) {
                    var s, o, d, c, f, v;
                    (f = p(e, "lazybeforeunveil", t)).defaultPrevented ||
                      (n &&
                        (a
                          ? y(e, i.autosizesClass)
                          : e.setAttribute("sizes", n)),
                      (o = e.getAttribute(i.srcsetAttr)),
                      (s = e.getAttribute(i.srcAttr)),
                      r &&
                        ((d = e.parentNode),
                        (c = d && u.test(d.nodeName || ""))),
                      (v = t.firesLoad || ("src" in e && (o || s || c))),
                      (f = { target: e }),
                      y(e, i.loadingClass),
                      v && (clearTimeout(m), (m = l(K, 2500)), h(e, te, !0)),
                      c && g.call(d.getElementsByTagName("source"), ae),
                      o
                        ? e.setAttribute("srcset", o)
                        : s &&
                          !c &&
                          (I.test(e.nodeName)
                            ? (function (e, t) {
                                var a =
                                  e.getAttribute("data-load-mode") ||
                                  i.iframeLoadMode;
                                0 == a
                                  ? e.contentWindow.location.replace(t)
                                  : 1 == a && (e.src = t);
                              })(e, s)
                            : (e.src = s)),
                      r && (o || c) && b(e, { src: s })),
                      e._lazyRace && delete e._lazyRace,
                      z(e, i.lazyClass),
                      E(function () {
                        var t = e.complete && e.naturalWidth > 1;
                        (v && !t) ||
                          (t && y(e, i.fastLoadedClass),
                          Z(f),
                          (e._lazyCache = !0),
                          l(function () {
                            "_lazyCache" in e && delete e._lazyCache;
                          }, 9)),
                          "lazy" == e.loading && G--;
                      }, !0);
                  }),
                  ie = function (e) {
                    if (!e._lazyRace) {
                      var t,
                        a = q.test(e.nodeName),
                        n =
                          a &&
                          (e.getAttribute(i.sizesAttr) ||
                            e.getAttribute("sizes")),
                        r = "auto" == n;
                      ((!r && f) ||
                        !a ||
                        (!e.getAttribute("src") && !e.srcset) ||
                        e.complete ||
                        v(e, i.errorClass) ||
                        !v(e, i.lazyClass)) &&
                        ((t = p(e, "lazyunveilread").detail),
                        r && M.updateElem(e, !0, e.offsetWidth),
                        (e._lazyRace = !0),
                        G++,
                        ne(e, t, r, n, a));
                    }
                  },
                  re = L(function () {
                    (i.loadMode = 3), Y();
                  }),
                  se = function () {
                    3 == i.loadMode && (i.loadMode = 2), re();
                  },
                  oe = function () {
                    f ||
                      (a.now() - w < 999
                        ? l(oe, 999)
                        : ((f = !0),
                          (i.loadMode = 3),
                          Y(),
                          o("scroll", se, !0)));
                  };
                return {
                  _: function () {
                    (w = a.now()),
                      (n.elements = t.getElementsByClassName(i.lazyClass)),
                      (s = t.getElementsByClassName(
                        i.lazyClass + " " + i.preloadClass
                      )),
                      o("scroll", Y, !0),
                      o("resize", Y, !0),
                      o("pageshow", function (e) {
                        if (e.persisted) {
                          var a = t.querySelectorAll("." + i.loadingClass);
                          a.length &&
                            a.forEach &&
                            d(function () {
                              a.forEach(function (e) {
                                e.complete && ie(e);
                              });
                            });
                        }
                      }),
                      e.MutationObserver
                        ? new MutationObserver(Y).observe(r, {
                            childList: !0,
                            subtree: !0,
                            attributes: !0,
                          })
                        : (r.addEventListener("DOMNodeInserted", Y, !0),
                          r.addEventListener("DOMAttrModified", Y, !0),
                          setInterval(Y, 999)),
                      o("hashchange", Y, !0),
                      [
                        "focus",
                        "mouseover",
                        "click",
                        "load",
                        "transitionend",
                        "animationend",
                      ].forEach(function (e) {
                        t.addEventListener(e, Y, !0);
                      }),
                      /d$|^c/.test(t.readyState)
                        ? oe()
                        : (o("load", oe),
                          t.addEventListener("DOMContentLoaded", Y),
                          l(oe, 2e4)),
                      n.elements.length ? (X(), E._lsFlush()) : Y();
                  },
                  checkElems: Y,
                  unveil: ie,
                  _aLSL: se,
                };
              })(),
              M =
                ((W = _(function (e, t, a, n) {
                  var i, r, s;
                  if (
                    ((e._lazysizesWidth = n),
                    (n += "px"),
                    e.setAttribute("sizes", n),
                    u.test(t.nodeName || ""))
                  )
                    for (
                      i = t.getElementsByTagName("source"), r = 0, s = i.length;
                      r < s;
                      r++
                    )
                      i[r].setAttribute("sizes", n);
                  a.detail.dataAttr || b(e, a.detail);
                })),
                (S = function (e, t, a) {
                  var n,
                    i = e.parentNode;
                  i &&
                    ((a = C(e, i, a)),
                    (n = p(e, "lazybeforesizes", { width: a, dataAttr: !!t }))
                      .defaultPrevented ||
                      ((a = n.detail.width) &&
                        a !== e._lazysizesWidth &&
                        W(e, i, n, a)));
                }),
                (B = L(function () {
                  var e,
                    t = x.length;
                  if (t) for (e = 0; e < t; e++) S(x[e]);
                })),
                {
                  _: function () {
                    (x = t.getElementsByClassName(i.autosizesClass)),
                      o("resize", B);
                  },
                  checkElems: B,
                  updateElem: S,
                }),
              N = function () {
                !N.i && t.getElementsByClassName && ((N.i = !0), M._(), w._());
              };
            var x, W, S, B;
            var T, F, R, D, k, H, O;
            return (
              l(function () {
                i.init && N();
              }),
              (n = {
                cfg: i,
                autoSizer: M,
                loader: w,
                init: N,
                uP: b,
                aC: y,
                rC: z,
                hC: v,
                fire: p,
                gW: C,
                rAF: E,
              })
            );
          })(e, e.document, Date);
          (e.lazySizes = a),
            "object" == typeof module && module.exports && (module.exports = a);
        })("undefined" != typeof window ? window : {});
      },
      {},
    ],
    Yp46: [
      function (require, module, exports) {
        "use strict";
        var e = a(require("lazysizes")),
          s = require("../config");
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        (e.default.cfg.lazyClass = s.appCssClasses.lazyLoad),
          (e.default.cfg.loadedClass = s.appCssClasses.isLoaded),
          (e.default.cfg.init = !1),
          document.addEventListener("DOMContentLoaded", function () {
            setTimeout(function () {
              e.default.init();
            }, 100);
          });
      },
      { lazysizes: "c8dR", "../config": "itQ5" },
    ],
    hqVC: [
      function (require, module, exports) {
        "use strict";
        function t(t) {
          return r(t) || l(t) || o(t) || e();
        }
        function e() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function o(t, e) {
          if (t) {
            if ("string" == typeof t) return s(t, e);
            var o = Object.prototype.toString.call(t).slice(8, -1);
            return (
              "Object" === o && t.constructor && (o = t.constructor.name),
              "Map" === o || "Set" === o
                ? Array.from(t)
                : "Arguments" === o ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
                ? s(t, e)
                : void 0
            );
          }
        }
        function l(t) {
          if (
            ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
            null != t["@@iterator"]
          )
            return Array.from(t);
        }
        function r(t) {
          if (Array.isArray(t)) return s(t);
        }
        function s(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var o = 0, l = new Array(e); o < e; o++) l[o] = t[o];
          return l;
        }
        function a(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function i(t, e) {
          for (var o = 0; o < e.length; o++) {
            var l = e[o];
            (l.enumerable = l.enumerable || !1),
              (l.configurable = !0),
              "value" in l && (l.writable = !0),
              Object.defineProperty(t, l.key, l);
          }
        }
        function n(t, e, o) {
          return e && i(t.prototype, e), o && i(t, o), t;
        }
        function c(t, e, o) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: o,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = o),
            t
          );
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.viewportWatcher = void 0);
        var d = {
            scrollActive: "is-scroll-active",
            watchScrollActivate: "js-scroll-watch__block",
            watchScrollToggle: "js-scroll-watch__toggle-block",
            parallaxBlockScroll: "js-parallax-scroll__block",
            watchScrollSameToggle: "js-scroll-watch__twins-toggle",
          },
          u = 0.5,
          g = (function () {
            function e() {
              a(this, e),
                c(this, "viewportValues", {
                  width: 0,
                  height: 0,
                  scrollTop: 0,
                }),
                c(this, "scrollActivateBlockNodes", []),
                c(this, "scrollToggleBlockNodes", []);
            }
            return (
              n(e, [
                {
                  key: "_activateBlocks",
                  value: function () {
                    var t = this;
                    this.scrollActivateBlockNodes.forEach(function (e) {
                      var o =
                          void 0 !== e.dataset.scrollWatchTargetId
                            ? document.getElementById(
                                e.dataset.scrollWatchTargetId
                              )
                            : e,
                        l =
                          void 0 !== e.dataset.scrollWatchCssClass
                            ? e.dataset.scrollWatchCssClass
                            : d.scrollActive;
                      !o.classList.contains(l) &&
                        e.getBoundingClientRect().top -
                          t.viewportValues.height <
                          0 &&
                        o.classList.add(l);
                    });
                  },
                },
                {
                  key: "_toggleBlocks",
                  value: function () {
                    var t = this;
                    this.scrollToggleBlockNodes.forEach(function (t) {
                      var e =
                          void 0 !== t.dataset.scrollToggleBottom
                            ? document.documentElement.clientHeight
                            : 0,
                        o =
                          void 0 !== t.dataset.scrollWatchTargetId
                            ? document.getElementById(
                                t.dataset.scrollWatchTargetId
                              )
                            : t,
                        l =
                          void 0 !== t.dataset.scrollWatchCssClass
                            ? t.dataset.scrollWatchCssClass
                            : d.scrollActive;
                      if (!o)
                        return (
                          console.warn(
                            "%c viewport-watcher.js warning:%c Can't find HTML node with appropriate ID",
                            "color: green",
                            "color: auto"
                          ),
                          null
                        );
                      t.getBoundingClientRect().top < e
                        ? o.classList.add(l)
                        : o.classList.remove(l);
                    }),
                      this.scrollToggleFirstTwinTriggerNodes.forEach(function (
                        e,
                        o
                      ) {
                        var l =
                            void 0 !== e.dataset.scrollWatchTargetId
                              ? document.getElementById(
                                  e.dataset.scrollWatchTargetId
                                )
                              : e,
                          r =
                            void 0 !== e.dataset.scrollWatchCssClass
                              ? e.dataset.scrollWatchCssClass
                              : d.scrollActive;
                        e.getBoundingClientRect().bottom +
                          t.viewportValues.scrollTop >=
                        t.scrollToggleSecondTwinTriggerNodes[
                          o
                        ].getBoundingClientRect().top +
                          t.viewportValues.scrollTop
                          ? l.classList.add(r)
                          : l.classList.remove(r);
                      });
                  },
                },
                {
                  key: "_parallaxScrollBlocks",
                  value: function () {
                    var t = this;
                    this.parallaxBlockNodes.forEach(function (e) {
                      if ("none" !== window.getComputedStyle(e).display) {
                        e.getBoundingClientRect().top, e.dataset.scrollWatchTop;
                        e.style.transform =
                          "translate3d( 0, " +
                          t.viewportValues.scrollTop * u +
                          "px, 0 )";
                      }
                    });
                  },
                },
                {
                  key: "_setViewportValues",
                  value: function () {
                    (this.viewportValues.height =
                      document.documentElement.clientHeight),
                      (this.viewportValues.width =
                        document.documentElement.clientWidth);
                  },
                },
                {
                  key: "_initNodes",
                  value: function () {
                    var e = this;
                    (this.scrollActivateBlockNodes = t(
                      document.querySelectorAll("." + d.watchScrollActivate)
                    )),
                      (this.parallaxBlockNodes = t(
                        document.querySelectorAll("." + d.parallaxBlockScroll)
                      )),
                      (this.scrollToggleBlockNodes = t(
                        document.querySelectorAll("." + d.watchScrollToggle)
                      )),
                      (this.scrollToggleFirstTwinTriggerNodes = t(
                        document.querySelectorAll("." + d.watchScrollSameToggle)
                      )),
                      (this.scrollToggleSecondTwinTriggerNodes = []),
                      this.scrollToggleFirstTwinTriggerNodes.forEach(function (
                        t
                      ) {
                        var o = t.dataset.scrollToggleTwinId;
                        if (void 0 !== o)
                          e.scrollToggleSecondTwinTriggerNodes.push(
                            document.getElementById(o)
                          );
                        else {
                          var l = document.createElement("div");
                          (l.style.position = "absolute"),
                            (l.style.bottom = "0px"),
                            (l.style.height = "0px"),
                            (l.style.overflow = "hidden"),
                            document.body.appendChild(l),
                            e.scrollToggleSecondTwinTriggerNodes.push(l),
                            console.warn(
                              "%c viewport-watcher.js warning:%c Second twin ID not set in first twin dataset. Add fake second twin to bottom of page.",
                              "color: green",
                              "color: auto"
                            );
                        }
                      });
                  },
                },
                {
                  key: "_initEventListeners",
                  value: function () {
                    var t = this;
                    window.addEventListener(
                      "scroll",
                      function () {
                        window.requestAnimationFrame(function () {
                          return t._animationFrame();
                        });
                      },
                      { passive: !0 }
                    ),
                      window.addEventListener("resize", function () {
                        t._setViewportValues();
                      });
                  },
                },
                {
                  key: "_animationFrame",
                  value: function () {
                    (this.viewportValues.scrollTop = window.pageYOffset),
                      this._activateBlocks(),
                      this._toggleBlocks(),
                      this._parallaxScrollBlocks();
                  },
                },
                {
                  key: "init",
                  value: function () {
                    this._setViewportValues(),
                      this._initNodes(),
                      this._initEventListeners(),
                      this._activateBlocks(),
                      this._toggleBlocks();
                  },
                },
                {
                  key: "refresh",
                  value: function () {
                    this._initNodes();
                  },
                },
              ]),
              e
            );
          })(),
          h = new g();
        exports.viewportWatcher = h;
      },
      {},
    ],
    Ye8A: [
      function (require, module, exports) {
        "use strict";
        function t(t) {
          return o(t) || n(t) || r(t) || e();
        }
        function e() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function r(t, e) {
          if (t) {
            if ("string" == typeof t) return a(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            return (
              "Object" === r && t.constructor && (r = t.constructor.name),
              "Map" === r || "Set" === r
                ? Array.from(t)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? a(t, e)
                : void 0
            );
          }
        }
        function n(t) {
          if (
            ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
            null != t["@@iterator"]
          )
            return Array.from(t);
        }
        function o(t) {
          if (Array.isArray(t)) return a(t);
        }
        function a(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
          return n;
        }
        function i() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 500,
            r = document.querySelector("video"),
            n = !!r,
            o = r && r.children && r.children[0] && r.children[0].dataset.src;
          n &&
            o &&
            document.addEventListener("DOMContentLoaded", function () {
              var n = setTimeout(function () {
                t(r.children).forEach(function (t) {
                  return (t.src = t.dataset.src);
                }),
                  r.load(),
                  r.addEventListener("loadedmetadata", function () {
                    r.play(), clearTimeout(n);
                  });
              }, e);
            });
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = i);
      },
      {},
    ],
    CpbK: [
      function (require, module, exports) {
        "use strict";
        function t(t) {
          return o(t) || n(t) || r(t) || e();
        }
        function e() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function r(t, e) {
          if (t) {
            if ("string" == typeof t) return a(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            return (
              "Object" === r && t.constructor && (r = t.constructor.name),
              "Map" === r || "Set" === r
                ? Array.from(t)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? a(t, e)
                : void 0
            );
          }
        }
        function n(t) {
          if (
            ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
            null != t["@@iterator"]
          )
            return Array.from(t);
        }
        function o(t) {
          if (Array.isArray(t)) return a(t);
        }
        function a(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
          return n;
        }
        function i() {
          document.addEventListener("DOMContentLoaded", function () {
            var e = document.querySelectorAll("link[data-style-preload]");
            e.length &&
              t(e).forEach(function (t) {
                t.rel = "stylesheet";
              });
          });
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = i);
      },
      {},
    ],
    Focm: [
      function (require, module, exports) {
        "use strict";
        require("./styles/index.scss");
        var e = m(require("./utils/App/app")),
          t = m(require("./utils/parallax")),
          r = m(require("./utils/Gallery/gallery")),
          n = m(require("./utils/slider")),
          o = m(require("./utils/Popup/popup")),
          l = m(require("./utils/toggle-class")),
          u = m(require("./utils/change-tabs")),
          i = m(require("./utils/big-media")),
          s = m(require("./utils/Count-down/count-down")),
          a = m(require("./utils/tooltip")),
          c = m(require("./utils/sticky-area")),
          d = m(require("./utils/spoiler")),
          f = m(require("./utils/Json-content/json-content"));
        require("./utils/lazy-load.js");
        var p = require("./utils/viewport-watcher"),
          y = require("./config"),
          w = m(require("./utils/bgVideoLoader")),
          q = m(require("./utils/preloadStyles"));
        function m(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function C(e) {
          return S(e) || h(e) || A(e) || g();
        }
        function g() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function A(e, t) {
          if (e) {
            if ("string" == typeof e) return b(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === r && e.constructor && (r = e.constructor.name),
              "Map" === r || "Set" === r
                ? Array.from(e)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? b(e, t)
                : void 0
            );
          }
        }
        function h(e) {
          if (
            ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        }
        function S(e) {
          if (Array.isArray(e)) return b(e);
        }
        function b(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        (window.constructors = {}),
          (window.constructors.Tooltip = a.default),
          (window.App = e.default),
          window.App.setState({
            urlString: window.location.href,
            locale: document.documentElement.lang || "en",
          }),
          C(document.querySelectorAll("." + y.appCssClasses.slider)).forEach(
            function (e) {
              new n.default(e);
            }
          ),
          C(
            document.querySelectorAll("." + y.appCssClasses.changeTabs)
          ).forEach(function (e) {
            new u.default(e);
          });
        var v = new t.default();
        if (
          (v.init(),
          C(document.querySelectorAll("." + y.appCssClasses.gallery)).forEach(
            function (e) {
              new r.default(e);
            }
          ),
          document.querySelector("." + y.appCssClasses.openPopupTrigger))
        ) {
          var E = new o.default();
          E.init();
        }
        if (document.querySelector("." + y.appCssClasses.bigMedia)) {
          var j = new i.default();
          j.init();
        }
        C(document.querySelectorAll("." + y.appCssClasses.countdown)).forEach(
          function (e) {
            new s.default(e);
          }
        ),
          p.viewportWatcher.init();
        var T = new l.default();
        T.init(),
          C(document.querySelectorAll("." + y.appCssClasses.tooltip)).forEach(
            function (e) {
              new a.default(e);
            }
          ),
          C(
            document.querySelectorAll("." + y.appCssClasses.stickyArea)
          ).forEach(function (e) {
            new c.default(e);
          }),
          C(document.querySelectorAll("." + y.appCssClasses.spoiler)).forEach(
            function (e) {
              new d.default(e);
            }
          ),
          C(
            document.querySelectorAll("." + y.appCssClasses.jsonContent)
          ).forEach(function (e) {
            new f.default(e);
          }),
          (0, w.default)(),
          (0, q.default)();
      },
      {
        "./styles/index.scss": "L4MM",
        "./utils/App/app": "LaDf",
        "./utils/parallax": "EtDA",
        "./utils/Gallery/gallery": "UG6M",
        "./utils/slider": "qa9s",
        "./utils/Popup/popup": "c3KK",
        "./utils/toggle-class": "LJ8w",
        "./utils/change-tabs": "F83b",
        "./utils/big-media": "C8O2",
        "./utils/Count-down/count-down": "Q76K",
        "./utils/tooltip": "dDUK",
        "./utils/sticky-area": "waIS",
        "./utils/spoiler": "AscS",
        "./utils/Json-content/json-content": "CQgf",
        "./utils/lazy-load.js": "Yp46",
        "./utils/viewport-watcher": "hqVC",
        "./config": "itQ5",
        "./utils/bgVideoLoader": "Ye8A",
        "./utils/preloadStyles": "CpbK",
      },
    ],
  },
  {},
  ["Focm"],
  null
);
