import TopScroller from "../TopScroller"

const Footer = () => {
  return (
    <footer className="py-5 bg-dark fixed-bottom">
      <div className="container">
        <p className="m-0 text-center text-white">Copyright &copy; Rick and Morty Project 2022</p>
      </div>
      <TopScroller />
    </footer>
  )
}

export default Footer