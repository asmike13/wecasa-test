import { useDispatch, useSelector } from 'react-redux'
import { cartSlice, ICartItem } from 'src/redux/reducers/cartSlice'
import { IRootState } from 'src/store'
import CartDetail from './CartDetail'

const CartDetailContainer = () => {
	const dispatch = useDispatch()

	const { items } = useSelector((store: IRootState) => store.cart)

	const onRemoveOne = (item: ICartItem) => {
		dispatch(cartSlice.actions.removeItemFromCart({ item }))
	}
	const onAddOne = (item: ICartItem) => {
		dispatch(cartSlice.actions.addItemToCart({ item }))
	}
	const onRemoveAll = (item: ICartItem) => {
		dispatch(cartSlice.actions.removeItemFromCart({ item, all: true }))
	}

	const propsToPass = {
		items,
		onRemoveOne,
		onAddOne,
		onRemoveAll,
	}

	return <CartDetail {...propsToPass} />
}

export default CartDetailContainer
