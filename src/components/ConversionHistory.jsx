import React from "react";

const ConversionHistory = ({ history }) => {
    return (
        <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Histórico</h2>
            <ul className="space-y-2 max-h-60 overflow-y-auto">
                {history.length === 0 ? (
                    <p className="text-gray-400">Nenhuma conversão realizada.</p>
                ) : (
                    history.map((entry, index) => (
                        <li key={index} className="text-white bg-gray-600 p-3 rounded-lg text-center">
                            {entry}
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default ConversionHistory;