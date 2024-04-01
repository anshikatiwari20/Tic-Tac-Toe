let boxes=document.querySelectorAll(".box");
let replay=document.querySelector("#btn");
let startnewgame=document.querySelector("#new-btn");
let winmsg =document.querySelector(".win-msg");
let msg=document.querySelector("#msg");

let turn=true;

const winner=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

const restart=()=>{
    turn=true;
    enabledBoxes();
    winmsg.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn){
            box.innerHTML="O";
            turn=false;
        }
        else{
            box.innerHTML="X";
            turn =true;
        }
        box.disabled=true;
        checkWinner();

    });
});

const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";

    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations! Winner is ${winner}`;
    winmsg.classList.remove("hide");
    disabledBoxes();

}

const checkWinner=()=>{
    for(i of winner){
        let pos1Val=boxes[i[0]].innerHTML;
        let pos2Val=boxes[i[1]].innerHTML;
        let pos3Val=boxes[i[2]].innerHTML;

        if(pos1Val!="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val===pos2Val&&pos2Val===pos3Val){
                showWinner(pos1Val);
            }
        }
    }
};

startnewgame.addEventListener("click",restart);
replay.addEventListener("click",restart);

