// basic event handling
const btn = document.getElementById("btn")
const p = document.getElementById("p")

btn.addEventListener("click", () => {
    p.textContent= "hello world"
})

// add a double click event listener to an image that toggles its visibility
const img = document.getElementById("img")
img.addEventListener("dblclick", () => {
    const visibility = img.style.visibility;
    if (visibility === "hidden") img.style.visibility = "visible"
    else img.style.visibility = "hidden"
})

// mouse events
img.addEventListener("mouseover", () => {
    img.style.backgroundColor = "red"
})
img.addEventListener("mouseout", () => {
    img.style.backgroundColor = "black"
})

// keyboard events
const input = document.getElementById("input")
input.addEventListener("keydown", (e) => {
    console.log(e.key)
})

input.addEventListener("keyup", () => {
    console.log(p.textContent)
})

// form events
// add a submit event listener to form and print the formdata to the console
const form = document.getElementById("form")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form)
    for (const [name, value] of formData.entries()) {
        console.log(`${name} - ${value}`)
    }
})

const select = document.getElementById("select")
select.addEventListener("change", (e) => {
    // e.target
    p.textContent = e.target.value
})

// event delegation
// add a click event listener to a list that logs the text content of the clicked list item using event delegation
const list = document.getElementById("list")
list.addEventListener("click", (e) => {
    if (e.target && e.target.nodeName === "LI") {
        console.log(e.target.textContent)
    }
})

// add an event listener to a parent element that listens for events from dynamically added child elements
const parent = document.getElementById("parent")
parent.addEventListener("click", (e) => {
    const newItem = document.createElement("li")
    if (e.target && e.target.nodeName === "LI") console.log(`New Item added ${parent.children.length + 1}`)
    parent.appendChild(newItem)
})

