import {
  Button,
  List,
  ListItemButton,
  ListItemIcon,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import { MyNavbar, NavMenu, ListItems, ListText } from "./Navbar.styled";
import {
  AiOutlineHome,
  AiOutlineLogin,
  AiOutlineUserAdd,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { MdOutlineContactPage } from "react-icons/md";
import { useRouter } from "next/router";

const Navbar = () => {
  const [animate, setAnimate] = useState(false);
  const router = useRouter();

  const handleRouting = (destination) => {
    router.push(destination);
    setAnimate(!animate);
  };

  const animateHandler = () => {
    setAnimate(!animate);
  };

  return (
    <MyNavbar sx={animate && { clipPath: "Circle(200% at 15% 5%)" }}>
      <Stack
        onClick={animateHandler}
        component="button"
        bgcolor="transparent"
        border="none"
        flexDirection="column"
        gap={0.5}
        sx={{
          marginLeft: ".6rem",
          cursor: "pointer",
          padding: "0.5rem",
          width: "max-content",
        }}
      >
        <NavMenu
          sx={
            !animate
              ? { width: "0.5rem" }
              : {
                  transform: "rotate(45deg) translate(2.5px,2px)",
                  width: "0.5rem",
                }
          }
        ></NavMenu>
        <NavMenu
          sx={
            animate && {
              transform: "rotate(-45deg) translateY(0px)",
              width: "1rem",
            }
          }
        ></NavMenu>
        <NavMenu
          sx={
            !animate
              ? { width: "0.5rem", alignSelf: "flex-end" }
              : {
                  transform: "rotate(45deg) translate(-2.5px, -2px)",
                  width: "0.5rem",
                  alignSelf: "flex-end",
                }
          }
        ></NavMenu>
      </Stack>

      <List
        sx={{
          width: "100%",
          color: "white",
          paddingTop: "3rem",
        }}
        component="nav"
      >
        <ListItemButton
          onClick={() => handleRouting("/")}
          component="a"
          sx={ListItems}
        >
          <ListItemIcon>
            <AiOutlineHome style={{ color: "white", fontSize: "18px" }} />
          </ListItemIcon>
          <ListText>Home</ListText>
        </ListItemButton>
        <ListItemButton
          component="a"
          onClick={() => handleRouting("/Login")}
          sx={ListItems}
        >
          <ListItemIcon>
            <AiOutlineLogin style={{ color: "white", fontSize: "18px" }} />
          </ListItemIcon>
          <ListText>Login</ListText>
        </ListItemButton>
        <ListItemButton
          onClick={() => handleRouting("/SignUp")}
          component="a"
          sx={ListItems}
        >
          <ListItemIcon>
            <AiOutlineUserAdd style={{ color: "white", fontSize: "18px" }} />
          </ListItemIcon>
          <ListText>SignUp</ListText>
        </ListItemButton>
        <ListItemButton
          onClick={() => handleRouting("/About")}
          component="a"
          sx={ListItems}
        >
          <ListItemIcon>
            <AiOutlineInfoCircle style={{ color: "white", fontSize: "18px" }} />
          </ListItemIcon>
          <ListText>About</ListText>
        </ListItemButton>
        <ListItemButton
          onClick={() => handleRouting("/Contact")}
          component="a"
          sx={ListItems}
        >
          <ListItemIcon>
            <MdOutlineContactPage
              style={{ color: "white", fontSize: "18px" }}
            />
          </ListItemIcon>
          <ListText>Contact</ListText>
        </ListItemButton>
      </List>
      <Button
        variant="outlined"
        onClick={() => handleRouting("/")}
        sx={{
          color: "white",
          fontFamily: "Space Grotesk",
          position: "absolute",
          left: "2.5rem",
          bottom: "1rem",
        }}
      >
        Spink-Blog
      </Button>
    </MyNavbar>
  );
};

export default Navbar;
