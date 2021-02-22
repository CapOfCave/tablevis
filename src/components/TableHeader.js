import "./../styles/Styles.css";
import TableCell from "./TableCell";

const TableHeader = ({
  tableSchema,
  selectedCell,
  setSelectedCell,
  submitChanges,
  editedCellContent,
  setEditedCellContent
}) => {
  return (
    <thead>
      <tr>
        {tableSchema.map((cell, index) => {
          return (
            <th scope="col" key={index}>
              <TableCell
                position={{ row: 0, column: index }}
                content={cell}
                selectedCell={selectedCell}
                setSelectedCell={setSelectedCell}
                submitChanges={submitChanges}
                editedCellContent={editedCellContent}
                setEditedCellContent={setEditedCellContent}
              />
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
