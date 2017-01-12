var resizeTimer;
var minWidth = 480;
var maxWidth = 980;
/* Function for changing the place of photos in Homepage 3rd section */
function change_photo_arrangement () {
        $('.change-order').addClass('no-display');
        $('.clone').removeClass('no-display');
        $('.change-order.clone .column1').insertAfter('.change-order.clone .column2');

};

function reset_photo_arrangement () {
        $('.change-order').removeClass('no-display');
        $('.clone').addClass('no-display');
}


/* Run Photo Arrangement on ready */
$( document ).ready(function() {
    $('.change-order').clone(true).addClass('clone no-display').insertAfter('.change-order');
    
     var w_width = $(window).innerWidth();
      
    if (w_width < maxWidth && w_width > minWidth) {
            change_photo_arrangement_tablet();
    } else {
             reset_photo_arrangement();
      }
});

/* Run Photo Arrangement on resize */
$( window ).resize(function() {
    clearTimeout(resizeTimer);

    resizeTimer = setTimeout( function() {
    $('.clone').remove();
    $('.change-order').clone(true).addClass('clone no-display').insertAfter('.change-order');
    
    var w_width = $(window).innerWidth();
    
    if (w_width < maxWidth && w_width > minWidth) {
        change_photo_arrangement_tablet();
     } else {
         reset_photo_arrangement();
     }
}, 100);

});
