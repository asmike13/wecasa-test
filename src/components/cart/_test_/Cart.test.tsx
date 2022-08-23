import renderer from 'react-test-renderer';
import { StoreWrapper } from 'src/helpers/testHelpers';
import Cart, { TCartProps } from '../Cart';
import { props as cartResumeProps } from './CartResume.test'
import { props as cartDetailProps } from './CartDetail.test'

export const props: TCartProps = {
	cartResumeProps,
	cartDetailProps,
	height: '10px',
	showDetail: false,
	setShowDetail: jest.fn(),
}

it('should render Cart as snapshot without detail', async () => {
	const snapshot = renderer.create(
		<StoreWrapper>
			<Cart {...props} />
		</StoreWrapper>,
	)

	expect(snapshot).toMatchSnapshot()
})

it('should render Cart as snapshot with detail', async () => {
	const snapshot = renderer.create(
		<StoreWrapper>
			<Cart {...props} showDetail />
		</StoreWrapper>,
	)

	expect(snapshot).toMatchSnapshot()
})
