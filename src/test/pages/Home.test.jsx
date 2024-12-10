import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Importa MemoryRouter
import { describe, it, expect, vi } from "vitest";
import Home from "../../pages/Home";
import { CharactersProvider } from "../../context/CharactersContext";

vi.mock("@/context/CharactersContext", () => ({
  CharactersProvider: ({ children }) => {
    return <div data-testid="characters-provider">{children}</div>;
  },
  useCharacters: () => ({
    characters: [
      { id: 1, name: "Luke Skywalker", image: "" },
      { id: 2, name: "Darth Vader", image: "" },
    ],
  }),
}));

describe("Home component", () => {
  it("renders characters list", () => {
    render(
      <MemoryRouter>
        <CharactersProvider>
          <Home />
        </CharactersProvider>
      </MemoryRouter>
    );

    const elementId = screen.getByText("Buscar un personaje por id");
    expect(elementId).not.toBeNull();
    const allCharacters = screen.getByText("Ver todos los personajes");
    expect(allCharacters).not.toBeNull();
  });
});
