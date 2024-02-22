function waitForBrewmanLoad (actionFunction, delay) {
    // Default delay of 1 second
    if (!delay) {delay = 1000}
    
    // Check for loading dialog after delay
    // Initial delay allows time for loading dialog to first appear
    // Subsequent delays wait for dialog to disappear
    
    // (Function assumes that loading dialog will appear within initial delay
    //If dialog appears after, it will assume the page has loaded before the dialog appears)
    let intervalId = setInterval(function () {
        let loadingDialog = $("div.loading_dialog");
        if (loadingDialog.is(":hidden")) {
            clearInterval(intervalId)
            actionFunction();
        }
    }, delay);
}