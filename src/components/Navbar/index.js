import Link from 'next/link'
import SearchForm from "../SearchForm"

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand text-white" href="#">Rick and Morty Project</a>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link className="nav-link active text-white" href="/">Home</Link>
            <Link className="nav-link text-white" href="/table">Table</Link>
          </div>
        </div>
        <SearchForm />
      </div>
    </nav>
  );
};
  
export default Navbar;