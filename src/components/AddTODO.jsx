import { TodoItemsContext } from "../store/todo-item-store";
import styles from "./AddTODO.module.css";
import { useContext, useRef  } from "react";


function AddTODO() {
  const contextObj = useContext(TodoItemsContext)
  const addNewItem = contextObj.addNewItem
  const nameInput = useRef()
  const dateInput = useRef()

  const onClickAdd = () => {
    let newTodoText = nameInput.current.value
    let newTodoDate = dateInput.current.value
    addNewItem(newTodoText,newTodoDate)
    nameInput.current.value = ""
    dateInput.current.value = ""
    
  }
  return (
    <div className={`row c-row`}>
      <div className="col-6">
        <input
          type="text"
          ref={nameInput}
          className={`form-group ${styles.todoinput}`}
          placeholder="Enter TODO here"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="col-4">
        <input type="date" name="" id="" 
        ref={dateInput}
        />
      </div>
      <div className="col-2">
        <button className={`btn btn-success custom-btn`} onClick={onClickAdd}>Add</button>
      </div>
    </div>
  );
}
export default AddTODO;
