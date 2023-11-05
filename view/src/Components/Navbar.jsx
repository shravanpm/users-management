import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Button
        colorScheme={"teal"}
        onClick={() => {
          navigate("/login");
        }}
        mr="2em"
      >
        Login
      </Button>
      <Button
        colorScheme={"teal"}
        onClick={() => {
          navigate("/signup");
        }}
        mr="2em"
      >
        SignUp
      </Button>
      <Button
        colorScheme={"teal"}
        onClick={() => {
          navigate("/");
        }}
      >
        List
      </Button>
    </Box>
  );
};
