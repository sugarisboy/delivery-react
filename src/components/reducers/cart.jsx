export function reduce(prevState, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...prevState,
                amount: prevState.amount + 1

            }
        case 'REMOVE_ITEM':
            return {
                ...prevState
            }
        default:
            return prevState
    }
}