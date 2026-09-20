// const navLinks = document.querySelectorAll('.sidebar nav a, .mobile-nav a');
// const sections = document.querySelectorAll('main section[id]');

// const highlightActiveLink = () => {
//   const scrollPosition = window.scrollY + 200;
//   let currentId = sections[0].id;

//   sections.forEach(section => {
//     if(section.offsetTop <= scrollPosition){
//       currentId = section.id;
//     }
//   });

//   navLinks.forEach(link => {
//     link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
//   });
// };

// window.addEventListener('scroll', highlightActiveLink);
// highlightActiveLink();

// const form = document.getElementById('transmitForm');
// const status = document.getElementById('formStatus');

// if (form) {
//   form.addEventListener('submit', e => {
//     e.preventDefault();

//     const name = document.getElementById('fname').value;
//     const email = document.getElementById('femail').value;
//     const message = document.getElementById('fmsg').value;

//     const subject = encodeURIComponent(`Portfolio contact from ${name}`);
//     const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);

//     status.textContent = 'Opening your email app...';
//     window.location.href = `mailto:[email protected]?subject=${subject}&body=${body}`;
//   });
// }
