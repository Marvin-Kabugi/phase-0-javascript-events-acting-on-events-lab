
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = '#FF69B4';

function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if(left >= 0){
        dodger.style.left = `${left - 1}px`
    }
}

function moveDodgerRight(){
    const pix = dodger.style.left.replace("px", "");
    const right = parseInt(pix, 10);
    if (right <= 360){
        dodger.style.left = `${right + 1}px`
    }
}

document.addEventListener('keydown', (e) => {
    if(e.code === "ArrowLeft"){
        moveDodgerLeft();
    }
    else if (e.code === "ArrowRight"){
        moveDodgerRight();
    }
});