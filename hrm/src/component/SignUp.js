import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Avatar, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import backgroundImage from "../img/bg.jpg";
import StraightTwoToneIcon from "@mui/icons-material/StraightTwoTone";
import "./signup.css";
//decleration
function SignUp() {
  //implementation of hooks
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [data, setdata] = useState([]);
  //for error
  const getvar = localStorage.getItem("lc1");
  useEffect(() => {
    setdata(JSON.parse(getvar));
  }, [getvar]);
  //func define
  const handle = () => {
    setFirstname("");
    setEmail("");
    setLastname("");
    setPassword("");
    storeLocaleData(firstname, lastname, password, email);
  };
  const storeLocaleData = (firstname, lastname, password, email) => {
      if (!firstname || !lastname || !password || !email) {
      // If any of the fields are empty, do not store the data
      alert('please enter details')
      return;
      }
    const dataVar = {
      id: Math.ceil(Math.random() * 100),
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    };

    let storedData = localStorage.getItem("lc1");
    if (!storedData) {
      storedData = JSON.stringify([dataVar]);
    } else {
      const parsedData = JSON.parse(storedData);
      parsedData.push(dataVar);
      storedData = JSON.stringify(parsedData);
    }

    localStorage.setItem("lc1", storedData);
  };

  return (
    <Container
      fixed
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        minWidth: "100%",
        backgroundImage: `url(${backgroundImage})`, // Set the background image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* //container to wrap */}
      <Box //box to wrap the sign up data
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          width: 400,
          height: 500,
          backgroundColor: "rgba(47, 128, 237, 0.1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 8,
          border: "1px solid orange",
          boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.5)",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <StraightTwoToneIcon />
        </Avatar>
        <Typography component="h1" variant="h5" color={"#F79327"}>
          Sign up
        </Typography>
        <Container
          sx={{
            display: "flex",
            marginTop: 2,
            alignItems: "center",
            flexDirection: "column",
            height: "100vh",
          }}
        >
          <form className="form">
            <TextField
              sx={{
                paddingBottom: 2,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "orange", // Set outline color to orange
                  },
                },
              }}
              variant="outlined"
              color="secondary"
              required
              id="outlined-required"
              label="First Name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              inputProps={{
                style: { color: "orange" }, // Set text color to orange
              }}
              InputLabelProps={{
                style: { color: "orange" }, // Set label color to orange
              }}
            />
            <TextField
              sx={{
                paddingBottom: 2,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "orange", // Set outline color to orange
                  },
                },
              }}
              variant="outlined"
              color="secondary"
              required
              id="outlined-required"
              label="Last Name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              inputProps={{
                style: { color: "orange" }, // Set text color to orange
              }}
              InputLabelProps={{
                style: { color: "orange" }, // Set label color to orange
              }}
            />
            <TextField
              sx={{
                paddingBottom: 2,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "orange", // Set outline color to orange
                  },
                },
              }}
              variant="outlined"
              color="secondary"
              required
              id="outlined-required"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              inputProps={{
                style: { color: "orange" }, // Set text color to orange
              }}
              InputLabelProps={{
                style: { color: "orange" }, // Set label color to orange
              }}
            />
            <TextField
              sx={{
                paddingBottom: 2,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "orange", // Set outline color to orange
                  },
                },
              }}
              variant="outlined"
              color="secondary"
              required
              id="outlined-required"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              inputProps={{
                style: { color: "orange" }, // Set text color to orange
              }}
              InputLabelProps={{
                style: { color: "orange" }, // Set label color to orange
              }}
            />
            <button className="button" onClick={handle}>
              Signup
            </button>
          </form>
        </Container>
      </Box>
    </Container>
  );
}

export default SignUp;
