import { useFetchInfinite } from '../../utils/hook'
import Error from '../Error'

const CharactersTable = () => {
  const { data, isError, size, setSize } = useFetchInfinite("/character")

  if (isError) {
    return <Error />
  }

  return (
    <div className="container px-4 px-lg-5 mt-5">
      
    </div>
  );
};

export default CharactersTable;