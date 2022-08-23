import { createSlice } from '@reduxjs/toolkit'

export interface ICartItem {
	prestation: {
		reference: string
		title: string
		duration: number
		price: number
	}
	category: {
		reference: string
		title: string
	}
}

export interface ICartState {
	items: ICartItem[]
	error?: any
}

const initialState: ICartState = {
	items: [],
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItemToCart: (state: ICartState, action: { payload: ICartItem }) => {
			state.items.push(action.payload)
		},
		removeItemFromCart: () => {

		},
	},
})
