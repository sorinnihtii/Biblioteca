import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links">
        <Link to="/">Pagina principala</Link>
        <Link to="/carti">Cărți</Link>
        <Link to="/cititori">Cititori</Link>
        <Link to="/insertCarte">Adaugă Carte</Link>
        <Link to="/insertCititor">Adaugă Cititor</Link>
      </div>
    </nav>
  )
}

export default Navbar
