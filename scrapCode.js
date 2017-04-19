
//collection of ideas. not part of production code

//returns array of html collection of products. these are objects
var x = document.getElementsByClassName("mini-cart-product")

//returns html collection of children objects of 1st product
var y = document.getElementsByClassName("mini-cart-product")[0].children



//returns html collection of cart-images
var cart_images = document.getElementsByClassName("mini-cart-image")
var cart_images_srcs = document.querySelectorAll(".mini-cart-image img").getAttribute('src')

//returns src of the class's div.
var cart_image0src = cart_image0.querySelector(".mini-cart-image img").getAttribute('src')

cart_images.map(function(product_image){
  product_image.querySelector(".mini-cart-image img").getAttribute('src')
})

var number_of_products3 = document.getElementsByClassName("mini-cart-product").length
console.log(number_of_products)

var number_of_products2 = document.getElementsByClassName("minicart-quantity")[0].innerText
console.log(number_of_products)
