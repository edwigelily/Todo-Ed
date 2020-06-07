//recupère le tableau et les éléments du tableau"elements"

export const render = (taches, [ul, compte]) =>{
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

    return true;
}