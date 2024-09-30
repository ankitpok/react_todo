function TODOItem({ item }) {
  return (
    <>
      {item.map((todo, index) => (
        <div className="row c-row" key={index}>
          <div className="col-6">{todo.item}</div>
          <div className="col-4">{todo.date}</div>
          <div className="col-2">
            <button className="btn btn-danger custom-btn">Delete</button>
          </div>
        </div>
      ))}
    </>
  );
}
export default TODOItem;
