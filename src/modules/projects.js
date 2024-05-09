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
      liveLink: "Link_2",
      repoLink: "Repo_2",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Temporibus in animi sed vero velit architecto libero, quidem a.Quos dignissimos placeat exercitationem nam. Doloribus quis, rerumiusto possimus omnis fugiat?",
      picture: "IMG",
    },
  ];

  function createLink(href, title, iconClass) {
    const link = document.createElement("a");
    link.href = href || "#";
    link.title = title;
    link.innerHTML = `<i class="${iconClass}"></i>`;
    return link;
  }

  function createProjectCard(project) {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    const imgPlaceholder = document.createElement("div");
    imgPlaceholder.classList.add("image");

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
    projectCard.append(imgPlaceholder, infoContainer);

    return projectCard;
  }

  const fragment = document.createDocumentFragment();

  projects.forEach((project) => {
    const projectCard = createProjectCard(project);
    fragment.appendChild(projectCard);
  });

  mainContainer.appendChild(fragment);
}
