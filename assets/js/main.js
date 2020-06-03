const listeTaches = [//tableau des object contenant des infos sur une tâche
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
]

const formulaire = document.forms["ajouter"];
const ul = document.getElementById("liste")

//parcourir le tableau et gérer l'affichage des tâches 
listeTaches.forEach( index =>{
   
    ul.innerHTML += `<li ${index.status ? 'class= "barrer"' : ''}>
                        <input type="checkbox"> ${index.libelle}
                        <button class="supprimer" >
                        <i class="fas fa-trash-alt"></i>
                        </button>
                    </li>`;
});

//écouter l'évenement submit

formulaire.addEventListener('submit', function(e){
    
    e.preventDefault();//annuler le comportement par défaut
    
    let valeurInput = this["tache_ajoute"].value;//récupérer la valeur de l'input

    listeTaches.push({//envoyer les nouvelles entrées dans le tableau
       
        libelle: valeurInput,
        status : false
    });

    ul.innerHTML += `<li>
                        <input type="checkbox"> ${valeurInput}
                        <button class="supprimer" >
                        <i class="fas fa-trash-alt"></i>
                        </button>
                    </li>`

});

