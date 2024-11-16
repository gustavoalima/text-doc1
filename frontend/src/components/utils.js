// utils.js
export const getUnit = (fieldLabel) => {
    const unitMapping = {
        'Peso (kg)': ' kg',
        'Altura (cm)': ' cm',
        // outras unidades
    };
    return unitMapping[fieldLabel] || '';
};

export const getDifferenceSign = (difference) => {
    if (difference > 0) return ' ↑'; // Aumento
    if (difference < 0) return ' ↓'; // Diminuição
    return ''; // Sem diferença
};
