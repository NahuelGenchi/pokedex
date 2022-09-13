import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemList, ItemDetailContainer, Footer } from "./components";

import "./scss/main.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemList/>}/>
        <Route path="/pokedex" element={<ItemList/>} />
        <Route path="/pokedex/:number" element={<ItemList/>}/>
        <Route path="/pokedex/pokemon/:name" element={<ItemDetailContainer/>}/>
        <Route path="*" element={"Invalid path. Please enter a valid URL."}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
