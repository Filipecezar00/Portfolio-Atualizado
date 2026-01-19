// const textElement = document.getElementById("titulo")
// const professions = ["Estagiário em Desenvolvimento", "JavaScript Developer Intern"]
// let index = 0 
// setInterval(()=>{
//     index = (index+1) % professions.length 
//     textElement.textContent = professions[index]
// },3000)

const translations = {
    pt:{
        button:"Traduzir para EN", 
        title:"Olá, sou Filipe, Estagiário em Desenvolvimento" ,
        about:"Estudante de Sistemas da informação, com foco em desenvolvimento de software e forte interesse em criação de softwares e aplicações web. Possuo conhecimentos em MongoDB, Node js e SQL,adquiridos por meio de projetos pessoais e acadêmicos.Tenho familiaridade com APIs REST, versionamento de código e boas práticas de programação Atualmente, atuo como Jovem Aprendiz de TI na Monte Rodovias , onde desenvolvo habilidades práticas em suporte e infraestrutura. Com Inglês nível B2, busco constantemente me atualizar através de documentações internacionais e comunidades globais, com o objetivo de evoluir na área de Desenvolvimento"
    },
    en:{
        button:"Translate to PT", 
        title:"Hi, I am Filipe, a Software Development Intern", 
        about:"Systems Information Student With a strong focus on Software development and web applications. I have experience with MongoDB, Node.js, and SQL.... Currently, I work as a IT junior Apprentice at Monte Rodovias, My english is B2 Level, my goal is use it to grow my carrer in Development."
    }
}; 
const langButton = document.getElementById("translate")
const titleElement = document.getElementById("ola")
const aboutElement = document.getElementById("apr")
let currentLang = "pt"; 

langButton.addEventListener("click",()=>{
    currentLang = currentLang === "pt" ? "en" : "pt"; 

    titleElement.innerText = translations[currentLang].title  
    aboutElement.innerText = translations[currentLang].about 
    langButton.innerText = translations[currentLang].button 

    localStorage.setItem("preferredLang",currentLang) 
})