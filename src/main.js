import smallStar from "./images/small_star.svg";
import demoIcon from "./images/demo-icon.svg";
import githubIcon from "./images/github.svg";

const projectsContainer = document.querySelector(".project--js");
const username = "MC777";
const direction = "desc";

console.log("Hey! 😎😎😎");

fetch(`https://api.github.com/users/${username}/repos?direction=${direction}`)
  .then((response) => response.json())
  .then((response) => {
    for (let repository of response) {
      const {
        name,
        html_url,
        description,
        stargazers_count,
        topics,
        homepage,
      } = repository;
      let tags = ``;
      for (let topic of topics) {
        tags += `<li class=" bg-gray-400/10 py-1 px-2 text-gray-400 font-bold leading-none rounded text-sm">${topic}</li>`;
      }

      const element = `<article
        class="rounded-wtf md:rounded-wtfxl overflow-clip bg-gradient-to-br from-white/10 to-white/5 flex flex-col h-full"
        >
        <div class="h-11 p-4 gap-1.5 shadow-inner-light ring-1 ring-inset ring-bg rounded-t-wtf md:rounded-wtfxl flex bg-gradient-to-br from-white/10 to-white/5">
            <span class="w-3 h-3 bg-bg block rounded-full opacity-50"></span>
            <span class="w-3 h-3 bg-bg block rounded-full opacity-50"></span>
            <span class="w-3 h-3 bg-bg block rounded-full opacity-50"></span>
        </div>
        <div class="p-5 md:p-6 lg:p-10 flex flex-col justify-between grow">
        <div>
            <header class="flex items-center gap-4 mb-4">
                <h3 class="text-2xl font-bold">${name}</h3>
                <p class="flex gap-0.5 items-center bg-gray-400/10 py-1 px-2 text-gray-400 font-medium rounded leading-none"><img src="${smallStar}" alt="">${stargazers_count}</p>
            </header>
            <p class="text-gray-400 text-xl mb-4">${description}</p>
            
            <ul class="flex gap-2 mb-10 flex-wrap">
                ${tags}
            </ul>
        </div>
        <div class="flex flex-col flex-wrap md:flex-row gap-4 items-start">
            <a class="relative text-accent  hover:text-white transition-all duration-300 bg-bg flex gap-3 font-bold py-4 px-3 items-center rounded-lg md:rounded-xl md:text-xl border-gray-800 hover:border-accent border-2" href="${homepage}" target="_blank" rel="noreferrer nofollow">
                <img class="w-6 h-6" src="${demoIcon}" width="24" hight="24" alt=""> View demo</a>
            
            <a class="relative text-accent  hover:text-white transition-all duration-300 bg-bg flex gap-3 font-bold py-4 px-3 items-center rounded-lg md:rounded-xl md:text-xl border-gray-800 hover:border-accent border-2" href="${html_url}" target="_blank" rel="noreferrer nofollow">
                <img class="w-6 h-6" src="${githubIcon}" width="24" hight="24" alt="">Source code</a>
        </div>
        </div>
        </article>`;
      if (homepage) projectsContainer.insertAdjacentHTML("afterbegin", element);
    }
  });
