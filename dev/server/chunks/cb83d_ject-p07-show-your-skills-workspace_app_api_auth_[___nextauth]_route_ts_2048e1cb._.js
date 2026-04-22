module.exports = [
"[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/app/api/auth/[...nextauth]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>handler,
    "POST",
    ()=>handler,
    "authOptions",
    ()=>authOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/node_modules/next-auth/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/node_modules/next-auth/providers/credentials.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/src/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$bcrypt__$5b$external$5d$__$28$bcrypt$2c$__cjs$2c$__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$bcrypt$29$__ = __turbopack_context__.i("[externals]/bcrypt [external] (bcrypt, cjs, [project]/github-classroom/ROCMondriaanTIN/sd24-project-p07-show-your-skills-workspace/node_modules/bcrypt)");
;
;
;
;
const authOptions = {
    providers: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])({
            name: "credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "text"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize (credentials) {
                // --- GAST LOGIN LOGICA ---
                if (credentials?.email === "guest@proje.com" && credentials?.password === "guest123") {
                    // Controleer of gastgebruiker al bestaat
                    let guestUser = await __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
                        where: {
                            email: "guest@proje.com"
                        }
                    });
                    if (!guestUser) {
                        // Als gastgebruiker niet bestaat, maak een nieuwe aan
                        const hashedGuestPassword = await __TURBOPACK__imported__module__$5b$externals$5d2f$bcrypt__$5b$external$5d$__$28$bcrypt$2c$__cjs$2c$__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$bcrypt$29$__["default"].hash("guest123", 10);
                        guestUser = await __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.create({
                            data: {
                                email: "guest@proje.com",
                                password: hashedGuestPassword,
                                name: "Guest User",
                                role: "USER",
                                gender: "other"
                            }
                        });
                    }
                    // Retourneer gastgebruiker info
                    return {
                        id: guestUser.id,
                        email: guestUser.email,
                        role: guestUser.role,
                        gender: guestUser.gender,
                        image: guestUser.image
                    };
                }
                // Controleer of email en wachtwoord aanwezig zijn
                if (!credentials?.email || !credentials?.password) return null;
                // Zoek gebruiker in database
                const user = await __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });
                if (!user || !user.password) return null;
                // Vergelijk ingevoerd wachtwoord met opgeslagen hash
                const isValid = await __TURBOPACK__imported__module__$5b$externals$5d2f$bcrypt__$5b$external$5d$__$28$bcrypt$2c$__cjs$2c$__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$bcrypt$29$__["default"].compare(credentials.password, user.password);
                if (!isValid) return null;
                // Retourneer ingelogde gebruiker info
                return {
                    id: user.id,
                    email: user.email,
                    role: user.role,
                    gender: user.gender,
                    image: user.image
                };
            }
        })
    ],
    callbacks: {
        async jwt ({ token, user, trigger, session }) {
            // JWT token bijwerken bij inloggen of sessie-update
            if (user) {
                token.id = user.id;
                token.role = user.role; // Extra velden van gebruiker
                token.gender = user.gender; // Extra velden van gebruiker
                token.picture = user.image; // Extra velden van gebruiker
            }
            if (trigger === "update" && session?.user) {
                // Bij sessie update, token velden bijwerken
                token.gender = session.user.gender;
                token.picture = session.user.image;
                token.email = session.user.email;
            }
            return token;
        },
        async session ({ session, token }) {
            // Sessie vullen met JWT token data
            if (session.user) {
                session.user.id = token.id;
                session.user.role = token.role;
                session.user.gender = token.gender;
                session.user.image = token.picture;
            }
            return session;
        }
    },
    session: {
        strategy: "jwt"
    },
    // JWT sessies worden gebruikt in plaats van database sessies
    pages: {
        signIn: "/auth/signin"
    },
    // Aangepaste login pagina
    secret: process.env.NEXTAUTH_SECRET
};
// NextAuth handler exporteren voor GET en POST requests
const handler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$classroom$2f$ROCMondriaanTIN$2f$sd24$2d$project$2d$p07$2d$show$2d$your$2d$skills$2d$workspace$2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(authOptions);
;
}),
];

//# sourceMappingURL=cb83d_ject-p07-show-your-skills-workspace_app_api_auth_%5B___nextauth%5D_route_ts_2048e1cb._.js.map