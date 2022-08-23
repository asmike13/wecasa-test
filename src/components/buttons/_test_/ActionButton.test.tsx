import { fireEvent, render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer';
import { StoreWrapper } from 'src/helpers/testHelpers';
import ActionButton, { IActionButtonProps } from '../ActionButton';

export const props: IActionButtonProps<boolean> = {
	setAction: jest.fn(),
	value: false,
}

it('should render ActionButton as snapshot', async () => {
	const snapshot = renderer.create(
		<StoreWrapper>
			<ActionButton {...props} />
		</StoreWrapper>,
	)

	expect(snapshot).toMatchSnapshot()
})

it('should call setAction on click', async () => {
	render(
		<StoreWrapper>
			<ActionButton {...props} />
		</StoreWrapper>,
	)

	fireEvent.click(screen.getByTestId('clickAction'))
	expect(props.setAction).toHaveBeenCalledTimes(1)
})
