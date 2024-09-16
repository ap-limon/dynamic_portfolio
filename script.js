// smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();

    document.querySelector(e.target.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
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

//project section starts from here
const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with HTML, CSS, and JavaScript.",
    image: "https://placehold.co/600x400/png?font=roboto&text=web+development",
    link: "https://example.com/portfolio",
    category: "web",
  },
  {
    title: "E-commerce App",
    description: "An e-commerce mobile application built with React Native.",
    image: "https://placehold.co/600x400/png?font=roboto&text=app+development",
    link: "https://example.com/ecommerce",
    category: "app",
  },
  {
    title: "SEO Analysis Tool",
    description: "A tool to help improve website SEO ranking.",
    image: "https://placehold.co/600x400/png?font=roboto&text=seo",
    link: "https://example.com/seo-tool",
    category: "seo",
  },
  {
    title: "Task Manager",
    description:
      "A task management app with a Kanban board, built using JavaScript and Bootstrap.",
    image: "https://placehold.co/600x400/png?font=roboto&text=web+development",
    link: "https://example.com/task-manager",
    category: "web",
  },
  {
    title: "Weather App",
    description:
      "A weather app that fetches data from an external API and displays current conditions.",
    image: "https://placehold.co/600x400/png?font=roboto&text=app+development",
    link: "https://example.com/weather-app",
    category: "app",
  },
  {
    title: "Landing Page for Startup",
    description:
      "A responsive landing page for a startup, built with HTML, CSS, and Bootstrap.",
    image: "https://placehold.co/600x400/png?font=roboto&text=web+development",
    link: "https://example.com/landing-page",
    category: "web",
  },
  {
    title: "Blog Platform",
    description:
      "A full-featured blog platform built using Node.js, Express, and MongoDB.",
    image: "https://placehold.co/600x400/png?font=roboto&text=web+development",
    link: "https://example.com/blog-platform",
    category: "web",
  },
  {
    title: "Mobile Fitness Tracker",
    description:
      "A fitness tracker app for mobile devices, built using React Native and Redux.",
    image: "https://placehold.co/600x400/png?font=roboto&text=app+development",
    link: "https://example.com/fitness-tracker",
    category: "app",
  },
  {
    title: "SEO Optimization Plugin",
    description: "A plugin to enhance SEO optimization for WordPress websites.",
    image: "https://placehold.co/600x400/png?font=roboto&text=seo",
    link: "https://example.com/seo-plugin",
    category: "seo",
  },
];

const projectList = document.getElementById("project-list");
const filterSelect = document.getElementById("project-filter");

const displayProjects = (projects) => {
  projectList.innerHTML = "";
  projects.forEach((project) => {
    projectList.innerHTML += `
      <div class="project-card" data-category="${project.category}">
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}">View project</a>
      </div>
    `;
  });
};

displayProjects(projects);

filterSelect.addEventListener("change", e => {
  const selectedCategory = e.target.value;
  console.log(e.target.value)
  const filteredProjects = selectedCategory === "all" ? projects : projects.filter(project => project.category === selectedCategory);
  displayProjects(filteredProjects);
})