waitForKeyElements("input[data-qa='discount_basis']", showDiscountWarning);

function showDiscountWarning (jNode) {
    url = window.location.pathname.split("/");
    if (url[1] == "outlet" && url[3] == "pricelists" && url[4] == "pricingcategories") {
        // jNode.parents(".col").after($("<h1>SET DISCOUNT BASIS TO <b>£ PER B. BARREL</b>, NOT %!!!!!!!</h1>"))
        chrome.storage.local.get(["discount_warning", "discount_warning_text"], (data) => {
            if (data.discount_warning) {
                jNode.parents(".col").after(data.discount_warning_text);
            }
        });
    }
}