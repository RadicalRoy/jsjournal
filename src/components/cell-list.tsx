import CellListItem from './cell-list-item';
import { useTypedSelector } from '../hooks/use-typed-selector';

const CellList: React.FC = () => {
	const cells = useTypedSelector(({ cells: { order, data } }) => {
		return order.map((id) => {
			return data[id];
		});
	});

	const renderedCells = cells.map((cell) => (
		<CellListItem cell={cell} key={cell.id} />
	));
	return <div>{renderedCells}</div>;
};

export default CellList;
