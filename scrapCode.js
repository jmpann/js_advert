
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

//approach 1
// var modal = (function(){
//   var
//   method = {},
//   $overlay = $('<div id="overlay"></div>')
//   $modal = $('<div id="modal"></div>')
//   $content = $('<div id="content">No Content Yet!</div>')
//   $close = $('<a id="close" href="#">close</a>')
//
//   //css
//   $overlay.css({
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: #000;
//     opacity: 0.5;
//     filter: alpha(opacity=50);
//   })
//
//   $modal.css({
//     position:absolute;
//     background:url(tint20.png) 0 0 repeat;
//     background:rgba(0,0,0,0.2);
//     border-radius:14px;
//     padding:8px;
//   })
//
//   $content.css({
//     border-radius:8px;
//     background:#fff;
//     padding:20px;
//   })
//
//
//   $modal.hide()
//   $overlay.hide()
//   $modal.append($content, $close)
//
//   $(document).ready(function(){
//     $('body').append($overlay, $modal);
//   });
//
//   // Center the modal in the viewport
//   method.center = function () {
//   var top, left;
//
//   top = Math.max($(window).height() - $modal.outerHeight(), 0) / 2;
//   left = Math.max($(window).width() - $modal.outerWidth(), 0) / 2;
//
//     $modal.css({
//       top:top + $(window).scrollTop(),
//       left:left + $(window).scrollLeft()
//     });
//   };
//
//   // Open the modal
//   method.open = function (settings) {
//     $content.empty().append(settings.content);
//
//     $modal.css({
//       width: settings.width || 'auto',
//       height: settings.height || 'auto'
//     })
//
//     method.center();
//
//     $(window).bind('resize.modal', method.center);
//
//     $modal.show();
//     $overlay.show();
//   };
//
//   // Close the modal
//   method.close = function () {
//     $modal.hide();
//     $overlay.hide();
//     $content.empty();
//     $(window).unbind('resize.modal');
//   };
//
//   return method;
// }());


//approach 2
document.body.onload = addElement;

function addElement () {

  var $bounceOverlay = $('<div id="overlay"></div>');
  var $bounceModal = $('<div id="modal"></div>');
  var $modalContent = $('<div id="content">No JavaScript Yet</div>');
  var $close = $('<a id="close" href="#">close</a>');

  $bounceModal.append($modalContent, $close)

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
    position: "absolute",
    background: "url(tint20.png) 0 0 repeat",
    width: "500px",
    height: "200px",
    "border-radius": "14px",
    padding: "8px",
  })

  $modalContent.css({
    "border-radius": "8px",
    "text-align": "center",
    background: "#fff",
    padding: "20px",
  })

  jQuery.fn.center = function () {
      this.css("position","absolute");
      this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
                                                  $(window).scrollTop()) + "px");
      this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
                                                  $(window).scrollLeft()) + "px");
      return this;
  }

  $bounceModal.center()
  $(document).ready(function(){
    $('body').append($bounceOverlay, $bounceModal);
  });
}
