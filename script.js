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

function showAboutPage() {
  $('#nav-inner').hide();
  $('#about-me').show();
  $('.experience').hide();
  $('.education').hide();
  $('.resume-button').hide();
}

function toggleHamburgerNav() {
  $('#hamburger-nav').toggleClass('open');
}

$(document).ready(function() {
  $('#hamburger-nav').click(function() {
		toggleHamburgerNav ();
    showHideNav ();
	});
  $('#about-link').click(function() {
    showAboutPage ();
    toggleHamburgerNav ();
  });
});
