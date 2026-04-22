module.exports = [
"[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/favicon.ico.mjs { IMAGE => \"[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/favicon.ico.mjs { IMAGE => \"[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/tasks/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const { jsxDEV: _jsxDEV } = __turbopack_context__.r("[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
{}/*#__PURE__*/ _jsxDEV("div", {
    className: "grid gap-3",
    children: tasks.length === 0 ? /*#__PURE__*/ _jsxDEV("div", {
        className: "text-center py-10 opacity-40 italic",
        children: "Geen taken gevonden..."
    }, void 0, false, {
        fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/tasks/page.tsx",
        lineNumber: 4,
        columnNumber: 5
    }, /*TURBOPACK member replacement*/ __turbopack_context__.e) : tasks.map((t, i)=>/*#__PURE__*/ _jsxDEV("div", {
            className: "p-4 rounded-lg bg-[#16255a]/60 border border-teal-300/20 hover:border-teal-300/50 transition-all group",
            children: [
                /*#__PURE__*/ _jsxDEV("div", {
                    className: "flex justify-between items-start",
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            children: [
                                /*#__PURE__*/ _jsxDEV("h3", {
                                    className: "font-bold text-teal-100 group-hover:text-fuchsia-300 transition-colors",
                                    children: [
                                        t.title,
                                        " "
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/tasks/page.tsx",
                                    lineNumber: 13,
                                    columnNumber: 13
                                }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    className: "text-xs text-teal-400/70 mt-1",
                                    children: [
                                        "📄 ",
                                        t.document
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/tasks/page.tsx",
                                    lineNumber: 16,
                                    columnNumber: 13
                                }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/tasks/page.tsx",
                            lineNumber: 12,
                            columnNumber: 11
                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                        /*#__PURE__*/ _jsxDEV("span", {
                            className: "text-[10px] bg-fuchsia-500/20 text-fuchsia-300 px-2 py-1 rounded border border-fuchsia-500/30",
                            children: [
                                "Sprint ",
                                t.sprint
                            ]
                        }, void 0, true, {
                            fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/tasks/page.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                    ]
                }, void 0, true, {
                    fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/tasks/page.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                /*#__PURE__*/ _jsxDEV("div", {
                    className: "flex justify-between items-center mt-3 pt-2 border-t border-teal-300/10",
                    children: [
                        /*#__PURE__*/ _jsxDEV("span", {
                            className: "text-[10px] opacity-60 italic",
                            children: t.createdAt
                        }, void 0, false, {
                            fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/tasks/page.tsx",
                            lineNumber: 25,
                            columnNumber: 12
                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                        /*#__PURE__*/ _jsxDEV("span", {
                            className: "text-xs font-bold text-teal-300",
                            children: [
                                t.hours,
                                " uur"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/tasks/page.tsx",
                            lineNumber: 26,
                            columnNumber: 12
                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                    ]
                }, void 0, true, {
                    fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/tasks/page.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
            ]
        }, i, true, {
            fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/tasks/page.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, /*TURBOPACK member replacement*/ __turbopack_context__.e))
}, void 0, false, {
    fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/tasks/page.tsx",
    lineNumber: 2,
    columnNumber: 1
}, /*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/tasks/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/tasks/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__efb1b376._.js.map