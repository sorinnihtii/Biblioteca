import { useMemo, useState } from "react"
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { tools_postRequest } from "./tools"
import Table from "./Table"

const DisplayCarti = ({ deleteURL, rows }) => {
  const history = useHistory()
  const [content, setContent] = useState(rows)

  let columns
  if (content[0]) {
    columns = Object.keys(content[0])
  }

  const celMaiMicPret = useMemo(
    () => Math.min(...content.map((item) => Number(item.pret))),
    [content],
  )

  const celMaiMarePret = useMemo(
    () => Math.max(...content.map((item) => Number(item.pret))),
    [content],
  )

  const [filter_pretMinim, setFilter_pretMinim] = useState(celMaiMicPret)
  const [filter_pretMaxim, setFilter_pretMaxim] = useState(celMaiMarePret)
  const [filter_editura, setFilter_editura] = useState("")

  let filteredRows = content.filter(
    (row) => row.pret >= filter_pretMinim && row.pret <= filter_pretMaxim,
  )

  if (filter_editura) {
    filteredRows = filteredRows.filter((row) =>
      row.editura.toLowerCase().includes(filter_editura.toLowerCase()),
    )
  }

  const handleDelete = async (id) => {
    const success = await tools_postRequest(deleteURL, "/carti", history, {
      id,
    })
    if (success) {
      setContent((prev) => prev.filter((row) => Number(row.id) !== Number(id)))
    }
  }

  const handleUpdate = (id) => {
    history.push(`/updateCarte/${id}`)
  }

  return (
    <>
      {content[0] && (
        <>
          <div className="filter">
            <label htmlFor="filterEditura">Editura</label>
            <input
              id="filterEditura"
              name="filterEditura"
              type="text"
              value={filter_editura}
              onChange={(e) => setFilter_editura(e.target.value)}
            />
          </div>
          <div className="filter pret">
            <div className="pretFilter">
              <label htmlFor="pretMinim">Pret minim</label>
              <input
                id="pretMinim"
                name="pretMinim"
                type="number"
                step="10"
                value={filter_pretMinim}
                min={celMaiMicPret}
                max={filter_pretMaxim}
                onChange={(e) => setFilter_pretMinim(Number(e.target.value))}
              />
            </div>
            <div className="filtru pretFilter">
              <label htmlFor="pretMinim">Pret maxim</label>
              <input
                id="pretMaxim"
                name="pretMaxim"
                type="number"
                step="10"
                value={filter_pretMaxim}
                min={filter_pretMinim}
                max={celMaiMarePret}
                onChange={(e) => setFilter_pretMaxim(Number(e.target.value))}
              />
            </div>
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
          <div>Acest tabel este gol. Poti adauga o nouă carte</div>
          <Link to="/insertCarte">aici</Link>
        </div>
      )}
    </>
  )
}

export default DisplayCarti
