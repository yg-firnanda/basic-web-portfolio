/* =================
Preview Image
================= */

const img = document.getElementById('modal-image');
const modal = document.getElementById('modal');
const span = document.getElementsByClassName('close')[0];

function showModal(src) {
  modal.style.display = 'block';
  img.src = src;
}

span.onclick = function() {
  modal.style.display = 'none';
}

/* =================
Nav Show-Hide
================= */

const hamburger = document.querySelector("#hamburger");
const navLinks = document.querySelector(".nav-links")
const navLists = document.querySelectorAll(".nav-links > *")

hamburger.addEventListener("click", function() {
  navLinks.style.right = 0;
})

navLists.forEach(navLi => {
  navLi.addEventListener("click", function() {
    navLinks.style.right = "-50rem";
  })
})

/* =================

================= */