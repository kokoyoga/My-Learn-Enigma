import Counter from "../components/Counter";
import {Link} from "react-router-dom";

function CounterPage() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Counter />
      <Link to="/wishlist">to wishlist</Link>
    </div>
  );
}

export default CounterPage;
