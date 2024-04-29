export function toggleAddField() {
    const btnAddField = document.querySelectorAll('.btnAdd')
    const taskMenu = document.querySelectorAll('.addTaskMenu')
    const btnAddTask = document.querySelectorAll('.addWhite')
    
   
    for (let i = 0; i < btnAddField.length; i++) {
        btnAddField[i].addEventListener("click",()=>{
            let valueInput = btnAddTask[i].parentNode.parentNode.children[0]
            const computedStyle = window.getComputedStyle(taskMenu[i]);
            const displayStyle = computedStyle.getPropertyValue('display');
            if (displayStyle === "none") {
                taskMenu[i].style.display = "block";
            } else {
                taskMenu[i].style.display = "none";
            }
            valueInput.value=""
        }) 
    }
    for (let i = 0; i < btnAddTask.length; i++) {
        btnAddTask[i].addEventListener("click",()=>{
            
            const computedStyle = window.getComputedStyle(taskMenu[i]);
            const displayStyle = computedStyle.getPropertyValue('display');
            if (displayStyle === "none") {
                taskMenu[i].style.display = "block";
            } else {
                taskMenu[i].style.display = "none";
            }
            
        })
    }
}
