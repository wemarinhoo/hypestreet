const profileButton = document.querySelector(".profile")
const menuMobile = document.querySelector(".header-functions .functions")
const gallery = document.querySelector(".product-imgs")
const photosGallery = document.querySelectorAll(".product-imgs img")

function openMenu(){
  menuMobile.classList.toggle("view")
}

profileButton.addEventListener("click", openMenu)

function changeGallery(e){
  const img = e.currentTarget
  gallery.prepend(img)
}

function clickChangeGallery(img){
  img.addEventListener("click", changeGallery)
}

photosGallery.forEach(clickChangeGallery)