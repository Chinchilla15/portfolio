import battleship from "../images/battleship.png";
import restaurantPage from "../images/restaurant-page.png";
import todoList from "../images/todo-list.png";
import adminDashboard from "../images/admin-dashboard.png";
import weatherApp from "../images/weather-app.png";
import ticTacToe from "../images/tic-tac-toe.png";
import signUpForm from "../images/sign-up-form.png";
import calculator from "../images/calculator.png";
import libraryApp from "../images/library-app.png";
import etchASketch from "../images/etch-a-sketch.png";
import profileImg from "../images/profile-img.JPG";
import cvApp from "../images/cv-app.png";
import comerParaCurar from "../images/comer-para-curar.png";

export default function renderProjects() {
  const mainContainer = document.getElementById("projects-container");
  const mainImageContainer = document.getElementById("main-img");

  const profileImage = document.createElement("img");
  profileImage.src = profileImg;
  profileImage.alt = "";

  mainImageContainer.appendChild(profileImage);

  const projects = [
    {
      name: "Comer Para Curar",
      liveLink: "https://comerparacurar.com",
      description:
        "This clean, responsive website was meticulously crafted for a passionate nutrition business, aiming to revolutionize online presence and attract health-conscious clients. Drawing inspiration from the client's vibrant Instagram brand, the site seamlessly blends modern design principles with cutting-edge web technologies. Featuring an intuitive user interface, engaging content sections, and optimized performance, it sets a new standard for nutrition-focused web experiences. Built with AstroJS for lightning-fast load times, styled with the flexibility of TailwindCSS, and powered by TypeScript for robust functionality, this project showcases the perfect recipe for a high-converting, user-friendly platform. ",
      picture: comerParaCurar,
      technologies: ["astro", "tailwindcss", "typescript"],
    },
    {
      name: "CV App/Easy CV",
      liveLink: "https://cv-app-eta-two.vercel.app/",
      repoLink: "https://github.com/Chinchilla15/cv-app.git",
      description:
        "A super easy and fun way to create professional CVs! This React-based application allows users to fill out their information, customize sections, pick a color scheme, and download the result as a PDF. With an intuitive design and user-friendly interface, it streamlines the CV creation process. The app showcases the power of React for building interactive web applications, utilizing state management and component-based architecture to create a seamless user experience.",
      picture: cvApp,
      technologies: ["react", "html5", "css3", "vitejs"],
    },
    {
      name: "Battleship Game",
      liveLink: "https://chinchilla15.github.io/battleship/",
      repoLink: "https://github.com/Chinchilla15/battleship.git",
      description:
        " A fully functional web-based version of the classic Battleship game, featuring a retro design and visually rich interface. Players can engage in strategic gameplay against an AI opponent, placing ships and attacking enemy territory. The project showcases advanced JavaScript concepts, including factory functions and module patterns, as well as integration with Jest for unit testing. Enjoy the nostalgic feel and challenge your tactical skills!",
      picture: battleship,
      technologies: ["javascript", "html5", "css3", "webpack"],
    },
    {
      name: "Restaurant Page/Nitro Coffe",
      liveLink: "https://chinchilla15.github.io/Restaurant-Page/",
      repoLink: "https://github.com/Chinchilla15/Restaurant-Page.git",
      description:
        "Model for a restaurant website (not a real restaurant). Created with a minimmalist and intuitive design with the necesarry information for the page. ",
      picture: restaurantPage,
      technologies: ["html5", "css3", "javascript", "webpack"],
    },
    {
      name: "Todo-list-o",
      liveLink: "https://chinchilla15.github.io/todo-list/",
      repoLink: "https://github.com/Chinchilla15/todo-list.git",
      description:
        "Not your typical todo-list project. Todo-List-O is a functional web app that uses local storage to keep your information ready and has several filters for your tasks. Easy to use and with great design.",
      picture: todoList,
      technologies: ["javascript", "html5", "css3", "webpack"],
    },
    {
      name: "Admin Dashboard",
      liveLink: "https://chinchilla15.github.io/admin-dashboard/",
      repoLink: "https://github.com/Chinchilla15/admin-dashboard.git",
      description: "Model for an admin dashboard page. Suited for desktop. ",
      picture: adminDashboard,
      technologies: ["html5", "css3"],
    },
    {
      name: "Weather App",
      liveLink: "https://chinchilla15.github.io/weather-app/",
      repoLink: "https://github.com/Chinchilla15/weather-app.git",
      description:
        "A weather app powered by weatherAPI to check the weather anywhere you go. Created this project with a minimalist design and shows the proper weather info.",
      picture: weatherApp,
      technologies: ["javascript", "html5", "css3", "webpack"],
    },
    {
      name: "Tic-Tac-Toe Game",
      liveLink: "https://chinchilla15.github.io/tic-tac-toe/",
      repoLink: "https://github.com/Chinchilla15/tic-tac-toe.git",
      description:
        "The classic tic-tac-toe game on the web! Straight forward design with visual cues to keep the user updated with what is happening in the game. Suited for two-players only.",
      picture: ticTacToe,
      technologies: ["javascript", "html5", "css3"],
    },
    {
      name: "Sign Up Form",
      liveLink: "https://chinchilla15.github.io/sign-up-form/",
      repoLink: "https://github.com/Chinchilla15/sign-up-form.git",
      description:
        "Sign Up form model with minimalist design and the proper form validation using native HTML attributes, CSS for visual interactivity and JavaScript for further validation. ",
      picture: signUpForm,
      technologies: ["html5", "css3"],
    },
    {
      name: "Calculator",
      liveLink: "https://chinchilla15.github.io/calculator/",
      repoLink: "https://github.com/Chinchilla15/calculator.git",
      description:
        "Your clasic calculator project, one of the first ones I made and a very special one! Design inspired by the macOS calculator.",
      picture: calculator,
      technologies: ["javascript", "html5", "css3"],
    },
    {
      name: "Library App",
      liveLink: "https://chinchilla15.github.io/Library/",
      repoLink: "https://github.com/Chinchilla15/Library.git",
      description:
        "Like to read? This is a model for a library app where you can add your books and keep track of the ones you've read and the ones pending.  ",
      picture: libraryApp,
      technologies: ["html5", "css3", "javascript"],
    },
    {
      name: "Etch-a-Sketch",
      liveLink: "https://chinchilla15.github.io/Etch-a-Sketch/",
      repoLink: "https://github.com/Chinchilla15/Etch-a-Sketch.git",
      description:
        "A simple etch-a-sketch on the web. This was actually my first self-taught project that I could not leave out from my portfolio! Give it a try!",
      picture: etchASketch,
      technologies: ["javascript", "html5", "css3"],
    },
  ];

  function createLink(href, title, iconClass) {
    if (!href) return null;
    const link = document.createElement("a");
    link.href = href;
    link.title = title;
    link.target = "_blank";
    link.innerHTML = `<i class="${iconClass}"></i>`;
    return link;
  }

  function createProjectCard(project, isFeatured = false) {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    if (isFeatured) {
      projectCard.classList.add("featured-project");
    }

    const img = document.createElement("img");
    img.classList.add("project-image");
    img.alt = project.name;
    img.src = project.picture;
    img.loading = "lazy";

    const infoContainer = document.createElement("div");
    infoContainer.classList.add("project-info-container");

    const projectName = document.createElement("h3");
    projectName.classList.add("project-name");
    projectName.textContent = project.name;

    const linksBox = document.createElement("div");
    linksBox.classList.add("links-box");

    const repoLink = createLink(
      project.repoLink,
      "Github Repo Link",
      "fa-brands fa-square-github",
    );
    const liveLink = createLink(
      project.liveLink,
      "Live Site Link",
      "fa-solid fa-up-right-from-square fa-sm",
    );

    if (repoLink) linksBox.appendChild(repoLink);
    if (liveLink) linksBox.appendChild(liveLink);

    const projectDescription = document.createElement("p");
    projectDescription.classList.add("project-description");
    projectDescription.textContent = project.description;

    const technologiesContainer = document.createElement("div");
    technologiesContainer.classList.add("technologies-container");

    if (project.technologies && project.technologies.length > 0) {
      const orderedTechnologies = [
        "html5",
        "css3",
        "javascript",
        "typescript",
        "react",
        "astro",
        "tailwindcss",
        "webpack",
        "vitejs",
        "jest",
        "git",
      ];

      orderedTechnologies.forEach((tech) => {
        if (project.technologies.includes(tech)) {
          const techBox = document.createElement("div");
          techBox.classList.add("tech-box");

          const techIcon = document.createElement("img");
          techIcon.src = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech}/${tech}-original.svg`;
          techIcon.alt = `${tech} icon`;
          techIcon.classList.add("tech-icon");

          const techName = document.createElement("span");
          techName.textContent = tech;
          techName.classList.add("tech-name");

          techBox.appendChild(techIcon);
          techBox.appendChild(techName);
          technologiesContainer.appendChild(techBox);
        }
      });
    }

    infoContainer.append(
      projectName,
      linksBox,
      projectDescription,
      technologiesContainer,
    );
    projectCard.append(img, infoContainer);

    return projectCard;
  }

  const fragment = document.createDocumentFragment();

  // Create Featured Projects section
  const featuredProjectsSection = document.createElement("section");
  featuredProjectsSection.classList.add("featured-projects");
  const featuredProjectsTitle = document.createElement("h2");
  featuredProjectsTitle.textContent = "Featured Projects";
  featuredProjectsSection.appendChild(featuredProjectsTitle);

  // Create Other Personal Projects section
  const otherProjectsSection = document.createElement("section");
  otherProjectsSection.classList.add("other-projects");
  const otherProjectsTitle = document.createElement("h2");
  otherProjectsTitle.textContent = "Other Personal Projects";
  otherProjectsSection.appendChild(otherProjectsTitle);

  // Create a grid container for other projects
  const otherProjectsGrid = document.createElement("div");
  otherProjectsGrid.classList.add("projects-grid");
  otherProjectsSection.appendChild(otherProjectsGrid);

  // Get the first 3 projects for featured section
  const featuredProjects = projects.slice(0, 3);
  const otherProjects = projects.slice(3);

  featuredProjects.forEach((project) => {
    const projectCard = createProjectCard(project, true);
    featuredProjectsSection.appendChild(projectCard);
  });

  otherProjects.forEach((project) => {
    const projectCard = createProjectCard(project);
    otherProjectsGrid.appendChild(projectCard);
  });

  fragment.appendChild(featuredProjectsSection);
  fragment.appendChild(otherProjectsSection);

  mainContainer.appendChild(fragment);
}
