import { useState } from "react";

const NewRowPreview = ({ columnNames, addRow }) => {
  const [newRowValues, setNewRowValues] = useState(
    new Array(columnNames.length).fill('')
  );

  const updateValue = (event, index) => {
    console.log(event.target.value, index);
    const x = newRowValues.map((newRowValue, newRowIndex) => {
        console.log('reached');
      return index === newRowIndex ? event.target.value : newRowValue;
    });
    console.log(x);
    setNewRowValues(x);
  };
  const mapToCell = (columnName, index) => {
    return (
      <input
        key={index}
        placeholder={columnName}
        value={newRowValues[index]}
        onChange={(event) => updateValue(event, index)}
      />
    );
  };
  const submit = (event) => {
    event.preventDefault();
    console.log(newRowValues);
    addRow(newRowValues);
  };

  return (
    <form onSubmit={submit}>
      {columnNames.map(mapToCell)}
      <button type="submit">Create</button>
    </form>
  );
};

export default NewRowPreview;
