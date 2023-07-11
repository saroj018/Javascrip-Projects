// this is tic tac toe game which is built on pure javascript

let box=document.querySelectorAll('.box')
let area=['','','','','','','','','']
let o_text='O'
let x_text='X'
let currentPlayer=o_text
let winBox=[]
let turn=document.getElementById('turn')
let drawPoint=0
let btn=document.getElementById('btn')


box.forEach((box)=>{
    box.addEventListener('click',(e)=>{
        if(winBox.length===3){
            return
        }
        
        
        id=e.target.id
        if(!area[id]){
            area[id]=currentPlayer
            box.innerHTML=currentPlayer
            if(winAction(currentPlayer)){
                drawPoint+=15
                turn.innerHTML=`${currentPlayer} is won`
            }
            currentPlayer=(currentPlayer===o_text)?x_text:o_text
            if(winBox.length<3)
            {
                turn.innerHTML=`it's ${currentPlayer} turn`
            }
           
        }
        drawPoint+=1
        if(drawPoint===9){
            turn.innerHTML=`it's Draw`
        }
    })
})

let winMoves=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [4,1,7],
    [4,3,5],
    [4,6,2],
    [8,2,5],
    [8,6,7]
]

function winAction(cPlayer){
    for(let i=0;i<winMoves.length;i++){
     let checkWin = winMoves[i].every((element)=>area[element]===cPlayer)

     if(checkWin){
         winBox=winMoves[i]
         console.log(winBox);
         winColor()
         return true
     }
    }

}

function winColor(){
    winBox.forEach((ele)=>{
        box[ele].style.background='green'
        box[ele].style.color='white'
    })
}

btn.addEventListener('click',()=>{
    drawPoint=0
    turn.innerHTML=''
    box.forEach((element)=>{
        element.innerHTML=''
    })

    for(let m=0;m<area.length;m++){
        area[m]=''
    }

    winBox.forEach((ele)=>{
        box[ele].style.background='white'
        box[ele].style.color='black'
    })
    console.log(winBox);
    

   winBox=[]
   console.log(winBox);
})

