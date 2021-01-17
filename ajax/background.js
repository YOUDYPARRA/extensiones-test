chrome.browserAction.onClicked.addListener(function(tab){
	console.log(tab.id+' Rezx!');
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1/comments", true);
	xhr.onreadystatechange = function() {
	  if (xhr.readyState == 4) {
	    // JSON.parse does not evaluate the attacker's scripts.
	    var resp = JSON.parse(xhr.responseText);
	    console.log(resp);
	  }
	}
	xhr.send();

});