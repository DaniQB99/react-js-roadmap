import { useState } from "react";
import Person from "./Person";

export const App = (props) => {
  const [persons, setPersons] = useState(props.persons);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  // Trim whitespace from inputs
  const trimmedName = newName.trim();
  const trimmedNumber = newNumber.trim();

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (trimmedName === "") {
      setErrorMessage("El nombre no puede estar vacio");
      return;
    }
    if (trimmedNumber.trim() === "") {
      setErrorMessage("El numero no puede estar vacio");
      return;
    }
    setPersons([...persons, { name: newName, number: newNumber }]);
    setNewName("");
    setNewNumber("");
    setErrorMessage("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <p>
        Filter shown with:
        <input
          id="name"
          type="text"
          value={filter}
          onChange={handleFilterChange}
        />
      </p>
      <h2>add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>name: </label>
          <input
            id="name"
            type="text"
            value={newName}
            onChange={handleNameChange}
          />
          {errorMessage && <p>{errorMessage}</p>}
        </div>
        <div>
          <label>number: </label>
          <input
            id="number"
            type="text"
            value={newNumber}
            onChange={handleNumberChange}
          />
          {errorMessage && <p>{errorMessage}</p>}
        </div>
        <button>Add</button>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons
          .filter((person) =>
            person.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map((person) => (
            <Person key={person.name} name={person.name} number={person.number} />
          ))}
      </ul>
    </div>
  );
};

export default App;
