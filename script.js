const openToggler = document.querySelector(".open-toggler"),
  closeToggler = document.querySelector(".close-toggler"),
  navbarContainer = document.querySelector(".navbar-container");
 
openToggler.addEventListener("click", showSidebar);
closeToggler.addEventListener("click", hideSidebar); 

function showSidebar() {
  navbarContainer.classList.add("show-sidebar");
  openToggler.classList.add("hide-element");
  closeToggler.classList.add("show-element");
}

function hideSidebar() {
  navbarContainer.classList.remove("show-sidebar");
  openToggler.classList.remove("hide-element");
  closeToggler.classList.remove("show-element");
}
 
