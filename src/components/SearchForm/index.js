import { useRouter } from "next/router";
import { BASE_URL } from "../../utils/request";

const SearchForm = () => {
  const router = useRouter()
  const characterId = router.query.characterId

  return (
    <div>
    <div className="mt-3">
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
    </form>
    </div>
    
    <div className="px-4 px-lg-5 mt-3">
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

      </div>
    </div>
    </div>
  )
}
    

export async function getServerSideProps(characterIdParam) {
  const {search} = characterIdParam.query;
  const res = await fetch(`${BASE_URL}/characters/${search}`)
  return {
    props: {
      data,
    }
  }
}

export default SearchForm