module.exports = [
"[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/api/scrumboard/create/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/src/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/node_modules/next-auth/index.js [app-route] (ecmascript)");
;
;
async function POST(req) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getServerSession"])();
    if (!session?.user?.id) return Response.json({}, {
        status: 401
    });
    const { title, columnId } = await req.json();
    const item = await __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].scrumItem.create({
        data: {
            title,
            columnId,
            userId: session.user.id
        }
    });
    return Response.json(item);
}
}),
];

//# sourceMappingURL=a8a47_oject-p07-show-your-skills-workspace_app_api_scrumboard_create_route_ts_b8be7d47._.js.map