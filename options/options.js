function restoreOptions () {
    chrome.storage.local.get(null, (data) => {
        document.getElementById("api-key").value = data["apiKey"];
        document.getElementById("minimize-crm-log-communication").checked = data["minimize_crm"]["log_communication"];
        document.getElementById("minimize-crm-activity-log").checked = data["minimize_crm"]["activity_log"];
        document.getElementById("minimize-crm-outlet-summary").checked = data["minimize_crm"]["outlet_summary"];
        document.getElementById("minimize-crm-contacts").checked = data["minimize_crm"]["contacts"];
        document.getElementById("minimize-crm-upcoming-tasks-and-sales-visits").checked = data["minimize_crm"]["upcoming_tasks_and_sales_visits"];
        document.getElementById("minimize-crm-recently-ordered-products").checked = data["minimize_crm"]["recently_ordered_products"];
        document.getElementById("minimize-crm-recent-orders").checked = data["minimize_crm"]["recent_orders"];
        document.getElementById("minimize-crm-recent-credit-notes").checked = data["minimize_crm"]["recent_credit_notes"];
        document.getElementById("minimize-crm-containers-at-outlet").checked = data["minimize_crm"]["containers_at_outlet"];
    });
};

function saveOptions () {
    chrome.storage.local.set({
        apiKey: document.getElementById("api-key").value,
        minimize_crm: {
            log_communication: document.getElementById("minimize-crm-log-communication").checked,
            activity_log: document.getElementById("minimize-crm-activity-log").checked,
            outlet_summary: document.getElementById("minimize-crm-outlet-summary").checked,
            contacts: document.getElementById("minimize-crm-contacts").checked,
            upcoming_tasks_and_sales_visits: document.getElementById("minimize-crm-upcoming-tasks-and-sales-visits").checked,
            recently_ordered_products: document.getElementById("minimize-crm-recently-ordered-products").checked,
            recent_orders: document.getElementById("minimize-crm-recent-orders").checked,
            recent_credit_notes: document.getElementById("minimize-crm-recent-credit-notes").checked,
            containers_at_outlet: document.getElementById("minimize-crm-containers-at-outlet").checked
        }
    }, () => {});
    document.getElementById("status").innerText = "Saved!";
};

document.addEventListener("DOMContentLoaded", restoreOptions);
document.getElementById("save").addEventListener("click", saveOptions);