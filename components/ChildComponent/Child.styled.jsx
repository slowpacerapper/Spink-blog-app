import Image from "next/image";
import styled from "@emotion/styled";

export const MyImage = styled(Image)({
  objectFit: "cover",
  opacity: 0.7,
  transition: "all 0.4s ease-in-out",
  "&:hover": {
    transform: "rotate(5deg) scale(1.2)",
  },
});
