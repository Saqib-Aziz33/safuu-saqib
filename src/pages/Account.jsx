import { Heading, Text, Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import Countdown from "react-countdown";
import tableData from "../components/util/accountTable.json";

function Account() {
  return (
    <Box py={8} px={[2, 4, 12]}>
      <Grid
        gap={8}
        gridTemplateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
        textAlign="center"
        fontWeight="bold"
      >
        <GridItem>
          <Box className="light-green-border" rounded="xl" p={4}>
            <Text>Your Balance</Text>
            <Heading className="txt-light-green" my={2}>
              $0
            </Heading>
            <Text>0 SAFUU</Text>
          </Box>
        </GridItem>
        <GridItem>
          <Box className="light-green-border" rounded="xl" p={4}>
            <Text>APY</Text>
            <Heading className="txt-light-green" my={2}>
              383,025.8%
            </Heading>
            <Text>Daily ROI 2.28%</Text>
          </Box>
        </GridItem>
        <GridItem>
          <Box className="light-green-border" rounded="xl" p={4}>
            <Text>Next Rebase:</Text>
            <Heading className="txt-light-green" my={2}>
              <Countdown date={Date.now() + 500000000} />
            </Heading>
            <Text>Rebasing...</Text>
          </Box>
        </GridItem>
      </Grid>

      <Box mt={8} className="light-green-border" px={8} py={4} rounded="xl">
        {tableData.map((item) => (
          <HStack key={item.text} justifyContent="space-between" my={4} gap={2}>
            <Heading size="md">{item.text}</Heading>
            <Heading size="md">{item.value}</Heading>
          </HStack>
        ))}
      </Box>
    </Box>
  );
}
export default Account;
