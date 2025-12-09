const Table = ({ filteredRows, columns, handleUpdate, handleDelete }) => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {columns &&
              columns.map((column) => (
                <th className={column} key={column}>
                  {column}
                </th>
              ))}
            {columns && <th className="actiuni">actiuni</th>}
          </tr>
        </thead>
        <tbody>
          {filteredRows.map((row) => (
            <tr key={row.id}>
              {columns.map((column) => (
                <td className={column} key={column}>
                  {row[column]}
                </td>
              ))}
              <td>
                <button className="action delete" onClick={() => handleDelete(row.id)}>
                  sterge
                </button>
                <button className="action update" onClick={() => handleUpdate(row.id)}>
                  modifica
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
