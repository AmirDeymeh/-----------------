const btnSingin=document.querySelector('.btn-singin');
const btnSingup=document.querySelector('.btn-singup');
const formBox=document.querySelector('.formBox');
const body=document.querySelector('body');
btnSingup.addEventListener('click',()=>{
    formBox.classList.add('activ');
    body.classList.add('activ');
});
btnSingin.addEventListener('click',()=>{
    formBox.classList.remove('activ');
    body .classList.remove('activ');
});

const container=document.querySelector('.container');
const passwordBtnF=document.getElementById('password-btn-f');
passwordBtnF.addEventListener('click',()=>{
    container.classList.add('pas');
});
const btnSabt=document.querySelectorAll('.btn-sabt');
function btnTaeid(){
    btnSabt.forEach(e=>{
        e.style.display='inline-block';
    })
    const btnTaeid=document.getElementById('btn-taeid');
    btnTaeid.style.display='none';
}
ssssbaz.addEventListener('click',()=>{
    container.classList.remove('pas');
});