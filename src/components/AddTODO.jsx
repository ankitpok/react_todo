import styles from "./AddTODO.module.css";

function AddTODO({onClickAdd , onChangeTextField, onChangeDateField, newTodoText, newTodoDate}) {
  return (
    <div className={`row c-row`}>
      <div className="col-6">
        <input
          type="text"
          className={`form-group ${styles.todoinput}`}
          placeholder="Enter TODO here"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={onChangeTextField}
          value={newTodoText}
        />
      </div>
      <div className="col-4">
        <input type="date" name="" id="" 
        onChange={onChangeDateField}
        value={newTodoDate}
        />
      </div>
      <div className="col-2">
        <button className={`btn btn-success custom-btn`} onClick={onClickAdd}>Add</button>
      </div>
    </div>
  );
}
export default AddTODO;
