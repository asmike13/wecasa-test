import { fireEvent, render, screen } from '@testing-library/react';
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


it('should call correct actions on clicks', async () => {
	render(
		<StoreWrapper>
			<CartDetail {...props} />
		</StoreWrapper>,
	)

	fireEvent.click(screen.getAllByText('+1')[0])
	expect(props.onAddOne).toHaveBeenCalledTimes(1)

	fireEvent.click(screen.getAllByText('-1')[0])
	expect(props.onRemoveOne).toHaveBeenCalledTimes(1)

	fireEvent.click(screen.getAllByText('Remove')[0])
	expect(props.onRemoveAll).toHaveBeenCalledTimes(1)
})
