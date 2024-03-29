
let lvl = 0;
let clickCounter = 0;
let checkTime = true;
let checkClicked = true;

function changePos(){
    const btn = document.getElementById("clickme-btn");

    checkTime = true;
    btn.style.marginTop = Math.random() * 600 + "px";
    btn.style.marginLeft = Math.random() * 600 + "px";
    
}

function btnClick(){
    clickCounter++;
    
    const clickSpan = document.getElementById("clickCounter");
    clickSpan.innerHTML = "Clicked Counter: " + clickCounter;

    const levelSpan = document.getElementById("level");
    levelSpan.innerHTML = "level: " + (lvl + 1);

    changePos();
    checkClicked = false;
    if(clickCounter == 3){
        alert("You are winner, you can go next level " + (++lvl + 1));
        clickCounter = 0;
        
        clickSpan.innerHTML = "Clicked Counter: " + clickCounter;
        levelSpan.innerHTML = "level: " + (lvl + 1);
    }
}

function startTime(){
    checkClicked = true;   
    if(checkTime){
        let time = 500 - lvl * 100;
        console.log(time);
        checkTime = false;
        setTimeout(() => {
            if(checkClicked){
                changePos();
            }
        }, time);
    }

}