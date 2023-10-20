console.log('Bank Marketing');

const header = document.querySelector('.header');
console.log(header)

const allSections = document.querySelectorAll('.section');
console.log(allSections);

const allButtons = document.getElementsByTagName('button');
console.log(allButtons);


// Creating and Inserting
const message =document.createElement('div');
message.classList.add('cookie-message');

message.innerHTML = 'We use cookie for improved functionality and analytics. <button class="btn btn--close-cookie">Got It!</button>'

//Prepend insert in the first child element of header.
header.prepend(message);
//apppend insert in the last child element of header.
// header.append(message);


// Deleting elements
document.querySelector('.btn--close-cookie').addEventListener('click',function(){
    message.remove()
})

//Styles

message.style.backgroundColor ='#373838d';

document.documentElement.style.setProperty('--color-primary','orangered');


// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.src);
console.log(logo.alt);

//classes
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');


// Smooth Scrolling

const scrollBtnTo = document.querySelector('.btn--scroll-to');
console.log(scrollBtnTo);

const section1 = document.querySelector('#section--1');

scrollBtnTo.addEventListener('click',function(e){
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords);

    // console.log(e.target.getBoundingClientRect())

    // console.log(window.pageXOffset,window.pageYOffset);

    // console.log('height/width,viewport',document.documentElement.clientHeight,document.documentElement.clientWidth);

    //Scrolling
    // window.scrollTo({left:s1coords.left + window.pageXOffset, top:s1coords.top + window.pageYOffset, behavior:'smooth'})

    //OR

    section1.scrollIntoView({behavior:'smooth'})

})

// More Event Handlers

const h1 = document.querySelector('h1');

const alertH1=(e)=>{
    alert('Now You are reading heading')
}
h1.addEventListener('mouseenter',alertH1)

setTimeout(()=>
    h1.removeEventListener('mouseenter',alertH1),3000);


// Event Propagation in practise

//rgb(0-250);

const randomInt = (min,max)=>
   Math.floor(Math.random()*(max - min + 1) +min)

