import React from "react";

const CurrencySelector = ({ label, currency, setCurrency, currencies }) => {
    return (
        <div className="flex flex-col">
            <label className="text-white">{label}</label>
            <select
                className="p-2 rounded bg-gray-800 text-white"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
            >
                {currencies.map((curr) => (
                    <option key={curr} value={curr}>
                        {curr}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CurrencySelector;