const header=document.querySelector('.header-navbar');
const menu=document.querySelector('.menu');
window.addEventListener('scroll',()=>{
    let pos=window.scrollY;
    if(pos>107){
        header.classList.add('fix');
        menu.classList.add('activ')
    }else{
        header.classList.remove('fix');
        menu.classList.remove('activ');
    }

})


const btnMenu=document.querySelector('.btn-menu');
const menuMd=document.querySelector('.menu-md');
btnMenu.addEventListener('click',()=>{
    btnMenu.classList.toggle('activ');
    menuMd.classList.toggle('activ');
})

const t1=document.getElementById('t1');
const spanTab=document.querySelectorAll('.span-tab');
let inxt1=0;
let colorst1=['#e91212','#1227e9','#b712e9'];
setInterval(()=>{
    inxt1++;
    if(inxt1>spanTab.length-1){
        inxt1=0;
    }
    spanTab.forEach(e=>{
        e.classList.remove('activ')
    })
    spanTab[inxt1].classList.add('activ');
    t1.style.backgroundColor=colorst1[inxt1];
},2000);


const imgSliderT=document.querySelectorAll('.img-slider-t');
let inxst=0;
setInterval(()=>{
    inxst++;
    ifinxst();
    imgSliderT.forEach(e=>{
        e.classList.remove('activ');
    })
    imgSliderT[inxst].classList.add('activ');
},7000);
function nextSliderT(){
    inxst++;
    ifinxst();
    imgSliderT.forEach(e=>{
        e.classList.remove('activ');
    })
    imgSliderT[inxst].classList.add('activ');
}
function prevSliderT(){
    inxst--;
    ifinxst();
    imgSliderT.forEach(e=>{
        e.classList.remove('activ');
    })
    imgSliderT[inxst].classList.add('activ');
}
function ifinxst(){
    if(inxst>imgSliderT.length-1){
        inxst=0;
    }else if(inxst<0){
        inxst=imgSliderT.length-1
    }
}
function dotclick(e){
    ifinxst();
    imgSliderT.forEach(e=>{
        e.classList.remove('activ');
    })
    imgSliderT[e].classList.add('activ');
}


const timS=document.querySelectorAll('.tim.s');
const timD=document.querySelectorAll('.tim.d');
const timSAN=document.querySelectorAll('.tim.san');
let inxtS=45;
let inxtD=43;
let inxtSAN=6;
setInterval(()=>{
    inxtS--;
    if(inxtS==0){
        inxtS=59;
        inxtD--;
    }
    if(inxtD==0){
        inxtD=59
        inxtSAN--;
    }
    if(inxtSAN==0){
        inxtSAN=59
    }
    timS.forEach(e=>{
        e.innerHTML=inxtS+' : ';
    })
    timD.forEach(e=>{
        e.innerHTML=inxtD+' : ';
    })
    timSAN.forEach(e=>{
        e.innerHTML=inxtSAN;
    })
},1000);


const boxCardT=document.querySelectorAll('.box-card-t');
const btnNextPrevBoxKeshnext=document.querySelectorAll('.btn-next-prev-boxKesh');
let indico=0;
const body=document.querySelector('body');
function boxjdawdinext(){
    indico--;
    ifindico()
    boxCardT.forEach(e=>{
        e.style.transform=`translateX(${indico*350}px)`;
    })
    console.log(indico)
}
function boxjdawdiprev(){
    indico++;
    ifindico()
    boxCardT.forEach(e=>{
        e.style.transform=`translateX(${indico*350}px)`;
    })
    console.log(indico)
}
function ifindico(){
    if(indico==9){
        indico=0
    }else if(indico==-1){
        indico=8
    }
    if(indico>0){
        btnNextPrevBoxKeshnext.forEach(e=>{
            e.style.marginRight='0px';
        })
    }else{
        btnNextPrevBoxKeshnext.forEach(e=>{
            e.style.marginRight='7px';
        })
    }
}

const boxSliderTCard=document.querySelector('.box-slider-t-card');
let indxsliderCard=0;
function nextboxslidercard(){
    indxsliderCard--;
    ifindxssliderCard();
    boxSliderTCard.style.transform=`translateX(${indxsliderCard*50}%)`;
    console.log(indxsliderCard)
}
function prevboxslidercard(){
    indxsliderCard++;
    ifindxssliderCard();
    boxSliderTCard.style.transform=`translateX(${indxsliderCard*50}%)`;
    console.log(indxsliderCard)
}
function ifindxssliderCard(){
    if(indxsliderCard>4){
        indxsliderCard=0;
    }else if(indxsliderCard<0){
        indxsliderCard=4;
    }
}


 const cardSliderS=document.querySelectorAll('.card.slider.s ');
 let indexslidercardacriv=0;
 setInterval(e=>{
     indexslidercardacriv++;
     if(indexslidercardacriv==6){
        indexslidercardacriv=0;
    }
     cardSliderS.forEach(e=>{
         e.classList.remove('activ');
     });
     cardSliderS[indexslidercardacriv].classList.add('activ');
 },5000);

const cardSliderSd=document.querySelectorAll('.card.slider.s.d ');
let indexslidercardacrivd=0;
setInterval(e=>{
    indexslidercardacrivd++;
    if(indexslidercardacrivd==6){
       indexslidercardacrivd=0;
   }
    cardSliderSd.forEach(e=>{
        e.classList.remove('activ');
    });
    cardSliderSd[indexslidercardacrivd].classList.add('activ');
},5000)
