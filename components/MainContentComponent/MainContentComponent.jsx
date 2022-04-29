import {
  Button,
  Card,
  CardContent,
  createTheme,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import {
  MyImage,
  customStyle,
  MyText,
  MyTextSmall,
  cardStyle,
  buttonStyles,
} from "./MainContentComponent.styled";
import { customStyleTwo } from "../BodySection/Body.styled";
import { ThemeProvider } from "@mui/material";
import { useRouter } from "next/router";

const theme = createTheme({
  palette: {
    background: {
      paper: "transparent",
    },
  },
});

const MainContentComponent = ({ title, createdAt, image, category, id }) => {
  const router = useRouter();

  const handleRoute = () => {
    router.push("/Articles/" + id);
  };

  return (
    <Grid sx={{ marginTop: "2rem" }}>
      <Typography sx={customStyleTwo}>{category && category}</Typography>
      <ThemeProvider theme={theme}>
        <Card elevation={8} sx={cardStyle}>
          <CardContent sx={customStyle}>
            <MyImage src={image} priority />
            <Button
              onClick={handleRoute}
              variant="contained"
              size="small"
              sx={buttonStyles}
            >
              Explore
            </Button>
          </CardContent>
          <CardContent>
            <MyText>{title}</MyText>
            <MyTextSmall>{createdAt}</MyTextSmall>
          </CardContent>
        </Card>
      </ThemeProvider>
    </Grid>
  );
};

export default MainContentComponent;
