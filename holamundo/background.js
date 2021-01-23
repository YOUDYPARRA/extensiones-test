//'use strict';
chrome.browserAction.setPopup({"popup":"html/popup.html"},function(tabs) {
	console.log("clic en browserAction")
    chrome.storage.sync.get(['participants'], function(i) {
    	console.log("participanes desde el POPUP en browserAction "+i.participants)
  })
})