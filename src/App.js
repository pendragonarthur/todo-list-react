import { useState } from "react";
import { BsFillTrashFill, BsFillCheckCircleFill } from "react-icons/bs";
import { BiAddToQueue } from "react-icons/bi";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [style, setStyle] = useState();

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = (e) => {
    const newTodoList = [...todoList, newTask];
    setTodoList(newTodoList);
    // or setTodoList([...todoList, newTask]) returns the same.
  };

  const deleteTask = (taskName) => {
    const newTodoList = todoList.filter((task) => {
      if (task === taskName) {
        return false;
      } else {
        return true;
      }
    });
    setTodoList(newTodoList);
  };

  const doneTask = () => {
    setStyle({ textDecoration: "line-through" });
  };

  return (
    <div className="App">
      <div>
        <input type="text" onChange={handleChange} />
        <button onClick={addTask}>
          <BiAddToQueue />
        </button>
      </div>
      <div>
        {todoList.map((task) => {
          return (
            <div style={style}>
              <h1>{task}</h1>
              <button
                onClick={() => {
                  deleteTask(task);
                }}
              >
                <BsFillTrashFill />
              </button>
              <button onClick={doneTask}>
                <BsFillCheckCircleFill />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
