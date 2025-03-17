import WishList from "./pages/wishListItems";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import { Toaster } from "sonner";
import TodoCard from "./components/todo-card";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <SignUp /> */}
      {/* <Toaster position="bottom-center" />
      <WishList /> */}
      <TodoCard day="Sunday" numberOfActivity={4} />
    </>
  );
}

export default App;
