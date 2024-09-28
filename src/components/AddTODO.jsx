function AddTODO() {
  return (
    <div class="row c-row">
      <div class="col-6">
        <input
          type="text"
          class="form-control"
          placeholder="Enter TODO here"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div class="col-4">
        <input type="date" name="" id="" />
      </div>
      <div class="col-2">
        <button class="btn btn-success custom-btn">Add</button>
      </div>
    </div>
  );
}
export default AddTODO;
