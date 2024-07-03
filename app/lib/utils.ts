export const formatCurrency = (amount: number) => {
    return (amount / 100).toLocaleString('en-US', {
        style: 'currency',
        currency: 'NGN',
    });
};

export function getLabels(timeFrame: string) {
    switch (timeFrame) {
        case '24H':
            return ['00:00', '06:00', '12:00', '18:00', '24:00'];
        case '1W':
            return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        case '1M':
            return ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
        case '1Y':
            return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        case 'ALL':
            return ['2018', '2019', '2020', '2021', '2022', '2023'];
        default:
            return [];
    }
}

export function getPortfolioData(timeFrame: string) {
    switch (timeFrame) {
        case '24H':
            return [65, 59, 80, 81, 56];
        case '1W':
            return [65, 59, 80, 81, 56, 55, 40];
        case '1M':
            return [65, 59, 80, 81];
        case '1Y':
            return [65, 59, 80, 81, 56, 55, 40, 70, 80, 90, 100, 110];
        case 'ALL':
            return [65, 59, 80, 81, 56, 55];
        default:
            return [];
    }
}