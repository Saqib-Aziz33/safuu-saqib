import { Box } from "@chakra-ui/react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Base({ children }) {
  return (
    <>
      <Header />
      <Box ps={["unset", "unset", "4"]} display="flex">
        <Sidebar />
        <Box
          as="main"
          w={["full", "full", "calc(100% - 250px)"]}
          role="main"
          p={4}
          className="main"
        >
          {children}
        </Box>
      </Box>
    </>
  );
}
export default Base;
