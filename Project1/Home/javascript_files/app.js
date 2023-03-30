const allInput = document.getElementById("allinput");
const allButton = document.getElementById("allbutton");
const lekEuro = document.getElementById("lektoeur");

allButton.addEventListener("click", () => {
    const convertAll = +allInput.value / 114;
    lekEuro.innerText = `${allInput.value} ALBANIAN LEK is equal to ${convertAll.toFixed(2)} EURO`;
    allInput.value = "";

})

