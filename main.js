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
        about:"Estudante de Sistemas da informação, com foco em desenvolvimento de software e forte interesse em criação de softwares e aplicações web. Possuo conhecimentos em MongoDB, Node js e SQL,adquiridos por meio de projetos pessoais e acadêmicos.Tenho familiaridade com APIs REST, versionamento de código e boas práticas de programação Atualmente, atuo como Jovem Aprendiz de TI na Monte Rodovias , onde desenvolvo habilidades práticas em suporte e infraestrutura. Com Inglês nível B2, busco constantemente me atualizar através de documentações internacionais e comunidades globais, com o objetivo de evoluir na área de Desenvolvimento", 
        smallProject:"Projeto de interface web do youtube",
        ferramenta:"Linguagens utilizadas: HTML5 - CSS3", 
        linkProjeto:"Clique aqui para acessar", 
        smallProject2:"Projeto página de Um Site web", 
        ferramenta2:"Linguagens Utilizadas: HTML5 - CSS3", 
        linkProjeto2:"Clique aqui para acessar"
    },
    en:{
        sobremim:"About me", 
        projetos:"Projects", 
        habilidades:"Skills",
        btn_dark:"Dark", 
        btn_light:"Light",  
        button:"Translate to PT", 
        title:"Hi, I am Filipe, a Software Development Intern", 
        about:"Information Systems student, focused on software development and with a strong interest in creating software and web applications. I have knowledge of MongoDB, Node.js, and SQL, acquired through personal and academic projects. I am familiar with REST APIs, code versioning, and good programming practices. Currently, I work as a Young IT Apprentice at Monte Rodovias, where I develop practical skills in support and infrastructure. With B2 level English, I constantly seek to update my knowledge through international documentation and global communities, aiming to advance in the Development area.", 
        smallProject:"Web Project Youtube's interface", 
        ferramenta:"Used Languages: HTML5 - CSS3", 
        linkProjeto:"Click here to see more", 
        smallProject2:"Project WebSite Page", 
        ferramenta2:"Used Languages: HTML5-CSS3", 
        linkProjeto2:"Click here to see more" 
    }
}; 


// const texto = document.getElementById("texto")
// const navbar = document.getElementById("cab")
// const abas = document.getElementById("aba")
// const botoes = document.getElementById("botoes") 
// const centro = document.getElementById("meio") 

const body = document.body 
const abas = document.querySelectorAll(".aba")

const btn_dark = document.getElementById("btn_dark"); 
const btn_light = document.getElementById("btn_light") 


const sobremim = document.getElementById("sobremim");
const habilidades = document.getElementById("habilidades");
const projetos = document.getElementById("projetos");

const smallProject1 = document.getElementById("smallProject1")
const ferramentas1 = document.getElementById("ferramentas1") 
const linkProjetos1 = document.getElementById("linkProjetos1" )

const smallProject2 = document.getElementById("smallProject2")
const ferramentas2 = document.getElementById("ferramentas2")
const linkProjetos2 = document.getElementById("linkProjetos2")


const langButton = document.getElementById("translate");
const titleElement = document.getElementById("ola");
const aboutElement = document.getElementById("apr");

let currentLang = "pt"; 


console.log("Projeto 1: ", smallProject1)
console.log("Ferramentas: ", ferramentas1)
console.log("Link: ", linkProjetos1) 

langButton.addEventListener("click",()=>{
    currentLang = currentLang === "pt" ? "en" : "pt"; 

    if(btn_dark) btn_dark.innerText = translations[currentLang].btn_dark; 
    if(btn_light) btn_light.innerText = translations[currentLang].btn_light

    if(sobremim)sobremim.innerText = translations[currentLang].sobremim 
    if(habilidades)habilidades.innerText = translations[currentLang].habilidades 
    if(projetos)projetos.innerText = translations[currentLang].projetos 

    if(titleElement)titleElement.innerText = translations[currentLang].title  
    if(aboutElement)aboutElement.innerText = translations[currentLang].about 
    if(langButton)langButton.innerText = translations[currentLang].button 

    if(smallProject1)smallProject1.innerText = translations[currentLang].smallProject
    if(ferramentas1)ferramentas1.innerText= translations[currentLang].ferramenta
    if(linkProjetos1)linkProjetos1.innerText = translations[currentLang].linkProjeto 

    if(smallProject2)smallProject2.innerText = translations[currentLang].smallProject2
    if(ferramentas2)ferramentas2.innerText = translations[currentLang].ferramenta2 
    if(linkProjetos2)linkProjetos2.innerText = translations[currentLang].linkProjeto2

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