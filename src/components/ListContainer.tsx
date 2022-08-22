import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUniverse } from 'src/redux/thunks/universeThunk'
import List from './List'
import { IRootState } from 'src/store'
import { IUniverseList } from 'src/apis/universeApi'

const ListContainer = () => {
	const dispatch = useDispatch()

	const {
		list,
		status,
	} = useSelector((store: IRootState) => store.universe)

	React.useEffect(() => {
		dispatch(fetchUniverse() as any)
	}, [dispatch])

	React.useEffect(() => {
		console.log('universeList', list)
		console.log('status', status)
	}, [list, status])

	const propsToPass = {
		universeList: list as IUniverseList,
	}


	return /pending|idle/.test(status)
		? <div>Loading ...</div>
		: <List {...propsToPass} />
}

export default ListContainer
