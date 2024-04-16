chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    // Remove any existing warnings
    let previousWarning = $("#existing-order-warning")
    if (previousWarning.length > 0) {
        previousWarning.remove();
    }
    waitForBrewmanLoad(showWarning);
});

function showWarning () {
    jNode = $("div[value='[object Object]']");
    url = window.location.pathname.split("/");

    // If page is outlet CRM screen
    if (url[1] == "outlet" && url[3] == "crm") {
        chrome.storage.local.get("apiKey", (storage) => {

            // Get tenant from user API
            fetch("https://brewman.premiersystems.com/webapi/user/v1/getCurrentUserContext", {
                method: "POST",
                headers: {
                    "Api-Token": storage["apiKey"], 
                    "Accept": "*/*",
                    "content-type": "application/json"
                },
                body: JSON.stringify({})
            })
            .then((response) => response.json())
            .then((data) => {
                let tenantId = data["userContext"]["user"]["readOnly"]["selectedTenant"];
                let outletId = url[2];
                let d = new Date();
                d.setMonth(d.getMonth() - 3);
                let dateFilter = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); 
                return fetch("https://brewman.premiersystems.com/webapi/order/v1/getOrdersByFilter", {
                    method: "POST",
                    headers: {
                        "Api-Token": storage["apiKey"], 
                        "Accept": "*/*",
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({
                        tenantId: tenantId,
                        filter: {
                            fromDespatchDate: dateFilter,
                            maximumResults: 100,
                            singleOutletId: outletId,
                            limitStatuses: ["Open"]
                        }
                    })
                })
            })
            .then((response) => response.json())
            .then((data) => {
                if (data["results"]["matchingCount"] > 0) {
                    // TODO: Write function for creating alerts

                    let orderWarning = document.createElement("div");
                    orderWarning.setAttribute("class", "v-alert bm-headline warning");
                    orderWarning.setAttribute("id", "existing-order-warning")
                    
                    let orderWarningWrapper = document.createElement("div");
                    orderWarningWrapper.setAttribute("class", "v-alert__content");
                    orderWarningWrapper.innerText = " There is currently already an open order for this outlet: ";

                    orderWarning.prepend(orderWarningWrapper);

                    data["results"]["orders"].forEach((value, index, array) => {
                        console.log(value);
                        let orderLink = document.createElement("a");
                        orderLink.setAttribute("href", "https://brewman.premiersystems.com/orders/" + value["header"]["readOnly"]["id"] + "/view");
                        orderLink.innerText = value["header"]["readOnly"]["orderNumber"];
                        orderWarningWrapper.append(orderLink);
                        if (index + 1 != array.length) {
                            orderWarningWrapper.append(", ");
                        }
                    });

                    jNode.prepend(orderWarning);
                }
            })
        });
    };
}