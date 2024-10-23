let hrs = document.getElementById("hrs");
let min = document.getElementById("min");

setInterval(()=>{
    let currentTime = new Date();
    hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
},1000)

const projectsElements = {
    1: {
        title: 'caca',
        competence1: 'images/1.png',
        competence2: 'images/1.png',
        competence3: 'images/1.png',
        competence4: 'images/1.png',
        description : 'caca2',
        icon: 'images/1.png',
        backgroundImage: 'images/1.png',
        imageSlider1: '',
        imageSlider2: '',
        imageSlider3: ''
    },
    2: {
        title: 'pipi',
        competence1: 'images/1.png',
        competence2: 'images/1.png',
        competence3: 'images/1.png',
        description : 'caca2',
        icon: 'images/2.png',
        backgroundImage: 'images/2.png',
        imageSlider1: '',
        imageSlider2: '',
        imageSlider3: ''
    },
    3: {
        title: 'prout',
        description : 'prout2',
        icon: 'images/3.png',
        backgroundImage: 'images/3.png',
        competence1: 'images/1.png'
    }
};

let currentSlide = 1;
const retexTitle = document.querySelector("#projectTitle h1");
const projectCompetences = document.getElementById("projectCompetences");
const retexDescription = document.querySelector("#projectDescription");
const body = document.body;
let wrapper = document.getElementById("slideWrapper");

for (let x = 1; x <= Object.keys(projectsElements).length; x++){
    let div = document.createElement('div');
    let img = document.createElement('img');
    div.className = 'slide';
    div.appendChild(img);
    img.src = projectsElements[x].icon;
    wrapper.appendChild(div);
}

function moveNext(){
    let slide = document.querySelectorAll(".slide");
    wrapper.appendChild(slide[0]);
    currentSlide ++;
    if (currentSlide > Object.keys(projectsElements).length){
        currentSlide = 1;
    }
}

function movePrev(){
    let slide = document.querySelectorAll(".slide");
    wrapper.prepend(slide[slide.length -1]);
    currentSlide = currentSlide -1;
    if (currentSlide < 1){
        currentSlide = Object.keys(projectsElements).length;
    }
}

window.addEventListener("wheel", function(event){
    if (event.deltaY > 0){
        moveNext();
    } else {
        movePrev();
    }
    retexTitle.innerHTML = projectsElements[currentSlide].title;
    retexDescription.innerHTML = projectsElements[currentSlide].description;
    body.style.backgroundImage = `url('${projectsElements[currentSlide].backgroundImage}')`;
    getCurrentCompetences();
})

function getCurrentCompetences(){  
    projectCompetences.innerHTML = "";
    
    const project = projectsElements[currentSlide];

    for (let i = 1; i <= 4; i++) {
        let competence = project[`competence${i}`];
        console.log(competence);
        
        if (competence) {
            let competenceDiv = document.createElement('div');
            competenceDiv.className = 'competence';
            competenceDiv.style.backgroundImage = `url('${competence}')`;
            projectCompetences.appendChild(competenceDiv);
        }
    }
}