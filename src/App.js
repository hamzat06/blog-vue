import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/navbar.component";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
