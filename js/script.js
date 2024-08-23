const profileButton = document.querySelector(".profile")
const dropMenu = document.querySelector(".functions-menu")
const gallery = document.querySelector(".product-imgs")
const photosGallery = document.querySelectorAll(".product-imgs img")
const cartButton = document.querySelector(".cart-button")
const cartContainer = document.querySelector(".cart-container")
const closeCart = document.querySelector(".close-cart")
const keepBuying = document.querySelector(".keep-buying")
const body = document.querySelector("body")

function openMenu(){
  dropMenu.classList.toggle("view")
}

function openCart(){
  cartContainer.classList.toggle("view")
  body.classList.toggle("no-scroll")
}

profileButton.addEventListener("click", openMenu)

cartButton.addEventListener("click", openCart)

closeCart.addEventListener("click", openCart)

keepBuying.addEventListener("click", openCart)

function changeGallery(e){
  const img = e.currentTarget
  gallery.prepend(img)
}

function clickChangeGallery(img){
  img.addEventListener("click", changeGallery)
}

photosGallery.forEach(clickChangeGallery)