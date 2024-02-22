function restoreOptions () {
    chrome.storage.local.get(null, (data) => {
        document.getElementById("api-key").value = data["apiKey"];
        document.getElementById("minimize-crm-log-communication").checked = data["minimizeCRM"]["logCommunication"];
        document.getElementById("minimize-crm-activity-log").checked = data["minimizeCRM"]["activityLog"];
        document.getElementById("minimize-crm-outlet-summary").checked = data["minimizeCRM"]["outletSummary"];
        document.getElementById("minimize-crm-contacts").checked = data["minimizeCRM"]["contacts"];
        document.getElementById("minimize-crm-upcoming-tasks-and-sales-visits").checked = data["minimizeCRM"]["upcomingTasksAndSalesVisits"];
        document.getElementById("minimize-crm-recently-ordered-products").checked = data["minimizeCRM"]["recentlyOrderedProducts"];
        document.getElementById("minimize-crm-recent-orders").checked = data["minimizeCRM"]["recentOrders"];
        document.getElementById("minimize-crm-recent-credit-notes").checked = data["minimizeCRM"]["recentCreditNotes"];
        document.getElementById("minimize-crm-containers-at-outlet").checked = data["minimizeCRM"]["containersAtOutlet"];
        document.getElementById("discount-warning").checked = data["discountWarning"];
        document.getElementById("discount-warning-text").value = data["discountWarningText"];
    });
};

function saveOptions () {
    chrome.storage.local.set({
        apiKey: document.getElementById("api-key").value,
        minimizeCRM: {
            logCommunication: document.getElementById("minimize-crm-log-communication").checked,
            activityLog: document.getElementById("minimize-crm-activity-log").checked,
            outletSummary: document.getElementById("minimize-crm-outlet-summary").checked,
            contacts: document.getElementById("minimize-crm-contacts").checked,
            upcomingTasksAndSalesVisits: document.getElementById("minimize-crm-upcoming-tasks-and-sales-visits").checked,
            recentlyOrderedProducts: document.getElementById("minimize-crm-recently-ordered-products").checked,
            recentRrders: document.getElementById("minimize-crm-recent-orders").checked,
            recentCreditNotes: document.getElementById("minimize-crm-recent-credit-notes").checked,
            containersAtOutlet: document.getElementById("minimize-crm-containers-at-outlet").checked
        },
        discountWarning: document.getElementById("discount-warning").checked,
        discountWarningText: document.getElementById("discount-warning-text").value
    }, () => {});
    document.getElementById("status").innerText = "Saved!";
};

document.addEventListener("DOMContentLoaded", restoreOptions);
document.getElementById("save").addEventListener("click", saveOptions);