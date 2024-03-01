waitForKeyElements("div.bm-card[data-qa='crm_activity_log']", activateTab);

function activateTab(jNode) {
    url = window.location.pathname.split("/");
    if (url[1] == "outlet" && url[3] == "crm") {
        chrome.storage.local.get("activityLogTab", (data) => {
            let tab
            switch (data["activityLogTab"]) {
                case "all":
                    tab = jNode.find("div[data-qa='all']");
                    break;
                case "communications":
                    tab = jNode.find("div[data-qa='crm_communications']");
                    break;
                case "tasks":
                    tab = jNode.find("div[data-qa='tasks']");
                    break;
                case "transactions":
                    tab = jNode.find("div[data-qa='orders_transactions']");
                    break;
            }
            tab.click();
        });
    }
}