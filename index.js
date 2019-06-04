let img = document.createElement("img");
let counter = document.getElementById("counter") 
let count =0
let lock =0
document.getElementById("myBtn").addEventListener("click", function () {

    let randomNum = Math.floor(Math.random() * 6) + 1;
    let dice = document.getElementById("dice")
    

    if (randomNum == 1) {
       // location.reload(true)
       img.id = "one";
       img.src = "/images/one.png"
       count = 0
       document.getElementById("winLose").innerHTML = "Loser"
    }
    if (randomNum == 2) {
        img.id = "two";
        img.src = "/images/two.png"
        count+=2
    }

    if (randomNum == 3) {
        img.id = "three";
        img.src = "/images/three.png"
        count+=3
    }

    if (randomNum == 4) {
        img.id = "four";
        img.src = "/images/four.png"
        count+=4
    }

    if (randomNum == 5) {
        img.id = "five";
        img.src = "/images/five.png"
        count+=5
    }

    if (randomNum == 6) {
        img.id = "six";
        img.src = "/images/six.png"
        count+=6
    }
 

    if (count>= 20 && lock==0){
        document.getElementById("winLose").innerHTML = "Winner"
        let winLose =document.getElementById("winLose")
       let reset = document.createElement("button")
       let resetText = document.createTextNode("Reset")
       reset.appendChild(resetText);
       winLose.appendChild(reset)
       reset.id = "reset"
  lock++
        
      
    }
    
    dice.appendChild(img);
   
    document.getElementById("counter").innerHTML = count

    document.getElementById("reset").addEventListener("click", function () {

        location.reload(true)
        
        })
  
})
   
document.getElementById("reset").addEventListener("click", function () {

location.reload(true)

})