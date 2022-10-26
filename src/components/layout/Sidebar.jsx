import { Box, Button, VStack } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import navigationData from "../util/navLinks.json";

function Sidebar() {
  const { pathname } = useLocation();

  return (
    <Box className="sidebar" display={["none", "none", "block"]} maxW="260px">
      <VStack gap={4} p={4} w="250px">
        <img src="assets/logo.png" width="120px" alt="" />
        {navigationData.map((item) => (
          <Button
            key={item.text}
            fontWeight="bold"
            px={8}
            w="full"
            className={`dark-green ${pathname === item.link ? "bg-grad" : ""}`}
          >
            <Link
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
              to={item.link}
            >
              <img src={item.img} style={{ height: "20px" }} alt="" />
              {item.text}
            </Link>
          </Button>
        ))}
      </VStack>
    </Box>
  );
}
export default Sidebar;
