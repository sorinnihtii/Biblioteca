import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div>
      <p>Pagina nu a fost gasita</p>
      <Link to="/">Pagina principala</Link>
    </div>
  )
}

export default NotFound
