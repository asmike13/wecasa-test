import React from 'react'
import { ICategory, IPrestation, IUniverseList } from 'src/apis/universeApi'
import { priceFormat, timeFormat } from 'src/helpers'

import './styles.scss'

interface IListProps {
	universeList: IUniverseList
	addToCart: (category: ICategory, prestation: IPrestation) => void
}

const List = ({ universeList, addToCart }: IListProps) => {
	const [tab, setTab] = React.useState(0)

	return (
		<div className='list-container'>
			<h1>{`Liste ${universeList.title}`}</h1>
			{universeList.categories.map((category, index) => (
				<button
					key={`${category.reference}-tab-btn`}
					className={index === tab ? 'selected-tab' : 'tab'}
					onClick={() => setTab(index)}
				>
					{category.title}
				</button>
			))}
			{universeList.categories.map((category, index) => (
				category.prestations.map((prestation) => (
					<div key={`${category.reference}-${prestation.reference}`} className={`prestation ${tab !== index ? 'hide' : ''}`}>
						<button onClick={() => addToCart(category, prestation)}>Add to cart</button>
						<ul>
							<li>{prestation.title}</li>
							<li>{timeFormat(prestation.duration)}</li>
							<li>{priceFormat(prestation.price)}</li>
						</ul>
					</div>
				))
			))}
		</div >
	)
}

export default List
