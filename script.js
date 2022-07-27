const clock = document.querySelector(".clock")





const updateClock = ()=>{

const time = new Date()
const hours = time.getHours()
const minutes = time.getMinutes()
const seconds = time.getSeconds()

clock.innerHTML=`
<span>${hours}</span> :
<span>${minutes}</span> :
<span>${seconds}</span>
`
}

setInterval(()=>{
    updateClock()
},1000)