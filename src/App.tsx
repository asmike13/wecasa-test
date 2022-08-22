import './App.css';
import ListContainer from 'src/components/ListContainer';
import { Provider } from 'react-redux';
import { store } from 'src/store';

function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<ListContainer />
			</Provider>
		</div>
	);
}

export default App;
