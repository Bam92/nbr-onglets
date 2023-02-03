
function getCurrentWindowTabs() {
    return browser.tabs.query({ currentWindow: true });
}

function counter() {

    getCurrentWindowTabs().then(tabs => {
        browser.browserAction.setBadgeText({
            text: tabs.length.toString()
        })

        browser.browserAction.getBadgeText({
            // text: tabs.length
        })
    })


}

document.addEventListener("DOMContentLoaded", counter)
browser.tabs.onCreated.addListener(counter);
browser.tabs.onRemoved.addListener(counter)