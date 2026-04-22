module.exports = [
"[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/auth/signup/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"400beba0a9bcf6de5c1c275f8f2739c0093e738032":"register"},"",""] */ __turbopack_context__.s([
    "register",
    ()=>register
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$bcrypt__$5b$external$5d$__$28$bcrypt$2c$__cjs$2c$__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$bcrypt$29$__ = __turbopack_context__.i("[externals]/bcrypt [external] (bcrypt, cjs, [project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/node_modules/bcrypt)");
var __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$src$2f$generated$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/src/generated/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function register(formData) {
    // Haal formulierdata op
    const email = formData.get("email");
    const password = formData.get("password");
    const roleInput = formData.get("role");
    // Bepaal rol: ADMIN of USER
    const role = roleInput === "ADMIN" ? __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$src$2f$generated$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Role"].ADMIN : __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$src$2f$generated$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Role"].USER;
    // Haal gender op, standaard "other"
    const gender = formData.get("gender") || "other";
    // Verplichte velden check
    if (!email || !password) {
        return {
            error: "Email en wachtwoord zijn verplicht"
        };
    }
    try {
        // Controleer of gebruiker al bestaat
        const exists = await __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
            where: {
                email
            }
        });
        if (exists) {
            return {
                error: "E-mail bestaat al!"
            };
        }
        // Hash wachtwoord voor veiligheid
        const hashed = await __TURBOPACK__imported__module__$5b$externals$5d2f$bcrypt__$5b$external$5d$__$28$bcrypt$2c$__cjs$2c$__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$bcrypt$29$__["default"].hash(password, 10);
        // Maak nieuwe gebruiker aan in database
        await __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.create({
            data: {
                email: email,
                password: hashed,
                role: role,
                gender: gender,
                name: email.split('@')[0]
            }
        });
        // Succes response
        return {
            success: true
        };
    } catch (err) {
        // Foutafhandeling
        console.error("Register Error:", err);
        return {
            error: "Er is een technische."
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    register
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(register, "400beba0a9bcf6de5c1c275f8f2739c0093e738032", null);
}),
"[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/.next-internal/server/app/auth/signup/page/actions.js { ACTIONS_MODULE0 => \"[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/auth/signup/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$app$2f$auth$2f$signup$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/auth/signup/actions.ts [app-rsc] (ecmascript)");
;
}),
"[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/.next-internal/server/app/auth/signup/page/actions.js { ACTIONS_MODULE0 => \"[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/auth/signup/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "400beba0a9bcf6de5c1c275f8f2739c0093e738032",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$app$2f$auth$2f$signup$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["register"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f2e$next$2d$internal$2f$server$2f$app$2f$auth$2f$signup$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$app$2f$auth$2f$signup$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/.next-internal/server/app/auth/signup/page/actions.js { ACTIONS_MODULE0 => "[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/auth/signup/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$app$2f$auth$2f$signup$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/auth/signup/actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=56734_ROCMondriaanTIN_sd24-project-p07-show-your-skills-workspace_85a8c0ba._.js.map