import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { StoreWrapper } from 'src/helpers/testHelpers';
import { universeMock } from 'src/mocks/universeMock';
import List, { IListProps } from '../List';

export const props: IListProps = {
	universeList: universeMock,
	addToCart: jest.fn(),
}

it('should render List as snapshot with universeMock', async () => {
	const snapshot = renderer.create(
		<StoreWrapper>
			<List {...props} />
		</StoreWrapper>,
	)

	expect(snapshot).toMatchSnapshot()
})

it('should call addToCart on click', async () => {
	render(
		<StoreWrapper>
			<List {...props} />
		</StoreWrapper>,
	)

	fireEvent.click(screen.getAllByText('Add to cart')[0])
	expect(props.addToCart).toHaveBeenCalledTimes(1)
})
