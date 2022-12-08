
const Navbar = () => {
    return (
        <nav class="navbar navbar-white bg-white">
            <div class="container-fluid">
            <a class="navbar-brand">Rick and Morty Project</a>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
            </div>
        </nav>
    );
  };
  
  export default Navbar;