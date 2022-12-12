import { useFetchInfinite, useOnScreen } from '../../utils/hook'
import { useRef, useEffect } from 'react'
import { TOTAL_PAGES } from '../../utils/request'
import CharacterCard from '../CardComponent'
import Error from '../Error'

const CharactersList = () => {
  const { data, isError, size, setSize } = useFetchInfinite("/character")

  if (isError) {
    return <Error />
  }

  const ref = useRef()
  const isVisible = useOnScreen(ref)
  const isEnded = size === TOTAL_PAGES

  useEffect(() => {
    if (isVisible && !isEnded) {
      console.log(`size = ${size}`)
      console.log(data)
      setSize(size + 1)
    }
  }, [isVisible])

  return (
    <div className="container px-4 px-lg-5 mt-5">
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
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
        </div>
      <div ref={ref}></div>
    </div>
  );
};

export default CharactersList;