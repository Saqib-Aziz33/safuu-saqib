import { Spinner, Box, Heading } from "@chakra-ui/react";

function Loading() {
  return (
    <Box
      style={{
        position: "fixed",
        height: "100vh",
        width: "100vw",
        background: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        left: 0,
        top: 0,
      }}
    >
      <Spinner w="50px" h="50px" speed="0.8s" color="white" thickness="4px" />
    </Box>
  );
}
export default Loading;
