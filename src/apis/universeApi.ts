import axios, { AxiosResponse } from 'axios';

type TReference = 'man' | 'woman' | 'child'
type TReferenceTitle = 'Homme' | 'Femme' | 'Enfant'

export interface IUniverseList {
	reference: string
	title: string
	categories: {
		reference: TReference
		title: TReferenceTitle
		prestations: {
			reference: string
			title: string
			duration: number
			price: number
		}[]
	}[]
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
