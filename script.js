///Reqs: Extract number of items in cart, Cart Total, Cart images


document.body.onload = jsAdvert

function jsAdvert(){
  let numberOfProducts = document.getElementsByClassName("mini-cart-container")[0].getAttribute("data-quantity")
  let products
  if (numberOfProducts > 0 ){
    products = collectProductData()
    addModal(products, numberOfProducts)
    // productCardConstructor(products)
    return
  }
  console.log(numberOfProducts)

}

//Construct modal Container and append to DOM
function addModal(products, numberOfProducts) {
  let $bounceOverlay = $('<div id="overlay"></div>')
  let $bounceModal = $('<div id="bounceModal"></div>')
  let $modalContent = $('<div id="modalContent"></div>')
  let $closeBtn = $('<button id="closeBtn" class="advertBtn">Continue Shopping</button>')
  let $checkoutBtn = $('<button id="checkoutBtn" class="advertBtn">Checkout</a>')
  let $modalSubtotal= $('<div id="modalSubtotal"></div>')

  $bounceOverlay.css({
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "black",
    opacity: "0.5",
    filter: "alpha(opacity=50)",
  })

  $bounceModal.css({
    background: " 0 0 repeat",
    width: "500px",
    "border-radius": "14px",
    padding: "8px",
    display: "flex",
  })

  $modalContent.css({
    "border-radius": "8px",
    "text-align": "center",
    background: "#fff",
    padding: "20px",
  })

  $checkoutBtn.css({
    appearance: "button",
    "text-decoration": "none",
    color: "initial",
    width: "120px",
    "border-radius": "25px",
    background: "#73AD21"
  })

  $closeBtn.css({
    appearance: "button",
    "text-decoration": "none",
    color: "initial",
    width: "120px",
    "border-radius": "25px",
    background: "#73AD21"
  })

  //Modal centering functions by updating modal CSS and triggered when window resizes
    jQuery.fn.center = function ()
    {
        this.css("position","fixed");
        this.css("top", ($(window).height() / 2) - (this.outerHeight() / 2));
        this.css("left", ($(window).width() / 2) - (this.outerWidth() / 2));
        return this;
    }

      $(window).scroll(function(){
        var wintop = $(window).scrollTop(), docheight = $(document).height(), winheight = $(window).height();
        var  scrolltrigger = 0.90
        if  ((wintop/(docheight-winheight)) > scrolltrigger) {
          $bounceModal.show()
          $bounceOverlay.show()
         }
       })

       $(document).ready(function(){
         $('body').append($bounceOverlay, $bounceModal)
         $bounceModal.center();
           $(window).resize(function(){
             $bounceModal.center();
           });
       });
       $bounceModal.hide()
       $bounceOverlay.hide()

  //Append header:

  //Append number of items in cart
  let $modalQuantity = $('<div id="modalQuantity"></div>')
  $modalQuantity.text(function() {
    return `Your cart has ${numberOfProducts} items:`
  });
  $modalContent.append($modalQuantity)

  //Append content container div to Modal
  $bounceModal.append($modalContent)


   var $productContainer = $('<ul id="productContainer"></ul>')
   $productContainer.appendTo($modalContent)
   $productContainer.css({
     padding: "0",
     "margin-top": "5px",
     "margin-bottom": "10px",
     "list-style": "none",
     display: "flex",
     "flex-flow": "row wrap",
     "justify-content": "space-around"
   })
//this is here instead of in its own function. When it was wrapped in a function, it could not find the $modalContent dom element. I am not sure why.
   products.forEach(function(product, index){
     let $productCard = $(`<li id=product-${index} class="productCard"></li>`)
     let $imageSrc = product.querySelector(".mini-cart-image img").src
     let $name = product.querySelector(".mini-cart-name a").innerText
     let $quantity = product.querySelector(".mini-cart-pricing").querySelector(".value").innerText

     $productCard.append(`<p class="productText">${$name}</p></div>`)
     $productCard.append(`<img src=${$imageSrc}></img>`)
     $productCard.append(`<p class="productText">Qty: ${$quantity}</p></div>`)
     $productContainer.append($productCard)
       console.log($productCard)

     $productCard.css({
         height: "180px",
         width: "120px",
         "font-color": "black",
         "font-size": ".7em",
         "text-align": "center",

       })
     })

     $('p.productText').css({
       margin: "9px"
     })

     //Append Subtotal and to bottom of Content
       let orderTotal = document.getElementsByClassName("order-value")[0].innerText
       console.log(orderTotal)
       $modalSubtotal.text(function() {
         return "Subtotal: " + orderTotal;
       });
       $modalContent.append($modalSubtotal)

     //Append Buttons.
       $modalContent.append($closeBtn)
       $modalContent.append($checkoutBtn)

       $closeBtn.click(function(e){
         e.preventDefault();
         $bounceModal.hide();
         $bounceOverlay.hide();
         $(window).unbind('resize.bounceModal')
       });

       $checkoutBtn.click(function(e){
         e.preventDefault()
         window.location = "https://marmot.com/cart"
       })
   }

//Construct individual product cards and append to modal
function collectProductData(){
  let productData = $( ".mini-cart-product" )
  let productDataArray = Array.prototype.slice.call(productData)
  return productDataArray
}

jsAdvert()


//things to do. Add flex header to modal with content Your Cart
//another flex row after this header - # Items | Subtotal: $
//shift continue shopping and checkout buttons to footer. continue shopping is first
//edit css on buttons
//stretch find a createive way to include Marmot - Find Your Adventure
