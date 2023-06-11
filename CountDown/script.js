let endDate
let dateValue=document.getElementById('date-value')
let setDate=document.getElementById('end-date')
let btn=document.getElementById('btn')
let audio=document.getElementById('audio')
let todayDate=document.getElementById('today-date')
let timeOut

const timeFun=()=>{
  let currDate=new Date()
  Diff=endDate-currDate

  if(Diff<0)
  {
    clearInterval(timeOut)
    setDate.innerHTML='Time is Out'
    setDate.style.color='red'
    audio.play()
    return
  }

  let days=Math.floor(Diff/(1000*60*60*24))
  let hours=Math.floor((Diff%(1000*60*60*24))/(1000*60*60))
  let minutes=Math.floor((Diff%(1000*60*60))/(1000*60))
  let seconds=Math.floor((Diff%(1000*60))/(1000))

  document.getElementById('day').value=days
  document.getElementById('hour').value=hours
  document.getElementById('sec').value=seconds
  document.getElementById('min').value=minutes

}

btn.addEventListener('click',()=>{
  endDate=new Date(dateValue.value)
 timeOut= setInterval(timeFun,1000)
 setDate.innerHTML=endDate
})

todayDate.innerHTML=new Date().toLocaleDateString()