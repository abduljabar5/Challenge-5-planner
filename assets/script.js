var today = document.querySelector("#currentDay")
var blueButtom = document.querySelectorAll(".saveBtn")   
var textArea = document.getElementById("textarea")
var textArea1 = document.getElementById("textarea1")
var lol = document.querySelector(".lol")
var time = document.querySelector(".numbertime").textContent
var time1 = document.querySelector(".numbertime1").textContent

var currentTime = dayjs().format(' H');


var num = Number(currentTime)
console.log(num);
//collum one
var timeNum = Number(time)
console.log(timeNum);
 if (num === timeNum){
    lol.textContent="lol"
    textArea.classList.add('present');
} else if(num < timeNum ){
    textArea.classList.add('future')
}
//collum two
var timeNum1 = Number(time1)
 if (num === timeNum1 ){
    lol.textContent="lol"
    textArea1.classList.add('present');
} else if(num < timeNum1){
    textArea1.classList.add('future')
} 


console.log(blueButtom);
//textArea.textContent="hi"
textArea.textContent = localStorage.getItem("checknow")
textArea1.textContent = localStorage.getItem("checknow1")
 
    var timerInterval = setInterval(function() {
       var correctDate = dayjs().format('dddd, MMMM D YYYY, h:mm:ss a');
        $(today).text(correctDate);
    
      }, 1000);

//textArea.innerHTML="hi"
 blueButtom.forEach(event => {
event.textContent = "no"

     event.addEventListener("click",function(){
    
    
    var input = document.getElementById('textarea').value;
    localStorage.setItem("checknow",input)
    var input1 = document.getElementById('textarea1').value;
    localStorage.setItem("checknow1",input1)

    console.log(input);
 });
    
 })
