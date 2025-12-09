import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import FormularCititor from "./FormularCititor"
import { useState } from "react"
import { tools_postRequest } from "./tools"

const InsertCititor = () => {
  const history = useHistory()

  const [nume, setNume] = useState("")
  const [prenume, setPrenume] = useState("")
  const [adresa, setAdresa] = useState("")
  const [telefon, setTelefon] = useState("")
  const [idCarte, setIdCarte] = useState("")
  const [dataImprumut, setDataImprumut] = useState("")
  const [dataReturn, setDataReturn] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    tools_postRequest(
      "http://myproject.test//insertCititor.php",
      "/cititori",
      history,
      { nume, prenume, adresa, telefon, idCarte, dataImprumut, dataReturn },
    )
  }

  return (
    <div className="content insert">
      <h2>Adauga Cititor</h2>
      <form onSubmit={handleSubmit}>
        <div className="formular">
          <FormularCititor
            nume={nume}
            setNume={setNume}
            prenume={prenume}
            setPrenume={setPrenume}
            adresa={adresa}
            setAdresa={setAdresa}
            telefon={telefon}
            setTelefon={setTelefon}
            idCarte={idCarte}
            setIdCarte={setIdCarte}
            dataImprumut={dataImprumut}
            setDataImprumut={setDataImprumut}
            dataReturn={dataReturn}
            setDataReturn={setDataReturn}
          />
        </div>
      </form>
    </div>
  )
}

export default InsertCititor
