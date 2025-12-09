import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import FormularCarte from "./FormularCarte"
import { useState } from "react"
import { tools_postRequest } from "./tools"

const InsertCarte = () => {
  const history = useHistory()

  const [titlu, setTitlu] = useState("")
  const [autor, setAutor] = useState("")
  const [editura, setEditura] = useState("")
  const [pret, setPret] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    tools_postRequest(
      "http://myproject.test//insertCarte.php",
      "/carti",
      history,
      { titlu, autor, editura, pret },
    )
  }

  return (
    <div className="content insert">
      <h2>Adauga Carte</h2>
      <form onSubmit={handleSubmit}>
        <div className="formular">
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

export default InsertCarte
