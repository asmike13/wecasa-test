import { Provider } from 'react-redux'
import { store } from 'src/store'

export const StoreWrapper = (props: any) => {
	return (
		<Provider store={store}>
			{props.children}
		</Provider>
	)
}
