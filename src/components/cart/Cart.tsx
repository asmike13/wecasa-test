import { ICartItem } from 'src/redux/reducers/cartSlice'
import CartDetailContainer from './CartDetailContainer'

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
	items,
	totalTime,
	totalPrice,
	height,
	showDetail,
	setShowDetail,
}: ICartProps) => {
	return (
		<>
			<div className='cart-margin' style={{ height }} />
			<div className='cart'>
				{items.length === 0
					? 'Panier vide'
					: <>
						<span>Panier :</span>
						<ul>
							<li>{`Prix total : ${totalPrice}`}</li>
							<li>{`Durée totale : ${totalTime}`}</li>
						</ul>
						<button onClick={() => setShowDetail(!showDetail)}>{showDetail ? 'Masquer détail' : 'Voir détail'}</button>
					</>
				}
				{showDetail &&
					<CartDetailContainer />
				}
			</div >
		</>
	)
}

export default Cart
