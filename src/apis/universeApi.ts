import axios, { AxiosResponse } from 'axios';

export type ICategory = {
	reference: string
	title: string
}
export type IPrestation = {
	reference: string
	title: string
	duration: number
	price: number
}

export interface IUniverseList {
	reference: string
	title: string
	categories: (ICategory & {
		prestations: IPrestation[]
	})[]
}

export const fetchUniverse = async ():
	Promise<AxiosResponse<IUniverseList>> => {
	const response = await axios.get('https://www.wecasa.fr/api/techtest/universe', {
		headers: {
			Accept: 'application/json',
		},
	})
	return response
}
