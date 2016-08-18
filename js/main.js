
// Owl Carousel Slider


$(document).ready(function(){
	var one = $(".owl-carousel");
	var two = $(".slider_2");
	var there = $('.slider_3')
  one.owlCarousel({
	    items: 1,
	    nav: true,
	    navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	    smartSpeed: 450,
	    rtl: true,
  });
  two.owlCarousel({
  		loop: true,
  		items: 1,
  		rtl: true,
  		nav: false,
  });
  there.owlCarousel({
  	items: 4,
  	loop: true,
  	rtl: true,
  });
});



// Form Hover


$('#input_modal').focus(function () {
	$('#icon_input').css({
		border: '1px solid #1e88e5',
		color: '#1e88e5'
	});
});

$('#input_modal').blur(function () {
	$('#icon_input').css({
		border: '1px solid #ddd',
		color: '#666'
	});
});

$('#input_modal_key').focus(function () {
	$('#icon_input_key').css({
		border: '1px solid #1e88e5',
		color: '#1e88e5'
	});
});

$('#input_modal_key').blur(function () {
	$('#icon_input_key').css({
		border: '1px solid #ddd',
		color: '#666'
	});
});

$('#input_modal_user_creat').blur(function () {
	$('#icon_input_user_creat').css({
		border: '1px solid #ddd',
		color: '#666'
	});
});

$('#input_modal_user_creat').focus(function () {
	$('#icon_input_user_creat').css({
		border: '1px solid #1e88e5',
		color: '#1e88e5'
	});
});

$('#input_modal_email_creat').blur(function () {
	$('#icon_input_email_creat').css({
		border: '1px solid #ddd',
		color: '#666'
	});
});

$('#input_modal_email_creat').focus(function () {
	$('#icon_input_email_creat').css({
		border: '1px solid #1e88e5',
		color: '#1e88e5'
	});
});

$('#input_modal_key_creat').blur(function () {
	$('#icon_input_key_creat').css({
		border: '1px solid #ddd',
		color: '#666'
	});
});

$('#input_modal_key_creat').focus(function () {
	$('#icon_input_key_creat').css({
		border: '1px solid #1e88e5',
		color: '#1e88e5'
	});
});

$('#input_modal_key_creat_repet').blur(function () {
	$('#icon_input_modal_key_creat_repet').css({
		border: '1px solid #ddd',
		color: '#666'
	});
});

$('#input_modal_key_creat_repet').focus(function () {
	$('#icon_input_modal_key_creat_repet').css({
		border: '1px solid #1e88e5',
		color: '#1e88e5'
	});
});


// Scroll to top

$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
})

// ScrollSpy

	$(document).ready(function(){
	  // Add smooth scrolling to all links
	  $("a").on('click', function(event) {

	    // Make sure this.hash has a value before overriding default behavior
	    if (this.hash !== "") {
	      // Prevent default anchor click behavior
	      event.preventDefault();

	      // Store hash
	      var hash = this.hash;

	      // Using jQuery's animate() method to add smooth page scroll
	      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	      $('html, body').animate({
	        scrollTop: $(hash).offset().top
	      }, 800, function(){
	   
	        // Add hash (#) to URL when done scrolling (default click behavior)
	        window.location.hash = hash;
	      });
	    } // End if
	  });
	});