(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/contact/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactTwoStep
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ContactTwoStep() {
    _s();
    // --- STATE HOOKS ---
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Toon hero of formulier
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Formulier is verzonden?
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Verzenden bezig?
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        message: ''
    });
    // --- FORMULIER VERZEND HANDLER ---
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                // Verzending gelukt
                setSubmitted(true);
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
                setTimeout(()=>{
                    setSubmitted(false);
                    setShowForm(false); // Formulier verbergen
                }, 5000);
            } else {
                alert("Er is een fout opgetreden. Probeer opnieuw."); // Server fout
            }
        } catch (error) {
            console.error("Verzendfout:", error);
            alert("Netwerkfout. Controleer uw verbinding."); // Netwerk fout
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute inset-0 transition-opacity duration-700 ${showForm ? 'opacity-0 pointer-events-none' : 'opacity-100'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-cover bg-center",
                        style: {
                            backgroundImage: `url('/img/contact.webp')`
                        }
                    }, void 0, false, {
                        fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/contact/page.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/50"
                    }, void 0, false, {
                        fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/contact/page.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 min-h-screen flex flex-col",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 flex flex-col items-center justify-center text-center text-white px-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-5xl md:text-6xl font-light tracking-wide",
                                    children: "CONTACT"
                                }, void 0, false, {
                                    fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/contact/page.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-6 text-lg md:text-xl text-white/80 max-w-3xl",
                                    children: "Uw reis begint hier. Wij vertellen u graag meer over dit unieke en spectaculaire project."
                                }, void 0, false, {
                                    fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/contact/page.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowForm(true),
                                    "aria-label": "Ga verder",
                                    className: "mt-10 group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-14 border-2 border-white/60 rounded-full flex items-start justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-1 h-4 bg-white/80 mt-2 rounded group-hover:h-6 transition-all"
                                            }, void 0, false, {
                                                fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/contact/page.tsx",
                                                lineNumber: 74,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/contact/page.tsx",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mt-2 block text-sm text-white/70",
                                            children: "Ga verder"
                                        }, void 0, false, {
                                            fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/contact/page.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/contact/page.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/contact/page.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/contact/page.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/contact/page.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute inset-0 transition-all duration-700 ${showForm ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-cover bg-center",
                        style: {
                            backgroundImage: `url('/img/download.jpg')`
                        }
                    }, void 0, false, {
                        fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/contact/page.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/60 backdrop-blur-sm"
                    }, void 0, false, {
                        fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/contact/page.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 min-h-screen flex items-center justify-center px-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-w-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center text-white mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "tracking-widest text-sm uppercase",
                                            children: "Sublime Contact Form"
                                        }, void 0, false, {
                                            fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/contact/page.tsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "mt-2 text-2xl font-semibold uppercase",
                                            children: "Neem Contact Op"
                                        }, void 0, false, {
                                            fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/contact/page.tsx",
                                            lineNumber: 98,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/contact/page.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end mb-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowForm(false),
                                        className: "text-white/70 hover:text-white text-sm underline underline-offset-4 transition-colors",
                                        children: "← Terug"
                                    }, void 0, false, {
                                        fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/contact/page.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/contact/page.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                submitted ? // --- SUCCES MELDING ---
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-green-600/20 border border-green-500/50 text-green-200 rounded-2xl p-8 text-center animate-in zoom-in-95 duration-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl mb-4",
                                            children: "✓"
                                        }, void 0, false, {
                                            fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/contact/page.tsx",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-medium",
                                            children: "Bedankt voor uw bericht!"
                                        }, void 0, false, {
                                            fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/contact/page.tsx",
                                            lineNumber: 115,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-green-200/70 mt-2",
                                            children: "We nemen zo snel mogelijk contact met u op."
                                        }, void 0, false, {
                                            fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/contact/page.tsx",
                                            lineNumber: 116,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/contact/page.tsx",
                                    lineNumber: 113,
                                    columnNumber: 15
                                }, this) : // --- FORMULIER ---
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleSubmit,
                                    className: "bg-black/50 border border-white/10 rounded-2xl p-8 space-y-6 text-white backdrop-blur-md shadow-2xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[10px] tracking-[0.2em] mb-2 text-white/60 font-bold uppercase",
                                                    children: "Naam"
                                                }, void 0, false, {
                                                    fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/contact/page.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    required: true,
                                                    value: formData.name,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            name: e.target.value
                                                        }),
                                                    placeholder: "Uw volledige naam",
                                                    className: "w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-2 placeholder:text-white/20 transition-all"
                                                }, void 0, false, {
                                                    fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/contact/page.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/contact/page.tsx",
                                            lineNumber: 125,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[10px] tracking-[0.2em] mb-2 text-white/60 font-bold uppercase",
                                                    children: "E-mailadres"
                                                }, void 0, false, {
                                                    fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/contact/page.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    required: true,
                                                    value: formData.email,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            email: e.target.value
                                                        }),
                                                    placeholder: "mail@voorbeeld.com",
                                                    className: "w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-2 placeholder:text-white/20 transition-all"
                                                }, void 0, false, {
                                                    fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/contact/page.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/contact/page.tsx",
                                            lineNumber: 140,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[10px] tracking-[0.2em] mb-2 text-white/60 font-bold uppercase",
                                                    children: "Uw Bericht"
                                                }, void 0, false, {
                                                    fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/contact/page.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    rows: 4,
                                                    required: true,
                                                    value: formData.message,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            message: e.target.value
                                                        }),
                                                    placeholder: "Wat wilt u ons vertellen?",
                                                    className: "w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-2 placeholder:text-white/20 transition-all resize-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/contact/page.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/contact/page.tsx",
                                            lineNumber: 155,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: loading,
                                            className: "w-full mt-4 bg-white text-black font-bold tracking-widest py-4 rounded-xl hover:bg-slate-200 disabled:bg-white/50 disabled:cursor-not-allowed transition-all active:scale-[0.98]",
                                            children: loading ? 'VERZENDEN...' : 'VERSTUREN'
                                        }, void 0, false, {
                                            fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/contact/page.tsx",
                                            lineNumber: 170,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/contact/page.tsx",
                                    lineNumber: 120,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 text-center text-[10px] text-white/40 tracking-widest uppercase",
                                    children: "© 2026 Sublime. Alle rechten voorbehouden."
                                }, void 0, false, {
                                    fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/contact/page.tsx",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/contact/page.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/contact/page.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/contact/page.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/contact/page.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(ContactTwoStep, "LD845gld90LQhQ7OYtSUeAby+O4=");
_c = ContactTwoStep;
var _c;
__turbopack_context__.k.register(_c, "ContactTwoStep");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=bb94c_sd24-project-p07-show-your-skills-workspace_app_contact_page_tsx_f3a13cb1._.js.map