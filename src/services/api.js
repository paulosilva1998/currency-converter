const API_URL = "https://api.exchangerate-api.com/v4/latest/";

export const fetchExchangeRates = async (baseCurrency) => {
    try {
        const response = await fetch(`${API_URL}${baseCurrency}`);
        if (!response.ok) throw new Error("Erro ao buscar taxas de câmbio");
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};