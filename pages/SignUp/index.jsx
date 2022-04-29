import { Button, Grid, InputAdornment, Typography } from "@mui/material";
import React, { useState } from "react";
import { MyTextField } from "../../components/Hero/Hero.styled";
import styled from "@emotion/styled";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useRouter } from "next/router";

const MyLoginHeader = styled(Typography)({
  fontFamily: "Space Grotesk",
  fontSize: "28px",
  fontWeight: "500",
  color: "#888888",
  margin: "0 auto",
  textAlign: "center",
  position: "relative",
  width: "max-content",
  height: "max-content",
  "&:after": {
    content: '""',
    position: "absolute",
    height: "3px",
    width: "4rem",
    backgroundColor: "#999999",
    bottom: "0",
    left: "0%",
  },
});

const customIconStyle = {
  color: "white",
  position: "absolute",
  right: "1rem",
};

const Login = () => {
  const [visibility, setVisibility] = useState(false);
  const [visibilityTwo, setVisibilityTwo] = useState(false);
  const router = useRouter();

  const handleRouting = (destination) => {
    router.push(destination);
  };

  const visibilityHandlerTwo = () => {
    setVisibilityTwo(!visibilityTwo);
  };

  const visibilityHandler = () => {
    setVisibility(!visibility);
  };

  
  return (
    <Grid
      container
      alignItems="center"
      item
      xs={12}
      sx={{ padding: "4rem 0", margin: "0 auto", minHeight: "100vh" }}
    >
      <Grid
        container
        gap={6}
        item
        xs={10}
        sx={{ margin: "0 auto", height: "max-content" }}
      >
        <MyLoginHeader>Spink SignUp</MyLoginHeader>

        <Grid container xs={12} sx={{ margin: "0 auto" }}>
          <form
            style={{
              display: "flex",
              flexFlow: "column",
              gap: "1rem",
              width: "100%",
              margin: "0 auto",
              height: "max-content",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MyTextField
              type="text"
              name="last-name"
              required
              sx={{
                borderColor: "white",
                width: "80%",
                height: "3.5rem",
              }}
              id="outlined-size-small"
              label="Last Name"
              variant="outlined"
            />

            <MyTextField
              type="text"
              name="first-name"
              required
              sx={{
                borderColor: "white",
                width: "80%",
                height: "3.5rem",
              }}
              id="outlined-size-small"
              label="First Name"
              variant="outlined"
            />

            <MyTextField
              type="email"
              name="email"
              required
              sx={{
                borderColor: "white",
                width: "80%",
                height: "3.5rem",
              }}
              id="outlined-size-small"
              label="Email"
              variant="outlined"
            />

            <MyTextField
              type={!visibility ? "password" : "text"}
              name="password"
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="end">
                    {!visibility ? (
                      <Visibility
                        onClick={visibilityHandler}
                        sx={customIconStyle}
                      />
                    ) : (
                      <VisibilityOff
                        onClick={visibilityHandler}
                        sx={customIconStyle}
                      />
                    )}
                  </InputAdornment>
                ),
              }}
              sx={{
                borderColor: "white",
                width: "80%",
                height: "3.5rem",
              }}
              id="outlined-size-small"
              label="Password"
              variant="outlined"
            />
            <MyTextField
              type={!visibilityTwo ? "password" : "text"}
              name="confirm-password"
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="end">
                    {!visibilityTwo ? (
                      <Visibility
                        onClick={visibilityHandlerTwo}
                        sx={customIconStyle}
                      />
                    ) : (
                      <VisibilityOff
                        onClick={visibilityHandlerTwo}
                        sx={customIconStyle}
                      />
                    )}
                  </InputAdornment>
                ),
              }}
              sx={{
                borderColor: "white",
                width: "80%",
                height: "3.5rem",
              }}
              id="outlined-size-small"
              label="Confirm Password"
              variant="outlined"
            />

            <Grid
              container
              item
              direction="row"
              alignItems="center"
              justifyContent="end"
              sx={{
                width: "80%",
              }}
            >
              <Button
                onClick={() => handleRouting("/Login")}
                variant="outlined"
                sx={{
                  width: "max-content",
                  fontFamily: "Space Grotesk",
                  border: "none",
                  fontSize: "14px",
                  color: "white",
                  bgcolor: "#0A1A29",
                }}
              >
                Login
              </Button>
            </Grid>

            <Button
              type="submit"
              onClick={() => handleRouting("/Login")}
              variant="contained"
              sx={{
                border: "1px solid white",
                width: "max-content",
                fontFamily: "Space Grotesk",
                color: "white",
                bgcolor: "#0A1A29",
                marginTop: "2rem",
              }}
            >
              SignUp
            </Button>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
