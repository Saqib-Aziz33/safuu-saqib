import { useRef } from "react";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Image,
  VStack,
} from "@chakra-ui/react";
import navigationData from "../util/navLinks.json";

function HomeDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const { pathname } = useLocation();

  return (
    <>
      <Button
        ref={btnRef}
        py={6}
        px={4}
        className="light-green"
        onClick={onOpen}
      >
        <FaBars size={20} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay bg="rgba(0,0,0,0.1)" />
        <DrawerContent
          color="white"
          bg="transparent"
          backdropFilter="blur(5px)"
        >
          <DrawerCloseButton />

          <DrawerBody>
            <Image
              src="assets/logo.png"
              width="150px"
              display="block"
              mx="auto"
              my={8}
            />
            <VStack gap={4}>
              {navigationData.map((item) => (
                <Button
                  key={item.text}
                  fontWeight="bold"
                  px={8}
                  w="full"
                  className={`dark-green ${
                    pathname === item.link ? "bg-grad" : ""
                  }`}
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
              <Button
                fontWeight="bold"
                px={8}
                w="full"
                className={`dark-green`}
              >
                <a
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                  target="_blank"
                  href="https://safuu.com"
                  rel="noreferrer noopener"
                >
                  <img
                    src="assets/docs.png"
                    style={{ height: "20px" }}
                    alt=""
                  />
                  Docs
                </a>
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default HomeDrawer;
