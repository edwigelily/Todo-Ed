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

    let valeurInput = document.getElementById("tache_ajoute");
    
    taches.unshift({

        libelle: valeurInput.value,
        status: false
    });
    valeurInput.value = "";
    render(taches, elements);

});


