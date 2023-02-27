import { Btn } from "./Button.styled";
const Button = ({ text, type, fun, style, className }) => {
  return (
    <Btn onClick={fun} type={type} theme={style} className={className}>
      {text}
    </Btn>
  );
};

export default Button;
