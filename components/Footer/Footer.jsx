import { Button, ButtonGroup, Grid, Typography } from "@mui/material";
import React from "react";
import { MyTextSmall } from "../MainContentComponent/MainContentComponent.styled";
import styled from "@emotion/styled";
import { BsFacebook, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import { useRouter } from "next/router";

const MyButton = styled(Button)({
  color: "#888888",
  padding: 0,
  fontFamily: "Space Grotesk",
  fontSize: "14px",
  fontWeight: "400",
  justifyContent: "start",
  textTransform: "capitalize",
  transition: "all 0.3s ease",
  "&:hover": { color: "white" },
});

const MyButtonGroup = styled(ButtonGroup)({
  border: "none",
  padding: 0,
});

const MyGrid = styled(Grid)({
  // borderRight: "0.2px solid #999999",
  margin: "0.5rem",
  "&:nth-of-type(4)": { border: "none" },
});

const MyGridTwo = styled(Grid)({
  borderTop: "0.5px solid #999999",
  paddingTop: "1.5rem",
  margin: "1rem",
});

const MyTypo = styled(Typography)({
  fontFamily: "Space Grotesk",
  fontSize: "18px",
  fontWeight: "400",
  color: "#888888",
});

const Footer = () => {
  const router = useRouter();

  const routeHandler = (destination) => {
    router.push(destination);
  };

  return (
    <Grid
      container
      item
      justifyContent="center"
      direction="row"
      xs={12}
      sx={{
        bgcolor: "#0c1e30",
        marginTop: "2rem",
        padding: "1rem 1.5rem",
        paddingBottom: 0,
      }}
    >
      <MyGrid sm={2.7} container direction="column" alignItems="flex-start">
        <MyTypo>SPINK</MyTypo>
        <MyButton href="#">Portfolio</MyButton>
        <MyButton href="#">Support</MyButton>
        <MyButton href="#">Feedback</MyButton>
        <MyButton href="http://github.com/slowpacerapper">Github</MyButton>
      </MyGrid>
      <MyGrid sm={2.7} container direction="column" alignItems="flex-start">
        <MyTypo>COMPANY</MyTypo>
        <MyButton href="#">Projects</MyButton>
        <MyButton href="#">Forum</MyButton>
        <MyButton href="#">Open Source</MyButton>
      </MyGrid>
      <MyGrid sm={3} container direction="column" alignItems="flex-start">
        <MyTypo>SOCIAL</MyTypo>
        <MyButton href="https://web.facebook.com/Marthrixe92/">
          Facebook
        </MyButton>
        <MyButton href="https://www.linkedin.com/in/ayodeji-bakare-08a3851b7/">
          Linkedin
        </MyButton>
        <MyButton href="https://twitter.com/BakareAyodeji14">Twitter</MyButton>
      </MyGrid>
      <MyGrid sm={1} container direction="column" alignItems="flex-start">
        <MyTypo>Navigation</MyTypo>
        <MyButton onClick={() => routeHandler("/About")}>About</MyButton>
        <MyButton onClick={() => routeHandler("/Contact")}>Contact</MyButton>
        <MyButton onClick={() => routeHandler("/Login")}>Login</MyButton>
      </MyGrid>
      <MyGridTwo
        container
        justifyContent="space-between"
        alignItems="center"
        direction="row"
        xs={12}
        gap={3}
      >
        <MyTextSmall sx={{ lineHeight: "24px" }}>
          &copy; Copyright 2022 Spink All Rights Reserved
        </MyTextSmall>
        <Grid item>
          <MyButtonGroup variant="none">
            <MyButton href="http://github.com/slowpacerapper">
              <BsGithub />
            </MyButton>
            <MyButton href="https://web.facebook.com/Marthrixe92/">
              <BsFacebook />
            </MyButton>
            <MyButton href="https://www.linkedin.com/in/ayodeji-bakare-08a3851b7/">
              <BsLinkedin />
            </MyButton>
            <MyButton href="https://twitter.com/BakareAyodeji14">
              <BsTwitter />
            </MyButton>
          </MyButtonGroup>
        </Grid>
      </MyGridTwo>
    </Grid>
  );
};

export default Footer;
