import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthReducer/action";

export const Login = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleUser = (e) => {
    const { id, value } = e.target;
    if (id == "phone") {
      let phoneLength = value.toString().length;
      if (phoneLength > 10) {
        return;
      }
    }
    setUser({
      ...user,
      [id]: value,
    });
  };
  const handleSubmit = () => {
    // console.log(user);
    let email = user.email.split("@");
    let splitEmail = email[1].split(".");
    if (email.length < 2) {
      alert("enter proper email");
      return;
    }
    dispatch(login(user)).then((r) => {
      console.log({ r });
      navigate("/");
    });
    /*
    axios({
      url: "http://localhost:5000/api/user/login",
      method: "POST",
      data: user,
    })
      .then((res) => {
        console.log(res.data);
        if (res.data.status) {
          navigate("/");
        } else {
          alert(res.data.message);
        }
      })
      .catch((e) => {
        console.log(e);
      });
      */
  };
  return (
    <Box mt="1em">
      <FormControl>
        <Stack>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            id="email"
            value={user.email || ""}
            onChange={handleUser}
          />

          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            id="password"
            value={user.password || ""}
            onChange={handleUser}
          />

          <Button colorScheme={"teal"} onClick={handleSubmit}>
            Submit
          </Button>
        </Stack>
      </FormControl>
    </Box>
  );
};
