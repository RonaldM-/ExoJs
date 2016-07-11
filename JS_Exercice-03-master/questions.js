function CreationTableauLangages(){

    var langages = [];
    langages.push("Html","CSS","Java","PHP");
    console.log(langages);
    
    return langages;
}

function CreationTableauNombres(){
    
    var nombres = []
    nombres.push(0,1,2,3,4,5);
    console.log(nombres);
    
    return nombres;
}

function RemplacementElement(langages){
    langages[2] = "Javascript";
    
    console.log(langages);
    return langages;
}

function AjoutElementLangages(langages){
    langages.push("Ruby", "Python");
    
    console.log(langages);
    return langages;
    
}