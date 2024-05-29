function increaseNumber(dispatch) {
    dispatch({ type: 'PLUS' });
}

function decreaseNumber(dispatch) {
    dispatch({ type: 'MINUS' });
}

function incrementByAmount(dispatch, amount) {
    dispatch({ type: 'AMOUNT', payload: amount });
}

export const numberAction = { increaseNumber, decreaseNumber, incrementByAmount };