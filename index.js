function Personne (id,name,password){
    this.id=id;
    this.name=name;
    this.password=password;
}

function recupererUtilisateurs(){

    fetch('https://loisirs-web-backend.cleverapps.io/users')
        .then(function(response){
            return response.json();
        })
        .then(function(tabUsers){
            
            var personne = tabUsers.map(function(user) {
                return user;
            }) 
            .filter(function(user){
                return user.name;

            })
            .map(function(user){
                return '<tr><td>' + user.id  +'</td><td>'+user.name +'</td><td>'+user.password+'</td></tr>';
            })
            
            .join('');

            document.querySelector('tbody').innerHTML=personne;

        });
}