import { createAsyncThunk } from '@reduxjs/toolkit'
import * as API from 'src/apis/universeApi'

export const fetchUniverse = createAsyncThunk(
	'universe/fetch',
	async () => {
		const response = await API.fetchUniverse()
		return response.data
	}
)