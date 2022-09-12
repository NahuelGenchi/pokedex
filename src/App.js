import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemList, ItemDetailContainer, Footer } from "./components";

import "./scss/main.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemList/>}/>
        <Route path="/pokemon" element={<ItemList/>}/>
        <Route path="/pokemon/:name" element={<ItemDetailContainer/>}/>
        <Route path="*" element={"Invalid path. Please enter a valid URL."}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
