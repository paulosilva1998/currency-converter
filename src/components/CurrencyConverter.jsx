import React, { useState } from "react";

const CurrencyConverter = ({ updateHistory }) => {
    const [amount, setAmount] = useState("");
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("BRL");
    const [result, setResult] = useState(null);

    const exchangeRates = {
        USD: { BRL: 5.2, EUR: 0.85 },
        BRL: { USD: 0.19, EUR: 0.16 },
        EUR: { USD: 1.18, BRL: 6.3 },
    };

    const convertCurrency = () => {
        if (!amount || isNaN(amount)) return;

        const rate = exchangeRates[fromCurrency]?.[toCurrency];
        if (rate) {
            const convertedAmount = (amount * rate).toFixed(2);
            setResult(convertedAmount);
            updateHistory(`${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`);
        } else {
            setResult("Taxa não disponível");
        }
    };

    return (
        <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Conversão</h2>

            <div className="space-y-4">
                <input
                    type="number"
                    placeholder="Valor"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full text-lg p-3 rounded-lg bg-gray-600 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <div className="grid grid-cols-2 gap-4">
                    <select
                        value={fromCurrency}
                        onChange={(e) => setFromCurrency(e.target.value)}
                        className="w-full text-lg p-3 rounded-lg bg-gray-600 text-white border border-gray-500"
                    >
                        <option>USD</option>
                        <option>BRL</option>
                        <option>EUR</option>
                    </select>

                    <select
                        value={toCurrency}
                        onChange={(e) => setToCurrency(e.target.value)}
                        className="w-full text-lg p-3 rounded-lg bg-gray-600 text-white border border-gray-500"
                    >
                        <option>USD</option>
                        <option>BRL</option>
                        <option>EUR</option>
                    </select>
                </div>

                <button
                    onClick={convertCurrency}
                    className="w-full mt-4 p-3 text-lg font-bold bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Converter
                </button>
            </div>

            {result !== null && (
                <p className="text-lg text-white text-center mt-4">
                    Resultado: <span className="font-bold text-green-400">{result}</span>
                </p>
            )}
        </div>
    );
};

export default CurrencyConverter;