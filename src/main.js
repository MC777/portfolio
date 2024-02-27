import smallStar from "./images/small_star.svg";
import demoIcon from "./images/demo-icon.svg";
import githubIcon from "./images/github.svg";

const projectsContainer = document.querySelector('.project--js');
const username = 'MC777';
const direction = 'desc';

fetch(`https://api.github.com/users/${username}/repos?direction=${direction}`)
.then(response => response.json())
.then(response => {
    for (let repository of response) {
        const {name, html_url, description, stargazers_count, topics, homepage} = repository;
        let tags = ``;
        for (let topic of topics){
            tags += `<li class=" bg-gray-400/10 py-1 px-2 text-gray-400 font-bold leading-none rounded text-sm">${topic}</li>`
        }

        const element = `<article class="rounded-wtf md:rounded-wtfxl overflow-clip bg-gradient-to-br from-white/10 to-white/5 flex flex-col h-full">
        <div class="h-11 p-4 bg-gradient-to-br from-white/10 to-white/5 flex gap-1.5 shadow-innerLight rounded-wtf md:rounded-wtfxl ring-1 ring-inset ring-bg">
            <span class="w-3 h-3 bg-bg block rounded-full opacity-50"></span>
            <span class="w-3 h-3 bg-bg block rounded-full opacity-50"></span>
            <span class="w-3 h-3 bg-bg block rounded-full opacity-50"></span>
        </div>
        <div class="p-5 md:p-6 lg:p-10 flex flex-col justify-between grow ring-1 ring-inset ring-bg">
        <header class="flex gap-4 items-center mb-4">
            <h3 class="text-2xl font-bold">${name}</h3>
            <p class="flex gap-0.5 items-center bg-gray-400/10 py-1 px-2 text-gray-400 font-medium rounded leading-none"><img src="${smallStar}" alt="">${stargazers_count}</p>
        </header>
        <p class="text-gray-400 text-xl mb-4">${description}</p>
        <ul class="flex gap-2 mb-10 flex-wrap">
            ${tags}
        </ul>
        <div class="flex flex-col flex-wrap gap-4 items-start md:flex-row">
            <div class="relative group">
            <div class="absolute -inset-0.5 bg-accent rounded-lg blur-md opacity-0 group-hover:opacity-50 duration-500"></div>
            <a class="relative text-accent  hover:text-white transition-all duration-300 bg-bg flex gap-3 font-bold py-4 px-3 items-center rounded-lg md:rounded-xl md:text-xl border-lightGray hover:border-accent border-2" href="${homepage}" target="_blank" rel="noreferrer nofollow">
                <img class="w-6 h-6" src="${demoIcon}" alt=""> View demo</a>
            </div>
            <div class="relative group">
            <div class="absolute -inset-0.5 bg-accent rounded-lg blur-md opacity-0 group-hover:opacity-50 duration-500"></div>
            <a class="relative text-accent  hover:text-white transition-all duration-300 bg-bg flex gap-3 font-bold py-4 px-3 items-center rounded-lg md:rounded-xl md:text-xl border-lightGray hover:border-accent border-2" href="${html_url}" target="_blank" rel="noreferrer nofollow">
                <img class="w-6 h-6" src="${githubIcon}" alt="">Source code</a>
            </div>
        </div>
        </div>
        </article>`;
        if (homepage) projectsContainer.insertAdjacentHTML('afterbegin', element);
    }
});