import { Box } from "@chakra-ui/react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Base({ children }) {
  return (
    <>
      <Header />
      <Box ps={4} display="flex">
        <Sidebar />
        <Box as="main" role="main" p={4}>
          {children}
        </Box>
      </Box>
    </>
  );
}
export default Base;
