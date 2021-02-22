import { useState } from "react";
import Table from "./components/Table";
import AddColumnButton from "./components/AddColumnButton";
import NewRowPreview from "./components/NewRowPreview";

const exTableContent = [
  ["ID", "Name", "Address"],
  [1, "John", "5 Wall St."],
  [2, "Joe", "5 Joe St."],
  //[3, "Jilly", "5 Joe St."],
  [4, "Kurt", "7 Joe St."],
];

function App() {
  const [tableContent, setTableContent] = useState(exTableContent);

  const addColumn = () => {
    setTableContent(
      tableContent.map((row, idx) => row.concat(idx === 0 ? "New Row" : "-"))
    );
  };

  const addRow = (newRow) => {
    setTableContent(tableContent.concat([newRow]));
  };

  const setCellValue = (position, value) => {
    if (value)
      setTableContent(
        tableContent.map((row, rowId) =>
          rowId === position.row
            ? row.map((cell, cellId) =>
                cellId === position.column ? value : cell
              )
            : row
        )
      );
  };

  return (
    <div className="wrapper">
      <div className="tableCard">
        <h2>Adressliste</h2>
        <div className="tableCardContent">
          <Table
            tableSchema={tableContent[0]}
            tableContent={tableContent.slice(1)}
            setCellValue={setCellValue}
          />
          <NewRowPreview columnNames={tableContent[0]} addRow={addRow} />

          <AddColumnButton addColumn={addColumn} />
        </div>
      </div>
    </div>
  );
}

export default App;
