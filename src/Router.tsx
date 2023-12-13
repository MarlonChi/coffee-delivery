import { Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Checkout from "./pages/Checkout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}
