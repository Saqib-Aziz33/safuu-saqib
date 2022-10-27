import {
  Heading,
  Box,
  Text,
  Flex,
  Grid,
  GridItem,
  Input,
  Container,
  HStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";
import { useState } from "react";

function Calculator() {
  const [days, setDays] = useState(50);

  return (
    <Box py={8} px={[2, 4, 12]} fontWeight="bold" className="calculator">
      <Container
        maxW={900}
        mt={8}
        className="light-green-border-high"
        px={8}
        py={4}
        rounded="xl"
      >
        <Heading fontSize="lg">Calculator</Heading>
        <Text fontSize="sm">Estimate your returns</Text>

        <Flex
          mt={8}
          justifyContent={["unset", "unset", "space-around"]}
          gap={8}
          flexWrap="wrap"
        >
          <Box>
            <Heading fontSize="2xl" color="gray">
              SAFUU Price
            </Heading>
            <Heading fontSize="2xl" mt={2}>
              $1.56
            </Heading>
          </Box>
          <Box>
            <Heading fontSize="2xl" color="gray">
              Current APY
            </Heading>
            <Heading fontSize="2xl" mt={2}>
              383,025.8%
            </Heading>
          </Box>
          <Box>
            <Heading fontSize="2xl" color="gray">
              Your SAFUU Balance
            </Heading>
            <Heading fontSize="2xl" mt={2}>
              0 SAFUU
            </Heading>
          </Box>
        </Flex>

        <Grid
          mt={4}
          gap={8}
          gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
        >
          <GridItem className="input-wrapper">
            <Text>Safuu Amount</Text>
            <Input contentEditable={false} type="text" value="0" />
            <span>Max</span>
          </GridItem>
          <GridItem className="input-wrapper">
            <Text>APY (%)</Text>
            <Input contentEditable={false} type="text" value="383025.8" />
            <span>Current</span>
          </GridItem>
          <GridItem className="input-wrapper">
            <Text>SAFUU price at purchase ($)</Text>
            <Input contentEditable={false} type="text" value="1.56" />
            <span>Current</span>
          </GridItem>
          <GridItem className="input-wrapper">
            <Text>Future SAFUU market price ($)</Text>
            <Input contentEditable={false} type="text" value="1.56" />
            <span>Current</span>
          </GridItem>

          <GridItem>
            <Text float="left">{days} Day</Text>
            <Text float="right">First Year : 0.02355% Per EPOCH</Text>
            <Slider
              aria-label="slider-ex-1"
              defaultValue={days}
              onChange={(e) => setDays(e)}
              min={1}
              colorScheme="whatsapp"
              max={120}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </GridItem>
          <GridItem>
            <Text textAlign="center">Second Year : 0.00211% Per EPOCH</Text>
            <Slider
              aria-label="slider-ex-2"
              defaultValue={40}
              colorScheme="whatsapp"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </GridItem>
        </Grid>

        <Box mt={8}>
          <HStack justifyContent="space-between" my={3} gap={2}>
            <Text size="md">Your initial investment</Text>
            <Text size="md">$0</Text>
          </HStack>
          <HStack justifyContent="space-between" my={3} gap={2}>
            <Text size="md">Current wealth</Text>
            <Text size="md">$0</Text>
          </HStack>
          <HStack justifyContent="space-between" my={3} gap={2}>
            <Text size="md">SAFUU rewards estimation</Text>
            <Text size="md">0 SAFUU</Text>
          </HStack>
          <HStack justifyContent="space-between" my={3} gap={2}>
            <Text size="md">Potential return</Text>
            <Text size="md">$0</Text>
          </HStack>
        </Box>
      </Container>
    </Box>
  );
}
export default Calculator;
