// const textElement = document.getElementById("titulo")
// const professions = ["Estagiário em Desenvolvimento", "JavaScript Developer Intern"]
// let index = 0 
// setInterval(()=>{
//     index = (index+1) % professions.length 
//     textElement.textContent = professions[index]
// },3000)
const translations = {
    pt:{
        sobremim:"Sobre mim", 
        projetos:"Projetos", 
        habilidades:"Habilidades", 
        btn_dark:"Escuro", 
        btn_light:"Claro", 
        button:"Traduzir para EN", 
        title:"Olá, sou Filipe, Estagiário em Desenvolvimento" ,
        about:"Estudante de Sistemas da informação, com foco em desenvolvimento de software e forte interesse em criação de softwares e aplicações web. Possuo conhecimentos em MongoDB, Node js e SQL,adquiridos por meio de projetos pessoais e acadêmicos.Tenho familiaridade com APIs REST, versionamento de código e boas práticas de programação Atualmente, atuo como Jovem Aprendiz de TI na Monte Rodovias , onde desenvolvo habilidades práticas em suporte e infraestrutura. Com Inglês nível B2, busco constantemente me atualizar através de documentações internacionais e comunidades globais, com o objetivo de evoluir na área de Desenvolvimento"
    },
    en:{
        sobremim:"About me", 
        projetos:"Projects", 
        habilidades:"Skills",
        btn_dark:"Dark", 
        btn_light:"Light",  
        button:"Translate to PT", 
        title:"Hi, I am Filipe, a Software Development Intern", 
        about:"Information Systems student, focused on software development and with a strong interest in creating software and web applications. I have knowledge of MongoDB, Node.js, and SQL, acquired through personal and academic projects. I am familiar with REST APIs, code versioning, and good programming practices. Currently, I work as a Young IT Apprentice at Monte Rodovias, where I develop practical skills in support and infrastructure. With B2 level English, I constantly seek to update my knowledge through international documentation and global communities, aiming to advance in the Development area."
    }
}; 


// const texto = document.getElementById("texto")
// const navbar = document.getElementById("cab")
// const abas = document.getElementById("aba")
// const botoes = document.getElementById("botoes") 
// const centro = document.getElementById("meio") 

const body = document.body 
const abas = document.querySelectorAll("a")




const btn_dark = document.getElementById("btn_dark"); 
const btn_light = document.getElementById("btn_light") 


const sobremim = document.getElementById("sobremim");
const habilidades = document.getElementById("habilidades");
const projetos = document.getElementById("projetos");


const langButton = document.getElementById("translate");
const titleElement = document.getElementById("ola");
const aboutElement = document.getElementById("apr");

let currentLang = "pt"; 

langButton.addEventListener("click",()=>{
    currentLang = currentLang === "pt" ? "en" : "pt"; 

    btn_dark.innerText = translations[currentLang].btn_dark
    btn_light.innerText = translations[currentLang].btn_light

    sobremim.innerText = translations[currentLang].sobremim 
    habilidades.innerText = translations[currentLang].habilidades 
    projetos.innerText = translations[currentLang].projetos 

    titleElement.innerText = translations[currentLang].title  
    aboutElement.innerText = translations[currentLang].about 
    langButton.innerText = translations[currentLang].button 

    localStorage.setItem("preferredLang",currentLang) 
})

btn_dark.addEventListener("click",()=>{
abas.forEach(aba=>{
aba.style.color = "#F2F2F2"
})

body.classList.add("dark-page"); 
body.classList.remove("light-page"); 
localStorage.setItem("theme","dark"); 

})


btn_light.addEventListener("click",()=>{
abas.forEach(aba=>{
    aba.style.color = "#0B192C"
})


body.classList.add("light-page"); 
body.classList.remove("dark-page"); 
localStorage.setItem("theme","light"); 
})