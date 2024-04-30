export function checkedTask() {
    const zoneTask = document.querySelectorAll('.zone__tache');
    for (let i = 0; i < zoneTask.length; i++) {
        zoneTask[i].addEventListener('click', (event) => {
            // Vérifier si le clic a été effectué sur un bouton de checkbox
            
            if (event.target.classList.contains('checkedBox')) {
                if(event.target.checked ){
                    event.target.closest('.task').classList.toggle('task--checked')
                    zoneTask[i].appendChild(event.target.closest('.task'))
                } else event.target.closest('.task').classList.toggle('task--checked')
            } 
        });
    }
}

