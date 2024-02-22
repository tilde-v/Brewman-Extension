chrome.runtime.onInstalled.addListener(function (details) {
    if (details.reason == "install") {
        chrome.storage.local.set({
            apiKey: "",
            minimize_crm: {
                log_communication: false,
                activity_log: false,
                outlet_summary: true,
                contacts: true,
                upcoming_tasks_and_sales_visits: true,
                recently_ordered_products: true,
                recent_orders: false,
                recent_credit_notes: true,
                containers_at_outlet: true
            },
            discount_warning: true,
            discount_warning_text: "<h2>SET DISCOUNT BASIS TO <b>£ PER B. BARREL</b>, NOT %!!</h2>"
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