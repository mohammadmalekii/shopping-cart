export function formatCurrency(number) {
    return Number(number.toFixed(1)).toLocaleString() + " تومان";
};