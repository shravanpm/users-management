import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "./User";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios({
      url: "http://localhost:5000/api/user",
      method: "GET",
    }).then((res) => {
      if (res.data.status) {
        console.log(res.data.users);
        setUsers(res.data.users);
      }
    });
  }, []);
  return (
    <Box mt="2em">
      {users.length !== 0 && (
        <Box>
          <SimpleGrid columns={3} spacing={10}>
            {users.map((el) => (
              <User key={el._id} user={el} />
            ))}
          </SimpleGrid>
        </Box>
      )}
    </Box>
  );
};
