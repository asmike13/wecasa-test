import renderer from 'react-test-renderer';
import { StoreWrapper } from 'src/helpers/testHelpers';
import CartResume, { ICartResumeProps } from '../CartResume';

export const props: ICartResumeProps = {
	hasItems: false,
	totalTime: '1H 4min',
	totalPrice: '100€',
}

it('should render CartResume as snapshot without items', async () => {
	const snapshot = renderer.create(
		<StoreWrapper>
			<CartResume {...props} />
		</StoreWrapper>,
	)

	expect(snapshot).toMatchSnapshot()
})

it('should render CartResume as snapshot with items', async () => {
	const snapshot = renderer.create(
		<StoreWrapper>
			<CartResume {...props} hasItems />
		</StoreWrapper>,
	)

	expect(snapshot).toMatchSnapshot()
})
