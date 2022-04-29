import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const GridComponent = styled("div")({
  position: "relative",
  padding: "3rem 1rem",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  minHeight: "70vh",
  marginBottom: "3rem",
  display: "flex",
  backgroundColor: "#0A1A29",
});

export const MyTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "white",
  },
  label: {
    fontFamily: "Space Grotesk",
    color: "white",
  },
  "& .MuiInput-underline:after": {
    color: "white",
  },
  "& .MuiOutlinedInput-root": {
    color: "white",
    fontFamily: "Space Grotesk",
    "& fieldset": {
      borderColor: "white",
      color: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
      color: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
});
