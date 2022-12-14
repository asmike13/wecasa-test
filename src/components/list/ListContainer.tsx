import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUniverse } from 'src/redux/thunks/universeThunk'
import List from './List'
import { IRootState } from 'src/store'
import { ICategory, IPrestation, IUniverseList } from 'src/apis/universeApi'
import { cartSlice } from 'src/redux/reducers/cartSlice'

const ListContainer = () => {
	const dispatch = useDispatch()

	const {
		list,
		status,
	} = useSelector((store: IRootState) => store.universe)

	React.useEffect(() => {
		dispatch(fetchUniverse() as any)
	}, [dispatch])

	const addToCart = React.useCallback(({ reference, title }: ICategory, prestation: IPrestation) => {
		const item = {
			category: {
				reference,
				title,
			},
			prestation,
		}

		dispatch(cartSlice.actions.addItemToCart({ item }))
	}, [dispatch])

	const propsToPass = React.useMemo(() => ({
		universeList: list as IUniverseList,
		addToCart,
	}), [addToCart, list])

	return React.useMemo(() => (
		/pending|idle/.test(status)
			? <div>Loading ...</div>
			: <List {...propsToPass} />
	), [propsToPass, status])
}

export default ListContainer
