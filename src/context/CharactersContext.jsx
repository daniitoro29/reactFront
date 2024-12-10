import { createContext, useEffect, useState, useContext } from "react";
import getCharacters from "../services/getCharacters";

const CharactersContext = createContext();

export const CharactersProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  

  useEffect(() => {
    getCharacters().then((data) => {
      
      setCharacters(data);
    });
  }, []);

  return (
    <CharactersContext.Provider
      value={{
        characters,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
export const useCharacters = () => useContext(CharactersContext);
