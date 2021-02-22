import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import "./../styles/Styles.css";
import { useState } from "react";
import NewRowPreview from "./NewRowPreview";

const Table = ({ tableSchema, tableContent, setCellValue }) => {
  const [selectedCell, setSelectedCell] = useState(null);
  const [editedCellContent, setEditedCellContent] = useState("");

  const submitChanges = (event) => {
    event.preventDefault();
    setCellValue(selectedCell, editedCellContent);
    setSelectedCell(null);
    setEditedCellContent("");
  };

  const getTableCellUpdateAndCloser = (position) => {
    return (value) => {
      setCellValue(position, value);
      setSelectedCell(null);
    }
  }

  return (
    <table>
      <TableHeader
        tableSchema={tableSchema}
        setSelectedCell={setSelectedCell}
        selectedCell={selectedCell}
        submitChanges={submitChanges}
        editedCellContent={editedCellContent}
        setEditedCellContent={setEditedCellContent}
      />
      <TableBody
        tableContent={tableContent}
        setSelectedCell={setSelectedCell}
        selectedCell={selectedCell}
        submitChanges={submitChanges}
        editedCellContent={editedCellContent}
        setEditedCellContent={setEditedCellContent}
        getTableCellUpdateAndCloser={getTableCellUpdateAndCloser}
      />
    </table>
  );
};

export default Table;
