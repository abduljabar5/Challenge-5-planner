var today = document.querySelector("#currentDay")
var blueButtom = document.querySelectorAll(".saveBtn")   
var textArea = document.getElementById("textarea")
console.log(blueButtom);
//textArea.textContent="hi"
textArea.textContent = localStorage.getItem("checknow")
    var timerInterval = setInterval(function() {
        today.textContent=moment().format('MMMM Do YYYY, h:mm:ss a');
    
      }, 1000);

//textArea.innerHTML="hi"
 blueButtom.forEach(event => {
event.textContent = "save"

     event.addEventListener("click",function(){
    
    
    var input = document.getElementById('textarea').value;
    localStorage.setItem("checknow",input)
    console.log(input);
 });
    
 })
