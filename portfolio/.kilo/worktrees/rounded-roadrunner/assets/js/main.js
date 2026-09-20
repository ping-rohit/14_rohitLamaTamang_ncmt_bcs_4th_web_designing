/* ============================================
   PART 1: Highlight the nav link for the section
   currently on screen (runs every time you scroll).
   ============================================ */
var navLinks = document.querySelectorAll('.sidebar nav a, .mobile-nav a');
var sections = document.querySelectorAll('main section[id]');

function highlightActiveLink(){
  var scrollPosition = window.scrollY + 200; // check a bit below the top
  var currentId = sections[0].id;

  sections.forEach(function(section){
    if(section.offsetTop <= scrollPosition){
      currentId = section.id;
    }
  });

  navLinks.forEach(function(link){
    var isActive = link.getAttribute('href') === '#' + currentId;
    link.classList.toggle('active', isActive);
  });
}

window.addEventListener('scroll', highlightActiveLink);
highlightActiveLink(); // run once on page load too

/* ============================================
   PART 2: Contact form.
   Since this is a plain HTML/CSS/JS site with no server,
   the form opens the visitor's email app with the message
   already filled in (a "mailto" link).
   ============================================ */
var form = document.getElementById('transmitForm');
var status = document.getElementById('formStatus');

form.addEventListener('submit', function(event){
  event.preventDefault(); // stop the page from reloading

  var name = document.getElementById('fname').value;
  var email = document.getElementById('femail').value;
  var message = document.getElementById('fmsg').value;

  var subject = encodeURIComponent('Portfolio contact from ' + name);
  var body = encodeURIComponent(message + '\n\n— ' + name + ' (' + email + ')');

  status.textContent = 'Opening your email app...';
  window.location.href = 'mailto:[email protected]?subject=' + subject + '&body=' + body;
});
