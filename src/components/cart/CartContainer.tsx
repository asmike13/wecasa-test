import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { priceFormat, timeFormat } from 'src/helpers/helpers'
import { cartSlice, ICartItem } from 'src/redux/reducers/cartSlice'
import { IRootState } from 'src/store'
import Cart from './Cart'

const CartContainer = () => {
	const dispatch = useDispatch()

	const { items } = useSelector((store: IRootState) => store.cart)
	const [height, setHeight] = React.useState('0px')
	const [showDetail, setShowDetail] = React.useState(false)

	const totals = items.reduce((prev, curr) => ({
		totalTime: prev.totalTime + curr.prestation.duration * (curr.prestation.quantity || 0),
		totalPrice: prev.totalPrice + curr.prestation.price * (curr.prestation.quantity || 0),
	}), {
		totalTime: 0,
		totalPrice: 0,
	})

	const hasItems = items.length > 0

	const onRemoveOne = (item: ICartItem) => {
		dispatch(cartSlice.actions.removeItemFromCart({ item }))
	}
	const onAddOne = (item: ICartItem) => {
		dispatch(cartSlice.actions.addItemToCart({ item }))
	}
	const onRemoveAll = (item: ICartItem) => {
		dispatch(cartSlice.actions.removeItemFromCart({ item, all: true }))
	}

	React.useEffect(() => {
		setHeight(`${document.querySelector('.cart')?.clientHeight || 0}px`)

		if (!hasItems) {
			setShowDetail(false)
		}
	}, [items.length, showDetail, hasItems])

	const props = {
		height,
		showDetail,
		setShowDetail,
	}

	const cartResumeProps = {
		hasItems,
		totalTime: totals.totalTime ? timeFormat(totals.totalTime) : '',
		totalPrice: totals.totalPrice ? priceFormat(totals.totalPrice) : '',
	}

	const cartDetailProps = {
		items: items as ICartItem[],
		onRemoveOne,
		onAddOne,
		onRemoveAll,
	}

	return <Cart {...props} cartResumeProps={cartResumeProps} cartDetailProps={cartDetailProps} />
}

export default CartContainer
