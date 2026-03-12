// ^------------------------------ HTML elment------------------------


const ProjectsContainer = document.querySelector(".Projects-items")
const servicesContainer = document.querySelector(".services-items")

console.log(ProjectsContainer)
// & ---------------------------- data ------------------------

const projects = [
  {
    title: "Shopinity E-commerce Store",
    description:
      "Full-featured online store built with React and Tailwind CSS. Supports API-based authentication, product browsing, cart, wishlist, checkout, and payment.",
    imgSource: "assets/e-commerce.png",
    videoSource: "",
    technologies: ["React", "Tailwind CSS", "REST API", "JavaScript"],
    liveDemo: "https://e-commerce-8ign.vercel.app/",
    github: "https://github.com/Marina-Michel999/e-commerce"
  },
    {
    title: "Movie App",
    description:
      "A responsive movie browsing application that fetches movie data from TheMovieDB API. Includes features such as search, trending movies, movie details, and categories.",
    imgSource: "assets/movie-app.png",
    videoSource: "",
    technologies: ["JavaScript", "Bootstrap", "TheMovieDB API", "HTML", "CSS"],
    liveDemo: "https://marina-michel999.github.io/Movie-App/",
    github: "https://github.com/Marina-Michel999/Movie-App"
  },
  {
    title: "Weather App",
    description:
      "A weather forecast application that fetches real-time weather data from an external API and displays temperature, humidity, and location information in a clean and responsive interface.",
    imgSource: "assets/weather-app.png",
    videoSource: "",
    technologies: ["JavaScript", "Bootstrap", "Weather API", "HTML", "CSS"],
    liveDemo: "https://marina-michel999.github.io/Weather-app/",
    github: "https://github.com/Marina-Michel999/Weather-app"
  },
    {
    title: "hang man game",
    description:
      "Hangman is a simple word guessing game The project was built using HTML, CSS, and JavaScript",
    imgSource: "assets/hang-man.png",
    videoSource: "",
    technologies: ["HTML" , "CSS" , "JavaScript"],
    liveDemo: "https://e-commerce-8ign.vercel.app/",
    github: "https://github.com/Marina-Michel999/e-commerce"
  },
  {
    title: "CRUD App",
    description:
      "A simple CRUD application that allows users to create, read, update, and delete data directly in the browser using localStorage with a clean and responsive UI.",
    imgSource: "assets/Crud.png",
    videoSource: "",
    technologies: ["JavaScript", "Bootstrap", "LocalStorage", "HTML", "CSS"],
    liveDemo: "https://marina-michel999.github.io/CRUD-app/",
    github: "https://github.com/Marina-Michel999/CRUD-app"
  }
];

const services = [
  {
    icon: "fa-laptop",
    title: "Problem Solving & UI Enhancement",
    description: "Analyzing requirements, fixing UI issues, and improving layouts to deliver a smooth and user-friendly experience."
  },
  {
    icon: "fa-bullhorn",
    title: "Performance & Clean Code",
    description: "Writing clean, optimized, and maintainable code with a focus on speed and best practices."
  },
  {
    icon: "fa-umbrella",
    title: "Development",
    description: "Building modern, fast, and responsive websites using HTML, CSS, JavaScript, and modern frameworks."
  },
  {
    icon: "fa-diamond",
    title: "UI to Code",
    description: "Converting Figma, XD, or PSD designs into clean, pixel-perfect, and well-structured code."
  },
  {
    icon: "fa-television",
    title: "Fully Responsive",
    description: "Creating fully responsive layouts that work perfectly on all screen sizes and devices."
  },
  {
    icon: "fa-camera",
    title: "Interactive Web Interfaces",
    description: "Adding smooth animations and interactive elements to enhance user experience using JavaScript."
  }
];

