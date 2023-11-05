import { Box, Text } from "@chakra-ui/react";
import React from "react";

export const User = ({ user }) => {
  return (
    <Box boxShadow="outline" p="6" rounded="md" bg="white">
      <Text>{user.name}</Text>
      <Text>{user.email}</Text>
      <Text>{user.phone}</Text>
    </Box>
  );
};
