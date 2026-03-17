const convertButton = document.querySelector(".convert-button")
const currencyConvertTo = document.querySelector(".select-currency-convert-to")
const currencyConvertFrom = document.querySelector(".select-currency-convert-from")
const inputValue = document.querySelector(".input-value")
const valueToConvert = document.querySelector(".value-to-convert")
const valueConverted = document.querySelector(".value-converted")

const rates = {
    real: 1,
    dolar: 5.23,
    euro: 6.02,
    libra: 6.97
}

const formats = {
    real: "pt-BR",
    dolar: "en-US",
    euro: "de-DE",
    libra: "en-GB"
}

const currencyNames = {
    real: "Real",
    dolar: "Dólar",
    euro: "Euro",
    libra: "Libra"
}

function formatCurrency(value, currency) {
    return new Intl.NumberFormat(formats[currency], {
        style: "currency",
        currency: currency === "real" ? "BRL" :
                  currency === "dolar" ? "USD" :
                  currency === "euro" ? "EUR" : "GBP"
    }).format(value)
}

function convertValues() {
    const value = Number(inputValue.value)

    const fromRate = rates[currencyConvertFrom.value]
    const toRate = rates[currencyConvertTo.value]

    const valueInReal = value * fromRate
    const convertedValue = valueInReal / toRate

    valueToConvert.innerHTML = formatCurrency(value, currencyConvertFrom.value)
    valueConverted.innerHTML = formatCurrency(convertedValue, currencyConvertTo.value)
}

function changeCurrencyFrom() {
    const logo = document.querySelector(".logo-currency-from")
    const currencyText = document.querySelector(".currency-to-convert")

    currencyText.innerHTML = currencyNames[currencyConvertFrom.value]
    logo.src = `assets/${currencyConvertFrom.value}.png`

    convertValues()
}

function changeCurrencyTo() {
    const logo = document.querySelector(".logo-currency-to")
    const currencyText = document.querySelector(".currency-converted")

    currencyText.innerHTML = currencyNames[currencyConvertTo.value]
    logo.src = `assets/${currencyConvertTo.value}.png`

    convertValues()
}

currencyConvertTo.addEventListener("change", changeCurrencyTo)
currencyConvertFrom.addEventListener("change", changeCurrencyFrom)
convertButton.addEventListener("click", convertValues)
