export function deleteTask() {
    const btnDelete = document.querySelectorAll('.btnDelete');
    console.log(btnDelete);
    for (let i = 0; i < btnDelete.length; i++) {
        btnDelete[i].addEventListener("click", ()=>{

            console.log("tu as click sur le delete");
        })
    }
}