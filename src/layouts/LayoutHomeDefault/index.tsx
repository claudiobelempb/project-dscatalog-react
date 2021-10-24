import { ReactNode } from "react";
import { BrandDefault } from "../../components/BrandDefault";
import { MainDefault } from "../../components/MainDefault";
import { HeaderDefault } from "../../components/HeaderDefault";

import { LayoutHomeContainer } from "./styles";
import { GridDefault } from "../../components/GridDefault";
import { NavDefault } from "../../components/NavDefault";

type LayoutHomeProps = {
  children?: ReactNode;
};

const LayoutHomeDefault: React.FC<LayoutHomeProps> = ({ children }) => {
  return (
    <LayoutHomeContainer>
      <HeaderDefault>
        <GridDefault size={2}>
          <BrandDefault />
          <NavDefault />
        </GridDefault>
      </HeaderDefault>
      <MainDefault>{children}</MainDefault>
    </LayoutHomeContainer>
  );
};

export { LayoutHomeDefault };
