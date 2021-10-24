import { NavDefaultContainer } from "./styles";
// import { ReactNode } from "react";
import { LinkDefault } from "../LinkDefault";

// type NavProps = {
//   children: ReactNode;
// };

const NavDefault: React.FC = () => {
  return (
    <NavDefaultContainer>
      <LinkDefault title="Home" href="/" />
      <LinkDefault title="Catálogo" href="/catalago" />
      <LinkDefault title="Admin" href="/admin" />
    </NavDefaultContainer>
  );
};

export { NavDefault };
