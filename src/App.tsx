import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Config/Menu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {Menu.map(({ path, element, index }, key) => (
          <Route key={key} path={path} element={element} index={index} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
