import store from './store';
import Init from "../container/index"
import { Provider }from 'react-redux';

function App() {
  return (
    <Provider store={store}>
       <Init/>
    </Provider>
  );
}

export default App;
