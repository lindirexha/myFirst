const swInput = document.getElementById("swinput");
const swButton = document.getElementById("swbutton");
const francEuro = document.getElementById("franctoeur");

swButton.addEventListener("click", () => {
    const convertSw = +swInput.value * 1.01755;
    francEuro.innerText = `${swInput.value} Swiss Franc is equal to ${convertSw.toFixed(2)} EURO`;
    swInput.value = "";

})

