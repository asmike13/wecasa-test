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

	const totals = React.useMemo(() => items.reduce((prev, curr) => ({
		totalTime: prev.totalTime + curr.prestation.duration * (curr.prestation.quantity || 0),
		totalPrice: prev.totalPrice + curr.prestation.price * (curr.prestation.quantity || 0),
	}), {
		totalTime: 0,
		totalPrice: 0,
	}), [items])

	const hasItems = items.length > 0

	const onRemoveOne = React.useCallback((item: ICartItem) => {
		dispatch(cartSlice.actions.removeItemFromCart({ item }))
	}, [dispatch])
	const onAddOne = React.useCallback((item: ICartItem) => {
		dispatch(cartSlice.actions.addItemToCart({ item }))
	}, [dispatch])
	const onRemoveAll = React.useCallback((item: ICartItem) => {
		dispatch(cartSlice.actions.removeItemFromCart({ item, all: true }))
	}, [dispatch])

	React.useEffect(() => {
		setHeight(`${document.querySelector('.cart')?.clientHeight || 0}px`)

		if (!hasItems) {
			setShowDetail(false)
		}
	}, [items.length, showDetail, hasItems])

	const props = React.useMemo(() => ({
		height,
		showDetail,
		setShowDetail,
	}), [height, showDetail])

	const cartResumeProps = React.useMemo(() => ({
		hasItems,
		totalTime: totals.totalTime ? timeFormat(totals.totalTime) : '',
		totalPrice: totals.totalPrice ? priceFormat(totals.totalPrice) : '',
	}), [hasItems, totals])

	const cartDetailProps = React.useMemo(() => ({
		items: items as ICartItem[],
		onRemoveOne,
		onAddOne,
		onRemoveAll,
	}), [items, onAddOne, onRemoveAll, onRemoveOne])

	return React.useMemo(() => <Cart {...props} cartResumeProps={cartResumeProps} cartDetailProps={cartDetailProps} />, [cartDetailProps, cartResumeProps, props])
}

export default CartContainer
