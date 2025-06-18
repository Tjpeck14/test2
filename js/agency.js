/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo', function() {
            updateBrandVisibility(); // <-- call after scroll completes
        });
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});

// === BEGIN: Navbar brand visibility fix ===
function updateBrandVisibility() {
    var $navbar = $('#mainNav');
    var $brand = $navbar.find('.navbar-brand');
    if ($(window).scrollTop() < 100) {
        $brand.addClass('hide-at-top');
    } else {
        $brand.removeClass('hide-at-top');
    }
}

$(window).on('scroll', updateBrandVisibility);
$(document).ready(function() {
    updateBrandVisibility();
});
// === END: Navbar brand visibility fix ===
