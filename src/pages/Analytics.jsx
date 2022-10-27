import {
  Heading,
  Image,
  Container,
  Box,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";

function Analytics() {
  return (
    <Container
      maxW={1000}
      my={4}
      className="analytics animate__animated animate__zoomInUp"
    >
      <Grid
        gap={4}
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
        }}
      >
        <GridItem
          className="light-green-border"
          rounded="xl"
          p={2}
          textAlign="center"
        >
          <Heading size="md">How much you have invested so far?</Heading>
          <img
            src="assets/happy.png"
            alt=""
            style={{ display: "block", margin: "0.5rem auto", width: "60px" }}
          />
          <Heading size="lg">Total Investment</Heading>
          <Button className="bg-grad" w="full">
            $0
          </Button>
        </GridItem>
        <GridItem
          rounded="xl"
          className="light-green-border"
          position="relative"
          p={2}
          textAlign="center"
        >
          <Heading size="md">Risk Meter</Heading>
          <img
            src="assets/meter.png"
            alt=""
            style={{ display: "block", margin: "0.5rem auto", width: "200px" }}
          />
          <Image
            src="assets/pin.png"
            position="absolute"
            bottom={12}
            height="100px"
            transform="rotate(45deg)"
            left="55%"
          />
        </GridItem>
        <GridItem
          rounded="xl"
          className="light-green-border"
          p={2}
          textAlign="center"
        >
          <Heading size="md">How much you have withdrawn so far?</Heading>
          <img
            src="assets/sad.png"
            alt=""
            style={{ display: "block", margin: "0.5rem auto", width: "60px" }}
          />
          <Heading size="lg">Total Earned</Heading>
          <Button className="bg-grad" w="full">
            $0
          </Button>
        </GridItem>
      </Grid>

      <Box
        mt={8}
        boxShadow="0 0 5px 1px #47bd4b"
        rounded="xl"
        p={4}
        textAlign="center"
      >
        <Button className="dark-green txt-light-green" fontSize="xl">
          Recent Trading History
        </Button>

        <Box overflowX="scroll" pb={32} backdropFilter="blur(5px)">
          <table>
            <thead>
              <tr>
                <th>Transation Table</th>
                <th>Block Number</th>
                <th>Method</th>
                <th>Date</th>
                <th>Amount</th>
                <th>$ SAFUU</th>
                <th>$ BNB</th>
              </tr>
            </thead>
          </table>
        </Box>
      </Box>
    </Container>
  );
}
export default Analytics;
