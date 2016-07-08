/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */

 /**
 *Donner la taille de la chaine de caractères'
 */
function tailleString(string){
	var result = string.length;
	console.log("tailleString :" + result);
	return result;
}

/**
*Remplacer le premier e de la chaine par un espace
*/
function remplaceCar(string, a, b){
	var result = string.replace(a, b);
	console.log("remplaceCar : " + result);
	return result;
}

/**
*Concatener les deux chaines de caractères
*/
function concatString(string, b){
	var result = string.concat(b);
	console.log("concatString :" + result)
	return result;
}

/**
*Afficher le cinquième caractère de la chaine
*/
function afficherCar(string){
	var result = string.charAt(4); 
	console.log("afficherCar :" + result)
	return result;

}

/**
*Afficher les 9 premiers caractères
*/
function afficherNCar(string, a){
	var result = string.substring(0,9);
	console.log("afficherNCar :" + result)
	return result;
}

/**
*Mettre en majuscule la chaine
*/
function majusculeString(string){
	var result = string.toUpperCase();
	console.log("majusculeString :" + result)
	return result;
}

/**
*Supprimer les espaces avant et après la chaine
*/
function SupprEspaceString(txt){
	var result = txt.trim();
	console.log(result);
	return result;
}

/**
*Afficher true si le parametre d\'entrée de la fonction est de type string
*/
function IsString(string){
	var result = (typeof.string===string);
	console.log("IsString " + result);
	return result;
}

/**
*Afficher l\'extension du fichier
*/
function AfficherExtensionString(string){
	var result = param .lastindexof('.')+1;
	var res= param.substring;
	console.log("AfficherExtensionString " + result);
	return result;
		
}

/**
*Supprimer les espaces avant et après la chaine
*/
function NombreEspaceString(string){
	result = string.search(' ');
	console.log("NombreEspaceString " + result);
	return result; 
		returnn param.split(" ").length-1;


ou

var total=0;
for(i=0, i<param.length;i++){
	if (param.charAt[i]===" "){
		total++;
	}
}
return

function (str)
return str.match(" ").length;

expression régulière pour cchercher tous ce qui contient ex: /http:()_/
}
/**
 * Exercices sur les nombres et les caluls mathématiques
 */
