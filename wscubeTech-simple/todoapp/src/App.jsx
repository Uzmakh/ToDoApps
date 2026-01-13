
import { useState } from "react";
import "./App.css";

const App = () => {
  const [todos, setToDos] = useState([]);

  let saveToDos = (event) => {
    event.preventDefault(); //to stop refreshing page on clicking button
    let todoname = event.target.todoname.value;
    // alert(todoname);
    if (!todoname) return;
    if (!todos.includes(todoname)) {
      let addedTodos = [...todos, todoname];
      setToDos(addedTodos);
      event.target.todoname.value = "";
    } else {
      alert("This todo already exists...");
    }
  };

  const list = todos.map((value, index) => {
    return (
      <TodoListItems
        key={index}
        value={value}
        indexNumber={index}
        todos={todos}
        setToDos={setToDos}
      />
    );
  });

  return (
    <div className="container">
      <h1>ToDo App</h1>
      <form onSubmit={saveToDos}>
        <input type="text" placeholder="Add a task" name="todoname" />
        <button>Add</button>
      </form>

      <div className="todoList">
        <ul>{list}</ul>
      </div>
    </div>
  );
};

function TodoListItems({ value, indexNumber, todos, setToDos }) {
  let [status, setStatus] = useState(false);

  let deleteTodo = () => {
    let finalList = todos.filter((value, index) => indexNumber != index);
    console.log(finalList);
    setToDos(finalList);
  }
  let checkStatus = () => {
    setStatus(!status);
  };
  return (
    <li onClick={checkStatus} className={(status)?"completeTodo":""}>
      {indexNumber+1}-
      {value} <span onClick={deleteTodo}>&times;</span>
    </li>
  );
}

export default App;
