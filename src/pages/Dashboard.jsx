import { Grid, GridItem, Button, Heading, Box } from "@chakra-ui/react";
import HeadingCard from "../components/elments/HeadingCard";
import CountDownTimer from "../components/elments/CountDownTimer";

function Dashboard() {
  return (
    <Box className="animate__animated animate__bounceIn">
      <Grid
        textAlign="center"
        w="full"
        gap={4}
        p={[2, 4, 8]}
        gridTemplateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
        ]}
        alignItems="center"
      >
        <GridItem>
          <HeadingCard
            heading="Market Value of Treasury Asset"
            text="$58,638,618"
            border={false}
          />
        </GridItem>
        <GridItem rowSpan={3} border="1px solid #114e13" rounded="xl" py={4}>
          <Button
            className="dark-green"
            textTransform="uppercase"
            fontSize="xl"
          >
            Safuu Price
          </Button>
          <Heading mt={3} className="txt-light-green">
            $1.56
          </Heading>
          <CountDownTimer />
          <Heading fontSize="xl">Rebasing...</Heading>
        </GridItem>
        <GridItem>
          <HeadingCard
            heading="SAFUU Insurance Fund Value"
            border={false}
            text="$4,107"
          />
        </GridItem>

        <GridItem>
          <HeadingCard heading="Total Supply" text="61,634,066.59" />
        </GridItem>
        <GridItem>
          <HeadingCard heading="MarketCap" text="$70,791,303" />
        </GridItem>
        <GridItem>
          <HeadingCard heading="Circulating Supply" text="45,339,173.49" />
        </GridItem>
        <GridItem>
          <HeadingCard heading="Pool Value" text="$9,197,324" />
        </GridItem>

        <GridItem
          mt={8}
          backdropFilter="blur(5px)"
          boxShadow="0 0 5px 1px #47bd4b"
          rounded="xl"
        >
          <HeadingCard heading="# Value of FirePit" text="16,294,893.1 SAFUU" />
        </GridItem>
        <GridItem
          mt={8}
          backdropFilter="blur(5px)"
          boxShadow="0 0 5px 1px #47bd4b"
          rounded="xl"
        >
          <HeadingCard heading="$ Value of FirePit" text="$25,442,385" />
        </GridItem>
        <GridItem
          mt={8}
          backdropFilter="blur(5px)"
          boxShadow="0 0 5px 1px #47bd4b"
          rounded="xl"
        >
          <HeadingCard heading="% FirePit : Supply" text="26.43%" />
        </GridItem>
      </Grid>
    </Box>
  );
}
export default Dashboard;
