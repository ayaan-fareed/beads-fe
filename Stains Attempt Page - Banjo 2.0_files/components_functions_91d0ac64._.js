(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/components/functions/customerFunctions.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddAccountCreditsBanjo",
    ()=>AddAccountCreditsBanjo,
    "AddRemoveAttribute",
    ()=>AddRemoveAttribute,
    "AddRemoveAttributeSnoozeCustomer",
    ()=>AddRemoveAttributeSnoozeCustomer,
    "CancelCustomerSubscription",
    ()=>CancelCustomerSubscription,
    "GetNewInvoiceOrdersByCustomer",
    ()=>GetNewInvoiceOrdersByCustomer,
    "UpdatePasswordForBanjo",
    ()=>UpdatePasswordForBanjo,
    "addCarrierOptions",
    ()=>addCarrierOptions,
    "addCustomerPromotion",
    ()=>addCustomerPromotion,
    "addCustomerReferralCode",
    ()=>addCustomerReferralCode,
    "addCustomerShippingAddress",
    ()=>addCustomerShippingAddress,
    "addCustomereManualCancel",
    ()=>addCustomereManualCancel,
    "addRemoveAttributeSnoozeCustomerFromThirdParty",
    ()=>addRemoveAttributeSnoozeCustomerFromThirdParty,
    "addTagToZendeskTicket",
    ()=>addTagToZendeskTicket,
    "addWinbackAttemptInfo",
    ()=>addWinbackAttemptInfo,
    "autoLoginCustomer",
    ()=>autoLoginCustomer,
    "bulkInsert_ThirdPartySoldVendorBarcode",
    ()=>bulkInsert_ThirdPartySoldVendorBarcode,
    "capitalizedPlanName",
    ()=>capitalizedPlanName,
    "changeDefaultCard",
    ()=>changeDefaultCard,
    "chargeCustomer",
    ()=>chargeCustomer,
    "checkCarriersOptions",
    ()=>checkCarriersOptions,
    "checkCustomerPastDue",
    ()=>checkCustomerPastDue,
    "createCustomerSubscription",
    ()=>createCustomerSubscription,
    "deleteCustomerCard",
    ()=>deleteCustomerCard,
    "deleteHoldNotes",
    ()=>deleteHoldNotes,
    "deleteWinbackAttemptInfo",
    ()=>deleteWinbackAttemptInfo,
    "delete_ThirdPartySoldVendor",
    ()=>delete_ThirdPartySoldVendor,
    "editCustomerCard",
    ()=>editCustomerCard,
    "freeUpgradePlan",
    ()=>freeUpgradePlan,
    "getActivationGraphByRange",
    ()=>getActivationGraphByRange,
    "getActivationGraphDefault",
    ()=>getActivationGraphDefault,
    "getActiveCustomers",
    ()=>getActiveCustomers,
    "getAdditionalItemsNoteHistory",
    ()=>getAdditionalItemsNoteHistory,
    "getCreditTypesForBanjo",
    ()=>getCreditTypesForBanjo,
    "getCustomerAccountHistory",
    ()=>getCustomerAccountHistory,
    "getCustomerAddresses",
    ()=>getCustomerAddresses,
    "getCustomerCompplainReport",
    ()=>getCustomerCompplainReport,
    "getCustomerCouponBanjo",
    ()=>getCustomerCouponBanjo,
    "getCustomerCreditPoint",
    ()=>getCustomerCreditPoint,
    "getCustomerInfoByEmail",
    ()=>getCustomerInfoByEmail,
    "getCustomerInvoiceByCustomerId",
    ()=>getCustomerInvoiceByCustomerId,
    "getCustomerLinkedAccount",
    ()=>getCustomerLinkedAccount,
    "getCustomerMonthlyEligibilityByPost",
    ()=>getCustomerMonthlyEligibilityByPost,
    "getCustomerNotificationNotes",
    ()=>getCustomerNotificationNotes,
    "getCustomerReferredByList",
    ()=>getCustomerReferredByList,
    "getCustomerReferredList",
    ()=>getCustomerReferredList,
    "getCustomerReportType",
    ()=>getCustomerReportType,
    "getCustomerRestEmail",
    ()=>getCustomerRestEmail,
    "getCustomerReview",
    ()=>getCustomerReview,
    "getCustomerSpend",
    ()=>getCustomerSpend,
    "getCustomerStripeCard",
    ()=>getCustomerStripeCard,
    "getCustomerStripePayment",
    ()=>getCustomerStripePayment,
    "getCustomerStripeSubscription",
    ()=>getCustomerStripeSubscription,
    "getCustomerSubscriptionPlanDetails",
    ()=>getCustomerSubscriptionPlanDetails,
    "getCustomerUpdatedNotes",
    ()=>getCustomerUpdatedNotes,
    "getFpPlans",
    ()=>getFpPlans,
    "getInvoiceLineItem",
    ()=>getInvoiceLineItem,
    "getMonthlySubLogs",
    ()=>getMonthlySubLogs,
    "getOrderProcessorNoteHistory",
    ()=>getOrderProcessorNoteHistory,
    "getOrdersByCustomerId",
    ()=>getOrdersByCustomerId,
    "getOrdersByCustomerViewId",
    ()=>getOrdersByCustomerViewId,
    "getPendingCustomers",
    ()=>getPendingCustomers,
    "getReferralCodeAndPausedDate",
    ()=>getReferralCodeAndPausedDate,
    "getReviewImagesCount",
    ()=>getReviewImagesCount,
    "getSignupCustomerRecords",
    ()=>getSignupCustomerRecords,
    "getSwapEmails",
    ()=>getSwapEmails,
    "getTexForOrderWithEmail",
    ()=>getTexForOrderWithEmail,
    "getWinbackAttemptInfo",
    ()=>getWinbackAttemptInfo,
    "get_ThirdPartySoldVendor",
    ()=>get_ThirdPartySoldVendor,
    "get_ThirdPartySoldVendorBarcode",
    ()=>get_ThirdPartySoldVendorBarcode,
    "insertCustomerOrderCount",
    ()=>insertCustomerOrderCount,
    "insert_ThirdPartySoldVendor",
    ()=>insert_ThirdPartySoldVendor,
    "insert_ThirdPartySoldVendorBarcode",
    ()=>insert_ThirdPartySoldVendorBarcode,
    "klavioEventEmail",
    ()=>klavioEventEmail,
    "orderUpdateOrderTags",
    ()=>orderUpdateOrderTags,
    "paymentRefund",
    ()=>paymentRefund,
    "removeCustomerReferralCode",
    ()=>removeCustomerReferralCode,
    "runAuthChargeBanjo",
    ()=>runAuthChargeBanjo,
    "updateAdditionalItemTagBanjo",
    ()=>updateAdditionalItemTagBanjo,
    "updateAttributeLog",
    ()=>updateAttributeLog,
    "updateCustomerDefaultAddress",
    ()=>updateCustomerDefaultAddress,
    "updateCustomerDetails",
    ()=>updateCustomerDetails,
    "updateCustomerEmailAndPhone",
    ()=>updateCustomerEmailAndPhone,
    "updateCustomerEntityAttributePauseSchdule",
    ()=>updateCustomerEntityAttributePauseSchdule,
    "updateCustomerMembership",
    ()=>updateCustomerMembership,
    "updateCustomerServiceNotes",
    ()=>updateCustomerServiceNotes,
    "updateCustomerShippingAddress",
    ()=>updateCustomerShippingAddress,
    "updateCustomerSubscription",
    ()=>updateCustomerSubscription,
    "updateCustomerTags",
    ()=>updateCustomerTags,
    "updateFolderNotes",
    ()=>updateFolderNotes,
    "updateProcessorNotes",
    ()=>updateProcessorNotes,
    "updateReturnNotes",
    ()=>updateReturnNotes,
    "updateSwapEmail",
    ()=>updateSwapEmail,
    "updateValidateAddress",
    ()=>updateValidateAddress,
    "updateWinbackAttemptInfo",
    ()=>updateWinbackAttemptInfo,
    "update_ThirdPartySoldVendor",
    ()=>update_ThirdPartySoldVendor,
    "upgradeCustomerPlan",
    ()=>upgradeCustomerPlan
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/functions/globalFunctions.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/globalconfig.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-cookie/dist/js.cookie.mjs [client] (ecmascript)");
;
;
;
const getCustomerInfoByEmail = async (email, dispatch)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Customer/GetCustomerInfoByEmail?Email=' + email, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        if (!data?.success && data.message?.includes("Authentication token expired")) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["checkExpiryToken"])(dispatch, user_token);
        }
        return data;
    });
};
const getCustomerSpend = async (stripeId)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].utility + 'stripe/getcustomerspend?stripe_id=' + stripeId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('getCustomerSpend error:', error);
        return {
            success: false
        };
    }
};
const getCustomerStripePayment = async (stripeId, customerId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + "Stripe/GetCustomerStripePaymentList?stripeid=" + stripeId + "&customerid=" + customerId, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const getCustomerStripeSubscription = async (stripeId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Stripe/GetCustomerStripeSubscription?stripeid=' + stripeId, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const getCustomerStripeCard = async (stripeId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Stripe/GetCustomerStripeCard?stripeid=' + stripeId, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const getOrdersByCustomerId = async (customerId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Customer/GetOrdersByCustomer?customerId=' + customerId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const getInvoiceLineItem = async (invoiceId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Stripe/GetCustomerStripeInvoice?invoiceId=${invoiceId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const getCustomerUpdatedNotes = async (customerId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Customer/GetNotesDetail?customerId=${customerId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const GetNewInvoiceOrdersByCustomer = async (customerId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Customer/GetNewInvoiceOrdersByCustomer?customerId=${customerId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
_c = GetNewInvoiceOrdersByCustomer;
const updateCustomerDetails = async (data)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Customer/UpdateCustomerdetails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(data)
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const updateCustomerEmailAndPhone = async (data)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Customer/UpdateCustomerEmail_PhoneNumber ', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(data)
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const updateCustomerServiceNotes = async (data)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Customer/UpdateServiceNotes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(data)
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const updateProcessorNotes = async (data)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Customer/UpdateProcessorNotes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(data)
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const updateReturnNotes = async (data)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Customer/UpdateReturnNotes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(data)
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const updateFolderNotes = async (data)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Customer/UpdateFolderNotes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(data)
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const getCustomerAccountHistory = async (customerId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Customer/GetAccountCreditsHistoryByCustomer?CustomerId=' + customerId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const checkCustomerPastDue = async (customerId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Customer/GetCustomerPastDue?customerId=' + customerId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const getReviewImagesCount = async (customerId)=>{
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].productReview + 'Review/GetReviewImagesCountByCustomerId?customer_Id=' + customerId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const getMonthlySubLogs = async (email)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Customer/GetMonthlySubscriptionLogsByEmail?Email=' + email, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const updateCustomerTags = async (data)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Customer/UpdateCustomerTagsBanjo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(data)
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const getCreditTypesForBanjo = async (customerId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Customer/GetCreditTypesForBanjo', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const addCarrierOptions = async (data)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Customer/AddCarrierOptions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(data)
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const checkCarriersOptions = async (data)=>{
    // console.log('asasdsas')
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    // return fetch(Gconfig.fpAPI + 'Order/CheckCarrier', {
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Order/CheckCarrier?orderId=${data.orderID}`, {
        // method: 'POST',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const getCustomerAddresses = async (customerId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Customer/GetCustomerShippingAddress?customerId=' + customerId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const getSwapEmails = async (customerId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Customer/Get_Swap_Email_phone_Data?swap_type=1&from_customer_id=${customerId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const getCustomerReferredByList = async (customerId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Customer/GetReferredByList?CustomerId=' + customerId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const getCustomerReferredList = async (customerId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Customer/GetReferredList?CustomerId=' + customerId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const getCustomerLinkedAccount = async (customerId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Customer/GetLinkedAccountsbyEmail?CustomerId=' + customerId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const updateValidateAddress = async (data)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Customer/EditValidateAddress', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(data)
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const updateCustomerDefaultAddress = async (data)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Customer/SetDefaultAddress', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(data)
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const addCustomerShippingAddress = async (data)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Customer/AddShippingAddress', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(data)
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const updateCustomerShippingAddress = async (data)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Customer/UpdateShippingAddress', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(data)
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const addCustomerReferralCode = async (data)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Customer/AddReferralCode', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(data)
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const removeCustomerReferralCode = async (data)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Customer/RemoveReferralCode', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(data)
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const addCustomerPromotion = async (data)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Customer/AddPromotion', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(data)
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const getReferralCodeAndPausedDate = async (customerId, stripe_id)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Stripe/RefferalCodeCount?customer_id=${customerId}&stripeid=${stripe_id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const getCustomerCouponBanjo = (coupon)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Stripe/GetCoupon?couponName=${coupon}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const chargeCustomer = async (data)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Customer/ChargeCustomer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(data)
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const changeDefaultCard = async (data)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Stripe/ChangeDefaultCard', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(data)
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const deleteCustomerCard = async (data)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Stripe/DeleteCard', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(data)
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const getActiveCustomers = ()=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Customer/GetActiveCustomer', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((error)=>{
        console.log(error);
    });
};
const getPendingCustomers = ()=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Customer/GetPendingCustomer', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((error)=>{
        console.log(error);
    });
};
const getCustomerNotificationNotes = (customerId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Customer/GetCustomerHolds?customerId=${customerId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((error)=>{
        console.log(error);
    });
};
// start.split('/')[2]
const getCustomerCompplainReport = (start, end, dateError)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    if (start > end) {
        dateError("Select correct Date");
        setTimeout(()=>{
            dateError("");
        }, 3000);
        return;
    } else {
        return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Customer/CustomerClaimReport?StartRange=${start}&EndRange=${end}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + user_token
            }
        }).then((response)=>response.json()).then((data)=>{
            return data;
        }).catch((error)=>{
            console.log(error);
        });
    }
};
const getCustomerMonthlyEligibilityByPost = (payload, req)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])(req);
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Customer/GetCustomerMonthlyEligibilityByPost', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + 'eyJBdXRob3IiOiJGYXNoaW9uUGFzcyIsImFsZyI6IkhTMjU2In0.e30.oUQGjCS2S_jycg4PZnFK4uQ81DsNFX-N1m81Dfahi6o'
        },
        body: JSON.stringify(payload)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getCustomerReview = (customerId)=>{
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].productReview + `Review/GetReviewImagesByCustomerId?customer_Id=${customerId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((error)=>{
        console.log(error);
    });
};
const getFpPlans = ()=>{
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Stripe/GetFpPlans?name=Fashionpass Plans`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((error)=>{
        console.log(error);
    });
};
const runAuthChargeBanjo = (params)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Customer/RunAuthCharge?customer_id=${params.customerId}&stripe_id=${params.stripeId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((error)=>{
        console.log(error);
    });
};
const getCustomerInvoiceByCustomerId = (customerId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Stripe/GetCustomerInvoicesByCustomerId?customer_id=${customerId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((error)=>{
        console.log(error);
    });
};
const getCustomerRestEmail = (customerEmail)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Customer/RequestPasswordReset?email=${customerEmail}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((error)=>{
        console.log(error);
    });
};
const getCustomerSubscriptionPlanDetails = (customerId, planId, planName)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Stripe/GetSubscriptionDetailsForBanjo?customer_id=${customerId}&name=${planName}&plan_id=${planId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((error)=>{
        console.log(error);
    });
};
const getOrderProcessorNoteHistory = (customerId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Customer/GetOrderProcessorNoteHistoryByCustomerId`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(customerId)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const autoLoginCustomer = (customerInfo)=>{
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `BanjoUser/AutoLoginCustomerFromOldBanjo`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(customerInfo)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const AddAccountCreditsBanjo = (creditDetails)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Customer/AddAccountCreditsBanjo
  `, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(creditDetails)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
_c1 = AddAccountCreditsBanjo;
const paymentRefund = (creditDetails)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Stripe/PaymentRefund
  `, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(creditDetails)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const editCustomerCard = (cardDetails)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Stripe/EditCard
    `, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(cardDetails)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const updateAdditionalItemTagBanjo = (payload)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Customer/UpdateAdditionalItemTagBanjo
    `, {
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
const getAdditionalItemsNoteHistory = (customer_id)=>{
    let payload = {
        customerId: customer_id
    };
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Customer/GetAdditionalItemsNoteHistory?customerId=${customer_id}
    `, {
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
const updateCustomerSubscription = (customerInfo)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Stripe/UpdateCustomerSubscription
     `, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(customerInfo)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getTexForOrderWithEmail = (payload)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `TaxJar/TaxForOrderWithEmailAndUserId
     `, {
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
const createCustomerSubscription = (payload)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Customer/CreateMembershipForBanjo
     `, {
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
const upgradeCustomerPlan = (payload)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Customer/ChangeCustomerPlanBanjo
     `, {
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
const freeUpgradePlan = (payload)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Stripe/FreeUpgrade
     `, {
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
const UpdatePasswordForBanjo = (payload)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Customer/UpdatePasswordForBanjo
     `, {
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
_c2 = UpdatePasswordForBanjo;
const orderUpdateOrderTags = (payload)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Order/UpdateOrderTags
     `, {
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
const AddRemoveAttribute = async (customer_id, addedAttribute, removeAttribute)=>{
    const user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    const data = {
        EntityId: customer_id,
        type: 'customer',
        attribtuesToAdd: addedAttribute,
        attribtuesToRemove: removeAttribute,
        isTag: true
    };
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Attribute/AddOrUpdateEntityAttributeList', {
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
};
_c3 = AddRemoveAttribute;
const updateAttributeLog = async (msg)=>{
    const user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    const data = {
        Message: msg,
        ObjectToLog: {
            Property1: "Value1",
            Property2: "Value2"
        }
    };
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Attribute/DatadogLog', {
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
};
const updateSwapEmail = (payload)=>{
    const user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Customer/UpdateSwapEmail', {
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
const capitalizedPlanName = (planName)=>{
    if (planName != 'FashionPass') {
        return planName.charAt(0).toUpperCase() + planName.toLowerCase().slice(1);
    } else {
        return planName;
    }
};
const deleteHoldNotes = async (deletePayload)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + "sku/deleteHoldNotes", {
        method: 'DELETE',
        body: JSON.stringify(deletePayload),
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
const addCustomereManualCancel = (payload)=>{
    const user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Customer/AddCustomerManuallyPausedAndCancelledAttribute', {
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
const getWinbackAttemptInfo = (customerID)=>{
    let token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    let customer_ip = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].get('customer_ip');
    let request_guid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].get('request_guid');
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `reward/GetWinbackAttemptByCustomerID/${customerID}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token,
            'X-Request-For': customer_ip,
            'guid': request_guid
        }
    }).then((response)=>response.json()).then((data)=>{
        // console.log('data  ===> ' , data)
        return data;
    });
};
const addWinbackAttemptInfo = (dataObj)=>{
    let token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    let customer_ip = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].get('customer_ip');
    let request_guid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].get('request_guid');
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'reward/InsertWinbackAttempt', {
        method: 'POST',
        body: JSON.stringify(dataObj),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
            'X-Request-For': customer_ip,
            'guid': request_guid
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    });
};
const updateWinbackAttemptInfo = (dataObj)=>{
    let token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    let customer_ip = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].get('customer_ip');
    let request_guid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].get('request_guid');
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'reward/UpdateWinbackAttempt', {
        method: 'POST',
        body: JSON.stringify(dataObj),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
            'X-Request-For': customer_ip,
            'guid': request_guid
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    });
};
const deleteWinbackAttemptInfo = (attemptID)=>{
    let token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    let customer_ip = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].get('customer_ip');
    let request_guid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].get('request_guid');
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `reward/DeleteWinbackAttempt/${attemptID}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token,
            'X-Request-For': customer_ip,
            'guid': request_guid
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    });
};
const AddRemoveAttributeSnoozeCustomer = (addedAttribute, removeAttribute, customer_id)=>{
    let bothAddRemoveEmpty = false;
    if (addedAttribute && addedAttribute.length == 0 && removeAttribute && removeAttribute.length == 0) {
        bothAddRemoveEmpty = true;
    }
    let data = {
        "EntityId": customer_id,
        "type": "customer",
        "attribtuesToAdd": addedAttribute,
        "attribtuesToRemove": removeAttribute,
        "isTag": true,
        "clearCache": [
            "Customer_Summary_"
        ]
    };
    if (bothAddRemoveEmpty == false) {
        return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].entityAttrApi + 'Attribute/AddOrUpdateEntityAttributeList', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((response)=>response.json()).then((data)=>{
            return data;
        });
    }
};
_c4 = AddRemoveAttributeSnoozeCustomer;
async function updateCustomerEntityAttributePauseSchdule(customerId, add, remove) {
    // let bothAddRemoveEmpty = false
    // if(add && add.length == 0 && remove && remove.length == 0) {
    //     bothAddRemoveEmpty = true
    // }
    let obj = {};
    if (remove == false && add != null) {
        obj = {
            "EntityId": customerId,
            "type": "customer",
            "attribtuesToAdd": [
                {
                    "attributeDefination": "Paused Scheduled",
                    "attributeValueDefination": "Paused Scheduled Date",
                    "value": add
                },
                {
                    "attributeDefination": "Paused Scheduled",
                    "attributeValueDefination": "Paused Scheduled Type",
                    "value": "Active"
                }
            ],
            "attribtuesToRemove": [],
            "isTag": true,
            "clearCache": [
                "Customer_Summary_"
            ]
        };
    } else {
        obj = {
            "EntityId": customerId,
            "type": "customer",
            "attribtuesToAdd": [],
            "attribtuesToRemove": [
                {
                    "attributeDefination": "Paused Scheduled"
                }
            ],
            "isTag": true,
            "clearCache": [
                "Customer_Summary_"
            ]
        };
    }
    return await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].entityAttrApi + 'Attribute/AddOrUpdateEntityAttribute', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    });
}
const klavioEventEmail = (payload, id, status)=>{
    let customer_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    if (customer_token != undefined) {
        return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Stripe/SendCancelActivatedEmailFromBanjo?customer_id=${id}&sent_status=${status}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + customer_token,
                'X-Request-For': '',
                'guid': ''
            },
            body: JSON.stringify(payload)
        }).then((response)=>response.json()).then((data)=>{
            console.log(data);
        });
    }
};
const CancelCustomerSubscription = (customerStripeId = '', cancelReason)=>{
    let customer_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Stripe/CancelCustomerSubscription?customerStripeId=${customerStripeId}&cancelMsg=${cancelReason}`, {
        method: 'POST',
        headers: {
            'Authorization': "Bearer " + customer_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
_c5 = CancelCustomerSubscription;
const updateCustomerMembership = (email, status)=>{
    let customer_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI}Customer/UpdateCustomerMembership?email=${email}&status=${status}&klaviyo_event=false`, {
        method: 'POST',
        headers: {
            'Authorization': "Bearer " + customer_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        console.log(err);
    });
};
const getCustomerCreditPoint = (customerID)=>{
    let customer_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Customer/GetCustomerpoints?customerId=${customerID}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + customer_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    });
};
const getCustomerReportType = ()=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `customer/CustomerReportType`, {
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
const addRemoveAttributeSnoozeCustomerFromThirdParty = (addedAttribute, removeAttribute, barcode_id)=>{
    let data = {
        "EntityId": barcode_id,
        "type": "barcode",
        "attribtuesToAdd": addedAttribute,
        "attribtuesToRemove": removeAttribute,
        "isTag": true,
        "clearCache": []
    };
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].entityAttrApi + 'Attribute/AddOrUpdateEntityAttributeList', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((response)=>response.json()).then((data)=>{
        return data;
    });
};
const insert_ThirdPartySoldVendorBarcode = async (data, vid)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `barcode/Insert_ThirdPartySoldVendorBarcode?barcodeid=${data.barcodeid}&barcode=${data.barcode}&third_party_sold_vendor_id=${vid}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify({})
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const get_ThirdPartySoldVendorBarcode = async ()=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'barcode/Get_ThirdPartySoldVendorBarcode', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const bulkInsert_ThirdPartySoldVendorBarcode = async (barcodes, vendorId)=>{
    // 10633480%2C107623
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `barcode/BulkInsert_ThirdPartySoldVendorBarcode?barcodes=${barcodes}&third_party_sold_vendor_id=${vendorId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify({})
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const get_ThirdPartySoldVendor = async ()=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'barcode/Get_ThirdPartySoldVendor', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const insert_ThirdPartySoldVendor = async (vendor_name)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `barcode/Insert_ThirdPartySoldVendor?name=${vendor_name}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify({})
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const update_ThirdPartySoldVendor = async (vendor_name, vendor_id)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `barcode/Update_ThirdPartySoldVendor?id=${vendor_id}&newName=${vendor_name}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify({})
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const delete_ThirdPartySoldVendor = async (vendor_id)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `barcode/Delete_ThirdPartySoldVendor?id=${vendor_id}`, {
        method: 'DELETE',
        // body: JSON.stringify(deletePayload),
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
const getOrdersByCustomerViewId = async (customerId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Customer/GetOrdersByCustomerView?customerId=' + customerId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const getSignupCustomerRecords = async (startDate, endDate, searchType)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Customer/GetWaitlistCustomer?startDate=${startDate}&endDate=${endDate}&filterby=${searchType}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const addTagToZendeskTicket = (payload)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Zendesk/AddTagToTicket`, {
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
const getActivationGraphByRange = (startDate, endDate)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Customer/GetActivationGraphByRange?startDate=${startDate}&endDate=${endDate}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    });
};
const getActivationGraphDefault = (month, year)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    let url = __TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Customer/GetActivationGraphDefault';
    if (month !== undefined && year !== undefined) {
        url += `?month=${month}&year=${year}`;
    }
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    });
};
const insertCustomerOrderCount = ()=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    let url = __TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Customer/InsertCustomerOrderCount';
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{
        return data;
    });
};
;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "GetNewInvoiceOrdersByCustomer");
__turbopack_context__.k.register(_c1, "AddAccountCreditsBanjo");
__turbopack_context__.k.register(_c2, "UpdatePasswordForBanjo");
__turbopack_context__.k.register(_c3, "AddRemoveAttribute");
__turbopack_context__.k.register(_c4, "AddRemoveAttributeSnoozeCustomer");
__turbopack_context__.k.register(_c5, "CancelCustomerSubscription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/functions/skuFunctions.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompleteReorder",
    ()=>CompleteReorder,
    "CreateReorderLog",
    ()=>CreateReorderLog,
    "EditOpenReorder",
    ()=>EditOpenReorder,
    "GetLastAccessoryBarcode",
    ()=>GetLastAccessoryBarcode,
    "GetLastReorder",
    ()=>GetLastReorder,
    "GetReOrderLogInvoice",
    ()=>GetReOrderLogInvoice,
    "GetSkus",
    ()=>GetSkus,
    "IsCustomerExist",
    ()=>IsCustomerExist,
    "UpdateReorderDate",
    ()=>UpdateReorderDate,
    "UpdateSkuQuantity",
    ()=>UpdateSkuQuantity,
    "addBarcode",
    ()=>addBarcode,
    "addBarcodeBulk",
    ()=>addBarcodeBulk,
    "addHoldItem",
    ()=>addHoldItem,
    "cancelSkuHoldByEmail",
    ()=>cancelSkuHoldByEmail,
    "deleteHoldNotes",
    ()=>deleteHoldNotes,
    "getALlSkuHolds",
    ()=>getALlSkuHolds,
    "getAddedItemByUserId",
    ()=>getAddedItemByUserId,
    "getBarcodeDetails",
    ()=>getBarcodeDetails,
    "getDeletedSkus",
    ()=>getDeletedSkus,
    "getHoldItem",
    ()=>getHoldItem,
    "getInventoryData",
    ()=>getInventoryData,
    "getMaxBarcode",
    ()=>getMaxBarcode,
    "getProductActivity",
    ()=>getProductActivity,
    "getSkuOrderHistory",
    ()=>getSkuOrderHistory,
    "getSkuQuantityLogs",
    ()=>getSkuQuantityLogs,
    "skuUpdateInfo",
    ()=>skuUpdateInfo,
    "updateHoldNotes",
    ()=>updateHoldNotes,
    "updateSkuNote",
    ()=>updateSkuNote,
    "updateSortReturn",
    ()=>updateSortReturn,
    "updateSortReturnMessage",
    ()=>updateSortReturnMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/functions/globalFunctions.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/globalconfig.js [client] (ecmascript)");
;
;
//---------------GET-----------------
const GetSkus = async (skuid, dispatch)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'sku/GetSkus?skuname=' + skuid, {
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
};
_c = GetSkus;
const getSkuOrderHistory = async (skuid)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'sku/GetOrderHistory?skuid=' + skuid, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const getBarcodeDetails = async (product_id, skuid)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'sku/GetBarcodeList?productid=' + product_id + '&skuid=' + skuid, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const getSkuQuantityLogs = async (skuid, sku)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'sku/GetQuantityLogs?skuid=' + skuid + '&sku=' + sku, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
const GetLastAccessoryBarcode = async ()=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Sku/GetLastAccessoryBarcode', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    });
};
_c1 = GetLastAccessoryBarcode;
const getHoldItem = async (skuid)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + "sku/GetHoldItem?skuid=" + skuid, {
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
const IsCustomerExist = async (email)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + "customer/IsCustomerExist?email=" + email, {
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
_c2 = IsCustomerExist;
const cancelSkuHoldByEmail = async (skuid, holdId, barcode)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'sku/CancelSkuHoldByEmail?skuid=' + skuid + '&holdId=' + holdId + '&barcode=' + barcode, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then((response)=>response.json()).then((data)=>{}).catch((err)=>{
        console.log(err);
    });
};
const getMaxBarcode = (product_id)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Barcode/GetMaxBarcode', {
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
const getDeletedSkus = (orderId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Sku/GetDeletedSkuPopup?orderid=${orderId}`, {
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
const getInventoryData = (product_id)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Sku/GetInventoryData?productid=${product_id}`, {
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
const UpdateSkuQuantity = async (skuid, quantity)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Sku/UpdateSkuQuantity?skuid=${skuid}&quantity=${quantity}`, {
        method: 'GET',
        // body: JSON.stringify({ skuid: skuid, quantity: quantity }),
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
_c3 = UpdateSkuQuantity;
const getProductActivity = async (productId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `Product/GetProductActivity?product_id=${productId}`, {
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
const getALlSkuHolds = async (email)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Sku/GetHoldCount?email=${email}`, {
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
//---------------DELETE------------------
const deleteHoldNotes = async (deletePayload)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + "sku/deleteHoldNotes", {
        method: 'DELETE',
        body: JSON.stringify(deletePayload),
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
//---------------POST------------------
const skuUpdateInfo = async (query)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + "sku/UpdateInfo", {
        method: 'POST',
        body: JSON.stringify(query),
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
const updateSkuNote = async (productid, note)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + "Product/UpdateProductNote", {
        method: 'POST',
        body: JSON.stringify({
            productid: productid,
            note: note
        }),
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
const updateHoldNotes = async (skuid, holdid, priority)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + "sku/updateHoldNotes", {
        method: 'POST',
        body: JSON.stringify({
            skuid: skuid,
            holdid: holdid,
            priority: priority
        }),
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
const addBarcode = async (bodyObject)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + "barcode/AddBarcode", {
        method: 'POST',
        body: JSON.stringify(bodyObject),
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
const addHoldItem = async (holdItemObject)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + "sku/HoldItem", {
        method: 'POST',
        body: JSON.stringify(holdItemObject),
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
const updateSortReturnMessage = async (holdItemObject)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + "Sku/UpdateSortReturnMessage", {
        method: 'POST',
        body: JSON.stringify(holdItemObject),
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
const updateSortReturn = async (holdItemObject)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + "Sku/UpdateSortReturn", {
        method: 'POST',
        body: JSON.stringify(holdItemObject),
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
const addBarcodeBulk = async (obj)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + "Barcode/AddBarcodes_Bulk", {
        method: 'POST',
        body: JSON.stringify(obj),
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
const getAddedItemByUserId = ()=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].conveyorURL + `barcode/GetAddedItemByUserId`, {
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
const UpdateReorderDate = async (productid)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + `sku/UpdateReorderDate?productid=${productid}`, {
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
_c4 = UpdateReorderDate;
const CreateReorderLog = async (payload)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Sku/CreateReorderLog', {
        method: 'POST',
        body: JSON.stringify(payload),
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
_c5 = CreateReorderLog;
const EditOpenReorder = async (payload)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Sku/EditOpenReorder', {
        method: 'PUT',
        body: JSON.stringify(payload),
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
_c6 = EditOpenReorder;
const CompleteReorder = async (payload)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + 'Sku/CompleteReorder', {
        method: 'POST',
        body: JSON.stringify(payload),
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
_c7 = CompleteReorder;
const GetReOrderLogInvoice = async (productid)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Sku/GetReOrderLogInvoice?productid=${productid}`, {
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
_c8 = GetReOrderLogInvoice;
const GetLastReorder = async (productid, skuid)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `Sku/GetLastReorder?productid=${productid}&skuid=${skuid}`, {
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
_c9 = GetLastReorder;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "GetSkus");
__turbopack_context__.k.register(_c1, "GetLastAccessoryBarcode");
__turbopack_context__.k.register(_c2, "IsCustomerExist");
__turbopack_context__.k.register(_c3, "UpdateSkuQuantity");
__turbopack_context__.k.register(_c4, "UpdateReorderDate");
__turbopack_context__.k.register(_c5, "CreateReorderLog");
__turbopack_context__.k.register(_c6, "EditOpenReorder");
__turbopack_context__.k.register(_c7, "CompleteReorder");
__turbopack_context__.k.register(_c8, "GetReOrderLogInvoice");
__turbopack_context__.k.register(_c9, "GetLastReorder");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/functions/TransferFunctions.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UpdateBarcodeForPaidTransfer",
    ()=>UpdateBarcodeForPaidTransfer,
    "addedTransfersCSItemToNextOrder",
    ()=>addedTransfersCSItemToNextOrder,
    "banjoTransferRentOrderItem",
    ()=>banjoTransferRentOrderItem,
    "cancelTransferRentOrderItem",
    ()=>cancelTransferRentOrderItem,
    "checkForTransferItem",
    ()=>checkForTransferItem,
    "createChargeTransferItems",
    ()=>createChargeTransferItems,
    "createOrderAgainstEmail",
    ()=>createOrderAgainstEmail,
    "getCustomerNextOrderPlacedAndItemsCount",
    ()=>getCustomerNextOrderPlacedAndItemsCount,
    "getProvinceCode",
    ()=>getProvinceCode,
    "paidTransferItemToNextOrder",
    ()=>paidTransferItemToNextOrder,
    "transferRentOrderItem",
    ()=>transferRentOrderItem,
    "updateBarcodeAfterTransferCancel",
    ()=>updateBarcodeAfterTransferCancel,
    "updateBarcodeByInvoiceRefund",
    ()=>updateBarcodeByInvoiceRefund
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/globalconfig.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/functions/globalFunctions.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-cookie/dist/js.cookie.mjs [client] (ecmascript)");
;
;
;
const transferRentOrderItem = async (payload)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Stripe/TransferRentOrder', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(payload)
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        throw err;
    });
};
const banjoTransferRentOrderItem = async (payload)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    let customer_ip = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].get('customer_ip');
    let request_guid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].get('request_guid');
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Stripe/BanjoTransferRentOrder', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token,
            'X-Request-For': customer_ip || '',
            'guid': request_guid || ''
        },
        body: JSON.stringify(payload)
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        throw err;
    });
};
const cancelTransferRentOrderItem = async (payload)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    let customer_ip = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].get('customer_ip');
    let request_guid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].get('request_guid');
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Stripe/BanjoCancelTransferRentOrder', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token,
            'X-Request-For': customer_ip || '',
            'guid': request_guid || ''
        },
        body: JSON.stringify(payload)
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        throw err;
    });
};
const updateBarcodeAfterTransferCancel = async (payload)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Invoice/UpdateBarcodeAfterTransferCancel', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(payload)
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        throw err;
    });
};
const addedTransfersCSItemToNextOrder = async (payload)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'order/AddedTransfersCSItemToNextOrder', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(payload)
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        throw err;
    });
};
const getCustomerNextOrderPlacedAndItemsCount = async (customerId, orderId)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].smartBanjoApi + `order/GetCustomerNextOrderPlacedAndItemsCount?customerid=${customerId}&orderid=${orderId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        throw err;
    });
};
const UpdateBarcodeForPaidTransfer = async (payload)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Invoice/UpdateBarcodeForPaidTransfer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(payload)
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        throw err;
    });
};
_c = UpdateBarcodeForPaidTransfer;
const paidTransferItemToNextOrder = async (payload)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Stripe/PaidTransferItemToNextOrder', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(payload)
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        throw err;
    });
};
const createChargeTransferItems = async (payload)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Stripe/CreateChargeTransferItems', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(payload)
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        throw err;
    });
};
const createOrderAgainstEmail = async (payload)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'taxjar/CreateOrderAgainstEmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(payload)
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        throw err;
    });
};
const getProvinceCode = (statetext)=>{
    if (statetext == null) statetext = '';
    let states_hash = {
        'Alabama': 'AL',
        'Alaska': 'AK',
        'American Samoa': 'AS',
        'Arizona': 'AZ',
        'Arkansas': 'AR',
        'California': 'CA',
        'Colorado': 'CO',
        'Connecticut': 'CT',
        'Delaware': 'DE',
        'District Of Columbia': 'DC',
        'Federated States Of Micronesia': 'FM',
        'Florida': 'FL',
        'Georgia': 'GA',
        'Guam': 'GU',
        'Hawaii': 'HI',
        'Idaho': 'ID',
        'Illinois': 'IL',
        'Indiana': 'IN',
        'Iowa': 'IA',
        'Kansas': 'KS',
        'Kentucky': 'KY',
        'Louisiana': 'LA',
        'Maine': 'ME',
        'Marshall Islands': 'MH',
        'Maryland': 'MD',
        'Massachusetts': 'MA',
        'Michigan': 'MI',
        'Minnesota': 'MN',
        'Mississippi': 'MS',
        'Missouri': 'MO',
        'Montana': 'MT',
        'Nebraska': 'NE',
        'Nevada': 'NV',
        'New Hampshire': 'NH',
        'New Jersey': 'NJ',
        'New Mexico': 'NM',
        'New York': 'NY',
        'North Carolina': 'NC',
        'North Dakota': 'ND',
        'Northern Mariana Islands': 'MP',
        'Ohio': 'OH',
        'Oklahoma': 'OK',
        'Oregon': 'OR',
        'Palau': 'PW',
        'Pennsylvania': 'PA',
        'Puerto Rico': 'PR',
        'Rhode Island': 'RI',
        'South Carolina': 'SC',
        'South Dakota': 'SD',
        'Tennessee': 'TN',
        'Texas': 'TX',
        'Utah': 'UT',
        'Vermont': 'VT',
        'Virgin Islands': 'VI',
        'Virginia': 'VA',
        'Washington': 'WA',
        'West Virginia': 'WV',
        'Wisconsin': 'WI',
        'Wyoming': 'WY'
    };
    if (statetext.length > 2) {
        if (statetext == "District of Columbia") return statetext = "DC";
        return states_hash[statetext];
    } else {
        return statetext;
    }
};
const updateBarcodeByInvoiceRefund = async (payload)=>{
    let user_token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$functions$2f$globalFunctions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthTokenfromcookie"])();
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$globalconfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fpAPI + 'Invoice/UpdateBarcodeByInvoiceRefund', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        },
        body: JSON.stringify(payload)
    }).then(async (response)=>await response.json()).then((data)=>{
        return data;
    }).catch((err)=>{
        throw err;
    });
};
function checkForTransferItem(lasterOrder, lasterOrderItem) {
    let totalNumberOFTransfersAllow = 0;
    let totalNumberOFTransferdInNextOrder = 0;
    let totalNumberOFTransferdPrevOrder = 0;
    let totalNoTransferedClothingNextOrder = 0;
    let totalNoTransferedAccessoryNextOrder = 0;
    let isAccessoryTransferAllow = false;
    let isClothingTransferAllow = false;
    let isTransferItemAvailable = false;
    let isAnyShipmentOutgoing = false;
    // // if customer is not login OR not a last rental order OR last order return in wear house from customer 
    // if(!lasterOrder || !lasterOrderItem || (lasterOrder.order_tags && lasterOrder.order_tags.indexOf('return_inspected') > -1)) {
    //     return {
    //        "totalNumberOFTransfersAllow": totalNumberOFTransfersAllow,
    //         "totalNumberOFTransferdInNextOrder" : totalNumberOFTransferdInNextOrder, 
    //         "totalNumberOFTransferdPrevOrder" : totalNumberOFTransferdPrevOrder, 
    //         "isAccessoryTransferAllow" : isAccessoryTransferAllow, 
    //         "isClothingTransferAllow" : isClothingTransferAllow,
    //         "isTransferItemAvailable" : isTransferItemAvailable,
    //         "totalNoTransferedClothingNextOrder": totalNoTransferedClothingNextOrder,
    //         "totalNoTransferedAccessoryNextOrder": totalNoTransferedAccessoryNextOrder
    //     }
    // }
    let colthingAllowInPlan = 5;
    let accessoryAllowInPlan = 1;
    let totalNumberOfSlots = parseInt(accessoryAllowInPlan) + parseInt(colthingAllowInPlan * 2);
    lasterOrderItem && lasterOrderItem.length > 0 && lasterOrderItem.map((item, ind)=>{
        let itemTags = "" + item.tags;
        if (item?.ship_id > 0) {
            isAnyShipmentOutgoing = true;
        }
        // totalNoTransferAllow  // counting rental all items   
        if (item?.type?.indexOf('Sale') == -1 && item?.barcode?.statusid != 13) {
            totalNumberOFTransfersAllow += 1;
        }
        // total transfer count from current order in next order 
        if (itemTags?.indexOf('transferfrom:' + item?.orderid) > -1 || itemTags.indexOf('nexttransferfrom:' + item?.orderid) > -1 || item.isSelectedForTransfer == true) {
            totalNumberOFTransferdInNextOrder += 1;
            if (item?.product?.product_catagory == 1) {
                totalNoTransferedClothingNextOrder += 1; // if cloth transfer
                totalNumberOfSlots = totalNumberOfSlots - 2; // minusing slots on ecah tranfer 
            } else {
                totalNoTransferedAccessoryNextOrder += 1; // if accessory transfer
                totalNumberOfSlots = totalNumberOfSlots - 1;
            }
        }
        // rental item count in this order transferred from prev order 
        if (item.type?.indexOf('Sale') == -1 && itemTags.indexOf('transferto:' + lasterOrder?.orderid) > -1) {
            totalNumberOFTransferdPrevOrder += 1;
        }
    });
    // transfer limit is total number of rental items of customer  -1 in according to customer plan
    let totalNumberOfTransferLimit = parseInt(accessoryAllowInPlan) + parseInt(colthingAllowInPlan) - 1;
    // if eligible transfer rental item count is gretear (incase of added item) 
    // than set max number of transfer limit according to customer plan 
    if (totalNumberOFTransfersAllow > totalNumberOfTransferLimit) {
        totalNumberOFTransfersAllow = totalNumberOfTransferLimit;
    } else {
        totalNumberOFTransfersAllow = totalNumberOFTransfersAllow - 1;
    }
    // if only 1 item limit remain or transfer limit reached then not allowing more transfer
    if (totalNumberOfSlots <= 1 || totalNumberOFTransfersAllow <= totalNumberOFTransferdInNextOrder) {
        return {
            "totalNumberOFTransfersAllow": totalNumberOFTransfersAllow,
            "totalNumberOFTransferdInNextOrder": totalNumberOFTransferdInNextOrder,
            "totalNumberOFTransferdPrevOrder": totalNumberOFTransferdPrevOrder,
            "isAccessoryTransferAllow": false,
            "isClothingTransferAllow": false,
            "isTransferItemAvailable": false,
            "totalNoTransferedClothingNextOrder": totalNoTransferedClothingNextOrder,
            "totalNoTransferedAccessoryNextOrder": totalNoTransferedAccessoryNextOrder
        };
    } else {
        isTransferItemAvailable = true;
        isClothingTransferAllow = true;
        isAccessoryTransferAllow = true;
        // if only 1 clothing transfer available of clothing rental transfered more than plan clothing limit 
        if (totalNumberOfSlots <= 2 || totalNoTransferedClothingNextOrder >= parseInt(colthingAllowInPlan) + 1) {
            isClothingTransferAllow = false;
        }
        // if only 1 accessory transfer available of accessory rental transfered more than plan clothing limit 
        if (totalNumberOfSlots <= 1) {
            isAccessoryTransferAllow = false;
        }
        //if both accessory and clothing limit reached
        if (isClothingTransferAllow == false && isAccessoryTransferAllow == false) isTransferItemAvailable = false;
    }
    if (lasterOrder.orderstatus != '1' && !isAnyShipmentOutgoing) {
        isTransferItemAvailable = false;
    }
    return {
        "totalNumberOFTransfersAllow": totalNumberOFTransfersAllow,
        "totalNumberOFTransferdInNextOrder": totalNumberOFTransferdInNextOrder,
        "totalNumberOFTransferdPrevOrder": totalNumberOFTransferdPrevOrder,
        "isAccessoryTransferAllow": isAccessoryTransferAllow,
        "isClothingTransferAllow": isClothingTransferAllow,
        "isTransferItemAvailable": isTransferItemAvailable,
        "totalNoTransferedClothingNextOrder": totalNoTransferedClothingNextOrder,
        "totalNoTransferedAccessoryNextOrder": totalNoTransferedAccessoryNextOrder
    };
}
;
var _c;
__turbopack_context__.k.register(_c, "UpdateBarcodeForPaidTransfer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_functions_91d0ac64._.js.map