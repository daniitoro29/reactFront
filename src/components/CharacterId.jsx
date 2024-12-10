import { useParams } from "react-router-dom";
import { useCharacters } from "../context/CharactersContext";
import Card from "./Card";
import { useEffect, useState } from "react";

const CharacterId = () => {
  const { characters } = useCharacters();
  const params = useParams();
  const { id } = params;

  const [error, setError] = useState({
    message: "",
    state: false,
  });

  const [loading, setLoading] = useState(true);

  const [oneCharacter, setoneCharacter] = useState([]);

  useEffect(() => {
    const isCharacter = characters.find((character) => character.id == id);

    if (isCharacter) {
      setoneCharacter(isCharacter);
      setLoading(false);
      setError({
        message: "",
        state: false,
      });
    } else {
      setLoading(true);
      setError({
        message: `El ID ${id} no existe`,
        state: true,
      });
    }
  }, [characters, id]);


  return (
    <>
      {loading && <p>Cargando ...</p>}
      {error.state ? <p>{error.message}</p> : <Card character={oneCharacter} />}
    </>
  );
};

export default CharacterId;
