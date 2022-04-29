import { Grid, Typography } from "@mui/material";
import React from "react";
import { customStyleThree } from "./Body.styled";
import MainContentComponent from "../MainContentComponent/MainContentComponent";
import { categoriesDb } from "../../utils/categoriesDB";
import Child from "../ChildComponent/Child";

const Body = () => {
  return (
    <Grid container item xs={12} spacing={5} sx={{ padding: "2rem" }}>
      <Grid item md={8}>
        {categoriesDb
          .filter((categ) => categ.type === "main")
          .map((category) => {
            return (
              <MainContentComponent
                key={category.id}
                id={category.id}
                title={category.title}
                createdAt={category.createdAt}
                image={category.image}
                category={category.category}
              />
            );
          })}
      </Grid>
      <Grid item md={4}>
        <Typography variant="h6" sx={customStyleThree}>
          New Posts
        </Typography>
        {categoriesDb
          .filter((children) => children.type === "children")
          .map((article) => {
            return (
              <Child
                key={article.id}
                id={article.id}
                title={article.title}
                createdAt={article.createdAt}
                image={article.image}
              />
            );
          })}
      </Grid>
    </Grid>
  );
};

export default Body;
