import { timeFormat, priceFormat } from 'src/helpers/helpers'

it('should format time', () => {
	expect(timeFormat(100)).toEqual('1H 40min')
	expect(timeFormat(10)).toEqual(' 10min')
	expect(timeFormat(60)).toEqual('1H')
	expect(timeFormat(0)).toEqual('')
})

it('should format price', () => {
	expect(priceFormat(1000)).toEqual('10€')
	expect(priceFormat(1045)).toEqual('10.45€')
	expect(priceFormat(45)).toEqual('0.45€')
	expect(priceFormat(0)).toEqual('0€')
})
