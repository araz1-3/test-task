import { ErrorText, Input, InputContainer, Label } from "./ui.style";

const TextField = ({ label, type, value, onChange, hasError, options }) => {
  return (
    <InputContainer>
      <Label>{label}</Label> 
        <Input
          type={type}
          value={value}
          onChange={onChange}
          hasError={hasError}
        />
      {hasError && <ErrorText>{hasError}</ErrorText>}
    </InputContainer>
  );
};

export default TextField;
