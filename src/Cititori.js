import DisplayCititori from "./DisplayCititori"
import useFetch from "./useFetch"

const Cititori = () => {
  const {
    data: rows,
    isPending: isLoading,
    error: error,
  } = useFetch("http://myproject.test//getData.php?tabel=cititori")

  return (
    <div className="content cititori">
      <h2>Cititori</h2>

      {error && <div>Eroare: {error}</div>}

      {isLoading && <div>Un moment...</div>}

      {rows && (
        <DisplayCititori
          deleteURL="http://myproject.test//deleteCititor.php"
          rows={rows}
        />
      )}
    </div>
  )
}

export default Cititori
