console.log(1);
const ukInput = document.getElementById("ukinput");
const ukButton = document.getElementById("ukbutton");
const poundEuro = document.getElementById("poundtoeur");

ukButton.addEventListener("click", () => {
    const convertUK = +ukInput.value * 1.14;
    poundEuro.innerText = `${ukInput.value} UK POUND is equal to ${convertUK.toFixed(2)} EURO`;
    ukInput.value = "";

})