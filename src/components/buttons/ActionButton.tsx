export interface IActionButtonProps<T> {
	setAction: (action: T) => void
	value: T
}

const ActionButton = ({ setAction, value }: IActionButtonProps<any>) => {
	return (
		<button data-testid="clickAction" onClick={setAction}>{value}</button>
	)
}

export default ActionButton
