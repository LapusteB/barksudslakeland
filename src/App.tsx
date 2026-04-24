import { Navigate, Route, Routes } from "react-router-dom";
import A2PTermsPage from "./pages/A2PTermsPage";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/a2p" element={<A2PTermsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

