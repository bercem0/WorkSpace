module.exports = [
"[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/favicon.ico.mjs { IMAGE => \"[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/favicon.ico.mjs { IMAGE => \"[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/tasks/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TasksPage,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$components$2f$tasks$2f$TaskListClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/components/tasks/TaskListClient.tsx [app-rsc] (ecmascript)");
;
;
;
const dynamic = "force-dynamic";
async function TasksPage() {
    const tasks = await __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].task.findMany({
        orderBy: {
            createdAt: "desc"
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$components$2f$tasks$2f$TaskListClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        initialTasks: tasks
    }, void 0, false, {
        fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/tasks/page.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
}),
"[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/tasks/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/tasks/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/components/tasks/TaskListClient.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const { jsxDEV: _jsxDEV, Fragment: _Fragment } = __turbopack_context__.r("[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
const renderFields = (item)=>{
    if (!item) return null;
    const Field = ({ label, fKey })=>/*#__PURE__*/ _jsxDEV("div", {
            className: "space-y-3 group mt-8",
            children: [
                /*#__PURE__*/ _jsxDEV("label", {
                    className: "text-[11px] font-black text-teal-500 uppercase tracking-widest opacity-70 group-focus-within:opacity-100 transition-opacity",
                    children: label
                }, void 0, false, {
                    fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/components/tasks/TaskListClient.tsx",
                    lineNumber: 6,
                    columnNumber: 9
                }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                /*#__PURE__*/ _jsxDEV(Textarea, {
                    value: item[fKey] || "",
                    onChange: (e)=>handleUpdate(item.id, fKey, e.target.value),
                    placeholder: "Typ hier senin antwoord...",
                    className: "bg-[#0b1233]/40 border-teal-500/20 focus:border-fuchsia-500/50 min-h-[140px] text-teal-50 text-lg leading-relaxed placeholder:text-teal-900/30 transition-all"
                }, void 0, false, {
                    fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/components/tasks/TaskListClient.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
            ]
        }, void 0, true, {
            fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/components/tasks/TaskListClient.tsx",
            lineNumber: 5,
            columnNumber: 7
        }, /*TURBOPACK member replacement*/ __turbopack_context__.e);
    switch(item.documentType){
        case "review":
            return /*#__PURE__*/ _jsxDEV(_Fragment, {
                children: [
                    /*#__PURE__*/ _jsxDEV(Field, {
                        label: "WAT heb jij gemaakt/geleerd?",
                        fKey: "geleerd"
                    }, void 0, false, {
                        fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/components/tasks/TaskListClient.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                    /*#__PURE__*/ _jsxDEV(Field, {
                        label: "Wat beheers jij nog niet voldoende?",
                        fKey: "nietVoldoende"
                    }, void 0, false, {
                        fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/components/tasks/TaskListClient.tsx",
                        lineNumber: 23,
                        columnNumber: 13
                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                    /*#__PURE__*/ _jsxDEV(Field, {
                        label: "Hoe ga jij dit verhelpen: actiepunt ve activiteiten voor volgende Sprint",
                        fKey: "actiepunten"
                    }, void 0, false, {
                        fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/components/tasks/TaskListClient.tsx",
                        lineNumber: 24,
                        columnNumber: 13
                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                ]
            }, void 0, true);
        case "retrospective":
            return /*#__PURE__*/ _jsxDEV(_Fragment, {
                children: [
                    /*#__PURE__*/ _jsxDEV(Field, {
                        label: "Wat ging allemaal goed?",
                        fKey: "goed"
                    }, void 0, false, {
                        fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/components/tasks/TaskListClient.tsx",
                        lineNumber: 30,
                        columnNumber: 13
                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                    /*#__PURE__*/ _jsxDEV(Field, {
                        label: "Wat kan beter?",
                        fKey: "beter"
                    }, void 0, false, {
                        fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/components/tasks/TaskListClient.tsx",
                        lineNumber: 31,
                        columnNumber: 13
                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                    /*#__PURE__*/ _jsxDEV(Field, {
                        label: "Actiepunt voor volgende Sprint",
                        fKey: "actiepunt"
                    }, void 0, false, {
                        fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/components/tasks/TaskListClient.tsx",
                        lineNumber: 32,
                        columnNumber: 13
                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                ]
            }, void 0, true);
        case "sprintplan":
            return /*#__PURE__*/ _jsxDEV(_Fragment, {
                children: [
                    /*#__PURE__*/ _jsxDEV(Field, {
                        label: "Sprint Backlog (Grote stappen/samenvatting)",
                        fKey: "backlog"
                    }, void 0, false, {
                        fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/components/tasks/TaskListClient.tsx",
                        lineNumber: 38,
                        columnNumber: 13
                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                    /*#__PURE__*/ _jsxDEV(Field, {
                        label: "To Do lijst (Kleine concrete activiteiten - T, D, A, I)",
                        fKey: "todo"
                    }, void 0, false, {
                        fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/components/tasks/TaskListClient.tsx",
                        lineNumber: 39,
                        columnNumber: 13
                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                    /*#__PURE__*/ _jsxDEV(Field, {
                        label: "Sprint oplevering (Wat & Wanneer)",
                        fKey: "oplevering"
                    }, void 0, false, {
                        fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/components/tasks/TaskListClient.tsx",
                        lineNumber: 40,
                        columnNumber: 13
                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                    /*#__PURE__*/ _jsxDEV(Field, {
                        label: "Definition of Done",
                        fKey: "dod"
                    }, void 0, false, {
                        fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/components/tasks/TaskListClient.tsx",
                        lineNumber: 41,
                        columnNumber: 13
                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                ]
            }, void 0, true);
        case "daily":
            return /*#__PURE__*/ _jsxDEV(_Fragment, {
                children: [
                    /*#__PURE__*/ _jsxDEV(Field, {
                        label: "Wat is klaar sinds vorige Daily Scrum?",
                        fKey: "klaar"
                    }, void 0, false, {
                        fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/components/tasks/TaskListClient.tsx",
                        lineNumber: 47,
                        columnNumber: 13
                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                    /*#__PURE__*/ _jsxDEV(Field, {
                        label: "Werkt het team volgens planning? (Ja/Nee + Reden/Oplossing)",
                        fKey: "planningStatus"
                    }, void 0, false, {
                        fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/components/tasks/TaskListClient.tsx",
                        lineNumber: 48,
                        columnNumber: 13
                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                    /*#__PURE__*/ _jsxDEV(Field, {
                        label: "Zijn er problemen/obstakels?",
                        fKey: "obstakels"
                    }, void 0, false, {
                        fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/components/tasks/TaskListClient.tsx",
                        lineNumber: 49,
                        columnNumber: 13
                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                ]
            }, void 0, true);
        case "release":
            return /*#__PURE__*/ _jsxDEV(_Fragment, {
                children: [
                    /*#__PURE__*/ _jsxDEV(Field, {
                        label: "Sprint 1: Welke Userstories?",
                        fKey: "s1"
                    }, void 0, false, {
                        fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/components/tasks/TaskListClient.tsx",
                        lineNumber: 55,
                        columnNumber: 13
                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                    /*#__PURE__*/ _jsxDEV(Field, {
                        label: "Sprint 2: Welke Userstories?",
                        fKey: "s2"
                    }, void 0, false, {
                        fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/components/tasks/TaskListClient.tsx",
                        lineNumber: 56,
                        columnNumber: 13
                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                    /*#__PURE__*/ _jsxDEV(Field, {
                        label: "Sprint 3: Welke Userstories?",
                        fKey: "s3"
                    }, void 0, false, {
                        fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/components/tasks/TaskListClient.tsx",
                        lineNumber: 57,
                        columnNumber: 13
                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                ]
            }, void 0, true);
        default:
            return /*#__PURE__*/ _jsxDEV("div", {
                className: "py-20 text-center border-2 border-dashed border-teal-500/10 rounded-3xl",
                children: /*#__PURE__*/ _jsxDEV("p", {
                    className: "text-teal-900 italic",
                    children: "Selecteer bir template om te bewerken."
                }, void 0, false, {
                    fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/components/tasks/TaskListClient.tsx",
                    lineNumber: 63,
                    columnNumber: 13
                }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
            }, void 0, false, {
                fileName: "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/components/tasks/TaskListClient.tsx",
                lineNumber: 62,
                columnNumber: 11
            }, /*TURBOPACK member replacement*/ __turbopack_context__.e);
    }
};
}),
];

//# sourceMappingURL=56734_ROCMondriaanTIN_sd24-project-p07-show-your-skills-workspace_9895f1c4._.js.map