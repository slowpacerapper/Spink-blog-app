import styled from "@emotion/styled";
import { Button, Grid } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import {
  MyArticleText,
  MyArticleTitle,
} from "../../styles/MyArticles/Articles.styled";

const MyAboutText = styled(MyArticleText)({
  fontSize: "16px",
});

const index = () => {
  const router = useRouter();

  const routeHandler = (destination) => {
    router.push(destination);
  };
  return (
    <Grid
      direction="row"
      justifyContent="center"
      alignItems="center"
      container
      item
      xs={12}
      sx={{ padding: "4rem 0", minHeight: "100vh" }}
    >
      <Grid
        direction="column"
        gap={3}
        container
        item
        xs={10}
        sx={{ margin: "0 auto" }}
      >
        <MyArticleTitle>About Spink</MyArticleTitle>
        <MyAboutText>
          <b>Spink </b> is an organization that specializes in building web apps
          with simple high end user interfaces. This ecommerce web app was
          inspired by some of the beautiful designs found on the dribble
          website.
        </MyAboutText>
        <MyAboutText>
          Although it was built with some custom adjustments but the theme still
          follows fifty to eighty percent of the original design on dribble.
          This web app was created with react and styled with styled components.
          Other dependencies, include, react icons, and some react hooks like
          "useReducer" for the state management.
        </MyAboutText>
        <MyAboutText>
          We are always looking forward to making complex designs easy and
          always ensuring that it is available to users across multiple
          platforms, like mobilephones, desktops and tablets.
        </MyAboutText>
        <MyAboutText>
          If you wish to collaborate with us or have a job for us you can click
          on the{" "}
          <Button onClick={() => routeHandler("/Contact")} variant="outlined">
            Contact
          </Button>{" "}
          link and drop a message. We respond at the fastest possible time and
          our feedbacks are great. We will be sharing more our works soon
          enough. Thank you for choosing Spink!
        </MyAboutText>
      </Grid>
    </Grid>
  );
};

export default index;
