let windowDisplay = document.querySelector(".calc-display")
console.log(windowDisplay)

let keys = document.querySelectorAll(".button")
console.log(keys)

let clear = document.querySelector(".clear")
console.log(clear)

let equal = document.querySelector(".equal")

for (let key of keys){
    key.addEventListener("click", function() {
        let newEl = document.createElement("div")
        let text = document.createTextNode(key.innerText)
        newEl.appendChild(text)
        windowDisplay.appendChild(newEl)
    })
}

clear.addEventListener("click", function(){
    windowDisplay.innerText = ""
})

equal.addEventListener("click", function(){
    windowDisplay.innerText = eval(windowDisplay.innerText)
})

