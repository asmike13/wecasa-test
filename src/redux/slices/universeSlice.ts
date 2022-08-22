import { createSlice } from '@reduxjs/toolkit'
import { IUniverseList } from 'src/apis/universeApi'
import { fetchUniverse } from 'src/redux/thunks/universeThunk'

export interface IUniverseInitialState {
	list?: IUniverseList
	status: 'idle' | 'fulfilled' | 'pending' | 'rejected'
	error?: any
}

const initialState: IUniverseInitialState = {
	status: 'idle',
}

export const universeSlice = createSlice({
	name: 'universe',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUniverse.pending, (state) => {
				state.status = 'pending'
			})
			.addCase(fetchUniverse.rejected, (state, action) => {
				state.status = 'rejected'
			})
			.addCase(fetchUniverse.fulfilled, (state, action) => {
				state.list = action.payload
				state.status = 'fulfilled'
			})
	},
})
