const previousElement = document.getElementById('previous')
const nextElement = document.getElementById('next')
const sliderElement = document.getElementById('slider')

previousElement.addEventListener('click', onPreviousClick)
nextElement.addEventListener('click', onNextClick)

function onPreviousClick() {
    const sliderWidth = sliderElement.offsetWidth
    sliderElement.scrollLeft -= sliderWidth
}

function onNextClick() {
    const sliderWidth = sliderElement.offsetWidth
    sliderElement.scrollLeft += sliderWidth
}