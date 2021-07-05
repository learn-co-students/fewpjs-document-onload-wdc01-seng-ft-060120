// Your code goes here
// wrong below
// document.addEventListener("DOMContentLoaded", function() {
//     let text = document.getElementsById('text')
//     text.innerHTML = "This is really cool!"
//   });

document.addEventListener("DOMContentLoaded", function() {
    changeDOM()
})

function changeDOM() {
    let text = document.getElementById('text')
    text.innerHTML = "This is really cool!"
}