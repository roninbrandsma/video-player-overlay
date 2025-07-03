module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/app/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>App)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../Components/VideoPlayer/VideoPlayer.jsx'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
'use client';
;
;
;
;
;
const styles = {
    header: {
        backgroundColor: '#183642',
        color: 'white',
        margin: 0,
        marginBottom: '10px',
        paddingTop: '5px',
        paddingBottom: '5px',
        textAlign: 'center'
    },
    footer: {
        backgroundColor: '#183642',
        color: 'white',
        margin: 0,
        marginTop: '10px',
        paddingTop: '5px',
        paddingBottom: '5px',
        textAlign: 'center',
        height: '45px',
        alignItems: 'center',
        lineHeight: '45px'
    }
};
function App() {
    // config.js
    const playerConfig = {
        sources: [
            {
                src: 'https://edge.stream.easelive.tv/vod/_definst_/s3/smil:vod-assets-ireland-sixty-no/wowza/client/tippeligaen/Fotball_vod.smil/playlist.m3u8'
            }
        ],
        controls: true,
        autoplay: true,
        preload: 'auto',
        fluid: false,
        responsive: false,
        fill: true,
        aspectRatio: '16:9',
        controlBar: {
            fullscreenToggle: false
        }
    };
    const markers = [
        {
            start: 14,
            duration: 7,
            graphic: '',
            type: 'entrance'
        },
        {
            start: 39,
            duration: 15,
            graphic: '',
            type: 'stats'
        },
        {
            start: 65,
            duration: 20,
            graphic: '',
            type: 'highlightedPlayer'
        },
        {
            start: 136,
            duration: 6,
            graphic: '',
            type: 'kickoff'
        },
        {
            start: 200,
            duration: 4,
            graphic: '',
            type: 'throwIn',
            team: 'TEAM A'
        },
        {
            start: 218,
            duration: 8,
            graphic: 'assets/placeholderHeadshot.jpg',
            type: 'goal',
            player: 'R. Lundström',
            minute: 15
        },
        {
            start: 266,
            duration: 4,
            graphic: 'https://play-lh.googleusercontent.com/qRjc6GCX6U4IhUkW4I3ZjpY1Y2jOaJF6fUbx88AY62YY2NUDcaUOk-wHResDClrutd8',
            type: 'shotsOnTarget',
            player: 'R. Lundström',
            shots: '4'
        },
        {
            start: 295,
            duration: 4,
            graphic: '',
            type: 'offside',
            team: 'TEAM A'
        },
        {
            start: 345,
            duration: 4,
            graphic: '',
            type: 'freeKick',
            team: 'TEAM B'
        },
        {
            start: 428,
            duration: 4,
            graphic: '',
            type: 'freeKick',
            team: 'TEAM A'
        },
        {
            start: 444,
            duration: 4,
            graphic: '',
            type: 'freeKick',
            team: 'TEAM A'
        },
        {
            start: 495,
            duration: 8,
            graphic: '',
            type: 'cornerKick',
            team: 'TEAM B'
        },
        {
            start: 522,
            duration: 15,
            graphic: '',
            type: 'halfTime'
        },
        {
            start: 573,
            duration: 4,
            graphic: '',
            type: 'freeKick',
            team: 'TEAM A'
        },
        {
            start: 596,
            duration: 20,
            graphic: '',
            type: 'substitution',
            team: 'TEAM A',
            playerOut: 'Jordan Blake #9',
            playerIn: 'Marcus Reid #18'
        },
        {
            start: 637,
            duration: 20,
            graphic: '',
            type: 'substitution',
            team: 'TEAM A',
            playerOut: 'Liam Carter #7',
            playerIn: 'Noah Bennett #19'
        },
        {
            start: 661,
            duration: 4,
            graphic: '',
            type: 'throwIn',
            team: 'TEAM A'
        },
        {
            start: 681,
            duration: 4,
            graphic: '',
            type: 'freeKick',
            team: 'TEAM A'
        },
        {
            start: 686,
            duration: 4,
            graphic: '',
            type: 'yellowCard',
            team: 'TEAM B',
            player: 'Ethan Wallace',
            number: '11'
        },
        {
            start: 732,
            duration: 10,
            graphic: 'assets/placeholderHeadshot.jpg',
            type: 'goal',
            player: 'Marcus Bennett',
            minute: '87'
        },
        {
            start: 805,
            duration: 4,
            graphic: '',
            type: 'freeKick',
            team: 'TEAM B'
        },
        {
            start: 846,
            duration: 14,
            graphic: '',
            type: 'fullTime'
        },
        {
            start: 860,
            duration: 30,
            graphic: '',
            type: 'fullTimeStats'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "App",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.header,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    children: "Timeline Video"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(VideoPlayer, {
                playerOptions: playerConfig,
                markers: markers
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.footer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Made by Ronin Brandsma"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else {
                "TURBOPACK unreachable";
            }
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__768ee9fc._.js.map