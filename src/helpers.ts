export const timeFormat = (timeInMinutes: number) => {
	const hours = Math.floor(timeInMinutes / 60)
	const minutes = timeInMinutes % 60

	const displayHours = hours > 0 ? `${hours}H` : ''
	const displayMinutes = minutes > 0 ? `${minutes}min` : ''

	return `${displayHours} ${displayMinutes}`
}

export const priceFormat = (priceInCents: number) => {
	const price = Math.floor(priceInCents / 100)
	const cents = priceInCents % 100

	const displayPrice = price > 0 ? price : ''
	const displayCents = cents > 0 ? `.${cents}` : ''

	return `${displayPrice}${displayCents}€`
}
