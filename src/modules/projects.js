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

export default function renderProjects() {
  const mainContainer = document.getElementById("projects-container");

  const projects = [
    {
      name: "Restaurant Page/Nitro Coffe",
      liveLink: "https://chinchilla15.github.io/Restaurant-Page/",
      repoLink: "https://github.com/Chinchilla15/Restaurant-Page.git",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Temporibus in animi sed vero velit architecto libero, quidem a.Quos dignissimos placeat exercitationem nam. Doloribus quis, rerumiusto possimus omnis fugiat?",
      picture: restaurantPage,
    },
    {
      name: "Battleship Game",
      liveLink: "https://chinchilla15.github.io/battleship/",
      repoLink: "https://github.com/Chinchilla15/battleship.git",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Temporibus in animi sed vero velit architecto libero, quidem a.Quos dignissimos placeat exercitationem nam. Doloribus quis, rerumiusto possimus omnis fugiat?",
      picture: battleship,
    },
    {
      name: "Todo-list-o",
      liveLink: "https://chinchilla15.github.io/todo-list/",
      repoLink: "https://github.com/Chinchilla15/todo-list.git",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Temporibus in animi sed vero velit architecto libero, quidem a.Quos dignissimos placeat exercitationem nam. Doloribus quis, rerumiusto possimus omnis fugiat?",
      picture: todoList,
    },
    {
      name: "Admin Dashboard",
      liveLink: "https://chinchilla15.github.io/admin-dashboard/",
      repoLink: "https://github.com/Chinchilla15/admin-dashboard.git",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Temporibus in animi sed vero velit architecto libero, quidem a.Quos dignissimos placeat exercitationem nam. Doloribus quis, rerumiusto possimus omnis fugiat?",
      picture: adminDashboard,
    },
    {
      name: "Weather App",
      liveLink: "https://chinchilla15.github.io/weather-app/",
      repoLink: "https://github.com/Chinchilla15/weather-app.git",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Temporibus in animi sed vero velit architecto libero, quidem a.Quos dignissimos placeat exercitationem nam. Doloribus quis, rerumiusto possimus omnis fugiat?",
      picture: weatherApp,
    },
    {
      name: "Tic-Tac-Toe Game",
      liveLink: "https://chinchilla15.github.io/tic-tac-toe/",
      repoLink: "https://github.com/Chinchilla15/tic-tac-toe.git",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Temporibus in animi sed vero velit architecto libero, quidem a.Quos dignissimos placeat exercitationem nam. Doloribus quis, rerumiusto possimus omnis fugiat?",
      picture: ticTacToe,
    },
    {
      name: "Sign Up Form",
      liveLink: "https://chinchilla15.github.io/sign-up-form/",
      repoLink: "https://github.com/Chinchilla15/sign-up-form.git",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Temporibus in animi sed vero velit architecto libero, quidem a.Quos dignissimos placeat exercitationem nam. Doloribus quis, rerumiusto possimus omnis fugiat?",
      picture: signUpForm,
    },
    {
      name: "Calculator",
      liveLink: "https://chinchilla15.github.io/calculator/",
      repoLink: "https://github.com/Chinchilla15/calculator.git",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Temporibus in animi sed vero velit architecto libero, quidem a.Quos dignissimos placeat exercitationem nam. Doloribus quis, rerumiusto possimus omnis fugiat?",
      picture: calculator,
    },
    {
      name: "Library App",
      liveLink: "https://chinchilla15.github.io/Library/",
      repoLink: "https://github.com/Chinchilla15/Library.git",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Temporibus in animi sed vero velit architecto libero, quidem a.Quos dignissimos placeat exercitationem nam. Doloribus quis, rerumiusto possimus omnis fugiat?",
      picture: libraryApp,
    },
    {
      name: "Etch-a-Sketch",
      liveLink: "https://chinchilla15.github.io/Etch-a-Sketch/",
      repoLink: "https://github.com/Chinchilla15/Etch-a-Sketch.git",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Temporibus in animi sed vero velit architecto libero, quidem a.Quos dignissimos placeat exercitationem nam. Doloribus quis, rerumiusto possimus omnis fugiat?",
      picture: etchASketch,
    },
  ];

  function createLink(href, title, iconClass) {
    const link = document.createElement("a");
    link.href = href;
    link.title = title;
    link.target = "_blank";
    link.innerHTML = `<i class="${iconClass}"></i>`;
    return link;
  }

  function createProjectCard(project) {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

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

    linksBox.append(repoLink, liveLink);

    const projectDescription = document.createElement("p");
    projectDescription.classList.add("project-description");
    projectDescription.textContent = project.description;

    infoContainer.append(projectName, linksBox, projectDescription);
    projectCard.append(img, infoContainer);

    return projectCard;
  }

  const fragment = document.createDocumentFragment();

  projects.forEach((project) => {
    const projectCard = createProjectCard(project);
    fragment.appendChild(projectCard);
  });

  mainContainer.appendChild(fragment);
}
