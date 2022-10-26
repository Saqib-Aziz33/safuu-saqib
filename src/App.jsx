import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
// layout
import Base from "./components/layout/Base";
// pages
import Home from "./pages/Home";
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
              <Route index path="/" element={<Home />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </Base>
        </ChakraProvider>
      </BrowserRouter>
    </>
  );
}
export default App;
