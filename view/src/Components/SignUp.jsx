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
import { Register } from "../Redux/AuthReducer/action";

export const SignUp = () => {
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
    let resEmail = [email[0], ...splitEmail];
    if (email.length < 2) {
      alert("enter proper email");
      return;
    }

    let phoneLength = user.phone.toString().length;
    if (phoneLength !== 10) {
      alert("enter 10 digit phone number");
      return;
    }

    for (let i = 0; i < resEmail.length; i++) {
      let flag = user.password.includes(resEmail[i]);
      if (flag) {
        alert("name includes in password, it is not allowed");
        return;
      }
    }
    if (user.password !== user.password2) {
      alert("Passwords doesn't match");
      return;
    }
    dispatch(Register({ ...user, userType: "user" })).then((r) => {
      console.log({ r });
      if (r === "REGISTER_SUCCESS") {
        navigate("/");
      } else {
        alert(r.data.message);
      }
    });
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
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            id="name"
            value={user.name || ""}
            onChange={handleUser}
          />
          <FormLabel>Phone</FormLabel>
          <Input
            type="number"
            id="phone"
            value={user.phone || ""}
            onChange={handleUser}
          />
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            id="password"
            value={user.password || ""}
            onChange={handleUser}
          />
          <FormLabel>Confirm Password</FormLabel>
          <Input
            type="password"
            id="password2"
            value={user.password2 || ""}
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
