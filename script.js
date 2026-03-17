const convertButton = document.querySelector(".convert-button")
const currencyConvertTo = document.querySelector(".select-currency-convert-to")
const currencyConvertFrom = document.querySelector(".select-currency-convert-from")

function convertValues() {
    const inputValue = document.querySelector(".input-value").value
    const valueToConvert = document.querySelector(".value-to-convert")
    const valueConverted = document.querySelector(".value-converted")

    const dolarToday = 5.23
    const euroToday = 6.02
    const libraToday = 6.97
    const bitcoinToday = 380.000

        let rateFrom = 1

        if (currencyConvertFrom.value === "dolar") {
            rateFrom = dolarToday
        }

        if (currencyConvertFrom.value === "euro") {
            rateFrom = euroToday
        }

        if (currencyConvertFrom.value === "libra") {
            rateFrom = libraToday
        }

        if (currencyConvertFrom.value === "bitcoin") {
            rateFrom = bitcoinToday
        }

        const valueInReal = inputValue * rateFrom

        if (currencyConvertTo.value == "dolar" ) {
            valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(valueInReal / dolarToday)
        }

        if (currencyConvertTo.value == "euro") {
            valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(valueInReal / euroToday)
        }

        if (currencyConvertTo.value == "libra") {
            valueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(valueInReal / libraToday)
        }

        if (currencyConvertTo.value == "bitcoin") {
            valueConverted.innerHTML = (valueInReal / bitcoinToday).toFixed(3) + " BTC"
        }

        if (currencyConvertTo.value == "real") {
        valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)
        }

    if (currencyConvertFrom.value == "dolar" ) {
            valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputValue)
        }

        if (currencyConvertFrom.value == "euro") {
            valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputValue)
        }

        if (currencyConvertFrom.value == "libra") {
            valueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputValue)
        }

        if (currencyConvertFrom.value == "bitcoin") {
            valueToConvert.innerHTML = (inputValue).toFixed(3) + " BTC"
        }

        if (currencyConvertFrom.value == "real") {
        valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)
    }
}

function changeCurrencyFrom() {
            if (currencyConvertFrom.value == "real") {
                const logoCurrencyTo = document.querySelector(".logo-currency-from")
                const currencyToConvert = document.querySelector(".currency-to-convert")

                currencyToConvert.innerHTML = "Real"
                logoCurrencyTo.src = ("./assets/real.png")
            }

            if (currencyConvertFrom.value == "dolar") {
                const logoCurrencyTo = document.querySelector(".logo-currency-from")
                const currencyToConvert = document.querySelector(".currency-to-convert")

                currencyToConvert.innerHTML = "Dólar"
                logoCurrencyTo.src = ("./assets/dolar.png")
            }

            if (currencyConvertFrom.value == "euro") {
                const logoCurrencyTo = document.querySelector(".logo-currency-from")
                const currencyToConvert = document.querySelector(".currency-to-convert")

                currencyToConvert.innerHTML = "Euro"
                logoCurrencyTo.src = ("./assets/euro.png")
            }

            if (currencyConvertFrom.value == "libra") {
                const logoCurrencyTo = document.querySelector(".logo-currency-from")
                const currencyToConvert = document.querySelector(".currency-to-convert")

                currencyToConvert.innerHTML = "Libra"
                logoCurrencyTo.src = ("./assets/libra.png")
            }

            if (currencyConvertFrom.value == "bitcoin") {
                const logoCurrencyTo = document.querySelector(".logo-currency-from")
                const currencyToConvert = document.querySelector(".currency-to-convert")

                currencyToConvert.innerHTML = "Bitcoin"
                logoCurrencyTo.src = ("./assets/bitcoin.png")
            }

            convertValues()
        }

        function changeCurrencyTo() {
            if (currencyConvertTo.value == "real") {
                const logoCurrencyTo = document.querySelector(".logo-currency-to")
                const currencyConverted = document.querySelector(".currency-converted")

                currencyConverted.innerHTML = "Real"
                logoCurrencyTo.src = ("./assets/real.png")
            }

            if (currencyConvertTo.value == "dolar") {
                const logoCurrencyTo = document.querySelector(".logo-currency-to")
                const currencyConverted = document.querySelector(".currency-converted")

                currencyConverted.innerHTML = "Dólar"
                logoCurrencyTo.src = ("./assets/dolar.png")
            }

            if (currencyConvertTo.value == "euro") {
                const logoCurrencyTo = document.querySelector(".logo-currency-to")
                const currencyConverted = document.querySelector(".currency-converted")

                currencyConverted.innerHTML = "Euro"
                logoCurrencyTo.src = ("./assets/euro.png")
            }

            if (currencyConvertTo.value == "libra") {
                const logoCurrencyTo = document.querySelector(".logo-currency-to")
                const currencyConverted = document.querySelector(".currency-converted")

                currencyConverted.innerHTML = "Libra"
                logoCurrencyTo.src = ("./assets/libra.png")
            }

            if (currencyConvertTo.value == "bitcoin") {
                const logoCurrencyTo = document.querySelector(".logo-currency-to")
                const currencyConverted = document.querySelector(".currency-converted")

                currencyConverted.innerHTML = "Bitcoin"
                logoCurrencyTo.src = ("./assets/bitcoin.png")
            }

            convertValues()
        }

currencyConvertTo.addEventListener("change", changeCurrencyTo)
currencyConvertFrom.addEventListener("change", changeCurrencyFrom)
convertButton.addEventListener("click", convertValues)





    


    
