//smooth scrolling for navigation links
// document.querySelector('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener("click", (e) => {
//         e.preventDefault();

//         document.querySelector(this.getAttribute("href")).scrollIntoView({
//             behavior: "smooth"
//         });
//     });
// });

//mobile menu toggle
const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
const navLinks = document.querySelector(".nav-links");

mobileMenuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  console.log("you got me bro");
});
