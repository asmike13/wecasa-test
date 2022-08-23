import renderer from 'react-test-renderer';
import { StoreWrapper } from 'src/helpers/testHelpers';
import { itemMock } from 'src/mocks/itemsMock';
import CartDetail, { ICartDetailProps } from '../CartDetail';

export const props: ICartDetailProps = {
	items: itemMock,
	onRemoveOne: jest.fn(),
	onAddOne: jest.fn(),
	onRemoveAll: jest.fn(),
}

it('should render CartDetail as snapshot without items', async () => {
	const snapshot = renderer.create(
		<StoreWrapper>
			<CartDetail {...props} items={[]} />
		</StoreWrapper>,
	)

	expect(snapshot).toMatchSnapshot()
})

it('should render CartDetail as snapshot with items', async () => {
	const snapshot = renderer.create(
		<StoreWrapper>
			<CartDetail {...props} />
		</StoreWrapper>,
	)

	expect(snapshot).toMatchSnapshot()
})
