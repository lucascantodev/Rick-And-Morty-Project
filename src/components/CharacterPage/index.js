import { useFetch } from '../../utils/hook'
import Spinner from '../Spinner'
import Error from '../Error'

const CharacterPage = ({characterId}) => {
  const { data, isError, isLoading } = useFetch(`/character/${characterId}`)

  if (isError) {
    return <Error />
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className="container d-flex justify-content-center pb-5 pt-4">
      <div className="d-flex flex-column gap-2">
        <h1 className="text-center">{data.name}</h1>
        <img className="img-fluid" src={data.image} alt={data.name} />
        
        {(() => {
          if (data.status === "Dead") {
            return <div className="badge bg-danger fs-5">{data.status}</div>
          } else if (data.status === "Alive") {
            return <div className=" badge bg-success fs-5">{data.status}</div>
          } else {
            return <div className="badge bg-secondary fs-5">{data.status}</div>
          }
        })()}

        <div className="content">
          <div>
            <span className="fw-bold">Gender : </span>
            {data.gender}
          </div>
          <div>
            <span className="fw-bold">Location: </span>
            {data.location.name}
          </div>
          <div>
            <span className="fw-bold">Origin: </span>
            {data.origin.name}
          </div>
          <div>
            <span className="fw-bold">Species: </span>
            {data.species}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterPage