import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

export const Chat = () => {
  const [question, setQuestion] = useState("");

  function handleQuestion(e) {
    const { id, value } = e.target;
    setQuestion(...value);
  }

  function handleSubmit() {}
  return (
    <Box>
      <FormControl>
        <Stack>
          <FormLabel>Write your query</FormLabel>
          <Input
            type="text"
            id="question"
            value={question || ""}
            onChange={handleQuestion}
          />

          <Button colorScheme={"teal"} onClick={handleSubmit}>
            Submit
          </Button>
          <Box border="1px solid teal">
            <Text></Text>
          </Box>
        </Stack>
      </FormControl>
    </Box>
  );
};
