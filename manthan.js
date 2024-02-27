"use strict";
(self.webpackChunkfrontend = self.webpackChunkfrontend || []).push([[179], {
    4550: (tt,W,c)=>{
        c.d(W, {
            e: ()=>s
        });
        var k = c(2340)
          , t = c(4850)
          , w = c(7221)
          , U = c(4650)
          , I = c(529);
        let s = (()=>{
            class b {
                constructor(Z) {
                    this.http = Z,
                    this.hostServer = k.N.hostServer,
                    this.host = this.hostServer + "/rest/admin"
                }
                getApplicationConfiguration() {
                    return this.configObservable || (this.configObservable = this.http.get(this.host + "/application-configuration").pipe((0,
                    t.U)(Z=>Z.config, (0,
                    w.K)(Z=>{
                        throw Z
                    }
                    )))),
                    this.configObservable
                }
            }
            return b.\u0275fac = function(Z) {
                return new (Z || b)(U.LFG(I.eN))
            }
            ,
            b.\u0275prov = U.Yz7({
                token: b,
                factory: b.\u0275fac,
                providedIn: "root"
            }),
            b
        }
        )()
    }
    ,
    5376: (tt,W,c)=>{
        c.d(W, {
            t: ()=>s
        });
        var k = c(4850)
          , t = c(7221)
          , w = c(2340)
          , U = c(4650)
          , I = c(529);
        let s = (()=>{
            class b {
                constructor(Z) {
                    this.http = Z,
                    this.hostServer = w.N.hostServer,
                    this.host = this.hostServer + "/rest/web3"
                }
                nftUnlocked() {
                    return this.http.get(this.host + "/nftUnlocked").pipe((0,
                    k.U)(Z=>Z), (0,
                    t.K)(Z=>{
                        throw Z
                    }
                    ))
                }
                nftMintListen() {
                    return this.http.get(this.host + "/nftMintListen").pipe((0,
                    k.U)(Z=>Z), (0,
                    t.K)(Z=>{
                        throw Z
                    }
                    ))
                }
                checkNftMinted() {
                    return this.http.get(this.hostServer + "/api/Challenges/?key=nftMintChallenge").pipe((0,
                    k.U)(Z=>Z), (0,
                    t.K)(Z=>{
                        throw Z
                    }
                    ))
                }
                submitKey(Z) {
                    return this.http.post(this.host + "/submitKey", {
                        privateKey: Z
                    }).pipe((0,
                    k.U)(u=>u), (0,
                    t.K)(u=>{
                        throw u
                    }
                    ))
                }
                verifyNFTWallet(Z) {
                    return this.http.post(this.host + "/walletNFTVerify", {
                        walletAddress: Z
                    }).pipe((0,
                    k.U)(u=>u), (0,
                    t.K)(u=>{
                        throw u
                    }
                    ))
                }
                walletAddressSend(Z) {
                    return this.http.post(this.host + "/walletExploitAddress", {
                        walletAddress: Z
                    }).pipe((0,
                    k.U)(u=>u), (0,
                    t.K)(u=>{
                        throw u
                    }
                    ))
                }
            }
            return b.\u0275fac = function(Z) {
                return new (Z || b)(U.LFG(I.eN))
            }
            ,
            b.\u0275prov = U.Yz7({
                token: b,
                factory: b.\u0275fac,
                providedIn: "root"
            }),
            b
        }
        )()
    }
    ,
    5004: (tt,W,c)=>{
        c.d(W, {
            H: ()=>U
        });
        var k = c(4650)
          , t = c(1195)
          , w = c(7009);
        let U = (()=>{
            class I {
                constructor(b, O) {
                    this.translateService = b,
                    this.snackBar = O
                }
                open(b, O) {
                    this.translateService.get(b).subscribe(Z=>{
                        this.snackBar.open(Z, "X", {
                            duration: 5e3,
                            panelClass: O
                        })
                    }
                    , ()=>{
                        this.snackBar.open(b, "X", {
                            duration: 5e3,
                            panelClass: O
                        })
                    }
                    )
                }
            }
            return I.\u0275fac = function(b) {
                return new (b || I)(k.LFG(t.sK),k.LFG(w.ux))
            }
            ,
            I.\u0275prov = k.Yz7({
                token: I,
                factory: I.\u0275fac,
                providedIn: "root"
            }),
            I
        }
        )()
    }
    ,
    2340: (tt,W,c)=>{
        c.d(W, {
            N: ()=>k
        });
        const k = {
            production: !0,
            hostServer: "."
        }
    }
    ,
    1096: (tt,W,c)=>{
        c.r(W),
        c.d(W, {
            hasInstructions: ()=>Yt,
            startHackingInstructorFor: ()=>Jt
        });
        var k = c(5861)
          , t = c(8111);
        let w;
        const U = {
            faster: .5,
            fast: .75,
            normal: 1,
            slow: 1.25,
            slower: 1.5
        };
        function I(y) {
            return s.apply(this, arguments)
        }
        function s() {
            return (s = (0,
            k.Z)(function*(y) {
                yield new Promise(S=>{
                    setTimeout(S, y)
                }
                )
            })).apply(this, arguments)
        }
        function b(y, S, M={
            ignoreCase: !0,
            replacement: []
        }) {
            return (0,
            k.Z)(function*() {
                const E = document.querySelector(y);
                if (2 === M.replacement?.length) {
                    w || (w = (yield(yield fetch("/rest/admin/application-configuration")).json()).config);
                    const j = M.replacement[1].split(".");
                    let et = w;
                    for (const G of j)
                        et = et[G];
                    S = S.replace(M.replacement[0], et)
                }
                for (; (!M.ignoreCase || E.value.toLowerCase() !== S.toLowerCase()) && (M.ignoreCase || E.value !== S); )
                    yield I(100)
            })
        }
        function Z(y, S, M={
            ignoreCase: !0
        }) {
            return (0,
            k.Z)(function*() {
                const E = document.querySelector(y);
                for (; ; ) {
                    if ("" !== E.value) {
                        if (M.ignoreCase && E.value.toLowerCase() !== S.toLowerCase())
                            break;
                        if (!M.ignoreCase && E.value !== S)
                            break
                    }
                    yield I(100)
                }
            })
        }
        function g(y) {
            return (0,
            k.Z)(function*() {
                const S = document.querySelector(y);
                for (; !S.value || "" === S.value; )
                    yield I(100)
            })
        }
        function D(y) {
            return (0,
            k.Z)(function*() {
                const S = document.querySelector(y);
                S || console.warn(`Could not find Element with selector "${y}"`),
                yield new Promise(M=>{
                    S.addEventListener("click", ()=>{
                        M()
                    }
                    )
                }
                )
            })
        }
        function u(y, S) {
            return (0,
            k.Z)(function*() {
                for (; ; ) {
                    const M = document.querySelector(y);
                    if (M && M.innerHTML === S)
                        break;
                    yield I(100)
                }
            })
        }
        function p(y) {
            return (0,
            k.Z)(function*() {
                w || (w = (yield(yield fetch("/rest/admin/application-configuration")).json()).config);
                let S = U[w.hackingInstructor.hintPlaybackSpeed];
                S ?? (S = 1),
                yield I(y * S)
            })
        }
        function x(y) {
            return (0,
            k.Z)(function*() {
                for (; window.location.hash !== `#/${y}`; )
                    yield I(100)
            })
        }
        function T() {
            return (0,
            k.Z)(function*() {
                for (; null === localStorage.getItem("token"); )
                    yield I(100)
            })
        }
        function lt() {
            return (0,
            k.Z)(function*() {
                for (; null !== localStorage.getItem("token"); )
                    yield I(100)
            })
        }
        function gt() {
            let y = !1;
            const S = new Image;
            return Object.defineProperty(S, "id", {
                get: function() {
                    y = !0
                }
            }),
            (0,
            k.Z)(function*() {
                for (; console.dir(S),
                console.clear(),
                !y; )
                    yield I(100)
            })
        }
        const _ = {
            name: "Login Admin",
            hints: [{
                text: "To start this challenge, you'll have to log out first.",
                fixture: "#navbarAccount",
                unskippable: !0,
                resolved: lt()
            }, {
                text: "Let's try if we find a way to log in with the administrator's user account. To begin, go to the _Login_ page via the _Account_ menu.",
                fixture: "app-navbar",
                fixtureAfter: !0,
                unskippable: !0,
                resolved: x("login")
            }, {
                text: "To find a way around the normal login process we will try to use a **SQL Injection** (SQLi) attack.",
                fixture: "#email",
                resolved: p(8e3)
            }, {
                text: "A good starting point for simple SQL Injections is to insert quotation marks (like `\"` or `'`). These mess with the syntax of an insecurely concatenated query and might give you feedback if an endpoint is vulnerable or not.",
                fixture: "#email",
                resolved: p(15e3)
            }, {
                text: "Start with entering `'` in the **email field**.",
                fixture: "#email",
                unskippable: !0,
                resolved: b("#email", "'")
            }, {
                text: "Now put anything in the **password field**. It doesn't matter what.",
                fixture: "#password",
                unskippable: !0,
                resolved: g("#password")
            }, {
                text: "Press the _Log in_ button.",
                fixture: "#rememberMe",
                unskippable: !0,
                resolved: D("#loginButton")
            }, {
                text: "Nice! Do you see the red `[object Object]` error at the top? Unfortunately it isn't really telling us much about what went wrong...",
                fixture: "#rememberMe",
                resolved: p(1e4)
            }, {
                text: "Maybe you will be able to find out more information about the error in the JavaScript console or the network tab of your browser!",
                fixture: "#rememberMe",
                resolved: p(1e4)
            }, {
                text: "Did you spot the error message with the `SQLITE_ERROR` and the entire SQL query in the 500 response to `/login`? If not, keep the network tab open and click _Log in_ again. Then inspect the occuring response closely.",
                fixture: "#rememberMe",
                resolved: p(3e4)
            }, {
                text: "Let's try to manipulate the query a bit to make it useful. Try out typing `' OR true` into the **email field**.",
                fixture: "#email",
                unskippable: !0,
                resolved: b("#email", "' OR true")
            }, {
                text: "Now click the _Log in_ button again.",
                fixture: "#rememberMe",
                unskippable: !0,
                resolved: D("#loginButton")
            }, {
                text: "Mhh... The query is still invalid? Can you see why from the new error in the HTTP response?",
                fixture: "#rememberMe",
                resolved: p(8e3)
            }, {
                text: "We need to make sure that the rest of the query after our injection doesn't get executed. Any Ideas?",
                fixture: "#rememberMe",
                resolved: p(8e3)
            }, {
                text: "You can comment out anything after your injection payload from query using comments in SQL. In SQLite databases you can use `--` for that.",
                fixture: "#rememberMe",
                resolved: p(1e4)
            }, {
                text: "So, type in `' OR true--` into the email field.",
                fixture: "#email",
                unskippable: !0,
                resolved: b("#email", "' OR true--")
            }, {
                text: "Press the _Log in_ button again and sit back...",
                fixture: "#rememberMe",
                unskippable: !0,
                resolved: D("#loginButton")
            }, {
                text: "That worked, right?! To see with whose account you just logged in, open the _Account_ menu.",
                fixture: "#navbarAccount",
                unskippable: !0,
                resolved: D("#navbarAccount")
            }, {
                text: "\u{1f389} Congratulations! You have been logged in as the **administrator** of the shop! (If you want to understand why, try to reproduce what your `' OR true--` did _exactly_ to the query.)",
                fixture: "app-navbar",
                resolved: p(2e4)
            }]
        }
          , St = {
            name: "DOM XSS",
            hints: [{
                text: "For this challenge, we'll take a close look at the _Search_ field at the top of the screen.",
                fixture: ".fill-remaining-space",
                unskippable: !0,
                resolved: p(8e3)
            }, {
                text: "Let's start by searching for all products containing `owasp` in their name or description.",
                fixture: ".fill-remaining-space",
                unskippable: !0,
                resolved: b("#searchQuery input", "owasp")
            }, {
                text: "Now hit enter.",
                fixture: ".fill-remaining-space",
                unskippable: !0,
                resolved: u("#searchValue", "owasp")
            }, {
                text: "Nice! You should now see many cool OWASP-related products.",
                fixture: ".fill-remaining-space",
                resolved: p(8e3)
            }, {
                text: "You might have noticed, that your search term is displayed above the results?",
                fixture: "app-search-result",
                resolved: p(8e3)
            }, {
                text: "What we will try now is a **Cross-Site Scripting (XSS)** attack, where we try to inject HTML or JavaScript code into the application.",
                fixture: "app-search-result",
                resolved: p(15e3)
            }, {
                text: "Change your search value into `<h1>owasp` to see if we can inject HTML.",
                fixture: ".fill-remaining-space",
                unskippable: !0,
                resolved: b("#searchQuery input", "<h1>owasp")
            }, {
                text: "Hit enter again.",
                fixture: ".fill-remaining-space",
                unskippable: !0,
                resolved: u("#searchValue", "<h1>owasp</h1>")
            }, {
                text: "Hmm, this doesn't look normal, does it?",
                fixture: ".noResult",
                resolved: p(8e3)
            }, {
                text: "If you right-click on the search term and inspect that part of the page with your browser, you will see that our `h1`-tag was _actually_ embedded into the page and is not just shown as plain text!",
                fixture: ".noResult",
                resolved: p(16e3)
            }, {
                text: "Let's now try to inject JavaScript. Type `<script>alert(xss)<\/script>` into the search box now.",
                fixture: ".fill-remaining-space",
                unskippable: !0,
                resolved: b("#searchQuery input", "<script>alert(xss)<\/script>")
            }, {
                text: "Hit enter again.",
                fixture: ".fill-remaining-space",
                unskippable: !0,
                resolved: u("#searchValue", "<script>alert(xss)<\/script>")
            }, {
                text: "\u{1f614} This didn't work as we hoped. If you inspect the page, you should see the `script`-tag but it is not executed for some reason.",
                fixture: ".noResult",
                resolved: p(1e4)
            }, {
                text: 'Luckily there are _many_ different XSS payloads we can try. Let\'s try this one next: <code>&lt;iframe src="javascript:alert(&#96;xss&#96;)"&gt;</code>.',
                fixture: ".fill-remaining-space",
                unskippable: !0,
                resolved: b("#searchQuery input", '<iframe src="javascript:alert(`xss`)">')
            }, {
                text: "Hit enter one more time. If an alert box appears, you must confirm it in order to close it.",
                fixture: ".fill-remaining-space",
                unskippable: !0,
                resolved: u("#searchValue", '<iframe src="javascript:alert(`xss`)"></iframe>')
            }, {
                text: "\u{1f389} Congratulations! You just successfully performed an XSS attack!",
                fixture: ".noResult",
                resolved: p(8e3)
            }, {
                text: "More precisely, this was a **DOM XSS** attack, because your payload was handled and improperly embedded into the page by the application frontend code without even sending it to the server.",
                fixture: ".noResult",
                resolved: p(16e3)
            }]
        }
          , R = {
            name: "Score Board",
            hints: [{
                text: "This application is riddled with security vulnerabilities. Your progress exploiting these is tracked on a _Score Board_.",
                fixture: "app-navbar",
                unskippable: !0,
                resolved: p(1e4)
            }, {
                text: "You won't find a link to it in the navigation or side bar, though. Finding the _Score Board_ is in itself actually one of the hacking challenges.",
                fixture: "app-navbar",
                resolved: p(12e3)
            }, {
                text: "You could just start guessing the URL of the _Score Board_ or comb through the client-side JavaScript code for useful information.",
                fixture: "app-navbar",
                resolved: p(12e3)
            }, {
                text: "You find the JavaScript code in the DevTools of your browser that will open with `F12`.",
                fixture: "app-navbar",
                resolved: gt()
            }, {
                text: "Look through the client-side JavaScript in the _Sources_ tab for clues. Or just start URL guessing. It's up to you!",
                fixture: "app-navbar",
                unskippable: !0,
                resolved: x("score-board")
            }, {
                text: "\u{1f389} Congratulations! You found the _Score Board_! Good luck and happy hacking!",
                fixture: "app-score-board",
                resolved: p(6e4)
            }]
        }
          , L = {
            name: "Privacy Policy",
            hints: [{
                text: "Log in with any user to begin this challenge. You can use an existing or freshly registered account.",
                fixture: "app-navbar",
                fixtureAfter: !0,
                unskippable: !0,
                resolved: T()
            }, {
                text: "Great, you are logged in! Now open the _Account_ menu.",
                fixture: "#navbarAccount",
                resolved: D("#navbarAccount")
            }, {
                text: "Open the _Privacy & Security_ sub-menu and click _Privacy Policy_.",
                fixture: "app-navbar",
                unskippable: !0,
                resolved: x("privacy-security/privacy-policy")
            }, {
                text: "\u{1f389} That was super easy, right? This challenge is a bit of a joke actually, because nobody reads any fine print online... \u{1f648}",
                fixture: "app-navbar",
                resolved: p(6e4)
            }]
        }
          , Bt = {
            name: "Login Jim",
            hints: [{
                text: "To start this challenge, you'll have to log out first.",
                fixture: "#navbarAccount",
                unskippable: !0,
                resolved: lt()
            }, {
                text: "Let's try if we find a way to log in with Jim's user account. To begin, go to the _Login_ page via the _Account_ menu.",
                fixture: "app-navbar",
                fixtureAfter: !0,
                unskippable: !0,
                resolved: x("login")
            }, {
                text: "As you would expect you need to supply Jim's email address and password to log in regularly. But you might have neither at the moment.",
                fixture: "app-navbar",
                resolved: p(15e3)
            }, {
                text: "If we had at least the email address, we could then try a **SQL Injection** (SQLi) attack to avoid having to supply a password.",
                fixture: "app-navbar",
                resolved: p(15e3)
            }, {
                text: "So, let's go find out Jim's email! Luckily the shop is very bad with privacy and leaks emails in different places, for instance in the product reviews.",
                fixture: "app-navbar",
                resolved: p(15e3)
            }, {
                text: "Go back to the product list and click on some to open their details dialog which also hold the user reviews.",
                fixture: ".fill-remaining-space",
                resolved: x("search")
            }, {
                text: "Once you found a user review by Jim and learned his email, go to the _Login_ screen.",
                fixture: ".fill-remaining-space",
                unskippable: !0,
                resolved: x("login")
            }, {
                text: "Supply Jim's email address in the **email field**.",
                fixture: "#email",
                unskippable: !0,
                resolved: b("#email", "jim@juice-sh.op", {
                    replacement: ["juice-sh.op", "application.domain"]
                })
            }, {
                text: "Now put anything in the **password field**. Let's assume we don't know it yet, even if you happen to already do.",
                fixture: "#password",
                unskippable: !0,
                resolved: Z("#password", "ncc-1701")
            }, {
                text: "Press the _Log in_ button.",
                fixture: "#rememberMe",
                unskippable: !0,
                resolved: D("#loginButton")
            }, {
                text: "This didn't work, but did you honestly expect it to? We need to craft an SQLi attack first!",
                fixture: "#rememberMe",
                resolved: p(1e4)
            }, {
                text: "You can comment out the entire password check clause of the DB query by adding `'--` to Jim's email address!",
                fixture: "#email",
                unskippable: !0,
                resolved: b("#email", "jim@juice-sh.op'--", {
                    replacement: ["juice-sh.op", "application.domain"]
                })
            }, {
                text: "Now click the _Log in_ button again.",
                fixture: "#rememberMe",
                unskippable: !0,
                resolved: D("#loginButton")
            }, {
                text: "\u{1f389} Congratulations! You have been logged in as Jim!",
                fixture: "app-navbar",
                resolved: p(5e3)
            }]
        }
          , X = {
            name: "View Basket",
            hints: [{
                text: "This challenge is about **Horizontal Privilege Escalation**, meaning you are supposed to access data that does not belong to your own account but to another user's.",
                fixture: "app-navbar",
                resolved: p(18e3)
            }, {
                text: "To start this challenge, you'll have to log in first.",
                fixture: "app-navbar",
                unskippable: !0,
                resolved: T()
            }, {
                text: "First, go to the _Your Basket_ page to view your own shopping basket. It's likely to be empty, if you didn't add anything yet.",
                fixture: "app-navbar",
                unskippable: !0,
                resolved: x("basket")
            }, {
                text: "To pass this challenge, you will need to peek into another user's basket while remaining logged in with your own account.",
                fixture: "app-navbar",
                resolved: p(8e3)
            }, {
                text: "If the application stores a reference to the basket somewhere in the browser, that might be a possible attack vector.",
                fixture: "app-navbar",
                resolved: p(12e3)
            }, {
                text: "Open the browser's _Development Tools_ and locate the _Session Storage_ tab. Similar to \u{1f36a}s, it can be used to store data in key/value pairs for each website.",
                fixture: "app-navbar",
                resolved: gt()
            }, {
                text: "Look over the names of the used session keys. Do you see something that might be related to the shopping basket? Try setting it to a different value! \u270d\ufe0f",
                fixture: "app-navbar",
                unskippable: !0,
                resolved: ()=>(0,
                k.Z)(function*() {
                    const y = sessionStorage.getItem("bid");
                    for (; sessionStorage.getItem("bid") === y; )
                        yield I(100)
                })()
            }, {
                text: "Great, you have changed the `bid` value which might be some ID for the shopping basket!",
                fixture: "app-navbar",
                resolved: p(8e3)
            }, {
                text: "Now, go to any other screen and then back to _Your Basket_. If nothing happens you might have set an invalid or non-existing `bid`. Try another in that case.",
                fixture: "app-navbar",
                fixtureAfter: !0,
                unskippable: !0,
                resolved: ()=>(0,
                k.Z)(function*() {
                    const y = sessionStorage.getItem("itemTotal");
                    for (; sessionStorage.getItem("itemTotal") === y; )
                        yield I(100)
                })()
            }, {
                text: "\u{1f389} Congratulations! You are now viewing another user's shopping basket!",
                fixture: "app-basket",
                resolved: p(15e3)
            }]
        }
          , kt = {
            name: "Forged Feedback",
            hints: [{
                text: "To start this challenge, first go to the _Customer Feedback_ page.",
                fixture: "app-navbar",
                fixtureAfter: !0,
                unskippable: !0,
                resolved: x("contact")
            }, {
                text: "This challenge is about broken access controls. To pass it, you need to impersonate another user while providing feedback.",
                fixture: "app-navbar",
                resolved: p(1e4)
            }, {
                text: "If you would now submit feedback, it would be posted by yourself while logged in or anonymously while logged out.",
                fixture: "app-navbar",
                resolved: p(1e4)
            }, {
                text: "We will now search for any mistake the application developers might have made in setting the author of any new feedback.",
                fixture: "app-navbar",
                resolved: p(1e4)
            }, {
                text: "Open the browser's _Development Tools_ and try finding anything interesting while inspecting the feedback form.",
                fixture: "app-navbar",
                resolved: gt()
            }, {
                text: "There is more than meets the eye among the fields of the form... \u{1f609}",
                fixture: "app-navbar",
                resolved: p(8e3)
            }, {
                text: "Once you found the field that shouldn't even be there, try manipulating its value to one that might represent another user!",
                fixture: "app-navbar",
                unskippable: !0,
                resolved: ()=>(0,
                k.Z)(function*() {
                    const y = document.getElementById("userId").value;
                    for (; document.getElementById("userId").value === y; )
                        yield I(100)
                })()
            }, {
                text: "You found and changed the invisible `userId`! Now submit the form to complete the challenge.",
                fixture: "app-navbar",
                unskippable: !0,
                resolved: D("#submitButton")
            }, {
                text: "\u{1f389} Congratulations, you successfully submitted a feedback as another user!",
                fixture: "app-navbar",
                resolved: p(15e3)
            }]
        }
          , ct = {
            name: "Password Strength",
            hints: [{
                text: "To start this challenge, you'll have to log out first.",
                fixture: "#navbarAccount",
                unskippable: !0,
                resolved: lt()
            }, {
                text: "In this challenge we'll try to log into the administrator's user account using his original credentials.",
                fixture: "app-navbar",
                resolved: p(7e3)
            }, {
                text: "If you don't know it already, you must first find out the admin's email address. The user feedback and product reviews are good places to look into. When you have it, go to the _Login_ page.",
                fixture: "app-navbar",
                fixtureAfter: !0,
                unskippable: !0,
                resolved: x("login")
            }, {
                text: "Enter the admin's email address into the **email field**.",
                fixture: "#email",
                unskippable: !0,
                resolved: b("#email", "admin@juice-sh.op")
            }, {
                text: "Now for the password. Lucky for us, the admin chose a really, really, **really** stupid one. Just try any that comes to your mind!",
                fixture: "#password",
                unskippable: !0,
                resolved: g("#password")
            }, {
                text: "\u{1f926}\u200d\u2642\ufe0f Nah, that was wrong! Keep trying! I'll tell you when you're one the right track.",
                fixture: "#password",
                unskippable: !0,
                resolved: b("#password", "admin")
            }, {
                text: "Okay, you are one the right track, but this would have been the worst password in the world for an admin. He spiced it up a little bit with some extra non-letter characters. Keep trying!",
                fixture: "#password",
                unskippable: !0,
                resolved: b("#password", "admin1")
            }, {
                text: "\u{1f525} Yes, it's getting warmer! Try adding some more numbers maybe?",
                fixture: "#password",
                unskippable: !0,
                resolved: b("#password", "admin12")
            }, {
                text: "\u{1f9ef} It's getting hot! Just one more digit...",
                fixture: "#password",
                unskippable: !0,
                resolved: b("#password", "admin123")
            }, {
                text: "Okay, now press the _Log in_ button.",
                fixture: "#rememberMe",
                unskippable: !0,
                resolved: D("#loginButton")
            }, {
                text: "\u{1f389} Congratulations! You have been logged in as the **administrator** of the shop thanks to his very ill chosen password!",
                fixture: "app-navbar",
                resolved: p(2e4)
            }]
        }
          , K = {
            name: "Bonus Payload",
            hints: [{
                text: "Assuming you did the **DOM XSS** tutorial already, this one just uses a funnier payload on the _Search_ field.",
                fixture: ".fill-remaining-space",
                unskippable: !0,
                resolved: p(1e4)
            }, {
                text: "Enter or paste this payload into the _Search_ field: <code>&lt;iframe width=&quot;100%&quot; height=&quot;166&quot; scrolling=&quot;no&quot; frameborder=&quot;no&quot; allow=&quot;autoplay&quot; src=&quot;https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/771984076&amp;color=%23ff5500&amp;auto&lowbar;play=true&amp;hide&lowbar;related=false&amp;show&lowbar;comments=true&amp;show&lowbar;user=true&amp;show&lowbar;reposts=false&amp;show&lowbar;teaser=true&quot;&gt;&lt;/iframe&gt;</code>.",
                fixture: ".fill-remaining-space",
                unskippable: !0,
                resolved: b("#searchQuery input", '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/771984076&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>')
            }, {
                text: "Make sure your speaker volume is cranked up. Then hit enter.",
                fixture: ".fill-remaining-space",
                unskippable: !0,
                resolved: u("#searchValue", '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/771984076&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>')
            }, {
                text: "\u{1f389} Congratulations and enjoy the music!",
                fixture: ".noResult",
                resolved: p(5e3)
            }]
        }
          , It = {
            name: "Login Bender",
            hints: [{
                text: "To start this challenge, you'll have to log out first.",
                fixture: "#navbarAccount",
                unskippable: !0,
                resolved: lt()
            }, {
                text: "Let's try if we find a way to log in with Bender's user account. To begin, go to the _Login_ page via the _Account_ menu.",
                fixture: "app-navbar",
                fixtureAfter: !0,
                unskippable: !0,
                resolved: x("login")
            }, {
                text: "As you would expect you need to supply Bender's email address and password to log in regularly. But you might have neither at the moment.",
                fixture: "app-navbar",
                resolved: p(15e3)
            }, {
                text: "If we had at least the email address, we could then try a **SQL Injection** (SQLi) attack to avoid having to supply a password.",
                fixture: "app-navbar",
                resolved: p(15e3)
            }, {
                text: "So, let's go find out Bender's email! Luckily the shop is very bad with privacy and leaks emails in different places, for instance in the user feedback.",
                fixture: "app-navbar",
                resolved: p(15e3)
            }, {
                text: "Go to the _About Us_ page where user feedback is displayed among other things.",
                fixture: "app-navbar",
                fixtureAfter: !0,
                resolved: x("about")
            }, {
                text: "Once you found an entry by Bender in the feedback carousel leaking enough of his email to deduce the rest, go to the _Login_ screen.",
                fixture: "app-about",
                unskippable: !0,
                resolved: x("login")
            }, {
                text: "Supply Bender's email address in the **email field**.",
                fixture: "#email",
                unskippable: !0,
                resolved: b("#email", "bender@juice-sh.op", {
                    replacement: ["juice-sh.op", "application.domain"]
                })
            }, {
                text: "Now put anything in the **password field**. Let's assume we don't know it yet, even if you happen to already do.",
                fixture: "#password",
                unskippable: !0,
                resolved: Z("#password", "OhG0dPlease1nsertLiquor!")
            }, {
                text: "Press the _Log in_ button.",
                fixture: "#rememberMe",
                unskippable: !0,
                resolved: D("#loginButton")
            }, {
                text: "This didn't work, but did you honestly expect it to? We need to craft an SQLi attack first!",
                fixture: "#rememberMe",
                resolved: p(1e4)
            }, {
                text: "You can comment out the entire password check clause of the DB query by adding `'--` to Bender's email address!",
                fixture: "#email",
                unskippable: !0,
                resolved: b("#email", "bender@juice-sh.op'--", {
                    replacement: ["juice-sh.op", "application.domain"]
                })
            }, {
                text: "Now click the _Log in_ button again.",
                fixture: "#rememberMe",
                unskippable: !0,
                resolved: D("#loginButton")
            }, {
                text: "\u{1f389} Congratulations! You have been logged in as Bender!",
                fixture: "app-navbar",
                resolved: p(5e3)
            }]
        }
          , Ot = {
            name: null,
            hints: [{
                text: "\u{1f613} Sorry, this hacking challenge does not have a step-by-step tutorial (yet) ... \u{1f9ed} Can you find your own way to solve it?",
                fixture: "app-navbar",
                resolved: p(15e3)
            }, {
                text: "\u270d\ufe0f Do you want to contribute a tutorial for this challenge? [Check out our documentation](https://pwning.owasp-juice.shop/part3/tutorials.html) to learn how! \u{1f3eb}",
                fixture: "app-navbar",
                resolved: p(15e3)
            }, {
                text: "And now: \u{1f47e} **GLHF** with this challenge!",
                fixture: "app-navbar",
                resolved: p(1e4)
            }]
        }
          , J = [R, _, Bt, St, L, X, kt, ct, K, It, {
            name: "Coding Challenges",
            hints: [{
                text: "To do the tutorial on _Coding Challenges_, you have to find and visit the _Score Board_ first. Once there, you have to click the tutorial button for the _Score Board_ challenge to proceed.",
                fixture: "app-navbar",
                fixtureAfter: !0,
                unskippable: !0,
                resolved: x("score-board")
            }, {
                text: "Many Juice Shop hacking challenges come with an associated _Coding Challenge_ which will teach you more about the underlying vulnerability on source code level.",
                fixture: "#Score\\ Board\\.solved",
                resolved: p(15e3)
            }, {
                text: "You can launch a Coding Challenge via the `<>`-button. Click the one for the _Score Board_ challenge now.",
                fixture: "#codingChallengeTutorialButton",
                unskippable: !0,
                resolved: D("#Score\\ Board\\.codingChallengeButton")
            }, {
                text: "All Coding Challenges take place in a modal dialog like this. They consist of two parts, one for finding and one for fixing the vulnerability in the code.",
                fixture: "#code-snippet",
                resolved: p(15e3)
            }, {
                text: "The code snippet below shows a part of the actual application source code retrieved in real-time.",
                fixture: "#code-snippet",
                resolved: p(1e4)
            }, {
                text: 'You will always get a snippet that is involved in the security vulnerability or flaw behind the corresponding hacking challenge. In this case, you see the routing code that exposes all dialogs, including the supposedly "well-hidden" Score Board.',
                fixture: "#code-snippet",
                resolved: p(2e4)
            }, {
                text: 'For the "Find It" part of this coding challenge, tick the \u{1f532} on all lines of code that you think are responsible for exposing the Score Board. When done, click the _Submit_ button.',
                fixture: "#code-snippet",
                fixtureAfter: !0,
                unskippable: !0,
                resolved: D("#line114")
            }, {
                text: "That's the one! Click the _Submit_ button proceed.",
                fixture: "#code-snippet",
                fixtureAfter: !0,
                unskippable: !0,
                resolved: D("#findItSubmitButton")
            }, {
                text: "\u{1f38a}! You made it half-way through! In phase two you are now presented with several fix options. You must select the one which you think is the **best possible** fix for the security vulnerability.",
                fixture: "#code-snippet",
                resolved: p(1e4)
            }, {
                text: 'This coding challenge is a bit "special", because the Score Board is crucial for progress tracking and acts as a hub for the other challenges. Keep that in mind when picking the _Correct Fix_ from the options _Fix 1_, _2_ and _3_.',
                fixture: "#code-snippet",
                fixtureAfter: !0,
                unskippable: !0,
                resolved: D("#fixItSubmitButton")
            }, {
                text: "If you did'nt get the answer right, just try again until the \u{1f38a}-cannon fires. Then click _Close_ to end the coding challenge and return to the Score Board.",
                fixture: "#code-snippet",
                fixtureAfter: !0,
                unskippable: !0,
                resolved: D("#fixItCloseButton")
            }]
        }];
        function h(y) {
            const S = document.querySelector(y.fixture);
            if (!S)
                return null;
            const M = document.createElement("div");
            M.style.position = "absolute";
            const E = document.createElement("div");
            E.id = "hacking-instructor",
            E.style.position = "absolute",
            E.style.zIndex = "20000",
            E.style.backgroundColor = "rgba(50, 115, 220, 0.9)",
            E.style.maxWidth = "400px",
            E.style.minWidth = y.text.length > 100 ? "350px" : "250px",
            E.style.padding = "16px",
            E.style.borderRadius = "8px",
            E.style.whiteSpace = "initial",
            E.style.lineHeight = "1.3",
            E.style.top = "24px",
            E.style.fontFamily = "Roboto,Helvetica Neue,sans-serif",
            y.unskippable || (E.style.cursor = "pointer",
            E.title = "Double-click to skip"),
            E.style.fontSize = "14px",
            E.style.display = "flex",
            E.style.alignItems = "center";
            const j = document.createElement("img");
            j.style.minWidth = "64px",
            j.style.minHeight = "64px",
            j.style.width = "64px",
            j.style.height = "64px",
            j.style.marginRight = "8px",
            j.src = "/assets/public/images/hackingInstructor.png";
            const et = document.createElement("span");
            et.style.flexGrow = "2",
            et.innerHTML = (0,
            t.Z)(y.text);
            const G = document.createElement("button");
            G.id = "cancelButton",
            G.style.textDecoration = "none",
            G.style.backgroundColor = "transparent",
            G.style.border = "none",
            G.style.color = "white",
            G.innerHTML = '<div style;">&times;</div>',
            G.style.fontSize = "large",
            G.title = "Cancel the tutorial",
            G.style.position = "relative",
            G.style.zIndex = "20001",
            G.style.bottom = "-22px",
            G.style.cursor = "pointer",
            E.appendChild(j),
            E.appendChild(et);
            const it = document.createElement("div");
            return it.style.position = "relative",
            it.style.display = "inline",
            it.appendChild(E),
            it.appendChild(G),
            M.appendChild(it),
            S.parentElement.insertBefore(M, y.fixtureAfter ? S.nextSibling : S),
            M
        }
        function $(y) {
            return d.apply(this, arguments)
        }
        function d() {
            return (d = (0,
            k.Z)(function*(y) {
                return yield new Promise(S=>{
                    y.addEventListener("dblclick", S)
                }
                )
            })).apply(this, arguments)
        }
        function Rt(y) {
            return _t.apply(this, arguments)
        }
        function _t() {
            return (_t = (0,
            k.Z)(function*(y) {
                return yield new Promise(S=>{
                    y.addEventListener("click", ()=>{
                        S("break")
                    }
                    )
                }
                )
            })).apply(this, arguments)
        }
        function Yt(y) {
            return void 0 !== J.find(({name: S})=>S === y)
        }
        function Jt(y) {
            return ft.apply(this, arguments)
        }
        function ft() {
            return (ft = (0,
            k.Z)(function*(y) {
                const S = J.find(({name: M})=>M === y) || Ot;
                for (const M of S.hints) {
                    const E = h(M);
                    if (!E) {
                        console.warn(`Could not find Element with fixture "${M.fixture}"`);
                        continue
                    }
                    E.scrollIntoView();
                    const j = [M.resolved()];
                    if (M.unskippable || j.push($(E)),
                    j.push(Rt(document.getElementById("cancelButton"))),
                    "break" === (yield Promise.race(j))) {
                        E.remove();
                        break
                    }
                    E.remove()
                }
            })).apply(this, arguments)
        }
    }
    ,
    5442: (tt,W,c)=>{
        var k = c(1481)
          , t = c(4650)
          , w = c(5861)
          , U = c(529)
          , I = c(6201)
          , s = c(4006)
          , b = c(4550)
          , O = c(5951)
          , Z = c(5767)
          , g = c(801)
          , D = c(534)
          , u = c(1195)
          , p = c(4916)
          , x = c(4859)
          , T = c(3546);
        const lt = function(n) {
            return {
                juicycoin: n
            }
        };
        O.vI.add(Z.IxA, g.bhf, g.Xf_, g.Egd, g.lXL, D.Eg, D.lX);
        let gt = (()=>{
            class n {
                constructor(e) {
                    this.configurationService = e,
                    this.altcoinName = "Juicycoin"
                }
                ngOnInit() {
                    this.configurationService.getApplicationConfiguration().subscribe(e=>{
                        e?.application?.altcoinName && (this.altcoinName = e.application.altcoinName)
                    }
                    , e=>{
                        console.log(e)
                    }
                    )
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(b.e))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-token-sale"]],
                decls: 117,
                vars: 26,
                consts: [["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "20px", 1, "container"], ["fxFlexAlign", "center", 1, "whitepaper-container", "offer-container"], [3, "innerHtml"], [1, "divider"], [1, "mat-elevation-z6"], [2, "margin-left", "10px"], ["translate", ""], [1, "whitepaper-buttons"], ["href", "https://ponzico.win/ponzico.pdf", "target", "_blank", "rel", "noopener noreferrer"], ["mat-raised-button", "", "color", "accent"], [1, "fas", "fa-university", "fa-lg"], ["href", "https://www.sec.gov/investor/alerts/ia_virtualcurrencies.pdf", "target", "_blank", "rel", "noopener noreferrer"], [1, "fas", "fa-graduation-cap", "fa-lg"], [1, "offer-box"], [1, "text-justify"], [1, "fab", "fa-bitcoin"], [1, "badge"], ["fxFlexAlign.lt-md", "center", 1, "faq-container"], ["translate", "", 1, "title"], [1, "fas", "fa-comments", "fa-2x"], [1, "far", "fa-comment-alt", "fa-2x"], [1, "far", "fa-comments", "fa-2x"], [1, "fas", "fa-comment-alt", "fa-2x"], [2, "margin-left", "10px", 3, "innerHtml"], ["translate", "", 1, "text-justify"], ["src", "assets/public/images/padding/56px.png"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "mat-card")(1, "div", 0)(2, "div", 1)(3, "mat-card-header")(4, "mat-card-title"),
                    t._uU(5),
                    t.ALo(6, "translate"),
                    t.qZA(),
                    t._UZ(7, "mat-card-subtitle", 2),
                    t.ALo(8, "translate"),
                    t.qZA(),
                    t._UZ(9, "div", 3),
                    t.TgZ(10, "mat-card", 4)(11, "h4"),
                    t._uU(12),
                    t.ALo(13, "translate"),
                    t.TgZ(14, "small", 5),
                    t._uU(15, "("),
                    t.TgZ(16, "span", 6),
                    t._uU(17, "WHITEPAPER_REFERENCES"),
                    t.qZA(),
                    t._uU(18, ")"),
                    t.qZA()(),
                    t.TgZ(19, "div", 7)(20, "a", 8)(21, "button", 9),
                    t._UZ(22, "i", 10),
                    t._uU(23, " PonzICO Whitepaper"),
                    t.qZA()(),
                    t.TgZ(24, "a", 11)(25, "button", 9),
                    t._UZ(26, "i", 12),
                    t._uU(27, " PonziCoin Whitepaper"),
                    t.qZA()()()(),
                    t.TgZ(28, "div", 13)(29, "h3", 6),
                    t._uU(30, "SECTION_SALES_PITCH"),
                    t.qZA(),
                    t.TgZ(31, "p", 14),
                    t._uU(32, " Lorem ipsum dolor sit amet "),
                    t.TgZ(33, "strong"),
                    t._UZ(34, "i", 15),
                    t._uU(35),
                    t.qZA(),
                    t._uU(36, ", consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "),
                    t.TgZ(37, "span", 6),
                    t._uU(38, "GIVE_US_ALL_YOUR_MONEY"),
                    t.qZA(),
                    t._uU(39, " Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. "),
                    t.TgZ(40, "span", 6),
                    t._uU(41, "GIVE_US_ALL_YOUR_MONEY"),
                    t.qZA(),
                    t._uU(42, " Ut wisi enim ad minim veniam, quis "),
                    t.TgZ(43, "strong"),
                    t._UZ(44, "i", 15),
                    t._uU(45),
                    t.qZA(),
                    t._uU(46, " nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. "),
                    t.TgZ(47, "span", 6),
                    t._uU(48, "GIVE_US_ALL_YOUR_MONEY"),
                    t.qZA(),
                    t._uU(49, " Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. "),
                    t.TgZ(50, "span", 6),
                    t._uU(51, "GIVE_US_ALL_YOUR_MONEY"),
                    t.qZA(),
                    t._uU(52, " Duis autem vel eum "),
                    t.TgZ(53, "strong"),
                    t._UZ(54, "i", 15),
                    t._uU(55),
                    t.qZA(),
                    t._uU(56, " iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. "),
                    t.TgZ(57, "span", 6),
                    t._uU(58, "GIVE_US_ALL_YOUR_MONEY"),
                    t.qZA(),
                    t._uU(59, " At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. "),
                    t.TgZ(60, "span", 16),
                    t._UZ(61, "i", 15),
                    t._uU(62),
                    t.qZA(),
                    t._uU(63, " est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur. "),
                    t.qZA()()(),
                    t.TgZ(64, "div", 17)(65, "mat-card-header")(66, "mat-card-title", 18),
                    t._uU(67, "ICO_FAQ"),
                    t.qZA()(),
                    t._UZ(68, "div", 3),
                    t.TgZ(69, "mat-card", 4)(70, "h5"),
                    t._UZ(71, "i", 19),
                    t._uU(72, " Stet "),
                    t.TgZ(73, "strong"),
                    t._UZ(74, "i", 15),
                    t._uU(75),
                    t.qZA(),
                    t._uU(76, " clita kasd gubergren?"),
                    t.qZA(),
                    t.TgZ(77, "small", 14),
                    t._uU(78, " Stet clita kasd gubergren, no "),
                    t.TgZ(79, "strong"),
                    t._UZ(80, "i", 15),
                    t._uU(81),
                    t.qZA(),
                    t._uU(82, " sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "),
                    t.qZA()(),
                    t.TgZ(83, "mat-card", 4)(84, "h5"),
                    t._UZ(85, "i", 20),
                    t._uU(86, " Consetetur sadipscing elitr?"),
                    t.qZA(),
                    t.TgZ(87, "small", 14),
                    t._uU(88, " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed "),
                    t.TgZ(89, "strong"),
                    t._UZ(90, "i", 15),
                    t._uU(91),
                    t.qZA(),
                    t._uU(92, " diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. "),
                    t.qZA()(),
                    t.TgZ(93, "mat-card", 4)(94, "h5"),
                    t._UZ(95, "i", 21),
                    t._uU(96, " Hendrerit "),
                    t.TgZ(97, "strong"),
                    t._UZ(98, "i", 15),
                    t._uU(99),
                    t.qZA(),
                    t._uU(100, " in vulputate velit?"),
                    t.qZA(),
                    t.TgZ(101, "small", 14),
                    t._uU(102, " Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. "),
                    t.qZA()(),
                    t.TgZ(103, "mat-card", 4)(104, "h5"),
                    t._UZ(105, "i", 22),
                    t._uU(106, " Justo duo dolores et ea rebum?"),
                    t.qZA(),
                    t.TgZ(107, "small", 14),
                    t._uU(108, " At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "),
                    t.qZA()(),
                    t.TgZ(109, "mat-card", 4)(110, "h5"),
                    t._UZ(111, "i", 19)(112, "span", 23),
                    t.ALo(113, "translate"),
                    t.qZA(),
                    t.TgZ(114, "small", 24),
                    t._uU(115, "ICO_FAQ_ANSWER"),
                    t.qZA()()(),
                    t._UZ(116, "img", 25),
                    t.qZA()()),
                    2 & e && (t.xp6(5),
                    t.hij(" ", t.lcZ(6, 12, "TITLE_TOKENSALE"), " "),
                    t.xp6(2),
                    t.Q6J("innerHtml", t.xi3(8, 14, "SECTION_ICO", t.VKq(22, lt, o.altcoinName)), t.oJD),
                    t.xp6(5),
                    t.hij("", t.lcZ(13, 17, "SECTION_WHITEPAPER"), " "),
                    t.xp6(23),
                    t.hij(" ", o.altcoinName, ""),
                    t.xp6(10),
                    t.hij(" ", o.altcoinName, ""),
                    t.xp6(10),
                    t.hij(" ", o.altcoinName, ""),
                    t.xp6(7),
                    t.hij(" ", o.altcoinName, ""),
                    t.xp6(13),
                    t.hij(" ", o.altcoinName, ""),
                    t.xp6(6),
                    t.hij(" ", o.altcoinName, ""),
                    t.xp6(10),
                    t.hij(" ", o.altcoinName, ""),
                    t.xp6(8),
                    t.hij(" ", o.altcoinName, ""),
                    t.xp6(13),
                    t.Q6J("innerHtml", t.xi3(113, 19, "ICO_FAQ_QUESTION", t.VKq(24, lt, o.altcoinName)), t.oJD))
                },
                dependencies: [u.Pi, p.xw, p.SQ, p.XD, x.lW, T.a8, T.dk, T.n5, T.$j, u.X$],
                styles: [".container[_ngcontent-%COMP%]{justify-content:center}.heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.13);justify-content:center;margin-bottom:10px;padding:12px 20px}.whitepaper-container.offer-container[_ngcontent-%COMP%]{max-width:700px;min-width:300px;width:70%}.whitepaper-buttons[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;gap:8px}.faq-container[_ngcontent-%COMP%]{max-width:500px;min-width:200px;width:70%}a[_ngcontent-%COMP%]:nth-child(1){padding-right:10px}.title[_ngcontent-%COMP%]{padding-bottom:27px}.divider[_ngcontent-%COMP%]{border:.5px solid #f2f2f2;margin-bottom:10px}.text-justify[_ngcontent-%COMP%]{text-align:justify}mat-card[_ngcontent-%COMP%]{margin-bottom:10px}mat-card[_ngcontent-%COMP%]:nth-child(1){border-radius:5px;margin:0 auto;width:80%}"]
            }),
            n
        }
        )();
        var P = c(2340)
          , C = c(4850)
          , _ = c(7221)
          , St = c(8929);
        let R = (()=>{
            class n {
                constructor(e) {
                    this.http = e,
                    this.isLoggedIn = new St.xQ,
                    this.hostServer = P.N.hostServer,
                    this.host = this.hostServer + "/api/Users"
                }
                find(e) {
                    return this.http.get(this.hostServer + "/rest/user/authentication-details/", {
                        params: e
                    }).pipe((0,
                    C.U)(o=>o.data), (0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
                get(e) {
                    return this.http.get(`${this.host}/${e}`).pipe((0,
                    C.U)(o=>o.data), (0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
                save(e) {
                    return this.http.post(this.host + "/", e).pipe((0,
                    C.U)(o=>o.data), (0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
                login(e) {
                    return this.isLoggedIn.next(!0),
                    this.http.post(this.hostServer + "/rest/user/login", e).pipe((0,
                    C.U)(o=>o.authentication), (0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
                getLoggedInState() {
                    return this.isLoggedIn.asObservable()
                }
                changePassword(e) {
                    return this.http.get(this.hostServer + "/rest/user/change-password?current=" + e.current + "&new=" + e.new + "&repeat=" + e.repeat).pipe((0,
                    C.U)(o=>o.user), (0,
                    _.K)(o=>{
                        throw o.error
                    }
                    ))
                }
                resetPassword(e) {
                    return this.http.post(this.hostServer + "/rest/user/reset-password", e).pipe((0,
                    C.U)(o=>o.user), (0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
                whoAmI() {
                    return this.http.get(this.hostServer + "/rest/user/whoami").pipe((0,
                    C.U)(e=>e.user), (0,
                    _.K)(e=>{
                        throw e
                    }
                    ))
                }
                oauthLogin(e) {
                    return this.http.get("https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=" + e)
                }
                saveLastLoginIp() {
                    return this.http.get(this.hostServer + "/rest/saveLoginIp").pipe((0,
                    C.U)(e=>e), (0,
                    _.K)(e=>{
                        throw e
                    }
                    ))
                }
                deluxeStatus() {
                    return this.http.get(this.hostServer + "/rest/deluxe-membership").pipe((0,
                    C.U)(e=>e.data), (0,
                    _.K)(e=>{
                        throw e
                    }
                    ))
                }
                upgradeToDeluxe(e, o) {
                    return this.http.post(this.hostServer + "/rest/deluxe-membership", {
                        paymentMode: e,
                        paymentId: o
                    }).pipe((0,
                    C.U)(i=>i.data), (0,
                    _.K)(i=>{
                        throw i
                    }
                    ))
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.LFG(U.eN))
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )();
        var L = c(6630);
        let Bt = (()=>{
            class n {
                constructor(e, o, i, r, l) {
                    this.cookieService = e,
                    this.userService = o,
                    this.router = i,
                    this.route = r,
                    this.ngZone = l
                }
                ngOnInit() {
                    var e = this;
                    this.userService.oauthLogin(this.parseRedirectUrlParams().access_token).subscribe(o=>{
                        const i = btoa(o.email.split("").reverse().join(""));
                        this.userService.save({
                            email: o.email,
                            password: i,
                            passwordRepeat: i
                        }).subscribe(()=>{
                            this.login(o)
                        }
                        , ()=>{
                            this.login(o)
                        }
                        )
                    }
                    , o=>{
                        this.invalidateSession(o),
                        this.ngZone.run((0,
                        w.Z)(function*() {
                            return yield e.router.navigate(["/login"])
                        }))
                    }
                    )
                }
                login(e) {
                    var o = this;
                    this.userService.login({
                        email: e.email,
                        password: btoa(e.email.split("").reverse().join("")),
                        oauth: !0
                    }).subscribe(i=>{
                        const r = new Date;
                        r.setHours(r.getHours() + 8),
                        this.cookieService.put("token", i.token, {
                            expires: r
                        }),
                        localStorage.setItem("token", i.token),
                        sessionStorage.setItem("bid", i.bid),
                        this.userService.isLoggedIn.next(!0),
                        this.ngZone.run((0,
                        w.Z)(function*() {
                            return yield o.router.navigate(["/"])
                        }))
                    }
                    , i=>{
                        this.invalidateSession(i),
                        this.ngZone.run((0,
                        w.Z)(function*() {
                            return yield o.router.navigate(["/login"])
                        }))
                    }
                    )
                }
                invalidateSession(e) {
                    console.log(e),
                    this.cookieService.remove("token"),
                    localStorage.removeItem("token"),
                    sessionStorage.removeItem("bid")
                }
                parseRedirectUrlParams() {
                    const o = this.route.snapshot.data.params.substr(1).split("&")
                      , i = {};
                    for (let r = 0; r < o.length; r++) {
                        const l = o[r].split("=");
                        i[l[0]] = l[1]
                    }
                    return i
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(I.N_),t.Y36(R),t.Y36(L.F0),t.Y36(L.gz),t.Y36(t.R0b))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-oauth"]],
                decls: 9,
                vars: 6,
                consts: [["fxLayoutAlign", "center"], [1, "primary-notification"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "div", 0)(1, "mat-card", 1)(2, "div")(3, "h3"),
                    t._uU(4),
                    t.ALo(5, "translate"),
                    t.qZA(),
                    t.TgZ(6, "div"),
                    t._uU(7),
                    t.ALo(8, "translate"),
                    t.qZA()()()()),
                    2 & e && (t.xp6(4),
                    t.Oqu(t.lcZ(5, 2, "TITLE_LOGIN")),
                    t.xp6(3),
                    t.Oqu(t.lcZ(8, 4, "CONFIRM_LOGGED_IN_VIA_OAUTH2")))
                },
                dependencies: [p.Wh, T.a8, u.X$],
                styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:300px;width:35%}"]
            }),
            n
        }
        )()
          , X = (()=>{
            class n {
                constructor(e) {
                    this.http = e,
                    this.hostServer = P.N.hostServer,
                    this.itemTotal = new St.xQ,
                    this.host = this.hostServer + "/api/BasketItems"
                }
                find(e) {
                    return this.http.get(`${this.hostServer}/rest/basket/${e}`).pipe((0,
                    C.U)(o=>o.data), (0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
                get(e) {
                    return this.http.get(`${this.host}/${e}`).pipe((0,
                    C.U)(o=>o.data), (0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
                put(e, o) {
                    return this.http.put(`${this.host}/${e}`, o).pipe((0,
                    C.U)(i=>i.data), (0,
                    _.K)(i=>{
                        throw i
                    }
                    ))
                }
                del(e) {
                    return this.http.delete(`${this.host}/${e}`).pipe((0,
                    C.U)(o=>o.data), (0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
                save(e) {
                    return this.http.post(this.host + "/", e).pipe((0,
                    C.U)(o=>o.data), (0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
                checkout(e, o, i) {
                    return this.http.post(`${this.hostServer}/rest/basket/${e}/checkout`, {
                        couponData: o,
                        orderDetails: i
                    }).pipe((0,
                    C.U)(r=>r.orderConfirmation), (0,
                    _.K)(r=>{
                        throw r
                    }
                    ))
                }
                applyCoupon(e, o) {
                    return this.http.put(`${this.hostServer}/rest/basket/${e}/coupon/${o}`, {}).pipe((0,
                    C.U)(i=>i.discount), (0,
                    _.K)(i=>{
                        throw i
                    }
                    ))
                }
                updateNumberOfCartItems() {
                    this.find(parseInt(sessionStorage.getItem("bid"), 10)).subscribe(e=>{
                        this.itemTotal.next(e.Products.reduce((o,i)=>o + i.BasketItem.quantity, 0))
                    }
                    , e=>{
                        console.log(e)
                    }
                    )
                }
                getItemTotal() {
                    return this.itemTotal.asObservable()
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.LFG(U.eN))
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )();
        var kt = c(491);
        let K = (()=>{
            class n {
                constructor(e, o) {
                    this.router = e,
                    this.ngZone = o
                }
                canActivate() {
                    return !!localStorage.getItem("token") || (this.forbidRoute("UNAUTHORIZED_ACCESS_ERROR"),
                    !1)
                }
                forbidRoute(e="UNAUTHORIZED_PAGE_ACCESS_ERROR") {
                    var o = this;
                    this.ngZone.run((0,
                    w.Z)(function*() {
                        return yield o.router.navigate(["403"], {
                            skipLocationChange: !0,
                            queryParams: {
                                error: e
                            }
                        })
                    }))
                }
                tokenDecode() {
                    let e = null;
                    const o = localStorage.getItem("token");
                    if (o)
                        try {
                            e = kt(o)
                        } catch (i) {
                            console.log(i)
                        }
                    return e
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.LFG(L.F0),t.LFG(t.R0b))
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac
            }),
            n
        }
        )()
          , It = (()=>{
            class n {
                constructor(e) {
                    this.loginGuard = e
                }
                canActivate() {
                    const e = this.loginGuard.tokenDecode();
                    return !(!e?.data || "admin" !== e.data.role) || (this.loginGuard.forbidRoute(),
                    !1)
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.LFG(K))
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac
            }),
            n
        }
        )()
          , Ot = (()=>{
            class n {
                constructor(e) {
                    this.loginGuard = e
                }
                canActivate() {
                    const e = this.loginGuard.tokenDecode();
                    return !(!e?.data || "accounting" !== e.data.role) || (this.loginGuard.forbidRoute(),
                    !1)
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.LFG(K))
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac
            }),
            n
        }
        )()
          , ht = (()=>{
            class n {
                constructor(e) {
                    this.loginGuard = e
                }
                isDeluxe() {
                    const e = this.loginGuard.tokenDecode();
                    return e?.data && "deluxe" === e.data.role
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.LFG(K))
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac
            }),
            n
        }
        )();
        var J = c(5004)
          , h = c(6895)
          , $ = c(1600)
          , d = c(671);
        function Rt(n, a) {
            1 & n && t._UZ(0, "mat-header-cell", 19)
        }
        function _t(n, a) {
            if (1 & n && (t.TgZ(0, "mat-cell", 20),
            t._UZ(1, "img", 21),
            t.qZA()),
            2 & n) {
                const e = a.$implicit;
                t.xp6(1),
                t.s9C("alt", e.name),
                t.Q6J("src", "assets/public/images/products/" + e.image, t.LSH)
            }
        }
        function Yt(n, a) {
            1 & n && t._UZ(0, "mat-footer-cell", 20)
        }
        function Jt(n, a) {
            1 & n && t._UZ(0, "mat-header-cell", 19)
        }
        function ft(n, a) {
            if (1 & n && (t.TgZ(0, "mat-cell", 22),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = a.$implicit;
                t.xp6(1),
                t.hij(" ", e.name, " ")
            }
        }
        function y(n, a) {
            1 & n && t._UZ(0, "mat-footer-cell", 23)
        }
        function S(n, a) {
            1 & n && t._UZ(0, "mat-header-cell", 19)
        }
        function M(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "button", 27),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw().$implicit
                      , r = t.oxw();
                    return t.KtG(r.dec(i.BasketItem.id))
                }),
                t._UZ(1, "i", 28),
                t.qZA()
            }
        }
        function E(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "button", 27),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw().$implicit
                      , r = t.oxw();
                    return t.KtG(r.inc(i.BasketItem.id))
                }),
                t._UZ(1, "i", 29),
                t.qZA()
            }
        }
        function j(n, a) {
            if (1 & n && (t.TgZ(0, "mat-cell", 24),
            t.YNc(1, M, 2, 0, "button", 25),
            t.TgZ(2, "span", 26),
            t._uU(3),
            t.qZA(),
            t.YNc(4, E, 2, 0, "button", 25),
            t.qZA()),
            2 & n) {
                const e = a.$implicit
                  , o = t.oxw();
                t.xp6(1),
                t.Q6J("ngIf", o.allowEdit),
                t.xp6(2),
                t.hij(" ", e.BasketItem.quantity, ""),
                t.xp6(1),
                t.Q6J("ngIf", o.allowEdit)
            }
        }
        function et(n, a) {
            1 & n && (t.TgZ(0, "mat-footer-cell", 30),
            t._uU(1, "TOTAL"),
            t.qZA())
        }
        function G(n, a) {
            1 & n && t._UZ(0, "mat-header-cell", 19)
        }
        function it(n, a) {
            if (1 & n && (t.TgZ(0, "mat-cell", 31),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = a.$implicit;
                t.xp6(1),
                t.hij(" ", e.price, "\xa4")
            }
        }
        function an(n, a) {
            1 & n && t._UZ(0, "mat-footer-cell", 32)
        }
        function rn(n, a) {
            1 & n && t._UZ(0, "mat-header-cell", 19)
        }
        function sn(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "mat-cell", 36)(1, "button", 27),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.oxw(2);
                    return t.KtG(l.delete(r.BasketItem.id))
                }),
                t._UZ(2, "i", 37),
                t.qZA()()
            }
        }
        function ln(n, a) {
            1 & n && t._UZ(0, "mat-footer-cell", 36)
        }
        function cn(n, a) {
            1 & n && (t.ynx(0, 33),
            t.YNc(1, rn, 1, 0, "mat-header-cell", 2),
            t.YNc(2, sn, 3, 0, "mat-cell", 34),
            t.YNc(3, ln, 1, 0, "mat-footer-cell", 35),
            t.BQk())
        }
        function un(n, a) {
            1 & n && t._UZ(0, "mat-header-row")
        }
        function pn(n, a) {
            1 & n && t._UZ(0, "mat-row")
        }
        function dn(n, a) {
            1 & n && t._UZ(0, "mat-footer-row", 39)
        }
        function mn(n, a) {
            if (1 & n && (t.TgZ(0, "span"),
            t.YNc(1, dn, 1, 0, "mat-footer-row", 38),
            t.qZA()),
            2 & n) {
                const e = t.oxw();
                t.xp6(1),
                t.Q6J("matFooterRowDef", e.tableColumns)
            }
        }
        function gn(n, a) {
            if (1 & n && (t.TgZ(0, "div", 40),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & n) {
                const e = t.oxw();
                t.xp6(1),
                t.AsE("", t.lcZ(2, 2, "LABEL_TOTAL_PRICE"), ": ", e.itemTotal, "\xa4")
            }
        }
        O.vI.add(D.I7, g.El_, g.CPW);
        let he = (()=>{
            class n {
                constructor(e, o, i, r) {
                    this.deluxeGuard = e,
                    this.basketService = o,
                    this.userService = i,
                    this.snackBarHelperService = r,
                    this.allowEdit = !1,
                    this.displayTotal = !1,
                    this.totalPrice = !0,
                    this.emitTotal = new t.vpe,
                    this.emitProductCount = new t.vpe,
                    this.tableColumns = ["image", "product", "quantity", "price"],
                    this.dataSource = [],
                    this.bonus = 0,
                    this.itemTotal = 0
                }
                ngOnInit() {
                    this.allowEdit && !this.tableColumns.includes("remove") && this.tableColumns.push("remove"),
                    this.load(),
                    this.userService.whoAmI().subscribe(e=>{
                        this.userEmail = e.email || "anonymous",
                        this.userEmail = "(" + this.userEmail + ")"
                    }
                    , e=>{
                        console.log(e)
                    }
                    )
                }
                load() {
                    this.basketService.find(parseInt(sessionStorage.getItem("bid"), 10)).subscribe(e=>{
                        this.isDeluxe() && e.Products.forEach(o=>{
                            o.price = o.deluxePrice
                        }
                        ),
                        this.dataSource = e.Products,
                        this.itemTotal = e.Products.reduce((o,i)=>o + i.price * i.BasketItem.quantity, 0),
                        this.bonus = e.Products.reduce((o,i)=>o + Math.round(i.price / 10) * i.BasketItem.quantity, 0),
                        this.sendToParent(this.dataSource.length)
                    }
                    , e=>{
                        console.log(e)
                    }
                    )
                }
                delete(e) {
                    this.basketService.del(e).subscribe(()=>{
                        this.load(),
                        this.basketService.updateNumberOfCartItems()
                    }
                    , o=>{
                        console.log(o)
                    }
                    )
                }
                inc(e) {
                    this.addToQuantity(e, 1)
                }
                dec(e) {
                    this.addToQuantity(e, -1)
                }
                addToQuantity(e, o) {
                    this.basketService.get(e).subscribe(i=>{
                        const r = i.quantity + o;
                        this.basketService.put(e, {
                            quantity: r < 1 ? 1 : r
                        }).subscribe(()=>{
                            this.load(),
                            this.basketService.updateNumberOfCartItems()
                        }
                        , l=>{
                            this.snackBarHelperService.open(l.error?.error, "errorBar"),
                            console.log(l)
                        }
                        )
                    }
                    , i=>{
                        console.log(i)
                    }
                    )
                }
                sendToParent(e) {
                    this.emitTotal.emit([this.itemTotal, this.bonus]),
                    this.emitProductCount.emit(e)
                }
                isDeluxe() {
                    return this.deluxeGuard.isDeluxe()
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(ht),t.Y36(X),t.Y36(R),t.Y36(J.H))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-purchase-basket"]],
                inputs: {
                    allowEdit: "allowEdit",
                    displayTotal: "displayTotal",
                    totalPrice: "totalPrice"
                },
                outputs: {
                    emitTotal: "emitTotal",
                    emitProductCount: "emitProductCount"
                },
                decls: 27,
                vars: 10,
                consts: [[3, "dataSource"], ["matColumnDef", "image"], ["style", "display: none;", 4, "matHeaderCellDef"], ["fxShow", "", "fxHide.lt-md", "", "fxFlex", "20%", "class", "content-align", 4, "matCellDef"], ["fxShow", "", "fxHide.lt-md", "", "fxFlex", "20%", "class", "content-align", 4, "matFooterCellDef"], ["matColumnDef", "product"], ["fxFlex", "35%", "fxFlex.lt-md", "30%", "style", "font-size: initial;", 4, "matCellDef"], ["fxFlex", "35%", "fxFlex.lt-md", "30%", 4, "matFooterCellDef"], ["matColumnDef", "quantity"], ["fxFlex", "16%", "fxFlex.lt-md", "35%", "class", "content-align", 4, "matCellDef"], ["fxFlex", "16%", "fxFlex.lt-md", "35%", "class", "header-align", 4, "matFooterCellDef"], ["matColumnDef", "price"], ["fxShow", "", "fxHide.lt-md", "", "fxFlex", "16%", "style", "font-size: initial;", 4, "matCellDef"], ["fxShow", "", "fxHide.lt-md", "", "fxFlex", "16%", 4, "matFooterCellDef"], ["matColumnDef", "remove", 4, "ngIf"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [4, "ngIf"], ["id", "price", 4, "ngIf"], [2, "display", "none"], ["fxShow", "", "fxHide.lt-md", "", "fxFlex", "20%", 1, "content-align"], [1, "img-responsive", "img-thumbnail", 3, "src", "alt"], ["fxFlex", "35%", "fxFlex.lt-md", "30%", 2, "font-size", "initial"], ["fxFlex", "35%", "fxFlex.lt-md", "30%"], ["fxFlex", "16%", "fxFlex.lt-md", "35%", 1, "content-align"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], [2, "font-size", "initial"], ["mat-icon-button", "", 3, "click"], [1, "fas", "fa-minus-square"], [1, "fas", "fa-plus-square"], ["fxFlex", "16%", "fxFlex.lt-md", "35%", 1, "header-align"], ["fxShow", "", "fxHide.lt-md", "", "fxFlex", "16%", 2, "font-size", "initial"], ["fxShow", "", "fxHide.lt-md", "", "fxFlex", "16%"], ["matColumnDef", "remove"], ["fxFlex", "10%", "fxFlex.lt-md", "15%", 4, "matCellDef"], ["fxFlex", "10%", "fxFlex.lt-md", "15%", 4, "matFooterCellDef"], ["fxFlex", "10%", "fxFlex.lt-md", "15%"], [1, "far", "fa-trash-alt"], ["mat-footer-row", "", 4, "matFooterRowDef"], ["mat-footer-row", ""], ["id", "price"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "h1"),
                    t._uU(1),
                    t.ALo(2, "translate"),
                    t.TgZ(3, "small"),
                    t._uU(4),
                    t.qZA()(),
                    t.TgZ(5, "mat-table", 0),
                    t.ynx(6, 1),
                    t.YNc(7, Rt, 1, 0, "mat-header-cell", 2),
                    t.YNc(8, _t, 2, 2, "mat-cell", 3),
                    t.YNc(9, Yt, 1, 0, "mat-footer-cell", 4),
                    t.BQk(),
                    t.ynx(10, 5),
                    t.YNc(11, Jt, 1, 0, "mat-header-cell", 2),
                    t.YNc(12, ft, 2, 1, "mat-cell", 6),
                    t.YNc(13, y, 1, 0, "mat-footer-cell", 7),
                    t.BQk(),
                    t.ynx(14, 8),
                    t.YNc(15, S, 1, 0, "mat-header-cell", 2),
                    t.YNc(16, j, 5, 3, "mat-cell", 9),
                    t.YNc(17, et, 2, 0, "mat-footer-cell", 10),
                    t.BQk(),
                    t.ynx(18, 11),
                    t.YNc(19, G, 1, 0, "mat-header-cell", 2),
                    t.YNc(20, it, 2, 1, "mat-cell", 12),
                    t.YNc(21, an, 1, 0, "mat-footer-cell", 13),
                    t.BQk(),
                    t.YNc(22, cn, 4, 0, "ng-container", 14),
                    t.YNc(23, un, 1, 0, "mat-header-row", 15),
                    t.YNc(24, pn, 1, 0, "mat-row", 16),
                    t.YNc(25, mn, 2, 1, "span", 17),
                    t.qZA(),
                    t.YNc(26, gn, 3, 4, "div", 18)),
                    2 & e && (t.xp6(1),
                    t.hij(" ", t.lcZ(2, 8, "TITLE_BASKET"), " "),
                    t.xp6(3),
                    t.Oqu(o.userEmail),
                    t.xp6(1),
                    t.Q6J("dataSource", o.dataSource),
                    t.xp6(17),
                    t.Q6J("ngIf", o.allowEdit),
                    t.xp6(1),
                    t.Q6J("matHeaderRowDef", o.tableColumns),
                    t.xp6(1),
                    t.Q6J("matRowDefColumns", o.tableColumns),
                    t.xp6(1),
                    t.Q6J("ngIf", o.displayTotal),
                    t.xp6(1),
                    t.Q6J("ngIf", o.totalPrice))
                },
                dependencies: [h.O5, p.yH, $.b8, x.lW, d.BZ, d.fO, d.as, d.w1, d.Dz, d.nj, d.mD, d.Ke, d.ge, d.ev, d.yh, d.XQ, d.Gk, d.Q2, u.X$],
                styles: [".heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);font-size:x-large;justify-content:center;padding:12px 20px}.img-thumbnail[_ngcontent-%COMP%]{height:auto;width:90px}mat-cell[_ngcontent-%COMP%]{margin-bottom:15px;margin-top:15px;padding-left:10px;padding-right:10px}mat-header-row[_ngcontent-%COMP%]{min-height:0!important}mat-footer-cell[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px}.mat-footer-cell[_ngcontent-%COMP%]{font-weight:700}.content-align[_ngcontent-%COMP%]{display:flex;justify-content:center}#price[_ngcontent-%COMP%]{font-size:large;margin-top:30px;text-align:right;width:100%}"]
            }),
            n
        }
        )();
        const hn = function(n) {
            return {
                bonus: n
            }
        };
        O.vI.add(g.bMA);
        let _n = (()=>{
            class n {
                constructor(e, o) {
                    this.router = e,
                    this.ngZone = o,
                    this.productCount = 0,
                    this.bonus = 0
                }
                checkout() {
                    var e = this;
                    this.ngZone.run((0,
                    w.Z)(function*() {
                        return yield e.router.navigate(["/address/select"])
                    }))
                }
                getProductCount(e) {
                    this.productCount = e
                }
                getBonusPoints(e) {
                    sessionStorage.setItem("itemTotal", e[0]),
                    this.bonus = e[1]
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(L.F0),t.Y36(t.R0b))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-basket"]],
                decls: 8,
                vars: 8,
                consts: [[1, "mat-elevation-z6"], [3, "allowEdit", "emitTotal", "emitProductCount"], ["id", "checkoutButton", "color", "primary", "mat-raised-button", "", 1, "checkout-button", 3, "disabled", "click"], [1, "fas", "fa-cart-arrow-down"], ["translate", "", 1, "hint", 3, "translateParams"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "mat-card", 0)(1, "app-purchase-basket", 1),
                    t.NdJ("emitTotal", function(r) {
                        return o.getBonusPoints(r)
                    })("emitProductCount", function(r) {
                        return o.getProductCount(r)
                    }),
                    t.qZA(),
                    t.TgZ(2, "button", 2),
                    t.NdJ("click", function() {
                        return o.checkout()
                    }),
                    t._UZ(3, "i", 3),
                    t._uU(4),
                    t.ALo(5, "translate"),
                    t.qZA(),
                    t.TgZ(6, "div", 4),
                    t._uU(7, "CHECKOUT_FOR_BONUS_POINTS"),
                    t.qZA()()),
                    2 & e && (t.xp6(1),
                    t.Q6J("allowEdit", !0),
                    t.xp6(1),
                    t.Q6J("disabled", o.productCount < 1),
                    t.xp6(2),
                    t.hij(" ", t.lcZ(5, 4, "BTN_CHECKOUT"), " "),
                    t.xp6(2),
                    t.Q6J("translateParams", t.VKq(6, hn, o.bonus)))
                },
                dependencies: [u.Pi, x.lW, T.a8, he, u.X$],
                styles: [".container[_ngcontent-%COMP%]{min-width:420px;width:40%}mat-card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}.heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.13);justify-content:center;padding:12px 20px}.mat-row[_ngcontent-%COMP%]{padding-bottom:10px}.mat-column-description[_ngcontent-%COMP%], .mat-column-bonus[_ngcontent-%COMP%], .mat-column-price[_ngcontent-%COMP%]{margin-left:20px}.mat-column-quantity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%]{width:20px}.mat-column-quantity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:22px}mat-form-field[_ngcontent-%COMP%]{margin-top:15px;width:100%}mat-expansion-panel[_ngcontent-%COMP%]{margin-bottom:20px}#checkoutButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}.hint[_ngcontent-%COMP%]{display:flex;font-size:13px;justify-content:center;margin-top:5px}.payment-label[_ngcontent-%COMP%]{padding-top:10px}"]
            }),
            n
        }
        )()
          , Qt = (()=>{
            class n {
                constructor(e) {
                    this.http = e,
                    this.hostServer = P.N.hostServer,
                    this.host = this.hostServer + "/rest/track-order"
                }
                find(e) {
                    return e = encodeURIComponent(e),
                    this.http.get(`${this.host}/${e}`).pipe((0,
                    C.U)(o=>o), (0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.LFG(U.eN))
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )();
        function fn(n, a) {
            1 & n && (t.TgZ(0, "span"),
            t._UZ(1, "i", 27),
            t.qZA())
        }
        function Cn(n, a) {
            1 & n && (t.TgZ(0, "span"),
            t._UZ(1, "i", 28),
            t.qZA())
        }
        function vn(n, a) {
            1 & n && (t.TgZ(0, "span"),
            t._UZ(1, "i", 29),
            t.qZA())
        }
        function xn(n, a) {
            1 & n && (t.TgZ(0, "span"),
            t._UZ(1, "i", 30),
            t.qZA())
        }
        function bn(n, a) {
            1 & n && (t.TgZ(0, "span"),
            t._UZ(1, "i", 31),
            t.qZA())
        }
        function Tn(n, a) {
            1 & n && (t.TgZ(0, "span"),
            t._UZ(1, "i", 32),
            t.qZA())
        }
        function An(n, a) {
            if (1 & n && (t.TgZ(0, "span", 33)(1, "span"),
            t._UZ(2, "i", 34),
            t.qZA(),
            t.TgZ(3, "span", 35),
            t._uU(4),
            t.ALo(5, "translate"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw();
                t.xp6(4),
                t.AsE("", e.results.eta, " ", t.lcZ(5, 2, "LABEL_DAYS"), "")
            }
        }
        function yn(n, a) {
            if (1 & n && (t.TgZ(0, "span", 33)(1, "span"),
            t._UZ(2, "i", 36),
            t.qZA(),
            t.TgZ(3, "span", 35),
            t._uU(4),
            t.ALo(5, "translate"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw();
                t.xp6(4),
                t.AsE("", e.results.eta, " ", t.lcZ(5, 2, "LABEL_DAYS"), "")
            }
        }
        function Zn(n, a) {
            1 & n && (t.TgZ(0, "mat-header-cell", 1),
            t._uU(1, "LABEL_PRODUCT"),
            t.qZA())
        }
        function wn(n, a) {
            if (1 & n && (t.TgZ(0, "mat-cell", 37),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = a.$implicit;
                t.xp6(1),
                t.hij(" ", e.name, "")
            }
        }
        function Sn(n, a) {
            1 & n && (t.TgZ(0, "mat-header-cell", 38),
            t._uU(1, "LABEL_PRICE"),
            t.qZA())
        }
        function kn(n, a) {
            if (1 & n && (t.TgZ(0, "mat-cell", 39),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = a.$implicit;
                t.xp6(1),
                t.hij(" ", e.price, "\xa4")
            }
        }
        function In(n, a) {
            1 & n && (t.TgZ(0, "mat-header-cell", 1),
            t._uU(1, "LABEL_QUANTITY"),
            t.qZA())
        }
        function On(n, a) {
            if (1 & n && (t.TgZ(0, "mat-cell", 40),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = a.$implicit;
                t.xp6(1),
                t.hij(" ", e.quantity, "")
            }
        }
        function Un(n, a) {
            1 & n && (t.TgZ(0, "mat-header-cell", 1),
            t._uU(1, "LABEL_TOTAL_PRICE"),
            t.qZA())
        }
        function Ln(n, a) {
            if (1 & n && (t.TgZ(0, "mat-cell", 41),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = a.$implicit;
                t.xp6(1),
                t.hij(" ", e.total, "\xa4")
            }
        }
        function Pn(n, a) {
            1 & n && t._UZ(0, "mat-header-row")
        }
        function Nn(n, a) {
            1 & n && t._UZ(0, "mat-row")
        }
        const En = function(n) {
            return {
                bonus: n
            }
        };
        O.vI.add(g.zVD, g.UO1, g.sUJ, g.$KU, g.J9Y);
        var at = (()=>{
            return (n = at || (at = {}))[n.New = 0] = "New",
            n[n.Packing = 1] = "Packing",
            n[n.Transit = 2] = "Transit",
            n[n.Delivered = 3] = "Delivered",
            at;
            var n
        }
        )();
        let _e = (()=>{
            class n {
                constructor(e, o, i) {
                    this.route = e,
                    this.trackOrderService = o,
                    this.sanitizer = i,
                    this.displayedColumns = ["product", "price", "quantity", "total price"],
                    this.dataSource = new d.by,
                    this.results = {},
                    this.status = at.New,
                    this.Status = at
                }
                ngOnInit() {
                    this.orderId = this.route.snapshot.queryParams.id,
                    this.trackOrderService.find(this.orderId).subscribe(e=>{
                        this.results.orderNo = this.sanitizer.bypassSecurityTrustHtml(`<code>${e.data[0].orderId}</code>`),
                        this.results.email = e.data[0].email,
                        this.results.totalPrice = e.data[0].totalPrice,
                        this.results.products = e.data[0].products,
                        this.results.eta = void 0 !== e.data[0].eta ? e.data[0].eta : "?",
                        this.results.bonus = e.data[0].bonus,
                        this.dataSource.data = this.results.products,
                        this.status = e.data[0].delivered ? at.Delivered : this.route.snapshot.data.type ? at.New : this.results.eta > 2 ? at.Packing : at.Transit
                    }
                    )
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(L.gz),t.Y36(Qt),t.Y36(k.H7))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-track-result"]],
                decls: 48,
                vars: 18,
                consts: [[1, "mat-elevation-z6", "mat-own-card"], ["translate", ""], [3, "innerHtml"], [2, "text-align", "center"], [1, "container-fluid", "well"], [1, "row", "fa-4x"], [4, "ngIf"], ["class", "fa-layers fa-fw", 4, "ngIf"], ["fxLayoutAlign", "center", 1, "table-wrapper"], [1, "table-heading", "heading"], ["fxLayoutAlign", "center"], [1, "mat-elevation-z0", 3, "dataSource"], ["table", ""], ["matColumnDef", "product"], ["translate", "", 4, "matHeaderCellDef"], ["class", "product-name", 4, "matCellDef"], ["matColumnDef", "price"], ["fxShow", "", "fxHide.lt-md", "", "translate", "", 4, "matHeaderCellDef"], ["class", "product-price", "fxShow", "", "fxHide.lt-md", "", 4, "matCellDef"], ["matColumnDef", "quantity"], ["class", "product-quantity", 4, "matCellDef"], ["matColumnDef", "total price"], ["class", "product-total", 4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [1, "bonus-container"], ["translate", "", 3, "translateParams"], [1, "fas", "fa-warehouse", "confirmation"], [1, "fas", "fa-warehouse"], [1, "fas", "fa-truck-loading", "confirmation"], [1, "fas", "fa-truck-loading"], [1, "fas", "fa-truck", "confirmation"], [1, "fas", "fa-truck"], [1, "fa-layers", "fa-fw"], [1, "fas", "fa-home", "confirmation"], [1, "fa-layers-counter", "accent-notification", 2, "width", "max-content"], [1, "fas", "fa-home"], [1, "product-name"], ["fxShow", "", "fxHide.lt-md", "", "translate", ""], ["fxShow", "", "fxHide.lt-md", "", 1, "product-price"], [1, "product-quantity"], [1, "product-total"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "mat-card", 0)(1, "h1")(2, "span", 1),
                    t._uU(3, "TITLE_SEARCH_RESULTS"),
                    t.qZA(),
                    t._uU(4, " - "),
                    t._UZ(5, "span", 2),
                    t.qZA(),
                    t.TgZ(6, "div", 3)(7, "h3", 1),
                    t._uU(8, "LABEL_EXPECTED_DELIVERY"),
                    t.qZA(),
                    t.TgZ(9, "div", 4)(10, "div", 5),
                    t.YNc(11, fn, 2, 0, "span", 6),
                    t.YNc(12, Cn, 2, 0, "span", 6),
                    t.YNc(13, vn, 2, 0, "span", 6),
                    t.YNc(14, xn, 2, 0, "span", 6),
                    t.YNc(15, bn, 2, 0, "span", 6),
                    t.YNc(16, Tn, 2, 0, "span", 6),
                    t.YNc(17, An, 6, 4, "span", 7),
                    t.YNc(18, yn, 6, 4, "span", 7),
                    t.qZA()()(),
                    t.TgZ(19, "div", 8)(20, "div", 9)(21, "h2", 1),
                    t._uU(22, "LABEL_PRODUCT_ORDERED"),
                    t.qZA()()(),
                    t.TgZ(23, "div", 10)(24, "mat-table", 11, 12),
                    t.ynx(26, 13),
                    t.YNc(27, Zn, 2, 0, "mat-header-cell", 14),
                    t.YNc(28, wn, 2, 1, "mat-cell", 15),
                    t.BQk(),
                    t.ynx(29, 16),
                    t.YNc(30, Sn, 2, 0, "mat-header-cell", 17),
                    t.YNc(31, kn, 2, 1, "mat-cell", 18),
                    t.BQk(),
                    t.ynx(32, 19),
                    t.YNc(33, In, 2, 0, "mat-header-cell", 14),
                    t.YNc(34, On, 2, 1, "mat-cell", 20),
                    t.BQk(),
                    t.ynx(35, 21),
                    t.YNc(36, Un, 2, 0, "mat-header-cell", 14),
                    t.YNc(37, Ln, 2, 1, "mat-cell", 22),
                    t.BQk(),
                    t.YNc(38, Pn, 1, 0, "mat-header-row", 23),
                    t.YNc(39, Nn, 1, 0, "mat-row", 24),
                    t.qZA()(),
                    t.TgZ(40, "div", 25)(41, "h2", 26),
                    t._uU(42, "BONUS_POINTS_EARNED"),
                    t.qZA(),
                    t.TgZ(43, "p"),
                    t._uU(44, "("),
                    t._UZ(45, "span", 2),
                    t.ALo(46, "translate"),
                    t._uU(47, ")"),
                    t.qZA()()()),
                    2 & e && (t.xp6(5),
                    t.Q6J("innerHtml", o.results.orderNo, t.oJD),
                    t.xp6(6),
                    t.Q6J("ngIf", o.status === o.Status.New),
                    t.xp6(1),
                    t.Q6J("ngIf", o.status !== o.Status.New),
                    t.xp6(1),
                    t.Q6J("ngIf", o.status === o.Status.Packing),
                    t.xp6(1),
                    t.Q6J("ngIf", o.status !== o.Status.Packing),
                    t.xp6(1),
                    t.Q6J("ngIf", o.status === o.Status.Transit),
                    t.xp6(1),
                    t.Q6J("ngIf", o.status !== o.Status.Transit),
                    t.xp6(1),
                    t.Q6J("ngIf", o.status === o.Status.Delivered),
                    t.xp6(1),
                    t.Q6J("ngIf", o.status !== o.Status.Delivered),
                    t.xp6(6),
                    t.Q6J("dataSource", o.dataSource),
                    t.xp6(14),
                    t.Q6J("matHeaderRowDef", o.displayedColumns),
                    t.xp6(1),
                    t.Q6J("matRowDefColumns", o.displayedColumns),
                    t.xp6(2),
                    t.Q6J("translateParams", t.VKq(16, En, o.results.bonus)),
                    t.xp6(4),
                    t.Q6J("innerHtml", t.lcZ(46, 14, "BONUS_FOR_FUTURE_PURCHASES"), t.oJD))
                },
                dependencies: [h.O5, u.Pi, p.Wh, $.b8, d.BZ, d.fO, d.as, d.w1, d.Dz, d.nj, d.ge, d.ev, d.XQ, d.Gk, T.a8, u.X$],
                styles: ["mat-table[_ngcontent-%COMP%], .table-heading[_ngcontent-%COMP%]{width:90%}.heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);height:35px;justify-content:center;padding:0 20px;width:90%}.product-name[_ngcontent-%COMP%]{margin-right:25px}.table-wrapper[_ngcontent-%COMP%]{margin-top:30px}.table-heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:0}.row.fa-4x[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin-right:10px}.mat-own-card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}.bonus-container[_ngcontent-%COMP%]{align-items:center;box-sizing:border-box;display:flex;flex-direction:column;margin-top:10px;place-content:stretch center}.bonus-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;padding:0}"]
            }),
            n
        }
        )()
          , Ut = (()=>{
            class n {
                constructor(e) {
                    this.http = e,
                    this.hostServer = P.N.hostServer,
                    this.host = this.hostServer + "/api/Feedbacks"
                }
                find(e) {
                    return this.http.get(this.host + "/", {
                        params: e
                    }).pipe((0,
                    C.U)(o=>o.data), (0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
                save(e) {
                    return this.http.post(this.host + "/", e).pipe((0,
                    C.U)(o=>o.data), (0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
                del(e) {
                    return this.http.delete(`${this.host}/${e}`).pipe((0,
                    C.U)(o=>o.data), (0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.LFG(U.eN))
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )()
          , fe = (()=>{
            class n {
                constructor(e) {
                    this.http = e,
                    this.hostServer = P.N.hostServer,
                    this.host = this.hostServer + "/rest/captcha"
                }
                getCaptcha() {
                    return this.http.get(this.host + "/").pipe((0,
                    _.K)(e=>{
                        throw e
                    }
                    ))
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.LFG(U.eN))
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )()
          , rt = (()=>{
            class n {
                constructor(e) {
                    this._document = e
                }
                attachEnterKeyHandler(e, o, i) {
                    const r = this._document.getElementById(e)
                      , l = this._document.getElementById(o);
                    r.addEventListener("keyup", function(m) {
                        m.preventDefault(),
                        13 === m.keyCode && !l.disabled && i()
                    })
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.LFG(h.K0))
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )();
        var f = c(9549)
          , B = c(4144)
          , Ce = c(7314);
        function Mn(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 2),
            t._uU(1, "MANDATORY_COMMENT "),
            t.qZA())
        }
        function Dn(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 2),
            t._uU(1, "MANDATORY_CAPTCHA "),
            t.qZA())
        }
        function qn(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 2),
            t._uU(1, "INVALID_CAPTCHA "),
            t.qZA())
        }
        const Fn = function() {
            return {
                length: "160"
            }
        };
        O.vI.add(g.Tab, g.XCy);
        let Bn = (()=>{
            class n {
                constructor(e, o, i, r, l, m) {
                    this.userService = e,
                    this.captchaService = o,
                    this.feedbackService = i,
                    this.formSubmitService = r,
                    this.translate = l,
                    this.snackBarHelperService = m,
                    this.authorControl = new s.p4({
                        value: "",
                        disabled: !0
                    },[]),
                    this.feedbackControl = new s.p4("",[s.kI.required, s.kI.maxLength(160)]),
                    this.captchaControl = new s.p4("",[s.kI.required, s.kI.pattern("-?[\\d]*")]),
                    this.userIdControl = new s.p4("",[]),
                    this.rating = 0,
                    this.feedback = void 0
                }
                ngOnInit() {
                    this.userService.whoAmI().subscribe(e=>{
                        this.feedback = {},
                        this.userIdControl.setValue(e.id),
                        this.feedback.UserId = e.id,
                        this.authorControl.setValue(e.email ? `***${e.email.slice(3)}` : "anonymous")
                    }
                    , e=>{
                        this.feedback = void 0,
                        console.log(e)
                    }
                    ),
                    this.getNewCaptcha(),
                    this.formSubmitService.attachEnterKeyHandler("feedback-form", "submitButton", ()=>{
                        this.save()
                    }
                    )
                }
                getNewCaptcha() {
                    this.captchaService.getCaptcha().subscribe(e=>{
                        this.captcha = e.captcha,
                        this.captchaId = e.captchaId
                    }
                    , e=>e)
                }
                save() {
                    this.feedback.captchaId = this.captchaId,
                    this.feedback.captcha = this.captchaControl.value,
                    this.feedback.comment = `${this.feedbackControl.value} (${this.authorControl.value})`,
                    this.feedback.rating = this.rating,
                    this.feedback.UserId = this.userIdControl.value,
                    this.feedbackService.save(this.feedback).subscribe(e=>{
                        5 === e.rating ? this.translate.get("FEEDBACK_FIVE_STAR_THANK_YOU").subscribe(o=>{
                            this.snackBarHelperService.open(o)
                        }
                        , o=>{
                            this.snackBarHelperService.open(o)
                        }
                        ) : this.translate.get("FEEDBACK_THANK_YOU").subscribe(o=>{
                            this.snackBarHelperService.open(o)
                        }
                        , o=>{
                            this.snackBarHelperService.open(o)
                        }
                        ),
                        this.feedback = {},
                        this.ngOnInit(),
                        this.resetForm()
                    }
                    , e=>{
                        console.log(e),
                        this.snackBarHelperService.open(e.error, "errorBar"),
                        this.feedback = {},
                        this.resetCaptcha()
                    }
                    )
                }
                resetForm() {
                    this.authorControl.markAsUntouched(),
                    this.authorControl.markAsPristine(),
                    this.authorControl.setValue(""),
                    this.feedbackControl.markAsUntouched(),
                    this.feedbackControl.markAsPristine(),
                    this.feedbackControl.setValue(""),
                    this.rating = 0,
                    this.captchaControl.markAsUntouched(),
                    this.captchaControl.markAsPristine(),
                    this.captchaControl.setValue("")
                }
                resetCaptcha() {
                    this.captchaControl.markAsUntouched(),
                    this.captchaControl.markAsPristine(),
                    this.captchaControl.setValue("")
                }
                formatRating(e) {
                    return `${e}\u2605`
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(R),t.Y36(fe),t.Y36(Ut),t.Y36(rt),t.Y36(u.sK),t.Y36(J.H))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-contact"]],
                decls: 52,
                vars: 26,
                consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], ["translate", ""], ["id", "feedback-form", 1, "form-container"], ["hidden", "", "type", "text", "id", "userId", 3, "formControl"], ["appearance", "outline", "color", "accent"], ["matInput", "", "type", "text", "aria-label", "Field with the name of the author", 3, "formControl"], [1, "fas", "fa-exclamation-circle"], ["translate", "", 2, "margin-left", "5px"], ["id", "comment", "matInput", "", "matAutosizeMinRows", "4", "matAutosizeMaxRows", "4", "matTextareaAutosize", "", "cols", "50", "maxlength", "160", "aria-label", "Field for entering the comment or the feedback", 3, "formControl", "placeholder"], ["comment", ""], ["align", "end"], ["translate", "", 4, "ngIf"], [1, "rating-container"], ["translate", "", 2, "font-weight", "500", "margin-right", "8px", "float", "left"], ["id", "rating", "min", "1", "max", "5", "thumbLabel", "", "tickInterval", "1", "aria-label", "Slider for selecting the star rating", 3, "value", "displayWith", "valueChange"], [2, "margin-bottom", "10px", "margin-top", "10px"], [2, "font-weight", "500"], ["translate", "", 2, "font-size", "small"], ["id", "captcha", "aria-label", "CAPTCHA code which must be solved"], [2, "font-size", "small"], ["id", "captchaControl", "matInput", "", "type", "text", "aria-label", "Field for the result of the CAPTCHA code", "pattern", "-?[\\d]*", 3, "formControl", "placeholder"], ["type", "submit", "id", "submitButton", "mat-raised-button", "", "color", "primary", "aria-label", "Button to send the review", 3, "disabled", "click"], [1, "material-icons"]],
                template: function(e, o) {
                    if (1 & e && (t.TgZ(0, "div", 0)(1, "mat-card", 1)(2, "h1", 2),
                    t._uU(3, "SECTION_CUSTOMER_FEEDBACK"),
                    t.qZA(),
                    t.TgZ(4, "div", 3),
                    t._UZ(5, "input", 4),
                    t.TgZ(6, "mat-form-field", 5)(7, "mat-label", 2),
                    t._uU(8, "LABEL_AUTHOR"),
                    t.qZA(),
                    t._UZ(9, "input", 6),
                    t.qZA(),
                    t.TgZ(10, "mat-form-field", 5)(11, "mat-label", 2),
                    t._uU(12, "LABEL_COMMENT"),
                    t.qZA(),
                    t.TgZ(13, "mat-hint", 2),
                    t._UZ(14, "i", 7),
                    t.TgZ(15, "em", 8),
                    t._uU(16),
                    t.ALo(17, "translate"),
                    t.qZA()(),
                    t._UZ(18, "textarea", 9, 10),
                    t.ALo(20, "translate"),
                    t.TgZ(21, "mat-hint", 11),
                    t._uU(22),
                    t.qZA(),
                    t.YNc(23, Mn, 2, 0, "mat-error", 12),
                    t.qZA(),
                    t.TgZ(24, "div", 13)(25, "label", 14),
                    t._uU(26, "LABEL_RATING"),
                    t.qZA(),
                    t.TgZ(27, "mat-slider", 15),
                    t.NdJ("valueChange", function(r) {
                        return o.rating = r
                    }),
                    t.qZA()(),
                    t.TgZ(28, "div", 16)(29, "label", 17),
                    t._uU(30, "CAPTCHA:"),
                    t.qZA(),
                    t._uU(31, "\xa0\xa0"),
                    t.TgZ(32, "span", 18),
                    t._uU(33, "LABEL_WHAT_IS"),
                    t.qZA(),
                    t._uU(34, "\xa0 "),
                    t.TgZ(35, "code", 19),
                    t._uU(36),
                    t.qZA(),
                    t._uU(37, "\xa0"),
                    t.TgZ(38, "label", 20),
                    t._uU(39, "?"),
                    t.qZA()(),
                    t.TgZ(40, "mat-form-field", 5)(41, "mat-label", 2),
                    t._uU(42, "LABEL_RESULT"),
                    t.qZA(),
                    t._UZ(43, "input", 21),
                    t.ALo(44, "translate"),
                    t.YNc(45, Dn, 2, 0, "mat-error", 12),
                    t.YNc(46, qn, 2, 0, "mat-error", 12),
                    t.qZA()(),
                    t.TgZ(47, "button", 22),
                    t.NdJ("click", function() {
                        return o.save()
                    }),
                    t.TgZ(48, "i", 23),
                    t._uU(49, " send "),
                    t.qZA(),
                    t._uU(50),
                    t.ALo(51, "translate"),
                    t.qZA()()()),
                    2 & e) {
                        const i = t.MAs(19);
                        t.xp6(5),
                        t.Q6J("formControl", o.userIdControl),
                        t.xp6(4),
                        t.Q6J("formControl", o.authorControl),
                        t.xp6(7),
                        t.Oqu(t.xi3(17, 16, "MAX_TEXTAREA_LENGTH", t.DdM(25, Fn))),
                        t.xp6(2),
                        t.s9C("placeholder", t.lcZ(20, 19, "WRITE_REVIEW_PLACEHOLDER")),
                        t.Q6J("formControl", o.feedbackControl),
                        t.xp6(4),
                        t.hij("", (null == i.value ? null : i.value.length) || 0, "/160"),
                        t.xp6(1),
                        t.Q6J("ngIf", o.feedbackControl.invalid && o.feedbackControl.errors.required),
                        t.xp6(4),
                        t.Q6J("value", o.rating)("displayWith", o.formatRating),
                        t.xp6(9),
                        t.Oqu(o.captcha),
                        t.xp6(7),
                        t.s9C("placeholder", t.lcZ(44, 21, "MANDATORY_CAPTCHA")),
                        t.Q6J("formControl", o.captchaControl),
                        t.xp6(2),
                        t.Q6J("ngIf", o.captchaControl.invalid && o.captchaControl.errors.required),
                        t.xp6(1),
                        t.Q6J("ngIf", o.captchaControl.invalid && o.captchaControl.errors.pattern),
                        t.xp6(1),
                        t.Q6J("disabled", o.authorControl.invalid || o.feedbackControl.invalid || o.captchaControl.invalid || !o.rating),
                        t.xp6(3),
                        t.hij(" ", t.lcZ(51, 23, "BTN_SUBMIT"), " ")
                    }
                },
                dependencies: [h.O5, u.Pi, p.Wh, s.Fj, s.JJ, s.nD, s.c5, s.oH, f.TO, f.KE, f.bx, f.hX, x.lW, T.a8, B.Nt, Ce.pH, u.X$],
                styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:30%}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}.rating-container[_ngcontent-%COMP%]{margin-bottom:15px;margin-top:15px}.star[_ngcontent-%COMP%]{color:#c8c8c8}.active[_ngcontent-%COMP%], .select[_ngcontent-%COMP%]{color:gold}[_nghost-%COMP%]     .br{margin:0!important}#submitButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}"]
            }),
            n
        }
        )();
        var ve = c(5192);
        function Rn(n, a) {
            if (1 & n && (t.TgZ(0, "a", 15)(1, "button", 16),
            t._UZ(2, "i", 17),
            t._uU(3, " Twitter"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw(2);
                t.Q6J("href", e.twitterUrl, t.LSH)
            }
        }
        function Yn(n, a) {
            if (1 & n && (t.TgZ(0, "a", 18)(1, "button", 16),
            t._UZ(2, "i", 19),
            t._uU(3, " Facebook"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw(2);
                t.Q6J("href", e.facebookUrl, t.LSH)
            }
        }
        function Jn(n, a) {
            if (1 & n && (t.TgZ(0, "a", 20)(1, "button", 16),
            t._UZ(2, "i", 21),
            t._uU(3, " Slack"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw(2);
                t.Q6J("href", e.slackUrl, t.LSH)
            }
        }
        function Qn(n, a) {
            if (1 & n && (t.TgZ(0, "a", 22)(1, "button", 16),
            t._UZ(2, "i", 23),
            t._uU(3, " Reddit"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw(2);
                t.Q6J("href", e.redditUrl, t.LSH)
            }
        }
        function Hn(n, a) {
            if (1 & n && (t.TgZ(0, "a", 24)(1, "button", 16),
            t._UZ(2, "i", 25),
            t._uU(3, " Press Kit"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw(2);
                t.Q6J("href", e.pressKitUrl, t.LSH)
            }
        }
        function Gn(n, a) {
            if (1 & n && (t.TgZ(0, "a", 26)(1, "button", 16),
            t._UZ(2, "i", 27),
            t._uU(3, " NFT"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw(2);
                t.Q6J("href", e.nftUrl, t.LSH)
            }
        }
        function jn(n, a) {
            if (1 & n && (t.TgZ(0, "div", 8)(1, "h3")(2, "span", 3),
            t._uU(3, "SECTION_SOCIAL_MEDIA"),
            t.qZA()(),
            t.YNc(4, Rn, 4, 1, "a", 9),
            t.YNc(5, Yn, 4, 1, "a", 10),
            t.YNc(6, Jn, 4, 1, "a", 11),
            t.YNc(7, Qn, 4, 1, "a", 12),
            t.YNc(8, Hn, 4, 1, "a", 13),
            t.YNc(9, Gn, 4, 1, "a", 14),
            t.qZA()),
            2 & n) {
                const e = t.oxw();
                t.xp6(4),
                t.Q6J("ngIf", e.twitterUrl),
                t.xp6(1),
                t.Q6J("ngIf", e.facebookUrl),
                t.xp6(1),
                t.Q6J("ngIf", e.slackUrl),
                t.xp6(1),
                t.Q6J("ngIf", e.redditUrl),
                t.xp6(1),
                t.Q6J("ngIf", e.pressKitUrl),
                t.xp6(1),
                t.Q6J("ngIf", e.nftUrl)
            }
        }
        O.vI.add(Z.neY, Z.mdU, Z.SrY, Z.HK3, D.Xg, D.T, g.Tab, g.q2v);
        let Wn = (()=>{
            class n {
                constructor(e, o, i) {
                    this.configurationService = e,
                    this.feedbackService = o,
                    this.sanitizer = i,
                    this.slideshowDataSource = [],
                    this.images = ["assets/public/images/carousel/1.jpg", "assets/public/images/carousel/2.jpg", "assets/public/images/carousel/3.jpg", "assets/public/images/carousel/4.jpg", "assets/public/images/carousel/5.png", "assets/public/images/carousel/6.jpg", "assets/public/images/carousel/7.jpg"],
                    this.stars = [null, '<i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>', '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>', '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>', '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>', '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>']
                }
                ngOnInit() {
                    this.populateSlideshowFromFeedbacks(),
                    this.configurationService.getApplicationConfiguration().subscribe(e=>{
                        e?.application?.social && (e.application.social.twitterUrl && (this.twitterUrl = e.application.social.twitterUrl),
                        e.application.social.facebookUrl && (this.facebookUrl = e.application.social.facebookUrl),
                        e.application.social.slackUrl && (this.slackUrl = e.application.social.slackUrl),
                        e.application.social.redditUrl && (this.redditUrl = e.application.social.redditUrl),
                        e.application.social.pressKitUrl && (this.pressKitUrl = e.application.social.pressKitUrl),
                        e.application.social.nftUrl && (this.nftUrl = e.application.social.nftUrl))
                    }
                    , e=>{
                        console.log(e)
                    }
                    )
                }
                populateSlideshowFromFeedbacks() {
                    this.feedbackService.find().subscribe(e=>{
                        for (let o = 0; o < e.length; o++)
                            e[o].comment = `<span style="width: 90%; display:block;">${e[o].comment}<br/> (${this.stars[e[o].rating]})</span>`,
                            e[o].comment = this.sanitizer.bypassSecurityTrustHtml(e[o].comment),
                            this.slideshowDataSource.push({
                                url: this.images[o % this.images.length],
                                caption: e[o].comment
                            })
                    }
                    , e=>{
                        console.log(e)
                    }
                    )
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(b.e),t.Y36(Ut),t.Y36(k.H7))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-about"]],
                decls: 17,
                vars: 7,
                consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], [1, "about-us"], ["translate", ""], [1, "text-justify"], ["href", "ftp/legal.md", "aria-label", "Link to the Terms of Use", "translate", ""], [3, "height", "autoPlay", "arrowSize", "showArrows", "showDots", "imageUrls"], ["class", "social", 4, "ngIf"], [1, "social"], ["target", "_blank", "rel", "noopener noreferrer", "style", "margin-left: 0px;", "aria-label", "Button for the Twitter page of the shop", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the Facebook page of the shop", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the Slack page of the shop", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the Reddit page of the shop", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the PressKit page of the shop", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the NFT of the shop", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the Twitter page of the shop", 2, "margin-left", "0px", 3, "href"], ["mat-raised-button", "", "color", "accent"], [1, "fab", "fa-twitter", "fa-lg"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the Facebook page of the shop", 3, "href"], [1, "fab", "fa-facebook", "fa-lg"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the Slack page of the shop", 3, "href"], [1, "fab", "fa-slack", "fa-lg"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the Reddit page of the shop", 3, "href"], [1, "fab", "fa-reddit", "fa-lg"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the PressKit page of the shop", 3, "href"], [1, "far", "fa-newspaper", "fa-lg"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the NFT of the shop", 3, "href"], [1, "fas", "fa-palette", "fa-lg"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "div", 0)(1, "mat-card", 1)(2, "section", 2)(3, "h1", 3),
                    t._uU(4, "TITLE_ABOUT"),
                    t.qZA(),
                    t.TgZ(5, "h3", 3),
                    t._uU(6, "SECTION_CORPORATE_HISTORY"),
                    t.qZA(),
                    t.TgZ(7, "p", 4),
                    t._uU(8, " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. "),
                    t.TgZ(9, "a", 5),
                    t._uU(10, "LINK_TERMS_OF_USE"),
                    t.qZA(),
                    t._uU(11, " At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. "),
                    t.qZA(),
                    t.TgZ(12, "h3")(13, "span", 3),
                    t._uU(14, "SECTION_CUSTOMER_FEEDBACK"),
                    t.qZA()(),
                    t._UZ(15, "slideshow", 6),
                    t.YNc(16, jn, 10, 6, "div", 7),
                    t.qZA()()()),
                    2 & e && (t.xp6(15),
                    t.Q6J("height", "300px")("autoPlay", !0)("arrowSize", "10px")("showArrows", !0)("showDots", !1)("imageUrls", o.slideshowDataSource),
                    t.xp6(1),
                    t.Q6J("ngIf", o.twitterUrl || o.facebookUrl))
                },
                dependencies: [h.O5, u.Pi, p.Wh, ve.w5, x.lW, T.a8],
                styles: ["mat-card[_ngcontent-%COMP%]{display:block;margin-bottom:30px;margin-left:auto;margin-right:auto;width:80%}.about-us[_ngcontent-%COMP%]{margin-left:8.33333%;margin-right:8.33333%;width:83.3333%}.social[_ngcontent-%COMP%]{margin-top:20px}button[_ngcontent-%COMP%]{margin:5px}.text-justify[_ngcontent-%COMP%]{text-align:justify;text-justify:inter-word}"]
            }),
            n
        }
        )()
          , xe = (()=>{
            class n {
                constructor(e) {
                    this.http = e,
                    this.hostServer = P.N.hostServer,
                    this.host = this.hostServer + "/api/SecurityAnswers"
                }
                save(e) {
                    return this.http.post(this.host + "/", e).pipe((0,
                    C.U)(o=>o.data), (0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.LFG(U.eN))
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )()
          , Ht = (()=>{
            class n {
                constructor(e) {
                    this.http = e,
                    this.hostServer = P.N.hostServer,
                    this.host = this.hostServer + "/api/SecurityQuestions"
                }
                find(e) {
                    return this.http.get(this.host + "/", {
                        params: e
                    }).pipe((0,
                    C.U)(o=>o.data), (0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
                findBy(e) {
                    return this.http.get(this.hostServer + "/rest/user/security-question?email=" + e).pipe((0,
                    C.U)(o=>o.question), (0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.LFG(U.eN))
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )();
        var ut = c(7009)
          , Ct = c(9187)
          , vt = c(4385)
          , Gt = c(3238)
          , jt = c(455);
        function Kn(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 2),
            t._uU(1, "MANDATORY_EMAIL"),
            t.qZA())
        }
        function zn(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 2),
            t._uU(1, "INVALID_EMAIL"),
            t.qZA())
        }
        function $n(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 2),
            t._uU(1, "MANDATORY_PASSWORD "),
            t.qZA())
        }
        const be = function() {
            return {
                length: "5-40"
            }
        };
        function Vn(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 30),
            t._uU(1, "INVALID_PASSWORD_LENGTH "),
            t.qZA()),
            2 & n && t.Q6J("translateParams", t.DdM(1, be))
        }
        function Xn(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 2),
            t._uU(1, " MANDATORY_PASSWORD_REPEAT "),
            t.qZA())
        }
        function to(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 2),
            t._uU(1, " PASSWORDS_NOT_MATCHING "),
            t.qZA())
        }
        const eo = function() {
            return {
                value: 8
            }
        };
        function no(n, a) {
            if (1 & n && (t._UZ(0, "mat-password-strength-info", 31),
            t.ALo(1, "translate"),
            t.ALo(2, "translate"),
            t.ALo(3, "translate"),
            t.ALo(4, "translate"),
            t.ALo(5, "translate")),
            2 & n) {
                t.oxw();
                const e = t.MAs(41);
                t.Q6J("passwordComponent", e)("lowerCaseCriteriaMsg", t.lcZ(1, 6, "LOWER_CASE_CRITERIA_MSG"))("upperCaseCriteriaMsg", t.lcZ(2, 8, "UPPER_CASE_CRITERIA_MSG"))("digitsCriteriaMsg", t.lcZ(3, 10, "DIGITS_CRITERIA_MSG"))("specialCharsCriteriaMsg", t.lcZ(4, 12, "SPECIAL_CHARS_CRITERIA_MSG"))("minCharsCriteriaMsg", t.xi3(5, 14, "MIN_CHARS_CRITERIA_MSG", t.DdM(17, eo)))
            }
        }
        function oo(n, a) {
            if (1 & n && (t.TgZ(0, "mat-option", 32),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = a.$implicit;
                t.Q6J("value", e.id),
                t.xp6(1),
                t.hij(" ", e.question, " ")
            }
        }
        function ao(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 2),
            t._uU(1, " MANDATORY_SECURITY_QUESTION "),
            t.qZA())
        }
        function io(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 2),
            t._uU(1, " MANDATORY_SECURITY_ANSWER "),
            t.qZA())
        }
        O.vI.add(g.FKd, g.RLE);
        let ro = (()=>{
            class n {
                constructor(e, o, i, r, l, m, v, A, q) {
                    this.securityQuestionService = e,
                    this.userService = o,
                    this.securityAnswerService = i,
                    this.router = r,
                    this.formSubmitService = l,
                    this.translateService = m,
                    this.snackBar = v,
                    this.snackBarHelperService = A,
                    this.ngZone = q,
                    this.emailControl = new s.p4("",[s.kI.required, s.kI.email]),
                    this.passwordControl = new s.p4("",[s.kI.required, s.kI.minLength(5), s.kI.maxLength(40)]),
                    this.repeatPasswordControl = new s.p4("",[s.kI.required, so(this.passwordControl)]),
                    this.securityQuestionControl = new s.p4("",[s.kI.required]),
                    this.securityAnswerControl = new s.p4("",[s.kI.required]),
                    this.error = null
                }
                ngOnInit() {
                    this.securityQuestionService.find(null).subscribe(e=>{
                        this.securityQuestions = e
                    }
                    , e=>{
                        console.log(e)
                    }
                    ),
                    this.formSubmitService.attachEnterKeyHandler("registration-form", "registerButton", ()=>{
                        this.save()
                    }
                    )
                }
                save() {
                    var e = this;
                    const o = {
                        email: this.emailControl.value,
                        password: this.passwordControl.value,
                        passwordRepeat: this.repeatPasswordControl.value,
                        securityQuestion: this.securityQuestions.find(i=>i.id === this.securityQuestionControl.value),
                        securityAnswer: this.securityAnswerControl.value
                    };
                    this.userService.save(o).subscribe(i=>{
                        this.securityAnswerService.save({
                            UserId: i.id,
                            answer: this.securityAnswerControl.value,
                            SecurityQuestionId: this.securityQuestionControl.value
                        }).subscribe(()=>{
                            this.ngZone.run((0,
                            w.Z)(function*() {
                                return yield e.router.navigate(["/login"])
                            })),
                            this.snackBarHelperService.open("CONFIRM_REGISTER")
                        }
                        )
                    }
                    , i=>{
                        if (console.log(i),
                        i.error?.errors) {
                            const r = i.error.errors[0];
                            this.error = r.message ? r.message[0].toUpperCase() + r.message.slice(1) : r
                        }
                    }
                    )
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(Ht),t.Y36(R),t.Y36(xe),t.Y36(L.F0),t.Y36(rt),t.Y36(u.sK),t.Y36(ut.ux),t.Y36(J.H),t.Y36(t.R0b))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-register"]],
                decls: 69,
                vars: 39,
                consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], ["translate", ""], ["ng-if", "error", 1, "error"], ["id", "registration-form", 1, "form-container"], ["appearance", "outline", "color", "accent"], ["id", "emailControl", "type", "text", "matInput", "", "aria-label", "Email address field", 3, "formControl", "focus"], ["translate", "", 4, "ngIf"], ["id", "passwordControl", "type", "password", "matInput", "", "aria-label", "Field for the password", 3, "formControl", "focus"], ["password", ""], [1, "fas", "fa-exclamation-circle"], ["translate", "", 2, "margin-left", "5px"], ["align", "end"], ["translate", "", 3, "translateParams", 4, "ngIf"], ["id", "repeatPasswordControl", "type", "password", "matInput", "", "aria-label", "Field to confirm the password", 3, "formControl", "focus"], ["repeatPassword", ""], [3, "color"], ["passwordInfoToggle", ""], [3, "password"], ["passwordStrength", ""], [3, "passwordComponent", "lowerCaseCriteriaMsg", "upperCaseCriteriaMsg", "digitsCriteriaMsg", "specialCharsCriteriaMsg", "minCharsCriteriaMsg", 4, "ngIf"], [1, "security-container"], ["color", "accent", "appearance", "outline"], ["placeholder", "", "name", "securityQuestion", "aria-label", "Selection list for the security question", 3, "formControl", "value", "valueChange", "focus"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "securityAnswerControl", "type", "text", "matInput", "", "aria-label", "Field for the answer to the security question", 3, "formControl", "placeholder", "focus"], ["type", "submit", "id", "registerButton", "mat-raised-button", "", "color", "primary", "aria-label", "Button to complete the registration", 3, "disabled", "click"], [1, "material-icons"], ["id", "alreadyACustomerLink"], ["routerLink", "/login", "translate", "", 1, "primary-link"], ["translate", "", 3, "translateParams"], [3, "passwordComponent", "lowerCaseCriteriaMsg", "upperCaseCriteriaMsg", "digitsCriteriaMsg", "specialCharsCriteriaMsg", "minCharsCriteriaMsg"], [3, "value"]],
                template: function(e, o) {
                    if (1 & e && (t.TgZ(0, "div", 0)(1, "mat-card", 1)(2, "h1", 2),
                    t._uU(3, "TITLE_REGISTRATION"),
                    t.qZA(),
                    t.TgZ(4, "div", 3),
                    t._uU(5),
                    t.qZA(),
                    t.TgZ(6, "div", 4)(7, "mat-form-field", 5)(8, "mat-label", 2),
                    t._uU(9, "LABEL_EMAIL"),
                    t.qZA(),
                    t.TgZ(10, "input", 6),
                    t.NdJ("focus", function() {
                        return o.error = null
                    }),
                    t.qZA(),
                    t.YNc(11, Kn, 2, 0, "mat-error", 7),
                    t.YNc(12, zn, 2, 0, "mat-error", 7),
                    t.qZA(),
                    t.TgZ(13, "mat-form-field", 5)(14, "mat-label", 2),
                    t._uU(15, "LABEL_PASSWORD"),
                    t.qZA(),
                    t.TgZ(16, "input", 8, 9),
                    t.NdJ("focus", function() {
                        return o.error = null
                    }),
                    t.qZA(),
                    t.TgZ(18, "mat-hint", 2),
                    t._UZ(19, "i", 10),
                    t.TgZ(20, "em", 11),
                    t._uU(21),
                    t.ALo(22, "translate"),
                    t.qZA()(),
                    t.TgZ(23, "mat-hint", 12),
                    t._uU(24),
                    t.qZA(),
                    t.YNc(25, $n, 2, 0, "mat-error", 7),
                    t.YNc(26, Vn, 2, 2, "mat-error", 13),
                    t.qZA(),
                    t.TgZ(27, "mat-form-field", 5)(28, "mat-label", 2),
                    t._uU(29, "LABEL_PASSWORD_REPEAT"),
                    t.qZA(),
                    t.TgZ(30, "input", 14, 15),
                    t.NdJ("focus", function() {
                        return o.error = null
                    }),
                    t.qZA(),
                    t.TgZ(32, "mat-hint", 12),
                    t._uU(33),
                    t.qZA(),
                    t.YNc(34, Xn, 2, 0, "mat-error", 7),
                    t.YNc(35, to, 2, 0, "mat-error", 7),
                    t.qZA(),
                    t.TgZ(36, "mat-slide-toggle", 16, 17),
                    t._uU(38),
                    t.ALo(39, "translate"),
                    t.qZA(),
                    t._UZ(40, "mat-password-strength", 18, 19),
                    t.YNc(42, no, 6, 18, "mat-password-strength-info", 20),
                    t.TgZ(43, "div", 21)(44, "mat-form-field", 22)(45, "mat-label"),
                    t._uU(46),
                    t.ALo(47, "translate"),
                    t.qZA(),
                    t.TgZ(48, "mat-select", 23),
                    t.NdJ("valueChange", function(r) {
                        return o.selected = r
                    })("focus", function() {
                        return o.error = null
                    }),
                    t.YNc(49, oo, 2, 2, "mat-option", 24),
                    t.qZA(),
                    t.TgZ(50, "mat-hint", 2),
                    t._UZ(51, "i", 10),
                    t.TgZ(52, "em", 11),
                    t._uU(53, "CANNOT_BE_CHANGED_LATER"),
                    t.qZA()(),
                    t.YNc(54, ao, 2, 0, "mat-error", 7),
                    t.qZA(),
                    t.TgZ(55, "mat-form-field", 5)(56, "mat-label", 2),
                    t._uU(57, "SECURITY_ANSWER"),
                    t.qZA(),
                    t.TgZ(58, "input", 25),
                    t.NdJ("focus", function() {
                        return o.error = null
                    }),
                    t.ALo(59, "translate"),
                    t.qZA(),
                    t.YNc(60, io, 2, 0, "mat-error", 7),
                    t.qZA()(),
                    t.TgZ(61, "button", 26),
                    t.NdJ("click", function() {
                        return o.save()
                    }),
                    t.TgZ(62, "i", 27),
                    t._uU(63, " person_add "),
                    t.qZA(),
                    t._uU(64),
                    t.ALo(65, "translate"),
                    t.qZA(),
                    t.TgZ(66, "div", 28)(67, "a", 29),
                    t._uU(68, "ALREADY_A_CUSTOMER"),
                    t.qZA()()()()()),
                    2 & e) {
                        const i = t.MAs(17)
                          , r = t.MAs(31)
                          , l = t.MAs(37)
                          , m = t.MAs(41);
                        t.xp6(5),
                        t.Oqu(o.error),
                        t.xp6(5),
                        t.Q6J("formControl", o.emailControl),
                        t.xp6(1),
                        t.Q6J("ngIf", o.emailControl.invalid && o.emailControl.errors.required),
                        t.xp6(1),
                        t.Q6J("ngIf", o.emailControl.invalid && o.emailControl.errors.email),
                        t.xp6(4),
                        t.Q6J("formControl", o.passwordControl),
                        t.xp6(5),
                        t.Oqu(t.xi3(22, 27, "INVALID_PASSWORD_LENGTH", t.DdM(38, be))),
                        t.xp6(3),
                        t.hij("", (null == i.value ? null : i.value.length) || 0, "/20"),
                        t.xp6(1),
                        t.Q6J("ngIf", o.passwordControl.invalid && o.passwordControl.errors.required),
                        t.xp6(1),
                        t.Q6J("ngIf", o.passwordControl.invalid && (o.passwordControl.errors.minlength || o.passwordControl.errors.maxlength)),
                        t.xp6(4),
                        t.Q6J("formControl", o.repeatPasswordControl),
                        t.xp6(3),
                        t.hij("", (null == r.value ? null : r.value.length) || 0, "/40"),
                        t.xp6(1),
                        t.Q6J("ngIf", o.repeatPasswordControl.invalid && o.repeatPasswordControl.errors.required),
                        t.xp6(1),
                        t.Q6J("ngIf", o.repeatPasswordControl.invalid && o.repeatPasswordControl.errors.notSame),
                        t.xp6(1),
                        t.Q6J("color", m.color),
                        t.xp6(2),
                        t.Oqu(t.lcZ(39, 30, "SHOW_PASSWORD_ADVICE")),
                        t.xp6(2),
                        t.Q6J("password", i.value),
                        t.xp6(2),
                        t.Q6J("ngIf", l.checked),
                        t.xp6(4),
                        t.hij(" ", t.lcZ(47, 32, "LABEL_SECURITY_QUESTION"), " "),
                        t.xp6(2),
                        t.Q6J("formControl", o.securityQuestionControl)("value", o.selected),
                        t.xp6(1),
                        t.Q6J("ngForOf", o.securityQuestions),
                        t.xp6(5),
                        t.Q6J("ngIf", o.securityQuestionControl.invalid && o.securityQuestionControl.errors.required),
                        t.xp6(4),
                        t.Q6J("formControl", o.securityAnswerControl)("placeholder", t.lcZ(59, 34, "SECURITY_ANSWER_PLACEHOLDER")),
                        t.xp6(2),
                        t.Q6J("ngIf", o.securityAnswerControl.invalid && o.securityAnswerControl.errors.required),
                        t.xp6(1),
                        t.Q6J("disabled", o.emailControl.invalid || o.passwordControl.invalid || o.repeatPasswordControl.invalid || o.securityQuestionControl.invalid || o.securityAnswerControl.invalid),
                        t.xp6(3),
                        t.hij(" ", t.lcZ(65, 36, "BTN_REGISTER"), " ")
                    }
                },
                dependencies: [h.sg, h.O5, L.rH, u.Pi, Ct.ne, Ct.Xy, p.Wh, s.Fj, s.JJ, s.oH, f.TO, f.KE, f.bx, f.hX, vt.gD, Gt.ey, x.lW, T.a8, B.Nt, jt.Rr, u.X$],
                styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:25%}mat-form-field[_ngcontent-%COMP%]{padding-top:10px}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}#registerButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}#alreadyACustomerLink[_ngcontent-%COMP%]{align-self:center;font-size:12px;margin-top:40px}.security-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}  mat-option .mat-option-text{font-size:14px}"]
            }),
            n
        }
        )();
        function so(n) {
            return function(e) {
                return n.value !== e.value ? {
                    notSame: !0
                } : null
            }
        }
        var F = c(7392)
          , Q = c(266);
        function lo(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 2),
            t._uU(1, "MANDATORY_EMAIL"),
            t.qZA())
        }
        function co(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 2),
            t._uU(1, "INVALID_EMAIL"),
            t.qZA())
        }
        function uo(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 2),
            t._uU(1, " MANDATORY_SECURITY_ANSWER "),
            t.qZA())
        }
        function po(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 2),
            t._uU(1, "MANDATORY_NEW_PASSWORD "),
            t.qZA())
        }
        function mo(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 2),
            t._uU(1, " MANDATORY_PASSWORD_REPEAT "),
            t.qZA())
        }
        function go(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 2),
            t._uU(1, " PASSWORDS_NOT_MATCHING "),
            t.qZA())
        }
        const Te = function() {
            return {
                length: "5-40"
            }
        };
        function ho(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 28),
            t._uU(1, "INVALID_PASSWORD_LENGTH "),
            t.qZA()),
            2 & n && t.Q6J("translateParams", t.DdM(1, Te))
        }
        const _o = function() {
            return {
                value: 8
            }
        };
        function fo(n, a) {
            if (1 & n && (t._UZ(0, "mat-password-strength-info", 29),
            t.ALo(1, "translate"),
            t.ALo(2, "translate"),
            t.ALo(3, "translate"),
            t.ALo(4, "translate"),
            t.ALo(5, "translate")),
            2 & n) {
                t.oxw();
                const e = t.MAs(55);
                t.Q6J("passwordComponent", e)("lowerCaseCriteriaMsg", t.lcZ(1, 6, "LOWER_CASE_CRITERIA_MSG"))("upperCaseCriteriaMsg", t.lcZ(2, 8, "UPPER_CASE_CRITERIA_MSG"))("digitsCriteriaMsg", t.lcZ(3, 10, "DIGITS_CRITERIA_MSG"))("specialCharsCriteriaMsg", t.lcZ(4, 12, "SPECIAL_CHARS_CRITERIA_MSG"))("minCharsCriteriaMsg", t.xi3(5, 14, "MIN_CHARS_CRITERIA_MSG", t.DdM(17, _o)))
            }
        }
        O.vI.add(g.r6l, D.Xc);
        let Co = (()=>{
            class n {
                constructor(e, o, i) {
                    this.securityQuestionService = e,
                    this.userService = o,
                    this.translate = i,
                    this.emailControl = new s.p4("",[s.kI.required, s.kI.email]),
                    this.securityQuestionControl = new s.p4({
                        disabled: !0,
                        value: ""
                    },[s.kI.required]),
                    this.passwordControl = new s.p4({
                        disabled: !0,
                        value: ""
                    },[s.kI.required, s.kI.minLength(5)]),
                    this.repeatPasswordControl = new s.p4({
                        disabled: !0,
                        value: ""
                    },[s.kI.required, vo(this.passwordControl)]),
                    this.timeoutDuration = 1e3
                }
                findSecurityQuestion() {
                    clearTimeout(this.timeout),
                    this.timeout = setTimeout(()=>{
                        this.securityQuestion = void 0,
                        this.emailControl.value ? this.securityQuestionService.findBy(this.emailControl.value).subscribe(e=>{
                            e ? (this.securityQuestion = e.question,
                            this.securityQuestionControl.enable(),
                            this.passwordControl.enable(),
                            this.repeatPasswordControl.enable()) : (this.securityQuestionControl.disable(),
                            this.passwordControl.disable(),
                            this.repeatPasswordControl.disable())
                        }
                        , e=>e) : (this.securityQuestionControl.disable(),
                        this.passwordControl.disable(),
                        this.repeatPasswordControl.disable())
                    }
                    , this.timeoutDuration)
                }
                resetPassword() {
                    this.userService.resetPassword({
                        email: this.emailControl.value,
                        answer: this.securityQuestionControl.value,
                        new: this.passwordControl.value,
                        repeat: this.repeatPasswordControl.value
                    }).subscribe(()=>{
                        this.error = void 0,
                        this.translate.get("PASSWORD_SUCCESSFULLY_CHANGED").subscribe(e=>{
                            this.confirmation = e
                        }
                        , e=>{
                            this.confirmation = e
                        }
                        ),
                        this.resetForm()
                    }
                    , e=>{
                        this.error = e.error,
                        this.confirmation = void 0,
                        this.resetErrorForm()
                    }
                    )
                }
                resetForm() {
                    this.emailControl.setValue(""),
                    this.emailControl.markAsPristine(),
                    this.emailControl.markAsUntouched(),
                    this.securityQuestionControl.setValue(""),
                    this.securityQuestionControl.markAsPristine(),
                    this.securityQuestionControl.markAsUntouched(),
                    this.passwordControl.setValue(""),
                    this.passwordControl.markAsPristine(),
                    this.passwordControl.markAsUntouched(),
                    this.repeatPasswordControl.setValue(""),
                    this.repeatPasswordControl.markAsPristine(),
                    this.repeatPasswordControl.markAsUntouched()
                }
                resetErrorForm() {
                    this.emailControl.markAsPristine(),
                    this.emailControl.markAsUntouched(),
                    this.securityQuestionControl.setValue(""),
                    this.securityQuestionControl.markAsPristine(),
                    this.securityQuestionControl.markAsUntouched(),
                    this.passwordControl.setValue(""),
                    this.passwordControl.markAsPristine(),
                    this.passwordControl.markAsUntouched(),
                    this.repeatPasswordControl.setValue(""),
                    this.repeatPasswordControl.markAsPristine(),
                    this.repeatPasswordControl.markAsUntouched()
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(Ht),t.Y36(R),t.Y36(u.sK))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-forgot-password"]],
                decls: 61,
                vars: 39,
                consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], ["translate", ""], [1, "confirmation", 3, "hidden"], [1, "error", 3, "hidden"], [1, "form-container"], ["appearance", "outline", "color", "accent"], ["id", "email", "type", "email", "matInput", "", "placeholder", "Enter your email", "aria-label", "Email address field", 3, "formControl", "ngModelChange"], ["matSuffix", "", "matTooltipPosition", "right", "aria-label", "Please enter your email address to proceed", 3, "matTooltip"], ["translate", "", 4, "ngIf"], ["id", "forgot-form", 1, "form-container"], ["id", "securityAnswer", "type", "password", "matInput", "", "aria-label", "Field for the answer to the security question", 3, "formControl", "placeholder"], ["matSuffix", "", "matTooltipPosition", "right", "aria-label", "Please answer your selected security question", 3, "matTooltip"], ["id", "newPassword", "type", "password", "matInput", "", "placeholder", "", "aria-label", "Field for New Password", 3, "formControl"], ["password", ""], [1, "fas", "fa-exclamation-circle"], ["translate", "", 2, "margin-left", "5px"], ["align", "end"], ["id", "newPasswordRepeat", "type", "password", "matInput", "", "placeholder", "", "aria-label", "Field to confirm the new password", 3, "formControl"], ["repeatPassword", ""], ["translate", "", 3, "translateParams", 4, "ngIf"], [3, "color"], ["passwordInfoToggle", ""], [3, "password"], ["passwordStrength", ""], [3, "passwordComponent", "lowerCaseCriteriaMsg", "upperCaseCriteriaMsg", "digitsCriteriaMsg", "specialCharsCriteriaMsg", "minCharsCriteriaMsg", 4, "ngIf"], ["type", "submit", "id", "resetButton", "mat-raised-button", "", "color", "primary", "aria-label", "Button to confirm the changes", 3, "disabled", "click"], ["aria-hidden", "true", 1, "far", "fa-edit", "fa-lg"], ["translate", "", 3, "translateParams"], [3, "passwordComponent", "lowerCaseCriteriaMsg", "upperCaseCriteriaMsg", "digitsCriteriaMsg", "specialCharsCriteriaMsg", "minCharsCriteriaMsg"]],
                template: function(e, o) {
                    if (1 & e && (t.TgZ(0, "div", 0)(1, "mat-card", 1)(2, "h1", 2),
                    t._uU(3, "TITLE_FORGOT_PASSWORD"),
                    t.qZA(),
                    t.TgZ(4, "div", 3),
                    t._uU(5),
                    t.qZA(),
                    t.TgZ(6, "div", 4),
                    t._uU(7),
                    t.qZA(),
                    t.TgZ(8, "div", 5)(9, "mat-form-field", 6)(10, "mat-label", 2),
                    t._uU(11, "LABEL_EMAIL"),
                    t.qZA(),
                    t.TgZ(12, "input", 7),
                    t.NdJ("ngModelChange", function() {
                        return o.findSecurityQuestion()
                    }),
                    t.qZA(),
                    t.TgZ(13, "mat-icon", 8),
                    t.ALo(14, "translate"),
                    t._uU(15, "help_outline "),
                    t.qZA(),
                    t.YNc(16, lo, 2, 0, "mat-error", 9),
                    t.YNc(17, co, 2, 0, "mat-error", 9),
                    t.qZA()(),
                    t.TgZ(18, "div", 10)(19, "mat-form-field", 6)(20, "mat-label", 2),
                    t._uU(21, "LABEL_SECURITY_QUESTION"),
                    t.qZA(),
                    t._UZ(22, "input", 11),
                    t.TgZ(23, "mat-icon", 12),
                    t.ALo(24, "translate"),
                    t._uU(25, "help_outline "),
                    t.qZA(),
                    t.YNc(26, uo, 2, 0, "mat-error", 9),
                    t.qZA(),
                    t.TgZ(27, "mat-form-field", 6)(28, "mat-label", 2),
                    t._uU(29, "LABEL_NEW_PASSWORD"),
                    t.qZA(),
                    t._UZ(30, "input", 13, 14),
                    t.TgZ(32, "mat-hint", 2),
                    t._UZ(33, "i", 15),
                    t.TgZ(34, "em", 16),
                    t._uU(35),
                    t.ALo(36, "translate"),
                    t.qZA()(),
                    t.TgZ(37, "mat-hint", 17),
                    t._uU(38),
                    t.qZA(),
                    t.YNc(39, po, 2, 0, "mat-error", 9),
                    t.qZA(),
                    t.TgZ(40, "mat-form-field", 6)(41, "mat-label", 2),
                    t._uU(42, "LABEL_REPEAT_NEW_PASSWORD"),
                    t.qZA(),
                    t._UZ(43, "input", 18, 19),
                    t.TgZ(45, "mat-hint", 17),
                    t._uU(46),
                    t.qZA(),
                    t.YNc(47, mo, 2, 0, "mat-error", 9),
                    t.YNc(48, go, 2, 0, "mat-error", 9),
                    t.YNc(49, ho, 2, 2, "mat-error", 20),
                    t.qZA(),
                    t.TgZ(50, "mat-slide-toggle", 21, 22),
                    t._uU(52),
                    t.ALo(53, "translate"),
                    t.qZA(),
                    t._UZ(54, "mat-password-strength", 23, 24),
                    t.YNc(56, fo, 6, 18, "mat-password-strength-info", 25),
                    t.qZA(),
                    t.TgZ(57, "button", 26),
                    t.NdJ("click", function() {
                        return o.resetPassword()
                    }),
                    t._UZ(58, "i", 27),
                    t._uU(59),
                    t.ALo(60, "translate"),
                    t.qZA()()()),
                    2 & e) {
                        const i = t.MAs(31)
                          , r = t.MAs(44)
                          , l = t.MAs(51)
                          , m = t.MAs(55);
                        t.xp6(4),
                        t.Q6J("hidden", !(o.confirmation && !o.emailControl.dirty && !o.securityQuestionControl.dirty && !o.passwordControl.dirty && !o.repeatPasswordControl.dirty)),
                        t.xp6(1),
                        t.hij(" ", o.confirmation, " "),
                        t.xp6(1),
                        t.Q6J("hidden", !(o.error && !o.emailControl.dirty && !o.securityQuestionControl.dirty && !o.passwordControl.dirty && !o.repeatPasswordControl.dirty)),
                        t.xp6(1),
                        t.hij(" ", o.error, " "),
                        t.xp6(5),
                        t.Q6J("formControl", o.emailControl),
                        t.xp6(1),
                        t.s9C("matTooltip", t.lcZ(14, 27, "MANDATORY_EMAIL")),
                        t.xp6(3),
                        t.Q6J("ngIf", o.emailControl.invalid && o.emailControl.errors.required),
                        t.xp6(1),
                        t.Q6J("ngIf", o.emailControl.invalid && o.emailControl.errors.email),
                        t.xp6(5),
                        t.s9C("placeholder", o.securityQuestion),
                        t.Q6J("formControl", o.securityQuestionControl),
                        t.xp6(1),
                        t.s9C("matTooltip", t.lcZ(24, 29, "MANDATORY_SECURITY_ANSWER")),
                        t.xp6(3),
                        t.Q6J("ngIf", o.securityQuestionControl.invalid && o.securityQuestionControl.errors.required),
                        t.xp6(4),
                        t.Q6J("formControl", o.passwordControl),
                        t.xp6(5),
                        t.Oqu(t.xi3(36, 31, "INVALID_PASSWORD_LENGTH", t.DdM(38, Te))),
                        t.xp6(3),
                        t.hij("", (null == i.value ? null : i.value.length) || 0, "/20"),
                        t.xp6(1),
                        t.Q6J("ngIf", o.passwordControl.invalid && o.passwordControl.errors.required),
                        t.xp6(4),
                        t.Q6J("formControl", o.repeatPasswordControl),
                        t.xp6(3),
                        t.hij("", (null == r.value ? null : r.value.length) || 0, "/20"),
                        t.xp6(1),
                        t.Q6J("ngIf", o.repeatPasswordControl.invalid && o.repeatPasswordControl.errors.required),
                        t.xp6(1),
                        t.Q6J("ngIf", o.repeatPasswordControl.invalid && o.repeatPasswordControl.errors.notSame),
                        t.xp6(1),
                        t.Q6J("ngIf", o.repeatPasswordControl.invalid && ((null == o.repeatPasswordControl ? null : o.repeatPasswordControl.errors.minlength) || (null == o.repeatPasswordControl ? null : o.repeatPasswordControl.errors.maxlength))),
                        t.xp6(1),
                        t.Q6J("color", m.color),
                        t.xp6(2),
                        t.Oqu(t.lcZ(53, 34, "SHOW_PASSWORD_ADVICE")),
                        t.xp6(2),
                        t.Q6J("password", i.value),
                        t.xp6(2),
                        t.Q6J("ngIf", l.checked),
                        t.xp6(1),
                        t.Q6J("disabled", o.emailControl.invalid || o.securityQuestionControl.invalid || o.passwordControl.invalid || o.repeatPasswordControl.invalid || o.repeatPasswordControl.disabled),
                        t.xp6(2),
                        t.hij(" ", t.lcZ(60, 36, "BTN_CHANGE"), " ")
                    }
                },
                dependencies: [h.O5, u.Pi, Ct.ne, Ct.Xy, p.Wh, s.Fj, s.JJ, s.oH, F.Hw, f.TO, f.KE, f.bx, f.hX, f.R9, x.lW, T.a8, B.Nt, Q.gM, jt.Rr, u.X$],
                styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:25%}mat-form-field[_ngcontent-%COMP%]{padding-top:10px}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}button[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;margin-top:30px;width:60%}"]
            }),
            n
        }
        )();
        function vo(n) {
            return function(e) {
                return n.value !== e.value ? {
                    notSame: !0
                } : null
            }
        }
        var N = c(5412);
        let Wt = (()=>{
            class n {
                constructor(e) {
                    this.http = e,
                    this.hostServer = P.N.hostServer,
                    this.host = this.hostServer + "/rest/products"
                }
                get(e) {
                    return this.http.get(`${this.host}/${e}/reviews`).pipe((0,
                    C.U)(o=>o.data), (0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
                create(e, o) {
                    return this.http.put(`${this.host}/${e}/reviews`, o).pipe((0,
                    C.U)(i=>i.data), (0,
                    _.K)(i=>{
                        throw i
                    }
                    ))
                }
                patch(e) {
                    return this.http.patch(this.host + "/reviews", e).pipe((0,
                    C.U)(o=>o.data), (0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
                like(e) {
                    return this.http.post(this.host + "/reviews", {
                        id: e
                    }).pipe((0,
                    C.U)(o=>o.data), (0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.LFG(U.eN))
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )();
        function xo(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 1),
            t._uU(1, "MANDATORY_REVIEW"),
            t.qZA())
        }
        O.vI.add(g.XCy, g.OFe);
        let bo = (()=>{
            class n {
                constructor(e, o, i, r, l) {
                    this.data = e,
                    this.productReviewService = o,
                    this.dialogRef = i,
                    this.snackBar = r,
                    this.snackBarHelperService = l,
                    this.editReviewControl = new s.p4("",[s.kI.required, s.kI.minLength(1), s.kI.maxLength(160)]),
                    this.error = null
                }
                ngOnInit() {
                    this.editReviewControl.setValue(this.data.reviewData.message)
                }
                editReview() {
                    this.productReviewService.patch({
                        id: this.data.reviewData._id,
                        message: this.editReviewControl.value
                    }).subscribe(()=>{
                        this.dialogRef.close()
                    }
                    , e=>{
                        console.log(e),
                        this.error = e
                    }
                    ),
                    this.snackBarHelperService.open("CONFIRM_CHANGES_SAVED")
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(N.WI),t.Y36(Wt),t.Y36(N.so),t.Y36(ut.ux),t.Y36(J.H))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-product-review-edit"]],
                decls: 27,
                vars: 13,
                consts: [["fxLayout", "column", 1, "container", "mat-typography"], ["translate", ""], ["appearance", "outline", "color", "accent", "hintLabel", "Max 160 characters", "floatLabel", "always"], ["matInput", "", "matTextareaAutosize", "", "matAutosizeMinRows", "2", "maxlength", "160", "matAutosizeMaxRows", "4", "aria-label", "Text field to edit a product review", 3, "formControl", "placeholder", "focus"], ["textPut", ""], ["align", "end"], ["translate", "", 4, "ngIf"], ["mat-stroked-button", "", "mat-dialog-close", "", "aria-label", "Close Dialog", 1, "close-dialog"], [1, "material-icons"], ["type", "submit", "mat-raised-button", "", "color", "primary", "aria-label", "Send the review", 2, "margin-left", "5px", 3, "disabled", "click"]],
                template: function(e, o) {
                    if (1 & e && (t.TgZ(0, "mat-dialog-content")(1, "div", 0)(2, "h1", 1),
                    t._uU(3, "LABEL_EDIT_REVIEW"),
                    t.qZA(),
                    t.TgZ(4, "div")(5, "mat-form-field", 2)(6, "mat-label", 1),
                    t._uU(7, "LABEL_REVIEW"),
                    t.qZA(),
                    t.TgZ(8, "textarea", 3, 4),
                    t.NdJ("focus", function() {
                        return o.error = null
                    }),
                    t.ALo(10, "translate"),
                    t.qZA(),
                    t.TgZ(11, "mat-hint", 5),
                    t._uU(12),
                    t.qZA(),
                    t.YNc(13, xo, 2, 0, "mat-error", 6),
                    t.qZA()()()(),
                    t.TgZ(14, "mat-dialog-actions", 5)(15, "button", 7)(16, "i", 8),
                    t._uU(17, " close "),
                    t.qZA(),
                    t.TgZ(18, "span"),
                    t._uU(19),
                    t.ALo(20, "translate"),
                    t.qZA()(),
                    t.TgZ(21, "button", 9),
                    t.NdJ("click", function() {
                        return o.editReview()
                    }),
                    t.TgZ(22, "i", 8),
                    t._uU(23, " send "),
                    t.qZA(),
                    t.TgZ(24, "span"),
                    t._uU(25),
                    t.ALo(26, "translate"),
                    t.qZA()()()),
                    2 & e) {
                        const i = t.MAs(9);
                        t.xp6(8),
                        t.s9C("placeholder", t.lcZ(10, 7, "WRITE_REVIEW_PLACEHOLDER")),
                        t.Q6J("formControl", o.editReviewControl),
                        t.xp6(4),
                        t.hij("", (null == i.value ? null : i.value.length) || 0, "/160"),
                        t.xp6(1),
                        t.Q6J("ngIf", o.editReviewControl.invalid),
                        t.xp6(6),
                        t.hij(" ", t.lcZ(20, 9, "BTN_CLOSE"), ""),
                        t.xp6(2),
                        t.Q6J("disabled", o.editReviewControl.invalid),
                        t.xp6(4),
                        t.hij(" ", t.lcZ(26, 11, "BTN_SUBMIT"), "")
                    }
                },
                dependencies: [h.O5, u.Pi, p.xw, s.Fj, s.JJ, s.nD, s.oH, f.TO, f.KE, f.bx, f.hX, x.lW, B.Nt, N.ZT, N.xY, N.H8, u.X$],
                styles: ["mat-form-field[_ngcontent-%COMP%]{width:100%}"]
            }),
            n
        }
        )();
        var z = c(8729)
          , V = c(7084);
        function To(n, a) {
            if (1 & n && (t.TgZ(0, "div", 24),
            t.ALo(1, "translate"),
            t.TgZ(2, "span", 25),
            t._UZ(3, "i", 26),
            t.TgZ(4, "span", 27),
            t._uU(5),
            t.qZA()()()),
            2 & n) {
                const e = t.oxw();
                t.s9C("matTooltip", t.lcZ(1, 2, "LABEL_BONUS")),
                t.xp6(5),
                t.Oqu(e.data.productData.points)
            }
        }
        function Ao(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "div", 29)(1, "div", 30)(2, "div", 31),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.oxw(2);
                    return t.KtG("Anonymous" !== r.author && r.author === l.author && l.editReview(r))
                }),
                t.ALo(3, "translate"),
                t.TgZ(4, "cite"),
                t._uU(5),
                t.qZA(),
                t.TgZ(6, "p"),
                t._uU(7),
                t.qZA()(),
                t.TgZ(8, "div")(9, "button", 32),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.oxw(2);
                    return t.KtG(l.likeReview(r))
                }),
                t.TgZ(10, "span", 25)(11, "mat-icon"),
                t._uU(12, "thumb_up"),
                t.qZA(),
                t.TgZ(13, "span", 33),
                t._uU(14),
                t.qZA()()()()()()
            }
            if (2 & n) {
                const e = a.$implicit
                  , o = t.oxw(2);
                t.xp6(2),
                t.s9C("matTooltipDisabled", e.author !== o.author),
                t.s9C("matTooltip", t.lcZ(3, 6, "LABEL_EDIT_REVIEW")),
                t.xp6(3),
                t.Oqu(e.author),
                t.xp6(2),
                t.Oqu(e.message),
                t.xp6(2),
                t.Q6J("disabled", e.liked || !o.isLoggedIn()),
                t.xp6(5),
                t.Oqu(e.likesCount)
            }
        }
        function yo(n, a) {
            if (1 & n && (t.TgZ(0, "div"),
            t.YNc(1, Ao, 15, 8, "div", 28),
            t.ALo(2, "async"),
            t.qZA()),
            2 & n) {
                const e = t.oxw();
                t.xp6(1),
                t.Q6J("ngForOf", t.lcZ(2, 1, e.reviews$))
            }
        }
        function Zo(n, a) {
            1 & n && (t.TgZ(0, "div")(1, "span", 34),
            t._uU(2, " EMPTY_REVIEW_LIST "),
            t.qZA()())
        }
        const wo = function() {
            return {
                length: "160"
            }
        };
        O.vI.add(g.XCy, g.OFe, g.yXf, g.u8Q, g.nmd);
        let Ae = (()=>{
            class n {
                constructor(e, o, i, r, l, m) {
                    this.dialog = e,
                    this.data = o,
                    this.productReviewService = i,
                    this.userService = r,
                    this.snackBar = l,
                    this.snackBarHelperService = m,
                    this.author = "Anonymous",
                    this.reviewControl = new s.p4("",[s.kI.maxLength(160)])
                }
                ngOnInit() {
                    this.data.productData.points = Math.round(this.data.productData.price / 10),
                    this.reviews$ = this.productReviewService.get(this.data.productData.id),
                    this.userSubscription = this.userService.whoAmI().subscribe(e=>{
                        this.author = e?.email ? e.email : "Anonymous"
                    }
                    , e=>{
                        console.log(e)
                    }
                    )
                }
                ngOnDestroy() {
                    this.userSubscription && this.userSubscription.unsubscribe()
                }
                addReview(e) {
                    const o = {
                        message: e.value,
                        author: this.author
                    };
                    e.value = "",
                    this.productReviewService.create(this.data.productData.id, o).subscribe(()=>{
                        this.reviews$ = this.productReviewService.get(this.data.productData.id)
                    }
                    , i=>{
                        console.log(i)
                    }
                    ),
                    this.snackBarHelperService.open("CONFIRM_REVIEW_SAVED")
                }
                editReview(e) {
                    this.dialog.open(bo, {
                        width: "500px",
                        height: "max-content",
                        data: {
                            reviewData: e
                        }
                    }).afterClosed().subscribe(()=>this.reviews$ = this.productReviewService.get(this.data.productData.id))
                }
                likeReview(e) {
                    this.productReviewService.like(e._id).subscribe(()=>{
                        console.log("Liked " + e._id)
                    }
                    ),
                    setTimeout(()=>this.reviews$ = this.productReviewService.get(this.data.productData.id), 200)
                }
                isLoggedIn() {
                    return localStorage.getItem("token")
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(N.uw),t.Y36(N.WI),t.Y36(Wt),t.Y36(R),t.Y36(ut.ux),t.Y36(J.H))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-product-details"]],
                decls: 59,
                vars: 36,
                consts: [["fxLayout", "column", 1, "container", "mat-typography"], ["fxLayout", "row", "fxLayout.lt-sm", "column", "fxLayoutGap", "20px"], ["fxFlex", "noshrink"], [1, "img-thumbnail", 3, "src", "alt"], [3, "innerHTML"], [1, "item-price"], ["aria-label", "Bonus points when buying the product", 3, "matTooltip", 4, "ngIf"], [1, "detail-divider"], ["mat-button", "", 2, "height", "0", "position", "absolute"], ["aria-label", "Expand for Reviews", 1, "mat-elevation-z0"], ["translate", "", 2, "margin-right", "5px"], [4, "ngIf", "ngIfElse"], ["emptyResult", ""], ["translate", ""], ["appearance", "outline", "color", "accent", "floatLabel", "always"], [1, "fas", "fa-exclamation-circle"], ["translate", "", 2, "margin-left", "5px"], ["cols", "50", "matInput", "", "matTextareaAutosize", "", "matAutosizeMinRows", "2", "maxlength", "160", "matAutosizeMaxRows", "4", "aria-label", "Text field to review a product", 3, "formControl", "placeholder"], ["textPut", ""], ["align", "end"], ["align", "end", 1, "dialogAction"], ["mat-stroked-button", "", "mat-dialog-close", "", "aria-label", "Close Dialog", 1, "close-dialog", "buttons"], [1, "material-icons"], ["type", "submit", "id", "submitButton", "mat-raised-button", "", "color", "primary", "aria-label", "Send the review", 1, "buttons", 2, "margin-bottom", "5px", "margin-top", "5px", "margin-left", "5px", 3, "disabled", "click"], ["aria-label", "Bonus points when buying the product", 3, "matTooltip"], [1, "fa-2x", "fa-layers", "fa-fw"], [1, "fas", "fa-crown"], [1, "fa-layers-counter", "fa-layers-bottom-left", "fa-2x", "warn-notification", 2, "font-size", "47px"], ["class", "comment", 4, "ngFor", "ngForOf"], [1, "comment"], ["fxLayout", "row"], ["matTooltipPosition", "right", 1, "review-text", 3, "matTooltipDisabled", "matTooltip", "click"], ["mat-icon-button", "", "aria-label", "Rate a helpful review", 1, "rw-button", 3, "disabled", "click"], [1, "fa-layers-counter", "fa-layers-bottom-right", "accent-notification", 2, "font-size", "32px"], ["translate", "", 1, "noResultText"]],
                template: function(e, o) {
                    if (1 & e) {
                        const i = t.EpF();
                        t.TgZ(0, "mat-dialog-content")(1, "div", 0)(2, "div", 1)(3, "div", 2),
                        t._UZ(4, "img", 3),
                        t.qZA(),
                        t.TgZ(5, "div")(6, "h1"),
                        t._uU(7),
                        t.qZA(),
                        t._UZ(8, "div", 4)(9, "br"),
                        t.TgZ(10, "div")(11, "p", 5),
                        t._uU(12),
                        t.qZA(),
                        t.YNc(13, To, 6, 4, "div", 6),
                        t.qZA()()(),
                        t._UZ(14, "mat-divider", 7)(15, "button", 8),
                        t.TgZ(16, "mat-expansion-panel", 9)(17, "mat-expansion-panel-header")(18, "mat-panel-title")(19, "span", 10),
                        t._uU(20, "LABEL_REVIEWS"),
                        t.qZA(),
                        t.TgZ(21, "span"),
                        t._uU(22),
                        t.ALo(23, "async"),
                        t.qZA()()(),
                        t._UZ(24, "button", 8),
                        t.YNc(25, yo, 3, 3, "div", 11),
                        t.ALo(26, "async"),
                        t.YNc(27, Zo, 3, 0, "ng-template", null, 12, t.W1O),
                        t.qZA(),
                        t.TgZ(29, "div"),
                        t._UZ(30, "mat-divider", 7),
                        t.TgZ(31, "h4", 13),
                        t._uU(32, "WRITE_REVIEW"),
                        t.qZA(),
                        t.TgZ(33, "mat-form-field", 14)(34, "mat-label", 13),
                        t._uU(35, "LABEL_REVIEW"),
                        t.qZA(),
                        t.TgZ(36, "mat-hint", 13),
                        t._UZ(37, "i", 15),
                        t.TgZ(38, "em", 16),
                        t._uU(39),
                        t.ALo(40, "translate"),
                        t.qZA()(),
                        t._UZ(41, "textarea", 17, 18),
                        t.ALo(43, "translate"),
                        t.TgZ(44, "mat-hint", 19),
                        t._uU(45),
                        t.qZA()(),
                        t.TgZ(46, "mat-dialog-actions", 20)(47, "button", 21)(48, "i", 22),
                        t._uU(49, " close "),
                        t.qZA(),
                        t.TgZ(50, "span"),
                        t._uU(51),
                        t.ALo(52, "translate"),
                        t.qZA()(),
                        t.TgZ(53, "button", 23),
                        t.NdJ("click", function() {
                            t.CHM(i);
                            const l = t.MAs(42);
                            return t.KtG(o.addReview(l))
                        }),
                        t.TgZ(54, "i", 22),
                        t._uU(55, " send "),
                        t.qZA(),
                        t.TgZ(56, "span"),
                        t._uU(57),
                        t.ALo(58, "translate"),
                        t.qZA()()()()()()
                    }
                    if (2 & e) {
                        const i = t.MAs(28)
                          , r = t.MAs(42);
                        let l, m;
                        t.xp6(4),
                        t.s9C("alt", o.data.productData.name),
                        t.Q6J("src", "assets/public/images/products/" + o.data.productData.image, t.LSH),
                        t.xp6(3),
                        t.Oqu(o.data.productData.name),
                        t.xp6(1),
                        t.Q6J("innerHTML", o.data.productData.description, t.oJD),
                        t.xp6(4),
                        t.hij("", o.data.productData.price, "\xa4"),
                        t.xp6(1),
                        t.Q6J("ngIf", o.data.productData.points > 0),
                        t.xp6(9),
                        t.hij("(", null == (l = t.lcZ(23, 22, o.reviews$)) ? null : l.length, ")"),
                        t.xp6(3),
                        t.Q6J("ngIf", (null == (m = t.lcZ(26, 24, o.reviews$)) ? null : m.length) >= 1)("ngIfElse", i),
                        t.xp6(6),
                        t.Udp("display", o.isLoggedIn() ? "block" : "none"),
                        t.xp6(2),
                        t.Udp("display", o.isLoggedIn() ? "block" : "none"),
                        t.xp6(6),
                        t.Oqu(t.xi3(40, 26, "MAX_TEXTAREA_LENGTH", t.DdM(35, wo))),
                        t.xp6(2),
                        t.s9C("placeholder", t.lcZ(43, 29, "WRITE_REVIEW_PLACEHOLDER")),
                        t.Q6J("formControl", o.reviewControl),
                        t.xp6(4),
                        t.hij("", (null == r.value ? null : r.value.length) || 0, "/160"),
                        t.xp6(6),
                        t.hij(" ", t.lcZ(52, 31, "BTN_CLOSE"), ""),
                        t.xp6(2),
                        t.Udp("display", o.isLoggedIn() ? "block" : "none"),
                        t.Q6J("disabled", !r.value.trim()),
                        t.xp6(4),
                        t.hij(" ", t.lcZ(58, 33, "BTN_SUBMIT"), " ")
                    }
                },
                dependencies: [h.sg, h.O5, u.Pi, p.xw, p.SQ, p.yH, s.Fj, s.JJ, s.nD, s.oH, F.Hw, f.KE, f.bx, f.hX, x.lW, B.Nt, N.ZT, N.xY, N.H8, z.d, V.ib, V.yz, V.yK, Q.gM, h.Ov, u.X$],
                styles: [".img-thumbnail[_ngcontent-%COMP%]{height:auto;max-width:100%;padding:0;width:200px}mat-form-field[_ngcontent-%COMP%]{width:100%}p[_ngcontent-%COMP%]{word-break:break-all}.btn-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2){left:530px;width:50px}.detail-divider[_ngcontent-%COMP%]{margin-bottom:12px;margin-top:12px}.rw-button[_ngcontent-%COMP%]{margin-left:8px}.comment[_ngcontent-%COMP%]{margin-bottom:8px}.review-link[_ngcontent-%COMP%]{font-size:11px;margin-top:-10px;text-decoration:none}#submitButton[_ngcontent-%COMP%]{float:right}.item-price[_ngcontent-%COMP%]{float:left;margin-right:40px;margin-top:8px}.noResultText[_ngcontent-%COMP%]{display:block;font-size:small;margin-left:auto;margin-right:auto;text-align:center}.dialogAction[_ngcontent-%COMP%]{margin-bottom:0!important}.buttons[_ngcontent-%COMP%]{padding-left:13px;padding-right:13px}"]
            }),
            n
        }
        )()
          , Lt = (()=>{
            class n {
                constructor(e) {
                    this.http = e,
                    this.hostServer = P.N.hostServer,
                    this.host = this.hostServer + "/api/Products"
                }
                search(e) {
                    return this.http.get(`${this.hostServer}/rest/products/search?q=${e}`).pipe((0,
                    C.U)(o=>o.data), (0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
                find(e) {
                    return this.http.get(this.host + "/", {
                        params: e
                    }).pipe((0,
                    C.U)(o=>o.data), (0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
                get(e) {
                    return this.http.get(`${this.host}/${e}?d=${encodeURIComponent((new Date).toDateString())}`).pipe((0,
                    C.U)(o=>o.data), (0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
                put(e, o) {
                    return this.http.put(`${this.host}/${e}`, o).pipe((0,
                    C.U)(i=>i.data), (0,
                    _.K)(i=>{
                        throw i
                    }
                    ))
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.LFG(U.eN))
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )();
        var xt = c(8739)
          , Pt = c(567)
          , ye = c(42);
        let st = (()=>{
            class n {
                constructor(e) {
                    this.ngZone = e,
                    this.ngZone.runOutsideAngular(()=>{
                        this._socket = "." === P.N.hostServer ? (0,
                        ye.io)(window.location.origin, {
                            path: (window.location.pathname.endsWith("/") ? window.location.pathname : window.location.pathname + "/") + "socket.io"
                        }) : (0,
                        ye.io)(P.N.hostServer)
                    }
                    )
                }
                socket() {
                    return this._socket
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.LFG(t.R0b))
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )()
          , Kt = (()=>{
            class n {
                constructor(e) {
                    this.http = e,
                    this.hostServer = P.N.hostServer,
                    this.host = this.hostServer + "/api/Quantitys"
                }
                getAll() {
                    return this.http.get(this.host + "/").pipe((0,
                    C.U)(e=>e.data), (0,
                    _.K)(e=>{
                        throw e
                    }
                    ))
                }
                put(e, o) {
                    return this.http.put(`${this.host}/${e}`, o).pipe((0,
                    C.U)(i=>i.data), (0,
                    _.K)(i=>{
                        throw i
                    }
                    ))
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.LFG(U.eN))
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )();
        var zt = c(782);
        function So(n, a) {
            if (1 & n && (t.TgZ(0, "div")(1, "span"),
            t._uU(2),
            t.ALo(3, "translate"),
            t.qZA(),
            t._UZ(4, "span", 9),
            t.qZA()),
            2 & n) {
                const e = t.oxw();
                t.xp6(2),
                t.hij("", t.lcZ(3, 2, "TITLE_SEARCH_RESULTS"), " - "),
                t.xp6(2),
                t.Q6J("innerHTML", e.searchValue, t.oJD)
            }
        }
        function ko(n, a) {
            1 & n && (t.TgZ(0, "div"),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & n && (t.xp6(1),
            t.Oqu(t.lcZ(2, 1, "TITLE_ALL_PRODUCTS")))
        }
        const Io = function(n) {
            return {
                quantity: n
            }
        };
        function Oo(n, a) {
            if (1 & n && (t.TgZ(0, "div", 24)(1, "span", 25),
            t._uU(2, "LABEL_ONLY_QUANTITY_LEFT"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw().$implicit;
                t.xp6(1),
                t.Q6J("translateParams", t.VKq(1, Io, e.quantity))
            }
        }
        function Uo(n, a) {
            1 & n && (t.TgZ(0, "div", 26)(1, "span", 27),
            t._uU(2, "LABEL_SOLD_OUT"),
            t.qZA()())
        }
        function Lo(n, a) {
            if (1 & n && (t.TgZ(0, "span"),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = t.oxw().$implicit;
                t.xp6(1),
                t.hij("", e.price, "\xa4")
            }
        }
        function Po(n, a) {
            if (1 & n && (t.TgZ(0, "span")(1, "s"),
            t._uU(2),
            t.qZA(),
            t._uU(3),
            t.qZA()),
            2 & n) {
                const e = t.oxw().$implicit;
                t.xp6(2),
                t.Oqu(e.price),
                t.xp6(1),
                t.hij(" ", e.deluxePrice, "\xa4")
            }
        }
        function No(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "button", 28),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw().$implicit
                      , r = t.oxw(2);
                    return t.KtG(r.addToBasket(i.id))
                }),
                t.TgZ(1, "span", 27),
                t._uU(2, "ADD_BASKET"),
                t.qZA()()
            }
        }
        function Eo(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "mat-grid-tile")(1, "mat-card", 13),
                t.YNc(2, Oo, 3, 3, "div", 14),
                t.YNc(3, Uo, 3, 0, "div", 15),
                t.TgZ(4, "div", 16),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.oxw(2);
                    return t.KtG(l.showDetail(r))
                }),
                t.TgZ(5, "div", 17),
                t._UZ(6, "img", 18),
                t.qZA(),
                t.TgZ(7, "div", 19)(8, "div", 20),
                t._uU(9),
                t.qZA(),
                t.TgZ(10, "div", 21),
                t.YNc(11, Lo, 2, 1, "span", 3),
                t.YNc(12, Po, 4, 2, "span", 3),
                t.qZA()()(),
                t.TgZ(13, "div", 22),
                t.YNc(14, No, 3, 0, "button", 23),
                t.qZA()()()
            }
            if (2 & n) {
                const e = a.$implicit
                  , o = t.oxw(2);
                t.xp6(1),
                t.Udp("width", "100%"),
                t.xp6(1),
                t.Q6J("ngIf", e.quantity <= 5 && e.quantity > 0),
                t.xp6(1),
                t.Q6J("ngIf", e.quantity <= 0),
                t.xp6(3),
                t.s9C("alt", e.name),
                t.Q6J("src", "assets/public/images/products/" + e.image, t.LSH),
                t.xp6(3),
                t.hij(" ", e.name, " "),
                t.xp6(2),
                t.Q6J("ngIf", !o.isDeluxe() || e.price === e.deluxePrice),
                t.xp6(1),
                t.Q6J("ngIf", o.isDeluxe() && e.price !== e.deluxePrice),
                t.xp6(2),
                t.Q6J("ngIf", o.isLoggedIn())
            }
        }
        function Mo(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "div")(1, "mat-grid-list", 10, 11),
                t.NdJ("resize", function(i) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.onResize(i))
                }, !1, t.Jf7),
                t.YNc(3, Eo, 15, 10, "mat-grid-tile", 12),
                t.ALo(4, "async"),
                t.qZA()()
            }
            if (2 & n) {
                const e = t.oxw();
                t.xp6(1),
                t.Q6J("cols", e.breakpoint),
                t.xp6(2),
                t.Q6J("ngForOf", t.lcZ(4, 2, e.gridDataSource))
            }
        }
        function Do(n, a) {
            1 & n && (t.TgZ(0, "mat-card", 29),
            t._UZ(1, "img", 30),
            t.TgZ(2, "mat-card-title")(3, "span", 31),
            t._uU(4, " NO_SEARCH_RESULT "),
            t.qZA()(),
            t.TgZ(5, "mat-card-content")(6, "span", 31),
            t._uU(7, " EMPTY_SEARCH_RESULT "),
            t.qZA()()())
        }
        O.vI.add(g.Mdf, g.qD8);
        let $t = (()=>{
            class n {
                constructor(e, o, i, r, l, m, v, A, q, Y, dt, Zt, wt) {
                    this.deluxeGuard = e,
                    this.dialog = o,
                    this.productService = i,
                    this.quantityService = r,
                    this.basketService = l,
                    this.translateService = m,
                    this.router = v,
                    this.route = A,
                    this.sanitizer = q,
                    this.ngZone = Y,
                    this.io = dt,
                    this.snackBarHelperService = Zt,
                    this.cdRef = wt,
                    this.displayedColumns = ["Image", "Product", "Description", "Price", "Select"],
                    this.pageSizeOptions = [],
                    this.resultsLength = 0,
                    this.paginator = null,
                    this.breakpoint = 6,
                    this.emptyState = !1
                }
                ngAfterViewInit() {
                    const e = this.productService.search("")
                      , o = this.quantityService.getAll();
                    (0,
                    Pt.D)([o, e]).subscribe(([i,r])=>{
                        const l = [];
                        this.tableData = r,
                        this.trustProductDescription(r);
                        for (const v of r)
                            l.push({
                                name: v.name,
                                price: v.price,
                                deluxePrice: v.deluxePrice,
                                id: v.id,
                                image: v.image,
                                description: v.description
                            });
                        for (const v of i) {
                            const A = l.find(q=>q.id === v.ProductId);
                            void 0 !== A && (A.quantity = v.quantity)
                        }
                        this.dataSource = new d.by(l);
                        for (let v = 1; v <= Math.ceil(this.dataSource.data.length / 12); v++)
                            this.pageSizeOptions.push(12 * v);
                        this.paginator.pageSizeOptions = this.pageSizeOptions,
                        this.dataSource.paginator = this.paginator,
                        this.gridDataSource = this.dataSource.connect(),
                        this.resultsLength = this.dataSource.data.length,
                        this.filterTable(),
                        this.routerSubscription = this.router.events.subscribe(()=>{
                            this.filterTable()
                        }
                        );
                        const m = this.route.snapshot.queryParams.challenge;
                        m && this.route.snapshot.url.join("").match(/hacking-instructor/) && this.startHackingInstructor(decodeURIComponent(m)),
                        window.innerWidth < 2600 ? (this.breakpoint = 4,
                        window.innerWidth < 1740 && (this.breakpoint = 3,
                        window.innerWidth < 1280 && (this.breakpoint = 2,
                        window.innerWidth < 850 && (this.breakpoint = 1)))) : this.breakpoint = 6,
                        this.cdRef.detectChanges()
                    }
                    , i=>{
                        console.log(i)
                    }
                    )
                }
                trustProductDescription(e) {
                    for (let o = 0; o < e.length; o++)
                        e[o].description = this.sanitizer.bypassSecurityTrustHtml(e[o].description)
                }
                ngOnDestroy() {
                    this.routerSubscription && this.routerSubscription.unsubscribe(),
                    this.productSubscription && this.productSubscription.unsubscribe(),
                    this.dataSource && this.dataSource.disconnect()
                }
                filterTable() {
                    let e = this.route.snapshot.queryParams.q;
                    e ? (e = e.trim(),
                    this.ngZone.runOutsideAngular(()=>{
                        this.io.socket().emit("verifyLocalXssChallenge", e)
                    }
                    ),
                    this.dataSource.filter = e.toLowerCase(),
                    this.searchValue = this.sanitizer.bypassSecurityTrustHtml(e),
                    this.gridDataSource.subscribe(o=>{
                        this.emptyState = 0 === o.length
                    }
                    )) : (this.dataSource.filter = "",
                    this.searchValue = void 0,
                    this.emptyState = !1)
                }
                startHackingInstructor(e) {
                    console.log(`Starting instructions for challenge "${e}"`),
                    Promise.resolve().then(c.bind(c, 1096)).then(o=>{
                        o.startHackingInstructorFor(e)
                    }
                    )
                }
                showDetail(e) {
                    this.dialog.open(Ae, {
                        width: "500px",
                        height: "max-content",
                        data: {
                            productData: e
                        }
                    })
                }
                addToBasket(e) {
                    this.basketService.find(Number(sessionStorage.getItem("bid"))).subscribe(o=>{
                        const i = o.Products;
                        let r = !1;
                        for (let l = 0; l < i.length; l++)
                            if (i[l].id === e) {
                                r = !0,
                                this.basketService.get(i[l].BasketItem.id).subscribe(m=>{
                                    this.basketService.put(m.id, {
                                        quantity: m.quantity + 1
                                    }).subscribe(A=>{
                                        this.productService.get(A.ProductId).subscribe(q=>{
                                            this.translateService.get("BASKET_ADD_SAME_PRODUCT", {
                                                product: q.name
                                            }).subscribe(Y=>{
                                                this.snackBarHelperService.open(Y, "confirmBar"),
                                                this.basketService.updateNumberOfCartItems()
                                            }
                                            , Y=>{
                                                this.snackBarHelperService.open(Y, "confirmBar"),
                                                this.basketService.updateNumberOfCartItems()
                                            }
                                            )
                                        }
                                        , q=>{
                                            console.log(q)
                                        }
                                        )
                                    }
                                    , A=>{
                                        this.snackBarHelperService.open(A.error?.error, "errorBar"),
                                        console.log(A)
                                    }
                                    )
                                }
                                , m=>{
                                    console.log(m)
                                }
                                );
                                break
                            }
                        r || this.basketService.save({
                            ProductId: e,
                            BasketId: sessionStorage.getItem("bid"),
                            quantity: 1
                        }).subscribe(l=>{
                            this.productService.get(l.ProductId).subscribe(m=>{
                                this.translateService.get("BASKET_ADD_PRODUCT", {
                                    product: m.name
                                }).subscribe(v=>{
                                    this.snackBarHelperService.open(v, "confirmBar"),
                                    this.basketService.updateNumberOfCartItems()
                                }
                                , v=>{
                                    this.snackBarHelperService.open(v, "confirmBar"),
                                    this.basketService.updateNumberOfCartItems()
                                }
                                )
                            }
                            , m=>{
                                console.log(m)
                            }
                            )
                        }
                        , l=>{
                            this.snackBarHelperService.open(l.error?.error, "errorBar"),
                            console.log(l)
                        }
                        )
                    }
                    , o=>{
                        console.log(o)
                    }
                    )
                }
                isLoggedIn() {
                    return localStorage.getItem("token")
                }
                onResize(e) {
                    e.target.innerWidth < 2600 ? (this.breakpoint = 4,
                    e.target.innerWidth < 1740 && (this.breakpoint = 3,
                    e.target.innerWidth < 1280 && (this.breakpoint = 2,
                    e.target.innerWidth < 850 && (this.breakpoint = 1)))) : this.breakpoint = 6
                }
                isDeluxe() {
                    return this.deluxeGuard.isDeluxe()
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(ht),t.Y36(N.uw),t.Y36(Lt),t.Y36(Kt),t.Y36(X),t.Y36(u.sK),t.Y36(L.F0),t.Y36(L.gz),t.Y36(k.H7),t.Y36(t.R0b),t.Y36(st),t.Y36(J.H),t.Y36(t.sBO))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-search-result"]],
                viewQuery: function(e, o) {
                    if (1 & e && t.Gf(xt.NW, 7),
                    2 & e) {
                        let i;
                        t.iGM(i = t.CRH()) && (o.paginator = i.first)
                    }
                },
                decls: 12,
                vars: 7,
                consts: [["fxLayoutAlign", "center"], [1, "table-container", "custom-slate"], [1, "heading", "mat-elevation-z6"], [4, "ngIf"], ["id", "search-result-heading"], [4, "ngIf", "ngIfElse"], ["emptyResult", ""], ["color", "accent", 1, "mat-elevation-z6", 3, "pageSize", "pageSizeOptions", "length"], ["paginator", ""], ["id", "searchValue", 3, "innerHTML"], ["gutterSize", "30px", 3, "cols", "resize"], ["table", ""], [4, "ngFor", "ngForOf"], [1, "mat-elevation-z6", "ribbon-card"], ["class", "ribbon ribbon-top-left", 4, "ngIf"], ["class", "ribbon ribbon-top-left ribbon-sold", 4, "ngIf"], ["aria-label", "Click for more information about the product", "matTooltip", "Click for more information", "matTooltipPosition", "above", 1, "product", 3, "click"], ["fxFlexAlign", "center", "fxFlex", "60%", 1, "img-container"], ["mat-card-image", "", "role", "button", 1, "img-responsive", "img-thumbnail", 3, "src", "alt"], ["fxFlexAlign", "center", "fxFlex", "40%"], [1, "item-name"], [1, "item-price"], [2, "display", "flex", "justify-content", "center"], ["aria-label", "Add to Basket", "class", "btn-basket", "color", "primary", "mat-button", "", "mat-raised-button", "", 3, "click", 4, "ngIf"], [1, "ribbon", "ribbon-top-left"], ["translate", "", 3, "translateParams"], [1, "ribbon", "ribbon-top-left", "ribbon-sold"], ["translate", ""], ["aria-label", "Add to Basket", "color", "primary", "mat-button", "", "mat-raised-button", "", 1, "btn-basket", 3, "click"], [1, "mat-elevation-z6", "emptyState"], ["alt", " No results found", "src", "assets/public/images/products/no-results.png", 1, "img-responsive", "noResult"], ["translate", "", 1, "noResultText"]],
                template: function(e, o) {
                    if (1 & e && (t.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2),
                    t.YNc(3, So, 5, 4, "div", 3),
                    t.YNc(4, ko, 3, 3, "div", 3),
                    t._UZ(5, "div", 4),
                    t.qZA(),
                    t.YNc(6, Mo, 5, 4, "div", 5),
                    t.YNc(7, Do, 8, 0, "ng-template", null, 6, t.W1O),
                    t._UZ(9, "mat-divider")(10, "mat-paginator", 7, 8),
                    t.qZA()()),
                    2 & e) {
                        const i = t.MAs(8);
                        t.xp6(3),
                        t.Q6J("ngIf", o.searchValue),
                        t.xp6(1),
                        t.Q6J("ngIf", !o.searchValue),
                        t.xp6(2),
                        t.Q6J("ngIf", !o.emptyState)("ngIfElse", i),
                        t.xp6(4),
                        t.Q6J("pageSize", 12)("pageSizeOptions", o.pageSizeOptions)("length", o.resultsLength)
                    }
                },
                dependencies: [h.sg, h.O5, u.Pi, p.Wh, p.XD, p.yH, x.lW, xt.NW, T.a8, T.dn, T.n5, T.G2, z.d, Q.gM, zt.Il, zt.DX, h.Ov, u.X$],
                styles: ['.table-container[_ngcontent-%COMP%]{min-width:350px;width:80%}.heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);font-size:x-large;justify-content:center;padding:12px 20px}.img-thumbnail[_ngcontent-%COMP%]{width:100%}.product[_ngcontent-%COMP%]{cursor:pointer}.btn-basket[_ngcontent-%COMP%]{bottom:10%}mat-card[_ngcontent-%COMP%]{height:calc(100% - 70px)}.item-price[_ngcontent-%COMP%]{font-size:initial;margin-top:12px;text-align:center}.item-name[_ngcontent-%COMP%]{font-size:large;text-align:center}.emptyState[_ngcontent-%COMP%]{display:block;height:auto!important;margin:20px auto;width:50%}.noResult[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;width:60%}.noResultText[_ngcontent-%COMP%]{display:block;margin-top:10px;text-align:center}.ribbon-card[_ngcontent-%COMP%]{position:relative}.ribbon[_ngcontent-%COMP%]{height:150px;overflow:hidden;pointer-events:none;position:absolute;width:150px}.ribbon[_ngcontent-%COMP%]:before{content:"";display:block;position:absolute;z-index:-1}.ribbon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{box-shadow:0 5px 10px #0000001a;color:#fff;display:block;font:700 18px/1 Lato,sans-serif;padding:15px 0;position:absolute;text-align:center;text-shadow:0 1px 1px rgba(0,0,0,.2);width:225px}.ribbon-top-left[_ngcontent-%COMP%]{left:-10px;top:-10px}.ribbon-top-left[_ngcontent-%COMP%]:before{border-left-color:transparent;border-top-color:transparent;right:0;top:0}.ribbon-top-left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{right:-25px;top:30px;transform:rotate(-45deg)}']
            }),
            n
        }
        )()
          , Vt = (()=>{
            class n {
                get nativeWindow() {
                    return function qo() {
                        return window
                    }()
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )();
        var Xt = c(6709);
        function Fo(n, a) {
            if (1 & n && (t.TgZ(0, "div", 20),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = t.oxw();
                t.xp6(1),
                t.Oqu(e.error)
            }
        }
        function Bo(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 5),
            t._uU(1, "MANDATORY_EMAIL"),
            t.qZA())
        }
        function Ro(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "button", 21),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.hide = !i.hide)
                }),
                t.ALo(1, "translate"),
                t._UZ(2, "i", 22),
                t.qZA()
            }
            2 & n && t.s9C("matTooltip", t.lcZ(1, 1, "SHOW_PWD_TOOLTIP"))
        }
        function Yo(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "button", 23),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.hide = !i.hide)
                }),
                t.ALo(1, "translate"),
                t._UZ(2, "i", 24),
                t.qZA()
            }
            2 & n && t.s9C("matTooltip", t.lcZ(1, 1, "HIDE_PWD_TOOLTIP"))
        }
        function Jo(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 5),
            t._uU(1, "MANDATORY_PASSWORD"),
            t.qZA())
        }
        function Qo(n, a) {
            1 & n && (t.TgZ(0, "div", 25)(1, "div", 26),
            t._UZ(2, "div"),
            t.qZA(),
            t.TgZ(3, "div", 27),
            t._uU(4, "LABEL_OR"),
            t.qZA(),
            t.TgZ(5, "div", 26),
            t._UZ(6, "div"),
            t.qZA()())
        }
        function Ho(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "button", 28),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.googleLogin())
                }),
                t._UZ(1, "i", 29),
                t._uU(2),
                t.ALo(3, "translate"),
                t.qZA()
            }
            2 & n && (t.xp6(2),
            t.hij(" ", t.lcZ(3, 1, "BTN_GOOGLE_LOGIN"), " "))
        }
        O.vI.add(g.DD4, g.Mdf, g.Aq, Z.xYR);
        let jo = (()=>{
            class n {
                constructor(e, o, i, r, l, m, v, A) {
                    this.configurationService = e,
                    this.userService = o,
                    this.windowRefService = i,
                    this.cookieService = r,
                    this.router = l,
                    this.formSubmitService = m,
                    this.basketService = v,
                    this.ngZone = A,
                    this.emailControl = new s.p4("",[s.kI.required]),
                    this.passwordControl = new s.p4("",[s.kI.required, s.kI.minLength(1)]),
                    this.hide = !0,
                    this.rememberMe = new s.p4(!1),
                    this.clientId = "1005568560502-6hm16lef8oh46hr2d98vf2ohlnj4nfhq.apps.googleusercontent.com",
                    this.oauthUnavailable = !0,
                    this.redirectUri = ""
                }
                ngOnInit() {
                    const e = localStorage.getItem("email");
                    e ? (this.user = {},
                    this.user.email = e,
                    this.rememberMe.setValue(!0)) : this.rememberMe.setValue(!1),
                    this.redirectUri = `${this.windowRefService.nativeWindow.location.protocol}//${this.windowRefService.nativeWindow.location.host}`,
                    this.configurationService.getApplicationConfiguration().subscribe(o=>{
                        if (o?.application?.googleOauth) {
                            this.clientId = o.application.googleOauth.clientId;
                            const i = o.application.googleOauth.authorizedRedirects.find(r=>r.uri === this.redirectUri);
                            i ? (this.oauthUnavailable = !1,
                            this.redirectUri = i.proxy ? i.proxy : i.uri) : (this.oauthUnavailable = !0,
                            console.log(this.redirectUri + " is not an authorized redirect URI for this application."))
                        }
                    }
                    , o=>{
                        console.log(o)
                    }
                    ),
                    this.formSubmitService.attachEnterKeyHandler("login-form", "loginButton", ()=>{
                        this.login()
                    }
                    )
                }
                login() {
                    var e = this;
                    this.user = {},
                    this.user.email = this.emailControl.value,
                    this.user.password = this.passwordControl.value,
                    this.userService.login(this.user).subscribe(o=>{
                        localStorage.setItem("token", o.token);
                        const i = new Date;
                        i.setHours(i.getHours() + 8),
                        this.cookieService.put("token", o.token, {
                            expires: i
                        }),
                        sessionStorage.setItem("bid", o.bid),
                        this.basketService.updateNumberOfCartItems(),
                        this.userService.isLoggedIn.next(!0),
                        this.ngZone.run((0,
                        w.Z)(function*() {
                            return yield e.router.navigate(["/search"])
                        }))
                    }
                    , ({error: o})=>{
                        if (o.status && o.data && "totp_token_required" === o.status)
                            return localStorage.setItem("totp_tmp_token", o.data.tmpToken),
                            void this.ngZone.run((0,
                            w.Z)(function*() {
                                return yield e.router.navigate(["/2fa/enter"])
                            }));
                        localStorage.removeItem("token"),
                        this.cookieService.remove("token"),
                        sessionStorage.removeItem("bid"),
                        this.error = o,
                        this.userService.isLoggedIn.next(!1),
                        this.emailControl.markAsPristine(),
                        this.passwordControl.markAsPristine()
                    }
                    ),
                    this.rememberMe.value ? localStorage.setItem("email", this.user.email) : localStorage.removeItem("email")
                }
                googleLogin() {
                    this.windowRefService.nativeWindow.location.replace(`https://accounts.google.com/o/oauth2/v2/auth?client_id=${this.clientId}&response_type=token&scope=email&redirect_uri=${this.redirectUri}`)
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(b.e),t.Y36(R),t.Y36(Vt),t.Y36(I.N_),t.Y36(L.F0),t.Y36(rt),t.Y36(X),t.Y36(t.R0b))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-login"]],
                decls: 35,
                vars: 18,
                consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], ["class", "error", 4, "ngIf"], ["id", "login-form", 1, "form-container"], ["color", "accent", "appearance", "outline"], ["translate", ""], ["id", "email", "name", "email", "matInput", "", "placeholder", "", "aria-label", "Text field for the login email", 3, "formControl", "focus"], ["email", ""], ["translate", "", 4, "ngIf"], ["id", "password", "name", "password", "matInput", "", "placeholder", "", "aria-label", "Text field for the login password", 3, "formControl", "type", "focus"], ["password", ""], ["mat-icon-button", "", "matSuffix", "", "aria-label", "Button to display the password", "matTooltipPosition", "right", 3, "matTooltip", "click", 4, "ngIf"], ["mat-icon-button", "", "matSuffix", "", "aria-label", "Button to hide the password", "matTooltipPosition", "right", 3, "matTooltip", "click", 4, "ngIf"], ["routerLink", "/forgot-password", "translate", "", 1, "primary-link", "forgot-pw"], ["type", "submit", "id", "loginButton", "mat-raised-button", "", "color", "primary", "aria-label", "Login", 3, "disabled", "click"], ["id", "rememberMe", "aria-label", "Checkbox to stay logged in or not logged in", 3, "formControl"], ["class", "breakLine", 4, "ngIf"], ["id", "loginButtonGoogle", "mat-raised-button", "", "color", "accent", "aria-label", "Login with Google", "class", "google-button", 3, "click", 4, "ngIf"], ["id", "newCustomerLink"], ["routerLink", "/register", "translate", "", 1, "primary-link"], [1, "error"], ["mat-icon-button", "", "matSuffix", "", "aria-label", "Button to display the password", "matTooltipPosition", "right", 3, "matTooltip", "click"], ["aria-label", "Eye", 1, "fas", "fa-eye"], ["mat-icon-button", "", "matSuffix", "", "aria-label", "Button to hide the password", "matTooltipPosition", "right", 3, "matTooltip", "click"], ["aria-label", "Eye Slash", 1, "fas", "fa-eye-slash"], [1, "breakLine"], [1, "line"], ["translate", "", 1, "textOnLine"], ["id", "loginButtonGoogle", "mat-raised-button", "", "color", "accent", "aria-label", "Login with Google", 1, "google-button", 3, "click"], [1, "fab", "fa-google", "fa-lg"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "div", 0)(1, "mat-card", 1)(2, "h1"),
                    t._uU(3, "Login"),
                    t.qZA(),
                    t.YNc(4, Fo, 2, 1, "div", 2),
                    t.TgZ(5, "div", 3)(6, "mat-form-field", 4)(7, "mat-label", 5),
                    t._uU(8, "LABEL_EMAIL"),
                    t.qZA(),
                    t.TgZ(9, "input", 6, 7),
                    t.NdJ("focus", function() {
                        return o.error = null
                    }),
                    t.qZA(),
                    t.YNc(11, Bo, 2, 0, "mat-error", 8),
                    t.qZA(),
                    t.TgZ(12, "mat-form-field", 4)(13, "mat-label", 5),
                    t._uU(14, "LABEL_PASSWORD"),
                    t.qZA(),
                    t.TgZ(15, "input", 9, 10),
                    t.NdJ("focus", function() {
                        return o.error = null
                    }),
                    t.qZA(),
                    t.YNc(17, Ro, 3, 3, "button", 11),
                    t.YNc(18, Yo, 3, 3, "button", 12),
                    t.YNc(19, Jo, 2, 0, "mat-error", 8),
                    t.qZA(),
                    t.TgZ(20, "a", 13),
                    t._uU(21, "FORGOT_PASSWORD"),
                    t.qZA(),
                    t.TgZ(22, "button", 14),
                    t.NdJ("click", function() {
                        return o.login()
                    }),
                    t.TgZ(23, "mat-icon"),
                    t._uU(24, " exit_to_app "),
                    t.qZA(),
                    t._uU(25),
                    t.ALo(26, "translate"),
                    t.qZA(),
                    t.TgZ(27, "mat-checkbox", 15),
                    t._uU(28),
                    t.ALo(29, "translate"),
                    t.qZA(),
                    t.YNc(30, Qo, 7, 0, "div", 16),
                    t.YNc(31, Ho, 4, 3, "button", 17),
                    t.TgZ(32, "div", 18)(33, "a", 19),
                    t._uU(34, "NO_CUSTOMER"),
                    t.qZA()()()()()),
                    2 & e && (t.xp6(4),
                    t.Q6J("ngIf", o.error),
                    t.xp6(5),
                    t.Q6J("formControl", o.emailControl),
                    t.xp6(2),
                    t.Q6J("ngIf", o.emailControl.invalid),
                    t.xp6(4),
                    t.Q6J("formControl", o.passwordControl)("type", o.hide ? "password" : "text"),
                    t.xp6(2),
                    t.Q6J("ngIf", o.hide),
                    t.xp6(1),
                    t.Q6J("ngIf", !o.hide),
                    t.xp6(1),
                    t.Q6J("ngIf", o.passwordControl.invalid),
                    t.xp6(3),
                    t.Q6J("disabled", !o.emailControl.value || !o.passwordControl.value),
                    t.xp6(3),
                    t.hij(" ", t.lcZ(26, 14, "BTN_LOGIN"), " "),
                    t.xp6(2),
                    t.Q6J("formControl", o.rememberMe),
                    t.xp6(1),
                    t.hij(" ", t.lcZ(29, 16, "REMEMBER_ME"), " "),
                    t.xp6(2),
                    t.Q6J("ngIf", !o.oauthUnavailable),
                    t.xp6(1),
                    t.Q6J("ngIf", !o.oauthUnavailable))
                },
                dependencies: [h.O5, L.rH, u.Pi, p.Wh, s.Fj, s.JJ, s.oH, F.Hw, f.TO, f.KE, f.hX, f.R9, x.lW, T.a8, B.Nt, Xt.oG, Q.gM, u.X$],
                styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:25%}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}.forgot-pw[_ngcontent-%COMP%]{font-size:11px;margin-top:-15px}mat-checkbox[_ngcontent-%COMP%]{margin-bottom:20px;margin-left:20%;margin-top:5px}mat-form-field[_ngcontent-%COMP%]{padding-top:10px}mat-form-field[_ngcontent-%COMP%]:nth-child(2){padding-bottom:20px}#loginButton[_ngcontent-%COMP%], #loginButtonGoogle[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}.breakLine[_ngcontent-%COMP%]{display:table}.breakLine[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:table-cell;white-space:nowrap}.line[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-bottom:1px solid #c0c0c0;height:1px}.textOnLine[_ngcontent-%COMP%]{padding:0 5px}.line[_ngcontent-%COMP%]{vertical-align:middle;width:50%}#newCustomerLink[_ngcontent-%COMP%]{align-self:center;font-size:12px;margin-top:40px}[_nghost-%COMP%]     .mat-form-field-suffix{margin-bottom:auto!important;margin-top:auto!important}[_nghost-%COMP%]     .mat-icon-button{height:40px!important;width:24px!important}"]
            }),
            n
        }
        )();
        O.vI.add(g.OFe);
        let Wo = (()=>{
            class n {
                constructor(e, o) {
                    this.dialogData = e,
                    this.userService = o
                }
                ngOnInit() {
                    this.userService.get(this.dialogData.id).subscribe(e=>{
                        this.user = e
                    }
                    , e=>{
                        console.log(e)
                    }
                    )
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(N.WI),t.Y36(R))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-user-details"]],
                decls: 29,
                vars: 10,
                consts: [[1, "mat-typography"], ["fxLayout", "column", 1, "container"], ["fxLayout", "row", "fxLayoutGap", "10px"], ["translate", "LABEL_EMAIL"], ["translate", "LABEL_CREATED_AT"], ["translate", "LABEL_UPDATED_AT"], ["align", "end", 1, "dialogAction"], ["mat-button", "", 2, "height", "0", "position", "absolute"], ["mat-stroked-button", "", "mat-dialog-close", "", "aria-label", "Close Dialog", 1, "close-dialog", "buttons"], [1, "material-icons"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "mat-dialog-content", 0)(1, "header")(2, "h1"),
                    t._uU(3),
                    t.ALo(4, "translate"),
                    t.qZA()(),
                    t._UZ(5, "mat-divider"),
                    t.TgZ(6, "div", 1)(7, "div", 2)(8, "div"),
                    t._UZ(9, "strong", 3),
                    t.TgZ(10, "p"),
                    t._uU(11),
                    t.qZA()()(),
                    t.TgZ(12, "div", 2)(13, "div"),
                    t._UZ(14, "strong", 4),
                    t.TgZ(15, "p"),
                    t._uU(16),
                    t.qZA()(),
                    t.TgZ(17, "div"),
                    t._UZ(18, "strong", 5),
                    t.TgZ(19, "p"),
                    t._uU(20),
                    t.qZA()()()(),
                    t.TgZ(21, "mat-dialog-actions", 6),
                    t._UZ(22, "button", 7),
                    t.TgZ(23, "button", 8)(24, "i", 9),
                    t._uU(25, " close "),
                    t.qZA(),
                    t.TgZ(26, "span"),
                    t._uU(27),
                    t.ALo(28, "translate"),
                    t.qZA()()()()),
                    2 & e && (t.xp6(3),
                    t.AsE("", t.lcZ(4, 6, "LABEL_USER"), " #", null == o.user ? null : o.user.id, ""),
                    t.xp6(8),
                    t.Oqu(null == o.user ? null : o.user.email),
                    t.xp6(5),
                    t.Oqu(null == o.user ? null : o.user.createdAt),
                    t.xp6(4),
                    t.Oqu(null == o.user ? null : o.user.updatedAt),
                    t.xp6(7),
                    t.hij(" ", t.lcZ(28, 8, "BTN_CLOSE"), ""))
                },
                dependencies: [u.Pi, p.xw, p.SQ, x.lW, N.ZT, N.xY, N.H8, z.d, u.X$],
                styles: ["mat-divider[_ngcontent-%COMP%]{margin-bottom:10px}.dialogAction[_ngcontent-%COMP%]{margin-bottom:0!important}"]
            }),
            n
        }
        )()
          , Ko = (()=>{
            class n {
                constructor(e) {
                    this.dialogData = e
                }
                ngOnInit() {
                    this.feedback = this.dialogData.feedback,
                    this.id = this.dialogData.id
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(N.WI))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-feedback-details"]],
                decls: 23,
                vars: 11,
                consts: [[1, "mat-typography"], ["fxLayout", "column", 1, "container"], ["fxLayout", "row", "fxLayoutGap", "10px"], [2, "margin-top", "10px !important"], [3, "innerHTML"], ["align", "end", 1, "dialogAction"], ["mat-button", "", 2, "height", "0", "position", "absolute"], ["mat-stroked-button", "", "mat-dialog-close", "", "aria-label", "Close Dialog", 1, "close-dialog", "buttons"], [1, "material-icons"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "mat-dialog-content", 0)(1, "header")(2, "h1"),
                    t._uU(3),
                    t.ALo(4, "translate"),
                    t.qZA()(),
                    t._UZ(5, "mat-divider"),
                    t.TgZ(6, "div", 1)(7, "div", 2)(8, "span"),
                    t._uU(9),
                    t.ALo(10, "translate"),
                    t.qZA(),
                    t.TgZ(11, "p"),
                    t._uU(12),
                    t.qZA()(),
                    t.TgZ(13, "div", 3),
                    t._UZ(14, "cite", 4),
                    t.qZA()(),
                    t.TgZ(15, "mat-dialog-actions", 5),
                    t._UZ(16, "button", 6),
                    t.TgZ(17, "button", 7)(18, "i", 8),
                    t._uU(19, " close "),
                    t.qZA(),
                    t.TgZ(20, "span"),
                    t._uU(21),
                    t.ALo(22, "translate"),
                    t.qZA()()()()),
                    2 & e && (t.xp6(3),
                    t.Oqu(t.lcZ(4, 5, "LABEL_COMMENT")),
                    t.xp6(6),
                    t.hij("", t.lcZ(10, 7, "LABEL_USER"), ":"),
                    t.xp6(3),
                    t.hij("#", o.id, ""),
                    t.xp6(2),
                    t.Q6J("innerHTML", o.feedback, t.oJD),
                    t.xp6(7),
                    t.hij(" ", t.lcZ(22, 9, "BTN_CLOSE"), ""))
                },
                dependencies: [p.xw, p.SQ, x.lW, N.ZT, N.xY, N.H8, z.d, u.X$],
                styles: ["mat-divider[_ngcontent-%COMP%]{margin-bottom:10px}.dialogAction[_ngcontent-%COMP%]{margin-bottom:0!important}mat-dialog-content[_ngcontent-%COMP%]{max-width:320px;min-width:280px}"]
            }),
            n
        }
        )();
        const zo = ["paginatorUsers"]
          , $o = ["paginatorFeedb"];
        function Vo(n, a) {
            1 & n && t._UZ(0, "mat-header-cell")
        }
        function Xo(n, a) {
            1 & n && t._UZ(0, "i", 30)
        }
        function ta(n, a) {
            if (1 & n && (t.TgZ(0, "mat-cell", 28),
            t.YNc(1, Xo, 1, 0, "i", 29),
            t.qZA()),
            2 & n) {
                const e = a.$implicit;
                t.xp6(1),
                t.Q6J("ngIf", e.token)
            }
        }
        function ea(n, a) {
            1 & n && t._UZ(0, "mat-header-cell", 1)
        }
        function na(n, a) {
            1 & n && t._UZ(0, "mat-cell", 31),
            2 & n && t.Q6J("innerHTML", a.$implicit.email, t.oJD)
        }
        function oa(n, a) {
            1 & n && t._UZ(0, "mat-header-cell")
        }
        function aa(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "mat-cell")(1, "button", 32),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.oxw();
                    return t.KtG(l.showUserDetail(r.id))
                }),
                t._UZ(2, "i", 33),
                t.qZA()()
            }
        }
        function ia(n, a) {
            1 & n && t._UZ(0, "mat-header-row")
        }
        function ra(n, a) {
            1 & n && t._UZ(0, "mat-row")
        }
        function sa(n, a) {
            1 & n && t._UZ(0, "mat-header-cell")
        }
        function la(n, a) {
            1 & n && t._UZ(0, "mat-cell", 28)
        }
        function ca(n, a) {
            1 & n && t._UZ(0, "mat-header-cell", 1)
        }
        function ua(n, a) {
            1 & n && t._UZ(0, "mat-cell", 31),
            2 & n && t.Q6J("innerHTML", a.$implicit.email, t.oJD)
        }
        function pa(n, a) {
            1 & n && t._UZ(0, "mat-header-cell")
        }
        function da(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "mat-cell")(1, "button", 32),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.oxw();
                    return t.KtG(l.showUserDetail(r.id))
                }),
                t._UZ(2, "i", 33),
                t.qZA()()
            }
        }
        function ma(n, a) {
            1 & n && t._UZ(0, "mat-header-row")
        }
        function ga(n, a) {
            1 & n && t._UZ(0, "mat-row")
        }
        function ha(n, a) {
            1 & n && t._UZ(0, "mat-header-cell", 1)
        }
        function _a(n, a) {
            if (1 & n && (t.TgZ(0, "mat-cell"),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = a.$implicit;
                t.xp6(1),
                t.hij(" ", e.UserId, "")
            }
        }
        function fa(n, a) {
            1 & n && t._UZ(0, "mat-header-cell", 1)
        }
        function Ca(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "mat-cell", 34),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.oxw();
                    return t.KtG(l.showFeedbackDetails(r.comment, r.UserId))
                }),
                t._UZ(1, "p", 35),
                t.qZA()
            }
            if (2 & n) {
                const e = a.$implicit;
                t.xp6(1),
                t.Q6J("innerHTML", e.comment, t.oJD)
            }
        }
        function va(n, a) {
            1 & n && t._UZ(0, "mat-header-cell", 1)
        }
        function xa(n, a) {
            1 & n && (t.TgZ(0, "mat-icon"),
            t._uU(1, " star_rate "),
            t.qZA())
        }
        function ba(n, a) {
            if (1 & n && (t.TgZ(0, "mat-cell"),
            t.YNc(1, xa, 2, 0, "mat-icon", 36),
            t.qZA()),
            2 & n) {
                const e = a.$implicit
                  , o = t.oxw();
                t.xp6(1),
                t.Q6J("ngForOf", o.times(e.rating))
            }
        }
        function Ta(n, a) {
            1 & n && t._UZ(0, "mat-header-cell")
        }
        function Aa(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "mat-cell")(1, "button", 32),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.oxw();
                    return t.KtG(l.deleteFeedback(r.id))
                }),
                t._UZ(2, "i", 37),
                t.qZA()()
            }
        }
        function ya(n, a) {
            1 & n && t._UZ(0, "mat-header-row")
        }
        function Za(n, a) {
            1 & n && t._UZ(0, "mat-row")
        }
        O.vI.add(g.ILF, g.Mdf, g.J9Y, g.N2j, g.I7k);
        let wa = (()=>{
            class n {
                constructor(e, o, i, r) {
                    this.dialog = e,
                    this.userService = o,
                    this.feedbackService = i,
                    this.sanitizer = r,
                    this.userColumns = ["user", "email", "user_detail"],
                    this.feedbackColumns = ["user", "comment", "rating", "remove"],
                    this.resultsLengthUser = 0,
                    this.resultsLengthFeedback = 0
                }
                ngOnInit() {
                    this.findAllUsers(),
                    this.findAllFeedbacks()
                }
                findAllUsers() {
                    this.userService.find().subscribe(e=>{
                        this.userDataSource = e,
                        this.userDataSourceHidden = e;
                        for (const o of this.userDataSource)
                            o.email = this.sanitizer.bypassSecurityTrustHtml(`<span class="${o.token ? "confirmation" : "error"}">${o.email}</span>`);
                        this.userDataSource = new d.by(this.userDataSource),
                        this.userDataSource.paginator = this.paginatorUsers,
                        this.resultsLengthUser = e.length
                    }
                    , e=>{
                        this.error = e,
                        console.log(this.error)
                    }
                    )
                }
                findAllFeedbacks() {
                    this.feedbackService.find().subscribe(e=>{
                        this.feedbackDataSource = e;
                        for (const o of this.feedbackDataSource)
                            o.comment = this.sanitizer.bypassSecurityTrustHtml(o.comment);
                        this.feedbackDataSource = new d.by(this.feedbackDataSource),
                        this.feedbackDataSource.paginator = this.paginatorFeedb,
                        this.resultsLengthFeedback = e.length
                    }
                    , e=>{
                        this.error = e,
                        console.log(this.error)
                    }
                    )
                }
                deleteFeedback(e) {
                    this.feedbackService.del(e).subscribe(()=>{
                        this.findAllFeedbacks()
                    }
                    , o=>{
                        this.error = o,
                        console.log(this.error)
                    }
                    )
                }
                showUserDetail(e) {
                    this.dialog.open(Wo, {
                        data: {
                            id: e
                        }
                    })
                }
                showFeedbackDetails(e, o) {
                    this.dialog.open(Ko, {
                        data: {
                            feedback: e,
                            id: o
                        }
                    })
                }
                times(e) {
                    return Array(e).fill("\u2605")
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(N.uw),t.Y36(R),t.Y36(Ut),t.Y36(k.H7))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-administration"]],
                viewQuery: function(e, o) {
                    if (1 & e && (t.Gf(zo, 5),
                    t.Gf($o, 5)),
                    2 & e) {
                        let i;
                        t.iGM(i = t.CRH()) && (o.paginatorUsers = i.first),
                        t.iGM(i = t.CRH()) && (o.paginatorFeedb = i.first)
                    }
                },
                decls: 58,
                vars: 13,
                consts: [[1, "mat-elevation-z6", "mat-own-card"], ["translate", ""], ["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "20px", 1, "container"], ["fxFlexAlign", "center", 1, "user-container"], [1, "user-table"], [1, "heading"], [2, "height", "700px", 3, "dataSource"], ["matColumnDef", "user"], [4, "matHeaderCellDef"], ["style", "vertical-align: middle", 4, "matCellDef"], ["matColumnDef", "email"], ["translate", "", 4, "matHeaderCellDef"], ["style", "vertical-align: middle", 3, "innerHTML", 4, "matCellDef"], ["matColumnDef", "user_detail"], [4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["color", "accent", 1, "mat-elevation-z0", 3, "pageSize", "length"], ["paginatorUsers", ""], [2, "visibility", "hidden", "height", "0px", 3, "dataSource"], ["fxFlexAlign.lt-md", "center", 1, "customer-container"], [1, "customer-table"], ["matColumnDef", "comment"], [3, "click", 4, "matCellDef"], ["matColumnDef", "rating"], ["matColumnDef", "remove"], ["paginatorFeedb", ""], ["src", "assets/public/images/padding/19px.png"], [2, "vertical-align", "middle"], ["class", "fas fa-user fa-lg confirmation", 4, "ngIf"], [1, "fas", "fa-user", "fa-lg", "confirmation"], [2, "vertical-align", "middle", 3, "innerHTML"], ["mat-button", "", 3, "click"], [1, "fas", "fa-eye"], [3, "click"], ["matTooltip", "Click for more information", "matTooltipPosition", "above", 3, "innerHTML"], [4, "ngFor", "ngForOf"], [1, "fas", "fa-trash-alt"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "mat-card", 0)(1, "h1", 1),
                    t._uU(2, "TITLE_ADMINISTRATION"),
                    t.qZA(),
                    t.TgZ(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "span", 1),
                    t._uU(8, "SECTION_USER"),
                    t.qZA()(),
                    t.TgZ(9, "mat-table", 6),
                    t.ynx(10, 7),
                    t.YNc(11, Vo, 1, 0, "mat-header-cell", 8),
                    t.YNc(12, ta, 2, 1, "mat-cell", 9),
                    t.BQk(),
                    t.ynx(13, 10),
                    t.YNc(14, ea, 1, 0, "mat-header-cell", 11),
                    t.YNc(15, na, 1, 1, "mat-cell", 12),
                    t.BQk(),
                    t.ynx(16, 13),
                    t.YNc(17, oa, 1, 0, "mat-header-cell", 8),
                    t.YNc(18, aa, 3, 0, "mat-cell", 14),
                    t.BQk(),
                    t.YNc(19, ia, 1, 0, "mat-header-row", 15),
                    t.YNc(20, ra, 1, 0, "mat-row", 16),
                    t.qZA(),
                    t._UZ(21, "mat-paginator", 17, 18),
                    t.qZA(),
                    t.TgZ(23, "mat-table", 19),
                    t.ynx(24, 7),
                    t.YNc(25, sa, 1, 0, "mat-header-cell", 8),
                    t.YNc(26, la, 1, 0, "mat-cell", 9),
                    t.BQk(),
                    t.ynx(27, 10),
                    t.YNc(28, ca, 1, 0, "mat-header-cell", 11),
                    t.YNc(29, ua, 1, 1, "mat-cell", 12),
                    t.BQk(),
                    t.ynx(30, 13),
                    t.YNc(31, pa, 1, 0, "mat-header-cell", 8),
                    t.YNc(32, da, 3, 0, "mat-cell", 14),
                    t.BQk(),
                    t.YNc(33, ma, 1, 0, "mat-header-row", 15),
                    t.YNc(34, ga, 1, 0, "mat-row", 16),
                    t.qZA()(),
                    t.TgZ(35, "div", 20)(36, "div", 21)(37, "div", 5)(38, "span", 1),
                    t._uU(39, "SECTION_CUSTOMER_FEEDBACK"),
                    t.qZA()(),
                    t.TgZ(40, "mat-table", 6),
                    t.ynx(41, 7),
                    t.YNc(42, ha, 1, 0, "mat-header-cell", 11),
                    t.YNc(43, _a, 2, 1, "mat-cell", 14),
                    t.BQk(),
                    t.ynx(44, 22),
                    t.YNc(45, fa, 1, 0, "mat-header-cell", 11),
                    t.YNc(46, Ca, 2, 1, "mat-cell", 23),
                    t.BQk(),
                    t.ynx(47, 24),
                    t.YNc(48, va, 1, 0, "mat-header-cell", 11),
                    t.YNc(49, ba, 2, 1, "mat-cell", 14),
                    t.BQk(),
                    t.ynx(50, 25),
                    t.YNc(51, Ta, 1, 0, "mat-header-cell", 8),
                    t.YNc(52, Aa, 3, 0, "mat-cell", 14),
                    t.BQk(),
                    t.YNc(53, ya, 1, 0, "mat-header-row", 15),
                    t.YNc(54, Za, 1, 0, "mat-row", 16),
                    t.qZA(),
                    t._UZ(55, "mat-paginator", 17, 26),
                    t.qZA()(),
                    t._UZ(57, "img", 27),
                    t.qZA()()),
                    2 & e && (t.xp6(9),
                    t.Q6J("dataSource", o.userDataSource),
                    t.xp6(10),
                    t.Q6J("matHeaderRowDef", o.userColumns),
                    t.xp6(1),
                    t.Q6J("matRowDefColumns", o.userColumns),
                    t.xp6(1),
                    t.Q6J("pageSize", 10)("length", o.resultsLengthUser),
                    t.xp6(2),
                    t.Q6J("dataSource", o.userDataSourceHidden),
                    t.xp6(10),
                    t.Q6J("matHeaderRowDef", o.userColumns),
                    t.xp6(1),
                    t.Q6J("matRowDefColumns", o.userColumns),
                    t.xp6(6),
                    t.Q6J("dataSource", o.feedbackDataSource),
                    t.xp6(13),
                    t.Q6J("matHeaderRowDef", o.feedbackColumns),
                    t.xp6(1),
                    t.Q6J("matRowDefColumns", o.feedbackColumns),
                    t.xp6(1),
                    t.Q6J("pageSize", 10)("length", o.resultsLengthFeedback))
                },
                dependencies: [h.sg, h.O5, u.Pi, p.xw, p.SQ, p.XD, F.Hw, x.lW, d.BZ, d.fO, d.as, d.w1, d.Dz, d.nj, d.ge, d.ev, d.XQ, d.Gk, xt.NW, T.a8, Q.gM],
                styles: [".heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.13);font-size:large;justify-content:center;margin-bottom:10px;padding:12px}.container[_ngcontent-%COMP%]{justify-content:center}mat-table[_ngcontent-%COMP%]{height:767px}mat-header-row[_ngcontent-%COMP%]{min-height:0!important}.user-container[_ngcontent-%COMP%], .customer-container[_ngcontent-%COMP%]{max-width:600px;min-width:300px;width:70%}.user-table[_ngcontent-%COMP%], .customer-table[_ngcontent-%COMP%]{margin-bottom:25px}.mat-column-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .mat-column-user_detail[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:38%}mat-cell[_ngcontent-%COMP%], mat-footer-cell[_ngcontent-%COMP%], mat-header-cell[_ngcontent-%COMP%]{align-items:normal;display:block}.mat-column-comment[_ngcontent-%COMP%]{flex:0 0 55%!important;-webkit-hyphens:auto;hyphens:auto;overflow-wrap:break-word;padding:5px;white-space:unset!important;width:55%!important;word-break:break-word;word-wrap:break-word!important}.mat-column-user[_ngcontent-%COMP%]{flex:0 0 7%!important;-webkit-hyphens:auto;hyphens:auto;overflow-wrap:break-word;padding:5px;white-space:unset!important;width:7%!important;word-break:break-word;word-wrap:break-word!important}.mat-column-rating[_ngcontent-%COMP%]{flex:0 0 20%!important;-webkit-hyphens:auto;hyphens:auto;overflow-wrap:break-word;white-space:unset!important;width:20%!important;word-break:break-word;word-wrap:break-word!important}mat-cell[_ngcontent-%COMP%]:last-child, mat-footer-cell[_ngcontent-%COMP%]:last-child, mat-header-cell[_ngcontent-%COMP%]:last-child{padding-right:50px}mat-row[_ngcontent-%COMP%]{height:69px}.mat-own-card[_ngcontent-%COMP%]{display:block;margin-bottom:20px;margin-left:10%;margin-right:10%}p[_ngcontent-%COMP%]{-webkit-box-orient:vertical;display:-webkit-box;-webkit-line-clamp:2;overflow:hidden}"]
            }),
            n
        }
        )();
        function Sa(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 2),
            t._uU(1, "MANDATORY_CURRENT_PASSWORD"),
            t.qZA())
        }
        function ka(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 2),
            t._uU(1, " MANDATORY_NEW_PASSWORD "),
            t.qZA())
        }
        const Ze = function() {
            return {
                length: "5-40"
            }
        };
        function Ia(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 19),
            t._uU(1, "INVALID_PASSWORD_LENGTH "),
            t.qZA()),
            2 & n && t.Q6J("translateParams", t.DdM(1, Ze))
        }
        function Oa(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 2),
            t._uU(1, "MANDATORY_PASSWORD_REPEAT"),
            t.qZA())
        }
        function Ua(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 2),
            t._uU(1, " PASSWORDS_NOT_MATCHING "),
            t.qZA())
        }
        O.vI.add(g.r6l, D.Xc);
        let La = (()=>{
            class n {
                constructor(e, o, i) {
                    this.userService = e,
                    this.formSubmitService = o,
                    this.translate = i,
                    this.passwordControl = new s.p4("",[s.kI.required]),
                    this.newPasswordControl = new s.p4("",[s.kI.required, s.kI.minLength(5), s.kI.maxLength(40)]),
                    this.repeatNewPasswordControl = new s.p4("",[s.kI.required, s.kI.minLength(5), s.kI.maxLength(40), Pa(this.newPasswordControl)])
                }
                ngOnInit() {
                    this.formSubmitService.attachEnterKeyHandler("password-form", "changeButton", ()=>{
                        this.changePassword()
                    }
                    )
                }
                changePassword() {
                    localStorage.getItem("email")?.match(/support@.*/) && !this.newPasswordControl.value.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,30}/) && console.error("Parola echipei de asisten\u021b\u0103 nu respect\u0103 politica corporativ\u0103 pentru conturile privilegiate! V\u0103 rug\u0103m s\u0103 schimba\u021bi parola \xeen consecin\u021b\u0103!"),
                    this.userService.changePassword({
                        current: this.passwordControl.value,
                        new: this.newPasswordControl.value,
                        repeat: this.repeatNewPasswordControl.value
                    }).subscribe(e=>{
                        this.error = void 0,
                        this.translate.get("PASSWORD_SUCCESSFULLY_CHANGED").subscribe(o=>{
                            this.confirmation = o
                        }
                        , o=>{
                            this.confirmation = {
                                error: o
                            }
                        }
                        ),
                        this.resetForm()
                    }
                    , e=>{
                        console.log(e),
                        this.error = e,
                        this.confirmation = void 0,
                        this.resetPasswords()
                    }
                    )
                }
                resetForm() {
                    this.passwordControl.setValue(""),
                    this.resetPasswords()
                }
                resetPasswords() {
                    this.passwordControl.markAsPristine(),
                    this.passwordControl.markAsUntouched(),
                    this.newPasswordControl.setValue(""),
                    this.newPasswordControl.markAsPristine(),
                    this.newPasswordControl.markAsUntouched(),
                    this.repeatNewPasswordControl.setValue(""),
                    this.repeatNewPasswordControl.markAsPristine(),
                    this.repeatNewPasswordControl.markAsUntouched()
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(R),t.Y36(rt),t.Y36(u.sK))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-change-password"]],
                decls: 42,
                vars: 26,
                consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6", 2, "margin-bottom", "20px"], ["translate", ""], [1, "confirmation", 3, "hidden"], [1, "error", 3, "hidden"], ["id", "password-form", 1, "form-container"], ["appearance", "outline", "color", "accent"], ["id", "currentPassword", "type", "password", "matInput", "", "aria-label", "Field to enter the current password", 3, "formControl", "placeholder"], ["translate", "", 4, "ngIf"], ["id", "newPassword", "type", "password", "matInput", "", "aria-label", "Field for the new password", 3, "formControl"], ["password", ""], [1, "fas", "fa-exclamation-circle"], ["translate", "", 2, "margin-left", "5px"], ["align", "end"], ["translate", "", 3, "translateParams", 4, "ngIf"], ["id", "newPasswordRepeat", "type", "password", "matInput", "", "aria-label", "Field to repeat the new password", 3, "formControl"], ["passwordRepeat", ""], ["type", "submit", "id", "changeButton", "mat-raised-button", "", "color", "primary", "aria-label", "Button to confirm the change", 3, "disabled", "click"], ["aria-hidden", "true", 1, "far", "fa-edit", "fa-lg"], ["translate", "", 3, "translateParams"]],
                template: function(e, o) {
                    if (1 & e && (t.TgZ(0, "div", 0)(1, "mat-card", 1)(2, "h1", 2),
                    t._uU(3, "TITLE_CHANGE_PASSWORD"),
                    t.qZA(),
                    t.TgZ(4, "div", 3),
                    t._uU(5),
                    t.qZA(),
                    t.TgZ(6, "div", 4),
                    t._uU(7),
                    t.qZA(),
                    t.TgZ(8, "div", 5)(9, "mat-form-field", 6)(10, "mat-label", 2),
                    t._uU(11, "LABEL_CURRENT_PASSWORD"),
                    t.qZA(),
                    t._UZ(12, "input", 7),
                    t.ALo(13, "translate"),
                    t.YNc(14, Sa, 2, 0, "mat-error", 8),
                    t.qZA(),
                    t.TgZ(15, "mat-form-field", 6)(16, "mat-label", 2),
                    t._uU(17, "LABEL_NEW_PASSWORD"),
                    t.qZA(),
                    t._UZ(18, "input", 9, 10),
                    t.TgZ(20, "mat-hint", 2),
                    t._UZ(21, "i", 11),
                    t.TgZ(22, "em", 12),
                    t._uU(23),
                    t.ALo(24, "translate"),
                    t.qZA()(),
                    t.TgZ(25, "mat-hint", 13),
                    t._uU(26),
                    t.qZA(),
                    t.YNc(27, ka, 2, 0, "mat-error", 8),
                    t.YNc(28, Ia, 2, 2, "mat-error", 14),
                    t.qZA(),
                    t.TgZ(29, "mat-form-field", 6)(30, "mat-label", 2),
                    t._uU(31, "LABEL_REPEAT_NEW_PASSWORD"),
                    t.qZA(),
                    t._UZ(32, "input", 15, 16),
                    t.TgZ(34, "mat-hint", 13),
                    t._uU(35),
                    t.qZA(),
                    t.YNc(36, Oa, 2, 0, "mat-error", 8),
                    t.YNc(37, Ua, 2, 0, "mat-error", 8),
                    t.qZA()(),
                    t.TgZ(38, "button", 17),
                    t.NdJ("click", function() {
                        return o.changePassword()
                    }),
                    t._UZ(39, "i", 18),
                    t._uU(40),
                    t.ALo(41, "translate"),
                    t.qZA()()()),
                    2 & e) {
                        const i = t.MAs(19)
                          , r = t.MAs(33);
                        t.xp6(4),
                        t.Q6J("hidden", !(o.confirmation && !o.passwordControl.dirty && !o.newPasswordControl.dirty && !o.repeatNewPasswordControl.dirty)),
                        t.xp6(1),
                        t.hij(" ", o.confirmation, " "),
                        t.xp6(1),
                        t.Q6J("hidden", !(o.error && !o.passwordControl.dirty && !o.newPasswordControl.dirty && !o.repeatNewPasswordControl.dirty)),
                        t.xp6(1),
                        t.hij(" ", o.error, " "),
                        t.xp6(5),
                        t.s9C("placeholder", t.lcZ(13, 18, "MANDATORY_CURRENT_PASSWORD")),
                        t.Q6J("formControl", o.passwordControl),
                        t.xp6(2),
                        t.Q6J("ngIf", o.passwordControl.invalid),
                        t.xp6(4),
                        t.Q6J("formControl", o.newPasswordControl),
                        t.xp6(5),
                        t.Oqu(t.xi3(24, 20, "INVALID_PASSWORD_LENGTH", t.DdM(25, Ze))),
                        t.xp6(3),
                        t.hij("", (null == i.value ? null : i.value.length) || 0, "/40"),
                        t.xp6(1),
                        t.Q6J("ngIf", (null == o.newPasswordControl ? null : o.newPasswordControl.invalid) && (null == o.newPasswordControl ? null : o.newPasswordControl.errors.required)),
                        t.xp6(1),
                        t.Q6J("ngIf", (null == o.newPasswordControl ? null : o.newPasswordControl.invalid) && ((null == o.newPasswordControl ? null : o.newPasswordControl.errors.minlength) || (null == o.newPasswordControl ? null : o.newPasswordControl.errors.maxlength))),
                        t.xp6(4),
                        t.Q6J("formControl", o.repeatNewPasswordControl),
                        t.xp6(3),
                        t.hij("", (null == r.value ? null : r.value.length) || 0, "/20"),
                        t.xp6(1),
                        t.Q6J("ngIf", o.repeatNewPasswordControl.invalid && o.repeatNewPasswordControl.errors.required),
                        t.xp6(1),
                        t.Q6J("ngIf", o.repeatNewPasswordControl.invalid && o.repeatNewPasswordControl.errors.notSame),
                        t.xp6(1),
                        t.Q6J("disabled", o.passwordControl.invalid || o.newPasswordControl.invalid || o.repeatNewPasswordControl.invalid),
                        t.xp6(2),
                        t.hij(" ", t.lcZ(41, 23, "BTN_CHANGE"), " ")
                    }
                },
                dependencies: [h.O5, u.Pi, p.Wh, s.Fj, s.JJ, s.oH, f.TO, f.KE, f.bx, f.hX, x.lW, T.a8, B.Nt, u.X$],
                styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:25%}mat-form-field[_ngcontent-%COMP%]{padding-top:10px}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}button[_ngcontent-%COMP%]{margin-top:5px}#changeButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}"]
            }),
            n
        }
        )();
        function Pa(n) {
            return function(e) {
                return n.value !== e.value ? {
                    notSame: !0
                } : null
            }
        }
        let we = (()=>{
            class n {
                constructor(e) {
                    this.http = e,
                    this.hostServer = P.N.hostServer,
                    this.host = this.hostServer + "/api/Complaints"
                }
                save(e) {
                    return this.http.post(this.host + "/", e).pipe((0,
                    C.U)(o=>o.data), (0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.LFG(U.eN))
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )();
        var te = c(162);
        const Na = ["fileControl"]
          , Ea = function() {
            return {
                type: "PDF, ZIP"
            }
        };
        function Ma(n, a) {
            1 & n && (t.TgZ(0, "div", 20),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & n && (t.xp6(1),
            t.hij("", t.xi3(2, 1, "INVALID_FILE_TYPE", t.DdM(4, Ea)), " "))
        }
        const Da = function() {
            return {
                size: "100 KB"
            }
        };
        function qa(n, a) {
            1 & n && (t.TgZ(0, "div", 20),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & n && (t.xp6(1),
            t.hij("", t.xi3(2, 1, "INVALID_FILE_SIZE", t.DdM(4, Da)), " "))
        }
        function Fa(n, a) {
            1 & n && (t.TgZ(0, "mat-error"),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & n && (t.xp6(1),
            t.hij("", t.lcZ(2, 1, "MANDATORY_MESSAGE"), " "))
        }
        const Ba = function() {
            return {
                length: "160"
            }
        };
        O.vI.add(g.Yme);
        let Ra = (()=>{
            class n {
                constructor(e, o, i, r) {
                    this.userService = e,
                    this.complaintService = o,
                    this.formSubmitService = i,
                    this.translate = r,
                    this.customerControl = new s.p4({
                        value: "",
                        disabled: !0
                    },[]),
                    this.messageControl = new s.p4("",[s.kI.required, s.kI.maxLength(160)]),
                    this.fileUploadError = void 0,
                    this.uploader = new te.bA({
                        url: P.N.hostServer + "/file-upload",
                        authToken: `Bearer ${localStorage.getItem("token")}`,
                        allowedMimeType: ["application/pdf", "application/xml", "text/xml", "application/zip", "application/x-zip-compressed", "multipart/x-zip"],
                        maxFileSize: 1e5
                    }),
                    this.userEmail = void 0,
                    this.complaint = void 0
                }
                ngOnInit() {
                    this.initComplaint(),
                    this.uploader.onWhenAddingFileFailed = (e,o)=>{
                        throw this.fileUploadError = o,
                        new Error(`Error due to : ${o.name}`)
                    }
                    ,
                    this.uploader.onAfterAddingFile = ()=>{
                        this.fileUploadError = void 0
                    }
                    ,
                    this.uploader.onSuccessItem = ()=>{
                        this.saveComplaint(),
                        this.uploader.clearQueue()
                    }
                    ,
                    this.formSubmitService.attachEnterKeyHandler("complaint-form", "submitButton", ()=>{
                        this.save()
                    }
                    )
                }
                initComplaint() {
                    this.userService.whoAmI().subscribe(e=>{
                        this.complaint = {},
                        this.complaint.UserId = e.id,
                        this.userEmail = e.email,
                        this.customerControl.setValue(this.userEmail)
                    }
                    , e=>{
                        this.complaint = void 0,
                        console.log(e)
                    }
                    )
                }
                save() {
                    this.uploader.queue[0] ? (this.uploader.queue[0].upload(),
                    this.fileControl.nativeElement.value = null) : this.saveComplaint()
                }
                saveComplaint() {
                    this.complaint.message = this.messageControl.value,
                    this.complaintService.save(this.complaint).subscribe(e=>{
                        this.translate.get("CUSTOMER_SUPPORT_COMPLAINT_REPLY", {
                            ref: e.id
                        }).subscribe(o=>{
                            this.confirmation = o
                        }
                        , o=>{
                            this.confirmation = o
                        }
                        ),
                        this.initComplaint(),
                        this.resetForm(),
                        this.fileUploadError = void 0
                    }
                    , e=>e)
                }
                resetForm() {
                    this.messageControl.setValue(""),
                    this.messageControl.markAsUntouched(),
                    this.messageControl.markAsPristine(),
                    this.fileControl.nativeElement.value = null
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(R),t.Y36(we),t.Y36(rt),t.Y36(u.sK))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-complaint"]],
                viewQuery: function(e, o) {
                    if (1 & e && t.Gf(Na, 7),
                    2 & e) {
                        let i;
                        t.iGM(i = t.CRH()) && (o.fileControl = i.first)
                    }
                },
                decls: 39,
                vars: 21,
                consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], ["translate", ""], [1, "confirmation", 3, "hidden"], ["class", "error fileUploadError", 4, "ngIf"], ["id", "complaint-form", 1, "form-container"], ["appearance", "outline", "color", "accent"], ["type", "text", "matInput", "", "aria-label", "Text field for the mail address of the user", 3, "formControl"], [1, "fas", "fa-exclamation-circle"], ["translate", "", 2, "margin-left", "5px"], ["id", "complaintMessage", "matAutosizeMinRows", "4", "matAutosizeMaxRows", "4", "matTextareaAutosize", "", "cols", "50", "maxlength", "160", "matInput", "", "aria-label", "Field for entering the complaint", 3, "formControl", "placeholder"], ["complaintMessage", ""], [4, "ngIf"], ["align", "end"], [2, "margin-top", "15px"], ["for", "file", "translate", ""], ["ng2FileSelect", "", "id", "file", "type", "file", "accept", ".pdf,.zip", "aria-label", "Input area for uploading a single invoice PDF or XML B2B order file or a ZIP archive containing multiple invoices or orders\x3c!----\x3e", 2, "margin-left", "10px", 3, "uploader"], ["fileControl", ""], ["type", "submit", "id", "submitButton", "mat-raised-button", "", "color", "primary", "aria-label", "Button to send the complaint", 3, "disabled", "click"], [1, "material-icons"], [1, "error", "fileUploadError"]],
                template: function(e, o) {
                    if (1 & e && (t.TgZ(0, "div", 0)(1, "mat-card", 1)(2, "h1", 2),
                    t._uU(3, "NAV_COMPLAIN"),
                    t.qZA(),
                    t.TgZ(4, "div", 3),
                    t._uU(5),
                    t.qZA(),
                    t.YNc(6, Ma, 3, 5, "div", 4),
                    t.YNc(7, qa, 3, 5, "div", 4),
                    t.TgZ(8, "div", 5)(9, "mat-form-field", 6)(10, "mat-label", 2),
                    t._uU(11, "LABEL_CUSTOMER"),
                    t.qZA(),
                    t._UZ(12, "input", 7),
                    t.qZA(),
                    t.TgZ(13, "mat-form-field", 6)(14, "mat-label", 2),
                    t._uU(15, "LABEL_MESSAGE"),
                    t.qZA(),
                    t.TgZ(16, "mat-hint", 2),
                    t._UZ(17, "i", 8),
                    t.TgZ(18, "em", 9),
                    t._uU(19),
                    t.ALo(20, "translate"),
                    t.qZA()(),
                    t._UZ(21, "textarea", 10, 11),
                    t.ALo(23, "translate"),
                    t.YNc(24, Fa, 3, 3, "mat-error", 12),
                    t.TgZ(25, "mat-hint", 13),
                    t._uU(26),
                    t.qZA()(),
                    t.TgZ(27, "div", 14)(28, "label", 15),
                    t._uU(29, "LABEL_INVOICE"),
                    t.TgZ(30, "span"),
                    t._uU(31, ":"),
                    t.qZA()(),
                    t._UZ(32, "input", 16, 17),
                    t.qZA()(),
                    t.TgZ(34, "button", 18),
                    t.NdJ("click", function() {
                        return o.save()
                    }),
                    t.TgZ(35, "i", 19),
                    t._uU(36, " send "),
                    t.qZA(),
                    t._uU(37),
                    t.ALo(38, "translate"),
                    t.qZA()()()),
                    2 & e) {
                        const i = t.MAs(22);
                        t.xp6(4),
                        t.Q6J("hidden", !(o.confirmation && !o.messageControl.dirty)),
                        t.xp6(1),
                        t.Oqu(o.confirmation),
                        t.xp6(1),
                        t.Q6J("ngIf", o.fileUploadError && "mimeType" == o.fileUploadError.name),
                        t.xp6(1),
                        t.Q6J("ngIf", o.fileUploadError && "fileSize" == o.fileUploadError.name),
                        t.xp6(5),
                        t.Q6J("formControl", o.customerControl),
                        t.xp6(7),
                        t.Oqu(t.xi3(20, 13, "MAX_TEXTAREA_LENGTH", t.DdM(20, Ba))),
                        t.xp6(2),
                        t.s9C("placeholder", t.lcZ(23, 16, "WRITE_MESSAGE_PLACEHOLDER")),
                        t.Q6J("formControl", o.messageControl),
                        t.xp6(3),
                        t.Q6J("ngIf", o.messageControl.invalid && (null == o.messageControl ? null : o.messageControl.errors.required)),
                        t.xp6(2),
                        t.hij("", (null == i.value ? null : i.value.length) || 0, "/160"),
                        t.xp6(6),
                        t.Q6J("uploader", o.uploader),
                        t.xp6(2),
                        t.Q6J("disabled", o.messageControl.invalid || o.fileUploadError),
                        t.xp6(3),
                        t.hij(" ", t.lcZ(38, 18, "BTN_SUBMIT"), " ")
                    }
                },
                dependencies: [h.O5, u.Pi, p.Wh, s.Fj, s.JJ, s.nD, s.oH, te.C6, f.TO, f.KE, f.bx, f.hX, x.lW, T.a8, B.Nt, u.X$],
                styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:30%}mat-form-field[_ngcontent-%COMP%]{padding-top:10px}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}#submitButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}"]
            }),
            n
        }
        )()
          , Se = (()=>{
            class n {
                constructor(e) {
                    this.http = e,
                    this.hostServer = P.N.hostServer,
                    this.host = this.hostServer + "/rest/chatbot"
                }
                getChatbotStatus() {
                    return this.http.get(this.host + "/status").pipe((0,
                    C.U)(e=>e), (0,
                    _.K)(e=>{
                        throw e
                    }
                    ))
                }
                getResponse(e, o) {
                    return this.http.post(this.host + "/respond", {
                        action: e,
                        query: o
                    }).pipe((0,
                    C.U)(i=>i), (0,
                    _.K)(i=>{
                        throw i
                    }
                    ))
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.LFG(U.eN))
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )();
        function Ya(n, a) {
            if (1 & n && t._UZ(0, "img", 16),
            2 & n) {
                const e = t.oxw(2);
                t.s9C("src", e.juicyImageSrc, t.LSH)
            }
        }
        function Ja(n, a) {
            if (1 & n && t._UZ(0, "img", 17),
            2 & n) {
                const e = t.oxw(2);
                t.s9C("src", e.profileImageSrc, t.LSH)
            }
        }
        function Qa(n, a) {
            if (1 & n && (t.TgZ(0, "div", 13),
            t.YNc(1, Ya, 1, 1, "img", 14),
            t.YNc(2, Ja, 1, 1, "img", 15),
            t.TgZ(3, "div"),
            t._uU(4),
            t.qZA()()),
            2 & n) {
                const e = a.$implicit;
                t.xp6(1),
                t.Q6J("ngIf", "bot" == e.author),
                t.xp6(1),
                t.Q6J("ngIf", "user" == e.author),
                t.xp6(1),
                t.Tol("user" == e.author ? "speech-bubble-right" : "speech-bubble-left"),
                t.xp6(1),
                t.hij(" ", e.body, " ")
            }
        }
        const Ha = function() {
            return {
                chatbot: "juicy-chat-bot"
            }
        };
        O.vI.add(g.Yme);
        var pt = (()=>{
            return (n = pt || (pt = {})).user = "user",
            n.bot = "bot",
            pt;
            var n
        }
        )();
        let Ga = (()=>{
            class n {
                constructor(e, o, i, r, l) {
                    this.userService = e,
                    this.chatbotService = o,
                    this.cookieService = i,
                    this.formSubmitService = r,
                    this.translate = l,
                    this.messageControl = new s.p4,
                    this.messages = [],
                    this.juicyImageSrc = "assets/public/images/ChatbotAvatar.png",
                    this.profileImageSrc = "assets/public/images/uploads/default.svg",
                    this.messageActions = {
                        response: "query",
                        namequery: "setname"
                    },
                    this.currentAction = this.messageActions.response,
                    this.chatScrollDownTimeoutId = null
                }
                ngOnDestroy() {
                    this.chatScrollDownTimeoutId && clearTimeout(this.chatScrollDownTimeoutId)
                }
                ngOnInit() {
                    this.chatbotService.getChatbotStatus().subscribe(e=>{
                        this.messages.push({
                            author: pt.bot,
                            body: e.body
                        }),
                        e.action && (this.currentAction = this.messageActions[e.action])
                    }
                    ),
                    this.userService.whoAmI().subscribe(e=>{
                        this.profileImageSrc = e.profileImage
                    }
                    , e=>{
                        console.log(e)
                    }
                    )
                }
                handleResponse(e) {
                    if (this.messages.push({
                        author: pt.bot,
                        body: e.body
                    }),
                    this.currentAction = this.messageActions[e.action],
                    e.token) {
                        localStorage.setItem("token", e.token);
                        const o = new Date;
                        o.setHours(o.getHours() + 8),
                        this.cookieService.put("token", e.token, {
                            expires: o
                        })
                    }
                }
                sendMessage() {
                    const e = this.messageControl.value;
                    e && (this.messages.push({
                        author: pt.user,
                        body: e
                    }),
                    this.messageControl.setValue(""),
                    this.chatbotService.getChatbotStatus().subscribe(o=>{
                        o.status || o.action ? this.chatbotService.getResponse(this.currentAction, e).subscribe(i=>{
                            this.handleResponse(i)
                        }
                        ) : this.messages.push({
                            author: pt.bot,
                            body: o.body
                        }),
                        this.chatScrollDownTimeoutId = setTimeout(()=>{
                            const i = document.getElementById("chat-window");
                            i.scrollTop = i.scrollHeight,
                            this.chatScrollDownTimeoutId = null
                        }
                        , 250)
                    }
                    ))
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(R),t.Y36(Se),t.Y36(I.N_),t.Y36(rt),t.Y36(u.sK))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-chatbot"]],
                decls: 20,
                vars: 13,
                consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], [1, "powered-by"], ["id", "chat-container"], ["id", "chat-box"], ["id", "chat-window"], ["class", "message-container", 4, "ngFor", "ngForOf"], [1, "message-box-container"], [1, "form-wrapper"], ["color", "accent", "appearance", "outline"], ["translate", ""], ["id", "message-input", "name", "message", "matInput", "", "aria-label", "Text field for a chat message", 3, "formControl", "placeholder", "keyup.enter"], ["message", ""], [1, "message-container"], ["class", "juicy-chat-bot-image", 3, "src", 4, "ngIf"], ["class", "profile-image", 3, "src", 4, "ngIf"], [1, "juicy-chat-bot-image", 3, "src"], [1, "profile-image", 3, "src"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "div", 0)(1, "mat-card", 1)(2, "h1"),
                    t._uU(3),
                    t.ALo(4, "translate"),
                    t.TgZ(5, "span", 2),
                    t._uU(6),
                    t.ALo(7, "translate"),
                    t.qZA()(),
                    t.TgZ(8, "mat-card", 3)(9, "mat-card", 4)(10, "div", 5),
                    t.YNc(11, Qa, 5, 6, "div", 6),
                    t.qZA(),
                    t.TgZ(12, "div", 7)(13, "div", 8)(14, "mat-form-field", 9)(15, "mat-label", 10),
                    t._uU(16, "LABEL_MESSAGE"),
                    t.qZA(),
                    t.TgZ(17, "input", 11, 12),
                    t.NdJ("keyup.enter", function() {
                        return o.sendMessage()
                    }),
                    t.ALo(19, "translate"),
                    t.qZA()()()()()()()()),
                    2 & e && (t.xp6(3),
                    t.hij("", t.lcZ(4, 5, "SECTION_SUPPORT_CHAT"), " "),
                    t.xp6(3),
                    t.hij("(", t.xi3(7, 7, "LABEL_POWERED_BY_CHATBOT", t.DdM(12, Ha)), ")"),
                    t.xp6(5),
                    t.Q6J("ngForOf", o.messages),
                    t.xp6(6),
                    t.s9C("placeholder", t.lcZ(19, 10, "ASK_ME_ANYTHING_PLACEHOLDER")),
                    t.Q6J("formControl", o.messageControl))
                },
                dependencies: [h.sg, h.O5, u.Pi, p.Wh, s.Fj, s.JJ, s.oH, f.KE, f.hX, T.a8, B.Nt, u.X$],
                styles: ['mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:60%}mat-form-field[_ngcontent-%COMP%]{display:block;height:0;margin:auto;width:70%}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}#submitButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}#chat-container[_ngcontent-%COMP%]{box-shadow:none;display:flex;position:relative;width:95%}#chat-box[_ngcontent-%COMP%]{align-content:space-between;background-color:#0000004d;display:block;display:flex;flex-direction:column;height:650px;margin-left:auto;margin-right:auto;padding:0;width:80%}.form-wrapper[_ngcontent-%COMP%]{font-size:10px}#chat-window[_ngcontent-%COMP%]{height:90%;overflow-y:auto;padding:20px}#chat-window[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar{background:none;width:20px}#chat-window[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track{background:none}#chat-window[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#f00;border-radius:10px}#chat-window[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#b30000}.message-box-container[_ngcontent-%COMP%]{border-top:solid 1px #fff;height:10%;padding-top:15px;width:auto}.message-container[_ngcontent-%COMP%]{height:auto;margin-right:25px;overflow:hidden;width:auto}.speech-bubble-right[_ngcontent-%COMP%]{background:rgb(84,110,122);border-radius:4px;float:right;font-size:15px;line-height:1.3;margin-bottom:25px;max-width:500px;padding:15px;position:relative}.speech-bubble-right[_ngcontent-%COMP%]:after{border-left:20px solid transparent;border-top:20px solid rgb(84,110,122);bottom:-20px;content:"";position:absolute;right:20px}.speech-bubble-left[_ngcontent-%COMP%]{background:rgb(84,110,122);border-radius:4px;float:left;font-size:15px;line-height:1.3;margin-bottom:25px;max-width:500px;padding:15px;position:relative}.speech-bubble-left[_ngcontent-%COMP%]:after{border-right:20px solid transparent;border-top:20px solid rgb(84,110,122);bottom:-20px;content:"";left:20px;position:absolute}.juicy-chat-bot-image[_ngcontent-%COMP%]{float:left;height:70px;margin-top:20px}.profile-image[_ngcontent-%COMP%]{border-radius:50%;float:right;height:40px;margin-left:10px;margin-top:20px}.powered-by[_ngcontent-%COMP%]{font-size:xx-small}']
            }),
            n
        }
        )()
          , ke = (()=>{
            class n {
                constructor(e) {
                    this.http = e,
                    this.hostServer = P.N.hostServer,
                    this.host = this.hostServer + "/api/Recycles"
                }
                find(e) {
                    return this.http.get(this.host + "/", {
                        params: e
                    }).pipe((0,
                    C.U)(o=>o.data), (0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
                save(e) {
                    return this.http.post(this.host + "/", e).pipe((0,
                    C.U)(o=>o.data), (0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.LFG(U.eN))
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )()
          , mt = (()=>{
            class n {
                constructor(e) {
                    this.http = e,
                    this.hostServer = P.N.hostServer,
                    this.host = this.hostServer + "/api/Addresss"
                }
                get() {
                    return this.http.get(this.host).pipe((0,
                    C.U)(e=>e.data), (0,
                    _.K)(e=>{
                        throw e
                    }
                    ))
                }
                getById(e) {
                    return this.http.get(`${this.host}/${e}`).pipe((0,
                    C.U)(o=>o.data), (0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
                save(e) {
                    return this.http.post(this.host + "/", e).pipe((0,
                    C.U)(o=>o.data), (0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
                put(e, o) {
                    return this.http.put(`${this.host}/${e}`, o).pipe((0,
                    C.U)(i=>i.data), (0,
                    _.K)(i=>{
                        throw i
                    }
                    ))
                }
                del(e) {
                    return this.http.delete(`${this.host}/${e}`).pipe((0,
                    C.U)(o=>o.data), (0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.LFG(U.eN))
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )();
        var Ie = c(5017)
          , nt = c(1948);
        function ja(n, a) {
            1 & n && (t.TgZ(0, "h1", 5),
            t._uU(1, "TITLE_SELECT_ADDRESS"),
            t.qZA())
        }
        function Wa(n, a) {
            1 & n && (t.TgZ(0, "h1", 5),
            t._uU(1, "MY_SAVED_ADRESSES"),
            t.qZA())
        }
        function Ka(n, a) {
            1 & n && t._UZ(0, "mat-header-cell", 20)
        }
        function za(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "mat-cell", 20)(1, "mat-radio-button", 21),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.oxw(2);
                    return t.KtG(l.emitSelectionToParent(r.id))
                })("change", function(i) {
                    const l = t.CHM(e).$implicit
                      , m = t.oxw(2);
                    return t.KtG(i ? m.selection.toggle(l) : null)
                }),
                t.qZA()()
            }
            if (2 & n) {
                const e = a.$implicit
                  , o = t.oxw(2);
                t.xp6(1),
                t.Q6J("checked", o.selection.isSelected(e))
            }
        }
        function $a(n, a) {
            1 & n && t._UZ(0, "mat-header-cell", 22)
        }
        function Va(n, a) {
            if (1 & n && (t.TgZ(0, "mat-cell", 20),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = a.$implicit;
                t.xp6(1),
                t.hij("", null == e ? null : e.fullName, " ")
            }
        }
        function Xa(n, a) {
            1 & n && t._UZ(0, "mat-header-cell", 22)
        }
        function ti(n, a) {
            if (1 & n && (t.TgZ(0, "mat-cell", 23),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = a.$implicit;
                t.xp6(1),
                t.HOy(" ", null == e ? null : e.streetAddress, ", ", null == e ? null : e.city, ", ", null == e ? null : e.state, ", ", null == e ? null : e.zipCode, " ")
            }
        }
        function ei(n, a) {
            1 & n && t._UZ(0, "mat-header-cell", 22)
        }
        function ni(n, a) {
            if (1 & n && (t.TgZ(0, "mat-cell", 20),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = a.$implicit;
                t.xp6(1),
                t.Oqu(null == e ? null : e.country)
            }
        }
        function oi(n, a) {
            1 & n && t._UZ(0, "mat-header-cell", 22)
        }
        function ai(n, a) {
            if (1 & n && (t.TgZ(0, "mat-cell", 24)(1, "button", 25),
            t._UZ(2, "i", 26),
            t.qZA()()),
            2 & n) {
                const e = a.$implicit;
                t.xp6(1),
                t.MGl("routerLink", "/address/edit/", e.id, "")
            }
        }
        function ii(n, a) {
            1 & n && t._UZ(0, "mat-header-cell", 22)
        }
        function ri(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "mat-cell", 24)(1, "button", 27),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.oxw(2);
                    return t.KtG(l.deleteAddress(r.id))
                }),
                t._UZ(2, "i", 28),
                t.qZA()()
            }
        }
        function si(n, a) {
            1 & n && t._UZ(0, "mat-header-row")
        }
        function li(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "mat-row", 29),
                t.NdJ("click", function() {
                    const i = t.CHM(e)
                      , r = i.$implicit
                      , l = i.$implicit
                      , m = t.oxw(2);
                    return m.selection.toggle(r),
                    t.KtG(m.emitSelectionToParent(l.id))
                }),
                t.qZA()
            }
        }
        function ci(n, a) {
            if (1 & n && (t.TgZ(0, "mat-table", 6),
            t.ynx(1, 7),
            t.YNc(2, Ka, 1, 0, "mat-header-cell", 8),
            t.YNc(3, za, 2, 1, "mat-cell", 9),
            t.BQk(),
            t.ynx(4, 10),
            t.YNc(5, $a, 1, 0, "mat-header-cell", 11),
            t.YNc(6, Va, 2, 1, "mat-cell", 9),
            t.BQk(),
            t.ynx(7, 12),
            t.YNc(8, Xa, 1, 0, "mat-header-cell", 11),
            t.YNc(9, ti, 2, 4, "mat-cell", 13),
            t.BQk(),
            t.ynx(10, 14),
            t.YNc(11, ei, 1, 0, "mat-header-cell", 11),
            t.YNc(12, ni, 2, 1, "mat-cell", 9),
            t.BQk(),
            t.ynx(13, 15),
            t.YNc(14, oi, 1, 0, "mat-header-cell", 11),
            t.YNc(15, ai, 3, 1, "mat-cell", 16),
            t.BQk(),
            t.ynx(16, 17),
            t.YNc(17, ii, 1, 0, "mat-header-cell", 11),
            t.YNc(18, ri, 3, 0, "mat-cell", 16),
            t.BQk(),
            t.YNc(19, si, 1, 0, "mat-header-row", 18),
            t.YNc(20, li, 1, 0, "mat-row", 19),
            t.qZA()),
            2 & n) {
                const e = t.oxw();
                t.Q6J("dataSource", e.dataSource),
                t.xp6(19),
                t.Q6J("matHeaderRowDef", e.displayedColumns),
                t.xp6(1),
                t.Q6J("matRowDefColumns", e.displayedColumns)
            }
        }
        function ui(n, a) {
            1 & n && (t.TgZ(0, "div", 30)(1, "button", 31)(2, "mat-icon"),
            t._uU(3, " add "),
            t.qZA(),
            t.TgZ(4, "span", 5),
            t._uU(5, "ADD_NEW_ADDRESS"),
            t.qZA()()())
        }
        function pi(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "button", 32),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.chooseAddress())
                }),
                t.TgZ(1, "mat-icon"),
                t._uU(2, " navigate_next "),
                t.qZA(),
                t.TgZ(3, "span", 5),
                t._uU(4, "LABEL_CONTINUE"),
                t.qZA()()
            }
            if (2 & n) {
                const e = t.oxw();
                t.Q6J("disabled", void 0 === e.addressId)
            }
        }
        O.vI.add(D.Xc, D.I7);
        let ee = (()=>{
            class n {
                constructor(e, o, i, r, l) {
                    this.addressService = e,
                    this.translate = o,
                    this.router = i,
                    this.ngZone = r,
                    this.snackBarHelperService = l,
                    this.emitSelection = new t.vpe,
                    this.allowEdit = !1,
                    this.addNewAddressDiv = !0,
                    this.showNextButton = !1,
                    this.addressId = void 0,
                    this.displayedColumns = ["Name", "Address", "Country"],
                    this.selection = new Ie.Ov(!1,[]),
                    this.addressExist = !1
                }
                ngOnInit() {
                    this.allowEdit ? this.displayedColumns.push("Edit", "Remove") : this.displayedColumns.unshift("Selection"),
                    this.load()
                }
                load() {
                    this.addressService.get().subscribe(e=>{
                        this.addressExist = e.length,
                        this.storedAddresses = e,
                        this.dataSource = new d.by(this.storedAddresses)
                    }
                    , e=>{
                        this.snackBarHelperService.open(e.error?.error, "errorBar"),
                        console.log(e)
                    }
                    )
                }
                emitSelectionToParent(e) {
                    this.selection.hasValue() ? (this.emitSelection.emit(e),
                    this.addressId = e) : (this.emitSelection.emit(void 0),
                    this.addressId = void 0)
                }
                chooseAddress() {
                    var e = this;
                    sessionStorage.setItem("addressId", this.addressId),
                    this.ngZone.run((0,
                    w.Z)(function*() {
                        return yield e.router.navigate(["/delivery-method"])
                    }))
                }
                deleteAddress(e) {
                    this.addressService.del(e).subscribe(()=>{
                        this.error = null,
                        this.translate.get("ADDRESS_REMOVED").subscribe(o=>{
                            this.snackBarHelperService.open(o, "confirmBar")
                        }
                        , o=>{
                            this.snackBarHelperService.open(o, "confirmBar")
                        }
                        ),
                        this.load()
                    }
                    , o=>{
                        this.snackBarHelperService.open(o.error?.error, "errorBar"),
                        console.log(o)
                    }
                    )
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(mt),t.Y36(u.sK),t.Y36(L.F0),t.Y36(t.R0b),t.Y36(J.H))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-address"]],
                inputs: {
                    allowEdit: "allowEdit",
                    addNewAddressDiv: "addNewAddressDiv",
                    showNextButton: "showNextButton"
                },
                outputs: {
                    emitSelection: "emitSelection"
                },
                decls: 6,
                vars: 7,
                consts: [[1, "mat-elevation-z6"], ["translate", "", 4, "ngIf"], [3, "dataSource", 4, "ngIf"], ["style", "margin-top: 20px;", 4, "ngIf"], ["mat-raised-button", "", "mat-button", "", "class", "btn btn-next", "color", "primary", "aria-label", "Proceed to payment selection", 3, "disabled", "click", 4, "ngIf"], ["translate", ""], [3, "dataSource"], ["matColumnDef", "Selection"], ["fxFlex", "20%", 4, "matHeaderCellDef"], ["fxFlex", "20%", 4, "matCellDef"], ["matColumnDef", "Name"], ["style", "display: none;", 4, "matHeaderCellDef"], ["matColumnDef", "Address"], ["fxFlex", "40%", 4, "matCellDef"], ["matColumnDef", "Country"], ["matColumnDef", "Edit"], ["fxflex", "10%", 4, "matCellDef"], ["matColumnDef", "Remove"], [4, "matHeaderRowDef"], [3, "click", 4, "matRowDef", "matRowDefColumns"], ["fxFlex", "20%"], [3, "checked", "click", "change"], [2, "display", "none"], ["fxFlex", "40%"], ["fxflex", "10%"], ["mat-icon-button", "", 3, "routerLink"], [1, "far", "fa-edit"], ["mat-icon-button", "", 3, "click"], [1, "far", "fa-trash-alt"], [3, "click"], [2, "margin-top", "20px"], ["mat-raised-button", "", "mat-button", "", "color", "primary", "aria-label", "Add a new address", "routerLink", "/address/create", 1, "btn", "btn-new-address"], ["mat-raised-button", "", "mat-button", "", "color", "primary", "aria-label", "Proceed to payment selection", 1, "btn", "btn-next", 3, "disabled", "click"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "mat-card", 0),
                    t.YNc(1, ja, 2, 0, "h1", 1),
                    t.YNc(2, Wa, 2, 0, "h1", 1),
                    t.YNc(3, ci, 21, 3, "mat-table", 2),
                    t.YNc(4, ui, 6, 0, "div", 3),
                    t.YNc(5, pi, 5, 1, "button", 4),
                    t.qZA()),
                    2 & e && (t.ekj("div-boundary", !o.addNewAddressDiv),
                    t.xp6(1),
                    t.Q6J("ngIf", o.showNextButton),
                    t.xp6(1),
                    t.Q6J("ngIf", !o.showNextButton),
                    t.xp6(1),
                    t.Q6J("ngIf", o.addressExist),
                    t.xp6(1),
                    t.Q6J("ngIf", o.addNewAddressDiv),
                    t.xp6(1),
                    t.Q6J("ngIf", o.showNextButton))
                },
                dependencies: [h.O5, L.rH, u.Pi, p.yH, F.Hw, x.lW, d.BZ, d.fO, d.as, d.w1, d.Dz, d.nj, d.ge, d.ev, d.XQ, d.Gk, T.a8, nt.U0],
                styles: [".btn-new-address[_ngcontent-%COMP%]{display:block;margin-left:0;margin-right:auto}.btn-next[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:0;margin-top:-37px}mat-header-row[_ngcontent-%COMP%]{min-height:0!important}.heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);font-size:x-large}.heading-text[_ngcontent-%COMP%]{justify-content:center;padding:12px 20px}.div-boundary[_ngcontent-%COMP%]{border:1px solid rgba(255,255,255,.3);border-radius:5px;box-shadow:0 0!important}"]
            }),
            n
        }
        )();
        var Nt = c(9602);
        const di = ["addressComp"];
        function mi(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 2),
            t._uU(1, " MANDATORY_QUANTITY "),
            t.qZA())
        }
        const gi = function() {
            return {
                range: "10-1000"
            }
        };
        function hi(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 21),
            t._uU(1, "INVALID_QUANTITY "),
            t.qZA()),
            2 & n && t.Q6J("translateParams", t.DdM(1, gi))
        }
        function _i(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 2),
            t._uU(1, "INVALID_DATE"),
            t.qZA())
        }
        function fi(n, a) {
            if (1 & n && (t.TgZ(0, "mat-form-field", 22)(1, "mat-label", 2),
            t._uU(2, "LABEL_PICKUP_DATE"),
            t.qZA(),
            t._UZ(3, "input", 23)(4, "mat-datepicker-toggle", 24)(5, "mat-datepicker", null, 25),
            t.YNc(7, _i, 2, 0, "mat-error", 7),
            t.qZA()),
            2 & n) {
                const e = t.MAs(6)
                  , o = t.oxw();
                t.xp6(3),
                t.Q6J("formControl", o.pickUpDateControl)("matDatepicker", e),
                t.xp6(1),
                t.Q6J("for", e),
                t.xp6(3),
                t.Q6J("ngIf", o.pickUpDateControl.invalid)
            }
        }
        function Ci(n, a) {
            if (1 & n && (t.TgZ(0, "mat-checkbox", 26),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & n) {
                const e = t.oxw();
                t.Q6J("formControl", e.pickup),
                t.xp6(1),
                t.hij("", t.lcZ(2, 2, "REQUEST_PICKUP"), " ")
            }
        }
        O.vI.add(g.XCy);
        let vi = (()=>{
            class n {
                constructor(e, o, i, r, l, m) {
                    this.recycleService = e,
                    this.userService = o,
                    this.configurationService = i,
                    this.formSubmitService = r,
                    this.translate = l,
                    this.snackBarHelperService = m,
                    this.requestorControl = new s.p4({
                        value: "",
                        disabled: !0
                    },[]),
                    this.recycleQuantityControl = new s.p4("",[s.kI.required, s.kI.min(10), s.kI.max(1e3)]),
                    this.pickUpDateControl = new s.p4,
                    this.pickup = new s.p4(!1),
                    this.recycle = {},
                    this.addressId = void 0
                }
                ngOnInit() {
                    this.configurationService.getApplicationConfiguration().subscribe(e=>{
                        e?.application?.recyclePage && (this.topImage = `assets/public/images/products/${e.application.recyclePage.topProductImage}`,
                        this.bottomImage = `assets/public/images/products/${e.application.recyclePage.bottomProductImage}`)
                    }
                    , e=>{
                        console.log(e)
                    }
                    ),
                    this.initRecycle(),
                    this.findAll(),
                    this.formSubmitService.attachEnterKeyHandler("recycle-form", "recycleButton", ()=>{
                        this.save()
                    }
                    )
                }
                initRecycle() {
                    this.userService.whoAmI().subscribe(e=>{
                        this.recycle = {},
                        this.recycle.UserId = e.id,
                        this.userEmail = e.email,
                        this.requestorControl.setValue(this.userEmail)
                    }
                    , e=>{
                        console.log(e)
                    }
                    )
                }
                save() {
                    this.recycle.AddressId = this.addressId,
                    this.recycle.quantity = this.recycleQuantityControl.value,
                    this.pickup.value && (this.recycle.isPickUp = this.pickup.value,
                    this.recycle.date = this.pickUpDateControl.value),
                    this.recycleService.save(this.recycle).subscribe(e=>{
                        e.isPickup ? this.translate.get("CONFIRM_RECYCLING_PICKUP", {
                            pickupdate: e.pickupDate
                        }).subscribe(o=>{
                            this.snackBarHelperService.open(o, "confirmBar")
                        }
                        , o=>{
                            this.snackBarHelperService.open(o, "confirmBar")
                        }
                        ) : this.translate.get("CONFIRM_RECYCLING_BOX").subscribe(o=>{
                            this.snackBarHelperService.open(o, "confirmBar")
                        }
                        , o=>{
                            this.snackBarHelperService.open(o, "confirmBar")
                        }
                        ),
                        this.addressComponent.load(),
                        this.initRecycle(),
                        this.resetForm()
                    }
                    , e=>{
                        this.snackBarHelperService.open(e.error?.error, "errorBar"),
                        console.log(e)
                    }
                    )
                }
                findAll() {
                    this.recycleService.find().subscribe(e=>{
                        this.recycles = e
                    }
                    , e=>{
                        console.log(e)
                    }
                    )
                }
                resetForm() {
                    this.addressId = void 0,
                    this.recycleQuantityControl.setValue(""),
                    this.recycleQuantityControl.markAsPristine(),
                    this.recycleQuantityControl.markAsUntouched(),
                    this.pickUpDateControl.setValue(""),
                    this.pickUpDateControl.markAsPristine(),
                    this.pickUpDateControl.markAsUntouched(),
                    this.pickup.setValue(!1)
                }
                getMessage(e) {
                    this.addressId = e
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(ke),t.Y36(R),t.Y36(b.e),t.Y36(rt),t.Y36(u.sK),t.Y36(J.H))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-recycle"]],
                viewQuery: function(e, o) {
                    if (1 & e && t.Gf(di, 7),
                    2 & e) {
                        let i;
                        t.iGM(i = t.CRH()) && (o.addressComponent = i.first)
                    }
                },
                decls: 41,
                vars: 16,
                consts: [["fxLayout", "row", "fxLayoutGap", "5%", "fxLayout.lt-md", "column", "fxLayoutGap.lt-md", "20px", 1, "mat-elevation-z6", "mat-own-card"], ["fxLayout", "column", "fxLayoutGap", "20px", "fxFlex", "50%"], ["translate", ""], ["id", "recycle-form", 1, "form-container"], ["appearance", "outline", "color", "accent"], ["type", "text", "matInput", "", 3, "formControl"], ["type", "number", "matInput", "", 3, "formControl", "placeholder"], ["translate", "", 4, "ngIf"], ["translate", "", 3, "translateParams", 4, "ngIf"], [1, "mat-elevation-z0", 3, "addNewAddressDiv", "emitSelection"], ["addressComp", ""], ["appearance", "outline", 4, "ngIf"], [3, "formControl", 4, "ngIf"], ["type", "submit", "id", "recycleButton", "mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [1, "fas", "fa-paper-plane", "fa-lg"], ["fxFlex", "50%"], ["fxLayout", "column", "fxLayoutGap", "20px", "fxLayoutAlign", "center"], ["translate", "", 1, "responsibility-header"], ["fxLayout", "row", "fxLayoutGap", "20px", 1, "mat-elevation-z0"], ["mat-card-image", "", 3, "src"], [1, "fill-remaining-space"], ["translate", "", 3, "translateParams"], ["appearance", "outline"], ["matInput", "", 3, "formControl", "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], [3, "formControl"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "mat-card", 0)(1, "div", 1)(2, "h1", 2),
                    t._uU(3, "TITLE_RECYCLE"),
                    t.qZA(),
                    t.TgZ(4, "div", 3)(5, "mat-form-field", 4)(6, "mat-label", 2),
                    t._uU(7, "LABEL_REQUESTOR"),
                    t.qZA(),
                    t._UZ(8, "input", 5),
                    t.qZA(),
                    t.TgZ(9, "mat-form-field", 4)(10, "mat-label", 2),
                    t._uU(11, "LABEL_QUANTITY"),
                    t.qZA(),
                    t._UZ(12, "input", 6),
                    t.ALo(13, "translate"),
                    t.YNc(14, mi, 2, 0, "mat-error", 7),
                    t.YNc(15, hi, 2, 2, "mat-error", 8),
                    t.qZA(),
                    t.TgZ(16, "app-address", 9, 10),
                    t.NdJ("emitSelection", function(r) {
                        return o.getMessage(r)
                    }),
                    t.qZA(),
                    t.YNc(18, fi, 8, 4, "mat-form-field", 11),
                    t.YNc(19, Ci, 3, 4, "mat-checkbox", 12),
                    t.qZA(),
                    t.TgZ(20, "button", 13),
                    t.NdJ("click", function() {
                        return o.save()
                    }),
                    t._UZ(21, "i", 14),
                    t._uU(22),
                    t.ALo(23, "translate"),
                    t.qZA()(),
                    t.TgZ(24, "div", 15)(25, "div", 16)(26, "h3", 17),
                    t._uU(27, "SECTION_PRESS_JUICE_RESPONSIBLY"),
                    t.qZA(),
                    t.TgZ(28, "mat-card", 18),
                    t._UZ(29, "img", 19),
                    t.TgZ(30, "mat-card-content")(31, "div")(32, "small"),
                    t._uU(33, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. "),
                    t.qZA()()()(),
                    t.TgZ(34, "mat-card", 18),
                    t._UZ(35, "img", 19),
                    t.TgZ(36, "mat-card-content")(37, "div")(38, "small"),
                    t._uU(39, "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "),
                    t.qZA()()()(),
                    t._UZ(40, "span", 20),
                    t.qZA()()()),
                    2 & e && (t.xp6(8),
                    t.Q6J("formControl", o.requestorControl),
                    t.xp6(4),
                    t.Q6J("formControl", o.recycleQuantityControl)("placeholder", t.lcZ(13, 12, "IN_LITERS_PLACEHOLDER")),
                    t.xp6(2),
                    t.Q6J("ngIf", o.recycleQuantityControl.invalid && o.recycleQuantityControl.errors.required),
                    t.xp6(1),
                    t.Q6J("ngIf", o.recycleQuantityControl.invalid && (o.recycleQuantityControl.errors.min || o.recycleQuantityControl.errors.max)),
                    t.xp6(1),
                    t.Q6J("addNewAddressDiv", !1),
                    t.xp6(2),
                    t.Q6J("ngIf", o.pickup.value && o.recycleQuantityControl.value > 100),
                    t.xp6(1),
                    t.Q6J("ngIf", o.recycleQuantityControl.value > 100),
                    t.xp6(1),
                    t.Q6J("disabled", void 0 === o.addressId || o.recycleQuantityControl.invalid || o.pickUpDateControl.invalid),
                    t.xp6(2),
                    t.hij(" ", t.lcZ(23, 14, "BTN_SUBMIT"), " "),
                    t.xp6(7),
                    t.Q6J("src", o.topImage, t.LSH),
                    t.xp6(6),
                    t.Q6J("src", o.bottomImage, t.LSH))
                },
                dependencies: [h.O5, u.Pi, p.xw, p.SQ, p.Wh, p.yH, s.Fj, s.wV, s.JJ, s.oH, f.TO, f.KE, f.hX, f.R9, x.lW, T.a8, T.dn, T.G2, B.Nt, Xt.oG, Nt.Mq, Nt.hl, Nt.nW, ee, u.X$],
                styles: ["mat-form-field[_ngcontent-%COMP%]{padding-top:10px}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}button[_ngcontent-%COMP%]{margin-left:20%;margin-top:5px;width:60%}.mat-own-card[_ngcontent-%COMP%]{display:block;margin-left:10%;margin-right:10%}mat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100px;width:auto}mat-checkbox[_ngcontent-%COMP%]{margin-bottom:20px}.fill-remaining-space[_ngcontent-%COMP%]{flex:1 1 auto}"]
            }),
            n
        }
        )()
          , ot = (()=>{
            class n {
                constructor(e) {
                    this.http = e,
                    this.hostServer = P.N.hostServer,
                    this.host = this.hostServer + "/api/Challenges"
                }
                find(e) {
                    return this.http.get(this.host + "/", {
                        params: e
                    }).pipe((0,
                    C.U)(o=>o.data), (0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
                repeatNotification(e) {
                    return this.http.get(this.hostServer + "/rest/repeat-notification", {
                        params: {
                            challenge: e
                        },
                        responseType: "text"
                    }).pipe((0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
                continueCode() {
                    return this.http.get(this.hostServer + "/rest/continue-code").pipe((0,
                    C.U)(e=>e.continueCode), (0,
                    _.K)(e=>{
                        throw e
                    }
                    ))
                }
                continueCodeFindIt() {
                    return this.http.get(this.hostServer + "/rest/continue-code-findIt").pipe((0,
                    C.U)(e=>e.continueCode), (0,
                    _.K)(e=>{
                        throw e
                    }
                    ))
                }
                continueCodeFixIt() {
                    return this.http.get(this.hostServer + "/rest/continue-code-fixIt").pipe((0,
                    C.U)(e=>e.continueCode), (0,
                    _.K)(e=>{
                        throw e
                    }
                    ))
                }
                restoreProgress(e) {
                    return this.http.put(this.hostServer + "/rest/continue-code/apply/" + e, {}).pipe((0,
                    C.U)(o=>o.data), (0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
                restoreProgressFindIt(e) {
                    return this.http.put(this.hostServer + "/rest/continue-code-findIt/apply/" + e, {}).pipe((0,
                    C.U)(o=>o.data), (0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
                restoreProgressFixIt(e) {
                    return this.http.put(this.hostServer + "/rest/continue-code-fixIt/apply/" + e, {}).pipe((0,
                    C.U)(o=>o.data), (0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.LFG(U.eN))
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )();
        var Oe = c(9441)
          , xi = c(5254)
          , Et = c(1086);
        let Ue = (()=>{
            class n {
                constructor(e, o, i, r) {
                    this.cookieService = e,
                    this.challengeService = o,
                    this.snackBarHelperService = i,
                    this.snackBar = r,
                    this.VERSION = 1
                }
                save(e="owasp_juice_shop") {
                    const o = {
                        version: this.VERSION
                    };
                    o.scoreBoard = {
                        scoreBoardVersion: localStorage.getItem("score-board-version") ? JSON.parse(String(localStorage.getItem("score-board-version"))) : void 0,
                        displayedDifficulties: localStorage.getItem("displayedDifficulties") ? JSON.parse(String(localStorage.getItem("displayedDifficulties"))) : void 0,
                        showSolvedChallenges: localStorage.getItem("showSolvedChallenges") ? JSON.parse(String(localStorage.getItem("showSolvedChallenges"))) : void 0,
                        showDisabledChallenges: localStorage.getItem("showDisabledChallenges") ? JSON.parse(String(localStorage.getItem("showDisabledChallenges"))) : void 0,
                        showOnlyTutorialChallenges: localStorage.getItem("showOnlyTutorialChallenges") ? JSON.parse(String(localStorage.getItem("showOnlyTutorialChallenges"))) : void 0,
                        displayedChallengeCategories: localStorage.getItem("displayedChallengeCategories") ? JSON.parse(String(localStorage.getItem("displayedChallengeCategories"))) : void 0
                    },
                    o.banners = {
                        welcomeBannerStatus: this.cookieService.get("welcomebanner_status") ? this.cookieService.get("welcomebanner_status") : void 0,
                        cookieConsentStatus: this.cookieService.get("cookieconsent_status") ? this.cookieService.get("cookieconsent_status") : void 0
                    },
                    o.language = this.cookieService.get("language") ? this.cookieService.get("language") : void 0;
                    const i = this.challengeService.continueCode()
                      , r = this.challengeService.continueCodeFindIt()
                      , l = this.challengeService.continueCodeFixIt();
                    (0,
                    Pt.D)([i, r, l]).subscribe(([m,v,A])=>{
                        o.continueCode = m,
                        o.continueCodeFindIt = v,
                        o.continueCodeFixIt = A;
                        const q = new Blob([JSON.stringify(o)],{
                            type: "text/plain;charset=utf-8"
                        });
                        (0,
                        Oe.saveAs)(q, `${e}-${(new Date).toISOString().split("T")[0]}.json`)
                    }
                    , ()=>{
                        console.log("Failed to retrieve continue code(s) for backup from server. Using cookie values as fallback."),
                        o.continueCode = this.cookieService.get("continueCode") ? this.cookieService.get("continueCode") : void 0,
                        o.continueCodeFindIt = this.cookieService.get("continueCodeFindIt") ? this.cookieService.get("continueCodeFindIt") : void 0,
                        o.continueCodeFixIt = this.cookieService.get("continueCodeFixIt") ? this.cookieService.get("continueCodeFixIt") : void 0;
                        const m = new Blob([JSON.stringify(o)],{
                            type: "text/plain;charset=utf-8"
                        });
                        (0,
                        Oe.saveAs)(m, `${e}-${(new Date).toISOString().split("T")[0]}.json`)
                    }
                    )
                }
                restore(e) {
                    return (0,
                    xi.D)(e.text().then(o=>{
                        const i = JSON.parse(o);
                        i.version === this.VERSION ? (this.restoreLocalStorage("score-board-version", i.scoreBoard?.scoreBoardVersion),
                        this.restoreLocalStorage("displayedDifficulties", i.scoreBoard?.displayedDifficulties),
                        this.restoreLocalStorage("showSolvedChallenges", i.scoreBoard?.showSolvedChallenges),
                        this.restoreLocalStorage("showDisabledChallenges", i.scoreBoard?.showDisabledChallenges),
                        this.restoreLocalStorage("showOnlyTutorialChallenges", i.scoreBoard?.showOnlyTutorialChallenges),
                        this.restoreLocalStorage("displayedChallengeCategories", i.scoreBoard?.displayedChallengeCategories),
                        this.restoreCookie("welcomebanner_status", i.banners?.welcomeBannerStatus),
                        this.restoreCookie("cookieconsent_status", i.banners?.cookieConsentStatus),
                        this.restoreCookie("language", i.language),
                        this.restoreCookie("continueCodeFindIt", i.continueCodeFindIt),
                        this.restoreCookie("continueCodeFixIt", i.continueCodeFixIt),
                        this.restoreCookie("continueCode", i.continueCode),
                        this.snackBar.open("Backup has been restored from " + e.name, "Apply changes now", {
                            duration: 1e4
                        }).onAction().subscribe(()=>{
                            const l = i.continueCode ? this.challengeService.restoreProgress(encodeURIComponent(i.continueCode)) : (0,
                            Et.of)(!0)
                              , m = i.continueCodeFindIt ? this.challengeService.restoreProgressFindIt(encodeURIComponent(i.continueCodeFindIt)) : (0,
                            Et.of)(!0)
                              , v = i.continueCodeFixIt ? this.challengeService.restoreProgressFixIt(encodeURIComponent(i.continueCodeFixIt)) : (0,
                            Et.of)(!0);
                            (0,
                            Pt.D)([l, m, v]).subscribe(()=>{
                                location.reload()
                            }
                            , A=>{
                                console.log(A)
                            }
                            )
                        }
                        )) : this.snackBarHelperService.open(`Version ${i.version} is incompatible with expected version ${this.VERSION}`, "errorBar")
                    }
                    ).catch(o=>{
                        this.snackBarHelperService.open(`Backup restore operation failed: ${o.message}`, "errorBar")
                    }
                    ))
                }
                restoreCookie(e, o) {
                    if (o) {
                        const i = new Date;
                        i.setFullYear(i.getFullYear() + 1),
                        this.cookieService.put(e, o, {
                            expires: i
                        })
                    } else
                        this.cookieService.remove(e)
                }
                restoreLocalStorage(e, o) {
                    o ? localStorage.setItem(e, JSON.stringify(o)) : localStorage.removeItem(e)
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.LFG(I.N_),t.LFG(ot),t.LFG(J.H),t.LFG(ut.ux))
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )()
          , ne = (()=>{
            class n {
                constructor(e) {
                    this.http = e,
                    this.hostServer = P.N.hostServer,
                    this.host = this.hostServer + "/snippets"
                }
                get(e) {
                    return this.http.get(`${this.host}/${e}`).pipe((0,
                    C.U)(o=>o), (0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
                challenges() {
                    return this.http.get(`${this.host}`).pipe((0,
                    C.U)(e=>e.challenges), (0,
                    _.K)(e=>{
                        throw e
                    }
                    ))
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.LFG(U.eN))
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )()
          , bi = (()=>{
            class n {
                constructor(e) {
                    this.http = e,
                    this.hostServer = P.N.hostServer,
                    this.host = this.hostServer + "/snippets/fixes"
                }
                get(e) {
                    return this.http.get(this.host + `/${e}`).pipe((0,
                    C.U)(o=>o), (0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
                check(e, o) {
                    return this.http.post(this.host, {
                        key: e,
                        selectedFix: o
                    }).pipe((0,
                    C.U)(i=>i), (0,
                    _.K)(i=>{
                        throw i
                    }
                    ))
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.LFG(U.eN))
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )()
          , Ti = (()=>{
            class n {
                constructor(e) {
                    this.http = e,
                    this.hostServer = P.N.hostServer,
                    this.host = this.hostServer + "/snippets/verdict"
                }
                check(e, o) {
                    return this.http.post(this.host, {
                        key: e,
                        selectedLines: o
                    }).pipe((0,
                    C.U)(i=>i), (0,
                    _.K)(i=>{
                        throw i
                    }
                    ))
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.LFG(U.eN))
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )();
        var Mt = c(3848)
          , oe = c(8225);
        function Ai(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "div", 5),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.oxw();
                    return t.KtG(l.selectLines(r.lineNumber))
                }),
                t._uU(1),
                t.qZA()
            }
            if (2 & n) {
                const e = a.$implicit;
                t.Q6J("id", "line" + e.lineNumber),
                t.xp6(1),
                t.Oqu(e.marked ? "\u2705" : "\u{1f532}")
            }
        }
        let yi = (()=>{
            class n {
                constructor() {
                    this.code = "",
                    this.addLine = new t.vpe,
                    this.langs = ["javascript", "typescript", "json", "yaml"]
                }
                ngOnInit() {
                    this.lineMarkers = this.code.split("\n").map((e,o)=>({
                        lineNumber: o + 1,
                        marked: !1
                    }))
                }
                selectLines(e) {
                    const o = this.lineMarkers[e - 1];
                    o.marked = !o.marked;
                    const i = [];
                    for (const {marked: r, lineNumber: l} of this.lineMarkers)
                        r && i.push(l);
                    this.addLine.emit(i)
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-code-area"]],
                inputs: {
                    code: "code",
                    vulnLines: "vulnLines"
                },
                outputs: {
                    addLine: "addLine"
                },
                decls: 6,
                vars: 4,
                consts: [["id", "code-area"], ["id", "code"], ["id", "emphasize"], ["class", "lineMarker", 3, "id", "click", 4, "ngFor", "ngForOf"], [3, "highlight", "lineNumbers", "languages"], [1, "lineMarker", 3, "id", "click"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "div", 0)(1, "pre", 1)(2, "div", 2),
                    t.YNc(3, Ai, 2, 2, "div", 3),
                    t._uU(4, "\n  "),
                    t.qZA(),
                    t._UZ(5, "code", 4),
                    t.qZA()()),
                    2 & e && (t.xp6(3),
                    t.Q6J("ngForOf", o.lineMarkers),
                    t.xp6(2),
                    t.Q6J("highlight", o.code)("lineNumbers", !0)("languages", o.langs))
                },
                dependencies: [h.sg, oe.y$],
                styles: ["pre[_ngcontent-%COMP%]   code.hljs[_ngcontent-%COMP%]{display:block;overflow-x:auto;padding:1em}code.hljs[_ngcontent-%COMP%]{padding:3px 5px}.hljs[_ngcontent-%COMP%]{background:white;color:#000}.hljs-comment[_ngcontent-%COMP%], .hljs-quote[_ngcontent-%COMP%], .hljs-variable[_ngcontent-%COMP%]{color:green}.hljs-keyword[_ngcontent-%COMP%], .hljs-selector-tag[_ngcontent-%COMP%], .hljs-built_in[_ngcontent-%COMP%], .hljs-name[_ngcontent-%COMP%], .hljs-tag[_ngcontent-%COMP%]{color:#00f}.hljs-string[_ngcontent-%COMP%], .hljs-title[_ngcontent-%COMP%], .hljs-section[_ngcontent-%COMP%], .hljs-attribute[_ngcontent-%COMP%], .hljs-literal[_ngcontent-%COMP%], .hljs-template-tag[_ngcontent-%COMP%], .hljs-template-variable[_ngcontent-%COMP%], .hljs-type[_ngcontent-%COMP%], .hljs-addition[_ngcontent-%COMP%]{color:#a31515}.hljs-deletion[_ngcontent-%COMP%], .hljs-selector-attr[_ngcontent-%COMP%], .hljs-selector-pseudo[_ngcontent-%COMP%], .hljs-meta[_ngcontent-%COMP%]{color:#2b91af}.hljs-doctag[_ngcontent-%COMP%]{color:gray}.hljs-attr[_ngcontent-%COMP%]{color:red}.hljs-symbol[_ngcontent-%COMP%], .hljs-bullet[_ngcontent-%COMP%], .hljs-link[_ngcontent-%COMP%]{color:#00b0e8}.hljs-emphasis[_ngcontent-%COMP%]{font-style:italic}.hljs-strong[_ngcontent-%COMP%]{font-weight:700}#emphasize[_ngcontent-%COMP%]{float:left;padding:1em .5em}#code[_ngcontent-%COMP%]{width:63em}.lineMarker[_ngcontent-%COMP%]{cursor:pointer}"]
            }),
            n
        }
        )();
        var Le = c(5244);
        const Zi = ["codeComponent"];
        function wi(n, a) {
            if (1 & n && (t.TgZ(0, "div"),
            t._UZ(1, "td-ngx-text-diff", 4, 5),
            t.qZA()),
            2 & n) {
                const e = t.oxw().$implicit
                  , o = t.oxw();
                t.xp6(1),
                t.Q6J("left", o.snippet)("right", null == e ? null : e.fix)("format", o.format)
            }
        }
        function Si(n, a) {
            if (1 & n && (t.TgZ(0, "div", 2),
            t.YNc(1, wi, 3, 3, "div", 3),
            t.qZA()),
            2 & n) {
                const e = a.index
                  , o = t.oxw();
                t.xp6(1),
                t.Q6J("ngIf", o.selectedFix === e)
            }
        }
        let ki = (()=>{
            class n {
                constructor(e, o) {
                    this.cookieService = e,
                    this.differs = o,
                    this.snippet = "",
                    this.fixes = [],
                    this.selectedFix = 0,
                    this.randomFixes = [],
                    this.format = "SideBySide",
                    this.cookieService = e,
                    this.differ = this.differs.find({}).create()
                }
                ngOnInit() {
                    this.cookieService.hasKey("code-fixes-component-format") ? this.format = this.cookieService.get("code-fixes-component-format") : (this.format = "LineByLine",
                    this.cookieService.put("code-fixes-component-format", "LineByLine"))
                }
                ngDoCheck() {
                    try {
                        const e = this.differ.diff({
                            "diff-format": this.codeComponent.format
                        });
                        e && e.forEachChangedItem(o=>{
                            this.format = o.currentValue,
                            this.cookieService.put("code-fixes-component-format", this.format)
                        }
                        )
                    } catch {}
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(I.N_),t.Y36(t.aQg))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-code-fixes"]],
                viewQuery: function(e, o) {
                    if (1 & e && t.Gf(Zi, 5),
                    2 & e) {
                        let i;
                        t.iGM(i = t.CRH()) && (o.codeComponent = i.first)
                    }
                },
                inputs: {
                    snippet: "snippet",
                    fixes: "fixes",
                    selectedFix: "selectedFix",
                    randomFixes: "randomFixes",
                    format: "format"
                },
                decls: 2,
                vars: 1,
                consts: [[1, "wrapper"], ["id", "code", 4, "ngFor", "ngForOf"], ["id", "code"], [4, "ngIf"], [3, "left", "right", "format"], ["codeComponent", ""]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "section", 0),
                    t.YNc(1, Si, 2, 1, "div", 1),
                    t.qZA()),
                    2 & e && (t.xp6(1),
                    t.Q6J("ngForOf", o.randomFixes))
                },
                dependencies: [h.sg, h.O5, Le.zB],
                styles: ["#code[_ngcontent-%COMP%]{width:63em}.wrapper[_ngcontent-%COMP%]{padding-top:16px}"]
            }),
            n
        }
        )();
        function Ii(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "app-code-area", 22),
                t.NdJ("addLine", function(i) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.addLine(i))
                }),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw();
                t.Q6J("code", null == e.snippet ? null : e.snippet.snippet)("vulnLines", null == e.snippet ? null : e.snippet.vulnLines)
            }
        }
        function Oi(n, a) {
            1 & n && (t.TgZ(0, "pre"),
            t._uU(1, "            "),
            t.TgZ(2, "code", 23),
            t._uU(3, "LOADING_CODE_SNIPPET"),
            t.qZA(),
            t._uU(4, "\n          "),
            t.qZA())
        }
        function Ui(n, a) {
            if (1 & n && (t._uU(0),
            t.ALo(1, "translate"),
            t.TgZ(2, "mat-icon", 24),
            t._uU(3),
            t.qZA()),
            2 & n) {
                const e = t.oxw();
                t.hij(" ", t.lcZ(1, 3, "TAB_FIX_IT"), " "),
                t.xp6(2),
                t.Q6J("color", e.lockColor()),
                t.xp6(1),
                t.Oqu(e.lockIcon())
            }
        }
        function Li(n, a) {
            if (1 & n && t._UZ(0, "app-code-fixes", 25),
            2 & n) {
                const e = t.oxw();
                t.Q6J("snippet", null == e.snippet ? null : e.snippet.snippet)("fixes", e.fixes)("randomFixes", e.randomFixes)("selectedFix", e.selectedFix)
            }
        }
        function Pi(n, a) {
            if (1 & n && (t.TgZ(0, "mat-card", 26),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = t.oxw();
                t.xp6(1),
                t.hij(" ", e.hint, " ")
            }
        }
        function Ni(n, a) {
            if (1 & n && (t.TgZ(0, "mat-card"),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = t.oxw();
                t.Tol("warn" === e.resultColor() ? "warn-notification" : "accent-notification"),
                t.xp6(1),
                t.hij(" ", e.explanation, " ")
            }
        }
        function Ei(n, a) {
            if (1 & n && (t.TgZ(0, "option", 30),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = a.index
                  , o = t.oxw(2);
                t.Q6J("value", e)("selected", o.selectedFix === e),
                t.xp6(1),
                t.hij("Fix ", e + 1, "")
            }
        }
        function Mi(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "mat-form-field", 27)(1, "mat-label", 23),
                t._uU(2, "LABEL_CORRECT_FIX"),
                t.qZA(),
                t.TgZ(3, "select", 28),
                t.NdJ("change", function(i) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.changeFix(i))
                }),
                t.YNc(4, Ei, 2, 3, "option", 29),
                t.qZA()()
            }
            if (2 & n) {
                const e = t.oxw();
                t.xp6(4),
                t.Q6J("ngForOf", e.randomFixes)
            }
        }
        function Di(n, a) {
            if (1 & n && (t.TgZ(0, "a", 31)(1, "button", 32)(2, "mat-icon", 33),
            t._uU(3, "thumb_up"),
            t.qZA()()()),
            2 & n) {
                const e = t.oxw();
                t.Q6J("href", "https://docs.google.com/forms/d/e/1FAIpQLSdaNEuz0dzFA2sexCa0AJ4QOb2OYdEL04eQOLFD2Y4T-BW6ag/viewform?usp=pp_url&entry.384948954=" + e.dialogData.name + "&entry.435235279=Coding+Challenge&entry.1734944650=Yes", t.LSH)
            }
        }
        function qi(n, a) {
            if (1 & n && (t.TgZ(0, "a", 31)(1, "button", 32)(2, "mat-icon", 34),
            t._uU(3, "thumb_down"),
            t.qZA()()()),
            2 & n) {
                const e = t.oxw();
                t.Q6J("href", "https://docs.google.com/forms/d/e/1FAIpQLSdaNEuz0dzFA2sexCa0AJ4QOb2OYdEL04eQOLFD2Y4T-BW6ag/viewform?usp=pp_url&entry.384948954=" + e.dialogData.name + "&entry.435235279=Coding+Challenge&entry.1734944650=No", t.LSH)
            }
        }
        function Fi(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "button", 35),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.checkLines())
                }),
                t.TgZ(1, "span"),
                t._uU(2),
                t.ALo(3, "translate"),
                t.qZA(),
                t.TgZ(4, "mat-icon", 36),
                t._uU(5),
                t.qZA()()
            }
            if (2 & n) {
                const e = t.oxw();
                t.Q6J("disabled", e.solved.findIt),
                t.xp6(2),
                t.hij(" ", t.lcZ(3, 4, "BTN_SUBMIT"), ""),
                t.xp6(2),
                t.Q6J("color", e.resultColor()),
                t.xp6(1),
                t.hij(" ", e.resultIcon(), " ")
            }
        }
        function Bi(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "button", 37),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.checkFix())
                }),
                t.TgZ(1, "span"),
                t._uU(2),
                t.ALo(3, "translate"),
                t.qZA(),
                t.TgZ(4, "mat-icon", 36),
                t._uU(5),
                t.qZA()()
            }
            if (2 & n) {
                const e = t.oxw();
                t.Q6J("disabled", e.solved.fixIt),
                t.xp6(2),
                t.hij(" ", t.lcZ(3, 4, "BTN_SUBMIT"), ""),
                t.xp6(2),
                t.Q6J("color", e.resultColor()),
                t.xp6(1),
                t.hij(" ", e.resultIcon(), " ")
            }
        }
        const Ri = function(n) {
            return {
                "btns-findit": n
            }
        };
        var H = (()=>{
            return (n = H || (H = {}))[n.Undecided = 0] = "Undecided",
            n[n.Right = 1] = "Right",
            n[n.Wrong = 2] = "Wrong",
            H;
            var n
        }
        )();
        let Pe = (()=>{
            class n {
                constructor(e, o, i, r, l, m, v) {
                    this.dialogData = e,
                    this.configurationService = o,
                    this.codeSnippetService = i,
                    this.vulnLinesService = r,
                    this.codeFixesService = l,
                    this.challengeService = m,
                    this.cookieService = v,
                    this.snippet = null,
                    this.fixes = null,
                    this.selectedFix = 0,
                    this.tab = new s.p4(0),
                    this.lock = H.Undecided,
                    this.result = H.Undecided,
                    this.hint = null,
                    this.explanation = null,
                    this.solved = {
                        findIt: !1,
                        fixIt: !1
                    },
                    this.showFeedbackButtons = !0,
                    this.randomFixes = [],
                    this.addLine = A=>{
                        this.selectedLines = A
                    }
                    ,
                    this.setFix = A=>{
                        this.selectedFix = A,
                        this.explanation = null
                    }
                    ,
                    this.toggleTab = A=>{
                        this.tab.setValue(A),
                        this.result = H.Undecided,
                        0 === A && this.solved.findIt && (this.result = H.Right),
                        1 === A && this.solved.fixIt && (this.result = H.Right)
                    }
                    ,
                    this.checkFix = ()=>{
                        this.codeFixesService.check(this.dialogData.key, this.randomFixes[this.selectedFix].index).subscribe(A=>{
                            this.setVerdict(A.verdict),
                            this.explanation = A.explanation
                        }
                        )
                    }
                    ,
                    this.checkLines = ()=>{
                        this.vulnLinesService.check(this.dialogData.key, this.selectedLines).subscribe(A=>{
                            this.setVerdict(A.verdict),
                            this.hint = A.hint
                        }
                        )
                    }
                    ,
                    this.setVerdict = A=>{
                        this.result !== H.Right && (A ? (0 === this.tab.value ? (this.solved.findIt = !0,
                        this.challengeService.continueCodeFindIt().subscribe(q=>{
                            if (!q)
                                throw new Error("Received invalid continue code from the server!");
                            const Y = new Date;
                            Y.setFullYear(Y.getFullYear() + 1),
                            this.cookieService.put("continueCodeFindIt", q, {
                                expires: Y
                            })
                        }
                        , q=>{
                            console.log(q)
                        }
                        )) : (this.solved.fixIt = !0,
                        this.challengeService.continueCodeFixIt().subscribe(q=>{
                            if (!q)
                                throw new Error("Received invalid continue code from the server!");
                            const Y = new Date;
                            Y.setFullYear(Y.getFullYear() + 1),
                            this.cookieService.put("continueCodeFixIt", q, {
                                expires: Y
                            })
                        }
                        , q=>{
                            console.log(q)
                        }
                        )),
                        this.result = H.Right,
                        this.lock = H.Right,
                        c.e(103).then(c.bind(c, 8103)).then(q=>{
                            q.shootConfetti()
                        }
                        ).then(()=>{
                            0 === this.tab.value && null !== this.fixes && this.toggleTab(1)
                        }
                        )) : this.result = H.Wrong)
                    }
                }
                ngOnInit() {
                    this.configurationService.getApplicationConfiguration().subscribe(e=>{
                        this.showFeedbackButtons = e.challenges.showFeedbackButtons
                    }
                    , e=>{
                        console.log(e)
                    }
                    ),
                    this.codeSnippetService.get(this.dialogData.key).subscribe(e=>{
                        this.snippet = e,
                        this.solved.findIt = !1,
                        this.dialogData.codingChallengeStatus >= 1 && (this.result = H.Right,
                        this.lock = H.Right,
                        this.solved.findIt = !0)
                    }
                    , e=>{
                        this.snippet = {
                            snippet: e.error
                        }
                    }
                    ),
                    this.codeFixesService.get(this.dialogData.key).subscribe(e=>{
                        this.fixes = e.fixes,
                        this.fixes && this.shuffle(),
                        this.solved.fixIt = this.dialogData.codingChallengeStatus >= 2
                    }
                    , ()=>{
                        this.fixes = null
                    }
                    )
                }
                changeFix(e) {
                    this.setFix(parseInt(e.target.value, 10))
                }
                lockIcon() {
                    if (null === this.fixes)
                        return "lock";
                    switch (this.lock) {
                    case H.Right:
                        return "lock_open";
                    case H.Wrong:
                    case H.Undecided:
                        return "lock"
                    }
                }
                lockColor() {
                    switch (this.lockIcon()) {
                    case "lock_open":
                        return "accent";
                    case "lock":
                        return "warn"
                    }
                }
                shuffle() {
                    this.randomFixes = this.fixes.map((e,o)=>({
                        fix: e,
                        index: o,
                        sort: Math.random()
                    })).sort((e,o)=>e.sort - o.sort).map(({fix: e, index: o})=>({
                        fix: e,
                        index: o
                    }))
                }
                resultIcon() {
                    switch (this.result) {
                    case H.Right:
                        return "check";
                    case H.Wrong:
                        return "clear";
                    default:
                        return "send"
                    }
                }
                resultColor() {
                    switch (this.resultIcon()) {
                    case "check":
                        return "accent";
                    case "clear":
                        return "warn"
                    }
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(N.WI),t.Y36(b.e),t.Y36(ne),t.Y36(Ti),t.Y36(bi),t.Y36(ot),t.Y36(I.N_))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["code-snippet"]],
                hostAttrs: [1, "code-snippet"],
                decls: 32,
                vars: 26,
                consts: [["mat-dialog-title", ""], ["id", "code-snippet", 1, "mat-typography"], ["mat-stretch-tabs", "", 3, "selectedIndex", "selectedIndexChange"], [3, "label"], ["fxLayout", "column", 1, "container"], ["fxLayout", "row", "fxLayoutGap", "10px"], [3, "code", "vulnLines", "addLine", 4, "ngIf"], [4, "ngIf"], [3, "disabled"], ["mat-tab-label", ""], ["fxLayout", "column"], [3, "snippet", "fixes", "randomFixes", "selectedFix", 4, "ngIf"], [1, "dialog-action"], ["class", "primary-notification", 4, "ngIf"], [3, "class", 4, "ngIf"], [1, "btns", 3, "ngClass"], ["class", "fix", "appearance", "fill", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], ["mat-stroked-button", "", "mat-dialog-close", "", "aria-label", "Close Dialog", "id", "findItCloseButton", 1, "close-dialog", "buttons", 3, "mat-dialog-close"], [1, "material-icons"], ["mat-stroked-button", "", "id", "findItSubmitButton", 3, "disabled", "click", 4, "ngIf"], ["mat-stroked-button", "", "id", "fixItSubmitButton", 3, "disabled", "click", 4, "ngIf"], [3, "code", "vulnLines", "addLine"], ["translate", ""], [1, "materaial-icons-outlined", 3, "color"], [3, "snippet", "fixes", "randomFixes", "selectedFix"], [1, "primary-notification"], ["appearance", "fill", 1, "fix"], ["matNativeControl", "", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"], ["target", "_blank", 3, "href"], ["mat-icon-button", ""], ["color", "accent"], ["color", "warn"], ["mat-stroked-button", "", "id", "findItSubmitButton", 3, "disabled", "click"], [3, "color"], ["mat-stroked-button", "", "id", "fixItSubmitButton", 3, "disabled", "click"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "h2", 0),
                    t._uU(1),
                    t.ALo(2, "translate"),
                    t.qZA(),
                    t.TgZ(3, "mat-dialog-content", 1)(4, "mat-tab-group", 2),
                    t.NdJ("selectedIndexChange", function(r) {
                        return o.toggleTab(r)
                    }),
                    t.TgZ(5, "mat-tab", 3),
                    t.ALo(6, "translate"),
                    t.TgZ(7, "div", 4)(8, "div", 5),
                    t.YNc(9, Ii, 1, 2, "app-code-area", 6),
                    t.YNc(10, Oi, 5, 0, "pre", 7),
                    t.qZA()()(),
                    t.TgZ(11, "mat-tab", 8),
                    t.YNc(12, Ui, 4, 5, "ng-template", 9),
                    t.TgZ(13, "div", 10)(14, "div", 5),
                    t.YNc(15, Li, 1, 4, "app-code-fixes", 11),
                    t.qZA()()()()(),
                    t.TgZ(16, "mat-dialog-actions", 12)(17, "div"),
                    t.YNc(18, Pi, 2, 1, "mat-card", 13),
                    t.YNc(19, Ni, 2, 3, "mat-card", 14),
                    t.TgZ(20, "div", 15),
                    t.YNc(21, Mi, 5, 1, "mat-form-field", 16),
                    t.YNc(22, Di, 4, 1, "a", 17),
                    t.YNc(23, qi, 4, 1, "a", 17),
                    t.TgZ(24, "button", 18)(25, "i", 19),
                    t._uU(26, " close "),
                    t.qZA(),
                    t.TgZ(27, "span"),
                    t._uU(28),
                    t.ALo(29, "translate"),
                    t.qZA()(),
                    t.YNc(30, Fi, 6, 6, "button", 20),
                    t.YNc(31, Bi, 6, 6, "button", 21),
                    t.qZA()()()),
                    2 & e && (t.xp6(1),
                    t.AsE("", t.lcZ(2, 18, "TITLE_CODING_CHALLENGE"), ": ", o.dialogData.name, ""),
                    t.xp6(3),
                    t.Q6J("selectedIndex", o.tab.value),
                    t.xp6(1),
                    t.Q6J("label", t.lcZ(6, 20, "TAB_FIND_IT")),
                    t.xp6(4),
                    t.Q6J("ngIf", null !== o.snippet),
                    t.xp6(1),
                    t.Q6J("ngIf", null === o.snippet),
                    t.xp6(1),
                    t.Q6J("disabled", "lock" === o.lockIcon()),
                    t.xp6(4),
                    t.Q6J("ngIf", null !== o.snippet && null !== o.fixes),
                    t.xp6(3),
                    t.Q6J("ngIf", o.hint && 0 === o.tab.value),
                    t.xp6(1),
                    t.Q6J("ngIf", o.explanation && 1 === o.tab.value),
                    t.xp6(1),
                    t.Q6J("ngClass", t.VKq(24, Ri, 0 === o.tab.value)),
                    t.xp6(1),
                    t.Q6J("ngIf", 1 === o.tab.value),
                    t.xp6(1),
                    t.Q6J("ngIf", o.showFeedbackButtons && o.solved.fixIt),
                    t.xp6(1),
                    t.Q6J("ngIf", o.showFeedbackButtons && o.solved.fixIt),
                    t.xp6(1),
                    t.Q6J("mat-dialog-close", o.solved),
                    t.xp6(4),
                    t.hij(" ", t.lcZ(29, 22, "BTN_CLOSE"), ""),
                    t.xp6(2),
                    t.Q6J("ngIf", 0 === o.tab.value),
                    t.xp6(1),
                    t.Q6J("ngIf", 1 === o.tab.value))
                },
                dependencies: [h.mk, h.sg, h.O5, u.Pi, p.xw, p.SQ, $.oO, s.YN, s.Kr, F.Hw, f.KE, f.hX, x.lW, T.a8, B.Nt, N.ZT, N.uh, N.xY, N.H8, Mt.SP, Mt.uD, Mt.uX, yi, ki, u.X$],
                styles: [".stretched-tabs[_ngcontent-%COMP%]{max-width:600px}.code-snippet[_ngcontent-%COMP%]{position:relative}#code-snippet[_ngcontent-%COMP%]{width:65em}.dialog-action[_ngcontent-%COMP%]{display:block;margin-bottom:0!important;padding:0!important;position:relative}.fix[_ngcontent-%COMP%]{bottom:-20px;left:0;position:absolute;width:35em}.btns[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:flex-end;margin-top:36px}.btns-findit[_ngcontent-%COMP%]{margin-top:16px}.primary-notification[_ngcontent-%COMP%], .warn-notification[_ngcontent-%COMP%], .accent-notification[_ngcontent-%COMP%]{margin-top:16px;width:calc(63em - 157px)}"]
            }),
            n
        }
        )();
        var ae = c(8423)
          , Ne = c(3162)
          , Ee = c(811)
          , Me = c(2673)
          , ie = c(7331);
        function Yi(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "button", 3),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.repeatNotification())
                }),
                t.ALo(1, "translate"),
                t.TgZ(2, "mat-icon", 4),
                t._uU(3, "flag"),
                t.qZA(),
                t.TgZ(4, "mat-icon", 4),
                t._uU(5, "check_box"),
                t.qZA(),
                t.TgZ(6, "span", 5),
                t._uU(7),
                t.ALo(8, "translate"),
                t.qZA()()
            }
            if (2 & n) {
                const e = t.oxw();
                t.Q6J("id", e.challenge.name + ".solved")("matTooltip", e.allowRepeatNotifications ? t.lcZ(1, 5, "NOTIFICATION_RESEND_INSTRUCTIONS") : null),
                t.xp6(2),
                t.Q6J("hidden", !e.allowRepeatNotifications),
                t.xp6(2),
                t.Q6J("hidden", e.allowRepeatNotifications),
                t.xp6(3),
                t.Oqu(t.lcZ(8, 7, "STATUS_SOLVED"))
            }
        }
        function Ji(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "button", 6),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.openHint())
                }),
                t.TgZ(1, "mat-icon", 4),
                t._uU(2, "book"),
                t.qZA(),
                t.TgZ(3, "mat-icon", 4),
                t._uU(4, "check_box_outline_blank"),
                t.qZA(),
                t.TgZ(5, "span", 5),
                t._uU(6),
                t.ALo(7, "translate"),
                t.qZA()()
            }
            if (2 & n) {
                const e = t.oxw();
                t.Q6J("id", e.challenge.name + ".notSolved")("matTooltip", e.showChallengeHints ? e.challenge.hint : null),
                t.xp6(1),
                t.Q6J("hidden", !e.showChallengeHints || !e.challenge.hintUrl),
                t.xp6(2),
                t.Q6J("hidden", e.showChallengeHints && e.challenge.hintUrl),
                t.xp6(3),
                t.Oqu(t.lcZ(7, 5, "STATUS_UNSOLVED"))
            }
        }
        function Qi(n, a) {
            if (1 & n && t._UZ(0, "i"),
            2 & n) {
                const e = t.oxw(2);
                t.Tol("icon-" + (null == e.challenge.disabledEnv ? null : e.challenge.disabledEnv.toString().toLowerCase()))
            }
        }
        function Hi(n, a) {
            if (1 & n && t._UZ(0, "i"),
            2 & n) {
                const e = t.oxw(2);
                t.Tol("fab fa-" + (null == e.challenge.disabledEnv ? null : e.challenge.disabledEnv.toString().toLowerCase()))
            }
        }
        function Gi(n, a) {
            if (1 & n && (t.TgZ(0, "button", 7)(1, "span"),
            t.YNc(2, Qi, 1, 3, "i", 8),
            t.YNc(3, Hi, 1, 3, "i", 8),
            t._uU(4),
            t.ALo(5, "translate"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw();
                t.Q6J("id", e.challenge.name + ".unavailable")("matTooltip", e.challenge.hint),
                t.xp6(2),
                t.Q6J("ngIf", "Windows" !== e.challenge.disabledEnv),
                t.xp6(1),
                t.Q6J("ngIf", "Windows" === e.challenge.disabledEnv),
                t.xp6(1),
                t.hij(" ", t.lcZ(5, 5, "STATUS_UNAVAILABLE"), " ")
            }
        }
        O.vI.add(Z.ts2);
        let ji = (()=>{
            class n {
                constructor(e, o) {
                    this.challengeService = e,
                    this.windowRefService = o,
                    this.challenge = {},
                    this.allowRepeatNotifications = !1,
                    this.showChallengeHints = !0
                }
                repeatNotification() {
                    this.allowRepeatNotifications && this.challengeService.repeatNotification(encodeURIComponent(this.challenge.name)).subscribe(()=>{
                        this.windowRefService.nativeWindow.scrollTo(0, 0)
                    }
                    , e=>{
                        console.log(e)
                    }
                    )
                }
                openHint() {
                    this.showChallengeHints && this.challenge.hintUrl && this.windowRefService.nativeWindow.open(this.challenge.hintUrl, "_blank")
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(ot),t.Y36(Vt))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-challenge-status-badge"]],
                inputs: {
                    challenge: "challenge",
                    allowRepeatNotifications: "allowRepeatNotifications",
                    showChallengeHints: "showChallengeHints"
                },
                decls: 3,
                vars: 3,
                consts: [["mat-raised-button", "", "color", "accent", "matTooltipPosition", "above", 3, "id", "matTooltip", "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "matTooltipPosition", "above", 3, "id", "matTooltip", "click", 4, "ngIf"], ["mat-raised-button", "", "matTooltipPosition", "above", 3, "id", "matTooltip", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", "matTooltipPosition", "above", 3, "id", "matTooltip", "click"], [3, "hidden"], ["fxShow", "", "fxHide.lt-lg", ""], ["mat-raised-button", "", "color", "primary", "matTooltipPosition", "above", 3, "id", "matTooltip", "click"], ["mat-raised-button", "", "matTooltipPosition", "above", 3, "id", "matTooltip"], [3, "class", 4, "ngIf"]],
                template: function(e, o) {
                    1 & e && (t.YNc(0, Yi, 9, 9, "button", 0),
                    t.YNc(1, Ji, 8, 7, "button", 1),
                    t.YNc(2, Gi, 6, 7, "button", 2)),
                    2 & e && (t.Q6J("ngIf", !o.challenge.disabledEnv && o.challenge.solved),
                    t.xp6(1),
                    t.Q6J("ngIf", !o.challenge.disabledEnv && !o.challenge.solved),
                    t.xp6(1),
                    t.Q6J("ngIf", o.challenge.disabledEnv))
                },
                dependencies: [h.O5, $.b8, F.Hw, x.lW, Q.gM, u.X$]
            }),
            n
        }
        )();
        function Wi(n, a) {
            if (1 & n && (t.TgZ(0, "mat-card")(1, "mat-card-title"),
            t._uU(2),
            t.ALo(3, "translate"),
            t.TgZ(4, "small", 3),
            t._uU(5),
            t.qZA()(),
            t._UZ(6, "mat-progress-bar", 4),
            t.qZA()),
            2 & n) {
                const e = t.oxw();
                t.xp6(2),
                t.hij("", t.lcZ(3, 4, "TITLE_CODING_SCORE"), " "),
                t.xp6(3),
                t.hij("", e.percentCodingChallengesSolved, "%"),
                t.xp6(1),
                t.Q6J("color", "accent")("value", e.percentCodingChallengesSolved)
            }
        }
        const bt = function(n) {
            return {
                num: n
            }
        }
          , Ki = function(n) {
            return {
                tier: n
            }
        };
        function zi(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "mat-button-toggle", 9),
                t.NdJ("change", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.oxw();
                    return t.KtG(l.toggleDifficulty(r))
                }),
                t.ALo(1, "translate"),
                t.ALo(2, "translate"),
                t.TgZ(3, "label")(4, "span", 28),
                t.O4$(),
                t.TgZ(5, "svg", 29)(6, "linearGradient", 30),
                t._UZ(7, "stop", 31)(8, "stop", 32),
                t.qZA(),
                t._UZ(9, "path", 33),
                t.qZA(),
                t.kcU(),
                t.TgZ(10, "span", 34),
                t._uU(11),
                t.qZA(),
                t.TgZ(12, "span"),
                t._uU(13),
                t.qZA()()()()
            }
            if (2 & n) {
                const e = a.$implicit
                  , o = t.oxw();
                t.Q6J("checked", o.displayedDifficulties.includes(e))("disabled", o.restrictToTutorialsFirst && e > o.tutorialsTier)("matTooltip", o.restrictToTutorialsFirst && !o.allTutorialsCompleted && e > o.tutorialsTier ? o.isLastTutorialsTier ? t.xi3(1, 13, "INFO_FULL_CHALLENGE_MODE", t.VKq(19, bt, o.challenges.length)) : t.xi3(2, 16, "INFO_NEXT_TUTORIAL_TIER", t.VKq(21, Ki, "\u2605".repeat(o.tutorialsTier))) : ""),
                t.xp6(5),
                t.Udp("fill", "url(#" + e + ")"),
                t.xp6(1),
                t.Q6J("id", e),
                t.xp6(1),
                t.uIk("offset", o.challenges ? o.offsetValue[e - 1] : "100%"),
                t.xp6(1),
                t.uIk("offset", o.challenges ? o.offsetValue[e - 1] : "100%"),
                t.xp6(1),
                t.uIk("fill", "inherit"),
                t.xp6(2),
                t.Oqu(e),
                t.xp6(1),
                t.Tol("fa-layers-counter " + (o.solvedChallengesOfDifficulty[e - 1].length === o.totalChallengesOfDifficulty[e - 1].length ? "accent-notification" : 0 === o.solvedChallengesOfDifficulty[e - 1].length ? "warn-notification" : "primary-notification")),
                t.xp6(1),
                t.hij(" ", o.solvedChallengesOfDifficulty[e - 1].length + "/" + o.totalChallengesOfDifficulty[e - 1].length, " ")
            }
        }
        function $i(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "mat-button-toggle", 35),
                t.NdJ("change", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.toggleShowOnlyTutorialChallenges())
                }),
                t.ALo(1, "translate"),
                t.TgZ(2, "mat-icon"),
                t._uU(3, " school "),
                t.qZA(),
                t._uU(4),
                t.ALo(5, "translate"),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw();
                t.Q6J("checked", e.showOnlyTutorialChallenges)("disabled", e.restrictToTutorialsFirst && !e.allTutorialsCompleted)("matTooltip", e.restrictToTutorialsFirst && !e.allTutorialsCompleted ? t.xi3(1, 4, "INFO_FULL_CHALLENGE_MODE", t.VKq(9, bt, e.challenges.length)) : ""),
                t.xp6(4),
                t.hij(" ", t.lcZ(5, 7, "BTN_SHOW_ONLY_TUTORIALS"), " ")
            }
        }
        function Vi(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "mat-button-toggle", 9),
                t.NdJ("change", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.toggleShowDisabledChallenges())
                }),
                t.ALo(1, "translate"),
                t._UZ(2, "i", 36),
                t._uU(3),
                t.ALo(4, "translate"),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw();
                t.Q6J("checked", e.showDisabledChallenges)("disabled", e.restrictToTutorialsFirst && !e.allTutorialsCompleted)("matTooltip", e.restrictToTutorialsFirst && !e.allTutorialsCompleted ? t.xi3(1, 4, "INFO_FULL_CHALLENGE_MODE", t.VKq(9, bt, e.challenges.length)) : ""),
                t.xp6(3),
                t.hij(" ", t.lcZ(4, 7, "BTN_SHOW_UNAVAILABLE"), " ")
            }
        }
        function Xi(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "button", 37),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.saveBackup())
                }),
                t.ALo(1, "translate"),
                t.TgZ(2, "mat-icon"),
                t._uU(3, " save_alt "),
                t.qZA()()
            }
            2 & n && t.s9C("matTooltip", t.lcZ(1, 1, "SAVE_BACKUP_TOOLTIP"))
        }
        function tr(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "button", 38),
                t.NdJ("click", function() {
                    t.CHM(e),
                    t.oxw();
                    const i = t.MAs(26);
                    return t.KtG(i.click())
                }),
                t.ALo(1, "translate"),
                t.TgZ(2, "mat-icon"),
                t._uU(3, " settings_backup_restore "),
                t.qZA()()
            }
            2 & n && t.s9C("matTooltip", t.lcZ(1, 1, "RESTORE_BACKUP_TOOLTIP"))
        }
        const er = function(n, a) {
            return {
                num: n,
                env: a
            }
        };
        function nr(n, a) {
            if (1 & n && (t._UZ(0, "div", 39),
            t.ALo(1, "translate")),
            2 & n) {
                const e = t.oxw();
                t.Q6J("innerHTML", t.xi3(1, 1, "INFO_DISABLED_CHALLENGES", t.WLB(4, er, e.numDisabledChallenges, e.disabledEnv)), t.oJD)
            }
        }
        function or(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "mat-button-toggle", 40),
                t.NdJ("change", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.oxw();
                    return t.KtG(l.toggleShowChallengeCategory(r))
                }),
                t.ALo(1, "translate"),
                t.ALo(2, "translate"),
                t._uU(3),
                t.ALo(4, "translate"),
                t.qZA()
            }
            if (2 & n) {
                const e = a.$implicit
                  , o = t.oxw();
                t.Q6J("checked", o.displayedChallengeCategories.includes(e))("disabled", o.restrictToTutorialsFirst && !o.allTutorialsCompleted)("matTooltip", o.restrictToTutorialsFirst && !o.allTutorialsCompleted ? t.xi3(1, 4, "INFO_FULL_CHALLENGE_MODE", t.VKq(11, bt, o.challenges.length)) : t.lcZ(2, 7, "CATEGORY_" + (null == e ? null : e.toUpperCase().split(" ").join("_")) + "_DESCRIPTION")),
                t.xp6(3),
                t.hij(" ", t.lcZ(4, 9, "CATEGORY_" + (null == e ? null : e.toUpperCase().split(" ").join("_"))), " ")
            }
        }
        function ar(n, a) {
            1 & n && (t.TgZ(0, "mat-header-cell", 62),
            t._uU(1, "LABEL_NAME"),
            t.qZA())
        }
        function ir(n, a) {
            if (1 & n && (t.TgZ(0, "mat-cell", 63),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = a.$implicit;
                t.Q6J("id", e.name),
                t.xp6(1),
                t.hij(" ", e.name, " ")
            }
        }
        function rr(n, a) {
            1 & n && (t.TgZ(0, "mat-header-cell", 64),
            t._uU(1, "LABEL_DIFFICULTY"),
            t.qZA())
        }
        function sr(n, a) {
            1 & n && (t.TgZ(0, "mat-icon"),
            t._uU(1, " star_rate "),
            t.qZA())
        }
        function lr(n, a) {
            if (1 & n && (t.TgZ(0, "mat-cell", 65),
            t.YNc(1, sr, 2, 0, "mat-icon", 66),
            t.qZA()),
            2 & n) {
                const e = a.$implicit
                  , o = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngForOf", o.times(e.difficulty))
            }
        }
        function cr(n, a) {
            1 & n && (t.TgZ(0, "mat-header-cell", 67),
            t._uU(1, "LABEL_DESCRIPTION "),
            t.qZA())
        }
        function ur(n, a) {
            if (1 & n && (t.TgZ(0, "mat-cell", 68),
            t._UZ(1, "div", 69),
            t.qZA()),
            2 & n) {
                const e = a.$implicit;
                t.xp6(1),
                t.Q6J("innerHTML", e.description, t.oJD)
            }
        }
        function pr(n, a) {
            1 & n && (t.TgZ(0, "mat-header-cell", 70),
            t._uU(1, "LABEL_CATEGORY"),
            t.qZA())
        }
        function dr(n, a) {
            if (1 & n && (t.TgZ(0, "mat-cell", 71),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & n) {
                const e = a.$implicit;
                t.xp6(1),
                t.hij(" ", t.lcZ(2, 1, "CATEGORY_" + (null == e.category ? null : e.category.toUpperCase().split(" ").join("_"))), " ")
            }
        }
        function mr(n, a) {
            1 & n && (t.TgZ(0, "mat-header-cell", 72),
            t._uU(1, "LABEL_TAGS"),
            t.qZA())
        }
        function gr(n, a) {
            if (1 & n && (t.TgZ(0, "mat-chip-list")(1, "mat-chip", 74),
            t.ALo(2, "translate"),
            t._uU(3),
            t.ALo(4, "translate"),
            t.qZA()()),
            2 & n) {
                const e = a.$implicit;
                t.xp6(1),
                t.Q6J("matTooltip", t.lcZ(2, 2, "TAG_" + (null == e ? null : e.toUpperCase().split(" ").join("_")) + "_DESCRIPTION")),
                t.xp6(2),
                t.hij(" ", t.lcZ(4, 4, "TAG_" + (null == e ? null : e.toUpperCase().split(" ").join("_"))), " ")
            }
        }
        function hr(n, a) {
            if (1 & n && (t.TgZ(0, "span"),
            t.YNc(1, gr, 5, 6, "mat-chip-list", 66),
            t.qZA()),
            2 & n) {
                const e = t.oxw().$implicit;
                t.xp6(1),
                t.Q6J("ngForOf", e.tags.split(",").sort())
            }
        }
        function _r(n, a) {
            if (1 & n && (t.TgZ(0, "mat-cell", 73),
            t.YNc(1, hr, 2, 1, "span", 5),
            t.qZA()),
            2 & n) {
                const e = a.$implicit;
                t.xp6(1),
                t.Q6J("ngIf", e.tags)
            }
        }
        function fr(n, a) {
            1 & n && (t.TgZ(0, "mat-header-cell", 62),
            t._uU(1, "LABEL_STATUS"),
            t.qZA())
        }
        function Cr(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "button", 81),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw().$implicit
                      , r = t.oxw(2);
                    return t.KtG(r.startHackingInstructor(i.name))
                }),
                t.ALo(1, "translate"),
                t.TgZ(2, "mat-icon"),
                t._uU(3, " school "),
                t.qZA()()
            }
            2 & n && t.Q6J("matTooltip", t.lcZ(1, 1, "INFO_HACKING_INSTRUCTOR"))
        }
        function vr(n, a) {
            if (1 & n && (t.TgZ(0, "a", 82)(1, "button", 83),
            t.ALo(2, "translate"),
            t.TgZ(3, "mat-icon"),
            t._uU(4, " policy "),
            t.qZA()()()),
            2 & n) {
                const e = t.oxw().$implicit;
                t.Q6J("href", e.mitigationUrl, t.LSH),
                t.xp6(1),
                t.Q6J("matTooltip", t.lcZ(2, 2, "INFO_VULNERABILITY_MITIGATION_LINK"))
            }
        }
        function xr(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "button", 84),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw().$implicit
                      , r = t.oxw(2);
                    return t.KtG(r.showCodeSnippet(i.key, i.name, i.codingChallengeStatus))
                }),
                t.ALo(1, "translate"),
                t.TgZ(2, "mat-icon", 85),
                t._uU(3, " code "),
                t.qZA()()
            }
            if (2 & n) {
                const e = t.oxw().$implicit
                  , o = t.oxw(2);
                t.Q6J("disabled", "solved" === o.codingChallengesEnabled && !e.solved)("matTooltip", t.lcZ(1, 5, "LAUNCH_CODING_CHALLENGE"))("color", o.generateColor(e))("id", e.name + ".codingChallengeButton"),
                t.xp6(2),
                t.Q6J("matBadge", o.generateBadge(e))
            }
        }
        function br(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "button", 86),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw(3);
                    return t.KtG(i.startHackingInstructor("Coding Challenges"))
                }),
                t.ALo(1, "translate"),
                t.TgZ(2, "mat-icon", 87),
                t._uU(3, " school "),
                t.qZA()()
            }
            2 & n && t.Q6J("matTooltip", t.lcZ(1, 1, "INFO_HACKING_INSTRUCTOR"))
        }
        function Tr(n, a) {
            if (1 & n && (t.TgZ(0, "mat-cell"),
            t._UZ(1, "app-challenge-status-badge", 75),
            t.YNc(2, Cr, 4, 3, "button", 76),
            t.YNc(3, vr, 5, 4, "a", 77),
            t.TgZ(4, "div", 78),
            t.ALo(5, "translate"),
            t.YNc(6, xr, 4, 7, "button", 79),
            t.qZA(),
            t.YNc(7, br, 4, 3, "button", 80),
            t.qZA()),
            2 & n) {
                const e = a.$implicit
                  , o = t.oxw(2);
                t.xp6(1),
                t.Q6J("challenge", e)("allowRepeatNotifications", o.allowRepeatNotifications)("showChallengeHints", o.showChallengeHints),
                t.xp6(1),
                t.Q6J("ngIf", o.showHackingInstructor && !e.solved && !e.disabledEnv && e.hasTutorial),
                t.xp6(1),
                t.Q6J("ngIf", o.showVulnerabilityMitigations && e.solved && e.mitigationUrl),
                t.xp6(1),
                t.Q6J("matTooltip", t.lcZ(5, 9, "SOLVE_HACKING_CHALLENGE"))("matTooltipDisabled", !e.hasSnippet || "solved" === o.codingChallengesEnabled && e.solved || "always" === o.codingChallengesEnabled),
                t.xp6(2),
                t.Q6J("ngIf", e.hasSnippet && "never" !== o.codingChallengesEnabled),
                t.xp6(1),
                t.Q6J("ngIf", "scoreBoardChallenge" === e.key && o.showHackingInstructor && e.solved && "never" !== o.codingChallengesEnabled && e.codingChallengeStatus < 1)
            }
        }
        function Ar(n, a) {
            1 & n && (t.TgZ(0, "mat-header-cell", 91),
            t._uU(1, "LABEL_FEEDBACK"),
            t.qZA())
        }
        function yr(n, a) {
            if (1 & n && (t.TgZ(0, "a", 82)(1, "button", 93)(2, "mat-icon", 94),
            t._uU(3, "thumb_up"),
            t.qZA()()()),
            2 & n) {
                const e = t.oxw().$implicit;
                t.Q6J("href", "https://docs.google.com/forms/d/e/1FAIpQLSdaNEuz0dzFA2sexCa0AJ4QOb2OYdEL04eQOLFD2Y4T-BW6ag/viewform?usp=pp_url&entry.384948954=" + e.name + "&entry.435235279=Hacking+Challenge&entry.1734944650=Yes", t.LSH)
            }
        }
        function Zr(n, a) {
            if (1 & n && (t.TgZ(0, "a", 82)(1, "button", 93)(2, "mat-icon", 95),
            t._uU(3, "thumb_down"),
            t.qZA()()()),
            2 & n) {
                const e = t.oxw().$implicit;
                t.Q6J("href", "https://docs.google.com/forms/d/e/1FAIpQLSdaNEuz0dzFA2sexCa0AJ4QOb2OYdEL04eQOLFD2Y4T-BW6ag/viewform?usp=pp_url&entry.384948954=" + e.name + "&entry.435235279=Hacking+Challenge&entry.1734944650=No", t.LSH)
            }
        }
        function wr(n, a) {
            if (1 & n && (t.TgZ(0, "mat-cell", 92),
            t.YNc(1, yr, 4, 1, "a", 77),
            t.YNc(2, Zr, 4, 1, "a", 77),
            t.qZA()),
            2 & n) {
                const e = a.$implicit;
                t.xp6(1),
                t.Q6J("ngIf", e.solved),
                t.xp6(1),
                t.Q6J("ngIf", e.solved)
            }
        }
        function Sr(n, a) {
            1 & n && (t.ynx(0, 88),
            t.YNc(1, Ar, 2, 0, "mat-header-cell", 89),
            t.YNc(2, wr, 3, 2, "mat-cell", 90),
            t.BQk())
        }
        function kr(n, a) {
            1 & n && t._UZ(0, "mat-header-row")
        }
        function Ir(n, a) {
            1 & n && t._UZ(0, "mat-row")
        }
        function Or(n, a) {
            if (1 & n && (t.TgZ(0, "mat-table", 41),
            t.ynx(1, 42),
            t.YNc(2, ar, 2, 0, "mat-header-cell", 43),
            t.YNc(3, ir, 2, 2, "mat-cell", 44),
            t.BQk(),
            t.ynx(4, 45),
            t.YNc(5, rr, 2, 0, "mat-header-cell", 46),
            t.YNc(6, lr, 2, 1, "mat-cell", 47),
            t.BQk(),
            t.ynx(7, 48),
            t.YNc(8, cr, 2, 0, "mat-header-cell", 49),
            t.YNc(9, ur, 2, 1, "mat-cell", 50),
            t.BQk(),
            t.ynx(10, 51),
            t.YNc(11, pr, 2, 0, "mat-header-cell", 52),
            t.YNc(12, dr, 3, 3, "mat-cell", 53),
            t.BQk(),
            t.ynx(13, 54),
            t.YNc(14, mr, 2, 0, "mat-header-cell", 55),
            t.YNc(15, _r, 2, 1, "mat-cell", 56),
            t.BQk(),
            t.ynx(16, 57),
            t.YNc(17, fr, 2, 0, "mat-header-cell", 43),
            t.YNc(18, Tr, 8, 11, "mat-cell", 58),
            t.BQk(),
            t.YNc(19, Sr, 3, 0, "ng-container", 59),
            t.YNc(20, kr, 1, 0, "mat-header-row", 60),
            t.YNc(21, Ir, 1, 0, "mat-row", 61),
            t.qZA()),
            2 & n) {
                const e = t.oxw();
                t.Q6J("dataSource", e.filterToDataSource(e.challenges))("trackBy", e.trackById),
                t.xp6(19),
                t.Q6J("ngIf", e.showFeedbackButtons),
                t.xp6(1),
                t.Q6J("matHeaderRowDef", e.displayedColumns),
                t.xp6(1),
                t.Q6J("matRowDefColumns", e.displayedColumns)
            }
        }
        function Ur(n, a) {
            1 & n && (t._UZ(0, "mat-card", 100),
            t.ALo(1, "translate")),
            2 & n && t.Q6J("innerHTML", t.lcZ(1, 1, "CALL_FOR_CONTRIBUTIONS"), t.oJD)
        }
        const Lr = function(n, a) {
            return {
                appname: n,
                questionnaire: a
            }
        };
        function Pr(n, a) {
            if (1 & n && (t._UZ(0, "mat-card", 101),
            t.ALo(1, "translate")),
            2 & n) {
                const e = t.oxw(2);
                t.Q6J("innerHTML", t.xi3(1, 1, "CALL_FOR_FEEDBACK", t.WLB(4, Lr, e.appName, e.questionnaireUrl)), t.oJD)
            }
        }
        function Nr(n, a) {
            if (1 & n && (t.TgZ(0, "div", 96),
            t.YNc(1, Ur, 2, 3, "mat-card", 97),
            t._UZ(2, "span", 98),
            t.YNc(3, Pr, 2, 7, "mat-card", 99),
            t.qZA()),
            2 & n) {
                const e = t.oxw();
                t.xp6(1),
                t.Q6J("ngIf", e.showContributionInfoBox),
                t.xp6(2),
                t.Q6J("ngIf", e.questionnaireUrl)
            }
        }
        O.vI.add(g.Tab, D.fG, Z.hV2, Z.zhw, Z.g7i, g.kWN, g.Mm7);
        let Er = (()=>{
            class n {
                constructor(e, o, i, r, l, m, v, A, q, Y, dt) {
                    this.configurationService = e,
                    this.challengeService = o,
                    this.codeSnippetService = i,
                    this.sanitizer = r,
                    this.ngZone = l,
                    this.io = m,
                    this.spinner = v,
                    this.translate = A,
                    this.localBackupService = q,
                    this.dialog = Y,
                    this.route = dt,
                    this.availableDifficulties = [1, 2, 3, 4, 5, 6],
                    this.displayedDifficulties = [1],
                    this.availableChallengeCategories = [],
                    this.displayedChallengeCategories = [],
                    this.toggledMajorityOfDifficulties = !1,
                    this.toggledMajorityOfCategories = !0,
                    this.showSolvedChallenges = !0,
                    this.numDisabledChallenges = 0,
                    this.showDisabledChallenges = !1,
                    this.showOnlyTutorialChallenges = !1,
                    this.restrictToTutorialsFirst = !1,
                    this.allTutorialsCompleted = !1,
                    this.isLastTutorialsTier = !1,
                    this.tutorialsTier = 1,
                    this.displayedColumns = ["name", "difficulty", "description", "category", "tags", "status"],
                    this.offsetValue = ["100%", "100%", "100%", "100%", "100%", "100%"],
                    this.allowRepeatNotifications = !1,
                    this.showChallengeHints = !0,
                    this.showVulnerabilityMitigations = !0,
                    this.codingChallengesEnabled = "solved",
                    this.showHackingInstructor = !0,
                    this.challenges = [],
                    this.percentChallengesSolved = "0",
                    this.percentCodingChallengesSolved = "0",
                    this.solvedChallengesOfDifficulty = [[], [], [], [], [], []],
                    this.totalChallengesOfDifficulty = [[], [], [], [], [], []],
                    this.showContributionInfoBox = !0,
                    this.questionnaireUrl = "https://forms.gle/2Tr5m1pqnnesApxN8",
                    this.appName = "OWASP Juice Shop",
                    this.localBackupEnabled = !0,
                    this.showFeedbackButtons = !0
                }
                ngAfterViewInit() {
                    const e = this.route.snapshot.queryParams.challenge;
                    if (e)
                        if (document.getElementById(e))
                            this.scrollToChallenge(e);
                        else {
                            const i = new MutationObserver(r=>{
                                for (const l of r)
                                    "childList" === l.type && document.getElementById(e) && (this.scrollToChallenge(e),
                                    i.disconnect())
                            }
                            );
                            i.observe(document.body, {
                                childList: !0,
                                subtree: !0
                            })
                        }
                }
                ngOnInit() {
                    this.spinner.show(),
                    this.displayedDifficulties = localStorage.getItem("displayedDifficulties") ? JSON.parse(String(localStorage.getItem("displayedDifficulties"))) : [1],
                    this.showSolvedChallenges = !localStorage.getItem("showSolvedChallenges") || JSON.parse(String(localStorage.getItem("showSolvedChallenges"))),
                    this.showDisabledChallenges = !!localStorage.getItem("showDisabledChallenges") && JSON.parse(String(localStorage.getItem("showDisabledChallenges"))),
                    this.configurationService.getApplicationConfiguration().subscribe(e=>{
                        this.allowRepeatNotifications = e.challenges.showSolvedNotifications && e.ctf?.showFlagsInNotifications,
                        this.showChallengeHints = e.challenges.showHints,
                        this.showVulnerabilityMitigations = e.challenges.showMitigations,
                        this.codingChallengesEnabled = e.challenges.codingChallengesEnabled,
                        this.showHackingInstructor = e.hackingInstructor?.isEnabled,
                        this.showContributionInfoBox = e.application.showGitHubLinks,
                        this.showFeedbackButtons = e.challenges.showFeedbackButtons,
                        this.showFeedbackButtons && this.displayedColumns.push("feedback"),
                        this.questionnaireUrl = e.application.social?.questionnaireUrl,
                        this.appName = e.application.name,
                        this.restrictToTutorialsFirst = e.challenges.restrictToTutorialsFirst,
                        this.showOnlyTutorialChallenges = localStorage.getItem("showOnlyTutorialChallenges") ? JSON.parse(String(localStorage.getItem("showOnlyTutorialChallenges"))) : this.restrictToTutorialsFirst,
                        this.localBackupEnabled = e.application.localBackupEnabled,
                        this.challengeService.find({
                            sort: "name"
                        }).subscribe(o=>{
                            this.codeSnippetService.challenges().subscribe(i=>{
                                this.challenges = o;
                                for (let r = 0; r < this.challenges.length; r++)
                                    this.augmentHintText(this.challenges[r]),
                                    this.trustDescriptionHtml(this.challenges[r]),
                                    "Score Board" === this.challenges[r].name && (this.challenges[r].solved = !0),
                                    this.availableChallengeCategories.includes(o[r].category) || this.availableChallengeCategories.push(o[r].category),
                                    this.showHackingInstructor && Promise.resolve().then(c.bind(c, 1096)).then(l=>{
                                        o[r].hasTutorial = l.hasInstructions(o[r].name)
                                    }
                                    ),
                                    o[r].hasSnippet = i.includes(o[r].key);
                                this.availableChallengeCategories.sort((r,l)=>r.localeCompare(l)),
                                this.displayedChallengeCategories = localStorage.getItem("displayedChallengeCategories") ? JSON.parse(String(localStorage.getItem("displayedChallengeCategories"))) : this.availableChallengeCategories,
                                this.calculateProgressPercentage(),
                                this.calculateCodingProgressPercentage(),
                                this.populateFilteredChallengeLists(),
                                this.calculateGradientOffsets(o),
                                this.calculateTutorialTier(o),
                                this.toggledMajorityOfDifficulties = this.determineToggledMajorityOfDifficulties(),
                                this.toggledMajorityOfCategories = this.determineToggledMajorityOfCategories(),
                                this.showOnlyTutorialChallenges && this.challenges.sort((r,l)=>r.tutorialOrder - l.tutorialOrder),
                                this.spinner.hide()
                            }
                            )
                        }
                        , o=>{
                            this.challenges = [],
                            console.log(o)
                        }
                        )
                    }
                    , e=>{
                        console.log(e)
                    }
                    ),
                    this.ngZone.runOutsideAngular(()=>{
                        this.io.socket().on("challenge solved", e=>{
                            if (e?.challenge) {
                                for (let o = 0; o < this.challenges.length; o++)
                                    if (this.challenges[o].name === e.name) {
                                        this.challenges[o].solved = !0;
                                        break
                                    }
                                this.calculateProgressPercentage(),
                                this.populateFilteredChallengeLists(),
                                this.calculateGradientOffsets(this.challenges),
                                this.calculateTutorialTier(this.challenges)
                            }
                        }
                        )
                    }
                    )
                }
                scrollToChallenge(e) {
                    const o = document.getElementById(e);
                    o ? (console.log(`Scrolling to challenge: ${e}`),
                    o.scrollIntoView({
                        behavior: "smooth"
                    })) : console.log(`Challenge ${e} is not visible!`)
                }
                augmentHintText(e) {
                    e.disabledEnv ? (this.numDisabledChallenges++,
                    this.disabledEnv = e.disabledEnv,
                    this.translate.get("CHALLENGE_UNAVAILABLE", {
                        env: e.disabledEnv
                    }).subscribe(o=>{
                        e.hint = o
                    }
                    , o=>{
                        e.hint = o
                    }
                    )) : e.hintUrl && (e.hint ? this.translate.get("CLICK_FOR_MORE_HINTS").subscribe(o=>{
                        e.hint = `${e.hint} ${o}`
                    }
                    , o=>{
                        e.hint = `${e.hint} ${o}`
                    }
                    ) : this.translate.get("CLICK_TO_OPEN_HINTS").subscribe(o=>{
                        e.hint = o
                    }
                    , o=>{
                        e.hint = o
                    }
                    ))
                }
                trustDescriptionHtml(e) {
                    e.description = this.sanitizer.bypassSecurityTrustHtml(e.description)
                }
                calculateCodingProgressPercentage() {
                    let e = 0
                      , o = 0;
                    for (let i = 0; i < this.challenges.length; i++)
                        this.challenges[i].hasSnippet && (e++,
                        o += this.challenges[i].codingChallengeStatus);
                    this.percentCodingChallengesSolved = (100 * o / (2 * e)).toFixed(0)
                }
                calculateProgressPercentage() {
                    let e = 0;
                    for (let o = 0; o < this.challenges.length; o++)
                        e += this.challenges[o].solved ? 1 : 0;
                    this.percentChallengesSolved = (100 * e / this.challenges.length).toFixed(0)
                }
                calculateTutorialTier(e) {
                    this.allTutorialsCompleted = !0,
                    this.isLastTutorialsTier = !0,
                    this.tutorialsTier = 1;
                    for (let o = 1; o <= 6; o++) {
                        const i = e.filter(l=>l.tutorialOrder && l.difficulty === o).length
                          , r = e.filter(l=>l.tutorialOrder && l.difficulty === o && l.solved).length;
                        this.allTutorialsCompleted = this.allTutorialsCompleted && i === r,
                        this.tutorialsTier === o && i === r && this.tutorialsTier++
                    }
                    if (!this.allTutorialsCompleted) {
                        this.isLastTutorialsTier = 0 === e.filter(o=>o.tutorialOrder && !o.solved && o.difficulty > this.tutorialsTier).length;
                        for (let o = 1; o <= this.tutorialsTier; o++)
                            this.displayedDifficulties.includes(o) || this.toggleDifficulty(this.tutorialsTier)
                    }
                }
                calculateGradientOffsets(e) {
                    for (let o = 1; o <= 6; o++)
                        this.offsetValue[o - 1] = this.calculateGradientOffset(e, o)
                }
                calculateGradientOffset(e, o) {
                    let i = 0
                      , r = 0;
                    for (let m = 0; m < e.length; m++)
                        e[m].difficulty === o && (r++,
                        e[m].solved && i++);
                    let l = Math.round(100 * i / r);
                    return l = 100 - l,
                    +l + "%"
                }
                toggleDifficulty(e) {
                    this.displayedDifficulties.includes(e) ? this.displayedDifficulties = this.displayedDifficulties.filter(o=>o !== e) : this.displayedDifficulties.push(e),
                    localStorage.setItem("displayedDifficulties", JSON.stringify(this.displayedDifficulties)),
                    this.toggledMajorityOfDifficulties = this.determineToggledMajorityOfDifficulties()
                }
                toggleAllDifficulty() {
                    this.toggledMajorityOfDifficulties ? (this.displayedDifficulties = [],
                    this.toggledMajorityOfDifficulties = !1) : (this.displayedDifficulties = this.availableDifficulties,
                    this.toggledMajorityOfDifficulties = !0),
                    localStorage.setItem("displayedDifficulties", JSON.stringify(this.displayedDifficulties))
                }
                toggleShowSolvedChallenges() {
                    this.showSolvedChallenges = !this.showSolvedChallenges,
                    localStorage.setItem("showSolvedChallenges", JSON.stringify(this.showSolvedChallenges))
                }
                toggleShowDisabledChallenges() {
                    this.showDisabledChallenges = !this.showDisabledChallenges,
                    localStorage.setItem("showDisabledChallenges", JSON.stringify(this.showDisabledChallenges))
                }
                toggleShowOnlyTutorialChallenges() {
                    this.showOnlyTutorialChallenges = !this.showOnlyTutorialChallenges,
                    localStorage.setItem("showOnlyTutorialChallenges", JSON.stringify(this.showOnlyTutorialChallenges)),
                    this.challenges.sort(this.showOnlyTutorialChallenges ? (e,o)=>e.tutorialOrder - o.tutorialOrder : (e,o)=>e.name < o.name ? -1 : e.name > o.name ? 1 : 0)
                }
                toggleShowChallengeCategory(e) {
                    this.displayedChallengeCategories.includes(e) ? this.displayedChallengeCategories = this.displayedChallengeCategories.filter(o=>o !== e) : this.displayedChallengeCategories.push(e),
                    localStorage.setItem("displayedChallengeCategories", JSON.stringify(this.displayedChallengeCategories)),
                    this.toggledMajorityOfCategories = this.determineToggledMajorityOfCategories()
                }
                toggleAllChallengeCategory() {
                    this.toggledMajorityOfCategories ? (this.displayedChallengeCategories = [],
                    this.toggledMajorityOfCategories = !1) : (this.displayedChallengeCategories = this.availableChallengeCategories,
                    this.toggledMajorityOfCategories = !0),
                    localStorage.setItem("displayedChallengeCategories", JSON.stringify(this.displayedChallengeCategories))
                }
                determineToggledMajorityOfDifficulties() {
                    return this.displayedDifficulties.length > this.availableDifficulties.length / 2
                }
                determineToggledMajorityOfCategories() {
                    return this.displayedChallengeCategories.length > this.availableChallengeCategories.length / 2
                }
                filterToDataSource(e) {
                    e = e.filter(i=>!(!this.displayedDifficulties.includes(i.difficulty) || !this.displayedChallengeCategories.includes(i.category) || !this.showSolvedChallenges && i.solved || !this.showDisabledChallenges && i.disabledEnv || this.showOnlyTutorialChallenges && !i.hasTutorial));
                    const o = new d.by;
                    return o.data = e,
                    o
                }
                populateFilteredChallengeLists() {
                    for (const e of this.availableDifficulties)
                        0 === this.challenges.length ? (this.totalChallengesOfDifficulty[e - 1] = [],
                        this.solvedChallengesOfDifficulty[e - 1] = []) : (this.totalChallengesOfDifficulty[e - 1] = this.challenges.filter(o=>o.difficulty === e),
                        this.solvedChallengesOfDifficulty[e - 1] = this.challenges.filter(o=>o.difficulty === e && o.solved))
                }
                startHackingInstructor(e) {
                    console.log(`Starting instructions for challenge "${e}"`),
                    Promise.resolve().then(c.bind(c, 1096)).then(o=>{
                        o.startHackingInstructorFor(e)
                    }
                    )
                }
                trackById(e, o) {
                    return o.id
                }
                times(e) {
                    return Array(e).fill("\u2605")
                }
                saveBackup() {
                    this.localBackupService.save(this.appName.toLowerCase().replace(/ /, "_"))
                }
                restoreBackup(e) {
                    this.localBackupService.restore(e)
                }
                showCodeSnippet(e, o, i) {
                    this.dialog.open(Pe, {
                        disableClose: !0,
                        data: {
                            key: e,
                            name: o,
                            codingChallengeStatus: i
                        }
                    }).afterClosed().subscribe(l=>{
                        for (const m of this.challenges)
                            m.name === o && (m.codingChallengeStatus < 1 && (m.codingChallengeStatus = l.findIt ? 1 : m.codingChallengeStatus),
                            m.codingChallengeStatus < 2 && (m.codingChallengeStatus = l.fixIt ? 2 : m.codingChallengeStatus),
                            this.calculateCodingProgressPercentage())
                    }
                    )
                }
                generateColor(e) {
                    return 2 === e.codingChallengeStatus ? "accent" : "primary"
                }
                generateBadge(e) {
                    return 1 === e.codingChallengeStatus ? "1/2" : ""
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(b.e),t.Y36(ot),t.Y36(ne),t.Y36(k.H7),t.Y36(t.R0b),t.Y36(st),t.Y36(ae.t2),t.Y36(u.sK),t.Y36(Ue),t.Y36(N.uw),t.Y36(L.gz))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-score-board-legacy"]],
                decls: 46,
                vars: 41,
                consts: [["fxLayout", "column"], ["fxLayout", "row", "fxLayout.lt-md", "column"], ["fxFlex", "grow"], [1, "confirmation"], ["mode", "determinate", 3, "color", "value"], [4, "ngIf"], ["fxLayout", "row wrap", 1, "star-container"], ["matTooltipPosition", "above", 3, "checked", "disabled", "matTooltip", "change", 4, "ngFor", "ngForOf"], ["id", "btnToggleAllDifficulties", 1, "mat-button", 3, "disabled", "click"], ["matTooltipPosition", "above", 3, "checked", "disabled", "matTooltip", "change"], ["aria-hidden", "true", 1, "fa-2x", "fas", "fa-trophy"], ["id", "btnToggleShowOnlyTutorialChallenges", "matTooltipPosition", "above", 3, "checked", "disabled", "matTooltip", "change", 4, "ngIf"], ["matTooltipPosition", "above", 3, "checked", "disabled", "matTooltip", "change", 4, "ngIf"], ["mat-fab", "", "class", "backupButton", "color", "primary", "aria-label", "Button to save local backup", "matTooltipPosition", "above", 3, "matTooltip", "click", 4, "ngIf"], [1, "form-group"], ["type", "file", 2, "display", "none", 3, "change"], ["restoreBackupFile", ""], ["mat-fab", "", "class", "backupButton", "color", "primary", "aria-label", "Button to restore local backup", "matTooltipPosition", "above", 3, "matTooltip", "click", 4, "ngIf"], ["class", "disabled-challenges-infoBox mat-button", 3, "innerHTML", 4, "ngIf"], ["fxLayout", "row wrap", 1, "category-container"], ["class", "category-toggle", "appearance", "legacy", "matTooltipPosition", "above", 3, "checked", "disabled", "matTooltip", "change", 4, "ngFor", "ngForOf"], [1, "mat-button", 3, "disabled", "click"], [1, "new-score-board-ad"], ["mat-button", "", "routerLink", "/score-board"], [3, "dataSource", "trackBy", 4, "ngIf"], ["fxLayout", "row", "fxLayout.lt-lg", "column", 4, "ngIf"], ["src", "assets/public/images/padding/1px.png"], ["fullscreen", "true", "type", "timer", "size", "large"], [1, "fa-4x", "fa-layers", "fa-fw", 2, "display", "block", "margin", "5px"], ["aria-hidden", "true", "data-prefix", "fa", "data-icon", "star", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 576 512", "data-fa-i2svg", "", "stroke-width", "10", 1, "svg-inline--fa", "fa-star", "fa-w-18", "star-border"], ["x1", "0", "x2", "0", "y1", "0", "y2", "100%", 3, "id"], [1, "empty-star"], [1, "filled-star"], ["d", "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"], ["data-fa-transform", "shrink-9", 1, "fa-layers-text", "fa-inverse", 2, "font-weight", "900"], ["id", "btnToggleShowOnlyTutorialChallenges", "matTooltipPosition", "above", 3, "checked", "disabled", "matTooltip", "change"], ["aria-hidden", "true", 1, "fa-2x", "fas", "fa-exclamation-circle"], ["mat-fab", "", "color", "primary", "aria-label", "Button to save local backup", "matTooltipPosition", "above", 1, "backupButton", 3, "matTooltip", "click"], ["mat-fab", "", "color", "primary", "aria-label", "Button to restore local backup", "matTooltipPosition", "above", 1, "backupButton", 3, "matTooltip", "click"], [1, "disabled-challenges-infoBox", "mat-button", 3, "innerHTML"], ["appearance", "legacy", "matTooltipPosition", "above", 1, "category-toggle", 3, "checked", "disabled", "matTooltip", "change"], [3, "dataSource", "trackBy"], ["matColumnDef", "name"], ["translate", "", 4, "matHeaderCellDef"], [3, "id", 4, "matCellDef"], ["matColumnDef", "difficulty"], ["fxShow", "", "fxHide.lt-sm", "", "translate", "", 4, "matHeaderCellDef"], ["fxShow", "", "fxHide.lt-sm", "", 4, "matCellDef"], ["matColumnDef", "description"], ["fxFlex", "1 1 31%", "translate", "", 4, "matHeaderCellDef"], ["fxFlex", "1 1 31%", 4, "matCellDef"], ["matColumnDef", "category"], ["fxShow", "", "fxHide.lt-md", "", "translate", "", 4, "matHeaderCellDef"], ["fxShow", "", "fxHide.lt-md", "", 4, "matCellDef"], ["matColumnDef", "tags"], ["fxShow", "", "fxHide.lt-lg", "", "translate", "", 4, "matHeaderCellDef"], ["fxShow", "", "fxHide.lt-lg", "", 4, "matCellDef"], ["matColumnDef", "status"], [4, "matCellDef"], ["matColumnDef", "feedback", 4, "ngIf"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["translate", ""], [3, "id"], ["fxShow", "", "fxHide.lt-sm", "", "translate", ""], ["fxShow", "", "fxHide.lt-sm", ""], [4, "ngFor", "ngForOf"], ["fxFlex", "1 1 31%", "translate", ""], ["fxFlex", "1 1 31%"], [3, "innerHTML"], ["fxShow", "", "fxHide.lt-md", "", "translate", ""], ["fxShow", "", "fxHide.lt-md", ""], ["fxShow", "", "fxHide.lt-lg", "", "translate", ""], ["fxShow", "", "fxHide.lt-lg", ""], [3, "matTooltip"], [3, "challenge", "allowRepeatNotifications", "showChallengeHints"], ["mat-mini-fab", "", "color", "warn", "matTooltipPosition", "above", "class", "hacking-instructor-button", 3, "matTooltip", "click", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], ["matTooltipPosition", "above", 3, "matTooltip", "matTooltipDisabled"], ["mat-mini-fab", "", "matTooltipPosition", "above", "class", "code-snippet-button", 3, "disabled", "matTooltip", "color", "id", "click", 4, "ngIf"], ["mat-mini-fab", "", "color", "warn", "matTooltipPosition", "above", "class", "code-snippet-button", "id", "codingChallengeTutorialButton", 3, "matTooltip", "click", 4, "ngIf"], ["mat-mini-fab", "", "color", "warn", "matTooltipPosition", "above", 1, "hacking-instructor-button", 3, "matTooltip", "click"], ["target", "_blank", 3, "href"], ["mat-mini-fab", "", "color", "accent", "matTooltipPosition", "above", 1, "vulnerability-mitigation-button", 3, "matTooltip"], ["mat-mini-fab", "", "matTooltipPosition", "above", 1, "code-snippet-button", 3, "disabled", "matTooltip", "color", "id", "click"], ["matBadgeSize", "medium", "matBadgePosition", "right", "matBadgeColor", "accent", 3, "matBadge"], ["mat-mini-fab", "", "color", "warn", "matTooltipPosition", "above", "id", "codingChallengeTutorialButton", 1, "code-snippet-button", 3, "matTooltip", "click"], ["matBadge", "<>", "matBadgeSize", "small", "matBadgePosition", "right", "matBadgeColor", "primary"], ["matColumnDef", "feedback"], ["fxShow", "", "fxHide.lt-xl", "", "fxFlex", "1 1 5%", "translate", "", 4, "matHeaderCellDef"], ["fxShow", "", "fxHide.lt-xl", "", "fxFlex", "1 1 5%", 4, "matCellDef"], ["fxShow", "", "fxHide.lt-xl", "", "fxFlex", "1 1 5%", "translate", ""], ["fxShow", "", "fxHide.lt-xl", "", "fxFlex", "1 1 5%"], ["mat-icon-button", ""], ["color", "accent"], ["color", "warn"], ["fxLayout", "row", "fxLayout.lt-lg", "column"], ["fxFlex", "40%", "fxFlex.lt-lg", "100%", "class", "primary-notification", 3, "innerHTML", 4, "ngIf"], [1, "fill-remaining-space"], ["fxFlex", "20%", "fxFlex.lt-lg", "100%", "class", "warn-notification", 3, "innerHTML", 4, "ngIf"], ["fxFlex", "40%", "fxFlex.lt-lg", "100%", 1, "primary-notification", 3, "innerHTML"], ["fxFlex", "20%", "fxFlex.lt-lg", "100%", 1, "warn-notification", 3, "innerHTML"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "div", 0)(1, "div", 1)(2, "mat-card", 2)(3, "mat-card-title"),
                    t._uU(4),
                    t.ALo(5, "translate"),
                    t.TgZ(6, "small", 3),
                    t._uU(7),
                    t.qZA()(),
                    t._UZ(8, "mat-progress-bar", 4),
                    t.qZA(),
                    t.YNc(9, Wi, 7, 6, "mat-card", 5),
                    t.qZA(),
                    t.TgZ(10, "mat-card")(11, "div", 6),
                    t.YNc(12, zi, 14, 23, "mat-button-toggle", 7),
                    t.TgZ(13, "button", 8),
                    t.NdJ("click", function() {
                        return o.toggleAllDifficulty()
                    }),
                    t._uU(14),
                    t.ALo(15, "translate"),
                    t.qZA(),
                    t.TgZ(16, "mat-button-toggle", 9),
                    t.NdJ("change", function() {
                        return o.toggleShowSolvedChallenges()
                    }),
                    t.ALo(17, "translate"),
                    t._UZ(18, "i", 10),
                    t._uU(19),
                    t.ALo(20, "translate"),
                    t.qZA(),
                    t.YNc(21, $i, 6, 11, "mat-button-toggle", 11),
                    t.YNc(22, Vi, 5, 11, "mat-button-toggle", 12),
                    t.YNc(23, Xi, 4, 3, "button", 13),
                    t.TgZ(24, "div", 14)(25, "input", 15, 16),
                    t.NdJ("change", function(r) {
                        return o.restoreBackup(r.target.files.item(0))
                    }),
                    t.qZA()(),
                    t.YNc(27, tr, 4, 3, "button", 17),
                    t.YNc(28, nr, 2, 7, "div", 18),
                    t.qZA(),
                    t._UZ(29, "mat-divider"),
                    t.TgZ(30, "div", 19),
                    t.YNc(31, or, 5, 13, "mat-button-toggle", 20),
                    t.TgZ(32, "button", 21),
                    t.NdJ("click", function() {
                        return o.toggleAllChallengeCategory()
                    }),
                    t._uU(33),
                    t.ALo(34, "translate"),
                    t.qZA()()(),
                    t.TgZ(35, "div", 22),
                    t._uU(36),
                    t.ALo(37, "translate"),
                    t.TgZ(38, "a", 23),
                    t._uU(39),
                    t.ALo(40, "translate"),
                    t.qZA()(),
                    t.TgZ(41, "mat-card"),
                    t.YNc(42, Or, 22, 5, "mat-table", 24),
                    t.qZA(),
                    t.YNc(43, Nr, 4, 2, "div", 25),
                    t.qZA(),
                    t._UZ(44, "img", 26)(45, "ngx-spinner", 27)),
                    2 & e && (t.xp6(4),
                    t.hij("", t.lcZ(5, 24, "TITLE_SCORE_BOARD"), " "),
                    t.xp6(3),
                    t.hij("", o.percentChallengesSolved, "%"),
                    t.xp6(1),
                    t.Q6J("color", "accent")("value", o.percentChallengesSolved),
                    t.xp6(1),
                    t.Q6J("ngIf", "never" !== o.codingChallengesEnabled),
                    t.xp6(3),
                    t.Q6J("ngForOf", o.availableDifficulties),
                    t.xp6(1),
                    t.Q6J("disabled", o.restrictToTutorialsFirst && !o.allTutorialsCompleted),
                    t.xp6(1),
                    t.Oqu(t.lcZ(15, 26, o.toggledMajorityOfDifficulties ? "BTN_HIDE_ALL" : "BTN_SHOW_ALL")),
                    t.xp6(2),
                    t.Q6J("checked", o.showSolvedChallenges)("disabled", o.restrictToTutorialsFirst && !o.allTutorialsCompleted)("matTooltip", o.restrictToTutorialsFirst && !o.allTutorialsCompleted ? t.xi3(17, 28, "INFO_FULL_CHALLENGE_MODE", t.VKq(39, bt, o.challenges.length)) : ""),
                    t.xp6(3),
                    t.hij(" ", t.lcZ(20, 31, "BTN_SHOW_SOLVED"), " "),
                    t.xp6(2),
                    t.Q6J("ngIf", o.showHackingInstructor),
                    t.xp6(1),
                    t.Q6J("ngIf", o.numDisabledChallenges > 0),
                    t.xp6(1),
                    t.Q6J("ngIf", o.localBackupEnabled),
                    t.xp6(4),
                    t.Q6J("ngIf", o.localBackupEnabled),
                    t.xp6(1),
                    t.Q6J("ngIf", o.numDisabledChallenges > 0 && o.showDisabledChallenges),
                    t.xp6(3),
                    t.Q6J("ngForOf", o.availableChallengeCategories),
                    t.xp6(1),
                    t.Q6J("disabled", o.restrictToTutorialsFirst && !o.allTutorialsCompleted),
                    t.xp6(1),
                    t.Oqu(t.lcZ(34, 33, o.toggledMajorityOfCategories ? "BTN_HIDE_ALL" : "BTN_SHOW_ALL")),
                    t.xp6(3),
                    t.hij(" ", t.lcZ(37, 35, "SCORE_BOARD_LEGACY_CATCH_LINE"), " "),
                    t.xp6(3),
                    t.hij(" ", t.lcZ(40, 37, "SCORE_BOARD_LEGACY_ACTION_BUTTON"), " "),
                    t.xp6(3),
                    t.Q6J("ngIf", o.challenges),
                    t.xp6(1),
                    t.Q6J("ngIf", o.showContributionInfoBox || o.questionnaireUrl))
                },
                dependencies: [h.sg, h.O5, L.rH, u.Pi, p.xw, p.yH, $.b8, ae.Ro, F.Hw, x.lW, x.zs, d.BZ, d.fO, d.as, d.w1, d.Dz, d.nj, d.ge, d.ev, d.XQ, d.Gk, T.a8, T.n5, z.d, Ne.pW, Q.gM, Ee.Yi, Me.k, ie.qn, ie.HS, ji, u.X$],
                styles: ["mat-card[_ngcontent-%COMP%], mat-expansion-panel[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]{margin-bottom:35px;margin-left:35px;margin-right:35px;min-width:300px}.category-container[_ngcontent-%COMP%], mat-table[_ngcontent-%COMP%]{margin-top:25px}.star-container[_ngcontent-%COMP%]{margin-bottom:10px;margin-top:25px}.star-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover{cursor:pointer}.mat-column-status[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%]{cursor:initial}.mat-column-status[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%]{cursor:pointer}.heading[_ngcontent-%COMP%]{padding-top:5px}.mat-raised-button[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content}.category-toggle[_ngcontent-%COMP%]{font-size:small}.overlay-fullscreen[_ngcontent-%COMP%]     .black-overlay{position:fixed}.hacking-instructor-button[_ngcontent-%COMP%], .vulnerability-mitigation-button[_ngcontent-%COMP%], .code-snippet-button[_ngcontent-%COMP%]{margin-left:8px}.fill-remaining-space[_ngcontent-%COMP%]{flex:1 1 auto}.disabled-challenges-infoBox[_ngcontent-%COMP%]{align-self:center;color:#e64a19;cursor:default;height:100%;margin:0}.disabled-challenges-infoBox[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#546e7a;font-style:normal}.backupButton[_ngcontent-%COMP%]{align-self:center;margin-left:15px}.new-score-board-ad[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:center;margin-bottom:16px;margin-top:-16px}.new-score-board-ad[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-left:8px}"]
            }),
            n
        }
        )()
          , De = (()=>{
            class n {
                constructor(e) {
                    this.http = e
                }
                verify(e) {
                    return this.http.post(`${P.N.hostServer}/rest/2fa/verify`, {
                        tmpToken: localStorage.getItem("totp_tmp_token"),
                        totpToken: e
                    }).pipe((0,
                    C.U)(o=>o.authentication), (0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
                status() {
                    return this.http.get(`${P.N.hostServer}/rest/2fa/status`).pipe((0,
                    C.U)(e=>e), (0,
                    _.K)(e=>{
                        throw e
                    }
                    ))
                }
                setup(e, o, i) {
                    return this.http.post(`${P.N.hostServer}/rest/2fa/setup`, {
                        password: e,
                        setupToken: i,
                        initialToken: o
                    }).pipe((0,
                    C.U)(()=>{}
                    ), (0,
                    _.K)(r=>{
                        throw r
                    }
                    ))
                }
                disable(e) {
                    return this.http.post(`${P.N.hostServer}/rest/2fa/disable`, {
                        password: e
                    }).pipe((0,
                    C.U)(()=>{}
                    ), (0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.LFG(U.eN))
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )();
        function Mr(n, a) {
            1 & n && (t.TgZ(0, "div", 13),
            t._uU(1, "INVALID_TWO_FACTOR_AUTH_TOKEN"),
            t.qZA())
        }
        O.vI.add(g.B$L);
        let Dr = (()=>{
            class n {
                constructor(e, o, i, r, l) {
                    this.twoFactorAuthService = e,
                    this.cookieService = o,
                    this.userService = i,
                    this.router = r,
                    this.ngZone = l,
                    this.twoFactorForm = new s.nJ({
                        token: new s.p4("",[s.kI.minLength(6), s.kI.maxLength(6), s.kI.required, s.kI.pattern("^[\\d]{6}$")])
                    }),
                    this.errored = !1
                }
                verify() {
                    var e = this;
                    this.twoFactorAuthService.verify(this.twoFactorForm.value.token).subscribe(i=>{
                        localStorage.setItem("token", i.token);
                        const r = new Date;
                        r.setHours(r.getHours() + 8),
                        this.cookieService.put("token", i.token, {
                            expires: r
                        }),
                        sessionStorage.setItem("bid", i.bid?.toString()),
                        this.userService.isLoggedIn.next(!0),
                        this.ngZone.run((0,
                        w.Z)(function*() {
                            return yield e.router.navigate(["/search"])
                        }))
                    }
                    , i=>(this.errored = !0,
                    setTimeout(()=>{
                        this.errored = !1
                    }
                    , 5e3),
                    i))
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(De),t.Y36(I.N_),t.Y36(R),t.Y36(L.F0),t.Y36(t.R0b))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-two-factor-auth-enter"]],
                decls: 27,
                vars: 13,
                consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], ["translate", ""], ["class", "error", "style", "margin-bottom: 10px;", "translate", "", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "form-container"], ["id", "inputToken", "appearance", "outline", "color", "accent"], ["formControlName", "token", "type", "text", "minlength", "6", "maxlength", "6", "pattern", "^[\\d]{6}$", "matInput", "", "id", "totpToken", "aria-label", "Field for entering the Two Factor token", 3, "placeholder"], ["tokenInput", ""], ["matSuffix", "", "matTooltipPosition", "right", "aria-label", "The code to be entered from the authenticator must have 6 digits.", 3, "matTooltip"], ["align", "end"], ["type", "submit", "color", "primary", "mat-raised-button", "", "id", "totpSubmitButton", "aria-label", "Button to confirm the input", 3, "disabled"], [1, "material-icons"], ["translate", "", 1, "error", 2, "margin-bottom", "10px"]],
                template: function(e, o) {
                    if (1 & e && (t.TgZ(0, "div", 0)(1, "mat-card", 1)(2, "h1", 2),
                    t._uU(3, "TITLE_TWO_FACTOR_AUTHENTICATION"),
                    t.qZA(),
                    t.TgZ(4, "p", 2),
                    t._uU(5, "TITLE_TWO_FACTOR_AUTH_ENTER"),
                    t.qZA(),
                    t.YNc(6, Mr, 2, 0, "div", 3),
                    t.TgZ(7, "form", 4),
                    t.NdJ("ngSubmit", function() {
                        return o.verify()
                    }),
                    t.TgZ(8, "div", 5)(9, "mat-form-field", 6)(10, "mat-label", 2),
                    t._uU(11, "LABEL_TWO_FACTOR_AUTH_TOKEN"),
                    t.qZA(),
                    t._UZ(12, "input", 7, 8),
                    t.ALo(14, "translate"),
                    t.TgZ(15, "mat-icon", 9),
                    t.ALo(16, "translate"),
                    t._uU(17, " help_outline "),
                    t.qZA(),
                    t.TgZ(18, "mat-hint", 10),
                    t._uU(19),
                    t.qZA(),
                    t.TgZ(20, "mat-error", 2),
                    t._uU(21, "INVALID_TWO_FACTOR_AUTH_TOKEN"),
                    t.qZA()()(),
                    t.TgZ(22, "button", 11)(23, "i", 12),
                    t._uU(24, " lock_open "),
                    t.qZA(),
                    t._uU(25),
                    t.ALo(26, "translate"),
                    t.qZA()()()()),
                    2 & e) {
                        const i = t.MAs(13);
                        t.xp6(6),
                        t.Q6J("ngIf", o.errored),
                        t.xp6(1),
                        t.Q6J("formGroup", o.twoFactorForm),
                        t.xp6(5),
                        t.s9C("placeholder", t.lcZ(14, 7, "2FA_ENTER_CODE_PLACEHOLDER")),
                        t.xp6(3),
                        t.s9C("matTooltip", t.lcZ(16, 9, "INITIAL_TOKEN_TOOLTIP")),
                        t.xp6(4),
                        t.hij("", (null == i.value ? null : i.value.length) || 0, "/6"),
                        t.xp6(3),
                        t.Q6J("disabled", o.twoFactorForm.invalid),
                        t.xp6(3),
                        t.hij(" ", t.lcZ(26, 11, "BTN_LOGIN"), " ")
                    }
                },
                dependencies: [h.O5, u.Pi, p.Wh, s._Y, s.Fj, s.JJ, s.JL, s.wO, s.nD, s.c5, s.sg, s.u, F.Hw, f.TO, f.KE, f.bx, f.hX, f.R9, x.lW, T.a8, B.Nt, Q.gM, u.X$],
                styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:25%}#totpSubmitButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}#inputToken[_ngcontent-%COMP%]{width:100%}"]
            }),
            n
        }
        )();
        O.vI.add(g.wOQ, g.R3t);
        let qr = (()=>{
            class n {
                constructor(e, o) {
                    this.route = e,
                    this.translate = o,
                    this.error = null
                }
                ngOnInit() {
                    const e = this.route.snapshot.queryParams.error;
                    e && this.translate.get(e).subscribe(o=>{
                        this.error = o
                    }
                    , o=>{
                        this.error = o
                    }
                    )
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(L.gz),t.Y36(u.sK))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-error-page"]],
                decls: 7,
                vars: 1,
                consts: [[1, "warn-notification", "mat-elevation-z6"], [1, "mat-display-3"], [1, "fas", "fa-hand-paper"], [1, "mat-subheading-2"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "mat-card", 0)(1, "div")(2, "div", 1),
                    t._UZ(3, "i", 2),
                    t._uU(4, " 403"),
                    t.qZA(),
                    t.TgZ(5, "span", 3),
                    t._uU(6),
                    t.qZA()()()),
                    2 & e && (t.xp6(6),
                    t.Oqu(o.error))
                },
                dependencies: [T.a8],
                styles: ["mat-card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}"]
            }),
            n
        }
        )();
        var re = c(2289)
          , Tt = c(3267);
        let Fr = (()=>{
            class n {
                constructor(e) {
                    this.breakpointObserver = e,
                    this.windowWidth = window.innerWidth,
                    this.isHandset$ = this.breakpointObserver.observe(re.u3.Handset).pipe((0,
                    C.U)(o=>o.matches))
                }
                ngAfterViewInit() {
                    this.windowWidth = window.innerWidth
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(re.Yg))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-privacy-security"]],
                decls: 3,
                vars: 0,
                consts: [[1, "sidenav-container"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "mat-sidenav-container", 0)(1, "mat-sidenav-content"),
                    t._UZ(2, "router-outlet"),
                    t.qZA()())
                },
                dependencies: [L.lC, Tt.TM, Tt.Rh]
            }),
            n
        }
        )();
        var se = c(3079);
        function Br(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "div", 5)(1, "p", 6),
                t._uU(2, "2FA_SUCCESSFUL_SETUP"),
                t.qZA(),
                t.TgZ(3, "form", 7),
                t.NdJ("ngSubmit", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.disable())
                }),
                t.TgZ(4, "h2", 8),
                t._uU(5, "REMOVE_TWO_FACTOR_AUTH"),
                t.qZA(),
                t.TgZ(6, "div", 9),
                t._uU(7, "2FA_SETUP_ERROR"),
                t.qZA(),
                t.TgZ(8, "mat-form-field", 10)(9, "mat-label", 6),
                t._uU(10, "LABEL_CURRENT_PASSWORD"),
                t.qZA(),
                t._UZ(11, "input", 11),
                t.ALo(12, "translate"),
                t.qZA(),
                t.TgZ(13, "button", 12)(14, "i", 13),
                t._uU(15, " remove_circle_outline "),
                t.qZA(),
                t._uU(16),
                t.ALo(17, "translate"),
                t.qZA()()()
            }
            if (2 & n) {
                const e = t.oxw();
                t.xp6(3),
                t.Q6J("formGroup", e.twoFactorDisableForm),
                t.xp6(3),
                t.Q6J("hidden", !(e.errored && !e.twoFactorDisableForm.dirty)),
                t.xp6(5),
                t.s9C("placeholder", t.lcZ(12, 5, "MANDATORY_CURRENT_PASSWORD")),
                t.xp6(2),
                t.Q6J("disabled", e.twoFactorDisableForm.invalid),
                t.xp6(3),
                t.hij(" ", t.lcZ(17, 7, "BTN_REMOVE"), " ")
            }
        }
        function Rr(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "form", 14),
                t.NdJ("ngSubmit", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.setup())
                }),
                t.TgZ(1, "span", 15),
                t._uU(2, "2FA_AUTH_SETUP_INSTRUCTIONS"),
                t.qZA(),
                t.TgZ(3, "div", 16),
                t._UZ(4, "qr-code", 17),
                t.qZA(),
                t.TgZ(5, "div", 9),
                t._uU(6, "2FA_SETUP_ERROR"),
                t.qZA(),
                t.TgZ(7, "mat-form-field", 10)(8, "mat-label", 6),
                t._uU(9, "LABEL_CURRENT_PASSWORD"),
                t.qZA(),
                t._UZ(10, "input", 18),
                t.ALo(11, "translate"),
                t.qZA(),
                t.TgZ(12, "mat-form-field", 10)(13, "mat-label", 6),
                t._uU(14, "INITIAL_CODE"),
                t.qZA(),
                t._UZ(15, "input", 19, 20),
                t.ALo(17, "translate"),
                t.TgZ(18, "mat-error", 6),
                t._uU(19, "INVALID_TWO_FACTOR_AUTH_TOKEN"),
                t.qZA(),
                t.TgZ(20, "mat-icon", 21),
                t.ALo(21, "translate"),
                t._uU(22, " help_outline "),
                t.qZA(),
                t.TgZ(23, "mat-hint", 22),
                t._uU(24),
                t.qZA()(),
                t.TgZ(25, "button", 23)(26, "i", 13),
                t._uU(27, " save "),
                t.qZA(),
                t._uU(28),
                t.ALo(29, "translate"),
                t.qZA()()
            }
            if (2 & n) {
                const e = t.MAs(16)
                  , o = t.oxw();
                t.Q6J("formGroup", o.twoFactorSetupForm),
                t.xp6(4),
                t.Q6J("value", o.totpUrl)("size", 300)("level", "L"),
                t.xp6(1),
                t.Q6J("hidden", !(o.errored && !o.twoFactorSetupForm.dirty)),
                t.xp6(5),
                t.s9C("placeholder", t.lcZ(11, 12, "MANDATORY_CURRENT_PASSWORD")),
                t.xp6(5),
                t.s9C("placeholder", t.lcZ(17, 14, "INITIAL_CODE_PLACEHOLDER")),
                t.uIk("data-test-totp-secret", o.totpSecret),
                t.xp6(5),
                t.s9C("matTooltip", t.lcZ(21, 16, "INITIAL_TOKEN_TOOLTIP")),
                t.xp6(4),
                t.hij("", (null == e.value ? null : e.value.length) || 0, "/6"),
                t.xp6(1),
                t.Q6J("disabled", o.twoFactorSetupForm.invalid),
                t.xp6(3),
                t.hij(" ", t.lcZ(29, 18, "BTN_SAVE"), " ")
            }
        }
        O.vI.add(g.B$L, g.r6l);
        let Yr = (()=>{
            class n {
                constructor(e, o, i, r, l) {
                    this.twoFactorAuthService = e,
                    this.configurationService = o,
                    this.snackBar = i,
                    this.translateService = r,
                    this.snackBarHelperService = l,
                    this.twoFactorSetupForm = new s.nJ({
                        passwordControl: new s.p4("",[s.kI.required]),
                        initalTokenControl: new s.p4("",[s.kI.required, s.kI.pattern("^[\\d]{6}$")])
                    }),
                    this.twoFactorDisableForm = new s.nJ({
                        passwordControl: new s.p4("",[s.kI.required])
                    }),
                    this.setupStatus = null,
                    this.errored = null,
                    this.appName = "OWASP Juice Shop"
                }
                ngOnInit() {
                    this.updateStatus()
                }
                updateStatus() {
                    const e = this.twoFactorAuthService.status()
                      , o = this.configurationService.getApplicationConfiguration();
                    return (0,
                    Pt.D)([e, o]).subscribe(([{setup: i, email: r, secret: l, setupToken: m},v])=>{
                        if (this.setupStatus = i,
                        this.appName = v.application.name,
                        !i) {
                            const A = encodeURIComponent(this.appName);
                            this.totpUrl = `otpauth://totp/${A}:${r}?secret=${l}&issuer=${A}`,
                            this.totpSecret = l,
                            this.setupToken = m
                        }
                    }
                    , ()=>{
                        console.log("Failed to fetch 2fa status")
                    }
                    ),
                    e
                }
                setup() {
                    this.twoFactorAuthService.setup(this.twoFactorSetupForm.get("passwordControl")?.value, this.twoFactorSetupForm.get("initalTokenControl")?.value, this.setupToken).subscribe(()=>{
                        this.setupStatus = !0,
                        this.snackBarHelperService.open("CONFIRM_2FA_SETUP")
                    }
                    , ()=>{
                        this.twoFactorSetupForm.get("passwordControl")?.markAsPristine(),
                        this.twoFactorSetupForm.get("initalTokenControl")?.markAsPristine(),
                        this.errored = !0
                    }
                    )
                }
                disable() {
                    this.twoFactorAuthService.disable(this.twoFactorDisableForm.get("passwordControl")?.value).subscribe(()=>{
                        this.updateStatus().subscribe(()=>{
                            this.setupStatus = !1
                        }
                        ),
                        this.snackBarHelperService.open("CONFIRM_2FA_DISABLE")
                    }
                    , ()=>{
                        this.twoFactorDisableForm.get("passwordControl")?.markAsPristine(),
                        this.errored = !0
                    }
                    )
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(De),t.Y36(b.e),t.Y36(ut.ux),t.Y36(u.sK),t.Y36(J.H))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-two-factor-auth"]],
                decls: 6,
                vars: 2,
                consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], ["id", "2fa-setup-title", "translate", ""], ["id", "2fa-setup-successfully", 4, "ngIf"], ["class", "form-container", "id", "two-factor-auth-setup", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["id", "2fa-setup-successfully"], ["translate", ""], ["id", "two-factor-auth-disable", 1, "form-container", 3, "formGroup", "ngSubmit"], ["id", "two-factor-auth-disable-title", "translate", ""], ["translate", "", 1, "error", 3, "hidden"], ["appearance", "outline", "color", "accent"], ["id", "currentPasswordDisable", "formControlName", "passwordControl", "type", "password", "matInput", "", "aria-label", "Field to enter the current password", "autocomplete", "off", 3, "placeholder"], ["type", "submit", "id", "disableTwoFactorAuth", "mat-raised-button", "", "color", "warn", "aria-label", "Button to remove the two-factor authentication", 3, "disabled"], [1, "material-icons"], ["id", "two-factor-auth-setup", 1, "form-container", 3, "formGroup", "ngSubmit"], ["id", "2fa-setup-instructions", "translate", ""], ["fxLayoutAlign", "center", 1, "two-factor-qr-code"], [3, "value", "size", "level"], ["id", "currentPasswordSetup", "formControlName", "passwordControl", "type", "password", "matInput", "", "aria-label", "Field to enter the current password", "autocomplete", "off", 3, "placeholder"], ["id", "initalToken", "formControlName", "initalTokenControl", "type", "text", "matInput", "", "aria-label", "Field to enter the initial token. This must have 6 digits.", "minlength", "6", "maxlength", "6", "pattern", "^[\\d]{6}$", 3, "placeholder"], ["initToken", ""], ["matSuffix", "", "matTooltipPosition", "right", "aria-label", "The token to be entered from the authenticator must have 6 digits.", 3, "matTooltip"], ["align", "end"], ["type", "submit", "id", "setupTwoFactorAuth", "mat-raised-button", "", "color", "primary", "aria-label", "Button to complete the two-factor configuration", 3, "disabled"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "div", 0)(1, "mat-card", 1)(2, "h1", 2),
                    t._uU(3, "TITLE_TWO_FACTOR_AUTH_CONFIG"),
                    t.qZA(),
                    t.YNc(4, Br, 18, 9, "div", 3),
                    t.YNc(5, Rr, 30, 20, "form", 4),
                    t.qZA()()),
                    2 & e && (t.xp6(4),
                    t.Q6J("ngIf", !0 === o.setupStatus),
                    t.xp6(1),
                    t.Q6J("ngIf", !1 === o.setupStatus))
                },
                dependencies: [h.O5, u.Pi, p.Wh, s._Y, s.Fj, s.JJ, s.JL, s.wO, s.nD, s.c5, s.sg, s.u, se.V, F.Hw, f.TO, f.KE, f.bx, f.hX, f.R9, x.lW, T.a8, B.Nt, Q.gM, u.X$],
                styles: ["mat-card[_ngcontent-%COMP%]{display:block;margin-bottom:50px;margin-left:auto;margin-right:auto;min-width:320px;width:30%}mat-form-field[_ngcontent-%COMP%]{padding-top:10px}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}#setupTwoFactorAuth[_ngcontent-%COMP%], #disableTwoFactorAuth[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}.two-factor-qr-code[_ngcontent-%COMP%]{margin:16px 0}#two-factor-auth-disable[_ngcontent-%COMP%]{margin-top:32px}#two-factor-auth-disable-title[_ngcontent-%COMP%]{margin-bottom:0}button[_ngcontent-%COMP%]{margin-top:5px}"]
            }),
            n
        }
        )()
          , qe = (()=>{
            class n {
                constructor(e) {
                    this.http = e,
                    this.hostServer = P.N.hostServer
                }
                getCaptcha() {
                    return this.http.get(this.hostServer + "/rest/image-captcha/").pipe((0,
                    _.K)(e=>{
                        throw e
                    }
                    ))
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.LFG(U.eN))
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )()
          , Fe = (()=>{
            class n {
                constructor(e) {
                    this.http = e,
                    this.hostServer = P.N.hostServer,
                    this.host = this.hostServer + "/rest/user"
                }
                erase(e) {
                    return this.http.post(this.host + "/erasure-request", e).pipe((0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
                dataExport(e) {
                    return this.http.post(this.host + "/data-export", e).pipe((0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.LFG(U.eN))
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )();
        function Jr(n, a) {
            if (1 & n && (t.TgZ(0, "div")(1, "p", 13),
            t._uU(2),
            t.qZA()()),
            2 & n) {
                const e = t.oxw();
                t.xp6(2),
                t.Oqu(e.error)
            }
        }
        function Qr(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 2),
            t._uU(1, "MANDATORY_CAPTCHA "),
            t.qZA())
        }
        function Hr(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 2),
            t._uU(1, "MANDATORY_CAPTCHA "),
            t.qZA())
        }
        const Gr = function() {
            return {
                length: "5"
            }
        };
        function jr(n, a) {
            if (1 & n && (t.TgZ(0, "div")(1, "div")(2, "span", 14),
            t._uU(3, "CAPTCHA "),
            t.TgZ(4, "span"),
            t._uU(5, ":"),
            t.qZA()(),
            t._UZ(6, "div", 15),
            t.qZA(),
            t.TgZ(7, "mat-form-field", 16)(8, "mat-label", 2),
            t._uU(9, "ENTER_CAPTCHA"),
            t.qZA(),
            t._UZ(10, "input", 17, 18),
            t.ALo(12, "translate"),
            t.TgZ(13, "mat-hint", 19),
            t._uU(14),
            t.qZA(),
            t.YNc(15, Qr, 2, 0, "mat-error", 20),
            t.YNc(16, Hr, 2, 0, "mat-error", 20),
            t.qZA()()),
            2 & n) {
                const e = t.MAs(11)
                  , o = t.oxw();
                t.xp6(6),
                t.Q6J("innerHTML", o.captcha, t.oJD),
                t.xp6(4),
                t.s9C("placeholder", t.xi3(12, 6, "TYPE_THESE_LETTERS", t.DdM(9, Gr))),
                t.Q6J("formControl", o.captchaControl),
                t.xp6(4),
                t.hij("", (null == e.value ? null : e.value.length) || 0, "/5"),
                t.xp6(1),
                t.Q6J("ngIf", o.captchaControl.invalid && o.captchaControl.errors.required),
                t.xp6(1),
                t.Q6J("ngIf", o.captchaControl.invalid && o.captchaControl.errors.minlength)
            }
        }
        let Wr = (()=>{
            class n {
                constructor(e, o, i) {
                    this.sanitizer = e,
                    this.imageCaptchaService = o,
                    this.dataSubjectService = i,
                    this.captchaControl = new s.p4("",[s.kI.required, s.kI.minLength(5)]),
                    this.formatControl = new s.p4("",[s.kI.required]),
                    this.dataRequest = void 0,
                    this.presenceOfCaptcha = !1
                }
                ngOnInit() {
                    this.needCaptcha(),
                    this.dataRequest = {}
                }
                needCaptcha() {
                    const e = new Date
                      , o = localStorage.getItem("lstdtxprt") ? new Date(JSON.parse(String(localStorage.getItem("lstdtxprt")))) : new Date(0);
                    e.getTime() - o.getTime() < 3e5 && (this.getNewCaptcha(),
                    this.presenceOfCaptcha = !0)
                }
                getNewCaptcha() {
                    this.imageCaptchaService.getCaptcha().subscribe(e=>{
                        this.captcha = this.sanitizer.bypassSecurityTrustHtml(e.image)
                    }
                    )
                }
                save() {
                    this.presenceOfCaptcha && (this.dataRequest.answer = this.captchaControl.value),
                    this.dataRequest.format = this.formatControl.value,
                    this.dataSubjectService.dataExport(this.dataRequest).subscribe(e=>{
                        this.error = null,
                        this.confirmation = e.confirmation,
                        this.userData = e.userData,
                        window.open("", "_blank", "width=500")?.document.write(this.userData),
                        this.lastSuccessfulTry = new Date,
                        localStorage.setItem("lstdtxprt", JSON.stringify(this.lastSuccessfulTry)),
                        this.ngOnInit(),
                        this.resetForm()
                    }
                    , e=>{
                        this.error = e.error,
                        this.confirmation = null,
                        this.resetFormError()
                    }
                    )
                }
                resetForm() {
                    this.captchaControl.markAsUntouched(),
                    this.captchaControl.markAsPristine(),
                    this.captchaControl.setValue(""),
                    this.formatControl.markAsUntouched(),
                    this.formatControl.markAsPristine(),
                    this.formatControl.setValue("")
                }
                resetFormError() {
                    this.captchaControl.markAsUntouched(),
                    this.captchaControl.markAsPristine(),
                    this.captchaControl.setValue("")
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(k.H7),t.Y36(qe),t.Y36(Fe))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-data-export"]],
                decls: 26,
                vars: 7,
                consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], ["translate", ""], [4, "ngIf"], ["id", "data-export-form", 1, "form-container"], ["id", "formatControl", "aria-label", "Select an option", 3, "formControl"], ["translate", "", 1, "radio-label"], ["value", "1", "aria-label", "Export Option JSON"], ["value", "2", "aria-label", "Export Option PDF", "disabled", ""], ["value", "3", "aria-label", "Export Option Excel", "disabled", ""], ["type", "submit", "id", "submitButton", "color", "primary", "mat-raised-button", "", "aria-label", "Button to send the request", 2, "margin-top", "15px", 3, "disabled", "click"], [1, "material-icons"], [1, "hint"], [1, "error"], ["translate", "", 2, "float", "left", "margin-top", "40px", "font-weight", "500", "margin-bottom", "20px"], [1, "captcha-image", 2, "margin-left", "10px", 3, "innerHTML"], ["appearance", "outline", "color", "accent", 2, "margin-top", "10px", "width", "100%"], ["type", "text", "matInput", "", "maxlength", "5", "aria-label", "Input for the CAPTCHA", 3, "formControl", "placeholder"], ["captchaInput", ""], ["align", "end"], ["translate", "", 4, "ngIf"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "div", 0)(1, "mat-card", 1)(2, "h1", 2),
                    t._uU(3, "TITLE_REQUEST_DATA_EXPORT"),
                    t.qZA(),
                    t.YNc(4, Jr, 3, 1, "div", 3),
                    t.TgZ(5, "div", 4)(6, "mat-radio-group", 5)(7, "mat-label", 6),
                    t._uU(8, "EXPORT_LABEL "),
                    t.TgZ(9, "span"),
                    t._uU(10, ":"),
                    t.qZA()(),
                    t.TgZ(11, "mat-radio-button", 7),
                    t._uU(12, "JSON"),
                    t.qZA(),
                    t.TgZ(13, "mat-radio-button", 8),
                    t._uU(14, "PDF"),
                    t.qZA(),
                    t.TgZ(15, "mat-radio-button", 9),
                    t._uU(16, "Excel"),
                    t.qZA()(),
                    t.YNc(17, jr, 17, 10, "div", 3),
                    t.qZA(),
                    t.TgZ(18, "button", 10),
                    t.NdJ("click", function() {
                        return o.save()
                    }),
                    t.TgZ(19, "i", 11),
                    t._uU(20, " save_alt "),
                    t.qZA(),
                    t._uU(21),
                    t.ALo(22, "translate"),
                    t.qZA(),
                    t.TgZ(23, "div", 12)(24, "span", 2),
                    t._uU(25, "DATA_EXPORT_HINT"),
                    t.qZA()()()()),
                    2 & e && (t.xp6(4),
                    t.Q6J("ngIf", o.error),
                    t.xp6(2),
                    t.Q6J("formControl", o.formatControl),
                    t.xp6(11),
                    t.Q6J("ngIf", o.presenceOfCaptcha),
                    t.xp6(1),
                    t.Q6J("disabled", o.formatControl.invalid || o.captchaControl.invalid && o.presenceOfCaptcha),
                    t.xp6(3),
                    t.hij(" ", t.lcZ(22, 5, "BTN_REQUEST"), " "))
                },
                dependencies: [h.O5, u.Pi, p.Wh, s.Fj, s.JJ, s.nD, s.oH, f.TO, f.KE, f.bx, f.hX, x.lW, T.a8, B.Nt, nt.VQ, nt.U0, u.X$],
                styles: ["mat-card[_ngcontent-%COMP%]{display:block;height:auto;margin-bottom:50px;margin-left:auto;margin-right:auto;min-width:320px;width:25%}#submitButton[_ngcontent-%COMP%]{margin-left:20%;width:60%}.hint[_ngcontent-%COMP%]{display:flex;font-size:10px;justify-content:center;margin-top:5px}.mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-bottom:16px;margin-left:16px}.radio-label[_ngcontent-%COMP%]{font-weight:500;margin-right:8px}.captcha-image[_ngcontent-%COMP%]{float:left;margin-bottom:10px;margin-top:20px}"]
            }),
            n
        }
        )()
          , Kr = (()=>{
            class n {
                constructor(e) {
                    this.sanitizer = e,
                    this.lastLoginIp = "?"
                }
                ngOnInit() {
                    try {
                        this.parseAuthToken()
                    } catch (e) {
                        console.log(e)
                    }
                }
                parseAuthToken() {
                    let e = {};
                    const o = localStorage.getItem("token");
                    o && (e = kt(o),
                    e.data.lastLoginIp && (this.lastLoginIp = this.sanitizer.bypassSecurityTrustHtml(`<small>${e.data.lastLoginIp}</small>`)))
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(k.H7))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-last-login-ip"]],
                decls: 8,
                vars: 1,
                consts: [[1, "ipCard", "mat-elevation-z6"], ["translate", ""], [2, "margin-bottom", "15px"], [3, "innerHTML"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "mat-card", 0)(1, "h1", 1),
                    t._uU(2, "LAST_LOGIN_IP"),
                    t.qZA(),
                    t.TgZ(3, "p", 2)(4, "span", 1),
                    t._uU(5, "IP_ADDRESS"),
                    t.qZA(),
                    t._uU(6, "\xa0\xa0"),
                    t._UZ(7, "span", 3),
                    t.qZA()()),
                    2 & e && (t.xp6(7),
                    t.Q6J("innerHTML", o.lastLoginIp, t.oJD))
                },
                dependencies: [u.Pi, T.a8],
                styles: [".ipCard[_ngcontent-%COMP%]{display:block;margin:0 auto 5%;min-width:320px;width:25%}"]
            }),
            n
        }
        )()
          , zr = (()=>{
            class n {
                constructor(e, o) {
                    this._document = e,
                    this.configurationService = o,
                    this.applicationName = "OWASP Juice Shop"
                }
                ngOnInit() {
                    this.applicationUrl = this._document.location.protocol + "//" + this._document.location.hostname,
                    this.configurationService.getApplicationConfiguration().subscribe(e=>{
                        e?.application?.name && (this.applicationName = e.application.name),
                        this.privacyContactEmail = e?.application?.privacyContactEmail ? e.application.privacyContactEmail : `donotreply@${this._document.location.hostname}`
                    }
                    , e=>{
                        console.log(e)
                    }
                    )
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(h.K0),t.Y36(b.e))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-privacy-policy"]],
                decls: 169,
                vars: 9,
                consts: [[1, "mat-elevation-z6"], [1, "privacy-policy"], ["translate", ""], [1, "hot"], ["href", "https://www.freeprivacypolicy.com/", "aria-label", "Link to the page where the privacy policy was created"], [1, "divider"], ["src", "assets/public/images/padding/81px.png"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "mat-card", 0)(1, "section", 1)(2, "h1", 2),
                    t._uU(3, "TITLE_PRIVACY_POLICY"),
                    t.qZA(),
                    t.TgZ(4, "p"),
                    t._uU(5, "Effective date: March 15, 2019"),
                    t.qZA(),
                    t.TgZ(6, "p"),
                    t._uU(7),
                    t.TgZ(8, "span", 3),
                    t._uU(9),
                    t.qZA(),
                    t._uU(10, ' website (the "Service").'),
                    t.qZA(),
                    t.TgZ(11, "p"),
                    t._uU(12),
                    t.TgZ(13, "a", 4),
                    t._uU(14, "Free Privacy Policy website"),
                    t.qZA(),
                    t._uU(15, "."),
                    t.qZA(),
                    t.TgZ(16, "p"),
                    t._uU(17),
                    t.qZA(),
                    t._UZ(18, "mat-divider", 5),
                    t.TgZ(19, "h2"),
                    t._uU(20, "A. Information Collection And Use"),
                    t.qZA(),
                    t.TgZ(21, "p"),
                    t._uU(22, "We collect several different types of information for various purposes to provide and improve our Service to you."),
                    t.qZA(),
                    t.TgZ(23, "h3"),
                    t._uU(24, "A1. Types of Data Collected"),
                    t.qZA(),
                    t.TgZ(25, "h4"),
                    t._uU(26, "A1.1 Personal Data"),
                    t.qZA(),
                    t.TgZ(27, "p"),
                    t._uU(28, 'While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:'),
                    t.qZA(),
                    t.TgZ(29, "ul")(30, "li"),
                    t._uU(31, "Email address"),
                    t.qZA(),
                    t.TgZ(32, "li"),
                    t._uU(33, "Address, State, Province, ZIP/Postal code, City"),
                    t.qZA(),
                    t.TgZ(34, "li"),
                    t._uU(35, "Cookies and Usage Data"),
                    t.qZA()(),
                    t.TgZ(36, "h4"),
                    t._uU(37, "A1.2 Usage Data"),
                    t.qZA(),
                    t.TgZ(38, "p")(39, "span", 3),
                    t._uU(40, "We may also"),
                    t.qZA(),
                    t._uU(41, ' collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer\'s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.'),
                    t.qZA(),
                    t.TgZ(42, "h4"),
                    t._uU(43, "A1.3 Tracking & Cookies Data"),
                    t.qZA(),
                    t.TgZ(44, "p"),
                    t._uU(45, "We use cookies and similar tracking technologies to track the activity on our Service and hold certain information."),
                    t.qZA(),
                    t.TgZ(46, "p"),
                    t._uU(47, "Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service."),
                    t.qZA(),
                    t.TgZ(48, "p"),
                    t._uU(49, "You can "),
                    t.TgZ(50, "span", 3),
                    t._uU(51, "instruct you"),
                    t.qZA(),
                    t._uU(52, "r browser "),
                    t.TgZ(53, "span", 3),
                    t._uU(54, "to refuse all"),
                    t.qZA(),
                    t._uU(55, " cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service."),
                    t.qZA(),
                    t.TgZ(56, "p"),
                    t._uU(57, "Examples of Cookies we use:"),
                    t.qZA(),
                    t.TgZ(58, "ul")(59, "li")(60, "strong"),
                    t._uU(61, "Session Cookies:"),
                    t.qZA(),
                    t._uU(62, " \xa0We use Session Cookies to operate our Service."),
                    t.qZA(),
                    t.TgZ(63, "li")(64, "strong"),
                    t._uU(65, "Preference Cookies:"),
                    t.qZA(),
                    t._uU(66, "\xa0We use Preference Cookies to remember your preferences and various settings. "),
                    t.qZA(),
                    t.TgZ(67, "li")(68, "strong"),
                    t._uU(69, "Security Cookies:"),
                    t.qZA(),
                    t._uU(70, "\xa0We use Security Cookies for security purposes."),
                    t.qZA()(),
                    t.TgZ(71, "h3"),
                    t._uU(72, "A2. Use of Data"),
                    t.qZA(),
                    t.TgZ(73, "p"),
                    t._uU(74),
                    t.qZA(),
                    t.TgZ(75, "ul")(76, "li"),
                    t._uU(77, "To provide and maintain the Service"),
                    t.qZA(),
                    t.TgZ(78, "li"),
                    t._uU(79, "To notify you about changes to our Service"),
                    t.qZA(),
                    t.TgZ(80, "li"),
                    t._uU(81, "To allow you to participate in interactive features of our Service when you choose to do so"),
                    t.qZA(),
                    t.TgZ(82, "li"),
                    t._uU(83, "To provide customer care and support"),
                    t.qZA(),
                    t.TgZ(84, "li"),
                    t._uU(85, "To provide analysis or valuable information so that we can improve the Service"),
                    t.qZA(),
                    t.TgZ(86, "li"),
                    t._uU(87, "To monitor the usage of the Service"),
                    t.qZA(),
                    t.TgZ(88, "li"),
                    t._uU(89, "To detect, prevent and address technical issues"),
                    t.qZA()(),
                    t._UZ(90, "mat-divider", 5),
                    t.TgZ(91, "h2"),
                    t._uU(92, "B. Transfer Of Data"),
                    t.qZA(),
                    t.TgZ(93, "p"),
                    t._uU(94, "Your information, including Personal Data, may be transferred to \u2014 and maintained on \u2014 computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction."),
                    t.qZA(),
                    t.TgZ(95, "p"),
                    t._uU(96, "If you are located outside Germany and choose to provide information to us, please note that we transfer the data, including Personal Data, to Germany and process it there."),
                    t.qZA(),
                    t.TgZ(97, "p"),
                    t._uU(98, "Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer."),
                    t.qZA(),
                    t.TgZ(99, "p"),
                    t._uU(100),
                    t.TgZ(101, "span", 3),
                    t._uU(102, "reasonably necessary"),
                    t.qZA(),
                    t._uU(103, " to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information."),
                    t.qZA(),
                    t._UZ(104, "mat-divider", 5),
                    t.TgZ(105, "h2"),
                    t._uU(106, "C. Disclosure Of Data"),
                    t.qZA(),
                    t.TgZ(107, "h3"),
                    t._uU(108, "C1. Legal Requirements"),
                    t.qZA(),
                    t.TgZ(109, "p"),
                    t._uU(110),
                    t.qZA(),
                    t.TgZ(111, "ul")(112, "li"),
                    t._uU(113, "To comply with a legal obligation"),
                    t.qZA(),
                    t.TgZ(114, "li"),
                    t._uU(115),
                    t.qZA(),
                    t.TgZ(116, "li"),
                    t._uU(117, "To prevent or investigate possible wrongdoing in connection with the Service"),
                    t.qZA(),
                    t.TgZ(118, "li"),
                    t._uU(119, "To protect the personal safety of users of the Service or the public"),
                    t.qZA(),
                    t.TgZ(120, "li"),
                    t._uU(121, "To protect against legal liability"),
                    t.qZA()(),
                    t._UZ(122, "mat-divider", 5),
                    t.TgZ(123, "h2"),
                    t._uU(124, "D. Security Of Data"),
                    t.qZA(),
                    t.TgZ(125, "p"),
                    t._uU(126, "The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security."),
                    t.qZA(),
                    t._UZ(127, "mat-divider", 5),
                    t.TgZ(128, "h2"),
                    t._uU(129, "E. Service Providers"),
                    t.qZA(),
                    t.TgZ(130, "p"),
                    t._uU(131, 'We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.'),
                    t.qZA(),
                    t.TgZ(132, "p"),
                    t._uU(133, "These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose."),
                    t.qZA(),
                    t._UZ(134, "mat-divider", 5),
                    t.TgZ(135, "h2"),
                    t._uU(136, "F. Links To Other Sites"),
                    t.qZA(),
                    t.TgZ(137, "p"),
                    t._uU(138, "Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit."),
                    t.qZA(),
                    t.TgZ(139, "p"),
                    t._uU(140, "We have no control over and assume no "),
                    t.TgZ(141, "span", 3),
                    t._uU(142, "responsibility"),
                    t.qZA(),
                    t._uU(143, " for the content, privacy policies or practices of any third party sites or services."),
                    t.qZA(),
                    t._UZ(144, "mat-divider", 5),
                    t.TgZ(145, "h2"),
                    t._uU(146, "G. Children's Privacy"),
                    t.qZA(),
                    t.TgZ(147, "p"),
                    t._uU(148, 'Our Service does not address anyone under the age of 18 ("Children").'),
                    t.qZA(),
                    t.TgZ(149, "p"),
                    t._uU(150, "We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers."),
                    t.qZA(),
                    t._UZ(151, "mat-divider", 5),
                    t.TgZ(152, "h2"),
                    t._uU(153, "H. Changes To This Privacy Policy"),
                    t.qZA(),
                    t.TgZ(154, "p"),
                    t._uU(155, "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page."),
                    t.qZA(),
                    t.TgZ(156, "p"),
                    t._uU(157, 'We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.'),
                    t.qZA(),
                    t.TgZ(158, "p"),
                    t._uU(159, "You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page."),
                    t.qZA(),
                    t._UZ(160, "mat-divider", 5),
                    t.TgZ(161, "h2"),
                    t._uU(162, "Contact Us"),
                    t.qZA(),
                    t.TgZ(163, "p"),
                    t._uU(164, "If you have any questions about this Privacy Policy, please contact us:"),
                    t.qZA(),
                    t.TgZ(165, "ul")(166, "li"),
                    t._uU(167),
                    t.qZA()()(),
                    t._UZ(168, "img", 6),
                    t.qZA()),
                    2 & e && (t.xp6(7),
                    t.hij("", o.applicationName, ' ("us", "we", or "our") operates the '),
                    t.xp6(2),
                    t.Oqu(o.applicationUrl),
                    t.xp6(3),
                    t.hij("This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. Our Privacy Policy for ", o.applicationName, " is created with the help of the "),
                    t.xp6(5),
                    t.hij("We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from ", o.applicationUrl, " ."),
                    t.xp6(57),
                    t.hij("", o.applicationName, " uses the collected data for various purposes:"),
                    t.xp6(26),
                    t.hij("", o.applicationName, " will take all steps "),
                    t.xp6(10),
                    t.hij("", o.applicationName, " may disclose your Personal Data in the good faith belief that such action is necessary to:"),
                    t.xp6(5),
                    t.hij("To protect and defend the rights or property of ", o.applicationName, ""),
                    t.xp6(52),
                    t.hij("By email: ", o.privacyContactEmail, ""))
                },
                dependencies: [u.Pi, T.a8, z.d],
                styles: [".privacy-policy[_ngcontent-%COMP%]{margin-bottom:15px;margin-left:8.33333%;width:83.3333%}p[_ngcontent-%COMP%]{margin-bottom:15px;text-align:justify;text-justify:inter-word}mat-card[_ngcontent-%COMP%]{display:block;margin-bottom:50px;margin-left:auto;margin-right:auto;width:90%}h2[_ngcontent-%COMP%]{padding-top:10px}h3[_ngcontent-%COMP%]{font-weight:550}strong[_ngcontent-%COMP%]{font-style:italic;font-weight:550}h4[_ngcontent-%COMP%]{text-decoration:underline}.hot[_ngcontent-%COMP%]:hover{text-shadow:0 0 20px #fefcc9,10px -10px 30px #feec85,-20px -20px 40px #ffae34,20px -40px 50px #ec760c,-20px -60px 60px #cd4606,0 -80px 70px #973716,10px -90px 80px #451b0e}.divider[_ngcontent-%COMP%]{border-top-width:4px!important;margin-left:9%!important;width:82%!important}"]
            }),
            n
        }
        )();
        function $r(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 2),
            t._uU(1, " MANDATORY_COUNTRY "),
            t.qZA())
        }
        function Vr(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 2),
            t._uU(1, " MANDATORY_NAME "),
            t.qZA())
        }
        function Xr(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 2),
            t._uU(1, " MANDATORY_NUMBER "),
            t.qZA())
        }
        const ts = function() {
            return {
                range: "1000000-9999999999"
            }
        };
        function es(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 18),
            t._uU(1, "INVALID_MOBILE_NUMBER "),
            t.qZA()),
            2 & n && t.Q6J("translateParams", t.DdM(1, ts))
        }
        function ns(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 2),
            t._uU(1, " MANDATORY_ZIP "),
            t.qZA())
        }
        function os(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 2),
            t._uU(1, "MANDATORY_ADDRESS"),
            t.qZA())
        }
        function as(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 2),
            t._uU(1, " MANDATORY_CITY "),
            t.qZA())
        }
        const is = function() {
            return {
                length: "160"
            }
        };
        let Be = (()=>{
            class n {
                constructor(e, o, i, r, l, m, v) {
                    this.location = e,
                    this.formSubmitService = o,
                    this.addressService = i,
                    this.router = r,
                    this.activatedRoute = l,
                    this.translate = m,
                    this.snackBarHelperService = v,
                    this.countryControl = new s.p4("",[s.kI.required]),
                    this.nameControl = new s.p4("",[s.kI.required]),
                    this.numberControl = new s.p4("",[s.kI.required, s.kI.min(1111111), s.kI.max(9999999999)]),
                    this.pinControl = new s.p4("",[s.kI.required, s.kI.maxLength(8)]),
                    this.addressControl = new s.p4("",[s.kI.required, s.kI.maxLength(160)]),
                    this.cityControl = new s.p4("",[s.kI.required]),
                    this.stateControl = new s.p4,
                    this.address = void 0,
                    this.mode = "create",
                    this.addressId = void 0
                }
                ngOnInit() {
                    this.address = {},
                    this.activatedRoute.paramMap.subscribe(e=>{
                        e.has("addressId") ? (this.mode = "edit",
                        this.addressId = e.get("addressId"),
                        this.addressService.getById(this.addressId).subscribe(o=>{
                            this.initializeForm(o)
                        }
                        )) : (this.mode = "create",
                        this.addressId = null)
                    }
                    ),
                    this.formSubmitService.attachEnterKeyHandler("address-form", "submitButton", ()=>{
                        this.save()
                    }
                    )
                }
                save() {
                    this.address.country = this.countryControl.value,
                    this.address.fullName = this.nameControl.value,
                    this.address.mobileNum = this.numberControl.value,
                    this.address.zipCode = this.pinControl.value,
                    this.address.streetAddress = this.addressControl.value,
                    this.address.city = this.cityControl.value,
                    this.address.state = this.stateControl.value,
                    "edit" === this.mode ? this.addressService.put(this.addressId, this.address).subscribe(e=>{
                        this.address = {},
                        this.ngOnInit(),
                        this.resetForm(),
                        this.routeToPreviousUrl(),
                        this.translate.get("ADDRESS_UPDATED", {
                            city: e.city
                        }).subscribe(o=>{
                            this.snackBarHelperService.open(o, "confirmBar")
                        }
                        , o=>{
                            this.snackBarHelperService.open(o, "confirmBar")
                        }
                        )
                    }
                    , e=>{
                        this.snackBarHelperService.open(e.error?.error, "errorBar"),
                        this.address = {},
                        this.resetForm()
                    }
                    ) : this.addressService.save(this.address).subscribe(e=>{
                        this.address = {},
                        this.ngOnInit(),
                        this.resetForm(),
                        this.routeToPreviousUrl(),
                        this.translate.get("ADDRESS_ADDED", {
                            city: e.city
                        }).subscribe(o=>{
                            this.snackBarHelperService.open(o, "confirmBar")
                        }
                        , o=>{
                            this.snackBarHelperService.open(o, "confirmBar")
                        }
                        )
                    }
                    , e=>{
                        this.snackBarHelperService.open(e.error?.error, "errorBar"),
                        this.address = {},
                        this.resetForm()
                    }
                    )
                }
                initializeForm(e) {
                    this.countryControl.setValue(e.country),
                    this.nameControl.setValue(e.fullName),
                    this.numberControl.setValue(e.mobileNum),
                    this.pinControl.setValue(e.zipCode),
                    this.addressControl.setValue(e.streetAddress),
                    this.cityControl.setValue(e.city),
                    this.stateControl.setValue(e.state)
                }
                routeToPreviousUrl() {
                    this.location.back()
                }
                resetForm() {
                    this.countryControl.markAsUntouched(),
                    this.countryControl.markAsPristine(),
                    this.countryControl.setValue(""),
                    this.nameControl.markAsUntouched(),
                    this.nameControl.markAsPristine(),
                    this.nameControl.setValue(""),
                    this.numberControl.markAsUntouched(),
                    this.numberControl.markAsPristine(),
                    this.numberControl.setValue(""),
                    this.pinControl.markAsUntouched(),
                    this.pinControl.markAsPristine(),
                    this.pinControl.setValue(""),
                    this.addressControl.markAsUntouched(),
                    this.addressControl.markAsPristine(),
                    this.addressControl.setValue(""),
                    this.cityControl.markAsUntouched(),
                    this.cityControl.markAsPristine(),
                    this.cityControl.setValue(""),
                    this.stateControl.markAsUntouched(),
                    this.stateControl.markAsPristine(),
                    this.stateControl.setValue("")
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(h.Ye),t.Y36(rt),t.Y36(mt),t.Y36(L.F0),t.Y36(L.gz),t.Y36(u.sK),t.Y36(J.H))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-address-create"]],
                decls: 69,
                vars: 49,
                consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], ["translate", ""], ["id", "address-form", 1, "form-container"], ["appearance", "outline", "color", "accent"], ["type", "text", "matInput", "", 3, "formControl", "placeholder"], ["translate", "", 4, "ngIf"], ["type", "number", "matInput", "", 3, "formControl", "placeholder"], ["translate", "", 3, "translateParams", 4, "ngIf"], ["pin", ""], ["align", "end"], ["id", "address", "matInput", "", "matAutosizeMinRows", "4", "matAutosizeMaxRows", "4", "matTextareaAutosize", "", "cols", "50", "maxlength", "160", 3, "formControl", "placeholder"], ["adress", ""], [1, "fas", "fa-exclamation-circle"], ["translate", "", 2, "margin-left", "5px"], ["mat-stroked-button", "", 1, "btn-return", 3, "click"], ["type", "submit", "id", "submitButton", "mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [1, "material-icons"], ["translate", "", 3, "translateParams"]],
                template: function(e, o) {
                    if (1 & e && (t.TgZ(0, "div", 0)(1, "mat-card", 1)(2, "h1", 2),
                    t._uU(3, "ADD_NEW_ADDRESS"),
                    t.qZA(),
                    t.TgZ(4, "div", 3)(5, "mat-form-field", 4)(6, "mat-label", 2),
                    t._uU(7, "LABEL_COUNTRY"),
                    t.qZA(),
                    t._UZ(8, "input", 5),
                    t.ALo(9, "translate"),
                    t.YNc(10, $r, 2, 0, "mat-error", 6),
                    t.qZA(),
                    t.TgZ(11, "mat-form-field", 4)(12, "mat-label", 2),
                    t._uU(13, "LABEL_NAME"),
                    t.qZA(),
                    t._UZ(14, "input", 5),
                    t.ALo(15, "translate"),
                    t.YNc(16, Vr, 2, 0, "mat-error", 6),
                    t.qZA(),
                    t.TgZ(17, "mat-form-field", 4)(18, "mat-label", 2),
                    t._uU(19, "LABEL_MOBILE_NUMBER"),
                    t.qZA(),
                    t._UZ(20, "input", 7),
                    t.ALo(21, "translate"),
                    t.YNc(22, Xr, 2, 0, "mat-error", 6),
                    t.YNc(23, es, 2, 2, "mat-error", 8),
                    t.qZA(),
                    t.TgZ(24, "mat-form-field", 4)(25, "mat-label", 2),
                    t._uU(26, "LABEL_ZIP_CODE"),
                    t.qZA(),
                    t._UZ(27, "input", 5, 9),
                    t.ALo(29, "translate"),
                    t.TgZ(30, "mat-hint", 10),
                    t._uU(31),
                    t.qZA(),
                    t.YNc(32, ns, 2, 0, "mat-error", 6),
                    t.qZA(),
                    t.TgZ(33, "mat-form-field", 4)(34, "mat-label", 2),
                    t._uU(35, "LABEL_ADDRESS"),
                    t.qZA(),
                    t._UZ(36, "textarea", 11, 12),
                    t.ALo(38, "translate"),
                    t.TgZ(39, "mat-hint", 2),
                    t._UZ(40, "i", 13),
                    t.TgZ(41, "em", 14),
                    t._uU(42),
                    t.ALo(43, "translate"),
                    t.qZA()(),
                    t.TgZ(44, "mat-hint", 10),
                    t._uU(45),
                    t.qZA(),
                    t.YNc(46, os, 2, 0, "mat-error", 6),
                    t.qZA(),
                    t.TgZ(47, "mat-form-field", 4)(48, "mat-label", 2),
                    t._uU(49, "LABEL_CITY"),
                    t.qZA(),
                    t._UZ(50, "input", 5),
                    t.ALo(51, "translate"),
                    t.YNc(52, as, 2, 0, "mat-error", 6),
                    t.qZA(),
                    t.TgZ(53, "mat-form-field", 4)(54, "mat-label", 2),
                    t._uU(55, "LABEL_STATE"),
                    t.qZA(),
                    t._UZ(56, "input", 5),
                    t.ALo(57, "translate"),
                    t.qZA()(),
                    t.TgZ(58, "div")(59, "button", 15),
                    t.NdJ("click", function() {
                        return o.routeToPreviousUrl()
                    }),
                    t.TgZ(60, "mat-icon"),
                    t._uU(61, " navigate_before "),
                    t.qZA(),
                    t._uU(62),
                    t.ALo(63, "translate"),
                    t.qZA(),
                    t.TgZ(64, "button", 16),
                    t.NdJ("click", function() {
                        return o.save()
                    }),
                    t.TgZ(65, "i", 17),
                    t._uU(66, " send "),
                    t.qZA(),
                    t._uU(67),
                    t.ALo(68, "translate"),
                    t.qZA()()()()),
                    2 & e) {
                        const i = t.MAs(28)
                          , r = t.MAs(37);
                        t.xp6(8),
                        t.Q6J("formControl", o.countryControl)("placeholder", t.lcZ(9, 27, "MANDATORY_COUNTRY")),
                        t.xp6(2),
                        t.Q6J("ngIf", o.countryControl.invalid && o.countryControl.errors.required),
                        t.xp6(4),
                        t.Q6J("formControl", o.nameControl)("placeholder", t.lcZ(15, 29, "MANDATORY_NAME")),
                        t.xp6(2),
                        t.Q6J("ngIf", o.nameControl.invalid && o.nameControl.errors.required),
                        t.xp6(4),
                        t.Q6J("formControl", o.numberControl)("placeholder", t.lcZ(21, 31, "MANDATORY_NUMBER")),
                        t.xp6(2),
                        t.Q6J("ngIf", o.numberControl.invalid && o.numberControl.errors.required),
                        t.xp6(1),
                        t.Q6J("ngIf", o.numberControl.invalid && (o.numberControl.errors.min || o.numberControl.errors.max)),
                        t.xp6(4),
                        t.Q6J("formControl", o.pinControl)("placeholder", t.lcZ(29, 33, "MANDATORY_ZIP")),
                        t.xp6(4),
                        t.hij("", (null == i.value ? null : i.value.length) || 0, "/8"),
                        t.xp6(1),
                        t.Q6J("ngIf", o.pinControl.invalid && o.pinControl.errors.required),
                        t.xp6(4),
                        t.Q6J("formControl", o.addressControl)("placeholder", t.lcZ(38, 35, "MANDATORY_ADDRESS")),
                        t.xp6(6),
                        t.Oqu(t.xi3(43, 37, "MAX_TEXTAREA_LENGTH", t.DdM(48, is))),
                        t.xp6(3),
                        t.hij("", (null == r.value ? null : r.value.length) || 0, "/160"),
                        t.xp6(1),
                        t.Q6J("ngIf", o.addressControl.invalid && o.addressControl.errors.required),
                        t.xp6(4),
                        t.Q6J("formControl", o.cityControl)("placeholder", t.lcZ(51, 40, "MANDATORY_CITY")),
                        t.xp6(2),
                        t.Q6J("ngIf", o.cityControl.invalid && o.cityControl.errors.required),
                        t.xp6(4),
                        t.Q6J("formControl", o.stateControl)("placeholder", t.lcZ(57, 42, "STATE_PLACEHOLDER")),
                        t.xp6(6),
                        t.hij(" ", t.lcZ(63, 44, "LABEL_BACK"), " "),
                        t.xp6(2),
                        t.Q6J("disabled", o.countryControl.invalid || o.nameControl.invalid || o.numberControl.invalid || o.pinControl.invalid || o.addressControl.invalid || o.cityControl.invalid),
                        t.xp6(3),
                        t.hij(" ", t.lcZ(68, 46, "BTN_SUBMIT"), " ")
                    }
                },
                dependencies: [h.O5, u.Pi, p.Wh, s.Fj, s.wV, s.JJ, s.nD, s.oH, F.Hw, f.TO, f.KE, f.bx, f.hX, x.lW, T.a8, B.Nt, u.X$],
                styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:30%}#submitButton[_ngcontent-%COMP%]{float:right}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}.btn-return[_ngcontent-%COMP%]{float:left}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;-moz-appearance:none;margin:0}"]
            }),
            n
        }
        )()
          , rs = (()=>{
            class n {
                constructor(e, o) {
                    this.router = e,
                    this.ngZone = o,
                    this.addressId = void 0,
                    this.showNextButton = !0
                }
                getMessage(e) {
                    this.addressId = e
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(L.F0),t.Y36(t.R0b))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-address-select"]],
                decls: 2,
                vars: 1,
                consts: [["id", "card"], [3, "showNextButton"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "div", 0),
                    t._UZ(1, "app-address", 1),
                    t.qZA()),
                    2 & e && (t.xp6(1),
                    t.Q6J("showNextButton", o.showNextButton))
                },
                dependencies: [ee],
                styles: [".btn-pay[_ngcontent-%COMP%]{display:block;width:100%}.mat-raised-button[_ngcontent-%COMP%]{margin-right:3px;margin-top:3px}#card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}"]
            }),
            n
        }
        )()
          , ss = (()=>{
            class n {
            }
            return n.\u0275fac = function(e) {
                return new (e || n)
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-saved-address"]],
                decls: 2,
                vars: 1,
                consts: [[1, "main-wrapper"], [3, "allowEdit"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "div", 0),
                    t._UZ(1, "app-address", 1),
                    t.qZA()),
                    2 & e && (t.xp6(1),
                    t.Q6J("allowEdit", !0))
                },
                dependencies: [ee],
                styles: [".main-wrapper[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}"]
            }),
            n
        }
        )();
        O.vI.add(g.OFe);
        let le = (()=>{
            class n {
                constructor(e) {
                    this.dialogData = e
                }
                ngOnInit() {
                    this.title = this.dialogData.title,
                    this.url = this.dialogData.url,
                    this.address = this.dialogData.address,
                    this.data = this.dialogData.data
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(N.WI))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-qr-code"]],
                decls: 17,
                vars: 11,
                consts: [[1, "qr-code", "mat-typography"], ["fxLayout", "column", "fxLayoutGap", "10px"], [1, "container"], [3, "href"], [3, "value", "size", "level"], ["mat-raised-button", "", "mat-dialog-close", "", 1, "close-dialog"], [1, "fas", "fa-arrow-circle-left", "fa-lg"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "div", 0)(1, "header")(2, "h3"),
                    t._uU(3),
                    t.ALo(4, "translate"),
                    t.qZA()(),
                    t.TgZ(5, "div", 1),
                    t._UZ(6, "mat-divider"),
                    t.TgZ(7, "div", 2)(8, "a", 3),
                    t._UZ(9, "qr-code", 4),
                    t.qZA()(),
                    t.TgZ(10, "small"),
                    t._uU(11),
                    t.qZA()(),
                    t.TgZ(12, "footer")(13, "button", 5),
                    t._UZ(14, "i", 6),
                    t._uU(15),
                    t.ALo(16, "translate"),
                    t.qZA()()()),
                    2 & e && (t.xp6(3),
                    t.Oqu(t.lcZ(4, 7, o.title)),
                    t.xp6(5),
                    t.Q6J("href", o.url, t.LSH),
                    t.xp6(1),
                    t.Q6J("value", o.data)("size", 300)("level", "M"),
                    t.xp6(2),
                    t.Oqu(o.address),
                    t.xp6(4),
                    t.hij(" ", t.lcZ(16, 9, "BTN_CLOSE"), ""))
                },
                dependencies: [p.xw, p.SQ, se.V, x.lW, N.ZT, z.d, u.X$]
            }),
            n
        }
        )()
          , ce = (()=>{
            class n {
                constructor(e) {
                    this.http = e,
                    this.hostServer = P.N.hostServer,
                    this.host = this.hostServer + "/rest/wallet/balance"
                }
                get() {
                    return this.http.get(this.host).pipe((0,
                    C.U)(e=>e.data), (0,
                    _.K)(e=>{
                        throw e
                    }
                    ))
                }
                put(e) {
                    return this.http.put(this.host, e).pipe((0,
                    C.U)(o=>o.data), (0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.LFG(U.eN))
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )()
          , Dt = (()=>{
            class n {
                constructor(e) {
                    this.http = e,
                    this.hostServer = P.N.hostServer,
                    this.host = this.hostServer + "/api/Deliverys"
                }
                get() {
                    return this.http.get(this.host).pipe((0,
                    C.U)(e=>e.data), (0,
                    _.K)(e=>{
                        throw e
                    }
                    ))
                }
                getById(e) {
                    return this.http.get(`${this.host}/${e}`).pipe((0,
                    C.U)(o=>o.data), (0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.LFG(U.eN))
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )()
          , ue = (()=>{
            class n {
                constructor(e) {
                    this.http = e,
                    this.hostServer = P.N.hostServer,
                    this.host = this.hostServer + "/api/Cards"
                }
                get() {
                    return this.http.get(this.host).pipe((0,
                    C.U)(e=>e.data), (0,
                    _.K)(e=>{
                        throw e
                    }
                    ))
                }
                getById(e) {
                    return this.http.get(`${this.host}/${e}`).pipe((0,
                    C.U)(o=>o.data), (0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
                save(e) {
                    return this.http.post(this.host + "/", e).pipe((0,
                    C.U)(o=>o.data), (0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
                del(e) {
                    return this.http.delete(`${this.host}/${e}`).pipe((0,
                    C.U)(o=>o.data), (0,
                    _.K)(o=>{
                        throw o
                    }
                    ))
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.LFG(U.eN))
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )();
        function ls(n, a) {
            1 & n && t._UZ(0, "mat-header-cell", 33)
        }
        function cs(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "mat-cell", 33)(1, "mat-radio-button", 34),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.oxw(2);
                    return t.KtG(l.emitSelectionToParent(r.id))
                }),
                t.qZA()()
            }
        }
        function us(n, a) {
            1 & n && t._UZ(0, "mat-header-cell", 35)
        }
        function ps(n, a) {
            if (1 & n && (t.TgZ(0, "mat-cell", 35),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = a.$implicit;
                t.xp6(1),
                t.hij("", e.cardNum, " ")
            }
        }
        function ds(n, a) {
            1 & n && t._UZ(0, "mat-header-cell", 36)
        }
        function ms(n, a) {
            if (1 & n && (t.TgZ(0, "mat-cell", 36),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = a.$implicit;
                t.xp6(1),
                t.Oqu(e.fullName)
            }
        }
        function gs(n, a) {
            1 & n && t._UZ(0, "mat-header-cell", 37)
        }
        function hs(n, a) {
            if (1 & n && (t.TgZ(0, "mat-cell", 37),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = a.$implicit;
                t.xp6(1),
                t.AsE("", e.expMonth, "/", e.expYear, "")
            }
        }
        function _s(n, a) {
            1 & n && t._UZ(0, "mat-header-cell", 33)
        }
        function fs(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "mat-cell", 33)(1, "button", 38),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.oxw(2);
                    return t.KtG(l.delete(r.id))
                }),
                t._UZ(2, "i", 39),
                t.qZA()()
            }
        }
        function Cs(n, a) {
            1 & n && t._UZ(0, "mat-header-row")
        }
        function vs(n, a) {
            1 & n && t._UZ(0, "mat-row")
        }
        function xs(n, a) {
            if (1 & n && (t.TgZ(0, "div")(1, "mat-table", 17),
            t.ynx(2, 18),
            t.YNc(3, ls, 1, 0, "mat-header-cell", 19),
            t.YNc(4, cs, 2, 0, "mat-cell", 20),
            t.BQk(),
            t.ynx(5, 21),
            t.YNc(6, us, 1, 0, "mat-header-cell", 22),
            t.YNc(7, ps, 2, 1, "mat-cell", 23),
            t.BQk(),
            t.ynx(8, 24),
            t.YNc(9, ds, 1, 0, "mat-header-cell", 25),
            t.YNc(10, ms, 2, 1, "mat-cell", 26),
            t.BQk(),
            t.ynx(11, 27),
            t.YNc(12, gs, 1, 0, "mat-header-cell", 28),
            t.YNc(13, hs, 2, 2, "mat-cell", 29),
            t.BQk(),
            t.ynx(14, 30),
            t.YNc(15, _s, 1, 0, "mat-header-cell", 19),
            t.YNc(16, fs, 3, 0, "mat-cell", 20),
            t.BQk(),
            t.YNc(17, Cs, 1, 0, "mat-header-row", 31),
            t.YNc(18, vs, 1, 0, "mat-row", 32),
            t.qZA()()),
            2 & n) {
                const e = t.oxw();
                t.xp6(1),
                t.Q6J("dataSource", e.dataSource),
                t.xp6(16),
                t.Q6J("matHeaderRowDef", e.displayedColumns),
                t.xp6(1),
                t.Q6J("matRowDefColumns", e.displayedColumns)
            }
        }
        function bs(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 5),
            t._uU(1, " MANDATORY_NAME "),
            t.qZA())
        }
        function Ts(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 5),
            t._uU(1, " MANDATORY_CARD_NUMBER "),
            t.qZA())
        }
        function As(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 5),
            t._uU(1, " VALID_CARD_NUMBER "),
            t.qZA())
        }
        function ys(n, a) {
            if (1 & n && (t.TgZ(0, "option", 40),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = a.$implicit;
                t.s9C("value", e),
                t.xp6(1),
                t.Oqu(e)
            }
        }
        function Zs(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 5),
            t._uU(1, " MANDATORY_EXPIRY_MONTH "),
            t.qZA())
        }
        function ws(n, a) {
            if (1 & n && (t.TgZ(0, "option", 40),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = a.$implicit;
                t.s9C("value", e),
                t.xp6(1),
                t.Oqu(e)
            }
        }
        function Ss(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 5),
            t._uU(1, " MANDATORY_EXPIRY_YEAR "),
            t.qZA())
        }
        O.vI.add(g.XCy, D.I7);
        let Re = (()=>{
            class n {
                constructor(e, o, i) {
                    this.paymentService = e,
                    this.translate = o,
                    this.snackBarHelperService = i,
                    this.emitSelection = new t.vpe,
                    this.allowDelete = !1,
                    this.displayedColumns = ["Number", "Name", "Expiry"],
                    this.nameControl = new s.p4("",[s.kI.required]),
                    this.numberControl = new s.p4("",[s.kI.required, s.kI.min(1e15), s.kI.max(1e16)]),
                    this.monthControl = new s.p4("",[s.kI.required]),
                    this.yearControl = new s.p4("",[s.kI.required]),
                    this.card = {},
                    this.cardsExist = !1,
                    this.paymentId = void 0
                }
                ngOnInit() {
                    this.monthRange = Array.from(Array(12).keys()).map(e=>e + 1),
                    this.yearRange = Array.from(Array(20).keys()).map(e=>e + 2080),
                    this.allowDelete ? this.displayedColumns.push("Remove") : this.displayedColumns.unshift("Selection"),
                    this.load()
                }
                load() {
                    this.paymentService.get().subscribe(e=>{
                        this.cardsExist = e.length,
                        this.storedCards = e,
                        this.dataSource = new d.by(this.storedCards)
                    }
                    , e=>{
                        console.log(e)
                    }
                    )
                }
                save() {
                    this.card.fullName = this.nameControl.value,
                    this.card.cardNum = this.numberControl.value,
                    this.card.expMonth = this.monthControl.value,
                    this.card.expYear = this.yearControl.value,
                    this.paymentService.save(this.card).subscribe(e=>{
                        this.error = null,
                        this.translate.get("CREDIT_CARD_SAVED", {
                            cardnumber: String(e.cardNum).substring(String(e.cardNum).length - 4)
                        }).subscribe(o=>{
                            this.snackBarHelperService.open(o, "confirmBar")
                        }
                        , o=>{
                            this.snackBarHelperService.open(o, "confirmBar")
                        }
                        ),
                        this.load(),
                        this.resetForm()
                    }
                    , e=>{
                        this.snackBarHelperService.open(e.error?.error, "errorBar"),
                        this.resetForm()
                    }
                    )
                }
                delete(e) {
                    this.paymentService.del(e).subscribe(()=>{
                        this.load()
                    }
                    , o=>{
                        console.log(o)
                    }
                    )
                }
                emitSelectionToParent(e) {
                    this.emitSelection.emit(e)
                }
                resetForm() {
                    this.nameControl.markAsUntouched(),
                    this.nameControl.markAsPristine(),
                    this.nameControl.setValue(""),
                    this.numberControl.markAsUntouched(),
                    this.numberControl.markAsPristine(),
                    this.numberControl.setValue(""),
                    this.monthControl.markAsUntouched(),
                    this.monthControl.markAsPristine(),
                    this.monthControl.setValue(""),
                    this.yearControl.markAsUntouched(),
                    this.yearControl.markAsPristine(),
                    this.yearControl.setValue("")
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(ue),t.Y36(u.sK),t.Y36(J.H))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-payment-method"]],
                inputs: {
                    allowDelete: "allowDelete"
                },
                outputs: {
                    emitSelection: "emitSelection"
                },
                decls: 46,
                vars: 26,
                consts: [["fxLayout", "column", "fxLayoutGap", "20px"], [4, "ngIf"], [1, "mat-elevation-z0"], [2, "margin-bottom", "12px"], ["appearance", "outline", "color", "accent"], ["translate", ""], ["type", "text", "matInput", "", 3, "formControl"], ["translate", "", 4, "ngIf"], ["type", "number", "matInput", "", 3, "formControl"], ["cardIn", ""], ["align", "end"], ["appearance", "outline", "color", "accent", 2, "width", "45%", "margin-right", "10%"], ["matNativeControl", "", "required", "", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", "color", "accent", 2, "width", "45%"], ["type", "submit", "id", "submitButton", "mat-raised-button", "", "color", "primary", 2, "margin-top", "5px", "float", "right", 3, "disabled", "click"], [1, "material-icons"], [3, "dataSource"], ["matColumnDef", "Selection"], ["fxFlex", "15%", 4, "matHeaderCellDef"], ["fxFlex", "15%", 4, "matCellDef"], ["matColumnDef", "Number"], ["fxFlex", "35%", 4, "matHeaderCellDef"], ["fxFlex", "35%", 4, "matCellDef"], ["matColumnDef", "Name"], ["fxFlex", "30%", 4, "matHeaderCellDef"], ["fxFlex", "30%", 4, "matCellDef"], ["matColumnDef", "Expiry"], ["fxFlex", "20%", 4, "matHeaderCellDef"], ["fxFlex", "20%", 4, "matCellDef"], ["matColumnDef", "Remove"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["fxFlex", "15%"], [3, "click"], ["fxFlex", "35%"], ["fxFlex", "30%"], ["fxFlex", "20%"], ["mat-icon-button", "", 3, "click"], [1, "far", "fa-trash-alt"], [3, "value"]],
                template: function(e, o) {
                    if (1 & e && (t.TgZ(0, "div", 0)(1, "h1"),
                    t._uU(2),
                    t.ALo(3, "translate"),
                    t.qZA(),
                    t.YNc(4, xs, 19, 3, "div", 1),
                    t.TgZ(5, "div")(6, "mat-expansion-panel", 2)(7, "mat-expansion-panel-header", 3)(8, "mat-panel-title"),
                    t._uU(9),
                    t.ALo(10, "translate"),
                    t.qZA(),
                    t.TgZ(11, "mat-panel-description"),
                    t._uU(12),
                    t.ALo(13, "translate"),
                    t.qZA()(),
                    t.TgZ(14, "div")(15, "mat-form-field", 4)(16, "mat-label", 5),
                    t._uU(17, "LABEL_NAME"),
                    t.qZA(),
                    t._UZ(18, "input", 6),
                    t.YNc(19, bs, 2, 0, "mat-error", 7),
                    t.qZA(),
                    t.TgZ(20, "mat-form-field", 4)(21, "mat-label", 5),
                    t._uU(22, "LABEL_CARD_NUMBER"),
                    t.qZA(),
                    t._UZ(23, "input", 8, 9),
                    t.TgZ(25, "mat-hint", 10),
                    t._uU(26),
                    t.qZA(),
                    t.YNc(27, Ts, 2, 0, "mat-error", 7),
                    t.YNc(28, As, 2, 0, "mat-error", 7),
                    t.qZA(),
                    t.TgZ(29, "mat-form-field", 11)(30, "mat-label", 5),
                    t._uU(31, "LABEL_EXPIRY_MONTH"),
                    t.qZA(),
                    t.TgZ(32, "select", 12),
                    t.YNc(33, ys, 2, 2, "option", 13),
                    t.qZA(),
                    t.YNc(34, Zs, 2, 0, "mat-error", 7),
                    t.qZA(),
                    t.TgZ(35, "mat-form-field", 14)(36, "mat-label", 5),
                    t._uU(37, "LABEL_EXPIRY_YEAR"),
                    t.qZA(),
                    t.TgZ(38, "select", 12),
                    t.YNc(39, ws, 2, 2, "option", 13),
                    t.qZA(),
                    t.YNc(40, Ss, 2, 0, "mat-error", 7),
                    t.qZA()(),
                    t.TgZ(41, "button", 15),
                    t.NdJ("click", function() {
                        return o.save()
                    }),
                    t.TgZ(42, "i", 16),
                    t._uU(43, " send "),
                    t.qZA(),
                    t._uU(44),
                    t.ALo(45, "translate"),
                    t.qZA()()()()),
                    2 & e) {
                        const i = t.MAs(24);
                        t.xp6(2),
                        t.Oqu(t.lcZ(3, 18, "MY_PAYMENT_OPTIONS")),
                        t.xp6(2),
                        t.Q6J("ngIf", o.cardsExist),
                        t.xp6(5),
                        t.hij(" ", t.lcZ(10, 20, "ADD_NEW_CARD"), " "),
                        t.xp6(3),
                        t.hij(" ", t.lcZ(13, 22, "ADD_NEW_CARD_DESCRIPTION"), " "),
                        t.xp6(6),
                        t.Q6J("formControl", o.nameControl),
                        t.xp6(1),
                        t.Q6J("ngIf", o.nameControl.invalid && o.nameControl.errors.required),
                        t.xp6(4),
                        t.Q6J("formControl", o.numberControl),
                        t.xp6(3),
                        t.hij("", (null == i.value ? null : i.value.length) || 0, "/16"),
                        t.xp6(1),
                        t.Q6J("ngIf", o.numberControl.invalid && o.numberControl.errors.required),
                        t.xp6(1),
                        t.Q6J("ngIf", o.numberControl.invalid && (o.numberControl.errors.min || o.numberControl.errors.max)),
                        t.xp6(4),
                        t.Q6J("formControl", o.monthControl),
                        t.xp6(1),
                        t.Q6J("ngForOf", o.monthRange),
                        t.xp6(1),
                        t.Q6J("ngIf", o.monthControl.invalid && o.monthControl.errors.required),
                        t.xp6(4),
                        t.Q6J("formControl", o.yearControl),
                        t.xp6(1),
                        t.Q6J("ngForOf", o.yearRange),
                        t.xp6(1),
                        t.Q6J("ngIf", o.yearControl.invalid && o.yearControl.errors.required),
                        t.xp6(1),
                        t.Q6J("disabled", o.nameControl.invalid || o.numberControl.invalid || o.monthControl.invalid || o.yearControl.invalid),
                        t.xp6(3),
                        t.hij(" ", t.lcZ(45, 24, "BTN_SUBMIT"), " ")
                    }
                },
                dependencies: [h.sg, h.O5, u.Pi, p.xw, p.SQ, p.yH, s.YN, s.Kr, s.Fj, s.wV, s.EJ, s.JJ, s.Q7, s.oH, f.TO, f.KE, f.bx, f.hX, x.lW, d.BZ, d.fO, d.as, d.w1, d.Dz, d.nj, d.ge, d.ev, d.XQ, d.Gk, B.Nt, V.ib, V.yz, V.yK, V.u4, nt.U0, u.X$],
                styles: [".heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);font-size:x-large;justify-content:center;padding:12px 20px}mat-form-field[_ngcontent-%COMP%]{width:100%}.mat-expansion-panel-header-description[_ngcontent-%COMP%]{flex-basis:0}.detail-divider[_ngcontent-%COMP%]{margin-bottom:12px;margin-top:12px}mat-header-row[_ngcontent-%COMP%]{min-height:0!important}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;-moz-appearance:none;margin:0}"]
            }),
            n
        }
        )();
        function ks(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "span", 14),
                t._uU(4, "LABEL_PAY_USING_WALLET"),
                t.qZA()(),
                t.TgZ(5, "div", 15)(6, "b")(7, "span", 14),
                t._uU(8, "LABEL_WALLET_BALANCE"),
                t.qZA(),
                t.TgZ(9, "span", 16),
                t._uU(10),
                t.qZA()()(),
                t.TgZ(11, "div", 17)(12, "button", 18),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.useWallet())
                }),
                t._UZ(13, "i", 19),
                t._uU(14),
                t.ALo(15, "translate"),
                t.qZA()()()()
            }
            if (2 & n) {
                const e = t.oxw();
                t.xp6(10),
                t.hij(" ", e.walletBalanceStr, ""),
                t.xp6(2),
                t.Q6J("disabled", e.walletBalance - e.totalPrice < 0),
                t.xp6(2),
                t.AsE(" ", t.lcZ(15, 4, "LABEL_PAY"), " ", null == e.totalPrice ? null : e.totalPrice.toFixed(2), "\xa4 ")
            }
        }
        function Is(n, a) {
            if (1 & n && (t.TgZ(0, "div", 31),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.hij("", e.couponConfirmation, " ")
            }
        }
        function Os(n, a) {
            if (1 & n && (t.TgZ(0, "div", 32),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.hij("", null == e.couponError ? null : e.couponError.error, " ")
            }
        }
        function Us(n, a) {
            1 & n && (t.TgZ(0, "mat-error"),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & n && (t.xp6(1),
            t.hij(" ", t.lcZ(2, 1, "COUPON_CODE_HINT"), " "))
        }
        const Ls = function(n, a) {
            return {
                twitter: n,
                facebook: a
            }
        };
        function Ps(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "mat-expansion-panel", 20)(1, "mat-expansion-panel-header", 21)(2, "mat-panel-title"),
                t._uU(3),
                t.ALo(4, "translate"),
                t.qZA(),
                t.TgZ(5, "mat-panel-description"),
                t._uU(6),
                t.ALo(7, "translate"),
                t.qZA()(),
                t.YNc(8, Is, 2, 1, "div", 22),
                t.YNc(9, Os, 2, 1, "div", 23),
                t.TgZ(10, "mat-form-field", 24)(11, "mat-label", 8),
                t._uU(12, "LABEL_COUPON"),
                t.qZA(),
                t._UZ(13, "mat-hint", 25),
                t.ALo(14, "translate"),
                t._UZ(15, "input", 26, 27),
                t.ALo(17, "translate"),
                t.TgZ(18, "mat-hint", 28),
                t._uU(19),
                t.qZA(),
                t.YNc(20, Us, 3, 3, "mat-error", 29),
                t.qZA(),
                t.TgZ(21, "button", 30),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.applyCoupon())
                }),
                t.TgZ(22, "mat-icon"),
                t._uU(23, " redeem "),
                t.qZA(),
                t._uU(24),
                t.ALo(25, "translate"),
                t.qZA()()
            }
            if (2 & n) {
                const e = t.MAs(16)
                  , o = t.oxw();
                t.Q6J("expanded", o.couponPanelExpanded),
                t.xp6(3),
                t.hij(" ", t.lcZ(4, 12, "ADD_A_COUPON"), " "),
                t.xp6(3),
                t.hij(" ", t.lcZ(7, 14, "VOUCHERS_AND_PROMOTIONAL_CODE"), " "),
                t.xp6(2),
                t.Q6J("ngIf", o.couponConfirmation && !o.couponControl.dirty),
                t.xp6(1),
                t.Q6J("ngIf", o.couponError && !o.couponControl.dirty),
                t.xp6(4),
                t.Q6J("innerHtml", t.xi3(14, 16, "FOLLOW_FOR_MONTHLY_COUPONS", t.WLB(23, Ls, o.twitterUrl, o.facebookUrl)), t.oJD),
                t.xp6(2),
                t.s9C("placeholder", t.lcZ(17, 19, "ENTER_COUPON_CODE")),
                t.Q6J("formControl", o.couponControl),
                t.xp6(4),
                t.hij("", (null == e.value ? null : e.value.length) || 0, "/10"),
                t.xp6(1),
                t.Q6J("ngIf", o.couponControl.invalid && (o.couponControl.errors.minlength || o.couponControl.errors.maxlength)),
                t.xp6(1),
                t.Q6J("disabled", o.couponControl.invalid),
                t.xp6(3),
                t.hij(" ", t.lcZ(25, 21, "BTN_REDEEM"), " ")
            }
        }
        const Ye = function() {
            return {
                juiceshop: "OWASP Juice Shop"
            }
        };
        function Ns(n, a) {
            1 & n && (t.TgZ(0, "span", 56),
            t._uU(1, "THANKS_FOR_SUPPORT"),
            t.qZA()),
            2 & n && t.Q6J("translateParams", t.DdM(1, Ye))
        }
        const Je = function(n) {
            return {
                appname: n
            }
        };
        function Es(n, a) {
            if (1 & n && (t.TgZ(0, "span", 56),
            t._uU(1, "THANKS_FOR_SUPPORT_CUSTOMIZED"),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.Q6J("translateParams", t.VKq(1, Je, e.applicationName))
            }
        }
        function Ms(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "button", 57),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw(2);
                    return t.KtG(i.showBitcoinQrCode())
                }),
                t._UZ(1, "i", 58),
                t._uU(2, " Bitcoin "),
                t.qZA()
            }
        }
        function Ds(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "button", 57),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw(2);
                    return t.KtG(i.showDashQrCode())
                }),
                t.TgZ(1, "i", 59),
                t._uU(2, "\xd0"),
                t.qZA(),
                t._uU(3, " Dash"),
                t.qZA()
            }
        }
        function qs(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "button", 57),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw(2);
                    return t.KtG(i.showEtherQrCode())
                }),
                t._UZ(1, "i", 60),
                t._uU(2, " Ether "),
                t.qZA()
            }
        }
        function Fs(n, a) {
            1 & n && (t.TgZ(0, "span", 56),
            t._uU(1, "OFFICIAL_MERCHANDISE_STORES"),
            t.qZA()),
            2 & n && t.Q6J("translateParams", t.DdM(1, Ye))
        }
        function Bs(n, a) {
            if (1 & n && (t.TgZ(0, "span", 56),
            t._uU(1, "OFFICIAL_MERCHANDISE_STORES_CUSTOMIZED"),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.Q6J("translateParams", t.VKq(1, Je, e.applicationName))
            }
        }
        function Rs(n, a) {
            if (1 & n && (t.TgZ(0, "mat-expansion-panel", 33)(1, "mat-expansion-panel-header", 21)(2, "mat-panel-title"),
            t._uU(3),
            t.ALo(4, "translate"),
            t.qZA()(),
            t.TgZ(5, "div", 34)(6, "div", 35)(7, "div", 36)(8, "label", 8),
            t._uU(9, "LABEL_DONATIONS"),
            t.qZA()(),
            t.TgZ(10, "small"),
            t._uU(11, " ("),
            t.YNc(12, Ns, 2, 2, "span", 37),
            t.YNc(13, Es, 2, 3, "span", 37),
            t._UZ(14, "i", 38),
            t._uU(15, ") "),
            t.qZA(),
            t.TgZ(16, "div", 39)(17, "a", 40)(18, "button", 41),
            t._UZ(19, "i", 42),
            t._uU(20),
            t.ALo(21, "translate"),
            t.qZA()(),
            t.YNc(22, Ms, 3, 0, "button", 43),
            t.YNc(23, Ds, 4, 0, "button", 43),
            t.YNc(24, qs, 3, 0, "button", 43),
            t.qZA()(),
            t._UZ(25, "span", 44),
            t.TgZ(26, "div", 45)(27, "div", 36)(28, "label", 8),
            t._uU(29, "LABEL_MERCHANDISE"),
            t.qZA()(),
            t.TgZ(30, "small"),
            t._uU(31, " ("),
            t.YNc(32, Fs, 2, 2, "span", 37),
            t.YNc(33, Bs, 2, 3, "span", 37),
            t._UZ(34, "i", 46),
            t._uU(35, ") "),
            t.qZA(),
            t.TgZ(36, "div", 39)(37, "a", 47)(38, "button", 41),
            t._UZ(39, "i", 48),
            t._uU(40, " Spreadshirt (US)"),
            t.qZA()(),
            t.TgZ(41, "a", 49)(42, "button", 41),
            t._UZ(43, "i", 48),
            t._uU(44, " Spreadshirt (DE)"),
            t.qZA()(),
            t.TgZ(45, "a", 50)(46, "button", 41),
            t._UZ(47, "i", 51),
            t._uU(48, " StickerYou"),
            t.qZA()(),
            t.TgZ(49, "a", 52)(50, "button", 41),
            t._UZ(51, "i", 53),
            t._uU(52, " Leanpub"),
            t.qZA()(),
            t.TgZ(53, "a", 54)(54, "button", 41),
            t._UZ(55, "i", 55),
            t._uU(56, " OpenSea"),
            t.qZA()()()()()()),
            2 & n) {
                const e = t.oxw();
                t.Q6J("expanded", e.paymentPanelExpanded),
                t.xp6(3),
                t.hij(" ", t.lcZ(4, 10, "OTHER_PAYMENT_OPTIONS"), " "),
                t.xp6(9),
                t.Q6J("ngIf", "OWASP Juice Shop" === e.applicationName),
                t.xp6(1),
                t.Q6J("ngIf", "OWASP Juice Shop" !== e.applicationName),
                t.xp6(7),
                t.hij(" ", t.lcZ(21, 12, "BTN_CREDIT_CARD"), ""),
                t.xp6(2),
                t.Q6J("ngIf", !1),
                t.xp6(1),
                t.Q6J("ngIf", !1),
                t.xp6(1),
                t.Q6J("ngIf", !1),
                t.xp6(8),
                t.Q6J("ngIf", "OWASP Juice Shop" === e.applicationName),
                t.xp6(1),
                t.Q6J("ngIf", "OWASP Juice Shop" !== e.applicationName)
            }
        }
        function Ys(n, a) {
            1 & n && (t.TgZ(0, "span", 8),
            t._uU(1, "REVIEW_ALERT"),
            t.qZA())
        }
        function Js(n, a) {
            1 & n && (t.TgZ(0, "span", 8),
            t._uU(1, "REVIEW_WALLET"),
            t.qZA())
        }
        O.vI.add(g.bMA, g.Cly, g.m6i, Z.To0, g.u8Q, g.Dfm, g.L4e, g.oFW, g.SvR, g.NBC, Z.uy2, g.q2v);
        let Qs = (()=>{
            class n {
                constructor(e, o, i, r, l, m, v, A, q, Y, dt, Zt, wt) {
                    this.location = e,
                    this.cookieService = o,
                    this.userService = i,
                    this.deliveryService = r,
                    this.walletService = l,
                    this.router = m,
                    this.dialog = v,
                    this.configurationService = A,
                    this.basketService = q,
                    this.translate = Y,
                    this.activatedRoute = dt,
                    this.ngZone = Zt,
                    this.snackBarHelperService = wt,
                    this.card = {},
                    this.twitterUrl = null,
                    this.facebookUrl = null,
                    this.applicationName = "OWASP Juice Shop",
                    this.couponControl = new s.p4("",[s.kI.required, s.kI.minLength(10), s.kI.maxLength(10)]),
                    this.paymentId = void 0,
                    this.couponPanelExpanded = !1,
                    this.paymentPanelExpanded = !1,
                    this.walletBalance = 0,
                    this.totalPrice = 0,
                    this.paymentMode = "card",
                    this.campaigns = {
                        WMNSDY2019: {
                            validOn: 15519996e5,
                            discount: 75
                        },
                        WMNSDY2020: {
                            validOn: 1583622e6,
                            discount: 60
                        },
                        WMNSDY2021: {
                            validOn: 1615158e6,
                            discount: 60
                        },
                        WMNSDY2022: {
                            validOn: 1646694e6,
                            discount: 60
                        },
                        WMNSDY2023: {
                            validOn: 167823e7,
                            discount: 60
                        },
                        ORANGE2020: {
                            validOn: 15885468e5,
                            discount: 50
                        },
                        ORANGE2021: {
                            validOn: 16200828e5,
                            discount: 40
                        },
                        ORANGE2022: {
                            validOn: 16516188e5,
                            discount: 40
                        },
                        ORANGE2023: {
                            validOn: 16831548e5,
                            discount: 40
                        }
                    }
                }
                ngOnInit() {
                    this.initTotal(),
                    this.walletService.get().subscribe(e=>{
                        this.walletBalance = e,
                        this.walletBalanceStr = parseFloat(e).toFixed(2)
                    }
                    , e=>{
                        console.log(e)
                    }
                    ),
                    this.couponPanelExpanded = !!localStorage.getItem("couponPanelExpanded") && JSON.parse(localStorage.getItem("couponPanelExpanded")),
                    this.paymentPanelExpanded = !!localStorage.getItem("paymentPanelExpanded") && JSON.parse(localStorage.getItem("paymentPanelExpanded")),
                    this.configurationService.getApplicationConfiguration().subscribe(e=>{
                        e?.application?.social && (e.application.social.twitterUrl && (this.twitterUrl = e.application.social.twitterUrl),
                        e.application.social.facebookUrl && (this.facebookUrl = e.application.social.facebookUrl),
                        e.application.name && (this.applicationName = e.application.name))
                    }
                    , e=>{
                        console.log(e)
                    }
                    )
                }
                initTotal() {
                    this.activatedRoute.paramMap.subscribe(e=>{
                        if (this.mode = e.get("entity"),
                        "wallet" === this.mode)
                            this.totalPrice = parseFloat(sessionStorage.getItem("walletTotal"));
                        else if ("deluxe" === this.mode)
                            this.userService.deluxeStatus().subscribe(o=>{
                                this.totalPrice = o.membershipCost
                            }
                            , o=>{
                                console.log(o)
                            }
                            );
                        else {
                            const o = parseFloat(sessionStorage.getItem("itemTotal"))
                              , i = sessionStorage.getItem("couponDiscount") ? parseFloat(sessionStorage.getItem("couponDiscount")) / 100 * o : 0;
                            this.deliveryService.getById(sessionStorage.getItem("deliveryMethodId")).subscribe(r=>{
                                this.totalPrice = o + r.price - i
                            }
                            )
                        }
                    }
                    , e=>{
                        console.log(e)
                    }
                    )
                }
                applyCoupon() {
                    this.campaignCoupon = this.couponControl.value,
                    this.clientDate = new Date;
                    const e = 60 * (this.clientDate.getTimezoneOffset() + 60) * 1e3;
                    this.clientDate.setHours(0, 0, 0, 0),
                    this.clientDate = this.clientDate.getTime() - e,
                    sessionStorage.setItem("couponDetails", `${this.campaignCoupon}-${this.clientDate}`);
                    const o = this.campaigns[this.couponControl.value];
                    o ? this.clientDate === o.validOn ? this.showConfirmation(o.discount) : (this.couponConfirmation = void 0,
                    this.translate.get("INVALID_COUPON").subscribe(i=>{
                        this.couponError = {
                            error: i
                        }
                    }
                    , i=>{
                        this.couponError = {
                            error: i
                        }
                    }
                    ),
                    this.resetCouponForm()) : this.basketService.applyCoupon(Number(sessionStorage.getItem("bid")), encodeURIComponent(this.couponControl.value)).subscribe(i=>{
                        this.showConfirmation(i)
                    }
                    , i=>{
                        this.couponConfirmation = void 0,
                        this.couponError = i,
                        this.resetCouponForm()
                    }
                    )
                }
                showConfirmation(e) {
                    this.resetCouponForm(),
                    this.couponError = void 0,
                    sessionStorage.setItem("couponDiscount", e),
                    this.translate.get("DISCOUNT_APPLIED", {
                        discount: e
                    }).subscribe(o=>{
                        this.couponConfirmation = o
                    }
                    , o=>{
                        this.couponConfirmation = o
                    }
                    ),
                    this.initTotal()
                }
                getMessage(e) {
                    this.paymentId = e,
                    this.paymentMode = "card"
                }
                routeToPreviousUrl() {
                    this.location.back()
                }
                choosePayment() {
                    var e = this;
                    if (sessionStorage.removeItem("itemTotal"),
                    "wallet" === this.mode)
                        this.walletService.put({
                            balance: this.totalPrice,
                            paymentId: this.paymentId
                        }).subscribe(()=>{
                            sessionStorage.removeItem("walletTotal"),
                            this.ngZone.run((0,
                            w.Z)(function*() {
                                return yield e.router.navigate(["/wallet"])
                            })),
                            this.snackBarHelperService.open("CHARGED_WALLET", "confirmBar")
                        }
                        , o=>{
                            console.log(o),
                            this.snackBarHelperService.open(o.error?.message, "errorBar")
                        }
                        );
                    else if ("deluxe" === this.mode)
                        this.userService.upgradeToDeluxe(this.paymentMode, this.paymentId).subscribe(o=>{
                            localStorage.setItem("token", o.token),
                            this.cookieService.put("token", o.token),
                            this.ngZone.run((0,
                            w.Z)(function*() {
                                return yield e.router.navigate(["/deluxe-membership"])
                            }))
                        }
                        , o=>{
                            console.log(o)
                        }
                        );
                    else {
                        if ("wallet" === this.paymentMode) {
                            if (this.walletBalance < this.totalPrice)
                                return void this.snackBarHelperService.open("INSUFFICIENT_WALLET_BALANCE", "errorBar");
                            sessionStorage.setItem("paymentId", "wallet")
                        } else
                            sessionStorage.setItem("paymentId", this.paymentId);
                        this.ngZone.run((0,
                        w.Z)(function*() {
                            return yield e.router.navigate(["/order-summary"])
                        }))
                    }
                }
                noop() {}
                showBitcoinQrCode() {
                    this.dialog.open(le, {
                        data: {
                            data: "bitcoin:1AbKfgvw9psQ41NbLi8kufDQTezwG8DRZm",
                            url: "./redirect?to=https://blockchain.info/address/1AbKfgvw9psQ41NbLi8kufDQTezwG8DRZm",
                            address: "1AbKfgvw9psQ41NbLi8kufDQTezwG8DRZm",
                            title: "TITLE_BITCOIN_ADDRESS"
                        }
                    })
                }
                showDashQrCode() {
                    this.dialog.open(le, {
                        data: {
                            data: "dash:Xr556RzuwX6hg5EGpkybbv5RanJoZN17kW",
                            url: "./redirect?to=https://explorer.dash.org/address/Xr556RzuwX6hg5EGpkybbv5RanJoZN17kW",
                            address: "Xr556RzuwX6hg5EGpkybbv5RanJoZN17kW",
                            title: "TITLE_DASH_ADDRESS"
                        }
                    })
                }
                showEtherQrCode() {
                    this.dialog.open(le, {
                        data: {
                            data: "0x0f933ab9fCAAA782D0279C300D73750e1311EAE6",
                            url: "./redirect?to=https://etherscan.io/address/0x0f933ab9fcaaa782d0279c300d73750e1311eae6",
                            address: "0x0f933ab9fCAAA782D0279C300D73750e1311EAE6",
                            title: "TITLE_ETHER_ADDRESS"
                        }
                    })
                }
                useWallet() {
                    this.paymentMode = "wallet",
                    this.choosePayment()
                }
                resetCouponForm() {
                    this.couponControl.setValue(""),
                    this.couponControl.markAsPristine(),
                    this.couponControl.markAsUntouched()
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(h.Ye),t.Y36(I.N_),t.Y36(R),t.Y36(Dt),t.Y36(ce),t.Y36(L.F0),t.Y36(N.uw),t.Y36(b.e),t.Y36(X),t.Y36(u.sK),t.Y36(L.gz),t.Y36(t.R0b),t.Y36(J.H))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-payment"]],
                decls: 24,
                vars: 10,
                consts: [[1, "mat-own-card", "mat-elevation-z6"], [3, "allowDelete", "emitSelection"], ["class", "mat-elevation-z0", "class", "custom-card", 4, "ngIf"], ["class", "mat-elevation-z0", "id", "collapseCouponElement", 3, "expanded", 4, "ngIf"], ["class", "mat-elevation-z0", 3, "expanded", 4, "ngIf"], [2, "margin-top", "20px", "margin-bottom", "20px"], ["mat-stroked-button", "", 1, "btn", "btn-return", 3, "click"], ["mat-raised-button", "", "mat-button", "", "color", "primary", "aria-label", "Proceed to review", 1, "btn", "nextButton", 3, "disabled", "click"], ["translate", ""], [2, "text-align", "center", "margin-top", "-27px"], ["translate", "", 4, "ngIf"], [1, "custom-card"], ["fxLayout", "row"], ["fxFlex", "42%"], ["translate", "", 1, "card-title"], ["fxFlex", "38%"], [1, "confirmation", "card-title"], ["fxFlex", "20%"], ["type", "submit", "color", "primary", "mat-raised-button", "", 1, "btn", 2, "float", "right", 3, "disabled", "click"], [1, "fas", "fa-hand-holding-usd", "fa-lg"], ["id", "collapseCouponElement", 1, "mat-elevation-z0", 3, "expanded"], [1, "detail-divider"], ["style", "margin-top:5px;", "class", "confirmation", 4, "ngIf"], ["style", "margin-top:5px;", "class", "error", 4, "ngIf"], ["appearance", "outline", "color", "accent"], [3, "innerHtml"], ["id", "coupon", "matInput", "", "type", "text", 3, "formControl", "placeholder"], ["coupon", ""], ["align", "end"], [4, "ngIf"], ["type", "submit", "id", "applyCouponButton", "color", "accent", "mat-raised-button", "", 2, "margin-top", "5px", "float", "right", 3, "disabled", "click"], [1, "confirmation", 2, "margin-top", "5px"], [1, "error", 2, "margin-top", "5px"], [1, "mat-elevation-z0", 3, "expanded"], ["fxLayout", "row", "fxLayout.lt-lg", "column"], ["fxFlex", "34%", "fxFlex.lt-lg", "100%", 1, "mat-elevation-z0"], [1, "payment-label"], ["translate", "", 3, "translateParams", 4, "ngIf"], [1, "fas", "fa-heart", "error", 2, "margin-left", "3px"], [1, "button-container", 2, "margin-top", "6px"], ["href", "https://pwning.owasp-juice.shop/part3/donations.html"], ["mat-stroked-button", ""], [1, "fab", "fa-stripe", "fa-lg"], ["mat-stroked-button", "", 3, "click", 4, "ngIf"], [1, "fill-remaining-space"], ["fxFlex", "65%", "fxFlex.lt-lg", "100%", 1, "mat-elevation-z0"], [1, "fas", "fa-thumbs-up", "confirmation", 2, "margin-left", "3px"], ["href", "./redirect?to=http://shop.spreadshirt.com/juiceshop"], [1, "fas", "fa-tshirt", "fa-lg"], ["href", "./redirect?to=http://shop.spreadshirt.de/juiceshop"], ["href", "./redirect?to=https://www.stickeryou.com/products/owasp-juice-shop/794"], [1, "fas", "fa-sticky-note", "fa-lg"], ["href", "./redirect?to=http://leanpub.com/juice-shop"], [1, "fab", "fa-leanpub", "fa-lg"], ["href", "https://opensea.io/collection/juice-shop"], [1, "fas", "fa-palette", "fa-lg"], ["translate", "", 3, "translateParams"], ["mat-stroked-button", "", 3, "click"], [1, "fab", "fa-btc", "fa-lg"], [1, "fa-lg"], [1, "fab", "fa-ethereum", "fa-lg"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "mat-card", 0)(1, "div")(2, "app-payment-method", 1),
                    t.NdJ("emitSelection", function(r) {
                        return o.getMessage(r)
                    }),
                    t.qZA(),
                    t._UZ(3, "mat-divider"),
                    t.YNc(4, ks, 16, 6, "div", 2),
                    t._UZ(5, "mat-divider"),
                    t.YNc(6, Ps, 26, 26, "mat-expansion-panel", 3),
                    t._UZ(7, "mat-divider"),
                    t.YNc(8, Rs, 57, 14, "mat-expansion-panel", 4),
                    t._UZ(9, "mat-divider"),
                    t.TgZ(10, "div", 5)(11, "button", 6),
                    t.NdJ("click", function() {
                        return o.routeToPreviousUrl()
                    }),
                    t.TgZ(12, "mat-icon"),
                    t._uU(13, " navigate_before "),
                    t.qZA(),
                    t._uU(14),
                    t.ALo(15, "translate"),
                    t.qZA(),
                    t.TgZ(16, "button", 7),
                    t.NdJ("click", function() {
                        return o.choosePayment()
                    }),
                    t.TgZ(17, "mat-icon"),
                    t._uU(18, " navigate_next "),
                    t.qZA(),
                    t.TgZ(19, "span", 8),
                    t._uU(20, "LABEL_CONTINUE"),
                    t.qZA()(),
                    t.TgZ(21, "p", 9),
                    t.YNc(22, Ys, 2, 0, "span", 10),
                    t.YNc(23, Js, 2, 0, "span", 10),
                    t.qZA()()()()),
                    2 & e && (t.xp6(2),
                    t.Q6J("allowDelete", !1),
                    t.xp6(2),
                    t.Q6J("ngIf", "wallet" !== o.mode),
                    t.xp6(2),
                    t.Q6J("ngIf", "wallet" !== o.mode),
                    t.xp6(2),
                    t.Q6J("ngIf", "wallet" !== o.mode),
                    t.xp6(6),
                    t.hij(" ", t.lcZ(15, 8, "LABEL_BACK"), " "),
                    t.xp6(2),
                    t.Q6J("disabled", void 0 === o.paymentId && "wallet" !== o.paymentMode),
                    t.xp6(6),
                    t.Q6J("ngIf", "deluxe" !== o.mode && "wallet" !== o.mode),
                    t.xp6(1),
                    t.Q6J("ngIf", "wallet" === o.mode))
                },
                dependencies: [h.O5, u.Pi, p.xw, p.yH, s.Fj, s.JJ, s.oH, F.Hw, f.TO, f.KE, f.bx, f.hX, x.lW, T.a8, B.Nt, z.d, V.ib, V.yz, V.yK, V.u4, Re, u.X$],
                styles: ["mat-form-field[_ngcontent-%COMP%]{width:100%}.mat-own-card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}.btn-return[_ngcontent-%COMP%]{display:block;margin-left:0;margin-right:auto}.nextButton[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:0;margin-top:-37px}mat-card[_ngcontent-%COMP%]{height:auto}.mat-expansion-panel-header-description[_ngcontent-%COMP%]{flex-basis:0}.mat-raised-button[_ngcontent-%COMP%]{margin-right:3px}.custom-card[_ngcontent-%COMP%]{padding:18px 24px}.card-title[_ngcontent-%COMP%]{font-size:15px;line-height:36px;vertical-align:middle}.fill-remaining-space[_ngcontent-%COMP%]{flex:1 1 auto}.detail-divider[_ngcontent-%COMP%]{margin-bottom:12px;margin-top:12px}.mat-card[_ngcontent-%COMP%]   .mat-divider-horizontal[_ngcontent-%COMP%]{position:relative!important}"]
            }),
            n
        }
        )()
          , Hs = (()=>{
            class n {
            }
            return n.\u0275fac = function(e) {
                return new (e || n)
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-saved-payment-methods"]],
                decls: 2,
                vars: 1,
                consts: [[1, "mat-own-card", "mat-elevation-z6"], [3, "allowDelete"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "mat-card", 0),
                    t._UZ(1, "app-payment-method", 1),
                    t.qZA()),
                    2 & e && (t.xp6(1),
                    t.Q6J("allowDelete", !0))
                },
                dependencies: [T.a8, Re],
                styles: [".mat-own-card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}"]
            }),
            n
        }
        )()
          , pe = (()=>{
            class n {
                constructor(e) {
                    this.http = e,
                    this.hostServer = P.N.hostServer,
                    this.host = this.hostServer + "/rest/order-history"
                }
                get() {
                    return this.http.get(this.host).pipe((0,
                    C.U)(e=>e.data), (0,
                    _.K)(e=>{
                        throw e
                    }
                    ))
                }
                getAll() {
                    return this.http.get(this.host + "/orders").pipe((0,
                    C.U)(e=>e.data), (0,
                    _.K)(e=>{
                        throw e
                    }
                    ))
                }
                toggleDeliveryStatus(e, o) {
                    return this.http.put(`${this.host}/${e}/delivery-status`, o).pipe((0,
                    C.U)(i=>i.data), (0,
                    _.K)(i=>{
                        throw i
                    }
                    ))
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.LFG(U.eN))
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )();
        const Gs = ["paginatorOrderHistory"]
          , js = ["paginator"];
        function Ws(n, a) {
            1 & n && t._UZ(0, "mat-header-cell", 32)
        }
        function Ks(n, a) {
            if (1 & n && (t.TgZ(0, "mat-cell", 33),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = a.$implicit;
                t.xp6(1),
                t.hij(" ", e.orderId, "")
            }
        }
        function zs(n, a) {
            1 & n && t._UZ(0, "mat-header-cell", 34)
        }
        function $s(n, a) {
            if (1 & n && (t.TgZ(0, "mat-cell", 35),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = a.$implicit;
                t.xp6(1),
                t.hij(" ", null == e.totalPrice ? null : e.totalPrice.toFixed(2), "\xa4")
            }
        }
        function Vs(n, a) {
            1 & n && t._UZ(0, "mat-header-cell", 36)
        }
        function Xs(n, a) {
            1 & n && (t.TgZ(0, "div", 40),
            t._uU(1, "LABEL_IN_TRANSIT"),
            t.qZA())
        }
        function tl(n, a) {
            1 & n && (t.TgZ(0, "div", 41),
            t._uU(1, "LABEL_DELIVERED"),
            t.qZA())
        }
        function el(n, a) {
            if (1 & n && (t.TgZ(0, "mat-cell", 37),
            t.YNc(1, Xs, 2, 0, "div", 38),
            t.YNc(2, tl, 2, 0, "div", 39),
            t.qZA()),
            2 & n) {
                const e = a.$implicit;
                t.xp6(1),
                t.Q6J("ngIf", !e.delivered),
                t.xp6(1),
                t.Q6J("ngIf", e.delivered)
            }
        }
        function nl(n, a) {
            1 & n && t._UZ(0, "mat-header-cell", 35)
        }
        function ol(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "button", 43),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw().$implicit
                      , r = t.oxw();
                    return t.KtG(r.changeDeliveryStatus(i.delivered, i.id))
                }),
                t.ALo(1, "translate"),
                t.TgZ(2, "mat-icon"),
                t._uU(3, " cached "),
                t.qZA()()
            }
            2 & n && t.s9C("matTooltip", t.lcZ(1, 1, "LABEL_MARK_AS_TRANSIT"))
        }
        function al(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "button", 43),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw().$implicit
                      , r = t.oxw();
                    return t.KtG(r.changeDeliveryStatus(i.delivered, i.id))
                }),
                t.ALo(1, "translate"),
                t.TgZ(2, "mat-icon"),
                t._uU(3, " check_circle "),
                t.qZA()()
            }
            2 & n && t.s9C("matTooltip", t.lcZ(1, 1, "LABEL_MARK_AS_DELIVERED"))
        }
        function il(n, a) {
            if (1 & n && (t.TgZ(0, "mat-cell", 35),
            t.YNc(1, ol, 4, 3, "button", 42),
            t.YNc(2, al, 4, 3, "button", 42),
            t.qZA()),
            2 & n) {
                const e = a.$implicit;
                t.xp6(1),
                t.Q6J("ngIf", e.delivered),
                t.xp6(1),
                t.Q6J("ngIf", !e.delivered)
            }
        }
        function rl(n, a) {
            1 & n && t._UZ(0, "mat-header-row")
        }
        function sl(n, a) {
            1 & n && t._UZ(0, "mat-row")
        }
        function ll(n, a) {
            1 & n && t._UZ(0, "mat-header-cell", 44)
        }
        function cl(n, a) {
            if (1 & n && (t.TgZ(0, "mat-cell", 45),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = a.$implicit;
                t.xp6(1),
                t.hij(" ", e.name, "")
            }
        }
        function ul(n, a) {
            1 & n && t._UZ(0, "mat-header-cell", 46)
        }
        function pl(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "mat-cell", 47)(1, "mat-form-field", 48),
                t._UZ(2, "input", 49, 50),
                t.TgZ(4, "button", 51),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.MAs(3)
                      , m = t.oxw();
                    return t.KtG(m.modifyPrice(r.id, l.value))
                }),
                t._UZ(5, "i", 52),
                t.qZA()()()
            }
            if (2 & n) {
                const e = a.$implicit;
                t.xp6(2),
                t.s9C("value", e.price)
            }
        }
        function dl(n, a) {
            1 & n && t._UZ(0, "mat-header-cell", 53)
        }
        function ml(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "mat-cell", 47)(1, "mat-form-field", 48),
                t._UZ(2, "input", 49, 54),
                t.TgZ(4, "button", 51),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.MAs(3)
                      , m = t.oxw();
                    return t.KtG(m.modifyQuantity(m.quantityMap[r.id].id, l.value))
                }),
                t._UZ(5, "i", 52),
                t.qZA()()()
            }
            if (2 & n) {
                const e = a.$implicit
                  , o = t.oxw();
                t.xp6(2),
                t.s9C("value", o.quantityMap[e.id].quantity)
            }
        }
        function gl(n, a) {
            1 & n && t._UZ(0, "mat-header-row")
        }
        function hl(n, a) {
            1 & n && t._UZ(0, "mat-row")
        }
        O.vI.add(g.LEp);
        let _l = (()=>{
            class n {
                constructor(e, o, i, r) {
                    this.productService = e,
                    this.quantityService = o,
                    this.orderHistoryService = i,
                    this.snackBarHelperService = r,
                    this.orderHistoryColumns = ["OrderId", "Price", "Status", "StatusButton"],
                    this.displayedColumns = ["Product", "Price", "Quantity"]
                }
                ngAfterViewInit() {
                    this.loadQuantity(),
                    this.loadProducts(),
                    this.loadOrders()
                }
                loadQuantity() {
                    this.quantitySubscription = this.quantityService.getAll().subscribe(e=>{
                        this.quantityMap = {},
                        e.forEach(o=>{
                            this.quantityMap[o.ProductId] = {
                                id: o.id,
                                quantity: o.quantity
                            }
                        }
                        )
                    }
                    , e=>{
                        console.log(e)
                    }
                    )
                }
                loadProducts() {
                    this.productSubscription = this.productService.search("").subscribe(e=>{
                        this.tableData = e,
                        this.dataSource = new d.by(this.tableData),
                        this.dataSource.paginator = this.paginator
                    }
                    , e=>{
                        console.log(e)
                    }
                    )
                }
                loadOrders() {
                    this.orderHistoryService.getAll().subscribe(e=>{
                        this.orderData = [];
                        for (const o of e)
                            this.orderData.push({
                                id: o._id,
                                orderId: o.orderId,
                                totalPrice: o.totalPrice,
                                delivered: o.delivered
                            });
                        this.orderSource = new d.by(this.orderData),
                        this.orderSource.paginator = this.paginatorOrderHistory
                    }
                    , e=>{
                        console.log(e)
                    }
                    )
                }
                ngOnDestroy() {
                    this.productSubscription && this.productSubscription.unsubscribe(),
                    this.quantitySubscription && this.quantitySubscription.unsubscribe()
                }
                modifyQuantity(e, o) {
                    this.quantityService.put(e, {
                        quantity: o < 0 ? 0 : o
                    }).subscribe(i=>{
                        const r = this.tableData.find(l=>l.id === i.ProductId);
                        this.snackBarHelperService.open(`Quantity for ${r.name} has been updated.`, "confirmBar"),
                        this.loadQuantity()
                    }
                    , i=>{
                        this.snackBarHelperService.open(i.error, "errorBar"),
                        console.log(i)
                    }
                    )
                }
                modifyPrice(e, o) {
                    this.productService.put(e, {
                        price: o < 0 ? 0 : o
                    }).subscribe(i=>{
                        this.snackBarHelperService.open(`Price for ${i.name} has been updated.`, "confirmBar"),
                        this.loadProducts()
                    }
                    , i=>{
                        this.snackBarHelperService.open(i.error, "errorBar"),
                        console.log(i)
                    }
                    )
                }
                changeDeliveryStatus(e, o) {
                    this.orderHistoryService.toggleDeliveryStatus(o, {
                        deliveryStatus: e
                    }).subscribe(()=>{
                        this.loadOrders()
                    }
                    , i=>{
                        this.snackBarHelperService.open(i, "errorBar"),
                        console.log(i)
                    }
                    )
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(Lt),t.Y36(Kt),t.Y36(pe),t.Y36(J.H))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-accounting"]],
                viewQuery: function(e, o) {
                    if (1 & e && (t.Gf(Gs, 7),
                    t.Gf(js, 7)),
                    2 & e) {
                        let i;
                        t.iGM(i = t.CRH()) && (o.paginatorOrderHistory = i.first),
                        t.iGM(i = t.CRH()) && (o.paginator = i.first)
                    }
                },
                decls: 45,
                vars: 8,
                consts: [[1, "mat-elevation-z6", "mat-own-card"], ["translate", ""], ["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "20px", 1, "container"], ["fxFlexAlign", "center", 1, "orders-container"], [1, "orders-table"], [1, "heading"], [3, "dataSource"], ["matColumnDef", "OrderId"], ["translate", "LABEL_ORDER_ID", "fxFlex", "50%", 4, "matHeaderCellDef"], ["fxFlex", "50%", 4, "matCellDef"], ["matColumnDef", "Price"], ["translate", "LABEL_PRICE", "fxFlex", "15%", 4, "matHeaderCellDef"], ["fxFlex", "15%", 4, "matCellDef"], ["matColumnDef", "Status"], ["translate", "LABEL_STATUS", "fxFlex", "20%", 4, "matHeaderCellDef"], ["fxFlex", "20%", 4, "matCellDef"], ["matColumnDef", "StatusButton"], ["fxFlex", "15%", 4, "matHeaderCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["color", "accent", 1, "mat-elevation-z0", 3, "pageSize"], ["paginatorOrderHistory", ""], ["fxFlexAlign.lt-md", "center", 1, "inventory-container"], [1, "inventory-table"], ["matColumnDef", "Product"], ["translate", "LABEL_PRODUCT", "fxFlex", "50%", "fxFlex.lt-md", "50%", 4, "matHeaderCellDef"], ["fxFlex", "50%", "fxFlex.lt-md", "50%", 4, "matCellDef"], ["translate", "LABEL_PRICE", "fxFlex", "25%", "fxFlex.lt-md", "25%", 4, "matHeaderCellDef"], ["fxFlex", "25%", "fxFlex.lt-md", "25%", 4, "matCellDef"], ["matColumnDef", "Quantity"], ["translate", "LABEL_QUANTITY", "fxFlex", "25%", "fxFlex.lt-md", "25%", 4, "matHeaderCellDef"], ["paginator", ""], ["translate", "LABEL_ORDER_ID", "fxFlex", "50%"], ["fxFlex", "50%"], ["translate", "LABEL_PRICE", "fxFlex", "15%"], ["fxFlex", "15%"], ["translate", "LABEL_STATUS", "fxFlex", "20%"], ["fxFlex", "20%"], ["class", "error", "translate", "", 4, "ngIf"], ["class", "confirmation", "translate", "", 4, "ngIf"], ["translate", "", 1, "error"], ["translate", "", 1, "confirmation"], ["mat-icon-button", "", "aria-label", "Print order confirmation", "matTooltipPosition", "below", 3, "matTooltip", "click", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "Print order confirmation", "matTooltipPosition", "below", 3, "matTooltip", "click"], ["translate", "LABEL_PRODUCT", "fxFlex", "50%", "fxFlex.lt-md", "50%"], ["fxFlex", "50%", "fxFlex.lt-md", "50%"], ["translate", "LABEL_PRICE", "fxFlex", "25%", "fxFlex.lt-md", "25%"], ["fxFlex", "25%", "fxFlex.lt-md", "25%"], [1, "input-field"], ["matInput", "", "type", "number", 3, "value"], ["price", ""], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "fas", "fa-check"], ["translate", "LABEL_QUANTITY", "fxFlex", "25%", "fxFlex.lt-md", "25%"], ["quanitity", ""]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "mat-card", 0)(1, "h1", 1),
                    t._uU(2, "ACCOUNTING"),
                    t.qZA(),
                    t.TgZ(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "span", 1),
                    t._uU(8, "TITLE_TRACK_ORDERS"),
                    t.qZA()(),
                    t.TgZ(9, "mat-table", 6),
                    t.ynx(10, 7),
                    t.YNc(11, Ws, 1, 0, "mat-header-cell", 8),
                    t.YNc(12, Ks, 2, 1, "mat-cell", 9),
                    t.BQk(),
                    t.ynx(13, 10),
                    t.YNc(14, zs, 1, 0, "mat-header-cell", 11),
                    t.YNc(15, $s, 2, 1, "mat-cell", 12),
                    t.BQk(),
                    t.ynx(16, 13),
                    t.YNc(17, Vs, 1, 0, "mat-header-cell", 14),
                    t.YNc(18, el, 3, 2, "mat-cell", 15),
                    t.BQk(),
                    t.ynx(19, 16),
                    t.YNc(20, nl, 1, 0, "mat-header-cell", 17),
                    t.YNc(21, il, 3, 2, "mat-cell", 12),
                    t.BQk(),
                    t.YNc(22, rl, 1, 0, "mat-header-row", 18),
                    t.YNc(23, sl, 1, 0, "mat-row", 19),
                    t.qZA(),
                    t._UZ(24, "mat-paginator", 20, 21),
                    t.qZA()(),
                    t.TgZ(26, "div", 22)(27, "div", 23)(28, "div", 5)(29, "span", 1),
                    t._uU(30, "TITLE_ALL_PRODUCTS"),
                    t.qZA()(),
                    t.TgZ(31, "mat-table", 6),
                    t.ynx(32, 24),
                    t.YNc(33, ll, 1, 0, "mat-header-cell", 25),
                    t.YNc(34, cl, 2, 1, "mat-cell", 26),
                    t.BQk(),
                    t.ynx(35, 10),
                    t.YNc(36, ul, 1, 0, "mat-header-cell", 27),
                    t.YNc(37, pl, 6, 1, "mat-cell", 28),
                    t.BQk(),
                    t.ynx(38, 29),
                    t.YNc(39, dl, 1, 0, "mat-header-cell", 30),
                    t.YNc(40, ml, 6, 1, "mat-cell", 28),
                    t.BQk(),
                    t.YNc(41, gl, 1, 0, "mat-header-row", 18),
                    t.YNc(42, hl, 1, 0, "mat-row", 19),
                    t.qZA(),
                    t._UZ(43, "mat-paginator", 20, 31),
                    t.qZA()()()()),
                    2 & e && (t.xp6(9),
                    t.Q6J("dataSource", o.orderSource),
                    t.xp6(13),
                    t.Q6J("matHeaderRowDef", o.orderHistoryColumns),
                    t.xp6(1),
                    t.Q6J("matRowDefColumns", o.orderHistoryColumns),
                    t.xp6(1),
                    t.Q6J("pageSize", 10),
                    t.xp6(7),
                    t.Q6J("dataSource", o.dataSource),
                    t.xp6(10),
                    t.Q6J("matHeaderRowDef", o.displayedColumns),
                    t.xp6(1),
                    t.Q6J("matRowDefColumns", o.displayedColumns),
                    t.xp6(1),
                    t.Q6J("pageSize", 10))
                },
                dependencies: [h.O5, u.Pi, p.xw, p.SQ, p.XD, p.yH, F.Hw, f.KE, f.R9, x.lW, d.BZ, d.fO, d.as, d.w1, d.Dz, d.nj, d.ge, d.ev, d.XQ, d.Gk, xt.NW, T.a8, B.Nt, Q.gM, u.X$],
                styles: [".heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.13);font-size:large;justify-content:center;margin-bottom:10px;padding:12px}.container[_ngcontent-%COMP%]{justify-content:center}mat-table[_ngcontent-%COMP%]{height:767px}mat-header-row[_ngcontent-%COMP%]{min-height:0!important}.orders-container[_ngcontent-%COMP%], .inventory-container[_ngcontent-%COMP%]{max-width:600px;min-width:300px;width:70%}.orders-table[_ngcontent-%COMP%], .inventory-table[_ngcontent-%COMP%]{margin-bottom:25px}mat-cell[_ngcontent-%COMP%], mat-footer-cell[_ngcontent-%COMP%], mat-header-cell[_ngcontent-%COMP%]{align-items:normal;display:block}mat-cell[_ngcontent-%COMP%]:last-child, mat-footer-cell[_ngcontent-%COMP%]:last-child, mat-header-cell[_ngcontent-%COMP%]:last-child{padding-right:50px}mat-row[_ngcontent-%COMP%]{height:69px}.mat-own-card[_ngcontent-%COMP%]{display:block;margin-bottom:20px;margin-left:10%;margin-right:10%}.product[_ngcontent-%COMP%]{cursor:pointer}.input-field[_ngcontent-%COMP%]{width:80px}"]
            }),
            n
        }
        )();
        const fl = function(n) {
            return {
                numberdays: n
            }
        };
        function Cl(n, a) {
            if (1 & n && (t.TgZ(0, "span")(1, "div", 30),
            t._uU(2, "ESTIMATED_TIME_OF_DELIVERY"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Q6J("translateParams", t.VKq(1, fl, e.orderDetails.eta))
            }
        }
        function vl(n, a) {
            if (1 & n && (t.TgZ(0, "div"),
            t.YNc(1, Cl, 3, 3, "span", 7),
            t.TgZ(2, "div")(3, "b", 4),
            t._uU(4, "LABEL_DELIVERY_ADDRESS"),
            t.qZA()(),
            t.TgZ(5, "div"),
            t._uU(6),
            t.qZA(),
            t.TgZ(7, "div"),
            t._uU(8),
            t.qZA(),
            t.TgZ(9, "div"),
            t._uU(10),
            t.qZA(),
            t.TgZ(11, "div")(12, "span", 4),
            t._uU(13, "PHONE_NUMBER"),
            t.qZA(),
            t._uU(14),
            t.qZA()()),
            2 & n) {
                const e = t.oxw();
                t.xp6(1),
                t.Q6J("ngIf", "?" !== e.orderDetails.eta && void 0 !== e.orderDetails.eta),
                t.xp6(5),
                t.Oqu(null == e.address ? null : e.address.fullName),
                t.xp6(2),
                t.HOy("", null == e.address ? null : e.address.streetAddress, ", ", null == e.address ? null : e.address.city, ", ", null == e.address ? null : e.address.state, ", ", null == e.address ? null : e.address.zipCode, ""),
                t.xp6(2),
                t.Oqu(null == e.address ? null : e.address.country),
                t.xp6(4),
                t.hij(" ", null == e.address ? null : e.address.mobileNum, "")
            }
        }
        function xl(n, a) {
            1 & n && (t.TgZ(0, "mat-header-cell", 4),
            t._uU(1, "LABEL_PRODUCT"),
            t.qZA())
        }
        function bl(n, a) {
            if (1 & n && (t.TgZ(0, "mat-cell"),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = a.$implicit;
                t.xp6(1),
                t.hij("", e.name, " ")
            }
        }
        function Tl(n, a) {
            1 & n && t._UZ(0, "mat-footer-cell")
        }
        function Al(n, a) {
            1 & n && (t.TgZ(0, "mat-header-cell", 4),
            t._uU(1, "LABEL_PRICE"),
            t.qZA())
        }
        function yl(n, a) {
            if (1 & n && (t.TgZ(0, "mat-cell"),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = a.$implicit;
                t.xp6(1),
                t.hij("", e.price, "\xa4")
            }
        }
        function Zl(n, a) {
            1 & n && t._UZ(0, "mat-footer-cell")
        }
        function wl(n, a) {
            1 & n && (t.TgZ(0, "mat-header-cell", 4),
            t._uU(1, "LABEL_QUANTITY"),
            t.qZA())
        }
        function Sl(n, a) {
            if (1 & n && (t.TgZ(0, "mat-cell")(1, "span"),
            t._uU(2),
            t.qZA()()),
            2 & n) {
                const e = a.$implicit;
                t.xp6(2),
                t.Oqu(e.quantity)
            }
        }
        function kl(n, a) {
            1 & n && (t.TgZ(0, "mat-footer-cell")(1, "table", 31)(2, "tr", 32)(3, "td", 4),
            t._uU(4, "ITEMS"),
            t.qZA()(),
            t.TgZ(5, "tr", 32)(6, "td", 4),
            t._uU(7, "DELIVERY"),
            t.qZA()(),
            t.TgZ(8, "tr", 32)(9, "td", 4),
            t._uU(10, "PROMOTION"),
            t.qZA()(),
            t.TgZ(11, "tr", 33)(12, "td", 4),
            t._uU(13, "LABEL_TOTAL_PRICE"),
            t.qZA()()()())
        }
        function Il(n, a) {
            1 & n && (t.TgZ(0, "mat-header-cell", 4),
            t._uU(1, "LABEL_TOTAL_PRICE"),
            t.qZA())
        }
        function Ol(n, a) {
            if (1 & n && (t.TgZ(0, "mat-cell", 34),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = a.$implicit;
                t.xp6(1),
                t.hij("", e.total.toFixed(2), "\xa4")
            }
        }
        function Ul(n, a) {
            if (1 & n && (t.TgZ(0, "mat-footer-cell")(1, "table", 34)(2, "tr", 32)(3, "td"),
            t._uU(4),
            t.qZA()(),
            t.TgZ(5, "tr", 32)(6, "td"),
            t._uU(7),
            t.qZA()(),
            t.TgZ(8, "tr", 32)(9, "td"),
            t._uU(10),
            t.qZA()(),
            t.TgZ(11, "tr", 33)(12, "td"),
            t._uU(13),
            t.qZA()()()()),
            2 & n) {
                const e = t.oxw();
                t.xp6(4),
                t.hij("", null == e.orderDetails.itemTotal ? null : e.orderDetails.itemTotal.toFixed(2), "\xa4"),
                t.xp6(3),
                t.hij("", e.deliveryPrice.toFixed(2), "\xa4"),
                t.xp6(3),
                t.hij("", e.promotionalDiscount.toFixed(2), "\xa4"),
                t.xp6(3),
                t.hij("", null == e.orderDetails.totalPrice ? null : e.orderDetails.totalPrice.toFixed(2), "\xa4")
            }
        }
        function Ll(n, a) {
            1 & n && t._UZ(0, "mat-header-row")
        }
        function Pl(n, a) {
            1 & n && t._UZ(0, "mat-row")
        }
        function Nl(n, a) {
            1 & n && t._UZ(0, "mat-footer-row", 35)
        }
        const El = function(n) {
            return {
                id: n
            }
        }
          , Ml = function(n) {
            return {
                bonus: n
            }
        };
        O.vI.add(Z.mdU);
        let Dl = (()=>{
            class n {
                constructor(e, o, i, r, l) {
                    this.configurationService = e,
                    this.addressService = o,
                    this.trackOrderService = i,
                    this.activatedRoute = r,
                    this.basketService = l,
                    this.tableColumns = ["product", "price", "quantity", "total price"],
                    this.orderDetails = {
                        totalPrice: 0
                    },
                    this.deliveryPrice = 0,
                    this.promotionalDiscount = 0,
                    this.tweetText = "I just purchased",
                    this.truncateTweet = (m,v=140)=>{
                        if (!m)
                            return null;
                        const A = m.length > v;
                        return `${m.substring(0, v)}${A ? "..." : ""}`
                    }
                }
                ngOnInit() {
                    this.activatedRoute.paramMap.subscribe(e=>{
                        this.orderId = e.get("id"),
                        this.trackOrderService.find(this.orderId).subscribe(o=>{
                            this.promotionalDiscount = o.data[0].promotionalAmount ? parseFloat(o.data[0].promotionalAmount) : 0,
                            this.deliveryPrice = o.data[0].deliveryPrice ? parseFloat(o.data[0].deliveryPrice) : 0,
                            this.orderDetails.addressId = o.data[0].addressId,
                            this.orderDetails.paymentId = o.data[0].paymentId,
                            this.orderDetails.totalPrice = o.data[0].totalPrice,
                            this.orderDetails.itemTotal = o.data[0].totalPrice + this.promotionalDiscount - this.deliveryPrice,
                            this.orderDetails.eta = o.data[0].eta || "?",
                            this.orderDetails.products = o.data[0].products,
                            this.orderDetails.bonus = o.data[0].bonus,
                            this.dataSource = new d.by(this.orderDetails.products);
                            for (const i of this.orderDetails.products)
                                this.tweetText += `%0a- ${i.name}`;
                            this.tweetText = this.truncateTweet(this.tweetText),
                            this.configurationService.getApplicationConfiguration().subscribe(i=>{
                                i?.application?.social && (this.tweetText += "%0afrom ",
                                this.tweetText += i.application.social.twitterUrl ? i.application.social.twitterUrl.replace("https://twitter.com/", "@") : i.application.name)
                            }
                            , i=>{
                                console.log(i)
                            }
                            ),
                            this.addressService.getById(this.orderDetails.addressId).subscribe(i=>{
                                this.address = i
                            }
                            , i=>{
                                console.log(i)
                            }
                            )
                        }
                        , o=>{
                            console.log(o)
                        }
                        )
                    }
                    , e=>{
                        console.log(e)
                    }
                    )
                }
                openConfirmationPDF() {
                    window.open(`${this.basketService.hostServer}/ftp/order_${this.orderId}.pdf`, "_blank")
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(b.e),t.Y36(mt),t.Y36(Qt),t.Y36(L.gz),t.Y36(X))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-order-completion"]],
                decls: 51,
                vars: 18,
                consts: [[1, "mat-elevation-z6", "mat-own-card"], ["fxLayout", "row", "fxLayout.lt-md", "column"], ["fxFlex", "60%", 1, "mat-elevation-z0"], ["translate", "", 1, "confirmation"], ["translate", ""], ["routerLink", "/track-result/new", "translate", "", 3, "queryParams"], ["fxFlex", "40%", 1, "mat-elevation-z0"], [4, "ngIf"], [1, "mat-elevation-z0", "table-container"], [1, "heading"], [1, "heading-text"], ["fxFlex", ""], [3, "href"], ["mat-icon-button", "", "aria-label", "Tweet"], [1, "fab", "fa-twitter", "fa-lg"], ["mat-icon-button", "", "aria-label", "Print order confirmation", "matTooltipPosition", "below", 3, "matTooltip", "click"], [3, "dataSource"], ["matColumnDef", "product"], ["translate", "", 4, "matHeaderCellDef"], [4, "matCellDef"], [4, "matFooterCellDef"], ["matColumnDef", "price"], ["matColumnDef", "quantity"], ["matColumnDef", "total price"], ["class", "price-align", 4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef"], [1, "mat-elevation-z0"], ["translate", "", 3, "translateParams"], ["translate", "", 1, "confirmation", 3, "translateParams"], [1, "mat-table"], [1, "mat-row"], [1, "mat-row", 2, "font-weight", "bold"], [1, "price-align"], ["mat-footer-row", ""]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "mat-card", 0)(1, "div")(2, "div", 1)(3, "mat-card", 2)(4, "div")(5, "h1", 3),
                    t._uU(6, "THANKS_FOR_PURCHASE"),
                    t.qZA(),
                    t.TgZ(7, "div", 4),
                    t._uU(8, "PURCHASE_COMMENT_PREFIX "),
                    t.TgZ(9, "a", 5),
                    t._uU(10, "TITLE_TRACK_ORDERS"),
                    t.qZA(),
                    t._uU(11, " PURCHASE_COMMENT_SUFFIX"),
                    t.qZA()()(),
                    t.TgZ(12, "mat-card", 6),
                    t.YNc(13, vl, 15, 8, "div", 7),
                    t.qZA()()(),
                    t.TgZ(14, "div", 8)(15, "div", 9)(16, "span", 10),
                    t._uU(17),
                    t.ALo(18, "translate"),
                    t.qZA(),
                    t._UZ(19, "span", 11),
                    t.TgZ(20, "a", 12)(21, "button", 13),
                    t._UZ(22, "i", 14),
                    t.qZA()(),
                    t.TgZ(23, "button", 15),
                    t.NdJ("click", function() {
                        return o.openConfirmationPDF()
                    }),
                    t.ALo(24, "translate"),
                    t.TgZ(25, "mat-icon"),
                    t._uU(26, " note "),
                    t.qZA()()(),
                    t.TgZ(27, "mat-table", 16),
                    t.ynx(28, 17),
                    t.YNc(29, xl, 2, 0, "mat-header-cell", 18),
                    t.YNc(30, bl, 2, 1, "mat-cell", 19),
                    t.YNc(31, Tl, 1, 0, "mat-footer-cell", 20),
                    t.BQk(),
                    t.ynx(32, 21),
                    t.YNc(33, Al, 2, 0, "mat-header-cell", 18),
                    t.YNc(34, yl, 2, 1, "mat-cell", 19),
                    t.YNc(35, Zl, 1, 0, "mat-footer-cell", 20),
                    t.BQk(),
                    t.ynx(36, 22),
                    t.YNc(37, wl, 2, 0, "mat-header-cell", 18),
                    t.YNc(38, Sl, 3, 1, "mat-cell", 19),
                    t.YNc(39, kl, 14, 0, "mat-footer-cell", 20),
                    t.BQk(),
                    t.ynx(40, 23),
                    t.YNc(41, Il, 2, 0, "mat-header-cell", 18),
                    t.YNc(42, Ol, 2, 1, "mat-cell", 24),
                    t.YNc(43, Ul, 14, 4, "mat-footer-cell", 20),
                    t.BQk(),
                    t.YNc(44, Ll, 1, 0, "mat-header-row", 25),
                    t.YNc(45, Pl, 1, 0, "mat-row", 26),
                    t.YNc(46, Nl, 1, 0, "mat-footer-row", 27),
                    t.qZA()(),
                    t.TgZ(47, "div")(48, "mat-card", 28)(49, "div", 29),
                    t._uU(50, "BONUS_POINTS_COUNT"),
                    t.qZA()()()()),
                    2 & e && (t.xp6(9),
                    t.Q6J("queryParams", t.VKq(14, El, o.orderId)),
                    t.xp6(4),
                    t.Q6J("ngIf", o.address),
                    t.xp6(4),
                    t.Oqu(t.lcZ(18, 10, "ORDER_SUMMARY")),
                    t.xp6(3),
                    t.MGl("href", "https://twitter.com/intent/tweet?text=", o.tweetText, "&hashtags=security", t.LSH),
                    t.xp6(3),
                    t.s9C("matTooltip", t.lcZ(24, 12, "PRINT_ORDER_CONFIRMATION")),
                    t.xp6(4),
                    t.Q6J("dataSource", o.dataSource),
                    t.xp6(17),
                    t.Q6J("matHeaderRowDef", o.tableColumns),
                    t.xp6(1),
                    t.Q6J("matRowDefColumns", o.tableColumns),
                    t.xp6(1),
                    t.Q6J("matFooterRowDef", o.tableColumns),
                    t.xp6(3),
                    t.Q6J("translateParams", t.VKq(16, Ml, o.orderDetails.bonus)))
                },
                dependencies: [h.O5, L.rH, u.Pi, p.xw, p.yH, F.Hw, x.lW, d.BZ, d.fO, d.as, d.w1, d.Dz, d.nj, d.mD, d.Ke, d.ge, d.ev, d.yh, d.XQ, d.Gk, d.Q2, T.a8, Q.gM, u.X$],
                styles: [".heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);font-size:x-large}.heading-text[_ngcontent-%COMP%]{justify-content:center;padding:12px 20px}.mat-own-card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}mat-cell[_ngcontent-%COMP%], mat-footer-cell[_ngcontent-%COMP%], mat-header-cell[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px}.price-align[_ngcontent-%COMP%]{text-align:right}.tweet-logo[_ngcontent-%COMP%]{height:24px}"]
            }),
            n
        }
        )();
        function ql(n, a) {
            if (1 & n && (t.TgZ(0, "mat-card", 20)(1, "div")(2, "div")(3, "b", 14),
            t._uU(4, "PAYMENT_METHOD"),
            t.qZA()(),
            t.TgZ(5, "div")(6, "span", 14),
            t._uU(7, "CARD_ENDING_IN"),
            t.qZA(),
            t._uU(8),
            t.qZA(),
            t.TgZ(9, "div")(10, "span", 14),
            t._uU(11, "CARD_HOLDER"),
            t.qZA(),
            t._uU(12),
            t.qZA()()()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(8),
                t.hij(" ", null == e.paymentMethod ? null : e.paymentMethod.cardNum, ""),
                t.xp6(4),
                t.hij(" ", null == e.paymentMethod ? null : e.paymentMethod.fullName, "")
            }
        }
        function Fl(n, a) {
            1 & n && (t.TgZ(0, "mat-card", 20)(1, "div")(2, "div")(3, "b", 14),
            t._uU(4, "PAYMENT_METHOD"),
            t.qZA()(),
            t.TgZ(5, "div")(6, "span", 14),
            t._uU(7, "DIGITAL_WALLET"),
            t.qZA()()()())
        }
        function Bl(n, a) {
            if (1 & n && (t.TgZ(0, "div", 16)(1, "mat-card", 17)(2, "div")(3, "div")(4, "b", 14),
            t._uU(5, "LABEL_DELIVERY_ADDRESS"),
            t.qZA()(),
            t.TgZ(6, "div"),
            t._uU(7),
            t.qZA(),
            t.TgZ(8, "div"),
            t._uU(9),
            t.qZA(),
            t.TgZ(10, "div"),
            t._uU(11),
            t.qZA(),
            t.TgZ(12, "div")(13, "span", 14),
            t._uU(14, "PHONE_NUMBER"),
            t.qZA(),
            t._uU(15),
            t.qZA()()(),
            t.YNc(16, ql, 13, 2, "mat-card", 18),
            t.YNc(17, Fl, 8, 0, "ng-template", null, 19, t.W1O),
            t.qZA()),
            2 & n) {
                const e = t.MAs(18)
                  , o = t.oxw();
                t.xp6(7),
                t.Oqu(null == o.address ? null : o.address.fullName),
                t.xp6(2),
                t.HOy("", null == o.address ? null : o.address.streetAddress, ", ", null == o.address ? null : o.address.city, ", ", null == o.address ? null : o.address.state, ", ", null == o.address ? null : o.address.zipCode, ""),
                t.xp6(2),
                t.Oqu(null == o.address ? null : o.address.country),
                t.xp6(4),
                t.hij(" ", null == o.address ? null : o.address.mobileNum, ""),
                t.xp6(1),
                t.Q6J("ngIf", "wallet" !== o.paymentMethod)("ngIfElse", e)
            }
        }
        const Rl = function(n) {
            return {
                bonus: n
            }
        };
        let Yl = (()=>{
            class n {
                constructor(e, o, i, r, l, m, v) {
                    this.router = e,
                    this.addressService = o,
                    this.paymentService = i,
                    this.basketService = r,
                    this.deliveryService = l,
                    this.ngZone = m,
                    this.snackBarHelperService = v,
                    this.bonus = 0,
                    this.itemTotal = 0,
                    this.deliveryPrice = 0,
                    this.promotionalDiscount = 0
                }
                ngOnInit() {
                    this.deliveryService.getById(sessionStorage.getItem("deliveryMethodId")).subscribe(e=>{
                        this.deliveryPrice = e.price
                    }
                    ),
                    this.addressService.getById(sessionStorage.getItem("addressId")).subscribe(e=>{
                        this.address = e
                    }
                    , e=>{
                        console.log(e)
                    }
                    ),
                    "wallet" !== sessionStorage.getItem("paymentId") ? this.paymentService.getById(sessionStorage.getItem("paymentId")).subscribe(e=>{
                        e.cardNum = String(e.cardNum).substring(String(e.cardNum).length - 4),
                        this.paymentMethod = e
                    }
                    , e=>{
                        console.log(e)
                    }
                    ) : "wallet" === sessionStorage.getItem("paymentId") && (this.paymentMethod = "wallet")
                }
                getMessage(e) {
                    this.itemTotal = e[0],
                    this.promotionalDiscount = sessionStorage.getItem("couponDiscount") ? parseFloat(sessionStorage.getItem("couponDiscount")) / 100 * this.itemTotal : 0,
                    this.bonus = e[1]
                }
                placeOrder() {
                    var e = this;
                    const o = {
                        paymentId: sessionStorage.getItem("paymentId"),
                        addressId: sessionStorage.getItem("addressId"),
                        deliveryMethodId: sessionStorage.getItem("deliveryMethodId")
                    };
                    this.basketService.checkout(Number(sessionStorage.getItem("bid")), btoa(sessionStorage.getItem("couponDetails")), o).subscribe(i=>{
                        sessionStorage.removeItem("paymentId"),
                        sessionStorage.removeItem("addressId"),
                        sessionStorage.removeItem("deliveryMethodId"),
                        sessionStorage.removeItem("couponDetails"),
                        sessionStorage.removeItem("couponDiscount"),
                        this.basketService.updateNumberOfCartItems(),
                        this.ngZone.run((0,
                        w.Z)(function*() {
                            return yield e.router.navigate(["/order-completion", i])
                        }))
                    }
                    , i=>{
                        console.log(i),
                        this.snackBarHelperService.open(i.error?.error.message, "errorBar")
                    }
                    )
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(L.F0),t.Y36(mt),t.Y36(ue),t.Y36(X),t.Y36(Dt),t.Y36(t.R0b),t.Y36(J.H))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-order-summary"]],
                decls: 36,
                vars: 10,
                consts: [["fxLayout", "row", "fxLayoutGap", "10%", "fxLayout.lt-md", "column", 1, "mat-elevation-z6", "mat-own-card"], ["fxLayout", "column", "fxLayoutGap", "20px", "fxFlex", "70%"], ["fxLayout", "row", "fxLayoutGap", "10px", "fxLayout.lt-md", "column", 4, "ngIf"], [3, "allowEdit", "totalPrice", "emitTotal"], ["fxFlex", "40%"], [1, "mat-elevation-z0"], ["translate", "", 1, "order-summary"], [1, "mat-table"], [1, "mat-row"], ["translate", "", 1, "mat-cell", "label"], [1, "mat-cell", "price"], ["translate", "", 1, "mat-footer-cell", "label"], [1, "mat-footer-cell", "price"], ["mat-raised-button", "", "mat-button", "", "color", "primary", "aria-label", "Complete your purchase", "id", "checkoutButton", 1, "btn", "btn-pay", 3, "click"], ["translate", ""], ["translate", "", 1, "bonus-points", 3, "translateParams"], ["fxLayout", "row", "fxLayoutGap", "10px", "fxLayout.lt-md", "column"], ["fxFlex", "60%", 1, "mat-elevation-z0"], ["class", "mat-elevation-z0", "fxFlex", "40%", 4, "ngIf", "ngIfElse"], ["walletPayment", ""], ["fxFlex", "40%", 1, "mat-elevation-z0"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "mat-card", 0)(1, "div", 1),
                    t.YNc(2, Bl, 19, 9, "div", 2),
                    t.TgZ(3, "app-purchase-basket", 3),
                    t.NdJ("emitTotal", function(r) {
                        return o.getMessage(r)
                    }),
                    t.qZA()(),
                    t.TgZ(4, "div", 4)(5, "mat-card", 5)(6, "div", 6),
                    t._uU(7, "ORDER_SUMMARY"),
                    t.qZA(),
                    t.TgZ(8, "table", 7)(9, "tr", 8)(10, "td", 9),
                    t._uU(11, "ITEMS"),
                    t.qZA(),
                    t.TgZ(12, "td", 10),
                    t._uU(13),
                    t.qZA()(),
                    t.TgZ(14, "tr", 8)(15, "td", 9),
                    t._uU(16, "DELIVERY"),
                    t.qZA(),
                    t.TgZ(17, "td", 10),
                    t._uU(18),
                    t.qZA()(),
                    t.TgZ(19, "tr", 8)(20, "td", 9),
                    t._uU(21, "PROMOTION"),
                    t.qZA(),
                    t.TgZ(22, "td", 10),
                    t._uU(23),
                    t.qZA()(),
                    t.TgZ(24, "tr", 8)(25, "td", 11),
                    t._uU(26, "LABEL_TOTAL_PRICE"),
                    t.qZA(),
                    t.TgZ(27, "td", 12),
                    t._uU(28),
                    t.qZA()()(),
                    t.TgZ(29, "button", 13),
                    t.NdJ("click", function() {
                        return o.placeOrder()
                    }),
                    t.TgZ(30, "mat-icon"),
                    t._uU(31, " monetization_on "),
                    t.qZA(),
                    t.TgZ(32, "span", 14),
                    t._uU(33, "PLACE_ORDER_AND_PAY"),
                    t.qZA()(),
                    t.TgZ(34, "div", 15),
                    t._uU(35, "CHECKOUT_FOR_BONUS_POINTS"),
                    t.qZA()()()()),
                    2 & e && (t.xp6(2),
                    t.Q6J("ngIf", o.address && o.paymentMethod),
                    t.xp6(1),
                    t.Q6J("allowEdit", !1)("totalPrice", !1),
                    t.xp6(10),
                    t.hij("", null == o.itemTotal ? null : o.itemTotal.toFixed(2), "\xa4"),
                    t.xp6(5),
                    t.hij("", o.deliveryPrice.toFixed(2), "\xa4"),
                    t.xp6(5),
                    t.hij("", o.promotionalDiscount.toFixed(2), "\xa4"),
                    t.xp6(5),
                    t.hij("", o.itemTotal + o.deliveryPrice - o.promotionalDiscount == null ? null : (o.itemTotal + o.deliveryPrice - o.promotionalDiscount).toFixed(2), "\xa4 "),
                    t.xp6(6),
                    t.Q6J("translateParams", t.VKq(8, Rl, o.bonus)))
                },
                dependencies: [h.O5, u.Pi, p.xw, p.SQ, p.yH, F.Hw, x.lW, T.a8, he],
                styles: [".btn-pay[_ngcontent-%COMP%]{display:block;margin-top:10px;width:100%}mat-card[_ngcontent-%COMP%]{height:auto;margin-top:20px}.mat-own-card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}.main-wrapper[_ngcontent-%COMP%]{margin-left:10%;margin-right:10%}mat-cell[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px}.price[_ngcontent-%COMP%]:last-of-type{padding-right:10px;text-align:right}.label[_ngcontent-%COMP%]:first-of-type{padding-left:10px}table[_ngcontent-%COMP%]{width:100%}.mat-footer-cell[_ngcontent-%COMP%]{font-weight:700}.order-summary[_ngcontent-%COMP%]{font-size:x-large;padding-bottom:10px;padding-left:10px}.bonus-points[_ngcontent-%COMP%]{margin-top:5px;text-align:center}"]
            }),
            n
        }
        )();
        function Jl(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 3),
            t._uU(1, " MANDATORY_AMOUNT "),
            t.qZA())
        }
        function Ql(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 3),
            t._uU(1, " AMOUNT_LIMIT "),
            t.qZA())
        }
        let Hl = (()=>{
            class n {
                constructor(e, o, i) {
                    this.router = e,
                    this.walletService = o,
                    this.ngZone = i,
                    this.balanceControl = new s.p4("",[s.kI.required, s.kI.min(10), s.kI.max(1e3)])
                }
                ngOnInit() {
                    this.walletService.get().subscribe(e=>{
                        this.balance = parseFloat(e).toFixed(2)
                    }
                    , e=>{
                        console.log(e)
                    }
                    )
                }
                continue() {
                    var e = this;
                    sessionStorage.setItem("walletTotal", this.balanceControl.value),
                    this.ngZone.run((0,
                    w.Z)(function*() {
                        return yield e.router.navigate(["/payment", "wallet"])
                    }))
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(L.F0),t.Y36(ce),t.Y36(t.R0b))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-wallet"]],
                decls: 27,
                vars: 14,
                consts: [[1, "mat-elevation-z6"], [1, "header_container"], ["href", "/#/wallet-web3", "translate", ""], ["translate", ""], [1, "confirmation"], ["appearance", "outline", "color", "accent"], ["type", "number", "matInput", "", "aria-label", "Enter an amount", 3, "formControl"], ["translate", "", 4, "ngIf"], ["type", "submit", "id", "submitButton", "mat-raised-button", "", "color", "primary", "aria-label", "Button to continue to payment", 3, "disabled", "click"], [1, "material-icons"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "mat-card", 0)(1, "div", 1)(2, "h1"),
                    t._uU(3),
                    t.ALo(4, "translate"),
                    t.qZA(),
                    t.TgZ(5, "a", 2),
                    t._uU(6, "LINK_TRY_OUT_NEW_CRYPTO_WALLET"),
                    t.qZA()(),
                    t.TgZ(7, "h3", 3),
                    t._uU(8, "LABEL_ADD_MONEY"),
                    t.qZA(),
                    t.TgZ(9, "p")(10, "b")(11, "span", 3),
                    t._uU(12, "LABEL_WALLET_BALANCE"),
                    t.qZA(),
                    t.TgZ(13, "span", 4),
                    t._uU(14),
                    t.qZA()()(),
                    t.TgZ(15, "mat-form-field", 5)(16, "mat-label"),
                    t._uU(17),
                    t.ALo(18, "translate"),
                    t.qZA(),
                    t._UZ(19, "input", 6),
                    t.YNc(20, Jl, 2, 0, "mat-error", 7),
                    t.YNc(21, Ql, 2, 0, "mat-error", 7),
                    t.qZA(),
                    t.TgZ(22, "button", 8),
                    t.NdJ("click", function() {
                        return o.continue()
                    }),
                    t.TgZ(23, "i", 9),
                    t._uU(24, " monetization_on "),
                    t.qZA(),
                    t._uU(25),
                    t.ALo(26, "translate"),
                    t.qZA()()),
                    2 & e && (t.xp6(3),
                    t.Oqu(t.lcZ(4, 8, "DIGITAL_WALLET")),
                    t.xp6(11),
                    t.hij(" ", o.balance, ""),
                    t.xp6(3),
                    t.Oqu(t.lcZ(18, 10, "LABEL_AMOUNT")),
                    t.xp6(2),
                    t.Q6J("formControl", o.balanceControl),
                    t.xp6(1),
                    t.Q6J("ngIf", o.balanceControl.invalid && o.balanceControl.errors.required),
                    t.xp6(1),
                    t.Q6J("ngIf", o.balanceControl.invalid && (o.balanceControl.errors.min || o.balanceControl.errors.max)),
                    t.xp6(1),
                    t.Q6J("disabled", o.balanceControl.invalid),
                    t.xp6(3),
                    t.hij(" ", t.lcZ(26, 12, "BTN_DEPOSIT"), " "))
                },
                dependencies: [h.O5, u.Pi, s.Fj, s.wV, s.JJ, s.oH, f.TO, f.KE, f.hX, x.lW, T.a8, B.Nt, u.X$],
                styles: ["mat-card[_ngcontent-%COMP%]{display:block;margin-left:30%;margin-right:30%}mat-form-field[_ngcontent-%COMP%]{padding-top:10px;width:100%}.form-container[_ngcontent-%COMP%]{min-width:350px}#submitButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}.heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);font-size:x-large;justify-content:center;padding:12px 20px}.header_container[_ngcontent-%COMP%]{display:flex;justify-content:space-between}@media (max-width: 1100px){mat-card[_ngcontent-%COMP%]{margin-left:20%;margin-right:20%}}@media (max-width: 580px){mat-card[_ngcontent-%COMP%]{margin-left:10%;margin-right:10%}.header_container[_ngcontent-%COMP%]{flex-direction:column;margin-bottom:16px}}"]
            }),
            n
        }
        )();
        function Gl(n, a) {
            1 & n && (t.TgZ(0, "div", 32),
            t._uU(1, "LABEL_IN_TRANSIT"),
            t.qZA())
        }
        function jl(n, a) {
            1 & n && (t.TgZ(0, "div", 33),
            t._uU(1, "LABEL_DELIVERED"),
            t.qZA())
        }
        function Wl(n, a) {
            1 & n && (t.TgZ(0, "mat-header-cell", 34),
            t._uU(1, "LABEL_PRODUCT"),
            t.qZA())
        }
        function Kl(n, a) {
            if (1 & n && (t.TgZ(0, "mat-cell", 35),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = a.$implicit;
                t.xp6(1),
                t.hij("", e.name, " ")
            }
        }
        function zl(n, a) {
            1 & n && (t.TgZ(0, "mat-header-cell", 36),
            t._uU(1, "LABEL_PRICE"),
            t.qZA())
        }
        function $l(n, a) {
            if (1 & n && (t.TgZ(0, "mat-cell", 37),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = a.$implicit;
                t.xp6(1),
                t.hij("", e.price, "\xa4")
            }
        }
        function Vl(n, a) {
            1 & n && (t.TgZ(0, "mat-header-cell", 36),
            t._uU(1, "LABEL_QUANTITY"),
            t.qZA())
        }
        function Xl(n, a) {
            if (1 & n && (t.TgZ(0, "mat-cell", 37)(1, "span"),
            t._uU(2),
            t.qZA()()),
            2 & n) {
                const e = a.$implicit;
                t.xp6(2),
                t.Oqu(e.quantity)
            }
        }
        function tc(n, a) {
            1 & n && (t.TgZ(0, "mat-header-cell", 36),
            t._uU(1, "LABEL_TOTAL_PRICE"),
            t.qZA())
        }
        function ec(n, a) {
            if (1 & n && (t.TgZ(0, "mat-cell", 38),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = a.$implicit;
                t.xp6(1),
                t.hij("", e.total.toFixed(2), "\xa4")
            }
        }
        function nc(n, a) {
            1 & n && t._UZ(0, "mat-header-cell", 36)
        }
        function oc(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "mat-cell", 37)(1, "button", 17),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.oxw(3);
                    return t.KtG(l.showDetail(r.id))
                }),
                t.ALo(2, "translate"),
                t.TgZ(3, "mat-icon"),
                t._uU(4, " rate_review "),
                t.qZA()()()
            }
            2 & n && (t.xp6(1),
            t.s9C("matTooltip", t.lcZ(2, 1, "WRITE_REVIEW")))
        }
        function ac(n, a) {
            1 & n && t._UZ(0, "mat-header-row")
        }
        function ic(n, a) {
            1 & n && t._UZ(0, "mat-row")
        }
        function rc(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "div")(1, "div", 6)(2, "div", 7)(3, "div", 8)(4, "div", 9)(5, "div", 10),
                t._uU(6, "LABEL_ORDER_ID"),
                t.qZA(),
                t.TgZ(7, "div"),
                t._uU(8),
                t.qZA()(),
                t.TgZ(9, "div", 11)(10, "div", 10),
                t._uU(11, "LABEL_TOTAL_PRICE"),
                t.qZA(),
                t.TgZ(12, "div"),
                t._uU(13),
                t.qZA()(),
                t.TgZ(14, "div", 11)(15, "div", 10),
                t._uU(16, "LABEL_BONUS"),
                t.qZA(),
                t.TgZ(17, "div"),
                t._uU(18),
                t.qZA()(),
                t.TgZ(19, "div", 12),
                t.YNc(20, Gl, 2, 0, "div", 13),
                t.YNc(21, jl, 2, 0, "div", 14),
                t.qZA(),
                t.TgZ(22, "div", 15)(23, "button", 16),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.oxw(2);
                    return t.KtG(l.trackOrder(r.orderId))
                }),
                t.ALo(24, "translate"),
                t.TgZ(25, "mat-icon"),
                t._uU(26, " local_shipping "),
                t.qZA()()(),
                t.TgZ(27, "div", 15)(28, "button", 17),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.oxw(2);
                    return t.KtG(l.openConfirmationPDF(r.orderId))
                }),
                t.ALo(29, "translate"),
                t.TgZ(30, "mat-icon"),
                t._uU(31, " note "),
                t.qZA()()()(),
                t._UZ(32, "div", 18),
                t.qZA(),
                t.TgZ(33, "mat-table", 19),
                t.ynx(34, 20),
                t.YNc(35, Wl, 2, 0, "mat-header-cell", 21),
                t.YNc(36, Kl, 2, 1, "mat-cell", 22),
                t.BQk(),
                t.ynx(37, 23),
                t.YNc(38, zl, 2, 0, "mat-header-cell", 24),
                t.YNc(39, $l, 2, 1, "mat-cell", 25),
                t.BQk(),
                t.ynx(40, 26),
                t.YNc(41, Vl, 2, 0, "mat-header-cell", 24),
                t.YNc(42, Xl, 3, 1, "mat-cell", 25),
                t.BQk(),
                t.ynx(43, 27),
                t.YNc(44, tc, 2, 0, "mat-header-cell", 24),
                t.YNc(45, ec, 2, 1, "mat-cell", 28),
                t.BQk(),
                t.ynx(46, 29),
                t.YNc(47, nc, 1, 0, "mat-header-cell", 24),
                t.YNc(48, oc, 5, 3, "mat-cell", 25),
                t.BQk(),
                t.YNc(49, ac, 1, 0, "mat-header-row", 30),
                t.YNc(50, ic, 1, 0, "mat-row", 31),
                t.qZA()()()
            }
            if (2 & n) {
                const e = a.$implicit
                  , o = t.oxw(2);
                t.xp6(8),
                t.hij("#", e.orderId, ""),
                t.xp6(5),
                t.hij("", e.totalPrice.toFixed(2), "\xa4"),
                t.xp6(5),
                t.Oqu(e.bonus),
                t.xp6(2),
                t.Q6J("ngIf", !e.delivered),
                t.xp6(1),
                t.Q6J("ngIf", e.delivered),
                t.xp6(2),
                t.s9C("matTooltip", t.lcZ(24, 10, "LABEL_TRACK_ORDER")),
                t.xp6(5),
                t.s9C("matTooltip", t.lcZ(29, 12, "PRINT_ORDER_CONFIRMATION")),
                t.xp6(5),
                t.Q6J("dataSource", e.products),
                t.xp6(16),
                t.Q6J("matHeaderRowDef", o.tableColumns),
                t.xp6(1),
                t.Q6J("matRowDefColumns", o.tableColumns)
            }
        }
        function sc(n, a) {
            if (1 & n && (t.TgZ(0, "div", 4),
            t.YNc(1, rc, 51, 14, "div", 5),
            t.qZA()),
            2 & n) {
                const e = t.oxw();
                t.xp6(1),
                t.Q6J("ngForOf", e.orders)
            }
        }
        function lc(n, a) {
            1 & n && (t.TgZ(0, "mat-card", 39),
            t._UZ(1, "img", 40),
            t.TgZ(2, "mat-card-title")(3, "span", 41),
            t._uU(4, " NO_SEARCH_RESULT "),
            t.qZA()(),
            t.TgZ(5, "mat-card-content")(6, "span", 41),
            t._uU(7, " NO_ORDERS_PLACED "),
            t.qZA()()())
        }
        let cc = (()=>{
            class n {
                constructor(e, o, i, r, l, m) {
                    this.router = e,
                    this.dialog = o,
                    this.orderHistoryService = i,
                    this.basketService = r,
                    this.productService = l,
                    this.ngZone = m,
                    this.tableColumns = ["product", "price", "quantity", "total price", "review"],
                    this.orders = [],
                    this.emptyState = !0
                }
                ngOnInit() {
                    this.orderHistoryService.get().subscribe(e=>{
                        e = e.reverse(),
                        this.emptyState = 0 === e.length;
                        for (const o of e) {
                            const i = [];
                            for (const r of o.products)
                                i.push({
                                    id: r.id,
                                    name: r.name,
                                    price: r.price,
                                    quantity: r.quantity,
                                    total: r.total
                                });
                            this.orders.push({
                                orderId: o.orderId,
                                totalPrice: o.totalPrice,
                                bonus: o.bonus,
                                products: new d.by(i),
                                delivered: o.delivered
                            })
                        }
                    }
                    , e=>{
                        console.log(e)
                    }
                    )
                }
                showDetail(e) {
                    this.productService.get(e).subscribe(o=>{
                        const i = {
                            id: o.id,
                            name: o.name,
                            description: o.description,
                            image: o.image,
                            price: o.price,
                            points: Math.round(o.price / 10)
                        };
                        this.dialog.open(Ae, {
                            width: "500px",
                            height: "max-content",
                            data: {
                                productData: i
                            }
                        })
                    }
                    , o=>{
                        console.log(o)
                    }
                    )
                }
                openConfirmationPDF(e) {
                    window.open(`${this.basketService.hostServer}/ftp/order_${e}.pdf`, "_blank")
                }
                trackOrder(e) {
                    var o = this;
                    this.ngZone.run((0,
                    w.Z)(function*() {
                        return yield o.router.navigate(["/track-result"], {
                            queryParams: {
                                id: e
                            }
                        })
                    }))
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(L.F0),t.Y36(N.uw),t.Y36(pe),t.Y36(X),t.Y36(Lt),t.Y36(t.R0b))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-order-history"]],
                decls: 8,
                vars: 5,
                consts: [[1, "card1"], [1, "mat-card-cvr"], ["fxLayout", "column", "fxLayoutGap", "20px", 4, "ngIf", "ngIfElse"], ["emptyResult", ""], ["fxLayout", "column", "fxLayoutGap", "20px"], [4, "ngFor", "ngForOf"], [1, "table-container", "mat-elevation-z4", "custom-slate"], [1, "heading"], ["fxLayout", "row"], ["fxFlex", "40%", "fxLayout", "column"], ["translate", ""], ["fxFlex", "15%", "fxLayout", "column"], ["fxFlex", "20%"], ["class", "error", "translate", "", 4, "ngIf"], ["class", "confirmation", "translate", "", 4, "ngIf"], ["fxFlex", "5%", "fxLayoutAlign", "end"], ["mat-icon-button", "", "aria-label", "Track Your Order", "matTooltipPosition", "below", 3, "matTooltip", "click"], ["mat-icon-button", "", "aria-label", "Print order confirmation", "matTooltipPosition", "below", 3, "matTooltip", "click"], [1, "border"], [3, "dataSource"], ["matColumnDef", "product"], ["translate", "", "fxFlex", "40%", 4, "matHeaderCellDef"], ["fxFlex", "40%", 4, "matCellDef"], ["matColumnDef", "price"], ["translate", "", "fxFlex", "15%", 4, "matHeaderCellDef"], ["fxFlex", "15%", 4, "matCellDef"], ["matColumnDef", "quantity"], ["matColumnDef", "total price"], ["class", "price-align", "fxFlex", "15%", 4, "matCellDef"], ["matColumnDef", "review"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["translate", "", 1, "error"], ["translate", "", 1, "confirmation"], ["translate", "", "fxFlex", "40%"], ["fxFlex", "40%"], ["translate", "", "fxFlex", "15%"], ["fxFlex", "15%"], ["fxFlex", "15%", 1, "price-align"], [1, "mat-elevation-z6", "emptyState"], ["alt", " No results found", "src", "assets/public/images/products/no-results.png", 1, "img-responsive", "noResult"], ["translate", "", 1, "noResultText"]],
                template: function(e, o) {
                    if (1 & e && (t.TgZ(0, "mat-card", 0)(1, "div", 1)(2, "mat-card-title"),
                    t._uU(3),
                    t.ALo(4, "translate"),
                    t.qZA(),
                    t.YNc(5, sc, 2, 1, "div", 2),
                    t.YNc(6, lc, 8, 0, "ng-template", null, 3, t.W1O),
                    t.qZA()()),
                    2 & e) {
                        const i = t.MAs(7);
                        t.xp6(3),
                        t.hij(" ", t.lcZ(4, 3, "LABEL_ORDER_HISTORY"), " "),
                        t.xp6(2),
                        t.Q6J("ngIf", !o.emptyState)("ngIfElse", i)
                    }
                },
                dependencies: [h.sg, h.O5, u.Pi, p.xw, p.SQ, p.Wh, p.yH, F.Hw, x.lW, d.BZ, d.fO, d.as, d.w1, d.Dz, d.nj, d.ge, d.ev, d.XQ, d.Gk, T.a8, T.dn, T.n5, Q.gM, u.X$],
                styles: [".heading[_ngcontent-%COMP%]{padding:12px 20px}.heading-text[_ngcontent-%COMP%]{justify-content:center;padding:12px 20px}mat-card[_ngcontent-%COMP%]{height:auto;width:80%}.card1[_ngcontent-%COMP%]{border-radius:5px;margin:0 auto;width:80%}.main-wrapper[_ngcontent-%COMP%]{margin-left:10%;margin-right:10%}mat-cell[_ngcontent-%COMP%], mat-footer-cell[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px}.price-align[_ngcontent-%COMP%]{text-align:right}mat-card-title[_ngcontent-%COMP%]{margin-bottom:25px}.border[_ngcontent-%COMP%]{border:.5px solid #f2f2f2}.emptyState[_ngcontent-%COMP%]{display:block;height:auto!important;margin:20px auto;width:50%}.custom-slate[_ngcontent-%COMP%]{border-radius:5px}.noResult[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;width:60%}.noResultText[_ngcontent-%COMP%]{display:block;margin-top:10px;text-align:center}"]
            }),
            n
        }
        )();
        function uc(n, a) {
            if (1 & n && (t.TgZ(0, "div", 22)(1, "h1", 4),
            t._uU(2, "LABEL_DELIVERY_ADDRESS"),
            t.qZA(),
            t.TgZ(3, "div"),
            t._uU(4),
            t.qZA(),
            t.TgZ(5, "div"),
            t._uU(6),
            t.qZA(),
            t.TgZ(7, "div"),
            t._uU(8),
            t.qZA(),
            t.TgZ(9, "div")(10, "span", 4),
            t._uU(11, "PHONE_NUMBER"),
            t.qZA(),
            t._uU(12),
            t.qZA()()),
            2 & n) {
                const e = t.oxw();
                t.xp6(4),
                t.Oqu(null == e.address ? null : e.address.fullName),
                t.xp6(2),
                t.HOy("", null == e.address ? null : e.address.streetAddress, ", ", null == e.address ? null : e.address.city, ", ", null == e.address ? null : e.address.state, ", ", null == e.address ? null : e.address.zipCode, ""),
                t.xp6(2),
                t.Oqu(null == e.address ? null : e.address.country),
                t.xp6(4),
                t.hij(" ", null == e.address ? null : e.address.mobileNum, "")
            }
        }
        function pc(n, a) {
            1 & n && t._UZ(0, "mat-divider", 23)
        }
        function dc(n, a) {
            1 & n && t._UZ(0, "mat-header-cell", 24)
        }
        function mc(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "mat-cell", 24)(1, "mat-radio-button", 25),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.oxw();
                    return t.KtG(l.selectMethod(r.id))
                })("change", function(i) {
                    const l = t.CHM(e).$implicit
                      , m = t.oxw();
                    return t.KtG(i ? m.selection.toggle(l) : null)
                }),
                t.qZA()()
            }
            if (2 & n) {
                const e = a.$implicit
                  , o = t.oxw();
                t.xp6(1),
                t.Q6J("checked", o.selection.isSelected(e))
            }
        }
        function gc(n, a) {
            1 & n && t._UZ(0, "mat-header-cell", 26)
        }
        function hc(n, a) {
            if (1 & n && (t.TgZ(0, "mat-cell", 26),
            t._UZ(1, "i", 27),
            t._uU(2),
            t.qZA()),
            2 & n) {
                const e = a.$implicit;
                t.xp6(1),
                t.Q6J("ngClass", e.icon),
                t.xp6(1),
                t.hij("\xa0", e.name, "")
            }
        }
        function _c(n, a) {
            1 & n && t._UZ(0, "mat-header-cell", 28)
        }
        function fc(n, a) {
            if (1 & n && (t.TgZ(0, "mat-cell", 29),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = a.$implicit;
                t.xp6(1),
                t.hij("", e.price.toFixed(2), "\xa4")
            }
        }
        function Cc(n, a) {
            1 & n && t._UZ(0, "mat-header-cell", 30)
        }
        function vc(n, a) {
            if (1 & n && (t.TgZ(0, "mat-cell", 29),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & n) {
                const e = a.$implicit;
                t.xp6(1),
                t.AsE("", e.eta, " ", t.lcZ(2, 2, "LABEL_DAYS"), "")
            }
        }
        function xc(n, a) {
            1 & n && t._UZ(0, "mat-header-row")
        }
        function bc(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "mat-row", 31),
                t.NdJ("click", function() {
                    const i = t.CHM(e)
                      , r = i.$implicit
                      , l = i.$implicit
                      , m = t.oxw();
                    return m.selection.toggle(r),
                    t.KtG(m.selectMethod(l.id))
                }),
                t.qZA()
            }
        }
        O.vI.add(g.tMT, g.x0v, g.$KU);
        let Tc = (()=>{
            class n {
                constructor(e, o, i, r, l) {
                    this.location = e,
                    this.deliverySerivce = o,
                    this.addressService = i,
                    this.router = r,
                    this.ngZone = l,
                    this.displayedColumns = ["Selection", "Name", "Price", "ETA"],
                    this.deliveryMethodId = void 0,
                    this.selection = new Ie.Ov(!1,[])
                }
                ngOnInit() {
                    this.addressService.getById(sessionStorage.getItem("addressId")).subscribe(e=>{
                        this.address = e
                    }
                    , e=>{
                        console.log(e)
                    }
                    ),
                    this.deliverySerivce.get().subscribe(e=>{
                        console.log(e),
                        this.methods = e,
                        this.dataSource = new d.by(this.methods)
                    }
                    , e=>{
                        console.log(e)
                    }
                    )
                }
                selectMethod(e) {
                    this.deliveryMethodId = this.selection.hasValue() || e ? e : void 0
                }
                routeToPreviousUrl() {
                    this.location.back()
                }
                chooseDeliveryMethod() {
                    var e = this;
                    sessionStorage.setItem("deliveryMethodId", this.deliveryMethodId.toString()),
                    this.ngZone.run((0,
                    w.Z)(function*() {
                        return yield e.router.navigate(["/payment", "shop"])
                    }))
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(h.Ye),t.Y36(Dt),t.Y36(mt),t.Y36(L.F0),t.Y36(t.R0b))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-delivery-method"]],
                decls: 33,
                vars: 9,
                consts: [[1, "mat-elevation-z6"], ["class", "addressCont", 4, "ngIf"], ["class", "detail-divider", 4, "ngIf"], [2, "height", "12px"], ["translate", ""], [3, "dataSource"], ["matColumnDef", "Selection"], ["fxFlex", "20%", 4, "matHeaderCellDef"], ["fxFlex", "20%", 4, "matCellDef"], ["matColumnDef", "Name"], ["fxFlex", "30%", 4, "matHeaderCellDef"], ["fxFlex", "30%", 4, "matCellDef"], ["matColumnDef", "Price"], ["translate", "LABEL_PRICE", "fxFlex", "25%", 4, "matHeaderCellDef"], ["fxFlex", "25%", 4, "matCellDef"], ["matColumnDef", "ETA"], ["translate", "LABEL_EXPECTED_DELIVERY", "fxFlex", "25%", 4, "matHeaderCellDef"], [4, "matHeaderRowDef"], [3, "click", 4, "matRowDef", "matRowDefColumns"], [2, "margin-top", "20px"], ["mat-stroked-button", "", 1, "btn", "btn-return", 3, "click"], ["mat-raised-button", "", "mat-button", "", "color", "primary", "aria-label", "Proceed to delivery method selection", 1, "btn", "nextButton", 3, "disabled", "click"], [1, "addressCont"], [1, "detail-divider"], ["fxFlex", "20%"], [3, "checked", "click", "change"], ["fxFlex", "30%"], [3, "ngClass"], ["translate", "LABEL_PRICE", "fxFlex", "25%"], ["fxFlex", "25%"], ["translate", "LABEL_EXPECTED_DELIVERY", "fxFlex", "25%"], [3, "click"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "mat-card", 0),
                    t.YNc(1, uc, 13, 7, "div", 1),
                    t.YNc(2, pc, 1, 0, "mat-divider", 2),
                    t._UZ(3, "div", 3),
                    t.TgZ(4, "div")(5, "h1", 4),
                    t._uU(6, "LABEL_CHOOSE_A_DELIVERY_SPEED"),
                    t.qZA(),
                    t.TgZ(7, "mat-table", 5),
                    t.ynx(8, 6),
                    t.YNc(9, dc, 1, 0, "mat-header-cell", 7),
                    t.YNc(10, mc, 2, 1, "mat-cell", 8),
                    t.BQk(),
                    t.ynx(11, 9),
                    t.YNc(12, gc, 1, 0, "mat-header-cell", 10),
                    t.YNc(13, hc, 3, 2, "mat-cell", 11),
                    t.BQk(),
                    t.ynx(14, 12),
                    t.YNc(15, _c, 1, 0, "mat-header-cell", 13),
                    t.YNc(16, fc, 2, 1, "mat-cell", 14),
                    t.BQk(),
                    t.ynx(17, 15),
                    t.YNc(18, Cc, 1, 0, "mat-header-cell", 16),
                    t.YNc(19, vc, 3, 4, "mat-cell", 14),
                    t.BQk(),
                    t.YNc(20, xc, 1, 0, "mat-header-row", 17),
                    t.YNc(21, bc, 1, 0, "mat-row", 18),
                    t.qZA()(),
                    t.TgZ(22, "div", 19)(23, "button", 20),
                    t.NdJ("click", function() {
                        return o.routeToPreviousUrl()
                    }),
                    t.TgZ(24, "mat-icon"),
                    t._uU(25, " navigate_before "),
                    t.qZA(),
                    t._uU(26),
                    t.ALo(27, "translate"),
                    t.qZA(),
                    t.TgZ(28, "button", 21),
                    t.NdJ("click", function() {
                        return o.chooseDeliveryMethod()
                    }),
                    t.TgZ(29, "mat-icon"),
                    t._uU(30, " navigate_next "),
                    t.qZA(),
                    t.TgZ(31, "span", 4),
                    t._uU(32, "LABEL_CONTINUE"),
                    t.qZA()()()()),
                    2 & e && (t.xp6(1),
                    t.Q6J("ngIf", o.address),
                    t.xp6(1),
                    t.Q6J("ngIf", o.address),
                    t.xp6(5),
                    t.Q6J("dataSource", o.dataSource),
                    t.xp6(13),
                    t.Q6J("matHeaderRowDef", o.displayedColumns),
                    t.xp6(1),
                    t.Q6J("matRowDefColumns", o.displayedColumns),
                    t.xp6(5),
                    t.hij(" ", t.lcZ(27, 7, "LABEL_BACK"), " "),
                    t.xp6(2),
                    t.Q6J("disabled", void 0 === o.deliveryMethodId))
                },
                dependencies: [h.mk, h.O5, u.Pi, p.yH, $.oO, F.Hw, x.lW, d.BZ, d.fO, d.as, d.w1, d.Dz, d.nj, d.ge, d.ev, d.XQ, d.Gk, T.a8, z.d, nt.U0, u.X$],
                styles: ["mat-card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}.addressCont[_ngcontent-%COMP%]{margin-bottom:12px}.detail-divider[_ngcontent-%COMP%]{border-top-width:4px!important;margin-left:1%!important;width:98%!important}.btn-return[_ngcontent-%COMP%]{display:block;margin-left:0;margin-right:auto}.nextButton[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:0;margin-top:-37px}"]
            }),
            n
        }
        )();
        var Ac = c(6498);
        const yc = n=>{
            if ("string" == typeof n.value)
                return (0,
                Et.of)(null);
            const a = n.value
              , e = new FileReader;
            return new Ac.y(i=>{
                e.addEventListener("loadend", ()=>{
                    const r = new Uint8Array(e.result).subarray(0, 4);
                    let l = ""
                      , m = !1;
                    for (let v = 0; v < r.length; v++)
                        l += r[v].toString(16);
                    switch (l) {
                    case "89504e47":
                    case "ffd8ffe0":
                    case "ffd8ffe1":
                    case "ffd8ffe2":
                    case "ffd8ffe3":
                    case "ffd8ffe8":
                        m = !0;
                        break;
                    default:
                        m = !1
                    }
                    i.next(m ? null : {
                        invalidMimeType: !0
                    }),
                    i.complete()
                }
                ),
                e.readAsArrayBuffer(a)
            }
            )
        }
        ;
        let Qe = (()=>{
            class n {
                constructor(e) {
                    this.http = e,
                    this.hostServer = P.N.hostServer,
                    this.host = this.hostServer + "/rest/memories"
                }
                addMemory(e, o) {
                    const i = new FormData;
                    return i.append("image", o, e),
                    i.append("caption", e),
                    this.http.post(this.host, i).pipe((0,
                    C.U)(r=>r.data), (0,
                    _.K)(r=>{
                        throw r
                    }
                    ))
                }
                get() {
                    return this.http.get(this.host + "/").pipe((0,
                    C.U)(e=>e.data), (0,
                    _.K)(e=>{
                        throw e
                    }
                    ))
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.LFG(U.eN))
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )();
        function Zc(n, a) {
            if (1 & n && (t.TgZ(0, "a", 10)(1, "button", 11),
            t._UZ(2, "i", 12),
            t.qZA()()),
            2 & n) {
                const e = t.oxw().$implicit
                  , o = t.oxw(2);
                t.hYB("href", "https://twitter.com/intent/tweet?text=", e.caption, " ", o.twitterHandle, "&hashtags=appsec", t.LSH)
            }
        }
        function wc(n, a) {
            if (1 & n && (t.TgZ(0, "span", 6),
            t._UZ(1, "img", 7),
            t.TgZ(2, "div", 8)(3, "div"),
            t._uU(4),
            t.qZA(),
            t.YNc(5, Zc, 3, 2, "a", 9),
            t.qZA()()),
            2 & n) {
                const e = a.$implicit
                  , o = t.oxw(2);
                t.xp6(1),
                t.s9C("src", e.url, t.LSH),
                t.s9C("alt", e.caption),
                t.xp6(3),
                t.Oqu(e.caption),
                t.xp6(1),
                t.Q6J("ngIf", o.twitterHandle)
            }
        }
        function Sc(n, a) {
            if (1 & n && (t.TgZ(0, "div", 4),
            t.YNc(1, wc, 6, 4, "span", 5),
            t.qZA()),
            2 & n) {
                const e = t.oxw();
                t.xp6(1),
                t.Q6J("ngForOf", e.slideshowDataSource)
            }
        }
        function kc(n, a) {
            1 & n && (t.TgZ(0, "mat-card", 13),
            t._UZ(1, "img", 14),
            t.TgZ(2, "mat-card-title")(3, "span", 15),
            t._uU(4, " NO_SEARCH_RESULT "),
            t.qZA()(),
            t.TgZ(5, "mat-card-content")(6, "span", 15),
            t._uU(7, " EMPTY_MEMORY_LIST "),
            t.qZA()()())
        }
        function Ic(n, a) {
            if (1 & n && (t.TgZ(0, "div", 28),
            t._UZ(1, "img", 29),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Q6J("src", e.imagePreview, t.LSH)("alt", e.form.value.caption)
            }
        }
        function Oc(n, a) {
            1 & n && (t.TgZ(0, "mat-error", 17),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & n && (t.xp6(1),
            t.Oqu(t.lcZ(2, 1, "MANDATORY_CAPTION")))
        }
        function Uc(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "div")(1, "div", 16)(2, "h2", 17),
                t._uU(3, "LABEL_SHARE_A_MEMORY"),
                t.qZA(),
                t.TgZ(4, "form", 18)(5, "div")(6, "button", 19),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.MAs(10);
                    return t.KtG(i.click())
                }),
                t._uU(7),
                t.ALo(8, "translate"),
                t.qZA(),
                t.TgZ(9, "input", 20, 21),
                t.NdJ("change", function(i) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.onImagePicked(i))
                }),
                t.qZA()(),
                t.YNc(11, Ic, 2, 2, "div", 22),
                t.TgZ(12, "mat-form-field", 23)(13, "mat-label", 17),
                t._uU(14, "LABEL_CAPTION"),
                t.qZA(),
                t._UZ(15, "input", 24),
                t.YNc(16, Oc, 3, 3, "mat-error", 25),
                t.qZA(),
                t.TgZ(17, "button", 26),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.save())
                }),
                t.TgZ(18, "i", 27),
                t._uU(19, " send "),
                t.qZA(),
                t._uU(20),
                t.ALo(21, "translate"),
                t.qZA()()()()
            }
            if (2 & n) {
                const e = t.oxw();
                t.xp6(4),
                t.Q6J("formGroup", e.form),
                t.xp6(3),
                t.hij("", t.lcZ(8, 6, "LABEL_PICK_IMAGE"), " "),
                t.xp6(4),
                t.Q6J("ngIf", "" !== e.imagePreview && e.imagePreview && e.form.get("image").valid),
                t.xp6(5),
                t.Q6J("ngIf", e.form.get("caption").invalid),
                t.xp6(1),
                t.Q6J("disabled", e.form.get("image").invalid || e.form.get("caption").invalid),
                t.xp6(3),
                t.hij(" ", t.lcZ(21, 8, "BTN_SUBMIT"), " ")
            }
        }
        O.vI.add(Z.mdU);
        let Lc = (()=>{
            class n {
                constructor(e, o, i) {
                    this.photoWallService = e,
                    this.configurationService = o,
                    this.snackBarHelperService = i,
                    this.emptyState = !0,
                    this.form = new s.nJ({
                        image: new s.p4("",{
                            validators: [s.kI.required],
                            asyncValidators: [yc]
                        }),
                        caption: new s.p4("",[s.kI.required])
                    }),
                    this.slideshowDataSource = [],
                    this.twitterHandle = null
                }
                ngOnInit() {
                    this.slideshowDataSource = [],
                    this.photoWallService.get().subscribe(e=>{
                        this.emptyState = 0 === e.length;
                        for (const o of e)
                            o.User?.username && (o.caption = `${o.caption} (\xa9 ${o.User.username})`),
                            this.slideshowDataSource.push({
                                url: o.imagePath,
                                caption: o.caption
                            })
                    }
                    , e=>{
                        console.log(e)
                    }
                    ),
                    this.configurationService.getApplicationConfiguration().subscribe(e=>{
                        e?.application?.social && e.application.social.twitterUrl && (this.twitterHandle = e.application.social.twitterUrl.replace("https://twitter.com/", "@"))
                    }
                    , e=>{
                        console.log(e)
                    }
                    )
                }
                onImagePicked(e) {
                    const o = e.target.files[0];
                    this.form.patchValue({
                        image: o
                    }),
                    this.form.get("image").updateValueAndValidity();
                    const i = new FileReader;
                    i.onload = ()=>{
                        this.imagePreview = i.result
                    }
                    ,
                    i.readAsDataURL(o)
                }
                save() {
                    this.photoWallService.addMemory(this.form.value.caption, this.form.value.image).subscribe(()=>{
                        this.resetForm(),
                        this.ngOnInit(),
                        this.snackBarHelperService.open("IMAGE_UPLOAD_SUCCESS", "confirmBar")
                    }
                    , e=>{
                        this.snackBarHelperService.open(e.error?.error, "errorBar"),
                        console.log(e)
                    }
                    )
                }
                isLoggedIn() {
                    return localStorage.getItem("token")
                }
                resetForm() {
                    this.form.get("image").setValue(""),
                    this.form.get("image").markAsPristine(),
                    this.form.get("image").markAsUntouched(),
                    this.form.get("caption").setValue(""),
                    this.form.get("caption").markAsPristine(),
                    this.form.get("caption").markAsUntouched(),
                    this.form.get("caption").setErrors(null)
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(Qe),t.Y36(b.e),t.Y36(J.H))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-photo-wall"]],
                decls: 9,
                vars: 6,
                consts: [[1, "heading", "mat-elevation-z6", "mat-own-card", 2, "margin-bottom", "10px"], ["class", "grid", 4, "ngIf", "ngIfElse"], ["emptyResult", ""], [4, "ngIf"], [1, "grid"], ["class", "container mat-elevation-z6", 4, "ngFor", "ngForOf"], [1, "container", "mat-elevation-z6"], [1, "image", 3, "src", "alt"], [1, "overlay"], ["target", "_blank", 3, "href", 4, "ngIf"], ["target", "_blank", 3, "href"], ["mat-icon-button", "", "aria-label", "Tweet"], [1, "fab", "fa-twitter", "fa-lg"], [1, "mat-elevation-z0", "emptyState"], ["alt", " No results found", "src", "assets/public/images/products/no-results.png", 1, "img-responsive", "noResult"], ["translate", "", 1, "noResultText"], [2, "margin-top", "10px"], ["translate", ""], ["enctype", "multipart/form-data", 3, "formGroup"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["type", "file", "name", "file", 3, "change"], ["filePicker", ""], ["class", "image-preview", 4, "ngIf"], ["appearance", "outline", "color", "accent"], ["formControlName", "caption", "type", "text", "matInput", ""], ["translate", "", 4, "ngIf"], ["id", "submitButton", "mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [1, "material-icons"], [1, "image-preview"], [3, "src", "alt"]],
                template: function(e, o) {
                    if (1 & e && (t.TgZ(0, "mat-card", 0)(1, "h1"),
                    t._uU(2),
                    t.ALo(3, "translate"),
                    t.qZA(),
                    t.TgZ(4, "div"),
                    t.YNc(5, Sc, 2, 1, "div", 1),
                    t.qZA(),
                    t.YNc(6, kc, 8, 0, "ng-template", null, 2, t.W1O),
                    t.YNc(8, Uc, 22, 10, "div", 3),
                    t.qZA()),
                    2 & e) {
                        const i = t.MAs(7);
                        t.xp6(2),
                        t.Oqu(t.lcZ(3, 4, "LABEL_PHOTO_WALL")),
                        t.xp6(3),
                        t.Q6J("ngIf", !o.emptyState)("ngIfElse", i),
                        t.xp6(3),
                        t.Q6J("ngIf", o.isLoggedIn())
                    }
                },
                dependencies: [h.sg, h.O5, u.Pi, s._Y, s.Fj, s.JJ, s.JL, s.sg, s.u, f.TO, f.KE, f.hX, x.lW, T.a8, T.dn, T.n5, B.Nt, u.X$],
                styles: ["mat-form-field[_ngcontent-%COMP%]{width:100%}.mat-own-card[_ngcontent-%COMP%]{display:block;margin-left:10%;margin-right:10%}#submitButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:10px;width:60%}input[type=file][_ngcontent-%COMP%]{visibility:hidden}.image-preview[_ngcontent-%COMP%]{height:5rem;margin:1rem 0}.image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%}.heading-main[_ngcontent-%COMP%]{font-size:x-large;justify-content:center}.main-wrapper[_ngcontent-%COMP%]{margin-left:10%;margin-right:10%}.grid[_ngcontent-%COMP%]{align-items:center;display:grid;grid-gap:20px;grid-template-columns:repeat(auto-fill,minmax(300px,1fr))}.grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:4px;box-shadow:2px 2px 6px #0000004d;max-width:100%}.container[_ngcontent-%COMP%]{position:relative}.image[_ngcontent-%COMP%]{display:block}.overlay[_ngcontent-%COMP%]{bottom:0;font-size:20px;left:0;opacity:0;padding:20px;position:absolute;right:0;text-align:center;transition:.5s ease}.container[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%]{opacity:1}.emptyState[_ngcontent-%COMP%]{display:block;height:auto!important;margin:20px auto;width:50%}.noResult[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;width:60%}.noResultText[_ngcontent-%COMP%]{display:block;margin-top:10px;text-align:center}.tweet-logo[_ngcontent-%COMP%]{height:24px}"]
            }),
            n
        }
        )();
        function Pc(n, a) {
            if (1 & n && (t.TgZ(0, "div", 22)(1, "div", 23)(2, "p", 24),
            t._uU(3),
            t.qZA()()()),
            2 & n) {
                const e = t.oxw();
                t.xp6(3),
                t.Oqu(e.error)
            }
        }
        function Nc(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "div")(1, "div", 14),
                t._uU(2),
                t.qZA(),
                t.TgZ(3, "div", 14)(4, "button", 25),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.upgradeToDeluxe())
                }),
                t.TgZ(5, "span", 13),
                t._uU(6, "LABEL_BECOME_MEMBER"),
                t.qZA()()()()
            }
            if (2 & n) {
                const e = t.oxw();
                t.xp6(2),
                t.hij(" ", e.membershipCost, "\xa4 ")
            }
        }
        const Ec = function(n) {
            return {
                appname: n
            }
        };
        let Mc = (()=>{
            class n {
                constructor(e, o, i, r, l, m, v) {
                    this.router = e,
                    this.userService = o,
                    this.cookieService = i,
                    this.configurationService = r,
                    this.route = l,
                    this.ngZone = m,
                    this.io = v,
                    this.membershipCost = 0,
                    this.error = void 0,
                    this.applicationName = "OWASP Juice Shop",
                    this.logoSrc = "assets/public/images/JuiceShop_Logo.png"
                }
                ngOnInit() {
                    this.configurationService.getApplicationConfiguration().subscribe(e=>{
                        const o = this.route.snapshot.queryParams.testDecal;
                        if (e?.application && (e.application.name && (this.applicationName = e.application.name),
                        e.application.logo)) {
                            let i = e.application.logo;
                            "http" === i.substring(0, 4) && (i = decodeURIComponent(i.substring(i.lastIndexOf("/") + 1))),
                            this.logoSrc = `assets/public/images/${o || i}`
                        }
                        o && this.ngZone.runOutsideAngular(()=>{
                            this.io.socket().emit("verifySvgInjectionChallenge", o)
                        }
                        )
                    }
                    , e=>{
                        console.log(e)
                    }
                    ),
                    this.userService.deluxeStatus().subscribe(e=>{
                        this.membershipCost = e.membershipCost
                    }
                    , e=>{
                        this.error = e.error.error
                    }
                    )
                }
                upgradeToDeluxe() {
                    var e = this;
                    this.ngZone.run((0,
                    w.Z)(function*() {
                        return yield e.router.navigate(["/payment", "deluxe"])
                    }))
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(L.F0),t.Y36(R),t.Y36(I.N_),t.Y36(b.e),t.Y36(L.gz),t.Y36(t.R0b),t.Y36(st))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-deluxe-user"]],
                decls: 50,
                vars: 10,
                consts: [["fxLayout", "column", "fxLayoutGap", "10px", 1, "main-wrapper"], ["class", "heading mat-elevation-z6", 4, "ngIf"], [1, "mat-elevation-z6", "deluxe-membership"], ["fxFlexAlign", "center", "fxFlex", "30%", 1, "img-container"], ["viewBox", "0 0 720 720", "xmlns", "http://www.w3.org/2000/svg"], ["href", "assets/public/images/deluxe/blankBoxes.png", "x", "0", "y", "0", "height", "720", "width", "720"], ["x", "260", "y", "130", "height", "50"], ["x", "230", "y", "330", "height", "70"], ["x", "70", "y", "355", "height", "40"], ["x", "120", "y", "450", "height", "55"], ["x", "500", "y", "410", "height", "45"], ["fxFlexAlign", "center", "fxFlex", "60%"], [1, "item-name"], ["translate", ""], [1, "item-description"], ["translate", "", 3, "translateParams"], [4, "ngIf"], ["fxLayout", "row", "fxLayoutGap", "10px", "fxLayout.lt-md", "column"], ["fxFlex", "33.33%", 1, "mat-elevation-z6"], ["fxFlexAlign", "center", "fxFlex", "40%", 1, "img-container"], [1, "img-responsive", "img-thumbnail", 2, "transform", "scale(3)"], ["translate", "", 1, "item-description"], [1, "heading", "mat-elevation-z6"], [2, "margin-top", "5px"], [1, "error"], ["aria-label", "Add to Basket", "color", "primary", "mat-button", "", "mat-raised-button", "", 1, "btn-member", 3, "click"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "div", 0),
                    t.YNc(1, Pc, 4, 1, "div", 1),
                    t.TgZ(2, "mat-card", 2)(3, "div", 3),
                    t.O4$(),
                    t.TgZ(4, "svg", 4),
                    t._UZ(5, "image", 5)(6, "image", 6)(7, "image", 7)(8, "image", 8)(9, "image", 9)(10, "image", 10),
                    t.qZA()(),
                    t.kcU(),
                    t.TgZ(11, "div", 11)(12, "div", 12)(13, "b", 13),
                    t._uU(14, "LABEL_DELUXE_MEMBERSHIP"),
                    t.qZA()(),
                    t.TgZ(15, "div", 14)(16, "span", 15),
                    t._uU(17, "DESCRIPTION_DELUXE_MEMBERSHIP"),
                    t.qZA()(),
                    t.YNc(18, Nc, 7, 1, "div", 16),
                    t.qZA()(),
                    t.TgZ(19, "div", 17)(20, "mat-card", 18)(21, "div", 19)(22, "mat-icon", 20),
                    t._uU(23, " slideshow "),
                    t.qZA()(),
                    t.TgZ(24, "div", 11)(25, "div", 12)(26, "b", 13),
                    t._uU(27, "LABEL_DEALS_OFFERS"),
                    t.qZA()(),
                    t.TgZ(28, "div", 21),
                    t._uU(29, " DESCRIPTION_DEALS_OFFERS "),
                    t.qZA()()(),
                    t.TgZ(30, "mat-card", 18)(31, "div", 19)(32, "mat-icon", 20),
                    t._uU(33, " directions_car "),
                    t.qZA()(),
                    t.TgZ(34, "div", 11)(35, "div", 12)(36, "b", 13),
                    t._uU(37, "LABEL_FREE_FAST_DELIVERY"),
                    t.qZA()(),
                    t.TgZ(38, "div", 21),
                    t._uU(39, " DESCRIPTION_FREE_FAST_DELIVERY "),
                    t.qZA()()(),
                    t.TgZ(40, "mat-card", 18)(41, "div", 19)(42, "mat-icon", 20),
                    t._uU(43, " add "),
                    t.qZA()(),
                    t.TgZ(44, "div", 11)(45, "div", 12)(46, "b", 13),
                    t._uU(47, "LABEL_UNLIMITED_PURCHASE"),
                    t.qZA()(),
                    t.TgZ(48, "div", 21),
                    t._uU(49, " DESCRIPTION_UNLIMITED_PURCHASE "),
                    t.qZA()()()()()),
                    2 & e && (t.xp6(1),
                    t.Q6J("ngIf", o.error),
                    t.xp6(5),
                    t.uIk("href", o.logoSrc),
                    t.xp6(1),
                    t.uIk("href", o.logoSrc),
                    t.xp6(1),
                    t.uIk("href", o.logoSrc),
                    t.xp6(1),
                    t.uIk("href", o.logoSrc),
                    t.xp6(1),
                    t.uIk("href", o.logoSrc),
                    t.xp6(6),
                    t.Q6J("translateParams", t.VKq(8, Ec, o.applicationName)),
                    t.xp6(2),
                    t.Q6J("ngIf", !o.error))
                },
                dependencies: [h.O5, u.Pi, p.xw, p.SQ, p.XD, p.yH, F.Hw, x.lW, T.a8],
                styles: [".heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);font-size:x-large;justify-content:center;padding:12px 20px}.main-wrapper[_ngcontent-%COMP%]{margin-left:10%;margin-right:10%}.img-thumbnail[_ngcontent-%COMP%]{background:none;border:0;margin-left:20px}.btn-member[_ngcontent-%COMP%]{bottom:10%}.item-description[_ngcontent-%COMP%]{font-size:initial;margin-top:12px;text-align:center}.item-name[_ngcontent-%COMP%]{font-size:large;text-align:center}"]
            }),
            n
        }
        )();
        var He = c(5376);
        function Dc(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "div")(1, "div")(2, "mat-card-title", 5),
                t._uU(3, "TITLE_SBT"),
                t.qZA()(),
                t.TgZ(4, "form", 6),
                t.NdJ("ngSubmit", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.submitForm())
                }),
                t.TgZ(5, "div", 7)(6, "mat-form-field", 8)(7, "mat-label", 5),
                t._uU(8, "LABEL_PRIVATE_KEY"),
                t.qZA(),
                t.TgZ(9, "input", 9),
                t.NdJ("ngModelChange", function(i) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.privateKey = i)
                }),
                t.qZA()(),
                t.TgZ(10, "h5", 10),
                t._uU(11),
                t.qZA()(),
                t.TgZ(12, "button", 11),
                t._uU(13, " BTN_AUTHENTICATE "),
                t.qZA()()()
            }
            if (2 & n) {
                const e = t.oxw();
                t.xp6(9),
                t.Q6J("ngModel", e.privateKey),
                t.xp6(2),
                t.Oqu(e.errorMessage)
            }
        }
        function qc(n, a) {
            1 & n && (t.TgZ(0, "div")(1, "div")(2, "mat-card-title", 5),
            t._uU(3, "TITLE_SBT"),
            t.qZA()(),
            t.TgZ(4, "div", 12),
            t._uU(5),
            t.ALo(6, "translate"),
            t.TgZ(7, "a", 13),
            t._uU(8, "8343D2"),
            t.qZA()(),
            t._UZ(9, "mat-divider", 14),
            t.TgZ(10, "div", 15)(11, "div", 16),
            t._uU(12, "LABEL_ACCOUNT_ADDRESS"),
            t.qZA(),
            t._UZ(13, "mat-divider", 14),
            t.TgZ(14, "p", 17),
            t._uU(15, "0x8343d2eb2B13A2495De435a1b15e85b98115Ce05"),
            t.qZA()(),
            t.TgZ(16, "div", 15)(17, "div", 16),
            t._uU(18, "LABEL_DESCRIPTION"),
            t.qZA(),
            t._UZ(19, "mat-divider", 14),
            t.TgZ(20, "p", 17),
            t._uU(21, " {{'NFT_SBT_BOX_TEXT' | translate: { link: '"),
            t.TgZ(22, "a", 18),
            t._uU(23, "Opensea"),
            t.qZA(),
            t._uU(24, "' } }} "),
            t.qZA()()()),
            2 & n && (t.xp6(5),
            t.hij(" ", t.lcZ(6, 1, "OWNED_BY"), " "))
        }
        let Fc = (()=>{
            class n {
                constructor(e) {
                    this.keysService = e,
                    this.formSubmitted = !1,
                    this.successResponse = !1,
                    this.errorMessage = ""
                }
                ngOnInit() {
                    this.checkChallengeStatus()
                }
                checkChallengeStatus() {
                    this.keysService.nftUnlocked().subscribe(e=>{
                        this.successResponse = e.status
                    }
                    , e=>{
                        console.error(e),
                        this.successResponse = !1
                    }
                    )
                }
                submitForm() {
                    this.formSubmitted = !0,
                    this.keysService.submitKey(this.privateKey).subscribe(e=>{
                        e.success ? (this.successResponse = !0,
                        this.errorMessage = e.message) : this.successResponse = !1
                    }
                    , e=>{
                        this.successResponse = !1,
                        this.errorMessage = e.error.message
                    }
                    )
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(He.t))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-nft-unlock"]],
                decls: 9,
                vars: 2,
                consts: [["fxLayout", "column", "fxLayoutGap", "20px", 1, "container"], ["mat-raised-button", "", "color", "warn", "fxFlexAlign", "center", "translate", "", 1, "detail-container", "offer-container", "warning-container"], ["fxFlexAlign", "center", "fxLayout", "row", "fxLayout.lt-lg", "column", 1, "detail-container", "offer-container"], ["src", "assets/public/images/products/juicy_chatbot.jpg"], [4, "ngIf"], ["translate", ""], [3, "ngSubmit"], [1, "form-group"], ["color", "accent", "appearance", "outline", 2, "width", "350px"], ["matInput", "", "id", "privateKey", "name", "privateKey", "required", "", "type", "text", "aria-label", "Text field for the private key", 3, "ngModel", "ngModelChange"], [1, "error"], ["type", "submit", "mat-raised-button", "", "color", "accent", "translate", "", 1, "btn", "btn-primary"], [1, "owner-text"], ["target", "_blank", "href", "https://testnets.opensea.io/0x8343d2eb2B13A2495De435a1b15e85b98115Ce05"], [1, "detail-divider"], [1, "detail-box", "mat-elevation-z6"], ["translate", "", 1, "box-title"], [1, "box-text"], ["target", "_blank", "href", "https://testnets.opensea.io/assets/mumbai/0xf4817631372dca68a25a18eb7a0b36d54f3dbcf7/0"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "mat-card")(1, "div", 0)(2, "button", 1),
                    t._uU(3, " BTN_SBT_NOTE "),
                    t.qZA(),
                    t.TgZ(4, "div", 2)(5, "div"),
                    t._UZ(6, "img", 3),
                    t.qZA(),
                    t.YNc(7, Dc, 14, 2, "div", 4),
                    t.YNc(8, qc, 25, 3, "div", 4),
                    t.qZA()()()),
                    2 & e && (t.xp6(7),
                    t.Q6J("ngIf", !o.successResponse),
                    t.xp6(1),
                    t.Q6J("ngIf", o.successResponse))
                },
                dependencies: [h.O5, u.Pi, p.xw, p.SQ, p.XD, s._Y, s.Fj, s.JJ, s.JL, s.Q7, s.On, s.F, f.KE, f.hX, x.lW, T.a8, T.n5, B.Nt, z.d, u.X$],
                styles: [".container[_ngcontent-%COMP%]{justify-content:center}.heading[_ngcontent-%COMP%]{justify-content:center;margin-bottom:10px;padding:12px 20px}.detail-container.offer-container[_ngcontent-%COMP%]{display:flex;gap:16px;max-width:700px;min-width:300px;width:70%}.owner-text[_ngcontent-%COMP%]{margin-bottom:10px}.warning-container[_ngcontent-%COMP%]{border-radius:4px;font-weight:600;justify-content:center;padding:16px;text-align:center;white-space:normal}.title[_ngcontent-%COMP%]{padding-bottom:27px}.text-justify[_ngcontent-%COMP%]{text-align:justify}mat-card[_ngcontent-%COMP%]{margin-bottom:10px}mat-card[_ngcontent-%COMP%]:nth-child(1){border-radius:5px;margin:0 auto;width:80%}.detail-box[_ngcontent-%COMP%]{margin-bottom:16px;padding:16px}.box-title[_ngcontent-%COMP%]{font-size:16px;font-weight:500}.box-text[_ngcontent-%COMP%]{margin-top:8px;overflow-wrap:break-word}.form-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-top:16px;width:100%}"]
            }),
            n
        }
        )();
        var Bc = c(3426);
        const qt = Object.freeze({
            categories: [],
            difficulties: [],
            tags: [],
            status: null,
            searchQuery: null,
            showDisabledChallenges: !0,
            restrictToTutorialChallengesFirst: !1
        });
        function Ge(n) {
            return {
                searchQuery: n.searchQuery || void 0,
                difficulties: n.difficulties.join(",") || void 0,
                status: n.status || void 0,
                tags: n.tags.join(",") || void 0,
                categories: n.categories.join(",") || void 0,
                showDisabledChallenges: n.showDisabledChallenges ? void 0 : "false"
            }
        }
        var je = c(7163)
          , We = c(1572)
          , Ke = c(1096);
        function Hc(n, a) {
            1 & n && (t.ynx(0),
            t.O4$(),
            t.TgZ(1, "svg", 1),
            t._UZ(2, "path", 2),
            t.qZA(),
            t.BQk())
        }
        const Gc = function() {
            return []
        };
        let ze = (()=>{
            class n {
            }
            return n.\u0275fac = function(e) {
                return new (e || n)
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["difficulty-stars"]],
                inputs: {
                    difficulty: "difficulty"
                },
                decls: 1,
                vars: 2,
                consts: [[4, "ngFor", "ngForOf"], ["width", "18", "height", "18", "viewBox", "0 0 14 13", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M6.56386 0.511963L8.10332 5.24992H13.0851L9.05475 8.17813L10.5942 12.9161L6.56386 9.98787L2.53352 12.9161L4.07297 8.17813L0.0426283 5.24992H5.02441L6.56386 0.511963Z", "fill", "var(--theme-text)"]],
                template: function(e, o) {
                    1 & e && t.YNc(0, Hc, 3, 0, "ng-container", 0),
                    2 & e && t.Q6J("ngForOf", t.DdM(1, Gc).constructor(o.difficulty))
                },
                dependencies: [h.sg],
                styles: ["[_nghost-%COMP%]{display:flex}"]
            }),
            n
        }
        )();
        const jc = function(n) {
            return {
                env: n
            }
        };
        function Wc(n, a) {
            if (1 & n && (t.TgZ(0, "button", 12),
            t.ALo(1, "translate"),
            t.TgZ(2, "mat-icon"),
            t._uU(3, "info_outline"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw();
                t.Q6J("matTooltip", t.xi3(1, 3, "CHALLENGE_UNAVAILABLE", t.VKq(6, jc, e.challenge.disabledEnv))),
                t.xp6(2),
                t.Udp("color", "var(--theme-warn)")
            }
        }
        function Kc(n, a) {
            if (1 & n && (t.TgZ(0, "span", 15),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.hij("", e.challenge.codingChallengeStatus, "/2")
            }
        }
        const zc = function(n, a) {
            return {
                "partially-completed": n,
                completed: a
            }
        };
        function $c(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "button", 13),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.openCodingChallengeDialog(i.challenge.key))
                }),
                t.ALo(1, "translate"),
                t.YNc(2, Kc, 2, 1, "span", 14),
                t.TgZ(3, "mat-icon"),
                t._uU(4, "code"),
                t.qZA()()
            }
            if (2 & n) {
                const e = t.oxw();
                t.Q6J("disabled", !1 === e.challenge.solved)("ngClass", t.WLB(6, zc, 1 === e.challenge.codingChallengeStatus, 2 === e.challenge.codingChallengeStatus))("matTooltip", t.lcZ(1, 4, e.challenge.solved ? "LAUNCH_CODING_CHALLENGE" : "SOLVE_HACKING_CHALLENGE")),
                t.xp6(2),
                t.Q6J("ngIf", 0 !== e.challenge.codingChallengeStatus)
            }
        }
        function Vc(n, a) {
            if (1 & n && (t.TgZ(0, "a", 16),
            t.ALo(1, "translate"),
            t.TgZ(2, "mat-icon"),
            t._uU(3, "policy_outline"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw();
                t.Q6J("href", e.challenge.mitigationUrl, t.LSH)("matTooltip", t.lcZ(1, 2, "INFO_VULNERABILITY_MITIGATION_LINK"))
            }
        }
        const Xc = function(n) {
            return {
                completed: n
            }
        };
        function tu(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "button", 17),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.repeatChallengeNotification(i.challenge.key))
                }),
                t.ALo(1, "translate"),
                t.TgZ(2, "mat-icon"),
                t._uU(3, "flag_outline"),
                t.qZA()()
            }
            if (2 & n) {
                const e = t.oxw();
                t.Q6J("ngClass", t.VKq(4, Xc, e.challenge.solved))("matTooltip", t.lcZ(1, 2, "NOTIFICATION_RESEND_INSTRUCTIONS"))
            }
        }
        let eu = (()=>{
            class n {
                constructor() {
                    this.hasInstructions = Ke.hasInstructions,
                    this.startHackingInstructorFor = Ke.startHackingInstructorFor
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["challenge-card"]],
                inputs: {
                    challenge: "challenge",
                    openCodingChallengeDialog: "openCodingChallengeDialog",
                    repeatChallengeNotification: "repeatChallengeNotification",
                    applicationConfiguration: "applicationConfiguration"
                },
                decls: 14,
                vars: 8,
                consts: [[1, "category-row"], [1, "name-row"], [1, "dot"], [1, "name"], [3, "difficulty"], [1, "description-row", 3, "innerHtml"], [1, "bottom-row"], [1, "badge-group"], ["class", "badge", 3, "matTooltip", 4, "ngIf"], ["class", "badge", 3, "disabled", "ngClass", "matTooltip", "click", 4, "ngIf"], ["class", "badge not-completable", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Vulnerability mitigation link", 3, "href", "matTooltip", 4, "ngIf"], ["class", "badge", 3, "ngClass", "matTooltip", "click", 4, "ngIf"], [1, "badge", 3, "matTooltip"], [1, "badge", 3, "disabled", "ngClass", "matTooltip", "click"], ["class", "badge-status", 4, "ngIf"], [1, "badge-status"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Vulnerability mitigation link", 1, "badge", "not-completable", 3, "href", "matTooltip"], [1, "badge", 3, "ngClass", "matTooltip", "click"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "span", 0),
                    t._uU(1),
                    t.qZA(),
                    t.TgZ(2, "div", 1),
                    t._UZ(3, "div", 2),
                    t.TgZ(4, "span", 3),
                    t._uU(5),
                    t.qZA(),
                    t._UZ(6, "difficulty-stars", 4),
                    t.qZA(),
                    t._UZ(7, "div", 5),
                    t.TgZ(8, "div", 6)(9, "div", 7),
                    t.YNc(10, Wc, 4, 8, "button", 8),
                    t.YNc(11, $c, 5, 9, "button", 9),
                    t.YNc(12, Vc, 4, 4, "a", 10),
                    t.YNc(13, tu, 4, 6, "button", 11),
                    t.qZA()()),
                    2 & e && (t.xp6(1),
                    t.Oqu(o.challenge.category),
                    t.xp6(4),
                    t.Oqu(o.challenge.name),
                    t.xp6(1),
                    t.Q6J("difficulty", o.challenge.difficulty),
                    t.xp6(1),
                    t.Q6J("innerHtml", o.challenge.description, t.oJD),
                    t.xp6(3),
                    t.Q6J("ngIf", null !== o.challenge.disabledEnv),
                    t.xp6(1),
                    t.Q6J("ngIf", o.challenge.hasCodingChallenge),
                    t.xp6(1),
                    t.Q6J("ngIf", o.challenge.mitigationUrl && o.challenge.solved),
                    t.xp6(1),
                    t.Q6J("ngIf", o.challenge.solved && o.applicationConfiguration.ctf.showFlagsInNotifications))
                },
                dependencies: [h.mk, h.O5, F.Hw, Q.gM, ze, u.X$],
                styles: ["[_nghost-%COMP%]{background-color:var(--theme-background-darker);border-radius:2px;box-shadow:0 0 0 2px #50505040;display:grid;grid-template-rows:min-content min-content auto min-content;max-height:144px;overflow:hidden;padding:12px 16px}.solved[_nghost-%COMP%]{border-top:4px solid var(--theme-accent)}.solved[_nghost-%COMP%]   .dot[_ngcontent-%COMP%]{background-color:var(--theme-accent)}.unsolved[_nghost-%COMP%]{border-top:4px solid rgba(80,80,80,.25)}.unsolved[_nghost-%COMP%]   .dot[_ngcontent-%COMP%]{background-color:#5c5c5c}.disabled[_nghost-%COMP%]{filter:opacity(.4)}.disabled[_nghost-%COMP%]   .dot[_ngcontent-%COMP%]{background-color:var(--theme-warn-fade-40)}.category-row[_ngcontent-%COMP%]{color:var(--theme-text-fade-50);font-size:12px;font-weight:600;line-height:14px}.name-row[_ngcontent-%COMP%]{align-items:center;column-gap:6px;display:grid;grid-template-columns:12px auto min-content;margin-top:8px}.name-row[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{border-radius:50%;height:14px;width:14px}.name-row[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:16px;font-weight:600;line-height:18px}.difficulty[_ngcontent-%COMP%]{display:flex}.description-row[_ngcontent-%COMP%]{color:var(--theme-text-fade-50);font-size:12px;font-weight:400;line-height:14px;margin-top:12px;overflow-y:auto}.bottom-row[_ngcontent-%COMP%]{align-items:end;column-gap:4px;display:grid;grid-template-columns:auto min-content;margin-top:16px}.bottom-row[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:4px}.bottom-row[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]{background:#3d3d3d;border-radius:1.82849px;color:#5fc091;font-size:10px;font-style:normal;font-weight:400;line-height:14px;padding:6px}.badge-group[_ngcontent-%COMP%]{column-gap:4px;display:flex}.badge[_ngcontent-%COMP%]{align-items:center;background-color:var(--theme-background-lighter);border:0;border-radius:12px;color:var(--theme-text)!important;color:var(--theme-text);cursor:pointer;display:flex;height:24px;justify-content:center;min-width:24px;padding:0;position:relative}.badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;height:16px;width:16px}.badge[_ngcontent-%COMP%]   .badge-status[_ngcontent-%COMP%]{background-color:var(--theme-background-darker);border:1px solid var(--theme-background-light);border-radius:4px;font-size:10px;padding:0 5px;position:absolute;top:-35%}.badge.completed[_ngcontent-%COMP%]{background-color:var(--theme-accent)}.badge.completed[_ngcontent-%COMP%]   .badge-status[_ngcontent-%COMP%]{color:var(--theme-accent)}.badge.partially-completed[_ngcontent-%COMP%]{background-color:var(--theme-accent-dark)}.badge.partially-completed[_ngcontent-%COMP%]   .badge-status[_ngcontent-%COMP%]{color:var(--theme-accent-dark)}.badge.not-completable[_ngcontent-%COMP%]{background-color:var(--theme-accent)}.badge.not-completable[_ngcontent-%COMP%]   .badge-status[_ngcontent-%COMP%]{color:var(--theme-accent)}.badge[_ngcontent-%COMP%]:disabled{background-color:var(--theme-background-light);cursor:not-allowed}.badge[_ngcontent-%COMP%]:disabled   .badge-status[_ngcontent-%COMP%]{color:var(--theme-accent)}"]
            }),
            n
        }
        )();
        const nu = [[["", "warning-icon", ""]], [["", "warning-text", ""]], [["", "warning-action", ""]]]
          , ou = ["[warning-icon]", "[warning-text]", "[warning-action]"];
        let $e = (()=>{
            class n {
            }
            return n.\u0275fac = function(e) {
                return new (e || n)
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["warning-card"]],
                ngContentSelectors: ou,
                decls: 7,
                vars: 0,
                consts: [[1, "warning-container"], [1, "warning-text-icon-group"], [1, "warning-text"], [1, "warning-action"]],
                template: function(e, o) {
                    1 & e && (t.F$t(nu),
                    t.TgZ(0, "div", 0)(1, "div", 1),
                    t.Hsn(2),
                    t.TgZ(3, "span", 2),
                    t.Hsn(4, 1),
                    t.qZA()(),
                    t.TgZ(5, "div", 3),
                    t.Hsn(6, 2),
                    t.qZA()())
                },
                styles: [".warning-container[_ngcontent-%COMP%]{align-items:center;background-color:var(--theme-background-dark);border-radius:4px;display:grid;grid-template-columns:auto min-content;margin-top:16px;padding:12px}@media (max-width: 600px){.warning-container[_ngcontent-%COMP%]{grid-template-columns:auto;row-gap:12px}}.warning-text[_ngcontent-%COMP%]{margin-left:12px;padding-right:8px}.warning-text-icon-group[_ngcontent-%COMP%]{align-items:center;display:grid;grid-template-columns:min-content auto}"]
            }),
            n
        }
        )();
        function au(n, a) {
            if (1 & n && t._UZ(0, "i", 5),
            2 & n) {
                const e = t.oxw(2);
                t.Q6J("ngClass", "icon-" + e.disabledBecauseOfEnv.toString().toLowerCase())
            }
        }
        function iu(n, a) {
            if (1 & n && t._UZ(0, "i", 5),
            2 & n) {
                const e = t.oxw(2);
                t.Q6J("ngClass", "fab fa-" + e.disabledBecauseOfEnv.toString().toLowerCase())
            }
        }
        function ru(n, a) {
            1 & n && (t.ynx(0),
            t._uU(1),
            t.ALo(2, "translate"),
            t.BQk()),
            2 & n && (t.xp6(1),
            t.hij(" ", t.lcZ(2, 1, "SHOW_DISABLED_CHALLENGES"), " "))
        }
        function su(n, a) {
            1 & n && (t.ynx(0),
            t._uU(1),
            t.ALo(2, "translate"),
            t.BQk()),
            2 & n && (t.xp6(1),
            t.hij(" ", t.lcZ(2, 1, "HIDE_DISABLED_CHALLENGES"), " "))
        }
        const lu = function(n, a) {
            return {
                num: n,
                env: a
            }
        };
        function cu(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "warning-card"),
                t.ynx(1, 1),
                t.YNc(2, au, 1, 1, "i", 2),
                t.YNc(3, iu, 1, 1, "i", 2),
                t.BQk(),
                t._UZ(4, "span", 3),
                t.ALo(5, "translate"),
                t.TgZ(6, "button", 4),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.toggleShowDisabledChallenges())
                }),
                t.YNc(7, ru, 3, 3, "ng-container", 0),
                t.YNc(8, su, 3, 3, "ng-container", 0),
                t.qZA()()
            }
            if (2 & n) {
                const e = t.oxw();
                t.xp6(2),
                t.Q6J("ngIf", "Windows" !== e.disabledBecauseOfEnv),
                t.xp6(1),
                t.Q6J("ngIf", "Windows" === e.disabledBecauseOfEnv),
                t.xp6(1),
                t.Q6J("innerHTML", t.xi3(5, 5, "INFO_DISABLED_CHALLENGES", t.WLB(8, lu, e.numberOfDisabledChallenges, e.disabledBecauseOfEnv)), t.oJD),
                t.xp6(3),
                t.Q6J("ngIf", 0 == e.filterSetting.showDisabledChallenges),
                t.xp6(1),
                t.Q6J("ngIf", 1 == e.filterSetting.showDisabledChallenges)
            }
        }
        let uu = (()=>{
            class n {
                constructor() {
                    this.filterSettingChange = new t.vpe,
                    this.numberOfDisabledChallenges = 0,
                    this.disabledBecauseOfEnv = null
                }
                ngOnChanges() {
                    const e = this.challenges.filter(o=>null !== o.disabledEnv);
                    this.numberOfDisabledChallenges = e.length,
                    this.numberOfDisabledChallenges > 0 && (this.disabledBecauseOfEnv = e[0].disabledEnv)
                }
                toggleShowDisabledChallenges() {
                    const e = {
                        ...structuredClone(this.filterSetting),
                        showDisabledChallenges: !this.filterSetting.showDisabledChallenges
                    };
                    this.filterSetting = e,
                    this.filterSettingChange.emit(e)
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["challenges-unavailable-warning"]],
                inputs: {
                    challenges: "challenges",
                    filterSetting: "filterSetting"
                },
                outputs: {
                    filterSettingChange: "filterSettingChange"
                },
                features: [t.TTD],
                decls: 1,
                vars: 1,
                consts: [[4, "ngIf"], ["warning-icon", ""], ["class", "env-icon", 3, "ngClass", 4, "ngIf"], ["warning-text", "", 3, "innerHTML"], ["warning-action", "", "mat-button", "", "color", "accent", 3, "click"], [1, "env-icon", 3, "ngClass"]],
                template: function(e, o) {
                    1 & e && t.YNc(0, cu, 9, 11, "warning-card", 0),
                    2 & e && t.Q6J("ngIf", o.numberOfDisabledChallenges > 0)
                },
                dependencies: [h.mk, h.O5, x.lW, $e, u.X$],
                styles: [".env-icon[_ngcontent-%COMP%]{font-size:18px;padding:2px}"]
            }),
            n
        }
        )();
        function pu(n, a) {
            if (1 & n && (t.ynx(0),
            t._uU(1),
            t.ALo(2, "number"),
            t.BQk()),
            2 & n) {
                const e = t.oxw();
                t.xp6(1),
                t.hij(" ", t.xi3(2, 1, e.score / e.total * 100, "1.0-0"), "% ")
            }
        }
        function du(n, a) {
            if (1 & n && (t.ynx(0),
            t._uU(1),
            t.TgZ(2, "span", 6),
            t._uU(3),
            t.qZA(),
            t.BQk()),
            2 & n) {
                const e = t.oxw();
                t.xp6(1),
                t.hij(" ", e.score, "/"),
                t.xp6(2),
                t.Oqu(e.total)
            }
        }
        function mu(n, a) {
            if (1 & n && (t.TgZ(0, "div", 7),
            t._UZ(1, "div", 8),
            t.qZA()),
            2 & n) {
                const e = t.oxw();
                t.xp6(1),
                t.Udp("width", e.score / e.total * 100 + "%")
            }
        }
        const gu = [[["", "right-side", ""]]]
          , hu = ["[right-side]"];
        let de = (()=>{
            class n {
                constructor() {
                    this.showAsPercentage = !0,
                    this.showProgressBar = !0
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["score-card"]],
                inputs: {
                    description: "description",
                    total: "total",
                    score: "score",
                    showAsPercentage: "showAsPercentage",
                    showProgressBar: "showProgressBar"
                },
                ngContentSelectors: hu,
                decls: 9,
                vars: 4,
                consts: [[1, "score-group"], [1, "score"], [4, "ngIf"], [1, "category"], ["class", "progress-bar-container", 4, "ngIf"], [1, "right-group"], [1, "fraction-total"], [1, "progress-bar-container"], [1, "progress-bar"]],
                template: function(e, o) {
                    1 & e && (t.F$t(gu),
                    t.TgZ(0, "div", 0)(1, "p", 1),
                    t.YNc(2, pu, 3, 4, "ng-container", 2),
                    t.YNc(3, du, 4, 2, "ng-container", 2),
                    t.qZA(),
                    t.TgZ(4, "p", 3),
                    t._uU(5),
                    t.qZA(),
                    t.YNc(6, mu, 2, 2, "div", 4),
                    t.qZA(),
                    t.TgZ(7, "div", 5),
                    t.Hsn(8),
                    t.qZA()),
                    2 & e && (t.xp6(2),
                    t.Q6J("ngIf", 1 == o.showAsPercentage),
                    t.xp6(1),
                    t.Q6J("ngIf", 0 == o.showAsPercentage),
                    t.xp6(2),
                    t.Oqu(o.description),
                    t.xp6(1),
                    t.Q6J("ngIf", !0 === o.showProgressBar))
                },
                dependencies: [h.O5, h.JJ],
                styles: ["[_nghost-%COMP%]{background-color:var(--theme-background-dark);border-radius:4px;display:grid;grid-template-columns:auto min-content;height:100%}.score-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;padding:16px 0 16px 16px}.score-group[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%]{color:var(--theme-text);font-size:32px;font-style:normal;font-weight:500;line-height:42px;margin-bottom:0}.score-group[_ngcontent-%COMP%]   .fraction-total[_ngcontent-%COMP%]{color:var(--theme-text-dark);font-size:16px;line-height:26px}.score-group[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]{color:var(--theme-text);font-size:20px;font-style:normal;font-weight:500;line-height:23px}.progress-bar-container[_ngcontent-%COMP%]{background-color:var(--theme-background-lighter);border-radius:3px;max-width:200px;overflow:hidden}.progress-bar-container[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{background-color:var(--theme-accent);height:8px}"]
            }),
            n
        }
        )()
          , _u = (()=>{
            class n {
                constructor() {
                    this.allChallenges = []
                }
                ngOnInit() {
                    this.updatedNumberOfSolvedChallenges()
                }
                ngOnChanges(e) {
                    this.updatedNumberOfSolvedChallenges()
                }
                updatedNumberOfSolvedChallenges() {
                    const e = this.allChallenges.filter(o=>o.hasCodingChallenge);
                    this.solvedCodingChallenges = e.map(o=>o.codingChallengeStatus).reduce((o,i)=>o + i, 0),
                    this.availableCodingChallenges = 2 * e.length
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["coding-challenge-progress-score-card"]],
                inputs: {
                    allChallenges: "allChallenges"
                },
                features: [t.TTD],
                decls: 10,
                vars: 6,
                consts: [[3, "description", "total", "score", "showAsPercentage"], ["right-side", "", 1, "icon-group"], ["width", "74", "height", "85", "viewBox", "0 0 74 85", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["clip-path", "url(#clip0_2_635)"], ["d", "M69.2371 41.1778C68.9506 40.8702 68.6049 40.6235 68.2209 40.4524C67.8369 40.2813 67.4224 40.1893 67.0021 40.1819C66.5817 40.1745 66.1642 40.2518 65.7744 40.4092C65.3846 40.5667 65.0305 40.801 64.7332 41.0983C64.436 41.3956 64.2016 41.7497 64.0442 42.1395C63.8867 42.5293 63.8094 42.9468 63.8168 43.3671C63.8242 43.7875 63.9162 44.202 64.0873 44.586C64.2584 44.97 64.5051 45.3156 64.8127 45.6022L65.5265 46.3201C68.3731 49.1668 70.2806 51.0785 71.512 52.698C72.6932 54.2424 72.9603 55.1439 72.9603 55.912C72.9603 56.68 72.6932 57.5816 71.512 59.1259C70.2806 60.7413 68.3731 62.6571 65.5265 65.5038L64.8127 66.2217C64.5051 66.5083 64.2584 66.8539 64.0873 67.2379C63.9162 67.6219 63.8242 68.0365 63.8168 68.4568C63.8094 68.8771 63.8867 69.2947 64.0442 69.6845C64.2016 70.0743 64.436 70.4284 64.7332 70.7256C65.0305 71.0229 65.3846 71.2572 65.7744 71.4147C66.1642 71.5721 66.5817 71.6495 67.0021 71.642C67.4224 71.6346 67.8369 71.5426 68.2209 71.3715C68.6049 71.2004 68.9506 70.9537 69.2371 70.6462L70.1095 69.778C72.76 67.1275 74.9722 64.9153 76.4915 62.9243C78.0944 60.8206 79.2213 58.6 79.2213 55.912C79.2213 53.2239 78.0944 51.0033 76.4915 48.8997C74.9722 46.9087 72.76 44.6964 70.1053 42.046L69.2371 41.1778ZM58.6269 32.7296C59.428 32.9448 60.1111 33.4692 60.5259 34.1877C60.9406 34.9062 61.0533 35.7599 60.8391 36.5613L50.0368 76.8821C49.9302 77.2792 49.7464 77.6515 49.4959 77.9776C49.2454 78.3037 48.9332 78.5772 48.577 78.7827C47.8576 79.1975 47.0029 79.3096 46.2009 79.0943C45.3988 78.879 44.7152 78.3539 44.3003 77.6345C43.8855 76.9152 43.7733 76.0605 43.9887 75.2584L54.791 34.9418C54.8975 34.5442 55.0814 34.1715 55.3321 33.845C55.5828 33.5186 55.8955 33.2447 56.2522 33.0393C56.6089 32.8338 57.0026 32.7007 57.4108 32.6475C57.819 32.5944 58.2336 32.6223 58.631 32.7296H58.6269ZM40.0192 41.1778C39.4322 40.5915 38.6366 40.2622 37.807 40.2622C36.9774 40.2622 36.1817 40.5915 35.5948 41.1778L34.7266 42.046C32.0719 44.6964 29.8597 46.9087 28.3404 48.8997C26.7375 51.0033 25.6147 53.2239 25.6147 55.912C25.6147 58.6 26.7417 60.8206 28.3404 62.9243C29.8597 64.9153 32.0719 67.1275 34.7266 69.778L35.5948 70.6462C36.1882 71.1991 36.9731 71.5002 37.7841 71.4859C38.5951 71.4716 39.3689 71.143 39.9425 70.5694C40.516 69.9959 40.8446 69.2221 40.8589 68.4111C40.8732 67.6001 40.5722 66.8152 40.0192 66.2217L39.3054 65.5038C36.4588 62.6571 34.5554 60.7454 33.3199 59.1259C32.1387 57.5816 31.8757 56.68 31.8757 55.912C31.8757 55.1439 32.1387 54.2424 33.3199 52.698C34.5554 51.0827 36.4588 49.1668 39.3054 46.3201L40.0234 45.6022C40.6096 45.0152 40.9389 44.2196 40.9389 43.39C40.9389 42.5604 40.6096 41.7647 40.0234 41.1778H40.0192Z", "fill", "var(--theme-text)", "fill-opacity", "0.12"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M52.4188 11.0416C27.6378 11.0416 7.54834 31.1311 7.54834 55.912C7.54834 80.693 27.6378 100.782 52.4188 100.782C77.1998 100.782 97.2892 80.693 97.2892 55.912C97.2892 31.1311 77.1998 11.0416 52.4188 11.0416ZM13.8093 55.912C13.8093 45.6722 17.8771 35.8517 25.1178 28.6111C32.3584 21.3704 42.1789 17.3026 52.4188 17.3026C62.6586 17.3026 72.4791 21.3704 79.7197 28.6111C86.9604 35.8517 91.0282 45.6722 91.0282 55.912C91.0282 66.1519 86.9604 75.9724 79.7197 83.213C72.4791 90.4537 62.6586 94.5215 52.4188 94.5215C42.1789 94.5215 32.3584 90.4537 25.1178 83.213C17.8771 75.9724 13.8093 66.1519 13.8093 55.912Z", "fill", "var(--theme-text)", "fill-opacity", "0.12"], ["id", "clip0_2_635"], ["width", "106", "height", "106", "fill", "var(--theme-text)"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "score-card", 0),
                    t.ALo(1, "translate"),
                    t.TgZ(2, "div", 1),
                    t.O4$(),
                    t.TgZ(3, "svg", 2)(4, "g", 3),
                    t._UZ(5, "path", 4)(6, "path", 5),
                    t.qZA(),
                    t.TgZ(7, "defs")(8, "clipPath", 6),
                    t._UZ(9, "rect", 7),
                    t.qZA()()()()()),
                    2 & e && t.Q6J("description", t.lcZ(1, 4, "TITLE_CODING_CHALLENGES"))("total", o.availableCodingChallenges)("score", o.solvedCodingChallenges)("showAsPercentage", !0)
                },
                dependencies: [de, u.X$],
                styles: [".icon-group[_ngcontent-%COMP%]{align-items:flex-end;display:flex;height:100%;justify-content:flex-end}"]
            }),
            n
        }
        )();
        function fu(n, a) {
            1 & n && (t.O4$(),
            t._UZ(0, "stop", 14))
        }
        function Cu(n, a) {
            if (1 & n && (t.O4$(),
            t._UZ(0, "stop", 8)),
            2 & n) {
                const e = t.oxw().$implicit;
                t.uIk("offset", e.solvedChallenges / e.availableChallenges * 100 + "%")
            }
        }
        function vu(n, a) {
            if (1 & n && (t.TgZ(0, "div", 3)(1, "div", 4),
            t.O4$(),
            t.TgZ(2, "svg", 5),
            t._UZ(3, "path", 6),
            t.TgZ(4, "defs")(5, "linearGradient", 7),
            t._UZ(6, "stop", 8),
            t.YNc(7, fu, 1, 0, "stop", 9),
            t.YNc(8, Cu, 1, 1, "stop", 10),
            t._UZ(9, "stop", 8)(10, "stop", 11),
            t.qZA()()(),
            t.kcU(),
            t.TgZ(11, "span", 12),
            t._uU(12),
            t.qZA()(),
            t.TgZ(13, "span"),
            t._uU(14),
            t.TgZ(15, "span", 13),
            t._uU(16),
            t.qZA()()()),
            2 & n) {
                const e = a.$implicit;
                t.xp6(3),
                t.uIk("fill", "url(#solved-gradient-" + e.difficulty + ")"),
                t.xp6(2),
                t.uIk("id", "solved-gradient-" + e.difficulty),
                t.xp6(2),
                t.Q6J("ngIf", 0 === e.availableChallenges),
                t.xp6(1),
                t.Q6J("ngIf", 0 !== e.availableChallenges),
                t.xp6(4),
                t.Oqu(e.difficulty),
                t.xp6(2),
                t.hij(" ", e.solvedChallenges, "/"),
                t.xp6(2),
                t.Oqu(e.availableChallenges)
            }
        }
        const xu = Object.freeze({
            1: {
                difficulty: 1,
                availableChallenges: 0,
                solvedChallenges: 0
            },
            2: {
                difficulty: 2,
                availableChallenges: 0,
                solvedChallenges: 0
            },
            3: {
                difficulty: 3,
                availableChallenges: 0,
                solvedChallenges: 0
            },
            4: {
                difficulty: 4,
                availableChallenges: 0,
                solvedChallenges: 0
            },
            5: {
                difficulty: 5,
                availableChallenges: 0,
                solvedChallenges: 0
            },
            6: {
                difficulty: 6,
                availableChallenges: 0,
                solvedChallenges: 0
            }
        });
        let bu = (()=>{
            class n {
                constructor() {
                    this.allChallenges = [],
                    this.difficultySummaries = [{
                        difficulty: 1,
                        availableChallenges: 0,
                        solvedChallenges: 0
                    }, {
                        difficulty: 2,
                        availableChallenges: 0,
                        solvedChallenges: 0
                    }, {
                        difficulty: 3,
                        availableChallenges: 0,
                        solvedChallenges: 0
                    }, {
                        difficulty: 4,
                        availableChallenges: 0,
                        solvedChallenges: 0
                    }, {
                        difficulty: 5,
                        availableChallenges: 0,
                        solvedChallenges: 0
                    }, {
                        difficulty: 6,
                        availableChallenges: 0,
                        solvedChallenges: 0
                    }]
                }
                ngOnInit() {
                    this.updatedNumberOfSolvedChallenges()
                }
                ngOnChanges(e) {
                    this.updatedNumberOfSolvedChallenges()
                }
                updatedNumberOfSolvedChallenges() {
                    const e = this.allChallenges.filter(r=>r.solved).length
                      , o = this.allChallenges.filter(r=>r.hasCodingChallenge)
                      , i = o.map(r=>r.codingChallengeStatus).reduce((r,l)=>r + l, 0);
                    this.difficultySummaries = n.calculateDifficultySummaries(this.allChallenges),
                    this.totalChallenges = this.allChallenges.length + 2 * o.length,
                    this.solvedChallenges = e + i
                }
                static calculateDifficultySummaries(e) {
                    const o = structuredClone(xu);
                    for (const i of e)
                        o[i.difficulty].availableChallenges += i.hasCodingChallenge ? 3 : 1,
                        i.solved && (o[i.difficulty].solvedChallenges++,
                        o[i.difficulty].solvedChallenges += i.hasCodingChallenge ? i.codingChallengeStatus : 0);
                    return Object.values(o).sort((i,r)=>i.difficulty - r.difficulty)
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["difficulty-overview-score-card"]],
                inputs: {
                    allChallenges: "allChallenges"
                },
                features: [t.TTD],
                decls: 4,
                vars: 8,
                consts: [[3, "description", "total", "score", "showAsPercentage", "showProgressBar"], ["right-side", "", 1, "difficulties-group"], ["class", "difficulty-container", 4, "ngFor", "ngForOf"], [1, "difficulty-container"], [1, "star-container"], ["width", "28", "height", "25", "viewBox", "0 0 28 25", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12.6496 1.25874L9.57854 7.48541L2.70757 8.48713C1.4754 8.66584 0.981596 10.1849 1.87515 11.0549L6.84614 15.8989L5.67041 22.7417C5.45878 23.9786 6.76149 24.905 7.85257 24.3266L13.9993 21.0957L20.146 24.3266C21.2371 24.9003 22.5398 23.9786 22.3282 22.7417L21.1524 15.8989L26.1234 11.0549C27.017 10.1849 26.5232 8.66584 25.291 8.48713L18.42 7.48541L15.349 1.25874C14.7988 0.148847 13.2045 0.134738 12.6496 1.25874Z"], ["x1", "0", "x2", "0", "y1", "1", "y2", "0"], ["stop-color", "var(--theme-accent)"], ["offset", "0%", "stop-color", "var(--theme-accent)", 4, "ngIf"], ["stop-color", "var(--theme-accent)", 4, "ngIf"], ["stop-color", "var(--theme-primary)"], [1, "star-difficulty-label"], [1, "total-challenges"], ["offset", "0%", "stop-color", "var(--theme-accent)"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "score-card", 0),
                    t.ALo(1, "translate"),
                    t.TgZ(2, "div", 1),
                    t.YNc(3, vu, 17, 7, "div", 2),
                    t.qZA()()),
                    2 & e && (t.Q6J("description", t.lcZ(1, 6, "TITLE_CHALLENGES_SOLVED"))("total", o.totalChallenges)("score", o.solvedChallenges)("showAsPercentage", !1)("showProgressBar", !1),
                    t.xp6(3),
                    t.Q6J("ngForOf", o.difficultySummaries))
                },
                dependencies: [h.sg, h.O5, de, u.X$],
                styles: ["@media (max-width: 810px){[_nghost-%COMP%]{grid-column:span 2}}@media (max-width: 600px){[_nghost-%COMP%]{grid-column:span 1}}.difficulties-group[_ngcontent-%COMP%]{background-color:var(--theme-background-darkest);border-radius:4px;color:var(--theme-text);column-gap:12px;display:grid;grid-template-columns:1fr 1fr 1fr;height:calc(100% - 24px);margin:4px;padding:8px 12px;row-gap:2px}.difficulties-group[_ngcontent-%COMP%]   .difficulty-container[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column;justify-content:center}.difficulties-group[_ngcontent-%COMP%]   .total-challenges[_ngcontent-%COMP%]{color:var(--theme-text-invert-30)}.star-container[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:center}.star-container[_ngcontent-%COMP%]   .star-difficulty-label[_ngcontent-%COMP%]{font-size:11px;line-height:11px;margin-top:2px;position:absolute}"]
            }),
            n
        }
        )();
        var Tu = c(591);
        const Ve = "score-board-version";
        let me = (()=>{
            class n {
                constructor() {
                    this.defaultScoreBoard$ = new Tu.X("v2");
                    const e = localStorage.getItem(Ve);
                    e && this.defaultScoreBoard$.next(e)
                }
                setDefaultScoreBoard(e) {
                    this.defaultScoreBoard$.next(e),
                    localStorage.setItem(Ve, e)
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )()
          , Au = (()=>{
            class n {
                constructor(e, o, i) {
                    this.dialogRef = e,
                    this.featureFlagService = o,
                    this.localBackupService = i,
                    this.scoreBoardVersion = null,
                    this.subscriptions = []
                }
                ngOnInit() {
                    var e = this;
                    return (0,
                    w.Z)(function*() {
                        const o = e.featureFlagService.defaultScoreBoard$.subscribe(i=>{
                            e.scoreBoardVersion = i
                        }
                        );
                        e.subscriptions.push(o)
                    })()
                }
                ngOnDestroy() {
                    for (const e of this.subscriptions)
                        e.unsubscribe()
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(N.so),t.Y36(me),t.Y36(Ue))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["score-board-additional-settings-dialog"]],
                decls: 42,
                vars: 11,
                consts: [[1, "mat-typography"], ["mat-dialog-title", "", "translate", ""], [1, "settings"], [1, "setting-group"], ["translate", ""], [1, "setting"], ["mat-flat-button", "", "color", "primary", 3, "click"], ["type", "file", 2, "display", "none", 3, "change"], ["restoreBackupFile", ""], ["aria-label", "Default ScoreBoard", 3, "value", "change"], ["value", "v1"], ["value", "v2"], ["mat-flat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]],
                template: function(e, o) {
                    if (1 & e) {
                        const i = t.EpF();
                        t.TgZ(0, "mat-dialog-content", 0)(1, "h1", 1),
                        t._uU(2, "SCOREBOARD_ADDITIONAL_SETTINGS"),
                        t.qZA(),
                        t.TgZ(3, "div", 2)(4, "div", 3)(5, "h2", 4),
                        t._uU(6, "BACKUP_HEADLINE"),
                        t.qZA(),
                        t.TgZ(7, "div", 5)(8, "span", 4),
                        t._uU(9, "SAVE_BACKUP_TOOLTIP"),
                        t.qZA(),
                        t.TgZ(10, "button", 6),
                        t.NdJ("click", function() {
                            return o.localBackupService.save()
                        }),
                        t.TgZ(11, "mat-icon"),
                        t._uU(12, "save_alt"),
                        t.qZA(),
                        t.TgZ(13, "span", 4),
                        t._uU(14, "BTN_SAVE_BACKUP"),
                        t.qZA()()(),
                        t.TgZ(15, "div", 5)(16, "input", 7, 8),
                        t.NdJ("change", function(l) {
                            return o.localBackupService.restore(l.target.files.item(0))
                        }),
                        t.qZA(),
                        t.TgZ(18, "span", 4),
                        t._uU(19, "RESTORE_BACKUP_TOOLTIP"),
                        t.qZA(),
                        t.TgZ(20, "button", 6),
                        t.NdJ("click", function() {
                            t.CHM(i);
                            const l = t.MAs(17);
                            return t.KtG(l.click())
                        }),
                        t.TgZ(21, "mat-icon"),
                        t._uU(22, "settings_backup_restore"),
                        t.qZA(),
                        t.TgZ(23, "span", 4),
                        t._uU(24, "BTN_RESTORE_BACKUP"),
                        t.qZA()()()(),
                        t.TgZ(25, "div", 3)(26, "h2", 4),
                        t._uU(27, "FEATURE_FLAG_DEFAULT_SCORE_BOARD_NAME"),
                        t.qZA(),
                        t.TgZ(28, "div", 5)(29, "span", 4),
                        t._uU(30, "FEATURE_FLAG_DEFAULT_SCORE_BOARD_DESCRIPTION"),
                        t.qZA(),
                        t.TgZ(31, "mat-radio-group", 9),
                        t.NdJ("change", function(l) {
                            return o.featureFlagService.setDefaultScoreBoard(l.value)
                        }),
                        t.TgZ(32, "mat-radio-button", 10),
                        t._uU(33),
                        t.ALo(34, "translate"),
                        t.qZA(),
                        t.TgZ(35, "mat-radio-button", 11),
                        t._uU(36),
                        t.ALo(37, "translate"),
                        t.qZA()()()()(),
                        t.TgZ(38, "mat-dialog-actions")(39, "button", 12),
                        t._uU(40),
                        t.ALo(41, "translate"),
                        t.qZA()()()
                    }
                    2 & e && (t.xp6(31),
                    t.Q6J("value", o.scoreBoardVersion),
                    t.xp6(2),
                    t.Oqu(t.lcZ(34, 5, "FEATURE_FLAG_DEFAULT_SCORE_BOARD_VALUE_OLD")),
                    t.xp6(3),
                    t.Oqu(t.lcZ(37, 7, "FEATURE_FLAG_DEFAULT_SCORE_BOARD_VALUE_NEW")),
                    t.xp6(3),
                    t.Q6J("mat-dialog-close", null),
                    t.xp6(1),
                    t.hij(" ", t.lcZ(41, 9, "BTN_CLOSE"), " "))
                },
                dependencies: [x.lW, N.ZT, N.uh, N.xY, N.H8, F.Hw, nt.VQ, nt.U0, u.Pi, u.X$],
                styles: ["mat-dialog-content[_ngcontent-%COMP%]{display:grid;grid-template-rows:min-content 1fr min-content;height:100%;overflow:visible}.mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-left:16px}mat-dialog-actions[_ngcontent-%COMP%]{display:flex;flex-direction:row-reverse}h1[_ngcontent-%COMP%]{margin-bottom:24px}.settings[_ngcontent-%COMP%]{min-height:400px;overflow-y:auto}.setting-group[_ngcontent-%COMP%]{border-bottom:3px solid var(--theme-background-lighter);margin-bottom:16px}.setting-group[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:18px;margin-bottom:8px}.setting-group[_ngcontent-%COMP%]:last-child{border-bottom:unset;margin-bottom:0}.setting[_ngcontent-%COMP%]{align-items:center;display:grid;gap:16px;grid-template-columns:auto max-content;margin-bottom:16px}button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:8px}"]
            }),
            n
        }
        )();
        const Xe = function(n) {
            return {
                selected: n
            }
        };
        function yu(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "button", 2),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.oxw();
                    return t.KtG(l.toggleCategorySelected(r))
                }),
                t.ALo(1, "translate"),
                t._uU(2),
                t.qZA()
            }
            if (2 & n) {
                const e = a.$implicit
                  , o = t.oxw();
                t.Q6J("ngClass", t.VKq(5, Xe, o.isCategorySelected(e)))("matTooltip", t.lcZ(1, 3, "CATEGORY_" + e.toUpperCase().split(" ").join("_") + "_DESCRIPTION")),
                t.xp6(2),
                t.hij(" ", e, "\n")
            }
        }
        let Zu = (()=>{
            class n {
                constructor() {
                    this.availableCategories = new Set,
                    this.categoriesChange = new t.vpe
                }
                ngOnInit() {
                    this.availableCategories = n.getAvailableCategories(this.allChallenges)
                }
                ngOnChanges() {
                    this.availableCategories = n.getAvailableCategories(this.allChallenges)
                }
                static getAvailableCategories(e) {
                    return new Set(e.map(o=>o.category))
                }
                toggleCategorySelected(e) {
                    this.isCategorySelected(e) ? this.categories = this.categories.filter(o=>o !== e) : this.categories.push(e),
                    this.categoriesChange.emit(this.categories)
                }
                isCategorySelected(e) {
                    return this.categories.includes(e)
                }
                isAllCategoriesSelected() {
                    return 0 === this.categories.length
                }
                resetCategoryFilter() {
                    this.categories = qt.categories,
                    this.categoriesChange.emit(this.categories)
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["category-filter"]],
                inputs: {
                    allChallenges: "allChallenges",
                    categories: "categories"
                },
                outputs: {
                    categoriesChange: "categoriesChange"
                },
                features: [t.TTD],
                decls: 3,
                vars: 4,
                consts: [[1, "pill", "selected", 3, "ngClass", "click"], ["class", "pill", 3, "ngClass", "matTooltip", "click", 4, "ngFor", "ngForOf"], [1, "pill", 3, "ngClass", "matTooltip", "click"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "button", 0),
                    t.NdJ("click", function() {
                        return o.resetCategoryFilter()
                    }),
                    t._uU(1, " All\n"),
                    t.qZA(),
                    t.YNc(2, yu, 3, 7, "button", 1)),
                    2 & e && (t.Q6J("ngClass", t.VKq(2, Xe, o.isAllCategoriesSelected())),
                    t.xp6(2),
                    t.Q6J("ngForOf", o.availableCategories))
                },
                dependencies: [h.mk, h.sg, Q.gM, u.X$],
                styles: ["[_nghost-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;gap:8px;margin:24px 0}.pill[_ngcontent-%COMP%]{background-color:var(--theme-primary-darker);border:1px solid transparent;border-radius:234234px;color:var(--theme-text);cursor:pointer;font-size:14px;font-weight:600;line-height:19px;padding:8px 16px}.pill.selected[_ngcontent-%COMP%]{background-color:var(--theme-accent-dark);border:1px solid var(--theme-accent);color:var(--theme-text-invert-15)}"]
            }),
            n
        }
        )()
          , wu = (()=>{
            class n {
                transform(e) {
                    if (0 === e.length)
                        return "";
                    const i = function Su(n) {
                        const a = [];
                        let e = null;
                        for (const o of n)
                            null === e ? e = {
                                start: o,
                                end: o
                            } : o === e.end + 1 ? e.end = o : (a.push(e),
                            e = {
                                start: o,
                                end: o
                            });
                        return a.push(e),
                        a
                    }((0,
                    je.Z)(e));
                    return function ku(n) {
                        return n.map(a=>a.start === a.end ? a.start.toString() : `${a.start} - ${a.end}`).join(", ")
                    }(i)
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)
            }
            ,
            n.\u0275pipe = t.Yjl({
                name: "difficultySelectionSummary",
                type: n,
                pure: !0
            }),
            n
        }
        )();
        function Iu(n, a) {
            1 & n && (t.ynx(0),
            t._uU(1),
            t.ALo(2, "translate"),
            t.BQk()),
            2 & n && (t.xp6(1),
            t.hij(" ", t.lcZ(2, 1, "LABEL_DIFFICULTY"), " "))
        }
        function Ou(n, a) {
            if (1 & n && (t.TgZ(0, "span"),
            t._uU(1),
            t.ALo(2, "difficultySelectionSummary"),
            t.qZA()),
            2 & n) {
                const e = t.oxw();
                t.xp6(1),
                t.hij(" ", t.lcZ(2, 1, e.filterSetting.difficulties), " ")
            }
        }
        function Uu(n, a) {
            if (1 & n && (t.TgZ(0, "mat-option", 8),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = a.$implicit;
                t.Q6J("value", e),
                t.xp6(1),
                t.Oqu(e)
            }
        }
        let Lu = (()=>{
            class n {
                constructor(e) {
                    this.dialog = e,
                    this.filterSettingChange = new t.vpe,
                    this.tags = new Set
                }
                ngOnChanges() {
                    this.tags = new Set(this.allChallenges.flatMap(e=>e.tagList))
                }
                onDifficultyFilterChange(e) {
                    const o = structuredClone(this.filterSetting);
                    o.difficulties = e,
                    this.filterSettingChange.emit(o)
                }
                onStatusFilterChange(e) {
                    const o = structuredClone(this.filterSetting);
                    o.status = e,
                    this.filterSettingChange.emit(o)
                }
                onTagFilterChange(e) {
                    const o = structuredClone(this.filterSetting);
                    o.tags = e,
                    this.filterSettingChange.emit(o)
                }
                onCategoryFilterChange(e) {
                    const o = structuredClone(this.filterSetting);
                    o.categories = e,
                    this.filterSettingChange.emit(o)
                }
                onSearchQueryFilterChange(e) {
                    const o = structuredClone(this.filterSetting);
                    o.searchQuery = e,
                    this.filterSettingChange.emit(o)
                }
                canBeReset() {
                    return this.filterSetting.difficulties.length > 0 || null !== this.filterSetting.status || this.filterSetting.tags.length > 0 || this.filterSetting.categories.length > 0 || !!this.filterSetting.searchQuery || !this.filterSetting.showDisabledChallenges
                }
                openAdditionalSettingsDialog() {
                    this.dialog.open(Au)
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(N.uw))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["filter-settings"]],
                inputs: {
                    allChallenges: "allChallenges",
                    filterSetting: "filterSetting",
                    reset: "reset"
                },
                outputs: {
                    filterSettingChange: "filterSettingChange"
                },
                features: [t.TTD],
                decls: 62,
                vars: 40,
                consts: [[1, "filter-row"], [1, "search-form-field"], ["matPrefix", "", 1, "search-icon"], ["translate", ""], ["type", "search", "matInput", "", 3, "value", "input"], [1, "options-group"], ["multiple", "", 3, "value", "selectionChange"], [4, "ngIf"], [3, "value"], [3, "difficulty"], ["placeholder", "All", 3, "value", "selectionChange"], ["value", "unsolved"], ["value", "partially-solved"], ["value", "solved"], [3, "value", 4, "ngFor", "ngForOf"], [1, "additional-settings-wrapper"], ["id", "reset-filters", "mat-icon-button", "", "aria-label", "reset all filters", 3, "matTooltip", "click"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12.2442 2.96672L9.56672 6.37922L10.6392 7.45172C11.4117 6.46922 14.3742 2.67422 14.3742 2.67422C14.7567 2.17922 14.4042 1.46672 13.7817 1.46672H4.65422L6.15422 2.96672H12.2442Z", "fill", "currentColor"], ["d", "M1.63922 0.574219L0.574219 1.63172L7.03172 8.21672V12.7167C7.03172 13.1292 7.36922 13.4667 7.78172 13.4667H9.28172C9.69422 13.4667 10.0317 13.1292 10.0317 12.7167V11.0892L14.3667 15.4242L15.4242 14.3667L1.63922 0.574219Z", "fill", "currentColor"], ["for", "reset-filters", "translate", "", 1, "reset-filters-label"], ["mat-icon-button", "", "aria-label", "Open additional settings dialog", 1, "additional-settings-button", 3, "matTooltip", "click"], [3, "categories", "allChallenges", "categoriesChange"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "div", 0)(1, "div", 1)(2, "mat-form-field")(3, "mat-icon", 2),
                    t._uU(4, "search"),
                    t.qZA(),
                    t.TgZ(5, "mat-label", 3),
                    t._uU(6, "NAV_SEARCH"),
                    t.qZA(),
                    t.TgZ(7, "input", 4),
                    t.NdJ("input", function(r) {
                        return o.onSearchQueryFilterChange(r.target.value)
                    }),
                    t.qZA()()(),
                    t.TgZ(8, "div", 5)(9, "mat-form-field")(10, "mat-label", 3),
                    t._uU(11, "LABEL_DIFFICULTY"),
                    t.qZA(),
                    t.TgZ(12, "mat-select", 6),
                    t.NdJ("selectionChange", function(r) {
                        return o.onDifficultyFilterChange(r.value)
                    }),
                    t.TgZ(13, "mat-select-trigger"),
                    t.YNc(14, Iu, 3, 3, "ng-container", 7),
                    t.YNc(15, Ou, 3, 3, "span", 7),
                    t.qZA(),
                    t.TgZ(16, "mat-option", 8),
                    t._UZ(17, "difficulty-stars", 9),
                    t.qZA(),
                    t.TgZ(18, "mat-option", 8),
                    t._UZ(19, "difficulty-stars", 9),
                    t.qZA(),
                    t.TgZ(20, "mat-option", 8),
                    t._UZ(21, "difficulty-stars", 9),
                    t.qZA(),
                    t.TgZ(22, "mat-option", 8),
                    t._UZ(23, "difficulty-stars", 9),
                    t.qZA(),
                    t.TgZ(24, "mat-option", 8),
                    t._UZ(25, "difficulty-stars", 9),
                    t.qZA(),
                    t.TgZ(26, "mat-option", 8),
                    t._UZ(27, "difficulty-stars", 9),
                    t.qZA()()(),
                    t.TgZ(28, "mat-form-field")(29, "mat-label", 3),
                    t._uU(30, "LABEL_STATUS"),
                    t.qZA(),
                    t.TgZ(31, "mat-select", 10),
                    t.NdJ("selectionChange", function(r) {
                        return o.onStatusFilterChange(r.value)
                    }),
                    t.TgZ(32, "mat-option", 8),
                    t._uU(33),
                    t.ALo(34, "translate"),
                    t.qZA(),
                    t.TgZ(35, "mat-option", 11),
                    t._uU(36),
                    t.ALo(37, "translate"),
                    t.qZA(),
                    t.TgZ(38, "mat-option", 12),
                    t._uU(39),
                    t.ALo(40, "translate"),
                    t.qZA(),
                    t.TgZ(41, "mat-option", 13),
                    t._uU(42),
                    t.ALo(43, "translate"),
                    t.qZA()()(),
                    t.TgZ(44, "mat-form-field")(45, "mat-label", 3),
                    t._uU(46, "LABEL_TAGS"),
                    t.qZA(),
                    t.TgZ(47, "mat-select", 6),
                    t.NdJ("selectionChange", function(r) {
                        return o.onTagFilterChange(r.value)
                    }),
                    t.YNc(48, Uu, 2, 2, "mat-option", 14),
                    t.qZA()(),
                    t.TgZ(49, "div", 15)(50, "div")(51, "button", 16),
                    t.NdJ("click", function() {
                        return o.reset()
                    }),
                    t.ALo(52, "translate"),
                    t.O4$(),
                    t.TgZ(53, "svg", 17),
                    t._UZ(54, "path", 18)(55, "path", 19),
                    t.qZA()(),
                    t.kcU(),
                    t.TgZ(56, "label", 20),
                    t._uU(57, "LABEL_RESET_ALL_FILTERS"),
                    t.qZA()(),
                    t.TgZ(58, "button", 21),
                    t.NdJ("click", function() {
                        return o.openAdditionalSettingsDialog()
                    }),
                    t.TgZ(59, "mat-icon"),
                    t._uU(60, "settings"),
                    t.qZA()()()()(),
                    t.TgZ(61, "category-filter", 22),
                    t.NdJ("categoriesChange", function(r) {
                        return o.onCategoryFilterChange(r)
                    }),
                    t.qZA()),
                    2 & e && (t.xp6(7),
                    t.Q6J("value", o.filterSetting.searchQuery),
                    t.xp6(5),
                    t.Q6J("value", o.filterSetting.difficulties),
                    t.xp6(2),
                    t.Q6J("ngIf", 0 === o.filterSetting.difficulties.length),
                    t.xp6(1),
                    t.Q6J("ngIf", 0 !== o.filterSetting.difficulties.length),
                    t.xp6(1),
                    t.Q6J("value", 1),
                    t.xp6(1),
                    t.Q6J("difficulty", 1),
                    t.xp6(1),
                    t.Q6J("value", 2),
                    t.xp6(1),
                    t.Q6J("difficulty", 2),
                    t.xp6(1),
                    t.Q6J("value", 3),
                    t.xp6(1),
                    t.Q6J("difficulty", 3),
                    t.xp6(1),
                    t.Q6J("value", 4),
                    t.xp6(1),
                    t.Q6J("difficulty", 4),
                    t.xp6(1),
                    t.Q6J("value", 5),
                    t.xp6(1),
                    t.Q6J("difficulty", 5),
                    t.xp6(1),
                    t.Q6J("value", 6),
                    t.xp6(1),
                    t.Q6J("difficulty", 6),
                    t.xp6(4),
                    t.Q6J("value", o.filterSetting.status),
                    t.xp6(1),
                    t.Q6J("value", null),
                    t.xp6(1),
                    t.Oqu(t.lcZ(34, 30, "STATUS_ALL")),
                    t.xp6(3),
                    t.Oqu(t.lcZ(37, 32, "STATUS_UNSOLVED")),
                    t.xp6(3),
                    t.Oqu(t.lcZ(40, 34, "STATUS_PARTIALLY_SOLVED")),
                    t.xp6(3),
                    t.Oqu(t.lcZ(43, 36, "STATUS_SOLVED")),
                    t.xp6(5),
                    t.Q6J("value", o.filterSetting.tags),
                    t.xp6(1),
                    t.Q6J("ngForOf", o.tags),
                    t.xp6(3),
                    t.Q6J("matTooltip", t.lcZ(52, 38, "LABEL_RESET_ALL_FILTERS")),
                    t.xp6(2),
                    t.Udp("color", o.canBeReset() ? "var(--theme-warn)" : "var(--theme-text-dark)"),
                    t.xp6(5),
                    t.Q6J("matTooltip", "Open additional settings dialog"),
                    t.xp6(3),
                    t.Q6J("categories", o.filterSetting.categories)("allChallenges", o.allChallenges))
                },
                dependencies: [h.sg, h.O5, x.lW, f.KE, f.hX, f.qo, F.Hw, B.Nt, vt.gD, vt.$L, Gt.ey, Q.gM, u.Pi, Zu, ze, u.X$, wu],
                styles: [".options-group[_ngcontent-%COMP%]{align-items:center;column-gap:16px;display:grid;grid-template-columns:repeat(3,1fr) min-content;row-gap:8px}@media (max-width: 800px){.options-group[_ngcontent-%COMP%]{grid-template-columns:auto}}.filter-row[_ngcontent-%COMP%]{display:grid;gap:16px;grid-template-columns:auto min-content min-content;margin-top:16px}@media (max-width: 1000px){.filter-row[_ngcontent-%COMP%]{grid-template-columns:auto}}.search-form-field[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}.search-icon[_ngcontent-%COMP%]{align-items:flex-end;color:var(--theme-text-fade-30);display:flex;font-size:18px;line-height:12px;margin-right:4px}.reset-filters-label[_ngcontent-%COMP%]{color:var(--theme-text-fade-30)}@media (min-width: 800px){.reset-filters-label[_ngcontent-%COMP%]{display:none}}.additional-settings-wrapper[_ngcontent-%COMP%]{align-items:center;display:flex}.additional-settings-button[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:center}.additional-settings-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--theme-text-fade-30);font-size:16px;height:16px;line-height:16px;width:16px}"]
            }),
            n
        }
        )()
          , Pu = (()=>{
            class n {
                constructor() {
                    this.allChallenges = []
                }
                ngOnInit() {
                    this.updatedNumberOfSolvedChallenges()
                }
                ngOnChanges(e) {
                    this.updatedNumberOfSolvedChallenges()
                }
                updatedNumberOfSolvedChallenges() {
                    this.solvedChallenges = this.allChallenges.filter(e=>e.solved).length
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["hacking-challenge-progress-score-card"]],
                inputs: {
                    allChallenges: "allChallenges"
                },
                features: [t.TTD],
                decls: 9,
                vars: 6,
                consts: [[3, "description", "total", "score", "showAsPercentage"], ["right-side", "", 1, "icon-group"], ["width", "62", "height", "69", "viewBox", "0 0 62 69", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["clip-path", "url(#clip0_2_621)"], ["d", "M51.875 72.6249H29.125M51.875 72.6249V40.7749C51.875 40.1715 51.6353 39.5929 51.2087 39.1662C50.782 38.7396 50.2034 38.4999 49.6 38.4999H31.4C30.7966 38.4999 30.218 38.7396 29.7913 39.1662C29.3647 39.5929 29.125 40.1715 29.125 40.7749V72.6249M51.875 72.6249H72.35C72.9534 72.6249 73.532 72.3852 73.9587 71.9586C74.3853 71.5319 74.625 70.9533 74.625 70.3499V61.6291C74.625 61.0257 74.3853 60.447 73.9587 60.0204C73.532 59.5937 72.9534 59.3541 72.35 59.3541H54.15C53.5466 59.3541 52.968 59.5937 52.5413 60.0204C52.1147 60.447 51.875 61.0257 51.875 61.6291V72.6249ZM29.125 72.6249V54.0457C29.125 53.4424 28.8853 52.8637 28.4587 52.4371C28.032 52.0104 27.4534 51.7707 26.85 51.7707H8.65C8.04663 51.7707 7.46798 52.0104 7.04133 52.4371C6.61469 52.8637 6.375 53.4424 6.375 54.0457V70.3499C6.375 70.9533 6.61469 71.5319 7.04133 71.9586C7.46798 72.3852 8.04663 72.6249 8.65 72.6249H29.125ZM35.9727 12.3867L39.4194 5.08015C39.5124 4.87128 39.664 4.69384 39.8558 4.56933C40.0476 4.44481 40.2713 4.37854 40.5 4.37854C40.7287 4.37854 40.9524 4.44481 41.1442 4.56933C41.336 4.69384 41.4876 4.87128 41.5806 5.08015L45.031 12.3867L52.7357 13.5659C53.7253 13.7176 54.1197 14.9916 53.403 15.7196L47.8293 21.4071L49.145 29.4378C49.3118 30.4691 48.2805 31.2578 47.3933 30.7687L40.5 26.977L33.6068 30.7687C32.7233 31.254 31.6882 30.4691 31.855 29.4378L33.1707 21.4071L27.597 15.7196C26.8765 14.9916 27.2747 13.7176 28.2605 13.5659L35.9727 12.3867Z", "stroke", "var(--theme-text)", "stroke-opacity", "0.12", "stroke-width", "5.6875", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "clip0_2_621"], ["width", "62", "height", "69", "fill", "var(--theme-text)"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "score-card", 0),
                    t.ALo(1, "translate"),
                    t.TgZ(2, "div", 1),
                    t.O4$(),
                    t.TgZ(3, "svg", 2)(4, "g", 3),
                    t._UZ(5, "path", 4),
                    t.qZA(),
                    t.TgZ(6, "defs")(7, "clipPath", 5),
                    t._UZ(8, "rect", 6),
                    t.qZA()()()()()),
                    2 & e && t.Q6J("description", t.lcZ(1, 4, "TITLE_HACKING_CHALLENGES"))("total", o.allChallenges.length)("score", o.solvedChallenges)("showAsPercentage", !0)
                },
                dependencies: [de, u.X$],
                styles: [".icon-group[_ngcontent-%COMP%]{align-items:flex-end;display:flex;height:100%;justify-content:flex-end}"]
            }),
            n
        }
        )();
        const Nu = function(n) {
            return {
                num: n
            }
        };
        function Eu(n, a) {
            if (1 & n && (t.TgZ(0, "warning-card")(1, "mat-icon", 1),
            t._uU(2, "school"),
            t.qZA(),
            t.TgZ(3, "span", 2),
            t._uU(4),
            t.ALo(5, "translate"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw();
                t.xp6(4),
                t.hij(" ", t.xi3(5, 1, "INFO_FULL_CHALLENGE_MODE", t.VKq(4, Nu, e.allChallenges.length)), " ")
            }
        }
        let Mu = (()=>{
            class n {
                constructor() {
                    this.applicationConfig = null,
                    this.tutorialModeActive = null
                }
                ngOnChanges() {
                    if (!this.applicationConfig?.challenges?.restrictToTutorialsFirst)
                        return void (this.tutorialModeActive = !1);
                    const e = this.allChallenges.filter(o=>null !== o.tutorialOrder).every(o=>o.solved);
                    this.tutorialModeActive = !e
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["tutorial-mode-warning"]],
                inputs: {
                    allChallenges: "allChallenges",
                    applicationConfig: "applicationConfig"
                },
                features: [t.TTD],
                decls: 1,
                vars: 1,
                consts: [[4, "ngIf"], ["warning-icon", ""], ["warning-text", "", 1, "tutorial-mode-warning-text"]],
                template: function(e, o) {
                    1 & e && t.YNc(0, Eu, 6, 6, "warning-card", 0),
                    2 & e && t.Q6J("ngIf", o.tutorialModeActive)
                },
                dependencies: [h.O5, F.Hw, $e, u.X$],
                encapsulation: 2
            }),
            n
        }
        )();
        function Du(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "filter-settings", 5),
                t.NdJ("filterSettingChange", function(i) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.onFilterSettingUpdate(i))
                }),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw();
                t.Q6J("filterSetting", e.filterSetting)("allChallenges", e.allChallenges)("reset", e.reset.bind(e))
            }
        }
        function qu(n, a) {
            1 & n && (t.TgZ(0, "div", 6),
            t._UZ(1, "mat-spinner"),
            t.qZA())
        }
        const Fu = function(n, a, e) {
            return {
                solved: n,
                unsolved: a,
                disabled: e
            }
        };
        function Bu(n, a) {
            if (1 & n && t._UZ(0, "challenge-card", 14),
            2 & n) {
                const e = a.$implicit
                  , o = t.oxw(3);
                t.Q6J("challenge", e)("applicationConfiguration", o.applicationConfiguration)("openCodingChallengeDialog", o.openCodingChallengeDialog.bind(o))("repeatChallengeNotification", o.repeatChallengeNotification.bind(o))("ngClass", t.kEZ(5, Fu, e.solved, !e.solved, null !== e.disabledEnv))
            }
        }
        function Ru(n, a) {
            if (1 & n && (t.TgZ(0, "div", 12),
            t.YNc(1, Bu, 1, 9, "challenge-card", 13),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngForOf", e.filteredChallenges)("ngForTrackBy", e.getChallengeKey)
            }
        }
        function Yu(n, a) {
            1 & n && (t.TgZ(0, "div", 16)(1, "p"),
            t._uU(2),
            t.ALo(3, "translate"),
            t.qZA()()),
            2 & n && (t.xp6(2),
            t.Oqu(t.lcZ(3, 1, "NO_CHALLENGES_FOUND")))
        }
        function Ju(n, a) {
            if (1 & n && t.YNc(0, Yu, 4, 3, "div", 15),
            2 & n) {
                const e = t.oxw(2);
                t.Q6J("ngIf", e.allChallenges.length > 0)
            }
        }
        function Qu(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.ynx(0),
                t.TgZ(1, "challenges-unavailable-warning", 7),
                t.NdJ("filterSettingChange", function(i) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.onFilterSettingUpdate(i))
                }),
                t.qZA(),
                t._UZ(2, "tutorial-mode-warning", 8),
                t.YNc(3, Ru, 2, 2, "div", 9),
                t.YNc(4, Ju, 1, 1, "ng-template", null, 10, t.W1O),
                t._UZ(6, "img", 11),
                t.BQk()
            }
            if (2 & n) {
                const e = t.MAs(5)
                  , o = t.oxw();
                t.xp6(1),
                t.Q6J("challenges", o.allChallenges)("filterSetting", o.filterSetting),
                t.xp6(1),
                t.Q6J("allChallenges", o.allChallenges)("applicationConfig", o.applicationConfiguration),
                t.xp6(1),
                t.Q6J("ngIf", o.filteredChallenges.length > 0)("ngIfElse", e)
            }
        }
        let Hu = (()=>{
            class n {
                constructor(e, o, i, r, l, m, v, A, q) {
                    this.challengeService = e,
                    this.codeSnippetService = o,
                    this.configurationService = i,
                    this.sanitizer = r,
                    this.ngZone = l,
                    this.io = m,
                    this.dialog = v,
                    this.router = A,
                    this.route = q,
                    this.allChallenges = [],
                    this.filteredChallenges = [],
                    this.filterSetting = structuredClone(qt),
                    this.applicationConfiguration = null,
                    this.isInitialized = !1,
                    this.subscriptions = []
                }
                ngOnInit() {
                    const e = (0,
                    Bc.aj)([this.challengeService.find({
                        sort: "name"
                    }), this.codeSnippetService.challenges(), this.configurationService.getApplicationConfiguration()]).subscribe(([i,r,l])=>{
                        this.applicationConfiguration = l;
                        const m = i.map(v=>({
                            ...v,
                            tagList: v.tags ? v.tags.split(",").map(A=>A.trim()) : [],
                            originalDescription: v.description,
                            description: this.sanitizer.bypassSecurityTrustHtml(v.description),
                            hasCodingChallenge: r.includes(v.key)
                        }));
                        this.allChallenges = m,
                        this.filterAndUpdateChallenges(),
                        this.isInitialized = !0
                    }
                    );
                    this.subscriptions.push(e);
                    const o = this.route.queryParams.subscribe(i=>{
                        this.rewriteLegacyChallengeDirectLink(i) || (this.filterSetting = function Rc(n) {
                            const a = {
                                ...structuredClone(qt)
                            };
                            return n.searchQuery && (a.searchQuery = n.searchQuery),
                            n.difficulties && (a.difficulties = n.difficulties.split(",").map(e=>parseInt(e, 10)).filter(e=>!isNaN(e))),
                            n.tags && (a.tags = n.tags.split(",")),
                            n.status && (a.status = n.status),
                            n.categories && (a.categories = n.categories.split(",")),
                            void 0 !== n.showDisabledChallenges && (a.showDisabledChallenges = "true" === n.showDisabledChallenges),
                            a
                        }(i),
                        this.filterAndUpdateChallenges())
                    }
                    );
                    this.subscriptions.push(o),
                    this.io.socket().on("challenge solved", this.onChallengeSolvedWebsocket.bind(this)),
                    this.io.socket().on("code challenge solved", this.onCodeChallengeSolvedWebsocket.bind(this))
                }
                ngOnDestroy() {
                    this.io.socket().off("challenge solved", this.onChallengeSolvedWebsocket.bind(this)),
                    this.io.socket().off("code challenge solved", this.onCodeChallengeSolvedWebsocket.bind(this));
                    for (const e of this.subscriptions)
                        e.unsubscribe()
                }
                onFilterSettingUpdate(e) {
                    this.router.navigate([], {
                        queryParams: Ge(e)
                    })
                }
                onChallengeSolvedWebsocket(e) {
                    e && (this.allChallenges = this.allChallenges.map(o=>o.key === e.key ? {
                        ...o,
                        solved: !0
                    } : {
                        ...o
                    }),
                    this.filterAndUpdateChallenges(),
                    this.ngZone.run(()=>{}
                    ))
                }
                onCodeChallengeSolvedWebsocket(e) {
                    e && (this.allChallenges = this.allChallenges.map(o=>o.key === e.key ? {
                        ...o,
                        codingChallengeStatus: e.codingChallengeStatus
                    } : {
                        ...o
                    }),
                    this.filterAndUpdateChallenges(),
                    this.ngZone.run(()=>{}
                    ))
                }
                filterAndUpdateChallenges() {
                    this.filteredChallenges = function Qc(n) {
                        return (0,
                        je.Z)(n, ["difficulty", "tutorialOrder", "name"])
                    }(function Yc(n, a) {
                        return n.filter(e=>0 === a.categories.length || a.categories.includes(e.category)).filter(e=>0 === a.difficulties.length || a.difficulties.includes(e.difficulty)).filter(e=>0 === a.tags.length || e.tagList.some(o=>a.tags.includes(o))).filter(e=>null === a.status || a.status === function Jc(n) {
                            return n.solved ? n.hasCodingChallenge ? 2 === n.codingChallengeStatus ? "solved" : "partially-solved" : n.solved ? "solved" : "unsolved" : "unsolved"
                        }(e)).filter(e=>null === e.disabledEnv || a.showDisabledChallenges).filter(e=>null === a.searchQuery || e.name.toLowerCase().includes(a.searchQuery.toLowerCase()) || e.originalDescription.toLowerCase().includes(a.searchQuery.toLowerCase())).filter(e=>{
                            if (!a.restrictToTutorialChallengesFirst)
                                return !0;
                            const o = n.filter(m=>null !== m.tutorialOrder)
                              , i = o.every(m=>m.solved);
                            if (i)
                                return !0;
                            if (!i && null === e.tutorialOrder)
                                return !1;
                            const r = o.filter(m=>!m.solved).map(m=>m.difficulty)
                              , l = Math.min(...r);
                            return e.difficulty <= l
                        }
                        )
                    }(this.allChallenges, {
                        ...this.filterSetting,
                        restrictToTutorialChallengesFirst: this.applicationConfiguration?.challenges?.restrictToTutorialsFirst ?? !0
                    }))
                }
                getChallengeKey(e, o) {
                    return o.key
                }
                reset() {
                    this.router.navigate([], {
                        queryParams: Ge(qt)
                    })
                }
                openCodingChallengeDialog(e) {
                    const o = this.allChallenges.find(i=>i.key === e);
                    this.dialog.open(Pe, {
                        disableClose: !0,
                        data: {
                            key: e,
                            name: o.name,
                            codingChallengeStatus: o.codingChallengeStatus
                        }
                    })
                }
                repeatChallengeNotification(e) {
                    var o = this;
                    return (0,
                    w.Z)(function*() {
                        const i = o.allChallenges.find(r=>r.key === e);
                        yield o.challengeService.repeatNotification(encodeURIComponent(i.name)).toPromise()
                    })()
                }
                rewriteLegacyChallengeDirectLink(e) {
                    return !(!e.challenge || (console.warn('The "challenge=<name>" URL query parameter is deprecated! You should  use "searchQuery=<name>" instead to link to a challenge directly. See https://pwning.owasp-juice.shop/companion-guide/latest/part4/integration.html#_generating_links_to_juice_shop for details.'),
                    e.searchQuery) || (this.router.navigate([], {
                        queryParams: {
                            ...e,
                            challenge: null,
                            searchQuery: e.challenge
                        }
                    }),
                    0))
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(ot),t.Y36(ne),t.Y36(b.e),t.Y36(k.H7),t.Y36(t.R0b),t.Y36(st),t.Y36(N.uw),t.Y36(L.F0),t.Y36(L.gz))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-score-board"]],
                decls: 7,
                vars: 6,
                consts: [[1, "score-row"], [3, "allChallenges"], [3, "filterSetting", "allChallenges", "reset", "filterSettingChange", 4, "ngIf"], ["class", "loading-spinner-wrapper", 4, "ngIf"], [4, "ngIf"], [3, "filterSetting", "allChallenges", "reset", "filterSettingChange"], [1, "loading-spinner-wrapper"], [3, "challenges", "filterSetting", "filterSettingChange"], [3, "allChallenges", "applicationConfig"], ["class", "challenges", 4, "ngIf", "ngIfElse"], ["emptyChallenges", ""], ["src", "assets/public/images/padding/1px.png"], [1, "challenges"], [3, "challenge", "applicationConfiguration", "openCodingChallengeDialog", "repeatChallengeNotification", "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "challenge", "applicationConfiguration", "openCodingChallengeDialog", "repeatChallengeNotification", "ngClass"], ["class", "empty-challenges", 4, "ngIf"], [1, "empty-challenges"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "div", 0),
                    t._UZ(1, "hacking-challenge-progress-score-card", 1)(2, "coding-challenge-progress-score-card", 1)(3, "difficulty-overview-score-card", 1),
                    t.qZA(),
                    t.YNc(4, Du, 1, 3, "filter-settings", 2),
                    t.YNc(5, qu, 2, 0, "div", 3),
                    t.YNc(6, Qu, 7, 6, "ng-container", 4)),
                    2 & e && (t.xp6(1),
                    t.Q6J("allChallenges", o.allChallenges),
                    t.xp6(1),
                    t.Q6J("allChallenges", o.allChallenges),
                    t.xp6(1),
                    t.Q6J("allChallenges", o.allChallenges),
                    t.xp6(1),
                    t.Q6J("ngIf", !1 === (null == o.applicationConfiguration ? null : o.applicationConfiguration.challenges.restrictToTutorialsFirst)),
                    t.xp6(1),
                    t.Q6J("ngIf", !1 === o.isInitialized),
                    t.xp6(1),
                    t.Q6J("ngIf", !0 === o.isInitialized))
                },
                dependencies: [h.mk, h.sg, h.O5, We.Ou, eu, uu, _u, bu, Lu, Pu, Mu, u.X$],
                styles: ["[_nghost-%COMP%]{display:block;margin:48px 72px}@media (max-width: 1500px){[_nghost-%COMP%]{margin:48px 64px}}@media (max-width: 900px){[_nghost-%COMP%]{margin:48px}}@media (max-width: 600px){[_nghost-%COMP%]{margin:32px 16px}}.score-row[_ngcontent-%COMP%]{column-gap:16px;display:grid;grid-template-columns:repeat(3,1fr);min-height:120px;row-gap:8px}@media (max-width: 1500px){.score-row[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}@media (max-width: 900px){.score-row[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media (max-width: 600px){.score-row[_ngcontent-%COMP%]{grid-template-columns:repeat(1,1fr)}}.challenges[_ngcontent-%COMP%]{column-gap:16px;display:grid;grid-template-columns:repeat(4,1fr);margin-top:32px;row-gap:12px}@media (max-width: 1500px){.challenges[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}@media (max-width: 900px){.challenges[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media (max-width: 600px){.challenges[_ngcontent-%COMP%]{grid-template-columns:repeat(1,1fr)}}.empty-challenges[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column;justify-content:center;margin:0 32px;min-height:20vh}.loading-spinner-wrapper[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:center;padding:64px;width:100%}"]
            }),
            n
        }
        )();
        const Gu = function() {
            var n = (0,
            w.Z)(function*() {
                return (yield Promise.all([c.e(98), c.e(592), c.e(67)]).then(c.bind(c, 9067))).FaucetModule
            });
            return function() {
                return n.apply(this, arguments)
            }
        }()
          , ju = function() {
            var n = (0,
            w.Z)(function*() {
                return (yield Promise.all([c.e(98), c.e(592), c.e(745)]).then(c.bind(c, 7745))).WalletWeb3Module
            });
            return function() {
                return n.apply(this, arguments)
            }
        }()
          , Wu = function() {
            var n = (0,
            w.Z)(function*() {
                return (yield Promise.all([c.e(98), c.e(202)]).then(c.bind(c, 6202))).FaucetModule
            });
            return function() {
                return n.apply(this, arguments)
            }
        }()
          , Ku = [{
            path: "administration",
            component: wa,
            canActivate: [It]
        }, {
            path: "accounting",
            component: _l,
            canActivate: [Ot]
        }, {
            path: "about",
            component: Wn
        }, {
            path: "address/select",
            component: rs,
            canActivate: [K]
        }, {
            path: "address/saved",
            component: ss,
            canActivate: [K]
        }, {
            path: "address/create",
            component: Be,
            canActivate: [K]
        }, {
            path: "address/edit/:addressId",
            component: Be,
            canActivate: [K]
        }, {
            path: "delivery-method",
            component: Tc
        }, {
            path: "deluxe-membership",
            component: Mc,
            canActivate: [K]
        }, {
            path: "saved-payment-methods",
            component: Hs
        }, {
            path: "basket",
            component: _n
        }, {
            path: "order-completion/:id",
            component: Dl
        }, {
            path: "contact",
            component: Bn
        }, {
            path: "photo-wall",
            component: Lc
        }, {
            path: "complain",
            component: Ra
        }, {
            path: "chatbot",
            component: Ga
        }, {
            path: "order-summary",
            component: Yl
        }, {
            path: "order-history",
            component: cc
        }, {
            path: "payment/:entity",
            component: Qs
        }, {
            path: "wallet",
            component: Hl
        }, {
            path: "login",
            component: jo
        }, {
            path: "forgot-password",
            component: Co
        }, {
            path: "recycle",
            component: vi
        }, {
            path: "register",
            component: ro
        }, {
            path: "search",
            component: $t
        }, {
            path: "hacking-instructor",
            component: $t
        }, {
            path: "score-board",
            component: Hu
        }, {
            path: "score-board-legacy",
            component: Er
        }, {
            path: "track-result",
            component: _e
        }, {
            path: "track-result/new",
            component: _e,
            data: {
                type: "new"
            }
        }, {
            path: "2fa/enter",
            component: Dr
        }, {
            path: "privacy-security",
            component: Fr,
            children: [{
                path: "privacy-policy",
                component: zr
            }, {
                path: "change-password",
                component: La
            }, {
                path: "two-factor-authentication",
                component: Yr
            }, {
                path: "data-export",
                component: Wr
            }, {
                path: "last-login-ip",
                component: Kr
            }]
        }, {
            path: "juicy-nft",
            component: Fc
        }, {
            path: "wallet-web3",
            loadChildren: (n = (0,
            w.Z)(function*() {
                return yield ju()
            }),
            function() {
                return n.apply(this, arguments)
            }
            )
        }, {
            path: "web3-sandbox",
            loadChildren: function() {
                var n = (0,
                w.Z)(function*() {
                    return yield Wu()
                });
                return function() {
                    return n.apply(this, arguments)
                }
            }()
        }, {
            path: "bee-haven",
            loadChildren: function() {
                var n = (0,
                w.Z)(function*() {
                    return yield Gu()
                });
                return function() {
                    return n.apply(this, arguments)
                }
            }()
        }, {
            matcher: function $u(n) {
                return 0 === n.length ? null : window.location.href.includes("#access_token=") ? {
                    consumed: n
                } : null
            },
            data: {
                params: window.location.href.substr(window.location.href.indexOf("#"))
            },
            component: Bt
        }, {
            matcher: function Vu(n) {
                return 0 === n.length ? null : n[0].toString().match(function Xu(...n) {
                    const a = Array.prototype.slice.call(n)
                      , e = a.shift();
                    return a.reverse().map(function(o, i) {
                        return String.fromCharCode(o - e - 45 - i)
                    }).join("")
                }(25, 184, 174, 179, 182, 186) + 36669..toString(36).toLowerCase() + function tp(...n) {
                    const a = Array.prototype.slice.call(arguments)
                      , e = a.shift();
                    return a.reverse().map(function(o, i) {
                        return String.fromCharCode(o - e - 24 - i)
                    }).join("")
                }(13, 144, 87, 152, 139, 144, 83, 138) + 10..toString(36).toLowerCase()) ? {
                    consumed: n
                } : null
            },
            component: gt
        }, {
            path: "403",
            component: qr
        }, {
            path: "**",
            component: $t
        }]
          , zu = L.Bz.forRoot(Ku, {
            useHash: !0
        });
        var n, ep = c(2101), tn = c(3447);
        let ge = (()=>{
            class n {
                constructor(e) {
                    this.http = e,
                    this.hostServer = P.N.hostServer,
                    this.host = this.hostServer + "/rest/admin"
                }
                getApplicationVersion() {
                    return this.http.get(this.host + "/application-version").pipe((0,
                    C.U)(e=>e.version), (0,
                    _.K)(e=>{
                        throw e
                    }
                    ))
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.LFG(U.eN))
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )()
          , np = (()=>{
            class n {
                constructor(e) {
                    this.http = e,
                    this.hostServer = P.N.hostServer
                }
                getLanguages() {
                    return this.http.get(`${this.hostServer}/rest/languages`).pipe((0,
                    _.K)(e=>{
                        throw e
                    }
                    ))
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.LFG(U.eN))
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )();
        var At = c(3683)
          , Ft = c(8255)
          , en = c(2855);
        function op(n, a) {
            1 & n && (t.TgZ(0, "button", 38)(1, "mat-icon"),
            t._uU(2, " exit_to_app "),
            t.qZA(),
            t.TgZ(3, "span"),
            t._uU(4),
            t.ALo(5, "translate"),
            t.qZA()()),
            2 & n && (t.xp6(4),
            t.hij(" ", t.lcZ(5, 1, "TITLE_LOGIN"), " "))
        }
        function ap(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "button", 39),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.goToProfilePage())
                }),
                t.TgZ(1, "mat-icon"),
                t._uU(2, " account_circle "),
                t.qZA(),
                t.TgZ(3, "span"),
                t._uU(4),
                t.qZA()()
            }
            if (2 & n) {
                const e = t.oxw();
                t.xp6(4),
                t.hij(" ", e.userEmail, " ")
            }
        }
        function ip(n, a) {
            1 & n && (t.TgZ(0, "button", 40)(1, "mat-icon"),
            t._uU(2, " account_balance "),
            t.qZA(),
            t.TgZ(3, "span"),
            t._uU(4),
            t.ALo(5, "translate"),
            t.qZA()()),
            2 & n && (t.xp6(4),
            t.hij(" ", t.lcZ(5, 1, "ACCOUNTING"), " "))
        }
        function rp(n, a) {
            if (1 & n && (t.TgZ(0, "button", 41)(1, "mat-icon"),
            t._uU(2, " check_circle_outline "),
            t.qZA(),
            t.TgZ(3, "span"),
            t._uU(4),
            t.ALo(5, "translate"),
            t.qZA()()),
            2 & n) {
                t.oxw();
                const e = t.MAs(71);
                t.Q6J("matMenuTriggerFor", e),
                t.xp6(4),
                t.hij(" ", t.lcZ(5, 2, "ORDERS_AND_PAYMENT"), " ")
            }
        }
        function sp(n, a) {
            if (1 & n && (t.TgZ(0, "button", 42)(1, "mat-icon"),
            t._uU(2, " security "),
            t.qZA(),
            t.TgZ(3, "span"),
            t._uU(4),
            t.ALo(5, "translate"),
            t.qZA()()),
            2 & n) {
                t.oxw();
                const e = t.MAs(38);
                t.Q6J("matMenuTriggerFor", e),
                t.xp6(4),
                t.hij(" ", t.lcZ(5, 2, "PRIVACY_AND_SECURITY"), " ")
            }
        }
        function lp(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "button", 43),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.logout())
                }),
                t.TgZ(1, "mat-icon"),
                t._uU(2, " power_settings_new "),
                t.qZA(),
                t.TgZ(3, "span"),
                t._uU(4),
                t.ALo(5, "translate"),
                t.qZA()()
            }
            2 & n && (t.xp6(4),
            t.hij(" ", t.lcZ(5, 1, "TITLE_LOGOUT"), " "))
        }
        function cp(n, a) {
            if (1 & n && (t.TgZ(0, "button", 44)(1, "mat-icon"),
            t._uU(2, " shopping_cart "),
            t.qZA(),
            t.TgZ(3, "span", 20),
            t._uU(4),
            t.ALo(5, "translate"),
            t.qZA(),
            t.TgZ(6, "span", 45),
            t._uU(7),
            t.qZA()()),
            2 & n) {
                const e = t.oxw();
                t.xp6(4),
                t.hij(" ", t.lcZ(5, 2, "TITLE_BASKET"), ""),
                t.xp6(3),
                t.Oqu(e.itemTotal)
            }
        }
        function up(n, a) {
            1 & n && t._UZ(0, "span"),
            2 & n && t.Tol("fi fi-" + a.$implicit)
        }
        function pp(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "mat-radio-button", 46),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.oxw();
                    return t.KtG(l.changeLanguage(r.key))
                }),
                t.TgZ(1, "div", 47),
                t.YNc(2, up, 1, 2, "span", 48),
                t._uU(3),
                t.qZA(),
                t._UZ(4, "i"),
                t.qZA()
            }
            if (2 & n) {
                const e = a.$implicit
                  , o = t.oxw();
                t.s9C("checked", o.selectedLanguage === e),
                t.s9C("aria-label", e.lang),
                t.Q6J("value", e),
                t.xp6(2),
                t.Q6J("ngForOf", e.icons),
                t.xp6(1),
                t.hij(" ", null == e ? null : e.lang, " "),
                t.xp6(1),
                t.Tol("fas fa-thermometer-" + e.gauge + (e.percentage > 70 ? " confirmation" : " error"))
            }
        }
        function dp(n, a) {
            1 & n && (t.TgZ(0, "button", 49)(1, "mat-icon"),
            t._uU(2, " my_location "),
            t.qZA(),
            t.TgZ(3, "span"),
            t._uU(4),
            t.ALo(5, "translate"),
            t.qZA()()),
            2 & n && (t.xp6(4),
            t.hij(" ", t.lcZ(5, 1, "MY_SAVED_ADRESSES"), " "))
        }
        function mp(n, a) {
            1 & n && (t.TgZ(0, "button", 50)(1, "mat-icon"),
            t._uU(2, " credit_card "),
            t.qZA(),
            t.TgZ(3, "span"),
            t._uU(4),
            t.ALo(5, "translate"),
            t.qZA()()),
            2 & n && (t.xp6(4),
            t.hij(" ", t.lcZ(5, 1, "MY_PAYMENT_OPTIONS"), " "))
        }
        function gp(n, a) {
            1 & n && (t.TgZ(0, "button", 51)(1, "mat-icon"),
            t._uU(2, " account_balance_wallet "),
            t.qZA(),
            t.TgZ(3, "span"),
            t._uU(4),
            t.ALo(5, "translate"),
            t.qZA()()),
            2 & n && (t.xp6(4),
            t.hij(" ", t.lcZ(5, 1, "DIGITAL_WALLET"), " "))
        }
        const hp = function() {
            return ["privacy-security/privacy-policy"]
        }
          , _p = function() {
            return ["privacy-security/data-export"]
        }
          , fp = function() {
            return ["privacy-security/change-password"]
        }
          , Cp = function() {
            return ["privacy-security/two-factor-authentication"]
        }
          , vp = function() {
            return ["privacy-security/last-login-ip"]
        };
        O.vI.add(g.BCn, g.wn1, g.$Wj, g.jLD, g.Mzg, g.Yme, g.kWN, g.sqG, g.sq$, g.BC0, g.TZC, g.Mzo, g.m08, Z.zhw, D.lX, g.$cZ, g.fZP, g.whq, g.xJT, g.VN$);
        let xp = (()=>{
            class n {
                constructor(e, o, i, r, l, m, v, A, q, Y, dt, Zt, wt) {
                    this.administrationService = e,
                    this.challengeService = o,
                    this.configurationService = i,
                    this.userService = r,
                    this.ngZone = l,
                    this.cookieService = m,
                    this.router = v,
                    this.translate = A,
                    this.io = q,
                    this.langService = Y,
                    this.loginGuard = dt,
                    this.snackBar = Zt,
                    this.basketService = wt,
                    this.userEmail = "",
                    this.languages = [],
                    this.selectedLanguage = "placeholder",
                    this.version = "",
                    this.applicationName = "OWASP Juice Shop",
                    this.showGitHubLink = !0,
                    this.logoSrc = "assets/public/images/JuiceShop_Logo.png",
                    this.scoreBoardVisible = !1,
                    this.shortKeyLang = "placeholder",
                    this.itemTotal = 0,
                    this.sidenavToggle = new t.vpe,
                    this.onToggleSidenav = ()=>{
                        this.sidenavToggle.emit()
                    }
                }
                ngOnInit() {
                    this.getLanguages(),
                    this.basketService.getItemTotal().subscribe(e=>this.itemTotal = e),
                    this.administrationService.getApplicationVersion().subscribe(e=>{
                        e && (this.version = `v${e}`)
                    }
                    , e=>{
                        console.log(e)
                    }
                    ),
                    this.configurationService.getApplicationConfiguration().subscribe(e=>{
                        if (e?.application?.name && (this.applicationName = e.application.name),
                        e?.application && (this.showGitHubLink = e.application.showGitHubLinks),
                        e?.application?.logo) {
                            let o = e.application.logo;
                            "http" === o.substring(0, 4) && (o = decodeURIComponent(o.substring(o.lastIndexOf("/") + 1))),
                            this.logoSrc = "assets/public/images/" + o
                        }
                    }
                    , e=>{
                        console.log(e)
                    }
                    ),
                    localStorage.getItem("token") ? this.getUserDetails() : this.userEmail = "",
                    this.userService.getLoggedInState().subscribe(e=>{
                        e ? this.getUserDetails() : this.userEmail = ""
                    }
                    ),
                    this.getScoreBoardStatus(),
                    this.ngZone.runOutsideAngular(()=>{
                        this.io.socket().on("challenge solved", e=>{
                            "scoreBoardChallenge" === e.key && (this.scoreBoardVisible = !0)
                        }
                        )
                    }
                    )
                }
                checkLanguage() {
                    if (this.cookieService.get("language")) {
                        const e = this.cookieService.get("language");
                        this.translate.use(e),
                        this.selectedLanguage = this.languages.find(o=>o.key === e),
                        this.shortKeyLang = this.languages.find(o=>o.key === e).shortKey
                    } else
                        this.changeLanguage("en"),
                        this.selectedLanguage = this.languages.find(e=>"en" === e.key),
                        this.shortKeyLang = this.languages.find(e=>"en" === e.key).shortKey
                }
                search(e) {
                    var o = this;
                    if (e) {
                        const i = {
                            queryParams: {
                                q: e
                            }
                        };
                        this.ngZone.run((0,
                        w.Z)(function*() {
                            return yield o.router.navigate(["/search"], i)
                        }))
                    } else
                        this.ngZone.run((0,
                        w.Z)(function*() {
                            return yield o.router.navigate(["/search"])
                        }))
                }
                getUserDetails() {
                    this.userService.whoAmI().subscribe(e=>{
                        this.userEmail = e.email
                    }
                    , e=>{
                        console.log(e)
                    }
                    )
                }
                isLoggedIn() {
                    return localStorage.getItem("token")
                }
                logout() {
                    var e = this;
                    this.userService.saveLastLoginIp().subscribe(o=>{
                        this.noop()
                    }
                    , o=>{
                        console.log(o)
                    }
                    ),
                    localStorage.removeItem("token"),
                    this.cookieService.remove("token"),
                    sessionStorage.removeItem("bid"),
                    sessionStorage.removeItem("itemTotal"),
                    this.userService.isLoggedIn.next(!1),
                    this.ngZone.run((0,
                    w.Z)(function*() {
                        return yield e.router.navigate(["/"])
                    }))
                }
                changeLanguage(e) {
                    this.translate.use(e);
                    const o = new Date;
                    if (o.setFullYear(o.getFullYear() + 1),
                    this.cookieService.put("language", e, {
                        expires: o
                    }),
                    this.languages.find(i=>i.key === e)) {
                        const i = this.languages.find(l=>l.key === e);
                        this.shortKeyLang = i.shortKey,
                        this.snackBar.open(`Language has been changed to ${i.lang}`, "Force page reload", {
                            duration: 5e3
                        }).onAction().subscribe(()=>{
                            location.reload()
                        }
                        )
                    }
                }
                getScoreBoardStatus() {
                    this.challengeService.find({
                        name: "Score Board"
                    }).subscribe(e=>{
                        this.ngZone.run(()=>{
                            this.scoreBoardVisible = e[0].solved
                        }
                        )
                    }
                    , e=>{
                        console.log(e)
                    }
                    )
                }
                goToProfilePage() {
                    window.location.replace(P.N.hostServer + "/profile")
                }
                goToDataErasurePage() {
                    window.location.replace(P.N.hostServer + "/dataerasure")
                }
                noop() {}
                getLanguages() {
                    this.langService.getLanguages().subscribe(e=>{
                        this.languages = e,
                        this.checkLanguage()
                    }
                    )
                }
                isAccounting() {
                    const e = this.loginGuard.tokenDecode();
                    return e?.data && "accounting" === e.data.role
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(ge),t.Y36(ot),t.Y36(b.e),t.Y36(R),t.Y36(t.R0b),t.Y36(I.N_),t.Y36(L.F0),t.Y36(u.sK),t.Y36(st),t.Y36(np),t.Y36(K),t.Y36(ut.ux),t.Y36(X))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-navbar"]],
                outputs: {
                    sidenavToggle: "sidenavToggle"
                },
                decls: 88,
                vars: 43,
                consts: [["color", "primary", "fxLayout", "column", "xmlns", "http://www.w3.org/1999/html", 1, "mat-elevation-z6"], ["fxLayout", "row"], ["mat-button", "", "aria-label", "Open Sidenav", "matTooltipPosition", "below", 2, "height", "48px", "width", "48px", 3, "matTooltip", "click"], ["mat-button", "", "routerLink", "/search", "aria-label", "Back to homepage", 1, "buttons", 2, "height", "60px"], [1, "logo", 3, "src", "alt"], ["fxHide.lt-sm", "", "fxShow", "", 2, "font-size", "x-large"], [1, "fill-remaining-space"], ["id", "searchQuery", "aria-label", "Click to search", 3, "onEnter"], ["searchControl", ""], ["mat-button", "", "fxHide.lt-md", "", "fxShow", "", "aria-label", "Show/hide account menu", "id", "navbarAccount", 1, "buttons", 2, "vertical-align", "middle", "height", "48px", 3, "matMenuTriggerFor"], [1, "material-icons"], ["userMenu", "matMenu"], ["mat-menu-item", "", "routerLink", "/login", "aria-label", "Go to login page", "id", "navbarLoginButton", 4, "ngIf"], ["mat-menu-item", "", "aria-label", "Go to user profile", 3, "click", 4, "ngIf"], ["mat-menu-item", "", "routerLink", "/accounting", "aria-label", "Go to accounting page", 4, "ngIf"], ["mat-menu-item", "", "aria-label", "Show Orders and Payment Menu", 3, "matMenuTriggerFor", 4, "ngIf"], ["mat-menu-item", "", "aria-label", "Show Privacy and Security Menu", 3, "matMenuTriggerFor", 4, "ngIf"], ["mat-menu-item", "", "aria-label", "Logout", "id", "navbarLogoutButton", 3, "click", 4, "ngIf"], ["mat-button", "", "routerLink", "/basket", "style", "height:48px;", "class", "buttons", "aria-label", "Show the shopping cart", 4, "ngIf"], ["mat-button", "", "aria-label", "Language selection menu", "matTooltipPosition", "below", 1, "buttons", 2, "height", "48px", "width", "48px", 3, "matMenuTriggerFor", "matTooltip"], ["fxHide.lt-md", "", "fxShow", ""], [3, "overlapTrigger"], ["menu", "matMenu"], ["class", "mat-menu-item", "style", "width: 240px;", 3, "value", "checked", "aria-label", "click", 4, "ngFor", "ngForOf"], ["privacySubMenu", "matMenu"], ["mat-menu-item", "", "aria-label", "Go to privacy policy page", 3, "routerLink"], ["translate", ""], ["mat-menu-item", "", "aria-label", "Go to data export page", 3, "routerLink"], ["mat-menu-item", "", "aria-label", "Go to data subject page", 3, "click"], ["mat-menu-item", "", "aria-label", "Go to change password page", 3, "routerLink"], ["mat-menu-item", "", "aria-label", "Go to two factor authentication page", 3, "routerLink"], ["mat-menu-item", "", "aria-label", "Go to last login ip page", 3, "routerLink"], ["ordersSubMenu", "matMenu"], ["mat-menu-item", "", "routerLink", "/order-history", "aria-label", "Go to order history page"], ["mat-menu-item", "", "routerLink", "/recycle", "aria-label", "Go to recycling page"], ["mat-menu-item", "", "routerLink", "/address/saved", "aria-label", "Go to saved address page", 4, "ngIf"], ["mat-menu-item", "", "routerLink", "/saved-payment-methods", "aria-label", "Go to saved payment methods page", 4, "ngIf"], ["mat-menu-item", "", "routerLink", "/wallet", "aria-label", "Go to wallet page", 4, "ngIf"], ["mat-menu-item", "", "routerLink", "/login", "aria-label", "Go to login page", "id", "navbarLoginButton"], ["mat-menu-item", "", "aria-label", "Go to user profile", 3, "click"], ["mat-menu-item", "", "routerLink", "/accounting", "aria-label", "Go to accounting page"], ["mat-menu-item", "", "aria-label", "Show Orders and Payment Menu", 3, "matMenuTriggerFor"], ["mat-menu-item", "", "aria-label", "Show Privacy and Security Menu", 3, "matMenuTriggerFor"], ["mat-menu-item", "", "aria-label", "Logout", "id", "navbarLogoutButton", 3, "click"], ["mat-button", "", "routerLink", "/basket", "aria-label", "Show the shopping cart", 1, "buttons", 2, "height", "48px"], [1, "fa-layers-counter", "fa-layers-top-right", "fa-3x", "warn-notification", 2, "font-size", "47px"], [1, "mat-menu-item", 2, "width", "240px", 3, "value", "checked", "aria-label", "click"], [2, "display", "inline-block", "width", "200px", "margin-left", "5px"], [3, "class", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", "routerLink", "/address/saved", "aria-label", "Go to saved address page"], ["mat-menu-item", "", "routerLink", "/saved-payment-methods", "aria-label", "Go to saved payment methods page"], ["mat-menu-item", "", "routerLink", "/wallet", "aria-label", "Go to wallet page"]],
                template: function(e, o) {
                    if (1 & e) {
                        const i = t.EpF();
                        t.TgZ(0, "mat-toolbar", 0)(1, "mat-toolbar-row", 1)(2, "button", 2),
                        t.NdJ("click", function() {
                            return o.onToggleSidenav()
                        }),
                        t.ALo(3, "translate"),
                        t.TgZ(4, "mat-icon"),
                        t._uU(5, "menu"),
                        t.qZA()(),
                        t.TgZ(6, "button", 3),
                        t._UZ(7, "img", 4),
                        t.TgZ(8, "span", 5),
                        t._uU(9),
                        t.qZA()(),
                        t._UZ(10, "span", 6),
                        t.TgZ(11, "mat-search-bar", 7, 8),
                        t.NdJ("onEnter", function() {
                            t.CHM(i);
                            const l = t.MAs(12);
                            return t.KtG(o.search(l.value))
                        }),
                        t.qZA(),
                        t.TgZ(13, "button", 9)(14, "i", 10),
                        t._uU(15, " account_circle "),
                        t.qZA(),
                        t.TgZ(16, "span"),
                        t._uU(17),
                        t.ALo(18, "translate"),
                        t.qZA()(),
                        t.TgZ(19, "mat-menu", null, 11),
                        t.YNc(21, op, 6, 3, "button", 12),
                        t.YNc(22, ap, 5, 1, "button", 13),
                        t.YNc(23, ip, 6, 3, "button", 14),
                        t.YNc(24, rp, 6, 4, "button", 15),
                        t.YNc(25, sp, 6, 4, "button", 16),
                        t.YNc(26, lp, 6, 3, "button", 17),
                        t.qZA(),
                        t.YNc(27, cp, 8, 4, "button", 18),
                        t.TgZ(28, "button", 19),
                        t.ALo(29, "translate"),
                        t.TgZ(30, "mat-icon"),
                        t._uU(31, " language "),
                        t.qZA(),
                        t.TgZ(32, "span", 20),
                        t._uU(33),
                        t.qZA()(),
                        t.TgZ(34, "mat-menu", 21, 22),
                        t.YNc(36, pp, 5, 7, "mat-radio-button", 23),
                        t.qZA(),
                        t.TgZ(37, "mat-menu", null, 24)(39, "button", 25)(40, "mat-icon"),
                        t._uU(41, " assignment "),
                        t.qZA(),
                        t.TgZ(42, "span", 26),
                        t._uU(43, "TITLE_PRIVACY_POLICY"),
                        t.qZA()(),
                        t.TgZ(44, "button", 27)(45, "mat-icon"),
                        t._uU(46, " get_app "),
                        t.qZA(),
                        t.TgZ(47, "span", 26),
                        t._uU(48, "TITLE_REQUEST_DATA_EXPORT"),
                        t.qZA()(),
                        t.TgZ(49, "button", 28),
                        t.NdJ("click", function() {
                            return o.goToDataErasurePage()
                        }),
                        t.TgZ(50, "mat-icon"),
                        t._uU(51, " delete_forever "),
                        t.qZA(),
                        t.TgZ(52, "span", 26),
                        t._uU(53, "DATA_SUBJECT_TITLE"),
                        t.qZA()(),
                        t._UZ(54, "mat-divider"),
                        t.TgZ(55, "button", 29)(56, "mat-icon"),
                        t._uU(57, " edit "),
                        t.qZA(),
                        t.TgZ(58, "span", 26),
                        t._uU(59, "TITLE_CHANGE_PASSWORD"),
                        t.qZA()(),
                        t.TgZ(60, "button", 30)(61, "mat-icon"),
                        t._uU(62, " exposure_plus_2 "),
                        t.qZA(),
                        t.TgZ(63, "span", 26),
                        t._uU(64, "TITLE_TWO_FACTOR_AUTH_CONFIG"),
                        t.qZA()(),
                        t.TgZ(65, "button", 31)(66, "mat-icon"),
                        t._uU(67, " place "),
                        t.qZA(),
                        t.TgZ(68, "span", 26),
                        t._uU(69, "LAST_LOGIN_IP"),
                        t.qZA()()(),
                        t.TgZ(70, "mat-menu", null, 32)(72, "button", 33)(73, "mat-icon"),
                        t._uU(74, " archive "),
                        t.qZA(),
                        t.TgZ(75, "span"),
                        t._uU(76),
                        t.ALo(77, "translate"),
                        t.qZA()(),
                        t.TgZ(78, "button", 34)(79, "mat-icon"),
                        t._uU(80, " autorenew "),
                        t.qZA(),
                        t.TgZ(81, "span"),
                        t._uU(82),
                        t.ALo(83, "translate"),
                        t.qZA()(),
                        t._UZ(84, "mat-divider"),
                        t.YNc(85, dp, 6, 3, "button", 35),
                        t.YNc(86, mp, 6, 3, "button", 36),
                        t.YNc(87, gp, 6, 3, "button", 37),
                        t.qZA()()()
                    }
                    if (2 & e) {
                        const i = t.MAs(20)
                          , r = t.MAs(35);
                        t.xp6(2),
                        t.s9C("matTooltip", t.lcZ(3, 28, "SIDENAV_HINT")),
                        t.xp6(5),
                        t.s9C("alt", o.applicationName),
                        t.Q6J("src", o.logoSrc, t.LSH),
                        t.xp6(2),
                        t.hij(" ", o.applicationName, " "),
                        t.xp6(4),
                        t.Q6J("matMenuTriggerFor", i),
                        t.xp6(4),
                        t.hij(" ", t.lcZ(18, 30, "ACCOUNT"), " "),
                        t.xp6(4),
                        t.Q6J("ngIf", !o.isLoggedIn()),
                        t.xp6(1),
                        t.Q6J("ngIf", o.isLoggedIn()),
                        t.xp6(1),
                        t.Q6J("ngIf", o.isLoggedIn() && o.isAccounting()),
                        t.xp6(1),
                        t.Q6J("ngIf", o.isLoggedIn()),
                        t.xp6(1),
                        t.Q6J("ngIf", o.isLoggedIn()),
                        t.xp6(1),
                        t.Q6J("ngIf", o.isLoggedIn()),
                        t.xp6(1),
                        t.Q6J("ngIf", o.isLoggedIn()),
                        t.xp6(1),
                        t.s9C("matTooltip", t.lcZ(29, 32, "LANGUAGE_SEL_HINT")),
                        t.Q6J("matMenuTriggerFor", r),
                        t.xp6(5),
                        t.hij(" ", o.shortKeyLang, " "),
                        t.xp6(1),
                        t.Q6J("overlapTrigger", !0),
                        t.xp6(2),
                        t.Q6J("ngForOf", o.languages),
                        t.xp6(3),
                        t.Q6J("routerLink", t.DdM(38, hp)),
                        t.xp6(5),
                        t.Q6J("routerLink", t.DdM(39, _p)),
                        t.xp6(11),
                        t.Q6J("routerLink", t.DdM(40, fp)),
                        t.xp6(5),
                        t.Q6J("routerLink", t.DdM(41, Cp)),
                        t.xp6(5),
                        t.Q6J("routerLink", t.DdM(42, vp)),
                        t.xp6(11),
                        t.hij(" ", t.lcZ(77, 34, "LABEL_ORDER_HISTORY"), " "),
                        t.xp6(6),
                        t.hij(" ", t.lcZ(83, 36, "NAV_RECYCLE"), " "),
                        t.xp6(3),
                        t.Q6J("ngIf", o.isLoggedIn()),
                        t.xp6(1),
                        t.Q6J("ngIf", o.isLoggedIn()),
                        t.xp6(1),
                        t.Q6J("ngIf", o.isLoggedIn())
                    }
                },
                dependencies: [h.sg, h.O5, L.rH, u.Pi, p.xw, $.b8, At.Ye, At.rD, F.Hw, x.lW, z.d, Q.gM, Ft.VK, Ft.OP, Ft.p6, en.w5, nt.U0, u.X$],
                styles: ["mat-toolbar[_ngcontent-%COMP%]{height:auto;min-width:100%;padding-bottom:5px;width:100%}.mat-button[_ngcontent-%COMP%]{padding-left:8px;padding-right:8px}.logo[_ngcontent-%COMP%]{max-height:60px;width:auto}.avatar[_ngcontent-%COMP%]{background-repeat:no-repeat no-repeat;border-radius:50%;display:inline-block;max-height:35px;max-width:35px;padding:0;pointer-events:none}.fill-remaining-space[_ngcontent-%COMP%]{flex:1 1 auto}.language-select[_ngcontent-%COMP%]{margin-left:10px;width:11%}  .mat-select-value-text{font-size:15px}.user-info[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px}.fi[_ngcontent-%COMP%]{margin-right:2px}[_nghost-%COMP%]     mat-form-field{background:transparent!important}[_nghost-%COMP%]     mat-icon{background:transparent!important}mat-search-bar[_ngcontent-%COMP%]{font-size:13px;margin-right:14px}.buttons[_ngcontent-%COMP%]{width:auto}@media screen and (max-width: 959px){.buttons[_ngcontent-%COMP%]{width:48px}}[_nghost-%COMP%]     .mat-form-field-infix{max-width:250px!important;width:14vw!important}"]
            }),
            n
        }
        )();
        function bp(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "button", 4),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.startHackingInstructor())
                }),
                t.ALo(1, "translate"),
                t.TgZ(2, "mat-icon"),
                t._uU(3, " school "),
                t.qZA(),
                t.TgZ(4, "span", 5),
                t._uU(5, "BTN_GETTING_STARTED"),
                t.qZA()()
            }
            2 & n && t.Q6J("matTooltip", t.lcZ(1, 1, "SCORE_BOARD_HACKING_INSTRUCTOR"))
        }
        function Tp(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "button", 6),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.closeWelcome())
                }),
                t.TgZ(1, "mat-icon"),
                t._uU(2, " visibility_off "),
                t.qZA(),
                t.TgZ(3, "span", 7),
                t._uU(4, "BTN_DISMISS"),
                t.qZA()()
            }
        }
        let Ap = (()=>{
            class n {
                constructor(e, o, i) {
                    this.dialogRef = e,
                    this.configurationService = o,
                    this.cookieService = i,
                    this.title = "Welcome to OWASP Juice Shop",
                    this.message = "<p>Being a web application with a vast number of intended security vulnerabilities, the <strong>OWASP Juice Shop</strong> is supposed to be the opposite of a best practice or template application for web developers: It is an awareness, training, demonstration and exercise tool for security risks in modern web applications. The <strong>OWASP Juice Shop</strong> is an open-source project hosted by the non-profit <a href='https://owasp.org' target='_blank'>Open Web Application Security Project (OWASP)</a> and is developed and maintained by volunteers. Check out the link below for more information and documentation on the project.</p><h1><a href='https://owasp-juice.shop' target='_blank'>https://owasp-juice.shop</a></h1>",
                    this.showHackingInstructor = !0,
                    this.showDismissBtn = !0,
                    this.welcomeBannerStatusCookieKey = "welcomebanner_status"
                }
                ngOnInit() {
                    this.configurationService.getApplicationConfiguration().subscribe(e=>{
                        e?.application?.welcomeBanner && (this.title = e.application.welcomeBanner.title,
                        this.message = e.application.welcomeBanner.message),
                        this.showHackingInstructor = e?.hackingInstructor?.isEnabled,
                        this.showHackingInstructor && e?.challenges?.restrictToTutorialsFirst && (this.dialogRef.disableClose = !0,
                        this.showDismissBtn = !1)
                    }
                    , e=>{
                        console.log(e)
                    }
                    )
                }
                startHackingInstructor() {
                    this.closeWelcome(),
                    console.log('Starting instructions for challenge "Score Board"'),
                    Promise.resolve().then(c.bind(c, 1096)).then(e=>{
                        e.startHackingInstructorFor("Score Board")
                    }
                    )
                }
                closeWelcome() {
                    this.dialogRef.close();
                    const e = new Date;
                    e.setFullYear(e.getFullYear() + 1),
                    this.cookieService.put(this.welcomeBannerStatusCookieKey, "dismiss", {
                        expires: e
                    })
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(N.so),t.Y36(b.e),t.Y36(I.N_))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-welcome-banner"]],
                decls: 8,
                vars: 4,
                consts: [[1, "mat-typography"], [1, "text-justify", 3, "innerHtml"], ["mat-raised-button", "", "color", "warn", "matTooltipPosition", "above", 3, "matTooltip", "click", 4, "ngIf"], ["mat-raised-button", "", "class", "close-dialog", "color", "primary", "aria-label", "Close Welcome Banner", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "warn", "matTooltipPosition", "above", 3, "matTooltip", "click"], ["fxShow", "", "fxHide.lt-lg", "", "translate", ""], ["mat-raised-button", "", "color", "primary", "aria-label", "Close Welcome Banner", 1, "close-dialog", 3, "click"], ["fxShow", "", "fxHide.lt-sm", "", "translate", ""]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "div", 0)(1, "h1")(2, "span"),
                    t._uU(3),
                    t.qZA()(),
                    t._UZ(4, "div", 1),
                    t.TgZ(5, "div"),
                    t.YNc(6, bp, 6, 3, "button", 2),
                    t.YNc(7, Tp, 5, 0, "button", 3),
                    t.qZA()()),
                    2 & e && (t.xp6(3),
                    t.Oqu(o.title),
                    t.xp6(1),
                    t.Q6J("innerHtml", o.message, t.oJD),
                    t.xp6(2),
                    t.Q6J("ngIf", o.showHackingInstructor),
                    t.xp6(1),
                    t.Q6J("ngIf", o.showDismissBtn))
                },
                dependencies: [h.O5, u.Pi, $.b8, F.Hw, x.lW, Q.gM, u.X$],
                styles: [".text-justify[_ngcontent-%COMP%]{text-align:justify;text-justify:inter-word}[_nghost-%COMP%]     h1 a{font-size:20px}[_nghost-%COMP%]     strong{font-style:italic}"]
            }),
            n
        }
        )()
          , yp = (()=>{
            class n {
                constructor(e, o, i) {
                    this.dialog = e,
                    this.configurationService = o,
                    this.cookieService = i,
                    this.welcomeBannerStatusCookieKey = "welcomebanner_status"
                }
                ngOnInit() {
                    "dismiss" !== this.cookieService.get(this.welcomeBannerStatusCookieKey) && this.configurationService.getApplicationConfiguration().subscribe(o=>{
                        o?.application?.welcomeBanner && !o.application.welcomeBanner.showOnFirstStart || this.dialog.open(Ap, {
                            minWidth: "320px",
                            width: "35%",
                            position: {
                                top: "50px"
                            }
                        })
                    }
                    , o=>{
                        console.log(o)
                    }
                    )
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(N.uw),t.Y36(b.e),t.Y36(I.N_))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-welcome"]],
                decls: 1,
                vars: 0,
                template: function(e, o) {
                    1 & e && t._UZ(0, "div")
                },
                styles: [".welcome-style[_ngcontent-%COMP%]   .mat-dialog-container[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;max-width:50%;min-width:320px}"]
            }),
            n
        }
        )();
        function Zp(n, a) {
            1 & n && (t.TgZ(0, "span", 2),
            t._uU(1, "RESTART_REQUIRED"),
            t.qZA())
        }
        function wp(n, a) {
            1 & n && (t.TgZ(0, "span", 2),
            t._uU(1, "RESET_HACKING_PROGRESS"),
            t.qZA())
        }
        function Sp(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "mat-card", 1),
                t._UZ(1, "mat-card-header"),
                t.TgZ(2, "mat-card-content")(3, "span", 2),
                t._uU(4, "NOTIFICATION_SERVER_STARTED"),
                t.qZA(),
                t._uU(5),
                t.TgZ(6, "button", 3),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.closeNotification())
                }),
                t._uU(7, "X"),
                t.qZA(),
                t.TgZ(8, "button", 4),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.clearProgress())
                }),
                t.TgZ(9, "mat-icon"),
                t._uU(10, " delete_forever "),
                t.qZA(),
                t.YNc(11, Zp, 2, 0, "span", 5),
                t.YNc(12, wp, 2, 0, "span", 5),
                t.qZA()()()
            }
            if (2 & n) {
                const e = t.oxw();
                t.xp6(5),
                t.hij(": ", e.hackingProgress.autoRestoreMessage, "\xa0"),
                t.xp6(3),
                t.Q6J("disabled", e.hackingProgress.cleared),
                t.xp6(3),
                t.Q6J("ngIf", e.hackingProgress.cleared),
                t.xp6(1),
                t.Q6J("ngIf", !e.hackingProgress.cleared)
            }
        }
        let kp = (()=>{
            class n {
                constructor(e, o, i, r, l, m) {
                    this.ngZone = e,
                    this.challengeService = o,
                    this.translate = i,
                    this.cookieService = r,
                    this.ref = l,
                    this.io = m,
                    this.hackingProgress = {}
                }
                ngOnInit() {
                    this.ngZone.runOutsideAngular(()=>{
                        this.io.socket().on("server started", ()=>{
                            const e = this.cookieService.get("continueCode")
                              , o = this.cookieService.get("continueCodeFindIt")
                              , i = this.cookieService.get("continueCodeFixIt");
                            e && this.challengeService.restoreProgress(encodeURIComponent(e)).subscribe(()=>{
                                this.translate.get("AUTO_RESTORED_PROGRESS").subscribe(r=>{
                                    this.hackingProgress.autoRestoreMessage = r
                                }
                                , r=>{
                                    this.hackingProgress.autoRestoreMessage = r
                                }
                                )
                            }
                            , r=>{
                                console.log(r),
                                this.translate.get("AUTO_RESTORE_PROGRESS_FAILED", {
                                    error: r
                                }).subscribe(l=>{
                                    this.hackingProgress.autoRestoreMessage = l
                                }
                                , l=>{
                                    this.hackingProgress.autoRestoreMessage = l
                                }
                                )
                            }
                            ),
                            o && this.challengeService.restoreProgressFindIt(encodeURIComponent(o)).subscribe(()=>{}
                            , r=>{
                                console.log(r)
                            }
                            ),
                            i && this.challengeService.restoreProgressFixIt(encodeURIComponent(i)).subscribe(()=>{}
                            , r=>{
                                console.log(r)
                            }
                            ),
                            this.ref.detectChanges()
                        }
                        )
                    }
                    )
                }
                closeNotification() {
                    this.hackingProgress.autoRestoreMessage = null
                }
                clearProgress() {
                    this.cookieService.remove("continueCode"),
                    this.cookieService.remove("continueCodeFixIt"),
                    this.cookieService.remove("continueCodeFindIt"),
                    this.cookieService.remove("token"),
                    sessionStorage.removeItem("bid"),
                    sessionStorage.removeItem("itemTotal"),
                    localStorage.removeItem("token"),
                    localStorage.removeItem("displayedDifficulties"),
                    localStorage.removeItem("showSolvedChallenges"),
                    localStorage.removeItem("showDisabledChallenges"),
                    localStorage.removeItem("showOnlyTutorialChallenges"),
                    localStorage.removeItem("displayedChallengeCategories"),
                    this.hackingProgress.cleared = !0
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(t.R0b),t.Y36(ot),t.Y36(u.sK),t.Y36(I.N_),t.Y36(t.sBO),t.Y36(st))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-server-started-notification"]],
                decls: 1,
                vars: 1,
                consts: [["class", "container primary-notification mat-elevation-z4", 4, "ngIf"], [1, "container", "primary-notification", "mat-elevation-z4"], ["translate", ""], ["id", "closeButton", "mat-button", "", 3, "click"], ["mat-stroked-button", "", 3, "disabled", "click"], ["translate", "", 4, "ngIf"]],
                template: function(e, o) {
                    1 & e && t.YNc(0, Sp, 13, 4, "mat-card", 0),
                    2 & e && t.Q6J("ngIf", o.hackingProgress.autoRestoreMessage)
                },
                dependencies: [h.O5, u.Pi, F.Hw, x.lW, T.a8, T.dk, T.dn],
                styles: [".container[_ngcontent-%COMP%]{font-size:14px;margin:40px}#closeButton[_ngcontent-%COMP%]{float:right}"]
            }),
            n
        }
        )()
          , Ip = (()=>{
            class n {
                constructor(e) {
                    this.http = e,
                    this.hostServer = P.N.hostServer
                }
                getCountryMapping() {
                    return this.http.get(this.hostServer + "/rest/country-mapping").pipe((0,
                    _.K)(e=>{
                        throw e
                    }
                    ))
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.LFG(U.eN))
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )();
        function Op(n, a) {
            if (1 & n && (t._UZ(0, "span"),
            t.ALo(1, "lowercase")),
            2 & n) {
                const e = t.oxw(2).$implicit;
                t.Gre("fi fi-", t.lcZ(1, 3, e.country.code), "")
            }
        }
        function Up(n, a) {
            1 & n && (t.TgZ(0, "mat-icon"),
            t._uU(1, "my_location"),
            t.qZA())
        }
        function Lp(n, a) {
            if (1 & n && (t.TgZ(0, "span"),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2).$implicit;
                t.xp6(1),
                t.hij(" ", e.country.name, " ")
            }
        }
        function Pp(n, a) {
            if (1 & n && (t.TgZ(0, "span", 5),
            t.YNc(1, Op, 2, 5, "span", 8),
            t.YNc(2, Up, 2, 0, "mat-icon", 9),
            t._uU(3, "\xa0 "),
            t.YNc(4, Lp, 2, 1, "span", 9),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngIf", "flag" === e.showCtfCountryDetailsInNotifications || "both" === e.showCtfCountryDetailsInNotifications),
                t.xp6(1),
                t.Q6J("ngIf", "name" === e.showCtfCountryDetailsInNotifications),
                t.xp6(2),
                t.Q6J("ngIf", "name" === e.showCtfCountryDetailsInNotifications || "both" === e.showCtfCountryDetailsInNotifications)
            }
        }
        function Np(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "mat-card", 2)(1, "div"),
                t._uU(2),
                t.TgZ(3, "button", 3),
                t.NdJ("click", function(i) {
                    const l = t.CHM(e).index
                      , m = t.oxw();
                    return t.KtG(m.closeNotification(l, i.shiftKey))
                }),
                t._uU(4, "X"),
                t.qZA()(),
                t._UZ(5, "br"),
                t.TgZ(6, "div", 4)(7, "span", 5)(8, "mat-icon"),
                t._uU(9, "outlined_flag"),
                t.qZA(),
                t._uU(10),
                t.qZA(),
                t._uU(11, "\xa0 "),
                t.TgZ(12, "button", 6),
                t.NdJ("cbOnSuccess", function() {
                    const r = t.CHM(e).$implicit;
                    return t.KtG(r.copied = !0)
                }),
                t.TgZ(13, "mat-icon"),
                t._uU(14, "content_copy"),
                t.qZA(),
                t.TgZ(15, "span", 4),
                t._uU(16),
                t.ALo(17, "translate"),
                t.qZA(),
                t.TgZ(18, "span", 4),
                t._uU(19),
                t.ALo(20, "translate"),
                t.qZA()(),
                t._UZ(21, "br"),
                t.YNc(22, Pp, 5, 3, "span", 7),
                t.qZA()()
            }
            if (2 & n) {
                const e = a.$implicit
                  , o = t.oxw();
                t.xp6(2),
                t.Oqu(e.message),
                t.xp6(4),
                t.Q6J("hidden", !o.showCtfFlagsInNotifications),
                t.xp6(4),
                t.hij(" ", e.flag, ""),
                t.xp6(2),
                t.Q6J("cbContent", e.flag)("disabled", e.copied),
                t.xp6(3),
                t.Q6J("hidden", !e.copied),
                t.xp6(1),
                t.Oqu(t.lcZ(17, 10, "COPY_SUCCESS")),
                t.xp6(2),
                t.Q6J("hidden", e.copied),
                t.xp6(1),
                t.Oqu(t.lcZ(20, 12, "COPY_TO_CLIPBOARD")),
                t.xp6(3),
                t.Q6J("ngIf", "none" !== o.showCtfCountryDetailsInNotifications)
            }
        }
        let Ep = (()=>{
            class n {
                constructor(e, o, i, r, l, m, v, A) {
                    this.ngZone = e,
                    this.configurationService = o,
                    this.challengeService = i,
                    this.countryMappingService = r,
                    this.translate = l,
                    this.cookieService = m,
                    this.ref = v,
                    this.io = A,
                    this.notifications = [],
                    this.showCtfFlagsInNotifications = !1,
                    this.showCtfCountryDetailsInNotifications = "none"
                }
                ngOnInit() {
                    this.ngZone.runOutsideAngular(()=>{
                        this.io.socket().on("challenge solved", e=>{
                            e?.challenge && (e.hidden || this.showNotification(e),
                            e.isRestore || (this.saveProgress(),
                            e.hidden || c.e(103).then(c.bind(c, 8103)).then(o=>{
                                o.shootConfetti()
                            }
                            )),
                            this.io.socket().emit("notification received", e.flag))
                        }
                        )
                    }
                    ),
                    this.configurationService.getApplicationConfiguration().subscribe(e=>{
                        e?.ctf && (this.showCtfFlagsInNotifications = !!e.ctf.showFlagsInNotifications && e.ctf.showFlagsInNotifications,
                        e.ctf.showCountryDetailsInNotifications ? (this.showCtfCountryDetailsInNotifications = e.ctf.showCountryDetailsInNotifications,
                        "none" !== e.ctf.showCountryDetailsInNotifications && this.countryMappingService.getCountryMapping().subscribe(o=>{
                            this.countryMap = o
                        }
                        , o=>{
                            console.log(o)
                        }
                        )) : this.showCtfCountryDetailsInNotifications = "none")
                    }
                    )
                }
                closeNotification(e, o=!1) {
                    o ? (this.ngZone.runOutsideAngular(()=>{
                        this.io.socket().emit("verifyCloseNotificationsChallenge", this.notifications)
                    }
                    ),
                    this.notifications = []) : this.notifications.splice(e, 1),
                    this.ref.detectChanges()
                }
                showNotification(e) {
                    this.translate.get("CHALLENGE_SOLVED", {
                        challenge: e.challenge
                    }).toPromise().then(o=>o, o=>o).then(o=>{
                        let i;
                        this.showCtfCountryDetailsInNotifications && "none" !== this.showCtfCountryDetailsInNotifications && (i = this.countryMap[e.key]),
                        this.notifications.push({
                            message: o,
                            flag: e.flag,
                            country: i,
                            copied: !1
                        }),
                        this.ref.detectChanges()
                    }
                    )
                }
                saveProgress() {
                    this.challengeService.continueCode().subscribe(e=>{
                        if (!e)
                            throw new Error("Received invalid continue code from the server!");
                        const o = new Date;
                        o.setFullYear(o.getFullYear() + 1),
                        this.cookieService.put("continueCode", e, {
                            expires: o
                        })
                    }
                    , e=>{
                        console.log(e)
                    }
                    )
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(t.R0b),t.Y36(b.e),t.Y36(ot),t.Y36(Ip),t.Y36(u.sK),t.Y36(I.N_),t.Y36(t.sBO),t.Y36(st))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-challenge-solved-notification"]],
                decls: 2,
                vars: 1,
                consts: [[1, "container", "challenge-solved-toast", "mat-elevation-z4"], ["class", "accent-notification", 4, "ngFor", "ngForOf"], [1, "accent-notification"], ["id", "closeButton", "mat-button", "", 3, "click"], [3, "hidden"], [1, "icon-box"], ["ngxClipboard", "", "mat-stroked-button", "", 3, "cbContent", "disabled", "cbOnSuccess"], ["class", "icon-box", 4, "ngIf"], [3, "class", 4, "ngIf"], [4, "ngIf"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "div", 0),
                    t.YNc(1, Np, 23, 14, "mat-card", 1),
                    t.qZA()),
                    2 & e && (t.xp6(1),
                    t.Q6J("ngForOf", o.notifications))
                },
                dependencies: [h.sg, h.O5, tn.yb, F.Hw, x.lW, T.a8, h.i8, u.X$],
                styles: [".container[_ngcontent-%COMP%]{font-size:14px;margin:40px}mat-card[_ngcontent-%COMP%]{margin-bottom:10px}#closeButton[_ngcontent-%COMP%]{float:right}.icon-box[_ngcontent-%COMP%]{display:inline-flex;vertical-align:middle}"]
            }),
            n
        }
        )();
        var yt = c(6338);
        function Mp(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "a", 36),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.onToggleSidenav())
                }),
                t.TgZ(1, "mat-icon"),
                t._uU(2, " exit_to_app "),
                t.qZA(),
                t.TgZ(3, "span", 14),
                t._uU(4),
                t.ALo(5, "translate"),
                t.qZA()()
            }
            2 & n && (t.xp6(4),
            t.hij(" ", t.lcZ(5, 1, "TITLE_LOGIN"), " "))
        }
        function Dp(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "a", 37),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return i.onToggleSidenav(),
                    t.KtG(i.goToProfilePage())
                }),
                t.TgZ(1, "mat-icon"),
                t._uU(2, " account_circle "),
                t.qZA(),
                t.TgZ(3, "span", 14),
                t._uU(4),
                t.qZA()()
            }
            if (2 & n) {
                const e = t.oxw();
                t.xp6(4),
                t.hij(" ", e.userEmail, " ")
            }
        }
        function qp(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "a", 38),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.onToggleSidenav())
                }),
                t.TgZ(1, "mat-icon"),
                t._uU(2, " account_balance "),
                t.qZA(),
                t.TgZ(3, "span", 14),
                t._uU(4),
                t.ALo(5, "translate"),
                t.qZA()()
            }
            2 & n && (t.xp6(4),
            t.hij(" ", t.lcZ(5, 1, "ACCOUNTING"), " "))
        }
        const nn = function(n) {
            return {
                rotated: n
            }
        };
        function Fp(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "mat-list-item", 39),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.showOrdersSubmenu = !i.showOrdersSubmenu)
                }),
                t.TgZ(1, "mat-icon"),
                t._uU(2, " check_circle_outline "),
                t.qZA(),
                t.TgZ(3, "span", 14),
                t._uU(4),
                t.ALo(5, "translate"),
                t.qZA(),
                t.TgZ(6, "mat-icon", 40),
                t._uU(7, " expand_more "),
                t.qZA()()
            }
            if (2 & n) {
                const e = t.oxw();
                t.xp6(4),
                t.hij(" ", t.lcZ(5, 2, "ORDERS_AND_PAYMENT"), " "),
                t.xp6(2),
                t.Q6J("ngClass", t.VKq(4, nn, e.showOrdersSubmenu))
            }
        }
        function Bp(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "a", 47),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw(2);
                    return i.onToggleSidenav(),
                    t.KtG(i.showOrdersSubmenu = !i.showOrdersSubmenu)
                }),
                t.TgZ(1, "mat-icon"),
                t._uU(2, " archive "),
                t.qZA(),
                t.TgZ(3, "span", 14),
                t._uU(4),
                t.ALo(5, "translate"),
                t.qZA()()
            }
            2 & n && (t.xp6(4),
            t.hij(" ", t.lcZ(5, 1, "LABEL_ORDER_HISTORY"), " "))
        }
        function Rp(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "a", 48),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw(2);
                    return i.onToggleSidenav(),
                    t.KtG(i.showOrdersSubmenu = !i.showOrdersSubmenu)
                }),
                t.TgZ(1, "mat-icon"),
                t._uU(2, " autorenew "),
                t.qZA(),
                t.TgZ(3, "span", 14),
                t._uU(4),
                t.ALo(5, "translate"),
                t.qZA()()
            }
            2 & n && (t.xp6(4),
            t.hij(" ", t.lcZ(5, 1, "NAV_RECYCLE"), " "))
        }
        function Yp(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "a", 49),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw(2);
                    return i.onToggleSidenav(),
                    t.KtG(i.showOrdersSubmenu = !i.showOrdersSubmenu)
                }),
                t.TgZ(1, "mat-icon"),
                t._uU(2, " my_location "),
                t.qZA(),
                t.TgZ(3, "span", 14),
                t._uU(4),
                t.ALo(5, "translate"),
                t.qZA()()
            }
            2 & n && (t.xp6(4),
            t.hij(" ", t.lcZ(5, 1, "MY_SAVED_ADRESSES"), " "))
        }
        function Jp(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "a", 50),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw(2);
                    return i.onToggleSidenav(),
                    t.KtG(i.showOrdersSubmenu = !i.showOrdersSubmenu)
                }),
                t.TgZ(1, "mat-icon"),
                t._uU(2, " credit_card "),
                t.qZA(),
                t.TgZ(3, "span", 14),
                t._uU(4),
                t.ALo(5, "translate"),
                t.qZA()()
            }
            2 & n && (t.xp6(4),
            t.hij(" ", t.lcZ(5, 1, "MY_PAYMENT_OPTIONS"), " "))
        }
        function Qp(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "a", 51),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw(2);
                    return i.onToggleSidenav(),
                    t.KtG(i.showOrdersSubmenu = !i.showOrdersSubmenu)
                }),
                t.TgZ(1, "mat-icon"),
                t._uU(2, " account_balance_wallet "),
                t.qZA(),
                t.TgZ(3, "span", 14),
                t._uU(4),
                t.ALo(5, "translate"),
                t.qZA()()
            }
            2 & n && (t.xp6(4),
            t.hij(" ", t.lcZ(5, 1, "DIGITAL_WALLET"), " "))
        }
        const on = function(n) {
            return {
                expanded: n
            }
        };
        function Hp(n, a) {
            if (1 & n && (t.TgZ(0, "div", 41),
            t.YNc(1, Bp, 6, 3, "a", 42),
            t.YNc(2, Rp, 6, 3, "a", 43),
            t._UZ(3, "mat-divider"),
            t.YNc(4, Yp, 6, 3, "a", 44),
            t.YNc(5, Jp, 6, 3, "a", 45),
            t.YNc(6, Qp, 6, 3, "a", 46),
            t.qZA()),
            2 & n) {
                const e = t.oxw();
                t.Q6J("ngClass", t.VKq(6, on, e.showOrdersSubmenu)),
                t.xp6(1),
                t.Q6J("ngIf", e.isLoggedIn()),
                t.xp6(1),
                t.Q6J("ngIf", e.isLoggedIn()),
                t.xp6(2),
                t.Q6J("ngIf", e.isLoggedIn()),
                t.xp6(1),
                t.Q6J("ngIf", e.isLoggedIn()),
                t.xp6(1),
                t.Q6J("ngIf", e.isLoggedIn())
            }
        }
        function Gp(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "mat-list-item", 52),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.showPrivacySubmenu = !i.showPrivacySubmenu)
                }),
                t.TgZ(1, "mat-icon"),
                t._uU(2, " security "),
                t.qZA(),
                t.TgZ(3, "span", 14),
                t._uU(4),
                t.ALo(5, "translate"),
                t.qZA(),
                t.TgZ(6, "mat-icon", 40),
                t._uU(7, " expand_more "),
                t.qZA()()
            }
            if (2 & n) {
                const e = t.oxw();
                t.xp6(4),
                t.hij(" ", t.lcZ(5, 2, "PRIVACY_AND_SECURITY"), " "),
                t.xp6(2),
                t.Q6J("ngClass", t.VKq(4, nn, e.showPrivacySubmenu))
            }
        }
        function jp(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "a", 59),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw(2);
                    return i.onToggleSidenav(),
                    t.KtG(i.showPrivacySubmenu = !i.showPrivacySubmenu)
                }),
                t.TgZ(1, "mat-icon"),
                t._uU(2, " assignment "),
                t.qZA(),
                t.TgZ(3, "span", 60),
                t._uU(4, "TITLE_PRIVACY_POLICY"),
                t.qZA()()
            }
        }
        function Wp(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "a", 61),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw(2);
                    return i.onToggleSidenav(),
                    t.KtG(i.showPrivacySubmenu = !i.showPrivacySubmenu)
                }),
                t.TgZ(1, "mat-icon"),
                t._uU(2, " get_app "),
                t.qZA(),
                t.TgZ(3, "span", 60),
                t._uU(4, "TITLE_REQUEST_DATA_EXPORT"),
                t.qZA()()
            }
        }
        function Kp(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "a", 62),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw(2);
                    return t.KtG(i.goToDataErasurePage())
                })("click", function() {
                    t.CHM(e);
                    const i = t.oxw(2);
                    return i.onToggleSidenav(),
                    t.KtG(i.showPrivacySubmenu = !i.showPrivacySubmenu)
                }),
                t.TgZ(1, "mat-icon"),
                t._uU(2, " delete_forever "),
                t.qZA(),
                t.TgZ(3, "span", 60),
                t._uU(4, "DATA_SUBJECT_TITLE"),
                t.qZA()()
            }
        }
        function zp(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "a", 63),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw(2);
                    return i.onToggleSidenav(),
                    t.KtG(i.showPrivacySubmenu = !i.showPrivacySubmenu)
                }),
                t.TgZ(1, "mat-icon"),
                t._uU(2, " edit "),
                t.qZA(),
                t.TgZ(3, "span", 60),
                t._uU(4, "TITLE_CHANGE_PASSWORD"),
                t.qZA()()
            }
        }
        function $p(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "a", 64),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw(2);
                    return i.onToggleSidenav(),
                    t.KtG(i.showPrivacySubmenu = !i.showPrivacySubmenu)
                }),
                t.TgZ(1, "mat-icon"),
                t._uU(2, " exposure_plus_2 "),
                t.qZA(),
                t.TgZ(3, "span", 60),
                t._uU(4, "TITLE_TWO_FACTOR_AUTH_CONFIG"),
                t.qZA()()
            }
        }
        function Vp(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "a", 65),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw(2);
                    return i.onToggleSidenav(),
                    t.KtG(i.showPrivacySubmenu = !i.showPrivacySubmenu)
                }),
                t.TgZ(1, "mat-icon"),
                t._uU(2, " place "),
                t.qZA(),
                t.TgZ(3, "span", 60),
                t._uU(4, "LAST_LOGIN_IP"),
                t.qZA()()
            }
        }
        function Xp(n, a) {
            if (1 & n && (t.TgZ(0, "div", 41),
            t.YNc(1, jp, 5, 0, "a", 53),
            t.YNc(2, Wp, 5, 0, "a", 54),
            t.YNc(3, Kp, 5, 0, "a", 55),
            t._UZ(4, "mat-divider"),
            t.YNc(5, zp, 5, 0, "a", 56),
            t.YNc(6, $p, 5, 0, "a", 57),
            t.YNc(7, Vp, 5, 0, "a", 58),
            t.qZA()),
            2 & n) {
                const e = t.oxw();
                t.Q6J("ngClass", t.VKq(7, on, e.showPrivacySubmenu)),
                t.xp6(1),
                t.Q6J("ngIf", e.isLoggedIn()),
                t.xp6(1),
                t.Q6J("ngIf", e.isLoggedIn()),
                t.xp6(1),
                t.Q6J("ngIf", e.isLoggedIn()),
                t.xp6(2),
                t.Q6J("ngIf", e.isLoggedIn()),
                t.xp6(1),
                t.Q6J("ngIf", e.isLoggedIn()),
                t.xp6(1),
                t.Q6J("ngIf", e.isLoggedIn())
            }
        }
        function td(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "a", 66),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return i.onToggleSidenav(),
                    t.KtG(i.logout())
                }),
                t.TgZ(1, "mat-icon"),
                t._uU(2, " power_settings_new "),
                t.qZA(),
                t.TgZ(3, "span", 14),
                t._uU(4),
                t.ALo(5, "translate"),
                t.qZA()()
            }
            2 & n && (t.xp6(4),
            t.hij(" ", t.lcZ(5, 1, "TITLE_LOGOUT"), " "))
        }
        function ed(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "a", 67),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.onToggleSidenav())
                }),
                t.TgZ(1, "i", 13),
                t._uU(2, " sentiment_dissatisfied "),
                t.qZA(),
                t.TgZ(3, "span", 14),
                t._uU(4),
                t.ALo(5, "translate"),
                t.qZA()()
            }
            2 & n && (t.xp6(4),
            t.hij(" ", t.lcZ(5, 1, "NAV_COMPLAIN"), " "))
        }
        function nd(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "a", 68),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.onToggleSidenav())
                }),
                t.TgZ(1, "i", 13),
                t._uU(2, " chat "),
                t.qZA(),
                t.TgZ(3, "span", 14),
                t._uU(4),
                t.ALo(5, "translate"),
                t.qZA()()
            }
            2 & n && (t.xp6(4),
            t.hij(" ", t.lcZ(5, 1, "SECTION_SUPPORT_CHAT"), " "))
        }
        function od(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "a", 69),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.onToggleSidenav())
                }),
                t.TgZ(1, "i", 13),
                t._uU(2, " card_membership "),
                t.qZA(),
                t.TgZ(3, "span", 14),
                t._uU(4),
                t.ALo(5, "translate"),
                t.qZA()()
            }
            2 & n && (t.xp6(4),
            t.hij(" ", t.lcZ(5, 1, "LABEL_DELUXE_MEMBERSHIP"), " "))
        }
        function ad(n, a) {
            1 & n && t._UZ(0, "mat-divider", 70)
        }
        function id(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "a", 71),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.onToggleSidenav())
                }),
                t.ALo(1, "async"),
                t._UZ(2, "mat-icon", 72),
                t.TgZ(3, "span", 14),
                t._uU(4),
                t.ALo(5, "translate"),
                t.qZA()()
            }
            if (2 & n) {
                const e = t.oxw();
                t.Q6J("routerLink", t.lcZ(1, 2, e.scoreBoardLink$)),
                t.xp6(4),
                t.hij(" ", t.lcZ(5, 4, "TITLE_SCORE_BOARD"), " ")
            }
        }
        function rd(n, a) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "a", 73),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.startHackingInstructor())
                }),
                t.TgZ(1, "i", 13),
                t._uU(2, " school "),
                t.qZA(),
                t.TgZ(3, "span", 14),
                t._uU(4),
                t.ALo(5, "translate"),
                t.qZA()()
            }
            2 & n && (t.xp6(4),
            t.hij(" ", t.lcZ(5, 1, "BTN_GETTING_STARTED"), " "))
        }
        function sd(n, a) {
            1 & n && (t.TgZ(0, "a", 74),
            t._UZ(1, "mat-icon", 75),
            t.TgZ(2, "span", 14),
            t._uU(3, " GitHub "),
            t.qZA()())
        }
        let ld = (()=>{
            class n {
                constructor(e, o, i, r, l, m, v, A, q, Y) {
                    this.administrationService = e,
                    this.challengeService = o,
                    this.ngZone = i,
                    this.io = r,
                    this.userService = l,
                    this.cookieService = m,
                    this.router = v,
                    this.configurationService = A,
                    this.loginGuard = q,
                    this.featureFlagService = Y,
                    this.applicationName = "OWASP Juice Shop",
                    this.showGitHubLink = !0,
                    this.userEmail = "",
                    this.scoreBoardVisible = !1,
                    this.version = "",
                    this.showPrivacySubmenu = !1,
                    this.showOrdersSubmenu = !1,
                    this.isShowing = !1,
                    this.offerScoreBoardTutorial = !1,
                    this.sidenavToggle = new t.vpe,
                    this.onToggleSidenav = ()=>{
                        this.sidenavToggle.emit()
                    }
                }
                ngOnInit() {
                    this.administrationService.getApplicationVersion().subscribe(e=>{
                        e && (this.version = `v${e}`)
                    }
                    , e=>{
                        console.log(e)
                    }
                    ),
                    this.getApplicationDetails(),
                    this.getScoreBoardStatus(),
                    localStorage.getItem("token") ? this.getUserDetails() : this.userEmail = "",
                    this.userService.getLoggedInState().subscribe(e=>{
                        e ? this.getUserDetails() : this.userEmail = ""
                    }
                    ),
                    this.ngZone.runOutsideAngular(()=>{
                        this.io.socket().on("challenge solved", e=>{
                            "scoreBoardChallenge" === e.key && (this.scoreBoardVisible = !0)
                        }
                        )
                    }
                    ),
                    this.scoreBoardLink$ = this.featureFlagService.defaultScoreBoard$.pipe((0,
                    C.U)(e=>"v1" === e ? "/score-board-legacy" : "/score-board"))
                }
                isLoggedIn() {
                    return localStorage.getItem("token")
                }
                logout() {
                    var e = this;
                    this.userService.saveLastLoginIp().subscribe(o=>{
                        this.noop()
                    }
                    , o=>{
                        console.log(o)
                    }
                    ),
                    localStorage.removeItem("token"),
                    this.cookieService.remove("token"),
                    sessionStorage.removeItem("bid"),
                    sessionStorage.removeItem("itemTotal"),
                    this.userService.isLoggedIn.next(!1),
                    this.ngZone.run((0,
                    w.Z)(function*() {
                        return yield e.router.navigate(["/"])
                    }))
                }
                goToProfilePage() {
                    window.location.replace(P.N.hostServer + "/profile")
                }
                goToDataErasurePage() {
                    window.location.replace(P.N.hostServer + "/dataerasure")
                }
                noop() {}
                getScoreBoardStatus() {
                    this.challengeService.find({
                        name: "Score Board"
                    }).subscribe(e=>{
                        this.ngZone.run(()=>{
                            this.scoreBoardVisible = e[0].solved
                        }
                        )
                    }
                    , e=>{
                        console.log(e)
                    }
                    )
                }
                getUserDetails() {
                    this.userService.whoAmI().subscribe(e=>{
                        this.userEmail = e.email
                    }
                    , e=>{
                        console.log(e)
                    }
                    )
                }
                getApplicationDetails() {
                    this.configurationService.getApplicationConfiguration().subscribe(e=>{
                        e?.application?.name && (this.applicationName = e.application.name),
                        e?.application && (this.showGitHubLink = e.application.showGitHubLinks),
                        e?.application.welcomeBanner.showOnFirstStart && e.hackingInstructor.isEnabled && (this.offerScoreBoardTutorial = e.application.welcomeBanner.showOnFirstStart && e.hackingInstructor.isEnabled)
                    }
                    , e=>{
                        console.log(e)
                    }
                    )
                }
                isAccounting() {
                    return "accounting" === this.loginGuard.tokenDecode()?.data?.role
                }
                startHackingInstructor() {
                    this.onToggleSidenav(),
                    console.log('Starting instructions for challenge "Score Board"'),
                    Promise.resolve().then(c.bind(c, 1096)).then(e=>{
                        e.startHackingInstructorFor("Score Board")
                    }
                    )
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(ge),t.Y36(ot),t.Y36(t.R0b),t.Y36(st),t.Y36(R),t.Y36(I.N_),t.Y36(L.F0),t.Y36(b.e),t.Y36(K),t.Y36(me))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["sidenav"]],
                outputs: {
                    sidenavToggle: "sidenavToggle"
                },
                decls: 72,
                vars: 27,
                consts: [["color", "primary", 1, "mat-elevation-z6"], ["mat-button", "", 2, "height", "0", "position", "absolute"], ["mat-subheader", "", "translate", "", "fxHide", "", "fxShow.lt-md", "", 1, "side-subHeader"], ["fxHide", "", "fxShow.lt-md", ""], ["mat-list-item", "", "routerLink", "/login", "aria-label", "Go to login page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "aria-label", "Go to user profile", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/accounting", "aria-label", "Go to accounting page", 3, "click", 4, "ngIf"], ["class", "parent", "aria-label", "Show Orders and Payment Menu", 3, "click", 4, "ngIf"], ["class", "submenu", 3, "ngClass", 4, "ngIf"], ["class", "parent", "aria-label", "Show Privacy and Security Menu", 3, "click", 4, "ngIf"], ["mat-list-item", "", "aria-label", "Logout", 3, "click", 4, "ngIf"], ["mat-subheader", "", "translate", "", 1, "side-subHeader"], ["mat-list-item", "", "routerLink", "/contact", "aria-label", "Go to contact us page", 3, "click"], [1, "material-icons"], [1, "menu-text", "truncate"], ["mat-list-item", "", "routerLink", "/complain", "aria-label", "Go to complain page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/chatbot", "aria-label", "Go to chatbot page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/about", "aria-label", "Go to about us page", 3, "click"], ["mat-list-item", "", "routerLink", "/photo-wall", "aria-label", "Go to photo wall", 3, "click"], ["mat-list-item", "", "routerLink", "/deluxe-membership", "aria-label", "Go to deluxe membership page", 3, "click", 4, "ngIf"], ["style", "margin-bottom: 10px;", 4, "ngIf"], ["mat-list-item", "", "aria-label", "Open score-board", 3, "routerLink", "click", 4, "ngIf"], ["mat-list-item", "", "aria-label", "Launch beginners tutorial", 3, "click", 4, "ngIf"], ["mat-list-item", "", "href", "./redirect?to=https://github.com/juice-shop/juice-shop", "aria-label", "Go to OWASP Juice Shop GitHub page", 4, "ngIf"], [1, "appVersion"], [2, "font-size", "13px"], [2, "font-size", "12px"], [2, "margin-top", "10px"], [1, "icon-angular"], [1, "icon-html5"], [1, "icon-sass"], [1, "icon-css3"], [1, "icon-javascript-alt"], [1, "icon-nodejs"], [1, "icon-database-alt2"], [1, "icon-mongodb"], ["mat-list-item", "", "routerLink", "/login", "aria-label", "Go to login page", 3, "click"], ["mat-list-item", "", "aria-label", "Go to user profile", 3, "click"], ["mat-list-item", "", "routerLink", "/accounting", "aria-label", "Go to accounting page", 3, "click"], ["aria-label", "Show Orders and Payment Menu", 1, "parent", 3, "click"], [1, "menu-button", 3, "ngClass"], [1, "submenu", 3, "ngClass"], ["mat-list-item", "", "routerLink", "/order-history", "aria-label", "Go to order history page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/recycle", "aria-label", "Go to recycling page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/address/saved", "aria-label", "Go to saved address page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/saved-payment-methods", "aria-label", "Go to saved payment methods page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/wallet", "aria-label", "Go to wallet page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/order-history", "aria-label", "Go to order history page", 3, "click"], ["mat-list-item", "", "routerLink", "/recycle", "aria-label", "Go to recycling page", 3, "click"], ["mat-list-item", "", "routerLink", "/address/saved", "aria-label", "Go to saved address page", 3, "click"], ["mat-list-item", "", "routerLink", "/saved-payment-methods", "aria-label", "Go to saved payment methods page", 3, "click"], ["mat-list-item", "", "routerLink", "/wallet", "aria-label", "Go to wallet page", 3, "click"], ["aria-label", "Show Privacy and Security Menu", 1, "parent", 3, "click"], ["mat-list-item", "", "routerLink", "privacy-security/privacy-policy", "aria-label", "Go to privacy policy page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "privacy-security/data-export", "aria-label", "Go to data export page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "aria-label", "Go to data subject page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "privacy-security/change-password", "aria-label", "Go to change password page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "privacy-security/two-factor-authentication", "aria-label", "Go to two factor authentication page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "privacy-security/last-login-ip", "aria-label", "Go to last login ip page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "privacy-security/privacy-policy", "aria-label", "Go to privacy policy page", 3, "click"], ["translate", "", 1, "menu-text", "truncate"], ["mat-list-item", "", "routerLink", "privacy-security/data-export", "aria-label", "Go to data export page", 3, "click"], ["mat-list-item", "", "aria-label", "Go to data subject page", 3, "click"], ["mat-list-item", "", "routerLink", "privacy-security/change-password", "aria-label", "Go to change password page", 3, "click"], ["mat-list-item", "", "routerLink", "privacy-security/two-factor-authentication", "aria-label", "Go to two factor authentication page", 3, "click"], ["mat-list-item", "", "routerLink", "privacy-security/last-login-ip", "aria-label", "Go to last login ip page", 3, "click"], ["mat-list-item", "", "aria-label", "Logout", 3, "click"], ["mat-list-item", "", "routerLink", "/complain", "aria-label", "Go to complain page", 3, "click"], ["mat-list-item", "", "routerLink", "/chatbot", "aria-label", "Go to chatbot page", 3, "click"], ["mat-list-item", "", "routerLink", "/deluxe-membership", "aria-label", "Go to deluxe membership page", 3, "click"], [2, "margin-bottom", "10px"], ["mat-list-item", "", "aria-label", "Open score-board", 3, "routerLink", "click"], ["matListIcon", "", 1, "fas", "fa-trophy", "fa-lg"], ["mat-list-item", "", "aria-label", "Launch beginners tutorial", 3, "click"], ["mat-list-item", "", "href", "./redirect?to=https://github.com/juice-shop/juice-shop", "aria-label", "Go to OWASP Juice Shop GitHub page"], ["matListIcon", "", 1, "fab", "fa-github", "fa-lg"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "mat-toolbar", 0)(1, "mat-toolbar-row")(2, "h2"),
                    t._uU(3),
                    t.qZA()()(),
                    t.TgZ(4, "mat-nav-list"),
                    t._UZ(5, "button", 1),
                    t.TgZ(6, "h3", 2),
                    t._uU(7, "ACCOUNT"),
                    t.qZA(),
                    t.TgZ(8, "div", 3),
                    t.YNc(9, Mp, 6, 3, "a", 4),
                    t.YNc(10, Dp, 5, 1, "a", 5),
                    t.YNc(11, qp, 6, 3, "a", 6),
                    t.YNc(12, Fp, 8, 6, "mat-list-item", 7),
                    t.YNc(13, Hp, 7, 8, "div", 8),
                    t.YNc(14, Gp, 8, 6, "mat-list-item", 9),
                    t.YNc(15, Xp, 8, 9, "div", 8),
                    t.YNc(16, td, 6, 3, "a", 10),
                    t.qZA(),
                    t._UZ(17, "mat-divider", 3),
                    t.TgZ(18, "h3", 11),
                    t._uU(19, "TITLE_CONTACT"),
                    t.qZA(),
                    t.TgZ(20, "a", 12),
                    t.NdJ("click", function() {
                        return o.onToggleSidenav()
                    }),
                    t.TgZ(21, "i", 13),
                    t._uU(22, " feedback "),
                    t.qZA(),
                    t.TgZ(23, "span", 14),
                    t._uU(24),
                    t.ALo(25, "translate"),
                    t.qZA()(),
                    t.YNc(26, ed, 6, 3, "a", 15),
                    t.YNc(27, nd, 6, 3, "a", 16),
                    t._UZ(28, "mat-divider"),
                    t.TgZ(29, "h3", 11),
                    t._uU(30, "COMPANY"),
                    t.qZA(),
                    t.TgZ(31, "a", 17),
                    t.NdJ("click", function() {
                        return o.onToggleSidenav()
                    }),
                    t.TgZ(32, "i", 13),
                    t._uU(33, " business_center "),
                    t.qZA(),
                    t.TgZ(34, "span", 14),
                    t._uU(35),
                    t.ALo(36, "translate"),
                    t.qZA()(),
                    t.TgZ(37, "a", 18),
                    t.NdJ("click", function() {
                        return o.onToggleSidenav()
                    }),
                    t.TgZ(38, "i", 13),
                    t._uU(39, " camera "),
                    t.qZA(),
                    t.TgZ(40, "span", 14),
                    t._uU(41),
                    t.ALo(42, "translate"),
                    t.qZA()(),
                    t.YNc(43, od, 6, 3, "a", 19),
                    t.YNc(44, ad, 1, 0, "mat-divider", 20),
                    t.YNc(45, id, 6, 6, "a", 21),
                    t.YNc(46, rd, 6, 3, "a", 22),
                    t.YNc(47, sd, 4, 0, "a", 23),
                    t.qZA(),
                    t.TgZ(48, "div", 24)(49, "span")(50, "span", 25),
                    t._uU(51),
                    t.qZA(),
                    t._UZ(52, "br"),
                    t.TgZ(53, "span", 26),
                    t._uU(54),
                    t.qZA(),
                    t._UZ(55, "br"),
                    t.TgZ(56, "div", 27),
                    t._UZ(57, "i", 28),
                    t._uU(58, "\xa0 "),
                    t._UZ(59, "i", 29),
                    t._uU(60, "\xa0 "),
                    t._UZ(61, "i", 30),
                    t._uU(62, "\xa0 "),
                    t._UZ(63, "i", 31),
                    t._uU(64, "\xa0 "),
                    t._UZ(65, "i", 32),
                    t._uU(66, "\xa0 "),
                    t._UZ(67, "i", 33),
                    t._uU(68, "\xa0 "),
                    t._UZ(69, "i", 34),
                    t._uU(70, "\xa0 "),
                    t._UZ(71, "i", 35),
                    t.qZA()()()),
                    2 & e && (t.xp6(3),
                    t.hij(" ", o.applicationName, ""),
                    t.xp6(6),
                    t.Q6J("ngIf", !o.isLoggedIn()),
                    t.xp6(1),
                    t.Q6J("ngIf", o.isLoggedIn()),
                    t.xp6(1),
                    t.Q6J("ngIf", o.isLoggedIn() && o.isAccounting()),
                    t.xp6(1),
                    t.Q6J("ngIf", o.isLoggedIn()),
                    t.xp6(1),
                    t.Q6J("ngIf", o.showOrdersSubmenu),
                    t.xp6(1),
                    t.Q6J("ngIf", o.isLoggedIn()),
                    t.xp6(1),
                    t.Q6J("ngIf", o.showPrivacySubmenu),
                    t.xp6(1),
                    t.Q6J("ngIf", o.isLoggedIn()),
                    t.xp6(8),
                    t.hij(" ", t.lcZ(25, 21, "SECTION_CUSTOMER_FEEDBACK"), " "),
                    t.xp6(2),
                    t.Q6J("ngIf", o.isLoggedIn()),
                    t.xp6(1),
                    t.Q6J("ngIf", o.isLoggedIn()),
                    t.xp6(8),
                    t.hij(" ", t.lcZ(36, 23, "TITLE_ABOUT"), " "),
                    t.xp6(6),
                    t.hij(" ", t.lcZ(42, 25, "LABEL_PHOTO_WALL"), " "),
                    t.xp6(2),
                    t.Q6J("ngIf", o.isLoggedIn()),
                    t.xp6(1),
                    t.Q6J("ngIf", o.scoreBoardVisible || o.showGitHubLink),
                    t.xp6(1),
                    t.Q6J("ngIf", o.scoreBoardVisible),
                    t.xp6(1),
                    t.Q6J("ngIf", !o.scoreBoardVisible && o.offerScoreBoardTutorial),
                    t.xp6(1),
                    t.Q6J("ngIf", o.showGitHubLink),
                    t.xp6(4),
                    t.Oqu(o.applicationName),
                    t.xp6(3),
                    t.Oqu(o.version))
                },
                dependencies: [h.mk, h.O5, L.rH, u.Pi, $.b8, $.oO, At.Ye, At.rD, F.Hw, x.lW, z.d, yt.Hk, yt.Tg, yt.Nh, yt.gs, h.Ov, u.X$],
                styles: ["mat-toolbar[_ngcontent-%COMP%]{height:auto;min-width:100%;padding-bottom:5px;width:100%}a[_ngcontent-%COMP%]{text-decoration:none!important}.menu-text[_ngcontent-%COMP%]{padding-left:10px}.mat-list-base[_ngcontent-%COMP%], .mat-list-item[_ngcontent-%COMP%], .mat-list-icon[_ngcontent-%COMP%]{padding:0!important}.toolbar-title[_ngcontent-%COMP%]{margin:0 16px}.mat-subheader[_ngcontent-%COMP%]{font-size:18px;font-weight:900}.app-nav-list-icon[_ngcontent-%COMP%]{margin:0 12px}.side-subHeader[_ngcontent-%COMP%]{font-weight:300}mat-nav-list[_ngcontent-%COMP%]{margin-bottom:50px}.menu-button[_ngcontent-%COMP%]{transform:rotate(0);transition:.3s ease-in-out}.menu-button.rotated[_ngcontent-%COMP%]{transform:rotate(180deg)}.submenu[_ngcontent-%COMP%]{overflow-y:hidden;padding-left:30px;transform:scaleY(0);transform-origin:top;transition:transform .3s ease}.submenu.expanded[_ngcontent-%COMP%]{transform:scaleY(1)}.appVersion[_ngcontent-%COMP%]{margin-bottom:20px;margin-top:20px;text-align:center}.truncate[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"]
            }),
            n
        }
        )();
        O.vz.watch();
        let cd = (()=>{
            class n {
                constructor(e, o) {
                    this._document = e,
                    this.translate = o,
                    this.translate.setDefaultLang("en")
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(h.K0),t.Y36(u.sK))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-root"]],
                decls: 10,
                vars: 0,
                consts: [[1, "mat-typography"], ["fullscreen", ""], ["mode", "over"], ["sidenav", ""], [3, "sidenavToggle"]],
                template: function(e, o) {
                    if (1 & e) {
                        const i = t.EpF();
                        t.TgZ(0, "div", 0)(1, "mat-sidenav-container", 1)(2, "mat-sidenav", 2, 3)(4, "sidenav", 4),
                        t.NdJ("sidenavToggle", function() {
                            t.CHM(i);
                            const l = t.MAs(3);
                            return t.KtG(l.toggle())
                        }),
                        t.qZA()(),
                        t.TgZ(5, "app-navbar", 4),
                        t.NdJ("sidenavToggle", function() {
                            t.CHM(i);
                            const l = t.MAs(3);
                            return t.KtG(l.toggle())
                        }),
                        t.qZA(),
                        t._UZ(6, "app-server-started-notification")(7, "app-challenge-solved-notification")(8, "app-welcome")(9, "router-outlet"),
                        t.qZA()()
                    }
                },
                dependencies: [L.lC, Tt.JX, Tt.TM, xp, yp, kp, Ep, ld],
                styles: [".mat-sidenav[_ngcontent-%COMP%]{width:280px}"]
            }),
            n
        }
        )()
          , ud = (()=>{
            class n {
                intercept(e, o) {
                    return localStorage.getItem("token") && (e = e.clone({
                        setHeaders: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                    })),
                    localStorage.getItem("email") && (e = e.clone({
                        setHeaders: {
                            "X-User-Email": String(localStorage.getItem("email"))
                        }
                    })),
                    o.handle(e)
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac
            }),
            n
        }
        )();
        var pd = c(6784)
          , dd = c(8746);
        let md = (()=>{
            class n {
            }
            return n.\u0275fac = function(e) {
                return new (e || n)
            }
            ,
            n.\u0275mod = t.oAB({
                type: n
            }),
            n.\u0275inj = t.cJS({
                imports: [h.ez, s.u5, x.ot, N.Is, f.lN, f.lN, F.Ps, B.c, vt.LD, Q.AV, nt.Fk, s.UX, L.Bz, u.aw, We.Cq]
            }),
            n
        }
        )();
        var gd = c(8184);
        function hd(n) {
            return new ep.w(n,"./assets/i18n/",".json")
        }
        let _d = (()=>{
            class n {
                constructor(e, o) {
                    this.configurationService = e,
                    this.overlayContainer = o,
                    e.getApplicationConfiguration().subscribe(i=>{
                        o.getContainerElement().classList.add(i.application.theme + "-theme")
                    }
                    )
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.LFG(b.e),t.LFG(gd.Xj))
            }
            ,
            n.\u0275mod = t.oAB({
                type: n,
                bootstrap: [cd]
            }),
            n.\u0275inj = t.cJS({
                providers: [{
                    provide: U.TP,
                    useClass: ud,
                    multi: !0
                }, {
                    provide: oe.rN,
                    useValue: {
                        coreLibraryLoader: (a = (0,
                        w.Z)(function*() {
                            return yield c.e(112).then(c.bind(c, 9112))
                        }),
                        function() {
                            return a.apply(this, arguments)
                        }
                        ),
                        lineNumbersLoader: function() {
                            var a = (0,
                            w.Z)(function*() {
                                return yield c.e(859).then(c.t.bind(c, 859, 23))
                            });
                            return function() {
                                return a.apply(this, arguments)
                            }
                        }(),
                        languages: {
                            typescript: function() {
                                var a = (0,
                                w.Z)(function*() {
                                    return yield c.e(535).then(c.bind(c, 2535))
                                });
                                return function() {
                                    return a.apply(this, arguments)
                                }
                            }(),
                            javascript: function() {
                                var a = (0,
                                w.Z)(function*() {
                                    return yield c.e(613).then(c.bind(c, 6613))
                                });
                                return function() {
                                    return a.apply(this, arguments)
                                }
                            }(),
                            yaml: function() {
                                var a = (0,
                                w.Z)(function*() {
                                    return yield c.e(472).then(c.bind(c, 8472))
                                });
                                return function() {
                                    return a.apply(this, arguments)
                                }
                            }()
                        }
                    }
                }, Lt, b.e, ge, Ht, Fe, R, xe, fe, Ut, Vt, Wt, we, Se, Qt, ke, X, ot, I.N_, It, K, ue, Ot, ht, qe, He.t, mt, Kt, ce, pe, Dt, Qe, me],
                imports: [k.b2, zu, u.aw.forRoot({
                    loader: {
                        provide: u.Zw,
                        useFactory: hd,
                        deps: [U.eN]
                    }
                }), I.m$.forRoot(), Ct.tw.forRoot(), pd.o9, U.JF, s.UX, dd.PW, ve.uK, se.N, te.Ob, tn.Iq, ae.ef, At.g0, F.Ps, s.u5, f.lN, vt.LD, x.ot, Tt.SJ, d.p0, xt.TU, T.QW, B.c, Xt.p9, N.Is, z.t, Nt.FA, Gt.XK, V.To, Ne.Cv, Q.AV, Ft.Tx, yt.ie, Ee.vV, re.xu, zt.N6, en.PQ, Me.g, nt.Fk, ut.ZX, Ce.KP, Mt.Nh, jt.rP, ie.Hi, Le.mC, oe._l, md]
            }),
            n;
            var a
        }
        )();
        P.N.production && (0,
        t.G48)(),
        k.q6().bootstrapModule(_d).catch(n=>console.log(n))
    }
}, tt=>{
    tt.O(0, [736], ()=>tt(tt.s = 5442)),
    tt.O()
}
]);
