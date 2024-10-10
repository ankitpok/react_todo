import AppName from "./components/AppName";
import AddTODO from "./components/AddTODO";
import TODOItem from "./components/TODOItem";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from "react"

function App() {
  let [newTodoText , setNewTodoText] = useState("")
  let [newTodoDate , setNewTodoDate] = useState("")
  let [todoItems, setTodoItems] = useState([
    {
      item: "Do Homework",
      date: "2024/1/1",
    },
  ])
  
  let onChangeTextField = () => {
    setNewTodoText(event.target.value)
  }
  let onChangeDateField = () => {
    setNewTodoDate(event.target.value)
  }
  let onClickAdd = () => {
    if (newTodoText !="" & newTodoDate!="") {
    let newTodoItems = [...todoItems, {item:newTodoText, date:newTodoDate}]
    setTodoItems(newTodoItems)
    setNewTodoText("")
    setNewTodoDate("")
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

        <AddTODO onClickAdd={onClickAdd} onChangeTextField={onChangeTextField} onChangeDateField={onChangeDateField} newTodoText={newTodoText} newTodoDate={newTodoDate}></AddTODO>
        <TODOItem item={todoItems} onClickDelete={onClickDelete}></TODOItem>
      </div>
    </center>
  );
}

export default App;
