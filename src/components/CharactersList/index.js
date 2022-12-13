import { useFetchInfinite } from '../../utils/hook'
import CharacterCard from '../CardComponent'
import InfiniteScroll from '../InfiniteScroll'
import Error from '../Error'

const CharactersList = () => {
  const { data, isError, size, setSize } = useFetchInfinite("/character")

  if (isError) {
    return <Error />
  }

  return (
    <div className="container px-4 px-lg-5 mt-5">
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        <InfiniteScroll
          size={size}
          next={setSize}
        >
          {data?.map((page) => (
            <>
              {page?.results.map((character) => (
                <CharacterCard
                  id={character.id}
                  image={character.image}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  key={character.id}
                />
              ))}
            </>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default CharactersList;