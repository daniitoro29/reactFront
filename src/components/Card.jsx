const Card = ({ character }) => (
  <>
    <h2>{character?.name}</h2>
    <img src={character?.image} alt={character?.name} />
  </>
);

export default Card;
