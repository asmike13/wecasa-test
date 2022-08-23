import { ICartItem } from 'src/redux/reducers/cartSlice'

export interface ICartDetailProps {
	items: ICartItem[]
	onRemoveOne: (item: ICartItem) => void
	onAddOne: (item: ICartItem) => void
	onRemoveAll: (item: ICartItem) => void
}

const CartDetail = ({
	items,
	onRemoveOne,
	onAddOne,
	onRemoveAll,
}: ICartDetailProps) => {
	return (
		<div className='cart-detail'>
			{items.map((item) => (
				<div className='cart-detail-item' key={item.prestation.reference}>
					<span>
						{`${item.prestation.title} ${item.category.title}`}
					</span>
					<div className='cart-detail-item-update'>
						<button onClick={() => onRemoveOne(item)}>-1</button>
						{`x ${item.prestation.quantity}`}
						<button onClick={() => onAddOne(item)}>+1</button>
						<button onClick={() => onRemoveAll(item)}>Remove</button>
					</div>
				</div>
			))}
		</div>
	)
}

export default CartDetail
