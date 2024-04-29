import { toggleAddField } from "./toggleAddField.js";

toggleAddField()
export function addTask() {
    const btnAddTask = document.querySelectorAll('.addWhite')
    const zoneTask = document.querySelectorAll('.zone__tache')
  for (let i = 0; i < btnAddTask.length; i++) {
    btnAddTask[i].addEventListener('click', ()=> {
        //récupération des valeurs
        let valueInput = btnAddTask[i].parentNode.parentNode.children[0].value
        console.log(valueInput);
        let valueSelect = btnAddTask[i].parentNode.children[0].value
        console.log(valueSelect);
        //création de la zone de task
        const div = document.createElement('div');
        div.classList.add('task');
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        div.appendChild(checkbox);
        const p = document.createElement('p');
        p.innerText = valueInput;
        div.appendChild(p);
        let pCategorie = document.createElement('p')
        pCategorie.innerText= valueSelect;
        switch (valueSelect.toLowerCase()) {
            case "projet":
                pCategorie.classList.add('projet')
                break;
            case "social":
                pCategorie.classList.add('social')
                break;
            case "travail":
                pCategorie.classList.add('travail')
                break;
        
            default:
                console.log('pas de catégorie sélectionnée');
                break;
        }
        div.appendChild(pCategorie)
        const btnDelete = document.createElement('img')
        btnDelete.src = "assets/img/icons/delete.svg";
        btnDelete.classList.add("btnDelete")
        div.appendChild(btnDelete)
        zoneTask[i].appendChild(div)
        
    })
  }
}



















function createTask(element) {
    const div = document.createElement('div');
    div.classList.add('task');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    div.appendChild(checkbox);
    const p = document.createElement('p');
    div.appendChild(p);
}

