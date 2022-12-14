import Link from 'next/link'
import SearchForm from "../SearchForm"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand text-white fs-3" href="/">Rick and Morty Project</Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active text-white fs-5 " href="/">Home</Link>
            <Link className="nav-link text-white fs-5" href="/table">Table</Link>
          </div>
        </div>
        <SearchForm />
      </div>
    </nav>
  )
}
  
export default Navbar