import { useParams } from "react-router-dom";
import { useCharacters } from "../context/CharactersContext";
import Card from "./Card";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CharacterId = () => {
  const { characters } = useCharacters();
  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();

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
      setLoading(false);  // setLoading(false) here instead of true
      setError({
        message: `El ID ${id} no existe`,
        state: true,
      });
    }
  }, [characters, id]);

  const goToHome = () => {
    navigate("/");
  };

  return (
    <>
      {loading ? <p>Cargando ...</p> : null}
      {error.state ? <p>{error.message}</p> : <Card character={oneCharacter} />}
      <button type="button" className="btn btn-primary" onClick={goToHome}>
        Volver al Home
      </button>
    </>
  );
};

export default CharacterId;
