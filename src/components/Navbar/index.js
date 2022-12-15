import Link from 'next/link'
import SearchForm from "../SearchForm"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">Rick and Morty Project</a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active text-white" href="/">Home</Link>
            <Link className="nav-link text-white" href="/table">Table</Link>
          </div>
        </div>
        <SearchForm />
      </div>
    </nav>
  )
}
  
export default Navbar