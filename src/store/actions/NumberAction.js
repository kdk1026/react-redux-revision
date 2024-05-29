function increaseNumber(dispatch) {
    dispatch({ type: 'PLUS' });
}

function decreaseNumber(dispatch) {
    dispatch({ type: 'MINUS' });
}

export const numberAction = { increaseNumber, decreaseNumber };