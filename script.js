const toTopBtn = document.getElementById("toTop");
const navbar = document.getElementById("navbar");
const about = document.getElementById("about");
const projectSection = document.getElementById("projects-container");

var projectData = [
  {
    name: "KryptMe",
    desc: "File encryption software with 2FA.",
    img: "kryptme.jpg",
    link: "https://google.com",
  },
  {
    name: "ToDos",
    desc: "Simple To-Dos List that allows you to track your activities for a day!",
    img: "todos.jpg",
    link: "https://janicelie.github.io/todo-app/",
  },
  {
    name: "Movie App",
    desc: "Movie lovers? Use this app to search for the latest and most popular movie!",
    img: "movie-app.jpg",
    link: "https://janicelie.github.io/movie-app/",
  },
  {
    name: "Food Recipe App",
    desc: "Love cooking but don't know the recipe? Come find your favourite meals and cook for your loved one!",
    img: "food-recipe-app.jpg",
    link: "https://janicelie.github.io/food-recipe-app/",
  },
];

showProject(projectData);

function showProject(projectData) {
  projectData.forEach((project) => {
    const { name, desc, img, link } = project;
    const projectEl = document.createElement("div");
    projectEl.classList.add("project");
    projectEl.innerHTML = `
      <img src="img/projects/${img}"/>
      <div class="project-body">
          <h4>${name}</h4>
          <p>${desc}</p>
          <a class="button" href="${link}" target="_blank">View</a>
      </div>
  `;
    projectSection.appendChild(projectEl);
  });
}

// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     toTopBtn.style.display = "block";
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     toTopBtn.style.display = "none";
//     document.getElementById("navbar").style.top = "-100px";
//   }
// }

toTopBtn.addEventListener("click", () => {
  // For Safari
  document.body.scrollTop = 0;

  // For Chrome, Firefox, IE and Opera
  document.documentElement.scrollTop = 0;
});

let menus = document.querySelectorAll(".menu");

menus.forEach((menu) => {
  menu.addEventListener("click", function () {
    menus.forEach((menuEl) => {
      menuEl.classList.remove("active");
      let hideThisElName = menuEl.querySelector("a").textContent;
      let hideThisEl = document.getElementById(hideThisElName);
      hideThisEl.style.display = "none";
    });
    this.classList.add("active");
    let sectionName = menu.querySelector("a").textContent;
    let section = document.getElementById(sectionName);
    display(section);
  });
});

function display(section) {
  section.style.display = "block";
}

// if (section.style.display === "none") {
//   section.style.display = "block";
// } else {
//   section.style.display = "none";
// }
