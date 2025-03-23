import {Toaster} from "sonner";
import {Link, Router, Route, Routes} from "react-router-dom";
import {lazy, Suspense} from "react";

const WishList = lazy(() => import("./pages/WishListItems"));
const SignUp = lazy(() => import("./pages/SignUp"));
const HomePage = lazy(() => import("./pages/HomePage"));
const CounterPage = lazy(() => import("./pages/CounterPage"));

function App() {
  return (
    <Routes>
      <Route
        element={
          <Suspense fallback="Loading...">
            <WishList />
          </Suspense>
        }
        path="/wishlist"
      />
      <Route
        element={
          <Suspense fallback="Loading...">
            <SignUp />
          </Suspense>
        }
        path="/auth/sign-up"
      />
      <Route
        element={
          <Suspense fallback="Loading...">
            <CounterPage />
          </Suspense>
        }
        path="/counter-page"
      />
      <Route
        element={
          <Suspense fallback="Loading...">
            <HomePage />
          </Suspense>
        }
        path="/homepage/:username"
      />
    </Routes>
  );
}

export default App;
