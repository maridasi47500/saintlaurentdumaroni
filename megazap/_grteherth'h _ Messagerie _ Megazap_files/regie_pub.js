var limiteRecharge = 5;
var tabParam = Array();

function randPrio(){
	// Hasard dans le choix de la pub		
	rnd = Math.floor((Math.random() * 22) + 0);
	if(rnd <= 3)	prio = 3;
	else if(rnd>10) 	prio = 7;
	else prio = 5;
	return prio;
}

function rechargePub(idParam, idPub, tabPub, timeout, rootzine, recharge) {
	if(!recharge)	recharge=0;
	prio = randPrio();
	var realKey = null;
	while(tabPub[prio].length == 0 || realKey == null || tabPub[prio][realKey][0] == idPub){
		prio = randPrio();
		realKey = Math.floor((Math.random() * tabPub[prio].length) + 0);
		}
	
	if(recharge>0){	
		if(tabPub[prio][realKey][1] != 'js'){
			$('#pub_'+idParam+'_content').show();
			if($('#pub_iframe_'+idParam+'_content')){
				$('#pub_iframe_'+idParam+'_content').hide();
			}
			$('#pub_'+idParam+'_content').html(tabPub[prio][realKey][2]);
			//console.log('Local reload -> '+tabPub[prio][realKey][1]);

			if(recharge < limiteRecharge)
				$.ajax({
					url: rootzine+'/index.php/recharge_pub.jpg?preaction=recharge_pub&id_param='+idParam+'&id_pub='+tabPub[prio][realKey][0],
					context: document.body
					}).done(function() {
				});
		}
		else if(recharge < limiteRecharge){
			$('#pub_'+idParam+'_content').hide();
			$('#pub_iframe_'+idParam+'_content').show();
			$('#pub_iframe_'+idParam+'_content').attr('src', rootzine+'/index.php/recharge_pub.jpg?preaction=mymodule&id_param='+idParam+'&java=false&subaction=ajaxpub&id_pub='+tabPub[prio][realKey][0]);
			//console.log('Ajax reload');
		}

	}
	
	tabParam[idParam] = Array(realKey, tabPub, prio, tabPub[prio][realKey][0], recharge, timeout);
	window.setTimeout(function(){
		tabParam[idParam]
		rechargePub(idParam, tabParam[idParam][3],tabParam[idParam][1], tabParam[idParam][5], rootzine, tabParam[idParam][4]+1)
		} ,timeout);
}