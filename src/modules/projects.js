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
        "Model for a restaurant website (not a real restaurant). Created with a minimmalist and intuitive design with the necesarry information for the page. ",
      picture: restaurantPage,
    },
    {
      name: "Battleship Game",
      liveLink: "https://chinchilla15.github.io/battleship/",
      repoLink: "https://github.com/Chinchilla15/battleship.git",
      description:
        "Fully functional battleship game on the web. Added a retro design and visually rich interface. Game mode: player vs AI. Give it a try and good luck!",
      picture: battleship,
    },
    {
      name: "Todo-list-o",
      liveLink: "https://chinchilla15.github.io/todo-list/",
      repoLink: "https://github.com/Chinchilla15/todo-list.git",
      description:
        "Not your typical todo-list project. Todo-List-O is a functional web app that uses local storage to keep your information ready and has several filters for your tasks. Easy to use and with great design.",
      picture: todoList,
    },
    {
      name: "Admin Dashboard",
      liveLink: "https://chinchilla15.github.io/admin-dashboard/",
      repoLink: "https://github.com/Chinchilla15/admin-dashboard.git",
      description: "Model for an admin dashboard page. Suited for desktop. ",
      picture: adminDashboard,
    },
    {
      name: "Weather App",
      liveLink: "https://chinchilla15.github.io/weather-app/",
      repoLink: "https://github.com/Chinchilla15/weather-app.git",
      description:
        "A weather app powered by weatherAPI to check the weather anywhere you go. Created this project with a minimalist design and shows the proper weather info.",
      picture: weatherApp,
    },
    {
      name: "Tic-Tac-Toe Game",
      liveLink: "https://chinchilla15.github.io/tic-tac-toe/",
      repoLink: "https://github.com/Chinchilla15/tic-tac-toe.git",
      description:
        "The classic tic-tac-toe game on the web! Straight forward design with visual cues to keep the user updated with what is happening in the game. Suited for two-players only.",
      picture: ticTacToe,
    },
    {
      name: "Sign Up Form",
      liveLink: "https://chinchilla15.github.io/sign-up-form/",
      repoLink: "https://github.com/Chinchilla15/sign-up-form.git",
      description:
        "Sign Up form model with minimalist design and the proper form validation using native HTML attributes, CSS for visual interactivity and JavaScript for further validation. ",
      picture: signUpForm,
    },
    {
      name: "Calculator",
      liveLink: "https://chinchilla15.github.io/calculator/",
      repoLink: "https://github.com/Chinchilla15/calculator.git",
      description:
        "Your clasic calculator project, one of the first ones I made and a very special one! Design inspired by the macOS calculator.",
      picture: calculator,
    },
    {
      name: "Library App",
      liveLink: "https://chinchilla15.github.io/Library/",
      repoLink: "https://github.com/Chinchilla15/Library.git",
      description:
        "Like to read? This is a model for a library app where you can add your books and keep track of the ones you've read and the ones pending.  ",
      picture: libraryApp,
    },
    {
      name: "Etch-a-Sketch",
      liveLink: "https://chinchilla15.github.io/Etch-a-Sketch/",
      repoLink: "https://github.com/Chinchilla15/Etch-a-Sketch.git",
      description:
        "A simple etch-a-sketch on the web. This was actually my first self-taught project that I could not leave out from my portfolio! Give it a try!",
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
