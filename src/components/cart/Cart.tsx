import { ICartItem } from 'src/redux/reducers/cartSlice'

import './styles.scss'

interface ICartProps {
	items: ICartItem[]
	totalTime: string
	totalPrice: string
	height: string
	showDetail: boolean
	setShowDetail: (show: boolean) => void
}

const Cart = ({
	items, // display details
	totalTime,
	totalPrice,
	height,
	showDetail,
	setShowDetail,
}: ICartProps) => {
	return (
		<>
			<div className='cart-margin' style={{ height }} />
			<div className='cart' style={{ height: showDetail ? '50vh' : 'auto' }}>
				{items.length === 0
					? 'Panier vide'
					: <>
						<span>Panier :</span>
						<ul>
							<li>{`Prix total : ${totalPrice}`}</li>
							<li>{`Durée totale : ${totalTime}`}</li>
						</ul>
						<button onClick={() => setShowDetail(!showDetail)}>Détail</button>
					</>
				}
			</div >
		</>
	)
}

export default Cart
