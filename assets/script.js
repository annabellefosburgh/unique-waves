function readLocalStorage(projectName) {
    var project = projectName.toString()
    return localStorage.project
}
function createTableRow(dueDate) {
    var tr = document.createElement("li")

    if (dueDate < todaysDate) {
        tr.className = "not-late"
    } else if (dueDate = todaysDate) {
        tr.className = "due-today"
    } else {
        tr.className = "late"
    }
    
}