import { legacy_createStore as createStore} from 'redux';

function reducer(currentState, action) {
    if ( currentState === undefined ) {
      return {
        number: 1
      }
    }
  
    const newState = {...currentState};
  
    if ( action.type === 'PLUS' ) {
      newState.number++;
    }
  
    return newState;
}
  
const store = createStore(reducer);

export default store;