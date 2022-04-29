import { Button, Grid } from "@mui/material";
import ContactImage from "../../public/herobg.jpeg";
import Image from "next/image";
import React from "react";
import { Box } from "@mui/system";
import { LocationOnRounded, PhoneAndroid, Send } from "@mui/icons-material";
import {
  MyArticleText,
  MyCommentText,
} from "../../styles/MyArticles/Articles.styled";
import { MyTextField } from "../../components/Hero/Hero.styled";
import { useMediaQuery } from "@mui/material";
// import emailjs from "@emailjs/browser";

const index = () => {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <Grid container item xs={12} sx={{ minHeight: "100vh" }}>
      <Box
        sx={{
          position: "relative",
          height: "400px",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Image
          style={{ opacity: 0.4 }}
          src={ContactImage}
          layout="fill"
          objectFit="cover"
        />
        <Button
          sx={{
            border: "1px solid white",
            color: "white",
            fontSize: "18px",
            padding: "0.5rem 5rem",
            fontFamily: "Space Grotesk",
          }}
          variant="outlined"
        >
          Contact Us
        </Button>
      </Box>
      <Grid
        direction="row"
        justifyContent="space-between"
        container
        item
        xs={9}
        gap={3}
        sx={{ margin: "0 auto", padding: "5rem 0" }}
      >
        <Grid sx={{ padding: "3rem 0" }} container item xs={12}>
          <MyCommentText sx={{ textAlign: "center", margin: "0 auto" }}>
            Do you want to get in touch?
          </MyCommentText>
        </Grid>
        <Grid item md={2.8} sx={{ margin: "auto" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",

              flexFlow: "column",
            }}
          >
            <Button
              sx={{
                border: "none",
                color: "white",
                fontSize: "14px",
                padding: "0.25rem .5rem",
                fontFamily: "Space Grotesk",
              }}
              variant="outlined"
              startIcon={<PhoneAndroid />}
            >
              Phone
            </Button>
            <MyArticleText sx={{ textAlign: "center" }}>
              +2348134117444
            </MyArticleText>
          </Box>
        </Grid>

        <Grid item md={2.8} sx={{ margin: "auto" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexFlow: "column",
            }}
          >
            <Button
              sx={{
                border: "none",
                color: "white",
                fontSize: "14px",
                padding: "0.25rem .5rem",
                fontFamily: "Space Grotesk",
              }}
              variant="outlined"
              startIcon={<LocationOnRounded />}
            >
              Location
            </Button>
            <MyArticleText sx={{ textAlign: "center" }}>
              No. 44B, Egbe Road, Ejigbo, Lagos, Nigeria
            </MyArticleText>
          </Box>
        </Grid>

        <Grid item md={2.8} sx={{ margin: "auto" }}>
          <Box
            sx={{
              display: "flex",
              flexFlow: "column",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{
                border: "none",
                color: "white",
                fontSize: "14px",
                padding: "0.25rem .5rem",
                fontFamily: "Space Grotesk",
              }}
              variant="outlined"
              startIcon={<PhoneAndroid />}
            >
              Email
            </Button>
            <MyArticleText sx={{ textAlign: "center" }}>
              Slowpacerapper@gmail.com
            </MyArticleText>
          </Box>
        </Grid>
        <Grid direction="row" justifyContent="center" container item xs={12}>
          <MyCommentText sx={{ textAlign: "center", marginBottom: "1rem" }}>
            If you've got any questions, please do not hesitate to send us a
            message
          </MyCommentText>
          <form
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
              required
              sx={{
                borderColor: "white",
                width: "80%",
                height: "3.5rem",
              }}
              id="outlined-size-small"
              label="Your Name"
              variant="outlined"
            />
            <MyTextField
              type="email"
              required
              sx={{
                borderColor: "white",
                width: "80%",
                height: "3.5rem",
              }}
              id="outlined-size-small"
              label="Email Address"
              variant="outlined"
            />
            <textarea
              style={{
                width: "80%",
                minHeight: "200px",
                backgroundColor: "transparent",
                padding: "1.5rem",
                outline: "none",
                color: "white",
                resize: "none",
                border: "1px solid white",
                borderRadius: "5px",
              }}
              name="message"
              placeholder="Message"
            ></textarea>
            <Button
              type="submit"
              sx={{
                border: "1px solid white",
                color: "white",
                fontSize: "14px",
                fontFamily: "Space Grotesk",
              }}
              variant="outlined"
              endIcon={<Send />}
            >
              Send
            </Button>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default index;
