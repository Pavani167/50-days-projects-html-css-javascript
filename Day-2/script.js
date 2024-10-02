const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circle = document.querySelectorAll('.circle');

let currActiv = 1;

next.addEventListener('click', () => {
    currActiv++;
    if (currActiv > circle.length) {
        currActiv = circle.length;
    }
    update(); // Call update here
});

prev.addEventListener('click', () => {
    currActiv--;
    if (currActiv < 1) {
        currActiv = 1;
    }
    update();
});

function update() {
    circle.forEach((cir, idx) => {
        if (idx < currActiv) {
            cir.classList.add('active');
        } else {
            cir.classList.remove('active');
        }
    });

    // Update progress bar width
    const activeCircles = document.querySelectorAll('.active');
    progress.style.width = ((activeCircles.length - 1) / (circle.length - 1)) * 100 + '%';
    if(currActiv==1){
        prev.disabled = true;
    }
    else if(currActiv==circle.length){
        next.disabled =true;
    }
    else{
        prev.disabled=false;
        next.disabled =false;
    }
}
