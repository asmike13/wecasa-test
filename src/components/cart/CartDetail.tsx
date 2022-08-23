import { ICartItem } from 'src/redux/reducers/cartSlice'

const CartDetail = ({
	items,
}: { items: ICartItem[] }) => {
	return (
		<div className='cart-detail'>
			{items.map((item) => (
				<div>
					{`${item.prestation.title} ${item.category.title} x ${item.prestation.quantity}`}
				</div>
			))}
		</div>
	)
}

export default CartDetail
