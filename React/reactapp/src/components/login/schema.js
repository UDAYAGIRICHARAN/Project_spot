import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Enter your email"),
  password: Yup.string().required("Enter your password"),
});

export { LoginSchema };
