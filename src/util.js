export default {
    calculatedPercent(a, b, decimal) {
        return ((a / b) * 100).toFixed(decimal)
    },
    calculatedPercentString(a, b, decimal) {
        return ((a / b) * 100).toFixed(decimal) + '%'
    },
}
