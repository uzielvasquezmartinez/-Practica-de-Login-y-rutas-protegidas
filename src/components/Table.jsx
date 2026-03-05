export default function Table({ columns, data, emptyMessage = "Sin datos" }) {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead className="table__head">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="table__th">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="table__body">
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="table__empty">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr key={row.id ?? rowIndex} className="table__row">
                {columns.map((col) => (
                  <td key={col.key} className="table__td">
                    {col.render ? col.render(row[col.key], row) : row[col.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