// * ----------------------------------functions----------------------------------
function displayProjects() {
    let cartona = ``
    for (let i = 0; i < projects.length; i++) {
        console.log(ProjectsContainer)
        cartona += `<div class=" col-lg-6"   data-aos="fade-up"  data-aos-duration="1100" data-aos-delay="${(i*100)}" >
            <div class="card project-card border-main section-bg h-100 position-relative overflow-hidden"  >
              <div class="project-img overflow-hidden position-relative">
                <picture class="overflow-hidden overflow-hidden">
                  <img class="w-100 object-fit-cover" src="${projects[i].imgSource}" alt="">
                    <div class="project-layer position-absolute d-flex justify-content-center align-items-center">
                      <div class="">
                        <p class="text-black p-3">
                        ${projects[i].description}
                        </p>
                      </div>
                    </div>
                </picture>
              </div>
              <div class="card-body test-white px-3 py-3  project-content">
                <h4 class="text-white  fs-4 m-0 fw-bolder text-center py-3 " data-aos="fade-up" data-aos-duration="1300" >
                  ${projects[i].title}
                </h4>

                <p data-aos="fade-up" data-aos-duration="1300"><span class="text-main">Live demo : </span><a class="text-decoration-underline" href="${projects[i].liveDemo}"> ${projects[i].liveDemo}</a></p>
                <p data-aos="fade-up" data-aos-duration="1300"><span class="text-main">GitHub : </span><a class="text-decoration-underline" href="${projects[i].github}"> ${projects[i].github}</a></p>
                <div class=" d-flex ">
                <button data-aos="fade-up" data-aos-duration="1300" onclick="addVideo(${i})" type="button" class="btn video-demo-btn align-self-end py-2 ps-4 pe-4 mt-3 bg-main fs-5  text-white  hover-main">video demo</button>
                </div>

              </div>
              <div class=" video-demo-layer bg-tranparent z-3 d-none  ">
                <div  class="i-container pe-3 pt-3 d-flex justify-content-end">
                    <i onclick="removeVideo(${i})" class="fa-regular fa-circle-xmark text-white rounded-circle fs-1 bg-danger "></i>             
                </div>
                    <video class="w-100 h-90 object-fit-contain" id="video" src="${projects[i].videoSource}" controls="" poster="${projects[i].imgSource}"></video>
              </div>
            </div>
          </div>
`
    }
    ProjectsContainer.innerHTML= cartona

}
function displayServices() {
  let cartona = ``
  for (let i = 0; i < services.length; i++) {
  cartona += `
  <div class="col-md-4" data-aos="fade-up"  data-aos-duration="1100" data-aos-delay="${(i*400)}">
    <div class="card h-100 p-3 text-center d-flex justify-content-center services-card overflow-hidden">
      
      <div class="card-icon m-auto d-flex align-items-center justify-content-center" data-aos="fade-up"  data-aos-duration="1100">
        <i class="fa ${services[i].icon}"></i>
      </div>

      <div class="card-body" >
        <h5 class="card-title text-main" data-aos="fade-up"  data-aos-duration="1100">${services[i].title}</h5>
        <p class="card-text" data-aos="fade-up"  data-aos-duration="1100">${services[i].description}</p>
      </div>

    </div>
  </div>
  `;
}
servicesContainer.innerHTML = cartona
}
displayProjects()
displayServices()
const showVideoBtns = document.querySelectorAll(".video-demo-btn")
const videoDemoLayers = document.querySelectorAll(".video-demo-layer")
const removeLayers = document.querySelectorAll(".i-container")

function addVideo(indexOfProduct) {
    console.log(videoDemoLayers)
    for (let i = 0; i < videoDemoLayers.length; i++) {
        if (indexOfProduct === i) {
        videoDemoLayers[i].classList.remove("d-none")
    }
    }
    
}
function removeVideo(indexOfProduct) {
    console.log(removeLayers)
    for (let i = 0; i < removeLayers.length; i++) {
        if (indexOfProduct === i) {
        videoDemoLayers[i].classList.add("d-none")
    }
    }
    
}

//loop on product and add ui
// get buttons and loop on it to add event
//we want on click to get a layer and give it d-block
// send index of projects array to function of showing layer
// inside functon os showing layer compare index f it with i of projects