/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
};
showMenu('nav-toggle', 'nav-menu');

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  // active link
  navLink.forEach((n) => n.classList.remove('active'));
  this.classList.add('active');
  // remove show class
  const navMenu = document.getElementById('nav-menu');
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
    }
  });
}
window.addEventListener('scroll', scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  delay: 200,
  reset: true,
});

// SCROLL HOME
sr.reveal('.home__title', {});
sr.reveal('.home__btn', { delay: 200 });
sr.reveal('.home__img', { delay: 200 });
sr.reveal('.home__social-icon', { interval: 200 });
// Scroll About
sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', { delay: 200 });
sr.reveal('.about__text', { delay: 200 });
// scroll Skills
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__text', { delay: 200 });
sr.reveal('.skills__data', { interval: 200 });
sr.reveal('.skills__img', { delay: 200 });
// Scroll Works
sr.reveal('.works__img', { interval: 100 });
sr.reveal('.works__img', { delay: 100 });
