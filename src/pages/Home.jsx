import { useState } from "react";
import Characters from "../components/Characters";
import { useCharacters } from "../context/CharactersContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import styles from './Home.module.css';


const Home = () => {
  const { characters } = useCharacters();
  const [allCharacters, setallCharacters] = useState(false);
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (id.trim() === "") {
      Swal.fire({
        title: "Error!",
        text: "Por favor ingrese un ID válido",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    const isCharacter = characters.find((character) => character.id == id);
    if (!isCharacter) {
      Swal.fire({
        title: "Error!",
        text: `El ID ${id} no existe`,
        icon: "error",
        confirmButtonText: "Buscar otro ID",
      });
      return;
    }

    navigate(`/character/${id}`);
  };

  const handleAllCharacters = () => {
    setallCharacters(true);
  };

  return (
    <>
      <Navbar id={id} handleSearch={handleSearch} setId={setId} handleAllCharacters={handleAllCharacters}/>
      {allCharacters && <Characters characters={characters} />}
    </>
  );
};

export default Home;
