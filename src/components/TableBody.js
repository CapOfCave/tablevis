import { useState } from "react";
import NewRowPreview from "./NewRowPreview";
import TableCell from "./TableCell";

const TableBody = ({
  tableContent,
  selectedCell,
  setSelectedCell,
  submitChanges,
  editedCellContent,
  setEditedCellContent,
  getTableCellUpdater,
}) => {
  const [newRow, setNewRow] = useState(null);

  const mapToTableCells = (cellData, rowId, colId) => {
    const position = { row: rowId, column: colId }
    const selected =
      selectedCell != null &&
      selectedCell.row === position.row &&
      selectedCell.column === position.column;
    return (
      <td key={colId}>
        <TableCell
          position={position}
          content={cellData}
          selected={selected}
          select={() => setSelectedCell(position)}
          submitChanges={submitChanges}
          editedCellContent={editedCellContent}
          setEditedCellContent={setEditedCellContent}
          getTableCellUpdater={getTableCellUpdater}
        />
      </td>
    );
  };

  const mapToTableRow = (rowData, rowIndex) => {
    return (
      <tr key={rowIndex}>
        {rowData.map((cellData, colIndex) =>
          mapToTableCells(cellData, rowIndex + 1, colIndex)
        )}
      </tr>
    );
  };
  console.log("tx", tableContent);

  return (
    <tbody>
      {tableContent.map(mapToTableRow)}
    </tbody>
  );
};

export default TableBody;
