var resizeTimer;
var minWidth = 480;
var maxWidth = 980;
/* Function for changing the place of photos in Homepage 3rd section */
function change_photo_arrangement () {
        $('.photo-row').addClass('no-display');
        $('.clone').removeClass('no-display');
        $('.photo-row.clone .column:nth-child(3)').insertAfter('.photo-row.clone .column:nth-child(4)');

};

function reset_photo_arrangement () {
        $('.photo-row').removeClass('no-display');
        $('.clone').addClass('no-display');
}


/* Run Photo Arrangement on ready */
$( document ).ready(function() {
    $('.photo-row').clone(true).addClass('clone no-display').insertAfter('.photo-row1');
    
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
    $('.photo-row1').clone(true).addClass('clone no-display').insertAfter('.photo-row1');
    
    var w_width = $(window).innerWidth();
    
    if (w_width < maxWidth && w_width > minWidth) {
        change_photo_arrangement_tablet();
     } else {
         reset_photo_arrangement();
     }
}, 100);

});