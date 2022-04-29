import { Grid } from "@mui/material";
import React from "react";
import { Body } from "../../components";
import { Hero } from "../../components";

const Home = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Hero />
        </Grid>
        <Body />
      </Grid>
    </div>
  );
};

export default Home;
