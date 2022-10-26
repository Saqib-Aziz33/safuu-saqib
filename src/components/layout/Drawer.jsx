import { useRef } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
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
                  fontWeight="bold"
                  px={8}
                  w="full"
                  className={`dark-green`}
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default HomeDrawer;
