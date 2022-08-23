import './styles.scss'

export interface ICartResumeProps {
	hasItems: boolean
	totalTime: string
	totalPrice: string
}

const CartResume = ({
	hasItems,
	totalTime,
	totalPrice,
}: ICartResumeProps) => {
	return (
		<>
			{hasItems
				? <>
					<span>Panier :</span>
					<ul>
						<li>{`Prix total : ${totalPrice}`}</li>
						<li>{`Durée totale : ${totalTime}`}</li>
					</ul>
				</>
				: 'Panier vide'
			}
		</>
	)
}

export default CartResume
