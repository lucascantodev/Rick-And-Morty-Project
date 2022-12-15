
const TableGenerator = ({
  data,
  tableHeaders,
  dataObjects
}) => {
  return (
    <table className="table table-dark table-striped table-bordered">
      <thead>
        <tr>
          {tableHeaders?.map((header) => (
            <th scope="col" key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      {data?.map((page) => (
        <tbody>
          {page?.results.map((data) => (
            <tr>
              {dataObjects?.map((object) => (
                <th scope="row">{data[object]}</th>
              ))}
            </tr>
          ))}
        </tbody>
      ))}
    </table>
  )
}

export default TableGenerator