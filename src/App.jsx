import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { CharactersProvider } from "./context/CharactersContext";
import CharacterId from "./components/CharacterId";

import Characters from "./components/Characters";

function App() {
  return (
    <CharactersProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<CharacterId />} />
        </Routes>
      </BrowserRouter>
    </CharactersProvider>
  );
}

export default App;
