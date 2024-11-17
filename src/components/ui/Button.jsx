import { ButtonContainer } from "./ui.style";

const btnType = {
  primary: "btn--primary",
  secondary: "btn--secondary",
  outline: "btn--outline",
  danger: "btn--danger",
};

function Button({
  children,
  type = "button",
  onClick,
  variant = "primary",
  className = "",
  ...rest
}) {
  return (
    <ButtonContainer
      onClick={onClick}
      type={type}
      className={`${btnType[variant]} ${className}`}
      {...rest}
    >
      {children}
    </ButtonContainer>
  );
}

export default Button;
