import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { universeSlice, IUniverseState } from 'src/redux/reducers/universeSlice'
import { cartSlice, ICartState } from './redux/reducers/cartSlice'

const reducer = combineReducers({
	universe: universeSlice.reducer,
	cart: cartSlice.reducer,
})

export interface IRootState {
	universe: IUniverseState,
	cart: ICartState,
}

export const store = configureStore({ reducer })
