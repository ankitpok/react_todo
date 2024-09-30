function AddTODO() {
  return (
    <div className="row c-row">
      <div className="col-6">
        <input
          type="text"
          className="form-control"
          placeholder="Enter TODO here"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="col-4">
        <input type="date" name="" id="" />
      </div>
      <div className="col-2">
        <button className="btn btn-success custom-btn">Add</button>
      </div>
    </div>
  );
}
export default AddTODO;
