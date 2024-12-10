const Card = ({ character }) => (
  <>
    <div className="card" style={{width: "18rem"}}>
      <img src={character?.image} className="card-img-top" alt={character?.name} />
      <div className="card-body">
        <h5 className="card-title">{character?.name}e</h5>
        <p className="card-text">
          Especie: {character?.species}
        </p>
        <p className="card-text">
          Genero: {character?.gender}
        </p>
      </div>
    </div>
  </>
);

export default Card;
