import { Fragment } from 'react';
import CellListItem from './cell-list-item';
import { useTypedSelector } from '../hooks/use-typed-selector';
import AddCell from './add-cell';

const CellList: React.FC = () => {
	const cells = useTypedSelector(({ cells: { order, data } }) => {
		return order.map((id) => {
			return data[id];
		});
	});

	const renderedCells = cells.map((cell) => (
		<Fragment key={cell.id}>
			<CellListItem cell={cell} key={cell.id} />
			<AddCell previousCellId={cell.id} />
		</Fragment>
	));

	return (
		<div>
			<AddCell forceVisible={cells.length === 0} previousCellId={null} />
			{renderedCells}
		</div>
	);
};

export default CellList;
