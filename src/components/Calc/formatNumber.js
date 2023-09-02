export function formatNumber(num) {
    if (Number.isInteger(num)) {
        return num.toString();
    } else {
        return num.toFixed(2);
    }
}