//**INICIAR PRUEBAS EN TEST PARA VERIFICAR LISTADO AL CARGAR MEET Y COLOCAR EL LISTADO EN SYNC DE GOOGLE CHROME**//
chrome.browserAction.onClicked.addListener(function(tab){
	console.log('hola mundo '+tab.id);
	alert("clic en popup");
	//obtener participantes al cargar elementos DOM de meet (revisar cada 6 egundos) 
	//Al hacer clic en el btn de list meet
	//listar participantes en popoup
});
