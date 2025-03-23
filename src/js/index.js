function myFunction() {
  // Typing Js
  new Typed('#skill', {
    strings: [
      'Web Developer...',
      'Grapich Designer...',
    ],
    typeSpeed: 80,
    backSpeed: 30,
    backDelay: 1800,
    loop: true,
    loopCount: Infinity,
  });
  new Typed('#name', {
    strings: [
      'Gio Nurcahya Rizqi',
    ],
    typeSpeed: 80,
    backSpeed: 30,
    backDelay: 1800,
    cursorChar: '',
  });
}

// Toggle Dark Mode
function darkModeIcon() {
  const btn = document.getElementById('darkmode')
    let theme = document.documentElement.getAttribute('data-bs-theme');
    if (theme === 'dark') {
      setTimeout(() => {
        document.documentElement.removeAttribute('data-bs-theme');
        btn.innerHTML = `<i class="fa-solid fa-moon fa-lg me-2"></i>Dark`;
      }, 180);
    } else {
      setTimeout(() => {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        btn.innerHTML = `<i class="fa-solid fa-sun fa-lg me-2"></i>Light`;
      }, 180);
    }
} 