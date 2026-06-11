(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/layouts/signin.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SigninComp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$fontawesome$2d$svg$2d$core$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/fontawesome-svg-core/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-redux/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/es/exports.js [client] (ecmascript)");
//import { FETCH_USER_SUCCESS, REMOVE_USER_DATA, loginBanjoUser } from '/redux/slices/banjoUserSlice'
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_signin$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/_signin.module.scss [client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/functions/globalFunctions.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/index.es.js [client] (ecmascript)");
// import dynamic from "next/dynamic";
// const FA = dynamic(
//   () => import("@fortawesome/react-fontawesome").then(mod => mod.FontAwesomeIcon),
//   { ssr: false }
// );
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/reactstrap/dist/reactstrap.modern.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/globalconfig.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$fontawesome$2d$svg$2d$core$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["config"].autoAddCss = false;
;
;
;
;
;
;
;
;
;
;
;
function SigninComp() {
    _s();
    var banjoUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "SigninComp.useSelector[banjoUser]": (state)=>state.banjoUser
    }["SigninComp.useSelector[banjoUser]"]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [msg, setMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    async function loginUser() {
        let previous_token = JSON.parse(localStorage.getItem('expired_token_path'));
        await setMsg({});
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        if (email.length == 0 || password.length == 0) {
            setMsg({
                text: 'PLease Fill Out Fields',
                color: 'danger'
            });
            setMsg({
                text: 'PLease Fill Out Fields',
                color: 'danger'
            });
        } else {
            await setIsLoading(true);
            if (previous_token?.expiry_token) {
                await clearCacheHandler(previous_token?.expiry_token);
            }
            let user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["loginBanjoUser"])(email, password, dispatch);
            if (user && user.success) {
                setMsg({
                    text: 'Access authorized',
                    color: 'success'
                });
            } else setMsg({
                text: user && user.message,
                color: 'danger'
            });
            await setIsLoading(false);
        }
    }
    const clearCacheHandler = async (user_token)=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["clearCacheObject"])(user_token);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SigninComp.useEffect": ()=>{
            if (banjoUser.banjoUser) {
                let previousLoginPath = JSON.parse(localStorage.getItem('expired_token_path'));
                if (previousLoginPath?.path) {
                    if (previousLoginPath?.search) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].push(previousLoginPath.path + previousLoginPath?.search);
                    } else {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].push(previousLoginPath.path);
                    }
                    setTimeout({
                        "SigninComp.useEffect": ()=>{
                            localStorage.removeItem('expired_token_path');
                        }
                    }["SigninComp.useEffect"], 2000);
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].push('/new-orders');
                }
            } else {
                window.history.pushState('', '', '/');
            }
        }
    }["SigninComp.useEffect"], [
        banjoUser
    ]);
    const handleEnterEvent = (e)=>{
        if (e.key === 'Enter') {
            loginUser();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_signin$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].sign_in_main,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_signin$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].login_form,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-md-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        width: "100%",
                        src: `${__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fashionpassS3Storage}assets/img/banjo_logo.jpg`
                    }, void 0, false, {
                        fileName: "[project]/components/layouts/signin.js",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/layouts/signin.js",
                    lineNumber: 87,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `input-group mb-3 ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_signin$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].input_group}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `input-group-text border-0 ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_signin$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].input_group_text}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["faUser"]
                            }, void 0, false, {
                                fileName: "[project]/components/layouts/signin.js",
                                lineNumber: 91,
                                columnNumber: 84
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/layouts/signin.js",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "email",
                            type: "text",
                            className: "form-control border-0",
                            autoComplete: "off",
                            required: true,
                            placeholder: "somebody@example.com",
                            onKeyDown: (e)=>handleEnterEvent(e)
                        }, void 0, false, {
                            fileName: "[project]/components/layouts/signin.js",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layouts/signin.js",
                    lineNumber: 90,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `input-group mb-3 ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_signin$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].input_group}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `input-group-text border-0 ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_signin$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].input_group_text}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["faLock"]
                            }, void 0, false, {
                                fileName: "[project]/components/layouts/signin.js",
                                lineNumber: 95,
                                columnNumber: 84
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/layouts/signin.js",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "password",
                            type: "password",
                            className: "form-control border-0",
                            autoComplete: "off",
                            required: true,
                            placeholder: "Password",
                            onKeyDown: (e)=>handleEnterEvent(e)
                        }, void 0, false, {
                            fileName: "[project]/components/layouts/signin.js",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layouts/signin.js",
                    lineNumber: 94,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: ` mb-md-3 ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_signin$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].remember_chkbox}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: "me-2",
                            type: "checkbox"
                        }, void 0, false, {
                            fileName: "[project]/components/layouts/signin.js",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Remember Me"
                        }, void 0, false, {
                            fileName: "[project]/components/layouts/signin.js",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layouts/signin.js",
                    lineNumber: 98,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_signin$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].login_btn}`,
                    onClick: ()=>{
                        loginUser();
                    },
                    children: "Login"
                }, void 0, false, {
                    fileName: "[project]/components/layouts/signin.js",
                    lineNumber: 102,
                    columnNumber: 9
                }, this),
                isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-center d-block mt-md-3",
                    children: [
                        "Please Wait... ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "spinner-border spinner-border-sm",
                            role: "status",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "visually-hidden",
                                children: "Loading..."
                            }, void 0, false, {
                                fileName: "[project]/components/layouts/signin.js",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/layouts/signin.js",
                            lineNumber: 103,
                            columnNumber: 83
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layouts/signin.js",
                    lineNumber: 103,
                    columnNumber: 22
                }, this) : '',
                Object.keys(msg).length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Alert"], {
                    fade: false,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_signin$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].alert_msg,
                    color: msg.color,
                    children: msg.text
                }, void 0, false, {
                    fileName: "[project]/components/layouts/signin.js",
                    lineNumber: 106,
                    columnNumber: 40
                }, this) : ''
            ]
        }, void 0, true, {
            fileName: "[project]/components/layouts/signin.js",
            lineNumber: 86,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/layouts/signin.js",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_s(SigninComp, "Zn83aOdDVQ5IhlOCHy7UpO/7ZSE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useDispatch"]
    ];
});
_c = SigninComp;
var _c;
__turbopack_context__.k.register(_c, "SigninComp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layouts/baseLayout.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$header$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/header.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$footer$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/footer.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$analytics$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/analytics.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-redux/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/es/exports.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
function BaseLayout(props) {
    _s();
    var banjoUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "BaseLayout.useSelector[banjoUser]": (state)=>state.banjoUser
    }["BaseLayout.useSelector[banjoUser]"]);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BaseLayout.useEffect": ()=>{
            // let banjoUser = props.banjoUser;
            if (banjoUser.banjoUser == null) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].push("/signin");
                return;
            }
        }
    }["BaseLayout.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$analytics$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/layouts/baseLayout.js",
                lineNumber: 22,
                columnNumber: 9
            }, this),
            props.isShowHeader == false ? "" : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$header$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/layouts/baseLayout.js",
                lineNumber: 23,
                columnNumber: 47
            }, this),
            props.children,
            props.isShowFooter == false ? "" : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$footer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/layouts/baseLayout.js",
                lineNumber: 25,
                columnNumber: 47
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layouts/baseLayout.js",
        lineNumber: 21,
        columnNumber: 7
    }, this);
}
_s(BaseLayout, "MruLgMYfmqWud1QibfR73xM2ObY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useDispatch"]
    ];
});
_c = BaseLayout;
const __TURBOPACK__default__export__ = BaseLayout;
var _c;
__turbopack_context__.k.register(_c, "BaseLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layouts/complaintPopup.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/reactstrap/dist/reactstrap.modern.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_barcode$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/_barcode.module.scss [client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$barcodeFuncitons$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/functions/barcodeFuncitons.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/functions/customerFunctions.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-redux/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/globalconfig.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
const ComplaintPopupAlert = (props)=>{
    _s();
    const [complaintPopup, setComplaintPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [checkedTags, setCheckedTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [btnError, setBtnError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [issueReported, setIssueReported] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loader, setLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [allIssues, setAllIssues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [complainCheckBoxesData, setComplainCheckBoxesData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isAccesories, setIsAccessories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showError, setShowError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ComplaintPopupAlert.useEffect": ()=>{
            let time;
            if (btnError !== '') {
                time = setTimeout({
                    "ComplaintPopupAlert.useEffect": ()=>{
                        setBtnError("");
                    }
                }["ComplaintPopupAlert.useEffect"], 3000);
            }
            if (issueReported !== '') {
                time = setTimeout({
                    "ComplaintPopupAlert.useEffect": ()=>{
                        setIssueReported("");
                        setComplaintPopup(false);
                        setCheckedTags([]);
                    }
                }["ComplaintPopupAlert.useEffect"], 3000);
            }
            if (allIssues === true) {
                time = setTimeout({
                    "ComplaintPopupAlert.useEffect": ()=>{
                        setIssueReported("");
                        setComplaintPopup(false);
                        setCheckedTags([]);
                        setAllIssues(false);
                    }
                }["ComplaintPopupAlert.useEffect"], 1000);
            }
            return ({
                "ComplaintPopupAlert.useEffect": ()=>{
                    clearTimeout(time);
                }
            })["ComplaintPopupAlert.useEffect"];
        }
    }["ComplaintPopupAlert.useEffect"], [
        btnError,
        issueReported,
        allIssues
    ]);
    const GetReportType = async ()=>{
        try {
            let checkboxData;
            const { success, data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getCustomerReportType"])();
            if (success) {
                if (props.item?.includes("accessories")) {
                    if (props.barcodeStatus == 13) {
                        if (props?.item?.includes("basics") || props?.item?.includes("hats") || props?.item?.includes("sports-bras")) {
                            let filteredData = data.filter((item)=>item?.complaint_item_type?.includes("clothing"));
                            const sortedComplaints = filteredData.sort((a, b)=>{
                                if (a.customer_complaint_types === "Other") return 1;
                                if (b.customer_complaint_types === "Other") return -1;
                                return 0;
                            });
                            setIsAccessories(false);
                            setComplainCheckBoxesData(sortedComplaints);
                            return;
                        } else {
                            checkboxData = data.filter((item)=>item?.complaint_item_type?.includes("accessory"));
                            const sortedComplaints = checkboxData.sort((a, b)=>{
                                if (a.customer_complaint_types === "Other") return 1;
                                if (b.customer_complaint_types === "Other") return -1;
                                return 0;
                            });
                            setIsAccessories(true);
                            setComplainCheckBoxesData(sortedComplaints);
                            return;
                        }
                    } else if (props.barcodeStatus == 8) {
                        if (props?.item?.includes("basics")) {
                            checkboxData = data.filter((item)=>item?.complaint_item_type?.includes("clothing"));
                            const sortedComplaints = checkboxData.sort((a, b)=>{
                                if (a.customer_complaint_types === "Other") return 1;
                                if (b.customer_complaint_types === "Other") return -1;
                                return 0;
                            });
                            setIsAccessories(false);
                            setComplainCheckBoxesData(sortedComplaints);
                            return;
                        } else {
                            checkboxData = data.filter((item)=>item?.complaint_item_type?.includes("accessory"));
                            const sortedComplaints = checkboxData.sort((a, b)=>{
                                if (a.customer_complaint_types === "Other") return 1;
                                if (b.customer_complaint_types === "Other") return -1;
                                return 0;
                            });
                            setIsAccessories(true);
                            setComplainCheckBoxesData(sortedComplaints);
                            return;
                        }
                    }
                } else {
                    checkboxData = data.filter((item)=>item?.complaint_item_type?.includes("clothing"));
                    const sortedComplaints = checkboxData.sort((a, b)=>{
                        if (a.customer_complaint_types === "Other") return 1;
                        if (b.customer_complaint_types === "Other") return -1;
                        return 0;
                    });
                    setIsAccessories(false);
                    setComplainCheckBoxesData(sortedComplaints);
                    return;
                }
            }
        } catch (error) {
            console.log(error);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ComplaintPopupAlert.useEffect": ()=>{
            if (complaintPopup) {
                GetReportType();
            }
        }
    }["ComplaintPopupAlert.useEffect"], [
        complaintPopup,
        props
    ]);
    const handleChecked = (e)=>{
        const checked = e.target.checked;
        const value = e.target.value;
        if (checked && checkedTags.indexOf(value === -1)) {
            setCheckedTags([
                ...checkedTags,
                value
            ]);
        } else {
            setCheckedTags(checkedTags.filter((item)=>item !== value));
        }
    };
    const submitIssues = async ()=>{
        let obj = {
            barcode: props.barcode,
            issues: checkedTags,
            is_accessory: isAccesories,
            order_number: props?.orderid
        };
        if (checkedTags?.length == '') {
            setBtnError("Please select at least one");
        } else {
            setLoader(true);
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$barcodeFuncitons$2e$js__$5b$client$5d$__$28$ecmascript$29$__["submitCustomerClaim"])(obj);
            if (response.success) {
                setIssueReported(response.message);
                setLoader(false);
                setAllIssues(true);
            } else {
                setLoader(false);
                setBtnError(response.message);
                setShowError(true);
                setTimeout(()=>{
                    setShowError(false);
                }, 1500);
            }
        }
    };
    const toggle = ()=>setComplaintPopup(!complaintPopup);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    zIndex: "99"
                },
                onClick: toggle,
                children: [
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fashionpassS3StorageNew + "assets/img/complainticon.png",
                        alt: "",
                        style: {
                            width: '18px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/layouts/complaintPopup.jsx",
                        lineNumber: 172,
                        columnNumber: 62
                    }, ("TURBOPACK compile-time value", void 0)),
                    " "
                ]
            }, void 0, true, {
                fileName: "[project]/components/layouts/complaintPopup.jsx",
                lineNumber: 172,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Modal"], {
                centered: true,
                isOpen: complaintPopup,
                toggle: toggle,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_barcode$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].modalCont,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ModalBody"], {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_barcode$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].complaintModal,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_barcode$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].complaintPopupWrapper,
                        children: [
                            complainCheckBoxesData.length ? complainCheckBoxesData.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_barcode$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].wrapperComplaintCheckboxes,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: `checkbox_${i}`,
                                            type: "checkbox",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_barcode$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].complaintCheck,
                                            checked: checkedTags.includes(item.customer_complaint_types),
                                            value: item.customer_complaint_types,
                                            onChange: handleChecked
                                        }, void 0, false, {
                                            fileName: "[project]/components/layouts/complaintPopup.jsx",
                                            lineNumber: 179,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: `checkbox_${i}`,
                                            children: [
                                                " ",
                                                item.customer_complaint_types,
                                                " "
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/layouts/complaintPopup.jsx",
                                            lineNumber: 180,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, 'complaint_' + i, true, {
                                    fileName: "[project]/components/layouts/complaintPopup.jsx",
                                    lineNumber: 178,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "data_Loader",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Spinner"], {
                                    className: "spinnerLoader"
                                }, void 0, false, {
                                    fileName: "[project]/components/layouts/complaintPopup.jsx",
                                    lineNumber: 182,
                                    columnNumber: 62
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/layouts/complaintPopup.jsx",
                                lineNumber: 182,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_barcode$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].btnWrapper,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "small",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_barcode$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].btnComplaint,
                                        onClick: submitIssues,
                                        children: [
                                            " ",
                                            loader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Spinner"], {
                                                className: "spinnerLoader"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layouts/complaintPopup.jsx",
                                                lineNumber: 185,
                                                columnNumber: 116
                                            }, ("TURBOPACK compile-time value", void 0)) : "Submit",
                                            "  "
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/layouts/complaintPopup.jsx",
                                        lineNumber: 185,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    btnError !== "" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            " ",
                                            btnError,
                                            " "
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/layouts/complaintPopup.jsx",
                                        lineNumber: 186,
                                        columnNumber: 48
                                    }, ("TURBOPACK compile-time value", void 0)) : "",
                                    issueReported !== "" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "green"
                                        },
                                        children: [
                                            " ",
                                            issueReported,
                                            " "
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/layouts/complaintPopup.jsx",
                                        lineNumber: 187,
                                        columnNumber: 53
                                    }, ("TURBOPACK compile-time value", void 0)) : ""
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layouts/complaintPopup.jsx",
                                lineNumber: 184,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layouts/complaintPopup.jsx",
                        lineNumber: 175,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/layouts/complaintPopup.jsx",
                    lineNumber: 174,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/layouts/complaintPopup.jsx",
                lineNumber: 173,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(ComplaintPopupAlert, "2PhLGnHS98eAFPTzE93udQ9xj34=");
_c = ComplaintPopupAlert;
const __TURBOPACK__default__export__ = ComplaintPopupAlert;
var _c;
__turbopack_context__.k.register(_c, "ComplaintPopupAlert");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layouts/orders/orderDetails.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/moment/moment.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/globalconfig.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/_order.module.scss [client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/index.es.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/reactstrap/dist/reactstrap.modern.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$orderDetailsPopups$2f$starOrderPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/orderDetailsPopups/starOrderPopup.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$orderDetailsPopups$2f$swapBarcodeTypePopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/orderDetailsPopups/swapBarcodeTypePopup.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$orderDetailsPopups$2f$removeStarOrderPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/orderDetailsPopups/removeStarOrderPopup.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$orderDetailsPopups$2f$removeItemFromOrderPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/orderDetailsPopups/removeItemFromOrderPopup.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$orderDetailsPopups$2f$orderOnHoldPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/orderDetailsPopups/orderOnHoldPopup.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$orderDetailsPopups$2f$removeOrderOnHoldPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/orderDetailsPopups/removeOrderOnHoldPopup.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$orderDetailsPopups$2f$orderInfoPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/orderDetailsPopups/orderInfoPopup.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$orderDetailsPopups$2f$addItemToOrderPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/orderDetailsPopups/addItemToOrderPopup.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$orderDetailsPopups$2f$checkinSelectionPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/orderDetailsPopups/checkinSelectionPopup.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$orderDetailsPopups$2f$messagePopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/orderDetailsPopups/messagePopup.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/functions/customerFunctions.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$orderFunction$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/functions/orderFunction.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$orderDetailsPopups$2f$orderNotesPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/orderDetailsPopups/orderNotesPopup.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/functions/globalFunctions.js [client] (ecmascript)");
// bmw
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$TransferFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/functions/TransferFunctions.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$barcodeFuncitons$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/functions/barcodeFuncitons.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$invoices$2f$services$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/invoices/services.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$statusComp$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/statusComp.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-redux/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/es/exports.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$conveyorPopups$2f$barcodeHistoryLogPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/conveyorPopups/barcodeHistoryLogPopup.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$identifierPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/identifierPopup.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$customTextArea$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/customTextArea.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$barcodePopups$2f$changeSkuPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/barcodePopups/changeSkuPopup.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$genericAlertPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/genericAlertPopup.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$orderDetailsPopups$2f$swapBarcodePopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/orderDetailsPopups/swapBarcodePopup.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$orderDetailsPopups$2f$bagSizePopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/orderDetailsPopups/bagSizePopup.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$orderDetailsPopups$2f$scanBarcode$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/orderDetailsPopups/scanBarcode.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2d$timezone$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/moment-timezone/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$orderDetailsPopups$2f$barcodeConfrimUpdatePopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/orderDetailsPopups/barcodeConfrimUpdatePopup.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fslightbox$2d$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fslightbox-react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$helmet$2f$es$2f$Helmet$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-helmet/es/Helmet.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$slices$2f$socketClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/redux/slices/socketClient.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$orderDetailsPopups$2f$otherNotification$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/orderDetailsPopups/otherNotification.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layouts$2f$complaintPopup$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layouts/complaintPopup.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$orderDetailsPopups$2f$transferItemPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/orderDetailsPopups/transferItemPopup.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$orderDetailsPopups$2f$transferActionPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/orderDetailsPopups/transferActionPopup.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-cookie/dist/js.cookie.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$order$2f$services$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/order/services.ts [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
let itemFullFillArray = [];
let dataToSend = [];
const TRANSFER_ACTION_POPUP_RETURN_KEY = "transfer_action_reopen_popup";
// let intervalCheckBusy = undefined;
let fullfillCount = 0;
let checkinSelectionKey = "";
function OrderDetails(props) {
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const socketClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "OrderDetails.useSelector[socketClient]": (state)=>state.socketClient
    }["OrderDetails.useSelector[socketClient]"]);
    const banjoUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "OrderDetails.useSelector[banjoUser]": (state)=>state.banjoUser
    }["OrderDetails.useSelector[banjoUser]"]);
    const systemSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "OrderDetails.useSelector[systemSettings]": (state)=>state.systemSettings
    }["OrderDetails.useSelector[systemSettings]"]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let [orderDetails, setOrderDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    let [checkInvoice, setCheckInvoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let [dataObjectProp, setDataObjProp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let [isBigScreen, setIsBigScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let [claimedOrderInfo, setClaimedOrderInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let [disabledBtnId, setDisabledBtnId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    let [customerAllOrderArr, setCustomerAllOrderArr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    let [starOrderInfo, setStarOrderInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let [onHoldOrderInfo, setOnHoldOrderInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    let [orderInfoPopup, setOrderInfoPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Popup states
    let [openSkuEditspopups, setOpenSkuEditspopups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let [openStarOrderPopup, setOpenStarOrderPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let [openSwapBarcodeTypePopup, setOpenSwapBarcodeTypePopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let [openRemoveItemFromOrderPopup, setOpenRemoveItemFromOrderPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let [openRemoveStarOrderPopup, setOpenRemoveStarOrderPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let [openOnHoldOrderPopup, setOpenOnHoldOrderPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let [openRemoveOnHoldOrderPopup, setRemoveOnholdOrderPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let [addItemToOrderPopup, setAddItemToOrderPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let [messagePopup, setMessagePopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let [dataToRemoveItem, setDataToRemoveItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    let [holdOrderNotes, setOrderHoldNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isOpenOrderDetail, setIsOpenOrderDetail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [statusList, setStatusList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [barcodeNum, setBarcodeNum] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [alertMsg, setAlertMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [toggleBarcodeHistoryPopup, setToggleBarcodeHistoryPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [barcodeData, setBarcodeData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [orderItems, setOrderItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [actionBtn, setActionBtn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [actionLoading, setActionLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [greenCheck, setGreenCheck] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [productId, setProductId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [skuData, setSkuData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [selectedOrderItem, setSelectedOrderItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [generalAlert, setGeneralAlert] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [genericAlertObj, setGenericAlertObj] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [barcodeMatched, setBarcodeMatched] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [fullFillArray, setFullFillArray] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [notFullFilledCount, setNotFullFilledCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [swapBarcode, setSwapBarcode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fetchVisible, setFetchVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [fetchDisable, setFetchDisable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fetchTooltipText, setFetchTooltipText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [fetchTooltip, setFetchTooltip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [barcodeNumberTooltip, setBarcodeNumberTooltip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [customerNameTooltip, setCustomerNameTooltip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [thumbsUpTooltip, setThumbsUpTooltip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isBusy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [bagSizePopup, setBagSizePopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [barcodeScanPopup, setBarcodeScanPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [checkInPopup, setCheckInPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [checkInLoading, setCheckInLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [birthYear, setBirthYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [bithdayTooltip, setBithdayTooltip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [flagTooltip, setFlagTooltip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [flagTimeRent, setFlagTimeRent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('0');
    const [flagTimeSale, setFlagTimeSale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('0');
    const [itemChangeAlert, setItemChangeAlert] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [barcodeConfrimUpdatePopup, setBarcodeConfrimUpdatePopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [orderTooltip, setOrderTooltip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [orderTipObj, setOrderTipObj] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [toggleSlider, setToggleSlider] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [stylist, setStylist] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [invoiceBtn, setInvoiceBtn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sliderUrl, setSliderUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showFavBtn, setShowFavBtn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [recievedMessage, setRecievedMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [dymoUrl, setDymoUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [printLabelStatus, setPrintLabelStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [claimColor, setClaimColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.claimerColor);
    const [cardError, setCardError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [otherNotification, setOtherNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [autoShip, setAutoShip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [popupEnabled, setPopupEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(banjoUser?.banjoUser?.orders_page_popups);
    const [orderId, setOrderId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.OrderDetail?.orderid);
    const [orderName, setOrderName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.OrderDetail?.ordername?.replace('#', ''));
    const [handleHoldNotes, setHandleHoldNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [oldInvoices, setOldInvoices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newInvoice, setNewInvoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isOldOrder, setIsOldOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [waitShipmentAlert, setWaitShipmentAlert] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [specialCaseObj, setSpecialCaseObj] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [transferTo, setTransferTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [transferItemPopup, setTransferItemPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [finalSaleOrder, setFinalSaleOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [OrderItemsAfterFulfil, setOrderItemsAfterFulfil] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [checkBirthday, setCheckBirthday] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [graceTimeRent, setGraceTimeRent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('0');
    const [bulkValidationError, setBulkValidationError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [checkinSelectionPopup, setCheckinSelectionPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [holdTypes, setHoldTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [tpVendors, setTpVendors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // bmw
    const [transferActionPopup, setTransferActionPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [transferActionLoading, setTransferActionLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [nextOrderPlacedData, setNextOrderPlacedData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [transferActionState, setTransferActionState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        item: null,
        conditionStatus: null,
        emailCustomer: false,
        chargeAddedItem: false
    });
    const [transferItemPriceFromSetting, setTransferItemPriceFromSetting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [accountStatus, setAccountStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [claimDataListSocket, setClaimDataListSocket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [allBanjoUserList, setAllBanjoUserList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const { addressDetail, customerInfo, OrderDetail, shipmentLabel, setSkipReturn, skipReturn, birthday, checkOrderStatus, orderHistoryLogs, shipmentLabelExtra, invoiceCreated, originalItems, bagSize, addedShipment, compType, validatePak, bagSizeArray, finalSaleCount, addedItemSpecialCase, showAddedShipment, customerName, entityAttributes, checkMaxRetail, setAutoShipment, itemFullfill, isPoBoxAddress } = props;
    const productTypeObj = {
        0: '',
        1: 'Dry Clean',
        2: 'Hand Wash',
        3: ''
    };
    const delivery_date = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(props.shipmentLabelTracking?.promised_delivery_date).utc().format('MMMM D');
    const checkFulfilledItems = ()=>{
        let fulfilledItems = 0;
        OrderDetail.items.filter((item)=>{
            if (item.barcodeid !== 0) {
                fulfilledItems++;
            } else if (item.barcodeid == 0 && item.barcode_status == '1') {
                fulfilledItems++;
            }
        });
        fullfillCount = fulfilledItems;
        return fulfilledItems !== OrderDetail.items.length;
    };
    const checkCustomerAddedItems = ()=>{
        let customerAddedSkus = [];
        for(let x in orderHistoryLogs){
            if (orderHistoryLogs[x].note?.includes('Customer added items')) {
                customerAddedSkus.push(orderHistoryLogs[x].note?.split(' ')[0]);
            }
        }
        return customerAddedSkus;
    };
    const checkCSAddedItem = ()=>{
        let check = false;
        for(let x in orderHistoryLogs){
            if (orderHistoryLogs[x].note?.includes('added to the order')) {
                check = true;
            }
        }
        return check;
    };
    const updateClaimOrderListSocket = (data)=>{
        if (socketClient.socketClient) {
            let envoiroment = 'dev';
            if (__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].envoiroment == 'stage') {
                envoiroment = 'stage';
            } else if (__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].envoiroment == 'development') {
                envoiroment = 'dev';
            } else {
                envoiroment = 'live';
            }
            let object = {
                action: "claimOrderListValue",
                socketList: "claimOrderList",
                data: {
                    from: "new-order",
                    dataArr: data
                }
            };
            socketClient.socketClient.client.send(JSON.stringify({
                action: "addtolist",
                list: "claimOrderList_message",
                message: JSON.stringify(object),
                connection2: "-1",
                env: envoiroment
            }));
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderDetails.useEffect": ()=>{
            if (isPoBoxAddress) {
                setAutoShip(false);
                setAutoShipment(false);
            }
        }
    }["OrderDetails.useEffect"], [
        isPoBoxAddress,
        setAutoShipment
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderDetails.useEffect": ()=>{
            if (socketClient.socketClient) {
                let datasub = {
                    listName: 'conveyorCheckBussy',
                    status: false,
                    callBack: setRecievedMessage,
                    listMessage: {}
                };
                let pos = socketClient.socketClient.lists.map({
                    "OrderDetails.useEffect.pos": (e)=>e.listName
                }["OrderDetails.useEffect.pos"]).indexOf('conveyorCheckBussy');
                if (socketClient.socketClient.lists.length == 0 || pos == -1) {
                    let listData = Object.assign([], socketClient.socketClient.lists);
                    listData.push(datasub);
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$slices$2f$socketClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["SOCKET_CLIENT_SUCCESS"])({
                        client: socketClient.socketClient.client,
                        lists: listData
                    }));
                }
            }
        }
    }["OrderDetails.useEffect"], [
        socketClient.socketClient
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderDetails.useEffect": ()=>{
            if (socketClient.socketClient) {
                let datasub = {
                    listName: 'claimOrderList',
                    status: false,
                    callBack: setClaimDataListSocket,
                    listMessage: ""
                };
                let pos = socketClient.socketClient.lists.map({
                    "OrderDetails.useEffect.pos": (e)=>e.listName
                }["OrderDetails.useEffect.pos"]).indexOf('claimOrderList');
                if (socketClient.socketClient.lists.length == 0 || pos == -1) {
                    let listData = Object.assign([], socketClient.socketClient.lists);
                    listData.push(datasub);
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$slices$2f$socketClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["SOCKET_CLIENT_SUCCESS"])({
                        client: socketClient.socketClient.client,
                        lists: listData
                    }));
                }
            }
        }
    }["OrderDetails.useEffect"], [
        socketClient.socketClient
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderDetails.useEffect": ()=>{
            // console.log("socket listener", claimDataListSocket)
            try {
                if (claimDataListSocket != "" && claimDataListSocket !== "{\"ok\":\"ok\"}") {
                    const data = JSON.parse(claimDataListSocket);
                    if (data && data?.data?.dataArr?.length) {
                        let order = data?.data?.dataArr.find({
                            "OrderDetails.useEffect": (v)=>v.order_id == orderDetails?.orderid
                        }["OrderDetails.useEffect"]);
                        if (order) {
                            updateOrderInPage(order);
                        }
                    }
                }
            } catch (e) {
                console.error('socket listenr error', e);
            }
        }
    }["OrderDetails.useEffect"], [
        claimDataListSocket
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderDetails.useEffect": ()=>{
            try {
                if (recievedMessage != "" && recievedMessage != "{\"ok\":\"ok\"}") {
                    let data = JSON.parse(recievedMessage);
                    if (data) {
                        setBusy(data.action);
                    }
                }
            } catch  {}
            return ({
                "OrderDetails.useEffect": ()=>{}
            })["OrderDetails.useEffect"];
        }
    }["OrderDetails.useEffect"], [
        recievedMessage
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderDetails.useEffect": ()=>{
            getThirdPartySoldVendor();
            const fetchData = {
                "OrderDetails.useEffect.fetchData": async ()=>{
                    let response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["checkBusy"])();
                    if (response) setBusy(response);
                }
            }["OrderDetails.useEffect.fetchData"];
            fetchData();
            fetchAllBanjoUsers();
        }
    }["OrderDetails.useEffect"], []);
    // third party work ==========>
    const getThirdPartySoldVendor = async ()=>{
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["get_ThirdPartySoldVendor"])();
        if (data?.success && data?.data) {
            setTpVendors(data?.data);
            if (props.setTpVendors != undefined) {
                props.setTpVendors(data?.data);
            }
        } else {
            setTpVendors(null);
            if (props.setTpVendors != undefined) {
                props.setTpVendors(null);
            }
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderDetails.useEffect": ()=>{
            setFetchVisible(true);
            if (isBusy == 'TRUE' || isBusy == 'True-True') {
                setFetchDisable(true);
                setFetchTooltipText(true);
            } else if (isBusy == 'FALSE' || isBusy == 'False-True') {
                setFetchDisable(false);
                setFetchTooltipText(false);
            }
        }
    }["OrderDetails.useEffect"], [
        isBusy
    ]);
    const getFavoriteData = async ()=>{
        let response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAllFavorites"])(customerInfo?.customer_id);
        if (response?.success) {
            if (response.data?.length > 0) {
                setShowFavBtn(true);
            }
        }
    };
    const getSystemSettings = async ()=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAllSystemSettings"])(dispatch);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderDetails.useEffect": ()=>{
            // console.log(customerInfo?.order_processor_notes?.includes(' Do not ship - card declining.'),"check")
            const fetchData = {
                "OrderDetails.useEffect.fetchData": async ()=>{
                    if (!customerInfo?.order_processor_notes?.includes(' Do not ship - card declining.')) {
                        if (customerInfo?.card_status !== '' && customerInfo?.card_status?.toLowerCase()?.indexOf('good') == -1) {
                            setOtherNotification(true);
                            let payload = {
                                customer_id: customerInfo?.customer_id,
                                ['order_processor_notes']: customerInfo?.order_processor_notes + ' Do not ship - card declining.'
                            };
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["updateCustomerDetails"])(payload);
                        }
                    }
                    if (customerInfo?.payment_failed && !customerInfo?.order_processor_notes?.includes(' Do not ship - account is past due.')) {
                        setOtherNotification(true);
                        let payload = {
                            customer_id: customerInfo?.customer_id,
                            ['order_processor_notes']: customerInfo?.order_processor_notes + ' Do not ship - account is past due.'
                        };
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["updateCustomerDetails"])(payload);
                    }
                }
            }["OrderDetails.useEffect.fetchData"];
            fetchData();
        }
    }["OrderDetails.useEffect"], [
        customerInfo
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderDetails.useEffect": ()=>{
            if (props.OrderDetail?.orderid) {
                const fetchData = {
                    "OrderDetails.useEffect.fetchData": async ()=>{
                        let response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$invoices$2f$services$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["oldNewInvoiceStatus"])(props.OrderDetail?.orderid, {
                            contentType: "application/json"
                        });
                        if (response?.success) {
                            if (response.response?.old_invoice?.length > 0) {
                                setOldInvoices(response.response?.old_invoice);
                            }
                            if (response.response?.new_invoice?.length > 0) {
                                setNewInvoice(response.response?.new_invoice);
                            }
                        }
                    }
                }["OrderDetails.useEffect.fetchData"];
                fetchData();
            }
        }
    }["OrderDetails.useEffect"], [
        props.OrderDetail?.orderid
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderDetails.useEffect": ()=>{
            let fulfilStatus = checkFulfilledItems();
            if ((checkOrderStatus() != '1' || fulfilStatus) && shipmentLabel?.outgoing_service == '' || checkOrderStatus() == '0' && fulfilStatus && checkCustomerAddedItems().length > 0 || checkOrderStatus() == '0' && fulfilStatus && checkCSAddedItem()) {
                openPopups("orderinfopopup");
            }
            if (checkOrderStatus() == '1' && shipmentLabel?.outgoing_service == '' && shipmentLabel?.return_service == '' && !fulfilStatus && bagSize == '' || checkOrderStatus() == '1' && shipmentLabel?.outgoing_service == '' && shipmentLabel?.return_service == '' && checkCustomerAddedItems().length > 0 && shipmentLabelExtra.length == 0 && !fulfilStatus && bagSize == '' || addedShipment?.length > shipmentLabelExtra.length && !fulfilStatus && bagSize == '') {
                setBagSizePopup(true);
            }
        }
    }["OrderDetails.useEffect"], [
        OrderDetail,
        shipmentLabel
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderDetails.useEffect": ()=>{
            if (orderHistoryLogs?.length > 0) {
                let fulfilStatus = checkFulfilledItems();
                if (checkOrderStatus() == '0' && fulfilStatus && checkCustomerAddedItems().length > 0 || checkOrderStatus() == '0' && fulfilStatus && checkCSAddedItem()) {
                    openPopups("orderinfopopup");
                }
                if (checkOrderStatus() == '1' && shipmentLabel?.outgoing_service == '' && shipmentLabel?.return_service == '' && !fulfilStatus && bagSize == '' || checkOrderStatus() == '1' && shipmentLabel?.outgoing_service == '' && shipmentLabel?.return_service == '' && checkCustomerAddedItems().length > 0 && shipmentLabelExtra.length == 0 && !fulfilStatus && bagSize == '' || addedShipment?.length > shipmentLabelExtra.length && !fulfilStatus && bagSize == '') {
                    setBagSizePopup(true);
                }
            }
        }
    }["OrderDetails.useEffect"], [
        orderHistoryLogs
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderDetails.useEffect": ()=>{
            getCustomerAllOrders();
            IsThisStaredOrder();
            getFavoriteData();
            setIsBigScreen(window.screen.width);
            customerInfo?.tags?.split(',')?.filter({
                "OrderDetails.useEffect": (tag)=>{
                    if (tag?.includes('Birthday:')) {
                        setBirthYear({
                            'year': tag?.split(':')[1]?.split('/')[2],
                            'date': tag?.split(':')[1]?.split('/')[0] + '/' + tag?.split(':')[1]?.split('/')[1]
                        });
                    }
                    if (tag?.includes('Stylist')) {
                        let style = tag?.split(':')[1];
                        setStylist(style);
                    }
                }
            }["OrderDetails.useEffect"]);
            fetchStatusList();
            getSystemSettings();
            return ({
                "OrderDetails.useEffect": ()=>{}
            })["OrderDetails.useEffect"];
        }
    }["OrderDetails.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderDetails.useEffect": ()=>{
            if (systemSettings?.allSystemSettings.length > 0) {
                systemSettings?.allSystemSettings.filter({
                    "OrderDetails.useEffect": (setting)=>{
                        if (setting.setting_id == __TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fetchThumbGrace) {
                            setGraceTimeRent(setting.setting_value);
                        }
                        if (setting.setting_id == __TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fetchThumbRent) {
                            setFlagTimeRent(setting.setting_value);
                        }
                        if (setting.setting_id == __TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fetchThumbSale) {
                            setFlagTimeSale(setting.setting_value);
                        }
                        if (setting.setting_id == __TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].transferItemPrice) {
                            let _price_json = JSON.parse(setting.setting_value);
                            let price = _price_json?.amount;
                            setTransferItemPriceFromSetting(price);
                        }
                    }
                }["OrderDetails.useEffect"]);
            }
        }
    }["OrderDetails.useEffect"], [
        systemSettings
    ]);
    const fetchStatusList = async ()=>{
        let statusList = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$barcodeFuncitons$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getStatusList"])();
        if (statusList.success) {
            setStatusList(statusList.response);
            if (props.setStatusList != undefined) {
                props.setStatusList(statusList.response);
            }
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderDetails.useEffect": ()=>{
            if ((customerInfo?.order_processor_notes || orderDetails?.ordernotes || starOrderInfo?.starnotes || holdOrderNotes?.holdnotes) && checkOrderStatus() !== '1' && !handleHoldNotes) {
                setIsOpenOrderDetail(true);
            }
        }
    }["OrderDetails.useEffect"], [
        orderDetails?.ordernotes,
        starOrderInfo?.starnotes,
        holdOrderNotes?.holdnotes
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderDetails.useEffect": ()=>{
            setOrderInfo();
        }
    }["OrderDetails.useEffect"], [
        OrderDetail
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderDetails.useEffect": ()=>{
            const fetchNextOrderPlacedData = {
                "OrderDetails.useEffect.fetchNextOrderPlacedData": async ()=>{
                    try {
                        if (checkOrderStatus() == 1 && customerInfo?.customer_id && orderId) {
                            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$TransferFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getCustomerNextOrderPlacedAndItemsCount"])(Number(customerInfo?.customer_id), Number(orderId));
                            if (response?.success) {
                                const nextOrders = Array.isArray(response?.data) ? response.data : [];
                                const firstFpOrder = nextOrders.find({
                                    "OrderDetails.useEffect.fetchNextOrderPlacedData.firstFpOrder": (order)=>typeof order?.order_type === 'string' && order.order_type.includes('FP')
                                }["OrderDetails.useEffect.fetchNextOrderPlacedData.firstFpOrder"]);
                                setNextOrderPlacedData(firstFpOrder ? [
                                    firstFpOrder
                                ] : []);
                            } else {
                                setNextOrderPlacedData([]);
                            }
                        } else {
                            setNextOrderPlacedData([]);
                        }
                    } catch  {
                        setNextOrderPlacedData([]);
                    }
                }
            }["OrderDetails.useEffect.fetchNextOrderPlacedData"];
            fetchNextOrderPlacedData();
        }
    }["OrderDetails.useEffect"], [
        customerInfo?.customer_id,
        orderId,
        OrderDetail
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderDetails.useEffect": ()=>{
            if (orderItems.length > 0) {
                let count = 0;
                let totalPrice = 0;
                let totalPriceAfterDiscount = 0;
                orderItems.filter({
                    "OrderDetails.useEffect": (item)=>{
                        if (item.barcodeid == 0) {
                            count += 1;
                        }
                        totalPrice += item.price;
                        totalPriceAfterDiscount += item.sku?.retail - item.sku?.retail * (item.sku?.discount / 100);
                    }
                }["OrderDetails.useEffect"]);
                setOrderTipObj({
                    totalPrice,
                    totalPriceAfterDiscount
                });
                setNotFullFilledCount(count);
            }
        }
    }["OrderDetails.useEffect"], [
        orderItems
    ]);
    const setOrderInfo = async ()=>{
        await setOrderDetails(OrderDetail);
        let _isTransferTo = false;
        OrderDetail?.items?.map((itm, ind)=>{
            if (itm?.tags?.indexOf('transferto') > -1) {
                let item_tag_arr = itm?.tags?.split(',');
                item_tag_arr?.map((tag)=>{
                    if (tag?.indexOf('transferto') > -1 && tag?.indexOf('nexttransferto') == -1) {
                        let orderId = tag?.split(":")[1];
                        if (OrderDetail?.orderid == orderId) {
                            _isTransferTo = true;
                        }
                    }
                });
            }
        });
        setTransferTo(_isTransferTo);
        if (props.setTransferTo != undefined) {
            props.setTransferTo(_isTransferTo);
        }
        setOrderItems(OrderDetail?.items);
        setTimeout(()=>{
            let is_refund_for_transfer_cookie = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].get("refund_for_transfer_item_bid");
            if (is_refund_for_transfer_cookie) {
                if (document.getElementById("transferbtn_" + is_refund_for_transfer_cookie)) {
                    let transfer_btn = document.getElementById("transferbtn_" + is_refund_for_transfer_cookie);
                    transfer_btn.click();
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].remove("refund_for_transfer_item_bid");
                }
            }
        }, 2000);
        setFinalSaleOrder(OrderDetail?.order_tags?.includes('final_sale'));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderDetails.useEffect": ()=>{
            if (checkOrderStatus() == '1' && orderItems.length > 0) {
                orderItems.filter({
                    "OrderDetails.useEffect": (item)=>{
                        if (item.barcode?.statusid == '10' || item.barcode?.statusid == '43' || item.barcode?.statusid == '44' || item.barcode?.statusid == '45') {
                            setInvoiceBtn(true);
                        }
                    }
                }["OrderDetails.useEffect"]);
            }
        }
    }["OrderDetails.useEffect"], [
        orderItems
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderDetails.useEffect": ()=>{
            if (Object.keys(OrderItemsAfterFulfil).length === 0 && orderHistoryLogs?.length > 0) {
                let fulfilTimes = [];
                for(let x = orderHistoryLogs.length - 1; x >= 0; x--){
                    const currNote = orderHistoryLogs[x].note;
                    const nextNote = orderHistoryLogs[x + 1]?.note;
                    if (currNote?.includes('Order was fulfilled') && !nextNote?.includes('Order was fulfilled')) {
                        fulfilTimes.push(orderHistoryLogs[x].note_created_at);
                    }
                }
                let myObject = {};
                orderItems.forEach({
                    "OrderDetails.useEffect": (item)=>{
                        if (item.added == 1 || item.banjo_added == 1) {
                            let itemTags = item?.tags ? item?.tags?.split(',') : [];
                            let transferfromId = itemTags?.filter({
                                "OrderDetails.useEffect": (tag)=>tag?.includes('transferfrom')
                            }["OrderDetails.useEffect"]);
                            if (transferfromId[0]?.split(':')[1] != undefined && transferfromId[0]?.split(':')[1] != item?.orderid) {
                                return;
                            }
                            if (fulfilTimes[8] && item.created_at > fulfilTimes[8]) {
                                myObject[item.id] = "10TH";
                            } else if (fulfilTimes[7] && item.created_at > fulfilTimes[7]) {
                                myObject[item.id] = "9TH";
                            } else if (fulfilTimes[6] && item.created_at > fulfilTimes[6]) {
                                myObject[item.id] = "8TH";
                            } else if (fulfilTimes[5] && item.created_at > fulfilTimes[5]) {
                                myObject[item.id] = "7TH";
                            } else if (fulfilTimes[4] && item.created_at > fulfilTimes[4]) {
                                myObject[item.id] = "6TH";
                            } else if (fulfilTimes[3] && item.created_at > fulfilTimes[3]) {
                                myObject[item.id] = "5TH";
                            } else if (fulfilTimes[2] && item.created_at > fulfilTimes[2]) {
                                myObject[item.id] = "4TH";
                            } else if (fulfilTimes[1] && item.created_at > fulfilTimes[1]) {
                                myObject[item.id] = "3RD";
                            } else if (fulfilTimes[0] && item.created_at > fulfilTimes[0]) {
                                myObject[item.id] = "2ND";
                            }
                        }
                    }
                }["OrderDetails.useEffect"]);
                setOrderItemsAfterFulfil(myObject);
                const order = [
                    "2ND",
                    "3RD",
                    "4TH",
                    "5TH",
                    "6TH",
                    "7TH",
                    "8TH",
                    "9TH",
                    "10TH"
                ];
                let _orderItems = [
                    ...orderItems
                ];
                if (Object.keys(myObject)?.length > 0 && fulfilTimes?.length > 0) {
                    _orderItems.sort({
                        "OrderDetails.useEffect": (a, b)=>{
                            return order.indexOf(myObject[a.id]) - order.indexOf(myObject[b.id]);
                        }
                    }["OrderDetails.useEffect"]);
                }
                _orderItems = _orderItems.map({
                    "OrderDetails.useEffect": (item)=>{
                        let shipNo = myObject[item.id];
                        let bg_color = "#EEF8EC";
                        let tag_color = "#4CAF50";
                        if (shipNo === "2ND") {
                            bg_color = "#FFF3F7";
                            tag_color = "#F199B8";
                        } else if (shipNo === "3RD") {
                            bg_color = "#FFFDF3";
                            tag_color = "#FF9D18";
                        } else if (shipNo === "4TH") {
                            bg_color = "#E9FAFB";
                            tag_color = "#3ACCE9";
                        } else if (shipNo === "5TH") {
                            bg_color = "#F7E0FA";
                            tag_color = "#B766C2";
                        } else if (myObject[item.id]) {
                            bg_color = "#D9F0EC";
                            tag_color = "#6AD6C2";
                        }
                        return {
                            ...item,
                            bg_color,
                            tag_color
                        };
                    }
                }["OrderDetails.useEffect"]);
                setOrderItems(_orderItems);
            }
        // let firstFulfilTime = '';
        // let secondFulfilTime = '';
        // if (Object.keys(OrderItemsAfterFulfil).length == 0 && orderHistoryLogs?.length > 0) {
        //   for (let x = orderHistoryLogs.length - 1; x >= 0; x--) {
        //     if (firstFulfilTime == '' && orderHistoryLogs[x].note?.includes('Order was fulfilled') && orderHistoryLogs[x+1].note?.includes('Order was fulfilled') == false) {
        //       firstFulfilTime = orderHistoryLogs[x].note_created_at
        //       continue;
        //     }
        //     if (firstFulfilTime != '' && orderHistoryLogs[x].note?.includes('Order was fulfilled') && orderHistoryLogs[x+1].note?.includes('Order was fulfilled') == false) {
        //       secondFulfilTime = orderHistoryLogs[x].note_created_at
        //       break;
        //     }
        //   }
        //   var myObject = {};
        //   orderItems.forEach(x => {
        //     if (x.added == 1 && x.banjo_added == 0) {
        //       if (secondFulfilTime != '' && x.created_at > secondFulfilTime) {
        //         myObject[x.id] = "THIRD"
        //       }
        //       else if (firstFulfilTime != '' && x.created_at > firstFulfilTime) {
        //         myObject[x.id] = "SECOND"
        //       }
        //     }
        //   })
        //   setOrderItemsAfterFulfil(myObject)
        // }
        }
    }["OrderDetails.useEffect"], [
        orderHistoryLogs
    ]);
    const handleAlertMsg = (obj, duration)=>{
        setAlertMsg({
            ...obj
        });
        if (!obj.loading) {
            setTimeout(()=>{
                setAlertMsg({});
            }, duration);
        }
    };
    const getCustomerAllOrders = async ()=>{
        let customerId = customerInfo?.customer_id || null;
        if (customerId == null) return;
        let response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getOrdersByCustomerId"])(customerId);
        if (response && response.success) await setCustomerAllOrderArr(response.orders);
    };
    const checkForAddedItemShipmentBadge = (itemID)=>{
        if (OrderItemsAfterFulfil[itemID] != undefined) {
            return OrderItemsAfterFulfil[itemID];
        }
        return "";
    };
    async function IsThisStaredOrder() {
        // let orderId = props.OrderDetail?.orderid;
        let res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$orderFunction$2e$js__$5b$client$5d$__$28$ecmascript$29$__["starOrderInfoById"])(orderId);
        if (res.success == true) {
            await setStarOrderInfo(res.starredOrder);
            await props.starInfoDataByChildCompProp(res.starredOrder);
        } else {
            await setStarOrderInfo(null);
        }
        ;
    }
    const fetchedItemsCount = ()=>{
        let itemsArr = orderItems || [];
        let fetchedItemArr = itemsArr.length > 0 && itemsArr.filter((item)=>{
            return item.barcodeid == 0 && item.item_fetched > 0;
        });
        return fetchedItemArr.length;
    };
    const readyItemsCount = ()=>{
        let itemsArr = orderItems || [];
        let readyItemArr = itemsArr.length > 0 && itemsArr.filter((item)=>{
            return item.barcodeid == 0 && item.folded_barcode > 0;
        });
        return readyItemArr.length;
    };
    const openPopups = async (popup, objj)=>{
        let obj = {
            ...dataObjectProp
        };
        if (popup == "starorderpopup") {
            obj.customer_id = orderDetails?.customer_id;
            obj.orderid = orderDetails?.orderid;
            await setDataObjProp(obj);
            await setOpenStarOrderPopup(true);
        } else if (popup == "removestarorderpopup") {
            obj.orderid = orderDetails && orderDetails.orderid;
            await setDataObjProp(obj);
            await setOpenRemoveStarOrderPopup(true);
        } else if (popup == "orderonholdpopup") {
            obj.orderid = orderDetails && orderDetails.orderid;
            await setDataObjProp(obj);
            ``;
            await setOpenOnHoldOrderPopup(true);
        } else if (popup == "removeorderonholdpopup") {
            obj.orderid = orderDetails && orderDetails.orderid;
            await setDataObjProp(obj);
            await setRemoveOnholdOrderPopup(true);
        } else if (popup == "orderinfopopup") {
            await setOrderInfoPopup(true);
        } else if (popup == "additempopup") {
            obj.customer_id = orderDetails && orderDetails.customer_id;
            obj.orderid = orderDetails && orderDetails.orderid;
            await setDataObjProp(obj);
            await setAddItemToOrderPopup(true);
        } else if (popup == "messagepopup") {
            if (objj != undefined) {
                obj.title = objj.title;
                obj.message = objj.message;
            }
            await setDataObjProp(obj);
            await setMessagePopup(true);
        }
    };
    const closePopups = async (popup)=>{
        if (popup == "starorderpopup") {
            await setDataObjProp(null);
            await setOpenStarOrderPopup(false);
        } else if (popup == "removestarorderpopup") {
            await setDataObjProp(null);
            await setOpenRemoveStarOrderPopup(false);
        } else if (popup == "orderonholdpopup") {
            await setDataObjProp(null);
            await setOpenOnHoldOrderPopup(false);
        } else if (popup == "removeorderonholdpopup") {
            await setDataObjProp(null);
            await setRemoveOnholdOrderPopup(false);
        } else if (popup == "orderinfopopup") {
            await setDataObjProp(null);
            await setOrderInfoPopup(false);
        } else if (popup == "additempopup") {
            await setDataObjProp(null);
            await setAddItemToOrderPopup(false);
        } else if (popup == "messagepopup") {
            await setDataObjProp(null);
            await setMessagePopup(false);
        }
    };
    async function addToClaimOrder() {
        // let orderId = props.OrderDetail && props.OrderDetail.orderid;
        await setDisabledBtnId(1);
        let res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$orderFunction$2e$js__$5b$client$5d$__$28$ecmascript$29$__["claimOrder"])(orderId, false);
        if (res?.success) {
            await setDisabledBtnId(-1);
            let claimerId = banjoUser?.banjoUser.userid;
            let claimerName = banjoUser?.banjoUser?.user_name + ' ' + banjoUser?.banjoUser?.name;
            orderDetails.claimer_name = claimerName;
            orderDetails.claimer_id = claimerId;
            setOrderDetails({
                ...orderDetails
            });
            updateOrderInSocket('add_claimer', claimerId, claimerName);
        // claimer_name
        // claimer_id
        // await props.getOrderDetail();
        } else {
            if (res?.message?.includes('Order Already Claimed')) {
                let claimerName = res?.message?.split('by')[1];
                setGenericAlertObj({
                    "headColor": 'bg-danger',
                    "heading": 'Checkin',
                    "btnContinue": true,
                    "btnContinueTxt": 'Yes',
                    "msgString": claimerName + ' has already claimed this order, do you want to claim this order instead of them?',
                    "msgStringColor": 'text-danger',
                    'CloseBtnTxt': 'No',
                    'popupSize': '600px',
                    'continueClick': async ()=>{
                        let response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$orderFunction$2e$js__$5b$client$5d$__$28$ecmascript$29$__["claimOrder"])(orderId, true);
                        if (response?.success) {
                            let claimerId = banjoUser?.banjoUser.userid;
                            let claimerName = banjoUser?.banjoUser?.user_name + ' ' + banjoUser?.banjoUser?.name?.charAt(0) + '.';
                            orderDetails.claimer_name = claimerName;
                            orderDetails.claimer_id = claimerId;
                            setOrderDetails({
                                ...orderDetails
                            });
                            updateOrderInSocket('add_claimer', claimerId, claimerName);
                        }
                        setGeneralAlert(false);
                    },
                    'closeAction': ''
                });
                setGeneralAlert(true);
            }
        }
    }
    const getClaimerColor = (claimerId)=>{
        if (allBanjoUserList?.length && claimerId !== 0) {
            return allBanjoUserList.find((value)=>value.userId == claimerId)?.color || '';
        } else {
            return '';
        }
    };
    const updateOrderInSocket = (type, claimerId, claimerName, holderName, holdType)=>{
        let _claimerName = claimerName?.trim()?.split(/\s+/)?.[0] || '';
        let _holdType = holdType === 'mc_hold' ? 'MC Hold' : holdType === 'ops_hold' ? 'Ops Hold' : holdType === 'declining_hold' ? 'Declining Hold' : '';
        let objectToSendInSocket;
        if (type === 'remove_claimer') {
            objectToSendInSocket = {
                order_id: orderDetails?.orderid,
                claimer_name: '',
                claimer_id: 0,
                rack_number: orderDetails?.rack_number,
                holder_name: orderDetails?.holder_name,
                hold_type: orderDetails?.holder_id
            };
        } else if (type === 'remove_rack') {
            objectToSendInSocket = {
                order_id: orderDetails?.orderid,
                claimer_name: orderDetails?.claimer_name?.trim()?.split(' ')[0],
                claimer_id: orderDetails?.claimer_id,
                rack_number: 0,
                holder_name: orderDetails?.holder_name,
                hold_type: orderDetails?.holder_id
            };
        } else if (type === 'add_claimer') {
            objectToSendInSocket = {
                order_id: orderDetails?.orderid,
                claimer_name: _claimerName,
                claimer_id: claimerId,
                claimer_color: getClaimerColor(claimerId),
                rack_number: orderDetails?.rack_number,
                holder_name: orderDetails?.holder_name,
                hold_type: orderDetails?.holder_id
            };
        } else if (type === 'remove_holdername') {
            objectToSendInSocket = {
                order_id: orderDetails?.orderid,
                claimer_name: orderDetails?.claimer_name?.trim()?.split(' ')[0],
                claimer_id: orderDetails?.claimer_id,
                rack_number: orderDetails?.rack_number,
                holder_name: '',
                hold_type: ''
            };
        } else if (type === 'add_holdername') {
            objectToSendInSocket = {
                order_id: orderDetails?.orderid,
                claimer_name: orderDetails?.claimer_name?.trim()?.split(' ')[0],
                claimer_id: orderDetails?.claimer_id,
                rack_number: orderDetails?.rack_number,
                holder_name: holderName,
                hold_type: _holdType
            };
        }
        updateClaimOrderListSocket([
            objectToSendInSocket
        ]);
    };
    const updateOrderInPage = (order)=>{
        if (order?.claimer_color) {
            setClaimColor(order?.claimer_color);
        }
        setOrderDetails((prev)=>({
                ...prev,
                claimer_name: order?.claimer_name?.trim()?.split(' ')[0],
                claimer_id: order?.claimer_id,
                holder_name: order?.holder_name,
                rack_number: order?.rack_number
            }));
    };
    async function removeFromClaimOrder(type = '') {
        // let orderId = props.OrderDetail && props.OrderDetail.orderid;
        if (!orderDetails.claimer_name?.includes(banjoUser?.banjoUser?.user_name) && type == '') {
            setGenericAlertObj({
                "headColor": 'bg-danger',
                "heading": 'Alert',
                "btnContinue": true,
                "btnContinueTxt": 'Yes',
                "msgString": orderDetails.claimer_name + ' has already claimed this order, do you want to claim this order instead of them?',
                "msgStringColor": 'text-danger',
                'CloseBtnTxt': 'No',
                'popupSize': '600px',
                'continueClick': async ()=>{
                    let response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$orderFunction$2e$js__$5b$client$5d$__$28$ecmascript$29$__["claimOrder"])(orderId, true);
                    if (response?.success) {
                        let claimerId = banjoUser?.banjoUser.userid;
                        let claimerName = banjoUser?.banjoUser?.user_name + ' ' + banjoUser?.banjoUser?.name;
                        orderDetails.claimer_name = claimerName?.trim()?.split(' ')[0];
                        orderDetails.claimer_id = claimerId;
                        setClaimColor(banjoUser?.banjoUser?.claim_color);
                        setOrderDetails({
                            ...orderDetails
                        });
                        updateOrderInSocket('add_claimer', claimerId, claimerName);
                    }
                    setGeneralAlert(false);
                },
                'closeAction': ''
            });
            setGeneralAlert(true);
            return;
        }
        let res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$orderFunction$2e$js__$5b$client$5d$__$28$ecmascript$29$__["removeClaimOrder"])(orderId);
        if (res.success == true) {
            if (type == '') {
                orderDetails.claimer_name = '';
                orderDetails.claimer_id = 0;
                updateOrderInSocket('remove_claimer');
            }
            if (type == 'rack') {
                orderDetails.rack_number = '0';
                updateOrderInSocket('remove_rack');
            }
            setOrderDetails({
                ...orderDetails
            });
        }
    }
    const handleRemoveItem = (orderItemId, barcode, item, index, orderId)=>{
        let obj = {
            order_item_id: orderItemId,
            barcodenum: barcode?.barcode1 ? barcode?.barcode1 : '',
            statusId: barcode?.statusid,
            index: index,
            orderid: orderId
        };
        setSkuData(item || {});
        setDataToRemoveItem(obj);
        setOpenRemoveItemFromOrderPopup(!openRemoveItemFromOrderPopup);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderDetails.useEffect": ()=>{
            const fetchData = {
                "OrderDetails.useEffect.fetchData": async ()=>{
                    if (orderDetails.holder_name != null) {
                        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$orderFunction$2e$js__$5b$client$5d$__$28$ecmascript$29$__["checkOrderHolderNotes"])(orderDetails?.orderid);
                        if (response?.success) {
                            setOrderHoldNotes(response.result);
                            setHoldTypes(response.result.hold_type == 0 ? "on hold" : response.result.hold_type == 1 ? "mc_hold" : response.result.hold_type == 2 ? "ops_hold" : response.result.hold_type == 3 ? "declining_hold" : response.result.hold_type == 4 ? "fraud_hold" : response.result.hold_type == 5 ? "after_ready_hold" : response.result.hold_type == 6 ? "op_notes_hold" : "cant_find_hold");
                        }
                    }
                }
            }["OrderDetails.useEffect.fetchData"];
            fetchData();
        }
    }["OrderDetails.useEffect"], [
        orderDetails.holder_name
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderDetails.useEffect": ()=>{
            if (addedItemSpecialCase && Object.keys(specialCaseObj).length > 0) {
                let check = false;
                orderItems.filter({
                    "OrderDetails.useEffect": (item, i)=>{
                        if (specialCaseObj[item.id] && item.barcodeid > 0) {
                            let payload = {
                                "barcodeId": item.barcodeid,
                                "tags_to_add": 'added-item-special-case',
                                "tags_to_remove": ""
                            };
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$barcodeFuncitons$2e$js__$5b$client$5d$__$28$ecmascript$29$__["updateBarcodeTags"])(payload);
                            if (orderItems.length == i + 1) check = true;
                        }
                    }
                }["OrderDetails.useEffect"]);
                if (check) setSpecialCaseObj({});
            }
        }
    }["OrderDetails.useEffect"], [
        specialCaseObj,
        orderDetails
    ]);
    let popupData = {
        processorNotes: customerInfo ? customerInfo.order_processor_notes : "",
        orderNotes: orderDetails ? orderDetails.ordernotes : "",
        starNotes: starOrderInfo ? starOrderInfo.starnotes : "",
        orderNumber: orderDetails ? orderDetails.ordername : "",
        onHoldNotes: holdOrderNotes ? holdOrderNotes.holdnotes : "",
        notes: holdOrderNotes.holdnotes,
        holdedBy: holdOrderNotes.holded_by
    };
    let orderOnHoldData = {
        orderid: orderDetails ? orderDetails.orderid : ""
    };
    const handleHistoryLogPopup = (barcode)=>{
        setBarcodeData({
            barcode: barcode.barcode1,
            barcodeId: barcode.barcodeid
        });
        setToggleBarcodeHistoryPopup(!toggleBarcodeHistoryPopup);
    };
    const updateOrderItemObj = (value, index, type)=>{
        orderItems[index].barcode.barcode_identifier = value;
        setOrderItems([
            ...orderItems
        ]);
    };
    const updateItemType = (index, type)=>{
        orderItems[index].type = type;
        setOrderItems([
            ...orderItems
        ]);
    };
    const handleNotesChange = async (e, action, barcodeid, notes, barcode1, index)=>{
        let notesVal = document.querySelector(`#editableBox${index}`)?.textContent || '';
        if (action == 'blur' && notesVal == '') {
            e.target.classList.add(`${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].empty}`);
        } else if (action == 'blur') {
            e.target.classList.remove(`${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].empty}`);
        }
        if (action == 'blur' && notes != notesVal) {
            setActionBtn({
                ...actionBtn,
                [index]: true
            });
        }
        if (action == 'blur' && notes == notesVal) {
            setActionBtn({
                ...actionBtn,
                [index]: false
            });
        }
        if (action == 'click') {
            setActionBtn({
                ...actionBtn,
                [index]: false
            });
            setActionLoading({
                [index]: true
            });
            let notesPayload = {
                "barcode": {
                    "barcodeid": barcodeid,
                    "barcode1": barcode1,
                    "lastnotes": notesVal
                },
                "isNotesUpdate": true,
                'ApprovalName': ''
            };
            let response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$barcodeFuncitons$2e$js__$5b$client$5d$__$28$ecmascript$29$__["barcodeUpdate"])(notesPayload);
            if (response?.success) {
                orderItems[index].barcode.lastnotes = notesVal;
                setOrderItems(orderItems);
                setActionLoading({});
                setGreenCheck({
                    [index]: true
                });
                setTimeout(()=>{
                    setGreenCheck({});
                }, 3000);
            } else {
                setActionLoading({});
            }
        }
    };
    const checkItemType = (item)=>{
        let item_type_text = '';
        if (item.type?.indexOf('FashionPass') > -1) item_type_text = 'any';
        if (item.type?.indexOf('Sale') > -1 && item.type?.indexOf('-NS') > -1) {
            if (item.type?.indexOf('Used') > -1) item_type_text = 'used';
            if (item.type?.indexOf('New') > -1) item_type_text = 'new';
        }
        if (item.type?.indexOf('Sale') > -1 && item.type?.indexOf('-S') > -1) {
            item_type_text = 'any';
        }
        return item_type_text;
    };
    const handleSkuChange = (item)=>{
        setBarcodeData(item.barcode || {});
        setProductId(item.product?.product_id);
        setSkuData(item.sku || {});
        setSelectedOrderItem(item || {});
        setOpenSkuEditspopups(!openSkuEditspopups);
    };
    const handleChangeBarcode = (item)=>{
        setSelectedOrderItem(item || {});
        setSwapBarcode(!swapBarcode);
    };
    const handleFulFillItem = async (e, item, action)=>{
        let value = '';
        if (typeof e == 'object') {
            value = e.target.value;
        } else {
            value = e;
            setBarcodeNum({
                ...barcodeNum,
                [item.id]: value
            });
        }
        let alertObj = {
            "headColor": 'bg-danger',
            "heading": '',
            "btnContinue": false,
            "btnContinueTxt": '',
            "msgString": ''
        };
        let msgObj = {
            type: 'item_barcode_alert_' + item.id,
            loading: false,
            msg: '',
            color: '#ff0000'
        };
        if (action == 'change') {
            setBarcodeNum({
                ...barcodeNum,
                [item.id]: value
            });
            return;
        }
        if (action == 'blur') {
            if (value == '') return;
            if (typeof e == 'object') {
                let barcodeCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["validateBarcode"])(barcodeNum[item.id]);
                if (barcodeCheck.error) {
                    msgObj['msg'] = barcodeCheck.msg.replace(', please enter correct value and retry', '');
                    handleAlertMsg(msgObj, 3000);
                    return;
                }
            }
            if (typeof e == 'object') {
                e.target.blur();
            }
            // if(barcodeNum[item.id] == value) return;
            msgObj.loading = true;
            handleAlertMsg(msgObj, 3000);
            let payload = {
                "id": item.id,
                "barcodeid": parseInt(value),
                "type": item.type,
                "skuid": item.skuid
            };
            dataToSend.push(payload);
            if (typeof e == "object") {
                let response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$barcodeFuncitons$2e$js__$5b$client$5d$__$28$ecmascript$29$__["validateFullfillItem"])(payload);
                // console.log('log after validate api call');
                if (response?.success) {
                    msgObj.loading = false;
                    if (addedItemSpecialCase) {
                        setSpecialCaseObj({
                            ...specialCaseObj,
                            [item.id]: value
                        });
                    }
                    handleAlertMsg(msgObj, 3000);
                    let matchedObj = {
                        ...barcodeMatched,
                        [item.id]: value
                    };
                    setBarcodeMatched(matchedObj);
                    itemFullFillArray.push({
                        "id": item.id,
                        "barcode": value,
                        "barcodestatus": checkMaxRetail ? 28 : item.type?.indexOf('Sale') > -1 ? 13 : 8
                    });
                    setFullFillArray(itemFullFillArray);
                    itemFullfill(itemFullFillArray);
                    if (notFullFilledCount == Object.keys(matchedObj).length && typeof e !== 'object') {
                        setBarcodeScanPopup(false);
                        handleFullFillOrder(itemFullFillArray, matchedObj);
                    } else if (notFullFilledCount == Object.keys(matchedObj).length && checkOrderStatus() == '1') {
                        handleFullFillOrder(itemFullFillArray, matchedObj);
                    }
                } else if (response?.message?.includes('Barcode not found')) {
                    alertObj = {
                        "headColor": 'bg-danger',
                        "heading": 'Insert and Apply Notification',
                        "btnContinue": true,
                        "btnContinueTxt": 'OK',
                        "msgString": 'Are you 100% sure this is the correct size and the exact item?',
                        "msgStringColor": 'text-danger',
                        'CloseBtnTxt': 'Close',
                        'popupSize': '600px',
                        'continueClick': ()=>{
                            setBarcodeConfrimUpdatePopup(true);
                            setGeneralAlert(false);
                            setGenericAlertObj({
                                "barcode1": value,
                                "lastnotes": "",
                                "skuid": item.sku?.sku_id,
                                // "typeid": item.product?.product_type_id,
                                "statusid": 1,
                                "times_used": "0",
                                "cost": item.sku?.price + '.00',
                                "retail": item.sku?.retail + '.00',
                                "prepacked": 1,
                                "item": item
                            });
                        },
                        'closeAction': 'action'
                    };
                    setGenericAlertObj(alertObj);
                    setGeneralAlert(true);
                    msgObj.loading = false;
                    handleAlertMsg(msgObj, 3000);
                } else {
                    alertObj['heading'] = 'Confirm Update';
                    alertObj['msgString'] = response?.message;
                    setGenericAlertObj(alertObj);
                    setGeneralAlert(true);
                    msgObj.loading = false;
                    handleAlertMsg(msgObj, 3000);
                }
            } else {
                msgObj.loading = false;
                if (addedItemSpecialCase) {
                    setSpecialCaseObj({
                        ...specialCaseObj,
                        [item.id]: value
                    });
                }
                handleAlertMsg(msgObj, 3000);
                let matchedObj = {
                    ...barcodeMatched,
                    [item.id]: value
                };
                setBarcodeMatched(matchedObj);
                itemFullFillArray.push({
                    "id": item.id,
                    "barcode": value,
                    "barcodestatus": checkMaxRetail ? 28 : item.type?.indexOf('Sale') > -1 ? 13 : 8
                });
                setFullFillArray(itemFullFillArray);
                itemFullfill(itemFullFillArray);
                if (notFullFilledCount == Object.keys(matchedObj).length && typeof e !== 'object') {
                    // setBarcodeScanPopup(false)
                    // handleFullFillOrder(itemFullFillArray, matchedObj)
                    let response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$barcodeFuncitons$2e$js__$5b$client$5d$__$28$ecmascript$29$__["validateBultItems"])(dataToSend);
                    let api_success = Object.values(response.response).every((item)=>item.success);
                    let failed_validateValues = Object.values(response.response).filter((item)=>!item.success);
                    let failed_validateKeys = Object.keys(response.response).filter((key)=>!response.response[key].success // Filtering for false values
                    );
                    if (api_success) {
                        setBarcodeScanPopup(false);
                        handleFullFillOrder(itemFullFillArray, matchedObj);
                        setBulkValidationError([]);
                    } else {
                        let errMessages = failed_validateValues.map((item)=>item.message);
                        // let _errMessages = errMessages.join(",")
                        setBulkValidationError(errMessages);
                        // alertObj['heading'] = 'Invalid Barcodes'
                        // alertObj['msgString'] = _errMessages
                        // setGenericAlertObj(alertObj)
                        // setGeneralAlert(true)
                        // msgObj.loading = false
                        // handleAlertMsg(msgObj, 3000)
                        // console.log(response,"response in else when all are not success");
                        dataToSend = [];
                        let objectToMatch = matchedObj;
                        for(let key in objectToMatch){
                            if (failed_validateKeys?.includes(objectToMatch[key])) {
                                delete objectToMatch[key];
                            }
                        }
                        setBarcodeMatched(objectToMatch);
                    }
                } else if (notFullFilledCount == Object.keys(matchedObj).length && checkOrderStatus() == '1') {
                    handleFullFillOrder(itemFullFillArray, matchedObj);
                } else {
                // alert()
                }
            }
        }
    };
    const updateFulfilArrays = (item, barcode)=>{
        let matchedObj = {
            ...barcodeMatched,
            [item.id]: barcode
        };
        setBarcodeMatched(matchedObj);
        itemFullFillArray.push({
            "id": item.id,
            "barcode": barcode,
            "barcodestatus": checkMaxRetail ? 28 : item.type?.indexOf('Sale') > -1 ? 13 : 8
        });
        setFullFillArray(itemFullFillArray);
        itemFullfill(itemFullFillArray);
    };
    const handleFullFillOrder = async (itemsArray, matchedObj, from_inner_func)=>{
        let msgObj = {
            type: 'ful_fill_alert',
            loading: false,
            msg: '',
            color: 'danger'
        };
        if (Object.keys(barcodeMatched).length > 0 || matchedObj && Object.keys(matchedObj).length > 0) {
            let payload = {
                "orderid": orderDetails?.orderid,
                "order_items": itemsArray?.length > 0 ? itemsArray : fullFillArray
            };
            msgObj.loading = true;
            handleAlertMsg(msgObj, 3000);
            let response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$barcodeFuncitons$2e$js__$5b$client$5d$__$28$ecmascript$29$__["fullfillOrder"])(payload);
            if (response?.success) {
                let orderType = orderDetails?.order_type;
                // if( banjoUser?.banjoUser?.email?.toLowerCase()?.indexOf('joel@fashionpass.com') > -1 ||banjoUser?.banjoUser?.email?.toLowerCase()?.indexOf('beth@fashionpass.com') > -1 || banjoUser?.banjoUser?.email?.toLowerCase()?.indexOf('ibrar@7ctech.com') > -1 || banjoUser?.banjoUser?.email?.toLowerCase()?.indexOf('nizami@7ctech.com') > -1 ){
                if (orderType == 'FP') {
                    const printUrlRental = `${location.origin}/orderdetails/print/printPurchaseMembershipNew?name=${customerName}&ordername=${orderDetails?.ordername?.replace('#', '')}&ismanual=0`;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$orderFunction$2e$js__$5b$client$5d$__$28$ecmascript$29$__["printPurchaseRecieptUsingIframe"])(printUrlRental);
                }
                if (orderType == 'Sale' && orderDetails?.customer_id != __TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].maxRetailId) {
                    const printUrlSale = `${location.origin}/orderdetails/print/printPurchaseReceipt?name=${customerName}&ordername=${orderDetails?.ordername?.replace('#', '')}&ismanual=0`;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$orderFunction$2e$js__$5b$client$5d$__$28$ecmascript$29$__["printPurchaseRecieptUsingIframe"])(printUrlSale);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$orderFunction$2e$js__$5b$client$5d$__$28$ecmascript$29$__["printSaleReceipt"])(orderDetails?.ordername?.replace('#', ''));
                }
                if (orderType == 'FP/Sale') {
                    const printUrlSale = `${location.origin}/orderdetails/print/printPurchaseReceipt?name=${customerName}&ordername=${orderDetails?.ordername?.replace('#', '')}&ismanual=0`;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$orderFunction$2e$js__$5b$client$5d$__$28$ecmascript$29$__["printPurchaseRecieptUsingIframe"])(printUrlSale);
                    const printUrlRental = `${location.origin}/orderdetails/print/printPurchaseMembershipNew?name=${customerName}&ordername=${orderDetails?.ordername?.replace('#', '')}&ismanual=0`;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$orderFunction$2e$js__$5b$client$5d$__$28$ecmascript$29$__["printPurchaseRecieptUsingIframe"])(printUrlRental);
                }
                // }else{
                //   if (orderType == 'FP') printRentalReceipt(orderDetails?.ordername?.replace('#', ''), customerName)
                //   if (orderType == 'Sale' && orderDetails?.customer_id != Gconfig.maxRetailId) printSaleReceipt(orderDetails?.ordername?.replace('#', ''))
                //   if (orderType == 'FP/Sale') {
                //     printSaleReceipt(orderDetails?.ordername?.replace('#', ''))
                //     printRentalReceipt(orderDetails?.ordername?.replace('#', ''), customerName)
                //   }
                // }
                if (checkMaxRetail) {
                    if (response?.result?.order?.items?.length > 0) {
                        let itemsArr = response?.result?.order?.items;
                        itemsArr.map((item)=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["addRemoveAttributeSnoozeCustomerFromThirdParty"])([
                                "Third Party Sold:MaxRetail"
                            ], [
                                "Third Party Sold"
                            ], item.barcodeid);
                            let obj = {
                                barcodeid: item.barcodeid,
                                barcode: item?.barcode?.barcode1
                            };
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["insert_ThirdPartySoldVendorBarcode"])(obj, 5);
                        });
                    }
                }
                msgObj.loading = false;
                msgObj.msg = 'Order Has Succesfully Been Fullfilled';
                msgObj.color = 'success';
                setBarcodeMatched({});
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$orderFunction$2e$js__$5b$client$5d$__$28$ecmascript$29$__["addClaimOrderInList"])(orderId, 'claim', false);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$orderFunction$2e$js__$5b$client$5d$__$28$ecmascript$29$__["addClaimOrderInList"])(orderId, 'cantFind', false);
                props.getOrderDetail(false, response);
                handleAlertMsg(msgObj, 3000);
                // console.log(orderDetails?.ordername)
                if (autoShip && !window.autoFullFillOff && !isPoBoxAddress) {
                    setAutoShipment(autoShip);
                    // console.log('inside autoship condition')
                    setTimeout(()=>{
                        let shipmentBtn = document.querySelector('#cr_ship_00');
                        // console.log(shipmentBtn)
                        if (shipmentBtn) {
                            shipmentBtn.click();
                        } else {
                            setWaitShipmentAlert(true);
                            // console.log('button not found')
                            let retryCount = 0;
                            let timerInterval = setInterval(()=>{
                                // console.log(retryCount, ' retries')
                                shipmentBtn = document.querySelector('#cr_ship_00');
                                if (shipmentBtn) {
                                    shipmentBtn.click();
                                    if (timerInterval) clearInterval(timerInterval);
                                    setWaitShipmentAlert(false);
                                } else if (retryCount < 2) {
                                    retryCount++;
                                } else {
                                    // console.log('clear interval')
                                    if (timerInterval) clearInterval(timerInterval);
                                    setWaitShipmentAlert(false);
                                }
                            }, 3000);
                        }
                    }, 3000);
                }
            } else {
                msgObj.loading = false;
                msgObj.msg = response.message;
                handleAlertMsg(msgObj, 3000);
            }
        } else {
            let bar_inp_field_arr = document.querySelectorAll(".barcode_inp_class");
            // let bar_assigned_list_arr = document.querySelectorAll(".assign_barcode_class");
            let isAnyBarcodeFilled = false;
            bar_inp_field_arr.forEach((val)=>{
                if (val?.value?.length > 0) {
                    isAnyBarcodeFilled = true;
                }
            });
            // if(bar_assigned_list_arr?.length > 0) { 
            //     isAnyBarcodeFilled = true
            // }
            if (isAnyBarcodeFilled == true) {
                let filledBarcodeRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$barcodeFuncitons$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getOrderItemBarcodeStatusFunc"])(orderDetails?.orderid);
                if (filledBarcodeRes?.success && filledBarcodeRes?.data?.length > 0) {
                    let obj = {};
                    filledBarcodeRes?.data?.map((bval, ind)=>{
                        if (bval?.tags?.indexOf(`transferto:${bval?.orderid}`) > -1) {} else {
                            obj[bval.id] = bval.barcode;
                        }
                    });
                    if (Object.keys(obj)?.length > 0) {
                        setBarcodeMatched(obj);
                        if (!from_inner_func) {
                            setTimeout(()=>{
                                handleFullFillOrder(itemsArray, matchedObj, true);
                            }, 1000);
                        }
                    }
                } else {
                    msgObj['msg'] = `One or more of your items doesn't have a barcode assigned. Please ensure atleast one barcode is provided`;
                    handleAlertMsg(msgObj, 5000);
                }
            } else {
                msgObj['msg'] = `One or more of your items doesn't have a barcode assigned. Please ensure atleast one barcode is provided`;
                handleAlertMsg(msgObj, 5000);
            }
        }
    };
    const updateOrderItem = (item)=>{
        orderItems.filter((obj)=>{
            if (obj.id == item.id) {
                obj == item;
            }
        });
        setOrderItems([
            ...orderItems
        ]);
    };
    const handleFound = async (orderId, orderItemId, index)=>{
        setActionLoading({
            [index]: true
        });
        let response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$orderFunction$2e$js__$5b$client$5d$__$28$ecmascript$29$__["markFound"])(orderId, orderItemId);
        if (response?.success) {
            orderItems[index].cant_found = 0;
            let check = true;
            for(let x in orderItems){
                if (orderItems[x].cant_found) {
                    check = false;
                }
            }
            setOrderItems([
                ...orderItems
            ]);
            if (check) {
                orderDetails.holder_id = null;
                orderDetails.holder_name = null;
                setOrderHoldNotes('');
            }
            setActionLoading({});
        } else {
            setActionLoading({});
        }
    };
    const handleCantFind = async (orderId, itemId, index)=>{
        setActionLoading({
            [index]: true
        });
        let response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$orderFunction$2e$js__$5b$client$5d$__$28$ecmascript$29$__["markItemCantFind"])(orderId, itemId);
        if (response?.success) {
            let check = false;
            for(let x in orderItems){
                if (orderItems[x].cant_found) {
                    check = true;
                }
            }
            orderItems[index].cant_found = 1;
            if (!check) {
                setHandleHoldNotes(true);
                let username = banjoUser?.banjoUser?.user_name;
                let userid = banjoUser?.banjoUser?.userid;
                orderDetails.holder_id = userid;
                orderDetails.holder_name = username;
            // let res = await removeClaimOrder(orderId);
            // if (res.success == true) {
            //   orderDetails.claimer_name = ''
            //   orderDetails.claimer_id = 0
            //   setOrderDetails({ ...orderDetails })
            // }
            }
            setOrderItems([
                ...orderItems
            ]);
            setActionLoading({});
        } else {
            setActionLoading({});
        }
    };
    const orderTypeLabel = (orderType)=>{
        switch(orderType){
            case 'FP':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Fashionpass"
                }, void 0, false, {
                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                    lineNumber: 1571,
                    columnNumber: 26
                }, this);
            case 'Sale':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Sale Items"
                }, void 0, false, {
                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                    lineNumber: 1572,
                    columnNumber: 28
                }, this);
            case 'FP/Sale':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "FashionPass/Sale Items"
                }, void 0, false, {
                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                    lineNumber: 1573,
                    columnNumber: 31
                }, this);
        }
    };
    // bmw
    const openTransferActionPopup = (item, conditionStatus)=>{
        setTransferActionLoading(false);
        setTransferActionState({
            item,
            conditionStatus: Number(conditionStatus),
            emailCustomer: false,
            chargeAddedItem: false
        });
        if (conditionStatus == 4) {
            const selectedOrderItemId = Number(item?.id);
            const matchingInvoices = Array.isArray(newInvoice) ? newInvoice.filter((invoice)=>Array.isArray(invoice?.order_item_ids) && invoice.order_item_ids.some((orderItemId)=>Number(orderItemId) === selectedOrderItemId)) : [];
            const latestInvoice = matchingInvoices.reduce((latest, invoice)=>{
                if (!latest) return invoice;
                return Number(invoice?.invoice_id) > Number(latest?.invoice_id) ? invoice : latest;
            }, null);
            let invoiceNum = latestInvoice?.invoice_id ? latestInvoice.invoice_id : '';
            const invoiceUrl = `/invoice/${invoiceNum}?barcodeid=${item?.barcodeid}&barcode=${item?.barcode?.barcode1}&orderid=${orderId}`;
            if ("TURBOPACK compile-time truthy", 1) {
                try {
                    const payload = {
                        orderId,
                        itemId: item?.id,
                        conditionStatus: 1,
                        barcodeId: item?.barcodeid,
                        timestamp: Date.now()
                    };
                    window.localStorage.setItem(TRANSFER_ACTION_POPUP_RETURN_KEY, JSON.stringify(payload));
                } catch (err) {
                // ignore storage errors
                }
                window.open(invoiceUrl, '_blank', 'noopener,noreferrer');
            } else //TURBOPACK unreachable
            ;
            return;
        }
        setTransferActionPopup(true);
    };
    const closeTransferActionPopup = ()=>{
        setTransferActionLoading(false);
        setTransferActionPopup(false);
        setTransferActionState({
            item: null,
            conditionStatus: null,
            emailCustomer: false,
            chargeAddedItem: false
        });
    };
    const updateTransferActionEmail = (emailCustomer)=>{
        setTransferActionState((prev)=>({
                ...prev,
                emailCustomer
            }));
    };
    const updateTransferActionCharge = (chargeAddedItem)=>{
        setTransferActionState((prev)=>({
                ...prev,
                chargeAddedItem
            }));
    };
    const handleTransferActionConfirm = async ()=>{
        if (transferActionLoading) return;
        setTransferActionLoading(true);
        try {
            const transferStatus = Number(transferActionState?.conditionStatus);
            const orderItemWithOrderId = [
                {
                    Item1: Number(transferActionState?.item?.id),
                    Item2: Number(orderId)
                }
            ];
            if (transferStatus === 1 || transferStatus === 3) {
                const nextOrderList = Array.isArray(nextOrderPlacedData) ? nextOrderPlacedData : [];
                const nextOrderObj = nextOrderList?.length > 0 ? nextOrderList[0] : null;
                const toOrderId = Number(nextOrderObj?.orderid);
                let isItemPreviouslyTransferred = false;
                let tags = transferActionState?.item?.tags;
                let tagArr = tags?.split(',');
                tagArr?.length > 0 && tagArr.map((tag)=>{
                    if (tag?.indexOf('transferfrom:') > -1 && tag?.indexOf(`nexttransferfrom:`) == -1 && tag?.indexOf(`transferfrom:${props.transferItemOrderId}`) == -1) {
                        isItemPreviouslyTransferred = true;
                    }
                });
                let payload = {
                    customer_id: Number(customerInfo?.customer_id),
                    order_id: Number(orderId),
                    order_type: "transferitem",
                    from_ZenDesk: "false",
                    isChargeOnTransfer: !!transferActionState?.chargeAddedItem,
                    isEmailSent: !!transferActionState?.emailCustomer,
                    isBanjoUser: true,
                    order_item_with_order_id: orderItemWithOrderId
                };
                if (isItemPreviouslyTransferred) {
                    payload['previousTransferOrder'] = Number(orderId);
                }
                let lastOrderTags = nextOrderList?.length == 0 ? "" : nextOrderList[0]?.order_tags;
                if (nextOrderList?.length > 0 && lastOrderTags?.indexOf("do_not_count_order") == -1) {
                    payload["next_order_id"] = toOrderId;
                }
                let response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$TransferFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["banjoTransferRentOrderItem"])(payload);
                if (!response?.success) {
                    setGenericAlertObj({
                        "headColor": 'bg-danger',
                        "heading": 'Transfer Item',
                        "btnContinue": false,
                        "btnContinueTxt": '',
                        "msgString": response?.message || 'Some thing went wrong!'
                    });
                    setGeneralAlert(true);
                    return;
                } else {
                    closeTransferActionPopup();
                }
            } else if (transferStatus === 2) {
                let isItemPreviouslyTransferred = false;
                let tags = transferActionState?.item?.tags;
                let tagArr = tags?.split(',');
                tagArr?.length > 0 && tagArr.map((tag)=>{
                    if (tag?.indexOf('transferfrom:') > -1 && tag?.indexOf(`nexttransferfrom:`) == -1 && tag?.indexOf(`transferfrom:${props.transferItemOrderId}`) == -1) {
                        isItemPreviouslyTransferred = true;
                    }
                });
                let payload = {
                    customer_id: Number(customerInfo?.customer_id),
                    order_id: Number(orderId),
                    isChargeOnTransfer: !!transferActionState?.chargeAddedItem,
                    isEmailSent: !!transferActionState?.emailCustomer,
                    isBanjoUser: true,
                    order_item_with_order_id: orderItemWithOrderId
                };
                if (isItemPreviouslyTransferred) {
                    payload['previousTransferOrder'] = Number(orderId);
                }
                let response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$TransferFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["cancelTransferRentOrderItem"])(payload);
                if (!response?.success) {
                    setGenericAlertObj({
                        "headColor": 'bg-danger',
                        "heading": 'Cancel Transfer',
                        "btnContinue": false,
                        "btnContinueTxt": '',
                        "msgString": response?.message || 'Some thing went wrong!'
                    });
                    setGeneralAlert(true);
                    return;
                } else {
                    closeTransferActionPopup();
                }
            }
            // else if (transferStatus === 3) {
            //   const nextOrderList = Array.isArray(nextOrderPlacedData) ? nextOrderPlacedData : []
            //   const nextOrderObj = nextOrderList?.length > 0 ? nextOrderList[0] : null
            //   const toOrderId = Number(nextOrderObj?.orderid ?? nextOrderObj?.order_id ?? nextOrderObj?.next_order_id ?? orderId)
            //   const toOrderName = nextOrderObj?.ordername ?? nextOrderObj?.order_name ?? nextOrderObj?.next_order_name ?? `#${orderId}`
            //   const selectedItem = transferActionState?.item || {}
            //   const additionalItemCharge = customerInfo?.tags?.toLowerCase()?.indexOf("beta-tester") == -1 ? 19.95 : !isNaN(transferItemPriceFromSetting) ? Number(transferItemPriceFromSetting) : 29.95 ;
            //   let createChargeResponse = null
            //   let additionalItemSalesTax = 0
            //   if (transferActionState?.chargeAddedItem) {
            //     try {
            //       const token = getAuthTokenfromcookie()
            //       let uniqueId = Math.floor(Date.now() / 1000)
            //       const taxPayload = {
            //         from_country: "US",
            //         from_zip: "90248",
            //         from_state: "CA",
            //         from_city: "Gardena",
            //         from_street: "15020 S Figueroa St",
            //         to_country: "US",
            //         to_zip: addressDetail?.zip || "",
            //         to_state: getProvinceCode(addressDetail?.state) || "",
            //         to_city: addressDetail?.city || "",
            //         to_street: addressDetail?.address1 || addressDetail?.address || "",
            //         amount: parseFloat(additionalItemCharge),
            //         shipping: 0,
            //         line_items: [
            //           {
            //             id: Number(uniqueId),
            //             name:"Added Items",
            //             quantity: 1,
            //             product_tax_code: 20010,
            //             unit_price: additionalItemCharge,
            //           }
            //         ],
            //         is_rent: false
            //       }
            //       const data = await calculateInvoiceTax(taxPayload, { contentType: "application/json", token })
            //       if (data?.success && data?.result?.amount_to_collect > 0) {
            //         additionalItemSalesTax = data?.result?.amount_to_collect              
            //       } 
            //       else {
            //         additionalItemSalesTax = 0
            //       }
            //     } 
            //     catch {
            //       additionalItemSalesTax = 0
            //     }
            //     const createChargePayload = {
            //       order_id: toOrderId,
            //       order_item_id: Number(selectedItem?.id),
            //       invoice_id: null,
            //       email: customerInfo?.email,
            //       quantity: 1,
            //       tax: Number(additionalItemSalesTax?.toFixed ? additionalItemSalesTax.toFixed(2) : additionalItemSalesTax || 0),
            //       addedType: "transfer",
            //       customer_id: customerInfo?.customer_id,
            //       charge_type: "transfer_item",
            //       isChargeOnTransfer: true
            //     }
            //     createChargeResponse = await createChargeTransferItems(createChargePayload)
            //     if (createChargeResponse?.status != "1") {
            //       setGenericAlertObj({
            //         "headColor": 'bg-danger',
            //         "heading": 'Refund And Transfer',
            //         "btnContinue": false,
            //         "btnContinueTxt": '',
            //         "msgString": createChargeResponse?.message || 'Create charge API failed'
            //       })
            //       setGeneralAlert(true)
            //       return
            //     }
            //   }
            //     const chargePayload = {
            //       customer_id: Number(customerInfo?.customer_id),
            //       from_order_id: Number(orderId),
            //       to_order_id: toOrderId,
            //       order_item_id: Number(selectedItem?.id),
            //       isEmailSent: !!transferActionState?.emailCustomer,
            //       isChargeOnTransfer: !!transferActionState?.chargeAddedItem,
            //     }
            //     const chargeResponse = await paidTransferItemToNextOrder(chargePayload)
            //     if (!chargeResponse?.success) {
            //       setGenericAlertObj({
            //         "headColor": 'bg-danger',
            //         "heading": 'Refund And Transfer',
            //         "btnContinue": false,
            //         "btnContinueTxt": '',
            //         "msgString": chargeResponse?.message || 'Added item charge API failed'
            //       })
            //       setGeneralAlert(true)
            //       return
            //     }
            //     if(createChargeResponse?.status == "1" && transferActionState?.chargeAddedItem) { 
            //         const createOrderAgainstEmailPayload = {
            //           customer_email: customerInfo?.email,
            //           sales_tax: Number(additionalItemSalesTax.toFixed(2)),
            //           transaction_id: createChargeResponse?.data?.id ,
            //           amount: additionalItemCharge.toFixed(2),
            //           product_identifier: createChargeResponse?.data?.metadata?.billing ,
            //           description:  createChargeResponse?.data?.metadata?.description,
            //           discount: "0"
            //         }
            //         const createOrderAgainstEmailResponse = await createOrderAgainstEmail(createOrderAgainstEmailPayload)
            //         if (!createOrderAgainstEmailResponse?.success) {
            //           setGenericAlertObj({
            //             "headColor": 'bg-danger',
            //             "heading": 'Refund And Transfer',
            //             "btnContinue": false,
            //             "btnContinueTxt": '',
            //             "msgString": createOrderAgainstEmailResponse?.message || 'Create order against email API failed'
            //           })
            //           setGeneralAlert(true)
            //           return
            //         }
            //     }
            //     const barcodeUpdatePayloadObj = {
            //       from_order_id: Number(orderId),
            //       from_order_name: orderDetails?.ordername ? orderDetails?.ordername : `#${orderName}`,
            //       to_order_id: toOrderId,
            //       to_order_name: toOrderName,
            //       barcodeid: Number(selectedItem?.barcodeid),
            //       barcode: Number(selectedItem?.barcode?.barcode1),
            //       isCSAddedItem: true
            //     }
            //     if (nextOrderList?.length === 0) {
            //       delete barcodeUpdatePayloadObj.to_order_id
            //       delete barcodeUpdatePayloadObj.to_order_name
            //       barcodeUpdatePayloadObj.isCSAddedItem = false
            //     }
            //     const barcodeUpdateResponse = await UpdateBarcodeForPaidTransfer([barcodeUpdatePayloadObj])
            //     if (!barcodeUpdateResponse?.success) {
            //       setGenericAlertObj({
            //         "headColor": 'bg-danger',
            //         "heading": 'Refund And Transfer',
            //         "btnContinue": false,
            //         "btnContinueTxt": '',
            //         "msgString": barcodeUpdateResponse?.message || 'Barcode update API failed'
            //       })
            //       setGeneralAlert(true)
            //       return
            //     }
            // }
            setTimeout(()=>{
                props.getOrderDetail();
                closeTransferActionPopup();
            }, 200);
        } catch (error) {
            setGenericAlertObj({
                "headColor": 'bg-danger',
                "heading": 'Transfer Item',
                "btnContinue": false,
                "btnContinueTxt": '',
                "msgString": error?.message || 'Transfer API failed'
            });
            setGeneralAlert(true);
        } finally{
            setTransferActionLoading(false);
        }
    };
    // useEffect(() => {
    //   if (typeof window === 'undefined') return
    //   const reopenTransferPopup = () => {
    //     const pending = window.localStorage.getItem(TRANSFER_ACTION_POPUP_RETURN_KEY)
    //     if (!pending) return
    //     let payload
    //     try {
    //       payload = JSON.parse(pending)
    //     } catch (err) {
    //       window.localStorage.removeItem(TRANSFER_ACTION_POPUP_RETURN_KEY)
    //       return
    //     }
    //     if (!payload || payload.orderId !== orderId || !payload.itemId) return
    //     const matchedItem = orderItems.find((orderItem) => Number(orderItem?.id) === Number(payload.itemId))
    //     if (!matchedItem) return
    //     setTransferActionState((prev) => ({
    //       ...prev,
    //       item: matchedItem,
    //       conditionStatus: payload.conditionStatus !== undefined ? Number(payload.conditionStatus) : Number(prev.conditionStatus ?? 1)
    //     }))
    //     setTransferActionPopup(true)
    //     window.localStorage.removeItem(TRANSFER_ACTION_POPUP_RETURN_KEY)
    //   }
    //   reopenTransferPopup()
    //   window.addEventListener('focus', reopenTransferPopup)
    //   return () => window.removeEventListener('focus', reopenTransferPopup)
    // }, [orderId, orderItems])
    const handleToolTip = (id, type)=>{
        if (type == 'thumb') {
            if (thumbsUpTooltip[id] !== undefined) {
                setThumbsUpTooltip({});
                return;
            }
            setThumbsUpTooltip({
                [id]: true
            });
        } else if (type == 'flag') {
            if (flagTooltip[id] !== undefined) {
                setFlagTooltip({});
                return;
            }
            setFlagTooltip({
                [id]: true
            });
        } else if (type == 'sku') {
            if (barcodeNumberTooltip[id] !== undefined) {
                setBarcodeNumberTooltip({});
                return;
            }
            setBarcodeNumberTooltip({
                [id]: true
            });
        }
    };
    const orderCheckIn = async (sendEmail = true)=>{
        setCheckInPopup(false);
        let payload = {
            "ordername": orderDetails.ordername,
            sendEmail: sendEmail,
            "orderid": orderDetails.orderid
        };
        if (checkinSelectionKey) {
            payload.doNotCountReason = checkinSelectionKey;
        }
        setCheckInLoading(true);
        let response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$orderFunction$2e$js__$5b$client$5d$__$28$ecmascript$29$__["checkInOrder"])(payload);
        if (response?.success) {
            if (response?.data?.status == "card_error") {
                setCardError('Your card was declined.');
            } else {
                orderDetails.checked_in = '1';
                setOrderDetails({
                    ...orderDetails
                });
                setCheckInLoading(false);
                if (payload.doNotCountReason) {
                    props.getOrderDetail();
                }
            }
        } else {
            setCheckInLoading(false);
        }
    };
    const orderUnCheckIn = async ()=>{
        setCheckInPopup(false);
        let payload = {
            "ordername": orderDetails.ordername,
            "orderid": orderDetails.orderid
        };
        setCheckInLoading(true);
        let response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$orderFunction$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unCheckInOrder"])(payload);
        if (response?.success) {
            orderDetails.checked_in = '0';
            if (props.getOrderCheckinEstimateTime) {
                props.getOrderCheckinEstimateTime({
                    ...orderDetails
                }, props.shipmentLabelTracking);
            }
            setOrderDetails({
                ...orderDetails
            });
            setCheckInLoading(false);
        } else {
            setCheckInLoading(false);
        }
    };
    const handleCheckIn = (formCheckinSelection, _checkinSelectionKey)=>{
        checkinSelectionKey = _checkinSelectionKey;
        if (orderDetails?.order_tags?.indexOf('do_not_count_order') > -1 || formCheckinSelection) {
            let alertObj = {
                "headColor": 'bg-danger',
                "heading": 'Checkin',
                "btnContinue": true,
                "btnContinueTxt": 'Yes',
                "msgString": 'Do you want to email the customer?',
                "msgStringColor": 'text-danger',
                'CloseBtnTxt': 'No',
                'popupSize': '600px',
                'continueClick': orderCheckIn,
                'closeAction': 'action'
            };
            setGenericAlertObj(alertObj);
            setCheckInPopup(!checkInPopup);
        } else {
            setCheckinSelectionPopup(true);
        }
    };
    const handleCheckedIn = ()=>{
        let alertObj = {
            "headColor": 'bg-danger',
            "heading": 'Un-check-in',
            "btnContinue": true,
            "btnContinueTxt": 'Yes',
            "msgString": 'Are you sure you want to un-check-in this order?',
            "msgStringColor": 'text-danger',
            'CloseBtnTxt': 'Close',
            'popupSize': '600px',
            'continueClick': ()=>orderUnCheckIn(),
            'closeAction': 'close'
        };
        setGenericAlertObj(alertObj);
        setCheckInPopup(!checkInPopup);
    };
    const invoiceBtnName = (orderType)=>{
        let name = '';
        if (orderType == 'Sale') name = 'Sale Invoice';
        if (orderType == 'FP/Sale') name = 'Sale Invoice';
        return name;
    };
    const countUnfulfilledItems = ()=>{
        let count = 0;
        let orderItems = orderDetails?.items;
        for(let x in orderItems){
            if (orderItems[x].barcodeid == 0) {
                count++;
            }
        }
        return count;
    };
    const countTransferedItems = ()=>{
        if (!transferTo) return 0;
        let count = 0;
        let orderItems = orderDetails?.items;
        for(let x in orderItems){
            let tags = orderItems[x]?.tags?.split(',');
            let transferTotag = tags.filter((tag)=>tag?.includes('transferto'));
            if (transferTotag[0]?.split(':')[1] == orderId) {
                count++;
            }
        }
        return count;
    };
    const calcTimeDiff = (time, timer)=>{
        let fetchTime = time;
        fetchTime = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(time).utc().format('h:mm a');
        let check = false;
        let LAtime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])().tz("America/Los_Angeles").format('h:mm a');
        let HLA = parseInt(LAtime?.split(':')[0]);
        let MLA = parseInt(LAtime?.split(':')[1]);
        let fTH = parseInt(fetchTime?.split(':')[0]);
        let fTM = parseInt(fetchTime?.split(':')[1]);
        let diffH = HLA - fTH;
        let diffM = MLA - fTM;
        let diff = diffH * 60 + diffM;
        if (diff <= parseInt(timer) && diff >= 0) check = true;
        return check;
    };
    const handleItemsChangeAlert = (sku, type)=>{
        let obj = {
            msg: `${sku} ${type} 1`
        };
        setItemChangeAlert(obj);
        setTimeout(()=>{
            setItemChangeAlert({});
        }, 3000);
    };
    const handleItemArray = (index, type, obj)=>{
        if (type == 'remove') {
            let items = orderItems;
            items?.splice(index, 1);
            setOrderItems([
                ...items
            ]);
        } else {
            setOrderItems([
                ...orderItems,
                obj
            ]);
        }
    };
    const handleSwapSkuType = (item_type_text, skuid, productId, itemId, index)=>{
        if (item_type_text !== 'any' && checkOrderStatus() == '0') {
            let obj = {
                skuType: item_type_text,
                skuid: skuid,
                productId: productId,
                itemId: itemId,
                userid: banjoUser?.banjoUser.userid,
                index: index
            };
            setGenericAlertObj(obj);
            setOpenSwapBarcodeTypePopup(!openSwapBarcodeTypePopup);
        }
    };
    const printBarcodeViaDymo = (barcode, sku, title, size)=>{
        let dymoUrl = __TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].assetsURL + `js/dymoJS-live.js?barcode=${barcode}&sku=${sku}&title=${title}&size=${size}&page=${'barcode'}`;
        // console.log(dymoUrl, 'url')
        setDymoUrl(dymoUrl);
        setPrintLabelStatus(true);
        setTimeout(()=>{
            setPrintLabelStatus(false);
        }, 3000);
    };
    const updateBarcodeStatus = (statusid, index)=>{
        if (orderItems[index]?.barcode) {
            orderItems[index].barcode.statusid = statusid;
            setOrderItems([
                ...orderItems
            ]);
        }
    };
    const updateHoldInfo = (type, holdType = '')=>{
        // console.log(holdType,"holdType")
        setHoldTypes(holdType);
        if (type == 'hold') {
            setHandleHoldNotes(true);
            let username = banjoUser?.banjoUser?.user_name;
            let userid = banjoUser?.banjoUser?.userid;
            orderDetails.holder_id = userid;
            orderDetails.holder_name = username;
            setOrderDetails({
                ...orderDetails
            });
            updateOrderInSocket('add_holdername', '', '', username, holdType);
        }
        if (type == 'unhold') {
            orderDetails.holder_id = 0;
            orderDetails.holder_name = '';
            orderDetails.claimer_id = 0;
            orderDetails.claimer_name = '';
            orderDetails.rack_number = 0;
            setOrderHoldNotes('');
            setOrderDetails({
                ...orderDetails
            });
            setHandleHoldNotes(true);
            updateOrderInSocket('remove_holdername');
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderDetails.useEffect": ()=>{
            if (entityAttributes?.length > 0) {
                let currentYear = new Date();
                let entityTag = 'birthday_' + currentYear.getFullYear();
                let check = false;
                entityAttributes?.filter({
                    "OrderDetails.useEffect": (item)=>{
                        if (item.name == entityTag) {
                            check = true;
                        }
                    }
                }["OrderDetails.useEffect"]);
                if (!check) setCheckBirthday(true);
            }
            if (entityAttributes == null) setCheckBirthday(true);
        }
    }["OrderDetails.useEffect"], [
        entityAttributes
    ]);
    let itemBadges = (tags, transferFromPrev, transferToNext)=>{
        let badgesArr = [];
        if (tags == '') {
            badgesArr.push('ORIGINAL ORDER');
        }
        if (tags?.indexOf('added_item_with_order') > -1) {
            badgesArr.push('ORIGINAL ORDER');
        }
        if (badgesArr?.indexOf('ORIGINAL ORDER') == -1 && !transferFromPrev && transferToNext) {
            badgesArr.push('ORIGINAL ORDER');
        }
        if (tags?.indexOf('free_bonus_item') > -1) {
            badgesArr.push('FREE BONUS ITEM');
        }
        if (tags?.indexOf('cs_additional_item') == -1 && tags?.indexOf('added_item_with_order') > -1) {
            badgesArr.push('PAID ADDITIONAL ITEM');
        }
        if (tags?.indexOf('cs_added_item') == -1 && (tags?.indexOf('added_item_between_order') > -1 || tags?.indexOf('added_item_after_order') > -1)) {
            badgesArr.push('PAID ADDED ITEM');
        }
        if (tags?.indexOf('cs_additional_item') > -1 && tags?.indexOf('free_bonus_item') == -1) {
            badgesArr.push('CS ADDITIONAL ITEM');
        }
        if (tags?.indexOf('cs_added_item') > -1) {
            badgesArr.push('CS ADDED ITEM');
        }
        // if(movedFromPrevOrder == true){
        //    badgesArr.push('Moved From Previous Order')
        // }
        // if(movedToNextOrder == true){
        //    badgesArr.push('Moved To Next Order')
        // }
        return badgesArr;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderDetails.useEffect": ()=>{
            if (!customerInfo?.customer_id) {
                return;
            }
            const getStatus = {
                "OrderDetails.useEffect.getStatus": async ()=>{
                    try {
                        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getEntityAttribute"])(customerInfo.customer_id, "customer");
                        const attributes = res?._attributeReturnModel?.attributes || [];
                        let status = "Cancelled";
                        const declining = attributes.some({
                            "OrderDetails.useEffect.getStatus.declining": (attr)=>{
                                return attr.name === "DecliningCancel";
                            }
                        }["OrderDetails.useEffect.getStatus.declining"]);
                        if (declining) {
                            status = "Declining Cancel";
                        } else {
                            const paused = attributes.some({
                                "OrderDetails.useEffect.getStatus.paused": (attr)=>{
                                    return attr.name === "Membership Paused";
                                }
                            }["OrderDetails.useEffect.getStatus.paused"]);
                            if (paused) {
                                status = "Paused";
                            } else {}
                        }
                        setAccountStatus(status);
                    } catch (err) {
                        setAccountStatus("Cancelled");
                    }
                }
            }["OrderDetails.useEffect.getStatus"];
            getStatus();
        }
    }["OrderDetails.useEffect"], [
        customerInfo?.customer_id
    ]);
    // this function get all banjo user list
    const getAllUserList = async (token)=>{
        const list = [];
        const resp = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$order$2f$services$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getAllBanjoUSer"])(token);
        if (resp && resp.success) {
            resp?.response?.forEach((item)=>{
                list.push({
                    userName: item?.user_name,
                    userId: item?.userid,
                    color: item?.claim_color,
                    type: "user",
                    active_user: item?.active_user,
                    user_roles: item?.user_roles
                });
            });
        }
        return list;
    };
    const fetchAllBanjoUsers = async ()=>{
        const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
        const banjoUserResponse = await getAllUserList({
            token
        });
        if ("TURBOPACK compile-time truthy", 1) {
            setAllBanjoUserList(banjoUserResponse || []);
        }
    };
    let banjoStatusChange = banjoUser?.banjoUser?.status_change;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            printLabelStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$helmet$2f$es$2f$Helmet$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Helmet"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                        async: true,
                        id: "jqueryurlScript",
                        src: dymoUrl,
                        type: "text/javascript"
                    }, void 0, false, {
                        fileName: "[project]/components/layouts/orders/orderDetails.js",
                        lineNumber: 2312,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                    lineNumber: 2311,
                    columnNumber: 11
                }, this)
            }, void 0, false),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Container"], {
                fluid: true,
                className: "px-0",
                children: [
                    Object.keys(itemChangeAlert).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Alert"], {
                        className: "text-center",
                        color: 'success',
                        children: itemChangeAlert.msg
                    }, void 0, false, {
                        fileName: "[project]/components/layouts/orders/orderDetails.js",
                        lineNumber: 2318,
                        columnNumber: 53
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Row"], {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].order_details_row} mx-3`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Col"], {
                                    md: 12,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Container"], {
                                        fluid: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].detials_row} d-flex pt-3 bg-white`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `d-flex flex-column pe-3 ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].custom_col}`,
                                                    children: [
                                                        finalSaleOrder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-danger fs-3",
                                                            children: "Final Sale Order"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                            lineNumber: 2325,
                                                            columnNumber: 40
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "d-flex",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].pointer} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].star_box} cursor-pointer me-2 mt-2`,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: `fa-star ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].starOrder} ` + (starOrderInfo ? `fas` : `far`),
                                                                        style: {
                                                                            color: '#ff9800',
                                                                            fontSize: '16px'
                                                                        },
                                                                        onClick: ()=>openPopups(starOrderInfo ? "removestarorderpopup" : "starorderpopup")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                        lineNumber: 2328,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                    lineNumber: 2327,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].text_semibold} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].font_16} p-0 d-flex align-items-center`,
                                                                            style: {
                                                                                fontWeight: '500',
                                                                                fontSize: '16px'
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].order_text} me-1`,
                                                                                    children: "Order"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2332,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                    children: [
                                                                                        Object.keys(orderTipObj).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                                                            target: "orderTip",
                                                                                            placement: "right",
                                                                                            isOpen: orderTooltip,
                                                                                            toggle: ()=>setOrderTooltip(!orderTooltip),
                                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].order_detail_tooltip,
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "p-2",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                        className: "mb-0",
                                                                                                        children: [
                                                                                                            "Our total Cost: $",
                                                                                                            orderTipObj?.totalPrice?.toFixed(2)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                                        lineNumber: 2336,
                                                                                                        columnNumber: 33
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                        className: "mb-0",
                                                                                                        children: [
                                                                                                            "Customer price after discounts: $",
                                                                                                            orderTipObj?.totalPriceAfterDiscount?.toFixed(2)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                                        lineNumber: 2337,
                                                                                                        columnNumber: 33
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                                lineNumber: 2335,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                            lineNumber: 2334,
                                                                                            columnNumber: 69
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                            id: 'orderTip',
                                                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].od_num} text-decoration-none me-1 ${compType == 'basic_customer_info' ? 'poniter-events-none' : ''}`,
                                                                                            style: {
                                                                                                fontSize: "15px",
                                                                                                color: "#1e88e5"
                                                                                            },
                                                                                            href: `/orderdetails/${orderDetails.ordername?.replace('#', '')}`,
                                                                                            children: [
                                                                                                orderDetails.ordername,
                                                                                                " "
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                            lineNumber: 2340,
                                                                                            columnNumber: 29
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].order_tag} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"][props.orderTag()]} me-1`,
                                                                                    style: {
                                                                                        color: '008000',
                                                                                        fontWeight: '600'
                                                                                    },
                                                                                    children: props.orderTag()
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2342,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                orderDetails && orderDetails.created_at && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].font_13} text-low`,
                                                                                    style: {
                                                                                        fontSize: "13px"
                                                                                    },
                                                                                    children: [
                                                                                        "(",
                                                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["processDate"])(orderDetails.created_at, 'M/D/YY [at] h:mma'),
                                                                                        ")"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2344,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    id: "birthTip",
                                                                                    className: "ms-1 fs-6",
                                                                                    style: {
                                                                                        color: '#FF9BDA'
                                                                                    },
                                                                                    children: checkBirthday ? birthday() : ''
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2348,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                                                    target: "birthTip",
                                                                                    placement: "right",
                                                                                    isOpen: bithdayTooltip,
                                                                                    toggle: ()=>setBithdayTooltip(!bithdayTooltip),
                                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].order_detail_tooltip,
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "p-2",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "mb-0",
                                                                                                children: "Birthday"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                                lineNumber: 2351,
                                                                                                columnNumber: 31
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "mb-0",
                                                                                                children: [
                                                                                                    "on ",
                                                                                                    birthYear.date
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                                lineNumber: 2352,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                        lineNumber: 2350,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2349,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                            lineNumber: 2331,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        fetchedItemsCount() !== countUnfulfilledItems() || fetchedItemsCount() == countUnfulfilledItems() && checkOrderStatus() == '0' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                            children: [
                                                                                orderDetails?.items && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].text_semibold} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].label} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].fetch_text}`,
                                                                                    style: {
                                                                                        color: "#ffa500",
                                                                                        fontWeight: '500'
                                                                                    },
                                                                                    children: [
                                                                                        fetchedItemsCount() + " of " + countUnfulfilledItems() + (countUnfulfilledItems() > 1 ? ' items' : ' item') + " fetched",
                                                                                        " "
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2359,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                orderDetails?.items && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].text_semibold} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].label} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].fetch_text}`,
                                                                                    style: {
                                                                                        color: "#ffa500",
                                                                                        fontWeight: '500'
                                                                                    },
                                                                                    children: [
                                                                                        " ",
                                                                                        readyItemsCount() + " of " + countUnfulfilledItems() + (countUnfulfilledItems() > 1 ? ' items' : ' item') + " ready",
                                                                                        " "
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2364,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                checkOrderStatus() == '0' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].text_semibold} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].label} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].tranfer_text}`,
                                                                                    style: {
                                                                                        color: "#d053f2",
                                                                                        fontWeight: '500'
                                                                                    },
                                                                                    children: [
                                                                                        " ",
                                                                                        countTransferedItems() > 0 && `${countTransferedItems()} ${countTransferedItems() > 1 ? 'items' : 'item'} transferred`
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2366,
                                                                                    columnNumber: 59
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].text_semibold} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].label} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].fetch_text}`,
                                                                            style: {
                                                                                color: "#ffa500",
                                                                                fontWeight: '500'
                                                                            },
                                                                            children: orderDetails?.items?.length + ' ' + (orderDetails?.items?.length > 1 ? 'Items' : 'Item')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                            lineNumber: 2369,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        customerInfo?.order_processor_notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "mb-0 mt-3 d-flex",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "bg-light text-nowrap",
                                                                                    children: "Order Processor Notes:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2373,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "ms-1",
                                                                                    title: customerInfo?.order_processor_notes,
                                                                                    style: {
                                                                                        backgroundColor: "#FF9800",
                                                                                        textOverflow: 'ellipsis',
                                                                                        maxWidth: '270px',
                                                                                        whiteSpace: 'nowrap',
                                                                                        overflow: 'hidden'
                                                                                    },
                                                                                    children: customerInfo?.order_processor_notes
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2374,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                            lineNumber: 2372,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        (orderDetails?.ordernotes || holdOrderNotes?.holdnotes) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "mb-0 mt-3",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "bg-light",
                                                                                    children: "Order Notes:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2379,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "ms-1 bg_orange",
                                                                                    children: [
                                                                                        orderDetails?.ordernotes ? orderDetails?.ordernotes : "",
                                                                                        "  ",
                                                                                        holdOrderNotes?.holdnotes ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                            children: [
                                                                                                " ",
                                                                                                orderDetails?.ordernotes ? ',' : "",
                                                                                                " ",
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                                                    children: [
                                                                                                        " ",
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                            children: [
                                                                                                                " ",
                                                                                                                holdOrderNotes.holdnotes?.toUpperCase(),
                                                                                                                " "
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                                            lineNumber: 2380,
                                                                                                            columnNumber: 197
                                                                                                        }, this),
                                                                                                        " "
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                                    lineNumber: 2380,
                                                                                                    columnNumber: 193
                                                                                                }, this),
                                                                                                " "
                                                                                            ]
                                                                                        }, void 0, true) : "",
                                                                                        " "
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2380,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                            lineNumber: 2378,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        holdOrderNotes?.holdnotes ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "mb-0 mt-3",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "bg-light",
                                                                                    children: "On Hold Notes:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2385,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "ms-1",
                                                                                    style: {
                                                                                        backgroundColor: '#F69295'
                                                                                    },
                                                                                    children: [
                                                                                        "on hold by ",
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                                            children: [
                                                                                                holdOrderNotes.holded_by,
                                                                                                ": ",
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    style: {
                                                                                                        fontStyle: "italic"
                                                                                                    },
                                                                                                    children: [
                                                                                                        "Promised Delivery: ",
                                                                                                        delivery_date,
                                                                                                        ":",
                                                                                                        holdOrderNotes.holdnotes.toUpperCase(),
                                                                                                        " "
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                                    lineNumber: 2386,
                                                                                                    columnNumber: 133
                                                                                                }, this),
                                                                                                " "
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                            lineNumber: 2386,
                                                                                            columnNumber: 102
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2386,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                            lineNumber: 2384,
                                                                            columnNumber: 27
                                                                        }, this) : "",
                                                                        starOrderInfo != null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "mb-0 mt-3",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "bg-light",
                                                                                    children: " Star Notes: "
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2397,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "ms-1 bg_orange",
                                                                                    children: [
                                                                                        starOrderInfo?.starnotes,
                                                                                        " "
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2398,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                            lineNumber: 2396,
                                                                            columnNumber: 27
                                                                        }, this) : ""
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                    lineNumber: 2330,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                            lineNumber: 2326,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                    lineNumber: 2324,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].name} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].font_13} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].custom_col}`,
                                                    style: {
                                                        fontSize: '13px'
                                                    },
                                                    children: [
                                                        customerInfo?.tags?.includes('plan_name') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                            target: "customerNameTooltip",
                                                            placement: "right",
                                                            isOpen: customerNameTooltip,
                                                            toggle: ()=>setCustomerNameTooltip(!customerNameTooltip),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].tooltip} d-flex flex-column gap-3 p-3`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            "Age: ",
                                                                            parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])().unix()).format('YYYY') - parseInt(birthYear.year))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                        lineNumber: 2409,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            "Height: ",
                                                                            customerInfo.customer_info?.height_ft,
                                                                            "-",
                                                                            customerInfo.customer_info?.height_in
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                        lineNumber: 2410,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            "Weight: ",
                                                                            customerInfo.customer_info?.weight,
                                                                            " lbs"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                        lineNumber: 2411,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            "Dress: ",
                                                                            customerInfo.customer_info?.dress_size
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                        lineNumber: 2412,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            "Shirt & Top: ",
                                                                            customerInfo.customer_info?.top_size
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                        lineNumber: 2413,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            "Bra: ",
                                                                            customerInfo.customer_info?.bra_size?.replace('-', '')
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                        lineNumber: 2414,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            "Jeans: ",
                                                                            customerInfo.customer_info?.jeans_size
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                        lineNumber: 2415,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    stylist !== '' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            "Stylist: ",
                                                                            stylist
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                        lineNumber: 2416,
                                                                        columnNumber: 44
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                lineNumber: 2408,
                                                                columnNumber: 22
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                            lineNumber: 2407,
                                                            columnNumber: 67
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                            id: "customerNameTooltip",
                                                            className: `fw-bold ${compType == 'basic_customer_info' ? 'poniter-events-none' : ''}`,
                                                            href: `/customerdetails?email=${customerInfo?.email}`,
                                                            children: customerInfo?.first_name + ' ' + customerInfo?.last_name
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                            lineNumber: 2419,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                " (",
                                                                addressDetail?.city,
                                                                ", ",
                                                                addressDetail?.state,
                                                                ")",
                                                                " "
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                            lineNumber: 2420,
                                                            columnNumber: 21
                                                        }, this),
                                                        customerInfo?.tags?.includes('Paused') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-danger fw-bold",
                                                            children: accountStatus
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                            lineNumber: 2422,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "d-flex",
                                                            children: [
                                                                showFavBtn && compType != 'basic_customer_info' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "btn btn-light border me-2",
                                                                    onClick: ()=>window.open(`/favorites?customer_id=${customerInfo?.customer_id}`, "_blank"),
                                                                    children: "Favorites"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                    lineNumber: 2425,
                                                                    columnNumber: 75
                                                                }, this),
                                                                customerAllOrderArr?.length,
                                                                " ",
                                                                customerAllOrderArr?.length == 1 ? "order" : "orders",
                                                                " ",
                                                                orderDetails.current_plan == null && !customerInfo?.tags?.includes('Paused') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-danger fw-bold ms-1",
                                                                    children: "NOT SUBSCRIBED"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                    lineNumber: 2428,
                                                                    columnNumber: 106
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                            lineNumber: 2424,
                                                            columnNumber: 22
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                    lineNumber: 2406,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].custom_col} ps-4`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].text_semibold} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].font_16}`,
                                                            style: {
                                                                fontWeight: '500',
                                                                fontSize: '16px'
                                                            },
                                                            children: [
                                                                "Status:",
                                                                checkOrderStatus() == '1' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `text-success ms-1`,
                                                                    children: "Fulfilled"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                    lineNumber: 2435,
                                                                    columnNumber: 25
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `text-danger ms-1`,
                                                                    children: "Unfulfilled"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                    lineNumber: 2437,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                            lineNumber: 2432,
                                                            columnNumber: 21
                                                        }, this),
                                                        customerInfo?.carrier_options && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                            className: "text-danger",
                                                            children: [
                                                                "NEVER use ",
                                                                customerInfo?.carrier_options?.replaceAll(',', ', ')
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                            lineNumber: 2440,
                                                            columnNumber: 55
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                    lineNumber: 2431,
                                                    columnNumber: 19
                                                }, this),
                                                checkOrderStatus() == '1' && orderDetails?.order_type?.includes('FP') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        orderDetails.checked_in == '0' && cardError == '' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "d-flex flex-column align-items-start",
                                                            children: [
                                                                checkInLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Spinner"], {}, void 0, false, {
                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                    lineNumber: 2447,
                                                                    columnNumber: 45
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: `btn ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].btn_checkin} text-white`,
                                                                    style: {
                                                                        backgroundColor: '#ff9800'
                                                                    },
                                                                    onClick: ()=>{
                                                                        handleCheckIn();
                                                                    },
                                                                    children: "Check In"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                    lineNumber: 2447,
                                                                    columnNumber: 59
                                                                }, this),
                                                                customerInfo.card_status !== '' && customerInfo?.card_status?.toLowerCase()?.indexOf('good') == -1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-danger fw-bold",
                                                                    children: customerInfo.card_status
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                    lineNumber: 2448,
                                                                    columnNumber: 132
                                                                }, this),
                                                                props.checkinEstimatedTime != null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].checkin_time_text} fw-bold text-center mb-0`,
                                                                    style: {
                                                                        fontSize: '12px',
                                                                        lineHeight: '1.4',
                                                                        marginTop: "2px"
                                                                    },
                                                                    children: [
                                                                        "CHECK-IN TIME ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                            lineNumber: 2449,
                                                                            columnNumber: 207
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(props.checkinEstimatedTime).utc().format('M/D hA [PST]')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                            lineNumber: 2449,
                                                                            columnNumber: 213
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                    lineNumber: 2449,
                                                                    columnNumber: 65
                                                                }, this) : ''
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                            lineNumber: 2446,
                                                            columnNumber: 25
                                                        }, this),
                                                        cardError !== '' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Alert"], {
                                                            color: "danger",
                                                            children: cardError
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                            lineNumber: 2452,
                                                            columnNumber: 44
                                                        }, this),
                                                        orderDetails.checked_in == '1' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: checkInLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Spinner"], {}, void 0, false, {
                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                lineNumber: 2454,
                                                                columnNumber: 45
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: `btn ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].btn_checkedin} text-white`,
                                                                style: {
                                                                    backgroundColor: '#4caf50'
                                                                },
                                                                onClick: ()=>{
                                                                    handleCheckedIn();
                                                                },
                                                                children: "Checked In"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                lineNumber: 2454,
                                                                columnNumber: 59
                                                            }, this)
                                                        }, void 0, false)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                    lineNumber: 2444,
                                                    columnNumber: 21
                                                }, this),
                                                newInvoice?.length > 0 && compType != 'basic_customer_info' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `d-flex flex-column ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].invoice_box}`,
                                                    style: {
                                                        height: 'max-content',
                                                        maxHeight: '60px',
                                                        overflowY: 'auto'
                                                    },
                                                    children: newInvoice?.map((item, key)=>{
                                                        let firstAugTime = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(1690848000).utc();
                                                        let orderDate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(OrderDetail?.created_at).utc();
                                                        let isNew = orderDate?.startOf('day').isAfter(firstAugTime.startOf('day'));
                                                        let isSame = orderDate?.startOf('day').isSame(firstAugTime.startOf('day'));
                                                        if (item.sale_type == 'Sale' && !isNew && !isSame) return;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                window?.open(`/invoice/${item.invoice_id}`, '_blank');
                                                            },
                                                            className: `btn btn-${item.sale_type == 'FP' ? 'info' : 'warning'} text-white mb-1`,
                                                            children: `${item.sale_type == 'FP' ? 'MIR' : 'Website'} Sale Invoice #` + item.invoice_id
                                                        }, 'newInvoice_' + key, false, {
                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                            lineNumber: 2467,
                                                            columnNumber: 27
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                    lineNumber: 2459,
                                                    columnNumber: 21
                                                }, this),
                                                invoiceBtn && orderDetails?.order_type?.includes('FP') && compType != 'basic_customer_info' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "btn btn-danger",
                                                    onClick: ()=>{
                                                        window?.open(`/createinvoice/${orderDetails?.orderid}`, '_blank');
                                                    },
                                                    children: "Sell Item"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                    lineNumber: 2472,
                                                    columnNumber: 117
                                                }, this),
                                                compType != 'basic_customer_info' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].custom_col} d-flex`,
                                                    children: [
                                                        orderDetails.order_type !== 'Sale' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].add_item}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                onClick: ()=>{
                                                                    openPopups("additempopup");
                                                                },
                                                                color: "light",
                                                                className: `btn add-item border me-3`,
                                                                children: "Add an item"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                lineNumber: 2475,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                            lineNumber: 2474,
                                                            columnNumber: 60
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            id: "fetchItemBtn",
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].custom_col} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].fetch_order}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    color: "warning",
                                                                    disabled: fetchDisable,
                                                                    className: `btn ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].bg_orange} text-white`,
                                                                    style: {
                                                                        backgroundColor: '#ffa500'
                                                                    },
                                                                    onClick: ()=>{
                                                                        window.open(`/conveyor/controller?orderid=${orderDetails.orderid}`, "_blank");
                                                                    },
                                                                    children: "Fetch this order"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                    lineNumber: 2478,
                                                                    columnNumber: 23
                                                                }, this),
                                                                fetchTooltipText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                                    placement: "right",
                                                                    autohide: false,
                                                                    isOpen: fetchTooltip,
                                                                    target: 'fetchItemBtn',
                                                                    toggle: ()=>setFetchTooltip(!fetchTooltip),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                        children: [
                                                                            "Conveyor Session Currently Active - Please wait until Session is completed. ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                href: "/conveyor/controller",
                                                                                children: "Click here"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                lineNumber: 2480,
                                                                                columnNumber: 104
                                                                            }, this),
                                                                            " to view the session"
                                                                        ]
                                                                    }, void 0, true)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                    lineNumber: 2479,
                                                                    columnNumber: 44
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                            lineNumber: 2477,
                                                            columnNumber: 22
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                    lineNumber: 2473,
                                                    columnNumber: 58
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].custom_col} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].hold} d-flex justify-content-between`,
                                                    children: [
                                                        compType != 'basic_customer_info' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                color: orderDetails?.holder_name ? "danger" : "light",
                                                                onClick: ()=>{
                                                                    openPopups(orderDetails?.holder_name ? banjoUser.banjoUser.level !== 'LOW' && "removeorderonholdpopup" : "orderonholdpopup");
                                                                },
                                                                className: `btn add-item border me-3`,
                                                                children: orderDetails?.holder_name ? "Order is on hold" : "Put On Hold"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                lineNumber: 2487,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                            lineNumber: 2486,
                                                            columnNumber: 60
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `tag d-flex flex-column align-items-center`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].text_semibold} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].text_size_large}`,
                                                                    children: orderTypeLabel(orderDetails.order_type)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                    lineNumber: 2494,
                                                                    columnNumber: 23
                                                                }, this),
                                                                orderDetails.holder_name == null || orderDetails.holder_name == '' ? orderDetails?.claimer_id == 0 && orderDetails?.rack_number == 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-center",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                        onClick: ()=>{
                                                                            disabledBtnId != 1 ? addToClaimOrder() : {};
                                                                        },
                                                                        className: "text-primary showcursor",
                                                                        children: "Claim"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                        lineNumber: 2498,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                    lineNumber: 2497,
                                                                    columnNumber: 27
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        orderDetails?.claimer_id > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].claimbox}`,
                                                                            style: {
                                                                                backgroundColor: claimColor ? claimColor : banjoUser?.banjoUser?.claim_color
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].claimerName} w-100 text-center`,
                                                                                    style: {
                                                                                        float: 'left',
                                                                                        fontSize: '18px',
                                                                                        paddingRight: '10px',
                                                                                        paddingLeft: '5px'
                                                                                    },
                                                                                    children: orderDetails.claimer_name?.trim()?.split(' ')[0]
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2505,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    onClick: ()=>{
                                                                                        removeFromClaimOrder();
                                                                                    },
                                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].removeClaim} position-absolute d-flex cursor-pointer`,
                                                                                    style: {
                                                                                        right: '3px',
                                                                                        float: 'right',
                                                                                        width: '10%',
                                                                                        fontSize: '13px'
                                                                                    },
                                                                                    children: "×"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2506,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                            lineNumber: 2503,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        orderDetails?.claimer_id == 0 && orderDetails?.rack_number > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].claimbox}`,
                                                                            style: {
                                                                                backgroundColor: 'bg-danger'
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].claimerName}`,
                                                                                    children: [
                                                                                        "R#",
                                                                                        orderDetails?.rack_number
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2511,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    onClick: ()=>{
                                                                                        removeFromClaimOrder('rack');
                                                                                    },
                                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].removeClaim}`,
                                                                                    children: "×"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2512,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                            lineNumber: 2510,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].claimbox}`,
                                                                    style: {
                                                                        backgroundColor: holdTypes == "mc_hold" ? "#EA7AF1" : holdTypes == "ops_hold" ? "#0018F9" : holdTypes == "declining_hold" ? "#FFF700" : holdTypes == "fraud_hold" ? "#FF0000" : holdTypes == "after_ready_hold" ? "#FFAB40" : holdTypes == "op_notes_hold" ? "#4DA802" : holdTypes == "cant_find_hold" ? "#4A2C07" : "#F56B4D",
                                                                        color: holdTypes == "declining_hold" && "black",
                                                                        color: holdTypes == "declining_hold" ? "black" : "white"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].claimerName} w-100 text-center`,
                                                                            style: {
                                                                                float: 'left',
                                                                                fontSize: '18px',
                                                                                paddingRight: '10px',
                                                                                paddingLeft: '5px',
                                                                                fontSize: holdTypes == "after_ready_hold" && "small"
                                                                            },
                                                                            children: holdTypes == "mc_hold" ? "MC HOLD" : holdTypes == "ops_hold" ? "OPS HOLD" : holdTypes == "declining_hold" ? "Declining" : holdTypes == "fraud_hold" ? "FRAUD HOLD" : holdTypes == "after_ready_hold" ? "AFTER READY HOLD" : holdTypes == "op_notes_hold" ? "OP NOTES HOLD" : holdTypes == "cant_find_hold" ? "CANT FIND" : "ON HOLD"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                            lineNumber: 2521,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            onClick: ()=>{
                                                                                if (orderDetails?.holder_name && banjoUser.banjoUser.level !== 'LOW') {
                                                                                    openPopups("removeorderonholdpopup");
                                                                                }
                                                                            },
                                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].removeClaim} position-absolute d-flex cursor-pointer`,
                                                                            style: {
                                                                                right: '3px',
                                                                                float: 'right',
                                                                                width: '10%',
                                                                                fontSize: '13px'
                                                                            },
                                                                            children: "×"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                            lineNumber: 2523,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                    lineNumber: 2518,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                            lineNumber: 2493,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                    lineNumber: 2485,
                                                    columnNumber: 20
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                            lineNumber: 2323,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/layouts/orders/orderDetails.js",
                                        lineNumber: 2322,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                    lineNumber: 2321,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: ``,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].table_container}table table-responsive responsive-stack`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            compType != 'basic_customer_info' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                style: {
                                                                    width: '5%'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                lineNumber: 2541,
                                                                columnNumber: 60
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                style: {
                                                                    width: '20%'
                                                                },
                                                                children: "Item:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                lineNumber: 2542,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                style: {
                                                                    width: '5%'
                                                                },
                                                                children: "Type:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                lineNumber: 2543,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                style: {
                                                                    width: '5%'
                                                                },
                                                                children: "Price:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                lineNumber: 2544,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                style: {
                                                                    width: '15%'
                                                                },
                                                                children: "SKU:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                lineNumber: 2545,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                style: {
                                                                    width: '10%'
                                                                },
                                                                children: "Barcode:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                lineNumber: 2546,
                                                                columnNumber: 21
                                                            }, this),
                                                            checkOrderStatus() == '1' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                style: {
                                                                    width: '20%'
                                                                },
                                                                children: "Notes:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                lineNumber: 2547,
                                                                columnNumber: 51
                                                            }, this),
                                                            compType != 'basic_customer_info' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                style: {
                                                                    width: '20%'
                                                                },
                                                                children: "Current Status:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                lineNumber: 2548,
                                                                columnNumber: 61
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                        lineNumber: 2540,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                    lineNumber: 2539,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    children: orderItems?.map((item, index)=>{
                                                        let item_type_text = checkItemType(item);
                                                        let hideItem = false;
                                                        let transferFromPrevOrder = false;
                                                        let transferToNextOrder = false;
                                                        let movedFromPrevOrder = false;
                                                        let movedToNextOrder = false;
                                                        let AddedItemAfterShipment = checkForAddedItemShipmentBadge(item.id);
                                                        let transferCancelled = false;
                                                        // console.log('aaaa', checkOrderStatus(), transferTo)
                                                        if (checkOrderStatus() == '0' && transferTo) {
                                                            if (item.tags) {
                                                                let itemTags = item.tags?.split(',');
                                                                let transferfromId = itemTags.filter((tag)=>tag?.includes('transferfrom'));
                                                                if (transferfromId[0]?.split(':')[1] != orderId) {
                                                                    hideItem = item.tags?.includes(`transferto:${orderDetails?.orderid}`);
                                                                }
                                                            }
                                                        }
                                                        let allowForAnyTransferCondition = false;
                                                        let transferConditionStatus = -1;
                                                        const transferNotAllowedStatusIds = [
                                                            1,
                                                            2,
                                                            4,
                                                            6,
                                                            7
                                                        ];
                                                        const barcodeStatusId = Number(item?.barcode?.statusid);
                                                        const canShowTransferByStatus = !transferNotAllowedStatusIds.includes(barcodeStatusId);
                                                        // if (item.tags) {
                                                        let itemTags = item?.tags ? item?.tags?.split(',') : [];
                                                        let transferfromId = itemTags.filter((tag)=>tag?.includes('transferfrom'));
                                                        let nextTransferfromId = itemTags.filter((tag)=>tag?.includes('nexttransferfrom'));
                                                        let movedFromOrderId = itemTags.filter((tag)=>tag?.includes('Moved_from'));
                                                        let movedToNextOrderId = itemTags.filter((tag)=>tag?.includes('Moved_to'));
                                                        if (transferfromId[0]?.split(':')[1] != undefined && transferfromId[0]?.split(':')[1] != orderId) {
                                                            transferFromPrevOrder = true;
                                                        }
                                                        if (transferfromId[0]?.split(':')[1] != undefined && transferfromId[0]?.split(':')[1] == orderId || nextTransferfromId[0]?.split(':')[1] != undefined && nextTransferfromId[0]?.split(':')[1] == orderId) {
                                                            transferToNextOrder = true;
                                                        }
                                                        if (movedFromOrderId[0]?.split(':')[1] != undefined && movedFromOrderId[0]?.split(':')[1] == orderId) {
                                                            movedToNextOrder = true;
                                                        }
                                                        if (movedToNextOrderId[0]?.split(':')[1] != undefined && movedToNextOrderId[0]?.split(':')[1] == orderId) {
                                                            movedFromPrevOrder = true;
                                                        }
                                                        if (itemTags?.includes('TransferToMIR') || itemTags?.includes('RemoveTransferDueToPaused')) {
                                                            transferCancelled = true;
                                                        }
                                                        let barcodeOrderNum = Number(item?.barcode?.lastordernumber) - 1000;
                                                        const isTransferItem = itemTags?.some((tag)=>tag?.toLowerCase()?.includes('transfer'));
                                                        const highlightMovedWithCustomer = barcodeStatusId === 8 && barcodeOrderNum && barcodeOrderNum !== Number(orderId) && !transferToNextOrder;
                                                        // bmw
                                                        let TransferInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$TransferFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["checkForTransferItem"])(orderDetails, orderItems);
                                                        // console.log("orderDetails", orderDetails)
                                                        // console.log("orderItems", orderItems)
                                                        let isTransferAllow = TransferInfo.isTransferItemAvailable == true && (TransferInfo.isClothingTransferAllow && item.product.product_catagory == 1 || TransferInfo.isAccessoryTransferAllow && item.product.product_catagory != 1);
                                                        //  console.log("isTransferAllow sarang", isTransferAllow, TransferInfo) 
                                                        // console.log("barcodeOrderNum",  barcodeOrderNum == orderId, item?.barcode ) 
                                                        // console.log("canShowTransferByStatus", canShowTransferByStatus) 
                                                        if (barcodeOrderNum == orderId && item.type.indexOf('Sale') == -1 && canShowTransferByStatus && !OrderDetail?.order_tags?.includes('do_not_count_order')) {
                                                            allowForAnyTransferCondition = true;
                                                            let isTransferTagFound = itemTags.filter((tag)=>tag?.includes('transfer'));
                                                            const hasNextOrderPlaced = Array.isArray(nextOrderPlacedData) && nextOrderPlacedData.length > 0;
                                                            if (barcodeStatusId === 13) {
                                                                transferConditionStatus = 4;
                                                            }
                                                            // if (barcodeStatusId === 10 && hasNextOrderPlaced) {
                                                            //   transferConditionStatus = 3
                                                            // }
                                                            // else if (barcodeStatusId === 10 && !hasNextOrderPlaced) {
                                                            //   //  transferConditionStatus = -1
                                                            // }
                                                            // else 
                                                            if ((isTransferTagFound?.length == 0 || transferFromPrevOrder) && !transferToNextOrder && barcodeStatusId != 13 && isTransferAllow) {
                                                                transferConditionStatus = 1;
                                                                if (barcodeStatusId === 10 && hasNextOrderPlaced) {
                                                                    transferConditionStatus = 3;
                                                                }
                                                            } else if (transferToNextOrder && barcodeStatusId != 13) {
                                                                transferConditionStatus = 2;
                                                            }
                                                        }
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            style: {
                                                                backgroundColor: item?.bg_color && Object?.keys(OrderItemsAfterFulfil)?.length > 0 ? item?.bg_color : ""
                                                            },
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].tr_order_item_maping} ${hideItem ? 'd-none' : ''}`,
                                                            children: [
                                                                compType != 'basic_customer_info' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    "data-label": "",
                                                                    style: {
                                                                        width: "5%"
                                                                    },
                                                                    children: item.product_Images && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].pointer}`,
                                                                        onClick: ()=>{
                                                                            setToggleSlider(!toggleSlider);
                                                                            setSliderUrl(item.product_Images[0]?.product_image_url + "?profile=b");
                                                                        },
                                                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].productImageUrl + "products/" + item.product_Images[0]?.product_image_url + "?profile=c",
                                                                        style: {
                                                                            height: "140px"
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                        lineNumber: 2668,
                                                                        columnNumber: 51
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                    lineNumber: 2667,
                                                                    columnNumber: 64
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    "data-label": "Item",
                                                                    style: {
                                                                        width: "20%"
                                                                    },
                                                                    children: compType != 'basic_customer_info' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: `mb-0`,
                                                                                children: item.product?.product_title
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                lineNumber: 2674,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: `mb-0 text-uppercase`,
                                                                                children: item.sku.vendor
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                lineNumber: 2675,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                children: [
                                                                                    "Size: ",
                                                                                    item.sku.size
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                lineNumber: 2676,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                children: [
                                                                                    "Color: ",
                                                                                    item.sku.color
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                lineNumber: 2677,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "d-flex",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    width: '160px',
                                                                                    marginRight: '10px'
                                                                                },
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].pointer}`,
                                                                                    onClick: ()=>{
                                                                                        setToggleSlider(!toggleSlider);
                                                                                        setSliderUrl(item.product_Images[0]?.product_image_url + "?profile=b");
                                                                                    },
                                                                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].productImageUrl + "products/" + item.product_Images[0]?.product_image_url + "?profile=c",
                                                                                    style: {
                                                                                        height: "140px"
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2682,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                lineNumber: 2681,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: `mb-0`,
                                                                                        children: item.product?.product_title
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                        lineNumber: 2685,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: `mb-0 text-uppercase`,
                                                                                        children: item.sku.vendor
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                        lineNumber: 2686,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        children: [
                                                                                            "Size: ",
                                                                                            item.sku.size
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                        lineNumber: 2687,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        children: [
                                                                                            "Color: ",
                                                                                            item.sku.color
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                        lineNumber: 2688,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                lineNumber: 2684,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                        lineNumber: 2680,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                    lineNumber: 2670,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    "data-label": "Type",
                                                                    style: {
                                                                        width: "5%"
                                                                    },
                                                                    children: item.type
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                    lineNumber: 2695,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    "data-label": "Price",
                                                                    style: {
                                                                        width: "5%"
                                                                    },
                                                                    children: item.type == 'FashionPass' ? 'Free' : '$' + item.sku?.retail.toFixed(2)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                    lineNumber: 2696,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    "data-label": "SKU",
                                                                    style: {
                                                                        width: "12%"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "d-flex align-items-center",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                                                    target: 'sku_' + item.id,
                                                                                    placement: "right",
                                                                                    isOpen: barcodeNumberTooltip[item.id] == undefined ? false : barcodeNumberTooltip[item.id],
                                                                                    toggle: ()=>handleToolTip(item.id, 'sku'),
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].tooltip,
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                children: [
                                                                                                    "Cost: $",
                                                                                                    item.sku?.price.toFixed(2)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                                lineNumber: 2701,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                children: [
                                                                                                    "Retial: $",
                                                                                                    item.sku?.retail.toFixed(2)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                                lineNumber: 2702,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                children: [
                                                                                                    "Price: $",
                                                                                                    (item.sku?.retail - item.sku?.retail * (item.sku?.discount / 100)).toFixed(2),
                                                                                                    " (after ",
                                                                                                    item.sku?.discount,
                                                                                                    "% discount)"
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                                lineNumber: 2703,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                        lineNumber: 2700,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2699,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    id: 'sku_' + item.id,
                                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].hoverprice} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].pointer} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].mobile_sku} ${compType == 'basic_customer_info' ? 'poniter-events-none' : ''}`,
                                                                                    href: `/sku/${item.sku?.sku}`,
                                                                                    children: item.sku?.sku
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2706,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].new_sku} mx-1 ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].pointer}`,
                                                                                    onClick: ()=>{
                                                                                        handleSkuChange(item);
                                                                                    },
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["faRotate"]
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                        lineNumber: 2708,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2707,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].sku_delete} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].pointer}`,
                                                                                    onClick: ()=>handleRemoveItem(item.id, item.barcode, item.sku, index, orderId),
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["faTrashCan"]
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                        lineNumber: 2711,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2710,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                (item.fetch_ready_time > 0 && item?.barcodeid == 0 && item.folded_barcode !== 0 && item.item_fetched == 0 || item.fetch_ready_time > 0 && item.item_fetched == 1 && !calcTimeDiff(item.fetch_ready_time, item.tags.includes("fetched_from_missing") ? graceTimeRent : item.type == 'FashionPass' ? flagTimeRent : flagTimeSale)) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "ms-1",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                                                            target: 'thumb_' + item.id,
                                                                                            placement: "right",
                                                                                            isOpen: thumbsUpTooltip[item.id] == undefined ? false : thumbsUpTooltip[item.id],
                                                                                            toggle: ()=>handleToolTip(item.id, 'thumb'),
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].tooltip,
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        children: [
                                                                                                            item.fetched_by,
                                                                                                            " ",
                                                                                                            item.activity_note?.includes('missing') ? 'found missing item' : 'fetched',
                                                                                                            " ",
                                                                                                            item?.folded_barcode,
                                                                                                            " at ",
                                                                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(item?.fetch_ready_time).utc().format("h:mma [on] ddd M/DD/YYYY")
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                                        lineNumber: 2716,
                                                                                                        columnNumber: 35
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        children: item.tags.includes("fetched_from_missing") ? `Missing Item Fetch Grace Time is set to ${graceTimeRent} minutes` : `Marked ready with ${item.type == 'FashionPass' ? flagTimeRent : flagTimeSale} min timer`
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                                        lineNumber: 2717,
                                                                                                        columnNumber: 35
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                                lineNumber: 2715,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                            lineNumber: 2714,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].pointer}`,
                                                                                            id: 'thumb_' + item.id,
                                                                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["faThumbsUp"],
                                                                                            color: item.tags.includes("fetched_from_missing") ? "#F7D051" : 'orange'
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                            lineNumber: 2720,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2713,
                                                                                    columnNumber: 360
                                                                                }, this),
                                                                                item.fetch_ready_time > 0 && item.item_fetched == 1 && calcTimeDiff(item.fetch_ready_time, item.tags.includes("fetched_from_missing") ? graceTimeRent : item.type == 'FashionPass' ? flagTimeRent : flagTimeSale) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "mx-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                                                            target: 'flag_' + item.id,
                                                                                            placement: "right",
                                                                                            isOpen: flagTooltip[item.id] == undefined ? false : flagTooltip[item.id],
                                                                                            toggle: ()=>handleToolTip(item.id, 'flag'),
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].tooltip,
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: [
                                                                                                        item.fetched_by,
                                                                                                        " ",
                                                                                                        item.activity_note?.includes('missing') ? 'found missing item' : 'fetched',
                                                                                                        "  ",
                                                                                                        item?.folded_barcode,
                                                                                                        " at ",
                                                                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(item?.fetch_ready_time).utc().format("h:mma [on] ddd M/DD/YYYY")
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                                    lineNumber: 2726,
                                                                                                    columnNumber: 37
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                                lineNumber: 2725,
                                                                                                columnNumber: 35
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                            lineNumber: 2724,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].pointer}`,
                                                                                            id: 'flag_' + item.id,
                                                                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["faFlag"],
                                                                                            color: 'green'
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                            lineNumber: 2729,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2723,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                item.cant_found == 0 && item?.barcodeid == 0 && item.folded_barcode !== 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "d-flex align-items-center ms-1",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            disabled: actionLoading[index],
                                                                                            className: "btn btn-light",
                                                                                            onClick: ()=>{
                                                                                                handleCantFind(item.orderid, item.id, index);
                                                                                            },
                                                                                            children: "Can't Find Item"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                            lineNumber: 2733,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        actionLoading[index] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Spinner"], {
                                                                                            className: "ms-2",
                                                                                            style: {
                                                                                                height: '15px',
                                                                                                width: '15px'
                                                                                            }
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                            lineNumber: 2734,
                                                                                            columnNumber: 56
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2732,
                                                                                    columnNumber: 107
                                                                                }, this),
                                                                                item.cant_found == 1 && item?.barcodeid == 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "d-flex align-items-center ms-1",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            disabled: actionLoading[index],
                                                                                            className: "btn btn-danger",
                                                                                            onClick: ()=>handleFound(item.orderid, item.id, index),
                                                                                            children: "Mark Found"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                            lineNumber: 2738,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        actionLoading[index] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Spinner"], {
                                                                                            className: "ms-2",
                                                                                            style: {
                                                                                                height: '15px',
                                                                                                width: '15px'
                                                                                            }
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                            lineNumber: 2739,
                                                                                            columnNumber: 56
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2737,
                                                                                    columnNumber: 78
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                            lineNumber: 2698,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `d-flex align-items-start flex-column`,
                                                                            children: [
                                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["checkTags"])(item.product?.tags) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].order_cetogary_label} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].label_extraItem}`,
                                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["checkTags"])(item.product?.tags)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2744,
                                                                                    columnNumber: 63
                                                                                }, this),
                                                                                item.old_sku && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].order_cetogary_label} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].label_changed}`,
                                                                                    children: [
                                                                                        "CHANGED FROM ",
                                                                                        item.old_sku
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2745,
                                                                                    columnNumber: 46
                                                                                }, this),
                                                                                transferFromPrevOrder ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].order_cetogary_label} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].transfer_previous_order}`,
                                                                                    children: " TRANSFERRED FROM PREVIOUS ORDER "
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2748,
                                                                                    columnNumber: 54
                                                                                }, this) : "",
                                                                                transferToNextOrder ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].order_cetogary_label} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].transfer_next_order}`,
                                                                                    children: " TRANSFERRING TO NEXT ORDER "
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2749,
                                                                                    columnNumber: 52
                                                                                }, this) : "",
                                                                                transferCancelled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].order_cetogary_label} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].transfer_cancelled}`,
                                                                                    children: "TRANSFER CANCELLED AND CHARGED"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2750,
                                                                                    columnNumber: 51
                                                                                }, this),
                                                                                itemBadges(item?.tags, transferFromPrevOrder, transferToNextOrder)?.length > 0 && itemBadges(item?.tags, transferFromPrevOrder, transferToNextOrder).map((badge, ind)=>{
                                                                                    if (Object?.keys(OrderItemsAfterFulfil)?.length > 0) {
                                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].order_cetogary_label} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].label_added}`,
                                                                                            children: badge
                                                                                        }, 'badge_' + ind, false, {
                                                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                            lineNumber: 2756,
                                                                                            columnNumber: 37
                                                                                        }, this);
                                                                                    } else if (badge != 'ORIGINAL ORDER') {
                                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].order_cetogary_label} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].label_added}`,
                                                                                            children: badge
                                                                                        }, 'badge_' + ind, false, {
                                                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                            lineNumber: 2760,
                                                                                            columnNumber: 37
                                                                                        }, this);
                                                                                    }
                                                                                }),
                                                                                props.bulkEntityAttribueResult && props.bulkEntityAttribueResult[item?.id] != undefined ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].order_cetogary_label} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].label_added}`,
                                                                                    children: props.bulkEntityAttribueResult[item?.id] != undefined ? props.bulkEntityAttribueResult[item?.id] : ''
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2766,
                                                                                    columnNumber: 121
                                                                                }, this) : '',
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].order_cetogary_label} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"]['label_' + item_type_text]} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].pointer}`,
                                                                                            onClick: ()=>handleSwapSkuType(item_type_text, item.sku?.sku_id, item.product?.product_id, item.id, index),
                                                                                            children: item_type_text.toUpperCase()
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                            lineNumber: 2768,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        AddedItemAfterShipment != "" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            style: {
                                                                                                backgroundColor: item?.tag_color ? item?.tag_color : ""
                                                                                            },
                                                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].order_cetogary_label} ms-1 ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"]['label_shipment1']} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].pointer}`,
                                                                                            onClick: ()=>handleSwapSkuType(item_type_text, item.sku?.sku_id, item.product?.product_id, item.id, index),
                                                                                            children: AddedItemAfterShipment != "" ? `${AddedItemAfterShipment} SHIPMENT` : ``
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                            lineNumber: 2770,
                                                                                            columnNumber: 33
                                                                                        }, this) : "",
                                                                                        (item.product?.tags?.includes('final-sale') && item.type !== "FashionPass" || item.product?.tags?.includes('final-sale') && checkOrderStatus() == '1' && (item.barcode?.statusid == 10 || item.barcode?.statusid == 13)) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].order_cetogary_label} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].label_final} ms-1`,
                                                                                            children: "FINAL SALE"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                            lineNumber: 2773,
                                                                                            columnNumber: 256
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2767,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].sku_delete} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].pointer}`,
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: `badge bg-danger mt-2 py-2`,
                                                                                        children: item?.barcode?.tags?.includes('added-item-special-case') && 'Added Item Special Case'
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                        lineNumber: 2776,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2775,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                            lineNumber: 2742,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                    lineNumber: 2697,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    "data-label": "Barcode",
                                                                    style: {
                                                                        width: "13%"
                                                                    },
                                                                    children: item.barcodeid == 0 ? item.barcode_status !== '1' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "d-flex",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "number",
                                                                                        disabled: item.cant_found == 1 || orderDetails.holder_name,
                                                                                        value: barcodeNum[item.id] ? barcodeNum[item.id] : '',
                                                                                        onKeyDown: (e)=>{
                                                                                            console.log(e);
                                                                                            if (e.code == 'Enter') handleFulFillItem(e, item, 'blur');
                                                                                        },
                                                                                        onChange: (e)=>handleFulFillItem(e, item, 'change'),
                                                                                        onBlur: (e)=>{
                                                                                            if (e.code) handleFulFillItem(e, item, 'blur');
                                                                                        },
                                                                                        className: `form-control ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].edit_barcode} barcode_inp_class ${compType == 'basic_customer_info' ? 'poniter-events-none' : ''}`
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                        lineNumber: 2786,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    alertMsg.type == `item_barcode_alert_${item.id}` && alertMsg.loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "ms-2",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Spinner"], {}, void 0, false, {
                                                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                            lineNumber: 2787,
                                                                                            columnNumber: 131
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                        lineNumber: 2787,
                                                                                        columnNumber: 108
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                lineNumber: 2785,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            alertMsg.type == `item_barcode_alert_${item.id}` && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "mb-0",
                                                                                style: {
                                                                                    color: alertMsg.color
                                                                                },
                                                                                children: alertMsg.msg
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                lineNumber: 2789,
                                                                                columnNumber: 86
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].deletedBarcode}`,
                                                                        children: "DELETED BARCODE"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                        lineNumber: 2792,
                                                                        columnNumber: 31
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: compType != 'basic_customer_info' ? {} : {
                                                                            display: 'flex',
                                                                            alignItems: 'center'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `me-1 assign_barcode_class ${compType == 'basic_customer_info' ? 'poniter-events-none' : ''}`,
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    href: `/barcode/${item.barcode?.barcode1}`,
                                                                                    children: item.barcode?.barcode1
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2796,
                                                                                    columnNumber: 143
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                lineNumber: 2796,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            item.barcode?.slot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "me-1",
                                                                                children: [
                                                                                    "(slot ",
                                                                                    item.barcode?.slot,
                                                                                    ")"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                lineNumber: 2797,
                                                                                columnNumber: 54
                                                                            }, this),
                                                                            compType != 'basic_customer_info' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].pointer} me-1`,
                                                                                onClick: ()=>{
                                                                                    handleChangeBarcode(item);
                                                                                },
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["faRotate"]
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2798,
                                                                                    columnNumber: 158
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                lineNumber: 2798,
                                                                                columnNumber: 70
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].pointer} ${compType != 'basic_customer_info' ? 'me-1' : 'ms-2 me-2'}`,
                                                                                onClick: ()=>handleHistoryLogPopup(item.barcode),
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["faFileInvoice"]
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2799,
                                                                                    columnNumber: 180
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                lineNumber: 2799,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            compType != 'basic_customer_info' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].pointer} me-1`,
                                                                                onClick: ()=>printBarcodeViaDymo(item.barcode?.barcode1, item.sku_code, item.product?.product_title, item.sku?.size),
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["faPrint"]
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2800,
                                                                                    columnNumber: 232
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                lineNumber: 2800,
                                                                                columnNumber: 70
                                                                            }, this),
                                                                            banjoUser?.banjoUser?.level !== 'LOW' && (item.barcode?.statusid == 8 || item.barcode?.statusid == 13) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].pointer} me-1`,
                                                                                style: {
                                                                                    width: '18px',
                                                                                    display: 'inline-block'
                                                                                },
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layouts$2f$complaintPopup$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    barcode: item.barcode?.barcode1,
                                                                                    item: item?.product?.tags,
                                                                                    barcodeStatus: item.barcode?.statusid,
                                                                                    orderid: orderDetails?.ordername?.replace('#', '')
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2801,
                                                                                    columnNumber: 228
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                lineNumber: 2801,
                                                                                columnNumber: 138
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                        lineNumber: 2795,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                    lineNumber: 2780,
                                                                    columnNumber: 25
                                                                }, this),
                                                                checkOrderStatus() == '1' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    "data-label": "Notes",
                                                                    style: {
                                                                        width: "20%"
                                                                    },
                                                                    children: item.barcodeid !== 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "d-flex",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$customTextArea$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                style: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"],
                                                                                notes: item.barcode?.lastnotes,
                                                                                handleFn: handleNotesChange,
                                                                                itemIndex: index,
                                                                                item: item.barcode
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                lineNumber: 2808,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "",
                                                                                children: [
                                                                                    item?.barcode?.barcodeid ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$identifierPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"],
                                                                                        barcodeid: item.barcode.barcodeid,
                                                                                        identifierValue: item.barcode.barcode_identifier,
                                                                                        fullData: item.barcode,
                                                                                        index: index,
                                                                                        updateObj: updateOrderItemObj
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                        lineNumber: 2817,
                                                                                        columnNumber: 37
                                                                                    }, this) : "",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        children: [
                                                                                            actionBtn[index] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                onClick: (e)=>{
                                                                                                    handleNotesChange(e, 'click', item.barcode?.barcodeid, item.barcode?.lastnotes, item.barcode?.barcode1, index);
                                                                                                },
                                                                                                className: "btn btn-success mt-1",
                                                                                                children: "Save"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                                lineNumber: 2829,
                                                                                                columnNumber: 56
                                                                                            }, this),
                                                                                            actionLoading[index] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Spinner"], {
                                                                                                className: "mt-1"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                                lineNumber: 2830,
                                                                                                columnNumber: 60
                                                                                            }, this),
                                                                                            greenCheck[index] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                                className: "mt-1",
                                                                                                style: {
                                                                                                    width: '15%'
                                                                                                },
                                                                                                src: __TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fashionpassS3StorageNew + "assets/img/green-check.png"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                                lineNumber: 2831,
                                                                                                columnNumber: 57
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                        lineNumber: 2828,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                lineNumber: 2815,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                        lineNumber: 2807,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                    lineNumber: 2805,
                                                                    columnNumber: 56
                                                                }, this),
                                                                compType != 'basic_customer_info' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        width: "20%"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `d-flex ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].statusCol}`,
                                                                            children: item.barcodeid !== 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$statusComp$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                statusList: statusList,
                                                                                statusChange: banjoStatusChange,
                                                                                barcodeObj: item.barcode,
                                                                                style: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"],
                                                                                productTags: item.product?.tags,
                                                                                type: "order_page",
                                                                                checkOrderStatus: checkOrderStatus,
                                                                                shipmentLabel: shipmentLabel,
                                                                                productTypeId: item.product?.product_type_id,
                                                                                updateObj: updateBarcodeStatus,
                                                                                index: index,
                                                                                tpVendors: tpVendors,
                                                                                highlightMovedWithCustomer: highlightMovedWithCustomer
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                lineNumber: 2842,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                            lineNumber: 2840,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        barcodeMatched[item.id] != undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                className: "form-select",
                                                                                style: highlightMovedWithCustomer ? {
                                                                                    color: '#008c95',
                                                                                    fontWeight: 600
                                                                                } : {},
                                                                                disabled: true,
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    children: item.type.indexOf('Sale') > -1 ? 'Sold to Customer' : 'With Customer'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                    lineNumber: 2863,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                                lineNumber: 2862,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                            lineNumber: 2861,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        // bmw
                                                                        allowForAnyTransferCondition ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].transfer_btn_order,
                                                                            style: item?.product?.product_type_id !== 0 && checkOrderStatus() == '1' && shipmentLabel?.outgoing_service !== '' ? {
                                                                                marginLeft: "22px"
                                                                            } : {},
                                                                            id: "transferbtn_" + item?.barcode?.barcodeid,
                                                                            onClick: ()=>{
                                                                                openTransferActionPopup(item, transferConditionStatus);
                                                                            },
                                                                            children: transferConditionStatus == 1 ? 'Transfer Item' : transferConditionStatus == 2 ? 'Cancel Transfer' : transferConditionStatus == 3 ? 'Charge And Transfer' : transferConditionStatus == 4 ? 'Refund and Transfer' : ""
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                            lineNumber: 2870,
                                                                            columnNumber: 31
                                                                        }, this) : ""
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                                    lineNumber: 2839,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, "od_" + index, true, {
                                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                            lineNumber: 2666,
                                                            columnNumber: 23
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                    lineNumber: 2551,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                            lineNumber: 2538,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].fulfill_order} d-flex flex-column align-items-center justify-content-center w-100 py-3`,
                                            children: [
                                                checkOrderStatus() !== '1' && compType != 'basic_customer_info' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: `btn btn-success`,
                                                    onClick: ()=>handleFullFillOrder(),
                                                    disabled: alertMsg.type == 'ful_fill_alert' && alertMsg.loading,
                                                    children: "Fullfill Order"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                    lineNumber: 2895,
                                                    columnNumber: 85
                                                }, this),
                                                alertMsg.type == 'ful_fill_alert' && alertMsg.loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Spinner"], {
                                                    className: "mt-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                    lineNumber: 2896,
                                                    columnNumber: 75
                                                }, this),
                                                alertMsg.type == 'ful_fill_alert' && !alertMsg.loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Alert"], {
                                                    className: "mt-2",
                                                    color: alertMsg.color,
                                                    children: alertMsg.msg
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                    lineNumber: 2897,
                                                    columnNumber: 76
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                            lineNumber: 2894,
                                            columnNumber: 15
                                        }, this),
                                        waitShipmentAlert && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "d-flex justify-content-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Alert"], {
                                                    color: "warning",
                                                    children: "Please wait while creating shipment"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                                    lineNumber: 2899,
                                                    columnNumber: 84
                                                }, this),
                                                " "
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                            lineNumber: 2899,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                    lineNumber: 2537,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fslightbox$2d$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            toggler: toggleSlider,
                                            sources: [
                                                __TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].productImageUrlFS + 'products/' + sliderUrl
                                            ],
                                            slide: 1,
                                            initialAnimation: "scale-in-long"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                            lineNumber: 2902,
                                            columnNumber: 16
                                        }, this),
                                        openStarOrderPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$orderDetailsPopups$2f$starOrderPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"],
                                            isOpen: openStarOrderPopup,
                                            closeModal: closePopups,
                                            dataObjectProp: orderDetails,
                                            setStarOrderInfo: setStarOrderInfo,
                                            parentCompState: props.starInfoDataByChildCompProp
                                        }, void 0, false, {
                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                            lineNumber: 2908,
                                            columnNumber: 38
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$orderDetailsPopups$2f$removeStarOrderPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"],
                                            isOpen: openRemoveStarOrderPopup,
                                            closeModal: closePopups,
                                            orderId: orderId,
                                            setStarOrderInfo: setStarOrderInfo,
                                            parentCompState: props.starInfoDataByChildCompProp
                                        }, void 0, false, {
                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                            lineNumber: 2916,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$orderDetailsPopups$2f$orderOnHoldPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"],
                                            isOpen: openOnHoldOrderPopup,
                                            closeModal: closePopups,
                                            orderId: orderId,
                                            updateObj: updateHoldInfo,
                                            orderDetail: orderDetails?.ordernotes,
                                            promise_detail: props.shipmentLabelTracking?.promised_delivery_date
                                        }, void 0, false, {
                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                            lineNumber: 2924,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$orderDetailsPopups$2f$removeOrderOnHoldPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"],
                                            isOpen: openRemoveOnHoldOrderPopup,
                                            closeModal: closePopups,
                                            dataObjectProp: orderOnHoldData,
                                            updateObj: updateHoldInfo
                                        }, void 0, false, {
                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                            lineNumber: 2933,
                                            columnNumber: 15
                                        }, this),
                                        popupEnabled && checkFulfilledItems() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$orderDetailsPopups$2f$orderInfoPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"],
                                            isOpen: orderInfoPopup,
                                            closeModal: closePopups,
                                            orderDetails: orderDetails,
                                            openBagPopup: ()=>setBagSizePopup(!bagSizePopup),
                                            shipmentLabel: shipmentLabel?.outgoing_service,
                                            orderAddress: addressDetail,
                                            countUnfulfilledItems: countUnfulfilledItems,
                                            validatePak: validatePak,
                                            transferOrder: transferTo,
                                            finalSaleOrder: finalSaleOrder,
                                            checkMaxRetail: checkMaxRetail,
                                            toggleBarcodeScan: setBarcodeScanPopup,
                                            shipXAirport: shipmentLabel?.airport
                                        }, void 0, false, {
                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                            lineNumber: 2940,
                                            columnNumber: 58
                                        }, this) : '',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$orderDetailsPopups$2f$addItemToOrderPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"],
                                            isOpen: addItemToOrderPopup,
                                            closeModal: closePopups,
                                            getOrderDetail: props.getOrderDetail,
                                            openPopups: openPopups,
                                            orderId: orderId,
                                            orderType: OrderDetail?.order_type,
                                            handleItemArray: handleItemArray,
                                            handleItemsChangeAlert: handleItemsChangeAlert,
                                            rackClaimerInfo: {
                                                rackNo: OrderDetail?.rack_number,
                                                claimerId: OrderDetail?.claimer_id
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                            lineNumber: 2956,
                                            columnNumber: 15
                                        }, this),
                                        (Object.keys(barcodeData).length > 0 || Object.keys(skuData).length > 0) && openSkuEditspopups && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$barcodePopups$2f$changeSkuPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"],
                                            toggle: ()=>setOpenSkuEditspopups(!openSkuEditspopups),
                                            isOpen: openSkuEditspopups,
                                            productId: productId,
                                            skuId: skuData.sku_id,
                                            sku: skuData.sku,
                                            skuSize: skuData.size,
                                            barcode: barcodeData.barcode1,
                                            heading: 'Edit SKU',
                                            type: 'order',
                                            buttonText: 'Update SKU/Barcode',
                                            statusList: statusList,
                                            orderItem: selectedOrderItem,
                                            refreshData: props.getOrderDetail,
                                            rackClaimerInfo: {
                                                rackNo: OrderDetail?.rack_number,
                                                claimerId: OrderDetail?.claimer_id
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                            lineNumber: 2968,
                                            columnNumber: 114
                                        }, this),
                                        openRemoveItemFromOrderPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$orderDetailsPopups$2f$removeItemFromOrderPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"],
                                            toggle: ()=>setOpenRemoveItemFromOrderPopup(!openRemoveItemFromOrderPopup),
                                            isOpen: openRemoveItemFromOrderPopup,
                                            dataObj: dataToRemoveItem,
                                            sku: skuData.sku,
                                            statusList: statusList,
                                            handleItemsChangeAlert: handleItemsChangeAlert,
                                            handleItemArray: handleItemArray
                                        }, void 0, false, {
                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                            lineNumber: 2985,
                                            columnNumber: 48
                                        }, this),
                                        Object.keys(genericAlertObj).length > 0 && openSwapBarcodeTypePopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$orderDetailsPopups$2f$swapBarcodeTypePopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"],
                                            toggle: ()=>setOpenSwapBarcodeTypePopup(!openSwapBarcodeTypePopup),
                                            isOpen: openSwapBarcodeTypePopup,
                                            dataObj: genericAlertObj,
                                            updateItem: updateItemType
                                        }, void 0, false, {
                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                            lineNumber: 2997,
                                            columnNumber: 87
                                        }, this),
                                        otherNotification && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$orderDetailsPopups$2f$otherNotification$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            isOpen: otherNotification,
                                            failed: customerInfo?.payment_failed,
                                            toggle: ()=>setOtherNotification(!otherNotification)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                            lineNumber: 3006,
                                            columnNumber: 37
                                        }, this),
                                        isOpenOrderDetail && popupEnabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$orderDetailsPopups$2f$orderNotesPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            isOpen: isOpenOrderDetail,
                                            toggle: ()=>setIsOpenOrderDetail(!isOpenOrderDetail),
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"],
                                            data: popupData,
                                            promise_delivery: props.shipmentLabelTracking?.promised_delivery_date
                                        }, void 0, false, {
                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                            lineNumber: 3007,
                                            columnNumber: 54
                                        }, this) : '',
                                        swapBarcode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$orderDetailsPopups$2f$swapBarcodePopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            isOpen: swapBarcode,
                                            toggle: ()=>setSwapBarcode(!swapBarcode),
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"],
                                            statusList: statusList,
                                            orderItem: selectedOrderItem,
                                            refreshData: props.getOrderDetail
                                        }, void 0, false, {
                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                            lineNumber: 3014,
                                            columnNumber: 31
                                        }, this),
                                        bagSizePopup && compType == 'orderdetail' && popupEnabled && !checkMaxRetail ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$orderDetailsPopups$2f$bagSizePopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            isOpen: bagSizePopup,
                                            toggle: ()=>setBagSizePopup(!bagSizePopup),
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"],
                                            isHold: orderDetails?.holder_name !== null ? true : false,
                                            deliveryId: orderDetails?.deliveryid,
                                            toggleBarcodeScan: setBarcodeScanPopup,
                                            updateBagSize: props.updateBagSize,
                                            orderDetails: orderDetails,
                                            skipCheck: skipReturn,
                                            setSkipCheck: setSkipReturn,
                                            checkOrderStatus: checkOrderStatus,
                                            checkFulfilledItems: checkFulfilledItems,
                                            customerAdded: checkCustomerAddedItems().length,
                                            shipmentLabel: shipmentLabel,
                                            originalItems: originalItems,
                                            addedShipment: addedShipment,
                                            setAutoShip: setAutoShip,
                                            bagSizeArray: bagSizeArray,
                                            finalSaleCount: finalSaleCount,
                                            handleTransferItemPopup: ()=>setTransferItemPopup(true),
                                            showAddedShipment: ()=>{
                                                (checkCSAddedItem() || checkCustomerAddedItems()) && (shipmentLabel?.outgoing_service !== '' || shipmentLabel?.return_service !== '') ? showAddedShipment(true) : '';
                                            },
                                            validatePak: validatePak,
                                            isPoBoxAddress: isPoBoxAddress
                                        }, void 0, false, {
                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                            lineNumber: 3022,
                                            columnNumber: 97
                                        }, this) : '',
                                        checkinSelectionPopup ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$orderDetailsPopups$2f$checkinSelectionPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            toggle: ()=>setCheckinSelectionPopup(false),
                                            isOpen: checkinSelectionPopup,
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"],
                                            handleCheckIn: handleCheckIn
                                        }, void 0, false, {
                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                            lineNumber: 3049,
                                            columnNumber: 17
                                        }, this) : "",
                                        barcodeScanPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$orderDetailsPopups$2f$scanBarcode$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            isOpen: barcodeScanPopup,
                                            toggle: ()=>setBarcodeScanPopup(!barcodeScanPopup),
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"],
                                            orderItems: orderItems,
                                            fulfillItem: handleFulFillItem,
                                            statusList: statusList,
                                            disableScan: alertMsg?.loading,
                                            barcodeMatched: barcodeMatched,
                                            bulkValidationError: bulkValidationError,
                                            setBulkValidationError: setBulkValidationError
                                        }, void 0, false, {
                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                            lineNumber: 3057,
                                            columnNumber: 36
                                        }, this),
                                        transferItemPopup && transferTo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$orderDetailsPopups$2f$transferItemPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            isOpen: transferItemPopup,
                                            toggle: ()=>setTransferItemPopup(!transferItemPopup),
                                            orderItems: orderItems,
                                            orderId: orderId
                                        }, void 0, false, {
                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                            lineNumber: 3069,
                                            columnNumber: 53
                                        }, this),
                                        transferActionPopup && transferActionState?.item && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$orderDetailsPopups$2f$transferActionPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            isOpen: transferActionPopup,
                                            toggle: closeTransferActionPopup,
                                            selectedItem: transferActionState?.item,
                                            transferConditionStatus: transferActionState?.conditionStatus,
                                            nextOrderPlacedData: nextOrderPlacedData,
                                            emailCustomer: transferActionState?.emailCustomer,
                                            setEmailCustomer: updateTransferActionEmail,
                                            chargeAddedItem: transferActionState?.chargeAddedItem,
                                            setChargeAddedItem: updateTransferActionCharge,
                                            loading: transferActionLoading,
                                            onConfirm: handleTransferActionConfirm,
                                            orderDetails: orderDetails,
                                            transferItemPriceFromSetting: customerInfo?.tags?.toLowerCase()?.indexOf("beta-tester") > -1 ? transferItemPriceFromSetting : 19.95
                                        }, void 0, false, {
                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                            lineNumber: 3077,
                                            columnNumber: 17
                                        }, this),
                                        Object.keys(genericAlertObj).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$genericAlertPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            isOpen: checkInPopup,
                                            toggle: ()=>{
                                                setCheckInPopup(!checkInPopup);
                                            },
                                            alertObj: genericAlertObj
                                        }, void 0, false, {
                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                            lineNumber: 3093,
                                            columnNumber: 59
                                        }, this),
                                        Object.keys(barcodeData).length > 0 && toggleBarcodeHistoryPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$conveyorPopups$2f$barcodeHistoryLogPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            barcode: barcodeData.barcodeId,
                                            barcodeName: barcodeData.barcode,
                                            isOpen: toggleBarcodeHistoryPopup,
                                            toggle: ()=>setToggleBarcodeHistoryPopup(!toggleBarcodeHistoryPopup)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                            lineNumber: 3094,
                                            columnNumber: 84
                                        }, this),
                                        Object.keys(genericAlertObj).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$genericAlertPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            isOpen: generalAlert,
                                            toggle: ()=>setGeneralAlert(!generalAlert),
                                            alertObj: genericAlertObj
                                        }, void 0, false, {
                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                            lineNumber: 3095,
                                            columnNumber: 59
                                        }, this),
                                        barcodeConfrimUpdatePopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$orderDetailsPopups$2f$barcodeConfrimUpdatePopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            isOpen: barcodeConfrimUpdatePopup,
                                            toggle: ()=>{
                                                setBarcodeConfrimUpdatePopup(!barcodeConfrimUpdatePopup);
                                            },
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_order$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"],
                                            dataObj: genericAlertObj,
                                            updateFulfilArrays: updateFulfilArrays
                                        }, void 0, false, {
                                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                                            lineNumber: 3096,
                                            columnNumber: 45
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layouts/orders/orderDetails.js",
                                    lineNumber: 2901,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layouts/orders/orderDetails.js",
                            lineNumber: 2320,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/layouts/orders/orderDetails.js",
                        lineNumber: 2319,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layouts/orders/orderDetails.js",
                lineNumber: 2317,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(OrderDetails, "M73Fna08D2sRi2k5kIEmU4J2LGI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = OrderDetails;
const __TURBOPACK__default__export__ = OrderDetails;
var _c;
__turbopack_context__.k.register(_c, "OrderDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layouts/customerBasicInfo.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/reactstrap/dist/reactstrap.modern.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/index.es.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$customerDetailsPopups$2f$changePlanPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/customerDetailsPopups/changePlanPopup.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$customerDetailsPopups$2f$freeUpgradePopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/customerDetailsPopups/freeUpgradePopup.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$customerDetailsPopups$2f$customerAccountHistoryPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/customerDetailsPopups/customerAccountHistoryPopup.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$customerDetailsPopups$2f$winbackConfirmationPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/customerDetailsPopups/winbackConfirmationPopup.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/moment/moment.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/functions/globalFunctions.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/functions/customerFunctions.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$customer$2f$services$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/customer/services.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$restartBillingPopup$2f$restartBillingPopup$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/restartBillingPopup/restartBillingPopup.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-redux/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/es/exports.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$customerDetailsPopups$2f$addPlanPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/customerDetailsPopups/addPlanPopup.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$customerDetailsPopups$2f$addCopoun$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/customerDetailsPopups/addCopoun.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$customerDetailsPopups$2f$cancelFreeUpgrade$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/customerDetailsPopups/cancelFreeUpgrade.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/globalconfig.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$datepicker$2f$dist$2f$react$2d$datepicker$2e$min$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-datepicker/dist/react-datepicker.min.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$customerDetailsPopups$2f$transferedItemPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/customerDetailsPopups/transferedItemPopup.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$customerDetailsPopups$2f$cutomerAccountCreditPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/customerDetailsPopups/cutomerAccountCreditPopup.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$orderFunction$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/functions/orderFunction.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layouts$2f$orders$2f$orderDetails$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layouts/orders/orderDetails.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var additionCount = 0;
var selectedSnoozeRadioOption = -1;
var totalFirstPartialShipmentCount = 0;
let statusObj = {
    'Paused': 'Paused',
    'Paused_1': 'Cancelled',
    'Active': 'Active',
    'PendingPause': 'Pending Pause',
    'PendingPause_1': 'Pending Cancel'
};
let orderName = "";
function CustomerDetails(props) {
    _s();
    let style = props.style;
    const banjoUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "CustomerDetails.useSelector[banjoUser]": (state)=>state.banjoUser
    }["CustomerDetails.useSelector[banjoUser]"]);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const systemSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "CustomerDetails.useSelector[systemSettings]": (state)=>state?.systemSettings
    }["CustomerDetails.useSelector[systemSettings]"]);
    let customerid = props?.customerInfo?.customer_detail?.customer_id;
    const [openChangePlanPopup, setOpenChangePlanPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openFreeUpgradePopup, setOpenFreeUpgradePopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openCustomerAccountEditToggle, setOpenCustomerAccountEditToggle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [failedMessageTooltip, setFailedMessageTooltip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [customerInfo, setCustomerInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [customerServiceNotes, setCustomerServiceNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [customerError, setCustomerError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [customerDefaultAddress, setCustomerDefaultAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [customerAllAddresses, setCustomerAllAddresses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [purchaseSpend, setPurchaseSpend] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [customerTags, setCustomerTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [customerPaymentList, setCustomerPaymentList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [customerOrders, setCustomerOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [customerCards, setCustomerCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [customerSubscription, setCustomerSubscription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [additionalItemCount, setAdditionalItemCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [customerHistoryPopup, setCustomerHistoryPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorMsg, setErrorMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [addtionalItemCheck, setAddtionalItemCheck] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [referralCode, setReferralCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        referralDetals: '',
        planName: ''
    });
    const [openAddPlanPopup, setOpenAddPlanPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [orderTagIndex, setOrderTagIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        orderDetail: '',
        tag: ''
    });
    const [customerPaymentChargesList, setCustomerPaymentChargesList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loader, setLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [customerCredit, setCustomerCredit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])();
    const [customerCreditReason, setCustomerCreditReason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [customerAllcreditOption, setCustomerAllCreditOption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [notification, setNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        msg: '',
        type: '',
        clrcls: ''
    });
    const [notificationLoader, setNotificationLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        status: false,
        type: ''
    });
    const [monthlyDiscountLogs, setMonthlyDiscountLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [openCustomerCreditpopup, setOpenCustomerCreditpopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [creditPayload, setCreditPayload] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [refundRecord, setRefundRecord] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [shipmentRecord, setShipmentRecord] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [editCard, setEditCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        record: '',
        currentIndex: ''
    });
    const [chargeAmount, setChargeAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [customerStatementDescription, setCustomerStatementDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [noCard, setNoCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [additionalItemReason, setAdditionalItemReason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [additionalItemLogs, setAdditionalItemLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [notificationLogs, setNotificationLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [subscriptionDetails, setSubscriptionDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [accountStatus, setAccountStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [updateSubscription, setUpdateSubsciption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [refundLastPaymentStatus, setRefundLastPaymentStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [emailPauseStatus, setEmailPauseStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [createSubscriptionTable, setCreateSubscriptionTable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        status: false,
        value: false,
        planInfo: '',
        taxInfo: ''
    });
    const [fpPlanList, setFpPlanList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [upgradedPlans, setUpgradedPlans] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [openAddCoupon, setopenAddCoupon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [couponCode, setCouponCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        code: '',
        price: 0
    });
    const [usedCreditForsubscription, setUsedCreditForsubscription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sendWelcomeEmail, setSendWelcomeEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [freePlanUpgrade, setFreePlanUpgrade] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        status: false,
        planInfo: {}
    });
    const [cancelFreeUpgradePopup, setCancelFreeUpgradePopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [runAuthCharge, setRunAuthCharge] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [issubscriptionCreated, setIssubscriptionCreated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mostRecentOrder, setMostRecentOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [paymentDes, setPaymentDesc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [phoneVerificationPopup, setPhoneVerificationPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        status: false,
        type: ''
    });
    const [swapEmailPopup, setSwapEmailPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        status: false,
        type: ''
    });
    const [paymentNotification, setPaymentNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        type: "",
        msg: '',
        status: false
    });
    const [mirFlag, setMirFlag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [removeOrderTag, setRemoveOrderTag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAccountPastDue, setIsAccountPastDue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [vipUser, setVIPUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [subscriptionTags, setSubscriptionTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [updatedCustomerNotes, setUpdatedCustomerNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])();
    const [swapEmail, setSwapEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [swapPhone, setSwapPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [customerEmail, setCustomerEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [customerReferral, setCustomerReferral] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isNewSubscriber, setIsNewSubscriber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [customerStatus, setCustomerStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [customerTagsArr, setCustomerTagsArr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [enableTimeLine, setEnableTimeLine] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [subsCancelReason, setSubsCancelReason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [subsCancelErr, setSubsCancelErr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [snoozedDate, setSnoozedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedSubscriptionOption, setSelectedSubscriptionOption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selectedSnoozeDateBackend, setSelectedSnoozeDateBackend] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isCustomeSnoozeDate, setIsCustomeSnoozeDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectSnoozeDateError, setSelectSnoozeDateError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [snoozedOnDate, setSnoozedOnDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [transFeredItemPopup, setTransferedItemPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pauseActivatedDate, setPauseActivatedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [pendingPauseDate, setPendingPauseDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [mirChargeFailed, setMirChargeFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openRestartPopup, setOpenRestartPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [billingMsg, setBillingMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [btnLoader, setBtnLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [timeLineSortedData, setTimeLineSortedData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [winbackEligible, setWinbackEligible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [winbackAttemptObj, setWinbackAttemptObj] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [winbackCondition, setWinbackCondition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(2);
    const [winbackBtnDisable, setWinbackBtnDisable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openWinbackModal, setOpenWinbackModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [restartDate, setRestartDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [entityAttributeData, setEntityAttributeData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [klayvioStatus, setKlayvioStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [winbackAllDiscounts, setWinbackAllDiscounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [taxedChargeAmount, setTaxedChargeAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [chargeTaxDebounceTimeout, setChargeTaxDebounceTimeout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [customerAccStatus, setCustomerAccStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isDecliningSubscriber, setIsDecliningSubscriber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [toDoWithFailingInvoices, setTodoWithFailingInvoices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [customerAccCreditFromMetaData, setCustomerAccCreditFromMetaData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [pastDueAccountStage, setPastDueAccountStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isCreatingSubcription, setIsCreatingSubcription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [promoCodeUsed, setPromoCodeUsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [orderDetails, setOrderDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [orderItems, setOrderItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [orderData, setOrderData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [customerData, setCustomerData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [orderAddress, setOrderAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [claimerInfo, setClaimerInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [orderCustomerInfo, setOrderCustomerInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [orderId, setOrderId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [shipmentLabelExtra, setShipmentLabelExtra] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [shipmentLabel, setShipmentLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [invoiceCreated, setInvoiceCreated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let customerDaysActive = 0;
    let currentDate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].utc(Date.now()).format('YYYY-MM-DD');
    let cur_date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(Date.now()).format('X');
    const [customerAttributes, setCustomerAttributes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    let subscriptionPayload = {};
    const [promotionData, setPromotionData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            promotion_name: 'Facebook page like',
            amount: 1
        },
        {
            promotion_name: 'Facebook post share',
            amount: 2
        },
        {
            promotion_name: 'Insta Story',
            amount: 5
        },
        {
            promotion_name: 'Instagram Post Tap Tag',
            amount: 5
        },
        {
            promotion_name: 'Instagram Post Caption',
            amount: 5
        },
        {
            promotion_name: 'Instagram Post Tap Tag + Caption',
            amount: 10
        },
        {
            promotion_name: 'Google Review',
            amount: 5
        },
        {
            promotion_name: 'Facebook Recommendation',
            amount: 2
        },
        {
            promotion_name: 'Instagram Follow',
            amount: 2
        }
    ]);
    const creditOptions = [
        {
            name: 'Add',
            points: '',
            reason: ''
        },
        {
            name: 'Remove',
            points: '',
            reason: ''
        },
        {
            name: '1 day',
            points: '4.16',
            reason: ''
        },
        {
            name: '2 days',
            points: '8.33',
            reason: ''
        },
        {
            name: '3 days',
            points: '12.50',
            reason: ''
        },
        {
            name: '4 days',
            points: '16.66',
            reason: ''
        },
        {
            name: '5 days',
            points: '20.83',
            reason: ''
        },
        {
            name: '6 days',
            points: '25.00',
            reason: ''
        },
        {
            name: '7 days',
            points: '29.16',
            reason: ''
        },
        {
            name: '8 days',
            points: '33.33',
            reason: ''
        },
        {
            name: '9 days',
            points: '37.50',
            reason: ''
        },
        {
            name: '10 days',
            points: '41.66',
            reason: ''
        },
        {
            name: '11 days',
            points: '45.83',
            reason: ''
        },
        {
            name: '12 days',
            points: '50.00',
            reason: ''
        },
        {
            name: '13 days',
            points: '54.16',
            reason: ''
        },
        {
            name: '14 days',
            points: '58.33',
            reason: ''
        },
        {
            name: '15 days',
            points: '62.50',
            reason: ''
        },
        {
            name: '16 days',
            points: '66.66',
            reason: ''
        },
        {
            name: '17 days',
            points: '70.83',
            reason: ''
        },
        {
            name: '18 days',
            points: '75.00',
            reason: ''
        },
        {
            name: '19 days',
            points: '79.16',
            reason: ''
        },
        {
            name: '20 days',
            points: '83.33',
            reason: ''
        },
        {
            name: '21 days',
            points: '87.50',
            reason: ''
        },
        {
            name: '22 days',
            points: '91.66',
            reason: ''
        },
        {
            name: '23 days',
            points: '95.83',
            reason: ''
        },
        {
            name: '24 days',
            points: '100.00',
            reason: ''
        },
        {
            name: '25 days',
            points: '104.16',
            reason: ''
        },
        {
            name: '26 days',
            points: '108.33',
            reason: ''
        },
        {
            name: '27 days',
            points: '112.50',
            reason: ''
        },
        {
            name: '28 days',
            points: '116.66',
            reason: ''
        },
        {
            name: '29 days',
            points: '120.83',
            reason: ''
        },
        {
            name: '30 days',
            points: '125.00',
            reason: ''
        }
    ];
    const [customerCreditType, setCustomerCreditType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(creditOptions[0]?.name);
    const [phoneNumber, setPhoneNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        'phone1': '',
        'phone2': '',
        'phone3': ''
    });
    //basic 
    let isCheckPFSOnFirstIndex = 0;
    let banjoLoginUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "CustomerDetails.useSelector[banjoLoginUser]": (state)=>state.banjoUser
    }["CustomerDetails.useSelector[banjoLoginUser]"]);
    const handleTodoWithFailingInvoices = (event)=>{
        setTodoWithFailingInvoices(event.target.value);
    };
    let getPromoCode = (data = [])=>{
        if (!Array.isArray(data)) return "";
        const promoObj = data.find((item)=>item.name === "SubscribedPromo");
        if (!promoObj || !Array.isArray(promoObj.attributeValues)) return "";
        const promoValue = promoObj.attributeValues.find((val)=>val.valueDefination === "SubscribedPromo_Value");
        if (!promoValue || !promoValue.value) return "";
        return promoValue.value.split("-")[0];
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomerDetails.useEffect": ()=>{
            let fetchData = {
                "CustomerDetails.useEffect.fetchData": async ()=>{
                    setNotificationLoader({
                        status: true,
                        type: "initial_loading"
                    });
                    if (props.customerInfo.success && props.customerInfo.customer_detail != null) {
                        if (!props.customerInfo && !props.customerInfo.customer_detail) return;
                        let stripe_id = props.customerInfo.customer_detail.stripe_id;
                        let customer_id = props.customerInfo.customer_detail.customer_id;
                        let email = props.customerInfo.customer_detail.email;
                        setCustomerInfo(props.customerInfo.customer_detail);
                        setCustomerEmail(props.customerInfo?.customer_detail?.email);
                        // setCustomerServiceNotes(props.customerInfo.customer_detail.customer_notes)
                        getAllAddresses(customer_id);
                        // getSwapedCustomerEmail(customer_id)
                        let customerAttribute = await getCustomerAttributes(customer_id);
                        await setCustomerAttributes(customerAttribute);
                        if (customerAttribute?.length > 0) {
                            let promo = getPromoCode(customerAttribute);
                            if (promo != '') {
                                setPromoCodeUsed(promo);
                            }
                        }
                        let attrPriority = 0;
                        if (customerAttribute?.length > 0) {
                            customerAttribute.map({
                                "CustomerDetails.useEffect.fetchData": (attribute)=>{
                                    if (attribute && attribute?.name?.indexOf("declining_subscriber") > -1 && attrPriority < 1) attrPriority = 1;
                                    if (attribute && attribute?.name?.indexOf("suspended_subscriber") > -1 && attrPriority < 2) attrPriority = 2;
                                    if (attribute && attribute?.name?.indexOf("DecliningCancel") > -1 && attrPriority < 3) attrPriority = 3;
                                }
                            }["CustomerDetails.useEffect.fetchData"]);
                        }
                        if (attrPriority == 1) {
                            setPastDueAccountStage('in Declining Stage');
                        } else if (attrPriority == 2) {
                            setPastDueAccountStage('in Suspended Stage');
                        } else if (attrPriority == 3) {
                            setPastDueAccountStage('Cancelled due to Decline');
                        } else {
                            setPastDueAccountStage('');
                        }
                        // console.log("customerAttributes....", customerAttribute)
                        let _snooze_date = null;
                        let results = await Promise.all([
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["checkCustomerPastDue"])(customer_id),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getCustomerStripeCard"])(stripe_id),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getCreditTypesForBanjo"])(),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAdditionalItemsNoteHistory"])(customer_id),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getFpPlans"])(),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getEntityAttribute"])(customer_id, 'customer'),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAllWinbackDiscounts"])(1)
                        ]);
                        if (results && results[0].success && results[0]?.message?.toString()?.toLowerCase()?.indexOf('pastdue') > -1) {
                            setIsAccountPastDue(true);
                            setIsDecliningSubscriber(true);
                        }
                        if (results && results[0].success && (results[1]?.message?.toString()?.toLowerCase()?.indexOf('sales_payment_failed') > -1 || results[0]?.message?.toString()?.toLowerCase()?.indexOf('mir payment failed') > -1)) {
                            setMirFlag(true);
                        }
                        if (results && results[1].success) {
                            if (!results[4].cardinfo?.length > 0) {
                                setNoCard(true);
                            }
                            await setCustomerCards(results[1].cardInfo.data);
                        }
                        if (results && results[2]?.success) {
                            if (results[2]?.credit_types?.length > 0) {
                                let newData = results[2].credit_types.sort({
                                    "CustomerDetails.useEffect.fetchData.newData": (a, b)=>a.position - b.position
                                }["CustomerDetails.useEffect.fetchData.newData"]);
                                let combinedOptions = [
                                    ...creditOptions.slice(0, 2),
                                    ...newData,
                                    ...creditOptions.slice(2)
                                ];
                                setCustomerAllCreditOption(combinedOptions);
                            } else {
                                setCustomerAllCreditOption(creditOptions);
                            }
                        }
                        if (results && results[3]?.success) {
                            await setAdditionalItemLogs(results[3].result);
                        }
                        if (results && results[5]?.success) {
                            let data = results[5]._attributeReturnModel.attributes;
                            setEntityAttributeData(data);
                            if (data) {
                                // console.log(data,"oooo")
                                setSnoozedDate(null);
                                data.forEach({
                                    "CustomerDetails.useEffect.fetchData": (item)=>{
                                        if (item.name == "Paused Scheduled") {
                                            if (item?.attributeValues?.length > 0) {
                                                item?.attributeValues.map({
                                                    "CustomerDetails.useEffect.fetchData": (v)=>{
                                                        if (v.valueDefination == 'Paused Scheduled Date') {
                                                            setSnoozedDate(v.value);
                                                            _snooze_date = v.value;
                                                        }
                                                    }
                                                }["CustomerDetails.useEffect.fetchData"]);
                                            }
                                        }
                                        if (item.name == "Billing-Date-Restarted") {
                                            const dateTimeString = item.attributeValues[0].value;
                                            const convertedDateTime = dateTimeString.replace(/(\d{4}-\d{2}-\d{2}) (\d{2})-(\d{2})-(\d{2})/, '$1 $2:$3:$4');
                                            let reqFormat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(convertedDateTime, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].defaultFormat).toDate() // date formated as per moment required formate
                                            ;
                                            const timeStamp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(reqFormat);
                                            setRestartDate(timeStamp);
                                        }
                                        if (item?.name == "declining_subscriber") {
                                            setIsDecliningSubscriber(true);
                                        }
                                    }
                                }["CustomerDetails.useEffect.fetchData"]);
                            }
                        }
                        if (results && results[6]?.success) {
                            await setWinbackAllDiscounts(results[6].winback_discounts);
                        }
                        let cs_tags = "";
                        if (props.customerInfo.customer_detail.tags.length > 0) {
                            // setPhoneVerificationPopup(props.customerInfo.customer_detail.tags.indexOf('phone_verified')>-1) 
                            let tags = props.customerInfo.customer_detail.tags.split(',');
                            tags = tags.map({
                                "CustomerDetails.useEffect.fetchData": (val)=>{
                                    return val.trim();
                                }
                            }["CustomerDetails.useEffect.fetchData"]);
                            let isVipTag = tags?.some({
                                "CustomerDetails.useEffect.fetchData": (element)=>element.indexOf("VIP:") !== -1
                            }["CustomerDetails.useEffect.fetchData"]);
                            if (tags.indexOf('Paused') > -1 && _snooze_date == null) {
                                setSubscriptionTags('Paused_1');
                                setCustomerAccStatus('Paused_1');
                            } else if (tags.indexOf('PendingPause') > -1 && _snooze_date == null) {
                                setSubscriptionTags('PendingPause_1');
                                setCustomerAccStatus('PendingPause_1');
                            } else if (tags.indexOf('Paused') > -1 && _snooze_date != null) {
                                setSubscriptionTags('Paused');
                                setCustomerAccStatus('Paused');
                            } else if (tags.indexOf('PendingPause') > -1 && _snooze_date != null) {
                                setSubscriptionTags('PendingPause');
                                setCustomerAccStatus('PendingPause');
                            } else {
                                setSubscriptionTags('');
                                setCustomerAccStatus('');
                            }
                            setVIPUser(isVipTag);
                            setCustomerTags(tags);
                            cs_tags = tags;
                            // checkWinbackAttemptInfo(tags, props.customerInfo.customer_detail)
                            let additionalCount = props.customerInfo.customer_detail.tags.split(',').filter({
                                "CustomerDetails.useEffect.fetchData.additionalCount": (val)=>{
                                    if (val.indexOf('AdditionalItem') > -1) {
                                        return val;
                                    }
                                }
                            }["CustomerDetails.useEffect.fetchData.additionalCount"]);
                            let count = 0;
                            count = parseInt(additionalCount.length > 0 ? additionalCount[0].replace(/[^0-9]/g, '') : 0);
                            setAdditionalItemCount(count);
                            additionCount = count;
                        }
                        const getCustomerStatusResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getCustomerStatus"])(customerid);
                        let customerTagsArrItems = [
                            {
                                id: 1,
                                status: "declining_MIR"
                            },
                            {
                                id: 2,
                                status: "Dispute Payment"
                            },
                            {
                                id: 3,
                                status: "Manually Cancelled"
                            },
                            {
                                id: 4,
                                status: "Active Cancel"
                            },
                            {
                                id: 5,
                                status: "Passive Cancel"
                            },
                            {
                                id: 6,
                                status: "Sleeping Customer"
                            },
                            {
                                id: 7,
                                status: "New Subscriber"
                            },
                            {
                                id: 8,
                                status: "Returning Subscriber"
                            },
                            {
                                id: 9,
                                status: "Returning Snooze"
                            },
                            {
                                id: 10,
                                status: "Declining Subscriber"
                            },
                            {
                                id: 11,
                                status: "Suspended Subscriber"
                            },
                            {
                                id: 12,
                                status: "DecliningCancel"
                            },
                            {
                                id: 13,
                                status: "AutomaticCancel"
                            }
                        ];
                        let shipTrackNumber = {};
                        if (getCustomerStatusResult.sucess) {
                            let filteredData = getCustomerStatusResult.response?.filter({
                                "CustomerDetails.useEffect.fetchData": (item)=>item?.attributes_name
                            }["CustomerDetails.useEffect.fetchData"]);
                            if (filteredData?.length > 0) {
                                setCustomerStatus(filteredData);
                                const mapArrays = {
                                    "CustomerDetails.useEffect.fetchData.mapArrays": (filteredData, customerTagsArrItems)=>{
                                        return filteredData.reduce({
                                            "CustomerDetails.useEffect.fetchData.mapArrays": (acc, item1)=>{
                                                customerTagsArrItems.forEach({
                                                    "CustomerDetails.useEffect.fetchData.mapArrays": (item2)=>{
                                                        let updatedStrings = item1?.attributes_name?.toLowerCase()?.replaceAll(' ', '_')?.replaceAll('/', '_')?.replaceAll('-', '_');
                                                        if (updatedStrings.endsWith('_')) {
                                                            updatedStrings = updatedStrings.slice(0, -1);
                                                        }
                                                        if (updatedStrings == item2.status.toLowerCase()?.replaceAll(' ', '_')?.replaceAll('/', '_')?.replaceAll('-', '_')) {
                                                            acc.push({
                                                                ...item1,
                                                                ...item2
                                                            });
                                                        }
                                                    }
                                                }["CustomerDetails.useEffect.fetchData.mapArrays"]);
                                                return acc;
                                            }
                                        }["CustomerDetails.useEffect.fetchData.mapArrays"], []);
                                    }
                                }["CustomerDetails.useEffect.fetchData.mapArrays"];
                                const mappedArray = mapArrays(filteredData, customerTagsArrItems);
                                setCustomerTagsArr(mappedArray);
                            }
                            setEnableTimeLine(false);
                            let snoozedAttr = [];
                            let pauseSurveySubmittedArr = [];
                            let pauseActivatedArr = [];
                            let pauseDate = 0;
                            let pauseSurveyDate = 0;
                            totalFirstPartialShipmentCount = 0;
                            if (getCustomerStatusResult?.response?.length > 0) {
                                getCustomerStatusResult?.response?.map({
                                    "CustomerDetails.useEffect.fetchData": (item, index)=>{
                                        if (item.attributes_name == 'Snooze-Email-Trigger') {
                                            snoozedAttr.push(item);
                                        }
                                        if (item.attributes_name == 'PendingPause') {
                                            pauseSurveySubmittedArr.push(item);
                                        }
                                        if (item.attributes_name == 'Paused') {
                                            pauseActivatedArr.push(item);
                                        }
                                    }
                                }["CustomerDetails.useEffect.fetchData"]);
                            }
                            if (snoozedAttr?.length > 0) {
                                if (snoozedAttr?.length > 1) {
                                    let sortedArr = snoozedAttr.sort({
                                        "CustomerDetails.useEffect.fetchData.sortedArr": (a, b)=>a.entity_attributes_created_at - b.entity_attributes_created_at
                                    }["CustomerDetails.useEffect.fetchData.sortedArr"]);
                                    if (sortedArr[sortedArr.length - 1]?.entity_attributes_active == true) {
                                        setSnoozedOnDate(sortedArr[sortedArr.length - 1]?.entity_attributes_created_at);
                                    } else {
                                        setSnoozedOnDate(0);
                                    }
                                } else {
                                    if (snoozedAttr[0]?.entity_attributes_active == true) {
                                        setSnoozedOnDate(snoozedAttr[0]?.entity_attributes_created_at);
                                    } else {
                                        setSnoozedOnDate(0);
                                    }
                                }
                            }
                            if (pauseSurveySubmittedArr?.length > 0) {
                                if (pauseSurveySubmittedArr?.length > 1) {
                                    let pauseSurveyArr = pauseSurveySubmittedArr.sort({
                                        "CustomerDetails.useEffect.fetchData.pauseSurveyArr": (a, b)=>a.entity_attributes_created_at - b.entity_attributes_created_at
                                    }["CustomerDetails.useEffect.fetchData.pauseSurveyArr"]);
                                    if (pauseSurveyArr[pauseSurveyArr.length - 1]?.entity_attributes_active == true) {
                                        setPendingPauseDate(pauseSurveyArr[pauseSurveyArr.length - 1]?.entity_attributes_created_at);
                                        pauseSurveyDate = pauseSurveyArr[pauseSurveyArr.length - 1]?.entity_attributes_created_at;
                                    } else if (pauseSurveyArr[pauseSurveyArr.length - 2]?.entity_attributes_active == true) {
                                        setPendingPauseDate(pauseSurveyArr[pauseSurveyArr.length - 2]?.entity_attributes_created_at);
                                        pauseSurveyDate = pauseSurveyArr[pauseSurveyArr.length - 2]?.entity_attributes_created_at;
                                    } else {
                                        setPendingPauseDate(0);
                                        pauseSurveyDate = 0;
                                    }
                                } else {
                                    if (pauseSurveySubmittedArr[0]?.entity_attributes_active == true) {
                                        setPendingPauseDate(pauseSurveySubmittedArr[0]?.entity_attributes_created_at);
                                        pauseSurveyDate = pauseSurveySubmittedArr[0]?.entity_attributes_created_at;
                                    } else {
                                        setPendingPauseDate(0);
                                        pauseSurveyDate = 0;
                                    }
                                }
                            }
                            if (pauseActivatedArr?.length > 0) {
                                if (pauseActivatedArr?.length > 1) {
                                    let pauseArr = pauseActivatedArr.sort({
                                        "CustomerDetails.useEffect.fetchData.pauseArr": (a, b)=>a.entity_attributes_created_at - b.entity_attributes_created_at
                                    }["CustomerDetails.useEffect.fetchData.pauseArr"]);
                                    if (pauseArr[pauseArr.length - 1]?.entity_attributes_active == true) {
                                        setPauseActivatedDate(pauseArr[pauseArr.length - 1]?.entity_attributes_created_at);
                                        pauseDate = pauseArr[pauseArr.length - 1]?.entity_attributes_created_at;
                                    } else if (pauseArr[pauseArr.length - 2]?.entity_attributes_active == true) {
                                        setPauseActivatedDate(pauseArr[pauseArr.length - 2]?.entity_attributes_created_at);
                                        pauseDate = pauseArr[pauseArr.length - 2]?.entity_attributes_created_at;
                                    } else {
                                        setPauseActivatedDate(0);
                                        pauseDate = 0;
                                    }
                                } else {
                                    if (pauseActivatedArr[0]?.entity_attributes_active == true) {
                                        setPauseActivatedDate(pauseActivatedArr[0]?.entity_attributes_created_at);
                                        pauseDate = pauseActivatedArr[0]?.entity_attributes_created_at;
                                    } else {
                                        setPauseActivatedDate(0);
                                        pauseDate = 0;
                                    }
                                }
                            }
                            if (pauseDate > 0 && pauseSurveyDate > 0) {
                                let dateDiff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(pauseDate).diff((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(pauseSurveyDate), 'days', true);
                                if (dateDiff > 35) {
                                    setPendingPauseDate(0);
                                }
                            }
                        }
                        const showWinbackResult = {
                            "CustomerDetails.useEffect.fetchData.showWinbackResult": async ()=>{
                                const showWinback = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getWinbackAttemptInfo"])(customerid);
                                if (showWinback.success == true) {
                                    setWinbackAttemptObj(showWinback.data[0]);
                                    let last_winback_date = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(showWinback?.data[0]?.decision_date).format("YYYY-MM-DD");
                                    let eligibalmonths = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(currentDate).diff((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(last_winback_date), 'months', true);
                                    if (customerTags?.indexOf("Paused") > -1) {
                                        if (snoozedDate != null) {
                                            setWinbackEligible(false);
                                        } else {
                                            setWinbackEligible(true);
                                        }
                                    } else {
                                        if (showWinback?.data[0]?.decision == 5) {
                                            if (eligibalmonths <= 6) {
                                                setWinbackEligible(false); //hide winback button
                                                setWinbackBtnDisable(false);
                                            } else {
                                                setWinbackEligible(true); //show winback button
                                                setWinbackBtnDisable(false);
                                            }
                                        }
                                    }
                                    if (cs_tags?.indexOf("30credit") > -1) {
                                        setWinbackEligible(false);
                                    }
                                //  if(isEligible == false) {
                                //   setWinbackEligible(false)
                                //  }
                                }
                            }
                        }["CustomerDetails.useEffect.fetchData.showWinbackResult"];
                        showWinbackResult();
                    } else {
                        setCustomerError(true);
                    }
                }
            }["CustomerDetails.useEffect.fetchData"];
            fetchData();
        }
    }["CustomerDetails.useEffect"], [
        props.customerInfo?.customer_detail
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomerDetails.useEffect": ()=>{
            setReferralCode({});
            if (props.customerInfo.success && props.customerInfo.customer_detail != null) {
                if (!props.customerInfo && !props.customerInfo.customer_detail) return;
                let stripe_id = props.customerInfo.customer_detail.stripe_id;
                let customer_id = props.customerInfo.customer_detail.customer_id;
                getCustomerSubscription(stripe_id, customer_id);
                setNotificationLoader({});
            } else {
                setCustomerError(true);
            }
        }
    }["CustomerDetails.useEffect"], [
        issubscriptionCreated,
        props.customerInfo?.customer_detail
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomerDetails.useEffect": ()=>{
            let fetchDataNew = {
                "CustomerDetails.useEffect.fetchDataNew": async ()=>{
                    // setMirFlag(false)
                    setOrderTagIndex({});
                    setCustomerOrders([]);
                    // setNotificationLoader({ status: true, type: "initial_loading" })
                    if (props.customerInfo.success && props.customerInfo.customer_detail != null) {
                        if (!props.customerInfo && !props.customerInfo.customer_detail) return;
                        let customer_id = props.customerInfo.customer_detail.customer_id;
                        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getOrdersByCustomerViewId"])(customer_id);
                        if (response && response.success) {
                            await setMostRecentOrder(response.orders[0]);
                            let lastOrderName = response?.orders[0]?.orderid ? parseInt(response?.orders[0]?.orderid) + 1000 : "";
                            orderName = lastOrderName;
                            getOrderDetail();
                            // let lastOrderInfo = await getOrderDetail(lastOrderName ,dispatch)
                            // if(lastOrderInfo?.success) {
                            //   setOrderDetails(lastOrderInfo?.result)
                            //   setOrderItems(lastOrderInfo?.result?.order?.items)
                            // }
                            await handleMirTags(response.orders);
                            await setCustomerOrders(response.orders);
                        }
                    }
                }
            }["CustomerDetails.useEffect.fetchDataNew"];
            fetchDataNew();
        }
    }["CustomerDetails.useEffect"], [
        removeOrderTag,
        props.customerInfo?.customer_detail
    ]);
    const getOrderDetail = async ()=>{
        if (orderName != '') {
            let response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$orderFunction$2e$js__$5b$client$5d$__$28$ecmascript$29$__["GetOrderByName"])(orderName);
            if (response?.success && response?.result) {
                setOrderData(response.result.order);
                setCustomerData(response.result.customer);
                setOrderAddress(response.result.order_address);
                setClaimerInfo(response.result.user);
                setOrderCustomerInfo(response.result.customer);
                setOrderId(response.result.order.orderid);
                setShipmentLabelExtra(response.result?.shipment_labels_extra);
                setShipmentLabel(response.result.shipment_labels);
            }
        }
    };
    // order functions start here
    const generateOrderTag = ()=>{
        let tag = '';
        let customerTags = orderCustomerInfo?.tags?.split(',');
        let subSale = false;
        let subRent = false;
        let nonSubSale = false;
        let sameRent = false;
        let sameSale = false;
        let sameNonSubSale = false;
        customerTags?.filter((item)=>{
            if (item.includes('SubRent')) {
                subRent = true;
                sameRent = parseInt(item.split(':')[1]) == orderId;
            }
            if (item.includes('SubSale')) {
                subSale = true;
                sameSale = parseInt(item.split(':')[1]) == orderId;
            }
            if (item.includes('NonSubSale')) {
                nonSubSale = true;
                sameNonSubSale = parseInt(item.split(':')[1]) == orderId;
            }
        });
        if (subSale && sameSale) {
            tag = 'First Sale';
        }
        if (subRent && sameRent && subSale && sameSale || subRent && sameRent) {
            tag = 'NEW';
        }
        if (nonSubSale && sameNonSubSale) {
            tag = 'FIRST';
        }
        return tag;
    };
    const identifyBirthDay = ()=>{
        let tag = '';
        let customerTags = orderCustomerInfo?.tags?.split(',');
        customerTags?.filter((item)=>{
            if (item.includes('Birthday:')) {
                let birthday = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(item.split(':')[1].split('/')[0] + '/' + item.split(':')[1].split('/')[1]);
                let today = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])().format('MM/DD'));
                let diff = birthday.diff(today, 'days');
                diff = Math.abs(diff);
                if (diff >= 0 && diff <= 10) {
                    tag = 'BIRTHDAY CARD';
                }
            }
        });
        return tag;
    };
    const checkOrderStatus = ()=>{
        let status = '0';
        let orderItems = orderData?.items;
        if (orderData) {
            for(let x in orderItems){
                if (orderItems[x].barcodeid != '0' || orderItems[x].barcode_status == '1') {
                    status = '1';
                    break;
                }
            }
        }
        return status;
    };
    const getChargeAmountAndTax = async (amount)=>{
        let payload = {
            customer_email: customerInfo?.email,
            amount: amount
        };
        if (customerStatementDescription == 'manual_direct_purchase' || customerStatementDescription == 'manual_mir_charge') {
            payload['is_rent'] = false;
        }
        if (chargeAmount > 0 && customerStatementDescription != "manual_shipping_charge" && customerStatementDescription != "manual_additional_shipment" && customerStatementDescription != '0' && customerStatementDescription != '') {
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getTexForOrderWithEmail"])(payload);
            if (response && response.success) setTaxedChargeAmount(response?.result?.amount_to_collect);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomerDetails.useEffect": ()=>{
            if (chargeTaxDebounceTimeout) {
                clearTimeout(chargeTaxDebounceTimeout);
            }
            const newTimeout = setTimeout({
                "CustomerDetails.useEffect.newTimeout": ()=>{
                    getChargeAmountAndTax(chargeAmount);
                }
            }["CustomerDetails.useEffect.newTimeout"], 1000);
            setChargeTaxDebounceTimeout(newTimeout);
            return ({
                "CustomerDetails.useEffect": ()=>{
                    clearTimeout(newTimeout);
                }
            })["CustomerDetails.useEffect"];
        }
    }["CustomerDetails.useEffect"], [
        chargeAmount,
        customerStatementDescription
    ]);
    let getCustomerAttributes = async (customer_id)=>{
        const resp = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getEntityAttribute"])(customer_id, 'customer');
        if (resp.success) {
            const data = resp._attributeReturnModel.attributes;
            if (data) {
                return data;
            }
        }
    };
    let getEntityID = async (customer_id)=>{
        const resp = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getEntityAttribute"])(customer_id, 'customer');
        if (resp.success) {
            const data = resp._attributeReturnModel.attributes;
            let snooooze = null;
            if (data) {
                data.forEach((item)=>{
                    if (item.name == "Paused Scheduled") {
                        // const snoooze_date = item.attributeValues[0].value
                        // snooooze = snoooze_date
                        if (item?.attributeValues?.length > 0) {
                            item?.attributeValues?.map((v)=>{
                                if (v?.valueDefination == 'Paused Scheduled Date') {
                                    snooooze = v.value;
                                }
                            });
                        }
                    }
                });
            }
            setSnoozedDate(snooooze);
        }
    };
    let getEntityDataForPauseRecords = async (customerid)=>{
        const getCustomerStatusResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getCustomerStatus"])(customerid);
        if (getCustomerStatusResult.sucess) {
            let snoozedAttr = [];
            let pauseSurveySubmittedArr = [];
            let pauseActivatedArr = [];
            let pauseDate = 0;
            let pauseSurveyDate = 0;
            if (getCustomerStatusResult?.response?.length > 0) {
                getCustomerStatusResult?.response?.map((item, index)=>{
                    if (item.attributes_name == 'Snooze-Email-Trigger') {
                        snoozedAttr.push(item);
                    }
                    if (item.attributes_name == 'PendingPause') {
                        pauseSurveySubmittedArr.push(item);
                    }
                    if (item.attributes_name == 'Paused') {
                        pauseActivatedArr.push(item);
                    }
                });
            }
            if (snoozedAttr?.length > 0) {
                if (snoozedAttr?.length > 1) {
                    let sortedArr = snoozedAttr.sort((a, b)=>a.entity_attributes_created_at - b.entity_attributes_created_at);
                    if (sortedArr[sortedArr.length - 1]?.entity_attributes_active == true) {
                        setSnoozedOnDate(sortedArr[sortedArr.length - 1]?.entity_attributes_created_at);
                    } else {
                        setSnoozedOnDate(0);
                    }
                } else {
                    if (snoozedAttr[0]?.entity_attributes_active == true) {
                        setSnoozedOnDate(snoozedAttr[0]?.entity_attributes_created_at);
                    } else {
                        setSnoozedOnDate(0);
                    }
                }
            }
            if (pauseSurveySubmittedArr?.length > 0) {
                if (pauseSurveySubmittedArr?.length > 1) {
                    let pauseSurveyArr = pauseSurveySubmittedArr.sort((a, b)=>a.entity_attributes_created_at - b.entity_attributes_created_at);
                    if (pauseSurveyArr[pauseSurveyArr.length - 1]?.entity_attributes_active == true) {
                        setPendingPauseDate(pauseSurveyArr[pauseSurveyArr.length - 1]?.entity_attributes_created_at);
                        pauseSurveyDate = pauseSurveyArr[pauseSurveyArr.length - 1]?.entity_attributes_created_at;
                    } else if (pauseSurveyArr[pauseSurveyArr.length - 2]?.entity_attributes_active == true) {
                        setPendingPauseDate(pauseSurveyArr[pauseSurveyArr.length - 2]?.entity_attributes_created_at);
                        pauseSurveyDate = pauseSurveyArr[pauseSurveyArr.length - 2]?.entity_attributes_created_at;
                    } else {
                        setPendingPauseDate(0);
                        pauseSurveyDate = 0;
                    }
                } else {
                    if (pauseSurveySubmittedArr[0]?.entity_attributes_active == true) {
                        setPendingPauseDate(pauseSurveySubmittedArr[0]?.entity_attributes_created_at);
                        pauseSurveyDate = pauseSurveySubmittedArr[0]?.entity_attributes_created_at;
                    } else {
                        setPendingPauseDate(0);
                        pauseSurveyDate = 0;
                    }
                }
            }
            if (pauseActivatedArr?.length > 0) {
                if (pauseActivatedArr?.length > 1) {
                    let pauseArr = pauseActivatedArr.sort((a, b)=>a.entity_attributes_created_at - b.entity_attributes_created_at);
                    if (pauseArr[pauseArr.length - 1]?.entity_attributes_active == true) {
                        setPauseActivatedDate(pauseArr[pauseArr.length - 1]?.entity_attributes_created_at);
                        pauseDate = pauseArr[pauseArr.length - 1]?.entity_attributes_created_at;
                    } else if (pauseArr[pauseArr.length - 2]?.entity_attributes_active == true) {
                        setPauseActivatedDate(pauseArr[pauseArr.length - 2]?.entity_attributes_created_at);
                        pauseDate = pauseArr[pauseArr.length - 2]?.entity_attributes_created_at;
                    } else {
                        setPauseActivatedDate(0);
                        pauseDate = 0;
                    }
                } else {
                    if (pauseActivatedArr[0]?.entity_attributes_active == true) {
                        setPauseActivatedDate(pauseActivatedArr[0]?.entity_attributes_created_at);
                        pauseDate = pauseActivatedArr[0]?.entity_attributes_created_at;
                    } else {
                        setPauseActivatedDate(0);
                        pauseDate = 0;
                    }
                }
            }
            if (pauseDate > 0 && pauseSurveyDate > 0) {
                let dateDiff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(pauseDate).diff((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(pauseSurveyDate), 'days', true);
                if (dateDiff > 35) {
                    setPendingPauseDate(0);
                }
            }
        }
    };
    const CustomerStripePayment = async (cus_stripe_id, customer_id, fpPlans)=>{
        let amount = 0;
        let orderResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getOrdersByCustomerId"])(customer_id);
        setPaymentNotification({
            type: "loading",
            msg: '',
            status: true
        });
        {}
        let response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getCustomerStripePayment"])(cus_stripe_id, customer_id);
        if (response && response.success) {
            if (response?.paymentInfo?.charges) {
                setCustomerPaymentChargesList(response?.paymentInfo?.charges);
            }
            let descriptionArr = {};
            let updated;
            {}
            if (response?.paymentInfo?.stripeCharges?.data) {
                updated = response?.paymentInfo?.stripeCharges?.data;
            } else {
                {}
                updated = response?.paymentInfo?.stripeCharges;
            }
            updated.map(async (item, ind)=>{
                if (updated.length > 0) {
                    if (item.description?.indexOf("Purchased Item") > -1) {
                        amount += item.amount;
                    }
                    setPurchaseSpend(amount / 100);
                }
                if (item.description != null && item.description.indexOf('Invoice ') == 0 && item.invoice != null) {
                    let response = await getInvoiceDescription(item.invoice, fpPlans);
                    if (response != '') {
                        descriptionArr[item.id] = response;
                    }
                } else if (item.description != null && item.description.indexOf('FashionPass Purchase') == 0) {
                    await orderResponse?.orders?.forEach((orderItem)=>{
                        if (item.id == orderItem?.charge_id && !item.description?.includes(parseInt(orderItem.orderid) + 1000) && (orderItem.order_type == "FP/Sale" || orderItem.order_type == "Sale")) {
                            descriptionArr[item.id] = item.description + ' Order #' + (parseInt(orderItem.orderid) + 1000);
                        } else if (item.status == 'failed') {
                            descriptionArr[item.id] = item.description;
                        }
                    });
                } else {
                    descriptionArr[item.id] = item.description;
                }
            });
            let paymentResponse;
            {}
            if (response?.paymentInfo?.stripeCharges?.data) {
                paymentResponse = response?.paymentInfo?.stripeCharges?.data;
            } else {
                {}
                paymentResponse = response?.paymentInfo?.stripeCharges;
            }
            await setPaymentDesc(descriptionArr);
            setTimeout(()=>{
                setCustomerPaymentList(paymentResponse), setPaymentNotification({
                    type: "loading",
                    msg: '',
                    status: false
                });
            }, 1000);
        } else {
            setCustomerPaymentList([]);
            // setNotification({ msg: 'No Records Available ', type: "initial_loading_payments" })
            setPaymentNotification({
                type: "initial_loading_payments",
                msg: 'No Records Available',
                status: true
            });
        }
    };
    const handleMirTags = async (orderinfo)=>{
        orderinfo.map((order)=>{
            let orderTags = order?.order_tags?.split(',');
            if (orderTags?.length > 0 && orderTags?.indexOf('sales_payment_failed') > -1) {
                setMirFlag(true);
            }
        });
    };
    const getrefferalCodeDetails = async (customer_id, stripe_id)=>{
        // setLoader(true)
        setNotificationLoader({
            status: true,
            type: 'pause_loader'
        });
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getReferralCodeAndPausedDate"])(customer_id, stripe_id);
        if (response && response.success) {
            let c_details = response.result;
            if (response?.result) {
                setNotificationLoader({
                    status: false,
                    type: 'pause_loader'
                });
                setReferralCode({
                    referralDetals: c_details.subs_paused_details,
                    planName: c_details.membership,
                    pendingPauseDetails: c_details.subs_pending_Pause_details
                });
                setCustomerReferral({
                    code: c_details.subs_paused_details[0]?.coupon_id,
                    count: c_details.subs_paused_details[0]?.referral_count
                });
            }
        } else {
            setNotificationLoader({
                status: false,
                type: 'pause_loader'
            });
            setReferralCode({});
        }
    };
    const handleToolTip = (id)=>{
        if (failedMessageTooltip[id] != undefined) {
            setFailedMessageTooltip({});
            return;
        }
        setFailedMessageTooltip({
            [id]: true
        });
    };
    const upgradedPlanList = async (subscriptionDetails, fpPlans)=>{
        let trendSetterLagecy = fpPlans[1];
        let wanderlustLagecy = fpPlans[2];
        let trendsetter = fpPlans[4];
        let wanderlust = fpPlans[5];
        if (subscriptionDetails?.membership) {
            if (subscriptionDetails.membership === 'Socialite Legacy') {
                setUpgradedPlans([
                    trendSetterLagecy,
                    wanderlustLagecy
                ]);
            } else if (subscriptionDetails.membership === 'Trendsetter Legacy') {
                setUpgradedPlans([
                    wanderlustLagecy
                ]);
            } else if (subscriptionDetails.membership === 'Socialite New') {
                setUpgradedPlans([
                    trendsetter,
                    wanderlust
                ]);
            } else if (subscriptionDetails.membership === 'Trendsetter New') {
                setUpgradedPlans([
                    wanderlust
                ]);
            }
        }
    };
    const getCustomerSubscription = async (cus_stripe_id, customer_id)=>{
        setLoader(true);
        let response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getCustomerStripeSubscription"])(cus_stripe_id);
        let fpPlans = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getFpPLansFromSettings"])(systemSettings, dispatch);
        setFpPlanList(fpPlans);
        if (response && response.success) {
            setCustomerAccCreditFromMetaData(response?.subscriptionInfo?.[0]?.metadata?.account_credit);
            await setCustomerSubscription(response.subscriptionInfo);
            handleNewSubscriber(response?.subscriptionInfo?.[0]?.created);
            await getrefferalCodeDetails(customer_id, cus_stripe_id);
            let planName = "Fashionpass Plans";
            let planId = response.subscriptionInfo[0]?.plan.id;
            const planResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getCustomerSubscriptionPlanDetails"])(customer_id, planId, planName);
            if (planResponse && planResponse?.success) {
                setLoader(false);
                if (planId) setCustomerReferral({
                    code: planResponse.result?.referrel_code,
                    count: planResponse.result?.referrel_count
                });
                await upgradedPlanList(planResponse.result, fpPlans);
                await setSubscriptionDetails([
                    planResponse.result
                ]);
                await CustomerStripePayment(cus_stripe_id, customer_id, fpPlans);
            } else {
                setLoader(false);
            }
        } else {
            setLoader(false);
            setSubscriptionDetails([]);
        }
    };
    const getAllAddresses = async (customer_id)=>{
        let response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getCustomerAddresses"])(customer_id);
        if (response && response.success) {
            await setCustomerAllAddresses(response.shipping_address);
            if (response.shipping_address.length > 0) {
                let defaultAddress = response.shipping_address.filter((address, ind)=>{
                    if (address.default_address && address.is_shipping) {
                        return address;
                    }
                });
                setCustomerDefaultAddress(defaultAddress);
            }
        }
    };
    let updateAdditionalItemHandler = async ()=>{
        setNotificationLoader({
            status: true,
            type: 'additional_item'
        });
        let check = true;
        let obj = {
            customer_id: customerInfo.customer_id,
            tags_to_add: '',
            tags_to_remove: ''
        };
        if (additionCount == additionalItemCount) {
            check = false;
        } else if (additionalItemCount == 0) {
            obj.tags_to_remove = "AdditionalItem" + additionCount;
        } else {
            obj.tags_to_add = "AdditionalItem" + additionalItemCount;
            obj.tags_to_remove = "AdditionalItem" + additionCount;
        }
        if (!check) {
            setAddtionalItemCheck(false);
            setNotificationLoader({
                status: false,
                type: 'additional_item'
            });
        } else if (!isNaN(additionalItemCount) && additionalItemReason != '') {
            let payload = {
                "customer_id": customerInfo.customer_id,
                "tags_to_add": obj.tags_to_add,
                "tags_to_remove": obj.tags_to_remove,
                "reason": additionalItemReason
            };
            let additionalItemResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["updateAdditionalItemTagBanjo"])(payload);
            if (additionalItemResponse && additionalItemResponse.success) {
                setAdditionalItemLogs(additionalItemResponse.result);
                let response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["updateCustomerTags"])(obj);
                if (response && response.success) {
                    additionCount = additionalItemCount;
                    setCustomerTags(response?.tags);
                    setAddtionalItemCheck(false);
                    setNotificationLoader({
                        status: false,
                        type: 'additional_item'
                    });
                    setNotification({
                        msg: 'Update Was Successful',
                        type: "additional_item",
                        clrcls: 'success'
                    });
                    setTimeout(()=>setNotification({}), 3000);
                    setAdditionalItemReason('');
                }
            } else {
                setNotification({
                    msg: additionalItemResponse.message,
                    type: "additional_item",
                    clrcls: 'danger'
                });
                setTimeout(()=>setNotification({}), 3000);
            }
        } else {
            setNotificationLoader({
                status: false,
                type: 'additional_item'
            });
            setNotification({
                msg: 'Please Add Additional Item or Valid Reason',
                type: "additional_item",
                clrcls: 'danger'
            });
            setTimeout(()=>setNotification({}), 3000);
        }
    };
    const handlecreditInputBlur = (e)=>{
        let leftValue = '';
        let rightValue = '';
        let newVal = '';
        leftValue = e.target.value.split('.')[0];
        rightValue = e.target.value.split('.')[1];
        if (!rightValue && rightValue === undefined) {
            setCustomerCredit(`${leftValue}.00`);
        }
        if (!leftValue || leftValue === undefined) {
            setCustomerCredit(`0.${rightValue}`);
        } else if (rightValue && rightValue.length === 1) {
            setCustomerCredit(`${leftValue}.${rightValue}0`);
        }
        if (leftValue === undefined && rightValue === undefined) {
            setCustomerCredit(`0.00`);
        }
        if (e.target.value.charAt(0) == '0' && leftValue && leftValue.length > 1) {
            newVal = e.target.value.slice(1);
            setCustomerCredit(newVal);
        }
    };
    const handleCraditAmount = (e)=>{
        const regexAmount = /^(?!.*--)(-?\d{0,6}(\.\d{0,2})?|0(\.\d{0,2})?|-?\d{1,6}(\.\d{0,2})?)$/;
        if (regexAmount.test(e.target.value)) {
            setCustomerCredit(e.target.value);
        }
    };
    const handleCustomerCreditChange = (event)=>{
        let currentIndex = event.target.value.split(' ')[1];
        setCustomerCreditReason(customerAllcreditOption[currentIndex].reason);
        setCustomerCreditType(customerAllcreditOption[currentIndex].name);
        if (typeof customerAllcreditOption[currentIndex].points != 'string') {
            setCustomerCredit(customerAllcreditOption[currentIndex].points.toFixed(2));
        } else {
            if (subscriptionDetails && subscriptionDetails[0] && subscriptionDetails[0]?.membership != '') {
                if (subscriptionDetails[0]?.membership === 'Trendsetter New' || subscriptionDetails[0]?.membership === 'Trendsetter') {
                    let oldAmount = customerAllcreditOption[currentIndex].points;
                    let amount = customerAllcreditOption[currentIndex].name.split('days')[0];
                    let finalAmount = parseInt(amount) + parseInt(oldAmount);
                    setCustomerCredit(parseFloat(finalAmount).toFixed(2));
                } else if (subscriptionDetails[0]?.membership === 'Wanderlust New' || subscriptionDetails[0]?.membership === 'Wanderlust') {
                    let oldAmount = customerAllcreditOption[currentIndex].points;
                    let amount = customerAllcreditOption[currentIndex].name.split('days')[0];
                    let finalAmount = parseInt(amount) + parseInt(amount) + parseInt(oldAmount);
                    setCustomerCredit(parseFloat(finalAmount).toFixed(2));
                } else {
                    setCustomerCredit(customerAllcreditOption[currentIndex].points);
                }
            } else {
                setCustomerCredit(0);
            }
        }
    };
    const handleCustomerAccountCreditBanjo = async (payload)=>{
        setNotificationLoader({
            status: true,
            type: 'customerCredit'
        });
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["AddAccountCreditsBanjo"])(payload);
        if (response && response.success) {
            if (props.ticketId) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["addTagToZendeskTicket"])({
                    ticketId: props.ticketId,
                    tags: [
                        'credit_issued'
                    ]
                });
            }
            setNotificationLoader({
                statue: false,
                type: 'customerCredit'
            });
            let customerCredit = '';
            if (payload.credit_type == 'Remove') {
                customerCredit = parseFloat(customerInfo.customerCredit) - parseFloat(payload.amount);
            } else {
                customerCredit = parseFloat(customerInfo.customerCredit) + parseFloat(payload.amount);
            }
            setCustomerInfo({
                ...customerInfo,
                customerCredit
            });
            setNotification({
                msg: "Updated Successfully",
                type: "customerCredit",
                clrcls: "success"
            });
            setCustomerCreditType('');
            setCustomerCreditReason('');
            setTimeout(()=>{
                setNotification({}), setOpenCustomerAccountEditToggle(false);
            }, 2000);
        }
    };
    const handleCreditUpdateEvent = async ()=>{
        let isAllowed = true;
        if (customerCreditType === "Remove") {
            let allowedAmount = parseFloat(customerInfo.customerCredit) - parseFloat(customerCredit) < 0;
            if (allowedAmount) {
                isAllowed = false;
            }
        }
        let newCreditValue = customerCredit;
        if (customerCredit != '' && customerCredit != '0.00' && customerCreditReason != '' && parseFloat(customerInfo.customerCredit) + parseFloat(newCreditValue) >= 0 && isAllowed) {
            if (customerCreditType === "Remove" || customerCreditType === 'Add') {
                newCreditValue = customerCredit.replace('-', '');
            } else {
                newCreditValue = customerCredit;
            }
            let creditInfo = {
                "customer_id": customerInfo.customer_id,
                "credit_type": customerCreditType,
                "amount": newCreditValue,
                "reason": customerCreditReason,
                "user": banjoLoginUser.banjoUser.user_name,
                "is_zendeskApp": 1
            };
            if (customerCredit >= 100) {
                setOpenCustomerCreditpopup(!openCustomerCreditpopup);
                setCreditPayload(creditInfo);
            } else {
                await handleCustomerAccountCreditBanjo(creditInfo);
            }
        } else {
            setNotification({
                msg: 'Please add valid amount or Reason',
                type: "customerCredit",
                clrcls: "danger"
            });
            setTimeout(()=>{
                setNotification({});
            }, 2000);
        }
    };
    const handleAdditionReason = (e)=>{
        let value = e.target.value;
        setAdditionalItemReason(value);
    };
    const getInvoiceDescription = async (id, fpPlans)=>{
        let obj = {};
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getInvoiceLineItem"])(id);
        if (response && response.success) {
            let linesArr = response?.invoiceResponse?.lines?.data;
            if (linesArr && linesArr.length > 0) {
                linesArr.forEach((line_arr)=>{
                    if (line_arr.description == "Tax") {
                        if (line_arr.description != '' && line_arr.description != undefined && line_arr.description != null) {
                            obj.tax = line_arr.description;
                            obj.invoice_id = id;
                        }
                    }
                    if (line_arr.subscription?.indexOf('sub_') == 0) {
                        fpPlans.forEach((plan)=>{
                            if (plan.planStripeId == line_arr.plan.id) {
                                obj.plan = plan.planName;
                            }
                        });
                    }
                    obj.invoice_id = id;
                });
            }
            if (obj.invoice_id != '') {
                if (obj.tax != undefined) {
                    if (obj.plan == "Gold") {
                        return "Socialite" + ' monthly billing + ' + obj.tax;
                    } else if (obj.plan == "Platinum") {
                        return "Trendsetter" + ' monthly billing + ' + obj.tax;
                    } else {
                        return obj.plan + ' monthly billing + ' + obj.tax;
                    }
                } else {
                    return obj.plan + ' monthly billing';
                }
            }
        } else {
            return '';
        }
    };
    const handleLastRefundAmount = ()=>{
        let record = customerPaymentList?.find((item)=>{
            return item.amount > item.amount_refunded && item?.status != 'failed';
        });
        if (record != undefined) return record;
    };
    const isTransferedItemAccepted = async (value)=>{
        if (value) {
            setTransferedItemPopup(false);
            if (subsCancelReason.length == 0) {
                setSubsCancelErr(true);
                setLoader(false);
                setNotificationLoader(false);
                setTimeout(()=>{
                    setSubsCancelErr(false);
                }, 3000);
                return;
            }
            let oldPlan = '';
            let planName = subscriptionDetails[0].membership;
            if (planName == 'Socialite Legacy') {
                oldPlan = "SOCIALITE";
            } else if (planName == 'Trendsetter Legacy') {
                oldPlan = "TRENDSETTER";
            } else if (planName == 'Wanderlust Legacy') {
                oldPlan = "WANDERLUST";
            } else if (planName == 'Socialite New') {
                oldPlan = 'SOCIALITE';
            } else if (planName == 'Trendsetter New') {
                oldPlan = 'TRENDSETTER';
            } else if (planName == 'Wanderlust New') {
                oldPlan = 'WANDERLUST';
            } else if (planName == 'FashionPass') {
                oldPlan = 'FASHIONPASS';
            }
            let refundRow = await handleLastRefundAmount();
            subscriptionPayload.customer_id = customerInfo.customer_id;
            subscriptionPayload.selected_option = accountStatus;
            subscriptionPayload.isRefund = refundLastPaymentStatus;
            subscriptionPayload.refundAmount = refundLastPaymentStatus ? refundRow?.amount / 100 : 0;
            subscriptionPayload.stripeId = customerInfo.stripe_id;
            subscriptionPayload.chargeId = refundRow?.id;
            subscriptionPayload.reason = '', subscriptionPayload.plan_name = oldPlan, subscriptionPayload.fp_plan = 'Fashionpass Plans';
            subscriptionPayload.getFromDb = false;
            subscriptionPayload.email_status = emailPauseStatus;
            subscriptionPayload.subscription_id = customerSubscription[0]?.id;
            subscriptionPayload.close_invoice = toDoWithFailingInvoices == 'Close all failing invoices to clear declining customer' ? true : false;
            if (selectedSubscriptionOption == 2) {
                subscriptionPayload.snoozeDate = selectedSnoozeDateBackend;
                subscriptionPayload.customDate = isCustomeSnoozeDate;
            }
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["updateCustomerSubscription"])(subscriptionPayload);
            if (response && response.success) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["updateCustomerMembership"])(customerEmail, statusObj[klayvioStatus]);
                let customerTags = response.subscriptionInfo.tags;
                setNotificationLoader({
                    status: false,
                    type: 'subscription_paused'
                });
                setSubscriptionDetails({});
                let updatedCustomerInfo = {
                    ...customerInfo
                };
                updatedCustomerInfo.status_tag = 'Paused';
                // setSubscriptionTags(accountStatus)
                setCustomerInfo(updatedCustomerInfo);
                setCustomerTags(customerTags);
                setIssubscriptionCreated(!issubscriptionCreated);
                setUpdateSubsciption(!updateSubscription);
                setSelectedSnoozeDateBackend(null);
                setIsCustomeSnoozeDate(false);
                selectedSnoozeRadioOption = -1;
                setSelectedSubscriptionOption(0);
                if (selectedSubscriptionOption == 2) {
                    setSubscriptionTags(accountStatus);
                    setCustomerAccStatus(accountStatus);
                } else {
                    setSubscriptionTags(accountStatus + '_1');
                    setCustomerAccStatus(accountStatus + '_1');
                }
                /////////////////////Manual Cancel  Work///////////////////////////
                let manualCancelPayload = {
                    customer_id: customerInfo?.customer_id,
                    email: customerInfo?.email,
                    user_id: banjoUser?.banjoUser?.userid,
                    toaddattribute: [
                        toDoWithFailingInvoices == "leave failing invoices so customer has to reconcile before using service again" ? `DecliningCancel: ${subsCancelReason}` : `Manually Cancelled: ${subsCancelReason}`
                    ]
                };
                const manualCancel = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["addCustomereManualCancel"])(manualCancelPayload);
                if (manualCancel.success) {
                    setSubsCancelReason('');
                    setTodoWithFailingInvoices('');
                }
                getEntityID(customerInfo.customer_id);
            //////////////////////////////////////////////////
            } else {
                setNotificationLoader({
                    status: false,
                    type: 'subscription_paused'
                });
                if (response.message == "Subscription failed to Update becuase MIR charge faield" && response.subscriptionInfo == null) {
                    setMirChargeFailed(true);
                    setTransferedItemPopup(true);
                    setTimeout(()=>{
                        setTransferedItemPopup(false);
                        setMirChargeFailed(false);
                    }, 4000);
                }
            }
        }
    };
    const handleUpdateSubscription = async (val)=>{
        if (snoozedDate && customerTags?.indexOf("Paused") > -1 && selectedSubscriptionOption == 4) {
            setNotificationLoader({
                status: true,
                type: 'subscription_paused'
            });
            let klavio_json = {
                "data": {
                    "type": "event",
                    "attributes": {
                        "profile": {
                            "email": props.customerInfo.customer_detail.email
                        },
                        "metric": {
                            "name": "Cancel Activated"
                        },
                        "properties": {
                            "name": props.customerInfo.customer_detail.first_name + props.customerInfo.customer_detail.last_name
                        }
                    }
                }
            };
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["klavioEventEmail"])(klavio_json, customerInfo.customer_id, emailPauseStatus ? 1 : 0);
            } catch (error) {
                console.log(error);
            }
            setEmailPauseStatus(false);
            setLoader(true);
            try {
                let response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["CancelCustomerSubscription"])(props?.customerInfo?.customer_detail?.stripe_id, subsCancelReason);
                if (response?.success) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["updateCustomerMembership"])(customerEmail, statusObj[klayvioStatus]);
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["updateCustomerEntityAttributePauseSchdule"])(props.customerInfo.customer_detail.customer_id, null, true);
                    // await AddRemoveAttributeSnoozeCustomer(props.customerInfo.customer_detail.customer_id, [], ['Snoozed-Customer'])
                    setNotificationLoader({
                        status: false,
                        type: 'pause_loader'
                    });
                    setUpdateSubsciption(!updateSubscription);
                    setLoader(false);
                    setSnoozedDate(0);
                    setSubscriptionTags("Paused_1");
                    setCustomerAccStatus("Paused_1");
                } else {
                    setLoader(false);
                }
            } catch (error) {
                console.log(error);
                // setNotificationLoader({ status: false, type: 'pause_loader' })
                // setUpdateSubsciption(!updateSubscription)
                setLoader(false);
            }
        } else {
            setSelectSnoozeDateError('');
            if ((selectedSubscriptionOption == 2 || selectedSubscriptionOption == 3) && selectedSnoozeDateBackend == null) {
                setSelectSnoozeDateError('Select Date');
                setTimeout(()=>{
                    setSelectSnoozeDateError('');
                }, 3000);
                return;
            }
            setNotificationLoader({
                status: true,
                type: 'subscription_paused'
            });
            let customerTags = props.customerInfo.customer_detail.tags;
            if (accountStatus == 'Paused') {
                if (customerTags.match(/transferitem\d*/)) {
                    setTransferedItemPopup(true);
                }
            }
            if (accountStatus === 'Paused') {
                if (!customerTags.match(/transferitem\d*/)) {
                    if (subsCancelReason.length == 0) {
                        setSubsCancelErr(true);
                        setLoader(false);
                        setNotificationLoader(false);
                        setTimeout(()=>{
                            setSubsCancelErr(false);
                        }, 3000);
                        return;
                    }
                    let oldPlan = '';
                    let planName = subscriptionDetails[0].membership;
                    if (planName == 'Socialite Legacy') {
                        oldPlan = "SOCIALITE";
                    } else if (planName == 'Trendsetter Legacy') {
                        oldPlan = "TRENDSETTER";
                    } else if (planName == 'Wanderlust Legacy') {
                        oldPlan = "WANDERLUST";
                    } else if (planName == 'Socialite New') {
                        oldPlan = 'SOCIALITE';
                    } else if (planName == 'Trendsetter New') {
                        oldPlan = 'TRENDSETTER';
                    } else if (planName == 'Wanderlust New') {
                        oldPlan = 'WANDERLUST';
                    } else if (planName == 'FashionPass') {
                        oldPlan = 'FASHIONPASS';
                    }
                    let refundRow = await handleLastRefundAmount();
                    subscriptionPayload.customer_id = customerInfo.customer_id;
                    subscriptionPayload.selected_option = accountStatus;
                    subscriptionPayload.isRefund = refundLastPaymentStatus;
                    subscriptionPayload.refundAmount = refundLastPaymentStatus ? refundRow?.amount / 100 : 0;
                    subscriptionPayload.stripeId = customerInfo.stripe_id;
                    subscriptionPayload.chargeId = refundRow?.id;
                    subscriptionPayload.reason = '', subscriptionPayload.plan_name = oldPlan, subscriptionPayload.fp_plan = 'Fashionpass Plans';
                    subscriptionPayload.getFromDb = false;
                    subscriptionPayload.email_status = emailPauseStatus;
                    subscriptionPayload.subscription_id = customerSubscription[0]?.id;
                    subscriptionPayload.close_invoice = toDoWithFailingInvoices == 'Close all failing invoices to clear declining customer' ? true : false;
                    subscriptionPayload.customer_credit = customerAccCreditFromMetaData;
                    if (selectedSubscriptionOption == 2) {
                        subscriptionPayload.snoozeDate = selectedSnoozeDateBackend;
                        subscriptionPayload.customDate = isCustomeSnoozeDate;
                    }
                    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["updateCustomerSubscription"])(subscriptionPayload);
                    if (response && response.success) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["updateCustomerMembership"])(customerEmail, statusObj[klayvioStatus]);
                        let customerTags = response.subscriptionInfo.tags;
                        setNotificationLoader({
                            status: false,
                            type: 'subscription_paused'
                        });
                        setSubscriptionDetails({});
                        let updatedCustomerInfo = {
                            ...customerInfo
                        };
                        updatedCustomerInfo.status_tag = 'Paused';
                        // setSubscriptionTags(accountStatus)
                        setCustomerInfo(updatedCustomerInfo);
                        setCustomerTags(customerTags);
                        setIssubscriptionCreated(!issubscriptionCreated);
                        setUpdateSubsciption(!updateSubscription);
                        setSelectedSnoozeDateBackend(null);
                        setIsCustomeSnoozeDate(false);
                        selectedSnoozeRadioOption = -1;
                        setSelectedSubscriptionOption(0);
                        if (selectedSubscriptionOption == 2) {
                            setSubscriptionTags(accountStatus);
                            setCustomerAccStatus(accountStatus);
                        } else {
                            setSubscriptionTags(accountStatus + '_1');
                            setCustomerAccStatus(accountStatus + '_1');
                        }
                        /////////////////////Manual Cancel  Work///////////////////////////
                        let manualCancelPayload = {
                            customer_id: customerInfo?.customer_id,
                            email: customerInfo?.email,
                            user_id: banjoUser?.banjoUser?.userid,
                            toaddattribute: [
                                toDoWithFailingInvoices == "leave failing invoices so customer has to reconcile before using service again" ? `DecliningCancel: ${subsCancelReason}` : `Manually Cancelled: ${subsCancelReason}`
                            ]
                        };
                        const manualCancel = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["addCustomereManualCancel"])(manualCancelPayload);
                        if (manualCancel.success) {
                            setSubsCancelReason('');
                            setTodoWithFailingInvoices('');
                        }
                        getEntityID(customerInfo.customer_id);
                        getEntityDataForPauseRecords(customerInfo.customer_id);
                    //////////////////////////////////////////////////
                    } else {
                        setNotificationLoader({
                            status: false,
                            type: 'subscription_paused'
                        });
                    }
                }
            } else {
                subscriptionPayload.customer_id = customerInfo.customer_id;
                subscriptionPayload.selected_option = val == "winback" ? "Active" : accountStatus;
                subscriptionPayload.fp_plan = 'Fashionpass Plans';
                if (selectedSubscriptionOption == 3) {
                    subscriptionPayload.snoozeDate = selectedSnoozeDateBackend;
                    subscriptionPayload.customDate = isCustomeSnoozeDate;
                }
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["updateCustomerSubscription"])(subscriptionPayload);
                if (response && response.success) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["updateCustomerMembership"])(customerEmail, statusObj[klayvioStatus]);
                    setNotificationLoader({
                        status: false,
                        type: 'subscription_paused'
                    });
                    let customerTags = response.subscriptionInfo.tags;
                    setCustomerTags(customerTags);
                    // setSubscriptionTags(accountStatus)
                    setIssubscriptionCreated(!issubscriptionCreated);
                    setUpdateSubsciption(!updateSubscription);
                    setSelectedSnoozeDateBackend(null);
                    setIsCustomeSnoozeDate(false);
                    selectedSnoozeRadioOption = -1;
                    setSelectedSubscriptionOption(val == "winback" ? 1 : 0);
                    if (selectedSubscriptionOption == 3) {
                        setSubscriptionTags(accountStatus);
                        setCustomerAccStatus(accountStatus);
                    } else if (val == "winback") {
                        setSubscriptionTags("Active");
                        setCustomerAccStatus("Active");
                    } else {
                        setSubscriptionTags(accountStatus + '_1');
                        setCustomerAccStatus(accountStatus + '_1');
                    }
                    getEntityID(customerInfo.customer_id);
                    getEntityDataForPauseRecords(customerInfo.customer_id);
                }
            }
        }
    };
    const handleCreateSubscriptionAction = async ()=>{
        setIsCreatingSubcription(true);
        setNotificationLoader({
            status: true,
            type: 'subscription_created'
        });
        let lineItmeId = createSubscriptionTable.taxInfo?.breakdown?.line_items[0]?.id;
        let tax = createSubscriptionTable.taxInfo.amount_to_collect;
        let stripIdNew = '';
        let stripIdOld = '';
        if (createSubscriptionTable?.planInfo.planName == "Gold" || createSubscriptionTable?.planInfo.planName == "Platinum" || createSubscriptionTable?.planInfo.planTitle === 'Wanderlust Legacy') {
            stripIdNew = '';
            stripIdOld = createSubscriptionTable?.planInfo.planStripeId;
        } else {
            stripIdNew = createSubscriptionTable?.planInfo.planStripeId;
            stripIdOld = '';
        }
        let newPayload = {
            "customerId": customerInfo.customer_id,
            "customer_stripe_id": customerInfo.stripe_id,
            "selected_plan": (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["capitalizedPlanName"])(createSubscriptionTable?.planInfo.planStripeName),
            "selected_planVM": {
                "planWebName": (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["capitalizedPlanName"])(createSubscriptionTable?.planInfo.planStripeName),
                "planStripeIdNew": stripIdNew,
                "planStripeId": stripIdNew,
                "planStripePrice": createSubscriptionTable?.planInfo.planStripePrice
            },
            "zip": customerCards[0]?.address_zip,
            "last4": customerCards[0]?.last4,
            "email": customerInfo.email,
            "send_email": sendWelcomeEmail,
            "isCredit": usedCreditForsubscription,
            "promoCode": couponCode?.code || '',
            "tax": tax,
            "taxJar_details": {
                "from_country": "US",
                "from_zip": "90248",
                "from_state": "CA",
                "from_city": "Gardena",
                "from_street": "15020 S Figueroa St",
                "to_country": "US",
                "to_zip": customerDefaultAddress[0]?.zip,
                "to_state": (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getUSStateCodeByStateName"])(customerDefaultAddress[0]?.state),
                "to_city": customerDefaultAddress[0]?.city,
                "to_street": customerDefaultAddress[0]?.address1,
                "amount": createSubscriptionTable?.planInfo?.planStripePrice,
                "shipping": 0,
                "line_items": [
                    {
                        "id": lineItmeId != '' || lineItmeId != undefined ? lineItmeId : '',
                        "name": createSubscriptionTable?.planInfo?.planName,
                        "quantity": 1,
                        "product_tax_code": 20010,
                        "unit_price": createSubscriptionTable?.planInfo?.planStripePrice,
                        "discount": couponCode?.price / 100,
                        "description": `${createSubscriptionTable?.planInfo?.planName} Sign Up ${customerEmail}`
                    }
                ]
            }
        };
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createCustomerSubscription"])(newPayload);
        if (response && response.success) {
            setSubscriptionTags('');
            setCustomerAccStatus('');
            let updatedTags = customerTags?.filter((tag)=>tag.trim() !== 'Paused' && !/^plan_name:/.test(tag.trim()));
            // const capitalizedPlanName = createSubscriptionTable?.planInfo.planStripeName.charAt(0).toUpperCase() + createSubscriptionTable?.planInfo.planStripeName.slice(1).toLowerCase();
            updatedTags.push(`plan_name:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["capitalizedPlanName"])(createSubscriptionTable?.planInfo?.planStripeName)}`);
            let updatedCustomerInfo = {
                ...customerInfo
            };
            updatedCustomerInfo.status_tag = '';
            if (usedCreditForsubscription) {
                let planTotalPrice = parseInt(newPayload?.selected_planVM.planStripePrice) + tax;
                if (planTotalPrice < updatedCustomerInfo.customerCredit) {
                    updatedCustomerInfo.customerCredit = updatedCustomerInfo.customerCredit - planTotalPrice;
                } else if (planTotalPrice > updatedCustomerInfo.customerCredit) {
                    updatedCustomerInfo.customerCredit = 0;
                }
            }
            setCustomerInfo(updatedCustomerInfo);
            setSubscriptionTags('Active');
            setCustomerAccStatus('Active');
            setNotificationLoader({
                status: false,
                type: 'subscription_created'
            });
            setNotification({
                msg: "Successfully Created",
                type: "subscription_created",
                clrcls: 'success'
            });
            setCustomerTags(updatedTags);
            setIssubscriptionCreated(!issubscriptionCreated);
            setTimeout(()=>{
                setNotification({}), setCreateSubscriptionTable({});
            }, 3000);
            setPendingPauseDate(0);
            setPauseActivatedDate(0);
            setSnoozedOnDate(0);
            setIsCreatingSubcription(false);
        } else {
            setNotificationLoader({
                status: false,
                type: 'subscription_created'
            });
            setNotification({
                msg: response.message,
                type: "subscription_created",
                clrcls: 'danger'
            });
            setTimeout(()=>{
                setNotification({}), setCreateSubscriptionTable({});
            }, 3000);
            setIsCreatingSubcription(false);
        }
    };
    const handleCustomerDays = (customerSubscription)=>{
        const startDate = customerSubscription?.current_period_start;
        const endtDate = customerSubscription?.current_period_end;
        const createdDate = customerSubscription?.created;
        const unixStartDate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(startDate).utc();
        const unixEndDate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(endtDate).utc();
        const unixCreatedDate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(createdDate).utc();
        const currentDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])().utc();
        const differenceInDays = currentDate.startOf('day').diff(unixCreatedDate.startOf('day'), 'days');
        if (differenceInDays > 89) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2 mt-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    style: {
                        color: 'blue'
                    },
                    children: `Customer for : ${Math.floor(differenceInDays / 30)} Months`
                }, void 0, false, {
                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                    lineNumber: 1818,
                    columnNumber: 41
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layouts/customerBasicInfo.js",
                lineNumber: 1818,
                columnNumber: 14
            }, this);
        } else {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: `Customer for : ${differenceInDays} days`
            }, void 0, false, {
                fileName: "[project]/components/layouts/customerBasicInfo.js",
                lineNumber: 1821,
                columnNumber: 14
            }, this);
        }
    };
    const handlePlanUpgrade = (plan)=>{
        const customerSubscriptionInfo = customerSubscription[0];
        let ammountCharged = 0;
        let diffDays = 0;
        const unixEndDate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(customerSubscriptionInfo.current_period_end).utc();
        const currentDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])().utc();
        const differenceInDays = unixEndDate.startOf('day').diff(currentDate.startOf('day'), 'days');
        let newamount = 0;
        let oldamount = 0;
        let costPerday = 0;
        let customerCredits = 0;
        if (plan.planTitle === 'Trendsetter NEW' && plan.planStripePrice === '119') {
            newamount = plan.planStripePrice * 100;
            customerCredits = parseFloat(customerInfo.customerCredit);
            oldamount = customerSubscription[0].plan.amount;
            costPerday = (newamount - oldamount) / 30;
            ammountCharged = costPerday * differenceInDays;
            ammountCharged = ammountCharged / 100;
            if (customerCredits >= ammountCharged) {
                return `Upgrade plan to Trendsetter: $${parseFloat(0).toFixed(2)}`;
            } else {
                ammountCharged = ammountCharged - customerCredits;
                return `Upgrade plan to Trendsetter: $${parseFloat(ammountCharged).toFixed(2)}`;
            }
        } else if (plan.planTitle === 'Wanderlust NEW' && plan.planStripePrice === '149') {
            newamount = plan.planStripePrice * 100;
            customerCredits = customerInfo.customerCredit;
            oldamount = customerSubscription[0].plan.amount;
            costPerday = (newamount - oldamount) / 30;
            ammountCharged = costPerday * differenceInDays;
            ammountCharged = ammountCharged / 100;
            if (customerCredits >= ammountCharged) {
                ammountCharged = 0;
                return `Upgrade plan to Wanderlust: $${parseFloat(ammountCharged).toFixed(2)}`;
            } else {
                ammountCharged = ammountCharged - customerCredits;
                return `Upgrade plan to Wanderlust: $${parseFloat(ammountCharged).toFixed(2)}`;
            }
        } else if (plan.planTitle === 'Wanderlust Legacy') {
            newamount = 13900;
            customerCredits = customerInfo.customerCredit;
            oldamount = customerSubscription[0].plan.amount;
            costPerday = (newamount - oldamount) / 30;
            ammountCharged = costPerday * differenceInDays;
            ammountCharged = ammountCharged / 100;
            if (customerCredits >= ammountCharged) {
                ammountCharged = 0;
                return `Upgrade plan to Wanderlust: $${parseFloat(ammountCharged).toFixed(2)}`;
            } else {
                ammountCharged = ammountCharged - customerCredits;
                return `Upgrade plan to Wanderlust: $${parseFloat(ammountCharged).toFixed(2)}`;
            }
        } else if (plan.planTitle === 'Trendsetter Legacy') {
            newamount = plan.planStripePrice * 100;
            customerCredits = customerInfo.customerCredit;
            oldamount = customerSubscription[0].plan.amount;
            costPerday = (newamount - oldamount) / 30;
            ammountCharged = costPerday * differenceInDays;
            ammountCharged = ammountCharged / 100;
            if (customerCredits >= ammountCharged) {
                ammountCharged = 0;
                return `Upgrade plan to Trendsetter: $${parseFloat(ammountCharged).toFixed(2)}`;
            } else {
                ammountCharged = ammountCharged - customerCredits;
                return `Upgrade plan to Trendsetter: $${parseFloat(ammountCharged).toFixed(2)}`;
            }
        }
    };
    const handleNewSubscriber = (subcriptionDate)=>{
        let currentDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])().utc();
        let subscribedDate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(subcriptionDate).utc();
        let diff = currentDate.startOf('day').diff(subscribedDate.startOf('day'), 'days');
        if (diff < 30) {
            setIsNewSubscriber(true);
        }
    };
    const checkFreeSubscriptionTags = (customerTags)=>{
        let regex = /freesubscription.*/;
        let obj = {
            isFreeTag: false,
            planName: ''
        };
        customerTags?.forEach((str)=>{
            if (regex.test(str)) {
                obj.isFreeTag = true;
                obj.planName = str.split('freesubscription')[1];
            }
        });
        return obj;
    };
    const getUpdatedTaxAmount = async (updatedAmount)=>{
        let payload = {
            customer_email: customerInfo.email,
            amount: updatedAmount
        };
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getTexForOrderWithEmail"])(payload);
        if (response && response.success) {
            return response.result;
        } else {
            return updatedAmount;
        }
    };
    const handleRemoveCoupon = async (subscriptionPlan, coupon)=>{
        setNotificationLoader({
            status: true,
            type: "remove_coupon"
        });
        let planAmount = subscriptionPlan.planInfo.planStripePrice;
        let promoPrice = coupon?.price / 100;
        if (coupon?.code != '' && promoPrice > 0) {
            let updatedAmount = planAmount + promoPrice;
            if (updatedAmount > 0) {
                let newTaxObject = await getUpdatedTaxAmount(updatedAmount);
                if (newTaxObject) {
                    let newObj = {
                        ...subscriptionPlan
                    };
                    let planInfo = {
                        ...newObj.planInfo
                    };
                    let taxInfo = {
                        ...newObj.taxInfo
                    };
                    planInfo.planStripePrice = updatedAmount;
                    taxInfo.amount_to_collect = newTaxObject.amount_to_collect;
                    newObj.planInfo = planInfo;
                    newObj.taxInfo = taxInfo;
                    setNotificationLoader({
                        status: false,
                        type: "remove_coupon"
                    });
                    setCouponCode({});
                }
            }
        }
        setCouponCode({});
    };
    const handleRunAuthCharge = async ()=>{
        let params = {
            customerId: customerInfo.customer_id,
            stripeId: customerInfo.stripe_id
        };
        let response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["runAuthChargeBanjo"])(params);
        if (response && response.success) {
            setRunAuthCharge(response.card_status);
        } else {
            setRunAuthCharge("");
        }
    };
    const processMomentDate = (date, format)=>{
        let a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(date);
        let b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])();
        let diff = a.startOf('day').diff(b.startOf('day'), 'days');
        switch(diff){
            case 0:
                return 'Today at ' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(date).format('h:mma');
            // break;
            case -1:
                return 'Yesterday at ' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(date).format('h:mma');
            // break;
            case 1:
                return 'Tomorrow at ' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(date).format('h:mma');
            // break;
            default:
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(date).format(format);
        }
    };
    function processDateForBillingUTC(timeStamp, format, nextBillingSection) {
        let date = timeStamp;
        let currentDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])().unix();
        let isTrialTag = false;
        let a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(date).utc();
        if (nextBillingSection == true && customerTags?.join()?.toLowerCase()?.indexOf('trial_at_4am') > -1) {
            isTrialTag = true;
            a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(date).add(1, 'day').utc();
        }
        let b = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(currentDate);
        let diff = a.startOf('day').diff(b.startOf('day'), 'days');
        let string = '';
        let isDdate = false;
        switch(diff){
            case 0:
                string = 'Today at ' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(timeStamp).utc().format('h:mma');
                break;
            case -1:
                string = 'Yesterday at ' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(timeStamp).utc().format('h:mma');
                break;
            case 1:
                string = 'Tomorrow at ' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(timeStamp).utc().format('h:mma');
                break;
            default:
                isDdate = true;
        }
        if (isDdate) {
            return isTrialTag == true ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(timeStamp).utc().add(1, 'day').format(format) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(timeStamp).utc().format(format);
        } else {
            return string;
        }
    }
    function processDateForBilling(timeStamp, format, nextBillingSection) {
        let date = timeStamp;
        let currentDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])().unix();
        let isTrialTag = false;
        let a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(date);
        if (nextBillingSection == true && customerTags?.join()?.toLowerCase()?.indexOf('trial_at_4am') > -1) {
            isTrialTag = true;
            a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(date).add(1, 'day');
        }
        let b = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(currentDate);
        let diff = a.startOf('day').diff(b.startOf('day'), 'days');
        let string = '';
        let isDdate = false;
        switch(diff){
            case 0:
                string = 'Today at ' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(timeStamp).format('h:mma');
                break;
            case -1:
                string = 'Yesterday at ' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(timeStamp).format('h:mma');
                break;
            case 1:
                string = 'Tomorrow at ' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(timeStamp).format('h:mma');
                break;
            default:
                isDdate = true;
        }
        if (isDdate) {
            return isTrialTag == true ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(timeStamp).add(1, 'day').format(format) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(timeStamp).format(format);
        } else {
            return string;
        }
    }
    let remainigSubDays = (subEndDate)=>{
        let days = 0;
        let subEndDateUnix = subEndDate;
        let currentDateUnix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])().unix('X');
        const diffTime = Math.abs(currentDateUnix - subEndDateUnix);
        const diffDays = Math.floor(diffTime / (60 * 60 * 24));
        days = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])().add(diffDays + 1, 'days').toDate();
        return days;
    };
    const handleSubsCancel = (event)=>{
        setSubsCancelReason(event.target.value);
    };
    const updateRestartCustomerBilling = async ()=>{
        setBtnLoader(true);
        const resp = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$customer$2f$services$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["restartCustomerBillingDate"])(customerid, {});
        const tempElem = [
            ...customerSubscription
        ];
        if (resp && resp.success) {
            tempElem[0].current_period_end = resp.data.customerBillingDateNew;
            setBtnLoader(false);
            setOpenRestartPopup(false);
            setCustomerSubscription(tempElem);
            setRestartDate(resp.data.customerRestartBillingDate);
            setBillingMsg('Customer billing date has been updated successfully');
        }
    };
    // funtion to very banjo user to show customer tags
    const isAllowedUser = (banjoLoginUser)=>{
        const allowedEmails = [
            'aakif@7ctech.com',
            'uzair@7ctech.com',
            'lauren@fashionpass.com',
            'aakif@fashionpass.com',
            'kashif@7ctech.com'
        ];
        const userEmail = banjoLoginUser?.banjoUser?.email?.toLowerCase();
        return allowedEmails.some((email)=>userEmail?.includes(email));
    };
    // Function to process customer tags
    const processCustomerTags = (customerTagsArr, customerTags, customerAttributes)=>{
        if (!customerTagsArr?.length || timeLineSortedData == undefined) return null;
        const seenAttributes = new Set();
        let latestCancelItem = null;
        let attributesNameArr = [];
        customerAttributes?.length > 0 && customerAttributes.map((attr, val)=>{
            attributesNameArr.push(attr?.name);
        });
        // Find the latest "Cancel" item
        customerTagsArr.forEach((item)=>{
            // if(attributesNameArr.indexOf(item?.attributes_name) == -1) attributesNameArr.push(item?.attributes_name)
            if (item?.attributes_name?.includes("Cancel")) {
                if (!latestCancelItem || new Date(item?.entity_attributes_created_at) > new Date(latestCancelItem?.entity_attributes_created_at)) {
                    latestCancelItem = item;
                }
            }
        });
        const startDate = customerSubscription[0]?.current_period_start;
        const endtDate = customerSubscription[0]?.current_period_end;
        const createdDate = customerSubscription[0]?.created;
        const unixCreatedDate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(createdDate).utc();
        const currentDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])().utc();
        const differenceInDays = currentDate?.startOf('day')?.diff(unixCreatedDate?.startOf('day'), 'days');
        if (differenceInDays > 89) {
            customerDaysActive = 32;
        } else {
            customerDaysActive = differenceInDays;
        }
        return customerTagsArr?.map((item, index)=>{
            if (timeLineSortedData?.length) {
                //return null if customer latest activity attr is active and older than 30days 
                if (timeLineSortedData[0]?.attributes_name == "Active Subscription" || subscriptionTags == "" || subscriptionTags?.includes("Pending")) {
                    let recentOrderDate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(customerOrders[0]?.created_at);
                    let currentDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])();
                    let diff = currentDate?.startOf('day').diff(recentOrderDate?.startOf('day'), 'days') // number of days since last order
                    ;
                    if (subscriptionTags !== "Paused" && subscriptionTags !== "Paused_1" && item?.attributes_name == "Sleeping Customer" && diff < 55) {
                        return null;
                    }
                    //check if customer is currently active then do not show any cancel tag
                    if (item?.attributes_name?.includes("Cancel")) {
                        return null;
                    }
                    //check difference in active date created and current date
                    // if (isNaN(customerDaysActive) == false && customerDaysActive > 30){
                    //   return null;
                    // }
                    // check if customer has returning subscriber tag and is activated under 30 days
                    if (item?.attributes_name == "Returning Subscriber" && isNaN(customerDaysActive) == false && customerDaysActive > 30) {
                        return null;
                    }
                    //check if customer is currently active then do not show any cancel tag
                    if (item?.attributes_name?.includes("Cancel")) {
                        return null;
                    }
                }
            }
            //if latest attribute in timeline is cancel then no active tag will appear
            if (timeLineSortedData[0]?.attributes_name?.includes("Cancelled") || subscriptionTags.includes("Paused")) {
                if (item?.attributes_name?.includes('New Subscriber') || item?.attributes_name?.includes('Returning Subscriber') || item?.attributes_name?.includes('Sleeping Customer')) {
                    return null;
                }
            }
            // Skip "Returning Subscriber" if "Paused" is in customerTags
            if (item?.attributes_name === "Returning Subscriber" && customerTags?.includes("Paused")) {
                return null;
            }
            // Skip if the attribute has already been seen or is not active
            if (seenAttributes?.has(item?.attributes_name) || !item?.entity_attributes_active) {
                return null;
            }
            // Only show the latest "cancel" item
            if (item?.attributes_name?.includes("Cancel") && item !== latestCancelItem && !item?.attributes_name?.includes("DecliningCancel")) {
                return null;
            }
            if (item?.attributes_name?.includes('New Subscriber') && (customerDaysActive > 30 || seenAttributes.has('Returning Subscriber'))) {
                return null;
            }
            if (item?.attributes_name?.includes('declining_subscriber') && (attributesNameArr?.indexOf('suspended_subscriber') > -1 || attributesNameArr?.indexOf('DecliningCancel') > -1 || attributesNameArr?.indexOf('declining_subscriber') == -1)) {
                return null;
            }
            if (item?.attributes_name?.includes('suspended_subscriber') && (attributesNameArr?.indexOf('DecliningCancel') > -1 || attributesNameArr?.indexOf('suspended_subscriber') == -1)) {
                return null;
            }
            if (item?.attributes_name?.includes('declining_MIR') && attributesNameArr?.indexOf('declining_MIR') == -1) {
                return null;
            }
            if (item?.attributes_name?.includes('AutomaticCancel') && attributesNameArr?.indexOf('AutomaticCancel') == -1) {
                return null;
            }
            if (item?.attributes_name?.includes('DecliningCancel') && attributesNameArr?.indexOf('DecliningCancel') == -1) {
                return null;
            }
            let tag = item?.attributes_name;
            // if(tag == 'Active Cancel' && customerInfo?.card_status?.toLowerCase() !== 'good' && customerInfo?.card_status !== '') tag = 'Declining Cancel'
            if (tag == 'DecliningCancel') tag = 'Declining Cancel';
            if (tag == 'AutomaticCancel') tag = 'Automatic Cancel';
            if (subscriptionTags == 'Paused') {
                tag = tag.replace('Cancelled', 'Paused').replace('Cancel', 'Paused');
            }
            seenAttributes.add(item?.attributes_name);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `mt-2 text-white ${style.subscriber_tag}`,
                children: tag?.charAt(0)?.toUpperCase() + tag?.replaceAll('_', ' ')?.slice(1)
            }, index, false, {
                fileName: "[project]/components/layouts/customerBasicInfo.js",
                lineNumber: 2228,
                columnNumber: 11
            }, this);
        });
    };
    //open winback popup func
    const confirmWinback = ()=>{
        if (customerInfo && customerCards[0] && customerSubscription[0]) {
            setOpenWinbackModal(true);
        }
    };
    //add winback func
    const addWinbackFunc = async ()=>{
        if (customerInfo && customerCards[0] && customerSubscription[0]) {
            setWinbackBtnDisable(true);
            // let credit_offer = winbackCreditOffer;
            // let free_month = winbackFreeMonth;
            let credit_offer = 40;
            let free_month = 0;
            let decision = 2;
            let billingDate = processDateForBilling(customerSubscription[0]?.current_period_end, 'X');
            if (customerAttributes?.length > 0) {
                customerAttributes?.map((attr, ind)=>{
                    if (attr.name == 'New Subscriber') {
                        credit_offer = 66;
                    }
                });
            }
            let winbackObj = {
                "attempt_date": cur_date,
                "attempt_type": 1,
                "decision_date": billingDate,
                "offer_amount": credit_offer,
                "offer_free_month": free_month,
                "customer_id": customerInfo.customer_id,
                "decision": decision,
                "card_last4": customerCards[0]?.last4,
                "card_type": customerCards[0]?.brand,
                "shipping_state": customerCards[0]?.address_city,
                "customer_email": customerInfo.email,
                "current_plan": subscriptionDetails[0]?.membership,
                "shipping_zip": customerCards[0]?.address_zip
            };
            let removePendingPauseObj = {
                customer_id: customerInfo.customer_id,
                tags_to_add: '30credit',
                tags_to_remove: 'PendingPause'
            };
            // if (customerTags?.indexOf('PendingPause') > -1){
            let updateTags = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["updateCustomerTags"])(removePendingPauseObj);
            if (updateTags.success) {
                setCustomerTags(updateTags.tags);
                const showWinback = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getWinbackAttemptInfo"])(customerid);
                const addingWB = async ()=>{
                    const addWinbackTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["AddRemoveAttributeSnoozeCustomer"])([
                        'Winback-Taken:YES'
                    ], [], customerid);
                    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["addWinbackAttemptInfo"])(winbackObj);
                    if (response.success) {
                        setSelectedSnoozeDateBackend(null);
                        setIsCustomeSnoozeDate(false);
                        selectedSnoozeRadioOption = -1;
                        setWinbackEligible(false);
                        setWinbackBtnDisable(false);
                        setOpenWinbackModal(false);
                    }
                };
                if (showWinback.success) {
                    let last_winback_date = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(showWinback?.data[0]?.decision_date).format("YYYY-MM-DD");
                    let eligibalmonths = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(currentDate).diff((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(last_winback_date), 'months', true);
                    if ((showWinback?.data[0]?.decision == 1 || showWinback?.data[0]?.decision == 2 || showWinback?.data[0]?.decision == 3) && eligibalmonths < 6) {
                        //update winback call
                        updateWinbakFunc("", showWinback?.data[0]);
                    } else if ((showWinback?.data[0]?.decision == 1 || showWinback?.data[0]?.decision == 2 || showWinback?.data[0]?.decision == 3) && eligibalmonths >= 6) {
                        // add winback call
                        addingWB();
                    } else if (showWinback?.data[0]?.decision == 5) {
                        if (eligibalmonths <= 6) {
                            setWinbackEligible(false); //hide winback button
                            setWinbackBtnDisable(false);
                        } else {
                            setWinbackEligible(true); //show winback button
                            setWinbackBtnDisable(false);
                            addingWB();
                        }
                    } else if (showWinback?.data[0]?.decision == 4 || showWinback?.data?.length == 0) {
                        // add winback call
                        addingWB();
                    }
                }
            }
        }
    };
    //update winback func
    const updateWinbakFunc = async (type, data)=>{
        let winbackobj = data;
        if (winbackobj != '' && winbackobj != undefined) {
            let billingDate = processDateForBilling(customerSubscription[0]?.current_period_end, 'X');
            const winbackUpdateObj = {
                "attempt_id": winbackobj.attempt_id,
                "attempt_date": cur_date,
                "attempt_type": winbackobj.attempt_type,
                "decision_date": billingDate,
                "offer_amount": winbackobj.offer_amount,
                "offer_free_month": winbackobj.offer_free_month,
                "decision": type == "delete" ? 1 : 2,
                "snapshot_id": winbackobj.snapshot_id,
                "customer_id": customerInfo.customer_id
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["updateWinbackAttemptInfo"])(winbackUpdateObj).then((res)=>{
                if (res.success) {
                    setWinbackCondition(3);
                    setWinbackBtnDisable(false);
                    setOpenWinbackModal(false);
                    setWinbackEligible(!winbackEligible);
                    let subject = `${this.props.customer.customer.email} claimed winback from email`;
                    let body = `${winbackobj.offer_free_month == 1 ? ' Free Month' : '$' + winbackobj.offer_amount + " amount"} winback claimed from  <a href="${__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].SmartBanjoUrl + 'customerdetails?email=' + this.props.customer.customer.email}"> ${this.props.customer.customer.email} </a>`;
                // php banjo url off
                //loader enable
                }
            }).catch((err)=>{
            // loader false;
            });
        }
    };
    let orderRemainingProgressBar = ()=>{
        let currentDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])().unix();
        let billing_cycle_date_x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(customerSubscription?.[0]?.current_period_end).utc();
        let diffDays = billing_cycle_date_x.diff((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])().utc(), 'days');
        if (customerTags?.join()?.toLowerCase()?.indexOf('trial_at_4am') > -1) {
            diffDays = diffDays + 1;
        }
        const daysRemaining = diffDays > 0 ? diffDays : 1;
        const percentage = (30 - daysRemaining) / 30 * 100;
        let orderCount = 0;
        if (entityAttributeData != undefined && entityAttributeData != null && entityAttributeData?.length > 0) {
            entityAttributeData.map((attribute)=>{
                if (attribute && attribute?.name?.indexOf("partial-first-shipment") > -1 && orderCount < 1) orderCount = 1;
                if (attribute && attribute?.name?.indexOf("partial-second-shipment") > -1 && orderCount < 2) orderCount = 2;
                if (attribute && attribute?.name?.indexOf("partial-third-shipment") > -1 && orderCount < 3) orderCount = 3;
            });
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: style.remainingOrderContainer,
            style: {
                position: "unset"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: style.remainingOrderCount,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                " ",
                                orderCount > 1 ? '0' : orderCount == 0 ? '2' : '1',
                                " of 2  "
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                            lineNumber: 2401,
                            columnNumber: 52
                        }, this),
                        " orders ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                            lineNumber: 2401,
                            columnNumber: 131
                        }, this),
                        " remaining "
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                    lineNumber: 2401,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: style.progressBarContainer,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: style.outerCircle,
                        style: {
                            background: `conic-gradient(from 0deg, rgba(232,156,174,1) 0%, ${percentage > 50 ? `rgba(255,243,247,1) 50%,` : ""} rgba(232,156,174,1) ${percentage}%, rgba(217,217,217,1) 0%)`
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: style.innerCircle,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: style.text,
                                children: [
                                    daysRemaining,
                                    " ",
                                    daysRemaining > 1 ? 'days' : 'day',
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/layouts/customerBasicInfo.js",
                                        lineNumber: 2405,
                                        columnNumber: 92
                                    }, this),
                                    " remaining"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layouts/customerBasicInfo.js",
                                lineNumber: 2405,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                            lineNumber: 2404,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/layouts/customerBasicInfo.js",
                        lineNumber: 2403,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                    lineNumber: 2402,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/layouts/customerBasicInfo.js",
            lineNumber: 2400,
            columnNumber: 9
        }, this);
    };
    if (customerError) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-50 m-3",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Alert"], {
            color: "danger",
            children: [
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["faBan"]
                }, void 0, false, {
                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                    lineNumber: 2414,
                    columnNumber: 30
                }, this),
                " Oh snap! Something Unexpected Occured"
            ]
        }, void 0, true, {
            fileName: "[project]/components/layouts/customerBasicInfo.js",
            lineNumber: 2414,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/layouts/customerBasicInfo.js",
        lineNumber: 2413,
        columnNumber: 5
    }, this);
    else if (!customerInfo) return '';
    else {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: style.main_customerDetails,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Container"], {
                fluid: true,
                className: style.fluid_container,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "d-block",
                        children: [
                            isAccountPastDue ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `alert alert-danger`,
                                role: "alert",
                                children: [
                                    "Account is ",
                                    pastDueAccountStage != '' ? pastDueAccountStage : 'past due'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layouts/customerBasicInfo.js",
                                lineNumber: 2424,
                                columnNumber: 17
                            }, this) : '',
                            mirFlag || customerInfo?.card_status?.toLowerCase()?.indexOf('mir payment failed') > -1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `alert alert-danger w-100`,
                                role: "alert",
                                children: "Account with MIR failed payments"
                            }, void 0, false, {
                                fileName: "[project]/components/layouts/customerBasicInfo.js",
                                lineNumber: 2429,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                fileName: "[project]/components/layouts/customerBasicInfo.js",
                                lineNumber: 2432,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layouts/customerBasicInfo.js",
                        lineNumber: 2422,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `row`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `col-12 m-auto`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "mb-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${style.panel_main} pt-4 ps-4`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Row"], {
                                            className: `m-0`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `col-md-7 pe-0 ps-0`,
                                                    children: banjoLoginUser?.banjoUser?.level != 'LOW' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `${style.customer_account}d-flex align-items-center`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: `mb-1`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: style.font_19,
                                                                    children: [
                                                                        "Customer Account Credits: $",
                                                                        customerInfo.customerCredit && customerInfo.customerCredit.toFixed(2)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                    lineNumber: 2452,
                                                                    columnNumber: 41
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                lineNumber: 2451,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                onClick: ()=>{
                                                                    setOpenCustomerAccountEditToggle(true), setCustomerCredit('');
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["faPencilAlt"],
                                                                    className: `text-primary icon-size ms-3 ${style.pointer}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                    lineNumber: 2457,
                                                                    columnNumber: 41
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                lineNumber: 2456,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                        lineNumber: 2450,
                                                        columnNumber: 33
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                    lineNumber: 2447,
                                                    columnNumber: 25
                                                }, this),
                                                openCustomerAccountEditToggle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: ` w-100 mt-2`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `d-flex`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    className: "form-select",
                                                                    onChange: (e)=>handleCustomerCreditChange(e),
                                                                    children: customerAllcreditOption?.map((item, index)=>{
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: `${item.points} ${index}`,
                                                                            children: [
                                                                                item.name,
                                                                                " "
                                                                            ]
                                                                        }, `item` + index, true, {
                                                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                            lineNumber: 2468,
                                                                            columnNumber: 49
                                                                        }, this);
                                                                    })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                    lineNumber: 2466,
                                                                    columnNumber: 37
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                    type: "number",
                                                                    className: `me-2 ms-2 ${style.creditInput}`,
                                                                    placeholder: "0.00",
                                                                    value: customerCredit,
                                                                    onChange: (e)=>handleCraditAmount(e),
                                                                    onBlur: (e)=>handlecreditInputBlur(e),
                                                                    onKeyDown: (e)=>{
                                                                        [
                                                                            "e",
                                                                            "E",
                                                                            "+",
                                                                            '-'
                                                                        ].includes(e.key) && e.preventDefault();
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                    lineNumber: 2471,
                                                                    columnNumber: 37
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                    type: "text",
                                                                    placeholder: "Reason",
                                                                    value: customerCreditReason,
                                                                    onChange: (e)=>setCustomerCreditReason(e.target.value)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                    lineNumber: 2477,
                                                                    columnNumber: 37
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                            lineNumber: 2465,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `d-flex mt-3 mb-2`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    color: "success",
                                                                    className: `${style.font_13} border me-2`,
                                                                    onClick: handleCreditUpdateEvent,
                                                                    children: "Save"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                    lineNumber: 2480,
                                                                    columnNumber: 37
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    color: "info",
                                                                    className: `${style.btn_info} ${style.font_13}`,
                                                                    onClick: ()=>setOpenCustomerAccountEditToggle(false),
                                                                    children: "Cancel"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                    lineNumber: 2481,
                                                                    columnNumber: 37
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                            lineNumber: 2479,
                                                            columnNumber: 33
                                                        }, this),
                                                        notificationLoader && notificationLoader.status && notificationLoader.type === 'customerCredit' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Spinner"], {}, void 0, false, {
                                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                            lineNumber: 2483,
                                                            columnNumber: 132
                                                        }, this) : '',
                                                        notification && notification.msg != '' && notification.type === 'customerCredit' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Alert"], {
                                                            className: "text-center mt-2",
                                                            color: notification.clrcls,
                                                            children: notification.msg
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                            lineNumber: 2484,
                                                            columnNumber: 117
                                                        }, this) : ''
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                    lineNumber: 2464,
                                                    columnNumber: 29
                                                }, this) : "",
                                                banjoLoginUser?.banjoUser?.level != 'LOW' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${style.history_viewer} mb-2`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-decoration-none",
                                                            onClick: ()=>setCustomerHistoryPopup(true),
                                                            style: {
                                                                color: '#0d6efd',
                                                                cursor: 'pointer'
                                                            },
                                                            children: "View History"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                            lineNumber: 2491,
                                                            columnNumber: 33
                                                        }, this),
                                                        customerHistoryPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$customerDetailsPopups$2f$customerAccountHistoryPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                            style: style,
                                                            customerId: customerInfo.customer_id,
                                                            toggle: ()=>setCustomerHistoryPopup(!customerHistoryPopup),
                                                            isOpen: customerHistoryPopup
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                            lineNumber: 2492,
                                                            columnNumber: 58
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                    lineNumber: 2490,
                                                    columnNumber: 29
                                                }, this),
                                                openCustomerCreditpopup ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$customerDetailsPopups$2f$cutomerAccountCreditPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                    style: style,
                                                    creditPayload: creditPayload,
                                                    toggle: ()=>setOpenCustomerCreditpopup(!openCustomerCreditpopup),
                                                    handleCustomerAccountCreditBanjo: ()=>handleCustomerAccountCreditBanjo(creditPayload),
                                                    isOpen: openCustomerCreditpopup
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                    lineNumber: 2495,
                                                    columnNumber: 52
                                                }, this) : ''
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                            lineNumber: 2446,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/layouts/customerBasicInfo.js",
                                        lineNumber: 2445,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                    lineNumber: 2444,
                                    columnNumber: 17
                                }, this),
                                accountStatus == "Paused" && transFeredItemPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$customerDetailsPopups$2f$transferedItemPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    openState: transFeredItemPopup,
                                    toggle: ()=>{
                                        setTransferedItemPopup(!transFeredItemPopup);
                                        setNotificationLoader({
                                            status: false,
                                            type: ''
                                        });
                                    },
                                    getCustoerResponse: isTransferedItemAccepted,
                                    mirFaledError: mirChargeFailed
                                }, void 0, false, {
                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                    lineNumber: 2501,
                                    columnNumber: 71
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: style.panel_main,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Card"], {
                                        className: `p-3`,
                                        children: loader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Spinner"], {
                                            className: "m-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                            lineNumber: 2505,
                                            columnNumber: 29
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `col-md-12 m-0 row d-flex justify-content-between`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `p-2 w-100`,
                                                children: [
                                                    createSubscriptionTable.status ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "m-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: ` mt-4  ${style.additionItemsLog_table} `,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                                        className: `table table-responsive "`,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                                    className: "table-active border-dark ",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                            className: "p-3",
                                                                                            children: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["capitalizedPlanName"])(createSubscriptionTable.planInfo.planStripeName)}- $${createSubscriptionTable.planInfo.planStripePrice}/month`
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                            lineNumber: 2557,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                            className: "p-3",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                onClick: ()=>{
                                                                                                    setCreateSubscriptionTable({}), setCouponCode({});
                                                                                                },
                                                                                                href: "#",
                                                                                                children: "Remove"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                                lineNumber: 2558,
                                                                                                columnNumber: 56
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                            lineNumber: 2558,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                    lineNumber: 2556,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                                    className: "table-active  border-dark",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                            className: "p-3",
                                                                                            children: `Tax : $${createSubscriptionTable.taxInfo.amount_to_collect}`
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                            lineNumber: 2561,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {}, void 0, false, {
                                                                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                            lineNumber: 2562,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                    lineNumber: 2560,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                                    className: "border-white",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                            className: "p-4",
                                                                                            children: "Coupon"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                            lineNumber: 2565,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        couponCode?.code != '' && couponCode?.code != undefined ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                            onClick: ()=>handleRemoveCoupon(createSubscriptionTable, couponCode),
                                                                                            className: "p-4",
                                                                                            children: [
                                                                                                couponCode.code,
                                                                                                " ",
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                    href: "#",
                                                                                                    children: `Remove Coupon`
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                                    lineNumber: 2566,
                                                                                                    columnNumber: 205
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                            lineNumber: 2566,
                                                                                            columnNumber: 94
                                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                            onClick: ()=>setopenAddCoupon(!openAddCoupon),
                                                                                            className: "p-4",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                href: "#",
                                                                                                children: "Add Coupon"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                                lineNumber: 2566,
                                                                                                columnNumber: 316
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                            lineNumber: 2566,
                                                                                            columnNumber: 246
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                    lineNumber: 2564,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                notificationLoader && notificationLoader.status && notificationLoader.type === 'remove_coupon' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Spinner"], {}, void 0, false, {
                                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                    lineNumber: 2568,
                                                                                    columnNumber: 131
                                                                                }, this) : ''
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                            lineNumber: 2555,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                        lineNumber: 2554,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    openAddCoupon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$customerDetailsPopups$2f$addCopoun$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        createSubscriptionTable: createSubscriptionTable,
                                                                        setCreateSubscriptionTable: setCreateSubscriptionTable,
                                                                        setCouponCode: setCouponCode,
                                                                        customerEmail: customerInfo.email,
                                                                        style: style,
                                                                        toggle: ()=>setopenAddCoupon(!openAddCoupon),
                                                                        isOpen: openAddCoupon
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                        lineNumber: 2571,
                                                                        columnNumber: 46
                                                                    }, this) : '',
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: customerInfo?.customerCredit > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                                    className: "m-2",
                                                                                    type: "checkbox",
                                                                                    onChange: (e)=>setUsedCreditForsubscription(e.target.checked)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                    lineNumber: 2575,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                                    className: `${style.font_16} m-1`,
                                                                                    children: `Apply $${customerInfo.customerCredit && customerInfo.customerCredit.toFixed(2)} customer credit`
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                    lineNumber: 2576,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true) : ''
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                        lineNumber: 2573,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                                className: "m-2",
                                                                                type: "checkbox",
                                                                                onChange: (e)=>setSendWelcomeEmail(e.target.checked)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                lineNumber: 2583,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                                className: `${style.font_16} m-1`,
                                                                                children: `Send welcome email`
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                lineNumber: 2584,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                        lineNumber: 2582,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                lineNumber: 2553,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "d-flex justify-content-end p-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                        color: "white",
                                                                        className: `${style.font_13}  border m-2`,
                                                                        onClick: ()=>{
                                                                            setCreateSubscriptionTable(!createSubscriptionTable.status);
                                                                            setCouponCode({});
                                                                        },
                                                                        children: "Cancel Subscription"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                        lineNumber: 2591,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                        size: "lg",
                                                                        className: `${style.font_13} ${style.panel_btn} border m-2`,
                                                                        disabled: isCreatingSubcription,
                                                                        onClick: handleCreateSubscriptionAction,
                                                                        children: "Create Subscription"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                        lineNumber: 2592,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                lineNumber: 2590,
                                                                columnNumber: 27
                                                            }, this),
                                                            notificationLoader && notificationLoader.status && notificationLoader.type === 'subscription_created' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Spinner"], {}, void 0, false, {
                                                                fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                lineNumber: 2594,
                                                                columnNumber: 132
                                                            }, this) : '',
                                                            notification && notification.msg != '' && notification.type === 'subscription_created' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Alert"], {
                                                                className: "text-center mt-2",
                                                                color: notification.clrcls,
                                                                children: notification.msg
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                lineNumber: 2595,
                                                                columnNumber: 117
                                                            }, this) : '',
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                                                                fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                lineNumber: 2596,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                        lineNumber: 2552,
                                                        columnNumber: 59
                                                    }, this) : "",
                                                    subscriptionDetails.length && subscriptionDetails[0].membership || customerTags?.indexOf('Paused') > -1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `w-100`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "d-block justify-content-between align-items-end",
                                                                    children: [
                                                                        promoCodeUsed != '' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            children: [
                                                                                "Promo Code Used : ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: style.promo_subscribe,
                                                                                    children: promoCodeUsed
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                    lineNumber: 2607,
                                                                                    columnNumber: 74
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                            lineNumber: 2607,
                                                                            columnNumber: 53
                                                                        }, this) : '',
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: `${style.font_13} text_account`,
                                                                            children: "Account Status: "
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                            lineNumber: 2608,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                    lineNumber: 2606,
                                                                    columnNumber: 27
                                                                }, this),
                                                                customerTags?.indexOf('plan_name:FashionPass') > -1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-success text-center",
                                                                    style: {
                                                                        fontSize: '16px'
                                                                    },
                                                                    children: [
                                                                        " ",
                                                                        billingMsg,
                                                                        " "
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                    lineNumber: 2632,
                                                                    columnNumber: 84
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    className: `${style.font_13} form-select`,
                                                                    disabled: customerTags?.indexOf("Paused") > -1 && !snoozedDate,
                                                                    value: customerAccStatus,
                                                                    onChange: (e)=>{
                                                                        setAccountStatus('' + e.target.value.split('_')[0]), setCustomerAccStatus(e.target.value), setUpdateSubsciption(true), setSubsCancelReason(''), setSelectedSubscriptionOption(e.target.options[e.target.selectedIndex].getAttribute('data-id')), setSelectedSnoozeDateBackend(null);
                                                                        setIsCustomeSnoozeDate(false);
                                                                        selectedSnoozeRadioOption = -1;
                                                                        setKlayvioStatus(e.target.value);
                                                                    },
                                                                    children: snoozedDate && customerTags?.indexOf("Paused") > -1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                "data-id": "2",
                                                                                value: "Paused",
                                                                                className: style.font_13,
                                                                                children: "Paused"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                lineNumber: 2652,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                "data-id": "4",
                                                                                value: "Paused_1",
                                                                                className: style.font_13,
                                                                                children: "Cancelled"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                lineNumber: 2653,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                "data-id": "1",
                                                                                value: "Active",
                                                                                className: style.font_13,
                                                                                children: "Active"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                lineNumber: 2657,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                "data-id": "2",
                                                                                value: "Paused",
                                                                                className: style.font_13,
                                                                                children: "Paused"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                lineNumber: 2658,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                "data-id": "3",
                                                                                value: "PendingPause",
                                                                                className: style.font_13,
                                                                                children: "Pending Pause"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                lineNumber: 2659,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                "data-id": "4",
                                                                                value: "Paused_1",
                                                                                className: style.font_13,
                                                                                children: "Cancelled"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                lineNumber: 2660,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                "data-id": "5",
                                                                                value: "PendingPause_1",
                                                                                className: style.font_13,
                                                                                children: "Pending Cancel "
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                lineNumber: 2661,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                    lineNumber: 2634,
                                                                    columnNumber: 27
                                                                }, this),
                                                                (selectedSubscriptionOption == 2 || selectedSubscriptionOption == 3) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "fw-bold fs-5 mt-4",
                                                                            children: "Schedule reactivation"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                            lineNumber: 2667,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        [
                                                                            '1 month',
                                                                            '2 month',
                                                                            '3 month',
                                                                            'Custom Date'
                                                                        ].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "mt-2",
                                                                                        hidden: customerTags?.indexOf("Paused") > -1,
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "d-flex justify-content-start mb-0",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                    type: "radio",
                                                                                                    id: item + index,
                                                                                                    name: "snooze_Options_selection",
                                                                                                    value: item,
                                                                                                    checked: selectedSnoozeRadioOption == index + 1,
                                                                                                    onChange: index == 3 ? (e)=>{
                                                                                                        setSelectedSnoozeDateBackend(null);
                                                                                                        setIsCustomeSnoozeDate(true);
                                                                                                        selectedSnoozeRadioOption = 4;
                                                                                                    } : (e)=>{
                                                                                                        selectedSnoozeRadioOption = index + 1;
                                                                                                        selectedSubscriptionOption == 2 ? setSelectedSnoozeDateBackend((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])().add(index + 1, 'months').format("MM/DD/YYYY")) : setSelectedSnoozeDateBackend(customerSubscription && customerSubscription.length > 0 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(customerSubscription[0].current_period_end).add(index + 1, 'months').format("MM/DD/YYYY"));
                                                                                                        setIsCustomeSnoozeDate(false);
                                                                                                    }
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                                    lineNumber: 2672,
                                                                                                    columnNumber: 39
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                    htmlFor: item + index,
                                                                                                    className: "ms-3",
                                                                                                    children: item
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                                    lineNumber: 2691,
                                                                                                    columnNumber: 39
                                                                                                }, this),
                                                                                                " ",
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                                    lineNumber: 2691,
                                                                                                    columnNumber: 101
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                            lineNumber: 2671,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    }, index, false, {
                                                                                        fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                        lineNumber: 2670,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    index == 3 && selectedSnoozeRadioOption == 4 && isCustomeSnoozeDate ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "mt-2",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$datepicker$2f$dist$2f$react$2d$datepicker$2e$min$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                            onBlur: ()=>{},
                                                                                            selected: !selectedSnoozeDateBackend ? new Date() : selectedSnoozeDateBackend,
                                                                                            onChange: (date)=>{
                                                                                                setSelectedSnoozeDateBackend((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(date).format("MM/DD/YYYY"));
                                                                                            },
                                                                                            minDate: customerSubscription && customerSubscription.length > 0 && selectedSubscriptionOption == 3 ? remainigSubDays(customerSubscription[0].current_period_end) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])().add(1, 'day').toDate()
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                            lineNumber: 2696,
                                                                                            columnNumber: 39
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                        lineNumber: 2695,
                                                                                        columnNumber: 37
                                                                                    }, this) : ""
                                                                                ]
                                                                            }, void 0, true)),
                                                                        selectSnoozeDateError != "" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-danger fw-bold mt-3",
                                                                                children: [
                                                                                    " ",
                                                                                    selectSnoozeDateError,
                                                                                    " "
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                lineNumber: 2710,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                            lineNumber: 2709,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true),
                                                                accountStatus == "Paused" && updateSubscription == true && !isDecliningSubscriber ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "fw-bold fs-5 mt-4",
                                                                            children: "Reason for cancellation:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                            lineNumber: 2719,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        [
                                                                            'Did not mean to sign up',
                                                                            'Did not understand the service',
                                                                            'Duplicate account',
                                                                            'Disputed charges'
                                                                        ].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-2",
                                                                                hidden: customerTags?.indexOf("Paused") > -1 && !snoozedDate,
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "d-flex justify-content-start mb-0",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "radio",
                                                                                            id: item + index,
                                                                                            name: "Cancel_Options",
                                                                                            value: item,
                                                                                            onChange: (e)=>handleSubsCancel(e)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                            lineNumber: 2723,
                                                                                            columnNumber: 37
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                            htmlFor: item + index,
                                                                                            className: "ms-3",
                                                                                            children: item
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                            lineNumber: 2730,
                                                                                            columnNumber: 37
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                            lineNumber: 2730,
                                                                                            columnNumber: 98
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                    lineNumber: 2722,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            }, index, false, {
                                                                                fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                lineNumber: 2721,
                                                                                columnNumber: 33
                                                                            }, this)),
                                                                        subsCancelErr && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-danger fw-bold",
                                                                                children: "Select any one declining option"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                lineNumber: 2737,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                            lineNumber: 2736,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: accountStatus == "Paused" && updateSubscription == true && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "p-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                className: "text-danger",
                                                                                children: "This is a declining customer"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                lineNumber: 2743,
                                                                                columnNumber: 30
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "fw-bolder fs-5",
                                                                                children: "Reason for cancellation:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                lineNumber: 2744,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: style.paddingLeft,
                                                                                children: [
                                                                                    'Sleeping customer, returned items prior to declining',
                                                                                    'Sleeping customer, membership billings offset cost of items (no further amount owed)',
                                                                                    'Unsuccessful pause, returned on or before billing date',
                                                                                    'Waiving as a one-time exception',
                                                                                    'Could not successfully collect payment'
                                                                                ].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "mt-1",
                                                                                        hidden: customerTags?.indexOf("Paused") > -1 && !snoozedDate,
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: " mb-0",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                    type: "radio",
                                                                                                    id: item + index,
                                                                                                    name: "Cancel_Options",
                                                                                                    value: item,
                                                                                                    onChange: (e)=>handleSubsCancel(e)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                                    lineNumber: 2753,
                                                                                                    columnNumber: 37
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                    htmlFor: item + index,
                                                                                                    className: "ms-3",
                                                                                                    children: item
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                                    lineNumber: 2760,
                                                                                                    columnNumber: 37
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                                    lineNumber: 2760,
                                                                                                    columnNumber: 98
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                            lineNumber: 2752,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    }, index, false, {
                                                                                        fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                        lineNumber: 2751,
                                                                                        columnNumber: 33
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                lineNumber: 2745,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "fw-bolder fs-5 mt-3",
                                                                                children: "What should we do with the failing invoices?"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                lineNumber: 2766,
                                                                                columnNumber: 30
                                                                            }, this),
                                                                            [
                                                                                'Close all failing invoices to clear declining customer',
                                                                                'leave failing invoices so customer has to reconcile before using service again'
                                                                            ].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: style.paddingLeft,
                                                                                    hidden: customerTags?.indexOf("Paused") > -1 && !snoozedDate,
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "mb-0",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "radio",
                                                                                                id: item + index,
                                                                                                name: "failing invoives options",
                                                                                                value: item,
                                                                                                onChange: (e)=>handleTodoWithFailingInvoices(e)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                                lineNumber: 2770,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                htmlFor: item + index,
                                                                                                className: "ms-3",
                                                                                                children: item
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                                lineNumber: 2777,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                                fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                                lineNumber: 2777,
                                                                                                columnNumber: 98
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                        lineNumber: 2769,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, index, false, {
                                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                    lineNumber: 2768,
                                                                                    columnNumber: 33
                                                                                }, this)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: style.paddingLeft20,
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                                        className: "m-2",
                                                                                        type: "checkbox",
                                                                                        onChange: (e)=>setEmailPauseStatus(e.target.checked)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                        lineNumber: 2782,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                                        className: `${style.font_16} m-1`,
                                                                                        children: `Email customer pause email`
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                        lineNumber: 2783,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                lineNumber: 2781,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            toDoWithFailingInvoices !== '' && subsCancelReason !== '' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: handleUpdateSubscription,
                                                                                className: `btn mt-3 p-2 btn-info text-white `,
                                                                                children: "Update Subscription"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                lineNumber: 2787,
                                                                                columnNumber: 86
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                        lineNumber: 2742,
                                                                        columnNumber: 89
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                    lineNumber: 2741,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: style.separator
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                    lineNumber: 2794,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: style.customer_tags_wrapper,
                                                                    children: customerTagsArr?.length > 0 && isAllowedUser(banjoLoginUser) && processCustomerTags(customerTagsArr, customerTags, customerAttributes)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                    lineNumber: 2795,
                                                                    columnNumber: 27
                                                                }, this),
                                                                notificationLoader && notificationLoader.status && notificationLoader.type === 'pause_loader' && customerTags?.indexOf("Paused") > -1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Spinner"], {
                                                                    className: "mt-2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                    lineNumber: 2801,
                                                                    columnNumber: 166
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-3",
                                                                    children: customerTags?.indexOf("Paused") > -1 && referralCode.referralDetals?.length > 0 && subscriptionTags == "Paused_1" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: `${style.font_16} mb-0`,
                                                                        children: referralCode?.referralDetals && referralCode.referralDetals?.length > 0 ? `Account ${subscriptionTags == "Paused_1" ? "cancelled" : "paused"} on ${referralCode.referralDetals[0]?.subscription_end_date ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(referralCode.referralDetals[0]?.subscription_end_date).utc().format('M/D/YYYY') : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])().utc().format('M/D/YYYY')}` : ''
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                        lineNumber: 2803,
                                                                        columnNumber: 148
                                                                    }, this) : ""
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                    lineNumber: 2802,
                                                                    columnNumber: 29
                                                                }, this),
                                                                updateSubscription && accountStatus != 'Paused' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: handleUpdateSubscription,
                                                                        className: `btn mt-3 p-2 btn-info text-white `,
                                                                        children: "Update Subscription"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                        lineNumber: 2809,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                    lineNumber: 2808,
                                                                    columnNumber: 78
                                                                }, this) : '',
                                                                notificationLoader && notificationLoader.status && notificationLoader.type === 'subscription_paused' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Spinner"], {}, void 0, false, {
                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                    lineNumber: 2814,
                                                                    columnNumber: 131
                                                                }, this) : '',
                                                                updateSubscription && accountStatus === 'Paused' && !isDecliningSubscriber ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        handleLastRefundAmount() != undefined ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                                    className: "m-2",
                                                                                    type: "checkbox",
                                                                                    onChange: (e)=>setRefundLastPaymentStatus(e.target.checked)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                    lineNumber: 2820,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                                    className: `${style.font_16} m-1`,
                                                                                    children: [
                                                                                        `Refund last payment of $${parseFloat(handleLastRefundAmount()?.amount / 100)}`,
                                                                                        customerAccCreditFromMetaData > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            children: [
                                                                                                " and $",
                                                                                                customerAccCreditFromMetaData,
                                                                                                " account credit"
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                            lineNumber: 2824,
                                                                                            columnNumber: 70
                                                                                        }, this) : ""
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                    lineNumber: 2822,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true) : 'unable to fetch last payment',
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                                    className: "m-2",
                                                                                    type: "checkbox",
                                                                                    onChange: (e)=>setEmailPauseStatus(e.target.checked)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                    lineNumber: 2831,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                                    className: `${style.font_16} m-1`,
                                                                                    children: `Email customer pause email`
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                    lineNumber: 2832,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                            lineNumber: 2830,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: handleUpdateSubscription,
                                                                            className: `btn mt-3 p-2 btn-info text-white `,
                                                                            children: "Update Subscription"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                            lineNumber: 2837,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                    lineNumber: 2816,
                                                                    columnNumber: 104
                                                                }, this) : ''
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                            lineNumber: 2604,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: `m-2`,
                                                        children: [
                                                            subscriptionDetails && !createSubscriptionTable.status && !subscriptionDetails[0]?.membership ? 'Account Status:  NOT SUBSCRIBED' : '',
                                                            " "
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                        lineNumber: 2845,
                                                        columnNumber: 27
                                                    }, this),
                                                    pendingPauseDate > 0 && !(customerInfo?.card_status == 'Your card was declined.') && (customerTags?.indexOf('PendingPause') > -1 || customerTags?.indexOf('Paused') > -1) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mb-1",
                                                        children: [
                                                            subscriptionTags == "Paused_1" || subscriptionTags == "PendingPause_1" ? 'Cancel' : 'Pause',
                                                            " Survey Submitted ",
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(pendingPauseDate).utc().format('M/D/YY')
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                        lineNumber: 2847,
                                                        columnNumber: 201
                                                    }, this) : '',
                                                    pauseActivatedDate > 0 && customerTags?.indexOf('Paused') > -1 && subscriptionTags != "Paused_1" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mb-1",
                                                        children: [
                                                            "Pause Activated ",
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(pauseActivatedDate).utc().format('M/D/YY')
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                        lineNumber: 2848,
                                                        columnNumber: 126
                                                    }, this) : '',
                                                    (customerTags?.indexOf('PendingPause') > -1 || customerTags?.indexOf('Paused') > -1) && snoozedOnDate > 0 && (snoozedOnDate > pauseActivatedDate || snoozedOnDate > pendingPauseDate) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(snoozedOnDate).format('M/D/YY') > (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])().format('M/D/YY') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mb-0",
                                                        style: {
                                                            color: '#500692'
                                                        },
                                                        children: [
                                                            " Snoozed on ",
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(snoozedOnDate).format('M/D/YY')
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                        lineNumber: 2850,
                                                        columnNumber: 29
                                                    }, this) : "",
                                                    snoozedDate && (customerTags?.indexOf('PendingPause') > -1 || customerTags?.indexOf('Paused') > -1) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-primary",
                                                        children: [
                                                            " Scheduled to reactivate on ",
                                                            snoozedDate
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                        lineNumber: 2853,
                                                        columnNumber: 29
                                                    }, this) : ""
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                lineNumber: 2551,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                            lineNumber: 2506,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/layouts/customerBasicInfo.js",
                                        lineNumber: 2504,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                    lineNumber: 2503,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${style.subscription} mt-3`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Card"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: style.panel_main,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `d-flex align-items-center ps-3`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: `${style.font_13} pl-4 text_account`,
                                                            children: "Additional Items"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                            lineNumber: 2867,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "d-flex align-items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "cursor-pointer",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["faMinus"],
                                                                        className: ` text-primary ${style.font_19} ms-4 me-1`,
                                                                        onClick: ()=>{
                                                                            setAdditionalItemCount(additionalItemCount > 0 ? additionalItemCount - 1 : 0);
                                                                            setAddtionalItemCheck(true);
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                        lineNumber: 2869,
                                                                        columnNumber: 58
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                    lineNumber: 2869,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        className: `${style.font_32} ${style.input_num}`,
                                                                        onKeyDown: (e)=>{
                                                                            [
                                                                                "e",
                                                                                "E",
                                                                                "+",
                                                                                "-",
                                                                                "."
                                                                            ].includes(e.key) && e.preventDefault();
                                                                        },
                                                                        type: "number",
                                                                        min: 0,
                                                                        value: additionalItemCount,
                                                                        onChange: (e)=>{
                                                                            setAdditionalItemCount(parseInt(e.target.value)), setAddtionalItemCheck(true);
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                        lineNumber: 2870,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                    lineNumber: 2870,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "cursor-pointer",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["faPlus"],
                                                                        className: ` text-primary ${style.font_19} ms-1`,
                                                                        onClick: ()=>{
                                                                            setAdditionalItemCount(additionalItemCount >= 0 ? additionalItemCount + 1 : 1);
                                                                            setAddtionalItemCheck(true);
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                        lineNumber: 2871,
                                                                        columnNumber: 58
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                    lineNumber: 2871,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                    className: "ms-4 me-4 border-black rounded-0",
                                                                    type: "text",
                                                                    placeholder: "Reason",
                                                                    value: additionalItemReason,
                                                                    onChange: (e)=>handleAdditionReason(e)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                    lineNumber: 2872,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                            lineNumber: 2868,
                                                            columnNumber: 23
                                                        }, this),
                                                        addtionalItemCheck ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "btn btn-success me-2",
                                                            onClick: ()=>{
                                                                updateAdditionalItemHandler();
                                                            },
                                                            children: "Save"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                            lineNumber: 2875,
                                                            columnNumber: 45
                                                        }, this) : ''
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                    lineNumber: 2866,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                lineNumber: 2865,
                                                columnNumber: 19
                                            }, this),
                                            notificationLoader && notificationLoader.status && notificationLoader.type === 'additional_item' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Spinner"], {
                                                className: "m-4 "
                                            }, void 0, false, {
                                                fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                lineNumber: 2878,
                                                columnNumber: 121
                                            }, this) : '',
                                            notification && notification.msg && notification.type === 'additional_item' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Alert"], {
                                                className: "text-center  mt-1  m-4 ",
                                                color: notification.clrcls,
                                                children: notification.msg
                                            }, void 0, false, {
                                                fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                lineNumber: 2879,
                                                columnNumber: 100
                                            }, this) : ''
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/layouts/customerBasicInfo.js",
                                        lineNumber: 2864,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                    lineNumber: 2863,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${style.promotion} mt-3`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Card"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: style.panel_main,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: `${style.font_19} m-0 pl-4 p-3`,
                                                        children: "Additional Items Log"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                        lineNumber: 2887,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                    lineNumber: 2886,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `mt-4 m-4 ${style.additionItemsLog_table}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                        className: "table table-responsive",
                                                        children: additionalItemLogs && additionalItemLogs.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                            className: "scroll-bar",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            children: "Date"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                            lineNumber: 2896,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            children: "User"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                            lineNumber: 2897,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            children: "Notes"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                            lineNumber: 2898,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                    lineNumber: 2895,
                                                                    columnNumber: 29
                                                                }, this),
                                                                additionalItemLogs.map((item, ind)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(item.created_at).utc().format('M/D/YYYY [at] h:mma')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                lineNumber: 2902,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                children: `${item?.user_name} `
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                lineNumber: 2903,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                children: `${item.reason}`
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                                lineNumber: 2904,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, "monthly_" + ind, true, {
                                                                        fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                        lineNumber: 2901,
                                                                        columnNumber: 31
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                            lineNumber: 2894,
                                                            columnNumber: 27
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                            className: "scroll-bar",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    colSpan: "3",
                                                                    children: "No Records Found"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                    lineNumber: 2911,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                                lineNumber: 2910,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                            lineNumber: 2909,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                        lineNumber: 2892,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                    lineNumber: 2891,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                            lineNumber: 2885,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/layouts/customerBasicInfo.js",
                                        lineNumber: 2884,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                    lineNumber: 2883,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${style.promotion} mt-3`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Card"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: style.panel_main,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: `${style.font_19} m-0 pl-4 p-3`,
                                                        children: " Last Order Info "
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                        lineNumber: 2927,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                    lineNumber: 2926,
                                                    columnNumber: 21
                                                }, this),
                                                Object.keys(orderData).length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layouts$2f$orders$2f$orderDetails$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                    OrderDetail: orderData,
                                                    getOrderDetail: getOrderDetail,
                                                    claimerInfo: claimerInfo,
                                                    customerInfo: orderCustomerInfo,
                                                    addressDetail: orderAddress,
                                                    orderTag: generateOrderTag,
                                                    birthday: identifyBirthDay,
                                                    checkOrderStatus: checkOrderStatus,
                                                    invoiceCreated: invoiceCreated,
                                                    compType: 'basic_customer_info',
                                                    shipmentLabelExtra: shipmentLabelExtra
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                                    lineNumber: 2931,
                                                    columnNumber: 23
                                                }, this) : ""
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                                            lineNumber: 2924,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/layouts/customerBasicInfo.js",
                                        lineNumber: 2923,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                    lineNumber: 2922,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: style.panel_main,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$restartBillingPopup$2f$restartBillingPopup$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                        modal: openRestartPopup,
                                        toggle: ()=>setOpenRestartPopup(!openRestartPopup),
                                        updateBillingDate: ()=>updateRestartCustomerBilling(),
                                        btnLoader: btnLoader
                                    }, void 0, false, {
                                        fileName: "[project]/components/layouts/customerBasicInfo.js",
                                        lineNumber: 2957,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/layouts/customerBasicInfo.js",
                                    lineNumber: 2956,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layouts/customerBasicInfo.js",
                            lineNumber: 2442,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/layouts/customerBasicInfo.js",
                        lineNumber: 2438,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layouts/customerBasicInfo.js",
                lineNumber: 2421,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/layouts/customerBasicInfo.js",
            lineNumber: 2420,
            columnNumber: 7
        }, this);
    }
}
_s(CustomerDetails, "9e1MFTmHa+r0QJmKcIInn4BsO0g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = CustomerDetails;
const __TURBOPACK__default__export__ = CustomerDetails;
var _c;
__turbopack_context__.k.register(_c, "CustomerDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layouts/customerPaymentInfo.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/reactstrap/dist/reactstrap.modern.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-redux/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/es/exports.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/functions/globalFunctions.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/functions/customerFunctions.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$customerDetailsPaymentsSection$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/customerDetailsPaymentsSection.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
function CustomerPaymentInfo(props) {
    _s();
    const style = props.style;
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const systemSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "CustomerPaymentInfo.useSelector[systemSettings]": (state)=>state?.systemSettings
    }["CustomerPaymentInfo.useSelector[systemSettings]"]);
    const banjoLoginUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "CustomerPaymentInfo.useSelector[banjoLoginUser]": (state)=>state.banjoUser
    }["CustomerPaymentInfo.useSelector[banjoLoginUser]"]);
    const [customerInfo, setCustomerInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [customerTags, setCustomerTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [customerSpendInfo, setCustomerSpendInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [customerPaymentList, setCustomerPaymentList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [customerPaymentChargesList, setCustomerPaymentChargesList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [shipmentRecord, setShipmentRecord] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [paymentDes, setPaymentDesc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [paymentNotification, setPaymentNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        type: "",
        msg: "",
        status: false
    });
    const [failedMessageTooltip, setFailedMessageTooltip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [refundTooltip, setRefundTooltip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [openRefundPopup, setOpenRefundPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [refundRecord, setRefundRecord] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [issubscriptionCreated, setIssubscriptionCreated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const safeCall = async (promise)=>{
        try {
            const res = await promise;
            return res || {
                success: false,
                error: "No response"
            };
        } catch (err) {
            console.error("API Error:", err);
            return {
                success: false,
                error: err
            };
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomerPaymentInfo.useEffect": ()=>{
            let isMounted = true;
            const fetchData = {
                "CustomerPaymentInfo.useEffect.fetchData": async ()=>{
                    if (!props.customerInfo?.success || props.customerInfo?.customer_detail == null) {
                        return;
                    }
                    const customer = props.customerInfo.customer_detail;
                    const stripeId = customer.stripe_id;
                    const customerId = customer.customer_id;
                    setCustomerInfo(customer);
                    if (customer.tags?.length > 0) {
                        const tags = customer.tags.split(",").map({
                            "CustomerPaymentInfo.useEffect.fetchData.tags": (val)=>val.trim()
                        }["CustomerPaymentInfo.useEffect.fetchData.tags"]);
                        setCustomerTags(tags);
                    }
                    const calls = {
                        spendInfo: safeCall((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getCustomerSpend"])(stripeId)),
                        invoices: safeCall((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getCustomerInvoiceByCustomerId"])(customerId))
                    };
                    const results = await Promise.all(Object.values(calls));
                    if (!isMounted) return;
                    const responses = Object.keys(calls).reduce({
                        "CustomerPaymentInfo.useEffect.fetchData.responses": (acc, key, idx)=>{
                            acc[key] = results[idx];
                            return acc;
                        }
                    }["CustomerPaymentInfo.useEffect.fetchData.responses"], {});
                    if (responses.spendInfo?.success) {
                        setCustomerSpendInfo(responses.spendInfo.spend);
                    }
                    if (responses.invoices?.success) {
                        setShipmentRecord(responses.invoices.result);
                    }
                }
            }["CustomerPaymentInfo.useEffect.fetchData"];
            fetchData();
            return ({
                "CustomerPaymentInfo.useEffect": ()=>{
                    isMounted = false;
                }
            })["CustomerPaymentInfo.useEffect"];
        }
    }["CustomerPaymentInfo.useEffect"], [
        props.customerInfo?.customer_detail
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomerPaymentInfo.useEffect": ()=>{
            const fetchSubscription = {
                "CustomerPaymentInfo.useEffect.fetchSubscription": async ()=>{
                    if (!props.customerInfo?.success || props.customerInfo?.customer_detail == null) return;
                    const stripeId = props.customerInfo.customer_detail.stripe_id;
                    const customerId = props.customerInfo.customer_detail.customer_id;
                    await getCustomerSubscription(stripeId, customerId);
                }
            }["CustomerPaymentInfo.useEffect.fetchSubscription"];
            fetchSubscription();
        }
    }["CustomerPaymentInfo.useEffect"], [
        issubscriptionCreated,
        props.customerInfo?.customer_detail
    ]);
    const CustomerStripePayment = async (cusStripeId, customerId, fpPlans)=>{
        let amount = 0;
        const orderResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getOrdersByCustomerId"])(customerId);
        setPaymentNotification({
            type: "loading",
            msg: "",
            status: true
        });
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getCustomerStripePayment"])(cusStripeId, customerId);
        if (response?.success) {
            if (response?.paymentInfo?.charges) {
                setCustomerPaymentChargesList(response?.paymentInfo?.charges);
            }
            const descriptionArr = {};
            let updated;
            if (response?.paymentInfo?.stripeCharges?.data) {
                updated = response?.paymentInfo?.stripeCharges?.data;
            } else {
                updated = response?.paymentInfo?.stripeCharges;
            }
            if (Array.isArray(updated)) {
                updated.map(async (item)=>{
                    if (item.description?.indexOf("Purchased Item") > -1) {
                        amount += item.amount;
                    }
                    if (amount > 0) {
                        setCustomerSpendInfo((prev)=>({
                                ...prev,
                                purchaseSpend: amount / 100
                            }));
                    }
                    if (item.description != null && item.description.indexOf("Invoice ") === 0 && item.invoice != null) {
                        const invoiceDescription = await getInvoiceDescription(item.invoice, fpPlans);
                        if (invoiceDescription !== "") {
                            descriptionArr[item.id] = invoiceDescription;
                        }
                    } else if (item.description != null && item.description.indexOf("FashionPass Purchase") === 0) {
                        await orderResponse?.orders?.forEach((orderItem)=>{
                            if (item.id === orderItem?.charge_id && !item.description?.includes(parseInt(orderItem.orderid) + 1000) && (orderItem.order_type === "FP/Sale" || orderItem.order_type === "Sale")) {
                                descriptionArr[item.id] = `${item.description} Order #${parseInt(orderItem.orderid) + 1000}`;
                            } else if (item.status === "failed") {
                                descriptionArr[item.id] = item.description;
                            }
                        });
                    } else {
                        descriptionArr[item.id] = item.description;
                    }
                });
            }
            const paymentResponse = response?.paymentInfo?.stripeCharges?.data ? response?.paymentInfo?.stripeCharges?.data : response?.paymentInfo?.stripeCharges;
            await setPaymentDesc(descriptionArr);
            setTimeout(()=>{
                setCustomerPaymentList(Array.isArray(paymentResponse) ? paymentResponse : []);
                setPaymentNotification({
                    type: "loading",
                    msg: "",
                    status: false
                });
            }, 1000);
        } else {
            setCustomerPaymentList([]);
            setPaymentNotification({
                type: "initial_loading_payments",
                msg: "No Records Available",
                status: true
            });
        }
    };
    const getCustomerSubscription = async (cusStripeId, customerId)=>{
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getCustomerStripeSubscription"])(cusStripeId);
        const fpPlans = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getFpPLansFromSettings"])(systemSettings, dispatch);
        if (response?.success) {
            const planName = "Fashionpass Plans";
            const planId = response.subscriptionInfo[0]?.plan.id;
            const planResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getCustomerSubscriptionPlanDetails"])(customerId, planId, planName);
            if (planResponse?.success) {
                await CustomerStripePayment(cusStripeId, customerId, fpPlans);
            }
        } else {
            await CustomerStripePayment(cusStripeId, customerId, fpPlans);
        }
    };
    const getInvoiceDescription = async (id, fpPlans)=>{
        const obj = {};
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$customerFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getInvoiceLineItem"])(id);
        if (response?.success) {
            const linesArr = response?.invoiceResponse?.lines?.data;
            if (linesArr?.length > 0) {
                linesArr.forEach((lineArr)=>{
                    if (lineArr.description === "Tax") {
                        obj.tax = lineArr.description;
                        obj.invoice_id = id;
                    }
                    if (lineArr.subscription?.indexOf("sub_") === 0) {
                        fpPlans.forEach((plan)=>{
                            if (plan.planStripeId === lineArr.plan.id) {
                                obj.plan = plan.planName;
                            }
                        });
                    }
                    obj.invoice_id = id;
                });
            }
            if (obj.invoice_id !== "") {
                if (obj.tax !== undefined) {
                    if (obj.plan === "Gold") return `Socialite monthly billing + ${obj.tax}`;
                    if (obj.plan === "Platinum") return `Trendsetter monthly billing + ${obj.tax}`;
                    return `${obj.plan} monthly billing + ${obj.tax}`;
                }
                return `${obj.plan} monthly billing`;
            }
        }
        return "";
    };
    const handleToolTip = (id)=>{
        if (failedMessageTooltip[id] !== undefined) {
            setFailedMessageTooltip({});
            return;
        }
        setFailedMessageTooltip({
            [id]: true
        });
    };
    const handleRefundToolTip = (id)=>{
        if (refundTooltip[id] !== undefined) {
            setRefundTooltip({});
            return;
        }
        setRefundTooltip({
            [id]: true
        });
    };
    const handleShipmentAmount = (stripData)=>{
        if (shipmentRecord?.length > 0) {
            const foundObject = shipmentRecord.find((obj)=>obj.charge_id === stripData.id);
            if (foundObject?.shipping_amount) {
                const totalAmount = parseFloat(stripData.amount / 100).toFixed(2);
                const amountWithShipment = parseFloat(totalAmount - foundObject.shipping_amount).toFixed(2);
                return `$${amountWithShipment} (including: $${parseFloat(foundObject.shipping_amount).toFixed(2)} shipping)`;
            }
        }
        return "";
    };
    if (!customerInfo) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "d-flex justify-content-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Spinner"], {}, void 0, false, {
                fileName: "[project]/components/layouts/customerPaymentInfo.js",
                lineNumber: 254,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/layouts/customerPaymentInfo.js",
            lineNumber: 253,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Container"], {
            fluid: true,
            className: "px-4 pb-4 pt-0",
            style: {
                marginBottom: '22px'
            },
            children: banjoLoginUser?.banjoUser?.level !== "LOW" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$customerDetailsPaymentsSection$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                style: style,
                customerTags: customerTags,
                customerSpendInfo: customerSpendInfo,
                customerPaymentList: customerPaymentList,
                paymentDes: paymentDes,
                paymentNotification: paymentNotification,
                failedMessageTooltip: failedMessageTooltip,
                refundTooltip: refundTooltip,
                openRefundPopup: openRefundPopup,
                setOpenRefundPopup: setOpenRefundPopup,
                setRefundRecord: setRefundRecord,
                handleToolTip: handleToolTip,
                handleRefundToolTip: handleRefundToolTip,
                handleShipmentAmount: handleShipmentAmount,
                setIssubscriptionCreated: setIssubscriptionCreated,
                issubscriptionCreated: issubscriptionCreated,
                customerInfo: customerInfo,
                setCustomerPaymentList: setCustomerPaymentList,
                refundRecord: refundRecord,
                customerPaymentChargesList: customerPaymentChargesList,
                width: "clamp(600px, 100%, 800px)",
                centerCells: true,
                fromZendeskApp: true,
                ticketId: props.ticketId
            }, void 0, false, {
                fileName: "[project]/components/layouts/customerPaymentInfo.js",
                lineNumber: 263,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/layouts/customerPaymentInfo.js",
            lineNumber: 261,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/layouts/customerPaymentInfo.js",
        lineNumber: 260,
        columnNumber: 5
    }, this);
}
_s(CustomerPaymentInfo, "dwTRBhve8KrY2VG879exKsSX+qM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = CustomerPaymentInfo;
const __TURBOPACK__default__export__ = CustomerPaymentInfo;
var _c;
__turbopack_context__.k.register(_c, "CustomerPaymentInfo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_layouts_1cbfcab9._.js.map