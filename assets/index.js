let aproposDemoi = {
    nom : "Rasoamanana",
    prenom : 'Sitraka',
    profession : 'Je suis developpeur web junior',
    competence : [
        {
            langage : 'HTML, CSS,Javascripte',
            framwork :'Bootstrap',
            bdd : 'SQL, Merise'
        }
    ],
    formation : [
        {
            annee :' 2021 à 2022 ',
            diplome : 'Licence en Informatique',
            option : 'Base de donnees et genie logiciel',
            universite : 'CNTMAD'
        },
        {
            annee : '2017 à 2018',
            diplome : 'baccalaurea',
            option : 'scientifique',
            universite : 'ACCEM'
        },
    ],
    experience : [
        {
            anne : 'octobre 2022',
            projet : 'Application annuaire',
            objectif : 'obtention Licence CNTEMAD'

        },
        {
            anne : 2022,
            projet : 'Gestion bibliotheque',
            objectif : 'etude avec des amis'
        },
        {
            anne : 2022,
            projet : 'site vitrine pour bijouterie',
            objectif : 'etude personnel'
        },
    ],
    contact : {
        adresse:'Antananarivo Madagascar',
        telephone : '+261 0344320127',
        email : 'rasoamananasitraka03@gmail.com'
    },
}
//a propos
document.getElementById('item-nom').innerText = aproposDemoi.nom;
document.getElementById('item-prenom').innerText = aproposDemoi.prenom;
document.getElementById('item-prof').innerText = aproposDemoi.profession;

// competence
let mesCompetence = document.getElementById('item-competence');
let htmlUl = '<ul>';

for(index in aproposDemoi.competence){
    htmlUl += '<li>'+ 'langage:' + aproposDemoi.competence[index].langage + 
              '<li>'+ 'framwork :' + aproposDemoi.competence[index].framwork + 
              '<li>'+ 'base des donnees :'+ aproposDemoi.competence[index].bdd +' </li>';
}
mesCompetence.innerHTML += htmlUl;

// formation
let mesFormation = document.getElementById('item-formation');

for(index in aproposDemoi.formation){
    mesFormation.innerHTML += aproposDemoi.formation[index].annee +'<br>'
    + aproposDemoi.formation[index].diplome +'<br>'
    + aproposDemoi.formation[index].option +'<br>'
    + aproposDemoi.formation[index].universite +'<br>';
}

// experiences
let mesExperience = document.getElementById('item-exper');
let htmlexp = '<ul>'
for(index in aproposDemoi.experience){
    htmlexp += '<li>' + aproposDemoi.experience[index].anne + ' : '  
     + aproposDemoi.experience[index].projet + ' / ' 
     + aproposDemoi.experience[index].objectif +' ';

}
mesExperience.innerHTML += htmlexp;

// contact
let mesContact = document.getElementById('item-contact');

mesContact.innerHTML += aproposDemoi.contact.adresse + '<br>';
mesContact.innerHTML += aproposDemoi.contact.telephone + '<br>';
mesContact.innerHTML += aproposDemoi.contact.email;