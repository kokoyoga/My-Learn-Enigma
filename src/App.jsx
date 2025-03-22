import WishList from "./pages/WishListItems";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import {Toaster} from "sonner";
import TodoCard from "./components/Todo-card";
import {Link, Router, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CounterPage from "./pages/CounterPage";

function App() {
  return (
    <Routes>
      <Route element={<WishList />} path="/wishlist" />
      <Route element={<SignUp />} path="/auth/sign-up" />
      <Route element={<CounterPage />} path="/counter-page" />
      <Route element={<HomePage />} path="/homepage/:username" />
    </Routes>
  );
}

export default App;
