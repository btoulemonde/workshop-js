var lg = console.log;
function Personne(nom, prenom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function () {
        return nom + ' ' + prenom + ' ' + pseudo;
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
