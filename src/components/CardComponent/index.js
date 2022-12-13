import Button from '../Button'

const CardComponent = ({
  id,
  image,
  name,
  status,
  species
}) => {
  return (
    <div className="col mb-5">
      <div className="card h-100 card-item">
        <img className="card-img-top" src={image} alt={name} />
        <div className="card-body p-4">
          <div className="text-center text-white">
            <h5 className="fw-bolder">{name}</h5>
            {status} - {species}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center text-white">
            <Button link={`/characters/${id}`}>
              View more
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardComponent