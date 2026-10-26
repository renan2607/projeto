let list = document.querySelectorAll('.container');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let count = list.length;
let active = 0;
next.onclick = () => {
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');

    active = active >= count -1 ? 0 : active + 1;
    list[active].classList.add('active');
}
prev.onclick = () => {
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');
    
    active = active <= 0 ? count - 1 : active - 1;
    list[active].classList.add('active');
}
console.log(prev, next);