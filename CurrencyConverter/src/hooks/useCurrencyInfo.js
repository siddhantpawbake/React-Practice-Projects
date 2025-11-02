import {useEffect, useState} from "react"

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        // Fetch latest rates for the requested base currency
        // ensure we request the correct base by interpolating `currency`.
        fetch(`https://v6.exchangerate-api.com/v6/79a823796003f283066a9856/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => {
            // API returns rates under `conversion_rates` — store the object safely
            setData(res.conversion_rates || {})
        })
        .catch(() => {
            setData({})
        })
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;