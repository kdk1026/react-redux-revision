import Left1 from './components/Left1';
import './style.css';
import Right1 from './components/Right1';
import { legacy_createStore as createStore} from 'redux';
import { Provider, useSelector, useDispatch, connect } from 'react-redux';

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

function App() {
  return (
    <div id="container">
      <h1>Root</h1>
      <div id="grid">
        <Provider store={store}>
          <Left1 />
          <Right1 />
        </Provider>
      </div>
    </div>
  );
}

export default App;
