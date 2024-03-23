/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from "react";
import HomePage from "../pages/index";
import { Button } from "./components/ui/button";
import axios from "axios";

function App() {
  useEffect(() => {
    axios.get(" https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <div className="px-40">
        <HomePage />
        <Button>Hello</Button>
      </div>
    </>
  );
}

export default App;