const randomColor =()=>`rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;
console.log(randomColor());


const nav = document.querySelector('.nav');
const navLinks = document.querySelector('.nav__links');
const navLink = document.querySelector('.nav__link');

// document.querySelector('.nav__link').addEventListener('click',function(e){
//     e.preventDefault();
//     this.style.backgroundColor= randomColor();
//     console.log('link')
// })

navLink.addEventListener('click',function(e){
    e.preventDefault();
    navLink.style.backgroundColor=randomColor();
})
navLinks.addEventListener('click',function(e){
    e.preventDefault();
    navLinks.style.backgroundColor=randomColor();
})
nav.addEventListener('click',function(e){
    e.preventDefault();
    nav.style.backgroundColor=randomColor();
})

//Page Navigation : Smooth scrolling on each nav item.

// document.querySelectorAll('.nav__link').forEach(function(el){
//     el.addEventListener('click',function(e){
//         e.preventDefault();
//         const id = this.getAttribute('href');
//         console.log(id)

//         document.querySelector(id).scrollIntoView({behavior:'smooth'})

//     })
// })

// Above method for pagination is not best method=> so we use event delegation.

//1.Add event listener to common parent element
//2.Determine what element has originated by event.

navLinks.addEventListener('click',function(e){
    e.preventDefault();
    
    // Matching strategy
    if(e.target.classList.contains('nav__link')){
        const id = e.target.getAttribute('href');
        console.log(id)

        document.querySelector(id).scrollIntoView({behavior:'smooth'})
    }
})

// Operations tapped
const tabContainer= document.querySelector('.operations__tab-container')
const tab = document.querySelectorAll('.operations__tab');
const tabContent = document.querySelectorAll('.operations__content')

tabContainer.addEventListener('click',function(e){
    e.preventDefault();

    const clicked = e.target.closest('.operations__tab');
    console.log(clicked);

    

    if(!clicked) return;

    // // remove active
    tab.forEach((t)=>t.classList.remove('operations__tab--active'));
    tabContent.forEach((t)=>t.classList.remove('operations__content--active'));

    console.log(clicked.dataset.tab)
    // // Activating tab    
     // //Activating Content
     clicked.classList.add('operations__tab--active');
    document.querySelector(`.operations__content--${clicked.dataset.tab}`)
  .classList.add('operations__content--active')

    
})

// Menu faded animation

const handleHover =function(e){
    if(e.target.classList.contains('nav__link')){
        const link = e.target;
        const siblings = link.closest('.nav').querySelectorAll('.nav__link');
        const logo = link.closest('.nav').querySelector('img');

        siblings.forEach(el=>{
            if(el !== link) el.style.opacity = this;
        })
        logo.style.opacity =this;
    }
}

//Passing an argument
nav.addEventListener('mouseover',handleHover.bind(0.5));
nav.addEventListener('mouseout',handleHover.bind(1));

// nav.addEventListener('mouseover',function(e){
//     if(e.target.classList.contains('nav__link')){
//         const link = e.target;
//         const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//         const logo = link.closest('.nav').querySelector('img');

//         siblings.forEach(el=>{
//             if(el !== link) el.style.opacity = 0.5
//         })
//         logo.style.opacity =0.5;
//     }

// })
// nav.addEventListener('mouseout',function(e){
//     if(e.target.classList.contains('nav__link')){
//         const link = e.target;
//         const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//         const logo = link.closest('.nav').querySelector('img');

//         siblings.forEach(el=>{
//             if(el !== link) el.style.opacity = 1;
//         })
//         logo.style.opacity =1;
//     }

    
// })

// Sticky Navigation

// const initialCoords = section1.getBoundingClientRect();

// console.log(initialCoords);

// window.addEventListener('scroll',function(e){
//     console.log(this.window.scrollY);

//     if(this.window.scrollY > initialCoords.top){
//         nav.classList.add('sticky')
//     }
//     else{
//         nav.classList.remove('sticky')
//     }
// })

// Using  intersection observer for sticky Navigation

// const obsCallback=(entries1, observer1)=>{
//     entries1.forEach(entry=>console.log(entry))

// }
// object1 ={
//     root:null,
//     threshold:0.1
// }


// const observer = new IntersectionObserver(obsCallback,object1);
// observer.observe(section1);
const sticky =(entries)=>{
    // const navHeight = nav.getBoundingClientRect().height;
    // console.log(navHeight);
    const [entry ]= entries;
    // console.log(entry);

    if(!entry.isIntersecting){
        nav.classList.add('sticky')
    }else{
        nav.classList.remove('sticky')
    }
}


const headerObserver = new IntersectionObserver(sticky,{
    root:null,
    threshold:0,
    rootMargin:`-${nav.getBoundingClientRect().height}px`,
})
headerObserver.observe(header)


// Revealing the sections

const sectionCallback =(entries,observer)=>{
    const [entry] = entries;
    // console.log(entry)

    if(!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(sectionCallback,{
    root:null,
    threshold:0.15,
})
allSections.forEach(section=>{
    // console.log(section)
    sectionObserver.observe(section);
    // section.classList.add('section--hidden');
})


// Lazy Loading 
const image = document.querySelectorAll('img[data-src]');


const loadImage =(entries,observer)=>{
    const [entry ] = entries;
    // console.log(entry)

    if(!entry.isIntersecting) return;

    // Repalace image src to datasrc

    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener('load',function(){
        entry.target.classList.remove('lazy-img')
        observer.unobserve(entry.target)
    })

}

const imgObserver = new IntersectionObserver(loadImage,{
    root:null,
    threshold:0,
    
})
image.forEach(img=>imgObserver.observe(img));


/// Slide image 

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
console.log(btnRight)

// slider.style.overflow = 'visible';
// slider.style.transform = 'scale(0.2) translateX(-300px)';

let curSlide= 0;
const maxSlide = slides.length;
console.log(maxSlide)

const gotoSlide =(slide)=>{
    slides.forEach((s,i)=>{        
        s.style.transform = `translateX(${100 * (i- slide)}%)`

    
    })
}
gotoSlide(0);

const nextSlide=()=>{
    if (curSlide === maxSlide - 1){
        curSlide=0;
    }else{
        curSlide++;
    }
    gotoSlide(curSlide);
}
const prevSlide =()=>{
    if (curSlide === 0){
        curSlide = maxSlide -1
    }else{
        curSlide--;
    }
    gotoSlide(curSlide);
}



btnRight.addEventListener('click',nextSlide)
btnLeft.addEventListener('click',prevSlide)

// Next slide
// const rightSlide = ()=>{slides.forEach((slide,i)=>{
//     if(curSlide === maxSlide){
//         curSlide = 0;
//     }else{
//         curSlide++;
//     }
//     slide.style.transform = `translateX(${100 * ( i - curSlide)}%)`          
//  })
// }
// btnRight.addEventListener('click',rightSlide);



