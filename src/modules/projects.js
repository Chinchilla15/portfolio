export default function renderProjects() {
  const mainContainer = document.getElementById("projects-container");

  const projects = [
    {
      name: "Test",
      liveLink: "Link",
      repoLink: "Repo",
      description: "Lorem",
      picture: "IMG",
    },
    {
      name: "Test 2",
      liveLink: "Link 2",
      repoLink: "Repo 2",
      description: "Lorem",
      picture: "IMG",
    },
  ];

  for (let i = 0; i < projects.length; i++) {
    const projectCard = document.createElement("div");

    mainContainer.appendChild(projectCard);
  }
}
