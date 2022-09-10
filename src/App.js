import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemList } from "./components";

import "./scss/main.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemList/>}/>
        <Route path="/pokemon" element={<ItemList/>}/>
        <Route path="/pokemon/:name" element={"Pokemon"}/>
        <Route path="*" element={"Invalid path. Please enter a valid URL."}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
