;(function() {
	//said();
	getParticipants();
function said(){
	var json={
		"msj":"saludos",
		"time":5500
	};
	theTime(
		function(){
			console.log("hola mundo desde callback dentro de said");
		}
		,json.time);
}
function theTime(callback,wait){
	let tim=wait;
	window.setTimeout(function(fn){
		//console.log("terminó la espera");
		callback();		
		console.log("PASARON "+tim+ " MS");
		theTime(callback,tim);

	},tim);
}
function getParticipants(){
	theTime(
		function(){
			let loid = []
			let tmparr=[];
			let lou=[]
			let xxx
			let participants = document.querySelectorAll( '[data-participant-id], [data-requested-participant-id]' )
			//console.log(participants);
			//let participants = document.querySelectorAll('[data-self-name],[data-participant-id],[data-requested-participant-id]')
			//let now = new Date(), ctime = now.getHours() + ':' + twod( now.getMinutes() )
			//let changed = false
			for ( let aa of participants ){
				let pn = cleanseInnerHTML( aa )
				if( pn === '' )	continue
					//console.log("PN "+pn)
				let lc = pn.toLowerCase().trim()
				if ( lc.replace( "re_you" , '' ) == '' ) {
					continue
				}
				//console.log("LC "+lc);
				lou.push(lc);
				 xxx = JSON.stringify(lou);
				if( lc.indexOf( uiStrings.presenting ) >= 0 || lc.indexOf( uiStrings.presentation ) >= 0 ) continue
				let pidr = aa.dataset.participantId||aa.dataset.requestedParticipantId||aa.dataset.initialParticipantId
				if ( !pidr ){
					continue
				}
				pid = pidr.split( '/' )[3]
				// if necessary, add to list of id's
				if ( !loid.includes(pid) ){
					//console.log(pid);
					loid.push(pid)
				}
			}
			/**if(lou.length>tmparr.length){
			console.log("Guardando arreglo "+lou.length);
			console.log("ultimo elemento de array "+lou[lou.length-1]);
			}**/
				tmparr=lou;
				chrome.storage.sync.get(['participants'],function(r){
			        console.log(r)
			        //if((r.participants=== 'undefined') || (lou.length>r.participants.length)){ hacer pruebas de if por partes
			        if(r.participants!='undefined'){
			        	console.log("no es indefinido");
			        	if(lou.length>r.participants.length){
			        		console.log("el tamaño de la lista es mayor que el del storage, por lo tanto, settear participants");
						chrome.storage.sync.set({'participants':lou},function(){console.log("participantes guardados")})
			        	}
			        	console.log("es undefined");
			        	//hacer set en store
						//hacer q se coloque en html el listado de meet usando getelement o  create element o appendchild
						//verificar si se puede llamar a una funcion, de ser asi, llamar funcion colocar tabla html que se encuentra en popup.js
						//verificar si se puede llamar a funcion local para colocar html en popup.html usando codigo del api de chrome execute script
						//
			        }
			    })
		}
		,6500);
}

function cleanseInnerHTML(tih){
	if (!tih.querySelector('[data-self-name]')){
		//console.log( 'no data-self name\n', tih.innerHTML )
		return ''
	}
	let nm = tih.querySelector( '[data-self-name]' ).innerHTML 
	if ( !nm ){
		//console.log( 'data-self name is empty\n', tih.innerHTML )
		return ''
	}
	nm=tih.innerHTML
	
	/* 	to remove accented characters... from StackOverFlow
	const str = "Crème Brulée"
	str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
	*/

	let alltext=nm.replace( /<[^>]*?>/ig,'\n' )
		.replace( re_you, '' )
		.replace( re_replace, '' )
		.replace( /\n\s*\n*/gm, '\n' )
		.replace( /(\(|（).*(\)|）)/ig, '' )
		.replace( duplicatedLines, "$1" )
		.trim()
		.split( '\n' )
		
	if( !alltext == alltext[0] ){
	}
	return alltext[0]
}

function twod(v){
	return ('0'+Number(v)).slice(-2)
}
let uiStrings = getMeetUIStrings()
// create regexes
let re_you = new RegExp('^' + uiStrings.you + '$' , "gi" );
let re_replace = new RegExp('^' + uiStrings.you + '$|\\b' + uiStrings.joined + '(\\b)*|(\\b)*' + uiStrings.more + '(\\b)*|(\\b)*' + uiStrings.keep_off + '(\\b)*|' + uiStrings.hide, "gi" );
let duplicatedLines = /^(.*)(\r?\n\1)+$/gim

})()