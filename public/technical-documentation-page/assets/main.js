const introduction = document.querySelector('#Introduction h2');
const typescript = document.querySelector('#What_is_TypeScript\\? h2');

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', (e) => {
  const currentPosition = window.scrollY;
  const scrollPosition = currentPosition + 150;

  sections.forEach((section, index) => {
    let { top, height } = section.getBoundingClientRect();

    if (
      scrollPosition >= top + currentPosition &&
      scrollPosition <= top + height + currentPosition
    ) {
      navLinks[index].classList.add('active');
    } else {
      navLinks[index].classList.remove('active');
    }
  });
});
