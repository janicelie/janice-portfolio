const toTopBtn = document.getElementById("toTop");
const navbar = document.getElementById("navbar");
const about = document.getElementById("about");
const projectSection = document.getElementById("projects-container");

var projectData = [
  {
    name: "KryptMe",
    desc: "File encryption software with 2FA.",
    img: "img/janice-photo.jpg",
    link: "https://google.com",
  },
  {
    name: "ToDos",
    desc: "Simple To-Dos List that allows you to track your activities for a day!",
    img: "img/janice-photo.jpg",
    link: "https://google.com",
  },
  {
    name: "Movie App",
    desc: "Movie lovers? Use this app to search for the latest and most popular movie!",
    img: "img/janice-photo.jpg",
    link: "https://google.com",
  },
  {
    name: "Food Recipe App",
    desc: "Love cooking but don't know the recipe? Come find your favourite meals and cook for your loved one!",
    img: "img/janice-photo.jpg",
    link: "https://google.com",
  },
];

showProject(projectData);

function showProject(projectData) {
  projectData.forEach((project) => {
    const { name, desc, img, link } = project;
    const projectEl = document.createElement("div");
    projectEl.classList.add("project");
    projectEl.innerHTML = `
      <img src="${img}"/>
      <div class="project-body">
          <h4>${name}</h4>
          <p>${desc}</p>
          <a class="button" href="${link}" target="_blank">View</a>
      </div>
  `;
    projectSection.appendChild(projectEl);
  });
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopBtn.style.display = "block";
    document.getElementById("navbar").style.top = "0";
  } else {
    toTopBtn.style.display = "none";
    document.getElementById("navbar").style.top = "-100px";
  }
}

toTopBtn.addEventListener("click", () => {
  // For Safari
  document.body.scrollTop = 0;

  // For Chrome, Firefox, IE and Opera
  document.documentElement.scrollTop = 0;
});
