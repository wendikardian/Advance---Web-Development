

function changeImage(element){
    element.setAttribute('src', 'img/img-header2.png')
}
function changeImageBack(element){
    element.setAttribute('src', 'img/img-header.png')
}

function changeText(element){
    element.innerHTML = "Pengembangan Website dan Game"
}

function changeTextBack(element){
    element.innerHTML = "Dapatkan Tips programming Disini !"
}

var myList = document.getElementsByTagName("li");
// console.log(myList);
var i;
for(i = 0; i<myList.length; i++){
    var span = document.createElement("span");
    span.innerHTML = "x"
    myList[i].appendChild(span).setAttribute("class", "close")
}

var close = document.getElementsByClassName("close")
var i;
for(i=0; i<close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }
}

function newElement(){
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    if(inputValue === '' || inputValue === ' '){
        alert("Data tidak boleh kosong")
    }else{
        document.getElementById("myUL").appendChild(li).setAttribute("class", "search-tags-item")
        li.innerHTML = inputValue
    }
    document.getElementById("myInput").value = "";
    var span = document.createElement("span");
    span.innerHTML = "x"
    li.appendChild(span).setAttribute("class", "close");
    for(i = 0; i<close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none"
        }
    }
}


var slides = document.querySelectorAll('.slide');
var buttons = document.querySelectorAll('.slider-btn')
let currentSlide = 1

var manualNav = function(manual){
    slides.forEach(function(slide) {
        slide.classList.remove('active');
        buttons.forEach(btn => {
            btn.classList.remove('active')
        });
    });
    slides[manual].classList.add('active');
    buttons[manual].classList.add('active');
}

buttons.forEach(function(btn, i) {
    btn.addEventListener('click', function(){
        manualNav(i);
        currentSlide = i;
    })
})


var repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i=1;
    var repeater = function(){
        setTimeout(function() {
            [...active].forEach(function(activeSlide) {
                activeSlide.classList.remove('active')
            });

            slides[i].classList.add('active')
            buttons[i].classList.add('active')
            i++;
            if(slides.length == i){
                i = 0
            }
            if(i>= slides.length){
                return
            }
            repeater();
        }, 5000)
    }
    repeater()
}

repeat()


var codingProjects = document.querySelectorAll('.project');
codingProjects.forEach((project, index) => {
    project.dataset.aos = 'zoom-out-right';
    project.dataset.aosDuration = 1500;
    project.dataset.aosDelay = index*300;
})
var codingProjectsDetails = document.querySelectorAll('.project-detail');
codingProjectsDetails.forEach((project, index) => {
    project.dataset.aos = 'fade-down';
    project.dataset.aosDuration = 1500;
    project.dataset.aosDelay = index*300;
})
var skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach((skill, index) => {
    skill.dataset.aos = 'fade-down';
    skill.dataset.aosDuration = 1500;
    skill.dataset.aosDelay = index*300;
})
var activityItems = document.querySelectorAll('.activity-item');
activityItems.forEach((activity, index) => {
    activity.dataset.aos = 'fade-down';
    activity.dataset.aosDuration = 1500;
    activity.dataset.aosDelay = index*300;
})
var itemVideo = document.querySelectorAll('.item-video');
itemVideo.forEach((video, index) => {
    video.dataset.aos = 'fade-down';
    video.dataset.aosDuration = 1500;
    video.dataset.aosDelay = index*300;
})
AOS.init({
    once: true
});


var btnSubmit = document.querySelector('.submit');
var modal = document.querySelector('.modal-container');

if(btnSubmit){
    btnSubmit.addEventListener('click', function() {
        modal.classList.add('show');
        const next = document.querySelector('.next');
        next.setAttribute('value', 'https://webblogadvance.netlify.app/contact.html')
    })
}

var splash = document.querySelector(".splash")
if(splash){
    document.addEventListener('DOMContentLoaded', function(event){
        setTimeout(function() {
            splash.style.display = "none"
        }, 3000)
    })
}

var animate = document.querySelector('.astronaut-takeoff')
if(animate){
    document.addEventListener('DOMContentLoaded', function(event){
        setTimeout(function() {
            animate.classList.add('animation')
        }, 400)
    })
}

var splashText = document.querySelector('.splash-text')

if(splashText){
    setTimeout(function() {
        splashText.innerHTML = "Come in !"
    }, 2000)
}