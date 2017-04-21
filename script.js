///Reqs: Extract number of items in cart, Cart Total, Cart images


document.body.onload = jsAdvert

function jsAdvert(){
  let numberOfProducts = document.getElementsByClassName("mini-cart-container")[0].getAttribute("data-quantity")
  let cartSrcLinks
  if (numberOfProducts > 0 ){
    cartSrcLinks = collectImageSrcs()
    addModal()
  } else {
    return
  }
  console.log(cartSrcLinks)
  console.log(numberOfProducts)

}


function collectImageSrcs(){
  let cartImages = document.querySelectorAll(".mini-cart-image img")
  let cartImagesArray = [...cartImages]
  return cartImagesArray.map(function(product){return product.src})
  //.map returns a new array, but you still need explicit return to return this new array as the value of collectImageSrcs()
}

function addModal() {
  var method = {}
  var $bounceOverlay = $('<div id="overlay"></div>');
  var $bounceModal = $('<div id="modal"></div>');
  var $modalContent = $('<div id="content">No JavaScript YetNo JavaScript YetNo JavaScript YetNo JavaScript YetNo JavaScript YetNo JavaScript YetNo JavaScript YetNo JavaScript YetNo JavaScript YetNo JavaScript YetNo JavaScript YetNo JavaScript YetNo JavaScript YetNo JavaScript YetNo JavaScript YetNo JavaScript YetNo JavaScript YetNo JavaScript YetNo JavaScript YetNo JavaScript YetNo JavaScript YetNo JavaScript YetNo JavaScript YetNo JavaScript YetNo JavaScript YetNo JavaScript YetNo JavaScript YetNo JavaScript YetNo JavaScript YetNo JavaScript YetNo JavaScript YetNo JavaScript YetNo JavaScript YetNo JavaScript YetNo JavaScript YetNo JavaScript YetNo JavaScript YetNo JavaScript YetNo JavaScript YetNo JavaScript Yet</div>');
  var $close = $('<button id="closeBtn">Continue Shopping</button>');
  var $checkout = $('<a href="https://marmot.com/cart" id="checkoutbtn">Checkout</a>');
  var $modalSubtotal = $('<div id="modalSubtotal"></div>');

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
    width: "600px",
    "border-radius": "14px",
    padding: "8px",
  })

  $modalContent.css({
    "border-radius": "8px",
    "text-align": "center",
    background: "#fff",
    padding: "20px",
  })

  $checkout.css({
    appearance: "button",
    "text-decoration": "none",
    color: "initial",
  })

  jQuery.fn.center = function ()
  {
      this.css("position","fixed");
      this.css("top", ($(window).height() / 2) - (this.outerHeight() / 2));
      this.css("left", ($(window).width() / 2) - (this.outerWidth() / 2));
      return this;
  }

  $bounceModal.center();
    $(window).resize(function(){
      $bounceModal.center();
    });

//Append content container div to Modal
  $bounceModal.append($modalContent)


//Append Subtotal to Content
  let orderTotal = document.getElementsByClassName("order-value")[0].innerText
  console.log(orderTotal)
  $modalSubtotal.text(function() {
    return "Subtotal: " + orderTotal;
  });
  $modalContent.append($modalSubtotal)

//Append Buttons
  $modalContent.append($close)
  $modalContent.append($checkout)

  $close.click(function(e){
    e.preventDefault();
    $bounceModal.hide();
    $bounceOverlay.hide();
    $modalContent.empty();
    $(window).unbind('resize.modal')
  });


  $(document).ready(function(){
    $('body').append($bounceOverlay, $bounceModal);
  });
  $bounceModal.hide()
  $bounceOverlay.hide()

  $(window).scroll(function(){
    var wintop = $(window).scrollTop(), docheight = $(document).height(), winheight = $(window).height();
    var  scrolltrigger = 0.90
    if  ((wintop/(docheight-winheight)) > scrolltrigger) {
      $bounceModal.show()
      $bounceOverlay.show()
     }
   })
}
