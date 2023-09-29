let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*scroll activation link*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*sticky navbar*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*removing the toglle icon and navbar when you click navbar link (scroll)*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};


/*scroll reveal*/
ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200

});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .experience-container, .projects-box, .contact form', { origin: 'buttom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' })


const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'UI/UX Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


document.addEventListener("DOMContentLoaded", function () {
    // Get all tab links and tab contents
    var tabLinks = document.querySelectorAll(".tab-links");
    var tabContents = document.querySelectorAll(".tab-contents");

    // Function to hide all tab contents
    function hideTabs() {
        tabContents.forEach(function (content) {
            content.style.display = "none";
        });
    }

    // Function to show the selected tab content
    function showTab(tabName) {
        hideTabs();
        var selectedTab = document.getElementById(tabName);
        if (selectedTab) {
            selectedTab.style.display = "block";
        }
    }

    // Add click event listeners to tab links
    tabLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            var tabName = link.getAttribute("data-tab");
            showTab(tabName);
            
            // Remove "active-link" class from all links and add it to the clicked link
            tabLinks.forEach(function (tabLink) {
                tabLink.classList.remove("active-link");
            });
            link.classList.add("active-link");
        });
    });

    // Initialize by opening the "Skills" tab
    showTab("skills");
});








