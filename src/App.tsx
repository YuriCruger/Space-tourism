import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="font-barlow-condensed">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
