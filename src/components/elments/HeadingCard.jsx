import { Heading, Text, Box } from "@chakra-ui/react";

function HeadingCard({ heading, text, border = true }) {
  return (
    <Box
      border={border && "1px solid #114e13"}
      textAlign="center"
      rounded="xl"
      w="full"
      py={4}
    >
      <Heading as="h2" size="md">
        {heading}
      </Heading>
      {text ? (
        <Text pt={4} fontSize="lg" fontWeight="bold" color="#07de0f">
          {text}
        </Text>
      ) : (
        ""
      )}
    </Box>
  );
}
export default HeadingCard;
