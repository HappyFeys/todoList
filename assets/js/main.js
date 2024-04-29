import { addTask} from "./addTask.js";
import { deleteTask } from "./deleteTask.js";

addTask()
deleteTask()
///

const displayDate = document.querySelector('#date__display');
let date1 = new Date();

let dateperso = date1.toLocaleString('fr-FR',{
    day: 'numeric',
    month: 'long'
});

displayDate.innerText = `Aujourd'hui, le ${dateperso}`