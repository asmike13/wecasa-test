import ActionButton from '../buttons/ActionButton'
import CartDetail, { ICartDetailProps } from './CartDetail'
import CartResume, { ICartResumeProps } from './CartResume'
import './styles.scss'

export type TCartProps = {
	cartResumeProps: ICartResumeProps
	cartDetailProps: ICartDetailProps
	height: string
	showDetail: boolean
	setShowDetail: (show: boolean) => void
}

const Cart = ({
	cartResumeProps,
	cartDetailProps,
	height,
	showDetail,
	setShowDetail,
}: TCartProps) => {
	return (
		<>
			<div className='cart-margin' style={{ height }} />
			<div className='cart'>
				<CartResume {...cartResumeProps} />
				{cartResumeProps.hasItems &&
					<ActionButton setAction={() => setShowDetail(!showDetail)} value={showDetail ? 'Masquer détail' : 'Voir détail'} />
				}
				{cartResumeProps.hasItems && showDetail &&
					<CartDetail {...cartDetailProps} />
				}
			</div>
		</>
	)
}

export default Cart
