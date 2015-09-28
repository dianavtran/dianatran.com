//masonry

$('.container').masonry({
  // options
  itemSelector: '.item',
  columnWidth: 192,
  gutter: 10,
  isFitWidth: true,
});

//work about hover

$('li img').bind('mouseenter mouseleave', function() {
    $(this).attr({
        src: $(this).attr('hover') 
        , 'hover': $(this).attr('src') 
    })
});

//about toggle

$('li .about').click(function() {
	$('#about').fadeIn(200);
	$('.x').fadeIn(300);
});

$('.x').click(function() {
	$('#about').fadeOut(300);
	$('.x').hide();
});

$('#about').click(function() {
	$('#about').fadeOut(300);
	$('.x').hide();
});

//caption.js

$(window).load(function() {
    $('img.caption').captionjs({
        'class_name'      : 'captionjs', // Class name for each <figure>
        'schema'          : true,        // Use schema.org markup (i.e., itemtype, itemprop)
        'mode'            : 'animated',   // default | stacked | animated | hide
        'debug_mode'      : false,       // Output debug info to the JS console
        'force_dimensions': true,        // Force the dimensions in case they cannot be detected (e.g., image is not yet painted to viewport)
        'is_responsive'   : false,       // Ensure the figure and image change size when in responsive layout. Requires a container to control responsiveness!
        'inherit_styles'  : false        // Have the caption.js container inherit box-model properties from the original image
    });
});

//tooltipster
$(document).ready(function() {
            $('.tooltip').tooltipster({
            	interactive: true,
            	delay: 0,
            	animation: 'grow',
            	speed: 300,
            });
        });
