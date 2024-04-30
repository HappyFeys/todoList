
export function deleteTask() {
    const zoneTask = document.querySelectorAll('.zone__tache');

    // Utiliser un événement délégué au niveau du conteneur parent des tâches
    for (let i = 0; i < zoneTask.length; i++) {
        zoneTask[i].addEventListener('click', (event) => {
            // Vérifier si le clic a été effectué sur un bouton de suppression
            if (event.target.classList.contains('btnDelete')) {
                // Supprimer la tâche parente de l'affichage
                const taskElement = event.target.closest('.task');
                taskElement.remove();
                // Supprimer la tâche du localStorage en utilisant son identifiant unique
                const taskId = taskElement.dataset.taskId;
                deleteTaskFromLocalStorage(taskId);
                console.log("Tâche supprimée");
            }
        });
    }
}

function deleteTaskFromLocalStorage(taskId) {
    // Récupérer les tâches du localStorage
    let tasksArray = JSON.parse(localStorage.getItem('tasksArray')) || [];

    // Parcourir les tableaux de tâches et supprimer la tâche avec l'identifiant donné
    for (let i = 0; i < tasksArray.length; i++) {
        if(tasksArray[i] !== null && Array.isArray(tasksArray[i])){
        tasksArray[i] = tasksArray[i].filter(task => task.id !== taskId);
    }
    }

    // Mettre à jour le localStorage
    localStorage.setItem('tasksArray', JSON.stringify(tasksArray));
    console.log(tasksArray);
}