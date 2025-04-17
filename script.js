const portrait = document.getElementById("portrait");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const close = document.getElementById("close");
const overlay = document.getElementById("overlay");

portrait.onclick = function(){
    modal.style.display = "flex";
    modal.classList.add("show");
    overlay.style.display = "block";
    overlay.classList.add("show");
};

close.onclick = function() {
    overlay.classList.remove("show");
    modal.classList.remove("show");
    setTimeout(() => {
        modal.style.display = "none";
        overlay.style.display = "none";
    }, 300);
};

overlay.onclick = function() {
    overlay.classList.remove("show");
    modal.classList.remove("show");
    setTimeout (() => {
        overlay.style.display = "none";
        modal.style.display = "none";
    }, 300);
    
};