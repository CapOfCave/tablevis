const TableCell = ({
  position,
  content,
  selected,
  select,
  submitChanges,
  editedCellContent,
  setEditedCellContent,
}) => {
  if (selected) {
    return (
      <form onSubmit={submitChanges}>
        <input
          placeholder={content}
          value={editedCellContent}
          onChange={(e) => setEditedCellContent(e.target.value)}
        />
        <button type="submit">Done</button>
      </form>
    );
  }

  return (
    <p
      className="tableCell"
      onClick={() => {
        console.log("click", position);
        select()
      }}
    >
      {content}
    </p>
  );
};

export default TableCell;
