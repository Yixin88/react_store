import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Cart from "./pages/Cart";

// Layouts
import RootLayout from "./Layout/RootLayout";

// Pages
import ErrorPage from "./pages/ErrorPage";
import DealsPage from "./pages/DealsPage";
import GiftPage from "./pages/GiftPage"
import DimeVideoPage from "./pages/DimeVideoPage"
import VouchersPage from "./pages/VouchersPage";
import BuyAgainPage from "./pages/BuyAgainPage";
import StorePageLayout from "./Layout/StorePageLayout";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/:categoryList?' element={<RootLayout />}>
      <Route index element={<StorePageLayout />} />
      <Route path="products" element={<StorePageLayout />} />
      <Route path="react_store" element={<StorePageLayout />} />
      <Route path="products/:id" element={<ProductPage />} />

      <Route path="cart" element={<Cart />} />
      <Route path="deals" element={<DealsPage />} />
      <Route path="gift" element={<GiftPage />} />
      <Route path="DimeVideo" element={<DimeVideoPage />} />
      <Route path="vouchers" element={<VouchersPage />} />
      <Route path="BuyAgain" element={<BuyAgainPage />} />
      <Route path="success" element={<CheckoutPage />} />



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
