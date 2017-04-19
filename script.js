///Reqs: Extract number of items in cart, Cart Total, Cart images

//number of products. 3 solutions
var numberOfProducts = document.getElementsByClassName("mini-cart-container")[0].getAttribute("data-quantity")

//orderTotal displayed in dollars
var orderTotal = document.getElementsByClassName("order-value")[0].innerText

//html collection
var cartImages = document.querySelectorAll(".mini-cart-image img")

//Array
var cartImagesArray = [...cart_images]

//get srcs
var cartSrcLinks = cart_images_array.map(function(product){return product.src})


function jsAdvert(){
  let numberOfProducts = document.getElementsByClassName("mini-cart-container")[0].getAttribute("data-quantity")
  let cartSrcLinks
  let orderTotal
  if (numberOfProducts > 0 ){
    orderTotal = document.getElementsByClassName("order-value")[0].innerText
    cartSrcLinks = collectImageSrcs()

  } else {
    return
  }
  console.log(cartSrcLinks)
  console.log(numberOfProducts)
  console.log(orderTotal)
}


function collectImageSrcs(){
  let cartImages = document.querySelectorAll(".mini-cart-image img")
  let cartImagesArray = [...cartImages]
  return cartImagesArray.map(function(product){return product.src})
  //.map returns a new array, but you still need explicit return to return this new array as the value of collectImageSrcs()
}

function popup(){
  
}

jsAdvert()
