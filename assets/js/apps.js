import{render} from "./fonctions.js";

const taches = [//tableau des object contenant des infos sur une tâche
    {
        libelle:" Je dois finir le Positionnement de ToDo Ed",
        status: false
    },
    {
        libelle:" Je dois trouver le design du mvp de ToDo Ed",
        status: false
    },
    {
        libelle:" Je dois lister les tâches",
        status: false
    },
    {
        libelle:"Me documenter sur les evenements",
        status: true
    }
];

const ul = document.getElementById("liste");
const compte = document.getElementById("compte")
const elements = [ul, compte];
const formulaire = document.forms["ajouter"];
const btnSupprimer = document.querySelectorAll("button.supprimer");

render(taches, elements);

const inputCheck = document.querySelectorAll('li > input[type = "checkbox"]');

// evenements 

inputCheck.forEach(function (input){

    input.addEventListener('change', function(){

        const li = this.parentNode;

        let tache = taches[li.dataset.id];

        tache.status = this.checked;
        
        taches[li.dataset.id] = tache;

        render(taches, elements);
    });
});
formulaire.addEventListener('submit', function(e){

    e.preventDefault();

    let divMessage = document.querySelector("div.message-erreur");
    let valeurInput = document.getElementById("tache_ajoute");
    
    if(valeurInput.value != "" && valeurInput.value != " "){
        
        taches.unshift({

            libelle: valeurInput.value,
            status: false
        });
        divMessage.textContent ="";

    }
    else{
        divMessage.textContent = "Attention vous devez rentrer une tâche non vide !!"
    }
    
    valeurInput.value = "";
    render(taches, elements);

});

btnSupprimer.addEventListener('click', function(){
  
 return true
});

