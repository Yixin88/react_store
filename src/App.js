import { createBrowserRouter, Route, NavLink, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import RootLayout from "./Layout/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route to='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Route>
  )
)




function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
