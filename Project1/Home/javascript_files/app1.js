const usInput = document.getElementById("usinput");
const usButton = document.getElementById("usbutton");
const usEuro = document.getElementById("usdtoeur");

usButton.addEventListener("click", () => {
    const convertus = +usInput.value / 1.05;
    usEuro.innerText = `${usInput.value} US DOLLARS is equal to ${convertus.toFixed(2)} EURO`;
    usInput.value = "";

})
