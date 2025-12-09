const FormularCarte = ({
  titlu,
  setTitlu,
  autor,
  setAutor,
  editura,
  setEditura,
  pret,
  setPret,
}) => {
  return (
    <>
      <div className="form-grup">
        <label htmlFor="titlu">Titlu</label>
        <input
          required
          type="text"
          name="titlu"
          id="titlu"
          value={titlu}
          onChange={(e) => setTitlu(e.target.value)}
        />
      </div>

      <div className="form-grup">
        <label htmlFor="autor">Autor</label>
        <input
          required
          type="text"
          name="autor"
          id="autor"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />
      </div>

      <div className="form-grup">
        <label htmlFor="editura">Editura</label>
        <input
          required
          type="text"
          name="editura"
          id="editura"
          value={editura}
          onChange={(e) => setEditura(e.target.value)}
        />
      </div>

      <div className="form-grup">
        <label htmlFor="pret">Pret</label>
        <input
          required
          type="number"
          step="0.01"
          min="0"
          name="pret"
          id="pret"
          value={pret}
          onChange={(e) => setPret(e.target.value)}
        />
      </div>

      <button>Trimite</button>
    </>
  )
}

export default FormularCarte
