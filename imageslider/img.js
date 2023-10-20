console.log("This is image slider");

const rightBtn= document.querySelector(".slider__btn--right");
const leftBtn= document.querySelector(".slider__btn--left");
const slides =document.querySelectorAll(".slide");

// rightBtn.addEventListener("click",increase);

let curSlide=0; 
let maxSlide= slides.length;
console.log(maxSlide)

const goToSlide =(slide)=>{
    slides.forEach((s,i)=>{        
        s.style.transform= `translateX(${100*(i - slide)}%)`
    })
}
goToSlide(0);

const increase =()=>{
    
    if(curSlide === maxSlide - 1){
        curSlide=0;
    }else{
        curSlide++;
    }
    goToSlide(curSlide);

}

const decrease=()=>{
    if(curSlide === 0){
        curSlide = maxSlide - 1;
    }
    else{
        curSlide--;
    }
    goToSlide(curSlide);
}
rightBtn.addEventListener("click",increase);
leftBtn.addEventListener("click",decrease);
   



