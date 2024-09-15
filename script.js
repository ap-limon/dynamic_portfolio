// smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", (e) => {
        e.preventDefault();

        document.querySelector(e.target.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

//mobile menu toggle
const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
const navLinks = document.querySelector(".nav-links");

mobileMenuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  console.log("you got me bro");
});
