chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action == "getHTML") {
    sendResponse({html: document.documentElement.outerHTML});
  }
});
