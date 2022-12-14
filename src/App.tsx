import './App.css';
import { Provider } from 'react-redux';
import { store } from 'src/store';
import CartContainer from './components/cart/CartContainer';
import ListContainer from './components/list/ListContainer';

function App() {
	return (
		<div className="App">
			<h1>Wecasa Test</h1>
			<Provider store={store}>
				<ListContainer />
				<CartContainer />
			</Provider>
		</div>
	);
}

export default App;
