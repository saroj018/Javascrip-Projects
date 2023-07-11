let question=[
    {
        qn:'who is the first prime minister of nepal?',
        a:'KP Oli',
        b:'Sher Bdr Deuba',
        c:'Bhimshen Thapa',
        d:'Prachanda',
        ans:'c'
    },
    {
        qn:'What is the full Form Of WWW',
        a:'wolf wood wild',
        b:'world wibe world',
        c:'world wide word',
        d:'world wide web',
        ans:'d'
    },
    {
        qn:'Who is the father of computer?',
        a:'Saroj',
        b:'Charses Babbege',
        c:'Salman Khan',
        d:'KP oli',
        ans:'b'
    },
    {
        qn:'How Many District are in nepal?',
        a:'70',
        b:'80',
        c:'77',
        d:'75',
        ans:'c'
    }
]

let Qn=document.getElementById('qn')
let ansFirst=document.getElementById('ansFirst')
let ansSecond=document.getElementById('ansSecond')
let ansThird=document.getElementById('ansThird')
let ansFourth=document.getElementById('ansFourth')
let btn=document.getElementById('btn')
let i=0
let ans=0
let input=document.querySelectorAll('input')
let inpObj=Array.from(input)
let finalAns=[]


document.addEventListener('DOMContentLoaded',()=>{
    Qn.innerHTML=question[i].qn
    ansFirst.innerHTML=question[i].a
    ansSecond.innerHTML=question[i].b
    ansThird.innerHTML=question[i].c
    ansFourth.innerHTML=question[i].d

})

const changeQn=()=>{
    if(i<question.length-1)
{
        i++
    Qn.innerHTML=question[i].qn
    ansFirst.innerHTML=question[i].a
    ansSecond.innerHTML=question[i].b
    ansThird.innerHTML=question[i].c
    ansFourth.innerHTML=question[i].d

    inpObj.forEach((inpValue) => {
        if (inpValue.checked) {
            finalAns.push(inpValue.value)
            inpValue.checked = false;
        }
    });

    console.log(i);

    if(i===3)
    {
        for(let l=0;l<question.length;l++)
        {
            if(question[l].ans===finalAns[l])
            {
                ans++
            }
        }
        console.log(ans);
        
    }
   
}
}

btn.addEventListener('click',changeQn)