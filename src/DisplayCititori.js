import { useState } from "react"
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min"
import Table from "./Table"
import { tools_postRequest } from "./tools"

const DisplayCititori = ({ deleteURL, rows }) => {
  const history = useHistory()
  const [content, setContent] = useState(rows)

  let columns
  if (content[0]) {
    columns = Object.keys(rows[0])
  }

  const [filter, setFilter] = useState(false)
  const data_curenta = new Date().toISOString().slice(0, 10)

  let filteredRows = []
  if (filter) {
    filteredRows = content.filter(
      (row) => row.data_return > data_curenta || row.data_return == null,
    )
  } else filteredRows = content

  const handleDelete = async (id) => {
    const success = await tools_postRequest(deleteURL, "/cititori", history, {
      id,
    })
    if (success) {
      setContent((prev) => prev.filter((row) => Number(row.id) !== Number(id)))
    }
  }

  const handleUpdate = (id) => {
    history.push(`/updateCititor/${id}`)
  }

  return (
    <>
      {content[0] && (
        <>
          <div className="filter">
            <input
              id="filter"
              name="filter"
              type="checkbox"
              value={filter}
              onChange={(e) => setFilter(e.target.checked)}
            />
            <label htmlFor="filter">
              Cititori care încă nu au returnat cartea
            </label>
          </div>
          <Table
            filteredRows={filteredRows}
            columns={columns}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        </>
      )}
      {!content[0] && (
        <div className="emptytable_error">
          <div>Acest tabel este gol. Poti adauga un nou cititor</div>
          <Link to="/insertCititor">aici</Link>
        </div>
      )}
    </>
  )
}

export default DisplayCititori
