var lg = console.log;
var villes = ['nantes','paris','saint-nazaire','angers','le mans'];
villes.forEach(function(element) {
    console.log(element)
});

var contientA=function(element){
    return element.indexOf('a') >=0;

}
var lettreADansToutesLesVilles = villes.every(contientA);
console.log('lettreADansToutesLesVilles =',lettreADansToutesLesVilles);

var auMoinsUneVilleAvecUnTiret = villes.some(function(element){return element.indexOf('-') >=0;});
console.log('auMoinsUneVilleAvecUnTiret =',auMoinsUneVilleAvecUnTiret);

var villesSansTiretSansEspace = villes.filter(function(element){
    return element.indexOf('-') < 0 & element.indexOf(' ') <0;
    
});
console.log('villesSansTiretSansEspace =',villesSansTiretSansEspace);

var villesMajusculeSeTerminantParS = villes.filter(function(element){
    return element.substring(element.substring.length-2, element.substring.length-1) != 's';
}).map(function(element){
    return element.toUpperCase();
})

console.log('villesMajusculeSeTerminantParS =', villesMajusculeSeTerminantParS);

