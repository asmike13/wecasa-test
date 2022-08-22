import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { universeSlice, IUniverseInitialState } from 'src/redux/slices/universeSlice'

const reducer = combineReducers({
	universe: universeSlice.reducer,
})

export interface IRootState {
	universe: IUniverseInitialState,
}

export const store = configureStore({ reducer })
