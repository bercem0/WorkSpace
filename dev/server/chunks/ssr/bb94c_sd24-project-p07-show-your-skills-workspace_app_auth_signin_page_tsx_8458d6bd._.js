module.exports = [
"[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/auth/signin/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SignInPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function SignInPage() {
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(""); // Foutmelding tonen
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // Laadstatus
    // Form submit handler
    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setError("");
        // Form data ophalen
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");
        // Probeer in te loggen met credentials
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signIn"])("credentials", {
            email,
            password,
            redirect: false
        });
        if (res?.error) {
            // Foutmelding tonen bij verkeerde inloggegevens
            setError("Email of wachtwoord klopt niet.");
            setLoading(false);
            return;
        }
        // Succesvolle login → redirect naar home
        window.location.href = "/";
    }
    // Gastmodus login
    async function handleGuestLogin() {
        setLoading(true);
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signIn"])("credentials", {
            email: "guest@proje.com",
            password: "guest123",
            redirect: false
        });
        if (res?.error) {
            setError("Gastmodus is momenteel niet beschikbaar.");
            setLoading(false);
            return;
        }
        // Succesvolle gast login → redirect naar tasks
        window.location.href = "/tasks";
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex items-center justify-center min-h-screen bg-[#0E153A] px-4 font-sans text-white overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-[-10%] left-[-5%] w-[45%] h-[45%] bg-blue-500/10 blur-[120px] rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/auth/signin/page.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-[-10%] right-[-5%] w-[45%] h-[45%] bg-indigo-500/10 blur-[120px] rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/auth/signin/page.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/auth/signin/page.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-[420px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8 flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 rounded-[1.25rem] bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg flex items-center justify-center border border-white/20 shadow-2xl mb-4 transform hover:scale-105 transition-transform duration-300",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl font-black tracking-tighter text-white",
                                    children: "WS"
                                }, void 0, false, {
                                    fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/auth/signin/page.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/auth/signin/page.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-black tracking-[0.15em] text-white uppercase italic",
                                children: [
                                    "Work",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-400/80",
                                        children: "Space"
                                    }, void 0, false, {
                                        fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/auth/signin/page.tsx",
                                        lineNumber: 73,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/auth/signin/page.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-0.5 w-10 bg-blue-500/50 mt-2 rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/auth/signin/page.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/auth/signin/page.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -inset-0.5 bg-gradient-to-b from-blue-500/20 to-transparent rounded-[2.5rem] blur opacity-30"
                            }, void 0, false, {
                                fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/auth/signin/page.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-white text-center mb-8 tracking-tight uppercase",
                                        children: "Inloggen"
                                    }, void 0, false, {
                                        fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/auth/signin/page.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleSubmit,
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-[10px] font-bold text-blue-300/60 uppercase tracking-[0.2em] ml-1 mb-2 block",
                                                                children: "E-mail"
                                                            }, void 0, false, {
                                                                fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/auth/signin/page.tsx",
                                                                lineNumber: 90,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "email",
                                                                name: "email",
                                                                required: true,
                                                                placeholder: "name@company.com",
                                                                className: "w-full bg-white/5 border border-white/10 p-4 rounded-2xl text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:bg-white/10 transition-all duration-300 shadow-inner"
                                                            }, void 0, false, {
                                                                fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/auth/signin/page.tsx",
                                                                lineNumber: 91,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/auth/signin/page.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-[10px] font-bold text-blue-300/60 uppercase tracking-[0.2em] ml-1 mb-2 block",
                                                                children: "Wachtwoord"
                                                            }, void 0, false, {
                                                                fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/auth/signin/page.tsx",
                                                                lineNumber: 100,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "password",
                                                                name: "password",
                                                                required: true,
                                                                placeholder: "••••••••",
                                                                className: "w-full bg-white/5 border border-white/10 p-4 rounded-2xl text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:bg-white/10 transition-all duration-300 shadow-inner"
                                                            }, void 0, false, {
                                                                fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/auth/signin/page.tsx",
                                                                lineNumber: 101,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/auth/signin/page.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/auth/signin/page.tsx",
                                                lineNumber: 88,
                                                columnNumber: 15
                                            }, this),
                                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-red-500/10 border border-red-500/20 py-3 rounded-xl text-red-400 text-center text-[11px] font-bold tracking-wide italic",
                                                children: error
                                            }, void 0, false, {
                                                fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/auth/signin/page.tsx",
                                                lineNumber: 113,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3 pt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        disabled: loading,
                                                        className: "w-full bg-white text-[#0E153A] p-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-50 transition-all active:scale-[0.97] shadow-[0_10px_20px_-5px_rgba(255,255,255,0.2)] disabled:opacity-50",
                                                        children: loading ? "Verifying..." : "Access Terminal"
                                                    }, void 0, false, {
                                                        fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/auth/signin/page.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: handleGuestLogin,
                                                        disabled: loading,
                                                        className: "w-full bg-transparent border border-blue-500/30 text-blue-300/80 p-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-500/10 transition-all active:scale-[0.97] disabled:opacity-50",
                                                        children: "Proberen als Gast"
                                                    }, void 0, false, {
                                                        fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/auth/signin/page.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/auth/signin/page.tsx",
                                                lineNumber: 119,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center pt-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white/40 text-[11px] font-medium tracking-tight",
                                                    children: [
                                                        `Don't`,
                                                        " have an account?",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "/auth/signup",
                                                            className: "text-white font-bold hover:text-blue-400 transition-colors underline underline-offset-8 decoration-blue-500/50",
                                                            children: "SIGN UP"
                                                        }, void 0, false, {
                                                            fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/auth/signin/page.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/auth/signin/page.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/auth/signin/page.tsx",
                                                lineNumber: 139,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/auth/signin/page.tsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/auth/signin/page.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/auth/signin/page.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/auth/signin/page.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/auth/signin/page.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=bb94c_sd24-project-p07-show-your-skills-workspace_app_auth_signin_page_tsx_8458d6bd._.js.map