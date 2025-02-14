import React, { useState } from "react";
import CurrencyConverter from "./components/CurrencyConverter";
import ConversionHistory from "./components/ConversionHistory";

const App = () => {
  const [history, setHistory] = useState([]);

  const updateHistory = (conversion) => {
    setHistory([conversion, ...history]);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      <div className="w-full max-w-4xl p-8 bg-gray-800 rounded-lg shadow-lg space-y-8">
        <h1 className="text-4xl font-bold text-white text-center">Conversor de Moedas</h1>

        {/* Caixa de conversão e histórico lado a lado */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CurrencyConverter updateHistory={updateHistory} />
          <ConversionHistory history={history} />
        </div>
      </div>
    </div>
  );
};

export default App;