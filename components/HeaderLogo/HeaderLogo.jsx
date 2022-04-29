import { Button, Stack } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";

const HeaderLogo = () => {
  const router = useRouter();

  const handleRouting = (destination) => {
    router.push(destination);
  };
  return (
    <Button
      onClick={() => handleRouting("/")}
      sx={{
        zIndex: "100",
        position: "fixed",
        fontFamily: "Space Grotesk",
        right: "30px",
        top: "38.5px",
        transform: "translateY(-50%)",
        fontWeight: "500",
        fontSize: "16px",
        bgcolor: "#0A1A29",
      }}
      variant="contained"
    >
      Spink
    </Button>
  );
};

export default HeaderLogo;
