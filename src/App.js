import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";

// Layouts
import RootLayout from "./Layout/RootLayout";

// Pages
import ErrorPage from "./pages/ErrorPage";
import DealsPage from "./pages/DealsPage";
import GiftPage from "./pages/GiftPage"
import DimeVideoPage from "./pages/DimeVideoPage"
import VouchersPage from "./pages/VouchersPage";
import BuyAgainPage from "./pages/BuyAgainPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route to='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="deals" element={<DealsPage />} />
      <Route path="gift" element={<GiftPage />} />
      <Route path="DimeVideo" element={<DimeVideoPage />} />
      <Route path="vouchers" element={<VouchersPage />} />
      <Route path="BuyAgain" element={<BuyAgainPage />} />





      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
)




function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
