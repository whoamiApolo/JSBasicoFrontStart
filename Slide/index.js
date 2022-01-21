const previousElement = document.getElementById('previous')
const nextElement = document.getElementById('next')
const sliderElement = document.getElementById('slider')
let interval = undefined;
let timeout = undefined
let selectedImgIndex = 0

previousElement.addEventListener('click', onPreviousClick)
nextElement.addEventListener('click', onNextClick)

autoScroll()

function onPreviousClick() {
    const sliderWidth = sliderElement.offsetWidth
    sliderElement.scrollLeft -= sliderWidth
    --selectedImgIndex
    handleActiveDot()
    handleSliderClick()
}

function onNextClick() {
    const sliderWidth = sliderElement.offsetWidth
    sliderElement.scrollLeft += sliderWidth
    ++selectedImgIndex
    handleActiveDot()
    handleSliderClick()
}

function handleSliderClick() {
    clearTimeout(timeout)
    clearInterval(interval);
    interval = undefined
    timeout = setTimeout(() => {
        autoScroll()
    }, 20000);
}

function handleActiveDot() {
    const list = Array.from(document.getElementsByClassName('dot'))
    
    if(selectedImgIndex < 0 ) selectedImgIndex = 0
    if(selectedImgIndex >= list.length) selectedImgIndex = list.length - 1

    list.forEach(element => element.classList.remove('active'));
    list[selectedImgIndex].classList.add('active')
}

function autoScroll() {
    if (interval) return
    interval = setInterval(() => {

        const sliderWidth = sliderElement.offsetWidth
        const numberOfImages = sliderElement.childElementCount
        const selectedImage = (sliderElement.scrollLeft / sliderWidth) + 1

        if (numberOfImages === selectedImage) {
            sliderElement.scrollLeft = 0
            selectedImgIndex = 0
            handleActiveDot()
            return
        }

        sliderElement.scrollLeft += sliderWidth
        ++selectedImgIndex
        handleActiveDot()
    }, 5000);
}