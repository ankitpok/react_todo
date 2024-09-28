import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AppName from "./components/AppName";
import AddTODO from "./components/AddTODO";
import TODOItem1 from "./components/TODOItem1";
import TODOItem2 from "./components/TODOItem2";
import "./app.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <center>
      <div class="container text-center">
        <AppName></AppName>

        <AddTODO></AddTODO>

        <TODOItem1></TODOItem1>
        <TODOItem2></TODOItem2>
      </div>
    </center>
  );
}

export default App;
