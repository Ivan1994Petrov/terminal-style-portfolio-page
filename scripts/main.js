
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("Welcome");
  await delay(700);
  createText("Starting the server...");
  await delay(1500);
  createText("You can run several commands:");
 
  createCode("about", "Who am I and what I do.");
  createCode("all", "See all commands.");
  createCode("contacts", "All my contacts.");

  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  // p.textContent = "# user";
  // span1.textContent = " in";
  span2.textContent = " ~/ivan-petrov";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value.toLowerCase() === "all"){
    trueValue(value);
    
    createCode("about", "Who am i and what i do");
    createCode("experience", "My working experience");
    createCode("education", "My education and certificates");
    createCode("contacts", "All my contacts");
    createCode("clear", "Clean the terminal");
    
  }
  else if(value.toLowerCase() === "about"){
    trueValue(value);
    createText("Hi, my name is <span class='blue'>Ivan Petrov</span>")
    createText("and I am <span class='blue'>Software Engineer</span> with interests in <span class='blue'>DevOps and ML</span>.")
  }

  else if(value.toLowerCase() === "experience"){
    trueValue(value);

    
    createText("<span class='blue'>Python Developer</span> at MZ3")
    createText("&emsp;(09.2019 - 09.2020)")
    createText("&emsp;Technologies: Python (Django), Celery, RabbitMQ, PostgreSQL, Selenium, Vagrant")

    createText("<br>")
    createText("<span class='blue'>Python and Go Developer</span> at ZotaPay")
    createText("&emsp;(09.2020 - 05.2021)")
    createText("&emsp;Technologies: Python (Django), Go (Echo), Kafka, PostgreSQL, Docker")
    createText("<br>")

    createText("<span class='blue'>DevOps Engineer</span> at ZotaPay")
    createText("&emsp;(05.2021 - Present)")
    createText("&emsp;Technologies: AWS CLI, CloudForation, Kubernetes, Docker, GitHub Actions, Bash")

  }
  else if(value.toLowerCase() === "education"){
    trueValue(value);
    createText("<span class='blue'>Education</span>")
    createText("&emsp;<i class='fas fa-university'></i> Bachelor of Economy at University of National and World Economy")
    createText("<span class='blue'>Certificates</span>")
    createText("&emsp;<a href='https://softuni.bg/certificates/details/63823/44b049ff' target='_blank'><i class='fab fa-python white'></i> Python Fundamentals - Software University (softuni.bg)</a>")
    createText("&emsp;<a href='https://softuni.bg/certificates/details/66900/db4e872b' target='_blank'><i class='fab fa-python white'></i> Django Web Development - Software University (softuni.bg)</a>")
    createText("&emsp;<a href='https://softuni.bg/certificates/details/54839/b7d56f70' target='_blank'><i class='fab fa-python white'></i> Math Concepts for Developers - Software University (softuni.bg)</a>")
    createText("&emsp;<a href='https://softuni.bg/certificates/details/56992/7e4624e5' target='_blank'><i class='fab fa-python white'></i> Data Science - Software University (softuni.bg)</a>")
    createText("&emsp;<a href='https://softuni.bg/certificates/details/58495/e234cb92' target='_blank'><i class='fab fa-python white'></i> Machine Learning  - Software University (softuni.bg)</a>")
    createText("&emsp;<a href='https://softuni.bg/certificates/details/61428/ef24a131' target='_blank'><i class='fab fa-python white'></i> Deep Learning  - Software University (softuni.bg)</a>")
    createText("&emsp;<a href='https://www.coursera.org/account/accomplishments/certificate/B4XUL2BAJKCG' target='_blank'><i class='fab fa-aws white'></i> AWS Cloud Technical Essentials - Coursera</a>")
    createText("&emsp;<a href='https://www.coursera.org/account/accomplishments/verify/3CJV6WWZLD86' target='_blank'><i class='fab fa-aws white'></i> AWS Fundamentals: Addressing Security Risk - Coursera</a>")
    createText("&emsp;<a href='https://www.coursera.org/account/accomplishments/verify/DYZMBPZARF4B' target='_blank'><i class='fab fa-aws white'></i> Building Modern Python Applications on AWS - Coursera</a>")

  }
  

  else if(value.toLowerCase() === "contacts"){
    trueValue(value);
    createText("<a href='https://github.com/Ivan1994Petrov' target='_blank'><i class='fab fa-github white'></i> GitHub - https://github.com/Ivan1994Petrov</a>")
    createText("<a href='https://www.linkedin.com/in/ivan-hristov-petrov/' target='_blank'><i class='fab fa-linkedin-in white'></i> LinkedIn - https://www.linkedin.com/in/ivan-hristov-petrov/</a>")
    createText("<i class='fas fa-envelope-square'></i> dev.ivan.petrov@gmail.com")
    createText("<i class='fas fa-mobile-alt'></i> +359 883 501 202")
  }
  
  else if(value.toLowerCase() === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();