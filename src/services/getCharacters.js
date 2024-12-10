const getCharacters = async () => {
  try {
    const url = "https://rickandmortyapi.com/api/character";
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log("ERRRROR", error);
  }
};

export default getCharacters;
