chrome.browserAction.onClicked.addListener(function(tab){//console.log(tab.url+' Red!');
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="red"'
  });
});