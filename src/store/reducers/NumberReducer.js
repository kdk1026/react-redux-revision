const initialState = {
    number: 1
};

function numberReducer(state = initialState, action) {
    switch (action.type) {
        case 'PLUS':
            return {
                ...state,
                number: state.number + 1
            }
        case 'MINUS':
            return {
                ...state,
                number: state.number - 1
            }
        case 'AMOUNT':
            return {
                ...state,
                number: state.number + Number(action.payload)
            }
    
        default:
            return state;
    }
}

export default numberReducer;