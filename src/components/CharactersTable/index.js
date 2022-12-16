import { useFetchInfinite } from '../../utils/hook'
import TableGenerator from '../TableGenerator'
import InfiniteScroll from '../InfiniteScroll'
import Error from '../Error'

const CharactersTable = () => {
  const { data, isError, size, setSize } = useFetchInfinite("/character")

  if (isError) {
    return <Error />
  }

  const tableHeaders = [
    "Id",
    "Name",
    "Status",
    "Species",
    "Gender"
  ]

  const dataObjects = [
    "id",
    "name",
    "status",
    "species",
    "gender"
  ]

  return (
    <div className="table-responsive px-4 px-lg-5 mt-5">
      <InfiniteScroll
        size={size}
        next={setSize}
      >
        <TableGenerator 
          data={data}
          tableHeaders={tableHeaders}
          dataObjects={dataObjects}
        />
      </InfiniteScroll>
    </div>
  )
}

export default CharactersTable