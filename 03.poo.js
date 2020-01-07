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

function afficherPersonne(personne) {
    lg(personne.nom);
    lg(personne.prenom);
    lg(personne.pseudo);
    lg(personne.getNomComplet());
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

var robert = {
    prenom: 'Robert',
    nom: 'LEPREFET',
    pseudo: 'robert77',
    getNomComplet: function() {
        return robert.nom + ' ' + robert.prenom + ' ' + robert.pseudo;
    },
}

lg(afficherPersonne(robert));


//Client
function Client(nom,prenom,pseudo,numeroClient) {
    Personne.call(this, nom,prenom,pseudo);
    this.numeroClient=numeroClient;
    this.getInfos=function(){
        return this.numeroClient +' '+this.nom+' '+this.prenom;
    };
}

var steve = new Client('LUCAS', 'Steve', 'steve44', 'A01');

lg(afficherPersonne(steve));
lg('nmero client', steve.numeroClient);
lg(steve.getInfos());