import { useFetch } from '../../utils/hook'
import Spinner from '../Spinner'
import Error from '../Error'

const CharactersList = () => {
    const { data, isError, isLoading } = useFetch("character");

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <Error />
    }

    return (
        <>
        {data.results.map((character) => (
            <div className="col mb-5" key={character.id}>
                <div className="card h-100">
                    <img className="card-img-top" src={character.image} alt={character.name} />
                    <div className="card-body p-4">
                        <div className="text-center">
                            <h5 className="fw-bolder">{character.name}</h5>
                            {character.status} - {character.species}
                        </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                            <a className="btn btn-outline-dark mt-auto" href="#">
                                View options
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        ))}
        </>
    );
};

export default CharactersList;