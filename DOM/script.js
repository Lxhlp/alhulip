//const grandparent = document.getElementById("grandparent-id")

//const grandparent = document.querySelector("#grandparent-id")
//const parents = Array.from(document.getElementsByClassName("parents"))
//parents.forEach(changeColor)

const parents = document.querySelectorAll(".parents")
parents.forEach(changeColor)
changeColor(grandparent)

// grandparent.style.backgroundColor = "blue"
function changeColor(element) {
    element.style.backgroundColor = "orange"
}