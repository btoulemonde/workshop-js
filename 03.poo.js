var lg = console.log;
function Personne(nom, prenom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function () {
        return this.nom + ' ' + this.prenom + ' ' + this.pseudo;
    }
}
var jules = new Personne('LEMAIRE', 'Jules', 'jules77');
var paul = new Personne('LEMAIRE', 'Paul', 'paul44');
lg(jules.nom);
lg(jules.prenom);
lg(jules.pseudo);
lg(jules.getNomComplet());

function afficherPersonne(Personne) {
    lg(Personne.nom);
    lg(Personne.prenom);
    lg(Personne.pseudo);
    lg(Personne.getNomComplet());
}
lg(afficherPersonne(paul));

jules.pseudo='jules44'
lg(jules.getNomComplet());

lg('age',jules.age);
Personne.prototype.age='NON RENSEIGNE';
lg('age',jules.age);

jules.age=30;
lg('age',jules.age);

Personne.prototype.getInitiales = function(){
    return this.prenom.charAt(0)+this.nom.charAt(0);
}
lg(jules.getInitiales());
