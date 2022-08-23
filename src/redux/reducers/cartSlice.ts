import { createSlice } from '@reduxjs/toolkit'

export interface ICartItem {
	key?: string
	prestation: {
		reference: string
		title: string
		duration: number
		price: number
		quantity?: number
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
			const { prestation, category } = action.payload
			const searchKey = `${prestation.reference}/${category.reference}`
			const existingItemIndex = state.items.map(({ key }) => key).indexOf(searchKey)

			if (existingItemIndex >= 0) {
				state.items[existingItemIndex].prestation.quantity = (state.items[existingItemIndex].prestation.quantity || 0) + 1
			} else {
				state.items.push({
					key: searchKey,
					category,
					prestation: {
						...prestation,
						quantity: 1,
					},
				})
			}
		},
		removeItemFromCart: () => {

		},
	},
})
