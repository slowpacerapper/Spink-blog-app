import Image from "next/image";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const MyImage = styled(Image)({
  objectFit: "cover",
  width: "100%",
  maxHeight: "100%",
  opacity: 0.7,
  transition: "all 0.4s ease-in-out",
  "&:hover": {
    transform: "rotate(5deg) scale(1.2)",
  },
});

export const MyText = styled(Typography)({
  fontFamily: "Space Grotesk",
  fontSize: "18px",
  fontWeight: "500",
  color: "#888888",
});

export const MyTextSmall = styled(Typography)({
  fontFamily: "Space Grotesk",
  fontSize: "14px",
  fontWeight: "400",
  color: "#777777",
});

export const customStyle = {
  backgroundColor: "#0A1A29",
  padding: 0,
  maxHeight: "300px",
  maxWidth: "100%",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  borderRadius: "5px",
};

export const cardStyle = {
  width: 1,
  backgroundColor: "transparent",
  padding: "1rem",
  maxHeight: "500px",
  position: "relative",
};

export const buttonStyles = {
  position: "absolute",
  bgcolor: "white",
  color: "#0A1A29",
  bottom: "1rem",
  right: "1rem",
  position: "absolute",
  "&:hover": { color: "white" },
};
