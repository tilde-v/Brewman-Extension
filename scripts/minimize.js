waitForKeyElements(".bm-card-title", minimize)

function minimize (jNode) {
    url = window.location.pathname.split("/");
    if (url[1] == "outlet" && url[3] == "crm") {
        chrome.storage.local.get("minimizeCRM", (data) => {
            switch (jNode.parent().attr("label")) {
                case "Log Communication":
                    if (data["minimizeCRM"]["logCommunication"]) {jNode.click();};
                    break;
                case "Activity Log":
                    if (data["minimizeCRM"]["activityLog"]) {jNode.click();};
                    break;
                case "Outlet Summary":
                    if (data["minimizeCRM"]["outletSummary"]) {jNode.click();};
                    break;
                case "Contacts":
                    if (data["minimizeCRM"]["contacts"]) {jNode.click();};
                    break;
                case "Upcoming Tasks and Sales Visits":
                    if (data["minimizeCRM"]["upcomingTasksAndSalesVisits"]) {jNode.click();};
                    break;
                case "Recently Ordered Products":
                    if (data["minimizeCRM"]["recentlyOrderedProducts"]) {jNode.click();};
                    break;
                case "Recent Orders":
                    if (data["minimizeCRM"]["recentOrders"]) {jNode.click();};
                    break;
                case "Recent Credit Notes":
                    if (data["minimizeCRM"]["recentCreditNotes"]) {jNode.click();};
                    break;
                case "Containers At Outlet":
                    if (data["minimizeCRM"]["containersAtOutlet"]) {jNode.click();};
                    break;
            };
        });
    };
};