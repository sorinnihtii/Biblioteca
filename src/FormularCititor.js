const FormularCititor = ({
  nume,
  setNume,
  prenume,
  setPrenume,
  adresa,
  setAdresa,
  telefon,
  setTelefon,
  idCarte,
  setIdCarte,
  dataImprumut,
  setDataImprumut,
  dataReturn,
  setDataReturn,
}) => {
  const data_curenta = new Date().toISOString().slice(0, 10)
  return (
    <>
      <div className="form-grup">
        <label htmlFor="nume">Nume</label>
        <input
          required
          type="text"
          name="nume"
          id="nume"
          value={nume}
          onChange={(e) => setNume(e.target.value)}
        />
      </div>

      <div className="form-grup">
        <label htmlFor="prenume">Prenume</label>
        <input
          required
          type="text"
          name="prenume"
          id="prenume"
          value={prenume}
          onChange={(e) => setPrenume(e.target.value)}
        />
      </div>

      <div className="form-grup">
        <label htmlFor="adresa">Adresa</label>
        <input
          required
          type="text"
          name="adresa"
          id="adresa"
          value={adresa}
          onChange={(e) => setAdresa(e.target.value)}
        />
      </div>

      <div className="form-grup">
        <label htmlFor="telefon">Telefon</label>
        <input
          required
          type="text"
          pattern="[0-9]+"
          title="Introduceti doar cifre"
          name="telefon"
          id="telefon"
          value={telefon}
          onChange={(e) => setTelefon(e.target.value)}
        />
      </div>

      <div className="form-grup">
        <label htmlFor="id_carte">ID Carte</label>
        <input
          required
          type="number"
          name="id_carte"
          id="id_carte"
          value={idCarte}
          onChange={(e) => setIdCarte(e.target.value)}
        />
      </div>

      <div className="form-grup">
        <label htmlFor="data_imprumut">Data Împrumut</label>
        <input
          required
          type="date"
          name="data_imprumut"
          id="data_imprumut"
          max={data_curenta}
          value={dataImprumut}
          onChange={(e) => setDataImprumut(e.target.value)}
        />
      </div>

      <div className="form-grup">
        <label htmlFor="data_return">Data Return</label>
        <input
          type="date"
          name="data_return"
          id="data_return"
          min={dataImprumut}
          value={dataReturn}
          onChange={(e) => setDataReturn(e.target.value)}
        />
      </div>

      <button>Trimite</button>
    </>
  )
}

export default FormularCititor
