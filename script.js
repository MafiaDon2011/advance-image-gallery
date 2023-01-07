const imgs = document.querySelectorAll('.slider-container img')
const back = document.getElementById('back')
const forward = document.getElementById('forward')
const name = document.querySelector('.name')
const content = document.querySelector('.content')

let activeIndex = 0

function Slide(idx) {
    imgs.forEach((img) => {
      img.style.clipPath = "ellipse(0 0 at 0% 0%)";
      img.style.opacity = "0";
    });
    imgs[idx].style.opacity = "100%";
    imgs[idx].style.clipPath = "ellipse(750px 750px at 0% 0%)";
}

back.onclick = () => {
    if (activeIndex !== 0) {
        activeIndex = activeIndex - 1
        Slide(activeIndex)
    } else {
        console.log('back else')
    }
}

forward.onclick = () => {
    if(imgs.length - 1 > activeIndex) {
        activeIndex = activeIndex + 1
        Slide(activeIndex)
    } else {
        console.log('forward else')
    }
}