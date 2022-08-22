import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUniverse } from 'src/redux/thunks/universeThunk'
import List from './List'
import { IRootState } from 'src/store'

const ListContainer = () => {
	const dispatch = useDispatch()

	const {
		list: universeList,
		status,
	} = useSelector((store: IRootState) => store.universe)

	React.useEffect(() => {
		dispatch(fetchUniverse() as any)
	}, [])

	React.useEffect(() => {
		console.log('universeList', universeList)
		console.log('status', status)
	}, [universeList, status])

	return <List />
}

export default ListContainer
