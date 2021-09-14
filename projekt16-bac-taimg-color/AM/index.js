const mosdot=document.querySelector('.mos');
const container=document.querySelector('.container');
const ivideo=document.querySelector('.i-video');
document.addEventListener('mousemove',(e)=>{
    mosdot.style.left=e.pageX+'px';
    mosdot.style.top=e.pageY+'px';
})
mosdot.addEventListener('click',()=>{
    container.classList.toggle('activ');
})
ivideo.addEventListener('click',()=>{
    container.classList.toggle('video');
    container.classList.remove('activ');
})

const containerAlert=document.querySelector('.container-alert');
function btnadameh(){
    containerAlert.classList.remove('activ');
}