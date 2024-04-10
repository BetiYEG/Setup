/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from "react";
import HomePage from "./components/common/Button";
import axios from "axios";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
function App() {
  useEffect(() => {
    axios.get(" https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/HomePage" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;