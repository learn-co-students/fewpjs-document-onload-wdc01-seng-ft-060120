// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    updateDOM()
  });

//   console.log(
//     "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
//   );

 

  function updateDOM() {
    document.getElementById('text').textContent = "This is really cool!"
  }