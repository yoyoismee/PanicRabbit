import swal from 'sweetalert';
import magic from './data'
import optionsStorage from './options-storage.js';

async function init() {

	const options = await optionsStorage.getAll();

	var x = window.location.toString()

	for (i = 0 ; i < magic.scam_site.length;i++){
		if (x.toLocaleLowerCase().includes(magic.scam_site[i])){
			await swal({
				title: "Panik!",
				text: magic.scam_site[i] + " is probably a scam",
				icon: "error",
				dangerMode: true,
				buttons: ["let's GTFO","YOLO"],
  			});
			  break;
		}
	}

	for (i = 0 ; i < magic.reported_site.length;i++){
		if (x.toLocaleLowerCase().includes(magic.reported_site[i])){
			await swal({
				title: "Panik!",
				text: magic.reported_site[i] + " is reported",
				icon: "warning",
				dangerMode: true,
				buttons: ["let's GTFO","YOLO"],
  			});
			  break;
		}
	}

	var ed = require('edit-distance');
	var insert, remove, update;
	insert = remove = function(node) { return 1; };
	update = function(stringA, stringB) { return stringA !== stringB ? 1 : 0; };
	var tmp =999
	var minDistance = 999;
	var similarSite = ""
	x=x.replace("http://","").replace("https://","").split("/")[0].split(".").slice(-2);
	x = x[0] + "." + x[1]
	console.log(x)
	console.log("---")
	for (i = 0 ; i < magic.known_site.length;i++){
		tmp =ed.levenshtein(x, magic.known_site[i], insert, remove, update);
		console.log(tmp)
		if (tmp.distance <= minDistance){
			minDistance = tmp.distance
			similarSite = magic.known_site[i]
		}
	}
	if (minDistance > 0 & minDistance <= 3){
		await swal({
			title: "Panik!",
			text: "are you looking for " + similarSite,
			icon: "info",
			dangerMode: true,
			buttons: ["let's GTFO","YOLO"],
	});
	}

  var elements = document.getElementsByTagName('*');
  loop1:
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];
            if (node.nodeType === 3) {
                var text = node.nodeValue;
				for (k=0; k< magic.high_risk_keyword.length;k++) {
				if (text.toLowerCase().includes(magic.high_risk_keyword[k].toLowerCase())){
					await swal({
						title: "Panik!",
						text: magic.high_risk_keyword[k] + " is scary",
						icon: "warning",
						dangerMode: true,
						buttons: ["let's GTFO","YOLO"],
					  });	
					break loop1;
					}
				}
            }                         
        }
    }

}

init();
