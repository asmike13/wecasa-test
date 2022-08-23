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
		addItemToCart: (state: ICartState, action: { payload: { item: ICartItem } }) => {
			const { prestation, category } = action.payload.item
			const searchKey = `${prestation.reference}/${category.reference}`
			const existingItemIndex = state.items.map(({ key }) => key).indexOf(searchKey)

			if (existingItemIndex >= 0) {
				const quantity = state.items[existingItemIndex].prestation.quantity || 0
				state.items[existingItemIndex].prestation.quantity = quantity + 1
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
		removeItemFromCart: (state, action: { payload: { item: ICartItem, all?: boolean } }) => {
			const { prestation, category } = action.payload.item
			const searchKey = `${prestation.reference}/${category.reference}`
			const existingItemIndex = state.items.map(({ key }) => key).indexOf(searchKey)
			const quantity = state.items[existingItemIndex].prestation.quantity || 0

			if (action.payload.all || quantity <= 1) {
				state.items.splice(existingItemIndex, 1)
			} else {
				state.items[existingItemIndex].prestation.quantity = quantity - 1
			}
		},
	},
})
