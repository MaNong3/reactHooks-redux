import store from './store';
import { Provider } from 'react-redux';
import RouterView from "../router/map.tsx"
import { BrowserRouter as Router } from "react-router-dom"
function App() {
  return (
    <Provider store={store}>
      <Router>
        <RouterView />
      </Router>
    </Provider>
  );
}

export default App;
