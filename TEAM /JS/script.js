$('.like-btn').on('click', function() {
    $(this).toggleClass('is-active');
 });

 $('.minus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
 
    if (value > 1){
        value = value - 1;
    } 
    else {
        value = 0;
    }
 
  $input.val(value);
});
 
$('.plus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
 
    if (value < 100) {
        value = value + 1;
    } else {
        value =100;
    }
 
    $input.val(value);
});  

var addition = document.getElementsByClassName ('plus-btn')
console.log(addition);
 for(var i = 0; i < addition.length; i++){
     var  buttonAdd = addition[i]
     buttonAdd.addEventListener('click', function(event){
         console.log('clicked');
         var buttonAddClicked = event.target
         updateCartTotal()

     } )
 } 

 function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('item')[0]
    var cartQuantity = document.getElementsByClassName('Precio total')[0]
    var costo = document.getElementsByClassName('Precio')
    for (var i = 0; i < Precio.length; i++){
        var costo = Precio[i]
        console.log(costo);
    }
 }