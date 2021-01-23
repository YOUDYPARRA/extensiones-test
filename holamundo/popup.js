'use strict';
/**AQUI SE DEFINE LA FUNCIONALIDAD DE LA APP, ENVIA A GUARDAR DATOS EN SERVIDOR, COLOCA PUNTOS**/
function setAlarm(e){
  //let minutos = parseFloat(e.target.value);
  chrome.browserAction.setBadgeText({text:'0N'});
  chrome.storage.sync.get(['participants'],function(r){
        console.log('el resulado obtenido desde clic del storage es: '+r.participants)
      })
  //window.close();
	var x=document.getElementById('sampleSecond');
	console.log(x);
	x.innerText="xxx";
	tableParticipans();
}
document.getElementById('sampleSecond').addEventListener('click',setAlarm);


function tableParticipans(data){
	l//et data=['juan','hugo','paco','luis'];
	let t='<table>';
	for ( let user of data ){
		t=t+'<tr id='+$data.user+'>';
	    t=t+'<td >';
	    t=t+data.user;
	    t=t+'<td>';
	    t=t+'<td>';
	    t=t+'';
	    t=t+'<td>';
		t=t+'</tr>';
	    
	}
	t=t+'</table>';
	document.getElementById("demo").innerHTML = t;
}
function quitRepeat(){
	for (var i = 0; i < Things.length; i++) {
		Things[i]
	}

}
