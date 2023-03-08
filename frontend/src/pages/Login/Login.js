import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

import { Button, ErrorMsg } from "../../components";
import {
  Container,
  Form,
  Label,
  Title,
  Wrapper,
  Text,
  Input,
  Image,
} from "./Login.styled";

function Login() {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  };

  useEffect(() => {}, []);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    }
    return errors;
    console.log(errors);
  };

  return (
    <Wrapper>
      <Image src={logo} />
      <Container>
        <Title>Sign in</Title>
        <Form onSubmit={handleSubmit}>
          <Label>
            <Text>e-mail</Text>
            <Input
              value={formValues.email}
              onChange={(e) => handleChange(e)}
              name="email"
            />
            {formErrors.email && <ErrorMsg>{formErrors.email}</ErrorMsg>}
          </Label>
          <Label>
            <Text>password</Text>
            <Input
              value={formValues.password}
              onChange={(e) => handleChange(e)}
              name="password"
            />
            {formErrors.password && <ErrorMsg>{formErrors.password}</ErrorMsg>}
          </Label>
          <Button text={"Login"} className="button" type="submit" />
        </Form>
        <Text className="text-small">or</Text>
        <Text className="text-small">
          <Link to="/register" className="text-link">
            create new account
          </Link>
        </Text>
      </Container>
    </Wrapper>
  );
}

export default Login;
