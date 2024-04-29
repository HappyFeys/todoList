export function deleteTask() {
    const zoneTask = document.querySelectorAll('.zone__tache');

    // Utiliser un événement délégué au niveau du conteneur parent des tâches
    for (let i = 0; i < zoneTask.length; i++) {
        zoneTask[i].addEventListener('click', (event) => {
            // Vérifier si le clic a été effectué sur un bouton de suppression
            if (event.target.classList.contains('btnDelete')) {
                // Supprimer la tâche parente
                event.target.closest('.task').remove();
                console.log("Tâche supprimée");
            }
        });
    }
}