const textElement = document.getElementById("titulo")
const professions = ["Estagiário em Desenvolvimento", "JavaScript Intern Developer"]
let index = 0 
setInterval(()=>{
    index = (index+1) % professions.length 
    textElement.textContent = professions[index]
},3000)