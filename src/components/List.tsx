import { IUniverseList } from 'src/apis/universeApi'
import { priceFormat, timeFormat } from 'src/helpers'

interface IList {
	universeList: IUniverseList
}

const List = ({ universeList }: IList) => {
	return (
		<div>
			<h1>{`Liste ${universeList.title}`}</h1>
			{universeList.categories.map((category) => (
				<>
					<div>{category.title}</div>
					{category.prestations.map((prestation) => (
						<ul>
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
