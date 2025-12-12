import DisplayCarti from "./DisplayCarti"
import useFetch from "./useFetch"

const Carti = () => {
  const {
    data: rows,
    isPending: isLoading,
    error: error,
  } = useFetch("http://localhost//getData.php?tabel=carti")

  return (
    <div className="content carti">
      <h2>Carti</h2>

      {error && <div>Eroare: {error}</div>}

      {isLoading && <div>Un moment...</div>}

      {rows && (
        <DisplayCarti
          deleteURL="http://localhost//deleteCarte.php" 
          rows={rows}
        />
      )}
    </div>
  )
}

export default Carti
