import AppName from "./components/AppName";
import AddTODO from "./components/AddTODO";
import TODOItem from "./components/TODOItem";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from "react"

function App() {
  let [todoItems, setTodoItems] = useState([
    {
      item: "Do Homework",
      date: "2024/1/1",
    },
  ])
  let handleOnClickAdd = (newTodoText,newTodoDate) => {
    if (newTodoText !="" & newTodoDate!="") {
    let newTodoItems = [...todoItems, {item:newTodoText, date:newTodoDate}]
    setTodoItems(newTodoItems)
    }
  }
  let onClickDelete = (todo) => {
    let newTodoItems2 = todoItems.filter(item => item!=todo)
    setTodoItems(newTodoItems2)
  }
  return (
    <center>
      <div className="container text-center">
        <AppName></AppName>

        <AddTODO handleOnClickAdd={handleOnClickAdd} ></AddTODO>
        <TODOItem item={todoItems} onClickDelete={onClickDelete}></TODOItem>
      </div>
    </center>
  );
}

export default App;
