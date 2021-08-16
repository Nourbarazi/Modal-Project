var footer = document.querySelector("footer"),
    openBtn = document.getElementById("open-btn"),
    closeBtn = document.getElementById("close-btn");

openBtn.addEventListener("click", function(){
    footer.classList.add("open-modal");
})

closeBtn.addEventListener("click", function(){
    footer.classList.remove("open-modal");
})
