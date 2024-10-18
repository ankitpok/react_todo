import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-item-store";

function TODOItem() {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems
  const deleteItem = contextObj.deleteItem

  return (
    <>
      {todoItems.map((todo, index) => (
        <div className={`row c-row`} key={index}>
          <div className="col-6">{todo.item}</div>
          <div className="col-4">{todo.date}</div>
          <div className="col-2">
            <button className={`btn btn-danger custom-btn`} onClick={() =>deleteItem(todo)}>Delete</button>
          </div>
        </div>
      ))}
    </>
  );
}
export default TODOItem;
