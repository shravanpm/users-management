import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import { SignUp } from "../Components/SignUp";
import { Users } from "../Components/Users";
import { Login } from "../Components/Login";
import RequiredAuth from "../Components/RequiredAuth";
import { Chat } from "../Components/Chat";

export const AllRoutes = () => {
  return (
    <Box mt="2em">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <RequiredAuth>
              <Users />
            </RequiredAuth>
          }
        ></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
      </Routes>
    </Box>
  );
};
