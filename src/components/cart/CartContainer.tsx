import React from 'react'
import { useSelector } from 'react-redux'
import { priceFormat, timeFormat } from 'src/helpers'
import { ICartItem } from 'src/redux/reducers/cartSlice'
import { IRootState } from 'src/store'
import Cart from './Cart'

const CartContainer = () => {
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

	React.useEffect(() => {
		setHeight(`${document.querySelector('.cart')?.clientHeight || 0}px`)
	}, [items.length, showDetail])

	const propsToPass = {
		items: items as ICartItem[],
		totalTime: totals.totalTime ? timeFormat(totals.totalTime) : '',
		totalPrice: totals.totalPrice ? priceFormat(totals.totalPrice) : '',
		height,
		showDetail,
		setShowDetail,
	}

	return <Cart {...propsToPass} />
}

export default CartContainer
