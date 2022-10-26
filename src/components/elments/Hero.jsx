import {
  Container,
  Box,
  Heading,
  Text,
  Image,
  Button,
  GridItem,
  Grid,
} from "@chakra-ui/react";

function Hero() {
  return (
    <div className="hero">
      <Container maxW={1200} pt={16} minH="100vh">
        <Grid
          gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={4}
        >
          <GridItem>
            <Heading size="xl">
              Welcome to{" "}
              <Text as="span" color="blue.600">
                Boilerplate
              </Text>
            </Heading>
            <Text mt={4}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
              adipisci inventore, dignissimos consequuntur asperiores est atque
              illo rerum ducimus molestiae magnam consequatur neque cupiditate
              praesentium, ex laudantium. Ducimus, eveniet eius. Fugiat dolore
              excepturi at! Quaerat quas atque ex nihil consequatur iste saepe
              natus nisi provident dolorem, cupiditate facilis autem neque?
            </Text>
            <Button colorScheme="facebook" mt={4}>
              Click Me
            </Button>
          </GridItem>
          <GridItem>
            <Box display={{ base: "none", md: "block" }}>
              <Image
                borderRadius="lg"
                maxWidth="500px"
                display="block"
                mx="auto"
                src="assets/hero-img.jpg"
              />
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
}
export default Hero;
