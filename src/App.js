import { Routes, Route } from "react-router-dom";

import CartItems from "./pages/cartItems/CartItems";
import Homepage from "./pages/homepage/homepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/cartItems" element={<CartItems />} />
    </Routes>
  );
}

export default App;
