document.querySelector("#options-button").addEventListener("click", function () {
    console.log("clicked");
    if (chrome.runtime.openOptionsPage) {
        chrome.runtime.openOptionsPage();
    } else {
        window.open(chrome.runtime.getURL("options.html"));
    }
});