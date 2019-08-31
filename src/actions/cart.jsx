export function addItem({itemId, amount}) {
    return {
        type: 'ADD_ITEM',
        payload: {
            itemId,
            amount
        }
    }
}