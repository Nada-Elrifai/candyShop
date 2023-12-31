import AppNavigator from './src/navigation/AppNavigator';
import { Provider } from 'react-redux'
import {store} from './store'

export default function App() {
  return (
    <Provider store={store}>

      <AppNavigator/>
    </Provider>
  );
}


