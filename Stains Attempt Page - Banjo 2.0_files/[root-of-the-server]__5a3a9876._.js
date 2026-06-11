(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[turbopack]/browser/dev/hmr-client/hmr-client.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/// <reference path="../../../shared/runtime-types.d.ts" />
/// <reference path="../../runtime/base/dev-globals.d.ts" />
/// <reference path="../../runtime/base/dev-protocol.d.ts" />
/// <reference path="../../runtime/base/dev-extensions.ts" />
__turbopack_context__.s([
    "connect",
    ()=>connect,
    "setHooks",
    ()=>setHooks,
    "subscribeToUpdate",
    ()=>subscribeToUpdate
]);
function connect({ addMessageListener, sendMessage, onUpdateError = console.error }) {
    addMessageListener((msg)=>{
        switch(msg.type){
            case 'turbopack-connected':
                handleSocketConnected(sendMessage);
                break;
            default:
                try {
                    if (Array.isArray(msg.data)) {
                        for(let i = 0; i < msg.data.length; i++){
                            handleSocketMessage(msg.data[i]);
                        }
                    } else {
                        handleSocketMessage(msg.data);
                    }
                    applyAggregatedUpdates();
                } catch (e) {
                    console.warn('[Fast Refresh] performing full reload\n\n' + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + 'You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n' + 'Consider migrating the non-React component export to a separate file and importing it into both files.\n\n' + 'It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n' + 'Fast Refresh requires at least one parent function component in your React tree.');
                    onUpdateError(e);
                    location.reload();
                }
                break;
        }
    });
    const queued = globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS;
    if (queued != null && !Array.isArray(queued)) {
        throw new Error('A separate HMR handler was already registered');
    }
    globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS = {
        push: ([chunkPath, callback])=>{
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    };
    if (Array.isArray(queued)) {
        for (const [chunkPath, callback] of queued){
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    }
}
const updateCallbackSets = new Map();
function sendJSON(sendMessage, message) {
    sendMessage(JSON.stringify(message));
}
function resourceKey(resource) {
    return JSON.stringify({
        path: resource.path,
        headers: resource.headers || null
    });
}
function subscribeToUpdates(sendMessage, resource) {
    sendJSON(sendMessage, {
        type: 'turbopack-subscribe',
        ...resource
    });
    return ()=>{
        sendJSON(sendMessage, {
            type: 'turbopack-unsubscribe',
            ...resource
        });
    };
}
function handleSocketConnected(sendMessage) {
    for (const key of updateCallbackSets.keys()){
        subscribeToUpdates(sendMessage, JSON.parse(key));
    }
}
// we aggregate all pending updates until the issues are resolved
const chunkListsWithPendingUpdates = new Map();
function aggregateUpdates(msg) {
    const key = resourceKey(msg.resource);
    let aggregated = chunkListsWithPendingUpdates.get(key);
    if (aggregated) {
        aggregated.instruction = mergeChunkListUpdates(aggregated.instruction, msg.instruction);
    } else {
        chunkListsWithPendingUpdates.set(key, msg);
    }
}
function applyAggregatedUpdates() {
    if (chunkListsWithPendingUpdates.size === 0) return;
    hooks.beforeRefresh();
    for (const msg of chunkListsWithPendingUpdates.values()){
        triggerUpdate(msg);
    }
    chunkListsWithPendingUpdates.clear();
    finalizeUpdate();
}
function mergeChunkListUpdates(updateA, updateB) {
    let chunks;
    if (updateA.chunks != null) {
        if (updateB.chunks == null) {
            chunks = updateA.chunks;
        } else {
            chunks = mergeChunkListChunks(updateA.chunks, updateB.chunks);
        }
    } else if (updateB.chunks != null) {
        chunks = updateB.chunks;
    }
    let merged;
    if (updateA.merged != null) {
        if (updateB.merged == null) {
            merged = updateA.merged;
        } else {
            // Since `merged` is an array of updates, we need to merge them all into
            // one, consistent update.
            // Since there can only be `EcmascriptMergeUpdates` in the array, there is
            // no need to key on the `type` field.
            let update = updateA.merged[0];
            for(let i = 1; i < updateA.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateA.merged[i]);
            }
            for(let i = 0; i < updateB.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateB.merged[i]);
            }
            merged = [
                update
            ];
        }
    } else if (updateB.merged != null) {
        merged = updateB.merged;
    }
    return {
        type: 'ChunkListUpdate',
        chunks,
        merged
    };
}
function mergeChunkListChunks(chunksA, chunksB) {
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    return chunks;
}
function mergeChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted' || updateA.type === 'deleted' && updateB.type === 'added') {
        return undefined;
    }
    if (updateA.type === 'partial') {
        invariant(updateA.instruction, 'Partial updates are unsupported');
    }
    if (updateB.type === 'partial') {
        invariant(updateB.instruction, 'Partial updates are unsupported');
    }
    return undefined;
}
function mergeChunkListEcmascriptMergedUpdates(mergedA, mergedB) {
    const entries = mergeEcmascriptChunkEntries(mergedA.entries, mergedB.entries);
    const chunks = mergeEcmascriptChunksUpdates(mergedA.chunks, mergedB.chunks);
    return {
        type: 'EcmascriptMergedUpdate',
        entries,
        chunks
    };
}
function mergeEcmascriptChunkEntries(entriesA, entriesB) {
    return {
        ...entriesA,
        ...entriesB
    };
}
function mergeEcmascriptChunksUpdates(chunksA, chunksB) {
    if (chunksA == null) {
        return chunksB;
    }
    if (chunksB == null) {
        return chunksA;
    }
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeEcmascriptChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    if (Object.keys(chunks).length === 0) {
        return undefined;
    }
    return chunks;
}
function mergeEcmascriptChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted') {
        // These two completely cancel each other out.
        return undefined;
    }
    if (updateA.type === 'deleted' && updateB.type === 'added') {
        const added = [];
        const deleted = [];
        const deletedModules = new Set(updateA.modules ?? []);
        const addedModules = new Set(updateB.modules ?? []);
        for (const moduleId of addedModules){
            if (!deletedModules.has(moduleId)) {
                added.push(moduleId);
            }
        }
        for (const moduleId of deletedModules){
            if (!addedModules.has(moduleId)) {
                deleted.push(moduleId);
            }
        }
        if (added.length === 0 && deleted.length === 0) {
            return undefined;
        }
        return {
            type: 'partial',
            added,
            deleted
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'partial') {
        const added = new Set([
            ...updateA.added ?? [],
            ...updateB.added ?? []
        ]);
        const deleted = new Set([
            ...updateA.deleted ?? [],
            ...updateB.deleted ?? []
        ]);
        if (updateB.added != null) {
            for (const moduleId of updateB.added){
                deleted.delete(moduleId);
            }
        }
        if (updateB.deleted != null) {
            for (const moduleId of updateB.deleted){
                added.delete(moduleId);
            }
        }
        return {
            type: 'partial',
            added: [
                ...added
            ],
            deleted: [
                ...deleted
            ]
        };
    }
    if (updateA.type === 'added' && updateB.type === 'partial') {
        const modules = new Set([
            ...updateA.modules ?? [],
            ...updateB.added ?? []
        ]);
        for (const moduleId of updateB.deleted ?? []){
            modules.delete(moduleId);
        }
        return {
            type: 'added',
            modules: [
                ...modules
            ]
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'deleted') {
        // We could eagerly return `updateB` here, but this would potentially be
        // incorrect if `updateA` has added modules.
        const modules = new Set(updateB.modules ?? []);
        if (updateA.added != null) {
            for (const moduleId of updateA.added){
                modules.delete(moduleId);
            }
        }
        return {
            type: 'deleted',
            modules: [
                ...modules
            ]
        };
    }
    // Any other update combination is invalid.
    return undefined;
}
function invariant(_, message) {
    throw new Error(`Invariant: ${message}`);
}
const CRITICAL = [
    'bug',
    'error',
    'fatal'
];
function compareByList(list, a, b) {
    const aI = list.indexOf(a) + 1 || list.length;
    const bI = list.indexOf(b) + 1 || list.length;
    return aI - bI;
}
const chunksWithIssues = new Map();
function emitIssues() {
    const issues = [];
    const deduplicationSet = new Set();
    for (const [_, chunkIssues] of chunksWithIssues){
        for (const chunkIssue of chunkIssues){
            if (deduplicationSet.has(chunkIssue.formatted)) continue;
            issues.push(chunkIssue);
            deduplicationSet.add(chunkIssue.formatted);
        }
    }
    sortIssues(issues);
    hooks.issues(issues);
}
function handleIssues(msg) {
    const key = resourceKey(msg.resource);
    let hasCriticalIssues = false;
    for (const issue of msg.issues){
        if (CRITICAL.includes(issue.severity)) {
            hasCriticalIssues = true;
        }
    }
    if (msg.issues.length > 0) {
        chunksWithIssues.set(key, msg.issues);
    } else if (chunksWithIssues.has(key)) {
        chunksWithIssues.delete(key);
    }
    emitIssues();
    return hasCriticalIssues;
}
const SEVERITY_ORDER = [
    'bug',
    'fatal',
    'error',
    'warning',
    'info',
    'log'
];
const CATEGORY_ORDER = [
    'parse',
    'resolve',
    'code generation',
    'rendering',
    'typescript',
    'other'
];
function sortIssues(issues) {
    issues.sort((a, b)=>{
        const first = compareByList(SEVERITY_ORDER, a.severity, b.severity);
        if (first !== 0) return first;
        return compareByList(CATEGORY_ORDER, a.category, b.category);
    });
}
const hooks = {
    beforeRefresh: ()=>{},
    refresh: ()=>{},
    buildOk: ()=>{},
    issues: (_issues)=>{}
};
function setHooks(newHooks) {
    Object.assign(hooks, newHooks);
}
function handleSocketMessage(msg) {
    sortIssues(msg.issues);
    handleIssues(msg);
    switch(msg.type){
        case 'issues':
            break;
        case 'partial':
            // aggregate updates
            aggregateUpdates(msg);
            break;
        default:
            // run single update
            const runHooks = chunkListsWithPendingUpdates.size === 0;
            if (runHooks) hooks.beforeRefresh();
            triggerUpdate(msg);
            if (runHooks) finalizeUpdate();
            break;
    }
}
function finalizeUpdate() {
    hooks.refresh();
    hooks.buildOk();
    // This is used by the Next.js integration test suite to notify it when HMR
    // updates have been completed.
    // TODO: Only run this in test environments (gate by `process.env.__NEXT_TEST_MODE`)
    if (globalThis.__NEXT_HMR_CB) {
        globalThis.__NEXT_HMR_CB();
        globalThis.__NEXT_HMR_CB = null;
    }
}
function subscribeToChunkUpdate(chunkListPath, sendMessage, callback) {
    return subscribeToUpdate({
        path: chunkListPath
    }, sendMessage, callback);
}
function subscribeToUpdate(resource, sendMessage, callback) {
    const key = resourceKey(resource);
    let callbackSet;
    const existingCallbackSet = updateCallbackSets.get(key);
    if (!existingCallbackSet) {
        callbackSet = {
            callbacks: new Set([
                callback
            ]),
            unsubscribe: subscribeToUpdates(sendMessage, resource)
        };
        updateCallbackSets.set(key, callbackSet);
    } else {
        existingCallbackSet.callbacks.add(callback);
        callbackSet = existingCallbackSet;
    }
    return ()=>{
        callbackSet.callbacks.delete(callback);
        if (callbackSet.callbacks.size === 0) {
            callbackSet.unsubscribe();
            updateCallbackSets.delete(key);
        }
    };
}
function triggerUpdate(msg) {
    const key = resourceKey(msg.resource);
    const callbackSet = updateCallbackSets.get(key);
    if (!callbackSet) {
        return;
    }
    for (const callback of callbackSet.callbacks){
        callback(msg);
    }
    if (msg.type === 'notFound') {
        // This indicates that the resource which we subscribed to either does not exist or
        // has been deleted. In either case, we should clear all update callbacks, so if a
        // new subscription is created for the same resource, it will send a new "subscribe"
        // message to the server.
        // No need to send an "unsubscribe" message to the server, it will have already
        // dropped the update stream before sending the "notFound" message.
        updateCallbackSets.delete(key);
    }
}
}),
"[project]/styles/_header.module.scss [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "_header-module-scss-module__I-eiDa__active",
  "caret_icon": "_header-module-scss-module__I-eiDa__caret_icon",
  "dropbtn": "_header-module-scss-module__I-eiDa__dropbtn",
  "dropdown": "_header-module-scss-module__I-eiDa__dropdown",
  "dropdown_content": "_header-module-scss-module__I-eiDa__dropdown_content",
  "header_main": "_header-module-scss-module__I-eiDa__header_main",
  "img_div": "_header-module-scss-module__I-eiDa__img_div",
  "input_group": "_header-module-scss-module__I-eiDa__input_group",
  "left_nav": "_header-module-scss-module__I-eiDa__left_nav",
  "missing_btn": "_header-module-scss-module__I-eiDa__missing_btn",
  "nav_list": "_header-module-scss-module__I-eiDa__nav_list",
  "pointer": "_header-module-scss-module__I-eiDa__pointer",
  "right_nav": "_header-module-scss-module__I-eiDa__right_nav",
  "searchResult": "_header-module-scss-module__I-eiDa__searchResult",
  "search_box": "_header-module-scss-module__I-eiDa__search_box",
});
}),
"[project]/globalconfig.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var Gconfig = {
    "banjoRevew": "https://review.thefashionpass.com/reviewhaute/",
    "fashionpassS3Storage": "https://fashionpass.s3.us-west-1.amazonaws.com/",
    "fashionpassS3StorageNew": "https://images.fashionpass.com/",
    "fashionpassWaitList": "https://waitlist.thefashionpass.com/",
    "envoiroment": ("TURBOPACK compile-time value", "development")
};
switch(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_APP_ENV){
    case 'X':
        Gconfig.fpAPI = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FPAPI_X;
        Gconfig.envoiroment = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_ENVIRONMENT_X;
        Gconfig.utility = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_UTILITY_URL_X;
        Gconfig.conveyorOrderCount = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CONVEYOR_ORDER_COUNT_X;
        Gconfig.cutoffTime = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CUTOFF_TIME_X;
        Gconfig.lokiUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_LOKI_URL_X;
        Gconfig.conveyorURL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CONVEYOR_API_X;
        Gconfig.ConveyorUrlSettings = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CONVEYOR_URL_X;
        Gconfig.smartBanjoApi = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SMARTBANJOAPI_X;
        Gconfig.excludeFetch = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_EXCLUDE_FETCH_X;
        Gconfig.fetchThumbRent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FETCH_THUMB_TIME_RENT_X;
        Gconfig.fetchThumbSale = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FETCH_THUMB_TIME_RENT_X;
        Gconfig.shipmentAPI = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SHIPMENT_API_X;
        Gconfig.fValidationApi = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FVALIDATIONAPI_X;
        Gconfig.productImageUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_PRODUCT_IMG_URL_X;
        Gconfig.productImageUrlFS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_PRODUCT_IMG_URL_FS_X;
        Gconfig.fraudEmailId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FRAUD_EMAIL_SETTING_ID_X;
        Gconfig.fraudNameId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FRAUD_NAME_SETTING_ID_X;
        Gconfig.fraudAddressId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FRAUD_ADDRESS_SETTING_ID_X;
        Gconfig.fraudZipId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FRAUD_ZIP_SETTING_ID_X;
        Gconfig.finalSaleTag = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FINAL_SALE_TAG_ID_X;
        Gconfig.dailyOpsSettingId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_DAILY_OPS_SETTING_ID_X;
        Gconfig.productReview = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_PRODUCT_REVIEW_X;
        Gconfig.fpUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FP_URL_X;
        Gconfig.fpPlansSettigsId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FP_PLAN_ID_X;
        Gconfig.reviewFolder = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_REVIEW_FOLDER_X;
        Gconfig.dynamicPromoCodeSettingID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_DYNAMIC_PROMO_CODES_SETTING_ID_X;
        Gconfig.entityAttrApi = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_ENTITY_ATTR_URL_X;
        Gconfig.warehouseUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FP_WAREHOUSE_URL_X;
        Gconfig.fetchThumbGrace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FETCH_THUMB_TIME_GRACE_X;
        Gconfig.maxRetailEmail = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_MAX_RETAIL_CUSTOMER_EMAIL_X;
        Gconfig.maxRetailId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_MAX_RETAIL_CUSTOMER_ID_X;
        Gconfig.FEUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FE_URL_X;
        Gconfig.switchImageSettingId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_S3_IMAGE_SWITCH_URL_ID_X;
        Gconfig.SmartBanjoUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SMART_BANJO_URL_X;
        Gconfig.shipXoutboundId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SHIPX_OUTBOUND_ID_X;
        Gconfig.scanRackPopupToggle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SCAN_RACK_POPUP_X;
        Gconfig.laundryDailyGoalSettingId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_LAUNDRY_DAILY_GOAL_SETTING_ID_X;
        Gconfig.delicatesTagID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_DELICATES_TAG_ID_X;
        Gconfig.shakeOutTagID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SHAKE_OUT_TAG_ID_X;
        Gconfig.stretchOutTagID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_STRETCH_OUT_TAG_ID_X;
        Gconfig.AIgetProdByImage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_AI_GET_PROD_BY_IMAGE_X;
        Gconfig.foldingInspectionPopularityThreshold = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FOLDING_INSPECTION_POPULARITY_THRESHOLD_X;
        Gconfig.transferItemPrice = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_TRANSFER_ITEM_PRICE_X;
        break;
    case 'Y':
        Gconfig.fpAPI = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FPAPI_Y;
        Gconfig.envoiroment = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_ENVIRONMENT_Y;
        Gconfig.utility = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_UTILITY_URL_Y;
        Gconfig.conveyorOrderCount = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CONVEYOR_ORDER_COUNT_Y;
        Gconfig.cutoffTime = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CUTOFF_TIME_Y;
        Gconfig.lokiUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_LOKI_URL_Y;
        Gconfig.conveyorURL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CONVEYOR_API_Y;
        Gconfig.ConveyorUrlSettings = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CONVEYOR_URL_Y;
        Gconfig.smartBanjoApi = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SMARTBANJOAPI_Y;
        Gconfig.excludeFetch = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_EXCLUDE_FETCH_Y;
        Gconfig.fetchThumbRent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FETCH_THUMB_TIME_RENT_Y;
        Gconfig.fetchThumbSale = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FETCH_THUMB_TIME_SALE_Y;
        Gconfig.shipmentAPI = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SHIPMENT_API_Y;
        Gconfig.fValidationApi = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FVALIDATIONAPI_Y;
        Gconfig.productImageUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_PRODUCT_IMG_URL_Y;
        Gconfig.productImageUrlFS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_PRODUCT_IMG_URL_FS_Y;
        Gconfig.fraudEmailId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FRAUD_EMAIL_SETTING_ID_Y;
        Gconfig.fraudNameId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FRAUD_NAME_SETTING_ID_Y;
        Gconfig.fraudAddressId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FRAUD_ADDRESS_SETTING_ID_Y;
        Gconfig.fraudZipId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FRAUD_ZIP_SETTING_ID_Y;
        Gconfig.finalSaleTag = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FINAL_SALE_TAG_ID_Y;
        Gconfig.dailyOpsSettingId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_DAILY_OPS_SETTING_ID_Y;
        Gconfig.productReview = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_PRODUCT_REVIEW_Y;
        Gconfig.fpUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FP_URL_Y;
        Gconfig.fpPlansSettigsId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FP_PLAN_ID_Y;
        Gconfig.reviewFolder = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_REVIEW_FOLDER_Y;
        Gconfig.dynamicPromoCodeSettingID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_DYNAMIC_PROMO_CODES_SETTING_ID_Y;
        Gconfig.entityAttrApi = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_ENTITY_ATTR_URL_Y;
        Gconfig.warehouseUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FP_WAREHOUSE_URL_Y;
        Gconfig.fetchThumbGrace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FETCH_THUMB_TIME_GRACE_Y;
        Gconfig.maxRetailEmail = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_MAX_RETAIL_CUSTOMER_EMAIL_Y;
        Gconfig.maxRetailId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_MAX_RETAIL_CUSTOMER_ID_Y;
        Gconfig.FEUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FE_URL_Y;
        Gconfig.switchImageSettingId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_S3_IMAGE_SWITCH_URL_ID_Y;
        Gconfig.SmartBanjoUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SMART_BANJO_URL_Y;
        Gconfig.scanRackPopupToggle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SCAN_RACK_POPUP_Y;
        Gconfig.laundryDailyGoalSettingId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_LAUNDRY_DAILY_GOAL_SETTING_ID_Y;
        Gconfig.delicatesTagID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_DELICATES_TAG_ID_Y;
        Gconfig.shakeOutTagID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SHAKE_OUT_TAG_ID_Y;
        Gconfig.stretchOutTagID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_STRETCH_OUT_TAG_ID_Y;
        Gconfig.AIgetProdByImage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_AI_GET_PROD_BY_IMAGE_Y;
        Gconfig.foldingInspectionPopularityThreshold = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FOLDING_INSPECTION_POPULARITY_THRESHOLD_Y;
        Gconfig.transferItemPrice = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_TRANSFER_ITEM_PRICE_Y;
        break;
    default:
        Gconfig.fpAPI = ("TURBOPACK compile-time value", "https://dev-api.fashionpass.com/api/v1/");
        Gconfig.envoiroment = ("TURBOPACK compile-time value", "development");
        Gconfig.utility = ("TURBOPACK compile-time value", "https://dev-utility.fashionpass.com/");
        Gconfig.conveyorOrderCount = ("TURBOPACK compile-time value", "38");
        Gconfig.cutoffTime = ("TURBOPACK compile-time value", "27");
        Gconfig.lokiUrl = ("TURBOPACK compile-time value", "https://dev-loki.fashionpass.com/");
        Gconfig.conveyorURL = ("TURBOPACK compile-time value", "https://dev-conveyor.fashionpass.com/api/v1/");
        Gconfig.ConveyorUrlSettings = ("TURBOPACK compile-time value", "54");
        Gconfig.smartBanjoApi = ("TURBOPACK compile-time value", "https://dev-smartbanjo.fashionpass.com/api/v1/");
        Gconfig.excludeFetch = ("TURBOPACK compile-time value", "58");
        Gconfig.fetchThumbRent = ("TURBOPACK compile-time value", "47");
        Gconfig.fetchThumbSale = ("TURBOPACK compile-time value", "57");
        Gconfig.shipmentAPI = ("TURBOPACK compile-time value", "https://dev-shipment.fashionpass.com/api/v1/");
        Gconfig.fValidationApi = ("TURBOPACK compile-time value", "https://dev-fvalidation.fashionpass.com/api/v1/");
        Gconfig.productImageUrl = ("TURBOPACK compile-time value", "https://fashionpass.s3.us-west-1.amazonaws.com/products-development/");
        Gconfig.productImageUrlFS = ("TURBOPACK compile-time value", "https://images.fashionpass.com/products-development/");
        Gconfig.fraudEmailId = ("TURBOPACK compile-time value", "77");
        Gconfig.fraudNameId = ("TURBOPACK compile-time value", "78");
        Gconfig.fraudAddressId = ("TURBOPACK compile-time value", "79");
        Gconfig.fraudZipId = ("TURBOPACK compile-time value", "80");
        Gconfig.finalSaleTag = ("TURBOPACK compile-time value", "554");
        Gconfig.dailyOpsSettingId = ("TURBOPACK compile-time value", "89");
        Gconfig.productReview = ("TURBOPACK compile-time value", "https://dev-reviews.fashionpass.com/api/v1/");
        Gconfig.fpUrl = ("TURBOPACK compile-time value", "https://dev.fashionpass.com/");
        Gconfig.fpPlansSettigsId = ("TURBOPACK compile-time value", "63");
        Gconfig.reviewFolder = ("TURBOPACK compile-time value", "review_uploads_dev_stage_compressed/");
        Gconfig.dynamicPromoCodeSettingID = ("TURBOPACK compile-time value", "91");
        Gconfig.entityAttrApi = ("TURBOPACK compile-time value", "https://entityattr-dev.fashionpass.com/api/v1/");
        Gconfig.warehouseUrl = ("TURBOPACK compile-time value", "https://warehouse-dev.fashionpass.com/");
        Gconfig.fetchThumbGrace = ("TURBOPACK compile-time value", "112");
        Gconfig.maxRetailEmail = ("TURBOPACK compile-time value", "maxretailtesting@gmail.com");
        Gconfig.maxRetailId = ("TURBOPACK compile-time value", "499928");
        Gconfig.FEUrl = ("TURBOPACK compile-time value", "https://dev.fashionpass.com/");
        Gconfig.switchImageSettingId = ("TURBOPACK compile-time value", "127");
        Gconfig.SmartBanjoUrl = ("TURBOPACK compile-time value", "https://banjo-dev.fashionpass.com:3001/");
        Gconfig.shipXoutboundId = ("TURBOPACK compile-time value", "446");
        Gconfig.scanRackPopupToggle = ("TURBOPACK compile-time value", "146");
        Gconfig.laundryDailyGoalSettingId = ("TURBOPACK compile-time value", "159");
        Gconfig.delicatesTagID = ("TURBOPACK compile-time value", "1003");
        Gconfig.shakeOutTagID = ("TURBOPACK compile-time value", "1004");
        Gconfig.stretchOutTagID = ("TURBOPACK compile-time value", "1005");
        Gconfig.AIgetProdByImage = ("TURBOPACK compile-time value", "http://10.0.40.143:6060/v1/gen_vision_search");
        Gconfig.foldingInspectionPopularityThreshold = ("TURBOPACK compile-time value", "156");
        Gconfig.transferItemPrice = ("TURBOPACK compile-time value", "101");
}
Gconfig.imageS3URl = Gconfig.fashionpassS3Storage + "products/";
Gconfig.assetsURL = Gconfig.fashionpassS3Storage + "assets/";
const __TURBOPACK__default__export__ = Gconfig;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/redux/slices/banjoUserSlice.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FETCH_USER_FAILURE",
    ()=>FETCH_USER_FAILURE,
    "FETCH_USER_STARTED",
    ()=>FETCH_USER_STARTED,
    "FETCH_USER_SUCCESS",
    ()=>FETCH_USER_SUCCESS,
    "REMOVE_USER_DATA",
    ()=>REMOVE_USER_DATA,
    "banjoUserSlice",
    ()=>banjoUserSlice,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$redux$2d$wrapper$2f$es6$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-redux-wrapper/es6/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/globalconfig.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-cookie/dist/js.cookie.mjs [client] (ecmascript)");
;
;
;
;
const initialState = {
    banjoUser: null,
    loading: false,
    error: null
};
const banjoUserSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'banjoUser',
    initialState,
    reducers: {
        // [HYDRATE]: (state, action) => {
        //   state.user = 'aa';
        // },
        FETCH_USER_SUCCESS: (state, action)=>{
            return {
                ...state.banjoUser,
                banjoUser: action.payload,
                loading: false
            };
        },
        FETCH_USER_STARTED: (state)=>{
            state.loading = true;
        },
        FETCH_USER_FAILURE: (state)=>{
            state.loading = false;
        },
        REMOVE_USER_DATA: (state)=>{
            return {
                ...state.banjoUser,
                banjoUser: null,
                loading: false
            };
        }
    },
    extraReducers: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$redux$2d$wrapper$2f$es6$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["HYDRATE"]]: (state, action)=>{
            return {
                ...state.banjoUser,
                ...action.payload.banjoUser
            };
        // console.log('action', action.payload.banjoUser)
        // console.log('hyderate run ----------------------------------------->', current(state))
        // if(action.payload.banjoUser  && action.payload.banjoUser.banjoUser){
        //   return{
        //     ...state.banjoUser,
        //     user : action.payload.banjoUser.banjoUser,
        //   }
        // }
        }
    }
});
const { FETCH_USER_SUCCESS, FETCH_USER_STARTED, FETCH_USER_FAILURE, REMOVE_USER_DATA } = banjoUserSlice.actions;
const __TURBOPACK__default__export__ = banjoUserSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/redux/slices/systemSettingSlice.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SYSTEM_SETTING_FAILED",
    ()=>SYSTEM_SETTING_FAILED,
    "SYSTEM_SETTING_STARTED",
    ()=>SYSTEM_SETTING_STARTED,
    "SYSTEM_SETTING_SUCCESS",
    ()=>SYSTEM_SETTING_SUCCESS,
    "default",
    ()=>__TURBOPACK__default__export__,
    "systemSettingSlice",
    ()=>systemSettingSlice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$redux$2d$wrapper$2f$es6$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-redux-wrapper/es6/index.js [client] (ecmascript)");
;
;
const initialState = {
    systemSettingId: null,
    allSystemSettings: [],
    loading: true,
    error: null
};
const systemSettingSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'systemSetting',
    initialState,
    reducers: {
        SYSTEM_SETTING_STARTED: (state)=>{
            // console.log('------------------> system setting started', state)
            return {
                ...state.systemSettings,
                loading: true,
                error: null
            };
        },
        SYSTEM_SETTING_SUCCESS: (state, action)=>{
            return {
                ...state.systemSettings,
                allSystemSettings: action.payload,
                error: null,
                loading: false
            };
        },
        SYSTEM_SETTING_FAILED: (state, action)=>{
            return {
                ...state.systemSettings,
                error: action.payload,
                loading: false
            };
        }
    },
    extraReducers: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$redux$2d$wrapper$2f$es6$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["HYDRATE"]]: (state, action)=>{
            return {
                ...state.systemSettings,
                ...action.payload.systemSettings
            };
        }
    }
});
const { SYSTEM_SETTING_SUCCESS, SYSTEM_SETTING_STARTED, SYSTEM_SETTING_FAILED } = systemSettingSlice.actions;
const __TURBOPACK__default__export__ = systemSettingSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/functions/globalFunctions.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddOrRemoveSlotAccessoriesByPouch",
    ()=>AddOrRemoveSlotAccessoriesByPouch,
    "AddScheduleTask",
    ()=>AddScheduleTask,
    "AddTaskNotes",
    ()=>AddTaskNotes,
    "CustomerNeverBlockTagAdd",
    ()=>CustomerNeverBlockTagAdd,
    "DeleteTaskNotes",
    ()=>DeleteTaskNotes,
    "GetMaintenanceUserRole",
    ()=>GetMaintenanceUserRole,
    "GetPriorityCarrierShipping",
    ()=>GetPriorityCarrierShipping,
    "GetShippingDiagnosticsLabel",
    ()=>GetShippingDiagnosticsLabel,
    "GetShippingLabel",
    ()=>GetShippingLabel,
    "GetShippingRate",
    ()=>GetShippingRate,
    "GetShippingRateByguid",
    ()=>GetShippingRateByguid,
    "GetTaskNotesByTaskId",
    ()=>GetTaskNotesByTaskId,
    "PerformUserTaskAction",
    ()=>PerformUserTaskAction,
    "QCTunnelInspection",
    ()=>QCTunnelInspection,
    "UpdateUserTask",
    ()=>UpdateUserTask,
    "ValidateBarcodePouchData",
    ()=>ValidateBarcodePouchData,
    "addBarcodeRange",
    ()=>addBarcodeRange,
    "addContainerId",
    ()=>addContainerId,
    "addNewBanjoUser",
    ()=>addNewBanjoUser,
    "addOrDeleteAutoHideProduct",
    ()=>addOrDeleteAutoHideProduct,
    "addOrEditRack",
    ()=>addOrEditRack,
    "alphaNumeric",
    ()=>alphaNumeric,
    "alphabetOnly",
    ()=>alphabetOnly,
    "autoCompleteSearch",
    ()=>autoCompleteSearch,
    "barcodeScanCheck",
    ()=>barcodeScanCheck,
    "barcodeScanCheckAlteration",
    ()=>barcodeScanCheckAlteration,
    "barcodeScanCheckStain",
    ()=>barcodeScanCheckStain,
    "calculateAge",
    ()=>calculateAge,
    "charNumber",
    ()=>charNumber,
    "checkBusy",
    ()=>checkBusy,
    "checkExpiryToken",
    ()=>checkExpiryToken,
    "checkTags",
    ()=>checkTags,
    "checkUserAthentication",
    ()=>checkUserAthentication,
    "checkUserAthenticationForIframe",
    ()=>checkUserAthenticationForIframe,
    "checkUserPassword",
    ()=>checkUserPassword,
    "clearCacheObject",
    ()=>clearCacheObject,
    "convertTime",
    ()=>convertTime,
    "deletAlertSetting",
    ()=>deletAlertSetting,
    "deleteBarcodeRangeById",
    ()=>deleteBarcodeRangeById,
    "deleteRack",
    ()=>deleteRack,
    "getActiveCustomer",
    ()=>getActiveCustomer,
    "getActiveSubscrptionsGraph",
    ()=>getActiveSubscrptionsGraph,
    "getAlertSetting",
    ()=>getAlertSetting,
    "getAllAdminSizes",
    ()=>getAllAdminSizes,
    "getAllAlterationUsers",
    ()=>getAllAlterationUsers,
    "getAllCategorizedProduct",
    ()=>getAllCategorizedProduct,
    "getAllCategorizedProductNew",
    ()=>getAllCategorizedProductNew,
    "getAllFavorites",
    ()=>getAllFavorites,
    "getAllPressingUsers",
    ()=>getAllPressingUsers,
    "getAllStainUsers",
    ()=>getAllStainUsers,
    "getAllSubscribeBISsku",
    ()=>getAllSubscribeBISsku,
    "getAllSystemSettings",
    ()=>getAllSystemSettings,
    "getAllWinbackDiscounts",
    ()=>getAllWinbackDiscounts,
    "getAlterationUserGoals",
    ()=>getAlterationUserGoals,
    "getAuthTokenfromcookie",
    ()=>getAuthTokenfromcookie,
    "getAutoHideProduct",
    ()=>getAutoHideProduct,
    "getAutoHideSearchProducts",
    ()=>getAutoHideSearchProducts,
    "getBISTrackingByCustomer",
    ()=>getBISTrackingByCustomer,
    "getBISTrackingBySKU",
    ()=>getBISTrackingBySKU,
    "getBackTobackRentalOrdersData",
    ()=>getBackTobackRentalOrdersData,
    "getBackinStockSubscription",
    ()=>getBackinStockSubscription,
    "getBanjoUserList",
    ()=>getBanjoUserList,
    "getBarcodeDataForBucket",
    ()=>getBarcodeDataForBucket,
    "getBarcodeRange",
    ()=>getBarcodeRange,
    "getBrandSuggestions",
    ()=>getBrandSuggestions,
    "getBucketSheet",
    ()=>getBucketSheet,
    "getBulkEntityAttributes",
    ()=>getBulkEntityAttributes,
    "getCantFindOrderItems",
    ()=>getCantFindOrderItems,
    "getCarreirs",
    ()=>getCarreirs,
    "getClearJetFMCAirport",
    ()=>getClearJetFMCAirport,
    "getConveyorSessionInfo",
    ()=>getConveyorSessionInfo,
    "getCurrentSessionStats",
    ()=>getCurrentSessionStats,
    "getCustomerBlockLinkAccount",
    ()=>getCustomerBlockLinkAccount,
    "getCustomerDBSearch",
    ()=>getCustomerDBSearch,
    "getCustomerPerOrderSpend",
    ()=>getCustomerPerOrderSpend,
    "getCustomerStatus",
    ()=>getCustomerStatus,
    "getDailyWashTracking",
    ()=>getDailyWashTracking,
    "getDowngradeCustomer",
    ()=>getDowngradeCustomer,
    "getEntitiesByAttribute",
    ()=>getEntitiesByAttribute,
    "getEntityAttribute",
    ()=>getEntityAttribute,
    "getFpPLansFromSettings",
    ()=>getFpPLansFromSettings,
    "getInClosetNotSlotted",
    ()=>getInClosetNotSlotted,
    "getInspectionCleaningReports",
    ()=>getInspectionCleaningReports,
    "getInstagramImage",
    ()=>getInstagramImage,
    "getMissingReturnItemsNewData",
    ()=>getMissingReturnItemsNewData,
    "getMissingSessionStats",
    ()=>getMissingSessionStats,
    "getMonthlyPausedCustomerGraph",
    ()=>getMonthlyPausedCustomerGraph,
    "getNavbarOrderNumbers",
    ()=>getNavbarOrderNumbers,
    "getNewSkudiscrepancies",
    ()=>getNewSkudiscrepancies,
    "getOrderEntityAttribute",
    ()=>getOrderEntityAttribute,
    "getPauseReport",
    ()=>getPauseReport,
    "getPausedCustomer",
    ()=>getPausedCustomer,
    "getPendingCustomer",
    ()=>getPendingCustomer,
    "getProductSale",
    ()=>getProductSale,
    "getProductsByImage",
    ()=>getProductsByImage,
    "getQcTunnelUsers",
    ()=>getQcTunnelUsers,
    "getRack",
    ()=>getRack,
    "getScannedCategorizedProductFromBarcode",
    ()=>getScannedCategorizedProductFromBarcode,
    "getScannedCategorizedProductFromBarcodeNew",
    ()=>getScannedCategorizedProductFromBarcodeNew,
    "getShippingCarrierSorting",
    ()=>getShippingCarrierSorting,
    "getShippingMethods",
    ()=>getShippingMethods,
    "getSkuCheck",
    ()=>getSkuCheck,
    "getSkudiscrepancies",
    ()=>getSkudiscrepancies,
    "getSleepingCustomersReport",
    ()=>getSleepingCustomersReport,
    "getStainUserGoals",
    ()=>getStainUserGoals,
    "getStatus",
    ()=>getStatus,
    "getSubsActivityGraphData",
    ()=>getSubsActivityGraphData,
    "getSubsFailedPaymentsDetails",
    ()=>getSubsFailedPaymentsDetails,
    "getSubsFailedPaymentsDetailsWithoutDecline",
    ()=>getSubsFailedPaymentsDetailsWithoutDecline,
    "getSurveyNpsReport",
    ()=>getSurveyNpsReport,
    "getSystemSettingById",
    ()=>getSystemSettingById,
    "getTotalFpPaused",
    ()=>getTotalFpPaused,
    "getUSStateCodeByStateName",
    ()=>getUSStateCodeByStateName,
    "getUniqueItems",
    ()=>getUniqueItems,
    "getUserGoals",
    ()=>getUserGoals,
    "getUserTasks",
    ()=>getUserTasks,
    "getWasherDetail",
    ()=>getWasherDetail,
    "getZendeskAIAssistanceRules",
    ()=>getZendeskAIAssistanceRules,
    "getZendeskBackgroundJobDetails",
    ()=>getZendeskBackgroundJobDetails,
    "getZendeskDateRangeServiceRunning",
    ()=>getZendeskDateRangeServiceRunning,
    "getZendeskEnableDisableBackgroundJobs",
    ()=>getZendeskEnableDisableBackgroundJobs,
    "getZendeskTicketAssistanceByDate",
    ()=>getZendeskTicketAssistanceByDate,
    "identifyTracker",
    ()=>identifyTracker,
    "loginBanjoUser",
    ()=>loginBanjoUser,
    "logoutBanjoUser",
    ()=>logoutBanjoUser,
    "manualCheckInData",
    ()=>manualCheckInData,
    "markOrderDelivered",
    ()=>markOrderDelivered,
    "mirInvoices",
    ()=>mirInvoices,
    "numericOnly",
    ()=>numericOnly,
    "postAlertsetting",
    ()=>postAlertsetting,
    "processDate",
    ()=>processDate,
    "reconcilePaymentFailed",
    ()=>reconcilePaymentFailed,
    "retryInvoicePayment",
    ()=>retryInvoicePayment,
    "sendEmail",
    ()=>sendEmail,
    "sendGenericEmail",
    ()=>sendGenericEmail,
    "sleep",
    ()=>sleep,
    "sortDataAscending",
    ()=>sortDataAscending,
    "sortDataDescending",
    ()=>sortDataDescending,
    "sortDatesWithCertainFormat",
    ()=>sortDatesWithCertainFormat,
    "submitCategorizedProduct",
    ()=>submitCategorizedProduct,
    "submitCategorizedProductNew",
    ()=>submitCategorizedProductNew,
    "toFixedNoRound",
    ()=>toFixedNoRound,
    "triggerFePipeline",
    ()=>triggerFePipeline,
    "updateBanjoUser",
    ()=>updateBanjoUser,
    "updateBanjoUserPass",
    ()=>updateBanjoUserPass,
    "updateBarcodeRangeById",
    ()=>updateBarcodeRangeById,
    "updateCarrierAliasCutoffTime",
    ()=>updateCarrierAliasCutoffTime,
    "updateClearJetFMCAirport",
    ()=>updateClearJetFMCAirport,
    "updateInvoiceClosed",
    ()=>updateInvoiceClosed,
    "updateOrderShippingAddress",
    ()=>updateOrderShippingAddress,
    "updateShipmentCountLower",
    ()=>updateShipmentCountLower,
    "updateSystemSetting",
    ()=>updateSystemSetting,
    "updateSystemSettingWithResp",
    ()=>updateSystemSettingWithResp,
    "updateZendeskAIAssistanceRules",
    ()=>updateZendeskAIAssistanceRules,
    "uploadAndValidateZip",
    ()=>uploadAndValidateZip,
    "validateBarcode",
    ()=>validateBarcode,
    "validateEmail",
    ()=>validateEmail,
    "validateOrderNameString",
    ()=>validateOrderNameString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/globalconfig.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-cookie/dist/js.cookie.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cookie$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cookie/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$slices$2f$banjoUserSlice$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/redux/slices/banjoUserSlice.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$slices$2f$systemSettingSlice$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/redux/slices/systemSettingSlice.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/moment/moment.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-redux/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [client] (ecmascript)");
;
;
;
;
;
;
;
;
;
async function sleep(msec) {
    return new Promise((resolve)=>setTimeout(resolve, msec));
}
async function loginBanjoUser(email, password, dispatch) {
    if (email != '' && password != '') {
        return await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'BanjoUser/Authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then(async (response)=>await response.json()).then(async (data)=>{
            if (data.success) {
                if (location.hostname.indexOf('banjo.') > -1) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].set('user_token', data.user.token, {
                        expires: 7,
                        path: '/',
                        domain: location.hostname.split('banjo.')[1]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].set('banjo_login', data.user.token, {
                        expires: 7,
                        path: '/',
                        domain: location.hostname.split('banjo.')[1]
                    });
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].set('user_token', data.user.token, {
                        expires: 7,
                        path: '/',
                        domain: location.hostname
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].set('banjo_login', data.user.token, {
                        expires: 7,
                        path: '/',
                        domain: location.hostname
                    });
                }
                let loginData = data;
                await checkUserAthentication(false, dispatch, data?.user?.token);
                return loginData;
            } else {
                return data;
            }
        }).catch(function(error) {
            console.log(error);
        });
    }
}
async function checkUserAthentication(server, dispatch, token = '') {
    let cookies = ' ';
    if (server && server.headers) {
        cookies = server.headers.cookie;
    } else {
        cookies = document.cookie;
    }
    if (cookies != '') {
        //implement the login authentication here once usman is done 
        if (typeof cookies === 'string') {
            const cookiesJSON = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cookie$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].parse(cookies);
            if (cookiesJSON.user_token != undefined) {
                let user_token;
                if (token) {
                    user_token = token;
                } else {
                    user_token = cookiesJSON.user_token;
                }
                // if(document.querySelector("#banjoFrame")) {
                //     let src = document.querySelector("#banjoFrame")?.src
                //     if(src?.index("token=") > -1 && src?.index("customer_basic_info") > -1) {
                //         let _token = src?.split("token=")[1]
                //         if(_token?.length > 0) {
                //             user_token = _token
                //         }
                //     }
                // }
                await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'BanjoUser/GetUserSummary', {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + user_token
                    }
                }).then(async (response)=>await response.json()).then(async (userData)=>{
                    if (userData.success) {
                        let banjoUser = userData.user_summary;
                        let stringifyBanjoUser = JSON.stringify(banjoUser);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].set('user_data', stringifyBanjoUser);
                        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$slices$2f$banjoUserSlice$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FETCH_USER_SUCCESS"])(userData.user_summary));
                        console.log('success done --------------------------------->');
                    // router.push('/order')
                    // document.location.href = "/order";
                    // return banjoUser;
                    } else {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].remove('user_token');
                    // dispatch(fetchBanjoUserFailure('not_login'))
                    // document.location.href = "/";
                    }
                }).catch(function(error) {
                    console.log(error);
                // dispatch(fetchBanjoUserFailure(error))
                });
            } else {
                console.log('Banjo User not login');
            }
        }
    }
// }
}
async function checkUserAthenticationForIframe(server, dispatch, token = '') {
    let cookies = ' ';
    if (server && server.headers) {
        cookies = server.headers.cookie;
    } else {
        cookies = document.cookie;
    }
    await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'BanjoUser/GetUserSummary', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }).then(async (response)=>await response.json()).then(async (userData)=>{
        if (userData.success) {
            let banjoUser = userData.user_summary;
            let stringifyBanjoUser = JSON.stringify(banjoUser);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].set('user_data', stringifyBanjoUser);
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$slices$2f$banjoUserSlice$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FETCH_USER_SUCCESS"])(userData.user_summary));
            console.log('success done --------------------------------->');
        // router.push('/order')
        // document.location.href = "/order";
        // return banjoUser;
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].remove('user_token');
        // dispatch(fetchBanjoUserFailure('not_login'))
        // document.location.href = "/";
        }
    }).catch(function(error) {
        console.log(error);
    // dispatch(fetchBanjoUserFailure(error))
    });
}
async function getAllSystemSettings(dispatch) {
    // return async (dispatch, getState) => { 
    dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$slices$2f$systemSettingSlice$2e$js__$5b$client$5d$__$28$ecmascript$29$__["SYSTEM_SETTING_STARTED"]);
    await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `WebsiteSettings/GetSystemSettings/`, {
        method: 'GET'
    }).then(async (response)=>await response.json()).then((data)=>{
        if (data.errors == undefined && data.success) {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$slices$2f$systemSettingSlice$2e$js__$5b$client$5d$__$28$ecmascript$29$__["SYSTEM_SETTING_SUCCESS"])(data.system_settings));
        } else {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$slices$2f$systemSettingSlice$2e$js__$5b$client$5d$__$28$ecmascript$29$__["SYSTEM_SETTING_FAILED"])(data));
        }
    });
// }
}
function getAuthTokenfromcookie(server) {
    let cookies = '';
    let user_token = "not loged in";
    if (server && server.headers) {
        cookies = server.headers.cookie;
    } else {
        cookies = document.cookie;
        if (document?.location?.href?.indexOf("iframe") > -1) {
            user_token = localStorage.getItem("user_token");
            return user_token;
        }
    }
    // let fromIframe = false
    // let iframeToken = false
    // if(document.querySelector("#banjoFrame")) {
    //     let src = document.querySelector("#banjoFrame")?.src
    //     if(src?.index("token=") > -1 && src?.index("customer_basic_info") > -1){
    //         let _token = src?.split("token=")[1]
    //         if(_token?.length > 0) {
    //             fromIframe = true
    //             iframeToken = _token
    //         }
    //     }
    // }
    if (cookies != '') {
        if (typeof cookies === 'string') {
            const cookiesJSON = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cookie$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].parse(cookies);
            if (cookiesJSON.user_token != undefined) {
                user_token = cookiesJSON.user_token;
            }
        }
    }
    // if(fromIframe && iframeToken) {
    //     user_token = iframeToken
    // }
    return user_token;
}
function convertTime(timestamp) {
    var date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(timestamp * 1000)._d;
    let created_at = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(date, 'MM-DD-YYYY HH:mm').utc().format("YYYY-MM-DD HH:mm");
    created_at = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(created_at)._d;
    var hours = created_at.getHours();
    var minutes = created_at.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}
const getSystemSettingById = (setting_id, settings, dispatch)=>{
    dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$slices$2f$systemSettingSlice$2e$js__$5b$client$5d$__$28$ecmascript$29$__["SYSTEM_SETTING_STARTED"]);
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `WebsiteSettings/GetSystemSettingById/${setting_id}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        if (data?.success) {
            let systemSettingArray = settings.allSystemSettings;
            if (systemSettingArray?.length == 0) {
                systemSettingArray = [
                    data?.system_settings?.system_settings
                ];
            } else {
                systemSettingArray?.filter((item)=>{
                    if (item.setting_id == setting_id) {
                        item = data?.system_settings?.system_settings;
                    }
                });
            }
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$slices$2f$systemSettingSlice$2e$js__$5b$client$5d$__$28$ecmascript$29$__["SYSTEM_SETTING_SUCCESS"])(systemSettingArray));
        }
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
// async function getSystemSettingById(setting_id, server, store) {
//     let currentSettings = store.getState()["systemSettings"];
//     // console.log('state ---------->', store)
//     // console.log('system---------->', currentSettings)
//     let user_token = getAuthTokenfromcookie(server);
//     await fetch(Gconfig.fpAPI + `WebsiteSettings/GetSystemSettingById/${setting_id}`, {
//         method: 'GET',
//         headers: { 'Authorization': 'Bearer ' + user_token }
//     }).then(async (response) => await response.json()).then(data => {
//         if (data.errors == undefined && data.success) {
//             let newsettings = []
//             // newsettings = currentSettings.allSystemSettings;
//             // let obj = {...newsettings, } 
//             // console.log('curset---------->', newsettings)
//             // console.log('curset1---------->', data.system_settings.system_settings)
//             newsettings.push(data.system_settings.system_settings);
//             store.dispatch(SYSTEM_SETTING_SUCCESS(newsettings))
//         }
//         else {
//             store.dispatch(SYSTEM_SETTING_SUCCESS(data))
//         }
//     })
// }
function logoutBanjoUser() {
    return async (dispatch, req)=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$slices$2f$banjoUserSlice$2e$js__$5b$client$5d$__$28$ecmascript$29$__["REMOVE_USER_DATA"])());
    };
}
function calculateAge(dateString) {
    var ageInMilliseconds = new Date() - new Date(dateString);
    return Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365);
}
function numericOnly(value) {
    if (value == 'e') return false;
    return /^[0-9]*$/gm.test(value);
}
function alphabetOnly(value) {
    if (value.length == 1 && /\s/.test(value) == true) return;
    return /^[a-zA-Z\s]*$/gm.test(value);
}
function alphaNumeric(value) {
    if (value.length == 1 && /\s/.test(value) == true) {
        return "";
    }
    if (value.length == 1 && /[a-zA-Z]/g.test(value) == true) {
        return "";
    }
    return value.replace(/[^a-zA-Z0-9\s/]/g, "");
}
function charNumber(value) {
    if (value.length == 1 && /\s/.test(value) == true) {
        return "";
    }
    if (value.length == 1 && /[,-]/g.test(value) == true) {
        return "";
    }
    return value.replace(/[^a-zA-Z0-9,-]/g, "");
}
function validateOrderNameString(value) {
    if (value.length == 1 && /\s/.test(value) == true) {
        return "";
    }
    if (value.length == 1 && /[,]/g.test(value) == true) {
        return "";
    }
    return value.replace(/[^0-9,]/g, "");
}
function validateEmail(email) {
    return /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(email);
}
// function sendGenericEmail(content) {
//     let formData = new FormData()
//     Object.entries(content).map((value, key) => {
//         if (typeof value[1] == 'object' && value[1].length > 1) {
//             for (let x in value[1]) {
//                 formData.append(value[0] + `[${x}]`, value[1][x])
//             }
//         } else {
//             formData.append(value[0], value[1])
//         }
//     });
//     return fetch(Gconfig.fpAPI + "Cart/SendEmailByApiWithAttachment", {
//         method: 'POST',
//         headers: { 'FashionPassAuth': 'eyJBdXRob3IiOiJGYXNoaW9uUGFzcyIsImFsZyI6IkhTMjU2In0.e30.oUQGjCS2S_jycg4PZnFK4uQ81DsNFX-N1m81Dfahi6o' },
//         body: formData,
//         processData: false,
//         contentType: false,
//         mimeType: "multipart/form-data",
//     }).then(async (response) => await response.json()).then(data => {
//         return data;
//     })
// }
function sendGenericEmail(content) {
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + "Cart/SendEmailByApiWithAttachments", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'FashionPassAuth': 'eyJBdXRob3IiOiJGYXNoaW9uUGFzcyIsImFsZyI6IkhTMjU2In0.e30.oUQGjCS2S_jycg4PZnFK4uQ81DsNFX-N1m81Dfahi6o'
        },
        body: JSON.stringify(content)
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
}
function autoCompleteSearch(term) {
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'BanjoUser/AutocompleteSearch?term=' + term).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
}
function getNavbarOrderNumbers() {
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Order/GetNavbarOrderNumbers', {
        method: 'GET'
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
}
function getConveyorSessionInfo() {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].conveyorURL + 'conveyor/GetSession', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
}
function getCurrentSessionStats(conveyorUrlSetting) {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].conveyorURL + 'conveyor/GetCurrentSessionStats', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
}
const checkBusy = ()=>{
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].conveyorURL + 'ConveyorPoller/CheckBussy', {
        method: 'GET'
    }).then((response)=>response.text()).then((data)=>{
        return data;
    }).catch((err)=>{
        return null;
    });
};
function getMissingSessionStats(conveyorUrlSetting) {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].conveyorURL + 'conveyor/GetMissingItemStats', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
}
function processDate(timeStamp, format) {
    let date = timeStamp;
    let currentDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])().unix();
    let a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(date).utc();
    let b = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(currentDate);
    let diff = a.startOf('day').diff(b.startOf('day'), 'days');
    let string = '';
    let isDdate = false;
    switch(diff){
        case 0:
            string = 'Today at ' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(timeStamp).utc().format('h:mm a');
            break;
        case -1:
            string = 'Yesterday at ' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(timeStamp).utc().format('h:mm a');
            break;
        case 1:
            string = 'Tomorrow at ' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(timeStamp).utc().format('h:mm a');
            break;
        default:
            isDdate = true;
    }
    if (isDdate) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(timeStamp).utc().format(format);
    } else {
        return string;
    }
}
const validateBarcode = (val)=>{
    if (val?.length < 8 || val?.length > 8) {
        return {
            error: true,
            msg: 'Barcode value must be 8 characters, please enter correct value and retry'
        };
    } else if (val?.charAt(0) != '1' && val?.charAt(0) !== '9' && val?.charAt(0) !== '8') {
        return {
            error: true,
            msg: 'Barcode value must start from 1 or 9 or 8, please enter correct value and retry'
        };
    } else {
        return {
            error: false,
            msg: ''
        };
    }
};
function manualCheckInData() {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].shipmentAPI + 'CheckIn/GetCheckInOrderDetails', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
}
function updateSystemSetting(dispatch, obj, systemSetting) {
    let user_token = getAuthTokenfromcookie();
    let currentSystemSettings = Object.assign({}, systemSetting);
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `WebsiteSettings/UpdateSystemSetting`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(obj)
    }).then((response)=>response.json()).then((data)=>{
        if (data.success) {
            let updatedArray = [];
            currentSystemSettings.allSystemSettings.filter((value, index)=>{
                if (value.setting_id == obj.setting_id) {
                    updatedArray.push(obj);
                } else {
                    updatedArray.push(value);
                }
            });
            // console.warn(updatedArray)
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$slices$2f$systemSettingSlice$2e$js__$5b$client$5d$__$28$ecmascript$29$__["SYSTEM_SETTING_SUCCESS"])(updatedArray));
        }
    }).catch((err)=>{
        console.log(err);
    });
}
function updateSystemSettingWithResp(dispatch, obj, systemSetting) {
    let user_token = getAuthTokenfromcookie();
    let currentSystemSettings = Object.assign({}, systemSetting);
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `WebsiteSettings/UpdateSystemSetting`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(obj)
    }).then((response)=>response.json()).then((data)=>{
        if (data.success) {
            let updatedArray = [];
            currentSystemSettings.allSystemSettings.filter((value, index)=>{
                if (value.setting_id == obj.setting_id) {
                    updatedArray.push(obj);
                } else {
                    updatedArray.push(value);
                }
            });
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$slices$2f$systemSettingSlice$2e$js__$5b$client$5d$__$28$ecmascript$29$__["SYSTEM_SETTING_SUCCESS"])(updatedArray));
            return {
                success: true,
                data
            };
        } else {
            return {
                success: false,
                error: data.error || 'Unknown error'
            };
        }
    }).catch((err)=>{
        console.log(err);
    });
}
function updateCarrierAliasCutoffTime(obj) {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'CarrierManagement/UpdateCarrierAliasCutoffTime', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(obj)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function getCarreirs() {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'CarrierManagement/GetCarriers', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function getShippingMethods() {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Delivery/GetDeliveryMethods', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function updateOrderShippingAddress(object) {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'order/UpdateOrderShippingAddress', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(object)
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function sortDataAscending(a, b) {
    if (a && b) {
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        return 0;
    }
}
function sortDataDescending(a, b) {
    if (a && b) {
        if (a < b) {
            return 1;
        }
        if (a > b) {
            return -1;
        }
        return 0;
    }
}
function checkTags(tags) {
    tags = tags?.join();
    if (tags?.indexOf('two-piece-set') > -1) {
        return 'TWO PIECE SET';
    } else if (tags?.indexOf('has-belt') > -1) {
        return 'HAS BELT';
    } else if (tags?.indexOf('extra-pieces') > -1) {
        return 'EXTRA PIECE';
    } else {
        return '';
    }
}
// decimal values with no roundoff values
function toFixedNoRound(number, precision = 1) {
    const factor = Math.pow(10, precision);
    return Math.floor(number * factor) / factor;
}
function getUniqueItems(ObjsArray) {
    let unique = [];
    ObjsArray.filter((item)=>{
        let index;
        index = unique.findIndex((x)=>x.sku.sku == item.sku.sku);
        if (index <= -1) {
            unique.push(item);
        }
    });
    return unique;
}
function getAllFavorites(customerId = '') {
    let user_token = getAuthTokenfromcookie();
    let forCustomer = '';
    if (customerId !== '') {
        forCustomer = `?customer_id=${customerId}`;
    }
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Product/GetAllFavoritesItemsForBanjo${forCustomer}`).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((error)=>{
        console.log(error);
    });
}
function sendEmail(payload) {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Customer/SendEmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(payload)
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function getAllCategorizedProduct() {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Product/GetCategorizedProductList', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function submitCategorizedProduct(object) {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Product/UpdateCategorizedProductTags', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(object)
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function getScannedCategorizedProductFromBarcode(barcodeId) {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Product/GetCategorizedProductByBarcode?barcode=${barcodeId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function getUserGoals(userId) {
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Barcode/GetUserGoal?userid=' + userId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function barcodeScanCheck(barcode, userId) {
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Barcode/BarcodeScanCheck?barcode=' + barcode + '&userid=' + userId, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function getAllPressingUsers() {
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'customer/getpressingusers', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
const getQcTunnelUsers = async ()=>{
    let user_token = getAuthTokenfromcookie();
    try {
        let result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'BanjoUser/GetQCTunnelUsers', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user_token}`
            }
        });
        return result.data;
    } catch (error) {
        console.log(error);
    }
};
const QCTunnelInspection = async (object1, object2, manual = false)=>{
    let user_token = getAuthTokenfromcookie();
    try {
        if (object1 != undefined && object1?.barcodes?.length > 0) {
            object1.barcodes = object1.barcodes.filter((barcode)=>barcode?.toString()?.length >= 8);
        }
        if (object2 != undefined && object2?.barcodes?.length > 0) {
            object2.barcodes = object2.barcodes.filter((barcode)=>barcode?.toString()?.length >= 8);
        }
        let result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Barcode/QCTunnelInspection', {
            "barcode1": object1 != null && object1.userid != null && object1.barcodes != '' && object1.action != '' ? [
                object1
            ] : [],
            "barcode2": object2 != null && object2.userid != null && object2.barcodes != '' && object2.action != '' ? [
                object2
            ] : [],
            manual: manual
        }, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user_token}`
            }
        });
        return result.data;
    } catch (error) {
        console.log(error);
    }
};
_c = QCTunnelInspection;
const getAllAlterationUsers = async ()=>{
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'BanjoUser/GetTabletUser?tablet_user=Alterations', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getAlterationUserGoals = async (userId)=>{
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `BanjoUser/GetCountUsers?userid=${userId}&action=Alteration`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const barcodeScanCheckAlteration = async (barcode, userId)=>{
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Barcode/AlterationApp?userid=${userId}&barcode=${barcode}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const CustomerNeverBlockTagAdd = async (customerId, obj)=>{
    let user_token = getAuthTokenfromcookie();
    try {
        let result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].get(customerId <= 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fValidationApi + `fraudvalidation/AddNeverBlockBanjo?customerId=${obj.customer_Id}&customerEmail=${obj.customer_email}` : __TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fValidationApi + `fraudvalidation/AddNeverBlockBanjo?customerId=${customerId}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user_token}`
            }
        });
        return result.data;
    } catch (error) {
        console.log(error);
    }
};
_c1 = CustomerNeverBlockTagAdd;
const getAllStainUsers = async ()=>{
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'BanjoUser/GetTabletUser?tablet_user=Stain', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getStainUserGoals = async (userId)=>{
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `BanjoUser/GetCountUsers?userid=${userId}&action=Stain`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const barcodeScanCheckStain = async (barcode, userId)=>{
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Barcode/StainApp?userid=${userId}&barcode=${barcode}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
function getPauseReport(defaultlMonth, startDate, endDate) {
    let user_token = getAuthTokenfromcookie();
    let query = `Customer/GetPauseReport?start=${startDate}&end=${endDate}`;
    if (defaultlMonth == true) {
        query = 'Customer/GetPauseReport';
    }
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + query, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
const getCustomerDBSearch = async (search_data, phase, page)=>{
    let apiObj = {};
    let api = "";
    if (phase == "1") {
        api = __TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Customer/CustomerDbSearch?Prefix=${search_data}&page=${page}`;
        apiObj = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
        };
    } else {
        let user_token = getAuthTokenfromcookie();
        api = __TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Customer/CustomerCriteriaDbSearch';
        apiObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + user_token
            },
            body: JSON.stringify(search_data)
        };
    }
    return fetch(api, apiObj).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err, "errorr");
    });
};
const getUSStateCodeByStateName = (state)=>{
    let USStates = {
        "Alabama": "AL",
        "Alaska": "AK",
        "Arizona": "AZ",
        "Arkansas": "AR",
        "California": "CA",
        "Colorado": "CO",
        "Connecticut": "CT",
        "Delaware": "DE",
        "District Of Columbia": "D.C",
        "Florida": "FL",
        "Georgia": "GA",
        "Hawaii": "HI",
        "Idaho": "ID",
        "Illinois": "IL",
        "Indiana": "IN",
        "Iowa": "IA",
        "Kansas": "KS",
        "Kentucky": "KY",
        "Louisiana": "LA",
        "Maine": "ME",
        "Maryland": "MD",
        "Massachusetts": "MA",
        "Michigan": "MI",
        "Minnesota": "MN",
        "Mississippi": "MS",
        "Missouri": "MO",
        "Montana": "MT",
        "Nebraska": "NE",
        "Nevada": "NV",
        "New Hampshire": "NH",
        "New Jersey": "NJ",
        "New Mexico": "NM",
        "New York": "NY",
        "North Carolina": "NC",
        "North Dakota": "ND",
        "Ohio": "OH",
        "Oklahoma": "OK",
        "Oregon": "OR",
        "Pennsylvania": "PA",
        "Rhode Island": "RI",
        "South Carolina": "SC",
        "South Dakota": "SD",
        "Tennessee": "TN",
        "Texas": "TX",
        "Utah": "UT",
        "Vermont": "VT",
        "Virginia": "VA",
        "Washington": "WA",
        "West Virginia": "WV",
        "Wisconsin": "WI",
        "Wyoming": "WY"
    };
    return USStates[state];
};
const getCustomerPerOrderSpend = async (customer_stripe_ids)=>{
    let user_token = getAuthTokenfromcookie();
    return fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].utility}stripe/GetBulkCustomerSpend`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(customer_stripe_ids)
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getCustomerBlockLinkAccount = async (customerId)=>{
    let user_token = getAuthTokenfromcookie();
    return fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fValidationApi}FraudValidation/GetBlockedLinkAccounts?customerId=${customerId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getFpPLansFromSettings = async (systemSettings, dispatch)=>{
    try {
        let newOldPlans = [];
        let response = await getSystemSettingById(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpPlansSettigsId, systemSettings, dispatch);
        if (response?.success) {
            let fpPlanList = JSON.parse(response.system_settings?.system_settings?.setting_value);
            let socilateLagecy = {
                planTitle: 'Socialite Legacy',
                planName: fpPlanList.socialite.planName,
                planStripeId: fpPlanList.socialite.planStripeId,
                // planStripeIdNew:fpPlanList.socialite.planStripeIdNew,
                planStripeName: fpPlanList.socialite.planStripeName,
                planStripePrice: fpPlanList.socialite.planStripePrice
            };
            let socilate = {
                planTitle: 'Socialite NEW',
                planName: 'Socialite',
                planStripeId: fpPlanList.socialite.planStripeIdNew,
                // planStripeIdNew:fpPlanList.socialite.planStripeIdNew,
                planStripeName: fpPlanList.socialite.planStripeName,
                planStripePrice: fpPlanList.socialite.planStripePriceNew
            };
            let trendSetterLagecy = {
                planTitle: 'Trendsetter Legacy',
                planName: fpPlanList.trendsetter.planName,
                planStripeId: fpPlanList.trendsetter.planStripeId,
                // planStripeIdNew:fpPlanList.trendsetter.planStripeIdNew,
                planStripeName: fpPlanList.trendsetter.planStripeName,
                planStripePrice: fpPlanList.trendsetter.planStripePrice
            };
            let trendSetter = {
                planTitle: 'Trendsetter NEW',
                planName: 'Trendsetter',
                planStripeId: fpPlanList.trendsetter.planStripeIdNew,
                // planStripeIdNew:fpPlanList.trendsetter.planStripeIdNew,
                planStripeName: fpPlanList.trendsetter.planStripeName,
                planStripePrice: fpPlanList.trendsetter.planStripePriceNew
            };
            let wanderlustLagecy = {
                planTitle: 'Wanderlust Legacy',
                planName: fpPlanList.wanderlust.planName,
                planStripeId: fpPlanList.wanderlust.planStripeId,
                // planStripeIdNew:fpPlanList.wanderlust.planStripeIdNew,
                planStripeName: fpPlanList.wanderlust.planStripeName,
                planStripePrice: fpPlanList.wanderlust.planStripePrice
            };
            let wanderlust = {
                planTitle: 'Wanderlust NEW',
                planName: fpPlanList.wanderlust.planName,
                planStripeId: fpPlanList.wanderlust.planStripeIdNew,
                // planStripeIdNew:fpPlanList.wanderlust.planStripeIdNew,
                planStripeName: fpPlanList.wanderlust.planStripeName,
                planStripePrice: fpPlanList.wanderlust.planStripePriceNew
            };
            let FashionPass = {
                planTitle: 'FashionPass',
                planName: fpPlanList.fashionpass?.planName,
                planStripeId: fpPlanList.fashionpass?.planStripeIdNew,
                // planStripeIdNew:fpPlanList.wanderlust.planStripeIdNew,
                planStripeName: fpPlanList.fashionpass?.planStripeName,
                planStripePrice: fpPlanList.fashionpass?.planStripePriceNew
            };
            newOldPlans = [
                socilateLagecy,
                trendSetterLagecy,
                wanderlustLagecy,
                socilate,
                trendSetter,
                wanderlust,
                FashionPass
            ];
            return newOldPlans;
        } else {}
    } catch (err) {
        console.log(err);
    }
};
const checkExpiryToken = (dispatch, token)=>{
    document.cookie = "user_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "banjo_login=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].remove('user_token', {
        path: '/',
        domain: location.hostname
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].remove('banjo_login', {
        path: '/',
        domain: location.hostname
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].remove('user_token', {
        path: '/',
        domain: 'fashionpass.com'
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].remove('banjo_login', {
        path: '/',
        domain: 'fashionpass.com'
    });
    localStorage.setItem('expired_token_path', JSON.stringify({
        "path": location.pathname,
        "search": location.search,
        "expiry_token": token
    }));
    dispatch(logoutBanjoUser());
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].push('/');
};
const clearCacheObject = (uerToken)=>{
    return fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI}Cache/ClearCacheObjects?keys=${uerToken}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).catch((err)=>{
        console.log(err);
    });
};
const getEntitiesByAttribute = (attribute)=>{
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Attribute/GetEntitiesByAtttribute?attribute=${attribute}`).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getInstagramImage = async (limit = 300)=>{
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Product/Check_instagarm_Recent_tag_images?limit=${limit}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getEntityAttribute = (entityId, type = '')=>{
    return fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].entityAttrApi}Attribute/GetEntityAttribute?entity_id=${entityId}&type=${type}`, {
        method: 'GET'
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getCustomerStatus = async (customerId)=>{
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `ClickHouse/GetEntityData?entityid=${customerId}&entityName=customer`, {
        method: 'GET'
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getActiveSubscrptionsGraph = (plan)=>{
    // ${Gconfig.utility}
    return fetch(`https://utility.fashionpass.com/SkuReports/GetCsvRollforwardLast180?plan=${plan}`).then((response)=>response.text()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
// getting all products according to search keywords
function getAutoHideSearchProducts(sname) {
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Collections/SearchByString/?category_handles=&search_name=${sname}&filter_vendor_ids=&filter_tags_all=&page=1&other_filter=&only_show_hidden_items=0&excludes=stats,colors,sizes,vendors,tree&sort_by=createddays&sort_order=desc&score_range=&exclude_tags=`, {
        method: 'GET'
    }).then((resp)=>resp.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
// add or delete product for auto hide (in customer details page)
function addOrDeleteAutoHideProduct(payload) {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Customer/AddOrUpdateCustomerAutoHide', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(payload)
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
// getting product for auto hide (in customer details page)
function getAutoHideProduct(id) {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Customer/GetCustomerAutoHide?customer_id=${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
}
const updateShipmentCountLower = async (customerId, orderId, reason, ship_id)=>{
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `order/UpdateShipmentCountLower?customer_id=${customerId}&order_id=${orderId}&reason=${reason}&ship_id=${ship_id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getOrderEntityAttribute = (orderId)=>{
    return fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].entityAttrApi}Attribute/GetEntityAttribute?entity_id=${orderId}&type=order`, {
        method: 'GET'
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const checkUserPassword = (payload)=>{
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'BanjoUser/CheckUserDefaultPassword?userId=' + payload.userId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>console.log(err));
};
const getSubsActivityGraphData = (startTime = '', endTime = '')=>{
    let url = `${__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].warehouseUrl}Reports/GetSubsGraph?`;
    if (startTime && endTime) url += `start=${startTime}&end=${endTime}`;
    return fetch(url, {
        method: 'GET'
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getAllWinbackDiscounts = (mode)=>{
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `reward/GetAllWinbackDiscounts/` + mode, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
};
const getSurveyNpsReport = (isLessThan)=>{
    let user_token = getAuthTokenfromcookie();
    let _isLessThan = isLessThan ? isLessThan : '';
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `customer/GetNpsScoreReport?${_isLessThan}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
};
const getClearJetFMCAirport = ()=>{
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `ClearJet/GetDistinctClearJetFMCAirport`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
};
const updateInvoiceClosed = (invoiceId)=>{
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Payments/UpdateInvoiceClosed?invoiceId=${invoiceId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
};
const retryInvoicePayment = (invoiceId, stripeId, isEmailSent)=>{
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Invoice/RetryInvoicePayment?invoiceId=${invoiceId}&customerStripeId=${stripeId}&email_sent=${isEmailSent}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
};
const mirInvoices = ()=>{
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Payment/GetMIRFailedPaymentsDashboard`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
};
function reconcilePaymentFailed(dataObj) {
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'customer/ReconcilePaymentFailed', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataObj)
    }).then((response)=>response.json()).then((data)=>{
        // console.log('ReconcilePaymentFailed send', dataObj)
        // console.log('ReconcilePaymentFailed recieve', data)
        return data;
    });
}
const updateClearJetFMCAirport = (data)=>{
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'ClearJet/UpdateClearJetFMCAirport', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((error)=>{
        return error;
    });
};
const getSubsFailedPaymentsDetails = ()=>{
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Payment/GetSubscriptionFailedPaymentsDashboard`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
};
const identifyTracker = (trackingNum)=>{
    let fedexTracking = 'https://www.fedex.com/apps/fedextrack/?tracknumbers=';
    let swyftTracking = 'https://returnmates.com/tracking/';
    let onTracTracking = 'https://www.ontrac.com/trackingresults.asp?tracking_number=';
    let uspsTracking = 'https://tools.usps.com/go/TrackConfirmAction?tLabels=';
    let glsTracking = 'https://www.gls-us.com/track-and-trace?TrackingNumbers=';
    let vehoTracking = 'https://track.shipveho.com/#/barcode/';
    let cdlTracking = 'https://ship.cdldelivers.com/Xcelerator/ClientPortal/';
    let udsTracking = 'https://www.uniteddeliveryservice.com/track/barcode/';
    let appcdlTracking = 'https://apps.cdldelivers.com/Tracking-Page/track?id=';
    let upsTracking = 'https://www.ups.com/track?tracknum=';
    let shipxTracking = 'https://www.shipx.com/shipment-tracker?tracking_number=';
    let stringLength = trackingNum?.length;
    let url = '';
    let trackingName = '';
    if (stringLength > 0) {
        if (trackingNum?.substr(0, 2) == 'EZ' && trackingNum?.length == 20) {
            url = `${glsTracking}${trackingNum}`;
        } else if (trackingNum?.substr(0, 3) == 'EPC') {
            url = `${swyftTracking}${trackingNum}`;
        } else if (trackingNum?.length == 12 && /[A-Z]/.test(trackingNum) == true || trackingNum?.length == 10 && /[A-Z]/.test(trackingNum) == true || trackingNum?.substr(0, 4) == 'DLSX' || trackingNum?.substr(0, 3) == 'BTP' || trackingNum?.substr(0, 3) == '1LS' || trackingNum?.length == 17 || trackingNum?.length == 14 && trackingNum?.substr(0, 2) == 'SX' || trackingNum?.substr(0, 3) == 'SXC' || trackingNum?.length == 14 && trackingNum?.substr(0, 2) == 'VH') {
            url = `${shipxTracking}${trackingNum}`;
        } else if (trackingNum?.charAt(0) == 'D') {
            url = `${onTracTracking}${trackingNum}`;
        } else if (trackingNum?.substr(0, 2) == 'EP' && trackingNum?.substr(0, 3) !== 'EPC' && trackingNum?.length == 13 || trackingNum?.substr(0, 4) == '1CDL') {
            url = `${appcdlTracking}${trackingNum}`;
            trackingName = 'CDL';
        } else if (trackingNum?.substr(0, 2) == 'EZ' && trackingNum?.length == 16 || trackingNum?.substr(0, 3) == 'UDS') {
            url = `${udsTracking}${trackingNum}`;
            trackingName = 'UDS';
        } else if (trackingNum?.substr(0, 3) == '1ZK') {
            url = `${upsTracking}${trackingNum}`;
            trackingName = 'UPS';
        } else if (stringLength == 17 || trackingNum?.substr(0, 2) == 'VH') {
            if (trackingNum?.includes('1CDLCJ')) {
                url = `${appcdlTracking}${trackingNum}`;
                trackingName = 'CDL';
            } else {
                url = `${vehoTracking}${trackingNum}`;
                trackingName = 'VEHO';
            }
        } else {
            if (stringLength < 16) {
                url = `${fedexTracking}${trackingNum}`;
            } else {
                url = `${uspsTracking}${trackingNum}`;
            }
        }
    }
    // return {url, trackingName}
    return url;
};
function uploadAndValidateZip(data) {
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'ClearJet/UploadAndValidateZip', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + getAuthTokenfromcookie()
        },
        body: data
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function getBackTobackRentalOrdersData() {
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Shipment/TrackCustomersWithTwoOrders', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + getAuthTokenfromcookie(),
            'Content-Type': 'application/json'
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
const getSubsFailedPaymentsDetailsWithoutDecline = ()=>{
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Payment/GetSubsFPWithNoDeclineAttr`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
};
function triggerFePipeline() {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'reload/TriggerFePipeline', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function getRack() {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Barcode/GetRack', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function addOrEditRack(data) {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Barcode/AddOrEditRack', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(data)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function getBanjoUserList() {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'banjouser/GetBanjoUserList', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
const deleteRack = async (rackId)=>{
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Barcode/DeleteRack?Id=${rackId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
};
function addContainerId(container_code, shipment_code, isExtra) {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Shipment/AddShipmentFromContainer?container_tracking_code=${container_code}&shipment_tracking_code=${shipment_code}&IsExtra=${isExtra}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function getInClosetNotSlotted() {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'barcode/in_closet_not_slotted', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function getDowngradeCustomer() {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'customer/GetDowngradeCustomer', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function getAlertSetting() {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'order/GetAlertSettings', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function postAlertsetting(data) {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'order/CreateAlertSettings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(data)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function deletAlertSetting(id) {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `order/DeleteAlertSettings?id=${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function getPendingCustomer() {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'customer/GetPendingCustomer', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function getPausedCustomer() {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'customer/GetPausedCustomer', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function addNewBanjoUser(object) {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'banjouser/AddNewUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(object)
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function updateBanjoUser(object) {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'banjouser/UpdateBanjoUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(object)
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
const getZendeskAIAssistanceRules = ()=>{
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Zendesk/GetZDAssistanceRules`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
};
const updateZendeskAIAssistanceRules = (data)=>{
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Zendesk/updateZDAssistanceRules`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(data)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
};
function getSkudiscrepancies() {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'order/GetSkuDiscrepanciesReport', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function getNewSkudiscrepancies() {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'order/GetNewSkuDiscrepanciesReport', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function getScannedCategorizedProductFromBarcodeNew(barcodeId) {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Product/GetCategorizedProductByBarcodeNew?barcode=${barcodeId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function submitCategorizedProductNew(object) {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Product/UpdateCategorizedProductTagsNew', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(object)
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function getAllCategorizedProductNew() {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Product/GetCategorizedProductListNew', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function getSleepingCustomersReport() {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'order/GetSleepingCustomersReport', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
const getMonthlyPausedCustomerGraph = (month, year)=>{
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `customer/GetMonthlyPausedCustomerGraph?Month=${month}&Year=${year}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
function sortDatesWithCertainFormat(format, dates, keyName, ascOrDesc) {
    function extractMonthAndDay(str) {
        let match = str?.match(/(\d{1,2})\/(\d{1,2})/);
        if (!match) return null;
        let [_, month, day] = match;
        return {
            month: +month,
            day: +day
        };
    }
    if (format === 'ddd M/D' || format === 'M/D ddd' || format === 'ddd, M/D' || format === 'M/D, ddd') {
        if (ascOrDesc === 'asc') {
            let asc = [
                ...dates
            ].sort((a, b)=>{
                let da = extractMonthAndDay(a[keyName]) || '';
                let db = extractMonthAndDay(b[keyName]) || '';
                if (da?.month === db?.month) {
                    return da?.day - db?.day;
                }
                return da?.month - db?.month;
            });
            return asc;
        } else {
            let desc = [
                ...dates
            ].sort((a, b)=>{
                let da = extractMonthAndDay(a[keyName]) || '';
                let db = extractMonthAndDay(b[keyName]) || '';
                if (da?.month === db?.month) {
                    return db?.day - da?.day;
                }
                return db?.month - da?.month;
            });
            return desc;
        }
    }
}
const getTotalFpPaused = (month, year)=>{
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `customer/GetTotalFpPaused?Month=${month}&Year=${year}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
// const getZendeskTicketAssistanceByDate = (startTimeStamp, endTimeStamp, tags, bucket, subBucket) => {
//     let user_token = getAuthTokenfromcookie();
//     return fetch(Gconfig.smartBanjoApi + `Zendesk/GenerateZdTicketAssistanceByDate/?startEpoch=${startTimeStamp}&endEpoch=${endTimeStamp}&tags=${tags}&bucket=${bucket}&subbucket=${subBucket}`, {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + user_token },
//     }).then(response => response.json()).then(data => {
//         return data
//     }).catch(err => {
//         return err
//     })
// }
const getZendeskTicketAssistanceByDate = async (startTimeStamp, endTimeStamp, tags, bucket, subBucket)=>{
    let user_token = getAuthTokenfromcookie();
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Zendesk/GenerateZdTicketAssistanceByDate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + user_token
            },
            body: JSON.stringify({
                startEpoch: startTimeStamp,
                endEpoch: endTimeStamp,
                selectedTags: tags,
                bucket: bucket,
                subbucket: subBucket
            })
        });
        const data = await response.json();
        return data;
    } catch (err) {
        return err;
    }
};
const getZendeskBackgroundJobDetails = ()=>{
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Zendesk/GetZendeskBackgroundJobDetails`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
};
const getZendeskEnableDisableBackgroundJobs = (job_id, status)=>{
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `BackgroundJobs/EnableDisableBackgroundJobs?job_id=${job_id}&status=${status}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
};
const getZendeskDateRangeServiceRunning = ()=>{
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Zendesk/GetZdAIAssistanceDateRangeServiceFlag`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
};
const getInspectionCleaningReports = (startDate, endDate)=>{
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `order/GetInspectionCleaningReports?startDate=${startDate}&endDate=${endDate}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const GetPriorityCarrierShipping = ()=>{
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Shipment/GetPriorityCarrierList`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
_c2 = GetPriorityCarrierShipping;
const GetShippingRate = (carrier_ids)=>{
    let user_token = getAuthTokenfromcookie();
    // let formData = new FormData();
    // formData.append("carrier_ids", JSON.stringify(carrier_ids)); 
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Shipment/GetRateResponse`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(carrier_ids)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
_c3 = GetShippingRate;
const GetShippingRateByguid = (carrier_data)=>{
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Shipment/GetShipmentRateByGuid?guid=${carrier_data?.guid}&carrierAliasID=${carrier_data?.CarrierAliasID}`, {
        // return fetch(Gconfig.smartBanjoApi + `Shipment/GetShipmentRateByGuid?guid=ce59be11-2a91-41d7-bace-f301b93433bf&carrierAliasID=120`, {  
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
_c4 = GetShippingRateByguid;
const GetShippingLabel = (obj)=>{
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Shipment/GetLabelResponse`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        // body: formData
        body: JSON.stringify(obj)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
_c5 = GetShippingLabel;
const GetShippingDiagnosticsLabel = (payload)=>{
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Shipment/CancelLabelResponse`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(payload)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
_c6 = GetShippingDiagnosticsLabel;
const getBarcodeDataForBucket = (barcode)=>{
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `barcode/GetBarcodeDataForBucket?barcode=${barcode}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getBulkEntityAttributes = (payload)=>{
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].entityAttrApi + `Attribute/GetBulkEntityAttributes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(payload)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const markOrderDelivered = (payload)=>{
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Shipment/MarkShipmentDeliveredManully`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(payload)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getBackinStockSubscription = (skuCode)=>{
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `BISSubscription/GetBackInStockSubscription?skuCode=${skuCode}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getShippingCarrierSorting = ()=>{
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `shipment/GetShippingCarrierSorting`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getBucketSheet = ()=>{
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + "BigQuery/GetBucketsSheetData", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
function getSkuCheck() {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'order/GetSkuCheck', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function getStatus() {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'order/GetAllStatusCount', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
const getBISTrackingBySKU = (skuCode)=>{
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `BISSubscription/GetBISTrackingBySKU?skuCode=${skuCode}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getBISTrackingByCustomer = (email)=>{
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `BISSubscription/GetBISTrackingByCustomer?email=${email}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getDailyWashTracking = (date)=>{
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Laundry/TrackTodaysLaundry?date=${date}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getWasherDetail = ()=>{
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `BanjoUser/GetTabletUser?tablet_user=Washer`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getAllSubscribeBISsku = (email)=>{
    let user_token = getAuthTokenfromcookie();
    // return fetch(Gconfig.fpAPI + `BISSubscription/GetListOfBISSubscribedSKUs`,{
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `BISSubscription/GetListOfBISSubscribedSKUsByProducts`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
function getBarcodeRange() {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'barcode/GetAllBarcodeRange', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
}
const addBarcodeRange = async (payload)=>{
    let user_token = getAuthTokenfromcookie();
    const body = {
        size: payload.size,
        barcode_from: Number(payload.barcode_from),
        barcode_to: Number(payload.barcode_to)
    };
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'barcode/AddBarcodeRange', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(body)
    }).then(async (res)=>{
        const data = await res.json();
        if (!res.ok) throw data;
        return data;
    }).catch((err)=>{
        throw err;
    });
};
function updateBarcodeRangeById(object) {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'barcode/UpdateBarcodeRangeById', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify({
            id: Number(object.id),
            size: object.size,
            barcode_from: Number(object.barcode_from),
            barcode_to: Number(object.barcode_to)
        })
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
        return err;
    });
}
const deleteBarcodeRangeById = async (id)=>{
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `barcode/DeleteBarcodeRangeById?id=${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.error(err);
        return err;
    });
};
const updateBanjoUserPass = (banjoUserId, password)=>{
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `banjouser/UpdateBanjoUserPassowrd?banjoUserId=${banjoUserId}&password=${password}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
};
function getActiveCustomer() {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Customer/GetActiveCustomer', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
}
const getProductSale = (startDate, endDate, userId)=>{
    const user_token = getAuthTokenfromcookie();
    let endpoint = '';
    if (startDate && endDate) {
        endpoint = `?startDate=${encodeURIComponent(startDate)}&endDate=${encodeURIComponent(endDate)}`;
        if (userId) {
            endpoint += `&userid=${userId}`;
        }
    }
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `order/GetProductSaleReports${endpoint}`, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>data).catch((err)=>{
        console.log(err);
    });
};
function getMissingReturnItemsNewData() {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'order/GetMissingReturnItemsNewData', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
}
function getProductsByImage(obj) {
    let user_token = getAuthTokenfromcookie();
    let formdata = new FormData();
    let query = __TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].AIgetProdByImage;
    formdata.append("url", query);
    formdata.append("method", 'POST');
    formdata.append("data", JSON.stringify(obj));
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'reload/callapi', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + user_token
        },
        body: formdata
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
}
async function getBrandSuggestions(brandname) {
    return await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Product/SearchBrand/${brandname}`, {
        method: 'GET'
    }).then((resp)=>resp.json()).then((data)=>{
        if (data.brands.length > 0) {
            return data.brands;
        } else {
            return [];
        }
    });
}
const getAllAdminSizes = ()=>{
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Product/GetAllSizes`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
function getUserTasks() {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'banjouser/GetUserTasks', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
}
function GetMaintenanceUserRole() {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'banjouser/GetMaintenanceUserRole', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
}
_c7 = GetMaintenanceUserRole;
function AddScheduleTask(object) {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'banjouser/AddScheduleTask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(object)
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
_c8 = AddScheduleTask;
function UpdateUserTask(object) {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'banjouser/UpdateUserTask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(object)
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
_c9 = UpdateUserTask;
function PerformUserTaskAction(taskId, actionId, date = null) {
    let user_token = getAuthTokenfromcookie();
    let url = `${__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi}banjouser/PerformUserTaskAction?taskId=${taskId}&actionId=${actionId}`;
    if (actionId === 2 && date) {
        url += `&rollover_date=${encodeURIComponent(date)}`;
    }
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((res)=>res.json()).catch((err)=>{
        console.error("Fetch Error:", err);
    });
}
_c10 = PerformUserTaskAction;
function AddTaskNotes(taskId, notes) {
    let user_token = getAuthTokenfromcookie();
    let url = `${__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi}banjouser/AddTaskNotes?taskId=${taskId}&notes=${encodeURIComponent(notes)}`;
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>{
        return await response.json();
    }).catch((err)=>{
        console.error("Fetch Error:", err);
    });
}
_c11 = AddTaskNotes;
function GetTaskNotesByTaskId(taskId) {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `banjouser/GetTaskNotesByTaskId?taskId=${taskId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
}
_c12 = GetTaskNotesByTaskId;
function DeleteTaskNotes(notesId) {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `banjouser/DeleteTaskNotes?notesId=${notesId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
}
_c13 = DeleteTaskNotes;
function ValidateBarcodePouchData(uniqueCode) {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Barcode/ValidateBarcodePouchdata?uniqueCode=${uniqueCode}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
}
_c14 = ValidateBarcodePouchData;
function AddOrRemoveSlotAccessoriesByPouch(object) {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Barcode/AddOrRemoveSlotAccessoriesByPouch', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(object)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
}
_c15 = AddOrRemoveSlotAccessoriesByPouch;
function getCantFindOrderItems(dispatch) {
    let user_token = getAuthTokenfromcookie();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'order/GetCantFindOrderItems', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).catch((err)=>{
        console.log(err);
        return err;
    });
}
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15;
__turbopack_context__.k.register(_c, "QCTunnelInspection");
__turbopack_context__.k.register(_c1, "CustomerNeverBlockTagAdd");
__turbopack_context__.k.register(_c2, "GetPriorityCarrierShipping");
__turbopack_context__.k.register(_c3, "GetShippingRate");
__turbopack_context__.k.register(_c4, "GetShippingRateByguid");
__turbopack_context__.k.register(_c5, "GetShippingLabel");
__turbopack_context__.k.register(_c6, "GetShippingDiagnosticsLabel");
__turbopack_context__.k.register(_c7, "GetMaintenanceUserRole");
__turbopack_context__.k.register(_c8, "AddScheduleTask");
__turbopack_context__.k.register(_c9, "UpdateUserTask");
__turbopack_context__.k.register(_c10, "PerformUserTaskAction");
__turbopack_context__.k.register(_c11, "AddTaskNotes");
__turbopack_context__.k.register(_c12, "GetTaskNotesByTaskId");
__turbopack_context__.k.register(_c13, "DeleteTaskNotes");
__turbopack_context__.k.register(_c14, "ValidateBarcodePouchData");
__turbopack_context__.k.register(_c15, "AddOrRemoveSlotAccessoriesByPouch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/redux/slices/conveyorSlice.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FETCH_PENDING_ORDERS_FAILED",
    ()=>FETCH_PENDING_ORDERS_FAILED,
    "FETCH_PENDING_ORDERS_STARTED",
    ()=>FETCH_PENDING_ORDERS_STARTED,
    "FETCH_PENDING_ORDERS_SUCCESS",
    ()=>FETCH_PENDING_ORDERS_SUCCESS,
    "conveyorSlice",
    ()=>conveyorSlice,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$redux$2d$wrapper$2f$es6$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-redux-wrapper/es6/index.js [client] (ecmascript)");
;
;
const initialState = {
    pendingOrders: {
        pendingOrdersLoading: true,
        error: null,
        data: []
    },
    loading: true,
    lastUpdate: null,
    error: null
};
const conveyorSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'conveyor',
    initialState,
    reducers: {
        FETCH_PENDING_ORDERS_SUCCESS: (state, action)=>{
            return {
                ...state.conveyorData,
                pendingOrders: {
                    data: action.payload,
                    pendingOrdersLoading: false
                },
                loading: false
            };
        },
        FETCH_PENDING_ORDERS_FAILED: (state, action)=>{
            return {
                ...state.conveyorData,
                error: action.payload,
                pendingOrders: {
                    data: [],
                    pendingOrdersLoading: false,
                    error: action.payload
                },
                loading: false
            };
        },
        FETCH_PENDING_ORDERS_STARTED: (state)=>{
            return {
                ...state.conveyorData,
                pendingOrders: {
                    data: [],
                    pendingOrdersLoading: true
                },
                loading: true
            };
        }
    },
    extraReducers: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$redux$2d$wrapper$2f$es6$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["HYDRATE"]]: (state, action)=>{
            return {
                ...state.conveyorData,
                ...action.payload.conveyorData
            };
        }
    }
});
const { FETCH_PENDING_ORDERS_SUCCESS, FETCH_PENDING_ORDERS_FAILED, FETCH_PENDING_ORDERS_STARTED } = conveyorSlice.actions;
const __TURBOPACK__default__export__ = conveyorSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/functions/conveyorFunctions.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// import {
//   fetchPendingOrdersSuccess,
//   fetchPendingOrdersFailed,
//   fetchPendingOrdersStarted,
// } from "redux/actions/conveyorAction";
__turbopack_context__.s([
    "GetBarcodesListBySku",
    ()=>GetBarcodesListBySku,
    "addNotesInFetchingItem",
    ()=>addNotesInFetchingItem,
    "barcodeScan",
    ()=>barcodeScan,
    "barcodeScanCustom",
    ()=>barcodeScanCustom,
    "barcodeScanOnly",
    ()=>barcodeScanOnly,
    "barcodeSkipItem",
    ()=>barcodeSkipItem,
    "dateCompare",
    ()=>dateCompare,
    "getActionActivity",
    ()=>getActionActivity,
    "getArchiveActivity",
    ()=>getArchiveActivity,
    "getConveyorFloorRanges",
    ()=>getConveyorFloorRanges,
    "getConveyorInjectionToggle",
    ()=>getConveyorInjectionToggle,
    "getConveyorLabel",
    ()=>getConveyorLabel,
    "getConveyorSessionForStation",
    ()=>getConveyorSessionForStation,
    "getEmptySlotOfConveyor",
    ()=>getEmptySlotOfConveyor,
    "getFecthPendingOrders",
    ()=>getFecthPendingOrders,
    "getJacketRack",
    ()=>getJacketRack,
    "getLaTimeEndPoint",
    ()=>getLaTimeEndPoint,
    "getLast5Fetches",
    ()=>getLast5Fetches,
    "getMissingBarcodeByRack",
    ()=>getMissingBarcodeByRack,
    "getMissingItemsConveyor",
    ()=>getMissingItemsConveyor,
    "getPendingOrders",
    ()=>getPendingOrders,
    "getProcessConveyorSession",
    ()=>getProcessConveyorSession,
    "getProcessOrderBarcode",
    ()=>getProcessOrderBarcode,
    "getRackData",
    ()=>getRackData,
    "getSessionInfo",
    ()=>getSessionInfo,
    "getSlotNext",
    ()=>getSlotNext,
    "postClearConveyorSession",
    ()=>postClearConveyorSession,
    "postProcessOrders",
    ()=>postProcessOrders,
    "processOrderCustom",
    ()=>processOrderCustom,
    "scanMissingItems",
    ()=>scanMissingItems,
    "scanRackBarcode",
    ()=>scanRackBarcode,
    "skipBarcodeCustom",
    ()=>skipBarcodeCustom,
    "startFetchSession",
    ()=>startFetchSession,
    "toggleErrorSound",
    ()=>toggleErrorSound
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$slices$2f$conveyorSlice$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/redux/slices/conveyorSlice.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/globalconfig.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/functions/globalFunctions.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/moment/moment.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-cookie/dist/js.cookie.mjs [client] (ecmascript)");
;
;
;
;
;
async function getFecthPendingOrders(dispatch) {
    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$slices$2f$conveyorSlice$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FETCH_PENDING_ORDERS_STARTED"])());
    await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].conveyorURL + "Conveyor/GetPendingOrders?count=5000", {
        method: "GET"
    }).then(async (response)=>await response.json()).then((res)=>{
        let localPorder = res.pendingOrders;
        // console.log(res, 'pending orders <---')
        localPorder = localPorder.filter((item, value)=>{
            item.selected = false;
            let remainingDays = (item.promised_delivery_date - Date.now() / 1000) / (60 * 60 * 24);
            if (item?.customer_tags?.toLowerCase()?.indexOf('vip') > -1 || item?.customer_tags?.toLowerCase()?.indexOf('influencer') > -1 || item?.customer_tags?.toLowerCase()?.indexOf('subrent:' + item.orderId) > -1) {
                item.transit_zone += 6;
            }
            if (remainingDays < 3 && [
                32,
                59,
                60
            ].indexOf(item.deliveryid) > -1) {
                item.transit_zone = 15;
            }
            return item;
        });
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$slices$2f$conveyorSlice$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FETCH_PENDING_ORDERS_SUCCESS"])(localPorder));
    });
}
async function getPendingOrders() {
    return await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].conveyorURL + "Conveyor/GetPendingOrders", {
        method: 'GET'
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
}
async function postProcessOrders(orderId, orderSelection, isPerfectOrders, isMissingOrders, FetchOptionsType, floor_ids, excludeFetch, jacketOnly) {
    // console.log(orderId,'function page')
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    const formData = new FormData();
    formData.append('orderIds', orderId);
    formData.append('orderSelection', orderSelection);
    formData.append('perfectOrderFetch', isPerfectOrders);
    formData.append('missingItemFetch', isMissingOrders);
    formData.append('FetchSelectionSetting', FetchOptionsType);
    formData.append('floor_ids', floor_ids);
    formData.append('excludeFetch', true);
    let obj = {
        "orderIds": orderId,
        "orderSelection": orderSelection,
        "perfectOrderFetch": isPerfectOrders,
        "missingItemFetch": isMissingOrders,
        "fetchSelectionSetting": FetchOptionsType,
        "floor_ids": floor_ids,
        "excludeFetch": true,
        'isOnlyJacket': jacketOnly
    };
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].conveyorURL + "Conveyor/ProcessOrders", {
        method: 'POST',
        // headers: { 'Authorization': 'Bearer ' + user_token },
        // body: formData,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(obj)
    }).then(async (response)=>await response.json()).then((data)=>{
        //console.log("ProcessOrders Response", data)
        return data;
    });
}
async function startFetchSession(sessionIds, retryFN) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    const formData = new FormData();
    formData.append('fetchId', sessionIds);
    // return fetch(Gconfig.conveyorURL + "Conveyor/StartFetch", {
    //   method: 'POST',
    //   headers: { 'Authorization': 'Bearer ' + user_token },
    //   body: formData
    // }).then(async (response) => await response.json()).then(data => {
    //   // console.log("startFetchSession......", data);
    //   return data;
    // })
    try {
        const response = await Promise.race([
            fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].conveyorURL + `Conveyor/StartFetch`, {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + user_token
                },
                body: formData
            })
        ]).then(async (response)=>await response.json()).then((data)=>{
            return data;
        });
        return response;
    } catch (e) {
        setTimeout(()=>{
            if (retryFN) retryFN();
        }, 5000);
        console.log(e);
    }
}
async function getSlotNext() {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].conveyorURL + "Conveyor/GetReferenceMissingItems", {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
}
async function barcodeScan(barcode, sessionId, rack_name, maxRetail, retryFN) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    let url = `barcodeString=${barcode}&conveyorFloorId=${sessionId}`;
    if (rack_name) {
        url += `&rackname=${rack_name}`;
    }
    if (maxRetail) {
        url += '&isMaxRetail=' + maxRetail;
    }
    try {
        const response = await Promise.race([
            fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].conveyorURL + `Conveyor/BarcodeScan?${url}`, {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + user_token
                }
            })
        ]).then(async (response)=>await response.json()).then((data)=>{
            return data;
        });
        return response;
    } catch (e) {
        setTimeout(()=>{
            retryFN();
        }, 5000);
        console.log(e);
    }
}
async function barcodeSkipItem(barcode, orderItemId, sessionDetailsId, retryFN, type) {
    const formData = new FormData();
    formData.append('barcode', barcode);
    formData.append('order_item_id', orderItemId);
    formData.append('session_detail_id', sessionDetailsId);
    if (type) formData.append('isAlreadyslotted', true);
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    // return fetch(Gconfig.conveyorURL + "Conveyor/SkipBarcode", {
    //   method: 'POST',
    //   headers: { 'Authorization': 'Bearer ' + user_token },
    //   body: formData
    // }).then(async (response) => await response.json()).then(data => {
    //   // console.log("barcode Skip Item......", data);
    //   return data;
    // })
    try {
        const response = await Promise.race([
            fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].conveyorURL + `Conveyor/SkipBarcode`, {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + user_token
                },
                body: formData
            })
        ]).then(async (response)=>await response.json()).then((data)=>{
            return data;
        });
        return response;
    } catch (e) {
        setTimeout(()=>{
            retryFN();
        }, 5000);
        console.log(e);
    }
}
async function postClearConveyorSession() {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].conveyorURL + 'Conveyor/ClearSession?count=', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
}
async function getProcessConveyorSession() {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].conveyorURL + 'Conveyor/GetProgress', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
}
async function getMissingItemsConveyor() {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].conveyorURL + 'Conveyor/GetMissingItems', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
}
function GetBarcodesListBySku(skuId) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Barcode/GetBarcodesListBySku?skuid=' + skuId + '&IsActionfields=true', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
}
_c = GetBarcodesListBySku;
function scanMissingItems(barcode, orderItemId, sessionId, rackname = null) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    if (!user_token) return {
        success: false
    };
    let url = 'Conveyor/MissingItemScan?barcodeString=' + barcode + '&orderItemId=' + orderItemId + '&sessionId=' + sessionId;
    if (rackname) {
        url = url + '&rackname=' + rackname;
    }
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].conveyorURL + url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
}
function getActionActivity(barcodeId) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Barcode/GetActionActivityByBarocodeID?barocodeID=' + barcodeId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
}
function getArchiveActivity(barcodeId) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Barcode/GetActionActivityArchiveByBarocodeID?barocodeID=' + barcodeId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
}
function addNotesInFetchingItem(dataObj) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].conveyorURL + 'Conveyor/AddNotesInFetchingItem', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(dataObj)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
}
function toggleErrorSound(play) {
    let errorSound = new Audio('https://fashionpass.s3.us-west-1.amazonaws.com/assets/img/car_horn_18218.mp3');
    if (play) {
        errorSound.play();
    } else {
        errorSound.pause();
        errorSound.currentTime = 0;
    }
}
function dateCompare(time1, time2) {
    var t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])();
    var parts = time1.split(":");
    t1.set({
        hour: parts[0],
        minute: parts[1]
    });
    var t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])();
    parts = time2.split(":");
    t2.set({
        hour: parts[0],
        minute: parts[1]
    });
    // returns 1 if greater, -1 if less and 0 if the same
    if (t1.unix() > t2.unix()) return 1;
    if (t1.unix() < t2.unix()) return -1;
    return 0;
}
async function getLast5Fetches() {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].conveyorURL + "Conveyor/GetLast5Fetches", {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
}
async function getConveyorInjectionToggle() {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + "Conveyor/GetConveyorInjectionToggle", {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
}
function getSessionInfo(sessionId) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].conveyorURL + 'conveyor/GetSessionBySessionId?session_id=' + sessionId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
}
const getLaTimeEndPoint = async ()=>{
    let customer_ip = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].get('customer_ip');
    try {
        return await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `cache/time?zone=America/Los_Angeles`, {
            method: 'GET',
            headers: {
                'X-Request-For': customer_ip
            }
        }).then((response)=>response.json()).then((data)=>{
            DateObj.LATime = data.local_time.split('~')[0];
            DateObj.LocalTime = new Date().getMinutes();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].set('LATime', data.local_time.split('~')[0]);
            // console.log('-----------------LA TIme Here------------------')
            // console.log(DateObj.LATime)
            callingDateAfter10mint();
            return DateObj;
        });
    } catch (ex) {
        console.log('date is not log');
    }
};
const callingDateAfter10mint = async ()=>{
    setTimeout(async ()=>{
        await getLaTimeEndPoint();
    }, 500000);
};
async function getProcessOrderBarcode(barcode) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].conveyorURL + "Conveyor/ProcessOrderBarcode?barcode=" + barcode, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
}
async function barcodeScanOnly(barcode, sessionId) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].conveyorURL + "Conveyor/BarcodeScanOnly?barcodeString=" + barcode + "&conveyorFloorId=" + sessionId, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
}
const processOrderCustom = (obj)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].conveyorURL + 'conveyor/processordercustom', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(obj)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
};
const barcodeScanCustom = async (barcode, floorId, isSideCheckout, maxRetail, retryFN)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    let url = 'conveyor/barcodescancustom?barcodeString=' + barcode + '&conveyorFloorId=' + floorId;
    if (isSideCheckout) {
        url += '&isSideCheckout=' + isSideCheckout;
    }
    if (maxRetail) {
        url += '&isMaxRetail=' + maxRetail;
    }
    // return fetch(Gconfig.conveyorURL + url, {
    //   method: 'GET',
    //   headers: { 'Authorization': 'Bearer ' + user_token },
    // }).then(response => response.json()).then(data => {
    //   return data
    // }).catch(err => {
    //   return err
    // })
    try {
        const response = await Promise.race([
            fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].conveyorURL + url, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + user_token
                }
            })
        ]).then(async (response)=>await response.json()).then((data)=>{
            return data;
        });
        return response;
    } catch (e) {
        setTimeout(()=>{
            retryFN();
        }, 5000);
        console.log(e);
    }
};
const getConveyorFloorRanges = ()=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].conveyorURL + 'Conveyor/GetConveyorFloorRanges', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
};
const skipBarcodeCustom = async (barcode, sessionDetailsId, isSideCheckout, retryFN, type)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    const formData = new FormData();
    formData.append('barcode', barcode);
    formData.append('session_detail_id', sessionDetailsId);
    if (type) formData.append('isAlreadyslotted', true);
    if (isSideCheckout) formData.append('isSideCheckout', true);
    // return fetch(Gconfig.conveyorURL + 'conveyor/SkipBarcodeCustom', {
    //   method: 'POST',
    //   headers: { 'Authorization': 'Bearer ' + user_token },
    //   body: formData
    // }).then(response => response.json()).then((data) => {
    //   return data
    // }).catch(err => {
    //   console.log(err)
    // })
    try {
        const response = await Promise.race([
            fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].conveyorURL + `conveyor/SkipBarcodeCustom`, {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + user_token
                },
                body: formData
            })
        ]).then(async (response)=>await response.json()).then((data)=>{
            return data;
        });
        return response;
    } catch (e) {
        setTimeout(()=>{
            retryFN();
        }, 5000);
        console.log(e);
    }
};
const getConveyorSessionForStation = ()=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].conveyorURL + 'Conveyor/GetConveyorSessionForStation', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getEmptySlotOfConveyor = ()=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].conveyorURL + 'Conveyor/SetEmptySlotOfConveyor', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getMissingBarcodeByRack = (skuIds)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].conveyorURL + `Conveyor/GetMissingItemBarocdesByRack?skuids=${skuIds}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getJacketRack = (rack_name)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].conveyorURL + `Conveyor/ValidateRack?rackname=${rack_name}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getRackData = (rack_name)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].conveyorURL + `Conveyor/GetTempRackData`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const scanRackBarcode = (barcode, orderItemId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].conveyorURL + `conveyor/FoldBarcode?barcode=${barcode}&orderitemid=${orderItemId}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
async function getConveyorLabel() {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'ConveyorLabel/GetConveyors', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
}
;
var _c;
__turbopack_context__.k.register(_c, "GetBarcodesListBySku");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/functions/barcodeFuncitons.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeleteNewInspectionStatsById",
    ()=>DeleteNewInspectionStatsById,
    "DeleteSeamstressByID",
    ()=>DeleteSeamstressByID,
    "DeleteSpotterByID",
    ()=>DeleteSpotterByID,
    "GetBarcodeRackPouchByName",
    ()=>GetBarcodeRackPouchByName,
    "GetManagedInspection",
    ()=>GetManagedInspection,
    "GetMaxBarcodeBySlot",
    ()=>GetMaxBarcodeBySlot,
    "RemoveLastInspection",
    ()=>RemoveLastInspection,
    "UpdateInspectionStartDate",
    ()=>UpdateInspectionStartDate,
    "UpdateNewInspectionStatus",
    ()=>UpdateNewInspectionStatus,
    "addBarcodeRange",
    ()=>addBarcodeRange,
    "addBarcodeReturnNote",
    ()=>addBarcodeReturnNote,
    "barcodeNewToUsed",
    ()=>barcodeNewToUsed,
    "barcodeUpdate",
    ()=>barcodeUpdate,
    "barcodeUpdateForTransferItem",
    ()=>barcodeUpdateForTransferItem,
    "bulkUpdateBarcodeStatuses",
    ()=>bulkUpdateBarcodeStatuses,
    "changeBarcode",
    ()=>changeBarcode,
    "changeSku",
    ()=>changeSku,
    "clearNote",
    ()=>clearNote,
    "complaintCheckboxes",
    ()=>complaintCheckboxes,
    "deleteBarcode",
    ()=>deleteBarcode,
    "deleteBarcodeRange",
    ()=>deleteBarcodeRange,
    "fulFillOrderItem",
    ()=>fulFillOrderItem,
    "fullfillOrder",
    ()=>fullfillOrder,
    "getActiveNote",
    ()=>getActiveNote,
    "getActivityByUser",
    ()=>getActivityByUser,
    "getAllBarcodeRange",
    ()=>getAllBarcodeRange,
    "getAllInspection",
    ()=>getAllInspection,
    "getBarcode",
    ()=>getBarcode,
    "getBarcodeDataForNewInspection",
    ()=>getBarcodeDataForNewInspection,
    "getBarcodeDataForStainsTreatment",
    ()=>getBarcodeDataForStainsTreatment,
    "getBarcodeLastStatusAttribute",
    ()=>getBarcodeLastStatusAttribute,
    "getBarcodeOrderHistory",
    ()=>getBarcodeOrderHistory,
    "getBarcodePouchData",
    ()=>getBarcodePouchData,
    "getBarcodeRackByBarcode",
    ()=>getBarcodeRackByBarcode,
    "getBarcodeSlotData",
    ()=>getBarcodeSlotData,
    "getCheckBarcodeFetchRack",
    ()=>getCheckBarcodeFetchRack,
    "getClaimOrdersOld",
    ()=>getClaimOrdersOld,
    "getCleaningAccessories",
    ()=>getCleaningAccessories,
    "getCleaningProgressTracking",
    ()=>getCleaningProgressTracking,
    "getCurrentAddItemStats",
    ()=>getCurrentAddItemStats,
    "getInspectSettings",
    ()=>getInspectSettings,
    "getMissingBarcode",
    ()=>getMissingBarcode,
    "getOldBarcodeNotes",
    ()=>getOldBarcodeNotes,
    "getOrderCollectionOnHold",
    ()=>getOrderCollectionOnHold,
    "getOrderItemBarcodeStatusFunc",
    ()=>getOrderItemBarcodeStatusFunc,
    "getReprintOrderLabelDetails",
    ()=>getReprintOrderLabelDetails,
    "getScanRackBarcode",
    ()=>getScanRackBarcode,
    "getShippersData",
    ()=>getShippersData,
    "getSideCheckoutData",
    ()=>getSideCheckoutData,
    "getSideCheckoutSkuData",
    ()=>getSideCheckoutSkuData,
    "getSkuList",
    ()=>getSkuList,
    "getSkuListByName",
    ()=>getSkuListByName,
    "getSlotConveyorByRack",
    ()=>getSlotConveyorByRack,
    "getSlotFinder",
    ()=>getSlotFinder,
    "getSlotFinderBarcode",
    ()=>getSlotFinderBarcode,
    "getSlotFinderInspector",
    ()=>getSlotFinderInspector,
    "getSlotFinderInventory",
    ()=>getSlotFinderInventory,
    "getSlotterName",
    ()=>getSlotterName,
    "getSoltAssignedStats",
    ()=>getSoltAssignedStats,
    "getStainTreatmentReport",
    ()=>getStainTreatmentReport,
    "getStatusList",
    ()=>getStatusList,
    "getUTLBarcodesList",
    ()=>getUTLBarcodesList,
    "insertCleaningAccessoriesBulk",
    ()=>insertCleaningAccessoriesBulk,
    "insertJacketOrder",
    ()=>insertJacketOrder,
    "insertStainTreatment",
    ()=>insertStainTreatment,
    "prohibitUnfetchedRackBySlot",
    ()=>prohibitUnfetchedRackBySlot,
    "submitCustomerClaim",
    ()=>submitCustomerClaim,
    "updateBarcode",
    ()=>updateBarcode,
    "updateBarcodeRange",
    ()=>updateBarcodeRange,
    "updateBarcodeSlotMultiple",
    ()=>updateBarcodeSlotMultiple,
    "updateBarcodeTags",
    ()=>updateBarcodeTags,
    "updateNote",
    ()=>updateNote,
    "updateOrderRackData",
    ()=>updateOrderRackData,
    "validateBultItems",
    ()=>validateBultItems,
    "validateFullfillItem",
    ()=>validateFullfillItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$querystring$2d$es3$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/querystring-es3/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/functions/globalFunctions.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/globalconfig.js [client] (ecmascript)");
;
;
;
const getBarcode = (barcode, dispatch)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Barcode/BarcodeSearch?barcodeId=' + barcode, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        if (!data?.success && data.message?.includes("Authentication token expired")) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["checkExpiryToken"])(dispatch, user_token);
        }
        return data;
    }).catch((err)=>{
        return err;
    });
};
const getBarcodeOrderHistory = (barcode)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Barcode/OrderHistoryBarcode?barcodeId=' + barcode, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
};
const getSkuList = (productId, skuId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Barcode/GetSkuList?productId=' + productId + '&skuid=' + skuId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
};
const changeSku = (barcode, skuId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Barcode/ChangeSKU', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify({
            "barcodeNum": barcode,
            "skuidNew": skuId
        })
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
};
const updateBarcode = (obj)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    let payload = {
        ...obj
    };
    payload['insertActionNotes'] = true;
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'reload/updatebarcode', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(payload)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
};
const changeBarcode = (barcode, newBarcode)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Barcode/ChangeBarcode', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify({
            "barcodeNew": newBarcode,
            "barcodeOld": barcode
        })
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
};
const deleteBarcode = (barcode)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Barcode/DeleteBarcode?barcodeNum=' + barcode, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
};
const getSkuListByName = (key)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Barcode/GetSkuListByName?skuname=' + key, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
};
const getStatusList = ()=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Barcode/GetStatusList', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
};
const getAllBarcodeRange = ()=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Barcode/GetBarcodeRangeAll', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.warn(err);
    });
};
const getOldBarcodeNotes = (barcodeId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'barcode/getnoteshistory?barcodeId=' + barcodeId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.warn(err);
    });
};
const barcodeUpdate = (obj)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'barcode/UpdateBarcode', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(obj)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const barcodeUpdateForTransferItem = (obj)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'barcode/HandleTransfersAndUpdateBarcode', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(obj)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const deleteBarcodeRange = (id)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Barcode/DeleteBarcodeRange?range_id=' + id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const updateBarcodeRange = (obj)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Barcode/UpdateBarcodeRange', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(obj)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const addBarcodeRange = (obj)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Barcode/CreateBarcodeRange', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(obj)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getActivityByUser = (barcodeId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Barcode/GetActionsActivityWithUser?barcodeId=${barcodeId}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getReprintOrderLabelDetails = (barcode, orderId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `order/GetReprintLabelOrderDetails?barcode=${barcode}&orderId=${orderId}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const fulFillOrderItem = (order_item_id, barcodeNum)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Barcode/FulfilItem?barcodeNum=${barcodeNum}&order_item_id=${order_item_id}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const validateFullfillItem = (obj)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'barcode/ValidateFullfillItem', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + user_token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const fullfillOrder = (obj)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'barcode/FulfilOrder', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + user_token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const barcodeNewToUsed = (barcodeId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Barcode/BarcodeNewToUsed?barcodeid=${barcodeId}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const submitCustomerClaim = (obj)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + "Customer/CustomerComplaint", {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + user_token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
};
const getShippersData = (userId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'barcode/GetShippersGoal?userid=' + userId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
};
const updateBarcodeTags = (payload)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Barcode/UpdateTags', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(payload)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getBarcodePouchData = (userId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Barcode/GetBarcodePouchdata', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
};
const getBarcodeSlotData = (barcode)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Barcode/GetBarcodeSlotData?barcode=${barcode}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
};
const getSlotterName = ()=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].conveyorURL + `Conveyor/GetReferenceMissingItems`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
};
const prohibitUnfetchedRackBySlot = (slot)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].conveyorURL + `Conveyor/ProhibitUnfetchedRackBySlot?slot=${slot}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
};
const updateBarcodeSlotMultiple = (payload)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'barcode/updateBarcodeSlot', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(payload)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getCurrentAddItemStats = ()=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'barcode/GetAddedItemByUserId', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
};
const getCheckBarcodeFetchRack = (barcode)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `barcode/CheckBarcodeFetchRack?barcode=${barcode}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
};
const GetBarcodeRackPouchByName = (name)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Barcode/GetBarcodeRackPouchByName?rackName=${name}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
};
_c = GetBarcodeRackPouchByName;
const getSoltAssignedStats = ()=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'barcode/GetSlotsCountByUserId', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const complaintCheckboxes = [
    "Smell",
    "Stain",
    "Tear",
    "Shrunken Item",
    "Zipper Does Not Work",
    "Missing Button",
    "Entirely Wrong Item",
    "Wrong Size Item",
    "Two Tops or Two Bottoms Provided",
    "Wrong Size Belt or Pair Provided",
    "Pressing",
    "Other"
];
const getBarcodeLastStatusAttribute = (barcodeId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `barcode/GetBarcodeLastStatusAttribute?barcodeid=${barcodeId}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getCleaningAccessories = (from, to, userid = '')=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    let url = `${__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi}barcode/GetCleaningAccessories?from=${from}&to=${to}`;
    if (userid) url += `&userIds=${userid}`;
    return fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const validateBultItems = (obj)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'barcode/BulkValidateFullfillItem', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + user_token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getBarcodeDataForNewInspection = (barcode)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `barcode/GetBarcodeDataForNewInspection_New?barcode=${barcode}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getAllInspection = (date, userId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `barcode/GetAllInspection?startDate=${date}&endDate=${date}&userid=${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getInspectSettings = ()=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'barcode/GetInspectSettings', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getScanRackBarcode = (code)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `barcode/GetBarcodeRackByUniqueCode?uniqueCode=${code}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getSlotConveyorByRack = (rackID)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `barcode/SlotConveyorByRack?rackId=${rackID}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const UpdateInspectionStartDate = (obj)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `barcode/UpdateInspectionStartDate`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(obj)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
_c1 = UpdateInspectionStartDate;
const GetMaxBarcodeBySlot = (start_slot, end_slot)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `barcode/GetMaxBarcodeBySlot?slot_start=${start_slot}&slot_end=${end_slot}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
_c2 = GetMaxBarcodeBySlot;
const UpdateNewInspectionStatus = (payload)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `barcode/InsertNewInspectionStats`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(payload)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
_c3 = UpdateNewInspectionStatus;
const RemoveLastInspection = (body)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Barcode/RemoveFirstInspectionSameUser`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(body)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
_c4 = RemoveLastInspection;
const bulkUpdateBarcodeStatuses = (body)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Barcode/BulkUpdateBarcodeStatuses`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(body)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getCleaningProgressTracking = ()=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `barcode/cleaning_progress_tracking`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getOrderItemBarcodeStatusFunc = (order_id)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `order/GetOrderItemBarcodeStatus?orderid=${order_id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getUTLBarcodesList = ()=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Barcode/GetUtlbarcodes`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const addBarcodeReturnNote = (payload)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Barcode/AddBarcodeReturnNote`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(payload)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
function clearNote(noteTypeId, refId) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Barcode/ClearNote?noteTypeId=${noteTypeId}&refId=${refId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
const getActiveNote = (refId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `notes/GetActiveNote?noteTypeId=1&refId=${refId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const updateNote = (payload)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Barcode/UpdateNote', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(payload)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
function getMissingBarcode() {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Barcode/MissingBarcode', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function getSideCheckoutData() {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Barcode/SideCheckout', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function getSideCheckoutSkuData(barcode) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Barcode/SideCheckoutSku?barcode=${barcode}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
const updateOrderRackData = (payload)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `order/UpdateOrderRackData`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(payload)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const insertJacketOrder = (payload)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `order/InsertJacketOrder`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(payload)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getOrderCollectionOnHold = (barcodes)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `order/OrderCollectionOnHoldByBarcode?foldedBarcodes=${barcodes}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
function GetManagedInspection(barcode) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Barcode/GetManagedInspection?barcode=' + barcode, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
_c5 = GetManagedInspection;
function DeleteNewInspectionStatsById(id) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Barcode/DeleteNewInspectionStatsById?new_inspection_stats_id=' + id, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
_c6 = DeleteNewInspectionStatsById;
function DeleteSpotterByID(id) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Barcode/DeleteSpotterByID?inpection_id=' + id, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
_c7 = DeleteSpotterByID;
function DeleteSeamstressByID(id) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Barcode/DeleteSeamstressByID?inpection_id=' + id, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
_c8 = DeleteSeamstressByID;
const getClaimOrdersOld = (limit)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Order/GetClaimOrdersOld?limit=${limit}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getBarcodeRackByBarcode = (rackName)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Order/GetBarcodeRackByBarcode?barcodeNumber=${rackName}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getSlotFinderBarcode = (barcode)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Barcode/slotFinderBarcode?barcode=${barcode}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>{
        if (!response.ok) {
            return null;
        }
        return response.json();
    }).then((data)=>{
        return data;
    }).catch((err)=>{
        console.error("API Fetch Error:", err);
        return null;
    });
};
const getSlotFinderInspector = (userId, timeValue)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    const formattedTime = timeValue instanceof Date ? timeValue.toISOString() : timeValue;
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `barcode/slotFinderInspector?user_id=${userId}&timeValue=${encodeURIComponent(formattedTime)}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>{
        if (!response.ok) {
            console.error(`API Error: ${response.status}`);
            return null;
        }
        return response.json();
    }).catch((err)=>{
        console.error("API Fetch Error:", err);
        return null;
    });
};
const getSlotFinderInventory = (userId, timeValue)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    const formattedTime = timeValue instanceof Date ? timeValue.toISOString() : timeValue;
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `barcode/slotFinderInventory?user_id=${userId}&timeValue=${encodeURIComponent(formattedTime)}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>{
        if (!response.ok) {
            console.error(`API Error: ${response.status}`);
            return null;
        }
        return response.json();
    }).catch((err)=>{
        console.error("API Fetch Error:", err);
        return null;
    });
};
const getSlotFinder = (userId, timeValue)=>{
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi}barcode/slotFinder?user_Id=${userId}&timeValue=${encodeURIComponent(timeValue)}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }).then((res)=>res.json()).catch((err)=>console.log(err));
};
function getBarcodeDataForStainsTreatment(barcode) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `barcode/getBarcodeDataForStainsTreatment?barcode=${barcode}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
        getBarcodeDataForStainsTreatment;
    });
}
function getStainTreatmentReport(userId, startDate, endDate) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    let url = `barcode/GetStainTreatmentReport?userId=${userId}`;
    if (startDate && endDate) {
        url += `&endDate=${endDate}&startDate=${startDate}`;
    }
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function insertStainTreatment(payload) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    let url = `Barcode/InsertStainTreatment`;
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(payload)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
const insertCleaningAccessoriesBulk = (body)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Barcode/InsertCleaningAccessoriesBulk`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(body)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "GetBarcodeRackPouchByName");
__turbopack_context__.k.register(_c1, "UpdateInspectionStartDate");
__turbopack_context__.k.register(_c2, "GetMaxBarcodeBySlot");
__turbopack_context__.k.register(_c3, "UpdateNewInspectionStatus");
__turbopack_context__.k.register(_c4, "RemoveLastInspection");
__turbopack_context__.k.register(_c5, "GetManagedInspection");
__turbopack_context__.k.register(_c6, "DeleteNewInspectionStatsById");
__turbopack_context__.k.register(_c7, "DeleteSpotterByID");
__turbopack_context__.k.register(_c8, "DeleteSeamstressByID");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/shared/snapshotPopup.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/reactstrap/dist/reactstrap.modern.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/moment/moment.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/functions/globalFunctions.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const SnapShotPopup = (props)=>{
    _s();
    const [msg, setMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [msgText, setMsgText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.customer ? (props.customer.user_name ? props.customer.user_name : '') + " " + (props.customer.name ? props.customer.name : '') : '');
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [sendTo, setSendTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([
        'joel@fashionpass.com',
        'beth@fashionpass.com'
    ]);
    const [sendToCC, setSendToCC] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fileObj, setFileObj] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    const copyCodeToClipboard = ()=>{
        const el = fsLink;
        el.select();
        document.execCommand("copy");
        setMsg(true);
        setMsgText('Link Copied!');
        setTimeout(()=>{
            setMsg(false);
            props.toggle();
        }, 2000);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SnapShotPopup.useEffect": ()=>{
            setTimeout({
                "SnapShotPopup.useEffect": ()=>{
                    document.querySelector('#fullName')?.focus();
                }
            }["SnapShotPopup.useEffect"], 500);
        }
    }["SnapShotPopup.useEffect"], []);
    const getFsLink = ()=>{
        return window.FS.getCurrentSessionURL(true);
    };
    const sendEmail = async ()=>{
        if (name == '' || description == '' || sendTo.length == 0) {
            setError(true);
            setTimeout(()=>{
                setError(false);
            }, 2000);
            return;
        }
        let fsLink = getFsLink();
        let body_obj = {
            user: user,
            application: "Banjo",
            description: description,
            fsLink: fsLink != undefined ? fsLink : '',
            submitted_on: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(Date.now()).format('ddd, MMM D [at] h:mm A'),
            submitted_by: name,
            page_url: document.location.href
        };
        let body = `<p>Application: Banjo<br /><br />User: ${user}<br /><br />Description: ${description}<br /><br />${fsLink}<br /><br />Page Url: ${document.location.href}<br /><br />Submitted on ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(Date.now()).format('ddd, MMM D [at] h:mm A')}<br />Submitted by ${name}</p>`;
        let emailContent = {
            "Subject": name + ' submitted a Banjo FullStory snapshot at ' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(Date.now()).format('h:mm A'),
            "Body": body,
            "body_obj": body_obj,
            "ToAddresses": sendTo,
            "BCCAddresses": [
                'ubaid@7ctech.com'
            ]
        };
        if (fileObj.name) {
            emailContent["ListFiles"] = fileObj;
        }
        setLoading(true);
        let email = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sendGenericEmail"])(emailContent);
        if (email.success) {
            setMsg(true);
            setLoading(false);
            setMsgText('Message was sent!');
            setTimeout(()=>{
                setMsg(false);
                props.toggle();
            }, 2000);
        } else {
            setLoading(false);
        }
    };
    const handleSendTo = (e)=>{
        let recipient = [];
        let CCrecipient = [];
        if (e.target.value.includes(',')) {
            recipient = e.target.value.split(',');
            CCrecipient = e.target.value.split(',');
        } else {
            recipient.push(e.target.value);
        }
        setSendTo(recipient);
    };
    const handleFile = async (event)=>{
        let file = event.target.files[0];
        setFileObj(file);
    };
    let fsLink = '';
    const fsStyle = {
        width: '100%',
        border: 0,
        resize: 'none',
        fontSize: '13px'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-1",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Modal"], {
            isOpen: props.isOpen,
            toggle: props.toggle,
            size: "md",
            centered: true,
            animation: "false",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ModalHeader"], {
                    toggle: props.toggle,
                    children: "Full Story Form"
                }, void 0, false, {
                    fileName: "[project]/components/shared/snapshotPopup.js",
                    lineNumber: 115,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                !msg ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ModalBody"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Form"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FormGroup"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        for: "name",
                                                        children: "User:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/shared/snapshotPopup.js",
                                                        lineNumber: 122,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        type: "text",
                                                        defaultValue: user,
                                                        readOnly: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/shared/snapshotPopup.js",
                                                        lineNumber: 123,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/shared/snapshotPopup.js",
                                                lineNumber: 121,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FormGroup"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        for: "name",
                                                        children: "Your Name:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/shared/snapshotPopup.js",
                                                        lineNumber: 126,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        autoFocus: true,
                                                        type: "text",
                                                        required: true,
                                                        name: "name",
                                                        id: "fullName",
                                                        onChange: (e)=>setName(e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/shared/snapshotPopup.js",
                                                        lineNumber: 127,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/shared/snapshotPopup.js",
                                                lineNumber: 125,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FormGroup"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        for: "description",
                                                        children: "Description of Problem:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/shared/snapshotPopup.js",
                                                        lineNumber: 130,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        type: "textarea",
                                                        required: true,
                                                        name: "description",
                                                        id: "description",
                                                        onChange: (e)=>setDescription(e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/shared/snapshotPopup.js",
                                                        lineNumber: 131,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/shared/snapshotPopup.js",
                                                lineNumber: 129,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FormGroup"], {
                                                className: "d-none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        for: "description",
                                                        children: "Attach Screen Shot:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/shared/snapshotPopup.js",
                                                        lineNumber: 134,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        type: "file",
                                                        onChange: (e)=>handleFile(e)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/shared/snapshotPopup.js",
                                                        lineNumber: 135,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/shared/snapshotPopup.js",
                                                lineNumber: 133,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FormGroup"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        for: "sendTo",
                                                        children: "Send to:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/shared/snapshotPopup.js",
                                                        lineNumber: 138,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        type: "select",
                                                        required: true,
                                                        name: "sendTo",
                                                        id: "sendTo",
                                                        onChange: (e)=>handleSendTo(e),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                hidden: true,
                                                                children: "Select"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/shared/snapshotPopup.js",
                                                                lineNumber: 140,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "beth@fashionpass.com",
                                                                children: "Beth"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/shared/snapshotPopup.js",
                                                                lineNumber: 141,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                selected: true,
                                                                value: "joel@fashionpass.com,beth@fashionpass.com",
                                                                children: "Joel, Beth"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/shared/snapshotPopup.js",
                                                                lineNumber: 142,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "joel@fashionpass.com,lauren@fashionpass.com",
                                                                children: "Joel, Lauren"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/shared/snapshotPopup.js",
                                                                lineNumber: 143,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/shared/snapshotPopup.js",
                                                        lineNumber: 139,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/shared/snapshotPopup.js",
                                                lineNumber: 137,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "ml-2",
                                                style: {
                                                    color: '#ff0000'
                                                },
                                                children: "All fields are required."
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/snapshotPopup.js",
                                                lineNumber: 146,
                                                columnNumber: 47
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/shared/snapshotPopup.js",
                                        lineNumber: 120,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/snapshotPopup.js",
                                    lineNumber: 119,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "d-flex align-items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            ref: (textarea)=>fsLink = textarea,
                                            defaultValue: getFsLink(),
                                            style: fsStyle
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/snapshotPopup.js",
                                            lineNumber: 150,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Button"], {
                                            className: "ml-1",
                                            style: {
                                                whiteSpace: 'nowrap',
                                                fontSize: '12px'
                                            },
                                            onClick: ()=>copyCodeToClipboard(),
                                            children: "Copy Link"
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/snapshotPopup.js",
                                            lineNumber: 151,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/snapshotPopup.js",
                                    lineNumber: 149,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/snapshotPopup.js",
                            lineNumber: 118,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ModalFooter"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-primary mb-2 pl-5 pr-5",
                                onClick: sendEmail,
                                disabled: loading,
                                children: " Submit "
                            }, void 0, false, {
                                fileName: "[project]/components/shared/snapshotPopup.js",
                                lineNumber: 155,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/shared/snapshotPopup.js",
                            lineNumber: 154,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-2",
                    style: {
                        textAlign: 'center'
                    },
                    children: msgText
                }, void 0, false, {
                    fileName: "[project]/components/shared/snapshotPopup.js",
                    lineNumber: 159,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/shared/snapshotPopup.js",
            lineNumber: 114,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/shared/snapshotPopup.js",
        lineNumber: 113,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SnapShotPopup, "ZuujYYKwxuo9EWNrZ7gX8MUQHXc=");
_c = SnapShotPopup;
const __TURBOPACK__default__export__ = SnapShotPopup;
var _c;
__turbopack_context__.k.register(_c, "SnapShotPopup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/functions/orderFunction.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddItemToOrder",
    ()=>AddItemToOrder,
    "GetAllReturnRates",
    ()=>GetAllReturnRates,
    "GetOrderByName",
    ()=>GetOrderByName,
    "GetOrderNamebyTrackingNumber",
    ()=>GetOrderNamebyTrackingNumber,
    "GetReturnRates",
    ()=>GetReturnRates,
    "addClaimOrderInList",
    ()=>addClaimOrderInList,
    "addOrUpdatePenPal",
    ()=>addOrUpdatePenPal,
    "addOrUpdatePersonalItems",
    ()=>addOrUpdatePersonalItems,
    "addToOnHoldOrder",
    ()=>addToOnHoldOrder,
    "addToOnHoldOrderNew",
    ()=>addToOnHoldOrderNew,
    "addToStarOrder",
    ()=>addToStarOrder,
    "addedShipmentCountLower",
    ()=>addedShipmentCountLower,
    "bucketShelvesSlots",
    ()=>bucketShelvesSlots,
    "cancelOrder",
    ()=>cancelOrder,
    "changeOrderItemSku",
    ()=>changeOrderItemSku,
    "checkCheckinProgress",
    ()=>checkCheckinProgress,
    "checkInOrder",
    ()=>checkInOrder,
    "checkOrderHolderNotes",
    ()=>checkOrderHolderNotes,
    "claimOrder",
    ()=>claimOrder,
    "claimRackOrdersByUser",
    ()=>claimRackOrdersByUser,
    "clearAllClaims",
    ()=>clearAllClaims,
    "clearClaim",
    ()=>clearClaim,
    "countOrderAgain",
    ()=>countOrderAgain,
    "deleteItemFromOrder",
    ()=>deleteItemFromOrder,
    "deleteOrderImage",
    ()=>deleteOrderImage,
    "excludeOrderForCJDashboard",
    ()=>excludeOrderForCJDashboard,
    "excludeOrderForInTransitDashboard",
    ()=>excludeOrderForInTransitDashboard,
    "getAccessoriesStatsReport",
    ()=>getAccessoriesStatsReport,
    "getAddedOrderDetailList",
    ()=>getAddedOrderDetailList,
    "getAllCustomShipmentRates",
    ()=>getAllCustomShipmentRates,
    "getAllFulfilledOrders",
    ()=>getAllFulfilledOrders,
    "getAllInspection",
    ()=>getAllInspection,
    "getAllInspectionErrors",
    ()=>getAllInspectionErrors,
    "getAllInspectionOrder",
    ()=>getAllInspectionOrder,
    "getAllShipmentRates",
    ()=>getAllShipmentRates,
    "getAllShippedOrders",
    ()=>getAllShippedOrders,
    "getCantFindOrderDetailList",
    ()=>getCantFindOrderDetailList,
    "getCheckinEstimateTime",
    ()=>getCheckinEstimateTime,
    "getClaimOrderDetail",
    ()=>getClaimOrderDetail,
    "getCustomerCurrentOrderXItem",
    ()=>getCustomerCurrentOrderXItem,
    "getDailyInspectionAverage",
    ()=>getDailyInspectionAverage,
    "getFetchingSlot",
    ()=>getFetchingSlot,
    "getInspectionReportsStatesNew",
    ()=>getInspectionReportsStatesNew,
    "getInvoiceDetails",
    ()=>getInvoiceDetails,
    "getIsGarmentActionActivity",
    ()=>getIsGarmentActionActivity,
    "getIssueReportData",
    ()=>getIssueReportData,
    "getJacketOrderCollection",
    ()=>getJacketOrderCollection,
    "getManualCheckin",
    ()=>getManualCheckin,
    "getManualCheckinWithNumber",
    ()=>getManualCheckinWithNumber,
    "getNotificationSetting",
    ()=>getNotificationSetting,
    "getOrderHistoryLogs",
    ()=>getOrderHistoryLogs,
    "getOrderHoldTypes",
    ()=>getOrderHoldTypes,
    "getOrderIDsInCurrentSession",
    ()=>getOrderIDsInCurrentSession,
    "getOrderImages",
    ()=>getOrderImages,
    "getOrderProcessed",
    ()=>getOrderProcessed,
    "getPersonalItemsByOrderId",
    ()=>getPersonalItemsByOrderId,
    "getPersonalItemsDashboard",
    ()=>getPersonalItemsDashboard,
    "getRackBackOnOrder",
    ()=>getRackBackOnOrder,
    "getReturnProcessed",
    ()=>getReturnProcessed,
    "getShipmentRates",
    ()=>getShipmentRates,
    "getSkuListByName",
    ()=>getSkuListByName,
    "getSlotted",
    ()=>getSlotted,
    "getSlottedItems",
    ()=>getSlottedItems,
    "getStarCategory",
    ()=>getStarCategory,
    "getStarredOrders",
    ()=>getStarredOrders,
    "getSteamStressReport",
    ()=>getSteamStressReport,
    "getTotalIssueReported",
    ()=>getTotalIssueReported,
    "getshipmentLabelCustom",
    ()=>getshipmentLabelCustom,
    "insertOrderActionNote",
    ()=>insertOrderActionNote,
    "markFound",
    ()=>markFound,
    "markItemCantFind",
    ()=>markItemCantFind,
    "newOrder",
    ()=>newOrder,
    "printGenericPage",
    ()=>printGenericPage,
    "printMaxRetail",
    ()=>printMaxRetail,
    "printPurchaseRecieptUsingIframe",
    ()=>printPurchaseRecieptUsingIframe,
    "printRentalReceipt",
    ()=>printRentalReceipt,
    "printRentalReceipt1",
    ()=>printRentalReceipt1,
    "printRentalReceipt2",
    ()=>printRentalReceipt2,
    "printSaleReceipt",
    ()=>printSaleReceipt,
    "putOrderOnHold",
    ()=>putOrderOnHold,
    "removeClaimOrder",
    ()=>removeClaimOrder,
    "removeFromOnHoldOrder",
    ()=>removeFromOnHoldOrder,
    "removeFromStarOrder",
    ()=>removeFromStarOrder,
    "searchFullOrderByBarcode",
    ()=>searchFullOrderByBarcode,
    "searchOrderByBarcode",
    ()=>searchOrderByBarcode,
    "starOrderInfoById",
    ()=>starOrderInfoById,
    "swapOrderType",
    ()=>swapOrderType,
    "unCheckInOrder",
    ()=>unCheckInOrder,
    "updateDeliveryMethod",
    ()=>updateDeliveryMethod,
    "updateJacketOrderStatusById",
    ()=>updateJacketOrderStatusById,
    "updateNeverExpectOrderBack",
    ()=>updateNeverExpectOrderBack,
    "updateNotesHistory",
    ()=>updateNotesHistory,
    "updateOrderAddress",
    ()=>updateOrderAddress,
    "updateOrderNotes",
    ()=>updateOrderNotes,
    "updateOrderReturnNotes",
    ()=>updateOrderReturnNotes,
    "updateOrderTags",
    ()=>updateOrderTags,
    "updateStarredOrderCategoryAndNotes",
    ()=>updateStarredOrderCategoryAndNotes,
    "updateStatusPersonalItems",
    ()=>updateStatusPersonalItems,
    "updateValidateAddress",
    ()=>updateValidateAddress,
    "uploadOrderImage",
    ()=>uploadOrderImage,
    "verifyAddressByFedex",
    ()=>verifyAddressByFedex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/moment/moment.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/functions/globalFunctions.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/globalconfig.js [client] (ecmascript)");
;
;
;
async function newOrder() {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Order/GetNewOrders', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    });
}
async function getShipmentRates(orderId, bagSize, showWeight, bagWeight, deliveryid, addressType, promiseDelivery = 0, addressValidation = false) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    let payload = {
        'orderid': orderId,
        'bagSize': bagSize,
        'promisedDate': promiseDelivery,
        'isAddressValidated': addressValidation
    };
    let url = 'Shipment/GetShipmentRates?orderid=' + orderId + '&bagSize=' + bagSize;
    if (showWeight) {
        payload['weight'] = parseInt(bagWeight);
        url = url + '&weight=' + parseInt(bagWeight);
    }
    if (deliveryid > 0) {
        payload['deliveryId'] = deliveryid;
        url = url + '&deliveryId=' + deliveryid;
    }
    if (addressType && addressType !== 'BUSINESS') {
        payload['isResidential'] = true;
        url = url + '&isResidential=true';
    } else {
        payload['isResidential'] = false;
        url = url + '&isResidential=false';
    }
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Shipment/GetShipmentRates', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(payload)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    });
}
async function getAllShipmentRates(orderId, bagSize, showWeight, bagWeight, deliveryid, addressType, promiseDelivery) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    let payload = {
        'orderid': orderId,
        'bagSize': bagSize,
        'promisedDate': promiseDelivery
    };
    let url = 'Shipment/GetAllShipmentRates?orderid=' + orderId + '&bagSize=' + bagSize;
    if (showWeight) {
        payload['weight'] = parseInt(bagWeight);
        url = url + '&weight=' + parseInt(bagWeight);
    }
    if (deliveryid > 0) {
        payload['deliveryId'] = deliveryid;
        url = url + '&deliveryId=' + deliveryid;
    }
    if (addressType && addressType !== 'BUSINESS') {
        payload['isResidential'] = true;
        url = url + '&isResidential=true';
    } else {
        payload['isResidential'] = false;
        url = url + '&isResidential=false';
    }
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Shipment/GetAllShipmentRates', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(payload)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    });
}
async function GetAllReturnRates(orderId, promiseDelivery) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    let payload = {
        'orderid': orderId,
        'promisedDate': promiseDelivery
    };
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Shipment/GetAllReturnRates?orderid=' + orderId, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(payload)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    });
}
_c = GetAllReturnRates;
async function GetReturnRates(orderId, addressType, bagSize, promiseDelivery = 0, addressValidation = false) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    let payload = {
        'orderid': orderId,
        'promisedDate': promiseDelivery,
        'isAddressValidated': addressValidation
    };
    let url = 'Shipment/GetReturnRates?orderid=' + orderId;
    if (addressType && addressType !== 'BUSINESS') {
        payload['isResidential'] = true;
        url = url + '&isResidential=true';
    } else {
        payload['isResidential'] = false;
        url = url + '&isResidential=false';
    }
    if (bagSize) {
        payload['bagSize'] = bagSize;
        url = url + '&bagSize=' + bagSize;
    }
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Shipment/GetReturnRates', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(payload)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    });
}
_c1 = GetReturnRates;
async function GetOrderByName(orderName, dispatch) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Order/GetOrderBySearch?ordername=' + orderName, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        if (!data?.success && data.message?.includes("Authentication token expired")) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["checkExpiryToken"])(dispatch, user_token);
        }
        return data;
    });
}
_c2 = GetOrderByName;
async function addToStarOrder(obj) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Order/StarOrder', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(obj)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    });
}
async function removeFromStarOrder(orderid) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Order/RemoveStarFromOrder?orderid=' + orderid, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    });
}
async function starOrderInfoById(orderid) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Order/GetStarredOrdersByOrderid?Orderid=${orderid}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    });
}
async function getStarCategory() {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Order/GetStarCategory', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    });
}
async function addToOnHoldOrder(obj) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Order/PutOrderOnHold?orderid=${parseInt(obj.orderid)}&note=${obj.note}&sendEmail=${obj.notify}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    });
}
async function removeFromOnHoldOrder(orderid) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Order/UnPutOrderOnHold?orderid=' + orderid, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    });
}
async function claimOrder(orderid, forceClaim) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Order/ClaimOrder?orderid=${orderid}&forceClaim=${forceClaim}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    });
}
async function removeClaimOrder(orderid) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Order/RemoveClaimFromOrder?orderid=' + orderid, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    });
}
async function updateNotesHistory(orderHistoryData) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Invoice/AddNewInvoiceHistory', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(orderHistoryData)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
}
async function updateOrderNotes(obj) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Order/UpdateOrderNote', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(obj)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
}
function getSkuListByName(skuName) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Sku/SearchSkuListByName?skuName=' + skuName, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    });
}
function AddItemToOrder(skuName, orderId, itemType, isBonusItem) {
    let bonus = false;
    if (isBonusItem == true) {
        bonus = true;
    }
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Order/AddItemToOrder?orderid=${orderId}&skuid=${skuName}&type=${itemType}&bonus=${bonus}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    });
}
_c3 = AddItemToOrder;
function uploadOrderImage(data) {
    var formData = new FormData();
    Object.entries(data).map((value, key)=>{
        formData.append(value[0], value[1]);
    });
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Order/UploadOrderImage', {
        method: 'POST',
        body: formData,
        headers: {
            'Authorization': 'Bearer ' + user_token
        },
        processData: false,
        contentType: false,
        mimeType: "multipart/form-data"
    }).then((response)=>response.json()).then((response)=>{
        return response;
    }).catch((e)=>console.log(e));
}
function getOrderImages(orderId) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Order/GetOrderImageNotesByOrderid?Orderid=${orderId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    });
}
function deleteOrderImage(id) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Order/DeleteOrderImageNotesByOrderid?imageID=${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    });
}
async function updateOrderAddress(obj) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Order/UpdateOrderAddress', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(obj)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
}
function getManualCheckin() {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].shipmentAPI + `CheckIn/ManualBulkCheckIn`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    });
}
function getManualCheckinWithNumber(total_customers) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].shipmentAPI + `CheckIn/ManualBulkCheckIn/${total_customers}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    });
}
function checkCheckinProgress() {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `order/IsCheckInRunning`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    });
}
function getClaimOrderDetail() {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Order/GetClaimOrderDetailist`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function getAddedOrderDetailList() {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Order/GetAddedOrderDetailList`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function getRackBackOnOrder(orderid) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Order/PutRackBackOnOrder?orderid=${orderid}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function getCantFindOrderDetailList() {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Order/getCantFindOrderDetailList`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function markFound(orderid, order_item_id) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Order/markFound?orderid=${orderid}&order_item_id=${order_item_id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function clearClaim(orderid) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Order/RemoveClaimFromOrder?orderid=${orderid}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function getOrderHistoryLogs(orderId) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Order/GetOrderNotesHistory?orderid=${orderId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function updateOrderReturnNotes(obj) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Order/UpdateOrderReturnNote`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(obj)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function deleteItemFromOrder(params) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `barcode/deleteitem?${params}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function checkOrderHolderNotes(orderId) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Order/CheckOrderHoldedNote?orderid=${orderId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function changeOrderItemSku(obj) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Order/ChangeOrderItemSku', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(obj)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
const markItemCantFind = (orderId, orderItemId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Order/CantFindItem?orderid=${orderId}&order_item_id=${orderItemId}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const updateDeliveryMethod = (obj)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Order/EditDeliveryOptions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(obj)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const searchOrderByBarcode = (barcode)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Order/SearchOrderByBarcode?folded_barcode=${barcode}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const searchFullOrderByBarcode = (barcode)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Order/SearchFullOrderByBarcode?folded_barcode=${barcode}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const checkInOrder = (obj)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].shipmentAPI + 'CheckIn/SingleCheckIn', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(obj)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const unCheckInOrder = (obj)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].shipmentAPI + 'CheckIn/UnCheckIn', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(obj)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const cancelOrder = (orderid, restoke)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Order/CancelOrder?orderid=${orderid}&restock=${restoke}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const printMaxRetail = (ordername, url = '')=>{
    let baseURlEncoded = encodeURIComponent(`https://banjo-dev.fashionpass.com:3001/orderdetails/print/printMaxRetail?url=${url}?profile=`);
    return fetch(`http://127.0.0.1:8099/printURL?url=b&baseUrl=${baseURlEncoded}`, {
        method: 'GET',
        dataType: "jsonp"
    }).then((response)=>response.json()).then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    });
};
const printRentalReceipt = (ordername, customerName = '')=>{
    let baseURlEncoded = encodeURIComponent(`https://banjo.fashionpass.com/orderdetails/print/printPurchaseMembershipNew?name=${customerName}&ordername=`);
    return fetch(`http://127.0.0.1:8099/printURL?url=${ordername}&baseUrl=${baseURlEncoded}`, {
        method: 'GET',
        dataType: "jsonp"
    }).then((response)=>response.json()).then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    });
};
const printSaleReceipt = (ordername)=>{
    return fetch(`http://127.0.0.1:8099/printURL?url=${ordername}&baseUrl=https://banjo.fashionpass.com/orderdetails/print/printPurchaseReceipt?ordername=`, {
        method: 'GET',
        dataType: "jsonp"
    }).then((response)=>response.json()).then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    });
};
const swapOrderType = (orderitemid, userid)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Order/SwapOrderType?orderitemId=${orderitemid}&userid=${userid}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const verifyAddressByFedex = (payload)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Fedex/VerifyAddress', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(payload)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const updateValidateAddress = (payload)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Order/UpdateValidateAddress', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(payload)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
function GetOrderNamebyTrackingNumber(trackingNumber) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Order/GetOrderNameBytrackingNumber?trackingnumber=${trackingNumber}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
_c4 = GetOrderNamebyTrackingNumber;
const getNotificationSetting = ()=>{
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'LokiSettings/GetNotificationSetting').then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((error)=>{
        console.log(error);
    });
};
const getInvoiceDetails = (ordername, oldOrder)=>{
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Order/GetInvoiceDetailsByOrdername?ordername=${ordername}&isOldOrder=${oldOrder}`, {
        method: 'GET'
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((error)=>{
        console.log(error);
    });
};
const printGenericPage = (ordername, url)=>{
    return fetch(`http://127.0.0.1:8099/printURL?url=${ordername}&baseUrl=${url}`, {
        method: 'GET',
        dataType: "jsonp"
    }).then((response)=>response.json()).then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    });
};
const addClaimOrderInList = (orderid, type, status)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI}order/AddClaimOrderInList?orderid=${orderid}&type=${type}&status=${status}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const updateOrderTags = (payload)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Order/UpdateOrderTags`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + user_token
        },
        body: JSON.stringify(payload)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const insertOrderActionNote = (payload)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'order/InsertOrderActionNote', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + user_token
        },
        body: JSON.stringify(payload)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const printRentalReceipt1 = (ordername)=>{
    return fetch(`http://127.0.0.1:8099/printURL?url=${ordername}&baseUrl=https://banjo.fashionpass.com/orderdetails/print/printPurchaseMembershipNew1?ordername=`, {
        method: 'GET',
        dataType: "jsonp"
    }).then((response)=>response.json()).then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    });
};
const printRentalReceipt2 = (ordername)=>{
    return fetch(`http://127.0.0.1:8099/printURL?url=${ordername}&baseUrl=https://banjo.fashionpass.com/orderdetails/print/printPurchaseMembershipNew2?ordername=`, {
        method: 'GET',
        dataType: "jsonp"
    }).then((response)=>response.json()).then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    });
};
function getCheckinEstimateTime(data) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].shipmentAPI + 'CheckIn/GetCheckInEstimateTime', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + user_token
        },
        body: JSON.stringify(data)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
function addToOnHoldOrderNew(obj) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Order/PutOrderOnHoldPost`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(obj)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    });
}
function excludeOrderForCJDashboard(id) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Order/OrderExcludeForCJDashboard?orderid=${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    });
}
async function claimRackOrdersByUser(rackCode) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    try {
        const data = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Order/ClaimRackOrdersByUser?rackBarcode=${rackCode}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + user_token
            }
        }).then((res)=>res.json()).then((data)=>{
            return data;
        });
        return data;
    } catch (err) {
        console.log(err);
    }
}
const getOrderIDsInCurrentSession = ()=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].conveyorURL + `Conveyor/GetOrderIDsInCurrentSession`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
function putOrderOnHold(obj) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Order/PutOrderOnHoldPostv2`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(obj)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    });
}
const getAllFulfilledOrders = ()=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Order/GetAllFulfilledOrders`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getOrderHoldTypes = ()=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `order/GetOrderHoldTypes?isManual=false`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getAllShippedOrders = ()=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Order/GetAllShippedOrders`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
async function updateNeverExpectOrderBack(orderid) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Order/updateNeverExpectOrderBack?order_id=${orderid}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
}
async function clearAllClaims(obj) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Order/ClearAllClaims`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(obj)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
}
const getInspectionReportsStatesNew = (startDate, endDate, userId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    let endpoint = '?action=today';
    if (startDate && endDate) {
        if (userId) {
            endpoint = `?startDate=${startDate}&endDate=${endDate}&userid=${userId}`;
        } else {
            endpoint = `?startDate=${startDate}&endDate=${endDate}`;
        }
    }
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `barcode/GetInspectionReportsStatesNew${endpoint}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
async function countOrderAgain(orderid, reason, shipid, isAdded) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Order/RemoveShipmentCountLower?order_id=${orderid}&reason=${reason}&ship_id=${shipid}&is_added=${isAdded}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
}
function excludeOrderForInTransitDashboard(id) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Order/OrderExcludeForinTransitDashboard?OrderId=${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    });
}
const getAllInspection = (startDate, endDate, userId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    let endpoint = '?action=today';
    if (startDate && endDate) {
        if (userId) {
            endpoint = `?startDate=${startDate}&endDate=${endDate}&userid=${userId}`;
        } else {
            endpoint = `?startDate=${startDate}&endDate=${endDate}`;
        }
    } else if (userId) {
        endpoint = `?action=today&userid=${userId}`;
    }
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `barcode/GetAllInspection${endpoint}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getDailyInspectionAverage = ()=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `barcode/GetDailyInspectionAverage`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getIssueReportData = (startDate, endDate, userId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    let endpoint = '?action=today';
    if (startDate && endDate) {
        if (userId) {
            endpoint = `?startDate=${startDate}&endDate=${endDate}&userid=${userId}`;
        } else {
            endpoint = `?startDate=${startDate}&endDate=${endDate}`;
        }
    } else if (userId) {
        endpoint = `?action=today&userid=${userId}`;
    }
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `barcode/GetIssueReportData${endpoint}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getAllInspectionErrors = (startDate, endDate, userId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    let endpoint = '?action=today';
    if (startDate && endDate) {
        if (userId) {
            endpoint = `?startDate=${startDate}&endDate=${endDate}&userid=${userId}`;
        } else {
            endpoint = `?startDate=${startDate}&endDate=${endDate}`;
        }
    } else if (userId) {
        endpoint = `?action=today&userid=${userId}`;
    }
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `barcode/GetAllInspectionErrors${endpoint}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getTotalIssueReported = (startDate, endDate, userId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    let endpoint = '?action=today';
    if (startDate && endDate) {
        if (userId) {
            endpoint = `?startDate=${startDate}&endDate=${endDate}&userid=${userId}`;
        } else {
            endpoint = `?startDate=${startDate}&endDate=${endDate}`;
        }
    } else if (userId) {
        endpoint = `?action=today&userid=${userId}`;
    }
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `barcode/GetTotalIssueReported${endpoint}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getIsGarmentActionActivity = (startDate, endDate, userId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    let endpoint = '?action=today';
    if (startDate && endDate) {
        if (userId) {
            endpoint = `?startDate=${startDate}&endDate=${endDate}&userid=${userId}`;
        } else {
            endpoint = `?startDate=${startDate}&endDate=${endDate}`;
        }
    } else if (userId) {
        endpoint = `?action=today&userid=${userId}`;
    }
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `barcode/GetIsGarmentActionActivity${endpoint}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getFetchingSlot = (startDate, endDate, userId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    let endpoint = '';
    if (startDate && endDate) {
        if (userId) {
            endpoint = `?startDate=${startDate}&endDate=${endDate}&userid=${userId}`;
        } else {
            endpoint = `?startDate=${startDate}&endDate=${endDate}`;
        }
    }
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `order/GetFetchingRecords${endpoint}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getSlotted = (startDate, endDate, userId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    let endpoint = '';
    if (startDate && endDate) {
        if (userId) {
            endpoint = `?startDate=${startDate}&endDate=${endDate}&userid=${userId}`;
        } else {
            endpoint = `?startDate=${startDate}&endDate=${endDate}`;
        }
    }
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `order/GetSlotingRecords${endpoint}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getOrderProcessed = (startDate, endDate, userId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    let endpoint = '';
    if (startDate && endDate) {
        if (userId) {
            endpoint = `?startDate=${startDate}&endDate=${endDate}&userid=${userId}`;
        } else {
            endpoint = `?startDate=${startDate}&endDate=${endDate}`;
        }
    }
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `order/GetOrderProcessed${endpoint}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getSlottedItems = (startDate, endDate, userId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    let endpoint = '';
    if (startDate && endDate) {
        if (userId) {
            endpoint = `?startDate=${startDate}&endDate=${endDate}&userid=${userId}`;
        } else {
            endpoint = `?startDate=${startDate}&endDate=${endDate}`;
        }
    }
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `order/GetSlottedItems${endpoint}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getReturnProcessed = (startDate, endDate, userId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    let endpoint = '';
    if (startDate && endDate) {
        if (userId) {
            endpoint = `?startDate=${startDate}&endDate=${endDate}&userid=${userId}`;
        } else {
            endpoint = `?startDate=${startDate}&endDate=${endDate}`;
        }
    }
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `order/GetReturnProcessed${endpoint}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getAllInspectionOrder = (startDate, endDate, userId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    let endpoint = '';
    if (startDate && endDate) {
        if (userId) {
            endpoint = `?startDate=${startDate}&endDate=${endDate}&userid=${userId}`;
        } else {
            endpoint = `?startDate=${startDate}&endDate=${endDate}`;
        }
    }
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `order/GetAllInspection${endpoint}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getSteamStressReport = (startDate, endDate, userId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    let endpoint = '';
    if (startDate && endDate) {
        if (userId) {
            endpoint = `?startDate=${startDate}&endDate=${endDate}&userid=${userId}`;
        } else {
            endpoint = `?startDate=${startDate}&endDate=${endDate}`;
        }
    }
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `barcode/GetSteamStressReport${endpoint}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const printPurchaseRecieptUsingIframe = (url)=>{
    try {
        const printUrl = url;
        console.error("Print code run");
        // Create hidden iframe
        const iframe = document.createElement("iframe");
        iframe.style.position = "fixed";
        iframe.style.right = "0";
        iframe.style.bottom = "0";
        iframe.style.width = "0";
        iframe.style.height = "0";
        iframe.style.border = "0";
        iframe.src = printUrl;
        document.body.appendChild(iframe);
        // Wait for iframe to fully load before printing
        iframe.onload = function() {
            setTimeout(()=>{
                iframe.contentWindow?.focus();
                iframe.contentWindow?.print();
                // Optional: remove iframe after printing
                setTimeout(()=>{
                    document.body.removeChild(iframe);
                }, 2000);
            }, 3000);
        };
    } catch (error) {
        console.error("Print error:", error);
    }
};
function addOrUpdatePenPal(customerId, cardType) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Customer/AddOrUpdatePenPal?CustomerId=${customerId}&cardType=${cardType}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
async function addedShipmentCountLower(obj) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'order/UpdateAddedShipmentCountLower', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(obj)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    });
}
function getCustomerCurrentOrderXItem(orderId, customerId) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Invoice/GetCurrentOrderXItems?orderId=${orderId}&customerId=${customerId}&fromBanjo=true`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then(async (data)=>{
        return data;
    });
}
function addOrUpdatePersonalItems(payload) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Order/AddOrUpdatePersonalItems`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(payload)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
const getPersonalItemsDashboard = ()=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Order/GetPersonalItemsDashboard`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
function updateStatusPersonalItems(payload) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Order/updateStatusPersonalItems`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(payload)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
const getshipmentLabelCustom = (shipId, bagSize)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Order/GetshipmentLabelCustom?shipmentid=${shipId}&bagSizeid=${bagSize}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getPersonalItemsByOrderId = (order_id)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Order/GetPersonalItemsByOrderId?orderId=${order_id}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
function getAllCustomShipmentRates(payload) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Shipment/GetAllCustomShipmentRates`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(payload)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
const bucketShelvesSlots = ()=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Order/bucketShelvesSlots`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getStarredOrders = ()=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Order/GetStarredOrders`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
function updateStarredOrderCategoryAndNotes(obj) {
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Order/UpdateStarredOrder`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(obj)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
}
const getAccessoriesStatsReport = (startDate, endDate, userId)=>{
    const user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    let endpoint = '';
    if (startDate && endDate) {
        endpoint = `?startDate=${encodeURIComponent(startDate)}&endDate=${encodeURIComponent(endDate)}`;
        if (userId) {
            endpoint += `&userid=${userId}`;
        }
    }
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `order/GetAccessoriesStatsReport${endpoint}`, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>data).catch((err)=>{
        console.log(err);
    });
};
const updateJacketOrderStatusById = (orderPrimaryKey)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Order/UpdateJacketOrderStatusById?id=${orderPrimaryKey}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getJacketOrderCollection = ()=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `order/GetJacketOrderCollection`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "GetAllReturnRates");
__turbopack_context__.k.register(_c1, "GetReturnRates");
__turbopack_context__.k.register(_c2, "GetOrderByName");
__turbopack_context__.k.register(_c3, "AddItemToOrder");
__turbopack_context__.k.register(_c4, "GetOrderNamebyTrackingNumber");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/shared/search.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/index.es.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/globalconfig.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/functions/globalFunctions.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$autocomplete$2f$build$2f$lib$2f$Autocomplete$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-autocomplete/build/lib/Autocomplete.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-redux/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/es/exports.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$orderFunction$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/functions/orderFunction.js [client] (ecmascript)");
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
function Search(props) {
    _s();
    var _s1 = __turbopack_context__.k.signature();
    const banjoUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "Search.useSelector[banjoUser]": (state)=>state.banjoUser
    }["Search.useSelector[banjoUser]"]);
    let [searchVal, setSearchVal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    let [collapse, setCollapse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let [searchList, setSearchList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const useDebounce = (callback, delay)=>{
        _s1();
        const debounceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
        const debouncedFunction = (...args)=>{
            if (debounceRef.current) {
                clearTimeout(debounceRef.current);
            }
            debounceRef.current = setTimeout(()=>{
                callback(...args);
            }, delay);
        };
        return debouncedFunction;
    };
    _s1(useDebounce, "kepDMkm6oJsoJj1fht0Tfj5xL+k=");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Search.useEffect": ()=>{
            clickAnyWhere();
            return ({
                "Search.useEffect": ()=>{
                    document.body.removeEventListener('click', {
                        "Search.useEffect": ()=>{}
                    }["Search.useEffect"], false);
                }
            })["Search.useEffect"];
        }
    }["Search.useEffect"], []);
    let onlyNumberCheck = (val)=>{
        return /^\d+$/.test(val);
    };
    let handleEnter = (e)=>{
        if (e.key === 'Enter') {
            serchByData();
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Search.useEffect": ()=>{
            let search = localStorage.getItem("searchValue");
            if (search && search !== "undefined") {
                setSearchVal(search);
                localStorage.removeItem("searchValue");
            }
        }
    }["Search.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Search.useEffect": ()=>{
            const handleSearchRef = {
                "Search.useEffect.handleSearchRef": (event)=>{
                    const refValue = event?.detail?.trim?.();
                    if (refValue) {
                        setSearchVal(refValue);
                    }
                }
            }["Search.useEffect.handleSearchRef"];
            window.addEventListener('banjo:search-ref', handleSearchRef);
            return ({
                "Search.useEffect": ()=>{
                    window.removeEventListener('banjo:search-ref', handleSearchRef);
                }
            })["Search.useEffect"];
        }
    }["Search.useEffect"], []);
    let serchByData = async (event)=>{
        searchVal = searchVal.trim();
        if (searchVal == '') return;
        if (onlyNumberCheck(searchVal) && searchVal.length == 8) {
            // Router.push(`/barcode/` + searchVal)
            if (searchVal !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].router.state.query.barcode) {
                localStorage.setItem("searchValue", searchVal);
                // window.location.replace(`/barcode/` + searchVal);
                window.location.href = `/barcode/` + searchVal;
            }
        } else if (searchVal.indexOf('@') > -1) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].push(`/customerdetails?email=` + searchVal);
        // if(banjoUser?.banjoUser?.userid == 28 || banjoUser?.banjoUser?.userid == 212 || banjoUser?.banjoUser?.userid == 123 || banjoUser?.banjoUser?.userid == 6) {
        // } else {
        // }
        } else if (onlyNumberCheck(searchVal) && (searchVal.length == 5 || searchVal.length <= 7)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].push(`/orderdetails/${searchVal}`);
        } else if (searchVal?.toUpperCase()?.startsWith('1ZK') || searchVal?.toUpperCase()?.startsWith('SXC')) {
            getOrderId(searchVal);
        } else if ((searchVal.length == 12 || searchVal.length == 22 || searchVal.length < 8 || searchVal.length == 34) && onlyNumberCheck(searchVal)) {
            getOrderId(searchVal);
        } else if (searchVal.length > 4 && searchVal.length <= 8 && !onlyNumberCheck(searchVal[1]) && onlyNumberCheck(searchVal[2])) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].push(`/sku/` + searchVal);
        } else if (searchVal.indexOf('(') > -1 && searchVal.indexOf(')') > -1 && searchVal.length >= 12 && searchVal.length <= 16) {
            searchVal = searchVal.replace('(', '%28');
            searchVal = searchVal.replace(')', '%29');
            searchVal = searchVal.replace(' ', '+');
            if (searchList?.length == 1) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].push(`/search?ref=` + searchList[0]?.value);
            }
        } else if (searchVal.length == 13 && searchVal[0] == 'E' && searchVal[1] == 'P' && searchVal[2] !== 'C') {
            getOrderId(searchVal);
        } else if (searchVal[0] == 'E' && searchVal[1] == 'P' && searchVal[2] == 'C') {
            getOrderId(searchVal);
        } else if (searchVal[0] == 'D' && searchVal.length == 15) {
            getOrderId(searchVal);
        } else if (searchVal[0] == 'E' && searchVal[1] == 'Z' && (searchVal.length == 20 || searchVal.length == 16)) {
            getOrderId(searchVal);
        } else if (searchVal.length == 12 || searchVal.length == 10 || searchVal.length == 15 || searchVal.length == 14) {
            getOrderId(searchVal);
        } else if (searchVal.length == 17) {
            getOrderId(searchVal);
        } else if (onlyNumberCheck(searchVal) && searchVal.length == 30) {
            getOrderId(searchVal);
        } else {}
    };
    const debouncedSearch = useDebounce({
        "Search.useDebounce[debouncedSearch]": async (searchString)=>{
            if (searchString.length > 3) {
                let searchResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["autoCompleteSearch"])(searchString);
                if (searchResult.length > 0) {
                    setSearchList(searchResult);
                    setCollapse(true);
                }
            } else if (searchList.length > 0 && searchString.length < 4) {
                setSearchList([]);
                setCollapse(false);
            }
        }
    }["Search.useDebounce[debouncedSearch]"], 300);
    let handleChange = async (e)=>{
        let searchString = e.target.value;
        let firstChar = searchString.charAt(0);
        if (firstChar == ' ') {
            searchString = searchString.replace(' ', '');
        }
        await setSearchVal(searchString);
        debouncedSearch(searchString);
    };
    let clickAnyWhere = ()=>{
        document.body.addEventListener('click', (event)=>{
            if (event.target.id == 'searchInput' || event.target.id == 'searchList') {
                return;
            } else {
                setSearchList([]);
                setCollapse(false);
            }
        }, true);
    };
    const getOrderId = async (searchVal)=>{
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$orderFunction$2e$js__$5b$client$5d$__$28$ecmascript$29$__["GetOrderNamebyTrackingNumber"])(searchVal);
        if (response?.success) {
            const ordername = response.orderId + 1000;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].push(`/orderdetails/` + ordername);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: props.style.search_box,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `input-group ${props.style.input_group}`,
            id: "input_header_field",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$autocomplete$2f$build$2f$lib$2f$Autocomplete$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                    getItemValue: (item)=>item.label,
                    items: searchList,
                    renderItem: (item, isHighlighted)=>{
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: isHighlighted ? `${props.style.active}` : '',
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/search?ref=" + item.value,
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/components/shared/search.js",
                                lineNumber: 177,
                                columnNumber: 106
                            }, void 0)
                        }, item.value, false, {
                            fileName: "[project]/components/shared/search.js",
                            lineNumber: 177,
                            columnNumber: 29
                        }, void 0);
                    },
                    value: searchVal,
                    onChange: (e)=>handleChange(e),
                    autoHighlight: true,
                    onSelect: (label, item)=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].push(`/search?ref=` + item.value);
                    },
                    inputProps: {
                        placeholder: 'Search anything',
                        onKeyDown: (e)=>{
                            handleEnter(e);
                        }
                    },
                    id: "search_any_input"
                }, void 0, false, {
                    fileName: "[project]/components/shared/search.js",
                    lineNumber: 172,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "btn",
                    onClick: ()=>{
                        serchByData();
                    },
                    type: "submit",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["faSearch"]
                    }, void 0, false, {
                        fileName: "[project]/components/shared/search.js",
                        lineNumber: 191,
                        columnNumber: 89
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/shared/search.js",
                    lineNumber: 191,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/shared/search.js",
            lineNumber: 170,
            columnNumber: 12
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/shared/search.js",
        lineNumber: 169,
        columnNumber: 9
    }, this);
}
_s(Search, "EUzB05A/bicZ/yuW5dpLWbqd7Rg=", true, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = Search;
const __TURBOPACK__default__export__ = Search;
var _c;
__turbopack_context__.k.register(_c, "Search");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/shared/fetchAlertPopup.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/reactstrap/dist/reactstrap.modern.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [client] (ecmascript)");
;
;
;
;
function FetchAlertPopup(props) {
    let fetchAlertMessage = props.fetchAlertMessage;
    let messageLine = "";
    let line2 = "";
    let line3 = "";
    let line4 = "";
    let missingFound = false;
    if (fetchAlertMessage != "") {
        var data = fetchAlertMessage.split("#");
        messageLine = data[0];
        line3 = data[2];
        line4 = data[3];
        if (data[1] != undefined) {
            line2 = data[1];
            if (line2.indexOf("missing") > -1) {
                missingFound = true;
            }
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Modal"], {
            className: "fetchAlertPopup",
            size: "lg",
            isOpen: props.isOpen,
            toggle: props.toggle,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ModalHeader"], {
                    className: "bg-info text-white",
                    toggle: props.toggle,
                    children: "New Fetch Alert!"
                }, void 0, false, {
                    fileName: "[project]/components/shared/fetchAlertPopup.js",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ModalBody"], {
                    className: "m-3",
                    children: [
                        messageLine != "" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                " ",
                                messageLine,
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/components/shared/fetchAlertPopup.js",
                                    lineNumber: 33,
                                    columnNumber: 50
                                }, this),
                                " "
                            ]
                        }, void 0, true),
                        line2 != "" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                " ",
                                line2,
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/components/shared/fetchAlertPopup.js",
                                    lineNumber: 34,
                                    columnNumber: 38
                                }, this),
                                " "
                            ]
                        }, void 0, true),
                        line3 != "" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                " ",
                                line3,
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/components/shared/fetchAlertPopup.js",
                                    lineNumber: 35,
                                    columnNumber: 38
                                }, this),
                                " "
                            ]
                        }, void 0, true),
                        line4 != "" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                " ",
                                line4,
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/components/shared/fetchAlertPopup.js",
                                    lineNumber: 36,
                                    columnNumber: 38
                                }, this),
                                " "
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ModalFooter"], {
                            className: "justify-content-end",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Button"], {
                                    color: "btn btn-secondary",
                                    onClick: props.toggle,
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/fetchAlertPopup.js",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this),
                                missingFound && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/conveyor/missingItems",
                                    as: "/conveyor/missingItems",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Button"], {
                                        color: "btn btn-primary",
                                        children: "VIEW MISSING ITEMS LIST"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/fetchAlertPopup.js",
                                        lineNumber: 41,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/fetchAlertPopup.js",
                                    lineNumber: 40,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/fetchAlertPopup.js",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/shared/fetchAlertPopup.js",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/shared/fetchAlertPopup.js",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_c = FetchAlertPopup;
const __TURBOPACK__default__export__ = FetchAlertPopup;
var _c;
__turbopack_context__.k.register(_c, "FetchAlertPopup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/shared/navBarFetchTooltip.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/moment/moment.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const NavBarFetchTooltip = (props)=>{
    _s();
    let [statsData, setStatsData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let [fetchStartTime, setFetchStartTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    let [statsDataMissing, setStatsDataMissing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavBarFetchTooltip.useEffect": ()=>{
            // console.log("props.statsData", props);
            if (props.statsData != undefined && props.statsData.success == true) {
                let statsData = props.statsData.statsData;
                if (statsData.totalItem > 0) {
                    if (isNumber(statsData.createdAt)) {
                        let startTime = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(statsData.createdAt).utc().format("M/D/YYYY h:mmA");
                        startTime = startTime.split(" ");
                        startTime = startTime[1];
                        let temp = startTime.split(":");
                        startTime = startTime.replace(/^0+/, '');
                        setFetchStartTime(startTime);
                    } else {
                        let temp = statsData.createdAt;
                        let dateStart = "";
                        temp = temp.split("T");
                        temp = temp[1].split(":");
                        if (temp[0] > 12) {
                            // console.log("temp[0]...", temp[0])
                            dateStart = temp[0] - 12 + ":" + temp[1] + "PM"; //.replace(/^0+/, '')
                        } else {
                            dateStart = temp[0].replace(/^0+/, '') + ":" + temp[1] + "AM";
                        }
                        setFetchStartTime(dateStart);
                    }
                    setStatsData(statsData);
                } else {
                    setStatsData(null);
                }
            } else {
                setStatsData(null);
            }
        }
    }["NavBarFetchTooltip.useEffect"], [
        props.statsData
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavBarFetchTooltip.useEffect": ()=>{
            if (props.missingCounts != undefined && props.missingCounts.success == true) {
                let statsDataMissing = props.missingCounts.statsData;
                if (statsDataMissing.clothing > 0 || statsDataMissing.accessories > 0) {
                    let missing = {
                        "clothing": statsDataMissing.clothing,
                        "accessories": statsDataMissing.accessories
                    };
                    setStatsDataMissing(missing);
                } else {
                    setStatsDataMissing(null);
                }
            } else {
                setStatsDataMissing(null);
            }
        }
    }["NavBarFetchTooltip.useEffect"], [
        props.missingCounts
    ]);
    function isNumber(str) {
        // if (str.trim() === '') {
        //   return false;
        // }
        return !isNaN(str);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            statsData != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fetchTooltip",
                    children: [
                        "Fetch ",
                        statsData.fetchedItems,
                        "/",
                        statsData.totalItem,
                        " (",
                        statsData.totalOrders,
                        ")",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fetchTooltipBox",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn btn-primary btn-sm",
                                    children: statsData.selectionType
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/navBarFetchTooltip.js",
                                    lineNumber: 84,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        fetchStartTime,
                                        "  - ",
                                        statsData.totalOrders,
                                        " orders - ",
                                        statsData.userName
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/navBarFetchTooltip.js",
                                    lineNumber: 85,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/components/shared/navBarFetchTooltip.js",
                                    lineNumber: 86,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        statsData.fetchedItems,
                                        "/",
                                        statsData.totalItem,
                                        " Items"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/navBarFetchTooltip.js",
                                    lineNumber: 87,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        statsData.fetchAccessories,
                                        " Accessories - ",
                                        statsData.fetchClothing,
                                        " Clothing"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/navBarFetchTooltip.js",
                                    lineNumber: 88,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                statsDataMissing != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        statsData.totalMissing > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                " ",
                                                statsDataMissing.clothing,
                                                "/",
                                                statsDataMissing.accessories,
                                                "  Missing Items Generated "
                                            ]
                                        }, void 0, true),
                                        " "
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/navBarFetchTooltip.js",
                                    lineNumber: 90,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/navBarFetchTooltip.js",
                            lineNumber: 83,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/shared/navBarFetchTooltip.js",
                    lineNumber: 82,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false),
            statsDataMissing != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "missingCountNav",
                    children: [
                        " Missing ",
                        statsDataMissing.clothing,
                        "/",
                        statsDataMissing.accessories,
                        " "
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/shared/navBarFetchTooltip.js",
                    lineNumber: 99,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false)
        ]
    }, void 0, true);
};
_s(NavBarFetchTooltip, "iDaGCKvBAzML3daxHGi0Zf5+MeA=");
_c = NavBarFetchTooltip;
const __TURBOPACK__default__export__ = NavBarFetchTooltip;
var _c;
__turbopack_context__.k.register(_c, "NavBarFetchTooltip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/shared/checkinPopup.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/reactstrap/dist/reactstrap.modern.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$orderFunction$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/functions/orderFunction.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function ManualCheckinPopup(props) {
    _s();
    let [selectedCheckin, setSelectedCheckin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('all');
    let [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let [msg, setMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        type: "",
        msg: ""
    });
    let [numberOfCustomer, setNumberOfCustomer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let [isAlreadyCheckinRun, setIsAlreadyCheckinRun] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    async function submitCheckin() {
        await setMsg({
            type: "",
            msg: ""
        });
        if (selectedCheckin == 'all') {
            let confirmm = confirm('Confirm Check-in for all customers?');
            if (confirmm == true) {
                setIsLoading(true);
                let res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$orderFunction$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getManualCheckin"])();
                setIsLoading(false);
                // console.log('res', res)
                if (res.success == true) {
                    let obj = {
                        ...msg
                    };
                    obj.type = 1;
                    obj.msg = res.message;
                    await setMsg(obj);
                } else {
                    let obj = {
                        ...msg
                    };
                    obj.type = 2;
                    obj.msg = res.message;
                    await setMsg(obj);
                }
            }
        } else {
            if (numberOfCustomer < 1) {
                alert('Check-in amount should be greater than 0');
                return;
            }
            let confirmm = confirm('Confirm Check-in for selected customers?');
            if (confirmm == true) {
                setIsLoading(true);
                let res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$orderFunction$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getManualCheckinWithNumber"])(numberOfCustomer);
                setIsLoading(false);
                //  console.log('res', res)
                if (res.success == true) {
                    let obj = {
                        ...msg
                    };
                    obj.type = 1;
                    obj.msg = res.message;
                    setMsg(obj);
                } else {
                    let obj = {
                        ...msg
                    };
                    obj.type = 2;
                    obj.msg = res.message;
                    setMsg(obj);
                }
            }
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ManualCheckinPopup.useEffect": ()=>{
            checkCheckin();
        }
    }["ManualCheckinPopup.useEffect"], [
        props.isOpen
    ]);
    async function checkCheckin() {
        await setIsAlreadyCheckinRun(false);
        await setSelectedCheckin('all');
        await setMsg({
            type: "",
            msg: ""
        });
        await setIsLoading(false);
        await setNumberOfCustomer(0);
        setIsLoading(true);
        let res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$orderFunction$2e$js__$5b$client$5d$__$28$ecmascript$29$__["checkCheckinProgress"])();
        setIsLoading(false);
        if (res.success == true) {
        // let obj = {...msg}
        // obj.type = 1;
        // obj.msg = res.message;
        // setMsg(obj)
        } else {
            let obj = {
                ...msg
            };
            obj.type = 2;
            // obj.msg = res.message
            obj.msg = 'Check in is currently processing orders.';
            setMsg(obj);
            setIsAlreadyCheckinRun(true);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Modal"], {
        className: "fetchAlertPopup",
        size: "md",
        isOpen: props.isOpen,
        toggle: props.toggle,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ModalHeader"], {
                className: "bg-info text-white text-center",
                toggle: props.toggle,
                children: " Check In Orders "
            }, void 0, false, {
                fileName: "[project]/components/shared/checkinPopup.js",
                lineNumber: 98,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ModalBody"], {
                className: "m-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: [
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "radio",
                                    name: "checkin",
                                    checked: selectedCheckin == "all",
                                    onChange: ()=>setSelectedCheckin('all')
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/checkinPopup.js",
                                    lineNumber: 101,
                                    columnNumber: 23
                                }, this),
                                " Check in All Customers "
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/checkinPopup.js",
                            lineNumber: 101,
                            columnNumber: 15
                        }, this),
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/components/shared/checkinPopup.js",
                            lineNumber: 101,
                            columnNumber: 169
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: [
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "radio",
                                    name: "checkin",
                                    checked: selectedCheckin == "custom",
                                    onChange: ()=>setSelectedCheckin('custom')
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/checkinPopup.js",
                                    lineNumber: 102,
                                    columnNumber: 23
                                }, this),
                                " Check in ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    min: "0",
                                    pattern: "\\d*",
                                    onKeyDown: (e)=>{
                                        [
                                            "e",
                                            "E",
                                            "+",
                                            "-",
                                            "."
                                        ].includes(e.key) && e.preventDefault();
                                    },
                                    value: numberOfCustomer,
                                    onChange: (e)=>{
                                        setNumberOfCustomer(e.target.value);
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/checkinPopup.js",
                                    lineNumber: 102,
                                    columnNumber: 152
                                }, this),
                                " Customers "
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/checkinPopup.js",
                            lineNumber: 102,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/shared/checkinPopup.js",
                    lineNumber: 100,
                    columnNumber: 12
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/shared/checkinPopup.js",
                lineNumber: 99,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ModalFooter"], {
                className: "justify-content-end",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Button"], {
                        color: "btn btn-secondary",
                        onClick: props.toggle,
                        children: " Cancel "
                    }, void 0, false, {
                        fileName: "[project]/components/shared/checkinPopup.js",
                        lineNumber: 106,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Button"], {
                        disabled: isAlreadyCheckinRun ? true : false,
                        color: "btn btn-info text-white",
                        onClick: ()=>submitCheckin(),
                        children: " Submit "
                    }, void 0, false, {
                        fileName: "[project]/components/shared/checkinPopup.js",
                        lineNumber: 107,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/shared/checkinPopup.js",
                lineNumber: 105,
                columnNumber: 9
            }, this),
            isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-4",
                children: [
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Spinner"], {
                        className: "spinnerLoader"
                    }, void 0, false, {
                        fileName: "[project]/components/shared/checkinPopup.js",
                        lineNumber: 109,
                        columnNumber: 58
                    }, this),
                    " "
                ]
            }, void 0, true, {
                fileName: "[project]/components/shared/checkinPopup.js",
                lineNumber: 109,
                columnNumber: 22
            }, this) : "",
            msg.msg != "" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `text-center text-bold mb-4 p-2 ${msg.type == 1 ? 'text-success' : 'text-danger'}`,
                children: [
                    " ",
                    msg.msg,
                    " "
                ]
            }, void 0, true, {
                fileName: "[project]/components/shared/checkinPopup.js",
                lineNumber: 110,
                columnNumber: 26
            }, this) : ""
        ]
    }, void 0, true, {
        fileName: "[project]/components/shared/checkinPopup.js",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_s(ManualCheckinPopup, "OANtPEFkK0WJbANY7mDfx7FW+eg=");
_c = ManualCheckinPopup;
const __TURBOPACK__default__export__ = ManualCheckinPopup;
var _c;
__turbopack_context__.k.register(_c, "ManualCheckinPopup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/redux/slices/socketClient.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SOCKET_CLIENT_FAILED",
    ()=>SOCKET_CLIENT_FAILED,
    "SOCKET_CLIENT_STARTED",
    ()=>SOCKET_CLIENT_STARTED,
    "SOCKET_CLIENT_SUCCESS",
    ()=>SOCKET_CLIENT_SUCCESS,
    "default",
    ()=>__TURBOPACK__default__export__,
    "socketClient",
    ()=>socketClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$redux$2d$wrapper$2f$es6$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-redux-wrapper/es6/index.js [client] (ecmascript)");
;
;
const initialState = {
    socketClient: null,
    loading: true,
    error: null
};
const socketClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'socketClient',
    initialState,
    reducers: {
        SOCKET_CLIENT_STARTED: (state)=>{
            return {
                ...state.socketClient,
                loading: true,
                error: null
            };
        },
        SOCKET_CLIENT_SUCCESS: (state, action)=>{
            return {
                socketClient: action.payload,
                error: null,
                loading: false
            };
        },
        SOCKET_CLIENT_FAILED: (state, action)=>{
            return {
                ...state.socketClient,
                error: action.payload,
                loading: false
            };
        }
    },
    extraReducers: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$redux$2d$wrapper$2f$es6$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["HYDRATE"]]: (state, action)=>{
            return {
                ...state.socketClient,
                ...action.payload.socketClient
            };
        }
    }
});
const { SOCKET_CLIENT_SUCCESS, SOCKET_CLIENT_STARTED, SOCKET_CLIENT_FAILED } = socketClient.actions;
const __TURBOPACK__default__export__ = socketClient.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/shared/webSocketComponent.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$websocket$2f$lib$2f$browser$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/websocket/lib/browser.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/globalconfig.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$slices$2f$socketClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/redux/slices/socketClient.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-redux/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/es/exports.js [client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function WebSocketComponent(props) {
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    let [listState, listStateSet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    let socketClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "WebSocketComponent.useSelector[socketClient]": (state)=>state.socketClient
    }["WebSocketComponent.useSelector[socketClient]"]);
    let client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let lists = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    let onClosehandler = (e)=>{
        // console.log('Socket is closed. Reconnect will be attempted in 1 second.');
        setTimeout(function() {
            let data = [];
            lists.current.map((list, index)=>{
                let obj = {
                    ...list
                };
                obj.status = false;
                data.push(obj);
            });
            client.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$websocket$2f$lib$2f$browser$2e$js__$5b$client$5d$__$28$ecmascript$29$__["w3cwebsocket"]('wss://globalsync.fashionpass.com');
            client.current.addEventListener('close', (event)=>{
                onClosehandler();
            });
            client.current.addEventListener('message', messageHandlerRef.current);
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$slices$2f$socketClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["SOCKET_CLIENT_SUCCESS"])({
                client: client.current,
                lists: data
            }));
        // connectSocket(true)
        }, 1000);
    };
    let messageHandler = (event)=>{
        subListsmessage(event);
    };
    let messageHandlerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(messageHandler);
    let onClosehandlerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(onClosehandler);
    let subLists = ()=>{
        if (client.current == null || client.current.readyState != 1) {
            // console.log("client still opening");
            setTimeout(()=>{
                subLists();
            }, 3000);
            return;
        }
        let topush = false;
        if (client.current) {
            let envoiroment = 'dev';
            if (__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].envoiroment == 'stage') {
                envoiroment = 'stage';
            } else if (__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].envoiroment == 'development') {
                envoiroment = 'dev';
            } else {
                envoiroment = 'live';
            }
            let data = [];
            lists.current.map((list, index)=>{
                let obj = {
                    ...list
                };
                if (list.status == false) {
                    // console.log(JSON.stringify({ action: "addtolist", list: list.listName, message: JSON.stringify(list.listMessage), connection2: "-1", env: envoiroment }));
                    client.current.send(JSON.stringify({
                        action: "addtolist",
                        list: list.listName,
                        message: JSON.stringify(list.listMessage),
                        connection2: "-1",
                        env: envoiroment
                    }));
                    obj.status = true;
                    topush = true;
                }
                data.push(obj);
            });
            if (topush) {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$slices$2f$socketClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["SOCKET_CLIENT_SUCCESS"])({
                    client: socketClient.socketClient.client,
                    lists: data
                }));
                lists.current = [
                    ...data
                ];
                listStateSet([
                    ...data
                ]);
            }
        }
    };
    let subListsmessage = (event)=>{
        let _event = event;
        try {
            if ("TURBOPACK compile-time truthy", 1) {
                let message = _event.data;
                if (message != 'pong') {
                    // console.log(lists)
                    // console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
                    // console.log(listState)
                    message = JSON.parse(message);
                    if (message.length > 0) {
                        message = JSON.parse(message);
                        // console.log('message recived ------',message)
                        lists.current.map((item)=>{
                            if (message.socketList && message.socketList == item.listName) {
                                message = JSON.stringify(message);
                                item.callBack(message);
                            }
                        });
                    }
                }
            }
        } catch (err) {
            console.log("error " + err);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WebSocketComponent.useEffect": ()=>{
            if (client.current == null) {
                client.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$websocket$2f$lib$2f$browser$2e$js__$5b$client$5d$__$28$ecmascript$29$__["w3cwebsocket"]('wss://globalsync.fashionpass.com');
                client.current.addEventListener('message', messageHandlerRef.current);
                client.current.addEventListener('close', onClosehandlerRef.current);
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$slices$2f$socketClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["SOCKET_CLIENT_SUCCESS"])({
                    client: client.current,
                    lists: []
                }));
                // if(window){
                //     window.onfocus = function () { 
                //     console.log('tab is focused ------------------->>>',client.current)
                //     }; 
                //     window.onblur = function () { 
                //         console.log('tab is blured ------------------->>>',client.current)
                //     }; 
                // }
                return ({
                    "WebSocketComponent.useEffect": ()=>{
                        client.current.removeEventListener('message', messageHandlerRef.current);
                        client.current.removeEventListener('close', onClosehandler);
                        client.current.close();
                    }
                })["WebSocketComponent.useEffect"];
            }
        }
    }["WebSocketComponent.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WebSocketComponent.useEffect": ()=>{
            if (socketClient.socketClient != null) {
                lists.current = [
                    ...socketClient.socketClient.lists
                ];
                listStateSet([
                    ...socketClient.socketClient.lists
                ]);
                subLists();
            }
        }
    }["WebSocketComponent.useEffect"], [
        socketClient.socketClient && socketClient.socketClient.lists
    ]);
}
_s(WebSocketComponent, "9mggNCo6Mpf0T4BHDhV/sbk8SM4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = WebSocketComponent;
const __TURBOPACK__default__export__ = WebSocketComponent;
var _c;
__turbopack_context__.k.register(_c, "WebSocketComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/shared/conveyorPopups/alertPopup.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/reactstrap/dist/reactstrap.modern.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function AlertPopup(props) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AlertPopup.useEffect": ()=>{
            if (props.clearSession !== undefined) {
                props.clearSession();
            }
            if (props.reload == undefined || props.reload) {
                setTimeout({
                    "AlertPopup.useEffect": ()=>{
                        window.location.reload();
                    }
                }["AlertPopup.useEffect"], 3000);
            }
        }
    }["AlertPopup.useEffect"], []);
    const handleReload = ()=>{
        location.href = '/conveyor/controller';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Modal"], {
        isOpen: props.isOpen,
        className: "perfectOrderPopup",
        size: "lg",
        centered: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ModalBody"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: props.reload == undefined ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-danger fs-4",
                    children: props.string
                }, void 0, false, {
                    fileName: "[project]/components/shared/conveyorPopups/alertPopup.js",
                    lineNumber: 27,
                    columnNumber: 50
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    style: {
                        cursor: 'pointer'
                    },
                    className: "text-center text-danger",
                    onClick: ()=>{
                        handleReload();
                    },
                    children: props.string
                }, void 0, false, {
                    fileName: "[project]/components/shared/conveyorPopups/alertPopup.js",
                    lineNumber: 29,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/shared/conveyorPopups/alertPopup.js",
                lineNumber: 26,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/shared/conveyorPopups/alertPopup.js",
            lineNumber: 25,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/shared/conveyorPopups/alertPopup.js",
        lineNumber: 24,
        columnNumber: 9
    }, this);
}
_s(AlertPopup, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = AlertPopup;
const __TURBOPACK__default__export__ = AlertPopup;
var _c;
__turbopack_context__.k.register(_c, "AlertPopup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/containers/resetPasswordPopup/resetPasswordPopup.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/functions/globalFunctions.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/reactstrap/dist/reactstrap.modern.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const ResetPasswordPopup = (props)=>{
    _s();
    const { isOpen, toggle, userid } = props;
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [confirmPassword, setConfirmPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [msg, setMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        text: '',
        type: ''
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleMsg = (obj)=>{
        setMsg(obj);
        setTimeout(()=>{
            setMsg({
                text: '',
                type: ''
            });
        }, 2000);
    };
    const handleUpdate = async ()=>{
        if (password == '' || confirmPassword == '') {
            handleMsg({
                text: 'Please fill empty fields.',
                type: 'danger'
            });
            return;
        }
        if (password?.length < 6) {
            handleMsg({
                text: 'Password must contain at least 6 characters.',
                type: 'danger'
            });
            return;
        }
        if (password == 'fashionpass') {
            handleMsg({
                text: 'Password must be different from current password.',
                type: 'danger'
            });
            return;
        }
        if (password !== confirmPassword) {
            handleMsg({
                text: 'Confirm password not matched.',
                type: 'danger'
            });
            return;
        }
        setLoading(true);
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["updateBanjoUserPass"])(userid, password);
        if (response.success === true) {
            setLoading(false);
            // if (response == 1) {
            handleMsg({
                text: 'Password updated successfully.',
                type: 'success'
            });
            setTimeout(()=>{
                toggle();
            }, 2000);
        // }
        } else {
            setLoading(false);
            handleMsg({
                text: 'Update failded.',
                type: 'danger'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Modal"], {
        isOpen: isOpen,
        size: 'lg',
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ModalBody"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "d-flex flex-column p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-center w-100",
                        children: "Please update your password."
                    }, void 0, false, {
                        fileName: "[project]/src/containers/resetPasswordPopup/resetPasswordPopup.tsx",
                        lineNumber: 64,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-secondary text-center",
                        children: "Password must be at least 6 characters long."
                    }, void 0, false, {
                        fileName: "[project]/src/containers/resetPasswordPopup/resetPasswordPopup.tsx",
                        lineNumber: 65,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "fw-bold",
                                        children: "New Password"
                                    }, void 0, false, {
                                        fileName: "[project]/src/containers/resetPasswordPopup/resetPasswordPopup.tsx",
                                        lineNumber: 68,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "password",
                                        className: "form-control",
                                        value: password,
                                        onChange: (event)=>{
                                            setPassword(event.target.value);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/containers/resetPasswordPopup/resetPasswordPopup.tsx",
                                        lineNumber: 69,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/containers/resetPasswordPopup/resetPasswordPopup.tsx",
                                lineNumber: 67,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "fw-bold",
                                        children: "Confirm New Password"
                                    }, void 0, false, {
                                        fileName: "[project]/src/containers/resetPasswordPopup/resetPasswordPopup.tsx",
                                        lineNumber: 72,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "password",
                                        className: "form-control",
                                        value: confirmPassword,
                                        onChange: (event)=>{
                                            setConfirmPassword(event.target.value);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/containers/resetPasswordPopup/resetPasswordPopup.tsx",
                                        lineNumber: 73,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/containers/resetPasswordPopup/resetPasswordPopup.tsx",
                                lineNumber: 71,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/containers/resetPasswordPopup/resetPasswordPopup.tsx",
                        lineNumber: 66,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-primary btn-lg mb-3",
                                onClick: handleUpdate,
                                disabled: loading,
                                children: 'Update'
                            }, void 0, false, {
                                fileName: "[project]/src/containers/resetPasswordPopup/resetPasswordPopup.tsx",
                                lineNumber: 77,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$dist$2f$reactstrap$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Alert"], {
                                color: msg.type,
                                children: msg.text
                            }, void 0, false, {
                                fileName: "[project]/src/containers/resetPasswordPopup/resetPasswordPopup.tsx",
                                lineNumber: 78,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/containers/resetPasswordPopup/resetPasswordPopup.tsx",
                        lineNumber: 76,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/containers/resetPasswordPopup/resetPasswordPopup.tsx",
                lineNumber: 63,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/containers/resetPasswordPopup/resetPasswordPopup.tsx",
            lineNumber: 62,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/containers/resetPasswordPopup/resetPasswordPopup.tsx",
        lineNumber: 61,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ResetPasswordPopup, "qDYc2+zHddNzrGMo23J9b47zMKk=");
_c = ResetPasswordPopup;
const __TURBOPACK__default__export__ = ResetPasswordPopup;
var _c;
__turbopack_context__.k.register(_c, "ResetPasswordPopup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/shared/header.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-redux/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/es/exports.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_header$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/_header.module.scss [client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/index.es.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/functions/globalFunctions.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$conveyorFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/functions/conveyorFunctions.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$barcodeFuncitons$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/functions/barcodeFuncitons.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-cookie/dist/js.cookie.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/globalconfig.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$snapshotPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/snapshotPopup.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$search$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/search.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$websocket$2f$lib$2f$browser$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/websocket/lib/browser.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$fetchAlertPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/fetchAlertPopup.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$navBarFetchTooltip$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/navBarFetchTooltip.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$checkinPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/checkinPopup.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$slices$2f$socketClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/redux/slices/socketClient.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$webSocketComponent$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/webSocketComponent.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$conveyorPopups$2f$alertPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/conveyorPopups/alertPopup.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/moment/moment.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$resetPasswordPopup$2f$resetPasswordPopup$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/containers/resetPasswordPopup/resetPasswordPopup.tsx [client] (ecmascript)");
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
function Header() {
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    let socketClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "Header.useSelector[socketClient]": (state)=>state.socketClient
    }["Header.useSelector[socketClient]"]);
    let User = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "Header.useSelector[User]": (state)=>state.banjoUser
    }["Header.useSelector[User]"]);
    let systemSetting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "Header.useSelector[systemSetting]": (state)=>state.systemSettings
    }["Header.useSelector[systemSetting]"]);
    let client = null;
    // setTimeout(() => {
    //     systemSetting = useSelector((state) => state.systemSettings);    
    // }, 1500);
    let [openSnapModal, setOpenSnapModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let [admin, setAdmin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let [userLevel, setUserLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    let [userManagement, setUserManagement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let [fetchAlertPopupOpen, setFetchAlertPopupOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let [fetchAlertMessage, setFetchAlertMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    let [orderCounts, setOrderCounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    let [statsData, setStatsData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    let [pathName, setPathName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    let [missingCounts, setMissingCounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    let [earlyCheckin, setEarlyCheckin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let [enableCheckIn, setEnbleCheckIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let [recievedMessage, setRecievedMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    let [endSessionPopup, setEndSessionPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let [receiveAlert, setReceeveAlert] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let [shippersData, setShippersData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    let [addedItemStats, setAddedItemStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let [slotStat, setSlotStat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let [resetPasswordPopup, setResetPasswordPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let [cleaningAccCount, setCleaningAccCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let socketType = 'both';
    let banjoUser = User.banjoUser;
    const updateMissingCounts = async ()=>{
        let currentMissingLiveStats = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getMissingSessionStats"])();
        if (currentMissingLiveStats.success) {
            await setMissingCounts(currentMissingLiveStats);
        }
    };
    const updateStatsData = async ()=>{
        let currentSessionStats = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getCurrentSessionStats"])();
        await setStatsData(currentSessionStats);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const fetchData = {
                "Header.useEffect.fetchData": async ()=>{
                    let progressVal = 0;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getNavbarOrderNumbers"])().then({
                        "Header.useEffect.fetchData": (response)=>{
                            if (response.success) {
                                setOrderCounts(response.result);
                            }
                        }
                    }["Header.useEffect.fetchData"]);
                    if (banjoUser?.shipping_start > 0) {
                        let getShippers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$barcodeFuncitons$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getShippersData"])(banjoUser?.userid);
                        if (getShippers?.success) setShippersData(getShippers.shippersGoal);
                    }
                    if (banjoUser?.active_user == 1 && banjoUser?.user_roles?.split(',')[5] == '1') {
                        let dateStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])().utc().format('YYYY-MM-DD');
                        let dateEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])().utc().format('YYYY-MM-DD');
                        let cleaningData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$barcodeFuncitons$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getCleaningAccessories"])(dateStart, dateEnd, banjoUser?.userid);
                        if (cleaningData?.success) {
                            let userData = Object.values(cleaningData?.data?.tagCountsByUser)[0];
                            if (userData) {
                                let sum = Object.values(userData)?.reduce({
                                    "Header.useEffect.fetchData": (total, num)=>total + num
                                }["Header.useEffect.fetchData"], 0);
                                setCleaningAccCount(sum);
                            }
                        }
                    }
                    let progress = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$conveyorFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getProcessConveyorSession"])();
                    if (progress.success) {
                        progressVal = progress.value;
                    }
                    if (banjoUser?.new_inventory == 1) {
                        let addItemStats = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$barcodeFuncitons$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getCurrentAddItemStats"])();
                        if (addItemStats?.success) {
                            setAddedItemStats(addItemStats?.total_count);
                        }
                    }
                    // if ((banjoUser.level == 'HIGH' || banjoUser.level == 'MEDIUM') && banjoUser.userid != 6 && (banjoUser.userid == 1 || banjoUser.userid == 2 || banjoUser.userid == 28 || banjoUser.userid == 221)) {
                    //     setAdmin(true)
                    // }
                    if (banjoUser && banjoUser.enable_checkin != undefined && (banjoUser.enable_checkin == 1 || banjoUser.enable_checkin == true)) {
                        setEnbleCheckIn(true);
                    }
                    if (banjoUser && banjoUser.fetch_alert && banjoUser.fetch_alert == 1) {
                        setReceeveAlert(true);
                    }
                    if (banjoUser != undefined && banjoUser.fetch_alert != undefined && banjoUser.fetch_alert != 0 && banjoUser.fetch_stats_nav != undefined && banjoUser.fetch_stats_nav != 0) {
                        socketType = 'both';
                        // connectSocket(false, "both");
                        if (progressVal == 100) updateStatsData();
                        updateMissingCounts();
                    } else if (banjoUser != undefined && banjoUser.fetch_alert != undefined && banjoUser.fetch_alert != 0) {
                        socketType = 'conveyorCheckBussy';
                    // connectSocket(false, "conveyorCheckBussy");
                    } else if (banjoUser != undefined && banjoUser.fetch_stats_nav != undefined && banjoUser.fetch_stats_nav != 0) {
                        socketType = 'currentSessionLiveStats';
                        // connectSocket(false, "currentSessionLiveStats");
                        if (progressVal == 100) updateStatsData();
                        updateMissingCounts();
                    }
                    setUserLevel(banjoUser?.level);
                    setUserManagement(banjoUser?.user_management);
                    setPathName(document.location.pathname);
                    let slotStat = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$barcodeFuncitons$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getSoltAssignedStats"])();
                    if (slotStat?.success) {
                        setSlotStat(slotStat?.total_count);
                    }
                }
            }["Header.useEffect.fetchData"];
            fetchData();
        }
    }["Header.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            if (socketClient.socketClient) {
                let datasub = {};
                let pos = '';
                if (socketType == "both") {
                    pos = socketClient.socketClient.lists.map({
                        "Header.useEffect": (e)=>e.listName
                    }["Header.useEffect"]).indexOf('currentSessionLiveStats');
                } else {
                    pos = socketClient.socketClient.lists.map({
                        "Header.useEffect": (e)=>e.listName
                    }["Header.useEffect"]).indexOf(socketType);
                }
                if (socketClient.socketClient.lists.length == 0 || pos == -1) {
                    // console.log(socketType)
                    let listData = [];
                    if (socketType == "both") {
                        // if (banjoUser != undefined && banjoUser.fetch_alert != undefined && banjoUser.fetch_alert != 0) {
                        //     datasub = { listName: 'conveyorCheckBussy', status: false, callBack: setRecievedMessage, listMessage: '' }
                        //     listData.push(datasub)
                        // }
                        datasub = {
                            listName: 'currentSessionLiveStats',
                            status: false,
                            callBack: setRecievedMessage,
                            listMessage: ''
                        };
                        listData.push(datasub);
                        datasub = {
                            listName: 'missingCountLiveStats',
                            status: false,
                            callBack: setRecievedMessage,
                            listMessage: ''
                        };
                        listData.push(datasub);
                    } else {
                        datasub = {
                            listName: socketType,
                            status: false,
                            callBack: setRecievedMessage,
                            listMessage: ''
                        };
                        listData.push(datasub);
                    }
                    datasub = {
                        listName: 'conveyorEndSession',
                        status: false,
                        callBack: setRecievedMessage,
                        listMessage: ''
                    };
                    listData.push(datasub);
                    datasub = {
                        listName: 'UserGoalsList',
                        status: false,
                        callBack: setRecievedMessage,
                        listMessage: ''
                    };
                    listData.push(datasub);
                    if (banjoUser?.new_inventory == 1) {
                        datasub = {
                            listName: 'addNewInvetory',
                            status: false,
                            callBack: setRecievedMessage,
                            listMessage: ''
                        };
                        listData.push(datasub);
                    }
                    datasub = {
                        listName: 'addUsersStats',
                        status: false,
                        callBack: setRecievedMessage,
                        listMessage: ''
                    };
                    listData.push(datasub);
                    // socket----------
                    // datasub = { listName: 'claimOrderList', status: false, callBack: setRecievedMessage, listMessage: '' }
                    // listData.push(datasub)
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$slices$2f$socketClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["SOCKET_CLIENT_SUCCESS"])({
                        client: socketClient.socketClient.client,
                        lists: listData
                    }));
                }
            }
        }
    }["Header.useEffect"], [
        socketClient.socketClient
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const fetchData = {
                "Header.useEffect.fetchData": async ()=>{
                    if (Object.keys(recievedMessage).length > 0) {
                        recievedMessage = JSON.parse(recievedMessage);
                        if (recievedMessage.action != undefined && recievedMessage.data != undefined) {
                            if (recievedMessage.action == 'UPDATE' && recievedMessage.socketList == 'conveyorEndSession' && receiveAlert) {
                                let session_cookie = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].get('end_session_time');
                                let sessionEndTime = recievedMessage.data ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(recievedMessage.data.sessionEndTime).format('M/D/YY h:mma') : null;
                                if (session_cookie && sessionEndTime !== session_cookie) {
                                    setEndSessionPopup(true);
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].set('end_session_time', sessionEndTime, {
                                        expires: 7,
                                        path: '/',
                                        domain: location.hostname
                                    });
                                } else if (session_cookie == null || session_cookie == undefined) {
                                    setEndSessionPopup(true);
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].set('end_session_time', sessionEndTime, {
                                        expires: 7,
                                        path: '/',
                                        domain: location.hostname
                                    });
                                }
                            }
                            if (recievedMessage.action == "currentSessionLiveStats") {
                                if (recievedMessage.data != "") {
                                    let statsDataTemp = {
                                        "success": true,
                                        "statsData": recievedMessage.data
                                    };
                                    let socketCallTime = recievedMessage.data.socketCallTime;
                                    let currentSessionLiveStatsSocketCallTime = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].get('currentSessionLiveStatsSocketCallTime');
                                    if (currentSessionLiveStatsSocketCallTime != undefined) {
                                        let newDate = new Date(socketCallTime);
                                        let oldDate = new Date(currentSessionLiveStatsSocketCallTime);
                                        if (oldDate <= newDate) {
                                            // console.log("new data recev", statsDataTemp)
                                            await setStatsData(statsDataTemp);
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].set('currentSessionLiveStatsSocketCallTime', socketCallTime);
                                        }
                                    } else {
                                        await setStatsData(statsDataTemp);
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].set('currentSessionLiveStatsSocketCallTime', socketCallTime);
                                    }
                                }
                            } else {
                                let action = recievedMessage.action;
                                let newSessionId = recievedMessage.data;
                                let conveyorCurrentSessionId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].get('conveyorCurrentSessionId');
                                if ((conveyorCurrentSessionId != "undefined" || conveyorCurrentSessionId != undefined) && newSessionId > conveyorCurrentSessionId && action == "TRUE" || (conveyorCurrentSessionId == "undefined" || conveyorCurrentSessionId == undefined) && action == "TRUE") {
                                    if (fetchAlertPopupOpen === true) setFetchAlertPopupOpen(false);
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].set('conveyorCurrentSessionId', newSessionId);
                                    setFetchAlert();
                                // console.log("NEW session found... " + newSessionId)
                                } else {
                                // console.log("same session found...")
                                }
                            }
                            if (recievedMessage.action == "UserGoals" && banjoUser?.shipping_start > 0 && recievedMessage.userId == banjoUser?.userid) {
                                let updateGoalsValue = [
                                    ...shippersData
                                ];
                                updateGoalsValue[0].actualTotal = recievedMessage.data.actualTotal;
                                updateGoalsValue[0].hourlyActualAmount = recievedMessage.data.hourlyActualAmount;
                                updateGoalsValue[0].hourlyGoal = recievedMessage.data.hourlyGoal;
                                updateGoalsValue[0].totalGoal = recievedMessage.data.totalGoal;
                                setShippersData(updateGoalsValue);
                            }
                            if (recievedMessage?.socketList == "addNewInvetory" && recievedMessage.action == banjoUser?.userid) {
                                setAddedItemStats(recievedMessage.data);
                            }
                            if (recievedMessage?.socketList == 'addUsersStats' && recievedMessage?.action == banjoUser?.userid) {
                                setSlotStat(recievedMessage?.data);
                            }
                        // if (recievedMessage.socketList == 'claimOrderList') {
                        //     setMyOrdersData(recievedMessage.data); 
                        // }
                        }
                    }
                }
            }["Header.useEffect.fetchData"];
            fetchData();
        }
    }["Header.useEffect"], [
        recievedMessage
    ]);
    const setFetchAlert = async ()=>{
        let sessionInfo = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getConveyorSessionInfo"])();
        let conveyor_session = sessionInfo?.pendingOrders?.conveyor_session;
        let sessionId = sessionInfo?.pendingOrders?.conveyor_session.id;
        // console.log("sessionInfo.....", sessionId);
        // console.log("conveyor_session.....", conveyor_session);
        //check session id 
        {
            let userName = conveyor_session.userName;
            let tempArray = [];
            let unfetchedOrders = [];
            let totalItemsFetch = 0;
            let loop = 0;
            let missingClothing = 0;
            let missingAccessories = 0;
            Object.keys(conveyor_session).length > 0 && conveyor_session.conveyor_sesssion_details.map((item, index)=>{
                var orderName = "";
                if (item.id > 0) {
                    totalItemsFetch += item.fetching_items_details.length;
                    item.fetching_items_details.map((item2, index2)=>{
                        if (tempArray.indexOf(item2.orderName) < 0) {
                            //tempArray.push(item.orderName);
                            tempArray[loop] = item2.orderName;
                            loop++;
                        }
                    });
                } else {
                    item.fetching_items_details.map((item3, index3)=>{
                        var tagsList = [];
                        item3.productTags.map((tags, tagsIndex)=>{
                            tagsList.push(tags.tag.tag_name);
                        });
                        var productTags = tagsList.toString();
                        var sportsBra = productTags.indexOf('sports-bras');
                        var basic = productTags.indexOf('basics');
                        var garment = productTags.indexOf('garment');
                        if (item3.productCategory == 1 || sportsBra > -1 || basic > -1 || garment > -1) {
                            missingClothing += 1;
                        }
                        if ((item3.productCategory == 2 || item3.productCategory == 3) && sportsBra == -1 && basic == -1 && garment == -1) {
                            missingAccessories += 1;
                        }
                    });
                }
            });
            let totalOrders = tempArray.length;
            let totalMissing = missingClothing + missingAccessories;
            let orders_S = totalOrders > 1 ? "s" : "";
            let items_S = totalItemsFetch > 1 ? "s" : "";
            let message = userName + " just started a fetch for " + totalOrders + " order" + orders_S + ". " + totalItemsFetch + " item" + items_S + " total will be fetched."; //($unfetchedOrderCount of them unfetched)
            let missingMessage = totalMissing > 0 ? totalMissing + " missing items # " + missingClothing + " clothing  # " + missingAccessories + " accessories" : "";
            var html = message;
            if (missingMessage != '') {
                html += '#' + missingMessage;
            }
            // console.log("html", html);
            if (totalOrders > 0) {
                setFetchAlertMessage(html);
                fetchAlertToggle();
            }
        }
    };
    const fetchAlertToggle = async (e)=>{
        await setFetchAlertPopupOpen(!fetchAlertPopupOpen);
    };
    const handleCheckInAuth = async ()=>{
        setEarlyCheckin(true);
    };
    const toggleSnapModal = ()=>{
        setOpenSnapModal(!openSnapModal);
    };
    const isJsonString = (str)=>{
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    };
    const tempRemoveLinksSubMenus = [
        {
            title: "Shipping Projections",
            link: `/shippingPageProjection`,
            not_allowed: 'LOW'
        },
        {
            title: "Pause Survey Report",
            link: `/pauseReport`
        },
        {
            title: "Cancel Survey Report",
            link: `/pauseReport`
        }
    ];
    const navigation_list = [
        {
            main_menu: {
                title: `New ${Object.keys(orderCounts).length > 0 ? '(' + orderCounts.newCount[0].count + ')' : ''}`,
                link: `/new-orders`
            },
            sub_menus: [
                {
                    title: `Fulfilled ${Object.keys(orderCounts).length > 0 ? '(' + orderCounts.fulfilled[0]?.count + ')' : ''}`,
                    link: `/fulfilled-orders`
                },
                {
                    title: `Shipped ${Object.keys(orderCounts).length > 0 ? '(' + orderCounts.shipped[0].count + ')' : ''}`,
                    link: `/shipped-orders`
                },
                {
                    title: "Process Returns",
                    link: `/returns_updated`
                },
                {
                    title: "Shipping Problem",
                    link: `/shippingProblem`
                },
                {
                    title: "Folding Inspection Page",
                    link: `/foldingInspection_updated`
                },
                {
                    title: "Trash Barcode Update",
                    link: `/dashboard/updating-trash-status`,
                    not_allowed: 'LOW'
                },
                {
                    title: "Stains Treatment",
                    link: `/stains_treatment`
                },
                {
                    title: "Inspection Reports",
                    link: `/inspection_reports_states_new`,
                    not_allowed: `LOW`
                },
                {
                    title: "Accessories Inspection Reports",
                    link: `/accessoriesStatsReport`,
                    not_allowed: `LOW`
                },
                {
                    title: "Order Processing Stats",
                    link: `/order-processing-stats`,
                    not_allowed: `LOW`
                },
                {
                    title: "Inspection Management",
                    link: `/inspectionManagement`,
                    not_allowed: `LOW`
                },
                {
                    title: "Cleaning Report",
                    link: `/cleaning-category/inspection-cleaning-reports`,
                    not_allowed: `LOW`
                },
                {
                    title: "Seamstress Report",
                    link: `/cleaning-category/seamstress-reports`,
                    not_allowed: `LOW`
                },
                {
                    title: "Fetching/Slotting Reports",
                    link: `/fetching_slots_stats`,
                    not_allowed: `LOW`
                },
                {
                    title: "Rack Management",
                    link: `/rack`,
                    not_allowed: 'LOW'
                },
                {
                    title: "Rack Slotting Management",
                    link: `/rack-slot-management`,
                    not_allowed: 'LOW'
                },
                {
                    title: "Order Collection",
                    link: `/conveyor/order-collection`
                },
                {
                    title: "Order Collector Item On Hold",
                    link: `/order_collection_on_hold`
                },
                {
                    title: "Jacket Order Collection Print",
                    link: `/jacket_order_collection_print`
                },
                {
                    title: "Can't Find Item List",
                    link: `/cant_find_items`
                },
                {
                    title: "Shipping Carriers Sort",
                    link: `/shippingCarrierSort`,
                    not_allowed: 'LOW'
                },
                {
                    title: "Shipping Diagnostics",
                    link: `/shippingDiagnostics`,
                    not_allowed: 'LOW'
                },
                {
                    title: "Pick-up Dashboard",
                    link: `/pickupDashboard`
                },
                {
                    title: "Customer Claims Report",
                    link: `/customerclaimreport`
                },
                {
                    title: "Bump Shipments Tool",
                    link: `/bumpShipmentTools`,
                    not_allowed: 'MEDIUM,LOW'
                },
                {
                    title: "QC Tunnel Failures",
                    link: `/qcTunnelFailures`
                },
                {
                    title: "Check In Orders",
                    link: `#`,
                    className: 'border-top',
                    onClick: handleCheckInAuth
                },
                {
                    title: "BIS Debug Tool",
                    link: `/bis-debug-tool`
                }
            ]
        },
        {
            main_menu: {
                title: `Starred ${Object.keys(orderCounts).length > 0 ? '(' + orderCounts.starred[0].count + ')' : ''}`,
                link: `/starred-orders`,
                not_allowed: 'LOW'
            },
            sub_menus: null
        },
        {
            main_menu: {
                title: "Members",
                link: `#!`,
                not_allowed: 'LOW'
            },
            sub_menus: [
                {
                    title: "Active Subs Graphs",
                    link: `/subscriberActivityGraph`,
                    not_allowed: 'MEDIUM,LOW'
                },
                {
                    title: "Active Subscriptions",
                    link: `/active_subscriptions`,
                    not_allowed: 'MEDIUM,LOW'
                },
                {
                    title: "Pending Accounts",
                    link: `/pending-accounts`
                },
                {
                    title: "Paused Accounts",
                    link: `/paused-accounts`
                },
                {
                    title: "Sleeping Customers",
                    link: `/sleeping_customers`
                },
                {
                    title: "Failed Payments",
                    link: `/failedPayments`
                },
                {
                    title: "Failed Payments w/o Decline Attribute",
                    link: `/failedPaymentsWithoutDeclineAttribute`
                },
                {
                    title: "MIR Dashboard",
                    link: `/mirFailedPayments`
                },
                {
                    title: "Alerts Settings",
                    link: `/alert_settings`
                },
                {
                    title: "Favorites",
                    link: `/favorites`
                },
                {
                    title: "NPS Report",
                    link: `/npsReport`
                },
                {
                    title: "Review Editor",
                    link: `/revieweditor`
                },
                {
                    title: "Create Shipment",
                    link: `/newShipment`
                },
                {
                    title: "Product Sales Report",
                    link: `/productSaleReport`,
                    not_allowed: 'MEDIUM,LOW'
                },
                {
                    title: "Pauses Calendar",
                    link: `/pauseReport`,
                    not_allowed: 'MEDIUM,LOW'
                },
                {
                    title: "Customer DB Search",
                    link: `/customerDBSearch`,
                    not_allowed: 'LOW'
                },
                {
                    title: "ClearJet Carrier Exclude",
                    link: `/clearJetCarrierExclude`
                },
                {
                    title: "Track Two Orders",
                    link: `/trackTwoOrders`
                },
                {
                    title: "Signup Records",
                    link: `/signup-records`
                },
                {
                    title: "Notification Settings",
                    link: `/notification_settings`
                },
                {
                    title: "Dynamic Credit Options",
                    link: `/credit_types`
                },
                {
                    title: "Conveyor Command Runner",
                    link: `/conveyor/commandrunner`
                }
            ]
        },
        {
            main_menu: {
                title: "Shipments",
                link: `#!`,
                not_allowed: 'HIGH,MEDIUM'
            },
            sub_menus: [
                {
                    title: "Create Shipment",
                    link: `/newShipment`
                },
                {
                    title: "Hangar Container Manager",
                    link: `/hangar-container-manager`
                }
            ]
        },
        {
            main_menu: {
                title: "Status",
                link: `#!`,
                not_allowed: 'LOW'
            },
            sub_menus: [
                {
                    title: "Cleaning Progress Tracking",
                    link: `/cleaning-progress-tracking`,
                    not_allowed: 'MEDIUM,LOW'
                },
                {
                    title: "CheckIn Order Details",
                    link: `/checkin_orders`
                },
                {
                    title: "Status Counts",
                    link: `/status`
                },
                {
                    title: "Side Checkout",
                    link: `/sidecheckout`
                },
                {
                    title: "Missing In Return",
                    link: `/missing`
                },
                {
                    title: "New MIR Cron",
                    link: '/mir_new'
                },
                {
                    title: "Shipping Stats",
                    link: `/shippingstatsreports`
                },
                {
                    title: "CS Return Processing",
                    link: `/sale_process_returns`
                },
                {
                    title: "Shipping Pace Projections",
                    link: `/shippingPageProjection`
                },
                {
                    title: "Cleaning Sorting",
                    link: `/cleaningSorting`,
                    not_allowed: `LOW`
                },
                {
                    title: "New Sort Page",
                    link: `/cleaningSortingNew`,
                    not_allowed: `LOW`
                },
                {
                    title: "Daily Ops Stats",
                    link: `/dailyOpsReports`
                },
                {
                    title: "Coat Folding Status",
                    link: `/conveyor/coatfolding`
                },
                {
                    title: "Bad Reviews",
                    link: `/imageReviewPage`
                },
                {
                    title: "In-Transit Dashboard",
                    link: `/inTransitDashboard`
                },
                {
                    title: "Hangar/ShipX In-Transit Dashboard",
                    link: `/inTransitDashboard-new`
                },
                {
                    title: "Hangar Container Manager",
                    link: `/hangar-container-manager`,
                    not_allowed: `LOW`
                },
                {
                    title: "Personal Item Dashboard",
                    link: `/personal-item-dashboard`,
                    not_allowed: `LOW`
                },
                {
                    title: "Daily Washing Tracker",
                    link: `/daily-washing-tracker`
                },
                {
                    title: "Maintenance Dashboard",
                    link: `/maintenance-dashboard`
                },
                {
                    title: "Conveyor Label Generator",
                    link: `/conveyor-label-generator`,
                    not_allowed: `LOW`
                },
                {
                    title: "Stain Attempt Page",
                    link: `/stains-attempt-page`
                }
            ]
        },
        {
            main_menu: {
                title: "Full Story Snapshot",
                click_event: true,
                onClick: toggleSnapModal
            }
        },
        {
            main_menu: {
                title: "Inventory",
                link: `#!`
            },
            sub_menus: [
                {
                    title: "Add New Inventory",
                    link: `/addNewInventory`
                },
                {
                    title: "Barcode ID",
                    link: `/barcode-id`
                },
                {
                    title: "SKU Discrepancies",
                    link: `/sku_discrepancies`,
                    not_allowed: 'LOW'
                },
                {
                    title: "NEW SKU Discrepancies",
                    link: `/new_sku_discrepancies`,
                    not_allowed: 'LOW'
                },
                {
                    title: "Barcode Bagging",
                    link: `/bagging`
                },
                {
                    title: "Barcode Range",
                    link: `/barcode_range`,
                    not_allowed: 'LOW'
                },
                {
                    title: "SKU Check",
                    link: `/sku_check`
                },
                {
                    title: "Multiple Barcode Update",
                    link: `/multiplebarcodeupdate`
                },
                {
                    title: "Add Barcodes to Slots",
                    link: `/addBarcodeToSlot`
                },
                // { title: "Third Party Barcode", link: `/thirdPartyBarcode` },
                {
                    title: "Add New Third Party Vendor",
                    link: `/thirdPartySoldVendors`
                },
                {
                    title: "Accessory Pouch Management",
                    link: `/accessorypouchmanagement`
                },
                {
                    title: "Assign Hanger Pouches to Slots",
                    link: `/AssignHangerPouchesSlots`
                },
                {
                    title: "Accessories Cleaning Status",
                    link: `/accessoryCleaningStatus`,
                    not_allowed: 'LOW'
                },
                {
                    title: "Conveyor Controller",
                    link: '/conveyor/controller',
                    not_allowed: 'LOW'
                },
                {
                    title: "Conveyor Missing Items",
                    link: '/conveyor/missingItems'
                },
                {
                    title: "Conveyor Station Status",
                    link: '/conveyorStationStatus',
                    not_allowed: 'LOW'
                },
                {
                    title: "Shipping Tag Points",
                    link: '/addingPoints'
                },
                {
                    title: "Conveyor Exclude Fetch",
                    link: '/excludeFetch'
                },
                {
                    title: "Conveyor Activity Tracking",
                    link: '/conveyorActivityTracking',
                    not_allowed: 'LOW'
                },
                {
                    title: "Conveyor Activity - User Reports",
                    link: '/conveyorActivityTrackingUserReports',
                    not_allowed: 'LOW'
                },
                {
                    title: "Conveyor Clean Up Page",
                    link: `/CleanUpPage`
                },
                {
                    title: "Available Accessory Pouches",
                    link: `/availableAccessoryPouches`,
                    not_allowed: ''
                },
                {
                    title: "In Closet Not Slotted",
                    link: `/in-closet-not-slotted`,
                    not_allowed: ''
                },
                {
                    title: "Slotter Slot Finder",
                    link: `/slotfinder`,
                    not_allowed: 'LOW'
                },
                {
                    title: "Inspection Slot Finder",
                    link: `/slotFinderInspector`,
                    not_allowed: 'LOW'
                },
                {
                    title: "Employee Goals",
                    link: `/employee-goal`,
                    user_management: userManagement
                },
                {
                    title: "Enable Fetching",
                    link: `${__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI}ConveyorPoller/EnableFetching`,
                    not_allowed: 'MEDIUM,LOW'
                },
                {
                    title: "Cancel All Sessions",
                    link: `/removeAllConveyorSessions`,
                    not_allowed: 'MEDIUM,LOW'
                },
                {
                    title: "Jackets Scan",
                    link: `/barcode-buckets`,
                    not_allowed: ''
                },
                {
                    title: "Utl Barcodes",
                    link: `/utl-barcodes`,
                    not_allowed: ''
                },
                {
                    title: "WhatNot Rack",
                    link: `/whatnot-racks`,
                    not_allowed: ''
                }
            ]
        },
        {
            main_menu: {
                title: "Banjo Users",
                link: `/banjo_users`,
                user_management: userManagement
            },
            sub_menus: null
        },
        {
            main_menu: {
                title: "Temp Remove Links",
                link: `#!`,
                allowed_user_ids: [
                    685
                ]
            },
            sub_menus: tempRemoveLinksSubMenus
        }
    ];
    const myLoader = ({ src })=>{
        return `${__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fashionpassS3Storage}assets/img/banjo_logo.jpg`;
    };
    let logoutUser = (e)=>{
        e.preventDefault();
        document.cookie = "user_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "banjo_login=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].remove('user_token', {
            path: '/',
            domain: location.hostname
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].remove('banjo_login', {
            path: '/',
            domain: location.hostname
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].remove('user_token', {
            path: '/',
            domain: 'fashionpass.com'
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].remove('banjo_login', {
            path: '/',
            domain: 'fashionpass.com'
        });
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["logoutBanjoUser"])());
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].push('/');
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            if (banjoUser) {
                ({
                    "Header.useEffect": async ()=>{
                        let payload = {
                            userId: banjoUser?.userid
                        };
                        let response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["checkUserPassword"])(payload);
                        if (response) {
                            if (response['defaultPassword']) {
                                setResetPasswordPopup(true);
                            }
                        }
                    }
                })["Header.useEffect"]();
            }
        }
    }["Header.useEffect"], [
        banjoUser
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$webSocketComponent$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/shared/header.js",
                lineNumber: 573,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_header$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].header_main,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_header$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].left_nav,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_header$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].img_div,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/new-orders`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        loader: myLoader,
                                        width: 115,
                                        height: 35,
                                        alt: "banjo-logo",
                                        src: `${__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fashionpassS3Storage}assets/img/banjo_logo.jpg`
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/header.js",
                                        lineNumber: 578,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/header.js",
                                    lineNumber: 577,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/shared/header.js",
                                lineNumber: 576,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$search$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                style: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_header$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"]
                            }, void 0, false, {
                                fileName: "[project]/components/shared/header.js",
                                lineNumber: 581,
                                columnNumber: 21
                            }, this),
                            navigation_list.map((menu, index)=>{
                                if (menu.main_menu.not_allowed != undefined && menu.main_menu.not_allowed.includes(userLevel) || menu.main_menu.user_management != undefined && menu.main_menu.user_management == 0 || menu.main_menu.allowed_user_ids != undefined && !menu.main_menu.allowed_user_ids.includes(Number(banjoUser?.userid))) return '';
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_header$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].nav_list,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_header$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].dropdown,
                                        children: [
                                            menu.main_menu.click_event ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `mb-0 ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_header$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].dropbtn}`,
                                                onClick: menu.main_menu.onClick,
                                                children: menu.main_menu.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/header.js",
                                                lineNumber: 588,
                                                columnNumber: 41
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: menu.main_menu.link,
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_header$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].dropbtn} ` + (menu?.sub_menus?.find((val)=>val.link == pathName) ? `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_header$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].active}` : ''),
                                                children: [
                                                    menu.main_menu.title,
                                                    " ",
                                                    menu.sub_menus != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                        fontSize: 10,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_header$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].caret_icon,
                                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["faAngleDown"]
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/shared/header.js",
                                                        lineNumber: 590,
                                                        columnNumber: 240
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/shared/header.js",
                                                lineNumber: 590,
                                                columnNumber: 41
                                            }, this),
                                            menu.sub_menus != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_header$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].dropdown_content,
                                                children: menu.sub_menus != null && menu.sub_menus.map((val, ind)=>{
                                                    if (enableCheckIn && val.title == 'Check In Orders' || val.click_event) {
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: val.className,
                                                            onClick: val.onClick,
                                                            children: val.title
                                                        }, menu.main_menu + "_" + ind, false, {
                                                            fileName: "[project]/components/shared/header.js",
                                                            lineNumber: 598,
                                                            columnNumber: 61
                                                        }, this);
                                                    }
                                                    if (val.not_allowed != undefined && val.not_allowed.includes(userLevel) || !enableCheckIn && val.title == 'Check In Orders' || val.user_management != undefined && val.user_management == 0) {
                                                        return '';
                                                    }
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                        className: val.link == pathName ? `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_header$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].active}` : '',
                                                        href: val.link,
                                                        children: val.title
                                                    }, menu.main_menu + '_' + ind, false, {
                                                        fileName: "[project]/components/shared/header.js",
                                                        lineNumber: 606,
                                                        columnNumber: 57
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/header.js",
                                                lineNumber: 593,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/shared/header.js",
                                        lineNumber: 586,
                                        columnNumber: 33
                                    }, this)
                                }, "nl" + index, false, {
                                    fileName: "[project]/components/shared/header.js",
                                    lineNumber: 585,
                                    columnNumber: 29
                                }, this);
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$navBarFetchTooltip$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                statsData: statsData,
                                missingCounts: missingCounts
                            }, void 0, false, {
                                fileName: "[project]/components/shared/header.js",
                                lineNumber: 617,
                                columnNumber: 21
                            }, this),
                            slotStat > 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "fw-bold d-flex align-self-center ms-1",
                                children: [
                                    slotStat,
                                    " slots assigned"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/shared/header.js",
                                lineNumber: 618,
                                columnNumber: 38
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    margin: 'auto',
                                    alignSelf: 'center',
                                    paddingInline: '1rem'
                                },
                                children: shippersData.map((shipperItem, itemIndex)=>{
                                    if (shipperItem?.actualTotal > 5) {
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                shipperItem?.actualTotal > 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-0 mb-0 fw-bold",
                                                    style: {
                                                        color: shipperItem.actualTotal > shipperItem.totalGoal ? 'green' : 'red'
                                                    },
                                                    children: [
                                                        "Orders Shipped:",
                                                        shipperItem.actualTotal,
                                                        "/",
                                                        shipperItem.totalGoal
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/shared/header.js",
                                                    lineNumber: 624,
                                                    columnNumber: 74
                                                }, this),
                                                shipperItem?.hourlyActualAmount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-0 mb-0 fw-bold",
                                                    style: {
                                                        color: +shipperItem.hourlyActualAmount > shipperItem.hourlyGoal ? 'green' : 'red'
                                                    },
                                                    children: [
                                                        "Hourly Pace:",
                                                        shipperItem.hourlyActualAmount,
                                                        "/",
                                                        shipperItem.hourlyGoal
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/shared/header.js",
                                                    lineNumber: 625,
                                                    columnNumber: 81
                                                }, this)
                                            ]
                                        }, 'ShipperItem_' + itemIndex, true, {
                                            fileName: "[project]/components/shared/header.js",
                                            lineNumber: 623,
                                            columnNumber: 37
                                        }, this);
                                    }
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/shared/header.js",
                                lineNumber: 619,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/shared/header.js",
                        lineNumber: 575,
                        columnNumber: 17
                    }, this),
                    endSessionPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "px-2 text-danger fw-bold display-6",
                        style: {
                            cursor: "pointer"
                        },
                        onClick: ()=>{
                            location.href = '/conveyor/controller';
                        },
                        children: "Fetch Over"
                    }, void 0, false, {
                        fileName: "[project]/components/shared/header.js",
                        lineNumber: 632,
                        columnNumber: 37
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_header$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].right_nav,
                        children: [
                            addedItemStats > 5 && banjoUser?.new_inventory == 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pe-3 fw-bold text-primary",
                                children: [
                                    addedItemStats,
                                    " Items Added"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/shared/header.js",
                                lineNumber: 634,
                                columnNumber: 79
                            }, this),
                            banjoUser?.active_user == 1 && banjoUser?.user_roles?.split(',')[5] == '1' && cleaningAccCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-warning me-2 fs-4",
                                children: [
                                    cleaningAccCount,
                                    " Cleaned Acc"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/shared/header.js",
                                lineNumber: 635,
                                columnNumber: 126
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/conveyor/missingItems",
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_header$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].missing_btn}`,
                                    children: "Missing Items"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/header.js",
                                    lineNumber: 637,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/shared/header.js",
                                lineNumber: 636,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_header$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].dropdown,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_header$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].dropbtn,
                                        children: [
                                            User.banjoUser && User.banjoUser.user_name + ' ' + (User.banjoUser.name && User.banjoUser.name.charAt(0)) + '.',
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_header$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].caret_icon,
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["faAngleDown"]
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/header.js",
                                                lineNumber: 640,
                                                columnNumber: 173
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/shared/header.js",
                                        lineNumber: 640,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$_header$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].dropdown_content,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            onClick: (e)=>logoutUser(e),
                                            children: [
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["faPowerOff"]
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/header.js",
                                                    lineNumber: 642,
                                                    columnNumber: 64
                                                }, this),
                                                "Logout"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/shared/header.js",
                                            lineNumber: 642,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/header.js",
                                        lineNumber: 641,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/shared/header.js",
                                lineNumber: 639,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/shared/header.js",
                        lineNumber: 633,
                        columnNumber: 17
                    }, this),
                    openSnapModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$snapshotPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        isOpen: openSnapModal,
                        toggle: toggleSnapModal,
                        customer: User.banjoUser
                    }, void 0, false, {
                        fileName: "[project]/components/shared/header.js",
                        lineNumber: 646,
                        columnNumber: 35
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/shared/header.js",
                lineNumber: 574,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$fetchAlertPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: fetchAlertPopupOpen,
                toggle: fetchAlertToggle,
                fetchAlertMessage: fetchAlertMessage
            }, void 0, false, {
                fileName: "[project]/components/shared/header.js",
                lineNumber: 648,
                columnNumber: 13
            }, this),
            earlyCheckin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$checkinPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: earlyCheckin,
                toggle: ()=>setEarlyCheckin(false)
            }, void 0, false, {
                fileName: "[project]/components/shared/header.js",
                lineNumber: 649,
                columnNumber: 30
            }, this),
            resetPasswordPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$resetPasswordPopup$2f$resetPasswordPopup$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: resetPasswordPopup,
                toggle: ()=>setResetPasswordPopup(!resetPasswordPopup),
                userid: banjoUser?.userid
            }, void 0, false, {
                fileName: "[project]/components/shared/header.js",
                lineNumber: 653,
                columnNumber: 36
            }, this)
        ]
    }, void 0, true);
}
_s(Header, "T9FJlDeYMROXkOr1cYkap2rip5M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/shared/footer.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "footer text-center mb-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                "© ",
                new Date().getFullYear(),
                " FashionPass"
            ]
        }, void 0, true, {
            fileName: "[project]/components/shared/footer.js",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/shared/footer.js",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/shared/analytics.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/globalconfig.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-redux/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/es/exports.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fullstory$2f$browser$2f$dist$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fullstory/browser/dist/index.esm.js [client] (ecmascript)");
;
;
;
;
const ORG_ID = '3SMNC'; // Fill this in here
class Analytics extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Component"] {
    componentDidMount() {
        let url = window.location.href;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].envoiroment == "production" || url.includes("stage") || url.includes("dev")) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fullstory$2f$browser$2f$dist$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["init"]({
                orgId: ORG_ID
            });
            if (this.props.banjoUser.banjoUser != null) {
                this.identify();
            }
        }
    }
    identify() {
        // Identify method
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fullstory$2f$browser$2f$dist$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["identify"](this.props.banjoUser.banjoUser.userid, {
            displayName: this.props.banjoUser.banjoUser.name,
            email: this.props.banjoUser.banjoUser.email
        });
    // console.log("FS Loaded.")
    }
    render() {
        return "";
    }
}
const mapStateToProps = (state)=>{
    return {
        banjoUser: state.banjoUser
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["connect"])(mapStateToProps, null)(Analytics);
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
"[project]/src/constants/global-config.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BASE_URL",
    ()=>BASE_URL,
    "ENVIRONMENT",
    ()=>ENVIRONMENT,
    "S3_URL",
    ()=>S3_URL,
    "SYSTEM_SETTING_ID",
    ()=>SYSTEM_SETTING_ID
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
const STORAGE_URL = {
    "fashionpassS3Storage": "https://fashionpass.s3.us-west-1.amazonaws.com/",
    "imageURL": "https://images.fashionpass.com/"
};
const isAppEnv_X = Boolean(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_APP_ENV === 'X');
const isAppEnv_Y = Boolean(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_APP_ENV === 'Y');
const BASE_URL = {
    FP_API: isAppEnv_X ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FPAPI_X : isAppEnv_Y ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FPAPI_Y : ("TURBOPACK compile-time value", "https://dev-api.fashionpass.com/api/v1/"),
    UTILITY_API: isAppEnv_X ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_UTILITY_URL_X : isAppEnv_Y ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_UTILITY_URL_Y : ("TURBOPACK compile-time value", "https://dev-utility.fashionpass.com/"),
    CONVEYOR_API: isAppEnv_X ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CONVEYOR_API_X : isAppEnv_Y ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CONVEYOR_API_Y : ("TURBOPACK compile-time value", "https://dev-conveyor.fashionpass.com/api/v1/"),
    LOKI_URL: isAppEnv_X ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_LOKI_URL_X : isAppEnv_Y ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_LOKI_URL_Y : ("TURBOPACK compile-time value", "https://dev-loki.fashionpass.com/"),
    SMART_BANJO_API: isAppEnv_X ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SMARTBANJOAPI_X : isAppEnv_Y ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SMARTBANJOAPI_Y : ("TURBOPACK compile-time value", "https://dev-smartbanjo.fashionpass.com/api/v1/"),
    USER_TRACKING_API: isAppEnv_X ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_USERTRACKINGAPI_X : isAppEnv_Y ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_USERTRACKINGAPI_Y : ("TURBOPACK compile-time value", "https://dev-usertracking.fashionpass.com/api/v1/"),
    FVALIDATIONAPI: isAppEnv_X ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FVALIDATIONAPI_X : isAppEnv_Y ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FVALIDATIONAPI_Y : ("TURBOPACK compile-time value", "https://dev-fvalidation.fashionpass.com/api/v1/")
};
const SYSTEM_SETTING_ID = {
    EXCLUDE_FETCH: isAppEnv_X ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_EXCLUDE_FETCH_X : isAppEnv_Y ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_EXCLUDE_FETCH_Y : ("TURBOPACK compile-time value", "58"),
    CUTOFF_TIME: isAppEnv_X ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_EXCLUDE_FETCH_X : isAppEnv_Y ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_EXCLUDE_FETCH_Y : ("TURBOPACK compile-time value", "27"),
    CONVEYOR_ORDER_COUNT: isAppEnv_X ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CONVEYOR_ORDER_COUNT_X : isAppEnv_Y ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CONVEYOR_ORDER_COUNT_Y : ("TURBOPACK compile-time value", "38")
};
const ENVIRONMENT = {
    TYPE: isAppEnv_X ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_ENVIRONMENT_X : isAppEnv_Y ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_ENVIRONMENT_Y : ("TURBOPACK compile-time value", "development")
};
const S3_URL = {
    IMAGE_URL: STORAGE_URL.imageURL + 'products/',
    ASSETS_URL: STORAGE_URL.fashionpassS3Storage + 'assets/',
    INVOICE_IMAGE_URL: STORAGE_URL.imageURL
} // switch (process.env.NEXT_PUBLIC_APP_ENV) {
 //     case 'X':
 //         Gconfig.fpAPI = process.env.NEXT_PUBLIC_FPAPI_X;
 //         Gconfig.envoiroment = process.env.NEXT_PUBLIC_ENVIRONMENT_X;
 //         Gconfig.utility = process.env.NEXT_PUBLIC_UTILITY_URL_X;
 //         Gconfig.conveyorOrderCount = process.env.NEXT_PUBLIC_CONVEYOR_ORDER_COUNT_X;
 //         Gconfig.cutoffTime = process.env.NEXT_PUBLIC_CUTOFF_TIME_X;
 //         Gconfig.lokiUrl = process.env.NEXT_PUBLIC_LOKI_URL_X;
 //         Gconfig.conveyorURL = process.env.NEXT_PUBLIC_CONVEYOR_API_X;
 //         Gconfig.ConveyorUrlSettings = process.env.NEXT_PUBLIC_CONVEYOR_URL_X;
 //         Gconfig.smartBanjoApi = process.env.NEXT_PUBLIC_SMARTBANJOAPI_X;
 //         Gconfig.excludeFetch = process.env.NEXT_PUBLIC_EXCLUDE_FETCH_X;
 //         break;
 //     case 'Y':
 //         Gconfig.fpAPI = process.env.NEXT_PUBLIC_FPAPI_Y;
 //         Gconfig.envoiroment = process.env.NEXT_PUBLIC_ENVIRONMENT_Y;
 //         Gconfig.utility = process.env.NEXT_PUBLIC_UTILITY_URL_Y;
 //         Gconfig.conveyorOrderCount = process.env.NEXT_PUBLIC_CONVEYOR_ORDER_COUNT_Y;
 //         Gconfig.cutoffTime = process.env.NEXT_PUBLIC_CUTOFF_TIME_Y;
 //         Gconfig.lokiUrl = process.env.NEXT_PUBLIC_LOKI_URL_Y;
 //         Gconfig.conveyorURL = process.env.NEXT_PUBLIC_CONVEYOR_API_Y;
 //         Gconfig.ConveyorUrlSettings = process.env.NEXT_PUBLIC_CONVEYOR_URL_Y;
 //         Gconfig.smartBanjoApi = process.env.NEXT_PUBLIC_SMARTBANJOAPI_Y;
 //         Gconfig.excludeFetch = process.env.NEXT_PUBLIC_EXCLUDE_FETCH_Y;
 //         break;
 //     default:
 //         Gconfig.fpAPI = process.env.NEXT_PUBLIC_FPAPI;
 //         Gconfig.envoiroment = process.env.NEXT_PUBLIC_ENVIRONMENT;
 //         Gconfig.utility = process.env.NEXT_PUBLIC_UTILITY_URL;
 //         Gconfig.conveyorOrderCount = process.env.NEXT_PUBLIC_CONVEYOR_ORDER_COUNT;
 //         Gconfig.cutoffTime = process.env.NEXT_PUBLIC_CUTOFF_TIME;
 //         Gconfig.lokiUrl = process.env.NEXT_PUBLIC_LOKI_URL;
 //         Gconfig.conveyorURL = process.env.NEXT_PUBLIC_CONVEYOR_API;
 //         Gconfig.ConveyorUrlSettings = process.env.NEXT_PUBLIC_CONVEYOR_URL;
 //         Gconfig.smartBanjoApi = process.env.NEXT_PUBLIC_SMARTBANJOAPI;
 //         Gconfig.excludeFetch = process.env.NEXT_PUBLIC_EXCLUDE_FETCH;
 // }
 // Gconfig.imageS3URl = Gconfig.fashionpassS3Storage + "products/";
 // Gconfig.assetsURL = Gconfig.fashionpassS3Storage + "assets/";
 // export default Gconfig
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/config.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BASE_URL_FP_API",
    ()=>BASE_URL_FP_API,
    "BASE_URL_SMART_BANJO_API",
    ()=>BASE_URL_SMART_BANJO_API,
    "BASE_URL_USER_TRACKING_API",
    ()=>BASE_URL_USER_TRACKING_API,
    "BASE_URL_UTILITY_API",
    ()=>BASE_URL_UTILITY_API,
    "REQUEST_CONFIG",
    ()=>REQUEST_CONFIG
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$global$2d$config$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/global-config.ts [client] (ecmascript)");
;
const BASE_URL_FP_API = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$global$2d$config$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["BASE_URL"].FP_API;
const BASE_URL_UTILITY_API = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$global$2d$config$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["BASE_URL"].UTILITY_API;
const BASE_URL_SMART_BANJO_API = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$global$2d$config$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["BASE_URL"].SMART_BANJO_API;
const BASE_URL_USER_TRACKING_API = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$global$2d$config$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["BASE_URL"].USER_TRACKING_API;
const REQUEST_CONFIG = (configData)=>{
    const headers = {};
    if (!!configData.token) headers['Authorization'] = `Bearer ${configData.token}`;
    if (!!configData.contentType) headers['Content-Type'] = configData.contentType || 'application/json';
    if (!!configData.FashionPassAuth) headers['FashionPassAuth'] = configData.FashionPassAuth;
    return {
        headers
    };
};
_c = REQUEST_CONFIG;
var _c;
__turbopack_context__.k.register(_c, "REQUEST_CONFIG");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/stains/services.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getStainsBarcodesByAttempt",
    ()=>getStainsBarcodesByAttempt,
    "getStainsBarcodesBySku",
    ()=>getStainsBarcodesBySku,
    "getStainsDashboard",
    ()=>getStainsDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$config$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/config.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/functions/globalFunctions.js [client] (ecmascript)");
;
;
function smartBanjoStainsBase() {
    const base = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$config$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["BASE_URL_SMART_BANJO_API"].replace(/\/+$/, '');
    if (base.endsWith('/api/v1')) return `${base}/stains`;
    if (base.endsWith('/api')) return `${base}/v1/stains`;
    return `${base}/api/v1/stains`;
}
async function stainsGet(path, params) {
    const url = new URL(`${smartBanjoStainsBase()}${path}`);
    Object.entries(params).forEach(([key, value])=>url.searchParams.set(key, String(value)));
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
            accept: '*/*',
            'content-type': 'application/json',
            ...token && token !== 'not loged in' ? {
                Authorization: `Bearer ${token}`
            } : {}
        }
    });
    if (!response.ok) {
        throw new Error(`Stains API failed (${response.status})`);
    }
    return await response.json();
}
function getStainsDashboard(from, to) {
    return stainsGet('/dashboard', {
        from,
        to
    });
}
function getStainsBarcodesByAttempt(attempt, outcome, from, to) {
    const params = {
        attempt,
        outcome
    };
    if (from) params.from = from;
    if (to) params.to = to;
    return stainsGet('/barcodes-by-attempt', params);
}
function getStainsBarcodesBySku(sku, outcome, from, to) {
    const params = {
        sku,
        outcome
    };
    if (from) params.from = from;
    if (to) params.to = to;
    return stainsGet('/barcodes-by-sku', params);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/containers/stains-attempt-page/constants.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ATTEMPT_COLORS",
    ()=>ATTEMPT_COLORS,
    "MODAL_PAGE_SIZE",
    ()=>MODAL_PAGE_SIZE
]);
const ATTEMPT_COLORS = [
    '#3b82f6',
    '#8b5cf6',
    '#f59e0b',
    '#ef4444',
    '#ec4899',
    '#6366f1',
    '#6B7280'
];
const MODAL_PAGE_SIZE = 200;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/containers/stains-attempt-page/utils.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "firstValue",
    ()=>firstValue,
    "fmt",
    ()=>fmt,
    "normalizeAttemptTotals",
    ()=>normalizeAttemptTotals,
    "normalizeBarcodes",
    ()=>normalizeBarcodes,
    "normalizeFunnelRows",
    ()=>normalizeFunnelRows,
    "normalizeKpis",
    ()=>normalizeKpis,
    "normalizeSkuRows",
    ()=>normalizeSkuRows,
    "pct",
    ()=>pct,
    "readObj",
    ()=>readObj,
    "toNumber",
    ()=>toNumber,
    "troubleClassName",
    ()=>troubleClassName,
    "troubleLabel",
    ()=>troubleLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/moment/moment.js [client] (ecmascript)");
;
function fmt(n) {
    return Number.isFinite(n) ? n.toLocaleString() : '0';
}
function pct(a, b) {
    return b === 0 ? '0.0%' : (a / b * 100).toFixed(1) + '%';
}
function toNumber(val, fallback = 0) {
    const num = Number(val);
    return Number.isFinite(num) ? num : fallback;
}
function toOptionalNumber(val) {
    const num = Number(val);
    return Number.isFinite(num) ? num : undefined;
}
function toStringVal(val, fallback = '') {
    return val === null || val === undefined ? fallback : String(val);
}
function readObj(source) {
    return source && typeof source === 'object' && !Array.isArray(source) ? source : {};
}
function firstValue(obj, keys, fallback = undefined) {
    for (const key of keys){
        if (obj[key] !== undefined && obj[key] !== null) return obj[key];
    }
    return fallback;
}
function extractList(payload, keys = []) {
    if (Array.isArray(payload)) return payload;
    const obj = readObj(payload);
    for (const key of keys){
        const val = obj[key];
        if (Array.isArray(val)) return val;
    }
    const nested = firstValue(obj, [
        'data',
        'response',
        'result',
        'payload'
    ]);
    if (nested && nested !== payload) return extractList(nested, keys);
    return [];
}
function normalizeOutcome(value) {
    const out = toStringVal(value).toLowerCase();
    if (out.includes('closet') || out === 'success' || out === 'resolved' || out === 'clean') return 'closet';
    if (out.includes('fail') || out.includes('next') || out.includes('stain')) return 'failed';
    return 'pending';
}
function formatDateValue(value) {
    const raw = toStringVal(value).trim();
    if (!raw) return '';
    const timestampNum = Number(raw);
    if (!Number.isNaN(timestampNum) && timestampNum > 1000000000) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(timestampNum).utc().format('M/D/YY');
    }
    const m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(raw, [
        'YYYY-MM-DD',
        'M/D/YY',
        'M/D/YYYY',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].ISO_8601
    ], true);
    if (m.isValid()) return m.format('M/D/YY');
    return raw;
}
function formatTimeValue(value) {
    const raw = toStringVal(value).trim();
    if (!raw) return '';
    const timestampNum = Number(raw);
    if (!Number.isNaN(timestampNum) && timestampNum > 1000000000) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unix(timestampNum).utc().format('h:mma');
    }
    if (/^\d{4}-\d{1,2}-\d{1,2}$/.test(raw) || /^\d{1,2}\/\d{1,2}\/\d{2,4}$/.test(raw)) return '';
    const m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(raw, [
        'h:mma',
        'h:mm A',
        'HH:mm:ss',
        'HH:mm',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].ISO_8601
    ], true);
    if (m.isValid()) return m.format('h:mma');
    return raw;
}
function normalizeDateTime(dateValue, timeValue) {
    return {
        date: formatDateValue(dateValue),
        time: formatTimeValue(timeValue || dateValue)
    };
}
function normalizeBarcodes(payload) {
    return extractList(payload, [
        'barcodes',
        'barcode_list',
        'records',
        'items',
        'rows'
    ]).map((item)=>{
        const obj = readObj(item);
        const reportedDate = firstValue(obj, [
            'reported_at',
            'reportedDate',
            'reported_date',
            'createdAt',
            'created_at',
            'date'
        ]);
        const reportedTime = firstValue(obj, [
            'reported_at',
            'reportedTime',
            'reported_time',
            'time'
        ]);
        const reported = normalizeDateTime(reportedDate, reportedTime);
        const rawOutcome = firstValue(obj, [
            'outcome',
            'status',
            'result'
        ]);
        const normalizedOutcome = normalizeOutcome(rawOutcome);
        return {
            barcode: toStringVal(firstValue(obj, [
                'barcode',
                'Barcode',
                'bar_code',
                'barcodeNumber',
                'barcode_number'
            ])),
            reportedDate: reported.date,
            reportedTime: reported.time,
            reportedBy: toStringVal(firstValue(obj, [
                'reportedBy',
                'reported_by',
                'employee',
                'user',
                'user_name'
            ]), '-'),
            processPoint: toStringVal(firstValue(obj, [
                'processPoint',
                'process_point',
                'station',
                'location'
            ]), '-'),
            outcome: normalizedOutcome,
            outcomeLabel: toStringVal(rawOutcome, normalizedOutcome),
            attempt: toOptionalNumber(firstValue(obj, [
                'attempt',
                'attempt_number',
                'attemptNumber'
            ]))
        };
    });
}
function normalizeFunnelRows(payload) {
    return extractList(payload, [
        'attempts',
        'attempt_breakdown',
        'attemptBreakdown',
        'funnel',
        'rows'
    ]).map((item)=>{
        const obj = readObj(item);
        const entered = toNumber(firstValue(obj, [
            'entered',
            'barcodes_entered',
            'barcodesEntered',
            'total',
            'total_barcodes'
        ]));
        const toCloset = toNumber(firstValue(obj, [
            'toCloset',
            'to_closet',
            'closet',
            'sent_to_closet',
            'sentToCloset',
            'success'
        ]));
        const toNext = toNumber(firstValue(obj, [
            'toNext',
            'to_next',
            'failed',
            'failed_to_next',
            'next_attempt',
            'still_in_stains'
        ]), Math.max(entered - toCloset, 0));
        return {
            attempt: toNumber(firstValue(obj, [
                'attempt',
                'attempt_number',
                'attemptNumber'
            ])),
            entered,
            toCloset,
            toNext
        };
    }).filter((row)=>row.attempt > 0);
}
function normalizeSkuRows(payload) {
    return extractList(payload, [
        'trouble_skus',
        'troubleSkus',
        'skus',
        'sku_breakdown',
        'skuBreakdown'
    ]).map((item)=>{
        const obj = readObj(item);
        return {
            sku: toStringVal(firstValue(obj, [
                'sku',
                'SKU',
                'style'
            ])),
            product: toStringVal(firstValue(obj, [
                'product',
                'product_name',
                'productName',
                'title',
                'name'
            ]), '-'),
            category: toStringVal(firstValue(obj, [
                'category',
                'product_category',
                'productCategory'
            ]), 'Uncategorized'),
            events: toNumber(firstValue(obj, [
                'events',
                'total_events',
                'totalEvents',
                'stains_events',
                'stainsEvents'
            ])),
            barcodes: toNumber(firstValue(obj, [
                'barcodes',
                'unique_barcodes',
                'uniqueBarcodes',
                'barcode_count',
                'barcodeCount'
            ])),
            maxAttempt: toNumber(firstValue(obj, [
                'maxAttempt',
                'max_attempt',
                'max_attempts',
                'maxAttempts'
            ]), 0),
            avgAttempt: toNumber(firstValue(obj, [
                'avgAttempt',
                'avg_attempt',
                'avg_attempts',
                'avgAttempts'
            ]), 0)
        };
    }).filter((row)=>row.sku);
}
function normalizeKpis(payload) {
    const kpis = readObj(firstValue(readObj(payload), [
        'kpis'
    ]));
    if (!Object.keys(kpis).length) return null;
    return {
        totalToAttempt1: toNumber(firstValue(kpis, [
            'totalToAttempt1',
            'total_to_attempt_1'
        ])),
        sentToCloset: toNumber(firstValue(kpis, [
            'sentToCloset',
            'sent_to_closet'
        ])),
        sentToClosetRate: toNumber(firstValue(kpis, [
            'sentToClosetRate',
            'sent_to_closet_rate'
        ])),
        multiAttempt: toNumber(firstValue(kpis, [
            'multiAttempt',
            'multi_attempt'
        ])),
        stillInStains: toNumber(firstValue(kpis, [
            'stillInStains',
            'still_in_stains'
        ])),
        avgAttemptsPerCleaned: toNumber(firstValue(kpis, [
            'avgAttemptsPerCleaned',
            'avg_attempts_per_cleaned'
        ]))
    };
}
function normalizeAttemptTotals(payload) {
    const totals = readObj(firstValue(readObj(payload), [
        'attemptTotals',
        'attempt_totals'
    ]));
    if (!Object.keys(totals).length) return null;
    return {
        entered: toNumber(firstValue(totals, [
            'entered'
        ])),
        toCloset: toNumber(firstValue(totals, [
            'toCloset',
            'to_closet'
        ])),
        toNext: toNumber(firstValue(totals, [
            'toNext',
            'to_next'
        ])),
        successRate: toNumber(firstValue(totals, [
            'successRate',
            'success_rate'
        ])),
        failRate: toNumber(firstValue(totals, [
            'failRate',
            'fail_rate'
        ])),
        cumulativeCloset: toNumber(firstValue(totals, [
            'cumulativeCloset',
            'cumulative_closet'
        ])),
        cumulativeSuccessRate: toNumber(firstValue(totals, [
            'cumulativeSuccessRate',
            'cumulative_success_rate'
        ]))
    };
}
function troubleClassName(events, maxEvents, styles) {
    const r = maxEvents ? events / maxEvents : 0;
    if (r >= 0.5) return styles.high;
    if (r >= 0.25) return styles.medium;
    return styles.low;
}
function troubleLabel(events, maxEvents) {
    const r = maxEvents ? events / maxEvents : 0;
    if (r >= 0.5) return '🔴 High';
    if (r >= 0.25) return '🟡 Medium';
    return '🟢 Low';
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/containers/stains-attempt-page/stains-attempt-page.module.scss [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "stains-attempt-page-module-scss-module__k1PAbq__active",
  "activeAll": "stains-attempt-page-module-scss-module__k1PAbq__activeAll",
  "activeCloset": "stains-attempt-page-module-scss-module__k1PAbq__activeCloset",
  "activeFailed": "stains-attempt-page-module-scss-module__k1PAbq__activeFailed",
  "alertClose": "stains-attempt-page-module-scss-module__k1PAbq__alertClose",
  "alertCloseBtn": "stains-attempt-page-module-scss-module__k1PAbq__alertCloseBtn",
  "alertContent": "stains-attempt-page-module-scss-module__k1PAbq__alertContent",
  "alertDescription": "stains-attempt-page-module-scss-module__k1PAbq__alertDescription",
  "alertIcon": "stains-attempt-page-module-scss-module__k1PAbq__alertIcon",
  "alertMessage": "stains-attempt-page-module-scss-module__k1PAbq__alertMessage",
  "alertTitle": "stains-attempt-page-module-scss-module__k1PAbq__alertTitle",
  "alertWrapper": "stains-attempt-page-module-scss-module__k1PAbq__alertWrapper",
  "amber": "stains-attempt-page-module-scss-module__k1PAbq__amber",
  "apiNote": "stains-attempt-page-module-scss-module__k1PAbq__apiNote",
  "apiNoteIcon": "stains-attempt-page-module-scss-module__k1PAbq__apiNoteIcon",
  "apiStatus": "stains-attempt-page-module-scss-module__k1PAbq__apiStatus",
  "arrowIcon": "stains-attempt-page-module-scss-module__k1PAbq__arrowIcon",
  "attemptBadge": "stains-attempt-page-module-scss-module__k1PAbq__attemptBadge",
  "attemptFilterBar": "stains-attempt-page-module-scss-module__k1PAbq__attemptFilterBar",
  "attemptFilterLabel": "stains-attempt-page-module-scss-module__k1PAbq__attemptFilterLabel",
  "attemptFilterNote": "stains-attempt-page-module-scss-module__k1PAbq__attemptFilterNote",
  "attemptSelect": "stains-attempt-page-module-scss-module__k1PAbq__attemptSelect",
  "attemptText": "stains-attempt-page-module-scss-module__k1PAbq__attemptText",
  "barFill": "stains-attempt-page-module-scss-module__k1PAbq__barFill",
  "barFillText": "stains-attempt-page-module-scss-module__k1PAbq__barFillText",
  "barLine": "stains-attempt-page-module-scss-module__k1PAbq__barLine",
  "barMeta": "stains-attempt-page-module-scss-module__k1PAbq__barMeta",
  "barTag": "stains-attempt-page-module-scss-module__k1PAbq__barTag",
  "barTrack": "stains-attempt-page-module-scss-module__k1PAbq__barTrack",
  "barcodeMono": "stains-attempt-page-module-scss-module__k1PAbq__barcodeMono",
  "blue": "stains-attempt-page-module-scss-module__k1PAbq__blue",
  "body": "stains-attempt-page-module-scss-module__k1PAbq__body",
  "brand": "stains-attempt-page-module-scss-module__k1PAbq__brand",
  "btnRun": "stains-attempt-page-module-scss-module__k1PAbq__btnRun",
  "closet": "stains-attempt-page-module-scss-module__k1PAbq__closet",
  "controls": "stains-attempt-page-module-scss-module__k1PAbq__controls",
  "controlsLabel": "stains-attempt-page-module-scss-module__k1PAbq__controlsLabel",
  "controlsSep": "stains-attempt-page-module-scss-module__k1PAbq__controlsSep",
  "controlsWrapper": "stains-attempt-page-module-scss-module__k1PAbq__controlsWrapper",
  "dashText": "stains-attempt-page-module-scss-module__k1PAbq__dashText",
  "dateErrorMsg": "stains-attempt-page-module-scss-module__k1PAbq__dateErrorMsg",
  "dateInput": "stains-attempt-page-module-scss-module__k1PAbq__dateInput",
  "dateInputError": "stains-attempt-page-module-scss-module__k1PAbq__dateInputError",
  "dateRangeAlert": "stains-attempt-page-module-scss-module__k1PAbq__dateRangeAlert",
  "detailTable": "stains-attempt-page-module-scss-module__k1PAbq__detailTable",
  "devBadge": "stains-attempt-page-module-scss-module__k1PAbq__devBadge",
  "devNote": "stains-attempt-page-module-scss-module__k1PAbq__devNote",
  "dividerRow": "stains-attempt-page-module-scss-module__k1PAbq__dividerRow",
  "entry": "stains-attempt-page-module-scss-module__k1PAbq__entry",
  "failRateHigh": "stains-attempt-page-module-scss-module__k1PAbq__failRateHigh",
  "failRateNorm": "stains-attempt-page-module-scss-module__k1PAbq__failRateNorm",
  "failed": "stains-attempt-page-module-scss-module__k1PAbq__failed",
  "funnelAttemptLabel": "stains-attempt-page-module-scss-module__k1PAbq__funnelAttemptLabel",
  "funnelBarsCol": "stains-attempt-page-module-scss-module__k1PAbq__funnelBarsCol",
  "funnelContainer": "stains-attempt-page-module-scss-module__k1PAbq__funnelContainer",
  "funnelReadingsLabel": "stains-attempt-page-module-scss-module__k1PAbq__funnelReadingsLabel",
  "funnelRow": "stains-attempt-page-module-scss-module__k1PAbq__funnelRow",
  "green": "stains-attempt-page-module-scss-module__k1PAbq__green",
  "high": "stains-attempt-page-module-scss-module__k1PAbq__high",
  "kpiCard": "stains-attempt-page-module-scss-module__k1PAbq__kpiCard",
  "kpiEmptyCard": "stains-attempt-page-module-scss-module__k1PAbq__kpiEmptyCard",
  "kpiEmptyIcon": "stains-attempt-page-module-scss-module__k1PAbq__kpiEmptyIcon",
  "kpiEmptySub": "stains-attempt-page-module-scss-module__k1PAbq__kpiEmptySub",
  "kpiEmptyTitle": "stains-attempt-page-module-scss-module__k1PAbq__kpiEmptyTitle",
  "kpiLabel": "stains-attempt-page-module-scss-module__k1PAbq__kpiLabel",
  "kpiRow": "stains-attempt-page-module-scss-module__k1PAbq__kpiRow",
  "kpiSub": "stains-attempt-page-module-scss-module__k1PAbq__kpiSub",
  "kpiValue": "stains-attempt-page-module-scss-module__k1PAbq__kpiValue",
  "legend": "stains-attempt-page-module-scss-module__k1PAbq__legend",
  "legendDot": "stains-attempt-page-module-scss-module__k1PAbq__legendDot",
  "legendItem": "stains-attempt-page-module-scss-module__k1PAbq__legendItem",
  "loaderCard": "stains-attempt-page-module-scss-module__k1PAbq__loaderCard",
  "loaderSpin": "stains-attempt-page-module-scss-module__k1PAbq__loaderSpin",
  "loaderSpinner": "stains-attempt-page-module-scss-module__k1PAbq__loaderSpinner",
  "low": "stains-attempt-page-module-scss-module__k1PAbq__low",
  "main": "stains-attempt-page-module-scss-module__k1PAbq__main",
  "maxAttemptBadge": "stains-attempt-page-module-scss-module__k1PAbq__maxAttemptBadge",
  "medium": "stains-attempt-page-module-scss-module__k1PAbq__medium",
  "miniBar": "stains-attempt-page-module-scss-module__k1PAbq__miniBar",
  "modal": "stains-attempt-page-module-scss-module__k1PAbq__modal",
  "modalBody": "stains-attempt-page-module-scss-module__k1PAbq__modalBody",
  "modalClose": "stains-attempt-page-module-scss-module__k1PAbq__modalClose",
  "modalFilterBtn": "stains-attempt-page-module-scss-module__k1PAbq__modalFilterBtn",
  "modalFilters": "stains-attempt-page-module-scss-module__k1PAbq__modalFilters",
  "modalFiltersLabel": "stains-attempt-page-module-scss-module__k1PAbq__modalFiltersLabel",
  "modalFooter": "stains-attempt-page-module-scss-module__k1PAbq__modalFooter",
  "modalHeader": "stains-attempt-page-module-scss-module__k1PAbq__modalHeader",
  "modalOverlay": "stains-attempt-page-module-scss-module__k1PAbq__modalOverlay",
  "modalPagination": "stains-attempt-page-module-scss-module__k1PAbq__modalPagination",
  "modalSub": "stains-attempt-page-module-scss-module__k1PAbq__modalSub",
  "modalTable": "stains-attempt-page-module-scss-module__k1PAbq__modalTable",
  "next": "stains-attempt-page-module-scss-module__k1PAbq__next",
  "noBarcodeIcon": "stains-attempt-page-module-scss-module__k1PAbq__noBarcodeIcon",
  "noRecords": "stains-attempt-page-module-scss-module__k1PAbq__noRecords",
  "numText": "stains-attempt-page-module-scss-module__k1PAbq__numText",
  "ofTotal": "stains-attempt-page-module-scss-module__k1PAbq__ofTotal",
  "open": "stains-attempt-page-module-scss-module__k1PAbq__open",
  "outcomeBadge": "stains-attempt-page-module-scss-module__k1PAbq__outcomeBadge",
  "pageFooter": "stains-attempt-page-module-scss-module__k1PAbq__pageFooter",
  "pageLoader": "stains-attempt-page-module-scss-module__k1PAbq__pageLoader",
  "pctBarContainer": "stains-attempt-page-module-scss-module__k1PAbq__pctBarContainer",
  "pctText": "stains-attempt-page-module-scss-module__k1PAbq__pctText",
  "pending": "stains-attempt-page-module-scss-module__k1PAbq__pending",
  "purple": "stains-attempt-page-module-scss-module__k1PAbq__purple",
  "quickBtn": "stains-attempt-page-module-scss-module__k1PAbq__quickBtn",
  "quickRanges": "stains-attempt-page-module-scss-module__k1PAbq__quickRanges",
  "red": "stains-attempt-page-module-scss-module__k1PAbq__red",
  "rowIndexCell": "stains-attempt-page-module-scss-module__k1PAbq__rowIndexCell",
  "sectionTitle": "stains-attempt-page-module-scss-module__k1PAbq__sectionTitle",
  "skuBody": "stains-attempt-page-module-scss-module__k1PAbq__skuBody",
  "skuCatBtn": "stains-attempt-page-module-scss-module__k1PAbq__skuCatBtn",
  "skuCatFilters": "stains-attempt-page-module-scss-module__k1PAbq__skuCatFilters",
  "skuCatTag": "stains-attempt-page-module-scss-module__k1PAbq__skuCatTag",
  "skuChevron": "stains-attempt-page-module-scss-module__k1PAbq__skuChevron",
  "skuCode": "stains-attempt-page-module-scss-module__k1PAbq__skuCode",
  "skuContainer": "stains-attempt-page-module-scss-module__k1PAbq__skuContainer",
  "skuCountBadge": "stains-attempt-page-module-scss-module__k1PAbq__skuCountBadge",
  "skuHeader": "stains-attempt-page-module-scss-module__k1PAbq__skuHeader",
  "skuProduct": "stains-attempt-page-module-scss-module__k1PAbq__skuProduct",
  "skuSearch": "stains-attempt-page-module-scss-module__k1PAbq__skuSearch",
  "skuShowMore": "stains-attempt-page-module-scss-module__k1PAbq__skuShowMore",
  "skuTable": "stains-attempt-page-module-scss-module__k1PAbq__skuTable",
  "skuToolbar": "stains-attempt-page-module-scss-module__k1PAbq__skuToolbar",
  "slideIn": "stains-attempt-page-module-scss-module__k1PAbq__slideIn",
  "sortArrow": "stains-attempt-page-module-scss-module__k1PAbq__sortArrow",
  "sortArrowActive": "stains-attempt-page-module-scss-module__k1PAbq__sortArrowActive",
  "sortHint": "stains-attempt-page-module-scss-module__k1PAbq__sortHint",
  "subtitle": "stains-attempt-page-module-scss-module__k1PAbq__subtitle",
  "tableContainer": "stains-attempt-page-module-scss-module__k1PAbq__tableContainer",
  "textContainer": "stains-attempt-page-module-scss-module__k1PAbq__textContainer",
  "topBar": "stains-attempt-page-module-scss-module__k1PAbq__topBar",
  "troubleBar": "stains-attempt-page-module-scss-module__k1PAbq__troubleBar",
  "troubleFill": "stains-attempt-page-module-scss-module__k1PAbq__troubleFill",
  "viewBtn": "stains-attempt-page-module-scss-module__k1PAbq__viewBtn",
});
}),
"[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AttemptBreakdownTable",
    ()=>AttemptBreakdownTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/containers/stains-attempt-page/constants.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/containers/stains-attempt-page/utils.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/containers/stains-attempt-page/stains-attempt-page.module.scss [client] (css module)");
;
;
;
;
function AttemptBreakdownTable({ rows, allRows, loading, totalEntered, footerEntered, footerCloset, footerToNext, footerSuccessRate, footerFailRate, footerResolvedRate, onOpenAttempt }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].tableContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                children: "Attempt Breakdown Table"
            }, void 0, false, {
                fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].detailTable,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    children: "#"
                                }, void 0, false, {
                                    fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    children: "Attempt"
                                }, void 0, false, {
                                    fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    children: "Barcodes Entered"
                                }, void 0, false, {
                                    fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    children: "Sent to Closet ✓"
                                }, void 0, false, {
                                    fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    children: "Success Rate"
                                }, void 0, false, {
                                    fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    children: "Failed → Next Attempt"
                                }, void 0, false, {
                                    fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    children: "Fail Rate"
                                }, void 0, false, {
                                    fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    children: "Cumulative Success"
                                }, void 0, false, {
                                    fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {}, void 0, false, {
                                    fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: [
                            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 9,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].noRecords,
                                    children: "Loading dashboard report..."
                                }, void 0, false, {
                                    fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                    lineNumber: 52,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this),
                            rows.map((row)=>{
                                const color = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["ATTEMPT_COLORS"][row.attempt - 1] || '#6B7280';
                                const cumSource = allRows ?? rows;
                                const cumSuccess = cumSource.filter((r)=>r.attempt <= row.attempt).reduce((s, r)=>s + r.toCloset, 0);
                                const successRate = row.entered ? row.toCloset / row.entered : 0;
                                const failRate = row.entered ? row.toNext / row.entered : 0;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    onClick: ()=>onOpenAttempt(row.attempt, row.entered, row.toCloset, row.toNext),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].attemptBadge,
                                                style: {
                                                    background: color
                                                },
                                                children: row.attempt
                                            }, void 0, false, {
                                                fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                                lineNumber: 63,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                            lineNumber: 63,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                fontWeight: 600
                                            },
                                            children: [
                                                "Attempt ",
                                                row.attempt
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                            lineNumber: 64,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].numText,
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fmt"])(row.entered)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].ofTotal,
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["pct"])(row.entered, totalEntered),
                                                        " of total"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                            lineNumber: 65,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].pctBarContainer,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].miniBar,
                                                        style: {
                                                            width: Math.round(successRate * 80),
                                                            background: '#22c55e'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].numText,
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fmt"])(row.toCloset)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                                        lineNumber: 72,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                                lineNumber: 70,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                            lineNumber: 69,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                color: '#15803d',
                                                fontWeight: 700
                                            },
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["pct"])(row.toCloset, row.entered)
                                        }, void 0, false, {
                                            fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                            lineNumber: 75,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: row.toNext > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].pctBarContainer,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].miniBar,
                                                        style: {
                                                            width: Math.round(failRate * 80),
                                                            background: '#ef4444'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].numText,
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fmt"])(row.toNext)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                                lineNumber: 78,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].dashText,
                                                children: "—"
                                            }, void 0, false, {
                                                fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                                lineNumber: 82,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                            lineNumber: 76,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: failRate > 0.4 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].failRateHigh : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].failRateNorm,
                                            children: row.toNext > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["pct"])(row.toNext, row.entered) : '—'
                                        }, void 0, false, {
                                            fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                            lineNumber: 84,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].pctBarContainer,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].miniBar,
                                                        style: {
                                                            width: totalEntered ? Math.round(cumSuccess / totalEntered * 80) : 0,
                                                            background: '#3b82f6'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].numText,
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fmt"])(cumSuccess)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].pctText,
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["pct"])(cumSuccess, totalEntered)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                                lineNumber: 88,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                            lineNumber: 87,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].viewBtn,
                                                children: "🔍 View"
                                            }, void 0, false, {
                                                fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                                lineNumber: 94,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                            lineNumber: 94,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, row.attempt, true, {
                                    fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
                        children: totalEntered === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                colSpan: 9,
                                style: {
                                    textAlign: 'center',
                                    padding: '20px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].noBarcodeIcon,
                                        children: "📭"
                                    }, void 0, false, {
                                        fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                        lineNumber: 103,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '16px',
                                            fontWeight: '600',
                                            marginBottom: '8px'
                                        },
                                        children: "No barcodes reported in this date range"
                                    }, void 0, false, {
                                        fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                        lineNumber: 106,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '14px',
                                            color: '#6b7280'
                                        },
                                        children: "Adjust the dates or check that warehouse inspection scans have synced to Banjo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                        lineNumber: 109,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                lineNumber: 102,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                            lineNumber: 101,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 2,
                                    children: "TOTAL"
                                }, void 0, false, {
                                    fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                    lineNumber: 116,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fmt"])(footerEntered)
                                }, void 0, false, {
                                    fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fmt"])(footerCloset)
                                }, void 0, false, {
                                    fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    style: {
                                        color: '#15803d'
                                    },
                                    children: [
                                        footerSuccessRate.toFixed(1),
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                    lineNumber: 119,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fmt"])(footerToNext)
                                }, void 0, false, {
                                    fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                    lineNumber: 120,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    style: {
                                        color: '#b91c1c'
                                    },
                                    children: [
                                        footerFailRate.toFixed(1),
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 2,
                                    children: [
                                        footerResolvedRate.toFixed(1),
                                        "% resolved"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                                    lineNumber: 122,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                            lineNumber: 115,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c = AttemptBreakdownTable;
var _c;
__turbopack_context__.k.register(_c, "AttemptBreakdownTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/containers/stains-attempt-page/components/attempt-filter-bar.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AttemptFilterBar",
    ()=>AttemptFilterBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/containers/stains-attempt-page/utils.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/containers/stains-attempt-page/stains-attempt-page.module.scss [client] (css module)");
;
;
;
function buildFilterNote(selectedAttempt, funnelData) {
    if (selectedAttempt === 'all') {
        return 'Showing all attempts · full KPI summary';
    }
    const row = funnelData.find((r)=>r.attempt === selectedAttempt);
    if (!row) return '';
    return `Attempt ${selectedAttempt} · ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fmt"])(row.entered)} entered · ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fmt"])(row.toCloset)} to closet · ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fmt"])(row.toNext)} failed`;
}
function AttemptFilterBar({ funnelData, selectedAttempt, onAttemptChange }) {
    if (!funnelData.length) return null;
    const allEntered = funnelData[0]?.entered ?? 0;
    function handleChange(e) {
        const val = e.target.value;
        onAttemptChange(val === 'all' ? 'all' : Number(val));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].attemptFilterBar,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].attemptFilterLabel,
                children: "Attempt Filter:"
            }, void 0, false, {
                fileName: "[project]/src/containers/stains-attempt-page/components/attempt-filter-bar.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].attemptSelect,
                value: selectedAttempt === 'all' ? 'all' : selectedAttempt,
                onChange: handleChange,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "all",
                        children: [
                            "All Attempts (",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fmt"])(allEntered),
                            " barcodes)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/containers/stains-attempt-page/components/attempt-filter-bar.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    funnelData.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: row.attempt,
                            children: [
                                "Attempt ",
                                row.attempt,
                                " — ",
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fmt"])(row.entered),
                                " barcodes entered"
                            ]
                        }, row.attempt, true, {
                            fileName: "[project]/src/containers/stains-attempt-page/components/attempt-filter-bar.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/containers/stains-attempt-page/components/attempt-filter-bar.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].attemptFilterNote,
                children: buildFilterNote(selectedAttempt, funnelData)
            }, void 0, false, {
                fileName: "[project]/src/containers/stains-attempt-page/components/attempt-filter-bar.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/containers/stains-attempt-page/components/attempt-filter-bar.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c = AttemptFilterBar;
var _c;
__turbopack_context__.k.register(_c, "AttemptFilterBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BarcodeDetailModal",
    ()=>BarcodeDetailModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/containers/stains-attempt-page/constants.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/containers/stains-attempt-page/utils.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/containers/stains-attempt-page/stains-attempt-page.module.scss [client] (css module)");
;
;
;
;
function BarcodeDetailModal({ open, title, subTitle, loading, error, filter, barcodes, visibleBarcodes, modalAttemptNum, modalStartIndex, modalShowingText, currentPage, totalPages, onClose, onFilterChange, onPageChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].modalOverlay} ${open ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].open : ''}`,
        onClick: (e)=>{
            if (e.target === e.currentTarget) onClose();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].modal,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].modalHeader,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].modalSub,
                                    children: subTitle
                                }, void 0, false, {
                                    fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].modalClose,
                            onClick: onClose,
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].modalFilters,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].modalFiltersLabel,
                            children: "Filter:"
                        }, void 0, false, {
                            fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        [
                            'all',
                            'closet',
                            'failed'
                        ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].modalFilterBtn} ${filter === f ? f === 'all' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].activeAll : f === 'closet' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].activeCloset : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].activeFailed : ''}`,
                                onClick: ()=>onFilterChange(f),
                                disabled: loading,
                                children: f === 'all' ? 'All' : f === 'closet' ? '✓ Sent to Closet' : '✗ Failed / Next Attempt'
                            }, f, false, {
                                fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].modalBody,
                    children: [
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].apiStatus,
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                            lineNumber: 74,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].modalTable,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "#"
                                            }, void 0, false, {
                                                fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                                                lineNumber: 78,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Barcode"
                                            }, void 0, false, {
                                                fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                                                lineNumber: 78,
                                                columnNumber: 27
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Attempt"
                                            }, void 0, false, {
                                                fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                                                lineNumber: 78,
                                                columnNumber: 43
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Reported Date"
                                            }, void 0, false, {
                                                fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                                                lineNumber: 79,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Reported Time"
                                            }, void 0, false, {
                                                fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                                                lineNumber: 79,
                                                columnNumber: 39
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Reported By"
                                            }, void 0, false, {
                                                fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                                                lineNumber: 80,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Process Point"
                                            }, void 0, false, {
                                                fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                                                lineNumber: 80,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Outcome"
                                            }, void 0, false, {
                                                fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                                                lineNumber: 80,
                                                columnNumber: 59
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            colSpan: 8,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].noRecords,
                                            children: "Loading barcodes..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                                            lineNumber: 85,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                                        lineNumber: 85,
                                        columnNumber: 17
                                    }, this) : barcodes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            colSpan: 8,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].noRecords,
                                            children: "No records"
                                        }, void 0, false, {
                                            fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                                            lineNumber: 87,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                                        lineNumber: 87,
                                        columnNumber: 17
                                    }, this) : visibleBarcodes.map((barcode, idx)=>{
                                        const badgeCls = barcode.outcome === 'closet' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].closet : barcode.outcome === 'failed' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].failed : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].pending;
                                        const displayAttempt = barcode.attempt || (typeof modalAttemptNum === 'number' ? modalAttemptNum : undefined);
                                        const color = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["ATTEMPT_COLORS"][displayAttempt ? Math.min(displayAttempt - 1, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["ATTEMPT_COLORS"].length - 1) : 0];
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].rowIndexCell,
                                                    children: modalStartIndex + idx + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].barcodeMono,
                                                        children: barcode.barcode
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].attemptBadge,
                                                        style: {
                                                            background: color,
                                                            width: 24,
                                                            height: 24,
                                                            fontSize: 12
                                                        },
                                                        children: displayAttempt || '?'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        fontSize: 12,
                                                        color: '#555'
                                                    },
                                                    children: barcode.reportedDate || '-'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        fontSize: 12,
                                                        color: '#555'
                                                    },
                                                    children: barcode.reportedTime || '-'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        fontSize: 12
                                                    },
                                                    children: barcode.reportedBy
                                                }, void 0, false, {
                                                    fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        fontSize: 12
                                                    },
                                                    children: barcode.processPoint
                                                }, void 0, false, {
                                                    fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].outcomeBadge} ${badgeCls}`,
                                                        children: barcode.outcome === 'closet' ? '✓ Closet' : barcode.outcome === 'failed' && displayAttempt ? `× Attempt ${displayAttempt + 1}` : barcode.outcomeLabel || '-'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                                            lineNumber: 94,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].modalFooter,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: modalShowingText
                        }, void 0, false, {
                            fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this),
                        totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].modalPagination,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>onPageChange((page)=>Math.max(1, page - 1)),
                                    disabled: currentPage === 1,
                                    children: "‹ Prev"
                                }, void 0, false, {
                                    fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                                    lineNumber: 125,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Page ",
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fmt"])(currentPage),
                                        " / ",
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fmt"])(totalPages)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                                    lineNumber: 132,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>onPageChange((page)=>Math.min(totalPages, page + 1)),
                                    disabled: currentPage === totalPages,
                                    children: "Next ›"
                                }, void 0, false, {
                                    fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                            lineNumber: 124,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c = BarcodeDetailModal;
var _c;
__turbopack_context__.k.register(_c, "BarcodeDetailModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/containers/stains-attempt-page/components/dashboard-loader.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardLoader",
    ()=>DashboardLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/containers/stains-attempt-page/stains-attempt-page.module.scss [client] (css module)");
;
;
function DashboardLoader({ loading }) {
    if (!loading) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].pageLoader,
        role: "status",
        "aria-live": "polite",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].loaderCard,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].loaderSpinner
                }, void 0, false, {
                    fileName: "[project]/src/containers/stains-attempt-page/components/dashboard-loader.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Loading stains dashboard..."
                }, void 0, false, {
                    fileName: "[project]/src/containers/stains-attempt-page/components/dashboard-loader.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/containers/stains-attempt-page/components/dashboard-loader.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/containers/stains-attempt-page/components/dashboard-loader.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = DashboardLoader;
var _c;
__turbopack_context__.k.register(_c, "DashboardLoader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/containers/stains-attempt-page/components/funnel-flow.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FunnelFlow",
    ()=>FunnelFlow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/containers/stains-attempt-page/constants.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/containers/stains-attempt-page/utils.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/containers/stains-attempt-page/stains-attempt-page.module.scss [client] (css module)");
;
;
;
;
;
function FunnelFlow({ rows }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].funnelContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                children: "Attempt Funnel Flow"
            }, void 0, false, {
                fileName: "[project]/src/containers/stains-attempt-page/components/funnel-flow.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].legend,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].legendItem,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].legendDot,
                                style: {
                                    background: '#3b82f6'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/containers/stains-attempt-page/components/funnel-flow.tsx",
                                lineNumber: 16,
                                columnNumber: 44
                            }, this),
                            " Entered Attempt"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/containers/stains-attempt-page/components/funnel-flow.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].legendItem,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].legendDot,
                                style: {
                                    background: '#22c55e'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/containers/stains-attempt-page/components/funnel-flow.tsx",
                                lineNumber: 17,
                                columnNumber: 44
                            }, this),
                            " Sent to Closet ✓ (cleaned)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/containers/stains-attempt-page/components/funnel-flow.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].legendItem,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].legendDot,
                                style: {
                                    background: '#ef4444'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/containers/stains-attempt-page/components/funnel-flow.tsx",
                                lineNumber: 18,
                                columnNumber: 44
                            }, this),
                            " Failed → Next Attempt"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/containers/stains-attempt-page/components/funnel-flow.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/containers/stains-attempt-page/components/funnel-flow.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            rows.map((row, i)=>{
                const maxEnt = Math.max(...rows.map((r)=>r.entered), 1);
                const entPct = (row.entered / maxEnt * 100).toFixed(1);
                const closetPct = (row.toCloset / maxEnt * 100).toFixed(1);
                const nextPct = (row.toNext / maxEnt * 100).toFixed(1);
                const color = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["ATTEMPT_COLORS"][row.attempt - 1] || '#6B7280';
                const isLast = i === rows.length - 1;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].funnelRow,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].funnelAttemptLabel,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].attemptBadge,
                                            style: {
                                                background: color
                                            },
                                            children: row.attempt
                                        }, void 0, false, {
                                            fileName: "[project]/src/containers/stains-attempt-page/components/funnel-flow.tsx",
                                            lineNumber: 32,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].attemptText,
                                            children: [
                                                "Attempt ",
                                                row.attempt
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/containers/stains-attempt-page/components/funnel-flow.tsx",
                                            lineNumber: 33,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/containers/stains-attempt-page/components/funnel-flow.tsx",
                                    lineNumber: 31,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].funnelBarsCol,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].barLine,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].barTrack,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].barFill} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].entry}`,
                                                        style: {
                                                            width: `${entPct}%`
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].barFillText,
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fmt"])(row.entered),
                                                                " entered"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/containers/stains-attempt-page/components/funnel-flow.tsx",
                                                            lineNumber: 39,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/containers/stains-attempt-page/components/funnel-flow.tsx",
                                                        lineNumber: 38,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/containers/stains-attempt-page/components/funnel-flow.tsx",
                                                    lineNumber: 37,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].barTag} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].entry}`,
                                                    children: [
                                                        "▶ ",
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fmt"])(row.entered),
                                                        " barcodes"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/containers/stains-attempt-page/components/funnel-flow.tsx",
                                                    lineNumber: 42,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/containers/stains-attempt-page/components/funnel-flow.tsx",
                                            lineNumber: 36,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].barLine,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].arrowIcon,
                                                    children: "↳"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/containers/stains-attempt-page/components/funnel-flow.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].barTrack,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].barFill} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].green}`,
                                                        style: {
                                                            width: `${closetPct}%`
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].barFillText,
                                                            children: row.toCloset >= 1000 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fmt"])(row.toCloset) : row.toCloset
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/containers/stains-attempt-page/components/funnel-flow.tsx",
                                                            lineNumber: 48,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/containers/stains-attempt-page/components/funnel-flow.tsx",
                                                        lineNumber: 47,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/containers/stains-attempt-page/components/funnel-flow.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].barTag} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].closet}`,
                                                    children: [
                                                        "✓ ",
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fmt"])(row.toCloset),
                                                        " to closet (",
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["pct"])(row.toCloset, row.entered),
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/containers/stains-attempt-page/components/funnel-flow.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/containers/stains-attempt-page/components/funnel-flow.tsx",
                                            lineNumber: 44,
                                            columnNumber: 17
                                        }, this),
                                        (row.toNext > 0 || isLast) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].barLine,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].arrowIcon,
                                                    children: "↳"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/containers/stains-attempt-page/components/funnel-flow.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].barTrack,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].barFill} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].red}`,
                                                        style: {
                                                            width: `${nextPct}%`
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].barFillText,
                                                            children: row.toNext >= 1000 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fmt"])(row.toNext) : row.toNext
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/containers/stains-attempt-page/components/funnel-flow.tsx",
                                                            lineNumber: 60,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/containers/stains-attempt-page/components/funnel-flow.tsx",
                                                        lineNumber: 59,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/containers/stains-attempt-page/components/funnel-flow.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].barTag} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].next}`,
                                                    children: [
                                                        "✗ ",
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fmt"])(row.toNext),
                                                        " ",
                                                        isLast ? 'still in stains' : `to attempt ${row.attempt + 1}`,
                                                        " (",
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["pct"])(row.toNext, row.entered),
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/containers/stains-attempt-page/components/funnel-flow.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/containers/stains-attempt-page/components/funnel-flow.tsx",
                                            lineNumber: 56,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/containers/stains-attempt-page/components/funnel-flow.tsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/containers/stains-attempt-page/components/funnel-flow.tsx",
                            lineNumber: 30,
                            columnNumber: 13
                        }, this),
                        !isLast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].dividerRow
                        }, void 0, false, {
                            fileName: "[project]/src/containers/stains-attempt-page/components/funnel-flow.tsx",
                            lineNumber: 70,
                            columnNumber: 25
                        }, this)
                    ]
                }, row.attempt, true, {
                    fileName: "[project]/src/containers/stains-attempt-page/components/funnel-flow.tsx",
                    lineNumber: 29,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/src/containers/stains-attempt-page/components/funnel-flow.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = FunnelFlow;
var _c;
__turbopack_context__.k.register(_c, "FunnelFlow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/containers/stains-attempt-page/components/kpi-row.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KpiRow",
    ()=>KpiRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/containers/stains-attempt-page/utils.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/containers/stains-attempt-page/stains-attempt-page.module.scss [client] (css module)");
;
;
;
function KpiCard({ label, value, sub, colorClass }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].kpiCard} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"][colorClass]}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].kpiLabel,
                children: label
            }, void 0, false, {
                fileName: "[project]/src/containers/stains-attempt-page/components/kpi-row.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].kpiValue,
                children: value
            }, void 0, false, {
                fileName: "[project]/src/containers/stains-attempt-page/components/kpi-row.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].kpiSub,
                children: sub
            }, void 0, false, {
                fileName: "[project]/src/containers/stains-attempt-page/components/kpi-row.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/containers/stains-attempt-page/components/kpi-row.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = KpiCard;
function KpiRow({ selectedAttempt, funnelData, totalEntered, totalCloset, sentToClosetRate, multiAttempt, stillInStains, avgAttempts, skuData }) {
    const hasData = totalEntered > 0 || totalCloset > 0 || multiAttempt > 0 || stillInStains > 0;
    if (!hasData && skuData.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].kpiRow,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].dateRangeAlert,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].alertIcon,
                        children: "⚠"
                    }, void 0, false, {
                        fileName: "[project]/src/containers/stains-attempt-page/components/kpi-row.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].alertContent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].alertTitle,
                                children: "Invalid date range"
                            }, void 0, false, {
                                fileName: "[project]/src/containers/stains-attempt-page/components/kpi-row.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].alertMessage,
                                children: "Please ensure the end date is on or after the start date before running the report."
                            }, void 0, false, {
                                fileName: "[project]/src/containers/stains-attempt-page/components/kpi-row.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/containers/stains-attempt-page/components/kpi-row.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].alertClose,
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/src/containers/stains-attempt-page/components/kpi-row.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/containers/stains-attempt-page/components/kpi-row.tsx",
                lineNumber: 50,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/containers/stains-attempt-page/components/kpi-row.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this);
    }
    if (!hasData) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].kpiRow,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].kpiCard} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].kpiEmptyCard}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].kpiEmptyIcon,
                        children: "📊"
                    }, void 0, false, {
                        fileName: "[project]/src/containers/stains-attempt-page/components/kpi-row.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].kpiEmptyTitle,
                        children: "No data for this range"
                    }, void 0, false, {
                        fileName: "[project]/src/containers/stains-attempt-page/components/kpi-row.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/containers/stains-attempt-page/components/kpi-row.tsx",
                lineNumber: 65,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/containers/stains-attempt-page/components/kpi-row.tsx",
            lineNumber: 64,
            columnNumber: 7
        }, this);
    }
    if (selectedAttempt === 'all') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].kpiRow,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                    label: "Total to Attempt 1",
                    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fmt"])(totalEntered),
                    sub: "barcodes in date range",
                    colorClass: "blue"
                }, void 0, false, {
                    fileName: "[project]/src/containers/stains-attempt-page/components/kpi-row.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                    label: "Sent to Closet",
                    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fmt"])(totalCloset),
                    sub: `${sentToClosetRate.toFixed(1)}% overall success`,
                    colorClass: "green"
                }, void 0, false, {
                    fileName: "[project]/src/containers/stains-attempt-page/components/kpi-row.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                    label: "Multi-Attempt",
                    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fmt"])(multiAttempt),
                    sub: "needed 2+ cleaning cycles",
                    colorClass: "amber"
                }, void 0, false, {
                    fileName: "[project]/src/containers/stains-attempt-page/components/kpi-row.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                    label: "Still in Stains",
                    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fmt"])(stillInStains),
                    sub: "not yet resolved",
                    colorClass: "red"
                }, void 0, false, {
                    fileName: "[project]/src/containers/stains-attempt-page/components/kpi-row.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                    label: "Avg Attempts (clean)",
                    value: avgAttempts.toFixed(2),
                    sub: "per barcode that reached closet",
                    colorClass: "purple"
                }, void 0, false, {
                    fileName: "[project]/src/containers/stains-attempt-page/components/kpi-row.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/containers/stains-attempt-page/components/kpi-row.tsx",
            lineNumber: 75,
            columnNumber: 7
        }, this);
    }
    const row = funnelData.find((r)=>r.attempt === selectedAttempt);
    if (!row) return null;
    const lastRow = funnelData[funnelData.length - 1];
    const isLastAttempt = row.attempt === lastRow?.attempt;
    const nextRow = funnelData.find((r)=>r.attempt === selectedAttempt + 1);
    const perAttemptMulti = nextRow?.entered ?? 0;
    const subtree = funnelData.filter((r)=>r.attempt >= selectedAttempt);
    const subtreeCloset = subtree.reduce((s, r)=>s + r.toCloset, 0);
    const subtreeAvgAttempts = subtreeCloset > 0 ? subtree.reduce((s, r)=>s + r.toCloset * r.attempt, 0) / subtreeCloset : 0;
    const perAttemptStill = row.toNext;
    const stillSub = isLastAttempt ? 'not yet resolved · still in stains dept' : `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["pct"])(perAttemptStill, row.entered)} of cohort · moved to Attempt ${selectedAttempt + 1}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].kpiRow,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                label: `Entered Attempt ${selectedAttempt}`,
                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fmt"])(row.entered),
                sub: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["pct"])(row.entered, totalEntered)} of all barcodes in range`,
                colorClass: "blue"
            }, void 0, false, {
                fileName: "[project]/src/containers/stains-attempt-page/components/kpi-row.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                label: "Sent to Closet",
                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fmt"])(row.toCloset),
                sub: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["pct"])(row.toCloset, row.entered)} cleaned at this attempt`,
                colorClass: "green"
            }, void 0, false, {
                fileName: "[project]/src/containers/stains-attempt-page/components/kpi-row.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                label: "Multi-Attempt",
                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fmt"])(perAttemptMulti),
                sub: perAttemptMulti ? `continued to Attempt ${selectedAttempt + 1}+` : 'none continued',
                colorClass: "amber"
            }, void 0, false, {
                fileName: "[project]/src/containers/stains-attempt-page/components/kpi-row.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                label: "Still in Stains",
                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fmt"])(perAttemptStill),
                sub: stillSub,
                colorClass: "red"
            }, void 0, false, {
                fileName: "[project]/src/containers/stains-attempt-page/components/kpi-row.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                label: "Avg Attempts (clean)",
                value: subtreeAvgAttempts.toFixed(2),
                sub: "per barcode that reached closet",
                colorClass: "purple"
            }, void 0, false, {
                fileName: "[project]/src/containers/stains-attempt-page/components/kpi-row.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/containers/stains-attempt-page/components/kpi-row.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
_c1 = KpiRow;
var _c, _c1;
__turbopack_context__.k.register(_c, "KpiCard");
__turbopack_context__.k.register(_c1, "KpiRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/containers/stains-attempt-page/components/page-header.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageHeader",
    ()=>PageHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/containers/stains-attempt-page/stains-attempt-page.module.scss [client] (css module)");
;
;
function PageHeader({ hasError }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].topBar,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].brand,
                    children: "Stains Attempt Funnel"
                }, void 0, false, {
                    fileName: "[project]/src/containers/stains-attempt-page/components/page-header.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].subtitle,
                    children: "Cleaning performance by attempt level"
                }, void 0, false, {
                    fileName: "[project]/src/containers/stains-attempt-page/components/page-header.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/containers/stains-attempt-page/components/page-header.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/containers/stains-attempt-page/components/page-header.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = PageHeader;
var _c;
__turbopack_context__.k.register(_c, "PageHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/containers/stains-attempt-page/components/report-controls.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReportControls",
    ()=>ReportControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/containers/stains-attempt-page/stains-attempt-page.module.scss [client] (css module)");
;
;
function ReportControls({ startDate, endDate, activeRange, loading, dateError, onStartDateChange, onEndDateChange, onRangeChange, onRunReport }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].controlsWrapper,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].controls,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].controlsLabel,
                    children: "Date Range"
                }, void 0, false, {
                    fileName: "[project]/src/containers/stains-attempt-page/components/report-controls.tsx",
                    lineNumber: 29,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "date",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].dateInput,
                    value: startDate,
                    onChange: (e)=>onStartDateChange(e.target.value)
                }, void 0, false, {
                    fileName: "[project]/src/containers/stains-attempt-page/components/report-controls.tsx",
                    lineNumber: 30,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "→"
                }, void 0, false, {
                    fileName: "[project]/src/containers/stains-attempt-page/components/report-controls.tsx",
                    lineNumber: 36,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "date",
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].dateInput} ${dateError ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].dateInputError : ''}`,
                    value: endDate,
                    onChange: (e)=>onEndDateChange(e.target.value)
                }, void 0, false, {
                    fileName: "[project]/src/containers/stains-attempt-page/components/report-controls.tsx",
                    lineNumber: 37,
                    columnNumber: 7
                }, this),
                (dateError || !startDate || !endDate) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].dateErrorMsg,
                    children: !startDate || !endDate ? '⚠ End date must be on or after start date' : '⚠ End date must be on or after start date'
                }, void 0, false, {
                    fileName: "[project]/src/containers/stains-attempt-page/components/report-controls.tsx",
                    lineNumber: 44,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].controlsSep,
                    children: "|"
                }, void 0, false, {
                    fileName: "[project]/src/containers/stains-attempt-page/components/report-controls.tsx",
                    lineNumber: 48,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].quickRanges,
                    children: [
                        7,
                        14,
                        30
                    ].map((days)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].quickBtn} ${activeRange === days ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].active : ''}`,
                            onClick: ()=>onRangeChange(days),
                            children: [
                                "Last ",
                                days,
                                " Days"
                            ]
                        }, days, true, {
                            fileName: "[project]/src/containers/stains-attempt-page/components/report-controls.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/containers/stains-attempt-page/components/report-controls.tsx",
                    lineNumber: 49,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].btnRun,
                    onClick: onRunReport,
                    disabled: loading,
                    children: loading ? 'Running...' : '▶ Run Report'
                }, void 0, false, {
                    fileName: "[project]/src/containers/stains-attempt-page/components/report-controls.tsx",
                    lineNumber: 60,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/containers/stains-attempt-page/components/report-controls.tsx",
            lineNumber: 28,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/containers/stains-attempt-page/components/report-controls.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, this);
}
_c = ReportControls;
var _c;
__turbopack_context__.k.register(_c, "ReportControls");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TroubleSkusTable",
    ()=>TroubleSkusTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/containers/stains-attempt-page/constants.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/containers/stains-attempt-page/utils.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/containers/stains-attempt-page/stains-attempt-page.module.scss [client] (css module)");
;
;
;
;
function TroubleSkusTable({ open, search, category, visibleCount, filteredSkus, allCategories, maxEvents, sort, onToggleOpen, onSearchChange, onCategoryChange, onSort, onShowMore, onOpenSku }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].skuContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].skuHeader,
                onClick: onToggleOpen,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].skuChevron} ${open ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].open : ''}`,
                                children: "▶"
                            }, void 0, false, {
                                fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 15,
                                    fontWeight: 700,
                                    color: '#1a1a2e'
                                },
                                children: "Trouble SKUs"
                            }, void 0, false, {
                                fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].skuCountBadge,
                                children: [
                                    filteredSkus.length,
                                    " SKUs"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 12,
                            color: '#aaa'
                        },
                        children: open ? 'Click to collapse' : 'Click to expand'
                    }, void 0, false, {
                        fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].skuBody,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].skuToolbar,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].skuSearch,
                                type: "text",
                                placeholder: "🔍  Search SKU or product name…",
                                value: search,
                                onChange: (e)=>onSearchChange(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].skuCatFilters,
                                children: allCategories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].skuCatBtn} ${category === cat ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].active : ''}`,
                                        onClick: ()=>onCategoryChange(cat),
                                        children: cat
                                    }, cat, false, {
                                        fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                                        lineNumber: 62,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].sortHint,
                                children: "↕ Click column headers to sort"
                            }, void 0, false, {
                                fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            overflowX: 'auto'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].skuTable,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            [
                                                'sku',
                                                'product',
                                                'category',
                                                'barcodes',
                                                'events',
                                                'maxAttempt',
                                                'avgAttempt'
                                            ].map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    onClick: ()=>onSort(col),
                                                    children: [
                                                        col === 'sku' ? 'SKU' : col === 'product' ? 'Product' : col === 'category' ? 'Category' : col === 'barcodes' ? 'Unique Barcodes' : col === 'events' ? 'Total Stains Events' : col === 'maxAttempt' ? 'Max Attempt' : 'Avg Attempt',
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].sortArrow} ${sort.col === col ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].sortArrowActive : ''}`,
                                                            children: sort.col === col ? sort.dir === -1 ? ' ↓' : ' ↑' : ' ↕'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                                                            lineNumber: 82,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, col, true, {
                                                    fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 21
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                onClick: ()=>onSort('events'),
                                                style: {
                                                    cursor: 'pointer'
                                                },
                                                children: [
                                                    "Trouble Level",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].sortArrow} ${sort.col === 'events' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].sortArrowActive : ''}`,
                                                        children: sort.col === 'events' ? sort.dir === -1 ? ' ↓' : ' ↑' : ' ↕'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                                                lineNumber: 87,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {}, void 0, false, {
                                                fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                                                lineNumber: 93,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                                        lineNumber: 76,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: [
                                        filteredSkus.slice(0, visibleCount).map((sku)=>{
                                            const barWidth = Math.round(sku.events / maxEvents * 80);
                                            const color = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["ATTEMPT_COLORS"][sku.maxAttempt - 1] || '#6B7280';
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                onClick: ()=>onOpenSku(sku),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].skuCode,
                                                            children: sku.sku
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                                                            lineNumber: 103,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].skuProduct,
                                                            children: sku.product
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                                                            lineNumber: 104,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: 'flex',
                                                                flexWrap: 'wrap',
                                                                gap: 4
                                                            },
                                                            children: sku.category.split(/[,/]/).map((cat)=>cat.trim()).filter(Boolean).map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].skuCatTag,
                                                                    children: cat
                                                                }, cat, false, {
                                                                    fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                                                                    lineNumber: 108,
                                                                    columnNumber: 29
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                                                            lineNumber: 106,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: sku.barcodes
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                                                            lineNumber: 112,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: sku.events
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                                                            lineNumber: 113,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].maxAttemptBadge,
                                                            style: {
                                                                background: color
                                                            },
                                                            children: sku.maxAttempt
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                                                            lineNumber: 114,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: sku.avgAttempt.toFixed(1)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].troubleBar,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].troubleFill} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["troubleClassName"])(sku.events, maxEvents, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"])}`,
                                                                    style: {
                                                                        width: barWidth
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                                                                    lineNumber: 118,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: 12
                                                                    },
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["troubleLabel"])(sku.events, maxEvents)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                                                                    lineNumber: 119,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                                                            lineNumber: 117,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].viewBtn,
                                                            children: "🔍 View"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                                                            lineNumber: 122,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, sku.sku, true, {
                                                fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                                                lineNumber: 102,
                                                columnNumber: 21
                                            }, this);
                                        }),
                                        filteredSkus.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                colSpan: 9,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].noRecords,
                                                children: "No SKUs match your search"
                                            }, void 0, false, {
                                                fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                                                lineNumber: 127,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                                            lineNumber: 127,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                            lineNumber: 74,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this),
                    filteredSkus.length > visibleCount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].skuShowMore,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onShowMore,
                            children: "Show more SKUs"
                        }, void 0, false, {
                            fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                            lineNumber: 134,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                        lineNumber: 133,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c = TroubleSkusTable;
var _c;
__turbopack_context__.k.register(_c, "TroubleSkusTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/containers/stains-attempt-page/stains-attempt-page.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StainsFunnel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$stains$2f$services$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/stains/services.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$components$2f$attempt$2d$breakdown$2d$table$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/containers/stains-attempt-page/components/attempt-breakdown-table.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$components$2f$attempt$2d$filter$2d$bar$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/containers/stains-attempt-page/components/attempt-filter-bar.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$components$2f$barcode$2d$detail$2d$modal$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/containers/stains-attempt-page/components/barcode-detail-modal.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$components$2f$dashboard$2d$loader$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/containers/stains-attempt-page/components/dashboard-loader.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$components$2f$funnel$2d$flow$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/containers/stains-attempt-page/components/funnel-flow.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$components$2f$kpi$2d$row$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/containers/stains-attempt-page/components/kpi-row.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$components$2f$page$2d$header$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/containers/stains-attempt-page/components/page-header.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$components$2f$report$2d$controls$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/containers/stains-attempt-page/components/report-controls.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$components$2f$trouble$2d$skus$2d$table$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/containers/stains-attempt-page/components/trouble-skus-table.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/containers/stains-attempt-page/constants.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/containers/stains-attempt-page/utils.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/containers/stains-attempt-page/stains-attempt-page.module.scss [client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
function StainsFunnel() {
    _s();
    const today = new Date();
    const twoWeeksAgo = new Date(today);
    twoWeeksAgo.setDate(today.getDate() - 13);
    const [startDate, setStartDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(twoWeeksAgo.toISOString().split('T')[0]);
    const [endDate, setEndDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(today.toISOString().split('T')[0]);
    const [activeRange, setActiveRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(14);
    const [funnelData, setFunnelData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [dashboardKpis, setDashboardKpis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [attemptTotals, setAttemptTotals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [reportLoading, setReportLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [reportError, setReportError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showDateError, setShowDateError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const datesMissing = !startDate || !endDate;
    const dateError = Boolean(startDate && endDate && endDate < startDate);
    const [skuOpen, setSkuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [skuSearch, setSkuSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [skuCat, setSkuCat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const [skuSort, setSkuSort] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        col: 'events',
        dir: -1
    });
    const [skuVisible, setSkuVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(25);
    const [skuData, setSkuData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedAttempt, setSelectedAttempt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [modalOpen, setModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modalTitle, setModalTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [modalSub, setModalSub] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [modalBarcodes, setModalBarcodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [modalAllBarcodes, setModalAllBarcodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [modalTotal, setModalTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [modalFilter, setModalFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [modalCount, setModalCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [modalPage, setModalPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [modalAttemptNum, setModalAttemptNum] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [modalLoading, setModalLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modalError, setModalError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const allCats = [
        'All',
        ...Array.from(new Set(skuData.flatMap((s)=>s.category.split(/[,/]/).map((c)=>c.trim()).filter(Boolean)))).sort()
    ];
    const maxEvents = Math.max(1, ...skuData.map((s)=>s.events));
    const clearReportData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StainsFunnel.useCallback[clearReportData]": ()=>{
            setFunnelData([]);
            setSkuData([]);
            setDashboardKpis(null);
            setAttemptTotals(null);
            setReportError('');
            setSkuVisible(25);
        }
    }["StainsFunnel.useCallback[clearReportData]"], []);
    const runReport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StainsFunnel.useCallback[runReport]": async ()=>{
            if (datesMissing || dateError) {
                clearReportData();
                setShowDateError(true);
                return;
            }
            setReportLoading(true);
            setReportError('');
            setShowDateError(false);
            try {
                const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$stains$2f$services$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getStainsDashboard"])(startDate, endDate);
                const rows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["normalizeFunnelRows"])(payload);
                setFunnelData(rows);
                setSkuData((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["normalizeSkuRows"])(payload));
                setDashboardKpis((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["normalizeKpis"])(payload));
                setAttemptTotals((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["normalizeAttemptTotals"])(payload));
                setSkuVisible(25);
                setSelectedAttempt('all');
                if (!rows.length) setReportError('Dashboard API returned no attempt rows.');
            } catch (error) {
                console.error(error);
                clearReportData();
            } finally{
                setReportLoading(false);
            }
        }
    }["StainsFunnel.useCallback[runReport]"], [
        startDate,
        endDate,
        datesMissing,
        dateError,
        clearReportData
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StainsFunnel.useEffect": ()=>{
            runReport();
        }
    }["StainsFunnel.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StainsFunnel.useEffect": ()=>{
            const handler = {
                "StainsFunnel.useEffect.handler": (e)=>{
                    if (e.key === 'Escape') setModalOpen(false);
                }
            }["StainsFunnel.useEffect.handler"];
            window.addEventListener('keydown', handler);
            return ({
                "StainsFunnel.useEffect": ()=>window.removeEventListener('keydown', handler)
            })["StainsFunnel.useEffect"];
        }
    }["StainsFunnel.useEffect"], []);
    function setRange(days) {
        const end = new Date();
        const start = new Date();
        start.setDate(end.getDate() - days + 1);
        setStartDate(start.toISOString().split('T')[0]);
        setEndDate(end.toISOString().split('T')[0]);
        setActiveRange(days);
        setShowDateError(false);
    }
    function handleCustomDateChange(startDate, endDate) {
        setStartDate(startDate);
        setEndDate(endDate);
        setActiveRange(null);
        setShowDateError(false);
    }
    const totalEntered = dashboardKpis?.totalToAttempt1 ?? funnelData[0]?.entered ?? 0;
    const totalCloset = dashboardKpis?.sentToCloset ?? funnelData.reduce((s, r)=>s + r.toCloset, 0);
    const stillInStains = dashboardKpis?.stillInStains ?? funnelData[funnelData.length - 1]?.toNext ?? 0;
    const avgAttempts = dashboardKpis?.avgAttemptsPerCleaned ?? (totalCloset > 0 ? funnelData.reduce((s, r)=>s + r.toCloset * r.attempt, 0) / totalCloset : 0);
    const multiAttempt = dashboardKpis?.multiAttempt ?? funnelData.slice(1).reduce((s, r)=>s + r.entered, 0);
    const sentToClosetRate = dashboardKpis?.sentToClosetRate ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["toNumber"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["pct"])(totalCloset, totalEntered).replace('%', ''));
    const footerEntered = attemptTotals?.entered ?? totalEntered;
    const footerCloset = attemptTotals?.toCloset ?? totalCloset;
    const footerToNext = attemptTotals?.toNext ?? stillInStains;
    const footerSuccessRate = attemptTotals?.successRate ?? sentToClosetRate;
    const footerFailRate = attemptTotals?.failRate ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["toNumber"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["pct"])(footerToNext, footerEntered).replace('%', ''));
    const footerResolvedRate = attemptTotals?.cumulativeSuccessRate ?? sentToClosetRate;
    const filteredFunnelData = selectedAttempt === 'all' ? funnelData : funnelData.filter((r)=>r.attempt === selectedAttempt);
    const selectedRow = selectedAttempt !== 'all' ? funnelData.find((r)=>r.attempt === selectedAttempt) : null;
    const displayFooterEntered = selectedRow?.entered ?? footerEntered;
    const displayFooterCloset = selectedRow?.toCloset ?? footerCloset;
    const displayFooterToNext = selectedRow?.toNext ?? footerToNext;
    const displayFooterSuccessRate = selectedRow ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["toNumber"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["pct"])(selectedRow.toCloset, selectedRow.entered).replace('%', '')) : footerSuccessRate;
    const displayFooterFailRate = selectedRow ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["toNumber"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["pct"])(selectedRow.toNext, selectedRow.entered).replace('%', '')) : footerFailRate;
    const displayFooterResolvedRate = selectedRow ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["toNumber"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["pct"])(selectedRow.toCloset, selectedRow.entered).replace('%', '')) : footerResolvedRate;
    const modalTotalPages = Math.max(1, Math.ceil(modalBarcodes.length / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["MODAL_PAGE_SIZE"]));
    const currentModalPage = Math.min(modalPage, modalTotalPages);
    const modalStartIndex = modalBarcodes.length ? (currentModalPage - 1) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["MODAL_PAGE_SIZE"] : 0;
    const visibleModalBarcodes = modalBarcodes.slice(modalStartIndex, modalStartIndex + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["MODAL_PAGE_SIZE"]);
    const modalShowingText = modalBarcodes.length ? `Showing ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fmt"])(modalStartIndex + 1)}-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fmt"])(modalStartIndex + visibleModalBarcodes.length)} of ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fmt"])(modalBarcodes.length)} barcodes` : modalCount || 'Showing 0 barcodes';
    const filteredSkus = skuData.filter((s)=>{
        const term = skuSearch.toLowerCase();
        const attemptOk = selectedAttempt === 'all' || s.maxAttempt >= selectedAttempt;
        return attemptOk && (skuCat === 'All' || s.category.split(/[,/]/).map((c)=>c.trim()).includes(skuCat)) && (!term || s.sku.toLowerCase().includes(term) || s.product.toLowerCase().includes(term));
    }).sort((a, b)=>{
        const av = a[skuSort.col];
        const bv = b[skuSort.col];
        if (typeof av === 'string') return skuSort.dir * av.localeCompare(bv);
        return skuSort.dir * (av - bv);
    });
    function resetModalRows() {
        setModalAllBarcodes([]);
        setModalBarcodes([]);
        setModalTotal(0);
        setModalPage(1);
        setModalCount('');
        setModalError('');
    }
    function applyLocalModalFilter(filter, barcodes = modalAllBarcodes, total = modalTotal) {
        const filtered = filter === 'all' ? barcodes : barcodes.filter((b)=>b.outcome === filter);
        setModalFilter(filter);
        setModalBarcodes(filtered);
        setModalPage(1);
        setModalCount(`Showing ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fmt"])(filtered.length)} of ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fmt"])(total || barcodes.length)} barcodes`);
    }
    const loadModalBarcodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StainsFunnel.useCallback[loadModalBarcodes]": async (source)=>{
            setModalLoading(true);
            setModalError('');
            try {
                const payload = source.type === 'attempt' ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$stains$2f$services$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getStainsBarcodesByAttempt"])(source.attempt, 'all', startDate, endDate) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$stains$2f$services$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getStainsBarcodesBySku"])(source.sku, 'all', startDate, endDate);
                const barcodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["normalizeBarcodes"])(payload);
                const totalFromApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["toNumber"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["firstValue"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["readObj"])(payload), [
                    'total',
                    'count',
                    'total_count',
                    'totalCount'
                ]), barcodes.length);
                const total = totalFromApi || (source.type === 'attempt' ? source.entered : source.total);
                setModalAllBarcodes(barcodes);
                setModalBarcodes(barcodes);
                setModalTotal(total);
                setModalFilter('all');
                setModalPage(1);
                setModalCount(`Showing ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fmt"])(barcodes.length)} of ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fmt"])(total)} barcodes`);
            } catch (error) {
                console.error(error);
                setModalAllBarcodes([]);
                setModalBarcodes([]);
                setModalTotal(0);
                setModalPage(1);
                setModalCount('Showing 0 barcodes');
                setModalError('Barcode API failed. No data to show.');
            } finally{
                setModalLoading(false);
            }
        }
    }["StainsFunnel.useCallback[loadModalBarcodes]"], [
        startDate,
        endDate
    ]);
    function openAttemptModal(attempt, entered, toCloset, toNext) {
        const source = {
            type: 'attempt',
            attempt,
            entered,
            toCloset,
            toNext
        };
        setModalAttemptNum(attempt);
        setModalFilter('all');
        setModalTitle(`Attempt ${attempt} - Barcode Detail`);
        setModalSub(`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fmt"])(entered)} barcodes entered · ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fmt"])(toCloset)} to closet · ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fmt"])(toNext)} failed`);
        resetModalRows();
        setModalOpen(true);
        loadModalBarcodes(source);
    }
    function openSkuModal(sku) {
        const source = {
            type: 'sku',
            sku: sku.sku,
            product: sku.product,
            total: sku.barcodes || sku.events
        };
        setModalAttemptNum('all');
        setModalFilter('all');
        setModalTitle(`${sku.sku} · ${sku.product.toUpperCase()}`);
        setModalSub(`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fmt"])(sku.barcodes)} barcodes · ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fmt"])(sku.events)} total stains events · Max Attempt ${sku.maxAttempt} · Avg ${sku.avgAttempt.toFixed(1)}`);
        resetModalRows();
        setModalOpen(true);
        loadModalBarcodes(source);
    }
    function handleSkuSort(col) {
        setSkuSort((prev)=>prev.col === col ? {
                col,
                dir: prev.dir * -1
            } : {
                col,
                dir: col === 'sku' || col === 'product' || col === 'category' ? 1 : -1
            });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].body,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$components$2f$dashboard$2d$loader$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["DashboardLoader"], {
                loading: reportLoading
            }, void 0, false, {
                fileName: "[project]/src/containers/stains-attempt-page/stains-attempt-page.tsx",
                lineNumber: 277,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$components$2f$page$2d$header$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["PageHeader"], {
                hasError: Boolean(reportError)
            }, void 0, false, {
                fileName: "[project]/src/containers/stains-attempt-page/stains-attempt-page.tsx",
                lineNumber: 278,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$components$2f$report$2d$controls$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["ReportControls"], {
                startDate: startDate,
                endDate: endDate,
                activeRange: activeRange,
                loading: reportLoading,
                dateError: dateError,
                onStartDateChange: (value)=>handleCustomDateChange(value, endDate),
                onEndDateChange: (value)=>handleCustomDateChange(startDate, value),
                onRangeChange: setRange,
                onRunReport: runReport
            }, void 0, false, {
                fileName: "[project]/src/containers/stains-attempt-page/stains-attempt-page.tsx",
                lineNumber: 279,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$components$2f$attempt$2d$filter$2d$bar$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["AttemptFilterBar"], {
                funnelData: funnelData,
                selectedAttempt: selectedAttempt,
                onAttemptChange: setSelectedAttempt
            }, void 0, false, {
                fileName: "[project]/src/containers/stains-attempt-page/stains-attempt-page.tsx",
                lineNumber: 291,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].main,
                children: [
                    reportError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].apiStatus,
                        children: reportError
                    }, void 0, false, {
                        fileName: "[project]/src/containers/stains-attempt-page/stains-attempt-page.tsx",
                        lineNumber: 298,
                        columnNumber: 25
                    }, this),
                    showDateError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].dateRangeAlert,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].alertIcon,
                                children: "⚠"
                            }, void 0, false, {
                                fileName: "[project]/src/containers/stains-attempt-page/stains-attempt-page.tsx",
                                lineNumber: 301,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].alertContent,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].alertTitle,
                                        children: datesMissing ? 'Invalid date range' : 'Invalid date range'
                                    }, void 0, false, {
                                        fileName: "[project]/src/containers/stains-attempt-page/stains-attempt-page.tsx",
                                        lineNumber: 303,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].alertMessage,
                                        children: datesMissing ? 'Please ensure the end date is on or after the start date before running the report.' : 'Please ensure the end date is on or after the start date before running the report.'
                                    }, void 0, false, {
                                        fileName: "[project]/src/containers/stains-attempt-page/stains-attempt-page.tsx",
                                        lineNumber: 304,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/containers/stains-attempt-page/stains-attempt-page.tsx",
                                lineNumber: 302,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].alertClose,
                                onClick: ()=>setShowDateError(false),
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/containers/stains-attempt-page/stains-attempt-page.tsx",
                                lineNumber: 310,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/containers/stains-attempt-page/stains-attempt-page.tsx",
                        lineNumber: 300,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$components$2f$kpi$2d$row$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["KpiRow"], {
                        selectedAttempt: selectedAttempt,
                        funnelData: funnelData,
                        totalEntered: totalEntered,
                        totalCloset: totalCloset,
                        sentToClosetRate: sentToClosetRate,
                        multiAttempt: multiAttempt,
                        stillInStains: stillInStains,
                        avgAttempts: avgAttempts,
                        skuData: skuData
                    }, void 0, false, {
                        fileName: "[project]/src/containers/stains-attempt-page/stains-attempt-page.tsx",
                        lineNumber: 314,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$components$2f$attempt$2d$breakdown$2d$table$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["AttemptBreakdownTable"], {
                        rows: filteredFunnelData,
                        allRows: funnelData,
                        loading: reportLoading,
                        totalEntered: totalEntered,
                        footerEntered: displayFooterEntered,
                        footerCloset: displayFooterCloset,
                        footerToNext: displayFooterToNext,
                        footerSuccessRate: displayFooterSuccessRate,
                        footerFailRate: displayFooterFailRate,
                        footerResolvedRate: displayFooterResolvedRate,
                        onOpenAttempt: openAttemptModal
                    }, void 0, false, {
                        fileName: "[project]/src/containers/stains-attempt-page/stains-attempt-page.tsx",
                        lineNumber: 325,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$components$2f$funnel$2d$flow$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["FunnelFlow"], {
                        rows: filteredFunnelData
                    }, void 0, false, {
                        fileName: "[project]/src/containers/stains-attempt-page/stains-attempt-page.tsx",
                        lineNumber: 338,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$components$2f$trouble$2d$skus$2d$table$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TroubleSkusTable"], {
                        open: skuOpen,
                        search: skuSearch,
                        category: skuCat,
                        visibleCount: skuVisible,
                        filteredSkus: filteredSkus,
                        allCategories: allCats,
                        maxEvents: maxEvents,
                        sort: skuSort,
                        onToggleOpen: ()=>setSkuOpen((o)=>!o),
                        onSearchChange: (value)=>{
                            setSkuSearch(value);
                            setSkuVisible(25);
                        },
                        onCategoryChange: (value)=>{
                            setSkuCat(value);
                            setSkuVisible(25);
                        },
                        onSort: handleSkuSort,
                        onShowMore: ()=>setSkuVisible((v)=>v + 25),
                        onOpenSku: openSkuModal
                    }, void 0, false, {
                        fileName: "[project]/src/containers/stains-attempt-page/stains-attempt-page.tsx",
                        lineNumber: 339,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/containers/stains-attempt-page/stains-attempt-page.tsx",
                lineNumber: 297,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$components$2f$barcode$2d$detail$2d$modal$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["BarcodeDetailModal"], {
                open: modalOpen,
                title: modalTitle,
                subTitle: modalSub,
                loading: modalLoading,
                error: modalError,
                filter: modalFilter,
                barcodes: modalBarcodes,
                visibleBarcodes: visibleModalBarcodes,
                modalAttemptNum: modalAttemptNum,
                modalStartIndex: modalStartIndex,
                modalShowingText: modalShowingText,
                currentPage: currentModalPage,
                totalPages: modalTotalPages,
                onClose: ()=>setModalOpen(false),
                onFilterChange: applyLocalModalFilter,
                onPageChange: setModalPage
            }, void 0, false, {
                fileName: "[project]/src/containers/stains-attempt-page/stains-attempt-page.tsx",
                lineNumber: 357,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].pageFooter,
                children: "FashionPass Internal · Stains Attempt Funnel"
            }, void 0, false, {
                fileName: "[project]/src/containers/stains-attempt-page/stains-attempt-page.tsx",
                lineNumber: 376,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/containers/stains-attempt-page/stains-attempt-page.tsx",
        lineNumber: 276,
        columnNumber: 5
    }, this);
}
_s(StainsFunnel, "HCghUxnISEjT3AN3ttULHl9JliI=");
_c = StainsFunnel;
var _c;
__turbopack_context__.k.register(_c, "StainsFunnel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/pages/stains-attempt-page.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layouts$2f$baseLayout$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layouts/baseLayout.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/containers/stains-attempt-page/stains-attempt-page.tsx [client] (ecmascript)");
;
;
;
;
const PageStatus = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                    children: "Stains Attempt Page - Banjo 2.0"
                }, void 0, false, {
                    fileName: "[project]/pages/stains-attempt-page.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/pages/stains-attempt-page.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layouts$2f$baseLayout$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "main_content",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$containers$2f$stains$2d$attempt$2d$page$2f$stains$2d$attempt$2d$page$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/pages/stains-attempt-page.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/pages/stains-attempt-page.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/pages/stains-attempt-page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_c = PageStatus;
const __TURBOPACK__default__export__ = PageStatus;
var _c;
__turbopack_context__.k.register(_c, "PageStatus");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/pages/stains-attempt-page.tsx [client] (ecmascript)\" } [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const PAGE_PATH = "/stains-attempt-page";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_context__.r("[project]/pages/stains-attempt-page.tsx [client] (ecmascript)");
    }
]);
// @ts-expect-error module.hot exists
if (module.hot) {
    // @ts-expect-error module.hot exists
    module.hot.dispose(function() {
        window.__NEXT_P.push([
            PAGE_PATH
        ]);
    });
}
}),
"[hmr-entry]/hmr-entry.js { ENTRY => \"[project]/pages/stains-attempt-page\" }", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.r("[next]/entry/page-loader.ts { PAGE => \"[project]/pages/stains-attempt-page.tsx [client] (ecmascript)\" } [client] (ecmascript)");
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__5a3a9876._.js.map