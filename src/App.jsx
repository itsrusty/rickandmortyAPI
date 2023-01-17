// Hooks
import { useEffect, useState } from "react";

// components
import Card from "./components/Card";

function App() {
  // state
  const [character, setCharacter] = useState("");

  const getData = async () => {
    try {
      const API = "https://rickandmortyapi.com/api/character";
      const dataAPI = await fetch(API);
      const dataJSON = await dataAPI.json();
      console.log(dataJSON.results);

      // update the state
      setCharacter(dataJSON.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
      <h1>RickAndMorty</h1>
      {!character
        ? "cargando.."
        : character.map((characters) => {
            return (
              <Card
                key={characters.id}
                name={characters.name}
                image={characters.image}
              />
            );
          })}
    </div>
  );
}

export default App;
