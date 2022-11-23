var today = document.querySelector("#currentDay")
var blueButtom = document.querySelectorAll(".saveBtn")   
var textArea = document.getElementById("textarea")
var textArea1 = document.getElementById("textarea1")
var textArea2 = document.getElementById("textarea2")
var textArea3 = document.getElementById("textarea3")
var textArea4 = document.getElementById("textarea4")
var textArea5 = document.getElementById("textarea5")
var textArea6 = document.getElementById("textarea6")
var textArea7 = document.getElementById("textarea7")
var textArea8 = document.getElementById("textarea8")
var lol = document.querySelector(".lol")
var time = document.querySelector(".numbertime").textContent
var time1 = document.querySelector(".numbertime1").textContent
var time2 = document.querySelector(".numbertime2").textContent
var time3 = document.querySelector(".numbertime3").textContent
var time4 = document.querySelector(".numbertime4").textContent
var time5 = document.querySelector(".numbertime5").textContent
var time6 = document.querySelector(".numbertime6").textContent
var time7 = document.querySelector(".numbertime7").textContent
var time8 = document.querySelector(".numbertime8").textContent

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
//collum three
var timeNum2 = Number(time2)
 if (num === timeNum2 ){
    lol.textContent="lol"
    textArea2.classList.add('present');
} else if(num < timeNum2){
    textArea2.classList.add('future')
} 
//collum four
var timeNum3 = Number(time3)
 if (num === timeNum3 ){
    lol.textContent="lol"
    textArea3.classList.add('present');
} else if(num < timeNum3){
    textArea3.classList.add('future')
} 
//collum five
var timeNum4 = Number(time4)
 if (num === timeNum4 ){
    lol.textContent="lol"
    textArea4.classList.add('present');
} else if(num < timeNum4){
    textArea4.classList.add('future')
} 
//collum six
var timeNum5 = Number(time5)
 if (num === timeNum5 ){
    lol.textContent="lol"
    textArea5.classList.add('present');
} else if(num < timeNum5){
    textArea5.classList.add('future')
} 
//collum seven
var timeNum6 = Number(time6)
 if (num === timeNum6 +12 ){
    lol.textContent="lol"
    textArea6.classList.add('present');
} else if(num < timeNum6){
    textArea6.classList.add('future')
} 
//collum eight
var timeNum7 = Number(time7)
 if (num === timeNum7 + 12){
    lol.textContent="lol"
    textArea7.classList.add('present');
} else if(num < timeNum7){
    textArea7.classList.add('future')
} 
//collum nine
var timeNum8 = Number(time8)
 if (num === timeNum8 +12 ){
    lol.textContent="lol"
    textArea8.classList.add('present');
} else if(num < timeNum8 + 12){
    textArea8.classList.add('future')
} 


console.log(blueButtom);
//textArea.textContent="hi"
textArea.textContent = localStorage.getItem("checknow")
textArea1.textContent = localStorage.getItem("checknow1")
textArea2.textContent = localStorage.getItem("checknow2")
textArea3.textContent = localStorage.getItem("checknow3")
textArea4.textContent = localStorage.getItem("checknow4")
textArea5.textContent = localStorage.getItem("checknow5")
textArea6.textContent = localStorage.getItem("checknow6")
textArea7.textContent = localStorage.getItem("checknow7")
textArea8.textContent = localStorage.getItem("checknow8")
 
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
    //
    var input1 = document.getElementById('textarea1').value;
    localStorage.setItem("checknow1",input1)
    //
    var input2 = document.getElementById('textarea2').value;
    localStorage.setItem("checknow2",input2)
//
var input3 = document.getElementById('textarea3').value;
localStorage.setItem("checknow3",input3)
//
var input4 = document.getElementById('textarea4').value;
localStorage.setItem("checknow4",input4)
//
var input5 = document.getElementById('textarea5').value;
localStorage.setItem("checknow5",input5)
//
var input6 = document.getElementById('textarea6').value;
localStorage.setItem("checknow6",input6)
//
var input7 = document.getElementById('textarea7').value;
localStorage.setItem("checknow7",input7)
//
var input8 = document.getElementById('textarea8').value;
localStorage.setItem("checknow8",input8)



    console.log(input);
 });
    
 })
