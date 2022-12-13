import SearchForm from "../SearchForm"

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand text-white" href="#">Rick and Morty Project</a>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a className="nav-link active text-white" href="/">Home</a>
            <a className="nav-link text-white" href="/table">Table</a>
          </div>
        </div>
        <SearchForm />
      </div>
    </nav>
  );
};
  
export default Navbar;