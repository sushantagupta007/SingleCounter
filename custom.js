const btns = document.querySelectorAll('.btn');
const counter = document.querySelector('.counter'); 



let counter_number = 0;

const handleChange = (e) =>{
    if(e.currentTarget.classList.contains('btn-increment')){
        counter_number++; 
        
    } 
    else if(e.currentTarget.classList.contains('btn-decrease')){
        counter_number--;
        
    }
    else if(e.currentTarget.classList.contains('btn-reset')){
        counter_number=0;
    }
    if (counter_number > 0) {
        counter.style.color = "#4287f5";
        console.log("Hello")
      }
      if (counter_number < 0) {
        counter.style.color = "red";
        console.log("Hlw")
      }
      if (counter_number === 0) {
        counter.style.color = "#222";
      }
   
    counter.textContent=counter_number;
}

const handleClick = (element) =>{
    element.addEventListener('click',handleChange)
} 
         
        
btns.forEach(handleClick); 
    
// When we write call back functions, they donot accept any parameter as argumet. We
// have to just reference call back function. 
// In this case, we have to just refer the handleClick and hanleChange function. 
