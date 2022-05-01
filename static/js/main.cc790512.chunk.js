(this["webpackJsonpsuperminer-frontend"] =
    this["webpackJsonpsuperminer-frontend"] || []).push([
    [0],
    {
        288: function(e) {
            e.exports = JSON.parse(
                '{"abi": [] }'
            );
        },
        309: function(e, t, a) {},
        317: function(e, t, a) {},
        331: function(e, t) {},
        334: function(e, t) {},
        337: function(e, t) {},
        341: function(e, t) {},
        368: function(e, t) {},
        370: function(e, t) {},
        379: function(e, t) {},
        381: function(e, t) {},
        391: function(e, t) {},
        393: function(e, t) {},
        510: function(e, t) {},
        512: function(e, t) {},
        519: function(e, t) {},
        520: function(e, t) {},
        619: function(e, t, a) {},
        620: function(e, t, a) {},
        624: function(e, t, a) {},
        625: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                s = a.n(n),
                c = a(34),
                r = a.n(c),
                o = a(109),
                i = (a(309), a(28)),
                d = a(6),
                l = a(7),
                b = a(12),
                f = a(13),
                u = a(17),
                p = a.n(u),
                m = a(298),
                h = a(281),
                y = a.n(h),
                j = a(27),
                g = a(65),
                A = a(148),
                v = a.n(A),
                x = a(631),
                w = a(630),
                O = a(282),
                B = a(283),
                E = a.n(B),
                C = a(632),
                M = a(633),
                N = a(145),
                k = a(5),
                T = function(e) {
                    return Object(k.jsxs)("div", {
                        
                        onClick: function() {
                            
                            if (!window.web3)
                                return (
                                    console.log("metamask not installed"),
                                    void m.b.info(
                                        "Please use browser with BSC wallet installed to open the site."
                                    )
                                );
                            e.wallet.provider !== sessionStorage.wallet ?
                                ((sessionStorage.wallet = e.wallet.provider),
                                    e.readWeb3Instance(e.wallet)) :
                                "0x00000000000000000000000000000000deadbeef" === e.address ?
                                e.reconnect() :
                                (function() {
                                    if (!window.web3)
                                        return (
                                            console.log("metamask not installed"),
                                            void m.b.info(
                                                "Please use browser with BSC wallet installed."
                                            )
                                        );
                                    try {
                                        window.web3.eth.requestAccounts();
                                    } catch (e) {
                                        console.log(e);
                                    }
                                })(),
                                e.toggleDisplayWalletModal();
                        },
                        className: "walletItem",
                        children: [
                            Object(k.jsx)("img", {
                                src: ""
                                    .concat("", "static/wallet/")
                                    .concat(e.wallet.id, ".png"),
                                alt: "png",
                                className: "walletImage",
                            }),
                            Object(k.jsx)("h2", {
                                children: e.wallet.name
                            }),
                        ],
                    });
                },
                
                W = {
                    METAMASK: {
                        id: "metamask",
                        name: "Metamask",
                        provider: "ethereum"
                    },
                    CLOVER: {
                        id: "clover",
                        name: "Clover",
                        provider: "clover"
                    },
                    TOKENPOCKET: {
                        id: "tokenpocket",
                        name: "TokenPocket",
                        provider: "ethereum",
                    },
                    BITMAP: {
                        id: "bitkeep",
                        name: "BitKeep",
                        provider: "ethereum"
                    },
                    ONTO: {
                        id: "onto",
                        name: "ONTO",
                        provider: "onto"
                    },
                    MATHWALLET: {
                        id: "mathwallet",
                        name: "Math",
                        provider: "ethereum"
                    },
                    COIN98: {
                        id: "coin98",
                        name: "Coin98",
                        provider: "ethereum"
                    },
                    METAX: {
                        id: "metax",
                        name: "MetaX",
                        provider: "okexchain"
                    },
                },
                H =
                (a(317),
                    function(e) {
                        return Object(k.jsxs)("div", {
                            className: "wallet",
                            children: [
                                Object(k.jsx)(N.a, {
                                    className: "close",
                                    onClick: function() {
                                        
                                        e.toggleDisplayWalletModal();
                                    },
                                }),
                                Object(k.jsx)("h1", {
                                    children: "链接钱包"
                                }),
                                Object(k.jsx)(C.a, {
                                    justify: "space-around",
                                    align: "middle",
                                    gutter: {
                                        xs: 5,
                                        sm: 5,
                                        md: 16
                                    },
                                    children: Object.values(W).map(function(t) {
                                        
                                        return Object(k.jsx)(
                                            M.a, {
                                                xs: 24,
                                                sm: 24,
                                                md: 24,
                                                children: Object(k.jsx)(T, {
                                                    wallet: t,
                                                    reconnect: e.reconnect,
                                                    address: e.address,
                                                    readWeb3Instance: e.readWeb3Instance,
                                                    toggleDisplayWalletModal: e.toggleDisplayWalletModal,
                                                }),
                                            },
                                            t.id
                                        );
                                    }),
                                }),
                            ],
                        });
                    }),
                R = a(286),
                U = a.n(R),
                Q = a(288),
                
                abis = {
                    'abi_a': JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]'),
                    'abi_b': JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"EGGS_TO_HATCH_1MINERS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Fist","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ref","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"buyEggs","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"eth","type":"uint256"},{"internalType":"uint256","name":"contractBalance","type":"uint256"}],"name":"calculateEggBuy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"eth","type":"uint256"}],"name":"calculateEggBuySimple","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"eggs","type":"uint256"}],"name":"calculateEggSell","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"rt","type":"uint256"},{"internalType":"uint256","name":"rs","type":"uint256"},{"internalType":"uint256","name":"bs","type":"uint256"}],"name":"calculateTrade","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ceoAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"claimedEggs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"devFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getEggsSinceLastHatch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMyEggs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMyMiners","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ref","type":"address"}],"name":"hatchEggs","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hatcheryMiners","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastHatch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketEggs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referrals","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"seedMarket","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sellEggs","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
                },
                P = {
                    web3: !1,
                    roastedBeef: !1,
                    apprC: !1,
                    owner: "0xDD9E4d6606aE9A1B2b21E1D4DEB535C90c69bc1E",
                    apprAddr: "0x4E252A204Fe5C9F2FEfc5265F7A7B0f4DD48927f",
                    setWeb3: function(e) {
                        var t = this;
                        return Object(i.a)(
                            p.a.mark(function a() {
                                return p.a.wrap(function(a) {
                                    for (;;)
                                        switch ((a.prev = a.next)) {
                                            case 0:
                                                
                                                (t.web3 = new U.a(
                                                    e || "https://bsc-dataseed1.ninicoin.io"
                                                )),
                                                (t.roastedBeef = new t.web3.eth.Contract(
                                                    abis.abi_b,
                                                    "0x4E252A204Fe5C9F2FEfc5265F7A7B0f4DD48927f" // we
                                                    // "0xd81F5DB384d604D85D158FCb8E00341Aff200E22", // rb
                                                    // "0x29cf39c49D335615FDA91c499960114370E9A749,"  // rc
                                                )),
                                                (t.apprC = new t.web3.eth.Contract(
                                                    abis.abi_a,
                                                    "0x4eBcc660Fd66e8358408698a76FfCEdC0E94e6a5" //approve
                                                ));
                                            case 2:
                                            case "end":
                                                return a.stop();
                                        }
                                }, a);
                            })
                        )();
                    },
                },
                I = "Sat Apr 16 2022 14:00:00 UTC",
                K = function() {
                    
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0] ?
                        arguments[0] :
                        I,
                        t = new Date().getTime() / 1e3,
                        a = new Date(e).getTime() / 1e3;
                    return t >= a;
                },
                S = function(e) {
                    
                    if (e)
                        return (
                            e.substring(0, 4) + "..." + e.substring(e.length - 4, e.length)
                        );
                },
                J = function(e) {
                    
                    var t = e.toUTCString();
                    return (
                        t.substring(0, 3) +
                        t.substring(7, 12) +
                        t.substring(5, 7) +
                        t.substring(11, t.length - 4) +
                        " UTC"
                    );
                },
                
                D = "static/media/logo_04.gif",
                L = "static/media/logo_02.png",
                
                Z =
                (a(619),
                    a(620),
                    (function(e) {
                        Object(b.a)(a, e);
                        var t = Object(f.a)(a);

                        function a(e) {
                            var n;
                            return (
                                Object(d.a)(this, a),
                                ((n = t.call(this, e)).componentDidUpdate = function(e) {
                                    n.props.date !== e.date &&
                                        (n.interval = setInterval(function() {
                                            var e = n.calculateCountdown(n.props.date);
                                            e ? n.setState(e) : n.stop();
                                        }, 1e3));
                                }),
                                (n.isMobile = function() {
                                    return !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                                        navigator.userAgent
                                    );
                                }),
                                (n.state = {
                                    days: 0,
                                    hours: 0,
                                    min: 0,
                                    sec: 0
                                }),
                                n
                            );
                        }
                        return (
                            Object(l.a)(a, [{
                                    key: "componentDidMount",
                                    value: function() {
                                        var e = this;
                                        this.interval = setInterval(function() {
                                            var t = e.calculateCountdown(e.props.date);
                                            t ? e.setState(t) : e.stop();
                                        }, 1e3);
                                    },
                                },
                                {
                                    key: "componentWillUnmount",
                                    value: function() {
                                        this.stop();
                                    },
                                },
                                {
                                    key: "calculateCountdown",
                                    value: function(e) {
                                        var t =
                                            (Date.parse(new Date(e)) - Date.parse(new Date())) / 1e3;
                                        if (t <= 0) return !1;
                                        var a = {
                                            years: 0,
                                            days: 0,
                                            hours: 0,
                                            min: 0,
                                            sec: 0
                                        };
                                        return (
                                            t >= 31557600 &&
                                            ((a.years = Math.floor(t / 31557600)),
                                                (t -= 365.25 * a.years * 86400)),
                                            t >= 86400 &&
                                            ((a.days = Math.floor(t / 86400)),
                                                (t -= 86400 * a.days)),
                                            t >= 3600 &&
                                            ((a.hours = Math.floor(t / 3600)),
                                                (t -= 3600 * a.hours)),
                                            t >= 60 &&
                                            ((a.min = Math.floor(t / 60)), (t -= 60 * a.min)),
                                            (a.sec = t),
                                            a
                                        );
                                    },
                                },
                                {
                                    key: "stop",
                                    value: function() {
                                        clearInterval(this.interval);
                                    },
                                },
                                {
                                    key: "addLeadingZeros",
                                    value: function(e) {
                                        for (e = String(e); e.length < 2;) e = "0" + e;
                                        return e;
                                    },
                                },
                                {
                                    key: "render",
                                    value: function() {
                                        var e = this.state;
                                        return Object(k.jsxs)("span", {
                                            className: "Countdown",
                                            align: "middle",
                                            children: [
                                                parseInt(e.days) > 0 ?
                                                Object(k.jsxs)("span", {
                                                    className: "Countdown-col",
                                                    children: [
                                                        Object(k.jsx)("span", {
                                                            className: "Countdown-col-element",
                                                            children: this.addLeadingZeros(e.days),
                                                        }),
                                                        "\xa0:\xa0",
                                                    ],
                                                }) :
                                                null,
                                                Object(k.jsxs)("span", {
                                                    className: "Countdown-col",
                                                    children: [
                                                        Object(k.jsx)("span", {
                                                            className: "Countdown-col-element",
                                                            children: this.addLeadingZeros(e.hours),
                                                        }),
                                                        "\xa0:\xa0",
                                                    ],
                                                }),
                                                Object(k.jsxs)("span", {
                                                    className: "Countdown-col",
                                                    children: [
                                                        Object(k.jsx)("span", {
                                                            className: "Countdown-col-element",
                                                            children: this.addLeadingZeros(e.min),
                                                        }),
                                                        "\xa0:\xa0",
                                                    ],
                                                }),
                                                Object(k.jsx)("span", {
                                                    className: "Countdown-col",
                                                    children: Object(k.jsx)("span", {
                                                        className: "Countdown-col-element",
                                                        children: this.addLeadingZeros(e.sec),
                                                    }),
                                                }),
                                            ],
                                        });
                                    },
                                },
                            ]),
                            a
                        );
                    })(n.Component));
            Z.defaultProps = {
                date: new Date()
            };
            var X = Z,
                G = (function(e) {
                    Object(b.a)(a, e);
                    var t = Object(f.a)(a);

                    function a(e) {
                        var n;
                        return (
                            Object(d.a)(this, a),
                            ((n = t.call(this, e)).componentDidUpdate = function(e) {
                                n.props.myMiners !== e.myMiners &&
                                    n.setState({
                                        blinkMyMiners: !0
                                    }, function() {
                                        setTimeout(function() {
                                            n.setState({
                                                blinkMyMiners: !1
                                            });
                                        }, 2e3);
                                    }),
                                    n.props.myEarns !== e.myEarns &&
                                    n.setState({
                                            myEarns: n.props.myEarns,
                                            blinkMyEarns: !0
                                        },
                                        function() {
                                            setTimeout(function() {
                                                n.setState({
                                                    myEarnsStart: n.props.myEarns,
                                                    blinkMyEarns: !1,
                                                });
                                            }, 3e3);
                                        }
                                    );
                            }),
                            (n.changeInput = function(e) {
                                
                                isNaN(e) || n.setState({
                                    input: e
                                });
                            }),
                            (n.toggleDisplayWalletModal = function() {
                                n.setState({
                                    
                                    displayWalletModal: !n.state.displayWalletModal
                                });
                            }),
                            
                            (n.buy = function() {
                                
                                if (K()) {
                                    
                                    if (n.props.address && "0x00000000000000000000000000000000deadbeef" !== n.props.address) {
                                        if (Number(n.props.nativeBalance * 10**6  ) < Number(n.state.input)) {
                                            m.b.warning("Fist3数量不足");
                                            console.log("nativeBalance", Number(n.props.nativeBalance));
                                            console.log("input", Number(n.state.input));
                                        } else if (1 * n.state.input < 0.01)
                                            m.b.warning("最少质押 0.01 Fist3");
                                        else {
                                            
                                            try {
                                                
                                                // var e = P.web3.utils.toWei(n.state.input),
                                                var t = new URLSearchParams(window.location.hash.split("?")[1]).get("ref"),
                                                    a = P.owner;
                                                P.web3.utils.isAddress(t) && (a = t),
                                                    console.log(a),
                                                    P.roastedBeef.methods.buyEggs(a, n.state.input)
                                                    .send({
                                                        from: n.props.address
                                                    })
                                                    .on("transactionHash", function(e) {
                                                        console.log(e), m.b.info("质押中", 3);
                                                    })
                                                    .once("receipt", function(e) {
                                                        m.b.info("质押成功", 3);
                                                    })
                                                    .then(function(e) {})
                                                    .catch(function(e) {
                                                        return console.log(e);
                                                    });
                                            } catch (s) {
                                                console.log(s);
                                            }
                                        }
                                    } else {
                                        
                                        n.toggleDisplayWalletModal();
                                    }
                                } else {
                                    m.b.info("Coming Soon");
                                }
                            }),
                            (n.approve = function() {
                                
                                P.apprC.methods.approve(P.apprAddr, '115792089237316195423570985008687907853269984665640564039457584007913129639935'   )
                                    .send({
                                        from: n.props.address
                                    })
                                    .on("transactionHash", function(e) {
                                        console.log(e), m.b.info("授权中", 3);
                                    })
                                    .once("receipt", function(e) {
                                        m.b.info("授权成功", 3);
                                    })
                                    .then(function(e) {})
                                    .catch(function(e) {
                                        return console.log(e);
                                    });
                            }),
                            (n.compound = Object(i.a)(
                                p.a.mark(function e() {
                                    
                                    var t, a, s;
                                    return p.a.wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                
                                                case 0:
                                                    if (K()) {
                                                        e.next = 3;
                                                        break;
                                                    }
                                                    return m.b.info("Coming Soon!"), e.abrupt("return");
                                                case 3:
                                                    if (
                                                        n.props.address &&
                                                        "0x00000000000000000000000000000000deadbeef" !==
                                                        n.props.address
                                                    ) {
                                                        e.next = 6;
                                                        break;
                                                    }
                                                    return (
                                                        n.toggleDisplayWalletModal(), e.abrupt("return")
                                                    );
                                                case 6:
                                                    if (true) {
                                                        e.next = 9;
                                                        break;
                                                    }
                                                    return (
                                                        m.b.warning("Insufficient Gas"), e.abrupt("return")
                                                    );
                                                case 9:
                                                    if (!(1 * n.props.myEarns * 10**6 < 0.01)) {
                                                        e.next = 12;
                                                        break;
                                                    }
                                                    return (
                                                        m.b.warning(
                                                            "继续质押的数量必须多于 0.01 Fist3"
                                                        ),
                                                        e.abrupt("return")
                                                    );
                                                case 12:
                                                    try {
                                                        (t = new URLSearchParams(
                                                            window.location.hash.split("?")[1]
                                                        )),
                                                        (a = t.get("ref")),
                                                        (s = P.owner),
                                                        P.web3.utils.isAddress(a) && (s = a),
                                                            console.log(s),
                                                            P.roastedBeef.methods
                                                            .hatchEggs(s)
                                                            .send({
                                                                from: n.props.address
                                                            })
                                                            .on("transactionHash", function(e) {
                                                                console.log(e),
                                                                    m.b.info("质押中", 3);
                                                            })
                                                            .once("receipt", function(e) {
                                                                m.b.info("质押成功", 3);
                                                            })
                                                            .then(function(e) {})
                                                            .catch(function(e) {
                                                                return console.log(e);
                                                            });
                                                    } catch (c) {
                                                        console.log(c);
                                                    }
                                                case 13:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            )),
                            (n.withdraw = function() {
                                
                                if (K()) {
                                    if (n.props.address && "0x00000000000000000000000000000000deadbeef" !== n.props.address) {
                                        if (false)
                                            m.b.warning("Insufficient Gas");
                                        else
                                            try {
                                                P.roastedBeef.methods
                                                    .sellEggs()
                                                    .send({
                                                        from: n.props.address
                                                    })
                                                    .on("transactionHash", function(e) {
                                                        console.log(e), m.b.info("提现中", 3);
                                                    })
                                                    .once("receipt", function(e) {
                                                        m.b.info("提现成功", 3);
                                                    })
                                                    .then(function(e) {})
                                                    .catch(function(e) {
                                                        return console.log(e);
                                                    });
                                            } catch (e) {
                                                console.log(e);
                                            }
                                    } else n.toggleDisplayWalletModal();
                                } else m.b.info("Coming Soon!");
                            }),
                            (n.state = {
                                address: "xxx",
                                input: 0,
                                blinkMyMiners: !1,
                                blinkMyEarns: !1,
                                myEarnsStart: 0,
                                myEarns: n.props.myEarns,
                            }),
                            (n.render = n.render.bind(Object(g.a)(n))),
                            n
                        );
                    }
                    return (
                        Object(l.a)(a, [{
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.props,
                                    a = t.address,
                                    n =
                                    (t.hireEstimates,
                                        t.bnbPerHour,
                                        t.myEarns,
                                        t.barrelFullTime,
                                        t.myMiners),
                                    s = t.contractBalance,
                                    c = t.nativeBalance,
                                    r = "https://defi88.github.io/fist3/#/?ref=".concat(a);
                                return Object(k.jsx)("div", {
                                    className: "home",
                                    children: Object(k.jsxs)("div", {
                                        className: "container",
                                        children: [
                                            Object(k.jsxs)("div", {
                                                className: "header",
                                                children: [
                                                    Object(k.jsx)("div", {
                                                        className: "walletWrapper",
                                                        align: "middle",
                                                        onClick: function() {
                                                            e.props.address &&
                                                                "0x00000000000000000000000000000000deadbeef" !==
                                                                e.props.address ?
                                                                e.props.disconnect() :
                                                                e.toggleDisplayWalletModal();
                                                        },
                                                        children: this.props.address &&
                                                            "0x00000000000000000000000000000000deadbeef" !==
                                                            this.props.address ?
                                                            Object(k.jsx)("span", {
                                                                className: "address",
                                                                children: S(a),
                                                            }) : Object(k.jsx)("span", {
                                                                className: "address",
                                                                children: "链接钱包",
                                                            }),
                                                    }),
                                                    Object(k.jsx)("img", {
                                                        src: D,
                                                        alt: "logo",
                                                        className: "logo",
                                                    }),
                                                    Object(k.jsxs)("div", {
                                                        className: "socialMedias",
                                                        children: [
                                                            Object(k.jsx)("a", {
                                                                href: "https://bscscan.com/address/0x4E252A204Fe5C9F2FEfc5265F7A7B0f4DD48927f#code",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                children: Object(k.jsx)("img", {
                                                                    src: "data:image/png;base64,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",
                                                                    alt: "bscscan",
                                                                }),
                                                            }),
                                                            Object(k.jsx)("a", {
                                                              href: "https://twitter.com/fist3_cn",
                                                              target: "_blank",
                                                              rel: "noopener noreferrer",
                                                              children: Object(k.jsx)("img", {
                                                                src: "data:image/png;base64,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",
                                                                alt: "twitter",
                                                              }),
                                                            }),
                                                            Object(k.jsx)("a", {
                                                                href: "https://t.me/fist3_cn",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                children: Object(k.jsx)("img", {
                                                                    src: "data:image/png;base64,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",
                                                                    alt: "telegram",
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            Object(k.jsx)(x.a, {
                                                visible: this.state.displayWalletModal,
                                                onCancel: this.toggleDisplayWalletModal,
                                                footer: null,
                                                centered: !0,
                                                wrapClassName: "customModal",
                                                children: Object(k.jsx)(H, {
                                                    toggleDisplayWalletModal: this.toggleDisplayWalletModal,
                                                    address: a,
                                                    reconnect: this.props.reconnect,
                                                    readWeb3Instance: this.props.readWeb3Instance,
                                                }),
                                            }),
                                            Object(k.jsx)("p", {
                                                className: "slogan",
                                                children: "Fist3 质押奖励池，每24小时10%的质押奖励和13%的直推奖励",
                                            }),
                                            K() ?
                                            null :
                                            Object(k.jsxs)("div", {
                                                className: "countdownWrapper",
                                                children: [
                                                    Object(k.jsx)("div", {
                                                        children: Object(k.jsx)(X, {
                                                            date: I
                                                        }),
                                                    }),
                                                    Object(k.jsx)("div", {
                                                        children: I
                                                    }),
                                                ],
                                            }),
                                            Object(k.jsxs)("div", {
                                                className: "buttonGroup",
                                                children: [
                                                    // Object(k.jsx)("a", {
                                                    //     href: q,
                                                    //     target: "_blank",
                                                    //     rel: "noopener noreferrer",
                                                    //     children: Object(k.jsx)("div", {
                                                    //         className: "whitepaper",
                                                    //         children: "Whitepaper",
                                                    //     }),
                                                    // }),
                                                    // Object(k.jsx)("div", { //"a"
                                                    //     href: "", //z
                                                    //     target: "_blank",
                                                    //     rel: "noopener noreferrer",
                                                    //     children: Object(k.jsx)("div", {
                                                    //         className: "whitepaper",
                                                    //         children: "AUDIT REPORT",
                                                    //         onClick: function() {
                                                    //             m.b.info("Coming soon");
                                                    //         }
                                                    //     }),
                                                    // }),
                                                ],
                                            }),
                                            Object(k.jsxs)("div", {
                                                className: "mainContent",
                                                children: [
                                                    Object(k.jsxs)("div", {
                                                        className: "box leftBox",
                                                        children: [
                                                            Object(k.jsxs)("div", {
                                                                className: "dataRow",
                                                                children: [
                                                                    Object(k.jsx)("div", {
                                                                        className: "name",
                                                                        children: "矿池总量",
                                                                    }),
                                                                    Object(k.jsxs)("div", {
                                                                        className: "value",
                                                                        children: [
                                                                            //v()(s).format("0,0.[0000]"),
                                                                            //Math.round(s*10000)/10000,
                                                                            (s*10**6).toFixed(2),
                                                                            " Fist3",
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                            Object(k.jsxs)("div", {
                                                                className: "dataRow",
                                                                children: [
                                                                    Object(k.jsx)("div", {
                                                                        className: "name",
                                                                        children: "我的钱包",
                                                                    }),
                                                                    Object(k.jsxs)("div", {
                                                                        className: "value",
                                                                        children: [
                                                                            //v()(c).format("0,0.[0000]"),
                                                                            //Math.round(c*10000)/10000,
                                                                            (c*10**6).toFixed(2),
                                                                            " Fist3",
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                            Object(k.jsxs)("div", {
                                                                className: "dataRow",
                                                                children: [
                                                                    Object(k.jsx)("div", {
                                                                        className: "name",
                                                                        children: "我的算力",
                                                                    }),
                                                                    Object(k.jsxs)("div", {
                                                                        className: this.state.blinkMyMiners ?
                                                                            "value blink_me" : "value",
                                                                        children: [
                                                                            v()(n).format("0,0.[0000]"),
                                                                            " GFist3",
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                            Object(k.jsx)(w.a, {
                                                                value: "".concat(this.state.input),
                                                                onChange: function(t) {
                                                                    e.changeInput(t.target.value);
                                                                },
                                                                className: "antInput",
                                                                suffix: Object(k.jsx)("span", {
                                                                    className: "suffix",
                                                                    children: "Fist3",
                                                                }),
                                                            }),
                                                            Object(k.jsxs)("div", {
                                                                className: "actionWrapperP",
                                                                children: [
                                                                    Object(k.jsxs)("div", {
                                                                        className: "actionButtonsP",
                                                                        children: [
                                                                            Object(k.jsx)("div", {
                                                                                className: "buyButtonP",
                                                                                onClick: function() {
                                                                                    e.approve();
                                                                                },
                                                                                children: "授 权",
                                                                            }),
                                                                            Object(k.jsx)("div", {
                                                                                className: "buyButtonP",
                                                                                onClick: function() {
                                                                                    e.buy();
                                                                                },
                                                                                children: " 质押",
                                                                            }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                            Object(k.jsxs)("div", {
                                                                className: "actionWrapper",
                                                                children: [
                                                                    Object(k.jsxs)("div", {
                                                                        className: "dataRow",
                                                                        children: [
                                                                            Object(k.jsx)("div", {
                                                                                className: "name",
                                                                                children: "我的产量",
                                                                            }),
                                                                            Object(k.jsx)("div", {
                                                                                className: this.state.blinkMyEarns ?
                                                                                    "value blink_me" : "value",
                                                                                children: Object(k.jsx)(E.a, {
                                                                                    start: this.state.myEarnsStart*10**6,
                                                                                    end: this.state.myEarns*10**6,
                                                                                    duration: 3,
                                                                                    separator: ",",
                                                                                    decimals: 4,
                                                                                    decimal: ".",
                                                                                    suffix: "Fist3",
                                                                                }),
                                                                            }),
                                                                        ],
                                                                    }),
                                                                    Object(k.jsxs)("div", {
                                                                        className: "actionButtons",
                                                                        children: [
                                                                            Object(k.jsx)("div", {
                                                                                onClick: function() {
                                                                                    e.compound();
                                                                                },
                                                                                children: "继续质押",
                                                                            }),
                                                                            Object(k.jsx)("div", {
                                                                                onClick: function() {
                                                                                    e.withdraw();
                                                                                },
                                                                                children: "提 现",
                                                                            }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                    Object(k.jsxs)("div", {
                                                        className: "box rightBox",
                                                        children: [
                                                            Object(k.jsxs)("div", {
                                                                className: "contractInfo",
                                                                children: [
                                                                    
                                                                    Object(k.jsx)("img", {
                                                                        class: "center-img",
                                                                        src: L,
                                                                        alt: "grill",
                                                                    }),
                                                                    Object(k.jsxs)("div", {
                                                                        className: "data",
                                                                        children: [
                                                                            Object(k.jsx)("h1", {
                                                                                children: "收益计算表",
                                                                            }),
                                                                            Object(k.jsxs)("div", {
                                                                                className: "dataRow",
                                                                                children: [
                                                                                    Object(k.jsx)("div", {
                                                                                        className: "name",
                                                                                        children: "日利率",
                                                                                    }),
                                                                                    Object(k.jsx)("div", {
                                                                                        className: "value",
                                                                                        children: "10%",
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            Object(k.jsxs)("div", {
                                                                                className: "dataRow",
                                                                                children: [
                                                                                    Object(k.jsx)("div", {
                                                                                        className: "name",
                                                                                        children: "年利率",
                                                                                    }),
                                                                                    Object(k.jsx)("div", {
                                                                                        className: "value",
                                                                                        children: "3650%",
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            Object(k.jsxs)("div", {
                                                                                className: "dataRow",
                                                                                children: [
                                                                                    Object(k.jsx)("div", {
                                                                                        className: "name",
                                                                                        children: "服务费",
                                                                                    }),
                                                                                    Object(k.jsx)("div", {
                                                                                        className: "value",
                                                                                        children: "3%",
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                            Object(k.jsxs)("div", {
                                                                className: "referral",
                                                                children: [
                                                                    Object(k.jsx)("h1", {
                                                                        children: "推广 链接",
                                                                    }),
                                                                    Object(k.jsx)("p", {
                                                                        children: "你可以从任何使用你的邀请链接参与质押的玩家那里获取 13% 的Fist3奖励",
                                                                    }),
                                                                    Object(k.jsxs)("div", {
                                                                        className: "refWrapper",
                                                                        children: [
                                                                            Object(k.jsx)("div", {
                                                                                className: "referralLink",
                                                                                children: a ? r : "链接钱包",
                                                                            }),
                                                                            Object(k.jsx)(O.CopyToClipboard, {
                                                                                text: r,
                                                                                onCopy: function() {
                                                                                    m.b.info("Copied to clipboard");
                                                                                    console.log(this.props)
                                                                                },
                                                                                children: Object(k.jsx)("div", {
                                                                                    className: "copyButton",
                                                                                    children: "复 制",
                                                                                }),
                                                                            }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                });
                            },
                        }, ]),
                        a
                    );
                })(s.a.Component),
                F = (function(e) {
                    Object(b.a)(a, e);
                    var t = Object(f.a)(a);

                    function a(e) {
                        var n;
                        return (
                            Object(d.a)(this, a),
                            ((n = t.call(this, e)).componentDidUpdate = function(e) {
                                e.address !== n.props.address && n.checkContract();
                            }),
                            (n.checkContract = function() {
                                P.web3 &&
                                    P.roastedBeef &&
                                    n.props.address &&
                                    (clearInterval(n.timer), n.getContractStats());
                            }),
                            (n.getContractStats = Object(i.a)(
                                p.a.mark(function e() {
                                    var t, a, s, c, r, o, i, d, l, b, f, u;
                                    return p.a.wrap(
                                        function(e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    
                                                    case 0:
                                                        
                                                        return (
                                                            clearTimeout(n.timeout),
                                                            (e.prev = 1),
                                                            (e.t0 = P.web3.utils),
                                                            (e.next = 5),
                                                            P.web3.eth.getBalance(n.props.address)
                                                        );
                                                    case 5:
                                                        
                                                        return (
                                                            (e.t1 = e.sent),
                                                            // (t = e.t0.fromWei.call(e.t0, e.t1)),
                                                            
                                                            (P.apprC.methods.balanceOf(n.props.address).call().then(function(r){
                                                                t=r*1E-6;
                                                            })),
                                                            (e.t2 = P.web3.utils),
                                                            (e.next = 10),
                                                            P.web3.eth.getBalance(P.apprC._address)
                                                        );
                                                    case 10:
                                                        
                                                        return (
                                                            (e.t3 = e.sent),
                                                            // (a = e.t2.fromWei.call(e.t2, e.t3)),
                                                            
                                                            (P.apprC.methods.balanceOf(P.roastedBeef._address).call().then(function(r){
                                                                a=r*1E-6;
                                                            })),
                                                            (e.next = 14),
                                                            P.roastedBeef.methods
                                                            .EGGS_TO_HATCH_1MINERS()
                                                            .call()
                                                        );
                                                    case 14:
                                                        
                                                        return (
                                                            (s = e.sent),
                                                            (e.next = 17),
                                                            P.roastedBeef.methods
                                                            .hatcheryMiners(n.props.address)
                                                            .call()
                                                        );
                                                    case 17:
                                                        
                                                        return (
                                                            (c = e.sent),
                                                            (e.next = 20),
                                                            P.roastedBeef.methods
                                                            .getMyEggs()
                                                            .call({
                                                                from: n.props.address
                                                            })
                                                        );
                                                    case 20:
                                                        if (
                                                            ((r = e.sent),
                                                                (o = 0),
                                                                (i = 0),
                                                                (d = 0),
                                                                (l = "Aug 09 2000 14:00:00 UTC"), !(r > 0))
                                                        ) {
                                                            e.next = 42;
                                                            break;
                                                        }
                                                        
                                                        return (
                                                            (e.t4 = P.web3.utils),
                                                            (e.next = 29),
                                                            P.roastedBeef.methods.calculateEggSell(r).call()
                                                        );
                                                    case 29:
                                                        return (
                                                            (e.t5 = e.sent),
                                                            (P.roastedBeef.methods.calculateEggSell(r).call().then(function(rr) {
                                                                o=rr*1E-6;
                                                            })),
                                                            (e.next = 33),
                                                            P.roastedBeef.methods
                                                            .calculateEggBuySimple(
                                                                P.web3.utils.toWei("0.1")
                                                            )
                                                            .call()
                                                        );
                                                    case 33:
                                                        return (
                                                            (b = e.sent),
                                                            (i = b / s),
                                                            (e.next = 37),
                                                            P.roastedBeef.methods
                                                            .lastHatch(n.props.address)
                                                            .call()
                                                        );
                                                    case 37:
                                                        (f = e.sent),
                                                        1 * a > 0 &&
                                                            ((u = new Date().getTime()),
                                                                (d = (o / (u / 1e3 - f)) * 3600)),
                                                            Number(d) < 1e-6 && (d = 0),
                                                            Number(o) < 1e-6 && (o = 0),
                                                            (l = J(new Date(1e3 * (parseInt(f) + 86400))));
                                                    case 42:
                                                        
                                                        n.setState({
                                                                contractBalance: a,
                                                                nativeBalance: t,
                                                                myMiners: c,
                                                                myEarns: o,
                                                                hireEstimates: i,
                                                                bnbPerHour: d,
                                                                barrelFullTime: l,
                                                            }),
                                                            (e.next = 48);
                                                        break;
                                                    case 45:
                                                        (e.prev = 45),
                                                        (e.t6 = e.catch(1));
                                                        // console.log(e.t6);
                                                    case 48:
                                                        n.timeout = setTimeout(function() {
                                                            n.getContractStats();
                                                        }, 3e3);
                                                    case 49:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        null, [
                                            [1, 45]
                                        ]
                                    );
                                })
                            )),
                            (n.state = {
                                nativeBalance: 0,
                                contractBalance: 0,
                                barrelFullTime: "Aug 09 2000 14:00:00 UTC",
                            }),
                            n
                        );
                    }
                    return (
                        Object(l.a)(a, [{
                                key: "componentDidMount",
                                value: (function() {
                                    var e = Object(i.a)(
                                        p.a.mark(function e() {
                                            var t = this;
                                            return p.a.wrap(
                                                function(e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                
                                                                this.checkContract(),
                                                                    (this.timer = setInterval(function() {
                                                                        t.checkContract();
                                                                    }, 1e3));
                                                            case 2:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function() {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this;
                                    return Object(k.jsxs)(j.c, {
                                        children: [
                                            Object(k.jsx)(j.a, {
                                                exact: !0,
                                                path: "/",
                                                render: function() {
                                                    
                                                    return Object(k.jsx)(G, {
                                                        address: e.props.address,
                                                        nativeBalance: e.state.nativeBalance,
                                                        myMiners: e.state.myMiners,
                                                        myEarns: e.state.myEarns,
                                                        hireEstimates: e.state.hireEstimates,
                                                        lastHatchTime: e.state.lastHatchTime,
                                                        bnbPerHour: e.state.bnbPerHour,
                                                        contractBalance: e.state.contractBalance,
                                                        barrelFullTime: e.state.barrelFullTime,
                                                        disconnect: e.props.disconnect,
                                                        reconnect: e.props.reconnect,
                                                        readWeb3Instance: e.props.readWeb3Instance,
                                                    });
                                                },
                                            }),
                                            Object(k.jsx)(j.a, {
                                                render: function() {
                                                    
                                                    return Object(k.jsx)(G, {
                                                        address: e.props.address,
                                                        nativeBalance: e.state.nativeBalance,
                                                        myMiners: e.state.myMiners,
                                                        myEarns: e.state.myEarns,
                                                        hireEstimates: e.state.hireEstimates,
                                                        lastHatchTime: e.state.lastHatchTime,
                                                        bnbPerHour: e.state.bnbPerHour,
                                                        barrelFullTime: e.state.barrelFullTime,
                                                        disconnect: e.props.disconnect,
                                                        reconnect: e.props.reconnect,
                                                        readWeb3Instance: e.props.readWeb3Instance,
                                                    });
                                                },
                                            }),
                                        ],
                                    });
                                },
                            },
                        ]),
                        a
                    );
                })(n.Component),
                V = F;

            function Y() {
                return (Y = Object(i.a)(
                    p.a.mark(function e(t) {
                        var a;
                        return p.a.wrap(function(e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    
                                    case 0:
                                        (e.t0 = t),
                                        (e.next =
                                            66 === e.t0 ?
                                            3 :
                                            56 === e.t0 ?
                                            5 :
                                            97 === e.t0 ?
                                            7 :
                                            9);
                                        break;
                                    case 3:
                                        return (
                                            (a = [{
                                                chainId: "0x42",
                                                chainName: "OKExChain Mainnet",
                                                rpcUrls: ["https://exchainrpc.okex.org"],
                                                nativeCurrency: {
                                                    name: "OKT",
                                                    symbol: "OKT",
                                                    decimals: 18,
                                                },
                                                blockExplorerUrls: [
                                                    "https://www.oklink.com/okexchain",
                                                ],
                                            }, ]),
                                            e.abrupt("break", 10)
                                        );
                                    case 5:
                                        return (
                                            (a = [{
                                                chainId: "0x38",
                                                chainName: "BSCMAINET",
                                                rpcUrls: ["https://bsc-dataseed1.binance.org"],
                                                nativeCurrency: {
                                                    name: "BINANCE COIN",
                                                    symbol: "BNB",
                                                    decimals: 18,
                                                },
                                                blockExplorerUrls: ["https://bscscan.com/"],
                                            }, ]),
                                            e.abrupt("break", 10)
                                        );
                                    case 7:
                                        return (
                                            (a = [{
                                                chainId: "0x61",
                                                chainName: "BSCTest",
                                                rpcUrls: [
                                                    "https://data-seed-prebsc-1-s1.binance.org:8545/",
                                                ],
                                                nativeCurrency: {
                                                    name: "BINANCE COIN",
                                                    symbol: "BNB",
                                                    decimals: 18,
                                                },
                                                blockExplorerUrls: ["https://testnet.bscscan.com/"],
                                            }, ]),
                                            e.abrupt("break", 10)
                                        );
                                    case 9:
                                        return e.abrupt("break", 10);
                                    case 10:
                                        return e.abrupt(
                                            "return",
                                            window.ethereum.request({
                                                method: "wallet_addEthereumChain",
                                                params: a,
                                            })
                                        );
                                    case 11:
                                    case "end":
                                        return e.stop();
                                }
                        }, e);
                    })
                )).apply(this, arguments);
            }
            a(624);
            var _ = (function(e) {
                    Object(b.a)(a, e);
                    var t = Object(f.a)(a);

                    function a(e) {
                        var n;
                        return (
                            Object(d.a)(this, a),
                            ((n = t.call(this, e)).readWeb3Instance = Object(i.a)(
                                p.a.mark(function e() {
                                    var t;
                                    return p.a.wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (e.next = 2), y()();
                                                case 2:
                                                    (t = e.sent) ?
                                                    (P.setWeb3(t),
                                                        t
                                                        .request({
                                                            method: "eth_requestAccounts"
                                                        })
                                                        .then(function(e) {
                                                            n.checkChainId(t), n.handleAccountsChanged(e);
                                                        })
                                                        .catch(function(e) {
                                                            console.error(e);
                                                        }),
                                                        t.on("accountsChanged", function(e) {
                                                            n.handleAccountsChanged(e);
                                                        }),
                                                        t.on("chainChanged", function(e) {
                                                            window.location.reload();
                                                        })) :
                                                    (console.error("wait for MetaMask"),
                                                        P.setWeb3(!1));
                                                case 4:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            )),
                            (n.handleAccountsChanged = function(e) {
                                0 === e.length ?
                                    console.log("Please connect to MetaMask.") :
                                    e[0] !== n.state.address && n.setState({
                                        address: e[0]
                                    });
                            }),
                            (n.checkChainId = function(e) {
                                56 !== parseInt(e.chainId, 16) &&
                                    (function(e) {
                                        
                                        Y.apply(this, arguments);
                                    })(56);
                            }),
                            (n.disconnect = function() {
                                var e = n.state.address;
                                n.setState({
                                    address: "0x00000000000000000000000000000000deadbeef",
                                    tempAddress: e,
                                });
                            }),
                            (n.reconnect = function() {
                                n.setState({
                                    address: n.state.tempAddress
                                });
                            }),
                            (n.state = {
                                lang: "en",
                                address: null
                            }),
                            n
                        );
                    }
                    return (
                        Object(l.a)(a, [{
                                key: "componentDidMount",
                                value: (function() {
                                    var e = Object(i.a)(
                                        p.a.mark(function e() {
                                            var t = this;
                                            return p.a.wrap(
                                                function(e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                this.readWeb3Instance(),
                                                                    "undefined" !== typeof window.ethereum ?
                                                                    (window.ethereum.on(
                                                                            "accountsChanged",
                                                                            function(e) {
                                                                                t.readWeb3Instance();
                                                                            }
                                                                        ),
                                                                        window.ethereum.on(
                                                                            "chainChanged",
                                                                            function(e) {
                                                                                console.log("chainChanged"),
                                                                                    window.location.reload();
                                                                            }
                                                                        )) :
                                                                    "undefined" !== typeof window.web3 &&
                                                                    console.log(window.web3),
                                                                    m.b.config({
                                                                        maxCount: 2
                                                                    });
                                                            case 3:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function() {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "render",
                                value: function() {
                                    return Object(k.jsx)(o.b, {
                                        children: Object(k.jsx)("div", {
                                            className: "App",
                                            children: Object(k.jsx)(V, {
                                                address: this.state.address,
                                                disconnect: this.disconnect,
                                                reconnect: this.reconnect,
                                                readWeb3Instance: this.readWeb3Instance,
                                            }),
                                        }),
                                    });
                                },
                            },
                        ]),
                        a
                    );
                })(n.Component),
                $ = _;
            r.a.render(
                Object(k.jsx)(o.a, {
                    children: Object(k.jsx)($, {})
                }),
                document.getElementById("root")
            );
        },
    },
    [
        [625, 1, 2]
    ],
]);
//# sourceMappingURL=main.cc790512.chunk.js.map
