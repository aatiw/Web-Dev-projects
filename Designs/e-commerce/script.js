const ham = document.getElementById("ham");
const link = document.getElementById("links");
const close = document.getElementById("close");

ham.addEventListener('click', function(){
    link.classList.add("actives");
})

close.addEventListener('click', function(){
    link.classList.remove("actives");
})