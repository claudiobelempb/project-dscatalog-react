import { ReactDOM } from "react";
import { Link } from "react-router-dom";
import { LinkDefaultContainer } from "./styles";

type LinkDefaultProps = {
  icon?: ReactDOM;
  title: string;
  target?: "_blank" | "_self";
  linkOnClick?: () => void;
  active?: string;
  href?: string;
};

export const LinkDefault: React.FC<LinkDefaultProps> = ({
  href,
  title,
  target = "_blank",
  linkOnClick,
  icon,
  active,
  children,
}) => {
  const renderLinkDefault = () => {
    return (
      <Link to={""}>
        <LinkDefaultContainer
          href={href}
          title={title}
          className={`${active}`}
          target={target}
        >
          {icon}
          {title}
          {children}
        </LinkDefaultContainer>
      </Link>
    );
  };

  return renderLinkDefault();
};
