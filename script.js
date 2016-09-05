$('#nav-inner').hide();

function showHideNav () {
  if ($('#hamburger-nav').hasClass('open')) {
    $('#nav-inner').show();
    $('#about-me').hide();
    $('.experience').hide();
    $('.education').hide();
    $('.resume-button').hide();
  } else {
    $('#nav-inner').hide();
    $('#about-me').show();
    $('.experience').show();
    $('.education').show();
    $('.resume-button').show();
  }
};



$(document).ready(function() {
  $('#hamburger-nav').click(function(){
		$(this).toggleClass('open');
    showHideNav ();
	});
});
