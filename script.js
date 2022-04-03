// CONSTANT
const toTopBtn = document.getElementById("toTop");
const navbar = document.getElementById("navbar");
const about = document.getElementById("about");
const projectSection = document.getElementById("projects-container");

$(document).ready(function () {
  showProject(projectData);
  firstDisplay();
});

// PROJECT DATA
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
  {
    name: "Password Generator App",
    desc: "The most convenient password generator app of the year!",
    img: "password-generator-app.jpg",
    link: "https://janicelie.github.io/food-recipe-app/",
  },
  {
    name: "Note",
    desc: "Write down all your notes here!",
    img: "note-app.jpg",
    link: "https://janicelie.github.io/food-recipe-app/",
  },
  {
    name: "Drawing App",
    desc: "Allows you to draw everything you can imagine:)",
    img: "drawing-app.jpg",
    link: "https://janicelie.github.io/food-recipe-app/",
  },
];

// FUNCTION
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

let menus = document.querySelectorAll(".opt");

function firstDisplay() {
  this.classList.add("active");
  let project = document.getElementById("Projects");
  let contact = document.getElementById("Contact");
  project.style.display = "none";
  contact.style.display = "none";
}

menus.forEach((menu) => {
  menu.addEventListener("click", function () {
    // Removing active class
    menus.forEach((menuEl) => {
      menuEl.classList.remove("active");
      let hideThisEl = document.getElementById(menuEl.textContent);
      hideThisEl.style.display = "none";
      //hideThisEl.classList.remove("w3-animate-right");
    });

    this.classList.add("active");
    let section = document.getElementById(menu.textContent);
    let sectionName = menu.textContent;
    //section.classList.add("w3-animate-right");
    display(section, sectionName);
  });
});

function display(section, sectionName) {
  const footer = document.querySelector("footer");
  if (sectionName == "Home") {
    footer.style.position = "relative";
    section.style.display = "flex";
    // document.getElementById("About").style.display = "flex";
    // document.getElementById("Projects").style.display = "flex";
    // document.getElementById("Contact").style.display = "flex";
  } else {
    section.style.display = "flex";
    if (sectionName == "Contact") {
      footer.style.position = "absolute";
    } else {
      footer.style.position = "relative";
    }
  }
}

// if (section.style.display === "none") {
//   section.style.display = "block";
// } else {
//   section.style.display = "none";
// }
