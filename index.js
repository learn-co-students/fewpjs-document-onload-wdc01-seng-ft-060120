// Your code goes here

document.addEventListener('DOMContentLoaded', function () {
    console.log('The DOM has loaded');
    const paragraph = document.querySelector('p#text');
    paragraph.textContent = 'This is really cool!';
});