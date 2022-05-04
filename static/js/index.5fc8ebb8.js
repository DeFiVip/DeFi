(function(e) {
    function a(a) {
        for (var t, o, s = a[0], l = a[1], u = a[2], c = 0, d = []; c < s.length; c++)
            o = s[c],
            Object.prototype.hasOwnProperty.call(r, o) && r[o] && d.push(r[o][0]),
            r[o] = 0;
        for (t in l)
            Object.prototype.hasOwnProperty.call(l, t) && (e[t] = l[t]);
        b && b(a);
        while (d.length)
            d.shift()();
        return i.push.apply(i, u || []),
        n()
    }
    function n() {
        for (var e, a = 0; a < i.length; a++) {
            for (var n = i[a], t = !0, o = 1; o < n.length; o++) {
                var l = n[o];
                0 !== r[l] && (t = !1)
            }
            t && (i.splice(a--, 1),
            e = s(s.s = n[0]))
        }
        return e
    }
    var t = {}
      , r = {
        index: 0
    }
      , i = [];
    function o(e) {
        return s.p + "static/js/" + ({
            "pages-tabbar-tabbar1~pages-tabbar-tabbar2~pages-tabbar-tabbar3": "pages-tabbar-tabbar1~pages-tabbar-tabbar2~pages-tabbar-tabbar3",
            "pages-tabbar-tabbar1~pages-tabbar-tabbar2": "pages-tabbar-tabbar1~pages-tabbar-tabbar2",
            "pages-tabbar-tabbar1": "pages-tabbar-tabbar1",
            "pages-tabbar-tabbar2": "pages-tabbar-tabbar2",
            "pages-tabbar-tabbar3": "pages-tabbar-tabbar3"
        }[e] || e) + "." + {
            "pages-tabbar-tabbar1~pages-tabbar-tabbar2~pages-tabbar-tabbar3": "c8da0a3c",
            "pages-tabbar-tabbar1~pages-tabbar-tabbar2": "f0d3edd8",
            "pages-tabbar-tabbar1": "fab9ce46",
            "pages-tabbar-tabbar2": "45da6369",
            "pages-tabbar-tabbar3": "6d95c5a5"
        }[e] + ".js"
    }
    function s(a) {
        if (t[a])
            return t[a].exports;
        var n = t[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(n.exports, n, n.exports, s),
        n.l = !0,
        n.exports
    }
    s.e = function(e) {
        var a = []
          , n = r[e];
        if (0 !== n)
            if (n)
                a.push(n[2]);
            else {
                var t = new Promise((function(a, t) {
                    n = r[e] = [a, t]
                }
                ));
                a.push(n[2] = t);
                var i, l = document.createElement("script");
                l.charset = "utf-8",
                l.timeout = 120,
                s.nc && l.setAttribute("nonce", s.nc),
                l.src = o(e);
                var u = new Error;
                i = function(a) {
                    l.onerror = l.onload = null,
                    clearTimeout(c);
                    var n = r[e];
                    if (0 !== n) {
                        if (n) {
                            var t = a && ("load" === a.type ? "missing" : a.type)
                              , i = a && a.target && a.target.src;
                            u.message = "Loading chunk " + e + " failed.\n(" + t + ": " + i + ")",
                            u.name = "ChunkLoadError",
                            u.type = t,
                            u.request = i,
                            n[1](u)
                        }
                        r[e] = void 0
                    }
                }
                ;
                var c = setTimeout((function() {
                    i({
                        type: "timeout",
                        target: l
                    })
                }
                ), 12e4);
                l.onerror = l.onload = i,
                document.head.appendChild(l)
            }
        return Promise.all(a)
    }
    ,
    s.m = e,
    s.c = t,
    s.d = function(e, a, n) {
        s.o(e, a) || Object.defineProperty(e, a, {
            enumerable: !0,
            get: n
        })
    }
    ,
    s.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    s.t = function(e, a) {
        if (1 & a && (e = s(e)),
        8 & a)
            return e;
        if (4 & a && "object" === typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (s.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & a && "string" != typeof e)
            for (var t in e)
                s.d(n, t, function(a) {
                    return e[a]
                }
                .bind(null, t));
        return n
    }
    ,
    s.n = function(e) {
        var a = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return s.d(a, "a", a),
        a
    }
    ,
    s.o = function(e, a) {
        return Object.prototype.hasOwnProperty.call(e, a)
    }
    ,
    s.p = "./",
    s.oe = function(e) {
        throw console.error(e),
        e
    }
    ;
    var l = window["webpackJsonp"] = window["webpackJsonp"] || []
      , u = l.push.bind(l);
    l.push = a,
    l = l.slice();
    for (var c = 0; c < l.length; c++)
        a(l[c]);
    var b = u;
    i.push([0, "chunk-vendors"]),
    n()
}
)({
    0: function(e, a, n) {
        e.exports = n("b128")
    },
    "1d46": function(e, a, n) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.default = void 0;
        var t = {
            onLaunch: function() {
                console.log("App Launch")
            },
            onShow: function() {
                console.log("App Show")
            },
            onHide: function() {
                console.log("App Hide")
            }
        };
        a.default = t
    },
    "654b": function(e, a, n) {
        var t = n("d0e3");
        "string" === typeof t && (t = [[e.i, t, ""]]),
        t.locals && (e.exports = t.locals);
        var r = n("4f06").default;
        r("4869aca2", t, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "6c22": function(e, a, n) {
        "use strict";
        var t;
        n.d(a, "b", (function() {
            return r
        }
        )),
        n.d(a, "c", (function() {
            return i
        }
        )),
        n.d(a, "a", (function() {
            return t
        }
        ));
        var r = function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("App", {
                attrs: {
                    keepAliveInclude: e.keepAliveInclude
                }
            })
        }
          , i = []
    },
    "6c3e": function(e, a, n) {
        "use strict";
        n.r(a);
        var t = n("6c22")
          , r = n("c4b7");
        for (var i in r)
            "default" !== i && function(e) {
                n.d(a, e, (function() {
                    return r[e]
                }
                ))
            }(i);
        n("def0");
        var o, s = n("f0c5"), l = Object(s["a"])(r["default"], t["b"], t["c"], !1, null, null, null, !1, t["a"], o);
        a["default"] = l.exports
    },
    "86af": function(e, a, n) {
        "use strict";
        (function(e) {
            var a = n("4ea4");
            n("13d5"),
            n("d3b7"),
            n("ac1f"),
            n("5319"),
            n("ddb0");
            var t = a(n("e143"))
              , r = {
                keys: function() {
                    return []
                }
            };
            e["____C7119B1____"] = !0,
            delete e["____C7119B1____"],
            e.__uniConfig = {
                globalStyle: {
                    navigationBarTextStyle: "white",
                    navigationBarTitleText: "DEFI",
                    navigationBarBackgroundColor: "#2C405A",
                    backgroundColor: "#2C405A"
                },
                tabBar: {
                    borderStyle: "black",
                    backgroundColor: "#130C17",
                    color: "#fff",
                    selectedColor: "#F6CD30",
                    list: [{
                        pagePath: "pages/tabbar/tabbar1",
                        iconPath: "./static/META.png",
                        selectedIconPath: "./static/META.png",
                        text: "DEFI",
                        redDot: !1,
                        badge: ""
                    }, {
                        pagePath: "pages/tabbar/tabbar2",
                        iconPath: "static/img/LPmining.png",
                        selectedIconPath: "static/img/LPmining_active.png",
                        text: "挖矿",
                        redDot: !1,
                        badge: ""
                    }, {
                        pagePath: "pages/tabbar/tabbar3",
                        iconPath: "static/img/gn1.png",
                        selectedIconPath: "static/img/gn2.png",
                        text: "功能",
                        redDot: !1,
                        badge: ""
                    }]
                }
            },
            e.__uniConfig.compilerVersion = "3.4.7",
            e.__uniConfig.router = {
                mode: "hash",
                base: "./"
            },
            e.__uniConfig.publicPath = "./",
            e.__uniConfig["async"] = {
                loading: "AsyncLoading",
                error: "AsyncError",
                delay: 200,
                timeout: 6e4
            },
            e.__uniConfig.debug = !1,
            e.__uniConfig.networkTimeout = {
                request: 6e4,
                connectSocket: 6e4,
                uploadFile: 6e4,
                downloadFile: 6e4
            },
            e.__uniConfig.sdkConfigs = {},
            e.__uniConfig.qqMapKey = void 0,
            e.__uniConfig.googleMapKey = void 0,
            e.__uniConfig.locale = "",
            e.__uniConfig.fallbackLocale = void 0,
            e.__uniConfig.locales = r.keys().reduce((function(e, a) {
                var n = a.replace(/\.\/(uni-app.)?(.*).json/, "$2")
                  , t = r(a);
                return Object.assign(e[n] || (e[n] = {}), t.common || t),
                e
            }
            ), {}),
            e.__uniConfig.nvue = {
                "flex-direction": "column"
            },
            e.__uniConfig.__webpack_chunk_load__ = n.e,
            t.default.component("pages-tabbar-tabbar1", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-tabbar-tabbar1~pages-tabbar-tabbar2~pages-tabbar-tabbar3"), n.e("pages-tabbar-tabbar1~pages-tabbar-tabbar2"), n.e("pages-tabbar-tabbar1")]).then(function() {
                        return e(n("3c94"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            t.default.component("pages-tabbar-tabbar2", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-tabbar-tabbar1~pages-tabbar-tabbar2~pages-tabbar-tabbar3"), n.e("pages-tabbar-tabbar1~pages-tabbar-tabbar2"), n.e("pages-tabbar-tabbar2")]).then(function() {
                        return e(n("49fb"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            t.default.component("pages-tabbar-tabbar3", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-tabbar-tabbar1~pages-tabbar-tabbar2~pages-tabbar-tabbar3"), n.e("pages-tabbar-tabbar3")]).then(function() {
                        return e(n("cef3"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            e.__uniRoutes = [{
                path: "/",
                alias: "/pages/tabbar/tabbar1",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({
                                isQuit: !0,
                                isEntry: !0,
                                isTabBar: !0,
                                tabBarIndex: 0
                            }, __uniConfig.globalStyle, {
                                navigationStyle: "custom",
                                navigationBarTitleText: "DEFI"
                            })
                        }, [e("pages-tabbar-tabbar1", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    id: 1,
                    name: "pages-tabbar-tabbar1",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/tabbar/tabbar1",
                    isQuit: !0,
                    isEntry: !0,
                    isTabBar: !0,
                    tabBarIndex: 0,
                    windowTop: 0
                }
            }, {
                path: "/pages/tabbar/tabbar2",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({
                                isQuit: !0,
                                isTabBar: !0,
                                tabBarIndex: 1
                            }, __uniConfig.globalStyle, {
                                navigationStyle: "custom",
                                navigationBarTitleText: "DEFI"
                            })
                        }, [e("pages-tabbar-tabbar2", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    id: 2,
                    name: "pages-tabbar-tabbar2",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/tabbar/tabbar2",
                    isQuit: !0,
                    isTabBar: !0,
                    tabBarIndex: 1,
                    windowTop: 0
                }
            }, {
                path: "/pages/tabbar/tabbar3",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({
                                isQuit: !0,
                                isTabBar: !0,
                                tabBarIndex: 2
                            }, __uniConfig.globalStyle, {
                                navigationStyle: "custom",
                                navigationBarTitleText: "DEFI"
                            })
                        }, [e("pages-tabbar-tabbar3", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    id: 3,
                    name: "pages-tabbar-tabbar3",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/tabbar/tabbar3",
                    isQuit: !0,
                    isTabBar: !0,
                    tabBarIndex: 2,
                    windowTop: 0
                }
            }, {
                path: "/preview-image",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: {
                                navigationStyle: "custom"
                            }
                        }, [e("system-preview-image", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "preview-image",
                    pagePath: "/preview-image"
                }
            }, {
                path: "/choose-location",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: {
                                navigationStyle: "custom"
                            }
                        }, [e("system-choose-location", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "choose-location",
                    pagePath: "/choose-location"
                }
            }, {
                path: "/open-location",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: {
                                navigationStyle: "custom"
                            }
                        }, [e("system-open-location", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "open-location",
                    pagePath: "/open-location"
                }
            }],
            e.UniApp && new e.UniApp
        }
        ).call(this, n("c8ba"))
    },
    b128: function(e, a, n) {
        "use strict";
        var t = n("4ea4")
          , r = t(n("5530"));
        n("e260"),
        n("e6cf"),
        n("cca6"),
        n("a79d"),
        n("86af"),
        n("1c31");
        var i = t(n("6c3e"))
          , o = t(n("a925"))
          , s = t(n("e143"));
        s.default.use(o.default),
        s.default.config.productionTip = !1;
        var l = new o.default({
            locale: "zh-CN",
            messages: {
                "en-US": {
                    tabbar1: {
                        info: "Btux is an NFT distribution and trading platform that creates and sells digital collections protected by blockchain. The platform is an open source, unmanaged platform for users to cast, sell and create collections. Any user can enter btux to create and display their own works of art, or use busd coin and usdt token to buy works of art for collection. The user owns the ownership and intellectual property rights of the token. Buyers and sellers can trade collections in the btux NFT market at almost negligible costs.",
                        info1: "What distinguishes bituninx from ordinary NFT trading platforms such as opensea or superrare is its decentralization. The decentralized trading platform delegates the governance power to all those who hold governance tokens, such as compound's $comp, and the only way to earn these governance tokens is to buy them on the encrypted trading platform. Although these tokens are nominally used for governance, many holders actually use them to make profits. The decentralized mode and governance token allow users to manage the development and decision-making of the platform, allowing the most active players to vote for any platform upgrade and participate in management and audit.",
                        info2: "Metauniverse Cipher enriches users experience and entertainment by managing the token MVSR, which is produced by mining under BNB contract. Every 100 MVSR can be exchanged for a blind box, and the blind box can open NFT cards with different attributes. Each NFT card is independently encrypted and unique in the chain, and no one can copy or modify it.",
                        info3: "Metauniverse Cipher started BSC, and will be gradually deployed in the public chain supporting EVM (Ethereum Virtual Machine) (such as HECO, Polygon(matic), Sonala, OKexChain, etc.) for multi-chain operation in the future. At the same time, in the future, we will develop various online and offline games to increase landing applications, and strive to build a blockchain meta-universe platform.",
                        intro: "About",
                        wallet: "wallet",
                        assets: "My NFT",
                        addpower: "add power",
                        whitePaper: "White Paper",
                        nftTip: "Click the character to authorize for the first time",
                        minerInfo: "DEFI Miner",
                        minerStart: "Mining",
                        minerClaim: "Claim",
                        minerInvite: "Invite",
                        minerCanClaim: "Can Claim",
                        minerMyPower: "My Power",
                        minerMiner: "Miner",
                        minerStake: "Stake",
                        minerDivide: "Dividend",
                        minerHash: "Hashrate",
                        minerAward: "Award",
                        minerMy: "My Asset",
                        minerPoolName: "Pool",
                        minerDividePool: "Pool",
                        minerMiners: "All Miners",
                        minerTotalOutpuy: "Total Output",
                        minerTotalStake: "Total Stake",
                        minerDayOutput: "Daily Output",
                        minerInviteInfo: "Invite Info",
                        minerMyInvitees: "My Invitees",
                        minerLevel1Invite: "Invitations",
                        minerLevel2Invite: "Level 2 Invitation",
                        minerLevel3Invite: "Level 3 Invitation",
                        minerHalf: "Halving rule",
                        minerHalfAmount: "Halve number",
                        minerHalfHour: "Daily output",
                        minerLink: "Partners",
                        minerConnect: "Community",
                        minerTwitter: "Twitter",
                        minerTele: "Telegram",
                        minerMin: "Insufficient position",
                        minerMyDivide: "My Dividends",
                        minerWeek: "a week",
                        miner2Week: "two weeks",
                        minerSave: "Save",
                        minerManual: "Manual",
                        minerUnlock: "UnStake",
                        minerTopToday: "Today Top",
                        minerTopYestoday: "Yestoday Top",
                        minerTopAddr: "Address",
                        minerTopNum: "Amount",
                        minerOnce: "Draw once",
                        minerDay: "day",
                        ipo: "IPO",
                        ipoStartTime: "Start time",
                        ipoEndTime: "End time",
                        ipoEnd: "Ipo Ended",
                        ipoQuota: "Quota",
                        ipoSaled: "Saled",
                        ipoLimit: "Limit",
                        ipoBuyed: "myBuy",
                        ipoAmount: "amount",
                        ipoApprove: "cancel approve",
                        ipoApprove2: "approve",
                        ipoBuy: "Start Mining",
                        nftLimit: "NFT Box Limit 2000",
                        nftStar1: "star1: 50%, 1000",
                        nftStar2: "star2: 30%, 600",
                        nftStar3: "star3: 15%, 300",
                        nftStar4: "star4: 4.6%, 92",
                        nftStar5: "star5: 0.4%, 8",
                        seg1: "Market",
                        seg2: "My NFT",
                        seg3: "Create",
                        stakeGain: "Gain",
                        stakeYear: "Rate",
                        stakeYear2: "Interest",
                        stakeUnlockday: "Lock",
                        stakeLeft: "Left",
                        stakeTotal: "Total",
                        stakeClaim: "Claim",
                        stakeMy: "My Stake",
                        stakeUn: "unlock",
                        stakeCan: "Available",
                        stakeClaimDo: "Claim",
                        stakePause: "paused",
                        stakeStake: "stake",
                        stakeCanUse: "avai",
                        stakeLeftLockDay: "left day",
                        stakeCoinName: "Coin Stake",
                        stakeLpName: "LP Stake",
                        stakeCoinAmount: "Coin Quantity",
                        stakeLpAmount: "LP Quantity",
                        audit: "Audit Agency",
                        mine: "MINE",
                        create: "CREATE",
                        tokenid: "tokenid",
                        onsale: "On sale",
                        ended: "Ended",
                        bidding: "Bidding",
                        relatedworks: "Related works",
                        sell: "sell",
                        auction: "auction",
                        BNB: "Please enter BNB price",
                        format: "Image, Video, Audio, or 3D Model:",
                        newitem: "CREATE NEW ITEM",
                        filetype: "File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3 WAV, OGG, GLB, GLTF, Max size: 100MB",
                        classification: "Classification",
                        currentprice: "Current Price",
                        buy: "Buy",
                        tokeniD: "Token ID",
                        itemname: "Item Name",
                        con: "Provide a detailed description of your item."
                    }
                },
                "zh-CN": {
                    tabbar1: {
                        info: "BTUX是 NFT 发行与交易平台，创建和出售由区块链保护的数字藏品。该平台是一个供用户铸造、销售和创建收藏品的开源的、非托管的平台。任何用户都可以进入BTUX，创作和展示自己的艺术品，也可以用BUSD币安USDT代币购买艺术品来收藏。用户拥有代币的所有权以及知识产权。买家和卖家可以在 BTUX  NFT 市场上以几乎可以忽略不计的成本进行收藏品交易。",
                        wallet: "连接钱包",
                        info1: "BITUNIX区别于普通 NFT 交易平台如 OpenSea 或 SuperRare 的地方就是它的去中心化。去中心化交易平台将治理权下放给所有持有治理代币的人，如 Compound 的 $COMP ，而赚取这些治理代币的唯一方法就是在加密交易平台购买。虽然这些代币名义上用于治理，但实际上很多持有者用它们来盈利。去中心化模式加上治理代币允许用户对平台的发展和决策进行管理，让最为活跃的玩家们为任何平台升级投票并参与管理和审核。",
                        info2: "Metauniverse Cipher通过治理令牌MVSR来丰富用户的体验感和娱乐性，令牌 MVSR由BNB 合约挖矿产出。在每 100 枚MVSR可以兑换一个盲盒，盲盒可以开出不同属性的NFT卡片，每个NFT卡片都是独立加密，链上具有唯一性，任何人无法复制修改",
                        info3: "Metauniverse Cipher首发 BSC，未来将逐步部署在支持 EVM （以太坊虚拟机）的公链上（如 HECO、Polygon(matic)、Sonala、OKexChain 等）多链运营。同时，未来将开发线上线下各类游戏增加落地应用，致力于打造区块链元宇宙平台。",
                        intro: "简介",
                        assets: "我的 NFT",
                        addpower: "增加算力",
                        whitePaper: "白皮书",
                        nftTip: "点击人物抽奖，第一次授权",
                        minerInfo: "BNB 无损挖 DEFI",
                        minerStart: "挖矿中 ...",
                        minerClaim: "领取",
                        minerInvite: "邀请",
                        minerCanClaim: "已产出",
                        minerMyPower: "我的产量",
                        minerMiner: "挖矿",
                        minerStake: "质押",
                        minerAward: "领取",
                        minerDivide: "已领分红",
                        minerHash: "基础产量",
                        minerPoolName: "质押 LP 分红 BNB",
                        minerDividePool: "分红池",
                        minerMy: "我的资产",
                        minerMiners: "全网矿工",
                        minerTotalOutpuy: "全网流通",
                        minerTotalStake: "全网质押",
                        minerDayOutput: "100算力日产",
                        minerInviteInfo: "邀请信息",
                        minerMyInvitees: "我的上级",
                        minerLevel1Invite: "密接",
                        minerLevel2Invite: "次密接",
                        minerLevel3Invite: "三级邀请",
                        minerHalf: "减产规则",
                        minerHalfAmount: "减产数量",
                        minerHalfHour: "产量",
                        minerLink: "合作伙伴",
                        minerConnect: "社区交流",
                        minerTwitter: "推特",
                        minerTele: "电报",
                        minerMin: "持仓不足",
                        minerMyDivide: "我可分红",
                        minerWeek: "挖一周",
                        miner2Week: "挖两周",
                        minerSave: "节省",
                        minerManual: "操作手册",
                        minerUnlock: "解除",
                        minerTopToday: "今日邀请榜",
                        minerTopYestoday: "昨日邀请榜",
                        minerTopAddr: "地址",
                        minerTopNum: "邀请数量",
                        minerOnce: "抽取一次",
                        minerDay: "次",
                        nftLimit: "NFT 盲盒限量 2000 个",
                        nftStar1: "一星: 50% 1000个",
                        nftStar2: "二星: 30%  600个",
                        nftStar3: "三星: 15%  300个",
                        nftStar4: "四星: 4.6%  92个",
                        nftStar5: "五星: 0.4%  8个",
                        ipo: "公募",
                        ipoStartTime: "开始时间",
                        ipoEndTime: "结束时间",
                        ipoEnd: "公募已结束",
                        ipoQuota: "公募额度",
                        ipoSaled: "已售额度",
                        ipoLimit: "公募限额",
                        ipoBuyed: "我已购买",
                        ipoAmount: "数量",
                        ipoApprove2: "授权",
                        ipoApprove: "取消授权",
                        ipoBuy: "开始挖矿",
                        stakeGain: "收获",
                        stakeYear: "年化收益",
                        stakeYear2: "年化复利",
                        stakeUnlockday: "锁仓天数",
                        stakeLeft: "剩余额度",
                        stakeTotal: "全网质押",
                        stakeClaim: "已领收益",
                        stakeMy: "我的质押",
                        stakeUn: "解锁",
                        stakeCan: "可领收益",
                        stakeClaimDo: "领取",
                        stakePause: "已暂停",
                        stakeStake: "质押",
                        stakeCanUse: "可用",
                        stakeLeftLockDay: "锁仓剩余天数",
                        stakeCoinName: "单币质押",
                        stakeLpName: "LP 质押",
                        stakeCoinAmount: "单币质押量",
                        stakeLpAmount: "LP 质押量",
                        audit: "审计",
                        seg1: "市场",
                        seg2: "我的NFT",
                        seg3: "铸造",
                        mine: "我的资产",
                        create: "铸造 NFT",
                        tokenid: "代币",
                        onsale: "出售中",
                        ended: "结束",
                        bidding: "竞拍中",
                        relatedworks: "相关作品",
                        sell: "卖",
                        auction: "拍卖",
                        BNB: "请输入BNB价格",
                        format: "图像、照片：",
                        newitem: "创建新项目",
                        filetype: "支持的文件类型：JPG、PNG、GIF、SVG",
                        classification: "分类",
                        currentprice: "现行价格",
                        buy: "买",
                        tokeniD: "令牌ID",
                        itemname: "项目名称",
                        con: "提供项目的详细说明。"
                    }
                }
            }
        });
        s.default.prototype._i18n = l,
        i.default.mpType = "app";
        var u = new s.default((0,
        r.default)({
            i18n: l
        }, i.default));
        u.$mount()
    },
    c4b7: function(e, a, n) {
        "use strict";
        n.r(a);
        var t = n("1d46")
          , r = n.n(t);
        for (var i in t)
            "default" !== i && function(e) {
                n.d(a, e, (function() {
                    return t[e]
                }
                ))
            }(i);
        a["default"] = r.a
    },
    d0e3: function(e, a, n) {
        var t = n("24fb");
        a = t(!1),
        a.push([e.i, "\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*每个页面公共css */ \r\n\r\n/* 标题 */.uni-h1{font-size:%?80?%}.uni-h2{font-size:%?60?%}.uni-h3{font-size:%?40?%}.uni-h4{font-size:%?32?%}.uni-h5{font-size:%?28?%}.uni-h6{font-size:%?24?%}.uni-h7{font-size:%?22?%}.uni-bold{font-weight:700} \r\n\r\n/* 背景色 */.uni-bg-red{background-color:#f76260;color:#fff}.uni-bg-green{background-color:#09bb07;color:#fff}.uni-bg-blue{background-color:#007aff;color:#fff}.uni-bg-up{background-color:#00b48e}.uni-bg-down{background-color:#d14b64}.uni-bg-gray{background-color:#c6cfd6}.uni-bg-warn{background-color:#f0ad4e}.uni-up{color:#00b48e}.uni-down{color:#d14b64}.uni-color-black{color:#2c405a}.uni-color-gray{color:grey}.uni-color-gray1{color:#a0a8b5}.uni-color-gray2{color:#ccc}.uni-color-white{color:#fff}.uni-color-blue{color:#007aff}.uni-color-red{color:#dd524d}.uni-color-warn{color:#f0ad4e}.uni-color-white2{color:#f1f1f1}.uni-text-right{text-align:right;align-items:flex-end}.uni-text-center{text-align:center;align-items:center}.uni-color-orange{color:#ffb751}.uni-flex1{flex:1}.uni-margin-top-12{margin-top:%?12?%}.uni-margin-top-24{margin-top:%?24?%}.uni-margin-bottom-24{margin-bottom:%?24?%}.uni-input{border-color:#c8c7cc;border-width:%?1?%;border-style:solid;border-radius:%?12?%;font-size:%?28?%;padding:%?16?% %?20?%}.uni-textarea{border-color:#c8c7cc;border-width:%?1?%;border-style:solid;border-radius:%?12?%;font-size:%?16?%;padding:%?16?% %?20?%;width:94%}.uni-divider{\r\ndisplay:flex;flex:1;width:100%;\r\nheight:%?1?%;background-color:#e9ecef} \r\n\r\n/* 分界线 */.uni-gap{\r\ndisplay:flex;flex:1;width:100%;\r\nheight:%?20?%;background-color:#f7f6fb}.flex-row-between{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.flex-row-around{display:flex;flex-direction:row;justify-content:space-around;align-items:center}.flex-column-around{display:flex;flex-direction:column;justify-content:space-around;align-items:center}hr{margin-top:%?30?%;margin-bottom:%?30?%;border:0;border-top:1px solid rgba(0,0,0,.1)}", ""]),
        e.exports = a
    },
    def0: function(e, a, n) {
        "use strict";
        var t = n("654b")
          , r = n.n(t);
        r.a
    }
});
