import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Config/Menu";
import Navbar from "./Components/Layout/Navbar";

function App() {
  return (
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <main className="flex-1">
            <Navbar />
            <Routes>
              {Menu.map(({ path, element, index }, key) => (
                <Route key={key} path={path} element={element} index={index} />
              ))}
            </Routes>
          </main>
        </div>
      </BrowserRouter>
  );
}

export default App;
