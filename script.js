const convertButton = document.querySelector(".convert-button")
const selectCurrency = document.querySelector(".select-currency-convert-to")

function convertValues() {
    const inputValue = document.querySelector(".input-value").value
    const valueToConvert = document.querySelector(".value-to-convert")
    const valueConverted = document.querySelector(".value-converted")

    const dolarToday = 5.5
    const euroToday = 6.2

    if (selectCurrency.value == "dolar") {
        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolarToday)
    }

    if (selectCurrency.value == "euro") {
        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroToday)
    }

    valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)
}

function changeCurrency() {
    if (selectCurrency.value =="dolar") {
        const logoCurrencyTo = document.querySelector (".logo-currency-to")
        const currencyConverted = document.querySelector(".currency-converted")

        currencyConverted.innerHTML = "Dólar"
        logoCurrencyTo.src = ("./assets/dolar.png")
    }
    if (selectCurrency.value =="euro") {
        const logoCurrencyTo = document.querySelector (".logo-currency-to")
        const currencyConverted = document.querySelector(".currency-converted")

        currencyConverted.innerHTML = "Euro"
        logoCurrencyTo.src = ("./assets/euro.png")
    }

    convertValues()
}

selectCurrency.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)

