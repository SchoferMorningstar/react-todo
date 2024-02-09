import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Nav from "./Nav";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [noTodos, setNoTodos] = useState(true);
  return (
    <div className="App">
      <div className="main">
        <Header />
        <Main
          noTodos={noTodos}
          todos={todos}
          setNoTodos={setNoTodos}
          setTodos={setTodos}
        />
        <Nav
          setTodos={setTodos}
          setNoTodos={setNoTodos}
          noTodos={noTodos}
          todos={todos}
        />
      </div>
    </div>
  );
}

export default App;
