let input=document.getElementById('input')
let answer=document.getElementById('answer')
let clear=document.getElementById('clear')
let del=document.getElementById('del')


function getValue(btnValue)
{
    input.value+=btnValue.value
    console.log(typeof(input.value));
}

answer.addEventListener('click',()=>{
  let finalAns=  eval(input.value)
  input.value=finalAns
})

clear.addEventListener('click',()=>[
    input.value=''
])

del.addEventListener('click',()=>{
    input.value=input.value.slice(0,-1)
})