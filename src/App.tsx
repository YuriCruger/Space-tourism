import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="font-barlow-condensed min-h-screen flex flex-col">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
