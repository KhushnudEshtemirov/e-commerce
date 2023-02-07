import { Routes, Route } from "react-router-dom";

import CartItems from "./pages/cartItems/CartItems";
import Homepage from "./pages/homepage/homepage";

import "./App.css";

function App() {
  return (
    <div className="App container-fluid">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cartItems" element={<CartItems />} />
      </Routes>
    </div>
  );
}

export default App;
