(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabbar-tabbar2"], {
    "0861": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("7fc1")
          , i = n("fe7c");
        for (var o in i)
            "default" !== o && function(t) {
                n.d(e, t, (function() {
                    return i[t]
                }
                ))
            }(o);
        n("1f54");
        var r, s = n("f0c5"), l = Object(s["a"])(i["default"], a["b"], a["c"], !1, null, "7976500a", null, !1, a["a"], r);
        e["default"] = l.exports
    },
    "1f54": function(t, e, n) {
        "use strict";
        var a = n("5327")
          , i = n.n(a);
        i.a
    },
    "21b6": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("6532")
          , i = n.n(a);
        for (var o in a)
            "default" !== o && function(t) {
                n.d(e, t, (function() {
                    return a[t]
                }
                ))
            }(o);
        e["default"] = i.a
    },
    "308b": function(t, e, n) {
        var a = n("6552");
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        var i = n("4f06").default;
        i("a25f6f0a", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "49fb": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("c313")
          , i = n("21b6");
        for (var o in i)
            "default" !== o && function(t) {
                n.d(e, t, (function() {
                    return i[t]
                }
                ))
            }(o);
        n("9797");
        var r, s = n("f0c5"), l = Object(s["a"])(i["default"], a["b"], a["c"], !1, null, "5f43f7a0", null, !1, a["a"], r);
        e["default"] = l.exports
    },
    5327: function(t, e, n) {
        var a = n("e088");
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        var i = n("4f06").default;
        i("0c3174fc", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    6532: function(t, e, n) {
        "use strict";
        var a = n("4ea4");
        n("c975"),
        n("d3b7"),
        n("e25e"),
        n("25f0"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0;
        var i, o, r, s, l, d = a(n("5530")), u = a(n("ade3")), c = a(n("ff3d")), f = a(n("fcce")), p = {
            HECO: "0xefeCb26368F846a519Cac258EDAdc2Ae20dB026F",
            HECOTEST: "0xcBb1eD4b69bD0b418D86B3Bf8e720529242a1E64",
            BSC: "0xA29a3Bc1e864c18d19bdd6297111A51D9278B100",
            bsctest: "0x1c0f5F4217A6E0A6b3eadF19Ace40Ab3A088C419"
        }, m = {
            HECO: "0x7fEDbe882a9d83DaB9FDFbeB2F958a65A06604ba",
            HECOTEST: "0x7fEDbe882a9d83DaB9FDFbeB2F958a65A06604ba",
            OEC: "0x7fEDbe882a9d83DaB9FDFbeB2F958a65A06604ba",
            BSC: "0x468f2e867F28e2cC18b5d031BB2861c1A9e1c9c2"
        }, v = [{
            inputs: [],
            stateMutability: "nonpayable",
            type: "constructor"
        }, {
            inputs: [{
                internalType: "uint256[]",
                name: "conf",
                type: "uint256[]"
            }, {
                internalType: "address[]",
                name: "addrs",
                type: "address[]"
            }, {
                internalType: "string[]",
                name: "names",
                type: "string[]"
            }],
            name: "addOrUpdateSConf",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "id",
                type: "uint256"
            }],
            name: "claim",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "id",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "doStake",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "addr",
                type: "address"
            }],
            name: "getSConf",
            outputs: [{
                internalType: "uint256[]",
                name: "",
                type: "uint256[]"
            }, {
                internalType: "address[]",
                name: "",
                type: "address[]"
            }, {
                internalType: "string[]",
                name: "",
                type: "string[]"
            }, {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }, {
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "id",
                type: "uint256"
            }],
            name: "unStake",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "contractAddr",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "withdrawErc20",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "withdrawHt",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }], h = [{
            constant: !1,
            inputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "constructor"
        }, {
            constant: !1,
            inputs: [],
            name: "_backAddr",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [],
            name: "_backLp",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [],
            name: "_fist",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [],
            name: "_ftts",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [],
            name: "_fttsLP",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [],
            name: "_router",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [],
            name: "durations",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            payable: !1,
            stateMutability: "payable",
            type: "receive"
        }, {
            constant: !1,
            inputs: [{
                indexed: !1,
                internalType: "address",
                name: "addr",
                type: "address"
            }],
            name: "hasRole",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                indexed: !1,
                internalType: "address",
                name: "addr",
                type: "address"
            }, {
                indexed: !1,
                internalType: "bool",
                name: "val",
                type: "bool"
            }],
            name: "setRole",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                indexed: !1,
                internalType: "address",
                name: "con",
                type: "address"
            }, {
                indexed: !1,
                internalType: "address",
                name: "addr",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "val",
                type: "uint256"
            }],
            name: "unlock",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                indexed: !1,
                internalType: "address",
                name: "addr",
                type: "address"
            }],
            name: "getTeam1",
            outputs: [{
                internalType: "address[]",
                name: "",
                type: "address[]"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                indexed: !1,
                internalType: "address",
                name: "addr",
                type: "address"
            }],
            name: "getTeam2",
            outputs: [{
                internalType: "address[]",
                name: "",
                type: "address[]"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                indexed: !1,
                internalType: "address",
                name: "addr",
                type: "address"
            }],
            name: "getData",
            outputs: [{
                internalType: "uint256[29]",
                name: "",
                type: "uint256[29]"
            }, {
                internalType: "address[4]",
                name: "",
                type: "address[4]"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                indexed: !1,
                internalType: "uint256[]",
                name: "confs",
                type: "uint256[]"
            }],
            name: "setData",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                indexed: !1,
                internalType: "address",
                name: "back",
                type: "address"
            }, {
                indexed: !1,
                internalType: "address",
                name: "backlp",
                type: "address"
            }],
            name: "setBack",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                indexed: !1,
                internalType: "address",
                name: "addr",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "invitePower",
                type: "uint256"
            }],
            name: "getClaim",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                indexed: !1,
                internalType: "address",
                name: "addr",
                type: "address"
            }],
            name: "sumInvitePower",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                indexed: !1,
                internalType: "address",
                name: "invite",
                type: "address"
            }],
            name: "doStart",
            outputs: [],
            payable: !1,
            stateMutability: "payable",
            type: "function"
        }, {
            constant: !1,
            inputs: [],
            name: "doClaim",
            outputs: [],
            payable: !1,
            stateMutability: "payable",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "stake2",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !1,
            inputs: [],
            name: "unstake",
            outputs: [],
            payable: !1,
            stateMutability: "payable",
            type: "function"
        }, {
            constant: !1,
            inputs: [],
            name: "doAward",
            outputs: [],
            payable: !1,
            stateMutability: "payable",
            type: "function"
        }], y = n("c46b"), w = 86400, g = 6, b = {
            computed: {
                i18n: function() {
                    return this.$t("tabbar1")
                }
            },
            data: function() {
                var t;
                return {
                    address: null,
                    address2: null,
                    chainkind: "",
                    chaincoin: "BNB",
                    stakes: [],
                    chooseid: 0,
                    owner: null,
                    total: 0,
                    minerConf: (t = {
                        ethBurn: 0,
                        power0: 100,
                        invite: 0,
                        power1: 0,
                        power2: 0,
                        power3: 0,
                        power: 0,
                        sec9Rate: 0,
                        stime: 0,
                        ctime: 0,
                        awardTime: 0,
                        anum: 0,
                        team1: 0,
                        team2: 0,
                        team3: 0,
                        timeLast: 0
                    },
                    (0,
                    u.default)(t, "ctime", 0),
                    (0,
                    u.default)(t, "half", 1),
                    (0,
                    u.default)(t, "backRate", 0),
                    (0,
                    u.default)(t, "miners", 0),
                    (0,
                    u.default)(t, "eth", 0),
                    (0,
                    u.default)(t, "realeth", 0),
                    (0,
                    u.default)(t, "realminhold", 0),
                    (0,
                    u.default)(t, "endTime", 0),
                    (0,
                    u.default)(t, "stakeNum", 0),
                    (0,
                    u.default)(t, "minhold", 0),
                    (0,
                    u.default)(t, "total", 0),
                    (0,
                    u.default)(t, "balance", 0),
                    (0,
                    u.default)(t, "unclaim", 0),
                    (0,
                    u.default)(t, "realethBurn", 0),
                    (0,
                    u.default)(t, "running", !1),
                    (0,
                    u.default)(t, "unStakeTime", 0),
                    (0,
                    u.default)(t, "realunclaim", 0),
                    (0,
                    u.default)(t, "realbalance", 0),
                    (0,
                    u.default)(t, "realtotal", 0),
                    (0,
                    u.default)(t, "canaward", !1),
                    (0,
                    u.default)(t, "canClaimBnb", 0),
                    (0,
                    u.default)(t, "day100rate", 0),
                    (0,
                    u.default)(t, "hourRate", 0),
                    (0,
                    u.default)(t, "doing", !1),
                    (0,
                    u.default)(t, "doing2", !1),
                    (0,
                    u.default)(t, "doing3", !1),
                    (0,
                    u.default)(t, "myinvite", ""),
                    (0,
                    u.default)(t, "realanum", 0),
                    (0,
                    u.default)(t, "stakes", 0),
                    (0,
                    u.default)(t, "chanliang", 0),
                    (0,
                    u.default)(t, "hour", "0"),
                    (0,
                    u.default)(t, "minu", "0"),
                    (0,
                    u.default)(t, "sec", "0"),
                    (0,
                    u.default)(t, "admin", "0x6A2eCD2a42E760f23E33b3736A276588804Ade3B"),
                    (0,
                    u.default)(t, "fist", ""),
                    (0,
                    u.default)(t, "fttslp", ""),
                    (0,
                    u.default)(t, "lpasset", 0),
                    (0,
                    u.default)(t, "lpallow", 0),
                    (0,
                    u.default)(t, "realLpAsset", 0),
                    (0,
                    u.default)(t, "realLpAllow", 0),
                    (0,
                    u.default)(t, "realethallow", 0),
                    (0,
                    u.default)(t, "hour2", "0"),
                    (0,
                    u.default)(t, "minu2", "0"),
                    (0,
                    u.default)(t, "sec2", "0"),
                    t),
                    stake: {},
                    initing: !0,
                    curinvite: null,
                    withContract: "",
                    withAmount: "",
                    withDecimals: "",
                    stakeNum: "",
                    total1: 0,
                    total2: 0,
                    items: ["单币质押", "LP 质押"],
                    current: 0
                }
            },
            onLoad: function() {},
            onShow: function() {
                this.items = [this.$t("tabbar1").stakeCoinName, this.$t("tabbar1").stakeLpName]
            },
            mounted: function() {
                var t = this;
                setInterval((function() {
                    t.initMiner()
                }
                ), 3e4),
                setInterval((function() {
                    t.resetTime(),
                    t.resetTimeAward()
                }
                ), 1e3),
                setTimeout((function() {
                    t.initAccount()
                }
                ), 30),
                this.showModal()
            },
            methods: {
                lang: function(t) {
                    this._i18n.locale = t,
                    this.items = [this.$t("tabbar1").stakeCoinName, this.$t("tabbar1").stakeLpName],
                    "zh-CN" == t ? (uni.setTabBarItem({
                        index: 0,
                        text: "DEFI"
                    }),
                    uni.setTabBarItem({
                        index: 1,
                        text: "挖矿"
                    })) : (uni.setTabBarItem({
                        index: 0,
                        text: "DEFI"
                    }),
                    uni.setTabBarItem({
                        index: 1,
                        text: "Mimer"
                    }))
                },
                initInvite: function() {
                    var t = window.location.href;
                    t.indexOf("invite=") > 0 && (t = t.substr(t.indexOf("invite=") + 7, 42)),
                    0 == t.indexOf("0x") && (this.curinvite = t),
                    console.log("url:" + t)
                },
                unlock: function(t) {
                    var e = this
                      , n = parseInt((new Date).getTime() / 1e3)
                      , a = parseInt((n - t.stime) / w);
                    console.log("diff day:" + a);
                    var o = t.lockday - a;
                    if (a < t.lockday)
                        alert("未到解锁时间，剩余：" + o + " 天");
                    else {
                        var r = new f.default("0.005").multipliedBy(Math.pow(10, 18)).toFixed(0);
                        t.approving = !0,
                        i.methods.unStake(t.id).send({
                            from: e.address,
                            value: r
                        }).then((function(n) {
                            e.initStake(),
                            t.approving = !1
                        }
                        )).catch((function(n) {
                            e.initStake(),
                            t.approving = !1
                        }
                        ))
                    }
                },
                claim: function(t) {
                    var e = this
                      , n = new f.default("0.005").multipliedBy(Math.pow(10, 18)).toFixed(0);
                    t.approving = !0,
                    i.methods.claim(t.id).send({
                        from: e.address,
                        value: n
                    }).then((function(n) {
                        e.initStake(),
                        t.approving = !1
                    }
                    )).catch((function(n) {
                        e.initStake(),
                        t.approving = !1
                    }
                    ))
                },
                onClickItem: function(t) {
                    this.current = t.currentIndex
                },
                changeKind: function(t) {
                    this.stake.kind = t.detail.value
                },
                changeState: function(t) {
                    this.stake.state = t.detail.value
                },
                openCurrent: function(t, e) {
                    e ? this.stake = {
                        id: this.total,
                        show: 1,
                        kind: 0,
                        state: 1,
                        limit: 0,
                        realRate: 0,
                        realLimit: 0,
                        inDecimals: 18,
                        outDecimals: 18,
                        lockday: 0,
                        year1: "",
                        year2: "",
                        inContract: "",
                        outContract: "",
                        inName: "",
                        outName: "",
                        icon1: "",
                        icon2: ""
                    } : (this.stake = (0,
                    d.default)({}, t),
                    this.stake.realRate = this.stake.realRate.toFixed(),
                    this.stake.realLimit = this.stake.realLimit.toFixed()),
                    this.$refs.popup.open("top")
                },
                withHt: function() {
                    var t = this;
                    if (this.withAmount && !isNaN(this.withAmount) && this.withDecimals && !isNaN(this.withDecimals)) {
                        var e = new f.default(this.withAmount).multipliedBy(Math.pow(10, this.withDecimals)).toFixed();
                        if (this.withContract && this.withContract.indexOf("0x") > -1) {
                            var n = r.utils.toChecksumAddress(this.withContract);
                            i.methods.withdrawErc20(n, e).send({
                                from: t.address
                            }).then((function(t) {
                                alert("ok")
                            }
                            )).catch((function(t) {
                                alert("error")
                            }
                            ))
                        } else
                            i.methods.withdrawHt(e).send({
                                from: t.address
                            }).then((function(t) {
                                alert("ok")
                            }
                            )).catch((function(t) {
                                alert("error")
                            }
                            ))
                    }
                },
                openLast: function() {
                    this.openCurrent(null, !0)
                },
                initMiner: function() {
                    var t = this;
                    o && !this.minerConf.doing && o.methods.getData(this.address).call().then((function(e) {
                        console.log(e),
                        t.initing = !1,
                        t.minerConf.invite = parseInt(e[0][0]),
                        t.minerConf.unclaim = e[0][1],
                        t.minerConf.chanliang = parseInt(e[0][2]),
                        t.minerConf.ethBurn = e[0][3],
                        t.minerConf.power1 = parseInt(e[0][4]),
                        t.minerConf.power2 = parseInt(e[0][5]),
                        t.minerConf.power3 = parseInt(e[0][6]),
                        t.minerConf.sec9Rate = e[0][7],
                        t.minerConf.minhold = e[0][8],
                        t.minerConf.miners = parseInt(e[0][9]),
                        t.minerConf.stakes = e[0][10],
                        t.minerConf.stime = parseInt(e[0][11]),
                        t.minerConf.ctime = parseInt(e[0][12]),
                        t.minerConf.awardTime = parseInt(e[0][13]),
                        t.minerConf.anum = e[0][14],
                        t.minerConf.endTime = parseInt(e[0][15]),
                        t.minerConf.power = parseInt(e[0][16]),
                        t.minerConf.stakeNum = e[0][17],
                        t.minerConf.unStakeTime = e[0][18],
                        t.minerConf.team1 = parseInt(e[0][19]),
                        t.minerConf.team2 = parseInt(e[0][20]),
                        t.minerConf.team3 = parseInt(e[0][21]),
                        t.minerConf.total = e[0][22],
                        t.minerConf.balance = e[0][23],
                        t.minerConf.eth = e[0][24],
                        t.minerConf.ethallow = e[0][25],
                        t.minerConf.lpasset = e[0][26],
                        t.minerConf.lpallow = e[0][27],
                        t.minerConf.fistAsset = e[0][28],
                        t.minerConf.realLpAsset = new f.default(t.minerConf.lpasset).dividedBy(Math.pow(10, 18)).toFixed(),
                        t.minerConf.realLpAllow = new f.default(t.minerConf.lpallow).dividedBy(Math.pow(10, 18)).toFixed(18),
                        t.minerConf.realFistAsset = new f.default(t.minerConf.fistAsset).dividedBy(Math.pow(10, 18)).toFixed(18),
                        t.minerConf.realethBurn = new f.default(t.minerConf.ethBurn).dividedBy(Math.pow(10, 18)).toFixed(),
                        t.minerConf.realunclaim = new f.default(t.minerConf.unclaim).dividedBy(Math.pow(10, 18)).toFixed(3),
                        t.minerConf.realbalance = new f.default(t.minerConf.balance).dividedBy(Math.pow(10, 18)).toFixed(4),
                        t.minerConf.realtotal = new f.default(t.minerConf.total).dividedBy(Math.pow(10, 18)).toFixed(0),
                        t.minerConf.realeth = new f.default(t.minerConf.eth).dividedBy(Math.pow(10, 18)).toFixed(6), //分红池
                        t.minerConf.realethallow = new f.default(t.minerConf.ethallow).dividedBy(Math.pow(10, g)).toFixed(0),
                        t.minerConf.realminhold = new f.default(t.minerConf.minhold).dividedBy(Math.pow(10, 18)).toFixed(8),//最小LP
                        t.minerConf.realanum = new f.default(t.minerConf.anum).dividedBy(Math.pow(10, 18)).toFixed(6),//已领分红
                        t.minerConf.realstakes = new f.default(t.minerConf.stakes).dividedBy(Math.pow(10, 18)),
                        t.minerConf.realstakeNum = new f.default(t.minerConf.stakeNum).dividedBy(Math.pow(10, 18)),
                        t.minerConf.realstakes > 0 && t.minerConf.realstakeNum > 0 ? t.minerConf.canClaimBnb = t.minerConf.realstakeNum.multipliedBy(t.minerConf.realeth).dividedBy(t.minerConf.realstakes).toFixed(6) : t.minerConf.canClaimBnb = 0,
                        t.minerConf.realstakes = t.minerConf.realstakes.toFixed(0),
                        t.minerConf.realstakeNum = t.minerConf.realstakeNum.toFixed(8),
                        t.minerConf.hourRate = new f.default(t.minerConf.sec9Rate).multipliedBy(133).multipliedBy(100).dividedBy(Math.pow(10, 18)).toFixed(),
                        t.minerConf.myinvite = e[1][0].substr(0, 6) + "..." + e[1][0].substr(38),
                        t.minerConf.admin = e[1][1],
                        t.minerConf.fist = e[1][2],
                        t.minerConf.fttslp = e[1][3];
                        var n = parseInt((new Date).getTime() / 1e3);
                        if (t.minerConf.myChanliangPerDay = 0,
                        t.minerConf.stime > 0 && t.minerConf.endTime > n) {
                            t.minerConf.myChanliangPerDay = t.minerConf.chanliang * (100 + t.minerConf.invite) / 100,
                            t.minerConf.running = !0;
                            var a = t.minerConf.endTime - n;
                            t.minerConf.hour = parseInt(a / 3600).toString(),
                            t.minerConf.minu = parseInt((a - 3600 * t.minerConf.hour) / 60).toString(),
                            t.minerConf.sec = (a % 60).toString()
                        } else
                            t.minerConf.running = !1,
                            t.minerConf.hour = "0",
                            t.minerConf.minu = "0",
                            t.minerConf.sec = "0";
                        t.resetTimeAward(),
                        t.minerConf.doing = !1
                    }
                    )).catch((function(e) {
                        t.initing = !1,
                        //alert(e),
						console.log(e)
                    }
                    ))
                },
                maxAsset: function() {
                    this.stakeNum = this.minerConf.realLpAsset
                },
                resetTime: function() {
                    if (!(!o || this.minerConf.stime < 1 || this.minerConf.doing)) {
                        var t = this
                          , e = parseInt((new Date).getTime() / 1e3)
                          , n = this.minerConf;
                        if (n.stime > 0 && n.endTime > e) {
                            t.minerConf.running = !0;
                            var a = n.endTime - e;
                            n.hour = parseInt(a / 3600).toString(),
                            n.minu = parseInt((a - 3600 * n.hour) / 60).toString(),
                            n.sec = (a % 60).toString()
                        } else
                            t.minerConf.running = !1,
                            n.hour = "0",
                            n.minu = "0",
                            n.sec = "0"
                    }
                },
                resetTimeAward: function() {
                    if (o) {
                        var t = parseInt((new Date).getTime() / 1e3)
                          , e = this.minerConf
                          , n = e.awardTime + w - t;
                        n > 0 ? (e.canaward = !1,
                        e.hour2 = parseInt(n / 3600).toString(),
                        e.minu2 = parseInt((n - 3600 * e.hour2) / 60).toString(),
                        e.sec2 = (n % 60).toString()) : (e.hour2 = "0",
                        e.minu2 = "0",
                        e.sec2 = "0",
                        e.canaward = !0)
                    }
                },
                showModal: function() {
                    uni.showModal({
                        title: "公告",
                        showCancel: !1,
                        content: "DEFI 无损挖矿BNB，正式上线。\r\n1.投入0.02BNB 即可开始挖矿，24小时后可以提取到至少价值约0.05BNB的DEFI。\r\n2.随着挖矿人数的增加，产量会逐步降低，请关注网站最新公告。\r\n3.邀请好友一起挖矿，一级奖励10% BNB，二级奖励5% BNB  ",
                        success: function(t) {
                            t.confirm && console.log("用户点击确定")
                        }
                    })
                },
                doMint: function() {
                    var t = this
                      , e = r.utils.toChecksumAddress(this.mintAddr)
                      , n = new f.default(this.mintAmount).multipliedBy(Math.pow(10, 18)).toFixed(0);
                    o.methods.mint(e, n).send({
                        from: t.address
                    }).then((function(e) {
                        console.log(e),
                        t.initMiner()
                    }
                    )).catch((function(t) {
                        console.log("error"),
                        console.log(t)
                    }
                    ))
                },
                doAward: function() {
					console.log('doAward function');
                    var t = this;
                    o && (t.minerConf.realstakeNum - t.minerConf.realminhold < 0 ? uni.showToast({
                        title: "至少质押 " + t.minerConf.realminhold + " LP",
                        icon: "error",
                        duration: 3e3
                    }) : (t.minerConf.doing3 = !0,
                    o.methods.doAward().send({
                        from: t.address,
						value: t.minerConf.ethBurn/4
                    }).then((function(e) {
                        console.log(e),
                        t.minerConf.doing3 = !1,
                        t.initMiner()
                    }
                    )).catch((function(e) {
                        console.log("error"),
                        console.log(e),
                        t.minerConf.doing3 = !1
                    }
                    ))))
                },
                doinvite: function() {
                    var t = window.location.href;
                    t.indexOf("?") > 0 && (t = t.substring(0, t.indexOf("?"))),
                    t = t + "?invite=" + this.address,
                    uni.setClipboardData({
                        data: t,
                        success: function() {
                            console.log("success")
                        }
                    })
                },
                unstake: function() {
                    var t = this;
                    if (o)
                        if (t.minerConf.stakeNum <= 0)
                            uni.showToast({
                                title: "暂无质押",
                                icon: "error",
                                duration: 3e3
                            });
                        else {
                            var e = parseInt((new Date).getTime() / 1e3);
                            t.minerConf.awardTime + 10 * w >= e&&0 ? uni.showToast({
                                title: "10 天不领取分红才可解锁",
                                icon: "error",
                                duration: 5e3
                            }) : (t.minerConf.doing3 = !0,
                            o.methods.unstake().send({
                                from: t.address
                            }).then((function(e) {
                                console.log(e),
                                t.minerConf.doing3 = !1,
                                t.initMiner()
                            }
                            )).catch((function(e) {
                                console.log("error"),
                                console.log(e),
                                t.minerConf.doing3 = !1
                            }
                            )))
                        }
                },
                stakeInvide: function() {
                    var t = this;
                    if (o && this.stakeNum && !isNaN(this.stakeNum)) {
                        var e = new f.default(this.stakeNum).multipliedBy(Math.pow(10, 18)).toFixed(0);
                        console.log(this.stakeNum),
                        console.log(this.minerConf.realbalance),
                        this.minerConf.realLpAsset - this.stakeNum < 0 ? uni.showToast({
                            title: "资产不足",
                            icon: "error",
                            duration: 5e3
                        }) : (t.minerConf.doing3 = !0,
                        o.methods.stake2(e).send({
                            from: t.address
                        }).then((function(e) {
                            console.log(e),
                            t.minerConf.doing3 = !1,
                            t.initMiner()
                        }
                        )).catch((function(e) {
                            console.log("error"),
                            console.log(e),
                            t.minerConf.doing3 = !1
                        }
                        )))
                    }
                },
                doMiner: function(t) {
                    var e = this;
					console.log('doMiner');
					if(e.minerConf.running){
					
					uni.showToast({
											title: "正在挖矿中",
											icon: "error",
											duration: 5e3
										})	

						return ;							
						
					}
					console.log(e);
                    o && (/*e.minerConf.chanliang < 1 ? uni.showToast({
                        title: "当前算力产出 0",
                        icon: "error",
                        duration: 5e3
                    }) : */e.minerConf.realFistAsset - e.minerConf.realethBurn < 0&&0 ? uni.showToast({
                        title: "BNB余额不足",
                        icon: "error",
                        duration: 5e3
                    }) : (this.curinvite || (this.curinvite = this.address),
                    e.minerConf.doing = !0,
                    o.methods.doStart(e.curinvite).send({
                        from: e.address,
						value: e.minerConf.ethBurn
                    }).then((function(t) {
                        console.log(t),
                        e.minerConf.doing = !1,
                        e.initMiner()
                    }
                    )).catch((function(t) {
                        console.log("error"),
                        console.log(t),
                        e.minerConf.doing = !1
                    }
                    ))))
                },
                claim1: function() {
                    var t = this;
					console.log('claim1'),
                    o && (t.minerConf.realunclaim <= 300  ? uni.showToast({
                        title: "满300个才能提现",
                        icon: "error",
                        duration: 5e3
                    }) : (t.minerConf.doing2 = !0,
                    o.methods.doClaim().send({
                        from: t.address,
						value: t.minerConf.ethBurn
                    }).then((function(e) {
                        console.log(e),
                        t.minerConf.doing2 = !1,
                        t.initMiner()
                    }
                    )).catch((function(e) {
                        console.log("error"),
                        console.log(e),
                        t.minerConf.doing2 = !1
                    }
                    ))))
                },
                doUpdate: function(t) {
                    var e = this
                      , n = []
                      , a = []
                      , o = [];
                    n[0] = t ? this.total : this.stake.id,
                    n[1] = this.stake.show,
                    n[2] = this.stake.kind,
                    n[3] = this.stake.state,
                    n[4] = new f.default(this.stake.realLimit).multipliedBy(Math.pow(10, this.stake.inDecimals)).toFixed(),
                    n[5] = new f.default(this.stake.realRate).multipliedBy(Math.pow(10, 18)).toFixed(),
                    n[6] = this.stake.inDecimals,
                    n[7] = this.stake.outDecimals,
                    n[8] = this.stake.lockday,
                    a[0] = this.stake.inContract,
                    a[1] = this.stake.outContract,
                    o[0] = this.stake.inName,
                    o[1] = this.stake.outName,
                    o[2] = this.stake.icon1,
                    o[3] = this.stake.icon2,
                    o[4] = this.stake.year1,
                    o[5] = this.stake.year2,
                    i.methods.addOrUpdateSConf(n, a, o).send({
                        from: e.address
                    }).then((function(t) {
                        e.initStake()
                    }
                    )).catch((function(t) {
                        e.initStake()
                    }
                    ))
                },
                chooseId: function(t) {
                    console.log("chooseid:" + t),
                    this.chooseid = t
                },
                page1: function() {
                    window.open("https://t.me/DEFI8vip")
                },
                initAccount: function() {
                    var t = this;
                    window.ethereum ? (t.initInvite(),
                    ethereum.request({
                        method: "eth_requestAccounts"
                    }).then((function(e) {
                        r = new y(ethereum),
                        ethereum.request({
                            method: "eth_chainId"
                        }).then((function(e) {
                            if (e) {
                                if (e = r.utils.hexToNumber(e),
                                console.log("chainid:" + e),
                                56 == e)
                                    t.chainkind = "BSC";
                                else if (97 == e)
                                    t.chainkind = "bsctest";
                                else if (256 == e)
                                    t.chainkind = "HECOTEST";
                                else {
                                    if (66 != e)
                                        return void alert("暂不支持该公链");
                                    t.chainkind = "OEC"
                                }
                                l = m[t.chainkind],
                                s = p[t.chainkind],
                                r.eth.getAccounts((function(e, n) {
                                    e ? alert(e) : n && n.length > 0 && (console.log("account:" + n),
                                    t.address = n[0],
                                    t.address2 = n[0].substr(0, 4) + " ... " + n[0].substr(38),
                                    i = new r.eth.Contract(v,s),
                                    o = new r.eth.Contract(h,l),
                                    t.initMiner())
                                }
                                ))
                            }
                        }
                        ))
                    }
                    )).catch((function(t) {
                        alert("连接钱包失败，原因：" + t),
                        console.log(t)
                    }
                    ))) : alert("请安装钱包插件 或在 DAPP 中打开")
                },
                initStake: function() {
                    var t = this;
                    i.methods.getSConf(this.address).call().then((function(e) {
                        t.stakes = [],
                        console.log(e);
                        var n = parseInt(e[1].length / 2)
                          , a = 17;
                        t.total1 = 0,
                        t.total2 = 0;
                        for (var i = 0; i < n; i++) {
                            var o = {};
                            o.id = e[0][i * a],
                            o.show = e[0][i * a + 1],
                            o.kind = e[0][i * a + 2],
                            o.state = e[0][i * a + 3],
                            o.limit = e[0][i * a + 4],
                            o.rate = e[0][i * a + 5],
                            o.stake = e[0][i * a + 6],
                            o.claim = e[0][i * a + 7],
                            o.inDecimals = e[0][i * a + 8],
                            o.outDecimals = e[0][i * a + 9],
                            o.mystake = e[0][i * a + 10],
                            o.myclaim = e[0][i * a + 11],
                            o.stime = parseInt(e[0][i * a + 12]),
                            o.ctime = parseInt(e[0][i * a + 13]),
                            o.inBalance = e[0][i * a + 14],
                            o.inAllowance = e[0][i * a + 15],
                            o.lockday = e[0][i * a + 16],
                            o.inContract = e[1][2 * i],
                            o.outContract = e[1][2 * i + 1],
                            o.inName = e[2][6 * i],
                            o.outName = e[2][6 * i + 1],
                            o.icon1 = e[2][6 * i + 2],
                            o.icon2 = e[2][6 * i + 3],
                            o.year1 = e[2][6 * i + 4],
                            o.year2 = e[2][6 * i + 5],
                            o.approving = !1,
                            "" != o.year1 ? o.yearRate = o.year1 : o.yearRate = new f.default(o.rate).dividedBy(Math.pow(10, 18)).multipliedBy(12).multipliedBy(24).multipliedBy(365).multipliedBy(100).toFixed(2),
                            "" != o.year2 ? o.yearRate2 = o.year2 : o.yearRate2 = new f.default(o.rate).dividedBy(Math.pow(10, 18)).multipliedBy(12).multipliedBy(24).plus(1).pow(365).multipliedBy(100).toFixed(2),
                            o.realRate = new f.default(o.rate).dividedBy(Math.pow(10, 18)),
                            o.realInBalance = new f.default(o.inBalance).dividedBy(Math.pow(10, o.inDecimals)),
                            o.realInAllowance = new f.default(o.inAllowance).dividedBy(Math.pow(10, o.inDecimals)),
                            o.realLimit = new f.default(o.limit).dividedBy(Math.pow(10, o.inDecimals)),
                            o.realStake = new f.default(o.stake).dividedBy(Math.pow(10, o.inDecimals)),
                            o.realLeft = o.realLimit.minus(o.realStake),
                            o.realClaim = new f.default(o.claim).dividedBy(Math.pow(10, o.outDecimals)),
                            o.realmystake = new f.default(o.mystake).dividedBy(Math.pow(10, o.inDecimals)),
                            o.realmyclaim = new f.default(o.myclaim).dividedBy(Math.pow(10, o.outDecimals)),
                            o.realmycan = 0,
                            o.leftday = 0;
                            var r = parseInt((new Date).getTime() / 1e3);
                            if (o.realmystake > 0) {
                                var s = parseInt((r - o.ctime) / 300);
                                o.realmycan = o.realmystake.multipliedBy(s).multipliedBy(o.realRate);
                                var l = parseInt((r - o.stime) / w);
                                o.leftday = o.lockday - l,
                                o.leftday < 0 && (o.leftday = 0)
                            }
                            o.amount = "",
                            t.stakes.push(o),
                            0 == o.kind ? t.total1 += parseInt(o.realStake) : t.total2 += parseInt(o.realStake)
                        }
                        t.total = e[3],
                        t.owner = e[4],
                        t.initing = !1
                    }
                    )).catch((function(e) {
                        t.initing = !1,
                        //alert(e)
						console.log('1274'),
						console.log(e)
                    }
                    ))
                },
                approveFist: function() {
                    var t = "0"
                      , e = this
                      , n = new r.eth.Contract(c.default.coinAbi,e.minerConf.fist);
                    e.minerConf.doing = !0,
                    n.methods.approve(l, t).send({
                        from: e.address
                    }).then((function(t) {
                        e.minerConf.doing = !1,
                        e.initMiner()
                    }
                    )).catch((function(t) {
                        e.minerConf.doing = !1,
                        e.initMiner()
                    }
                    ))
                },
                approveFttsLp: function() {
                    var t = new f.default(10).pow("58").toFixed()
                      , e = this
                      , n = new r.eth.Contract(c.default.coinAbi,e.minerConf.fttslp);
                    e.minerConf.doing3 = !0,
                    n.methods.approve(l, t).send({
                        from: e.address
                    }).then((function(t) {
                        e.minerConf.doing3 = !1,
                        e.initMiner()
                    }
                    )).catch((function(t) {
                        e.minerConf.doing3 = !1,
                        e.initMiner()
                    }
                    ))
                },
                approve: function(t) {
                    var e = new f.default(10).pow("58").toFixed()
                      , n = this
                      , a = new r.eth.Contract(c.default.coinAbi,t.inContract);
                    t.approving = !0,
                    a.methods.approve(s, e).send({
                        from: n.address
                    }).then((function(e) {
                        n.initStake(),
                        t.approving = !1
                    }
                    )).catch((function(e) {
                        n.initStake(),
                        t.approving = !1
                    }
                    ))
                },
                doBuy: function(t) {
                    var e = this;
                    if (t.amount && !isNaN(t.amount))
                        if (t.realLeft - t.amount < 0)
                            alert("额度不足，剩余额度：" + t.realLeft);
                        else if (t.realInBalance.toFixed() - t.amount < 0)
                            alert("资产不足，当前资产：" + t.realInBalance);
                        else if (t.realInAllowance.toFixed() - t.amount < 0)
                            alert("资产授权不足，当前授权：" + t.realInAllowance);
                        else if (t.state < 1)
                            alert("已暂停质押");
                        else if (t.show <= 0)
                            alert("已关闭质押");
                        else {
                            var n = new f.default(t.amount).multipliedBy(Math.pow(10, t.inDecimals)).toFixed()
                              , a = new f.default("0.002").multipliedBy(Math.pow(10, 18)).toFixed(0);
                            t.approving = !0,
                            i.methods.doStake(t.id, n).send({
                                from: e.address,
                                value: a
                            }).then((function(n) {
                                e.initStake(),
                                t.approving = !1
                            }
                            )).catch((function(n) {
                                e.initStake(),
                                t.approving = !1
                            }
                            ))
                        }
                }
            }
        };
        e.default = b
    },
    6552: function(t, e, n) {
        var a = n("24fb")
          , i = n("1de5")
          , o = n("9f39");
        e = a(!1);
        var r = i(o);
        e.push([t.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-5f43f7a0]{background-color:#131922}.static[data-v-5f43f7a0]{\r\n  /* background-color: rgba(126, 160, 174, 0.23); */background-image:url(' + r + ");background-repeat:no-repeat;background-size:100% 100%;border-radius:%?10?%;margin:0 %?40?% %?30?%;padding:%?30?% %?50?% %?30?%;color:#f1f1f1;background:#1d2633;border:1px solid #343d4f;color:#ffb751;margin-top:30px}.static .header[data-v-5f43f7a0]{font-size:%?28?%;font-weight:500;text-align:center}.btn-yellow[data-v-5f43f7a0]{background-color:#ffcc06;color:#131922;border-radius:%?30?%;font-size:%?24?%;background-color:#ffcc06;color:#131922}.btn-yellow2[data-v-5f43f7a0]{background-color:#ffcc06;color:#131922;width:80%;border-radius:%?50?%;margin-top:%?40?%}.image[data-v-5f43f7a0]{width:%?42?%;height:%?42?%;margin-right:%?12?%}.popup[data-v-5f43f7a0]{background-color:#fff;padding:%?24?% %?30?%}.space-maohao[data-v-5f43f7a0]{margin-left:%?6?%;margin-right:%?6?%}.title[data-v-5f43f7a0]{background:#1d2633;padding:10px 15px}.lang[data-v-5f43f7a0]{padding:%?30?%}.button2[data-v-5f43f7a0]{font-size:14px;padding:0 20px;height:28px;line-height:28px}.btn-lang[data-v-5f43f7a0]{margin:0 %?10?%}.btn-lang2[data-v-5f43f7a0]{color:#fff;background-color:#f6cd30}\r\n/* .content {\r\n\tpadding: $uni-spacing-col-lg $uni-spacing-row-lg;\r\n} */.text-center[data-v-5f43f7a0]{text-align:center}.text-center-flex[data-v-5f43f7a0]{display:flex;flex-direction:column;justify-content:center;align-items:center}.segmented[data-v-5f43f7a0]{margin:%?40?%}.presale[data-v-5f43f7a0]{border-radius:%?50?%;margin:%?30?%;padding:%?50?%;background-image:url(" + r + ");background-repeat:no-repeat;background-size:100% 100%}.swiper[data-v-5f43f7a0]{width:%?690?%;height:%?293?%;margin-top:%?30?%}.swiper-image[data-v-5f43f7a0]{width:%?690?%;height:%?293?%;border-radius:%?50?%}.presale-title[data-v-5f43f7a0]{text-align:center;margin:%?30?% 0 %?40?%;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.space-image[data-v-5f43f7a0]{width:%?60?%;height:%?60?%}.presale-img[data-v-5f43f7a0]{width:%?50?%;height:%?50?%;margin-right:%?20?%}.color-yellow[data-v-5f43f7a0]{color:#fff}.color-yellow2[data-v-5f43f7a0]{color:#ccc}.presale-img-long[data-v-5f43f7a0]{width:%?100?%;height:%?50?%;margin-right:%?20?%}.presale-img2[data-v-5f43f7a0]{width:%?36?%;height:%?36?%;margin-left:%?14?%}.presale-time[data-v-5f43f7a0]{margin-top:%?40?%;margin-bottom:%?50?%}.margin-top-12[data-v-5f43f7a0]{margin-top:%?12?%}.margin-bottom-12[data-v-5f43f7a0]{margin-bottom:%?12?%}.margin-top-20[data-v-5f43f7a0]{margin-top:%?20?%}.presale-btn[data-v-5f43f7a0]{margin-top:%?20?%;margin-bottom:%?10?%;text-align:center}.presale-statistic[data-v-5f43f7a0]{margin-top:%?40?%;margin-bottom:%?60?%}.presale-statistic-border[data-v-5f43f7a0]{border:solid %?1?% #c8c7cc;border-radius:%?12?%;padding:%?24?% %?30?%}.presale-amount[data-v-5f43f7a0]{margin-top:%?50?%;display:flex;flex-direction:row}.text-btn[data-v-5f43f7a0]{margin-left:%?16?%;font-size:%?30?%;text-decoration:underline}.uni-up[data-v-5f43f7a0]{color:#fff}uni-button[data-v-5f43f7a0]:after{border:none}uni-button[data-v-5f43f7a0]{font-size:%?32?%;font-weight:530;background-size:100% 100%;background-color:initial;color:#fff}body.?%PAGE?%[data-v-5f43f7a0]{background-color:#131922}", ""]),
        t.exports = e
    },
    "7fc1": function(t, e, n) {
        "use strict";
        var a;
        n.d(e, "b", (function() {
            return i
        }
        )),
        n.d(e, "c", (function() {
            return o
        }
        )),
        n.d(e, "a", (function() {
            return a
        }
        ));
        var i = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return t.text ? n("v-uni-text", {
                staticClass: "uni-tag",
                class: t.classes,
                style: t.customStyle,
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.onClick.apply(void 0, arguments)
                    }
                }
            }, [t._t("default"), t._v(t._s(t.text)), t._t("right")], 2) : t._e()
        }
          , o = []
    },
    9797: function(t, e, n) {
        "use strict";
        var a = n("308b")
          , i = n.n(a);
        i.a
    },
    c313: function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return i
        }
        )),
        n.d(e, "c", (function() {
            return o
        }
        )),
        n.d(e, "a", (function() {
            return a
        }
        ));
        var a = {
            uniPopup: n("5d4c").default,
            uniLoadMore: n("2ca6").default,
            uniTag: n("0861").default
        }
          , i = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("v-uni-view", {
                staticClass: "content"
            }, [a("v-uni-view", {
                staticClass: "flex-row-between title"
            }, [a("v-uni-view", {
                staticStyle: {
                    display: "flex",
                    "align-items": "center",
                    "justify-content": "center"
                }
            }, [a("v-uni-image", {
                staticStyle: {
                    width: "80rpx",
                    height: "80rpx",
                    "margin-right": "16rpx",
                    "border-radius": "10px"
                },
                attrs: {
                    src: n("79c5")
                }
            })], 1), a("v-uni-view", {
                staticClass: "flex-row-between"
            }, [t.address ? t._e() : a("v-uni-button", {
                staticClass: "btn-yellow",
                attrs: {
                    type: "default"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.initAccount()
                    }
                }
            }, [t._v(t._s(t.i18n.wallet))]), t.address ? a("v-uni-button", {
                staticClass: "btn-yellow"
            }, [t._v(t._s(t.address2))]) : t._e(), a("v-uni-view", {
                staticStyle: {
                    width: "10rpx"
                }
            }), a("v-uni-button", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "zh-CN" == t._i18n.locale,
                    expression: "_i18n.locale=='zh-CN'"
                }],
                staticClass: "btn-yellow",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.lang("en-US")
                    }
                }
            }, [t._v("中文")]), a("v-uni-button", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "en-US" == t._i18n.locale,
                    expression: "_i18n.locale=='en-US'"
                }],
                staticClass: "btn-yellow",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.lang("zh-CN")
                    }
                }
            }, [t._v("English")])], 1)], 1), a("uni-popup", {
                ref: "popup",
                attrs: {
                    type: "bottom"
                }
            }, [a("v-uni-view", {
                staticClass: "popup"
            }, [a("v-uni-view", {
                staticClass: "flex-row-between"
            }, [a("v-uni-text", {
                staticClass: "uni-h4"
            }, [t._v("质押币种")]), a("v-uni-input", {
                staticClass: "uni-input uni-flex1",
                attrs: {
                    type: "text",
                    placeholder: "币种名称"
                },
                model: {
                    value: t.stake.inName,
                    callback: function(e) {
                        t.$set(t.stake, "inName", e)
                    },
                    expression: "stake.inName"
                }
            }), a("v-uni-text", {
                staticClass: "uni-h4"
            }, [t._v("小数位")]), a("v-uni-input", {
                staticClass: "uni-input uni-flex1",
                attrs: {
                    type: "number",
                    placeholder: "18"
                },
                model: {
                    value: t.stake.inDecimals,
                    callback: function(e) {
                        t.$set(t.stake, "inDecimals", e)
                    },
                    expression: "stake.inDecimals"
                }
            })], 1), a("v-uni-view", {
                staticClass: "flex-row-between uni-margin-top-12"
            }, [a("v-uni-text", {
                staticClass: "uni-h4"
            }, [t._v("合约")]), a("v-uni-input", {
                staticClass: "uni-input uni-flex1",
                attrs: {
                    type: "text",
                    placeholder: "币种合约"
                },
                model: {
                    value: t.stake.inContract,
                    callback: function(e) {
                        t.$set(t.stake, "inContract", e)
                    },
                    expression: "stake.inContract"
                }
            })], 1), a("v-uni-view", {
                staticClass: "flex-row-between uni-margin-top-12"
            }, [a("v-uni-text", {
                staticClass: "uni-h4"
            }, [t._v("图标")]), a("v-uni-input", {
                staticClass: "uni-input uni-flex1",
                attrs: {
                    type: "text",
                    placeholder: "币种图标"
                },
                model: {
                    value: t.stake.icon1,
                    callback: function(e) {
                        t.$set(t.stake, "icon1", e)
                    },
                    expression: "stake.icon1"
                }
            })], 1), a("v-uni-view", {
                staticClass: "flex-row-between uni-margin-top-12"
            }, [a("v-uni-text", {
                staticClass: "uni-h4"
            }, [t._v("奖励币种")]), a("v-uni-input", {
                staticClass: "uni-input uni-flex1",
                attrs: {
                    type: "text",
                    placeholder: "币种名称"
                },
                model: {
                    value: t.stake.outName,
                    callback: function(e) {
                        t.$set(t.stake, "outName", e)
                    },
                    expression: "stake.outName"
                }
            }), a("v-uni-text", {
                staticClass: "uni-h4"
            }, [t._v("小数位")]), a("v-uni-input", {
                staticClass: "uni-input uni-flex1",
                attrs: {
                    type: "number",
                    placeholder: "18"
                },
                model: {
                    value: t.stake.outDecimals,
                    callback: function(e) {
                        t.$set(t.stake, "outDecimals", e)
                    },
                    expression: "stake.outDecimals"
                }
            })], 1), a("v-uni-view", {
                staticClass: "flex-row-between uni-margin-top-12"
            }, [a("v-uni-text", {
                staticClass: "uni-h4"
            }, [t._v("合约")]), a("v-uni-input", {
                staticClass: "uni-input uni-flex1",
                attrs: {
                    type: "text",
                    placeholder: "币种合约"
                },
                model: {
                    value: t.stake.outContract,
                    callback: function(e) {
                        t.$set(t.stake, "outContract", e)
                    },
                    expression: "stake.outContract"
                }
            })], 1), a("v-uni-view", {
                staticClass: "flex-row-between uni-margin-top-12"
            }, [a("v-uni-text", {
                staticClass: "uni-h4"
            }, [t._v("图标")]), a("v-uni-input", {
                staticClass: "uni-input uni-flex1",
                attrs: {
                    type: "text",
                    placeholder: "币种图标"
                },
                model: {
                    value: t.stake.icon2,
                    callback: function(e) {
                        t.$set(t.stake, "icon2", e)
                    },
                    expression: "stake.icon2"
                }
            })], 1), a("v-uni-view", {
                staticClass: "flex-row-between uni-margin-top-12"
            }, [a("v-uni-text", {
                staticClass: "uni-h4"
            }, [t._v("质押总额")]), a("v-uni-input", {
                staticClass: "uni-input uni-flex1",
                attrs: {
                    type: "number",
                    placeholder: "质押额度"
                },
                model: {
                    value: t.stake.realLimit,
                    callback: function(e) {
                        t.$set(t.stake, "realLimit", e)
                    },
                    expression: "stake.realLimit"
                }
            }), a("v-uni-text", {
                staticClass: "uni-h4"
            }, [t._v("锁仓天数")]), a("v-uni-input", {
                staticClass: "uni-input uni-flex1",
                attrs: {
                    type: "number",
                    placeholder: "锁仓天数"
                },
                model: {
                    value: t.stake.lockday,
                    callback: function(e) {
                        t.$set(t.stake, "lockday", e)
                    },
                    expression: "stake.lockday"
                }
            })], 1), a("v-uni-view", {
                staticClass: "flex-row-between uni-margin-top-12"
            }, [a("v-uni-text", {
                staticClass: "uni-h4"
            }, [t._v("年化利率")]), a("v-uni-input", {
                staticClass: "uni-input uni-flex1",
                attrs: {
                    type: "number",
                    placeholder: "不填自动计算"
                },
                model: {
                    value: t.stake.year1,
                    callback: function(e) {
                        t.$set(t.stake, "year1", e)
                    },
                    expression: "stake.year1"
                }
            }), a("v-uni-text", {
                staticClass: "uni-h4"
            }, [t._v("年化复利")]), a("v-uni-input", {
                staticClass: "uni-input uni-flex1",
                attrs: {
                    type: "number",
                    placeholder: "不填自动计算"
                },
                model: {
                    value: t.stake.year2,
                    callback: function(e) {
                        t.$set(t.stake, "year2", e)
                    },
                    expression: "stake.year2"
                }
            })], 1), a("v-uni-view", {
                staticClass: "flex-row-between uni-margin-top-12"
            }, [a("v-uni-text", {
                staticClass: "uni-h4"
            }, [t._v("5分钟收益")]), a("v-uni-input", {
                staticClass: "uni-input uni-flex1",
                attrs: {
                    type: "number",
                    placeholder: "小时收益"
                },
                model: {
                    value: t.stake.realRate,
                    callback: function(e) {
                        t.$set(t.stake, "realRate", e)
                    },
                    expression: "stake.realRate"
                }
            }), a("v-uni-radio-group", {
                on: {
                    change: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.changeState.apply(void 0, arguments)
                    }
                }
            }, [a("v-uni-label", {
                staticClass: "radio"
            }, [a("v-uni-radio", {
                attrs: {
                    value: "0",
                    checked: "0" == t.stake.state
                }
            }), t._v("暂停质押")], 1), a("v-uni-label", {
                staticClass: "radio"
            }, [a("v-uni-radio", {
                attrs: {
                    value: "1",
                    checked: "1" == t.stake.state
                }
            }), t._v("进行中")], 1)], 1)], 1), a("v-uni-view", {
                staticClass: "flex-row-between uni-margin-top-12"
            }, [a("v-uni-text", {
                staticClass: "uni-h4"
            }, [t._v("是否显示")]), a("v-uni-input", {
                staticClass: "uni-input uni-flex1",
                attrs: {
                    type: "number",
                    placeholder: "是否显示"
                },
                model: {
                    value: t.stake.show,
                    callback: function(e) {
                        t.$set(t.stake, "show", e)
                    },
                    expression: "stake.show"
                }
            }), a("v-uni-radio-group", {
                on: {
                    change: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.changeKind.apply(void 0, arguments)
                    }
                }
            }, [a("v-uni-label", {
                staticClass: "radio"
            }, [a("v-uni-radio", {
                attrs: {
                    value: "0",
                    checked: "0" == t.stake.kind
                }
            }), t._v("单币质押")], 1), a("v-uni-label", {
                staticClass: "radio"
            }, [a("v-uni-radio", {
                attrs: {
                    value: "1",
                    checked: "1" == t.stake.kind
                }
            }), t._v("LP质押")], 1)], 1)], 1), a("v-uni-view", {
                staticClass: "flex-row-around margin-top-12"
            }, [a("v-uni-button", {
                attrs: {
                    size: "mini",
                    type: "warn"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.doUpdate(!1)
                    }
                }
            }, [t._v("修改")]), a("v-uni-button", {
                attrs: {
                    size: "mini",
                    type: "warn"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.doUpdate(!0)
                    }
                }
            }, [t._v("添加")])], 1)], 1)], 1), t.owner && t.owner == t.address ? a("v-uni-view", {
                staticClass: "presale text-center"
            }, [a("v-uni-button", {
                staticClass: "margin-top-12",
                attrs: {
                    type: "primary"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.openLast()
                    }
                }
            }, [t._v("添加质押")])], 1) : t._e(), t.initing ? t._e() : a("v-uni-view", {
                staticClass: "static"
            }, [a("v-uni-view", {
                staticClass: "text-center",
                staticStyle: {
                    "margin-bottom": "40rpx",
                    "margin-top": "20rpx"
                }
            }, [a("v-uni-view", {
                staticClass: "uni-bold uni-h4 uni-color-white"
            }, [t._v(t._s(t.i18n.minerInfo))])], 1), a("v-uni-view", {
                staticStyle: {
                    "text-align": "center",
                    "margin-bottom": "30rpx",
                    "margin-top": "20rpx"
                }
            }, [t.minerConf.doing ? t._e() : a("v-uni-view", [a("v-uni-view", {
                staticClass: "flex-column-around"
            }, [a("v-uni-button", {
				staticClass: "btn-yellow-show",
                staticStyle: {
                    background: "rgb(255,204,6)",
                    color: "#111",
                    "font-size": "26rpx"
                },
                attrs: {
                    type: "default"
                },
                on: {
                    click: function(e) {
						console.log('t.startmining()');
                        arguments[0] = e = t.$handleEvent(e),
                        //t.approveFist.apply(void 0, arguments)
						t.doMiner(void 0, arguments)
                    }
                }
            }, [a("v-uni-text", [t._v(t._s(t.i18n.ipoBuy) + " ...")])], 1)], 1)], 1), t.minerConf.doing ? a("uni-load-more", {
                attrs: {
                    status: "loading"
                }
            }) : t._e(), t.minerConf.running ? a("v-uni-view", {
                staticClass: "flex-row-between",
                staticStyle: {
                    "margin-bottom": "50rpx",
					"margin-top": "20rpx"
                }
            }, [a("v-uni-view"), a("v-uni-view", {
                staticClass: "flex-row-around"
            }, [a("uni-tag", {
                staticClass: "btn-yellow-show",
                staticStyle: {
                    "box-shadow": "none"
                },
                attrs: {
                    size: "small",
                    text: t.minerConf.hour,
                    type: "warning"
                }
            }), a("v-uni-text", {
                staticClass: "space-maohao"
            }, [t._v(":")]), a("uni-tag", {
                staticClass: "btn-yellow-show",
                staticStyle: {
                    "box-shadow": "none"
                },
                attrs: {
                    size: "small",
                    text: t.minerConf.minu,
                    type: "warning"
                }
            }), a("v-uni-text", {
                staticClass: "space-maohao"
            }, [t._v(":")]), a("uni-tag", {
                staticClass: "btn-yellow-show",
                staticStyle: {
                    "box-shadow": "none"
                },
                attrs: {
                    size: "small",
                    text: t.minerConf.sec,
                    type: "warning"
                }
            })], 1), a("v-uni-view")], 1) : t._e()], 1), a("v-uni-view", {
                staticStyle: {
                    "margin-top": "30rpx",
                    "margin-bottom": "20rpx"
                }
            }, [a("v-uni-view", {
                staticClass: "flex-column-around"
            }, [a("v-uni-text", {
                staticClass: "uni-color-gray2",
                staticStyle: {
                    "font-size": "30rpx"
                }
            }, [t._v(t._s(t.i18n.minerCanClaim))]), a("v-uni-view", {
                staticClass: "margin-top-20",
                staticStyle: {
                    "font-size": "38rpx",
                    color: "#ffb751"
                }
            }, [t._v(t._s(t.minerConf.realunclaim) + " DEFI")])], 1), a("v-uni-view", {
                staticClass: "flex-row-around",
                staticStyle: {
                    "padding-top": "40rpx"
                }
            }, [t.minerConf.doing2 ? a("uni-load-more", {
                attrs: {
                    status: "loading"
                }
            }) : t._e(), t.minerConf.doing2 ? t._e() : a("v-uni-button", {
                staticStyle: {
                    "font-size": "26rpx",
                    color: "#131922",
                    "background-color": "#ffcc06"
                },
                on: {
                    click: function(e) {
						console.log('t.claim1()');
                        arguments[0] = e = t.$handleEvent(e),
                        t.claim1()
                    }
                }
            }, [t._v(t._s(t.i18n.minerClaim))]), a("v-uni-button", {
                staticStyle: {
                    "font-size": "26rpx",
                    color: "#131922",
                    "background-color": "#ffcc06"
                },
                on: {
                    click: function(e) {
						console.log('t.doinvite()');
                        arguments[0] = e = t.$handleEvent(e),
                        t.doinvite()
                    }
                }
            }, [t._v(t._s(t.i18n.minerInvite))])], 1)], 1)], 1), t.initing ? t._e() : a("v-uni-view", {
                staticClass: "static"
            }, [a("v-uni-view", {
                staticClass: "text-center",
                staticStyle: {
                    "margin-bottom": "40rpx",
                    "margin-top": "20rpx"
                }
            }, [a("v-uni-view", {
                staticClass: "uni-bold uni-h4 uni-color-white"
            }, [t._v(t._s(t.i18n.minerPoolName))])], 1), a("v-uni-view", {
                staticStyle: {
                    "margin-bottom": "40rpx",
                    "margin-top": "20rpx"
                }
            }, [a("v-uni-view", {
                staticClass: "flex-row-between",
                staticStyle: {
                    "margin-bottom": "20rpx"
                }
            }, [a("v-uni-text", {
                staticClass: "uni-h5 uni-color-gray2"
            }, [t._v(t._s(t.i18n.minerDividePool))]), a("v-uni-text", [t._v(t._s(t.minerConf.realeth) + " " + t._s(t.chaincoin))])], 1), a("v-uni-view", {
                staticClass: "flex-row-between",
                staticStyle: {
                    "margin-bottom": "20rpx"
                }
            }, [a("v-uni-text", {
                staticClass: "uni-h5 uni-color-gray2"
            }, [t._v(t._s(t.i18n.stakeMy))]), a("v-uni-text", [t._v(t._s(t.minerConf.realstakeNum) + " LP")])], 1), a("v-uni-view", {
                staticClass: "flex-row-between",
                staticStyle: {
                    "margin-bottom": "20rpx"
                }
            }, [a("v-uni-text", {
                staticClass: "uni-h5 uni-color-gray2"
            }, [t._v(t._s(t.i18n.minerMyDivide))]), a("v-uni-text", [t._v(t._s(t.minerConf.canClaimBnb) + " " + t._s(t.chaincoin))])], 1), a("v-uni-view", {
                staticClass: "flex-row-between"
            }, [a("v-uni-text", {
                staticClass: "uni-h5 uni-color-gray2"
            }, [t._v(t._s(t.i18n.minerDivide))]), a("v-uni-text", [t._v(t._s(t.minerConf.realanum) + " " + t._s(t.chaincoin))])], 1)], 1), t.minerConf.doing3 ? t._e() : a("v-uni-view", {
                staticClass: "flex-row-between"
            }, [a("v-uni-input", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.minerConf.realLpAllow > 1e4,
                    expression: "minerConf.realLpAllow > 10000"
                }],
                staticClass: "uni-input",
                staticStyle: {
                    flex: "1",
                    color: "#CCCCCC"
                },
                attrs: {
                    type: "text"
                },
                model: {
                    value: t.stakeNum,
                    callback: function(e) {
                        t.stakeNum = e
                    },
                    expression: "stakeNum"
                }
            }), a("v-uni-button", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.minerConf.realLpAllow > 1e4,
                    expression: "minerConf.realLpAllow > 10000"
                }],
                staticStyle: {
                    background: "#ffcc06",
                    padding: "4rpx 36rpx",
                    color: "#131922",
                    "font-size": "28rpx"
                },
                attrs: {
                    size: "mini"
                },
                on: {
                    click: function(e) {
						console.log('t.stakeInvide()');
                        arguments[0] = e = t.$handleEvent(e),
                        t.stakeInvide()
                    }
                }
            }, [t._v(t._s(t.i18n.minerStake))]), a("v-uni-button", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.minerConf.realLpAllow <= 1e4,
                    expression: "minerConf.realLpAllow <= 10000"
                }],
                staticStyle: {
                    background: "#ffcc06",
                    color: "#000",
                    "font-size": "26rpx"
                },
                attrs: {
                    type: "default"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.approveFttsLp.apply(void 0, arguments)
                    }
                }
            }, [t._v(t._s(t.i18n.ipoApprove2) + " LP")])], 1), a("v-uni-view", {
                staticClass: "text-center margin-top-20"
            }, [a("v-uni-view", {
                staticClass: "flex-row-around",
                staticStyle: {
                    "justify-content": "center"
                }
            }, [a("v-uni-view", {}, [t._v(t._s(t.minerConf.realLpAsset) + " LP")]), a("v-uni-view", {}, [a("v-uni-button", {
                staticStyle: {
                    background: "#ffcc06",
                    color: "#000",
                    "font-size": "24rpx",
                    "margin-left": "20rpx"
                },
                attrs: {
                    type: "default"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.maxAsset.apply(void 0, arguments)
                    }
                }
            }, [t._v("MAX")])], 1)], 1)], 1), a("v-uni-view", {
                staticClass: "flex-row-around",
                staticStyle: {
                    "margin-top": "40rpx"
                }
            }, [t.minerConf.doing3 ? a("uni-load-more", {
                attrs: {
                    status: "loading"
                }
            }) : t._e(), !t.minerConf.doing3 && t.minerConf.canaward ? a("v-uni-button", {
                staticStyle: {
                    "font-size": "26rpx",
                    color: "#131922",
                    "background-color": "#ffcc06"
                },
                attrs: {
                    size: "mini"
                },
                on: {
                    click: function(e) {
						console.log('doAward()');
                        arguments[0] = e = t.$handleEvent(e),
                        t.doAward()
                    }
                }
            }, [t._v(t._s(t.i18n.minerAward))]) : t._e(), t.minerConf.doing3 || t.minerConf.canaward ? t._e() : a("v-uni-view", {
                staticClass: "flex-row-around"
            }, [a("uni-tag", {
                staticClass: "btn-yellow-show",
                staticStyle: {
                    "box-shadow": "none"
                },
                attrs: {
                    size: "small",
                    text: t.minerConf.hour2,
                    type: "warning"
                }
            }), a("v-uni-text", {
                staticClass: "space-maohao"
            }, [t._v(":")]), a("uni-tag", {
                staticClass: "btn-yellow-show",
                staticStyle: {
                    "box-shadow": "none"
                },
                attrs: {
                    size: "small",
                    text: t.minerConf.minu2,
                    type: "warning"
                }
            }), a("v-uni-text", {
                staticClass: "space-maohao"
            }, [t._v(":")]), a("uni-tag", {
                staticClass: "btn-yellow-show",
                staticStyle: {
                    "box-shadow": "none"
                },
                attrs: {
                    size: "small",
                    text: t.minerConf.sec2,
                    type: "warning"
                }
            })], 1), !t.minerConf.doing3 && t.minerConf.canaward ? a("v-uni-button", {
                staticStyle: {
                    "font-size": "26rpx",
                    color: "#131922",
                    "background-color": "#ffcc06"
                },
                attrs: {
                    size: "mini"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.unstake()
                    }
                }
            }, [t._v(t._s(t.i18n.minerUnlock))]) : t._e()], 1)], 1), t.initing ? a("uni-load-more", {
                attrs: {
                    status: "loading"
                }
            }) : t._e(), a("v-uni-view", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.initing,
                    expression: "!initing"
                }],
                staticStyle: {
                    padding: "0 30rpx"
                }
            }, [a("v-uni-swiper", {
                staticClass: "swiper",
                attrs: {
                    "indicator-dots": "true",
                    "indicator-color": "rgba(255, 255, 255, .7)",
                    "indicator-active-color": "rgba(255, 255, 255, .9)",
                    circular: "true",
                    autoplay: "true",
                    interval: "3000",
                    duration: "500"
                }
            }, [a("v-uni-swiper-item", {
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.page1.apply(void 0, arguments)
                    }
                }
            }, [a("v-uni-image", {
                staticClass: "swiper-image",
                attrs: {
                    src: "http://DEFI8.vip/static/b1.jpg",
                    mode: "aspectFill"
                }
            })], 1), a("v-uni-swiper-item", {
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.page1.apply(void 0, arguments)
                    }
                }
            }, [a("v-uni-image", {
                staticClass: "swiper-image",
                attrs: {
                    src: "http://DEFI8.vip/static/b2.jpg",
                    mode: "aspectFill"
                }
            })], 1), a("v-uni-swiper-item", {
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.page1.apply(void 0, arguments)
                    }
                }
            }, [a("v-uni-image", {
                staticClass: "swiper-image",
                attrs: {
                    src: "http://DEFI8.vip/static/b3.jpg",
                    mode: "aspectFill"
                }
            })], 1)], 1)], 1), a("v-uni-view", {
                staticStyle: {
                    width: "100%",
                    height: "30rpx"
                }
            })], 1)
        }
          , o = []
    },
    e088: function(t, e, n) {
        var a = n("24fb");
        e = a(!1),
        e.push([t.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-tag[data-v-7976500a]{display:inline-block;padding:0 16px;line-height:30px;color:#333;border-radius:%?6?%;background-color:#f8f8f8;border-width:%?1?%;border-style:solid;border-color:#f8f8f8;cursor:pointer}.uni-tag--circle[data-v-7976500a]{border-radius:15px}.uni-tag--mark[data-v-7976500a]{border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:15px;border-bottom-right-radius:15px}.uni-tag--disabled[data-v-7976500a]{opacity:.5;cursor:not-allowed}.uni-tag--small[data-v-7976500a]{height:20px;padding:0 8px;line-height:20px;font-size:%?24?%}.uni-tag--default[data-v-7976500a]{color:#333;font-size:%?28?%}.uni-tag--royal[data-v-7976500a]{color:#333;font-size:%?28?%}.uni-tag-text--small[data-v-7976500a]{font-size:%?24?%}.uni-tag-text[data-v-7976500a]{color:#fff;font-size:%?28?%}.uni-tag-text--primary[data-v-7976500a]{color:#007aff}.uni-tag-text--success[data-v-7976500a]{color:#4cd964}.uni-tag-text--warning[data-v-7976500a]{color:#f0ad4e}.uni-tag-text--error[data-v-7976500a]{color:#dd524d}.uni-tag-text--royal[data-v-7976500a]{color:#4335d6}.uni-tag-text--yellow[data-v-7976500a]{color:#fb8b2d}.uni-tag--primary[data-v-7976500a]{color:#fff;background-color:#007aff;border-width:%?1?%;border-style:solid;border-color:#007aff}.primary-uni-tag--inverted[data-v-7976500a]{color:#007aff;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#007aff}.uni-tag--success[data-v-7976500a]{color:#fff;background-color:#4cd964;border-width:%?1?%;border-style:solid;border-color:#4cd964}.success-uni-tag--inverted[data-v-7976500a]{color:#4cd964;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#4cd964}.uni-tag--warning[data-v-7976500a]{color:#fff;background-color:#f0ad4e;border-width:%?1?%;border-style:solid;border-color:#f0ad4e}.warning-uni-tag--inverted[data-v-7976500a]{color:#f0ad4e;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#f0ad4e}.uni-tag--error[data-v-7976500a]{color:#fff;background-color:#dd524d;border-width:%?1?%;border-style:solid;border-color:#dd524d}.error-uni-tag--inverted[data-v-7976500a]{color:#dd524d;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#dd524d}.uni-tag--royal[data-v-7976500a]{color:#fff;background-color:#4335d6;border-width:%?1?%;border-style:solid;border-color:#4335d6}.royal-uni-tag--inverted[data-v-7976500a]{color:#4335d6;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#4335d6}.uni-tag--yellow[data-v-7976500a]{color:#fff;background-color:#fb8b2d;border-width:%?1?%;border-style:solid;border-color:#fb8b2d}.yellow-uni-tag--inverted[data-v-7976500a]{color:#fb8b2d;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#fb8b2d}.uni-tag--inverted[data-v-7976500a]{color:#333;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#f8f8f8}', ""]),
        t.exports = e
    },
    e902: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0;
        var a = {
            name: "UniTag",
            emits: ["click"],
            props: {
                type: {
                    type: String,
                    default: "default"
                },
                size: {
                    type: String,
                    default: "normal"
                },
                text: {
                    type: String,
                    default: ""
                },
                disabled: {
                    type: [Boolean, String],
                    default: !1
                },
                inverted: {
                    type: [Boolean, String],
                    default: !1
                },
                circle: {
                    type: [Boolean, String],
                    default: !1
                },
                mark: {
                    type: [Boolean, String],
                    default: !1
                },
                customStyle: {
                    type: String,
                    default: ""
                }
            },
            computed: {
                classes: function() {
                    var t = this.type
                      , e = this.disabled
                      , n = this.inverted
                      , a = this.circle
                      , i = this.mark
                      , o = this.size
                      , r = this.isTrue
                      , s = ["uni-tag--" + t, r(e) ? "uni-tag--disabled" : "", r(n) ? t + "-uni-tag--inverted" : "", r(a) ? "uni-tag--circle" : "", r(i) ? "uni-tag--mark" : "", "uni-tag--" + o, r(n) ? "uni-tag-text--" + t : "", "small" === o ? "uni-tag-text--small" : ""];
                    return s.join(" ")
                }
            },
            methods: {
                isTrue: function(t) {
                    return !0 === t || "true" === t
                },
                onClick: function() {
                    this.isTrue(this.disabled) || this.$emit("click")
                }
            }
        };
        e.default = a
    },
    fe7c: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("e902")
          , i = n.n(a);
        for (var o in a)
            "default" !== o && function(t) {
                n.d(e, t, (function() {
                    return a[t]
                }
                ))
            }(o);
        e["default"] = i.a
    }
}]);
