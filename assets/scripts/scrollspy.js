jQuery('a').on( 'click', function(event) {
	var target 	= jQuery( this );
    var element = target.attr('href');

    jQuery('a').removeClass('btn--nav__active')
    target.addClass('btn--nav__active');

    jQuery("body, html").animate({ 
      scrollTop: jQuery( element ).offset().top - 90	
    }, 800);
});
