import Card from "./Card";
const Characters = ({ characters }) => {
  return (
    <>
      <ul>
        {characters.map((character, i) => (
          <div key={i+1}>

            <Card character={character} />
          </div>
        ))}
      </ul>
    </>
  );
};

export default Characters;
