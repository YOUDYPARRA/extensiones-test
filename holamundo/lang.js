const meetUIStrings = {
	de : { presenting : "präsentation", presentation : "blidschirm", you : "ich", joined : "nimmt teil", hide : '(teilnehmer \\w*|\\w* participant)'},
	en : { presenting : "presenting", presentation : "presentation", you : "you", joined : "(has |)joined", hide : '\\w* participant'},
	es : { presenting : "presentando", presentation : "presentación", you : "tú", joined : "(se unió|se ha unido)", hide : '\\w* participant(e)?'},
	fr : { presenting : "présentez", presentation : "présentation", you : "vous", joined : "(participe|s'est joint à l'appel)", hide : '(\\w* le participant|\\w* participant)'},
	it : { presenting : "presentando", presentation : "presentazione", you : "tu", joined : "(sta partecipando|partecipa)", hide : '\\w* (partecipante|participant)'},
	nl : { presenting : "presentatie", presentation : "presenteert", you : "jij", joined : "neemt( nu|) deel", hide : '(deelnemer \\w*|\\w* particpant)'},
	pt : { presenting : "apresentando", presentation : "apresentação", you : "(eu|você)", joined : "(está|participando|aderiu( à chamada|))", hide : '\\w* participant(e)?'},
	ro : { presenting : "prezentare", presentation : "prezentare", you : "tu", joined : "(está|participando|aderiu( à chamada|))", hide : '\\w* participant(e)?'},
	zh : { presenting : "你的演示|你正在向所有人展示|停止展示|展示内容中的音频", presentation : "展示", you : "你", joined : "(已加入|加入了通话)", hide : '\\w* participant(e)?'},
}

function getMeetUIStrings(){
	let lang = document.documentElement.lang.split( '-' )[ 0 ]||'en'
	if( !meetUIStrings[ lang ] ) lang = 'en'
	meetUIStrings[ lang ].more = '(\\b\\w)? \\w* \\d+.*'
	meetUIStrings[ lang ].keep_off = 'keep_off' //placeholder to exclude spurious keep_off entries
	return meetUIStrings[ lang ]
}