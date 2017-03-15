
// ---------------------------------
// Published Mode Detection
// ---------------------------------


var publishedmode = true;


if($("body.edit-mode").length > 0) {
    publishedmode = false;
}


// ---------------------------------
// Basket Overlay
// ---------------------------------


if(publishedmode==true) {
    $(document).on("click", ".ecombasket-pull", function() {
        $( "body" ).toggleClass( "basket-open" );
    });
    $(document).on("click touchstart", ".basket-body", function(event) {
        if( $(event.target).is(".basket-body") ) {
            closeEverything();
        }
    });
    $('.ecombasket__basket-body').click(function(e) {
        if (e.target == this) {
            closeEverything();
        }
    });
}
