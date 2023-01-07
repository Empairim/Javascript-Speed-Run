const textAreaEl = document.getElementById("textarea")
const totalCountEl = document.getElementById("total-counter")
const remainingCountEl = document.getElementById("remaining-counter")

textAreaEl.addEventListener("keyup", () => {
    updateCounter()
})       /*1st paramater is the event handler*/

updateCounter()

function updateCounter() {
    totalCountEl.innerText = textAreaEl.value.length
    remainingCountEl.innerText = textAreaEl.getAttribute("maxLength") - textAreaEl.value.length
}

/* you tell the getAttribute function what you want it to nab*/