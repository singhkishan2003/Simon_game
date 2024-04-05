let gameSeq=[];
let userSeq=[];

let btns=["yellow","purple","green","red"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;

        levelup();
    }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randomindx=Math.floor(Math.random()*3);
    let randomcolor=btns[randomindx];
    let randombtn=document.querySelector(`.${randomcolor}`);
    
    gameSeq.push(randomcolor);
    console.log(gameSeq);
    btnflash(randombtn);
}

function checkans(indx){
    if(userSeq[indx] == gameSeq[indx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b><br> Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },100);
        reset();
    }
}

function btnpress(){
    let btn=this;
    userflash(btn);

    usercolor=btn.getAttribute("id");
    userSeq.push(usercolor);

    checkans(userSeq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}


function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}