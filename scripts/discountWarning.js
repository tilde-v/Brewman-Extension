waitForKeyElements("input[data-qa='discount_basis']", showDiscountWarning);

function showDiscountWarning (jNode) {
    url = window.location.pathname.split("/");
    if (url[1] == "outlet" && url[3] == "pricelists" && url[4] == "pricingcategories") {
        chrome.storage.local.get(["discountWarning", "discountWarningText"], (data) => {
            if (data.discountWarning) {
                jNode.parents(".col").after(data.discountWarningText);
            }
        });
    }
}