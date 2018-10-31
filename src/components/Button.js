import React from "react";
import { StyledButton } from "./StyledButton";

const ButtonInline = ({ onClick, type = "button", children }) => (
  <Button type={type} className="button-inline" onClick={onClick}>
    {children}
  </Button>
);

const Button = ({ onClick, className, type = "button", children }) => (
  <StyledButton type={type} className={className} onClick={onClick}>
    {children}
  </StyledButton>
);

export default Button;

export { ButtonInline };
