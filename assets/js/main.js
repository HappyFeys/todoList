import { addTask, initializeTasksInDOM} from "./addTask.js";
import { deleteTask } from "./deleteTask.js";
import { checkedTask } from "./checked.js";

initializeTasksInDOM()
addTask()
checkedTask()
deleteTask()
///

const displayDate = document.querySelector('#date__display');
let date1 = new Date();

let dateperso = date1.toLocaleString('fr-FR',{
    day: 'numeric',
    month: 'long'
});

displayDate.innerText = `Aujourd'hui, le ${dateperso}`

////


