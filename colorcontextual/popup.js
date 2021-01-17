'use strict';
function click(e){
	console.log('evento clic'+e.target.id);
	chrome.tabs.executeScript(null,
		{code:"document.body.style.backgroundColor='"+e.target.id+"'"});
		//window.close();
}
document.addEventListener('DOMContentLoaded',function(){
	console.log('agregar clic');
	var divs=document.querySelectorAll('div');
	for(var i=0;i<divs.length;i++){
		divs[i].addEventListener('click',click)
	}

});