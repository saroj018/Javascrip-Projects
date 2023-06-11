let btn = document.getElementById('btn')
let para = document.getElementById('para')


const changeColor = () => {
    let genColor = Math.floor(Math.random() * 999999)
    let colorName= document.body.style.background = '#' + genColor
    para.innerText = colorName
}


btn.addEventListener('click', changeColor)