var aboutButton = document.querySelector('#about');
var projectsButton = document.querySelector('#projects');
var contactButton = document.querySelector('#contact');


function hideAboutSection() {
  aboutSelection.style.visibility = "hidden";
}

aboutButton.addEventListener('click', function() {
  var aboutSection = document.querySelector('#about-me');
  hideAboutSection(aboutSelection);
})
