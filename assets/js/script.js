$(document).ready(function() {

	/** This is used to constantly fade in and fade out the arrow keys
	 *  the home page.
	 */
	 setInterval(function() {
	 	setTimeout(function (){
	 		$('.key').fadeTo(1000, 0.3);
	 	}, 1000);
	 	setTimeout(function (){
	 		$('.key').fadeTo(1000, 1.0);
	 	}, 1000);
	 }, 2000);


	/* The animation for the button on the contact page. */
	$('#contact-button').hover(function() {
		if ($(this).hasClass('contact-button-active')) {
			$(this).removeClass('contact-button-active');
			setTimeout(function() {
				setTimeout(function() {
					$('#catch-phrase').css('opacity', '1');
				}, 0);
				setTimeout(function() {
					$('#catch-phrase').text('Wanna talk?');
				}, 1);
				setTimeout(function() {
					$('#catch-phrase').css('color', '#000000');
				}, 2);
			}, 300);
		} else {
			$(this).addClass('contact-button-active');
			setTimeout(function() {
				setTimeout(function() {
					$('#catch-phrase').text("Let's do it.");
				}, 0);
				setTimeout(function() {
					$('#catch-phrase').css('opacity', '0.8');
				}, 1);
				setTimeout(function() {
					$('#catch-phrase').css('color', '#fff');
				}, 2);
			}, 300);
		}
	});


	/* The animation for the contact box on the contact page. */
	$('#contact-button').click(function() {
		$('#contact-container').show();
	});

	$('#contact-overlay').click(function() {
		$('#contact-container').hide();
	})


	/* The animation for switching between windows with the arrow keys. */
	$(document).keydown(function(e) {
		var matrixToArray = function(str) {
			return str.match(/(-?[0-9\.]+)/g);
		};
		var transformVal = matrixToArray($('#window-container').css("transform"));
		if (transformVal != null) {
			if (transformVal[5] > 1) {
				if (e.keyCode == 40) {
					$('#window-container').css("transform", "none");
				}
			} else if (transformVal[5] < 0) {
				if (e.keyCode == 38) {
					$('#window-container').css("transform", "none");
				}
			} else if (transformVal[4] > 1) {
				if (e.keyCode == 39) {
					$('#window-container').css("transform", "none");
				}
			} else if (transformVal[4] < 0) {
				if (e.keyCode == 37) {
					$('#window-container').css("transform", "none");
				}
			}
		} else {
			if (e.keyCode == 37) {
				$('#window-container').css("transform", "translateX(100%)");
			} else if (e.keyCode == 38) {
				$('#window-container').css("transform", "translateY(100%)");
			} else if (e.keyCode == 39) {
				$('#window-container').css("transform", "translateX(-100%)");
			} else if (e.keyCode == 40) {
				$('#window-container').css("transform", "translateY(-100%)");
			}
		}
	});


	/* The animation for switching between windows by clicking the words
	 * on the home page. */
	$('#about').click(function() {
		$('#window-container').css("transform", "translateX(100%)");
	});

	$('#resume').click(function() {
		$('#window-container').css("transform", "translateY(100%)");
	});

	$('#projects').click(function() {
		$('#window-container').css("transform", "translateX(-100%)");
	});

	$('#contact').click(function() {
		$('#window-container').css("transform", "translateY(-100%)");
	});


	/* Animation for clicking on the arrows on the side of the page. */
	$('#home-left').click(function() {
		$('#window-container').css("transform", "translateX(100%)");
	});

	$('#home-up').click(function() {
		$('#window-container').css("transform", "translateY(100%)");
	});

	$('#home-right').click(function() {
		$('#window-container').css("transform", "translateX(-100%)");
	});

	$('#home-down').click(function() {
		$('#window-container').css("transform", "translateY(-100%)");
	});

	$('#about-right').click(function() {
		$('#window-container').css("transform", "none");
	});

	$('#resume-down').click(function() {
		$('#window-container').css("transform", "none");
	});

	$('#projects-left').click(function() {
		$('#window-container').css("transform", "none");
	});

	$('#contact-up').click(function() {
		$('#window-container').css("transform", "none");
	});
});
