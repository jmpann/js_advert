///Reqs: Extract number of items in cart, Cart Total, Cart images


document.body.onload = jsAdvert

//Returns arry of DOM object elements related to each product. Need to convert to array because later element depends on iterating over array with forEach method. HTML collection does not inherit forEach
function collectProductData(){
  let productData = $( ".mini-cart-product" )
  let productDataArray = Array.prototype.slice.call(productData)
  return productDataArray
}


function jsAdvert(){
  let numberOfProducts = document.getElementsByClassName("mini-cart-container")[0].getAttribute("data-quantity")
  let products
  if (numberOfProducts > 0 ){
    products = collectProductData()
    addModal(products, numberOfProducts)
    configureCSS()
    return
  }
}

//Construct modal Container and append to DOM
function addModal(products, numberOfProducts) {
  let $bounceOverlay = $('<div id="overlay"></div>')
  let $bounceModal = $('<div id="(bounceModal)"></div>')
  let $modalContent = $('<div id="modalContent"></div>')
  let $closeBtn = $('<button id="closeBtn" class="advertBtn">Continue Shopping</button>')
  let $checkoutBtn = $('<button id="checkoutBtn" class="advertBtn">Checkout</button>')

  //Append header:
  let $modalHeader = $('<div id="modalHeader"></div>')
  let $marmotLogo = $('<img id="logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Marmot_Logo.svg/1024px-Marmot_Logo.svg.png" height="42" width="42">')
  let $headerText = $("<p class='headerText'>Find Your Adventure</p>")
  $modalContent.append($modalHeader)
  $modalHeader.append($marmotLogo)
  $modalHeader.append($headerText)

  //Append number of items in cart
  let $cartQuantity = $(`<p class="cartQuantity">Your Cart has ${numberOfProducts} items:</p>`)
  $modalContent.append($cartQuantity)

  //Append content container div to Modal
  $bounceModal.append($modalContent)


  let $productContainer = $('<ul id="productContainer"></ul>')
  $productContainer.appendTo($modalContent)


  //this is here instead of in its own function. When it was wrapped in a function, it could not find the $modalContent dom element. I am not sure why.
  //Factory for making product cards. Relies on products being an array passed into the addModal function. will break if products is html collection instead of array.
  products.forEach(function(product, index){
    let $productCard = $(`<li id=product-${index} class="productCard"></li>`)
    let $imageSrc = product.querySelector(".mini-cart-image img").src
    let $name = product.querySelector(".mini-cart-name a").innerText
    let $quantity = product.querySelector(".mini-cart-pricing").querySelector(".value").innerText

    $productCard.append(`<p class="productCardText">${$name}</p>`)
    $productCard.append(`<img src=${$imageSrc}></img>`)
    $productCard.append(`<p class="productCardText">Qty: ${$quantity}</p>`)
    $productContainer.append($productCard)
   })

  //Append Subtotal and to bottom of Products Grid
  let subtotal = document.getElementsByClassName("order-value")[0].innerText
  let $cartSubtotal = $(`<p class="cartSubtotal">Subtotal: ${subtotal}</p>`)
  $modalContent.append($cartSubtotal)

  //Append Buttons.
  $modalContent.append($closeBtn)
  $modalContent.append($checkoutBtn)

  $closeBtn.click(function(e){
    e.preventDefault()
    $bounceModal.hide()
    $bounceOverlay.hide()
    $(window).unbind('resize.bounceModal')
  })

  $checkoutBtn.click(function(e){
   e.preventDefault()
   window.location = "https://marmot.com/cart"
  })

  //Modal centering functions by updating modal CSS and triggered when window resizes
  jQuery.fn.center = function (){
    this.css("position","fixed")
    this.css("top", ($(window).height() / 2) - (this.outerHeight() / 2))
    this.css("left", ($(window).width() / 2) - (this.outerWidth() / 2))
    return this
  }

  //Function works by using jQuery library to continuously compare position of the vertical position of the top of the scrollbar to height of the entire doc - the height of current viewport
  //compare this value to the spec trigger of 90%
  //bug with user experience. cannot find a good way to delay the modal from re-triggering at 90% once a user closes the pop. tried multiple workarounds. either haven't worked or were a poorer user experience than current implementation.
  $(window).scroll(function(){
    let winTop = $(window).scrollTop()
    let docHeight = $(document).height()
    let winHeight = $(window).height()
    let scrollTrigger = 0.90
    if  ((winTop/(docHeight-winHeight)) > scrollTrigger) {
      $bounceModal.show()
      $bounceOverlay.show()
    }
 })


 $(document).ready(function(){
   $('body').append($bounceOverlay, $bounceModal)
   $bounceModal.center()
   $(window).resize(function(){
     $bounceModal.center();
   })
 })
 $bounceModal.hide()
 $bounceOverlay.hide()


}


function configureCSS(){
  //bug: modal does not rest absolutely on top of all other elements. Currently ".home-rfk-wrapper" and the site search bar are positioned higher
  $('#overlay').css({
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "black",
    opacity: "0.5",
    filter: "alpha(opacity=50)",
    "z-index": "6,000,000"
  })

  $('#bounceModal').css({
    background: " 0 0 repeat",
    "border-radius": "14px",
    padding: "8px",
    display: "flex",
    "z-index": "7,000,000"
  })

  $('#modalContent').css({
    width: "500px",
    "border-radius": "8px",
    "text-align": "center",
    background: "#fff",
    padding: "5px",
  })

  $('p.cartQuantity').css({
    "font-size": "18px",
    margin: "5px"
  })

  $('#productContainer').css({
    padding: "0",
    "margin-top": "5px",
    "margin-bottom": "5px",
    "list-style": "none",
    display: "flex",
    "flex-flow": "row wrap",
    "justify-content": "space-around"
  })

  $('li.productCard').css({
    height: "180px",
    width: "155px",
    "font-color": "black",
    "font-size": "14px",
    "text-align": "center",
  })

  $('p.productCardText').css({
    margin: "9px"
  })

  $("p.cartSubtotal").css({
   "font-size": "18px",
   margin: "5px"
  })

  $('#checkoutBtn').css({
    appearance: "button",
    "text-decoration": "none",
    color: "initial",
    width: "120px",
    "border-radius": "25px",
    background: "#73AD21"
  })

  $('#closeBtn').css({
    appearance: "button",
    "text-decoration": "none",
    color: "initial",
    width: "120px",
    "border-radius": "25px",
    background: "#73AD21"
  })

  $('.advertBtn').css({
    border: 'none',
    color: 'white',
    padding: '15px 25px',
    'text-align': 'center',
    'text-decoration': 'none',
    'display': 'inline-block',
    'font-size': '16px',
    'margin': '10px 10px',
    cursor: 'pointer',
    'border-radius': '8px',
    width: '200px',
  })

  $('#checkoutBtn').css({
    'background-color': '#4CAF50'
  })

  $('#closeBtn').css({
      'background-color': '#008CBA'
  })

  $('#modalHeader').css({
      display: 'inline-block',
      margin: "10px",
      overflow: "hidden",
      width: "300px",
      height: "50px",
  })

  $('p.headerText').css({
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
    'font-size': '24px',
    width: "300px"
  })

   $('#logo').css({
     'margin-right': '15px',
     position: 'relative',
     top: '50%',
     transform: 'translateY(-50%)',
     float: "left"
   })
}

jsAdvert()


//things to do. Add flex header to modal with content Your Cart
//another flex row after this header - # Items | Subtotal: $
//shift continue shopping and checkout buttons to footer. continue shopping is first
//edit css on buttons
//stretch find a createive way to include Marmot - Find Your Adventure
