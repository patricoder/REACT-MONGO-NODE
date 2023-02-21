import { Btn } from "./Button.styled";
const Button = ({ text, type, fun }) => {
  return (
    <Btn onClick={fun} type={type}>
      {text}
    </Btn>
  );
};

export default Button;
