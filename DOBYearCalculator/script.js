let btn = document.getElementById('btn')
let outYear = document.getElementById('out-year')
let outMonth = document.getElementById('out-month')
let outDay = document.getElementById('out-day')
let alertText=document.getElementById('alert')

const calculateYear = () => {
    let selectDate = document.getElementById('select-date').value
    let dateFormat = new Date(selectDate)
    let currDate = new Date()
    let Diff = currDate - dateFormat

    let days = Math.floor(Diff / (1000 * 60 * 60 * 24))
    let originalDays=days%30
    let years = Math.floor(days / 365)
    let months = Math.floor((days % 365) / 30)

    
    
    if (selectDate == '') {
        
        alertText.innerHTML = 'Please Select Date First!!!!'
        alertText.style.color = 'red'

        outDay.value = '0'
        outYear.value = '0'
        outMonth.value = '0'
    }
    else {
        outDay.value = originalDays
        outYear.value = years
        outMonth.value = months
        
        alertText.innerHTML = ''
        
    }
    
    if(Diff<0)
    {
        alertText.innerHTML = 'Please Enter Valid Date!!!!'
        alertText.style.color = 'red'

        outDay.value = '0'
        outYear.value = '0'
        outMonth.value = '0'
    }

}

btn.addEventListener('click', calculateYear)