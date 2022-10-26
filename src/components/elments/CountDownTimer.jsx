import { Box } from "@chakra-ui/react";
import Countdown from "react-countdown";

function CountDownTimer() {
  return (
    <Box className="time-wrapper">
      <Countdown className="time" date={Date.now() + 500000000} />
    </Box>
  );
}
export default CountDownTimer;
