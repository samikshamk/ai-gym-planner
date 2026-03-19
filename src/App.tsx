import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NeonAuthUIProvider } from '@neondatabase/neon-js/auth/react';
import { authClient } from "./lib/auth";
import Menu from "./Config/Menu";
import Navbar from "./Components/Layout/Navbar";
import AuthProvider from "./Context/AuthContext";

function App() {
  return (
    <NeonAuthUIProvider authClient={authClient} defaultTheme="dark">
      <AuthProvider>
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
      </AuthProvider>
    </NeonAuthUIProvider>
  );
}

export default App;
