const previousElement = document.getElementById('previous')
const nextElement = document.getElementById('next')
const sliderElement = document.getElementById('slider')
let interval = undefined;
let timeout = undefined

previousElement.addEventListener('click', onPreviousClick)
nextElement.addEventListener('click', onNextClick)

autoScroll()

function onPreviousClick() {
    const sliderWidth = sliderElement.offsetWidth
    sliderElement.scrollLeft -= sliderWidth
    handleSliderClick()
}

function onNextClick() {
    const sliderWidth = sliderElement.offsetWidth
    sliderElement.scrollLeft += sliderWidth
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

function autoScroll() {
    if(interval) return
    let i = 0
        interval = setInterval(() => {
            console.log('-->', i)
            ++i
        const sliderWidth = sliderElement.offsetWidth
        const numberOfImages = sliderElement.childElementCount
        const selectedImage = (sliderElement.scrollLeft/sliderWidth) + 1
        
        if(numberOfImages === selectedImage) {
            sliderElement.scrollLeft = 0
            return
        }

        sliderElement.scrollLeft += sliderWidth
    }, 5000);
}