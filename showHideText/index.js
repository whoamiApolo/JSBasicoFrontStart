const serviceText = document.getElementById('serviceText')
const contactText = document.getElementById('contactText')
const infoText = document.getElementById('infoText')
hideOrShowTextDiv('service')

const items = Array.from(document.getElementsByClassName('item'))

items.forEach(item => {
    console.log(item)
     item.addEventListener("click", onItemClick) 
    
})

 function onItemClick(event) {
    const selectedAttribute = event.target.getAttribute('data')
    addOrRemoveActiveItem(selectedAttribute)
    hideOrShowTextDiv(selectedAttribute)
} 

function hideOrShowTextDiv(selectedAttribute) {
    hideTextElements()

    if(selectedAttribute === 'contact') {
        contactText.style.display = "block"
    }

    if(selectedAttribute == 'service') {
        serviceText.style.display = "block"
    }
    
    if(selectedAttribute == 'info') {
        infoText.style.display = "block"
    }
}

function addOrRemoveActiveItem(selectedAttribute) {
    items.forEach(item => {
        const itemAttribute = item.getAttribute('data')
        if(itemAttribute === selectedAttribute) {
            item.classList.add("active");
            return
        }

        item.classList.remove("active");
    });
}

function hideTextElements() {
    serviceText.style.display = "none"
    contactText.style.display = "none"
    infoText.style.display = "none"
}

