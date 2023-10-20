

const modal = document.querySelector('.modal');
const overlay =document.querySelector('.overlay')
const closeModal =document.querySelector('.close-modal');
const showModal =document.querySelectorAll('.show-modal');
console.log(showModal);

for(let i = 0; i<showModal.length;i++){
    showModal[i].addEventListener('click',function(){
        console.log('Button clicked')
        alert('Hello')
    })  
}