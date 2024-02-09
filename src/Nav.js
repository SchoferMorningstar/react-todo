import { useState } from "react";

const Nav = ({ setTodos, noTodos, setNoTodos, todos }) => {
  const [newTodo, setNewTodo] = useState("");
  const [id, setId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: id, text: newTodo, state: "active" },
    ]);
    setId(id + 1);
    if (noTodos === true) setNoTodos(false);
  };
  const handleReset = (e) => {
    setTodos([]);
    setNoTodos(true);
  };
  return (
    <nav>
      <div>
        <form onSubmit={handleSubmit}>
          <label>ToDo Text:</label>
          <input
            type="text"
            required
            value={newTodo}
            onChange={(e) => {
              setNewTodo(e.target.value);
            }}
          />
          <button>Add</button>
        </form>
      </div>
      <div>
        <p>Options</p>
        <button onClick={handleReset}>Clean</button>
      </div>
    </nav>
  );
};

export default Nav;
