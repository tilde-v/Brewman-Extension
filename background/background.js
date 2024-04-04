chrome.runtime.onInstalled.addListener(function (details) {
    if (details.reason == "install") {
        chrome.storage.local.set({
            apiKey: "",
            minimizeCRM: {
                logCommunication: false,
                activityLog: false,
                outletSummary: true,
                contacts: true,
                upcomingTasksAndSalesVisits: true,
                recentlyOrderedProducts: false,
                recentOrders: true,
                recentCreditNotes: true,
                containersAtOutlet: true
            },
            discountWarning: true,
            discountWarningText: "<h2>SET DISCOUNT BASIS TO <b>£ PER B. BARREL</b>, NOT %!!</h2>",
            activityLogTab: "communications"
        });
    }
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == "complete") {
        chrome.tabs.sendMessage(tabId, {
            message: "TAB LOADED",
            status: changeInfo.status
        });
    }
});