import AppName from "./components/AppName";
import AddTODO from "./components/AddTODO";
import TODOItem from "./components/TODOItem";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from "react"
import { TodoItemsContext } from "./store/todo-item-store";

function App() {
  let [todoItems, setTodoItems] = useState([
    {
      item: "Do Homework",
      date: "2024/1/1",
    },
  ])
  const addNewItem = (newTodoText,newTodoDate) => {
    if (newTodoText !="" & newTodoDate!="") {
    
    // setTodoItems((todoItems) => {
    //   let newTodoItems = [...todoItems, {item:newTodoText, date:newTodoDate}]
    //   return newTodoItems
    // })
    //same thing but compact
    setTodoItems((todoItems) => 
      [...todoItems, {item:newTodoText, date:newTodoDate}]
    )
    }
  }
  const deleteItem = (todo) => {
    let newTodoItems2 = todoItems.filter(item => item!=todo)
    setTodoItems(newTodoItems2)
  }
  return (
    <TodoItemsContext.Provider value = {{todoItems:todoItems, addNewItem: addNewItem, deleteItem:deleteItem}}>
    <center>
      <div className="container text-center">
        <AppName></AppName>

        <AddTODO></AddTODO>
        <TODOItem></TODOItem>
      </div>
    </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
