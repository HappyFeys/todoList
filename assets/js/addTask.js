import { toggleAddField } from "./toggleAddField.js";

toggleAddField()
//fonction qui permet de retourner ce qui se trouve dans le tableau ou de le créer si il est vide
function getTasksFromLocalStorage() {
    const tasksJson = localStorage.getItem('tasksArray');
    return tasksJson ? JSON.parse(tasksJson) : [];
}

//la fonction pour mettre a jour mon localStorage
function updateTasksInLocalStorage() {
    localStorage.setItem('tasksArray', JSON.stringify(tasksArray));
}


//mon tableau est de base avec ce qui existe dans le localstorage ou un tableau vide si il n'y a rien
const tasksArray = getTasksFromLocalStorage();



export function initializeTasksInDOM() {
    const zoneTask = document.querySelectorAll('.zone__tache');
    for (let i = 0; i < tasksArray.length; i++) {
        if(tasksArray[i] !== null && Array.isArray(tasksArray[i])){
        for (const task of tasksArray[i]) {
                const div = document.createElement('div');
                div.classList.add('task');
                const checkbox = document.createElement('input');
                checkbox.setAttribute('type', 'checkbox');
                checkbox.classList.add('checkedBox');
                div.appendChild(checkbox);
                const p = document.createElement('p');
                p.innerText = task.taskName;
                div.appendChild(p);
                let pCategorie = document.createElement('p');
                pCategorie.innerText = task.category;
                switch (task.category.toLowerCase()) {
                    case "projet":
                        pCategorie.classList.add('projet');
                        break;
                    case "social":
                        pCategorie.classList.add('social');
                        break;
                    case "travail":
                        pCategorie.classList.add('travail');
                        break;
                    default:
                        console.log('pas de catégorie sélectionnée');
                        break;
                }
                div.appendChild(pCategorie);
                const btnDelete = document.createElement('img');
                btnDelete.src = "assets/img/icons/delete.svg";
                btnDelete.classList.add("btnDelete");
                div.appendChild(btnDelete);
                zoneTask[i].insertAdjacentElement('afterbegin', div);
            }
        }
    }
}

export function addTask() {
    const btnAddTask = document.querySelectorAll('.addWhite')
    const zoneTask = document.querySelectorAll('.zone__tache')
  for (let i = 0; i < btnAddTask.length; i++) {
    btnAddTask[i].addEventListener('click', ()=> {
        //récupération des valeurs
        let valueInput = btnAddTask[i].parentNode.parentNode.children[0].value
        console.log(valueInput);
        let valueSelect = btnAddTask[i].parentNode.children[0].value
        //création de l'objet 
        const newTask = {
            id: generateUniqueId(),
            taskName: valueInput,
            category: valueSelect
        };
        console.log(newTask);
        //il faut mtn que je push mon objet dans un tableau ou l'index correspond à l'index de ma zone de tache. 
        //si le tableau à l'index i n'existe pas on le crée
        if (!tasksArray[i]) {
            tasksArray[i] = [];
        }
        tasksArray[i].push(newTask);
        console.log(tasksArray);
        //je mets a jour mon localstorage
        updateTasksInLocalStorage()
        //création de la zone de task
        const div = document.createElement('div');
        div.classList.add('task');
        div.dataset.taskId=newTask.id;
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.classList.add('checkedBox')
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
            zoneTask[i].insertAdjacentElement('afterbegin', div)
    })
  }
}

function generateUniqueId() {
    //merci chatgpt :D
    return Date.now().toString(36) + Math.random().toString(36);
}