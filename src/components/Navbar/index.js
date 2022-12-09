
const Navbar = () => {
    return (
        <nav className="navbar navbar-white bg-white">
            <div className="container-fluid">
            <a className="navbar-brand">Rick and Morty Project</a>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
            </div>
        </nav>
    );
  };
  
  export default Navbar;