import './App.css';
import { Provider } from 'react-redux';
import { store } from 'src/store';

function App() {
	return (
		<div className="App">
			<Provider store={store}>
			</Provider>
		</div>
	);
}

export default App;
