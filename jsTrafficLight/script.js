let redLight = document.getElementById("light--red")
let yellowLight = document.getElementById("light--yellow")
let greenLight = document.getElementById("light--green")


redLight.addEventListener('click', function () {
    redLight.classList.toggle('light--red')
    greenLight.classList.remove('light--green')
    yellowLight.classList.remove('light--yellow')
})

yellowLight.addEventListener('click', function () {
    yellowLight.classList.toggle('light--yellow')
    greenLight.classList.remove('light--green')
    redLight.classList.remove('light--red')
})

greenLight.addEventListener('click', function () {
    greenLight.classList.toggle('light--green')
    yellowLight.classList.remove('light--yellow')
    redLight.classList.remove('light--red')
})