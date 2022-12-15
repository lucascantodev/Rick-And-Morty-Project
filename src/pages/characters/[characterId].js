import { useRouter } from 'next/router'
import { BASE_URL } from '../../utils/request'
// import PageComponent from '../components/PageComponent'

export default function Character(data) {
  const router = useRouter()
  const characterId = router.query.characterId

  return (
    <>
      <div className="container d-flex justify-content-center mb-5 mt-5">
        <div className="d-flex flex-column gap-2">
          <h1 className="text-center">Rick Sanchez</h1>
          <img className="img-fluid" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="" />
        
        {/* {(() => {
            if (status === "Dead") {
              return <div className="badge bg-danger fs-5">{status}</div>;
          } else if (status === "Alive") {
              return <div className=" badge bg-success fs-5">{status}</div>;
          } else {
              return <div className="badge bg-secondary fs-5">{status}</div>;
          }
        })()} */}

        <div className="badge bg-success fs-5">Alive</div>
        <div className="content">
          <div>
            <span className="fw-bold">Gender : </span>
            Masculino
          </div>
          <div>
            <span className="fw-bold">Location: </span>
            Caicó
          </div>
          <div>
            <span className="fw-bold">Origin: </span>
            Timbaúba
          </div>
          <div>
            <span className="fw-bold">Species: </span>
            Nordestino
          </div>
          <div>
            <span className="fw-bold">Type: </span>
            Cearense
          </div>
          <div>
            <span className="fw-bold">Firs Seen In: </span>
            Ep01 - Meu pau é grande
          </div>
          <div>
            <span className="fw-bold">Last Known Location: </span>
            Ep123 - Rolha grande
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export async function getServerSideProps(characterId) {
  const response = await fetch (`${BASE_URL}/character/${characterId}`)
  const data = await response.json();
  return {
    props: {
      data,
    },
  }
}