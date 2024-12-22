import NavBar from './Components/NavBar.jsx'
import ItemListContainer from './Components/ItemListContainer.jsx'
import ItemDetailContainer from './Components/ItemDetailContainer.jsx'
import { BrowserRouter, Routes, Route } from "react-router"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
