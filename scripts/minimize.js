waitForKeyElements(".bm-card-title", minimize)

function minimize (jNode) {
    url = window.location.pathname.split("/");
    if (url[1] == "outlet" && url[3] == "crm") {
        chrome.storage.local.get("minimize_crm", (data) => {
            switch (jNode.parent().attr("label")) {
                case "Log Communication":
                    if (data["minimize_crm"]["log_communication"]) {jNode.click();};
                    break;
                case "Activity Log":
                    if (data["minimize_crm"]["activity_log"]) {jNode.click();};
                    break;
                case "Outlet Summary":
                    if (data["minimize_crm"]["outlet_summary"]) {jNode.click();};
                    break;
                case "Contacts":
                    if (data["minimize_crm"]["contacts"]) {jNode.click();};
                    break;
                case "Upcoming Tasks and Sales Visits":
                    if (data["minimize_crm"]["upcoming_tasks_and_sales_visits"]) {jNode.click();};
                    break;
                case "Recently Ordered Products":
                    if (data["minimize_crm"]["recently_ordered_products"]) {jNode.click();};
                    break;
                case "Recent Orders":
                    if (data["minimize_crm"]["recent_orders"]) {jNode.click();};
                    break;
                case "Recent Credit Notes":
                    if (data["minimize_crm"]["recent_credit_notes"]) {jNode.click();};
                    break;
                case "Containers At Outlet":
                    if (data["minimize_crm"]["containers_at_outlet"]) {jNode.click();};
                    break;
            };
        });
    };
};