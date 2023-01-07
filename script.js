const imgs = document.querySelectorAll('.slider-container img')
const back = document.getElementById('back')
const forward = document.getElementById('forward')
const name = document.querySelector('.name')
const content = document.querySelector('.content')
const nextImg = document.getElementById("next-img")

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
        // next img src
        nextImg.src = imgs[activeIndex + 1].src
    } else {
        activeIndex = imgs.length - 1
        Slide(activeIndex)
        nextImg.src = imgs[0].src
    }
}

forward.onclick = () => {
    if(imgs.length - 1 > activeIndex) {
        activeIndex = activeIndex + 1
        Slide(activeIndex)
        nextImg.src = imgs[activeIndex - 1].src
    } else {
        activeIndex = 0
        Slide(activeIndex)
        nextImg.src = imgs[imgs.length - 1].src
    }
}