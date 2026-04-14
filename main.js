// const textElement = document.getElementById("titulo")
// const professions = ["Estagiário em Desenvolvimento", "JavaScript Developer Intern"]
// let index = 0
// setInterval(()=>{
//     index = (index+1) % professions.length
//     textElement.textContent = professions[index]
// },3000)

const translations = {
  pt: {
    sobremim: "Sobre mim",
    projetos: "Projetos",
    habilidades: "Habilidades",
    btn_dark: "Escuro",
    btn_light: "Claro",
    button: "Traduzir para EN",
    title: "Olá, sou Filipe, Estagiário em Desenvolvimento",
    about:
      "Estudante de Sistemas da informação, com foco em desenvolvimento de software e forte interesse em criação de softwares e aplicações web. Possuo conhecimentos em MongoDB, Node js e SQL,adquiridos por meio de projetos pessoais e acadêmicos.Tenho familiaridade com APIs REST, versionamento de código e boas práticas de programação Atualmente, atuo como Jovem Aprendiz de TI na Monte Rodovias , onde desenvolvo habilidades práticas em suporte e infraestrutura. Com Inglês nível B2, busco constantemente me atualizar através de documentações internacionais e comunidades globais, com o objetivo de evoluir na área de Desenvolvimento",
    smallProject: "BJJ-LEARNING",
    ferramenta:
      "Ferramentas Utilizadas : React, NodeJs, MongoDB, \n Vercel, Railway, Git e Github",
    linkProjetos1: "Clique aqui para acessar",
    linkRepositorio1: "Clique aqui para acessar o repositório",
    frontend: "Habilidades do Front-end:",
    backend: "Habilidades do Back-end:",
    outrostext: "Habilidades Uteis:",
  },
  en: {
    sobremim: "About me",
    projetos: "Projects",
    habilidades: "Skills",
    btn_dark: "Dark",
    btn_light: "Light",
    button: "Translate to PT",
    title: "Hi, I am Filipe, a Software Development Intern",
    about:
      "Information Systems student, focused on software development and with a strong interest in creating software and web applications. I have knowledge of MongoDB, Node.js, and SQL, acquired through personal and academic projects. I am familiar with REST APIs, code versioning, and good programming practices. Currently, I work as a Young IT Apprentice at Monte Rodovias, where I develop practical skills in support and infrastructure. With B2 level English, I constantly seek to update my knowledge through international documentation and global communities, aiming to advance in the Development area.",
    smallProject: "BJJ-LEARNING",
    ferramenta:
      "Used Features: React, NodeJs, MongoDB, \n Vercel, Railway, Git e Github",
    linkProjetos1: "Click here to use it",
    linkRepositorio1: "Click here to access the repository",
    frontend: "Front-end Skills: ",
    backend: "Back-end Skills: ",
    outrostext: "Helpful Skills: ",
  },
};

const body = document.body;
const abas = document.querySelectorAll(".aba");

const btn_dark = document.getElementById("btn_dark");
const btn_light = document.getElementById("btn_light");

const img = document.getElementById("img");

const sobremim = document.getElementById("sobremim");
const habilidades = document.getElementById("habilidades");
const projetos = document.getElementById("projetos");

const smallProject1 = document.getElementById("smallProject1");
const ferramentas1 = document.getElementById("ferramentas1");
const linkProjetos1 = document.getElementById("linkProjetos1");
const linkRepositorio1 = document.getElementById("linkRepositorio1");

const smallProject2 = document.getElementById("smallProject2");
const ferramentas2 = document.getElementById("ferramentas2");
const linkProjetos2 = document.getElementById("linkProjetos2");

const frontend = document.getElementById("frontendtext");
const backend = document.getElementById("backendtext");
const outrostext = document.getElementById("outrostext");

const langButton = document.getElementById("translate");
const titleElement = document.getElementById("ola");
const desc = document.getElementById("desc");
const aboutElement = document.getElementById("apr");

let currentLang = "pt";

langButton.addEventListener("click", () => {
  currentLang = currentLang === "pt" ? "en" : "pt";

  if (btn_dark) btn_dark.innerText = translations[currentLang].btn_dark;
  if (btn_light) btn_light.innerText = translations[currentLang].btn_light;

  if (sobremim) sobremim.innerText = translations[currentLang].sobremim;
  if (habilidades)
    habilidades.innerText = translations[currentLang].habilidades;
  if (projetos) projetos.innerText = translations[currentLang].projetos;

  if (titleElement) titleElement.innerText = translations[currentLang].title;
  if (aboutElement) aboutElement.innerText = translations[currentLang].about;
  if (langButton) langButton.innerText = translations[currentLang].button;

  if (smallProject1)
    smallProject1.innerText = translations[currentLang].smallProject;
  if (ferramentas1)
    ferramentas1.innerText = translations[currentLang].ferramenta;
  if (linkProjetos1)
    linkProjetos1.innerText = translations[currentLang].linkProjetos1;

  if (linkRepositorio1)
    linkRepositorio1.innerText = translations[currentLang].linkRepositorio1;

  if (smallProject2)
    smallProject2.innerText = translations[currentLang].smallProject2;
  if (ferramentas2)
    ferramentas2.innerText = translations[currentLang].ferramenta2;
  if (linkProjetos2)
    linkProjetos2.innerText = translations[currentLang].linkProjeto2;

  if (frontend) frontend.innerText = translations[currentLang].frontend;
  if (backend) backend.innerText = translations[currentLang].backend;
  if (outrostext) outrostext.innerText = translations[currentLang].outrostext;

  localStorage.setItem("preferredLang", currentLang);
});

const updateTextColors = (color) => {
  const elements = [
    titleElement,
    desc,
    aboutElement,
    smallProject1,
    ferramentas1,
    linkProjetos1,
    linkRepositorio1,
    frontend,
    backend,
    outrostext,
  ];
};

btn_dark.addEventListener("click", () => {
  abas.forEach((aba) => {
    aba.style.color = "#F2F2F2";
  });
  if (linkProjetos1) linkProjetos1.style.color = "#f2f2f2";
  if (linkRepositorio1) linkRepositorio1.style.color = "#f2f2f2";
  body.classList.add("dark-page");
  body.classList.remove("light-page");
  localStorage.setItem("theme", "dark");
});

btn_light.addEventListener("click", () => {
  abas.forEach((aba) => {
    aba.style.color = "#0B192C";
  });
  if (linkProjetos1) linkProjetos1.style.color = "#0B192C";
  if (linkRepositorio1) linkRepositorio1.style.color = "#0B192C";

  body.classList.add("light-page");
  body.classList.remove("dark-page");
  localStorage.setItem("theme", "light");
});

window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("preferredLang");
  const savedTheme = localStorage.getItem("theme");

  if (savedLang === "en" && langButton) {
    langButton.click();
  }
  if (savedTheme === "dark" && btn_dark) {
    btn_dark.click();
  }
});
