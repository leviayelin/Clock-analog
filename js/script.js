// Selector section 
const secondHand = document.querySelector('.seconds-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');
const clockNumbers = document.querySelector('.clock-numbers');

// Function section
for(let i = 1; i <= 12;i++){
    const num = document.createElement('div');
    num.classList.add('numbers');
    num.style.setProperty('--i',i);
    num.textContent = i;
    clockNumbers.appendChild(num);
};

const setDate = () =>{
    const now = new Date();
    // Seconds 
    const seconds = now.getSeconds();
    const secondHandDeg = ((seconds/60)*360)+90;
    secondHand.style.transform = `rotate(${secondHandDeg}deg)`;
    // Minutes
    const minutes = now.getMinutes();
    const minutesHandDeg = ((minutes/60)*360)+90;
    minutesHand.style.transform = `rotate(${minutesHandDeg}deg)`;
    // Hours
    const hours = now.getHours();
    const hoursHandDeg = ((hours/12)*360)+90;
    hoursHand.style.transform = `rotate(${hoursHandDeg}deg)`;
};

setInterval(setDate,1000);
// setDate();