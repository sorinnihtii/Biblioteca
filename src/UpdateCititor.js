import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min"
import useFetch from "./useFetch"
import { useEffect, useState } from "react"
import FormularCititor from "./FormularCititor"
import { tools_postRequest } from "./tools"

const UpdateCititor = () => {
  const { id } = useParams()
  const history = useHistory()

  const { data: rows } = useFetch(
    "http://myproject.test//getData.php?tabel=cititori",
  )

  const [nume, setNume] = useState("")
  const [prenume, setPrenume] = useState("")
  const [adresa, setAdresa] = useState("")
  const [telefon, setTelefon] = useState("")
  const [id_carte, setId_carte] = useState("")
  const [data_imprumut, setData_imprumut] = useState("")
  const [data_return, setData_return] = useState("")

  const [cititori, setCititori] = useState([])

  useEffect(() => {
    if (rows) setCititori(rows)
  }, [rows])

  useEffect(() => {
    if (cititori.length > 0) {
      const c = cititori.find((cititor) => Number(cititor.id) === Number(id))
      if (c) {
        setNume(c.nume)
        setPrenume(c.prenume)
        setAdresa(c.adresa)
        setTelefon(c.telefon)
        setId_carte(c.id_carte)
        setData_imprumut(c.data_imprumut)
        setData_return(c.data_return)
      }
    }
  }, [cititori, id])

  function handleSubmit(e) {
    e.preventDefault()

    tools_postRequest(
      "http://myproject.test//updateCititor.php",
      "/cititori",
      history,
      {
        id,
        nume,
        prenume,
        adresa,
        telefon,
        id_carte,
        data_imprumut,
        data_return,
      },
    )
  }

  return (
    <div className="content insert">
      <h2>Modificare Cititor</h2>

      <form onSubmit={handleSubmit}>
        <div className="formular">
          <input hidden type="text" name="id" value={id} readOnly />
          <FormularCititor
            nume={nume}
            setNume={setNume}
            prenume={prenume}
            setPrenume={setPrenume}
            adresa={adresa}
            setAdresa={setAdresa}
            telefon={telefon}
            setTelefon={setTelefon}
            idCarte={id_carte}
            setIdCarte={setId_carte}
            dataImprumut={data_imprumut}
            setDataImprumut={setData_imprumut}
            dataReturn={data_return}
            setDataReturn={setData_return}
          />
        </div>
      </form>
    </div>
  )
}

export default UpdateCititor
