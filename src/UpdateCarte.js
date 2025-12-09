import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min"
import useFetch from "./useFetch"
import { useEffect, useState } from "react"
import FormularCarte from "./FormularCarte"
import { tools_postRequest } from "./tools"

const UpdateCarte = () => {
  const { id } = useParams()
  const history = useHistory()

  const { data: rows } = useFetch(
    "http://myproject.test//getData.php?tabel=carti",
  )

  const [titlu, setTitlu] = useState("")
  const [autor, setAutor] = useState("")
  const [editura, setEditura] = useState("")
  const [pret, setPret] = useState("")

  const [carti, setCarti] = useState([])

  useEffect(() => {
    if (rows) {
      setCarti(rows)
    }
  }, [rows])

  useEffect(() => {
    if (carti.length > 0) {
      const c = carti.find((carte) => Number(carte.id) === Number(id))
      if (c) {
        setTitlu(c.titlu)
        setAutor(c.autor)
        setEditura(c.editura)
        setPret(c.pret)
      }
    }
  }, [carti, id])

  function handleSubmit(e) {
    e.preventDefault()

    tools_postRequest(
      "http://myproject.test//updateCarte.php",
      "/carti",
      history,
      { id, titlu, autor, editura, pret },
    )
  }

  return (
    <div className="content insert">
      <h2>Modificare Carte</h2>

      <form onSubmit={handleSubmit}>
        <div className="formular">
          <input hidden type="text" name="id" value={id} readOnly />
          <FormularCarte
            titlu={titlu}
            setTitlu={setTitlu}
            autor={autor}
            setAutor={setAutor}
            editura={editura}
            setEditura={setEditura}
            pret={pret}
            setPret={setPret}
          />
        </div>
      </form>
    </div>
  )
}

export default UpdateCarte
