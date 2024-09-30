import AppName from "./components/AppName";
import AddTODO from "./components/AddTODO";
import TODOItem from "./components/TODOItem";
import TODOItem2 from "./components/TODOItem2";
import "./app.css";

function App() {
  let todoItems = [
    {
      item: "Do Homework",
      date: "2024/1/1",
    },
    {
      item: "Read Book",
      date: "2024/1/1",
    },
    {
      item: "Practise coding",
      date: "2024/1/1",
    },
  ];
  return (
    <center>
      <div className="container text-center">
        <AppName></AppName>

        <AddTODO></AddTODO>
        <TODOItem item={todoItems}></TODOItem>
        {/* <TODOItem2></TODOItem2> */}
      </div>
    </center>
  );
}

export default App;
