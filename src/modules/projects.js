export default function renderProjects() {
  const mainContainer = document.getElementById("projects-container");

  const projects = [
    {
      name: "Test",
      liveLink: "Link",
      repoLink: "Repo",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Temporibus in animi sed vero velit architecto libero, quidem a.Quos dignissimos placeat exercitationem nam. Doloribus quis, rerumiusto possimus omnis fugiat?",
      picture: "IMG",
    },
    {
      name: "Test 2",
      liveLink: "Link 2",
      repoLink: "Repo 2",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Temporibus in animi sed vero velit architecto libero, quidem a.Quos dignissimos placeat exercitationem nam. Doloribus quis, rerumiusto possimus omnis fugiat?",
      picture: "IMG",
    },
  ];

  for (let i = 0; i < projects.length; i++) {
    const projectsList = projects[i];

    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    const imgPlaceholder = document.createElement("div");
    imgPlaceholder.classList.add("image");

    const infoContainer = document.createElement("div");
    infoContainer.classList.add("project-info-container");

    projectCard.append(imgPlaceholder, infoContainer);

    const projectName = document.createElement("h3");
    projectName.classList.add("project-name");
    projectName.innerHTML = projectsList.name;

    const linksBox = document.createElement("div");
    linksBox.classList.add("links-box");

    const repoLink = document.createElement("a");
    repoLink.href = projectsList.repoLink;
    repoLink.title = "Github Repo Link";
    repoLink.innerHTML = "<i class='fa-brands fa-square-github'></i>";
    const liveLink = document.createElement("a");
    liveLink.href = projectsList.liveLink;
    liveLink.title = "Live Site Link";
    liveLink.innerHTML =
      " <i class='fa-solid fa-up-right-from-square fa-sm'></i";

    linksBox.append(repoLink, liveLink);

    const projectDescription = document.createElement("p");
    projectDescription.classList.add("project-description");
    projectDescription.innerHTML = projectsList.description;

    infoContainer.append(projectName, linksBox, projectDescription);

    mainContainer.appendChild(projectCard);

    console.log(projectsList);
  }
}
