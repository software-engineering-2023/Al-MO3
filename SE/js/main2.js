var sidebarToggler = document.querySelector(".sidebar-toggler")
var flexLayout = document.querySelector(".flex-layout")

var navbarToggler = document.querySelector(".nav-toggler")
var navDrawer = document.querySelector(".nav-collapse")

sidebarToggler.addEventListener("click", () => flexLayout.toggleAttribute("sidebar-active"))
navbarToggler.addEventListener("click", () => navDrawer.toggleAttribute("expanded"))