/* =========================================================
   VORTEX GYM — ANIMATIONS & INTERACTIONS
========================================================= */


/* =========================
   SCROLL REVEAL
========================= */

/* =========================
   UNIVERSAL SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(`
    .stat-card,
    .about-image,
    .about-content,
    .equipment-card,
    .equipment-item,
    .contact-card,
    .contact-title,
    .contact-form-container,
    .form-3d,
    .social-card,
    .social-section,
    .cta,
    .section-heading,

    /* MEMBERSHIP */
   .membership-hero-content,
.membership-heading,
.plan-card,
.why-heading,
.why-card,
.membership-cta
`);


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal-active");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});

/* =========================
   NAVBAR SCROLL
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.classList.add("navbar-scrolled");

    } else {

        navbar.classList.remove("navbar-scrolled");

    }

});


/* =========================
   3D CARDS
========================= */

const cards = document.querySelectorAll(
    ".equipment-item, .equipment-card, .social-card"
);


cards.forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -4;

        const rotateY =
            ((x - centerX) / centerX) * 4;

        card.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* =========================
   CONTACT FORM
========================= */

const gymForm = document.getElementById("gymForm");


if (gymForm) {

    gymForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const message =
            document.getElementById("message").value.trim();


        if (!name || !email || !phone || !message) {

            alert("Please complete all fields.");

            return;

        }


        alert(
            `Thank you ${name}! Your message has been received.`
        );


        gymForm.reset();

    });

}


/* =========================
   IMAGE ERROR HANDLING
========================= */

const images = document.querySelectorAll("img");

images.forEach(image => {

    image.addEventListener("error", () => {

        image.style.opacity = "0";

    });

});


/* =========================
   PAGE LOADED
========================= */

window.addEventListener("load", () => {

    document.body.classList.add("page-loaded");

});