var gameDealEl = document.getElementById("game-deal-project");
var weatherlEl = document.getElementById("weather-dash");
var workEl = document.getElementById("work-day");
var quizEl = document.getElementById("coding-quiz");
var passwordEl = document.getElementById("password");

gameDealEl.addEventListener("click", function(){
    window.open('https://siddysixsmith.github.io/Game-Deal-Compare/', '_blank');
    
})

weatherlEl.addEventListener("click", function(){
    window.open("https://siddysixsmith.github.io/Weather-Dashboard/", '_blank');
})

workEl.addEventListener("click", function(){
    window.open("https://siddysixsmith.github.io/Work-Day-Scheduler/", '_blank');
})

quizEl.addEventListener("click", function(){
    window.open("https://siddysixsmith.github.io/Coding-Quiz/", '_blank');
})

passwordEl.addEventListener("click", function(){
    window.open("https://siddysixsmith.github.io/password-generator/", '_blank');
})