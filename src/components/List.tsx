import React from 'react'
import { IUniverseList } from 'src/apis/universeApi'
import { priceFormat, timeFormat } from 'src/helpers'

interface IList {
	universeList: IUniverseList
}

const List = ({ universeList }: IList) => {
	const [tab, setTab] = React.useState(0)

	return (
		<div>
			<h1>{`Liste ${universeList.title}`}</h1>
			{universeList.categories.map((category, index) => (
				<button onClick={() => setTab(index)}>{category.title}</button>
			))}
			{universeList.categories.map((category, index) => (
				<>
					{category.prestations.map((prestation) => (
						<ul className={tab !== index ? 'hide' : ''}>
							<li>{prestation.title}</li>
							<li>{timeFormat(prestation.duration)}</li>
							<li>{priceFormat(prestation.price)}</li>
						</ul>
					))}
				</>
			))}
		</div>
	)
}

export default List
