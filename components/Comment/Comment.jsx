import { Button, Grid, InputAdornment } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MyTextField } from "../Hero/Hero.styled";
import { useMediaQuery } from "@mui/material";

const Comment = ({ handleSubmit }) => {
  const [post, setPost] = useState("");
  const matches = useMediaQuery("(max-width:600px)");
  const date = Date.now();
  const currentDate = new Date(date);

  return (
    <Grid container item xs={10} sx={{ margin: "auto", padding: "2rem 0" }}>
      <form
        onSubmit={(e) => {
          setPost("");
          handleSubmit(e, post, currentDate);
        }}
        style={{
          display: "flex",
          flexFlow: "column",
          gap: "1rem",
          width: "100%",
          margin: "0 auto",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MyTextField
          type="text"
          value={post}
          multiline
          onChange={(e) => {
            setPost(e.target.value);
          }}
          maxRows={3}
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
                        Comment
                      </Button>
                    </InputAdornment>
                  ),
                }
              : null
          }
          sx={{
            borderColor: "white",
            width: "80%",
            height: "3.5rem",
          }}
          id="outlined-size-small"
          label="Comment"
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
              marginTop: "2rem",
            }}
          >
            Comment
          </Button>
        ) : null}
      </form>
    </Grid>
  );
};

export default Comment;
