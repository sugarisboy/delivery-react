export function getStatusText(status) {
    switch (status) {
        case 0:
            return 'Waiting for payment'
        case 1:
            return 'Paid'
        case 2:
            return 'In work'
        case 3:
            return 'Delivery'
        case 10:
            return 'Done'
        case 11:
            return 'Canceled by user'
        case 12:
            return 'Canceled by shop'
        case 13:
        case 14:
        case 15:
            return 'Canceled'
        default:
            return 'Processing'
    }
}