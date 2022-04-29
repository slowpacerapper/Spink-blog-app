import { GridComponent, MyTextField } from "./Hero.styled";
import Herobg from "../../public/herobg.jpeg";
import Image from "next/image";
import React from "react";
import {
  Button,
  ButtonGroup,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import { useMediaQuery } from "@mui/material";

const Hero = () => {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <GridComponent container id="hero">
      <Image
        src={Herobg}
        layout="fill"
        objectFit="cover"
        style={{ opacity: "0.4" }}
      />
      <Stack
        direction="column"
        sx={{ zIndex: "10", color: "white", textAlign: "center" }}
      >
        <Typography
          variant="h2"
          sx={
            !matches
              ? {
                  fontFamily: "Space Grotesk",
                  fontWeight: "600",
                  marginBottom: "2rem",
                }
              : {
                  fontSize: "48px",
                  fontWeight: 600,
                  margin: "2rem 0",
                  fontFamily: "Space Grotesk",
                }
          }
        >
          Spink Blog
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{
            fontFamily: "Space Grotesk",
            fontWeight: "400",
            fontSize: "16px",
            width: "60%",
            minWidth: "300px",
            margin: "1rem auto",
          }}
        >
          Spink Blog is a web space that intends to keep you well informed with
          information about its featured categories.
        </Typography>
        <ButtonGroup sx={{ width: "max-content", margin: "0 auto" }}>
          <Button
            href="/About"
            variant="contained"
            sx={{
              width: "8rem",
              margin: "1rem auto",
              bgcolor: "#0A1A29",
              fontFamily: "Space Grotesk",
            }}
          >
            Learn More
          </Button>
          <Button
            href="/Login"
            variant="outlined"
            sx={{
              width: "8rem",
              margin: "1rem auto",
              bgcolor: "white",
              color: "#0A1A29",
              fontFamily: "Space Grotesk",
              borderColor: "#0A1A29",
              "&:hover": { color: "white", borderColor: "white" },
            }}
          >
            Login
          </Button>
        </ButtonGroup>

        <Typography
          variant="h6"
          component="p"
          sx={{
            fontFamily: "Space Grotesk",
            fontWeight: "400",
            fontSize: "16px",
            width: "60%",
            minWidth: "300px",
            margin: "1rem auto",
            marginTop: "2rem",
          }}
        >
          Subscribe to get updates on new information
        </Typography>

        <form
          style={{
            display: "flex",
            flexFlow: "column",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MyTextField
            type="email"
            required
            InputProps={
              !matches
                ? {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Button
                          type="submit"
                          variant="contained"
                          sx={{
                            width: "max-content",
                            fontFamily: "Space Grotesk",
                            position: "absolute",
                            right: "1rem",
                            bgcolor: "#0A1A29",
                          }}
                        >
                          Subscribe
                        </Button>
                      </InputAdornment>
                    ),
                  }
                : null
            }
            sx={{
              borderColor: "white",
              width: "60%",
              height: "3.5rem",
            }}
            id="outlined-size-small"
            label="Subscribe"
            variant="outlined"
          />
          {matches ? (
            <Button
              type="submit"
              variant="contained"
              sx={{
                width: "max-content",
                fontFamily: "Space Grotesk",
                bgcolor: "#0A1A29",
              }}
            >
              Subscribe
            </Button>
          ) : null}
        </form>
      </Stack>
    </GridComponent>
  );
};

export default Hero;
