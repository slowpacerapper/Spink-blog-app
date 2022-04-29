import { styled } from "@mui/system";

export const MyNavbar = styled("div")({
  backgroundColor: "#0A1A29",
  zIndex: "100",
  position: "fixed",
  padding: "1.5rem 1.25rem",
  clipPath: "Circle(20px at 45px 38.5px)",
  width: 300 + "px",
  minHeight: 100 + "vh",
  boxShadow: "1px 2px 6px rgba(0,0,0,0.2)",
  transition: "all 0.4s ease-in-out",
});

export const NavMenu = styled("span")({
  height: "2px",
  backgroundColor: "white",
  width: "1rem",
  transition: "all 0.4s ease-in-out",
});

export const ListText = styled("p")({
  fontSize: "14px",
  fontWeight: "300",
});

export const ListItems = {
  marginBottom: "1rem",
  "&:hover": { borderRadius: "8px", border: "0.5px solid #f5f5f5" },
};
