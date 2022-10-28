import {
  Box,
  Container,
  Heading,
  Flex,
  Text,
  Select,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import {
  AiTwotoneSetting,
  AiOutlineReload,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { IoSwapVertical } from "react-icons/io5";

function Swap() {
  return (
    <Container
      maxW={500}
      my={4}
      className="swap light-green-border-high animate__animated animate__bounceInLeft"
      boxShadow="0 0 20px 1px #47bd4b"
      borderWidth={3}
      p={4}
      rounded="2xl"
      color="#d0dce8"
      bg="black"
    >
      <Flex justifyContent="space-between">
        <Box>
          <Heading size="md" letterSpacing={8}>
            SWAP
          </Heading>
          <Text>Fast, Secure, KYC-Free.</Text>
        </Box>
        <Flex gap={4}>
          <AiOutlineReload size={30} cursor="pointer" />
          <AiTwotoneSetting size={30} cursor="pointer" />
        </Flex>
      </Flex>

      <Flex my={4} justifyContent="space-between" className="bg-blue">
        <Box>
          <Text>From:</Text>
          <Text mt={2}>0</Text>
        </Box>
        <Box textAlign="end">
          <Text>Balance: 0</Text>
          <Flex align="center">
            <Text className="txt-light-green">MAX</Text>
            <Select
              border="none"
              bg="unset"
              _focus={{ outline: "none", boxShadow: "none" }}
            >
              <option style={{ background: "black" }} value="">
                <img src="assets/bnb.svg" alt="" />
                BNB
              </option>
              <option style={{ background: "black" }} value="">
                <img src="assets/bnb.svg" alt="" />
                SAFUU
              </option>
            </Select>
          </Flex>
        </Box>
      </Flex>

      <IoSwapVertical
        style={{ display: "block", margin: "auto" }}
        className="txt-light-green"
      />

      <Flex my={4} justifyContent="space-between" className="bg-blue">
        <Box>
          <Text>To:</Text>
          <Text mt={2}>0</Text>
        </Box>
        <Box textAlign="end">
          <Text>Balance: 0</Text>
          <Flex align="center">
            <Select
              border="none"
              bg="unset"
              _focus={{ outline: "none", boxShadow: "none" }}
            >
              <option style={{ background: "black" }} value="">
                <img src="assets/bnb.svg" alt="" />
                BNB
              </option>
              <option style={{ background: "black" }} value="">
                SAFUU
              </option>
            </Select>
          </Flex>
        </Box>
      </Flex>

      <Box>
        <Text float="left">Slippage Tolerance</Text>
        <Text float="right" className="txt-light-green">
          0.1%
        </Text>
        <Button mt={4} w="full" p={6} className="bg-grad">
          Connect Wallet
        </Button>
      </Box>

      <Box className="bg-blue" mt={4}>
        <Flex justifyContent="space-between" my={2}>
          <Box display="flex" gap={2} alignItems="center">
            <Text>Minimum received</Text>
            <Tooltip
              hasArrow
              label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, asperiores?"
              bg="gray.300"
              color="black"
              placement="top"
            >
              <span>
                <AiOutlineQuestionCircle />
              </span>
            </Tooltip>
          </Box>
          <Text>0 SAFUU</Text>
        </Flex>
        <Flex justifyContent="space-between" my={2}>
          <Box display="flex" gap={2} alignItems="center">
            <Text>Price Impact</Text>
            <Tooltip
              hasArrow
              label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, asperiores?"
              bg="gray.300"
              color="black"
              placement="top"
            >
              <span>
                <AiOutlineQuestionCircle />
              </span>
            </Tooltip>
          </Box>
          <Text>0%</Text>
        </Flex>
        <Flex justifyContent="space-between" my={2}>
          <Box display="flex" gap={2} alignItems="center">
            <Text>Liquidity Provider Fee</Text>
            <Tooltip
              hasArrow
              label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, asperiores?"
              bg="gray.300"
              color="black"
              placement="top"
            >
              <span>
                <AiOutlineQuestionCircle />
              </span>
            </Tooltip>
          </Box>
          <Text>0% - No Fee</Text>
        </Flex>
        <Flex justifyContent="space-between" my={2}>
          <Box display="flex" gap={2} alignItems="center">
            <Text>Route</Text>
            <Tooltip
              hasArrow
              label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, asperiores?"
              bg="gray.300"
              color="black"
              placement="top"
            >
              <span>
                <AiOutlineQuestionCircle />
              </span>
            </Tooltip>
          </Box>
          <Text>SAFUU {"< -- >"} BNB</Text>
        </Flex>
      </Box>
    </Container>
  );
}
export default Swap;
