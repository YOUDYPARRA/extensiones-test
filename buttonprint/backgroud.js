chrome.browserAction.onClicked.addListener(function(tb){
	chrome.tabs.executeScript(
	tb.id,{code:'window.print();'});
}
);