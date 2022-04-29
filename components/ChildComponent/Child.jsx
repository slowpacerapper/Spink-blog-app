import { Button, Card, CardContent } from "@mui/material";
import { Box } from "@mui/system";
import { MyImage } from "./Child.styled";
import {
  MyText,
  MyTextSmall,
} from "../MainContentComponent/MainContentComponent.styled";
import React from "react";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";

const Child = ({ title, createdAt, image, id }) => {
  const matches = useMediaQuery("(max-width:500px)");
  const router = useRouter();

  const handleRoute = () => {
    router.push("/Articles/" + id);
  };

  return (
    <Card
      elevation={8}
      sx={
        matches
          ? { flexFlow: "column", bgcolor: "transparent", marginBottom: "2rem" }
          : {
              display: "flex",
              bgcolor: "transparent",
              // padding: " 0 2rem",
              marginBottom: "2rem",
              height: "100px",
            }
      }
    >
      <Button
        onClick={handleRoute}
        sx={
          matches
            ? {
                width: "100%",
                overflow: "hidden",
                padding: 0,
              }
            : {
                width: "40%",
                overflow: "hidden",
                padding: 0,
                alignItems: "start",
              }
        }
      >
        <CardContent sx={{ padding: 0, minHeight: "100%" }}>
          <MyImage src={image} priority />
        </CardContent>
      </Button>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <MyText>{title}</MyText>
          <MyTextSmall>{createdAt}</MyTextSmall>
        </CardContent>
      </Box>
    </Card>
  );
};

export default Child;
