import { useFetch } from '../../utils/hook'
import CharacterCard from '../CardComponent'
import Spinner from '../Spinner'
import Error from '../Error'

const CharactersList = () => {
    const { data, isError, isLoading } = useFetch("/character")

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <Error />
    }

    return (
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <>
                {data.results.map((character) => (
                    <CharacterCard
                        image={character.image}
                        name={character.name}
                        status={character.status}
                        species={character.species}
                        key={character.id}
                    />
                ))}
                </>
            </div>
        </div>
    );
};

export default CharactersList;