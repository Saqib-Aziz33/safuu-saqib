import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
// layout
import Base from "./components/layout/Base";
// pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Swap from "./pages/Swap";
import Calculator from "./pages/Calculator";
import Analytics from "./pages/Analytics";
import Docs from "./pages/Docs";
import NotFound from "./pages/NotFound";
// others
import "./app.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <ChakraProvider>
          <Base>
            <Routes>
              <Route index path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/account" element={<Account />} />
              <Route path="/swap" element={<Swap />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/docs" element={<Docs />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </Base>
        </ChakraProvider>
      </BrowserRouter>
    </>
  );
}
export default App;
