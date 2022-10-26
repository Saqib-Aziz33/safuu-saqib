import { Container, Box, HStack, Button, Flex } from "@chakra-ui/react";
import { FaDiscord, FaTwitter, FaTelegramPlane } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import HomeDrawer from "./Drawer";

function Header() {
  return (
    <header className="header">
      <Container maxW={1300}>
        <HStack justifyContent="space-between">
          {/* safuu button */}
          <Box display={["none", "none", "block"]}>
            <Button
              className="light-green"
              fontSize="3xl"
              py={8}
              px={12}
              rounded="2xl"
            >
              <a
                href="https://safuu.com"
                rel="noreferrer noopener"
                target={"_blank"}
              >
                SAFUU
              </a>
            </Button>
          </Box>
          {/* drawer */}
          <Box display={["block", "block", "none"]}>
            <HomeDrawer />
          </Box>
          {/* right content */}
          <HStack gap={4}>
            <HStack
              gap={2}
              className="icons"
              display={["none", "none", "flex"]}
            >
              <div className="icon">
                <FaTwitter />
              </div>
              <div className="icon">
                <FaDiscord />
              </div>
              <div className="icon">
                <FaTelegramPlane />
              </div>
              <div className="icon">
                <BsMedium />
              </div>
            </HStack>
            <Box className="drop-down" display={["none", "none", "block"]}>
              <Button
                className="dark-green"
                textTransform="uppercase"
                fontSize="xl"
              >
                Safuu
              </Button>
              <a href="https://safuu.com">Buy on blog swap</a>
            </Box>
            <Button p={6} className="bg-grad">
              Connect Wallet
            </Button>
          </HStack>
        </HStack>
      </Container>
    </header>
  );
}
export default Header;
