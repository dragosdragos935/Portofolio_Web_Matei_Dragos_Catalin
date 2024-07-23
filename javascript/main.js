var typed = new Typed('.text', {
    strings: ['FullStack Developer', 'YouTuber', 'Game Developer', 'Embedded Engineer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

    let lastScrollTop = 0; // Variable to keep track of the last scroll position
    const navbar = document.querySelector('.header'); // Select the navbar

    window.addEventListener('scroll', function() {
        let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop; // Get the current scroll position

        if (currentScrollTop > lastScrollTop) {
            // Scrolling down
            navbar.classList.add('hidden');
        } else {
            // Scrolling up
            navbar.classList.remove('hidden');
        }

        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
    });
