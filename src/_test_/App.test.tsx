import renderer from 'react-test-renderer';
import App from 'src/App'
import { StoreWrapper } from 'src/helpers/testHelpers';

it('should render app as snapshot', async () => {
	const snapshot = renderer.create(
		<StoreWrapper>
			<App />
		</StoreWrapper>,
	)
	
	expect(snapshot).toMatchSnapshot()
})
