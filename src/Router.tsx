import { Routes, Route, Navigate } from "react-router-dom";

import Main from "./pages/Main";
import Checkout from "./pages/Checkout";
import OrderConfirm from "./pages/OrderConfirm";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order-confirmed" element={<OrderConfirm />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
