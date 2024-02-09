const Main = ({ noTodos, todos, setTodos, setNoTodos }) => {
  let todosArray = [];
  const handleDelete = (idTodo) => {
    todosArray = todos;
    setTodos(
      todosArray.filter((todo) => {
        return todo.id !== idTodo;
      })
    );
    if (todos.length <= 1) setNoTodos(true);
  };
  return (
    <main>
      {noTodos && (
        <p>
          <b>Nothing to show</b>
        </p>
      )}
      {!noTodos && (
        <div>
          <ul>
            {todos.map((t) => (
              <li key={t.id}>
                <label>
                  <input type="checkbox" />
                  <span>{t.text}</span>
                  <button
                    onClick={() => {
                      handleDelete(t.id);
                    }}
                  >
                    X
                  </button>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
};

export default Main;
