import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { AbsorvistApp } from "./pages/AbsorvistApp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<AbsorvistApp />} />
      </Routes>
    </BrowserRouter>
  );
}
