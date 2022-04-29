import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import Image from "next/image";

export const MyArticleTitle = styled(Typography)({
  fontFamily: "Space Grotesk",
  fontSize: "28px",
  fontWeight: "500",
  color: "#888888",
  margin: "2rem auto",
  textAlign: "center",
  position: "relative",
  width: "max-content",
  height: "max-content",
  "&:after": {
    content: '""',
    position: "absolute",
    height: "3px",
    width: "6rem",
    backgroundColor: "#999999",
    bottom: "0",
    left: "0%",
  },
});

export const MyArticleText = styled(Typography)({
  fontFamily: "Space Grotesk",
  lineHeight: "32px",
  fontSize: "14px",
  fontWeight: "400",
  color: "#777777",
});

export const MyCommentText = styled(Typography)({
  fontFamily: "Space Grotesk",
  lineHeight: "32px",
  fontSize: "18px",
  fontWeight: "400",
  color: "#777777",
});

export const MyCommentDate = styled(Typography)({
  fontFamily: "Space Grotesk",
  lineHeight: "32px",
  fontSize: "10px",
  fontWeight: "400",
  color: "#777777",
});

export const LikeButton = styled(Button)({
  height: "max-content",
  marginTop: "1rem",
  marginRight: "0.5rem",
  width: "max-content",
  padding: "0.025rem 0.125rem",
  fontFamily: "Space Grotesk",
  fontSize: "10px",
});

export const MyArticleImage = styled(Image)({});
