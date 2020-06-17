//recupère le tableau et les éléments du tableau"elements"

export const render = (taches, [ul, compte]) => {
    //lister les taches 
    ul.innerHTML = taches.map(function ({libelle, status}, index) {//syntax destructuring

        return `<li class="${status ? "barrer" : "" }" data-id="${index}">
                    <input type ="checkbox" ${status ? "checked" : ""}>${libelle}
                    <button class="supprimer" >
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </li>`
    }).join(" ") //transformer le tableau en chaine de caractère 

    compte.textContent = taches.length;

    const inputCheck = document.querySelectorAll('li > input[type = "checkbox"]');
    
    const btnSupprimer = document.querySelectorAll("button.supprimer");

    inputCheck.forEach(function (input){

        input.addEventListener('change', function () {

            controleTache(taches, this, [ul, compte]);
        }) 
    });

    btnSupprimer.forEach(function(button){

        button.addEventListener('click', function () {

            deleteTache(taches, this, [ul, compte]);
        })
    });
}

function deleteTache(taches, position, elements){

    const li = position.parentNode;

    taches.splice(li.dataset.id,1);

    render(taches, elements);
}

function controleTache(taches, position, elements){

        const li = position.parentNode;

        let tache = taches[li.dataset.id];

        tache.status = position.checked;
        
        taches[li.dataset.id] = tache;

        render(taches, elements)
}